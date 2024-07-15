import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { MovieCardProps } from "@/types/types";
import Image from "next/image";

const MovieCard: React.FC<MovieCardProps> = ({
  Poster,
  moviePoster,
  Title,
  Genre,
  Director,
  slug,
}) => {
  return (
    <Link href={`/movie/${slug}`}>
      <Card className="p-2 my-8 md:flex md:flex-col">
        <CardHeader className="flex-col items-start md:flex md:flex-col">
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
