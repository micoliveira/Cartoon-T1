import React from "react"
import Header from "./component/Header/Header.jsx"
import Main from './component/Main/Main.jsx';


import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-family: "Roboto", sans-serif;

  }
`

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />

    </>
  )
}

export default App
