import React, { useEffect, useState } from "react";
import "../css/reservation.css";
import Seat from "../components/Seat";
import { useReservation } from "../contexts/reservation";
import createPartition from "../utils/create-partition";
import { useParams } from "react-router-dom";
import axios from "axios";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function Reservation() {
  const { id } = useParams();
  const { seats, results } = useReservation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadMovie = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/movies/${id}`
    );
    setMovie(response.data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  if (loading) {
    return <div style={{ paddingTop: 50 }}>Loading...</div>;
  }
  const alert = (e) => {
    alertify.alert(
      "Have a nice watch",
      `Purchased Seat: ${results.length}  Amount Paid: ${
        results.length * 20
      } € `,
      function () {
        alertify.success("Ok");
      }
    );
  };

  return (
    <div className="fakeBody">
      <div
        style={{
          margin: 0,
          marginTop: "100px",
          backgroundColor: "black",
          height: "100%",
        }}
        className="row container-part d-flex justify-content-center"
      >
        <div style={{ height: "25rem", width: "19rem" }} className="col-3 film">
          <div style={{ height: "100%" }} className="card">
            <img
              style={{ height: "70%", width: "100%" }}
              src={movie.image}
              className="card-img-top"
              alt={"..."}
            />
            <div style={{ padding: "2px" }} className="card-body">
              <h6 className="card-title fs-6">{movie.title}</h6>
              <p className="card-text fs-6">{movie.description}</p>
            </div>
            <button onClick={alert} className="btn btn-danger">
              BUY
            </button>
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
