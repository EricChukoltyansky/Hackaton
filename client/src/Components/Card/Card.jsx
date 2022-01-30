import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="Head-flex">
        <h3> שם בעברית</h3>
        <h3> English name</h3>
      </div>
      <div>icons..</div>
      <div>תיאור ארוך של משמעות השם תיאור הארוך כעגלכחעגלכחע</div>

      <div className="detailsContainer">details</div>
    </div>
  );
}

export default Card;
