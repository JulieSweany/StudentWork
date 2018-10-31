-- SP3.5 - Julie Sweany
-- Output information on all gingerbread cookie purchases made in the West side shop. Include date of sale, name of product, and quantity of cookies purchased. 
-- Order results by date.

USE BrendasBakeries;
SELECT 
    Date AS 'Date of Sale',
    Product.Name AS Product,
    Quantity AS 'Number Purchased',
    Shop.Name AS Shop
FROM
    Sale
        JOIN
    SaleLineItem ON Sale.ID = SaleID
        JOIN
    Product ON ProductID = Product.ID
        JOIN
    Shop ON Sale.ShopID = Shop.ID
WHERE
    ShopID = 2 AND ProductID = 8
ORDER BY Date;