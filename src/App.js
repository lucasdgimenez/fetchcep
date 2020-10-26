/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
//import { firebaseAuth } from "./provider/AuthProvider";
import Routes from "./Routes";
import TheHeader from "./components/TheHeader"
import TheFooter from "./components/TheFooter"

function App() {
  //const { handleSignup } = useContext(firebaseAuth);

  //const { test } = useContext(firebaseAuth);
  return (
    <>
      <BrowserRouter>
        <TheHeader/>
        <Routes />
        <TheFooter/>
      </BrowserRouter>
    </>
  );
}

export default App;
