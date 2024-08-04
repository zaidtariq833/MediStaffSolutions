// import React, { useEffect } from "react";
// import {
//   Table,
//   Pagination,
//   Navbar,
//   Container,
//   Nav,
//   Form,
//   ListGroup,
//   ListGroupItem,
//   Spinner,
//   Dropdown,
// } from "react-bootstrap";
// import NavigationTop from "../../../../Containers/HeaderTop/headerTop";
// import { useDispatch } from "react-redux";
// // import {
// //   deleteStaffManagementData,
// //   getAllStaffManagementData,
// //   reset,
// // } from "../../../../../../features/workHistory/workHistorySlice";
// import { useSelector } from "react-redux";
// import "./HRManagersTable.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   deletePayrollingData,
//   getAllPayrollingData,
//   reset,
// } from "../../../../features/payroll/payrollSlice";
// import {
//   getOtherStaffing,
//   resetOtherStaffing,
// } from "../../../../features/hrManager/OtherStaff/OtherStaffSlice";

// function HRManagersTable() {
//   document.title = "HR Managers Table";
//   const id = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   let authuser = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(getOtherStaffing());
//   }, []);

//   useEffect(() => {
//     if (isDelSuccess === true) {
//       dispatch(resetOtherStaffing());
//       dispatch(getOtherStaffing());
//     }
//   });

//   const { OtherStaff, isLoading, isError, isSuccess, message, isDelSuccess } =
//     useSelector((state) => state.otherStaff);

//   console.log(OtherStaff, "Other Staff data array");
  
