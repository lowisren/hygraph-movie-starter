//Movie individual page: app/artist/[slug]/page.tsx
import Image from "next/image";

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
    return (
      <div className="p-10 bg-gray-100">
      <div className="my-4">
        <Image src={movieData.federateMovie.data.Poster} alt={movieData.federateMovie.data.Title} width={200} height={300} />
      </div>
      <h1 className="text-2xl text-gray-700">{movieData.federateMovie.data.Title} </h1>
      <p className="text-gray-500">Plot: {movieData.federateMovie.data.Plot}</p>
      <p className="text-gray-500">Actors: {movieData.federateMovie.data.Actors}</p>
      <p className="text-gray-500">Director: {movieData.federateMovie.data.Director}</p>
      <p className="text-gray-500">Genre: {movieData.federateMovie.data.Genre}</p>
      <p className="text-gray-500">Rated: {movieData.federateMovie.data.Rated}</p>
      <p className="text-gray-500">Runtime: {movieData.federateMovie.data.Runtime}</p>
      <p className="text-gray-500">Year: {movieData.federateMovie.data.Year}</p>
    </div>
    );
}