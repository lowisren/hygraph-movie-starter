import React from "react";

type MovieHeroProps = {
        Title: string;
        Poster: string;
        Plot: string;
        Actors: string;
        Director: string;
        Genre: string;
        Rated: string;
        Runtime: string;
        Year: string;
}

const MovieHero: React.FC<MovieHeroProps> = ({ Title, Plot, Poster, Actors, Genre, Director, Rated, Runtime, Year }) => {
  return (
    <div className="flex flex-col gap-4 p-10 md:flex-row">
      <img src={Poster} alt={Title} className="w-64 h-auto md:w-96" />
      <div>
        <h1 className="mb-4 text-6xl font-bold">{Title}</h1>
        <p className="text-lg"><span className="text-xl font-bold">Plot: </span> {Plot}</p>
        <p className="text-lg"><span className="text-xl font-bold">Actors: </span>{Actors}</p>
        <p className="text-lg"><span className="text-xl font-bold">Director: </span>{Director}</p>
        <p className="text-lg"><span className="text-xl font-bold">Genre: </span>{Genre}</p>
        <p className="text-lg"><span className="text-xl font-bold">Rated: </span> {Rated}</p>
        <p className="text-lg"><span className="text-xl font-bold">Runtime: </span>{Runtime}</p>
        <p className="text-lg"><span className="text-xl font-bold">Year: </span>{Year}</p>
      </div>
    </div>
  );
};

export default MovieHero;