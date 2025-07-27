import React from 'react';
import './ArticleCard.scss';

const ArticleCard = ({ title, date, description, image }) => {
  return (
    <div className="article-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="article-content">
        <h3>{title}</h3>
        <p className="date">{date}</p>
        <p className="description">{description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default ArticleCard;
