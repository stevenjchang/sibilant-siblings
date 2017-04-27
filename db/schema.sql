drop DATABASE IF EXISTS foodQuest;

CREATE DATABASE foodQuest;

USE foodQuest;

CREATE TABLE users (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  username varchar(64) NOT NULL,
  password varchar(64) NOT NULL,
  location varchar(5) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);
 
CREATE TABLE restaurants (
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(64) NOT NULL,
  priceRange tinyint(4) unsigned NOT NULL,
  rating tinyint(5) unsigned NOT NULL,
  location varchar(5) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE quests (
  id bigint(20) unsigned NOT NULL,

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