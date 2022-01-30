import React, { useState } from "react";
import Home from "./Pages/Home";
import ResultsPage from "./Pages/ResultsPage";
import names from "./Api/mockData";

function App() {
  const [results, setResults] = useState(names);

  return (
    <div>
      <Home setResults={setResults} />
      <ResultsPage results={results} />
    </div>
  );
}

export default App;
