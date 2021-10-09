import { useContext, useEffect, useState } from "react";

import { MoviesContext } from "../contexts/context";
function RouteAsian() {
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
          <div
            style={{ paddingBottom: 0, paddingTop: "45px", padding: "5px" }}
            className="col-sm-6 col-md-6 col-lg-3 col-xl-3"
            key={index}
          >
            <div style={{ height: "100%" }} className="card p-2">
              <div className="img">
                <img src={movie.image} className="card-img-top" alt="..." />
              </div>

              <div className="card-body p-2">
                <h5 className="card-title">{movie.title} </h5>
                <p className="card-text">{movie.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between pb-0 mb-0 ">
                <small className="text-muted">{movie.fullTitle}</small>
                <button className="btn btn-danger position-relative ">
                  IMDB
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    {movie.imDbRating}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RouteAsian;
