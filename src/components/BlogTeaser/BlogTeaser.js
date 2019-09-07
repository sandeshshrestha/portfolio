import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import s from "./blogTeaser.module.scss"

const BlogTeaser = ({ title, path, date, body }) => (
  <Link to={path} className={s.root}>
    <h2>{title}</h2>
    <div className={s.date}>{date}</div>
  </Link>
)

BlogTeaser.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default BlogTeaser
