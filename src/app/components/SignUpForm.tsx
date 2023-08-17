import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { styled } from "twin.macro";

export default function SignUpForm() {
  const { publicKey } = useWallet();

  const signUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div className="header">
        <h2>Get started with an account.</h2>
      </div>
      <form onSubmit={() => signUp}>
        <div>
          <label>Username</label>
          <input type="text" placeholder="Enter a username" required />
          <span>Username can’t be changed</span>
        </div>
        <div>
          <label>Wallet Address</label>
          <input type="text" readOnly placeholder={publicKey?.toBase58()} />
        </div>

        <button>Submit Profile</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 80px 50px 80px;

  > .header {
    h2 {
      font-size: 36px;
      font-weight: 600;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 30px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        color: #9ea5ac;
        font-size: 20px;
        font-weight: 400;
      }

      span {
        font-size: 14px;
        font-weight: 400;
        color: #9ea5ac;
      }

      input {
        padding: 15px 0 15px 15px;
        border-radius: 4px;
        background: #000;
        color: #9ea5ac;
        font-size: 16px;
        font-weight: 400;

        &:focus {
          outline: none;
        }
      }
    }

    > button {
      font-size: 16px;
      font-weight: 500;
      padding: 8px;
      border-radius: 5px;
      background: linear-gradient(145deg, #ff991e 0%, #df0000 100%);
      box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
        0px 4px 8px -2px rgba(16, 24, 40, 0.1);
    }
  }
`;
