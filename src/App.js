import React, { Component } from 'react';
import tng from './trek.svg'
import './App.css';

import QuoteBox from './QuoteBox'

const quotes = [
  {
    quote: 'Space... The final frontier...These are the voyages of the Starship Enterprise. Its continuing mission: To explore strange new worlds...To seek out new life and new civilizations...To boldly go where no one has gone before!',
    author: 'Captain Jean-Luc Picard'
  },
  {
    quote: "But you can't deny that you're still a dangerous, savage child race.",
    author: 'Q'
  },
  {
    quote: '[intoxicated by the virus] We are more alike than unlike, my dear Captain. I have pores. Humans have pores. I have... fingerprints. Humans have fingerprints. My chemical nutrients are like your blood. If you prick me... do I not... leak?',
    author: 'Data'
  },
  {
    quote: "I don't know how to communicate this, or even if it is possible, but the question of justice has concerned me greatly of late and I say to any creature who may be listening, there can be no justice so long as laws are absolute. Even life itself is an exercise in exceptions.",
    author: 'Captain Jean-Luc Picard'
  },
  {
    quote: "My brother, it is you who does not see. You look for battles in the wrong place. The true test of a warrior is not without, it is within! Here! Here is where we meet the challenge. It is the weaknesses in here a warrior must overcome.",
    author: "Worf"
  },
  {
    quote: "Flair is what marks the difference between artistry and mere competence.",
    author: "William T. Riker"
  },
  {
    quote: "If you can't take a little bloody nose, maybe you ought to go back home and crawl under your bed. It's not safe out here! It's wondrous, with treasures to satiate desires both subtle and gross...but it's not for the timid.",
    author: "Q"
  },
  {
    quote: "It is possible to commit no mistakes and still lose. That is not a weakness; that is life",
    author: "Captain Jean-Luc Picard"
  },
  {
    quote: "A matter of internal security: the age-old cry of the oppressor.",
    author: "Captain Jean-Luc Picard"
  }
]

class App extends Component {
  state = {
    index: 0
  }

  generateNewIndex = () => this.setState({ index: Math.floor(Math.random() * quotes.length) })
  
  render () {
    return (
      <div className="App">
        <img src = { tng } alt = "trek logo" className = "header__logo" />
        <QuoteBox randomQuote = { quotes[this.state.index] } clicked = { this.generateNewIndex } />
      </div>
    );
  }
}

export default App;
