import React from "react";
import { useReservation } from "../contexts/reservation";

function Seat({ number, selected, reserved }) {
  const { clickQuery } = useReservation();
  const click = (e) => {
    if (reserved) {
      alert("Koltuk Dolu");
    }
    clickQuery(number);
    console.log(selected);
    console.log(reserved);
  };

  return (
    <div>
      <div
        onClick={click}
        className={`seat ${selected ? "selected" : ""} ${
          reserved ? "reserved" : ""
        }`}
      >
        <p className="number">{number}</p>
      </div>
    </div>
  );
}
export default Seat;
