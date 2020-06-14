import React from 'react'

import { BlogItemSection, Date, Title, Description, Link} from './styled'

const BlogItem = ({date, title, description, link}) => (
  <BlogItemSection>
    <Date>{date}</Date>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Link href={link}>Read ➜</Link>
  </BlogItemSection>
)

export default BlogItem