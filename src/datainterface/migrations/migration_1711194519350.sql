CREATE TABLE `tracker` (
  `tracker_id` int NOT NULL AUTO_INCREMENT,
  `tracker_name` varchar(45) DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `end_date` timestamp NULL DEFAULT NULL,
  `is_active` tinyint DEFAULT '1',
  PRIMARY KEY (`tracker_id`),
  UNIQUE KEY `tracker_name_UNIQUE` (`tracker_name`)
);
