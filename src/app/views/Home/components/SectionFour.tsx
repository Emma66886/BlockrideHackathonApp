import { styled } from "twin.macro";

export default function SectionFour() {
  return (
    <Container>
      <div className="content">
        <div>
          <p>Over</p>
          <h1>170+</h1>
          <p>vehicles financed</p>
        </div>
        <div>
          <p>Total Investment</p>
          <h1>$1.2m</h1>
          <p>recorded on Blockride</p>
        </div>
        <div>
          <p>Carbon Offset</p>
          <h1>500</h1>
          <p>tC02E</p>
        </div>
        <div>
          <p>Partners</p>
          <h1>30+</h1>
          <p>Mobility brand | Individuals</p>
        </div>
        <div>
          <p>Unique</p>
          <h1>100k+</h1>
          <p>Fractional Owners</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: #141414;
  margin-top: 100px;

  > .content {
    padding: 80px 116px;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    gap: 110px;

    div {
      text-align: center;

      p {
        font-size: 16px;
        font-weight: 600;
      }

      h1 {
        font-size: 40px;
        font-weight: 500;
        margin: 20px 0;
      }
    }
  }
`;
