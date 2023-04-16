import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logoText from "../assets/logoText.svg";
import groupSquares from "../assets/groupSquares.svg";
import iconChatApp from "../assets/iconChatApp.svg";
import iconProfile from "../assets/iconProfile.svg";

import ProfileCard from "../components/ProfileCard";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClickChat = () => {
    navigate("/chatApp");
  };
  const handleClickProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="globalHomeContainer">
      <div className="headerContainer">
        <div className="headerHome">
          <div className="headerLeft">
            <img src={groupSquares} />
          </div>
          <div className="headerCenter">
            <img src={logoText} />
          </div>
          <div className="headerRight">
            <img onClick={handleClickChat} id="left" src={iconChatApp} />
            <img onClick={handleClickProfile} id="right" src={iconProfile} />
          </div>
        </div>
      </div>
      <div>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}