import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import { Icon } from "@iconify/react";
import flagFrance from "@iconify/icons-twemoji/flag-france";

import "../css/ProfileCard.css";
import profileIcon from "../assets/profileIcon.svg";
import Star from "../assets/star.svg";

export default function ProfileCard(props) {
  const { pseudo, age, job, centerInterest, lang } = props;

  return (
    <div className="globalCardContainer">
      <div className="card">
        <div className="cardHeader">
          <img src={profileIcon} height={56} width={56} alt="profileIcon" />
          <div className="cardHeaderInfo">
            <p className="cardPseudo">Séb Garnier</p>
            <p className="cardAge">25 ans, cadreur video</p>
          </div>

        </div>
        <div className="cardCategory">
          <p className="cardCategoryTitle">Jeux-vidéos</p>
          <p className="cardCategoryTitle">Cuisine</p>
          <p className="cardCategoryTitle">Sport</p>
          <p className="cardCategoryTitle">Musique</p>
          <p className="cardCategoryTitle">Voyage</p>
        </div>
        <div className="cardLang">
          <Icon id="flagIcon" icon={flagFrance} width={38} />
          <p>Italien</p>
        </div>
        <div className="cardFooter">
          <p><img src={Star} />5.00 <span id="nbReviews">(18)</span></p>
          <button id="speakButton">Parler</button>
        </div>
      </div>
    </div>
  );
}