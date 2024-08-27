#!/bin/bash

export PATH=/bin:/usr/bin:/usr/local/bin
TODAY=`date +"%d%b%Y"` #Backup date

DB_BACKUP_PATH='/local/mysql'
MYSQL_HOST='localhost'
MYSQL_PORT='3306'
MYSQL_USER='root'
MYSQL_PASSWORD='xxxxxx'
DATABASE_NAME='helix'
BACKUP_RETAIN_DAYS=7   #Number of days to keep the backup

mkdir -p ${DB_BACKUP_PATH}/${TODAY}
echo "Backup started for database ${DATABASE_NAME} at `date`"

#Flush the logs and tables
mysql -h ${MYSQL_HOST} \
		  -P ${MYSQL_PORT} \
		  -u ${MYSQL_USER} \
		  -p${MYSQL_PASSWORD} \
		  -e "FLUSH TABLES;FLUSH BINARY LOGS"

#Start MySQL database backup
mysqldump -h ${MYSQL_HOST} \
		  -P ${MYSQL_PORT} \
		  -u ${MYSQL_USER} \
		  -p${MYSQL_PASSWORD} \
		  ${DATABASE_NAME} | gzip > ${DB_BACKUP_PATH}/${TODAY}/${DATABASE_NAME}-${TODAY}.sql.gz

if [ $? -eq 0 ]; then
  echo "Backup for database ${DATABASE_NAME} successfully completed at `date`"
else
  echo "Database backup failed"
fi

#Delete old backup files
#Go back to BACKUP_RETAIN_DAYS day
DBDELDATE=`date +"%d%b%Y" --date="${BACKUP_RETAIN_DAYS} days ago"`

cd ${DB_BACKUP_PATH}
# Check the date difference (not empty string) and if the directory exists, then delete it
if [ ! -z ${DBDELDATE} ] && [ -d ${DBDELDATE} ]; then
    rm -rf ${DBDELDATE}
fi