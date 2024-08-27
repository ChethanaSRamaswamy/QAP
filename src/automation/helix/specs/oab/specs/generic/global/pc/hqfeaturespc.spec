# OAB PC HQFEATURESPC
* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page
* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "no api"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Features "visible"
KNOWN ISSUES:
https://jira.esteeonline.com/browse/OABHQ-2528

## Setup for Countermanager scenario
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Search for "countermanager" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Set stores according to precondtions "countermanager"
* OAB AppHQ Click "save" "User" button from modal
* OAB AppHQ Log out from Appointment HQ

## Verify status of Selection of Online Calendar by Name Global status: "on", specific store on then off. 
* OAB AppHQ Check global status of features
* OAB AppHQ Set global status of "Selection of Online Calendar by Name" feature "on"
* OAB AppHQ Click "Selection of Online Calendar by Name" feature
* OAB AppHQ Set specific status of the feature for "Test Brand Test Store" as "on"
* OAB AppHQ Click "save" "feature" button from modal
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Click add new "Schedule" "visible"
* OAB AppHQ Enter schedule details "OAB" "online"
* OAB AppHQ Check if checkbox to "Selection of Online Calendar by Name" is "visible" and status is "off"
* OAB AppHQ "Enable" option to "Selection of Online Calendar by Name"
* OAB AppHQ Click "create" "Schedule" button from modal
* OAB AppHQ Click "save" "timeslots" button from modal
* OAB AppHQ Search for "added" "Schedule"
* OAB AppHQ Get schedule details
* OAB AppHQ Check if checkbox to "Selection of Online Calendar by Name" is "visible" and status is "on"
* OAB AppHQ Delete "Schedule" from "modal" "visible"
* OAB AppHQ Confirm "delete" "Schedule" from confirmation modal
* OAB AppHQ Log out from Appointment HQ

* OAB AppHQ Log in into Appointment HQ as "countermanager" with "no api"
* OAB AppHQ Check if user "can" change store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Check if checkbox to "Selection of Online Calendar by Name" is "visible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ

* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "no api"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Features "visible"
* OAB AppHQ Click "Selection of Online Calendar by Name" feature
* OAB AppHQ Set specific status of the feature for "Test Brand Test Store" as "off"
* OAB AppHQ Click "save" "feature" button from modal
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Check if checkbox to "Selection of Online Calendar by Name" is "visible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ

* OAB AppHQ Log in into Appointment HQ as "countermanager" with "no api"
* OAB AppHQ Check if user "can" change store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Check if checkbox to "Selection of Online Calendar by Name" is "invisible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ

## Verify status of Selection of Online Calendar by Name Global status: "off"
* OAB AppHQ Set global status of "Selection of Online Calendar by Name" feature "off"
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Click add new "Schedule" "visible"
* OAB AppHQ Make schedule "online"
* OAB AppHQ Check if checkbox to "Selection of Online Calendar by Name" is "invisible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Check if checkbox to "Selection of Online Calendar by Name" is "invisible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ

* OAB AppHQ Log in into Appointment HQ as "countermanager" with "no api"
* OAB AppHQ Check if user "can" change store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Schedules "visible"
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Check if checkbox to "Selection of Online Calendar by Name" is "invisible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ


## Verify status of Enable Prepurchase Fields For Appointments Global status: "on", specific store on then off. But created appointment with on preserves status.
* OAB AppHQ Set global status of "Enable Prepurchase Fields For Appointments" feature "on"
* OAB AppHQ Click "Enable Prepurchase Fields For Appointments" feature
* OAB AppHQ Set specific status of the feature for "Test Brand Test Store" as "on"
* OAB AppHQ Click "save" "feature" button from modal
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Select service from appointment modal "create"
* OAB AppHQ Select date and time "future" from appointment modal "create"
* OAB AppHQ Enter customer details and appointment language from appointment modal "create" "not test"
* OAB AppHQ Check if checkbox to "Enable Prepurchase Fields For Appointments" is "visible" and status is "off"
* OAB AppHQ "Enable" option to "Enable Prepurchase Fields For Appointments"
* OAB AppHQ Enter prepucharse details
* OAB AppHQ Click "create" "appointment" button from modal
* OAB AppHQ Search Appointment for a "created by AppHQ" with "no api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Check if checkbox to "Enable Prepurchase Fields For Appointments" is "visible" and status is "on"
* OAB AppHQ Get appointment prepucharse details from modal 
* OAB AppHQ Assert if prepucharse details were added
* OAB AppHQ Close modal window
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Log out from Appointment HQ

