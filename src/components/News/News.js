import React from "react";
import "./News.css";

function News({ title, image }) {
  return (
    <figure className="news-container">
      <img
        className="news-container-image"
        src={image}
        alt="relevant image of the news"
      />
      <figcaption className="news-container-text">{title}</figcaption>
    </figure>
  );
}

export default News;
