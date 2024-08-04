// Configure Dotenv
require("dotenv").config();

// Containers
const express = require("express");
const port = process.env.PORT;
const app = express();
const connectDB = require("./config/db");

// Connect Database
connectDB();

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// APIs
app.use("/api/userdetail", require("./routes/userDetailRoute"));
app.use("/api/staffmanagement", require("./routes/workHistoryRoute"));
app.use("/api/shiftscheduling/", require("./routes/intouchRoutes"));
app.use("/api/payroll/", require("./routes/payrollRoutes"));
app.use(
  "/api/hrmanagers/otherstaff/",
  require("./routes/hrManagers/otherStaffRoutes")
);
app.use("/api/employee/", require("./routes/employeeRoutes"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
