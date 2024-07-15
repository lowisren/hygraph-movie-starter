//Landing page for movies by genre: app/page.js

import MovieCard from "@/components/MovieCard";
import { subtitle, title } from "@/components/primitives";

//Get all Movie data from Hygraph & OMDB
async function getMovies() {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
  if (!HYGRAPH_ENDPOINT) {
    throw new Error("HYGRAPH_ENDPOINT is not defined");
  }
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query Movies {
        movies(first: 100) {
            federateMovie {
              data {
                Title
                Poster
                Genre
                Director
              }
            }
            id
            slug
            moviePoster {
              height
              width
              url
            }
          }
      }`,
    }),
  });
  const json = await response.json();
  return json.data.movies;
}
// Declare Movie interface
interface Movie {
  federateMovie: {
    data: {
      Genre: string;
      Title: string;
      Poster: string;
      Director: string;
    };
  };
  id: string;
  slug: string;
  moviePoster: {
    height: number;
    width: number;
    url: string;
  };
}
export default async function Movies() {
  const movies: Movie[] = await getMovies();
  //console.log(movies);
  const genres = [
    ...new Set(
      movies.map((movie: Movie) => movie.federateMovie.data.Genre.split(",")[0])
    ),
  ];
  return (
    <section className="flex flex-col justify-between mb-32 text-center">
      <h1 className={title({ size: "xl" })}>Movies by Genres</h1>
      {genres.map((genre) => (
        <div className="text-left" key={genre}>
          <h2 className={`${subtitle()} text-lg font-bold my-8`}>{genre}</h2>
          <div className="grid px-5 lg:gap-xl-12 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            {movies
              // filter movies by genre and use the first genre in the list to group movie cards
              .filter(
                (movie) =>
                  movie.federateMovie.data.Genre.split(",")[0] === genre
              )
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  Title={movie.federateMovie.data.Title}
                  Poster={movie.federateMovie.data.Poster}
                  moviePoster={movie.moviePoster}
                  alt={movie.federateMovie.data.Title}
                  Genre={movie.federateMovie.data.Genre}
                  Director={movie.federateMovie.data.Director}
                  slug={movie.slug}
                />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
