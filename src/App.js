import "./App.css";
import MainDash from "./pages/home/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/Account/Account";
import Product from "./pages/AddProduct/Product";
import Bug from "./pages/Bug/Bug";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppGlass">
          <Topbar />
          <div className="container">
            <Sidebar />
            <MainDash />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<Product />} />
        <Route path="/bug" element={<Bug />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
