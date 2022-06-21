import styled from 'styled-components'

export const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const MainHeader = styled.header`
  background: linear-gradient(
    180deg,
    rgba(33, 32, 103, 1) 34%,
    rgba(10, 9, 63, 1) 72%
  );

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`

export const MainHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 768px;

  height: 100%;
`

export const AppMain = styled.main`
  background: linear-gradient(
    180deg,
    rgba(10, 9, 63, 1) 34%,
    rgba(33, 32, 103, 1) 72%
  );

  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 768px;

  height: 100%;
`

export const AppFooter = styled.footer`
  background: linear-gradient(
    180deg,
    rgba(33, 32, 103, 1) 34%,
    rgba(10, 9, 63, 1) 72%
  );

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
