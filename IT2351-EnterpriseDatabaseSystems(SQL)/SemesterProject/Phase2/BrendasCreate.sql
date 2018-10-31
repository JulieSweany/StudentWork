SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `BrendasBakeries` ;
CREATE SCHEMA IF NOT EXISTS `BrendasBakeries` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
SHOW WARNINGS;
USE `BrendasBakeries` ;

-- -----------------------------------------------------
-- Table `Customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Customer` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `Customer` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `FirstName` VARCHAR(45) NOT NULL ,
  `LastName` VARCHAR(45) NOT NULL ,
  `Email` VARCHAR(45) NOT NULL ,
  `Phone` VARCHAR(10) NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) )
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Employee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Employee` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `Employee` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `FirstName` VARCHAR(45) NOT NULL ,
  `LastName` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) )
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Shop`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shop` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `Shop` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `Name` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) )
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Sale`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Sale` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `Sale` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `CustomerID` INT NULL ,
  `EmployeeID` INT NOT NULL ,
  `ShopID` INT NOT NULL ,
  `Date` DATE NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  INDEX `fk_Sale_Customer1_idx` (`CustomerID` ASC) ,
  INDEX `fk_Sale_Employee1_idx` (`EmployeeID` ASC) ,
  INDEX `fk_Sale_Shop1_idx` (`ShopID` ASC) ,
  CONSTRAINT `fk_Sale_Customer1`
    FOREIGN KEY (`CustomerID` )
    REFERENCES `Customer` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sale_Employee1`
    FOREIGN KEY (`EmployeeID` )
    REFERENCES `Employee` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sale_Shop1`
    FOREIGN KEY (`ShopID` )
    REFERENCES `Shop` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Recipe`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Recipe` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `Recipe` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `Name` VARCHAR(45) NOT NULL ,
  `Quantity` INT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) )
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Product` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `Product` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `Name` VARCHAR(45) NOT NULL ,
  `RecipeID` INT NOT NULL ,
  `Price` DECIMAL(5,2) NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) ,
  INDEX `fk_Product_Recipe1_idx` (`RecipeID` ASC) ,
  UNIQUE INDEX `RecipeID_UNIQUE` (`RecipeID` ASC) ,
  CONSTRAINT `fk_Product_Recipe1`
    FOREIGN KEY (`RecipeID` )
    REFERENCES `Recipe` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `SaleLineItem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SaleLineItem` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `SaleLineItem` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `SaleID` INT NOT NULL ,
  `ProductID` INT NOT NULL ,
  `Quantity` INT NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  INDEX `fk_SaleLineItem_Sale1_idx` (`SaleID` ASC) ,
  INDEX `fk_SaleLineItem_Product1_idx` (`ProductID` ASC) ,
  CONSTRAINT `fk_SaleLineItem_Sale1`
    FOREIGN KEY (`SaleID` )
    REFERENCES `Sale` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SaleLineItem_Product1`
    FOREIGN KEY (`ProductID` )
    REFERENCES `Product` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `UnitOfMeasure`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `UnitOfMeasure` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `UnitOfMeasure` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `Name` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) )
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Ingredient`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ingredient` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `Ingredient` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `UnitOfMeasureID` INT NOT NULL ,
  `Name` VARCHAR(45) NOT NULL ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  PRIMARY KEY (`ID`) ,
  INDEX `fk_Ingredient_UnitOfMeasure1_idx` (`UnitOfMeasureID` ASC) ,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) ,
  CONSTRAINT `fk_Ingredient_UnitOfMeasure1`
    FOREIGN KEY (`UnitOfMeasureID` )
    REFERENCES `UnitOfMeasure` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `IngredientRecipe`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `IngredientRecipe` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `IngredientRecipe` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `RecipeID` INT NOT NULL ,
  `UnitOfMeasureID` INT NOT NULL ,
  `IngredientID` INT NOT NULL ,
  `Quantity` DECIMAL(9,2) NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  INDEX `fk_IngredientRecipe_Recipe1_idx` (`RecipeID` ASC) ,
  INDEX `fk_IngredientRecipe_UnitOfMeasure1_idx` (`UnitOfMeasureID` ASC) ,
  INDEX `fk_IngredientRecipe_Ingredient1_idx` (`IngredientID` ASC) ,
  CONSTRAINT `fk_IngredientRecipe_Recipe1`
    FOREIGN KEY (`RecipeID` )
    REFERENCES `Recipe` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_IngredientRecipe_UnitOfMeasure1`
    FOREIGN KEY (`UnitOfMeasureID` )
    REFERENCES `UnitOfMeasure` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_IngredientRecipe_Ingredient1`
    FOREIGN KEY (`IngredientID` )
    REFERENCES `Ingredient` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Vendor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Vendor` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `Vendor` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `Name` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) )
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Order` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `Order` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `EmployeeID` INT NOT NULL ,
  `VendorID` INT NOT NULL ,
  `Date` DATE NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  INDEX `fk_Order_Employee1_idx` (`EmployeeID` ASC) ,
  INDEX `fk_Order_Vendor1_idx` (`VendorID` ASC) ,
  CONSTRAINT `fk_Order_Employee1`
    FOREIGN KEY (`EmployeeID` )
    REFERENCES `Employee` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_Vendor1`
    FOREIGN KEY (`VendorID` )
    REFERENCES `Vendor` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `OrderLineItem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `OrderLineItem` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `OrderLineItem` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `OrderID` INT NOT NULL ,
  `IngredientID` INT NOT NULL ,
  `Quantity` DECIMAL(5,2) NOT NULL ,
  `Price` DECIMAL(5,2) NOT NULL ,
  `UnitOfMeasureID` INT NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  INDEX `fk_OrderLineItem_Order1_idx` (`OrderID` ASC) ,
  INDEX `fk_OrderLineItem_Ingredient1_idx` (`IngredientID` ASC) ,
  CONSTRAINT `fk_OrderLineItem_Order1`
    FOREIGN KEY (`OrderID` )
    REFERENCES `Order` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OrderLineItem_Ingredient1`
    FOREIGN KEY (`IngredientID` )
    REFERENCES `Ingredient` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `WorksIn`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorksIn` ;

SHOW WARNINGS;
CREATE  TABLE IF NOT EXISTS `WorksIn` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `EmployeeID` INT NOT NULL ,
  `ShopID` INT NOT NULL ,
  PRIMARY KEY (`ID`) ,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) ,
  INDEX `fk_WorksIn_Employee1_idx` (`EmployeeID` ASC) ,
  INDEX `fk_WorksIn_Shop1_idx` (`ShopID` ASC) ,
  CONSTRAINT `fk_WorksIn_Employee1`
    FOREIGN KEY (`EmployeeID` )
    REFERENCES `Employee` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_WorksIn_Shop1`
    FOREIGN KEY (`ShopID` )
    REFERENCES `Shop` (`ID` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
USE `BrendasBakeries` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
