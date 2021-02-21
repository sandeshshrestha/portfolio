import React from "react"
import List from "../../components/List";

import Section from "../../components/Section"
import s from "./languages.module.scss"

const workedWith = [
  {
    text: 'Javascript',
  },
  {
    text: 'CSS',
  },
  {
    text: 'HTML',
  },
  {
    text: 'C#',
  },
  {
    text: 'bash',
  },
  {
    text: 'PHP',
  },
];

const presonalProjects = [
  {
    text: 'golang',
  },
  {
    text: 'python',
  },
]

const Languages = () => (
  <Section title="Languages">
    <div className={s.content}>
      <List items={workedWith} title="Worked with"></List>
      <List items={presonalProjects} title="Personal projects"></List>
    </div>
  </Section>
)


Languages.defaultProps = {
}

Languages.propTypes = {
}
export default Languages
