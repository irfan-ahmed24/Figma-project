// import PriceCard from "./Card/PriceCard";

import { useState } from "react";
import Monthly from "../Card/PriceCard/Monthly";
import Yearly from "../Card/PriceCard/Yearly";
import LifeTime from "../Card/PriceCard/LifeTime";
// import Yearly from "../Card/PriceCard/Yearly";

function Pricing() {
  const [isMonthly, setIsMonthly] =  useState(true);
  const [isYearly, setIsYearly] =  useState(false);
  const [isLifetime, setIsLifetime] =  useState(false);
  const handlepricingToggle = (planType: string) => {
    if(planType === "Monthly"){
      setIsMonthly(true);
      setIsYearly(false);
      setIsLifetime(false);
    } else if(planType === "Yearly"){
      setIsMonthly(false);
      setIsYearly(true);
      setIsLifetime(false);
    } else {
      setIsMonthly(false);
      setIsYearly(false);
      setIsLifetime(true);
    }
  }
  return (
    <div className="Custom-bg py-5">
      <div className="container my-5">
        <div className="d-block d-lg-flex justify-content-between gap-5 mb-5">
          <div className="">
            <h2 className="fw-bold mb-3 h2-tag text-start">
              Simple & affordable 
              <span className="text-primary"> pricing Plans</span>
            </h2>
            <p className="text-color p2-tag text-start me-lg-5">
              Quickly customize and install an AI-powered chat widget on your website. Engage visitors, answer questions instantly, and boost conversions — all without writing a single line of code.
            </p>
          </div>
          <div className="col-12 col-lg-4 rounded-5 border border-primary fit-width text-start text-lg-end align-self-start align-self-lg-end">
            <button onClick={() => handlepricingToggle("Monthly")} className={`border-0 bg-transparent px-3 py-2 fs-6 fs-lg-5 ${isMonthly ? "active-button" : ""}`}>Monthly </button>
            <button onClick={() => handlepricingToggle("Yearly")} className={`border-0 bg-transparent px-3 py-2 fs-6 fs-lg-5 ${isYearly ? "active-button" : ""}`}>Yearly</button>
            <button onClick={() => handlepricingToggle("Lifetime")} className={`border-0 bg-transparent px-3 py-2 fs-6 fs-lg-5 ${isLifetime ? "active-button" : ""}`}>Lifetime</button>
          </div>
        </div>
        <div className="">
          <Monthly onMonthly={isMonthly}/>
          <Yearly onYearly={isYearly}/>
          <LifeTime onLifetime={isLifetime}/>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
