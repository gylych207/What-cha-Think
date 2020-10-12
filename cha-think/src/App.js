import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Review from "./Review";
import List from "./List";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [fetchMovieReviews, setFetchMovieReviews] = useState(false);
  const [television, setTelevision] = useState([]);
  const [fetchTelevisionReviews, setFetchTelevisionReviews] = useState(false);
  const [sports, setSports] = useState([]);
  const [fetchSportsReviews, setFetchSportsReviews] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/movies`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setMovies(response.data.records);
    };
    getItems();
  }, [fetchMovieReviews]);

  return (
    <div className="App">
      <div>
        <header>What-cha-Think</header>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/television">Television</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
        </ul>
      </div>
      <Route path="/movies">
        <List
          type="movies"
          items={movies}
          setItems={setMovies}
          fetchItems={fetchMovieReviews}
          setFetchItems={setFetchMovieReviews}
        />
      </Route>
      <Route path="/television">
        <List
          type="television"
          items={television}
          setItems={setTelevision}
          fetchItems={fetchTelevisionReviews}
          setFetchItems={setFetchTelevisionReviews}
        />
      </Route>
      <Route path="/sports">
        <List
          type="sports"
          items={sports}
          setItems={setSports}
          fetchItems={fetchSportsReviews}
          setFetchItems={setFetchSportsReviews}
        />
      </Route>
      <footer>2020 © Mika Nur</footer>
    </div>
  );
}
export default App;
