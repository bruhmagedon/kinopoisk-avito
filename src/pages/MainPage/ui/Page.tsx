import { MoviePanel } from "./MoviePanel/MoviePanel"

export const MainPage = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, []);

  return (
    <div className='flex-1 p-6'>
      <div className='gap gap-4'>
        {/* <Filters /> */}
        <MoviePanel />
      </div>
    </div>
  )
}
