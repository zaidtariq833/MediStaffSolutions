const mongoose = require("mongoose");

const employeeModel = mongoose.Schema({
  EmployeeName: { type: String },
  Department: { type: String },
  Salary: { type: Number },
  OverTimeHours: { type: Number },
  Date: { type: String },
});

module.exports = mongoose.model("employees", employeeModel);
