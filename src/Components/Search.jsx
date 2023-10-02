import { Link } from 'react-router-dom';


const getPosterUrl = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
};

const SearchMovies = ({ poster_path, title, release_date }) => {

  return (
    <div className="pb-5 px-2 ">
      <div className="card" style={{ width: "10rem"}}>
        <img
          src={getPosterUrl(poster_path)}
          className="card-img-top image width-[150px] h-[225px] shadow-sm rounded-md"
          alt={poster_path}
        />
        <div className="card-body flex flex-col px-3 w-[150px]">
          <h6><Link className="card-text title font-small" style={{textDecoration: 'none',color: 'rgb(5,180,227)', }}>{title}</Link></h6>
          <p className="card-text font-normal">{release_date}</p>
        </div>
      </div>
    </div>
    
      
  );
};


  








export default SearchMovies;



// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import MovieBox from './MovieBox';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
// import { Logo } from '../images/index';
// import Footer from './Footer';

// const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3be97d6f1d7aa31ffff889715c42966b";
// const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=3be97d6f1d7aa31ffff889715c42966b&query";

// function Main() {
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setMovies(data.results);
//       });
//   }, []);

//   const searchMovie = async (e) => {
//     e.preventDefault();
//     console.log("Searching");
//     try {
//       const url = 'https://api.themoviedb.org/3/search/movie?api_key=3be97d6f1d7aa31ffff889715c42966b&query=${query}';
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       setMovies(data.results);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const changeHandler = (e) => {
//     setQuery(e.target.value);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div style={{ width: '100%'}}>
//       <div className="navbar navbar-dark" style={{ backgroundColor: "#032541" }}>
//         <div className="container-fluid">
//           <header className="head">
//             <img src={Logo} alt="" className="" />
//           </header>
//           <div className="d-flex align-items-center gap-3">
//             {isMenuOpen ? (
//               // Wrap the JSX elements in a parent div or fragment
//               <>
//                 <ul className="d-flex align-items-center gap-3">
//                   <li className="nav-item">
//                     <a className="nav-link text-white" href="/home">
//                       Home
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link text-white" href="/home">
//                       Pages
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link text-white" href="/about">
//                       About
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link text-white" href="/about">
//                       About
//                     </a>
//                   </li>
//                 </ul>
//                 <i
//                   className="hamburger-icon fas fa-bars text-white"
//                   onClick={toggleMenu}
//                 ></i>
//               </>
//             ) : (
//               // Render nothing when isMenuOpen is false
//               null
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="backimg">
//         <div className="back2 pt-5">
//           <h1 className="text-white">Welcome.</h1>
//           <br />
//           <h6 className="text-white">Millions of movies, TV shows, and people to discover. Explore now.</h6>
//           <br />
//           <Form onSubmit={searchMovie} autoComplete="off">
//             <Row className="mb-3">
//               <Col xs="9">
//                 <FormControl
//                   type="search"
//                   placeholder="Movie Search"
//                   aria-label="search"
//                   name="query"
//                   value={query}
//                   onChange={changeHandler}
//                 />
//               </Col>
//               <Col xs="3">
//                 <Button type="submit" className="rounded px-4 py-2 border-0 custom-button">
//                   Search
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </div>
//       </div>
//       <div>
//         {movies.length > 0 ? (
//           <div>
//             <div className="container pt-5" style={{ width: '1200px', margin:'0 auto'}}>
//               <div className="row">
//                 {movies.map((movieReq) => (
//                   <div key={movieReq.id} className="col-md-3">
//                     <MovieBox {...movieReq} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <Footer />
//           </div>
//         ) : (
//           <h2>Sorry!! No Movies Found</h2>
//         )}
//       </div>
//     </div>
//   );
// }

// // export default Main;