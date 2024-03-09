import React from "react";

export default function Homepage() {
  return (
    <div>
      <h1 className="homepageTitle">Homepage</h1>
      <p className="homepageSubTitle">Slogan</p>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Apex Survivor..."
          // value={searchQuery}
          // onChange={handleInputChange}
        />
      </div>
      <h2 className="featuredItems">Featured Items</h2>
    </div>
  );
}
