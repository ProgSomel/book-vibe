
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

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
        },
        {
          path: "/listedBooks",
          element: <ListedBooks></ListedBooks>,
          loader:()=> fetch('../books.json'),
        }

      ]
    },
  ]);
  export default router;