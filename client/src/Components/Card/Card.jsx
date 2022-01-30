import React from "react";
import "./Card.css";

function Card({
  name,
  englishSpelling,
  arabSpelling,
  origin,
  meaning,
  genderMale,
  genderFemale,
}) {
  return (
    <div className="card">
      <div className="head-flex">
        <h3> {name}שםפרטי</h3>
        <h3> {englishSpelling}Name</h3>
        <h3> اسم {arabSpelling}</h3>
      </div>

      <div className="detailsContainer">
        <div className="icons">
          <i className="far fa-star">star</i>
          <i className="fas fa-share-alt">share</i>
        </div>

        <div className="meaning">{meaning}</div>
        <div>
          <input type="checkbox" disabled readonly value="1" />
        </div>
      </div>
    </div>
  );
}

export default Card;
