import React from 'react';
import './Card.css'

const Card = ({character, isTurn, onGetPower, onHitCard, ...props}) => {
  const { name = 'Character Name', race = 'human', health = 100, power = 30 } = character
  return (
    <div className={isTurn ? 'Card power' : 'Card hit' }>
      <h3>{name}</h3>
      <p>{race}</p>
      { props.children }
      <p>Health  &lt;3 : {health}</p>
      <p>Power (ﾉ´･ω･)ﾉ ﾐ ┸━┸: { power }</p>
      { isTurn ?
        <button onClick={onGetPower} className="button button__power">Get Power</button>
        :
        <button onClick={onHitCard} className="button button__hit">Hit Character</button>
      }
    </div>
  )
}

export default Card;
