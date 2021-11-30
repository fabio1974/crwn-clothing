import React from 'react';

import './_menu-item-component.scss'
import {withRouter} from "../withRouter";

// @ts-ignore
function MenuItemComponent({title, image, size, location, navigate}) {
    return (
        <div onClick={()=> navigate(title)} className={`${size} menu-item`}>
            <div  className='background-image' style={{backgroundImage: `url(${image})`}}>
                <div className='content'>

                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MenuItemComponent)
