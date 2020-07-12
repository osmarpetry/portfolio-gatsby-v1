import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const BlogItemSection = styled.section`
  border-radius: 10px;
  border: 1px solid hsla(255, 100%, 100%, 0.8);
  padding: 20px;
  margin-bottom: 20px;
`

export const Date = styled.p`
  font-size: 18px;
  color: hsla(255, 100%, 100%, 1);
  margin: 0;
`

export const Title = styled.p`
  font-size: 24px;
  color: hsla(255, 100%, 100%, 1);
`

export const Description = styled.p`
  font-size: 18px;
  color: hsla(255, 100%, 100%, 0.5);
`

export const Link = styled(GatsbyLink)`
  font-size: 20px;
  margin-top: 10px;
  color: hsla(255, 100%, 100%, 1);
  text-decoration: none;
`
