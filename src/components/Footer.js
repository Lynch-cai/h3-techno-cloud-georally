import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as LogoWhite } from '../svg/logo-white.svg';
import { ReactComponent as Linkedin } from '../svg/linkedin.svg';
import { ReactComponent as Github } from '../svg/github.svg';
import { ReactComponent as Twitter } from '../svg/twitter.svg';

const Navbar = ()=>{
  return (
    <footer className="app-footer-container">
      <div className="app-footer container">
        <Link to="/">
          <LogoWhite className="app-footer-logo" />
        </Link>
        <div className="d-flex justify-content-between">
          <div>
            <span>Products</span>
            <ul>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/status">Status</Link></li>
              <li><a href="/demo.html">Get a demo</a></li>
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
              <li><Link to="/docs">Documentation</Link></li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="app-footer-footer">
          <div className="">
            <span>GeoRally ©</span>
            <Link to="/policy">Privacy policy</Link>
            <Link to="/legal">Terms of service</Link>
          </div>
          <div className="app-footer-icons">
            <a target="_blank" href="https://linkedin.com/in/georally-1454871"><Linkedin /></a>
            <a target="_blank" href="https://github.com/Lynch-cai/h3-techno-cloud-georally"><Github /></a>
            <a target="_blank" href="https://twitter.com/GeoRally_api"><Twitter /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Navbar;