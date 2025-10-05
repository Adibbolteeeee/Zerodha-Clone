import React, { useState, useEffect } from "react";
import axios from "axios";
import { handleError, handleSuccess } from "./util";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get("https://zerodha-clone-backend-cyan.vercel.app/allpositions", {
          withCredentials: true,
          validateStatus: () => true,
        });
        let { data, status } = response;
        if (status === 200) {
          setAllPositions(data.allPositions);
          handleSuccess(data.message);
        } else if (status === 401) {
          handleError(data.message || "Unauthorized");
          setTimeout(() => {
            window.location.href = "http://localhost:5173/login";
          }, 5000);
        } else if (status === 403) {
          handleError(data.message || "Forbidden access");
        }
      } catch (err) {
        handleError(err);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
