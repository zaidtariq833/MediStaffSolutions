const mongoose = require("mongoose");

const payrollSchemaModel = mongoose.Schema({
  payroll_name: { type: String },
  payroll_department: { type: String },
  payroll_hours_worked: { type: Number },
  payroll_gross_monthly_salary: { type: Number },
  payroll_bonus: { type: Number },
  payroll_deductions: { type: Number },
  payroll_other_benefits: { type: String },
  payroll_overtime_hours: { type: Number },
});

module.exports = mongoose.model("payrollSchemaModel", payrollSchemaModel);
