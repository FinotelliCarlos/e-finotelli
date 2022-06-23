import {
  Card,
  CardContainer,
  CardDescription,
  CardImage,
  Cards,
  CardTitle
} from '../styles/components/ServiceCard'

interface ServiceCardProps {
  services: {
    title: string
    image: string
    description: string
  }
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Cards className="cards">
      <Card>
        <CardImage src={props.services.image} />
        <CardContainer>
          <CardTitle>{props.services.title}</CardTitle>
          <CardDescription>{props.services.description}</CardDescription>
        </CardContainer>
      </Card>
    </Cards>
  )
}
