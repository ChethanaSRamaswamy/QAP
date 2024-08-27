
CREATE TABLE `data_definitions_multi_values` (
  `data_definition_multi_values_id` int NOT NULL AUTO_INCREMENT,
  `data_definition_id` int NOT NULL,
  `data_key` varchar(45) DEFAULT NULL,
  `data_value` varchar(1024) DEFAULT NULL,
  `set_no` int DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(16) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  `modified_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`data_definition_multi_values_id`),
  KEY `idx_data_definition_id` (`data_definition_id`),
  KEY `idx_set_no` (`set_no`),
  FULLTEXT KEY `idx_data_key` (`data_key`),
  FULLTEXT KEY `idx_data_value` (`data_value`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

ALTER TABLE `data_definitions` 
ADD COLUMN `has_input_set` TINYINT NULL DEFAULT 0 AFTER `platform`,
ADD INDEX `idx_has_input_set` (`has_input_set` ASC) VISIBLE;


ALTER TABLE `helix`.`auto_heal` 
CHANGE COLUMN `target_info` `target_info` TEXT NULL DEFAULT NULL ,
CHANGE COLUMN `parent` `parent` TEXT NULL DEFAULT NULL ,
CHANGE COLUMN `previous_sibiling` `previous_sibiling` TEXT NULL DEFAULT NULL ,
CHANGE COLUMN `next_sibiling` `next_sibiling` TEXT NULL DEFAULT NULL ,
CHANGE COLUMN `first_child` `first_child` TEXT NULL DEFAULT NULL ,
CHANGE COLUMN `last_child` `last_child` TEXT NULL DEFAULT NULL ;

ALTER TABLE `helix`.`auto_heal` 
ADD FULLTEXT INDEX `index7` (`first_child`) VISIBLE;

ALTER TABLE `helix`.`auto_heal` 
ADD FULLTEXT INDEX `index8` (`last_child`) VISIBLE;

ALTER TABLE `helix`.`auto_heal` 
ADD COLUMN `page_url` VARCHAR(512) NULL AFTER `modified_by`,
ADD COLUMN `locator_healed_value` TEXT NULL AFTER `page_url`;
ALTER TABLE `helix`.`auto_heal` 
ADD FULLTEXT INDEX `index9` (`locator_healed_value`) VISIBLE,
ADD INDEX `index10` (`page_url` ASC) VISIBLE;

INSERT INTO `helix`.`locales` (`locale_name`, `locale_prefix`, `region_name`, `created_by`) VALUES ('Russia', 'RU', 'EMEA', 'spattabi');
INSERT INTO `helix`.`locales` (`locale_name`, `locale_prefix`, `region_name`, `created_by`) VALUES ('Philippines ', 'PH', 'APAC', 'spattabi');
--INSERT INTO `helix`.`locales` (`locale_name`, `locale_prefix`, `region_name`, `created_by`) VALUES ('Czech Republic ', 'CZ', 'EMEA', 'spattabi');

CREATE TABLE `features` (
  `feature_id` int NOT NULL AUTO_INCREMENT,
  `feature_name` varchar(45) DEFAULT NULL,
  `feature_prefix` varchar(4) DEFAULT NULL,
  `is_active` tinyint DEFAULT '1',
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(16) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  `modified_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`feature_id`),
  UNIQUE KEY `feature_name_UNIQUE` (`feature_name`),
  UNIQUE KEY `feature_prefix_UNIQUE` (`feature_prefix`),
  KEY `idx_is_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- TODO: fix idx_scen_name index issue  
CREATE TABLE `scenarios` (
  `scenario_id` int NOT NULL AUTO_INCREMENT,
  `scenario_name` varchar(1024) DEFAULT NULL,
  `is_active` tinyint DEFAULT '1',
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(16) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  `modified_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`scenario_id`),
  KEY `idx_is_active` (`is_active`),
  FULLTEXT KEY `idx_scen_name` (`scenario_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;


CREATE TABLE `feature_scenarios` (
  `feature_scenario_id` int NOT NULL AUTO_INCREMENT,
  `feature_id` int NOT NULL,
  `scenario_id` int NOT NULL,
  `feature_scenario_code` varchar(24) DEFAULT NULL,
  `pc_tag` varchar(80) DEFAULT NULL,
  `mobile_tag` varchar(80) DEFAULT NULL,
  `is_active_pc` tinyint DEFAULT '1',
  `is_active_mobile` tinyint DEFAULT '1',
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(16) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  `modified_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`feature_scenario_id`),
  UNIQUE KEY `idx_feature_scenario_code` (`feature_scenario_code`),
  UNIQUE KEY `idx_pc_tag` (`pc_tag`),
  UNIQUE KEY `idx_mobile_tag` (`mobile_tag`),
  KEY `idx_feature_id` (`feature_id`),
  KEY `idx_scenario_id` (`scenario_id`),
  KEY `idx_is_active_pc` (`is_active_pc`),
  KEY `is_active_mobile` (`is_active_mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `test_coverage` (
  `test_coverage_id` int NOT NULL AUTO_INCREMENT,
  `brand_id` int NOT NULL,
  `locale_id` int NOT NULL,
  `feature_scenario_id` int NOT NULL,
  `is_pc` tinyint DEFAULT '1',
  `is_mobile` tinyint DEFAULT '1',
  `is_active_pc` tinyint DEFAULT '1',
  `is_active_mobile` tinyint DEFAULT '1',
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(16) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  `modified_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`test_coverage_id`),
  KEY `idx_brand_id` (`brand_id`),
  KEY `idx_locale_id` (`locale_id`),
  KEY `idx_feat_scen_id` (`feature_scenario_id`),
  KEY `idx_is_pc` (`is_pc`),
  KEY `idx_is_mobile` (`is_mobile`),
  KEY `idx_is_active_pc` (`is_active_pc`),
  KEY `idx_is_active_mobile` (`is_active_mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 22-03-2023
ALTER TABLE `helix`.`brands` 
ADD COLUMN `is_active` TINYINT NULL DEFAULT 1 AFTER `brand_prefix`;

ALTER TABLE `helix`.`locales` 
ADD COLUMN `is_active` TINYINT NULL DEFAULT 1 AFTER `region_name`;

UPDATE `helix`.`locales` SET `locale_name` = 'United Kingdom' WHERE (`locale_id` = '3');
UPDATE `helix`.`locales` SET `locale_name` = 'United States' WHERE (`locale_id` = '1');

-- 27-03-2023
ALTER TABLE `helix`.`feature_scenarios` 
ADD COLUMN `tag` VARCHAR(80) NULL DEFAULT NULL AFTER `modified_by`,
ADD COLUMN `is_pc` TINYINT NULL DEFAULT 1 AFTER `tag`,
ADD COLUMN `is_active` TINYINT NULL DEFAULT 1 AFTER `is_pc`;

ALTER TABLE `helix`.`feature_scenarios` 
DROP INDEX `idx_feature_scenario_code` ,
ADD INDEX `idx_feature_scenario_code` (`feature_scenario_code` ASC) VISIBLE;

ALTER TABLE `helix`.`feature_scenarios` 
DROP COLUMN `is_active_mobile`,
DROP COLUMN `is_active_pc`,
DROP COLUMN `mobile_tag`,
DROP COLUMN `pc_tag`,
DROP INDEX `is_active_mobile` ,
DROP INDEX `idx_is_active_pc` ,
DROP INDEX `idx_mobile_tag` ,
DROP INDEX `idx_pc_tag` ;
;

ALTER TABLE `helix`.`test_coverage` 
DROP COLUMN `is_active_mobile`,
DROP COLUMN `is_mobile`,
CHANGE COLUMN `is_active_pc` `is_active` TINYINT NULL DEFAULT '1' ,
DROP INDEX `idx_is_active_mobile` ,
DROP INDEX `idx_is_mobile` ;


-- Data change
-- StoreLocator to Store Locator


-- 21-04-2023

ALTER TABLE `helix`.`brand_locales` 
DROP INDEX `idx_brand_locale_prefix` ;

update  helix.brand_locales set language = 'en_EN' where brand_locales_id is not null;

ALTER TABLE `helix`.`brand_locales` 
ADD INDEX `idx_brand_locale_prefix` (`brand_locale_prefix` ASC) VISIBLE;

-- ALTER TABLE `helix`.`brand_locales` 
-- CHANGE COLUMN `language` `language` VARCHAR(45) NULL DEFAULT 'en_EN' ,
-- ADD INDEX `idx_language` (`language` ASC) VISIBLE;

-- 29052023
CREATE TABLE `file_downloads` (
  `file_downloads_id` int NOT NULL AUTO_INCREMENT,
  `file_name` varchar(160) DEFAULT NULL,
  `file_type` varchar(8) DEFAULT NULL,
  `feature` varchar(45) DEFAULT NULL,
  `region_name` varchar(8) DEFAULT NULL,
  `operation` char(1) DEFAULT NULL,
  `downloaded_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `downloaded_by` varchar(16) DEFAULT NULL,
  `uploaded_on` timestamp NULL DEFAULT NULL,
  `uploaded_by` varchar(16) DEFAULT NULL,
  `is_outdated` tinyint DEFAULT '0',
  PRIMARY KEY (`file_downloads_id`),
  KEY `idx_file_name` (`file_name`),
  KEY `idx_file_type` (`file_type`),
  KEY `idex_feature` (`feature`),
  KEY `idx_region_name` (`region_name`),
  KEY `idx_operation` (`operation`)
) ENGINE=InnoDB;


