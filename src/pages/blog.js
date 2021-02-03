import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Divider from "../components/Divider"
import BlogTeaser from '../components/BlogTeaser';
import Banner from "../components/Banner"
import s from "./blog.module.scss";

const BlogPage = () => {
  const { allMarkdownRemark: { edges }} = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              html
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
              }
            }
          }
        }
      }
    `
  )
  
  return (
    <main className={s.root}>
      <SEO title="Blog" />
      <Banner title="Blog" subtitle="My blog posts" />
      {edges.map(({ node: { frontmatter: { title, path, date}, html }}) => (
        <Fragment key={path}>
          <Divider />
          <BlogTeaser key={path} title={title} path={path} date={date} body={html} />
        </Fragment>
      ))}
    </main>
  )
};

export default BlogPage;