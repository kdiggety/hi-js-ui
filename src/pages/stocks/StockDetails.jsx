import {useState} from "react";

const StockDetails = function () {
    const [stockDetails, setStockDetails] = useState([
        {symbol: "AAPL", description: "Apple Inc", pricePerShare: "$220", details: {"fiftyTwoWeekHigh": "$225.75"}}
    ])

    return (
        <div>
            <h2>{stockDetails[0].description} ({stockDetails[0].symbol})</h2>
            <p>{stockDetails[0].pricePerShare}</p>
            <p>52 Week High: {stockDetails[0].fiftyTwoWeekHigh}</p>
        </div>
    )
}

export default StockDetails