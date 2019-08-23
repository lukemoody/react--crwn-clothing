import React from "react";
import "./collection-item.style.scss";

/**
 * 1. we don't need state so make a functional component
 * 2. Get directory items in the same way as before in const. This will be pulled down from SHOP_DATA shop.component/peview-collection
 * NOTE: The way the data has been passed down, there isn't a need to use this.props... like in MaltMap side project!
 */
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
