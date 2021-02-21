import React from "react"
import PropTypes from "prop-types"

import s from "./root.module.scss"

const Root = ({ children }) => (
  <main className={s.root}>
    {children}
  </main>
)

Root.defaultProps = {
  children: ``,
}

Root.propTypes = {
  children: PropTypes.node,
}

export default Root
