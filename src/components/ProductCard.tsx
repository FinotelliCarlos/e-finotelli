import {
  Card,
  Cards,
  ImageBox,
  ImageProduct,
  TitleProduct
} from '../styles/components/ProductCard'

interface ProductCardProps {
  products: {
    image: string
    description: string
  }
}

export function ProductCard(props: ProductCardProps) {
  return (
    <Cards>
      <Card>
        <ImageBox>
          <ImageProduct src={props.products.image} />
        </ImageBox>
        <TitleProduct>{props.products.description}</TitleProduct>
      </Card>
    </Cards>
  )
}
