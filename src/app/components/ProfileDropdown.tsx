import { Fragment } from "react";
import tw, { styled } from "twin.macro";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import { ReactComponent as CancelIcon } from "app/assets/icons/cancel.svg";

export default function ProfileDropdown() {
  return (
    <Popover tw="relative flex">
      {({ open, close }) => (
        <>
          <Popover.Button as={Container} type="button">
            {/* <img
              src={profile.avatar ?? DEFAULT_PROFILE_IMG}
              alt={fullname}
              css={[open && tw`mobile:hidden`]}
            />

            <CancelIcon css={[tw`hidden`, open && tw`mobile:inline-block`]} /> */}

            <p>Blockride</p>
          </Popover.Button>

          {/* @ts-ignore */}
          <Transition>
            {/* @ts-ignore */}
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay as={Overlay} />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel as={Dropdown}>
                <div tw="flex flex-col items-center pb-[16px]">
                  {/* <img
                    src={profile.avatar ?? DEFAULT_PROFILE_IMG}
                    alt={fullname}
                  /> */}

                  <p>Blockride</p>

                  <p>Blockride</p>
                </div>

                <div className="divider" tw="py-[16px]">
                  <DropdownLink as={Link} onClick={close}>
                    Profile
                  </DropdownLink>

                  <DropdownLink
                    href="https://support.busha.co/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Help center
                  </DropdownLink>
                </div>
              </Popover.Panel>
            </Transition.Child>
          </Transition>
        </>
      )}
    </Popover>
  );
}

const Container = styled.button`
  ${tw`flex items-center cursor-pointer outline-none`};

  > img {
    ${tw`w-[36px] h-[36px] mr-[8px] rounded-full mobile:m-0 object-cover`};
  }

  > svg {
    ${tw`w-[24px] h-[24px]`};

    path {
      ${tw`fill-current`};
    }
  }

  p {
    ${tw`mobile:hidden`};
  }
`;

const positionStyles = tw`absolute z-10 right-[-32px] mobile:right-[-16px] top-full`;

const Overlay = styled.div`
  ${positionStyles};
  /* ${tw`top-[-34px] right-[-79px] mobile:top-full mobile:mt-[14px] w-screen h-screen mobile:h-page bg-[rgba(0, 0, 0, 0.25)] dark:bg-[rgba(50, 53, 61, 0.3)]`}; */ */
`;

const Dropdown = styled.div`
  ${positionStyles};
  ${tw`mt-[22px] mobile:mt-[14px] w-[375px] mobile:w-screen`};

  ${tw`rounded-[8px] mobile:rounded-t-none rounded-b-[8px] bg-black p-[16px] mr-[16px] mobile:mr-0`};
  border: 1px solid #fff;

  img {
    ${tw`w-[64px] h-[64px] rounded-full object-cover`};
  }
`;

const DropdownLink = styled.a<{ to?: string }>``;
