import { createContext, useState } from 'react'
import PropTypes from "prop-types";

export const ClientContext = createContext(null);

const ClientProvider = ({children}) => {
    const [client, setClient] = useState({
        id: crypto.randomUUID(),
        firstName: 'Ken',
        lastName: 'Lewis',
        address: {
            street: '123 Main St.',
            city: 'Big City',
            state: 'CA',
            zip: '91234'
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