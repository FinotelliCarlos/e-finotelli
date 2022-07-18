import styled from 'styled-components'
import dark from '../../Themes/dark'

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22rem;
  height: 100%;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => dark.textAlert};
  padding-bottom: 1rem;
`

export const ProjectImage = styled.img`
  width: 100%;
  border-radius: 0.7rem;
  border-bottom: 1px solid ${({ theme }) => dark.font100};
`

export const ProjectTitle = styled.span`
  font-size: 1rem;
  text-align: left;
  width: 100%;
  padding-left: 1rem;
  font-weight: bold;
  color: ${({ theme }) => dark.textAlert};
`

export const ProjectDescription = styled.span`
  font-size: 0.8rem;
  text-align: left;
  width: 100%;
  padding-left: 1rem;
  font-weight: 400;
  color: ${({ theme }) => dark.font200};
`

export const ProjectLink = styled.a`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => dark.font200};

  text-decoration: none;
  border: none;

  border-radius: 0.7rem;
  padding: 0.3rem 0;
  background: ${({ theme }) => dark.cards};

  :hover {
    background: ${({ theme }) => dark.textSmall};
  }
`
