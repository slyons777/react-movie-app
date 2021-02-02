import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://image.freepik.com/free-vector/movie-time-neon-sign-popcorn-bucket-clapperboard-film-reel-poster_1262-13530.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img width="222" alt={`The movie named: ${movie.Title}`} src={poster} />
      </div>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
