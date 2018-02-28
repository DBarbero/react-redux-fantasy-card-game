import * as at from '../actions/actionTypes'

const initialState = {
  isFirstPlayer: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.CHANGE_PLAYER:
      return { ...state, isFirstPlayer: !state.isFirstPlayer}
  }
  return state
}

export default rootReducer
