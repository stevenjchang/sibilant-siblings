drop DATABASE IF EXISTS foodQuest;

CREATE DATABASE foodQuest;

USE foodQuest;

CREATE TABLE users (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  username varchar(64) NOT NULL,
  password varchar(64) NOT NULL,
  location varchar(5) NOT NULL,
  preferences varchar(100) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);

--  NOTE: Add imageUrl field to restaurants table
CREATE TABLE restaurants (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(64) NOT NULL,
  yelpId varchar(200) NOT NULL,
  price varchar(4) NOT NULL,
  rating tinyint(5) unsigned NOT NULL,
  address varchar(100) NOT NULL,
  zip_code varchar(5) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (yelpId)
);

CREATE TABLE quests (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,

  creator bigint(20) unsigned NOT NULL,
  task1 bigint(20) unsigned NOT NULL,
  task1Completed tinyint(1) unsigned NOT NULL,
  task2 bigint(20) unsigned NOT NULL,
  task2Completed tinyint(1) unsigned NOT NULL,
  task3 bigint(20) unsigned NOT NULL,
  task3Completed tinyint(1) unsigned NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (creator) REFERENCES users(id),

  FOREIGN KEY (task1) REFERENCES restaurants(id),
  FOREIGN KEY (task2) REFERENCES restaurants(id),
  FOREIGN KEY (task3) REFERENCES restaurants(id)
);


CREATE TABLE preferences (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,

  cuisine varchar(64) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO users (username, password, location, preferences) VALUES ("Hungry Johnny", "secret", "94131", "Vegetarian");

-- NOTE: This table & seed data are not actually used in the current implementation of the app, but they give an idea of where we were headed.
INSERT INTO preferences (cuisine) VALUES ("Chinese");
INSERT INTO preferences (cuisine) VALUES ("German");
INSERT INTO preferences (cuisine) VALUES ("Japanese");
INSERT INTO preferences (cuisine) VALUES ("Vegetarian");
INSERT INTO preferences (cuisine) VALUES ("Italian");
INSERT INTO preferences (cuisine) VALUES ("Cajun");
INSERT INTO preferences (cuisine) VALUES ("American");
INSERT INTO preferences (cuisine) VALUES ("French");
INSERT INTO preferences (cuisine) VALUES ("Brunch");
INSERT INTO preferences (cuisine) VALUES ("Ice Cream");
