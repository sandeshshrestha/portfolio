import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Sandesh Shrestha</h1>
    <Link to="/blog">Blog</Link>
  </Layout>
)

export default IndexPage
