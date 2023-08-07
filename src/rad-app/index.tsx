import {
  createContext,
  FC,
  ReactPortal,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { RdModule, RdManager } from "../rad-cores";
import { RdQueryClient } from "../rad-components/query-client/RdQueryClient";
import { RdViewport } from "../rad-components/viewport/RdViewPort";
import { I18nextProvider } from "react-i18next";
import { rdI18n } from "../rad-utils/rd-i18n";
import ReactDOM from "react-dom/client";
import { RdConfig } from "../rad-utils/rd-config";
import { RdBloc } from "../rad-utils/rd-bloc";
import { BehaviorSubject } from "rxjs";
import { RdOverlay } from "../rad-components/overlay/RdOverlay";
import { queueScheduler } from "rxjs";
import "../rad-style";
import { ErrorModel } from "../rad-models/ErrorModel";
import { QueryClient } from "@tanstack/react-query";

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
export const rdMessageCompo: BehaviorSubject<JSX.Element | null> =
  new BehaviorSubject<JSX.Element | null>(null);
export const rdQueueModal: BehaviorSubject<JSX.Element | null> =
  new BehaviorSubject<JSX.Element | null>(null);
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

export function rdModal(m: JSX.Element | null) {
  rdQueueModal.next(m);
}

export function rdMessage(m: JSX.Element | null) {
  rdMessageCompo.next(m);
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
  const _blocRdApp = useMemo(() => {
    return new RdBloc<RdAppExtendsState>({
      initState: {
        isLoading: false,
        modals: [],
        showMessage: true,
        showModel: false,
        showBottomSheet: false,
        showDrawer: false,
        messages: [],
      },
    });
  }, []);
  const [_state, _setState] = useState(_blocRdApp.state);
  const id  = useId();

  useEffect(() => {
    let countQueue = 0;
    const queueMessage: JSX.Element[] = [..._blocRdApp.state.messages];

    _blocRdApp.stream.subscribe((v) => {
      _setState({ ...v });
    });

    rdIsLoading.subscribe((v) => {
      _blocRdApp.state.isLoading = v;
      _blocRdApp.upDateState();
      if (v) {
        document.body.className = "bg-scrolling-element-when-modal-active";
      } else {
        document.body.className = "";
      }
    });

    rdShowDrawer.subscribe((v) => {
      _blocRdApp.state.showDrawer = v;
      _blocRdApp.upDateState();
      if (v) {
        document.body.className = "bg-scrolling-element-when-modal-active";
      } else {
        document.body.className = "";
      }
    });

    rdMessageCompo.subscribe((v) => {
      if (v === null && queueMessage.length > 0) {
        const currentMessage = document.getElementById(
          `${id}-wrap-rd-message-${queueMessage.length - 1}`,
        );
        if (currentMessage && currentMessage.firstElementChild) {
          currentMessage.firstElementChild.className =
            currentMessage.firstElementChild.className +
            " " +
            (appProps.configs?.classAnimationMessageLeave ??
              "animation-faded--out");
          setTimeout(
            () => {
              queueMessage.pop();
            },
            appProps.configs?.durationMessageLeave ?? 150,
          );
        }
      } else if (
        v !== null &&
        queueMessage.length < (appProps.configs?.maxAmountMessage ?? 1)
      ) {
        queueMessage.unshift(
          <div
            id={`${id}-wrap-rd-message-${queueMessage.length}`}
            key={queueMessage.length}
            className={
              (appProps.configs?.classWrapMessage ?? "wrap-rd-message") +
              " " +
              (appProps.configs?.classAnimationMessageEnter ??
                "animation-faded--in")
            }
          >
            <div
              className={appProps.configs?.classMessage ?? "wrap-rd-message"}
            >
              {v}
            </div>
          </div>,
        );
      }
      _blocRdApp.state.messages = [...queueMessage];
      _blocRdApp.upDateState();
    });

    window &&
      document &&
      rdQueueModal.subscribe((v) => {
        if (v === null) {
          if (countQueue > 0) {
            countQueue--;
            const currentModel = document.getElementById(
              `rd-modals-${countQueue}`,
            );
            currentModel!.firstElementChild!.className =
              "column animation-faded--out";
            setTimeout(() => {
              _blocRdApp.state.modals = _blocRdApp.state.modals.slice(
                0,
                countQueue,
              );
              _blocRdApp.upDateState();
            }, 150);
          }
        } else {
          queueScheduler.schedule(() => {
            _blocRdApp.state.modals = _blocRdApp.state.modals.slice(
              0,
              countQueue,
            );
            const idx = countQueue;
            _blocRdApp.state.modals.push(
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
                    if (appProps.configs?.closeModalOnTapOutside) {
                      rdQueueModal.next(null);
                    }
                  }}
                  onTapChildren={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {v}
                </RdOverlay>,
                document.body,
                `rd-modals-${idx}`,
              ),
            );
            _blocRdApp.upDateState();
            countQueue++;
          });
        }
        if (countQueue === 1) {
          document.body.className = "bg-scrolling-element-when-modal-active";
        } else if (countQueue === 0) {
          document.body.className = "";
        }
      });

    rdBottomSheetCompo.subscribe((v) => {
      if (v === null) {
        document.body.className = "";
        setTimeout(() => {
          _blocRdApp.state.showBottomSheet = false;
          _blocRdApp.upDateState();
        }, 80);
      } else {
        document.body.className = "bg-scrolling-element-when-modal-active";
        setTimeout(() => {
          _blocRdApp.state.showBottomSheet = true;
          _blocRdApp.upDateState();
        }, 80);
      }
    });

    // turn of loading and component of old page
    window &&
      document &&
      window.addEventListener("popstate", () => {
        if (_blocRdApp.state.isLoading || countQueue > 0) {
          rdLoading(false);
          for (let index = 0; index < countQueue; index++) {
            rdModal(null);
          }
        }
      });

    return () => {
      _blocRdApp.stream.complete();
      window &&
        window.removeEventListener("popstate", () => {
          console.log("done popstate");
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
            {_state.showDrawer &&
              window &&
              document &&
              createPortal(rdDrawerCompo.value, document.body, "rd-drawer")}

            {/* handler UI message */}
            {_state.showMessage &&
              _state.messages.length > 0 &&
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
                  {_state.messages.map((d) => {
                    return <>{d}</>;
                  })}
                </div>,
                document.body,
                "rd-message",
              )}

            {/* handler UI loading */}
            {_state.isLoading &&
              window &&
              document &&
              createPortal(
                appProps.configs?.loading,
                document.body,
                "rd-loader",
              )}

            {/* queue potal */}
            {_state.modals.length > 0 &&
              _state.modals.map((d, i) => {
                return d;
              })}

            {/* bottomsheet */}
            {_state.showBottomSheet &&
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
