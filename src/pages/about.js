// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {Row, Col} from 'reactstrap';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="About">
        <div className = "section">
            <Row>
                <Col sm={5} style={{paddingRight: "30px"}}>
                    <img src = "../../images/profile.jpg" width = "100%"/>
                </Col>
                <Col sm={6}>
                    <h3>
                        Hi there! My name is [Name]
                    </h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum
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