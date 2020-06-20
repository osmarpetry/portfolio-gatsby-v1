import React from "react"
import MediaQuery from 'react-responsive'

import { NavSection } from "./styled"
import NavDefault from "./NavDefault"
import NavMobile from "./NavMobile"

const Navbar = ({ title, subTitle, leftLinks, rightLinks }) => (
  <NavSection>
    <MediaQuery maxDeviceWidth={959}>
      <NavMobile title={title} subTitle={subTitle} leftLinks={leftLinks} rightLinks={rightLinks} />
    </MediaQuery>
    <MediaQuery minDeviceWidth={960}>
      <NavDefault  title={title} subTitle={subTitle} leftLinks={leftLinks} rightLinks={rightLinks} />
    </MediaQuery>
  </NavSection>
)

export default Navbar
