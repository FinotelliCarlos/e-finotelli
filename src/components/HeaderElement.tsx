import { useState } from 'react'

import LogotipoFinotelli from '../assets/finotellilogo.png'

import discordIcon from '../assets/contact/icondiscord.ico'
import faceIcon from '../assets/contact/iconfacebook.ico'
import instaIcon from '../assets/contact/iconintagram.ico'
import whatsIcon from '../assets/contact/iconwhatsapp.ico'

import { FaBars, FaTimes } from 'react-icons/fa'

import {
  ButtonListItem,
  ContainerContact,
  ContainerListNav,
  ElementContactInfoHeader,
  ElementContactInfoNav,
  HeaderBox,
  HeaderContainerAll,
  ImgDiscord,
  ImgLink,
  InfoText,
  ListItem,
  Logotipo,
  MobileIcon,
  Navigation,
  SpanTextInfo,
  Link
} from '../styles/components/HeaderElement'

type Props = {}

export function HeaderElement(props: Props) {
  const [sandwichClick, setSandwichClick] = useState(false)

  const handleClick = () => setSandwichClick(!sandwichClick)

  return (
    <HeaderContainerAll>
      <HeaderBox>
        <Link href="https://github.com/finotellicarlos" target={'_blank'}>
          <Logotipo
            src={LogotipoFinotelli}
            alt="Logotipo Finotelli, Software developer Javascript"
          />
        </Link>

        <Navigation onClick={handleClick} click={sandwichClick}>
          <ContainerListNav>
            <ListItem>
              <ButtonListItem href="#services">Serviços</ButtonListItem>
            </ListItem>

            <ListItem>
              <ButtonListItem href="#products">Produtos</ButtonListItem>
            </ListItem>

            <ListItem>
              <ButtonListItem href="#projects">Projetos</ButtonListItem>
            </ListItem>

            <ListItem>
              <ButtonListItem href="#contact">Contato</ButtonListItem>
            </ListItem>
          </ContainerListNav>

          <ElementContactInfoNav>
            <InfoText
              href="https://discordapp.com/users/733724313550717038"
              target={'_blank'}
            >
              Entre em contato via Discord
              <ImgDiscord src={discordIcon} alt="pequeno icone discord" />
            </InfoText>
            <SpanTextInfo>ou</SpanTextInfo>
            <ContainerContact>
              <Link
                href="https://facebook.com/finotellicarlos"
                target={'_blank'}
              >
                <ImgLink src={faceIcon} alt="pequeno icone facebook" />
              </Link>
              <Link href="https://instagram.com/c_finotelli" target={'_blank'}>
                <ImgLink src={instaIcon} alt="pequeno icone instagram" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5511958331748"
                target={'_blank'}
              >
                <ImgLink src={whatsIcon} alt="pequeno icone whatsapp" />
              </Link>
            </ContainerContact>
          </ElementContactInfoNav>
        </Navigation>

        <ElementContactInfoHeader>
          <InfoText
            href="https://discordapp.com/users/733724313550717038"
            target={'_blank'}
          >
            Entre em contato via Discord
            <ImgDiscord src={discordIcon} alt="pequeno icone discord" />
          </InfoText>
          <SpanTextInfo>ou</SpanTextInfo>
          <ContainerContact>
            <Link href="https://facebook.com/finotellicarlos" target={'_blank'}>
              <ImgLink src={faceIcon} alt="pequeno icone facebook" />
            </Link>
            <Link href="https://instagram.com/c_finotelli" target={'_blank'}>
              <ImgLink src={instaIcon} alt="pequeno icone instagram" />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5511958331748"
              target={'_blank'}
            >
              <ImgLink src={whatsIcon} alt="pequeno icone whatsapp" />
            </Link>
          </ContainerContact>
        </ElementContactInfoHeader>

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
