import styled from 'styled-components'
import dark from '../../Themes/dark'

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80vw;

  @media screen and (max-width: 768px) {
    max-width: 90vw;
  }
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
  margin-top: 0.5rem;
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
  gap: 0.4rem;
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
  width: 70vw;
  margin: 2rem;
  gap: 3rem;
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`
