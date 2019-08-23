import React, { Component } from "react";
import SHOP_DATA from "./shop.data.jsx";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

/**
 * Because we need to store the data for our collections on the shop page, we'll make this a class component.
 * We need access to State, so use Super(props)
 */
class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /**
       * collections is an Object with an array of SHOP_DATA
       */
      collections: SHOP_DATA
    };
  }
  render() {
    /**
     * 1. Destructure collections off first
     * 2. Map over the collections with the collection
     * Note. When mapping using ...otherETC remember to wrap everythign in {}!!
     */
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherPreviewCollection }) => (
          <PreviewCollection key={id} {...otherPreviewCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
