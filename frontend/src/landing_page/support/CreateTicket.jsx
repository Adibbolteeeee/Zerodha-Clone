import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <h1 className="fs-3 mb-5">To create a ticket, select a relevant topic</h1>
      <div className="row mx-5 px-5">
        <div className="col-lg-4 col-sm-12 mb-5">
          <h2 className="fs-5 mb-5">
            <i className="fa-solid fa-plus ticket-i"></i>Account Opening
          </h2>
          <div className="row">
            <a href="#" className="ticket-a">
              Online Account Opening
            </a>
            <a href="#" className="ticket-a">
              Offline Account Opening
            </a>
            <a href="#" className="ticket-a">
              Company, Partnership and HUF Account Opening
            </a>
            <a href="#" className="ticket-a">
              NRI Account Opening
            </a>
            <a href="#" className="ticket-a">
              Charges at Zerodha
            </a>
            <a href="#" className="ticket-a">
              Zerodha IDFC First Bank 3-in-1 Account
            </a>
            <a href="#" className="ticket-a">
              Getting Started
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mb-5">
          <h2 className="fs-5 mb-5">
            <i className="fa-solid fa-user ticket-i"></i>Your Zerodha Account
          </h2>
          <div className="row">
            <a href="#" className="ticket-a">
              Login Credentials
            </a>
            <a href="#" className="ticket-a">
              Account Modification and Segment Addition
            </a>
            <a href="#" className="ticket-a">
              DP ID and bank details
            </a>
            <a href="#" className="ticket-a">
              Your Profile
            </a>
            <a href="#" className="ticket-a">
              Transfer and conversion of shares
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mb-5">
          <h2 className="fs-5 mb-5">
            <i class="fa-solid fa-chart-simple ticket-i"></i>Kite
          </h2>
          <div className="row">
            <a href="#" className="ticket-a">
              Margin/Leverage, Product and Order types
            </a>
            <a href="#" className="ticket-a">
              Kite Web and Mobile
            </a>
            <a href="#" className="ticket-a">
              Trading FAQs
            </a>
            <a href="#" className="ticket-a">
              Corporate Actions
            </a>
            <a href="#" className="ticket-a">
              Sentinel
            </a>
            <a href="#" className="ticket-a">
              Kite API
            </a>
            <a href="#" className="ticket-a">
              Pi and other platforms
            </a>
            <a href="#" className="ticket-a">
              Stockreports+
            </a>
            <a href="#" className="ticket-a">
              GTT
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 mb-5">
          <h2 className="fs-5 mb-5">
            <i className="fa-solid fa-credit-card ticket-i"></i>Funds
          </h2>
          <div className="row">
            <a href="#" className="ticket-a">
              Adding Funds
            </a>
            <a href="#" className="ticket-a">
              Fund Withdrawal
            </a>
            <a href="#" className="ticket-a">
              eMandates
            </a>
            <a href="#" className="ticket-a">
              Adding Bank Accounts
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 mb-5">
          <h2 className="fs-5 mb-5">
            <i className="fa-solid fa-circle-notch ticket-i"></i>Console
          </h2>
          <div className="row">
            <a href="#" className="ticket-a">
              Reports
            </a>
            <a href="#" className="ticket-a">
              Ledger
            </a>
            <a href="#" className="ticket-a">
              Portfolio
            </a>
            <a href="#" className="ticket-a">
              60 Day Challenge
            </a>
            <a href="#" className="ticket-a">
              IPO
            </a>
            <a href="#" className="ticket-a">
              Refferal Program
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 mb-5">
          <h2 className="fs-5 mb-5">
            <i className="fa-regular fa-circle ticket-i"></i>Coin
          </h2>
          <div className="row">
            <a href="#" className="ticket-a">
              Understanding Mutual Funds
            </a>
            <a href="#" className="ticket-a">
              National Pension Scheme (NPS)
            </a>
            <a href="#" className="ticket-a">
              Fixed Deposit (FD)
            </a>
            <a href="#" className="ticket-a">
              Features on Coin
            </a>
            <a href="#" className="ticket-a">
              Payments and Orders
            </a>
            <a href="#" className="ticket-a">
              General
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
