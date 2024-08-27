const db = require('../../utilities/db/mysql/mysql_provider');
const TrackerModel = require('../models/TrackerModel');

class TrackerController {
  constructor() {}

  /**
   * startTracking is to track the changes to your local database.
   * @param {string} trackerName - A unique name to identify your changes (deltas).
   */
  async startTracking(trackerName) {
    const params = [trackerName];
    const cSql = `insert into tracker (tracker_name)
                  values (?);`;

    await db.MySQLProvider.insertRecord(cSql, params);
    db.MySQLProvider.disconnect();
  }

  /**
   * stopTracking is to stop tracking your data changes.
   * @param {string} trackerName - A unique name to identify your changes (deltas).
   */
  async stopTracking(trackerName) {
    const params = [trackerName];
    const cSql = `update tracker set end_date = now()
                  where tracker_name = ?`;

    await db.MySQLProvider.insertRecord(cSql, params);
    db.MySQLProvider.disconnect();
  }

  /**
   * closeTracking is to close tracking your data changes. The difference between
   * stopTracking and closeTracking is the value of is_active flag.
   * You have to call closeTracking against each trackings so that you can restore
   * new DB backup using "npm run restore-prod-db" command.
   * @param {string} trackerName - A unique name to identify your changes (deltas).
   */
  async closeTracking(trackerName) {
    const params = [trackerName];
    const cSql = `update tracker set is_active = 0,
                  end_date = COALESCE(end_date, now())
                  where tracker_name = ?`;

    await db.MySQLProvider.insertRecord(cSql, params);
    db.MySQLProvider.disconnect();
  }

  /**
   * hasActiveTracker helps to check whether there is any active trackings.
   * @returns{ boolean} - Returns true, if there is any active trackings (is_active is 1), otherwise false.
   */
  async hasActiveTracker() {
    const qSql = `select count(tracker_id) as count from tracker 
                  where is_active = 1`;

    const results = await db.MySQLProvider.executeQuery(qSql);

    const { count } = results[0];

    db.MySQLProvider.disconnect();
    return count === 0 ? false : true;
  }

  /**
   * fetchTrackerLog is to fetch the details of a particular tracking.
   * @param {string} trackerName - A unique name to identify your changes (deltas).
   * @returns {object} - Returns an object of type TrackerModel.
   */
  async fetchTrackerLog(trackerName) {
    const params = [trackerName];
    const qSql = `select tracker_id, tracker_name, DATE(start_date) as start_date, 
                  DATE(COALESCE(end_date, now())) as end_date,
                  is_active from tracker where tracker_name = ?`;

    const results = await db.MySQLProvider.executeQuery(qSql, params);

    const {
      tracker_id: trackerId,
      start_date: startDate,
      end_date: endDate,
      is_active: isActive,
    } = results[0];

    const log = new TrackerModel({
      trackerId,
      trackerName,
      startDate,
      endDate,
      isActive,
    });

    db.MySQLProvider.disconnect();
    return log;
  }

  /**
   * fetchActiveTrackerLogs is to fetch the details of all active trakings.
   * @returns {Array<object>} - Returns an arrays of object of type TrackerModel.
   */
  async fetchActiveTrackerLogs() {
    const qSql = `select tracker_id, tracker_name, DATE(start_date) as start_date,
                  DATE(end_date) as end_date, is_active
                  from tracker where is_active = 1 order by tracker_name`;

    const results = await db.MySQLProvider.executeQuery(qSql);

    const logs = [];

    for (let i = 0; i < results.length; i++) {
      const {
        tracker_id: trackerId,
        tracker_name: trackerName,
        start_date: startDate,
        end_date: endDate,
        is_active: isActive,
      } = results[i];

      logs.push(
        new TrackerModel({
          trackerId,
          trackerName,
          startDate,
          endDate,
          isActive,
        })
      );
    }

    db.MySQLProvider.disconnect();
    return logs;
  }
}

module.exports = TrackerController;

// (async function () {
//   const objTc = new TrackerController();
//   const name = 'Tracker file';
//   // objTc.startTracking(name);
//   // objTc.stopTracking(name);
//   //   const op = await objTc.fetchActiveTrackerLogs();
//   //   console.log(op);
//   const op = await objTc.fetchTrackerLog(name);
//   console.log(op);
// })();
