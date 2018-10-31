-- Semester Project Phase 2 - Julie Sweany
-- Insert data into each table

USE `BrendasBakeries` ;

-- -----------------------------------------------------
-- Table `Customer`
-- -----------------------------------------------------
insert into Customer (FirstName, LastName, EMail, Phone) values ('Sarah', 'Smith', 'ssmith@isp.com', '2165556534');
insert into Customer (FirstName, LastName, EMail, Phone) values ('Eduardo', 'Egghead', 'EduardoEgghead@college.edu', '5555551862');
insert into Customer (FirstName, LastName, EMail, Phone) values ('Joe', 'Worthington', 'jw123@company.com', '4405552226');

-- -----------------------------------------------------
-- Table `Employee`
-- -----------------------------------------------------
insert into Employee (FirstName, LastName) values ('Bonnie', 'Bee');
insert into Employee (FirstName, LastName) values ('Elaine', 'Emerson');
insert into Employee (FirstName, LastName) values ('Jim', 'Summers');

-- -----------------------------------------------------
-- Table `Shop`
-- -----------------------------------------------------
insert into Shop (Name) values ('Downtown');
insert into Shop (Name) values ('West Side');
insert into Shop (Name) values ('East Side');


-- -----------------------------------------------------
-- Table `Sale`
-- -----------------------------------------------------
insert into Sale (CustomerID, EmployeeID, ShopID, Date) values (2, 3, 2, current_date());
insert into Sale (CustomerID, EmployeeID, ShopID, Date) values (1, 2, 1, current_date());
insert into Sale (CustomerID, EmployeeID, ShopID, Date) values (3, 1, 1, current_date());


-- -----------------------------------------------------
-- Table `Recipe`
-- -----------------------------------------------------
insert into Recipe (Name, Quantity) values ('Bread, Rye', 36);
insert into Recipe (Name, Quantity) values ('Cinnamon Rolls', 96);
insert into Recipe (Name, Quantity) values ('Cookies, Chocolate Chip', 120);


-- -----------------------------------------------------
-- Table `Product`
-- -----------------------------------------------------
insert into Product (Name, RecipeID, Price) values ('Bread, Rye', 1, 4.95);
insert into Product (Name, RecipeID, Price) values ('Cinnamon Rolls', 2, 2.25);
insert into Product (Name, RecipeID, Price) values ('Cookies, Chocolate Chip', 3, 1.25);




-- -----------------------------------------------------
-- Table `SaleLineItem`
-- -----------------------------------------------------
insert into SaleLineItem (SaleID, ProductID, Quantity) values (1, 1, 1);
insert into SaleLineItem (SaleID, ProductID, Quantity) values (2, 3, 3);
insert into SaleLineItem (SaleID, ProductID, Quantity) values (3, 2, 1);


-- -----------------------------------------------------
-- Table `UnitOfMeasure`
-- -----------------------------------------------------
insert into UnitOfMeasure (Name) values ('Gallon');
insert into UnitOfMeasure (Name) values ('Pound');
insert into UnitOfMeasure (Name) values ('Cup');


-- -----------------------------------------------------
-- Table `Ingredient`
-- -----------------------------------------------------
insert into Ingredient (UnitOfMeasureID, Name) values (1, 'Milk');
insert into Ingredient (UnitOfMeasureID, Name) values (2, 'Flour');
insert into Ingredient (UnitOfMeasureID, Name) values (2, 'Butter');


-- -----------------------------------------------------
-- Table `IngredientRecipe`
-- -----------------------------------------------------
insert into IngredientRecipe (RecipeID, UnitOfMeasureID, IngredientID, Quantity) values (1, 2, 2, 7);
insert into IngredientRecipe (RecipeID, UnitOfMeasureID, IngredientID, Quantity) values (2, 2, 2, 5);
insert into IngredientRecipe (RecipeID, UnitOfMeasureID, IngredientID, Quantity) values (1, 2, 3, 3);


-- -----------------------------------------------------
-- Table `Vendor`
-- -----------------------------------------------------
insert into Vendor (Name) values ('Dursley Dairies');
insert into Vendor (Name) values ('Freemont Dairy Farm');
insert into Vendor (Name) values ('Greenville Grainery');


-- -----------------------------------------------------
-- Table `Order`
-- -----------------------------------------------------
insert into `Order` (EmployeeID, VendorID, Date) values (1, 2, current_date());
insert into `Order` (EmployeeID, VendorID, Date) values (2, 3, current_date());
insert into `Order` (EmployeeID, VendorID, Date) values (3, 1, current_date());


-- -----------------------------------------------------
-- Table `OrderLineItem`
-- -----------------------------------------------------
insert into OrderLineItem (OrderID, IngredientID, Quantity, Price, UnitOfMeasureID) values (1, 1, 52, 2.35, 1);
insert into OrderLineItem (OrderID, IngredientID, Quantity, Price, UnitOfMeasureID) values (2, 1, 25, 2.46, 1);
insert into OrderLineItem (OrderID, IngredientID, Quantity, Price, UnitOfMeasureID) values (3, 2, 74, .96, 1);


-- -----------------------------------------------------
-- Table `WorksIn`
-- -----------------------------------------------------
insert into WorksIn (EmployeeID, ShopID) values (1, 1);
insert into WorksIn (EmployeeID, ShopID) values (2, 3);
insert into WorksIn (EmployeeID, ShopID) values (3, 2);

