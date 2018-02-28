import * as at from './actionTypes'

export const changePlayer = () => ({ type: at.CHANGE_PLAYER })


export const hitCard = (id, damage) => ({ type: at.HIT_CARD, id, damage })
