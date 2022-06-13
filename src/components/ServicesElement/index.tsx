import {
  ButtonContact,
  Card,
  CardContainer,
  CardDescription,
  CardImage,
  Cards,
  CardTitle,
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
} from './styles'
import { CardInfo } from './cardsinfo'

type Props = {}

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
        <PhraseSmall>
          Atualmente as tecnologias utilizadas são:
        </PhraseSmall>
        <PhraseSmallSecond>
        Typescript, Node.js, Javascript, React.js, Next.js, React-Native c/ Expo.
        </PhraseSmallSecond>
        <ButtonContact id='services' href="https://api.whatsapp.com/send?phone=5511958331748">Entre em contato agora</ButtonContact>
      </IntroContainer>

      <OptionsAndCardsContainer>
        <OptionContainerTitle>
          <FocusStrong>Foco de desenvolvimento </FocusStrong>
          direcionado a:
        </OptionContainerTitle>
        <Cards className="cards" >
          {CardInfo.map((item, index) => {
            return (
              <Card key={index}>
                <CardImage src={item.image} alt="Mini Navegador Web" />
                <CardContainer className="cont">
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContainer>
              </Card>
            )
          })}
        </Cards>
      </OptionsAndCardsContainer>
    </ServicesContainer>
  )
}
