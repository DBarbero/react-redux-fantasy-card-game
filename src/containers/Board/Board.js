import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Board.css'
import Card from '../../components/Card/Card'

import { changePlayer, hitCard } from '../../store/actions/actions'

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = { }
  }


  render() {
    const { isFirst, playerOneDeck, playerTwoDeck } = this.props

    const PlayerOne = (
      <div>
        { playerOneDeck.map( card =>
          <Card key={card.id} character={card}
            onHitCard={() => this.props.onHitCard(isFirst, card.id)}
          ></Card>
        ) }
      </div>
    )

    const PlayerTwo = (
      <div>
        { playerTwoDeck.map( card =>
          <Card key={card.id} character={card}
            onHitCard={() => this.props.onHitCard(isFirst, card.id)}
          ></Card>
        ) }
      </div>
    )

    return (
      <div>
        <h2>{ this.props.isFirst ? 'First Player Turn' : 'Second Player Turn' }</h2>
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
    onHitCard: (isFirst, id) => dispatch( hitCard(isFirst, id, 10) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
