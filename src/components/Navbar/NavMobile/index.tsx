import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import NavButton from './NavButton'

import { Link, LinkElement } from '../styled'

const Nav = styled.nav`
  padding: 20px 20px 0 20px;
`

const NavHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`

const List = styled.ul`
  list-style-type: none;
  height: 0;
  margin: 0;
  display: none;
  a {
    opacity: 0;
  }
  ${({ open }) =>
    open &&
    css`
      display: block;
      height: calc(100vh - 100px);
      a {
        opacity: 1;
        font-size: 55px;
      }
      li {
        padding-top: 50px;
      }
      li:first-child {
        padding-top: 50px;
      }
    `}
`

const NavTitle = styled.h1`
  font-size: 40px;
  color: #ffffff;
  white-space: nowrap;
  display: flex;
  margin: 0;
  flex-direction: column;
  span {
    font-size: 15px;
    font-weight: normal;
    font-variant: normal;
    padding: 5px 0 0 0;
  }
`

const NavMobile = ({ title, subTitle, leftLinks = [], rightLinks = [] }) => {
  const [openLinks, setOpenLinks] = useState(false)

  return (
    <Nav>
      <NavHead>
        <Link to="/">
          <NavTitle>
            {title}
            <span>{subTitle}</span>
          </NavTitle>
        </Link>
        <NavButton onClick={() => setOpenLinks(!openLinks)} />
      </NavHead>
      <List open={openLinks}>
        {leftLinks.map(link => (
          <li>
            <Link to={link.link} onClick={() => setOpenLinks(false)}>
              {link.description}
            </Link>
          </li>
        ))}
        {rightLinks.map(link => (
          <li>
            <LinkElement to={link.link} onClick={() => setOpenLinks(false)}>
              {link.description}
            </LinkElement>
          </li>
        ))}
      </List>
    </Nav>
  )
}

export default NavMobile
