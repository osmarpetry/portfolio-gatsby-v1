import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import Navbar from '../Navbar'

import GlobalStyles from '../../styles/global'

import { Main, Footer, LayoutWrapper } from './styled'

interface LayoutProps {
  children: React.ReactNode
}

const theme = {
  primary: '#253341',
  secondary: '#15202B',
  borderColor: '#ffff',
  fontPrimary: '#ffff',
  fontSecondary: 'rgb(136, 153, 166)'
}


const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      <header>
        <Navbar
          title="Osmar Petry"
          subTitle="Science is the door for the future"
          leftLinks={[
            { description: 'Home', link: '/' },
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
      <Footer>
        <p>
          © Copyleft - All rights reversed. The internet is free and so is my
          content.
        </p>
      </Footer>
      </ThemeProvider>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
