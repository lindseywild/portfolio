import React from "react"
import { Link } from "gatsby"
import data from "../data/data.json";

import Experience from "../components/experience"
import Skills from "../components/skills"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Skills />
    {data.positions.map((position, i) => {
      return <Experience position={position} key={i} />
    })}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
