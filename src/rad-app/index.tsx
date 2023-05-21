import {
  createContext,
  FC,
  ReactPortal,
  useContext,
  useEffect,
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

const RdAppContext = createContext<RdAppProps<RdModule, any, RdConfig>>(
  undefined!,
);
interface RdAppProps<M extends RdModule, P , RdConfig> {
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
  modals: ReactPortal[];
}

export const rdIsLoading: BehaviorSubject<boolean> =
  new BehaviorSubject<boolean>(false);
export const rdShowMessage: BehaviorSubject<boolean> =
  new BehaviorSubject<boolean>(false);
export const rdMessageCompo: BehaviorSubject<JSX.Element | null> =
  new BehaviorSubject<JSX.Element | null>(null);
export const rdQueueModal: BehaviorSubject<JSX.Element | null> =
  new BehaviorSubject<JSX.Element | null>(null);
export const rdBottomSheetCompo: BehaviorSubject<JSX.Element | null> =
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
  if (m === null) {
    rdMessageCompo.next(null);
    rdShowMessage.next(false);
  } else {
    rdMessageCompo.next(
      <div
        style={{
          width: "fit-content",
          height: "fit-content",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          top: "16px",
        }}
      >
        {m}
      </div>,
    );
    rdShowMessage.next(true);
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
        showMessage: false,
        showModel: false,
        showBottomSheet: false,
      },
    });
  }, []);
  const [_state, _setState] = useState(_blocRdApp.state);

  useEffect(() => {
    let countQueue = 0;
    _blocRdApp.stream.subscribe((v) => {
      _setState({ ...v });
    });

    rdIsLoading.subscribe((v) => {
      _blocRdApp.state.isLoading = v;
      _blocRdApp.upDateState();
    });

    rdShowMessage.subscribe((v) => {
      _blocRdApp.state.showMessage = v;
      _blocRdApp.upDateState();
    });

    rdQueueModal.subscribe((v) => {
      if (v === null) {
        if (countQueue > 0) {
          countQueue--;
          const currentModel = document.getElementById(`rd-modals-${countQueue}`);
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
                classChildren={"animation-scale--up animation-faded--in"}
                classBackground="rd-overlay-queue-modal"
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
        setTimeout(() => {
          _blocRdApp.state.showBottomSheet = false;
          _blocRdApp.upDateState();
        }, 80);
      } else {
        setTimeout(() => {
          _blocRdApp.state.showBottomSheet = true;
          _blocRdApp.upDateState();
        }, 80);
      }
    });

    // turn of loading and component of old page
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
    };
  }, []);

  return (
    <I18nextProvider i18n={rdI18n}>
      <RdViewport>
        <RdQueryClient>
          <RdAppContext.Provider value={appProps}>
            {/* handler UI message */}
            {_state.showMessage &&
              createPortal(rdMessageCompo.value, document.body, "rd-message")}

            {/* handler UI loading */}
            {_state.isLoading &&
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
  const rootEle = document.getElementById(`${mainId}`) as HTMLElement;
  if (constrant && rootEle) {
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
    document.getElementById(`${mainId}`) as HTMLElement,
    {
      identifierPrefix: `${prefixComponent}`,
      onRecoverableError(error: any) {
        console.error(error);
      },
    }
  );
  return rdRoot;
}
