import styled, { createGlobalStyle } from "styled-components";

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
    background: ${({theme}) => darkMode.background};
    color: ${({theme}) => darkMode.font100};
    font-family: 'Poppins', sans-serif;
  }
`




export const darkMode = {
  background: '#212529',

  box100: '#343a40',
  box200: '#495057',

  font100: '#f8f9fa',
  font200: '#dee2e6',

  btnAlert: '#660708',
  textAlert: '#b1a7a6',
  
  btnInfo: '#0353a4',
  textInfo: '#e0fbfc',
};

export const lightMode = {
  background: '#dee2e6',

  box100: '#adb5bd',
  box200: '#6c757d',

  font100: '#212529',
  font200: '#343a40',

  btnAlert: '#e5383b',
  textAlert: '#f5f3f4',
  
  btnInfo: '#002855',
  textInfo: '#979dac',
};