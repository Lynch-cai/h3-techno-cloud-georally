import React from 'react';
import { ReactComponent as PricingFree } from '../svg/pricing-free.svg';
import { ReactComponent as PricingPro } from '../svg/pricing-pro.svg';
import { ReactComponent as PricingCardValid } from '../svg/pricing-card-valid.svg';
import { ReactComponent as PricingInfo } from '../svg/pricing-info.svg';

const PricingCard = ()=>{
  return (
    <div className="app-pricing-cards row">
      {/* Card FREE */}
      <div className="app-pricing-card col-xs-4">
        <div className="app-pricing-card-top">
          <div className="app-pricing-card-header">
            <div className="app-pricing-card-title d-flex justify-content-start align-items-center">
              <span>Free</span>
              <PricingFree />
            </div>
            <p className="app-pricing-card-price">0€/month</p>
          </div>

          <div className="app-pricing-card-body">
            <h5>Includes</h5>
            <ul>
              <li><PricingCardValid />1 User simultaneously </li>
              <li><PricingCardValid />500 Requests per day</li>
              <li><PricingCardValid />Leaderboard</li>
            </ul>
          </div>
        </div>
        <div className="app-pricing-card-bottom">
          <div className="app-pricing-card-footer-container">
            <hr></hr>
            <div className="app-pricing-card-footer">
              <button className="app-button-secondary">Start for free</button>
              <span>‎</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Pro */}
      <div className="app-pricing-card col-xs-4">
        <div className="app-pricing-card-top">
          <div className="app-pricing-card-header">
            <div className="app-pricing-card-title d-flex justify-content-start align-items-center">
              <span>Professional</span>
              <PricingPro />
            </div>  
            <p className="app-pricing-card-price">Start at 90€/month</p>
          </div>

          <div className="app-pricing-card-body">
            <h5>Includes</h5>
            <ul>
              <li><PricingCardValid />4 Users simultaneously</li>
              <li><PricingCardValid />2,500 Requests per day
              <div className="app-pricing-info-container">
                <PricingInfo className="app-pricing-info-icon"/>
                <div className="app-pricing-info">Additional 10€ per 1,000 requests</div>
              </div>
              </li>
              <li><PricingCardValid />Leaderboard</li>
              <li><PricingCardValid />Custom statistics</li>
              <li><PricingCardValid />Dedicated support</li>
            </ul>
          </div>
        </div>

        <div className="app-pricing-card-bottom">
          <div className="app-pricing-card-footer-container">
            <hr></hr>
            <div className="app-pricing-card-footer">
              <button className="app-button-primary">Get a demo</button>
              <span>Try for free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard;