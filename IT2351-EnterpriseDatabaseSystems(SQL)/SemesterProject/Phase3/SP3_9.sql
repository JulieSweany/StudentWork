-- SP3.9 - Julie Sweany
-- Output total sales amount grouped by shop. 
-- Order results by dollar amount of total sales.

USE BrendasBakeries;
SELECT 
    Shop.Name AS Shop,
    CONCAT('$', FORMAT(SUM(Quantity * Price), 2)) AS 'Total Sales'
FROM
    Shop
        JOIN
    Sale ON Shop.ID = ShopID
        JOIN
    SaleLineItem ON Sale.ID = SaleID
        JOIN
    Product ON Product.ID = ProductID
GROUP BY Shop
ORDER BY SUM(Quantity * Price);