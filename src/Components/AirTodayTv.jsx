import { useQuery } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";
import { Link} from 'react-router-dom';
import axios from "axios";
import Footer from '../Components/Footer';




const api =
'https://api.themoviedb.org/3/tv/airing_today?api_key=95a856459795b9df5e54a6476274b4ce&language=en-US';

const AirTodayTv= () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get(api).then((res) => res.data),
  });

  if (isLoading) return <Loader loader />;
  if (error) return " An error has occurred" + error.message;
  

  return (
    <>
      <PlayingList movies={data.results} />
      <Footer/>
    </>
  );
};

function PlayingList({ movies }) {
  return (
    <>
      <div className="container pb-5 px-3 ">
        {movies.map((movie, index) => {
          return (
            <div className="card" key={index} style={{width: "11rem", margin: "10px"}}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">
                 {movie.vote_count}
                </p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                  More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Loader(loader) {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
}

export default AirTodayTv;
