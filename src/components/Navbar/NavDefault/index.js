import React from "react"

import { Link, LinkElement } from "../styled"
import { Nav, Title, SideLinksContainer } from "./styled"

const NavDefault = ({ title, subTitle, leftLinks, rightLinks }) => {
  return (
    <Nav>
      <SideLinksContainer>
        {leftLinks.map(({ description, link }) => (
          <li>
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
          <li>
            <LinkElement href={link} target="_blank">
              {description}
            </LinkElement>
          </li>
        ))}
      </SideLinksContainer>
    </Nav>
  )
}

export default NavDefault
