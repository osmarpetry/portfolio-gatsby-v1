import React, { FC } from 'react'

import { BlogItemSection, Date, Title, Description, Link, Read } from './styled'

interface BlogItemProps {
  date: string
  title: string
  description: string
  link: string
}

const BlogItem: FC<BlogItemProps> = ({ date, title, description, link }) => (
  <BlogItemSection>
    <Link to={link}>
    <Date>{date}</Date>
    <Title>
      <Link to={link}>{title}</Link>
    </Title>
    <Description>{description}</Description>
    <Read>
      Read ➜
    </Read>
    </Link>
  </BlogItemSection>
)

export default BlogItem
