import React from "react";
import OpenAccount from "../OpenAccount";

function Brokerage() {
  return (
    <div className="container">
      <hr className="mb-5"/>
      <div className="row mb-5">
        <div className="col-lg-8 col-sm-12 mb-5">
            <h1 className="text-center fs-4 mb-5 brokerage-title">Brokerage Calculator</h1>
            <ul className="text-muted">
                <li className="brokerage-li">Call & Trade and RMS auto squareoff: Additional charges of &#8377;50 + GST per order.</li>
                <li className="brokerage-li">Digital contract notes will be sent via e-mail.</li>
                <li className="brokerage-li">Physical copy of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges apply.</li>
                <li className="brokerage-li">For NRI account (non-PIS), 0.5% or &#8377;100 per executed order for equity (whichever is lower).</li>
                <li className="brokerage-li">For NRI account (PIS), 0.5% or &#8377;200 per executed order for equity (whichever is lower).</li>
                <li className="brokerage-li">If the account is in debit balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order.</li>
            </ul>

        </div>
        <div className="col-lg-4 col-sm-12 mb-5">
            <h1 className="text-center fs-4 mb-5 brokerage-title">List of charges</h1>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
