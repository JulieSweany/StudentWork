-- SP3-11 - Julie Sweany
-- Create procedure that takes in the customer id for a customer and returns the total amount of that customer's spending.

USE BrendasBakeries ;

-- Create stored procedure

DROP PROCEDURE IF EXISTS TotalCustomerSpending;

DELIMITER $$
 
CREATE PROCEDURE TotalCustomerSpending(IN CustomerID INT, OUT outTotalSpending DECIMAL(8,2))
BEGIN
	DECLARE TotalSpending DECIMAL(8,2) ;
    
    SET TotalSpending = 
		(SELECT SUM(Quantity * Price)
			FROM
			Product 
			JOIN SaleLineItem ON Product.ID = ProductID 
			JOIN Sale ON Sale.ID = SaleID
			JOIN Customer ON Customer.ID = Sale.CustomerID 
		WHERE CustomerID = Customer.ID);
	
    SET outTotalSpending = TotalSpending ;
    
END $$
DELIMITER ;

-- Run the stored procedure

 
CALL TotalCustomerSpending(35, @outTotalSpending) ;

SELECT CONCAT("$", @outTotalSpending) AS 'Total Spending';
