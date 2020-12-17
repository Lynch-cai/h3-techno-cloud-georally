import React from 'react'
import { ReactComponent as PricingFree } from '../svg/pricing-free.svg';
import { ReactComponent as PricingPro } from '../svg/pricing-pro.svg';
import { ReactComponent as PricingInfo } from '../svg/pricing-info.svg';
import { ReactComponent as PricingTableValid } from '../svg/pricing-table-valid.svg';

const PricingTable = ()=> {
  return (
    <div className="app-pricing-table-container">
      <div className="row mb-5">
        <div className="col-sm-4 d-flex align-items-center"><b>Which plan is right for you</b></div>
        <div className="col-sm-4 d-flex flex-column justify-content-start align-items-center">
          <PricingFree />
          <b className="mb-3 mt-3">Free</b>
          <button className="app-button-secondary">Start for free</button>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-start align-items-center">
          <PricingPro />
          <b className="mb-3 mt-3">Professional</b>
          <button className="app-button-primary">Get a demo</button>
        </div>
      </div>

      <div className="row app-pricing-row">
        <div className="col-sm-4 d-flex align-items-center"><b>Simultaneously connected users</b>
          <div className="app-pricing-info-container">
            <PricingInfo className="app-pricing-info-icon"/>
            <div className="app-pricing-info">Number of user which can be connected at the same time</div>
          </div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-start align-items-center">
          <div className="mb-3 mt-3 app-pricing-table-desc">1 Users</div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-start align-items-center">
          <div className="mb-3 mt-3 app-pricing-table-desc">4 Users</div>
        </div>
      </div>

      <div className="row app-pricing-row">
        <div className="col-sm-4 d-flex align-items-center"><b>Limit of requests per day</b>
          <div className="app-pricing-info-container">
            <PricingInfo className="app-pricing-info-icon"/>
            <div className="app-pricing-info">Pro can up to unlimited requests</div>
          </div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-start align-items-center">
          <div className="mb-3 mt-3 app-pricing-table-desc">500 Requests</div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-start align-items-center">
          <div className="mb-3 mt-3 app-pricing-table-desc">Base includes 2,500</div>
        </div>
      </div>

      <div className="row app-pricing-row">
        <div className="col-sm-4 d-flex align-items-center"><b>Leaderboard</b>
          <div className="app-pricing-info-container">
            <PricingInfo className="app-pricing-info-icon"/>
            <div className="app-pricing-info">Get real time leaderboard</div>
          </div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-center align-items-center">
          <div className="app-pricing-table-desc"><PricingTableValid /></div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-start align-items-center">
          <div className="mb-3 mt-3 app-pricing-table-desc"><PricingTableValid /></div>
        </div>
      </div>

      <div className="row app-pricing-row">
        <div className="col-sm-4 d-flex align-items-center"><b>Custom statistics</b>
          <div className="app-pricing-info-container">
            <PricingInfo className="app-pricing-info-icon"/>
            <div className="app-pricing-info">GeoRally help you to increase your performance with stats</div>
          </div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-center align-items-center">
          <div className="app-pricing-table-line"></div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-start align-items-center">
          <div className="mb-3 mt-3 app-pricing-table-desc"><PricingTableValid /></div>
        </div>
      </div>

      <div className="row app-pricing-row">
        <div className="col-sm-4 d-flex align-items-center"><b>Dedicated support</b>
          <div className="app-pricing-info-container">
            <PricingInfo className="app-pricing-info-icon"/>
            <div className="app-pricing-info">Benefit from 24/7 assistance</div>
          </div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-center align-items-center">
          <div className="app-pricing-table-line"></div>
        </div>
        <div className="col-sm-4 d-flex flex-column justify-content-start align-items-center">
          <div className="mb-3 mt-3 app-pricing-table-desc"><PricingTableValid /></div>
        </div>
      </div>

    </div>
  )
}

export default PricingTable

