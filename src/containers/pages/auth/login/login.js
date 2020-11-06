import React, { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqShowToken } from "../../../../actions";

export default function Login() {
  // main state
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    { name: "", apiKey: "" }
  );
  const [errorOutput, setErrorOutput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    { errorMessage: "" }
  );

  // history, sagas, redux
  const errorMessage = useSelector((state) => state.errorMessage);
  const revShowToken = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const onReqShowToken = (formData) => {
    return dispatch(reqShowToken(formData));
  };

  //component mount, update, unmount
  useEffect(() => {
    if (errorMessage) {
      setErrorOutput({
        errorMessage: errorMessage,
      });
    }
  }, [errorMessage, revShowToken]);

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
    <div>
      <input
        name="name"
        type="text"
        value={userInput.name}
        onChange={handleInputChange}
      ></input>
      <input
        name="apiKey"
        type="password"
        value={userInput.apiKey}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSignin}>
        <div>Login</div>
      </button>
    </div>
  );
}
