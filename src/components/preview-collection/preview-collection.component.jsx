import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./preview-collection.styles.scss";

/**
 * Functional Component (arrow function component)
 */
const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        /**
         * 1. Filter item and index (idx) to only show 4 results as a chain with map
         * 2. Destructure or Spread other item props using ...otherItemProps
         */
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
