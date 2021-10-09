import React, { useEffect, useState } from "react";
import "../css/reservation.css";
import Seat from "../components/Seat";
import { useReservation } from "../contexts/reservation";
import createPartition from "../utils/create-partition";
import { useParams } from "react-router-dom";
import axios from "axios";

function Reservation() {
  const { id } = useParams();
  const { seats, results } = useReservation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie();
  }, [id]);

  const loadMovie = async () => {
    setLoading(true);
    const response = await axios.get(`http://localhost:3000/movies/${id}`);
    setMovie(response.data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  if (loading) {
    return <div style={{ paddingTop: 50 }}>Loading...</div>;
  }

  return (
    <div className="fakeBody">
      <div
        style={{ margin: 0, marginTop: "100px" }}
        className="row container-part d-flex justify-content-center"
      >
        <div className="col-3 film">
          <div className="card" style={{ width: "18rem", height: "24rem" }}>
            <img
              style={{ width: "18rem", height: "15rem" }}
              src={movie.image}
              className="card-img-top"
              alt={"..."}
            />
            <div className="card-body">
              <h5 className="card-title fs-5">{movie.title}</h5>
              <p className="card-text fs-6">{movie.description}</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="part">
            <div className="screen"></div>
          </div>
          {createPartition(seats, 8).map((row, i) => (
            <div className="part" key={i}>
              {row.map((seat, i) => (
                <Seat
                  number={seat.number}
                  selected={seat.selected}
                  reserved={seat.reserved}
                  key={i}
                />
              ))}
            </div>
          ))}

          <div className="part">
            <select
              style={{ width: "190px", marginTop: "10px" }}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Selected Movie</option>
              <option value="20">Movie 1</option>
              <option value="25">Movie 2</option>
              <option value="30">Movie 3</option>
            </select>
          </div>
          <ul className="info">
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat reserved"></div>
              <small>Reserved</small>
            </li>
            <li>
              <div className="seat"></div>
              <small>Null</small>
            </li>
          </ul>
          <p className="fs-6 fw-bolder text-secondary text-center">
            <span id="amount">{results.length * 20}</span>€ Paid for{" "}
            <span id="count">{results.length}</span> seat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
