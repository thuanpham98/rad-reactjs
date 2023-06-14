var Ki = Object.defineProperty;
var Wi = (n, e, t) => e in n ? Ki(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var M = (n, e, t) => (Wi(n, typeof e != "symbol" ? e + "" : e, t), t);
import * as G from "react";
import _t, { createContext as pr, useState as kt, useCallback as $i, useEffect as Ue, useContext as gr, useRef as Ge, useMemo as An, createElement as zi } from "react";
import Ji, { createPortal as Qe } from "react-dom";
function Yi(n, e) {
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
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var $t = { exports: {} }, He = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir;
function Zi() {
  if (Ir)
    return He;
  Ir = 1;
  var n = _t, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, u, d) {
    var f, l = {}, h = null, p = null;
    d !== void 0 && (h = "" + d), u.key !== void 0 && (h = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (f in u)
      r.call(u, f) && !a.hasOwnProperty(f) && (l[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        l[f] === void 0 && (l[f] = u[f]);
    return { $$typeof: e, type: o, key: h, ref: p, props: l, _owner: i.current };
  }
  return He.Fragment = t, He.jsx = s, He.jsxs = s, He;
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
var Nr;
function Xi() {
  return Nr || (Nr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = _t, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, S = "@@iterator";
    function b(c) {
      if (c === null || typeof c != "object")
        return null;
      var w = v && c[v] || c[S];
      return typeof w == "function" ? w : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(c) {
      {
        for (var w = arguments.length, x = new Array(w > 1 ? w - 1 : 0), T = 1; T < w; T++)
          x[T - 1] = arguments[T];
        E("error", c, x);
      }
    }
    function E(c, w, x) {
      {
        var T = y.ReactDebugCurrentFrame, A = T.getStackAddendum();
        A !== "" && (w += "%s", x = x.concat([A]));
        var U = x.map(function(N) {
          return String(N);
        });
        U.unshift("Warning: " + w), Function.prototype.apply.call(console[c], console, U);
      }
    }
    var R = !1, k = !1, C = !1, _ = !1, P = !1, j;
    j = Symbol.for("react.module.reference");
    function F(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === a || P || c === i || c === d || c === f || _ || c === p || R || k || C || typeof c == "object" && c !== null && (c.$$typeof === h || c.$$typeof === l || c.$$typeof === s || c.$$typeof === o || c.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === j || c.getModuleId !== void 0));
    }
    function q(c, w, x) {
      var T = c.displayName;
      if (T)
        return T;
      var A = w.displayName || w.name || "";
      return A !== "" ? x + "(" + A + ")" : x;
    }
    function ae(c) {
      return c.displayName || "Context";
    }
    function W(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
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
      if (typeof c == "object")
        switch (c.$$typeof) {
          case o:
            var w = c;
            return ae(w) + ".Consumer";
          case s:
            var x = c;
            return ae(x._context) + ".Provider";
          case u:
            return q(c, c.render, "ForwardRef");
          case l:
            var T = c.displayName || null;
            return T !== null ? T : W(c.type) || "Memo";
          case h: {
            var A = c, U = A._payload, N = A._init;
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
    function it() {
    }
    it.__reactDisabledLog = !0;
    function Pe() {
      {
        if (O === 0) {
          L = console.log, B = console.info, Q = console.warn, I = console.error, fe = console.group, Z = console.groupCollapsed, ye = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: it,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        O++;
      }
    }
    function at() {
      {
        if (O--, O === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, c, {
              value: L
            }),
            info: g({}, c, {
              value: B
            }),
            warn: g({}, c, {
              value: Q
            }),
            error: g({}, c, {
              value: I
            }),
            group: g({}, c, {
              value: fe
            }),
            groupCollapsed: g({}, c, {
              value: Z
            }),
            groupEnd: g({}, c, {
              value: ye
            })
          });
        }
        O < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = y.ReactCurrentDispatcher, me;
    function be(c, w, x) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (A) {
            var T = A.stack.trim().match(/\n( *(at )?)/);
            me = T && T[1] || "";
          }
        return `
` + me + c;
      }
    }
    var Le = !1, we;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Se();
    }
    function Te(c, w) {
      if (!c || Le)
        return "";
      {
        var x = we.get(c);
        if (x !== void 0)
          return x;
      }
      var T;
      Le = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = de.current, de.current = null, Pe();
      try {
        if (w) {
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
              T = he;
            }
            Reflect.construct(c, [], N);
          } else {
            try {
              N.call();
            } catch (he) {
              T = he;
            }
            c.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            T = he;
          }
          c();
        }
      } catch (he) {
        if (he && T && typeof he.stack == "string") {
          for (var D = he.stack.split(`
`), J = T.stack.split(`
`), H = D.length - 1, V = J.length - 1; H >= 1 && V >= 0 && D[H] !== J[V]; )
            V--;
          for (; H >= 1 && V >= 0; H--, V--)
            if (D[H] !== J[V]) {
              if (H !== 1 || V !== 1)
                do
                  if (H--, V--, V < 0 || D[H] !== J[V]) {
                    var ee = `
` + D[H].replace(" at new ", " at ");
                    return c.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", c.displayName)), typeof c == "function" && we.set(c, ee), ee;
                  }
                while (H >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        Le = !1, de.current = U, at(), Error.prepareStackTrace = A;
      }
      var Ie = c ? c.displayName || c.name : "", Dr = Ie ? be(Ie) : "";
      return typeof c == "function" && we.set(c, Dr), Dr;
    }
    function st(c, w, x) {
      return Te(c, !1);
    }
    function ot(c) {
      var w = c.prototype;
      return !!(w && w.isReactComponent);
    }
    function ut(c, w, x) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Te(c, ot(c));
      if (typeof c == "string")
        return be(c);
      switch (c) {
        case d:
          return be("Suspense");
        case f:
          return be("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            return st(c.render);
          case l:
            return ut(c.type, w, x);
          case h: {
            var T = c, A = T._payload, U = T._init;
            try {
              return ut(U(A), w, x);
            } catch {
            }
          }
        }
      return "";
    }
    var lt = Object.prototype.hasOwnProperty, Sr = {}, Or = y.ReactDebugCurrentFrame;
    function ct(c) {
      if (c) {
        var w = c._owner, x = ut(c.type, c._source, w ? w.type : null);
        Or.setExtraStackFrame(x);
      } else
        Or.setExtraStackFrame(null);
    }
    function xi(c, w, x, T, A) {
      {
        var U = Function.call.bind(lt);
        for (var N in c)
          if (U(c, N)) {
            var D = void 0;
            try {
              if (typeof c[N] != "function") {
                var J = Error((T || "React class") + ": " + x + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              D = c[N](w, N, T, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              D = H;
            }
            D && !(D instanceof Error) && (ct(A), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", x, N, typeof D), ct(null)), D instanceof Error && !(D.message in Sr) && (Sr[D.message] = !0, ct(A), m("Failed %s type: %s", x, D.message), ct(null));
          }
      }
    }
    var Pi = Array.isArray;
    function It(c) {
      return Pi(c);
    }
    function Ci(c) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, x = w && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return x;
      }
    }
    function _i(c) {
      try {
        return Rr(c), !1;
      } catch {
        return !0;
      }
    }
    function Rr(c) {
      return "" + c;
    }
    function Er(c) {
      if (_i(c))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ci(c)), Rr(c);
    }
    var Be = y.ReactCurrentOwner, ki = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xr, Pr, Nt;
    Nt = {};
    function ji(c) {
      if (lt.call(c, "ref")) {
        var w = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Li(c) {
      if (lt.call(c, "key")) {
        var w = Object.getOwnPropertyDescriptor(c, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function Ti(c, w) {
      if (typeof c.ref == "string" && Be.current && w && Be.current.stateNode !== w) {
        var x = W(Be.current.type);
        Nt[x] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Be.current.type), c.ref), Nt[x] = !0);
      }
    }
    function Di(c, w) {
      {
        var x = function() {
          xr || (xr = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        x.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Ii(c, w) {
      {
        var x = function() {
          Pr || (Pr = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        x.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Ni = function(c, w, x, T, A, U, N) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: w,
        ref: x,
        props: N,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Fi(c, w, x, T, A) {
      {
        var U, N = {}, D = null, J = null;
        x !== void 0 && (Er(x), D = "" + x), Li(w) && (Er(w.key), D = "" + w.key), ji(w) && (J = w.ref, Ti(w, A));
        for (U in w)
          lt.call(w, U) && !ki.hasOwnProperty(U) && (N[U] = w[U]);
        if (c && c.defaultProps) {
          var H = c.defaultProps;
          for (U in H)
            N[U] === void 0 && (N[U] = H[U]);
        }
        if (D || J) {
          var V = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          D && Di(N, V), J && Ii(N, V);
        }
        return Ni(c, D, J, A, T, Be.current, N);
      }
    }
    var Ft = y.ReactCurrentOwner, Cr = y.ReactDebugCurrentFrame;
    function De(c) {
      if (c) {
        var w = c._owner, x = ut(c.type, c._source, w ? w.type : null);
        Cr.setExtraStackFrame(x);
      } else
        Cr.setExtraStackFrame(null);
    }
    var At;
    At = !1;
    function Ut(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function _r() {
      {
        if (Ft.current) {
          var c = W(Ft.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Ai(c) {
      {
        if (c !== void 0) {
          var w = c.fileName.replace(/^.*[\\\/]/, ""), x = c.lineNumber;
          return `

Check your code at ` + w + ":" + x + ".";
        }
        return "";
      }
    }
    var kr = {};
    function Ui(c) {
      {
        var w = _r();
        if (!w) {
          var x = typeof c == "string" ? c : c.displayName || c.name;
          x && (w = `

Check the top-level render call using <` + x + ">.");
        }
        return w;
      }
    }
    function jr(c, w) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var x = Ui(w);
        if (kr[x])
          return;
        kr[x] = !0;
        var T = "";
        c && c._owner && c._owner !== Ft.current && (T = " It was passed a child from " + W(c._owner.type) + "."), De(c), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, T), De(null);
      }
    }
    function Lr(c, w) {
      {
        if (typeof c != "object")
          return;
        if (It(c))
          for (var x = 0; x < c.length; x++) {
            var T = c[x];
            Ut(T) && jr(T, w);
          }
        else if (Ut(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var A = b(c);
          if (typeof A == "function" && A !== c.entries)
            for (var U = A.call(c), N; !(N = U.next()).done; )
              Ut(N.value) && jr(N.value, w);
        }
      }
    }
    function Mi(c) {
      {
        var w = c.type;
        if (w == null || typeof w == "string")
          return;
        var x;
        if (typeof w == "function")
          x = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === l))
          x = w.propTypes;
        else
          return;
        if (x) {
          var T = W(w);
          xi(x, c.props, "prop", T, c);
        } else if (w.PropTypes !== void 0 && !At) {
          At = !0;
          var A = W(w);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qi(c) {
      {
        for (var w = Object.keys(c.props), x = 0; x < w.length; x++) {
          var T = w[x];
          if (T !== "children" && T !== "key") {
            De(c), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), De(null);
            break;
          }
        }
        c.ref !== null && (De(c), m("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    function Tr(c, w, x, T, A, U) {
      {
        var N = F(c);
        if (!N) {
          var D = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Ai(A);
          J ? D += J : D += _r();
          var H;
          c === null ? H = "null" : It(c) ? H = "array" : c !== void 0 && c.$$typeof === e ? (H = "<" + (W(c.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : H = typeof c, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, D);
        }
        var V = Fi(c, w, x, A, U);
        if (V == null)
          return V;
        if (N) {
          var ee = w.children;
          if (ee !== void 0)
            if (T)
              if (It(ee)) {
                for (var Ie = 0; Ie < ee.length; Ie++)
                  Lr(ee[Ie], c);
                Object.freeze && Object.freeze(ee);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lr(ee, c);
        }
        return c === r ? qi(V) : Mi(V), V;
      }
    }
    function Bi(c, w, x) {
      return Tr(c, w, x, !0);
    }
    function Qi(c, w, x) {
      return Tr(c, w, x, !1);
    }
    var Hi = Qi, Vi = Bi;
    Ve.Fragment = r, Ve.jsx = Hi, Ve.jsxs = Vi;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? $t.exports = Zi() : $t.exports = Xi();
var Y = $t.exports;
class tt {
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
function ea(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function zt(n) {
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
function Fr(n, e) {
  const {
    type: t = "all",
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: s,
    stale: o
  } = n;
  if (jt(s)) {
    if (r) {
      if (e.queryHash !== vr(s, e.options))
        return !1;
    } else if (!Ae(e.queryKey, s))
      return !1;
  }
  if (t !== "all") {
    const u = e.isActive();
    if (t === "active" && !u || t === "inactive" && u)
      return !1;
  }
  return !(typeof o == "boolean" && e.isStale() !== o || typeof i < "u" && i !== e.state.fetchStatus || a && !a(e));
}
function Ar(n, e) {
  const {
    exact: t,
    fetching: r,
    predicate: i,
    mutationKey: a
  } = n;
  if (jt(a)) {
    if (!e.options.mutationKey)
      return !1;
    if (t) {
      if (ke(e.options.mutationKey) !== ke(a))
        return !1;
    } else if (!Ae(e.options.mutationKey, a))
      return !1;
  }
  return !(typeof r == "boolean" && e.state.status === "loading" !== r || i && !i(e));
}
function vr(n, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || ke)(n);
}
function ke(n) {
  return JSON.stringify(n, (e, t) => Jt(t) ? Object.keys(t).sort().reduce((r, i) => (r[i] = t[i], r), {}) : t);
}
function Ae(n, e) {
  return Mn(n, e);
}
function Mn(n, e) {
  return n === e ? !0 : typeof n != typeof e ? !1 : n && e && typeof n == "object" && typeof e == "object" ? !Object.keys(e).some((t) => !Mn(n[t], e[t])) : !1;
}
function qn(n, e) {
  if (n === e)
    return n;
  const t = Mr(n) && Mr(e);
  if (t || Jt(n) && Jt(e)) {
    const r = t ? n.length : Object.keys(n).length, i = t ? e : Object.keys(e), a = i.length, s = t ? [] : {};
    let o = 0;
    for (let u = 0; u < a; u++) {
      const d = t ? u : i[u];
      s[d] = qn(n[d], e[d]), s[d] === n[d] && o++;
    }
    return r === a && o === r ? n : s;
  }
  return e;
}
function Ur(n, e) {
  if (n && !e || e && !n)
    return !1;
  for (const t in n)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function Mr(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Jt(n) {
  if (!qr(n))
    return !1;
  const e = n.constructor;
  if (typeof e > "u")
    return !0;
  const t = e.prototype;
  return !(!qr(t) || !t.hasOwnProperty("isPrototypeOf"));
}
function qr(n) {
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
function Br(n) {
  Bn(0).then(n);
}
function ta() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function Yt(n, e, t) {
  return t.isDataEqual != null && t.isDataEqual(n, e) ? n : typeof t.structuralSharing == "function" ? t.structuralSharing(n, e) : t.structuralSharing !== !1 ? qn(n, e) : e;
}
class ra extends tt {
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
const bt = new ra(), Qr = ["online", "offline"];
class na extends tt {
  constructor() {
    super(), this.setup = (e) => {
      if (!Ze && window.addEventListener) {
        const t = () => e();
        return Qr.forEach((r) => {
          window.addEventListener(r, t, !1);
        }), () => {
          Qr.forEach((r) => {
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
const wt = new na();
function ia(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function Lt(n) {
  return (n ?? "online") === "online" ? wt.isOnline() : !0;
}
class Qn {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function yt(n) {
  return n instanceof Qn;
}
function Hn(n) {
  let e = !1, t = 0, r = !1, i, a, s;
  const o = new Promise((b, y) => {
    a = b, s = y;
  }), u = (b) => {
    r || (p(new Qn(b)), n.abort == null || n.abort());
  }, d = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, l = () => !bt.isFocused() || n.networkMode !== "always" && !wt.isOnline(), h = (b) => {
    r || (r = !0, n.onSuccess == null || n.onSuccess(b), i == null || i(), a(b));
  }, p = (b) => {
    r || (r = !0, n.onError == null || n.onError(b), i == null || i(), s(b));
  }, v = () => new Promise((b) => {
    i = (y) => {
      const m = r || !l();
      return m && b(y), m;
    }, n.onPause == null || n.onPause();
  }).then(() => {
    i = void 0, r || n.onContinue == null || n.onContinue();
  }), S = () => {
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
      const R = (m = n.retry) != null ? m : 3, k = (E = n.retryDelay) != null ? E : ia, C = typeof k == "function" ? k(t, y) : k, _ = R === !0 || typeof R == "number" && t < R || typeof R == "function" && R(t, y);
      if (e || !_) {
        p(y);
        return;
      }
      t++, n.onFail == null || n.onFail(t, y), Bn(C).then(() => {
        if (l())
          return v();
      }).then(() => {
        e ? p(y) : S();
      });
    });
  };
  return Lt(n.networkMode) ? S() : v().then(S), {
    promise: o,
    cancel: u,
    continue: () => (i == null ? void 0 : i()) ? o : Promise.resolve(),
    cancelRetry: d,
    continueRetry: f
  };
}
const yr = console;
function aa() {
  let n = [], e = 0, t = (f) => {
    f();
  }, r = (f) => {
    f();
  };
  const i = (f) => {
    let l;
    e++;
    try {
      l = f();
    } finally {
      e--, e || o();
    }
    return l;
  }, a = (f) => {
    e ? n.push(f) : Br(() => {
      t(f);
    });
  }, s = (f) => (...l) => {
    a(() => {
      f(...l);
    });
  }, o = () => {
    const f = n;
    n = [], f.length && Br(() => {
      r(() => {
        f.forEach((l) => {
          t(l);
        });
      });
    });
  };
  return {
    batch: i,
    batchCalls: s,
    schedule: a,
    setNotifyFunction: (f) => {
      t = f;
    },
    setBatchNotifyFunction: (f) => {
      r = f;
    }
  };
}
const K = aa();
class Vn {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), zt(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
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
class sa extends Vn {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || yr, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || oa(this.options), this.state = this.initialState, this.scheduleGc();
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
    const r = Yt(this.state.data, e, this.options);
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
        var a;
        return (a = this.retryer) == null || a.continueRetry(), this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const p = this.observers.find((v) => v.options.queryFn);
      p && this.setOptions(p.options);
    }
    Array.isArray(this.options.queryKey) || process.env.NODE_ENV !== "production" && this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
    const s = ta(), o = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, u = (p) => {
      Object.defineProperty(p, "signal", {
        enumerable: !0,
        get: () => {
          if (s)
            return this.abortSignalConsumed = !0, s.signal;
        }
      });
    };
    u(o);
    const d = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn"), f = {
      fetchOptions: t,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: d
    };
    if (u(f), (r = this.options.behavior) == null || r.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) {
      var l;
      this.dispatch({
        type: "fetch",
        meta: (l = f.fetchOptions) == null ? void 0 : l.meta
      });
    }
    const h = (p) => {
      if (yt(p) && p.silent || this.dispatch({
        type: "error",
        error: p
      }), !yt(p)) {
        var v, S, b, y;
        (v = (S = this.cache.config).onError) == null || v.call(S, p, this), (b = (y = this.cache.config).onSettled) == null || b.call(y, this.state.data, p, this), process.env.NODE_ENV !== "production" && this.logger.error(p);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = Hn({
      fn: f.fetchFn,
      abort: s == null ? void 0 : s.abort.bind(s),
      onSuccess: (p) => {
        var v, S, b, y;
        if (typeof p > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), h(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(p), (v = (S = this.cache.config).onSuccess) == null || v.call(S, p, this), (b = (y = this.cache.config).onSettled) == null || b.call(y, p, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
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
          const s = e.error;
          return yt(s) && s.revert && this.revertState ? {
            ...this.revertState
          } : {
            ...r,
            error: s,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: s,
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
    this.state = t(this.state), K.batch(() => {
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
function oa(n) {
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
class ua extends tt {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, t, r) {
    var i;
    const a = t.queryKey, s = (i = t.queryHash) != null ? i : vr(a, t);
    let o = this.get(s);
    return o || (o = new sa({
      cache: this,
      logger: e.getLogger(),
      queryKey: a,
      queryHash: s,
      options: e.defaultQueryOptions(t),
      state: r,
      defaultOptions: e.getQueryDefaults(a)
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
    K.batch(() => {
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
    return typeof r.exact > "u" && (r.exact = !0), this.queries.find((i) => Fr(r, i));
  }
  findAll(e, t) {
    const [r] = Oe(e, t);
    return Object.keys(r).length > 0 ? this.queries.filter((i) => Fr(r, i)) : this.queries;
  }
  notify(e) {
    K.batch(() => {
      this.listeners.forEach(({
        listener: t
      }) => {
        t(e);
      });
    });
  }
  onFocus() {
    K.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    K.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class la extends Vn {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || yr, this.observers = [], this.state = e.state || ca(), this.setOptions(e.options), this.scheduleGc();
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
      var r, i, a, s, o, u, d, f;
      if (!t) {
        var l, h, p, v;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((l = (h = this.mutationCache.config).onMutate) == null ? void 0 : l.call(h, this.state.variables, this));
        const P = await ((p = (v = this.options).onMutate) == null ? void 0 : p.call(v, this.state.variables));
        P !== this.state.context && this.dispatch({
          type: "loading",
          context: P,
          variables: this.state.variables
        });
      }
      const _ = await e();
      return await ((r = (i = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(i, _, this.state.variables, this.state.context, this)), await ((a = (s = this.options).onSuccess) == null ? void 0 : a.call(s, _, this.state.variables, this.state.context)), await ((o = (u = this.mutationCache.config).onSettled) == null ? void 0 : o.call(u, _, null, this.state.variables, this.state.context, this)), await ((d = (f = this.options).onSettled) == null ? void 0 : d.call(f, _, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: _
      }), _;
    } catch (_) {
      try {
        var S, b, y, m, E, R, k, C;
        throw await ((S = (b = this.mutationCache.config).onError) == null ? void 0 : S.call(b, _, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(_), await ((y = (m = this.options).onError) == null ? void 0 : y.call(m, _, this.state.variables, this.state.context)), await ((E = (R = this.mutationCache.config).onSettled) == null ? void 0 : E.call(R, void 0, _, this.state.variables, this.state.context, this)), await ((k = (C = this.options).onSettled) == null ? void 0 : k.call(C, void 0, _, this.state.variables, this.state.context)), _;
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
    this.state = t(this.state), K.batch(() => {
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
function ca() {
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
class fa extends tt {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, t, r) {
    const i = new la({
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
    K.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((t) => Ar(e, t));
  }
  findAll(e) {
    return this.mutations.filter((t) => Ar(e, t));
  }
  notify(e) {
    K.batch(() => {
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
      return K.batch(() => t.reduce((r, i) => r.then(() => i.continue().catch(te)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function da() {
  return {
    onFetch: (n) => {
      n.fetchFn = () => {
        var e, t, r, i, a, s;
        const o = (e = n.fetchOptions) == null || (t = e.meta) == null ? void 0 : t.refetchPage, u = (r = n.fetchOptions) == null || (i = r.meta) == null ? void 0 : i.fetchMore, d = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", l = (u == null ? void 0 : u.direction) === "backward", h = ((a = n.state.data) == null ? void 0 : a.pages) || [], p = ((s = n.state.data) == null ? void 0 : s.pageParams) || [];
        let v = p, S = !1;
        const b = (C) => {
          Object.defineProperty(C, "signal", {
            enumerable: !0,
            get: () => {
              var _;
              if ((_ = n.signal) != null && _.aborted)
                S = !0;
              else {
                var P;
                (P = n.signal) == null || P.addEventListener("abort", () => {
                  S = !0;
                });
              }
              return n.signal;
            }
          });
        }, y = n.options.queryFn || (() => Promise.reject("Missing queryFn")), m = (C, _, P, j) => (v = j ? [_, ...v] : [...v, _], j ? [P, ...C] : [...C, P]), E = (C, _, P, j) => {
          if (S)
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
          const C = typeof d < "u", _ = C ? d : Hr(n.options, h);
          R = E(h, C, _);
        } else if (l) {
          const C = typeof d < "u", _ = C ? d : ha(n.options, h);
          R = E(h, C, _, !0);
        } else {
          v = [];
          const C = typeof n.options.getNextPageParam > "u";
          R = (o && h[0] ? o(h[0], 0, h) : !0) ? E([], C, p[0]) : Promise.resolve(m([], p[0], h[0]));
          for (let P = 1; P < h.length; P++)
            R = R.then((j) => {
              if (o && h[P] ? o(h[P], P, h) : !0) {
                const q = C ? p[P] : Hr(n.options, j);
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
function Hr(n, e) {
  return n.getNextPageParam == null ? void 0 : n.getNextPageParam(e[e.length - 1], e);
}
function ha(n, e) {
  return n.getPreviousPageParam == null ? void 0 : n.getPreviousPageParam(e[0], e);
}
class pa {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new ua(), this.mutationCache = e.mutationCache || new fa(), this.logger = e.logger || yr, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = bt.subscribe(() => {
      bt.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = wt.subscribe(() => {
      wt.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
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
    const i = Je(e, t, r), a = this.getQueryData(i.queryKey);
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
    const i = this.queryCache.find(e), a = i == null ? void 0 : i.state.data, s = ea(t, a);
    if (typeof s > "u")
      return;
    const o = Je(e), u = this.defaultQueryOptions(o);
    return this.queryCache.build(this, u).setData(s, {
      ...r,
      manual: !0
    });
  }
  setQueriesData(e, t, r) {
    return K.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, t, r)]));
  }
  getQueryState(e, t) {
    var r;
    return (r = this.queryCache.find(e, t)) == null ? void 0 : r.state;
  }
  removeQueries(e, t) {
    const [r] = Oe(e, t), i = this.queryCache;
    K.batch(() => {
      i.findAll(r).forEach((a) => {
        i.remove(a);
      });
    });
  }
  resetQueries(e, t, r) {
    const [i, a] = Oe(e, t, r), s = this.queryCache, o = {
      type: "active",
      ...i
    };
    return K.batch(() => (s.findAll(i).forEach((u) => {
      u.reset();
    }), this.refetchQueries(o, a)));
  }
  cancelQueries(e, t, r) {
    const [i, a = {}] = Oe(e, t, r);
    typeof a.revert > "u" && (a.revert = !0);
    const s = K.batch(() => this.queryCache.findAll(i).map((o) => o.cancel(a)));
    return Promise.all(s).then(te).catch(te);
  }
  invalidateQueries(e, t, r) {
    const [i, a] = Oe(e, t, r);
    return K.batch(() => {
      var s, o;
      if (this.queryCache.findAll(i).forEach((d) => {
        d.invalidate();
      }), i.refetchType === "none")
        return Promise.resolve();
      const u = {
        ...i,
        type: (s = (o = i.refetchType) != null ? o : i.type) != null ? s : "active"
      };
      return this.refetchQueries(u, a);
    });
  }
  refetchQueries(e, t, r) {
    const [i, a] = Oe(e, t, r), s = K.batch(() => this.queryCache.findAll(i).filter((u) => !u.isDisabled()).map((u) => {
      var d;
      return u.fetch(void 0, {
        ...a,
        cancelRefetch: (d = a == null ? void 0 : a.cancelRefetch) != null ? d : !0,
        meta: {
          refetchPage: i.refetchPage
        }
      });
    }));
    let o = Promise.all(s).then(te);
    return a != null && a.throwOnError || (o = o.catch(te)), o;
  }
  fetchQuery(e, t, r) {
    const i = Je(e, t, r), a = this.defaultQueryOptions(i);
    typeof a.retry > "u" && (a.retry = !1);
    const s = this.queryCache.build(this, a);
    return s.isStaleByTime(a.staleTime) ? s.fetch(a) : Promise.resolve(s.state.data);
  }
  prefetchQuery(e, t, r) {
    return this.fetchQuery(e, t, r).then(te).catch(te);
  }
  fetchInfiniteQuery(e, t, r) {
    const i = Je(e, t, r);
    return i.behavior = da(), this.fetchQuery(i);
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
    const t = this.queryDefaults.find((r) => Ae(e, r.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((i) => Ae(e, i.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), t == null ? void 0 : t.defaultOptions;
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
    const t = this.mutationDefaults.find((r) => Ae(e, r.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((i) => Ae(e, i.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), t == null ? void 0 : t.defaultOptions;
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
    return !t.queryHash && t.queryKey && (t.queryHash = vr(t.queryKey, t)), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.useErrorBoundary > "u" && (t.useErrorBoundary = !!t.suspense), t;
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
class ga extends tt {
  constructor(e, t) {
    super(), this.client = e, this.options = t, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), Vr(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Gt(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Gt(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, t) {
    const r = this.options, i = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), process.env.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), Ur(r, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
    const a = this.hasListeners();
    a && Kr(this.currentQuery, i, this.options, r) && this.executeFetch(), this.updateResult(t), a && (this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
    const s = this.computeRefetchInterval();
    a && (this.currentQuery !== i || this.options.enabled !== r.enabled || s !== this.currentRefetchInterval) && this.updateRefetchInterval(s);
  }
  getOptimisticResult(e) {
    const t = this.client.getQueryCache().build(this.client, e);
    return this.createResult(t, e);
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
    if (this.clearStaleTimeout(), Ze || this.currentResult.isStale || !zt(this.options.staleTime))
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
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !(Ze || this.options.enabled === !1 || !zt(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || bt.isFocused()) && this.executeFetch();
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
    const r = this.currentQuery, i = this.options, a = this.currentResult, s = this.currentResultState, o = this.currentResultOptions, u = e !== r, d = u ? e.state : this.currentQueryInitialState, f = u ? this.currentResult : this.previousQueryResult, {
      state: l
    } = e;
    let {
      dataUpdatedAt: h,
      error: p,
      errorUpdatedAt: v,
      fetchStatus: S,
      status: b
    } = l, y = !1, m = !1, E;
    if (t._optimisticResults) {
      const P = this.hasListeners(), j = !P && Vr(e, t), F = P && Kr(e, r, t, i);
      (j || F) && (S = Lt(e.options.networkMode) ? "fetching" : "paused", h || (b = "loading")), t._optimisticResults === "isRestoring" && (S = "idle");
    }
    if (t.keepPreviousData && !l.dataUpdatedAt && f != null && f.isSuccess && b !== "error")
      E = f.data, h = f.dataUpdatedAt, b = f.status, y = !0;
    else if (t.select && typeof l.data < "u")
      if (a && l.data === (s == null ? void 0 : s.data) && t.select === this.selectFn)
        E = this.selectResult;
      else
        try {
          this.selectFn = t.select, E = t.select(l.data), E = Yt(a == null ? void 0 : a.data, E, t), this.selectResult = E, this.selectError = null;
        } catch (P) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(P), this.selectError = P;
        }
    else
      E = l.data;
    if (typeof t.placeholderData < "u" && typeof E > "u" && b === "loading") {
      let P;
      if (a != null && a.isPlaceholderData && t.placeholderData === (o == null ? void 0 : o.placeholderData))
        P = a.data;
      else if (P = typeof t.placeholderData == "function" ? t.placeholderData() : t.placeholderData, t.select && typeof P < "u")
        try {
          P = t.select(P), this.selectError = null;
        } catch (j) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(j), this.selectError = j;
        }
      typeof P < "u" && (b = "success", E = Yt(a == null ? void 0 : a.data, P, t), m = !0);
    }
    this.selectError && (p = this.selectError, E = this.selectResult, v = Date.now(), b = "error");
    const R = S === "fetching", k = b === "loading", C = b === "error";
    return {
      status: b,
      fetchStatus: S,
      isLoading: k,
      isSuccess: b === "success",
      isError: C,
      isInitialLoading: k && R,
      data: E,
      dataUpdatedAt: h,
      error: p,
      errorUpdatedAt: v,
      failureCount: l.fetchFailureCount,
      failureReason: l.fetchFailureReason,
      errorUpdateCount: l.errorUpdateCount,
      isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
      isFetchedAfterMount: l.dataUpdateCount > d.dataUpdateCount || l.errorUpdateCount > d.errorUpdateCount,
      isFetching: R,
      isRefetching: R && !k,
      isLoadingError: C && l.dataUpdatedAt === 0,
      isPaused: S === "paused",
      isPlaceholderData: m,
      isPreviousData: y,
      isRefetchError: C && l.dataUpdatedAt !== 0,
      isStale: mr(e, t),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const t = this.currentResult, r = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, Ur(r, t))
      return;
    this.currentResult = r;
    const i = {
      cache: !0
    }, a = () => {
      if (!t)
        return !0;
      const {
        notifyOnChangeProps: s
      } = this.options;
      if (s === "all" || !s && !this.trackedProps.size)
        return !0;
      const o = new Set(s ?? this.trackedProps);
      return this.options.useErrorBoundary && o.add("error"), Object.keys(this.currentResult).some((u) => {
        const d = u;
        return this.currentResult[d] !== t[d] && o.has(d);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && a() && (i.listeners = !0), this.notify({
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
    e.type === "success" ? t.onSuccess = !e.manual : e.type === "error" && !yt(e.error) && (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    K.batch(() => {
      if (e.onSuccess) {
        var t, r, i, a;
        (t = (r = this.options).onSuccess) == null || t.call(r, this.currentResult.data), (i = (a = this.options).onSettled) == null || i.call(a, this.currentResult.data, null);
      } else if (e.onError) {
        var s, o, u, d;
        (s = (o = this.options).onError) == null || s.call(o, this.currentResult.error), (u = (d = this.options).onSettled) == null || u.call(d, void 0, this.currentResult.error);
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
function va(n, e) {
  return e.enabled !== !1 && !n.state.dataUpdatedAt && !(n.state.status === "error" && e.retryOnMount === !1);
}
function Vr(n, e) {
  return va(n, e) || n.state.dataUpdatedAt > 0 && Gt(n, e, e.refetchOnMount);
}
function Gt(n, e, t) {
  if (e.enabled !== !1) {
    const r = typeof t == "function" ? t(n) : t;
    return r === "always" || r !== !1 && mr(n, e);
  }
  return !1;
}
function Kr(n, e, t, r) {
  return t.enabled !== !1 && (n !== e || r.enabled === !1) && (!t.suspense || n.state.status !== "error") && mr(n, t);
}
function mr(n, e) {
  return n.isStaleByTime(e.staleTime);
}
var Zt = { exports: {} }, Mt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function ya() {
  if (Wr)
    return Mt;
  Wr = 1;
  var n = _t;
  function e(l, h) {
    return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = n.useState, i = n.useEffect, a = n.useLayoutEffect, s = n.useDebugValue;
  function o(l, h) {
    var p = h(), v = r({ inst: { value: p, getSnapshot: h } }), S = v[0].inst, b = v[1];
    return a(function() {
      S.value = p, S.getSnapshot = h, u(S) && b({ inst: S });
    }, [l, p, h]), i(function() {
      return u(S) && b({ inst: S }), l(function() {
        u(S) && b({ inst: S });
      });
    }, [l]), s(p), p;
  }
  function u(l) {
    var h = l.getSnapshot;
    l = l.value;
    try {
      var p = h();
      return !t(l, p);
    } catch {
      return !0;
    }
  }
  function d(l, h) {
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
var $r;
function ma() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = _t, e = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
    var a = typeof Object.is == "function" ? Object.is : i, s = n.useState, o = n.useEffect, u = n.useLayoutEffect, d = n.useDebugValue, f = !1, l = !1;
    function h(E, R, k) {
      f || n.startTransition !== void 0 && (f = !0, t("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var C = R();
      if (!l) {
        var _ = R();
        a(C, _) || (t("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var P = s({
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
        return !a(k, C);
      } catch {
        return !0;
      }
    }
    function v(E, R, k) {
      return R();
    }
    var S = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", b = !S, y = b ? v : h, m = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : y;
    qt.useSyncExternalStore = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), qt;
}
process.env.NODE_ENV === "production" ? Zt.exports = ya() : Zt.exports = ma();
var ba = Zt.exports;
const wa = ba.useSyncExternalStore, zr = /* @__PURE__ */ G.createContext(void 0), Kn = /* @__PURE__ */ G.createContext(!1);
function Wn(n, e) {
  return n || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = zr), window.ReactQueryClientContext) : zr);
}
const Sa = ({
  context: n
} = {}) => {
  const e = G.useContext(Wn(n, G.useContext(Kn)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Oa = ({
  client: n,
  children: e,
  context: t,
  contextSharing: r = !1
}) => {
  G.useEffect(() => (n.mount(), () => {
    n.unmount();
  }), [n]), process.env.NODE_ENV !== "production" && r && n.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const i = Wn(t, r);
  return /* @__PURE__ */ G.createElement(Kn.Provider, {
    value: !t && r
  }, /* @__PURE__ */ G.createElement(i.Provider, {
    value: n
  }, e));
}, $n = /* @__PURE__ */ G.createContext(!1), Ra = () => G.useContext($n);
$n.Provider;
function Ea() {
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
const xa = /* @__PURE__ */ G.createContext(Ea()), Pa = () => G.useContext(xa);
function Ca(n, e) {
  return typeof n == "function" ? n(...e) : !!n;
}
const _a = (n, e) => {
  (n.suspense || n.useErrorBoundary) && (e.isReset() || (n.retryOnMount = !1));
}, ka = (n) => {
  G.useEffect(() => {
    n.clearReset();
  }, [n]);
}, ja = ({
  result: n,
  errorResetBoundary: e,
  useErrorBoundary: t,
  query: r
}) => n.isError && !e.isReset() && !n.isFetching && Ca(t, [n.error, r]), La = (n) => {
  n.suspense && typeof n.staleTime != "number" && (n.staleTime = 1e3);
}, Ta = (n, e) => n.isLoading && n.isFetching && !e, Da = (n, e, t) => (n == null ? void 0 : n.suspense) && Ta(e, t), Ia = (n, e, t) => e.fetchOptimistic(n).then(({
  data: r
}) => {
  n.onSuccess == null || n.onSuccess(r), n.onSettled == null || n.onSettled(r, null);
}).catch((r) => {
  t.clearReset(), n.onError == null || n.onError(r), n.onSettled == null || n.onSettled(void 0, r);
});
function Na(n, e) {
  const t = Sa({
    context: n.context
  }), r = Ra(), i = Pa(), a = t.defaultQueryOptions(n);
  a._optimisticResults = r ? "isRestoring" : "optimistic", a.onError && (a.onError = K.batchCalls(a.onError)), a.onSuccess && (a.onSuccess = K.batchCalls(a.onSuccess)), a.onSettled && (a.onSettled = K.batchCalls(a.onSettled)), La(a), _a(a, i), ka(i);
  const [s] = G.useState(() => new e(t, a)), o = s.getOptimisticResult(a);
  if (wa(G.useCallback((u) => {
    const d = r ? () => {
    } : s.subscribe(K.batchCalls(u));
    return s.updateResult(), d;
  }, [s, r]), () => s.getCurrentResult(), () => s.getCurrentResult()), G.useEffect(() => {
    s.setOptions(a, {
      listeners: !1
    });
  }, [a, s]), Da(a, o, r))
    throw Ia(a, s, i);
  if (ja({
    result: o,
    errorResetBoundary: i,
    useErrorBoundary: a.useErrorBoundary,
    query: s.getCurrentQuery()
  }))
    throw o.error;
  return a.notifyOnChangeProps ? o : s.trackResult(o);
}
function Fa(n, e, t) {
  const r = Je(n, e, t);
  return Na(r, ga);
}
const Aa = ({ children: n, queryClient: e }) => /* @__PURE__ */ Y.jsx(Oa, { client: e, children: n }), zn = pr({
  height: 0,
  width: 0
}), Ua = ({
  children: n
}) => {
  const [e, t] = kt({
    height: 0,
    width: 0
  }), r = $i(
    () => t({
      height: window && window.innerHeight,
      width: window && window.innerWidth
    }),
    []
  );
  return Ue(() => (r(), window && window.addEventListener("resize", r), window && window.addEventListener(
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
  }), []), /* @__PURE__ */ Y.jsx(zn.Provider, { value: e, children: n });
};
function X(n) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, X(n);
}
function Ma(n, e) {
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
  var e = Ma(n, "string");
  return X(e) === "symbol" ? e : String(e);
}
function le(n, e, t) {
  return e = Jn(e), e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function qa() {
  if (console && console.warn) {
    for (var n, e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    typeof t[0] == "string" && (t[0] = "react-i18next:: ".concat(t[0])), (n = console).warn.apply(n, t);
  }
}
var Jr = {};
function Xt() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Jr[e[0]] || (typeof e[0] == "string" && (Jr[e[0]] = /* @__PURE__ */ new Date()), qa.apply(void 0, e));
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
function Yr(n, e, t) {
  n.loadNamespaces(e, Yn(n, t));
}
function Gr(n, e, t, r) {
  typeof t == "string" && (t = [t]), t.forEach(function(i) {
    n.options.ns.indexOf(i) < 0 && n.options.ns.push(i);
  }), n.loadLanguages(e, Yn(n, r));
}
function Ba(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = e.languages[0], i = e.options ? e.options.fallbackLng : !1, a = e.languages[e.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  var s = function(u, d) {
    var f = e.services.backendConnector.state["".concat(u, "|").concat(d)];
    return f === -1 || f === 2;
  };
  return t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !s(e.isLanguageChangingTo, n) ? !1 : !!(e.hasResourceBundle(r, n) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || s(r, n) && (!i || s(a, n)));
}
function Qa(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!e.languages || !e.languages.length)
    return Xt("i18n.languages were undefined or empty", e.languages), !0;
  var r = e.options.ignoreJSONStructure !== void 0;
  return r ? e.hasLoadedNamespace(n, {
    lng: t.lng,
    precheck: function(a, s) {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !s(a.isLanguageChangingTo, n))
        return !1;
    }
  }) : Ba(n, e, t);
}
var Ha = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Va = {
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
}, Ka = function(e) {
  return Va[e];
}, Wa = function(e) {
  return e.replace(Ha, Ka);
};
function Zr(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Xr(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zr(Object(t), !0).forEach(function(r) {
      le(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Zr(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
var er = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Wa
};
function $a() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  er = Xr(Xr({}, er), n);
}
function za() {
  return er;
}
var Gn;
function Ja(n) {
  Gn = n;
}
function Ya() {
  return Gn;
}
function re(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function en(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Jn(r.key), r);
  }
}
function ne(n, e, t) {
  return e && en(n.prototype, e), t && en(n, t), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
var Ga = {
  type: "3rdParty",
  init: function(e) {
    $a(e.options.react), Ja(e);
  }
}, Zn = pr(), Za = function() {
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
function Xa(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r, i, a, s, o = [], u = !0, d = !1;
    try {
      if (a = (t = t.call(n)).next, e === 0) {
        if (Object(t) !== t)
          return;
        u = !1;
      } else
        for (; !(u = (r = a.call(t)).done) && (o.push(r.value), o.length !== e); u = !0)
          ;
    } catch (f) {
      d = !0, i = f;
    } finally {
      try {
        if (!u && t.return != null && (s = t.return(), Object(s) !== s))
          return;
      } finally {
        if (d)
          throw i;
      }
    }
    return o;
  }
}
function tn(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function ei(n, e) {
  if (n) {
    if (typeof n == "string")
      return tn(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set")
      return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return tn(n, e);
  }
}
function ti() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function es(n, e) {
  return Xn(n) || Xa(n, e) || ei(n, e) || ti();
}
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
function Bt(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rn(Object(t), !0).forEach(function(r) {
      le(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : rn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
var ts = function(e, t) {
  var r = Ge();
  return Ue(function() {
    r.current = t ? r.current : e;
  }, [e, t]), r.current;
};
function rs(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.i18n, r = gr(Zn) || {}, i = r.i18n, a = r.defaultNS, s = t || i || Ya();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new Za()), !s) {
    Xt("You will need to pass in an i18next instance by using initReactI18next");
    var o = function(j, F) {
      return typeof F == "string" ? F : F && X(F) === "object" && typeof F.defaultValue == "string" ? F.defaultValue : Array.isArray(j) ? j[j.length - 1] : j;
    }, u = [o, {}, !1];
    return u.t = o, u.i18n = {}, u.ready = !1, u;
  }
  s.options.react && s.options.react.wait !== void 0 && Xt("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  var d = Bt(Bt(Bt({}, za()), s.options.react), e), f = d.useSuspense, l = d.keyPrefix, h = n || a || s.options && s.options.defaultNS;
  h = typeof h == "string" ? [h] : h || ["translation"], s.reportNamespaces.addUsedNamespaces && s.reportNamespaces.addUsedNamespaces(h);
  var p = (s.isInitialized || s.initializedStoreOnce) && h.every(function(P) {
    return Qa(P, s, d);
  });
  function v() {
    return s.getFixedT(e.lng || null, d.nsMode === "fallback" ? h : h[0], l);
  }
  var S = kt(v), b = es(S, 2), y = b[0], m = b[1], E = h.join();
  e.lng && (E = "".concat(e.lng).concat(E));
  var R = ts(E), k = Ge(!0);
  Ue(function() {
    var P = d.bindI18n, j = d.bindI18nStore;
    k.current = !0, !p && !f && (e.lng ? Gr(s, e.lng, h, function() {
      k.current && m(v);
    }) : Yr(s, h, function() {
      k.current && m(v);
    })), p && R && R !== E && k.current && m(v);
    function F() {
      k.current && m(v);
    }
    return P && s && s.on(P, F), j && s && s.store.on(j, F), function() {
      k.current = !1, P && s && P.split(" ").forEach(function(q) {
        return s.off(q, F);
      }), j && s && j.split(" ").forEach(function(q) {
        return s.store.off(q, F);
      });
    };
  }, [s, E]);
  var C = Ge(!0);
  Ue(function() {
    k.current && !C.current && m(v), C.current = !1;
  }, [s, l]);
  var _ = [y, s, p];
  if (_.t = y, _.i18n = s, _.ready = p, p || !p && !f)
    return _;
  throw new Promise(function(P) {
    e.lng ? Gr(s, e.lng, h, function() {
      return P();
    }) : Yr(s, h, function() {
      return P();
    });
  });
}
function ns(n) {
  var e = n.i18n, t = n.defaultNS, r = n.children, i = An(function() {
    return {
      i18n: e,
      defaultNS: t
    };
  }, [e, t]);
  return zi(Zn.Provider, {
    value: i
  }, r);
}
function Re(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function tr(n, e) {
  return tr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, tr(n, e);
}
function Tt(n, e) {
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
  }), e && tr(n, e);
}
function rt(n, e) {
  if (e && (X(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Re(n);
}
function ue(n) {
  return ue = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ue(n);
}
function is(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function as(n) {
  return Xn(n) || is(n) || ei(n) || ti();
}
function nn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function an(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nn(Object(t), !0).forEach(function(r) {
      le(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : nn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
var ss = {
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
}, os = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    re(this, n), this.init(e, t);
  }
  return ne(n, [{
    key: "init",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = r.prefix || "i18next:", this.logger = t || ss, this.options = r, this.debug = r.debug;
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
      return new n(this.logger, an(an({}, {
        prefix: "".concat(this.prefix, ":").concat(t, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(t) {
      return t = t || this.options, t.prefix = t.prefix || this.prefix, new n(this.logger, t);
    }
  }]), n;
}(), oe = new os(), Ee = function() {
  function n() {
    re(this, n), this.observers = {};
  }
  return ne(n, [{
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
        var s = [].concat(this.observers[t]);
        s.forEach(function(u) {
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
function sn(n) {
  return n == null ? "" : "" + n;
}
function us(n, e, t) {
  n.forEach(function(r) {
    e[r] && (t[r] = e[r]);
  });
}
function br(n, e, t) {
  function r(o) {
    return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
  }
  function i() {
    return !n || typeof n == "string";
  }
  for (var a = typeof e != "string" ? [].concat(e) : e.split("."); a.length > 1; ) {
    if (i())
      return {};
    var s = r(a.shift());
    !n[s] && t && (n[s] = new t()), Object.prototype.hasOwnProperty.call(n, s) ? n = n[s] : n = {};
  }
  return i() ? {} : {
    obj: n,
    k: r(a.shift())
  };
}
function on(n, e, t) {
  var r = br(n, e, Object), i = r.obj, a = r.k;
  i[a] = t;
}
function ls(n, e, t, r) {
  var i = br(n, e, Object), a = i.obj, s = i.k;
  a[s] = a[s] || [], r && (a[s] = a[s].concat(t)), r || a[s].push(t);
}
function St(n, e) {
  var t = br(n, e), r = t.obj, i = t.k;
  if (r)
    return r[i];
}
function cs(n, e, t) {
  var r = St(n, t);
  return r !== void 0 ? r : St(e, t);
}
function ri(n, e, t) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && (r in n ? typeof n[r] == "string" || n[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (n[r] = e[r]) : ri(n[r], e[r], t) : n[r] = e[r]);
  return n;
}
function Ne(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var fs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function ds(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, function(e) {
    return fs[e];
  }) : n;
}
var Dt = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, hs = [" ", ",", "?", "!", ";"];
function ps(n, e, t) {
  e = e || "", t = t || "";
  var r = hs.filter(function(o) {
    return e.indexOf(o) < 0 && t.indexOf(o) < 0;
  });
  if (r.length === 0)
    return !0;
  var i = new RegExp("(".concat(r.map(function(o) {
    return o === "?" ? "\\?" : o;
  }).join("|"), ")")), a = !i.test(n);
  if (!a) {
    var s = n.indexOf(t);
    s > 0 && !i.test(n.substring(0, s)) && (a = !0);
  }
  return a;
}
function Ot(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (n) {
    if (n[e])
      return n[e];
    for (var r = e.split(t), i = n, a = 0; a < r.length; ++a) {
      if (!i || typeof i[r[a]] == "string" && a + 1 < r.length)
        return;
      if (i[r[a]] === void 0) {
        for (var s = 2, o = r.slice(a, a + s).join(t), u = i[o]; u === void 0 && r.length > a + s; )
          s++, o = r.slice(a, a + s).join(t), u = i[o];
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
        var d = r.slice(a + s).join(t);
        return d ? Ot(u, d, t) : void 0;
      }
      i = i[r[a]];
    }
    return i;
  }
}
function un(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ft(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? un(Object(t), !0).forEach(function(r) {
      le(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : un(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function gs(n) {
  var e = vs();
  return function() {
    var r = ue(n), i;
    if (e) {
      var a = ue(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return rt(this, i);
  };
}
function vs() {
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
var ys = function(n) {
  Tt(t, n);
  var e = gs(t);
  function t(r) {
    var i, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return re(this, t), i = e.call(this), Dt && Ee.call(Re(i)), i.data = r || {}, i.options = a, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.options.ignoreJSONStructure === void 0 && (i.options.ignoreJSONStructure = !0), i;
  }
  return ne(t, [{
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
    value: function(i, a, s) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, d = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure, f = [i, a];
      s && typeof s != "string" && (f = f.concat(s)), s && typeof s == "string" && (f = f.concat(u ? s.split(u) : s)), i.indexOf(".") > -1 && (f = i.split("."));
      var l = St(this.data, f);
      return l || !d || typeof s != "string" ? l : Ot(this.data && this.data[i] && this.data[i][a], s, u);
    }
  }, {
    key: "addResource",
    value: function(i, a, s, o) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, d = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator, f = [i, a];
      s && (f = f.concat(d ? s.split(d) : s)), i.indexOf(".") > -1 && (f = i.split("."), o = a, a = f[1]), this.addNamespaces(a), on(this.data, f, o), u.silent || this.emit("added", i, a, s, o);
    }
  }, {
    key: "addResources",
    value: function(i, a, s) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: !1
      };
      for (var u in s)
        (typeof s[u] == "string" || Object.prototype.toString.apply(s[u]) === "[object Array]") && this.addResource(i, a, u, s[u], {
          silent: !0
        });
      o.silent || this.emit("added", i, a, s);
    }
  }, {
    key: "addResourceBundle",
    value: function(i, a, s, o, u) {
      var d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: !1
      }, f = [i, a];
      i.indexOf(".") > -1 && (f = i.split("."), o = s, s = a, a = f[1]), this.addNamespaces(a);
      var l = St(this.data, f) || {};
      o ? ri(l, s, u) : l = ft(ft({}, l), s), on(this.data, f, l), d.silent || this.emit("added", i, a, s);
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
      return a || (a = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? ft(ft({}, {}), this.getResource(i, a)) : this.getResource(i, a);
    }
  }, {
    key: "getDataByLanguage",
    value: function(i) {
      return this.data[i];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function(i) {
      var a = this.getDataByLanguage(i), s = a && Object.keys(a) || [];
      return !!s.find(function(o) {
        return a[o] && Object.keys(a[o]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      return this.data;
    }
  }]), t;
}(Ee), ni = {
  processors: {},
  addPostProcessor: function(e) {
    this.processors[e.name] = e;
  },
  handle: function(e, t, r, i, a) {
    var s = this;
    return e.forEach(function(o) {
      s.processors[o] && (t = s.processors[o].process(t, r, i, a));
    }), t;
  }
};
function ln(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function z(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ln(Object(t), !0).forEach(function(r) {
      le(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : ln(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function ms(n) {
  var e = bs();
  return function() {
    var r = ue(n), i;
    if (e) {
      var a = ue(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return rt(this, i);
  };
}
function bs() {
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
var cn = {}, fn = function(n) {
  Tt(t, n);
  var e = ms(t);
  function t(r) {
    var i, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return re(this, t), i = e.call(this), Dt && Ee.call(Re(i)), us(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, Re(i)), i.options = a, i.options.keySeparator === void 0 && (i.options.keySeparator = "."), i.logger = oe.create("translator"), i;
  }
  return ne(t, [{
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
      var s = this.resolve(i, a);
      return s && s.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function(i, a) {
      var s = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
      s === void 0 && (s = ":");
      var o = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, u = a.ns || this.options.defaultNS || [], d = s && i.indexOf(s) > -1, f = !this.options.userDefinedKeySeparator && !a.keySeparator && !this.options.userDefinedNsSeparator && !a.nsSeparator && !ps(i, s, o);
      if (d && !f) {
        var l = i.match(this.interpolator.nestingRegexp);
        if (l && l.length > 0)
          return {
            key: i,
            namespaces: u
          };
        var h = i.split(s);
        (s !== o || s === o && this.options.ns.indexOf(h[0]) > -1) && (u = h.shift()), i = h.join(o);
      }
      return typeof u == "string" && (u = [u]), {
        key: i,
        namespaces: u
      };
    }
  }, {
    key: "translate",
    value: function(i, a, s) {
      var o = this;
      if (X(a) !== "object" && this.options.overloadTranslationOptionHandler && (a = this.options.overloadTranslationOptionHandler(arguments)), X(a) === "object" && (a = z({}, a)), a || (a = {}), i == null)
        return "";
      Array.isArray(i) || (i = [String(i)]);
      var u = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails, d = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, f = this.extractFromKey(i[i.length - 1], a), l = f.key, h = f.namespaces, p = h[h.length - 1], v = a.lng || this.language, S = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (v && v.toLowerCase() === "cimode") {
        if (S) {
          var b = a.nsSeparator || this.options.nsSeparator;
          return u ? {
            res: "".concat(p).concat(b).concat(l),
            usedKey: l,
            exactUsedKey: l,
            usedLng: v,
            usedNS: p
          } : "".concat(p).concat(b).concat(l);
        }
        return u ? {
          res: l,
          usedKey: l,
          exactUsedKey: l,
          usedLng: v,
          usedNS: p
        } : l;
      }
      var y = this.resolve(i, a), m = y && y.res, E = y && y.usedKey || l, R = y && y.exactUsedKey || l, k = Object.prototype.toString.apply(m), C = ["[object Number]", "[object Function]", "[object RegExp]"], _ = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays, P = !this.i18nFormat || this.i18nFormat.handleAsObject, j = typeof m != "string" && typeof m != "boolean" && typeof m != "number";
      if (P && m && j && C.indexOf(k) < 0 && !(typeof _ == "string" && k === "[object Array]")) {
        if (!a.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var F = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(E, m, z(z({}, a), {}, {
            ns: h
          })) : "key '".concat(l, " (").concat(this.language, ")' returned an object instead of string.");
          return u ? (y.res = F, y) : F;
        }
        if (d) {
          var q = k === "[object Array]", ae = q ? [] : {}, W = q ? R : E;
          for (var g in m)
            if (Object.prototype.hasOwnProperty.call(m, g)) {
              var O = "".concat(W).concat(d).concat(g);
              ae[g] = this.translate(O, z(z({}, a), {
                joinArrays: !1,
                ns: h
              })), ae[g] === O && (ae[g] = m[g]);
            }
          m = ae;
        }
      } else if (P && typeof _ == "string" && k === "[object Array]")
        m = m.join(_), m && (m = this.extendTranslation(m, i, a, s));
      else {
        var L = !1, B = !1, Q = a.count !== void 0 && typeof a.count != "string", I = t.hasDefaultValue(a), fe = Q ? this.pluralResolver.getSuffix(v, a.count, a) : "", Z = a["defaultValue".concat(fe)] || a.defaultValue;
        !this.isValidLookup(m) && I && (L = !0, m = Z), this.isValidLookup(m) || (B = !0, m = l);
        var ye = a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, it = ye && B ? void 0 : m, Pe = I && Z !== m && this.options.updateMissing;
        if (B || L || Pe) {
          if (this.logger.log(Pe ? "updateKey" : "missingKey", v, p, l, Pe ? Z : m), d) {
            var at = this.resolve(l, z(z({}, a), {}, {
              keySeparator: !1
            }));
            at && at.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var de = [], me = this.languageUtils.getFallbackCodes(this.options.fallbackLng, a.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && me && me[0])
            for (var be = 0; be < me.length; be++)
              de.push(me[be]);
          else
            this.options.saveMissingTo === "all" ? de = this.languageUtils.toResolveHierarchy(a.lng || this.language) : de.push(a.lng || this.language);
          var Le = function(Se, Te, st) {
            var ot = I && st !== m ? st : it;
            o.options.missingKeyHandler ? o.options.missingKeyHandler(Se, p, Te, ot, Pe, a) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(Se, p, Te, ot, Pe, a), o.emit("missingKey", Se, p, Te, m);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && Q ? de.forEach(function(we) {
            o.pluralResolver.getSuffixes(we, a).forEach(function(Se) {
              Le([we], l + Se, a["defaultValue".concat(Se)] || Z);
            });
          }) : Le(de, l, Z));
        }
        m = this.extendTranslation(m, i, a, y, s), B && m === l && this.options.appendNamespaceToMissingKey && (m = "".concat(p, ":").concat(l)), (B || L) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(p, ":").concat(l) : l, L ? m : void 0) : m = this.options.parseMissingKeyHandler(m));
      }
      return u ? (y.res = m, y) : m;
    }
  }, {
    key: "extendTranslation",
    value: function(i, a, s, o, u) {
      var d = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        i = this.i18nFormat.parse(i, z(z({}, this.options.interpolation.defaultVariables), s), o.usedLng, o.usedNS, o.usedKey, {
          resolved: o
        });
      else if (!s.skipInterpolation) {
        s.interpolation && this.interpolator.init(z(z({}, s), {
          interpolation: z(z({}, this.options.interpolation), s.interpolation)
        }));
        var f = typeof i == "string" && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), l;
        if (f) {
          var h = i.match(this.interpolator.nestingRegexp);
          l = h && h.length;
        }
        var p = s.replace && typeof s.replace != "string" ? s.replace : s;
        if (this.options.interpolation.defaultVariables && (p = z(z({}, this.options.interpolation.defaultVariables), p)), i = this.interpolator.interpolate(i, p, s.lng || this.language, s), f) {
          var v = i.match(this.interpolator.nestingRegexp), S = v && v.length;
          l < S && (s.nest = !1);
        }
        !s.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (s.lng = o.usedLng), s.nest !== !1 && (i = this.interpolator.nest(i, function() {
          for (var m = arguments.length, E = new Array(m), R = 0; R < m; R++)
            E[R] = arguments[R];
          return u && u[0] === E[0] && !s.context ? (d.logger.warn("It seems you are nesting recursively key: ".concat(E[0], " in key: ").concat(a[0])), null) : d.translate.apply(d, E.concat([a]));
        }, s)), s.interpolation && this.interpolator.reset();
      }
      var b = s.postProcess || this.options.postProcess, y = typeof b == "string" ? [b] : b;
      return i != null && y && y.length && s.applyPostProcessor !== !1 && (i = ni.handle(y, i, a, this.options && this.options.postProcessPassResolved ? z({
        i18nResolved: o
      }, s) : s, this)), i;
    }
  }, {
    key: "resolve",
    value: function(i) {
      var a = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o, u, d, f, l;
      return typeof i == "string" && (i = [i]), i.forEach(function(h) {
        if (!a.isValidLookup(o)) {
          var p = a.extractFromKey(h, s), v = p.key;
          u = v;
          var S = p.namespaces;
          a.options.fallbackNS && (S = S.concat(a.options.fallbackNS));
          var b = s.count !== void 0 && typeof s.count != "string", y = b && !s.ordinal && s.count === 0 && a.pluralResolver.shouldUseIntlApi(), m = s.context !== void 0 && (typeof s.context == "string" || typeof s.context == "number") && s.context !== "", E = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
          S.forEach(function(R) {
            a.isValidLookup(o) || (l = R, !cn["".concat(E[0], "-").concat(R)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(l) && (cn["".concat(E[0], "-").concat(R)] = !0, a.logger.warn('key "'.concat(u, '" for languages "').concat(E.join(", "), `" won't get resolved as namespace "`).concat(l, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), E.forEach(function(k) {
              if (!a.isValidLookup(o)) {
                f = k;
                var C = [v];
                if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                  a.i18nFormat.addLookupKeys(C, v, k, R, s);
                else {
                  var _;
                  b && (_ = a.pluralResolver.getSuffix(k, s.count, s));
                  var P = "".concat(a.options.pluralSeparator, "zero");
                  if (b && (C.push(v + _), y && C.push(v + P)), m) {
                    var j = "".concat(v).concat(a.options.contextSeparator).concat(s.context);
                    C.push(j), b && (C.push(j + _), y && C.push(j + P));
                  }
                }
                for (var F; F = C.pop(); )
                  a.isValidLookup(o) || (d = F, o = a.getResource(k, R, F, s));
              }
            }));
          });
        }
      }), {
        res: o,
        usedKey: u,
        exactUsedKey: d,
        usedLng: f,
        usedNS: l
      };
    }
  }, {
    key: "isValidLookup",
    value: function(i) {
      return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === "");
    }
  }, {
    key: "getResource",
    value: function(i, a, s) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(i, a, s, o) : this.resourceStore.getResource(i, a, s, o);
    }
  }], [{
    key: "hasDefaultValue",
    value: function(i) {
      var a = "defaultValue";
      for (var s in i)
        if (Object.prototype.hasOwnProperty.call(i, s) && a === s.substring(0, a.length) && i[s] !== void 0)
          return !0;
      return !1;
    }
  }]), t;
}(Ee);
function Qt(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
var dn = function() {
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
        return this.options.lowerCaseLng ? i = i.map(function(a) {
          return a.toLowerCase();
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
      return t.forEach(function(a) {
        if (!i) {
          var s = r.formatLanguageCode(a);
          (!r.options.supportedLngs || r.isSupportedCode(s)) && (i = s);
        }
      }), !i && this.options.supportedLngs && t.forEach(function(a) {
        if (!i) {
          var s = r.getLanguagePartFromCode(a);
          if (r.isSupportedCode(s))
            return i = s;
          i = r.options.supportedLngs.find(function(o) {
            if (o === s)
              return o;
            if (!(o.indexOf("-") < 0 && s.indexOf("-") < 0) && o.indexOf(s) === 0)
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
      var i = this, a = this.getFallbackCodes(r || this.options.fallbackLng || [], t), s = [], o = function(d) {
        d && (i.isSupportedCode(d) ? s.push(d) : i.logger.warn("rejecting language code not found in supportedLngs: ".concat(d)));
      };
      return typeof t == "string" && t.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)), a.forEach(function(u) {
        s.indexOf(u) < 0 && o(i.formatLanguageCode(u));
      }), s;
    }
  }]), n;
}(), ws = [{
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
}], Ss = {
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
}, Os = ["v1", "v2", "v3"], hn = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Rs() {
  var n = {};
  return ws.forEach(function(e) {
    e.lngs.forEach(function(t) {
      n[t] = {
        numbers: e.nr,
        plurals: Ss[e.fc]
      };
    });
  }), n;
}
var Es = function() {
  function n(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    re(this, n), this.languageUtils = e, this.options = t, this.logger = oe.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Rs();
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
      return this.getSuffixes(t, i).map(function(a) {
        return "".concat(r).concat(a);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(t) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(t, i);
      return a ? this.shouldUseIntlApi() ? a.resolvedOptions().pluralCategories.sort(function(s, o) {
        return hn[s] - hn[o];
      }).map(function(s) {
        return "".concat(r.options.prepend).concat(s);
      }) : a.numbers.map(function(s) {
        return r.getSuffix(t, s, i);
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
      var i = this, a = t.noAbs ? t.plurals(r) : t.plurals(Math.abs(r)), s = t.numbers[a];
      this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (s === 2 ? s = "plural" : s === 1 && (s = ""));
      var o = function() {
        return i.options.prepend && s.toString() ? i.options.prepend + s.toString() : s.toString();
      };
      return this.options.compatibilityJSON === "v1" ? s === 1 ? "" : typeof s == "number" ? "_plural_".concat(s.toString()) : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !Os.includes(this.options.compatibilityJSON);
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
function ie(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? pn(Object(t), !0).forEach(function(r) {
      le(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : pn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function gn(n, e, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = cs(n, e, t);
  return !a && i && typeof t == "string" && (a = Ot(n, t, r), a === void 0 && (a = Ot(e, t, r))), a;
}
var xs = function() {
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
      this.escape = r.escape !== void 0 ? r.escape : ds, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? Ne(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? Ne(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? Ne(r.nestingPrefix) : r.nestingPrefixEscaped || Ne("$t("), this.nestingSuffix = r.nestingSuffix ? Ne(r.nestingSuffix) : r.nestingSuffixEscaped || Ne(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp();
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
      var s = this, o, u, d, f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function l(b) {
        return b.replace(/\$/g, "$$$$");
      }
      var h = function(y) {
        if (y.indexOf(s.formatSeparator) < 0) {
          var m = gn(r, f, y, s.options.keySeparator, s.options.ignoreJSONStructure);
          return s.alwaysFormat ? s.format(m, void 0, i, ie(ie(ie({}, a), r), {}, {
            interpolationkey: y
          })) : m;
        }
        var E = y.split(s.formatSeparator), R = E.shift().trim(), k = E.join(s.formatSeparator).trim();
        return s.format(gn(r, f, R, s.options.keySeparator, s.options.ignoreJSONStructure), k, i, ie(ie(ie({}, a), r), {}, {
          interpolationkey: R
        }));
      };
      this.resetRegExp();
      var p = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, v = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, S = [{
        regex: this.regexpUnescape,
        safeValue: function(y) {
          return l(y);
        }
      }, {
        regex: this.regexp,
        safeValue: function(y) {
          return s.escapeValue ? l(s.escape(y)) : l(y);
        }
      }];
      return S.forEach(function(b) {
        for (d = 0; o = b.regex.exec(t); ) {
          var y = o[1].trim();
          if (u = h(y), u === void 0)
            if (typeof p == "function") {
              var m = p(t, o, a);
              u = typeof m == "string" ? m : "";
            } else if (a && Object.prototype.hasOwnProperty.call(a, y))
              u = "";
            else if (v) {
              u = o[0];
              continue;
            } else
              s.logger.warn("missed to pass in variable ".concat(y, " for interpolating ").concat(t)), u = "";
          else
            typeof u != "string" && !s.useRawValueToEscape && (u = sn(u));
          var E = b.safeValue(u);
          if (t = t.replace(o[0], E), v ? (b.regex.lastIndex += u.length, b.regex.lastIndex -= o[0].length) : b.regex.lastIndex = 0, d++, d >= s.maxReplaces)
            break;
        }
      }), t;
    }
  }, {
    key: "nest",
    value: function(t, r) {
      var i = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, o, u;
      function d(p, v) {
        var S = this.nestingOptionsSeparator;
        if (p.indexOf(S) < 0)
          return p;
        var b = p.split(new RegExp("".concat(S, "[ ]*{"))), y = "{".concat(b[1]);
        p = b[0], y = this.interpolate(y, u);
        var m = y.match(/'/g), E = y.match(/"/g);
        (m && m.length % 2 === 0 && !E || E.length % 2 !== 0) && (y = y.replace(/'/g, '"'));
        try {
          u = JSON.parse(y), v && (u = ie(ie({}, v), u));
        } catch (R) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(p), R), "".concat(p).concat(S).concat(y);
        }
        return delete u.defaultValue, p;
      }
      for (; s = this.nestingRegexp.exec(t); ) {
        var f = [];
        u = ie({}, a), u = u.replace && typeof u.replace != "string" ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
        var l = !1;
        if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
          var h = s[1].split(this.formatSeparator).map(function(p) {
            return p.trim();
          });
          s[1] = h.shift(), f = h, l = !0;
        }
        if (o = r(d.call(this, s[1].trim(), u), u), o && s[0] === t && typeof o != "string")
          return o;
        typeof o != "string" && (o = sn(o)), o || (this.logger.warn("missed to resolve ".concat(s[1], " for nesting ").concat(t)), o = ""), l && (o = f.reduce(function(p, v) {
          return i.format(p, v, a.lng, ie(ie({}, a), {}, {
            interpolationkey: s[1].trim()
          }));
        }, o.trim())), t = t.replace(s[0], o), this.regexp.lastIndex = 0;
      }
      return t;
    }
  }]), n;
}();
function vn(n, e) {
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
    e % 2 ? vn(Object(t), !0).forEach(function(r) {
      le(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : vn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ps(n) {
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
      a.forEach(function(s) {
        if (s) {
          var o = s.split(":"), u = as(o), d = u[0], f = u.slice(1), l = f.join(":").trim().replace(/^'+|'+$/g, "");
          t[d.trim()] || (t[d.trim()] = l), l === "false" && (t[d.trim()] = !1), l === "true" && (t[d.trim()] = !0), isNaN(l) || (t[d.trim()] = parseInt(l, 10));
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
    var s = i + JSON.stringify(a), o = e[s];
    return o || (o = n(i, a), e[s] = o), o(r);
  };
}
var Cs = function() {
  function n() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    re(this, n), this.logger = oe.create("formatter"), this.options = e, this.formats = {
      number: Fe(function(t, r) {
        var i = new Intl.NumberFormat(t, pe({}, r));
        return function(a) {
          return i.format(a);
        };
      }),
      currency: Fe(function(t, r) {
        var i = new Intl.NumberFormat(t, pe(pe({}, r), {}, {
          style: "currency"
        }));
        return function(a) {
          return i.format(a);
        };
      }),
      datetime: Fe(function(t, r) {
        var i = new Intl.DateTimeFormat(t, pe({}, r));
        return function(a) {
          return i.format(a);
        };
      }),
      relativetime: Fe(function(t, r) {
        var i = new Intl.RelativeTimeFormat(t, pe({}, r));
        return function(a) {
          return i.format(a, r.range || "day");
        };
      }),
      list: Fe(function(t, r) {
        var i = new Intl.ListFormat(t, pe({}, r));
        return function(a) {
          return i.format(a);
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
      this.formats[t.toLowerCase().trim()] = Fe(r);
    }
  }, {
    key: "format",
    value: function(t, r, i) {
      var a = this, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = r.split(this.formatSeparator), u = o.reduce(function(d, f) {
        var l = Ps(f), h = l.formatName, p = l.formatOptions;
        if (a.formats[h]) {
          var v = d;
          try {
            var S = s && s.formatParams && s.formatParams[s.interpolationkey] || {}, b = S.locale || S.lng || s.locale || s.lng || i;
            v = a.formats[h](d, b, pe(pe(pe({}, p), s), S));
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
function yn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function mn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yn(Object(t), !0).forEach(function(r) {
      le(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : yn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function _s(n) {
  var e = ks();
  return function() {
    var r = ue(n), i;
    if (e) {
      var a = ue(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return rt(this, i);
  };
}
function ks() {
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
function js(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
var Ls = function(n) {
  Tt(t, n);
  var e = _s(t);
  function t(r, i, a) {
    var s, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return re(this, t), s = e.call(this), Dt && Ee.call(Re(s)), s.backend = r, s.store = i, s.services = a, s.languageUtils = a.languageUtils, s.options = o, s.logger = oe.create("backendConnector"), s.waitingReads = [], s.maxParallelReads = o.maxParallelReads || 10, s.readingCalls = 0, s.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, s.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, s.state = {}, s.queue = [], s.backend && s.backend.init && s.backend.init(a, o.backend, o), s;
  }
  return ne(t, [{
    key: "queueLoad",
    value: function(i, a, s, o) {
      var u = this, d = {}, f = {}, l = {}, h = {};
      return i.forEach(function(p) {
        var v = !0;
        a.forEach(function(S) {
          var b = "".concat(p, "|").concat(S);
          !s.reload && u.store.hasResourceBundle(p, S) ? u.state[b] = 2 : u.state[b] < 0 || (u.state[b] === 1 ? f[b] === void 0 && (f[b] = !0) : (u.state[b] = 1, v = !1, f[b] === void 0 && (f[b] = !0), d[b] === void 0 && (d[b] = !0), h[S] === void 0 && (h[S] = !0)));
        }), v || (l[p] = !0);
      }), (Object.keys(d).length || Object.keys(f).length) && this.queue.push({
        pending: f,
        pendingCount: Object.keys(f).length,
        loaded: {},
        errors: [],
        callback: o
      }), {
        toLoad: Object.keys(d),
        pending: Object.keys(f),
        toLoadLanguages: Object.keys(l),
        toLoadNamespaces: Object.keys(h)
      };
    }
  }, {
    key: "loaded",
    value: function(i, a, s) {
      var o = i.split("|"), u = o[0], d = o[1];
      a && this.emit("failedLoading", u, d, a), s && this.store.addResourceBundle(u, d, s), this.state[i] = a ? -1 : 2;
      var f = {};
      this.queue.forEach(function(l) {
        ls(l.loaded, [u], d), js(l, i), a && l.errors.push(a), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(function(h) {
          f[h] || (f[h] = {});
          var p = l.loaded[h];
          p.length && p.forEach(function(v) {
            f[h][v] === void 0 && (f[h][v] = !0);
          });
        }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
      }), this.emit("loaded", f), this.queue = this.queue.filter(function(l) {
        return !l.done;
      });
    }
  }, {
    key: "read",
    value: function(i, a, s) {
      var o = this, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, f = arguments.length > 5 ? arguments[5] : void 0;
      if (!i.length)
        return f(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: i,
          ns: a,
          fcName: s,
          tried: u,
          wait: d,
          callback: f
        });
        return;
      }
      this.readingCalls++;
      var l = function(S, b) {
        if (o.readingCalls--, o.waitingReads.length > 0) {
          var y = o.waitingReads.shift();
          o.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
        }
        if (S && b && u < o.maxRetries) {
          setTimeout(function() {
            o.read.call(o, i, a, s, u + 1, d * 2, f);
          }, d);
          return;
        }
        f(S, b);
      }, h = this.backend[s].bind(this.backend);
      if (h.length === 2) {
        try {
          var p = h(i, a);
          p && typeof p.then == "function" ? p.then(function(v) {
            return l(null, v);
          }).catch(l) : l(null, p);
        } catch (v) {
          l(v);
        }
        return;
      }
      return h(i, a, l);
    }
  }, {
    key: "prepareLoading",
    value: function(i, a) {
      var s = this, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return this.logger.warn("No backend was added via i18next.use. Will not load resources."), u && u();
      typeof i == "string" && (i = this.languageUtils.toResolveHierarchy(i)), typeof a == "string" && (a = [a]);
      var d = this.queueLoad(i, a, o, u);
      if (!d.toLoad.length)
        return d.pending.length || u(), null;
      d.toLoad.forEach(function(f) {
        s.loadOne(f);
      });
    }
  }, {
    key: "load",
    value: function(i, a, s) {
      this.prepareLoading(i, a, {}, s);
    }
  }, {
    key: "reload",
    value: function(i, a, s) {
      this.prepareLoading(i, a, {
        reload: !0
      }, s);
    }
  }, {
    key: "loadOne",
    value: function(i) {
      var a = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = i.split("|"), u = o[0], d = o[1];
      this.read(u, d, "read", void 0, void 0, function(f, l) {
        f && a.logger.warn("".concat(s, "loading namespace ").concat(d, " for language ").concat(u, " failed"), f), !f && l && a.logger.log("".concat(s, "loaded namespace ").concat(d, " for language ").concat(u), l), a.loaded(i, f, l);
      });
    }
  }, {
    key: "saveMissing",
    value: function(i, a, s, o, u) {
      var d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, f = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : function() {
      };
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(a)) {
        this.logger.warn('did not save key "'.concat(s, '" as the namespace "').concat(a, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (!(s == null || s === "")) {
        if (this.backend && this.backend.create) {
          var l = mn(mn({}, d), {}, {
            isUpdate: u
          }), h = this.backend.create.bind(this.backend);
          if (h.length < 6)
            try {
              var p;
              h.length === 5 ? p = h(i, a, s, o, l) : p = h(i, a, s, o), p && typeof p.then == "function" ? p.then(function(v) {
                return f(null, v);
              }).catch(f) : f(null, p);
            } catch (v) {
              f(v);
            }
          else
            h(i, a, s, o, f, l);
        }
        !i || !i[0] || this.store.addResource(i[0], a, s, o);
      }
    }
  }]), t;
}(Ee);
function bn() {
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
function wn(n) {
  return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n;
}
function Sn(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function se(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sn(Object(t), !0).forEach(function(r) {
      le(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Sn(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ts(n) {
  var e = Ds();
  return function() {
    var r = ue(n), i;
    if (e) {
      var a = ue(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return rt(this, i);
  };
}
function Ds() {
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
function dt() {
}
function Is(n) {
  var e = Object.getOwnPropertyNames(Object.getPrototypeOf(n));
  e.forEach(function(t) {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
var Rt = function(n) {
  Tt(t, n);
  var e = Ts(t);
  function t() {
    var r, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (re(this, t), r = e.call(this), Dt && Ee.call(Re(r)), r.options = wn(i), r.services = {}, r.logger = oe, r.modules = {
      external: []
    }, Is(Re(r)), a && !r.isInitialized && !i.isClone) {
      if (!r.options.initImmediate)
        return r.init(i, a), rt(r, Re(r));
      setTimeout(function() {
        r.init(i, a);
      }, 0);
    }
    return r;
  }
  return ne(t, [{
    key: "init",
    value: function() {
      var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
      typeof a == "function" && (s = a, a = {}), !a.defaultNS && a.defaultNS !== !1 && a.ns && (typeof a.ns == "string" ? a.defaultNS = a.ns : a.ns.indexOf("translation") < 0 && (a.defaultNS = a.ns[0]));
      var o = bn();
      this.options = se(se(se({}, o), this.options), wn(a)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = se(se({}, o.interpolation), this.options.interpolation)), a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator), a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator);
      function u(y) {
        return y ? typeof y == "function" ? new y() : y : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? oe.init(u(this.modules.logger), this.options) : oe.init(null, this.options);
        var d;
        this.modules.formatter ? d = this.modules.formatter : typeof Intl < "u" && (d = Cs);
        var f = new dn(this.options);
        this.store = new ys(this.options.resources, this.options);
        var l = this.services;
        l.logger = oe, l.resourceStore = this.store, l.languageUtils = f, l.pluralResolver = new Es(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), d && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (l.formatter = u(d), l.formatter.init(l, this.options), this.options.interpolation.format = l.formatter.format.bind(l.formatter)), l.interpolator = new xs(this.options), l.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, l.backendConnector = new Ls(u(this.modules.backend), l.resourceStore, l, this.options), l.backendConnector.on("*", function(y) {
          for (var m = arguments.length, E = new Array(m > 1 ? m - 1 : 0), R = 1; R < m; R++)
            E[R - 1] = arguments[R];
          i.emit.apply(i, [y].concat(E));
        }), this.modules.languageDetector && (l.languageDetector = u(this.modules.languageDetector), l.languageDetector.init && l.languageDetector.init(l, this.options.detection, this.options)), this.modules.i18nFormat && (l.i18nFormat = u(this.modules.i18nFormat), l.i18nFormat.init && l.i18nFormat.init(this)), this.translator = new fn(this.services, this.options), this.translator.on("*", function(y) {
          for (var m = arguments.length, E = new Array(m > 1 ? m - 1 : 0), R = 1; R < m; R++)
            E[R - 1] = arguments[R];
          i.emit.apply(i, [y].concat(E));
        }), this.modules.external.forEach(function(y) {
          y.init && y.init(i);
        });
      }
      if (this.format = this.options.interpolation.format, s || (s = dt), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
      var S = Ke(), b = function() {
        var m = function(R, k) {
          i.isInitialized && !i.initializedStoreOnce && i.logger.warn("init: i18next is already initialized. You should call init just once!"), i.isInitialized = !0, i.options.isClone || i.logger.log("initialized", i.options), i.emit("initialized", i.options), S.resolve(k), s(R, k);
        };
        if (i.languages && i.options.compatibilityAPI !== "v1" && !i.isInitialized)
          return m(null, i.t.bind(i));
        i.changeLanguage(i.options.lng, m);
      };
      return this.options.resources || !this.options.initImmediate ? b() : setTimeout(b, 0), S;
    }
  }, {
    key: "loadResources",
    value: function(i) {
      var a = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dt, o = s, u = typeof i == "string" ? i : this.language;
      if (typeof i == "function" && (o = i), !this.options.resources || this.options.partialBundledLanguages) {
        if (u && u.toLowerCase() === "cimode")
          return o();
        var d = [], f = function(p) {
          if (p) {
            var v = a.services.languageUtils.toResolveHierarchy(p);
            v.forEach(function(S) {
              d.indexOf(S) < 0 && d.push(S);
            });
          }
        };
        if (u)
          f(u);
        else {
          var l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          l.forEach(function(h) {
            return f(h);
          });
        }
        this.options.preload && this.options.preload.forEach(function(h) {
          return f(h);
        }), this.services.backendConnector.load(d, this.options.ns, function(h) {
          !h && !a.resolvedLanguage && a.language && a.setResolvedLanguage(a.language), o(h);
        });
      } else
        o(null);
    }
  }, {
    key: "reloadResources",
    value: function(i, a, s) {
      var o = Ke();
      return i || (i = this.languages), a || (a = this.options.ns), s || (s = dt), this.services.backendConnector.reload(i, a, function(u) {
        o.resolve(), s(u);
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
        for (var a = 0; a < this.languages.length; a++) {
          var s = this.languages[a];
          if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
            this.resolvedLanguage = s;
            break;
          }
        }
    }
  }, {
    key: "changeLanguage",
    value: function(i, a) {
      var s = this;
      this.isLanguageChangingTo = i;
      var o = Ke();
      this.emit("languageChanging", i);
      var u = function(h) {
        s.language = h, s.languages = s.services.languageUtils.toResolveHierarchy(h), s.resolvedLanguage = void 0, s.setResolvedLanguage(h);
      }, d = function(h, p) {
        p ? (u(p), s.translator.changeLanguage(p), s.isLanguageChangingTo = void 0, s.emit("languageChanged", p), s.logger.log("languageChanged", p)) : s.isLanguageChangingTo = void 0, o.resolve(function() {
          return s.t.apply(s, arguments);
        }), a && a(h, function() {
          return s.t.apply(s, arguments);
        });
      }, f = function(h) {
        !i && !h && s.services.languageDetector && (h = []);
        var p = typeof h == "string" ? h : s.services.languageUtils.getBestMatchFromCodes(h);
        p && (s.language || u(p), s.translator.language || s.translator.changeLanguage(p), s.services.languageDetector && s.services.languageDetector.cacheUserLanguage && s.services.languageDetector.cacheUserLanguage(p)), s.loadResources(p, function(v) {
          d(v, p);
        });
      };
      return !i && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(i), o;
    }
  }, {
    key: "getFixedT",
    value: function(i, a, s) {
      var o = this, u = function d(f, l) {
        var h;
        if (X(l) !== "object") {
          for (var p = arguments.length, v = new Array(p > 2 ? p - 2 : 0), S = 2; S < p; S++)
            v[S - 2] = arguments[S];
          h = o.options.overloadTranslationOptionHandler([f, l].concat(v));
        } else
          h = se({}, l);
        h.lng = h.lng || d.lng, h.lngs = h.lngs || d.lngs, h.ns = h.ns || d.ns, h.keyPrefix = h.keyPrefix || s || d.keyPrefix;
        var b = o.options.keySeparator || ".", y;
        return h.keyPrefix && Array.isArray(f) ? y = f.map(function(m) {
          return "".concat(h.keyPrefix).concat(b).concat(m);
        }) : y = h.keyPrefix ? "".concat(h.keyPrefix).concat(b).concat(f) : f, o.t(y, h);
      };
      return typeof i == "string" ? u.lng = i : u.lngs = i, u.ns = a, u.keyPrefix = s, u;
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
      var a = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized)
        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
      if (!this.languages || !this.languages.length)
        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
      var o = s.lng || this.resolvedLanguage || this.languages[0], u = this.options ? this.options.fallbackLng : !1, d = this.languages[this.languages.length - 1];
      if (o.toLowerCase() === "cimode")
        return !0;
      var f = function(p, v) {
        var S = a.services.backendConnector.state["".concat(p, "|").concat(v)];
        return S === -1 || S === 2;
      };
      if (s.precheck) {
        var l = s.precheck(this, f);
        if (l !== void 0)
          return l;
      }
      return !!(this.hasResourceBundle(o, i) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(o, i) && (!u || f(d, i)));
    }
  }, {
    key: "loadNamespaces",
    value: function(i, a) {
      var s = this, o = Ke();
      return this.options.ns ? (typeof i == "string" && (i = [i]), i.forEach(function(u) {
        s.options.ns.indexOf(u) < 0 && s.options.ns.push(u);
      }), this.loadResources(function(u) {
        o.resolve(), a && a(u);
      }), o) : (a && a(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(i, a) {
      var s = Ke();
      typeof i == "string" && (i = [i]);
      var o = this.options.preload || [], u = i.filter(function(d) {
        return o.indexOf(d) < 0;
      });
      return u.length ? (this.options.preload = o.concat(u), this.loadResources(function(d) {
        s.resolve(), a && a(d);
      }), s) : (a && a(), Promise.resolve());
    }
  }, {
    key: "dir",
    value: function(i) {
      if (i || (i = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !i)
        return "rtl";
      var a = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services && this.services.languageUtils || new dn(bn());
      return a.indexOf(s.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var i = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dt, o = se(se(se({}, this.options), a), {
        isClone: !0
      }), u = new t(o);
      (a.debug !== void 0 || a.prefix !== void 0) && (u.logger = u.logger.clone(a));
      var d = ["store", "services", "language"];
      return d.forEach(function(f) {
        u[f] = i[f];
      }), u.services = se({}, this.services), u.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u.translator = new fn(u.services, u.options), u.translator.on("*", function(f) {
        for (var l = arguments.length, h = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++)
          h[p - 1] = arguments[p];
        u.emit.apply(u, [f].concat(h));
      }), u.init(o, s), u.translator.options = u.options, u.translator.backendConnector.services.utils = {
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
}(Ee);
le(Rt, "createInstance", function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return new Rt(n, e);
});
var $ = Rt.createInstance();
$.createInstance = Rt.createInstance;
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
var ii = [], Ns = ii.forEach, Fs = ii.slice;
function As(n) {
  return Ns.call(Fs.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
var On = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Us = function(e, t, r) {
  var i = r || {};
  i.path = i.path || "/";
  var a = encodeURIComponent(t), s = "".concat(e, "=").concat(a);
  if (i.maxAge > 0) {
    var o = i.maxAge - 0;
    if (Number.isNaN(o))
      throw new Error("maxAge should be a Number");
    s += "; Max-Age=".concat(Math.floor(o));
  }
  if (i.domain) {
    if (!On.test(i.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=".concat(i.domain);
  }
  if (i.path) {
    if (!On.test(i.path))
      throw new TypeError("option path is invalid");
    s += "; Path=".concat(i.path);
  }
  if (i.expires) {
    if (typeof i.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    s += "; Expires=".concat(i.expires.toUTCString());
  }
  if (i.httpOnly && (s += "; HttpOnly"), i.secure && (s += "; Secure"), i.sameSite) {
    var u = typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite;
    switch (u) {
      case !0:
        s += "; SameSite=Strict";
        break;
      case "lax":
        s += "; SameSite=Lax";
        break;
      case "strict":
        s += "; SameSite=Strict";
        break;
      case "none":
        s += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return s;
}, Rn = {
  create: function(e, t, r, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    r && (a.expires = /* @__PURE__ */ new Date(), a.expires.setTime(a.expires.getTime() + r * 60 * 1e3)), i && (a.domain = i), document.cookie = Us(e, encodeURIComponent(t), a);
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
}, Ms = {
  name: "cookie",
  lookup: function(e) {
    var t;
    if (e.lookupCookie && typeof document < "u") {
      var r = Rn.read(e.lookupCookie);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupCookie && typeof document < "u" && Rn.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
  }
}, qs = {
  name: "querystring",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var r = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var i = r.substring(1), a = i.split("&"), s = 0; s < a.length; s++) {
        var o = a[s].indexOf("=");
        if (o > 0) {
          var u = a[s].substring(0, o);
          u === e.lookupQuerystring && (t = a[s].substring(o + 1));
        }
      }
    }
    return t;
  }
}, We = null, En = function() {
  if (We !== null)
    return We;
  try {
    We = window !== "undefined" && window.localStorage !== null;
    var e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    We = !1;
  }
  return We;
}, Bs = {
  name: "localStorage",
  lookup: function(e) {
    var t;
    if (e.lookupLocalStorage && En()) {
      var r = window.localStorage.getItem(e.lookupLocalStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupLocalStorage && En() && window.localStorage.setItem(t.lookupLocalStorage, e);
  }
}, $e = null, xn = function() {
  if ($e !== null)
    return $e;
  try {
    $e = window !== "undefined" && window.sessionStorage !== null;
    var e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    $e = !1;
  }
  return $e;
}, Qs = {
  name: "sessionStorage",
  lookup: function(e) {
    var t;
    if (e.lookupSessionStorage && xn()) {
      var r = window.sessionStorage.getItem(e.lookupSessionStorage);
      r && (t = r);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupSessionStorage && xn() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
  }
}, Hs = {
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
}, Vs = {
  name: "htmlTag",
  lookup: function(e) {
    var t, r = e.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (t = r.getAttribute("lang")), t;
  }
}, Ks = {
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
}, Ws = {
  name: "subdomain",
  lookup: function(e) {
    var t = typeof e.lookupFromSubdomainIndex == "number" ? e.lookupFromSubdomainIndex + 1 : 1, r = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (r)
      return r[t];
  }
};
function $s() {
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
var ai = /* @__PURE__ */ function() {
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
      }, this.options = As(r, this.options || {}, $s()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(Ms), this.addDetector(qs), this.addDetector(Bs), this.addDetector(Qs), this.addDetector(Hs), this.addDetector(Vs), this.addDetector(Ks), this.addDetector(Ws);
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
          var s = r.detectors[a].lookup(r.options);
          s && typeof s == "string" && (s = [s]), s && (i = i.concat(s));
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
ai.type = "languageDetector";
function rr(n) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, rr(n);
}
var si = [], zs = si.forEach, Js = si.slice;
function nr(n) {
  return zs.call(Js.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
  }), n;
}
function oi() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : rr(XMLHttpRequest)) === "object";
}
function Ys(n) {
  return !!n && typeof n.then == "function";
}
function Gs(n) {
  return Ys(n) ? n : Promise.resolve(n);
}
function Zs(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ir = { exports: {} }, ht = { exports: {} }, Pn;
function Xs() {
  return Pn || (Pn = 1, function(n, e) {
    var t = typeof self < "u" ? self : vt, r = function() {
      function a() {
        this.fetch = !1, this.DOMException = t.DOMException;
      }
      return a.prototype = t, new a();
    }();
    (function(a) {
      (function(s) {
        var o = {
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
        function l(g) {
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
          g = l(g), O = h(O);
          var L = this.map[g];
          this.map[g] = L ? L + ", " + O : O;
        }, v.prototype.delete = function(g) {
          delete this.map[l(g)];
        }, v.prototype.get = function(g) {
          return g = l(g), this.has(g) ? this.map[g] : null;
        }, v.prototype.has = function(g) {
          return this.map.hasOwnProperty(l(g));
        }, v.prototype.set = function(g, O) {
          this.map[l(g)] = h(O);
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
        function S(g) {
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
            var g = S(this);
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
            return this._bodyArrayBuffer ? S(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
          }), this.text = function() {
            var g = S(this);
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
        var ae = [301, 302, 303, 307, 308];
        q.redirect = function(g, O) {
          if (ae.indexOf(O) === -1)
            throw new RangeError("Invalid status code");
          return new q(null, { status: O, headers: { location: g } });
        }, s.DOMException = a.DOMException;
        try {
          new s.DOMException();
        } catch {
          s.DOMException = function(O, L) {
            this.message = O, this.name = L;
            var B = Error(O);
            this.stack = B.stack;
          }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException;
        }
        function W(g, O) {
          return new Promise(function(L, B) {
            var Q = new P(g, O);
            if (Q.signal && Q.signal.aborted)
              return B(new s.DOMException("Aborted", "AbortError"));
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
              B(new s.DOMException("Aborted", "AbortError"));
            }, I.open(Q.method, Q.url, !0), Q.credentials === "include" ? I.withCredentials = !0 : Q.credentials === "omit" && (I.withCredentials = !1), "responseType" in I && o.blob && (I.responseType = "blob"), Q.headers.forEach(function(Z, ye) {
              I.setRequestHeader(ye, Z);
            }), Q.signal && (Q.signal.addEventListener("abort", fe), I.onreadystatechange = function() {
              I.readyState === 4 && Q.signal.removeEventListener("abort", fe);
            }), I.send(typeof Q._bodyInit > "u" ? null : Q._bodyInit);
          });
        }
        return W.polyfill = !0, a.fetch || (a.fetch = W, a.Headers = v, a.Request = P, a.Response = q), s.Headers = v, s.Request = P, s.Response = q, s.fetch = W, Object.defineProperty(s, "__esModule", { value: !0 }), s;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = r;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, n.exports = e;
  }(ht, ht.exports)), ht.exports;
}
(function(n, e) {
  var t;
  if (typeof fetch == "function" && (typeof vt < "u" && vt.fetch ? t = vt.fetch : typeof window < "u" && window.fetch ? t = window.fetch : t = fetch), typeof Zs < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var r = t || Xs();
    r.default && (r = r.default), e.default = r, n.exports = e.default;
  }
})(ir, ir.exports);
var ui = ir.exports;
const li = /* @__PURE__ */ Gi(ui), Cn = /* @__PURE__ */ Yi({
  __proto__: null,
  default: li
}, [ui]);
function Et(n) {
  "@babel/helpers - typeof";
  return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Et(n);
}
var ge;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? ge = global.fetch : typeof window < "u" && window.fetch ? ge = window.fetch : ge = fetch);
var Xe;
oi() && (typeof global < "u" && global.XMLHttpRequest ? Xe = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Xe = window.XMLHttpRequest));
var xt;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? xt = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (xt = window.ActiveXObject));
!ge && Cn && !Xe && !xt && (ge = li || Cn);
typeof ge != "function" && (ge = void 0);
var ar = function(e, t) {
  if (t && Et(t) === "object") {
    var r = "";
    for (var i in t)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(t[i]);
    if (!r)
      return e;
    e = e + (e.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return e;
}, _n = function(e, t, r) {
  ge(e, t).then(function(i) {
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
}, kn = !1, eo = function(e, t, r, i) {
  e.queryStringParams && (t = ar(t, e.queryStringParams));
  var a = nr({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
  r && (a["Content-Type"] = "application/json");
  var s = typeof e.requestOptions == "function" ? e.requestOptions(r) : e.requestOptions, o = nr({
    method: r ? "POST" : "GET",
    body: r ? e.stringify(r) : void 0,
    headers: a
  }, kn ? {} : s);
  try {
    _n(t, o, i);
  } catch (u) {
    if (!s || Object.keys(s).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(s).forEach(function(d) {
        delete o[d];
      }), _n(t, o, i), kn = !0;
    } catch (d) {
      i(d);
    }
  }
}, to = function(e, t, r, i) {
  r && Et(r) === "object" && (r = ar("", r).slice(1)), e.queryStringParams && (t = ar(t, e.queryStringParams));
  try {
    var a;
    Xe ? a = new Xe() : a = new xt("MSXML2.XMLHTTP.3.0"), a.open(r ? "POST" : "GET", t, 1), e.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.withCredentials = !!e.withCredentials, r && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.overrideMimeType && a.overrideMimeType("application/json");
    var s = e.customHeaders;
    if (s = typeof s == "function" ? s() : s, s)
      for (var o in s)
        a.setRequestHeader(o, s[o]);
    a.onreadystatechange = function() {
      a.readyState > 3 && i(a.status >= 400 ? a.statusText : null, {
        status: a.status,
        data: a.responseText
      });
    }, a.send(r);
  } catch (u) {
    console && console.log(u);
  }
}, ro = function(e, t, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, ge && t.indexOf("file:") !== 0)
    return eo(e, t, r, i);
  if (oi() || typeof ActiveXObject == "function")
    return to(e, t, r, i);
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
function no(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jn(n, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, ci(r.key), r);
  }
}
function io(n, e, t) {
  return e && jn(n.prototype, e), t && jn(n, t), Object.defineProperty(n, "prototype", { writable: !1 }), n;
}
function ao(n, e, t) {
  return e = ci(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function ci(n) {
  var e = so(n, "string");
  return et(e) === "symbol" ? e : String(e);
}
function so(n, e) {
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
var oo = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: function(t) {
      return JSON.parse(t);
    },
    stringify: JSON.stringify,
    parsePayload: function(t, r, i) {
      return ao({}, r, i || "");
    },
    parseLoadPayload: function(t, r) {
    },
    request: ro,
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
    no(this, n), this.services = e, this.options = t, this.allOptions = r, this.type = "backend", this.init(e, t, r);
  }
  return io(n, [{
    key: "init",
    value: function(t) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t, this.options = nr(i, this.options || {}, oo()), this.allOptions = a, this.services && this.options.reloadInterval && setInterval(function() {
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
    value: function(t, r, i, a, s) {
      var o = this, u = this.options.loadPath;
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(t, i)), u = Gs(u), u.then(function(d) {
        if (!d)
          return s(null, {});
        var f = o.services.interpolator.interpolate(d, {
          lng: t.join("+"),
          ns: i.join("+")
        });
        o.loadUrl(f, s, r, a);
      });
    }
  }, {
    key: "loadUrl",
    value: function(t, r, i, a) {
      var s = this, o = typeof i == "string" ? [i] : i, u = typeof a == "string" ? [a] : a, d = this.options.parseLoadPayload(o, u);
      this.options.request(this.options, t, d, function(f, l) {
        if (l && (l.status >= 500 && l.status < 600 || !l.status))
          return r("failed loading " + t + "; status code: " + l.status, !0);
        if (l && l.status >= 400 && l.status < 500)
          return r("failed loading " + t + "; status code: " + l.status, !1);
        if (!l && f && f.message && f.message.indexOf("Failed to fetch") > -1)
          return r("failed loading " + t + ": " + f.message, !0);
        if (f)
          return r(f, !1);
        var h, p;
        try {
          typeof l.data == "string" ? h = s.options.parse(l.data, i, a) : h = l.data;
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
    value: function(t, r, i, a, s) {
      var o = this;
      if (this.options.addPath) {
        typeof t == "string" && (t = [t]);
        var u = this.options.parsePayload(r, i, a), d = 0, f = [], l = [];
        t.forEach(function(h) {
          var p = o.options.addPath;
          typeof o.options.addPath == "function" && (p = o.options.addPath(h, r));
          var v = o.services.interpolator.interpolate(p, {
            lng: h,
            ns: r
          });
          o.options.request(o.options, v, u, function(S, b) {
            d += 1, f.push(S), l.push(b), d === t.length && typeof s == "function" && s(f, l);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var t = this, r = this.services, i = r.backendConnector, a = r.languageUtils, s = r.logger, o = i.language;
      if (!(o && o.toLowerCase() === "cimode")) {
        var u = [], d = function(l) {
          var h = a.toResolveHierarchy(l);
          h.forEach(function(p) {
            u.indexOf(p) < 0 && u.push(p);
          });
        };
        d(o), this.allOptions.preload && this.allOptions.preload.forEach(function(f) {
          return d(f);
        }), u.forEach(function(f) {
          t.allOptions.ns.forEach(function(l) {
            i.read(f, l, "read", null, null, function(h, p) {
              h && s.warn("loading namespace ".concat(l, " for language ").concat(f, " failed"), h), !h && p && s.log("loaded namespace ".concat(l, " for language ").concat(f), p), i.loaded("".concat(f, "|").concat(l), h, p);
            });
          });
        });
      }
    }
  }]), n;
}();
fi.type = "backend";
$.use(fi).use(ai).use(Ga);
const uo = $;
function Ho() {
  return rs();
}
var Ye = {}, ze = Ji;
if (process.env.NODE_ENV === "production")
  Ye.createRoot = ze.createRoot, Ye.hydrateRoot = ze.hydrateRoot;
else {
  var pt = ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ye.createRoot = function(n, e) {
    pt.usingClientEntryPoint = !0;
    try {
      return ze.createRoot(n, e);
    } finally {
      pt.usingClientEntryPoint = !1;
    }
  }, Ye.hydrateRoot = function(n, e, t) {
    pt.usingClientEntryPoint = !0;
    try {
      return ze.hydrateRoot(n, e, t);
    } finally {
      pt.usingClientEntryPoint = !1;
    }
  };
}
class je {
}
class Vo extends je {
}
class di extends je {
}
class lo extends je {
}
class hi extends je {
}
class co extends je {
}
class fo extends je {
}
class ho {
}
class po extends je {
}
class go extends fo {
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
class pi extends co {
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
class vo {
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
    this.closed || this.subject.subscribe(new go(e));
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
    this._state = e, this.stream = new vo(e), t && t();
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
function Ko(n) {
  const e = Ge(new gi({ initState: n })).current, [t, r] = kt(e.state);
  function i(a) {
    e.upDateState(a);
  }
  return Ue(() => (e.stream.subscribe((a) => {
    r({ ...a });
  }), () => {
    e.stream.complete();
  }), [e.stream]), [e.state, i];
}
var sr = function(n, e) {
  return sr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, sr(n, e);
};
function ce(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  sr(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function or(n) {
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
  var r = t.call(n), i, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; )
      a.push(i.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      i && !i.done && (t = r.return) && t.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return a;
}
function qe(n, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, i = e.length, a; r < i; r++)
      (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return n.concat(a || Array.prototype.slice.call(e));
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
function Pt(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var nt = function() {
  function n(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return n.prototype.unsubscribe = function() {
    var e, t, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var o = or(s), u = o.next(); !u.done; u = o.next()) {
              var d = u.value;
              d.remove(this);
            }
          } catch (S) {
            e = { error: S };
          } finally {
            try {
              u && !u.done && (t = o.return) && t.call(o);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          s.remove(this);
      var f = this.initialTeardown;
      if (ve(f))
        try {
          f();
        } catch (S) {
          a = S instanceof Ht ? S.errors : [S];
        }
      var l = this._finalizers;
      if (l) {
        this._finalizers = null;
        try {
          for (var h = or(l), p = h.next(); !p.done; p = h.next()) {
            var v = p.value;
            try {
              Ln(v);
            } catch (S) {
              a = a ?? [], S instanceof Ht ? a = qe(qe([], Me(a)), Me(S.errors)) : a.push(S);
            }
          }
        } catch (S) {
          r = { error: S };
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
        throw new Ht(a);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        Ln(e);
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
    t === e ? this._parentage = null : Array.isArray(t) && Pt(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && Pt(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}(), yi = nt.EMPTY;
function mi(n) {
  return n instanceof nt || n && "closed" in n && ve(n.remove) && ve(n.add) && ve(n.unsubscribe);
}
function Ln(n) {
  ve(n) ? n() : n.unsubscribe();
}
var bi = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, ur = {
  setTimeout: function(n, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var i = ur.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, qe([n, e], Me(t))) : setTimeout.apply(void 0, qe([n, e], Me(t)));
  },
  clearTimeout: function(n) {
    var e = ur.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(n);
  },
  delegate: void 0
};
function yo(n) {
  ur.setTimeout(function() {
    throw n;
  });
}
function Tn() {
}
function mt(n) {
  n();
}
var wi = function(n) {
  ce(e, n);
  function e(t) {
    var r = n.call(this) || this;
    return r.isStopped = !1, t ? (r.destination = t, mi(t) && t.add(r)) : r.destination = So, r;
  }
  return e.create = function(t, r, i) {
    return new lr(t, r, i);
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
}(nt), mo = Function.prototype.bind;
function Vt(n, e) {
  return mo.call(n, e);
}
var bo = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (r) {
        gt(r);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (r) {
        gt(r);
      }
    else
      gt(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        gt(t);
      }
  }, n;
}(), lr = function(n) {
  ce(e, n);
  function e(t, r, i) {
    var a = n.call(this) || this, s;
    if (ve(t) || !t)
      s = {
        next: t ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var o;
      a && bi.useDeprecatedNextContext ? (o = Object.create(t), o.unsubscribe = function() {
        return a.unsubscribe();
      }, s = {
        next: t.next && Vt(t.next, o),
        error: t.error && Vt(t.error, o),
        complete: t.complete && Vt(t.complete, o)
      }) : s = t;
    }
    return a.destination = new bo(s), a;
  }
  return e;
}(wi);
function gt(n) {
  yo(n);
}
function wo(n) {
  throw n;
}
var So = {
  closed: !0,
  next: Tn,
  error: wo,
  complete: Tn
}, Oo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ro(n) {
  return n;
}
function Eo(n) {
  return n.length === 0 ? Ro : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(r, i) {
      return i(r);
    }, t);
  };
}
var Dn = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, r) {
    var i = this, a = Po(e) ? e : new lr(e, t, r);
    return mt(function() {
      var s = i, o = s.operator, u = s.source;
      a.add(o ? o.call(a, u) : u ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, n.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, n.prototype.forEach = function(e, t) {
    var r = this;
    return t = In(t), new t(function(i, a) {
      var s = new lr({
        next: function(o) {
          try {
            e(o);
          } catch (u) {
            a(u), s.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(s);
    });
  }, n.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, n.prototype[Oo] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return Eo(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = In(e), new e(function(r, i) {
      var a;
      t.subscribe(function(s) {
        return a = s;
      }, function(s) {
        return i(s);
      }, function() {
        return r(a);
      });
    });
  }, n.create = function(e) {
    return new n(e);
  }, n;
}();
function In(n) {
  var e;
  return (e = n ?? bi.Promise) !== null && e !== void 0 ? e : Promise;
}
function xo(n) {
  return n && ve(n.next) && ve(n.error) && ve(n.complete);
}
function Po(n) {
  return n && n instanceof wi || xo(n) && mi(n);
}
var Co = vi(function(n) {
  return function() {
    n(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Si = function(n) {
  ce(e, n);
  function e() {
    var t = n.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var r = new Nn(this, this);
    return r.operator = t, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Co();
  }, e.prototype.next = function(t) {
    var r = this;
    mt(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = or(r.currentObservers), o = s.next(); !o.done; o = s.next()) {
            var u = o.value;
            u.next(t);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            o && !o.done && (a = s.return) && a.call(s);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var r = this;
    mt(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = t;
        for (var i = r.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    mt(function() {
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
    var r = this, i = this, a = i.hasError, s = i.isStopped, o = i.observers;
    return a || s ? yi : (this.currentObservers = null, o.push(t), new nt(function() {
      r.currentObservers = null, Pt(o, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? t.error(a) : s && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new Dn();
    return t.source = this, t;
  }, e.create = function(t, r) {
    return new Nn(t, r);
  }, e;
}(Dn), Nn = function(n) {
  ce(e, n);
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
}(Si), xe = function(n) {
  ce(e, n);
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
}(Si), Oi = {
  now: function() {
    return (Oi.delegate || Date).now();
  },
  delegate: void 0
}, _o = function(n) {
  ce(e, n);
  function e(t, r) {
    return n.call(this) || this;
  }
  return e.prototype.schedule = function(t, r) {
    return this;
  }, e;
}(nt), Ct = {
  setInterval: function(n, e) {
    for (var t = [], r = 2; r < arguments.length; r++)
      t[r - 2] = arguments[r];
    var i = Ct.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, qe([n, e], Me(t))) : setInterval.apply(void 0, qe([n, e], Me(t)));
  },
  clearInterval: function(n) {
    var e = Ct.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(n);
  },
  delegate: void 0
}, ko = function(n) {
  ce(e, n);
  function e(t, r) {
    var i = n.call(this, t, r) || this;
    return i.scheduler = t, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(t, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = t;
    var a = this.id, s = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(s, a, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(s, this.id, r), this;
  }, e.prototype.requestAsyncId = function(t, r, i) {
    return i === void 0 && (i = 0), Ct.setInterval(t.flush.bind(t, this), i);
  }, e.prototype.recycleAsyncId = function(t, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Ct.clearInterval(r);
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
    } catch (s) {
      i = !0, a = s || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, r = t.id, i = t.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Pt(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, n.prototype.unsubscribe.call(this);
    }
  }, e;
}(_o), Fn = function() {
  function n(e, t) {
    t === void 0 && (t = n.now), this.schedulerActionCtor = e, this.now = t;
  }
  return n.prototype.schedule = function(e, t, r) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
  }, n.now = Oi.now, n;
}(), jo = function(n) {
  ce(e, n);
  function e(t, r) {
    r === void 0 && (r = Fn.now);
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
}(Fn), Lo = function(n) {
  ce(e, n);
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
}(ko), To = function(n) {
  ce(e, n);
  function e() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return e;
}(jo), Do = new To(Lo);
const Io = ({
  children: n,
  onTapBackGround: e,
  onTapChildren: t,
  classChildren: r,
  classBackground: i,
  id: a
}) => /* @__PURE__ */ Y.jsx("div", { id: a, className: i, onClick: e, children: /* @__PURE__ */ Y.jsx(
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
const wr = pr(
  void 0
), Wo = ({
  children: n,
  appProps: e
}) => /* @__PURE__ */ Y.jsx(wr.Provider, { value: e, children: n }), Ri = new xe(!1), cr = new xe(!1), fr = new xe(null), dr = new xe(null), hr = new xe(null), No = new xe(!1), Fo = new xe(null), $o = new xe(null);
function Ao(n) {
  Ri.next(n);
}
function Uo(n) {
  dr.next(n);
}
function zo(n) {
  n === null ? (fr.next(null), cr.next(!1)) : (fr.next(n), cr.next(!0));
}
function Jo(n) {
  hr.next(n);
}
const Yo = ({
  children: n,
  appProps: e
}) => {
  var a;
  const t = An(() => new gi({
    initState: {
      isLoading: !1,
      modals: [],
      showMessage: !1,
      showModel: !1,
      showBottomSheet: !1,
      showDrawer: !1
    }
  }), []), [r, i] = kt(t.state);
  return Ue(() => {
    let s = 0;
    return t.stream.subscribe((o) => {
      i({ ...o });
    }), Ri.subscribe((o) => {
      t.state.isLoading = o, t.upDateState(), o ? document.body.className = "bg-scrolling-element-when-modal-active" : document.body.className = "";
    }), No.subscribe((o) => {
      t.state.showDrawer = o, t.upDateState(), o ? document.body.className = "bg-scrolling-element-when-modal-active" : document.body.className = "";
    }), cr.subscribe((o) => {
      t.state.showMessage = o, t.upDateState();
    }), window && document && dr.subscribe((o) => {
      if (o === null) {
        if (s > 0) {
          s--;
          const u = document.getElementById(
            `rd-modals-${s}`
          );
          u.firstElementChild.className = "column animation-faded--out", setTimeout(() => {
            t.state.modals = t.state.modals.slice(
              0,
              s
            ), t.upDateState();
          }, 150);
        }
      } else
        Do.schedule(() => {
          t.state.modals = t.state.modals.slice(
            0,
            s
          );
          const u = s;
          t.state.modals.push(
            Qe(
              /* @__PURE__ */ Y.jsx(
                Io,
                {
                  id: `rd-modals-${u}`,
                  classChildren: "animation-scale--up animation-faded--in",
                  classBackground: "rd-overlay-queue-modal",
                  onTapBackGround: () => {
                    var d;
                    (d = e.configs) != null && d.closeModalOnTapOutside && dr.next(null);
                  },
                  onTapChildren: (d) => {
                    d.stopPropagation();
                  },
                  children: o
                }
              ),
              document.body,
              `rd-modals-${u}`
            )
          ), t.upDateState(), s++;
        });
      s === 1 ? document.body.className = "bg-scrolling-element-when-modal-active" : s === 0 && (document.body.className = "");
    }), hr.subscribe((o) => {
      o === null ? (document.body.className = "", setTimeout(() => {
        t.state.showBottomSheet = !1, t.upDateState();
      }, 80)) : (document.body.className = "bg-scrolling-element-when-modal-active", setTimeout(() => {
        t.state.showBottomSheet = !0, t.upDateState();
      }, 80));
    }), window && document && window.addEventListener("popstate", () => {
      if (t.state.isLoading || s > 0) {
        Ao(!1);
        for (let o = 0; o < s; o++)
          Uo(null);
      }
    }), () => {
      t.stream.complete(), window && window.removeEventListener("popstate", () => {
        console.log("done popstate");
      });
    };
  }, []), /* @__PURE__ */ Y.jsx(ns, { i18n: uo, children: /* @__PURE__ */ Y.jsx(Ua, { children: /* @__PURE__ */ Y.jsx(
    Aa,
    {
      queryClient: new pa({
        defaultOptions: {
          queries: { refetchOnWindowFocus: !1, retry: !1 }
        }
      }),
      children: /* @__PURE__ */ Y.jsxs(wr.Provider, { value: e, children: [
        r.showDrawer && window && document && Qe(Fo.value, document.body, "rd-drawer"),
        r.showMessage && window && document && Qe(fr.value, document.body, "rd-message"),
        r.isLoading && window && document && Qe(
          (a = e.configs) == null ? void 0 : a.loading,
          document.body,
          "rd-loader"
        ),
        r.modals.length > 0 && r.modals.map((s, o) => s),
        r.showBottomSheet && window && document && Qe(
          hr.value,
          document.body,
          "rd-bottom-sheet"
        ),
        n
      ] })
    }
  ) }) });
}, Go = () => gr(wr);
function Zo(n, e, t) {
  const r = window && document && document.getElementById(`${e}`);
  return t && r && (t.minHeight && (r.style.minHeight = t.minHeight), t.minWidth && (r.style.minWidth = t.minWidth), t.maxHeight && (r.style.maxHeight = t.maxHeight), t.maxWidth && (r.style.maxWidth = t.maxWidth)), Ye.createRoot(
    window && document && document.getElementById(`${e}`),
    {
      identifierPrefix: `${n}`,
      onRecoverableError(a) {
        console.error(a);
      }
    }
  );
}
const Ce = class extends hi {
  constructor() {
    var e = (...args) => {
      super(...args);
      M(this, "m");
      M(this, "key");
    };
    return Ce._instance || (e(), this.key = Symbol("RdModelsManager"), this.m = /* @__PURE__ */ new Map(), Ce._instance = this), Ce._instance;
  }
  /**
   * use
   */
  use(t) {
    return this.m.set(t.getName(), t), Ce._instance;
  }
  /**
   * remove
   */
  remove(t) {
    return this.m.has(t) && this.m.delete(t), Ce._instance;
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
let Kt = Ce;
M(Kt, "_instance");
class Xo extends lo {
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
const _e = class extends hi {
  constructor() {
    var e = (...args) => {
      super(...args);
      M(this, "m");
      M(this, "key");
    };
    return _e._instance || (e(), this.m = /* @__PURE__ */ new Map(), this.key = Symbol("RdModulesManager"), _e._instance = this), _e._instance;
  }
  /**
   * use
   */
  use(t) {
    return this.m.set(t.getName(), t), _e._instance;
  }
  /**
   * remove
   */
  remove(t) {
    return this.m.has(t) && this.m.delete(t), _e._instance;
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
let Wt = _e;
M(Wt, "_instance");
class eu extends di {
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
class tu extends di {
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
function ru(n, e) {
  return new Worker(n, Object.assign({ type: "module" }, e));
}
class nu extends ho {
  constructor() {
    super();
    M(this, "key");
    this.key = Symbol("RdLogger");
  }
  execute(t) {
    return console.log(t);
  }
}
class iu extends po {
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
class Ei {
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
    return new Ei({
      code: e ?? this.code,
      message: t ?? this.message
    });
  }
}
const au = ({
  text: n = "",
  highlight: e = "",
  classHighlight: t,
  classText: r
}) => {
  if (!e.trim())
    return /* @__PURE__ */ Y.jsx("span", { className: r, children: n });
  const i = n.split("");
  return /* @__PURE__ */ Y.jsx("span", { className: r, children: i.filter((a) => a).map((a, s) => e.replaceAll(" ", "").includes(a.toLowerCase()) && a !== "" ? /* @__PURE__ */ Y.jsx("mark", { className: t, children: a }, s) : /* @__PURE__ */ Y.jsx("span", { children: a }, s)) });
}, Mo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDM2MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iMzYwIiBoZWlnaHQ9IjM2MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfNDM2XzIwMjc2NSIgdHJhbnNmb3JtPSJzY2FsZSgwLjAxNTYyNSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF80MzZfMjAyNzY1IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUE0MGxFUVZSNFh1M2JRUTZFUUFoRVViai9vWHNPOFNkaDRYT3ZKQWkvcWtGM1p0NkU2NzEwKyt4dWlENlQ0MHVBQ3RBQ3FZbHpEMklBQ0ZLQmtvSGNnbVNRREpKQk1uZ0tJVDZBRHlnRjZEU1lmY0NMVHpnL3owZUdyQVNvZ0RiVDBnS3hCMk1CNXBraUJvQmdyRUVNd0lCakx4OWZBQWlDSUFoeWdta2tSZ1lqaFdNSGRpdHNMMkF2WUMrUUlIamR3emsrQm1BQUJtQkFXYzFrQ0YwYktSQUVRUkFFUVJBTUdhQUNiYUNVei9QNUJSaUt4aFFhaVYwN3VSamZZZ1FETUtEcEdBaEdDTVVDekQ0Q0JFRXcxaUFHWUlCUFpNSmgrZzgvUDhjS3BBSmZWNEVmTWVlL3NMdGFFRklBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L2RlZnM+Cjwvc3ZnPgo=", su = ({
  src: n,
  srcError: e = Mo,
  alt: t,
  className: r,
  style: i
}) => {
  const a = Ge(null);
  return /* @__PURE__ */ Y.jsx(
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
function ou() {
  return gr(zn);
}
const uu = Fa;
export {
  Ei as ErrorModel,
  Wo as RdApp,
  Yo as RdAppExtends,
  pi as RdBehaviorSubject,
  go as RdBehaviourObserver,
  gi as RdBloc,
  je as RdCore,
  po as RdDecorator,
  au as RdHighlightedText,
  su as RdImage,
  eu as RdLocalStorage,
  nu as RdLogger,
  iu as RdLoggerDecorator,
  hi as RdManager,
  lo as RdModel,
  Xo as RdModelObject,
  Kt as RdModelsManager,
  Vo as RdModule,
  Wt as RdModulesManager,
  fo as RdObserver,
  ho as RdOperation,
  Io as RdOverlay,
  Aa as RdQueryClient,
  tu as RdSessionStorage,
  di as RdStorage,
  vo as RdStream,
  co as RdSubject,
  Ua as RdViewport,
  zn as RdViewportContext,
  Zo as buildRdRootElement,
  Jo as rdBottomSheet,
  hr as rdBottomSheetCompo,
  ru as rdCreateWorker,
  $o as rdError,
  uo as rdI18n,
  Ri as rdIsLoading,
  Ao as rdLoading,
  zo as rdMessage,
  fr as rdMessageCompo,
  Uo as rdModal,
  dr as rdQueueModal,
  cr as rdShowMessage,
  Go as useRdApp,
  Ko as useRdBloc,
  uu as useRdQuery,
  Ho as useRdTranslate,
  ou as useRdViewport
};
//# sourceMappingURL=rad-ts.js.map
