import React from "react"
import List from "../../components/List";

import Section from "../../components/Section"
import s from "./projects.module.scss"

const projects = [
  {
    text: 'Easy customizable ecommerse/CMS solution developed using BackboneJs as frontend framework that uses api developed using IBM RPG.'
  },
  {
    text: 'Web based video chat application using Twilio.'
  },
  {
    text: 'Online ecommerse solution using SSR React frontend, React admin and .Net Core backed using microservices architecture.'
  },
];

const Projects = () => (
  <Section title="Projects">
    <div className={s.content}>
      <List items={projects.map(k => ({
        ...k,
        text: (<p>{k.text}</p>)
      }))}></List>
    </div>
  </Section>
)


Projects.defaultProps = {
}

Projects.propTypes = {
}
export default Projects
