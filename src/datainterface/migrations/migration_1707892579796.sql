CREATE TABLE `tps_access_information` (
  `tps_access_information_id` int unsigned NOT NULL AUTO_INCREMENT,
  `tool_name` varchar(80) DEFAULT NULL,
  `display_name` varchar(80) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `env` varchar(8) DEFAULT NULL,
  `password` varchar(320) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `iv` varchar(255) DEFAULT NULL,
  `uploaded_by` varchar(16) DEFAULT NULL,
  `uploaded_on` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tps_access_information_id`),
  UNIQUE KEY `unq_tool_name_username_env` (`tool_name`,`username`,`env`),
  KEY `idx_tool_name` (`tool_name`),
  KEY `idx_username` (`username`),
  KEY `idx_display_name` (`display_name`),
  KEY `idx_env` (`env`)
);
