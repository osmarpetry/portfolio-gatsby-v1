import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from '../Navbar'

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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <GlobalStyles />
      <header>
        <Navbar
          title="Osmar Petry"
          subTitle="Science is the door for the future"
          leftLinks={[
            { description: 'My Blog', link: '/' },
            { description: 'About me', link: '/about-me' },
          ]}
          rightLinks={[
            { description: 'Email', link: 'mailto:osmarpetry@gmail.com' },
            {
              description: 'Github',
              link: 'https://github.com/osmarpetry',
            },
            {
              description: 'Linkedin',
              link: 'https://linkedin.com/in/osmarpetry',
            },
          ]}
        />
      </header>
      <div>
        <Main>{children}</Main>
      </div>
      <Footer
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        <p style={{ margin: '20px 0 10px 20px' }}>
          © Copyleft - All rights reversed. The internet is free and so is my
          content.
        </p>
      </Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
