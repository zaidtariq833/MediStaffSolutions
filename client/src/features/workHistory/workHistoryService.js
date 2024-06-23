import axios from "axios";

const STAFFMANAGEMENT_API_URL = "/api/staffmanagement/";

const addStaffManagementData = async (staffManagementData) => {
  const response = await axios.post(
    STAFFMANAGEMENT_API_URL + "addstaffmanagement/",
    staffManagementData
  );
  return response.data;
};

const getStaffManagementData = async () => {
  const response = await axios.get(STAFFMANAGEMENT_API_URL + "getstaffmanagement/");
  return response.data;
};
const getSingleStaffManagementData = async (data) => {
  console.log(data.id);
  const response = await axios.get(
    `${STAFFMANAGEMENT_API_URL}getsinglestaffmanagement/${data.id}`
  );
  console.log(response.data);
  return response.data;
};

const deleteStaffManagementData = async (staffManagementData) => {
  const response = await axios.delete(
    `${STAFFMANAGEMENT_API_URL}deletestaffmanagement/${staffManagementData}`
  );
  return response.data;
};
const updateStaffManagementData = async (staffManagementID, staffManagementData) => {
  const response = await axios.put(
    `${STAFFMANAGEMENT_API_URL}updatestaffmanagement/${staffManagementID}`,
    staffManagementData
  );
  return response.data;
};

const staffManagementServices = {
  addStaffManagementData,
  getStaffManagementData,
  deleteStaffManagementData,
  updateStaffManagementData,
  getSingleStaffManagementData,
};

export default staffManagementServices;
