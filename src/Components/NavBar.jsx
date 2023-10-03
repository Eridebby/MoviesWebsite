import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import SearchMovies from "./Search";





function NavBar (){
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState ([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("")

  // const [isNavOpen, setIsNavOpen] = useState(false);


  // const toggleNav = () => {
  //   setIsNavOpen(!isNavOpen);
  // };

  const handleSearch = (e) => {
      setSearch(e.target.value)
      
  }

  useEffect(() => {

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=95a856459795b9df5e54a6476274b4ce`)
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
    if (search.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies(search);
  },
    [search]
  );
// const searchButton = () => {
//     fetchMovies(search);
// }

 

    return(
        <>
           <nav className="navbar navbar-expand-lg bg-body-primary custom-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">Cine </Link>
    <button className={`navbar-toggler `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
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
        {/* <button className="btn btn-outline-success" type="submit" onClick={searchButton}>Search</button> */}
      </form>
    </div>
          
  </div>
</nav>
                <div>
                {isLoading && <h3>Find Trending Movies......</h3>}
                {error && <p>Error</p>}
                {!isLoading && !error && <List movies={ movies } />}
            </div>
<Outlet/>

        </>
    )
}




function List ({movies}) {
  return (
      <>
        <div className="container pb-5 px-3 ">
          {movies.map((movie, index) => {
            return <SearchMovies key={index} {...movie} />;
          })}
        </div>
      </>
    );

}


export default NavBar;