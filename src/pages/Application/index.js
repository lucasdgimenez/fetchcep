import React from "react";

function Application() {
  const user = null;
  return user ? (
    <>
      <h1>Você está logado!</h1>
      <button>Logout</button>
    </>
  ) : (
    <>
      <h1>Haha</h1>
    </>
  );
}

export default Application;
