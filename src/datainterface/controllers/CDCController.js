const fs = require('fs');
const os = require('os');
const path = require('path');

const TrackerController = require('./TrackerController');

class CDCController {
  constructor() {}

  // Tracking folder
  static appDataDir = path.join(os.homedir(), 'qap');
  // Tracking file
  static tracker = path.join(CDCController.appDataDir, 'tracker.trail');

  /**
   * isTrackingEnabled is to check if the tracking file exists.
   * @returns {boolean} - Returns true, if tracking file exists, otherwise false.
   */
  static isTrackingEnabled = () => {
    return fs.existsSync(CDCController.tracker);
  };

  /**
   * createTrackerFile is to create the tracker file.
   */
  static createTrackerFile = () => {
    if (!CDCController.isTrackingEnabled()) {
      if (!fs.existsSync(CDCController.appDataDir)) {
        fs.mkdirSync(CDCController.appDataDir);
      }
      fs.writeFileSync(CDCController.tracker, '');
    }
  };

  /**
   * deleteTrackerFile is to delete the tracker file.
   */
  static deleteTrackerFile = () => {
    if (CDCController.isTrackingEnabled()) {
      fs.unlinkSync(CDCController.tracker);
    }
  };

  /**
   * startTracking is to track the changes to your local database.
   * @param {string} trackerName - A unique name to identify your changes (deltas).
   */
  static startTracking = async (trackerName) => {
    await new TrackerController().startTracking(trackerName);
    CDCController.createTrackerFile();
  };

  /**
   * stopTracking is to stop tracking your data changes.
   * @param {string} trackerName - A unique name to identify your changes (deltas).
   */
  static stopTracking = async (trackerName) => {
    await new TrackerController().stopTracking(trackerName);
  };

  /**
   * closeTracking is to close tracking your data changes. The difference between
   * stopTracking and closeTracking is the value of is_active flag.
   * You have to call closeTracking against each trackings so that you can restore
   * new DB backup using "npm run restore-prod-db" command.
   * @param {string} trackerName - A unique name to identify your changes (deltas).
   */
  static closeTracking = async (trackerName) => {
    const objTC = new TrackerController();
    await objTC.closeTracking(trackerName);

    const logs = await objTC.fetchActiveTrackerLogs();
    if (logs.length === 0) {
      CDCController.deleteTrackerFile();
    }
  };

  /**
   * hasActiveTracker helps to check whether there is any active trackings.
   * @returns{ boolean} - Returns true, if there is any active trackings (is_active is 1), otherwise false.
   */
  static hasActiveTracker = async () => {
    return await new TrackerController().hasActiveTracker();
  };

  /**
   * fetchTrackerLog is to fetch the details of a particular tracking.
   * @param {string} trackerName - A unique name to identify your changes (deltas).
   * @returns {object} - Returns an object of type TrackerModel.
   */
  static fetchTrackerLog = async (trackerName) => {
    return await new TrackerController().fetchTrackerLog(trackerName);
  };

  /**
   * fetchActiveTrackerLogs is to fetch the details of all active trakings.
   * @returns {Array<object>} - Returns an arrays of object of type TrackerModel.
   */
  static fetchActiveTrackerLogs = async () => {
    return await new TrackerController().fetchActiveTrackerLogs();
  };
}

module.exports = CDCController;
