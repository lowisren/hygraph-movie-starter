import React from "react";
import Link from 'next/link';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

type MovieCardProps = {
    Poster: string;
    alt: string;
    Title: string;
    Genre: string;
    Director: string;
    slug: string;
    moviePoster: {
      height: number;
      width: number;
      url: string;
    };
};

const MovieCard: React.FC<MovieCardProps> = ({ Poster, moviePoster, Title, Genre, Director, slug }) => {
  return (
    <Link href={`/movie/${slug}`}>
        <Card className="my-6 md:flex md:flex-col">
          <CardHeader className="flex-col items-start px-4 pt-2 pb-0 md:flex md:flex-col">
            <Image
              alt={Title}
              className="object-cover w-full rounded-xl min-h-[375px] max-h-[375px]"
              src={moviePoster && moviePoster.url ? moviePoster.url : Poster}
              width={300}
              height={400}
            />
          </CardHeader>
          <CardBody className="py-2 overflow-visible md:flex md:flex-col">
          <h2 className="font-bold text-md md:text-md">{Title}</h2>
            <p className="font-bold uppercase text-tiny md:text-xs">{Director}</p>
            <small className="text-default-500 md:text-base">{Genre}</small>
          </CardBody>
        </Card>
    </Link>
  );
};

export default MovieCard;