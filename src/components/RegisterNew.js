import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postRegister } from "../services/mywallet";
import WrapperForm from "./FormStyle";
import Header from "./Header";

export default function RegisterNew({ type }) {
  const [form, setForm] = useState({ type, value: "", description: "" });

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function submitForm(e) {
    e.preventDefault();

    postRegister(form)
      .then(() => navigate("/main"))
      .catch((erro) => console.log(erro));
  }

  return (
    <Wrapper>
      <Header
        title={type === "in" ? "Nova entrada" : "Nova saida"}
        type="goToMain"
      />
      <WrapperForm onSubmit={submitForm}>
        <input
          placeholder="Valor"
          onChange={handleForm}
          value={form.value}
          name="value"
          type="number"
        ></input>
        <input
          placeholder="Descrição"
          name="description"
          onChange={handleForm}
          value={form.description}
        ></input>
        <button type="submit">
          {type === "in" ? "Salvar entrada" : "Salvar saida"}
        </button>
      </WrapperForm>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
