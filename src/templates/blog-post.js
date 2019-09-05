import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import Divider from "../components/Divider"
import s from "./blog-post.module.scss";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title, date } = frontmatter;

  return (
    <main className={s.root}>
      <SEO title={title} />
      <Banner title={title} subtitle={date} />
      <Divider/>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`