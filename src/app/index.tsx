import {
  HistoryRouterProps,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import history from "./lib/history";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import {
  PhantomWalletAdapter,
  BackpackWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import Routes from "./routes";

function App() {
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new BackpackWalletAdapter()],
    []
  );

  const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <HistoryRouter
          history={history as unknown as HistoryRouterProps["history"]}
        >
          <Routes />
        </HistoryRouter>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
