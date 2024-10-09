import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';

import BaseLayout from '../../layouts/BaseLayout';

export const appRouter = createBrowserRouter([
   {
      element: <BaseLayout />,
      // errorElement: <ErrorPage />,
      children: [
         { path: '/', element: <MainPage /> },
         // { path: "/movie/:id", element: <MoviePage /> }
      ],
   },
]);
