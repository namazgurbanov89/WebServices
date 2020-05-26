/**
* Database for the application
*/
CREATE DATABASE FoodTruck;

/**
* Table to store merchant information and locations
*/
CREATE TABLE `merchants` (
    `id` int NOT NULL AUTO_INCREMENT,
    `applicant` varchar(45) NOT NULL,
    `facilityType` varchar(45) DEFAULT NULL,
    `cnn` int DEFAULT NULL,
    `locationDesc` mediumtext,
    `address` mediumtext NOT NULL,
    `status` enum('APPROVED','REQUESTED','EXPIRED','ISSUED') NOT NULL,
    `foodItems` mediumtext,
    `latitude` double(23,21) NOT NULL,
    `longitude` double(23,20) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `applicant_UNIQUE` (`applicant`),
    KEY `latitude` (`latitude`),
    KEY `longitude` (`longitude`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci