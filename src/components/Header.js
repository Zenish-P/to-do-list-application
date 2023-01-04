import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
let newStyles={
  backgroundColor: "#20262b",
  color:"white",
}

  return (
    <nav className="navbar navbar-expand-lg" style={newStyles}>
      <div className="container-fluid" >
        <a className="navbar-brand" style={newStyles} href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={newStyles} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <a className="nav-link active" style={newStyles} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={newStyles} href="#">About</a>
            </li>
          </ul>
          {
            props.searchBar? <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>:""
          }
        </div>
      </div>
    </nav>

  )
}

Header.defaultProps = {
  title: "Your Title here",
  searchBar: true
}

Header.propsTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
