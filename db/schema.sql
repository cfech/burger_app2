DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(99) NOT NULL,
    devoured BOOLEAN, 
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES("Bacon Cheese Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES("Breakfast Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES("Hamburger", false);