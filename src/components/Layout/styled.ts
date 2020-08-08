import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Main = styled.main`
  background-color: ${({ theme }) => theme.primary};
  padding: 30px;
  border-radius: 10px;
  max-width: 960px;
  margin: 0 auto;
  flex-grow: 1;
`

export const Footer = styled.footer`
  color: ${({ theme }) => theme.fontSecondary};
  flex-shrink: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  p {
    margin: 20px 0 10px 20px;
  }
`
