import Movie from "./Movie";

export default function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie, i) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
