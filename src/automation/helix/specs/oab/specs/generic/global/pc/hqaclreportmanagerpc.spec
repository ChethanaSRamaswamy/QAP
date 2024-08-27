# OAB PC HQACLREPORTMANAGERPC
* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page

PRECONDTIONS:
Reportmanager is assigned to Test Brand
Reportmanager is assigned to max one region (current)
Reportmanager is assigned to test OAB store only.
KNOWN ISSUES:
https://jira.esteeonline.com/browse/OABHQ-2671

## Setup for Reportmanager scenario
* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "noapi"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Search for "reportmanager" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Set stores according to precondtions "reportmanager"
* OAB AppHQ Click "save" "User" button from modal
* OAB AppHQ Log out from Appointment HQ

## Reportmanager flow check and verify if cannot change stores
* OAB AppHQ Log in into Appointment HQ as "reportmanager" with "api"
* OAB AppHQ Open profile from My Profile icon
* OAB AppHQ Check users assigned counters
* OAB AppHQ Close modal window
* OAB AppHQ Check if user "can not" change brand and region
* OAB AppHQ Check if user "can not" change store
* OAB AppHQ Assert assigned stores
* OAB AppHQ Click "Dashboard" from footer "invisible"
* OAB AppHQ Click "Schedule" from footer "invisible"
* OAB AppHQ Click "Add Appointment" from footer "invisible"
* OAB AppHQ Click "Search" from footer "invisible"
* OAB AppHQ Click "Settings" from footer "invisible"
* OAB AppHQ Go to Stores "invisible"
* OAB AppHQ Go to Schedules "invisible"
* OAB AppHQ Go to Services "invisible"
* OAB AppHQ Go to Service Categories "invisible"
* OAB AppHQ Go to Users "invisible"
* OAB AppHQ Go to SMS Communications "invisible"
 OAB AppHQ Go to Unclosed Appointments "invisible"
* OAB AppHQ Go to Reporting "visible"
* OAB AppHQ Go to Retailers "invisible"
* OAB AppHQ Go to Import Stores "invisible"
* OAB AppHQ Go to Features "invisible"
* OAB AppHQ Go to Global "invisible"
* OAB AppHQ Go to Datafeeds "visible"
* OAB AppHQ Go to About "visible"
* OAB AppHQ Log out from Appointment HQ