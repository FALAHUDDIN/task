import {
  RECEIVE_SHOW_TOKEN,
  RECEIVE_SHOW_DASHBOARD,
  RECEIVE_SHOW_TASKS,
  RECEIVE_CREATE_TASKS,
  RECEIVE_UPDATE_TASKS,
  RECEIVE_DELETE_TASKS,
  FAILED_SHOW_TOKEN,
  FAILED_SHOW_DASHBOARD,
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
    default:
      return state;
  }
}
