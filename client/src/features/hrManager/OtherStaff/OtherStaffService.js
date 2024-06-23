import axios from "axios";

const OTHER_STAFF_API_URL = "/api/hrmanagers/otherstaff";

const getOtherStaff = async () => {
  const response = await axios.get(OTHER_STAFF_API_URL + "getotherstaff/");
  return response.data;
};

const getSingleOtherStaff = async (data) => {
  const response = await axios.get(
    `${OTHER_STAFF_API_URL}getsingleotherstaff/${data.id}`
  );
  return response.data;
};
const addOtherStaff = async (otherStaffData) => {
  const response = await axios.post(
    OTHER_STAFF_API_URL + "addotherstaff/",
    otherStaffData
  );
  return response.data;
};

const deleteOtherStaffData = async (Data) => {
  const response = await axios.delete(
    `${OTHER_STAFF_API_URL}deleteotherstaff/${Data}`
  );
  return response.data;
};

const updateOtherStaffData = async (otherStaffID, otherStaffData) => {
  const response = await axios.put(
    `${OTHER_STAFF_API_URL}updateotherstaff/${otherStaffID}`,
    otherStaffData
  );
  return response.data;
};

const otherStaffingService = {
  addOtherStaff,
  getOtherStaff,
  deleteOtherStaffData,
  getSingleOtherStaff,
  updateOtherStaffData,
};

export default otherStaffingService;
