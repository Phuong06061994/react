import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink
} from "react-router-dom";
//import './Header.css';

function Header() {
  return (
   
         <header className="tech-header header">
        <div className="container-fluid">
          <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="tech-index.html"><img src="images/version/tech-logo.png" alt="" /></a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink activeClassName="selectedSub" className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="selectedSub" className="nav-link" to="/a">News</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="selectedSub" className="nav-link" to="/gadgets">Gadgets</NavLink>
                </li>                   
                <li className="nav-item">
                  <NavLink activeClassName="selectedSub" className="nav-link" to="/c">Videos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="selectedSub" className="nav-link" to="/d">Reviews</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="selectedSub"  className="nav-link" to="/contact" >Contact us</NavLink>
                </li>
              </ul>
              <ul className="navbar-nav mr-2">
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-rss" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-android" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-apple" /></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>{/* end container-fluid */}
      </header>
    
   
  );
}

export default Header;