//   return (
//     <main className="main_payrollTable">
//       <NavigationTop />
//       <div className="cennt mt-5">
//         <div className="payrollTable_feild  w-100 mx-4 p-2">
//           <div className="sec des">
//             <div className="head d-flex align-items-center justify-content-between">
//               <div>
//                 <label> Doctor </label>
//               </div>
//               <div>
//                 <AdvancedExample />
//               </div>
//             </div>
//             {/* <div className="body">
//               <div className="body_inner py-1 ">
//                 <Table responsive>
//                   <thead>
//                     <tr className="bg-light">
//                       <th>
//                         Employee Name
//                         <i className="fa-solid fa-caret-up px-2"></i>
//                       </th>
//                       <th>
//                         Department
//                         <i className="fa-solid fa-caret-up px-2"></i>{" "}
//                       </th>
//                       <th>Hours Worked</th>
//                       <th>Gross Monthly Salary</th>
//                       <th>Bonus</th>
//                       <th>Deductions</th>
//                       <th>Other Benefits</th>
//                       <th>Overtime hours</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {isLoading && (
//                       <tr>
//                         <td colSpan="12" className="text-center">
//                           <Spinner animation="border" role="status">
//                             <span className="visually-hidden mt-5">
//                               Loading...
//                             </span>
//                           </Spinner>
//                         </td>
//                       </tr>
//                     )}
//                     {isError && (
//                       <tr>
//                         <td colSpan="12" className="text-center">
//                           {message}
//                         </td>
//                       </tr>
//                     )}
//                     {isSuccess &&
//                       (Payroll.length != 0 ? (
//                         <>
//                           {Payroll.map((data, i) => (
//                             <tr key={i}>
//                               <td>{data.payroll_name}</td>
//                               <td>{data.payroll_department}</td>
//                               <td>{data.payroll_hours_worked}</td>
//                               <td>{data.payroll_gross_monthly_salary}</td>
//                               <td>{data.payroll_bonus}</td>
//                               <td>{data.payroll_deductions}</td>
//                               <td>{data.payroll_other_benefits}</td>
//                               <td>{data.payroll_overtime_hours}</td>
//                               <td>
//                                 <div className=" d-flex align-items-center ">
//                                   <button
//                                     className="border px-3 text-nowrap"
//                                     onClick={() => {
//                                       dispatch(deletePayrollingData(data._id));
//                                       // console.log(data._id);
//                                       if (!data._id) {
//                                         dispatch(reset());
//                                       }
//                                     }}
//                                   >
//                                     <i className="fa-solid fa-trash"></i>
//                                     Delete
//                                   </button>
//                                   <button
//                                     className="border px-3 text-nowrap"
//                                     onClick={() => {
//                                       navigate(`/payroll/${data._id}`);
//                                       //   dispatch(reset());
//                                     }}
//                                   >
//                                     <i class="fa-solid fa-pen"></i>
//                                     Edit
//                                   </button>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))}
//                         </>
//                       ) : (
//                         <>
//                           <tr>
//                             <td colSpan="12" className="text-center">
//                               No Data Available
//                             </td>
//                           </tr>
//                         </>
//                       ))}
//                   </tbody>
//                 </Table>
//               </div>
//             </div> */}
//           </div>
//           <div className="sec des">
//             <div className="head d-flex align-items-center justify-content-between">
//               <div>
//                 <label> Nurses </label>
//               </div>
//               <div>
//                 <AdvancedExample />
//               </div>
//             </div>
//             <div className="body">
//               <div className="body_inner py-1 ">
//                 <Table responsive>
//                   <thead>
//                     <tr className="bg-light">
//                       <th>
//                         Employee Name
//                         <i className="fa-solid fa-caret-up px-2"></i>
//                       </th>
//                       <th>
//                         Department
//                         <i className="fa-solid fa-caret-up px-2"></i>{" "}
//                       </th>
//                       <th>Hours Worked</th>
//                       <th>Gross Monthly Salary</th>
//                       <th>Bonus</th>
//                       <th>Deductions</th>
//                       <th>Other Benefits</th>
//                       <th>Overtime hours</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   {/* <tbody>
//                     {isLoading && (
//                       <tr>
//                         <td colSpan="12" className="text-center">
//                           <Spinner animation="border" role="status">
//                             <span className="visually-hidden mt-5">
//                               Loading...
//                             </span>
//                           </Spinner>
//                         </td>
//                       </tr>
//                     )}
//                     {isError && (
//                       <tr>
//                         <td colSpan="12" className="text-center">
//                           {message}
//                         </td>
//                       </tr>
//                     )}
//                     {isSuccess &&
//                       (Payroll.length != 0 ? (
//                         <>
//                           {Payroll.map((data, i) => (
//                             <tr key={i}>
//                               <td>{data.payroll_name}</td>
//                               <td>{data.payroll_department}</td>
//                               <td>{data.payroll_hours_worked}</td>
//                               <td>{data.payroll_gross_monthly_salary}</td>
//                               <td>{data.payroll_bonus}</td>
//                               <td>{data.payroll_deductions}</td>
//                               <td>{data.payroll_other_benefits}</td>
//                               <td>{data.payroll_overtime_hours}</td>
//                               <td>
//                                 <div className=" d-flex align-items-center ">
//                                   <button
//                                     className="border px-3 text-nowrap"
//                                     onClick={() => {
//                                       dispatch(deletePayrollingData(data._id));
//                                       // console.log(data._id);
//                                       if (!data._id) {
//                                         dispatch(reset());
//                                       }
//                                     }}
//                                   >
//                                     <i className="fa-solid fa-trash"></i>
//                                     Delete
//                                   </button>
//                                   <button
//                                     className="border px-3 text-nowrap"
//                                     onClick={() => {
//                                       navigate(`/payroll/${data._id}`);
//                                       //   dispatch(reset());
//                                     }}
//                                   >
//                                     <i class="fa-solid fa-pen"></i>
//                                     Edit
//                                   </button>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))}
//                         </>
//                       ) : (
//                         <>
//                           <tr>
//                             <td colSpan="12" className="text-center">
//                               No Data Available
//                             </td>
//                           </tr>
//                         </>
//                       ))}
//                   </tbody> */}
//                 </Table>
//               </div>
//             </div>
//           </div>
//           <div className="sec des">
//             <div className="head d-flex align-items-center justify-content-between">
//               <div>
//                 <label> Other Staff </label>
//               </div>
//               <div>
//                 <AdvancedExample />
//               </div>
//             </div>
//             <div className="body">
//               <div className="body_inner py-1 ">
//                 <Table responsive>
//                   <thead>
//                     <tr className="bg-light">
//                       <th>
//                         Employee Name
//                         <i className="fa-solid fa-caret-up px-2"></i>
//                       </th>
//                       <th>
//                         Department
//                         <i className="fa-solid fa-caret-up px-2"></i>{" "}
//                       </th>
//                       <th>Hours Worked</th>
//                       <th>Gross Monthly Salary</th>
//                       <th>Bonus</th>
//                       <th>Deductions</th>
//                       <th>Other Benefits</th>
//                       <th>Overtime hours</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {isLoading && (
//                       <tr>
//                         <td colSpan="12" className="text-center">
//                           <Spinner animation="border" role="status">
//                             <span className="visually-hidden mt-5">
//                               Loading...
//                             </span>
//                           </Spinner>
//                         </td>
//                       </tr>
//                     )}
//                     {isError && (
//                       <tr>
//                         <td colSpan="12" className="text-center">
//                           {message}
//                         </td>
//                       </tr>
//                     )}
//                     {isSuccess &&
//                       (OtherStaff.length != 0 ? (
//                         <>
//                           {OtherStaff.map((data, i) => (
//                             <tr key={i}>
//                               <td>{data.otherStaff_name}</td>
//                               <td>{data.otherStaff_department}</td>
//                               <td>{data.otherStaff_employee_id}</td>
//                               <td>{data.payroll_gross_monthly_salary}</td>
//                               <td>{data.payroll_bonus}</td>
//                               <td>{data.payroll_deductions}</td>
//                               <td>{data.payroll_other_benefits}</td>
//                               <td>{data.payroll_overtime_hours}</td>
//                               <td>
//                                 <div className=" d-flex align-items-center ">
//                                   <button
//                                     className="border px-3 text-nowrap"
//                                     onClick={() => {
//                                       dispatch(deletePayrollingData(data._id));
//                                       // console.log(data._id);
//                                       if (!data._id) {
//                                         dispatch(reset());
//                                       }
//                                     }}
//                                   >
//                                     <i className="fa-solid fa-trash"></i>
//                                     Delete
//                                   </button>
//                                   <button
//                                     className="border px-3 text-nowrap"
//                                     onClick={() => {
//                                       navigate(`/payroll/${data._id}`);
//                                       //   dispatch(reset());
//                                     }}
//                                   >
//                                     <i class="fa-solid fa-pen"></i>
//                                     Edit
//                                   </button>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))}
//                         </>
//                       ) : (
//                         <>
//                           <tr>
//                             <td colSpan="12" className="text-center">
//                               No Data Available
//                             </td>
//                           </tr>
//                         </>
//                       ))}
//                   </tbody>
//                 </Table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// function AdvancedExample() {
//   return (
//     <Pagination>
//       <Pagination.Item active>{1}</Pagination.Item>
//       {/* <Pagination.Ellipsis /> */}

