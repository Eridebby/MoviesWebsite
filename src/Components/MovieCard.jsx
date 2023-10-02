// import { Link } from 'react-router-dom';

// const getPosterUrl = (posterpath) => {
//   return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
// };

// const MovieCard = ({ poster_path, title, release_date }) => {

//   return (
//     <div className="pb-5 px-2 ">
//       <div className="card" style={{ width: "10rem"}}>
//         <img
//           src={getPosterUrl(poster_path)}
//           className="card-img-top image width-[150px] h-[225px] shadow-sm rounded-md"
//           alt={poster_path}
//         />
//         <div className="card-body flex flex-col px-3 w-[150px]">
//           {/* <h6 className="card-text title font-small">{title}</h6> */}
//           <h6><Link className="card-text title font-small" to="/Single" style={{textDecoration: 'none',color: 'rgb(5,180,227)', }}>{title}</Link></h6>
//           <p className="card-text font-normal">{release_date}</p>
//         </div>
//       </div>
//     </div>

//   );
// };

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// const API_IMG = "https://image.tmdb.org/t/p/w500/";

// const MovieCard = ({ title, poster_path, vote_average, release_date, overview, backdrop_path }) => {

//   const [show, setShow] = useState(false);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   return (
// <div className="card text-center bg-secondary mb-3 center-img "  style={{ maxWidth: '16rem', margin: '10px', border: "0"}} >
//   <div className="card center-img ">
//     <img className="card-img-top img-thumbnail center-img" src={API_IMG + poster_path} style={{ width: '14rem' }}  alt="Movie Poster" />
//     <br/>
//     <h6><Link className="card-text title font-small"  onClick={handleShow} style={{textDecoration: 'none',color: 'rgb(5,180,227)', }}>{title} </Link></h6>
//     <br/>
//     <h6>{release_date}</h6>

//     <div>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton style={{fontSize: "10px"}}>
//           {/* <Modal.Title>{title}</Modal.Title> */}
//         </Modal.Header>
//         <Modal.Body>
//           <img className="card-img-top" style={{ width: '14rem', height: '200px' }} src={API_IMG +backdrop_path } alt="Movie Poster" />
//           <h5>{title}</h5>
//           <h5>IMDb: {vote_average}</h5>
//           <h5>Release Date: {release_date}</h5>
//           <br />
//           <h6>Overview</h6>
//           <p>{overview}</p>
//         </Modal.Body>

//       </Modal>
//     </div>
//   </div>
// </div>

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
              {/* <Modal.Title>{title}</Modal.Title> */}
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
