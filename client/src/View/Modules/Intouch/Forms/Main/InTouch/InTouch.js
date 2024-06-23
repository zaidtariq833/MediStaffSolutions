import React, { useState, useEffect, useCallback } from "react";
import {
  Form,
  Alert,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  Button,
  Tabs,
  Tab,
  Table,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import NavigationTop from "../../../../../../Containers/HeaderTop/headerTop";
import {
  saveShiftSchedulingForm,
  addShiftScheduling,
  resetShiftScheduling,
  getSingleShiftScheduling,
  updateShiftSchedulingData,
  deleteShiftSchedulingData,
} from "../../../../../../features/intouch/intouchSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./inTouch.css";
import { toast } from "react-toastify";

function InTouch() {
  document.title = "Shift Scheduling";
  let id = useParams();
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [hide5, setHide5] = useState(false);

  const [shiftScheduling, setShiftScheduling] = useState({
    shiftScheduling_type: "",
    shiftScheduling_doctor_name: "",
    shiftScheduling_week_day: "",
    shiftScheduling_total_patients: 0,
    shiftScheduling_assigned_branch: "",
    shiftScheduling_dept: "",
    shiftScheduling_total_amount: 1500,
  });

  useEffect(() => {
    if (window.location.pathname === `/shiftScheduling/${id.id}`) {
      dispatch(getSingleShiftScheduling(id));
      console.log("done");
    }
  }, []);

  const shiftSchedulingData = useSelector(
    (state) => state.shiftScheduling.ShiftSchedulingTemp
  );

  useEffect(() => {
    if (window.location.pathname != "/shiftScheduling") {
      setShiftScheduling({
        shiftScheduling_type: shiftSchedulingData.shiftScheduling_type,
        shiftScheduling_doctor_name:
          shiftSchedulingData.shiftScheduling_doctor_name,
        shiftScheduling_week_day: shiftSchedulingData.shiftScheduling_week_day,
        shiftScheduling_total_patients:
          shiftSchedulingData.shiftScheduling_total_patients,
        shiftScheduling_total_amount:
          shiftSchedulingData.shiftScheduling_total_amount,
        shiftScheduling_assigned_branch:
          shiftSchedulingData.shiftScheduling_assigned_branch,
        shiftScheduling_dept: shiftSchedulingData.shiftScheduling_dept,
      });
    }
  }, [shiftSchedulingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShiftScheduling({
      ...shiftScheduling,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveShiftSchedulingForm(shiftScheduling));
  }, [dispatch, shiftScheduling]);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setHide(false);
      setHide1(false);
      setHide2(false);
      setHide3(false);
      setHide4(false);
      setHide5(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <main className="main_inTouch">
      <NavigationTop />
      <Navv />
      <div className="cennt mt-5">
        <div className="w-75 m-auto">
          <Alert className="text-center m-0 alertt">Shift Scheduling</Alert>
          <Container fluid className="inTouch_form">
            <Row>
              <Col lg={12} className="pe-0">
                <Form className="inTouch_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className=" tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Intouch Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label className="">Shift Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className=""
                            name="shiftScheduling_type"
                            value={shiftScheduling.shiftScheduling_type}
                            onChange={handleChange}
                          >
                            <option>Day</option>
                            <option>Night</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Doctor's Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 d-flex  gap-2 mailing">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="shiftScheduling_doctor_name"
                            value={shiftScheduling.shiftScheduling_doctor_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Week Day:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100"
                            name="shiftScheduling_week_day"
                            value={shiftScheduling.shiftScheduling_week_day}
                            onChange={handleChange}
                          >
                            <option defaultValue hidden></option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Total Patients:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <div className="d-flex selectFlield">
                            <input
                              name="shiftScheduling_total_patients"
                              value={
                                shiftScheduling.shiftScheduling_total_patients
                              }
                              onChange={handleChange}
                              autoComplete="off"
                              className="w-50"
                            />
                            <span
                              style={{
                                color: "#000",
                                marginLeft: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Total Amount:
                              {shiftScheduling.shiftScheduling_total_amount *
                                shiftScheduling.shiftScheduling_total_patients}
                            </span>
                            <span
                              style={{
                                color: "#000",
                                marginLeft: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              Deducted Amount:
                              {shiftScheduling.shiftScheduling_total_amount *
                                shiftScheduling.shiftScheduling_total_patients}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label style={{ whiteSpace: "nowrap" }}>
                            Assigned Branch:
                          </Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100"
                            name="shiftScheduling_assigned_branch"
                            value={
                              shiftScheduling.shiftScheduling_assigned_branch
                            }
                            onChange={handleChange}
                          >
                            <option defaultValue hidden></option>
                            <option>DHA Branch</option>
                            <option>Clifton Branch</option>
                            <option>Nazimabad Branch</option>
                            <option>North Karachi Branch</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label style={{ whiteSpace: "nowrap" }}>
                            Dept:
                          </Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100"
                            name="shiftScheduling_dept"
                            value={shiftScheduling.shiftScheduling_dept}
                            onChange={handleChange}
                          >
                            <option defaultValue hidden></option>
                            <option>Orthopaedics</option>
                            <option>Paediatrics</option>
                            <option>Neurology</option>
                            <option>Cardiology</option>
                            <option>Psychiatry</option>
                            <option>Pathology</option>
                            <option>Cardiology</option>
                            <option>Pharmacy</option>
                          </Form.Select>
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
  let shiftSchedulingData = useSelector(
    (state) => state.shiftScheduling.ShiftSchedulingTemp
  );
  const { isSuccess, isError, message, isDelSuccess } = useSelector(
    (state) => state.shiftScheduling
  );

  useEffect(() => {
    if (window.location.pathname === "/shiftScheduling") {
      setNavName("Save");
    } else {
      setNavName("Update");
    }
  });

  const finalSave = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(addShiftScheduling(shiftSchedulingData));
  };

  const finalUpdate = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(updateShiftSchedulingData({ id, shiftSchedulingData }));
  };

  const finalDelete = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(deleteShiftSchedulingData(id.id));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/shiftSchedulingTable");
      setDisable(false);
      dispatch(resetShiftScheduling());
    }
    if (isDelSuccess) {
      navigate("/shiftSchedulingTable");
      setDisable(false);
      dispatch(resetShiftScheduling());
    }

    if (isError) {
      setDisable(false);
      toast.error(message);
    }
    console.log("let it be");
  }, [isSuccess, isDelSuccess, isError]);

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
              <Nav.Link
                onClick={() => {
                  navigate("/shiftSchedulingTable");
                  dispatch(resetShiftScheduling());
                }}
                className="py-1 px-3"
              >
                <i className="fa-solid fa-xmark"></i> cancel
              </Nav.Link>
            </ListGroupItem>
            {navName === "Update" ? (
              <ListGroupItem as="li" className="py-1 px-3">
                <Nav.Link
                  onClick={finalDelete}
                  disabled={disable}
                  className="py-1 px-3"
                >
                  <i className="fa-solid fa-trash"></i> Delete
                </Nav.Link>
              </ListGroupItem>
            ) : (
              <></>
            )}
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default InTouch;
