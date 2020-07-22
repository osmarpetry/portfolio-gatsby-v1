import React, { FC } from 'react'

import { Link, LinkElement } from '../styled'
import { Nav, Title, SideLinksContainer } from './styled'
import { NavbarProps } from '..'

const NavDefault: FC<NavbarProps> = ({
  title,
  subTitle,
  leftLinks,
  rightLinks,
}) => {
  return (
    <Nav className='navDefault'>
      <SideLinksContainer>
        {leftLinks.map(({ description, link }) => (
          <li key={link}>
            <Link to={link}>{description}</Link>
          </li>
        ))}
      </SideLinksContainer>
      <Link to="/">
        <Title>
          {title} <span>{subTitle}</span>
        </Title>
      </Link>
      <SideLinksContainer>
        {rightLinks.map(({ description, link }) => (
          <li key={link}>
            <LinkElement href={link} target="_blank" rel="noopener">
              {description}
            </LinkElement>
          </li>
        ))}
      </SideLinksContainer>
    </Nav>
  )
}

export default NavDefault
