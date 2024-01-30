//Homepage with movies: app/page.js
import { title } from "@/components/primitives";
import { Movie } from "@/types/types";
import MovieCard from "@/components/MovieCard";

//Get all Movies

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

export default async function Movies() {
  const movies: Movie[] = await getMovies();
  //console.log(movies);
  return (
    <main className="flex flex-col justify-between">
      <section className="mb-32 text-center">
        <h1 className={title({ size: "lg" })}>
          Hygraphlix <span className="px-2 py-2 ">Movie Collection</span>
        </h1>
        <div className="grid my-8 w-px-5 lg:gap-xl-12 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          {movies.map((movie: Movie) => (
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
      </section>
    </main>
  );
}
