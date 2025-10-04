import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import axios from "axios";
import "./index.css";

// Components
import Home from "./components/Home";

// Render
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/*" element={<Home />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
);
