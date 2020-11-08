import React from "react";
import { createUseStyles } from "react-jss";

export default function TaskCompleted(props) {
  const useStyles = createUseStyles({
    boxTaskComplete: {
      marginTop: "12px",
      height: "158px",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 3px 6px #0000000A",
      padding: "24px 32px",
    },
    txtCompleted: {
      display: "flex",
      alignItems: "center",
      height: "24px",
      color: "#537178",
      fontSize: "20px",
    },
    boxCompleted: {
      display: "flex",
      flexDirection: "row",
    },
    numCompleted: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#5285EC",
      fontSize: "64px",
      height: "78px",
    },
    numTotal: {
      display: "flex",
      alignItems: "center",
      marginTop: "auto",
      marginLeft: "-9px",
      height: "24px",
      fontSize: "24px",
      color: "#8F9EA2",
    },
    "@media (min-width: 1024px)": {
      boxTaskComplete: {
        marginTop: "unset",
        width: "33.33%",
        borderRadius: "12px",
      },
    },
  });
  const taskCompleted = useStyles();

  return (
    <div className={taskCompleted.boxTaskComplete}>
      <div className={taskCompleted.txtCompleted}>Task Completed</div>
      <div className={taskCompleted.boxCompleted}>
        <div className={taskCompleted.numCompleted}>
          {props.revShowDashboard.tasksCompleted}
        </div>
        <div className={taskCompleted.numTotal}>
          / {props.revShowDashboard.totalTasks}
        </div>
      </div>
    </div>
  );
}
