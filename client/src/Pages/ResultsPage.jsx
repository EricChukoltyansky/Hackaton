import React from "react";
import ResultsContainer from "../Components/ResultsContainer/ResultsContainer";

function Results(results) {
  return (
    <div>
      <h1>תוצאות חיפוש למונח...</h1>
      <ResultsContainer props={results} />
    </div>
  );
}

export default Results;
