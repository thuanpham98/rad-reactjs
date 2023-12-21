import {
  createContext,
  FC,
  ReactPortal,
  useContext,
  useEffect,
  useId,
} from "react";
import { createPortal } from "react-dom";
import { RdModule, RdManager } from "../rad-cores";
import { RdQueryClient } from "../rad-components/query-client/RdQueryClient";
import { RdViewport } from "../rad-components/viewport/RdViewPort";
import { I18nextProvider } from "react-i18next";
import { rdI18n } from "../rad-utils/rd-i18n";
import ReactDOM from "react-dom/client";
import { RdConfig } from "../rad-utils/rd-config";
import { BehaviorSubject } from "rxjs";
import { RdOverlay } from "../rad-components/overlay/RdOverlay";
import { queueScheduler } from "rxjs";
import "../rad-style";
import { ErrorModel } from "../rad-models/ErrorModel";
import { QueryClient } from "@tanstack/react-query";
import { useRdBloc } from "..";

const RdAppContext = createContext<RdAppProps<RdModule, any, RdConfig>>(
  undefined!,
);
interface RdAppProps<M extends RdModule, P, RdConfig> {
  [n: string]: any;
  modules?: RdManager<M>;
  plugins?: P;
  configs?: RdConfig;
}

export const RdApp: FC<{
  children: React.ReactNode;
  appProps: RdAppProps<RdModule, any, any>;
}> = ({
  children,
  appProps,
}: {
  children: React.ReactNode;
  appProps: RdAppProps<RdModule, any, any>;
}) => {
  return (
    <RdAppContext.Provider value={appProps}>{children}</RdAppContext.Provider>
  );
};

interface RdAppExtendsState {
  isLoading: boolean;
  showModel: boolean;
  showMessage: boolean;
  showBottomSheet: boolean;
  showDrawer: boolean;
  modals: ReactPortal[];
  messages: JSX.Element[];
}

export const rdIsLoading: BehaviorSubject<boolean> =
  new BehaviorSubject<boolean>(false);

export const rdShowMessage: BehaviorSubject<boolean> =
  new BehaviorSubject<boolean>(true);

export const rdMessageCompo: BehaviorSubject<{
  element: JSX.Element | null;
  duration?: number;
}> = new BehaviorSubject<{ element: JSX.Element | null; duration?: number }>({
  element: null,
  duration: 1000,
});

export const rdQueueModal: BehaviorSubject<{
  modal: JSX.Element | null;
  closeOnTapBackground: boolean;
}> = new BehaviorSubject<{
  modal: JSX.Element | null;
  closeOnTapBackground: boolean;
}>({ modal: null, closeOnTapBackground: true });

export const rdBottomSheetCompo: BehaviorSubject<JSX.Element | null> =
  new BehaviorSubject<JSX.Element | null>(null);

export const rdShowDrawer: BehaviorSubject<boolean> =
  new BehaviorSubject<boolean>(false);

export const rdDrawerCompo: BehaviorSubject<JSX.Element | null> =
  new BehaviorSubject<JSX.Element | null>(null);

export const rdError: BehaviorSubject<ErrorModel | unknown> =
  new BehaviorSubject<ErrorModel | unknown>(null);

export function rdLoading(open: boolean) {
  rdIsLoading.next(open);
}

export function rdModal(m: JSX.Element | null, closeOnTapBackground?: boolean) {
  rdQueueModal.next({
    modal: m,
    closeOnTapBackground: closeOnTapBackground ?? true,
  });
}

export function rdMessage(m: JSX.Element | null, d?: number) {
  rdMessageCompo.next({ element: m, duration: d });
}

export function rdDrawer(m: JSX.Element | null) {
  if (m === null) {
    rdDrawerCompo.next(null);
    rdShowDrawer.next(false);
  } else {
    rdDrawerCompo.next(m);
    rdShowDrawer.next(true);
  }
}

export function rdBottomSheet(m: JSX.Element | null) {
  rdBottomSheetCompo.next(m);
}

