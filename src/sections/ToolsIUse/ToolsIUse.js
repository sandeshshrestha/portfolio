import React from "react"
import List from "../../components/List";

import Section from "../../components/Section"
import s from "./toolsiuse.module.scss"

const workedWith = [
  {
    text: 'Linux OS',
  },
  {
    text: 'VS Code',
  },
  {
    text: 'Rider',
  },
  {
    text: 'Datagrip'
  },
  {
    text: 'Gitkraken',
  },
  {
    text: 'Github',
  },
  {
    text: 'Gitlab',
  },
  {
    text: 'docker',
  },
];

const ToolsIUse = () => (
  <Section title="Tools/Software">
    <div className={s.content}>
      <List items={workedWith}></List>
    </div>
  </Section>
)


ToolsIUse.defaultProps = {
}

ToolsIUse.propTypes = {
}
export default ToolsIUse
