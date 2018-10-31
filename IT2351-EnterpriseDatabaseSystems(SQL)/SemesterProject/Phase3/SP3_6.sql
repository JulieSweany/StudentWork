-- SP3.6 - Julie Sweany
-- Output by ingredient, the number of orders, ingredient name, units, lowest price, highest price, and average price of frequently ordered ingredients. 
-- Order results by number of orders and then by ingredient name.

USE BrendasBakeries;
SELECT 
    COUNT(*) AS 'Number of Orders',
    Ingredient.Name AS Ingredient,
    UnitOfMeasure.Name AS Units,
    MIN(Price) AS 'Lowest Price',
    MAX(Price) AS 'Highest Price',
    ROUND(AVG(Price), 2) AS 'Average Price'
FROM
    OrderLineItem
        JOIN
    Ingredient ON IngredientID = Ingredient.ID
        JOIN
    UnitOfMeasure ON Ingredient.UnitOfMeasureID = UnitOfMeasure.ID
GROUP BY IngredientID
HAVING COUNT(*) > 19
ORDER BY COUNT(*) , Ingredient.Name;