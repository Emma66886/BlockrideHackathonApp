import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import tw, { styled } from "twin.macro";
import Modal from "./Modal";

import { verifyWallet } from "app/api/auth/index";
import { useState } from "react";
import SignUpForm from "./SignUpForm";

interface Props {
  open: boolean;
  closeModal: () => void;
}

export default function VerifyModal(props: Props) {
  const { open, closeModal } = props;

  const [verify, setVerify] = useState<boolean>();

  const [signature, setSignature] = useState("");

  const { signMessage: sign, publicKey } = useWallet();

  const signMessage = () => {
    const message = new TextEncoder().encode(
      "Kindly sign this message, it cost no money!!!, just to verify ownership of this wallet!"
    );
    sign!(message)
      .then((res) => {
        // setSignature(bs58.encode(res));
        console.log(publicKey?.toBase58());
        setSignature(bs58.encode(res));
        verifyWallet(bs58.encode(res), publicKey?.toBase58() as string).then(
          () => setVerify(true)
        );
      })
      .catch((res) => console.log(res));
  };

  return (
    <Modal open={open} onClose={closeModal} tw="max-h-full">
      {verify ? (
        <SignUpForm signature={signature} closeModal={closeModal} />
      ) : (
        <ModalContent>
          <div>
            <h1>Verify Wallet</h1>
            <p>{publicKey?.toBase58()}</p>
          </div>

          <p>Verify Wallet to prove ownership. No SOL will be charged</p>
          <div className="action">
            <button onClick={closeModal}>Cancel</button>
            <button onClick={() => signMessage()}>Verify Wallet</button>
          </div>
        </ModalContent>
      )}
    </Modal>
  );
}

const ModalContent = styled.div`
  padding: 0 82px 34px 30px;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
    h1 {
      font-size: 30px;
      font-weight: 500;
    }

    p {
      background: #000;
      padding: 3px;
      width: 190px;
      font-size: 20px;
      font-weight: 600;
      color: #9ea5ac;
      margin-top: 4px;
      border-radius: 4px;

      ${tw`truncate`}
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    margin-top: 15px;
  }

  > .action {
    justify-content: space-between;
    display: flex;
    gap: 15px;
    margin-top: 20px;

    button {
      font-size: 16px;
      font-weight: 500;
      padding: 8px;
      border-radius: 5px;
    }

    button:last-of-type {
      background: linear-gradient(145deg, #ff991e 0%, #df0000 100%);
      box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
        0px 4px 8px -2px rgba(16, 24, 40, 0.1);
    }
    button:first-of-type {
      background: transparent;
      border: 1px solid #ff991e;
      padding: 8px 20px;
    }
  }
`;
