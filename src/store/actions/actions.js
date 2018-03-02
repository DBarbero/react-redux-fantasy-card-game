import * as at from './actionTypes'

export const changePlayer = () => ({ type: at.CHANGE_PLAYER })


export const hitCard = (isFirst, id, damage) => ({ type: at.HIT_CARD, isFirst, id, damage })

const getCards = () => {
  return {
    type: at.FETCH_CARDS_SUCCESS,
    p1: [
      { id: 'c001', name: 'Gandalf', race: 'Mage', health: '100', power: '80' },
      { id: 'c002', name: 'Frodo', race: 'Hobbit', health: '100', power: '25' },
      { id: 'c003', name: 'Sam', race: 'Hobbit', health: '100', power: '25' },
      { id: 'c004', name: 'Legolas', race: 'Elf', health: '300', power: '75' }
    ],
    p2: [
      { id: 'c005', name: 'Saruman', race: 'Mage', health: '100', power: '80' },
      { id: 'c006', name: 'Gollum', race: 'Hobbit', health: '100', power: '25' },
      { id: 'c007', name: 'Orc1', race: 'Orc', health: '100', power: '100' },
      { id: 'c008', name: 'Orc2', race: 'Orc', health: '100', power: '100' }
    ]
  }
}

export const fetchCards = () =>
  dispatch => {
    // async action creator has to dispatch sync action creator
    dispatch({ type: at.FETCH_CARDS_REQUEST})
    // return fetch('https://fantasy-world-aa9bd.firebaseio.com/cards')
    return setTimeout( () => {
      console.log(getCards())
      dispatch(getCards())
    	// return getCards()
    }, 1000)
  }
