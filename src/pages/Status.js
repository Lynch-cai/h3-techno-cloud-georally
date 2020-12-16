import React from 'react'
import { ReactComponent as Uptime } from '../svg/status-uptime.svg';

const Status = ()=> {
  return (
    <div className="app-status-container">
      <h1 className="app-title"><b>Geo</b>rally Status</h1>
      <div className="app-status">
        <div className="app-status-header">
          <div className="app-status-header-dot"></div>
          <div className="app-status-header-text">Online</div>
          <div className="app-status-secondary">Uptime History</div>
        </div>
        <div className="app-status-body">
          <div className="app-status-body-container">
            <div class="app-status-body-header-container">
              <div>Uptime over the past 90 days</div>
            </div>
            <div className="app-status-img">
              <Uptime />
            </div>
            <div className="app-status-body-footer-container">
              <div>90 days ago</div>
              <div><b>99.94%</b> uptime</div>
              <div>Today</div>
            </div>
          </div>
          <div className="app-status-body-container">
            <div class="app-status-body-header-container">
              <div>Latency over the past 90 days</div>
              <div>Currently <b>12ms</b></div>
            </div>
            <div className="app-status-img">
              <Uptime />
            </div>
            <div className="app-status-body-footer-container">
              <div>90 days ago</div>
              <div>Average of <b>14ms</b></div>
              <div>Today</div>
            </div>
          </div>
        </div>
        <div className="app-status-footer">
          <div className="app-status-footer-title-container">
            <h3 className="app-status-footer-title">Past incidents</h3>
            <div className="app-status-secondary">Incident History</div>
          </div>
          <div className="app-status-footer-section">
            <h5>Today</h5>
            <p>No incidents reported today</p>
          </div>
          <hr className="app-status-line"></hr>
          <div className="app-status-footer-section">
            <h5>December 17, 2020</h5>
            <p>No incidents reported this day</p>
          </div>
          <hr className="app-status-line"></hr>
          <div className="app-status-footer-section">
            <h5>December 16, 2020</h5>
            <p>No incidents reported this day</p>
          </div>
          <hr className="app-status-line"></hr>
          <div className="app-status-footer-section">
            <h5>December 15, 2020</h5>
            <p>No incidents reported this day</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Status
