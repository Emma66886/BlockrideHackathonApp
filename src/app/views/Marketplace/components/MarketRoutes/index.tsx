import { useRoutes } from "react-router-dom";

import routesObject from "./routes";

export default function Routes() {
  const routes = useRoutes(routesObject);

  return routes;
}
