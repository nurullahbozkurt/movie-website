import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { MoviesContext } from "../contexts/context";

function MoviesCollapse() {
  const { randomMovies } = useContext(MoviesContext);

  return (
    <div>
      <div className="collapse fixed-top " id="navbarToggleExternalContent">
        <div
          className=" row bg-dark d-flex justify-content-around "
          style={{ paddingTop: "110px", paddingBottom: "15px" }}
        >
          <div
            id="pages"
            className="d-flex flex-column p-2 col-sm-4 col-md-12 col-lg-3 col-xl-3 "
          >
            <h5
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#dc3444",
              }}
            >
              <br />
              ALL MOVIES
            </h5>

            <Link
              to="/theBestAsianMovies"
              type="button"
              className="btn btn-outline-secondary "
            >
              The Best 150 Assian Movies
            </Link>
            <Link
              to="/gialloMovies"
              type="button"
              className="btn btn-outline-secondary m-1"
            >
              All Giallo Series
            </Link>
            <a
              href="/sixtysMovies"
              type="button"
              className="btn btn-outline-secondary"
            >
              All 60's Movies
            </a>
          </div>

          {randomMovies.map((m, i) => (
            <div
              key={i}
              className="card p-2 col-sm-6 col-md-3 col-lg-2 col-xl-2"
              style={{ height: "29rem" }}
            >
              <img src={m.image} className="card-img-top" alt="..." />
              <button className="btn btn-secondary position-relative ">
                IMDB
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {m.imDbRating}
                </span>
              </button>
              <div className="card-body p-0">
                <p className="card-text">{m.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesCollapse;
