import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card-img">
    <div className="img-container">
      <img 
        alt={props.name} 
        src={props.image}
        onClick = {() => props.checkIfClicked(props.id)}
       />
    </div>

  </div>
);

export default GameCard;
