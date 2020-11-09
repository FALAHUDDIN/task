import React, { useReducer } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { reqShowToken } from "../../../../actions";

export default function Login() {
  const useStyles = createUseStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    content: {
      width: "296px",
      height: "249px",
      borderRadius: "12px",
      boxShadow: "0px 3px 6px #00000029",
      margin: "auto",
      padding: "24px",
      backgroundColor: "#FFFFFF",
    },
    txtLogin: {
      display: "flex",
      alignItems: "center",
      height: "24px",
      color: "#537178",
      fontSize: "20px",
    },
    errBoxLogin: {
      display: "flex",
      alignItems: "center",
      height: "24px",
      fontSize: "11px",
      color: "#d82424",
    },
    iptId: {
      padding: "0 16px",
      width: "100%",
      height: "40px",
      backgroundColor: "#EEF1F8",
      border: "unset",
      borderRadius: "8px",
      color: "#7A7D7E",
      fontSize: "14px",
    },
    iptnName: {
      marginTop: "12px",
      padding: "0 16px",
      width: "100%",
      height: "40px",
      backgroundColor: "#EEF1F8",
      border: "unset",
      borderRadius: "8px",
      color: "#7A7D7E",
      fontSize: "14px",
    },
    btnLogin: {
      marginTop: "12px",
      width: "100%",
      height: "40px",
      border: "unset",
      backgroundColor: "#5285EC",
      borderRadius: "8px",
      color: "#FFFFFF",
      fontSize: "14px",
    },
  });
  const login = useStyles();

  // main state
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    { name: "", apiKey: "" }
  );

  // history, sagas, redux
  const revShowToken = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const onReqShowToken = (formData) => {
    return dispatch(reqShowToken(formData));
  };

  //page function
  const handleSignin = () => {
    if ((userInput.name, userInput.apiKey !== "")) {
      let formData = {
        name: userInput.name,
        apiKey: userInput.apiKey,
      };
      onReqShowToken(formData);
    }
  };
  const handleInputChange = (event) => {
    const name = event.target.name;
    if (event.target.type === "checkbox") {
      setUserInput({
        [name]: event.target.checked,
      });
    } else {
      setUserInput({
        [name]: event.target.value,
      });
    }
  };

  return (
    <div className={login.container}>
      <div className={login.content}>
        <div className={login.txtLogin}>Login</div>
        <div className={login.errBoxLogin}>{revShowToken.errorMessage}</div>
        <form>
          <input
            className={login.iptId}
            name="apiKey"
            type="text"
            placeholder="Id"
            value={userInput.apiKey}
            onChange={handleInputChange}
            autoFocus
          ></input>
          <input
            className={login.iptnName}
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="username"
            value={userInput.name}
            onChange={handleInputChange}
          ></input>
          <button
            type="submit"
            className={login.btnLogin}
            onClick={handleSignin}
          >
            <div>Login</div>
          </button>
        </form>
      </div>
    </div>
  );
}
