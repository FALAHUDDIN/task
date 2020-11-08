import React from "react";
import Cookies from "js-cookie";
import { createUseStyles } from "react-jss";
import IcnProfile from "./../../image/profile/profileIcon.png";

export default function Header() {
  const useStyles = createUseStyles({
    boxHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "72px",
      zIndex: 1,
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 3px 6px #00000029",
      padding: "12px 24px",
    },
    icnProfile: {
      width: "48px",
    },
    txtUsername: {
      marginRight: "auto",
      marginLeft: "16px",
      fontSize: "16px",
      color: "#6D8187",
    },
    txtLogout: {
      fontSize: "16px",
      color: "#6D8187",
      cursor: "default",
    },
    "@media (min-width: 1024px)": {
      boxHeader: {
        padding: "12px 123px 12px 120px",
      },
    },
  });

  const header = useStyles();

  const username = Cookies.getJSON("token").name;

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <div className={header.boxHeader}>
      <img className={header.icnProfile} src={IcnProfile} alt="profileIcon" />
      <div className={header.txtUsername}>{username}</div>
      <div className={header.txtLogout} onClick={() => handleLogout()}>
        Logout
      </div>
    </div>
  );
}
