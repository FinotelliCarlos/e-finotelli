//@ts-nocheck
import styled from "styled-components";
import dark from "../../Themes/dark";

export const HeaderBox = styled.header`
  max-width: 850px;
  width: 100%;

  padding: 1rem 0;
  display: flex;
  gap: 1rem;

  justify-content: space-around;
  align-items: center;
`;

export const Logotipo = styled.img`
  width: 14rem;

  @media screen and (max-width:450px){
    width: 10rem;
  }

`

export const Navigation = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #333;
    z-index: 9;
  }
`;


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
`;

export const ButtonListItem = styled.a`
  display: inline-block;
  font-size: .8rem;
  color: ${({theme}) => dark.font100};
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
`;

export const ElementContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .1rem;
  flex-direction: column;
`

export const InfoText = styled.a`
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .2rem;
  font-size: .7rem;
  
  color: ${({theme}) => dark.font200};
`
export const ImgDiscord = styled.img`
  width: 1rem;
`

export const SpanTextInfo = styled.span`
  font-size: .7rem;
  color: ${({theme}) => dark.font200};
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
  gap: .2rem;
  cursor: pointer;
`
export const ImgLink = styled.img`
border-radius: .7rem;
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
`;