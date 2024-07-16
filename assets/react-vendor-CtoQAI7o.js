function Ic(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o && Object.defineProperty(e, l, o.get ? o : {
                        enumerable: !0,
                        get: ()=>r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var lh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function oh(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var l = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, l.get ? l : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var ds = {
    exports: {}
}
  , T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element")
  , Fc = Symbol.for("react.portal")
  , Dc = Symbol.for("react.fragment")
  , jc = Symbol.for("react.strict_mode")
  , Uc = Symbol.for("react.profiler")
  , $c = Symbol.for("react.provider")
  , Bc = Symbol.for("react.context")
  , Vc = Symbol.for("react.forward_ref")
  , Ac = Symbol.for("react.suspense")
  , Wc = Symbol.for("react.memo")
  , Hc = Symbol.for("react.lazy")
  , Zi = Symbol.iterator;
function Qc(e) {
    return e === null || typeof e != "object" ? null : (e = Zi && e[Zi] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ps = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , hs = Object.assign
  , ms = {};
function an(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ms,
    this.updater = n || ps
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
an.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function vs() {}
vs.prototype = an.prototype;
function bo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ms,
    this.updater = n || ps
}
var ei = bo.prototype = new vs;
ei.constructor = bo;
hs(ei, an.prototype);
ei.isPureReactComponent = !0;
var Ji = Array.isArray
  , ys = Object.prototype.hasOwnProperty
  , ti = {
    current: null
}
  , gs = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ws(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            ys.call(t, r) && !gs.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        l.children = n;
    else if (1 < u) {
        for (var s = Array(u), a = 0; a < u; a++)
            s[a] = arguments[a + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: tr,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: ti.current
    }
}
function Kc(e, t) {
    return {
        $$typeof: tr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ni(e) {
    return typeof e == "object" && e !== null && e.$$typeof === tr
}
function Yc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var qi = /\/+/g;
function Rl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Yc("" + e.key) : t.toString(36)
}
function Pr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case tr:
            case Fc:
                i = !0
            }
        }
    if (i)
        return i = e,
        l = l(i),
        e = r === "" ? "." + Rl(i, 0) : r,
        Ji(l) ? (n = "",
        e != null && (n = e.replace(qi, "$&/") + "/"),
        Pr(l, t, n, "", function(a) {
            return a
        })) : l != null && (ni(l) && (l = Kc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(qi, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Ji(e))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var s = r + Rl(o, u);
            i += Pr(o, t, n, s, l)
        }
    else if (s = Qc(e),
    typeof s == "function")
        for (e = s.call(e),
        u = 0; !(o = e.next()).done; )
            o = o.value,
            s = r + Rl(o, u++),
            i += Pr(o, t, n, s, l);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function ar(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Pr(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }),
    r
}
function Xc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var se = {
    current: null
}
  , Nr = {
    transition: null
}
  , Gc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Nr,
    ReactCurrentOwner: ti
};
function Ss() {
    throw Error("act(...) is not supported in production builds of React.")
}
T.Children = {
    map: ar,
    forEach: function(e, t, n) {
        ar(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ar(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ar(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ni(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
T.Component = an;
T.Fragment = Dc;
T.Profiler = Uc;
T.PureComponent = bo;
T.StrictMode = jc;
T.Suspense = Ac;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gc;
T.act = Ss;
T.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = hs({}, e.props)
      , l = e.key
      , o = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        i = ti.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (s in t)
            ys.call(t, s) && !gs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var a = 0; a < s; a++)
            u[a] = arguments[a + 2];
        r.children = u
    }
    return {
        $$typeof: tr,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
}
;
T.createContext = function(e) {
    return e = {
        $$typeof: Bc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: $c,
        _context: e
    },
    e.Consumer = e
}
;
T.createElement = ws;
T.createFactory = function(e) {
    var t = ws.bind(null, e);
    return t.type = e,
    t
}
;
T.createRef = function() {
    return {
        current: null
    }
}
;
T.forwardRef = function(e) {
    return {
        $$typeof: Vc,
        render: e
    }
}
;
T.isValidElement = ni;
T.lazy = function(e) {
    return {
        $$typeof: Hc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Xc
    }
}
;
T.memo = function(e, t) {
    return {
        $$typeof: Wc,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
T.startTransition = function(e) {
    var t = Nr.transition;
    Nr.transition = {};
    try {
        e()
    } finally {
        Nr.transition = t
    }
}
;
T.unstable_act = Ss;
T.useCallback = function(e, t) {
    return se.current.useCallback(e, t)
}
;
T.useContext = function(e) {
    return se.current.useContext(e)
}
;
T.useDebugValue = function() {}
;
T.useDeferredValue = function(e) {
    return se.current.useDeferredValue(e)
}
;
T.useEffect = function(e, t) {
    return se.current.useEffect(e, t)
}
;
T.useId = function() {
    return se.current.useId()
}
;
T.useImperativeHandle = function(e, t, n) {
    return se.current.useImperativeHandle(e, t, n)
}
;
T.useInsertionEffect = function(e, t) {
    return se.current.useInsertionEffect(e, t)
}
;
T.useLayoutEffect = function(e, t) {
    return se.current.useLayoutEffect(e, t)
}
;
T.useMemo = function(e, t) {
    return se.current.useMemo(e, t)
}
;
T.useReducer = function(e, t, n) {
    return se.current.useReducer(e, t, n)
}
;
T.useRef = function(e) {
    return se.current.useRef(e)
}
;
T.useState = function(e) {
    return se.current.useState(e)
}
;
T.useSyncExternalStore = function(e, t, n) {
    return se.current.useSyncExternalStore(e, t, n)
}
;
T.useTransition = function() {
    return se.current.useTransition()
}
;
T.version = "18.3.1";
ds.exports = T;
var x = ds.exports;
const Zc = fs(x)
  , Jc = Ic({
    __proto__: null,
    default: Zc
}, [x]);
var ks = {
    exports: {}
}
  , we = {}
  , Es = {
    exports: {}
}
  , Cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(_, L) {
        var R = _.length;
        _.push(L);
        e: for (; 0 < R; ) {
            var H = R - 1 >>> 1
              , Z = _[H];
            if (0 < l(Z, L))
                _[H] = L,
                _[R] = Z,
                R = H;
            else
                break e
        }
    }
    function n(_) {
        return _.length === 0 ? null : _[0]
    }
    function r(_) {
        if (_.length === 0)
            return null;
        var L = _[0]
          , R = _.pop();
        if (R !== L) {
            _[0] = R;
            e: for (var H = 0, Z = _.length, ur = Z >>> 1; H < ur; ) {
                var wt = 2 * (H + 1) - 1
                  , Ll = _[wt]
                  , St = wt + 1
                  , sr = _[St];
                if (0 > l(Ll, R))
                    St < Z && 0 > l(sr, Ll) ? (_[H] = sr,
                    _[St] = R,
                    H = St) : (_[H] = Ll,
                    _[wt] = R,
                    H = wt);
                else if (St < Z && 0 > l(sr, R))
                    _[H] = sr,
                    _[St] = R,
                    H = St;
                else
                    break e
            }
        }
        return L
    }
    function l(_, L) {
        var R = _.sortIndex - L.sortIndex;
        return R !== 0 ? R : _.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date
          , u = i.now();
        e.unstable_now = function() {
            return i.now() - u
        }
    }
    var s = []
      , a = []
      , h = 1
      , p = null
      , m = 3
      , y = !1
      , g = !1
      , w = !1
      , E = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(_) {
        for (var L = n(a); L !== null; ) {
            if (L.callback === null)
                r(a);
            else if (L.startTime <= _)
                r(a),
                L.sortIndex = L.expirationTime,
                t(s, L);
            else
                break;
            L = n(a)
        }
    }
    function v(_) {
        if (w = !1,
        d(_),
        !g)
            if (n(s) !== null)
                g = !0,
                Nl(k);
            else {
                var L = n(a);
                L !== null && zl(v, L.startTime - _)
            }
    }
    function k(_, L) {
        g = !1,
        w && (w = !1,
        f(z),
        z = -1),
        y = !0;
        var R = m;
        try {
            for (d(L),
            p = n(s); p !== null && (!(p.expirationTime > L) || _ && !Ne()); ) {
                var H = p.callback;
                if (typeof H == "function") {
                    p.callback = null,
                    m = p.priorityLevel;
                    var Z = H(p.expirationTime <= L);
                    L = e.unstable_now(),
                    typeof Z == "function" ? p.callback = Z : p === n(s) && r(s),
                    d(L)
                } else
                    r(s);
                p = n(s)
            }
            if (p !== null)
                var ur = !0;
            else {
                var wt = n(a);
                wt !== null && zl(v, wt.startTime - L),
                ur = !1
            }
            return ur
        } finally {
            p = null,
            m = R,
            y = !1
        }
    }
    var P = !1
      , N = null
      , z = -1
      , W = 5
      , O = -1;
    function Ne() {
        return !(e.unstable_now() - O < W)
    }
    function pn() {
        if (N !== null) {
            var _ = e.unstable_now();
            O = _;
            var L = !0;
            try {
                L = N(!0, _)
            } finally {
                L ? hn() : (P = !1,
                N = null)
            }
        } else
            P = !1
    }
    var hn;
    if (typeof c == "function")
        hn = function() {
            c(pn)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Gi = new MessageChannel
          , Mc = Gi.port2;
        Gi.port1.onmessage = pn,
        hn = function() {
            Mc.postMessage(null)
        }
    } else
        hn = function() {
            E(pn, 0)
        }
        ;
    function Nl(_) {
        N = _,
        P || (P = !0,
        hn())
    }
    function zl(_, L) {
        z = E(function() {
            _(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(_) {
        _.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        g || y || (g = !0,
        Nl(k))
    }
    ,
    e.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < _ ? Math.floor(1e3 / _) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(_) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var L = 3;
            break;
        default:
            L = m
        }
        var R = m;
        m = L;
        try {
            return _()
        } finally {
            m = R
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(_, L) {
        switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            _ = 3
        }
        var R = m;
        m = _;
        try {
            return L()
        } finally {
            m = R
        }
    }
    ,
    e.unstable_scheduleCallback = function(_, L, R) {
        var H = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? H + R : H) : R = H,
        _) {
        case 1:
            var Z = -1;
            break;
        case 2:
            Z = 250;
            break;
        case 5:
            Z = 1073741823;
            break;
        case 4:
            Z = 1e4;
            break;
        default:
            Z = 5e3
        }
        return Z = R + Z,
        _ = {
            id: h++,
            callback: L,
            priorityLevel: _,
            startTime: R,
            expirationTime: Z,
            sortIndex: -1
        },
        R > H ? (_.sortIndex = R,
        t(a, _),
        n(s) === null && _ === n(a) && (w ? (f(z),
        z = -1) : w = !0,
        zl(v, R - H))) : (_.sortIndex = Z,
        t(s, _),
        g || y || (g = !0,
        Nl(k))),
        _
    }
    ,
    e.unstable_shouldYield = Ne,
    e.unstable_wrapCallback = function(_) {
        var L = m;
        return function() {
            var R = m;
            m = L;
            try {
                return _.apply(this, arguments)
            } finally {
                m = R
            }
        }
    }
}
)(Cs);
Es.exports = Cs;
var qc = Es.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bc = x
  , ge = qc;
function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var xs = new Set
  , Dn = {};
function Mt(e, t) {
    tn(e, t),
    tn(e + "Capture", t)
}
function tn(e, t) {
    for (Dn[e] = t,
    e = 0; e < t.length; e++)
        xs.add(t[e])
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ro = Object.prototype.hasOwnProperty
  , ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , bi = {}
  , eu = {};
function tf(e) {
    return ro.call(eu, e) ? !0 : ro.call(bi, e) ? !1 : ef.test(e) ? eu[e] = !0 : (bi[e] = !0,
    !1)
}
function nf(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function rf(e, t, n, r) {
    if (t === null || typeof t > "u" || nf(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ae(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ae(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    te[t] = new ae(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ae(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ae(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ae(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ae(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ae(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ae(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ae(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ri = /[\-:]([a-z])/g;
function li(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ri, li);
    te[t] = new ae(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ri, li);
    te[t] = new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ri, li);
    te[t] = new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ae(e,1,!1,e.toLowerCase(),null,!1,!1)
});
te.xlinkHref = new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ae(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function oi(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rf(t, n, l, r) && (n = null),
    r || l === null ? tf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ge = bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , cr = Symbol.for("react.element")
  , jt = Symbol.for("react.portal")
  , Ut = Symbol.for("react.fragment")
  , ii = Symbol.for("react.strict_mode")
  , lo = Symbol.for("react.profiler")
  , _s = Symbol.for("react.provider")
  , Ps = Symbol.for("react.context")
  , ui = Symbol.for("react.forward_ref")
  , oo = Symbol.for("react.suspense")
  , io = Symbol.for("react.suspense_list")
  , si = Symbol.for("react.memo")
  , Je = Symbol.for("react.lazy")
  , Ns = Symbol.for("react.offscreen")
  , tu = Symbol.iterator;
function mn(e) {
    return e === null || typeof e != "object" ? null : (e = tu && e[tu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var V = Object.assign, Tl;
function Cn(e) {
    if (Tl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Tl = t && t[1] || ""
        }
    return `
` + Tl + e
}
var Ol = !1;
function Ml(e, t) {
    if (!e || Ol)
        return "";
    Ol = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
                u--;
            for (; 1 <= i && 0 <= u; i--,
            u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if (i--,
                            u--,
                            0 > u || l[i] !== o[u]) {
                                var s = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= i && 0 <= u);
                    break
                }
        }
    } finally {
        Ol = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Cn(e) : ""
}
function lf(e) {
    switch (e.tag) {
    case 5:
        return Cn(e.type);
    case 16:
        return Cn("Lazy");
    case 13:
        return Cn("Suspense");
    case 19:
        return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ml(e.type, !1),
        e;
    case 11:
        return e = Ml(e.type.render, !1),
        e;
    case 1:
        return e = Ml(e.type, !0),
        e;
    default:
        return ""
    }
}
function uo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ut:
        return "Fragment";
    case jt:
        return "Portal";
    case lo:
        return "Profiler";
    case ii:
        return "StrictMode";
    case oo:
        return "Suspense";
    case io:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ps:
            return (e.displayName || "Context") + ".Consumer";
        case _s:
            return (e._context.displayName || "Context") + ".Provider";
        case ui:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case si:
            return t = e.displayName || null,
            t !== null ? t : uo(e.type) || "Memo";
        case Je:
            t = e._payload,
            e = e._init;
            try {
                return uo(e(t))
            } catch {}
        }
    return null
}
function of(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return uo(t);
    case 8:
        return t === ii ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function pt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function zs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function uf(e) {
    var t = zs(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i,
                o.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function fr(e) {
    e._valueTracker || (e._valueTracker = uf(e))
}
function Ls(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = zs(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ur(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function so(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function nu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = pt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Rs(e, t) {
    t = t.checked,
    t != null && oi(e, "checked", t, !1)
}
function ao(e, t) {
    Rs(e, t);
    var n = pt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? co(e, t.type, n) : t.hasOwnProperty("defaultValue") && co(e, t.type, pt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ru(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function co(e, t, n) {
    (t !== "number" || Ur(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var xn = Array.isArray;
function Gt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + pt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function fo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(S(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function lu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(S(92));
            if (xn(n)) {
                if (1 < n.length)
                    throw Error(S(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: pt(n)
    }
}
function Ts(e, t) {
    var n = pt(t.value)
      , r = pt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function ou(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Os(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function po(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Os(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var dr, Ms = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (dr = dr || document.createElement("div"),
        dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = dr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function jn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Nn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , sf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
    sf.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Nn[t] = Nn[e]
    })
});
function Is(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px"
}
function Fs(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = Is(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var af = V({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ho(e, t) {
    if (t) {
        if (af[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(S(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(S(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(S(62))
    }
}
function mo(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var vo = null;
function ai(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var yo = null
  , Zt = null
  , Jt = null;
function iu(e) {
    if (e = lr(e)) {
        if (typeof yo != "function")
            throw Error(S(280));
        var t = e.stateNode;
        t && (t = hl(t),
        yo(e.stateNode, e.type, t))
    }
}
function Ds(e) {
    Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e
}
function js() {
    if (Zt) {
        var e = Zt
          , t = Jt;
        if (Jt = Zt = null,
        iu(e),
        t)
            for (e = 0; e < t.length; e++)
                iu(t[e])
    }
}
function Us(e, t) {
    return e(t)
}
function $s() {}
var Il = !1;
function Bs(e, t, n) {
    if (Il)
        return e(t, n);
    Il = !0;
    try {
        return Us(e, t, n)
    } finally {
        Il = !1,
        (Zt !== null || Jt !== null) && ($s(),
        js())
    }
}
function Un(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = hl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(S(231, t, typeof n));
    return n
}
var go = !1;
if (Qe)
    try {
        var vn = {};
        Object.defineProperty(vn, "passive", {
            get: function() {
                go = !0
            }
        }),
        window.addEventListener("test", vn, vn),
        window.removeEventListener("test", vn, vn)
    } catch {
        go = !1
    }
function cf(e, t, n, r, l, o, i, u, s) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (h) {
        this.onError(h)
    }
}
var zn = !1
  , $r = null
  , Br = !1
  , wo = null
  , ff = {
    onError: function(e) {
        zn = !0,
        $r = e
    }
};
function df(e, t, n, r, l, o, i, u, s) {
    zn = !1,
    $r = null,
    cf.apply(ff, arguments)
}
function pf(e, t, n, r, l, o, i, u, s) {
    if (df.apply(this, arguments),
    zn) {
        if (zn) {
            var a = $r;
            zn = !1,
            $r = null
        } else
            throw Error(S(198));
        Br || (Br = !0,
        wo = a)
    }
}
function It(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Vs(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function uu(e) {
    if (It(e) !== e)
        throw Error(S(188))
}
function hf(e) {
    var t = e.alternate;
    if (!t) {
        if (t = It(e),
        t === null)
            throw Error(S(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n)
                    return uu(l),
                    e;
                if (o === r)
                    return uu(l),
                    t;
                o = o.sibling
            }
            throw Error(S(188))
        }
        if (n.return !== r.return)
            n = l,
            r = o;
        else {
            for (var i = !1, u = l.child; u; ) {
                if (u === n) {
                    i = !0,
                    n = l,
                    r = o;
                    break
                }
                if (u === r) {
                    i = !0,
                    r = l,
                    n = o;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u; ) {
                    if (u === n) {
                        i = !0,
                        n = o,
                        r = l;
                        break
                    }
                    if (u === r) {
                        i = !0,
                        r = o,
                        n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i)
                    throw Error(S(189))
            }
        }
        if (n.alternate !== r)
            throw Error(S(190))
    }
    if (n.tag !== 3)
        throw Error(S(188));
    return n.stateNode.current === n ? e : t
}
function As(e) {
    return e = hf(e),
    e !== null ? Ws(e) : null
}
function Ws(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ws(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Hs = ge.unstable_scheduleCallback
  , su = ge.unstable_cancelCallback
  , mf = ge.unstable_shouldYield
  , vf = ge.unstable_requestPaint
  , Q = ge.unstable_now
  , yf = ge.unstable_getCurrentPriorityLevel
  , ci = ge.unstable_ImmediatePriority
  , Qs = ge.unstable_UserBlockingPriority
  , Vr = ge.unstable_NormalPriority
  , gf = ge.unstable_LowPriority
  , Ks = ge.unstable_IdlePriority
  , cl = null
  , Ue = null;
function wf(e) {
    if (Ue && typeof Ue.onCommitFiberRoot == "function")
        try {
            Ue.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Ef
  , Sf = Math.log
  , kf = Math.LN2;
function Ef(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Sf(e) / kf | 0) | 0
}
var pr = 64
  , hr = 4194304;
function _n(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ar(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , o = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = _n(u) : (o &= i,
        o !== 0 && (r = _n(o)))
    } else
        i = n & ~l,
        i !== 0 ? r = _n(i) : o !== 0 && (r = _n(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    o = t & -t,
    l >= o || l === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Oe(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function Cf(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function xf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var i = 31 - Oe(o)
          , u = 1 << i
          , s = l[i];
        s === -1 ? (!(u & n) || u & r) && (l[i] = Cf(u, t)) : s <= t && (e.expiredLanes |= u),
        o &= ~u
    }
}
function So(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ys() {
    var e = pr;
    return pr <<= 1,
    !(pr & 4194240) && (pr = 64),
    e
}
function Fl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function nr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Oe(t),
    e[t] = n
}
function _f(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Oe(n)
          , o = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~o
    }
}
function fi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Oe(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var I = 0;
function Xs(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Gs, di, Zs, Js, qs, ko = !1, mr = [], lt = null, ot = null, it = null, $n = new Map, Bn = new Map, be = [], Pf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function au(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        lt = null;
        break;
    case "dragenter":
    case "dragleave":
        ot = null;
        break;
    case "mouseover":
    case "mouseout":
        it = null;
        break;
    case "pointerover":
    case "pointerout":
        $n.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Bn.delete(t.pointerId)
    }
}
function yn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    },
    t !== null && (t = lr(t),
    t !== null && di(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function Nf(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return lt = yn(lt, e, t, n, r, l),
        !0;
    case "dragenter":
        return ot = yn(ot, e, t, n, r, l),
        !0;
    case "mouseover":
        return it = yn(it, e, t, n, r, l),
        !0;
    case "pointerover":
        var o = l.pointerId;
        return $n.set(o, yn($n.get(o) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return o = l.pointerId,
        Bn.set(o, yn(Bn.get(o) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function bs(e) {
    var t = Ct(e.target);
    if (t !== null) {
        var n = It(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Vs(n),
                t !== null) {
                    e.blockedOn = t,
                    qs(e.priority, function() {
                        Zs(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function zr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            vo = r,
            n.target.dispatchEvent(r),
            vo = null
        } else
            return t = lr(n),
            t !== null && di(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function cu(e, t, n) {
    zr(e) && n.delete(t)
}
function zf() {
    ko = !1,
    lt !== null && zr(lt) && (lt = null),
    ot !== null && zr(ot) && (ot = null),
    it !== null && zr(it) && (it = null),
    $n.forEach(cu),
    Bn.forEach(cu)
}
function gn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ko || (ko = !0,
    ge.unstable_scheduleCallback(ge.unstable_NormalPriority, zf)))
}
function Vn(e) {
    function t(l) {
        return gn(l, e)
    }
    if (0 < mr.length) {
        gn(mr[0], e);
        for (var n = 1; n < mr.length; n++) {
            var r = mr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && gn(lt, e),
    ot !== null && gn(ot, e),
    it !== null && gn(it, e),
    $n.forEach(t),
    Bn.forEach(t),
    n = 0; n < be.length; n++)
        r = be[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < be.length && (n = be[0],
    n.blockedOn === null); )
        bs(n),
        n.blockedOn === null && be.shift()
}
var qt = Ge.ReactCurrentBatchConfig
  , Wr = !0;
function Lf(e, t, n, r) {
    var l = I
      , o = qt.transition;
    qt.transition = null;
    try {
        I = 1,
        pi(e, t, n, r)
    } finally {
        I = l,
        qt.transition = o
    }
}
function Rf(e, t, n, r) {
    var l = I
      , o = qt.transition;
    qt.transition = null;
    try {
        I = 4,
        pi(e, t, n, r)
    } finally {
        I = l,
        qt.transition = o
    }
}
function pi(e, t, n, r) {
    if (Wr) {
        var l = Eo(e, t, n, r);
        if (l === null)
            Ql(e, t, r, Hr, n),
            au(e, r);
        else if (Nf(l, e, t, n, r))
            r.stopPropagation();
        else if (au(e, r),
        t & 4 && -1 < Pf.indexOf(e)) {
            for (; l !== null; ) {
                var o = lr(l);
                if (o !== null && Gs(o),
                o = Eo(e, t, n, r),
                o === null && Ql(e, t, r, Hr, n),
                o === l)
                    break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else
            Ql(e, t, r, null, n)
    }
}
var Hr = null;
function Eo(e, t, n, r) {
    if (Hr = null,
    e = ai(r),
    e = Ct(e),
    e !== null)
        if (t = It(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Vs(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Hr = e,
    null
}
function ea(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (yf()) {
        case ci:
            return 1;
        case Qs:
            return 4;
        case Vr:
        case gf:
            return 16;
        case Ks:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var tt = null
  , hi = null
  , Lr = null;
function ta() {
    if (Lr)
        return Lr;
    var e, t = hi, n = t.length, r, l = "value"in tt ? tt.value : tt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
        ;
    return Lr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Rr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function vr() {
    return !0
}
function fu() {
    return !1
}
function Se(e) {
    function t(n, r, l, o, i) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = o,
        this.target = i,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vr : fu,
        this.isPropagationStopped = fu,
        this
    }
    return V(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = vr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = vr)
        },
        persist: function() {},
        isPersistent: vr
    }),
    t
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, mi = Se(cn), rr = V({}, cn, {
    view: 0,
    detail: 0
}), Tf = Se(rr), Dl, jl, wn, fl = V({}, rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vi,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== wn && (wn && e.type === "mousemove" ? (Dl = e.screenX - wn.screenX,
        jl = e.screenY - wn.screenY) : jl = Dl = 0,
        wn = e),
        Dl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : jl
    }
}), du = Se(fl), Of = V({}, fl, {
    dataTransfer: 0
}), Mf = Se(Of), If = V({}, rr, {
    relatedTarget: 0
}), Ul = Se(If), Ff = V({}, cn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Df = Se(Ff), jf = V({}, cn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Uf = Se(jf), $f = V({}, cn, {
    data: 0
}), pu = Se($f), Bf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Af = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Wf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Af[e]) ? !!t[e] : !1
}
function vi() {
    return Wf
}
var Hf = V({}, rr, {
    key: function(e) {
        if (e.key) {
            var t = Bf[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Rr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vi,
    charCode: function(e) {
        return e.type === "keypress" ? Rr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Qf = Se(Hf)
  , Kf = V({}, fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , hu = Se(Kf)
  , Yf = V({}, rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vi
})
  , Xf = Se(Yf)
  , Gf = V({}, cn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Zf = Se(Gf)
  , Jf = V({}, fl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , qf = Se(Jf)
  , bf = [9, 13, 27, 32]
  , yi = Qe && "CompositionEvent"in window
  , Ln = null;
Qe && "documentMode"in document && (Ln = document.documentMode);
var ed = Qe && "TextEvent"in window && !Ln
  , na = Qe && (!yi || Ln && 8 < Ln && 11 >= Ln)
  , mu = " "
  , vu = !1;
function ra(e, t) {
    switch (e) {
    case "keyup":
        return bf.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function la(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var $t = !1;
function td(e, t) {
    switch (e) {
    case "compositionend":
        return la(t);
    case "keypress":
        return t.which !== 32 ? null : (vu = !0,
        mu);
    case "textInput":
        return e = t.data,
        e === mu && vu ? null : e;
    default:
        return null
    }
}
function nd(e, t) {
    if ($t)
        return e === "compositionend" || !yi && ra(e, t) ? (e = ta(),
        Lr = hi = tt = null,
        $t = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return na && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var rd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function yu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rd[e.type] : t === "textarea"
}
function oa(e, t, n, r) {
    Ds(r),
    t = Qr(t, "onChange"),
    0 < t.length && (n = new mi("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Rn = null
  , An = null;
function ld(e) {
    va(e, 0)
}
function dl(e) {
    var t = At(e);
    if (Ls(t))
        return e
}
function od(e, t) {
    if (e === "change")
        return t
}
var ia = !1;
if (Qe) {
    var $l;
    if (Qe) {
        var Bl = "oninput"in document;
        if (!Bl) {
            var gu = document.createElement("div");
            gu.setAttribute("oninput", "return;"),
            Bl = typeof gu.oninput == "function"
        }
        $l = Bl
    } else
        $l = !1;
    ia = $l && (!document.documentMode || 9 < document.documentMode)
}
function wu() {
    Rn && (Rn.detachEvent("onpropertychange", ua),
    An = Rn = null)
}
function ua(e) {
    if (e.propertyName === "value" && dl(An)) {
        var t = [];
        oa(t, An, e, ai(e)),
        Bs(ld, t)
    }
}
function id(e, t, n) {
    e === "focusin" ? (wu(),
    Rn = t,
    An = n,
    Rn.attachEvent("onpropertychange", ua)) : e === "focusout" && wu()
}
function ud(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return dl(An)
}
function sd(e, t) {
    if (e === "click")
        return dl(t)
}
function ad(e, t) {
    if (e === "input" || e === "change")
        return dl(t)
}
function cd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ie = typeof Object.is == "function" ? Object.is : cd;
function Wn(e, t) {
    if (Ie(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!ro.call(t, l) || !Ie(e[l], t[l]))
            return !1
    }
    return !0
}
function Su(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function ku(e, t) {
    var n = Su(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Su(n)
    }
}
function sa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sa(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function aa() {
    for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ur(e.document)
    }
    return t
}
function gi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function fd(e) {
    var t = aa()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && sa(n.ownerDocument.documentElement, n)) {
        if (r !== null && gi(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l),
                !e.extend && o > r && (l = r,
                r = o,
                o = l),
                l = ku(n, o);
                var i = ku(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var dd = Qe && "documentMode"in document && 11 >= document.documentMode
  , Bt = null
  , Co = null
  , Tn = null
  , xo = !1;
function Eu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xo || Bt == null || Bt !== Ur(r) || (r = Bt,
    "selectionStart"in r && gi(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Tn && Wn(Tn, r) || (Tn = r,
    r = Qr(Co, "onSelect"),
    0 < r.length && (t = new mi("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Bt)))
}
function yr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Vt = {
    animationend: yr("Animation", "AnimationEnd"),
    animationiteration: yr("Animation", "AnimationIteration"),
    animationstart: yr("Animation", "AnimationStart"),
    transitionend: yr("Transition", "TransitionEnd")
}
  , Vl = {}
  , ca = {};
Qe && (ca = document.createElement("div").style,
"AnimationEvent"in window || (delete Vt.animationend.animation,
delete Vt.animationiteration.animation,
delete Vt.animationstart.animation),
"TransitionEvent"in window || delete Vt.transitionend.transition);
function pl(e) {
    if (Vl[e])
        return Vl[e];
    if (!Vt[e])
        return e;
    var t = Vt[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ca)
            return Vl[e] = t[n];
    return e
}
var fa = pl("animationend")
  , da = pl("animationiteration")
  , pa = pl("animationstart")
  , ha = pl("transitionend")
  , ma = new Map
  , Cu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mt(e, t) {
    ma.set(e, t),
    Mt(t, [e])
}
for (var Al = 0; Al < Cu.length; Al++) {
    var Wl = Cu[Al]
      , pd = Wl.toLowerCase()
      , hd = Wl[0].toUpperCase() + Wl.slice(1);
    mt(pd, "on" + hd)
}
mt(fa, "onAnimationEnd");
mt(da, "onAnimationIteration");
mt(pa, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(ha, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , md = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));
function xu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    pf(r, t, void 0, e),
    e.currentTarget = null
}
function va(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i]
                      , s = u.instance
                      , a = u.currentTarget;
                    if (u = u.listener,
                    s !== o && l.isPropagationStopped())
                        break e;
                    xu(l, u, a),
                    o = s
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (u = r[i],
                    s = u.instance,
                    a = u.currentTarget,
                    u = u.listener,
                    s !== o && l.isPropagationStopped())
                        break e;
                    xu(l, u, a),
                    o = s
                }
        }
    }
    if (Br)
        throw e = wo,
        Br = !1,
        wo = null,
        e
}
function D(e, t) {
    var n = t[Lo];
    n === void 0 && (n = t[Lo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ya(t, e, 2, !1),
    n.add(r))
}
function Hl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    ya(n, e, r, t)
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
    if (!e[gr]) {
        e[gr] = !0,
        xs.forEach(function(n) {
            n !== "selectionchange" && (md.has(n) || Hl(n, !1, e),
            Hl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[gr] || (t[gr] = !0,
        Hl("selectionchange", !1, t))
    }
}
function ya(e, t, n, r) {
    switch (ea(t)) {
    case 1:
        var l = Lf;
        break;
    case 4:
        l = Rf;
        break;
    default:
        l = pi
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function Ql(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var s = i.tag;
                        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        i = i.return
                    }
                for (; u !== null; ) {
                    if (i = Ct(u),
                    i === null)
                        return;
                    if (s = i.tag,
                    s === 5 || s === 6) {
                        r = o = i;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    Bs(function() {
        var a = o
          , h = ai(n)
          , p = [];
        e: {
            var m = ma.get(e);
            if (m !== void 0) {
                var y = mi
                  , g = e;
                switch (e) {
                case "keypress":
                    if (Rr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = Qf;
                    break;
                case "focusin":
                    g = "focus",
                    y = Ul;
                    break;
                case "focusout":
                    g = "blur",
                    y = Ul;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = Ul;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = du;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = Mf;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = Xf;
                    break;
                case fa:
                case da:
                case pa:
                    y = Df;
                    break;
                case ha:
                    y = Zf;
                    break;
                case "scroll":
                    y = Tf;
                    break;
                case "wheel":
                    y = qf;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = Uf;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = hu
                }
                var w = (t & 4) !== 0
                  , E = !w && e === "scroll"
                  , f = w ? m !== null ? m + "Capture" : null : m;
                w = [];
                for (var c = a, d; c !== null; ) {
                    d = c;
                    var v = d.stateNode;
                    if (d.tag === 5 && v !== null && (d = v,
                    f !== null && (v = Un(c, f),
                    v != null && w.push(Qn(c, v, d)))),
                    E)
                        break;
                    c = c.return
                }
                0 < w.length && (m = new y(m,g,null,n,h),
                p.push({
                    event: m,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                m && n !== vo && (g = n.relatedTarget || n.fromElement) && (Ct(g) || g[Ke]))
                    break e;
                if ((y || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window,
                y ? (g = n.relatedTarget || n.toElement,
                y = a,
                g = g ? Ct(g) : null,
                g !== null && (E = It(g),
                g !== E || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null,
                g = a),
                y !== g)) {
                    if (w = du,
                    v = "onMouseLeave",
                    f = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (w = hu,
                    v = "onPointerLeave",
                    f = "onPointerEnter",
                    c = "pointer"),
                    E = y == null ? m : At(y),
                    d = g == null ? m : At(g),
                    m = new w(v,c + "leave",y,n,h),
                    m.target = E,
                    m.relatedTarget = d,
                    v = null,
                    Ct(h) === a && (w = new w(f,c + "enter",g,n,h),
                    w.target = d,
                    w.relatedTarget = E,
                    v = w),
                    E = v,
                    y && g)
                        t: {
                            for (w = y,
                            f = g,
                            c = 0,
                            d = w; d; d = Dt(d))
                                c++;
                            for (d = 0,
                            v = f; v; v = Dt(v))
                                d++;
                            for (; 0 < c - d; )
                                w = Dt(w),
                                c--;
                            for (; 0 < d - c; )
                                f = Dt(f),
                                d--;
                            for (; c--; ) {
                                if (w === f || f !== null && w === f.alternate)
                                    break t;
                                w = Dt(w),
                                f = Dt(f)
                            }
                            w = null
                        }
                    else
                        w = null;
                    y !== null && _u(p, m, y, w, !1),
                    g !== null && E !== null && _u(p, E, g, w, !0)
                }
            }
            e: {
                if (m = a ? At(a) : window,
                y = m.nodeName && m.nodeName.toLowerCase(),
                y === "select" || y === "input" && m.type === "file")
                    var k = od;
                else if (yu(m))
                    if (ia)
                        k = ad;
                    else {
                        k = ud;
                        var P = id
                    }
                else
                    (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (k = sd);
                if (k && (k = k(e, a))) {
                    oa(p, k, n, h);
                    break e
                }
                P && P(e, m, a),
                e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && co(m, "number", m.value)
            }
            switch (P = a ? At(a) : window,
            e) {
            case "focusin":
                (yu(P) || P.contentEditable === "true") && (Bt = P,
                Co = a,
                Tn = null);
                break;
            case "focusout":
                Tn = Co = Bt = null;
                break;
            case "mousedown":
                xo = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                xo = !1,
                Eu(p, n, h);
                break;
            case "selectionchange":
                if (dd)
                    break;
            case "keydown":
            case "keyup":
                Eu(p, n, h)
            }
            var N;
            if (yi)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                    }
                    z = void 0
                }
            else
                $t ? ra(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
            z && (na && n.locale !== "ko" && ($t || z !== "onCompositionStart" ? z === "onCompositionEnd" && $t && (N = ta()) : (tt = h,
            hi = "value"in tt ? tt.value : tt.textContent,
            $t = !0)),
            P = Qr(a, z),
            0 < P.length && (z = new pu(z,e,null,n,h),
            p.push({
                event: z,
                listeners: P
            }),
            N ? z.data = N : (N = la(n),
            N !== null && (z.data = N)))),
            (N = ed ? td(e, n) : nd(e, n)) && (a = Qr(a, "onBeforeInput"),
            0 < a.length && (h = new pu("onBeforeInput","beforeinput",null,n,h),
            p.push({
                event: h,
                listeners: a
            }),
            h.data = N))
        }
        va(p, t)
    })
}
function Qn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Qr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , o = l.stateNode;
        l.tag === 5 && o !== null && (l = o,
        o = Un(e, n),
        o != null && r.unshift(Qn(e, o, l)),
        o = Un(e, t),
        o != null && r.push(Qn(e, o, l))),
        e = e.return
    }
    return r
}
function Dt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function _u(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var u = n
          , s = u.alternate
          , a = u.stateNode;
        if (s !== null && s === r)
            break;
        u.tag === 5 && a !== null && (u = a,
        l ? (s = Un(n, o),
        s != null && i.unshift(Qn(n, s, u))) : l || (s = Un(n, o),
        s != null && i.push(Qn(n, s, u)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var vd = /\r\n?/g
  , yd = /\u0000|\uFFFD/g;
function Pu(e) {
    return (typeof e == "string" ? e : "" + e).replace(vd, `
`).replace(yd, "")
}
function wr(e, t, n) {
    if (t = Pu(t),
    Pu(e) !== t && n)
        throw Error(S(425))
}
function Kr() {}
var _o = null
  , Po = null;
function No(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var zo = typeof setTimeout == "function" ? setTimeout : void 0
  , gd = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Nu = typeof Promise == "function" ? Promise : void 0
  , wd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nu < "u" ? function(e) {
    return Nu.resolve(null).then(e).catch(Sd)
}
: zo;
function Sd(e) {
    setTimeout(function() {
        throw e
    })
}
function Kl(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Vn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Vn(t)
}
function ut(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function zu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fn = Math.random().toString(36).slice(2)
  , je = "__reactFiber$" + fn
  , Kn = "__reactProps$" + fn
  , Ke = "__reactContainer$" + fn
  , Lo = "__reactEvents$" + fn
  , kd = "__reactListeners$" + fn
  , Ed = "__reactHandles$" + fn;
function Ct(e) {
    var t = e[je];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ke] || n[je]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = zu(e); e !== null; ) {
                    if (n = e[je])
                        return n;
                    e = zu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function lr(e) {
    return e = e[je] || e[Ke],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function At(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(S(33))
}
function hl(e) {
    return e[Kn] || null
}
var Ro = []
  , Wt = -1;
function vt(e) {
    return {
        current: e
    }
}
function j(e) {
    0 > Wt || (e.current = Ro[Wt],
    Ro[Wt] = null,
    Wt--)
}
function F(e, t) {
    Wt++,
    Ro[Wt] = e.current,
    e.current = t
}
var ht = {}
  , oe = vt(ht)
  , de = vt(!1)
  , zt = ht;
function nn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return ht;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n)
        l[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function pe(e) {
    return e = e.childContextTypes,
    e != null
}
function Yr() {
    j(de),
    j(oe)
}
function Lu(e, t, n) {
    if (oe.current !== ht)
        throw Error(S(168));
    F(oe, t),
    F(de, n)
}
function ga(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(S(108, of(e) || "Unknown", l));
    return V({}, n, r)
}
function Xr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ht,
    zt = oe.current,
    F(oe, e),
    F(de, de.current),
    !0
}
function Ru(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(S(169));
    n ? (e = ga(e, t, zt),
    r.__reactInternalMemoizedMergedChildContext = e,
    j(de),
    j(oe),
    F(oe, e)) : j(de),
    F(de, n)
}
var Ve = null
  , ml = !1
  , Yl = !1;
function wa(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}
function Cd(e) {
    ml = !0,
    wa(e)
}
function yt() {
    if (!Yl && Ve !== null) {
        Yl = !0;
        var e = 0
          , t = I;
        try {
            var n = Ve;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ve = null,
            ml = !1
        } catch (l) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)),
            Hs(ci, yt),
            l
        } finally {
            I = t,
            Yl = !1
        }
    }
    return null
}
var Ht = []
  , Qt = 0
  , Gr = null
  , Zr = 0
  , ke = []
  , Ee = 0
  , Lt = null
  , Ae = 1
  , We = "";
function kt(e, t) {
    Ht[Qt++] = Zr,
    Ht[Qt++] = Gr,
    Gr = e,
    Zr = t
}
function Sa(e, t, n) {
    ke[Ee++] = Ae,
    ke[Ee++] = We,
    ke[Ee++] = Lt,
    Lt = e;
    var r = Ae;
    e = We;
    var l = 32 - Oe(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var o = 32 - Oe(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32),
        r >>= i,
        l -= i,
        Ae = 1 << 32 - Oe(t) + l | n << l | r,
        We = o + e
    } else
        Ae = 1 << o | n << l | r,
        We = e
}
function wi(e) {
    e.return !== null && (kt(e, 1),
    Sa(e, 1, 0))
}
function Si(e) {
    for (; e === Gr; )
        Gr = Ht[--Qt],
        Ht[Qt] = null,
        Zr = Ht[--Qt],
        Ht[Qt] = null;
    for (; e === Lt; )
        Lt = ke[--Ee],
        ke[Ee] = null,
        We = ke[--Ee],
        ke[Ee] = null,
        Ae = ke[--Ee],
        ke[Ee] = null
}
var ye = null
  , ve = null
  , U = !1
  , Te = null;
function ka(e, t) {
    var n = Ce(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Tu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ye = e,
        ve = ut(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ye = e,
        ve = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Lt !== null ? {
            id: Ae,
            overflow: We
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ce(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        ye = e,
        ve = null,
        !0) : !1;
    default:
        return !1
    }
}
function To(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Oo(e) {
    if (U) {
        var t = ve;
        if (t) {
            var n = t;
            if (!Tu(e, t)) {
                if (To(e))
                    throw Error(S(418));
                t = ut(n.nextSibling);
                var r = ye;
                t && Tu(e, t) ? ka(r, n) : (e.flags = e.flags & -4097 | 2,
                U = !1,
                ye = e)
            }
        } else {
            if (To(e))
                throw Error(S(418));
            e.flags = e.flags & -4097 | 2,
            U = !1,
            ye = e
        }
    }
}
function Ou(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ye = e
}
function Sr(e) {
    if (e !== ye)
        return !1;
    if (!U)
        return Ou(e),
        U = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !No(e.type, e.memoizedProps)),
    t && (t = ve)) {
        if (To(e))
            throw Ea(),
            Error(S(418));
        for (; t; )
            ka(e, t),
            t = ut(t.nextSibling)
    }
    if (Ou(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(S(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = ut(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else
        ve = ye ? ut(e.stateNode.nextSibling) : null;
    return !0
}
function Ea() {
    for (var e = ve; e; )
        e = ut(e.nextSibling)
}
function rn() {
    ve = ye = null,
    U = !1
}
function ki(e) {
    Te === null ? Te = [e] : Te.push(e)
}
var xd = Ge.ReactCurrentBatchConfig;
function Sn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(S(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(S(147, e));
            var l = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var u = l.refs;
                i === null ? delete u[o] : u[o] = i
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(S(284));
        if (!n._owner)
            throw Error(S(290, e))
    }
    return e
}
function kr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Mu(e) {
    var t = e._init;
    return t(e._payload)
}
function Ca(e) {
    function t(f, c) {
        if (e) {
            var d = f.deletions;
            d === null ? (f.deletions = [c],
            f.flags |= 16) : d.push(c)
        }
    }
    function n(f, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(f, c),
            c = c.sibling;
        return null
    }
    function r(f, c) {
        for (f = new Map; c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
            c = c.sibling;
        return f
    }
    function l(f, c) {
        return f = ft(f, c),
        f.index = 0,
        f.sibling = null,
        f
    }
    function o(f, c, d) {
        return f.index = d,
        e ? (d = f.alternate,
        d !== null ? (d = d.index,
        d < c ? (f.flags |= 2,
        c) : d) : (f.flags |= 2,
        c)) : (f.flags |= 1048576,
        c)
    }
    function i(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function u(f, c, d, v) {
        return c === null || c.tag !== 6 ? (c = eo(d, f.mode, v),
        c.return = f,
        c) : (c = l(c, d),
        c.return = f,
        c)
    }
    function s(f, c, d, v) {
        var k = d.type;
        return k === Ut ? h(f, c, d.props.children, v, d.key) : c !== null && (c.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Je && Mu(k) === c.type) ? (v = l(c, d.props),
        v.ref = Sn(f, c, d),
        v.return = f,
        v) : (v = jr(d.type, d.key, d.props, null, f.mode, v),
        v.ref = Sn(f, c, d),
        v.return = f,
        v)
    }
    function a(f, c, d, v) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = to(d, f.mode, v),
        c.return = f,
        c) : (c = l(c, d.children || []),
        c.return = f,
        c)
    }
    function h(f, c, d, v, k) {
        return c === null || c.tag !== 7 ? (c = Nt(d, f.mode, v, k),
        c.return = f,
        c) : (c = l(c, d),
        c.return = f,
        c)
    }
    function p(f, c, d) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = eo("" + c, f.mode, d),
            c.return = f,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case cr:
                return d = jr(c.type, c.key, c.props, null, f.mode, d),
                d.ref = Sn(f, null, c),
                d.return = f,
                d;
            case jt:
                return c = to(c, f.mode, d),
                c.return = f,
                c;
            case Je:
                var v = c._init;
                return p(f, v(c._payload), d)
            }
            if (xn(c) || mn(c))
                return c = Nt(c, f.mode, d, null),
                c.return = f,
                c;
            kr(f, c)
        }
        return null
    }
    function m(f, c, d, v) {
        var k = c !== null ? c.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return k !== null ? null : u(f, c, "" + d, v);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case cr:
                return d.key === k ? s(f, c, d, v) : null;
            case jt:
                return d.key === k ? a(f, c, d, v) : null;
            case Je:
                return k = d._init,
                m(f, c, k(d._payload), v)
            }
            if (xn(d) || mn(d))
                return k !== null ? null : h(f, c, d, v, null);
            kr(f, d)
        }
        return null
    }
    function y(f, c, d, v, k) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return f = f.get(d) || null,
            u(c, f, "" + v, k);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case cr:
                return f = f.get(v.key === null ? d : v.key) || null,
                s(c, f, v, k);
            case jt:
                return f = f.get(v.key === null ? d : v.key) || null,
                a(c, f, v, k);
            case Je:
                var P = v._init;
                return y(f, c, d, P(v._payload), k)
            }
            if (xn(v) || mn(v))
                return f = f.get(d) || null,
                h(c, f, v, k, null);
            kr(c, v)
        }
        return null
    }
    function g(f, c, d, v) {
        for (var k = null, P = null, N = c, z = c = 0, W = null; N !== null && z < d.length; z++) {
            N.index > z ? (W = N,
            N = null) : W = N.sibling;
            var O = m(f, N, d[z], v);
            if (O === null) {
                N === null && (N = W);
                break
            }
            e && N && O.alternate === null && t(f, N),
            c = o(O, c, z),
            P === null ? k = O : P.sibling = O,
            P = O,
            N = W
        }
        if (z === d.length)
            return n(f, N),
            U && kt(f, z),
            k;
        if (N === null) {
            for (; z < d.length; z++)
                N = p(f, d[z], v),
                N !== null && (c = o(N, c, z),
                P === null ? k = N : P.sibling = N,
                P = N);
            return U && kt(f, z),
            k
        }
        for (N = r(f, N); z < d.length; z++)
            W = y(N, f, z, d[z], v),
            W !== null && (e && W.alternate !== null && N.delete(W.key === null ? z : W.key),
            c = o(W, c, z),
            P === null ? k = W : P.sibling = W,
            P = W);
        return e && N.forEach(function(Ne) {
            return t(f, Ne)
        }),
        U && kt(f, z),
        k
    }
    function w(f, c, d, v) {
        var k = mn(d);
        if (typeof k != "function")
            throw Error(S(150));
        if (d = k.call(d),
        d == null)
            throw Error(S(151));
        for (var P = k = null, N = c, z = c = 0, W = null, O = d.next(); N !== null && !O.done; z++,
        O = d.next()) {
            N.index > z ? (W = N,
            N = null) : W = N.sibling;
            var Ne = m(f, N, O.value, v);
            if (Ne === null) {
                N === null && (N = W);
                break
            }
            e && N && Ne.alternate === null && t(f, N),
            c = o(Ne, c, z),
            P === null ? k = Ne : P.sibling = Ne,
            P = Ne,
            N = W
        }
        if (O.done)
            return n(f, N),
            U && kt(f, z),
            k;
        if (N === null) {
            for (; !O.done; z++,
            O = d.next())
                O = p(f, O.value, v),
                O !== null && (c = o(O, c, z),
                P === null ? k = O : P.sibling = O,
                P = O);
            return U && kt(f, z),
            k
        }
        for (N = r(f, N); !O.done; z++,
        O = d.next())
            O = y(N, f, z, O.value, v),
            O !== null && (e && O.alternate !== null && N.delete(O.key === null ? z : O.key),
            c = o(O, c, z),
            P === null ? k = O : P.sibling = O,
            P = O);
        return e && N.forEach(function(pn) {
            return t(f, pn)
        }),
        U && kt(f, z),
        k
    }
    function E(f, c, d, v) {
        if (typeof d == "object" && d !== null && d.type === Ut && d.key === null && (d = d.props.children),
        typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case cr:
                e: {
                    for (var k = d.key, P = c; P !== null; ) {
                        if (P.key === k) {
                            if (k = d.type,
                            k === Ut) {
                                if (P.tag === 7) {
                                    n(f, P.sibling),
                                    c = l(P, d.props.children),
                                    c.return = f,
                                    f = c;
                                    break e
                                }
                            } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Je && Mu(k) === P.type) {
                                n(f, P.sibling),
                                c = l(P, d.props),
                                c.ref = Sn(f, P, d),
                                c.return = f,
                                f = c;
                                break e
                            }
                            n(f, P);
                            break
                        } else
                            t(f, P);
                        P = P.sibling
                    }
                    d.type === Ut ? (c = Nt(d.props.children, f.mode, v, d.key),
                    c.return = f,
                    f = c) : (v = jr(d.type, d.key, d.props, null, f.mode, v),
                    v.ref = Sn(f, c, d),
                    v.return = f,
                    f = v)
                }
                return i(f);
            case jt:
                e: {
                    for (P = d.key; c !== null; ) {
                        if (c.key === P)
                            if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                                n(f, c.sibling),
                                c = l(c, d.children || []),
                                c.return = f,
                                f = c;
                                break e
                            } else {
                                n(f, c);
                                break
                            }
                        else
                            t(f, c);
                        c = c.sibling
                    }
                    c = to(d, f.mode, v),
                    c.return = f,
                    f = c
                }
                return i(f);
            case Je:
                return P = d._init,
                E(f, c, P(d._payload), v)
            }
            if (xn(d))
                return g(f, c, d, v);
            if (mn(d))
                return w(f, c, d, v);
            kr(f, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d,
        c !== null && c.tag === 6 ? (n(f, c.sibling),
        c = l(c, d),
        c.return = f,
        f = c) : (n(f, c),
        c = eo(d, f.mode, v),
        c.return = f,
        f = c),
        i(f)) : n(f, c)
    }
    return E
}
var ln = Ca(!0)
  , xa = Ca(!1)
  , Jr = vt(null)
  , qr = null
  , Kt = null
  , Ei = null;
function Ci() {
    Ei = Kt = qr = null
}
function xi(e) {
    var t = Jr.current;
    j(Jr),
    e._currentValue = t
}
function Mo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function bt(e, t) {
    qr = e,
    Ei = Kt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0),
    e.firstContext = null)
}
function _e(e) {
    var t = e._currentValue;
    if (Ei !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Kt === null) {
            if (qr === null)
                throw Error(S(308));
            Kt = e,
            qr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Kt = Kt.next = e;
    return t
}
var xt = null;
function _i(e) {
    xt === null ? xt = [e] : xt.push(e)
}
function _a(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    _i(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    Ye(e, r)
}
function Ye(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var qe = !1;
function Pi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Pa(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function He(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function st(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        Ye(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    _i(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    Ye(e, n)
}
function Tr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        fi(e, n)
    }
}
function Iu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i,
                n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else
            l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function br(e, t, n, r) {
    var l = e.updateQueue;
    qe = !1;
    var o = l.firstBaseUpdate
      , i = l.lastBaseUpdate
      , u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u
          , a = s.next;
        s.next = null,
        i === null ? o = a : i.next = a,
        i = s;
        var h = e.alternate;
        h !== null && (h = h.updateQueue,
        u = h.lastBaseUpdate,
        u !== i && (u === null ? h.firstBaseUpdate = a : u.next = a,
        h.lastBaseUpdate = s))
    }
    if (o !== null) {
        var p = l.baseState;
        i = 0,
        h = a = s = null,
        u = o;
        do {
            var m = u.lane
              , y = u.eventTime;
            if ((r & m) === m) {
                h !== null && (h = h.next = {
                    eventTime: y,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var g = e
                      , w = u;
                    switch (m = t,
                    y = n,
                    w.tag) {
                    case 1:
                        if (g = w.payload,
                        typeof g == "function") {
                            p = g.call(y, p, m);
                            break e
                        }
                        p = g;
                        break e;
                    case 3:
                        g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = w.payload,
                        m = typeof g == "function" ? g.call(y, p, m) : g,
                        m == null)
                            break e;
                        p = V({}, p, m);
                        break e;
                    case 2:
                        qe = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                m = l.effects,
                m === null ? l.effects = [u] : m.push(u))
            } else
                y = {
                    eventTime: y,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                h === null ? (a = h = y,
                s = p) : h = h.next = y,
                i |= m;
            if (u = u.next,
            u === null) {
                if (u = l.shared.pending,
                u === null)
                    break;
                m = u,
                u = m.next,
                m.next = null,
                l.lastBaseUpdate = m,
                l.shared.pending = null
            }
        } while (!0);
        if (h === null && (s = p),
        l.baseState = s,
        l.firstBaseUpdate = a,
        l.lastBaseUpdate = h,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                i |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            o === null && (l.shared.lanes = 0);
        Tt |= i,
        e.lanes = i,
        e.memoizedState = p
    }
}
function Fu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(S(191, l));
                l.call(r)
            }
        }
}
var or = {}
  , $e = vt(or)
  , Yn = vt(or)
  , Xn = vt(or);
function _t(e) {
    if (e === or)
        throw Error(S(174));
    return e
}
function Ni(e, t) {
    switch (F(Xn, t),
    F(Yn, e),
    F($e, or),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : po(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = po(t, e)
    }
    j($e),
    F($e, t)
}
function on() {
    j($e),
    j(Yn),
    j(Xn)
}
function Na(e) {
    _t(Xn.current);
    var t = _t($e.current)
      , n = po(t, e.type);
    t !== n && (F(Yn, e),
    F($e, n))
}
function zi(e) {
    Yn.current === e && (j($e),
    j(Yn))
}
var $ = vt(0);
function el(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Xl = [];
function Li() {
    for (var e = 0; e < Xl.length; e++)
        Xl[e]._workInProgressVersionPrimary = null;
    Xl.length = 0
}
var Or = Ge.ReactCurrentDispatcher
  , Gl = Ge.ReactCurrentBatchConfig
  , Rt = 0
  , B = null
  , X = null
  , J = null
  , tl = !1
  , On = !1
  , Gn = 0
  , _d = 0;
function ne() {
    throw Error(S(321))
}
function Ri(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ie(e[n], t[n]))
            return !1;
    return !0
}
function Ti(e, t, n, r, l, o) {
    if (Rt = o,
    B = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Or.current = e === null || e.memoizedState === null ? Ld : Rd,
    e = n(r, l),
    On) {
        o = 0;
        do {
            if (On = !1,
            Gn = 0,
            25 <= o)
                throw Error(S(301));
            o += 1,
            J = X = null,
            t.updateQueue = null,
            Or.current = Td,
            e = n(r, l)
        } while (On)
    }
    if (Or.current = nl,
    t = X !== null && X.next !== null,
    Rt = 0,
    J = X = B = null,
    tl = !1,
    t)
        throw Error(S(300));
    return e
}
function Oi() {
    var e = Gn !== 0;
    return Gn = 0,
    e
}
function De() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return J === null ? B.memoizedState = J = e : J = J.next = e,
    J
}
function Pe() {
    if (X === null) {
        var e = B.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = X.next;
    var t = J === null ? B.memoizedState : J.next;
    if (t !== null)
        J = t,
        X = e;
    else {
        if (e === null)
            throw Error(S(310));
        X = e,
        e = {
            memoizedState: X.memoizedState,
            baseState: X.baseState,
            baseQueue: X.baseQueue,
            queue: X.queue,
            next: null
        },
        J === null ? B.memoizedState = J = e : J = J.next = e
    }
    return J
}
function Zn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Zl(e) {
    var t = Pe()
      , n = t.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = X
      , l = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next,
            o.next = i
        }
        r.baseQueue = l = o,
        n.pending = null
    }
    if (l !== null) {
        o = l.next,
        r = r.baseState;
        var u = i = null
          , s = null
          , a = o;
        do {
            var h = a.lane;
            if ((Rt & h) === h)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }),
                r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var p = {
                    lane: h,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                s === null ? (u = s = p,
                i = r) : s = s.next = p,
                B.lanes |= h,
                Tt |= h
            }
            a = a.next
        } while (a !== null && a !== o);
        s === null ? i = r : s.next = u,
        Ie(r, t.memoizedState) || (fe = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            o = l.lane,
            B.lanes |= o,
            Tt |= o,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Jl(e) {
    var t = Pe()
      , n = t.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do
            o = e(o, i.action),
            i = i.next;
        while (i !== l);
        Ie(o, t.memoizedState) || (fe = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function za() {}
function La(e, t) {
    var n = B
      , r = Pe()
      , l = t()
      , o = !Ie(r.memoizedState, l);
    if (o && (r.memoizedState = l,
    fe = !0),
    r = r.queue,
    Mi(Oa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Jn(9, Ta.bind(null, n, r, l, t), void 0, null),
        q === null)
            throw Error(S(349));
        Rt & 30 || Ra(n, t, l)
    }
    return l
}
function Ra(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = B.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    B.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Ta(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Ma(t) && Ia(e)
}
function Oa(e, t, n) {
    return n(function() {
        Ma(t) && Ia(e)
    })
}
function Ma(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ie(e, n)
    } catch {
        return !0
    }
}
function Ia(e) {
    var t = Ye(e, 1);
    t !== null && Me(t, e, 1, -1)
}
function Du(e) {
    var t = De();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = zd.bind(null, B, e),
    [t.memoizedState, e]
}
function Jn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = B.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    B.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Fa() {
    return Pe().memoizedState
}
function Mr(e, t, n, r) {
    var l = De();
    B.flags |= e,
    l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r)
}
function vl(e, t, n, r) {
    var l = Pe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (X !== null) {
        var i = X.memoizedState;
        if (o = i.destroy,
        r !== null && Ri(r, i.deps)) {
            l.memoizedState = Jn(t, n, o, r);
            return
        }
    }
    B.flags |= e,
    l.memoizedState = Jn(1 | t, n, o, r)
}
function ju(e, t) {
    return Mr(8390656, 8, e, t)
}
function Mi(e, t) {
    return vl(2048, 8, e, t)
}
function Da(e, t) {
    return vl(4, 2, e, t)
}
function ja(e, t) {
    return vl(4, 4, e, t)
}
function Ua(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function $a(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    vl(4, 4, Ua.bind(null, t, e), n)
}
function Ii() {}
function Ba(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ri(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Va(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ri(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Aa(e, t, n) {
    return Rt & 21 ? (Ie(n, t) || (n = Ys(),
    B.lanes |= n,
    Tt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    fe = !0),
    e.memoizedState = n)
}
function Pd(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Gl.transition;
    Gl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        I = n,
        Gl.transition = r
    }
}
function Wa() {
    return Pe().memoizedState
}
function Nd(e, t, n) {
    var r = ct(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ha(e))
        Qa(t, n);
    else if (n = _a(e, t, n, r),
    n !== null) {
        var l = ue();
        Me(n, e, r, l),
        Ka(n, t, r)
    }
}
function zd(e, t, n) {
    var r = ct(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ha(e))
        Qa(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var i = t.lastRenderedState
                  , u = o(i, n);
                if (l.hasEagerState = !0,
                l.eagerState = u,
                Ie(u, i)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    _i(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = _a(e, t, l, r),
        n !== null && (l = ue(),
        Me(n, e, r, l),
        Ka(n, t, r))
    }
}
function Ha(e) {
    var t = e.alternate;
    return e === B || t !== null && t === B
}
function Qa(e, t) {
    On = tl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Ka(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        fi(e, n)
    }
}
var nl = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1
}
  , Ld = {
    readContext: _e,
    useCallback: function(e, t) {
        return De().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: _e,
    useEffect: ju,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Mr(4194308, 4, Ua.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Mr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Mr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = De();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = De();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Nd.bind(null, B, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = De();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Du,
    useDebugValue: Ii,
    useDeferredValue: function(e) {
        return De().memoizedState = e
    },
    useTransition: function() {
        var e = Du(!1)
          , t = e[0];
        return e = Pd.bind(null, e[1]),
        De().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = B
          , l = De();
        if (U) {
            if (n === void 0)
                throw Error(S(407));
            n = n()
        } else {
            if (n = t(),
            q === null)
                throw Error(S(349));
            Rt & 30 || Ra(r, t, n)
        }
        l.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return l.queue = o,
        ju(Oa.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Jn(9, Ta.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = De()
          , t = q.identifierPrefix;
        if (U) {
            var n = We
              , r = Ae;
            n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Gn++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = _d++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Rd = {
    readContext: _e,
    useCallback: Ba,
    useContext: _e,
    useEffect: Mi,
    useImperativeHandle: $a,
    useInsertionEffect: Da,
    useLayoutEffect: ja,
    useMemo: Va,
    useReducer: Zl,
    useRef: Fa,
    useState: function() {
        return Zl(Zn)
    },
    useDebugValue: Ii,
    useDeferredValue: function(e) {
        var t = Pe();
        return Aa(t, X.memoizedState, e)
    },
    useTransition: function() {
        var e = Zl(Zn)[0]
          , t = Pe().memoizedState;
        return [e, t]
    },
    useMutableSource: za,
    useSyncExternalStore: La,
    useId: Wa,
    unstable_isNewReconciler: !1
}
  , Td = {
    readContext: _e,
    useCallback: Ba,
    useContext: _e,
    useEffect: Mi,
    useImperativeHandle: $a,
    useInsertionEffect: Da,
    useLayoutEffect: ja,
    useMemo: Va,
    useReducer: Jl,
    useRef: Fa,
    useState: function() {
        return Jl(Zn)
    },
    useDebugValue: Ii,
    useDeferredValue: function(e) {
        var t = Pe();
        return X === null ? t.memoizedState = e : Aa(t, X.memoizedState, e)
    },
    useTransition: function() {
        var e = Jl(Zn)[0]
          , t = Pe().memoizedState;
        return [e, t]
    },
    useMutableSource: za,
    useSyncExternalStore: La,
    useId: Wa,
    unstable_isNewReconciler: !1
};
function Le(e, t) {
    if (e && e.defaultProps) {
        t = V({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Io(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : V({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var yl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? It(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = ct(e)
          , o = He(r, l);
        o.payload = t,
        n != null && (o.callback = n),
        t = st(e, o, l),
        t !== null && (Me(t, e, l, r),
        Tr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = ct(e)
          , o = He(r, l);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = st(e, o, l),
        t !== null && (Me(t, e, l, r),
        Tr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue()
          , r = ct(e)
          , l = He(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = st(e, l, r),
        t !== null && (Me(t, e, r, n),
        Tr(t, e, r))
    }
};
function Uu(e, t, n, r, l, o, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, o) : !0
}
function Ya(e, t, n) {
    var r = !1
      , l = ht
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = _e(o) : (l = pe(t) ? zt : oe.current,
    r = t.contextTypes,
    o = (r = r != null) ? nn(e, l) : ht),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = yl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function $u(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yl.enqueueReplaceState(t, t.state, null)
}
function Fo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    Pi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = _e(o) : (o = pe(t) ? zt : oe.current,
    l.context = nn(e, o)),
    l.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Io(e, t, o, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && yl.enqueueReplaceState(l, l.state, null),
    br(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function un(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += lf(r),
            r = r.return;
        while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function ql(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Do(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Od = typeof WeakMap == "function" ? WeakMap : Map;
function Xa(e, t, n) {
    n = He(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ll || (ll = !0,
        Ko = r),
        Do(e, t)
    }
    ,
    n
}
function Ga(e, t, n) {
    n = He(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Do(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Do(e, t),
        typeof r != "function" && (at === null ? at = new Set([this]) : at.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function Bu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Od;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Kd.bind(null, e, t, n),
    t.then(e, e))
}
function Vu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Au(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = He(-1, 1),
    t.tag = 2,
    st(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Md = Ge.ReactCurrentOwner
  , fe = !1;
function ie(e, t, n, r) {
    t.child = e === null ? xa(t, null, n, r) : ln(t, e.child, n, r)
}
function Wu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return bt(t, l),
    r = Ti(e, t, n, r, o, l),
    n = Oi(),
    e !== null && !fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Xe(e, t, l)) : (U && n && wi(t),
    t.flags |= 1,
    ie(e, t, r, l),
    t.child)
}
function Hu(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Ai(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Za(e, t, o, r, l)) : (e = jr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Wn,
        n(i, r) && e.ref === t.ref)
            return Xe(e, t, l)
    }
    return t.flags |= 1,
    e = ft(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Za(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Wn(o, r) && e.ref === t.ref)
            if (fe = !1,
            t.pendingProps = r = o,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (fe = !0);
            else
                return t.lanes = e.lanes,
                Xe(e, t, l)
    }
    return jo(e, t, n, r, l)
}
function Ja(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            F(Xt, me),
            me |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                F(Xt, me),
                me |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            F(Xt, me),
            me |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        F(Xt, me),
        me |= r;
    return ie(e, t, l, n),
    t.child
}
function qa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function jo(e, t, n, r, l) {
    var o = pe(n) ? zt : oe.current;
    return o = nn(t, o),
    bt(t, l),
    n = Ti(e, t, n, r, o, l),
    r = Oi(),
    e !== null && !fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Xe(e, t, l)) : (U && r && wi(t),
    t.flags |= 1,
    ie(e, t, n, l),
    t.child)
}
function Qu(e, t, n, r, l) {
    if (pe(n)) {
        var o = !0;
        Xr(t)
    } else
        o = !1;
    if (bt(t, l),
    t.stateNode === null)
        Ir(e, t),
        Ya(t, n, r),
        Fo(t, n, r, l),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , u = t.memoizedProps;
        i.props = u;
        var s = i.context
          , a = n.contextType;
        typeof a == "object" && a !== null ? a = _e(a) : (a = pe(n) ? zt : oe.current,
        a = nn(t, a));
        var h = n.getDerivedStateFromProps
          , p = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && $u(t, i, r, a),
        qe = !1;
        var m = t.memoizedState;
        i.state = m,
        br(t, r, i, l),
        s = t.memoizedState,
        u !== r || m !== s || de.current || qe ? (typeof h == "function" && (Io(t, n, h, r),
        s = t.memoizedState),
        (u = qe || Uu(t, n, u, r, m, s, a)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        i.props = r,
        i.state = s,
        i.context = a,
        r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        Pa(e, t),
        u = t.memoizedProps,
        a = t.type === t.elementType ? u : Le(t.type, u),
        i.props = a,
        p = t.pendingProps,
        m = i.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = _e(s) : (s = pe(n) ? zt : oe.current,
        s = nn(t, s));
        var y = n.getDerivedStateFromProps;
        (h = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== p || m !== s) && $u(t, i, r, s),
        qe = !1,
        m = t.memoizedState,
        i.state = m,
        br(t, r, i, l);
        var g = t.memoizedState;
        u !== p || m !== g || de.current || qe ? (typeof y == "function" && (Io(t, n, y, r),
        g = t.memoizedState),
        (a = qe || Uu(t, n, a, r, m, g, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = g),
        i.props = r,
        i.state = g,
        i.context = s,
        r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Uo(e, t, n, r, o, l)
}
function Uo(e, t, n, r, l, o) {
    qa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return l && Ru(t, n, !1),
        Xe(e, t, o);
    r = t.stateNode,
    Md.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = ln(t, e.child, null, o),
    t.child = ln(t, null, u, o)) : ie(e, t, u, o),
    t.memoizedState = r.state,
    l && Ru(t, n, !0),
    t.child
}
function ba(e) {
    var t = e.stateNode;
    t.pendingContext ? Lu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lu(e, t.context, !1),
    Ni(e, t.containerInfo)
}
function Ku(e, t, n, r, l) {
    return rn(),
    ki(l),
    t.flags |= 256,
    ie(e, t, n, r),
    t.child
}
var $o = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Bo(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function ec(e, t, n) {
    var r = t.pendingProps, l = $.current, o = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    F($, l & 1),
    e === null)
        return Oo(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = i) : o = Sl(i, r, 0, null),
        e = Nt(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Bo(n),
        t.memoizedState = $o,
        e) : Fi(t, i));
    if (l = e.memoizedState,
    l !== null && (u = l.dehydrated,
    u !== null))
        return Id(e, t, i, r, u, l, n);
    if (o) {
        o = r.fallback,
        i = t.mode,
        l = e.child,
        u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = ft(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        u !== null ? o = ft(u, o) : (o = Nt(o, i, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        i = e.child.memoizedState,
        i = i === null ? Bo(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        o.memoizedState = i,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = $o,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = ft(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Fi(e, t) {
    return t = Sl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Er(e, t, n, r) {
    return r !== null && ki(r),
    ln(t, e.child, null, n),
    e = Fi(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Id(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ql(Error(S(422))),
        Er(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        l = t.mode,
        r = Sl({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        o = Nt(o, l, i, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && ln(t, e.child, null, i),
        t.child.memoizedState = Bo(i),
        t.memoizedState = $o,
        o);
    if (!(t.mode & 1))
        return Er(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        o = Error(S(419)),
        r = ql(o, r, void 0),
        Er(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0,
    fe || u) {
        if (r = q,
        r !== null) {
            switch (i & -i) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l,
            l !== 0 && l !== o.retryLane && (o.retryLane = l,
            Ye(e, l),
            Me(r, e, l, -1))
        }
        return Vi(),
        r = ql(Error(S(421))),
        Er(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Yd.bind(null, e),
    l._reactRetry = t,
    null) : (e = o.treeContext,
    ve = ut(l.nextSibling),
    ye = t,
    U = !0,
    Te = null,
    e !== null && (ke[Ee++] = Ae,
    ke[Ee++] = We,
    ke[Ee++] = Lt,
    Ae = e.id,
    We = e.overflow,
    Lt = t),
    t = Fi(t, r.children),
    t.flags |= 4096,
    t)
}
function Yu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Mo(e.return, t, n)
}
function bl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = l)
}
function tc(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , o = r.tail;
    if (ie(e, t, r.children, n),
    r = $.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Yu(e, n, t);
                else if (e.tag === 19)
                    Yu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (F($, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && el(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            bl(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && el(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            bl(t, !0, n, null, o);
            break;
        case "together":
            bl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ir(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Xe(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Tt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(S(153));
    if (t.child !== null) {
        for (e = t.child,
        n = ft(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = ft(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Fd(e, t, n) {
    switch (t.tag) {
    case 3:
        ba(t),
        rn();
        break;
    case 5:
        Na(t);
        break;
    case 1:
        pe(t.type) && Xr(t);
        break;
    case 4:
        Ni(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        F(Jr, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (F($, $.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? ec(e, t, n) : (F($, $.current & 1),
            e = Xe(e, t, n),
            e !== null ? e.sibling : null);
        F($, $.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return tc(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        F($, $.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Ja(e, t, n)
    }
    return Xe(e, t, n)
}
var nc, Vo, rc, lc;
nc = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Vo = function() {}
;
rc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        _t($e.current);
        var o = null;
        switch (n) {
        case "input":
            l = so(e, l),
            r = so(e, r),
            o = [];
            break;
        case "select":
            l = V({}, l, {
                value: void 0
            }),
            r = V({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            l = fo(e, l),
            r = fo(e, r),
            o = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr)
        }
        ho(n, r);
        var i;
        n = null;
        for (a in l)
            if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
                if (a === "style") {
                    var u = l[a];
                    for (i in u)
                        u.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Dn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
        for (a in r) {
            var s = r[a];
            if (u = l != null ? l[a] : void 0,
            r.hasOwnProperty(a) && s !== u && (s != null || u != null))
                if (a === "style")
                    if (u) {
                        for (i in u)
                            !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in s)
                            s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}),
                            n[i] = s[i])
                    } else
                        n || (o || (o = []),
                        o.push(a, n)),
                        n = s;
                else
                    a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    u = u ? u.__html : void 0,
                    s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Dn.hasOwnProperty(a) ? (s != null && a === "onScroll" && D("scroll", e),
                    o || u === s || (o = [])) : (o = o || []).push(a, s))
        }
        n && (o = o || []).push("style", n);
        var a = o;
        (t.updateQueue = a) && (t.flags |= 4)
    }
}
;
lc = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function kn(e, t) {
    if (!U)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Dd(e, t, n) {
    var r = t.pendingProps;
    switch (Si(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return re(t),
        null;
    case 1:
        return pe(t.type) && Yr(),
        re(t),
        null;
    case 3:
        return r = t.stateNode,
        on(),
        j(de),
        j(oe),
        Li(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Sr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Te !== null && (Go(Te),
        Te = null))),
        Vo(e, t),
        re(t),
        null;
    case 5:
        zi(t);
        var l = _t(Xn.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            rc(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(S(166));
                return re(t),
                null
            }
            if (e = _t($e.current),
            Sr(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[je] = t,
                r[Kn] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    D("cancel", r),
                    D("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    D("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Pn.length; l++)
                        D(Pn[l], r);
                    break;
                case "source":
                    D("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    D("error", r),
                    D("load", r);
                    break;
                case "details":
                    D("toggle", r);
                    break;
                case "input":
                    nu(r, o),
                    D("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    D("invalid", r);
                    break;
                case "textarea":
                    lu(r, o),
                    D("invalid", r)
                }
                ho(n, o),
                l = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var u = o[i];
                        i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && wr(r.textContent, u, e),
                        l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && wr(r.textContent, u, e),
                        l = ["children", "" + u]) : Dn.hasOwnProperty(i) && u != null && i === "onScroll" && D("scroll", r)
                    }
                switch (n) {
                case "input":
                    fr(r),
                    ru(r, o, !0);
                    break;
                case "textarea":
                    fr(r),
                    ou(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Kr)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Os(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[je] = t,
                e[Kn] = r,
                nc(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = mo(n, r),
                    n) {
                    case "dialog":
                        D("cancel", e),
                        D("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        D("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Pn.length; l++)
                            D(Pn[l], e);
                        l = r;
                        break;
                    case "source":
                        D("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        D("error", e),
                        D("load", e),
                        l = r;
                        break;
                    case "details":
                        D("toggle", e),
                        l = r;
                        break;
                    case "input":
                        nu(e, r),
                        l = so(e, r),
                        D("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = V({}, r, {
                            value: void 0
                        }),
                        D("invalid", e);
                        break;
                    case "textarea":
                        lu(e, r),
                        l = fo(e, r),
                        D("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    ho(n, l),
                    u = l;
                    for (o in u)
                        if (u.hasOwnProperty(o)) {
                            var s = u[o];
                            o === "style" ? Fs(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Ms(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && jn(e, s) : typeof s == "number" && jn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Dn.hasOwnProperty(o) ? s != null && o === "onScroll" && D("scroll", e) : s != null && oi(e, o, s, i))
                        }
                    switch (n) {
                    case "input":
                        fr(e),
                        ru(e, r, !1);
                        break;
                    case "textarea":
                        fr(e),
                        ou(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + pt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Gt(e, !!r.multiple, o, !1) : r.defaultValue != null && Gt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = Kr)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            lc(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(S(166));
            if (n = _t(Xn.current),
            _t($e.current),
            Sr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[je] = t,
                (o = r.nodeValue !== n) && (e = ye,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        wr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && wr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[je] = t,
                t.stateNode = r
        }
        return re(t),
        null;
    case 13:
        if (j($),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
                Ea(),
                rn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Sr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(S(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(S(317));
                    o[je] = t
                } else
                    rn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                re(t),
                o = !1
            } else
                Te !== null && (Go(Te),
                Te = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || $.current & 1 ? G === 0 && (G = 3) : Vi())),
        t.updateQueue !== null && (t.flags |= 4),
        re(t),
        null);
    case 4:
        return on(),
        Vo(e, t),
        e === null && Hn(t.stateNode.containerInfo),
        re(t),
        null;
    case 10:
        return xi(t.type._context),
        re(t),
        null;
    case 17:
        return pe(t.type) && Yr(),
        re(t),
        null;
    case 19:
        if (j($),
        o = t.memoizedState,
        o === null)
            return re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
            if (r)
                kn(o, !1);
            else {
                if (G !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = el(e),
                        i !== null) {
                            for (t.flags |= 128,
                            kn(o, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                i = o.alternate,
                                i === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = i.childLanes,
                                o.lanes = i.lanes,
                                o.child = i.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = i.memoizedProps,
                                o.memoizedState = i.memoizedState,
                                o.updateQueue = i.updateQueue,
                                o.type = i.type,
                                e = i.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return F($, $.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Q() > sn && (t.flags |= 128,
                r = !0,
                kn(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = el(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    kn(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
                        return re(t),
                        null
                } else
                    2 * Q() - o.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    kn(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Q(),
        t.sibling = null,
        n = $.current,
        F($, r ? n & 1 | 2 : n & 1),
        t) : (re(t),
        null);
    case 22:
    case 23:
        return Bi(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? me & 1073741824 && (re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(S(156, t.tag))
}
function jd(e, t) {
    switch (Si(t),
    t.tag) {
    case 1:
        return pe(t.type) && Yr(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return on(),
        j(de),
        j(oe),
        Li(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return zi(t),
        null;
    case 13:
        if (j($),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(S(340));
            rn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return j($),
        null;
    case 4:
        return on(),
        null;
    case 10:
        return xi(t.type._context),
        null;
    case 22:
    case 23:
        return Bi(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Cr = !1
  , le = !1
  , Ud = typeof WeakSet == "function" ? WeakSet : Set
  , C = null;
function Yt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                A(e, t, r)
            }
        else
            n.current = null
}
function Ao(e, t, n) {
    try {
        n()
    } catch (r) {
        A(e, t, r)
    }
}
var Xu = !1;
function $d(e, t) {
    if (_o = Wr,
    e = aa(),
    gi(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , u = -1
                      , s = -1
                      , a = 0
                      , h = 0
                      , p = e
                      , m = null;
                    t: for (; ; ) {
                        for (var y; p !== n || l !== 0 && p.nodeType !== 3 || (u = i + l),
                        p !== o || r !== 0 && p.nodeType !== 3 || (s = i + r),
                        p.nodeType === 3 && (i += p.nodeValue.length),
                        (y = p.firstChild) !== null; )
                            m = p,
                            p = y;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (m === n && ++a === l && (u = i),
                            m === o && ++h === r && (s = i),
                            (y = p.nextSibling) !== null)
                                break;
                            p = m,
                            m = p.parentNode
                        }
                        p = y
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Po = {
        focusedElem: e,
        selectionRange: n
    },
    Wr = !1,
    C = t; C !== null; )
        if (t = C,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            C = e;
        else
            for (; C !== null; ) {
                t = C;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var w = g.memoizedProps
                                  , E = g.memoizedState
                                  , f = t.stateNode
                                  , c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Le(t.type, w), E);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var d = t.stateNode.containerInfo;
                            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(S(163))
                        }
                } catch (v) {
                    A(t, t.return, v)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    C = e;
                    break
                }
                C = t.return
            }
    return g = Xu,
    Xu = !1,
    g
}
function Mn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0,
                o !== void 0 && Ao(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}
function gl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Wo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function oc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    oc(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[je],
    delete t[Kn],
    delete t[Lo],
    delete t[kd],
    delete t[Ed])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function ic(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Gu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || ic(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ho(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Kr));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ho(e, t, n),
        e = e.sibling; e !== null; )
            Ho(e, t, n),
            e = e.sibling
}
function Qo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Qo(e, t, n),
        e = e.sibling; e !== null; )
            Qo(e, t, n),
            e = e.sibling
}
var b = null
  , Re = !1;
function Ze(e, t, n) {
    for (n = n.child; n !== null; )
        uc(e, t, n),
        n = n.sibling
}
function uc(e, t, n) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function")
        try {
            Ue.onCommitFiberUnmount(cl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || Yt(n, t);
    case 6:
        var r = b
          , l = Re;
        b = null,
        Ze(e, t, n),
        b = r,
        Re = l,
        b !== null && (Re ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
        break;
    case 18:
        b !== null && (Re ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? Kl(e.parentNode, n) : e.nodeType === 1 && Kl(e, n),
        Vn(e)) : Kl(b, n.stateNode));
        break;
    case 4:
        r = b,
        l = Re,
        b = n.stateNode.containerInfo,
        Re = !0,
        Ze(e, t, n),
        b = r,
        Re = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var o = l
                  , i = o.destroy;
                o = o.tag,
                i !== void 0 && (o & 2 || o & 4) && Ao(n, t, i),
                l = l.next
            } while (l !== r)
        }
        Ze(e, t, n);
        break;
    case 1:
        if (!le && (Yt(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                A(n, t, u)
            }
        Ze(e, t, n);
        break;
    case 21:
        Ze(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
        Ze(e, t, n),
        le = r) : Ze(e, t, n);
        break;
    default:
        Ze(e, t, n)
    }
}
function Zu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ud),
        t.forEach(function(r) {
            var l = Xd.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e
                  , i = t
                  , u = i;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        b = u.stateNode,
                        Re = !1;
                        break e;
                    case 3:
                        b = u.stateNode.containerInfo,
                        Re = !0;
                        break e;
                    case 4:
                        b = u.stateNode.containerInfo,
                        Re = !0;
                        break e
                    }
                    u = u.return
                }
                if (b === null)
                    throw Error(S(160));
                uc(o, i, l),
                b = null,
                Re = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (a) {
                A(l, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            sc(t, e),
            t = t.sibling
}
function sc(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ze(t, e),
        Fe(e),
        r & 4) {
            try {
                Mn(3, e, e.return),
                gl(3, e)
            } catch (w) {
                A(e, e.return, w)
            }
            try {
                Mn(5, e, e.return)
            } catch (w) {
                A(e, e.return, w)
            }
        }
        break;
    case 1:
        ze(t, e),
        Fe(e),
        r & 512 && n !== null && Yt(n, n.return);
        break;
    case 5:
        if (ze(t, e),
        Fe(e),
        r & 512 && n !== null && Yt(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                jn(l, "")
            } catch (w) {
                A(e, e.return, w)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var o = e.memoizedProps
              , i = n !== null ? n.memoizedProps : o
              , u = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    u === "input" && o.type === "radio" && o.name != null && Rs(l, o),
                    mo(u, i);
                    var a = mo(u, o);
                    for (i = 0; i < s.length; i += 2) {
                        var h = s[i]
                          , p = s[i + 1];
                        h === "style" ? Fs(l, p) : h === "dangerouslySetInnerHTML" ? Ms(l, p) : h === "children" ? jn(l, p) : oi(l, h, p, a)
                    }
                    switch (u) {
                    case "input":
                        ao(l, o);
                        break;
                    case "textarea":
                        Ts(l, o);
                        break;
                    case "select":
                        var m = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!o.multiple;
                        var y = o.value;
                        y != null ? Gt(l, !!o.multiple, y, !1) : m !== !!o.multiple && (o.defaultValue != null ? Gt(l, !!o.multiple, o.defaultValue, !0) : Gt(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Kn] = o
                } catch (w) {
                    A(e, e.return, w)
                }
        }
        break;
    case 6:
        if (ze(t, e),
        Fe(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(S(162));
            l = e.stateNode,
            o = e.memoizedProps;
            try {
                l.nodeValue = o
            } catch (w) {
                A(e, e.return, w)
            }
        }
        break;
    case 3:
        if (ze(t, e),
        Fe(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Vn(t.containerInfo)
            } catch (w) {
                A(e, e.return, w)
            }
        break;
    case 4:
        ze(t, e),
        Fe(e);
        break;
    case 13:
        ze(t, e),
        Fe(e),
        l = e.child,
        l.flags & 8192 && (o = l.memoizedState !== null,
        l.stateNode.isHidden = o,
        !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ui = Q())),
        r & 4 && Zu(e);
        break;
    case 22:
        if (h = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (a = le) || h,
        ze(t, e),
        le = a) : ze(t, e),
        Fe(e),
        r & 8192) {
            if (a = e.memoizedState !== null,
            (e.stateNode.isHidden = a) && !h && e.mode & 1)
                for (C = e,
                h = e.child; h !== null; ) {
                    for (p = C = h; C !== null; ) {
                        switch (m = C,
                        y = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Mn(4, m, m.return);
                            break;
                        case 1:
                            Yt(m, m.return);
                            var g = m.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (w) {
                                    A(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            Yt(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                qu(p);
                                continue
                            }
                        }
                        y !== null ? (y.return = m,
                        C = y) : qu(p)
                    }
                    h = h.sibling
                }
            e: for (h = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (h === null) {
                        h = p;
                        try {
                            l = p.stateNode,
                            a ? (o = l.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode,
                            s = p.memoizedProps.style,
                            i = s != null && s.hasOwnProperty("display") ? s.display : null,
                            u.style.display = Is("display", i))
                        } catch (w) {
                            A(e, e.return, w)
                        }
                    }
                } else if (p.tag === 6) {
                    if (h === null)
                        try {
                            p.stateNode.nodeValue = a ? "" : p.memoizedProps
                        } catch (w) {
                            A(e, e.return, w)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    h === p && (h = null),
                    p = p.return
                }
                h === p && (h = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        ze(t, e),
        Fe(e),
        r & 4 && Zu(e);
        break;
    case 21:
        break;
    default:
        ze(t, e),
        Fe(e)
    }
}
function Fe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (ic(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(S(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (jn(l, ""),
                r.flags &= -33);
                var o = Gu(e);
                Qo(e, o, l);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , u = Gu(e);
                Ho(e, u, i);
                break;
            default:
                throw Error(S(161))
            }
        } catch (s) {
            A(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Bd(e, t, n) {
    C = e,
    ac(e)
}
function ac(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
        var l = C
          , o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Cr;
            if (!i) {
                var u = l.alternate
                  , s = u !== null && u.memoizedState !== null || le;
                u = Cr;
                var a = le;
                if (Cr = i,
                (le = s) && !a)
                    for (C = l; C !== null; )
                        i = C,
                        s = i.child,
                        i.tag === 22 && i.memoizedState !== null ? bu(l) : s !== null ? (s.return = i,
                        C = s) : bu(l);
                for (; o !== null; )
                    C = o,
                    ac(o),
                    o = o.sibling;
                C = l,
                Cr = u,
                le = a
            }
            Ju(e)
        } else
            l.subtreeFlags & 8772 && o !== null ? (o.return = l,
            C = o) : Ju(e)
    }
}
function Ju(e) {
    for (; C !== null; ) {
        var t = C;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || gl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Fu(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Fu(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var a = t.alternate;
                            if (a !== null) {
                                var h = a.memoizedState;
                                if (h !== null) {
                                    var p = h.dehydrated;
                                    p !== null && Vn(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(S(163))
                    }
                le || t.flags & 512 && Wo(t)
            } catch (m) {
                A(t, t.return, m)
            }
        }
        if (t === e) {
            C = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            C = n;
            break
        }
        C = t.return
    }
}
function qu(e) {
    for (; C !== null; ) {
        var t = C;
        if (t === e) {
            C = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            C = n;
            break
        }
        C = t.return
    }
}
function bu(e) {
    for (; C !== null; ) {
        var t = C;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    gl(4, t)
                } catch (s) {
                    A(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        A(t, l, s)
                    }
                }
                var o = t.return;
                try {
                    Wo(t)
                } catch (s) {
                    A(t, o, s)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    Wo(t)
                } catch (s) {
                    A(t, i, s)
                }
            }
        } catch (s) {
            A(t, t.return, s)
        }
        if (t === e) {
            C = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            C = u;
            break
        }
        C = t.return
    }
}
var Vd = Math.ceil
  , rl = Ge.ReactCurrentDispatcher
  , Di = Ge.ReactCurrentOwner
  , xe = Ge.ReactCurrentBatchConfig
  , M = 0
  , q = null
  , K = null
  , ee = 0
  , me = 0
  , Xt = vt(0)
  , G = 0
  , qn = null
  , Tt = 0
  , wl = 0
  , ji = 0
  , In = null
  , ce = null
  , Ui = 0
  , sn = 1 / 0
  , Be = null
  , ll = !1
  , Ko = null
  , at = null
  , xr = !1
  , nt = null
  , ol = 0
  , Fn = 0
  , Yo = null
  , Fr = -1
  , Dr = 0;
function ue() {
    return M & 6 ? Q() : Fr !== -1 ? Fr : Fr = Q()
}
function ct(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : xd.transition !== null ? (Dr === 0 && (Dr = Ys()),
    Dr) : (e = I,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : ea(e.type)),
    e) : 1
}
function Me(e, t, n, r) {
    if (50 < Fn)
        throw Fn = 0,
        Yo = null,
        Error(S(185));
    nr(e, n, r),
    (!(M & 2) || e !== q) && (e === q && (!(M & 2) && (wl |= n),
    G === 4 && et(e, ee)),
    he(e, r),
    n === 1 && M === 0 && !(t.mode & 1) && (sn = Q() + 500,
    ml && yt()))
}
function he(e, t) {
    var n = e.callbackNode;
    xf(e, t);
    var r = Ar(e, e === q ? ee : 0);
    if (r === 0)
        n !== null && su(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && su(n),
        t === 1)
            e.tag === 0 ? Cd(es.bind(null, e)) : wa(es.bind(null, e)),
            wd(function() {
                !(M & 6) && yt()
            }),
            n = null;
        else {
            switch (Xs(r)) {
            case 1:
                n = ci;
                break;
            case 4:
                n = Qs;
                break;
            case 16:
                n = Vr;
                break;
            case 536870912:
                n = Ks;
                break;
            default:
                n = Vr
            }
            n = yc(n, cc.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function cc(e, t) {
    if (Fr = -1,
    Dr = 0,
    M & 6)
        throw Error(S(327));
    var n = e.callbackNode;
    if (en() && e.callbackNode !== n)
        return null;
    var r = Ar(e, e === q ? ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = il(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var o = dc();
        (q !== e || ee !== t) && (Be = null,
        sn = Q() + 500,
        Pt(e, t));
        do
            try {
                Hd();
                break
            } catch (u) {
                fc(e, u)
            }
        while (!0);
        Ci(),
        rl.current = o,
        M = l,
        K !== null ? t = 0 : (q = null,
        ee = 0,
        t = G)
    }
    if (t !== 0) {
        if (t === 2 && (l = So(e),
        l !== 0 && (r = l,
        t = Xo(e, l))),
        t === 1)
            throw n = qn,
            Pt(e, 0),
            et(e, r),
            he(e, Q()),
            n;
        if (t === 6)
            et(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !Ad(l) && (t = il(e, r),
            t === 2 && (o = So(e),
            o !== 0 && (r = o,
            t = Xo(e, o))),
            t === 1))
                throw n = qn,
                Pt(e, 0),
                et(e, r),
                he(e, Q()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(S(345));
            case 2:
                Et(e, ce, Be);
                break;
            case 3:
                if (et(e, r),
                (r & 130023424) === r && (t = Ui + 500 - Q(),
                10 < t)) {
                    if (Ar(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        ue(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = zo(Et.bind(null, e, ce, Be), t);
                    break
                }
                Et(e, ce, Be);
                break;
            case 4:
                if (et(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var i = 31 - Oe(r);
                    o = 1 << i,
                    i = t[i],
                    i > l && (l = i),
                    r &= ~o
                }
                if (r = l,
                r = Q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vd(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = zo(Et.bind(null, e, ce, Be), r);
                    break
                }
                Et(e, ce, Be);
                break;
            case 5:
                Et(e, ce, Be);
                break;
            default:
                throw Error(S(329))
            }
        }
    }
    return he(e, Q()),
    e.callbackNode === n ? cc.bind(null, e) : null
}
function Xo(e, t) {
    var n = In;
    return e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256),
    e = il(e, t),
    e !== 2 && (t = ce,
    ce = n,
    t !== null && Go(t)),
    e
}
function Go(e) {
    ce === null ? ce = e : ce.push.apply(ce, e)
}
function Ad(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ie(o(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function et(e, t) {
    for (t &= ~ji,
    t &= ~wl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Oe(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function es(e) {
    if (M & 6)
        throw Error(S(327));
    en();
    var t = Ar(e, 0);
    if (!(t & 1))
        return he(e, Q()),
        null;
    var n = il(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = So(e);
        r !== 0 && (t = r,
        n = Xo(e, r))
    }
    if (n === 1)
        throw n = qn,
        Pt(e, 0),
        et(e, t),
        he(e, Q()),
        n;
    if (n === 6)
        throw Error(S(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Et(e, ce, Be),
    he(e, Q()),
    null
}
function $i(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n,
        M === 0 && (sn = Q() + 500,
        ml && yt())
    }
}
function Ot(e) {
    nt !== null && nt.tag === 0 && !(M & 6) && en();
    var t = M;
    M |= 1;
    var n = xe.transition
      , r = I;
    try {
        if (xe.transition = null,
        I = 1,
        e)
            return e()
    } finally {
        I = r,
        xe.transition = n,
        M = t,
        !(M & 6) && yt()
    }
}
function Bi() {
    me = Xt.current,
    j(Xt)
}
function Pt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    gd(n)),
    K !== null)
        for (n = K.return; n !== null; ) {
            var r = n;
            switch (Si(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Yr();
                break;
            case 3:
                on(),
                j(de),
                j(oe),
                Li();
                break;
            case 5:
                zi(r);
                break;
            case 4:
                on();
                break;
            case 13:
                j($);
                break;
            case 19:
                j($);
                break;
            case 10:
                xi(r.type._context);
                break;
            case 22:
            case 23:
                Bi()
            }
            n = n.return
        }
    if (q = e,
    K = e = ft(e.current, null),
    ee = me = t,
    G = 0,
    qn = null,
    ji = wl = Tt = 0,
    ce = In = null,
    xt !== null) {
        for (t = 0; t < xt.length; t++)
            if (n = xt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l,
                    r.next = i
                }
                n.pending = r
            }
        xt = null
    }
    return e
}
function fc(e, t) {
    do {
        var n = K;
        try {
            if (Ci(),
            Or.current = nl,
            tl) {
                for (var r = B.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                tl = !1
            }
            if (Rt = 0,
            J = X = B = null,
            On = !1,
            Gn = 0,
            Di.current = null,
            n === null || n.return === null) {
                G = 1,
                qn = t,
                K = null;
                break
            }
            e: {
                var o = e
                  , i = n.return
                  , u = n
                  , s = t;
                if (t = ee,
                u.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var a = s
                      , h = u
                      , p = h.tag;
                    if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = h.alternate;
                        m ? (h.updateQueue = m.updateQueue,
                        h.memoizedState = m.memoizedState,
                        h.lanes = m.lanes) : (h.updateQueue = null,
                        h.memoizedState = null)
                    }
                    var y = Vu(i);
                    if (y !== null) {
                        y.flags &= -257,
                        Au(y, i, u, o, t),
                        y.mode & 1 && Bu(o, a, t),
                        t = y,
                        s = a;
                        var g = t.updateQueue;
                        if (g === null) {
                            var w = new Set;
                            w.add(s),
                            t.updateQueue = w
                        } else
                            g.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Bu(o, a, t),
                            Vi();
                            break e
                        }
                        s = Error(S(426))
                    }
                } else if (U && u.mode & 1) {
                    var E = Vu(i);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                        Au(E, i, u, o, t),
                        ki(un(s, u));
                        break e
                    }
                }
                o = s = un(s, u),
                G !== 4 && (G = 2),
                In === null ? In = [o] : In.push(o),
                o = i;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var f = Xa(o, s, t);
                        Iu(o, f);
                        break e;
                    case 1:
                        u = s;
                        var c = o.type
                          , d = o.stateNode;
                        if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (at === null || !at.has(d)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var v = Ga(o, u, t);
                            Iu(o, v);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            hc(n)
        } catch (k) {
            t = k,
            K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}
function dc() {
    var e = rl.current;
    return rl.current = nl,
    e === null ? nl : e
}
function Vi() {
    (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || !(Tt & 268435455) && !(wl & 268435455) || et(q, ee)
}
function il(e, t) {
    var n = M;
    M |= 2;
    var r = dc();
    (q !== e || ee !== t) && (Be = null,
    Pt(e, t));
    do
        try {
            Wd();
            break
        } catch (l) {
            fc(e, l)
        }
    while (!0);
    if (Ci(),
    M = n,
    rl.current = r,
    K !== null)
        throw Error(S(261));
    return q = null,
    ee = 0,
    G
}
function Wd() {
    for (; K !== null; )
        pc(K)
}
function Hd() {
    for (; K !== null && !mf(); )
        pc(K)
}
function pc(e) {
    var t = vc(e.alternate, e, me);
    e.memoizedProps = e.pendingProps,
    t === null ? hc(e) : K = t,
    Di.current = null
}
function hc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = jd(n, t),
            n !== null) {
                n.flags &= 32767,
                K = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                G = 6,
                K = null;
                return
            }
        } else if (n = Dd(n, t, me),
        n !== null) {
            K = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    G === 0 && (G = 5)
}
function Et(e, t, n) {
    var r = I
      , l = xe.transition;
    try {
        xe.transition = null,
        I = 1,
        Qd(e, t, n, r)
    } finally {
        xe.transition = l,
        I = r
    }
    return null
}
function Qd(e, t, n, r) {
    do
        en();
    while (nt !== null);
    if (M & 6)
        throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(S(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (_f(e, o),
    e === q && (K = q = null,
    ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || xr || (xr = !0,
    yc(Vr, function() {
        return en(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = xe.transition,
        xe.transition = null;
        var i = I;
        I = 1;
        var u = M;
        M |= 4,
        Di.current = null,
        $d(e, n),
        sc(n, e),
        fd(Po),
        Wr = !!_o,
        Po = _o = null,
        e.current = n,
        Bd(n),
        vf(),
        M = u,
        I = i,
        xe.transition = o
    } else
        e.current = n;
    if (xr && (xr = !1,
    nt = e,
    ol = l),
    o = e.pendingLanes,
    o === 0 && (at = null),
    wf(n.stateNode),
    he(e, Q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (ll)
        throw ll = !1,
        e = Ko,
        Ko = null,
        e;
    return ol & 1 && e.tag !== 0 && en(),
    o = e.pendingLanes,
    o & 1 ? e === Yo ? Fn++ : (Fn = 0,
    Yo = e) : Fn = 0,
    yt(),
    null
}
function en() {
    if (nt !== null) {
        var e = Xs(ol)
          , t = xe.transition
          , n = I;
        try {
            if (xe.transition = null,
            I = 16 > e ? 16 : e,
            nt === null)
                var r = !1;
            else {
                if (e = nt,
                nt = null,
                ol = 0,
                M & 6)
                    throw Error(S(331));
                var l = M;
                for (M |= 4,
                C = e.current; C !== null; ) {
                    var o = C
                      , i = o.child;
                    if (C.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var a = u[s];
                                for (C = a; C !== null; ) {
                                    var h = C;
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Mn(8, h, o)
                                    }
                                    var p = h.child;
                                    if (p !== null)
                                        p.return = h,
                                        C = p;
                                    else
                                        for (; C !== null; ) {
                                            h = C;
                                            var m = h.sibling
                                              , y = h.return;
                                            if (oc(h),
                                            h === a) {
                                                C = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = y,
                                                C = m;
                                                break
                                            }
                                            C = y
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var w = g.child;
                                if (w !== null) {
                                    g.child = null;
                                    do {
                                        var E = w.sibling;
                                        w.sibling = null,
                                        w = E
                                    } while (w !== null)
                                }
                            }
                            C = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                        C = i;
                    else
                        e: for (; C !== null; ) {
                            if (o = C,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Mn(9, o, o.return)
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                f.return = o.return,
                                C = f;
                                break e
                            }
                            C = o.return
                        }
                }
                var c = e.current;
                for (C = c; C !== null; ) {
                    i = C;
                    var d = i.child;
                    if (i.subtreeFlags & 2064 && d !== null)
                        d.return = i,
                        C = d;
                    else
                        e: for (i = c; C !== null; ) {
                            if (u = C,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gl(9, u)
                                    }
                                } catch (k) {
                                    A(u, u.return, k)
                                }
                            if (u === i) {
                                C = null;
                                break e
                            }
                            var v = u.sibling;
                            if (v !== null) {
                                v.return = u.return,
                                C = v;
                                break e
                            }
                            C = u.return
                        }
                }
                if (M = l,
                yt(),
                Ue && typeof Ue.onPostCommitFiberRoot == "function")
                    try {
                        Ue.onPostCommitFiberRoot(cl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            I = n,
            xe.transition = t
        }
    }
    return !1
}
function ts(e, t, n) {
    t = un(n, t),
    t = Xa(e, t, 1),
    e = st(e, t, 1),
    t = ue(),
    e !== null && (nr(e, 1, t),
    he(e, t))
}
function A(e, t, n) {
    if (e.tag === 3)
        ts(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ts(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
                    e = un(n, e),
                    e = Ga(t, e, 1),
                    t = st(t, e, 1),
                    e = ue(),
                    t !== null && (nr(t, 1, e),
                    he(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Kd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ue(),
    e.pingedLanes |= e.suspendedLanes & n,
    q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > Q() - Ui ? Pt(e, 0) : ji |= n),
    he(e, t)
}
function mc(e, t) {
    t === 0 && (e.mode & 1 ? (t = hr,
    hr <<= 1,
    !(hr & 130023424) && (hr = 4194304)) : t = 1);
    var n = ue();
    e = Ye(e, t),
    e !== null && (nr(e, t, n),
    he(e, n))
}
function Yd(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    mc(e, n)
}
function Xd(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(S(314))
    }
    r !== null && r.delete(t),
    mc(e, n)
}
var vc;
vc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || de.current)
            fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return fe = !1,
                Fd(e, t, n);
            fe = !!(e.flags & 131072)
        }
    else
        fe = !1,
        U && t.flags & 1048576 && Sa(t, Zr, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ir(e, t),
        e = t.pendingProps;
        var l = nn(t, oe.current);
        bt(t, n),
        l = Ti(null, t, r, e, l, n);
        var o = Oi();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        pe(r) ? (o = !0,
        Xr(t)) : o = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        Pi(t),
        l.updater = yl,
        t.stateNode = l,
        l._reactInternals = t,
        Fo(t, r, e, n),
        t = Uo(null, t, r, !0, o, n)) : (t.tag = 0,
        U && o && wi(t),
        ie(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ir(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Zd(r),
            e = Le(r, e),
            l) {
            case 0:
                t = jo(null, t, r, e, n);
                break e;
            case 1:
                t = Qu(null, t, r, e, n);
                break e;
            case 11:
                t = Wu(null, t, r, e, n);
                break e;
            case 14:
                t = Hu(null, t, r, Le(r.type, e), n);
                break e
            }
            throw Error(S(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        jo(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        Qu(e, t, r, l, n);
    case 3:
        e: {
            if (ba(t),
            e === null)
                throw Error(S(387));
            r = t.pendingProps,
            o = t.memoizedState,
            l = o.element,
            Pa(e, t),
            br(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    l = un(Error(S(423)), t),
                    t = Ku(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = un(Error(S(424)), t),
                    t = Ku(e, t, r, n, l);
                    break e
                } else
                    for (ve = ut(t.stateNode.containerInfo.firstChild),
                    ye = t,
                    U = !0,
                    Te = null,
                    n = xa(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (rn(),
                r === l) {
                    t = Xe(e, t, n);
                    break e
                }
                ie(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Na(t),
        e === null && Oo(t),
        r = t.type,
        l = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = l.children,
        No(r, l) ? i = null : o !== null && No(r, o) && (t.flags |= 32),
        qa(e, t),
        ie(e, t, i, n),
        t.child;
    case 6:
        return e === null && Oo(t),
        null;
    case 13:
        return ec(e, t, n);
    case 4:
        return Ni(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = ln(t, null, r, n) : ie(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        Wu(e, t, r, l, n);
    case 7:
        return ie(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ie(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ie(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            o = t.memoizedProps,
            i = l.value,
            F(Jr, r._currentValue),
            r._currentValue = i,
            o !== null)
                if (Ie(o.value, i)) {
                    if (o.children === l.children && !de.current) {
                        t = Xe(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var u = o.dependencies;
                        if (u !== null) {
                            i = o.child;
                            for (var s = u.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (o.tag === 1) {
                                        s = He(-1, n & -n),
                                        s.tag = 2;
                                        var a = o.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var h = a.pending;
                                            h === null ? s.next = s : (s.next = h.next,
                                            h.next = s),
                                            a.pending = s
                                        }
                                    }
                                    o.lanes |= n,
                                    s = o.alternate,
                                    s !== null && (s.lanes |= n),
                                    Mo(o.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return,
                            i === null)
                                throw Error(S(341));
                            i.lanes |= n,
                            u = i.alternate,
                            u !== null && (u.lanes |= n),
                            Mo(i, n, t),
                            i = o.sibling
                        } else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (o = i.sibling,
                                o !== null) {
                                    o.return = i.return,
                                    i = o;
                                    break
                                }
                                i = i.return
                            }
                        o = i
                    }
            ie(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        bt(t, n),
        l = _e(l),
        r = r(l),
        t.flags |= 1,
        ie(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Le(r, t.pendingProps),
        l = Le(r.type, l),
        Hu(e, t, r, l, n);
    case 15:
        return Za(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        Ir(e, t),
        t.tag = 1,
        pe(r) ? (e = !0,
        Xr(t)) : e = !1,
        bt(t, n),
        Ya(t, r, l),
        Fo(t, r, l, n),
        Uo(null, t, r, !0, e, n);
    case 19:
        return tc(e, t, n);
    case 22:
        return Ja(e, t, n)
    }
    throw Error(S(156, t.tag))
}
;
function yc(e, t) {
    return Hs(e, t)
}
function Gd(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ce(e, t, n, r) {
    return new Gd(e,t,n,r)
}
function Ai(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Zd(e) {
    if (typeof e == "function")
        return Ai(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ui)
            return 11;
        if (e === si)
            return 14
    }
    return 2
}
function ft(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ce(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function jr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Ai(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Ut:
            return Nt(n.children, l, o, t);
        case ii:
            i = 8,
            l |= 8;
            break;
        case lo:
            return e = Ce(12, n, t, l | 2),
            e.elementType = lo,
            e.lanes = o,
            e;
        case oo:
            return e = Ce(13, n, t, l),
            e.elementType = oo,
            e.lanes = o,
            e;
        case io:
            return e = Ce(19, n, t, l),
            e.elementType = io,
            e.lanes = o,
            e;
        case Ns:
            return Sl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case _s:
                    i = 10;
                    break e;
                case Ps:
                    i = 9;
                    break e;
                case ui:
                    i = 11;
                    break e;
                case si:
                    i = 14;
                    break e;
                case Je:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(S(130, e == null ? e : typeof e, ""))
        }
    return t = Ce(i, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Nt(e, t, n, r) {
    return e = Ce(7, e, r, t),
    e.lanes = n,
    e
}
function Sl(e, t, n, r) {
    return e = Ce(22, e, r, t),
    e.elementType = Ns,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function eo(e, t, n) {
    return e = Ce(6, e, null, t),
    e.lanes = n,
    e
}
function to(e, t, n) {
    return t = Ce(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Jd(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Fl(0),
    this.expirationTimes = Fl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Fl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function Wi(e, t, n, r, l, o, i, u, s) {
    return e = new Jd(e,t,n,u,s),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Ce(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Pi(o),
    e
}
function qd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: jt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function gc(e) {
    if (!e)
        return ht;
    e = e._reactInternals;
    e: {
        if (It(e) !== e || e.tag !== 1)
            throw Error(S(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (pe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(S(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n))
            return ga(e, n, t)
    }
    return t
}
function wc(e, t, n, r, l, o, i, u, s) {
    return e = Wi(n, r, !0, e, l, o, i, u, s),
    e.context = gc(null),
    n = e.current,
    r = ue(),
    l = ct(n),
    o = He(r, l),
    o.callback = t ?? null,
    st(n, o, l),
    e.current.lanes = l,
    nr(e, l, r),
    he(e, r),
    e
}
function kl(e, t, n, r) {
    var l = t.current
      , o = ue()
      , i = ct(l);
    return n = gc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = He(o, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = st(l, t, i),
    e !== null && (Me(e, l, i, o),
    Tr(e, l, i)),
    i
}
function ul(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ns(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Hi(e, t) {
    ns(e, t),
    (e = e.alternate) && ns(e, t)
}
function bd() {
    return null
}
var Sc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Qi(e) {
    this._internalRoot = e
}
El.prototype.render = Qi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(S(409));
    kl(e, t, null, null)
}
;
El.prototype.unmount = Qi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ot(function() {
            kl(null, e, null, null)
        }),
        t[Ke] = null
    }
}
;
function El(e) {
    this._internalRoot = e
}
El.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Js();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++)
            ;
        be.splice(n, 0, e),
        n === 0 && bs(e)
    }
}
;
function Ki(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function rs() {}
function ep(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var a = ul(i);
                o.call(a)
            }
        }
        var i = wc(t, r, e, 0, null, !1, !1, "", rs);
        return e._reactRootContainer = i,
        e[Ke] = i.current,
        Hn(e.nodeType === 8 ? e.parentNode : e),
        Ot(),
        i
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var a = ul(s);
            u.call(a)
        }
    }
    var s = Wi(e, 0, !1, null, null, !1, !1, "", rs);
    return e._reactRootContainer = s,
    e[Ke] = s.current,
    Hn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function() {
        kl(t, s, n, r)
    }),
    s
}
function xl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = ul(i);
                u.call(s)
            }
        }
        kl(t, i, e, l)
    } else
        i = ep(n, t, e, l, r);
    return ul(i)
}
Gs = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = _n(t.pendingLanes);
            n !== 0 && (fi(t, n | 1),
            he(t, Q()),
            !(M & 6) && (sn = Q() + 500,
            yt()))
        }
        break;
    case 13:
        Ot(function() {
            var r = Ye(e, 1);
            if (r !== null) {
                var l = ue();
                Me(r, e, 1, l)
            }
        }),
        Hi(e, 1)
    }
}
;
di = function(e) {
    if (e.tag === 13) {
        var t = Ye(e, 134217728);
        if (t !== null) {
            var n = ue();
            Me(t, e, 134217728, n)
        }
        Hi(e, 134217728)
    }
}
;
Zs = function(e) {
    if (e.tag === 13) {
        var t = ct(e)
          , n = Ye(e, t);
        if (n !== null) {
            var r = ue();
            Me(n, e, t, r)
        }
        Hi(e, t)
    }
}
;
Js = function() {
    return I
}
;
qs = function(e, t) {
    var n = I;
    try {
        return I = e,
        t()
    } finally {
        I = n
    }
}
;
yo = function(e, t, n) {
    switch (t) {
    case "input":
        if (ao(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = hl(r);
                    if (!l)
                        throw Error(S(90));
                    Ls(r),
                    ao(r, l)
                }
            }
        }
        break;
    case "textarea":
        Ts(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Gt(e, !!n.multiple, t, !1)
    }
}
;
Us = $i;
$s = Ot;
var tp = {
    usingClientEntryPoint: !1,
    Events: [lr, At, hl, Ds, js, $i]
}
  , En = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , np = {
    bundleType: En.bundleType,
    version: En.version,
    rendererPackageName: En.rendererPackageName,
    rendererConfig: En.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = As(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: En.findFiberByHostInstance || bd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_r.isDisabled && _r.supportsFiber)
        try {
            cl = _r.inject(np),
            Ue = _r
        } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ki(t))
        throw Error(S(200));
    return qd(e, t, null, n)
}
;
we.createRoot = function(e, t) {
    if (!Ki(e))
        throw Error(S(299));
    var n = !1
      , r = ""
      , l = Sc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = Wi(e, 1, !1, null, null, n, !1, r, l),
    e[Ke] = t.current,
    Hn(e.nodeType === 8 ? e.parentNode : e),
    new Qi(t)
}
;
we.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","),
        Error(S(268, e)));
    return e = As(t),
    e = e === null ? null : e.stateNode,
    e
}
;
we.flushSync = function(e) {
    return Ot(e)
}
;
we.hydrate = function(e, t, n) {
    if (!Cl(t))
        throw Error(S(200));
    return xl(null, e, t, !0, n)
}
;
we.hydrateRoot = function(e, t, n) {
    if (!Ki(e))
        throw Error(S(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , o = ""
      , i = Sc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = wc(t, null, e, 1, n ?? null, l, !1, o, i),
    e[Ke] = t.current,
    Hn(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new El(t)
}
;
we.render = function(e, t, n) {
    if (!Cl(t))
        throw Error(S(200));
    return xl(null, e, t, !1, n)
}
;
we.unmountComponentAtNode = function(e) {
    if (!Cl(e))
        throw Error(S(40));
    return e._reactRootContainer ? (Ot(function() {
        xl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ke] = null
        })
    }),
    !0) : !1
}
;
we.unstable_batchedUpdates = $i;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Cl(n))
        throw Error(S(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(S(38));
    return xl(e, t, n, !1, r)
}
;
we.version = "18.3.1-next-f1338f8080-20240426";
function kc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc)
        } catch (e) {
            console.error(e)
        }
}
kc(),
ks.exports = we;
var rp = ks.exports;
const ih = fs(rp);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bn() {
    return bn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    bn.apply(this, arguments)
}
var rt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(rt || (rt = {}));
const ls = "popstate";
function lp(e) {
    e === void 0 && (e = {});
    function t(r, l) {
        let {pathname: o, search: i, hash: u} = r.location;
        return Zo("", {
            pathname: o,
            search: i,
            hash: u
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }
    function n(r, l) {
        return typeof l == "string" ? l : sl(l)
    }
    return ip(t, n, null, e)
}
function Y(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Ec(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function op() {
    return Math.random().toString(36).substr(2, 8)
}
function os(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Zo(e, t, n, r) {
    return n === void 0 && (n = null),
    bn({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? dn(t) : t, {
        state: n,
        key: t && t.key || r || op()
    })
}
function sl(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function dn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function ip(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: l=document.defaultView, v5Compat: o=!1} = r
      , i = l.history
      , u = rt.Pop
      , s = null
      , a = h();
    a == null && (a = 0,
    i.replaceState(bn({}, i.state, {
        idx: a
    }), ""));
    function h() {
        return (i.state || {
            idx: null
        }).idx
    }
    function p() {
        u = rt.Pop;
        let E = h()
          , f = E == null ? null : E - a;
        a = E,
        s && s({
            action: u,
            location: w.location,
            delta: f
        })
    }
    function m(E, f) {
        u = rt.Push;
        let c = Zo(w.location, E, f);
        a = h() + 1;
        let d = os(c, a)
          , v = w.createHref(c);
        try {
            i.pushState(d, "", v)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError")
                throw k;
            l.location.assign(v)
        }
        o && s && s({
            action: u,
            location: w.location,
            delta: 1
        })
    }
    function y(E, f) {
        u = rt.Replace;
        let c = Zo(w.location, E, f);
        a = h();
        let d = os(c, a)
          , v = w.createHref(c);
        i.replaceState(d, "", v),
        o && s && s({
            action: u,
            location: w.location,
            delta: 0
        })
    }
    function g(E) {
        let f = l.location.origin !== "null" ? l.location.origin : l.location.href
          , c = typeof E == "string" ? E : sl(E);
        return c = c.replace(/ $/, "%20"),
        Y(f, "No window.location.(origin|href) available to create URL for href: " + c),
        new URL(c,f)
    }
    let w = {
        get action() {
            return u
        },
        get location() {
            return e(l, i)
        },
        listen(E) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(ls, p),
            s = E,
            ()=>{
                l.removeEventListener(ls, p),
                s = null
            }
        },
        createHref(E) {
            return t(l, E)
        },
        createURL: g,
        encodeLocation(E) {
            let f = g(E);
            return {
                pathname: f.pathname,
                search: f.search,
                hash: f.hash
            }
        },
        push: m,
        replace: y,
        go(E) {
            return i.go(E)
        }
    };
    return w
}
var is;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(is || (is = {}));
function up(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? dn(t) : t
      , l = Yi(r.pathname || "/", n);
    if (l == null)
        return null;
    let o = Cc(e);
    sp(o);
    let i = null;
    for (let u = 0; i == null && u < o.length; ++u) {
        let s = Sp(l);
        i = yp(o[u], s)
    }
    return i
}
function Cc(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let l = (o,i,u)=>{
        let s = {
            relativePath: u === void 0 ? o.path || "" : u,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        s.relativePath.startsWith("/") && (Y(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(r.length));
        let a = dt([r, s.relativePath])
          , h = n.concat(s);
        o.children && o.children.length > 0 && (Y(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')),
        Cc(o.children, t, h, a)),
        !(o.path == null && !o.index) && t.push({
            path: a,
            score: mp(a, o.index),
            routesMeta: h
        })
    }
    ;
    return e.forEach((o,i)=>{
        var u;
        if (o.path === "" || !((u = o.path) != null && u.includes("?")))
            l(o, i);
        else
            for (let s of xc(o.path))
                l(o, i, s)
    }
    ),
    t
}
function xc(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , l = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return l ? [o, ""] : [o];
    let i = xc(r.join("/"))
      , u = [];
    return u.push(...i.map(s=>s === "" ? o : [o, s].join("/"))),
    l && u.push(...i),
    u.map(s=>e.startsWith("/") && s === "" ? "/" : s)
}
function sp(e) {
    e.sort((t,n)=>t.score !== n.score ? n.score - t.score : vp(t.routesMeta.map(r=>r.childrenIndex), n.routesMeta.map(r=>r.childrenIndex)))
}
const ap = /^:[\w-]+$/
  , cp = 3
  , fp = 2
  , dp = 1
  , pp = 10
  , hp = -2
  , us = e=>e === "*";
function mp(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(us) && (r += hp),
    t && (r += fp),
    n.filter(l=>!us(l)).reduce((l,o)=>l + (ap.test(o) ? cp : o === "" ? dp : pp), r)
}
function vp(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r,l)=>r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function yp(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , l = "/"
      , o = [];
    for (let i = 0; i < n.length; ++i) {
        let u = n[i]
          , s = i === n.length - 1
          , a = l === "/" ? t : t.slice(l.length) || "/"
          , h = gp({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: s
        }, a);
        if (!h)
            return null;
        Object.assign(r, h.params);
        let p = u.route;
        o.push({
            params: r,
            pathname: dt([l, h.pathname]),
            pathnameBase: xp(dt([l, h.pathnameBase])),
            route: p
        }),
        h.pathnameBase !== "/" && (l = dt([l, h.pathnameBase]))
    }
    return o
}
function gp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = wp(e.path, e.caseSensitive, e.end)
      , l = t.match(n);
    if (!l)
        return null;
    let o = l[0]
      , i = o.replace(/(.)\/+$/, "$1")
      , u = l.slice(1);
    return {
        params: r.reduce((a,h,p)=>{
            let {paramName: m, isOptional: y} = h;
            if (m === "*") {
                let w = u[p] || "";
                i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const g = u[p];
            return y && !g ? a[m] = void 0 : a[m] = (g || "").replace(/%2F/g, "/"),
            a
        }
        , {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}
function wp(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ec(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i,u,s)=>(r.push({
        paramName: u,
        isOptional: s != null
    }),
    s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,t ? void 0 : "i"), r]
}
function Sp(e) {
    try {
        return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Ec(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Yi(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function kp(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: l=""} = typeof e == "string" ? dn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Ep(n, t) : t,
        search: _p(r),
        hash: Pp(l)
    }
}
function Ep(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l=>{
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function no(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Cp(e) {
    return e.filter((t,n)=>n === 0 || t.route.path && t.route.path.length > 0)
}
function _c(e, t) {
    let n = Cp(e);
    return t ? n.map((r,l)=>l === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r=>r.pathnameBase)
}
function Pc(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = dn(e) : (l = bn({}, e),
    Y(!l.pathname || !l.pathname.includes("?"), no("?", "pathname", "search", l)),
    Y(!l.pathname || !l.pathname.includes("#"), no("#", "pathname", "hash", l)),
    Y(!l.search || !l.search.includes("#"), no("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
    if (i == null)
        u = n;
    else {
        let p = t.length - 1;
        if (!r && i.startsWith("..")) {
            let m = i.split("/");
            for (; m[0] === ".."; )
                m.shift(),
                p -= 1;
            l.pathname = m.join("/")
        }
        u = p >= 0 ? t[p] : "/"
    }
    let s = kp(l, u)
      , a = i && i !== "/" && i.endsWith("/")
      , h = (o || i === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"),
    s
}
const dt = e=>e.join("/").replace(/\/\/+/g, "/")
  , xp = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , _p = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Pp = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Np(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Nc = ["post", "put", "patch", "delete"];
new Set(Nc);
const zp = ["get", ...Nc];
new Set(zp);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function er() {
    return er = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    er.apply(this, arguments)
}
const Xi = x.createContext(null)
  , Lp = x.createContext(null)
  , Ft = x.createContext(null)
  , _l = x.createContext(null)
  , gt = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , zc = x.createContext(null);
function Rp(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    ir() || Y(!1);
    let {basename: r, navigator: l} = x.useContext(Ft)
      , {hash: o, pathname: i, search: u} = Rc(e, {
        relative: n
    })
      , s = i;
    return r !== "/" && (s = i === "/" ? r : dt([r, i])),
    l.createHref({
        pathname: s,
        search: u,
        hash: o
    })
}
function ir() {
    return x.useContext(_l) != null
}
function Pl() {
    return ir() || Y(!1),
    x.useContext(_l).location
}
function Lc(e) {
    x.useContext(Ft).static || x.useLayoutEffect(e)
}
function Tp() {
    let {isDataRoute: e} = x.useContext(gt);
    return e ? Kp() : Op()
}
function Op() {
    ir() || Y(!1);
    let e = x.useContext(Xi)
      , {basename: t, future: n, navigator: r} = x.useContext(Ft)
      , {matches: l} = x.useContext(gt)
      , {pathname: o} = Pl()
      , i = JSON.stringify(_c(l, n.v7_relativeSplatPath))
      , u = x.useRef(!1);
    return Lc(()=>{
        u.current = !0
    }
    ),
    x.useCallback(function(a, h) {
        if (h === void 0 && (h = {}),
        !u.current)
            return;
        if (typeof a == "number") {
            r.go(a);
            return
        }
        let p = Pc(a, JSON.parse(i), o, h.relative === "path");
        e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : dt([t, p.pathname])),
        (h.replace ? r.replace : r.push)(p, h.state, h)
    }, [t, r, i, o, e])
}
const Mp = x.createContext(null);
function Ip(e) {
    let t = x.useContext(gt).outlet;
    return t && x.createElement(Mp.Provider, {
        value: e
    }, t)
}
function Rc(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = x.useContext(Ft)
      , {matches: l} = x.useContext(gt)
      , {pathname: o} = Pl()
      , i = JSON.stringify(_c(l, r.v7_relativeSplatPath));
    return x.useMemo(()=>Pc(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}
function Fp(e, t) {
    return Dp(e, t)
}
function Dp(e, t, n, r) {
    ir() || Y(!1);
    let {navigator: l} = x.useContext(Ft)
      , {matches: o} = x.useContext(gt)
      , i = o[o.length - 1]
      , u = i ? i.params : {};
    i && i.pathname;
    let s = i ? i.pathnameBase : "/";
    i && i.route;
    let a = Pl(), h;
    if (t) {
        var p;
        let E = typeof t == "string" ? dn(t) : t;
        s === "/" || (p = E.pathname) != null && p.startsWith(s) || Y(!1),
        h = E
    } else
        h = a;
    let m = h.pathname || "/"
      , y = m;
    if (s !== "/") {
        let E = s.replace(/^\//, "").split("/");
        y = "/" + m.replace(/^\//, "").split("/").slice(E.length).join("/")
    }
    let g = up(e, {
        pathname: y
    })
      , w = Vp(g && g.map(E=>Object.assign({}, E, {
        params: Object.assign({}, u, E.params),
        pathname: dt([s, l.encodeLocation ? l.encodeLocation(E.pathname).pathname : E.pathname]),
        pathnameBase: E.pathnameBase === "/" ? s : dt([s, l.encodeLocation ? l.encodeLocation(E.pathnameBase).pathname : E.pathnameBase])
    })), o, n, r);
    return t && w ? x.createElement(_l.Provider, {
        value: {
            location: er({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, h),
            navigationType: rt.Pop
        }
    }, w) : w
}
function jp() {
    let e = Qp()
      , t = Np(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , l = {
        padding: "0.5rem",
        backgroundColor: "rgba(100,100,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: l
    }, n) : null, null)
}
const Up = x.createElement(jp, null);
class $p extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(gt.Provider, {
            value: this.props.routeContext
        }, x.createElement(zc.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Bp(e) {
    let {routeContext: t, match: n, children: r} = e
      , l = x.useContext(Xi);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(gt.Provider, {
        value: t
    }, r)
}
function Vp(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if ((o = n) != null && o.errors)
            e = n.matches;
        else
            return null
    }
    let i = e
      , u = (l = n) == null ? void 0 : l.errors;
    if (u != null) {
        let h = i.findIndex(p=>p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0);
        h >= 0 || Y(!1),
        i = i.slice(0, Math.min(i.length, h + 1))
    }
    let s = !1
      , a = -1;
    if (n && r && r.v7_partialHydration)
        for (let h = 0; h < i.length; h++) {
            let p = i[h];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
            p.route.id) {
                let {loaderData: m, errors: y} = n
                  , g = p.route.loader && m[p.route.id] === void 0 && (!y || y[p.route.id] === void 0);
                if (p.route.lazy || g) {
                    s = !0,
                    a >= 0 ? i = i.slice(0, a + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((h,p,m)=>{
        let y, g = !1, w = null, E = null;
        n && (y = u && p.route.id ? u[p.route.id] : void 0,
        w = p.route.errorElement || Up,
        s && (a < 0 && m === 0 ? (g = !0,
        E = null) : a === m && (g = !0,
        E = p.route.hydrateFallbackElement || null)));
        let f = t.concat(i.slice(0, m + 1))
          , c = ()=>{
            let d;
            return y ? d = w : g ? d = E : p.route.Component ? d = x.createElement(p.route.Component, null) : p.route.element ? d = p.route.element : d = h,
            x.createElement(Bp, {
                match: p,
                routeContext: {
                    outlet: h,
                    matches: f,
                    isDataRoute: n != null
                },
                children: d
            })
        }
        ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0) ? x.createElement($p, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: y,
            children: c(),
            routeContext: {
                outlet: null,
                matches: f,
                isDataRoute: !0
            }
        }) : c()
    }
    , null)
}
var Tc = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Tc || {})
  , al = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(al || {});
function Ap(e) {
    let t = x.useContext(Xi);
    return t || Y(!1),
    t
}
function Wp(e) {
    let t = x.useContext(Lp);
    return t || Y(!1),
    t
}
function Hp(e) {
    let t = x.useContext(gt);
    return t || Y(!1),
    t
}
function Oc(e) {
    let t = Hp()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Y(!1),
    n.route.id
}
function Qp() {
    var e;
    let t = x.useContext(zc)
      , n = Wp(al.UseRouteError)
      , r = Oc(al.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Kp() {
    let {router: e} = Ap(Tc.UseNavigateStable)
      , t = Oc(al.UseNavigateStable)
      , n = x.useRef(!1);
    return Lc(()=>{
        n.current = !0
    }
    ),
    x.useCallback(function(l, o) {
        o === void 0 && (o = {}),
        n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, er({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
function uh(e) {
    return Ip(e.context)
}
function Yp(e) {
    Y(!1)
}
function Xp(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: l=rt.Pop, navigator: o, static: i=!1, future: u} = e;
    ir() && Y(!1);
    let s = t.replace(/^\/*/, "/")
      , a = x.useMemo(()=>({
        basename: s,
        navigator: o,
        static: i,
        future: er({
            v7_relativeSplatPath: !1
        }, u)
    }), [s, u, o, i]);
    typeof r == "string" && (r = dn(r));
    let {pathname: h="/", search: p="", hash: m="", state: y=null, key: g="default"} = r
      , w = x.useMemo(()=>{
        let E = Yi(h, s);
        return E == null ? null : {
            location: {
                pathname: E,
                search: p,
                hash: m,
                state: y,
                key: g
            },
            navigationType: l
        }
    }
    , [s, h, p, m, y, g, l]);
    return w == null ? null : x.createElement(Ft.Provider, {
        value: a
    }, x.createElement(_l.Provider, {
        children: n,
        value: w
    }))
}
function sh(e) {
    let {children: t, location: n} = e;
    return Fp(Jo(t), n)
}
new Promise(()=>{}
);
function Jo(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r,l)=>{
        if (!x.isValidElement(r))
            return;
        let o = [...t, l];
        if (r.type === x.Fragment) {
            n.push.apply(n, Jo(r.props.children, o));
            return
        }
        r.type !== Yp && Y(!1),
        !r.props.index || !r.props.children || Y(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Jo(r.props.children, o)),
        n.push(i)
    }
    ),
    n
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qo() {
    return qo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    qo.apply(this, arguments)
}
function Gp(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), l, o;
    for (o = 0; o < r.length; o++)
        l = r[o],
        !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}
function Zp(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Jp(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Zp(e)
}
const qp = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
  , bp = "6";
try {
    window.__reactRouterVersion = bp
} catch {}
const eh = "startTransition"
  , ss = Jc[eh];
function ah(e) {
    let {basename: t, children: n, future: r, window: l} = e
      , o = x.useRef();
    o.current == null && (o.current = lp({
        window: l,
        v5Compat: !0
    }));
    let i = o.current
      , [u,s] = x.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: a} = r || {}
      , h = x.useCallback(p=>{
        a && ss ? ss(()=>s(p)) : s(p)
    }
    , [s, a]);
    return x.useLayoutEffect(()=>i.listen(h), [i, h]),
    x.createElement(Xp, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: i,
        future: r
    })
}
const th = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , nh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , ch = x.forwardRef(function(t, n) {
    let {onClick: r, relative: l, reloadDocument: o, replace: i, state: u, target: s, to: a, preventScrollReset: h, unstable_viewTransition: p} = t, m = Gp(t, qp), {basename: y} = x.useContext(Ft), g, w = !1;
    if (typeof a == "string" && nh.test(a) && (g = a,
    th))
        try {
            let d = new URL(window.location.href)
              , v = a.startsWith("//") ? new URL(d.protocol + a) : new URL(a)
              , k = Yi(v.pathname, y);
            v.origin === d.origin && k != null ? a = k + v.search + v.hash : w = !0
        } catch {}
    let E = Rp(a, {
        relative: l
    })
      , f = rh(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: l,
        unstable_viewTransition: p
    });
    function c(d) {
        r && r(d),
        d.defaultPrevented || f(d)
    }
    return x.createElement("a", qo({}, m, {
        href: g || E,
        onClick: w || o ? r : c,
        ref: n,
        target: s
    }))
});
var as;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(as || (as = {}));
var cs;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(cs || (cs = {}));
function rh(e, t) {
    let {target: n, replace: r, state: l, preventScrollReset: o, relative: i, unstable_viewTransition: u} = t === void 0 ? {} : t
      , s = Tp()
      , a = Pl()
      , h = Rc(e, {
        relative: i
    });
    return x.useCallback(p=>{
        if (Jp(p, n)) {
            p.preventDefault();
            let m = r !== void 0 ? r : sl(a) === sl(h);
            s(e, {
                replace: m,
                state: l,
                preventScrollReset: o,
                relative: i,
                unstable_viewTransition: u
            })
        }
    }
    , [a, s, h, r, l, n, e, o, i, u])
}
export {ah as B, ch as L, uh as O, Jc as R, oh as a, rp as b, lh as c, Zc as d, ih as e, sh as f, fs as g, Yp as h, x as r, Pl as u};
