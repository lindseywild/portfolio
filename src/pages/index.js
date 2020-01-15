import React from "react"
import data from "../data/data.json";
import Experience from "../components/experience"
import Skills from "../components/skills"
import Tools from "../components/tools"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import headshot from "../images/lindseywild-headshot.jpg"

const About = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    p {
      margin-bottom: 1rem;
    }
  }
`

const Headshot = styled.img`
  border-radius: 50%;
  max-width: 50%;
  margin: 0 auto 1rem auto;
  display: flex;

  @media (min-width: 768px) {
    max-width: 30%;
    order: 1;
  }
`

const HalfWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 650px;
  }
`

const OtherList = styled.ul`
  list-style: none;
  margin-left: 0;

  > li {
    padding-bottom: 1rem;
  }

  li > ul > li {
    list-style: disc;
  }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2><span>About</span></h2>
    <About>
      <Headshot src={headshot} alt="Lindsey Wild Headshot" />
      <div>
        <p>Hi! I'm Lindsey Wild, a Front End Engineer in Pittsburgh, PA. I have over {new Date().getFullYear() - 2012} years of experience in the web industry. I've worked for companies large and small, mainly in online retail/eCommerce and consulting. I am also a certified Web Accessibilty Specialist (WAS).</p>

        <p>I love learning about the latest trends in web development, and I'm always ready to get my hands dirty with new technologies. When I'm not coding or learing more about code, I enjoy being outdoors and going to the gym. I also like watching the Cleveland Indians, trying new recipes, and traveling.</p>
      </div>
    </About>

    <h2><span>Skills & Tools</span></h2>
    <HalfWrapper>
      <Skills />
      <Tools />
    </HalfWrapper>

    <h2><span>Work Experience</span></h2>
    {data.positions.map((position, i) => {
      return <Experience position={position} key={i} />
    })}

    <h2><span>Other Experience</span></h2>
    <h3>Certifications</h3>
    <ul>
      <li><a href="https://www.accessibilityassociation.org/wascertification">Web Accessibility Specialist (WAS)</a></li>
    </ul>

    <h3>Speaking / Articles</h3>
    <OtherList>
      <li><strong>Conference Talk</strong>: Unit Testing in Sass @
        <ul>
          <li><a href="https://www.codemash.org/">CodeMash</a> &ndash; 2019</li>
          <li><a href="https://www.thatconference.com/wi">THAT Conference</a> &ndash; 2019</li>
          <li><a href="https://abstractions.io/">Abstractions</a> &ndash; 2019</li>
        </ul>
      </li>
      <li><strong>Lightning Talk</strong>: Tips for Remote Working @
        <ul>
          <li><a href="https://www.meetup.com/Gem-City-JS/">Gem City JS</a> 2019</li>
        </ul>
      </li>
      <li><strong>Article</strong>: <a href="https://seesparkbox.com/foundry/how_and_why_we_unit_test_our_sass">Unit Testing in Sass</a></li>
    </OtherList>
  </Layout>
)

export default IndexPage
