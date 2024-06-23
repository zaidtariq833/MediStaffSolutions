const asyncHandler = require("express-async-handler");
const payrollModel = require("../models/payrollModel");

const addPayrollData = async (req, res) => {
  const payroll = await payrollModel.create(req.body);
  res.status(200).json(payroll);
};

const getPayrollData = asyncHandler(async (req, res) => {
  const payroll = await payrollModel.find();
  if (payroll.length >= 0) {
    res.status(200).json(payroll);
  } else {
    res.status(401);
    throw new Error("Payroll Collection Empty");
  }
});
const getSinglePayrollData = asyncHandler(async (req, res) => {
  const payroll = await payrollModel.findById(req.params.id);
  if (payroll) {
    res.status(200).json(payroll);
  } else {
    res.status(401);
    throw new Error("Payroll Not Found");
  }
});

const deletePayrollData = asyncHandler(async (req, res) => {
  const payroll = await payrollModel.findById(req.params.id);
  if (!payroll) {
    throw new Error("Payroll Data Not Found!...");
  }
  payroll.remove();
  // const updatedGoal = await Client.findByIdAndDelete(req.params.id, {new:true})

  res.status(200).json({ message: "Payroll Data Deleted Successfully!..." });
});

const updatePayrollData = asyncHandler(async (req, res) => {
  const payroll = await payrollModel.findById(req.params.id);
  if (!payroll) {
    throw new Error("Payroll Data Not Found!...");
  }

  const updatePayroll = await payrollModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatePayroll);
});

module.exports = {
  addPayrollData,
  getPayrollData,
  deletePayrollData,
  getSinglePayrollData,
  updatePayrollData,
};
