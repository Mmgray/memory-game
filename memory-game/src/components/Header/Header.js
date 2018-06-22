import React from "react";
import "./Header.css";

const Header = props => (
    <div className = "header-container">
        <nav className="navbar sticky-top navbar-light bg-light justify-content-end">
            <h5 className="text-muted">Current game score: {props.currentScore} | Top score: {props.topScore}
            </h5>
        </nav>

        <div className="jumbotron">
            <h1>Cartoon Memory Game</h1>
            <p>Select a card only once. How high can you score?</p>
        </div>
    </div>
);

export default Header;