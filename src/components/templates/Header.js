import styled from "styled-components";
import { LogOutOutline } from "react-ionicons";
import { useNavigate } from "react-router-dom";

export default function Header({ type, title }) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {" "}
      <h2>{title}</h2>{" "}
      <LogOutOutline
        onClick={() => navigate(type === "goToLogin" ? "/sign-in" : "/main")}
        color={"#00000"}
        title="exit"
        height="34px"
        width="34px"
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  margin-bottom: 10px;
  color: white;
  h2 {
    font-size: 28px;
    font-weight: 700;
  }
`;
