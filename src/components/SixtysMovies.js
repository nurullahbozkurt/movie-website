import React from "react";
import { MoviesContext } from "../contexts/context";
import { useContext, useState, useEffect } from "react";

function SixtysMovies() {
  const { sixtys, getRandomSixtys } = useContext(MoviesContext);
  const [siktysMovies, setSixtysMovies] = useState([]);

  useEffect(() => {
    setSixtysMovies(getRandomSixtys(8));
  }, [sixtys, getRandomSixtys]);

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
        {siktysMovies.map((sixty, index) => (
          <div
            style={{ paddingBottom: 0, padding: "5px" }}
            className="col-sm-6 col-md-4 col-lg-3 col-xl-3"
            key={index}
          >
            <div style={{ height: "100%" }} className="card p-2">
              <div className="img">
                <img src={sixty.image} className="card-img-top" alt="..." />
              </div>
              <div className="card-body p-2">
                <h5 className="card-title">{sixty.title}</h5>
                <p className="card-text">{sixty.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{sixty.fullTitle}</small>
                <button className="btn btn-danger position-relative ">
                  IMDB
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    {sixty.imDbRating}
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

export default SixtysMovies;
