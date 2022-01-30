import React from "react";
import Home from "./Pages/Home";
import ResultsPage from "./Pages/ResultsPage";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]); // eslint-disable-line

  return (
    <div>
      <Home />
      <ResultsPage props={results} />
    </div>
  );
}

export default App;
