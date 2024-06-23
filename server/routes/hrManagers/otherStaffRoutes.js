const express = require("express");
const router = express.Router();

const {
  addOtherStaffData,
  getOtherStaffData,
  deleteOtherStaffData,
  updateOtherStaffData,
  getSingleOtherStaffData,
} = require("../../controller/hrManagers/otherStaffController");

router.route("/addotherstaff").post(addOtherStaffData);
router.route("/getotherstaff").get(getOtherStaffData);
router.route("/getsingleotherstaff/:id").get(getSingleOtherStaffData);
router.route("/deleteotherstaff/:id").delete(deleteOtherStaffData);
router.route("/updateotherstaff/:id").put(updateOtherStaffData);

module.exports = router;
