import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Table } from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAllStaffManagementData,
  reset,
} from "../../../features/workHistory/workHistorySlice";
import { getShiftScheduling } from "../../../features/intouch/intouchSlice";
import shiftSchedulingService from "../../../features/intouch/intouchService";

function Dashboard() {
  document.title = "Dashboard";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let authuser = useSelector((state) => state.auth);

  const { StaffManagement } = useSelector((state) => state.staffManagement);

  const { ShiftScheduling } = useSelector((state) => state.shiftScheduling);

  // useEffect(() => {
  //   if (authuser.isError) {
  //     toast.error(authuser.message);
  //   }

  //   if (authuser.isSuccess || authuser.user) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/");
  //     toast.error("Invailid Credentials");
  //   }
  // }, [
  //   authuser.user,
  //   authuser.isError,
  //   authuser.isSuccess,
  //   authuser.message,
  //   navigate,
  // ]);

  useEffect(() => {
    dispatch(getAllStaffManagementData());
  }, []);

  useEffect(() => {
    dispatch(getShiftScheduling());
  }, []);

  return (
    <main className="main_dashboard ">
      <NavigationTop />

      <div className="cennt mt-5">
        <div className="dashboard_feild  w-100 mx-4 p-2">
          <Container fluid>
            <Row>
              <Col lg={5}>
                <div className="sec des second my-2">
                  <div className="head">
                    <label>Shift Scheduling</label>
                  </div>
                  <div className="body px-2 ">
                    <div className="body_inner py-1">
                      <Table>
                        <thead>
                          <tr className="bg-light">
                            <th>Type</th>
                            <th>Doctor name</th>
                            <th>Week Day</th>
                            <th>Assigned Branch</th>
                            <th>Total Patients</th>
                            <th>Department</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ShiftScheduling?.length !== 0 &&
                            ShiftScheduling?.map((shift) => {
                              return (
                                <tr>
                                  <td>{shift?.shiftScheduling_type}</td>
                                  <td>{shift?.shiftScheduling_doctor_name}</td>
                                  <td>{shift?.shiftScheduling_week_day}</td>
                                  <td>
                                    {shift?.shiftScheduling_assigned_branch}
                                  </td>
                                  <td>
                                    {shift?.shiftScheduling_total_patients}
                                  </td>
                                  <td>{shift?.shiftScheduling_dept}</td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>

                <div className="sec des third my-2">
                  <div className="head">
                    <label>HR Managers</label>
                  </div>
                  <div className="body px-2 ">
                    <div className="body_inner py-1">
                      <Table>
                        <thead>
                          <tr className="bg-light text-center">
                            <th colSpan={2}>Billing</th>
                            <th colSpan={2}>Receivables</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr>
                            <td>Pay Period</td>
                            <td>06/25/2022</td>
                            <td>Current</td>
                            <td>$60,850.00</td>
                          </tr>
                          <tr>
                            <td>Pay Period</td>
                            <td>06/25/2022</td>
                            <td>Current</td>
                            <td>$60,850.00</td>
                          </tr>
                          <tr>
                            <td>Pay Period</td>
                            <td>06/25/2022</td>
                            <td>Current</td>
                            <td>$60,850.00</td>
                          </tr>
                          <tr>
                            <td>Pay Period</td>
                            <td>06/25/2022</td>
                            <td>Current</td>
                            <td>$60,850.00</td>
                          </tr>
                          <tr>
                            <td>Pay Period</td>
                            <td>06/25/2022</td>
                            <td>Current</td>
                            <td>$60,850.00</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className="sec des third third_">
                  <div className="head">
                    <label>Performance Analysis</label>
                  </div>
                  <div className="body px-2 ">
                    <div className="body_inner py-1 ">
                      <Table striped>
                        <thead>
                          <tr className="bg-light text-center">
                            <th colSpan={2}></th>
                            <th colSpan={4}>Passing</th>
                            <th colSpan={4}>Failing</th>
                            <th colSpan={4}>Warning</th>
                          </tr>

                          <tr className="bg-light text-center">
                            <th>Status</th>
                            <th>Count</th>
                            <th>Cur</th>
                            <th>30</th>
                            <th>60</th>
                            <th>90</th>
                            <th>Cur</th>
                            <th>30</th>
                            <th>60</th>
                            <th>90</th>
                            <th>Cur</th>
                            <th>30</th>
                            <th>60</th>
                            <th>90</th>
                          </tr>
                        </thead>
                        {/* <div className='scroll_'> */}
                        <tbody>
                          <tr>
                            <td className="bold">Inquiry</td>
                            <td>14232</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4107</td>
                            <td>4109</td>
                            <td>4112</td>
                            <td>4114</td>
                          </tr>
                          <tr>
                            <td className="bold">Inquiry</td>
                            <td>14232</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4107</td>
                            <td>4109</td>
                            <td>4112</td>
                            <td>4114</td>
                          </tr>
                          <tr>
                            <td className="bold">Inquiry</td>
                            <td>14232</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4107</td>
                            <td>4109</td>
                            <td>4112</td>
                            <td>4114</td>
                          </tr>
                          <tr>
                            <td className="bold">Inquiry</td>
                            <td>14232</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4107</td>
                            <td>4109</td>
                            <td>4112</td>
                            <td>4114</td>
                          </tr>
                          <tr>
                            <td className="bold">Inquiry</td>
                            <td>14232</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4107</td>
                            <td>4109</td>
                            <td>4112</td>
                            <td>4114</td>
                          </tr>
                          <tr>
                            <td className="bold">Inquiry</td>
                            <td>14232</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4107</td>
                            <td>4109</td>
                            <td>4112</td>
                            <td>4114</td>
                          </tr>
                          <tr>
                            <td className="bold">Inquiry</td>
                            <td>14232</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4107</td>
                            <td>4109</td>
                            <td>4112</td>
                            <td>4114</td>
                          </tr>
                        </tbody>
                        {/* </div> */}
                        <tfoot>
                          <tr>
                            <td className="bold">Total</td>
                            <td>14232</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>10054</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4179</td>
                            <td>4107</td>
                            <td>4109</td>
                            <td>4112</td>
                            <td>4114</td>
                          </tr>
                        </tfoot>
                      </Table>
                    </div>
                  </div>
                </div>

                <div className="sec des four">
                  <div className="head">
                    <label>Staff Management</label>
                  </div>
                  <div className="body px-2 ">
                    <div className="body_inner py-1 ">
                      <Table>
                        <>
                          <thead>
                            <tr className="bg-light text-center">
                              <th>Name</th>
                              <th>Department</th>
                              <th>Employee ID</th>
                              <th>First Worked</th>
                              <th>Last Worked</th>
                              <th>Oriented</th>
                              <th>Oriented Date</th>
                              <th>Comments</th>
                            </tr>
                          </thead>
                          <tbody>
                            {StaffManagement.length !== 0 &&
                              StaffManagement.map((staff) => {
                                return (
                                  <tr>
                                    <td>{staff?.staff_management_name}</td>
                                    <td>
                                      {staff?.staff_management_department}
                                    </td>
                                    <td>
                                      {staff?.staff_management_employee_id}
                                    </td>
                                    <td>
                                      {staff?.staff_management_first_worked}
                                    </td>
                                    <td>
                                      {staff?.staff_management_last_worked}
                                    </td>
                                    <td>{staff?.staff_management_oriented}</td>
                                    <td>
                                      {staff?.staff_management_oriented_date}
                                    </td>
                                    <td>{staff?.staff_management_comments}</td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
