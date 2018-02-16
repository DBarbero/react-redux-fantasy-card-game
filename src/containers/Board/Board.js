import React, { Component } from 'react';
import Card from '../../components/Card/Card'

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: 'c001', name: 'Gandalf', race: 'Mage', health: '100', power: '80' },
        { id: 'c002', name: 'Frodo', race: 'Hobbit', health: '100', power: '25' },
        { id: 'c003', name: 'Gollum', race: 'Hobbit', health: '100', power: '25' },
        { id: 'c004', name: 'Legolas', race: 'Elf', health: '300', power: '75' },
      ],
      showCards: false
    }

  }

  handleHitCharacter = (id) => {
    const characterIndex = this.state.cards.findIndex( card => card.id === id)
    const oldCharacter = this.state.cards[characterIndex]
    const newCharacter = { ...oldCharacter, health: oldCharacter.health - 20}
    const newCards = [...this.state.cards]
    newCards[characterIndex] = newCharacter
    this.setState({ cards: newCards });
  }

  handleOnChangeName = (event, id) => {
    const newCards = this.state.cards.map( card => {
      if (card.id === id)
        return { ...card, name: event.target.value}
      return card
    })
    this.setState({ cards: newCards });
  }

  handleToggleCards = () => {
    this.setState({
      showCards: !this.state.showCards
    });
  }

  render() {
    const { cards } = this.state
    const CardsComponent = (
      <div>
        { cards.map( card =>
          <Card key={card.id} character={card}
            onHitCard={() => this.handleHitCharacter(card.id)}
            onChangeName={ (e) => this.handleOnChangeName(e, card.id) }
          ></Card>
        ) }
      </div>
    )
    return (
      <div>
        <button onClick={this.handleToggleCards}>Toggle Cards</button>
        { this.state.showCards && CardsComponent }
      </div>
    );
  }

}

export default Board;
