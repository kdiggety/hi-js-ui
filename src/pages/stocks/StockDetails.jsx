import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const StockDetails = function () {
    const location = useLocation()
    const { symbol } = location.state

    const [stockDetails, setStockDetails] = useState({})

    useEffect(() => {
        setStockDetails({symbol: symbol, description: "Stock Description", pricePerShare: "$100", fiftyTwoWeekHigh: "$105"})
    }, []);

    return (
        <div>
            <h2>{stockDetails.description} ({stockDetails.symbol})</h2>
            <p>{stockDetails.pricePerShare}</p>
            <p>52 Week High: {stockDetails.fiftyTwoWeekHigh}</p>
        </div>
    )
}

export default StockDetails