import React, {Fragment} from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from "react-router-dom";
import HatsComponent from "./pages/hats/hats-component/hats-component";
import ShopComponent from "./pages/shop-component/shop-component";
import HeaderComponent from "./components/header-component/header-component";


function App() {
    return (
        <Fragment>
            <HeaderComponent/>
            <Routes>
                <Route element={<HomePage/>} path='/'/>
                <Route element={<ShopComponent/>} path='/shop'/>
            </Routes>
        </Fragment>
    );
}

export default App;


export const element = React.createElement(
    'div',
    {id: 'login-btn'},
    'Login'
)
