import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";

import type { MovieIdApiResponse } from "@/entities/movies";
import type { SimilarMovie } from "@/entities/movies/model/MovieTypes";

interface MovieCardProps {
  movie: MovieIdApiResponse | SimilarMovie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [openPopover, setOpenPopover] = useState(false);

  const navigate = useNavigate();

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false)
  };

  const onNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };

  const cover = movie.poster?.url ?? "https://st.kp.yandex.net/images/no-poster.gif";
  return (
    <>
      <li className='relative h-[300px] w-full cursor-pointer' onClick={onNavigate}>
        <Popover
          open={openPopover}
          handler={setOpenPopover}
          placement='bottom'
          animate={{
            mount: { scale: 1, y: -3 },
            unmount: { scale: 0, y: 0 }
          }}
        >
          <PopoverHandler {...triggers}>
            <img src={cover} alt='Фотография' className='h-full w-full rounded-2xl object-cover' />
          </PopoverHandler>
          <PopoverContent className='text-elipsis z-30 flex max-w-[250px] items-center justify-center overflow-hidden rounded-lg border-[1px] border-gray-700 bg-panel-darker-bg p-2 text-sm text-white'>
            {movie.name
              ? movie.name.replace(/\s/g, "") == ""
                ? movie.alternativeName
                : movie.name
              : movie.alternativeName || movie.enName}
          </PopoverContent>
        </Popover>
        {movie.rating?.kp ? (
          <div className='absolute left-2 top-2 z-30 flex h-[30px] w-[30px] items-center justify-center rounded-lg border-[1px] border-white bg-input-bg font-medium text-white'>
            {movie.rating.kp?.toFixed(1)}
          </div>
        ) : null}
      </li>
    </>
  );
};
