import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Board.css'
import Card from '../../components/Card/Card'

import { changePlayer, hitCard } from '../../store/actions/actions'

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hitPower: 0
    }
  }

  handleGetPower = (power) => {
    this.setState({ hitPower: power });
  }

  handleHitCard = (isFirst, id, damage) => {
    this.props.onPlayerChange()
    this.props.onHitCard(isFirst, id, damage)
    this.setState({ hitPower: 0 });
  }


  render() {
    const { isFirst, playerOneDeck, playerTwoDeck } = this.props

    const PlayerOne = (
      <div>
        { playerOneDeck.map( card =>
          <Card key={card.id} isTurn={isFirst} character={card}
            onHitCard={() => this.handleHitCard(isFirst, card.id, this.state.hitPower)}
            onGetPower={() => this.handleGetPower(card.power)}
          ></Card>
        ) }
      </div>
    )

    const PlayerTwo = (
      <div>
        { playerTwoDeck.map( card =>
          <Card key={card.id} isTurn={!isFirst} character={card}
            onHitCard={() => this.handleHitCard(isFirst, card.id, this.state.hitPower)}
            onGetPower={() => this.handleGetPower(card.power)}
          ></Card>
        ) }
      </div>
    )

    return (
      <div>
        <h2>{ this.props.isFirst ? 'First Player Turn' : 'Second Player Turn' }</h2>
        <h1>Damage: { this.state.hitPower }</h1>
        <button onClick={this.props.onPlayerChange}>Toggle Player</button>
        <div className="Board">
          { PlayerOne }
          { PlayerTwo }
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isFirst: state.turn.isFirstPlayer,
    playerOneDeck: state.board.p1.cards,
    playerTwoDeck: state.board.p2.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPlayerChange: () => dispatch(changePlayer()),
    onHitCard: (isFirst, id, damage) => dispatch( hitCard(isFirst, id, damage) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
