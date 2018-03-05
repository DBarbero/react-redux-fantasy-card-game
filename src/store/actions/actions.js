import * as at from './actionTypes'

export const changePlayer = () => ({ type: at.CHANGE_PLAYER })


export const hitCard = (isFirst, id, damage) => ({ type: at.HIT_CARD, isFirst, id, damage })

const getPlayers = (players) => {
  console.log(players)
  return {
    type: at.FETCH_CARDS_SUCCESS,
    players
  }
}

export const fetchCards = () =>
  dispatch => {
    // async action creator has to dispatch sync action creator
    dispatch({ type: at.FETCH_CARDS_REQUEST})
    fetch('http://localhost:3000/players')
      .then ( res => res.json() ).then ( data => dispatch( getPlayers(data) ) )
    // return fetch('http://localhost:3000/players').then( res => res.json() )
  }
