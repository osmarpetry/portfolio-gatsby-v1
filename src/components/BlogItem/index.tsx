import React, { FC } from 'react'
import { Link } from 'gatsby'

import { BlogItemSection, Date, Title, Description, Read } from './styled'

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
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Read>Read ➜</Read>
    </Link>
  </BlogItemSection>
)

export default BlogItem
