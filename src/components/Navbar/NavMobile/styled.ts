import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  padding: 20px 20px 0 20px;
`

export const NavHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`

export const List = styled.ul`
  list-style-type: none;
  height: 0;
  margin: 0;
  display: none;
  a {
    opacity: 0;
  }
  ${({ open }) =>
    open &&
    css`
      display: block;
      height: calc(100vh - 100px);
      a {
        opacity: 1;
        font-size: 55px;
      }
      li {
        padding-top: 50px;
      }
      li:first-child {
        padding-top: 50px;
      }
    `}
`

export const NavTitle = styled.h1`
  font-size: 40px;
  color: hsla(255, 100%, 100%, 0.8);
  white-space: nowrap;
  display: flex;
  margin: 0;
  flex-direction: column;
  span {
    font-size: 15px;
    font-weight: normal;
    font-variant: normal;
    padding: 5px 0 0 0;
  }
`

export const NavButtonStyled = styled.button`
  outline: none;
  background: none;
  border: none;

  svg {
    height: 50px;
    width: 50px;
    fill: hsla(255, 100%, 100%, 0.8);
  }
`
