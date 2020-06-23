import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
`

export const SideLinksContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  list-style-type: none;
`

export const Title = styled.h1`
  font-size: 64px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;

  span {
    font-size: 24px;
  }
`
