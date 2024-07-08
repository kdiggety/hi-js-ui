import { createContext, useState } from 'react'
import PropTypes from "prop-types";

export const ClientContext = createContext(null);

const ClientProvider = ({children}) => {
    const [client, setClient] = useState({
        firstName: 'Ken',
        lastName: 'Lewis',
        address: {
            street: 'Street',
            city: 'City',
            state: 'State',
            zip: 'Zip'
        }
    })

    return (
        <ClientContext.Provider value={client}>
            {children}
        </ClientContext.Provider>
    )
}

ClientProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ClientProvider