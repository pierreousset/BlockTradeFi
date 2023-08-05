import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "./pages/ErrorPage";
import Root from "../pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
  },
]);

export default router;