import { useWallet } from "@solana/wallet-adapter-react";
import { styled } from "twin.macro";
import Modal from "./Modal";

interface Props {
  open: boolean;
  closeModal: () => void;
}

export default function ConnectWallet(props: Props) {
  const { select, wallets, publicKey, disconnect } = useWallet();

  const { open, closeModal } = props;
  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        title={publicKey ? "Disconnect Wallet" : "Connect Wallet"}
      >
        {!publicKey ? (
          <Container>
            {wallets.filter((wallet) => wallet.readyState === "Installed")
              .length > 0 ? (
              wallets
                .filter((wallet) => wallet.readyState === "Installed")
                .map((wallet, i) => {
                  return (
                    <List
                      key={wallet.adapter.name}
                      onClick={() => select(wallet.adapter.name)}
                    >
                      <img
                        src={wallet.adapter.icon}
                        alt={wallet.adapter.name}
                      />
                      <p>{wallet.adapter.name}</p>
                    </List>
                  );
                })
            ) : (
              <p>No wallets found</p>
            )}
          </Container>
        ) : (
          <Disconnect>
            <p>{publicKey.toBase58()}</p>
            <button onClick={disconnect}>Disconnect wallet</button>
          </Disconnect>
        )}
      </Modal>
    </>
  );
}

const Container = styled.div`
  padding: 20px 30px 20px 30px;
  display: flex;
`;

const Disconnect = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    width: 100%;
  }

  > button {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
    padding: 8px;
    border-radius: 5px;
    background: linear-gradient(145deg, #ff991e 0%, #df0000 100%);
    box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
      0px 4px 8px -2px rgba(16, 24, 40, 0.1);
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.14);

  img {
    width: 115.042px;
    height: 115.042px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
  }
`;
