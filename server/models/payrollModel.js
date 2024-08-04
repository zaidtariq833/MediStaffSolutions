const mongoose = require("mongoose");

const payrollSchemaModel = mongoose.Schema({
  payroll_name: { type: String, required: true },
  payroll_department: { type: String, required: true },
  payroll_hours_worked: { type: Number, required: true },
  payroll_gross_monthly_salary: { type: Number, required: true },
  payroll_tax_bracket: { type: Number, required: true },
  payroll_amount_after_tax_deduction: { type: Number, required: true },
  payroll_other_benefits: { type: String, required: true },
  payroll_overtime_hours_worked: { type: Number, required: true },
  payroll_deductions: { type: Number, required: true },
  payroll_bonus: { type: Number, required: true },
});

module.exports = mongoose.model("payrollSchemaModel", payrollSchemaModel);
