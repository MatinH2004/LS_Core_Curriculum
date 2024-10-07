const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, '../db/development.sqlite3'));

function sleep(time) {
  const stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {
    ;
  }
}

function areSchedulesValid(schedules) {
  return schedules.length > 0 && schedules.every(function(schedule) {
    return schedule.staff_id && schedule.date && schedule.time;
  });
}

function generateSequence() {
  return parseInt(Math.random() * 1000000);
}

/**
 * @api {get} /staff_members Retrieves all available staff members  
 * @apiGroup Staff
 * 
 * @apiSuccess {Object[]} staff_members            List of staff.
 * @apiSuccess {Number}   staff_members.id         ID of staff.
 * @apiSuccess {String}   staff_members.name       Name of staff.
 * @apiSuccess {String}   staff_members.email      Email of staff.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [ { id: 1,
 *         name: 'Fae Kassulke V',
 *         email: 'ewald@mills.com' },
 *       { id: 2,
 *         name: 'Aaron Nitzsche',
 *         email: 'kali@rosenbaumtremblay.biz' }
 *     ]
 * 
 */
router.get('/staff_members', function(req, res, next) {
  db.all('SELECT * FROM STAFFS;', function(err, rows) {
    res.json(rows);
  });
});

/**
 * @api {get} /students Retrieves all registered students
 * @apiGroup Student
 * 
 * @apiSuccess {Object[]} students                 List of registered students.
 * @apiSuccess {Number}   students.id              ID of student.
 * @apiSuccess {String}   students.name            Name of student.
 * @apiSuccess {String}   students.email           Email of student.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [ { id: 1,
 *         name: 'Fae Kassulke V',
 *         email: 'ewald@mills.com' },
 *       { id: 2,
 *         name: 'Aaron Nitzsche',
 *         email: 'kali@rosenbaumtremblay.biz' }
 *     ]
 * 
 */
router.get('/students', function(req, res, next) {
  db.all('SELECT * FROM STUDENTS;', function(err, rows) {
    res.json(rows);
  });
});

/**
 * @api {get} /schedules Retrieves all available schedules  
 * @apiGroup Schedule
 * 
 * @apiSuccess {Object[]} schedules                List of staff schedules.
 * @apiSuccess {Number}   schedules.id             ID of schedule.
 * @apiSuccess {Number}   schedules.staff_id       ID of the staff for the schedule.
 * @apiSuccess {String}   schedules.date           Date of the schedule.
 * @apiSuccess {String}   schedules.time           Time of the scheudle.
 * @apiSuccess {String}   schedules.student_email  Email of the student who booked schedule.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [ { id: 1,
 *         staff_id: 1,
 *         student_email: null,
 *         date: '07-01-18',
 *         time: '06:10' },
 *       { id: 2,
 *         staff_id: 1,
 *         student_email: null,
 *         date: '07-02-18',
 *         time: '06:20' },
 *       { id: 3,
 *         staff_id: 1,
 *         student_email: 'marquise@jacobi.info',
 *         date: '07-03-18',
 *         time: '06:30' }
 *     ]
 */
router.get('/schedules', function(req, res, next) {
  db.all('SELECT * FROM BOOKINGS;', function(err, rows) {
    const rand = Math.random();
    if (rand >= 0.5 && rows.length > 7) {      
      sleep(7000);
    }

    res.json(rows);    
  });
});

/**
 * @api {get} /schedules/:staff_id Retrieves all available schedules for a given staff_id
 * @apiGroup Schedule
 * 
 * @apiParam {Number} id Staff members unique ID.
 *
 * @apiSuccess {Object[]} schedules                List of staff schedules.
 * @apiSuccess {Number}   schedules.id             ID of schedule.
 * @apiSuccess {Number}   schedules.staff_id       ID of the staff for the schedule.
 * @apiSuccess {String}   schedules.date           Date of the schedule.
 * @apiSuccess {String}   schedules.time           Time of the scheudle.
 * @apiSuccess {String}   schedules.student_email  Email of the student who booked schedule.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [ { id: 1,
 *         staff_id: 1,
 *         student_email: null,
 *         date: '07-01-18',
 *         time: '06:10' }
 *     ]
 */
router.get('/schedules/:staff_id', function(req, res, next) {
  db.all(`SELECT * FROM BOOKINGS WHERE staff_id = ${req.params['staff_id']}`, function(err, rows) {
    res.json(rows);
  });
});

/**
 * @api {post} /staff_members Adds a new staff member
 * @apiGroup Staff
 * 
 * @apiParam {String} name (required) Name of staff.
 * @apiParam {String} email (required) Email of staff.
 *
 * @apiSuccess (Success 201) {Number} id         ID of staff.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 CREATED
 *     {
 *       id: 1,
 *     }
 * 
 * @apiError InvalidInput When the staff can not be saved due to invalid inputs.
 * @apiErrorExample {String} InvalidInput Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     'Staff can not be created. Check your inputs.'
 */
