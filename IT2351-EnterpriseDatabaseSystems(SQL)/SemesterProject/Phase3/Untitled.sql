USE BrendasBakeries;
SELECT 
    Quantity, Price, (Quantity * Price) AS 'Line Item Total'
FROM
    SaleLineItem
        JOIN
    Product ON Product.ID = ProductID
WHERE
    SaleLineItem.ID = 6;