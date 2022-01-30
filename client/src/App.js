import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import ResultsPage from "./Pages/ResultsPage";
import names from "./Api/mockData";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(names);
  }, []);

  return (
    <div>
      <Home props={setResults} />
      <ResultsPage props={results} />
    </div>
  );
}

export default App;
