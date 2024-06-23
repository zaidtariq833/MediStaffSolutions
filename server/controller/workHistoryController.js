const StaffManagementDataScheme = require("../models/workHistoryModel");
const asyncHandler = require("express-async-handler");

const addStaffManagementData = async (req, res) => {
  const staffManagementData = await StaffManagementDataScheme.create(req.body);
  res.status(200).json(staffManagementData);
};

const getAllStaffManagementData = asyncHandler(async (req, res) => {
  const staffManagement = await StaffManagementDataScheme.find();

  if (staffManagement.length >= 0) {
    res.status(200).json(staffManagement);
  } else {
    res.status(401);
    throw new Error("Staff Management Collection Empty");
  }
});

const getSingleStaffManagementData = asyncHandler(async (req, res) => {
  const staffManagement = await StaffManagementDataScheme.findById(req.params.id);

  if (staffManagement) {
    res.status(200).json(staffManagement);
  } else {
    res.status(401);
    throw new Error("Staff Management Not Found");
  }
});
const deleteStaffManagement = asyncHandler(async (req, res) => {
  const staffManagement = await StaffManagementDataScheme.findById(req.params.id);

  if (!staffManagement) {
    throw new Error("Staff Management Not Found!...");
  }
  staffManagement.remove();

  res
    .status(200)
    .json({ message: "Staff Management Data Deleted Successfully!..." });
});

const updateStaffManagement = asyncHandler(async (req, res) => {
  const staffManagement = await StaffManagementDataScheme.findById(req.params.id);

  if (!staffManagement) {
    throw new Error("Staff Management Not Found!...");
  }

  const updateStaffManagement = await StaffManagementDataScheme.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateStaffManagement);
});

module.exports = {
  addStaffManagementData,
  deleteStaffManagement,
  getAllStaffManagementData,
  getSingleStaffManagementData,
  updateStaffManagement,
};
