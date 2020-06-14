import React from "react"

import { Nav, Link, Title, SideLinksContainer } from "./styled"

const Navbar = ({ title, subTitle, leftLinks, rightLinks }) => (
  <Nav>
    <SideLinksContainer>
      {leftLinks.map(({ description, link }) => (
        <Link href={link}>{description}</Link>
      ))}
    </SideLinksContainer>
    <Link href="/">
      <Title>{title}</Title>
      <span>{subTitle}</span>
    </Link>
    <SideLinksContainer>
      {rightLinks.map(({ description, link }) => (
        <Link href={link} target="_blank">
          {description}
        </Link>
      ))}
    </SideLinksContainer>
  </Nav>
)

export default Navbar
