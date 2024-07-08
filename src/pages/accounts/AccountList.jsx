import {useState} from "react";
import {Link} from "react-router-dom";

const AccountList = function () {
    const [accounts, setAccounts] = useState([
        {accountNumber: crypto.randomUUID(), type: {code: 0, description: "Money Market"}, balance: "$15,345.12"},
        {accountNumber: crypto.randomUUID(), type: {code: 1, description: "Stocks Trading Account"}, balance: "$111,553.66"},
        {accountNumber: crypto.randomUUID(), type: {code: 2, description: "Options Trading Account"}, balance: "$67,231.43"}
    ])

    return (
        <>
            {
                accounts.length === 0 ?
                    ("No accounts"):
                    (
                        <table>
                            <thead>
                            <tr>
                                <th>Account Number</th>
                                <th>Type</th>
                                <th>Balance</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                accounts.map(account =>
                                    (
                                        <tr key={account.accountNumber}>
                                            <td>
                                                <Link to={`${account.accountNumber}/holdings`}>
                                                    {account.accountNumber}
                                                </Link>
                                            </td>
                                            <td>{account.type.description}</td>
                                            <td>{account.balance}</td>
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

export default AccountList