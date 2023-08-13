import clsx from "clsx";
import tw, { styled } from "twin.macro";
import { Fragment, PropsWithChildren } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClassNames } from "@emotion/react";

import media from "app/styles/media";
import { ReactComponent as Cancel } from "app/assets/icons/cancel.svg";

interface Props {
  open: boolean;
  onClose: VoidFunction;
  title?: string;
  showClose?: boolean;
  /**
   * classname of the modal's main content
   */
  className?: string;
  /**
   * classname of the modal's container
   */
  containerClassName?: string;
}
export default function Modal(props: PropsWithChildren<Props>) {
  const {
    open,
    onClose,
    children,
    title,
    showClose = true,
    className,
    containerClassName,
  } = props;

  const showHeader = Boolean(title || showClose);

  return (
    // @ts-ignore
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} as={DialogEl}>
        <>
          <ClassNames>
            {({ css }) => (
              // @ts-ignore
              <Transition.Child
                as={Fragment}
                enter={css(tw`transition-opacity ease-out duration-500`)}
                enterFrom={css(tw`opacity-0`)}
                enterTo={css(tw`opacity-100`)}
                leave={css(tw`ease-in duration-200`)}
                leaveFrom={css(tw`opacity-100`)}
                leaveTo={css(tw`opacity-0`)}
              >
                <Backdrop aria-hidden="true" />
              </Transition.Child>
            )}
          </ClassNames>

          <Container className={containerClassName}>
            <ClassNames>
              {({ css }) => (
                // @ts-ignore
                <Transition.Child
                  as={Fragment}
                  enter={css(tw`transition ease-out duration-300`)}
                  enterFrom={css(
                    tw`opacity-0 scale-95`,
                    tw`mobile:scale-100 mobile:!translate-y-[100vh] mobile:!min-h-0`
                  )}
                  enterTo={css([
                    tw`opacity-100 scale-100`,
                    css`
                      ${media.mobile} {
                        transform: translateY(
                          calc(100vh - 100% - env(safe-area-inset-bottom, 0))
                        ) !important;
                      }
                    `,
                    tw`mobile:!min-h-[200px]`,
                  ])}
                  leave={css(tw`transition ease-in duration-200`)}
                  leaveFrom={css([
                    tw`opacity-100 scale-100`,
                    css`
                      ${media.mobile} {
                        transform: translateY(
                          calc(100vh - 100% - env(safe-area-inset-bottom, 0))
                        ) !important;
                      }
                    `,
                    tw`mobile:!min-h-[200px]`,
                  ])}
                  leaveTo={css([
                    tw`opacity-0 scale-95`,
                    tw`mobile:scale-100 mobile:!translate-y-[100vh] mobile:!min-h-0`,
                  ])}
                >
                  <Dialog.Panel as={DialogContent} className={className}>
                    {showHeader ? (
                      <div className={clsx("header", { "no-title": !title })}>
                        {title ? <Dialog.Title>{title}</Dialog.Title> : null}

                        {showClose ? (
                          <button
                            type="button"
                            aria-label="Close"
                            onClick={onClose}
                          >
                            <Cancel />
                          </button>
                        ) : null}
                      </div>
                    ) : null}

                    <div className="body">{children}</div>
                  </Dialog.Panel>
                </Transition.Child>
              )}
            </ClassNames>
          </Container>
        </>
      </Dialog>
    </Transition>
  );
}

const DialogEl = styled.div`
  ${tw`relative z-50`};
`;

const Backdrop = tw.div`fixed inset-0 bg-black/30 dark:bg-[rgba(50, 53, 61, 0.3)]`;

const Container = styled.div`
  ${tw`fixed inset-0 flex min-h-full items-center justify-center mobile:block`};
`;
Container.displayName = "ModalContainer";

const DialogContent = styled.div`
  ${tw`overflow-hidden  max-h-[60vh] max-w-full rounded-[8px] mobile:rounded-b-none bg-black shadow-[0px 0px 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2)]`};

  ${tw`flex flex-col`};

  ${tw`mobile:translate-y-[100vh] mobile:min-h-0`};

  > .header {
    ${tw`py-[16px] pr-[16px] pl-[20px] flex items-center justify-between `};

    > h2 {
      font-size: 20px;
      font-weight: 500;
    }

    &.no-title {
      ${tw`border-b-0 justify-end`};
    }

    > button {
      ${tw`w-[36px] h-[36px] self-end flex items-center justify-center`};

      svg {
        ${tw`w-[20px] h-[20px]`};

        path {
          ${tw`fill-[#5C5F62]`};
        }
      }
    }
  }

  > .body {
    ${tw`flex-grow overflow-y-auto`};
  }
`;
