import styled from 'styled-components'
import dark from '../../Themes/dark'



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
