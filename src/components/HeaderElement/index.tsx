//@ts-nocheck
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import LogotipoFinotelli from '../../assets/finotellilogo.png'
import discordIcon from '../../assets/icondiscord.ico'
import gitIcon from '../../assets/icongithub.ico'
import instaIcon from '../../assets/iconintagram.ico'
import whatsIcon from '../../assets/iconwhatsapp.ico'
import {
  ButtonListItem,
  ContainerContact, ContainerListNav, ElementContactInfo,
  HeaderBox,
  ImgDiscord,
  ImgLink,
  InfoText,
  ListItem,
  Logotipo,
  MobileIcon,
  Navigation,
  SpanTextInfo
} from './styles'

export function HeaderElement() {
  const [sandwichClick, setSandwichClick] = useState(false)

  const handleClick = () => setSandwichClick(!sandwichClick)

  return (
    <HeaderBox>
      <Logotipo
        src={LogotipoFinotelli}
        alt="Logotipo Finotelli, Software developer Javascript"
      />

      <Navigation onClick={handleClick} click={sandwichClick}>
        <ContainerListNav>
          
          <ListItem>
            <ButtonListItem href="#services">Serviços</ButtonListItem>
          </ListItem>

          <ListItem>
            <ButtonListItem href="#about">Sobre</ButtonListItem>
          </ListItem>

          <ListItem>
            <ButtonListItem href="#products">Produtos</ButtonListItem>
          </ListItem>

          <ListItem>
            <ButtonListItem href="#contact">Contato</ButtonListItem>
          </ListItem>
        </ContainerListNav>

        <ElementContactInfo>
            <InfoText href="#">
              Entre em contato via Discord
              <ImgDiscord src={discordIcon} alt="pequeno icone discord" />
            </InfoText>
            <SpanTextInfo>ou</SpanTextInfo>
          <ContainerContact>
            <a href="#">
              <ImgLink src={gitIcon} alt="pequeno icone github" />
            </a>
            <a href="#">
              <ImgLink src={instaIcon} alt="pequeno icone instagram" />
            </a>
            <a href="#">
              <ImgLink src={whatsIcon} alt="pequeno icone facebook" />
            </a>
          </ContainerContact>
        </ElementContactInfo>

      </Navigation>

      <MobileIcon onClick={handleClick}>
        {sandwichClick ? (
          <FaTimes color="var(--content-subtitle)" />
        ) : (
          <FaBars color="var(--primary)" />
        )}
      </MobileIcon>
    </HeaderBox>
  )
}
