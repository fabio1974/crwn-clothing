import React from 'react';
import SHOP_DATA from "./shop.data";
import CollectionPreviewComponent from "../../components/collection-preview-component/collection-preview-component";



export default class ShopComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections:SHOP_DATA
        }

    }

    render() {
        let {collections} = this.state;
        return (
            <div className="shop-component">
                {
                    collections.map(({id,...otherCollectionProps}) =>(
                        <CollectionPreviewComponent key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}
