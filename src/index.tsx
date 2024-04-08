import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./style.css";
import App from "@/app/App";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
