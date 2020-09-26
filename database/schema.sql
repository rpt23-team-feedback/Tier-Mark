DROP DATABASE IF EXISTS humblebundle;

CREATE DATABASE humblebundle;

USE humblebundle;

CREATE TABLE bundle (
  id int NOT NULL AUTO_INCREMENT,
  tierId int,
  cost int
)

CREATE TABLE tiers (
  id int NOT NULL AUTO_INCREMENT,
  itemId int
);

