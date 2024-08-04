import axios from "axios";

const EMPLOYEE_API_URL = "/api/employee/";

const getEmployeesData = async () => {
  const response = await axios.get(EMPLOYEE_API_URL + "getemployees/");
  return response.data;
};

const employeeServices = {
    getEmployeesData,
};

export default employeeServices;
