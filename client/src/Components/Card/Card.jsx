import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="head-flex">
        <h3> שם פרטי</h3>
        <h3> First Name</h3>
        <h3> اسم شخصي</h3>
      </div>

      <div className="detailsContainer">
        <div className="icons">
          <i class="far fa-star">star</i>
          <i class="fas fa-share-alt">share</i>
        </div>

        <div className="description">
          תיאור ארוך של משמעות השם תיאור הארוך כעגלכחעגלכחע
        </div>
        <div>gender</div>
      </div>
    </div>
  );
}

export default Card;
