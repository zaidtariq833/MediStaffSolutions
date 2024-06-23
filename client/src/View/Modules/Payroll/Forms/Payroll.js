import React, { useState, useEffect, useCallback, useMemo } from "react";
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
} from "react-bootstrap";
import NavigationTop from "../../../../Containers/HeaderTop/headerTop";
import { Link, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Payroll.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addPayrollingData,
  getSinglePayrollingData,
  reset,
  savePayrollData,
  updatePayrollingData,
} from "../../../../features/payroll/payrollSlice";

function Payroll() {
  document.title = "Payroll";
  let id = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [bonus, setBonus] = useState(0);

  let authuser = useSelector((state) => state.auth);

  useEffect(() => {
    if (authuser.isError) {
      toast.error(authuser.message);
    }
    if (authuser.isSuccess || authuser.user) {
      navigate("/payroll");
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
    if (window.location.pathname === `/payroll/${id.id}`) {
      dispatch(getSinglePayrollingData(id));
      console.log("done");
    }
  }, []);

  const [payrolled, setPayrolled] = useState({
    payroll_name: "",
    payroll_department: "",
    payroll_hours_worked: 0,
    payroll_gross_monthly_salary: 0,
    payroll_bonus: Number(bonus),
    payroll_deductions: 0,
    payroll_other_benefits: "",
    payroll_overtime_hours: 0,
  });

  const payrollData = useSelector((state) => state.payroll.PayrollTemp);


  useEffect(() => {
    if (window.location.pathname != "/payroll") {
      setPayrolled({
        payroll_name: payrollData.payroll_name,
        payroll_department: payrollData.payroll_department,
        payroll_hours_worked: payrollData.payroll_hours_worked,
        payroll_gross_monthly_salary: payrollData.payroll_gross_monthly_salary,
        payroll_bonus: payrollData.payroll_bonus,
        payroll_deductions: payrollData.payroll_deductions,
        payroll_other_benefits: payrollData.payroll_other_benefits,
        payroll_overtime_hours: payrollData.payroll_overtime_hours,
      });
    }
  }, [dispatch, payrollData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayrolled({
      ...payrolled,
      [name]: value,
    });
    console.log(payrolled, "payroler");
  };

  useEffect(() => {
    dispatch(savePayrollData(payrolled));
  }, [dispatch, payrolled]);

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
    <main className="main_inTouch">
      <NavigationTop />
      <Navv />
      <div className="cennt mt-5">
        <div className="w-75 m-auto">
          <Alert className="text-center m-0 alertt">Payroll</Alert>
          <Container fluid className="inTouch_form">
            <Row>
              <Col lg={12} className="pe-0">
                <Form className="inTouch_form2">
                  <div className="tab_form override">
                    <Form.Group className="tab_form_" controlId="formBasicText">
                      <Form.Label className="m-0 pb-1">
                        Payroll Information
                      </Form.Label>

                      <div className="inner_ d-flex mb-3">
                        <div className="right w-25">
                          <Form.Label>Employee Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 d-flex gap-2 mailing">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payroll_name"
                            value={payrolled.payroll_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex mb-3">
                        <div className="right w-25">
                          <Form.Label className="">Department:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100"
                            name="payroll_department"
                            value={payrolled.payroll_department}
                            onChange={handleChange}
                          >
                            <option value="">Select Department</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Gastrology">Gastrology</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Other's">Other's</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex mb-3">
                        <div className="right w-25">
                          <Form.Label>Gross Monthly Salary:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payroll_gross_monthly_salary"
                            value={payrolled.payroll_gross_monthly_salary}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex mb-3">
                        <div className="right w-25">
                          <Form.Label>Hours Worked:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <span style={{ fontSize: "10px" }}>
                            Working Hours On Duty: 160
                          </span>
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payroll_hours_worked"
                            value={payrolled.payroll_hours_worked}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex mb-3">
                        <div className="right w-25">
                          <Form.Label style={{ whiteSpace: "nowrap" }}>
                            Bonus:
                          </Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payroll_bonus"
                            value={payrolled.payroll_bonus}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex mb-3">
                        <div className="right w-25">
                          <Form.Label className="">Department:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100"
                            name="payroll_other_benefits"
                            value={payrolled.payroll_other_benefits}
                            onChange={handleChange}
                          >
                            <option value=""></option>
                            <option value="Paid Leaves">Paid Leaves</option>
                            <option value="Encashment">Encashment</option>
                            <option value="Car EMI">Car EMI</option>
                            <option value="Free Courses">Free Courses</option>
                            <option value="Free Entertainment things">
                              Free Entertainment things
                            </option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex mb-3">
                        <div className="right w-25">
                          <Form.Label style={{ whiteSpace: "nowrap" }}>
                            Deductions:
                          </Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payroll_deductions"
                            value={payrolled.payroll_deductions}
                            onChange={handleChange}
                          />
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
  const finalPayroll = useSelector((state) => state.payroll.PayrollTemp);
  console.log(finalPayroll, "final payrolled");
  const { isError, message, isSuccess } = useSelector((state) => state.payroll);

  useEffect(() => {
    if (window.location.pathname === "/payroll") {
      setNavName("Save");
    } else {
      setNavName("Update");
    }
  });

  const finalSave = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(addPayrollingData(finalPayroll));
    console.log(finalPayroll, "final payroll in saving");
  };

  const finalUpdate = (e) => {
    e.preventDefault();
    setDisable(true);
    dispatch(updatePayrollingData({ id, finalPayroll }));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/payrollTable");
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
              <Link to="/payrollTable" className="py-1 px-3">
                <i className="fa-solid fa-xmark"></i> cancel
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Payroll;
