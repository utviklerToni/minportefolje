import React from "react";
import { Fragment } from "react/cjs/react.production.min";
// import { Routes } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="header_style">
        <div className=" header_flex_smallscreen">
          <div className="center_text header_text_style">
            <h3>Welcome to my portfolio project</h3>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
