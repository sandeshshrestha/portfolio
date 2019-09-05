import React from "react"
import { Link } from "gatsby"

import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <h1>Sandesh Shrestha</h1>
    <Link to="/blog">Blog</Link>
  </HomeLayout>
)

export default IndexPage
