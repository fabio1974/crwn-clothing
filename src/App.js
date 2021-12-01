import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from "react-router-dom";
import HatsComponent from "./pages/hats/hats-component/hats-component";
import ShopComponent from "./pages/shop-component/shop-component";


function App() {
  return (

        <Routes>
            <Route element={<HomePage />} path='/'/>
            <Route element={<ShopComponent />} path='/shop'/>
        </Routes>

  );
}

export default App;


export const element = React.createElement(
    'div',
    {id: 'login-btn'},
    'Login'
)
