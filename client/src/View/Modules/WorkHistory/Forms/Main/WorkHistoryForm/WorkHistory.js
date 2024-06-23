import React, { useState, useEffect, useCallback } from "react";
import {
  Form,
  Alert,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  ListGroup,
  ListGroupItem,
  Table,
} from "react-bootstrap";
import NavigationTop from "../../../../../../Containers/HeaderTop/headerTop";
import { useDispatch, useSelector } from "react-redux";
import {
  addStaffManagementData,
  getSingleStaffManagementData,
  reset,
  saveStaffManagementData,
  updateStaffManagementData,
} from "../../../../../../features/workHistory/workHistorySlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./workHistory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

function WorkHistory() {
  document.title = "Staff Management";
  let id = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Dropdows
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);

  let authuser = useSelector((state) => state.auth);

  useEffect(() => {
    if (authuser.isError) {
      toast.error(authuser.message);
    }
    if (authuser.isSuccess || authuser.user) {
      navigate("/staffManagement");
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

  const [staffManagement, setStaffManagement] = useState({
    staff_management_name: "",
    staff_management_department: "",
    staff_management_employee_id: "",
    staff_management_first_worked: "",
    staff_management_last_worked: "",
    staff_management_oriented: false,
    staff_management_oriented_date: "",
    staff_management_comments: "",
  });

  const departmentData = [
    {
      department: "Orthopaedics",
    },
    {
      department: "Paediatrics",
    },
    {
      department: "Neurology",
    },
    {
      department: "Cardiology",
    },
    {
      department: "Psychiatry",
    },
    {
      department: "Pathology",
    },
    {
      department: "Pharmacy",
    },
  ];

  useEffect(() => {
    if (window.location.pathname === `/staffManagement/${id.id}`) {
      dispatch(getSingleStaffManagementData(id));
      console.log("done");
    }
  }, []);
  
  const staffManagementData = useSelector(
    (state) => state.staffManagement.StaffManagementTemp
  );

  useEffect(() => {
    if (window.location.pathname != "/staffManagement") {
      setStaffManagement({
        staff_management_name: staffManagementData.staff_management_name,
        staff_management_department: staffManagementData.staff_management_department,
        staff_management_employee_id: staffManagementData.staff_management_employee_id,
        staff_management_first_worked: staffManagementData.staff_management_first_worked,
        staff_management_last_worked: staffManagementData.staff_management_last_worked,
        staff_management_oriented: staffManagementData.staff_management_oriented,
        staff_management_oriented_date: staffManagementData.staff_management_oriented_date,
        staff_management_comments: staffManagementData.staff_management_comments,
      });
    }
  }, [dispatch, staffManagementData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffManagement({
      ...staffManagement,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveStaffManagementData(staffManagement));
  }, [dispatch, staffManagement]);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setHide(false);
      setHide1(false);
      setHide2(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <main className="main_workHistory">
      <NavigationTop />
      <Navv />
      <div className="cennt mt-5">
        <div className="w-75 m-auto">
          <Alert className="text-center m-0 alertt">Staff Management</Alert>
          <Container fluid className="workhistory_form">
            <Row>
              <Col lg={12}>
                <Form className="workhistory_form2">
                  <div className="tab_form override mb-2">
                    <Form.Group
                      className=" tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Staff Information
                      </Form.Label>

                      <div className="inner_ inner__ d-flex border-bottom">
                        <div className="right w-25 d-flex align-items-center">
                          <Form.Label className="">Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="staff_management_name"
                            value={staffManagement.staff_management_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ inner__ d-flex">
                        <div className="right w-25 d-flex align-items-center">
                          <Form.Label className="">Department:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <div className="d-flex selectFlield">
                            <input
                              type="text"
                              name="staff_management_department"
                              value={staffManagement.staff_management_department}
                              onChange={handleChange}
                              onFocus={(e) => {
                                e.target.select();
                                setHide1(!hide1);
                              }}
                              autoComplete="off"
                              className="w-50"
                            />
                            <span>
                              <i
                                className="fa-solid fa-chevron-down"
                                style={{
                                  cursor: "pointer",
                                  marginLeft: "-20px",
                                }}
                                onClick={() => setHide1(!hide1)}
                              ></i>
                            </span>
                            <div
                              className={`selectFlield_dropdown bg-white border  m-auto ${
                                hide1 ? "d-block" : "d-none"
                              }`}
                            >
                              <Table hover className=" border-0 p-0 m-0">
                                <thead>
                                  <tr className="bg-light">
                                    <th>Department</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {departmentData.length > 0 && (
                                    <>
                                      {departmentData.map((data, i) => (
                                        <tr
                                          style={{ cursor: "pointer" }}
                                          onClick={(i) => {
                                            setStaffManagement({
                                              ...staffManagement,
                                              staff_management_department:
                                                data.department,
                                            });
                                            setHide1(!hide1);
                                          }}
                                        >
                                          <td>{data.department}</td>
                                        </tr>
                                      ))}
                                    </>
                                  )}
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__ d-flex border-bottom">
                        <div className="right w-25 d-flex align-items-center">
                          <Form.Label className="">Employee ID:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="staff_management_employee_id"
                            value={staffManagement.staff_management_employee_id}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label>First Worked:</Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-50 mt-1">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="staff_management_first_worked"
                              value={staffManagement.staff_management_first_worked}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="w-50 d-flex py-0">
                            <div className="right w-50">
                              <Form.Label className="text-end">
                                Last Worked:
                              </Form.Label>
                            </div>
                            <div className="left w-50 px-2 mt-1">
                              <Form.Control
                                type="text"
                                className="w-50"
                                name="staff_management_last_worked"
                                value={staffManagement.staff_management_last_worked}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex ">
                        <div className="right w-25 d-flex">
                          <Form.Label>Oriented:</Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex border-bottom">
                          <div className="w-50 mt-1 overtime">
                            <Form.Check
                              type="checkbox"
                              name="staff_management_oriented"
                              value={staffManagement.staff_management_oriented}
                              onChange={() => {
                                setStaffManagement({
                                  ...staffManagement,
                                  staff_management_oriented:
                                  staffManagement.staff_management_oriented === false
                                      ? true
                                      : false,
                                });
                              }}
                              checked={staffManagement.staff_management_oriented}
                            />
                          </div>
                          <div className="w-50 d-flex py-0">
                            <div className="right w-50">
                              <Form.Label className="text-end">
                                Oriented Date:
                              </Form.Label>
                            </div>
                            <div className="left w-50 px-2 mt-1">
                              <Form.Control
                                type="text"
                                className="w-50"
                                name="staff_management_oriented_date"
                                value={staffManagement.staff_management_oriented_date}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override mb-2">
                    <Form.Group
                      className=" tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Comments (Max:500)
                      </Form.Label>
                      <div className="py-1 px-2 w-100">
                        <Form.Control
                          as="textarea"
                          name="staff_management_comments"
                          value={staffManagement.staff_management_comments}
                          onChange={handleChange}
                        />
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  );
}

function Navv() {
  let id = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const [navName, setNavName] = useState("");
  const finalStaffManagement = useSelector(
    (state) => state.staffManagement.StaffManagementTemp
  );

  console.log(finalStaffManagement, "final staff")
  const { isError, message, isSuccess } = useSelector(
    (state) => state.staffManagement
  );

  useEffect(() => {
    if (window.location.pathname === "/staffManagement") {
      setNavName("Save");
    } else {
      setNavName("Update");
    }
  });

  const finalSave = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(addStaffManagementData(finalStaffManagement));
  };

  const finalUpdate = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(updateStaffManagementData({ id, finalStaffManagement }));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/staffManagementTable");
      setDisable(false);
      dispatch(reset());
    }

    if (isError) {
      setDisable(false);
      toast.error(message);
    }
  }, [finalSave, finalUpdate]);

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              {navName === "Save" ? (
                <Nav.Link
                  onClick={finalSave}
                  disabled={disable}
                  className="py-1 px-3"
                >
                  <i className="fa-solid fa-floppy-disk"></i> save
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={finalUpdate}
                  disabled={disable}
                  className="py-1 px-3"
                >
                  <i className="fa-solid fa-floppy-disk"></i> Update
                </Nav.Link>
              )}
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/staffManagementTable" className="py-1 px-3">
                <i className="fa-solid fa-xmark"></i> cancel
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default WorkHistory;
