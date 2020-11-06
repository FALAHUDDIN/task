import React, { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqShowDashboard } from "../../../actions";

export default function Home() {
  // main state

  // history, sagas, redux
  const revShowDashboard = useSelector((state) => state.revShowDashboard);
  const dispatch = useDispatch();
  const onReqShowDashboard = () => {
    return dispatch(reqShowDashboard());
  };

  //component mount, update, unmount
  useEffect(() => {
    onReqShowDashboard();
  }, []);

  //page function
  console.log(revShowDashboard);
  return (
    <div>
      <div>You have no task</div>
      <button>+ New Task</button>
    </div>
  );
}
