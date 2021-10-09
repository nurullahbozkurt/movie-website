import AsianMovies from "./components/AsianMovies";
import GialloMovies from "./components/GialloMovies";
import MoviesCollapse from "./components/MoviesCollapse";
import SixtysMovies from "./components/SixtysMovies";
import RouteAsian from "./route/RouteAsian";
import { Link, Route, Switch } from "react-router-dom";
import RouteGiallo from "./route/RouteGiallo";
import RouteSixtys from "./route/RouteSixtys";
import RouteReservation from "./route/RouteReservation";

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
          <Link to="/reservation" type="button" className="btn btn-danger">
            Reservation
          </Link>

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
            <Route exact path="/">
              <AsianMovies />
              <SixtysMovies />
              <GialloMovies />
            </Route>
            <Route path="/theBestAsianMovies">
              <RouteAsian />
            </Route>
            <Route path="/gialloMovies">
              <RouteGiallo />
            </Route>
            <Route path="/sixtysMovies">
              <RouteSixtys />
            </Route>
            <Route path="/reservation:id">
              <RouteReservation />
            </Route>
          </Switch>
        </div>
        {/* <!-- //// --> */}

        {/* <!-- ////// --> */}
      </div>
    </div>
  );
}

export default App;
