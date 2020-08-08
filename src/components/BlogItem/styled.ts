import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const BlogItemSection = styled.section`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 20px;
  margin-bottom: 20px;
`

export const Date = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.fontSecondary};
  margin: 0;
`

export const Title = styled.h3`
  font-size: 20px;
  padding-top: 5px;
  color: ${({ theme }) => theme.fontPrimary};
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.fontPrimary};
`

export const Read = styled.p`
  color: ${({ theme }) => theme.fontSecondary};
  margin: 0;
  font-weight: bold;
`
