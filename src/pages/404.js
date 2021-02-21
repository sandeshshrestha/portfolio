import React from "react"

import Root from "../components/Root"
import PageNotFound from "../sections/PageNotFound"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Root>
    <SEO title="404: Not found" />
    <PageNotFound />
  </Root>
);

export default NotFoundPage;
