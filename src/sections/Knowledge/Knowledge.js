import React from "react"
import List from "../../components/List";

import Section from "../../components/Section"
import s from "./knowledge.module.scss"

const knowledges = [
  {
    text: 'Setup Terraform by HasiCorp to setup cloud infrastructure.',
  },
  {
    text: 'Work with microcontrollers (Arduino, raspbery pi pico etc) devices as a hobby project.'
  },
  {
    text: 'Setup gitlab automated CI/CD pipeline to auto deploy and test the codes.'
  },
];

const Knowledge = () => (
  <Section title="Knowledge">
    <div className={s.content}>
      <List items={knowledges.map(k => ({
        ...k,
        text: (<p>{k.text}</p>)
      }))}></List>
    </div>
  </Section>
)


Knowledge.defaultProps = {
}

Knowledge.propTypes = {
}

export default Knowledge
