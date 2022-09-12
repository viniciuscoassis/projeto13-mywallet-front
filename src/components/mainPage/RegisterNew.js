import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postRegister } from "../../services/mywallet";
import WrapperForm from "../templates/FormStyle";
import Header from "../templates/Header";

export default function RegisterNew({ type }) {
  const [form, setForm] = useState({ type, value: "", description: "" });

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function submitForm(e) {
    e.preventDefault();

    try {
      await postRegister(form);
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
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
