import { useContext, useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";

import { MoviesContext } from "../contexts/context";
function BestAsianMovies() {
  const { asianMovies, getRandomAsianMovies } = useContext(MoviesContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getRandomAsianMovies(asianMovies.length - 1));
  }, [asianMovies, getRandomAsianMovies]);

  return (
    <div>
      <div
        style={{ marginTop: "40px" }}
        className="card-group"
        id="asian-movies"
      >
        <div className="col-12 d-flex  justify-content-center  border border-4 bg-dark border-danger rounded">
          <h6 style={{ color: "#dc3444" }}>The Best 150 Assian Movies</h6>
        </div>
        {movies.map((movie, index) => (
          <MovieBox movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default BestAsianMovies;
