import React from 'react'
import { ReactComponent as LoginCar } from '../svg/car_2.svg';
import { Link } from 'react-router-dom'


const Login = ()=> {
  return (
    <div className="container">

      <div className="login-page-left">
        <LoginCar />
      </div>

      <div className="login-page-right">
        <h2>Sign up</h2>
        <br></br>
        <p className="login-input-text">Email</p>
        <input></input>
        <p className="login-input-text">Password</p>
        <input></input>
        <p className="login-input-text">Confirm Password</p>
        <input></input>
        <div className="connection">
          <button className="app-button-primary">Sign in</button>
          
        </div>
      </div>
      
    </div>
      
    
  )
}

export default Login
