import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  margin-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    border-radius: 5px;
    padding: 10px;
    align-items: center;
    color: ${({ theme }) => theme.fontSecondary};
    display: flex;
    height: 60px;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.borderColor};
  }

  a:nth-child(2) {
    border-left: 0px;
  }
  p {
    padding-top: 10px;
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`
