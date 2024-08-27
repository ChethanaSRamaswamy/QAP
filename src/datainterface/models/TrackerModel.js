class TrackerModel {
  constructor({ trackerId, trackerName, startDate, endDate, isActive }) {
    this.trackerId = trackerId;
    this.trackerName = trackerName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isActive = isActive;
  }
}

module.exports = TrackerModel;
