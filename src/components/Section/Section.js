import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import s from "./section.module.scss"

const Section = ({ children, className, title, ...rest }) => (
  <section className={classNames(s.root, { [s.rootWithTitle]: !!title }, className)} {...rest}>
    {title && (<div className={s.title}>{title}</div>)}
    {children}
  </section>
)


Section.defaultProps = {
  children: '',
  className: '',
  title: '',
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
}

export default Section
