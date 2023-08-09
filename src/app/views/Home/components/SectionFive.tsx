import { styled } from "twin.macro";

export default function SectionFive() {
  return (
    <Container>
      <div className="content">
        <h3>JOIN OUR NEWSLETTER</h3>
        <h1>Stay updated with all our offerings</h1>
        <h2>We promise we won’t spam you</h2>
        <form action="">
          <input type="email" placeholder="Your Email Address" />
          <button>Signup</button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  border: 2px solid #29231b;
  background: radial-gradient(
      3790.72% 487.51% at -2.66% 16.61%,
      #000 18.43%,
      #ff991e 100%
    ),
    radial-gradient(
      2162.23% 136.55% at -21.91% 28.13%,
      rgba(0, 0, 0, 0.2) 11.62%,
      rgba(223, 0, 0, 0.2) 76.77%
    );
  background-blend-mode: screen, normal;
  margin: 50px 116px 0 116px;

  @media screen and (max-width: 691px) {
    margin: 50px 50px 0 50px;
  }

  @media screen and (max-width: 458px) {
    margin: 30px 10px 0 10px;
  }
  > .content {
    padding: 53px 0 53px 49px;

    @media screen and (max-width: 458px) {
      padding: 53px 0 53px 29px;
    }
    h3 {
      font-size: 10px;
      font-weight: 600;
    }

    h1 {
      font-size: 36px;
      font-weight: 700;
    }

    h2 {
      font-size: 18px;
      font-weight: 400;
    }

    > form {
      display: flex;
      gap: 8px;
      margin-top: 27px;
      > input {
        border-radius: 5px;
        background: #fff;
        padding: 5px 20px;
        font-size: 14px;
        font-weight: 400;
        color: #9ea5ac;
        width: 29%;

        @media screen and (max-width: 831px) {
          width: 50%;
        }

        &:focus {
          outline: none;
        }
      }

      button {
        font-size: 16px;
        font-weight: 500;
        padding: 5px 30px;
        border-radius: 5px;
        border: 1px solid #ff991e;
        background: linear-gradient(315deg, #ff991e 0%, #df0000 100%);
      }
    }
  }
`;