-- 09062023

CREATE TABLE `access_information` (
  `access_information_id` int unsigned NOT NULL AUTO_INCREMENT,
  `brand_id` int NOT NULL,
  `display_name` varchar(80) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `iv` varchar(255) DEFAULT NULL,
  `uploaded_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`access_information_id`),
  KEY `idx_brand_id` (`brand_id`),
  KEY `idx_username` (`username`),
  KEY `idx_display_name` (`display_name`)
) ENGINE=InnoDB;

CREATE TABLE `access_information` (
  `access_information_id` int unsigned NOT NULL AUTO_INCREMENT,
  `brand_id` int NOT NULL,
  `display_name` varchar(80) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `iv` varchar(255) DEFAULT NULL,
  `uploaded_by` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`access_information_id`),
  KEY `idx_brand_id` (`brand_id`),
  KEY `idx_username` (`username`),
  KEY `idx_display_name` (`display_name`)
) ENGINE=InnoDB;


/*
truncate auto_heal;
truncate brand_locales;
truncate brands;
truncate data_definitions;
truncate data_definitions_multi_values;
truncate feature_scenarios;
truncate features;
truncate history_data_definitions;
truncate history_locator_definitions;
truncate locales;
truncate locator_definitions;
truncate scenarios;
truncate tag_values;
truncate test_coverage;
*/

-- 04-09-2023
ALTER TABLE `helix`.`auto_heal` 
ADD COLUMN `xcoordinate` INT NULL DEFAULT 0 AFTER `locator_healed_value`,
ADD COLUMN `ycoordinate` INT NULL DEFAULT 0 AFTER `xcoordinate`,
ADD COLUMN `width` INT NULL DEFAULT 0 AFTER `ycoordinate`,
ADD COLUMN `height` INT NULL DEFAULT 0 AFTER `width`;

-- 13092023
ALTER TABLE `helix`.`brands` 
ADD COLUMN `elc_code` TINYINT NULL AFTER `brand_prefix`;

ALTER TABLE `helix`.`locales` 
ADD COLUMN `elc_code` TINYINT NULL AFTER `region_name`;

--29092023
update brands set elc_code =15 where brand_name = 'Aveda';
update brands set elc_code =41 where brand_name = 'Beauty Perks';
update brands set elc_code =5 where brand_name = 'BobbiBrown';
update brands set elc_code =21 where brand_name = 'Bumble';
update brands set elc_code =2 where brand_name = 'Clinique';
update brands set elc_code =10 where brand_name = 'Lamer';
update brands set elc_code =22 where brand_name = 'Darphin';
update brands set elc_code =46 where brand_name = 'DrJart';
update brands set elc_code =4 where brand_name = 'EsteeLauder';
update brands set elc_code =25 where brand_name = 'FredericMalle';
update brands set elc_code =30 where brand_name = 'GlamGlow';
update brands set elc_code =17 where brand_name = 'JoMalone';
update brands set elc_code =12 where brand_name = 'Kilian';
update brands set elc_code =13 where brand_name = 'LabSeries';
update brands set elc_code =1 where brand_name = 'MAC';
update brands set elc_code =3 where brand_name = 'Origins';
update brands set elc_code =28 where brand_name = 'SmashBox';
update brands set elc_code =44 where brand_name = 'TooFaced';

update locales set elc_code =48 where locale_name = 'Argentina';
update locales set elc_code =11 where locale_name = 'Australia';
update locales set elc_code =28 where locale_name = 'Austria';
update locales set elc_code =31 where locale_name = 'Belgium';
update locales set elc_code =75 where locale_name = 'Bolivia';
update locales set elc_code =26 where locale_name = 'Brazil';
update locales set elc_code =27 where locale_name = 'Canada';
update locales set elc_code =39 where locale_name = 'Chile';
update locales set elc_code =7 where locale_name = 'China';
update locales set elc_code =40 where locale_name = 'Colombia';
update locales set elc_code =58 where locale_name = 'Costa Rica';
update locales set elc_code =49 where locale_name = 'Czech Republic';
update locales set elc_code =18 where locale_name = 'Denmark';
update locales set elc_code =76 where locale_name = 'Ecuador';
update locales set elc_code =41 where locale_name = 'El Salvador';
update locales set elc_code =-4 where locale_name = 'European Union';
update locales set elc_code =56 where locale_name = 'Finland';
update locales set elc_code =5 where locale_name = 'France';
update locales set elc_code =2 where locale_name = 'Germany';
update locales set elc_code =22 where locale_name = 'Greece';
update locales set elc_code =42 where locale_name = 'Guatemala';
update locales set elc_code =9 where locale_name = 'HongKong';
update locales set elc_code =46 where locale_name = 'Hungary';
update locales set elc_code =15 where locale_name = 'India';
update locales set elc_code =32 where locale_name = 'Indonesia';
update locales set elc_code =37 where locale_name = 'Israel';
update locales set elc_code =8 where locale_name = 'Italy';
update locales set elc_code =3 where locale_name = 'Japan';
update locales set elc_code =6 where locale_name = 'Korea';
update locales set elc_code =-3 where locale_name = 'Kuwait';
update locales set elc_code =33 where locale_name = 'Malaysia';
update locales set elc_code =25 where locale_name = 'Mexico';
update locales set elc_code =21 where locale_name = 'Middle East';
update locales set elc_code =17 where locale_name = 'Netherlands';
update locales set elc_code =34 where locale_name = 'NewZealand';
update locales set elc_code =43 where locale_name = 'Nicaragua';
update locales set elc_code =24 where locale_name = 'Norway';
update locales set elc_code =44 where locale_name = 'Panama';
update locales set elc_code =54 where locale_name = 'Peru';
update locales set elc_code =52 where locale_name = 'Philippines';
update locales set elc_code =20 where locale_name = 'Poland';
update locales set elc_code =14 where locale_name = 'Portugal';
update locales set elc_code =-2 where locale_name = 'Qatar';
update locales set elc_code =57 where locale_name = 'Romania';
update locales set elc_code =19 where locale_name = 'Russia';
update locales set elc_code =59 where locale_name = 'Saudi Arabia';
update locales set elc_code =16 where locale_name = 'Singapore';
update locales set elc_code =12 where locale_name = 'South Africa';
update locales set elc_code =4 where locale_name = 'Spain';
update locales set elc_code =23 where locale_name = 'Sweden';
update locales set elc_code =29 where locale_name = 'Switzerland';
update locales set elc_code =10 where locale_name = 'Taiwan';
update locales set elc_code =35 where locale_name = 'Thailand';
update locales set elc_code =80 where locale_name = 'TravelBeauty';
update locales set elc_code =30 where locale_name = 'Turkey';
update locales set elc_code =-1 where locale_name = 'United Arab Emirates';
update locales set elc_code =1 where locale_name = 'United Kingdom';
update locales set elc_code =0 where locale_name = 'United States';
update locales set elc_code =73 where locale_name = 'Uruguay';
update locales set elc_code =45 where locale_name = 'Venezuela';
update locales set elc_code =50 where locale_name = 'Vietnam';



INSERT INTO `helix`.`features` (`feature_name`, `is_active`) VALUES ('CheckoutApi', '1');

--28112023
ALTER TABLE `helix`.`brand_locales` ADD COLUMN `enable_mob_sm` TINYINT NULL DEFAULT 0 AFTER `language`;
ALTER TABLE `helix`.`brand_locales` ADD COLUMN `enable_pc_sm` TINYINT NULL DEFAULT 0 AFTER `language`;

-- 29112023
ALTER TABLE `helix`.`file_downloads` 
ADD COLUMN `brand_prefix` VARCHAR(4) NULL AFTER `region_name`,
ADD COLUMN `locale_prefix` VARCHAR(4) NULL AFTER `brand_prefix`;

UPDATE `helix`.`features` SET `feature_prefix` = 'chk' WHERE (`feature_id` = '1');
UPDATE `helix`.`features` SET `feature_prefix` = 'acc' WHERE (`feature_id` = '2');
UPDATE `helix`.`features` SET `feature_prefix` = 'pld' WHERE (`feature_id` = '3');
UPDATE `helix`.`features` SET `feature_prefix` = 'stl' WHERE (`feature_id` = '4');
UPDATE `helix`.`features` SET `feature_prefix` = 'gnf' WHERE (`feature_id` = '5');
UPDATE `helix`.`features` SET `feature_prefix` = 'lty' WHERE (`feature_id` = '6');
UPDATE `helix`.`features` SET `feature_prefix` = 'oab' WHERE (`feature_id` = '7');
UPDATE `helix`.`features` SET `feature_prefix` = 'sch' WHERE (`feature_id` = '8');
UPDATE `helix`.`features` SET `feature_prefix` = 'seo' WHERE (`feature_id` = '9');
UPDATE `helix`.`features` SET `feature_prefix` = 'rmp' WHERE (`feature_id` = '10');
UPDATE `helix`.`features` SET `feature_prefix` = 'rco' WHERE (`feature_id` = '11');
UPDATE `helix`.`features` SET `feature_prefix` = 'vto' WHERE (`feature_id` = '12');
UPDATE `helix`.`features` SET `feature_prefix` = 'cms' WHERE (`feature_id` = '13');
UPDATE `helix`.`features` SET `feature_prefix` = 'lct' WHERE (`feature_id` = '14');
UPDATE `helix`.`features` SET `feature_prefix` = 'fme' WHERE (`feature_id` = '15');
UPDATE `helix`.`features` SET `feature_prefix` = 'pay' WHERE (`feature_id` = '16');
UPDATE `helix`.`features` SET `feature_prefix` = 'arp' WHERE (`feature_id` = '17');
UPDATE `helix`.`features` SET `feature_prefix` = 'opt' WHERE (`feature_id` = '18');
UPDATE `helix`.`features` SET `feature_prefix` = 'acm' WHERE (`feature_id` = '19');
UPDATE `helix`.`features` SET `feature_prefix` = 'anl' WHERE (`feature_id` = '20');
UPDATE `helix`.`features` SET `feature_prefix` = 'rom' WHERE (`feature_id` = '21');
UPDATE `helix`.`features` SET `feature_prefix` = 'bop' WHERE (`feature_id` = '22');
UPDATE `helix`.`features` SET `feature_prefix` = 'off' WHERE (`feature_id` = '23');
UPDATE `helix`.`features` SET `feature_prefix` = 'exm' WHERE (`feature_id` = '24');

