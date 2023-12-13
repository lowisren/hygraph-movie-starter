//Movie individual page: app/artist/[slug]/page.tsx
import Image from "next/image";
import MovieHero from "@/components/MovieHero";
import MuxPlayerComponent from "@/components/MuxPlayer";

async function getMovie(slug: string) {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;

if (!HYGRAPH_ENDPOINT) {
  throw new Error('HYGRAPH_ENDPOINT is not defined');
}
    const response = await fetch(HYGRAPH_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            query Movie($slug: String!) {
              movie(where: {slug: $slug}) {
                federateMovie {
                  __typename
                  data {
                    Actors
                    Director
                    Genre
                    Rated
                    Plot
                    Year
                    imdbID
                    Runtime
                    Poster
                    Title
                  }
                }
                id
                slug
                title
            }
          }`,
          variables: {
            slug: slug,
          },
        }),
      }
    );

    const data = await response.json();
    //console.log(data.data.movie);
    return data.data.movie
  }

  export default async function Movie({ params }: { params: { slug: string } }) {
    const movieData = await getMovie(params.slug);
    const playbackId = 'Y02pUdSHhkfAYvkrsM00ajHFIM02RGVeVH4gjHUKwDdeMs'
    return (
      <div className="p-10">
         <MuxPlayerComponent playbackId={playbackId} />
        <MovieHero 
          Title={movieData.federateMovie.data.Title}
          Plot={movieData.federateMovie.data.Plot}
          Poster={movieData.federateMovie.data.Poster}
          Actors={movieData.federateMovie.data.Actors}
          Genre={movieData.federateMovie.data.Genre}
          Director={movieData.federateMovie.data.Director}
          Rated={movieData.federateMovie.data.Rated}
          Runtime={movieData.federateMovie.data.Runtime}
          Year={movieData.federateMovie.data.Year}        
        />
      </div>
    );
  }