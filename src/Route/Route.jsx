
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/khairul",
            element: <h1>khairul</h1>
        }

      ]
    },
  ]);
  export default router;