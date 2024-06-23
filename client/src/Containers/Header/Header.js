import React, { useEffect, useState } from "react";
import { Navbar, ListGroup, Dropdown, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/HealthCare-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Navbar bg="light " className="navbar_ d-block">
      <div className="logo" onClick={userLogout}>
        <img src={logo} width="50%" alt="" />
      </div>
      <ListGroup as="ul" className="list">
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/shiftSchedulingTable">
              <i className="fa-solid fa-bars"></i>{" "}
              <span style={{fontSize: "13px"}}> Shift Scheduling </span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/staffManagementTable">
              <i className="fa-solid fa-briefcase"></i>
              <span style={{fontSize: "13px"}}> Staff Management </span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/performanceAnalysisTable">
              <i className="fa-solid fa-registered"></i>{" "}
              <span style={{fontSize: "13px"}}> Performance Analysis</span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/hrManagersTable">
              <i className="fa-solid fa-users"></i>
              <span style={{ fontSize: "13px" }}>HR Managers</span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/hrManagers/doctors">
              <i class="fa-solid fa-user-doctor"></i>
              <span style={{ fontSize: "13px" }}>HR Managers / Doctor</span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/hrManagers/nurses">
              <i class="fa-solid fa-user-nurse"></i>
              <span style={{fontSize: "13px"}}>HR Managers / Nurses</span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/hrManagers/otherStaff">
              <i class="fa-solid fa-person"></i>
              <span style={{fontSize: "13px"}}>HR Managers / OtherStaff</span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ml-2">
            <NavLink to="/payrollTable">
              <i class="fa-solid fa-money-bill"></i>
              <span style={{fontSize: "13px"}}> Payroll</span>
            </NavLink>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup as="ul" className="list">
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/shiftSchedulingTable">
              <i className="fa-solid fa-bars"></i> <span> Arham </span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/staffManagementTable">
              <i className="fa-solid fa-briefcase"></i>
              <span> Arham </span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/performanceAnalysisTable">
              <i className="fa-solid fa-registered"></i> <span> Arham</span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/reportingAnalysisTable">
              <i className="fa-solid fa-code-branch"></i>
              <span> Arham</span>
            </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/hrManagersTable">
              <i className="fa-solid fa-users"></i>
              <span> Arham</span>
            </NavLink>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Navbar>
  );
}

export default Navigation;
