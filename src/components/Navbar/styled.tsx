import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const NavSection = styled.section`
  width: 100%;
  height: 100%;
`

const LinkStyled = `
  color: hsla(255, 100%, 100%, 0.8);
  text-decoration: none;
  font-size: 24px;
  text-align: center;
`

export const Link = styled(GatsbyLink)`
  ${LinkStyled}
`

export const LinkElement = styled.a`
  ${LinkStyled}
`
