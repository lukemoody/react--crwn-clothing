import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

// {title} is the same as props.title
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// export default MenuItem;
export default withRouter(MenuItem);
// withRouter gives access to history to child components,
// usually located in homepage.component as ReactRouter only passes
// this information down one child level
