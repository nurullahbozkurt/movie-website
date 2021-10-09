import React from "react";
import { MoviesContext } from "../contexts/context";
import { useContext, useState, useEffect } from "react";
import MovieBox from "../components/MovieBox";

function SixtysMovies() {
  const { sixtys, getRandomSixtys } = useContext(MoviesContext);
  const [siktysMovies, setSixtysMovies] = useState([]);

  useEffect(() => {
    setSixtysMovies(getRandomSixtys(sixtys.length - 1));
  }, [sixtys, getRandomSixtys]);

  return (
    <div>
      <div
        className="card-group"
        id="sixtys-movies"
        style={{ paddingTop: "40px" }}
      >
        <div className="col-12 d-flex  justify-content-center  border border-4 bg-dark border-danger rounded">
          <h6 style={{ color: "#dc3444" }}>ALL 60'S MOVIES</h6>
        </div>
        {siktysMovies.map((movie, index) => (
          <MovieBox movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SixtysMovies;