* OAB AppHQ Log in into Appointment HQ as "countermanager" with "no api"
* OAB AppHQ Check if user "can" change store
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Check if checkbox to "Enable Prepurchase Fields For Appointments" is "visible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ

* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "no api"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Features "visible"
* OAB AppHQ Click "Enable Prepurchase Fields For Appointments" feature
* OAB AppHQ Set specific status of the feature for "Test Brand Test Store" as "off"
* OAB AppHQ Click "save" "feature" button from modal
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Check if checkbox to "Enable Prepurchase Fields For Appointments" is "visible" and status is "off"
* OAB AppHQ Close modal window
* OAB AppHQ Search Appointment for a "created by AppHQ" with "no api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Check if checkbox to "Enable Prepurchase Fields For Appointments" is "visible" and status is "on"
* OAB AppHQ Close modal window
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Log out from Appointment HQ

* OAB AppHQ Log in into Appointment HQ as "countermanager" with "no api"
* OAB AppHQ Check if user "can" change store
* OAB AppHQ Search Appointment for a "created by AppHQ" with "no api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Check if checkbox to "Enable Prepurchase Fields For Appointments" is "invisible" and status is "any"
* OAB AppHQ Change appointment status to "Cancelled By Customer"
* OAB AppHQ Confirm "confirm" "appointment" from confirmation modal
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Log out from Appointment HQ

## Verify status of Enable Prepurchase Fields For Appointments Global status: "off"
* OAB AppHQ Set global status of "Enable Prepurchase Fields For Appointments" feature "off"
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Select service from appointment modal "create"
* OAB AppHQ Select date and time "future" from appointment modal "create"
* OAB AppHQ Enter customer details and appointment language from appointment modal "create" "not test"
* OAB AppHQ Check if checkbox to "Enable Prepurchase Fields For Appointments" is "invisible" and status is "any"
* OAB AppHQ Click "create" "appointment" button from modal
* OAB AppHQ Search Appointment for a "created by AppHQ" with "no api"
* OAB AppHQ Get appointment details from search result for "pending" appointment
* OAB AppHQ Check if checkbox to "Enable Prepurchase Fields For Appointments" is "invisible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Clear and close searched appointment
* OAB AppHQ Log out from Appointment HQ

* OAB AppHQ Log in into Appointment HQ as "countermanager" with "no api"
* OAB AppHQ Check if user "can" change store
* OAB AppHQ Click "Add Appointment" from footer "visible"
* OAB AppHQ Check if checkbox to "Enable Prepurchase Fields For Appointments" is "invisible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ


## Verify status of Exclusive Service Link Global status: "on", specific store on then off. 
* OAB AppHQ Set global status of "Exclusive Service Link" feature "on"
* OAB AppHQ Click "Exclusive Service Link" feature
* OAB AppHQ Set specific status of the feature for "Test Brand Test Store" as "on"
* OAB AppHQ Click "save" "feature" button from modal
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Services "visible"
* OAB AppHQ Click add new "Service" "visible"
* OAB AppHQ Enter service details "OAB"
* OAB AppHQ Check if checkbox to "Exclusive Service Link" is "visible" and status is "off"
* OAB AppHQ "Enable" option to "Exclusive Service Link"
* OAB AppHQ Click "create" "Service" button from modal
* OAB AppHQ Search for "added" "Service"
* OAB AppHQ Get service details
* OAB AppHQ Check if checkbox to "Exclusive Service Link" is "visible" and status is "on" 
* OAB AppHQ Delete "Service" from "modal" "visible"
* OAB AppHQ Confirm "delete" "Service" from confirmation modal
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Features "visible"
* OAB AppHQ Click "Exclusive Service Link" feature
* OAB AppHQ Set specific status of the feature for "Test Brand Test Store" as "off"
* OAB AppHQ Click "save" "feature" button from modal
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Services "visible"
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Check if checkbox to "Exclusive Service Link" is "visible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ

## Verify status of Exclusive Service Link Global status: "off"
* OAB AppHQ Set global status of "Exclusive Service Link" feature "off"
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Services "visible"
* OAB AppHQ Click add new "Service" "visible"
* OAB AppHQ Check if checkbox to "Exclusive Service Link" is "invisible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Open kebab menu "visible" "any"
* OAB AppHQ Open modal from list "visible"
* OAB AppHQ Check if checkbox to "Exclusive Service Link" is "invisible" and status is "any"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ

## Restore global settings
* OAB AppHQ Restore global status of features