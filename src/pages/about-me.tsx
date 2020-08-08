import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Avatar from '../components/Avatar'

import { Header, Title, Paragraph } from '../styles/about-me-styled'
import { Link } from 'gatsby'

const AboutMe = () => (
  <Layout>
    <SEO
      title="About me"
      description="A short description about Osmar Petry, software engineer. This site is a personal journal where you can find almost all his work and studies."
    />
    <Header>
      <Avatar />
      <Title>
        Hello, my name is Osmar &nbsp;
        <span role="img" aria-label="waving hand emoji">
          👋
        </span>
      </Title>
    </Header>
    <Paragraph>
      I'm a Brazilian software engineer living in Joinville. Working with web
      technologies since 2017.
    </Paragraph>
    <Paragraph>
      I write Javascript most of the time, always studying to evolve
      technically.
    </Paragraph>
    <Paragraph>
      The idea behind this blog, is to work as a journal for me. For more
      details read <Link to="/how-this-blog-was-born/">this blog post</Link>.
    </Paragraph>
    <Paragraph>
      Everything I produce belongs to the internet. It has made me who I am,
      and, therefore, it deserves all I have.
    </Paragraph>
  </Layout>
)

export default AboutMe
