const express = require("express");
const router = express.Router();
const {
    addShiftSchedulingData,
    getShiftSchedulingData,
    deleteShiftSchedulingData,
    getSingleShiftSchedulingData,
    updateShiftSchedulingData,
} = require("../controller/intouchController");

router.route("/addshiftscheduling").post(addShiftSchedulingData);
router.route("/getshiftscheduling").get(getShiftSchedulingData);
router.route("/getsingleshiftscheduling/:id").get(getSingleShiftSchedulingData);
router.route("/deleteshiftscheduling/:id").delete(deleteShiftSchedulingData);
router.route("/updateshiftscheduling/:id").put(updateShiftSchedulingData);

module.exports = router;
