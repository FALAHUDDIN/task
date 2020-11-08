import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { createUseStyles } from "react-jss";

export default function TaskPie(props) {
  const useStyles = createUseStyles({
    boxPieChart: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "8px",
      height: "158px",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 3px 6px #0000000A",
    },
    chart: {
      width: "100px",
      transform: "rotate(-90deg)",
    },
    "@media (min-width: 1024px)": {
      boxPieChart: {
        marginTop: "unset",
        width: "33.33%",
        borderRadius: "12px",
      },
    },
  });
  const pieBox = useStyles();

  return (
    <div className={pieBox.boxPieChart}>
      <PieChart
        className={pieBox.chart}
        data={[
          {
            title: "One",
            value: props.revShowDashboard.tasksCompleted,
            color: "#5285EC",
          },
          {
            title: "Two",
            value:
              props.revShowDashboard.totalTasks -
              props.revShowDashboard.tasksCompleted,
            color: "#E8ECEC",
          },
        ]}
      />
    </div>
  );
}
