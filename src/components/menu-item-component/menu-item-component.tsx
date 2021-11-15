import React from 'react';

import './_menu-item-component.scss'

// @ts-ignore
export default function MenuItemComponent({title, image, size}) {
    return (
        <div style={{backgroundImage:`url(${image})`}}  className={ `${size} menu-item`}>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}
