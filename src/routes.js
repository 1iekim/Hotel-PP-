import Catalog from "./pages/Catalog";
import Info from "./pages/Info";
import Main from "./pages/Main";
import Pension from "./pages/Pension";
import Posts from "./pages/Posts";
import { INFO_PAGE, MAIN_PAGE, PENSION_PAGE, POSTS_PAGE, ROOMS_PAGE } from "./utils/consts";


export const allRoutes = [
  {
    path: MAIN_PAGE,
    Component: Main
  },
  {
    path: INFO_PAGE,
    Component: Info
  },
  {
    path: ROOMS_PAGE,
    Component: Catalog
  },
  {
    path: POSTS_PAGE,
    Component: Posts
  },
  {
    path: PENSION_PAGE,
    Component: Pension
  }
]