import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Avatar from '../components/Avatar'

import { Header, Title, Paragraph } from '../styles/about-me-styled'

const AboutMe = () => (
  <Layout>
    <SEO
      title="My name is Osmar"
      description="A short description about Osmar"
    />
    <Header>
      <Avatar />
      <Title>Hello, my name is Osmar <span role='img' aria-label='waving hand emoji'>👋</span></Title>
    </Header>
    <Paragraph>
      I'm a Brazilian software enginner living in Joinville.
    </Paragraph>
    <Paragraph>
      I write Javascript most of the time, always studying to evolve
      technically.
    </Paragraph>
    <Paragraph>
      Content that I own is always up for grabs. Universities and online courses
      use some of these posts as reference material, and you can do the same if
      you want.
    </Paragraph>
    <Paragraph>
      Everything I produce belongs to the internet. It has made me who I am,
      and, therefore, it deserves all I have.
    </Paragraph>
  </Layout>
)

export default AboutMe
