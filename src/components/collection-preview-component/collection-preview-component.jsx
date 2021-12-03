import React from 'react';
import CollectionItemComponent from "../collection-item-component/collection-item-component";
import './_collection-preview-component.scss'

const CollectionPreviewComponent = ({title, items}) => {
    return (
        <div className={'collection-preview-component'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items.filter((item,index)=>index<4)
                        .map(({id,name,...props})=>(
                            <CollectionItemComponent key={id} name={name}  {...props} />
                    ))
                }
            </div>
        </div>
    );
}

export default CollectionPreviewComponent;
