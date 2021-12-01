import React from 'react';

const CollectionPreviewComponent = ({title, items}) => {
    return (
        <div className={'collection-preview-component'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items.filter((item,index)=>index<4)
                        .map(item=>(
                        <div key={item.name}>{item.name}</div>
                    ))
                }
            </div>

        </div>
    );
}

export default CollectionPreviewComponent;
