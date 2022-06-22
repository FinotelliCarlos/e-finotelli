import { ProductInfo } from './productscardsinfo'
import {
  BigImage,
  Card,
  Cards,
  ContentText,
  ImageBox,
  ImageProduct,
  LeftElement,
  ProductsBox,
  RightElement,
  StrongText,
  TitleProduct
} from './styles'

import BigImageHummans from '../../assets/products/humaaans.png'

export const ProductsElement = () => {
  return (
    <ProductsBox>
      <LeftElement>
        <BigImage src={BigImageHummans} />
      </LeftElement>

      <RightElement>
        <ContentText>
          <StrongText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
            dolorum veritatis veniam
          </StrongText>
          non ratione temporibus saepe nisi vel aliquid, repellat eaque natus
          numquam laboriosam possimus recusandae quis maxime alias sapiente.
        </ContentText>

        <ContentText>
          <StrongText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
            dolorum veritatis veniam
          </StrongText>
          non ratione temporibus saepe nisi vel aliquid, repellat eaque natus
          numquam laboriosam possimus recusandae quis maxime alias sapiente.
        </ContentText>

        <Cards>
          {ProductInfo.map((item, index) => {
            return (
              <Card key={index}>
                <ImageBox>
                  <ImageProduct src={item.image} />
                </ImageBox>
                <TitleProduct>{item.description}</TitleProduct>
              </Card>
            )
          })}
        </Cards>

        <ContentText>
          <StrongText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
            dolorum veritatis veniam
          </StrongText>
          non ratione temporibus saepe nisi vel aliquid, repellat eaque natus
          numquam laboriosam possimus recusandae quis maxime alias sapiente.
        </ContentText>
      </RightElement>
    </ProductsBox>
  )
}
