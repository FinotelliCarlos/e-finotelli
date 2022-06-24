import styled from 'styled-components'
import dark from '../../Themes/dark'

// Box
export const ProductsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 70vw;

  @media screen and (max-width: 768px) {
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