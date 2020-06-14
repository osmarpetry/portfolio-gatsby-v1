/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
            timeToRead
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
          <div>
            <a>{slug}</a>
            <p>{date}</p>
            <p>{title}</p>
            <p>{description}</p>
          </div>
        )
      )}
    </Layout>
  )
}

export default IndexPage
