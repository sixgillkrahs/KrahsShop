import { User } from "../../interfaces";
import api from "../apibase";

const getUser = async () => {
  const response = await api.get("/user", { timeout: 10000 });
  return response.data;
};

const registerUser = async (user: User) => {
  const response = await api.post("/user/register", user, { timeout: 10000 });
  return response.data;
};

const loginUser = async (user: any) => {
  const response = await api.post("/user/login", user, { timeout: 10000 });
  return response.data;
};

const logoutUser = async () => {
  const response = await api.post("/user/logout", { timeout: 10000 });
  return response.data;
};

export { getUser, registerUser, loginUser, logoutUser };
