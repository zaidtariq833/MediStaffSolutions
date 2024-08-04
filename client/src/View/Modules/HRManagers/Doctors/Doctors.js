// import React, { useState, useEffect, useCallback } from "react";
// import {
//   Form,
//   Alert,
//   Row,
//   Col,
//   Container,
//   Navbar,
//   Nav,
//   ListGroup,
//   ListGroupItem,
//   Table,
// } from "react-bootstrap";

// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   addStaffManagementData,
// //   getSingleStaffManagementData,
// //   reset,
// //   saveStaffManagementData,
// //   updateStaffManagementData,
// // } from "../../../../../../features/workHistory/workHistorySlice";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import "../../WorkHistory/Forms/Main/WorkHistoryForm/workHistory.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { toast } from "react-toastify";
// import NavigationTop from "../../../../Containers/HeaderTop/headerTop";

// function Doctors() {
//   document.title = "HR Managers / Doctor";
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   let id = useParams();

//   const [doctor, setDoctor] = useState({
//     doctor_name: "",
//     doctor_department: "",
//     doctor_employee_id: "",
//     doctor_board_Certifications: "",
//     doctor_no_of_patients_attended: "",
//     doctor_no_of_surgeries_done: "",
//     doctor_experience: 0,
//     doctor_marital_status: "",
//     doctor_status: "",
//   });

//   const handleChange = () => {
//     const { name, value } = e.target;
//     setDoctor({
//       ...doctor,
//       [name]: value,
//     });
//   };

//   //   // Dropdows
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

//   const doctorsData = useSelector((state) => state.doctor.DoctorTemp);

//   useEffect(() => {
//     if (window.location.pathname != "/hrManagers/") {
//       setDoctor({
//         doctor_name: doctorsData.doctor_name,
//         doctor_department: doctorsData.staff_management_department,
//         doctor_employee_id: doctorsData.staff_management_employee_id,
//         doctor_board_Certifications: doctorsData.doctor_board_Certifications,
//         doctor_no_of_patients_attended:
//           doctorsData.doctor_no_of_patients_attended,
//         doctor_no_of_surgeries_done: doctorsData.doctor_no_of_surgeries_done,
//         doctor_experience: doctorsData.doctor_experience, 
//         doctor_marital_status: doctorsData.doctor_marital_status,
//         doctor_status: doctorsData.doctor_status,
//       });
//     }
//   }, [dispatch, staffManagementData]);

//   //   const handleChange = (e) => {
//   //     const { name, value } = e.target;
//   //     setStaffManagement({
//   //       ...staffManagement,
//   //       [name]: value,
//   //     });
//   //   };

//   //   useEffect(() => {
//   //     dispatch(saveStaffManagementData(staffManagement));
//   //   }, [dispatch, staffManagement]);

//   //   const escFunction = useCallback((event) => {
//   //     if (event.key === "Escape") {
//   //       setHide(false);
//   //       setHide1(false);
//   //       setHide2(false);
//   //     }
//   //   }, []);

//   //   useEffect(() => {
//   //     document.addEventListener("keydown", escFunction, false);

//   //     return () => {
//   //       document.removeEventListener("keydown", escFunction, false);
//   //     };
//   //   }, [escFunction]);

//   return (
//     <main className="main_workHistory">
//       <NavigationTop />
//       <Navv />
//       <div className="cennt mt-5">
//         <div className="w-75 m-auto">
//           <Alert className="text-center m-0 alertt">HR Managers / Doctor</Alert>
//           <Container fluid className="workhistory_form">
//             <Row>
//               <Col lg={12}>
//                 <Form className="workhistory_form2">
//                   <div className="tab_form override mb-2">
//                     <Form.Group
//                       className=" tab_form_"
//                       controlId="formBasicText"
//                     >
//                       <Form.Label className="m-0 pb-1">
//                         Doctor's Information
//                       </Form.Label>

//                       <div className="inner_ inner__ d-flex border-bottom">
//                         <div className="right w-25 d-flex align-items-center">
//                           <Form.Label className="">Name:</Form.Label>
//                         </div>
//                         <div className="py-1 px-2 left w-75">
//                           <Form.Control
//                             type="text"
//                             className="w-25"
//                             name="doctor_name"
//                             value={doctor.doctor_name}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="inner_ inner__ d-flex">
//                         <div className="right w-25 d-flex align-items-center">
//                           <Form.Label className="">Department:</Form.Label>
//                         </div>
//                         <div className="py-1 px-2 left w-50">
//                           <Form.Select
//                             className=""
//                             name="doctor_department"
//                             value={doctor.doctor_department}
//                             onChange={handleChange}
//                           >
//                             <option></option>
//                             <option>Cardiology</option>
//                             <option>Neurology</option>
//                             <option>Orthopedics</option>
//                             <option>Gastrologist</option>
//                           </Form.Select>
//                         </div>
//                       </div>

