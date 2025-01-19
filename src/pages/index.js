import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <Layout pageTitle="index">
      <p>test page dayo</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage
