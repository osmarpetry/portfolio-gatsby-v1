import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SadImage = styled(Img)`
  border-radius: 5px;
  margin-bottom: 10px;
`

const NotFoundPage = () => {
  const { sadImage } = useStaticQuery(
    graphql`
      query {
        sadImage: file(relativePath: { eq: "404.jpg" }) {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Page not found"  description="Page not found, back to home page"/>
      <NotFoundLayout>
        <h1>Page NOT FOUND!</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <SadImage fixed={sadImage.childImageSharp.fixed} />
        <p>
          <Link to="/">Click here to return to home page</Link>
        </p>
      </NotFoundLayout>
    </Layout>
  )
}

export default NotFoundPage
