import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import HealthCareLogo from "../../assets/images/HealthCare-removebg-preview.png";
import { toast } from "react-toastify";

function UserProfile() {
  document.title = "Login";
  const navigate = useNavigate();
  const disptach = useDispatch();
  const [formData, setFormData] = useState({
    userDetail_userAccountInformation_email: "",
    userDetail_userAccountInformation_password: "",
  });
  const {
    userDetail_userAccountInformation_email,
    userDetail_userAccountInformation_password,
  } = formData;
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      if (Object.keys(user)[0] === "success") {
        navigate("/dashboard");
        toast.success("Loged in Successfully");
      }
    } else {
      navigate("/");
    }
  }, [user, isError, isSuccess, message, navigate, disptach]);

  const signUp = () => {
    navigate("/user");
  };

  const handleChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const userlogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    disptach(reset());

    const userData = {
      userDetail_userAccountInformation_email,
      userDetail_userAccountInformation_password,
    };
    disptach(login(userData));
    if (isSuccess) {
      console.log("Done");
    }
  };

  return (
    <>
      <main className="main_user2">
        <div className="login_form1">
          <div>
            <Alert className="text-center fs-4 m-0 alertt">
              <img
                src={HealthCareLogo}
                style={{ width: "150px" }}
                alt="Logo Will Here"
              />
            </Alert>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <Form className="form py-3 px-4 ">
              <div className="mt-2 mb-5">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="userDetail_userAccountInformation_email"
                    type="text"
                    value={userDetail_userAccountInformation_email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-2 " controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="userDetail_userAccountInformation_password"
                    type="password"
                    value={userDetail_userAccountInformation_password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              {isLoading === true ? (
                <>
                  <div className="text-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    className="form_btn mt-2 w-100"
                    type="submit"
                    onClick={userlogin}
                  >
                    Log In
                  </Button>
                  <Button
                    className="form_btn mt-2 w-100"
                    type="submit"
                    onClick={signUp}
                  >
                    Sign Up
                  </Button>
                </>
              )}
              <div className="message text-center mt-4">
                {/* <p>
                  Forgot Password?
                  <NavLink to="/application/registor" className="mx-2">
                    Click Here
                  </NavLink>
                </p> */}
              </div>
            </Form>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}

export default UserProfile;
