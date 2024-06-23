const express = require("express");
const router = express.Router();

const {
  addPayrollData,
  getPayrollData,
  deletePayrollData,
  updatePayrollData,
  getSinglePayrollData,
} = require("../controller/payrollController");

router.route("/addpayroll").post(addPayrollData);
router.route("/getpayroll").get(getPayrollData);
router.route("/getsinglepayroll/:id").get(getSinglePayrollData);
router.route("/deletepayroll/:id").delete(deletePayrollData);
router.route("/updatepayroll/:id").put(updatePayrollData);

module.exports = router;
