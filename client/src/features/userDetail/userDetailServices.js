import axios from "axios";

const USERDETAIL_API_URL = "/api/userdetail/";

const addUserDetailData = async (Data) => {
  const response = await axios.post(
    USERDETAIL_API_URL + "adduserdetail/",
    Data
  );

  return response.data;
};

const getUserDetailData = async () => {
  const response = await axios.get(USERDETAIL_API_URL + "getuserdetail/");

  return response.data;
};

const deleteUserDetailData = async (Data) => {
  const response = await axios.delete(`${USERDETAIL_API_URL}deluserdetail/${Data}`);

  // console.log(response.data);

  return response.data;
};

const userDetailServices = {
  addUserDetailData,
  getUserDetailData,
  deleteUserDetailData,
};

export default userDetailServices;
