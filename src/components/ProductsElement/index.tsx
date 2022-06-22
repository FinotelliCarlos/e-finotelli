import { ProductInfo } from './productscardsinfo'
import {
  BigImage,
  Card,
  Cards,
  ContentText,
  ExempleProject,
  ExempleSubTitle,
  ExempleTitle,
  FirstElement,
  ImageBox,
  ImageProduct,
  ProductsBox,
  Project,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectTitle,
  SeccondElement,
  StrongText,
  ThirdElement,
  TitleProduct
} from './styles'

import BigImageHummans from '../../assets/products/humaaans.png'
import { ProjectsInfo } from './projectsinfo'

export const ProductsElement = () => {
  return (
    <ProductsBox>
      <FirstElement id="products">
        <BigImage src={BigImageHummans} />
      </FirstElement>

      <SeccondElement>
        <ContentText>
          O sonho de todo gestor é{' '}
          <StrongText>
            aproveitar ao máximo a capacidade dos colaboradores e ter um setor
            altamente produtivo{' '}
          </StrongText>{' '}
          sem gastar muito.
          <StrongText>
            {' '}
            Os softwares de gestão são ferramentas absolutamente úteis para
            elevar o desempenho das equipes e garantir resultados
          </StrongText>{' '}
          significativos para o negócio.
        </ContentText>

        <ContentText>
          A iniciativa de se investir em tecnologia, em primeiro momento pode
          haver duvidas para a empresa,{' '}
          <StrongText>
            mas a longo prazo, a redução dos custos operacionais gera um aumento
            de receita e o retorno sobre o investimento.
          </StrongText>
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
          Conforme a empresa cresce, o número de clientes avança com ela e{' '}
          <StrongText>
            fica cada vez mais difícil manter um pré e pós-venda de qualidade,
            especialmente sem a ajuda de softwares
          </StrongText>{' '}
          que automatizam todo processo.
          <br />
          <StrongText>
            Com a tecnologia, é possível obter um monitoramento melhor
          </StrongText>{' '}
          sobre em qual etapa de venda cada cliente está, se uma campanha foi ou
          não enviada a ele, além de ativar notificações sobre pagamentos e
          pendências.
          <br />
          <StrongText>
            É evidente que a tecnologia pode ajudar exponencialmente vários
            segmentos e áreas de negócio.
          </StrongText>
        </ContentText>
      </SeccondElement>
      <ThirdElement>
        <ExempleTitle>
          Aqui pode ver alguns dos meus{' '}
          <ExempleSubTitle>projetos</ExempleSubTitle>.
        </ExempleTitle>
        <ExempleProject>
          {ProjectsInfo.map((item,index) => {
            return (
              <Project key={index}>
                <ProjectImage src={item.image}/>
                <ProjectTitle>{item.title}</ProjectTitle>
                <ProjectDescription>{item.description}</ProjectDescription>
                <ProjectLink href={item.link} target={'_blank'}>
                  Acesse agora
                </ProjectLink>
              </Project>
            )
          })}
        </ExempleProject>
      </ThirdElement>
    </ProductsBox>
  )
}
