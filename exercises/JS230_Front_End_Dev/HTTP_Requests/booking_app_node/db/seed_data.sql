DROP TABLE IF EXISTS `students`;
DROP TABLE IF EXISTS `bookings`;
DROP TABLE IF EXISTS `staffs`;

CREATE TABLE IF NOT EXISTS `students` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`email`	varchar,
	`name`	varchar
);

INSERT INTO `students` VALUES (1,'esmeralda.weber@huel.biz','Dashawn Bergstrom');
INSERT INTO `students` VALUES (2,'marquise@jacobi.info','Bettie Swaniawski');
INSERT INTO `students` VALUES (3,'keaton@morar.io','Madaline Armstrong');
INSERT INTO `students` VALUES (4,'aniya@dachkuphal.biz','Julius Balistreri');
INSERT INTO `students` VALUES (5,'enrico_prosacco@ortiz.com','Mrs. Randy Roob');

CREATE TABLE IF NOT EXISTS `staffs` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar,
	`email`	varchar
);
INSERT INTO `staffs` VALUES (1,'Fae Kassulke V','ewald@mills.com');
INSERT INTO `staffs` VALUES (2,'Aaron Nitzsche','kali@rosenbaumtremblay.biz');
INSERT INTO `staffs` VALUES (3,'Gia Rice','steve_marvin@bergnaum.co');
INSERT INTO `staffs` VALUES (4,'Esperanza Doyle','jacques@monahanboehm.org');
INSERT INTO `staffs` VALUES (5,'Lacey Kautzer I','gina.harber@ruelturner.io');

CREATE TABLE IF NOT EXISTS `bookings` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`staff_id`	integer,
	`student_email`	text,
	`date`	text,
	`time`	text
);

INSERT INTO `bookings` VALUES (1,1,NULL,'07-01-18','06:10');
INSERT INTO `bookings` VALUES (2,1,NULL,'07-02-18','06:20');
INSERT INTO `bookings` VALUES (3,1,'marquise@jacobi.info','07-03-18','06:30');
INSERT INTO `bookings` VALUES (4,2,NULL,'08-01-18','07:10');
INSERT INTO `bookings` VALUES (5,2,'keaton@morar.io','08-02-18','07:20');
INSERT INTO `bookings` VALUES (6,3,NULL,'09-01-18','08:10');
INSERT INTO `bookings` VALUES (7,3,'aniya@dachkuphal.biz','09-02-18','08:20');
INSERT INTO `bookings` VALUES (8,3,NULL,'09-03-18','08:30');
INSERT INTO `bookings` VALUES (9,3,NULL,'09-04-18','08:40');

DROP TABLE IF EXISTS `booking_sequences`;
CREATE TABLE IF NOT EXISTS `booking_sequences` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`student_email`	text,
	`sequence`	varchar
);
