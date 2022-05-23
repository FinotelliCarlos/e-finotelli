import { createGlobalStyle } from "styled-components";
import dark from "../Themes/dark";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body{
    overflow-x: hidden;
  }

  body{
    background: ${({theme}) => dark.background};
    color: ${({theme}) => dark.font100};
    font-family: 'Poppins', sans-serif;
  }
`
