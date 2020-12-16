import React from 'react';
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../svg/logo.svg';

const Navbar = ()=>{
  return (
    <nav className="app-navbar container">
      <NavLink to="/" className="">
        <Logo />
      </NavLink>
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/" className="app-navbar-link">Product</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/pricing" className="app-navbar-link">Pricing</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/docs" className="app-navbar-link">Docs</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/status" className="app-navbar-link">Status</NavLink>
        </li>
      </ul>
      <div className="app-navbar-right">
        <NavLink to="/login" className="app-navbar-link">Log In</NavLink>
        <NavLink to="/login" className="app-button-primary">Get a demo</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;