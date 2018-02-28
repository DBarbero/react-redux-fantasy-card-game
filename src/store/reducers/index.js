const initialState = {
  isFirstPlayer: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      return { ...state, isFirstPlayer: !state.isFirstPlayer}
  }
  return state
}

export default rootReducer
