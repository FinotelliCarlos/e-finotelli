import {
  Card,
  ImageBox,
  ImageProduct,
  TitleProduct
} from '../styles/components/ProductCard'

interface ProductCardProps {
  image: string
  description: string
}

export function ProductCard(props: ProductCardProps) {
  return (
    <Card>
      <ImageBox>
        <ImageProduct src={props.image} />
      </ImageBox>
      <TitleProduct>{props.description}</TitleProduct>
    </Card>
  )
}
