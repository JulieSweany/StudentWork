-- SP3.7 - Julie Sweany
-- Output customers' IDs, names, email addresses, and phone numbers and the dates and locations of their purchases. 
-- Order results last name of customers.

USE BrendasBakeries;
SELECT 
    Customer.ID AS 'Customer ID',
    CONCAT(LastName, ', ', FirstName) AS Name,
    Email AS 'Email Address',
    CONCAT('(',
            LEFT(Phone, 3),
            ') ',
            SUBSTRING(Phone, 4, 3),
            '-',
            SUBSTRING(Phone, 7, 4)) AS 'Phone Number',
    Date AS 'Purchase Date',
    Shop.Name AS 'Purchase Location'
FROM
    Customer
        JOIN
    Sale ON Customer.ID = CustomerID
        JOIN
    Shop ON Sale.ShopID = Shop.ID
ORDER BY LastName;