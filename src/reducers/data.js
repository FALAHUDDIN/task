import {
  RECEIVE_SHOW_TOKEN,
  RECEIVE_SHOW_DASHBOARD,
  RECEIVE_SHOW_TASKS,
  RECEIVE_CREATE_TASKS,
  RECEIVE_UPDATE_TASKS,
  RECEIVE_DELETE_TASKS,
  FAILED_SHOW_TOKEN,
  FAILED_SHOW_DASHBOARD,
  FAILED_SHOW_TASKS,
  FAILED_CREATE_TASKS,
  FAILED_UPDATE_TASKS,
  FAILED_DELETE_TASKS,
} from "../actions";

export function data(state = {}, { type, data }) {
  switch (type) {
    case RECEIVE_SHOW_TOKEN:
      return {
        ...state,
        revShowToken: data,
        errorMessage: "",
      };
    case FAILED_SHOW_TOKEN:
      return {
        ...state,
        revShowToken: "",
        errorMessage: data,
      };
    case RECEIVE_SHOW_DASHBOARD:
      return {
        ...state,
        revShowDashboard: data,
        errorMessage: "",
      };
    case FAILED_SHOW_DASHBOARD:
      return {
        ...state,
        revShowDashboard: "",
        errorMessage: data,
      };
    case RECEIVE_SHOW_TASKS:
      return {
        ...state,
        revShowTasks: data,
        errorMessage: "",
      };
    case FAILED_SHOW_TASKS:
      return {
        ...state,
        revShowTasks: "",
        errorMessage: data,
      };
    case RECEIVE_CREATE_TASKS:
      return {
        ...state,
        revCreateTasks: data,
        errorMessage: "",
      };
    case FAILED_CREATE_TASKS:
      return {
        ...state,
        revCreateTasks: "",
        errorMessage: data,
      };
    case RECEIVE_UPDATE_TASKS:
      return {
        ...state,
        revUpdateTasks: data,
        errorMessage: "",
      };
    case FAILED_UPDATE_TASKS:
      return {
        ...state,
        revUpdateTasks: "",
        errorMessage: data,
      };
    case RECEIVE_DELETE_TASKS:
      return {
        ...state,
        revDeleteTasks: data,
        errorMessage: "",
      };
    case FAILED_DELETE_TASKS:
      return {
        ...state,
        revDeleteTasks: "",
        errorMessage: data,
      };
    default:
      return state;
  }
}
