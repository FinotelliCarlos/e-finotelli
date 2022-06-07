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
  ContainerContact,
  ContainerListNav,
  ElementContactInfo,
  HeaderBox,
  HeaderContainerAll,
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
    <HeaderContainerAll>
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
            <InfoText href="https://discordapp.com/users/733724313550717038" target={'_blank'}>
              Entre em contato via Discord
              <ImgDiscord src={discordIcon} alt="pequeno icone discord" />
            </InfoText>
            <SpanTextInfo>ou</SpanTextInfo>
            <ContainerContact>
              <a href="https://github.com/finotellicarlos" target={'_blank'}>
                <ImgLink src={gitIcon} alt="pequeno icone github" />
              </a>
              <a href="https://instagram.com/c_finotelli" target={'_blank'}>
                <ImgLink src={instaIcon} alt="pequeno icone instagram" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5511958331748" target={'_blank'}>
                <ImgLink src={whatsIcon} alt="pequeno icone whatsapp" />
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
    </HeaderContainerAll>
  )
}
