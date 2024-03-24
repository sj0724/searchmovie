import React, { useState } from "react";
import "./nav.css";
import { searchList } from "./Api.js";

function Nav({ setMovieChart }) {
  const [keyword, setKeyword] = useState();

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    let result;
    e.preventDefault();
    try {
      result = await searchList(keyword);
    } catch (error) {
      console.log(error);
    }
    const { results } = result;
    setMovieChart(results);
  };
  return (
    <div className="navBar">
      <div className="logo">MoviePark</div>
      <div className="menuModal">
        <span>UP COMING</span>
        <span>POPULAR</span>
        <span>TOP RATED</span>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input type="text" name="search" onChange={handleInput}></input>
        </form>
      </div>
    </div>
  );
}

export default Nav;
