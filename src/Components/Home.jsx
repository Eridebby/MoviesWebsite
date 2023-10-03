import MovieCard from "./MovieCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { RotatingLines } from "react-loader-spinner";





const api = 'https://api.themoviedb.org/3/discover/movie?api_key=95a856459795b9df5e54a6476274b4ce&language=en-US';



const Home = () => {
  const { isLoading, error, data} = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
       axios.get(api).then((res) => res.data)
       
      
    
  })

  if (isLoading) return <Loader loader/>
  if (error) return ' An error has occurred' + error.message
  console.log(data.results)

 


 return (
    <> 
    <List movies = {data.results}/>
    </> 
 )
};


function List ({movies}) {
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

export default Home;
