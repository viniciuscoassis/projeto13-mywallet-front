import InitialPage from "./InitialPage";
import styled from "styled-components";
import GlobalStyle from "../assets/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import RegisterNew from "./RegisterNew";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<InitialPage type="login" />} />
            <Route path="/sign-up" element={<InitialPage type="cadastro" />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/main/add/in" element={<RegisterNew type={"in"} />} />
            <Route
              path="/main/add/out"
              element={<RegisterNew type={"out"} />}
            />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: #8c11be;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;
