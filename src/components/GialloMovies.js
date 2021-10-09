import React from "react";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../contexts/context";
import MovieBox from "./MovieBox";

function GialloMovies() {
  const { moviesGiallo, getRandomGialloMovies } = useContext(MoviesContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getRandomGialloMovies(8));
  }, [moviesGiallo, getRandomGialloMovies]);

  return (
    <div>
      <div
        style={{ paddingTop: "110px" }}
        className="card-group "
        id="giallo-movies"
      >
        <div className="col-12 d-flex  justify-content-center  border border-4 bg-dark border-danger rounded">
          <h6 style={{ color: "#dc3444" }}>GIALLO MOVIES</h6>
        </div>
        {movies.map((movie, index) => (
          <MovieBox movie={movie} key={index} />
        ))}
      </div>

      {/* <button onClick={() => test()}>test</button> */}
    </div>
  );
}

export default GialloMovies;
