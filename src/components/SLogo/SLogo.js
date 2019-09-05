import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import s from "./sLogo.module.scss"

const SLogo = ({ className }) => (
  <div className={classNames(className, s.logoContainer)}>
    <div className={classNames(s.square, s.squareOne, s.faceTop)}></div>
    <div className={classNames(s.square, s.squareTwo, s.faceTop)}></div>
    <div className={classNames(s.square, s.squareThree, s.faceTop)}></div>
    <div className={classNames(s.square, s.squareFour, s.side)}></div>
    <div className={classNames(s.square, s.squareFive, s.side2)}></div>
  </div>
)

SLogo.propTypes = {
  className: PropTypes.string,
}

SLogo.defaultProps = {
  className: ``,
}

export default SLogo
