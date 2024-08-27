# OAB PC HQCRUDSERVICEPC
KNOWN ISSUES:
https://jira.esteeonline.com/browse/OABHQ-2681

* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page
* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "no api"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"

## Create, udpate, delete service category
* OAB AppHQ Go to Service Categories "visible"
* OAB AppHQ Click add new "Service Category" "visible"
* OAB AppHQ Enter service category details "Test"
* OAB AppHQ Click "create" "Service Category" button from modal
* OAB AppHQ Search for "added" "Service Category"
* OAB AppHQ Get service category details
* OAB AppHQ Assert if service category was "added"
* OAB AppHQ Edit Service Category details
* OAB AppHQ Click "save" "Service Category" button from modal
* OAB AppHQ Search for "edited" "Service Category"
* OAB AppHQ Get service category details
* OAB AppHQ Assert if service category was "edited"
* OAB AppHQ Delete "Service Category" from "modal" "visible"
* OAB AppHQ Confirm "delete" "Service Category" from confirmation modal
* OAB AppHQ Search for "deleted" "Service Category"
* OAB AppHQ Log out from Appointment HQ

## Create, udpate, archive, delete service
* OAB AppHQ Go to Services "visible"
* OAB AppHQ Click add new "Service" "visible"
* OAB AppHQ Enter service details "OAB"
* OAB AppHQ Click "create" "Service" button from modal
* OAB AppHQ Search for "added" "Service"
* OAB AppHQ Get service details
* OAB AppHQ Assert if service was "added"
* OAB AppHQ Edit service details
* OAB AppHQ Click "save" "Service" button from modal
* OAB AppHQ Search for "edited" "Service"
* OAB AppHQ Get service details
* OAB AppHQ Assert if service was "edited"
* OAB AppHQ Archive "Service" from "modal" "visible"
OAB AppHQ Confirm "archive" "Service" from confirmation modal
* OAB AppHQ Switch to Archive tab 
* OAB AppHQ Search for "Archive" "Service" 
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Activate "Service" "visible"
OAB AppHQ Confirm "reactivate" "Service" from confirmation modal
* OAB AppHQ Switch to Active tab
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "Service" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "Service" from confirmation modal
* OAB AppHQ Search for "deleted" "Service"
* OAB AppHQ Log out from Appointment HQ