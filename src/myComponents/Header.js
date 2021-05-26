import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <ul className="nav justify-content-center bg-dark">
            {/* This is how props passed and used */}
            <Link className="navbar-brand text-white" to="#">{props.title}</Link>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            {props.check ? 
                <li className="nav-item">
                    <Link className="nav-link active" to="#">{props.check}</Link>
                </li>
            : props.check }
        </ul>
    )
}

Header.defaultProps = {
    title: "Default Title",
    check: "true"
}

Header.propTypes = {
    title: PropTypes.string
}
