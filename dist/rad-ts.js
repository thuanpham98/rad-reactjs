var Ei = Object.defineProperty;
var Ci = (n, e, t) => e in n ? Ei(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var J = (n, e, t) => (Ci(n, typeof e != "symbol" ? e + "" : e, t), t);
import * as We from "react";
import Pn, { createContext as ir, useState as ar, useCallback as ki, useEffect as Ke, useContext as or, useRef as pt, useMemo as xn, createElement as _i } from "react";
import ji, { createPortal as at } from "react-dom";
function Li(n, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in n)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a && Object.defineProperty(n, i, a.get ? a : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ni(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var qt = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function Ti() {
  if (Er)
    return Me;
  Er = 1;
  var n = Pn, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, d) {
    var f, c = {}, h = null, p = null;
    d !== void 0 && (h = "" + d), u.key !== void 0 && (h = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (f in u)
      r.call(u, f) && !a.hasOwnProperty(f) && (c[f] = u[f]);
    if (s && s.defaultProps)
      for (f in u = s.defaultProps, u)
        c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: e, type: s, key: h, ref: p, props: c, _owner: i.current };
  }
  return Me.Fragment = t, Me.jsx = o, Me.jsxs = o, Me;
}
var qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function Fi() {
  return Cr || (Cr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Pn, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, O = "@@iterator";
    function S(l) {
      if (l === null || typeof l != "object")
        return null;
      var b = v && l[v] || l[O];
      return typeof b == "function" ? b : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(l) {
      {
        for (var b = arguments.length, P = new Array(b > 1 ? b - 1 : 0), _ = 1; _ < b; _++)
          P[_ - 1] = arguments[_];
        C("error", l, P);
      }
    }
    function C(l, b, P) {
      {
        var _ = y.ReactDebugCurrentFrame, A = _.getStackAddendum();
        A !== "" && (b += "%s", P = P.concat([A]));
        var I = P.map(function(F) {
          return String(F);
        });
        I.unshift("Warning: " + b), Function.prototype.apply.call(console[l], console, I);
      }
    }
    var x = !1, N = !1, j = !1, R = !1, E = !1, D;
    D = Symbol.for("react.module.reference");
    function U(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === a || E || l === i || l === d || l === f || R || l === p || x || N || j || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === c || l.$$typeof === o || l.$$typeof === s || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === D || l.getModuleId !== void 0));
    }
    function q(l, b, P) {
      var _ = l.displayName;
      if (_)
        return _;
      var A = b.displayName || b.name || "";
      return A !== "" ? P + "(" + A + ")" : P;
    }
    function ie(l) {
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
        case i:
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
            return ie(b) + ".Consumer";
          case o:
            var P = l;
            return ie(P._context) + ".Provider";
          case u:
            return q(l, l.render, "ForwardRef");
          case c:
            var _ = l.displayName || null;
            return _ !== null ? _ : V(l.type) || "Memo";
          case h: {
            var A = l, I = A._payload, F = A._init;
            try {
              return V(F(I));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, w = 0, k, M, B, T, ce, G, ve;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function xe() {
      {
        if (w === 0) {
          k = console.log, M = console.info, B = console.warn, T = console.error, ce = console.group, G = console.groupCollapsed, ve = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
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
    function Xe() {
      {
        if (w--, w === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, l, {
              value: k
            }),
            info: g({}, l, {
              value: M
            }),
            warn: g({}, l, {
              value: B
            }),
            error: g({}, l, {
              value: T
            }),
            group: g({}, l, {
              value: ce
            }),
            groupCollapsed: g({}, l, {
              value: G
            }),
            groupEnd: g({}, l, {
              value: ve
            })
          });
        }
        w < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = y.ReactCurrentDispatcher, ye;
    function me(l, b, P) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (A) {
            var _ = A.stack.trim().match(/\n( *(at )?)/);
            ye = _ && _[1] || "";
          }
        return `
` + ye + l;
      }
    }
    var _e = !1, be;
    {
      var we = typeof WeakMap == "function" ? WeakMap : Map;
      be = new we();
    }
    function je(l, b) {
      if (!l || _e)
        return "";
      {
        var P = be.get(l);
        if (P !== void 0)
          return P;
      }
      var _;
      _e = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = fe.current, fe.current = null, xe();
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
            } catch (de) {
              _ = de;
            }
            Reflect.construct(l, [], F);
          } else {
            try {
              F.call();
            } catch (de) {
              _ = de;
            }
            l.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            _ = de;
          }
          l();
        }
      } catch (de) {
        if (de && _ && typeof de.stack == "string") {
          for (var L = de.stack.split(`
`), z = _.stack.split(`
`), H = L.length - 1, Q = z.length - 1; H >= 1 && Q >= 0 && L[H] !== z[Q]; )
            Q--;
          for (; H >= 1 && Q >= 0; H--, Q--)
            if (L[H] !== z[Q]) {
              if (H !== 1 || Q !== 1)
                do
                  if (H--, Q--, Q < 0 || L[H] !== z[Q]) {
                    var X = `
` + L[H].replace(" at new ", " at ");
                    return l.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", l.displayName)), typeof l == "function" && be.set(l, X), X;
                  }
                while (H >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        _e = !1, fe.current = I, Xe(), Error.prepareStackTrace = A;
      }
      var Ne = l ? l.displayName || l.name : "", Rr = Ne ? me(Ne) : "";
      return typeof l == "function" && be.set(l, Rr), Rr;
    }
    function et(l, b, P) {
      return je(l, !1);
    }
    function tt(l) {
      var b = l.prototype;
      return !!(b && b.isReactComponent);
    }
    function rt(l, b, P) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return je(l, tt(l));
      if (typeof l == "string")
        return me(l);
      switch (l) {
        case d:
          return me("Suspense");
        case f:
          return me("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return et(l.render);
          case c:
            return rt(l.type, b, P);
          case h: {
            var _ = l, A = _._payload, I = _._init;
            try {
              return rt(I(A), b, P);
            } catch {
            }
          }
        }
      return "";
    }
    var nt = Object.prototype.hasOwnProperty, hr = {}, pr = y.ReactDebugCurrentFrame;
    function it(l) {
      if (l) {
        var b = l._owner, P = rt(l.type, l._source, b ? b.type : null);
        pr.setExtraStackFrame(P);
      } else
        pr.setExtraStackFrame(null);
    }
    function oi(l, b, P, _, A) {
      {
        var I = Function.call.bind(nt);
        for (var F in l)
          if (I(l, F)) {
            var L = void 0;
            try {
              if (typeof l[F] != "function") {
                var z = Error((_ || "React class") + ": " + P + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              L = l[F](b, F, _, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              L = H;
            }
            L && !(L instanceof Error) && (it(A), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", P, F, typeof L), it(null)), L instanceof Error && !(L.message in hr) && (hr[L.message] = !0, it(A), m("Failed %s type: %s", P, L.message), it(null));
          }
      }
    }
    var si = Array.isArray;
    function kt(l) {
      return si(l);
    }
    function ui(l) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, P = b && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return P;
      }
    }
    function li(l) {
      try {
        return gr(l), !1;
      } catch {
        return !0;
      }
    }
    function gr(l) {
      return "" + l;
    }
    function vr(l) {
      if (li(l))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ui(l)), gr(l);
    }
    var Ue = y.ReactCurrentOwner, ci = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yr, mr, _t;
    _t = {};
    function fi(l) {
      if (nt.call(l, "ref")) {
        var b = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function di(l) {
      if (nt.call(l, "key")) {
        var b = Object.getOwnPropertyDescriptor(l, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function hi(l, b) {
      if (typeof l.ref == "string" && Ue.current && b && Ue.current.stateNode !== b) {
        var P = V(Ue.current.type);
        _t[P] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Ue.current.type), l.ref), _t[P] = !0);
      }
    }
    function pi(l, b) {
      {
        var P = function() {
          yr || (yr = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function gi(l, b) {
      {
        var P = function() {
          mr || (mr = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var vi = function(l, b, P, _, A, I, F) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: l,
        key: b,
        ref: P,
        props: F,
        // Record the component responsible for creating this element.
        _owner: I
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
        value: _
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function yi(l, b, P, _, A) {
      {
        var I, F = {}, L = null, z = null;
        P !== void 0 && (vr(P), L = "" + P), di(b) && (vr(b.key), L = "" + b.key), fi(b) && (z = b.ref, hi(b, A));
        for (I in b)
          nt.call(b, I) && !ci.hasOwnProperty(I) && (F[I] = b[I]);
        if (l && l.defaultProps) {
          var H = l.defaultProps;
          for (I in H)
            F[I] === void 0 && (F[I] = H[I]);
        }
        if (L || z) {
          var Q = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          L && pi(F, Q), z && gi(F, Q);
        }
        return vi(l, L, z, A, _, Ue.current, F);
      }
    }
    var jt = y.ReactCurrentOwner, br = y.ReactDebugCurrentFrame;
    function Le(l) {
      if (l) {
        var b = l._owner, P = rt(l.type, l._source, b ? b.type : null);
        br.setExtraStackFrame(P);
      } else
        br.setExtraStackFrame(null);
    }
    var Lt;
    Lt = !1;
    function Nt(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function wr() {
      {
        if (jt.current) {
          var l = V(jt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function mi(l) {
      {
        if (l !== void 0) {
          var b = l.fileName.replace(/^.*[\\\/]/, ""), P = l.lineNumber;
          return `

Check your code at ` + b + ":" + P + ".";
        }
        return "";
      }
    }
    var Sr = {};
    function bi(l) {
      {
        var b = wr();
        if (!b) {
          var P = typeof l == "string" ? l : l.displayName || l.name;
          P && (b = `

Check the top-level render call using <` + P + ">.");
        }
        return b;
      }
    }
    function Or(l, b) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var P = bi(b);
        if (Sr[P])
          return;
        Sr[P] = !0;
        var _ = "";
        l && l._owner && l._owner !== jt.current && (_ = " It was passed a child from " + V(l._owner.type) + "."), Le(l), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, _), Le(null);
      }
    }
    function Pr(l, b) {
      {
        if (typeof l != "object")
          return;
        if (kt(l))
          for (var P = 0; P < l.length; P++) {
            var _ = l[P];
            Nt(_) && Or(_, b);
          }
        else if (Nt(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var A = S(l);
          if (typeof A == "function" && A !== l.entries)
            for (var I = A.call(l), F; !(F = I.next()).done; )
              Nt(F.value) && Or(F.value, b);
        }
      }
    }
    function wi(l) {
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
          var _ = V(b);
          oi(P, l.props, "prop", _, l);
        } else if (b.PropTypes !== void 0 && !Lt) {
          Lt = !0;
          var A = V(b);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Si(l) {
      {
        for (var b = Object.keys(l.props), P = 0; P < b.length; P++) {
          var _ = b[P];
          if (_ !== "children" && _ !== "key") {
            Le(l), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), Le(null);
            break;
          }
        }
        l.ref !== null && (Le(l), m("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    function xr(l, b, P, _, A, I) {
      {
        var F = U(l);
        if (!F) {
          var L = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = mi(A);
          z ? L += z : L += wr();
          var H;
          l === null ? H = "null" : kt(l) ? H = "array" : l !== void 0 && l.$$typeof === e ? (H = "<" + (V(l.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : H = typeof l, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, L);
        }
        var Q = yi(l, b, P, A, I);
        if (Q == null)
          return Q;
        if (F) {
          var X = b.children;
          if (X !== void 0)
            if (_)
              if (kt(X)) {
                for (var Ne = 0; Ne < X.length; Ne++)
                  Pr(X[Ne], l);
                Object.freeze && Object.freeze(X);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pr(X, l);
        }
        return l === r ? Si(Q) : wi(Q), Q;
      }
    }
    function Oi(l, b, P) {
      return xr(l, b, P, !0);
    }
    function Pi(l, b, P) {
      return xr(l, b, P, !1);
    }
    var xi = Pi, Ri = Oi;
    qe.Fragment = r, qe.jsx = xi, qe.jsxs = Ri;
  }()), qe;
}
process.env.NODE_ENV === "production" ? qt.exports = Ti() : qt.exports = Fi();
var K = qt.exports;
class Pt {
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
const sr = typeof window > "u" || "Deno" in window;
function ne() {
}
function Di(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function Ai(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function Ii(n, e) {
  return Math.max(n + (e || 0) - Date.now(), 0);
}
function ot(n, e, t) {
  return xt(n) ? typeof e == "function" ? {
    ...t,
    queryKey: n,
    queryFn: e
  } : {
    ...e,
    queryKey: n
  } : n;
}
function Se(n, e, t) {
  return xt(n) ? [{
    ...e,
    queryKey: n
  }, t] : [n || {}, e];
}
function kr(n, e) {
  const {
    type: t = "all",
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s
  } = n;
  if (xt(o)) {
    if (r) {
      if (e.queryHash !== ur(o, e.options))
        return !1;
    } else if (!De(e.queryKey, o))
      return !1;
  }
  if (t !== "all") {
    const u = e.isActive();
    if (t === "active" && !u || t === "inactive" && u)
      return !1;
  }
  return !(typeof s == "boolean" && e.isStale() !== s || typeof i < "u" && i !== e.state.fetchStatus || a && !a(e));
}
function _r(n, e) {
  const {
    exact: t,
    fetching: r,
    predicate: i,
    mutationKey: a
  } = n;
  if (xt(a)) {
    if (!e.options.mutationKey)
      return !1;
    if (t) {
      if (Ce(e.options.mutationKey) !== Ce(a))
        return !1;
    } else if (!De(e.options.mutationKey, a))
      return !1;
  }
  return !(typeof r == "boolean" && e.state.status === "loading" !== r || i && !i(e));
}
function ur(n, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Ce)(n);
}
function Ce(n) {
  return JSON.stringify(n, (e, t) => Bt(t) ? Object.keys(t).sort().reduce((r, i) => (r[i] = t[i], r), {}) : t);
}
function De(n, e) {
  return Rn(n, e);
}
function Rn(n, e) {
  return n === e ? !0 : typeof n != typeof e ? !1 : n && e && typeof n == "object" && typeof e == "object" ? !Object.keys(e).some((t) => !Rn(n[t], e[t])) : !1;
}
function En(n, e) {
  if (n === e)
    return n;
  const t = jr(n) && jr(e);
  if (t || Bt(n) && Bt(e)) {
    const r = t ? n.length : Object.keys(n).length, i = t ? e : Object.keys(e), a = i.length, o = t ? [] : {};
    let s = 0;
    for (let u = 0; u < a; u++) {
      const d = t ? u : i[u];
      o[d] = En(n[d], e[d]), o[d] === n[d] && s++;
    }
    return r === a && s === r ? n : o;
  }
  return e;
}
function jr(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Bt(n) {
  if (!Lr(n))
    return !1;
  const e = n.constructor;
  if (typeof e > "u")
    return !0;
  const t = e.prototype;
  return !(!Lr(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function Lr(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function xt(n) {
  return Array.isArray(n);
}
function Cn(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
function Nr(n) {
  Cn(0).then(n);
}
function Ui() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function Mi(n, e, t) {
  return t.isDataEqual != null && t.isDataEqual(n, e) ? n : typeof t.structuralSharing == "function" ? t.structuralSharing(n, e) : t.structuralSharing !== !1 ? En(n, e) : e;
}
class qi extends Pt {
  constructor() {
    super(), this.setup = (e) => {
      if (!sr && window.addEventListener) {
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
const Ht = new qi();
class Bi extends Pt {
  constructor() {
    super(), this.setup = (e) => {
      if (!sr && window.addEventListener) {
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
const gt = new Bi();
function Hi(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function lr(n) {
  return (n ?? "online") === "online" ? gt.isOnline() : !0;
}
class kn {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function Tt(n) {
  return n instanceof kn;
}
function _n(n) {
  let e = !1, t = 0, r = !1, i, a, o;
  const s = new Promise((S, y) => {
    a = S, o = y;
  }), u = (S) => {
    r || (p(new kn(S)), n.abort == null || n.abort());
  }, d = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, c = () => !Ht.isFocused() || n.networkMode !== "always" && !gt.isOnline(), h = (S) => {
    r || (r = !0, n.onSuccess == null || n.onSuccess(S), i == null || i(), a(S));
  }, p = (S) => {
    r || (r = !0, n.onError == null || n.onError(S), i == null || i(), o(S));
  }, v = () => new Promise((S) => {
    i = (y) => {
      const m = r || !c();
      return m && S(y), m;
    }, n.onPause == null || n.onPause();
  }).then(() => {
    i = void 0, r || n.onContinue == null || n.onContinue();
  }), O = () => {
    if (r)
      return;
    let S;
    try {
      S = n.fn();
    } catch (y) {
      S = Promise.reject(y);
    }
    Promise.resolve(S).then(h).catch((y) => {
      var m, C;
      if (r)
        return;
      const x = (m = n.retry) != null ? m : 3, N = (C = n.retryDelay) != null ? C : Hi, j = typeof N == "function" ? N(t, y) : N, R = x === !0 || typeof x == "number" && t < x || typeof x == "function" && x(t, y);
      if (e || !R) {
        p(y);
        return;
      }
      t++, n.onFail == null || n.onFail(t, y), Cn(j).then(() => {
        if (c())
          return v();
      }).then(() => {
        e ? p(y) : O();
      });
    });
  };
  return lr(n.networkMode) ? O() : v().then(O), {
    promise: s,
    cancel: u,
    continue: () => (i == null ? void 0 : i()) ? s : Promise.resolve(),
    cancelRetry: d,
    continueRetry: f
  };
}
const cr = console;
function Qi() {
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
      e--, e || s();
    }
    return c;
  }, a = (f) => {
    e ? n.push(f) : Nr(() => {
      t(f);
    });
  }, o = (f) => (...c) => {
    a(() => {
      f(...c);
    });
  }, s = () => {
    const f = n;
    n = [], f.length && Nr(() => {
      r(() => {
        f.forEach((c) => {
          t(c);
        });
      });
    });
  };
  return {
    batch: i,
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
const Y = Qi();
class jn {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Ai(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (sr ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class Vi extends jn {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || cr, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || $i(this.options), this.state = this.initialState, this.scheduleGc();
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
    const r = Mi(this.state.data, e, this.options);
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
    return (t = this.retryer) == null || t.cancel(e), r ? r.then(ne).catch(ne) : Promise.resolve();
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
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Ii(this.state.dataUpdatedAt, e);
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
    var r, i;
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
      const p = this.observers.find((v) => v.options.queryFn);
      p && this.setOptions(p.options);
    }
    Array.isArray(this.options.queryKey) || process.env.NODE_ENV !== "production" && this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
    const o = Ui(), s = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, u = (p) => {
      Object.defineProperty(p, "signal", {
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
    if (u(f), (r = this.options.behavior) == null || r.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) {
      var c;
      this.dispatch({
        type: "fetch",
        meta: (c = f.fetchOptions) == null ? void 0 : c.meta
      });
    }
    const h = (p) => {
      if (Tt(p) && p.silent || this.dispatch({
        type: "error",
        error: p
      }), !Tt(p)) {
        var v, O, S, y;
        (v = (O = this.cache.config).onError) == null || v.call(O, p, this), (S = (y = this.cache.config).onSettled) == null || S.call(y, this.state.data, p, this), process.env.NODE_ENV !== "production" && this.logger.error(p);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = _n({
      fn: f.fetchFn,
      abort: o == null ? void 0 : o.abort.bind(o),
      onSuccess: (p) => {
        var v, O, S, y;
        if (typeof p > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), h(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(p), (v = (O = this.cache.config).onSuccess) == null || v.call(O, p, this), (S = (y = this.cache.config).onSettled) == null || S.call(y, p, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
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
      var i, a;
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
            fetchStatus: lr(this.options.networkMode) ? "fetching" : "paused",
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
          return Tt(o) && o.revert && this.revertState ? {
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
    this.state = t(this.state), Y.batch(() => {
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
function $i(n) {
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
class Wi extends Pt {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, t, r) {
    var i;
    const a = t.queryKey, o = (i = t.queryHash) != null ? i : ur(a, t);
    let s = this.get(o);
    return s || (s = new Vi({
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
    Y.batch(() => {
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
    const [r] = Se(e, t);
    return typeof r.exact > "u" && (r.exact = !0), this.queries.find((i) => kr(r, i));
  }
  findAll(e, t) {
    const [r] = Se(e, t);
    return Object.keys(r).length > 0 ? this.queries.filter((i) => kr(r, i)) : this.queries;
  }
  notify(e) {
    Y.batch(() => {
      this.listeners.forEach(({
        listener: t
      }) => {
        t(e);
      });
    });
  }
  onFocus() {
    Y.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    Y.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class Ki extends jn {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || cr, this.observers = [], this.state = e.state || zi(), this.setOptions(e.options), this.scheduleGc();
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
      var R;
      return this.retryer = _n({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (E, D) => {
          this.dispatch({
            type: "failed",
            failureCount: E,
            error: D
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
        retry: (R = this.options.retry) != null ? R : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, t = this.state.status === "loading";
    try {
      var r, i, a, o, s, u, d, f;
      if (!t) {
        var c, h, p, v;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((c = (h = this.mutationCache.config).onMutate) == null ? void 0 : c.call(h, this.state.variables, this));
        const E = await ((p = (v = this.options).onMutate) == null ? void 0 : p.call(v, this.state.variables));
        E !== this.state.context && this.dispatch({
          type: "loading",
          context: E,
          variables: this.state.variables
        });
      }
      const R = await e();
      return await ((r = (i = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(i, R, this.state.variables, this.state.context, this)), await ((a = (o = this.options).onSuccess) == null ? void 0 : a.call(o, R, this.state.variables, this.state.context)), await ((s = (u = this.mutationCache.config).onSettled) == null ? void 0 : s.call(u, R, null, this.state.variables, this.state.context, this)), await ((d = (f = this.options).onSettled) == null ? void 0 : d.call(f, R, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: R
      }), R;
    } catch (R) {
      try {
        var O, S, y, m, C, x, N, j;
        throw await ((O = (S = this.mutationCache.config).onError) == null ? void 0 : O.call(S, R, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(R), await ((y = (m = this.options).onError) == null ? void 0 : y.call(m, R, this.state.variables, this.state.context)), await ((C = (x = this.mutationCache.config).onSettled) == null ? void 0 : C.call(x, void 0, R, this.state.variables, this.state.context, this)), await ((N = (j = this.options).onSettled) == null ? void 0 : N.call(j, void 0, R, this.state.variables, this.state.context)), R;
      } finally {
        this.dispatch({
          type: "error",
          error: R
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
            isPaused: !lr(this.options.networkMode),
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
    this.state = t(this.state), Y.batch(() => {
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
function zi() {
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
class Ji extends Pt {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, t, r) {
    const i = new Ki({
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
    Y.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((t) => _r(e, t));
  }
  findAll(e) {
    return this.mutations.filter((t) => _r(e, t));
  }
  notify(e) {
    Y.batch(() => {
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
      return Y.batch(() => t.reduce((r, i) => r.then(() => i.continue().catch(ne)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function Yi() {
  return {
    onFetch: (n) => {
      n.fetchFn = () => {
        var e, t, r, i, a, o;
        const s = (e = n.fetchOptions) == null || (t = e.meta) == null ? void 0 : t.refetchPage, u = (r = n.fetchOptions) == null || (i = r.meta) == null ? void 0 : i.fetchMore, d = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", c = (u == null ? void 0 : u.direction) === "backward", h = ((a = n.state.data) == null ? void 0 : a.pages) || [], p = ((o = n.state.data) == null ? void 0 : o.pageParams) || [];
        let v = p, O = !1;
        const S = (j) => {
          Object.defineProperty(j, "signal", {
            enumerable: !0,
            get: () => {
              var R;
              if ((R = n.signal) != null && R.aborted)
                O = !0;
              else {
                var E;
                (E = n.signal) == null || E.addEventListener("abort", () => {
                  O = !0;
                });
              }
              return n.signal;
            }
          });
        }, y = n.options.queryFn || (() => Promise.reject("Missing queryFn")), m = (j, R, E, D) => (v = D ? [R, ...v] : [...v, R], D ? [E, ...j] : [...j, E]), C = (j, R, E, D) => {
          if (O)
            return Promise.reject("Cancelled");
          if (typeof E > "u" && !R && j.length)
            return Promise.resolve(j);
          const U = {
            queryKey: n.queryKey,
            pageParam: E,
            meta: n.options.meta
          };
          S(U);
          const q = y(U);
          return Promise.resolve(q).then((V) => m(j, E, V, D));
        };
        let x;
        if (!h.length)
          x = C([]);
        else if (f) {
          const j = typeof d < "u", R = j ? d : Tr(n.options, h);
          x = C(h, j, R);
        } else if (c) {
          const j = typeof d < "u", R = j ? d : Gi(n.options, h);
          x = C(h, j, R, !0);
        } else {
          v = [];
          const j = typeof n.options.getNextPageParam > "u";
          x = (s && h[0] ? s(h[0], 0, h) : !0) ? C([], j, p[0]) : Promise.resolve(m([], p[0], h[0]));
          for (let E = 1; E < h.length; E++)
            x = x.then((D) => {
              if (s && h[E] ? s(h[E], E, h) : !0) {
                const q = j ? p[E] : Tr(n.options, D);
                return C(D, j, q);
              }
              return Promise.resolve(m(D, p[E], h[E]));
            });
        }
        return x.then((j) => ({
          pages: j,
          pageParams: v
        }));
      };
    }
  };
}
function Tr(n, e) {
  return n.getNextPageParam == null ? void 0 : n.getNextPageParam(e[e.length - 1], e);
}
function Gi(n, e) {
  return n.getPreviousPageParam == null ? void 0 : n.getPreviousPageParam(e[0], e);
}
class Zi {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new Wi(), this.mutationCache = e.mutationCache || new Ji(), this.logger = e.logger || cr, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Ht.subscribe(() => {
      Ht.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = gt.subscribe(() => {
      gt.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, t;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (t = this.unsubscribeOnline) == null || t.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, t) {
    const [r] = Se(e, t);
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
    const i = ot(e, t, r), a = this.getQueryData(i.queryKey);
    return a ? Promise.resolve(a) : this.fetchQuery(i);
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
    const i = this.queryCache.find(e), a = i == null ? void 0 : i.state.data, o = Di(t, a);
    if (typeof o > "u")
      return;
    const s = ot(e), u = this.defaultQueryOptions(s);
    return this.queryCache.build(this, u).setData(o, {
      ...r,
      manual: !0
    });
  }
  setQueriesData(e, t, r) {
    return Y.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, t, r)]));
  }
  getQueryState(e, t) {
    var r;
    return (r = this.queryCache.find(e, t)) == null ? void 0 : r.state;
  }
  removeQueries(e, t) {
    const [r] = Se(e, t), i = this.queryCache;
    Y.batch(() => {
      i.findAll(r).forEach((a) => {
        i.remove(a);
      });
    });
  }
  resetQueries(e, t, r) {
    const [i, a] = Se(e, t, r), o = this.queryCache, s = {
      type: "active",
      ...i
    };
    return Y.batch(() => (o.findAll(i).forEach((u) => {
      u.reset();
    }), this.refetchQueries(s, a)));
  }
  cancelQueries(e, t, r) {
    const [i, a = {}] = Se(e, t, r);
    typeof a.revert > "u" && (a.revert = !0);
    const o = Y.batch(() => this.queryCache.findAll(i).map((s) => s.cancel(a)));
    return Promise.all(o).then(ne).catch(ne);
  }
  invalidateQueries(e, t, r) {
    const [i, a] = Se(e, t, r);
    return Y.batch(() => {
      var o, s;
      if (this.queryCache.findAll(i).forEach((d) => {
        d.invalidate();
      }), i.refetchType === "none")
        return Promise.resolve();
      const u = {
        ...i,
        type: (o = (s = i.refetchType) != null ? s : i.type) != null ? o : "active"
      };
      return this.refetchQueries(u, a);
    });
  }
  refetchQueries(e, t, r) {
    const [i, a] = Se(e, t, r), o = Y.batch(() => this.queryCache.findAll(i).filter((u) => !u.isDisabled()).map((u) => {
      var d;
      return u.fetch(void 0, {
        ...a,
        cancelRefetch: (d = a == null ? void 0 : a.cancelRefetch) != null ? d : !0,
        meta: {
          refetchPage: i.refetchPage
        }
      });
    }));
    let s = Promise.all(o).then(ne);
    return a != null && a.throwOnError || (s = s.catch(ne)), s;
  }
  fetchQuery(e, t, r) {
    const i = ot(e, t, r), a = this.defaultQueryOptions(i);
    typeof a.retry > "u" && (a.retry = !1);
    const o = this.queryCache.build(this, a);
    return o.isStaleByTime(a.staleTime) ? o.fetch(a) : Promise.resolve(o.state.data);
  }
  prefetchQuery(e, t, r) {
    return this.fetchQuery(e, t, r).then(ne).catch(ne);
  }
  fetchInfiniteQuery(e, t, r) {
    const i = ot(e, t, r);
    return i.behavior = Yi(), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(e, t, r) {
    return this.fetchInfiniteQuery(e, t, r).then(ne).catch(ne);
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
    const r = this.queryDefaults.find((i) => Ce(e) === Ce(i.queryKey));
    r ? r.defaultOptions = t : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const t = this.queryDefaults.find((r) => De(e, r.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((i) => De(e, i.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), t == null ? void 0 : t.defaultOptions;
  }
  setMutationDefaults(e, t) {
    const r = this.mutationDefaults.find((i) => Ce(e) === Ce(i.mutationKey));
    r ? r.defaultOptions = t : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const t = this.mutationDefaults.find((r) => De(e, r.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((i) => De(e, i.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), t == null ? void 0 : t.defaultOptions;
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
    return !t.queryHash && t.queryKey && (t.queryHash = ur(t.queryKey, t)), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.useErrorBoundary > "u" && (t.useErrorBoundary = !!t.suspense), t;
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
const Fr = /* @__PURE__ */ We.createContext(void 0), Xi = /* @__PURE__ */ We.createContext(!1);
function ea(n, e) {
  return n || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Fr), window.ReactQueryClientContext) : Fr);
}
const ta = ({
  client: n,
  children: e,
  context: t,
  contextSharing: r = !1
}) => {
  We.useEffect(() => (n.mount(), () => {
    n.unmount();
  }), [n]), process.env.NODE_ENV !== "production" && r && n.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const i = ea(t, r);
  return /* @__PURE__ */ We.createElement(Xi.Provider, {
    value: !t && r
  }, /* @__PURE__ */ We.createElement(i.Provider, {
    value: n
  }, e));
}, ra = ({ children: n, queryClient: e }) => /* @__PURE__ */ K.jsx(ta, { client: e, children: n }), Ln = ir({
  height: window.innerHeight,
  width: window.innerWidth
}), na = ({
  children: n
}) => {
  const [e, t] = ar({
    height: window.innerHeight,
    width: window.innerWidth
  }), r = ki(
    () => t({
      height: window.innerHeight,
      width: window.innerWidth
    }),
    [e]
  );
  return Ke(() => (r(), window.addEventListener("resize", r), document.addEventListener(
    "touchstart",
    (i) => {
      i.touches.length > 1 && i.preventDefault();
    },
    {
      passive: !1
    }
  ), () => {
    window.removeEventListener("resize", r), window.removeEventListener("touchstart", () => {
      console.log("done touch start");
    });
  }), []), /* @__PURE__ */ K.jsx(Ln.Provider, { value: e, children: n });
};
function Z(n) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Z(n);
}
function ia(n, e) {
  if (Z(n) !== "object" || n === null)
    return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (Z(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Nn(n) {
  var e = ia(n, "string");
  return Z(e) === "symbol" ? e : String(e);
}
function ue(n, e, t) {
  return e = Nn(e), e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function aa() {
  if (console && console.warn) {
    for (var n, e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    typeof t[0] == "string" && (t[0] = "react-i18next:: ".concat(t[0])), (n = console).warn.apply(n, t);
  }
}
var Dr = {};
function Qt() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Dr[e[0]] || (typeof e[0] == "string" && (Dr[e[0]] = /* @__PURE__ */ new Date()), aa.apply(void 0, e));
}
var Tn = function(e, t) {
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
function Ar(n, e, t) {
  n.loadNamespaces(e, Tn(n, t));
}
function Ir(n, e, t, r) {
  typeof t == "string" && (t = [t]), t.forEach(function(i) {
    n.options.ns.indexOf(i) < 0 && n.options.ns.push(i);
  }), n.loadLanguages(e, Tn(n, r));
}
function oa(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = e.languages[0], i = e.options ? e.options.fallbackLng : !1, a = e.languages[e.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  var o = function(u, d) {
    var f = e.services.backendConnector.state["".concat(u, "|").concat(d)];
    return f === -1 || f === 2;
  };
  return t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !o(e.isLanguageChangingTo, n) ? !1 : !!(e.hasResourceBundle(r, n) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || o(r, n) && (!i || o(a, n)));
}
function sa(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!e.languages || !e.languages.length)
    return Qt("i18n.languages were undefined or empty", e.languages), !0;
  var r = e.options.ignoreJSONStructure !== void 0;
  return r ? e.hasLoadedNamespace(n, {
    lng: t.lng,
    precheck: function(a, o) {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !o(a.isLanguageChangingTo, n))
        return !1;
    }
  }) : oa(n, e, t);
}
var ua = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, la = {
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
}, ca = function(e) {
  return la[e];
}, fa = function(e) {
  return e.replace(ua, ca);
};
function Ur(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Mr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ur(Object(t), !0).forEach(function(r) {
      ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Ur(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
var Vt = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: fa
};
function da() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Vt = Mr(Mr({}, Vt), n);
}
function ha() {
  return Vt;
}
var Fn;
function pa(n) {
  Fn = n;
}
function ga() {
  return Fn;
}
function ee(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qr(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Nn(r.key), r);
  }
}
function te(n, e, t) {
  return e && qr(n.prototype, e), t && qr(n, t), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
var va = {
  type: "3rdParty",
  init: function(e) {
    da(e.options.react), pa(e);
  }
}, Dn = ir(), ya = function() {
  function n() {
    ee(this, n), this.usedNamespaces = {};
  }
  return te(n, [{
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
function An(n) {
  if (Array.isArray(n))
    return n;
}
function ma(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r, i, a, o, s = [], u = !0, d = !1;
    try {
      if (a = (t = t.call(n)).next, e === 0) {
        if (Object(t) !== t)
          return;
        u = !1;
      } else
        for (; !(u = (r = a.call(t)).done) && (s.push(r.value), s.length !== e); u = !0)
          ;
    } catch (f) {
      d = !0, i = f;
    } finally {
      try {
        if (!u && t.return != null && (o = t.return(), Object(o) !== o))
          return;
      } finally {
        if (d)
          throw i;
      }
    }
    return s;
  }
}
function Br(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function In(n, e) {
  if (n) {
    if (typeof n == "string")
      return Br(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Br(n, e);
  }
}
function Un() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ba(n, e) {
  return An(n) || ma(n, e) || In(n, e) || Un();
}
function Hr(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ft(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Hr(Object(t), !0).forEach(function(r) {
      ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Hr(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
var wa = function(e, t) {
  var r = pt();
  return Ke(function() {
    r.current = t ? r.current : e;
  }, [e, t]), r.current;
};
function Sa(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.i18n, r = or(Dn) || {}, i = r.i18n, a = r.defaultNS, o = t || i || ga();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new ya()), !o) {
    Qt("You will need to pass in an i18next instance by using initReactI18next");
    var s = function(D, U) {
      return typeof U == "string" ? U : U && Z(U) === "object" && typeof U.defaultValue == "string" ? U.defaultValue : Array.isArray(D) ? D[D.length - 1] : D;
    }, u = [s, {}, !1];
    return u.t = s, u.i18n = {}, u.ready = !1, u;
  }
  o.options.react && o.options.react.wait !== void 0 && Qt("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  var d = Ft(Ft(Ft({}, ha()), o.options.react), e), f = d.useSuspense, c = d.keyPrefix, h = n || a || o.options && o.options.defaultNS;
  h = typeof h == "string" ? [h] : h || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(h);
  var p = (o.isInitialized || o.initializedStoreOnce) && h.every(function(E) {
    return sa(E, o, d);
  });
  function v() {
    return o.getFixedT(e.lng || null, d.nsMode === "fallback" ? h : h[0], c);
  }
  var O = ar(v), S = ba(O, 2), y = S[0], m = S[1], C = h.join();
  e.lng && (C = "".concat(e.lng).concat(C));
  var x = wa(C), N = pt(!0);
  Ke(function() {
    var E = d.bindI18n, D = d.bindI18nStore;
    N.current = !0, !p && !f && (e.lng ? Ir(o, e.lng, h, function() {
      N.current && m(v);
    }) : Ar(o, h, function() {
      N.current && m(v);
    })), p && x && x !== C && N.current && m(v);
    function U() {
      N.current && m(v);
    }
    return E && o && o.on(E, U), D && o && o.store.on(D, U), function() {
      N.current = !1, E && o && E.split(" ").forEach(function(q) {
        return o.off(q, U);
      }), D && o && D.split(" ").forEach(function(q) {
        return o.store.off(q, U);
      });
    };
  }, [o, C]);
  var j = pt(!0);
  Ke(function() {
    N.current && !j.current && m(v), j.current = !1;
  }, [o, c]);
  var R = [y, o, p];
  if (R.t = y, R.i18n = o, R.ready = p, p || !p && !f)
    return R;
  throw new Promise(function(E) {
    e.lng ? Ir(o, e.lng, h, function() {
      return E();
    }) : Ar(o, h, function() {
      return E();
    });
  });
}
function Oa(n) {
  var e = n.i18n, t = n.defaultNS, r = n.children, i = xn(function() {
    return {
      i18n: e,
      defaultNS: t
    };
  }, [e, t]);
  return _i(Dn.Provider, {
    value: i
  }, r);
}
function Oe(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function $t(n, e) {
  return $t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, $t(n, e);
}
function Rt(n, e) {
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
  }), e && $t(n, e);
}
function Ye(n, e) {
  if (e && (Z(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oe(n);
}
function se(n) {
  return se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, se(n);
}
function Pa(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function xa(n) {
  return An(n) || Pa(n) || In(n) || Un();
}
function Qr(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Vr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Qr(Object(t), !0).forEach(function(r) {
      ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Qr(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
var Ra = {
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
}, Ea = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ee(this, n), this.init(e, t);
  }
  return te(n, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = t || Ra, this.options = r, this.debug = r.debug;
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
    value: function(t, r, i, a) {
      return a && !this.debug ? null : (typeof t[0] == "string" && (t[0] = "".concat(i).concat(this.prefix, " ").concat(t[0])), this.logger[r](t));
    }
  }, {
    key: "create",
    value: function(t) {
      return new n(this.logger, Vr(Vr({}, {
        prefix: "".concat(this.prefix, ":").concat(t, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(t) {
      return t = t || this.options, t.prefix = t.prefix || this.prefix, new n(this.logger, t);
    }
  }]), n;
}(), oe = new Ea(), Pe = function() {
  function n() {
    ee(this, n), this.observers = {};
  }
  return te(n, [{
    key: "on",
    value: function(t, r) {
      var i = this;
      return t.split(" ").forEach(function(a) {
        i.observers[a] = i.observers[a] || [], i.observers[a].push(r);
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
      for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
        i[a - 1] = arguments[a];
      if (this.observers[t]) {
        var o = [].concat(this.observers[t]);
        o.forEach(function(u) {
          u.apply(void 0, i);
        });
      }
      if (this.observers["*"]) {
        var s = [].concat(this.observers["*"]);
        s.forEach(function(u) {
          u.apply(u, [t].concat(i));
        });
      }
    }
  }]), n;
}();
function Be() {
  var n, e, t = new Promise(function(r, i) {
    n = r, e = i;
  });
  return t.resolve = n, t.reject = e, t;
}
function $r(n) {
  return n == null ? "" : "" + n;
}
function Ca(n, e, t) {
  n.forEach(function(r) {
    e[r] && (t[r] = e[r]);
  });
}
function fr(n, e, t) {
  function r(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function i() {
    return !n || typeof n == "string";
  }
  for (var a = typeof e != "string" ? [].concat(e) : e.split("."); a.length > 1; ) {
    if (i())
      return {};
    var o = r(a.shift());
    !n[o] && t && (n[o] = new t()), Object.prototype.hasOwnProperty.call(n, o) ? n = n[o] : n = {};
  }
  return i() ? {} : {
    obj: n,
    k: r(a.shift())
  };
}
function Wr(n, e, t) {
  var r = fr(n, e, Object), i = r.obj, a = r.k;
  i[a] = t;
}
function ka(n, e, t, r) {
  var i = fr(n, e, Object), a = i.obj, o = i.k;
  a[o] = a[o] || [], r && (a[o] = a[o].concat(t)), r || a[o].push(t);
}
function vt(n, e) {
  var t = fr(n, e), r = t.obj, i = t.k;
  if (r)
    return r[i];
}
function _a(n, e, t) {
  var r = vt(n, t);
  return r !== void 0 ? r : vt(e, t);
}
function Mn(n, e, t) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in n ? typeof n[r] == "string" || n[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (n[r] = e[r]) : Mn(n[r], e[r], t) : n[r] = e[r]);
  return n;
}
function Te(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var ja = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function La(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, function(e) {
    return ja[e];
  }) : n;
}
var Et = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, Na = [" ", ",", "?", "!", ";"];
function Ta(n, e, t) {
  e = e || "", t = t || "";
  var r = Na.filter(function(s) {
    return e.indexOf(s) < 0 && t.indexOf(s) < 0;
  });
  if (r.length === 0)
    return !0;
  var i = new RegExp("(".concat(r.map(function(s) {
    return s === "?" ? "\\?" : s;
  }).join("|"), ")")), a = !i.test(n);
  if (!a) {
    var o = n.indexOf(t);
    o > 0 && !i.test(n.substring(0, o)) && (a = !0);
  }
  return a;
}
function yt(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (n) {
    if (n[e])
      return n[e];
    for (var r = e.split(t), i = n, a = 0; a < r.length; ++a) {
      if (!i || typeof i[r[a]] == "string" && a + 1 < r.length)
        return;
      if (i[r[a]] === void 0) {
        for (var o = 2, s = r.slice(a, a + o).join(t), u = i[s]; u === void 0 && r.length > a + o; )
          o++, s = r.slice(a, a + o).join(t), u = i[s];
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
        return d ? yt(u, d, t) : void 0;
      }
      i = i[r[a]];
    }
    return i;
  }
}
function Kr(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function st(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Kr(Object(t), !0).forEach(function(r) {
      ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Kr(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Fa(n) {
  var e = Da();
  return function() {
    var r = se(n), i;
    if (e) {
      var a = se(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return Ye(this, i);
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
var Aa = function(n) {
  Rt(t, n);
  var e = Fa(t);
  function t(r) {
    var i, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return ee(this, t), i = e.call(this), Et && Pe.call(Oe(i)), i.data = r || {}, i.options = a, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
  }
  return te(t, [{
    key: "addNamespaces",
    value: function(i) {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }
  }, {
    key: "removeNamespaces",
    value: function(i) {
      var a = this.options.ns.indexOf(i);
      a > -1 && this.options.ns.splice(a, 1);
    }
  }, {
    key: "getResource",
    value: function(i, a, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, d = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure, f = [i, a];
      o && typeof o != "string" && (f = f.concat(o)), o && typeof o == "string" && (f = f.concat(u ? o.split(u) : o)), i.indexOf(".") > -1 && (f = i.split("."));
      var c = vt(this.data, f);
      return c || !d || typeof o != "string" ? c : yt(this.data && this.data[i] && this.data[i][a], o, u);
    }
  }, {
    key: "addResource",
    value: function(i, a, o, s) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, d = this.options.keySeparator;
      d === void 0 && (d = ".");
      var f = [i, a];
      o && (f = f.concat(d ? o.split(d) : o)), i.indexOf(".") > -1 && (f = i.split("."), s = a, a = f[1]), this.addNamespaces(a), Wr(this.data, f, s), u.silent || this.emit("added", i, a, o, s);
    }
  }, {
    key: "addResources",
    value: function(i, a, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: !1
      };
      for (var u in o)
        (typeof o[u] == "string" || Object.prototype.toString.apply(o[u]) === "[object Array]") && this.addResource(i, a, u, o[u], {
          silent: !0
        });
      s.silent || this.emit("added", i, a, o);
    }
  }, {
    key: "addResourceBundle",
    value: function(i, a, o, s, u) {
      var d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: !1
      }, f = [i, a];
      i.indexOf(".") > -1 && (f = i.split("."), s = o, o = a, a = f[1]), this.addNamespaces(a);
      var c = vt(this.data, f) || {};
      s ? Mn(c, o, u) : c = st(st({}, c), o), Wr(this.data, f, c), d.silent || this.emit("added", i, a, o);
    }
  }, {
    key: "removeResourceBundle",
    value: function(i, a) {
      this.hasResourceBundle(i, a) && delete this.data[i][a], this.removeNamespaces(a), this.emit("removed", i, a);
    }
  }, {
    key: "hasResourceBundle",
    value: function(i, a) {
      return this.getResource(i, a) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function(i, a) {
      return a || (a = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? st(st({}, {}), this.getResource(i, a)) : this.getResource(i, a);
    }
  }, {
    key: "getDataByLanguage",
    value: function(i) {
      return this.data[i];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function(i) {
      var a = this.getDataByLanguage(i), o = a && Object.keys(a) || [];
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
}(Pe), qn = {
  processors: {},
  addPostProcessor: function(e) {
    this.processors[e.name] = e;
  },
  handle: function(e, t, r, i, a) {
    var o = this;
    return e.forEach(function(s) {
      o.processors[s] && (t = o.processors[s].process(t, r, i, a));
    }), t;
  }
};
function zr(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function W(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zr(Object(t), !0).forEach(function(r) {
      ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : zr(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ia(n) {
  var e = Ua();
  return function() {
    var r = se(n), i;
    if (e) {
      var a = se(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return Ye(this, i);
  };
}
function Ua() {
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
var Jr = {}, Yr = function(n) {
  Rt(t, n);
  var e = Ia(t);
  function t(r) {
    var i, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ee(this, t), i = e.call(this), Et && Pe.call(Oe(i)), Ca(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, Oe(i)), i.options = a, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = oe.create("translator"), i;
  }
  return te(t, [{
    key: "changeLanguage",
    value: function(i) {
      i && (this.language = i);
    }
  }, {
    key: "exists",
    value: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (i == null)
        return !1;
      var o = this.resolve(i, a);
      return o && o.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function(i, a) {
      var o = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
      o === void 0 && (o = ":");
      var s = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, u = a.ns || this.options.defaultNS || [], d = o && i.indexOf(o) > -1, f = !this.options.userDefinedKeySeparator && !a.keySeparator && !this.options.userDefinedNsSeparator && !a.nsSeparator && !Ta(i, o, s);
      if (d && !f) {
        var c = i.match(this.interpolator.nestingRegexp);
        if (c && c.length > 0)
          return {
            key: i,
            namespaces: u
          };
        var h = i.split(o);
        (o !== s || o === s && this.options.ns.indexOf(h[0]) > -1) && (u = h.shift()), i = h.join(s);
      }
      return typeof u == "string" && (u = [u]), {
        key: i,
        namespaces: u
      };
    }
  }, {
    key: "translate",
    value: function(i, a, o) {
      var s = this;
      if (Z(a) !== "object" && this.options.overloadTranslationOptionHandler && (a = this.options.overloadTranslationOptionHandler(arguments)), Z(a) === "object" && (a = W({}, a)), a || (a = {}), i == null)
        return "";
      Array.isArray(i) || (i = [String(i)]);
      var u = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails, d = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, f = this.extractFromKey(i[i.length - 1], a), c = f.key, h = f.namespaces, p = h[h.length - 1], v = a.lng || this.language, O = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (v && v.toLowerCase() === "cimode") {
        if (O) {
          var S = a.nsSeparator || this.options.nsSeparator;
          return u ? {
            res: "".concat(p).concat(S).concat(c),
            usedKey: c,
            exactUsedKey: c,
            usedLng: v,
            usedNS: p
          } : "".concat(p).concat(S).concat(c);
        }
        return u ? {
          res: c,
          usedKey: c,
          exactUsedKey: c,
          usedLng: v,
          usedNS: p
        } : c;
      }
      var y = this.resolve(i, a), m = y && y.res, C = y && y.usedKey || c, x = y && y.exactUsedKey || c, N = Object.prototype.toString.apply(m), j = ["[object Number]", "[object Function]", "[object RegExp]"], R = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays, E = !this.i18nFormat || this.i18nFormat.handleAsObject, D = typeof m != "string" && typeof m != "boolean" && typeof m != "number";
      if (E && m && D && j.indexOf(N) < 0 && !(typeof R == "string" && N === "[object Array]")) {
        if (!a.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var U = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(C, m, W(W({}, a), {}, {
            ns: h
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return u ? (y.res = U, y) : U;
        }
        if (d) {
          var q = N === "[object Array]", ie = q ? [] : {}, V = q ? x : C;
          for (var g in m)
            if (Object.prototype.hasOwnProperty.call(m, g)) {
              var w = "".concat(V).concat(d).concat(g);
              ie[g] = this.translate(w, W(W({}, a), {
                joinArrays: !1,
                ns: h
              })), ie[g] === w && (ie[g] = m[g]);
            }
          m = ie;
        }
      } else if (E && typeof R == "string" && N === "[object Array]")
        m = m.join(R), m && (m = this.extendTranslation(m, i, a, o));
      else {
        var k = !1, M = !1, B = a.count !== void 0 && typeof a.count != "string", T = t.hasDefaultValue(a), ce = B ? this.pluralResolver.getSuffix(v, a.count, a) : "", G = a["defaultValue".concat(ce)] || a.defaultValue;
        !this.isValidLookup(m) && T && (k = !0, m = G), this.isValidLookup(m) || (M = !0, m = c);
        var ve = a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, Ze = ve && M ? void 0 : m, xe = T && G !== m && this.options.updateMissing;
        if (M || k || xe) {
          if (this.logger.log(xe ? "updateKey" : "missingKey", v, p, c, xe ? G : m), d) {
            var Xe = this.resolve(c, W(W({}, a), {}, {
              keySeparator: !1
            }));
            Xe && Xe.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var fe = [], ye = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && ye && ye[0])
            for (var me = 0; me < ye.length; me++)
              fe.push(ye[me]);
          else
            this.options.saveMissingTo === "all" ? fe = this.languageUtils.toResolveHierarchy(a.lng || this.language) : fe.push(a.lng || this.language);
          var _e = function(we, je, et) {
            var tt = T && et !== m ? et : Ze;
            s.options.missingKeyHandler ? s.options.missingKeyHandler(we, p, je, tt, xe, a) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(we, p, je, tt, xe, a), s.emit("missingKey", we, p, je, m);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && B ? fe.forEach(function(be) {
            s.pluralResolver.getSuffixes(be, a).forEach(function(we) {
              _e([be], c + we, a["defaultValue".concat(we)] || G);
            });
          }) : _e(fe, c, G));
        }
        m = this.extendTranslation(m, i, a, y, o), M && m === c && this.options.appendNamespaceToMissingKey && (m = "".concat(p, ":").concat(c)), (M || k) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(p, ":").concat(c) : c, k ? m : void 0) : m = this.options.parseMissingKeyHandler(m));
      }
      return u ? (y.res = m, y) : m;
    }
  }, {
    key: "extendTranslation",
    value: function(i, a, o, s, u) {
      var d = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        i = this.i18nFormat.parse(i, W(W({}, this.options.interpolation.defaultVariables), o), s.usedLng, s.usedNS, s.usedKey, {
          resolved: s
        });
      else if (!o.skipInterpolation) {
        o.interpolation && this.interpolator.init(W(W({}, o), {
          interpolation: W(W({}, this.options.interpolation), o.interpolation)
        }));
        var f = typeof i == "string" && (o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), c;
        if (f) {
          var h = i.match(this.interpolator.nestingRegexp);
          c = h && h.length;
        }
        var p = o.replace && typeof o.replace != "string" ? o.replace : o;
        if (this.options.interpolation.defaultVariables && (p = W(W({}, this.options.interpolation.defaultVariables), p)), i = this.interpolator.interpolate(i, p, o.lng || this.language, o), f) {
          var v = i.match(this.interpolator.nestingRegexp), O = v && v.length;
          c < O && (o.nest = !1);
        }
        !o.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (o.lng = s.usedLng), o.nest !== !1 && (i = this.interpolator.nest(i, function() {
          for (var m = arguments.length, C = new Array(m), x = 0; x < m; x++)
            C[x] = arguments[x];
          return u && u[0] === C[0] && !o.context ? (d.logger.warn("It seems you are nesting recursively key: ".concat(C[0], " in key: ").concat(a[0])), null) : d.translate.apply(d, C.concat([a]));
        }, o)), o.interpolation && this.interpolator.reset();
      }
      var S = o.postProcess || this.options.postProcess, y = typeof S == "string" ? [S] : S;
      return i != null && y && y.length && o.applyPostProcessor !== !1 && (i = qn.handle(y, i, a, this.options && this.options.postProcessPassResolved ? W({
        i18nResolved: s
      }, o) : o, this)), i;
    }
  }, {
    key: "resolve",
    value: function(i) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, u, d, f, c;
      return typeof i == "string" && (i = [i]), i.forEach(function(h) {
        if (!a.isValidLookup(s)) {
          var p = a.extractFromKey(h, o), v = p.key;
          u = v;
          var O = p.namespaces;
          a.options.fallbackNS && (O = O.concat(a.options.fallbackNS));
          var S = o.count !== void 0 && typeof o.count != "string", y = S && !o.ordinal && o.count === 0 && a.pluralResolver.shouldUseIntlApi(), m = o.context !== void 0 && (typeof o.context == "string" || typeof o.context == "number") && o.context !== "", C = o.lngs ? o.lngs : a.languageUtils.toResolveHierarchy(o.lng || a.language, o.fallbackLng);
          O.forEach(function(x) {
            a.isValidLookup(s) || (c = x, !Jr["".concat(C[0], "-").concat(x)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(c) && (Jr["".concat(C[0], "-").concat(x)] = !0, a.logger.warn('key "'.concat(u, '" for languages "').concat(C.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), C.forEach(function(N) {
              if (!a.isValidLookup(s)) {
                f = N;
                var j = [v];
                if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                  a.i18nFormat.addLookupKeys(j, v, N, x, o);
                else {
                  var R;
                  S && (R = a.pluralResolver.getSuffix(N, o.count, o));
                  var E = "".concat(a.options.pluralSeparator, "zero");
                  if (S && (j.push(v + R), y && j.push(v + E)), m) {
                    var D = "".concat(v).concat(a.options.contextSeparator).concat(o.context);
                    j.push(D), S && (j.push(D + R), y && j.push(D + E));
                  }
                }
                for (var U; U = j.pop(); )
                  a.isValidLookup(s) || (d = U, s = a.getResource(N, x, U, o));
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
    value: function(i) {
      return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === "");
    }
  }, {
    key: "getResource",
    value: function(i, a, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(i, a, o, s) : this.resourceStore.getResource(i, a, o, s);
    }
  }], [{
    key: "hasDefaultValue",
    value: function(i) {
      var a = "defaultValue";
      for (var o in i)
        if (Object.prototype.hasOwnProperty.call(i, o) && a === o.substring(0, a.length) && i[o] !== void 0)
          return !0;
      return !1;
    }
  }]), t;
}(Pe);
function Dt(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
var Gr = function() {
  function n(e) {
    ee(this, n), this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = oe.create("languageUtils");
  }
  return te(n, [{
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
        return this.options.lowerCaseLng ? i = i.map(function(a) {
          return a.toLowerCase();
        }) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Dt(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), r.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Dt(i[1].toLowerCase())), r.indexOf(i[2].toLowerCase()) > -1 && (i[2] = Dt(i[2].toLowerCase()))), i.join("-");
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
      return t.forEach(function(a) {
        if (!i) {
          var o = r.formatLanguageCode(a);
          (!r.options.supportedLngs || r.isSupportedCode(o)) && (i = o);
        }
      }), !i && this.options.supportedLngs && t.forEach(function(a) {
        if (!i) {
          var o = r.getLanguagePartFromCode(a);
          if (r.isSupportedCode(o))
            return i = o;
          i = r.options.supportedLngs.find(function(s) {
            if (s === o)
              return s;
            if (!(s.indexOf("-") < 0 && o.indexOf("-") < 0) && s.indexOf(o) === 0)
              return s;
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
      var i = this, a = this.getFallbackCodes(r || this.options.fallbackLng || [], t), o = [], s = function(d) {
        d && (i.isSupportedCode(d) ? o.push(d) : i.logger.warn("rejecting language code not found in supportedLngs: ".concat(d)));
      };
      return typeof t == "string" && t.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(t))) : typeof t == "string" && s(this.formatLanguageCode(t)), a.forEach(function(u) {
        o.indexOf(u) < 0 && s(i.formatLanguageCode(u));
      }), o;
    }
  }]), n;
}(), Ma = [{
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
}], qa = {
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
}, Ba = ["v1", "v2", "v3"], Zr = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Ha() {
  var n = {};
  return Ma.forEach(function(e) {
    e.lngs.forEach(function(t) {
      n[t] = {
        numbers: e.nr,
        plurals: qa[e.fc]
      };
    });
  }), n;
}
var Qa = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ee(this, n), this.languageUtils = e, this.options = t, this.logger = oe.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Ha();
  }
  return te(n, [{
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
      return this.getSuffixes(t, i).map(function(a) {
        return "".concat(r).concat(a);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(t) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(t, i);
      return a ? this.shouldUseIntlApi() ? a.resolvedOptions().pluralCategories.sort(function(o, s) {
        return Zr[o] - Zr[s];
      }).map(function(o) {
        return "".concat(r.options.prepend).concat(o);
      }) : a.numbers.map(function(o) {
        return r.getSuffix(t, o, i);
      }) : [];
    }
  }, {
    key: "getSuffix",
    value: function(t, r) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = this.getRule(t, i);
      return a ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(a.select(r)) : this.getSuffixRetroCompatible(a, r) : (this.logger.warn("no plural rule found for: ".concat(t)), "");
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function(t, r) {
      var i = this, a = t.noAbs ? t.plurals(r) : t.plurals(Math.abs(r)), o = t.numbers[a];
      this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
      var s = function() {
        return i.options.prepend && o.toString() ? i.options.prepend + o.toString() : o.toString();
      };
      return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? "_plural_".concat(o.toString()) : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? s() : this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !Ba.includes(this.options.compatibilityJSON);
    }
  }]), n;
}();
function Xr(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function re(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xr(Object(t), !0).forEach(function(r) {
      ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Xr(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function en(n, e, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = _a(n, e, t);
  return !a && i && typeof t == "string" && (a = yt(n, t, r), a === void 0 && (a = yt(e, t, r))), a;
}
var Va = function() {
  function n() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ee(this, n), this.logger = oe.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(t) {
      return t;
    }, this.init(e);
  }
  return te(n, [{
    key: "init",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      t.interpolation || (t.interpolation = {
        escapeValue: !0
      });
      var r = t.interpolation;
      this.escape = r.escape !== void 0 ? r.escape : La, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? Te(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? Te(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? Te(r.nestingPrefix) : r.nestingPrefixEscaped || Te("$t("), this.nestingSuffix = r.nestingSuffix ? Te(r.nestingSuffix) : r.nestingSuffixEscaped || Te(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
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
    value: function(t, r, i, a) {
      var o = this, s, u, d, f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function c(S) {
        return S.replace(/\$/g, "$$$$");
      }
      var h = function(y) {
        if (y.indexOf(o.formatSeparator) < 0) {
          var m = en(r, f, y, o.options.keySeparator, o.options.ignoreJSONStructure);
          return o.alwaysFormat ? o.format(m, void 0, i, re(re(re({}, a), r), {}, {
            interpolationkey: y
          })) : m;
        }
        var C = y.split(o.formatSeparator), x = C.shift().trim(), N = C.join(o.formatSeparator).trim();
        return o.format(en(r, f, x, o.options.keySeparator, o.options.ignoreJSONStructure), N, i, re(re(re({}, a), r), {}, {
          interpolationkey: x
        }));
      };
      this.resetRegExp();
      var p = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, v = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, O = [{
        regex: this.regexpUnescape,
        safeValue: function(y) {
          return c(y);
        }
      }, {
        regex: this.regexp,
        safeValue: function(y) {
          return o.escapeValue ? c(o.escape(y)) : c(y);
        }
      }];
      return O.forEach(function(S) {
        for (d = 0; s = S.regex.exec(t); ) {
          var y = s[1].trim();
          if (u = h(y), u === void 0)
            if (typeof p == "function") {
              var m = p(t, s, a);
              u = typeof m == "string" ? m : "";
            } else if (a && Object.prototype.hasOwnProperty.call(a, y))
              u = "";
            else if (v) {
              u = s[0];
              continue;
            } else
              o.logger.warn("missed to pass in variable ".concat(y, " for interpolating ").concat(t)), u = "";
          else
            typeof u != "string" && !o.useRawValueToEscape && (u = $r(u));
          var C = S.safeValue(u);
          if (t = t.replace(s[0], C), v ? (S.regex.lastIndex += u.length, S.regex.lastIndex -= s[0].length) : S.regex.lastIndex = 0, d++, d >= o.maxReplaces)
            break;
        }
      }), t;
    }
  }, {
    key: "nest",
    value: function(t, r) {
      var i = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, s, u;
      function d(p, v) {
        var O = this.nestingOptionsSeparator;
        if (p.indexOf(O) < 0)
          return p;
        var S = p.split(new RegExp("".concat(O, "[ ]*{"))), y = "{".concat(S[1]);
        p = S[0], y = this.interpolate(y, u);
        var m = y.match(/'/g), C = y.match(/"/g);
        (m && m.length % 2 === 0 && !C || C.length % 2 !== 0) && (y = y.replace(/'/g, '"'));
        try {
          u = JSON.parse(y), v && (u = re(re({}, v), u));
        } catch (x) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(p), x), "".concat(p).concat(O).concat(y);
        }
        return delete u.defaultValue, p;
      }
      for (; o = this.nestingRegexp.exec(t); ) {
        var f = [];
        u = re({}, a), u = u.replace && typeof u.replace != "string" ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
        var c = !1;
        if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
          var h = o[1].split(this.formatSeparator).map(function(p) {
            return p.trim();
          });
          o[1] = h.shift(), f = h, c = !0;
        }
        if (s = r(d.call(this, o[1].trim(), u), u), s && o[0] === t && typeof s != "string")
          return s;
        typeof s != "string" && (s = $r(s)), s || (this.logger.warn("missed to resolve ".concat(o[1], " for nesting ").concat(t)), s = ""), c && (s = f.reduce(function(p, v) {
          return i.format(p, v, a.lng, re(re({}, a), {}, {
            interpolationkey: o[1].trim()
          }));
        }, s.trim())), t = t.replace(o[0], s), this.regexp.lastIndex = 0;
      }
      return t;
    }
  }]), n;
}();
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
function he(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? tn(Object(t), !0).forEach(function(r) {
      ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : tn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function $a(n) {
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
      var a = i.split(";");
      a.forEach(function(o) {
        if (o) {
          var s = o.split(":"), u = xa(s), d = u[0], f = u.slice(1), c = f.join(":").trim().replace(/^'+|'+$/g, "");
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
function Fe(n) {
  var e = {};
  return function(r, i, a) {
    var o = i + JSON.stringify(a), s = e[o];
    return s || (s = n(i, a), e[o] = s), s(r);
  };
}
var Wa = function() {
  function n() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ee(this, n), this.logger = oe.create("formatter"), this.options = e, this.formats = {
      number: Fe(function(t, r) {
        var i = new Intl.NumberFormat(t, he({}, r));
        return function(a) {
          return i.format(a);
        };
      }),
      currency: Fe(function(t, r) {
        var i = new Intl.NumberFormat(t, he(he({}, r), {}, {
          style: "currency"
        }));
        return function(a) {
          return i.format(a);
        };
      }),
      datetime: Fe(function(t, r) {
        var i = new Intl.DateTimeFormat(t, he({}, r));
        return function(a) {
          return i.format(a);
        };
      }),
      relativetime: Fe(function(t, r) {
        var i = new Intl.RelativeTimeFormat(t, he({}, r));
        return function(a) {
          return i.format(a, r.range || "day");
        };
      }),
      list: Fe(function(t, r) {
        var i = new Intl.ListFormat(t, he({}, r));
        return function(a) {
          return i.format(a);
        };
      })
    }, this.init(e);
  }
  return te(n, [{
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
      this.formats[t.toLowerCase().trim()] = Fe(r);
    }
  }, {
    key: "format",
    value: function(t, r, i) {
      var a = this, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = r.split(this.formatSeparator), u = s.reduce(function(d, f) {
        var c = $a(f), h = c.formatName, p = c.formatOptions;
        if (a.formats[h]) {
          var v = d;
          try {
            var O = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, S = O.locale || O.lng || o.locale || o.lng || i;
            v = a.formats[h](d, S, he(he(he({}, p), o), O));
          } catch (y) {
            a.logger.warn(y);
          }
          return v;
        } else
          a.logger.warn("there was no format function for ".concat(h));
        return d;
      }, t);
      return u;
    }
  }]), n;
}();
function rn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function nn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rn(Object(t), !0).forEach(function(r) {
      ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : rn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ka(n) {
  var e = za();
  return function() {
    var r = se(n), i;
    if (e) {
      var a = se(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return Ye(this, i);
  };
}
function za() {
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
function Ja(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
var Ya = function(n) {
  Rt(t, n);
  var e = Ka(t);
  function t(r, i, a) {
    var o, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return ee(this, t), o = e.call(this), Et && Pe.call(Oe(o)), o.backend = r, o.store = i, o.services = a, o.languageUtils = a.languageUtils, o.options = s, o.logger = oe.create("backendConnector"), o.waitingReads = [], o.maxParallelReads = s.maxParallelReads || 10, o.readingCalls = 0, o.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, o.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(a, s.backend, s), o;
  }
  return te(t, [{
    key: "queueLoad",
    value: function(i, a, o, s) {
      var u = this, d = {}, f = {}, c = {}, h = {};
      return i.forEach(function(p) {
        var v = !0;
        a.forEach(function(O) {
          var S = "".concat(p, "|").concat(O);
          !o.reload && u.store.hasResourceBundle(p, O) ? u.state[S] = 2 : u.state[S] < 0 || (u.state[S] === 1 ? f[S] === void 0 && (f[S] = !0) : (u.state[S] = 1, v = !1, f[S] === void 0 && (f[S] = !0), d[S] === void 0 && (d[S] = !0), h[O] === void 0 && (h[O] = !0)));
        }), v || (c[p] = !0);
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
        toLoadNamespaces: Object.keys(h)
      };
    }
  }, {
    key: "loaded",
    value: function(i, a, o) {
      var s = i.split("|"), u = s[0], d = s[1];
      a && this.emit("failedLoading", u, d, a), o && this.store.addResourceBundle(u, d, o), this.state[i] = a ? -1 : 2;
      var f = {};
      this.queue.forEach(function(c) {
        ka(c.loaded, [u], d), Ja(c, i), a && c.errors.push(a), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(h) {
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
    value: function(i, a, o) {
      var s = this, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, f = arguments.length > 5 ? arguments[5] : void 0;
      if (!i.length)
        return f(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: i,
          ns: a,
          fcName: o,
          tried: u,
          wait: d,
          callback: f
        });
        return;
      }
      this.readingCalls++;
      var c = function(O, S) {
        if (s.readingCalls--, s.waitingReads.length > 0) {
          var y = s.waitingReads.shift();
          s.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
        }
        if (O && S && u < s.maxRetries) {
          setTimeout(function() {
            s.read.call(s, i, a, o, u + 1, d * 2, f);
          }, d);
          return;
        }
        f(O, S);
      }, h = this.backend[o].bind(this.backend);
      if (h.length === 2) {
        try {
          var p = h(i, a);
          p && typeof p.then == "function" ? p.then(function(v) {
            return c(null, v);
          }).catch(c) : c(null, p);
        } catch (v) {
          c(v);
        }
        return;
      }
      return h(i, a, c);
    }
  }, {
    key: "prepareLoading",
    value: function(i, a) {
      var o = this, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return this.logger.warn("No backend was added via i18next.use. Will not load resources."), u && u();
      typeof i == "string" && (i = this.languageUtils.toResolveHierarchy(i)), typeof a == "string" && (a = [a]);
      var d = this.queueLoad(i, a, s, u);
      if (!d.toLoad.length)
        return d.pending.length || u(), null;
      d.toLoad.forEach(function(f) {
        o.loadOne(f);
      });
    }
  }, {
    key: "load",
    value: function(i, a, o) {
      this.prepareLoading(i, a, {}, o);
    }
  }, {
    key: "reload",
    value: function(i, a, o) {
      this.prepareLoading(i, a, {
        reload: !0
      }, o);
    }
  }, {
    key: "loadOne",
    value: function(i) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", s = i.split("|"), u = s[0], d = s[1];
      this.read(u, d, "read", void 0, void 0, function(f, c) {
        f && a.logger.warn("".concat(o, "loading namespace ").concat(d, " for language ").concat(u, " failed"), f), !f && c && a.logger.log("".concat(o, "loaded namespace ").concat(d, " for language ").concat(u), c), a.loaded(i, f, c);
      });
    }
  }, {
    key: "saveMissing",
    value: function(i, a, o, s, u) {
      var d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, f = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {
      };
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(a)) {
        this.logger.warn('did not save key "'.concat(o, '" as the namespace "').concat(a, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (!(o == null || o === "")) {
        if (this.backend && this.backend.create) {
          var c = nn(nn({}, d), {}, {
            isUpdate: u
          }), h = this.backend.create.bind(this.backend);
          if (h.length < 6)
            try {
              var p;
              h.length === 5 ? p = h(i, a, o, s, c) : p = h(i, a, o, s), p && typeof p.then == "function" ? p.then(function(v) {
                return f(null, v);
              }).catch(f) : f(null, p);
            } catch (v) {
              f(v);
            }
          else
            h(i, a, o, s, f, c);
        }
        !i || !i[0] || this.store.addResource(i[0], a, o, s);
      }
    }
  }]), t;
}(Pe);
function an() {
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
function on(n) {
  return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n;
}
function sn(n, e) {
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
    e % 2 ? sn(Object(t), !0).forEach(function(r) {
      ue(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : sn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ga(n) {
  var e = Za();
  return function() {
    var r = se(n), i;
    if (e) {
      var a = se(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return Ye(this, i);
  };
}
function Za() {
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
function ut() {
}
function Xa(n) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(n));
  e.forEach(function(t) {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
var mt = function(n) {
  Rt(t, n);
  var e = Ga(t);
  function t() {
    var r, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (ee(this, t), r = e.call(this), Et && Pe.call(Oe(r)), r.options = on(i), r.services = {}, r.logger = oe, r.modules = {
      external: []
    }, Xa(Oe(r)), a && !r.isInitialized && !i.isClone) {
      if (!r.options.initImmediate)
        return r.init(i, a), Ye(r, Oe(r));
      setTimeout(function() {
        r.init(i, a);
      }, 0);
    }
    return r;
  }
  return te(t, [{
    key: "init",
    value: function() {
      var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
      typeof a == "function" && (o = a, a = {}), !a.defaultNS && a.defaultNS !== !1 && a.ns && (typeof a.ns == "string" ? a.defaultNS = a.ns : a.ns.indexOf("translation") < 0 && (a.defaultNS = a.ns[0]));
      var s = an();
      this.options = ae(ae(ae({}, s), this.options), on(a)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = ae(ae({}, s.interpolation), this.options.interpolation)), a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator), a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
      function u(y) {
        return y ? typeof y == "function" ? new y() : y : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? oe.init(u(this.modules.logger), this.options) : oe.init(null, this.options);
        var d;
        this.modules.formatter ? d = this.modules.formatter : typeof Intl < "u" && (d = Wa);
        var f = new Gr(this.options);
        this.store = new Aa(this.options.resources, this.options);
        var c = this.services;
        c.logger = oe, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new Qa(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), d && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (c.formatter = u(d), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new Va(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new Ya(u(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(y) {
          for (var m = arguments.length, C = new Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++)
            C[x - 1] = arguments[x];
          i.emit.apply(i, [y].concat(C));
        }), this.modules.languageDetector && (c.languageDetector = u(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = u(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Yr(this.services, this.options), this.translator.on("*", function(y) {
          for (var m = arguments.length, C = new Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++)
            C[x - 1] = arguments[x];
          i.emit.apply(i, [y].concat(C));
        }), this.modules.external.forEach(function(y) {
          y.init && y.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, o || (o = ut), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
      var O = Be(), S = function() {
        var m = function(x, N) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), O.resolve(N), o(x, N);
        };
        if (i.languages && i.options.compatibilityAPI !== "v1" && !i.isInitialized)
          return m(null, i.t.bind(i));
        i.changeLanguage(i.options.lng, m);
      };
      return this.options.resources || !this.options.initImmediate ? S() : setTimeout(S, 0), O;
    }
  }, {
    key: "loadResources",
    value: function(i) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut, s = o, u = typeof i == "string" ? i : this.language;
      if (typeof i == "function" && (s = i), !this.options.resources || this.options.partialBundledLanguages) {
        if (u && u.toLowerCase() === "cimode")
          return s();
        var d = [], f = function(p) {
          if (p) {
            var v = a.services.languageUtils.toResolveHierarchy(p);
            v.forEach(function(O) {
              d.indexOf(O) < 0 && d.push(O);
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
          !h && !a.resolvedLanguage && a.language && a.setResolvedLanguage(a.language), s(h);
        });
      } else
        s(null);
    }
  }, {
    key: "reloadResources",
    value: function(i, a, o) {
      var s = Be();
      return i || (i = this.languages), a || (a = this.options.ns), o || (o = ut), this.services.backendConnector.reload(i, a, function(u) {
        s.resolve(), o(u);
      }), s;
    }
  }, {
    key: "use",
    value: function(i) {
      if (!i)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!i.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && qn.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function(i) {
      if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1))
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
    value: function(i, a) {
      var o = this;
      this.isLanguageChangingTo = i;
      var s = Be();
      this.emit("languageChanging", i);
      var u = function(h) {
        o.language = h, o.languages = o.services.languageUtils.toResolveHierarchy(h), o.resolvedLanguage = void 0, o.setResolvedLanguage(h);
      }, d = function(h, p) {
        p ? (u(p), o.translator.changeLanguage(p), o.isLanguageChangingTo = void 0, o.emit("languageChanged", p), o.logger.log("languageChanged", p)) : o.isLanguageChangingTo = void 0, s.resolve(function() {
          return o.t.apply(o, arguments);
        }), a && a(h, function() {
          return o.t.apply(o, arguments);
        });
      }, f = function(h) {
        !i && !h && o.services.languageDetector && (h = []);
        var p = typeof h == "string" ? h : o.services.languageUtils.getBestMatchFromCodes(h);
        p && (o.language || u(p), o.translator.language || o.translator.changeLanguage(p), o.services.languageDetector && o.services.languageDetector.cacheUserLanguage && o.services.languageDetector.cacheUserLanguage(p)), o.loadResources(p, function(v) {
          d(v, p);
        });
      };
      return !i && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(i), s;
    }
  }, {
    key: "getFixedT",
    value: function(i, a, o) {
      var s = this, u = function d(f, c) {
        var h;
        if (Z(c) !== "object") {
          for (var p = arguments.length, v = new Array(p > 2 ? p - 2 : 0), O = 2; O < p; O++)
            v[O - 2] = arguments[O];
          h = s.options.overloadTranslationOptionHandler([f, c].concat(v));
        } else
          h = ae({}, c);
        h.lng = h.lng || d.lng, h.lngs = h.lngs || d.lngs, h.ns = h.ns || d.ns, h.keyPrefix = h.keyPrefix || o || d.keyPrefix;
        var S = s.options.keySeparator || ".", y;
        return h.keyPrefix && Array.isArray(f) ? y = f.map(function(m) {
          return "".concat(h.keyPrefix).concat(S).concat(m);
        }) : y = h.keyPrefix ? "".concat(h.keyPrefix).concat(S).concat(f) : f, s.t(y, h);
      };
      return typeof i == "string" ? u.lng = i : u.lngs = i, u.ns = a, u.keyPrefix = o, u;
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
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized)
        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
      if (!this.languages || !this.languages.length)
        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
      var s = o.lng || this.resolvedLanguage || this.languages[0], u = this.options ? this.options.fallbackLng : !1, d = this.languages[this.languages.length - 1];
      if (s.toLowerCase() === "cimode")
        return !0;
      var f = function(p, v) {
        var O = a.services.backendConnector.state["".concat(p, "|").concat(v)];
        return O === -1 || O === 2;
      };
      if (o.precheck) {
        var c = o.precheck(this, f);
        if (c !== void 0)
          return c;
      }
      return !!(this.hasResourceBundle(s, i) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(s, i) && (!u || f(d, i)));
    }
  }, {
    key: "loadNamespaces",
    value: function(i, a) {
      var o = this, s = Be();
      return this.options.ns ? (typeof i == "string" && (i = [i]), i.forEach(function(u) {
        o.options.ns.indexOf(u) < 0 && o.options.ns.push(u);
      }), this.loadResources(function(u) {
        s.resolve(), a && a(u);
      }), s) : (a && a(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(i, a) {
      var o = Be();
      typeof i == "string" && (i = [i]);
      var s = this.options.preload || [], u = i.filter(function(d) {
        return s.indexOf(d) < 0;
      });
      return u.length ? (this.options.preload = s.concat(u), this.loadResources(function(d) {
        o.resolve(), a && a(d);
      }), o) : (a && a(), Promise.resolve());
    }
  }, {
    key: "dir",
    value: function(i) {
      if (i || (i = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !i)
        return "rtl";
      var a = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], o = this.services && this.services.languageUtils || new Gr(an());
      return a.indexOf(o.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut, s = ae(ae(ae({}, this.options), a), {
        isClone: !0
      }), u = new t(s);
      (a.debug !== void 0 || a.prefix !== void 0) && (u.logger = u.logger.clone(a));
      var d = ["store", "services", "language"];
      return d.forEach(function(f) {
        u[f] = i[f];
      }), u.services = ae({}, this.services), u.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u.translator = new Yr(u.services, u.options), u.translator.on("*", function(f) {
        for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
          h[p - 1] = arguments[p];
        u.emit.apply(u, [f].concat(h));
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
}(Pe);
ue(mt, "createInstance", function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new mt(n, e);
});
var $ = mt.createInstance();
$.createInstance = mt.createInstance;
$.createInstance;
$.dir;
$.init;
$.loadResources;
$.reloadResources;
$.use;
$.changeLanguage;
$.getFixedT;
$.t;
$.exists;
$.setDefaultNamespace;
$.hasLoadedNamespace;
$.loadNamespaces;
$.loadLanguages;
var Bn = [], eo = Bn.forEach, to = Bn.slice;
function ro(n) {
  return eo.call(to.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
var un = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, no = function(e, t, r) {
  var i = r || {};
  i.path = i.path || "/";
  var a = encodeURIComponent(t), o = "".concat(e, "=").concat(a);
  if (i.maxAge > 0) {
    var s = i.maxAge - 0;
    if (Number.isNaN(s))
      throw new Error("maxAge should be a Number");
    o += "; Max-Age=".concat(Math.floor(s));
  }
  if (i.domain) {
    if (!un.test(i.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=".concat(i.domain);
  }
  if (i.path) {
    if (!un.test(i.path))
      throw new TypeError("option path is invalid");
    o += "; Path=".concat(i.path);
  }
  if (i.expires) {
    if (typeof i.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += "; Expires=".concat(i.expires.toUTCString());
  }
  if (i.httpOnly && (o += "; HttpOnly"), i.secure && (o += "; Secure"), i.sameSite) {
    var u = typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite;
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
}, ln = {
  create: function(e, t, r, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    r && (a.expires = /* @__PURE__ */ new Date(), a.expires.setTime(a.expires.getTime() + r * 60 * 1e3)), i && (a.domain = i), document.cookie = no(e, encodeURIComponent(t), a);
  },
  read: function(e) {
    for (var t = "".concat(e, "="), r = document.cookie.split(";"), i = 0; i < r.length; i++) {
      for (var a = r[i]; a.charAt(0) === " "; )
        a = a.substring(1, a.length);
      if (a.indexOf(t) === 0)
        return a.substring(t.length, a.length);
    }
    return null;
  },
  remove: function(e) {
    this.create(e, "", -1);
  }
}, io = {
  name: "cookie",
  lookup: function(e) {
    var t;
    if (e.lookupCookie && typeof document < "u") {
      var r = ln.read(e.lookupCookie);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupCookie && typeof document < "u" && ln.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
  }
}, ao = {
  name: "querystring",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var r = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var i = r.substring(1), a = i.split("&"), o = 0; o < a.length; o++) {
        var s = a[o].indexOf("=");
        if (s > 0) {
          var u = a[o].substring(0, s);
          u === e.lookupQuerystring && (t = a[o].substring(s + 1));
        }
      }
    }
    return t;
  }
}, He = null, cn = function() {
  if (He !== null)
    return He;
  try {
    He = window !== "undefined" && window.localStorage !== null;
    var e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    He = !1;
  }
  return He;
}, oo = {
  name: "localStorage",
  lookup: function(e) {
    var t;
    if (e.lookupLocalStorage && cn()) {
      var r = window.localStorage.getItem(e.lookupLocalStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupLocalStorage && cn() && window.localStorage.setItem(t.lookupLocalStorage, e);
  }
}, Qe = null, fn = function() {
  if (Qe !== null)
    return Qe;
  try {
    Qe = window !== "undefined" && window.sessionStorage !== null;
    var e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    Qe = !1;
  }
  return Qe;
}, so = {
  name: "sessionStorage",
  lookup: function(e) {
    var t;
    if (e.lookupSessionStorage && fn()) {
      var r = window.sessionStorage.getItem(e.lookupSessionStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupSessionStorage && fn() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
  }
}, uo = {
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
}, lo = {
  name: "htmlTag",
  lookup: function(e) {
    var t, r = e.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, co = {
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
}, fo = {
  name: "subdomain",
  lookup: function(e) {
    var t = typeof e.lookupFromSubdomainIndex == "number" ? e.lookupFromSubdomainIndex + 1 : 1, r = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (r)
      return r[t];
  }
};
function ho() {
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
var Hn = /* @__PURE__ */ function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ee(this, n), this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  return te(n, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = ro(r, this.options || {}, ho()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(io), this.addDetector(ao), this.addDetector(oo), this.addDetector(so), this.addDetector(uo), this.addDetector(lo), this.addDetector(co), this.addDetector(fo);
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
      return t.forEach(function(a) {
        if (r.detectors[a]) {
          var o = r.detectors[a].lookup(r.options);
          o && typeof o == "string" && (o = [o]), o && (i = i.concat(o));
        }
      }), this.services.languageUtils.getBestMatchFromCodes ? i : i.length > 0 ? i[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function(t, r) {
      var i = this;
      r || (r = this.options.caches), r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || r.forEach(function(a) {
        i.detectors[a] && i.detectors[a].cacheUserLanguage(t, i.options);
      }));
    }
  }]), n;
}();
Hn.type = "languageDetector";
function Wt(n) {
  "@babel/helpers - typeof";
  return Wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Wt(n);
}
var Qn = [], po = Qn.forEach, go = Qn.slice;
function Kt(n) {
  return po.call(go.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
function Vn() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : Wt(XMLHttpRequest)) === "object";
}
function vo(n) {
  return !!n && typeof n.then == "function";
}
function yo(n) {
  return vo(n) ? n : Promise.resolve(n);
}
function mo(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zt = { exports: {} }, lt = { exports: {} }, dn;
function bo() {
  return dn || (dn = 1, function(n, e) {
    var t = typeof self < "u" ? self : dt, r = function() {
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
        function u(g) {
          return g && DataView.prototype.isPrototypeOf(g);
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
          var w = {
            next: function() {
              var k = g.shift();
              return { done: k === void 0, value: k };
            }
          };
          return s.iterable && (w[Symbol.iterator] = function() {
            return w;
          }), w;
        }
        function v(g) {
          this.map = {}, g instanceof v ? g.forEach(function(w, k) {
            this.append(k, w);
          }, this) : Array.isArray(g) ? g.forEach(function(w) {
            this.append(w[0], w[1]);
          }, this) : g && Object.getOwnPropertyNames(g).forEach(function(w) {
            this.append(w, g[w]);
          }, this);
        }
        v.prototype.append = function(g, w) {
          g = c(g), w = h(w);
          var k = this.map[g];
          this.map[g] = k ? k + ", " + w : w;
        }, v.prototype.delete = function(g) {
          delete this.map[c(g)];
        }, v.prototype.get = function(g) {
          return g = c(g), this.has(g) ? this.map[g] : null;
        }, v.prototype.has = function(g) {
          return this.map.hasOwnProperty(c(g));
        }, v.prototype.set = function(g, w) {
          this.map[c(g)] = h(w);
        }, v.prototype.forEach = function(g, w) {
          for (var k in this.map)
            this.map.hasOwnProperty(k) && g.call(w, this.map[k], k, this);
        }, v.prototype.keys = function() {
          var g = [];
          return this.forEach(function(w, k) {
            g.push(k);
          }), p(g);
        }, v.prototype.values = function() {
          var g = [];
          return this.forEach(function(w) {
            g.push(w);
          }), p(g);
        }, v.prototype.entries = function() {
          var g = [];
          return this.forEach(function(w, k) {
            g.push([k, w]);
          }), p(g);
        }, s.iterable && (v.prototype[Symbol.iterator] = v.prototype.entries);
        function O(g) {
          if (g.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          g.bodyUsed = !0;
        }
        function S(g) {
          return new Promise(function(w, k) {
            g.onload = function() {
              w(g.result);
            }, g.onerror = function() {
              k(g.error);
            };
          });
        }
        function y(g) {
          var w = new FileReader(), k = S(w);
          return w.readAsArrayBuffer(g), k;
        }
        function m(g) {
          var w = new FileReader(), k = S(w);
          return w.readAsText(g), k;
        }
        function C(g) {
          for (var w = new Uint8Array(g), k = new Array(w.length), M = 0; M < w.length; M++)
            k[M] = String.fromCharCode(w[M]);
          return k.join("");
        }
        function x(g) {
          if (g.slice)
            return g.slice(0);
          var w = new Uint8Array(g.byteLength);
          return w.set(new Uint8Array(g)), w.buffer;
        }
        function N() {
          return this.bodyUsed = !1, this._initBody = function(g) {
            this._bodyInit = g, g ? typeof g == "string" ? this._bodyText = g : s.blob && Blob.prototype.isPrototypeOf(g) ? this._bodyBlob = g : s.formData && FormData.prototype.isPrototypeOf(g) ? this._bodyFormData = g : s.searchParams && URLSearchParams.prototype.isPrototypeOf(g) ? this._bodyText = g.toString() : s.arrayBuffer && s.blob && u(g) ? (this._bodyArrayBuffer = x(g.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(g) || f(g)) ? this._bodyArrayBuffer = x(g) : this._bodyText = g = Object.prototype.toString.call(g) : this._bodyText = "", this.headers.get("content-type") || (typeof g == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : s.searchParams && URLSearchParams.prototype.isPrototypeOf(g) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, s.blob && (this.blob = function() {
            var g = O(this);
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
            return this._bodyArrayBuffer ? O(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
          }), this.text = function() {
            var g = O(this);
            if (g)
              return g;
            if (this._bodyBlob)
              return m(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(C(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, s.formData && (this.formData = function() {
            return this.text().then(D);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var j = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function R(g) {
          var w = g.toUpperCase();
          return j.indexOf(w) > -1 ? w : g;
        }
        function E(g, w) {
          w = w || {};
          var k = w.body;
          if (g instanceof E) {
            if (g.bodyUsed)
              throw new TypeError("Already read");
            this.url = g.url, this.credentials = g.credentials, w.headers || (this.headers = new v(g.headers)), this.method = g.method, this.mode = g.mode, this.signal = g.signal, !k && g._bodyInit != null && (k = g._bodyInit, g.bodyUsed = !0);
          } else
            this.url = String(g);
          if (this.credentials = w.credentials || this.credentials || "same-origin", (w.headers || !this.headers) && (this.headers = new v(w.headers)), this.method = R(w.method || this.method || "GET"), this.mode = w.mode || this.mode || null, this.signal = w.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && k)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(k);
        }
        E.prototype.clone = function() {
          return new E(this, { body: this._bodyInit });
        };
        function D(g) {
          var w = new FormData();
          return g.trim().split("&").forEach(function(k) {
            if (k) {
              var M = k.split("="), B = M.shift().replace(/\+/g, " "), T = M.join("=").replace(/\+/g, " ");
              w.append(decodeURIComponent(B), decodeURIComponent(T));
            }
          }), w;
        }
        function U(g) {
          var w = new v(), k = g.replace(/\r?\n[\t ]+/g, " ");
          return k.split(/\r?\n/).forEach(function(M) {
            var B = M.split(":"), T = B.shift().trim();
            if (T) {
              var ce = B.join(":").trim();
              w.append(T, ce);
            }
          }), w;
        }
        N.call(E.prototype);
        function q(g, w) {
          w || (w = {}), this.type = "default", this.status = w.status === void 0 ? 200 : w.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in w ? w.statusText : "OK", this.headers = new v(w.headers), this.url = w.url || "", this._initBody(g);
        }
        N.call(q.prototype), q.prototype.clone = function() {
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
        var ie = [301, 302, 303, 307, 308];
        q.redirect = function(g, w) {
          if (ie.indexOf(w) === -1)
            throw new RangeError("Invalid status code");
          return new q(null, { status: w, headers: { location: g } });
        }, o.DOMException = a.DOMException;
        try {
          new o.DOMException();
        } catch {
          o.DOMException = function(w, k) {
            this.message = w, this.name = k;
            var M = Error(w);
            this.stack = M.stack;
          }, o.DOMException.prototype = Object.create(Error.prototype), o.DOMException.prototype.constructor = o.DOMException;
        }
        function V(g, w) {
          return new Promise(function(k, M) {
            var B = new E(g, w);
            if (B.signal && B.signal.aborted)
              return M(new o.DOMException("Aborted", "AbortError"));
            var T = new XMLHttpRequest();
            function ce() {
              T.abort();
            }
            T.onload = function() {
              var G = {
                status: T.status,
                statusText: T.statusText,
                headers: U(T.getAllResponseHeaders() || "")
              };
              G.url = "responseURL" in T ? T.responseURL : G.headers.get("X-Request-URL");
              var ve = "response" in T ? T.response : T.responseText;
              k(new q(ve, G));
            }, T.onerror = function() {
              M(new TypeError("Network request failed"));
            }, T.ontimeout = function() {
              M(new TypeError("Network request failed"));
            }, T.onabort = function() {
              M(new o.DOMException("Aborted", "AbortError"));
            }, T.open(B.method, B.url, !0), B.credentials === "include" ? T.withCredentials = !0 : B.credentials === "omit" && (T.withCredentials = !1), "responseType" in T && s.blob && (T.responseType = "blob"), B.headers.forEach(function(G, ve) {
              T.setRequestHeader(ve, G);
            }), B.signal && (B.signal.addEventListener("abort", ce), T.onreadystatechange = function() {
              T.readyState === 4 && B.signal.removeEventListener("abort", ce);
            }), T.send(typeof B._bodyInit > "u" ? null : B._bodyInit);
          });
        }
        return V.polyfill = !0, a.fetch || (a.fetch = V, a.Headers = v, a.Request = E, a.Response = q), o.Headers = v, o.Request = E, o.Response = q, o.fetch = V, Object.defineProperty(o, "__esModule", { value: !0 }), o;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = r;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, n.exports = e;
  }(lt, lt.exports)), lt.exports;
}
(function(n, e) {
  var t;
  if (typeof fetch == "function" && (typeof dt < "u" && dt.fetch ? t = dt.fetch : typeof window < "u" && window.fetch ? t = window.fetch : t = fetch), typeof mo < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var r = t || bo();
    r.default && (r = r.default), e.default = r, n.exports = e.default;
  }
})(zt, zt.exports);
var $n = zt.exports;
const Wn = /* @__PURE__ */ Ni($n), hn = /* @__PURE__ */ Li({
  __proto__: null,
  default: Wn
}, [$n]);
function bt(n) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bt(n);
}
var pe;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? pe = global.fetch : typeof window < "u" && window.fetch ? pe = window.fetch : pe = fetch);
var ze;
Vn() && (typeof global < "u" && global.XMLHttpRequest ? ze = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (ze = window.XMLHttpRequest));
var wt;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? wt = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (wt = window.ActiveXObject));
!pe && hn && !ze && !wt && (pe = Wn || hn);
typeof pe != "function" && (pe = void 0);
var Jt = function(e, t) {
  if (t && bt(t) === "object") {
    var r = "";
    for (var i in t)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(t[i]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, pn = function(e, t, r) {
  pe(e, t).then(function(i) {
    if (!i.ok)
      return r(i.statusText || "Error", {
        status: i.status
      });
    i.text().then(function(a) {
      r(null, {
        status: i.status,
        data: a
      });
    }).catch(r);
  }).catch(r);
}, gn = !1, wo = function(e, t, r, i) {
  e.queryStringParams && (t = Jt(t, e.queryStringParams));
  var a = Kt({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  r && (a["Content-Type"] = "application/json");
  var o = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, s = Kt({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: a
  }, gn ? {} : o);
  try {
    pn(t, s, i);
  } catch (u) {
    if (!o || Object.keys(o).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(o).forEach(function(d) {
        delete s[d];
      }), pn(t, s, i), gn = !0;
    } catch (d) {
      i(d);
    }
  }
}, So = function(e, t, r, i) {
  r && bt(r) === "object" && (r = Jt("", r).slice(1)), e.queryStringParams && (t = Jt(t, e.queryStringParams));
  try {
    var a;
    ze ? a = new ze() : a = new wt("MSXML2.XMLHTTP.3.0"), a.open(r ? "POST" : "GET", t, 1), e.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.withCredentials = !!e.withCredentials, r && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.overrideMimeType && a.overrideMimeType("application/json");
    var o = e.customHeaders;
    if (o = typeof o == "function" ? o() : o, o)
      for (var s in o)
        a.setRequestHeader(s, o[s]);
    a.onreadystatechange = function() {
      a.readyState > 3 && i(a.status >= 400 ? a.statusText : null, {
        status: a.status,
        data: a.responseText
      });
    }, a.send(r);
  } catch (u) {
    console && console.log(u);
  }
}, Oo = function(e, t, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, pe && t.indexOf("file:") !== 0)
    return wo(e, t, r, i);
  if (Vn() || typeof ActiveXObject == "function")
    return So(e, t, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function Je(n) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Je(n);
}
function Po(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vn(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Kn(r.key), r);
  }
}
function xo(n, e, t) {
  return e && vn(n.prototype, e), t && vn(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function Ro(n, e, t) {
  return e = Kn(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Kn(n) {
  var e = Eo(n, "string");
  return Je(e) === "symbol" ? e : String(e);
}
function Eo(n, e) {
  if (Je(n) !== "object" || n === null)
    return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (Je(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
var Co = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: function(t) {
      return JSON.parse(t);
    },
    stringify: JSON.stringify,
    parsePayload: function(t, r, i) {
      return Ro({}, r, i || "");
    },
    parseLoadPayload: function(t, r) {
    },
    request: Oo,
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
}, zn = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Po(this, n), this.services = e, this.options = t, this.allOptions = r, this.type = "backend", this.init(e, t, r);
  }
  return xo(n, [{
    key: "init",
    value: function(t) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = Kt(i, this.options || {}, Co()), this.allOptions = a, this.services && this.options.reloadInterval && setInterval(function() {
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
    value: function(t, r, i, a, o) {
      var s = this, u = this.options.loadPath;
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(t, i)), u = yo(u), u.then(function(d) {
        if (!d)
          return o(null, {});
        var f = s.services.interpolator.interpolate(d, {
          lng: t.join("+"),
          ns: i.join("+")
        });
        s.loadUrl(f, o, r, a);
      });
    }
  }, {
    key: "loadUrl",
    value: function(t, r, i, a) {
      var o = this, s = typeof i == "string" ? [i] : i, u = typeof a == "string" ? [a] : a, d = this.options.parseLoadPayload(s, u);
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
          typeof c.data == "string" ? h = o.options.parse(c.data, i, a) : h = c.data;
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
    value: function(t, r, i, a, o) {
      var s = this;
      if (this.options.addPath) {
        typeof t == "string" && (t = [t]);
        var u = this.options.parsePayload(r, i, a), d = 0, f = [], c = [];
        t.forEach(function(h) {
          var p = s.options.addPath;
          typeof s.options.addPath == "function" && (p = s.options.addPath(h, r));
          var v = s.services.interpolator.interpolate(p, {
            lng: h,
            ns: r
          });
          s.options.request(s.options, v, u, function(O, S) {
            d += 1, f.push(O), c.push(S), d === t.length && typeof o == "function" && o(f, c);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var t = this, r = this.services, i = r.backendConnector, a = r.languageUtils, o = r.logger, s = i.language;
      if (!(s && s.toLowerCase() === "cimode")) {
        var u = [], d = function(c) {
          var h = a.toResolveHierarchy(c);
          h.forEach(function(p) {
            u.indexOf(p) < 0 && u.push(p);
          });
        };
        d(s), this.allOptions.preload && this.allOptions.preload.forEach(function(f) {
          return d(f);
        }), u.forEach(function(f) {
          t.allOptions.ns.forEach(function(c) {
            i.read(f, c, "read", null, null, function(h, p) {
              h && o.warn("loading namespace ".concat(c, " for language ").concat(f, " failed"), h), !h && p && o.log("loaded namespace ".concat(c, " for language ").concat(f), p), i.loaded("".concat(f, "|").concat(c), h, p);
            });
          });
        });
      }
    }
  }]), n;
}();
zn.type = "backend";
$.use(zn).use(Hn).use(va);
const ko = $;
function ts() {
  return Sa();
}
var $e = {}, Ve = ji;
if (process.env.NODE_ENV === "production")
  $e.createRoot = Ve.createRoot, $e.hydrateRoot = Ve.hydrateRoot;
else {
  var ct = Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  $e.createRoot = function(n, e) {
    ct.usingClientEntryPoint = !0;
    try {
      return Ve.createRoot(n, e);
    } finally {
      ct.usingClientEntryPoint = !1;
    }
  }, $e.hydrateRoot = function(n, e, t) {
    ct.usingClientEntryPoint = !0;
    try {
      return Ve.hydrateRoot(n, e, t);
    } finally {
      ct.usingClientEntryPoint = !1;
    }
  };
}
var Yt = function(n, e) {
  return Yt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, Yt(n, e);
};
function le(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Yt(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function Gt(n) {
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
function Ae(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var r = t.call(n), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; )
      a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (t = r.return) && t.call(r);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}
function Ie(n, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, i = e.length, a; r < i; r++)
      (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return n.concat(a || Array.prototype.slice.call(e));
}
function ge(n) {
  return typeof n == "function";
}
function Jn(n) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var At = Jn(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function St(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var Ge = function() {
  function n(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return n.prototype.unsubscribe = function() {
    var e, t, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var s = Gt(o), u = s.next(); !u.done; u = s.next()) {
              var d = u.value;
              d.remove(this);
            }
          } catch (O) {
            e = { error: O };
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
      if (ge(f))
        try {
          f();
        } catch (O) {
          a = O instanceof At ? O.errors : [O];
        }
      var c = this._finalizers;
      if (c) {
        this._finalizers = null;
        try {
          for (var h = Gt(c), p = h.next(); !p.done; p = h.next()) {
            var v = p.value;
            try {
              yn(v);
            } catch (O) {
              a = a ?? [], O instanceof At ? a = Ie(Ie([], Ae(a)), Ae(O.errors)) : a.push(O);
            }
          }
        } catch (O) {
          r = { error: O };
        } finally {
          try {
            p && !p.done && (i = h.return) && i.call(h);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (a)
        throw new At(a);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        yn(e);
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
    t === e ? this._parentage = null : Array.isArray(t) && St(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && St(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}(), Yn = Ge.EMPTY;
function Gn(n) {
  return n instanceof Ge || n && "closed" in n && ge(n.remove) && ge(n.add) && ge(n.unsubscribe);
}
function yn(n) {
  ge(n) ? n() : n.unsubscribe();
}
var Zn = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Zt = {
  setTimeout: function(n, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var i = Zt.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, Ie([n, e], Ae(t))) : setTimeout.apply(void 0, Ie([n, e], Ae(t)));
  },
  clearTimeout: function(n) {
    var e = Zt.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(n);
  },
  delegate: void 0
};
function _o(n) {
  Zt.setTimeout(function() {
    throw n;
  });
}
function mn() {
}
function ht(n) {
  n();
}
var Xn = function(n) {
  le(e, n);
  function e(t) {
    var r = n.call(this) || this;
    return r.isStopped = !1, t ? (r.destination = t, Gn(t) && t.add(r)) : r.destination = To, r;
  }
  return e.create = function(t, r, i) {
    return new Xt(t, r, i);
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
}(Ge), jo = Function.prototype.bind;
function It(n, e) {
  return jo.call(n, e);
}
var Lo = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (r) {
        ft(r);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (r) {
        ft(r);
      }
    else
      ft(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        ft(t);
      }
  }, n;
}(), Xt = function(n) {
  le(e, n);
  function e(t, r, i) {
    var a = n.call(this) || this, o;
    if (ge(t) || !t)
      o = {
        next: t ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var s;
      a && Zn.useDeprecatedNextContext ? (s = Object.create(t), s.unsubscribe = function() {
        return a.unsubscribe();
      }, o = {
        next: t.next && It(t.next, s),
        error: t.error && It(t.error, s),
        complete: t.complete && It(t.complete, s)
      }) : o = t;
    }
    return a.destination = new Lo(o), a;
  }
  return e;
}(Xn);
function ft(n) {
  _o(n);
}
function No(n) {
  throw n;
}
var To = {
  closed: !0,
  next: mn,
  error: No,
  complete: mn
}, Fo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Do(n) {
  return n;
}
function Ao(n) {
  return n.length === 0 ? Do : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(r, i) {
      return i(r);
    }, t);
  };
}
var bn = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, r) {
    var i = this, a = Uo(e) ? e : new Xt(e, t, r);
    return ht(function() {
      var o = i, s = o.operator, u = o.source;
      a.add(s ? s.call(a, u) : u ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, n.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, n.prototype.forEach = function(e, t) {
    var r = this;
    return t = wn(t), new t(function(i, a) {
      var o = new Xt({
        next: function(s) {
          try {
            e(s);
          } catch (u) {
            a(u), o.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(o);
    });
  }, n.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, n.prototype[Fo] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return Ao(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = wn(e), new e(function(r, i) {
      var a;
      t.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(a);
      });
    });
  }, n.create = function(e) {
    return new n(e);
  }, n;
}();
function wn(n) {
  var e;
  return (e = n ?? Zn.Promise) !== null && e !== void 0 ? e : Promise;
}
function Io(n) {
  return n && ge(n.next) && ge(n.error) && ge(n.complete);
}
function Uo(n) {
  return n && n instanceof Xn || Io(n) && Gn(n);
}
var Mo = Jn(function(n) {
  return function() {
    n(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), ei = function(n) {
  le(e, n);
  function e() {
    var t = n.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var r = new Sn(this, this);
    return r.operator = t, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Mo();
  }, e.prototype.next = function(t) {
    var r = this;
    ht(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Gt(r.currentObservers), s = o.next(); !s.done; s = o.next()) {
            var u = s.value;
            u.next(t);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            s && !s.done && (a = o.return) && a.call(o);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var r = this;
    ht(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = t;
        for (var i = r.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    ht(function() {
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
    var r = this, i = this, a = i.hasError, o = i.isStopped, s = i.observers;
    return a || o ? Yn : (this.currentObservers = null, s.push(t), new Ge(function() {
      r.currentObservers = null, St(s, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? t.error(a) : o && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new bn();
    return t.source = this, t;
  }, e.create = function(t, r) {
    return new Sn(t, r);
  }, e;
}(bn), Sn = function(n) {
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && i !== void 0 ? i : Yn;
  }, e;
}(ei), ke = function(n) {
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
    var t = this, r = t.hasError, i = t.thrownError, a = t._value;
    if (r)
      throw i;
    return this._throwIfClosed(), a;
  }, e.prototype.next = function(t) {
    n.prototype.next.call(this, this._value = t);
  }, e;
}(ei), ti = {
  now: function() {
    return (ti.delegate || Date).now();
  },
  delegate: void 0
}, qo = function(n) {
  le(e, n);
  function e(t, r) {
    return n.call(this) || this;
  }
  return e.prototype.schedule = function(t, r) {
    return this;
  }, e;
}(Ge), Ot = {
  setInterval: function(n, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var i = Ot.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, Ie([n, e], Ae(t))) : setInterval.apply(void 0, Ie([n, e], Ae(t)));
  },
  clearInterval: function(n) {
    var e = Ot.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(n);
  },
  delegate: void 0
}, Bo = function(n) {
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
    var a = this.id, o = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(o, a, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, r), this;
  }, e.prototype.requestAsyncId = function(t, r, i) {
    return i === void 0 && (i = 0), Ot.setInterval(t.flush.bind(t, this), i);
  }, e.prototype.recycleAsyncId = function(t, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Ot.clearInterval(r);
  }, e.prototype.execute = function(t, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(t, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(t, r) {
    var i = !1, a;
    try {
      this.work(t);
    } catch (o) {
      i = !0, a = o || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, r = t.id, i = t.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, St(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, n.prototype.unsubscribe.call(this);
    }
  }, e;
}(qo), On = function() {
  function n(e, t) {
    t === void 0 && (t = n.now), this.schedulerActionCtor = e, this.now = t;
  }
  return n.prototype.schedule = function(e, t, r) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
  }, n.now = ti.now, n;
}(), Ho = function(n) {
  le(e, n);
  function e(t, r) {
    r === void 0 && (r = On.now);
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
}(On), Qo = function(n) {
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
}(Bo), Vo = function(n) {
  le(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e;
}(Ho), $o = new Vo(Qo);
class Wo {
  constructor({
    initState: e,
    callback: t = () => {
    }
  }) {
    J(this, "stream");
    J(this, "_state");
    this._state = e, this.stream = new ke(this._state), t();
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
const Ko = ({
  children: n,
  onTapBackGround: e,
  onTapChildren: t,
  classChildren: r,
  classBackground: i,
  id: a
}) => /* @__PURE__ */ K.jsx("div", { id: a, className: i, onClick: e, children: /* @__PURE__ */ K.jsx(
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
    children: n
  }
) });
const dr = ir(
  void 0
), rs = ({
  children: n,
  appProps: e
}) => /* @__PURE__ */ K.jsx(dr.Provider, { value: e, children: n }), ri = new ke(!1), er = new ke(!1), tr = new ke(null), rr = new ke(null), nr = new ke(null), ns = new ke(null);
function zo(n) {
  ri.next(n);
}
function Jo(n) {
  rr.next(n);
}
function is(n) {
  n === null ? (tr.next(null), er.next(!1)) : (tr.next(
    /* @__PURE__ */ K.jsx(
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
        children: n
      }
    )
  ), er.next(!0));
}
function as(n) {
  nr.next(n);
}
const os = ({
  children: n,
  appProps: e
}) => {
  var a;
  const t = xn(() => new Wo({
    initState: {
      isLoading: !1,
      modals: [],
      showMessage: !1,
      showModel: !1,
      showBottomSheet: !1
    }
  }), []), [r, i] = ar(t.state);
  return Ke(() => {
    let o = 0;
    return t.stream.subscribe((s) => {
      i({ ...s });
    }), ri.subscribe((s) => {
      t.state.isLoading = s, t.upDateState();
    }), er.subscribe((s) => {
      t.state.showMessage = s, t.upDateState();
    }), rr.subscribe((s) => {
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
        $o.schedule(() => {
          t.state.modals = t.state.modals.slice(
            0,
            o
          );
          const u = o;
          t.state.modals.push(
            at(
              /* @__PURE__ */ K.jsx(
                Ko,
                {
                  id: `rd-modals-${u}`,
                  classChildren: "animation-scale--up animation-faded--in",
                  classBackground: "rd-overlay-queue-modal",
                  onTapBackGround: () => {
                    var d;
                    (d = e.configs) != null && d.closeModalOnTapOutside && rr.next(null);
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
    }), nr.subscribe((s) => {
      setTimeout(s === null ? () => {
        t.state.showBottomSheet = !1, t.upDateState();
      } : () => {
        t.state.showBottomSheet = !0, t.upDateState();
      }, 80);
    }), window.addEventListener("popstate", () => {
      if (t.state.isLoading || o > 0) {
        zo(!1);
        for (let s = 0; s < o; s++)
          Jo(null);
      }
    }), () => {
      t.stream.complete();
    };
  }, []), /* @__PURE__ */ K.jsx(Oa, { i18n: ko, children: /* @__PURE__ */ K.jsx(na, { children: /* @__PURE__ */ K.jsx(
    ra,
    {
      queryClient: new Zi({
        defaultOptions: {
          queries: { refetchOnWindowFocus: !1, retry: !1 }
        }
      }),
      children: /* @__PURE__ */ K.jsxs(dr.Provider, { value: e, children: [
        r.showMessage && at(tr.value, document.body, "rd-message"),
        r.isLoading && at(
          (a = e.configs) == null ? void 0 : a.loading,
          document.body,
          "rd-loader"
        ),
        r.modals.length > 0 && r.modals.map((o, s) => o),
        r.showBottomSheet && at(
          nr.value,
          document.body,
          "rd-bottom-sheet"
        ),
        n
      ] })
    }
  ) }) });
}, ss = () => or(dr);
function us(n, e, t) {
  const r = document.getElementById(`${e}`);
  return t && r && (t.minHeight && (r.style.minHeight = t.minHeight), t.minWidth && (r.style.minWidth = t.minWidth), t.maxHeight && (r.style.maxHeight = t.maxHeight), t.maxWidth && (r.style.maxWidth = t.maxWidth)), $e.createRoot(
    document.getElementById(`${e}`),
    {
      identifierPrefix: `${n}`,
      onRecoverableError(a) {
        console.error(a);
      }
    }
  );
}
class Ct {
}
class ls extends Ct {
}
class ni extends Ct {
}
class Yo extends Ct {
}
class ii extends Ct {
}
const Re = class extends ii {
  constructor() {
    super();
    J(this, "m");
    J(this, "key");
    return Re._instance || (this.key = Symbol("RdModelsManager"), Re._instance = this, this.m = /* @__PURE__ */ new Map()), Re._instance;
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
let Ut = Re;
J(Ut, "_instance");
class cs extends Yo {
  constructor(t, r) {
    super();
    J(this, "key");
    J(this, "value");
    this.key = Symbol(`${r}`), this.value = t;
  }
  getName() {
    return this.key.description ?? "";
  }
}
const Ee = class extends ii {
  constructor() {
    var e = (...args) => {
      super(...args);
      J(this, "m");
      J(this, "key");
    };
    return Ee._instance || (e(), this.key = Symbol("RdModulesManager"), Ee._instance = this, this.m = /* @__PURE__ */ new Map()), Ee._instance;
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
let Mt = Ee;
J(Mt, "_instance");
class fs extends ni {
  constructor() {
    super();
    J(this, "key");
    this.key = Symbol("WrapLocalStorage");
  }
  get sizeStorage() {
    return localStorage.length;
  }
  getItem({ key: t }) {
    return localStorage.getItem(t) ?? "";
  }
  setItem({ key: t, value: r }) {
    return localStorage.setItem(t, r);
  }
  removeItem({ key: t }) {
    return localStorage.removeItem(t);
  }
  clearStorage() {
    return localStorage.clear();
  }
}
class ds extends ni {
  constructor() {
    super();
    J(this, "key");
    this.key = Symbol("WrapSessionStorage");
  }
  get sizeStorage() {
    return sessionStorage.length;
  }
  getItem({ key: t }) {
    return sessionStorage.getItem(t) ?? "";
  }
  setItem({ key: t, value: r }) {
    return sessionStorage.setItem(t, r);
  }
  removeItem({ key: t }) {
    return sessionStorage.removeItem(t);
  }
  clearStorage() {
    return sessionStorage.clear();
  }
}
function hs(n, e) {
  return new Worker(n, Object.assign({ type: "module" }, e));
}
class ai {
  constructor({
    code: e,
    message: t
  }) {
    J(this, "code");
    J(this, "message");
    this.code = e ?? -1, this.message = t ?? "";
  }
  copyWith({
    code: e,
    message: t
  }) {
    return new ai({
      code: e ?? this.code,
      message: t ?? this.message
    });
  }
}
const ps = ({
  text: n = "",
  highlight: e = "",
  classHighlight: t,
  classText: r
}) => {
  if (!e.trim())
    return /* @__PURE__ */ K.jsx("span", { children: n });
  const i = n.split("");
  return /* @__PURE__ */ K.jsx("span", { className: r, children: i.filter((a) => a).map((a, o) => e.replaceAll(" ", "").includes(a.toLowerCase()) && a !== "" ? /* @__PURE__ */ K.jsx("mark", { className: t, children: a }, o) : /* @__PURE__ */ K.jsx("span", { children: a }, o)) });
}, Go = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfNDM2XzIwMjc2NSIgdHJhbnNmb3JtPSJzY2FsZSgwLjAxNTYyNSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF80MzZfMjAyNzY1IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUE0MGxFUVZSNFh1M2JRUTZFUUFoRVViai9vWHNPOFNkaDRYT3ZKQWkvcWtGM1p0NkU2NzEwKyt4dWlENlQ0MHVBQ3RBQ3FZbHpEMklBQ0ZLQmtvSGNnbVNRREpKQk1uZ0tJVDZBRHlnRjZEU1lmY0NMVHpnL3owZUdyQVNvZ0RiVDBnS3hCMk1CNXBraUJvQmdyRUVNd0lCakx4OWZBQWlDSUFoeWdta2tSZ1lqaFdNSGRpdHNMMkF2WUMrUUlIamR3emsrQm1BQUJtQkFXYzFrQ0YwYktSQUVRUkFFUVJBTUdhQUNiYUNVei9QNUJSaUt4aFFhaVYwN3VSamZZZ1FETUtEcEdBaEdDTVVDekQ0Q0JFRXcxaUFHWUlCUFpNSmgrZzgvUDhjS3BBSmZWNEVmTWVlL3NMdGFFRklBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L2RlZnM+Cjwvc3ZnPgo=", gs = ({
  src: n,
  srcError: e = Go,
  alt: t,
  className: r,
  style: i
}) => {
  const a = pt(null);
  return /* @__PURE__ */ K.jsx(
    "img",
    {
      style: i,
      ref: a,
      src: n,
      alt: t,
      className: r,
      onError: () => {
        a && a.current && (a.current.onerror = null, a.current.src = e);
      }
    }
  );
};
function vs() {
  return or(Ln);
}
export {
  ai as ErrorModel,
  rs as RdApp,
  os as RdAppExtends,
  Wo as RdBloc,
  Ct as RdCore,
  ps as RdHighlightedText,
  gs as RdImage,
  fs as RdLocalStorage,
  ii as RdManager,
  Yo as RdModel,
  cs as RdModelObject,
  Ut as RdModelsManager,
  ls as RdModule,
  Mt as RdModulesManager,
  Ko as RdOverlay,
  ra as RdQueryClient,
  ds as RdSessionStorage,
  ni as RdStorage,
  na as RdViewport,
  Ln as RdViewportContext,
  us as buildRdRootElement,
  as as rdBottomSheet,
  nr as rdBottomSheetCompo,
  hs as rdCreateWorker,
  ns as rdError,
  ko as rdI18n,
  ri as rdIsLoading,
  zo as rdLoading,
  is as rdMessage,
  tr as rdMessageCompo,
  Jo as rdModal,
  rr as rdQueueModal,
  er as rdShowMessage,
  ss as useRdApp,
  ts as useRdTranslate,
  vs as useRdViewport
};
//# sourceMappingURL=rad-ts.js.map
