import React from 'react';
import { NavLink } from 'react-router-dom'
import { ReactComponent as LogoWhite } from '../svg/logo-white.svg';
import { ReactComponent as Linkedin } from '../svg/linkedin.svg';
import { ReactComponent as Github } from '../svg/github.svg';
import { ReactComponent as Twitter } from '../svg/twitter.svg';

const Navbar = ()=>{
  return (
    <footer className="app-footer-container">
      <div className="app-footer container">
        <NavLink to="/">
          <LogoWhite className="app-footer-logo" />
        </NavLink>
        <div className="d-flex justify-content-between">
          <div>
            <span>Products</span>
            <ul>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
              <li><NavLink to="/status">Status</NavLink></li>
              <li><NavLink to="/login">Get a demo</NavLink></li>
            </ul>
          </div>
          <div>
            <span>Company</span>
            <ul>
              <li><a href="https://linkedin.com/in/georally-1454871">Career</a></li>
              <li><a href="https://twitter.com/GeoRally_api">Social media</a></li>
            </ul>
          </div>
          <div>
            <span>Help</span>
            <ul>
              <li><a href="mailto:georally@gmail.com">Contact us</a></li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="app-footer-footer">
          <div className="">
            <span>GeoRally ©</span>
            <NavLink to="/login">Privacy policy</NavLink>
            <NavLink to="/login">Terms of service</NavLink>
          </div>
          <div className="app-footer-icons">
            <a href="https://linkedin.com/in/georally-1454871"><Linkedin /></a>
            <a href="https://github.com/lynchcai"><Github /></a>
            <a href="https://twitter.com/GeoRally_api"><Twitter /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Navbar;