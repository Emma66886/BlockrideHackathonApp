import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { styled } from "twin.macro";

import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

export default function MyMenu() {
  return (
    <Menu>
      <Menu.Button>
        <MenuIcon />
      </Menu.Button>
      <Menu.Items as={Overlay}>
        <Menu.Item>
          <NavLink to="">Marketplace</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item>
          <button className="button">Connect Wallet</button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

const Overlay = styled.div`
  background: #141414;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  .button {
    padding: 8px 15px;
    border-radius: 5px;
    background: linear-gradient(141deg, #ff991e 0%, #df0000 100%);
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-bottom:10px;
  }

  > a {
    color: rgba(255, 255, 255, 0.5);

      &.active {
        color: #ffffff;
      }
      font-size: 20px;
    padding: 15px 0;
    }
    
  }
`;
