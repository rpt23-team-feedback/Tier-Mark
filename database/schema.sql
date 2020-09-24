DROP DATABASE IF EXISTS humblebundle;

CREATE DATABASE humblebundle;

USE humblebundle;

CREATE TABLE bundle (
  id int NOT NULL AUTO_INCREMENT,
  tier1Id int,
  tier2Id int,
  tier3Id int,
  cost int
)

CREATE TABLE tiers (
  id int NOT NULL AUTO_INCREMENT,
  item0Id int,
  item1Id int,
  item2Id int,
  item3Id int,
  item4Id int,
  item5Id int
);

