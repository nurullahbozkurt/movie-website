import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../contexts/context";

import MovieBox from "./MovieBox";

function AsianMovies() {
  const { asianMovies, getRandomAsianMovies } = useContext(MoviesContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getRandomAsianMovies(8));
  }, [asianMovies, getRandomAsianMovies]);

  return (
    <div>
      <div
        style={{ marginTop: "25px" }}
        className="card-group"
        id="asian-movies"
      >
        <div
          style={{ marginBottom: 0 }}
          className="col-12 d-flex  justify-content-center  border border-4 bg-dark border-danger rounded"
        >
          <h6 style={{ color: "#dc3444" }}>ASIAN MOVIES</h6>
        </div>
        {movies.map((movie, index) => (
          <MovieBox movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AsianMovies;