//                       <div className="inner_ inner__ d-flex border-bottom">
//                         <div className="right w-25 d-flex align-items-center">
//                           <Form.Label className="">Employee ID:</Form.Label>
//                         </div>
//                         <div className="py-1 px-2 left w-75">
//                           <Form.Control
//                             type="text"
//                             className="w-25"
//                             name="doctor_employee_id"
//                             value={doctor.doctor_employee_id}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       <div className="inner_ inner__  d-flex border-bottom">
//                         <div className="right w-25 d-flex">
//                           <Form.Label>Board Certifications:</Form.Label>
//                         </div>
//                         <div className="py-1 px-2 left w-50">
//                           <Form.Select
//                             className=""
//                             name="doctor_board_Certifications"
//                             value={doctor.doctor_board_Certifications}
//                             onChange={handleChange}
//                           >
//                             <option></option>
//                             <option>
//                               Certified Medical-Surgical Registered Nurse
//                               (CMSRN){" "}
//                             </option>
//                             <option>Family Nurse Practitioner (FNP-BC)</option>
//                             <option>Nurse Executive (NE-BC)</option>
//                             <option>
//                               Psychiatric-Mental Health Nurse Practitioner
//                               (PMHNP-BC){" "}
//                             </option>
//                           </Form.Select>
//                         </div>
//                       </div>

//                       <div className="inner_ inner__  d-flex border-bottom">
//                         <div className="right w-25 d-flex">
//                           <Form.Label
//                             style={{ whiteSpace: "nowrap", fontSize: "12px" }}
//                           >
//                             No. Of Patients Attended:
//                           </Form.Label>
//                         </div>
//                         <div className=" px-2 left w-75 d-flex">
//                           <div className="w-50 mt-1">
//                             <Form.Control
//                               type="text"
//                               className="w-25"
//                               name="doctor_no_of_patients_attended"
//                               value={doctor.doctor_no_of_patients_attended}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="inner_ inner__  d-flex border-bottom">
//                         <div className="right w-25 d-flex">
//                           <Form.Label>No. Of Surgeries Done:</Form.Label>
//                         </div>
//                         <div className=" px-2 left w-75 d-flex">
//                           <div className="w-50 mt-1">
//                             <Form.Control
//                               type="text"
//                               className="w-25"
//                               name="doctor_no_of_surgeries_done"
//                               value={doctor.doctor_no_of_surgeries_done}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="inner_ inner__  d-flex border-bottom">
//                         <div className="right w-25 d-flex">
//                           <Form.Label
//                             style={{ whiteSpace: "nowrap", fontSize: "12px" }}
//                           >
//                             Experience
//                           </Form.Label>
//                         </div>
//                         <div className=" px-2 left w-75 d-flex">
//                           <div className="w-50 mt-1">
//                             <Form.Control
//                               type="text"
//                               className="w-25"
//                               name="doctor_experience"
//                               value={doctor.doctor_experience}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="inner_ inner__  d-flex border-bottom">
//                         <div className="right w-25 d-flex">
//                           <Form.Label
//                             style={{ whiteSpace: "nowrap", fontSize: "12px" }}
//                           >
//                             Marital Status
//                           </Form.Label>
//                         </div>
//                         <div className=" px-2 left w-75 d-flex">
//                           <div className="w-50 mt-1">
//                             <Form.Select
//                               className=""
//                               name="doctor_marital_status"
//                               value={doctor.doctor_marital_status}
//                               onChange={handleChange}
//                             >
//                               <option></option>
//                               <option>Single</option>
//                               <option>Married</option>
//                             </Form.Select>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="inner_ inner__  d-flex border-bottom">
//                         <div className="right w-25 d-flex">
//                           <Form.Label
//                             style={{ whiteSpace: "nowrap", fontSize: "12px" }}
//                           >
//                             Status
//                           </Form.Label>
//                         </div>
//                         <div className=" px-2 left w-75 d-flex">
//                           <div className="w-50 mt-1">
//                             <Form.Select
//                               className=""
//                               name="doctor_status"
//                               value={doctor.doctor_status}
//                               onChange={handleChange}
//                             >
//                               <option></option>
//                               <option>Active</option>
//                               <option>Not Active</option>
//                             </Form.Select>
//                           </div>
//                         </div>
//                       </div>
//                     </Form.Group>
//                   </div>
//                 </Form>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//     </main>
//   );
// }

// function Navv() {
//   let id = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [disable, setDisable] = useState(false);
//   const [navName, setNavName] = useState("");
//   const finalDoctor = useSelector((state) => state.doctor.DoctorTemp);
//   const { isError, message, isSuccess } = useSelector((state) => state.doctor);

//   useEffect(() => {
//     if (window.location.pathname === "/hrManagers/doctor") {
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
//       navigate("/hrManagersTable");
//       setDisable(false);
//       dispatch(reset());
//     }

//     if (isError) {
//       setDisable(false);
//       toast.error(message);
//     }
//   }, [finalSave, finalUpdate]);

//   return (
//     <Navbar expand="lg" className="navbar navv">
//       <Container fluid className="mx-3">
//         <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
//           <ListGroup as="ul">
//             <ListGroupItem as="li" className="py-1 px-3">
//               {navName === "Save" ? (
//                 <Nav.Link
//                   onClick={finalSave}
//                   disabled={disable}
//                   className="py-1 px-3"
//                 >
//                   <i className="fa-solid fa-floppy-disk"></i> save
//                 </Nav.Link>
//               ) : (
//                 <Nav.Link
//                   onClick={finalUpdate}
//                   disabled={disable}
//                   className="py-1 px-3"
//                 >
//                   <i className="fa-solid fa-floppy-disk"></i> Update
//                 </Nav.Link>
//               )}
//             </ListGroupItem>
//             <ListGroupItem as="li" className="py-1 px-3">
//               <Link to="/staffManagementTable" className="py-1 px-3">
//                 <i className="fa-solid fa-xmark"></i> cancel
//               </Link>
//             </ListGroupItem>
//           </ListGroup>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default Doctors;


import React from 'react'

const Doctors = () => {
  return (
    <div>
      
    </div>
  )
}

export default Doctors
