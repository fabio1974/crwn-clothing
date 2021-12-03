import React from 'react';

import './_header-component.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "./../../assets/crown.svg";



export default function HeaderComponent(props) {
    return (
        <div className="header-component">
            <Link className={'logo-container'} to={"/"}>
                <Logo className={'logo'}/>
            </Link>
            <div className={'options'}>
                <Link className={'option'} to={'/shop'}>SHOP</Link>
                <Link className={'option'} to={'/shop'}>CONTACT</Link>
            </div>
        </div>
    );
}

