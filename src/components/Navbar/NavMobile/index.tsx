import React, { useState, FC } from 'react'

import NavButton from './NavButton'

import { Link, LinkElement } from '../styled'
import { NavbarProps } from '..'
import { NavHead, NavTitle, List, Nav } from './styled'

const NavMobile: FC<NavbarProps> = ({
  title,
  subTitle,
  leftLinks,
  rightLinks,
}) => {
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
            <Link to={link.link} onClick={() => setOpenLinks(!openLinks)}>
              {link.description}
            </Link>
          </li>
        ))}
        {rightLinks.map(link => (
          <li>
            <LinkElement href={link.link}>
              {link.description}
            </LinkElement>
          </li>
        ))}
      </List>
    </Nav>
  )
}

export default NavMobile
