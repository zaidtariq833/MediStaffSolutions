import React, { useEffect, useState } from "react";
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
import NavigationTop from "../../../../../../../Containers/HeaderTop/headerTop";
// import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserDetailData,
  saveUserDetailData,
} from "../../../../../../../features/userDetail/userDetailSlice";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./user.css";

function User() {
  document.title = "Sign Up";
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({
    userDetail_userAccountInformation_userName: "",
    userDetail_userAccountInformation_userLogin: "",
    userDetail_userAccountInformation_email: "",
    userDetail_role: "",
    userDetail_userAccountInformation_mobillePhone: "",
    userDetail_userAccountInformation_password: "",
    userDetail_userAccountInformation_retypepassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
    console.log(userDetail, "user detail info");
  };
  useEffect(() => {
    dispatch(saveUserDetailData(userDetail));
  }, [dispatch, userDetail]);

  return (
    <main className="main_user">
      <NavigationTop />
      <Navv />
      <div>
        <img src="" />
      </div>
      <div className="cennt mt-5">
        <div className="w-75 m-auto">
          <Alert className="text-center m-0 alertt">SIGN UP</Alert>
          <Container fluid className="user_form">
            <Row>
              <Col lg={12}>
                <Form className="user_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className=" tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        User Account Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>User Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="userDetail_userAccountInformation_userName"
                            value={
                              userDetail.userDetail_userAccountInformation_userName
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>User Login:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="userDetail_userAccountInformation_userLogin"
                            value={
                              userDetail.userDetail_userAccountInformation_userLogin
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Email:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="email"
                            className="w-75"
                            name="userDetail_userAccountInformation_email"
                            value={
                              userDetail.userDetail_userAccountInformation_email
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Role:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50">
                          <Form.Select
                            className=""
                            name="userDetail_role"
                            value={userDetail.userDetail_role}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>HR</option>
                            <option>Admin</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Mobille Phone:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="userDetail_userAccountInformation_mobillePhone"
                            value={
                              userDetail.userDetail_userAccountInformation_mobillePhone
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Password:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="password"
                            className="w-75"
                            name="userDetail_userAccountInformation_password"
                            value={
                              userDetail.userDetail_userAccountInformation_password
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Retype Password:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="password"
                            className="w-75"
                            name="userDetail_userAccountInformation_retypepassword"
                            value={
                              userDetail.userDetail_userAccountInformation_retypepassword
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>User Status:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-25"
                            name="userDetail_userAccountInformation_userStatus"
                            value={
                              userDetail.userDetail_userAccountInformation_userStatus
                            }
                            onChange={handleChange}
                          >
                            <option>Active</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>User Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 mb-2">
                          <Form.Select
                            className="w-100 align-items-start"
                            style={{ height: "40px" }}
                            name="userDetail_userAccountInformation_userType"
                            value={
                              userDetail.userDetail_userAccountInformation_userType
                            }
                            onChange={handleChange}
                          >
                            <option>Biller, Collector</option>
                            <option>Biller</option>
                            <option>Collector</option>
                          </Form.Select>
                        </div>
                      </div> */}
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const finalDataUserDetail = useSelector(
    (state) => state.userDetail.UserDetailTemp
  );

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addUserDetailData(finalDataUserDetail));
    navigate("/userProfileTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <ListGroup as="ul">
            <ListGroupItem onClick={finalSave} as="li" className="py-1 px-3">
              <Nav.Link className="py-1 px-3">
                <i className="fa-solid fa-floppy-disk"></i> Save
              </Nav.Link>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/userProfileTable" className="py-1 px-3">
                <i className="fa-solid fa-xmark"></i> cancel
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default User;
