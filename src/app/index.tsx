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
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import Routes from "./routes";

function App() {
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new BackpackWalletAdapter()],
    []
  );

  const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);

  require("@solana/wallet-adapter-react-ui/styles.css");

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <HistoryRouter
            history={history as unknown as HistoryRouterProps["history"]}
          >
            <Routes />
          </HistoryRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
