import React, { useState, useEffect } from "react";
import "../css/CenterSelect.css";
import CategoryCard from "../components/categoryCard";
import gamingIcon from "../assets/gamingIcon.svg";
import musicIcon from "../assets/musicIcon.svg";
import cinemaIcon from "../assets/cinemaIcon.svg";
import cookingIcon from "../assets/cookingIcon.svg";
import sportIcon from "../assets/sportIcon.svg";
import modeIcon from "../assets/modeIcon.svg";

export default function CenterSelect({ handleCenterSelect }) {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    if (center !== null) {
      handleSubmit();
    }
  }, [center]);

  const handleSubmit = () => {
    handleCenterSelect(center);
  };

  const handleCategorySelect = (category) => {
    setCenter(category);
  };

  return (
    <div className="globalCenterContainer">
      <div className="centerContainer">
        <h1 id="head">Partage ce que tu aimes</h1>
        <p>Selectionnes un thème qui t'interesses</p>
        <div className="categoryContainer">
          <CategoryCard
            image={gamingIcon}
            category="Jeux-vidéos"
            onClick={() => handleCategorySelect("Jeux-vidéos")}
          />
          <CategoryCard
            image={musicIcon}
            category="Musique"
            onClick={() => handleCategorySelect("Musique")}
          />
          <CategoryCard
            image={cinemaIcon}
            category="Cinéma"
            onClick={() => handleCategorySelect("Cinéma")}
          />
          <CategoryCard
            image={cookingIcon}
            category="Cuisine"
            onClick={() => handleCategorySelect("Cuisine")}
          />
          <CategoryCard
            image={sportIcon}
            category="Sport"
            onClick={() => handleCategorySelect("Sport")}
          />
          <CategoryCard
            image={modeIcon}
            category="Mode"
            onClick={() => handleCategorySelect("Mode")}
          />
        </div>
      </div>
      <div className="centerFooter">
        <div className="centerSelectValidate">
          <button onClick={handleSubmit}>Valider</button>
        </div>
      </div>
    </div>
  );
}