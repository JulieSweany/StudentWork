-- SP3.8 - Julie Sweany
-- Output list of all ingredients and the recipes in which they are used. Include ingredients currently not included in recipes.
-- Order by ingredient.

USE BrendasBakeries;
SELECT 
    Ingredient.Name AS Ingredient,
    Recipe.Name AS 'Used in recipe for:'
FROM
    Recipe
        JOIN
    IngredientRecipe ON RecipeID = Recipe.ID
        RIGHT JOIN
    Ingredient ON IngredientID = Ingredient.ID
ORDER BY Ingredient.Name;