import React from "react"

import { Nav, Link, Title, SideLinksContainer } from "./styled"

const Navbar = ({ title, subTitle, leftLinks, rightLinks }) => (
  <Nav>
    <SideLinksContainer>
      {leftLinks.map(({ description, link }) => (
        <li>
          <Link href={link}>{description}</Link>
        </li>
      ))}
    </SideLinksContainer>
    <Link href="/">
      <Title>{title}</Title>
      <span>{subTitle}</span>
    </Link>
    <SideLinksContainer>
      {rightLinks.map(({ description, link }) => (
        <li>
          <Link href={link} target="_blank">
            {description}
          </Link>
        </li>
      ))}
    </SideLinksContainer>
  </Nav>
)

export default Navbar
