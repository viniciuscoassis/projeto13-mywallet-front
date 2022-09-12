import styled from "styled-components";

export default function WrapperForm({ children, onSubmit }) {
  return <Wrapper onSubmit={onSubmit}>{children}</Wrapper>;
}
const Wrapper = styled.form`
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
