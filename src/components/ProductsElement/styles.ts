import styled from 'styled-components'
import dark from '../../Themes/dark'

// Box
export const ProductsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 70vw;

  @media screen and (max-width:768px){
  max-width: 90vw;
  }
`

// Left
export const FirstElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const BigImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 80%;
`

// Right
export const SeccondElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
`

export const Cards = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  flex-wrap: wrap;
  gap: .5rem;
  width: 100%;
  margin-bottom: 1rem;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;

  width: 100%;
  min-width: 6rem;
  max-width: 6rem;
  height: 100%;
  min-height: 10rem;
  max-height: 12rem;

  padding: 0.5rem;
`

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 5rem;
  border: 1px solid ${({ theme }) => dark.textSmall};
  border-radius: 50%;

  margin-bottom: 0.5rem;
  background: ${({ theme }) => dark.box200};
`

export const ImageProduct = styled.img`
  width: 2rem;
`

export const TitleProduct = styled.span`
  font-size: 0.7rem;
  text-align: center;
  color: ${({ theme }) => dark.textSmall};
`

// Titles
export const StrongText = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => dark.font100};
`

export const ContentText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => dark.font200};
  margin-bottom: 1rem;
`

// Exemples of Projects

export const ThirdElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
`

export const ExempleTitle = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => dark.font100};
  margin-bottom: 4rem;
`

export const ExempleSubTitle = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => dark.textSmall};
`

export const ExempleProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22rem;
  height: 100%;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => dark.textAlert};
  padding-bottom: 1rem;
`

export const ProjectImage = styled.img`
  width: 100%;
  border-radius: 0.7rem;
  border-bottom: 1px solid ${({ theme }) => dark.font100};
`

export const ProjectTitle = styled.span`
  font-size: 1rem;
  text-align: left;
  width: 100%;
  padding-left: 1rem;
  font-weight: bold;
  color: ${({ theme }) => dark.textAlert};
`

export const ProjectDescription = styled.span`
  font-size: .8rem;
  text-align: left;
  width: 100%;
  padding-left: 1rem;
  font-weight: bold;
  color: ${({ theme }) => dark.font200};
`

export const ProjectLink = styled.a`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => dark.font200};

  text-decoration: none;
  border: none;

  border-radius: 0.7rem;
  padding: 0.3rem 0;
  background: ${({ theme }) => dark.cards};

  :hover{
    background: ${({ theme }) => dark.textSmall};
  }

`