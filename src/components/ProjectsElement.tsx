import { api } from '../lib/data'
import {
  ContactAllProjects,
  ExempleProject,
  ExempleSubTitle,
  ExempleTitle,
  ProjectsContainer,
  SpanAllProjects
} from '../styles/components/ProjectsElement'
import { ButtonContact } from './ButtonContact'
import { ProjectCard } from './ProjectCard'

interface Props {}

export function ProjectsElement(props: Props) {
  return (
    <ProjectsContainer id="projects">
      <ExempleTitle>
        Aqui você poderá ver alguns dos meus{' '}
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

      <ContactAllProjects>
        <SpanAllProjects>
          Gostaria de conhecer mais projetos como estes?
        </SpanAllProjects>

        <ButtonContact />
      </ContactAllProjects>
    </ProjectsContainer>
  )
}
