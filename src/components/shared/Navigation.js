const Navigation = () => (
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
          <a className="nav-link link-secondary fw-bolder link-danger" href="/">
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
);

export default Navigation;
