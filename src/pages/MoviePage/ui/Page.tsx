import { useFetchMovieByIdQuery } from "@/entities/movies";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const MoviePage = () => {
  let { id } = useParams();

  const { data, isLoading } = useFetchMovieByIdQuery({ id });
  useEffect(() => {
    console.log(data, isLoading, id);
  }, [data]);

  return <div className="p-[24px] relative">Страница с фильмом</div>;
};
