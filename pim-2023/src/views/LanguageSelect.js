import React from "react";
import { Link } from "react-router-dom";

export default function LanguageSelect({ handleLangSelect }) {

    const handleSubmit = () => {
        handleLangSelect("lang", "learnLang");
    }
    return (
        <div className="globalLangContainer">
            <h1>Choisissez vos langues</h1>
            <div className="langContainer">
                <p>Quelle langue maitrisez-vous ?</p>
                <div className="knowLangContainer">
                    {/* dropdown */}
                </div>
                <div className="learnLangContainer">
                    {/* dropdown */}
                </div>
                <div className="validateButtonContainer">
                    <button onClick={handleSubmit}>Valider</button>
                </div>
            </div>
            <p className="returnToLogin">
                Déjà un compte ?
                <Link id="linkRouter" to="/security/login"> Se Connecter</Link>
            </p>
        </div>
    );
}