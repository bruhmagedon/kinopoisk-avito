import type { Episode } from "@/entities/movies/model/MovieApiTypes"

interface SeriesCardProps {
  series: Episode
}

export const SeriesCard = ({ series }: SeriesCardProps) => {
  const { still } = series
  const cover = still.url ?? "https://st.kp.yandex.net/images/no-poster.gif"
  return (
    <>
      <li className='flex w-full cursor-pointer'>
        <img
          src={cover}
          alt='Фотография'
          className='h-[150px] w-[200px] rounded-2xl object-cover'
        />
        <p className='flex flex-1 items-center justify-center text-center'>{series.name}</p>
      </li>
    </>
  )
}
