import React from 'react'
import { ReactComponent as Car } from '../svg/home-car.svg';
import { Link } from 'react-router-dom'


const Login = ()=> {
  return (
    <div className="app-login-register-container row d-flex justify-content-between align-items-center">

      <div className="app-login-page-left col-md-5">
        <Car className="d-flex align-items-center" />
      </div>

      <div className="col-md-6">
        <div className="app-login-page-right">
          <h2>Sign in</h2>
          <p className="grey-text">Not signed up ? <Link to="/register" className="">Register</Link></p>
          <p className="app-login-input-text">Email</p>
          <input></input>
          <p className="app-login-input-text">Password</p>
          <input></input>
          <div className="app-login-connection">
            <button className="app-button-primary">Sign in</button>
            <p><Link to="/forgot" className="">Forgot password ?</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
