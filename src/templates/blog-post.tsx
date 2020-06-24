/* eslint-disable react/prop-types */

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark

  const {
    frontmatter: { title, description, date },
    html,
  } = post

  return (
    <Layout>
      <SEO title={title} description={description} />
      <p>{date}</p>
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
      }
      html
    }
  }
`

export default BlogPost
