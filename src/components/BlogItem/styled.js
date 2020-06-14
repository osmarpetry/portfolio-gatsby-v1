import styled from "styled-components"
import { Link as GatsbyLink } from 'gatsby'

export const BlogItemSection = styled.section`
  border-radius: 10px;
  border: 1px solid black;
  padding: 20px;
`

export const Date = styled.p`
  font-size: 18px;
  color: rgb(0, 0, 0, 1);
  margin: 0;
`

export const Title = styled.p`
  font-size: 24px;
  color: rgb(0, 0, 0, 1);
`

export const Description = styled.p`
  font-size: 18px;
  color: rgb(0, 0, 0, 0.5);
`

export const Link = styled(GatsbyLink)`
  font-size: 20px;
  margin-top: 10px;
  color: rgb(0, 0, 0, 1);
  text-decoration: none;
`
