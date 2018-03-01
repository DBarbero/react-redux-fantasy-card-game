import * as at from './actionTypes'

export const changePlayer = () => ({ type: at.CHANGE_PLAYER })


export const hitCard = (isFirst, id, damage) => ({ type: at.HIT_CARD, isFirst, id, damage })
