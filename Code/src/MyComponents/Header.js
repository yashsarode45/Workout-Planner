import React from 'react'
import PropTypes from 'prop-types'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useAlert } from 'react-alert'

//For Header
export default function Header(props) {
  /*const navigate = useNavigate();
 
   const navigateToLogin = () => {
     // 👇️ navigate to /contacts
     navigate('/logout');
   };*/
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/*<Link className="btn btn-outline-primary" to="/logout">Logout</Link>*/}
        <a className="btn btn-outline-primary" onClick={() => { window.location.href = "/logout" }}>Logout</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


          </ul>
          {props.searchBar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : ""}
        </div>
      </div>
    </nav>
  )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}