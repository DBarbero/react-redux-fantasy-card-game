import * as at from '../actions/actionTypes'

const initialState = {
  cards: [
    { id: 'c001', name: 'Gandalf', race: 'Mage', health: '100', power: '80' },
    { id: 'c002', name: 'Frodo', race: 'Hobbit', health: '100', power: '25' },
    { id: 'c003', name: 'Gollum', race: 'Hobbit', health: '100', power: '25' },
    { id: 'c004', name: 'Legolas', race: 'Elf', health: '300', power: '75' }
  ]
}

const hitCard = (state, id, damage) => {
  return state.cards
    .filter( card => card.health - damage > 0 )
    .map( card => {
    	if ( card.id === id )
        return { ...card, health: card.health - damage }
      return card
    })
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.HIT_CARD:
      return { ...state,  cards: hitCard(state, action.id, action.damage) }
  }
  return state
}

export default boardReducer
