import { Button } from "@mui/material";
import Card from "../components/Card";
import Label from "../components/Label";
import DropTarget from "../components/DropTarget";
import React, { useState, useEffect } from "react";

const SortSession = () => {
  const totalCards = 4; // Total number of cards in the card-bank
  const cardsToShow = 2; // Number of cards to show initially in the card-bank
  const [cardBank, setCardBank] = useState([]);
  const [columns, setColumns] = useState({
    column1: [],
    column2: [],
    column3: [],
    column4: [],
  });

  useEffect(() => {
    const shuffledCards = Array.from({ length: totalCards }, (_, index) => ({
      id: index + 1,
      text: `Card ${index + 1}`,
    })).sort(() => 0.5 - Math.random());
    setCardBank(shuffledCards);
  }, []);

  const handleDrop = (cardId, newColumn) => {
    const cardBankCopy = [...cardBank];
    const cardIndex = cardBankCopy.findIndex((card) => card.id === cardId);
    const newCard = cardBankCopy.splice(cardIndex, 1)[0];

    setCardBank(cardBankCopy);

    setColumns((prevColumns) => {
      const targetColumn = Object.keys(prevColumns).find(
        (column) => column === newColumn
      );
      return {
        ...prevColumns,
        [targetColumn]: [...prevColumns[targetColumn], newCard],
      };
    });

    if (cardBankCopy.length < 1) {
      const dropTarget = document.getElementById(newColumn);
      dropTarget.style.pointerEvents = "none";
    }
  };

  return (
    <div className="session-board">
      <div className="sort-area">
        <h5>sort area</h5>
        <div
          className="sort-board"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <DropTarget id="column1" onDrop={(id) => handleDrop(id, "column1")}>
            <Label text="Group 1" />
            <div className="card-stack">
              {columns.column1.map((card) => (
                <Card key={card.id} id={card.id} text={card.text} />
              ))}
            </div>
          </DropTarget>
          <DropTarget id="column2" onDrop={(id) => handleDrop(id, "column2")}>
            <Label text="Group 2" />
            <div className="card-stack">
              {columns.column2.map((card) => (
                <Card key={card.id} id={card.id} text={card.text} />
              ))}
            </div>
          </DropTarget>
          <DropTarget id="column3" onDrop={(id) => handleDrop(id, "column3")}>
            <Label text="Group 3" />
            <div className="card-stack">
              {columns.column3.map((card) => (
                <Card key={card.id} id={card.id} text={card.text} />
              ))}
            </div>
          </DropTarget>
          <DropTarget id="column4" onDrop={(id) => handleDrop(id, "column4")}>
            <Label text="Group 4" />
            <div className="card-stack">
              {columns.column4.map((card) => (
                <Card key={card.id} id={card.id} text={card.text} />
              ))}
            </div>
          </DropTarget>
        </div>

        <Button variant="contained" id="submit-button">
          Submit
        </Button>
      </div>
      <div className="card-bank">
        <h4>Drag And Drop Cards Into Groups</h4>
        {cardBank.slice(0, cardsToShow).map((card) => (
          <Card key={card.id} id={card.id} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default SortSession;
