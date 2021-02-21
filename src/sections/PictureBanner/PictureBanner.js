import React from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Section from "../../components/Section"
import s from "./picturebanner.module.scss"

const links = [
  {
    icon: FaGithub,
    link: 'https://github.com/sandeshshrestha',
    title: 'Github repo'
  },
  {
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/sandeshshrestha/',
    title: 'LinkedIn profile'
  }
];

const PictureBanner = () => (
  <Section className={s.root}>
    <div className={s.imageContainer}>
      <div className={s.image}></div>
    </div>
    <h1 className={s.h1}>Sandesh Shrestha</h1>
    <p className={s.p1}>MSc in Computer Science</p>
    <p className={s.p2}>Full stack developer at skarp</p>
    <ul className={s.links}>
      {links.map(({ icon: Icon, link, title }) => (
        <li className={s.link} key={link}>
          <a href={link} target="_blank"  rel="noreferrer" title={title}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </Section>
)


PictureBanner.defaultProps = {
}

PictureBanner.propTypes = {
}
export default PictureBanner
