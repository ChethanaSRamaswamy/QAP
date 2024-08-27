# OAB PC HQACLPASSWORDMANAGERPC
* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page
PRECONDTIONS:
Passwordmanager is assigned to Test Brand
Passwordmanager is assigned to all regions by all button
Passwordmanager is assigned to all stores
KNOWN ISSUES:
https://jira.esteeonline.com/browse/OABHQ-2661 - show users from other stores does not work

## Setup for Passwordmanager scenario
* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "noapi"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Search for "passwordmanager" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Set stores according to precondtions "passwordmanager"
* OAB AppHQ Click "save" "User" button from modal
* OAB AppHQ Click add new "User" "visible"
* OAB AppHQ Enter user details "artist"
* OAB AppHQ Click "create" "User" button from modal
* OAB AppHQ Search for "added" "User"
* OAB AppHQ Log out from Appointment HQ

## Passwordmanager flow check and verify if cannot add user.
* OAB AppHQ Log in into Appointment HQ as "passwordmanager" with "api"
* OAB AppHQ Open profile from My Profile icon
* OAB AppHQ Check users assigned counters
* OAB AppHQ Close modal window
* OAB AppHQ Click back to settings icon
* OAB AppHQ Check if user "can" change brand and region
* OAB AppHQ Assert assigned brands and regions
* OAB AppHQ Check if user "can" change store
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
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Click add new "User" "invisible"
* OAB AppHQ Click back to settings icon
* OAB AppHQ Go to SMS Communications "invisible"
 OAB AppHQ Go to Unclosed Appointments "invisible"
* OAB AppHQ Go to Reporting "invisible"
* OAB AppHQ Go to Retailers "invisible"
* OAB AppHQ Go to Import Stores "invisible"
* OAB AppHQ Go to Features "invisible"
* OAB AppHQ Go to Global "invisible"
* OAB AppHQ Go to Datafeeds "visible"
* OAB AppHQ Go to About "visible"
* OAB AppHQ Log out from Appointment HQ

## Check if password manager can reset password and cannot edit or delete user
* OAB AppHQ Log in into Appointment HQ as "passwordmanager" with "noapi"
 OAB AppHQ Select brand, country and "Test OAB" store
 OAB AppHQ Go to Users "visible"
* OAB AppHQ Search users from other stores "visible"
* OAB AppHQ Search for "added" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "invisible"
* OAB AppHQ Delete "User" from "kebab" "invisible"
* OAB AppHQ Reset password in AppHQ with "valid" from "kebab" "click"
* OAB AppHQ Log out from Appointment HQ

## Clean up phase
* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "noapi"
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Search for "added" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "User" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "User" from confirmation modal
* OAB AppHQ Search for "deleted" "User"
* OAB AppHQ Log out from Appointment HQ