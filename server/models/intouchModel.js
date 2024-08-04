const mongoose = require("mongoose");

const shiftSchedulingSchema = mongoose.Schema({
  shiftScheduling_type: { type: String, required : true },
  shiftScheduling_doctor_name: { type: String, required : true },
  shiftScheduling_week_day: { type: String, required : true },
  shiftScheduling_total_patients: { type: Number, required : true },
  shiftScheduling_assigned_branch: { type: String, required : true },
  shiftScheduling_dept: { type: String, required : true },
});

module.exports = mongoose.model("shiftSchedulingSchema", shiftSchedulingSchema);
