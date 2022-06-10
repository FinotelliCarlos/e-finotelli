import styled from 'styled-components'
import dark from '../../Themes/dark'

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80vw;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  max-width: 768px;
  width: 100%;
  padding: 2rem;
`

export const QuestionElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  width: 100%;
  border-left: 1px solid #fff;
  padding-left: 1rem;
`

export const FirstQuestion = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => dark.textSmall};
`

export const SecondQuestion = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => dark.textSmall};
  margin-top: .5rem;
`

export const PhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  width: 50%;
  padding-top: 3rem;
`

export const Phrase = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => dark.font100};
`

export const TextStrong = styled.strong`
  font-size: 1.5rem;
  color: ${({ theme }) => dark.textAlert};
`

export const PhraseSmall = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => dark.font200};
  margin-top: 1rem;
`

export const PhraseSmallSecond = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => dark.font200};
  font-weight: bold;
`

export const ButtonContact = styled.a`
  margin-top: 2rem;

  text-decoration: none;
  
  font-size: 1rem;
  color: ${({ theme }) => dark.font100};

  background: ${({ theme }) => dark.textAlert};
  max-width: 15rem;
  height: 100%;
  padding: 1rem;
  border-radius: 1rem;
  
`

export const OptionsAndCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`

export const OptionContainerTitle = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: .4rem;
  margin: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => dark.font100};
`

export const FocusStrong = styled.strong`
  font-size: 1rem;
  color: ${({ theme }) => dark.textAlert};
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 80vw;
  margin: 2rem ;
  gap: 3rem;
  @media screen and (max-width: 840px){
    flex-direction: column;
  }
`

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
  font-size: .8rem;
  color: ${({ theme }) => dark.font200};
`

