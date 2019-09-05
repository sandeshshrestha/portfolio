import React from "react"
import PropTypes from "prop-types"

import s from "./homeLayout.module.scss"

const HomeLayout = ({ children }) => (
  <main className={s.root}>
    {children}
  </main>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
