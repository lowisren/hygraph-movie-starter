import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import MovieCard from "@/components/MovieCard";

//Get featured Movies

async function getFeaturedMovies() {
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
		  movies(first: 8) {
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

export default async function Home() {
  const movies = await getFeaturedMovies();
  //console.log(movies);
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="justify-center inline-block max-w-lg text-center">
          <h1 className={title({ color: "violet", size: "jumbo" })}>
            HYGRAPHlix&nbsp;
          </h1>
          <br />
          <h2 className={title({ size: "sm" })}>The cinematic wonderland</h2>
          <h2 className={subtitle({ class: "mt-4" })}>
            Watch movies with your friends and family
          </h2>
        </div>

        <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="flat">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
      <div className="flex flex-col justify-between">
        <section className="mb-32 text-center">
          <h2 className={title({ size: "lg" })}>Top 8 Movies</h2>
          <div className="grid px-5 mt-4 lg:gap-xl-12 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            {movies.map(
              (movie: {
                id: string;
                federateMovie: {
                  data: {
                    Title: string;
                    Poster: string;
                    alt: string;
                    Genre: string;
                    Director: string;
                  };
                };
                slug: string;
                moviePoster: {
                  height: number;
                  width: number;
                  url: string;
                };
              }) => (
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
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
}
