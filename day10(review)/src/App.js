import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import StockWatch from './pages/StockWatch';
import React from 'react';
import AboutUs from './Components/AboutUs';
import Teams from './Components/Teams';
import Stocks from './Components/Stocks';
import Faq from './Components/Faq';
import AccountInfo from './pages/AccountInfo';
import MutualFunds from './Components/MutualFunds';
import Ordermanage from './pages/Ordermanage';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
     
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/watch" element={<StockWatch/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/teams" element={<Teams/>} />
          <Route path="/mutualfunds" element={<MutualFunds/>} />
          <Route path="/stocks" element={<Stocks/>} />
          <Route path="/Faq" element={<Faq/>} />
          <Route path="/AccountInfo" element={<AccountInfo/>} />
          <Route path="/Ordermanage" element={<Ordermanage/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;