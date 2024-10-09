import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from './app/providers/router/AppRouter';
import { ThemeProvider } from './app/providers/ThemeProvider/ThemeProvider';

import './app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
   // <Provider store={store}>
   <ThemeProvider>
      <RouterProvider router={appRouter} />
   </ThemeProvider>,
   // </Provider>
);
