import React from "react";
import Card from "../Card/Card";

const ResultsContainer = (results) => {
  const renderCards = (results) => {
    return results.map((nameCard) => {
      return nameCard;
    });
  };

  return (
    <>
      {renderCards}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default ResultsContainer;
