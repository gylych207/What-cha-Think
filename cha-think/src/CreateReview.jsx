import React, { useState } from "react";
import axios from "axios";

function CreateReview(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [opinion, setOpinion] = useState("");

  const handleSubmit = async (e) => {
    // prevent page reload.
    e.preventDefault();
    // we have to make a fields object that holds the title, text and author
    const fields = {
      title,
      rating,
      opinion,
    };
    // make a POST request to our endpoint to create new data
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/movies`;
    // await axios.methodName(URL, request.body??, options)
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    // make another GET request?????
    props.setFetchReviews(!props.fetchReviews);
    // clear out our inputs so we can type something new in
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

export default CreateReview;
