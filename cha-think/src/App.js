import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import List from "../src/components/List";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Links from "../src/components/Links";
import HomePage from "../src/components/HomePage";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [fetchMovieReviews, setFetchMovieReviews] = useState(false);
  const [television, setTelevision] = useState([]);
  const [fetchTelevisionReviews, setFetchTelevisionReviews] = useState(false);
  const [sports, setSports] = useState([]);
  const [fetchSportsReviews, setFetchSportsReviews] = useState(false);

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

  useEffect(() => {
    const getTelevision = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/television`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setTelevision(response.data.records);
    };
    getTelevision();
  }, [fetchTelevisionReviews]);

  useEffect(() => {
    const getSports = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/sports`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setSports(response.data.records);
    };
    getSports();
  }, [fetchSportsReviews]);

  return (
    <div className="App">
      <div>
        <Link to="/">
          <Header />
        </Link>
        <Links />
      </div>
      <Route exact path="/">
        <HomePage />
      </Route>
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
      <Footer />
    </div>
  );
}
export default App;
