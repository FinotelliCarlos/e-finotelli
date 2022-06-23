import {
  ButtonContact,
  FirstQuestion,
  FocusStrong,
  IntroContainer,
  OptionContainerTitle,
  OptionsAndCardsContainer,
  Phrase,
  PhraseContainer,
  PhraseSmall,
  PhraseSmallSecond,
  QuestionElement,
  SecondQuestion,
  ServicesContainer,
  TextStrong
} from '../styles/components/ServicesElement'
import { ServiceCard } from './ServiceCard'

import { api } from '../lib/data'

interface Props {
  title: string
  image: string
  description: string
}

export const ServicesElement = (props: Props) => {
  return (
    <ServicesContainer>
      <IntroContainer>
        <QuestionElement>
          <FirstQuestion>Precisa de uma nova solução?</FirstQuestion>
          <SecondQuestion>
            Já pensou em ter uma aplicação somente sua?
          </SecondQuestion>
        </QuestionElement>
        <PhraseContainer>
          <Phrase>
            <TextStrong>Desenvimento </TextStrong>
            por paixão e <TextStrong>solução de problemas </TextStrong>
            como inspiração todos os dias!
          </Phrase>
        </PhraseContainer>
        <PhraseSmall>Atualmente as tecnologias utilizadas são:</PhraseSmall>
        <PhraseSmallSecond>
          Typescript, Node.js, Javascript, React.js, Next.js, React-Native c/
          Expo.
        </PhraseSmallSecond>
        <ButtonContact
          id="services"
          href="https://api.whatsapp.com/send?phone=5511958331748"
        >
          Entre em contato agora
        </ButtonContact>
      </IntroContainer>

      <OptionsAndCardsContainer>
        <OptionContainerTitle>
          <FocusStrong>Foco de desenvolvimento </FocusStrong>
          direcionado a:
        </OptionContainerTitle>

        {api.services.map((item: Props, index) => {
          return (
            <ServiceCard
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          )
        })}
      </OptionsAndCardsContainer>
    </ServicesContainer>
  )
}
