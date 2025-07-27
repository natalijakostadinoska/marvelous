import React from 'react';
import './PlanCard.scss';

const PlanCard = ({ name, price, features, isFeatured }) => {
  return (
    <div className={`plan-card ${isFeatured ? 'featured' : ''}`}>
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <ul>
        {features.map((feature, i) => (
          <li key={i} className={feature.included ? 'included' : 'excluded'}>
            {feature.included ? '✔' : '❌'} {feature.text}
          </li>
        ))}
      </ul>
      {isFeatured && <button className="choose-btn">Choose Plan</button>}
    </div>
  );
};

export default PlanCard;
