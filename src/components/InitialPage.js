import styled from "styled-components";
import Forms from "./Forms/Forms";

export default function InitialPage({ type }) {
  return (
    <Wrapper>
      <h1>My wallet</h1>
      <Forms type={type}></Forms>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12vh 0;
  h1 {
    padding-bottom: 50px;
    font-family: "Saira Stencil One", cursive;
    color: white;
    font-size: 32px;
  }
`;
