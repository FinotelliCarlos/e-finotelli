import {
  ButtonContact,
  Card,
  Cards,
  FirstQuestion,
  IntroContainer,
  OptionContainerTitle,
  OptionsAndCardsContainer,
  Phrase,
  PhraseContainer,
  PhraseSmall,
  QuestionElement,
  SecondQuestion,
  ServicesContainer,
  TextStrong
} from './styles'

export function MainServicesElement() {
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
            <TextStrong>
              Desenvimento
            </TextStrong>
            por paixão e
            <TextStrong>
              solução de problemas
            </TextStrong>
            como inspiração todos os dias!
          </Phrase>
          <PhraseSmall>Apaixonado pelo ecosistema Javascript.</PhraseSmall>
          <ButtonContact href="#">Entre em contato agora</ButtonContact>
        </PhraseContainer>
      </IntroContainer>

      <OptionsAndCardsContainer>
        <OptionContainerTitle>
          Foco de serviço direcionado ao desenvolvimento de:
        </OptionContainerTitle>
        <Cards className="cards">
          <Card>Front-End</Card>
          <Card>Mobile</Card>
          <Card>Back-End</Card>
        </Cards>
      </OptionsAndCardsContainer>
    </ServicesContainer>
  )
}
