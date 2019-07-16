DROP DATABASE IF EXISTS burgers_sequelize_db;

CREATE DATABASE burgers_sequelize_db;


USE burgers_sequelize_db;


CREATE TABLE burgers (
  
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  
  burger_name VARCHAR(30),
 
  devoured BOOLEAN DEFAULT false,

  PRIMARY KEY (id)
);