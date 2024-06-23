import { Navbar, Nav, Form, Button, Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./headerTop.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

function NavigationTop() {
  const navigate = useNavigate();
  const disptach = useDispatch();

  const userLogout = (e) => {
    e.preventDefault();
    disptach(logout());
    disptach(reset());
    navigate("/");
  };

  const name = useSelector((state) => state.auth.user);
  
  return (
    <main className="header_top">
      <Navbar expand="lg" className="navbar">
        <Container fluid className="mx-3">
          <div className="navigate d-flex justify-content-between w-100">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <p className="m-0" style={{fontSize: '12px', fontWeight: 'bold'}}>
                Welcome:&nbsp;{name?.userEmail}
              </p>
              <Link to="/dashboard">
                <i className="fa-solid fa-chart-line">Dashboard</i>
              </Link>
              <Nav.Link onClick={userLogout}>
                <i className="fa-solid fa-right-from-bracket"></i> Logout
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </main>
  );
}

export default NavigationTop;
