import { styled } from "twin.macro";

import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../assets/icons/discord.svg";
import { ReactComponent as MagicEden } from "../assets/icons/magic-eden.svg";

export default function Footer() {
  return (
    <Container>
      <Logo />
      <p>© 2023 Blockride. All Rights Reserved.</p>
      <p>
        <Twitter />
        <Discord />
        <MagicEden />
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 49px 100px;
  margin-top: 30px;

  @media screen and (max-width: 921px) {
    padding: 49px 20px;
  }

  > svg {
    width: 164.6px;
    height: 30px;
    @media screen and (max-width: 799px) {
      width: 100px;
      heigth: 12px;
    }
  }

  p {
    color: inherit;
    font-weight: 400;
    font-size: 16px;

    @media screen and (max-width: 799px) {
      font-size: 16px;
    }

    @media screen and (max-width: 427px) {
      font-size: 12px;
    }
  }

  p:last-of-type {
    display: flex;
    gap: 8px;

    > svg {
      @media screen and (max-width: 528px) {
        display: none;
      }
    }
  }
`;
