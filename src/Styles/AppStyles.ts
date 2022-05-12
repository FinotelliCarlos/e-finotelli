import styled from 'styled-components'
import { darkMode } from '../Global/GlobalStyles'

export const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100%;
`

export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 768px;

  height: 100%;
  min-height: 30vh;
`

export const AppMain = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContainer = styled.div`
  background: ${({ theme }) => darkMode.box100};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 768px;

  height: 100%;
  min-height: 70vh;

  border-top: 2px solid #457b9d;
  border-radius: 0.7rem 0.7rem 0 0;
`

export const AppFooter = styled.footer`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterContainer = styled.div`
  background: ${({ theme }) => darkMode.box200};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 768px;

  height: 100%;
  min-height: 10vh;

  border-top: 2px solid #457b9d;

`
