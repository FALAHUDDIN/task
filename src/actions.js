export const REQUEST_SHOW_TOKEN = "REQUEST_SHOW_TOKEN";
export const reqShowToken = (formData) => ({
  type: REQUEST_SHOW_TOKEN,
  formData: formData,
});
export const RECEIVE_SHOW_TOKEN = "RECEIVE_SHOW_TOKEN";
export const revShowToken = (data) => ({ type: RECEIVE_SHOW_TOKEN, data });
export const FAILED_SHOW_TOKEN = "FAILED_SHOW_TOKEN";

export const REQUEST_SHOW_DASHBOARD = "REQUEST_SHOW_DASHBOARD";
export const reqShowDashboard = (formData) => ({
  type: REQUEST_SHOW_DASHBOARD,
  formData,
});
export const RECEIVE_SHOW_DASHBOARD = "RECEIVE_SHOW_DASHBOARD";
export const revShowDashboard = (data) => ({
  type: RECEIVE_SHOW_DASHBOARD,
  data,
});
export const FAILED_SHOW_DASHBOARD = "FAILED_SHOW_DASHBOARD";

export const REQUEST_SHOW_TASKS = "REQUEST_SHOW_TASKS";
export const reqShowTasks = (formData) => ({
  type: REQUEST_SHOW_TASKS,
  formData,
});
export const RECEIVE_SHOW_TASKS = "RECEIVE_SHOW_TASKS";
export const revShowTasks = (data) => ({ type: RECEIVE_SHOW_TASKS, data });
export const FAILED_SHOW_TASKS = "FAILED_SHOW_TASKS";

export const REQUEST_CREATE_TASKS = "REQUEST_CREATE_TASKS";
export const reqCreateTasks = (formData) => ({
  type: REQUEST_CREATE_TASKS,
  formData,
});
export const RECEIVE_CREATE_TASKS = "RECEIVE_CREATE_TASKS";
export const revCreateTasks = (data) => ({ type: RECEIVE_CREATE_TASKS, data });
export const FAILED_CREATE_TASKS = "FAILED_CREATE_TASKS";

export const REQUEST_UPDATE_TASKS = "REQUEST_UPDATE_TASKS";
export const reqUpdateTasks = (formData) => ({
  type: REQUEST_UPDATE_TASKS,
  formData,
});
export const RECEIVE_UPDATE_TASKS = "RECEIVE_UPDATE_TASKS";
export const revUpdateTasks = (data) => ({ type: RECEIVE_UPDATE_TASKS, data });
export const FAILED_UPDATE_TASKS = "FAILED_UPDATE_TASKS";

export const REQUEST_DELETE_TASKS = "REQUEST_DELETE_TASKS";
export const reqDeleteTasks = (formData) => ({
  type: REQUEST_DELETE_TASKS,
  formData,
});
export const RECEIVE_DELETE_TASKS = "RECEIVE_DELETE_TASKS";
export const revDeleteTasks = (data) => ({ type: RECEIVE_DELETE_TASKS, data });
export const FAILED_DELETE_TASKS = "FAILED_DELETE_TASKS";
