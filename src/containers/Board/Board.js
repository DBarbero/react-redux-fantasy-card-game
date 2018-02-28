import React, { Component } from 'react';
import { connect } from 'react-redux'

import Card from '../../components/Card/Card'

import { changePlayer, hitCard } from '../../store/actions/actions'

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = { }
  }


  render() {
    const { cards } = this.props

    const CardsComponent = (
      <div>
        { cards.map( card =>
          <Card key={card.id} character={card}
            onHitCard={() => this.props.onHitCard(card.id)}
          ></Card>
        ) }
      </div>
    )

    return (
      <div>
        <h2>{ this.props.isFirst ? 'First Player Turn' : 'Second Player Turn' }</h2>
        <button onClick={this.props.onPlayerChange}>Toggle Player</button>
        { this.props.isFirst && CardsComponent }
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isFirst: state.turn.isFirstPlayer,
    cards: state.board.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPlayerChange: () => dispatch(changePlayer()),
    onHitCard: (id) => dispatch( hitCard(id, 10) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
