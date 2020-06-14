import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { StyledAvatar } from './styled'

const Avatar = ({width, height}) => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-picture.jpg" }) {
          childImageSharp {
            fixed(width: 210, height: 210) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <StyledAvatar fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
