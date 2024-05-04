import { useState } from "react";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import { tempMovieData } from "./data/tempMovieData";
import Logo from "./Components/Logo";
import Search from "./Components/Search";
import NumResults from "./Components/NumResults";
import ListBox from "./Components/ListBox";
import WatchedBox from "./Components/WatchedBox";
import MovieList from "./Components/MovieList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox />
      </Main>
    </>
  );
}
