import axios from "axios";

const PAYROLL_API_URL = "/api/payroll/";

const addPayrollData = async (payrollData) => {
  const response = await axios.post(
    PAYROLL_API_URL + "addpayroll/",
    payrollData
  );
  return response.data;
};

const getPayrollData = async () => {
  const response = await axios.get(PAYROLL_API_URL + "getpayroll/");
  return response.data;
};

const getSinglePayrollData = async (data) => {
  console.log(data.id);
  const response = await axios.get(
    `${PAYROLL_API_URL}getsinglepayroll/${data.id}`
  );
  console.log(response.data);
  return response.data;
};

const deletePayrollData = async (payrollData) => {
  const response = await axios.delete(
    `${PAYROLL_API_URL}deletepayroll/${payrollData}`
  );
  return response.data;
};
const updatePayrollData = async (payrollID, payrollData) => {
  const response = await axios.put(
    `${PAYROLL_API_URL}updatepayroll/${payrollID}`,
    payrollData
  );
  return response.data;
};

const payrollServices = {
  addPayrollData,
  getPayrollData,
  deletePayrollData,
  updatePayrollData,
  getSinglePayrollData,
};

export default payrollServices;
