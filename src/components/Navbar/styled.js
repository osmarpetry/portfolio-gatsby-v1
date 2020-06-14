import styled from "styled-components"
import { Link as GatsbyLink } from 'gatsby'

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
`

export const SideLinksContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  list-style-type: none;
`

const LinkStyled = `
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  width: 100%;
`

export const Link = styled(GatsbyLink)`
  ${LinkStyled}
`

export const LinkElement = styled.a`
  ${LinkStyled}
`

export const Title = styled.h1`
  font-size: 64px;
`
