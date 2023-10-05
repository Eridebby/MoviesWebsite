import MovieCard from "./MovieCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";
import { Link } from 'react-router-dom';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



const api =
  'https://api.themoviedb.org/3/trending/all/day?api_key=95a856459795b9df5e54a6476274b4ce&language=en-US';

const Trending = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get(api).then((res) => res.data),
  });

  if (isLoading) return <Loader loader />;
  if (error) return " An error has occurred" + error.message;


  return (
    <>
      <PlayingList movies={data.results} />
    </>
  );
};

function PlayingList({ movies }) {
  return (
    <>
      {/* <div className="container pb-2 px-1 ">
        {movies.map((movie, index) => {
          return (
            <div className="card" key={index} style={{width: "10rem", margin: "10px"}}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
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
      </div> */}
      <div className="" style={{margin:'auto', width:'88%'}}>
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <Card sx={{ maxWidth: 325 }} className="col-4  m-3">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/movies/${movie.id}`} className="btn btn-dark">
                    see overview
                  </Link>
                </CardActions>
              </Card>
            );
          })}
        </div>
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

export default Trending;

