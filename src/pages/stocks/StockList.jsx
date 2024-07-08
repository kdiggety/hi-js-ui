import {useState} from "react";
import {Link} from "react-router-dom";

const StockList = function () {
    const [stocks, setStocks] = useState([
        {symbol: "AAPL", description: "Apple Inc", pricePerShare: "$220"},
        {symbol: "MMM", description: "3M Manufacturing", pricePerShare: "$92"},
        {symbol: "BBY", description: "Best Buy", pricePerShare: "$90"},
    ])

    return (
        <>
            {
                stocks.length === 0 ?
                    ("No stocks"):
                    (
                        <table>
                            <thead>
                            <tr>
                                <th>Ticker Symbol</th>
                                <th>Company</th>
                                <th>Price/Share</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                stocks.map(stock =>
                                    (
                                        <tr key={stock.symbol}>
                                            <td>
                                                <Link to={`${stock.symbol}`}>
                                                    {stock.symbol}
                                                </Link>
                                            </td>
                                            <td>{stock.description}</td>
                                            <td>{stock.pricePerShare}</td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>
                        </table>
                    )
            }
        </>
    )
}

export default StockList