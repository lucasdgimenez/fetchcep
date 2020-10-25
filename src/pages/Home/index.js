import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Pagina de Home</h1>
      <p>Clique para fazer login ou um cadastro</p>
      <li>
        <Link to="/signin">Login</Link>
      </li>
      <li>
        <Link to="/signup">Cadastrar</Link>
      </li>
    </>
  );
}

export default Home;
