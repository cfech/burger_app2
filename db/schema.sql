--Dropping database if it exists 
DROP DATABASE IF EXISTS burgers_db;

--Creating database
CREATE DATABASE burgers_db;

--Use this database
USE burgers_db;

--Create bugers table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(99) NOT NULL,
    devoured BOOLEAN, 
    PRIMARY KEY (id)
);

--Initial burger table seeds
INSERT INTO burgers (burger_name, devoured)
VALUES("Bacon Cheese Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES("Breakfast Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES("Hamburger", false);