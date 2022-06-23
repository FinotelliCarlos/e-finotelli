import styled from 'styled-components'
import dark from '../../Themes/dark'

export const HeaderContainerAll = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    180deg,
    rgba(10, 9, 63, 1) 34%,
    rgba(33, 32, 103, 1) 72%
  );
`

export const HeaderBox = styled.header`
  max-width: 70vw;
  width: 100%;

  padding: 1rem;
  display: flex;
  gap: 1rem;

  justify-content: space-around;
  align-items: center;
`

export const Logotipo = styled.img`
  width: 14rem;

  @media screen and (max-width: 450px) {
    width: 10rem;
  }
`

export const Navigation = styled.ul<{ click: any }>`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: ${({ click }) => (click ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: ${({ click }) => (click ? 'none' : '100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #333;
    z-index: 9;
  }
`

export const ContainerListNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ListItem = styled.li`
  list-style: none;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ButtonListItem = styled.a`
  display: inline-block;
  font-size: 0.8rem;
  color: ${({ theme }) => dark.font100};
  font-weight: 600;
  background: none;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: translateY(-5%);
    opacity: 0.8;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0.8rem;
    width: 90%;
    display: table;
    margin: 0 5%;
    border-radius: 0.5rem;
    background: none;
    &:hover {
      color: #4b59f7;
      transition: all 0.5s ease;
    }
  }
`

export const ElementContactInfoHeader = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ElementContactInfoNav = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    flex-direction: column;
  }
`

export const Link = styled.a``

export const InfoText = styled.a`
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.2rem;
  font-size: 0.7rem;

  color: ${({ theme }) => dark.font100};

  &:hover {
    color: ${({ theme }) => dark.font200};
  }
`
export const ImgDiscord = styled.img`
  width: 1rem;
`

export const SpanTextInfo = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => dark.font200};
`

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
export const a = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  cursor: pointer;
`
export const ImgLink = styled.img`
  border-radius: 0.7rem;
  width: 1.6rem;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
