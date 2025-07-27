import React from 'react';
import './Articles.scss';
import ArticleCard from './ArticleCard';

const articleData = [
  {
    title: 'Iron Man',
    date: '2 May | 2008',
    description: `Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures, it is the first film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway.`,
    image: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
  },
  {
    title: 'Iron Man 2',
    date: '7 May | 2010',
    description: `Iron Man 2 is a 2010 American superhero film featuring the Marvel Comics character Iron Man. It is the sequel to 2008's Iron Man and the third film in the MCU. Directed by Jon Favreau and written by Justin Theroux, the film stars Robert Downey Jr., Gwyneth Paltrow, and Don Cheadle.`,
    image: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg',
  },
  {
    title: 'Iron Man 3',
    date: '3 May | 2013',
    description: `Iron Man 3 is a 2013 American superhero film based on the Marvel Comics character Iron Man. The film is a sequel to Iron Man and Iron Man 2 and the seventh film in the MCU. Directed by Shane Black, the film stars Robert Downey Jr. as Tony Stark.`,
    image: 'https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_FMjpg_UX1000_.jpg',
  },
];

const Articles = () => {
  return (
    <div className="articles-section">
      <h2>Articles</h2>
      <div className="articles-list">
        {articleData.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
