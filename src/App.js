import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import GialloMovies from "./components/GialloMovies";
import SixtysMovies from "./components/SixtysMovies";
import BestAsianMovies from "./pages/BestAsianMovies";
import MoviesCollapse from "./components/MoviesCollapse";

function App() {
  return (
    <div>
      <MoviesCollapse></MoviesCollapse>

      {/* <!-- Collapse finish --> */}
      {/* <!-- Navbar start --> */}

      <nav id="navigation" className=" navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="row  nav" role="tablist">
            <li className="col-3 nav-item">
              <a
                className="nav-link link-secondary fw-bolder link-danger"
                href="/"
              >
                HOME
              </a>
            </li>

            <li className="col-3 nav-item">
              <a className="nav-link link-secondary" href="/#asian-movies">
                Asian Movies
              </a>
            </li>
            <li className="col-3 nav-item">
              <a className="nav-link link-secondary" href="#sixtys-movies">
                60's Movies
              </a>
            </li>
            <li className="col-3 nav-item">
              <a className="nav-link link-secondary" href="#giallo-movies">
                Giallo Movies
              </a>
            </li>
          </ul>
        </div>

        <div
          style={{ width: "100%", marginTop: "9px" }}
          className="d-flex justify-content-center border border-danger rounded"
        >
          <h6
            style={{
              color: "#dc3444",
              marginBottom: 0,
            }}
          >
            MOST VIEWED
          </h6>
        </div>
      </nav>

      {/* <!-- Navbar Finish --> */}
      {/* <!-- Container Start --> */}

      <div style={{ marginTop: "90px" }} className="container-fluid ">
        <div className="row" data-bs-offset="0" tabIndex="0">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/the-best-asian-movies" component={BestAsianMovies} />
            <Route path="/giallo-movies" component={GialloMovies} />
            <Route path="/sixtys-movies" component={SixtysMovies} />
            <Route path="/reservation/:id" component={Reservation} />
          </Switch>
        </div>
        {/* <!-- //// --> */}

        {/* <!-- ////// --> */}
      </div>
    </div>
  );
}

export default App;
