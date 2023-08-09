import { styled } from "twin.macro";

import Solana from "app/assets/images/solana.png";
import MagicEden from "app/assets/images/magic-eden.png";
import { ReactComponent as Illustration } from "app/assets/images/work-illustration.svg";

export default function SectionTwo() {
  return (
    <Container>
      <div className="header-container">
        <div className="header">
          <p>Working with the best in the industry</p>
          <div>
            <img src={Solana} alt="solana" />
            <img src={MagicEden} alt="magic-eden" />
          </div>
        </div>
      </div>

      <div className="main">
        <Illustration />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .header-container {
    padding: 22px 100px;
    @media screen and (max-width: 747px) {
      padding: 0 20px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 33px;
    background: #141414;
    border: 1px solid #ff991e;
    border-radius: 5px;
    margin-top: 36px;

    @media screen and (max-width: 669px) {
      padding: 30px 20px;
    }

    @media screen and (max-width: 950px) {
      img {
        width: 100px;
      }
    }

    @media screen and (max-width: 523px) {
      padding: 0;
      background: transparent;
      border: none;
    }

    @media screen and (max-width: 471px) {
      display: none;
    }

    div {
      display: flex;
      gap: 36px;
    }
    p {
      color: #ffffff;
      font-size: 16px;
      font-weight: 500;

      @media screen and (max-width: 754px) {
        font-size: 12px;
      }
    }
  }

  > .main {
    display: flex;
    justify-content: center;
    margin-top: 72px;

    @media screen and (max-width: 600px) {
      margin-top: 30px;
    }

    @media screen and (max-width: 465px) {
      margin-top: 0;
    }

    svg {
      @media screen and (max-width: 599px) {
        padding: 0 30px;
      }
    }
  }
`;
