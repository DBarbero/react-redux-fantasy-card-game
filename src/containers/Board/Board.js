import React, { Component } from 'react';
import Card from '../../components/Card/Card'

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { name: 'Gandalf', race: 'Mage', health: '100', power: '80' },
        { name: 'Frodo', race: 'Hobbit', health: '100', power: '25' },
        { name: 'Gollum', race: 'Hobbit', health: '100', power: '25' },
        { name: 'Legolas', race: 'Elf', health: '300', power: '75' },
      ]
    }

  }

  handleHitCharacter = (index) => {
    const newCards = this.state.cards.map( (card, i) => {
      if (i === index)
        return { ...card, health: card.health - 20}
      return card
    })
    this.setState({ cards: newCards });
  }

  handleOnChangeName = (event, index) => {
    const newCards = this.state.cards.map( (card, i) => {
      if (i === index)
        return { ...card, name: event.target.value}
      return card
    })
    this.setState({ cards: newCards });
  }

  render() {
    const { cards } = this.state
    return (
      <div>
        <Card character={cards[0]}
          onHitCard={() => this.handleHitCharacter(0)}
          onChangeName={(e) => this.handleOnChangeName(e, 0)}
        ></Card>
        <Card character={cards[1]}
           onHitCard={() => this.handleHitCharacter(1)}
           onChangeName={(e) => this.handleOnChangeName(e, 1)}
        ></Card>
        <Card character={cards[2]}
          onHitCard={() => this.handleHitCharacter(2)}
          onChangeName={(e) => this.handleOnChangeName(e, 2)}
        ><h3>My Precius!</h3></Card>
        <Card character={cards[3]}
          onHitCard={() => this.handleHitCharacter(3)}
          onChangeName={(e) => this.handleOnChangeName(e, 3)}
        ></Card>
      </div>
    );
  }

}

export default Board;
