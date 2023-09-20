import * as React from 'react'
import { Link } from 'gatsby'
import "../css/style.css"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="container">
            <nav>
                <ul className="nav-links">
                    <li className="nav-link-item">
                        <Link to="/" className="nav-link-text">
                            Character Design
                        </Link>
                    </li>
                    <li className="nav-link-item">
                        <Link to="/visdev" className="nav-link-text">
                            Visual Development
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className="heading">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout