import {
  ExempleProject,
  Project,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectTitle
} from '../styles/components/ProjectCard'

interface ProjectCardProps {
    image: string
    title: string
    description: string
    link: string
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <ExempleProject>
      <Project>
        <ProjectImage src={props.image} />
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.description}</ProjectDescription>
        <ProjectLink href={props.link} target={'_blank'}>
          Acesse agora
        </ProjectLink>
      </Project>
    </ExempleProject>
  )
}
