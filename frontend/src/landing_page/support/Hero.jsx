import React from "react";

function Hero() {
  return (
    <div className="container-fluid">
      <div className="row support-hero mb-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-4 col-sm-12 my-5">
          <h1 className="fs-5 mb-5">Support Portal</h1>
          <p className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </p>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
            className="p-4 border mb-3"
            style={{ width: "100%", borderRadius: ".5rem", fontSize: ".85rem" }}
          />
          <div>
            <a href="#" className="support-a fs-6">
              Track account opening
            </a>
            <a href="#" className="support-a fs-6">
              Track segment activation
            </a>
            <a href="#" className="support-a fs-6">
              Intraday
            </a>
            <a href="#" className="support-a fs-6">
              Margins
            </a>
            <a href="#" className="support-a fs-6">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-sm-12 p-5">
          <div className="row text-center">
            <a href="#" className="support-a fs-5 mb-5">
              Track tickets
            </a>
          </div>
          <p className="fs-4">Featured</p>
          <ol>
            <li className="mb-2"><a href="#" className="support-a fs-6">Current Takeovers and Delisting - January 2025</a></li>
            <li className="mb-2"><a href="#" className="support-a fs-6">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
