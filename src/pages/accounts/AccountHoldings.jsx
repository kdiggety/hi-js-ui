import {useState} from "react";
import {Link, useLocation} from "react-router-dom";

const AccountHoldings = function () {
    const location = useLocation()
    const { accountNumber } = location.state

    const [stockHoldings, setStockHoldings] = useState([
        {accountNumber: accountNumber, quantity: 100, stock: {symbol: "AAPL", description: "Apple Inc", pricePerShare: "$220"}},
        {accountNumber: accountNumber, quantity: 244, stock: {symbol: "MMM", description: "3M Manufacturing", pricePerShare: "$92"}},
        {accountNumber: accountNumber, quantity: 5, stock: {symbol: "BBY", description: "Best Buy", pricePerShare: "$90"}}
    ])

    return (
        <>
            {
                stockHoldings.length === 0 ?
                    ("No stock holdings"):
                    (
                        <>
                            <div>
                                <p>Account # {accountNumber}</p>
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Ticker Symbol</th>
                                    <th>Company</th>
                                    <th>Quantity</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    stockHoldings.map(stockHolding =>
                                        (
                                            <tr key={stockHolding.stock.symbol}>
                                                <td>
                                                    <Link to={`/stocks/${stockHolding.symbol}`} state={stockHolding.stock}>
                                                        {stockHolding.stock.symbol}
                                                    </Link>
                                                </td>
                                                <td>{stockHolding.stock.description}</td>
                                                <td>{stockHolding.quantity}</td>
                                            </tr>
                                        )
                                    )
                                }
                                </tbody>
                            </table>
                        </>
                    )
            }
        </>
    )
}

export default AccountHoldings