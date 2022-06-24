import styled from 'styled-components'
import dark from '../../Themes/dark'



export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 19rem;
  height: 10rem;
  background: ${({ theme }) => dark.cards};
  gap: 2rem;
`

export const CardImage = styled.img`
  position: relative;
  top: -3rem;
  left: -2rem;

  display: flex;
  align-items: left;
  width: 7rem;
  height: 9rem;
`

export const CardContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 1rem 1rem 1rem 0;
`

export const CardTitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => dark.font100};
  font-weight: bold;
`

export const CardDescription = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => dark.font200};
`
