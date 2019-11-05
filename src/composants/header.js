import React from "react";

const Header = props => {
  return (
    <div className="header">
      <img src={props.logo}></img>
    </div>
  );
};

export default Header;
