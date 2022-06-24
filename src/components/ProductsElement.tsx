import {
  BigImage,
  Cards,
  ContentText,
  ExempleProject,
  ExempleSubTitle,
  ExempleTitle,
  FirstElement,
  ProductsBox,
  SeccondElement,
  StrongText,
  ThirdElement
} from '../styles/components/ProductsElement'

import BigImageHummans from '../assets/sections/humaaans.png'

import { api } from '../lib/data'
import { ProductCard } from './ProductCard'
import { ProjectCard } from './ProjectCard'

interface Props {}

export function ProductsElement(props: Props) {
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
          {api.products.map((item, index) => {
            return (
              <ProductCard
                key={index}
                image={item.image}
                description={item.description}
              />
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
          {api.projects.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                link={item.link}
              />
            )
          })}
        </ExempleProject>
      </ThirdElement>
    </ProductsBox>
  )
}
