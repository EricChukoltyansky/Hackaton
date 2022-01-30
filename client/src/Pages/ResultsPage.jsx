import React from "react";
import ResultsContainer from "../Components/ResultsContainer/ResultsContainer";

function Results({ results }) {
  return (
    <div style={{ margin: "30px" }}>
      <h1>תוצאות חיפוש למונח...</h1>
      <ResultsContainer results={results} />
    </div>
  );
}

export default Results;
