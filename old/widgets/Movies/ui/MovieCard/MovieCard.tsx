// import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import type { Movie } from "old/entities/movies";
import type { SimilarMovie } from "old/entities/movies/model/MovieTypes";

interface MovieCardProps {
  movie: Movie | SimilarMovie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  // const [openPopover, setOpenPopover] = useState(false);

  // const navigate = useNavigate();

  // const triggers = {
  //   onMouseEnter: () => setOpenPopover(true),
  //   onMouseLeave: () => setOpenPopover(false)
  // };

  // const onNavigate = () => {
  //   navigate(`/movie/${movie.id}`);
  // };

  const cover = movie.poster?.url ?? "https://st.kp.yandex.net/images/no-poster.gif";
  return (
    <li className='relative h-[300px] w-full cursor-pointer'>
      <div>
        <img src={cover} alt='Фотография' className='h-full w-full rounded-2xl object-cover' />
      </div>
      {/* <div className='text-elipsis bg-panel-darker-bg z-30 flex max-w-[250px] items-center justify-center overflow-hidden rounded-lg border-[1px] border-gray-700 p-2 text-sm text-white'>
        {movie.name
          ? movie.name.replace(/\s/g, "") == ""
            ? movie.alternativeName
            : movie.name
          : movie.alternativeName || movie.enName}
      </div> */}
      {movie.rating?.kp ? (
        <div className='bg-input-bg absolute left-2 top-2 z-30 flex h-[30px] w-[30px] items-center justify-center rounded-lg border-[1px] border-white font-medium text-white'>
          {movie.rating.kp?.toFixed(1)}
        </div>
      ) : null}
    </li>
  );
};
