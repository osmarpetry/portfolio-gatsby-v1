import React from "react"

const Navbar = ({ title, subTitle, leftLinks, rightLinks }) => (
  <nav>
    {leftLinks.map(({ description, link }) => (
      <a href={link}>{description}</a>
    ))}
    <a href="/">
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </a>
    {rightLinks.map(({ description, link }) => (
      <a href={link} target="_blank">
        {description}
      </a>
    ))}
  </nav>
)

export default Navbar
