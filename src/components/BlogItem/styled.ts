import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const BlogItemSection = styled.section`
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.borderColor};
  padding: 20px;
  margin-bottom: 20px;
`

export const Date = styled.p`
  font-size: 15px;
  color: ${({theme }) => theme.fontSecondary};
  margin: 0;
`

export const Title = styled.h3`
  font-size: 20px;
  color: ${({theme}) => theme.fontPrimary};
  font-weight: normal;
`

export const Description = styled.p`
  font-size: 18px;
  color: ${({theme}) => theme.fontPrimary};
`

export const Link = styled(GatsbyLink)`
  margin-top: 10px;
  color: ${({theme, isSecondary}) => isSecondary ? theme.fontSecondary : theme.fontPrimary};
  text-decoration: none;
`