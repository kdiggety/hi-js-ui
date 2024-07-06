import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ClientProfile from "./pages/clients/ClientProfile.jsx";
import AccountList from "./pages/accounts/AccountList.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import StockList from "./pages/stocks/StockList.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Landing from "./pages/Landing.jsx";

function App() {
  return (
    <Landing>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/profile' element={<ClientProfile/>}/>
                <Route path='/accounts' element={<AccountList/>}/>
                <Route path='/stocks' element={<StockList/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>
            </Routes>
        </BrowserRouter>
    </Landing>
  )
}

export default App
