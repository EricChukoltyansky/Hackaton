import React, { useState } from "react";
import Home from "./Pages/Home";
import ResultsPage from "./Pages/ResultsPage";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Home setResults={setResults} />
      {results.length > 0 ? <ResultsPage results={results} /> : null}
      
      {/* TODO hide/show if there are results */}
    </div>
  );
}

export default App;
