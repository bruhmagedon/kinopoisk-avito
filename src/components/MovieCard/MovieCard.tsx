import React from "react";

import type { Movie } from "@/entities/movies";
import type { Genre } from "@/entities/movies/model/MovieTypes";
import { cn } from "@/lib/utils";

import { CardFooter, CardHeader } from "../ui/card";

interface MovieCardProps extends React.ComponentProps<"div"> {
  movie: Movie;
}
const MovieCard = React.forwardRef<HTMLDivElement, MovieCardProps>(
  ({ className, movie, children, ...props }, ref) => {
    const fetchedBackgroundImg = movie?.backdrop?.url;

    return (
      <div
        ref={ref}
        style={{ "--image-url": `url(${fetchedBackgroundImg})` }}
        className={cn(
          "relative flex h-[400px] rounded-lg border bg-[image:var(--image-url)] bg-cover",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MovieCard.displayName = "Card";
const MovieCardHeader = CardHeader;

interface MovieCardContentProps extends React.ComponentProps<"div"> {
  genres?: Genre[] | null;
}
const MovieCardContent = React.forwardRef<HTMLDivElement, MovieCardContentProps>(
  ({ className, genres, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute bottom-4 left-4 flex w-[70%] flex-col gap-4 rounded-lg bg-black/50 p-3",
        className
      )}
      {...props}
    >
      <ul className='flex gap-5'>
        {genres?.map(({ name }) => (
          <li className={"rounded-lg bg-white px-3 py-1 text-sm font-medium text-black"} key={name}>
            {name}
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
);
MovieCardContent.displayName = "CardContent";

interface MovieCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  name?: string | null;
}
const MovieCardTitle = React.forwardRef<HTMLParagraphElement, MovieCardTitleProps>(
  ({ className, name, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-3xl font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {name}
    </h3>
  )
);
MovieCardTitle.displayName = "CardTitle";

interface MovieCardContentDescription extends React.ComponentProps<"p"> {
  description?: string | null;
}
const MovieCardDescription = React.forwardRef<HTMLParagraphElement, MovieCardContentDescription>(
  ({ className, description, children, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm font-semibold text-white", className)} {...props}>
      {description}
    </p>
  )
);
MovieCardDescription.displayName = "CardDescription";

const MovieCardFooter = CardFooter;

export {
  MovieCard,
  MovieCardContent,
  MovieCardDescription,
  MovieCardFooter,
  MovieCardHeader,
  MovieCardTitle
};
