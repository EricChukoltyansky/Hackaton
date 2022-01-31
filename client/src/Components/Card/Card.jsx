import React from "react";
import "./Card.css";
import Button from "../../Utils/Button";
import { useState } from "react";

function Card({ nameCard }) {
  const textLength = 150;

  const [showFull, setShowFull] = useState(false);

  const renderMeaning = () => {
    if (nameCard.meaning.length > textLength) {
      switch (showFull) {
        case true:
          return (
            <div className="meaning">
              {nameCard.meaning}
              &nbsp; &nbsp;{" "}
              <button
                className="link-button"
                onClick={() => setShowFull(false)}
              >
                לראות פחות{" "}
              </button>{" "}
            </div>
          );

        case false:
          return (
            <div className="meaning">
              {nameCard.meaning.slice(0, textLength)}
              &nbsp; &nbsp;{" "}
              <button className="link-button" onClick={() => setShowFull(true)}>
                להמשך קריאה
              </button>
            </div>
          );

        default:
          return <div className="meaning">{nameCard.meaning}</div>;
      }
    } else {
      return <div className="meaning">{nameCard.meaning}</div>;
    }
  };

  const genderIcon = () => {
    if (nameCard.genderFemale) {
      if (nameCard.genderMale) {
        // unisex
        return <i className="fas fa-venus-mars"></i>;
      } else {
        //female
        return <i className="fas fa-venus"></i>;
      }
    } else if (nameCard.genderMale) {
      // male
      return <i className="fas fa-mars"></i>;
    } else {
      // default unisex
      return <i className="fas fa-venus-mars"></i>;
    }
  };

  return (
    <div className="card">
      <div className="head-flex">
        <h3> {nameCard.name}</h3>
        <h3> {nameCard.englishSpelling}</h3>
        <h3> {nameCard.arabicSpelling}</h3>
      </div>

      <div className="detailsContainer">
        <div className="icons">
          <Button
            className="icon-button"
            icon={<i className="far fa-heart"></i>}
          ></Button>
          <Button
            className="icon-button"
            icon={<i className="fas fa-external-link-alt"></i>}
          ></Button>
        </div>

        <>{renderMeaning()}</>
        <div>{genderIcon()}</div>
        <div className="origin">
          <span style={{ fontWeight: "bold" }}>מקור: </span>
          {nameCard.origin}
        </div>
      </div>
    </div>
  );
}

export default Card;
