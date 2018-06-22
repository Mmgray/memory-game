import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // Setting this.state.cards to the cards json array
    this.state = {
      cards: cards,
      topScore: 0,
      currentScore: 0
  };
  this.checkIfClicked = this.checkIfClicked.bind(this);
}

//See if card has been clicked
checkIfClicked(id) {
  let clickedCard =this.state.cards.filter(card => card.id === id)[0];

  let cardsCopy = this.state.cards.slice().sort(function(a,b) {return 0.5 -Math.random()});

if (!clickedCard.clicked) {
  clickedCard.clicked = true;
  cardsCopy[cardsCopy.findIndex((card) => card.id === id)] === clickedCard;

  this.setState({
    cards: cardsCopy,
    currentScore: this.state.currentScore + 1,
    topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore)
  });
}

else {
  let resetCardsCopy = cardsCopy.map((card) =>{
    return{
      id: card.id,
      image: card.image,
      clicked: false
    }
  });
  this.setState({
    cards: resetCardsCopy,
    currentScore: 0
  })
}

}
  render() {
    return (
      <div className="container">
        <Header currentScore={this.state.currentScore} topScore={this.state.topScore}/>
             
      <Wrapper>
        {this.state.cards.map(card => (
          <GameCard
          checkIfClicked= {this.checkIfClicked}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
