import { useEffect, useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { MovieIdApiResponse } from "@/entities/movies";
import { useLocation, useNavigate } from "react-router-dom";
import { SimilarMovie } from "@/entities/movies/model/MovieTypes";

interface MovieCardProps {
  movie: MovieIdApiResponse | SimilarMovie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [openPopover, setOpenPopover] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  const [queries, setQueries] = useState<string[]>([]);

  useEffect(() => {
    // Сохраняем текущий запрос в состоянии компонента
    setQueries((prevQueries) => [...prevQueries, location.search]);

    const handlePopState = () => {
      const prevQuery = queries[queries.length - 2];
      if (prevQuery) {
        window.history.pushState(null, "", prevQuery);
      }
    };

    window.history.pushState(null, "", location.pathname + location.search);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location.search, queries]);

  const onNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };

  const cover =
    movie.poster.url ?? "https://st.kp.yandex.net/images/no-poster.gif";
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
              src={cover}
              alt={"Фотография"}
              className="object-cover w-full h-full rounded-2xl"
            />
          </PopoverHandler>
          <PopoverContent className="z-30 rounded-lg max-w-[250px] flex justify-center items-center text-elipsis overflow-hidden  text-white bg-panel-darker-bg">
            {movie.name == "" ? "Нет данных" : movie.name}
          </PopoverContent>
        </Popover>
        {movie.rating?.kp ? (
          <div className="absolute z-30 w-[30px] h-[30px] bg-input-bg border-[1px] border-white text-white font-medium left-2 top-2 rounded-lg flex items-center justify-center">
            {movie.rating.kp?.toFixed(1)}
          </div>
        ) : null}
      </li>
    </>
  );
};
