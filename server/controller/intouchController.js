const asyncHandler = require("express-async-handler");
const shiftSchedulingModel = require("../models/intouchModel");

const addShiftSchedulingData = async (req, res) => {
  const shiftScheduling = await shiftSchedulingModel.create(req.body);
  res.status(200).json(shiftScheduling);
};

const getShiftSchedulingData = asyncHandler(async (req, res) => {
  const shiftScheduling = await shiftSchedulingModel.find();
  if (shiftScheduling.length >= 0) {
    res.status(200).json(shiftScheduling);
  } else {
    res.status(401);
    throw new Error("Shift Scheduling Collection Empty");
  }
});
const getSingleShiftSchedulingData = asyncHandler(async (req, res) => {
  const shiftScheduling = await shiftSchedulingModel.findById(req.params.id);
  if (shiftScheduling) {
    res.status(200).json(shiftScheduling);
  } else {
    res.status(401);
    throw new Error("shift scheduling Not Found");
  }
});

const deleteShiftSchedulingData = asyncHandler(async (req, res) => {
  const shiftScheduling = await shiftSchedulingModel.findById(req.params.id);
  if (!shiftScheduling) {
    throw new Error("Shift Scheduling Data Not Found!...");
  }
  shiftScheduling.remove();
  // const updatedGoal = await Client.findByIdAndDelete(req.params.id, {new:true})

  res.status(200).json({ message: "shift scheduling Data Deleted Successfully!..." });
});

const updateShiftSchedulingData = asyncHandler(async (req, res) => {
  const shiftScheduling = await shiftSchedulingModel.findById(req.params.id);
  if (!shiftScheduling) {
    throw new Error("Shift Scheduling Data Not Found!...");
  }

  const updateShiftScheduling = await shiftSchedulingModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateShiftScheduling);
});

module.exports = {
  addShiftSchedulingData,
  getShiftSchedulingData,
  deleteShiftSchedulingData,
  getSingleShiftSchedulingData,
  updateShiftSchedulingData,
};
