import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";
import SingleMovie from "./SingleMovie";
function SingleMoviePage(){
    const {id} = useParams();
    const movieId = id;
    const SingleMovies =useLoaderData()
    const newMovie = [];
    newMovie.push(SingleMovies)
    return( 
        <div>
            <List movies ={newMovie}/>
        </div>
    )
}


export async function loadersinglemovie({params}) {
  const id = params.id;
  // https://api.themoviedb.org/3/movie/343611?api_key=95a856459795b9df5e54a6476274b4ce
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=95a856459795b9df5e54a6476274b4ce`)
    if(!response.ok){

    }
    const data = await response.json()
    console.log(data)
    return(data)
}

function List ({movies}) {
  return (
      <>
        <div className="container pb-5 px-3 ">
          {movies.map((movie, index) => {
            return <SingleMovie key={index} {...movie} />;
          })}
        </div>
      </>
    );

}



export default SingleMoviePage;