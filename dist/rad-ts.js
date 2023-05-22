var si = Object.defineProperty;
var ui = (i, e, t) => e in i ? si(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Ne = (i, e, t) => (ui(i, typeof e != "symbol" ? e + "" : e, t), t);
import * as Qe from "react";
import ln, { createContext as Wt, useState as cn, useCallback as li, useEffect as fn, useMemo as dn, createElement as ci, useContext as hn, useRef as fi } from "react";
import di, { createPortal as rt } from "react-dom";
function hi(i, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in i)) {
          const a = Object.getOwnPropertyDescriptor(r, n);
          a && Object.defineProperty(i, n, a.get ? a : {
            enumerable: !0,
            get: () => r[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pi(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Dt = { exports: {} }, Ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function gi() {
  if (pr)
    return Ie;
  pr = 1;
  var i = ln, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, d) {
    var f, c = {}, g = null, h = null;
    d !== void 0 && (g = "" + d), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (f in u)
      r.call(u, f) && !a.hasOwnProperty(f) && (c[f] = u[f]);
    if (s && s.defaultProps)
      for (f in u = s.defaultProps, u)
        c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: e, type: s, key: g, ref: h, props: c, _owner: n.current };
  }
  return Ie.Fragment = t, Ie.jsx = o, Ie.jsxs = o, Ie;
}
var Ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function vi() {
  return gr || (gr = 1, process.env.NODE_ENV !== "production" && function() {
    var i = ln, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, S = "@@iterator";
    function O(l) {
      if (l === null || typeof l != "object")
        return null;
      var b = y && l[y] || l[S];
      return typeof b == "function" ? b : null;
    }
    var v = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(l) {
      {
        for (var b = arguments.length, P = new Array(b > 1 ? b - 1 : 0), E = 1; E < b; E++)
          P[E - 1] = arguments[E];
        _("error", l, P);
      }
    }
    function _(l, b, P) {
      {
        var E = v.ReactDebugCurrentFrame, A = E.getStackAddendum();
        A !== "" && (b += "%s", P = P.concat([A]));
        var N = P.map(function(F) {
          return String(F);
        });
        N.unshift("Warning: " + b), Function.prototype.apply.call(console[l], console, N);
      }
    }
    var x = !1, T = !1, k = !1, C = !1, j = !1, M;
    M = Symbol.for("react.module.reference");
    function z(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === a || j || l === n || l === d || l === f || C || l === h || x || T || k || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === c || l.$$typeof === o || l.$$typeof === s || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === M || l.getModuleId !== void 0));
    }
    function H(l, b, P) {
      var E = l.displayName;
      if (E)
        return E;
      var A = b.displayName || b.name || "";
      return A !== "" ? P + "(" + A + ")" : P;
    }
    function ne(l) {
      return l.displayName || "Context";
    }
    function V(l) {
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
        case a:
          return "Profiler";
        case n:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case s:
            var b = l;
            return ne(b) + ".Consumer";
          case o:
            var P = l;
            return ne(P._context) + ".Provider";
          case u:
            return H(l, l.render, "ForwardRef");
          case c:
            var E = l.displayName || null;
            return E !== null ? E : V(l.type) || "Memo";
          case g: {
            var A = l, N = A._payload, F = A._init;
            try {
              return V(F(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var p = Object.assign, w = 0, R, I, U, D, ue, Y, ge;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function Pe() {
      {
        if (w === 0) {
          R = console.log, I = console.info, U = console.warn, D = console.error, ue = console.group, Y = console.groupCollapsed, ge = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: ze,
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
        w++;
      }
    }
    function Ye() {
      {
        if (w--, w === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: p({}, l, {
              value: R
            }),
            info: p({}, l, {
              value: I
            }),
            warn: p({}, l, {
              value: U
            }),
            error: p({}, l, {
              value: D
            }),
            group: p({}, l, {
              value: ue
            }),
            groupCollapsed: p({}, l, {
              value: Y
            }),
            groupEnd: p({}, l, {
              value: ge
            })
          });
        }
        w < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = v.ReactCurrentDispatcher, ve;
    function ye(l, b, P) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (A) {
            var E = A.stack.trim().match(/\n( *(at )?)/);
            ve = E && E[1] || "";
          }
        return `
` + ve + l;
      }
    }
    var Ee = !1, me;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      me = new be();
    }
    function Ce(l, b) {
      if (!l || Ee)
        return "";
      {
        var P = me.get(l);
        if (P !== void 0)
          return P;
      }
      var E;
      Ee = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = le.current, le.current = null, Pe();
      try {
        if (b) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (ce) {
              E = ce;
            }
            Reflect.construct(l, [], F);
          } else {
            try {
              F.call();
            } catch (ce) {
              E = ce;
            }
            l.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            E = ce;
          }
          l();
        }
      } catch (ce) {
        if (ce && E && typeof ce.stack == "string") {
          for (var L = ce.stack.split(`
`), W = E.stack.split(`
`), q = L.length - 1, B = W.length - 1; q >= 1 && B >= 0 && L[q] !== W[B]; )
            B--;
          for (; q >= 1 && B >= 0; q--, B--)
            if (L[q] !== W[B]) {
              if (q !== 1 || B !== 1)
                do
                  if (q--, B--, B < 0 || L[q] !== W[B]) {
                    var G = `
` + L[q].replace(" at new ", " at ");
                    return l.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", l.displayName)), typeof l == "function" && me.set(l, G), G;
                  }
                while (q >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, le.current = N, Ye(), Error.prepareStackTrace = A;
      }
      var ke = l ? l.displayName || l.name : "", hr = ke ? ye(ke) : "";
      return typeof l == "function" && me.set(l, hr), hr;
    }
    function Ge(l, b, P) {
      return Ce(l, !1);
    }
    function Ze(l) {
      var b = l.prototype;
      return !!(b && b.isReactComponent);
    }
    function Xe(l, b, P) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return Ce(l, Ze(l));
      if (typeof l == "string")
        return ye(l);
      switch (l) {
        case d:
          return ye("Suspense");
        case f:
          return ye("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return Ge(l.render);
          case c:
            return Xe(l.type, b, P);
          case g: {
            var E = l, A = E._payload, N = E._init;
            try {
              return Xe(N(A), b, P);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, tr = {}, rr = v.ReactDebugCurrentFrame;
    function tt(l) {
      if (l) {
        var b = l._owner, P = Xe(l.type, l._source, b ? b.type : null);
        rr.setExtraStackFrame(P);
      } else
        rr.setExtraStackFrame(null);
    }
    function Bn(l, b, P, E, A) {
      {
        var N = Function.call.bind(et);
        for (var F in l)
          if (N(l, F)) {
            var L = void 0;
            try {
              if (typeof l[F] != "function") {
                var W = Error((E || "React class") + ": " + P + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              L = l[F](b, F, E, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              L = q;
            }
            L && !(L instanceof Error) && (tt(A), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", P, F, typeof L), tt(null)), L instanceof Error && !(L.message in tr) && (tr[L.message] = !0, tt(A), m("Failed %s type: %s", P, L.message), tt(null));
          }
      }
    }
    var Hn = Array.isArray;
    function Pt(l) {
      return Hn(l);
    }
    function Vn(l) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, P = b && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return P;
      }
    }
    function Qn(l) {
      try {
        return nr(l), !1;
      } catch {
        return !0;
      }
    }
    function nr(l) {
      return "" + l;
    }
    function ir(l) {
      if (Qn(l))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(l)), nr(l);
    }
    var Te = v.ReactCurrentOwner, Kn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, or, xt;
    xt = {};
    function $n(l) {
      if (et.call(l, "ref")) {
        var b = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Wn(l) {
      if (et.call(l, "key")) {
        var b = Object.getOwnPropertyDescriptor(l, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Jn(l, b) {
      if (typeof l.ref == "string" && Te.current && b && Te.current.stateNode !== b) {
        var P = V(Te.current.type);
        xt[P] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Te.current.type), l.ref), xt[P] = !0);
      }
    }
    function zn(l, b) {
      {
        var P = function() {
          ar || (ar = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Yn(l, b) {
      {
        var P = function() {
          or || (or = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Gn = function(l, b, P, E, A, N, F) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: l,
        key: b,
        ref: P,
        props: F,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function Zn(l, b, P, E, A) {
      {
        var N, F = {}, L = null, W = null;
        P !== void 0 && (ir(P), L = "" + P), Wn(b) && (ir(b.key), L = "" + b.key), $n(b) && (W = b.ref, Jn(b, A));
        for (N in b)
          et.call(b, N) && !Kn.hasOwnProperty(N) && (F[N] = b[N]);
        if (l && l.defaultProps) {
          var q = l.defaultProps;
          for (N in q)
            F[N] === void 0 && (F[N] = q[N]);
        }
        if (L || W) {
          var B = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          L && zn(F, B), W && Yn(F, B);
        }
        return Gn(l, L, W, A, E, Te.current, F);
      }
    }
    var Rt = v.ReactCurrentOwner, sr = v.ReactDebugCurrentFrame;
    function _e(l) {
      if (l) {
        var b = l._owner, P = Xe(l.type, l._source, b ? b.type : null);
        sr.setExtraStackFrame(P);
      } else
        sr.setExtraStackFrame(null);
    }
    var Et;
    Et = !1;
    function Ct(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function ur() {
      {
        if (Rt.current) {
          var l = V(Rt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Xn(l) {
      {
        if (l !== void 0) {
          var b = l.fileName.replace(/^.*[\\\/]/, ""), P = l.lineNumber;
          return `

Check your code at ` + b + ":" + P + ".";
        }
        return "";
      }
    }
    var lr = {};
    function ei(l) {
      {
        var b = ur();
        if (!b) {
          var P = typeof l == "string" ? l : l.displayName || l.name;
          P && (b = `

Check the top-level render call using <` + P + ">.");
        }
        return b;
      }
    }
    function cr(l, b) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var P = ei(b);
        if (lr[P])
          return;
        lr[P] = !0;
        var E = "";
        l && l._owner && l._owner !== Rt.current && (E = " It was passed a child from " + V(l._owner.type) + "."), _e(l), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, E), _e(null);
      }
    }
    function fr(l, b) {
      {
        if (typeof l != "object")
          return;
        if (Pt(l))
          for (var P = 0; P < l.length; P++) {
            var E = l[P];
            Ct(E) && cr(E, b);
          }
        else if (Ct(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var A = O(l);
          if (typeof A == "function" && A !== l.entries)
            for (var N = A.call(l), F; !(F = N.next()).done; )
              Ct(F.value) && cr(F.value, b);
        }
      }
    }
    function ti(l) {
      {
        var b = l.type;
        if (b == null || typeof b == "string")
          return;
        var P;
        if (typeof b == "function")
          P = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === c))
          P = b.propTypes;
        else
          return;
        if (P) {
          var E = V(b);
          Bn(P, l.props, "prop", E, l);
        } else if (b.PropTypes !== void 0 && !Et) {
          Et = !0;
          var A = V(b);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ri(l) {
      {
        for (var b = Object.keys(l.props), P = 0; P < b.length; P++) {
          var E = b[P];
          if (E !== "children" && E !== "key") {
            _e(l), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), _e(null);
            break;
          }
        }
        l.ref !== null && (_e(l), m("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function dr(l, b, P, E, A, N) {
      {
        var F = z(l);
        if (!F) {
          var L = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = Xn(A);
          W ? L += W : L += ur();
          var q;
          l === null ? q = "null" : Pt(l) ? q = "array" : l !== void 0 && l.$$typeof === e ? (q = "<" + (V(l.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : q = typeof l, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, L);
        }
        var B = Zn(l, b, P, A, N);
        if (B == null)
          return B;
        if (F) {
          var G = b.children;
          if (G !== void 0)
            if (E)
              if (Pt(G)) {
                for (var ke = 0; ke < G.length; ke++)
                  fr(G[ke], l);
                Object.freeze && Object.freeze(G);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(G, l);
        }
        return l === r ? ri(B) : ti(B), B;
      }
    }
    function ni(l, b, P) {
      return dr(l, b, P, !0);
    }
    function ii(l, b, P) {
      return dr(l, b, P, !1);
    }
    var ai = ii, oi = ni;
    Ue.Fragment = r, Ue.jsx = ai, Ue.jsxs = oi;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? Dt.exports = gi() : Dt.exports = vi();
var $ = Dt.exports;
class bt {
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
const Jt = typeof window > "u" || "Deno" in window;
function re() {
}
function yi(i, e) {
  return typeof i == "function" ? i(e) : i;
}
function mi(i) {
  return typeof i == "number" && i >= 0 && i !== 1 / 0;
}
function bi(i, e) {
  return Math.max(i + (e || 0) - Date.now(), 0);
}
function nt(i, e, t) {
  return wt(i) ? typeof e == "function" ? {
    ...t,
    queryKey: i,
    queryFn: e
  } : {
    ...e,
    queryKey: i
  } : i;
}
function we(i, e, t) {
  return wt(i) ? [{
    ...e,
    queryKey: i
  }, t] : [i || {}, e];
}
function vr(i, e) {
  const {
    type: t = "all",
    exact: r,
    fetchStatus: n,
    predicate: a,
    queryKey: o,
    stale: s
  } = i;
  if (wt(o)) {
    if (r) {
      if (e.queryHash !== zt(o, e.options))
        return !1;
    } else if (!De(e.queryKey, o))
      return !1;
  }
  if (t !== "all") {
    const u = e.isActive();
    if (t === "active" && !u || t === "inactive" && u)
      return !1;
  }
  return !(typeof s == "boolean" && e.isStale() !== s || typeof n < "u" && n !== e.state.fetchStatus || a && !a(e));
}
function yr(i, e) {
  const {
    exact: t,
    fetching: r,
    predicate: n,
    mutationKey: a
  } = i;
  if (wt(a)) {
    if (!e.options.mutationKey)
      return !1;
    if (t) {
      if (xe(e.options.mutationKey) !== xe(a))
        return !1;
    } else if (!De(e.options.mutationKey, a))
      return !1;
  }
  return !(typeof r == "boolean" && e.state.status === "loading" !== r || n && !n(e));
}
function zt(i, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || xe)(i);
}
function xe(i) {
  return JSON.stringify(i, (e, t) => Ft(t) ? Object.keys(t).sort().reduce((r, n) => (r[n] = t[n], r), {}) : t);
}
function De(i, e) {
  return pn(i, e);
}
function pn(i, e) {
  return i === e ? !0 : typeof i != typeof e ? !1 : i && e && typeof i == "object" && typeof e == "object" ? !Object.keys(e).some((t) => !pn(i[t], e[t])) : !1;
}
function gn(i, e) {
  if (i === e)
    return i;
  const t = mr(i) && mr(e);
  if (t || Ft(i) && Ft(e)) {
    const r = t ? i.length : Object.keys(i).length, n = t ? e : Object.keys(e), a = n.length, o = t ? [] : {};
    let s = 0;
    for (let u = 0; u < a; u++) {
      const d = t ? u : n[u];
      o[d] = gn(i[d], e[d]), o[d] === i[d] && s++;
    }
    return r === a && s === r ? i : o;
  }
  return e;
}
function mr(i) {
  return Array.isArray(i) && i.length === Object.keys(i).length;
}
function Ft(i) {
  if (!br(i))
    return !1;
  const e = i.constructor;
  if (typeof e > "u")
    return !0;
  const t = e.prototype;
  return !(!br(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function br(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function wt(i) {
  return Array.isArray(i);
}
function vn(i) {
  return new Promise((e) => {
    setTimeout(e, i);
  });
}
function wr(i) {
  vn(0).then(i);
}
function wi() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function Oi(i, e, t) {
  return t.isDataEqual != null && t.isDataEqual(i, e) ? i : typeof t.structuralSharing == "function" ? t.structuralSharing(i, e) : t.structuralSharing !== !1 ? gn(i, e) : e;
}
class Si extends bt {
  constructor() {
    super(), this.setup = (e) => {
      if (!Jt && window.addEventListener) {
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
    this.focused = e, e && this.onFocus();
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
const At = new Si();
class Pi extends bt {
  constructor() {
    super(), this.setup = (e) => {
      if (!Jt && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("online", t, !1), window.addEventListener("offline", t, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", t);
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
    this.online = e, e && this.onOnline();
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
const ft = new Pi();
function xi(i) {
  return Math.min(1e3 * 2 ** i, 3e4);
}
function Yt(i) {
  return (i ?? "online") === "online" ? ft.isOnline() : !0;
}
class yn {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function _t(i) {
  return i instanceof yn;
}
function mn(i) {
  let e = !1, t = 0, r = !1, n, a, o;
  const s = new Promise((O, v) => {
    a = O, o = v;
  }), u = (O) => {
    r || (h(new yn(O)), i.abort == null || i.abort());
  }, d = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, c = () => !At.isFocused() || i.networkMode !== "always" && !ft.isOnline(), g = (O) => {
    r || (r = !0, i.onSuccess == null || i.onSuccess(O), n == null || n(), a(O));
  }, h = (O) => {
    r || (r = !0, i.onError == null || i.onError(O), n == null || n(), o(O));
  }, y = () => new Promise((O) => {
    n = (v) => {
      const m = r || !c();
      return m && O(v), m;
    }, i.onPause == null || i.onPause();
  }).then(() => {
    n = void 0, r || i.onContinue == null || i.onContinue();
  }), S = () => {
    if (r)
      return;
    let O;
    try {
      O = i.fn();
    } catch (v) {
      O = Promise.reject(v);
    }
    Promise.resolve(O).then(g).catch((v) => {
      var m, _;
      if (r)
        return;
      const x = (m = i.retry) != null ? m : 3, T = (_ = i.retryDelay) != null ? _ : xi, k = typeof T == "function" ? T(t, v) : T, C = x === !0 || typeof x == "number" && t < x || typeof x == "function" && x(t, v);
      if (e || !C) {
        h(v);
        return;
      }
      t++, i.onFail == null || i.onFail(t, v), vn(k).then(() => {
        if (c())
          return y();
      }).then(() => {
        e ? h(v) : S();
      });
    });
  };
  return Yt(i.networkMode) ? S() : y().then(S), {
    promise: s,
    cancel: u,
    continue: () => (n == null ? void 0 : n()) ? s : Promise.resolve(),
    cancelRetry: d,
    continueRetry: f
  };
}
const Gt = console;
function Ri() {
  let i = [], e = 0, t = (f) => {
    f();
  }, r = (f) => {
    f();
  };
  const n = (f) => {
    let c;
    e++;
    try {
      c = f();
    } finally {
      e--, e || s();
    }
    return c;
  }, a = (f) => {
    e ? i.push(f) : wr(() => {
      t(f);
    });
  }, o = (f) => (...c) => {
    a(() => {
      f(...c);
    });
  }, s = () => {
    const f = i;
    i = [], f.length && wr(() => {
      r(() => {
        f.forEach((c) => {
          t(c);
        });
      });
    });
  };
  return {
    batch: n,
    batchCalls: o,
    schedule: a,
    setNotifyFunction: (f) => {
      t = f;
    },
    setBatchNotifyFunction: (f) => {
      r = f;
    }
  };
}
const J = Ri();
class bn {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), mi(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (Jt ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class Ei extends bn {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || Gt, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || Ci(this.options), this.state = this.initialState, this.scheduleGc();
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
    const r = Oi(this.state.data, e, this.options);
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
    return (t = this.retryer) == null || t.cancel(e), r ? r.then(re).catch(re) : Promise.resolve();
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
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !bi(this.state.dataUpdatedAt, e);
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
    this.observers.indexOf(e) === -1 && (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers.indexOf(e) !== -1 && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
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
    var r, n;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && t != null && t.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var a;
        return (a = this.retryer) == null || a.continueRetry(), this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const h = this.observers.find((y) => y.options.queryFn);
      h && this.setOptions(h.options);
    }
    Array.isArray(this.options.queryKey) || process.env.NODE_ENV !== "production" && this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
    const o = wi(), s = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, u = (h) => {
      Object.defineProperty(h, "signal", {
        enumerable: !0,
        get: () => {
          if (o)
            return this.abortSignalConsumed = !0, o.signal;
        }
      });
    };
    u(s);
    const d = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(s)) : Promise.reject("Missing queryFn"), f = {
      fetchOptions: t,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: d
    };
    if (u(f), (r = this.options.behavior) == null || r.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((n = f.fetchOptions) == null ? void 0 : n.meta)) {
      var c;
      this.dispatch({
        type: "fetch",
        meta: (c = f.fetchOptions) == null ? void 0 : c.meta
      });
    }
    const g = (h) => {
      if (_t(h) && h.silent || this.dispatch({
        type: "error",
        error: h
      }), !_t(h)) {
        var y, S, O, v;
        (y = (S = this.cache.config).onError) == null || y.call(S, h, this), (O = (v = this.cache.config).onSettled) == null || O.call(v, this.state.data, h, this), process.env.NODE_ENV !== "production" && this.logger.error(h);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = mn({
      fn: f.fetchFn,
      abort: o == null ? void 0 : o.abort.bind(o),
      onSuccess: (h) => {
        var y, S, O, v;
        if (typeof h > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), g(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(h), (y = (S = this.cache.config).onSuccess) == null || y.call(S, h, this), (O = (v = this.cache.config).onSettled) == null || O.call(v, h, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: g,
      onFail: (h, y) => {
        this.dispatch({
          type: "failed",
          failureCount: h,
          error: y
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
      var n, a;
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
            fetchMeta: (n = e.meta) != null ? n : null,
            fetchStatus: Yt(this.options.networkMode) ? "fetching" : "paused",
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
            dataUpdatedAt: (a = e.dataUpdatedAt) != null ? a : Date.now(),
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
          const o = e.error;
          return _t(o) && o.revert && this.revertState ? {
            ...this.revertState
          } : {
            ...r,
            error: o,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: o,
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
    this.state = t(this.state), J.batch(() => {
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
function Ci(i) {
  const e = typeof i.initialData == "function" ? i.initialData() : i.initialData, t = typeof e < "u", r = t ? typeof i.initialDataUpdatedAt == "function" ? i.initialDataUpdatedAt() : i.initialDataUpdatedAt : 0;
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
class _i extends bt {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, t, r) {
    var n;
    const a = t.queryKey, o = (n = t.queryHash) != null ? n : zt(a, t);
    let s = this.get(o);
    return s || (s = new Ei({
      cache: this,
      logger: e.getLogger(),
      queryKey: a,
      queryHash: o,
      options: e.defaultQueryOptions(t),
      state: r,
      defaultOptions: e.getQueryDefaults(a)
    }), this.add(s)), s;
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
    J.batch(() => {
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
    const [r] = we(e, t);
    return typeof r.exact > "u" && (r.exact = !0), this.queries.find((n) => vr(r, n));
  }
  findAll(e, t) {
    const [r] = we(e, t);
    return Object.keys(r).length > 0 ? this.queries.filter((n) => vr(r, n)) : this.queries;
  }
  notify(e) {
    J.batch(() => {
      this.listeners.forEach(({
        listener: t
      }) => {
        t(e);
      });
    });
  }
  onFocus() {
    J.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    J.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class ki extends bn {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || Gt, this.observers = [], this.state = e.state || ji(), this.setOptions(e.options), this.scheduleGc();
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
    this.observers.indexOf(e) === -1 && (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
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
      var C;
      return this.retryer = mn({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (j, M) => {
          this.dispatch({
            type: "failed",
            failureCount: j,
            error: M
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
        retry: (C = this.options.retry) != null ? C : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, t = this.state.status === "loading";
    try {
      var r, n, a, o, s, u, d, f;
      if (!t) {
        var c, g, h, y;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((c = (g = this.mutationCache.config).onMutate) == null ? void 0 : c.call(g, this.state.variables, this));
        const j = await ((h = (y = this.options).onMutate) == null ? void 0 : h.call(y, this.state.variables));
        j !== this.state.context && this.dispatch({
          type: "loading",
          context: j,
          variables: this.state.variables
        });
      }
      const C = await e();
      return await ((r = (n = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(n, C, this.state.variables, this.state.context, this)), await ((a = (o = this.options).onSuccess) == null ? void 0 : a.call(o, C, this.state.variables, this.state.context)), await ((s = (u = this.mutationCache.config).onSettled) == null ? void 0 : s.call(u, C, null, this.state.variables, this.state.context, this)), await ((d = (f = this.options).onSettled) == null ? void 0 : d.call(f, C, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: C
      }), C;
    } catch (C) {
      try {
        var S, O, v, m, _, x, T, k;
        throw await ((S = (O = this.mutationCache.config).onError) == null ? void 0 : S.call(O, C, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(C), await ((v = (m = this.options).onError) == null ? void 0 : v.call(m, C, this.state.variables, this.state.context)), await ((_ = (x = this.mutationCache.config).onSettled) == null ? void 0 : _.call(x, void 0, C, this.state.variables, this.state.context, this)), await ((T = (k = this.options).onSettled) == null ? void 0 : T.call(k, void 0, C, this.state.variables, this.state.context)), C;
      } finally {
        this.dispatch({
          type: "error",
          error: C
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
            isPaused: !Yt(this.options.networkMode),
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
    this.state = t(this.state), J.batch(() => {
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
function ji() {
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
class Li extends bt {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, t, r) {
    const n = new ki({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(t),
      state: r,
      defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
    });
    return this.add(n), n;
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
    J.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((t) => yr(e, t));
  }
  findAll(e) {
    return this.mutations.filter((t) => yr(e, t));
  }
  notify(e) {
    J.batch(() => {
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
      return J.batch(() => t.reduce((r, n) => r.then(() => n.continue().catch(re)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function Di() {
  return {
    onFetch: (i) => {
      i.fetchFn = () => {
        var e, t, r, n, a, o;
        const s = (e = i.fetchOptions) == null || (t = e.meta) == null ? void 0 : t.refetchPage, u = (r = i.fetchOptions) == null || (n = r.meta) == null ? void 0 : n.fetchMore, d = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", c = (u == null ? void 0 : u.direction) === "backward", g = ((a = i.state.data) == null ? void 0 : a.pages) || [], h = ((o = i.state.data) == null ? void 0 : o.pageParams) || [];
        let y = h, S = !1;
        const O = (k) => {
          Object.defineProperty(k, "signal", {
            enumerable: !0,
            get: () => {
              var C;
              if ((C = i.signal) != null && C.aborted)
                S = !0;
              else {
                var j;
                (j = i.signal) == null || j.addEventListener("abort", () => {
                  S = !0;
                });
              }
              return i.signal;
            }
          });
        }, v = i.options.queryFn || (() => Promise.reject("Missing queryFn")), m = (k, C, j, M) => (y = M ? [C, ...y] : [...y, C], M ? [j, ...k] : [...k, j]), _ = (k, C, j, M) => {
          if (S)
            return Promise.reject("Cancelled");
          if (typeof j > "u" && !C && k.length)
            return Promise.resolve(k);
          const z = {
            queryKey: i.queryKey,
            pageParam: j,
            meta: i.options.meta
          };
          O(z);
          const H = v(z);
          return Promise.resolve(H).then((V) => m(k, j, V, M));
        };
        let x;
        if (!g.length)
          x = _([]);
        else if (f) {
          const k = typeof d < "u", C = k ? d : Or(i.options, g);
          x = _(g, k, C);
        } else if (c) {
          const k = typeof d < "u", C = k ? d : Fi(i.options, g);
          x = _(g, k, C, !0);
        } else {
          y = [];
          const k = typeof i.options.getNextPageParam > "u";
          x = (s && g[0] ? s(g[0], 0, g) : !0) ? _([], k, h[0]) : Promise.resolve(m([], h[0], g[0]));
          for (let j = 1; j < g.length; j++)
            x = x.then((M) => {
              if (s && g[j] ? s(g[j], j, g) : !0) {
                const H = k ? h[j] : Or(i.options, M);
                return _(M, k, H);
              }
              return Promise.resolve(m(M, h[j], g[j]));
            });
        }
        return x.then((k) => ({
          pages: k,
          pageParams: y
        }));
      };
    }
  };
}
function Or(i, e) {
  return i.getNextPageParam == null ? void 0 : i.getNextPageParam(e[e.length - 1], e);
}
function Fi(i, e) {
  return i.getPreviousPageParam == null ? void 0 : i.getPreviousPageParam(e[0], e);
}
class Ai {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new _i(), this.mutationCache = e.mutationCache || new Li(), this.logger = e.logger || Gt, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = At.subscribe(() => {
      At.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = ft.subscribe(() => {
      ft.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, t;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (t = this.unsubscribeOnline) == null || t.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, t) {
    const [r] = we(e, t);
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
    const n = nt(e, t, r), a = this.getQueryData(n.queryKey);
    return a ? Promise.resolve(a) : this.fetchQuery(n);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({
      queryKey: t,
      state: r
    }) => {
      const n = r.data;
      return [t, n];
    });
  }
  setQueryData(e, t, r) {
    const n = this.queryCache.find(e), a = n == null ? void 0 : n.state.data, o = yi(t, a);
    if (typeof o > "u")
      return;
    const s = nt(e), u = this.defaultQueryOptions(s);
    return this.queryCache.build(this, u).setData(o, {
      ...r,
      manual: !0
    });
  }
  setQueriesData(e, t, r) {
    return J.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: n
    }) => [n, this.setQueryData(n, t, r)]));
  }
  getQueryState(e, t) {
    var r;
    return (r = this.queryCache.find(e, t)) == null ? void 0 : r.state;
  }
  removeQueries(e, t) {
    const [r] = we(e, t), n = this.queryCache;
    J.batch(() => {
      n.findAll(r).forEach((a) => {
        n.remove(a);
      });
    });
  }
  resetQueries(e, t, r) {
    const [n, a] = we(e, t, r), o = this.queryCache, s = {
      type: "active",
      ...n
    };
    return J.batch(() => (o.findAll(n).forEach((u) => {
      u.reset();
    }), this.refetchQueries(s, a)));
  }
  cancelQueries(e, t, r) {
    const [n, a = {}] = we(e, t, r);
    typeof a.revert > "u" && (a.revert = !0);
    const o = J.batch(() => this.queryCache.findAll(n).map((s) => s.cancel(a)));
    return Promise.all(o).then(re).catch(re);
  }
  invalidateQueries(e, t, r) {
    const [n, a] = we(e, t, r);
    return J.batch(() => {
      var o, s;
      if (this.queryCache.findAll(n).forEach((d) => {
        d.invalidate();
      }), n.refetchType === "none")
        return Promise.resolve();
      const u = {
        ...n,
        type: (o = (s = n.refetchType) != null ? s : n.type) != null ? o : "active"
      };
      return this.refetchQueries(u, a);
    });
  }
  refetchQueries(e, t, r) {
    const [n, a] = we(e, t, r), o = J.batch(() => this.queryCache.findAll(n).filter((u) => !u.isDisabled()).map((u) => {
      var d;
      return u.fetch(void 0, {
        ...a,
        cancelRefetch: (d = a == null ? void 0 : a.cancelRefetch) != null ? d : !0,
        meta: {
          refetchPage: n.refetchPage
        }
      });
    }));
    let s = Promise.all(o).then(re);
    return a != null && a.throwOnError || (s = s.catch(re)), s;
  }
  fetchQuery(e, t, r) {
    const n = nt(e, t, r), a = this.defaultQueryOptions(n);
    typeof a.retry > "u" && (a.retry = !1);
    const o = this.queryCache.build(this, a);
    return o.isStaleByTime(a.staleTime) ? o.fetch(a) : Promise.resolve(o.state.data);
  }
  prefetchQuery(e, t, r) {
    return this.fetchQuery(e, t, r).then(re).catch(re);
  }
  fetchInfiniteQuery(e, t, r) {
    const n = nt(e, t, r);
    return n.behavior = Di(), this.fetchQuery(n);
  }
  prefetchInfiniteQuery(e, t, r) {
    return this.fetchInfiniteQuery(e, t, r).then(re).catch(re);
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
    const r = this.queryDefaults.find((n) => xe(e) === xe(n.queryKey));
    r ? r.defaultOptions = t : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const t = this.queryDefaults.find((r) => De(e, r.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((n) => De(e, n.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), t == null ? void 0 : t.defaultOptions;
  }
  setMutationDefaults(e, t) {
    const r = this.mutationDefaults.find((n) => xe(e) === xe(n.mutationKey));
    r ? r.defaultOptions = t : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const t = this.mutationDefaults.find((r) => De(e, r.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((n) => De(e, n.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), t == null ? void 0 : t.defaultOptions;
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
    return !t.queryHash && t.queryKey && (t.queryHash = zt(t.queryKey, t)), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.useErrorBoundary > "u" && (t.useErrorBoundary = !!t.suspense), t;
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
const Sr = /* @__PURE__ */ Qe.createContext(void 0), Ti = /* @__PURE__ */ Qe.createContext(!1);
function Ni(i, e) {
  return i || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Sr), window.ReactQueryClientContext) : Sr);
}
const Ii = ({
  client: i,
  children: e,
  context: t,
  contextSharing: r = !1
}) => {
  Qe.useEffect(() => (i.mount(), () => {
    i.unmount();
  }), [i]), process.env.NODE_ENV !== "production" && r && i.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const n = Ni(t, r);
  return /* @__PURE__ */ Qe.createElement(Ti.Provider, {
    value: !t && r
  }, /* @__PURE__ */ Qe.createElement(n.Provider, {
    value: i
  }, e));
}, Ui = ({ children: i }) => {
  const e = new Ai({
    defaultOptions: { queries: { refetchOnWindowFocus: !1, retry: !1 } }
  });
  return /* @__PURE__ */ $.jsx(Ii, { client: e, children: i });
}, wn = Wt({
  height: window.innerHeight,
  width: window.innerWidth
}), Mi = ({
  children: i
}) => {
  const [e, t] = cn({
    height: window.innerHeight,
    width: window.innerWidth
  }), r = li(
    () => t({
      height: window.innerHeight,
      width: window.innerWidth
    }),
    [e]
  );
  return fn(() => (r(), window.addEventListener("resize", r), document.addEventListener(
    "touchstart",
    (n) => {
      n.touches.length > 1 && n.preventDefault();
    },
    {
      passive: !1
    }
  ), () => {
    window.removeEventListener("resize", r), window.removeEventListener("touchstart", () => {
      console.log("done touch start");
    });
  }), []), /* @__PURE__ */ $.jsx(wn.Provider, { value: e, children: i });
};
function Z(i) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Z(i);
}
function qi(i, e) {
  if (Z(i) !== "object" || i === null)
    return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e || "default");
    if (Z(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
function On(i) {
  var e = qi(i, "string");
  return Z(e) === "symbol" ? e : String(e);
}
function pe(i, e, t) {
  return e = On(e), e in i ? Object.defineProperty(i, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[e] = t, i;
}
var Bi = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Hi = {
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
}, Vi = function(e) {
  return Hi[e];
}, Qi = function(e) {
  return e.replace(Bi, Vi);
};
function Pr(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function xr(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pr(Object(t), !0).forEach(function(r) {
      pe(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Pr(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
var Rr = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Qi
};
function Ki() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Rr = xr(xr({}, Rr), i);
}
function X(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Er(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, On(r.key), r);
  }
}
function ee(i, e, t) {
  return e && Er(i.prototype, e), t && Er(i, t), Object.defineProperty(i, "prototype", {
    writable: !1
  }), i;
}
var $i = {
  type: "3rdParty",
  init: function(e) {
    Ki(e.options.react);
  }
}, Wi = Wt();
(function() {
  function i() {
    X(this, i), this.usedNamespaces = {};
  }
  return ee(i, [{
    key: "addUsedNamespaces",
    value: function(t) {
      var r = this;
      t.forEach(function(n) {
        r.usedNamespaces[n] || (r.usedNamespaces[n] = !0);
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function() {
      return Object.keys(this.usedNamespaces);
    }
  }]), i;
})();
function Ji(i) {
  if (Array.isArray(i))
    return i;
}
function Cr(i, e) {
  (e == null || e > i.length) && (e = i.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = i[t];
  return r;
}
function zi(i, e) {
  if (i) {
    if (typeof i == "string")
      return Cr(i, e);
    var t = Object.prototype.toString.call(i).slice(8, -1);
    if (t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set")
      return Array.from(i);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Cr(i, e);
  }
}
function Yi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gi(i) {
  var e = i.i18n, t = i.defaultNS, r = i.children, n = dn(function() {
    return {
      i18n: e,
      defaultNS: t
    };
  }, [e, t]);
  return ci(Wi.Provider, {
    value: n
  }, r);
}
function Oe(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function Tt(i, e) {
  return Tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Tt(i, e);
}
function Ot(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: i,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(i, "prototype", {
    writable: !1
  }), e && Tt(i, e);
}
function We(i, e) {
  if (e && (Z(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oe(i);
}
function oe(i) {
  return oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, oe(i);
}
function Zi(i) {
  if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null)
    return Array.from(i);
}
function Xi(i) {
  return Ji(i) || Zi(i) || zi(i) || Yi();
}
function _r(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function kr(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _r(Object(t), !0).forEach(function(r) {
      pe(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : _r(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
var ea = {
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
}, ta = function() {
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    X(this, i), this.init(e, t);
  }
  return ee(i, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = t || ea, this.options = r, this.debug = r.debug;
    }
  }, {
    key: "setDebug",
    value: function(t) {
      this.debug = t;
    }
  }, {
    key: "log",
    value: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return this.forward(r, "log", "", !0);
    }
  }, {
    key: "warn",
    value: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return this.forward(r, "warn", "", !0);
    }
  }, {
    key: "error",
    value: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return this.forward(r, "error", "");
    }
  }, {
    key: "deprecate",
    value: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
    }
  }, {
    key: "forward",
    value: function(t, r, n, a) {
      return a && !this.debug ? null : (typeof t[0] == "string" && (t[0] = "".concat(n).concat(this.prefix, " ").concat(t[0])), this.logger[r](t));
    }
  }, {
    key: "create",
    value: function(t) {
      return new i(this.logger, kr(kr({}, {
        prefix: "".concat(this.prefix, ":").concat(t, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(t) {
      return t = t || this.options, t.prefix = t.prefix || this.prefix, new i(this.logger, t);
    }
  }]), i;
}(), ae = new ta(), Se = function() {
  function i() {
    X(this, i), this.observers = {};
  }
  return ee(i, [{
    key: "on",
    value: function(t, r) {
      var n = this;
      return t.split(" ").forEach(function(a) {
        n.observers[a] = n.observers[a] || [], n.observers[a].push(r);
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
        this.observers[t] = this.observers[t].filter(function(n) {
          return n !== r;
        });
      }
    }
  }, {
    key: "emit",
    value: function(t) {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        n[a - 1] = arguments[a];
      if (this.observers[t]) {
        var o = [].concat(this.observers[t]);
        o.forEach(function(u) {
          u.apply(void 0, n);
        });
      }
      if (this.observers["*"]) {
        var s = [].concat(this.observers["*"]);
        s.forEach(function(u) {
          u.apply(u, [t].concat(n));
        });
      }
    }
  }]), i;
}();
function Me() {
  var i, e, t = new Promise(function(r, n) {
    i = r, e = n;
  });
  return t.resolve = i, t.reject = e, t;
}
function jr(i) {
  return i == null ? "" : "" + i;
}
function ra(i, e, t) {
  i.forEach(function(r) {
    e[r] && (t[r] = e[r]);
  });
}
function Zt(i, e, t) {
  function r(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function n() {
    return !i || typeof i == "string";
  }
  for (var a = typeof e != "string" ? [].concat(e) : e.split("."); a.length > 1; ) {
    if (n())
      return {};
    var o = r(a.shift());
    !i[o] && t && (i[o] = new t()), Object.prototype.hasOwnProperty.call(i, o) ? i = i[o] : i = {};
  }
  return n() ? {} : {
    obj: i,
    k: r(a.shift())
  };
}
function Lr(i, e, t) {
  var r = Zt(i, e, Object), n = r.obj, a = r.k;
  n[a] = t;
}
function na(i, e, t, r) {
  var n = Zt(i, e, Object), a = n.obj, o = n.k;
  a[o] = a[o] || [], r && (a[o] = a[o].concat(t)), r || a[o].push(t);
}
function dt(i, e) {
  var t = Zt(i, e), r = t.obj, n = t.k;
  if (r)
    return r[n];
}
function ia(i, e, t) {
  var r = dt(i, t);
  return r !== void 0 ? r : dt(e, t);
}
function Sn(i, e, t) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in i ? typeof i[r] == "string" || i[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (i[r] = e[r]) : Sn(i[r], e[r], t) : i[r] = e[r]);
  return i;
}
function je(i) {
  return i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var aa = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function oa(i) {
  return typeof i == "string" ? i.replace(/[&<>"'\/]/g, function(e) {
    return aa[e];
  }) : i;
}
var St = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, sa = [" ", ",", "?", "!", ";"];
function ua(i, e, t) {
  e = e || "", t = t || "";
  var r = sa.filter(function(s) {
    return e.indexOf(s) < 0 && t.indexOf(s) < 0;
  });
  if (r.length === 0)
    return !0;
  var n = new RegExp("(".concat(r.map(function(s) {
    return s === "?" ? "\\?" : s;
  }).join("|"), ")")), a = !n.test(i);
  if (!a) {
    var o = i.indexOf(t);
    o > 0 && !n.test(i.substring(0, o)) && (a = !0);
  }
  return a;
}
function ht(i, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (i) {
    if (i[e])
      return i[e];
    for (var r = e.split(t), n = i, a = 0; a < r.length; ++a) {
      if (!n || typeof n[r[a]] == "string" && a + 1 < r.length)
        return;
      if (n[r[a]] === void 0) {
        for (var o = 2, s = r.slice(a, a + o).join(t), u = n[s]; u === void 0 && r.length > a + o; )
          o++, s = r.slice(a, a + o).join(t), u = n[s];
        if (u === void 0)
          return;
        if (u === null)
          return null;
        if (e.endsWith(s)) {
          if (typeof u == "string")
            return u;
          if (s && typeof u[s] == "string")
            return u[s];
        }
        var d = r.slice(a + o).join(t);
        return d ? ht(u, d, t) : void 0;
      }
      n = n[r[a]];
    }
    return n;
  }
}
function Dr(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function it(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Dr(Object(t), !0).forEach(function(r) {
      pe(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Dr(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function la(i) {
  var e = ca();
  return function() {
    var r = oe(i), n;
    if (e) {
      var a = oe(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return We(this, n);
  };
}
function ca() {
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
var fa = function(i) {
  Ot(t, i);
  var e = la(t);
  function t(r) {
    var n, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return X(this, t), n = e.call(this), St && Se.call(Oe(n)), n.data = r || {}, n.options = a, n.options.keySeparator === void 0 && (n.options.keySeparator = "."), n.options.ignoreJSONStructure === void 0 && (n.options.ignoreJSONStructure = !0), n;
  }
  return ee(t, [{
    key: "addNamespaces",
    value: function(n) {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }
  }, {
    key: "removeNamespaces",
    value: function(n) {
      var a = this.options.ns.indexOf(n);
      a > -1 && this.options.ns.splice(a, 1);
    }
  }, {
    key: "getResource",
    value: function(n, a, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, d = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure, f = [n, a];
      o && typeof o != "string" && (f = f.concat(o)), o && typeof o == "string" && (f = f.concat(u ? o.split(u) : o)), n.indexOf(".") > -1 && (f = n.split("."));
      var c = dt(this.data, f);
      return c || !d || typeof o != "string" ? c : ht(this.data && this.data[n] && this.data[n][a], o, u);
    }
  }, {
    key: "addResource",
    value: function(n, a, o, s) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, d = this.options.keySeparator;
      d === void 0 && (d = ".");
      var f = [n, a];
      o && (f = f.concat(d ? o.split(d) : o)), n.indexOf(".") > -1 && (f = n.split("."), s = a, a = f[1]), this.addNamespaces(a), Lr(this.data, f, s), u.silent || this.emit("added", n, a, o, s);
    }
  }, {
    key: "addResources",
    value: function(n, a, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: !1
      };
      for (var u in o)
        (typeof o[u] == "string" || Object.prototype.toString.apply(o[u]) === "[object Array]") && this.addResource(n, a, u, o[u], {
          silent: !0
        });
      s.silent || this.emit("added", n, a, o);
    }
  }, {
    key: "addResourceBundle",
    value: function(n, a, o, s, u) {
      var d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: !1
      }, f = [n, a];
      n.indexOf(".") > -1 && (f = n.split("."), s = o, o = a, a = f[1]), this.addNamespaces(a);
      var c = dt(this.data, f) || {};
      s ? Sn(c, o, u) : c = it(it({}, c), o), Lr(this.data, f, c), d.silent || this.emit("added", n, a, o);
    }
  }, {
    key: "removeResourceBundle",
    value: function(n, a) {
      this.hasResourceBundle(n, a) && delete this.data[n][a], this.removeNamespaces(a), this.emit("removed", n, a);
    }
  }, {
    key: "hasResourceBundle",
    value: function(n, a) {
      return this.getResource(n, a) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function(n, a) {
      return a || (a = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? it(it({}, {}), this.getResource(n, a)) : this.getResource(n, a);
    }
  }, {
    key: "getDataByLanguage",
    value: function(n) {
      return this.data[n];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function(n) {
      var a = this.getDataByLanguage(n), o = a && Object.keys(a) || [];
      return !!o.find(function(s) {
        return a[s] && Object.keys(a[s]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      return this.data;
    }
  }]), t;
}(Se), Pn = {
  processors: {},
  addPostProcessor: function(e) {
    this.processors[e.name] = e;
  },
  handle: function(e, t, r, n, a) {
    var o = this;
    return e.forEach(function(s) {
      o.processors[s] && (t = o.processors[s].process(t, r, n, a));
    }), t;
  }
};
function Fr(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function K(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fr(Object(t), !0).forEach(function(r) {
      pe(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Fr(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function da(i) {
  var e = ha();
  return function() {
    var r = oe(i), n;
    if (e) {
      var a = oe(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return We(this, n);
  };
}
function ha() {
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
var Ar = {}, Tr = function(i) {
  Ot(t, i);
  var e = da(t);
  function t(r) {
    var n, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return X(this, t), n = e.call(this), St && Se.call(Oe(n)), ra(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, Oe(n)), n.options = a, n.options.keySeparator === void 0 && (n.options.keySeparator = "."), n.logger = ae.create("translator"), n;
  }
  return ee(t, [{
    key: "changeLanguage",
    value: function(n) {
      n && (this.language = n);
    }
  }, {
    key: "exists",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (n == null)
        return !1;
      var o = this.resolve(n, a);
      return o && o.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function(n, a) {
      var o = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
      o === void 0 && (o = ":");
      var s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, u = a.ns || this.options.defaultNS || [], d = o && n.indexOf(o) > -1, f = !this.options.userDefinedKeySeparator && !a.keySeparator && !this.options.userDefinedNsSeparator && !a.nsSeparator && !ua(n, o, s);
      if (d && !f) {
        var c = n.match(this.interpolator.nestingRegexp);
        if (c && c.length > 0)
          return {
            key: n,
            namespaces: u
          };
        var g = n.split(o);
        (o !== s || o === s && this.options.ns.indexOf(g[0]) > -1) && (u = g.shift()), n = g.join(s);
      }
      return typeof u == "string" && (u = [u]), {
        key: n,
        namespaces: u
      };
    }
  }, {
    key: "translate",
    value: function(n, a, o) {
      var s = this;
      if (Z(a) !== "object" && this.options.overloadTranslationOptionHandler && (a = this.options.overloadTranslationOptionHandler(arguments)), Z(a) === "object" && (a = K({}, a)), a || (a = {}), n == null)
        return "";
      Array.isArray(n) || (n = [String(n)]);
      var u = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails, d = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, f = this.extractFromKey(n[n.length - 1], a), c = f.key, g = f.namespaces, h = g[g.length - 1], y = a.lng || this.language, S = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (y && y.toLowerCase() === "cimode") {
        if (S) {
          var O = a.nsSeparator || this.options.nsSeparator;
          return u ? {
            res: "".concat(h).concat(O).concat(c),
            usedKey: c,
            exactUsedKey: c,
            usedLng: y,
            usedNS: h
          } : "".concat(h).concat(O).concat(c);
        }
        return u ? {
          res: c,
          usedKey: c,
          exactUsedKey: c,
          usedLng: y,
          usedNS: h
        } : c;
      }
      var v = this.resolve(n, a), m = v && v.res, _ = v && v.usedKey || c, x = v && v.exactUsedKey || c, T = Object.prototype.toString.apply(m), k = ["[object Number]", "[object Function]", "[object RegExp]"], C = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays, j = !this.i18nFormat || this.i18nFormat.handleAsObject, M = typeof m != "string" && typeof m != "boolean" && typeof m != "number";
      if (j && m && M && k.indexOf(T) < 0 && !(typeof C == "string" && T === "[object Array]")) {
        if (!a.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var z = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(_, m, K(K({}, a), {}, {
            ns: g
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return u ? (v.res = z, v) : z;
        }
        if (d) {
          var H = T === "[object Array]", ne = H ? [] : {}, V = H ? x : _;
          for (var p in m)
            if (Object.prototype.hasOwnProperty.call(m, p)) {
              var w = "".concat(V).concat(d).concat(p);
              ne[p] = this.translate(w, K(K({}, a), {
                joinArrays: !1,
                ns: g
              })), ne[p] === w && (ne[p] = m[p]);
            }
          m = ne;
        }
      } else if (j && typeof C == "string" && T === "[object Array]")
        m = m.join(C), m && (m = this.extendTranslation(m, n, a, o));
      else {
        var R = !1, I = !1, U = a.count !== void 0 && typeof a.count != "string", D = t.hasDefaultValue(a), ue = U ? this.pluralResolver.getSuffix(y, a.count, a) : "", Y = a["defaultValue".concat(ue)] || a.defaultValue;
        !this.isValidLookup(m) && D && (R = !0, m = Y), this.isValidLookup(m) || (I = !0, m = c);
        var ge = a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, ze = ge && I ? void 0 : m, Pe = D && Y !== m && this.options.updateMissing;
        if (I || R || Pe) {
          if (this.logger.log(Pe ? "updateKey" : "missingKey", y, h, c, Pe ? Y : m), d) {
            var Ye = this.resolve(c, K(K({}, a), {}, {
              keySeparator: !1
            }));
            Ye && Ye.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var le = [], ve = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && ve && ve[0])
            for (var ye = 0; ye < ve.length; ye++)
              le.push(ve[ye]);
          else
            this.options.saveMissingTo === "all" ? le = this.languageUtils.toResolveHierarchy(a.lng || this.language) : le.push(a.lng || this.language);
          var Ee = function(be, Ce, Ge) {
            var Ze = D && Ge !== m ? Ge : ze;
            s.options.missingKeyHandler ? s.options.missingKeyHandler(be, h, Ce, Ze, Pe, a) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(be, h, Ce, Ze, Pe, a), s.emit("missingKey", be, h, Ce, m);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && U ? le.forEach(function(me) {
            s.pluralResolver.getSuffixes(me, a).forEach(function(be) {
              Ee([me], c + be, a["defaultValue".concat(be)] || Y);
            });
          }) : Ee(le, c, Y));
        }
        m = this.extendTranslation(m, n, a, v, o), I && m === c && this.options.appendNamespaceToMissingKey && (m = "".concat(h, ":").concat(c)), (I || R) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(h, ":").concat(c) : c, R ? m : void 0) : m = this.options.parseMissingKeyHandler(m));
      }
      return u ? (v.res = m, v) : m;
    }
  }, {
    key: "extendTranslation",
    value: function(n, a, o, s, u) {
      var d = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        n = this.i18nFormat.parse(n, K(K({}, this.options.interpolation.defaultVariables), o), s.usedLng, s.usedNS, s.usedKey, {
          resolved: s
        });
      else if (!o.skipInterpolation) {
        o.interpolation && this.interpolator.init(K(K({}, o), {
          interpolation: K(K({}, this.options.interpolation), o.interpolation)
        }));
        var f = typeof n == "string" && (o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), c;
        if (f) {
          var g = n.match(this.interpolator.nestingRegexp);
          c = g && g.length;
        }
        var h = o.replace && typeof o.replace != "string" ? o.replace : o;
        if (this.options.interpolation.defaultVariables && (h = K(K({}, this.options.interpolation.defaultVariables), h)), n = this.interpolator.interpolate(n, h, o.lng || this.language, o), f) {
          var y = n.match(this.interpolator.nestingRegexp), S = y && y.length;
          c < S && (o.nest = !1);
        }
        !o.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (o.lng = s.usedLng), o.nest !== !1 && (n = this.interpolator.nest(n, function() {
          for (var m = arguments.length, _ = new Array(m), x = 0; x < m; x++)
            _[x] = arguments[x];
          return u && u[0] === _[0] && !o.context ? (d.logger.warn("It seems you are nesting recursively key: ".concat(_[0], " in key: ").concat(a[0])), null) : d.translate.apply(d, _.concat([a]));
        }, o)), o.interpolation && this.interpolator.reset();
      }
      var O = o.postProcess || this.options.postProcess, v = typeof O == "string" ? [O] : O;
      return n != null && v && v.length && o.applyPostProcessor !== !1 && (n = Pn.handle(v, n, a, this.options && this.options.postProcessPassResolved ? K({
        i18nResolved: s
      }, o) : o, this)), n;
    }
  }, {
    key: "resolve",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, u, d, f, c;
      return typeof n == "string" && (n = [n]), n.forEach(function(g) {
        if (!a.isValidLookup(s)) {
          var h = a.extractFromKey(g, o), y = h.key;
          u = y;
          var S = h.namespaces;
          a.options.fallbackNS && (S = S.concat(a.options.fallbackNS));
          var O = o.count !== void 0 && typeof o.count != "string", v = O && !o.ordinal && o.count === 0 && a.pluralResolver.shouldUseIntlApi(), m = o.context !== void 0 && (typeof o.context == "string" || typeof o.context == "number") && o.context !== "", _ = o.lngs ? o.lngs : a.languageUtils.toResolveHierarchy(o.lng || a.language, o.fallbackLng);
          S.forEach(function(x) {
            a.isValidLookup(s) || (c = x, !Ar["".concat(_[0], "-").concat(x)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(c) && (Ar["".concat(_[0], "-").concat(x)] = !0, a.logger.warn('key "'.concat(u, '" for languages "').concat(_.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), _.forEach(function(T) {
              if (!a.isValidLookup(s)) {
                f = T;
                var k = [y];
                if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                  a.i18nFormat.addLookupKeys(k, y, T, x, o);
                else {
                  var C;
                  O && (C = a.pluralResolver.getSuffix(T, o.count, o));
                  var j = "".concat(a.options.pluralSeparator, "zero");
                  if (O && (k.push(y + C), v && k.push(y + j)), m) {
                    var M = "".concat(y).concat(a.options.contextSeparator).concat(o.context);
                    k.push(M), O && (k.push(M + C), v && k.push(M + j));
                  }
                }
                for (var z; z = k.pop(); )
                  a.isValidLookup(s) || (d = z, s = a.getResource(T, x, z, o));
              }
            }));
          });
        }
      }), {
        res: s,
        usedKey: u,
        exactUsedKey: d,
        usedLng: f,
        usedNS: c
      };
    }
  }, {
    key: "isValidLookup",
    value: function(n) {
      return n !== void 0 && !(!this.options.returnNull && n === null) && !(!this.options.returnEmptyString && n === "");
    }
  }, {
    key: "getResource",
    value: function(n, a, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(n, a, o, s) : this.resourceStore.getResource(n, a, o, s);
    }
  }], [{
    key: "hasDefaultValue",
    value: function(n) {
      var a = "defaultValue";
      for (var o in n)
        if (Object.prototype.hasOwnProperty.call(n, o) && a === o.substring(0, a.length) && n[o] !== void 0)
          return !0;
      return !1;
    }
  }]), t;
}(Se);
function kt(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
var Nr = function() {
  function i(e) {
    X(this, i), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ae.create("languageUtils");
  }
  return ee(i, [{
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
        var r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], n = t.split("-");
        return this.options.lowerCaseLng ? n = n.map(function(a) {
          return a.toLowerCase();
        }) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), r.indexOf(n[1].toLowerCase()) > -1 && (n[1] = kt(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), r.indexOf(n[1].toLowerCase()) > -1 && (n[1] = kt(n[1].toLowerCase())), r.indexOf(n[2].toLowerCase()) > -1 && (n[2] = kt(n[2].toLowerCase()))), n.join("-");
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
      var n;
      return t.forEach(function(a) {
        if (!n) {
          var o = r.formatLanguageCode(a);
          (!r.options.supportedLngs || r.isSupportedCode(o)) && (n = o);
        }
      }), !n && this.options.supportedLngs && t.forEach(function(a) {
        if (!n) {
          var o = r.getLanguagePartFromCode(a);
          if (r.isSupportedCode(o))
            return n = o;
          n = r.options.supportedLngs.find(function(s) {
            if (s === o)
              return s;
            if (!(s.indexOf("-") < 0 && o.indexOf("-") < 0) && s.indexOf(o) === 0)
              return s;
          });
        }
      }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
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
      var n = t[r];
      return n || (n = t[this.getScriptPartFromCode(r)]), n || (n = t[this.formatLanguageCode(r)]), n || (n = t[this.getLanguagePartFromCode(r)]), n || (n = t.default), n || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function(t, r) {
      var n = this, a = this.getFallbackCodes(r || this.options.fallbackLng || [], t), o = [], s = function(d) {
        d && (n.isSupportedCode(d) ? o.push(d) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(d)));
      };
      return typeof t == "string" && t.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(t))) : typeof t == "string" && s(this.formatLanguageCode(t)), a.forEach(function(u) {
        o.indexOf(u) < 0 && s(n.formatLanguageCode(u));
      }), o;
    }
  }]), i;
}(), pa = [{
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
}], ga = {
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
}, va = ["v1", "v2", "v3"], Ir = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function ya() {
  var i = {};
  return pa.forEach(function(e) {
    e.lngs.forEach(function(t) {
      i[t] = {
        numbers: e.nr,
        plurals: ga[e.fc]
      };
    });
  }), i;
}
var ma = function() {
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    X(this, i), this.languageUtils = e, this.options = t, this.logger = ae.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = ya();
  }
  return ee(i, [{
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
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(t, r);
      return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function(t, r) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(t, n).map(function(a) {
        return "".concat(r).concat(a);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(t) {
      var r = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(t, n);
      return a ? this.shouldUseIntlApi() ? a.resolvedOptions().pluralCategories.sort(function(o, s) {
        return Ir[o] - Ir[s];
      }).map(function(o) {
        return "".concat(r.options.prepend).concat(o);
      }) : a.numbers.map(function(o) {
        return r.getSuffix(t, o, n);
      }) : [];
    }
  }, {
    key: "getSuffix",
    value: function(t, r) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = this.getRule(t, n);
      return a ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(a.select(r)) : this.getSuffixRetroCompatible(a, r) : (this.logger.warn("no plural rule found for: ".concat(t)), "");
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function(t, r) {
      var n = this, a = t.noAbs ? t.plurals(r) : t.plurals(Math.abs(r)), o = t.numbers[a];
      this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
      var s = function() {
        return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString();
      };
      return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? "_plural_".concat(o.toString()) : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? s() : this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !va.includes(this.options.compatibilityJSON);
    }
  }]), i;
}();
function Ur(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function te(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ur(Object(t), !0).forEach(function(r) {
      pe(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Ur(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function Mr(i, e, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = ia(i, e, t);
  return !a && n && typeof t == "string" && (a = ht(i, t, r), a === void 0 && (a = ht(e, t, r))), a;
}
var ba = function() {
  function i() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    X(this, i), this.logger = ae.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(t) {
      return t;
    }, this.init(e);
  }
  return ee(i, [{
    key: "init",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      t.interpolation || (t.interpolation = {
        escapeValue: !0
      });
      var r = t.interpolation;
      this.escape = r.escape !== void 0 ? r.escape : oa, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? je(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? je(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? je(r.nestingPrefix) : r.nestingPrefixEscaped || je("$t("), this.nestingSuffix = r.nestingSuffix ? je(r.nestingSuffix) : r.nestingSuffixEscaped || je(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
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
      var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(n, "g");
    }
  }, {
    key: "interpolate",
    value: function(t, r, n, a) {
      var o = this, s, u, d, f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function c(O) {
        return O.replace(/\$/g, "$$$$");
      }
      var g = function(v) {
        if (v.indexOf(o.formatSeparator) < 0) {
          var m = Mr(r, f, v, o.options.keySeparator, o.options.ignoreJSONStructure);
          return o.alwaysFormat ? o.format(m, void 0, n, te(te(te({}, a), r), {}, {
            interpolationkey: v
          })) : m;
        }
        var _ = v.split(o.formatSeparator), x = _.shift().trim(), T = _.join(o.formatSeparator).trim();
        return o.format(Mr(r, f, x, o.options.keySeparator, o.options.ignoreJSONStructure), T, n, te(te(te({}, a), r), {}, {
          interpolationkey: x
        }));
      };
      this.resetRegExp();
      var h = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, y = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, S = [{
        regex: this.regexpUnescape,
        safeValue: function(v) {
          return c(v);
        }
      }, {
        regex: this.regexp,
        safeValue: function(v) {
          return o.escapeValue ? c(o.escape(v)) : c(v);
        }
      }];
      return S.forEach(function(O) {
        for (d = 0; s = O.regex.exec(t); ) {
          var v = s[1].trim();
          if (u = g(v), u === void 0)
            if (typeof h == "function") {
              var m = h(t, s, a);
              u = typeof m == "string" ? m : "";
            } else if (a && Object.prototype.hasOwnProperty.call(a, v))
              u = "";
            else if (y) {
              u = s[0];
              continue;
            } else
              o.logger.warn("missed to pass in variable ".concat(v, " for interpolating ").concat(t)), u = "";
          else
            typeof u != "string" && !o.useRawValueToEscape && (u = jr(u));
          var _ = O.safeValue(u);
          if (t = t.replace(s[0], _), y ? (O.regex.lastIndex += u.length, O.regex.lastIndex -= s[0].length) : O.regex.lastIndex = 0, d++, d >= o.maxReplaces)
            break;
        }
      }), t;
    }
  }, {
    key: "nest",
    value: function(t, r) {
      var n = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, s, u;
      function d(h, y) {
        var S = this.nestingOptionsSeparator;
        if (h.indexOf(S) < 0)
          return h;
        var O = h.split(new RegExp("".concat(S, "[ ]*{"))), v = "{".concat(O[1]);
        h = O[0], v = this.interpolate(v, u);
        var m = v.match(/'/g), _ = v.match(/"/g);
        (m && m.length % 2 === 0 && !_ || _.length % 2 !== 0) && (v = v.replace(/'/g, '"'));
        try {
          u = JSON.parse(v), y && (u = te(te({}, y), u));
        } catch (x) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(h), x), "".concat(h).concat(S).concat(v);
        }
        return delete u.defaultValue, h;
      }
      for (; o = this.nestingRegexp.exec(t); ) {
        var f = [];
        u = te({}, a), u = u.replace && typeof u.replace != "string" ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
        var c = !1;
        if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
          var g = o[1].split(this.formatSeparator).map(function(h) {
            return h.trim();
          });
          o[1] = g.shift(), f = g, c = !0;
        }
        if (s = r(d.call(this, o[1].trim(), u), u), s && o[0] === t && typeof s != "string")
          return s;
        typeof s != "string" && (s = jr(s)), s || (this.logger.warn("missed to resolve ".concat(o[1], " for nesting ").concat(t)), s = ""), c && (s = f.reduce(function(h, y) {
          return n.format(h, y, a.lng, te(te({}, a), {}, {
            interpolationkey: o[1].trim()
          }));
        }, s.trim())), t = t.replace(o[0], s), this.regexp.lastIndex = 0;
      }
      return t;
    }
  }]), i;
}();
function qr(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function fe(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qr(Object(t), !0).forEach(function(r) {
      pe(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : qr(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function wa(i) {
  var e = i.toLowerCase().trim(), t = {};
  if (i.indexOf("(") > -1) {
    var r = i.split("(");
    e = r[0].toLowerCase().trim();
    var n = r[1].substring(0, r[1].length - 1);
    if (e === "currency" && n.indexOf(":") < 0)
      t.currency || (t.currency = n.trim());
    else if (e === "relativetime" && n.indexOf(":") < 0)
      t.range || (t.range = n.trim());
    else {
      var a = n.split(";");
      a.forEach(function(o) {
        if (o) {
          var s = o.split(":"), u = Xi(s), d = u[0], f = u.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
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
function Le(i) {
  var e = {};
  return function(r, n, a) {
    var o = n + JSON.stringify(a), s = e[o];
    return s || (s = i(n, a), e[o] = s), s(r);
  };
}
var Oa = function() {
  function i() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    X(this, i), this.logger = ae.create("formatter"), this.options = e, this.formats = {
      number: Le(function(t, r) {
        var n = new Intl.NumberFormat(t, fe({}, r));
        return function(a) {
          return n.format(a);
        };
      }),
      currency: Le(function(t, r) {
        var n = new Intl.NumberFormat(t, fe(fe({}, r), {}, {
          style: "currency"
        }));
        return function(a) {
          return n.format(a);
        };
      }),
      datetime: Le(function(t, r) {
        var n = new Intl.DateTimeFormat(t, fe({}, r));
        return function(a) {
          return n.format(a);
        };
      }),
      relativetime: Le(function(t, r) {
        var n = new Intl.RelativeTimeFormat(t, fe({}, r));
        return function(a) {
          return n.format(a, r.range || "day");
        };
      }),
      list: Le(function(t, r) {
        var n = new Intl.ListFormat(t, fe({}, r));
        return function(a) {
          return n.format(a);
        };
      })
    }, this.init(e);
  }
  return ee(i, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      }, n = r.interpolation;
      this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function(t, r) {
      this.formats[t.toLowerCase().trim()] = r;
    }
  }, {
    key: "addCached",
    value: function(t, r) {
      this.formats[t.toLowerCase().trim()] = Le(r);
    }
  }, {
    key: "format",
    value: function(t, r, n) {
      var a = this, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = r.split(this.formatSeparator), u = s.reduce(function(d, f) {
        var c = wa(f), g = c.formatName, h = c.formatOptions;
        if (a.formats[g]) {
          var y = d;
          try {
            var S = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, O = S.locale || S.lng || o.locale || o.lng || n;
            y = a.formats[g](d, O, fe(fe(fe({}, h), o), S));
          } catch (v) {
            a.logger.warn(v);
          }
          return y;
        } else
          a.logger.warn("there was no format function for ".concat(g));
        return d;
      }, t);
      return u;
    }
  }]), i;
}();
function Br(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Hr(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Br(Object(t), !0).forEach(function(r) {
      pe(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Br(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function Sa(i) {
  var e = Pa();
  return function() {
    var r = oe(i), n;
    if (e) {
      var a = oe(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return We(this, n);
  };
}
function Pa() {
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
function xa(i, e) {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
}
var Ra = function(i) {
  Ot(t, i);
  var e = Sa(t);
  function t(r, n, a) {
    var o, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return X(this, t), o = e.call(this), St && Se.call(Oe(o)), o.backend = r, o.store = n, o.services = a, o.languageUtils = a.languageUtils, o.options = s, o.logger = ae.create("backendConnector"), o.waitingReads = [], o.maxParallelReads = s.maxParallelReads || 10, o.readingCalls = 0, o.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, o.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(a, s.backend, s), o;
  }
  return ee(t, [{
    key: "queueLoad",
    value: function(n, a, o, s) {
      var u = this, d = {}, f = {}, c = {}, g = {};
      return n.forEach(function(h) {
        var y = !0;
        a.forEach(function(S) {
          var O = "".concat(h, "|").concat(S);
          !o.reload && u.store.hasResourceBundle(h, S) ? u.state[O] = 2 : u.state[O] < 0 || (u.state[O] === 1 ? f[O] === void 0 && (f[O] = !0) : (u.state[O] = 1, y = !1, f[O] === void 0 && (f[O] = !0), d[O] === void 0 && (d[O] = !0), g[S] === void 0 && (g[S] = !0)));
        }), y || (c[h] = !0);
      }), (Object.keys(d).length || Object.keys(f).length) && this.queue.push({
        pending: f,
        pendingCount: Object.keys(f).length,
        loaded: {},
        errors: [],
        callback: s
      }), {
        toLoad: Object.keys(d),
        pending: Object.keys(f),
        toLoadLanguages: Object.keys(c),
        toLoadNamespaces: Object.keys(g)
      };
    }
  }, {
    key: "loaded",
    value: function(n, a, o) {
      var s = n.split("|"), u = s[0], d = s[1];
      a && this.emit("failedLoading", u, d, a), o && this.store.addResourceBundle(u, d, o), this.state[n] = a ? -1 : 2;
      var f = {};
      this.queue.forEach(function(c) {
        na(c.loaded, [u], d), xa(c, n), a && c.errors.push(a), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(g) {
          f[g] || (f[g] = {});
          var h = c.loaded[g];
          h.length && h.forEach(function(y) {
            f[g][y] === void 0 && (f[g][y] = !0);
          });
        }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
      }), this.emit("loaded", f), this.queue = this.queue.filter(function(c) {
        return !c.done;
      });
    }
  }, {
    key: "read",
    value: function(n, a, o) {
      var s = this, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, f = arguments.length > 5 ? arguments[5] : void 0;
      if (!n.length)
        return f(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: n,
          ns: a,
          fcName: o,
          tried: u,
          wait: d,
          callback: f
        });
        return;
      }
      this.readingCalls++;
      var c = function(S, O) {
        if (s.readingCalls--, s.waitingReads.length > 0) {
          var v = s.waitingReads.shift();
          s.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
        }
        if (S && O && u < s.maxRetries) {
          setTimeout(function() {
            s.read.call(s, n, a, o, u + 1, d * 2, f);
          }, d);
          return;
        }
        f(S, O);
      }, g = this.backend[o].bind(this.backend);
      if (g.length === 2) {
        try {
          var h = g(n, a);
          h && typeof h.then == "function" ? h.then(function(y) {
            return c(null, y);
          }).catch(c) : c(null, h);
        } catch (y) {
          c(y);
        }
        return;
      }
      return g(n, a, c);
    }
  }, {
    key: "prepareLoading",
    value: function(n, a) {
      var o = this, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return this.logger.warn("No backend was added via i18next.use. Will not load resources."), u && u();
      typeof n == "string" && (n = this.languageUtils.toResolveHierarchy(n)), typeof a == "string" && (a = [a]);
      var d = this.queueLoad(n, a, s, u);
      if (!d.toLoad.length)
        return d.pending.length || u(), null;
      d.toLoad.forEach(function(f) {
        o.loadOne(f);
      });
    }
  }, {
    key: "load",
    value: function(n, a, o) {
      this.prepareLoading(n, a, {}, o);
    }
  }, {
    key: "reload",
    value: function(n, a, o) {
      this.prepareLoading(n, a, {
        reload: !0
      }, o);
    }
  }, {
    key: "loadOne",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", s = n.split("|"), u = s[0], d = s[1];
      this.read(u, d, "read", void 0, void 0, function(f, c) {
        f && a.logger.warn("".concat(o, "loading namespace ").concat(d, " for language ").concat(u, " failed"), f), !f && c && a.logger.log("".concat(o, "loaded namespace ").concat(d, " for language ").concat(u), c), a.loaded(n, f, c);
      });
    }
  }, {
    key: "saveMissing",
    value: function(n, a, o, s, u) {
      var d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, f = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {
      };
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(a)) {
        this.logger.warn('did not save key "'.concat(o, '" as the namespace "').concat(a, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (!(o == null || o === "")) {
        if (this.backend && this.backend.create) {
          var c = Hr(Hr({}, d), {}, {
            isUpdate: u
          }), g = this.backend.create.bind(this.backend);
          if (g.length < 6)
            try {
              var h;
              g.length === 5 ? h = g(n, a, o, s, c) : h = g(n, a, o, s), h && typeof h.then == "function" ? h.then(function(y) {
                return f(null, y);
              }).catch(f) : f(null, h);
            } catch (y) {
              f(y);
            }
          else
            g(n, a, o, s, f, c);
        }
        !n || !n[0] || this.store.addResource(n[0], a, o, s);
      }
    }
  }]), t;
}(Se);
function Vr() {
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
      if (Z(e[1]) === "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), Z(e[2]) === "object" || Z(e[3]) === "object") {
        var r = e[3] || e[2];
        Object.keys(r).forEach(function(n) {
          t[n] = r[n];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: function(e, t, r, n) {
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
function Qr(i) {
  return typeof i.ns == "string" && (i.ns = [i.ns]), typeof i.fallbackLng == "string" && (i.fallbackLng = [i.fallbackLng]), typeof i.fallbackNS == "string" && (i.fallbackNS = [i.fallbackNS]), i.supportedLngs && i.supportedLngs.indexOf("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), i;
}
function Kr(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ie(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Kr(Object(t), !0).forEach(function(r) {
      pe(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Kr(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function Ea(i) {
  var e = Ca();
  return function() {
    var r = oe(i), n;
    if (e) {
      var a = oe(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else
      n = r.apply(this, arguments);
    return We(this, n);
  };
}
function Ca() {
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
function at() {
}
function _a(i) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(i));
  e.forEach(function(t) {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
}
var pt = function(i) {
  Ot(t, i);
  var e = Ea(t);
  function t() {
    var r, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (X(this, t), r = e.call(this), St && Se.call(Oe(r)), r.options = Qr(n), r.services = {}, r.logger = ae, r.modules = {
      external: []
    }, _a(Oe(r)), a && !r.isInitialized && !n.isClone) {
      if (!r.options.initImmediate)
        return r.init(n, a), We(r, Oe(r));
      setTimeout(function() {
        r.init(n, a);
      }, 0);
    }
    return r;
  }
  return ee(t, [{
    key: "init",
    value: function() {
      var n = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
      typeof a == "function" && (o = a, a = {}), !a.defaultNS && a.defaultNS !== !1 && a.ns && (typeof a.ns == "string" ? a.defaultNS = a.ns : a.ns.indexOf("translation") < 0 && (a.defaultNS = a.ns[0]));
      var s = Vr();
      this.options = ie(ie(ie({}, s), this.options), Qr(a)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = ie(ie({}, s.interpolation), this.options.interpolation)), a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator), a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
      function u(v) {
        return v ? typeof v == "function" ? new v() : v : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? ae.init(u(this.modules.logger), this.options) : ae.init(null, this.options);
        var d;
        this.modules.formatter ? d = this.modules.formatter : typeof Intl < "u" && (d = Oa);
        var f = new Nr(this.options);
        this.store = new fa(this.options.resources, this.options);
        var c = this.services;
        c.logger = ae, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new ma(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), d && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (c.formatter = u(d), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new ba(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new Ra(u(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(v) {
          for (var m = arguments.length, _ = new Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++)
            _[x - 1] = arguments[x];
          n.emit.apply(n, [v].concat(_));
        }), this.modules.languageDetector && (c.languageDetector = u(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = u(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Tr(this.services, this.options), this.translator.on("*", function(v) {
          for (var m = arguments.length, _ = new Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++)
            _[x - 1] = arguments[x];
          n.emit.apply(n, [v].concat(_));
        }), this.modules.external.forEach(function(v) {
          v.init && v.init(n);
        });
      }
      if (this.format = this.options.interpolation.format, o || (o = at), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var h = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      h.forEach(function(v) {
        n[v] = function() {
          var m;
          return (m = n.store)[v].apply(m, arguments);
        };
      });
      var y = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      y.forEach(function(v) {
        n[v] = function() {
          var m;
          return (m = n.store)[v].apply(m, arguments), n;
        };
      });
      var S = Me(), O = function() {
        var m = function(x, T) {
          n.isInitialized && !n.initializedStoreOnce && n.logger.warn("init: i18next is already initialized. You should call init just once!"), n.isInitialized = !0, n.options.isClone || n.logger.log("initialized", n.options), n.emit("initialized", n.options), S.resolve(T), o(x, T);
        };
        if (n.languages && n.options.compatibilityAPI !== "v1" && !n.isInitialized)
          return m(null, n.t.bind(n));
        n.changeLanguage(n.options.lng, m);
      };
      return this.options.resources || !this.options.initImmediate ? O() : setTimeout(O, 0), S;
    }
  }, {
    key: "loadResources",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : at, s = o, u = typeof n == "string" ? n : this.language;
      if (typeof n == "function" && (s = n), !this.options.resources || this.options.partialBundledLanguages) {
        if (u && u.toLowerCase() === "cimode")
          return s();
        var d = [], f = function(h) {
          if (h) {
            var y = a.services.languageUtils.toResolveHierarchy(h);
            y.forEach(function(S) {
              d.indexOf(S) < 0 && d.push(S);
            });
          }
        };
        if (u)
          f(u);
        else {
          var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          c.forEach(function(g) {
            return f(g);
          });
        }
        this.options.preload && this.options.preload.forEach(function(g) {
          return f(g);
        }), this.services.backendConnector.load(d, this.options.ns, function(g) {
          !g && !a.resolvedLanguage && a.language && a.setResolvedLanguage(a.language), s(g);
        });
      } else
        s(null);
    }
  }, {
    key: "reloadResources",
    value: function(n, a, o) {
      var s = Me();
      return n || (n = this.languages), a || (a = this.options.ns), o || (o = at), this.services.backendConnector.reload(n, a, function(u) {
        s.resolve(), o(u);
      }), s;
    }
  }, {
    key: "use",
    value: function(n) {
      if (!n)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!n.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      return n.type === "backend" && (this.modules.backend = n), (n.type === "logger" || n.log && n.warn && n.error) && (this.modules.logger = n), n.type === "languageDetector" && (this.modules.languageDetector = n), n.type === "i18nFormat" && (this.modules.i18nFormat = n), n.type === "postProcessor" && Pn.addPostProcessor(n), n.type === "formatter" && (this.modules.formatter = n), n.type === "3rdParty" && this.modules.external.push(n), this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function(n) {
      if (!(!n || !this.languages) && !(["cimode", "dev"].indexOf(n) > -1))
        for (var a = 0; a < this.languages.length; a++) {
          var o = this.languages[a];
          if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
            this.resolvedLanguage = o;
            break;
          }
        }
    }
  }, {
    key: "changeLanguage",
    value: function(n, a) {
      var o = this;
      this.isLanguageChangingTo = n;
      var s = Me();
      this.emit("languageChanging", n);
      var u = function(g) {
        o.language = g, o.languages = o.services.languageUtils.toResolveHierarchy(g), o.resolvedLanguage = void 0, o.setResolvedLanguage(g);
      }, d = function(g, h) {
        h ? (u(h), o.translator.changeLanguage(h), o.isLanguageChangingTo = void 0, o.emit("languageChanged", h), o.logger.log("languageChanged", h)) : o.isLanguageChangingTo = void 0, s.resolve(function() {
          return o.t.apply(o, arguments);
        }), a && a(g, function() {
          return o.t.apply(o, arguments);
        });
      }, f = function(g) {
        !n && !g && o.services.languageDetector && (g = []);
        var h = typeof g == "string" ? g : o.services.languageUtils.getBestMatchFromCodes(g);
        h && (o.language || u(h), o.translator.language || o.translator.changeLanguage(h), o.services.languageDetector && o.services.languageDetector.cacheUserLanguage && o.services.languageDetector.cacheUserLanguage(h)), o.loadResources(h, function(y) {
          d(y, h);
        });
      };
      return !n && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !n && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(n), s;
    }
  }, {
    key: "getFixedT",
    value: function(n, a, o) {
      var s = this, u = function d(f, c) {
        var g;
        if (Z(c) !== "object") {
          for (var h = arguments.length, y = new Array(h > 2 ? h - 2 : 0), S = 2; S < h; S++)
            y[S - 2] = arguments[S];
          g = s.options.overloadTranslationOptionHandler([f, c].concat(y));
        } else
          g = ie({}, c);
        g.lng = g.lng || d.lng, g.lngs = g.lngs || d.lngs, g.ns = g.ns || d.ns, g.keyPrefix = g.keyPrefix || o || d.keyPrefix;
        var O = s.options.keySeparator || ".", v;
        return g.keyPrefix && Array.isArray(f) ? v = f.map(function(m) {
          return "".concat(g.keyPrefix).concat(O).concat(m);
        }) : v = g.keyPrefix ? "".concat(g.keyPrefix).concat(O).concat(f) : f, s.t(v, g);
      };
      return typeof n == "string" ? u.lng = n : u.lngs = n, u.ns = a, u.keyPrefix = o, u;
    }
  }, {
    key: "t",
    value: function() {
      var n;
      return this.translator && (n = this.translator).translate.apply(n, arguments);
    }
  }, {
    key: "exists",
    value: function() {
      var n;
      return this.translator && (n = this.translator).exists.apply(n, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function(n) {
      this.options.defaultNS = n;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized)
        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
      if (!this.languages || !this.languages.length)
        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
      var s = o.lng || this.resolvedLanguage || this.languages[0], u = this.options ? this.options.fallbackLng : !1, d = this.languages[this.languages.length - 1];
      if (s.toLowerCase() === "cimode")
        return !0;
      var f = function(h, y) {
        var S = a.services.backendConnector.state["".concat(h, "|").concat(y)];
        return S === -1 || S === 2;
      };
      if (o.precheck) {
        var c = o.precheck(this, f);
        if (c !== void 0)
          return c;
      }
      return !!(this.hasResourceBundle(s, n) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(s, n) && (!u || f(d, n)));
    }
  }, {
    key: "loadNamespaces",
    value: function(n, a) {
      var o = this, s = Me();
      return this.options.ns ? (typeof n == "string" && (n = [n]), n.forEach(function(u) {
        o.options.ns.indexOf(u) < 0 && o.options.ns.push(u);
      }), this.loadResources(function(u) {
        s.resolve(), a && a(u);
      }), s) : (a && a(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(n, a) {
      var o = Me();
      typeof n == "string" && (n = [n]);
      var s = this.options.preload || [], u = n.filter(function(d) {
        return s.indexOf(d) < 0;
      });
      return u.length ? (this.options.preload = s.concat(u), this.loadResources(function(d) {
        o.resolve(), a && a(d);
      }), o) : (a && a(), Promise.resolve());
    }
  }, {
    key: "dir",
    value: function(n) {
      if (n || (n = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !n)
        return "rtl";
      var a = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], o = this.services && this.services.languageUtils || new Nr(Vr());
      return a.indexOf(o.getLanguagePartFromCode(n)) > -1 || n.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var n = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : at, s = ie(ie(ie({}, this.options), a), {
        isClone: !0
      }), u = new t(s);
      (a.debug !== void 0 || a.prefix !== void 0) && (u.logger = u.logger.clone(a));
      var d = ["store", "services", "language"];
      return d.forEach(function(f) {
        u[f] = n[f];
      }), u.services = ie({}, this.services), u.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u.translator = new Tr(u.services, u.options), u.translator.on("*", function(f) {
        for (var c = arguments.length, g = new Array(c > 1 ? c - 1 : 0), h = 1; h < c; h++)
          g[h - 1] = arguments[h];
        u.emit.apply(u, [f].concat(g));
      }), u.init(s, o), u.translator.options = u.options, u.translator.backendConnector.services.utils = {
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
}(Se);
pe(pt, "createInstance", function() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new pt(i, e);
});
var Q = pt.createInstance();
Q.createInstance = pt.createInstance;
Q.createInstance;
Q.dir;
Q.init;
Q.loadResources;
Q.reloadResources;
Q.use;
Q.changeLanguage;
Q.getFixedT;
Q.t;
Q.exists;
Q.setDefaultNamespace;
Q.hasLoadedNamespace;
Q.loadNamespaces;
Q.loadLanguages;
var xn = [], ka = xn.forEach, ja = xn.slice;
function La(i) {
  return ka.call(ja.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        i[t] === void 0 && (i[t] = e[t]);
  }), i;
}
var $r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Da = function(e, t, r) {
  var n = r || {};
  n.path = n.path || "/";
  var a = encodeURIComponent(t), o = "".concat(e, "=").concat(a);
  if (n.maxAge > 0) {
    var s = n.maxAge - 0;
    if (Number.isNaN(s))
      throw new Error("maxAge should be a Number");
    o += "; Max-Age=".concat(Math.floor(s));
  }
  if (n.domain) {
    if (!$r.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=".concat(n.domain);
  }
  if (n.path) {
    if (!$r.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=".concat(n.path);
  }
  if (n.expires) {
    if (typeof n.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += "; Expires=".concat(n.expires.toUTCString());
  }
  if (n.httpOnly && (o += "; HttpOnly"), n.secure && (o += "; Secure"), n.sameSite) {
    var u = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
    switch (u) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return o;
}, Wr = {
  create: function(e, t, r, n) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    r && (a.expires = /* @__PURE__ */ new Date(), a.expires.setTime(a.expires.getTime() + r * 60 * 1e3)), n && (a.domain = n), document.cookie = Da(e, encodeURIComponent(t), a);
  },
  read: function(e) {
    for (var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0; n < r.length; n++) {
      for (var a = r[n]; a.charAt(0) === " "; )
        a = a.substring(1, a.length);
      if (a.indexOf(t) === 0)
        return a.substring(t.length, a.length);
    }
    return null;
  },
  remove: function(e) {
    this.create(e, "", -1);
  }
}, Fa = {
  name: "cookie",
  lookup: function(e) {
    var t;
    if (e.lookupCookie && typeof document < "u") {
      var r = Wr.read(e.lookupCookie);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupCookie && typeof document < "u" && Wr.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
  }
}, Aa = {
  name: "querystring",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var r = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var n = r.substring(1), a = n.split("&"), o = 0; o < a.length; o++) {
        var s = a[o].indexOf("=");
        if (s > 0) {
          var u = a[o].substring(0, s);
          u === e.lookupQuerystring && (t = a[o].substring(s + 1));
        }
      }
    }
    return t;
  }
}, qe = null, Jr = function() {
  if (qe !== null)
    return qe;
  try {
    qe = window !== "undefined" && window.localStorage !== null;
    var e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    qe = !1;
  }
  return qe;
}, Ta = {
  name: "localStorage",
  lookup: function(e) {
    var t;
    if (e.lookupLocalStorage && Jr()) {
      var r = window.localStorage.getItem(e.lookupLocalStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupLocalStorage && Jr() && window.localStorage.setItem(t.lookupLocalStorage, e);
  }
}, Be = null, zr = function() {
  if (Be !== null)
    return Be;
  try {
    Be = window !== "undefined" && window.sessionStorage !== null;
    var e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    Be = !1;
  }
  return Be;
}, Na = {
  name: "sessionStorage",
  lookup: function(e) {
    var t;
    if (e.lookupSessionStorage && zr()) {
      var r = window.sessionStorage.getItem(e.lookupSessionStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupSessionStorage && zr() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
  }
}, Ia = {
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
}, Ua = {
  name: "htmlTag",
  lookup: function(e) {
    var t, r = e.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, Ma = {
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
}, qa = {
  name: "subdomain",
  lookup: function(e) {
    var t = typeof e.lookupFromSubdomainIndex == "number" ? e.lookupFromSubdomainIndex + 1 : 1, r = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (r)
      return r[t];
  }
};
function Ba() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"]
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
  };
}
var Rn = /* @__PURE__ */ function() {
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    X(this, i), this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  return ee(i, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = La(r, this.options || {}, Ba()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(Fa), this.addDetector(Aa), this.addDetector(Ta), this.addDetector(Na), this.addDetector(Ia), this.addDetector(Ua), this.addDetector(Ma), this.addDetector(qa);
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
      var n = [];
      return t.forEach(function(a) {
        if (r.detectors[a]) {
          var o = r.detectors[a].lookup(r.options);
          o && typeof o == "string" && (o = [o]), o && (n = n.concat(o));
        }
      }), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function(t, r) {
      var n = this;
      r || (r = this.options.caches), r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || r.forEach(function(a) {
        n.detectors[a] && n.detectors[a].cacheUserLanguage(t, n.options);
      }));
    }
  }]), i;
}();
Rn.type = "languageDetector";
function Nt(i) {
  "@babel/helpers - typeof";
  return Nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Nt(i);
}
var En = [], Ha = En.forEach, Va = En.slice;
function It(i) {
  return Ha.call(Va.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        i[t] === void 0 && (i[t] = e[t]);
  }), i;
}
function Cn() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : Nt(XMLHttpRequest)) === "object";
}
function Qa(i) {
  return !!i && typeof i.then == "function";
}
function Ka(i) {
  return Qa(i) ? i : Promise.resolve(i);
}
function $a(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ut = { exports: {} }, ot = { exports: {} }, Yr;
function Wa() {
  return Yr || (Yr = 1, function(i, e) {
    var t = typeof self < "u" ? self : lt, r = function() {
      function a() {
        this.fetch = !1, this.DOMException = t.DOMException;
      }
      return a.prototype = t, new a();
    }();
    (function(a) {
      (function(o) {
        var s = {
          searchParams: "URLSearchParams" in a,
          iterable: "Symbol" in a && "iterator" in Symbol,
          blob: "FileReader" in a && "Blob" in a && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in a,
          arrayBuffer: "ArrayBuffer" in a
        };
        function u(p) {
          return p && DataView.prototype.isPrototypeOf(p);
        }
        if (s.arrayBuffer)
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
          ], f = ArrayBuffer.isView || function(p) {
            return p && d.indexOf(Object.prototype.toString.call(p)) > -1;
          };
        function c(p) {
          if (typeof p != "string" && (p = String(p)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(p))
            throw new TypeError("Invalid character in header field name");
          return p.toLowerCase();
        }
        function g(p) {
          return typeof p != "string" && (p = String(p)), p;
        }
        function h(p) {
          var w = {
            next: function() {
              var R = p.shift();
              return { done: R === void 0, value: R };
            }
          };
          return s.iterable && (w[Symbol.iterator] = function() {
            return w;
          }), w;
        }
        function y(p) {
          this.map = {}, p instanceof y ? p.forEach(function(w, R) {
            this.append(R, w);
          }, this) : Array.isArray(p) ? p.forEach(function(w) {
            this.append(w[0], w[1]);
          }, this) : p && Object.getOwnPropertyNames(p).forEach(function(w) {
            this.append(w, p[w]);
          }, this);
        }
        y.prototype.append = function(p, w) {
          p = c(p), w = g(w);
          var R = this.map[p];
          this.map[p] = R ? R + ", " + w : w;
        }, y.prototype.delete = function(p) {
          delete this.map[c(p)];
        }, y.prototype.get = function(p) {
          return p = c(p), this.has(p) ? this.map[p] : null;
        }, y.prototype.has = function(p) {
          return this.map.hasOwnProperty(c(p));
        }, y.prototype.set = function(p, w) {
          this.map[c(p)] = g(w);
        }, y.prototype.forEach = function(p, w) {
          for (var R in this.map)
            this.map.hasOwnProperty(R) && p.call(w, this.map[R], R, this);
        }, y.prototype.keys = function() {
          var p = [];
          return this.forEach(function(w, R) {
            p.push(R);
          }), h(p);
        }, y.prototype.values = function() {
          var p = [];
          return this.forEach(function(w) {
            p.push(w);
          }), h(p);
        }, y.prototype.entries = function() {
          var p = [];
          return this.forEach(function(w, R) {
            p.push([R, w]);
          }), h(p);
        }, s.iterable && (y.prototype[Symbol.iterator] = y.prototype.entries);
        function S(p) {
          if (p.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          p.bodyUsed = !0;
        }
        function O(p) {
          return new Promise(function(w, R) {
            p.onload = function() {
              w(p.result);
            }, p.onerror = function() {
              R(p.error);
            };
          });
        }
        function v(p) {
          var w = new FileReader(), R = O(w);
          return w.readAsArrayBuffer(p), R;
        }
        function m(p) {
          var w = new FileReader(), R = O(w);
          return w.readAsText(p), R;
        }
        function _(p) {
          for (var w = new Uint8Array(p), R = new Array(w.length), I = 0; I < w.length; I++)
            R[I] = String.fromCharCode(w[I]);
          return R.join("");
        }
        function x(p) {
          if (p.slice)
            return p.slice(0);
          var w = new Uint8Array(p.byteLength);
          return w.set(new Uint8Array(p)), w.buffer;
        }
        function T() {
          return this.bodyUsed = !1, this._initBody = function(p) {
            this._bodyInit = p, p ? typeof p == "string" ? this._bodyText = p : s.blob && Blob.prototype.isPrototypeOf(p) ? this._bodyBlob = p : s.formData && FormData.prototype.isPrototypeOf(p) ? this._bodyFormData = p : s.searchParams && URLSearchParams.prototype.isPrototypeOf(p) ? this._bodyText = p.toString() : s.arrayBuffer && s.blob && u(p) ? (this._bodyArrayBuffer = x(p.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(p) || f(p)) ? this._bodyArrayBuffer = x(p) : this._bodyText = p = Object.prototype.toString.call(p) : this._bodyText = "", this.headers.get("content-type") || (typeof p == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : s.searchParams && URLSearchParams.prototype.isPrototypeOf(p) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, s.blob && (this.blob = function() {
            var p = S(this);
            if (p)
              return p;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? S(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v);
          }), this.text = function() {
            var p = S(this);
            if (p)
              return p;
            if (this._bodyBlob)
              return m(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(_(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, s.formData && (this.formData = function() {
            return this.text().then(M);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var k = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function C(p) {
          var w = p.toUpperCase();
          return k.indexOf(w) > -1 ? w : p;
        }
        function j(p, w) {
          w = w || {};
          var R = w.body;
          if (p instanceof j) {
            if (p.bodyUsed)
              throw new TypeError("Already read");
            this.url = p.url, this.credentials = p.credentials, w.headers || (this.headers = new y(p.headers)), this.method = p.method, this.mode = p.mode, this.signal = p.signal, !R && p._bodyInit != null && (R = p._bodyInit, p.bodyUsed = !0);
          } else
            this.url = String(p);
          if (this.credentials = w.credentials || this.credentials || "same-origin", (w.headers || !this.headers) && (this.headers = new y(w.headers)), this.method = C(w.method || this.method || "GET"), this.mode = w.mode || this.mode || null, this.signal = w.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && R)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(R);
        }
        j.prototype.clone = function() {
          return new j(this, { body: this._bodyInit });
        };
        function M(p) {
          var w = new FormData();
          return p.trim().split("&").forEach(function(R) {
            if (R) {
              var I = R.split("="), U = I.shift().replace(/\+/g, " "), D = I.join("=").replace(/\+/g, " ");
              w.append(decodeURIComponent(U), decodeURIComponent(D));
            }
          }), w;
        }
        function z(p) {
          var w = new y(), R = p.replace(/\r?\n[\t ]+/g, " ");
          return R.split(/\r?\n/).forEach(function(I) {
            var U = I.split(":"), D = U.shift().trim();
            if (D) {
              var ue = U.join(":").trim();
              w.append(D, ue);
            }
          }), w;
        }
        T.call(j.prototype);
        function H(p, w) {
          w || (w = {}), this.type = "default", this.status = w.status === void 0 ? 200 : w.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in w ? w.statusText : "OK", this.headers = new y(w.headers), this.url = w.url || "", this._initBody(p);
        }
        T.call(H.prototype), H.prototype.clone = function() {
          return new H(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new y(this.headers),
            url: this.url
          });
        }, H.error = function() {
          var p = new H(null, { status: 0, statusText: "" });
          return p.type = "error", p;
        };
        var ne = [301, 302, 303, 307, 308];
        H.redirect = function(p, w) {
          if (ne.indexOf(w) === -1)
            throw new RangeError("Invalid status code");
          return new H(null, { status: w, headers: { location: p } });
        }, o.DOMException = a.DOMException;
        try {
          new o.DOMException();
        } catch {
          o.DOMException = function(w, R) {
            this.message = w, this.name = R;
            var I = Error(w);
            this.stack = I.stack;
          }, o.DOMException.prototype = Object.create(Error.prototype), o.DOMException.prototype.constructor = o.DOMException;
        }
        function V(p, w) {
          return new Promise(function(R, I) {
            var U = new j(p, w);
            if (U.signal && U.signal.aborted)
              return I(new o.DOMException("Aborted", "AbortError"));
            var D = new XMLHttpRequest();
            function ue() {
              D.abort();
            }
            D.onload = function() {
              var Y = {
                status: D.status,
                statusText: D.statusText,
                headers: z(D.getAllResponseHeaders() || "")
              };
              Y.url = "responseURL" in D ? D.responseURL : Y.headers.get("X-Request-URL");
              var ge = "response" in D ? D.response : D.responseText;
              R(new H(ge, Y));
            }, D.onerror = function() {
              I(new TypeError("Network request failed"));
            }, D.ontimeout = function() {
              I(new TypeError("Network request failed"));
            }, D.onabort = function() {
              I(new o.DOMException("Aborted", "AbortError"));
            }, D.open(U.method, U.url, !0), U.credentials === "include" ? D.withCredentials = !0 : U.credentials === "omit" && (D.withCredentials = !1), "responseType" in D && s.blob && (D.responseType = "blob"), U.headers.forEach(function(Y, ge) {
              D.setRequestHeader(ge, Y);
            }), U.signal && (U.signal.addEventListener("abort", ue), D.onreadystatechange = function() {
              D.readyState === 4 && U.signal.removeEventListener("abort", ue);
            }), D.send(typeof U._bodyInit > "u" ? null : U._bodyInit);
          });
        }
        return V.polyfill = !0, a.fetch || (a.fetch = V, a.Headers = y, a.Request = j, a.Response = H), o.Headers = y, o.Request = j, o.Response = H, o.fetch = V, Object.defineProperty(o, "__esModule", { value: !0 }), o;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var n = r;
    e = n.fetch, e.default = n.fetch, e.fetch = n.fetch, e.Headers = n.Headers, e.Request = n.Request, e.Response = n.Response, i.exports = e;
  }(ot, ot.exports)), ot.exports;
}
(function(i, e) {
  var t;
  if (typeof fetch == "function" && (typeof lt < "u" && lt.fetch ? t = lt.fetch : typeof window < "u" && window.fetch ? t = window.fetch : t = fetch), typeof $a < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var r = t || Wa();
    r.default && (r = r.default), e.default = r, i.exports = e.default;
  }
})(Ut, Ut.exports);
var _n = Ut.exports;
const kn = /* @__PURE__ */ pi(_n), Gr = /* @__PURE__ */ hi({
  __proto__: null,
  default: kn
}, [_n]);
function gt(i) {
  "@babel/helpers - typeof";
  return gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gt(i);
}
var de;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? de = global.fetch : typeof window < "u" && window.fetch ? de = window.fetch : de = fetch);
var Ke;
Cn() && (typeof global < "u" && global.XMLHttpRequest ? Ke = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Ke = window.XMLHttpRequest));
var vt;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? vt = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (vt = window.ActiveXObject));
!de && Gr && !Ke && !vt && (de = kn || Gr);
typeof de != "function" && (de = void 0);
var Mt = function(e, t) {
  if (t && gt(t) === "object") {
    var r = "";
    for (var n in t)
      r += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t[n]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, Zr = function(e, t, r) {
  de(e, t).then(function(n) {
    if (!n.ok)
      return r(n.statusText || "Error", {
        status: n.status
      });
    n.text().then(function(a) {
      r(null, {
        status: n.status,
        data: a
      });
    }).catch(r);
  }).catch(r);
}, Xr = !1, Ja = function(e, t, r, n) {
  e.queryStringParams && (t = Mt(t, e.queryStringParams));
  var a = It({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  r && (a["Content-Type"] = "application/json");
  var o = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, s = It({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: a
  }, Xr ? {} : o);
  try {
    Zr(t, s, n);
  } catch (u) {
    if (!o || Object.keys(o).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return n(u);
    try {
      Object.keys(o).forEach(function(d) {
        delete s[d];
      }), Zr(t, s, n), Xr = !0;
    } catch (d) {
      n(d);
    }
  }
}, za = function(e, t, r, n) {
  r && gt(r) === "object" && (r = Mt("", r).slice(1)), e.queryStringParams && (t = Mt(t, e.queryStringParams));
  try {
    var a;
    Ke ? a = new Ke() : a = new vt("MSXML2.XMLHTTP.3.0"), a.open(r ? "POST" : "GET", t, 1), e.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.withCredentials = !!e.withCredentials, r && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.overrideMimeType && a.overrideMimeType("application/json");
    var o = e.customHeaders;
    if (o = typeof o == "function" ? o() : o, o)
      for (var s in o)
        a.setRequestHeader(s, o[s]);
    a.onreadystatechange = function() {
      a.readyState > 3 && n(a.status >= 400 ? a.statusText : null, {
        status: a.status,
        data: a.responseText
      });
    }, a.send(r);
  } catch (u) {
    console && console.log(u);
  }
}, Ya = function(e, t, r, n) {
  if (typeof r == "function" && (n = r, r = void 0), n = n || function() {
  }, de && t.indexOf("file:") !== 0)
    return Ja(e, t, r, n);
  if (Cn() || typeof ActiveXObject == "function")
    return za(e, t, r, n);
  n(new Error("No fetch and no xhr implementation found!"));
};
function $e(i) {
  "@babel/helpers - typeof";
  return $e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $e(i);
}
function Ga(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function en(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, jn(r.key), r);
  }
}
function Za(i, e, t) {
  return e && en(i.prototype, e), t && en(i, t), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function Xa(i, e, t) {
  return e = jn(e), e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = t, i;
}
function jn(i) {
  var e = eo(i, "string");
  return $e(e) === "symbol" ? e : String(e);
}
function eo(i, e) {
  if ($e(i) !== "object" || i === null)
    return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e || "default");
    if ($e(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
var to = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: function(t) {
      return JSON.parse(t);
    },
    stringify: JSON.stringify,
    parsePayload: function(t, r, n) {
      return Xa({}, r, n || "");
    },
    parseLoadPayload: function(t, r) {
    },
    request: Ya,
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
}, Ln = function() {
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Ga(this, i), this.services = e, this.options = t, this.allOptions = r, this.type = "backend", this.init(e, t, r);
  }
  return Za(i, [{
    key: "init",
    value: function(t) {
      var r = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = It(n, this.options || {}, to()), this.allOptions = a, this.services && this.options.reloadInterval && setInterval(function() {
        return r.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "readMulti",
    value: function(t, r, n) {
      this._readAny(t, t, r, r, n);
    }
  }, {
    key: "read",
    value: function(t, r, n) {
      this._readAny([t], t, [r], r, n);
    }
  }, {
    key: "_readAny",
    value: function(t, r, n, a, o) {
      var s = this, u = this.options.loadPath;
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(t, n)), u = Ka(u), u.then(function(d) {
        if (!d)
          return o(null, {});
        var f = s.services.interpolator.interpolate(d, {
          lng: t.join("+"),
          ns: n.join("+")
        });
        s.loadUrl(f, o, r, a);
      });
    }
  }, {
    key: "loadUrl",
    value: function(t, r, n, a) {
      var o = this, s = typeof n == "string" ? [n] : n, u = typeof a == "string" ? [a] : a, d = this.options.parseLoadPayload(s, u);
      this.options.request(this.options, t, d, function(f, c) {
        if (c && (c.status >= 500 && c.status < 600 || !c.status))
          return r("failed loading " + t + "; status code: " + c.status, !0);
        if (c && c.status >= 400 && c.status < 500)
          return r("failed loading " + t + "; status code: " + c.status, !1);
        if (!c && f && f.message && f.message.indexOf("Failed to fetch") > -1)
          return r("failed loading " + t + ": " + f.message, !0);
        if (f)
          return r(f, !1);
        var g, h;
        try {
          typeof c.data == "string" ? g = o.options.parse(c.data, n, a) : g = c.data;
        } catch {
          h = "failed parsing " + t + " to json";
        }
        if (h)
          return r(h, !1);
        r(null, g);
      });
    }
  }, {
    key: "create",
    value: function(t, r, n, a, o) {
      var s = this;
      if (this.options.addPath) {
        typeof t == "string" && (t = [t]);
        var u = this.options.parsePayload(r, n, a), d = 0, f = [], c = [];
        t.forEach(function(g) {
          var h = s.options.addPath;
          typeof s.options.addPath == "function" && (h = s.options.addPath(g, r));
          var y = s.services.interpolator.interpolate(h, {
            lng: g,
            ns: r
          });
          s.options.request(s.options, y, u, function(S, O) {
            d += 1, f.push(S), c.push(O), d === t.length && typeof o == "function" && o(f, c);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var t = this, r = this.services, n = r.backendConnector, a = r.languageUtils, o = r.logger, s = n.language;
      if (!(s && s.toLowerCase() === "cimode")) {
        var u = [], d = function(c) {
          var g = a.toResolveHierarchy(c);
          g.forEach(function(h) {
            u.indexOf(h) < 0 && u.push(h);
          });
        };
        d(s), this.allOptions.preload && this.allOptions.preload.forEach(function(f) {
          return d(f);
        }), u.forEach(function(f) {
          t.allOptions.ns.forEach(function(c) {
            n.read(f, c, "read", null, null, function(g, h) {
              g && o.warn("loading namespace ".concat(c, " for language ").concat(f, " failed"), g), !g && h && o.log("loaded namespace ".concat(c, " for language ").concat(f), h), n.loaded("".concat(f, "|").concat(c), g, h);
            });
          });
        });
      }
    }
  }]), i;
}();
Ln.type = "backend";
Q.use(Ln).use(Rn).use($i);
const ro = Q;
var Ve = {}, He = di;
if (process.env.NODE_ENV === "production")
  Ve.createRoot = He.createRoot, Ve.hydrateRoot = He.hydrateRoot;
else {
  var st = He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ve.createRoot = function(i, e) {
    st.usingClientEntryPoint = !0;
    try {
      return He.createRoot(i, e);
    } finally {
      st.usingClientEntryPoint = !1;
    }
  }, Ve.hydrateRoot = function(i, e, t) {
    st.usingClientEntryPoint = !0;
    try {
      return He.hydrateRoot(i, e, t);
    } finally {
      st.usingClientEntryPoint = !1;
    }
  };
}
var qt = function(i, e) {
  return qt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, qt(i, e);
};
function se(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  qt(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function Bt(i) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && i[e], r = 0;
  if (t)
    return t.call(i);
  if (i && typeof i.length == "number")
    return {
      next: function() {
        return i && r >= i.length && (i = void 0), { value: i && i[r++], done: !i };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Fe(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t)
    return i;
  var r = t.call(i), n, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = r.next()).done; )
      a.push(n.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      n && !n.done && (t = r.return) && t.call(r);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}
function Ae(i, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = e.length, a; r < n; r++)
      (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return i.concat(a || Array.prototype.slice.call(e));
}
function he(i) {
  return typeof i == "function";
}
function Dn(i) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, t = i(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var jt = Dn(function(i) {
  return function(t) {
    i(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, n) {
      return n + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function yt(i, e) {
  if (i) {
    var t = i.indexOf(e);
    0 <= t && i.splice(t, 1);
  }
}
var Je = function() {
  function i(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return i.prototype.unsubscribe = function() {
    var e, t, r, n, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var s = Bt(o), u = s.next(); !u.done; u = s.next()) {
              var d = u.value;
              d.remove(this);
            }
          } catch (S) {
            e = { error: S };
          } finally {
            try {
              u && !u.done && (t = s.return) && t.call(s);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          o.remove(this);
      var f = this.initialTeardown;
      if (he(f))
        try {
          f();
        } catch (S) {
          a = S instanceof jt ? S.errors : [S];
        }
      var c = this._finalizers;
      if (c) {
        this._finalizers = null;
        try {
          for (var g = Bt(c), h = g.next(); !h.done; h = g.next()) {
            var y = h.value;
            try {
              tn(y);
            } catch (S) {
              a = a ?? [], S instanceof jt ? a = Ae(Ae([], Fe(a)), Fe(S.errors)) : a.push(S);
            }
          }
        } catch (S) {
          r = { error: S };
        } finally {
          try {
            h && !h.done && (n = g.return) && n.call(g);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (a)
        throw new jt(a);
    }
  }, i.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        tn(e);
      else {
        if (e instanceof i) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
  }, i.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, i.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, i.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && yt(t, e);
  }, i.prototype.remove = function(e) {
    var t = this._finalizers;
    t && yt(t, e), e instanceof i && e._removeParent(this);
  }, i.EMPTY = function() {
    var e = new i();
    return e.closed = !0, e;
  }(), i;
}(), Fn = Je.EMPTY;
function An(i) {
  return i instanceof Je || i && "closed" in i && he(i.remove) && he(i.add) && he(i.unsubscribe);
}
function tn(i) {
  he(i) ? i() : i.unsubscribe();
}
var Tn = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Ht = {
  setTimeout: function(i, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var n = Ht.delegate;
    return n != null && n.setTimeout ? n.setTimeout.apply(n, Ae([i, e], Fe(t))) : setTimeout.apply(void 0, Ae([i, e], Fe(t)));
  },
  clearTimeout: function(i) {
    var e = Ht.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(i);
  },
  delegate: void 0
};
function no(i) {
  Ht.setTimeout(function() {
    throw i;
  });
}
function rn() {
}
function ct(i) {
  i();
}
var Nn = function(i) {
  se(e, i);
  function e(t) {
    var r = i.call(this) || this;
    return r.isStopped = !1, t ? (r.destination = t, An(t) && t.add(r)) : r.destination = so, r;
  }
  return e.create = function(t, r, n) {
    return new Vt(t, r, n);
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, i.prototype.unsubscribe.call(this), this.destination = null);
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
}(Je), io = Function.prototype.bind;
function Lt(i, e) {
  return io.call(i, e);
}
var ao = function() {
  function i(e) {
    this.partialObserver = e;
  }
  return i.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (r) {
        ut(r);
      }
  }, i.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (r) {
        ut(r);
      }
    else
      ut(e);
  }, i.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        ut(t);
      }
  }, i;
}(), Vt = function(i) {
  se(e, i);
  function e(t, r, n) {
    var a = i.call(this) || this, o;
    if (he(t) || !t)
      o = {
        next: t ?? void 0,
        error: r ?? void 0,
        complete: n ?? void 0
      };
    else {
      var s;
      a && Tn.useDeprecatedNextContext ? (s = Object.create(t), s.unsubscribe = function() {
        return a.unsubscribe();
      }, o = {
        next: t.next && Lt(t.next, s),
        error: t.error && Lt(t.error, s),
        complete: t.complete && Lt(t.complete, s)
      }) : o = t;
    }
    return a.destination = new ao(o), a;
  }
  return e;
}(Nn);
function ut(i) {
  no(i);
}
function oo(i) {
  throw i;
}
var so = {
  closed: !0,
  next: rn,
  error: oo,
  complete: rn
}, uo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function lo(i) {
  return i;
}
function co(i) {
  return i.length === 0 ? lo : i.length === 1 ? i[0] : function(t) {
    return i.reduce(function(r, n) {
      return n(r);
    }, t);
  };
}
var nn = function() {
  function i(e) {
    e && (this._subscribe = e);
  }
  return i.prototype.lift = function(e) {
    var t = new i();
    return t.source = this, t.operator = e, t;
  }, i.prototype.subscribe = function(e, t, r) {
    var n = this, a = ho(e) ? e : new Vt(e, t, r);
    return ct(function() {
      var o = n, s = o.operator, u = o.source;
      a.add(s ? s.call(a, u) : u ? n._subscribe(a) : n._trySubscribe(a));
    }), a;
  }, i.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, i.prototype.forEach = function(e, t) {
    var r = this;
    return t = an(t), new t(function(n, a) {
      var o = new Vt({
        next: function(s) {
          try {
            e(s);
          } catch (u) {
            a(u), o.unsubscribe();
          }
        },
        error: a,
        complete: n
      });
      r.subscribe(o);
    });
  }, i.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, i.prototype[uo] = function() {
    return this;
  }, i.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return co(e)(this);
  }, i.prototype.toPromise = function(e) {
    var t = this;
    return e = an(e), new e(function(r, n) {
      var a;
      t.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return n(o);
      }, function() {
        return r(a);
      });
    });
  }, i.create = function(e) {
    return new i(e);
  }, i;
}();
function an(i) {
  var e;
  return (e = i ?? Tn.Promise) !== null && e !== void 0 ? e : Promise;
}
function fo(i) {
  return i && he(i.next) && he(i.error) && he(i.complete);
}
function ho(i) {
  return i && i instanceof Nn || fo(i) && An(i);
}
var po = Dn(function(i) {
  return function() {
    i(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), In = function(i) {
  se(e, i);
  function e() {
    var t = i.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var r = new on(this, this);
    return r.operator = t, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new po();
  }, e.prototype.next = function(t) {
    var r = this;
    ct(function() {
      var n, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Bt(r.currentObservers), s = o.next(); !s.done; s = o.next()) {
            var u = s.value;
            u.next(t);
          }
        } catch (d) {
          n = { error: d };
        } finally {
          try {
            s && !s.done && (a = o.return) && a.call(o);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var r = this;
    ct(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = t;
        for (var n = r.observers; n.length; )
          n.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    ct(function() {
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
    return this._throwIfClosed(), i.prototype._trySubscribe.call(this, t);
  }, e.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, e.prototype._innerSubscribe = function(t) {
    var r = this, n = this, a = n.hasError, o = n.isStopped, s = n.observers;
    return a || o ? Fn : (this.currentObservers = null, s.push(t), new Je(function() {
      r.currentObservers = null, yt(s, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var r = this, n = r.hasError, a = r.thrownError, o = r.isStopped;
    n ? t.error(a) : o && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new nn();
    return t.source = this, t;
  }, e.create = function(t, r) {
    return new on(t, r);
  }, e;
}(nn), on = function(i) {
  se(e, i);
  function e(t, r) {
    var n = i.call(this) || this;
    return n.destination = t, n.source = r, n;
  }
  return e.prototype.next = function(t) {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || n === void 0 || n.call(r, t);
  }, e.prototype.error = function(t) {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || n === void 0 || n.call(r, t);
  }, e.prototype.complete = function() {
    var t, r;
    (r = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || r === void 0 || r.call(t);
  }, e.prototype._subscribe = function(t) {
    var r, n;
    return (n = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && n !== void 0 ? n : Fn;
  }, e;
}(In), Re = function(i) {
  se(e, i);
  function e(t) {
    var r = i.call(this) || this;
    return r._value = t, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(t) {
    var r = i.prototype._subscribe.call(this, t);
    return !r.closed && t.next(this._value), r;
  }, e.prototype.getValue = function() {
    var t = this, r = t.hasError, n = t.thrownError, a = t._value;
    if (r)
      throw n;
    return this._throwIfClosed(), a;
  }, e.prototype.next = function(t) {
    i.prototype.next.call(this, this._value = t);
  }, e;
}(In), Un = {
  now: function() {
    return (Un.delegate || Date).now();
  },
  delegate: void 0
}, go = function(i) {
  se(e, i);
  function e(t, r) {
    return i.call(this) || this;
  }
  return e.prototype.schedule = function(t, r) {
    return this;
  }, e;
}(Je), mt = {
  setInterval: function(i, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var n = mt.delegate;
    return n != null && n.setInterval ? n.setInterval.apply(n, Ae([i, e], Fe(t))) : setInterval.apply(void 0, Ae([i, e], Fe(t)));
  },
  clearInterval: function(i) {
    var e = mt.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(i);
  },
  delegate: void 0
}, vo = function(i) {
  se(e, i);
  function e(t, r) {
    var n = i.call(this, t, r) || this;
    return n.scheduler = t, n.work = r, n.pending = !1, n;
  }
  return e.prototype.schedule = function(t, r) {
    var n;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = t;
    var a = this.id, o = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(o, a, r)), this.pending = !0, this.delay = r, this.id = (n = this.id) !== null && n !== void 0 ? n : this.requestAsyncId(o, this.id, r), this;
  }, e.prototype.requestAsyncId = function(t, r, n) {
    return n === void 0 && (n = 0), mt.setInterval(t.flush.bind(t, this), n);
  }, e.prototype.recycleAsyncId = function(t, r, n) {
    if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === !1)
      return r;
    r != null && mt.clearInterval(r);
  }, e.prototype.execute = function(t, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var n = this._execute(t, r);
    if (n)
      return n;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(t, r) {
    var n = !1, a;
    try {
      this.work(t);
    } catch (o) {
      n = !0, a = o || new Error("Scheduled action threw falsy error");
    }
    if (n)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, r = t.id, n = t.scheduler, a = n.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, yt(a, this), r != null && (this.id = this.recycleAsyncId(n, r, null)), this.delay = null, i.prototype.unsubscribe.call(this);
    }
  }, e;
}(go), sn = function() {
  function i(e, t) {
    t === void 0 && (t = i.now), this.schedulerActionCtor = e, this.now = t;
  }
  return i.prototype.schedule = function(e, t, r) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
  }, i.now = Un.now, i;
}(), yo = function(i) {
  se(e, i);
  function e(t, r) {
    r === void 0 && (r = sn.now);
    var n = i.call(this, t, r) || this;
    return n.actions = [], n._active = !1, n;
  }
  return e.prototype.flush = function(t) {
    var r = this.actions;
    if (this._active) {
      r.push(t);
      return;
    }
    var n;
    this._active = !0;
    do
      if (n = t.execute(t.state, t.delay))
        break;
    while (t = r.shift());
    if (this._active = !1, n) {
      for (; t = r.shift(); )
        t.unsubscribe();
      throw n;
    }
  }, e;
}(sn), mo = function(i) {
  se(e, i);
  function e(t, r) {
    var n = i.call(this, t, r) || this;
    return n.scheduler = t, n.work = r, n;
  }
  return e.prototype.schedule = function(t, r) {
    return r === void 0 && (r = 0), r > 0 ? i.prototype.schedule.call(this, t, r) : (this.delay = r, this.state = t, this.scheduler.flush(this), this);
  }, e.prototype.execute = function(t, r) {
    return r > 0 || this.closed ? i.prototype.execute.call(this, t, r) : this._execute(t, r);
  }, e.prototype.requestAsyncId = function(t, r, n) {
    return n === void 0 && (n = 0), n != null && n > 0 || n == null && this.delay > 0 ? i.prototype.requestAsyncId.call(this, t, r, n) : (t.flush(this), 0);
  }, e;
}(vo), bo = function(i) {
  se(e, i);
  function e() {
    return i !== null && i.apply(this, arguments) || this;
  }
  return e;
}(yo), wo = new bo(mo);
class Oo {
  constructor({
    initState: e,
    callback: t = () => {
    }
  }) {
    Ne(this, "stream");
    Ne(this, "_state");
    this._state = e, this.stream = new Re(this._state), t();
  }
  set state(e) {
    this._state = e;
  }
  get state() {
    return this._state;
  }
  upDateState(e) {
    e !== void 0 && (this._state = e), this.stream.next(this._state);
  }
}
const So = ({
  children: i,
  onTapBackGround: e,
  onTapChildren: t,
  classChildren: r,
  classBackground: n,
  id: a
}) => /* @__PURE__ */ $.jsx("div", { id: a, className: n, onClick: e, children: /* @__PURE__ */ $.jsx(
  "div",
  {
    className: `${r ?? ""}`,
    onClick: t,
    style: {
      maxHeight: "100vh",
      height: "fit-content",
      width: "fit-content",
      justifyContent: "flex-start",
      alignItems: "center",
      overflowY: "auto",
      msOverflowY: "auto"
    },
    children: i
  }
) });
const Xt = Wt(
  void 0
), ko = ({
  children: i,
  appProps: e
}) => /* @__PURE__ */ $.jsx(Xt.Provider, { value: e, children: i }), Mn = new Re(!1), Qt = new Re(!1), Kt = new Re(null), $t = new Re(null), un = new Re(null);
new Re(null);
function Po(i) {
  Mn.next(i);
}
function xo(i) {
  $t.next(i);
}
function jo(i) {
  i === null ? (Kt.next(null), Qt.next(!1)) : (Kt.next(
    /* @__PURE__ */ $.jsx(
      "div",
      {
        style: {
          width: "fit-content",
          height: "fit-content",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          top: "16px"
        },
        children: i
      }
    )
  ), Qt.next(!0));
}
const Lo = ({
  children: i,
  appProps: e
}) => {
  var a;
  const t = dn(() => new Oo({
    initState: {
      isLoading: !1,
      modals: [],
      showMessage: !1,
      showModel: !1,
      showBottomSheet: !1
    }
  }), []), [r, n] = cn(t.state);
  return fn(() => {
    let o = 0;
    return t.stream.subscribe((s) => {
      n({ ...s });
    }), Mn.subscribe((s) => {
      t.state.isLoading = s, t.upDateState();
    }), Qt.subscribe((s) => {
      t.state.showMessage = s, t.upDateState();
    }), $t.subscribe((s) => {
      if (s === null) {
        if (o > 0) {
          o--;
          const u = document.getElementById(`rd-modals-${o}`);
          u.firstElementChild.className = "column animation-faded--out", setTimeout(() => {
            t.state.modals = t.state.modals.slice(
              0,
              o
            ), t.upDateState();
          }, 150);
        }
      } else
        wo.schedule(() => {
          t.state.modals = t.state.modals.slice(
            0,
            o
          );
          const u = o;
          t.state.modals.push(
            rt(
              /* @__PURE__ */ $.jsx(
                So,
                {
                  id: `rd-modals-${u}`,
                  classChildren: "animation-scale--up animation-faded--in",
                  classBackground: "rd-overlay-queue-modal",
                  onTapBackGround: () => {
                    var d;
                    (d = e.configs) != null && d.closeModalOnTapOutside && $t.next(null);
                  },
                  onTapChildren: (d) => {
                    d.stopPropagation();
                  },
                  children: s
                }
              ),
              document.body,
              `rd-modals-${u}`
            )
          ), t.upDateState(), o++;
        });
      o === 1 ? document.body.className = "bg-scrolling-element-when-modal-active" : o === 0 && (document.body.className = "");
    }), un.subscribe((s) => {
      setTimeout(s === null ? () => {
        t.state.showBottomSheet = !1, t.upDateState();
      } : () => {
        t.state.showBottomSheet = !0, t.upDateState();
      }, 80);
    }), window.addEventListener("popstate", () => {
      if (t.state.isLoading || o > 0) {
        Po(!1);
        for (let s = 0; s < o; s++)
          xo(null);
      }
    }), () => {
      t.stream.complete();
    };
  }, []), /* @__PURE__ */ $.jsx(Gi, { i18n: ro, children: /* @__PURE__ */ $.jsx(Mi, { children: /* @__PURE__ */ $.jsx(Ui, { children: /* @__PURE__ */ $.jsxs(Xt.Provider, { value: e, children: [
    r.showMessage && rt(Kt.value, document.body, "rd-message"),
    r.isLoading && rt(
      (a = e.configs) == null ? void 0 : a.loading,
      document.body,
      "rd-loader"
    ),
    r.modals.length > 0 && r.modals.map((o, s) => o),
    r.showBottomSheet && rt(
      un.value,
      document.body,
      "rd-bottom-sheet"
    ),
    i
  ] }) }) }) });
}, Do = () => hn(Xt);
function Fo(i, e, t) {
  const r = document.getElementById(`${e}`);
  return t && r && (t.minHeight && (r.style.minHeight = t.minHeight), t.minWidth && (r.style.minWidth = t.minWidth), t.maxHeight && (r.style.maxHeight = t.maxHeight), t.maxWidth && (r.style.maxWidth = t.maxWidth)), Ve.createRoot(
    document.getElementById(`${e}`),
    {
      identifierPrefix: `${i}`,
      onRecoverableError(a) {
        console.error(a);
      }
    }
  );
}
class er {
}
class Ao extends er {
}
class To extends er {
}
class No extends er {
}
class qn {
  constructor({
    code: e,
    message: t
  }) {
    Ne(this, "code");
    Ne(this, "message");
    this.code = e ?? -1, this.message = t ?? "";
  }
  copyWith({
    code: e,
    message: t
  }) {
    return new qn({
      code: e ?? this.code,
      message: t ?? this.message
    });
  }
}
const Io = ({
  text: i = "",
  highlight: e = "",
  classHighlight: t,
  classText: r
}) => {
  if (!e.trim())
    return /* @__PURE__ */ $.jsx("span", { children: i });
  const n = i.split("");
  return /* @__PURE__ */ $.jsx("span", { className: r, children: n.filter((a) => a).map((a, o) => e.replaceAll(" ", "").includes(a.toLowerCase()) && a !== "" ? /* @__PURE__ */ $.jsx("mark", { className: t, children: a }, o) : /* @__PURE__ */ $.jsx("span", { children: a }, o)) });
}, Ro = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfNDM2XzIwMjc2NSIgdHJhbnNmb3JtPSJzY2FsZSgwLjAxNTYyNSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF80MzZfMjAyNzY1IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUE0MGxFUVZSNFh1M2JRUTZFUUFoRVViai9vWHNPOFNkaDRYT3ZKQWkvcWtGM1p0NkU2NzEwKyt4dWlENlQ0MHVBQ3RBQ3FZbHpEMklBQ0ZLQmtvSGNnbVNRREpKQk1uZ0tJVDZBRHlnRjZEU1lmY0NMVHpnL3owZUdyQVNvZ0RiVDBnS3hCMk1CNXBraUJvQmdyRUVNd0lCakx4OWZBQWlDSUFoeWdta2tSZ1lqaFdNSGRpdHNMMkF2WUMrUUlIamR3emsrQm1BQUJtQkFXYzFrQ0YwYktSQUVRUkFFUVJBTUdhQUNiYUNVei9QNUJSaUt4aFFhaVYwN3VSamZZZ1FETUtEcEdBaEdDTVVDekQ0Q0JFRXcxaUFHWUlCUFpNSmgrZzgvUDhjS3BBSmZWNEVmTWVlL3NMdGFFRklBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L2RlZnM+Cjwvc3ZnPgo=", Uo = ({
  src: i,
  srcError: e = Ro,
  alt: t,
  className: r,
  style: n
}) => {
  const a = fi(null);
  return /* @__PURE__ */ $.jsx(
    "img",
    {
      style: n,
      ref: a,
      src: i,
      alt: t,
      className: r,
      onError: () => {
        a && a.current && (a.current.onerror = null, a.current.src = e);
      }
    }
  );
};
function Mo() {
  return hn(wn);
}
export {
  qn as ErrorModel,
  ko as RdApp,
  Lo as RdAppExtends,
  Io as RdHighlightedText,
  Uo as RdImage,
  No as RdManager,
  Ao as RdModule,
  So as RdOverlay,
  Ui as RdQueryClient,
  To as RdStorage,
  Mi as RdViewport,
  wn as RdViewportContext,
  Fo as buildRdRootElement,
  Po as rdLoading,
  jo as rdMessage,
  xo as rdModal,
  Do as useRdApp,
  Mo as useRdViewport
};
//# sourceMappingURL=rad-ts.js.map
