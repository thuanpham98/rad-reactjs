var $i = Object.defineProperty;
var Wi = (n, e, t) => e in n ? $i(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var M = (n, e, t) => (Wi(n, typeof e != "symbol" ? e + "" : e, t), t);
import * as G from "react";
import kt, { createContext as hr, useState as tt, useCallback as zi, useEffect as je, useContext as pr, useRef as Ge, useMemo as An, createElement as Ji, useId as Yi } from "react";
import Gi, { createPortal as Qe } from "react-dom";
function Zi(n, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in n)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(n, i, s.get ? s : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Kt = { exports: {} }, He = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function es() {
  if (Tr)
    return He;
  Tr = 1;
  var n = kt, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, d) {
    var f, c = {}, h = null, p = null;
    d !== void 0 && (h = "" + d), u.key !== void 0 && (h = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (f in u)
      r.call(u, f) && !s.hasOwnProperty(f) && (c[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: e, type: o, key: h, ref: p, props: c, _owner: i.current };
  }
  return He.Fragment = t, He.jsx = a, He.jsxs = a, He;
}
var Ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir;
function ts() {
  return Ir || (Ir = 1, process.env.NODE_ENV !== "production" && function() {
    var n = kt, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, w = "@@iterator";
    function b(l) {
      if (l === null || typeof l != "object")
        return null;
      var S = v && l[v] || l[w];
      return typeof S == "function" ? S : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(l) {
      {
        for (var S = arguments.length, x = new Array(S > 1 ? S - 1 : 0), D = 1; D < S; D++)
          x[D - 1] = arguments[D];
        E("error", l, x);
      }
    }
    function E(l, S, x) {
      {
        var D = y.ReactDebugCurrentFrame, A = D.getStackAddendum();
        A !== "" && (S += "%s", x = x.concat([A]));
        var U = x.map(function(N) {
          return String(N);
        });
        U.unshift("Warning: " + S), Function.prototype.apply.call(console[l], console, U);
      }
    }
    var R = !1, k = !1, C = !1, _ = !1, P = !1, j;
    j = Symbol.for("react.module.reference");
    function F(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === s || P || l === i || l === d || l === f || _ || l === p || R || k || C || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === c || l.$$typeof === a || l.$$typeof === o || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === j || l.getModuleId !== void 0));
    }
    function q(l, S, x) {
      var D = l.displayName;
      if (D)
        return D;
      var A = S.displayName || S.name || "";
      return A !== "" ? x + "(" + A + ")" : x;
    }
    function se(l) {
      return l.displayName || "Context";
    }
    function W(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case o:
            var S = l;
            return se(S) + ".Consumer";
          case a:
            var x = l;
            return se(x._context) + ".Provider";
          case u:
            return q(l, l.render, "ForwardRef");
          case c:
            var D = l.displayName || null;
            return D !== null ? D : W(l.type) || "Memo";
          case h: {
            var A = l, U = A._payload, N = A._init;
            try {
              return W(N(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, O = 0, L, B, Q, I, fe, Z, ye;
    function st() {
    }
    st.__reactDisabledLog = !0;
    function _e() {
      {
        if (O === 0) {
          L = console.log, B = console.info, Q = console.warn, I = console.error, fe = console.group, Z = console.groupCollapsed, ye = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: st,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        O++;
      }
    }
    function at() {
      {
        if (O--, O === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, l, {
              value: L
            }),
            info: g({}, l, {
              value: B
            }),
            warn: g({}, l, {
              value: Q
            }),
            error: g({}, l, {
              value: I
            }),
            group: g({}, l, {
              value: fe
            }),
            groupCollapsed: g({}, l, {
              value: Z
            }),
            groupEnd: g({}, l, {
              value: ye
            })
          });
        }
        O < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = y.ReactCurrentDispatcher, me;
    function be(l, S, x) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (A) {
            var D = A.stack.trim().match(/\n( *(at )?)/);
            me = D && D[1] || "";
          }
        return `
` + me + l;
      }
    }
    var De = !1, we;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Se();
    }
    function Te(l, S) {
      if (!l || De)
        return "";
      {
        var x = we.get(l);
        if (x !== void 0)
          return x;
      }
      var D;
      De = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = de.current, de.current = null, _e();
      try {
        if (S) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (he) {
              D = he;
            }
            Reflect.construct(l, [], N);
          } else {
            try {
              N.call();
            } catch (he) {
              D = he;
            }
            l.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            D = he;
          }
          l();
        }
      } catch (he) {
        if (he && D && typeof he.stack == "string") {
          for (var T = he.stack.split(`
`), Y = D.stack.split(`
`), H = T.length - 1, V = Y.length - 1; H >= 1 && V >= 0 && T[H] !== Y[V]; )
            V--;
          for (; H >= 1 && V >= 0; H--, V--)
            if (T[H] !== Y[V]) {
              if (H !== 1 || V !== 1)
                do
                  if (H--, V--, V < 0 || T[H] !== Y[V]) {
                    var ee = `
` + T[H].replace(" at new ", " at ");
                    return l.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", l.displayName)), typeof l == "function" && we.set(l, ee), ee;
                  }
                while (H >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        De = !1, de.current = U, at(), Error.prepareStackTrace = A;
      }
      var Ne = l ? l.displayName || l.name : "", Dr = Ne ? be(Ne) : "";
      return typeof l == "function" && we.set(l, Dr), Dr;
    }
    function ot(l, S, x) {
      return Te(l, !1);
    }
    function ut(l) {
      var S = l.prototype;
      return !!(S && S.isReactComponent);
    }
    function ct(l, S, x) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return Te(l, ut(l));
      if (typeof l == "string")
        return be(l);
      switch (l) {
        case d:
          return be("Suspense");
        case f:
          return be("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return ot(l.render);
          case c:
            return ct(l.type, S, x);
          case h: {
            var D = l, A = D._payload, U = D._init;
            try {
              return ct(U(A), S, x);
            } catch {
            }
          }
        }
      return "";
    }
    var lt = Object.prototype.hasOwnProperty, wr = {}, Sr = y.ReactDebugCurrentFrame;
    function ft(l) {
      if (l) {
        var S = l._owner, x = ct(l.type, l._source, S ? S.type : null);
        Sr.setExtraStackFrame(x);
      } else
        Sr.setExtraStackFrame(null);
    }
    function Pi(l, S, x, D, A) {
      {
        var U = Function.call.bind(lt);
        for (var N in l)
          if (U(l, N)) {
            var T = void 0;
            try {
              if (typeof l[N] != "function") {
                var Y = Error((D || "React class") + ": " + x + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              T = l[N](S, N, D, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              T = H;
            }
            T && !(T instanceof Error) && (ft(A), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", x, N, typeof T), ft(null)), T instanceof Error && !(T.message in wr) && (wr[T.message] = !0, ft(A), m("Failed %s type: %s", x, T.message), ft(null));
          }
      }
    }
    var Ci = Array.isArray;
    function It(l) {
      return Ci(l);
    }
    function _i(l) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, x = S && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return x;
      }
    }
    function ki(l) {
      try {
        return Or(l), !1;
      } catch {
        return !0;
      }
    }
    function Or(l) {
      return "" + l;
    }
    function Rr(l) {
      if (ki(l))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _i(l)), Or(l);
    }
    var Be = y.ReactCurrentOwner, ji = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Er, xr, Nt;
    Nt = {};
    function Li(l) {
      if (lt.call(l, "ref")) {
        var S = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Di(l) {
      if (lt.call(l, "key")) {
        var S = Object.getOwnPropertyDescriptor(l, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Ti(l, S) {
      if (typeof l.ref == "string" && Be.current && S && Be.current.stateNode !== S) {
        var x = W(Be.current.type);
        Nt[x] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Be.current.type), l.ref), Nt[x] = !0);
      }
    }
    function Ii(l, S) {
      {
        var x = function() {
          Er || (Er = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        x.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Ni(l, S) {
      {
        var x = function() {
          xr || (xr = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        x.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Fi = function(l, S, x, D, A, U, N) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: l,
        key: S,
        ref: x,
        props: N,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function Ai(l, S, x, D, A) {
      {
        var U, N = {}, T = null, Y = null;
        x !== void 0 && (Rr(x), T = "" + x), Di(S) && (Rr(S.key), T = "" + S.key), Li(S) && (Y = S.ref, Ti(S, A));
        for (U in S)
          lt.call(S, U) && !ji.hasOwnProperty(U) && (N[U] = S[U]);
        if (l && l.defaultProps) {
          var H = l.defaultProps;
          for (U in H)
            N[U] === void 0 && (N[U] = H[U]);
        }
        if (T || Y) {
          var V = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          T && Ii(N, V), Y && Ni(N, V);
        }
        return Fi(l, T, Y, A, D, Be.current, N);
      }
    }
    var Ft = y.ReactCurrentOwner, Pr = y.ReactDebugCurrentFrame;
    function Ie(l) {
      if (l) {
        var S = l._owner, x = ct(l.type, l._source, S ? S.type : null);
        Pr.setExtraStackFrame(x);
      } else
        Pr.setExtraStackFrame(null);
    }
    var At;
    At = !1;
    function Ut(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function Cr() {
      {
        if (Ft.current) {
          var l = W(Ft.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Ui(l) {
      {
        if (l !== void 0) {
          var S = l.fileName.replace(/^.*[\\\/]/, ""), x = l.lineNumber;
          return `

Check your code at ` + S + ":" + x + ".";
        }
        return "";
      }
    }
    var _r = {};
    function Mi(l) {
      {
        var S = Cr();
        if (!S) {
          var x = typeof l == "string" ? l : l.displayName || l.name;
          x && (S = `

Check the top-level render call using <` + x + ">.");
        }
        return S;
      }
    }
    function kr(l, S) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var x = Mi(S);
        if (_r[x])
          return;
        _r[x] = !0;
        var D = "";
        l && l._owner && l._owner !== Ft.current && (D = " It was passed a child from " + W(l._owner.type) + "."), Ie(l), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, D), Ie(null);
      }
    }
    function jr(l, S) {
      {
        if (typeof l != "object")
          return;
        if (It(l))
          for (var x = 0; x < l.length; x++) {
            var D = l[x];
            Ut(D) && kr(D, S);
          }
        else if (Ut(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var A = b(l);
          if (typeof A == "function" && A !== l.entries)
            for (var U = A.call(l), N; !(N = U.next()).done; )
              Ut(N.value) && kr(N.value, S);
        }
      }
    }
    function qi(l) {
      {
        var S = l.type;
        if (S == null || typeof S == "string")
          return;
        var x;
        if (typeof S == "function")
          x = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === c))
          x = S.propTypes;
        else
          return;
        if (x) {
          var D = W(S);
          Pi(x, l.props, "prop", D, l);
        } else if (S.PropTypes !== void 0 && !At) {
          At = !0;
          var A = W(S);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bi(l) {
      {
        for (var S = Object.keys(l.props), x = 0; x < S.length; x++) {
          var D = S[x];
          if (D !== "children" && D !== "key") {
            Ie(l), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Ie(null);
            break;
          }
        }
        l.ref !== null && (Ie(l), m("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    function Lr(l, S, x, D, A, U) {
      {
        var N = F(l);
        if (!N) {
          var T = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = Ui(A);
          Y ? T += Y : T += Cr();
          var H;
          l === null ? H = "null" : It(l) ? H = "array" : l !== void 0 && l.$$typeof === e ? (H = "<" + (W(l.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : H = typeof l, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, T);
        }
        var V = Ai(l, S, x, A, U);
        if (V == null)
          return V;
        if (N) {
          var ee = S.children;
          if (ee !== void 0)
            if (D)
              if (It(ee)) {
                for (var Ne = 0; Ne < ee.length; Ne++)
                  jr(ee[Ne], l);
                Object.freeze && Object.freeze(ee);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jr(ee, l);
        }
        return l === r ? Bi(V) : qi(V), V;
      }
    }
    function Qi(l, S, x) {
      return Lr(l, S, x, !0);
    }
    function Hi(l, S, x) {
      return Lr(l, S, x, !1);
    }
    var Vi = Hi, Ki = Qi;
    Ve.Fragment = r, Ve.jsx = Vi, Ve.jsxs = Ki;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? Kt.exports = es() : Kt.exports = ts();
var K = Kt.exports;
class rt {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    const t = {
      listener: e
    };
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const Ze = typeof window > "u" || "Deno" in window;
function te() {
}
function rs(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function $t(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function Un(n, e) {
  return Math.max(n + (e || 0) - Date.now(), 0);
}
function Je(n, e, t) {
  return jt(n) ? typeof e == "function" ? {
    ...t,
    queryKey: n,
    queryFn: e
  } : {
    ...e,
    queryKey: n
  } : n;
}
function Oe(n, e, t) {
  return jt(n) ? [{
    ...e,
    queryKey: n
  }, t] : [n || {}, e];
}
function Nr(n, e) {
  const {
    type: t = "all",
    exact: r,
    fetchStatus: i,
    predicate: s,
    queryKey: a,
    stale: o
  } = n;
  if (jt(a)) {
    if (r) {
      if (e.queryHash !== gr(a, e.options))
        return !1;
    } else if (!Ue(e.queryKey, a))
      return !1;
  }
  if (t !== "all") {
    const u = e.isActive();
    if (t === "active" && !u || t === "inactive" && u)
      return !1;
  }
  return !(typeof o == "boolean" && e.isStale() !== o || typeof i < "u" && i !== e.state.fetchStatus || s && !s(e));
}
function Fr(n, e) {
  const {
    exact: t,
    fetching: r,
    predicate: i,
    mutationKey: s
  } = n;
  if (jt(s)) {
    if (!e.options.mutationKey)
      return !1;
    if (t) {
      if (ke(e.options.mutationKey) !== ke(s))
        return !1;
    } else if (!Ue(e.options.mutationKey, s))
      return !1;
  }
  return !(typeof r == "boolean" && e.state.status === "loading" !== r || i && !i(e));
}
function gr(n, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || ke)(n);
}
function ke(n) {
  return JSON.stringify(n, (e, t) => zt(t) ? Object.keys(t).sort().reduce((r, i) => (r[i] = t[i], r), {}) : t);
}
function Ue(n, e) {
  return Mn(n, e);
}
function Mn(n, e) {
  return n === e ? !0 : typeof n != typeof e ? !1 : n && e && typeof n == "object" && typeof e == "object" ? !Object.keys(e).some((t) => !Mn(n[t], e[t])) : !1;
}
function qn(n, e) {
  if (n === e)
    return n;
  const t = Ar(n) && Ar(e);
  if (t || zt(n) && zt(e)) {
    const r = t ? n.length : Object.keys(n).length, i = t ? e : Object.keys(e), s = i.length, a = t ? [] : {};
    let o = 0;
    for (let u = 0; u < s; u++) {
      const d = t ? u : i[u];
      a[d] = qn(n[d], e[d]), a[d] === n[d] && o++;
    }
    return r === s && o === r ? n : a;
  }
  return e;
}
function Wt(n, e) {
  if (n && !e || e && !n)
    return !1;
  for (const t in n)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function Ar(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function zt(n) {
  if (!Ur(n))
    return !1;
  const e = n.constructor;
  if (typeof e > "u")
    return !0;
  const t = e.prototype;
  return !(!Ur(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function Ur(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function jt(n) {
  return Array.isArray(n);
}
function Bn(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
function Mr(n) {
  Bn(0).then(n);
}
function ns() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function Jt(n, e, t) {
  return t.isDataEqual != null && t.isDataEqual(n, e) ? n : typeof t.structuralSharing == "function" ? t.structuralSharing(n, e) : t.structuralSharing !== !1 ? qn(n, e) : e;
}
class is extends rt {
  constructor() {
    super(), this.setup = (e) => {
      if (!Ze && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), window.addEventListener("focus", t, !1), () => {
          window.removeEventListener("visibilitychange", t), window.removeEventListener("focus", t);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var t;
    this.setup = e, (t = this.cleanup) == null || t.call(this), this.cleanup = e((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    });
  }
  setFocused(e) {
    this.focused !== e && (this.focused = e, this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const wt = new is(), qr = ["online", "offline"];
class ss extends rt {
  constructor() {
    super(), this.setup = (e) => {
      if (!Ze && window.addEventListener) {
        const t = () => e();
        return qr.forEach((r) => {
          window.addEventListener(r, t, !1);
        }), () => {
          qr.forEach((r) => {
            window.removeEventListener(r, t);
          });
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var t;
    this.setup = e, (t = this.cleanup) == null || t.call(this), this.cleanup = e((r) => {
      typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
    });
  }
  setOnline(e) {
    this.online !== e && (this.online = e, this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const St = new ss();
function as(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function Lt(n) {
  return (n ?? "online") === "online" ? St.isOnline() : !0;
}
class Qn {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function mt(n) {
  return n instanceof Qn;
}
function Hn(n) {
  let e = !1, t = 0, r = !1, i, s, a;
  const o = new Promise((b, y) => {
    s = b, a = y;
  }), u = (b) => {
    r || (p(new Qn(b)), n.abort == null || n.abort());
  }, d = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, c = () => !wt.isFocused() || n.networkMode !== "always" && !St.isOnline(), h = (b) => {
    r || (r = !0, n.onSuccess == null || n.onSuccess(b), i == null || i(), s(b));
  }, p = (b) => {
    r || (r = !0, n.onError == null || n.onError(b), i == null || i(), a(b));
  }, v = () => new Promise((b) => {
    i = (y) => {
      const m = r || !c();
      return m && b(y), m;
    }, n.onPause == null || n.onPause();
  }).then(() => {
    i = void 0, r || n.onContinue == null || n.onContinue();
  }), w = () => {
    if (r)
      return;
    let b;
    try {
      b = n.fn();
    } catch (y) {
      b = Promise.reject(y);
    }
    Promise.resolve(b).then(h).catch((y) => {
      var m, E;
      if (r)
        return;
      const R = (m = n.retry) != null ? m : 3, k = (E = n.retryDelay) != null ? E : as, C = typeof k == "function" ? k(t, y) : k, _ = R === !0 || typeof R == "number" && t < R || typeof R == "function" && R(t, y);
      if (e || !_) {
        p(y);
        return;
      }
      t++, n.onFail == null || n.onFail(t, y), Bn(C).then(() => {
        if (c())
          return v();
      }).then(() => {
        e ? p(y) : w();
      });
    });
  };
  return Lt(n.networkMode) ? w() : v().then(w), {
    promise: o,
    cancel: u,
    continue: () => (i == null ? void 0 : i()) ? o : Promise.resolve(),
    cancelRetry: d,
    continueRetry: f
  };
}
const vr = console;
function os() {
  let n = [], e = 0, t = (f) => {
    f();
  }, r = (f) => {
    f();
  };
  const i = (f) => {
    let c;
    e++;
    try {
      c = f();
    } finally {
      e--, e || o();
    }
    return c;
  }, s = (f) => {
    e ? n.push(f) : Mr(() => {
      t(f);
    });
  }, a = (f) => (...c) => {
    s(() => {
      f(...c);
    });
  }, o = () => {
    const f = n;
    n = [], f.length && Mr(() => {
      r(() => {
        f.forEach((c) => {
          t(c);
        });
      });
    });
  };
  return {
    batch: i,
    batchCalls: a,
    schedule: s,
    setNotifyFunction: (f) => {
      t = f;
    },
    setBatchNotifyFunction: (f) => {
      r = f;
    }
  };
}
const $ = os();
class Vn {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), $t(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (Ze ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class us extends Vn {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || vr, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || cs(this.options), this.state = this.initialState, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(e, t) {
    const r = Jt(this.state.data, e, this.options);
    return this.dispatch({
      data: r,
      type: "success",
      dataUpdatedAt: t == null ? void 0 : t.updatedAt,
      manual: t == null ? void 0 : t.manual
    }), r;
  }
  setState(e, t) {
    this.dispatch({
      type: "setState",
      state: e,
      setStateOptions: t
    });
  }
  cancel(e) {
    var t;
    const r = this.promise;
    return (t = this.retryer) == null || t.cancel(e), r ? r.then(te).catch(te) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((e) => e.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e) => e.getCurrentResult().isStale);
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Un(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var e;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t && t.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  onOnline() {
    var e;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t && t.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: e
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(e, t) {
    var r, i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && t != null && t.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var s;
        return (s = this.retryer) == null || s.continueRetry(), this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const p = this.observers.find((v) => v.options.queryFn);
      p && this.setOptions(p.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const a = ns(), o = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, u = (p) => {
      Object.defineProperty(p, "signal", {
        enumerable: !0,
        get: () => {
          if (a)
            return this.abortSignalConsumed = !0, a.signal;
        }
      });
    };
    u(o);
    const d = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), f = {
      fetchOptions: t,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: d
    };
    if (u(f), (r = this.options.behavior) == null || r.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) {
      var c;
      this.dispatch({
        type: "fetch",
        meta: (c = f.fetchOptions) == null ? void 0 : c.meta
      });
    }
    const h = (p) => {
      if (mt(p) && p.silent || this.dispatch({
        type: "error",
        error: p
      }), !mt(p)) {
        var v, w, b, y;
        (v = (w = this.cache.config).onError) == null || v.call(w, p, this), (b = (y = this.cache.config).onSettled) == null || b.call(y, this.state.data, p, this), process.env.NODE_ENV !== "production" && this.logger.error(p);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = Hn({
      fn: f.fetchFn,
      abort: a == null ? void 0 : a.abort.bind(a),
      onSuccess: (p) => {
        var v, w, b, y;
        if (typeof p > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), h(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(p), (v = (w = this.cache.config).onSuccess) == null || v.call(w, p, this), (b = (y = this.cache.config).onSettled) == null || b.call(y, p, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: h,
      onFail: (p, v) => {
        this.dispatch({
          type: "failed",
          failureCount: p,
          error: v
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(e) {
    const t = (r) => {
      var i, s;
      switch (e.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...r,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...r,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...r,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (i = e.meta) != null ? i : null,
            fetchStatus: Lt(this.options.networkMode) ? "fetching" : "paused",
            ...!r.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...r,
            data: e.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (s = e.dataUpdatedAt) != null ? s : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const a = e.error;
          return mt(a) && a.revert && this.revertState ? {
            ...this.revertState,
            fetchStatus: "idle"
          } : {
            ...r,
            error: a,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: a,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...r,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...r,
            ...e.state
          };
      }
    };
    this.state = t(this.state), $.batch(() => {
      this.observers.forEach((r) => {
        r.onQueryUpdate(e);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }
}
function cs(n) {
  const e = typeof n.initialData == "function" ? n.initialData() : n.initialData, t = typeof e < "u", r = t ? typeof n.initialDataUpdatedAt == "function" ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: t ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: t ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class ls extends rt {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, t, r) {
    var i;
    const s = t.queryKey, a = (i = t.queryHash) != null ? i : gr(s, t);
    let o = this.get(a);
    return o || (o = new us({
      cache: this,
      logger: e.getLogger(),
      queryKey: s,
      queryHash: a,
      options: e.defaultQueryOptions(t),
      state: r,
      defaultOptions: e.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(e) {
    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const t = this.queriesMap[e.queryHash];
    t && (e.destroy(), this.queries = this.queries.filter((r) => r !== e), t === e && delete this.queriesMap[e.queryHash], this.notify({
      type: "removed",
      query: e
    }));
  }
  clear() {
    $.batch(() => {
      this.queries.forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.queriesMap[e];
  }
  getAll() {
    return this.queries;
  }
  find(e, t) {
    const [r] = Oe(e, t);
    return typeof r.exact > "u" && (r.exact = !0), this.queries.find((i) => Nr(r, i));
  }
  findAll(e, t) {
    const [r] = Oe(e, t);
    return Object.keys(r).length > 0 ? this.queries.filter((i) => Nr(r, i)) : this.queries;
  }
  notify(e) {
    $.batch(() => {
      this.listeners.forEach(({
        listener: t
      }) => {
        t(e);
      });
    });
  }
  onFocus() {
    $.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    $.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class fs extends Vn {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || vr, this.observers = [], this.state = e.state || ds(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(e) {
    this.dispatch({
      type: "setState",
      state: e
    });
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers = this.observers.filter((t) => t !== e), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var e, t;
    return (e = (t = this.retryer) == null ? void 0 : t.continue()) != null ? e : this.execute();
  }
  async execute() {
    const e = () => {
      var _;
      return this.retryer = Hn({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (P, j) => {
          this.dispatch({
            type: "failed",
            failureCount: P,
            error: j
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (_ = this.options.retry) != null ? _ : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, t = this.state.status === "loading";
    try {
      var r, i, s, a, o, u, d, f;
      if (!t) {
        var c, h, p, v;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((c = (h = this.mutationCache.config).onMutate) == null ? void 0 : c.call(h, this.state.variables, this));
        const P = await ((p = (v = this.options).onMutate) == null ? void 0 : p.call(v, this.state.variables));
        P !== this.state.context && this.dispatch({
          type: "loading",
          context: P,
          variables: this.state.variables
        });
      }
      const _ = await e();
      return await ((r = (i = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(i, _, this.state.variables, this.state.context, this)), await ((s = (a = this.options).onSuccess) == null ? void 0 : s.call(a, _, this.state.variables, this.state.context)), await ((o = (u = this.mutationCache.config).onSettled) == null ? void 0 : o.call(u, _, null, this.state.variables, this.state.context, this)), await ((d = (f = this.options).onSettled) == null ? void 0 : d.call(f, _, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: _
      }), _;
    } catch (_) {
      try {
        var w, b, y, m, E, R, k, C;
        throw await ((w = (b = this.mutationCache.config).onError) == null ? void 0 : w.call(b, _, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(_), await ((y = (m = this.options).onError) == null ? void 0 : y.call(m, _, this.state.variables, this.state.context)), await ((E = (R = this.mutationCache.config).onSettled) == null ? void 0 : E.call(R, void 0, _, this.state.variables, this.state.context, this)), await ((k = (C = this.options).onSettled) == null ? void 0 : k.call(C, void 0, _, this.state.variables, this.state.context)), _;
      } finally {
        this.dispatch({
          type: "error",
          error: _
        });
      }
    }
  }
  dispatch(e) {
    const t = (r) => {
      switch (e.type) {
        case "failed":
          return {
            ...r,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...r,
            isPaused: !0
          };
        case "continue":
          return {
            ...r,
            isPaused: !1
          };
        case "loading":
          return {
            ...r,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Lt(this.options.networkMode),
            status: "loading",
            variables: e.variables
          };
        case "success":
          return {
            ...r,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: e.error,
            failureCount: r.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...r,
            ...e.state
          };
      }
    };
    this.state = t(this.state), $.batch(() => {
      this.observers.forEach((r) => {
        r.onMutationUpdate(e);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
}
function ds() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
class hs extends rt {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, t, r) {
    const i = new fs({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(t),
      state: r,
      defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
    });
    return this.add(i), i;
  }
  add(e) {
    this.mutations.push(e), this.notify({
      type: "added",
      mutation: e
    });
  }
  remove(e) {
    this.mutations = this.mutations.filter((t) => t !== e), this.notify({
      type: "removed",
      mutation: e
    });
  }
  clear() {
    $.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((t) => Fr(e, t));
  }
  findAll(e) {
    return this.mutations.filter((t) => Fr(e, t));
  }
  notify(e) {
    $.batch(() => {
      this.listeners.forEach(({
        listener: t
      }) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    var e;
    return this.resuming = ((e = this.resuming) != null ? e : Promise.resolve()).then(() => {
      const t = this.mutations.filter((r) => r.state.isPaused);
      return $.batch(() => t.reduce((r, i) => r.then(() => i.continue().catch(te)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function ps() {
  return {
    onFetch: (n) => {
      n.fetchFn = () => {
        var e, t, r, i, s, a;
        const o = (e = n.fetchOptions) == null || (t = e.meta) == null ? void 0 : t.refetchPage, u = (r = n.fetchOptions) == null || (i = r.meta) == null ? void 0 : i.fetchMore, d = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", c = (u == null ? void 0 : u.direction) === "backward", h = ((s = n.state.data) == null ? void 0 : s.pages) || [], p = ((a = n.state.data) == null ? void 0 : a.pageParams) || [];
        let v = p, w = !1;
        const b = (C) => {
          Object.defineProperty(C, "signal", {
            enumerable: !0,
            get: () => {
              var _;
              if ((_ = n.signal) != null && _.aborted)
                w = !0;
              else {
                var P;
                (P = n.signal) == null || P.addEventListener("abort", () => {
                  w = !0;
                });
              }
              return n.signal;
            }
          });
        }, y = n.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + n.options.queryHash + "'")), m = (C, _, P, j) => (v = j ? [_, ...v] : [...v, _], j ? [P, ...C] : [...C, P]), E = (C, _, P, j) => {
          if (w)
            return Promise.reject("Cancelled");
          if (typeof P > "u" && !_ && C.length)
            return Promise.resolve(C);
          const F = {
            queryKey: n.queryKey,
            pageParam: P,
            meta: n.options.meta
          };
          b(F);
          const q = y(F);
          return Promise.resolve(q).then((W) => m(C, P, W, j));
        };
        let R;
        if (!h.length)
          R = E([]);
        else if (f) {
          const C = typeof d < "u", _ = C ? d : Br(n.options, h);
          R = E(h, C, _);
        } else if (c) {
          const C = typeof d < "u", _ = C ? d : gs(n.options, h);
          R = E(h, C, _, !0);
        } else {
          v = [];
          const C = typeof n.options.getNextPageParam > "u";
          R = (o && h[0] ? o(h[0], 0, h) : !0) ? E([], C, p[0]) : Promise.resolve(m([], p[0], h[0]));
          for (let P = 1; P < h.length; P++)
            R = R.then((j) => {
              if (o && h[P] ? o(h[P], P, h) : !0) {
                const q = C ? p[P] : Br(n.options, j);
                return E(j, C, q);
              }
              return Promise.resolve(m(j, p[P], h[P]));
            });
        }
        return R.then((C) => ({
          pages: C,
          pageParams: v
        }));
      };
    }
  };
}
function Br(n, e) {
  return n.getNextPageParam == null ? void 0 : n.getNextPageParam(e[e.length - 1], e);
}
function gs(n, e) {
  return n.getPreviousPageParam == null ? void 0 : n.getPreviousPageParam(e[0], e);
}
class vs {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new ls(), this.mutationCache = e.mutationCache || new hs(), this.logger = e.logger || vr, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = wt.subscribe(() => {
      wt.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = St.subscribe(() => {
      St.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, t;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (t = this.unsubscribeOnline) == null || t.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, t) {
    const [r] = Oe(e, t);
    return r.fetchStatus = "fetching", this.queryCache.findAll(r).length;
  }
  isMutating(e) {
    return this.mutationCache.findAll({
      ...e,
      fetching: !0
    }).length;
  }
  getQueryData(e, t) {
    var r;
    return (r = this.queryCache.find(e, t)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(e, t, r) {
    const i = Je(e, t, r), s = this.getQueryData(i.queryKey);
    return s ? Promise.resolve(s) : this.fetchQuery(i);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({
      queryKey: t,
      state: r
    }) => {
      const i = r.data;
      return [t, i];
    });
  }
  setQueryData(e, t, r) {
    const i = this.queryCache.find(e), s = i == null ? void 0 : i.state.data, a = rs(t, s);
    if (typeof a > "u")
      return;
    const o = Je(e), u = this.defaultQueryOptions(o);
    return this.queryCache.build(this, u).setData(a, {
      ...r,
      manual: !0
    });
  }
  setQueriesData(e, t, r) {
    return $.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, t, r)]));
  }
  getQueryState(e, t) {
    var r;
    return (r = this.queryCache.find(e, t)) == null ? void 0 : r.state;
  }
  removeQueries(e, t) {
    const [r] = Oe(e, t), i = this.queryCache;
    $.batch(() => {
      i.findAll(r).forEach((s) => {
        i.remove(s);
      });
    });
  }
  resetQueries(e, t, r) {
    const [i, s] = Oe(e, t, r), a = this.queryCache, o = {
      type: "active",
      ...i
    };
    return $.batch(() => (a.findAll(i).forEach((u) => {
      u.reset();
    }), this.refetchQueries(o, s)));
  }
  cancelQueries(e, t, r) {
    const [i, s = {}] = Oe(e, t, r);
    typeof s.revert > "u" && (s.revert = !0);
    const a = $.batch(() => this.queryCache.findAll(i).map((o) => o.cancel(s)));
    return Promise.all(a).then(te).catch(te);
  }
  invalidateQueries(e, t, r) {
    const [i, s] = Oe(e, t, r);
    return $.batch(() => {
      var a, o;
      if (this.queryCache.findAll(i).forEach((d) => {
        d.invalidate();
      }), i.refetchType === "none")
        return Promise.resolve();
      const u = {
        ...i,
        type: (a = (o = i.refetchType) != null ? o : i.type) != null ? a : "active"
      };
      return this.refetchQueries(u, s);
    });
  }
  refetchQueries(e, t, r) {
    const [i, s] = Oe(e, t, r), a = $.batch(() => this.queryCache.findAll(i).filter((u) => !u.isDisabled()).map((u) => {
      var d;
      return u.fetch(void 0, {
        ...s,
        cancelRefetch: (d = s == null ? void 0 : s.cancelRefetch) != null ? d : !0,
        meta: {
          refetchPage: i.refetchPage
        }
      });
    }));
    let o = Promise.all(a).then(te);
    return s != null && s.throwOnError || (o = o.catch(te)), o;
  }
  fetchQuery(e, t, r) {
    const i = Je(e, t, r), s = this.defaultQueryOptions(i);
    typeof s.retry > "u" && (s.retry = !1);
    const a = this.queryCache.build(this, s);
    return a.isStaleByTime(s.staleTime) ? a.fetch(s) : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, t, r) {
    return this.fetchQuery(e, t, r).then(te).catch(te);
  }
  fetchInfiniteQuery(e, t, r) {
    const i = Je(e, t, r);
    return i.behavior = ps(), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(e, t, r) {
    return this.fetchInfiniteQuery(e, t, r).then(te).catch(te);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  setQueryDefaults(e, t) {
    const r = this.queryDefaults.find((i) => ke(e) === ke(i.queryKey));
    r ? r.defaultOptions = t : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const t = this.queryDefaults.find((r) => Ue(e, r.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((i) => Ue(e, i.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), t == null ? void 0 : t.defaultOptions;
  }
  setMutationDefaults(e, t) {
    const r = this.mutationDefaults.find((i) => ke(e) === ke(i.mutationKey));
    r ? r.defaultOptions = t : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const t = this.mutationDefaults.find((r) => Ue(e, r.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((i) => Ue(e, i.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), t == null ? void 0 : t.defaultOptions;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const t = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
      ...e,
      _defaulted: !0
    };
    return !t.queryHash && t.queryKey && (t.queryHash = gr(t.queryKey, t)), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.useErrorBoundary > "u" && (t.useErrorBoundary = !!t.suspense), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class ys extends rt {
  constructor(e, t) {
    super(), this.client = e, this.options = t, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), Qr(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Yt(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Yt(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, t) {
    const r = this.options, i = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), process.env.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), Wt(r, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
    const s = this.hasListeners();
    s && Hr(this.currentQuery, i, this.options, r) && this.executeFetch(), this.updateResult(t), s && (this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    s && (this.currentQuery !== i || this.options.enabled !== r.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a);
  }
  getOptimisticResult(e) {
    const t = this.client.getQueryCache().build(this.client, e), r = this.createResult(t, e);
    return bs(this, r, e) && (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(e) {
    const t = {};
    return Object.keys(e).forEach((r) => {
      Object.defineProperty(t, r, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(r), e[r])
      });
    }), t;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: e,
    ...t
  } = {}) {
    return this.fetch({
      ...t,
      meta: {
        refetchPage: e
      }
    });
  }
  fetchOptimistic(e) {
    const t = this.client.defaultQueryOptions(e), r = this.client.getQueryCache().build(this.client, t);
    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, t));
  }
  fetch(e) {
    var t;
    return this.executeFetch({
      ...e,
      cancelRefetch: (t = e.cancelRefetch) != null ? t : !0
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(e) {
    this.updateQuery();
    let t = this.currentQuery.fetch(this.options, e);
    return e != null && e.throwOnError || (t = t.catch(te)), t;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), Ze || this.currentResult.isStale || !$t(this.options.staleTime))
      return;
    const t = Un(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, t);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !(Ze || this.options.enabled === !1 || !$t(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || wt.isFocused()) && this.executeFetch();
    }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }
  createResult(e, t) {
    const r = this.currentQuery, i = this.options, s = this.currentResult, a = this.currentResultState, o = this.currentResultOptions, u = e !== r, d = u ? e.state : this.currentQueryInitialState, f = u ? this.currentResult : this.previousQueryResult, {
      state: c
    } = e;
    let {
      dataUpdatedAt: h,
      error: p,
      errorUpdatedAt: v,
      fetchStatus: w,
      status: b
    } = c, y = !1, m = !1, E;
    if (t._optimisticResults) {
      const P = this.hasListeners(), j = !P && Qr(e, t), F = P && Hr(e, r, t, i);
      (j || F) && (w = Lt(e.options.networkMode) ? "fetching" : "paused", h || (b = "loading")), t._optimisticResults === "isRestoring" && (w = "idle");
    }
    if (t.keepPreviousData && !c.dataUpdatedAt && f != null && f.isSuccess && b !== "error")
      E = f.data, h = f.dataUpdatedAt, b = f.status, y = !0;
    else if (t.select && typeof c.data < "u")
      if (s && c.data === (a == null ? void 0 : a.data) && t.select === this.selectFn)
        E = this.selectResult;
      else
        try {
          this.selectFn = t.select, E = t.select(c.data), E = Jt(s == null ? void 0 : s.data, E, t), this.selectResult = E, this.selectError = null;
        } catch (P) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(P), this.selectError = P;
        }
    else
      E = c.data;
    if (typeof t.placeholderData < "u" && typeof E > "u" && b === "loading") {
      let P;
      if (s != null && s.isPlaceholderData && t.placeholderData === (o == null ? void 0 : o.placeholderData))
        P = s.data;
      else if (P = typeof t.placeholderData == "function" ? t.placeholderData() : t.placeholderData, t.select && typeof P < "u")
        try {
          P = t.select(P), this.selectError = null;
        } catch (j) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(j), this.selectError = j;
        }
      typeof P < "u" && (b = "success", E = Jt(s == null ? void 0 : s.data, P, t), m = !0);
    }
    this.selectError && (p = this.selectError, E = this.selectResult, v = Date.now(), b = "error");
    const R = w === "fetching", k = b === "loading", C = b === "error";
    return {
      status: b,
      fetchStatus: w,
      isLoading: k,
      isSuccess: b === "success",
      isError: C,
      isInitialLoading: k && R,
      data: E,
      dataUpdatedAt: h,
      error: p,
      errorUpdatedAt: v,
      failureCount: c.fetchFailureCount,
      failureReason: c.fetchFailureReason,
      errorUpdateCount: c.errorUpdateCount,
      isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
      isFetchedAfterMount: c.dataUpdateCount > d.dataUpdateCount || c.errorUpdateCount > d.errorUpdateCount,
      isFetching: R,
      isRefetching: R && !k,
      isLoadingError: C && c.dataUpdatedAt === 0,
      isPaused: w === "paused",
      isPlaceholderData: m,
      isPreviousData: y,
      isRefetchError: C && c.dataUpdatedAt !== 0,
      isStale: yr(e, t),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const t = this.currentResult, r = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, Wt(r, t))
      return;
    this.currentResult = r;
    const i = {
      cache: !0
    }, s = () => {
      if (!t)
        return !0;
      const {
        notifyOnChangeProps: a
      } = this.options, o = typeof a == "function" ? a() : a;
      if (o === "all" || !o && !this.trackedProps.size)
        return !0;
      const u = new Set(o ?? this.trackedProps);
      return this.options.useErrorBoundary && u.add("error"), Object.keys(this.currentResult).some((d) => {
        const f = d;
        return this.currentResult[f] !== t[f] && u.has(f);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && s() && (i.listeners = !0), this.notify({
      ...i,
      ...e
    });
  }
  updateQuery() {
    const e = this.client.getQueryCache().build(this.client, this.options);
    if (e === this.currentQuery)
      return;
    const t = this.currentQuery;
    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate(e) {
    const t = {};
    e.type === "success" ? t.onSuccess = !e.manual : e.type === "error" && !mt(e.error) && (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    $.batch(() => {
      if (e.onSuccess) {
        var t, r, i, s;
        (t = (r = this.options).onSuccess) == null || t.call(r, this.currentResult.data), (i = (s = this.options).onSettled) == null || i.call(s, this.currentResult.data, null);
      } else if (e.onError) {
        var a, o, u, d;
        (a = (o = this.options).onError) == null || a.call(o, this.currentResult.error), (u = (d = this.options).onSettled) == null || u.call(d, void 0, this.currentResult.error);
      }
      e.listeners && this.listeners.forEach(({
        listener: f
      }) => {
        f(this.currentResult);
      }), e.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function ms(n, e) {
  return e.enabled !== !1 && !n.state.dataUpdatedAt && !(n.state.status === "error" && e.retryOnMount === !1);
}
function Qr(n, e) {
  return ms(n, e) || n.state.dataUpdatedAt > 0 && Yt(n, e, e.refetchOnMount);
}
function Yt(n, e, t) {
  if (e.enabled !== !1) {
    const r = typeof t == "function" ? t(n) : t;
    return r === "always" || r !== !1 && yr(n, e);
  }
  return !1;
}
function Hr(n, e, t, r) {
  return t.enabled !== !1 && (n !== e || r.enabled === !1) && (!t.suspense || n.state.status !== "error") && yr(n, t);
}
function yr(n, e) {
  return n.isStaleByTime(e.staleTime);
}
function bs(n, e, t) {
  return t.keepPreviousData ? !1 : t.placeholderData !== void 0 ? e.isPlaceholderData : !Wt(n.getCurrentResult(), e);
}
var Gt = { exports: {} }, Mt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function ws() {
  if (Vr)
    return Mt;
  Vr = 1;
  var n = kt;
  function e(c, h) {
    return c === h && (c !== 0 || 1 / c === 1 / h) || c !== c && h !== h;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = n.useState, i = n.useEffect, s = n.useLayoutEffect, a = n.useDebugValue;
  function o(c, h) {
    var p = h(), v = r({ inst: { value: p, getSnapshot: h } }), w = v[0].inst, b = v[1];
    return s(function() {
      w.value = p, w.getSnapshot = h, u(w) && b({ inst: w });
    }, [c, p, h]), i(function() {
      return u(w) && b({ inst: w }), c(function() {
        u(w) && b({ inst: w });
      });
    }, [c]), a(p), p;
  }
  function u(c) {
    var h = c.getSnapshot;
    c = c.value;
    try {
      var p = h();
      return !t(c, p);
    } catch {
      return !0;
    }
  }
  function d(c, h) {
    return h();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : o;
  return Mt.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : f, Mt;
}
var qt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function Ss() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = kt, e = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function t(E) {
      {
        for (var R = arguments.length, k = new Array(R > 1 ? R - 1 : 0), C = 1; C < R; C++)
          k[C - 1] = arguments[C];
        r("error", E, k);
      }
    }
    function r(E, R, k) {
      {
        var C = e.ReactDebugCurrentFrame, _ = C.getStackAddendum();
        _ !== "" && (R += "%s", k = k.concat([_]));
        var P = k.map(function(j) {
          return String(j);
        });
        P.unshift("Warning: " + R), Function.prototype.apply.call(console[E], console, P);
      }
    }
    function i(E, R) {
      return E === R && (E !== 0 || 1 / E === 1 / R) || E !== E && R !== R;
    }
    var s = typeof Object.is == "function" ? Object.is : i, a = n.useState, o = n.useEffect, u = n.useLayoutEffect, d = n.useDebugValue, f = !1, c = !1;
    function h(E, R, k) {
      f || n.startTransition !== void 0 && (f = !0, t("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var C = R();
      if (!c) {
        var _ = R();
        s(C, _) || (t("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var P = a({
        inst: {
          value: C,
          getSnapshot: R
        }
      }), j = P[0].inst, F = P[1];
      return u(function() {
        j.value = C, j.getSnapshot = R, p(j) && F({
          inst: j
        });
      }, [E, C, R]), o(function() {
        p(j) && F({
          inst: j
        });
        var q = function() {
          p(j) && F({
            inst: j
          });
        };
        return E(q);
      }, [E]), d(C), C;
    }
    function p(E) {
      var R = E.getSnapshot, k = E.value;
      try {
        var C = R();
        return !s(k, C);
      } catch {
        return !0;
      }
    }
    function v(E, R, k) {
      return R();
    }
    var w = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", b = !w, y = b ? v : h, m = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : y;
    qt.useSyncExternalStore = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), qt;
}
process.env.NODE_ENV === "production" ? Gt.exports = ws() : Gt.exports = Ss();
var Os = Gt.exports;
const Rs = Os.useSyncExternalStore, $r = /* @__PURE__ */ G.createContext(void 0), Kn = /* @__PURE__ */ G.createContext(!1);
function $n(n, e) {
  return n || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = $r), window.ReactQueryClientContext) : $r);
}
const Es = ({
  context: n
} = {}) => {
  const e = G.useContext($n(n, G.useContext(Kn)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, xs = ({
  client: n,
  children: e,
  context: t,
  contextSharing: r = !1
}) => {
  G.useEffect(() => (n.mount(), () => {
    n.unmount();
  }), [n]), process.env.NODE_ENV !== "production" && r && n.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const i = $n(t, r);
  return /* @__PURE__ */ G.createElement(Kn.Provider, {
    value: !t && r
  }, /* @__PURE__ */ G.createElement(i.Provider, {
    value: n
  }, e));
}, Wn = /* @__PURE__ */ G.createContext(!1), Ps = () => G.useContext(Wn);
Wn.Provider;
function Cs() {
  let n = !1;
  return {
    clearReset: () => {
      n = !1;
    },
    reset: () => {
      n = !0;
    },
    isReset: () => n
  };
}
const _s = /* @__PURE__ */ G.createContext(Cs()), ks = () => G.useContext(_s);
function js(n, e) {
  return typeof n == "function" ? n(...e) : !!n;
}
const Ls = (n, e) => {
  (n.suspense || n.useErrorBoundary) && (e.isReset() || (n.retryOnMount = !1));
}, Ds = (n) => {
  G.useEffect(() => {
    n.clearReset();
  }, [n]);
}, Ts = ({
  result: n,
  errorResetBoundary: e,
  useErrorBoundary: t,
  query: r
}) => n.isError && !e.isReset() && !n.isFetching && js(t, [n.error, r]), Is = (n) => {
  n.suspense && typeof n.staleTime != "number" && (n.staleTime = 1e3);
}, Ns = (n, e) => n.isLoading && n.isFetching && !e, Fs = (n, e, t) => (n == null ? void 0 : n.suspense) && Ns(e, t), As = (n, e, t) => e.fetchOptimistic(n).then(({
  data: r
}) => {
  n.onSuccess == null || n.onSuccess(r), n.onSettled == null || n.onSettled(r, null);
}).catch((r) => {
  t.clearReset(), n.onError == null || n.onError(r), n.onSettled == null || n.onSettled(void 0, r);
});
function Us(n, e) {
  const t = Es({
    context: n.context
  }), r = Ps(), i = ks(), s = t.defaultQueryOptions(n);
  s._optimisticResults = r ? "isRestoring" : "optimistic", s.onError && (s.onError = $.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = $.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = $.batchCalls(s.onSettled)), Is(s), Ls(s, i), Ds(i);
  const [a] = G.useState(() => new e(t, s)), o = a.getOptimisticResult(s);
  if (Rs(G.useCallback((u) => {
    const d = r ? () => {
    } : a.subscribe($.batchCalls(u));
    return a.updateResult(), d;
  }, [a, r]), () => a.getCurrentResult(), () => a.getCurrentResult()), G.useEffect(() => {
    a.setOptions(s, {
      listeners: !1
    });
  }, [s, a]), Fs(s, o, r))
    throw As(s, a, i);
  if (Ts({
    result: o,
    errorResetBoundary: i,
    useErrorBoundary: s.useErrorBoundary,
    query: a.getCurrentQuery()
  }))
    throw o.error;
  return s.notifyOnChangeProps ? o : a.trackResult(o);
}
function Ms(n, e, t) {
  const r = Je(n, e, t);
  return Us(r, ys);
}
const qs = ({
  children: n,
  queryClient: e
}) => /* @__PURE__ */ K.jsx(xs, { client: e, children: n }), zn = hr({
  height: 0,
  width: 0
}), Bs = ({
  children: n
}) => {
  const [e, t] = tt({
    height: 0,
    width: 0
  }), r = zi(
    () => t({
      height: window && window.innerHeight,
      width: window && window.innerWidth
    }),
    []
  );
  return je(() => (r(), window && window.addEventListener("resize", r), window && window.addEventListener(
    "touchstart",
    (i) => {
      i.touches.length > 1 && i.preventDefault();
    },
    {
      passive: !1
    }
  ), () => {
    window && window.removeEventListener("resize", r), window && window.removeEventListener("touchstart", () => {
      console.log("done touch start");
    });
  }), []), /* @__PURE__ */ K.jsx(zn.Provider, { value: e, children: n });
};
function X(n) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, X(n);
}
function Qs(n, e) {
  if (X(n) !== "object" || n === null)
    return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (X(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Jn(n) {
  var e = Qs(n, "string");
  return X(e) === "symbol" ? e : String(e);
}
function ce(n, e, t) {
  return e = Jn(e), e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function Hs() {
  if (console && console.warn) {
    for (var n, e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    typeof t[0] == "string" && (t[0] = "react-i18next:: ".concat(t[0])), (n = console).warn.apply(n, t);
  }
}
var Wr = {};
function Zt() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Wr[e[0]] || (typeof e[0] == "string" && (Wr[e[0]] = /* @__PURE__ */ new Date()), Hs.apply(void 0, e));
}
var Yn = function(e, t) {
  return function() {
    if (e.isInitialized)
      t();
    else {
      var r = function i() {
        setTimeout(function() {
          e.off("initialized", i);
        }, 0), t();
      };
      e.on("initialized", r);
    }
  };
};
function zr(n, e, t) {
  n.loadNamespaces(e, Yn(n, t));
}
function Jr(n, e, t, r) {
  typeof t == "string" && (t = [t]), t.forEach(function(i) {
    n.options.ns.indexOf(i) < 0 && n.options.ns.push(i);
  }), n.loadLanguages(e, Yn(n, r));
}
function Vs(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = e.languages[0], i = e.options ? e.options.fallbackLng : !1, s = e.languages[e.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  var a = function(u, d) {
    var f = e.services.backendConnector.state["".concat(u, "|").concat(d)];
    return f === -1 || f === 2;
  };
  return t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !a(e.isLanguageChangingTo, n) ? !1 : !!(e.hasResourceBundle(r, n) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || a(r, n) && (!i || a(s, n)));
}
function Ks(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!e.languages || !e.languages.length)
    return Zt("i18n.languages were undefined or empty", e.languages), !0;
  var r = e.options.ignoreJSONStructure !== void 0;
  return r ? e.hasLoadedNamespace(n, {
    lng: t.lng,
    precheck: function(s, a) {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !a(s.isLanguageChangingTo, n))
        return !1;
    }
  }) : Vs(n, e, t);
}
var $s = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ws = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, zs = function(e) {
  return Ws[e];
}, Js = function(e) {
  return e.replace($s, zs);
};
function Yr(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Gr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yr(Object(t), !0).forEach(function(r) {
      ce(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Yr(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
var Xt = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Js
};
function Ys() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Xt = Gr(Gr({}, Xt), n);
}
function Gs() {
  return Xt;
}
var Gn;
function Zs(n) {
  Gn = n;
}
function Xs() {
  return Gn;
}
function re(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zr(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Jn(r.key), r);
  }
}
function ne(n, e, t) {
  return e && Zr(n.prototype, e), t && Zr(n, t), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
var ea = {
  type: "3rdParty",
  init: function(e) {
    Ys(e.options.react), Zs(e);
  }
}, Zn = hr(), ta = function() {
  function n() {
    re(this, n), this.usedNamespaces = {};
  }
  return ne(n, [{
    key: "addUsedNamespaces",
    value: function(t) {
      var r = this;
      t.forEach(function(i) {
        r.usedNamespaces[i] || (r.usedNamespaces[i] = !0);
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function() {
      return Object.keys(this.usedNamespaces);
    }
  }]), n;
}();
function Xn(n) {
  if (Array.isArray(n))
    return n;
}
function ra(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r, i, s, a, o = [], u = !0, d = !1;
    try {
      if (s = (t = t.call(n)).next, e === 0) {
        if (Object(t) !== t)
          return;
        u = !1;
      } else
        for (; !(u = (r = s.call(t)).done) && (o.push(r.value), o.length !== e); u = !0)
          ;
    } catch (f) {
      d = !0, i = f;
    } finally {
      try {
        if (!u && t.return != null && (a = t.return(), Object(a) !== a))
          return;
      } finally {
        if (d)
          throw i;
      }
    }
    return o;
  }
}
function Xr(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function ei(n, e) {
  if (n) {
    if (typeof n == "string")
      return Xr(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Xr(n, e);
  }
}
function ti() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function na(n, e) {
  return Xn(n) || ra(n, e) || ei(n, e) || ti();
}
function en(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Bt(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? en(Object(t), !0).forEach(function(r) {
      ce(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : en(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
var ia = function(e, t) {
  var r = Ge();
  return je(function() {
    r.current = t ? r.current : e;
  }, [e, t]), r.current;
};
function sa(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.i18n, r = pr(Zn) || {}, i = r.i18n, s = r.defaultNS, a = t || i || Xs();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new ta()), !a) {
    Zt("You will need to pass in an i18next instance by using initReactI18next");
    var o = function(j, F) {
      return typeof F == "string" ? F : F && X(F) === "object" && typeof F.defaultValue == "string" ? F.defaultValue : Array.isArray(j) ? j[j.length - 1] : j;
    }, u = [o, {}, !1];
    return u.t = o, u.i18n = {}, u.ready = !1, u;
  }
  a.options.react && a.options.react.wait !== void 0 && Zt("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  var d = Bt(Bt(Bt({}, Gs()), a.options.react), e), f = d.useSuspense, c = d.keyPrefix, h = n || s || a.options && a.options.defaultNS;
  h = typeof h == "string" ? [h] : h || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(h);
  var p = (a.isInitialized || a.initializedStoreOnce) && h.every(function(P) {
    return Ks(P, a, d);
  });
  function v() {
    return a.getFixedT(e.lng || null, d.nsMode === "fallback" ? h : h[0], c);
  }
  var w = tt(v), b = na(w, 2), y = b[0], m = b[1], E = h.join();
  e.lng && (E = "".concat(e.lng).concat(E));
  var R = ia(E), k = Ge(!0);
  je(function() {
    var P = d.bindI18n, j = d.bindI18nStore;
    k.current = !0, !p && !f && (e.lng ? Jr(a, e.lng, h, function() {
      k.current && m(v);
    }) : zr(a, h, function() {
      k.current && m(v);
    })), p && R && R !== E && k.current && m(v);
    function F() {
      k.current && m(v);
    }
    return P && a && a.on(P, F), j && a && a.store.on(j, F), function() {
      k.current = !1, P && a && P.split(" ").forEach(function(q) {
        return a.off(q, F);
      }), j && a && j.split(" ").forEach(function(q) {
        return a.store.off(q, F);
      });
    };
  }, [a, E]);
  var C = Ge(!0);
  je(function() {
    k.current && !C.current && m(v), C.current = !1;
  }, [a, c]);
  var _ = [y, a, p];
  if (_.t = y, _.i18n = a, _.ready = p, p || !p && !f)
    return _;
  throw new Promise(function(P) {
    e.lng ? Jr(a, e.lng, h, function() {
      return P();
    }) : zr(a, h, function() {
      return P();
    });
  });
}
function aa(n) {
  var e = n.i18n, t = n.defaultNS, r = n.children, i = An(function() {
    return {
      i18n: e,
      defaultNS: t
    };
  }, [e, t]);
  return Ji(Zn.Provider, {
    value: i
  }, r);
}
function xe(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function er(n, e) {
  return er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, er(n, e);
}
function Dt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: n,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(n, "prototype", {
    writable: !1
  }), e && er(n, e);
}
function nt(n, e) {
  if (e && (X(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return xe(n);
}
function ue(n) {
  return ue = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ue(n);
}
function oa(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function ua(n) {
  return Xn(n) || oa(n) || ei(n) || ti();
}
function tn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function rn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? tn(Object(t), !0).forEach(function(r) {
      ce(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : tn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
var ca = {
  type: "logger",
  log: function(e) {
    this.output("log", e);
  },
  warn: function(e) {
    this.output("warn", e);
  },
  error: function(e) {
    this.output("error", e);
  },
  output: function(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
}, la = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    re(this, n), this.init(e, t);
  }
  return ne(n, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = t || ca, this.options = r, this.debug = r.debug;
    }
  }, {
    key: "setDebug",
    value: function(t) {
      this.debug = t;
    }
  }, {
    key: "log",
    value: function() {
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
      return this.forward(r, "log", "", !0);
    }
  }, {
    key: "warn",
    value: function() {
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
      return this.forward(r, "warn", "", !0);
    }
  }, {
    key: "error",
    value: function() {
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
      return this.forward(r, "error", "");
    }
  }, {
    key: "deprecate",
    value: function() {
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
      return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
    }
  }, {
    key: "forward",
    value: function(t, r, i, s) {
      return s && !this.debug ? null : (typeof t[0] == "string" && (t[0] = "".concat(i).concat(this.prefix, " ").concat(t[0])), this.logger[r](t));
    }
  }, {
    key: "create",
    value: function(t) {
      return new n(this.logger, rn(rn({}, {
        prefix: "".concat(this.prefix, ":").concat(t, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(t) {
      return t = t || this.options, t.prefix = t.prefix || this.prefix, new n(this.logger, t);
    }
  }]), n;
}(), oe = new la(), Pe = function() {
  function n() {
    re(this, n), this.observers = {};
  }
  return ne(n, [{
    key: "on",
    value: function(t, r) {
      var i = this;
      return t.split(" ").forEach(function(s) {
        i.observers[s] = i.observers[s] || [], i.observers[s].push(r);
      }), this;
    }
  }, {
    key: "off",
    value: function(t, r) {
      if (this.observers[t]) {
        if (!r) {
          delete this.observers[t];
          return;
        }
        this.observers[t] = this.observers[t].filter(function(i) {
          return i !== r;
        });
      }
    }
  }, {
    key: "emit",
    value: function(t) {
      for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
        i[s - 1] = arguments[s];
      if (this.observers[t]) {
        var a = [].concat(this.observers[t]);
        a.forEach(function(u) {
          u.apply(void 0, i);
        });
      }
      if (this.observers["*"]) {
        var o = [].concat(this.observers["*"]);
        o.forEach(function(u) {
          u.apply(u, [t].concat(i));
        });
      }
    }
  }]), n;
}();
function Ke() {
  var n, e, t = new Promise(function(r, i) {
    n = r, e = i;
  });
  return t.resolve = n, t.reject = e, t;
}
function nn(n) {
  return n == null ? "" : "" + n;
}
function fa(n, e, t) {
  n.forEach(function(r) {
    e[r] && (t[r] = e[r]);
  });
}
function mr(n, e, t) {
  function r(o) {
    return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
  }
  function i() {
    return !n || typeof n == "string";
  }
  for (var s = typeof e != "string" ? [].concat(e) : e.split("."); s.length > 1; ) {
    if (i())
      return {};
    var a = r(s.shift());
    !n[a] && t && (n[a] = new t()), Object.prototype.hasOwnProperty.call(n, a) ? n = n[a] : n = {};
  }
  return i() ? {} : {
    obj: n,
    k: r(s.shift())
  };
}
function sn(n, e, t) {
  var r = mr(n, e, Object), i = r.obj, s = r.k;
  i[s] = t;
}
function da(n, e, t, r) {
  var i = mr(n, e, Object), s = i.obj, a = i.k;
  s[a] = s[a] || [], r && (s[a] = s[a].concat(t)), r || s[a].push(t);
}
function Ot(n, e) {
  var t = mr(n, e), r = t.obj, i = t.k;
  if (r)
    return r[i];
}
function ha(n, e, t) {
  var r = Ot(n, t);
  return r !== void 0 ? r : Ot(e, t);
}
function ri(n, e, t) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in n ? typeof n[r] == "string" || n[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (n[r] = e[r]) : ri(n[r], e[r], t) : n[r] = e[r]);
  return n;
}
function Fe(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var pa = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function ga(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, function(e) {
    return pa[e];
  }) : n;
}
var Tt = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, va = [" ", ",", "?", "!", ";"];
function ya(n, e, t) {
  e = e || "", t = t || "";
  var r = va.filter(function(o) {
    return e.indexOf(o) < 0 && t.indexOf(o) < 0;
  });
  if (r.length === 0)
    return !0;
  var i = new RegExp("(".concat(r.map(function(o) {
    return o === "?" ? "\\?" : o;
  }).join("|"), ")")), s = !i.test(n);
  if (!s) {
    var a = n.indexOf(t);
    a > 0 && !i.test(n.substring(0, a)) && (s = !0);
  }
  return s;
}
function Rt(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (n) {
    if (n[e])
      return n[e];
    for (var r = e.split(t), i = n, s = 0; s < r.length; ++s) {
      if (!i || typeof i[r[s]] == "string" && s + 1 < r.length)
        return;
      if (i[r[s]] === void 0) {
        for (var a = 2, o = r.slice(s, s + a).join(t), u = i[o]; u === void 0 && r.length > s + a; )
          a++, o = r.slice(s, s + a).join(t), u = i[o];
        if (u === void 0)
          return;
        if (u === null)
          return null;
        if (e.endsWith(o)) {
          if (typeof u == "string")
            return u;
          if (o && typeof u[o] == "string")
            return u[o];
        }
        var d = r.slice(s + a).join(t);
        return d ? Rt(u, d, t) : void 0;
      }
      i = i[r[s]];
    }
    return i;
  }
}
function an(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function dt(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? an(Object(t), !0).forEach(function(r) {
      ce(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : an(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function ma(n) {
  var e = ba();
  return function() {
    var r = ue(n), i;
    if (e) {
      var s = ue(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return nt(this, i);
  };
}
function ba() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var wa = function(n) {
  Dt(t, n);
  var e = ma(t);
  function t(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return re(this, t), i = e.call(this), Tt && Pe.call(xe(i)), i.data = r || {}, i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
  }
  return ne(t, [{
    key: "addNamespaces",
    value: function(i) {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }
  }, {
    key: "removeNamespaces",
    value: function(i) {
      var s = this.options.ns.indexOf(i);
      s > -1 && this.options.ns.splice(s, 1);
    }
  }, {
    key: "getResource",
    value: function(i, s, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, d = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure, f = [i, s];
      a && typeof a != "string" && (f = f.concat(a)), a && typeof a == "string" && (f = f.concat(u ? a.split(u) : a)), i.indexOf(".") > -1 && (f = i.split("."));
      var c = Ot(this.data, f);
      return c || !d || typeof a != "string" ? c : Rt(this.data && this.data[i] && this.data[i][s], a, u);
    }
  }, {
    key: "addResource",
    value: function(i, s, a, o) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, d = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator, f = [i, s];
      a && (f = f.concat(d ? a.split(d) : a)), i.indexOf(".") > -1 && (f = i.split("."), o = s, s = f[1]), this.addNamespaces(s), sn(this.data, f, o), u.silent || this.emit("added", i, s, a, o);
    }
  }, {
    key: "addResources",
    value: function(i, s, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: !1
      };
      for (var u in a)
        (typeof a[u] == "string" || Object.prototype.toString.apply(a[u]) === "[object Array]") && this.addResource(i, s, u, a[u], {
          silent: !0
        });
      o.silent || this.emit("added", i, s, a);
    }
  }, {
    key: "addResourceBundle",
    value: function(i, s, a, o, u) {
      var d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: !1
      }, f = [i, s];
      i.indexOf(".") > -1 && (f = i.split("."), o = a, a = s, s = f[1]), this.addNamespaces(s);
      var c = Ot(this.data, f) || {};
      o ? ri(c, a, u) : c = dt(dt({}, c), a), sn(this.data, f, c), d.silent || this.emit("added", i, s, a);
    }
  }, {
    key: "removeResourceBundle",
    value: function(i, s) {
      this.hasResourceBundle(i, s) && delete this.data[i][s], this.removeNamespaces(s), this.emit("removed", i, s);
    }
  }, {
    key: "hasResourceBundle",
    value: function(i, s) {
      return this.getResource(i, s) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function(i, s) {
      return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? dt(dt({}, {}), this.getResource(i, s)) : this.getResource(i, s);
    }
  }, {
    key: "getDataByLanguage",
    value: function(i) {
      return this.data[i];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function(i) {
      var s = this.getDataByLanguage(i), a = s && Object.keys(s) || [];
      return !!a.find(function(o) {
        return s[o] && Object.keys(s[o]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      return this.data;
    }
  }]), t;
}(Pe), ni = {
  processors: {},
  addPostProcessor: function(e) {
    this.processors[e.name] = e;
  },
  handle: function(e, t, r, i, s) {
    var a = this;
    return e.forEach(function(o) {
      a.processors[o] && (t = a.processors[o].process(t, r, i, s));
    }), t;
  }
};
function on(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function J(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? on(Object(t), !0).forEach(function(r) {
      ce(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : on(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Sa(n) {
  var e = Oa();
  return function() {
    var r = ue(n), i;
    if (e) {
      var s = ue(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return nt(this, i);
  };
}
function Oa() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var un = {}, cn = function(n) {
  Dt(t, n);
  var e = Sa(t);
  function t(r) {
    var i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return re(this, t), i = e.call(this), Tt && Pe.call(xe(i)), fa(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, xe(i)), i.options = s, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = oe.create("translator"), i;
  }
  return ne(t, [{
    key: "changeLanguage",
    value: function(i) {
      i && (this.language = i);
    }
  }, {
    key: "exists",
    value: function(i) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (i == null)
        return !1;
      var a = this.resolve(i, s);
      return a && a.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function(i, s) {
      var a = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
      a === void 0 && (a = ":");
      var o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, u = s.ns || this.options.defaultNS || [], d = a && i.indexOf(a) > -1, f = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !ya(i, a, o);
      if (d && !f) {
        var c = i.match(this.interpolator.nestingRegexp);
        if (c && c.length > 0)
          return {
            key: i,
            namespaces: u
          };
        var h = i.split(a);
        (a !== o || a === o && this.options.ns.indexOf(h[0]) > -1) && (u = h.shift()), i = h.join(o);
      }
      return typeof u == "string" && (u = [u]), {
        key: i,
        namespaces: u
      };
    }
  }, {
    key: "translate",
    value: function(i, s, a) {
      var o = this;
      if (X(s) !== "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), X(s) === "object" && (s = J({}, s)), s || (s = {}), i == null)
        return "";
      Array.isArray(i) || (i = [String(i)]);
      var u = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails, d = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, f = this.extractFromKey(i[i.length - 1], s), c = f.key, h = f.namespaces, p = h[h.length - 1], v = s.lng || this.language, w = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (v && v.toLowerCase() === "cimode") {
        if (w) {
          var b = s.nsSeparator || this.options.nsSeparator;
          return u ? {
            res: "".concat(p).concat(b).concat(c),
            usedKey: c,
            exactUsedKey: c,
            usedLng: v,
            usedNS: p
          } : "".concat(p).concat(b).concat(c);
        }
        return u ? {
          res: c,
          usedKey: c,
          exactUsedKey: c,
          usedLng: v,
          usedNS: p
        } : c;
      }
      var y = this.resolve(i, s), m = y && y.res, E = y && y.usedKey || c, R = y && y.exactUsedKey || c, k = Object.prototype.toString.apply(m), C = ["[object Number]", "[object Function]", "[object RegExp]"], _ = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, P = !this.i18nFormat || this.i18nFormat.handleAsObject, j = typeof m != "string" && typeof m != "boolean" && typeof m != "number";
      if (P && m && j && C.indexOf(k) < 0 && !(typeof _ == "string" && k === "[object Array]")) {
        if (!s.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var F = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(E, m, J(J({}, s), {}, {
            ns: h
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return u ? (y.res = F, y) : F;
        }
        if (d) {
          var q = k === "[object Array]", se = q ? [] : {}, W = q ? R : E;
          for (var g in m)
            if (Object.prototype.hasOwnProperty.call(m, g)) {
              var O = "".concat(W).concat(d).concat(g);
              se[g] = this.translate(O, J(J({}, s), {
                joinArrays: !1,
                ns: h
              })), se[g] === O && (se[g] = m[g]);
            }
          m = se;
        }
      } else if (P && typeof _ == "string" && k === "[object Array]")
        m = m.join(_), m && (m = this.extendTranslation(m, i, s, a));
      else {
        var L = !1, B = !1, Q = s.count !== void 0 && typeof s.count != "string", I = t.hasDefaultValue(s), fe = Q ? this.pluralResolver.getSuffix(v, s.count, s) : "", Z = s["defaultValue".concat(fe)] || s.defaultValue;
        !this.isValidLookup(m) && I && (L = !0, m = Z), this.isValidLookup(m) || (B = !0, m = c);
        var ye = s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, st = ye && B ? void 0 : m, _e = I && Z !== m && this.options.updateMissing;
        if (B || L || _e) {
          if (this.logger.log(_e ? "updateKey" : "missingKey", v, p, c, _e ? Z : m), d) {
            var at = this.resolve(c, J(J({}, s), {}, {
              keySeparator: !1
            }));
            at && at.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var de = [], me = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && me && me[0])
            for (var be = 0; be < me.length; be++)
              de.push(me[be]);
          else
            this.options.saveMissingTo === "all" ? de = this.languageUtils.toResolveHierarchy(s.lng || this.language) : de.push(s.lng || this.language);
          var De = function(Se, Te, ot) {
            var ut = I && ot !== m ? ot : st;
            o.options.missingKeyHandler ? o.options.missingKeyHandler(Se, p, Te, ut, _e, s) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(Se, p, Te, ut, _e, s), o.emit("missingKey", Se, p, Te, m);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && Q ? de.forEach(function(we) {
            o.pluralResolver.getSuffixes(we, s).forEach(function(Se) {
              De([we], c + Se, s["defaultValue".concat(Se)] || Z);
            });
          }) : De(de, c, Z));
        }
        m = this.extendTranslation(m, i, s, y, a), B && m === c && this.options.appendNamespaceToMissingKey && (m = "".concat(p, ":").concat(c)), (B || L) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(p, ":").concat(c) : c, L ? m : void 0) : m = this.options.parseMissingKeyHandler(m));
      }
      return u ? (y.res = m, y) : m;
    }
  }, {
    key: "extendTranslation",
    value: function(i, s, a, o, u) {
      var d = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        i = this.i18nFormat.parse(i, J(J({}, this.options.interpolation.defaultVariables), a), o.usedLng, o.usedNS, o.usedKey, {
          resolved: o
        });
      else if (!a.skipInterpolation) {
        a.interpolation && this.interpolator.init(J(J({}, a), {
          interpolation: J(J({}, this.options.interpolation), a.interpolation)
        }));
        var f = typeof i == "string" && (a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), c;
        if (f) {
          var h = i.match(this.interpolator.nestingRegexp);
          c = h && h.length;
        }
        var p = a.replace && typeof a.replace != "string" ? a.replace : a;
        if (this.options.interpolation.defaultVariables && (p = J(J({}, this.options.interpolation.defaultVariables), p)), i = this.interpolator.interpolate(i, p, a.lng || this.language, a), f) {
          var v = i.match(this.interpolator.nestingRegexp), w = v && v.length;
          c < w && (a.nest = !1);
        }
        !a.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (a.lng = o.usedLng), a.nest !== !1 && (i = this.interpolator.nest(i, function() {
          for (var m = arguments.length, E = new Array(m), R = 0; R < m; R++)
            E[R] = arguments[R];
          return u && u[0] === E[0] && !a.context ? (d.logger.warn("It seems you are nesting recursively key: ".concat(E[0], " in key: ").concat(s[0])), null) : d.translate.apply(d, E.concat([s]));
        }, a)), a.interpolation && this.interpolator.reset();
      }
      var b = a.postProcess || this.options.postProcess, y = typeof b == "string" ? [b] : b;
      return i != null && y && y.length && a.applyPostProcessor !== !1 && (i = ni.handle(y, i, s, this.options && this.options.postProcessPassResolved ? J({
        i18nResolved: o
      }, a) : a, this)), i;
    }
  }, {
    key: "resolve",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o, u, d, f, c;
      return typeof i == "string" && (i = [i]), i.forEach(function(h) {
        if (!s.isValidLookup(o)) {
          var p = s.extractFromKey(h, a), v = p.key;
          u = v;
          var w = p.namespaces;
          s.options.fallbackNS && (w = w.concat(s.options.fallbackNS));
          var b = a.count !== void 0 && typeof a.count != "string", y = b && !a.ordinal && a.count === 0 && s.pluralResolver.shouldUseIntlApi(), m = a.context !== void 0 && (typeof a.context == "string" || typeof a.context == "number") && a.context !== "", E = a.lngs ? a.lngs : s.languageUtils.toResolveHierarchy(a.lng || s.language, a.fallbackLng);
          w.forEach(function(R) {
            s.isValidLookup(o) || (c = R, !un["".concat(E[0], "-").concat(R)] && s.utils && s.utils.hasLoadedNamespace && !s.utils.hasLoadedNamespace(c) && (un["".concat(E[0], "-").concat(R)] = !0, s.logger.warn('key "'.concat(u, '" for languages "').concat(E.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach(function(k) {
              if (!s.isValidLookup(o)) {
                f = k;
                var C = [v];
                if (s.i18nFormat && s.i18nFormat.addLookupKeys)
                  s.i18nFormat.addLookupKeys(C, v, k, R, a);
                else {
                  var _;
                  b && (_ = s.pluralResolver.getSuffix(k, a.count, a));
                  var P = "".concat(s.options.pluralSeparator, "zero");
                  if (b && (C.push(v + _), y && C.push(v + P)), m) {
                    var j = "".concat(v).concat(s.options.contextSeparator).concat(a.context);
                    C.push(j), b && (C.push(j + _), y && C.push(j + P));
                  }
                }
                for (var F; F = C.pop(); )
                  s.isValidLookup(o) || (d = F, o = s.getResource(k, R, F, a));
              }
            }));
          });
        }
      }), {
        res: o,
        usedKey: u,
        exactUsedKey: d,
        usedLng: f,
        usedNS: c
      };
    }
  }, {
    key: "isValidLookup",
    value: function(i) {
      return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === "");
    }
  }, {
    key: "getResource",
    value: function(i, s, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(i, s, a, o) : this.resourceStore.getResource(i, s, a, o);
    }
  }], [{
    key: "hasDefaultValue",
    value: function(i) {
      var s = "defaultValue";
      for (var a in i)
        if (Object.prototype.hasOwnProperty.call(i, a) && s === a.substring(0, s.length) && i[a] !== void 0)
          return !0;
      return !1;
    }
  }]), t;
}(Pe);
function Qt(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
var ln = function() {
  function n(e) {
    re(this, n), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = oe.create("languageUtils");
  }
  return ne(n, [{
    key: "getScriptPartFromCode",
    value: function(t) {
      if (!t || t.indexOf("-") < 0)
        return null;
      var r = t.split("-");
      return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function(t) {
      if (!t || t.indexOf("-") < 0)
        return t;
      var r = t.split("-");
      return this.formatLanguageCode(r[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function(t) {
      if (typeof t == "string" && t.indexOf("-") > -1) {
        var r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], i = t.split("-");
        return this.options.lowerCaseLng ? i = i.map(function(s) {
          return s.toLowerCase();
        }) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Qt(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Qt(i[1].toLowerCase())), r.indexOf(i[2].toLowerCase()) > -1 && (i[2] = Qt(i[2].toLowerCase()))), i.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
    }
  }, {
    key: "isSupportedCode",
    value: function(t) {
      return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function(t) {
      var r = this;
      if (!t)
        return null;
      var i;
      return t.forEach(function(s) {
        if (!i) {
          var a = r.formatLanguageCode(s);
          (!r.options.supportedLngs || r.isSupportedCode(a)) && (i = a);
        }
      }), !i && this.options.supportedLngs && t.forEach(function(s) {
        if (!i) {
          var a = r.getLanguagePartFromCode(s);
          if (r.isSupportedCode(a))
            return i = a;
          i = r.options.supportedLngs.find(function(o) {
            if (o === a)
              return o;
            if (!(o.indexOf("-") < 0 && a.indexOf("-") < 0) && o.indexOf(a) === 0)
              return o;
          });
        }
      }), i || (i = this.getFallbackCodes(this.options.fallbackLng)[0]), i;
    }
  }, {
    key: "getFallbackCodes",
    value: function(t, r) {
      if (!t)
        return [];
      if (typeof t == "function" && (t = t(r)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]")
        return t;
      if (!r)
        return t.default || [];
      var i = t[r];
      return i || (i = t[this.getScriptPartFromCode(r)]), i || (i = t[this.formatLanguageCode(r)]), i || (i = t[this.getLanguagePartFromCode(r)]), i || (i = t.default), i || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function(t, r) {
      var i = this, s = this.getFallbackCodes(r || this.options.fallbackLng || [], t), a = [], o = function(d) {
        d && (i.isSupportedCode(d) ? a.push(d) : i.logger.warn("rejecting language code not found in supportedLngs: ".concat(d)));
      };
      return typeof t == "string" && t.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)), s.forEach(function(u) {
        a.indexOf(u) < 0 && o(i.formatLanguageCode(u));
      }), a;
    }
  }]), n;
}(), Ra = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], Ea = {
  1: function(e) {
    return +(e > 1);
  },
  2: function(e) {
    return +(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  5: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  },
  6: function(e) {
    return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
  },
  7: function(e) {
    return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  8: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
  },
  9: function(e) {
    return +(e >= 2);
  },
  10: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
  },
  11: function(e) {
    return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
  },
  12: function(e) {
    return +(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return +(e !== 0);
  },
  14: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
  },
  15: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  16: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
  },
  17: function(e) {
    return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
  },
  18: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : 2;
  },
  19: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
  },
  20: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
  },
  21: function(e) {
    return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
  },
  22: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
  }
}, xa = ["v1", "v2", "v3"], fn = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Pa() {
  var n = {};
  return Ra.forEach(function(e) {
    e.lngs.forEach(function(t) {
      n[t] = {
        numbers: e.nr,
        plurals: Ea[e.fc]
      };
    });
  }), n;
}
var Ca = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    re(this, n), this.languageUtils = e, this.options = t, this.logger = oe.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Pa();
  }
  return ne(n, [{
    key: "addRule",
    value: function(t, r) {
      this.rules[t] = r;
    }
  }, {
    key: "getRule",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi())
        try {
          return new Intl.PluralRules(t, {
            type: r.ordinal ? "ordinal" : "cardinal"
          });
        } catch {
          return;
        }
      return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
    }
  }, {
    key: "needsPlural",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(t, r);
      return this.shouldUseIntlApi() ? i && i.resolvedOptions().pluralCategories.length > 1 : i && i.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function(t, r) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(t, i).map(function(s) {
        return "".concat(r).concat(s);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(t) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = this.getRule(t, i);
      return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort(function(a, o) {
        return fn[a] - fn[o];
      }).map(function(a) {
        return "".concat(r.options.prepend).concat(a);
      }) : s.numbers.map(function(a) {
        return r.getSuffix(t, a, i);
      }) : [];
    }
  }, {
    key: "getSuffix",
    value: function(t, r) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = this.getRule(t, i);
      return s ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(s.select(r)) : this.getSuffixRetroCompatible(s, r) : (this.logger.warn("no plural rule found for: ".concat(t)), "");
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function(t, r) {
      var i = this, s = t.noAbs ? t.plurals(r) : t.plurals(Math.abs(r)), a = t.numbers[s];
      this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
      var o = function() {
        return i.options.prepend && a.toString() ? i.options.prepend + a.toString() : a.toString();
      };
      return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? "_plural_".concat(a.toString()) : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !xa.includes(this.options.compatibilityJSON);
    }
  }]), n;
}();
function dn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ie(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? dn(Object(t), !0).forEach(function(r) {
      ce(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : dn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function hn(n, e, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = ha(n, e, t);
  return !s && i && typeof t == "string" && (s = Rt(n, t, r), s === void 0 && (s = Rt(e, t, r))), s;
}
var _a = function() {
  function n() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    re(this, n), this.logger = oe.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(t) {
      return t;
    }, this.init(e);
  }
  return ne(n, [{
    key: "init",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      t.interpolation || (t.interpolation = {
        escapeValue: !0
      });
      var r = t.interpolation;
      this.escape = r.escape !== void 0 ? r.escape : ga, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? Fe(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? Fe(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? Fe(r.nestingPrefix) : r.nestingPrefixEscaped || Fe("$t("), this.nestingSuffix = r.nestingSuffix ? Fe(r.nestingSuffix) : r.nestingSuffixEscaped || Fe(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function() {
      this.options && this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function() {
      var t = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(t, "g");
      var r = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(r, "g");
      var i = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(i, "g");
    }
  }, {
    key: "interpolate",
    value: function(t, r, i, s) {
      var a = this, o, u, d, f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function c(b) {
        return b.replace(/\$/g, "$$$$");
      }
      var h = function(y) {
        if (y.indexOf(a.formatSeparator) < 0) {
          var m = hn(r, f, y, a.options.keySeparator, a.options.ignoreJSONStructure);
          return a.alwaysFormat ? a.format(m, void 0, i, ie(ie(ie({}, s), r), {}, {
            interpolationkey: y
          })) : m;
        }
        var E = y.split(a.formatSeparator), R = E.shift().trim(), k = E.join(a.formatSeparator).trim();
        return a.format(hn(r, f, R, a.options.keySeparator, a.options.ignoreJSONStructure), k, i, ie(ie(ie({}, s), r), {}, {
          interpolationkey: R
        }));
      };
      this.resetRegExp();
      var p = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, v = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, w = [{
        regex: this.regexpUnescape,
        safeValue: function(y) {
          return c(y);
        }
      }, {
        regex: this.regexp,
        safeValue: function(y) {
          return a.escapeValue ? c(a.escape(y)) : c(y);
        }
      }];
      return w.forEach(function(b) {
        for (d = 0; o = b.regex.exec(t); ) {
          var y = o[1].trim();
          if (u = h(y), u === void 0)
            if (typeof p == "function") {
              var m = p(t, o, s);
              u = typeof m == "string" ? m : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, y))
              u = "";
            else if (v) {
              u = o[0];
              continue;
            } else
              a.logger.warn("missed to pass in variable ".concat(y, " for interpolating ").concat(t)), u = "";
          else
            typeof u != "string" && !a.useRawValueToEscape && (u = nn(u));
          var E = b.safeValue(u);
          if (t = t.replace(o[0], E), v ? (b.regex.lastIndex += u.length, b.regex.lastIndex -= o[0].length) : b.regex.lastIndex = 0, d++, d >= a.maxReplaces)
            break;
        }
      }), t;
    }
  }, {
    key: "nest",
    value: function(t, r) {
      var i = this, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, o, u;
      function d(p, v) {
        var w = this.nestingOptionsSeparator;
        if (p.indexOf(w) < 0)
          return p;
        var b = p.split(new RegExp("".concat(w, "[ ]*{"))), y = "{".concat(b[1]);
        p = b[0], y = this.interpolate(y, u);
        var m = y.match(/'/g), E = y.match(/"/g);
        (m && m.length % 2 === 0 && !E || E.length % 2 !== 0) && (y = y.replace(/'/g, '"'));
        try {
          u = JSON.parse(y), v && (u = ie(ie({}, v), u));
        } catch (R) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(p), R), "".concat(p).concat(w).concat(y);
        }
        return delete u.defaultValue, p;
      }
      for (; a = this.nestingRegexp.exec(t); ) {
        var f = [];
        u = ie({}, s), u = u.replace && typeof u.replace != "string" ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
        var c = !1;
        if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
          var h = a[1].split(this.formatSeparator).map(function(p) {
            return p.trim();
          });
          a[1] = h.shift(), f = h, c = !0;
        }
        if (o = r(d.call(this, a[1].trim(), u), u), o && a[0] === t && typeof o != "string")
          return o;
        typeof o != "string" && (o = nn(o)), o || (this.logger.warn("missed to resolve ".concat(a[1], " for nesting ").concat(t)), o = ""), c && (o = f.reduce(function(p, v) {
          return i.format(p, v, s.lng, ie(ie({}, s), {}, {
            interpolationkey: a[1].trim()
          }));
        }, o.trim())), t = t.replace(a[0], o), this.regexp.lastIndex = 0;
      }
      return t;
    }
  }]), n;
}();
function pn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function pe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? pn(Object(t), !0).forEach(function(r) {
      ce(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : pn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function ka(n) {
  var e = n.toLowerCase().trim(), t = {};
  if (n.indexOf("(") > -1) {
    var r = n.split("(");
    e = r[0].toLowerCase().trim();
    var i = r[1].substring(0, r[1].length - 1);
    if (e === "currency" && i.indexOf(":") < 0)
      t.currency || (t.currency = i.trim());
    else if (e === "relativetime" && i.indexOf(":") < 0)
      t.range || (t.range = i.trim());
    else {
      var s = i.split(";");
      s.forEach(function(a) {
        if (a) {
          var o = a.split(":"), u = ua(o), d = u[0], f = u.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
          t[d.trim()] || (t[d.trim()] = c), c === "false" && (t[d.trim()] = !1), c === "true" && (t[d.trim()] = !0), isNaN(c) || (t[d.trim()] = parseInt(c, 10));
        }
      });
    }
  }
  return {
    formatName: e,
    formatOptions: t
  };
}
function Ae(n) {
  var e = {};
  return function(r, i, s) {
    var a = i + JSON.stringify(s), o = e[a];
    return o || (o = n(i, s), e[a] = o), o(r);
  };
}
var ja = function() {
  function n() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    re(this, n), this.logger = oe.create("formatter"), this.options = e, this.formats = {
      number: Ae(function(t, r) {
        var i = new Intl.NumberFormat(t, pe({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      currency: Ae(function(t, r) {
        var i = new Intl.NumberFormat(t, pe(pe({}, r), {}, {
          style: "currency"
        }));
        return function(s) {
          return i.format(s);
        };
      }),
      datetime: Ae(function(t, r) {
        var i = new Intl.DateTimeFormat(t, pe({}, r));
        return function(s) {
          return i.format(s);
        };
      }),
      relativetime: Ae(function(t, r) {
        var i = new Intl.RelativeTimeFormat(t, pe({}, r));
        return function(s) {
          return i.format(s, r.range || "day");
        };
      }),
      list: Ae(function(t, r) {
        var i = new Intl.ListFormat(t, pe({}, r));
        return function(s) {
          return i.format(s);
        };
      })
    }, this.init(e);
  }
  return ne(n, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      }, i = r.interpolation;
      this.formatSeparator = i.formatSeparator ? i.formatSeparator : i.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function(t, r) {
      this.formats[t.toLowerCase().trim()] = r;
    }
  }, {
    key: "addCached",
    value: function(t, r) {
      this.formats[t.toLowerCase().trim()] = Ae(r);
    }
  }, {
    key: "format",
    value: function(t, r, i) {
      var s = this, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = r.split(this.formatSeparator), u = o.reduce(function(d, f) {
        var c = ka(f), h = c.formatName, p = c.formatOptions;
        if (s.formats[h]) {
          var v = d;
          try {
            var w = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, b = w.locale || w.lng || a.locale || a.lng || i;
            v = s.formats[h](d, b, pe(pe(pe({}, p), a), w));
          } catch (y) {
            s.logger.warn(y);
          }
          return v;
        } else
          s.logger.warn("there was no format function for ".concat(h));
        return d;
      }, t);
      return u;
    }
  }]), n;
}();
function gn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function vn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gn(Object(t), !0).forEach(function(r) {
      ce(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : gn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function La(n) {
  var e = Da();
  return function() {
    var r = ue(n), i;
    if (e) {
      var s = ue(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return nt(this, i);
  };
}
function Da() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ta(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
var Ia = function(n) {
  Dt(t, n);
  var e = La(t);
  function t(r, i, s) {
    var a, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return re(this, t), a = e.call(this), Tt && Pe.call(xe(a)), a.backend = r, a.store = i, a.services = s, a.languageUtils = s.languageUtils, a.options = o, a.logger = oe.create("backendConnector"), a.waitingReads = [], a.maxParallelReads = o.maxParallelReads || 10, a.readingCalls = 0, a.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, a.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(s, o.backend, o), a;
  }
  return ne(t, [{
    key: "queueLoad",
    value: function(i, s, a, o) {
      var u = this, d = {}, f = {}, c = {}, h = {};
      return i.forEach(function(p) {
        var v = !0;
        s.forEach(function(w) {
          var b = "".concat(p, "|").concat(w);
          !a.reload && u.store.hasResourceBundle(p, w) ? u.state[b] = 2 : u.state[b] < 0 || (u.state[b] === 1 ? f[b] === void 0 && (f[b] = !0) : (u.state[b] = 1, v = !1, f[b] === void 0 && (f[b] = !0), d[b] === void 0 && (d[b] = !0), h[w] === void 0 && (h[w] = !0)));
        }), v || (c[p] = !0);
      }), (Object.keys(d).length || Object.keys(f).length) && this.queue.push({
        pending: f,
        pendingCount: Object.keys(f).length,
        loaded: {},
        errors: [],
        callback: o
      }), {
        toLoad: Object.keys(d),
        pending: Object.keys(f),
        toLoadLanguages: Object.keys(c),
        toLoadNamespaces: Object.keys(h)
      };
    }
  }, {
    key: "loaded",
    value: function(i, s, a) {
      var o = i.split("|"), u = o[0], d = o[1];
      s && this.emit("failedLoading", u, d, s), a && this.store.addResourceBundle(u, d, a), this.state[i] = s ? -1 : 2;
      var f = {};
      this.queue.forEach(function(c) {
        da(c.loaded, [u], d), Ta(c, i), s && c.errors.push(s), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(h) {
          f[h] || (f[h] = {});
          var p = c.loaded[h];
          p.length && p.forEach(function(v) {
            f[h][v] === void 0 && (f[h][v] = !0);
          });
        }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
      }), this.emit("loaded", f), this.queue = this.queue.filter(function(c) {
        return !c.done;
      });
    }
  }, {
    key: "read",
    value: function(i, s, a) {
      var o = this, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, f = arguments.length > 5 ? arguments[5] : void 0;
      if (!i.length)
        return f(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: i,
          ns: s,
          fcName: a,
          tried: u,
          wait: d,
          callback: f
        });
        return;
      }
      this.readingCalls++;
      var c = function(w, b) {
        if (o.readingCalls--, o.waitingReads.length > 0) {
          var y = o.waitingReads.shift();
          o.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
        }
        if (w && b && u < o.maxRetries) {
          setTimeout(function() {
            o.read.call(o, i, s, a, u + 1, d * 2, f);
          }, d);
          return;
        }
        f(w, b);
      }, h = this.backend[a].bind(this.backend);
      if (h.length === 2) {
        try {
          var p = h(i, s);
          p && typeof p.then == "function" ? p.then(function(v) {
            return c(null, v);
          }).catch(c) : c(null, p);
        } catch (v) {
          c(v);
        }
        return;
      }
      return h(i, s, c);
    }
  }, {
    key: "prepareLoading",
    value: function(i, s) {
      var a = this, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return this.logger.warn("No backend was added via i18next.use. Will not load resources."), u && u();
      typeof i == "string" && (i = this.languageUtils.toResolveHierarchy(i)), typeof s == "string" && (s = [s]);
      var d = this.queueLoad(i, s, o, u);
      if (!d.toLoad.length)
        return d.pending.length || u(), null;
      d.toLoad.forEach(function(f) {
        a.loadOne(f);
      });
    }
  }, {
    key: "load",
    value: function(i, s, a) {
      this.prepareLoading(i, s, {}, a);
    }
  }, {
    key: "reload",
    value: function(i, s, a) {
      this.prepareLoading(i, s, {
        reload: !0
      }, a);
    }
  }, {
    key: "loadOne",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = i.split("|"), u = o[0], d = o[1];
      this.read(u, d, "read", void 0, void 0, function(f, c) {
        f && s.logger.warn("".concat(a, "loading namespace ").concat(d, " for language ").concat(u, " failed"), f), !f && c && s.logger.log("".concat(a, "loaded namespace ").concat(d, " for language ").concat(u), c), s.loaded(i, f, c);
      });
    }
  }, {
    key: "saveMissing",
    value: function(i, s, a, o, u) {
      var d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, f = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {
      };
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(s)) {
        this.logger.warn('did not save key "'.concat(a, '" as the namespace "').concat(s, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (!(a == null || a === "")) {
        if (this.backend && this.backend.create) {
          var c = vn(vn({}, d), {}, {
            isUpdate: u
          }), h = this.backend.create.bind(this.backend);
          if (h.length < 6)
            try {
              var p;
              h.length === 5 ? p = h(i, s, a, o, c) : p = h(i, s, a, o), p && typeof p.then == "function" ? p.then(function(v) {
                return f(null, v);
              }).catch(f) : f(null, p);
            } catch (v) {
              f(v);
            }
          else
            h(i, s, a, o, f, c);
        }
        !i || !i[0] || this.store.addResource(i[0], s, a, o);
      }
    }
  }]), t;
}(Pe);
function yn() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(e) {
      var t = {};
      if (X(e[1]) === "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), X(e[2]) === "object" || X(e[3]) === "object") {
        var r = e[3] || e[2];
        Object.keys(r).forEach(function(i) {
          t[i] = r[i];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: function(e, t, r, i) {
        return e;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function mn(n) {
  return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n;
}
function bn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ae(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bn(Object(t), !0).forEach(function(r) {
      ce(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : bn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Na(n) {
  var e = Fa();
  return function() {
    var r = ue(n), i;
    if (e) {
      var s = ue(this).constructor;
      i = Reflect.construct(r, arguments, s);
    } else
      i = r.apply(this, arguments);
    return nt(this, i);
  };
}
function Fa() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ht() {
}
function Aa(n) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(n));
  e.forEach(function(t) {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
var Et = function(n) {
  Dt(t, n);
  var e = Na(t);
  function t() {
    var r, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (re(this, t), r = e.call(this), Tt && Pe.call(xe(r)), r.options = mn(i), r.services = {}, r.logger = oe, r.modules = {
      external: []
    }, Aa(xe(r)), s && !r.isInitialized && !i.isClone) {
      if (!r.options.initImmediate)
        return r.init(i, s), nt(r, xe(r));
      setTimeout(function() {
        r.init(i, s);
      }, 0);
    }
    return r;
  }
  return ne(t, [{
    key: "init",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
      typeof s == "function" && (a = s, s = {}), !s.defaultNS && s.defaultNS !== !1 && s.ns && (typeof s.ns == "string" ? s.defaultNS = s.ns : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
      var o = yn();
      this.options = ae(ae(ae({}, o), this.options), mn(s)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = ae(ae({}, o.interpolation), this.options.interpolation)), s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator), s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator);
      function u(y) {
        return y ? typeof y == "function" ? new y() : y : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? oe.init(u(this.modules.logger), this.options) : oe.init(null, this.options);
        var d;
        this.modules.formatter ? d = this.modules.formatter : typeof Intl < "u" && (d = ja);
        var f = new ln(this.options);
        this.store = new wa(this.options.resources, this.options);
        var c = this.services;
        c.logger = oe, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new Ca(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), d && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (c.formatter = u(d), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new _a(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new Ia(u(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(y) {
          for (var m = arguments.length, E = new Array(m > 1 ? m - 1 : 0), R = 1; R < m; R++)
            E[R - 1] = arguments[R];
          i.emit.apply(i, [y].concat(E));
        }), this.modules.languageDetector && (c.languageDetector = u(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = u(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new cn(this.services, this.options), this.translator.on("*", function(y) {
          for (var m = arguments.length, E = new Array(m > 1 ? m - 1 : 0), R = 1; R < m; R++)
            E[R - 1] = arguments[R];
          i.emit.apply(i, [y].concat(E));
        }), this.modules.external.forEach(function(y) {
          y.init && y.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, a || (a = ht), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var p = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      p.forEach(function(y) {
        i[y] = function() {
          var m;
          return (m = i.store)[y].apply(m, arguments);
        };
      });
      var v = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      v.forEach(function(y) {
        i[y] = function() {
          var m;
          return (m = i.store)[y].apply(m, arguments), i;
        };
      });
      var w = Ke(), b = function() {
        var m = function(R, k) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), w.resolve(k), a(R, k);
        };
        if (i.languages && i.options.compatibilityAPI !== "v1" && !i.isInitialized)
          return m(null, i.t.bind(i));
        i.changeLanguage(i.options.lng, m);
      };
      return this.options.resources || !this.options.initImmediate ? b() : setTimeout(b, 0), w;
    }
  }, {
    key: "loadResources",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht, o = a, u = typeof i == "string" ? i : this.language;
      if (typeof i == "function" && (o = i), !this.options.resources || this.options.partialBundledLanguages) {
        if (u && u.toLowerCase() === "cimode")
          return o();
        var d = [], f = function(p) {
          if (p) {
            var v = s.services.languageUtils.toResolveHierarchy(p);
            v.forEach(function(w) {
              d.indexOf(w) < 0 && d.push(w);
            });
          }
        };
        if (u)
          f(u);
        else {
          var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          c.forEach(function(h) {
            return f(h);
          });
        }
        this.options.preload && this.options.preload.forEach(function(h) {
          return f(h);
        }), this.services.backendConnector.load(d, this.options.ns, function(h) {
          !h && !s.resolvedLanguage && s.language && s.setResolvedLanguage(s.language), o(h);
        });
      } else
        o(null);
    }
  }, {
    key: "reloadResources",
    value: function(i, s, a) {
      var o = Ke();
      return i || (i = this.languages), s || (s = this.options.ns), a || (a = ht), this.services.backendConnector.reload(i, s, function(u) {
        o.resolve(), a(u);
      }), o;
    }
  }, {
    key: "use",
    value: function(i) {
      if (!i)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!i.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && ni.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function(i) {
      if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1))
        for (var s = 0; s < this.languages.length; s++) {
          var a = this.languages[s];
          if (!(["cimode", "dev"].indexOf(a) > -1) && this.store.hasLanguageSomeTranslations(a)) {
            this.resolvedLanguage = a;
            break;
          }
        }
    }
  }, {
    key: "changeLanguage",
    value: function(i, s) {
      var a = this;
      this.isLanguageChangingTo = i;
      var o = Ke();
      this.emit("languageChanging", i);
      var u = function(h) {
        a.language = h, a.languages = a.services.languageUtils.toResolveHierarchy(h), a.resolvedLanguage = void 0, a.setResolvedLanguage(h);
      }, d = function(h, p) {
        p ? (u(p), a.translator.changeLanguage(p), a.isLanguageChangingTo = void 0, a.emit("languageChanged", p), a.logger.log("languageChanged", p)) : a.isLanguageChangingTo = void 0, o.resolve(function() {
          return a.t.apply(a, arguments);
        }), s && s(h, function() {
          return a.t.apply(a, arguments);
        });
      }, f = function(h) {
        !i && !h && a.services.languageDetector && (h = []);
        var p = typeof h == "string" ? h : a.services.languageUtils.getBestMatchFromCodes(h);
        p && (a.language || u(p), a.translator.language || a.translator.changeLanguage(p), a.services.languageDetector && a.services.languageDetector.cacheUserLanguage && a.services.languageDetector.cacheUserLanguage(p)), a.loadResources(p, function(v) {
          d(v, p);
        });
      };
      return !i && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(i), o;
    }
  }, {
    key: "getFixedT",
    value: function(i, s, a) {
      var o = this, u = function d(f, c) {
        var h;
        if (X(c) !== "object") {
          for (var p = arguments.length, v = new Array(p > 2 ? p - 2 : 0), w = 2; w < p; w++)
            v[w - 2] = arguments[w];
          h = o.options.overloadTranslationOptionHandler([f, c].concat(v));
        } else
          h = ae({}, c);
        h.lng = h.lng || d.lng, h.lngs = h.lngs || d.lngs, h.ns = h.ns || d.ns, h.keyPrefix = h.keyPrefix || a || d.keyPrefix;
        var b = o.options.keySeparator || ".", y;
        return h.keyPrefix && Array.isArray(f) ? y = f.map(function(m) {
          return "".concat(h.keyPrefix).concat(b).concat(m);
        }) : y = h.keyPrefix ? "".concat(h.keyPrefix).concat(b).concat(f) : f, o.t(y, h);
      };
      return typeof i == "string" ? u.lng = i : u.lngs = i, u.ns = s, u.keyPrefix = a, u;
    }
  }, {
    key: "t",
    value: function() {
      var i;
      return this.translator && (i = this.translator).translate.apply(i, arguments);
    }
  }, {
    key: "exists",
    value: function() {
      var i;
      return this.translator && (i = this.translator).exists.apply(i, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function(i) {
      this.options.defaultNS = i;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function(i) {
      var s = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized)
        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
      if (!this.languages || !this.languages.length)
        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
      var o = a.lng || this.resolvedLanguage || this.languages[0], u = this.options ? this.options.fallbackLng : !1, d = this.languages[this.languages.length - 1];
      if (o.toLowerCase() === "cimode")
        return !0;
      var f = function(p, v) {
        var w = s.services.backendConnector.state["".concat(p, "|").concat(v)];
        return w === -1 || w === 2;
      };
      if (a.precheck) {
        var c = a.precheck(this, f);
        if (c !== void 0)
          return c;
      }
      return !!(this.hasResourceBundle(o, i) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(o, i) && (!u || f(d, i)));
    }
  }, {
    key: "loadNamespaces",
    value: function(i, s) {
      var a = this, o = Ke();
      return this.options.ns ? (typeof i == "string" && (i = [i]), i.forEach(function(u) {
        a.options.ns.indexOf(u) < 0 && a.options.ns.push(u);
      }), this.loadResources(function(u) {
        o.resolve(), s && s(u);
      }), o) : (s && s(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(i, s) {
      var a = Ke();
      typeof i == "string" && (i = [i]);
      var o = this.options.preload || [], u = i.filter(function(d) {
        return o.indexOf(d) < 0;
      });
      return u.length ? (this.options.preload = o.concat(u), this.loadResources(function(d) {
        a.resolve(), s && s(d);
      }), a) : (s && s(), Promise.resolve());
    }
  }, {
    key: "dir",
    value: function(i) {
      if (i || (i = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !i)
        return "rtl";
      var s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services && this.services.languageUtils || new ln(yn());
      return s.indexOf(a.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht, o = ae(ae(ae({}, this.options), s), {
        isClone: !0
      }), u = new t(o);
      (s.debug !== void 0 || s.prefix !== void 0) && (u.logger = u.logger.clone(s));
      var d = ["store", "services", "language"];
      return d.forEach(function(f) {
        u[f] = i[f];
      }), u.services = ae({}, this.services), u.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u.translator = new cn(u.services, u.options), u.translator.on("*", function(f) {
        for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
          h[p - 1] = arguments[p];
        u.emit.apply(u, [f].concat(h));
      }), u.init(o, a), u.translator.options = u.options, u.translator.backendConnector.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u;
    }
  }, {
    key: "toJSON",
    value: function() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]), t;
}(Pe);
ce(Et, "createInstance", function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new Et(n, e);
});
var z = Et.createInstance();
z.createInstance = Et.createInstance;
z.createInstance;
z.dir;
z.init;
z.loadResources;
z.reloadResources;
z.use;
z.changeLanguage;
z.getFixedT;
z.t;
z.exists;
z.setDefaultNamespace;
z.hasLoadedNamespace;
z.loadNamespaces;
z.loadLanguages;
var ii = [], Ua = ii.forEach, Ma = ii.slice;
function qa(n) {
  return Ua.call(Ma.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
var wn = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Ba = function(e, t, r) {
  var i = r || {};
  i.path = i.path || "/";
  var s = encodeURIComponent(t), a = "".concat(e, "=").concat(s);
  if (i.maxAge > 0) {
    var o = i.maxAge - 0;
    if (Number.isNaN(o))
      throw new Error("maxAge should be a Number");
    a += "; Max-Age=".concat(Math.floor(o));
  }
  if (i.domain) {
    if (!wn.test(i.domain))
      throw new TypeError("option domain is invalid");
    a += "; Domain=".concat(i.domain);
  }
  if (i.path) {
    if (!wn.test(i.path))
      throw new TypeError("option path is invalid");
    a += "; Path=".concat(i.path);
  }
  if (i.expires) {
    if (typeof i.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    a += "; Expires=".concat(i.expires.toUTCString());
  }
  if (i.httpOnly && (a += "; HttpOnly"), i.secure && (a += "; Secure"), i.sameSite) {
    var u = typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite;
    switch (u) {
      case !0:
        a += "; SameSite=Strict";
        break;
      case "lax":
        a += "; SameSite=Lax";
        break;
      case "strict":
        a += "; SameSite=Strict";
        break;
      case "none":
        a += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return a;
}, Sn = {
  create: function(e, t, r, i) {
    var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    r && (s.expires = /* @__PURE__ */ new Date(), s.expires.setTime(s.expires.getTime() + r * 60 * 1e3)), i && (s.domain = i), document.cookie = Ba(e, encodeURIComponent(t), s);
  },
  read: function(e) {
    for (var t = "".concat(e, "="), r = document.cookie.split(";"), i = 0; i < r.length; i++) {
      for (var s = r[i]; s.charAt(0) === " "; )
        s = s.substring(1, s.length);
      if (s.indexOf(t) === 0)
        return s.substring(t.length, s.length);
    }
    return null;
  },
  remove: function(e) {
    this.create(e, "", -1);
  }
}, Qa = {
  name: "cookie",
  lookup: function(e) {
    var t;
    if (e.lookupCookie && typeof document < "u") {
      var r = Sn.read(e.lookupCookie);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupCookie && typeof document < "u" && Sn.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
  }
}, Ha = {
  name: "querystring",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var r = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var i = r.substring(1), s = i.split("&"), a = 0; a < s.length; a++) {
        var o = s[a].indexOf("=");
        if (o > 0) {
          var u = s[a].substring(0, o);
          u === e.lookupQuerystring && (t = s[a].substring(o + 1));
        }
      }
    }
    return t;
  }
}, $e = null, On = function() {
  if ($e !== null)
    return $e;
  try {
    $e = window !== "undefined" && window.localStorage !== null;
    var e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    $e = !1;
  }
  return $e;
}, Va = {
  name: "localStorage",
  lookup: function(e) {
    var t;
    if (e.lookupLocalStorage && On()) {
      var r = window.localStorage.getItem(e.lookupLocalStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupLocalStorage && On() && window.localStorage.setItem(t.lookupLocalStorage, e);
  }
}, We = null, Rn = function() {
  if (We !== null)
    return We;
  try {
    We = window !== "undefined" && window.sessionStorage !== null;
    var e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    We = !1;
  }
  return We;
}, Ka = {
  name: "sessionStorage",
  lookup: function(e) {
    var t;
    if (e.lookupSessionStorage && Rn()) {
      var r = window.sessionStorage.getItem(e.lookupSessionStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupSessionStorage && Rn() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
  }
}, $a = {
  name: "navigator",
  lookup: function(e) {
    var t = [];
    if (typeof navigator < "u") {
      if (navigator.languages)
        for (var r = 0; r < navigator.languages.length; r++)
          t.push(navigator.languages[r]);
      navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language);
    }
    return t.length > 0 ? t : void 0;
  }
}, Wa = {
  name: "htmlTag",
  lookup: function(e) {
    var t, r = e.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, za = {
  name: "path",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (r instanceof Array)
        if (typeof e.lookupFromPathIndex == "number") {
          if (typeof r[e.lookupFromPathIndex] != "string")
            return;
          t = r[e.lookupFromPathIndex].replace("/", "");
        } else
          t = r[0].replace("/", "");
    }
    return t;
  }
}, Ja = {
  name: "subdomain",
  lookup: function(e) {
    var t = typeof e.lookupFromSubdomainIndex == "number" ? e.lookupFromSubdomainIndex + 1 : 1, r = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (r)
      return r[t];
  }
};
function Ya() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: function(e) {
      return e;
    }
  };
}
var si = /* @__PURE__ */ function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    re(this, n), this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  return ne(n, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t || {
        languageUtils: {}
      }, this.options = qa(r, this.options || {}, Ya()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(s) {
        return s.replace("-", "_");
      }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(Qa), this.addDetector(Ha), this.addDetector(Va), this.addDetector(Ka), this.addDetector($a), this.addDetector(Wa), this.addDetector(za), this.addDetector(Ja);
    }
  }, {
    key: "addDetector",
    value: function(t) {
      this.detectors[t.name] = t;
    }
  }, {
    key: "detect",
    value: function(t) {
      var r = this;
      t || (t = this.options.order);
      var i = [];
      return t.forEach(function(s) {
        if (r.detectors[s]) {
          var a = r.detectors[s].lookup(r.options);
          a && typeof a == "string" && (a = [a]), a && (i = i.concat(a));
        }
      }), i = i.map(function(s) {
        return r.options.convertDetectedLanguage(s);
      }), this.services.languageUtils.getBestMatchFromCodes ? i : i.length > 0 ? i[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function(t, r) {
      var i = this;
      r || (r = this.options.caches), r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || r.forEach(function(s) {
        i.detectors[s] && i.detectors[s].cacheUserLanguage(t, i.options);
      }));
    }
  }]), n;
}();
si.type = "languageDetector";
function tr(n) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tr(n);
}
var ai = [], Ga = ai.forEach, Za = ai.slice;
function rr(n) {
  return Ga.call(Za.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
function oi() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : tr(XMLHttpRequest)) === "object";
}
function Xa(n) {
  return !!n && typeof n.then == "function";
}
function eo(n) {
  return Xa(n) ? n : Promise.resolve(n);
}
function to(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var nr = { exports: {} }, pt = { exports: {} }, En;
function ro() {
  return En || (En = 1, function(n, e) {
    var t = typeof self < "u" ? self : yt, r = function() {
      function s() {
        this.fetch = !1, this.DOMException = t.DOMException;
      }
      return s.prototype = t, new s();
    }();
    (function(s) {
      (function(a) {
        var o = {
          searchParams: "URLSearchParams" in s,
          iterable: "Symbol" in s && "iterator" in Symbol,
          blob: "FileReader" in s && "Blob" in s && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in s,
          arrayBuffer: "ArrayBuffer" in s
        };
        function u(g) {
          return g && DataView.prototype.isPrototypeOf(g);
        }
        if (o.arrayBuffer)
          var d = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ], f = ArrayBuffer.isView || function(g) {
            return g && d.indexOf(Object.prototype.toString.call(g)) > -1;
          };
        function c(g) {
          if (typeof g != "string" && (g = String(g)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(g))
            throw new TypeError("Invalid character in header field name");
          return g.toLowerCase();
        }
        function h(g) {
          return typeof g != "string" && (g = String(g)), g;
        }
        function p(g) {
          var O = {
            next: function() {
              var L = g.shift();
              return { done: L === void 0, value: L };
            }
          };
          return o.iterable && (O[Symbol.iterator] = function() {
            return O;
          }), O;
        }
        function v(g) {
          this.map = {}, g instanceof v ? g.forEach(function(O, L) {
            this.append(L, O);
          }, this) : Array.isArray(g) ? g.forEach(function(O) {
            this.append(O[0], O[1]);
          }, this) : g && Object.getOwnPropertyNames(g).forEach(function(O) {
            this.append(O, g[O]);
          }, this);
        }
        v.prototype.append = function(g, O) {
          g = c(g), O = h(O);
          var L = this.map[g];
          this.map[g] = L ? L + ", " + O : O;
        }, v.prototype.delete = function(g) {
          delete this.map[c(g)];
        }, v.prototype.get = function(g) {
          return g = c(g), this.has(g) ? this.map[g] : null;
        }, v.prototype.has = function(g) {
          return this.map.hasOwnProperty(c(g));
        }, v.prototype.set = function(g, O) {
          this.map[c(g)] = h(O);
        }, v.prototype.forEach = function(g, O) {
          for (var L in this.map)
            this.map.hasOwnProperty(L) && g.call(O, this.map[L], L, this);
        }, v.prototype.keys = function() {
          var g = [];
          return this.forEach(function(O, L) {
            g.push(L);
          }), p(g);
        }, v.prototype.values = function() {
          var g = [];
          return this.forEach(function(O) {
            g.push(O);
          }), p(g);
        }, v.prototype.entries = function() {
          var g = [];
          return this.forEach(function(O, L) {
            g.push([L, O]);
          }), p(g);
        }, o.iterable && (v.prototype[Symbol.iterator] = v.prototype.entries);
        function w(g) {
          if (g.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          g.bodyUsed = !0;
        }
        function b(g) {
          return new Promise(function(O, L) {
            g.onload = function() {
              O(g.result);
            }, g.onerror = function() {
              L(g.error);
            };
          });
        }
        function y(g) {
          var O = new FileReader(), L = b(O);
          return O.readAsArrayBuffer(g), L;
        }
        function m(g) {
          var O = new FileReader(), L = b(O);
          return O.readAsText(g), L;
        }
        function E(g) {
          for (var O = new Uint8Array(g), L = new Array(O.length), B = 0; B < O.length; B++)
            L[B] = String.fromCharCode(O[B]);
          return L.join("");
        }
        function R(g) {
          if (g.slice)
            return g.slice(0);
          var O = new Uint8Array(g.byteLength);
          return O.set(new Uint8Array(g)), O.buffer;
        }
        function k() {
          return this.bodyUsed = !1, this._initBody = function(g) {
            this._bodyInit = g, g ? typeof g == "string" ? this._bodyText = g : o.blob && Blob.prototype.isPrototypeOf(g) ? this._bodyBlob = g : o.formData && FormData.prototype.isPrototypeOf(g) ? this._bodyFormData = g : o.searchParams && URLSearchParams.prototype.isPrototypeOf(g) ? this._bodyText = g.toString() : o.arrayBuffer && o.blob && u(g) ? (this._bodyArrayBuffer = R(g.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(g) || f(g)) ? this._bodyArrayBuffer = R(g) : this._bodyText = g = Object.prototype.toString.call(g) : this._bodyText = "", this.headers.get("content-type") || (typeof g == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o.searchParams && URLSearchParams.prototype.isPrototypeOf(g) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, o.blob && (this.blob = function() {
            var g = w(this);
            if (g)
              return g;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? w(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
          }), this.text = function() {
            var g = w(this);
            if (g)
              return g;
            if (this._bodyBlob)
              return m(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(E(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, o.formData && (this.formData = function() {
            return this.text().then(j);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var C = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function _(g) {
          var O = g.toUpperCase();
          return C.indexOf(O) > -1 ? O : g;
        }
        function P(g, O) {
          O = O || {};
          var L = O.body;
          if (g instanceof P) {
            if (g.bodyUsed)
              throw new TypeError("Already read");
            this.url = g.url, this.credentials = g.credentials, O.headers || (this.headers = new v(g.headers)), this.method = g.method, this.mode = g.mode, this.signal = g.signal, !L && g._bodyInit != null && (L = g._bodyInit, g.bodyUsed = !0);
          } else
            this.url = String(g);
          if (this.credentials = O.credentials || this.credentials || "same-origin", (O.headers || !this.headers) && (this.headers = new v(O.headers)), this.method = _(O.method || this.method || "GET"), this.mode = O.mode || this.mode || null, this.signal = O.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && L)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(L);
        }
        P.prototype.clone = function() {
          return new P(this, { body: this._bodyInit });
        };
        function j(g) {
          var O = new FormData();
          return g.trim().split("&").forEach(function(L) {
            if (L) {
              var B = L.split("="), Q = B.shift().replace(/\+/g, " "), I = B.join("=").replace(/\+/g, " ");
              O.append(decodeURIComponent(Q), decodeURIComponent(I));
            }
          }), O;
        }
        function F(g) {
          var O = new v(), L = g.replace(/\r?\n[\t ]+/g, " ");
          return L.split(/\r?\n/).forEach(function(B) {
            var Q = B.split(":"), I = Q.shift().trim();
            if (I) {
              var fe = Q.join(":").trim();
              O.append(I, fe);
            }
          }), O;
        }
        k.call(P.prototype);
        function q(g, O) {
          O || (O = {}), this.type = "default", this.status = O.status === void 0 ? 200 : O.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in O ? O.statusText : "OK", this.headers = new v(O.headers), this.url = O.url || "", this._initBody(g);
        }
        k.call(q.prototype), q.prototype.clone = function() {
          return new q(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new v(this.headers),
            url: this.url
          });
        }, q.error = function() {
          var g = new q(null, { status: 0, statusText: "" });
          return g.type = "error", g;
        };
        var se = [301, 302, 303, 307, 308];
        q.redirect = function(g, O) {
          if (se.indexOf(O) === -1)
            throw new RangeError("Invalid status code");
          return new q(null, { status: O, headers: { location: g } });
        }, a.DOMException = s.DOMException;
        try {
          new a.DOMException();
        } catch {
          a.DOMException = function(O, L) {
            this.message = O, this.name = L;
            var B = Error(O);
            this.stack = B.stack;
          }, a.DOMException.prototype = Object.create(Error.prototype), a.DOMException.prototype.constructor = a.DOMException;
        }
        function W(g, O) {
          return new Promise(function(L, B) {
            var Q = new P(g, O);
            if (Q.signal && Q.signal.aborted)
              return B(new a.DOMException("Aborted", "AbortError"));
            var I = new XMLHttpRequest();
            function fe() {
              I.abort();
            }
            I.onload = function() {
              var Z = {
                status: I.status,
                statusText: I.statusText,
                headers: F(I.getAllResponseHeaders() || "")
              };
              Z.url = "responseURL" in I ? I.responseURL : Z.headers.get("X-Request-URL");
              var ye = "response" in I ? I.response : I.responseText;
              L(new q(ye, Z));
            }, I.onerror = function() {
              B(new TypeError("Network request failed"));
            }, I.ontimeout = function() {
              B(new TypeError("Network request failed"));
            }, I.onabort = function() {
              B(new a.DOMException("Aborted", "AbortError"));
            }, I.open(Q.method, Q.url, !0), Q.credentials === "include" ? I.withCredentials = !0 : Q.credentials === "omit" && (I.withCredentials = !1), "responseType" in I && o.blob && (I.responseType = "blob"), Q.headers.forEach(function(Z, ye) {
              I.setRequestHeader(ye, Z);
            }), Q.signal && (Q.signal.addEventListener("abort", fe), I.onreadystatechange = function() {
              I.readyState === 4 && Q.signal.removeEventListener("abort", fe);
            }), I.send(typeof Q._bodyInit > "u" ? null : Q._bodyInit);
          });
        }
        return W.polyfill = !0, s.fetch || (s.fetch = W, s.Headers = v, s.Request = P, s.Response = q), a.Headers = v, a.Request = P, a.Response = q, a.fetch = W, Object.defineProperty(a, "__esModule", { value: !0 }), a;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = r;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, n.exports = e;
  }(pt, pt.exports)), pt.exports;
}
(function(n, e) {
  var t;
  if (typeof fetch == "function" && (typeof yt < "u" && yt.fetch ? t = yt.fetch : typeof window < "u" && window.fetch ? t = window.fetch : t = fetch), typeof to < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var r = t || ro();
    r.default && (r = r.default), e.default = r, n.exports = e.default;
  }
})(nr, nr.exports);
var ui = nr.exports;
const ci = /* @__PURE__ */ Xi(ui), xn = /* @__PURE__ */ Zi({
  __proto__: null,
  default: ci
}, [ui]);
function xt(n) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xt(n);
}
var ge;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? ge = global.fetch : typeof window < "u" && window.fetch ? ge = window.fetch : ge = fetch);
var Xe;
oi() && (typeof global < "u" && global.XMLHttpRequest ? Xe = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Xe = window.XMLHttpRequest));
var Pt;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Pt = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Pt = window.ActiveXObject));
!ge && xn && !Xe && !Pt && (ge = ci || xn);
typeof ge != "function" && (ge = void 0);
var ir = function(e, t) {
  if (t && xt(t) === "object") {
    var r = "";
    for (var i in t)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(t[i]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, Pn = function(e, t, r) {
  var i = function(a) {
    if (!a.ok)
      return r(a.statusText || "Error", {
        status: a.status
      });
    a.text().then(function(o) {
      r(null, {
        status: a.status,
        data: o
      });
    }).catch(r);
  };
  typeof fetch == "function" ? fetch(e, t).then(i).catch(r) : ge(e, t).then(i).catch(r);
}, Cn = !1, no = function(e, t, r, i) {
  e.queryStringParams && (t = ir(t, e.queryStringParams));
  var s = rr({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  r && (s["Content-Type"] = "application/json");
  var a = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, o = rr({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: s
  }, Cn ? {} : a);
  try {
    Pn(t, o, i);
  } catch (u) {
    if (!a || Object.keys(a).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(a).forEach(function(d) {
        delete o[d];
      }), Pn(t, o, i), Cn = !0;
    } catch (d) {
      i(d);
    }
  }
}, io = function(e, t, r, i) {
  r && xt(r) === "object" && (r = ir("", r).slice(1)), e.queryStringParams && (t = ir(t, e.queryStringParams));
  try {
    var s;
    Xe ? s = new Xe() : s = new Pt("MSXML2.XMLHTTP.3.0"), s.open(r ? "POST" : "GET", t, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, r && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
    var a = e.customHeaders;
    if (a = typeof a == "function" ? a() : a, a)
      for (var o in a)
        s.setRequestHeader(o, a[o]);
    s.onreadystatechange = function() {
      s.readyState > 3 && i(s.status >= 400 ? s.statusText : null, {
        status: s.status,
        data: s.responseText
      });
    }, s.send(r);
  } catch (u) {
    console && console.log(u);
  }
}, so = function(e, t, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, ge && t.indexOf("file:") !== 0)
    return no(e, t, r, i);
  if (oi() || typeof ActiveXObject == "function")
    return io(e, t, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function et(n) {
  "@babel/helpers - typeof";
  return et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, et(n);
}
function ao(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _n(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, li(r.key), r);
  }
}
function oo(n, e, t) {
  return e && _n(n.prototype, e), t && _n(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function uo(n, e, t) {
  return e = li(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function li(n) {
  var e = co(n, "string");
  return et(e) === "symbol" ? e : String(e);
}
function co(n, e) {
  if (et(n) !== "object" || n === null)
    return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (et(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var lo = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(t) {
      return JSON.parse(t);
    },
    stringify: JSON.stringify,
    parsePayload: function(t, r, i) {
      return uo({}, r, i || "");
    },
    parseLoadPayload: function(t, r) {
    },
    request: so,
    reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: !1,
    withCredentials: !1,
    overrideMimeType: !1,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
}, fi = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    ao(this, n), this.services = e, this.options = t, this.allOptions = r, this.type = "backend", this.init(e, t, r);
  }
  return oo(n, [{
    key: "init",
    value: function(t) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = rr(i, this.options || {}, lo()), this.allOptions = s, this.services && this.options.reloadInterval && setInterval(function() {
        return r.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "readMulti",
    value: function(t, r, i) {
      this._readAny(t, t, r, r, i);
    }
  }, {
    key: "read",
    value: function(t, r, i) {
      this._readAny([t], t, [r], r, i);
    }
  }, {
    key: "_readAny",
    value: function(t, r, i, s, a) {
      var o = this, u = this.options.loadPath;
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(t, i)), u = eo(u), u.then(function(d) {
        if (!d)
          return a(null, {});
        var f = o.services.interpolator.interpolate(d, {
          lng: t.join("+"),
          ns: i.join("+")
        });
        o.loadUrl(f, a, r, s);
      });
    }
  }, {
    key: "loadUrl",
    value: function(t, r, i, s) {
      var a = this, o = typeof i == "string" ? [i] : i, u = typeof s == "string" ? [s] : s, d = this.options.parseLoadPayload(o, u);
      this.options.request(this.options, t, d, function(f, c) {
        if (c && (c.status >= 500 && c.status < 600 || !c.status))
          return r("failed loading " + t + "; status code: " + c.status, !0);
        if (c && c.status >= 400 && c.status < 500)
          return r("failed loading " + t + "; status code: " + c.status, !1);
        if (!c && f && f.message && f.message.indexOf("Failed to fetch") > -1)
          return r("failed loading " + t + ": " + f.message, !0);
        if (f)
          return r(f, !1);
        var h, p;
        try {
          typeof c.data == "string" ? h = a.options.parse(c.data, i, s) : h = c.data;
        } catch {
          p = "failed parsing " + t + " to json";
        }
        if (p)
          return r(p, !1);
        r(null, h);
      });
    }
  }, {
    key: "create",
    value: function(t, r, i, s, a) {
      var o = this;
      if (this.options.addPath) {
        typeof t == "string" && (t = [t]);
        var u = this.options.parsePayload(r, i, s), d = 0, f = [], c = [];
        t.forEach(function(h) {
          var p = o.options.addPath;
          typeof o.options.addPath == "function" && (p = o.options.addPath(h, r));
          var v = o.services.interpolator.interpolate(p, {
            lng: h,
            ns: r
          });
          o.options.request(o.options, v, u, function(w, b) {
            d += 1, f.push(w), c.push(b), d === t.length && typeof a == "function" && a(f, c);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var t = this, r = this.services, i = r.backendConnector, s = r.languageUtils, a = r.logger, o = i.language;
      if (!(o && o.toLowerCase() === "cimode")) {
        var u = [], d = function(c) {
          var h = s.toResolveHierarchy(c);
          h.forEach(function(p) {
            u.indexOf(p) < 0 && u.push(p);
          });
        };
        d(o), this.allOptions.preload && this.allOptions.preload.forEach(function(f) {
          return d(f);
        }), u.forEach(function(f) {
          t.allOptions.ns.forEach(function(c) {
            i.read(f, c, "read", null, null, function(h, p) {
              h && a.warn("loading namespace ".concat(c, " for language ").concat(f, " failed"), h), !h && p && a.log("loaded namespace ".concat(c, " for language ").concat(f), p), i.loaded("".concat(f, "|").concat(c), h, p);
            });
          });
        });
      }
    }
  }]), n;
}();
fi.type = "backend";
z.use(fi).use(si).use(ea);
const fo = z, Vo = sa;
var Ye = {}, ze = Gi;
if (process.env.NODE_ENV === "production")
  Ye.createRoot = ze.createRoot, Ye.hydrateRoot = ze.hydrateRoot;
else {
  var gt = ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ye.createRoot = function(n, e) {
    gt.usingClientEntryPoint = !0;
    try {
      return ze.createRoot(n, e);
    } finally {
      gt.usingClientEntryPoint = !1;
    }
  }, Ye.hydrateRoot = function(n, e, t) {
    gt.usingClientEntryPoint = !0;
    try {
      return ze.hydrateRoot(n, e, t);
    } finally {
      gt.usingClientEntryPoint = !1;
    }
  };
}
class Le {
}
class Ko extends Le {
}
class di extends Le {
}
class ho extends Le {
}
class hi extends Le {
}
class po extends Le {
}
class go extends Le {
}
class vo {
}
class yo extends Le {
}
class mo extends go {
  constructor(t) {
    super();
    M(this, "key");
    M(this, "handler");
    this.key = Symbol(Date.now()), this.handler = t == null ? void 0 : t.bind(this);
  }
  getName() {
    return this.key.description ?? "";
  }
  update(t) {
    t instanceof pi && this.handler && this.handler(t.value);
  }
}
class pi extends po {
  constructor(t) {
    super();
    M(this, "key");
    M(this, "value");
    M(this, "observer");
    this.key = Symbol(Date.now()), this.value = t, this.observer = /* @__PURE__ */ new Map();
  }
  subscribe(t) {
    this.observer.has(t.getName()) || this.observer.set(t.getName(), t);
  }
  unsubcrise(t) {
    this.observer.has(t.getName()) && this.observer.delete(t.getName());
  }
  close() {
    this.observer.clear();
  }
  notify() {
    this.observer.forEach((t) => {
      t.update(this);
    });
  }
}
class bo {
  constructor(e) {
    M(this, "key");
    M(this, "subject");
    M(this, "closed", !1);
    this.key = Symbol(Date.now()), this.subject = new pi(e);
  }
  next(e) {
    this.closed || (this.subject.value = e, this.subject.notify());
  }
  subscribe(e) {
    this.closed || this.subject.subscribe(new mo(e));
  }
  complete() {
    this.closed || (this.subject.close(), this.closed = !0);
  }
}
class gi {
  constructor({
    initState: e,
    callback: t
  }) {
    M(this, "stream");
    M(this, "_state");
    this._state = e, this.stream = new bo(e), t && t();
  }
  set state(e) {
    this._state = e;
  }
  get state() {
    return this._state;
  }
  upDateState(e) {
    e !== void 0 && (this._state = e), this._state && this.stream.next(this._state);
  }
}
function $o(n) {
  const e = Ge(new gi({ initState: n })).current, [t, r] = tt(e.state);
  function i(s) {
    e.upDateState(s);
  }
  return je(() => (e.stream.subscribe((s) => {
    r({ ...s });
  }), () => {
    e.stream.complete();
  }), [e.stream]), [e.state, i, e.stream];
}
var sr = function(n, e) {
  return sr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, sr(n, e);
};
function le(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  sr(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function ar(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], r = 0;
  if (t)
    return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Me(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var r = t.call(n), i, s = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; )
      s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (t = r.return) && t.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
function qe(n, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, i = e.length, s; r < i; r++)
      (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return n.concat(s || Array.prototype.slice.call(e));
}
function ve(n) {
  return typeof n == "function";
}
function vi(n) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var Ht = vi(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function Ct(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var it = function() {
  function n(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return n.prototype.unsubscribe = function() {
    var e, t, r, i, s;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var o = ar(a), u = o.next(); !u.done; u = o.next()) {
              var d = u.value;
              d.remove(this);
            }
          } catch (w) {
            e = { error: w };
          } finally {
            try {
              u && !u.done && (t = o.return) && t.call(o);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          a.remove(this);
      var f = this.initialTeardown;
      if (ve(f))
        try {
          f();
        } catch (w) {
          s = w instanceof Ht ? w.errors : [w];
        }
      var c = this._finalizers;
      if (c) {
        this._finalizers = null;
        try {
          for (var h = ar(c), p = h.next(); !p.done; p = h.next()) {
            var v = p.value;
            try {
              kn(v);
            } catch (w) {
              s = s ?? [], w instanceof Ht ? s = qe(qe([], Me(s)), Me(w.errors)) : s.push(w);
            }
          }
        } catch (w) {
          r = { error: w };
        } finally {
          try {
            p && !p.done && (i = h.return) && i.call(h);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (s)
        throw new Ht(s);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        kn(e);
      else {
        if (e instanceof n) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
  }, n.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, n.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, n.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && Ct(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && Ct(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}(), yi = it.EMPTY;
function mi(n) {
  return n instanceof it || n && "closed" in n && ve(n.remove) && ve(n.add) && ve(n.unsubscribe);
}
function kn(n) {
  ve(n) ? n() : n.unsubscribe();
}
var bi = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, or = {
  setTimeout: function(n, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var i = or.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, qe([n, e], Me(t))) : setTimeout.apply(void 0, qe([n, e], Me(t)));
  },
  clearTimeout: function(n) {
    var e = or.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(n);
  },
  delegate: void 0
};
function wo(n) {
  or.setTimeout(function() {
    throw n;
  });
}
function jn() {
}
function bt(n) {
  n();
}
var wi = function(n) {
  le(e, n);
  function e(t) {
    var r = n.call(this) || this;
    return r.isStopped = !1, t ? (r.destination = t, mi(t) && t.add(r)) : r.destination = Eo, r;
  }
  return e.create = function(t, r, i) {
    return new ur(t, r, i);
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(it), So = Function.prototype.bind;
function Vt(n, e) {
  return So.call(n, e);
}
var Oo = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (r) {
        vt(r);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (r) {
        vt(r);
      }
    else
      vt(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        vt(t);
      }
  }, n;
}(), ur = function(n) {
  le(e, n);
  function e(t, r, i) {
    var s = n.call(this) || this, a;
    if (ve(t) || !t)
      a = {
        next: t ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var o;
      s && bi.useDeprecatedNextContext ? (o = Object.create(t), o.unsubscribe = function() {
        return s.unsubscribe();
      }, a = {
        next: t.next && Vt(t.next, o),
        error: t.error && Vt(t.error, o),
        complete: t.complete && Vt(t.complete, o)
      }) : a = t;
    }
    return s.destination = new Oo(a), s;
  }
  return e;
}(wi);
function vt(n) {
  wo(n);
}
function Ro(n) {
  throw n;
}
var Eo = {
  closed: !0,
  next: jn,
  error: Ro,
  complete: jn
}, xo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Po(n) {
  return n;
}
function Co(n) {
  return n.length === 0 ? Po : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(r, i) {
      return i(r);
    }, t);
  };
}
var Ln = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, r) {
    var i = this, s = ko(e) ? e : new ur(e, t, r);
    return bt(function() {
      var a = i, o = a.operator, u = a.source;
      s.add(o ? o.call(s, u) : u ? i._subscribe(s) : i._trySubscribe(s));
    }), s;
  }, n.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, n.prototype.forEach = function(e, t) {
    var r = this;
    return t = Dn(t), new t(function(i, s) {
      var a = new ur({
        next: function(o) {
          try {
            e(o);
          } catch (u) {
            s(u), a.unsubscribe();
          }
        },
        error: s,
        complete: i
      });
      r.subscribe(a);
    });
  }, n.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, n.prototype[xo] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return Co(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = Dn(e), new e(function(r, i) {
      var s;
      t.subscribe(function(a) {
        return s = a;
      }, function(a) {
        return i(a);
      }, function() {
        return r(s);
      });
    });
  }, n.create = function(e) {
    return new n(e);
  }, n;
}();
function Dn(n) {
  var e;
  return (e = n ?? bi.Promise) !== null && e !== void 0 ? e : Promise;
}
function _o(n) {
  return n && ve(n.next) && ve(n.error) && ve(n.complete);
}
function ko(n) {
  return n && n instanceof wi || _o(n) && mi(n);
}
var jo = vi(function(n) {
  return function() {
    n(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Si = function(n) {
  le(e, n);
  function e() {
    var t = n.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var r = new Tn(this, this);
    return r.operator = t, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new jo();
  }, e.prototype.next = function(t) {
    var r = this;
    bt(function() {
      var i, s;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var a = ar(r.currentObservers), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            u.next(t);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            o && !o.done && (s = a.return) && s.call(a);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var r = this;
    bt(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = t;
        for (var i = r.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    bt(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var r = t.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), n.prototype._trySubscribe.call(this, t);
  }, e.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, e.prototype._innerSubscribe = function(t) {
    var r = this, i = this, s = i.hasError, a = i.isStopped, o = i.observers;
    return s || a ? yi : (this.currentObservers = null, o.push(t), new it(function() {
      r.currentObservers = null, Ct(o, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var r = this, i = r.hasError, s = r.thrownError, a = r.isStopped;
    i ? t.error(s) : a && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new Ln();
    return t.source = this, t;
  }, e.create = function(t, r) {
    return new Tn(t, r);
  }, e;
}(Ln), Tn = function(n) {
  le(e, n);
  function e(t, r) {
    var i = n.call(this) || this;
    return i.destination = t, i.source = r, i;
  }
  return e.prototype.next = function(t) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, t);
  }, e.prototype.error = function(t) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, t);
  }, e.prototype.complete = function() {
    var t, r;
    (r = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || r === void 0 || r.call(t);
  }, e.prototype._subscribe = function(t) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && i !== void 0 ? i : yi;
  }, e;
}(Si), Ce = function(n) {
  le(e, n);
  function e(t) {
    var r = n.call(this) || this;
    return r._value = t, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(t) {
    var r = n.prototype._subscribe.call(this, t);
    return !r.closed && t.next(this._value), r;
  }, e.prototype.getValue = function() {
    var t = this, r = t.hasError, i = t.thrownError, s = t._value;
    if (r)
      throw i;
    return this._throwIfClosed(), s;
  }, e.prototype.next = function(t) {
    n.prototype.next.call(this, this._value = t);
  }, e;
}(Si), Oi = {
  now: function() {
    return (Oi.delegate || Date).now();
  },
  delegate: void 0
}, Lo = function(n) {
  le(e, n);
  function e(t, r) {
    return n.call(this) || this;
  }
  return e.prototype.schedule = function(t, r) {
    return this;
  }, e;
}(it), _t = {
  setInterval: function(n, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var i = _t.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, qe([n, e], Me(t))) : setInterval.apply(void 0, qe([n, e], Me(t)));
  },
  clearInterval: function(n) {
    var e = _t.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(n);
  },
  delegate: void 0
}, Do = function(n) {
  le(e, n);
  function e(t, r) {
    var i = n.call(this, t, r) || this;
    return i.scheduler = t, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(t, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = t;
    var s = this.id, a = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(a, s, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(a, this.id, r), this;
  }, e.prototype.requestAsyncId = function(t, r, i) {
    return i === void 0 && (i = 0), _t.setInterval(t.flush.bind(t, this), i);
  }, e.prototype.recycleAsyncId = function(t, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && _t.clearInterval(r);
  }, e.prototype.execute = function(t, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(t, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(t, r) {
    var i = !1, s;
    try {
      this.work(t);
    } catch (a) {
      i = !0, s = a || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), s;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, r = t.id, i = t.scheduler, s = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Ct(s, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, n.prototype.unsubscribe.call(this);
    }
  }, e;
}(Lo), In = function() {
  function n(e, t) {
    t === void 0 && (t = n.now), this.schedulerActionCtor = e, this.now = t;
  }
  return n.prototype.schedule = function(e, t, r) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
  }, n.now = Oi.now, n;
}(), To = function(n) {
  le(e, n);
  function e(t, r) {
    r === void 0 && (r = In.now);
    var i = n.call(this, t, r) || this;
    return i.actions = [], i._active = !1, i;
  }
  return e.prototype.flush = function(t) {
    var r = this.actions;
    if (this._active) {
      r.push(t);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = t.execute(t.state, t.delay))
        break;
    while (t = r.shift());
    if (this._active = !1, i) {
      for (; t = r.shift(); )
        t.unsubscribe();
      throw i;
    }
  }, e;
}(In), Io = function(n) {
  le(e, n);
  function e(t, r) {
    var i = n.call(this, t, r) || this;
    return i.scheduler = t, i.work = r, i;
  }
  return e.prototype.schedule = function(t, r) {
    return r === void 0 && (r = 0), r > 0 ? n.prototype.schedule.call(this, t, r) : (this.delay = r, this.state = t, this.scheduler.flush(this), this);
  }, e.prototype.execute = function(t, r) {
    return r > 0 || this.closed ? n.prototype.execute.call(this, t, r) : this._execute(t, r);
  }, e.prototype.requestAsyncId = function(t, r, i) {
    return i === void 0 && (i = 0), i != null && i > 0 || i == null && this.delay > 0 ? n.prototype.requestAsyncId.call(this, t, r, i) : (t.flush(this), 0);
  }, e;
}(Do), No = function(n) {
  le(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e;
}(To), Fo = new No(Io);
const Ao = ({
  children: n,
  onTapBackGround: e,
  onTapChildren: t,
  classChildren: r,
  classBackground: i,
  id: s
}) => /* @__PURE__ */ K.jsx("div", { id: s, className: i, onClick: e, children: /* @__PURE__ */ K.jsx(
  "div",
  {
    className: `rd-overlay__child ${r ?? ""}`,
    onClick: t,
    children: n
  }
) });
const br = hr(
  void 0
), Wo = ({
  children: n,
  appProps: e
}) => /* @__PURE__ */ K.jsx(br.Provider, { value: e, children: n }), Ri = new Ce(!1), zo = new Ce(!0), Ei = new Ce({
  element: null,
  duration: 1e3
}), cr = new Ce(null), lr = new Ce(null), fr = new Ce(!1), dr = new Ce(null), Jo = new Ce(null);
function Uo(n) {
  Ri.next(n);
}
function Mo(n) {
  cr.next(n);
}
function Yo(n, e) {
  Ei.next({ element: n, duration: e });
}
function Go(n) {
  n === null ? (dr.next(null), fr.next(!1)) : (dr.next(n), fr.next(!0));
}
function Zo(n) {
  lr.next(n);
}
const Xo = ({
  children: n,
  appProps: e
}) => {
  var a, o;
  const t = An(() => new gi({
    initState: {
      isLoading: !1,
      modals: [],
      showMessage: !0,
      showModel: !1,
      showBottomSheet: !1,
      showDrawer: !1,
      messages: []
    }
  }), []), [r, i] = tt(t.state), s = Yi();
  return je(() => {
    let u = 0;
    const d = [];
    return t.stream.subscribe((f) => {
      i({ ...f });
    }), Ri.subscribe((f) => {
      t.state.isLoading = f, t.upDateState(), f ? document.body.className = "bg-scrolling-element-when-modal-active" : document.body.className = "";
    }), fr.subscribe((f) => {
      t.state.showDrawer = f, t.upDateState(), f ? document.body.className = "bg-scrolling-element-when-modal-active" : document.body.className = "";
    }), Ei.subscribe((f) => {
      var c, h, p, v, w;
      if (f !== null && d.length < (((c = e.configs) == null ? void 0 : c.maxAmountMessage) ?? 1)) {
        const b = `${s}-wrap-rd-message-${Date.now()}`;
        d.unshift(
          /* @__PURE__ */ K.jsx(
            "div",
            {
              id: b,
              className: (((h = e.configs) == null ? void 0 : h.classWrapMessage) ?? "wrap-rd-message") + " " + (((p = e.configs) == null ? void 0 : p.classAnimationMessageEnter) ?? "animation-faded--in"),
              children: /* @__PURE__ */ K.jsx("div", { className: ((v = e.configs) == null ? void 0 : v.classMessage) ?? "rd-message", children: f.element })
            },
            b
          )
        ), t.state.messages = d, t.upDateState(), setTimeout(
          () => {
            var m;
            const y = document.getElementById(`${b}`);
            y && (y.className = ((m = e.configs) == null ? void 0 : m.classWrapMessage) ?? "wrap-rd-message");
          },
          ((w = e.configs) == null ? void 0 : w.durationMessageEnter) ?? 200
        ), setTimeout(() => {
          var m, E, R;
          const y = document.getElementById(`${b}`);
          y && (y.className = (((m = e.configs) == null ? void 0 : m.classWrapMessage) ?? "wrap-rd-message") + " " + (((E = e.configs) == null ? void 0 : E.classAnimationMessageLeave) ?? "animation-faded--out"), setTimeout(
            () => {
              const k = d.findIndex((C) => `${C.key}` == `${b}`);
              d.splice(k, 1), t.state.messages = d, t.upDateState();
            },
            ((R = e.configs) == null ? void 0 : R.durationMessageLeave) ?? 200
          ));
        }, f.duration ?? 1e3);
      }
    }), window && document && cr.subscribe((f) => {
      if (f === null) {
        if (u > 0) {
          u--;
          const c = document.getElementById(
            `rd-modals-${u}`
          );
          c.firstElementChild.className = "column animation-faded--out", setTimeout(() => {
            t.state.modals = t.state.modals.slice(
              0,
              u
            ), t.upDateState();
          }, 150);
        }
      } else
        Fo.schedule(() => {
          var h, p;
          t.state.modals = t.state.modals.slice(
            0,
            u
          );
          const c = u;
          t.state.modals.push(
            Qe(
              /* @__PURE__ */ K.jsx(
                Ao,
                {
                  id: `rd-modals-${c}`,
                  classChildren: `animation-scale--up animation-faded--in ${((h = e.configs) == null ? void 0 : h.classChildModel) ?? ""}`,
                  classBackground: `rd-overlay-queue-modal ${((p = e.configs) == null ? void 0 : p.classBackgroundModel) ?? ""}`,
                  onTapBackGround: () => {
                    var v;
                    (v = e.configs) != null && v.closeModalOnTapOutside && cr.next(null);
                  },
                  onTapChildren: (v) => {
                    v.stopPropagation();
                  },
                  children: f
                }
              ),
              document.body,
              `rd-modals-${c}`
            )
          ), t.upDateState(), u++;
        });
      u === 1 ? document.body.className = "bg-scrolling-element-when-modal-active" : u === 0 && (document.body.className = "");
    }), lr.subscribe((f) => {
      f === null ? (document.body.className = "", setTimeout(() => {
        t.state.showBottomSheet = !1, t.upDateState();
      }, 80)) : (document.body.className = "bg-scrolling-element-when-modal-active", setTimeout(() => {
        t.state.showBottomSheet = !0, t.upDateState();
      }, 80));
    }), window && document && window.addEventListener("popstate", () => {
      if (t.state.isLoading || u > 0) {
        Uo(!1);
        for (let f = 0; f < u; f++)
          Mo(null);
      }
    }), () => {
      t.stream.complete(), window && window.removeEventListener("popstate", () => {
        console.log("done popstate");
      });
    };
  }, []), /* @__PURE__ */ K.jsx(aa, { i18n: fo, children: /* @__PURE__ */ K.jsx(Bs, { children: /* @__PURE__ */ K.jsx(
    qs,
    {
      queryClient: new vs({
        defaultOptions: {
          queries: { refetchOnWindowFocus: !1, retry: !1 }
        }
      }),
      children: /* @__PURE__ */ K.jsxs(br.Provider, { value: e, children: [
        r.showDrawer && window && document && Qe(dr.value, document.body, "rd-drawer"),
        r.showMessage && r.messages.length > 0 && window && document && Qe(
          /* @__PURE__ */ K.jsx(
            "div",
            {
              id: `${s}-rd-message`,
              className: ((a = e.configs) == null ? void 0 : a.classOverlayMessage) ?? "rd-overlay-message",
              children: /* @__PURE__ */ K.jsx(K.Fragment, { children: r.messages })
            }
          ),
          document.body,
          "rd-message"
        ),
        r.isLoading && window && document && Qe(
          (o = e.configs) == null ? void 0 : o.loading,
          document.body,
          "rd-loader"
        ),
        r.modals.length > 0 && r.modals.map((u, d) => u),
        r.showBottomSheet && window && document && Qe(
          lr.value,
          document.body,
          "rd-bottom-sheet"
        ),
        n
      ] })
    }
  ) }) });
}, eu = () => pr(br);
function tu(n, e, t) {
  const r = window && document && document.getElementById(`${e}`);
  return t && r && (r.style.pointerEvents = "auto", r.style.boxSizing = "border-box", t.minHeight && (r.style.minHeight = t.minHeight), t.minWidth && (r.style.minWidth = t.minWidth), t.maxHeight && (r.style.maxHeight = t.maxHeight), t.maxWidth && (r.style.maxWidth = t.maxWidth)), Ye.createRoot(
    window && document && document.getElementById(`${e}`),
    {
      identifierPrefix: `${n}`,
      onRecoverableError(s) {
        console.error(s);
      }
    }
  );
}
const Re = class Re extends hi {
  constructor() {
    var e = (...args) => {
      super(...args);
      M(this, "m");
      M(this, "key");
    };
    return Re._instance || (e(), this.key = Symbol("RdModelsManager"), this.m = /* @__PURE__ */ new Map(), Re._instance = this), Re._instance;
  }
  /**
   * use
   */
  use(t) {
    return this.m.set(t.getName(), t), Re._instance;
  }
  /**
   * remove
   */
  remove(t) {
    return this.m.has(t) && this.m.delete(t), Re._instance;
  }
  /**
   * getMoels
   */
  get(t) {
    if (this.m.get(t) === void 0)
      throw TypeError("Do not exist model");
    return this.m.get(t);
  }
  /**
   * length
   */
  get length() {
    return this.m.size;
  }
  /**
   * clear
   */
  clear() {
    return this.m.clear();
  }
};
M(Re, "_instance");
let Nn = Re;
class ru extends ho {
  constructor(t, r) {
    super();
    M(this, "key");
    M(this, "value");
    this.key = Symbol(`${r}`), this.value = t;
  }
  getName() {
    return this.key.description ?? "";
  }
}
const Ee = class Ee extends hi {
  constructor() {
    var e = (...args) => {
      super(...args);
      M(this, "m");
      M(this, "key");
    };
    return Ee._instance || (e(), this.m = /* @__PURE__ */ new Map(), this.key = Symbol("RdModulesManager"), Ee._instance = this), Ee._instance;
  }
  /**
   * use
   */
  use(t) {
    return this.m.set(t.getName(), t), Ee._instance;
  }
  /**
   * remove
   */
  remove(t) {
    return this.m.has(t) && this.m.delete(t), Ee._instance;
  }
  /**
   * getModule
   */
  get(t) {
    if (this.m.get(t) === void 0)
      throw TypeError("Do not exist model");
    return this.m.get(t);
  }
  /**
   * length
   */
  get length() {
    return this.m.size;
  }
  /**
   * clear
   */
  clear() {
    return this.m.clear();
  }
};
M(Ee, "_instance");
let Fn = Ee;
class nu extends di {
  constructor() {
    super();
    M(this, "key");
    this.key = Symbol("RdLocalStorage");
  }
  get sizeStorage() {
    return window && localStorage.length;
  }
  getItem({ key: t }) {
    return (window && localStorage.getItem(t)) ?? "";
  }
  setItem({ key: t, value: r }) {
    return window && localStorage.setItem(t, r);
  }
  removeItem({ key: t }) {
    return window && localStorage.removeItem(t);
  }
  clearStorage() {
    return window && localStorage.clear();
  }
}
class iu extends di {
  constructor() {
    super();
    M(this, "key");
    this.key = Symbol("RdSessionStorage");
  }
  get sizeStorage() {
    return window && sessionStorage.length;
  }
  getItem({ key: t }) {
    return (window && sessionStorage.getItem(t)) ?? "";
  }
  setItem({ key: t, value: r }) {
    return window && sessionStorage.setItem(t, r);
  }
  removeItem({ key: t }) {
    return window && sessionStorage.removeItem(t);
  }
  clearStorage() {
    return window && sessionStorage.clear();
  }
}
function su(n, e) {
  return new Worker(n, Object.assign({ type: "module" }, e));
}
class au extends vo {
  constructor() {
    super();
    M(this, "key");
    this.key = Symbol("RdLogger");
  }
  execute(t) {
    return console.log(t);
  }
}
class ou extends yo {
  constructor(t) {
    super();
    M(this, "key");
    M(this, "operation");
    this.key = Symbol(`RdDecorator-${Date.now()}`), this.operation = t;
  }
  log(t) {
    this.operation.execute(t);
  }
}
class xi {
  constructor({
    code: e,
    message: t
  }) {
    M(this, "code");
    M(this, "message");
    this.code = e ?? -1, this.message = t ?? "";
  }
  copyWith({
    code: e,
    message: t
  }) {
    return new xi({
      code: e ?? this.code,
      message: t ?? this.message
    });
  }
}
const uu = ({
  text: n = "",
  highlight: e = "",
  classHighlight: t,
  classText: r
}) => {
  if (!e.trim())
    return /* @__PURE__ */ K.jsx("span", { className: r, children: n });
  const i = n.split("");
  return /* @__PURE__ */ K.jsx("span", { className: r, children: i.filter((s) => s).map((s, a) => e.replaceAll(" ", "").includes(s.toLowerCase()) && s !== "" ? /* @__PURE__ */ K.jsx("mark", { className: t, children: s }, a) : /* @__PURE__ */ K.jsx("span", { children: s }, a)) });
}, qo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfNDM2XzIwMjc2NSIgdHJhbnNmb3JtPSJzY2FsZSgwLjAxNTYyNSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF80MzZfMjAyNzY1IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUE0MGxFUVZSNFh1M2JRUTZFUUFoRVViai9vWHNPOFNkaDRYT3ZKQWkvcWtGM1p0NkU2NzEwKyt4dWlENlQ0MHVBQ3RBQ3FZbHpEMklBQ0ZLQmtvSGNnbVNRREpKQk1uZ0tJVDZBRHlnRjZEU1lmY0NMVHpnL3owZUdyQVNvZ0RiVDBnS3hCMk1CNXBraUJvQmdyRUVNd0lCakx4OWZBQWlDSUFoeWdta2tSZ1lqaFdNSGRpdHNMMkF2WUMrUUlIamR3emsrQm1BQUJtQkFXYzFrQ0YwYktSQUVRUkFFUVJBTUdhQUNiYUNVei9QNUJSaUt4aFFhaVYwN3VSamZZZ1FETUtEcEdBaEdDTVVDekQ0Q0JFRXcxaUFHWUlCUFpNSmgrZzgvUDhjS3BBSmZWNEVmTWVlL3NMdGFFRklBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L2RlZnM+Cjwvc3ZnPgo=", cu = ({
  src: n,
  srcError: e = qo,
  alt: t,
  className: r,
  style: i
}) => {
  const s = Ge(null);
  return /* @__PURE__ */ K.jsx(
    "img",
    {
      style: i,
      ref: s,
      src: n,
      alt: t,
      className: r,
      onError: () => {
        s && s.current && (s.current.onerror = null, s.current.src = e);
      }
    }
  );
};
function lu() {
  return pr(zn);
}
const fu = Ms, du = ({
  children: n,
  initData: e,
  stream: t,
  validate: r,
  context: i,
  selector: s
}) => {
  const [a, o] = tt({
    connectionState: "waiting",
    data: e ?? null,
    hasError: !1,
    error: null,
    hasData: !!e
  });
  return je(() => {
    const u = { ...a };
    return t.subscribe((d) => {
      u.connectionState !== "done" && (s && !s(u.data, d) || (r !== void 0 ? u.error = r(d) : u.error = null, u.error !== void 0 && u.error !== null ? u.hasError = !0 : u.hasError = !1, d != null ? u.hasData = !0 : u.hasData = !1, u.data = { ...d }, o({ ...u })));
    }), () => {
      u.connectionState = "done";
    };
  }, []), n(i, a);
};
export {
  xi as ErrorModel,
  Wo as RdApp,
  Xo as RdAppExtends,
  pi as RdBehaviorSubject,
  mo as RdBehaviourObserver,
  gi as RdBloc,
  Le as RdCore,
  yo as RdDecorator,
  uu as RdHighlightedText,
  cu as RdImage,
  nu as RdLocalStorage,
  au as RdLogger,
  ou as RdLoggerDecorator,
  hi as RdManager,
  ho as RdModel,
  ru as RdModelObject,
  Nn as RdModelsManager,
  Ko as RdModule,
  Fn as RdModulesManager,
  go as RdObserver,
  vo as RdOperation,
  Ao as RdOverlay,
  qs as RdQueryClient,
  iu as RdSessionStorage,
  di as RdStorage,
  bo as RdStream,
  po as RdSubject,
  Bs as RdViewport,
  zn as RdViewportContext,
  du as StreamBuilder,
  tu as buildRdRootElement,
  Zo as rdBottomSheet,
  lr as rdBottomSheetCompo,
  su as rdCreateWorker,
  Go as rdDrawer,
  dr as rdDrawerCompo,
  Jo as rdError,
  fo as rdI18n,
  Ri as rdIsLoading,
  Uo as rdLoading,
  Yo as rdMessage,
  Ei as rdMessageCompo,
  Mo as rdModal,
  cr as rdQueueModal,
  fr as rdShowDrawer,
  zo as rdShowMessage,
  eu as useRdApp,
  $o as useRdBloc,
  fu as useRdQuery,
  Vo as useRdTranslate,
  lu as useRdViewport
};
//# sourceMappingURL=rad-ts.js.map
