-- Video-12.3-StoredProcedureOUT.sql
-- Intro to Relational Databases by Frank Shoemaker

USE College ;

/* A Stored Procedure that returns
   a value through an OUT parameter */

DROP PROCEDURE IF EXISTS GetStudentGPA;

DELIMITER $$
 
CREATE PROCEDURE GetStudentGPA(IN StudentID INT, OUT outGPA DECIMAL(4,2))
BEGIN
	DECLARE theGPA DECIMAL(4,2) ;
    
    SET theGPA = 
		(SELECT AVG(Registration.Grade)
			FROM
			Student
				INNER JOIN
			Registration ON Registration.StudentID = Student.ID
				WHERE Student.ID = StudentID 
						AND Registration.Grade > 0);
	
    SET outGPA = theGPA ;
    
END $$
DELIMITER ;

-- Run the stored procedure ;

 
CALL GetStudentGPA(1, @GPA) ;

SELECT @GPA as GPA ;

 