import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "@/app/store/store";
// import { appRouter } from "./app/AppRouter";
import "./style.css";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app/AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
