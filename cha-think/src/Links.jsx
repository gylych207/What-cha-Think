import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Links(props) {
  return (
    <section>
      <Link to="/sports">
        <img
          id="section-width"
          src="https://i.imgur.com/roPMovZ.png"
          alt="Sports"
        />
      </Link>
      <Link to="/movies">
        <img
          id="section-width"
          src="https://i.imgur.com/JCJMLNR.png"
          alt="Movies"
        />
      </Link>
      <Link to="/television">
        <img
          id="tv-section-width"
          src="https://i.imgur.com/Qo8TbSs.png"
          alt="Television"
        />
      </Link>
    </section>
  );
}
export default Links;
