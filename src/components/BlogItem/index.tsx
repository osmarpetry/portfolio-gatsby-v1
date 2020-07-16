import React, { FC } from 'react'

import { BlogItemSection, Date, Title, Description, Link } from './styled'

interface BlogItemProps {
  date: string
  title: string
  description: string
  link: string
}

const BlogItem: FC<BlogItemProps> = ({ date, title, description, link }) => (
  <BlogItemSection>
    <Date>{date}</Date>
    <Title>
      <Link to={link}>{title}</Link>
    </Title>
    <Description>{description}</Description>
    <Link to={link} isSecondary>Read ➜</Link>
  </BlogItemSection>
)

export default BlogItem
