import React, { useEffect } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  ListGroup,
  ListGroupItem,
  Spinner,
} from "react-bootstrap";
import NavigationTop from "../../../../../../Containers/HeaderTop/headerTop";
import {
  getShiftScheduling,
  deleteShiftSchedulingData,
  resetShiftScheduling,
} from "../../../../../../features/intouch/intouchSlice";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InTouchTable.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function InTouchTable() {
  document.title = "Shift Scheduling Table";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let authuser = useSelector((state) => state.auth);

  useEffect(() => {
    if (authuser.isError) {
      toast.error(authuser.message);
    }
    if (authuser.isSuccess || authuser.user) {
      if (Object.keys(authuser.user)[0] === "success") {
        navigate("/shiftSchedulingTable");
      }
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
    dispatch(resetShiftScheduling());
    dispatch(getShiftScheduling());
  }, []);

  useEffect(() => {
    if (isDelSuccess === true) {
      dispatch(resetShiftScheduling());
      dispatch(getShiftScheduling());
    }
  });

  const { ShiftScheduling, isError, message, isLoading, isSuccess, isDelSuccess } =
    useSelector((state) => state.shiftScheduling);
  return (
    <main className="main_inTouchTable">
      <NavigationTop />
      <Navv />
      <div className="cennt mt-5">
        <div className="inTouchTable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Shift Scheduling Table </label>
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
                      <th>Shift Type</th>
                      <th>Doctor's Name</th>
                      <th>Week Day</th>
                      <th>Total Patient's</th>
                      <th>Fee</th>
                      <th>Assigned Branch</th>
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading && (
                      <tr>
                        <td colSpan="13" className="text-center">
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
                        <td colSpan="13" className="text-center">
                          {message}
                        </td>
                      </tr>
                    )}
                    {isSuccess &&
                      (ShiftScheduling.length != 0 ? (
                        <>
                          {ShiftScheduling.map((data, i) => (
                            <tr key={i}>
                              <td>{data.shiftScheduling_type}</td>
                              <td>{data.shiftScheduling_doctor_name}</td>
                              <td>{data.shiftScheduling_week_day}</td>
                              <td>{data.shiftScheduling_total_patients}</td>
                              <td>{data.shiftScheduling_total_amount}</td>
                              <td>{data.shiftScheduling_assigned_branch}</td>
                              <td>{data.shiftScheduling_dept}</td>
                              <td>
                                <div className=" d-flex align-items-center ">
                                  <button
                                    className="border px-3 text-nowrap"
                                    onClick={() => {
                                      dispatch(deleteShiftSchedulingData(data._id));
                                      console.log(data._id);
                                      if (!data._id) {
                                        dispatch(resetShiftScheduling());
                                      }
                                    }}
                                  >
                                    <i className="fa-solid fa-trash"></i>
                                    Delete
                                  </button>
                                  <button
                                    className="border px-3 text-nowrap"
                                    onClick={() => {
                                      navigate(`/shiftScheduling/${data._id}`);
                                      dispatch(resetShiftScheduling());
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
                            <td colSpan="13" className="text-center">
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
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              {/* <Link to="/inTouch" >
                <i className="fa-solid fa-square-plus"></i> New
              </Link> */}
              <Nav.Link
                onClick={() => {
                  navigate("/shiftScheduling");
                  dispatch(resetShiftScheduling());
                }}
              >
                <i className="fa-solid fa-square-plus"></i> New
              </Nav.Link>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default InTouchTable;
