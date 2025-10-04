import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Logout from "./Logout";
import App from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      
      <div className="content">
        <Routes>
          <Route path="/dashboard" element={<Summary />}/>
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />}/>
          <Route path="/funds" element={<Funds />}/>
          <Route path="/app" element={<App />}/>
          <Route path="/logout" element={<Logout />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
