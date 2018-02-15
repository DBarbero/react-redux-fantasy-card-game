import React from 'react';

const Card = ({}) => (
  <div>
    <h3>Mago</h3>
    <p>Health  &lt;3 : 100</p>
    <p>Power (ﾉ´･ω･)ﾉ ﾐ ┸━┸: { Math.floor(Math.random() * 100) }</p>
  </div>
);

export default Card;
