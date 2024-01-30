import React from "react";
import { MovieHeroProps } from "@/types/types";

const MovieHero: React.FC<MovieHeroProps> = ({
  Title,
  Plot,
  Actors,
  Genre,
  Director,
  Rated,
  Runtime,
  Year,
}) => {
  return (
    <div className="flex flex-col gap-10 p-10 md:flex-row">
      <h1 className="mb-10 text-6xl font-bold">{Title}</h1>
      <div>
        <p className="mb-6 text-xl">
          <span className="text-3xl font-bold">Plot: </span> {Plot}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold">Actors: </span>
          {Actors}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold">Director: </span>
          {Director}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold">Genre: </span>
          {Genre}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold">Rated: </span> {Rated}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold">Runtime: </span>
          {Runtime}
        </p>
        <p className="text-lg">
          <span className="text-lg font-bold">Year: </span>
          {Year}
        </p>
      </div>
    </div>
  );
};

export default MovieHero;
