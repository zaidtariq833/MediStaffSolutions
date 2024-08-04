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
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../WorkHistory/Forms/Main/WorkHistoryForm/workHistory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import NavigationTop from "../../../../Containers/HeaderTop/headerTop";
import { Range } from "react-range";
import {
  addOtherStaffing,
  getSingleOtherStaffing,
  resetOtherStaffing,
  saveOtherStaffingForm,
  updateOtherStaffingData,
} from "../../../../features/hrManager/OtherStaff/OtherStaffSlice";
import { useDispatch, useSelector } from "react-redux";

function Doctors() {
  document.title = "HR Managers / Other Staff";
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
      navigate("/hrManagers/otherStaff");
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

  const [otherStaff, setOtherStaff] = useState({
    otherStaff_name: "",
    otherStaff_department: "",
    otherStaff_employee_id: "",
    otherStaff_education: "",
    otherStaff_blood_group: "",
    otherStaff_colleagues_engagement: 0,
    otherStaff_experience: "",
    otherStaff_marital_status: "",
    otherStaff_status: "",
  });

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

  useEffect(() => {
    if (window.location.pathname === `/hrManagers/otherStaff/${id.id}`) {
      dispatch(getSingleOtherStaffing(id));
      console.log("done");
    }
  }, []);

  const otherStaffData = useSelector(
    (state) => state.otherStaff.OtherStaffTemp
  );

  useEffect(() => {
    if (window.location.pathname != "/hrManagers/otherStaff") {
      setOtherStaff({
        otherStaff_name: otherStaffData.otherStaff_name,
        otherStaff_department: otherStaffData.otherStaff_department,
        otherStaff_employee_id: otherStaffData.otherStaff_employee_id,
        otherStaff_education: otherStaffData.otherStaff_education,
        otherStaff_blood_group: otherStaffData.otherStaff_blood_group,
        otherStaff_colleagues_engagement:
          otherStaffData.otherStaff_colleagues_engagement,
        otherStaff_experience: otherStaffData.otherStaff_experience,
        otherStaff_marital_status: otherStaffData.otherStaff_marital_status,
        otherStaff_status: otherStaffData.otherStaff_status,
      });
    }
  }, [dispatch, otherStaffData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtherStaff({
      ...otherStaff,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveOtherStaffingForm(otherStaff));
  }, [dispatch, otherStaff]);

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
          <Alert className="text-center m-0 alertt">
            HR Managers / OtherStaff
          </Alert>
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
                        OtherStaff's Information
                      </Form.Label>

                      <div className="inner_ inner__ d-flex border-bottom">
                        <div className="right w-25 d-flex align-items-center">
                          <Form.Label className="">Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="otherStaff_name"
                            value={otherStaff.otherStaff_name}
                            onChange={handleChange}
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
                            name="otherStaff_department"
                            value={otherStaff.otherStaff_department}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>Pharmacists</option>
                            <option>Therapists</option>
                            <option>Dietitians and Nutritionists</option>
                            <option>Receptionists</option>
                            <option>Clerks</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ inner__ d-flex border-bottom">
                        <div className="right w-25 d-flex align-items-center">
                          <Form.Label className="">Hours Worked:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="otherStaff_employee_id"
                            value={otherStaff.otherStaff_employee_id}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label style={{ whiteSpace: "nowrap" }}>
                            Certifications / Education:
                          </Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50">
                          <Form.Select
                            className=""
                            name="otherStaff_education"
                            value={otherStaff.otherStaff_education}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>Car EMI</option>
                            <option>EOBI</option>
                            <option>Reimbursmance</option>
                            <option>Health Benefits</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                          >
                            OverTime Hours
                          </Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-100 mt-1">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="otherStaff_blood_group"
                              value={otherStaff.otherStaff_blood_group}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label>Colleagues Engagement:</Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-100 mt-1">
                            <Form.Range
                              min={0}
                              max={100}
                              value={
                                otherStaff.otherStaff_colleagues_engagement
                              }
                              name="otherStaff_colleagues_engagement"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                          >
                            Gross Salary
                          </Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-100 mt-1">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="otherStaff_experience"
                              value={otherStaff.otherStaff_experience}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                          >
                            Bonus
                          </Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-100 mt-1">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="otherStaff_marital_status"
                              value={otherStaff.otherStaff_marital_status}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__  d-flex border-bottom">
                        <div className="right w-25 d-flex">
                          <Form.Label
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                          >
                            Deductions
                          </Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-100 mt-1">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="otherStaff_status"
                              value={otherStaff.otherStaff_status}
                              onChange={handleChange}
                            />
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
  let id = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const [navName, setNavName] = useState("");
  const finalOtherStaff = useSelector(
    (state) => state.otherStaff.OtherStaffTemp
  );

  const { isError, message, isSuccess } = useSelector(
    (state) => state.otherStaff
  );

  useEffect(() => {
    if (window.location.pathname === "/hrManagers/otherStaff") {
      setNavName("Save");
    } else {
      setNavName("Update");
    }
  });

  const finalSave = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(addOtherStaffing(finalOtherStaff));
  };

  const finalUpdate = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(updateOtherStaffingData({ id, finalOtherStaff }));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/hrManagersTable");
      setDisable(false);
      dispatch(resetOtherStaffing());
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
              <Link to="/hrManagersTable" className="py-1 px-3">
                <i className="fa-solid fa-xmark"></i> cancel
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Doctors;
