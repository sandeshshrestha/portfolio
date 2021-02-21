import React from "react"

import Section from "../../components/Section"
import s from "./blog.module.scss"

const Blog = () => (
  <Section title="Blog">
    <a href="#" style={{
      backgroundImage: `url('https://bslthemes.com/ryan/demo/images/man5_big.jpg)`
    }} className={s.blogItem}>
      <span className={s.blogTitle}>Blog title</span>
    </a>
    <a href="#" style={{
      backgroundImage: `url('https://bslthemes.com/ryan/demo/images/man5_big.jpg)`
    }} className={s.blogItem}>
      <span className={s.blogTitle}>Blog title</span>
    </a>
  </Section>
)


Blog.defaultProps = {
}

Blog.propTypes = {
}
export default Blog
