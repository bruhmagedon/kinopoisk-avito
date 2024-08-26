import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"

import { appRouter } from "./app/AppRouter"
import { store } from "./app/store/store"

// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "@/app/store/store";
// import { appRouter } from "./app/AppRouter";
import "./style.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
)
