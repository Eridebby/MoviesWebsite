import React from "react";
import { Link } from "react-router-dom";

const getPosterUrl = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
};

const SearchMovies= ({ poster_path, title, vote_count }) => {
 

  return (
    <div className="pb-5 px-2 ">
      <div className="card" style={{ width: "10rem" }}>
        <img
          src={getPosterUrl(poster_path)}
          className="card-img-top image width-[150px] h-[225px] shadow-sm rounded-md"
          alt={poster_path}
        />
        <div className="card-body flex flex-col px-3 w-[150px]">
        <h5 className="card-title">{title}</h5>
                <p className="card-text">
                 {vote_count}
                </p>
          <h6>
          <Link to={`/movies`} className="btn btn-primary">
                  More
                </Link>
          </h6>
        </div>

      
      </div>
    </div>
  );
};



  export default SearchMovies;