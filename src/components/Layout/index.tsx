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
  fontSecondary: 'rgb(232, 232, 232)',
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <header>
          <Navbar
            title="Osmar Petry"
            subTitle="Professional developer with amateur publications"
            leftLinks={[
              { description: 'Home', link: '/' },
              { description: 'Newsletter', link: '/newsletter' },
              { description: 'About me', link: '/about-me' },
            ]}
            rightLinks={[
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
            © Copyleft - All rights reversed. The internet and my content is
            free to use.
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
