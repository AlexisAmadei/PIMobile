import React from "react";

import { Link } from "react-router-dom";

import logoText from "../assets/logoText.svg";
import groupSquares from "../assets/groupSquares.svg";
import iconChatApp from "../assets/iconChatApp.svg";
import iconProfile from "../assets/iconProfile.svg";

export default function HomePage() {
  return (
    <div className="globalHomeContainer">
      <div className="homeContainer">
        <div className="headerHome">
          <div className="headerLeft">
            <img src={groupSquares} />
          </div>
          <div className="headerCenter">
            <img src={logoText} />
          </div>
          <div className="headerRight">
            <img src={iconChatApp} />
            <img src={iconProfile} />
          </div>
        </div>
      </div>
      <Link to="/chatApp">Chat App</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}