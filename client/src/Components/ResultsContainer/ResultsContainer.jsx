import React from "react";
import Card from "../Card/Card";

const ResultsContainer = ({ results }) => {
  const renderCards = (results) => {
    return results.map((nameCard) => {
      return (
        <Card key={nameCard._id} nameCard={nameCard}>
          caaard
        </Card>
      );
    });
  };

  return (
    <>
      hi
      {renderCards(results)}
    </>
  );
};

export default ResultsContainer;
