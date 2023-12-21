import * as React from 'react'
import {
    Nav, 
    Navbar,
    NavLink,
} from 'reactstrap';
import '../css/style.css';
import '../css/mobile.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'gatsby'
import Menu from './menu.js';

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
        <Link to={"/shortfilms/"}>Short Films</Link>
      </NavLink>,
      <NavLink>
        <Link to={"/about/"}>About</Link>
      </NavLink>,
    ]

    return (
        <div className = "layout">
        <main>
            <Menu/>
            <div className="mobile-only" style={{paddingTop: "80px"}}/>
            <div className="header" style = {{textAlign: "center", paddingBottom:"30px"}}>
                <h1>{"MATTHEW LEI"}</h1>
                <h2>{pageTitle}</h2>
            </div>

            {children}
        </main>
        </div>
    )
}

export default Layout