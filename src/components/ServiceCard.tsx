import {
  Card,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle
} from '../styles/components/ServiceCard'

interface ServiceCardProps {
  title: string
  image: string
  description: string
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Card>
      <CardImage src={props.image} />
      <CardContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardContainer>
    </Card>
  )
}
