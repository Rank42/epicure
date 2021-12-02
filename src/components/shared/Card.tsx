import React from 'react';

export interface CardProps {
  name: string
  img: string
  chef?: string
  description?: string
  icon?: string
  price?: number
  restName?: string
  cardClass?: string
}

const Card: React.FC<CardProps> = ({ name, img, chef, description, icon, price, restName, cardClass }) => {

  return description ? (<div className={`card ${cardClass} z-depth-0`}>
    <div className="card-image">
      <img src={img} alt={name} />
    </div>
    <div className="card-content">
      <span className="card-title center-align">{name}</span>
      <p>{description}</p>
      <div className="bottomSection">
      {icon ? <img className="dishIcon" src={icon} alt="icon" /> : null}
      <div className="priceWrapper valign-wrapper">
        <div className="line"></div>
        <div className="price">
          <img src="/assets/icons/ils.svg" alt="ils icon" />
          <span className="priceText">{price}</span>
        </div>
        <div className="line"></div>
      </div>
      </div>
    </div>
  </div>) : (<div className={`card ${cardClass} z-depth-0`}>
    <div className="card-image">
      <img src={img} alt={name} />
    </div>
    <div className="card-content">
      <span className="card-title center-align">{name}</span>
      {chef ? <span className="card-title center-align">{chef}</span> : null}
      <p></p>
    </div>
  </div>);
}

export default Card;