import styled from "styled-components";
import { LogOutOutline } from "react-ionicons";

export default function MainPage() {
  return (
    <Wrapper>
      <Header>
        <h2>Olá. Fulano</h2>
        <LogOutOutline color={"#00000"} title="oi" height="20px" width="20px" />
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: red;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
