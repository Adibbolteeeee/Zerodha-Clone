import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center my-5">
        <h3 className="fs-2 mt-5 mb-3">Charges</h3>
        <p className="fs-5 text-muted mb-5">List of all charges and taxes</p>
      </div>

      <div className="row text-center p-5">
        <div className="col-lg-4 col-sm-12 p-5">
          <img
            src="/media/images/pricingEquity.svg"
            alt="charges image"
            className="pricing-image"
          />
          <h3 className="fs-2 mt-5 mb-3">Free equity delivery</h3>
          <p className="text-muted mb-5 pricing-p">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 py-5">
          <img
            src="/media/images/intradayTrades.svg"
            alt="charges image"
            className="pricing-image"
          />
          <h3 className="fs-2 mt-5 mb-3">Intraday and F&O trades</h3>
          <p className="text-muted mb-5 pricing-p">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on
            intraday trades across <br />
            equity, currency, and commodity trades. Flat <br /> ₹20 on all
            option trades.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 p-5 ">
          <img
            src="/media/images/pricingMF.svg"
            alt="charges image"
            className="pricing-image"
          />
          <h3 className="fs-2 mt-5 mb-3">Free direct MF</h3>
          <p className="text-muted mb-5 pricing-p">
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
