import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/MainPage";
import { MoviePage } from "@/pages/MoviePage";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movie/:id", element: <MoviePage /> },
    ],
  },
]);
