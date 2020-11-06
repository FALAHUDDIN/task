import { takeLatest, put, call } from "redux-saga/effects";
import Cookies from "js-cookie";
import {
  showToken,
  showDashboard,
  showTasks,
  createTasks,
  updateTasks,
  deleteTasks,
} from "./api";
import {
  REQUEST_SHOW_TOKEN,
  REQUEST_SHOW_DASHBOARD,
  REQUEST_SHOW_TASKS,
  REQUEST_CREATE_TASKS,
  REQUEST_UPDATE_TASKS,
  REQUEST_DELETE_TASKS,
  revShowToken,
  revShowDashboard,
  revShowTasks,
  revCreateTasks,
  revUpdateTasks,
  revDeleteTasks,
} from "./actions";
const developerMode = true;

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* mySaga() {
  yield takeLatest(REQUEST_SHOW_TOKEN, reqShowToken);
  yield takeLatest(REQUEST_SHOW_DASHBOARD, reqShowDashboard);
  yield takeLatest(REQUEST_SHOW_TASKS, reqShowTasks);
  yield takeLatest(REQUEST_CREATE_TASKS, reqCreateTasks);
  yield takeLatest(REQUEST_UPDATE_TASKS, reqUpdateTasks);
  yield takeLatest(REQUEST_DELETE_TASKS, reqDeleteTasks);
}

// worker Saga: will be fired on request actions
function* reqShowToken({ formData }) {
  try {
    const response = yield call(showToken, formData);
    yield put(revShowToken(response.data));
    Cookies.set("token", response.data.token);
    window.location.reload();
    console.log(response.data);
  } catch (e) {
    if (e.response.status == 401) {
      yield put({
        type: "FAILED_SHOW_TOKEN",
        data: e.response.data.msg,
      });
    }
    if (developerMode) {
      console.log(e);
    }
  }
}

function* reqShowDashboard({ formData }) {
  try {
    const response = yield call(showDashboard, formData);
    yield put(revShowDashboard(response.data));
  } catch (e) {
    if (e.response.status == 401) {
      yield put({
        type: "FAILED_SHOW_DASHBOARD",
        data: e.response.data.msg,
      });
    }
    if (developerMode) {
      console.log(e);
    }
  }
}

function* reqShowTasks({ formData }) {
  try {
    const response = yield call(showToken, formData);
    yield put(revShowTasks(response.data));
  } catch (e) {
    if (developerMode) {
      console.log(e);
    }
  }
}

function* reqCreateTasks({ formData }) {
  try {
    const response = yield call(showToken, formData);
    yield put(revCreateTasks(response.data));
  } catch (e) {
    if (developerMode) {
      console.log(e);
    }
  }
}

function* reqUpdateTasks({ formData }) {
  try {
    const response = yield call(showToken, formData);
    yield put(revUpdateTasks(response.data));
  } catch (e) {
    if (developerMode) {
      console.log(e);
    }
  }
}

function* reqDeleteTasks({ formData }) {
  try {
    const response = yield call(showToken, formData);
    yield put(revDeleteTasks(response.data));
  } catch (e) {
    if (developerMode) {
      console.log(e);
    }
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
