import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const SingleMovie = ({ titel, poster_path, vote_average, release_date, overview }) => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="card text-center bg-secondary mb-3 center-img "  style={{ maxWidth: '16rem' }}>
      <div className="card center-img">
        <img className="card-img-top img-thumbnail center-img" src={API_IMG + poster_path} style={{ width: '14rem' }}  alt="Movie Poster" />
        <div className="card-body">
        <button
  type="button"
  className="rounded px-5 py-3 border-0" 
  style={{ backgroundColor: '#13C9BE', color: 'white' }}
  onClick={handleShow}
>
  View More
</button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{titel}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="card-img-top" style={{ width: '14rem' }} src={API_IMG + poster_path} alt="Movie Poster" />
              <h3>{titel}</h3>
              <h4>IMDb: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br />
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button  className="rounded px-3  py-3 border-0" // Add px-3 for horizontal padding
  style={{ backgroundColor: '#13C9BE', color: 'white' }} onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}














export default SingleMovie;