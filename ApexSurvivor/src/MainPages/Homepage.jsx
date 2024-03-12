import React from "react";

export default function Homepage() {
  return (
    <div>
      <h1 className="homepageTitle">APEX SURVIVOR</h1>
      <p className="homepageSubTitle">Unleash Your Survival Instincts</p>
      <div className="searchBarContainer">
        <input
          type="text"
          placeholder="Search Apex Survivor..."
          className="searchBar"
          // value={searchQuery}
          // onChange={handleInputChange}
        />
        <button className="searchButton">Search</button>
      </div>
      <h2 className="featuredItems">Featured Items</h2>
      <div className="squareContainer">
        <div className="square square1"></div>
        <div className="square square2"></div>
        <div className="square square3"></div>
      </div>
    </div>
  );
}
