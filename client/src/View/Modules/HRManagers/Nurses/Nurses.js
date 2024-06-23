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
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addStaffManagementData,
//   getSingleStaffManagementData,
//   reset,
//   saveStaffManagementData,
//   updateStaffManagementData,
// } from "../../../../../../features/workHistory/workHistorySlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../WorkHistory/Forms/Main/WorkHistoryForm/workHistory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import NavigationTop from "../../../../Containers/HeaderTop/headerTop";

function Nurses() {
  document.title = "HR Managers / Nurses";
  //   let id = useParams();
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   // Dropdows
  //   const [hide, setHide] = useState(false);
  //   const [hide1, setHide1] = useState(false);
  //   const [hide2, setHide2] = useState(false);

  //   let authuser = useSelector((state) => state.auth);

  //   useEffect(() => {
  //     if (authuser.isError) {
  //       toast.error(authuser.message);
  //     }
  //     if (authuser.isSuccess || authuser.user) {
  //       navigate("/staffManagement");
  //     } else {
  //       navigate("/");
  //       toast.error("Invailid Credentials");
  //     }
  //   }, [
  //     authuser.user,
  //     authuser.isError,
  //     authuser.isSuccess,
  //     authuser.message,
  //     navigate,
  //   ]);

  //   const [staffManagement, setStaffManagement] = useState({
  //     staff_management_name: "",
  //     staff_management_department: "",
  //     staff_management_employee_id: "",
  //     staff_management_first_worked: "",
  //     staff_management_last_worked: "",
  //     staff_management_oriented: false,
  //     staff_management_oriented_date: "",
  //     staff_management_comments: "",
  //   });

  //   const departmentData = [
  //     {
  //       department: "Orthopaedics",
  //     },
  //     {
  //       department: "Paediatrics",
  //     },
  //     {
  //       department: "Neurology",
  //     },
  //     {
  //       department: "Cardiology",
  //     },
  //     {
  //       department: "Psychiatry",
  //     },
  //     {
  //       department: "Pathology",
  //     },
  //     {
  //       department: "Pharmacy",
  //     },
  //   ];

  //   useEffect(() => {
  //     if (window.location.pathname === `/staffManagement/${id.id}`) {
  //       dispatch(getSingleStaffManagementData(id));
  //       console.log("done");
  //     }
  //   }, []);

  //   const staffManagementData = useSelector(
  //     (state) => state.staffManagement.StaffManagementTemp
  //   );

  //   useEffect(() => {
  //     if (window.location.pathname != "/staffManagement") {
  //       setStaffManagement({
  //         staff_management_name: staffManagementData.staff_management_name,
  //         staff_management_department:
  //           staffManagementData.staff_management_department,
  //         staff_management_employee_id:
  //           staffManagementData.staff_management_employee_id,
  //         staff_management_first_worked:
  //           staffManagementData.staff_management_first_worked,
  //         staff_management_last_worked:
  //           staffManagementData.staff_management_last_worked,
  //         staff_management_oriented:
  //           staffManagementData.staff_management_oriented,
  //         staff_management_oriented_date:
  //           staffManagementData.staff_management_oriented_date,
  //         staff_management_comments:
  //           staffManagementData.staff_management_comments,
  //       });
  //     }
  //   }, [dispatch, staffManagementData]);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setStaffManagement({
  //       ...staffManagement,
  //       [name]: value,
  //     });
  //   };

  //   useEffect(() => {
  //     dispatch(saveStaffManagementData(staffManagement));
  //   }, [dispatch, staffManagement]);

  //   const escFunction = useCallback((event) => {
  //     if (event.key === "Escape") {
  //       setHide(false);
  //       setHide1(false);
  //       setHide2(false);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     document.addEventListener("keydown", escFunction, false);

  //     return () => {
  //       document.removeEventListener("keydown", escFunction, false);
  //     };
  //   }, [escFunction]);

  return (
    <main className="main_workHistory">
      <NavigationTop />
      <Navv />
      <div className="cennt mt-5">
        <div className="w-75 m-auto">
          <Alert className="text-center m-0 alertt">HR Managers / Nurses</Alert>
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
                        Nurses Information
                      </Form.Label>

                      <div className="inner_ inner__ d-flex border-bottom">
                        <div className="right w-25 d-flex align-items-center">
                          <Form.Label className="">Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-25"
                            // name="staff_management_name"
                            // value={staffManagement.staff_management_name}
                            // onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ inner__ d-flex">
                        <div className="right w-25 d-flex align-items-center">
                          <Form.Label className="">Department:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50">
                          <Form.Select
                            className=""
                            //   name="userDetail_role"
                            //   value={userDetail.userDetail_role}
                            //   onChange={handleChange}
                          >
                            <option></option>
                            <option>Emergency Unit (EU)</option>
                            <option>Pediatrics</option>
                            <option>Intensive Care Unit (ICU)</option>
                            <option>Medical-Surgical Unit</option>
                          </Form.Select>
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
                            // name="staff_management_employee_id"
                            // value={staffManagement.staff_management_employee_id}
                            // onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label>Board Certifications:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50">
                          <Form.Select
                            className=""
                            //   name="userDetail_role"
                            //   value={userDetail.userDetail_role}
                            //   onChange={handleChange}
                          >
                            <option></option>
                            <option>
                              American Board of Internal Medicine (ABIM)
                            </option>
                            <option>American Board of Pediatrics (ABP)</option>
                            <option>American Board of Surgery (ABS)</option>
                            <option>
                              American Board of Psychiatry and Neurology (ABPN)
                            </option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                          >
                            No. Of Attendees:
                          </Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-50 mt-1">
                            <Form.Control
                              type="text"
                              className="w-25"
                              //   name="staff_management_first_worked"
                              //   value={
                              //     staffManagement.staff_management_first_worked
                              //   }
                              //   onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label>No. Of Visits:</Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-50 mt-1">
                            <Form.Control
                              type="text"
                              className="w-25"
                              //   name="staff_management_first_worked"
                              //   value={
                              //     staffManagement.staff_management_first_worked
                              //   }
                              //   onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                          >
                            Experience
                          </Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-50 mt-1">
                            <Form.Control
                              type="text"
                              className="w-25"
                              //   name="staff_management_first_worked"
                              //   value={
                              //     staffManagement.staff_management_first_worked
                              //   }
                              //   onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                          >
                            Marital Status
                          </Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-50 mt-1">
                            <Form.Select
                              className=""
                              //   name="userDetail_role"
                              //   value={userDetail.userDetail_role}
                              //   onChange={handleChange}
                            >
                              <option></option>
                              <option>Single</option>
                              <option>Married</option>
                            </Form.Select>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                          >
                            Status
                          </Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-50 mt-1">
                            <Form.Select
                              className=""
                              //   name="userDetail_role"
                              //   value={userDetail.userDetail_role}
                              //   onChange={handleChange}
                            >
                              <option></option>
                              <option>Active</option>
                              <option>Not Active</option>
                            </Form.Select>
                          </div>
                        </div>
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
  //   let id = useParams();
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const [disable, setDisable] = useState(false);
  //   const [navName, setNavName] = useState("");
  //   const finalStaffManagement = useSelector(
  //     (state) => state.staffManagement.StaffManagementTemp
  //   );

  //   console.log(finalStaffManagement, "final staff");
  //   const { isError, message, isSuccess } = useSelector(
  //     (state) => state.staffManagement
  //   );

  //   useEffect(() => {
  //     if (window.location.pathname === "/staffManagement") {
  //       setNavName("Save");
  //     } else {
  //       setNavName("Update");
  //     }
  //   });

  //   const finalSave = (e) => {
  //     e.preventDefault();
  //     setDisable(true);
  //     dispatch(addStaffManagementData(finalStaffManagement));
  //   };

  //   const finalUpdate = (e) => {
  //     e.preventDefault();
  //     setDisable(true);
  //     dispatch(updateStaffManagementData({ id, finalStaffManagement }));
  //   };

  //   useEffect(() => {
  //     if (isSuccess) {
  //       navigate("/staffManagementTable");
  //       setDisable(false);
  //       dispatch(reset());
  //     }

  //     if (isError) {
  //       setDisable(false);
  //       toast.error(message);
  //     }
  //   }, [finalSave, finalUpdate]);

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              {/* {navName === "Save" ? ( */}
              <Nav.Link
                // onClick={finalSave}
                // disabled={disable}
                className="py-1 px-3"
              >
                <i className="fa-solid fa-floppy-disk"></i> save
              </Nav.Link>
              {/* ) : ( */}
              <Nav.Link
                // onClick={finalUpdate}
                // disabled={disable}
                className="py-1 px-3"
              >
                <i className="fa-solid fa-floppy-disk"></i> Update
              </Nav.Link>
              {/* )} */}
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

export default Nurses;
