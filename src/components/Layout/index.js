import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../Navbar"

import GlobalStyles from '../../styles/global'

import { Main, Footer } from './styled'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <header>
        <Navbar
          title="Osmar Petry"
          subTitle="Science is the door for the future"
          leftLinks={[
            { description: "My Blog", link: "/" },
            { description: "About me", link: "/about-me" },
          ]}
          rightLinks={[
            { description: "Email", link: "mailto:osmarpetry@gmail.com" },
            {
              description: "Github",
              link: "https://github.com/osmarpetry",
            },
            {
              description: "Linkedin",
              link: "https://linkedin.com/in/osmarpetry",
            },
          ]}
        />
      </header>
      <div
        style={{
          maxWidth: 960,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto 0 auto'
        }}
      >
        <Main>{children}</Main>
        <Footer>
          © Copyleft - All rights reversed. The internet is free and so is my content.
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