//       <Pagination.Item>{2}</Pagination.Item>
//       <Pagination.Item>{3}</Pagination.Item>
//       <Pagination.Item>{4}</Pagination.Item>
//       <Pagination.Item>{5}</Pagination.Item>
//       {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
//       <Pagination.First />
//       <Pagination.Prev />
//       <Pagination.Next />
//       <Pagination.Last />
//     </Pagination>
//   );
// }

// export default HRManagersTable;


import React, { useEffect } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  Form,
  ListGroup,
  ListGroupItem,
  Spinner,
  Dropdown,
} from "react-bootstrap";
import NavigationTop from "../../../../Containers/HeaderTop/headerTop";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deletePayrollingData,
  getAllPayrollingData,
  reset,
} from "../../../../features/payroll/payrollSlice";
import {
  getOtherStaffing,
  resetOtherStaffing,
} from "../../../../features/hrManager/OtherStaff/OtherStaffSlice";
import "./HRManagersTable.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HRManagersTable() {
  document.title = "HR Managers Table";
  const id = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let authuser = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getOtherStaffing());
  }, []);

  useEffect(() => {
    if (isDelSuccess === true) {
      dispatch(resetOtherStaffing());
      dispatch(getOtherStaffing());
    }
  });

  const { OtherStaff, isLoading, isError, isSuccess, message, isDelSuccess } =
    useSelector((state) => state.otherStaff);

  console.log(OtherStaff, "Other Staff data array");

  const dummyDoctors = [
    { id: 1, name: "Dr. Ahmed Khan", department: "Cardiology", hoursWorked: 160, grossMonthlySalary: 120000, bonus: 1000, deductions: 500, otherBenefits: 200, overtimeHours: 10 },
    { id: 2, name: "Dr. Aisha Malik", department: "Neurology", hoursWorked: 150, grossMonthlySalary: 110000, bonus: 900, deductions: 450, otherBenefits: 150, overtimeHours: 8 },
    { id: 3, name: "Dr. Hina Rehman", department: "Pediatrics", hoursWorked: 155, grossMonthlySalary: 115000, bonus: 950, deductions: 475, otherBenefits: 175, overtimeHours: 9 },
    { id: 4, name: "Dr. Bilal Ahmed", department: "Orthopedics", hoursWorked: 160, grossMonthlySalary: 125000, bonus: 1100, deductions: 550, otherBenefits: 250, overtimeHours: 12 },
    { id: 5, name: "Dr. Sara Ali", department: "Dermatology", hoursWorked: 148, grossMonthlySalary: 108000, bonus: 850, deductions: 425, otherBenefits: 125, overtimeHours: 7 },
    { id: 6, name: "Dr. Imran Khan", department: "Oncology", hoursWorked: 162, grossMonthlySalary: 130000, bonus: 1200, deductions: 600, otherBenefits: 300, overtimeHours: 15 },
    { id: 7, name: "Dr. Zainab Fatima", department: "Radiology", hoursWorked: 158, grossMonthlySalary: 118000, bonus: 950, deductions: 475, otherBenefits: 225, overtimeHours: 11 },
    { id: 8, name: "Dr. Faizan Siddiqui", department: "Gynecology", hoursWorked: 157, grossMonthlySalary: 119000, bonus: 1000, deductions: 500, otherBenefits: 200, overtimeHours: 9 },
    { id: 9, name: "Dr. Maryam Shah", department: "Urology", hoursWorked: 152, grossMonthlySalary: 113000, bonus: 900, deductions: 450, otherBenefits: 175, overtimeHours: 10 },
    { id: 10, name: "Dr. Yasir Mehmood", department: "Endocrinology", hoursWorked: 150, grossMonthlySalary: 112000, bonus: 950, deductions: 475, otherBenefits: 150, overtimeHours: 8 },
    { id: 11, name: "Dr. Asma Tariq", department: "Gastroenterology", hoursWorked: 153, grossMonthlySalary: 114000, bonus: 980, deductions: 490, otherBenefits: 180, overtimeHours: 9 },
    { id: 12, name: "Dr. Arif Raza", department: "Nephrology", hoursWorked: 160, grossMonthlySalary: 125000, bonus: 1050, deductions: 525, otherBenefits: 220, overtimeHours: 10 },
    { id: 13, name: "Dr. Nadia Javed", department: "Ophthalmology", hoursWorked: 154, grossMonthlySalary: 116000, bonus: 900, deductions: 450, otherBenefits: 200, overtimeHours: 8 },
    { id: 14, name: "Dr. Salman Qureshi", department: "Psychiatry", hoursWorked: 158, grossMonthlySalary: 117000, bonus: 950, deductions: 475, otherBenefits: 210, overtimeHours: 9 },
    { id: 15, name: "Dr. Uzma Saeed", department: "Pulmonology", hoursWorked: 149, grossMonthlySalary: 109000, bonus: 800, deductions: 400, otherBenefits: 175, overtimeHours: 7 },
  ];
  
  const dummyNurses = [
    { id: 1, name: "Nurse Ahmed Khan", department: "Cardiology", hoursWorked: 160, grossMonthlySalary: 60000, bonus: 300, deductions: 100, otherBenefits: 50, overtimeHours: 5 },
    { id: 2, name: "Nurse Aisha Malik", department: "Neurology", hoursWorked: 150, grossMonthlySalary: 58000, bonus: 250, deductions: 90, otherBenefits: 60, overtimeHours: 4 },
    { id: 3, name: "Nurse Hina Rehman", department: "Pediatrics", hoursWorked: 155, grossMonthlySalary: 59000, bonus: 280, deductions: 95, otherBenefits: 70, overtimeHours: 6 },
    { id: 4, name: "Nurse Bilal Ahmed", department: "Orthopedics", hoursWorked: 160, grossMonthlySalary: 61000, bonus: 310, deductions: 110, otherBenefits: 80, overtimeHours: 7 },
    { id: 5, name: "Nurse Sara Ali", department: "Dermatology", hoursWorked: 148, grossMonthlySalary: 57000, bonus: 240, deductions: 85, otherBenefits: 60, overtimeHours: 3 },
    { id: 6, name: "Nurse Imran Khan", department: "Oncology", hoursWorked: 162, grossMonthlySalary: 62000, bonus: 320, deductions: 120, otherBenefits: 90, overtimeHours: 8 },
    { id: 7, name: "Nurse Zainab Fatima", department: "Radiology", hoursWorked: 158, grossMonthlySalary: 60000, bonus: 280, deductions: 110, otherBenefits: 70, overtimeHours: 6 },
    { id: 8, name: "Nurse Faizan Siddiqui", department: "Gynecology", hoursWorked: 157, grossMonthlySalary: 59500, bonus: 290, deductions: 105, otherBenefits: 75, overtimeHours: 5 },
    { id: 9, name: "Nurse Maryam Shah", department: "Urology", hoursWorked: 152, grossMonthlySalary: 58000, bonus: 260, deductions: 90, otherBenefits: 65, overtimeHours: 4 },
    { id: 10, name: "Nurse Yasir Mehmood", department: "Endocrinology", hoursWorked: 150, grossMonthlySalary: 57500, bonus: 250, deductions: 85, otherBenefits: 60, overtimeHours: 3 },
    { id: 11, name: "Nurse Asma Tariq", department: "Gastroenterology", hoursWorked: 153, grossMonthlySalary: 58500, bonus: 270, deductions: 95, otherBenefits: 70, overtimeHours: 5 },
    { id: 12, name: "Nurse Arif Raza", department: "Nephrology", hoursWorked: 160, grossMonthlySalary: 61000, bonus: 300, deductions: 110, otherBenefits: 80, overtimeHours: 7 },
    { id: 13, name: "Nurse Nadia Javed", department: "Ophthalmology", hoursWorked: 154, grossMonthlySalary: 59000, bonus: 280, deductions: 100, otherBenefits: 75, overtimeHours: 6 },
    { id: 14, name: "Nurse Salman Qureshi", department: "Psychiatry", hoursWorked: 158, grossMonthlySalary: 60000, bonus: 290, deductions: 105, otherBenefits: 80, overtimeHours: 7 },
    { id: 15, name: "Nurse Uzma Saeed", department: "Pulmonology", hoursWorked: 149, grossMonthlySalary: 57000, bonus: 250, deductions: 90, otherBenefits: 70, overtimeHours: 4 },
    { id: 16, name: "Nurse Nida Abbas", department: "ICU", hoursWorked: 160, grossMonthlySalary: 62000, bonus: 320, deductions: 120, otherBenefits: 90, overtimeHours: 8 },
    { id: 17, name: "Nurse Junaid Haider", department: "Emergency", hoursWorked: 158, grossMonthlySalary: 60500, bonus: 310, deductions: 110, otherBenefits: 80, overtimeHours: 7 },
    { id: 18, name: "Nurse Farah Hassan", department: "Surgery", hoursWorked: 155, grossMonthlySalary: 59000, bonus: 280, deductions: 100, otherBenefits: 70, overtimeHours: 6 },
    { id: 19, name: "Nurse Kamran Shah", department: "Recovery", hoursWorked: 150, grossMonthlySalary: 57500, bonus: 260, deductions: 90, otherBenefits: 65, overtimeHours: 5 },
    { id: 20, name: "Nurse Shaista Iqbal", department: "Maternity", hoursWorked: 152, grossMonthlySalary: 58500, bonus: 270, deductions: 95, otherBenefits: 70, overtimeHours: 5 },
    { id: 21, name: "Nurse Shafiq Malik", department: "Neonatal", hoursWorked: 160, grossMonthlySalary: 61000, bonus: 310, deductions: 110, otherBenefits: 80, overtimeHours: 8 },
    { id: 22, name: "Nurse Sania Mirza", department: "Pediatric ICU", hoursWorked: 158, grossMonthlySalary: 60500, bonus: 300, deductions: 100, otherBenefits: 75, overtimeHours: 7 },
    { id: 23, name: "Nurse Hassan Ali", department: "Rehabilitation", hoursWorked: 157, grossMonthlySalary: 59500, bonus: 290, deductions: 105, otherBenefits: 70, overtimeHours: 6 },
    { id: 24, name: "Nurse Alina Raza", department: "Geriatrics", hoursWorked: 154, grossMonthlySalary: 59000, bonus: 280, deductions: 100, otherBenefits: 75, overtimeHours: 6 },
    { id: 25, name: "Nurse Usman Tariq", department: "Oncology", hoursWorked: 160, grossMonthlySalary: 62000, bonus: 320, deductions: 120, otherBenefits: 90, overtimeHours: 8 },
  ];
  

  return (
    <main className="main_payrollTable">
      <NavigationTop />
      <div className="cennt mt-5">
        <div className="payrollTable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Doctors </label>
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
                      <th>
                        Employee Name
                        <i className="fa-solid fa-caret-up px-2"></i>
                      </th>
                      <th>
                        Department
                        <i className="fa-solid fa-caret-up px-2"></i>
                      </th>
                      <th>Hours Worked</th>
                      <th>Gross Monthly Salary</th>
                      <th>Bonus</th>
                      <th>Deductions</th>
                      <th>Other Benefits</th>
                      <th>Overtime hours</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyDoctors.map((data, i) => (
                      <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.department}</td>
                        <td>{data.hoursWorked}</td>
                        <td>{data.grossMonthlySalary}</td>
                        <td>{data.bonus}</td>
                        <td>{data.deductions}</td>
                        <td>{data.otherBenefits}</td>
                        <td>{data.overtimeHours}</td>
                        <td>
                          <div className=" d-flex align-items-center ">
                            <button className="border px-3 text-nowrap">
                              <i className="fa-solid fa-trash"></i>
                              Delete
                            </button>
                            <button
                              className="border px-3 text-nowrap"
                              onClick={() => {
                                navigate(`/doctor/${data.id}`);
                              }}
                            >
                              <i className="fa-solid fa-pen"></i>
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Nurses </label>
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
                      <th>
                        Employee Name
                        <i className="fa-solid fa-caret-up px-2"></i>
                      </th>
                      <th>
                        Department
                        <i className="fa-solid fa-caret-up px-2"></i>
                      </th>
                      <th>Hours Worked</th>
                      <th>Gross Monthly Salary</th>
                      <th>Bonus</th>
                      <th>Deductions</th>
                      <th>Other Benefits</th>
                      <th>Overtime hours</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyNurses.map((data, i) => (
                      <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.department}</td>
                        <td>{data.hoursWorked}</td>
                        <td>{data.grossMonthlySalary}</td>
                        <td>{data.bonus}</td>
                        <td>{data.deductions}</td>
                        <td>{data.otherBenefits}</td>
                        <td>{data.overtimeHours}</td>
                        <td>
                          <div className=" d-flex align-items-center ">
                            <button className="border px-3 text-nowrap">
                              <i className="fa-solid fa-trash"></i>
                              Delete
                            </button>
                            <button
                              className="border px-3 text-nowrap"
                              onClick={() => {
                                navigate(`/nurse/${data.id}`);
                              }}
                            >
                              <i className="fa-solid fa-pen"></i>
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Other Staff </label>
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
                      <th>
                        Employee Name
                        <i className="fa-solid fa-caret-up px-2"></i>
                      </th>
                      <th>
                        Department
                        <i className="fa-solid fa-caret-up px-2"></i>
                      </th>
                      <th>Hours Worked</th>
                      <th>Gross Monthly Salary</th>
                      <th>Bonus</th>
                      <th>Deductions</th>
                      <th>Other Benefits</th>
                      <th>Overtime hours</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading && (
                      <tr>
                        <td colSpan="12" className="text-center">
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
                        <td colSpan="12" className="text-center">
                          {message}
                        </td>
                      </tr>
                    )}
                    {isSuccess &&
                      (OtherStaff.length != 0 ? (
                        <>
                          {OtherStaff.map((data, i) => (
                            <tr key={i}>
                              <td>{data.otherStaff_name}</td>
                              <td>{data.otherStaff_department}</td>
                              <td>{data.otherStaff_employee_id}</td>
                              <td>{data.otherStaff_experience}</td>
                              <td>{data.otherStaff_marital_status}</td>
                              <td>{data.otherStaff_status}</td>
                              <td>{data.otherStaff_education}</td>
                              <td>{data.otherStaff_blood_group}</td>
                              <td>
                                <div className=" d-flex align-items-center ">
                                  <button
                                    className="border px-3 text-nowrap"
                                    onClick={() => {
                                      dispatch(deletePayrollingData(data._id));
                                      if (!data._id) {
                                        dispatch(reset());
                                      }
                                    }}
                                  >
                                    <i className="fa-solid fa-trash"></i>
                                    Delete
                                  </button>
                                  <button
                                    className="border px-3 text-nowrap"
                                    onClick={() => {
                                      navigate(`/payroll/${data._id}`);
                                    }}
                                  >
                                    <i className="fa-solid fa-pen"></i>
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
                            <td colSpan="12" className="text-center">
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
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default HRManagersTable;
