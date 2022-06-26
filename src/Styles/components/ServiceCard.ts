import styled from 'styled-components'
import dark from '../../Themes/dark'

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 19rem;
  height: 10rem;
  background: linear-gradient(
    90deg,
    rgba(105, 48, 195, 0.36317302800026263) 0%,
    rgba(105, 48, 195, 1) 100%
  );
  gap: 2rem;
  border-right: 5px solid ${({ theme }) => dark.element};
  border-radius: 0.5rem;
  padding: 0 0 0 0.5rem;
`

export const CardImage = styled.img`
  display: flex;
  align-items: left;
  width: 7rem;
  height: 9rem;
`

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 1rem 1rem 1rem 0;
`

export const CardTitle = styled.p`
  text-align: left;
  width: 100%;
  font-size: 1rem;
  color: ${({ theme }) => dark.font100};
  font-weight: bold;
`

export const CardDescription = styled.p`
  font-size: 0.8rem;
  text-align: left;
  color: ${({ theme }) => dark.font200};
`
