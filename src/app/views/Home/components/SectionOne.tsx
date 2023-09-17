import { useWallet } from "@solana/wallet-adapter-react";
import ConnectWallet from "app/components/ConnectWallet";
import useModalState from "app/hooks/useModalState";
import { styled } from "twin.macro";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useNavigate } from "react-router-dom";

export default function SectionOne() {
  const { isOpen, closeModal } = useModalState();
  const { publicKey } = useWallet();

  const navigate = useNavigate();

  return (
    <Container>
      <div className="content">
        <h1>
          <span>Securely</span> invest in bus hire purchase
        </h1>
        <p>Own a piece of your commute!</p>
        <div className="actions">
          {publicKey ? null : (
            <WalletMultiButton>Connect Wallet</WalletMultiButton>
          )}

          <button onClick={() => navigate("/Marketplace")}>Marketplace</button>
        </div>
        <div className="pill_list">
          <div>
            <h3>Total Investment Recorded</h3>
            <p>$ 1,258,085</p>
          </div>
          <div>
            <h3>Total Revenue Distributed</h3>
            <p>$ 1,258,085</p>
          </div>
        </div>
      </div>
      <ConnectWallet open={isOpen} closeModal={closeModal} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  @media screen and (max-width: 458px) {
    margin-top: 50px;
  }
  > .content {
    > h1 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 19px;
      text-align: center;
      padding: 20px;

      > span {
        color: #ff991e;
      }
    }

    > p {
      color: #9ea5ac;
      font-size: 24px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 49px;
    }

    > .actions {
      justify-content: center;
      display: flex;
      gap: 15px;
      margin-bottom: 49px;

      button {
        font-size: 16px;
        font-weight: 500;
        padding: 8px;
        border-radius: 5px;
      }

      button:first-of-type {
        background: linear-gradient(145deg, #ff991e 0%, #df0000 100%);
        box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
          0px 4px 8px -2px rgba(16, 24, 40, 0.1);
      }
      button:last-of-type {
        background: transparent;
        border: 1px solid #ff991e;
        padding: 8px 20px;
      }
    }

    > .pill_list {
      justify-content: center;
      text-align: center;
      display: flex;
      gap: 24px;

      @media screen and (max-width: 444px) {
        gap: 10px;
      }

      > div {
        padding: 24px;

        @media screen and (max-width: 444px) {
          padding: 15px;
        }

        @media screen and (max-width: 390px) {
          padding: 10px;
        }

        h3 {
          font-size: 16px;
          font-weight: 700;

          @media screen and (max-width: 543px) {
            font-size: 12px;
          }
        }

        p {
          font-size: 16px;
          font-weight: 500;

          @media screen and (max-width: 543px) {
            font-size: 12px;
          }
        }
      }

      > div:first-of-type {
        border-radius: 20px;
        border: 2px solid #29231b;
        background: linear-gradient(
          123deg,
          rgb(255 153 30 / 64%) 0%,
          #000 79.96%
        );
      }

      > div:last-of-type {
        border-radius: 20px;
        border: 2px solid #29231b;
        background: linear-gradient(123deg, rgb(223 0 0 / 51%) 0%, #000 79.96%);
      }
    }
  }
`;
