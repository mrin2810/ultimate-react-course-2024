import { useState } from "react";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import { tempMovieData } from "./data/tempMovieData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
