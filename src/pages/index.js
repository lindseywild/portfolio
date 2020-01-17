import React from "react"
import styled, { ThemeProvider } from 'styled-components';
import data from "../data/data.json";
import Experience from "../components/experience"
import Skills from "../components/skills"
import Tools from "../components/tools"
import Layout from "../components/layout"
import SEO from "../components/seo"
import headshot from "../images/lindseywild-headshot.jpg"

const theme = {
  primaryColor: '#C58882',
  secondaryColor: '#EAD2AC',
  tertiaryColor: '#DF928E',
  dark: '#1D201F',
  headingFontStack: '"Playfair Display", "Georgia", "serif"',
  bodyFontStack: '"Fira Sans", "Helvetica", "sans-serif"',
};

const SectionHeader = styled.h2`
  font-family: ${props => props.theme.headingFontStack};
  font-size: 1.75rem;
  background-color: ${props => props.theme.secondaryColor};
  margin: 4rem 0 2rem;

  span {
    padding-right: 0.5rem;
    background-color: ${props => props.theme.dark};
    margin-left: 1.5rem;
    padding-left: 0.5rem;
  }
`;

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
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <SectionHeader><span>About</span></SectionHeader>
      <About>
        <Headshot src={headshot} alt="Lindsey Wild Headshot" />
        <div>
          <p>Hi! I'm Lindsey Wild, a Front End Engineer in Pittsburgh, PA. I have over {new Date().getFullYear() - 2012} years of experience in the web industry. I've worked for companies large and small, mainly in online retail/eCommerce and consulting. I am also a certified Web Accessibilty Specialist (WAS).</p>

          <p>I love learning about the latest trends in web development, and I'm always ready to get my hands dirty with new technologies. When I'm not coding or learing more about code, I enjoy being outdoors and going to the gym. I also like watching the Cleveland Indians, trying new recipes, and traveling.</p>
        </div>
      </About>

      <SectionHeader><span>Skills & Tools</span></SectionHeader>
      <HalfWrapper>
        <Skills />
        <Tools />
      </HalfWrapper>

      <SectionHeader><span>Work Experience</span></SectionHeader>
      {data.positions.map((position, i) => {
        return <Experience position={position} key={i} />
      })}

      <SectionHeader><span>Other Experience</span></SectionHeader>
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
  </ThemeProvider>
)

export default IndexPage
