import * as at from '../actions/actionTypes'

const initialState = {
  p1: {
    cards: [
      { id: 'c001', name: 'Gandalf', race: 'Mage', health: '100', power: '80' },
      { id: 'c002', name: 'Frodo', race: 'Hobbit', health: '100', power: '25' },
      { id: 'c003', name: 'Sam', race: 'Hobbit', health: '100', power: '25' },
      { id: 'c004', name: 'Legolas', race: 'Elf', health: '300', power: '75' }
    ]
  },
  p2: {
    cards: [
      { id: 'c005', name: 'Saruman', race: 'Mage', health: '100', power: '80' },
      { id: 'c006', name: 'Gollum', race: 'Hobbit', health: '100', power: '25' },
      { id: 'c007', name: 'Orc1', race: 'Orc', health: '100', power: '100' }
    ]
  },
}

const hitCard = (deck, id, damage) => {
  return deck
    .filter( card => card.health - damage > 0 )
    .map( card => {
    	if ( card.id === id )
        return { ...card, health: card.health - damage }
      return card
    })
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
  }
  return state
}

export default boardReducer
