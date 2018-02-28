import React from 'react';
import './Card.css'

const Card = ({character, onHitCard, ...props}) => {
  const { name = 'Character Name', race = 'human', health = 100, power = 30 } = character
  return (
    <div className="Card">
      <h3>{name}</h3>
      <p>{race}</p>
      { props.children }
      <p>Health  &lt;3 : {health}</p>
      <p>Power (ﾉ´･ω･)ﾉ ﾐ ┸━┸: { power }</p>
      <button onClick={onHitCard} className="button__hit">Hit Character</button>
    </div>
  )
}

export default Card;
