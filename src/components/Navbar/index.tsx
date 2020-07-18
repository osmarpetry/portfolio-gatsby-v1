import React, { FC } from 'react'

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
    <NavMobile
      title={title}
      subTitle={subTitle}
      leftLinks={leftLinks}
      rightLinks={rightLinks}
    />
    <NavDefault
      title={title}
      subTitle={subTitle}
      leftLinks={leftLinks}
      rightLinks={rightLinks}
    />
  </NavSection>
)

export default Navbar
