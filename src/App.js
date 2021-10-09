import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import GialloMovies from "./components/GialloMovies";
import SixtysMovies from "./components/SixtysMovies";
import BestAsianMovies from "./pages/BestAsianMovies";
import Navigation from "./components/shared/Navigation";
import MoviesCollapse from "./components/MoviesCollapse";

function App() {
  return (
    <div>
      <MoviesCollapse></MoviesCollapse>
      <Navigation />

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
      </div>
    </div>
  );
}

export default App;
