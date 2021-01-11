import React, { useState, useEffect } from 'react'
import './Stats.css';
import StatsRow from "./StatsRow";
import axios from "axios";

const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const KEY_URL = `&token=${'bvtnv3748v6pijneli00'}`;


function Stats() {

    const [stocksData, setStocksData] = useState([])
    
    const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}${stock}${KEY_URL}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
    };
    
     useEffect(() => {
        let tempStocksData = [];
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

        //getMyStocks();
        let promises = [];
        stocksList.map((stock) => {
            promises.push(
            getStocksData(stock)
            .then((res) => {
                //console.log(res)
                tempStocksData.push({
                name: stock,
                ...res.data
                });
            })
            )
        });

        Promise.all(promises).then(()=>{
            setStocksData(tempStocksData);
            console.log(tempStocksData);
        })
    }, []);

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {/*Current Stock  */}
                        {/* {myStocks.map((stock) => (
                            <StatsRow
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                volume={stock.data.shares}
                                price={stock.info.c}
                            />
                        ))} */}
                    </div>
                </div>
                <div className="stats__header">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {/* Available Stocks */}
                        {stocksData.map((stock) => (
                            <StatsRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
