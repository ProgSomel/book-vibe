
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ContactUs from "../Pages/ContactUs/ContactUs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
          path: '/pagesToRead',
          element: <PagesToRead></PagesToRead>,
          loader: ()=>fetch('../books.json'),
        },
        {
          path: "/aboutPage",
          element: <AboutPage></AboutPage>
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>
        }

      ]
    },
  ]);
  export default router;