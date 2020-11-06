import Cookies from "js-cookie";
import axios from "axios";

const server = "https://dev.teledirectasia.com:3092";
const getHeader = () => {
  const xToken = Cookies.getJSON("token").token;
  return {
    Authorization: `Bearer ${xToken}`,
  };
};

// Request
export const showToken = (formData) => {
  const response = axios.post(server + "/login", formData);
  return response;
};

export const showDashboard = () => {
  const response = axios.get(server + "/dashboard", {
    headers: getHeader(),
  });
  return response;
};

export const showTasks = () => {
  const response = axios.get(server + "/tasks", {
    headers: getHeader(),
  });
  return response;
};

export const createTasks = (formData) => {
  const response = axios.post(server + "/tasks", formData, {
    headers: getHeader(),
  });
  return response;
};

export const updateTasks = (formData) => {
  const response = axios.put(server + "/tasks" + "/" + formData.id, formData, {
    headers: getHeader(),
  });
  return response;
};

export const deleteTasks = (formData) => {
  const response = axios.delete(server + "/tasks" + "/" + formData.id, {
    headers: getHeader(),
  });
  return response;
};
