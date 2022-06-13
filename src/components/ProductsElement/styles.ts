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
export const LeftElement = styled.div`
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
export const RightElement = styled.div`
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
  width: 1rem;
  color: ${({ theme }) => dark.textSmall};
`

export const TitleProduct = styled.p`
  font-size: 0.7rem;
  text-align: center;
  color: ${({ theme }) => dark.textSmall};
`

// Titles
export const StrongText = styled.strong`
  font-size: 0.9rem;
  color: ${({ theme }) => dark.font100};
`

export const ContentText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => dark.font200};
  margin-bottom: 1rem;
`
