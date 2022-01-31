import React from "react";
import "./Card.css";
import Button from "../../Utils/Button";
import { useState } from "react";

function Card({ nameCard }) {
  const meaningLength = 150;
  //const originLength = 70;

  const [showFullMeaning, setShowFullMeaning] = useState(false);
  //const [showFullOrigin, setShowFullOrigin] = useState(false);

  const renderMeaning = () => {
    if (nameCard.meaning.length > meaningLength) {
      switch (showFullMeaning) {
        case true:
          return (
            <div className="meaning">
              {nameCard.meaning}
              &nbsp; &nbsp;{" "}
              <button
                className="link-button"
                onClick={() => setShowFullMeaning(false)}
              >
                לראות פחות{" "}
              </button>{" "}
            </div>
          );

        case false:
          return (
            <div className="meaning">
              {nameCard.meaning.slice(0, meaningLength)}
              &nbsp; &nbsp;{" "}
              <button
                className="link-button"
                onClick={() => setShowFullMeaning(true)}
              >
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

  // const renderOrigin = () => {
  //   if (nameCard.origin.length > originLength) {
  //     switch (showFullOrigin) {
  //       case true:
  //         return (
  //           <div className="origin">
  //             {nameCard.origin}

  //             <button
  //               className="link-button"
  //               onClick={() => setShowFullOrigin(false)}
  //             >
  //               לראות פחות
  //             </button>
  //           </div>
  //         );

  //       case false:
  //         return (
  //           <div className="origin">
  //             {nameCard.origin.slice(0, originLength)}
  //             &nbsp; &nbsp;
  //             <button
  //               className="link-button"
  //               onClick={() => setShowFullOrigin(true)}
  //             >
  //               להמשך קריאה
  //             </button>
  //           </div>
  //         );

  //       default:
  //         return <div className="origin">{nameCard.origin}</div>;
  //     }
  //   } else {
  //     return <div className="origin">{nameCard.origin}</div>;
  //   }
  // };

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
