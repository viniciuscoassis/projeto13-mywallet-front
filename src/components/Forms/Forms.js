import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import WrapperForm from "../FormStyle";
import { postLogin, postSignUp } from "../../services/mywallet";
import UserContext from "../../Contexts/UserContext";

export default function Forms({ type }) {
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

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
    postLogin(formLogin)
      .then((res) => {
        localStorage.setItem(
          "mywallet",
          JSON.stringify({ token: res.data.token, timestamp: +new Date() })
        );
        setUserInfo(res.data.user);
        navigate("/main");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }
  function submitSignUpForm(e) {
    e.preventDefault();
    postSignUp(formSignUp)
      .then((res) => {
        alert("Cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data);
      });
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
              type="password"
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
