import React, { useEffect } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import NavigationTop from "../../../../../../../Containers/HeaderTop/headerTop";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getfuncUserDetailData,
  deleteUserDetailData,
  reset,
} from "../../../../../../../features/userDetail/userDetailSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./userProfileTable.css";

function UserProfileTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getfuncUserDetailData());
  }, []);

  const userProfileData = useSelector((state) => state.userDetail.UserDetail);
  console.log(userProfileData, "user profile data")

  return (
    <main className="main_userProfileTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="userProfileTable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> User Profile </label>
              </div>
              <div>
                <AdvancedExample />
              </div>
            </div>
            <div className="body">
              <div className="body_inner py-1 ">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>User Login</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Mobille Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userProfileData && (
                      <>
                        {userProfileData.map((data, i) => (
                          <tr key={i}>
                            <td>
                              {data.userDetail_userAccountInformation_userName}
                            </td>
                            <td>
                              {data.userDetail_userAccountInformation_userLogin}
                            </td>
                            <td>
                              {data.userDetail_userAccountInformation_email}
                            </td>
                            <td>
                              {data.userDetail_role}
                            </td>
                            <td>
                              {
                                data.userDetail_userAccountInformation_mobillePhone
                              }
                            </td>
                            <td>
                              <div className=" d-flex align-items-center ">
                                <button
                                  className="border px-3 text-nowrap"
                                  onClick={() => {
                                    console.log(data._id);
                                    dispatch(deleteUserDetailData(data._id));

                                    if (!data._id) {
                                      dispatch(reset());
                                    } else {
                                      dispatch(getfuncUserDetailData());
                                    }
                                  }}
                                >
                                  <i className="fa-solid fa-trash"></i>
                                  Delete
                                </button>
                                <button
                                  className="border px-3 text-nowrap"
                                  onClick={() => {
                                    navigate(`/user/${data._id}`);
                                    // disptach(deleteClient(client._id))
                                    // // window.location.reload()
                                    // disptach(getfuncUserDetailData())
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
                    )}
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
  //   const navigate = useNavigate;
  //   const pathChange = () => {
  //     e.preventDefault();
  //     navigate("/user");
  //   };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link onClick={pathChange} href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link> */}
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/user" className="py-1 px-3">
                <i className="fa-solid fa-square-plus"></i> New
              </Link>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/userProfileTable" className="py-1 px-3">
                <i className="fa-solid fa-pen-to-square"></i> Edit
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default UserProfileTable;
