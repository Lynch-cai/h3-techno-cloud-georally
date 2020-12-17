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
              <li><NavLink to="/demo">Get a demo</NavLink></li>
            </ul>
          </div>
          <div>
            <span>Company</span>
            <ul>
              <li><a target="_blank" href="https://linkedin.com/in/georally-1454871">Career</a></li>
              <li><a target="_blank" href="https://twitter.com/GeoRally_api">Social media</a></li>
            </ul>
          </div>
          <div>
            <span>Help</span>
            <ul>
              <li><a target="_blank" href="mailto:georally@gmail.com">Contact us</a></li>
              <li><NavLink to="/docs">Documentation</NavLink></li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="app-footer-footer">
          <div className="">
            <span>GeoRally ©</span>
            <NavLink to="/policy">Privacy policy</NavLink>
            <NavLink to="/legal">Terms of service</NavLink>
          </div>
          <div className="app-footer-icons">
            <a target="_blank" href="https://linkedin.com/in/georally-1454871"><Linkedin /></a>
            <a target="_blank" href="https://github.com/lynchcai"><Github /></a>
            <a target="_blank" href="https://twitter.com/GeoRally_api"><Twitter /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Navbar;