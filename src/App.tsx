import { ThemeProvider } from 'styled-components'
import { FooterElement } from './components/FooterElement'
import { HeaderElement } from './components/HeaderElement'
import { ProductsElement } from './components/ProductsElement'
import { ServicesElement } from './components/ServicesElement'
import {
  AppBody,
  AppFooter, AppMain,
  FooterContainer, MainContainer, MainHeader, MainHeaderContainer
} from './styles/AppStyles'
import themes from './Themes'

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <AppBody>
        <HeaderElement />
        <MainHeader>
          <MainHeaderContainer>
            <ServicesElement />
          </MainHeaderContainer>
        </MainHeader>
        <AppMain>
          <MainContainer>
            <ProductsElement />
          </MainContainer>
        </AppMain>
        <AppFooter>
          <FooterContainer>
            <FooterElement />
          </FooterContainer>
        </AppFooter>
      </AppBody>
    </ThemeProvider>
  )
}

export default App
