import React, { Fragment } from "react"
import PropTypes from "prop-types"

import SLogo from "../SLogo"
import s from "./banner.module.scss"

const Banner = ({ title, subtitle, children }) => (
  <Fragment>
    <SLogo />
    <section className={s.root}>
      <h1>{title}</h1>
      {subtitle && (
        <p className={s.subtitle}>{subtitle}</p>
      )}
      <div className={s.linksContainer}>
        {children}
      </div>
    </section>
  </Fragment>
)


Banner.defaultProps = {
  children: ``,
  subtitle: ``,
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}
export default Banner
