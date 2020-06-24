import React, { FC } from 'react'
import Media from 'react-media'

import { NavSection } from './styled'
import NavDefault from './NavDefault'
import NavMobile from './NavMobile'

interface Link {
  description: string
  link: string
}

export interface NavbarProps {
  title: string
  subTitle: string
  leftLinks: Link[]
  rightLinks: Link[]
}

const Navbar: FC<NavbarProps> = ({
  title,
  subTitle,
  leftLinks,
  rightLinks,
}) => (
  <NavSection>
    <Media
      queries={{
        small: '(max-width: 959px)',
        large: '(min-width: 960px)',
      }}
    >
      {({ small, large }) => (
        <>
          {small && (
            <NavMobile
              title={title}
              subTitle={subTitle}
              leftLinks={leftLinks}
              rightLinks={rightLinks}
            />
          )}
          {large && (
            <NavDefault
              title={title}
              subTitle={subTitle}
              leftLinks={leftLinks}
              rightLinks={rightLinks}
            />
          )}
        </>
      )}
    </Media>
  </NavSection>
)

export default Navbar
