import styled from 'styled-components'
import dark from '../../Themes/dark'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
  max-width: 80vw;

  @media screen and (max-width: 768px) {
    max-width: 90vw;
  }
`

export const ExempleTitle = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => dark.font100};
  margin-bottom: 4rem;
`

export const ExempleSubTitle = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => dark.textSmall};
`

export const ExempleProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`

export const ContactAllProjects = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 4rem 0;
`

export const SpanAllProjects = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => dark.font100};
  text-align: center;
`
