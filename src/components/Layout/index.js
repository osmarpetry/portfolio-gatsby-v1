import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../Navbar"

import "./layout.css"

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
      <header>
        <Navbar
          title="Osmar Petry"
          subTitle="Some Cool Setense"
          leftLinks={[
            { description: "My Blog", link: "/" },
            { description: "About me", link: "/about-me" },
          ]}
          rightLinks={[
            { description: "Email", link: "mailto:osmarpetry@gmail.com" },
            {
              description: "Github",
              link: "https://linkedin.com/in/osmarpetry",
            },
            { description: "Linkedin", link: "https://github.com/osmarpetry" },
          ]}
        />
      </header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
