-- SP3.10 - Julie Sweany
-- Output information (Date, OrderID, Employee Name, Vendor Name, Product Name, Quantity, Price, Unit of Measure, Total LIne Amount) for orders placed with vendors. 
-- Order results by date, with most recent ones appearing first.

USE BrendasBakeries;

-- Create the view

CREATE OR REPLACE VIEW OrderingHistory AS
    SELECT 
        Date,
        `Order`.ID AS 'Order Number',
        CONCAT(LastName, ', ', FirstName) AS 'Employee Placing Order',
        Vendor.Name AS Vendor,
        Ingredient.Name AS 'Item Ordered',
        Quantity,
        Price,
        UnitOfMeasure.Name AS 'Per Unit',
        CONCAT('$', FORMAT((Quantity * Price), 2)) AS 'Total Line Amount'
    FROM
        Employee
            JOIN
        `Order` ON Employee.ID = EmployeeID
            JOIN
        Vendor ON VendorID = Vendor.ID
            JOIN
        OrderLineItem ON `Order`.ID = OrderID
            JOIN
        Ingredient ON IngredientID = Ingredient.ID
            JOIN
        UnitOfMeasure ON UnitOfMeasure.ID = Ingredient.UnitOfMeasureID
    ORDER BY Date DESC;

-- Using the view

SELECT * FROM orderinghistory;