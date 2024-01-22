import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface Movie {
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
}
