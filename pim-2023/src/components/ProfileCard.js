import React from "react";

export default function ProfileCard(props) {
  const { pseudo, age, job, centerInterest, lang } = props;

  return (
    <div className="card">
      <div className="card-header">{pseudo}</div>
      <div className="card-body">
        <p>Age: {age}</p>
        <p>Job: {job}</p>
        <p>Center of Interest: {centerInterest}</p>
        <p>Language: {lang}</p>
      </div>
    </div>
  );
}