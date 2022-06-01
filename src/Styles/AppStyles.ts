import styled from 'styled-components'
import dark from '../Themes/dark'

export const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const MainHeader = styled.header`
  background: ${({ theme }) => dark.box100};
  
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`

export const MainHeaderContainer = styled.div`
  background: ${({ theme }) => dark.element};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 768px;

  height: 100%;
`

export const AppMain = styled.main`
  background: ${({ theme }) => dark.box200};

  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContainer = styled.div`
  background: ${({ theme }) => dark.element};


  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 768px;

  height: 100%;
`

export const AppFooter = styled.footer`
  background: ${({ theme }) => dark.background};

  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 768px;

  height: 100%;

`
