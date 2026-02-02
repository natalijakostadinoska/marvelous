import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config'; 
import './Movies.scss';

// We keep these as a "Fallback" in case the API call fails
const backupMovies = [
  { title: 'Black Widow', image: 'black-widow.jpg' },
  { title: 'Guardians of the Galaxy', image: 'guardians.jpg' },
  { title: 'Captain America', image: 'captain-america.jpg' },
  { title: 'Spider-Man', image: 'spiderman.jpg' },
  { title: 'Captain Marvel', image: 'captain-marvel.jpg' },
  { title: 'Black Panther', image: 'black-panther.jpg' },
];

export default function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [topMovies, setTopMovies] = useState([
    { title: 'Spider-Man', image: 'spiderman.jpg', views: '100k' },
    { title: 'Thor', image: 'thor.jpg', views: '100k' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This fetches from the Cloudflare Environment Variable VITE_API_URL
    fetch(`${CONFIG.API_URL}/movies`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setMovieList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("API not ready yet, using hardcoded fallback data.");
        setMovieList(backupMovies); // Use the list you already had
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading Movies...</div>;
  }

  return (
    <div className="movies-page">
      {/* Left Grid - Dynamic Content */}
      <div className="movie-grid">
        {movieList.map((movie, index) => (
          <div key={index} className="movie-card">
            {/* If you move images to Cloudflare R2 later, you change the src prefix here */}
            <img src={`/images/${movie.image}`} alt={movie.title} />
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Top Movies</h3>
          <div className="tabs">
            <button>Day</button>
            <span>|</span>
            <button>Week</button>
            <span>|</span>
            <button>Month</button>
          </div>
        </div>

        {topMovies.map((movie, index) => (
          <div key={index} className="top-movie">
            <img src={`/images/${movie.image}`} alt={movie.title} />
            <div className="info">
              <div className="title">{movie.title}</div>
              <div className="tabs">
                <button>Day</button>
                <span>|</span>
                <button>Week</button>
                <span>|</span>
                <button>Month</button>
              </div>
              <div className="views">
                <Eye size={14} />
                <span>{movie.views} Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}