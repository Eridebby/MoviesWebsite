import Home from './Components/Home';
import NavLink from './Components/NavLink';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import NowPlaying from './Components/NowPlaying';
import SingleMoviePage, { loadersinglemovie } from './Components/SingleMoviePage';
import Trending from './Components/Trending';
import NavBar from './Components/NavBar';
import PopularMovies from './Components/PopularMovies';
import TopRatedMovies from './Components/TopRatedMovies';
import UpcomingMovies from './Components/UpcomingMovies';
import AirTodayTv from './Components/AirTodayTv';
import PopularTv from './Components/PopularTv';
import OnTheAir from './Components/OnTheAir';
import TopRatedTv from './Components/TopRatedTv';
import People from './Components/People';
import Footer from './Components/Footer';








const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLink />,
    children: [
      {
        index: true,
        element: <Home />
        
      },
   
    ]

  },
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/nowplaying",
        element: <NowPlaying />

      },
      {
        path: "/movies/:id",
        element: <SingleMoviePage/>,
        loader: loadersinglemovie
      },
      {
        path: "/trending",
        element: <Trending />
      },
      {
        path: "/popularmovies",
        element: <PopularMovies />
      },
      {
        path: "/topratedmovies",
        element: <TopRatedMovies/>
      },
      {
        path: "/upcomingmovies",
        element: <UpcomingMovies />
      },
      {
        path: "/airtodaytv",
        element: <AirTodayTv />
      },
      {
        path: "/populartv",
        element: <PopularTv />
      },
      {
        path: "/ontheair",
        element: <OnTheAir />
      },
      {
        path: "/topratedtv",
        element: <TopRatedTv />
      },
      {
        path: "/popularpeople",
        element: <People />
      },

    ]

  },

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
