import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">
        <img
          src="/ASLogoTransparentResize.png"
          alt="Home"
          className="homeButton"
        />
      </Link>
      <Link to="/AllGames">All Games</Link>
      <Link to="/Videos">Videos</Link>
      <Link to="/Images">Images</Link>
      <Link to="/Discussions">Discussions</Link>
      <Link to="/Sign In">Sign In</Link>
      <Link to="/Account">
        <img
          src="/ApexSurvivorAccountIcon.png"
          alt="Account"
          className="accountButton"
        />
      </Link>
    </div>
  );
}
