import React from "react";
import Typical from "react-typical";
import "../App.css";

function HomePage(props) {
  return (
    <h3 className="typical-text">
      Leave a Review for...{" "}
      <Typical
        loop={Infinity}
        wrapper="b"
        steps={["Sports", 2000, "Movies", 2000, "Television", 2000]}
      />
    </h3>
  );
}
export default HomePage;

//courtesy of https://catalinmiron.github.io/react-typical
