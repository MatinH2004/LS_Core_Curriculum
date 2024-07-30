// Create a school object.

// The school object uses the same kind of student object as the previous exercise. 
// It has methods that use and update information about the student. 
// Be sure to check out the previous exercise for the other arguments that might be
// needed by the school object.

// Student object:

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

// Implement the following methods for the school object:

// - addStudent: Adds a student by creating a new student and adding the student to a collection of students.
//               The method adds a constraint that the year can only be any of the following values: '1st',
//               '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
// - enrollStudent: Enrolls a student in a course.
// - addGrade: Adds the grade of a student for a course.
// - getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// - courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

// To test your code, use the three student objects listed below. Using the three student objects,
// produce the following values from the getReportCard and courseReport methods respectively.

// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects

const school = {
  students: [],

  addStudent(name, year) {
    const validYears = ['1st', '2nd', '3rd', '4th', '5th'];

    if (!validYears.includes(year)) {
      console.log('Invalid Year.');
    } else {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade(student, courseName, grade) {
    const course = student.listCourses().filter(({name}) => name === courseName)[0]

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.listCourses().forEach(({grade, name}) => {
      console.log(`${name}: ${grade || 'In Progress'}`);
    });
  },

  courseReport(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().find(({name}) => name === courseName);
    }

    const courseStudents = this.students.map(student => {
      const course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(({grade}) => grade);

    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades=`);

      const average = courseStudents.reduce((total, {name, grade}) => {
        console.log(`${name}: ${grade}`);
        return total + grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${average}`);
    }
  },
};

const paul = school.addStudent('Paul', '3rd');
school.enrollStudent(paul, 'Math', 101);
school.enrollStudent(paul, 'Advanced Math', 102);
school.enrollStudent(paul, 'Physics', 202);

school.addGrade(paul, 'Math', 95);
school.addGrade(paul, 'Advanced Math', 90);

console.log(paul);
// {
//   name: 'Paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

const mary = school.addStudent('Mary', '1st');
school.enrollStudent(mary, 'Math', 101);
school.addGrade(mary, 'Math', 91);

console.log(mary);
// {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

const kim = school.addStudent('Kim', '2nd');
school.enrollStudent(kim, 'Math', 101);
school.enrollStudent(kim, 'Advanced Math', 102);

school.addGrade(kim, 'Math', 93);
school.addGrade(kim, 'Advanced Math', 90);

console.log(kim);
// {
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

school.getReportCard(paul);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = Paul: 95
// = Mary: 91
// = Kim: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = Paul: 90
// = Kim: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined