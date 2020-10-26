import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FormArea, Titulo} from "./styled"
//import { authMethods } from "../../firebase/authmethods";

export const firebaseAuth = React.createContext();

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState();
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState();
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [district, setDistrict] = useState("");
  
  /*const handleSignup = () => {
    //middle man
    if (password === confirmPassword) {
      console.log("handleSignup");
      authMethods.signup(email, password, setErrors);
      alert("Cadastro feito com sucesso! Pode fazer o login");
      window.location.href = "/signin";
    } else {
      console.log(errors);
      alert("Senha digitada de forma incorreta");
    }
  }*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  async function fetchCep() {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const rjson = await response.json()
      if(rjson.erro) {
        alert("CEP não localizado")
      } else {
        setStreet(rjson.logradouro)
        setCity(rjson.localidade)
        setUf(rjson.uf)
        setDistrict(rjson.bairro)
      }
  }

  return (
    <FormArea>
      <form onSubmit={handleSubmit}>
        <Titulo>SignUp</Titulo>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome: "
            value={name}
          />
        
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Sobrenome: "
          value={lastName}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email: "
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha: "
          value={password}
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
        />
        <input
          onChange={(e) => setCep(e.target.value)}
          type="text"
          maxLength={8}
          placeholder="CEP: "
          value={cep}
          onBlur={fetchCep}
        />
        <input
          onChange={(e) => setStreet(e.target.value)}
          type="text"
          placeholder="Rua: "
          value={street}
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="Numero: "
          value={number}
        />
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Cidade: "
          value={city}
        />
        <input
          onChange={(e) => setUf(e.target.value)}
          type="text"
          placeholder="Estado: "
          value={uf}
        />
        <input
          onChange={(e) => setDistrict(e.target.value)}
          type="text"
          placeholder="Bairro: "
          value={district}
        />
        <button>Sign Up</button>
        <Link to="/">Faça o login aqui</Link>
      </form>
    </FormArea>
    
  );
};

export default SignUp;
