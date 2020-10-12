import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
// import CreateReview from "./CreateReview";
// import Review from "./Review";
import List from "./List";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [fetchItems, setFetchItems] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/movies`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setItems(response.data.records);
    };
    getItems();
  }, [fetchItems]);

  return (
    <div className="App">
      <h1>What-cha-Think</h1>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Route path="/movies">
        <List
          items={movies}
          setItems={setMovies}
          fetchItems={fetchMovieReviews}
          setFetchItems={setFetchMovieReviews}
        />
      </Route>
      <footer>2020 © Mika Nur</footer>
    </div>
  );
}
export default App;

{
  /* <Route path="/television">
        <List
          items={television}
          setItems={setTelevision}
          fetchItems={fetchTelevisionReviews}
          setFetchItems={setFetchTelevisionReviews}
        />
      </Route>
      <Route path="/sports">
        <List
          items={sports}
          setItems={setSports}
          fetchItems={fetchSportsReviews}
          setFetchItems={setFetchSportsReviews}
        />
      </Route> */
}

{
  /* <Link to="/television">
          <a>Television</a>
        </Link>
        <Link to="/sports">
          <a>Sports</a>
        </Link> */
}
