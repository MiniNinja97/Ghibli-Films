import React from "react"
import ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router-dom"
import App from "./App"

import Films from "./components/FilmCard"
import Favorites from "./components/FavoriteFilms"

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      
      {
        path: "films",
        Component: Films
      },
      {
        path: "favorites",
        Component: Favorites
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
