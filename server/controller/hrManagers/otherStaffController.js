const asyncHandler = require("express-async-handler");
const otherStaffModel = require("../../models/hrManagers/otherStaffModel");

const addOtherStaffData = async (req, res) => {
  const otherStaff = await otherStaffModel.create(req.body);
  res.status(200).json(otherStaff);
};

const getOtherStaffData = asyncHandler(async (req, res) => {
  const otherStaff = await otherStaffModel.find();
  if (otherStaff.length >= 0) {
    res.status(200).json(otherStaff);
  } else {
    res.status(401);
    throw new Error("Other Staff Collection Empty");
  }
});
const getSingleOtherStaffData = asyncHandler(async (req, res) => {
  const otherStaff = await otherStaffModel.findById(req.params.id);
  if (otherStaff) {
    res.status(200).json(otherStaff);
  } else {
    res.status(401);
    throw new Error("Other Staff Not Found");
  }
});

const deleteOtherStaffData = asyncHandler(async (req, res) => {
  const otherStaff = await otherStaffModel.findById(req.params.id);
  if (!otherStaff) {
    throw new Error("Payroll Data Not Found!...");
  }
  otherStaff.remove();
  // const updatedGoal = await Client.findByIdAndDelete(req.params.id, {new:true})

  res.status(200).json({ message: "Payroll Data Deleted Successfully!..." });
});

const updateOtherStaffData = asyncHandler(async (req, res) => {
  const otherStaff = await otherStaffModel.findById(req.params.id);
  if (!otherStaff) {
    throw new Error("Payroll Data Not Found!...");
  }

  const updateOtherStaff = await otherStaffModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateOtherStaff);
});

module.exports = {
  addOtherStaffData,
  getOtherStaffData,
  deleteOtherStaffData,
  getSingleOtherStaffData,
  updateOtherStaffData,
};
