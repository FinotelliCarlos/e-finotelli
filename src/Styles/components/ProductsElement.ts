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

export const Cards = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`