import React from 'react';

const Card = ({character, ...props}) => {
  const { name = 'Character Name', race = 'human', health = 100, power = 30 } = character
  return (
    <div>
      <h3>{character.name}</h3>
      <p>{race}</p>
      { props.children }
      <p>Health  &lt;3 : {health}</p>
      <p>Power (ﾉ´･ω･)ﾉ ﾐ ┸━┸: { power }</p>
    </div>
  )
}

export default Card;
