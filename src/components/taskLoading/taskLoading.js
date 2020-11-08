import React from "react";
import { createUseStyles } from "react-jss";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

export default function TaskLoading(props) {
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
      margin: "auto",
    },
  });
  const taskLoading = useStyles();

  return (
    <div className={taskLoading.modalBackground}>
      <div className={taskLoading.modalContent}>
        <Spinner
          animation="border"
          variant="primary"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    </div>
  );
}
