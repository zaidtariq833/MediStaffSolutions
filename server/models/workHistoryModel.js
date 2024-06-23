const mongoose = require("mongoose");

const staffManagementSchema = mongoose.Schema({
  staff_management_name: { type: String },
  staff_management_department: { type: String },
  staff_management_employee_id: { type: String },
  staff_management_first_worked: { type: String },
  staff_management_last_worked: { type: String },
  staff_management_oriented: { type: Boolean },
  staff_management_oriented_date: { type: String },
  staff_management_comments: { type: String },
});

module.exports = mongoose.model("staffManagementModel", staffManagementSchema);
