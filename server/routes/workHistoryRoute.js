const express = require("express");
const router = express.Router();
const { addStaffManagementData, getAllStaffManagementData, deleteStaffManagement,updateStaffManagement,getSingleStaffManagementData } = require('../controller/workHistoryController');

router.route("/addstaffmanagement").post(addStaffManagementData);
router.route("/getstaffmanagement").get(getAllStaffManagementData);
router.route("/getsinglestaffmanagement/:id").get(getSingleStaffManagementData);
router.route("/deletestaffmanagement/:id").delete(deleteStaffManagement);
router.route("/updatestaffmanagement/:id").put(updateStaffManagement);

module.exports = router;
