import React from 'react'

import { BlogItemSection, Date, Title, Description, Link } from './styled'

const BlogItem = ({ date, title, description, link }) => (
  <BlogItemSection>
    <Date>{date}</Date>
    <Title>
      <Link to={link}>{title}</Link>
    </Title>
    <Description>{description}</Description>
    <Link to={link}>Read ➜</Link>
  </BlogItemSection>
)

export default BlogItem
