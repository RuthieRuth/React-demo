import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import List from "../Pages/List";
import About from "../Pages/About";
import ErrorPage from "../Pages/Error";
import Singlepage from "../Pages/Singlepage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <List /> },
        { path: "/:id", element: <Singlepage /> },
        { path: "/about", element: <About /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

/* import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import List from "../Pages/Root";
import About from "../Pages/Root";
import ErrorPage from "../Pages/Error";

export const router = createBrowserRouter ( [ 
    {path: '/', element: <Root/>, errorElement: <ErrorPage/>}
    {path: '/list', element: <List/> },
    {path: '/about', element: <About/> },

]); */
