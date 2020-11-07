import React, { useReducer } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { reqShowToken } from "../../../../actions";

export default function Login() {
  const useStyles = createUseStyles({
    container: {
      height: "100%",
      border: "1px solid blue",
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
  const handleSignin = (event) => {
    event.preventDefault();
    let formData = {
      name: userInput.name,
      apiKey: userInput.apiKey,
    };
    onReqShowToken(formData);
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
      <input
        name="name"
        type="text"
        value={userInput.name}
        onChange={handleInputChange}
      ></input>
      <form>
        <input
          name="apiKey"
          type="password"
          autoComplete="username"
          value={userInput.apiKey}
          onChange={handleInputChange}
        ></input>
      </form>
      <button onClick={handleSignin}>
        <div>Login</div>
      </button>
      <div>{revShowToken.errorMessage}</div>
    </div>
  );
}
