import React, { Fragment } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Divider from "../components/Divider"
import Banner from "../components/Banner"
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

const a = () => {
  const b = '';
  b();
};

const IndexPage = () => (
  <main className={s.root} onClick={a}>
    <SEO title="Home" />
    <Banner title="Sandesh Shrestha" subtitle="Full Stack Developer">
      <Link to="/blog" className={s.bannerLink}>Blog</Link>
      <a href="https://github.com/sandeshshrestha" target="_blank" rel="noopener noreferrer" className={s.bannerLink}>Github</a>
    </Banner>
    {sections.map(({ title, items }) => (
      <Fragment key={title}>
        <Divider />
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
