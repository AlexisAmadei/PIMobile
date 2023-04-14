import React from "react";

export default function CenterSelect({ handleCenterSelect }) {
    const handleSubmit = () => {
        handleCenterSelect("center");
    }
    return (
        <div>
            <h1>CenterSelect</h1>
            <button onClick={handleSubmit}>Valider</button>
        </div>
    );
}
