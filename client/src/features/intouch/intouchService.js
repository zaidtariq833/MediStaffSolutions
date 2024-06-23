import axios from "axios";

const SHIFT_SCHEDULING_API_URL = "/api/shiftscheduling/";

const getShiftScheduling = async () => {
  const response = await axios.get(
    SHIFT_SCHEDULING_API_URL + "getshiftscheduling/"
  );
  return response.data;
};

const getSingleShiftScheduling = async (data) => {
  const response = await axios.get(
    `${SHIFT_SCHEDULING_API_URL}getsingleshiftscheduling/${data.id}`
  );
  return response.data;
};
const addShiftScheduling = async (shiftSchedulingData) => {
  const response = await axios.post(
    SHIFT_SCHEDULING_API_URL + "addshiftscheduling/",
    shiftSchedulingData
  );
  return response.data;
};

const deleteShiftSchedulingData = async (Data) => {
  const response = await axios.delete(
    `${SHIFT_SCHEDULING_API_URL}deleteshiftscheduling/${Data}`
  );
  return response.data;
};

const updateShiftSchedulingData = async (shiftID, shiftData) => {
  const response = await axios.put(
    `${SHIFT_SCHEDULING_API_URL}updateshiftscheduling/${shiftID}`,
    shiftData
  );
  return response.data;
};

const shiftSchedulingService = {
  addShiftScheduling,
  getShiftScheduling,
  deleteShiftSchedulingData,
  getSingleShiftScheduling,
  updateShiftSchedulingData,
};

export default shiftSchedulingService;
