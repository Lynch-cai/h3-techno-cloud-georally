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
          <h2 className="mb-4">Reset password</h2>
          <p className="app-login-input-text">Email</p>
          <input></input>
          <div className="app-login-connection">
            <button className="app-button-primary">Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
