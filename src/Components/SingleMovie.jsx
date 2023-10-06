import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const SingleMovie = ({
  title,
  backdrop_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div className="singlepage">
      <div>
        <img
          className="card-img-top img-thumbnail center-img"
          src={API_IMG + backdrop_path}
          style={{ width: "14rem", height: "300px" }}
          alt="Movie Poster"
        />
      </div>
    
      <div>
        <h3>{title}</h3>
        <h4>IMDb: {vote_average}</h4>
        <h5>Release Date: {release_date}</h5>
        <br />
        <h6>Overview</h6>
        <p>{overview}</p>
        <Link to="/trending">Back</Link>
      </div>
    </div>
  );
};

export default SingleMovie;
