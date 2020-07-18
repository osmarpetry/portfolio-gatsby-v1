import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const NavSection = styled.section`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 959px) {
    .navDefault {
      display: none;
    }
  }
  @media only screen and (min-width: 960px) {
    .navMobile {
      display: none;
    }
  }
`

const LinkStyled = `
  text-decoration: none;
  font-size: 24px;
  text-align: center;
`

export const Link = styled(GatsbyLink)`
  color: ${({ theme }) => theme.fontPrimary};
  ${LinkStyled}
`

export const LinkElement = styled.a`
  color: ${({ theme }) => theme.fontPrimary};
  ${LinkStyled}
`
