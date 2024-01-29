import {SVGProps} from "react";
import { ThemeProviderProps } from "next-themes/dist/types";



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
export type MovieHeroProps = {
  Title: string;
  //Poster: string;
  Plot: string;
  Actors: string;
  Director: string;
  Genre: string;
  Rated: string;
  Runtime: string;
  Year: string;
}

export type MovieCardProps = {
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
export interface MuxPlayerProps {
  playbackId: string;
}

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

