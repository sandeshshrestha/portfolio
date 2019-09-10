import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/Banner"
import s from "./index.module.scss";

const IndexPage = () => (
  <main className={s.root}>
    <SEO title="Home" />
    <Banner title="Sandesh Shrestha" subtitle="Full Stack Developer">
      <Link to="/blog" className={s.bannerLink}>Blog</Link>
      <a href="https://github.com/sandeshshrestha" target="_blank" rel="noopener noreferrer" className={s.bannerLink}>Github</a>
    </Banner>
  </main>
)

export default IndexPage