router.post('/staff_members', function(req, res, next) {
  const email = req.body['email'];
  const name = req.body['name'];

  if (!email || !name) {
    res.status(400).send('Staff can not be created. Check your inputs');
  } else {
    const result = db.run('INSERT INTO STAFFS (name, email) VALUES ($name, $email);', {
      $name: name,
      $email: email
    }, function(err) {
      res.status(201).json({ id: this.lastID });
    });
  }
});

/**
 * @api {post} /schedules Adds one or more staff schedules
 * @apiGroup Staff
 * 
 * @apiParam {Number} staff_id (required) ID of Staff
 * @apiParam {String} date (required) Date of Schedule
 * @apiParam {String} time (required) Time of Schedule
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "schedules": [{"staff_id": 1, "date": "10-10-10", "time": "12:12"}]
 *     }
 *
 * @apiSuccessExample {String} Success-Response:
 *     HTTP/1.1 201 CREATED
 *     'Schedules added'
 * 
 * @apiError InvalidInput When the schedules can not be saved due to invalid inputs. If more than one schedule is to be added, all schedules must have a valid input. Otherwise, none of the schedules (even those with valid inputs) get saved.
 * @apiErrorExample {String} InvalidInput Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     'Please check your inputs.'
 */
router.post('/schedules', function(req, res, next) {
  const schedules = req.body['schedules'];
  if (areSchedulesValid(schedules)) {
    schedules.forEach(function(schedule) {
      db.run('INSERT INTO BOOKINGS (staff_id, date, time) VALUES ($staff_id, $date, $time);', {
        $staff_id: schedule.staff_id,
        $date: schedule.date,
        $time: schedule.time
      });
    });
    
    res.status(201).send('Schedules added');
  } else {
    res.status(400).send('Please check your inputs');
  }
});

/**
 * @api {post} /bookings Books a staff member schedule
 * @apiGroup Student
 * 
 * @apiParam {Number} id (required) ID of the Schedule
 * @apiParam {String} student_email (required) Email of the student
 *
 * @apiSuccessExample {String} Success-Response:
 *     HTTP/1.1 204 No Content
 * 
 * @apiError ScheduleNotFound When the schedule id provided does not match to an existing schedule or the scehdule is already booked.
 * @apiErrorExample {String} ScheduleNotFound Error-Response:
 *     HTTP/1.1 404 Not Found
 *     'Schedule is either booked or does not exist.'
 *
 * @apiError StudentNotFound When the student email provided does not belong to a registered student
 * @apiErrorExample {String} StudentNotFound Error-Response:
 *     HTTP/1.1 404 Not Found
 *     'Student does not exist; booking_sequence: {sequence}'
 */
router.post('/bookings', function(req, res, next) {
  const email = req.body['student_email'];
  const id = req.body['id'];
  
  const schedule = db.get('SELECT * FROM BOOKINGS WHERE ID = $id and STUDENT_EMAIL IS NULL;', { $id: id }, function(err, row) {
    if (row) {
      const student = db.get('SELECT * FROM STUDENTS WHERE EMAIL = $email;', { $email: email }, function(err, row) {
        if (row) {
          db.run('UPDATE BOOKINGS SET STUDENT_EMAIL = $email WHERE ID = $id;', { $email: email, $id: id });
          res.status(204).send();
        } else {
          const sequence = generateSequence();
          db.get('INSERT INTO BOOKING_SEQUENCES (student_email, sequence) VALUES ($email, $sequence);', { $email: email, $sequence: sequence });
          res.status(404).send(`Student does not exist; booking_sequence: ${sequence}`);
        }
      });    
    } else {
      res.status(404).send('Schedule is either booked or does not exist.');
    }
  });;
});

/**
 * @api {post} /students Adds a student to the database
 * @apiGroup Student
 * 
 * @apiParam {String} email (required) Email of the student
 * @apiParam {String} name (required) Name of the student
 * @apiParam {Number} booking_sequence (required) This is proof that student tried to book a schedule first. Only students with a booking sequence can be added to the database.
 *
 *
 * @apiSuccessExample {String} Success-Response:
 *     HTTP/1.1 201 CREATED
 *     'Successfully added student to the database.''
 * 
 * @apiError InvalidBookingSequence When the student doesn't have a valid booking sequence.
 * @apiErrorExample {String} InvalidBookingSequence Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     'Must have booking sequence.'
 *
 * @apiError InvalidInputs When the student email or name is not provided
 * @apiErrorExample {String} InvalidInputs Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     'Please check your inputs.'
 */
