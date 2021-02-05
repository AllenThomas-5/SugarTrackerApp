import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Sugar Data App </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                            {/* <a class="nav-link" href="#/">Home <span class="sr-only">(current)</span></a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chart"> Sugar Chart Data </Link>
                            {/* <a class="nav-link" href="#/">Sugar Chart Data</a> */}
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/month"> Sugar Month Wise Data </Link>
                        </li>
                        </ul>
                       
                    </div>
                </nav>
        </div>
    )
}
