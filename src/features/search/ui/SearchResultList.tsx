import { useNavigate } from "react-router-dom";

import type { Movie } from "@/entities/movies";

interface SearchResulListProps {
  data: Movie[];
}

export const SearchResulList = ({ data }: SearchResulListProps) => {
  const sortedData = [...data].sort((a, b) => {
    const aVotes = Number(a.votes?.kp);
    const bVotes = Number(b.votes?.kp || 0);

    return bVotes - aVotes;
  });

  return (
    <div className='flex h-full flex-col overflow-auto'>
      {sortedData.map((movie) => (
        <SearchResulCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export const SearchResulCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };

  const cover = movie.poster?.url ?? "https://st.kp.yandex.net/images/no-poster.gif";
  return (
    <div
      className='hover:bg-input-bg flex cursor-pointer gap-8 p-3 text-white'
      onClick={onNavigate}
    >
      <img src={cover} alt='Фотография' className='h-[50px] w-[35px] rounded-lg object-cover' />
      <div className='flex-1'>
        <p className='font-medium'>{movie.name}</p>
        <p className='text-sm text-gray-500'>{movie.alternativeName}</p>
      </div>
    </div>
  );
};
