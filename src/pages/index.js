import React from "react"

import SEO from "../components/SEO"
import PictureBanner from "../sections/PictureBanner"
import Root from "../components/Root"
import s from "./index.module.scss";

const IndexPage = () => (
  <Root>
    <SEO title="" />
    <PictureBanner className={s.pictureBanner} />
  </Root>
)

export default IndexPage
