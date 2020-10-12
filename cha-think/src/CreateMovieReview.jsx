import React, { useState } from "react";
import axios from "axios";

function CreateMovieReview(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [opinion, setOpinion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      rating,
      opinion,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/movies`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    props.setFetchMovieReviews(!props.fetchMovieReviews);
    setTitle("");
    setRating("");
    setOpinion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="rating">Rating:</label>
      <input
        name="rating"
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <label htmlFor="opinion">Opinion:</label>
      <input
        id="textboxid"
        name="opinion"
        type="text-area"
        value={opinion}
        onChange={(e) => setOpinion(e.target.value)}
      />
      <button type="submit">Review</button>
    </form>
  );
}

export default CreateMovieReview;
