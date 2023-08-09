import { RouteObject } from "react-router-dom";
import Home from "app/views/Home";
import Header from "app/components/Header";

const routesObject: RouteObject[] = [
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default routesObject;
