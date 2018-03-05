import * as at from '../actions/actionTypes'

const initialState = {
  p1: {
    cards: []
  },
  p2: {
    cards: []
  },
}

const hitCard = (deck, id, damage) => {
  return deck
    .map( card => {
    	if ( card.id === id )
        return { ...card, health: card.health - damage }
      return card
    })
    .filter( card => card.health > 0 )
}

const whoHit = (state, action) => {
  if (action.isFirst) {
    return  { ...state, p2: {...state.p2, cards: hitCard(state.p2.cards, action.id, action.damage) }}
  } else {
    return { ...state, p1: {...state.p1, cards: hitCard(state.p1.cards, action.id, action.damage) }}
  }
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.HIT_CARD:
      return whoHit(state, action)
    case at.FETCH_CARDS_SUCCESS:
      return { ...state, p1: { ...state.p1, cards: action.players.p1 }, p2: { ...state.p2, cards: action.players.p2 } }
  }
  return state
}

export default boardReducer
