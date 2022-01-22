import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Avatar from '../components/Avatar'

import { Header, Title, Paragraph } from '../styles/about-me-styled'
import { Link } from 'gatsby'

const AboutMe = () => (
  <Layout>
    <SEO
      title="Newsletter"
      description="My Getrevue's Newsletter https://www.getrevue.co/profile/osmarpetry"
    />
    <Header>
      <Avatar />
      <Title>My Newsletter</Title>
    </Header>
    <Paragraph>
      This is my blog, but if you want to follow my newsletter click here:{' '}
      <a href="https://www.getrevue.co/profile/osmarpetry">
        https://www.getrevue.co/profile/osmarpetry
      </a>.
    </Paragraph>
    <Paragraph>
      Every new publication in this blog I will write a quick brieft just for
      the newsletter.
    </Paragraph>
  </Layout>
)

export default AboutMe
