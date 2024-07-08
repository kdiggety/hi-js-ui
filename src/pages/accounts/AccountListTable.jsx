import {useContext} from "react";
import {AccountContext} from "../../context/AccountProvider.jsx";

const AccountListTable = function () {
    const accounts= useContext(AccountContext)

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
                                        <td>{account.accountNumber}</td>
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

export default AccountListTable

