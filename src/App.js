import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  useEffect(function () {}, []);

  return (
    <div className="App">
      <Header>
        <Logo />
        <Search />
        <Lenght />
      </Header>

      <Main>
        <Box>
          <MoviesList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </div>
  );
}

function Header({ children }) {
  return <div>{children}</div>;
}

function Logo() {
  return <div>LOGO</div>;
}

function Search() {
  return (
    <div>
      <input placeholder="Search a movie" type="text" />
    </div>
  );
}

function Lenght() {
  return <div>Movies Length</div>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{isOpen && children}</div>

      <div>
        <button onClick={() => setIsOpen((is) => !is)}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
    </div>
  );
}

function Main({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
}

function MoviesList({ movies }) {
  return (
    <div>
      <div>
        <p>Searched Movies</p>
      </div>

      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

function Movie({ movie }) {
  // console.log(movie);

  return (
    <div>
      <div>
        <img style={{ width: "30px" }} alt="movie poster" src={movie.Poster} />
      </div>

      <div>
        <p>{movie.Title}</p>

        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMoviesList({ watched }) {
  // console.log();
  return (
    <div>
      <div>
        <p>Watched Movies</p>
      </div>
      {watched.map((movie) => (
        <WatchedList watched={movie} key={movie.imdbID} />
      ))}
    </div>
  );
}

function WatchedList({ watched }) {
  // console.log(movie);
  return (
    <div>
      <div>
        <img
          style={{ width: "30px" }}
          alt="movie poster"
          src={watched.Poster}
        />
      </div>

      <div>
        <p>{watched.Title}</p>

        <p>{watched.Year}</p>
      </div>
    </div>
  );
}
