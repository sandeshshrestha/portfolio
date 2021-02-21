import React from "react"

import SEO from "../components/seo"
import PictureBanner from "../sections/PictureBanner"
import AboutMe from "../sections/AboutMe"
import Section from "../components/Section"
import Root from "../components/Root"
import s from "./index.module.scss";
import Languages from "../sections/Languages"
import ToolsIUse from "../sections/ToolsIUse"
import Knowledge from "../sections/Knowledge"
import Projects from "../sections/Projects"
import Blog from "../sections/Blog"
import Frameworks from "../sections/Frameworks"

const IndexPage = () => (
  <Root>
    <SEO title="Home" />
    <PictureBanner />
    <AboutMe />
    <Languages />
    <Frameworks />
    <ToolsIUse />
    <Knowledge />
    <Projects />
    <Blog />
  </Root>
)

export default IndexPage
