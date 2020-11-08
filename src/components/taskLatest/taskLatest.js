import React from "react";
import { createUseStyles } from "react-jss";

export default function TaskLatest(props) {
  const useStyles = createUseStyles({
    boxTaskLatest: {
      marginTop: "8px",
      height: "158px",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 3px 6px #0000000A",
      padding: "24px 28px 28px 32px",
    },
    txtLatestTask: {
      display: "flex",
      alignItems: "center",
      height: "24px",
      fontSize: "20px",
      color: "#537178",
    },
    boxTaskItem: {
      marginTop: "7px",
      width: "100%",
    },
    txtTaskRow: {
      display: "flex",
      alignItems: "center",
      height: "21px",
      width: "100%",
      paddingTop: "5px",
    },
    icnBullet: {
      height: "6px",
      width: "6px",
      borderRadius: "3px",
      backgroundColor: "#8F9EA2",
    },
    txtTaskItem: {
      width: "100%",
      marginLeft: "12px",
      color: "#8F9EA2",
      fontSize: "14px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "@media (min-width: 1024px)": {
      boxTaskLatest: {
        marginTop: "unset",
        margin: "0 24px",
        width: "33.33%",
        borderRadius: "12px",
      },
    },
  });
  const taskLatest = useStyles();

  return (
    <div className={taskLatest.boxTaskLatest}>
      <div className={taskLatest.txtLatestTask}>Latest Created Tasks</div>
      <div className={taskLatest.boxTaskItem}>
        {props.revShowDashboard.latestTasks.map((x, index) => {
          let keyX = index;
          return (
            <div className={taskLatest.txtTaskRow} key={keyX}>
              <div className={taskLatest.icnBullet}></div>
              <div
                className={taskLatest.txtTaskItem}
                style={{
                  textDecoration: x.completed ? "line-through" : "unset",
                }}
              >
                {x.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
