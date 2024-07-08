import AccountProvider from "../../context/AccountProvider.jsx";
import AccountListTable from "./AccountListTable.jsx";

const AccountList = function () {
    return (
        <AccountProvider>
            <AccountListTable/>
        </AccountProvider>
    )
}

export default AccountList