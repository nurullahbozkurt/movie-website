import React from "react";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../contexts/context";

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
          <div
            style={{ paddingBottom: 0, padding: "5px" }}
            className="col-sm-6 col-md-6 col-lg-3 col-xl-3  "
            key={index}
          >
            <div style={{ height: "100%" }} className="card px-2 ">
              <div className="img">
                <img src={movie.image} className="card-img-top" alt="..." />
              </div>

              <h5 className="card-title">{movie.title}</h5>

              <p className="card-text">{movie.description}</p>

              <div className="card-footer d-flex justify-content-between pb-0 mb-0 ">
                <small className="text-muted">{movie.fullTitle}</small>
                <button className="btn btn-secondary position-relative ">
                  IMDB
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {movie.imDbRating}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <button onClick={() => test()}>test</button> */}
    </div>
  );
}

export default GialloMovies;
