import './App.css'
import {BrowserRouter} from "react-router-dom";
import Landing from "./pages/Landing.jsx";

function App() {
  return (
      <BrowserRouter>
          <Landing/>
      </BrowserRouter>
  )
}

export default App