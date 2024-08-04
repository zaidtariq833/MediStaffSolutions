// React
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./View/Auth/UserProfile";
import UnderConstruction from "./View/UnderConstruction/UnderConstruction";
import Error from "./View/Error/Error";

// Intouch
// Table
import InTouchTable from "./View/Modules/Intouch/Tables/Main/InTouchTable/InTouchTable";
// Form
import InTouch from "./View/Modules/Intouch/Forms/Main/InTouch/InTouch";
import WorkHistoryTable from "./View/Modules/WorkHistory/Tables/Main/WorkHistoryTable/WorkHistoryTable";
// Form
import WorkHistory from "./View/Modules/WorkHistory/Forms/Main/WorkHistoryForm/WorkHistory";
import Payroll from "./View/Modules/Payroll/Forms/Payroll";
import UserProfileTable from "./View/Modules/Admin/Users/Tables/Main/UsersTable/UserProfileTable";
import User from "./View/Modules/Admin/Users/Forms/Main/UserForm/User";
import Navigation from "./Containers/Header/Header";

// Top Modules
// Dashboard
import Dashboard from "./View/TopModules/Dashboard/Dashboard";
// Support
import Support from "./View/TopModules/Support/Support";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowLogin from "./Containers/Log/ShowLogin";
import PayrollTable from "./View/Modules/Payroll/Table/PayrollTable";
import HRManagersTable from "./View/Modules/HRManagers/Table/HRManagersTable";
import Doctors from "./View/Modules/HRManagers/Doctors/Doctors";
import Nurses from "./View/Modules/HRManagers/Nurses/Nurses";
import OtherStaff from "./View/Modules/HRManagers/OtherStaff/OtherStaff";
import EmployeeTable from "./View/Modules/Employee/EmployeeTable";

function App() {
  return (
    <div className="view">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex">
            <ShowLogin>
              <Navigation />
            </ShowLogin>

            <Routes>
              {/* Auth */}
              <Route path="/" element={<UserProfile />} />
              <Route
                path="/underConstruction"
                element={<UnderConstruction />}
              />
              {/* Intouch */}
              {/* Table */}
              <Route path="/shiftSchedulingTable" element={<InTouchTable />} />
              {/* Form */}
              <Route path="/shiftScheduling" element={<InTouch />} />
              <Route path="/shiftScheduling/:id" element={<InTouch />} />
              {/* WorkHistory */}
              {/* Table */}
              <Route
                path="/staffManagementTable"
                element={<WorkHistoryTable />}
              />

              {/* Payroll Calculation */}
              <Route path="/payrollTable" element={<PayrollTable />} />

              {/* HR Managers Table */}
              <Route path="/hrManagersTable" element={<HRManagersTable />} />

              {/* HR Managers Table Forms */}
              <Route path="/hrManagers/doctors" element={<Doctors />} />
              <Route path="/hrManagers/nurses" element={<Nurses />} />
              <Route path="/hrManagers/otherStaff" element={<OtherStaff />} />

              {/* Forms */}
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/payroll/:id" element={<Payroll />} />

              {/* HR Managers Table */}

              {/* Form */}
              <Route path="/staffManagement" element={<WorkHistory />} />
              <Route path="/staffManagement/:id" element={<WorkHistory />} />

              <Route path="/employeeTable" element={<EmployeeTable />} />

              {/* Forms */}
              {/* Admin */}
              {/* Tables */}
              <Route path="/userProfileTable" element={<UserProfileTable />} />
              {/* Forms */}
              <Route path="/user" element={<User />} />

              {/* Top Modules */}
              <Route path="/support" element={<Support />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/error" element={<Error />} />
            </Routes>
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
