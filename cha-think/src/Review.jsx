import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Review(props) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    setDeleted(true);
    setTimeout(async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${props.type}/${props.item.id}`;
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      props.setFetchItems(!props.fetchItems);
      setDeleted(false);
    }, 2000);
  };

  return (
    <div className="container">
      <div className="review">
        <h3>{props.item.fields.title}</h3>
        <h4>Rating: {props.item.fields.rating}</h4>
        <h5>{props.item.fields.opinion}</h5>
        <button onClick={handleDelete}>{deleted ? "Deleted" : "Delete"}</button>
      </div>
    </div>
  );
}

export default Review;
