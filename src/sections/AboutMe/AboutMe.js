import React from "react"

import Section from "../../components/Section"
import getYear from "../../helpers/getYear"
import s from "./aboutme.module.scss"

const AboutMe = () => (
  <Section title="About me" className={s.root}>
    <div className={s.content}>
      I am Sandesh Shrestha, web developer from Copenhagen, Denmark.
      I have {getYear('2014-01-01')} years experience as a Full Stack web developer.
    </div>
  </Section>
)


AboutMe.defaultProps = {
}

AboutMe.propTypes = {
}
export default AboutMe
