import { styled } from "twin.macro";
import { NavLink, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "app/assets/icons/logo.svg";

import Footer from "./Footer";
import Menu from "app/components/Menu";
import useModalState from "app/hooks/useModalState";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import ProfileDropdown from "./ProfileDropdown";
import { useEffect } from "react";
import VerifyModal from "./VerifyModal";
// import ProfileDropdown from "./ProfileDropdown";

export default function DashBoardLayout() {
  const { isOpen, closeModal, openModal } = useModalState();

  const { publicKey } = useWallet();

  useEffect(() => {
    const verified = JSON.parse(localStorage.getItem("verified") || "{}");
    if (verified) {
      console.log(verified);
    } else if (!verified && publicKey) {
      openModal();
    }
  }, [openModal, publicKey]);

  return (
    <>
      <Header>
        <div className="content">
          <div className="nav">
            <Link to="/">
              <Logo />
            </Link>
            <div>
              <Link to="/Marketplace">Marketplace</Link>
              <Link to="/">Dashboard</Link>
            </div>
          </div>
          <div className="menu">
            <Menu />
          </div>
          <div className="action">
            {publicKey ? (
              <ProfileDropdown />
            ) : (
              <WalletMultiButton>Connect Wallet</WalletMultiButton>
            )}
          </div>
        </div>
      </Header>

      <Outlet />

      <Footer />
      <VerifyModal open={isOpen} closeModal={closeModal} />
    </>
  );
}

const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  color: #9ea5ac;
  text-decoration: none;

  &.active {
    color: #fff;
  }
`;

const Header = styled.div`
  margin: 0 65px 0 65px;
  position: sticky;
  top: 0;
  height: 64px;
  z-index: 999;
  @media screen and (max-width: 921px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 561px) {
    margin: 0;
  }
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(6px);
  border-radius: 6px;
  margin-top: 20px;

  > .content {
    padding: 15px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .nav {
      display: flex;
      align-items: center;
      gap: 101px;

      @media screen and (max-width: 691px) {
        gap: 50px;
      }

      > div {
        display: flex;
        gap: 35px;

        @media screen and (max-width: 519px) {
          display: none;
        }

        a {
          font-size: 16px;
          font-weight: 400;
          color: #9ea5ac;
          text-decoration: none;

          &.active {
            color: #fff;
          }
        }
      }
      svg {
        width: 102.102px;
        height: 19.5px;
      }
    }

    > .menu {
      display: none;
      @media screen and (max-width: 519px) {
        display: block;
      }
    }

    > .action {
      align-self: flex-end;
      @media screen and (max-width: 519px) {
        display: none;
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

    .button {
      font-size: 16px;
      font-weight: 500;
      padding: 8px;
      border-radius: 5px;
      background: linear-gradient(145deg, #ff991e 0%, #df0000 100%) !important;

      width: 100px;
    }
  }
`;
