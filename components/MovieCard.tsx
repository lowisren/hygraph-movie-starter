import React from "react";
import Link from 'next/link';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

type MovieCardProps = {
    Poster: string;
    alt: string;
    Title: string;
    Genre: string;
    Director: string;
    slug: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ Poster, Title, Genre, Director, slug }) => {
  return (
    <Link href={`/movie/${slug}`}>
        <Card className="py-4 my-1">
          <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
            <Image
              alt={Title}
              className="object-cover rounded-xl"
              src={Poster}
              width={270}
            />
            <h2 className="font-bold text-md">{Title}</h2>
            <p className="font-bold uppercase text-tiny">{Director}</p>
            <small className="text-default-500">{Genre}</small>
          </CardHeader>
          <CardBody className="py-2 overflow-visible">
          </CardBody>
        </Card>
    </Link>
  );
};

export default MovieCard;