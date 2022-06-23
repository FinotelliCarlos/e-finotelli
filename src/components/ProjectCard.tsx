import {
  ExempleProject,
  Project,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectTitle
} from '../styles/components/ProjectCard'

interface ProjectCardProps {
  projects: {
    image: string
    title: string
    description: string
    link: string
  }
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <ExempleProject>
      <Project>
        <ProjectImage src={props.projects.image} />
        <ProjectTitle>{props.projects.title}</ProjectTitle>
        <ProjectDescription>{props.projects.description}</ProjectDescription>
        <ProjectLink href={props.projects.link} target={'_blank'}>
          Acesse agora
        </ProjectLink>
      </Project>
    </ExempleProject>
  )
}
