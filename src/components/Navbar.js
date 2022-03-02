import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  

  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/text-utils">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/text-utils">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.about}</Link>
      </li>
    </ul>
  </div>
  <div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
  <label className={`custom-control-label ${(props.mode==='dark')?'text-light':'text-dark'}`}  onClick={props.cMode} htmlFor="customSwitch1">switch to {(props.mode==='dark')?'light':'dark'} mode</label>
</div>
</nav>
    </>
  )
}


Navbar.prototypes={
    title:PropTypes.string.isRequire,
    about:PropTypes.string.isRequire
}

Navbar.defaultProps={
    title:"set title",
    about:"set About"
}