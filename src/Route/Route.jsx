
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/book/:id',
            loader:()=> fetch('../books.json'),
            element: <BookDetails></BookDetails>,
        }

      ]
    },
  ]);
  export default router;