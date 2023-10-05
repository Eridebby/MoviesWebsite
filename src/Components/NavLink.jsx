import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./MovieCard";
import {RiMovieFill} from "react-icons/ri";





function NavLink() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");



  useEffect(() => {

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=95a856459795b9df5e54a6476274b4ce`)
        if (!res.ok) throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        setMovies(data.results);
        console.log(data.results)
      } catch (err) {
        console.log(err.message)
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  },
    [query]
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-primary custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
           <RiMovieFill/> Cine
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movies
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/popularmovies">
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/nowplaying">
                      Now Playing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/upcomingmovies">
                      Upcoming
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/topratedmovies">
                      Top Rated
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TV Shows
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/populartv">
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/airtodaytv">
                      Air Today
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ontheair">
                      On TV
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/topratedtv">
                      Top Rated
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  People
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/popularpeople">
                      Popular People
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Trending">
                  Trending
                </Link>
              </li>
            </ul>

            <li className="nav-item">
              <Link className="nav-link text-white" to="#">
                SIGN UP
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <div className="nav">
        <div className="text">
          <h1 className="nav-heading">Welcome.</h1>
          <p className="nav-text">
            Millions of movies, TV Shows and people to discover. Explore now.
          </p>
        </div>

        <div className="input">
          <FaSearch id="search-icon" />
          <input
            placeholder="    Search for a movie, tv show, person ......"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />

        </div>
        <div></div>
      </div>
      {isLoading && <h3>Searching for your movie request......</h3>}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error &&  <List movies={movies} />  }

      <Outlet />
    </div>
  );
}

function List({ movies }) {
  return (
    <>
      <div className="container pb-2 px-3 ">
        {movies.map((movie, index) => {
          return <MovieCard key={index} {...movie} />;
        })}
      </div>
    </>
  );
}

function ErrorMessage({ message }) {
  return (

    <>
    <div class="alert alert-danger mt-5 text-center" role="alert">Error</div>
   
    </>
  );
}




export default NavLink;