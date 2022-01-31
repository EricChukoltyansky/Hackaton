import React from "react";

export default function Suggested({ setSearchTerm, searchByMeaning }) {
  function handleSuggestedClick(e) {
    setSearchTerm(e.target.value);
    searchByMeaning();
  }

  return (
    <div className="suggested">
      <h3>חיפושים אחרונים</h3>
      <button
        className="link-button"
        onClick={handleSuggestedClick}
        value="תקווה"
      >
        תקווה
      </button>
      <button
        className="link-button"
        onClick={handleSuggestedClick}
        value="אור"
      >
        אור
      </button>
      <button
        className="link-button"
        onClick={handleSuggestedClick}
        value="שמחה"
      >
        שמחה
      </button>
      <button
        className="link-button"
        onClick={handleSuggestedClick}
        value="יפה"
      >
        יפה
      </button>
      <button
        className="link-button"
        onClick={handleSuggestedClick}
        value="מזל"
      >
        מזל
      </button>
    </div>
  );
}
