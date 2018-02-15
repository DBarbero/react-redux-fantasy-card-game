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

  handleHitCharacter = () => {
    console.log('hit character cliked', this.state.cards)
    this.setState(prevState => {
      return {
        cards: [
          { name: 'Gandalf', race: 'Mage', health: '100', power: '80' },
          { name: 'Frodo', race: 'Hobbit', health: '100', power: '25' },
          { name: 'Gollum', race: 'Hobbit', health: '100', power: '25' },
          { name: 'Legolas', race: 'Elf', health: prevState.cards[3].health-20, power: '75' },
        ]
      }
    })
  }

  render() {
    const { cards } = this.state
    return (
      <div>
        <Card character={cards[0]}></Card>
        <Card character={cards[1]}></Card>
        <Card character={cards[2]}><h3>My Precius!</h3></Card>
        <Card character={cards[3]}></Card>
        <button onClick={this.handleHitCharacter}>Hit Character</button>
      </div>
    );
  }

}

export default Board;
