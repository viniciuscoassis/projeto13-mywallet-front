import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Forms({ type }) {
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });
  const [formSignUp, setFormSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleFormLogin(e) {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  }
  function handleFormSignUp(e) {
    setFormSignUp({ ...formSignUp, [e.target.name]: e.target.value });
  }
  function submitLoginForm(e) {
    e.preventDefault();
    console.log(formLogin);
  }
  function submitSignUpForm(e) {
    e.preventDefault();
    console.log(formSignUp);
  }

  return (
    <Wrapper>
      {type === "login" ? (
        <>
          <WrapperForm onSubmit={submitLoginForm}>
            {" "}
            <input
              placeholder="Email"
              onChange={handleFormLogin}
              value={formLogin.email}
              name="email"
            ></input>
            <input
              placeholder="Senha"
              name="password"
              onChange={handleFormLogin}
              value={formLogin.password}
            ></input>
            <button type="submit">Login</button>
          </WrapperForm>
          <h3>
            <Link
              onClick={() => setFormLogin({ email: "", password: "" })}
              to="/sign-up"
            >
              Já tem uma conta ? Entre agora
            </Link>
          </h3>
        </>
      ) : (
        <>
          <WrapperForm onSubmit={submitSignUpForm}>
            {" "}
            <input
              placeholder="Nome"
              name="name"
              value={formSignUp.name}
              onChange={handleFormSignUp}
            ></input>
            <input
              placeholder="Email"
              name="email"
              value={formSignUp.email}
              onChange={handleFormSignUp}
            ></input>
            <input
              placeholder="Senha"
              name="password"
              value={formSignUp.password}
              onChange={handleFormSignUp}
            ></input>
            <input placeholder="Confirme a senha"></input>
            <button type="submit">Cadastrar</button>
          </WrapperForm>
          <h3>
            <Link to="/sign-in">Já tem uma conta ? Entre agora</Link>
          </h3>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-top: 30px;
    color: white;
    font-weight: 500;
  }
`;

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    display: flex;
    min-width: 87vw;
    height: 58px;
    padding-left: 10px;
    border-radius: 5px;
    border: none;
    margin-bottom: 8px;
    font-size: 20px;
    font-family: "Raleway", sans-serif;

    ::placeholder {
      color: black;
    }
  }
  button {
    font-family: "Raleway", sans-serif;
    width: 87vw;
    height: 40px;
    background-color: #a328d6;
    font-size: 20px;
    font-weight: 700;
    color: white;
    border: none;
  }
`;
