import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const getPosterUrl = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
};

const MovieCard = ({ poster_path, title, release_date, backdrop_path, vote_average, overview }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="pb-5 px-2 ">
      <div className="card" style={{ width: "10rem" }}>
        <img
          src={getPosterUrl(poster_path)}
          className="card-img-top image width-[150px] h-[225px] shadow-sm rounded-md"
          alt={poster_path}
        />
        <div className="card-body flex flex-col px-3 w-[150px]">
          <h6>
            <Link
              className="card-text title font-small"
              onClick={handleShow}
              style={{ textDecoration: "none", color: "rgb(5,180,227)" }}
            >
              {title}
            </Link>
          </h6>
          <p className="card-text font-normal">{release_date}</p>
        </div>

        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ fontSize: "10px" }}>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={getPosterUrl(backdrop_path)}
                alt="Movie Poster"
              />
              <h5>{title}</h5>
              <h5>IMDb: {vote_average}</h5>
              <h5>Release Date: {release_date}</h5>
              <br />
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
