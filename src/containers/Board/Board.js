import React, { Component } from 'react';
import Card from '../../components/Card/Card'

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { name: 'Gandalf', race: 'Mage', helth: '100', power: '80' },
        { name: 'Frodo', race: 'Hobbit', helth: '100', power: '25' },
        { name: 'Gollum', race: 'Hobbit', helth: '100', power: '25' },
        { name: 'Legolas', race: 'Elf', helth: '300', power: '75' },
      ]
    };
  }

  render() {
    const { cards } = this.state
    return (
      <div>
        <Card character={cards[0]}></Card>
        <Card character={cards[1]}></Card>
        <Card character={cards[2]}><h3>My Precius!</h3></Card>
        <Card character={cards[3]}></Card>
      </div>
    );
  }

}

export default Board;
