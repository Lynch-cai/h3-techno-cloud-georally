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
        <h3>Sign in</h3>
        <p className="grey-text">Not signed up ? <Link to="/Register" className="">Register</Link></p>
        <p className="login-input-text">Email</p>
        <input></input>
        <p className="login-input-text">Password</p>
        <input></input>
        <div className="connection">
          <button className="app-button-primary">Sign in</button>
          <p><Link to="/Register" className="">Forgot password ?</Link></p>
        </div>
      </div>
      
    </div>
      
    
  )
}

export default Login
