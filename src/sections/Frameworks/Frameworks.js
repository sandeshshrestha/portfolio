import React from "react"
import List from "../../components/List";

import Section from "../../components/Section"
import s from "./frameworks.module.scss"

const workedWith = [
  {
    text: 'React',
  },
  {
    text: 'Angular',
  },
  {
    text: '.Net Core',
  },
  {
    text: 'BackboneJs',
  },
  {
    text: 'QraphQl',
  },
  {
    text: 'Lets encrypt',
  },
  {
    text: 'Nginx',
  },
];
const presonalProjects = [
  {
    text: 'MithrilJs',
  },
  {
    text: 'GatsbyJs',
  },
];
const Frameworks = () => (
  <Section title="Frameworks">
    <div className={s.content}>
      <List items={workedWith} title="Worked with"></List>
      <List items={presonalProjects} title="Personal projects"></List>
    </div>
  </Section>
)


Frameworks.defaultProps = {
}

Frameworks.propTypes = {
}
export default Frameworks
