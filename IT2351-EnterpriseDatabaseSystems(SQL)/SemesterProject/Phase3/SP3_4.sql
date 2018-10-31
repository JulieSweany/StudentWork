-- SP3.4 - Julie Sweany
-- Output list of the first and last names of all employees who have worked at the Downtown location and order by last name

USE BrendasBakeries;
SELECT DISTINCT
    FirstName AS 'First Name', LastName AS 'Last Name'
FROM
    Employee
        JOIN
    WorksIn ON Employee.ID = EmployeeID
WHERE
    ShopID = 1
ORDER BY LastName;