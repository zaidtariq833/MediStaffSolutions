import React, { useEffect } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  Form,
  ListGroup,
  ListGroupItem,
  Spinner,
  Dropdown,
} from "react-bootstrap";
import NavigationTop from "../../../../Containers/HeaderTop/headerTop";
import { useDispatch } from "react-redux";
// import {
//   deleteStaffManagementData,
//   getAllStaffManagementData,
//   reset,
// } from "../../../../../../features/workHistory/workHistorySlice";
import { useSelector } from "react-redux";
import "./PayrollTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deletePayrollingData,
  getAllPayrollingData,
  reset,
} from "../../../../features/payroll/payrollSlice";

function PayrollTable() {
  document.title = "Payroll Table";
  const id = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let authuser = useSelector((state) => state.auth);

  useEffect(() => {
    if (authuser.isError) {
      toast.error(authuser.message);
    }
    if (authuser.isSuccess || authuser.user) {
      if (window.location.pathname === `/payroll/${id.id}`)
        navigate("/payrollTable");
    } else {
      navigate("/");
      toast.error("Invailid Credentials");
    }
  }, [
    authuser.user,
    authuser.isError,
    authuser.isSuccess,
    authuser.message,
    navigate,
  ]);

  useEffect(() => {
    dispatch(getAllPayrollingData());
  }, []);

  useEffect(() => {
    if (isDelSuccess === true) {
      dispatch(reset());
      dispatch(getAllPayrollingData());
    }
  });

  const { Payroll, isLoading, isError, isSuccess, message, isDelSuccess } =
    useSelector((state) => state.payroll);

  console.log(Payroll, "payroll data array");
  return (
    <main className="main_payrollTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="payrollTable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Payroll </label>
              </div>
              <div>
                <AdvancedExample />
              </div>
            </div>
            <div className="body">
              <div className="body_inner py-1 ">
                <Table responsive>
                  <thead>
                    <tr className="bg-light">
                      <th>
                        Employee Name
                        <i className="fa-solid fa-caret-up px-2"></i>
                      </th>
                      <th>
                        Department
                        <i className="fa-solid fa-caret-up px-2"></i>{" "}
                      </th>
                      <th>Hours Worked</th>
                      <th>Gross Monthly Salary</th>
                      <th>Bonus</th>
                      <th>Deductions</th>
                      <th>Other Benefits</th>
                      <th>Overtime hours</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading && (
                      <tr>
                        <td colSpan="12" className="text-center">
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden mt-5">
                              Loading...
                            </span>
                          </Spinner>
                        </td>
                      </tr>
                    )}
                    {isError && (
                      <tr>
                        <td colSpan="12" className="text-center">
                          {message}
                        </td>
                      </tr>
                    )}
                    {isSuccess &&
                      (Payroll.length != 0 ? (
                        <>
                          {Payroll.map((data, i) => (
                            <tr key={i}>
                              <td>{data.payroll_name}</td>
                              <td>{data.payroll_department}</td>
                              <td>{data.payroll_hours_worked}</td>
                              <td>{data.payroll_gross_monthly_salary}</td>
                              <td>{data.payroll_bonus}</td>
                              <td>{data.payroll_deductions}</td>
                              <td>{data.payroll_other_benefits}</td>
                              <td>{data.payroll_overtime_hours}</td>
                              <td>
                                <div className=" d-flex align-items-center ">
                                  <button
                                    className="border px-3 text-nowrap"
                                    onClick={() => {
                                      dispatch(deletePayrollingData(data._id));
                                      // console.log(data._id);
                                      if (!data._id) {
                                        dispatch(reset());
                                      }
                                    }}
                                  >
                                    <i className="fa-solid fa-trash"></i>
                                    Delete
                                  </button>
                                  <button
                                    className="border px-3 text-nowrap"
                                    onClick={() => {
                                      navigate(`/payroll/${data._id}`);
                                      //   dispatch(reset());
                                    }}
                                  >
                                    <i class="fa-solid fa-pen"></i>
                                    Edit
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </>
                      ) : (
                        <>
                          <tr>
                            <td colSpan="12" className="text-center">
                              No Data Available
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function AdvancedExample() {
  return (
    <Pagination>
      <Pagination.Item active>{1}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

function Navv() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center" navbarScroll>
          {/* <Nav.Link href="/workHistory" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link> */}
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              <Nav.Link
                onClick={() => {
                  navigate("/payroll");
                  // dispatch(reset());
                }}
              >
                <i className="fa-solid fa-square-plus"></i> New
              </Nav.Link>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/payrollTable">
                <i className="fa-solid fa-square-plus"></i> Reports
              </Link>
              <div className="divOne ">
                <div className="divOne_ hello">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="w-100">
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="/workHistoryReportTable">
                            Manage Reports..
                          </NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-plus"></i>
                            <NavLink to="/workHistoryReportForm">New</NavLink>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#"> Work History</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Monthly Reporting</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PayrollTable;
