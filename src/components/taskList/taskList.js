import React from "react";
import { createUseStyles } from "react-jss";
import CheckIcon from "@material-ui/icons/Check";
import IcnPenSolid from "./../../image/logo/pen-solid.svg";
import IcnTrash from "./../../image/logo/trash-solid.svg";

export default function TaskList(props) {
  const useStyles = createUseStyles({
    boxTaskList: {
      margin: "16px 0 11px 0",
      padding: "0 16px",
      boxShadow: "0px 3px 6px #00000014",
      backgroundColor: "#FFFFFF",
    },
    txtTaskRow: {
      display: "flex",
      alignItems: "center",
      padding: "24px 0",
      width: "100%",
      borderBottom: "2px solid #E8E8E8",
    },
    spaceIcnBox: {
      width: "19px",
    },
    icnBox: {
      height: "19px",
      width: "19px",
      borderRadius: "4px",
      border: "2px solid #95A4AB",
    },
    icnTick: {
      marginTop: "-15px",
      marginLeft: "-4px",
      width: "30px !important",
      color: "#707070",
    },
    txtTaskItem: {
      width: "calc(100% - 51px)",
      marginLeft: "12px",
      fontSize: "20px",
      color: "#5285EC",
      overflow: "hidden",
      overflowWrap: "break-word",
    },
    icnPen: {
      width: "16px",
      margin: "0 17px",
    },
    "@media (min-width: 1024px)": {
      boxTaskList: {
        padding: "0 35px 0 24px",
        borderRadius: "12px",
      },
    },
  });
  const taskList = useStyles();

  return (
    <div className={taskList.boxTaskList}>
      {props.revShowTasks &&
        props.revShowTasks.tasks.length !== 0 &&
        props.revShowTasks.tasks
          .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
          .filter((c) => {
            let found = c.name
              .toLowerCase()
              .includes(props.filterTaskState.taskName.toLowerCase());
            if (props.filterTaskState.taskName) {
              return found;
            } else return c;
          })
          .map((x, index) => {
            let keyX = index;
            return (
              <div
                className={taskList.txtTaskRow}
                key={keyX}
                style={{
                  borderBottom:
                    props.revShowTasks.tasks.length === index + 1 && "unset",
                }}
              >
                <div className={taskList.spaceIcnBox}>
                  <div
                    className={taskList.icnBox}
                    onClick={() => props.handleBoxCrossTask(x._id, x.completed)}
                  >
                    {x.completed && <CheckIcon className={taskList.icnTick} />}
                  </div>
                </div>
                <div
                  className={taskList.txtTaskItem}
                  style={{
                    textDecoration: x.completed ? "line-through" : "unset",
                    color: x.completed && "#537178",
                  }}
                >
                  {x.name}
                </div>
                <img
                  className={taskList.icnPen}
                  src={IcnPenSolid}
                  alt="editIcon"
                  onClick={() => props.handleBtnEditTask(x._id, x.name)}
                />
                <img
                  src={IcnTrash}
                  alt="deleteIcon"
                  onClick={() => props.handleBtnDelTask(x._id)}
                />
              </div>
            );
          })}
    </div>
  );
}
