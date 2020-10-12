import React, { useState } from "react";
import axios from "axios";

function MovieReview(props) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    setDeleted(true);
    setTimeout(async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/movies/${props.movie.id}`;
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      props.setFetchMovieReviews(!props.fetchMovieReviews);
      setDeleted(false);
    }, 2000);
  };

  return (
    <div className="review">
      <h3>{props.movie.fields.title}</h3>
      <h4>{props.movie.fields.rating}</h4>
      <h5>{props.movie.fields.opinion}</h5>
      <button onClick={handleDelete}>{deleted ? "Deleted" : "Delete"}</button>
    </div>
  );
}

export default MovieReview;
