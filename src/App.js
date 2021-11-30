import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from "react-router-dom";
import HatsComponent from "./pages/hats/hats-component/hats-component";


function App() {
  return (

        <Routes>
            <Route element={<HomePage />} path='/'/>
            <Route element={<HatsComponent />} path='/hats'/>
        </Routes>

  );
}

export default App;


export const element = React.createElement(
    'div',
    {id: 'login-btn'},
    'Login'
)
