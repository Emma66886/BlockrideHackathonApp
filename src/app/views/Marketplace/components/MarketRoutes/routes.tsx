import { RouteObject } from "react-router-dom";
import Home from "app/views/Home";
import Marketplace from "app/views/Marketplace"
import Header from "app/components/Header";

const routesObject: RouteObject[] = [
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Marketplace",
        element: <Marketplace />,
      }
    ],
  },
];

export default routesObject;
