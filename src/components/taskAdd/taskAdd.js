import React from "react";
import { createUseStyles } from "react-jss";

export default function TaskAdd(props) {
  const useStyles = createUseStyles({
    modalBackground: {
      display: "flex",
      position: "absolute",
      backgroundColor: "#00000033",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 1,
    },
    modalContent: {
      width: "296px",
      height: "193px",
      marginTop: "84px",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "24px 24px 29px",
      borderRadius: "12px",
      backgroundColor: "#FFFFFF",
    },
    txtNewTask: {
      fontSize: "20px",
      color: "#537178",
      height: "24px",
    },
    txtTaskName: {
      display: "flex",
      alignItems: "center",
      marginTop: "24px",
      padding: "0 16px",
      width: "100%",
      height: "40px",
      fontSize: "14px",
      color: "#7A7D7E",
      backgroundColor: "#EEF1F8",
      borderRadius: "8px",
      border: "unset",
    },
    btnNewTask: {
      marginTop: "12px",
      width: "100%",
      height: "40px",
      backgroundColor: "#5285EC",
      borderRadius: "8px",
      border: "unset",
      fontSize: "14px",
      color: "#FFFFFF",
    },
    "@media (min-width: 1024px)": {
      modalContent: {
        margin: "auto",
      },
    },
  });
  const taskAdd = useStyles();

  return (
    <div
      className={taskAdd.modalBackground}
      onClick={() => props.handleCancelAddTask()}
    >
      <div
        className={taskAdd.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={taskAdd.txtNewTask}>+ New Task</div>
        <form>
          <input
            className={taskAdd.txtTaskName}
            name="taskName"
            type="text"
            value={props.addTaskState.taskName}
            onChange={props.handleInputAddChange}
            placeholder="Task Name"
            autoFocus
          ></input>
          <button
            type="submit"
            className={taskAdd.btnNewTask}
            onClick={() => props.handleAddTask()}
          >
            + New Task
          </button>
        </form>
      </div>
    </div>
  );
}
