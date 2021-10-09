import React from "react";
import randomNumber from "../utils/random-number";

import { useContext, useState } from "react";

export const ReservationContext = React.createContext();

export const useReservation = () => useContext(ReservationContext);
const partitionSeat = () => {
  const newSeat = [];
  for (let i = 0; i < 40; i++) {
    newSeat.push({
      number: i,
      selected: false,
      reserved: i % randomNumber(0, 20) === 0,
    });
  }
  return newSeat;
};

function ReservationProvider(props) {
  const [seats, setSeats] = useState(partitionSeat());

  const clickQuery = (number) => {
    setSeats(
      seats.map((seat) => {
        if (seat.number !== number) {
          return seat;
        }
        seat.selected = !seat.selected;
        return seat;
      })
    );
  };

  const results = seats.filter((seat) => seat.selected);
  console.log(results);

  return (
    <ReservationContext.Provider
      value={{ seats, partitionSeat, clickQuery, results }}
    >
      {props.children}
    </ReservationContext.Provider>
  );
}

export default ReservationProvider;
