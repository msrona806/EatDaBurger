--Create database
CREATE DATABASE burger_db;
USE burger_db;

--Create tables
CREATE TABLE burgers;
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured TINYINT, DEFAULT 0
PRIMARY KEY (id)
);


