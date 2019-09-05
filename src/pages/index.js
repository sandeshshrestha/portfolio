import React, { Fragment } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import SLogo from "../components/SLogo"
import s from "./index.module.scss";

const sections = [
  {
    title: 'Frontend Stack',
    items: [
      'HTML', 'CSS', 'JavaScript', 'React', 'Gatsby', 'Next.js',
    ]
  },
  {
    title: 'Backend Stack',
    items: [
      'Hapi.js', 'Laravel', '.NETCore', 'GraphQL'
    ]
  },
  {
    title: 'Other',
    items: [
      'Docker', 'Kubernetes', 'Terraform'
    ]
  }
];

const IndexPage = () => (
  <main className={s.root}>
    <SEO title="Home" />
    <SLogo />
    <section className={s.nameSection}>
      <h1>Sandesh Shrestha</h1>
      <p className={s.title}>Full Stack Developer</p>
      <div className={s.linksContainer}>
        <Link to="/blog" className={s.link}>Blog</Link>
        <a href="https://github.com/sandeshshrestha" target="_blank" rel="noopener noreferrer" className={s.link}>Github</a>
      </div>
    </section>
    {sections.map(({ title, items }) => (
      <Fragment key={title}>
        <div className={s.divider} />
        <section className={s.section}>
          <h2>{title}</h2>
          <div className={s.sectionItems}>
            {items.map(item => (
              <span key={item} className={s.sectionItem}>{item}</span>
            ))}...
          </div>
        </section>
      </Fragment>
    ))}
  </main>
)

export default IndexPage
