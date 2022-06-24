import {
  Card,
  CardContainer,
  CardDescription,
  CardImage,
  Cards,
  CardTitle
} from '../styles/components/ServiceCard'

interface ServiceCardProps {
    title: string
    image: string
    description: string
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Cards className="cards">
      <Card>
        <CardImage src={props.image} />
        <CardContainer>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardContainer>
      </Card>
    </Cards>
  )
}
