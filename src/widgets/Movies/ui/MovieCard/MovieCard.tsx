import { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { MovieIdApiResponse } from "@/entities/movies";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: MovieIdApiResponse;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [openPopover, setOpenPopover] = useState(false);
  const navigate = useNavigate();

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  const onNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <>
      <li
        className="w-full h-[300px] cursor-pointer relative"
        onClick={onNavigate}
      >
        <Popover
          open={openPopover}
          handler={setOpenPopover}
          placement="bottom"
          animate={{
            mount: { scale: 1, y: -3 },
            unmount: { scale: 0, y: 0 },
          }}
        >
          <PopoverHandler {...triggers}>
            <img
              src={movie.poster.url}
              alt={"Фотография"}
              className="object-cover w-full h-full rounded-2xl"
            />
          </PopoverHandler>
          {/* Текст при наведении */}
          <PopoverContent className="z-50 max-w-[250px] text-elipsis overflow-hidden h-[25px]">
            {movie.name}
          </PopoverContent>
        </Popover>
        <div className="absolute z-50111 w-[30px] h-[30px] bg-red-300 left-0 top-0 ">
          {movie.rating.kp.toFixed(1)}
        </div>
      </li>
    </>
  );
};
