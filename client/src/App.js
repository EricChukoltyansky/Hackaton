import React, { useState } from "react";
import Home from "./Pages/Home";
import ResultsPage from "./Pages/ResultsPage";
import './App.css'
import Footer from "./Components/Footer/Footer";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className='App'>
      <Home setResults={setResults} />
      {results.length > 0 ? <ResultsPage results={results} /> : <div className='filler-div'> </div>}
      {/* TODO hide/show if there are results */}
        <Footer />
    </div>
  );
}

export default App;
