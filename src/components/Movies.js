import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h3>Name: {movie.name}</h3>
            <p> Times:{movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movies.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            </div>
        ))}
    </div>
  );
};

export default Movies;
