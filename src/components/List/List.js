import React, { Fragment } from "react"
import PropTypes from "prop-types"

import s from "./list.module.scss"

const List = ({ items, title }) => (
  <Fragment>
    {title && (
      <div>{title}</div>
    )}
    <ul>
      {items.map(({ text }, index) => (
        <li key={index}>
            {text}
        </li>
      ))}
    </ul>
  </Fragment>
);


List.defaultProps = {
  items: [],
  title: ''
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
  })).isRequired,
  title: PropTypes.string,
}

export default List
