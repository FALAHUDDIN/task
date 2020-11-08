import React from "react";
import { createUseStyles } from "react-jss";

export default function TaskNo(props) {
  const useStyles = createUseStyles({
    boxNoTask: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "12px",
      width: "100%",
      height: "158px",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 3px 6px #0000000A",
    },
    txtNoTask: {
      marginTop: "37px",
      height: "24px",
      fontSize: "20px",
      color: "#537178",
    },
    btnNewTask: {
      marginTop: "20px",
      width: "124px",
      height: "40px",
      backgroundColor: "#5285EC",
      borderRadius: "8px",
      fontSize: "14px",
      color: "#FFFFFF",
      border: "unset",
    },
    "@media (min-width: 1024px)": {
      boxNoTask: {
        margin: "auto",
        width: "304px",
        borderRadius: "12px",
      },
    },
  });
  const taskNo = useStyles();

  return (
    <div className={taskNo.boxNoTask}>
      <div className={taskNo.txtNoTask}>You have no task.</div>
      <button
        className={taskNo.btnNewTask}
        onClick={() => props.handleBtnAddTask()}
      >
        + New Task
      </button>
    </div>
  );
}
