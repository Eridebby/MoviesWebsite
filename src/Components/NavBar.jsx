import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";


const find = 'https://api.themoviedb.org/3/search/movie?api_key=95a856459795b9df5e54a6476274b4ce&query=${query}'



function NavBar (){
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState ([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("")
  const [isNavOpen, setIsNavOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  
  const handleSearch = (e) => {
      setSearch(e.target.value)
      
  }
  const fetchOneData = async () => {
      try {
          setError("");
          setIsLoading(true);
          const response = await axios.get(find)
          if (!response.ok) throw new Error("something happen")
          const data = await response.json();
          setMovies(data.results)
          console.log(data.results)
          setError("")
      } catch (err) {
          setError(err.message)
      }
  }
  const searchButton = () => {
      fetchOneData(search)
  }

 

    return(
        <>
           <nav className="navbar navbar-expand-lg bg-body-primary custom-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">Navbar</Link>
    <button className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
     onClick={toggleNav}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <Link className="nav-link text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Movies
          </Link>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/popularmovies">Popular</Link></li>
            <li><Link className="dropdown-item" to="/nowplaying">Now Playing</Link></li>
            <li><Link className="dropdown-item" to="/upcomingmovies">Upcoming</Link></li>
            <li><Link className="dropdown-item" to="/topratedmovies">Top Rated</Link></li>
          </ul>
        </li>
      
        <li className="nav-item dropdown">
          <Link className="nav-link text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            TV Shows
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/populartv">Popular</Link></li>
            <li><Link className="dropdown-item" to="/airtodaytv">Air Today</Link></li>
            <li><Link className="dropdown-item" to="/ontheair">On TV</Link></li>
            <li><Link className="dropdown-item" to="/topratedtv">Top Rated</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            People
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/popularpeople">Popular People</Link></li>
            
          </ul>
          </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Trending">Trending</Link>
        </li>
        
      </ul>
    
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} value={search}/>
        <button className="btn btn-outline-success" type="submit" onClick={searchButton}>Search</button>
      </form>

            <div>
                {isLoading && <h2>Find product......</h2>}
                {error && <p>Error</p>}
                {!isLoading && !error && <List movies={ movies } />}
            </div>
    </div>
  </div>
</nav>
<Outlet/>

        </>
    )
}




function List ({movies}) {
  return (
      <>
        <div className="container pb-5 px-3 ">
          {movies.map((movie, index) => {
            return <MovieCard key={index} {...movie} />;
          })}
        </div>
      </>
    );

}

export default NavBar;