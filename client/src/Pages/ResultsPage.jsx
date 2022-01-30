import React from "react";
import ResultsContainer from "../Components/ResultsContainer/ResultsContainer";
import {motion} from "framer-motion";
import {searchResultsVariants} from "../Utils/animations/animations";


function Results({ results }) {
  return (
    <motion.div style={{ margin: "30px" }}
    variants={searchResultsVariants}
                initial='hidden'
                animate='visible'
    >
      <h1>תוצאות חיפוש למונח...</h1>
      <ResultsContainer results={results} />
    </motion.div>
  );
}

export default Results;
