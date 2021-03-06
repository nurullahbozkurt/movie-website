import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import generateRandomNumber from "../utils/random-number";

export const MoviesContext = React.createContext();
export const MovieContext = () => useContext(MoviesContext);

function ContextProvider(props) {
  const [moviesGiallo, setMoviesGiallo] = useState([]);
  const [asianMovies, setAsianMovies] = useState([]);
  const [sixtys, setSixty] = useState([]);
  const [asianLoading, setAsianLoading] = useState(false);
  const [gialloLoading, setGialloLoading] = useState(false);
  const [sixtysLoading, setSixtysLoading] = useState(false);

  const [randomMovies, setRandomMovies] = useState([]);

  useEffect(() => {
    (async () => {
      await loadMovies();
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Request->
  const getAsian = async () => {
    setAsianLoading(false);
    const responseAsian = await axios.get(
      //"https://imdb-api.com/en/API/IMDbList/k_gwphfuyl/ls004285275"
      `${process.env.REACT_APP_API_URL}/movies?category=asian`
    );
    setAsianMovies(responseAsian.data);
    setAsianLoading(true);
    return responseAsian.data;
  };

  const getSixtys = async () => {
    setSixtysLoading(false);
    const responseSixtys = await axios.get(
      //"https://imdb-api.com/API/IMDbList/k_gwphfuyl/ls095521504"
      `${process.env.REACT_APP_API_URL}/movies?category=sixtys`
    );
    setSixty(responseSixtys.data);
    setSixtysLoading(true);
    return responseSixtys.data;
  };

  const getGiallo = async () => {
    setGialloLoading(false);
    const responseGiallo = await axios.get(
      //"https://imdb-api.com/API/IMDbList/k_gwphfuyl/ls093462543"
      `${process.env.REACT_APP_API_URL}/movies?category=giallo`
    );
    setMoviesGiallo(responseGiallo.data);
    setGialloLoading(true);
    return responseGiallo.data;
  };

  const loadMovies = async () => {
    const results = await Promise.all([getAsian(), getSixtys(), getGiallo()]);

    const selectedMovies = [
      ...getRandomMovies(1, results[0]),
      ...getRandomMovies(1, results[1]),
      ...getRandomMovies(2, results[2]),
    ];

    setRandomMovies(selectedMovies);
  };

  // Randoms->
  const getRandomMovies = (count = 4, movies) => {
    if (!movies?.length) {
      return [];
    }
    const copyAsianMovies = [...movies];

    const newAsianMovies = [];

    for (let i = 0; i < count; i++) {
      const randomAsian = generateRandomNumber(0, copyAsianMovies.length - 1);
      newAsianMovies.push(copyAsianMovies[randomAsian]);
      copyAsianMovies.splice(randomAsian, 1);
    }

    return newAsianMovies;
  };

  const getRandomAsianMovies = (count = 4) => {
    return getRandomMovies(count, asianMovies);
  };

  const getRandomSixtys = (count = 4) => {
    return getRandomMovies(count, sixtys);
  };

  const getRandomGialloMovies = (count = 4) => {
    return getRandomMovies(count, moviesGiallo);
  };

  // const [movies, setMovies] = useState([]);
  // const randomIds = movies.map((movie) => movie.id);
  // const randomId = randomIds[generateRandomNumber(0, 8)];
  // console.log("mov", movies);

  // useEffect(() => {
  //   setMovies(getRandomAsianMovies(8));
  // }, [asianMovies]);

  return (
    <MoviesContext.Provider
      value={{
        moviesGiallo,
        asianMovies,
        sixtys,
        getRandomGialloMovies,
        getRandomAsianMovies,
        getRandomSixtys,
        randomMovies,
        sixtysLoading,
        asianLoading,
        gialloLoading,
        // movies,
        // randomId,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}

export default ContextProvider;
