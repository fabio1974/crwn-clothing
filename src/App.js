import React, {Fragment} from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from "react-router-dom";
import HatsComponent from "./pages/hats/hats-component/hats-component";
import ShopComponent from "./pages/shop-component/shop-component";
import HeaderComponent from "./components/header-component/header-component";
import SigninSignupComponent from "./pages/sigin-signup-component/signin-signup-component";
import {auth} from "./firebase/firebase.util";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            currentUser:null
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
            this.setState({currentUser:user});
            console.log("user",user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    unsubscribeFromAuth = null

    render() {
        return (
            <Fragment>
                <HeaderComponent currentUser={this.state.currentUser} />
                <Routes>
                    <Route element={<HomePage/>} path='/'/>
                    <Route element={<ShopComponent/>} path='/shop'/>
                    <Route element={<SigninSignupComponent/>} path='/signIn'/>
                </Routes>
            </Fragment>
        );
    }
}

export default App;


export const element = React.createElement(
    'div',
    {id: 'login-btn'},
    'Login'
)
