import React, { useState } from "react";
import "./nav.css";
import { searchList } from "./Api.js";

function Nav() {
  const [keyword, setKeyword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target.search.value);
    searchList({ keyword });
  };
  return (
    <div className="navBar">
      <div className="logo">MoviePark</div>
      <div className="menuModal">menu</div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input type="text" name="search"></input>
        </form>
      </div>
    </div>
  );
}

export default Nav;
