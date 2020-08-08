import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import BlogItem from '../components/BlogItem'
import Pagination from '../components/Pagination'

const IndexPage = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
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
              date(locale: "en-us", formatString: "DD[th of] MMMM[,] YYYY")
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
      <SEO title="Home" description="Home page has my publications" />
      {postList.map(
        ({
          node: {
            frontmatter: { date, description, title },
            fields: { slug },
          },
        }) => (
          <BlogItem
            key={slug}
            date={date}
            title={title}
            description={description}
            link={slug}
          />
        )
      )}
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export default IndexPage
