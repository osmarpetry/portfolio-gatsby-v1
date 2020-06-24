import React, { useState } from 'react'
import styled from 'styled-components'

import Close from './../../../images/close.svg'
import OpenMenu from './../../../images/open-menu.svg'
import { NavButtonStyled } from './styled'

const NavButton = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
    onClick()
  }

  return (
    <>
      <NavButtonStyled onClick={handleClick}>
        {!clicked ? <OpenMenu /> : <Close />}
      </NavButtonStyled>
    </>
  )
}

export default NavButton
