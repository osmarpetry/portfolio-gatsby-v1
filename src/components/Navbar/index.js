import React from "react"

import { Nav, Link, LinkElement, Title, SideLinksContainer } from "./styled"

const Navbar = ({ title, subTitle, leftLinks, rightLinks }) => (
  <Nav>
    <SideLinksContainer>
      {leftLinks.map(({ description, link }) => (
        <li>
          <Link to={link}>{description}</Link>
        </li>
      ))}
    </SideLinksContainer>
    <Link to="/">
      <Title>{title}</Title>
      <span>{subTitle}</span>
    </Link>
    <SideLinksContainer>
      {rightLinks.map(({ description, link }) => (
        <li>
          <LinkElement href={link} target="_blank">
            {description}
          </LinkElement>
        </li>
      ))}
    </SideLinksContainer>
  </Nav>
)

export default Navbar
