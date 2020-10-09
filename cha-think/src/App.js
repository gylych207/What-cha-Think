import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateReview from "./CreateReview";
import Review from "./Review";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [fetchReviews, setFetchReviews] = useState(false);

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
  }, [fetchReviews]);

  return (
    <div className="App">
      <h1>What-cha-Think</h1>
      <CreateReview
        fetchReviews={fetchReviews}
        setFetchReviews={setFetchReviews}
      />
      {movies.map((movie) => (
        /* Review component has a prop called review with a value of review (from map) */
        <Review
          key={movie.id}
          movie={movie}
          fetchReviews={fetchReviews}
          setFetchReviews={setFetchReviews}
        />
      ))}
    </div>
  );
}

export default App;
