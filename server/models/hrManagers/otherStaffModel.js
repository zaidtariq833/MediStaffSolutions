const mongoose = require("mongoose");

const otherStaffModel = mongoose.Schema({
  otherStaff_name: { type: String },
  otherStaff_department: { type: String},
  otherStaff_employee_id: { type: String },
  otherStaff_education: { type: String },
  otherStaff_blood_group: { type: String },
  otherStaff_colleagues_engagement: { type: Number },
  otherStaff_experience: { type: Number},
  otherStaff_marital_status: { type: String },
  otherStaff_status: { type: String },
});

module.exports = mongoose.model("otherstaffmodel", otherStaffModel);
