const asyncHandler = require("express-async-handler");
const employeeModel = require("../models/employeeModel");

const getEmployeeData = asyncHandler(async (req, res) => {
  const employee = await employeeModel.find();
  if (employee.length >= 0) {
    res.status(200).json(employee);
  } else {
    res.status(401);
    throw new Error("Employee Collection Not Found");
  }
});

module.exports = {
    getEmployeeData,
};
