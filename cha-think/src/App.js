import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateMovieReview from "./CreateMovieReview";
import MovieReview from "./MovieReview";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [fetchMovieReviews, setFetchMovieReviews] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/movies`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setMovies(response.data.records);
    };
    getMovies();
  }, [fetchMovieReviews]);

  return (
    <div className="App">
      <h1>What-cha-Think</h1>
      <CreateMovieReview
        fetchMovieReviews={fetchMovieReviews}
        setFetchMovieReviews={setFetchMovieReviews}
      />
      {movies.map((movie) => (
        <MovieReview
          key={movie.id}
          movie={movie}
          fetchMovieReviews={fetchMovieReviews}
          setFetchMovieReviews={setFetchMovieReviews}
        />
      ))}
      <footer>2020 © Mika Nur</footer>
    </div>
  );
}

export default App;