export const RdAppExtends: FC<{
  children: React.ReactNode;
  appProps: RdAppProps<RdModule, any, RdConfig>;
}> = ({
  children,
  appProps,
}: {
  children: React.ReactNode;
  appProps: RdAppProps<RdModule, any, RdConfig>;
}) => {
  const [state, setState] = useRdBloc<RdAppExtendsState>({
    isLoading: false,
    modals: [],
    showMessage: true,
    showModel: false,
    showBottomSheet: false,
    showDrawer: false,
    messages: [],
  });
  const id = useId();

  useEffect(() => {
    let countQueue = 0;
    const queueMessage: JSX.Element[] = [];

    window &&
      document &&
      state?.isLoading &&
      rdIsLoading.subscribe((v) => {
        state.isLoading = v;
        setState();
        if (v) {
          document.body.className = "bg-scrolling-element-when-modal-active";
        } else {
          document.body.className = "";
        }
      });

    window &&
      document &&
      state?.showDrawer &&
      rdShowDrawer.subscribe((v) => {
        state.showDrawer = v;
        setState();
        if (v) {
          document.body.className = "bg-scrolling-element-when-modal-active";
        } else {
          document.body.className = "";
        }
      });

    window &&
      document &&
      state?.messages &&
      rdMessageCompo.subscribe((v) => {
        if (
          v !== null &&
          queueMessage.length < (appProps.configs?.maxAmountMessage ?? 1)
        ) {
          const keyMessage = `${id}-wrap-rd-message-${Date.now()}`;
          queueMessage.unshift(
            <div
              id={keyMessage}
              key={keyMessage}
              className={
                (appProps.configs?.classWrapMessage ?? "wrap-rd-message") +
                " " +
                (appProps.configs?.classAnimationMessageEnter ??
                  "animation-faded--in")
              }
            >
              <div className={appProps.configs?.classMessage ?? "rd-message"}>
                {v.element}
              </div>
            </div>,
          );

          state.messages = queueMessage;
          setState();

          setTimeout(
            () => {
              const ele = document.getElementById(`${keyMessage}`);
              if (ele) {
                ele.className =
                  appProps.configs?.classWrapMessage ?? "wrap-rd-message";
              }
            },
            appProps.configs?.durationMessageEnter ?? 200,
          );

          setTimeout(() => {
            const ele = document.getElementById(`${keyMessage}`);
            if (ele) {
              ele.className =
                (appProps.configs?.classWrapMessage ?? "wrap-rd-message") +
                " " +
                (appProps.configs?.classAnimationMessageLeave ??
                  "animation-faded--out");
              setTimeout(
                () => {
                  const tmpIdx = queueMessage.findIndex((e) => {
                    return `${e.key}` === `${keyMessage}`;
                  });
                  queueMessage.splice(tmpIdx, 1);
                  state.messages = queueMessage;
                  setState();
                },
                appProps.configs?.durationMessageLeave ?? 200,
              );
            }
          }, v.duration ?? 1000);
        }
      });

    window &&
      document &&
      state?.modals &&
      rdQueueModal.subscribe((v) => {
        if (v.modal === null) {
          if (countQueue > 0) {
            countQueue--;
            const currentModel = document.getElementById(
              `rd-modals-${countQueue}`,
            );
            currentModel!.firstElementChild!.className =
              "column animation-faded--out";
            setTimeout(() => {
              state.modals = state.modals.slice(0, countQueue);
              setState();
            }, 150);
          }
        } else {
          queueScheduler.schedule(() => {
            state.modals = state.modals.slice(0, countQueue);
            const idx = countQueue;
            state.modals.push(
              createPortal(
                <RdOverlay
                  id={`rd-modals-${idx}`}
                  classChildren={`animation-scale--up animation-faded--in ${
                    appProps.configs?.classChildModel ?? ""
                  }`}
                  classBackground={`rd-overlay-queue-modal ${
                    appProps.configs?.classBackgroundModel ?? ""
                  }`}
                  onTapBackGround={() => {
                    if (
                      appProps.configs?.closeModalOnTapOutside &&
                      v.closeOnTapBackground
                    ) {
                      rdQueueModal.next({
                        modal: null,
                        closeOnTapBackground: true,
                      });
                    }
                  }}
                  onTapChildren={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {v.modal}
                </RdOverlay>,
                document.body,
                `rd-modals-${idx}`,
              ),
            );
            setState();
            countQueue++;
          });
        }
        if (countQueue === 1) {
          document.body.className = "bg-scrolling-element-when-modal-active";
        } else if (countQueue === 0) {
          document.body.className = "";
        }
      });

    window &&
      document &&
      rdBottomSheetCompo.subscribe((v) => {
        if (v === null) {
          document.body.className = "";
          state?.showBottomSheet &&
            setTimeout(() => {
              state.showBottomSheet = false;
              setState();
            }, 80);
        } else {
          document.body.className = "bg-scrolling-element-when-modal-active";
          state?.showBottomSheet &&
            setTimeout(() => {
              state.showBottomSheet = true;
              setState();
            }, 80);
        }
      });

    // turn of loading and component of old page
    window &&
      document &&
      window.addEventListener("popstate", () => {
        if (state?.isLoading || countQueue > 0) {
          rdLoading(false);
          for (let index = 0; index < countQueue; index++) {
            rdModal(null);
          }
        }
      });

    return () => {
      window &&
        window.removeEventListener("popstate", () => {
          console.debug("done popstate");
        });
    };
  }, []);

  return (
    <I18nextProvider i18n={rdI18n}>
      <RdViewport>
        <RdQueryClient
          queryClient={
            new QueryClient({
              defaultOptions: {
                queries: { refetchOnWindowFocus: false, retry: false },
              },
            })
          }
        >
          <RdAppContext.Provider value={appProps}>
            {/* handler UI drawer */}
            {state?.showDrawer &&
              window &&
              document &&
              createPortal(rdDrawerCompo.value, document.body, "rd-drawer")}

            {/* handler UI message */}
            {state?.showMessage &&
              state.messages.length > 0 &&
              window &&
              document &&
              createPortal(
                <div
                  id={`${id}-rd-message`}
                  className={
                    appProps.configs?.classOverlayMessage ??
                    "rd-overlay-message"
                  }
                >
                  <>{state.messages}</>
                </div>,
                document.body,
                "rd-message",
              )}

            {/* handler UI loading */}
            {state?.isLoading &&
              window &&
              document &&
              createPortal(
                appProps.configs?.loading,
                document.body,
                "rd-loader",
              )}

            {/* queue potal */}
            {state?.modals &&
              state.modals.length > 0 &&
              state.modals.map((d) => {
                return d;
              })}

            {/* bottomsheet */}
            {state?.showBottomSheet &&
              window &&
              document &&
              createPortal(
                rdBottomSheetCompo.value,
                document.body,
                `rd-bottom-sheet`,
              )}
            {children}
          </RdAppContext.Provider>
        </RdQueryClient>
      </RdViewport>
    </I18nextProvider>
  );
};

export const useRdApp = () => {
  return useContext<RdAppProps<RdModule, any, RdConfig>>(RdAppContext);
};

export function buildRdRootElement(
  prefixComponent: string,
  mainId: string,
  constrant?: {
    minHeight?: string;
    minWidth?: string;
    maxHeight?: string;
    maxWidth?: string;
  },
): ReactDOM.Root {
  const rootEle =
    window && document && (document.getElementById(`${mainId}`) as HTMLElement);
  if (constrant && rootEle) {
    rootEle.style.pointerEvents = "auto";
    rootEle.style.boxSizing = "border-box";
    if (constrant.minHeight) {
      rootEle.style.minHeight = constrant.minHeight;
    }
    if (constrant.minWidth) {
      rootEle.style.minWidth = constrant.minWidth;
    }
    if (constrant.maxHeight) {
      rootEle.style.maxHeight = constrant.maxHeight;
    }
    if (constrant.maxWidth) {
      rootEle.style.maxWidth = constrant.maxWidth;
    }
  }
  const rdRoot = ReactDOM.createRoot(
    window && document && (document.getElementById(`${mainId}`) as HTMLElement),
    {
      identifierPrefix: `${prefixComponent}`,
      onRecoverableError(error: any) {
        console.error(error);
      },
    },
  );
  return rdRoot;
}
