import { ThemeProvider } from 'styled-components'
import {
  AppBody,
  AppFooter,
  AppHeader,
  AppMain,
  FooterContainer,
  HeaderContainer,
  MainContainer
} from './styles/AppStyles'
import themes from './Themes'

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
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
    </ThemeProvider>
  )
}

export default App
