import React from "react";

export default function LanguageSelect() {
    return (
        <div className="globalLangContainer">
            <div className="langContainer">
                <p>Quelle langue maitrisez-vous ?</p>
                <div className="knowLangContainer">
                    {/* dropdown */}
                </div>
                <div className="learnLangContainer">
                    {/* dropdown */}
                </div>
                <div className="validateButtonContainer">
                    <button>Valider</button>
                </div>
            </div>
        </div>
    );
}