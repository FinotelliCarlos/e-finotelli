import {
  AppBody,
  AppFooter,
  AppHeader,
  AppMain,
  FooterContainer,
  HeaderContainer,
  MainContainer
} from './Styles/AppStyles'

export function App() {
  return (
    <AppBody>
      <AppHeader>
        <HeaderContainer>header</HeaderContainer>
      </AppHeader>
      <AppMain>
        <MainContainer>main</MainContainer>
      </AppMain>
      <AppFooter>
        <FooterContainer>footer</FooterContainer>
      </AppFooter>
    </AppBody>
  )
}

export default App