router.post('/students', function(req, res, next) {
  const student_details = req.body;

  db.get('SELECT * FROM BOOKING_SEQUENCES WHERE SEQUENCE = $sequence;', { $sequence: student_details.booking_sequence }, function(err, row) {
    if (row) {
      if (student_details.email && student_details.name) {
        db.run('INSERT INTO STUDENTS (name, email) VALUES ($name, $email);', { $name: student_details.name, $email: student_details.email });
        res.status(201).send('Successfully added student to the database.');
      } else {
        res.status(400).send('Please check your inputs.');
      } 
    } else {
      res.status(403).send('Must have booking sequeunce.');
    }
  });
});

/**
 * @api {get} /bookings Returns all dates with booked schedules
 * @apiGroup Schedule
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     ['07-03-18', '08-02-18']
 */
router.get('/bookings', function(req, res, next) {
  db.all('SELECT * FROM BOOKINGS;', function(err, rows) {
    const dates = rows.filter(function(schedule) {
      return schedule.date && schedule.student_email;
    }).map(function(schedule) {
      return schedule.date;
    }).filter(function(date, index, self) {
      return self.indexOf(date) === index;
    });

    res.json(dates);
  });
});

/**
 * @api {get} /bookings/:date Returns all bookings with details for a given date
 * @apiGroup Schedule
 *
 * @apiParam {String} date (required) This is the date to get the booking details for
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [["Vincent Ortiz","garth@king.org","06:00"],["Laurine Feil","garth@king.org","06:00"]]
 */
router.get('/bookings/:date', function(req, res, next) {
  db.all('SELECT STAFFS.NAME, BOOKINGS.DATE, BOOKINGS.TIME, BOOKINGS.STUDENT_EMAIL FROM BOOKINGS JOIN STAFFS ON BOOKINGS.STAFF_ID = STAFFS.ID;', function(err, rows) {
    const booking_details = rows.filter(function(schedule) {
      return schedule.date === req.params['date'] && schedule.student_email;
    }).map(function(schedule) {
      return [schedule.name, schedule.student_email, schedule.time];
    });

    res.json(booking_details);
  });
});


/**
 * @api {put} /bookings/:booking_id Student cancels a booking
 * @apiGroup Student
 * 
 * @apiParam {Number} booking_id (required) This id the of schedule that the student wants to cancel their booking for.
 * @apiSuccessExample {String} Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError NoBooking When there is no booking on the booking ID provided
 * @apiErrorExample {String} NoBooking Error-Response:
 *     HTTP/1.1 404 Not Found
 *     'There is no booking on the schedule'
 * 
 */
router.put('/bookings/:booking_id', function(req, res, next) {
  db.get('SELECT * FROM BOOKINGS WHERE ID = $id and STUDENT_EMAIL IS NOT NULL;', { $id: req.params['booking_id'] }, function(err, row) {
    if (row) {
      db.run('UPDATE BOOKINGS SET STUDENT_EMAIL = NULL WHERE ID = $id;', { $id: req.params['booking_id'] });
      res.sendStatus(204);
    } else {
      res.status(404).send('There is no booking on the schedule');
    }
  });
});

/**
 * @api {delete} /schedules/:schedule_id Staff cancels schedule
 * @apiGroup Staff
 * 
 * @apiParam {Number} schedule_id (required) This id the of schedule that the staff wants to cancel
 * @apiSuccessExample {String} Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError WithBooking When there is a booking on the schedule to cancel
 * @apiErrorExample {String} WithBooking Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     'Can not delete the schedule. There is a booking.'
 * 
 * @apiError NoSchedule When there is no schedule on the ID provided
 * @apiErrorExample {String} NoSchedule Error-Response:
 *     HTTP/1.1 404 Not Found
 *     'Schedule does not exist.'
 * 
 */
router.delete('/schedules/:schedule_id', function(req, res, next) {
  db.get('SELECT * FROM BOOKINGS WHERE ID = $id;', { $id: req.params['schedule_id'] }, function(err, row) {
    if (row) {
      if (row.student_email) {
        res.status(403).send('Can not delete the schedule. There is a booking.');
      } else {
        db.run('DELETE FROM BOOKINGS WHERE ID = $id;', { $id: req.params['schedule_id'] });
        res.sendStatus(204);
      }
    } else {
      res.status(404).send('Schedule does not exist.');
    }
  });
});

router.get('/reset', function(req, res, next) {
  const sql = fs.readFileSync(path.join(__dirname, '../db/seed_data.sql')).toString();
  db.exec(sql, function(error){
    if (error) {
      res.status(500).send(error);
    }

    res.status(200).send('Database reset successful!');
  });
});

module.exports = router;
