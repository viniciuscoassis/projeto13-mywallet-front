import InitialPage from "./InitialPage";
import styled from "styled-components";
import GlobalStyle from "../assets/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import RegisterNew from "./RegisterNew";
import PrivatePage from "./PrivatePage";
import { useState } from "react";
import UserContext from "../Contexts/UserContext.js";

export default function App() {
  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo);
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <BrowserRouter>
          <UserContext.Provider value={{ userInfo, setUserInfo }}>
            <Routes>
              <Route path="/" element={<InitialPage type="login" />} />
              <Route path="/sign-in" element={<InitialPage type="login" />} />
              <Route
                path="/sign-up"
                element={<InitialPage type="cadastro" />}
              />
              <Route
                path="/main"
                element={
                  <PrivatePage>
                    {" "}
                    <MainPage />
                  </PrivatePage>
                }
              />
              <Route
                path="/main/add/in"
                element={
                  <PrivatePage>
                    <RegisterNew type={"in"} />{" "}
                  </PrivatePage>
                }
              />
              <Route
                path="/main/add/out"
                element={
                  <PrivatePage>
                    {" "}
                    <RegisterNew type={"out"} />
                  </PrivatePage>
                }
              />
            </Routes>
          </UserContext.Provider>
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
