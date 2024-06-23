const mongoose = require("mongoose");

const shiftSchedulingSchema = mongoose.Schema({
  shiftScheduling_type: { type: String },
  shiftScheduling_doctor_name: { type: String },
  shiftScheduling_week_day: { type: String },
  shiftScheduling_total_patients: { type: Number },
  shiftScheduling_assigned_branch: { type: String },
  shiftScheduling_dept: { type: String },
});

module.exports = mongoose.model("shiftSchedulingSchema", shiftSchedulingSchema);
