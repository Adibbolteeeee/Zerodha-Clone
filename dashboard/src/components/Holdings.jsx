import { useState, useEffect } from "react";
import axios from "axios";
import { handleError, handleSuccess } from "./util";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get("https://zerodha-clone-backend-cyan.vercel.app/allholdings", {
          withCredentials: true,
          validateStatus: () => true,
        });
        let { data, status } = response;
        if (status === 401) {
          handleError(data.message || "Unauthorized");
          setTimeout(() => {
            window.location.href = "https://zerodha-clone-rouge.vercel.app/login";
          }, 5000);
        } else if (status === 200) {
          handleSuccess(data.message);
          setAllHoldings(data.allHoldings);
        } else if (status === 403) {
          handleError(data.message || "Forbidden access");
        }
        console.log(data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
      }
    }

    fetchData();
  }, []);

  let totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const labels = allHoldings.map((holding) => holding.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((holding) => holding.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment}.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>
      <div style={{ height: "400px", width: "100%" }}>
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;
