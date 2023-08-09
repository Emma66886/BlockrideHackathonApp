import { styled } from "twin.macro";

import Crystal from "app/assets/images/crystal.png";

export default function SectionThree() {
  return (
    <Container>
      <div className="content">
        <div className="columnOne">
          <h1>How does this work?</h1>
          <p>
            Bus hire purchase refers to a financing arrangement where a company
            or individual can acquire a bus by paying regular instalments over a
            specified period. During this period, the company or individual is
            considered the hirer of the bus, and ownership is transferred to
            them upon the completion of all payments.{" "}
          </p>
          <img src={Crystal} alt="blockride" />
        </div>
        <div className="columnTwo">
          <div>
            <p>01</p>
            <p>
              Blockride pools funds from individual contributors and matches
              them to fund bus acquisitions for reputable fleet managers on hire
              purchase contract.
            </p>
          </div>
          <div>
            <p>02</p>
            <p>
              Contributors receives an NFT that serves as a representation of
              their percentage share in the bus acquisition. This NFT ensures
              transparency and verifiable proof of their ownership stake in the
              project.
            </p>
          </div>
          <div>
            <p>03</p>
            <p>
              Fractional ownership extends the opportunity for a wide range of
              stakeholders and investors to participate in the bus hire purchase
              investment.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 72px 116px 0 116px;
  border: 2px solid #29231b;
  padding: 49px 49px 0 49px;
  border-radius: 10px;
  @media screen and (max-width: 691px) {
    margin: 72px 50px 0 50px;
  }

  @media screen and (max-width: 458px) {
    margin: 30px 20px 0 20px;
    padding: 49px 20px 0 20px;
  }
  > .content {
    display: flex;
    gap: 48px;

    @media screen and (max-width: 785px) {
      flex-wrap: wrap;
      padding-bottom: 30px;
    }

    > .columnOne {
      margin-top: 16px;
      h1 {
        font-size: 36px;
        font-weight: 700;
      }

      p {
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        color: #9ea5ac;
      }

      img {
        margin-top: 44px;
      }
    }

    > .columnTwo {
      display: flex;
      flex-direction: column;
      gap: 21px;
      > div {
        p {
          font-size: 12px;
          font-weight: 700;
        }

        p:first-of-type {
          color: #ff991e;
        }

        p:last-of-type {
          color: #9ea5ac;
        }
      }
    }
  }
`;
