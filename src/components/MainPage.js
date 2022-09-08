import styled from "styled-components";
import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import { useEffect, useState } from "react";
import Header from "./Header";
import { getRegisters } from "../services/mywallet";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const [arrayRegisters, setArrayRegisters] = useState([]);

  async function PegarRegistros() {
    await getRegisters().then((value) => setArrayRegisters(value.data));
  }
  useEffect(() => {
    PegarRegistros();
  }, []);
  // let selected;
  // for (let i = 0; i < arrayRegisters.length; i++) {
  //   // let mes = arrayRegisters.date[i].split("/")[1];
  //   let dia = Number(arrayRegisters[i].date.split("/")[0]);
  //   selected = i;
  //   for (let j = i + 1; j < arrayRegisters.length; j++) {
  //     // let mesJ = arrayRegisters.date[j].split("/")[1];
  //     let diaJ = Number(arrayRegisters[j].date.split("/")[0]);
  //     if (diaJ <= dia) {
  //       selected = j;
  //     }
  //   }
  // }

  const arrOut = arrayRegisters.filter((value) => value.type === "out");
  const arrIn = arrayRegisters.filter((value) => value.type === "in");

  const sumIn = arrIn
    .map((item) => item.value)
    .reduce((prev, curr) => prev + curr, 0);

  const sumOut = arrOut
    .map((item) => item.value)
    .reduce((prev, curr) => prev + curr, 0);

  const saldo = sumIn - sumOut;
  console.log(saldo);

  return (
    <Wrapper>
      <Header title="Olá, Fulano" type="goToLogin" />

      <Registers>
        {arrayRegisters.length === 0 ? (
          <h2>Não há registros de entrada ou saída</h2>
        ) : (
          arrayRegisters.map((val, index) => (
            <Register key={index} type={val.type}>
              <div> {val.date}</div>
              <div> {val.description}</div>
              <div type={val.type}> {val.value.toFixed(2)}</div>
            </Register>
          ))
        )}
        {arrayRegisters.length === 0 ? (
          ""
        ) : (
          <Saldo saldo={saldo}>
            <h1>SALDO</h1>
            <div>{saldo.toFixed(2)}</div>
          </Saldo>
        )}
      </Registers>
      <ContainerInOut>
        <div onClick={() => navigate("add/in")}>
          <div>
            <AddCircleOutline
              color={"#ffffff"}
              title={"plus"}
              height="25px"
              width="25px"
            />
            <h3>Nova entrada</h3>
          </div>
        </div>

        <div onClick={() => navigate("add/out")}>
          {" "}
          <div>
            <RemoveCircleOutline
              color={"#ffffff"}
              title={"plus"}
              height="25px"
              width="25px"
            />
            <h3>Nova saída</h3>
          </div>
        </div>
      </ContainerInOut>
    </Wrapper>
  );
}
const Saldo = styled.div`
  width: 84vw;

  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-between;
  h1 {
    font-weight: 800;
    font-size: 22px;
  }
  div {
    font-size: 22px;
    color: ${(props) => (props.saldo > 0 ? "green" : "red")};
  }
`;

const Register = styled.div`
  color: black;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
  div:nth-child(1) {
    color: grey;
  }
  div:nth-child(2) {
    color: black;
    display: flex;
    justify-content: flex-start;
    width: 80vw;
    margin-left: 15px;
  }

  div:nth-child(3) {
    color: ${(props) => (props.type === "in" ? "green" : "red")};
  }
`;

const Registers = styled.div`
  height: 446px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  overflow-x: hidden;
  padding: 15px 0;
  position: relative;

  h2 {
    position: absolute;
    left: 10vh;
    top: 50vw;
    color: black;
    width: 60%;
    text-align: center;

    font-size: 22px;
    color: #888888;
  }
`;

const ContainerInOut = styled.div`
  width: 100%;
  margin-top: 13px;

  display: flex;
  justify-content: space-between;
  div {
    width: 48%;
    border-radius: 4px;
    color: white;
    font-weight: 600;
    background-color: #a328d6;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  div div {
    margin: 10px;
  }
`;

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
