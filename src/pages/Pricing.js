import React from 'react'
import PricingCard from '../components/PricingCard'
import PricingTable from '../components/PricingTable'


const Pricing = ()=> {
  return (
    <div className="app-pricing-container">
      <h1 className="app-title"><b>Geo</b>rally Pricing</h1>
      <div className="app-pricing">
        <PricingCard />
        <PricingTable />
      </div>
    </div>
  )
}

export default Pricing
