import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import BlogItem from '../components/BlogItem'

const IndexPage = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC },
        filter: {fields: { slug: { nin: "/about-me/"}}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "en-us", formatString: "MMMM DD YYYY")
              description
              title
            }
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { date, description, title },
            fields: { slug },
          },
        }) => (
          <BlogItem
            date={date}
            title={title}
            description={description}
            link={slug}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
