import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import SLogo from "../components/SLogo"
import s from "./index.module.scss";

const IndexPage = () => (
  <main className={s.root}>
    <SEO title="Home" />
    <SLogo />
    <section className={s.nameSection}>
      <h1>Sandesh Shrestha</h1>
      <div className={s.linksContainer}>
        <Link to="/blog" className={s.link}>Blog</Link>
        <a href="https://github.com/sandeshshrestha" target="_blank" rel="noopener noreferrer" className={s.link}>Github</a>
      </div>
    </section>
  </main>
)

export default IndexPage
