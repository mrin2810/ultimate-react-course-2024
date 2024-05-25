import { useState } from "react";

import { tempMovieData } from "./data/tempMovieData";
import { tempWatchedData } from "./data/tempWatchedData";

import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Logo from "./Components/Logo";
import Search from "./Components/Search";
import NumResults from "./Components/NumResults";
import Box from "./Components/Box";
import MovieList from "./Components/MovieList";
import WatchedSummary from "./Components/WatchedSummary";
import WatchedMovieList from "./Components/WatchedMovieList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
