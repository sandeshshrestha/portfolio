import React from "react"
import classNames from "classnames"
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

const PictureBanner = ({ className, ...rest }) => (
  <Section className={classNames(s.root, className)} {...rest}>
    <div className={s.imageContainer}>
      <div className={s.image}></div>
    </div>
    <h1 className={s.name}>Sandesh Shrestha</h1>
    <p className={s.position}>Full stack developer <a href="https://skarp.dk" target="_blank" rel="noopener noreferrer">@Skarp</a></p>
    <ul className={s.links}>
      {links.map(({ icon: Icon, link, title }) => (
        <li className={s.link} key={link}>
          <a href={link} target="_blank"  rel="noopener noreferrer" title={title}>
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
