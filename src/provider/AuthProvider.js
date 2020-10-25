import React, { useState } from "react";
import { authMethods } from "../firebase/authmethods";

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const [token, setToken] = useState(null);
  const handleSignup = () => {
    //middle man
    console.log("handleSignup");
    authMethods.signup(email, password, setErrors);
    console.log(errors);
  };
  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        email,
        password,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
