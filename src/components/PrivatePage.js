import { ReturnDownBackOutline, SadOutline } from "react-ionicons";

import styled from "styled-components";
import WrapperForm from "./FormStyle";
import { useNavigate } from "react-router-dom";

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("mywallet"));

  if (auth) {
    const then = auth.timestamp;
    const now = +new Date();
    if (now - then < 1000 * 60) {
      return <>{children}</>;
    } else {
      localStorage.clear();
    }
  } else {
    return (
      <Blocked>
        <SadOutline
          color={"#ffffff"}
          shake
          title="ola"
          height="250px"
          width="250px"
        />
        <h1>Infelizmente esta página está bloqueada para você</h1>
        <WrapperForm onSubmit={() => navigate("/sign-up")}>
          <button>Fazer cadastro </button>
          <div>
            <ReturnDownBackOutline
              color={"#ffffff"}
              title="return"
              height="25px"
              width="25px"
            />
          </div>
        </WrapperForm>
      </Blocked>
    );
  }
}

const Blocked = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  position: relative;
  h1 {
    color: white;
    font-size: 28px;
    text-align: center;
  }
  div {
    position: absolute;
    right: 15px;
    bottom: 30px;
  }
`;
