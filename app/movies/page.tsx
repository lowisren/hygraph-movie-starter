//Homepage with movies: app/page.js

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
        movies {
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
          }
      }`,
    }),
  });
  const json = await response.json();
  return json.data.movies;
}

export default async function Movies() {
  const movies = await getMovies();0
  console.log(movies);
  return (
    <main className="flex flex-col justify-between">
      <section className="mb-32 text-center">
        <h2 className="my-12 text-5xl font-bold">
          Hygraphlix{" "}
          <span className="px-2 py-2 ">Movie Collection</span>
        </h2>
        <div className="grid px-5 lg:gap-xl-12 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          {movies.map(
            (movie: {
              id: string;
              federateMovie: { data: { Title: string; Poster: string; alt: string; Genre: string; Director:string } };
              slug: string;
            }) => (
              <MovieCard
                key={movie.id}
                Title={movie.federateMovie.data.Title}
                Poster={movie.federateMovie.data.Poster}
                alt={movie.federateMovie.data.Title}
                Genre={movie.federateMovie.data.Genre}
                Director={movie.federateMovie.data.Director}
                slug={movie.slug}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}
