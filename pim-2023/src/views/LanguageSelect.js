import React from "react";
import { Link } from "react-router-dom";


import "../css/langSelect.css"
import BasicSelect from "../components/dropdown";

export default function LanguageSelect({ handleLangSelect }) {
    const handleSubmit = () => {
        handleLangSelect("lang", "learnLang");
    }
    return (
        <div className="globalLangContainer">
            <div className="langContainer">
                <p>Quelle langue maitrisez-vous ?</p>
                <div className="knowLangContainer">
                    <BasicSelect
                        label="Langue native"
                    />
                </div>
                <div className="learnLangContainer">
                    <BasicSelect
                        label="Langue à apprendre"
                    />
                </div>
                <div className="langSelectValidate">
                    <button onClick={handleSubmit}>Valider</button>
                </div>
            <p className="returnToLogin">
                Déjà un compte ?
                <Link id="linkRouter" to="/security/login"> Se Connecter</Link>
            </p>
            </div>
        </div>
    );
}