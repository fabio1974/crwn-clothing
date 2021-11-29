import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {MyComponent} from "./components/my-component/my-component";

function App() {
  return (
    <div >
      <HomePage/>
    </div>
  );
}

export default App;


export const element = React.createElement(
    'div',
    {id: 'login-btn'},
    'Login'
)
