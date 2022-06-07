import { ThemeProvider } from 'styled-components'
import { HeaderElement } from './components/HeaderElement'
import { MainServicesElement } from './components/MainServicesElement'
import {
  AppBody,
  AppFooter,
  MainHeader,
  AppMain,
  FooterContainer,
  MainHeaderContainer,
  MainContainer
} from './styles/AppStyles'
import themes from './Themes'

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <AppBody>
        <HeaderElement />
        <MainHeader>
          <MainHeaderContainer>
            <MainServicesElement />
          </MainHeaderContainer>
        </MainHeader>
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
