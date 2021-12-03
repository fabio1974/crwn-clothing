import React from 'react';

import './_collection-item-component.scss'

export default function CollectionItemComponent({name,price,imageUrl}) {
    console.log(name,price,imageUrl)
    return (
        <div className="collection-item-component">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}>

            </div>
            <div className={'collection-footer'}>
                <span className={'name'}>{name}</span>
                <span className={'price'}>{price}</span>
            </div>
        </div>
    );
}

