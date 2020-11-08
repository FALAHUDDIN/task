import React from "react";
import { createUseStyles } from "react-jss";

export default function TaskEdit(props) {
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
    txtEditTask: {
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
    btnEditTask: {
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
  const taskEdit = useStyles();

  return (
    <div
      className={taskEdit.modalBackground}
      onClick={() => props.handleCancelEditTask()}
    >
      <div
        className={taskEdit.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={taskEdit.txtEditTask}>Edit Task</div>
        <form>
          <input
            className={taskEdit.txtTaskName}
            name="taskName"
            type="text"
            value={props.editTaskState.taskName}
            onChange={props.handleInputEditChange}
            placeholder="Task Name"
            autoFocus
          ></input>
          <button
            type="submit"
            className={taskEdit.btnEditTask}
            onClick={() => props.handleEditTask()}
          >
            Edit Task
          </button>
        </form>
      </div>
    </div>
  );
}
