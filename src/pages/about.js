// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {Row, Col} from 'reactstrap';
import { Link } from 'gatsby';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="About">
        <div className = "section">
            <Row>
                <Col sm={5} style={{paddingRight: "30px"}}>
                    <img src = "../../images/pfp.png" width = "100%"/>
                </Col>
                <Col sm={6}>
                    <h3>
                        Hi there! My name is Matthew Lei.
                    </h3>
                    I'm in my first year of CalArts. I'm also an animation assistant and storyboard artist for Gingerpale. I'm currently on the hunt for
                    any animation related internships over the Summer.
                    <h3 style={{paddingTop: "50px"}}>
                        Contacts
                    </h3>
                    <h6>
                    <Link to={"mailto:mlei@students.calarts.edu"}>EMAIL: mlei@students.calarts.edu</Link>
                    </h6>
                    <h6>
                    <Link to={"https://www.instagram.com/lei_doodles"}>INSTAGRAM: @lei_doodles</Link>
                    </h6>
                    <h6>
                    <Link to={"https://www.linkedin.com/in/matthew-lei-777289275/"}>LINKEDIN</Link>
                    </h6>
                    <h6>
                    <Link to={"https://linktr.ee/leidoodles"}>OTHER LINKS</Link>
                    </h6>
                </Col>
            </Row>
        </div>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage