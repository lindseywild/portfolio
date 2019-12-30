import React from "react"
// import { Link } from "gatsby"
import data from "../data/data.json";
import Experience from "../components/experience"
import Skills from "../components/skills"
import Tools from "../components/tools"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import headshot from "../images/lindseywild-headshot.jpg"

const About = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const Headshot = styled.img`
  border-radius: 5rem;
  max-width: 50%;
  margin: 1rem auto;
  display: block;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2><span>About</span></h2>
    <About>
      <Headshot src={headshot} alt="Lindsey Wild Headshot" />
      <div>
        <p>Hey! I'm Lindsey and I'm originally from Akron, Ohio. I moved to Pittsburgh in 2010 to pursue a degree in web development. I dabbled in web design/development in high school and have had a passion for it ever since!</p>

        <p>I love learning about the latest trends in web development, and I'm always ready to get my hands dirty with new technologies. When I'm not coding or learing more about code, I enjoy being outdoors and going to the gym. I also like watching the Cleveland Indians, trying new recipes, and traveling.</p>
      </div>
    </About>

    <h2><span>Skills</span></h2>
    <Skills />

    <h2><span>Tools</span></h2>
    <Tools />

    <h2><span>Work Experience</span></h2>
    {data.positions.map((position, i) => {
      return <Experience position={position}/>
    })}

    <h2><span>Other Experience</span></h2>
    <h3>Certifications</h3>
    <h4>Web Accessibility Specialist (WAS)</h4>
    <p>IAAP - International Association of Accessibility Professionals</p>

    <h3>Speaking / Articles</h3>
    <ul>
      <li>Unit Testing in Sass &mdash; <a href="https://www.codemash.org/">CodeMash</a> 2019</li>
      <li>Unit Testing in Sass &mdash; <a href="https://www.thatconference.com/wi">THAT Conference</a> 2019</li>
      <li>Unit Testing in Sass &mdash; <a href="https://abstractions.io/">Abstractions</a> 2019</li>
      <li>Tips for Remote Working &mdash; <a href="https://www.meetup.com/Gem-City-JS/">Gem City JS</a> 2019</li>
    </ul>


    <h2><span>Contact</span></h2>
    <ul>
      <li><a href="https://twitter.com/stananick">Twitter</a></li>
      <li><a href="https://github.com/lindseywild">LinkedIn</a></li>
      <li><a href="https://www.linkedin.com/in/lindseywild/">GitHub</a></li>
    </ul>



    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
