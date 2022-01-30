import React from "react";
import Card from "../Card/Card";

const ResultsContainer = (results) => {
  const renderCards = (results) => {
    return results.map((nameCard) => {
      return <Card key={nameCard._id} props={nameCard} />;
    });
  };

  return <>{renderCards()}</>;
};

export default ResultsContainer;
