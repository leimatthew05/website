import * as React from 'react'
import {
    Nav, 
    Navbar,
    NavLink,
} from 'reactstrap';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    var menuitems = 
    [
      <NavLink>
        <Link to={"/"} >Character Design</Link>
      </NavLink>,
      <NavLink>
        <Link to={"/story/"}>Story</Link>
      </NavLink>,
      <NavLink>
        <Link to={"/visdev/"}>Visual Development</Link>
      </NavLink>,
      <NavLink>
        <Link to={"/shortfilms/"}>Short Films</Link>
      </NavLink>,
      <NavLink>
        <Link to={"/about/"}>About</Link>
      </NavLink>,
    ]

    return (
        <div className = "layout">
        <main>
            <div className="menu">
                    <Navbar>
                        <Nav className="m-auto">
                        {menuitems}
                        </Nav>
                    </Navbar>
            </div>
            <div className = "header" style = {{textAlign: "center", paddingBottom:"30px"}}>
                <h1>{"MATTHEW LEI"}</h1>
                <h2>{pageTitle}</h2>
            </div>

            {children}
        </main>
        </div>
    )
}

export default Layout