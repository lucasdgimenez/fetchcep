import React from "react";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState(null);

  return (
    <>
      <h1>Pagina de Login</h1>
      <form>
        <input
          type="email"
          name="userEmail"
          //  value={email}
          placeholder="Email: "
        />
        <input
          type="password"
          placeholder="Senha: "
          name="userPassword"
          //  value={password}
        />
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
