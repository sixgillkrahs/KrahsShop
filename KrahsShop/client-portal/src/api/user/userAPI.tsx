import { User } from "../../interfaces";
import api, { setAuthToken } from "../apibase";

const getUser = async () => {
  const response = await api.get("/user", { timeout: 10000 });
  const jwt = localStorage.getItem("token");
  if (jwt) {
    setAuthToken(jwt, api);
  }
  return response.data;
};

const registerUser = async (user: any) => {
  const response = await api.post("/user/register", user, { timeout: 10000 });
  return response.data;
};

const loginUser = async (user: any) => {
  try {
    const response = await api.post("/user/login", user, { timeout: 10000 });
    localStorage.setItem("token", response.data.jwt);
    setAuthToken(response.data.jwt, api);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const logoutUser = async () => {
  // const response = await api.post("/user/logout", { timeout: 10000 });
  localStorage.removeItem("token");
  return true;
};

const test = async () => {
  const response = await api.get("/user/test", { timeout: 10000 });
  return response.data;
};

export { getUser, registerUser, loginUser, logoutUser, test, isLoggedIn };
