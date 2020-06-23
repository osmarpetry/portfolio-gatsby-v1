import React, { useState } from "react"
import styled from "styled-components"

import Close from "./../../../images/close.svg"
import OpenMenu from "./../../../images/open-menu.svg"

const Button = styled.button`
  outline: none;
  background: none;
  border: none;

  svg {
    height: 50px;
    width: 50px;
    fill: #ffff;
  }
`

const NavButton = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
    onClick()
  }

  return (
    <>
      <Button onClick={handleClick}>
        {!clicked ? <OpenMenu /> : <Close />}
      </Button>
    </>
  )
}

export default NavButton
