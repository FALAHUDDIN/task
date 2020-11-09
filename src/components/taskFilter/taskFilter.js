import React from "react";
import { createUseStyles } from "react-jss";
import IcnSearchSolid from "./../../image/logo/search-solid.svg";

export default function TaskFilter(props) {
  const useStyles = createUseStyles({
    boxFilter: {
      marginTop: "29px",
      padding: "0 13px",
    },
    boxSearch: {
      position: "relative",
    },
    iptFilter: {
      marginTop: "8px",
      padding: "0 40px",
      width: "100%",
      height: "40px",
      border: "unset",
      backgroundColor: "#D9DFEB",
      borderRadius: "8px",
      textAlign: "center",
      color: "#7A7D7E",
      fontSize: "14px",
    },
    icnSearch: {
      position: "absolute",
      left: "15px",
      top: "20px",
    },
    txtTask: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "24px",
      color: "#537178",
      fontSize: "20px",
    },
    btnNewTask: {
      marginTop: "8px",
      width: "100%",
      height: "40px",
      backgroundColor: "#5285EC",
      color: "#FFFFFF",
      fontSize: "14px",
      border: "unset",
      borderRadius: "8px",
    },
    "@media (min-width: 1024px)": {
      boxFilter: {
        marginTop: "34px",
        padding: "unset",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      iptFilter: {
        marginTop: "unset",
        width: "244px",
      },
      icnSearch: {
        top: "12px",
      },
      btnNewTask: {
        marginTop: "unset",
        width: "124px",
        marginLeft: "12px",
      },
    },
  });
  const taskFilter = useStyles();

  return (
    <div className={taskFilter.boxFilter}>
      <div className={taskFilter.txtTask}>Tasks</div>
      <div className={taskFilter.boxSearch}>
        <input
          className={taskFilter.iptFilter}
          name="taskName"
          type="text"
          value={props.filterTaskState.taskName}
          onChange={props.handleInputFilterChange}
          placeholder="Search by task name"
        ></input>
        <img
          className={taskFilter.icnSearch}
          src={IcnSearchSolid}
          alt="searchIcon"
        />
        <button
          className={taskFilter.btnNewTask}
          onClick={() => props.handleBtnAddTask()}
        >
          + New Task
        </button>
      </div>
    </div>
  );
}
