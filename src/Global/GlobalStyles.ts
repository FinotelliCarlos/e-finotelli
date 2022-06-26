import { createGlobalStyle } from 'styled-components'
import dark from '../Themes/dark'

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
    background: ${({ theme }) => dark.background};
    color: ${({ theme }) => dark.font100};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;

    ::-webkit-scrollbar {
        width: 12px;
      }
      ::-webkit-scrollbar-track {
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: #6c757d; 
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #495057; 
    }
  }
`
