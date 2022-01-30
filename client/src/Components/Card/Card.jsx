import React from "react";
import "./Card.css";
import Button from "../../Utils/Button";

function Card({ nameCard }) {
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
        {/* <h3> اسم {nameCard.arabSpelling}</h3> */}
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

        <div className="meaning">{nameCard.meaning}</div>
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
