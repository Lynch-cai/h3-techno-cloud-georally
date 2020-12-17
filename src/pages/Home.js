import React from 'react'
import { Link } from 'react-router-dom'
import individual from '../imgs/home-individual.png'
import example from '../imgs/home-example.png'
import { ReactComponent as Car } from "../svg/home-car.svg"
import { ReactComponent as Team } from "../svg/home-team.svg"
import { ReactComponent as Shield } from "../svg/home-shield.svg"
import { ReactComponent as Hyundai } from "../svg/home-partner-hyundai.svg"
import { ReactComponent as Volkswagen } from "../svg/home-partner-volkswagen.svg"
import { ReactComponent as Citroen } from "../svg/home-partner-citroen.svg"
import { ReactComponent as Wrc } from "../svg/home-partner-wrc.svg"
import { ReactComponent as Ford } from "../svg/home-partner-ford.svg"
import { ReactComponent as Mini } from "../svg/home-partner-mini.svg"
import { ReactComponent as ArrowDown } from "../svg/home-arrow-down.svg"

const Home = ()=> {
  return (
    <div className="app-home-container container">
      <div className="app-home mt-5">
        <div className="row mb-5">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h1 className="mb-4">The best data for rally</h1>
            <p className="mb-3">Boost your performance with accurate data about rally.</p>
            <p className="mb-3">With <b>Geo</b>Rally, get all useful data about races to improve your performances.</p>
            <p className="mb-5">Join a community of <b>250+</b> pilots and teams that use <b>Geo</b>Rally APIs</p>
            <Link to="/pricing" className="app-button-primary">Start with GeoRally</Link>
            
          </div>
          <div className="col-md-6">
            <Car className="app-home-illustration-car" />
          </div>
        </div>
        <div className="app-home-partners d-flex justify-content-center align-items-center">
          <Hyundai className="ml-3 mr-3"/>
          <Volkswagen className="ml-3 mr-3" />
          <Citroen className="ml-3 mr-3" />
          <Wrc className="ml-3 mr-3" />
          <Ford className="ml-3 mr-3" />
          <Mini className="ml-3 mr-3" />
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5 app-home-arrow-down">
          <ArrowDown className="mb-5" />
        </div>

        <div className="app-home-section app-home-first-section row">
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-start">
            <h3>GeoRally for individuals</h3>
            <p>Get a <b>professional</b> tools for affordable prices
            <br/>High performance and security do not need a lot of fund anymore.
            <br/><br/>Access now to infinite data and statistics for your future trials.</p>
            <a href="/demo.html" className="app-button-primary mt-2">Get a demo</a>

          </div>
          <div className="col-md-5">
            <img src={individual}/>
            {/* <Individual /> */}
          </div>
        </div>

        
        <div className="app-home-section row">
          <div className="col-md-5">
            <Team />
          </div>
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-start">
            <h3>GeoRally for teams</h3>
            <p>Optimize your trials with <b>accurates</b> data and statistics.
            <br/>Work with your team with the best statistics about future trials and study statistics of past races
            </p>
            <a href="/demo.html" className="app-button-secondary mt-2">Try for free</a>

          </div>
        </div>


        <div className="app-home-section row">
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-start">
            <h3>GeoRally improve security during races</h3>
            <p>Rallys have not always had a good reputation because to designate as dangerous.
            <br/>We can change that !
            <br/>Help us to make Rally more safe for pilots and public.
            <br/><br/>With GeoRally prepare your races and stay <b>safe</b> everytime.
            <br/>Get the best data and don’t take any risks to <b>win</b>.
            </p>
            <a href="/demo.html" className="app-button-primary mt-2">Get a demo</a>

          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <Shield className="app-home-shield" />
          </div>
        </div>

        <hr className="app-home-line"></hr>

        <div className="app-home-example-container d-flex flex-column justify-content-center align-items-center">
          <h3 className="app-home-example-title mb-3">GeoRally Map</h3>
          <span className="app-home-example-desc mb-4">A small example of what GeoRally API can offer you</span>
          <div className="app-home-example-demo">
            <img src={example} />
            <a href="/demo.html" className="app-button-primary">Get a demo</a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
