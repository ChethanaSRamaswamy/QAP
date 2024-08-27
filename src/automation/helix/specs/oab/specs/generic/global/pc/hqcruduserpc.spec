# OAB PC HQCRUDUSERPC
* OAB AppHQ Initialize Helix
* OAB AppHQ Go to Appointment HQ page

## Create, udpate user superadmin
* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "noapi"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Click add new "User" "visible"
* OAB AppHQ Enter user details "brandadmin"
* OAB AppHQ Click "create" "User" button from modal
* OAB AppHQ Search for "added" "User"
* OAB AppHQ Get user details
* OAB AppHQ Assert if user was "added"
* OAB AppHQ Edit User details
* OAB AppHQ Click "save" "User" button from modal
* OAB AppHQ Search for "edited" "User"
* OAB AppHQ Get user details
* OAB AppHQ Assert if user was "edited"
* OAB AppHQ Close modal window
* OAB AppHQ Log out from Appointment HQ
## Log in as new user
* OAB AppHQ Log in into Appointment HQ with "new user" credencials
* OAB AppHQ Log out from Appointment HQ
## Delete user superadmin
* OAB AppHQ Log in into Appointment HQ as "superadministrator" with "noapi"
* OAB AppHQ Select brand, country and "Test OAB" store
* OAB AppHQ Click "Settings" from footer "visible"
* OAB AppHQ Go to Users "visible"
* OAB AppHQ Search for "edited" "User"
* OAB AppHQ Open kebab menu "visible" "specific"
* OAB AppHQ Delete "User" from "kebab" "visible"
* OAB AppHQ Confirm "delete" "User" from confirmation modal
* OAB AppHQ Search for "deleted" "User"
* OAB AppHQ Log out from Appointment HQ