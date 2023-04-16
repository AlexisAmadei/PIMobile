import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import { Icon } from "@iconify/react";
import flagFrance from "@iconify/icons-twemoji/flag-france";
import flagEngland from "@iconify/icons-twemoji/flag-england";
import flagItaly from "@iconify/icons-twemoji/flag-italy";
import flagSpain from "@iconify/icons-twemoji/flag-spain";
import flagGermany from "@iconify/icons-twemoji/flag-germany";
import flagPortugal from "@iconify/icons-twemoji/flag-portugal";
import flagRussia from "@iconify/icons-twemoji/flag-russia";

import "../css/ProfileCard.css";
import profileIcon from "../assets/profileIcon.svg";
import Star from "../assets/star.svg";

export default function ProfileCard(props) {
  const [displayLang, setDisplayLang] = useState("");
  const [displayFlag, setDisplayFlag] = useState("");
  useEffect(() => {
    if (props.nativeLang === "frLang") setDisplayLang("Français");
    if (props.nativeLang === "enLang") setDisplayLang("Anglais");
    if (props.nativeLang === "itLang") setDisplayLang("Italien");
    if (props.nativeLang === "esLang") setDisplayLang("Espagnol");
    if (props.nativeLang === "deLang") setDisplayLang("Allemand");
    if (props.nativeLang === "ptLang") setDisplayLang("Portugais");
    if (props.nativeLang === "ruLang") setDisplayLang("Russe");

    if (props.nativeLang === "frLang") setDisplayFlag(flagFrance);
    if (props.nativeLang === "enLang") setDisplayFlag(flagEngland);
    if (props.nativeLang === "itLang") setDisplayFlag(flagItaly);
    if (props.nativeLang === "esLang") setDisplayFlag(flagSpain);
    if (props.nativeLang === "deLang") setDisplayFlag(flagGermany);
    if (props.nativeLang === "ptLang") setDisplayFlag(flagPortugal);
    if (props.nativeLang === "ruLang") setDisplayFlag(flagRussia);
  }, []);
  return (
    <div className="globalCardContainer">
      <div className="card">
        <div className="cardHeader">
          <img src={profileIcon} height={56} width={56} alt="profileIcon" />
          <div className="cardHeaderInfo">
            <p className="cardPseudo">{props.pseudo}</p>
            <p className="cardAge">{props.age}, {}</p>
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
          <Icon id="flagIcon" icon={displayFlag} width={38} />
          <p>{displayLang}</p>
        </div>
        <div className="cardFooter">
          <p><img src={Star} />5.00 <span id="nbReviews">(18)</span></p>
          <button id="speakButton">Parler</button>
        </div>
      </div>
    </div>
  );
}
