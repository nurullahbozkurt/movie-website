import React from "react";
import { MoviesContext } from "../contexts/context";
import { useContext, useState, useEffect } from "react";
import MovieBox from "./MovieBox";

function SixtysMovies() {
  const { sixtys, getRandomSixtys, sixtysLoading } = useContext(MoviesContext);
  const [siktysMovies, setSixtysMovies] = useState([]);

  useEffect(() => {
    setSixtysMovies(getRandomSixtys(8));
  }, [sixtys, getRandomSixtys]);
  if (!sixtysLoading) {
    return (
      <>
        <div
          style={{
            marginTop: "150px",
            margin: "auto",
          }}
          class="spinner-border text-danger"
          role="status"
        >
          <span class="sr-only ">wait..</span>
        </div>
      </>
    );
  }

  return (
    <div>
      <div
        className="card-group"
        id="sixtys-movies"
        style={{ paddingTop: "110px" }}
      >
        <div className="col-12 d-flex  justify-content-center  border border-4 bg-dark border-danger rounded">
          <h6 style={{ color: "#dc3444" }}>60'S MOVIES</h6>
        </div>
        {siktysMovies.map((movie, index) => (
          <MovieBox movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SixtysMovies;
