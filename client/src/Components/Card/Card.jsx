import React from "react";
import "./Card.css";

function Card({ nameCard }) {
  return (
    <div className="card">
      <div className="head-flex">
        <h3> {nameCard.name}</h3>
        <h3> {nameCard.englishSpelling}</h3>
        {/* <h3> اسم {nameCard.arabSpelling}</h3> */}
      </div>

      <div className="detailsContainer">
        <div className="icons">
          <i className="far fa-star">star</i>
          <i className="fas fa-share-alt">share</i>
        </div>

        <div className="meaning">{nameCard.meaning}</div>
        <div>
          <input type="checkbox" disabled readonly value="1" />
        </div>
      </div>
    </div>
  );
}

export default Card;
