import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Main = styled.main`
  background-color: #253341;
  padding: 30px;
  border-radius: 10px;
  max-width: 960px;
  margin: 0 auto;
  flex-grow: 1;
`

export const Footer = styled.footer`
  color: hsla(255, 100%, 100%, 0.5);
  flex-shrink: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  p {
    margin: 20px 0 10px 20px;
  }
`
