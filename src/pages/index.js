import React from "react"
import { Link } from "gatsby"

import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"
import s from "./index.module.scss";

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <Link to="/">Home</Link>
    <section className={s.nameSection}>
      <h1>Sandesh Shrestha</h1>
    </section>
  </HomeLayout>
)

export default IndexPage
