const express = require("express");
const router = express.Router();
const { getEmployeeData } = require("../controller/employeeController");

router.route("/getemployees").get(getEmployeeData);

module.exports = router;
