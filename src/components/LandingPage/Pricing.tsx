// import PriceCard from "./Card/PriceCard";

import PriceCard from "../Card/PriceCard";

function Pricing() {
  return (
    <div className="bg-color py-5">
      <div className="container my-5">
        <div className="row mb-5">
          <div className="mx-auto col-12 col-lg-8">
            <h2 className="fw-bold mb-3">
              Simple & affordable 
              <span className="text-primary">pricing Plans</span>
            </h2>
            <p className="text-muted">
              Quickly customize and install an AI-powered chat widget on your website. Engage visitors, answer questions instantly, and boost conversions — all without writing a single line of code.
            </p>
          </div>
          <div className="mx-auto col-12 col-lg-4 text-start text-lg-end align-self-start align-self-lg-end fs-6 fs-lg-5">
            <button className="border-black border-end-0 py-2 px-4 rounded-end rounded-5 focus-ring-0">Monthly </button>
            <button className="border-black border-start-0 border-end-0 py-2 px-4 focus-ring-0">Yearly</button>
            <button className="border-black border-start-0 py-2 px-4 rounded-start rounded-5 focus-ring-0">Lifetime</button>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center">
            <PriceCard />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
