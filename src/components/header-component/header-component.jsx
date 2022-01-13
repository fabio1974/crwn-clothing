import React from 'react';

import './_header-component.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "./../../assets/crown.svg";
import {auth} from "../../firebase/firebase.util";



export default function HeaderComponent({currentUser}) {
    //console.log("currentUser",currentUser.displayName)
    return (
        <div className="header-component">
            <Link className={'logo-container'} to={"/"}>
                <Logo className={'logo'}/>
            </Link>
            <div className={'options'}>
                <Link className={'option'} to={'/shop'}>SHOP</Link>
                <Link className={'option'} to={'/shop'}>CONTACT</Link>
                {
                    currentUser?
                        <div className={'option'} onClick={()=>auth.signOut()}>SIG OUT {currentUser.displayName}</div>
                   :
                        <Link className={'option'} to={'/signIn'}>SIGN IN</Link>
                }

            </div>
        </div>
    );
}

