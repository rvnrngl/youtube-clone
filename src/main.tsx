import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import { ErrorPage } from "./routes/ErrorPage";
import { Home } from "./routes/Home";
import { ShortsPage } from "./routes/ShortsPage";
import { SubsPage } from "./routes/SubsPage";
import { LibraryPage } from "./routes/LibraryPage";
import WatchPage from "./routes/WatchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shorts/:id",
        element: <ShortsPage />,
      },
      {
        path: "subscriptions",
        element: <SubsPage />,
      },
      {
        path: "library",
        element: <LibraryPage />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
