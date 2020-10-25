import React from "react";
import { Link } from "react-router-dom";
import {Nav, Menu, List} from "./styled"

function TheHeader() {
  return (
    <>
      <Nav>
          <Link to="/">Home</Link>
        <Menu>
          <List>
            <Link to="/signin">Login</Link>
          </List>
          <List>
            <Link to="/signup">Cadastre</Link>
          </List>
        </Menu>
      </Nav>
    </>
  );
}

export default TheHeader;
