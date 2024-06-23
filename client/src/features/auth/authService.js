import axios from "axios";

const LOGIN_API_URL = "/api/userdetail/loginuser";

const login = async (userData) => {
  const response = await axios.post(LOGIN_API_URL, userData);

  if (response.data) {
    if (response.data.message !== "Invailid Credential!.") {
      localStorage.setItem("user", JSON.stringify(response.data));
      setTimeout(()=>{
          localStorage.removeItem("user")
      },3600000)
    }
  }

  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = { logout, login };

export default authService;
