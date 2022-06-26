import styled from "styled-components";
import dark from "../../Themes/dark";

export const Button = styled.a`
  margin-top: 2rem;

  text-decoration: none;

  font-size: 1rem;
  color: ${({ theme }) => dark.font100};

  background: ${({ theme }) => dark.element};
  max-width: 15rem;
  height: 100%;
  padding: 1rem;
  border-radius: 1rem;

  transition: .2s;

  :hover{
    background: ${({ theme }) => dark.elementHover};
  }
`