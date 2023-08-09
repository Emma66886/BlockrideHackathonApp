import {
  HistoryRouterProps,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import history from "./lib/history";

import Routes from "./routes";

function App() {
  return (
    <HistoryRouter
      history={history as unknown as HistoryRouterProps["history"]}
    >
      <Routes />
    </HistoryRouter>
  );
}

export default App;
