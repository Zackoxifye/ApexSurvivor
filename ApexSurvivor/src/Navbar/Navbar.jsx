import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">Back to Home</Link>
      <Link to="/AllGames">All Games</Link>
      <Link to="/Videos">Videos</Link>
      <Link to="/Images">Images</Link>
      <Link to="/Discussions">Discussions</Link>
      <Link to="/Sign In">Sign In</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Account">Account</Link>
    </div>
  );
}
