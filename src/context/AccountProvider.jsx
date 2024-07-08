import { createContext, useState } from 'react'
import PropTypes from "prop-types";

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    const [accounts, setAccounts] = useState([
        {accountNumber: crypto.randomUUID(), type: {code: 0, description: "Money Market"}, balance: "$15,345.12"},
        {accountNumber: crypto.randomUUID(), type: {code: 1, description: "Stocks Trading Account"}, balance: "$111,553.66"},
        {accountNumber: crypto.randomUUID(), type: {code: 2, description: "Options Trading Account"}, balance: "$67,231.43"}
    ])

    return (
        <AccountContext.Provider value={accounts}>
            {children}
        </AccountContext.Provider>
    )
}

AccountProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AccountProvider