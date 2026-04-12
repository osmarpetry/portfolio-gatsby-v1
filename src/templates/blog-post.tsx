import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const DateBlogPost = styled.p`
  color: ${({ theme }) => theme.fontSecondary};
`

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark

  const {
    frontmatter: { title, description, date, image },
    html,
  } = post

  return (
    <Layout>
      <SEO title={title} description={description} image={image?.publicURL} />
      <DateBlogPost>{date}</DateBlogPost>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(locale: "en-us", formatString: "DD[th of] MMMM[,] YYYY")
        description
        title
        image {
          publicURL
        }
      }
      html
    }
  }
`

export default BlogPost
