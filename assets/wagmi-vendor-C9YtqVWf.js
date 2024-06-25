const __vite__fileDeps = ["assets/index-C1tSO5ED.js", "assets/react-vendor-CtoQAI7o.js"]
  , __vite__mapDeps = i=>i.map(i=>__vite__fileDeps[i]);
import {g as _s, r as N} from "./react-vendor-CtoQAI7o.js";
var Aa = {}
  , tr = {};
tr.byteLength = Ta;
tr.toByteArray = Ia;
tr.fromByteArray = $a;
var fe = []
  , te = []
  , Fa = typeof Uint8Array < "u" ? Uint8Array : Array
  , vr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ue = 0, ka = vr.length; Ue < ka; ++Ue)
    fe[Ue] = vr[Ue],
    te[vr.charCodeAt(Ue)] = Ue;
te[45] = 62;
te[95] = 63;
function Ds(t) {
    var e = t.length;
    if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    var r = t.indexOf("=");
    r === -1 && (r = e);
    var n = r === e ? 0 : 4 - r % 4;
    return [r, n]
}
function Ta(t) {
    var e = Ds(t)
      , r = e[0]
      , n = e[1];
    return (r + n) * 3 / 4 - n
}
function Oa(t, e, r) {
    return (e + r) * 3 / 4 - r
}
function Ia(t) {
    var e, r = Ds(t), n = r[0], s = r[1], i = new Fa(Oa(t, n, s)), o = 0, a = s > 0 ? n - 4 : n, l;
    for (l = 0; l < a; l += 4)
        e = te[t.charCodeAt(l)] << 18 | te[t.charCodeAt(l + 1)] << 12 | te[t.charCodeAt(l + 2)] << 6 | te[t.charCodeAt(l + 3)],
        i[o++] = e >> 16 & 255,
        i[o++] = e >> 8 & 255,
        i[o++] = e & 255;
    return s === 2 && (e = te[t.charCodeAt(l)] << 2 | te[t.charCodeAt(l + 1)] >> 4,
    i[o++] = e & 255),
    s === 1 && (e = te[t.charCodeAt(l)] << 10 | te[t.charCodeAt(l + 1)] << 4 | te[t.charCodeAt(l + 2)] >> 2,
    i[o++] = e >> 8 & 255,
    i[o++] = e & 255),
    i
}
function Ma(t) {
    return fe[t >> 18 & 63] + fe[t >> 12 & 63] + fe[t >> 6 & 63] + fe[t & 63]
}
function Ba(t, e, r) {
    for (var n, s = [], i = e; i < r; i += 3)
        n = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (t[i + 2] & 255),
        s.push(Ma(n));
    return s.join("")
}
function $a(t) {
    for (var e, r = t.length, n = r % 3, s = [], i = 16383, o = 0, a = r - n; o < a; o += i)
        s.push(Ba(t, o, o + i > a ? a : o + i));
    return n === 1 ? (e = t[r - 1],
    s.push(fe[e >> 2] + fe[e << 4 & 63] + "==")) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1],
    s.push(fe[e >> 10] + fe[e >> 4 & 63] + fe[e << 2 & 63] + "=")),
    s.join("")
}
var on = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
on.read = function(t, e, r, n, s) {
    var i, o, a = s * 8 - n - 1, l = (1 << a) - 1, d = l >> 1, f = -7, h = r ? s - 1 : 0, y = r ? -1 : 1, g = t[e + h];
    for (h += y,
    i = g & (1 << -f) - 1,
    g >>= -f,
    f += a; f > 0; i = i * 256 + t[e + h],
    h += y,
    f -= 8)
        ;
    for (o = i & (1 << -f) - 1,
    i >>= -f,
    f += n; f > 0; o = o * 256 + t[e + h],
    h += y,
    f -= 8)
        ;
    if (i === 0)
        i = 1 - d;
    else {
        if (i === l)
            return o ? NaN : (g ? -1 : 1) * (1 / 0);
        o = o + Math.pow(2, n),
        i = i - d
    }
    return (g ? -1 : 1) * o * Math.pow(2, i - n)
}
;
on.write = function(t, e, r, n, s, i) {
    var o, a, l, d = i * 8 - s - 1, f = (1 << d) - 1, h = f >> 1, y = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = n ? 0 : i - 1, m = n ? 1 : -1, w = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e),
    isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
    o = f) : (o = Math.floor(Math.log(e) / Math.LN2),
    e * (l = Math.pow(2, -o)) < 1 && (o--,
    l *= 2),
    o + h >= 1 ? e += y / l : e += y * Math.pow(2, 1 - h),
    e * l >= 2 && (o++,
    l /= 2),
    o + h >= f ? (a = 0,
    o = f) : o + h >= 1 ? (a = (e * l - 1) * Math.pow(2, s),
    o = o + h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, s),
    o = 0)); s >= 8; t[r + g] = a & 255,
    g += m,
    a /= 256,
    s -= 8)
        ;
    for (o = o << s | a,
    d += s; d > 0; t[r + g] = o & 255,
    g += m,
    o /= 256,
    d -= 8)
        ;
    t[r + g - m] |= w * 128
}
;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
    var e = tr
      , r = on
      , n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    t.Buffer = a,
    t.SlowBuffer = C,
    t.INSPECT_MAX_BYTES = 50;
    var s = 2147483647;
    t.kMaxLength = s,
    a.TYPED_ARRAY_SUPPORT = i(),
    !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function i() {
        try {
            var p = new Uint8Array(1)
              , u = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(u, Uint8Array.prototype),
            Object.setPrototypeOf(p, u),
            p.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(a.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (a.isBuffer(this))
                return this.buffer
        }
    }),
    Object.defineProperty(a.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (a.isBuffer(this))
                return this.byteOffset
        }
    });
    function o(p) {
        if (p > s)
            throw new RangeError('The value "' + p + '" is invalid for option "size"');
        var u = new Uint8Array(p);
        return Object.setPrototypeOf(u, a.prototype),
        u
    }
    function a(p, u, c) {
        if (typeof p == "number") {
            if (typeof u == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return h(p)
        }
        return l(p, u, c)
    }
    a.poolSize = 8192;
    function l(p, u, c) {
        if (typeof p == "string")
            return y(p, u);
        if (ArrayBuffer.isView(p))
            return m(p);
        if (p == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p);
        if (oe(p, ArrayBuffer) || p && oe(p.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (oe(p, SharedArrayBuffer) || p && oe(p.buffer, SharedArrayBuffer)))
            return w(p, u, c);
        if (typeof p == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        var b = p.valueOf && p.valueOf();
        if (b != null && b !== p)
            return a.from(b, u, c);
        var x = v(p);
        if (x)
            return x;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function")
            return a.from(p[Symbol.toPrimitive]("string"), u, c);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p)
    }
    a.from = function(p, u, c) {
        return l(p, u, c)
    }
    ,
    Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(a, Uint8Array);
    function d(p) {
        if (typeof p != "number")
            throw new TypeError('"size" argument must be of type number');
        if (p < 0)
            throw new RangeError('The value "' + p + '" is invalid for option "size"')
    }
    function f(p, u, c) {
        return d(p),
        p <= 0 ? o(p) : u !== void 0 ? typeof c == "string" ? o(p).fill(u, c) : o(p).fill(u) : o(p)
    }
    a.alloc = function(p, u, c) {
        return f(p, u, c)
    }
    ;
    function h(p) {
        return d(p),
        o(p < 0 ? 0 : E(p) | 0)
    }
    a.allocUnsafe = function(p) {
        return h(p)
    }
    ,
    a.allocUnsafeSlow = function(p) {
        return h(p)
    }
    ;
    function y(p, u) {
        if ((typeof u != "string" || u === "") && (u = "utf8"),
        !a.isEncoding(u))
            throw new TypeError("Unknown encoding: " + u);
        var c = P(p, u) | 0
          , b = o(c)
          , x = b.write(p, u);
        return x !== c && (b = b.slice(0, x)),
        b
    }
    function g(p) {
        for (var u = p.length < 0 ? 0 : E(p.length) | 0, c = o(u), b = 0; b < u; b += 1)
            c[b] = p[b] & 255;
        return c
    }
    function m(p) {
        if (oe(p, Uint8Array)) {
            var u = new Uint8Array(p);
            return w(u.buffer, u.byteOffset, u.byteLength)
        }
        return g(p)
    }
    function w(p, u, c) {
        if (u < 0 || p.byteLength < u)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (p.byteLength < u + (c || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        var b;
        return u === void 0 && c === void 0 ? b = new Uint8Array(p) : c === void 0 ? b = new Uint8Array(p,u) : b = new Uint8Array(p,u,c),
        Object.setPrototypeOf(b, a.prototype),
        b
    }
    function v(p) {
        if (a.isBuffer(p)) {
            var u = E(p.length) | 0
              , c = o(u);
            return c.length === 0 || p.copy(c, 0, 0, u),
            c
        }
        if (p.length !== void 0)
            return typeof p.length != "number" || wr(p.length) ? o(0) : g(p);
        if (p.type === "Buffer" && Array.isArray(p.data))
            return g(p.data)
    }
    function E(p) {
        if (p >= s)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
        return p | 0
    }
    function C(p) {
        return +p != p && (p = 0),
        a.alloc(+p)
    }
    a.isBuffer = function(u) {
        return u != null && u._isBuffer === !0 && u !== a.prototype
    }
    ,
    a.compare = function(u, c) {
        if (oe(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)),
        oe(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
        !a.isBuffer(u) || !a.isBuffer(c))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (u === c)
            return 0;
        for (var b = u.length, x = c.length, S = 0, F = Math.min(b, x); S < F; ++S)
            if (u[S] !== c[S]) {
                b = u[S],
                x = c[S];
                break
            }
        return b < x ? -1 : x < b ? 1 : 0
    }
    ,
    a.isEncoding = function(u) {
        switch (String(u).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ,
    a.concat = function(u, c) {
        if (!Array.isArray(u))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (u.length === 0)
            return a.alloc(0);
        var b;
        if (c === void 0)
            for (c = 0,
            b = 0; b < u.length; ++b)
                c += u[b].length;
        var x = a.allocUnsafe(c)
          , S = 0;
        for (b = 0; b < u.length; ++b) {
            var F = u[b];
            if (oe(F, Uint8Array))
                S + F.length > x.length ? a.from(F).copy(x, S) : Uint8Array.prototype.set.call(x, F, S);
            else if (a.isBuffer(F))
                F.copy(x, S);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            S += F.length
        }
        return x
    }
    ;
    function P(p, u) {
        if (a.isBuffer(p))
            return p.length;
        if (ArrayBuffer.isView(p) || oe(p, ArrayBuffer))
            return p.byteLength;
        if (typeof p != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof p);
        var c = p.length
          , b = arguments.length > 2 && arguments[2] === !0;
        if (!b && c === 0)
            return 0;
        for (var x = !1; ; )
            switch (u) {
            case "ascii":
            case "latin1":
            case "binary":
                return c;
            case "utf8":
            case "utf-8":
                return gr(p).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return c * 2;
            case "hex":
                return c >>> 1;
            case "base64":
                return Yn(p).length;
            default:
                if (x)
                    return b ? -1 : gr(p).length;
                u = ("" + u).toLowerCase(),
                x = !0
            }
    }
    a.byteLength = P;
    function O(p, u, c) {
        var b = !1;
        if ((u === void 0 || u < 0) && (u = 0),
        u > this.length || ((c === void 0 || c > this.length) && (c = this.length),
        c <= 0) || (c >>>= 0,
        u >>>= 0,
        c <= u))
            return "";
        for (p || (p = "utf8"); ; )
            switch (p) {
            case "hex":
                return wa(this, u, c);
            case "utf8":
            case "utf-8":
                return Kn(this, u, c);
            case "ascii":
                return ba(this, u, c);
            case "latin1":
            case "binary":
                return ga(this, u, c);
            case "base64":
                return br(this, u, c);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return va(this, u, c);
            default:
                if (b)
                    throw new TypeError("Unknown encoding: " + p);
                p = (p + "").toLowerCase(),
                b = !0
            }
    }
    a.prototype._isBuffer = !0;
    function I(p, u, c) {
        var b = p[u];
        p[u] = p[c],
        p[c] = b
    }
    a.prototype.swap16 = function() {
        var u = this.length;
        if (u % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var c = 0; c < u; c += 2)
            I(this, c, c + 1);
        return this
    }
    ,
    a.prototype.swap32 = function() {
        var u = this.length;
        if (u % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var c = 0; c < u; c += 4)
            I(this, c, c + 3),
            I(this, c + 1, c + 2);
        return this
    }
    ,
    a.prototype.swap64 = function() {
        var u = this.length;
        if (u % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var c = 0; c < u; c += 8)
            I(this, c, c + 7),
            I(this, c + 1, c + 6),
            I(this, c + 2, c + 5),
            I(this, c + 3, c + 4);
        return this
    }
    ,
    a.prototype.toString = function() {
        var u = this.length;
        return u === 0 ? "" : arguments.length === 0 ? Kn(this, 0, u) : O.apply(this, arguments)
    }
    ,
    a.prototype.toLocaleString = a.prototype.toString,
    a.prototype.equals = function(u) {
        if (!a.isBuffer(u))
            throw new TypeError("Argument must be a Buffer");
        return this === u ? !0 : a.compare(this, u) === 0
    }
    ,
    a.prototype.inspect = function() {
        var u = ""
          , c = t.INSPECT_MAX_BYTES;
        return u = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(),
        this.length > c && (u += " ... "),
        "<Buffer " + u + ">"
    }
    ,
    n && (a.prototype[n] = a.prototype.inspect),
    a.prototype.compare = function(u, c, b, x, S) {
        if (oe(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)),
        !a.isBuffer(u))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u);
        if (c === void 0 && (c = 0),
        b === void 0 && (b = u ? u.length : 0),
        x === void 0 && (x = 0),
        S === void 0 && (S = this.length),
        c < 0 || b > u.length || x < 0 || S > this.length)
            throw new RangeError("out of range index");
        if (x >= S && c >= b)
            return 0;
        if (x >= S)
            return -1;
        if (c >= b)
            return 1;
        if (c >>>= 0,
        b >>>= 0,
        x >>>= 0,
        S >>>= 0,
        this === u)
            return 0;
        for (var F = S - x, j = b - c, U = Math.min(F, j), _ = this.slice(x, S), K = u.slice(c, b), D = 0; D < U; ++D)
            if (_[D] !== K[D]) {
                F = _[D],
                j = K[D];
                break
            }
        return F < j ? -1 : j < F ? 1 : 0
    }
    ;
    function A(p, u, c, b, x) {
        if (p.length === 0)
            return -1;
        if (typeof c == "string" ? (b = c,
        c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648),
        c = +c,
        wr(c) && (c = x ? 0 : p.length - 1),
        c < 0 && (c = p.length + c),
        c >= p.length) {
            if (x)
                return -1;
            c = p.length - 1
        } else if (c < 0)
            if (x)
                c = 0;
            else
                return -1;
        if (typeof u == "string" && (u = a.from(u, b)),
        a.isBuffer(u))
            return u.length === 0 ? -1 : k(p, u, c, b, x);
        if (typeof u == "number")
            return u = u & 255,
            typeof Uint8Array.prototype.indexOf == "function" ? x ? Uint8Array.prototype.indexOf.call(p, u, c) : Uint8Array.prototype.lastIndexOf.call(p, u, c) : k(p, [u], c, b, x);
        throw new TypeError("val must be string, number or Buffer")
    }
    function k(p, u, c, b, x) {
        var S = 1
          , F = p.length
          , j = u.length;
        if (b !== void 0 && (b = String(b).toLowerCase(),
        b === "ucs2" || b === "ucs-2" || b === "utf16le" || b === "utf-16le")) {
            if (p.length < 2 || u.length < 2)
                return -1;
            S = 2,
            F /= 2,
            j /= 2,
            c /= 2
        }
        function U(es, ts) {
            return S === 1 ? es[ts] : es.readUInt16BE(ts * S)
        }
        var _;
        if (x) {
            var K = -1;
            for (_ = c; _ < F; _++)
                if (U(p, _) === U(u, K === -1 ? 0 : _ - K)) {
                    if (K === -1 && (K = _),
                    _ - K + 1 === j)
                        return K * S
                } else
                    K !== -1 && (_ -= _ - K),
                    K = -1
        } else
            for (c + j > F && (c = F - j),
            _ = c; _ >= 0; _--) {
                for (var D = !0, Ut = 0; Ut < j; Ut++)
                    if (U(p, _ + Ut) !== U(u, Ut)) {
                        D = !1;
                        break
                    }
                if (D)
                    return _
            }
        return -1
    }
    a.prototype.includes = function(u, c, b) {
        return this.indexOf(u, c, b) !== -1
    }
    ,
    a.prototype.indexOf = function(u, c, b) {
        return A(this, u, c, b, !0)
    }
    ,
    a.prototype.lastIndexOf = function(u, c, b) {
        return A(this, u, c, b, !1)
    }
    ;
    function B(p, u, c, b) {
        c = Number(c) || 0;
        var x = p.length - c;
        b ? (b = Number(b),
        b > x && (b = x)) : b = x;
        var S = u.length;
        b > S / 2 && (b = S / 2);
        for (var F = 0; F < b; ++F) {
            var j = parseInt(u.substr(F * 2, 2), 16);
            if (wr(j))
                return F;
            p[c + F] = j
        }
        return F
    }
    function R(p, u, c, b) {
        return Nt(gr(u, p.length - c), p, c, b)
    }
    function V(p, u, c, b) {
        return Nt(Ca(u), p, c, b)
    }
    function z(p, u, c, b) {
        return Nt(Yn(u), p, c, b)
    }
    function st(p, u, c, b) {
        return Nt(Pa(u, p.length - c), p, c, b)
    }
    a.prototype.write = function(u, c, b, x) {
        if (c === void 0)
            x = "utf8",
            b = this.length,
            c = 0;
        else if (b === void 0 && typeof c == "string")
            x = c,
            b = this.length,
            c = 0;
        else if (isFinite(c))
            c = c >>> 0,
            isFinite(b) ? (b = b >>> 0,
            x === void 0 && (x = "utf8")) : (x = b,
            b = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var S = this.length - c;
        if ((b === void 0 || b > S) && (b = S),
        u.length > 0 && (b < 0 || c < 0) || c > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        x || (x = "utf8");
        for (var F = !1; ; )
            switch (x) {
            case "hex":
                return B(this, u, c, b);
            case "utf8":
            case "utf-8":
                return R(this, u, c, b);
            case "ascii":
            case "latin1":
            case "binary":
                return V(this, u, c, b);
            case "base64":
                return z(this, u, c, b);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return st(this, u, c, b);
            default:
                if (F)
                    throw new TypeError("Unknown encoding: " + x);
                x = ("" + x).toLowerCase(),
                F = !0
            }
    }
    ,
    a.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function br(p, u, c) {
        return u === 0 && c === p.length ? e.fromByteArray(p) : e.fromByteArray(p.slice(u, c))
    }
    function Kn(p, u, c) {
        c = Math.min(p.length, c);
        for (var b = [], x = u; x < c; ) {
            var S = p[x]
              , F = null
              , j = S > 239 ? 4 : S > 223 ? 3 : S > 191 ? 2 : 1;
            if (x + j <= c) {
                var U, _, K, D;
                switch (j) {
                case 1:
                    S < 128 && (F = S);
                    break;
                case 2:
                    U = p[x + 1],
                    (U & 192) === 128 && (D = (S & 31) << 6 | U & 63,
                    D > 127 && (F = D));
                    break;
                case 3:
                    U = p[x + 1],
                    _ = p[x + 2],
                    (U & 192) === 128 && (_ & 192) === 128 && (D = (S & 15) << 12 | (U & 63) << 6 | _ & 63,
                    D > 2047 && (D < 55296 || D > 57343) && (F = D));
                    break;
                case 4:
                    U = p[x + 1],
                    _ = p[x + 2],
                    K = p[x + 3],
                    (U & 192) === 128 && (_ & 192) === 128 && (K & 192) === 128 && (D = (S & 15) << 18 | (U & 63) << 12 | (_ & 63) << 6 | K & 63,
                    D > 65535 && D < 1114112 && (F = D))
                }
            }
            F === null ? (F = 65533,
            j = 1) : F > 65535 && (F -= 65536,
            b.push(F >>> 10 & 1023 | 55296),
            F = 56320 | F & 1023),
            b.push(F),
            x += j
        }
        return ya(b)
    }
    var Jn = 4096;
    function ya(p) {
        var u = p.length;
        if (u <= Jn)
            return String.fromCharCode.apply(String, p);
        for (var c = "", b = 0; b < u; )
            c += String.fromCharCode.apply(String, p.slice(b, b += Jn));
        return c
    }
    function ba(p, u, c) {
        var b = "";
        c = Math.min(p.length, c);
        for (var x = u; x < c; ++x)
            b += String.fromCharCode(p[x] & 127);
        return b
    }
    function ga(p, u, c) {
        var b = "";
        c = Math.min(p.length, c);
        for (var x = u; x < c; ++x)
            b += String.fromCharCode(p[x]);
        return b
    }
    function wa(p, u, c) {
        var b = p.length;
        (!u || u < 0) && (u = 0),
        (!c || c < 0 || c > b) && (c = b);
        for (var x = "", S = u; S < c; ++S)
            x += Sa[p[S]];
        return x
    }
    function va(p, u, c) {
        for (var b = p.slice(u, c), x = "", S = 0; S < b.length - 1; S += 2)
            x += String.fromCharCode(b[S] + b[S + 1] * 256);
        return x
    }
    a.prototype.slice = function(u, c) {
        var b = this.length;
        u = ~~u,
        c = c === void 0 ? b : ~~c,
        u < 0 ? (u += b,
        u < 0 && (u = 0)) : u > b && (u = b),
        c < 0 ? (c += b,
        c < 0 && (c = 0)) : c > b && (c = b),
        c < u && (c = u);
        var x = this.subarray(u, c);
        return Object.setPrototypeOf(x, a.prototype),
        x
    }
    ;
    function W(p, u, c) {
        if (p % 1 !== 0 || p < 0)
            throw new RangeError("offset is not uint");
        if (p + u > c)
            throw new RangeError("Trying to access beyond buffer length")
    }
    a.prototype.readUintLE = a.prototype.readUIntLE = function(u, c, b) {
        u = u >>> 0,
        c = c >>> 0,
        b || W(u, c, this.length);
        for (var x = this[u], S = 1, F = 0; ++F < c && (S *= 256); )
            x += this[u + F] * S;
        return x
    }
    ,
    a.prototype.readUintBE = a.prototype.readUIntBE = function(u, c, b) {
        u = u >>> 0,
        c = c >>> 0,
        b || W(u, c, this.length);
        for (var x = this[u + --c], S = 1; c > 0 && (S *= 256); )
            x += this[u + --c] * S;
        return x
    }
    ,
    a.prototype.readUint8 = a.prototype.readUInt8 = function(u, c) {
        return u = u >>> 0,
        c || W(u, 1, this.length),
        this[u]
    }
    ,
    a.prototype.readUint16LE = a.prototype.readUInt16LE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 2, this.length),
        this[u] | this[u + 1] << 8
    }
    ,
    a.prototype.readUint16BE = a.prototype.readUInt16BE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 2, this.length),
        this[u] << 8 | this[u + 1]
    }
    ,
    a.prototype.readUint32LE = a.prototype.readUInt32LE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 4, this.length),
        (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216
    }
    ,
    a.prototype.readUint32BE = a.prototype.readUInt32BE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 4, this.length),
        this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3])
    }
    ,
    a.prototype.readIntLE = function(u, c, b) {
        u = u >>> 0,
        c = c >>> 0,
        b || W(u, c, this.length);
        for (var x = this[u], S = 1, F = 0; ++F < c && (S *= 256); )
            x += this[u + F] * S;
        return S *= 128,
        x >= S && (x -= Math.pow(2, 8 * c)),
        x
    }
    ,
    a.prototype.readIntBE = function(u, c, b) {
        u = u >>> 0,
        c = c >>> 0,
        b || W(u, c, this.length);
        for (var x = c, S = 1, F = this[u + --x]; x > 0 && (S *= 256); )
            F += this[u + --x] * S;
        return S *= 128,
        F >= S && (F -= Math.pow(2, 8 * c)),
        F
    }
    ,
    a.prototype.readInt8 = function(u, c) {
        return u = u >>> 0,
        c || W(u, 1, this.length),
        this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u]
    }
    ,
    a.prototype.readInt16LE = function(u, c) {
        u = u >>> 0,
        c || W(u, 2, this.length);
        var b = this[u] | this[u + 1] << 8;
        return b & 32768 ? b | 4294901760 : b
    }
    ,
    a.prototype.readInt16BE = function(u, c) {
        u = u >>> 0,
        c || W(u, 2, this.length);
        var b = this[u + 1] | this[u] << 8;
        return b & 32768 ? b | 4294901760 : b
    }
    ,
    a.prototype.readInt32LE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 4, this.length),
        this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24
    }
    ,
    a.prototype.readInt32BE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 4, this.length),
        this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]
    }
    ,
    a.prototype.readFloatLE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 4, this.length),
        r.read(this, u, !0, 23, 4)
    }
    ,
    a.prototype.readFloatBE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 4, this.length),
        r.read(this, u, !1, 23, 4)
    }
    ,
    a.prototype.readDoubleLE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 8, this.length),
        r.read(this, u, !0, 52, 8)
    }
    ,
    a.prototype.readDoubleBE = function(u, c) {
        return u = u >>> 0,
        c || W(u, 8, this.length),
        r.read(this, u, !1, 52, 8)
    }
    ;
    function Z(p, u, c, b, x, S) {
        if (!a.isBuffer(p))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (u > x || u < S)
            throw new RangeError('"value" argument is out of bounds');
        if (c + b > p.length)
            throw new RangeError("Index out of range")
    }
    a.prototype.writeUintLE = a.prototype.writeUIntLE = function(u, c, b, x) {
        if (u = +u,
        c = c >>> 0,
        b = b >>> 0,
        !x) {
            var S = Math.pow(2, 8 * b) - 1;
            Z(this, u, c, b, S, 0)
        }
        var F = 1
          , j = 0;
        for (this[c] = u & 255; ++j < b && (F *= 256); )
            this[c + j] = u / F & 255;
        return c + b
    }
    ,
    a.prototype.writeUintBE = a.prototype.writeUIntBE = function(u, c, b, x) {
        if (u = +u,
        c = c >>> 0,
        b = b >>> 0,
        !x) {
            var S = Math.pow(2, 8 * b) - 1;
            Z(this, u, c, b, S, 0)
        }
        var F = b - 1
          , j = 1;
        for (this[c + F] = u & 255; --F >= 0 && (j *= 256); )
            this[c + F] = u / j & 255;
        return c + b
    }
    ,
    a.prototype.writeUint8 = a.prototype.writeUInt8 = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 1, 255, 0),
        this[c] = u & 255,
        c + 1
    }
    ,
    a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 2, 65535, 0),
        this[c] = u & 255,
        this[c + 1] = u >>> 8,
        c + 2
    }
    ,
    a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 2, 65535, 0),
        this[c] = u >>> 8,
        this[c + 1] = u & 255,
        c + 2
    }
    ,
    a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 4, 4294967295, 0),
        this[c + 3] = u >>> 24,
        this[c + 2] = u >>> 16,
        this[c + 1] = u >>> 8,
        this[c] = u & 255,
        c + 4
    }
    ,
    a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 4, 4294967295, 0),
        this[c] = u >>> 24,
        this[c + 1] = u >>> 16,
        this[c + 2] = u >>> 8,
        this[c + 3] = u & 255,
        c + 4
    }
    ,
    a.prototype.writeIntLE = function(u, c, b, x) {
        if (u = +u,
        c = c >>> 0,
        !x) {
            var S = Math.pow(2, 8 * b - 1);
            Z(this, u, c, b, S - 1, -S)
        }
        var F = 0
          , j = 1
          , U = 0;
        for (this[c] = u & 255; ++F < b && (j *= 256); )
            u < 0 && U === 0 && this[c + F - 1] !== 0 && (U = 1),
            this[c + F] = (u / j >> 0) - U & 255;
        return c + b
    }
    ,
    a.prototype.writeIntBE = function(u, c, b, x) {
        if (u = +u,
        c = c >>> 0,
        !x) {
            var S = Math.pow(2, 8 * b - 1);
            Z(this, u, c, b, S - 1, -S)
        }
        var F = b - 1
          , j = 1
          , U = 0;
        for (this[c + F] = u & 255; --F >= 0 && (j *= 256); )
            u < 0 && U === 0 && this[c + F + 1] !== 0 && (U = 1),
            this[c + F] = (u / j >> 0) - U & 255;
        return c + b
    }
    ,
    a.prototype.writeInt8 = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 1, 127, -128),
        u < 0 && (u = 255 + u + 1),
        this[c] = u & 255,
        c + 1
    }
    ,
    a.prototype.writeInt16LE = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 2, 32767, -32768),
        this[c] = u & 255,
        this[c + 1] = u >>> 8,
        c + 2
    }
    ,
    a.prototype.writeInt16BE = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 2, 32767, -32768),
        this[c] = u >>> 8,
        this[c + 1] = u & 255,
        c + 2
    }
    ,
    a.prototype.writeInt32LE = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 4, 2147483647, -2147483648),
        this[c] = u & 255,
        this[c + 1] = u >>> 8,
        this[c + 2] = u >>> 16,
        this[c + 3] = u >>> 24,
        c + 4
    }
    ,
    a.prototype.writeInt32BE = function(u, c, b) {
        return u = +u,
        c = c >>> 0,
        b || Z(this, u, c, 4, 2147483647, -2147483648),
        u < 0 && (u = 4294967295 + u + 1),
        this[c] = u >>> 24,
        this[c + 1] = u >>> 16,
        this[c + 2] = u >>> 8,
        this[c + 3] = u & 255,
        c + 4
    }
    ;
    function Vn(p, u, c, b, x, S) {
        if (c + b > p.length)
            throw new RangeError("Index out of range");
        if (c < 0)
            throw new RangeError("Index out of range")
    }
    function Xn(p, u, c, b, x) {
        return u = +u,
        c = c >>> 0,
        x || Vn(p, u, c, 4),
        r.write(p, u, c, b, 23, 4),
        c + 4
    }
    a.prototype.writeFloatLE = function(u, c, b) {
        return Xn(this, u, c, !0, b)
    }
    ,
    a.prototype.writeFloatBE = function(u, c, b) {
        return Xn(this, u, c, !1, b)
    }
    ;
    function Zn(p, u, c, b, x) {
        return u = +u,
        c = c >>> 0,
        x || Vn(p, u, c, 8),
        r.write(p, u, c, b, 52, 8),
        c + 8
    }
    a.prototype.writeDoubleLE = function(u, c, b) {
        return Zn(this, u, c, !0, b)
    }
    ,
    a.prototype.writeDoubleBE = function(u, c, b) {
        return Zn(this, u, c, !1, b)
    }
    ,
    a.prototype.copy = function(u, c, b, x) {
        if (!a.isBuffer(u))
            throw new TypeError("argument should be a Buffer");
        if (b || (b = 0),
        !x && x !== 0 && (x = this.length),
        c >= u.length && (c = u.length),
        c || (c = 0),
        x > 0 && x < b && (x = b),
        x === b || u.length === 0 || this.length === 0)
            return 0;
        if (c < 0)
            throw new RangeError("targetStart out of bounds");
        if (b < 0 || b >= this.length)
            throw new RangeError("Index out of range");
        if (x < 0)
            throw new RangeError("sourceEnd out of bounds");
        x > this.length && (x = this.length),
        u.length - c < x - b && (x = u.length - c + b);
        var S = x - b;
        return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(c, b, x) : Uint8Array.prototype.set.call(u, this.subarray(b, x), c),
        S
    }
    ,
    a.prototype.fill = function(u, c, b, x) {
        if (typeof u == "string") {
            if (typeof c == "string" ? (x = c,
            c = 0,
            b = this.length) : typeof b == "string" && (x = b,
            b = this.length),
            x !== void 0 && typeof x != "string")
                throw new TypeError("encoding must be a string");
            if (typeof x == "string" && !a.isEncoding(x))
                throw new TypeError("Unknown encoding: " + x);
            if (u.length === 1) {
                var S = u.charCodeAt(0);
                (x === "utf8" && S < 128 || x === "latin1") && (u = S)
            }
        } else
            typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
        if (c < 0 || this.length < c || this.length < b)
            throw new RangeError("Out of range index");
        if (b <= c)
            return this;
        c = c >>> 0,
        b = b === void 0 ? this.length : b >>> 0,
        u || (u = 0);
        var F;
        if (typeof u == "number")
            for (F = c; F < b; ++F)
                this[F] = u;
        else {
            var j = a.isBuffer(u) ? u : a.from(u, x)
              , U = j.length;
            if (U === 0)
                throw new TypeError('The value "' + u + '" is invalid for argument "value"');
            for (F = 0; F < b - c; ++F)
                this[F + c] = j[F % U]
        }
        return this
    }
    ;
    var xa = /[^+/0-9A-Za-z-_]/g;
    function Ea(p) {
        if (p = p.split("=")[0],
        p = p.trim().replace(xa, ""),
        p.length < 2)
            return "";
        for (; p.length % 4 !== 0; )
            p = p + "=";
        return p
    }
    function gr(p, u) {
        u = u || 1 / 0;
        for (var c, b = p.length, x = null, S = [], F = 0; F < b; ++F) {
            if (c = p.charCodeAt(F),
            c > 55295 && c < 57344) {
                if (!x) {
                    if (c > 56319) {
                        (u -= 3) > -1 && S.push(239, 191, 189);
                        continue
                    } else if (F + 1 === b) {
                        (u -= 3) > -1 && S.push(239, 191, 189);
                        continue
                    }
                    x = c;
                    continue
                }
                if (c < 56320) {
                    (u -= 3) > -1 && S.push(239, 191, 189),
                    x = c;
                    continue
                }
                c = (x - 55296 << 10 | c - 56320) + 65536
            } else
                x && (u -= 3) > -1 && S.push(239, 191, 189);
            if (x = null,
            c < 128) {
                if ((u -= 1) < 0)
                    break;
                S.push(c)
            } else if (c < 2048) {
                if ((u -= 2) < 0)
                    break;
                S.push(c >> 6 | 192, c & 63 | 128)
            } else if (c < 65536) {
                if ((u -= 3) < 0)
                    break;
                S.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            } else if (c < 1114112) {
                if ((u -= 4) < 0)
                    break;
                S.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return S
    }
    function Ca(p) {
        for (var u = [], c = 0; c < p.length; ++c)
            u.push(p.charCodeAt(c) & 255);
        return u
    }
    function Pa(p, u) {
        for (var c, b, x, S = [], F = 0; F < p.length && !((u -= 2) < 0); ++F)
            c = p.charCodeAt(F),
            b = c >> 8,
            x = c % 256,
            S.push(x),
            S.push(b);
        return S
    }
    function Yn(p) {
        return e.toByteArray(Ea(p))
    }
    function Nt(p, u, c, b) {
        for (var x = 0; x < b && !(x + c >= u.length || x >= p.length); ++x)
            u[x + c] = p[x];
        return x
    }
    function oe(p, u) {
        return p instanceof u || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === u.name
    }
    function wr(p) {
        return p !== p
    }
    var Sa = function() {
        for (var p = "0123456789abcdef", u = new Array(256), c = 0; c < 16; ++c)
            for (var b = c * 16, x = 0; x < 16; ++x)
                u[b + x] = p[c] + p[x];
        return u
    }()
}
)(Aa);
var qs = {
    exports: {}
}, q = qs.exports = {}, ue, ce;
function Br() {
    throw new Error("setTimeout has not been defined")
}
function $r() {
    throw new Error("clearTimeout has not been defined")
}
(function() {
    try {
        typeof setTimeout == "function" ? ue = setTimeout : ue = Br
    } catch {
        ue = Br
    }
    try {
        typeof clearTimeout == "function" ? ce = clearTimeout : ce = $r
    } catch {
        ce = $r
    }
}
)();
function Ls(t) {
    if (ue === setTimeout)
        return setTimeout(t, 0);
    if ((ue === Br || !ue) && setTimeout)
        return ue = setTimeout,
        setTimeout(t, 0);
    try {
        return ue(t, 0)
    } catch {
        try {
            return ue.call(null, t, 0)
        } catch {
            return ue.call(this, t, 0)
        }
    }
}
function Ra(t) {
    if (ce === clearTimeout)
        return clearTimeout(t);
    if ((ce === $r || !ce) && clearTimeout)
        return ce = clearTimeout,
        clearTimeout(t);
    try {
        return ce(t)
    } catch {
        try {
            return ce.call(null, t)
        } catch {
            return ce.call(this, t)
        }
    }
}
var ge = [], qe = !1, Ie, Gt = -1;
function ja() {
    !qe || !Ie || (qe = !1,
    Ie.length ? ge = Ie.concat(ge) : Gt = -1,
    ge.length && zs())
}
function zs() {
    if (!qe) {
        var t = Ls(ja);
        qe = !0;
        for (var e = ge.length; e; ) {
            for (Ie = ge,
            ge = []; ++Gt < e; )
                Ie && Ie[Gt].run();
            Gt = -1,
            e = ge.length
        }
        Ie = null,
        qe = !1,
        Ra(t)
    }
}
q.nextTick = function(t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
    ge.push(new Gs(t,e)),
    ge.length === 1 && !qe && Ls(zs)
}
;
function Gs(t, e) {
    this.fun = t,
    this.array = e
}
Gs.prototype.run = function() {
    this.fun.apply(null, this.array)
}
;
q.title = "browser";
q.browser = !0;
q.env = {};
q.argv = [];
q.version = "";
q.versions = {};
function xe() {}
q.on = xe;
q.addListener = xe;
q.once = xe;
q.off = xe;
q.removeListener = xe;
q.removeAllListeners = xe;
q.emit = xe;
q.prependListener = xe;
q.prependOnceListener = xe;
q.listeners = function(t) {
    return []
}
;
q.binding = function(t) {
    throw new Error("process.binding is not supported")
}
;
q.cwd = function() {
    return "/"
}
;
q.chdir = function(t) {
    throw new Error("process.chdir is not supported")
}
;
q.umask = function() {
    return 0
}
;
var Na = qs.exports;
const Dd = _s(Na);
var Ua = function(t) {
    function e() {
        var n = this || self;
        return delete t.prototype.__magic__,
        n
    }
    if (typeof globalThis == "object")
        return globalThis;
    if (this)
        return e();
    t.defineProperty(t.prototype, "__magic__", {
        configurable: !0,
        get: e
    });
    var r = __magic__;
    return r
}(Object)
  , rs = Ua;
function re(t, e={}) {
    const {fees: r=t.fees, formatters: n=t.formatters, serializers: s=t.serializers} = e;
    return {
        ...t,
        fees: r,
        formatters: n,
        serializers: s
    }
}
const qd = re({
    id: 42161,
    name: "Arbitrum One",
    network: "arbitrum",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        alchemy: {
            http: ["https://arb-mainnet.g.alchemy.com/v2"],
            webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
        },
        infura: {
            http: ["https://arbitrum-mainnet.infura.io/v3"],
            webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
        },
        default: {
            http: ["https://arb1.arbitrum.io/rpc"]
        },
        public: {
            http: ["https://arb1.arbitrum.io/rpc"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Arbiscan",
            url: "https://arbiscan.io"
        },
        default: {
            name: "Arbiscan",
            url: "https://arbiscan.io"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 7654707
        }
    }
})
  , Ld = re({
    id: 43114,
    name: "Avalanche",
    network: "avalanche",
    nativeCurrency: {
        decimals: 18,
        name: "Avalanche",
        symbol: "AVAX"
    },
    rpcUrls: {
        default: {
            http: ["https://api.avax.network/ext/bc/C/rpc"]
        },
        public: {
            http: ["https://api.avax.network/ext/bc/C/rpc"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "SnowTrace",
            url: "https://snowtrace.io"
        },
        default: {
            name: "SnowTrace",
            url: "https://snowtrace.io"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 11907934
        }
    }
})
  , zd = re({
    id: 43113,
    name: "Avalanche Fuji",
    network: "avalanche-fuji",
    nativeCurrency: {
        decimals: 18,
        name: "Avalanche Fuji",
        symbol: "AVAX"
    },
    rpcUrls: {
        default: {
            http: ["https://api.avax-test.network/ext/bc/C/rpc"]
        },
        public: {
            http: ["https://api.avax-test.network/ext/bc/C/rpc"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "SnowTrace",
            url: "https://testnet.snowtrace.io"
        },
        default: {
            name: "SnowTrace",
            url: "https://testnet.snowtrace.io"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 7096959
        }
    },
    testnet: !0
})
  , _a = "1.21.3"
  , Da = t=>t
  , Je = t=>t
  , qa = ()=>`viem@${_a}`;
class T extends Error {
    constructor(e, r={}) {
        var i;
        super(),
        Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ViemError"
        }),
        Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qa()
        });
        const n = r.cause instanceof T ? r.cause.details : (i = r.cause) != null && i.message ? r.cause.message : r.details
          , s = r.cause instanceof T && r.cause.docsPath || r.docsPath;
        this.message = [e || "An error occurred.", "", ...r.metaMessages ? [...r.metaMessages, ""] : [], ...s ? [`Docs: https://viem.sh${s}.html${r.docsSlug ? `#${r.docsSlug}` : ""}`] : [], ...n ? [`Details: ${n}`] : [], `Version: ${this.version}`].join(`
`),
        r.cause && (this.cause = r.cause),
        this.details = n,
        this.docsPath = s,
        this.metaMessages = r.metaMessages,
        this.shortMessage = e
    }
    walk(e) {
        return Ws(this, e)
    }
}
function Ws(t, e) {
    return e != null && e(t) ? t : t && typeof t == "object" && "cause"in t ? Ws(t.cause, e) : e ? null : t
}
class La extends T {
    constructor({max: e, min: r, signed: n, size: s, value: i}) {
        super(`Number "${i}" is not in safe ${s ? `${s * 8}-bit ${n ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${r} to ${e})` : `(above ${r})`}`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IntegerOutOfRangeError"
        })
    }
}
class za extends T {
    constructor(e) {
        super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidHexBooleanError"
        })
    }
}
class Ga extends T {
    constructor({givenSize: e, maxSize: r}) {
        super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SizeOverflowError"
        })
    }
}
function ie(t, {strict: e=!0}={}) {
    return !t || typeof t != "string" ? !1 : e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x")
}
function G(t) {
    return ie(t, {
        strict: !1
    }) ? Math.ceil((t.length - 2) / 2) : t.length
}
function Be(t, {dir: e="left"}={}) {
    let r = typeof t == "string" ? t.replace("0x", "") : t
      , n = 0;
    for (let s = 0; s < r.length - 1 && r[e === "left" ? s : r.length - s - 1].toString() === "0"; s++)
        n++;
    return r = e === "left" ? r.slice(n) : r.slice(0, r.length - n),
    typeof t == "string" ? (r.length === 1 && e === "right" && (r = `${r}0`),
    `0x${r.length % 2 === 1 ? `0${r}` : r}`) : r
}
class Hs extends T {
    constructor({offset: e, position: r, size: n}) {
        super(`Slice ${r === "start" ? "starting" : "ending"} at offset "${e}" is out-of-bounds (size: ${n}).`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SliceOffsetOutOfBoundsError"
        })
    }
}
class Qs extends T {
    constructor({size: e, targetSize: r, type: n}) {
        super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SizeExceedsPaddingSizeError"
        })
    }
}
function Ve(t, {dir: e, size: r=32}={}) {
    return typeof t == "string" ? Pe(t, {
        dir: e,
        size: r
    }) : Wa(t, {
        dir: e,
        size: r
    })
}
function Pe(t, {dir: e, size: r=32}={}) {
    if (r === null)
        return t;
    const n = t.replace("0x", "");
    if (n.length > r * 2)
        throw new Qs({
            size: Math.ceil(n.length / 2),
            targetSize: r,
            type: "hex"
        });
    return `0x${n[e === "right" ? "padEnd" : "padStart"](r * 2, "0")}`
}
function Wa(t, {dir: e, size: r=32}={}) {
    if (r === null)
        return t;
    if (t.length > r)
        throw new Qs({
            size: t.length,
            targetSize: r,
            type: "bytes"
        });
    const n = new Uint8Array(r);
    for (let s = 0; s < r; s++) {
        const i = e === "right";
        n[i ? s : r - s - 1] = t[i ? s : t.length - s - 1]
    }
    return n
}
const Ha = Array.from({
    length: 256
}, (t,e)=>e.toString(16).padStart(2, "0"));
function Ee(t, e={}) {
    return typeof t == "number" || typeof t == "bigint" ? $(t, e) : typeof t == "string" ? un(t, e) : typeof t == "boolean" ? Ks(t, e) : lt(t, e)
}
function Ks(t, e={}) {
    const r = `0x${Number(t)}`;
    return typeof e.size == "number" ? (ke(r, {
        size: e.size
    }),
    Ve(r, {
        size: e.size
    })) : r
}
function lt(t, e={}) {
    let r = "";
    for (let s = 0; s < t.length; s++)
        r += Ha[t[s]];
    const n = `0x${r}`;
    return typeof e.size == "number" ? (ke(n, {
        size: e.size
    }),
    Ve(n, {
        dir: "right",
        size: e.size
    })) : n
}
function $(t, e={}) {
    const {signed: r, size: n} = e
      , s = BigInt(t);
    let i;
    n ? r ? i = (1n << BigInt(n) * 8n - 1n) - 1n : i = 2n ** (BigInt(n) * 8n) - 1n : typeof t == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
    const o = typeof i == "bigint" && r ? -i - 1n : 0;
    if (i && s > i || s < o) {
        const l = typeof t == "bigint" ? "n" : "";
        throw new La({
            max: i ? `${i}${l}` : void 0,
            min: `${o}${l}`,
            signed: r,
            size: n,
            value: `${t}${l}`
        })
    }
    const a = `0x${(r && s < 0 ? (1n << BigInt(n * 8)) + BigInt(s) : s).toString(16)}`;
    return n ? Ve(a, {
        size: n
    }) : a
}
const Qa = new TextEncoder;
function un(t, e={}) {
    const r = Qa.encode(t);
    return lt(r, e)
}
const Ka = new TextEncoder;
function Se(t, e={}) {
    return typeof t == "number" || typeof t == "bigint" ? Va(t, e) : typeof t == "boolean" ? Ja(t, e) : ie(t) ? cn(t, e) : we(t, e)
}
function Ja(t, e={}) {
    const r = new Uint8Array(1);
    return r[0] = Number(t),
    typeof e.size == "number" ? (ke(r, {
        size: e.size
    }),
    Ve(r, {
        size: e.size
    })) : r
}
const ye = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function ns(t) {
    if (t >= ye.zero && t <= ye.nine)
        return t - ye.zero;
    if (t >= ye.A && t <= ye.F)
        return t - (ye.A - 10);
    if (t >= ye.a && t <= ye.f)
        return t - (ye.a - 10)
}
function cn(t, e={}) {
    let r = t;
    e.size && (ke(r, {
        size: e.size
    }),
    r = Ve(r, {
        dir: "right",
        size: e.size
    }));
    let n = r.slice(2);
    n.length % 2 && (n = `0${n}`);
    const s = n.length / 2
      , i = new Uint8Array(s);
    for (let o = 0, a = 0; o < s; o++) {
        const l = ns(n.charCodeAt(a++))
          , d = ns(n.charCodeAt(a++));
        if (l === void 0 || d === void 0)
            throw new T(`Invalid byte sequence ("${n[a - 2]}${n[a - 1]}" in "${n}").`);
        i[o] = l * 16 + d
    }
    return i
}
function Va(t, e) {
    const r = $(t, e);
    return cn(r)
}
function we(t, e={}) {
    const r = Ka.encode(t);
    return typeof e.size == "number" ? (ke(r, {
        size: e.size
    }),
    Ve(r, {
        dir: "right",
        size: e.size
    })) : r
}
function ke(t, {size: e}) {
    if (G(t) > e)
        throw new Ga({
            givenSize: G(t),
            maxSize: e
        })
}
function be(t, e={}) {
    const {signed: r} = e;
    e.size && ke(t, {
        size: e.size
    });
    const n = BigInt(t);
    if (!r)
        return n;
    const s = (t.length - 2) / 2
      , i = (1n << BigInt(s) * 8n - 1n) - 1n;
    return n <= i ? n : n - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n
}
function Xa(t, e={}) {
    let r = t;
    if (e.size && (ke(r, {
        size: e.size
    }),
    r = Be(r)),
    Be(r) === "0x00")
        return !1;
    if (Be(r) === "0x01")
        return !0;
    throw new za(r)
}
function J(t, e={}) {
    return Number(be(t, e))
}
function ln(t, e={}) {
    let r = cn(t);
    return e.size && (ke(r, {
        size: e.size
    }),
    r = Be(r, {
        dir: "right"
    })),
    new TextDecoder().decode(r)
}
function fn(t, e) {
    return ({exclude: r, format: n})=>({
        exclude: r,
        format: s=>{
            const i = e(s);
            if (r)
                for (const o of r)
                    delete i[o];
            return {
                ...i,
                ...n(s)
            }
        }
        ,
        type: t
    })
}
const Js = {
    "0x0": "legacy",
    "0x1": "eip2930",
    "0x2": "eip1559"
};
function rr(t) {
    const e = {
        ...t,
        blockHash: t.blockHash ? t.blockHash : null,
        blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
        chainId: t.chainId ? J(t.chainId) : void 0,
        gas: t.gas ? BigInt(t.gas) : void 0,
        gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
        maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: t.maxPriorityFeePerGas ? BigInt(t.maxPriorityFeePerGas) : void 0,
        nonce: t.nonce ? J(t.nonce) : void 0,
        to: t.to ? t.to : null,
        transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
        type: t.type ? Js[t.type] : void 0,
        typeHex: t.type ? t.type : void 0,
        value: t.value ? BigInt(t.value) : void 0,
        v: t.v ? BigInt(t.v) : void 0
    };
    return e.yParity = (()=>{
        if (t.yParity)
            return Number(t.yParity);
        if (typeof e.v == "bigint") {
            if (e.v === 0n || e.v === 27n)
                return 0;
            if (e.v === 1n || e.v === 28n)
                return 1;
            if (e.v >= 35n)
                return e.v % 2n === 0n ? 1 : 0
        }
    }
    )(),
    e.type === "legacy" && (delete e.accessList,
    delete e.maxFeePerGas,
    delete e.maxPriorityFeePerGas,
    delete e.yParity),
    e.type === "eip2930" && (delete e.maxFeePerGas,
    delete e.maxPriorityFeePerGas),
    e
}
const Za = fn("transaction", rr);
function dn(t) {
    var r;
    const e = (r = t.transactions) == null ? void 0 : r.map(n=>typeof n == "string" ? n : rr(n));
    return {
        ...t,
        baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null,
        difficulty: t.difficulty ? BigInt(t.difficulty) : void 0,
        gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0,
        gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0,
        hash: t.hash ? t.hash : null,
        logsBloom: t.logsBloom ? t.logsBloom : null,
        nonce: t.nonce ? t.nonce : null,
        number: t.number ? BigInt(t.number) : null,
        size: t.size ? BigInt(t.size) : void 0,
        timestamp: t.timestamp ? BigInt(t.timestamp) : void 0,
        transactions: e,
        totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null
    }
}
const Ya = fn("block", dn);
function ae(t, {args: e, eventName: r}={}) {
    return {
        ...t,
        blockHash: t.blockHash ? t.blockHash : null,
        blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
        logIndex: t.logIndex ? Number(t.logIndex) : null,
        transactionHash: t.transactionHash ? t.transactionHash : null,
        transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
        ...r ? {
            args: e,
            eventName: r
        } : {}
    }
}
const eo = {
    "0x0": "reverted",
    "0x1": "success"
};
function Vs(t) {
    return {
        ...t,
        blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
        contractAddress: t.contractAddress ? t.contractAddress : null,
        cumulativeGasUsed: t.cumulativeGasUsed ? BigInt(t.cumulativeGasUsed) : null,
        effectiveGasPrice: t.effectiveGasPrice ? BigInt(t.effectiveGasPrice) : null,
        gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null,
        logs: t.logs ? t.logs.map(e=>ae(e)) : null,
        to: t.to ? t.to : null,
        transactionIndex: t.transactionIndex ? J(t.transactionIndex) : null,
        status: t.status ? eo[t.status] : null,
        type: t.type ? Js[t.type] || t.type : null
    }
}
const to = fn("transactionReceipt", Vs)
  , hn = {
    block: Ya({
        format(t) {
            var r;
            return {
                transactions: (r = t.transactions) == null ? void 0 : r.map(n=>{
                    if (typeof n == "string")
                        return n;
                    const s = rr(n);
                    return s.typeHex === "0x7e" && (s.isSystemTx = n.isSystemTx,
                    s.mint = n.mint ? be(n.mint) : void 0,
                    s.sourceHash = n.sourceHash,
                    s.type = "deposit"),
                    s
                }
                ),
                stateRoot: t.stateRoot
            }
        }
    }),
    transaction: Za({
        format(t) {
            const e = {};
            return t.type === "0x7e" && (e.isSystemTx = t.isSystemTx,
            e.mint = t.mint ? be(t.mint) : void 0,
            e.sourceHash = t.sourceHash,
            e.type = "deposit"),
            e
        }
    }),
    transactionReceipt: to({
        format(t) {
            return {
                l1GasPrice: t.l1GasPrice ? be(t.l1GasPrice) : null,
                l1GasUsed: t.l1GasUsed ? be(t.l1GasUsed) : null,
                l1Fee: t.l1Fee ? be(t.l1Fee) : null,
                l1FeeScalar: t.l1FeeScalar ? Number(t.l1FeeScalar) : null
            }
        }
    })
}
  , Gd = re({
    id: 8453,
    network: "base",
    name: "Base",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        alchemy: {
            http: ["https://base-mainnet.g.alchemy.com/v2"],
            webSocket: ["wss://base-mainnet.g.alchemy.com/v2"]
        },
        infura: {
            http: ["https://base-mainnet.infura.io/v3"],
            webSocket: ["wss://base-mainnet.infura.io/ws/v3"]
        },
        default: {
            http: ["https://mainnet.base.org"]
        },
        public: {
            http: ["https://mainnet.base.org"]
        }
    },
    blockExplorers: {
        blockscout: {
            name: "Basescout",
            url: "https://base.blockscout.com"
        },
        default: {
            name: "Basescan",
            url: "https://basescan.org"
        },
        etherscan: {
            name: "Basescan",
            url: "https://basescan.org"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 5022
        }
    }
}, {
    formatters: hn
})
  , Wd = re({
    id: 84532,
    network: "base-sepolia",
    name: "Base Sepolia",
    nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        alchemy: {
            http: ["https://base-sepolia.g.alchemy.com/v2"],
            webSocket: ["wss://base-sepolia.g.alchemy.com/v2"]
        },
        default: {
            http: ["https://sepolia.base.org"]
        },
        public: {
            http: ["https://sepolia.base.org"]
        }
    },
    blockExplorers: {
        blockscout: {
            name: "Blockscout",
            url: "https://base-sepolia.blockscout.com"
        },
        default: {
            name: "Blockscout",
            url: "https://base-sepolia.blockscout.com"
        }
    },
    testnet: !0,
    sourceId: 11155111
}, {
    formatters: hn
})
  , Hd = re({
    id: 56,
    name: "BNB Smart Chain",
    network: "bsc",
    nativeCurrency: {
        decimals: 18,
        name: "BNB",
        symbol: "BNB"
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.ankr.com/bsc"]
        },
        public: {
            http: ["https://rpc.ankr.com/bsc"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "BscScan",
            url: "https://bscscan.com"
        },
        default: {
            name: "BscScan",
            url: "https://bscscan.com"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 15921452
        }
    }
})
  , Qd = re({
    id: 97,
    name: "Binance Smart Chain Testnet",
    network: "bsc-testnet",
    nativeCurrency: {
        decimals: 18,
        name: "BNB",
        symbol: "tBNB"
    },
    rpcUrls: {
        default: {
            http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]
        },
        public: {
            http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "BscScan",
            url: "https://testnet.bscscan.com"
        },
        default: {
            name: "BscScan",
            url: "https://testnet.bscscan.com"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 17422483
        }
    },
    testnet: !0
})
  , ro = {
    legacy: "0x0",
    eip2930: "0x1",
    eip1559: "0x2"
};
function nr(t) {
    return {
        ...t,
        gas: typeof t.gas < "u" ? $(t.gas) : void 0,
        gasPrice: typeof t.gasPrice < "u" ? $(t.gasPrice) : void 0,
        maxFeePerGas: typeof t.maxFeePerGas < "u" ? $(t.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: typeof t.maxPriorityFeePerGas < "u" ? $(t.maxPriorityFeePerGas) : void 0,
        nonce: typeof t.nonce < "u" ? $(t.nonce) : void 0,
        type: typeof t.type < "u" ? ro[t.type] : void 0,
        value: typeof t.value < "u" ? $(t.value) : void 0
    }
}
class Re extends T {
    constructor({address: e}) {
        super(`Address "${e}" is invalid.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAddressError"
        })
    }
}
class Rr extends T {
    constructor({blockNumber: e, chain: r, contract: n}) {
        super(`Chain "${r.name}" does not support contract "${n.name}".`, {
            metaMessages: ["This could be due to any of the following:", ...e && n.blockCreated && n.blockCreated > e ? [`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`] : [`- The chain does not have the contract "${n.name}" configured.`]]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainDoesNotSupportContract"
        })
    }
}
let no = class extends T {
    constructor({chain: e, currentChainId: r}) {
        super(`The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`, {
            metaMessages: [`Current Chain ID:  ${r}`, `Expected Chain ID: ${e.id} – ${e.name}`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainMismatchError"
        })
    }
}
;
class so extends T {
    constructor() {
        super(["No chain was provided to the request.", "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainNotFoundError"
        })
    }
}
class Xs extends T {
    constructor() {
        super("No chain was provided to the Client."),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ClientChainNotConfiguredError"
        })
    }
}
const io = {
    gwei: 9,
    wei: 18
}
  , ao = {
    ether: -9,
    wei: 9
}
  , oo = {
    ether: -18,
    gwei: -9
};
function Qt(t, e) {
    let r = t.toString();
    const n = r.startsWith("-");
    n && (r = r.slice(1)),
    r = r.padStart(e, "0");
    let[s,i] = [r.slice(0, r.length - e), r.slice(r.length - e)];
    return i = i.replace(/(0+)$/, ""),
    `${n ? "-" : ""}${s || "0"}${i ? `.${i}` : ""}`
}
function Y(t, e="wei") {
    return Qt(t, ao[e])
}
class De extends T {
    constructor({cause: e, message: r}={}) {
        var s;
        const n = (s = r == null ? void 0 : r.replace("execution reverted: ", "")) == null ? void 0 : s.replace("execution reverted", "");
        super(`Execution reverted ${n ? `with reason: ${n}` : "for an unknown reason"}.`, {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ExecutionRevertedError"
        })
    }
}
Object.defineProperty(De, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 3
});
Object.defineProperty(De, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted/
});
class Kt extends T {
    constructor({cause: e, maxFeePerGas: r}={}) {
        super(`The fee cap (\`maxFeePerGas\`${r ? ` = ${Y(r)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FeeCapTooHigh"
        })
    }
}
Object.defineProperty(Kt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class jr extends T {
    constructor({cause: e, maxFeePerGas: r}={}) {
        super(`The fee cap (\`maxFeePerGas\`${r ? ` = ${Y(r)}` : ""} gwei) cannot be lower than the block base fee.`, {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FeeCapTooLow"
        })
    }
}
Object.defineProperty(jr, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class Nr extends T {
    constructor({cause: e, nonce: r}={}) {
        super(`Nonce provided for the transaction ${r ? `(${r}) ` : ""}is higher than the next one expected.`, {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NonceTooHighError"
        })
    }
}
Object.defineProperty(Nr, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too high/
});
class Ur extends T {
    constructor({cause: e, nonce: r}={}) {
        super([`Nonce provided for the transaction ${r ? `(${r}) ` : ""}is lower than the current nonce of the account.`, "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`), {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NonceTooLowError"
        })
    }
}
Object.defineProperty(Ur, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too low|transaction already imported|already known/
});
class _r extends T {
    constructor({cause: e, nonce: r}={}) {
        super(`Nonce provided for the transaction ${r ? `(${r}) ` : ""}exceeds the maximum allowed nonce.`, {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NonceMaxValueError"
        })
    }
}
Object.defineProperty(_r, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce has max value/
});
class Dr extends T {
    constructor({cause: e}={}) {
        super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`), {
            cause: e,
            metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InsufficientFundsError"
        })
    }
}
Object.defineProperty(Dr, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /insufficient funds/
});
class qr extends T {
    constructor({cause: e, gas: r}={}) {
        super(`The amount of gas ${r ? `(${r}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IntrinsicGasTooHighError"
        })
    }
}
Object.defineProperty(qr, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too high|gas limit reached/
});
class Lr extends T {
    constructor({cause: e, gas: r}={}) {
        super(`The amount of gas ${r ? `(${r}) ` : ""}provided for the transaction is too low.`, {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IntrinsicGasTooLowError"
        })
    }
}
Object.defineProperty(Lr, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too low/
});
class zr extends T {
    constructor({cause: e}) {
        super("The transaction type is not supported for this chain.", {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionTypeNotSupportedError"
        })
    }
}
Object.defineProperty(zr, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /transaction type not valid/
});
class Jt extends T {
    constructor({cause: e, maxPriorityFeePerGas: r, maxFeePerGas: n}={}) {
        super([`The provided tip (\`maxPriorityFeePerGas\`${r ? ` = ${Y(r)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n ? ` = ${Y(n)} gwei` : ""}).`].join(`
`), {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TipAboveFeeCapError"
        })
    }
}
Object.defineProperty(Jt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class sr extends T {
    constructor({cause: e}) {
        super(`An error occurred while executing: ${e == null ? void 0 : e.shortMessage}`, {
            cause: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownNodeError"
        })
    }
}
const uo = /^0x[a-fA-F0-9]{40}$/;
function he(t) {
    return uo.test(t)
}
function pe(t) {
    return typeof t[0] == "string" ? pn(t) : co(t)
}
function co(t) {
    let e = 0;
    for (const s of t)
        e += s.length;
    const r = new Uint8Array(e);
    let n = 0;
    for (const s of t)
        r.set(s, n),
        n += s.length;
    return r
}
function pn(t) {
    return `0x${t.reduce((e,r)=>e + r.replace("0x", ""), "")}`
}
function lo(t, e) {
    const r = t.exec(e);
    return r == null ? void 0 : r.groups
}
const ss = /^tuple(?<array>(\[(\d*)\])*)$/;
function Gr(t) {
    let e = t.type;
    if (ss.test(t.type) && "components"in t) {
        e = "(";
        const r = t.components.length;
        for (let s = 0; s < r; s++) {
            const i = t.components[s];
            e += Gr(i),
            s < r - 1 && (e += ", ")
        }
        const n = lo(ss, t.type);
        return e += `)${(n == null ? void 0 : n.array) ?? ""}`,
        Gr({
            ...t,
            type: e
        })
    }
    return "indexed"in t && t.indexed && (e = `${e} indexed`),
    t.name ? `${e} ${t.name}` : e
}
function it(t) {
    let e = "";
    const r = t.length;
    for (let n = 0; n < r; n++) {
        const s = t[n];
        e += Gr(s),
        n !== r - 1 && (e += ", ")
    }
    return e
}
function fo(t) {
    return t.type === "function" ? `function ${t.name}(${it(t.inputs)})${t.stateMutability && t.stateMutability !== "nonpayable" ? ` ${t.stateMutability}` : ""}${t.outputs.length ? ` returns (${it(t.outputs)})` : ""}` : t.type === "event" ? `event ${t.name}(${it(t.inputs)})` : t.type === "error" ? `error ${t.name}(${it(t.inputs)})` : t.type === "constructor" ? `constructor(${it(t.inputs)})${t.stateMutability === "payable" ? " payable" : ""}` : t.type === "fallback" ? "fallback()" : "receive() external payable"
}
function M(t, e, r) {
    return n=>{
        var s;
        return ((s = t[e.name || r]) == null ? void 0 : s.call(t, n)) ?? e(t, n)
    }
}
function ve(t, {includeName: e=!1}={}) {
    if (t.type !== "function" && t.type !== "event" && t.type !== "error")
        throw new Ao(t.type);
    return `${t.name}(${ir(t.inputs, {
        includeName: e
    })})`
}
function ir(t, {includeName: e=!1}={}) {
    return t ? t.map(r=>ho(r, {
        includeName: e
    })).join(e ? ", " : ",") : ""
}
function ho(t, {includeName: e}) {
    return t.type.startsWith("tuple") ? `(${ir(t.components, {
        includeName: e
    })})${t.type.slice(5)}` : t.type + (e && t.name ? ` ${t.name}` : "")
}
class po extends T {
    constructor({docsPath: e}) {
        super(["A constructor was not found on the ABI.", "Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`), {
            docsPath: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiConstructorNotFoundError"
        })
    }
}
class is extends T {
    constructor({docsPath: e}) {
        super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.", "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`), {
            docsPath: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiConstructorParamsNotFoundError"
        })
    }
}
class mn extends T {
    constructor({data: e, params: r, size: n}) {
        super([`Data size of ${n} bytes is too small for given parameters.`].join(`
`), {
            metaMessages: [`Params: (${ir(r, {
                includeName: !0
            })})`, `Data:   ${e} (${n} bytes)`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiDecodingDataSizeTooSmallError"
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.data = e,
        this.params = r,
        this.size = n
    }
}
class ar extends T {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.'),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiDecodingZeroDataError"
        })
    }
}
class mo extends T {
    constructor({expectedLength: e, givenLength: r, type: n}) {
        super([`ABI encoding array length mismatch for type ${n}.`, `Expected length: ${e}`, `Given length: ${r}`].join(`
`)),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEncodingArrayLengthMismatchError"
        })
    }
}
class yo extends T {
    constructor({expectedSize: e, value: r}) {
        super(`Size of bytes "${r}" (bytes${G(r)}) does not match expected size (bytes${e}).`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEncodingBytesSizeMismatchError"
        })
    }
}
class bo extends T {
    constructor({expectedLength: e, givenLength: r}) {
        super(["ABI encoding params/values length mismatch.", `Expected length (params): ${e}`, `Given length (values): ${r}`].join(`
`)),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEncodingLengthMismatchError"
        })
    }
}
class Zs extends T {
    constructor(e, {docsPath: r}) {
        super([`Encoded error signature "${e}" not found on ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`), {
            docsPath: r
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiErrorSignatureNotFoundError"
        }),
        Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.signature = e
    }
}
class go extends T {
    constructor({docsPath: e}) {
        super("Cannot extract event signature from empty topics.", {
            docsPath: e
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEventSignatureEmptyTopicsError"
        })
    }
}
class wo extends T {
    constructor(e, {docsPath: r}) {
        super([`Encoded event signature "${e}" not found on ABI.`, "Make sure you are using the correct ABI and that the event exists on it.", `You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`), {
            docsPath: r
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEventSignatureNotFoundError"
        })
    }
}
class as extends T {
    constructor(e, {docsPath: r}={}) {
        super([`Event ${e ? `"${e}" ` : ""}not found on ABI.`, "Make sure you are using the correct ABI and that the event exists on it."].join(`
`), {
            docsPath: r
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEventNotFoundError"
        })
    }
}
class Vt extends T {
    constructor(e, {docsPath: r}={}) {
        super([`Function ${e ? `"${e}" ` : ""}not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: r
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiFunctionNotFoundError"
        })
    }
}
class vo extends T {
    constructor(e, {docsPath: r}) {
        super([`Function "${e}" does not contain any \`outputs\` on ABI.`, "Cannot decode function result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: r
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiFunctionOutputsNotFoundError"
        })
    }
}
class xo extends T {
    constructor(e, r) {
        super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [`\`${e.type}\` in \`${ve(e.abiItem)}\`, and`, `\`${r.type}\` in \`${ve(r.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItemAmbiguityError"
        })
    }
}
class Eo extends T {
    constructor({expectedSize: e, givenSize: r}) {
        super(`Expected bytes${e}, got bytes${r}.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BytesSizeMismatchError"
        })
    }
}
class je extends T {
    constructor({abiItem: e, data: r, params: n, size: s}) {
        super([`Data size of ${s} bytes is too small for non-indexed event parameters.`].join(`
`), {
            metaMessages: [`Params: (${ir(n, {
                includeName: !0
            })})`, `Data:   ${r} (${s} bytes)`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DecodeLogDataMismatch"
        }),
        Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.abiItem = e,
        this.data = r,
        this.params = n,
        this.size = s
    }
}
class Xe extends T {
    constructor({abiItem: e, param: r}) {
        super([`Expected a topic for indexed event parameter${r.name ? ` "${r.name}"` : ""} on event "${ve(e, {
            includeName: !0
        })}".`].join(`
`)),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DecodeLogTopicsMismatch"
        }),
        Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.abiItem = e
    }
}
class Co extends T {
    constructor(e, {docsPath: r}) {
        super([`Type "${e}" is not a valid encoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: r
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiEncodingType"
        })
    }
}
class Po extends T {
    constructor(e, {docsPath: r}) {
        super([`Type "${e}" is not a valid decoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: r
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiDecodingType"
        })
    }
}
class So extends T {
    constructor(e) {
        super([`Value "${e}" is not a valid array.`].join(`
`)),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidArrayError"
        })
    }
}
class Ao extends T {
    constructor(e) {
        super([`"${e}" is not a valid definition type.`, 'Valid types: "function", "event", "error"'].join(`
`)),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidDefinitionTypeError"
        })
    }
}
class Fo extends T {
    constructor(e) {
        super(`Filter type "${e}" is not supported.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FilterTypeNotSupportedError"
        })
    }
}
function ko(t) {
    let e = !0
      , r = ""
      , n = 0
      , s = ""
      , i = !1;
    for (let o = 0; o < t.length; o++) {
        const a = t[o];
        if (["(", ")", ","].includes(a) && (e = !0),
        a === "(" && n++,
        a === ")" && n--,
        !!e) {
            if (n === 0) {
                if (a === " " && ["event", "function", ""].includes(s))
                    s = "";
                else if (s += a,
                a === ")") {
                    i = !0;
                    break
                }
                continue
            }
            if (a === " ") {
                t[o - 1] !== "," && r !== "," && r !== ",(" && (r = "",
                e = !1);
                continue
            }
            s += a,
            r += a
        }
    }
    if (!i)
        throw new T("Unable to normalize signature.");
    return s
}
const Ys = t=>{
    const e = typeof t == "string" ? t : fo(t);
    return ko(e)
}
  , To = t=>Ys(t);
function os(t) {
    if (!Number.isSafeInteger(t) || t < 0)
        throw new Error(`Wrong positive integer: ${t}`)
}
function ei(t, ...e) {
    if (!(t instanceof Uint8Array))
        throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(t.length))
        throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
}
function us(t, e=!0) {
    if (t.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && t.finished)
        throw new Error("Hash#digest() has already been called")
}
function Oo(t, e) {
    ei(t);
    const r = e.outputLen;
    if (t.length < r)
        throw new Error(`digestInto() expects output buffer of length at least ${r}`)
}
const _t = BigInt(2 ** 32 - 1)
  , cs = BigInt(32);
function Io(t, e=!1) {
    return e ? {
        h: Number(t & _t),
        l: Number(t >> cs & _t)
    } : {
        h: Number(t >> cs & _t) | 0,
        l: Number(t & _t) | 0
    }
}
function Mo(t, e=!1) {
    let r = new Uint32Array(t.length)
      , n = new Uint32Array(t.length);
    for (let s = 0; s < t.length; s++) {
        const {h: i, l: o} = Io(t[s], e);
        [r[s],n[s]] = [i, o]
    }
    return [r, n]
}
const Bo = (t,e,r)=>t << r | e >>> 32 - r
  , $o = (t,e,r)=>e << r | t >>> 32 - r
  , Ro = (t,e,r)=>e << r - 32 | t >>> 64 - r
  , jo = (t,e,r)=>t << r - 32 | e >>> 64 - r;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const No = t=>t instanceof Uint8Array
  , Uo = t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength / 4))
  , _o = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!_o)
    throw new Error("Non little-endian hardware is not supported");
function Do(t) {
    if (typeof t != "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t))
}
function ti(t) {
    if (typeof t == "string" && (t = Do(t)),
    !No(t))
        throw new Error(`expected Uint8Array, got ${typeof t}`);
    return t
}
class qo {
    clone() {
        return this._cloneInto()
    }
}
function Lo(t) {
    const e = n=>t().update(ti(n)).digest()
      , r = t();
    return e.outputLen = r.outputLen,
    e.blockLen = r.blockLen,
    e.create = ()=>t(),
    e
}
const [ri,ni,si] = [[], [], []]
  , zo = BigInt(0)
  , at = BigInt(1)
  , Go = BigInt(2)
  , Wo = BigInt(7)
  , Ho = BigInt(256)
  , Qo = BigInt(113);
for (let t = 0, e = at, r = 1, n = 0; t < 24; t++) {
    [r,n] = [n, (2 * r + 3 * n) % 5],
    ri.push(2 * (5 * n + r)),
    ni.push((t + 1) * (t + 2) / 2 % 64);
    let s = zo;
    for (let i = 0; i < 7; i++)
        e = (e << at ^ (e >> Wo) * Qo) % Ho,
        e & Go && (s ^= at << (at << BigInt(i)) - at);
    si.push(s)
}
const [Ko,Jo] = Mo(si, !0)
  , ls = (t,e,r)=>r > 32 ? Ro(t, e, r) : Bo(t, e, r)
  , fs = (t,e,r)=>r > 32 ? jo(t, e, r) : $o(t, e, r);
function Vo(t, e=24) {
    const r = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
        for (let o = 0; o < 10; o++)
            r[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
        for (let o = 0; o < 10; o += 2) {
            const a = (o + 8) % 10
              , l = (o + 2) % 10
              , d = r[l]
              , f = r[l + 1]
              , h = ls(d, f, 1) ^ r[a]
              , y = fs(d, f, 1) ^ r[a + 1];
            for (let g = 0; g < 50; g += 10)
                t[o + g] ^= h,
                t[o + g + 1] ^= y
        }
        let s = t[2]
          , i = t[3];
        for (let o = 0; o < 24; o++) {
            const a = ni[o]
              , l = ls(s, i, a)
              , d = fs(s, i, a)
              , f = ri[o];
            s = t[f],
            i = t[f + 1],
            t[f] = l,
            t[f + 1] = d
        }
        for (let o = 0; o < 50; o += 10) {
            for (let a = 0; a < 10; a++)
                r[a] = t[o + a];
            for (let a = 0; a < 10; a++)
                t[o + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10]
        }
        t[0] ^= Ko[n],
        t[1] ^= Jo[n]
    }
    r.fill(0)
}
class yn extends qo {
    constructor(e, r, n, s=!1, i=24) {
        if (super(),
        this.blockLen = e,
        this.suffix = r,
        this.outputLen = n,
        this.enableXOF = s,
        this.rounds = i,
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        os(n),
        0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200),
        this.state32 = Uo(this.state)
    }
    keccak() {
        Vo(this.state32, this.rounds),
        this.posOut = 0,
        this.pos = 0
    }
    update(e) {
        us(this);
        const {blockLen: r, state: n} = this;
        e = ti(e);
        const s = e.length;
        for (let i = 0; i < s; ) {
            const o = Math.min(r - this.pos, s - i);
            for (let a = 0; a < o; a++)
                n[this.pos++] ^= e[i++];
            this.pos === r && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        const {state: e, suffix: r, pos: n, blockLen: s} = this;
        e[n] ^= r,
        r & 128 && n === s - 1 && this.keccak(),
        e[s - 1] ^= 128,
        this.keccak()
    }
    writeInto(e) {
        us(this, !1),
        ei(e),
        this.finish();
        const r = this.state
          , {blockLen: n} = this;
        for (let s = 0, i = e.length; s < i; ) {
            this.posOut >= n && this.keccak();
            const o = Math.min(n - this.posOut, i - s);
            e.set(r.subarray(this.posOut, this.posOut + o), s),
            this.posOut += o,
            s += o
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return os(e),
        this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (Oo(e, this),
        this.finished)
            throw new Error("digest() was already called");
        return this.writeInto(e),
        this.destroy(),
        e
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0,
        this.state.fill(0)
    }
    _cloneInto(e) {
        const {blockLen: r, suffix: n, outputLen: s, rounds: i, enableXOF: o} = this;
        return e || (e = new yn(r,n,s,o,i)),
        e.state32.set(this.state32),
        e.pos = this.pos,
        e.posOut = this.posOut,
        e.finished = this.finished,
        e.rounds = i,
        e.suffix = n,
        e.outputLen = s,
        e.enableXOF = o,
        e.destroyed = this.destroyed,
        e
    }
}
const Xo = (t,e,r)=>Lo(()=>new yn(e,t,r))
  , Zo = Xo(1, 136, 256 / 8);
function X(t, e) {
    const r = e || "hex"
      , n = Zo(ie(t, {
        strict: !1
    }) ? Se(t) : t);
    return r === "bytes" ? n : Ee(n)
}
const Yo = t=>X(Se(t))
  , bn = t=>Yo(To(t));
function L(t, e, r, {strict: n}={}) {
    return ie(t, {
        strict: !1
    }) ? tu(t, e, r, {
        strict: n
    }) : eu(t, e, r, {
        strict: n
    })
}
function ii(t, e) {
    if (typeof e == "number" && e > 0 && e > G(t) - 1)
        throw new Hs({
            offset: e,
            position: "start",
            size: G(t)
        })
}
function ai(t, e, r) {
    if (typeof e == "number" && typeof r == "number" && G(t) !== r - e)
        throw new Hs({
            offset: r,
            position: "end",
            size: G(t)
        })
}
function eu(t, e, r, {strict: n}={}) {
    ii(t, e);
    const s = t.slice(e, r);
    return n && ai(s, e, r),
    s
}
function tu(t, e, r, {strict: n}={}) {
    ii(t, e);
    const s = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (r ?? t.length) * 2)}`;
    return n && ai(s, e, r),
    s
}
function Ze(t, e) {
    if (t.length !== e.length)
        throw new bo({
            expectedLength: t.length,
            givenLength: e.length
        });
    const r = ru({
        params: t,
        values: e
    })
      , n = wn(r);
    return n.length === 0 ? "0x" : n
}
function ru({params: t, values: e}) {
    const r = [];
    for (let n = 0; n < t.length; n++)
        r.push(gn({
            param: t[n],
            value: e[n]
        }));
    return r
}
function gn({param: t, value: e}) {
    const r = or(t.type);
    if (r) {
        const [n,s] = r;
        return su(e, {
            length: n,
            param: {
                ...t,
                type: s
            }
        })
    }
    if (t.type === "tuple")
        return cu(e, {
            param: t
        });
    if (t.type === "address")
        return nu(e);
    if (t.type === "bool")
        return au(e);
    if (t.type.startsWith("uint") || t.type.startsWith("int")) {
        const n = t.type.startsWith("int");
        return ou(e, {
            signed: n
        })
    }
    if (t.type.startsWith("bytes"))
        return iu(e, {
            param: t
        });
    if (t.type === "string")
        return uu(e);
    throw new Co(t.type,{
        docsPath: "/docs/contract/encodeAbiParameters"
    })
}
function wn(t) {
    let e = 0;
    for (let i = 0; i < t.length; i++) {
        const {dynamic: o, encoded: a} = t[i];
        o ? e += 32 : e += G(a)
    }
    const r = []
      , n = [];
    let s = 0;
    for (let i = 0; i < t.length; i++) {
        const {dynamic: o, encoded: a} = t[i];
        o ? (r.push($(e + s, {
            size: 32
        })),
        n.push(a),
        s += G(a)) : r.push(a)
    }
    return pe([...r, ...n])
}
function nu(t) {
    if (!he(t))
        throw new Re({
            address: t
        });
    return {
        dynamic: !1,
        encoded: Pe(t.toLowerCase())
    }
}
function su(t, {length: e, param: r}) {
    const n = e === null;
    if (!Array.isArray(t))
        throw new So(t);
    if (!n && t.length !== e)
        throw new mo({
            expectedLength: e,
            givenLength: t.length,
            type: `${r.type}[${e}]`
        });
    let s = !1;
    const i = [];
    for (let o = 0; o < t.length; o++) {
        const a = gn({
            param: r,
            value: t[o]
        });
        a.dynamic && (s = !0),
        i.push(a)
    }
    if (n || s) {
        const o = wn(i);
        if (n) {
            const a = $(i.length, {
                size: 32
            });
            return {
                dynamic: !0,
                encoded: i.length > 0 ? pe([a, o]) : a
            }
        }
        if (s)
            return {
                dynamic: !0,
                encoded: o
            }
    }
    return {
        dynamic: !1,
        encoded: pe(i.map(({encoded: o})=>o))
    }
}
function iu(t, {param: e}) {
    const [,r] = e.type.split("bytes")
      , n = G(t);
    if (!r) {
        let s = t;
        return n % 32 !== 0 && (s = Pe(s, {
            dir: "right",
            size: Math.ceil((t.length - 2) / 2 / 32) * 32
        })),
        {
            dynamic: !0,
            encoded: pe([Pe($(n, {
                size: 32
            })), s])
        }
    }
    if (n !== parseInt(r))
        throw new yo({
            expectedSize: parseInt(r),
            value: t
        });
    return {
        dynamic: !1,
        encoded: Pe(t, {
            dir: "right"
        })
    }
}
function au(t) {
    return {
        dynamic: !1,
        encoded: Pe(Ks(t))
    }
}
function ou(t, {signed: e}) {
    return {
        dynamic: !1,
        encoded: $(t, {
            size: 32,
            signed: e
        })
    }
}
function uu(t) {
    const e = un(t)
      , r = Math.ceil(G(e) / 32)
      , n = [];
    for (let s = 0; s < r; s++)
        n.push(Pe(L(e, s * 32, (s + 1) * 32), {
            dir: "right"
        }));
    return {
        dynamic: !0,
        encoded: pe([Pe($(G(e), {
            size: 32
        })), ...n])
    }
}
function cu(t, {param: e}) {
    let r = !1;
    const n = [];
    for (let s = 0; s < e.components.length; s++) {
        const i = e.components[s]
          , o = Array.isArray(t) ? s : i.name
          , a = gn({
            param: i,
            value: t[o]
        });
        n.push(a),
        a.dynamic && (r = !0)
    }
    return {
        dynamic: r,
        encoded: r ? wn(n) : pe(n.map(({encoded: s})=>s))
    }
}
function or(t) {
    const e = t.match(/^(.*)\[(\d+)?\]$/);
    return e ? [e[2] ? Number(e[2]) : null, e[1]] : void 0
}
const lu = t=>X(Se(t))
  , vn = t=>L(lu(Ys(t)), 0, 4);
function Ft({abi: t, args: e=[], name: r}) {
    const n = ie(r, {
        strict: !1
    })
      , s = t.filter(o=>n ? o.type === "function" ? vn(o) === r : o.type === "event" ? bn(o) === r : !1 : "name"in o && o.name === r);
    if (s.length === 0)
        return;
    if (s.length === 1)
        return s[0];
    let i;
    for (const o of s) {
        if (!("inputs"in o))
            continue;
        if (!e || e.length === 0) {
            if (!o.inputs || o.inputs.length === 0)
                return o;
            continue
        }
        if (!o.inputs || o.inputs.length === 0 || o.inputs.length !== e.length)
            continue;
        if (e.every((l,d)=>{
            const f = "inputs"in o && o.inputs[d];
            return f ? Wr(l, f) : !1
        }
        )) {
            if (i && "inputs"in i && i.inputs) {
                const l = oi(o.inputs, i.inputs, e);
                if (l)
                    throw new xo({
                        abiItem: o,
                        type: l[0]
                    },{
                        abiItem: i,
                        type: l[1]
                    })
            }
            i = o
        }
    }
    return i || s[0]
}
function Wr(t, e) {
    const r = typeof t
      , n = e.type;
    switch (n) {
    case "address":
        return he(t);
    case "bool":
        return r === "boolean";
    case "function":
        return r === "string";
    case "string":
        return r === "string";
    default:
        return n === "tuple" && "components"in e ? Object.values(e.components).every((s,i)=>Wr(Object.values(t)[i], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n) ? r === "number" || r === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n) ? r === "string" || t instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n) ? Array.isArray(t) && t.every(s=>Wr(s, {
            ...e,
            type: n.replace(/(\[[0-9]{0,}\])$/, "")
        })) : !1
    }
}
function oi(t, e, r) {
    for (const n in t) {
        const s = t[n]
          , i = e[n];
        if (s.type === "tuple" && i.type === "tuple" && "components"in s && "components"in i)
            return oi(s.components, i.components, r[n]);
        const o = [s.type, i.type];
        if (o.includes("address") && o.includes("bytes20") ? !0 : o.includes("address") && o.includes("string") || o.includes("address") && o.includes("bytes") ? he(r[n]) : !1)
            return o
    }
}
function kt({abi: t, eventName: e, args: r}) {
    var a;
    let n = t[0];
    if (e && (n = Ft({
        abi: t,
        args: r,
        name: e
    }),
    !n))
        throw new as(e,{
            docsPath: "/docs/contract/encodeEventTopics"
        });
    if (n.type !== "event")
        throw new as(void 0,{
            docsPath: "/docs/contract/encodeEventTopics"
        });
    const s = ve(n)
      , i = bn(s);
    let o = [];
    if (r && "inputs"in n) {
        const l = (a = n.inputs) == null ? void 0 : a.filter(f=>"indexed"in f && f.indexed)
          , d = Array.isArray(r) ? r : Object.values(r).length > 0 ? (l == null ? void 0 : l.map(f=>r[f.name])) ?? [] : [];
        d.length > 0 && (o = (l == null ? void 0 : l.map((f,h)=>Array.isArray(d[h]) ? d[h].map((y,g)=>ds({
            param: f,
            value: d[h][g]
        })) : d[h] ? ds({
            param: f,
            value: d[h]
        }) : null)) ?? [])
    }
    return [i, ...o]
}
function ds({param: t, value: e}) {
    if (t.type === "string" || t.type === "bytes")
        return X(Se(e));
    if (t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/))
        throw new Fo(t.type);
    return Ze([t], [e])
}
function ur(t, {method: e}) {
    var n, s;
    const r = {};
    return t.transport.type === "fallback" && ((s = (n = t.transport).onResponse) == null || s.call(n, ({method: i, response: o, status: a, transport: l})=>{
        a === "success" && e === i && (r[o] = l.request)
    }
    )),
    i=>r[i] || t.request
}
async function ui(t, {address: e, abi: r, args: n, eventName: s, fromBlock: i, strict: o, toBlock: a}) {
    const l = ur(t, {
        method: "eth_newFilter"
    })
      , d = s ? kt({
        abi: r,
        args: n,
        eventName: s
    }) : void 0
      , f = await t.request({
        method: "eth_newFilter",
        params: [{
            address: e,
            fromBlock: typeof i == "bigint" ? $(i) : i,
            toBlock: typeof a == "bigint" ? $(a) : a,
            topics: d
        }]
    });
    return {
        abi: r,
        args: n,
        eventName: s,
        id: f,
        request: l(f),
        strict: o,
        type: "event"
    }
}
function ne(t) {
    return typeof t == "string" ? {
        address: t,
        type: "json-rpc"
    } : t
}
function Te({abi: t, args: e, functionName: r}) {
    let n = t[0];
    if (r && (n = Ft({
        abi: t,
        args: e,
        name: r
    }),
    !n))
        throw new Vt(r,{
            docsPath: "/docs/contract/encodeFunctionData"
        });
    if (n.type !== "function")
        throw new Vt(void 0,{
            docsPath: "/docs/contract/encodeFunctionData"
        });
    const s = ve(n)
      , i = vn(s)
      , o = "inputs"in n && n.inputs ? Ze(n.inputs, e ?? []) : void 0;
    return pn([i, o ?? "0x"])
}
const ci = {
    1: "An `assert` condition failed.",
    17: "Arithmic operation resulted in underflow or overflow.",
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: "Attempted to convert to an invalid type.",
    34: "Attempted to access a storage byte array that is incorrectly encoded.",
    49: "Performed `.pop()` on an empty array",
    50: "Array index is out of bounds.",
    65: "Allocated too much memory or created an array which is too large.",
    81: "Attempted to call a zero-initialized variable of internal function type."
}
  , fu = {
    inputs: [{
        name: "message",
        type: "string"
    }],
    name: "Error",
    type: "error"
}
  , du = {
    inputs: [{
        name: "reason",
        type: "uint256"
    }],
    name: "Panic",
    type: "error"
};
function xn(t, e) {
    const r = t.substring(2).toLowerCase()
      , n = X(we(r), "bytes")
      , s = r.split("");
    for (let i = 0; i < 40; i += 2)
        n[i >> 1] >> 4 >= 8 && s[i] && (s[i] = s[i].toUpperCase()),
        (n[i >> 1] & 15) >= 8 && s[i + 1] && (s[i + 1] = s[i + 1].toUpperCase());
    return `0x${s.join("")}`
}
function ct(t, e) {
    if (!he(t))
        throw new Re({
            address: t
        });
    return xn(t)
}
function cr(t, e) {
    if (e === "0x" && t.length > 0)
        throw new ar;
    if (G(e) && G(e) < 32)
        throw new mn({
            data: e,
            params: t,
            size: G(e)
        });
    return hu({
        data: e,
        params: t
    })
}
function hu({data: t, params: e}) {
    const r = [];
    let n = 0;
    for (let s = 0; s < e.length; s++) {
        if (n >= G(t))
            throw new mn({
                data: t,
                params: e,
                size: G(t)
            });
        const i = e[s]
          , {consumed: o, value: a} = Le({
            data: t,
            param: i,
            position: n
        });
        r.push(a),
        n += o
    }
    return r
}
function Le({data: t, param: e, position: r}) {
    const n = or(e.type);
    if (n) {
        const [i,o] = n;
        return mu(t, {
            length: i,
            param: {
                ...e,
                type: o
            },
            position: r
        })
    }
    if (e.type === "tuple")
        return vu(t, {
            param: e,
            position: r
        });
    if (e.type === "string")
        return wu(t, {
            position: r
        });
    if (e.type.startsWith("bytes"))
        return bu(t, {
            param: e,
            position: r
        });
    const s = L(t, r, r + 32, {
        strict: !0
    });
    if (e.type.startsWith("uint") || e.type.startsWith("int"))
        return gu(s, {
            param: e
        });
    if (e.type === "address")
        return pu(s);
    if (e.type === "bool")
        return yu(s);
    throw new Po(e.type,{
        docsPath: "/docs/contract/decodeAbiParameters"
    })
}
function pu(t) {
    return {
        consumed: 32,
        value: xn(L(t, -20))
    }
}
function mu(t, {param: e, length: r, position: n}) {
    if (!r) {
        const o = J(L(t, n, n + 32, {
            strict: !0
        }))
          , a = J(L(t, o, o + 32, {
            strict: !0
        }));
        let l = 0;
        const d = [];
        for (let f = 0; f < a; ++f) {
            const h = Le({
                data: L(t, o + 32),
                param: e,
                position: l
            });
            l += h.consumed,
            d.push(h.value)
        }
        return {
            value: d,
            consumed: 32
        }
    }
    if (Xt(e)) {
        const o = or(e.type)
          , a = !(o != null && o[0]);
        let l = 0;
        const d = [];
        for (let f = 0; f < r; ++f) {
            const h = J(L(t, n, n + 32, {
                strict: !0
            }))
              , y = Le({
                data: L(t, h),
                param: e,
                position: a ? l : f * 32
            });
            l += y.consumed,
            d.push(y.value)
        }
        return {
            value: d,
            consumed: 32
        }
    }
    let s = 0;
    const i = [];
    for (let o = 0; o < r; ++o) {
        const a = Le({
            data: t,
            param: e,
            position: n + s
        });
        s += a.consumed,
        i.push(a.value)
    }
    return {
        value: i,
        consumed: s
    }
}
function yu(t) {
    return {
        consumed: 32,
        value: Xa(t)
    }
}
function bu(t, {param: e, position: r}) {
    const [n,s] = e.type.split("bytes");
    if (!s) {
        const o = J(L(t, r, r + 32, {
            strict: !0
        }))
          , a = J(L(t, o, o + 32, {
            strict: !0
        }));
        return a === 0 ? {
            consumed: 32,
            value: "0x"
        } : {
            consumed: 32,
            value: L(t, o + 32, o + 32 + a, {
                strict: !0
            })
        }
    }
    return {
        consumed: 32,
        value: L(t, r, r + parseInt(s), {
            strict: !0
        })
    }
}
function gu(t, {param: e}) {
    const r = e.type.startsWith("int");
    return {
        consumed: 32,
        value: parseInt(e.type.split("int")[1] || "256") > 48 ? be(t, {
            signed: r
        }) : J(t, {
            signed: r
        })
    }
}
function wu(t, {position: e}) {
    const r = J(L(t, e, e + 32, {
        strict: !0
    }))
      , n = J(L(t, r, r + 32, {
        strict: !0
    }));
    return n === 0 ? {
        consumed: 32,
        value: ""
    } : {
        consumed: 32,
        value: ln(Be(L(t, r + 32, r + 32 + n, {
            strict: !0
        })))
    }
}
function vu(t, {param: e, position: r}) {
    const n = e.components.length === 0 || e.components.some(({name: o})=>!o)
      , s = n ? [] : {};
    let i = 0;
    if (Xt(e)) {
        const o = J(L(t, r, r + 32, {
            strict: !0
        }));
        for (let a = 0; a < e.components.length; ++a) {
            const l = e.components[a]
              , d = Le({
                data: L(t, o),
                param: l,
                position: i
            });
            i += d.consumed,
            s[n ? a : l == null ? void 0 : l.name] = d.value
        }
        return {
            consumed: 32,
            value: s
        }
    }
    for (let o = 0; o < e.components.length; ++o) {
        const a = e.components[o]
          , l = Le({
            data: t,
            param: a,
            position: r + i
        });
        i += l.consumed,
        s[n ? o : a == null ? void 0 : a.name] = l.value
    }
    return {
        consumed: i,
        value: s
    }
}
function Xt(t) {
    var n;
    const {type: e} = t;
    if (e === "string" || e === "bytes" || e.endsWith("[]"))
        return !0;
    if (e === "tuple")
        return (n = t.components) == null ? void 0 : n.some(Xt);
    const r = or(t.type);
    return !!(r && Xt({
        ...t,
        type: r[1]
    }))
}
function li({abi: t, data: e}) {
    const r = L(e, 0, 4);
    if (r === "0x")
        throw new ar;
    const s = [...t || [], fu, du].find(i=>i.type === "error" && r === vn(ve(i)));
    if (!s)
        throw new Zs(r,{
            docsPath: "/docs/contract/decodeErrorResult"
        });
    return {
        abiItem: s,
        args: "inputs"in s && s.inputs && s.inputs.length > 0 ? cr(s.inputs, L(e, 4)) : void 0,
        errorName: s.name
    }
}
const Q = (t,e,r)=>JSON.stringify(t, (n,s)=>{
    const i = typeof s == "bigint" ? s.toString() : s;
    return typeof e == "function" ? e(n, i) : i
}
, r);
function fi({abiItem: t, args: e, includeFunctionName: r=!0, includeName: n=!1}) {
    if ("name"in t && "inputs"in t && t.inputs)
        return `${r ? t.name : ""}(${t.inputs.map((s,i)=>`${n && s.name ? `${s.name}: ` : ""}${typeof e[i] == "object" ? Q(e[i]) : e[i]}`).join(", ")})`
}
function En(t, e="wei") {
    return Qt(t, io[e])
}
function Tt(t) {
    const e = Object.entries(t).map(([n,s])=>s === void 0 || s === !1 ? null : [n, s]).filter(Boolean)
      , r = e.reduce((n,[s])=>Math.max(n, s.length), 0);
    return e.map(([n,s])=>`  ${`${n}:`.padEnd(r + 1)}  ${s}`).join(`
`)
}
class xu extends T {
    constructor() {
        super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.", "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FeeConflictError"
        })
    }
}
class Eu extends T {
    constructor({transaction: e}) {
        super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: ["Provided Transaction:", "{", Tt(e), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- a Legacy Transaction with `gasPrice`"]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidSerializableTransactionError"
        })
    }
}
class Cu extends T {
    constructor(e, {account: r, docsPath: n, chain: s, data: i, gas: o, gasPrice: a, maxFeePerGas: l, maxPriorityFeePerGas: d, nonce: f, to: h, value: y}) {
        var m;
        const g = Tt({
            chain: s && `${s == null ? void 0 : s.name} (id: ${s == null ? void 0 : s.id})`,
            from: r == null ? void 0 : r.address,
            to: h,
            value: typeof y < "u" && `${En(y)} ${((m = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : m.symbol) || "ETH"}`,
            data: i,
            gas: o,
            gasPrice: typeof a < "u" && `${Y(a)} gwei`,
            maxFeePerGas: typeof l < "u" && `${Y(l)} gwei`,
            maxPriorityFeePerGas: typeof d < "u" && `${Y(d)} gwei`,
            nonce: f
        });
        super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Request Arguments:", g].filter(Boolean)
        }),
        Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionExecutionError"
        }),
        this.cause = e
    }
}
class di extends T {
    constructor({blockHash: e, blockNumber: r, blockTag: n, hash: s, index: i}) {
        let o = "Transaction";
        n && i !== void 0 && (o = `Transaction at block time "${n}" at index "${i}"`),
        e && i !== void 0 && (o = `Transaction at block hash "${e}" at index "${i}"`),
        r && i !== void 0 && (o = `Transaction at block number "${r}" at index "${i}"`),
        s && (o = `Transaction with hash "${s}"`),
        super(`${o} could not be found.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionNotFoundError"
        })
    }
}
class hi extends T {
    constructor({hash: e}) {
        super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionReceiptNotFoundError"
        })
    }
}
class Pu extends T {
    constructor({hash: e}) {
        super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WaitForTransactionReceiptTimeoutError"
        })
    }
}
class pi extends T {
    constructor(e, {account: r, docsPath: n, chain: s, data: i, gas: o, gasPrice: a, maxFeePerGas: l, maxPriorityFeePerGas: d, nonce: f, to: h, value: y}) {
        var w;
        const g = r ? ne(r) : void 0
          , m = Tt({
            from: g == null ? void 0 : g.address,
            to: h,
            value: typeof y < "u" && `${En(y)} ${((w = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : w.symbol) || "ETH"}`,
            data: i,
            gas: o,
            gasPrice: typeof a < "u" && `${Y(a)} gwei`,
            maxFeePerGas: typeof l < "u" && `${Y(l)} gwei`,
            maxPriorityFeePerGas: typeof d < "u" && `${Y(d)} gwei`,
            nonce: f
        });
        super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Raw Call Arguments:", m].filter(Boolean)
        }),
        Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CallExecutionError"
        }),
        this.cause = e
    }
}
class Cn extends T {
    constructor(e, {abi: r, args: n, contractAddress: s, docsPath: i, functionName: o, sender: a}) {
        const l = Ft({
            abi: r,
            args: n,
            name: o
        })
          , d = l ? fi({
            abiItem: l,
            args: n,
            includeFunctionName: !1,
            includeName: !1
        }) : void 0
          , f = l ? ve(l, {
            includeName: !0
        }) : void 0
          , h = Tt({
            address: s && Da(s),
            function: f,
            args: d && d !== "()" && `${[...Array((o == null ? void 0 : o.length) ?? 0).keys()].map(()=>" ").join("")}${d}`,
            sender: a
        });
        super(e.shortMessage || `An unknown error occurred while executing the contract function "${o}".`, {
            cause: e,
            docsPath: i,
            metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Contract Call:", h].filter(Boolean)
        }),
        Object.defineProperty(this, "abi", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "args", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "contractAddress", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "formattedArgs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "functionName", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "sender", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ContractFunctionExecutionError"
        }),
        this.abi = r,
        this.args = n,
        this.cause = e,
        this.contractAddress = s,
        this.functionName = o,
        this.sender = a
    }
}
class Hr extends T {
    constructor({abi: e, data: r, functionName: n, message: s}) {
        let i, o, a, l;
        if (r && r !== "0x")
            try {
                o = li({
                    abi: e,
                    data: r
                });
                const {abiItem: f, errorName: h, args: y} = o;
                if (h === "Error")
                    l = y[0];
                else if (h === "Panic") {
                    const [g] = y;
                    l = ci[g]
                } else {
                    const g = f ? ve(f, {
                        includeName: !0
                    }) : void 0
                      , m = f && y ? fi({
                        abiItem: f,
                        args: y,
                        includeFunctionName: !1,
                        includeName: !1
                    }) : void 0;
                    a = [g ? `Error: ${g}` : "", m && m !== "()" ? `       ${[...Array((h == null ? void 0 : h.length) ?? 0).keys()].map(()=>" ").join("")}${m}` : ""]
                }
            } catch (f) {
                i = f
            }
        else
            s && (l = s);
        let d;
        i instanceof Zs && (d = i.signature,
        a = [`Unable to decode signature "${d}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),
        super(l && l !== "execution reverted" || d ? [`The contract function "${n}" reverted with the following ${d ? "signature" : "reason"}:`, l || d].join(`
`) : `The contract function "${n}" reverted.`, {
            cause: i,
            metaMessages: a
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ContractFunctionRevertedError"
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "reason", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.data = o,
        this.reason = l,
        this.signature = d
    }
}
class Su extends T {
    constructor({functionName: e}) {
        super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${e}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ContractFunctionZeroDataError"
        })
    }
}
class Pn extends T {
    constructor({data: e, message: r}) {
        super(r || ""),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 3
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RawContractError"
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.data = e
    }
}
class $e extends T {
    constructor({body: e, details: r, headers: n, status: s, url: i}) {
        super("HTTP request failed.", {
            details: r,
            metaMessages: [s && `Status: ${s}`, `URL: ${Je(i)}`, e && `Request body: ${Q(e)}`].filter(Boolean)
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "HttpRequestError"
        }),
        Object.defineProperty(this, "body", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "headers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "status", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.body = e,
        this.headers = n,
        this.status = s,
        this.url = i
    }
}
class Au extends T {
    constructor({body: e, details: r, url: n}) {
        super("WebSocket request failed.", {
            details: r,
            metaMessages: [`URL: ${Je(n)}`, `Request body: ${Q(e)}`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WebSocketRequestError"
        })
    }
}
class Sn extends T {
    constructor({body: e, error: r, url: n}) {
        super("RPC Request failed.", {
            cause: r,
            details: r.message,
            metaMessages: [`URL: ${Je(n)}`, `Request body: ${Q(e)}`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcRequestError"
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.code = r.code
    }
}
class Qr extends T {
    constructor({body: e, url: r}) {
        super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [`URL: ${Je(r)}`, `Request body: ${Q(e)}`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TimeoutError"
        })
    }
}
const Fu = -1;
class ee extends T {
    constructor(e, {code: r, docsPath: n, metaMessages: s, shortMessage: i}) {
        super(i, {
            cause: e,
            docsPath: n,
            metaMessages: s || (e == null ? void 0 : e.metaMessages)
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcError"
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.name = e.name,
        this.code = e instanceof Sn ? e.code : r ?? Fu
    }
}
class Ye extends ee {
    constructor(e, r) {
        super(e, r),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderRpcError"
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.data = r.data
    }
}
class ft extends ee {
    constructor(e) {
        super(e, {
            code: ft.code,
            shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ParseRpcError"
        })
    }
}
Object.defineProperty(ft, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
});
class dt extends ee {
    constructor(e) {
        super(e, {
            code: dt.code,
            shortMessage: "JSON is not a valid request object."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidRequestRpcError"
        })
    }
}
Object.defineProperty(dt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
});
class ht extends ee {
    constructor(e) {
        super(e, {
            code: ht.code,
            shortMessage: "The method does not exist / is not available."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MethodNotFoundRpcError"
        })
    }
}
Object.defineProperty(ht, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
});
class pt extends ee {
    constructor(e) {
        super(e, {
            code: pt.code,
            shortMessage: ["Invalid parameters were provided to the RPC method.", "Double check you have provided the correct parameters."].join(`
`)
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParamsRpcError"
        })
    }
}
Object.defineProperty(pt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
});
class Ge extends ee {
    constructor(e) {
        super(e, {
            code: Ge.code,
            shortMessage: "An internal error was received."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InternalRpcError"
        })
    }
}
Object.defineProperty(Ge, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
});
class Ne extends ee {
    constructor(e) {
        super(e, {
            code: Ne.code,
            shortMessage: ["Missing or invalid parameters.", "Double check you have provided the correct parameters."].join(`
`)
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidInputRpcError"
        })
    }
}
Object.defineProperty(Ne, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
});
class mt extends ee {
    constructor(e) {
        super(e, {
            code: mt.code,
            shortMessage: "Requested resource not found."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError"
        })
    }
}
Object.defineProperty(mt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
});
class We extends ee {
    constructor(e) {
        super(e, {
            code: We.code,
            shortMessage: "Requested resource not available."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceUnavailableRpcError"
        })
    }
}
Object.defineProperty(We, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
});
class yt extends ee {
    constructor(e) {
        super(e, {
            code: yt.code,
            shortMessage: "Transaction creation failed."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionRejectedRpcError"
        })
    }
}
Object.defineProperty(yt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
});
class bt extends ee {
    constructor(e) {
        super(e, {
            code: bt.code,
            shortMessage: "Method is not implemented."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MethodNotSupportedRpcError"
        })
    }
}
Object.defineProperty(bt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
});
class gt extends ee {
    constructor(e) {
        super(e, {
            code: gt.code,
            shortMessage: "Request exceeds defined limit."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "LimitExceededRpcError"
        })
    }
}
Object.defineProperty(gt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
});
class wt extends ee {
    constructor(e) {
        super(e, {
            code: wt.code,
            shortMessage: "Version of JSON-RPC protocol is not supported."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "JsonRpcVersionUnsupportedError"
        })
    }
}
Object.defineProperty(wt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
});
class de extends Ye {
    constructor(e) {
        super(e, {
            code: de.code,
            shortMessage: "User rejected the request."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UserRejectedRequestError"
        })
    }
}
Object.defineProperty(de, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
});
class vt extends Ye {
    constructor(e) {
        super(e, {
            code: vt.code,
            shortMessage: "The requested method and/or account has not been authorized by the user."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnauthorizedProviderError"
        })
    }
}
Object.defineProperty(vt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
});
class xt extends Ye {
    constructor(e) {
        super(e, {
            code: xt.code,
            shortMessage: "The Provider does not support the requested method."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnsupportedProviderMethodError"
        })
    }
}
Object.defineProperty(xt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
});
class Et extends Ye {
    constructor(e) {
        super(e, {
            code: Et.code,
            shortMessage: "The Provider is disconnected from all chains."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderDisconnectedError"
        })
    }
}
Object.defineProperty(Et, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
});
class Ct extends Ye {
    constructor(e) {
        super(e, {
            code: Ct.code,
            shortMessage: "The Provider is not connected to the requested chain."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainDisconnectedError"
        })
    }
}
Object.defineProperty(Ct, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
});
class He extends Ye {
    constructor(e) {
        super(e, {
            code: He.code,
            shortMessage: "An error occurred when attempting to switch chain."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SwitchChainError"
        })
    }
}
Object.defineProperty(He, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4902
});
class ku extends ee {
    constructor(e) {
        super(e, {
            shortMessage: "An unknown RPC error occurred."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownRpcError"
        })
    }
}
const Tu = 3;
function Pt(t, {abi: e, address: r, args: n, docsPath: s, functionName: i, sender: o}) {
    const {code: a, data: l, message: d, shortMessage: f} = t instanceof Pn ? t : t instanceof T ? t.walk(y=>"data"in y) || t.walk() : {}
      , h = t instanceof ar ? new Su({
        functionName: i
    }) : [Tu, Ge.code].includes(a) && (l || d || f) ? new Hr({
        abi: e,
        data: typeof l == "object" ? l.data : l,
        functionName: i,
        message: f ?? d
    }) : t;
    return new Cn(h,{
        abi: e,
        args: n,
        contractAddress: r,
        docsPath: s,
        functionName: i,
        sender: o
    })
}
class et extends T {
    constructor({docsPath: e}={}) {
        super(["Could not find an Account to execute with this Action.", "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`), {
            docsPath: e,
            docsSlug: "account"
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AccountNotFoundError"
        })
    }
}
class Ou extends T {
    constructor(e, {account: r, docsPath: n, chain: s, data: i, gas: o, gasPrice: a, maxFeePerGas: l, maxPriorityFeePerGas: d, nonce: f, to: h, value: y}) {
        var m;
        const g = Tt({
            from: r == null ? void 0 : r.address,
            to: h,
            value: typeof y < "u" && `${En(y)} ${((m = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : m.symbol) || "ETH"}`,
            data: i,
            gas: o,
            gasPrice: typeof a < "u" && `${Y(a)} gwei`,
            maxFeePerGas: typeof l < "u" && `${Y(l)} gwei`,
            maxPriorityFeePerGas: typeof d < "u" && `${Y(d)} gwei`,
            nonce: f
        });
        super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Estimate Gas Arguments:", g].filter(Boolean)
        }),
        Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EstimateGasExecutionError"
        }),
        this.cause = e
    }
}
function An(t, e) {
    const r = (t.details || "").toLowerCase()
      , n = t.walk(s=>s.code === De.code);
    return n instanceof T ? new De({
        cause: t,
        message: n.details
    }) : De.nodeMessage.test(r) ? new De({
        cause: t,
        message: t.details
    }) : Kt.nodeMessage.test(r) ? new Kt({
        cause: t,
        maxFeePerGas: e == null ? void 0 : e.maxFeePerGas
    }) : jr.nodeMessage.test(r) ? new jr({
        cause: t,
        maxFeePerGas: e == null ? void 0 : e.maxFeePerGas
    }) : Nr.nodeMessage.test(r) ? new Nr({
        cause: t,
        nonce: e == null ? void 0 : e.nonce
    }) : Ur.nodeMessage.test(r) ? new Ur({
        cause: t,
        nonce: e == null ? void 0 : e.nonce
    }) : _r.nodeMessage.test(r) ? new _r({
        cause: t,
        nonce: e == null ? void 0 : e.nonce
    }) : Dr.nodeMessage.test(r) ? new Dr({
        cause: t
    }) : qr.nodeMessage.test(r) ? new qr({
        cause: t,
        gas: e == null ? void 0 : e.gas
    }) : Lr.nodeMessage.test(r) ? new Lr({
        cause: t,
        gas: e == null ? void 0 : e.gas
    }) : zr.nodeMessage.test(r) ? new zr({
        cause: t
    }) : Jt.nodeMessage.test(r) ? new Jt({
        cause: t,
        maxFeePerGas: e == null ? void 0 : e.maxFeePerGas,
        maxPriorityFeePerGas: e == null ? void 0 : e.maxPriorityFeePerGas
    }) : new sr({
        cause: t
    })
}
function Iu(t, {docsPath: e, ...r}) {
    const n = (()=>{
        const s = An(t, r);
        return s instanceof sr ? t : s
    }
    )();
    return new Ou(n,{
        docsPath: e,
        ...r
    })
}
function Fn(t, {format: e}) {
    if (!e)
        return {};
    const r = {};
    function n(i) {
        const o = Object.keys(i);
        for (const a of o)
            a in t && (r[a] = t[a]),
            i[a] && typeof i[a] == "object" && !Array.isArray(i[a]) && n(i[a])
    }
    const s = e(t || {});
    return n(s),
    r
}
function Ot(t) {
    const {account: e, gasPrice: r, maxFeePerGas: n, maxPriorityFeePerGas: s, to: i} = t
      , o = e ? ne(e) : void 0;
    if (o && !he(o.address))
        throw new Re({
            address: o.address
        });
    if (i && !he(i))
        throw new Re({
            address: i
        });
    if (typeof r < "u" && (typeof n < "u" || typeof s < "u"))
        throw new xu;
    if (n && n > 2n ** 256n - 1n)
        throw new Kt({
            maxFeePerGas: n
        });
    if (s && n && s > n)
        throw new Jt({
            maxFeePerGas: n,
            maxPriorityFeePerGas: s
        })
}
class Mu extends T {
    constructor() {
        super("`baseFeeMultiplier` must be greater than 1."),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseFeeScalarError"
        })
    }
}
class kn extends T {
    constructor() {
        super("Chain does not support EIP-1559 fees."),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Eip1559FeesNotSupportedError"
        })
    }
}
class Bu extends T {
    constructor({maxPriorityFeePerGas: e}) {
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Y(e)} gwei).`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MaxFeePerGasTooLowError"
        })
    }
}
class mi extends T {
    constructor({blockHash: e, blockNumber: r}) {
        let n = "Block";
        e && (n = `Block at hash "${e}"`),
        r && (n = `Block at number "${r}"`),
        super(`${n} could not be found.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BlockNotFoundError"
        })
    }
}
async function Ae(t, {blockHash: e, blockNumber: r, blockTag: n, includeTransactions: s}={}) {
    var f, h, y;
    const i = n ?? "latest"
      , o = s ?? !1
      , a = r !== void 0 ? $(r) : void 0;
    let l = null;
    if (e ? l = await t.request({
        method: "eth_getBlockByHash",
        params: [e, o]
    }) : l = await t.request({
        method: "eth_getBlockByNumber",
        params: [a || i, o]
    }),
    !l)
        throw new mi({
            blockHash: e,
            blockNumber: r
        });
    return (((y = (h = (f = t.chain) == null ? void 0 : f.formatters) == null ? void 0 : h.block) == null ? void 0 : y.format) || dn)(l)
}
async function Tn(t) {
    const e = await t.request({
        method: "eth_gasPrice"
    });
    return BigInt(e)
}
async function $u(t, e) {
    return yi(t, e)
}
async function yi(t, e) {
    var i, o, a;
    const {block: r, chain: n=t.chain, request: s} = e || {};
    if (typeof ((i = n == null ? void 0 : n.fees) == null ? void 0 : i.defaultPriorityFee) == "function") {
        const l = r || await M(t, Ae, "getBlock")({});
        return n.fees.defaultPriorityFee({
            block: l,
            client: t,
            request: s
        })
    }
    if (typeof ((o = n == null ? void 0 : n.fees) == null ? void 0 : o.defaultPriorityFee) < "u")
        return (a = n == null ? void 0 : n.fees) == null ? void 0 : a.defaultPriorityFee;
    try {
        const l = await t.request({
            method: "eth_maxPriorityFeePerGas"
        });
        return be(l)
    } catch {
        const [l,d] = await Promise.all([r ? Promise.resolve(r) : M(t, Ae, "getBlock")({}), M(t, Tn, "getGasPrice")({})]);
        if (typeof l.baseFeePerGas != "bigint")
            throw new kn;
        const f = d - l.baseFeePerGas;
        return f < 0n ? 0n : f
    }
}
async function Ru(t, e) {
    return Kr(t, e)
}
async function Kr(t, e) {
    var y, g;
    const {block: r, chain: n=t.chain, request: s, type: i="eip1559"} = e || {}
      , o = await (async()=>{
        var m, w;
        return typeof ((m = n == null ? void 0 : n.fees) == null ? void 0 : m.baseFeeMultiplier) == "function" ? n.fees.baseFeeMultiplier({
            block: r,
            client: t,
            request: s
        }) : ((w = n == null ? void 0 : n.fees) == null ? void 0 : w.baseFeeMultiplier) ?? 1.2
    }
    )();
    if (o < 1)
        throw new Mu;
    const l = 10 ** (((y = o.toString().split(".")[1]) == null ? void 0 : y.length) ?? 0)
      , d = m=>m * BigInt(Math.ceil(o * l)) / BigInt(l)
      , f = r || await M(t, Ae, "getBlock")({});
    if (typeof ((g = n == null ? void 0 : n.fees) == null ? void 0 : g.estimateFeesPerGas) == "function")
        return n.fees.estimateFeesPerGas({
            block: r,
            client: t,
            multiply: d,
            request: s,
            type: i
        });
    if (i === "eip1559") {
        if (typeof f.baseFeePerGas != "bigint")
            throw new kn;
        const m = s != null && s.maxPriorityFeePerGas ? s.maxPriorityFeePerGas : await yi(t, {
            block: f,
            chain: n,
            request: s
        })
          , w = d(f.baseFeePerGas);
        return {
            maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? w + m,
            maxPriorityFeePerGas: m
        }
    }
    return {
        gasPrice: (s == null ? void 0 : s.gasPrice) ?? d(await M(t, Tn, "getGasPrice")({}))
    }
}
async function bi(t, {address: e, blockTag: r="latest", blockNumber: n}) {
    const s = await t.request({
        method: "eth_getTransactionCount",
        params: [e, n ? $(n) : r]
    });
    return J(s)
}
function ju(t) {
    if (t.type)
        return t.type;
    if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
        return "eip1559";
    if (typeof t.gasPrice < "u")
        return typeof t.accessList < "u" ? "eip2930" : "legacy";
    throw new Eu({
        transaction: t
    })
}
async function lr(t, e) {
    const {account: r=t.account, chain: n, gas: s, nonce: i, type: o} = e;
    if (!r)
        throw new et;
    const a = ne(r)
      , l = await M(t, Ae, "getBlock")({
        blockTag: "latest"
    })
      , d = {
        ...e,
        from: a.address
    };
    if (typeof i > "u" && (d.nonce = await M(t, bi, "getTransactionCount")({
        address: a.address,
        blockTag: "pending"
    })),
    typeof o > "u")
        try {
            d.type = ju(d)
        } catch {
            d.type = typeof l.baseFeePerGas == "bigint" ? "eip1559" : "legacy"
        }
    if (d.type === "eip1559") {
        const {maxFeePerGas: f, maxPriorityFeePerGas: h} = await Kr(t, {
            block: l,
            chain: n,
            request: d
        });
        if (typeof e.maxPriorityFeePerGas > "u" && e.maxFeePerGas && e.maxFeePerGas < h)
            throw new Bu({
                maxPriorityFeePerGas: h
            });
        d.maxPriorityFeePerGas = h,
        d.maxFeePerGas = f
    } else {
        if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
            throw new kn;
        const {gasPrice: f} = await Kr(t, {
            block: l,
            chain: n,
            request: d,
            type: "legacy"
        });
        d.gasPrice = f
    }
    return typeof s > "u" && (d.gas = await M(t, On, "estimateGas")({
        ...d,
        account: {
            address: a.address,
            type: "json-rpc"
        }
    })),
    Ot(d),
    d
}
async function On(t, e) {
    var s, i, o;
    const r = e.account ?? t.account;
    if (!r)
        throw new et({
            docsPath: "/docs/actions/public/estimateGas"
        });
    const n = ne(r);
    try {
        const {accessList: a, blockNumber: l, blockTag: d, data: f, gas: h, gasPrice: y, maxFeePerGas: g, maxPriorityFeePerGas: m, nonce: w, to: v, value: E, ...C} = n.type === "local" ? await lr(t, e) : e
          , O = (l ? $(l) : void 0) || d;
        Ot(e);
        const I = (o = (i = (s = t.chain) == null ? void 0 : s.formatters) == null ? void 0 : i.transactionRequest) == null ? void 0 : o.format
          , k = (I || nr)({
            ...Fn(C, {
                format: I
            }),
            from: n.address,
            accessList: a,
            data: f,
            gas: h,
            gasPrice: y,
            maxFeePerGas: g,
            maxPriorityFeePerGas: m,
            nonce: w,
            to: v,
            value: E
        })
          , B = await t.request({
            method: "eth_estimateGas",
            params: O ? [k, O] : [k]
        });
        return BigInt(B)
    } catch (a) {
        throw Iu(a, {
            ...e,
            account: n,
            chain: t.chain
        })
    }
}
async function Nu(t, {abi: e, address: r, args: n, functionName: s, ...i}) {
    const o = Te({
        abi: e,
        args: n,
        functionName: s
    });
    try {
        return await M(t, On, "estimateGas")({
            data: o,
            to: r,
            ...i
        })
    } catch (a) {
        const l = i.account ? ne(i.account) : void 0;
        throw Pt(a, {
            abi: e,
            address: r,
            args: n,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: s,
            sender: l == null ? void 0 : l.address
        })
    }
}
const hs = "/docs/contract/decodeEventLog";
function It({abi: t, data: e, strict: r, topics: n}) {
    const s = r ?? !0
      , [i,...o] = n;
    if (!i)
        throw new go({
            docsPath: hs
        });
    const a = t.find(m=>m.type === "event" && i === bn(ve(m)));
    if (!(a && "name"in a) || a.type !== "event")
        throw new wo(i,{
            docsPath: hs
        });
    const {name: l, inputs: d} = a
      , f = d == null ? void 0 : d.some(m=>!("name"in m && m.name));
    let h = f ? [] : {};
    const y = d.filter(m=>"indexed"in m && m.indexed);
    for (let m = 0; m < y.length; m++) {
        const w = y[m]
          , v = o[m];
        if (!v)
            throw new Xe({
                abiItem: a,
                param: w
            });
        h[w.name || m] = Uu({
            param: w,
            value: v
        })
    }
    const g = d.filter(m=>!("indexed"in m && m.indexed));
    if (g.length > 0) {
        if (e && e !== "0x")
            try {
                const m = cr(g, e);
                if (m)
                    if (f)
                        h = [...h, ...m];
                    else
                        for (let w = 0; w < g.length; w++)
                            h[g[w].name] = m[w]
            } catch (m) {
                if (s)
                    throw m instanceof mn ? new je({
                        abiItem: a,
                        data: m.data,
                        params: m.params,
                        size: m.size
                    }) : m
            }
        else if (s)
            throw new je({
                abiItem: a,
                data: "0x",
                params: g,
                size: 0
            })
    }
    return {
        eventName: l,
        args: Object.values(h).length > 0 ? h : void 0
    }
}
function Uu({param: t, value: e}) {
    return t.type === "string" || t.type === "bytes" || t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/) ? e : (cr([t], e) || [])[0]
}
async function In(t, {address: e, blockHash: r, fromBlock: n, toBlock: s, event: i, events: o, args: a, strict: l}={}) {
    const d = l ?? !1
      , f = o ?? (i ? [i] : void 0);
    let h = [];
    f && (h = [f.flatMap(g=>kt({
        abi: [g],
        eventName: g.name,
        args: a
    }))],
    i && (h = h[0]));
    let y;
    return r ? y = await t.request({
        method: "eth_getLogs",
        params: [{
            address: e,
            topics: h,
            blockHash: r
        }]
    }) : y = await t.request({
        method: "eth_getLogs",
        params: [{
            address: e,
            topics: h,
            fromBlock: typeof n == "bigint" ? $(n) : n,
            toBlock: typeof s == "bigint" ? $(s) : s
        }]
    }),
    y.map(g=>{
        var m;
        try {
            const {eventName: w, args: v} = f ? It({
                abi: f,
                data: g.data,
                topics: g.topics,
                strict: d
            }) : {
                eventName: void 0,
                args: void 0
            };
            return ae(g, {
                args: v,
                eventName: w
            })
        } catch (w) {
            let v, E;
            if (w instanceof je || w instanceof Xe) {
                if (d)
                    return;
                v = w.abiItem.name,
                E = (m = w.abiItem.inputs) == null ? void 0 : m.some(C=>!("name"in C && C.name))
            }
            return ae(g, {
                args: E ? [] : {},
                eventName: v
            })
        }
    }
    ).filter(Boolean)
}
async function gi(t, {abi: e, address: r, args: n, blockHash: s, eventName: i, fromBlock: o, toBlock: a, strict: l}) {
    const d = i ? Ft({
        abi: e,
        name: i
    }) : void 0
      , f = d ? void 0 : e.filter(h=>h.type === "event");
    return M(t, In, "getLogs")({
        address: r,
        args: n,
        blockHash: s,
        event: d,
        events: f,
        fromBlock: o,
        toBlock: a,
        strict: l
    })
}
const xr = "/docs/contract/decodeFunctionResult";
function tt({abi: t, args: e, functionName: r, data: n}) {
    let s = t[0];
    if (r && (s = Ft({
        abi: t,
        args: e,
        name: r
    }),
    !s))
        throw new Vt(r,{
            docsPath: xr
        });
    if (s.type !== "function")
        throw new Vt(void 0,{
            docsPath: xr
        });
    if (!s.outputs)
        throw new vo(s.name,{
            docsPath: xr
        });
    const i = cr(s.outputs, n);
    if (i && i.length > 1)
        return i;
    if (i && i.length === 1)
        return i[0]
}
const _u = "modulepreload"
  , Du = function(t) {
    return "/" + t
}
  , ps = {}
  , wi = function(e, r, n) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
        document.getElementsByTagName("link");
        const i = document.querySelector("meta[property=csp-nonce]")
          , o = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
        s = Promise.all(r.map(a=>{
            if (a = Du(a),
            a in ps)
                return;
            ps[a] = !0;
            const l = a.endsWith(".css")
              , d = l ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${a}"]${d}`))
                return;
            const f = document.createElement("link");
            if (f.rel = l ? "stylesheet" : _u,
            l || (f.as = "script",
            f.crossOrigin = ""),
            f.href = a,
            o && f.setAttribute("nonce", o),
            document.head.appendChild(f),
            l)
                return new Promise((h,y)=>{
                    f.addEventListener("load", h),
                    f.addEventListener("error", ()=>y(new Error(`Unable to preload CSS for ${a}`)))
                }
                )
        }
        ))
    }
    return s.then(()=>e()).catch(i=>{
        const o = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (o.payload = i,
        window.dispatchEvent(o),
        !o.defaultPrevented)
            throw i
    }
    )
}
  , Jr = [{
    inputs: [{
        components: [{
            name: "target",
            type: "address"
        }, {
            name: "allowFailure",
            type: "bool"
        }, {
            name: "callData",
            type: "bytes"
        }],
        name: "calls",
        type: "tuple[]"
    }],
    name: "aggregate3",
    outputs: [{
        components: [{
            name: "success",
            type: "bool"
        }, {
            name: "returnData",
            type: "bytes"
        }],
        name: "returnData",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}]
  , vi = [{
    inputs: [],
    name: "ResolverNotFound",
    type: "error"
}, {
    inputs: [],
    name: "ResolverWildcardNotSupported",
    type: "error"
}]
  , xi = [...vi, {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [{
        name: "name",
        type: "bytes"
    }, {
        name: "data",
        type: "bytes"
    }],
    outputs: [{
        name: "",
        type: "bytes"
    }, {
        name: "address",
        type: "address"
    }]
}]
  , qu = [...vi, {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{
        type: "bytes",
        name: "reverseName"
    }],
    outputs: [{
        type: "string",
        name: "resolvedName"
    }, {
        type: "address",
        name: "resolvedAddress"
    }, {
        type: "address",
        name: "reverseResolver"
    }, {
        type: "address",
        name: "resolver"
    }]
}]
  , ms = [{
    name: "text",
    type: "function",
    stateMutability: "view",
    inputs: [{
        name: "name",
        type: "bytes32"
    }, {
        name: "key",
        type: "string"
    }],
    outputs: [{
        name: "",
        type: "string"
    }]
}]
  , ys = [{
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{
        name: "name",
        type: "bytes32"
    }],
    outputs: [{
        name: "",
        type: "address"
    }]
}, {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{
        name: "name",
        type: "bytes32"
    }, {
        name: "coinType",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bytes"
    }]
}]
  , Lu = [{
    inputs: [{
        internalType: "address",
        name: "_signer",
        type: "address"
    }, {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
    }, {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}]
  , zu = "0x82ad56cb";
function rt({blockNumber: t, chain: e, contract: r}) {
    var s;
    const n = (s = e == null ? void 0 : e.contracts) == null ? void 0 : s[r];
    if (!n)
        throw new Rr({
            chain: e,
            contract: {
                name: r
            }
        });
    if (t && n.blockCreated && n.blockCreated > t)
        throw new Rr({
            blockNumber: t,
            chain: e,
            contract: {
                name: r,
                blockCreated: n.blockCreated
            }
        });
    return n.address
}
function Gu(t, {docsPath: e, ...r}) {
    const n = (()=>{
        const s = An(t, r);
        return s instanceof sr ? t : s
    }
    )();
    return new pi(n,{
        docsPath: e,
        ...r
    })
}
const Er = new Map;
function Mn({fn: t, id: e, shouldSplitBatch: r, wait: n=0, sort: s}) {
    const i = async()=>{
        const f = l();
        o();
        const h = f.map(({args: y})=>y);
        h.length !== 0 && t(h).then(y=>{
            var g;
            s && Array.isArray(y) && y.sort(s);
            for (let m = 0; m < f.length; m++) {
                const {pendingPromise: w} = f[m];
                (g = w.resolve) == null || g.call(w, [y[m], y])
            }
        }
        ).catch(y=>{
            var g;
            for (let m = 0; m < f.length; m++) {
                const {pendingPromise: w} = f[m];
                (g = w.reject) == null || g.call(w, y)
            }
        }
        )
    }
      , o = ()=>Er.delete(e)
      , a = ()=>l().map(({args: f})=>f)
      , l = ()=>Er.get(e) || []
      , d = f=>Er.set(e, [...l(), f]);
    return {
        flush: o,
        async schedule(f) {
            const h = {}
              , y = new Promise((w,v)=>{
                h.resolve = w,
                h.reject = v
            }
            );
            return (r == null ? void 0 : r([...a(), f])) && i(),
            l().length > 0 ? (d({
                args: f,
                pendingPromise: h
            }),
            y) : (d({
                args: f,
                pendingPromise: h
            }),
            setTimeout(i, n),
            y)
        }
    }
}
async function Mt(t, e) {
    var E, C, P, O;
    const {account: r=t.account, batch: n=!!((E = t.batch) != null && E.multicall), blockNumber: s, blockTag: i="latest", accessList: o, data: a, gas: l, gasPrice: d, maxFeePerGas: f, maxPriorityFeePerGas: h, nonce: y, to: g, value: m, ...w} = e
      , v = r ? ne(r) : void 0;
    try {
        Ot(e);
        const A = (s ? $(s) : void 0) || i
          , k = (O = (P = (C = t.chain) == null ? void 0 : C.formatters) == null ? void 0 : P.transactionRequest) == null ? void 0 : O.format
          , R = (k || nr)({
            ...Fn(w, {
                format: k
            }),
            from: v == null ? void 0 : v.address,
            accessList: o,
            data: a,
            gas: l,
            gasPrice: d,
            maxFeePerGas: f,
            maxPriorityFeePerGas: h,
            nonce: y,
            to: g,
            value: m
        });
        if (n && Wu({
            request: R
        }))
            try {
                return await Hu(t, {
                    ...R,
                    blockNumber: s,
                    blockTag: i
                })
            } catch (z) {
                if (!(z instanceof Xs) && !(z instanceof Rr))
                    throw z
            }
        const V = await t.request({
            method: "eth_call",
            params: A ? [R, A] : [R]
        });
        return V === "0x" ? {
            data: void 0
        } : {
            data: V
        }
    } catch (I) {
        const A = Qu(I)
          , {offchainLookup: k, offchainLookupSignature: B} = await wi(()=>Promise.resolve().then(()=>Wc), void 0);
        if ((A == null ? void 0 : A.slice(0, 10)) === B && g)
            return {
                data: await k(t, {
                    data: A,
                    to: g
                })
            };
        throw Gu(I, {
            ...e,
            account: v,
            chain: t.chain
        })
    }
}
function Wu({request: t}) {
    const {data: e, to: r, ...n} = t;
    return !(!e || e.startsWith(zu) || !r || Object.values(n).filter(s=>typeof s < "u").length > 0)
}
async function Hu(t, e) {
    var w;
    const {batchSize: r=1024, wait: n=0} = typeof ((w = t.batch) == null ? void 0 : w.multicall) == "object" ? t.batch.multicall : {}
      , {blockNumber: s, blockTag: i="latest", data: o, multicallAddress: a, to: l} = e;
    let d = a;
    if (!d) {
        if (!t.chain)
            throw new Xs;
        d = rt({
            blockNumber: s,
            chain: t.chain,
            contract: "multicall3"
        })
    }
    const h = (s ? $(s) : void 0) || i
      , {schedule: y} = Mn({
        id: `${t.uid}.${h}`,
        wait: n,
        shouldSplitBatch(v) {
            return v.reduce((C,{data: P})=>C + (P.length - 2), 0) > r * 2
        },
        fn: async v=>{
            const E = v.map(O=>({
                allowFailure: !0,
                callData: O.data,
                target: O.to
            }))
              , C = Te({
                abi: Jr,
                args: [E],
                functionName: "aggregate3"
            })
              , P = await t.request({
                method: "eth_call",
                params: [{
                    data: C,
                    to: d
                }, h]
            });
            return tt({
                abi: Jr,
                args: [E],
                functionName: "aggregate3",
                data: P || "0x"
            })
        }
    })
      , [{returnData: g, success: m}] = await y({
        data: o,
        to: l
    });
    if (!m)
        throw new Pn({
            data: g
        });
    return g === "0x" ? {
        data: void 0
    } : {
        data: g
    }
}
function Qu(t) {
    if (!(t instanceof T))
        return;
    const e = t.walk();
    return typeof e.data == "object" ? e.data.data : e.data
}
async function Fe(t, {abi: e, address: r, args: n, functionName: s, ...i}) {
    const o = Te({
        abi: e,
        args: n,
        functionName: s
    });
    try {
        const {data: a} = await M(t, Mt, "call")({
            data: o,
            to: r,
            ...i
        });
        return tt({
            abi: e,
            args: n,
            functionName: s,
            data: a || "0x"
        })
    } catch (a) {
        throw Pt(a, {
            abi: e,
            address: r,
            args: n,
            docsPath: "/docs/contract/readContract",
            functionName: s
        })
    }
}
async function Ku(t, {abi: e, address: r, args: n, dataSuffix: s, functionName: i, ...o}) {
    const a = o.account ? ne(o.account) : void 0
      , l = Te({
        abi: e,
        args: n,
        functionName: i
    });
    try {
        const {data: d} = await M(t, Mt, "call")({
            batch: !1,
            data: `${l}${s ? s.replace("0x", "") : ""}`,
            to: r,
            ...o
        });
        return {
            result: tt({
                abi: e,
                args: n,
                functionName: i,
                data: d || "0x"
            }),
            request: {
                abi: e,
                address: r,
                args: n,
                dataSuffix: s,
                functionName: i,
                ...o
            }
        }
    } catch (d) {
        throw Pt(d, {
            abi: e,
            address: r,
            args: n,
            docsPath: "/docs/contract/simulateContract",
            functionName: i,
            sender: a == null ? void 0 : a.address
        })
    }
}
const Cr = new Map
  , bs = new Map;
let Ju = 0;
function nt(t, e, r) {
    const n = ++Ju
      , s = ()=>Cr.get(t) || []
      , i = ()=>{
        const f = s();
        Cr.set(t, f.filter(h=>h.id !== n))
    }
      , o = ()=>{
        const f = bs.get(t);
        s().length === 1 && f && f(),
        i()
    }
      , a = s();
    if (Cr.set(t, [...a, {
        id: n,
        fns: e
    }]),
    a && a.length > 0)
        return o;
    const l = {};
    for (const f in e)
        l[f] = (...h)=>{
            var g, m;
            const y = s();
            if (y.length !== 0)
                for (const w of y)
                    (m = (g = w.fns)[f]) == null || m.call(g, ...h)
        }
        ;
    const d = r(l);
    return typeof d == "function" && bs.set(t, d),
    o
}
async function Zt(t) {
    return new Promise(e=>setTimeout(e, t))
}
function Bt(t, {emitOnBegin: e, initialWaitTime: r, interval: n}) {
    let s = !0;
    const i = ()=>s = !1;
    return (async()=>{
        let a;
        e && (a = await t({
            unpoll: i
        }));
        const l = await (r == null ? void 0 : r(a)) ?? n;
        await Zt(l);
        const d = async()=>{
            s && (await t({
                unpoll: i
            }),
            await Zt(n),
            d())
        }
        ;
        d()
    }
    )(),
    i
}
const Vu = new Map
  , Xu = new Map;
function Zu(t) {
    const e = (s,i)=>({
        clear: ()=>i.delete(s),
        get: ()=>i.get(s),
        set: o=>i.set(s, o)
    })
      , r = e(t, Vu)
      , n = e(t, Xu);
    return {
        clear: ()=>{
            r.clear(),
            n.clear()
        }
        ,
        promise: r,
        response: n
    }
}
async function Yu(t, {cacheKey: e, cacheTime: r=1 / 0}) {
    const n = Zu(e)
      , s = n.response.get();
    if (s && r > 0 && new Date().getTime() - s.created.getTime() < r)
        return s.data;
    let i = n.promise.get();
    i || (i = t(),
    n.promise.set(i));
    try {
        const o = await i;
        return n.response.set({
            created: new Date,
            data: o
        }),
        o
    } finally {
        n.promise.clear()
    }
}
const ec = t=>`blockNumber.${t}`;
async function $t(t, {cacheTime: e=t.cacheTime, maxAge: r}={}) {
    const n = await Yu(()=>t.request({
        method: "eth_blockNumber"
    }), {
        cacheKey: ec(t.uid),
        cacheTime: r ?? e
    });
    return BigInt(n)
}
async function fr(t, {filter: e}) {
    const r = "strict"in e && e.strict;
    return (await e.request({
        method: "eth_getFilterChanges",
        params: [e.id]
    })).map(s=>{
        var i;
        if (typeof s == "string")
            return s;
        try {
            const {eventName: o, args: a} = "abi"in e && e.abi ? It({
                abi: e.abi,
                data: s.data,
                topics: s.topics,
                strict: r
            }) : {
                eventName: void 0,
                args: void 0
            };
            return ae(s, {
                args: a,
                eventName: o
            })
        } catch (o) {
            let a, l;
            if (o instanceof je || o instanceof Xe) {
                if ("strict"in e && e.strict)
                    return;
                a = o.abiItem.name,
                l = (i = o.abiItem.inputs) == null ? void 0 : i.some(d=>!("name"in d && d.name))
            }
            return ae(s, {
                args: l ? [] : {},
                eventName: a
            })
        }
    }
    ).filter(Boolean)
}
async function dr(t, {filter: e}) {
    return e.request({
        method: "eth_uninstallFilter",
        params: [e.id]
    })
}
function tc(t, {abi: e, address: r, args: n, batch: s=!0, eventName: i, onError: o, onLogs: a, poll: l, pollingInterval: d=t.pollingInterval, strict: f}) {
    return (typeof l < "u" ? l : t.transport.type !== "webSocket") ? (()=>{
        const m = Q(["watchContractEvent", r, n, s, t.uid, i, d])
          , w = f ?? !1;
        return nt(m, {
            onLogs: a,
            onError: o
        }, v=>{
            let E, C, P = !1;
            const O = Bt(async()=>{
                var I;
                if (!P) {
                    try {
                        C = await M(t, ui, "createContractEventFilter")({
                            abi: e,
                            address: r,
                            args: n,
                            eventName: i,
                            strict: w
                        })
                    } catch {}
                    P = !0;
                    return
                }
                try {
                    let A;
                    if (C)
                        A = await M(t, fr, "getFilterChanges")({
                            filter: C
                        });
                    else {
                        const k = await M(t, $t, "getBlockNumber")({});
                        E && E !== k ? A = await M(t, gi, "getContractEvents")({
                            abi: e,
                            address: r,
                            args: n,
                            eventName: i,
                            fromBlock: E + 1n,
                            toBlock: k,
                            strict: w
                        }) : A = [],
                        E = k
                    }
                    if (A.length === 0)
                        return;
                    if (s)
                        v.onLogs(A);
                    else
                        for (const k of A)
                            v.onLogs([k])
                } catch (A) {
                    C && A instanceof Ne && (P = !1),
                    (I = v.onError) == null || I.call(v, A)
                }
            }
            , {
                emitOnBegin: !0,
                interval: d
            });
            return async()=>{
                C && await M(t, dr, "uninstallFilter")({
                    filter: C
                }),
                O()
            }
        }
        )
    }
    )() : (()=>{
        let m = !0
          , w = ()=>m = !1;
        return (async()=>{
            try {
                const v = i ? kt({
                    abi: e,
                    eventName: i,
                    args: n
                }) : []
                  , {unsubscribe: E} = await t.transport.subscribe({
                    params: ["logs", {
                        address: r,
                        topics: v
                    }],
                    onData(C) {
                        var O;
                        if (!m)
                            return;
                        const P = C.result;
                        try {
                            const {eventName: I, args: A} = It({
                                abi: e,
                                data: P.data,
                                topics: P.topics,
                                strict: f
                            })
                              , k = ae(P, {
                                args: A,
                                eventName: I
                            });
                            a([k])
                        } catch (I) {
                            let A, k;
                            if (I instanceof je || I instanceof Xe) {
                                if (f)
                                    return;
                                A = I.abiItem.name,
                                k = (O = I.abiItem.inputs) == null ? void 0 : O.some(R=>!("name"in R && R.name))
                            }
                            const B = ae(P, {
                                args: k ? [] : {},
                                eventName: A
                            });
                            a([B])
                        }
                    },
                    onError(C) {
                        o == null || o(C)
                    }
                });
                w = E,
                m || w()
            } catch (v) {
                o == null || o(v)
            }
        }
        )(),
        w
    }
    )()
}
function Ei({chain: t, currentChainId: e}) {
    if (!t)
        throw new so;
    if (e !== t.id)
        throw new no({
            chain: t,
            currentChainId: e
        })
}
function rc(t, {docsPath: e, ...r}) {
    const n = (()=>{
        const s = An(t, r);
        return s instanceof sr ? t : s
    }
    )();
    return new Cu(n,{
        docsPath: e,
        ...r
    })
}
async function St(t) {
    const e = await t.request({
        method: "eth_chainId"
    });
    return J(e)
}
async function Bn(t, {serializedTransaction: e}) {
    return t.request({
        method: "eth_sendRawTransaction",
        params: [e]
    })
}
async function $n(t, e) {
    var w, v, E, C;
    const {account: r=t.account, chain: n=t.chain, accessList: s, data: i, gas: o, gasPrice: a, maxFeePerGas: l, maxPriorityFeePerGas: d, nonce: f, to: h, value: y, ...g} = e;
    if (!r)
        throw new et({
            docsPath: "/docs/actions/wallet/sendTransaction"
        });
    const m = ne(r);
    try {
        Ot(e);
        let P;
        if (n !== null && (P = await M(t, St, "getChainId")({}),
        Ei({
            currentChainId: P,
            chain: n
        })),
        m.type === "local") {
            const k = await M(t, lr, "prepareTransactionRequest")({
                account: m,
                accessList: s,
                chain: n,
                data: i,
                gas: o,
                gasPrice: a,
                maxFeePerGas: l,
                maxPriorityFeePerGas: d,
                nonce: f,
                to: h,
                value: y,
                ...g
            });
            P || (P = await M(t, St, "getChainId")({}));
            const B = (w = n == null ? void 0 : n.serializers) == null ? void 0 : w.transaction
              , R = await m.signTransaction({
                ...k,
                chainId: P
            }, {
                serializer: B
            });
            return await M(t, Bn, "sendRawTransaction")({
                serializedTransaction: R
            })
        }
        const O = (C = (E = (v = t.chain) == null ? void 0 : v.formatters) == null ? void 0 : E.transactionRequest) == null ? void 0 : C.format
          , A = (O || nr)({
            ...Fn(g, {
                format: O
            }),
            accessList: s,
            data: i,
            from: m.address,
            gas: o,
            gasPrice: a,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: f,
            to: h,
            value: y
        });
        return await t.request({
            method: "eth_sendTransaction",
            params: [A]
        })
    } catch (P) {
        throw rc(P, {
            ...e,
            account: m,
            chain: e.chain || void 0
        })
    }
}
async function nc(t, {abi: e, address: r, args: n, dataSuffix: s, functionName: i, ...o}) {
    const a = Te({
        abi: e,
        args: n,
        functionName: i
    });
    return await M(t, $n, "sendTransaction")({
        data: `${a}${s ? s.replace("0x", "") : ""}`,
        to: r,
        ...o
    })
}
async function sc(t, {chain: e}) {
    const {id: r, name: n, nativeCurrency: s, rpcUrls: i, blockExplorers: o} = e;
    await t.request({
        method: "wallet_addEthereumChain",
        params: [{
            chainId: $(r),
            chainName: n,
            nativeCurrency: s,
            rpcUrls: i.default.http,
            blockExplorerUrls: o ? Object.values(o).map(({url: a})=>a) : void 0
        }]
    })
}
const Vr = 256;
let Dt = Vr, qt;
function ic(t=11) {
    if (!qt || Dt + t > Vr * 2) {
        qt = "",
        Dt = 0;
        for (let e = 0; e < Vr; e++)
            qt += (256 + Math.random() * 256 | 0).toString(16).substring(1)
    }
    return qt.substring(Dt, Dt++ + t)
}
function Ci(t) {
    const {batch: e, cacheTime: r=t.pollingInterval ?? 4e3, key: n="base", name: s="Base Client", pollingInterval: i=4e3, type: o="base"} = t
      , a = t.chain
      , l = t.account ? ne(t.account) : void 0
      , {config: d, request: f, value: h} = t.transport({
        chain: a,
        pollingInterval: i
    })
      , y = {
        ...d,
        ...h
    }
      , g = {
        account: l,
        batch: e,
        cacheTime: r,
        chain: a,
        key: n,
        name: s,
        pollingInterval: i,
        request: f,
        transport: y,
        type: o,
        uid: ic()
    };
    function m(w) {
        return v=>{
            const E = v(w);
            for (const P in g)
                delete E[P];
            const C = {
                ...w,
                ...E
            };
            return Object.assign(C, {
                extend: m(C)
            })
        }
    }
    return Object.assign(g, {
        extend: m(g)
    })
}
function Xr(t, {delay: e=100, retryCount: r=2, shouldRetry: n=()=>!0}={}) {
    return new Promise((s,i)=>{
        const o = async({count: a=0}={})=>{
            const l = async({error: d})=>{
                const f = typeof e == "function" ? e({
                    count: a,
                    error: d
                }) : e;
                f && await Zt(f),
                o({
                    count: a + 1
                })
            }
            ;
            try {
                const d = await t();
                s(d)
            } catch (d) {
                if (a < r && await n({
                    count: a,
                    error: d
                }))
                    return l({
                        error: d
                    });
                i(d)
            }
        }
        ;
        o()
    }
    )
}
const Pi = t=>"code"in t ? t.code !== -1 && t.code !== -32004 && t.code !== -32005 && t.code !== -32042 && t.code !== -32603 : t instanceof $e && t.status ? t.status !== 403 && t.status !== 408 && t.status !== 413 && t.status !== 429 && t.status !== 500 && t.status !== 502 && t.status !== 503 && t.status !== 504 : !1;
function ac(t, {retryDelay: e=150, retryCount: r=3}={}) {
    return async n=>Xr(async()=>{
        try {
            return await t(n)
        } catch (s) {
            const i = s;
            switch (i.code) {
            case ft.code:
                throw new ft(i);
            case dt.code:
                throw new dt(i);
            case ht.code:
                throw new ht(i);
            case pt.code:
                throw new pt(i);
            case Ge.code:
                throw new Ge(i);
            case Ne.code:
                throw new Ne(i);
            case mt.code:
                throw new mt(i);
            case We.code:
                throw new We(i);
            case yt.code:
                throw new yt(i);
            case bt.code:
                throw new bt(i);
            case gt.code:
                throw new gt(i);
            case wt.code:
                throw new wt(i);
            case de.code:
                throw new de(i);
            case vt.code:
                throw new vt(i);
            case xt.code:
                throw new xt(i);
            case Et.code:
                throw new Et(i);
            case Ct.code:
                throw new Ct(i);
            case He.code:
                throw new He(i);
            case 5e3:
                throw new de(i);
            default:
                throw s instanceof T ? s : new ku(i)
            }
        }
    }
    , {
        delay: ({count: s, error: i})=>{
            var o;
            if (i && i instanceof $e) {
                const a = (o = i == null ? void 0 : i.headers) == null ? void 0 : o.get("Retry-After");
                if (a != null && a.match(/\d/))
                    return parseInt(a) * 1e3
            }
            return ~~(1 << s) * e
        }
        ,
        retryCount: r,
        shouldRetry: ({error: s})=>!Pi(s)
    })
}
function hr({key: t, name: e, request: r, retryCount: n=3, retryDelay: s=150, timeout: i, type: o}, a) {
    return {
        config: {
            key: t,
            name: e,
            request: r,
            retryCount: n,
            retryDelay: s,
            timeout: i,
            type: o
        },
        request: ac(r, {
            retryCount: n,
            retryDelay: s
        }),
        value: a
    }
}
function oc(t, e={}) {
    const {key: r="custom", name: n="Custom Provider", retryDelay: s} = e;
    return ({retryCount: i})=>hr({
        key: r,
        name: n,
        request: t.request.bind(t),
        retryCount: e.retryCount ?? i,
        retryDelay: s,
        type: "custom"
    })
}
function gs(t, e={}) {
    const {key: r="fallback", name: n="Fallback", rank: s=!1, retryCount: i, retryDelay: o} = e;
    return ({chain: a, pollingInterval: l=4e3, timeout: d})=>{
        let f = t
          , h = ()=>{}
        ;
        const y = hr({
            key: r,
            name: n,
            async request({method: g, params: m}) {
                const w = async(v=0)=>{
                    const E = f[v]({
                        chain: a,
                        retryCount: 0,
                        timeout: d
                    });
                    try {
                        const C = await E.request({
                            method: g,
                            params: m
                        });
                        return h({
                            method: g,
                            params: m,
                            response: C,
                            transport: E,
                            status: "success"
                        }),
                        C
                    } catch (C) {
                        if (h({
                            error: C,
                            method: g,
                            params: m,
                            transport: E,
                            status: "error"
                        }),
                        Pi(C) || v === f.length - 1)
                            throw C;
                        return w(v + 1)
                    }
                }
                ;
                return w()
            },
            retryCount: i,
            retryDelay: o,
            type: "fallback"
        }, {
            onResponse: g=>h = g,
            transports: f.map(g=>g({
                chain: a,
                retryCount: 0
            }))
        });
        if (s) {
            const g = typeof s == "object" ? s : {};
            uc({
                chain: a,
                interval: g.interval ?? l,
                onTransports: m=>f = m,
                sampleCount: g.sampleCount,
                timeout: g.timeout,
                transports: f,
                weights: g.weights
            })
        }
        return y
    }
}
function uc({chain: t, interval: e=4e3, onTransports: r, sampleCount: n=10, timeout: s=1e3, transports: i, weights: o={}}) {
    const {stability: a=.7, latency: l=.3} = o
      , d = []
      , f = async()=>{
        const h = await Promise.all(i.map(async m=>{
            const w = m({
                chain: t,
                retryCount: 0,
                timeout: s
            })
              , v = Date.now();
            let E, C;
            try {
                await w.request({
                    method: "net_listening"
                }),
                C = 1
            } catch {
                C = 0
            } finally {
                E = Date.now()
            }
            return {
                latency: E - v,
                success: C
            }
        }
        ));
        d.push(h),
        d.length > n && d.shift();
        const y = Math.max(...d.map(m=>Math.max(...m.map(({latency: w})=>w))))
          , g = i.map((m,w)=>{
            const v = d.map(I=>I[w].latency)
              , C = 1 - v.reduce((I,A)=>I + A, 0) / v.length / y
              , P = d.map(I=>I[w].success)
              , O = P.reduce((I,A)=>I + A, 0) / P.length;
            return O === 0 ? [0, w] : [l * C + a * O, w]
        }
        ).sort((m,w)=>w[0] - m[0]);
        r(g.map(([,m])=>i[m])),
        await Zt(e),
        f()
    }
    ;
    f()
}
class Si extends T {
    constructor() {
        super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
            docsPath: "/docs/clients/intro"
        })
    }
}
function cc() {
    if (typeof WebSocket < "u")
        return WebSocket;
    if (typeof rs.WebSocket < "u")
        return rs.WebSocket;
    if (typeof window.WebSocket < "u")
        return window.WebSocket;
    if (typeof self.WebSocket < "u")
        return self.WebSocket;
    throw new Error("`WebSocket` is not supported in this environment")
}
const ws = cc();
function Ai(t, {errorInstance: e=new Error("timed out"), timeout: r, signal: n}) {
    return new Promise((s,i)=>{
        (async()=>{
            let o;
            try {
                const a = new AbortController;
                r > 0 && (o = setTimeout(()=>{
                    n ? a.abort() : i(e)
                }
                , r)),
                s(await t({
                    signal: a == null ? void 0 : a.signal
                }))
            } catch (a) {
                a.name === "AbortError" && i(e),
                i(a)
            } finally {
                clearTimeout(o)
            }
        }
        )()
    }
    )
}
let Zr = 0;
async function lc(t, {body: e, fetchOptions: r={}, timeout: n=1e4}) {
    var a;
    const {headers: s, method: i, signal: o} = r;
    try {
        const l = await Ai(async({signal: f})=>await fetch(t, {
            ...r,
            body: Array.isArray(e) ? Q(e.map(y=>({
                jsonrpc: "2.0",
                id: y.id ?? Zr++,
                ...y
            }))) : Q({
                jsonrpc: "2.0",
                id: e.id ?? Zr++,
                ...e
            }),
            headers: {
                ...s,
                "Content-Type": "application/json"
            },
            method: i || "POST",
            signal: o || (n > 0 ? f : void 0)
        }), {
            errorInstance: new Qr({
                body: e,
                url: t
            }),
            timeout: n,
            signal: !0
        });
        let d;
        if ((a = l.headers.get("Content-Type")) != null && a.startsWith("application/json") ? d = await l.json() : d = await l.text(),
        !l.ok)
            throw new $e({
                body: e,
                details: Q(d.error) || l.statusText,
                headers: l.headers,
                status: l.status,
                url: t
            });
        return d
    } catch (l) {
        throw l instanceof $e || l instanceof Qr ? l : new $e({
            body: e,
            details: l.message,
            url: t
        })
    }
}
const Pr = new Map;
async function Sr(t) {
    let e = Pr.get(t);
    if (e)
        return e;
    const {schedule: r} = Mn({
        id: t,
        fn: async()=>{
            const i = new ws(t)
              , o = new Map
              , a = new Map
              , l = ({data: f})=>{
                const h = JSON.parse(f)
                  , y = h.method === "eth_subscription"
                  , g = y ? h.params.subscription : h.id
                  , m = y ? a : o
                  , w = m.get(g);
                w && w({
                    data: f
                }),
                y || m.delete(g)
            }
              , d = ()=>{
                Pr.delete(t),
                i.removeEventListener("close", d),
                i.removeEventListener("message", l)
            }
            ;
            return i.addEventListener("close", d),
            i.addEventListener("message", l),
            i.readyState === ws.CONNECTING && await new Promise((f,h)=>{
                i && (i.onopen = f,
                i.onerror = h)
            }
            ),
            e = Object.assign(i, {
                requests: o,
                subscriptions: a
            }),
            Pr.set(t, e),
            [e]
        }
    })
      , [n,[s]] = await r();
    return s
}
function fc(t, {body: e, onResponse: r}) {
    if (t.readyState === t.CLOSED || t.readyState === t.CLOSING)
        throw new Au({
            body: e,
            url: t.url,
            details: "Socket is closed."
        });
    const n = Zr++
      , s = ({data: i})=>{
        var a;
        const o = JSON.parse(i);
        typeof o.id == "number" && n !== o.id || (r == null || r(o),
        e.method === "eth_subscribe" && typeof o.result == "string" && t.subscriptions.set(o.result, s),
        e.method === "eth_unsubscribe" && t.subscriptions.delete((a = e.params) == null ? void 0 : a[0]))
    }
    ;
    return t.requests.set(n, s),
    t.send(JSON.stringify({
        jsonrpc: "2.0",
        ...e,
        id: n
    })),
    t
}
async function dc(t, {body: e, timeout: r=1e4}) {
    return Ai(()=>new Promise(n=>ze.webSocket(t, {
        body: e,
        onResponse: n
    })), {
        errorInstance: new Qr({
            body: e,
            url: t.url
        }),
        timeout: r
    })
}
const ze = {
    http: lc,
    webSocket: fc,
    webSocketAsync: dc
};
function hc(t, e={}) {
    const {batch: r, fetchOptions: n, key: s="http", name: i="HTTP JSON-RPC", retryDelay: o} = e;
    return ({chain: a, retryCount: l, timeout: d})=>{
        const {batchSize: f=1e3, wait: h=0} = typeof r == "object" ? r : {}
          , y = e.retryCount ?? l
          , g = d ?? e.timeout ?? 1e4
          , m = t || (a == null ? void 0 : a.rpcUrls.default.http[0]);
        if (!m)
            throw new Si;
        return hr({
            key: s,
            name: i,
            async request({method: w, params: v}) {
                const E = {
                    method: w,
                    params: v
                }
                  , {schedule: C} = Mn({
                    id: `${t}`,
                    wait: h,
                    shouldSplitBatch(A) {
                        return A.length > f
                    },
                    fn: A=>ze.http(m, {
                        body: A,
                        fetchOptions: n,
                        timeout: g
                    }),
                    sort: (A,k)=>A.id - k.id
                })
                  , P = async A=>r ? C(A) : [await ze.http(m, {
                    body: A,
                    fetchOptions: n,
                    timeout: g
                })]
                  , [{error: O, result: I}] = await P(E);
                if (O)
                    throw new Sn({
                        body: E,
                        error: O,
                        url: m
                    });
                return I
            },
            retryCount: y,
            retryDelay: o,
            timeout: g,
            type: "http"
        }, {
            fetchOptions: n,
            url: t
        })
    }
}
function Rn(t, e) {
    var n, s, i;
    if (!(t instanceof T))
        return !1;
    const r = t.walk(o=>o instanceof Hr);
    return r instanceof Hr ? !!(((n = r.data) == null ? void 0 : n.errorName) === "ResolverNotFound" || ((s = r.data) == null ? void 0 : s.errorName) === "ResolverWildcardNotSupported" || (i = r.reason) != null && i.includes("Wildcard on non-extended resolvers is not supported") || e === "reverse" && r.reason === ci[50]) : !1
}
function Fi(t) {
    if (t.length !== 66 || t.indexOf("[") !== 0 || t.indexOf("]") !== 65)
        return null;
    const e = `0x${t.slice(1, 65)}`;
    return ie(e) ? e : null
}
function Wt(t) {
    let e = new Uint8Array(32).fill(0);
    if (!t)
        return lt(e);
    const r = t.split(".");
    for (let n = r.length - 1; n >= 0; n -= 1) {
        const s = Fi(r[n])
          , i = s ? Se(s) : X(we(r[n]), "bytes");
        e = X(pe([e, i]), "bytes")
    }
    return lt(e)
}
function pc(t) {
    return `[${t.slice(2)}]`
}
function mc(t) {
    const e = new Uint8Array(32).fill(0);
    return t ? Fi(t) || X(we(t)) : lt(e)
}
function pr(t) {
    const e = t.replace(/^\.|\.$/gm, "");
    if (e.length === 0)
        return new Uint8Array(1);
    const r = new Uint8Array(we(e).byteLength + 2);
    let n = 0;
    const s = e.split(".");
    for (let i = 0; i < s.length; i++) {
        let o = we(s[i]);
        o.byteLength > 255 && (o = we(pc(mc(s[i])))),
        r[n] = o.length,
        r.set(o, n + 1),
        n += o.length + 1
    }
    return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r
}
async function yc(t, {blockNumber: e, blockTag: r, coinType: n, name: s, universalResolverAddress: i}) {
    let o = i;
    if (!o) {
        if (!t.chain)
            throw new Error("client chain not configured. universalResolverAddress is required.");
        o = rt({
            blockNumber: e,
            chain: t.chain,
            contract: "ensUniversalResolver"
        })
    }
    try {
        const a = Te({
            abi: ys,
            functionName: "addr",
            ...n != null ? {
                args: [Wt(s), BigInt(n)]
            } : {
                args: [Wt(s)]
            }
        })
          , l = await M(t, Fe, "readContract")({
            address: o,
            abi: xi,
            functionName: "resolve",
            args: [Ee(pr(s)), a],
            blockNumber: e,
            blockTag: r
        });
        if (l[0] === "0x")
            return null;
        const d = tt({
            abi: ys,
            args: n != null ? [Wt(s), BigInt(n)] : void 0,
            functionName: "addr",
            data: l[0]
        });
        return d === "0x" || Be(d) === "0x00" ? null : d
    } catch (a) {
        if (Rn(a, "resolve"))
            return null;
        throw a
    }
}
class bc extends T {
    constructor({data: e}) {
        super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
            metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(e)}`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarInvalidMetadataError"
        })
    }
}
class ot extends T {
    constructor({reason: e}) {
        super(`ENS NFT avatar URI is invalid. ${e}`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarInvalidNftUriError"
        })
    }
}
class jn extends T {
    constructor({uri: e}) {
        super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarUriResolutionError"
        })
    }
}
class gc extends T {
    constructor({namespace: e}) {
        super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarUnsupportedNamespaceError"
        })
    }
}
const wc = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/
  , vc = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/
  , xc = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/
  , Ec = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function Cc(t) {
    try {
        const e = await fetch(t, {
            method: "HEAD"
        });
        if (e.status === 200) {
            const r = e.headers.get("content-type");
            return r == null ? void 0 : r.startsWith("image/")
        }
        return !1
    } catch (e) {
        return typeof e == "object" && typeof e.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise(r=>{
            const n = new Image;
            n.onload = ()=>{
                r(!0)
            }
            ,
            n.onerror = ()=>{
                r(!1)
            }
            ,
            n.src = t
        }
        )
    }
}
function vs(t, e) {
    return t ? t.endsWith("/") ? t.slice(0, -1) : t : e
}
function ki({uri: t, gatewayUrls: e}) {
    const r = xc.test(t);
    if (r)
        return {
            uri: t,
            isOnChain: !0,
            isEncoded: r
        };
    const n = vs(e == null ? void 0 : e.ipfs, "https://ipfs.io")
      , s = vs(e == null ? void 0 : e.arweave, "https://arweave.net")
      , i = t.match(wc)
      , {protocol: o, subpath: a, target: l, subtarget: d=""} = (i == null ? void 0 : i.groups) || {}
      , f = o === "ipns:/" || a === "ipns/"
      , h = o === "ipfs:/" || a === "ipfs/" || vc.test(t);
    if (t.startsWith("http") && !f && !h) {
        let g = t;
        return e != null && e.arweave && (g = t.replace(/https:\/\/arweave.net/g, e == null ? void 0 : e.arweave)),
        {
            uri: g,
            isOnChain: !1,
            isEncoded: !1
        }
    }
    if ((f || h) && l)
        return {
            uri: `${n}/${f ? "ipns" : "ipfs"}/${l}${d}`,
            isOnChain: !1,
            isEncoded: !1
        };
    if (o === "ar:/" && l)
        return {
            uri: `${s}/${l}${d || ""}`,
            isOnChain: !1,
            isEncoded: !1
        };
    let y = t.replace(Ec, "");
    if (y.startsWith("<svg") && (y = `data:image/svg+xml;base64,${btoa(y)}`),
    y.startsWith("data:") || y.startsWith("{"))
        return {
            uri: y,
            isOnChain: !0,
            isEncoded: !1
        };
    throw new jn({
        uri: t
    })
}
function Ti(t) {
    if (typeof t != "object" || !("image"in t) && !("image_url"in t) && !("image_data"in t))
        throw new bc({
            data: t
        });
    return t.image || t.image_url || t.image_data
}
async function Pc({gatewayUrls: t, uri: e}) {
    try {
        const r = await fetch(e).then(s=>s.json());
        return await Nn({
            gatewayUrls: t,
            uri: Ti(r)
        })
    } catch {
        throw new jn({
            uri: e
        })
    }
}
async function Nn({gatewayUrls: t, uri: e}) {
    const {uri: r, isOnChain: n} = ki({
        uri: e,
        gatewayUrls: t
    });
    if (n || await Cc(r))
        return r;
    throw new jn({
        uri: e
    })
}
function Sc(t) {
    let e = t;
    e.startsWith("did:nft:") && (e = e.replace("did:nft:", "").replace(/_/g, "/"));
    const [r,n,s] = e.split("/")
      , [i,o] = r.split(":")
      , [a,l] = n.split(":");
    if (!i || i.toLowerCase() !== "eip155")
        throw new ot({
            reason: "Only EIP-155 supported"
        });
    if (!o)
        throw new ot({
            reason: "Chain ID not found"
        });
    if (!l)
        throw new ot({
            reason: "Contract address not found"
        });
    if (!s)
        throw new ot({
            reason: "Token ID not found"
        });
    if (!a)
        throw new ot({
            reason: "ERC namespace not found"
        });
    return {
        chainID: parseInt(o),
        namespace: a.toLowerCase(),
        contractAddress: l,
        tokenID: s
    }
}
async function Ac(t, {nft: e}) {
    if (e.namespace === "erc721")
        return Fe(t, {
            address: e.contractAddress,
            abi: [{
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{
                    name: "tokenId",
                    type: "uint256"
                }],
                outputs: [{
                    name: "",
                    type: "string"
                }]
            }],
            functionName: "tokenURI",
            args: [BigInt(e.tokenID)]
        });
    if (e.namespace === "erc1155")
        return Fe(t, {
            address: e.contractAddress,
            abi: [{
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{
                    name: "_id",
                    type: "uint256"
                }],
                outputs: [{
                    name: "",
                    type: "string"
                }]
            }],
            functionName: "uri",
            args: [BigInt(e.tokenID)]
        });
    throw new gc({
        namespace: e.namespace
    })
}
async function Fc(t, {gatewayUrls: e, record: r}) {
    return /eip155:/i.test(r) ? kc(t, {
        gatewayUrls: e,
        record: r
    }) : Nn({
        uri: r,
        gatewayUrls: e
    })
}
async function kc(t, {gatewayUrls: e, record: r}) {
    const n = Sc(r)
      , s = await Ac(t, {
        nft: n
    })
      , {uri: i, isOnChain: o, isEncoded: a} = ki({
        uri: s,
        gatewayUrls: e
    });
    if (o && (i.includes("data:application/json;base64,") || i.startsWith("{"))) {
        const d = a ? atob(i.replace("data:application/json;base64,", "")) : i
          , f = JSON.parse(d);
        return Nn({
            uri: Ti(f),
            gatewayUrls: e
        })
    }
    let l = n.tokenID;
    return n.namespace === "erc1155" && (l = l.replace("0x", "").padStart(64, "0")),
    Pc({
        gatewayUrls: e,
        uri: i.replace(/(?:0x)?{id}/, l)
    })
}
async function Oi(t, {blockNumber: e, blockTag: r, name: n, key: s, universalResolverAddress: i}) {
    let o = i;
    if (!o) {
        if (!t.chain)
            throw new Error("client chain not configured. universalResolverAddress is required.");
        o = rt({
            blockNumber: e,
            chain: t.chain,
            contract: "ensUniversalResolver"
        })
    }
    try {
        const a = await M(t, Fe, "readContract")({
            address: o,
            abi: xi,
            functionName: "resolve",
            args: [Ee(pr(n)), Te({
                abi: ms,
                functionName: "text",
                args: [Wt(n), s]
            })],
            blockNumber: e,
            blockTag: r
        });
        if (a[0] === "0x")
            return null;
        const l = tt({
            abi: ms,
            functionName: "text",
            data: a[0]
        });
        return l === "" ? null : l
    } catch (a) {
        if (Rn(a, "resolve"))
            return null;
        throw a
    }
}
async function Tc(t, {blockNumber: e, blockTag: r, gatewayUrls: n, name: s, universalResolverAddress: i}) {
    const o = await M(t, Oi, "getEnsText")({
        blockNumber: e,
        blockTag: r,
        key: "avatar",
        name: s,
        universalResolverAddress: i
    });
    if (!o)
        return null;
    try {
        return await Fc(t, {
            record: o,
            gatewayUrls: n
        })
    } catch {
        return null
    }
}
async function Oc(t, {address: e, blockNumber: r, blockTag: n, universalResolverAddress: s}) {
    let i = s;
    if (!i) {
        if (!t.chain)
            throw new Error("client chain not configured. universalResolverAddress is required.");
        i = rt({
            blockNumber: r,
            chain: t.chain,
            contract: "ensUniversalResolver"
        })
    }
    const o = `${e.toLowerCase().substring(2)}.addr.reverse`;
    try {
        const [a,l] = await M(t, Fe, "readContract")({
            address: i,
            abi: qu,
            functionName: "reverse",
            args: [Ee(pr(o))],
            blockNumber: r,
            blockTag: n
        });
        return e.toLowerCase() !== l.toLowerCase() ? null : a
    } catch (a) {
        if (Rn(a, "reverse"))
            return null;
        throw a
    }
}
async function Ic(t, {blockNumber: e, blockTag: r, name: n, universalResolverAddress: s}) {
    let i = s;
    if (!i) {
        if (!t.chain)
            throw new Error("client chain not configured. universalResolverAddress is required.");
        i = rt({
            blockNumber: e,
            chain: t.chain,
            contract: "ensUniversalResolver"
        })
    }
    const [o] = await M(t, Fe, "readContract")({
        address: i,
        abi: [{
            inputs: [{
                type: "bytes"
            }],
            name: "findResolver",
            outputs: [{
                type: "address"
            }, {
                type: "bytes32"
            }],
            stateMutability: "view",
            type: "function"
        }],
        functionName: "findResolver",
        args: [Ee(pr(n))],
        blockNumber: e,
        blockTag: r
    });
    return o
}
async function Mc(t) {
    const e = ur(t, {
        method: "eth_newBlockFilter"
    })
      , r = await t.request({
        method: "eth_newBlockFilter"
    });
    return {
        id: r,
        request: e(r),
        type: "block"
    }
}
async function Ii(t, {address: e, args: r, event: n, events: s, fromBlock: i, strict: o, toBlock: a}={}) {
    const l = s ?? (n ? [n] : void 0)
      , d = ur(t, {
        method: "eth_newFilter"
    });
    let f = [];
    l && (f = [l.flatMap(y=>kt({
        abi: [y],
        eventName: y.name,
        args: r
    }))],
    n && (f = f[0]));
    const h = await t.request({
        method: "eth_newFilter",
        params: [{
            address: e,
            fromBlock: typeof i == "bigint" ? $(i) : i,
            toBlock: typeof a == "bigint" ? $(a) : a,
            ...f.length ? {
                topics: f
            } : {}
        }]
    });
    return {
        abi: l,
        args: r,
        eventName: n ? n.name : void 0,
        fromBlock: i,
        id: h,
        request: d(h),
        strict: o,
        toBlock: a,
        type: "event"
    }
}
async function Mi(t) {
    const e = ur(t, {
        method: "eth_newPendingTransactionFilter"
    })
      , r = await t.request({
        method: "eth_newPendingTransactionFilter"
    });
    return {
        id: r,
        request: e(r),
        type: "transaction"
    }
}
async function Bc(t, {address: e, blockNumber: r, blockTag: n="latest"}) {
    const s = r ? $(r) : void 0
      , i = await t.request({
        method: "eth_getBalance",
        params: [e, s || n]
    });
    return BigInt(i)
}
async function $c(t, {blockHash: e, blockNumber: r, blockTag: n="latest"}={}) {
    const s = r !== void 0 ? $(r) : void 0;
    let i;
    return e ? i = await t.request({
        method: "eth_getBlockTransactionCountByHash",
        params: [e]
    }) : i = await t.request({
        method: "eth_getBlockTransactionCountByNumber",
        params: [s || n]
    }),
    J(i)
}
async function Rc(t, {address: e, blockNumber: r, blockTag: n="latest"}) {
    const s = r !== void 0 ? $(r) : void 0
      , i = await t.request({
        method: "eth_getCode",
        params: [e, s || n]
    });
    if (i !== "0x")
        return i
}
function jc(t) {
    var e;
    return {
        baseFeePerGas: t.baseFeePerGas.map(r=>BigInt(r)),
        gasUsedRatio: t.gasUsedRatio,
        oldestBlock: BigInt(t.oldestBlock),
        reward: (e = t.reward) == null ? void 0 : e.map(r=>r.map(n=>BigInt(n)))
    }
}
async function Nc(t, {blockCount: e, blockNumber: r, blockTag: n="latest", rewardPercentiles: s}) {
    const i = r ? $(r) : void 0
      , o = await t.request({
        method: "eth_feeHistory",
        params: [$(e), i || n, s]
    });
    return jc(o)
}
async function Uc(t, {filter: e}) {
    const r = e.strict ?? !1;
    return (await e.request({
        method: "eth_getFilterLogs",
        params: [e.id]
    })).map(s=>{
        var i;
        try {
            const {eventName: o, args: a} = "abi"in e && e.abi ? It({
                abi: e.abi,
                data: s.data,
                topics: s.topics,
                strict: r
            }) : {
                eventName: void 0,
                args: void 0
            };
            return ae(s, {
                args: a,
                eventName: o
            })
        } catch (o) {
            let a, l;
            if (o instanceof je || o instanceof Xe) {
                if ("strict"in e && e.strict)
                    return;
                a = o.abiItem.name,
                l = (i = o.abiItem.inputs) == null ? void 0 : i.some(d=>!("name"in d && d.name))
            }
            return ae(s, {
                args: l ? [] : {},
                eventName: a
            })
        }
    }
    ).filter(Boolean)
}
class _c extends T {
    constructor({callbackSelector: e, cause: r, data: n, extraData: s, sender: i, urls: o}) {
        var a;
        super(r.shortMessage || "An error occurred while fetching for an offchain result.", {
            cause: r,
            metaMessages: [...r.metaMessages || [], (a = r.metaMessages) != null && a.length ? "" : [], "Offchain Gateway Call:", o && ["  Gateway URL(s):", ...o.map(l=>`    ${Je(l)}`)], `  Sender: ${i}`, `  Data: ${n}`, `  Callback selector: ${e}`, `  Extra data: ${s}`].flat()
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OffchainLookupError"
        })
    }
}
class Dc extends T {
    constructor({result: e, url: r}) {
        super("Offchain gateway response is malformed. Response data must be a hex value.", {
            metaMessages: [`Gateway URL: ${Je(r)}`, `Response: ${Q(e)}`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OffchainLookupResponseMalformedError"
        })
    }
}
class qc extends T {
    constructor({sender: e, to: r}) {
        super("Reverted sender address does not match target contract address (`to`).", {
            metaMessages: [`Contract address: ${r}`, `OffchainLookup sender address: ${e}`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OffchainLookupSenderMismatchError"
        })
    }
}
function Lc(t, e) {
    if (!he(t))
        throw new Re({
            address: t
        });
    if (!he(e))
        throw new Re({
            address: e
        });
    return t.toLowerCase() === e.toLowerCase()
}
const zc = "0x556f1830"
  , Bi = {
    name: "OffchainLookup",
    type: "error",
    inputs: [{
        name: "sender",
        type: "address"
    }, {
        name: "urls",
        type: "string[]"
    }, {
        name: "callData",
        type: "bytes"
    }, {
        name: "callbackFunction",
        type: "bytes4"
    }, {
        name: "extraData",
        type: "bytes"
    }]
};
async function Gc(t, {blockNumber: e, blockTag: r, data: n, to: s}) {
    const {args: i} = li({
        data: n,
        abi: [Bi]
    })
      , [o,a,l,d,f] = i;
    try {
        if (!Lc(s, o))
            throw new qc({
                sender: o,
                to: s
            });
        const h = await $i({
            data: l,
            sender: o,
            urls: a
        })
          , {data: y} = await Mt(t, {
            blockNumber: e,
            blockTag: r,
            data: pe([d, Ze([{
                type: "bytes"
            }, {
                type: "bytes"
            }], [h, f])]),
            to: s
        });
        return y
    } catch (h) {
        throw new _c({
            callbackSelector: d,
            cause: h,
            data: n,
            extraData: f,
            sender: o,
            urls: a
        })
    }
}
async function $i({data: t, sender: e, urls: r}) {
    var s;
    let n = new Error("An unknown error occurred.");
    for (let i = 0; i < r.length; i++) {
        const o = r[i]
          , a = o.includes("{data}") ? "GET" : "POST"
          , l = a === "POST" ? {
            data: t,
            sender: e
        } : void 0;
        try {
            const d = await fetch(o.replace("{sender}", e).replace("{data}", t), {
                body: JSON.stringify(l),
                method: a
            });
            let f;
            if ((s = d.headers.get("Content-Type")) != null && s.startsWith("application/json") ? f = (await d.json()).data : f = await d.text(),
            !d.ok) {
                n = new $e({
                    body: l,
                    details: f != null && f.error ? Q(f.error) : d.statusText,
                    headers: d.headers,
                    status: d.status,
                    url: o
                });
                continue
            }
            if (!ie(f)) {
                n = new Dc({
                    result: f,
                    url: o
                });
                continue
            }
            return f
        } catch (d) {
            n = new $e({
                body: l,
                details: d.message,
                url: o
            })
        }
    }
    throw n
}
const Wc = Object.freeze(Object.defineProperty({
    __proto__: null,
    ccipFetch: $i,
    offchainLookup: Gc,
    offchainLookupAbiItem: Bi,
    offchainLookupSignature: zc
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Hc = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/
  , Qc = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function Kc({domain: t, message: e, primaryType: r, types: n}) {
    const s = typeof t > "u" ? {} : t
      , i = {
        EIP712Domain: Di({
            domain: s
        }),
        ...n
    };
    _i({
        domain: s,
        message: e,
        primaryType: r,
        types: i
    });
    const o = ["0x1901"];
    return s && o.push(Jc({
        domain: s,
        types: i
    })),
    r !== "EIP712Domain" && o.push(Ri({
        data: e,
        primaryType: r,
        types: i
    })),
    X(pe(o))
}
function Jc({domain: t, types: e}) {
    return Ri({
        data: t,
        primaryType: "EIP712Domain",
        types: e
    })
}
function Ri({data: t, primaryType: e, types: r}) {
    const n = ji({
        data: t,
        primaryType: e,
        types: r
    });
    return X(n)
}
function ji({data: t, primaryType: e, types: r}) {
    const n = [{
        type: "bytes32"
    }]
      , s = [Vc({
        primaryType: e,
        types: r
    })];
    for (const i of r[e]) {
        const [o,a] = Ui({
            types: r,
            name: i.name,
            type: i.type,
            value: t[i.name]
        });
        n.push(o),
        s.push(a)
    }
    return Ze(n, s)
}
function Vc({primaryType: t, types: e}) {
    const r = Ee(Xc({
        primaryType: t,
        types: e
    }));
    return X(r)
}
function Xc({primaryType: t, types: e}) {
    let r = "";
    const n = Ni({
        primaryType: t,
        types: e
    });
    n.delete(t);
    const s = [t, ...Array.from(n).sort()];
    for (const i of s)
        r += `${i}(${e[i].map(({name: o, type: a})=>`${a} ${o}`).join(",")})`;
    return r
}
function Ni({primaryType: t, types: e}, r=new Set) {
    const n = t.match(/^\w*/u)
      , s = n == null ? void 0 : n[0];
    if (r.has(s) || e[s] === void 0)
        return r;
    r.add(s);
    for (const i of e[s])
        Ni({
            primaryType: i.type,
            types: e
        }, r);
    return r
}
function Ui({types: t, name: e, type: r, value: n}) {
    if (t[r] !== void 0)
        return [{
            type: "bytes32"
        }, X(ji({
            data: n,
            primaryType: r,
            types: t
        }))];
    if (r === "bytes")
        return n = `0x${(n.length % 2 ? "0" : "") + n.slice(2)}`,
        [{
            type: "bytes32"
        }, X(n)];
    if (r === "string")
        return [{
            type: "bytes32"
        }, X(Ee(n))];
    if (r.lastIndexOf("]") === r.length - 1) {
        const s = r.slice(0, r.lastIndexOf("["))
          , i = n.map(o=>Ui({
            name: e,
            type: s,
            types: t,
            value: o
        }));
        return [{
            type: "bytes32"
        }, X(Ze(i.map(([o])=>o), i.map(([,o])=>o)))]
    }
    return [{
        type: r
    }, n]
}
function _i({domain: t, message: e, primaryType: r, types: n}) {
    const s = n
      , i = (o,a)=>{
        for (const l of o) {
            const {name: d, type: f} = l
              , h = f
              , y = a[d]
              , g = h.match(Qc);
            if (g && (typeof y == "number" || typeof y == "bigint")) {
                const [v,E,C] = g;
                $(y, {
                    signed: E === "int",
                    size: parseInt(C) / 8
                })
            }
            if (h === "address" && typeof y == "string" && !he(y))
                throw new Re({
                    address: y
                });
            const m = h.match(Hc);
            if (m) {
                const [v,E] = m;
                if (E && G(y) !== parseInt(E))
                    throw new Eo({
                        expectedSize: parseInt(E),
                        givenSize: G(y)
                    })
            }
            const w = s[h];
            w && i(w, y)
        }
    }
    ;
    if (s.EIP712Domain && t && i(s.EIP712Domain, t),
    r !== "EIP712Domain") {
        const o = s[r];
        i(o, e)
    }
}
function Di({domain: t}) {
    return [typeof (t == null ? void 0 : t.name) == "string" && {
        name: "name",
        type: "string"
    }, (t == null ? void 0 : t.version) && {
        name: "version",
        type: "string"
    }, typeof (t == null ? void 0 : t.chainId) == "number" && {
        name: "chainId",
        type: "uint256"
    }, (t == null ? void 0 : t.verifyingContract) && {
        name: "verifyingContract",
        type: "address"
    }, (t == null ? void 0 : t.salt) && {
        name: "salt",
        type: "bytes32"
    }].filter(Boolean)
}
const Ar = "/docs/contract/encodeDeployData";
function qi({abi: t, args: e, bytecode: r}) {
    if (!e || e.length === 0)
        return r;
    const n = t.find(i=>"type"in i && i.type === "constructor");
    if (!n)
        throw new po({
            docsPath: Ar
        });
    if (!("inputs"in n))
        throw new is({
            docsPath: Ar
        });
    if (!n.inputs || n.inputs.length === 0)
        throw new is({
            docsPath: Ar
        });
    const s = Ze(n.inputs, e);
    return pn([r, s])
}
const Zc = `Ethereum Signed Message:
`;
function Yc(t, e) {
    const r = typeof t == "string" ? we(t) : t.raw instanceof Uint8Array ? t.raw : Se(t.raw)
      , n = we(`${Zc}${r.length}`);
    return X(pe([n, r]), e)
}
function el(t) {
    return t.map(e=>({
        ...e,
        value: BigInt(e.value)
    }))
}
function tl(t) {
    return {
        ...t,
        balance: t.balance ? BigInt(t.balance) : void 0,
        nonce: t.nonce ? J(t.nonce) : void 0,
        storageProof: t.storageProof ? el(t.storageProof) : void 0
    }
}
async function rl(t, {address: e, blockNumber: r, blockTag: n, storageKeys: s}) {
    const i = n ?? "latest"
      , o = r !== void 0 ? $(r) : void 0
      , a = await t.request({
        method: "eth_getProof",
        params: [e, s, o || i]
    });
    return tl(a)
}
async function nl(t, {address: e, blockNumber: r, blockTag: n="latest", slot: s}) {
    const i = r !== void 0 ? $(r) : void 0;
    return await t.request({
        method: "eth_getStorageAt",
        params: [e, s, i || n]
    })
}
async function Un(t, {blockHash: e, blockNumber: r, blockTag: n, hash: s, index: i}) {
    var f, h, y;
    const o = n || "latest"
      , a = r !== void 0 ? $(r) : void 0;
    let l = null;
    if (s ? l = await t.request({
        method: "eth_getTransactionByHash",
        params: [s]
    }) : e ? l = await t.request({
        method: "eth_getTransactionByBlockHashAndIndex",
        params: [e, $(i)]
    }) : (a || o) && (l = await t.request({
        method: "eth_getTransactionByBlockNumberAndIndex",
        params: [a || o, $(i)]
    })),
    !l)
        throw new di({
            blockHash: e,
            blockNumber: r,
            blockTag: o,
            hash: s,
            index: i
        });
    return (((y = (h = (f = t.chain) == null ? void 0 : f.formatters) == null ? void 0 : h.transaction) == null ? void 0 : y.format) || rr)(l)
}
async function sl(t, {hash: e, transactionReceipt: r}) {
    const [n,s] = await Promise.all([M(t, $t, "getBlockNumber")({}), e ? M(t, Un, "getBlockNumber")({
        hash: e
    }) : void 0])
      , i = (r == null ? void 0 : r.blockNumber) || (s == null ? void 0 : s.blockNumber);
    return i ? n - i + 1n : 0n
}
async function Yr(t, {hash: e}) {
    var s, i, o;
    const r = await t.request({
        method: "eth_getTransactionReceipt",
        params: [e]
    });
    if (!r)
        throw new hi({
            hash: e
        });
    return (((o = (i = (s = t.chain) == null ? void 0 : s.formatters) == null ? void 0 : i.transactionReceipt) == null ? void 0 : o.format) || Vs)(r)
}
async function il(t, e) {
    var w;
    const {allowFailure: r=!0, batchSize: n, blockNumber: s, blockTag: i, contracts: o, multicallAddress: a} = e
      , l = n ?? (typeof ((w = t.batch) == null ? void 0 : w.multicall) == "object" && t.batch.multicall.batchSize || 1024);
    let d = a;
    if (!d) {
        if (!t.chain)
            throw new Error("client chain not configured. multicallAddress is required.");
        d = rt({
            blockNumber: s,
            chain: t.chain,
            contract: "multicall3"
        })
    }
    const f = [[]];
    let h = 0
      , y = 0;
    for (let v = 0; v < o.length; v++) {
        const {abi: E, address: C, args: P, functionName: O} = o[v];
        try {
            const I = Te({
                abi: E,
                args: P,
                functionName: O
            });
            y += (I.length - 2) / 2,
            l > 0 && y > l && f[h].length > 0 && (h++,
            y = (I.length - 2) / 2,
            f[h] = []),
            f[h] = [...f[h], {
                allowFailure: !0,
                callData: I,
                target: C
            }]
        } catch (I) {
            const A = Pt(I, {
                abi: E,
                address: C,
                args: P,
                docsPath: "/docs/contract/multicall",
                functionName: O
            });
            if (!r)
                throw A;
            f[h] = [...f[h], {
                allowFailure: !0,
                callData: "0x",
                target: C
            }]
        }
    }
    const g = await Promise.allSettled(f.map(v=>M(t, Fe, "readContract")({
        abi: Jr,
        address: d,
        args: [v],
        blockNumber: s,
        blockTag: i,
        functionName: "aggregate3"
    })))
      , m = [];
    for (let v = 0; v < g.length; v++) {
        const E = g[v];
        if (E.status === "rejected") {
            if (!r)
                throw E.reason;
            for (let P = 0; P < f[v].length; P++)
                m.push({
                    status: "failure",
                    error: E.reason,
                    result: void 0
                });
            continue
        }
        const C = E.value;
        for (let P = 0; P < C.length; P++) {
            const {returnData: O, success: I} = C[P]
              , {callData: A} = f[v][P]
              , {abi: k, address: B, functionName: R, args: V} = o[m.length];
            try {
                if (A === "0x")
                    throw new ar;
                if (!I)
                    throw new Pn({
                        data: O
                    });
                const z = tt({
                    abi: k,
                    args: V,
                    data: O,
                    functionName: R
                });
                m.push(r ? {
                    result: z,
                    status: "success"
                } : z)
            } catch (z) {
                const st = Pt(z, {
                    abi: k,
                    address: B,
                    args: V,
                    docsPath: "/docs/contract/multicall",
                    functionName: R
                });
                if (!r)
                    throw st;
                m.push({
                    error: st,
                    result: void 0,
                    status: "failure"
                })
            }
        }
    }
    if (m.length !== o.length)
        throw new T("multicall results mismatch");
    return m
}
const al = "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
BigInt(1);
BigInt(2);
function ol(t, e) {
    if (t.length !== e.length)
        return !1;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function ul(t, e) {
    const r = ie(t) ? Se(t) : t
      , n = ie(e) ? Se(e) : e;
    return ol(r, n)
}
async function Li(t, {address: e, hash: r, signature: n, ...s}) {
    const i = ie(n) ? n : Ee(n);
    try {
        const {data: o} = await M(t, Mt, "call")({
            data: qi({
                abi: Lu,
                args: [e, r, i],
                bytecode: al
            }),
            ...s
        });
        return ul(o ?? "0x0", "0x1")
    } catch (o) {
        if (o instanceof pi)
            return !1;
        throw o
    }
}
async function cl(t, {address: e, message: r, signature: n, ...s}) {
    const i = Yc(r);
    return Li(t, {
        address: e,
        hash: i,
        signature: n,
        ...s
    })
}
async function ll(t, {address: e, signature: r, message: n, primaryType: s, types: i, domain: o, ...a}) {
    const l = Kc({
        message: n,
        primaryType: s,
        types: i,
        domain: o
    });
    return Li(t, {
        address: e,
        hash: l,
        signature: r,
        ...a
    })
}
function zi(t, {emitOnBegin: e=!1, emitMissed: r=!1, onBlockNumber: n, onError: s, poll: i, pollingInterval: o=t.pollingInterval}) {
    const a = typeof i < "u" ? i : t.transport.type !== "webSocket";
    let l;
    return a ? (()=>{
        const h = Q(["watchBlockNumber", t.uid, e, r, o]);
        return nt(h, {
            onBlockNumber: n,
            onError: s
        }, y=>Bt(async()=>{
            var g;
            try {
                const m = await M(t, $t, "getBlockNumber")({
                    cacheTime: 0
                });
                if (l) {
                    if (m === l)
                        return;
                    if (m - l > 1 && r)
                        for (let w = l + 1n; w < m; w++)
                            y.onBlockNumber(w, l),
                            l = w
                }
                (!l || m > l) && (y.onBlockNumber(m, l),
                l = m)
            } catch (m) {
                (g = y.onError) == null || g.call(y, m)
            }
        }
        , {
            emitOnBegin: e,
            interval: o
        }))
    }
    )() : (()=>{
        let h = !0
          , y = ()=>h = !1;
        return (async()=>{
            try {
                const {unsubscribe: g} = await t.transport.subscribe({
                    params: ["newHeads"],
                    onData(m) {
                        var v;
                        if (!h)
                            return;
                        const w = be((v = m.result) == null ? void 0 : v.number);
                        n(w, l),
                        l = w
                    },
                    onError(m) {
                        s == null || s(m)
                    }
                });
                y = g,
                h || y()
            } catch (g) {
                s == null || s(g)
            }
        }
        )(),
        y
    }
    )()
}
async function fl(t, {confirmations: e=1, hash: r, onReplaced: n, pollingInterval: s=t.pollingInterval, timeout: i}) {
    const o = Q(["waitForTransactionReceipt", t.uid, r]);
    let a, l, d, f = !1;
    return new Promise((h,y)=>{
        i && setTimeout(()=>y(new Pu({
            hash: r
        })), i);
        const g = nt(o, {
            onReplaced: n,
            resolve: h,
            reject: y
        }, m=>{
            const w = M(t, zi, "watchBlockNumber")({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: s,
                async onBlockNumber(v) {
                    if (f)
                        return;
                    let E = v;
                    const C = P=>{
                        w(),
                        P(),
                        g()
                    }
                    ;
                    try {
                        if (d) {
                            if (e > 1 && (!d.blockNumber || E - d.blockNumber + 1n < e))
                                return;
                            C(()=>m.resolve(d));
                            return
                        }
                        if (a || (f = !0,
                        await Xr(async()=>{
                            a = await M(t, Un, "getTransaction")({
                                hash: r
                            }),
                            a.blockNumber && (E = a.blockNumber)
                        }
                        , {
                            delay: ({count: P})=>~~(1 << P) * 200,
                            retryCount: 6
                        }),
                        f = !1),
                        d = await M(t, Yr, "getTransactionReceipt")({
                            hash: r
                        }),
                        e > 1 && (!d.blockNumber || E - d.blockNumber + 1n < e))
                            return;
                        C(()=>m.resolve(d))
                    } catch (P) {
                        if (a && (P instanceof di || P instanceof hi))
                            try {
                                l = a,
                                f = !0;
                                const O = await Xr(()=>M(t, Ae, "getBlock")({
                                    blockNumber: E,
                                    includeTransactions: !0
                                }), {
                                    delay: ({count: k})=>~~(1 << k) * 200,
                                    retryCount: 6,
                                    shouldRetry: ({error: k})=>k instanceof mi
                                });
                                f = !1;
                                const I = O.transactions.find(({from: k, nonce: B})=>k === l.from && B === l.nonce);
                                if (!I || (d = await M(t, Yr, "getTransactionReceipt")({
                                    hash: I.hash
                                }),
                                e > 1 && (!d.blockNumber || E - d.blockNumber + 1n < e)))
                                    return;
                                let A = "replaced";
                                I.to === l.to && I.value === l.value ? A = "repriced" : I.from === I.to && I.value === 0n && (A = "cancelled"),
                                C(()=>{
                                    var k;
                                    (k = m.onReplaced) == null || k.call(m, {
                                        reason: A,
                                        replacedTransaction: l,
                                        transaction: I,
                                        transactionReceipt: d
                                    }),
                                    m.resolve(d)
                                }
                                )
                            } catch (O) {
                                C(()=>m.reject(O))
                            }
                        else
                            C(()=>m.reject(P))
                    }
                }
            })
        }
        )
    }
    )
}
function dl(t, {blockTag: e="latest", emitMissed: r=!1, emitOnBegin: n=!1, onBlock: s, onError: i, includeTransactions: o, poll: a, pollingInterval: l=t.pollingInterval}) {
    const d = typeof a < "u" ? a : t.transport.type !== "webSocket"
      , f = o ?? !1;
    let h;
    return d ? (()=>{
        const m = Q(["watchBlocks", t.uid, r, n, f, l]);
        return nt(m, {
            onBlock: s,
            onError: i
        }, w=>Bt(async()=>{
            var v;
            try {
                const E = await M(t, Ae, "getBlock")({
                    blockTag: e,
                    includeTransactions: f
                });
                if (E.number && (h != null && h.number)) {
                    if (E.number === h.number)
                        return;
                    if (E.number - h.number > 1 && r)
                        for (let C = (h == null ? void 0 : h.number) + 1n; C < E.number; C++) {
                            const P = await M(t, Ae, "getBlock")({
                                blockNumber: C,
                                includeTransactions: f
                            });
                            w.onBlock(P, h),
                            h = P
                        }
                }
                (!(h != null && h.number) || e === "pending" && !(E != null && E.number) || E.number && E.number > h.number) && (w.onBlock(E, h),
                h = E)
            } catch (E) {
                (v = w.onError) == null || v.call(w, E)
            }
        }
        , {
            emitOnBegin: n,
            interval: l
        }))
    }
    )() : (()=>{
        let m = !0
          , w = ()=>m = !1;
        return (async()=>{
            try {
                const {unsubscribe: v} = await t.transport.subscribe({
                    params: ["newHeads"],
                    onData(E) {
                        var O, I, A;
                        if (!m)
                            return;
                        const P = (((A = (I = (O = t.chain) == null ? void 0 : O.formatters) == null ? void 0 : I.block) == null ? void 0 : A.format) || dn)(E.result);
                        s(P, h),
                        h = P
                    },
                    onError(E) {
                        i == null || i(E)
                    }
                });
                w = v,
                m || w()
            } catch (v) {
                i == null || i(v)
            }
        }
        )(),
        w
    }
    )()
}
function hl(t, {address: e, args: r, batch: n=!0, event: s, events: i, onError: o, onLogs: a, poll: l, pollingInterval: d=t.pollingInterval, strict: f}) {
    const h = typeof l < "u" ? l : t.transport.type !== "webSocket"
      , y = f ?? !1;
    return h ? (()=>{
        const w = Q(["watchEvent", e, r, n, t.uid, s, d]);
        return nt(w, {
            onLogs: a,
            onError: o
        }, v=>{
            let E, C, P = !1;
            const O = Bt(async()=>{
                var I;
                if (!P) {
                    try {
                        C = await M(t, Ii, "createEventFilter")({
                            address: e,
                            args: r,
                            event: s,
                            events: i,
                            strict: y
                        })
                    } catch {}
                    P = !0;
                    return
                }
                try {
                    let A;
                    if (C)
                        A = await M(t, fr, "getFilterChanges")({
                            filter: C
                        });
                    else {
                        const k = await M(t, $t, "getBlockNumber")({});
                        E && E !== k ? A = await M(t, In, "getLogs")({
                            address: e,
                            args: r,
                            event: s,
                            events: i,
                            fromBlock: E + 1n,
                            toBlock: k
                        }) : A = [],
                        E = k
                    }
                    if (A.length === 0)
                        return;
                    if (n)
                        v.onLogs(A);
                    else
                        for (const k of A)
                            v.onLogs([k])
                } catch (A) {
                    C && A instanceof Ne && (P = !1),
                    (I = v.onError) == null || I.call(v, A)
                }
            }
            , {
                emitOnBegin: !0,
                interval: d
            });
            return async()=>{
                C && await M(t, dr, "uninstallFilter")({
                    filter: C
                }),
                O()
            }
        }
        )
    }
    )() : (()=>{
        let w = !0
          , v = ()=>w = !1;
        return (async()=>{
            try {
                const E = i ?? (s ? [s] : void 0);
                let C = [];
                E && (C = [E.flatMap(O=>kt({
                    abi: [O],
                    eventName: O.name,
                    args: r
                }))],
                s && (C = C[0]));
                const {unsubscribe: P} = await t.transport.subscribe({
                    params: ["logs", {
                        address: e,
                        topics: C
                    }],
                    onData(O) {
                        var A;
                        if (!w)
                            return;
                        const I = O.result;
                        try {
                            const {eventName: k, args: B} = It({
                                abi: E,
                                data: I.data,
                                topics: I.topics,
                                strict: y
                            })
                              , R = ae(I, {
                                args: B,
                                eventName: k
                            });
                            a([R])
                        } catch (k) {
                            let B, R;
                            if (k instanceof je || k instanceof Xe) {
                                if (f)
                                    return;
                                B = k.abiItem.name,
                                R = (A = k.abiItem.inputs) == null ? void 0 : A.some(z=>!("name"in z && z.name))
                            }
                            const V = ae(I, {
                                args: R ? [] : {},
                                eventName: B
                            });
                            a([V])
                        }
                    },
                    onError(O) {
                        o == null || o(O)
                    }
                });
                v = P,
                w || v()
            } catch (E) {
                o == null || o(E)
            }
        }
        )(),
        v
    }
    )()
}
function pl(t, {batch: e=!0, onError: r, onTransactions: n, poll: s, pollingInterval: i=t.pollingInterval}) {
    return (typeof s < "u" ? s : t.transport.type !== "webSocket") ? (()=>{
        const d = Q(["watchPendingTransactions", t.uid, e, i]);
        return nt(d, {
            onTransactions: n,
            onError: r
        }, f=>{
            let h;
            const y = Bt(async()=>{
                var g;
                try {
                    if (!h)
                        try {
                            h = await M(t, Mi, "createPendingTransactionFilter")({});
                            return
                        } catch (w) {
                            throw y(),
                            w
                        }
                    const m = await M(t, fr, "getFilterChanges")({
                        filter: h
                    });
                    if (m.length === 0)
                        return;
                    if (e)
                        f.onTransactions(m);
                    else
                        for (const w of m)
                            f.onTransactions([w])
                } catch (m) {
                    (g = f.onError) == null || g.call(f, m)
                }
            }
            , {
                emitOnBegin: !0,
                interval: i
            });
            return async()=>{
                h && await M(t, dr, "uninstallFilter")({
                    filter: h
                }),
                y()
            }
        }
        )
    }
    )() : (()=>{
        let d = !0
          , f = ()=>d = !1;
        return (async()=>{
            try {
                const {unsubscribe: h} = await t.transport.subscribe({
                    params: ["newPendingTransactions"],
                    onData(y) {
                        if (!d)
                            return;
                        const g = y.result;
                        n([g])
                    },
                    onError(y) {
                        r == null || r(y)
                    }
                });
                f = h,
                d || f()
            } catch (h) {
                r == null || r(h)
            }
        }
        )(),
        f
    }
    )()
}
function ml(t) {
    return {
        call: e=>Mt(t, e),
        createBlockFilter: ()=>Mc(t),
        createContractEventFilter: e=>ui(t, e),
        createEventFilter: e=>Ii(t, e),
        createPendingTransactionFilter: ()=>Mi(t),
        estimateContractGas: e=>Nu(t, e),
        estimateGas: e=>On(t, e),
        getBalance: e=>Bc(t, e),
        getBlock: e=>Ae(t, e),
        getBlockNumber: e=>$t(t, e),
        getBlockTransactionCount: e=>$c(t, e),
        getBytecode: e=>Rc(t, e),
        getChainId: ()=>St(t),
        getContractEvents: e=>gi(t, e),
        getEnsAddress: e=>yc(t, e),
        getEnsAvatar: e=>Tc(t, e),
        getEnsName: e=>Oc(t, e),
        getEnsResolver: e=>Ic(t, e),
        getEnsText: e=>Oi(t, e),
        getFeeHistory: e=>Nc(t, e),
        estimateFeesPerGas: e=>Ru(t, e),
        getFilterChanges: e=>fr(t, e),
        getFilterLogs: e=>Uc(t, e),
        getGasPrice: ()=>Tn(t),
        getLogs: e=>In(t, e),
        getProof: e=>rl(t, e),
        estimateMaxPriorityFeePerGas: e=>$u(t, e),
        getStorageAt: e=>nl(t, e),
        getTransaction: e=>Un(t, e),
        getTransactionConfirmations: e=>sl(t, e),
        getTransactionCount: e=>bi(t, e),
        getTransactionReceipt: e=>Yr(t, e),
        multicall: e=>il(t, e),
        prepareTransactionRequest: e=>lr(t, e),
        readContract: e=>Fe(t, e),
        sendRawTransaction: e=>Bn(t, e),
        simulateContract: e=>Ku(t, e),
        verifyMessage: e=>cl(t, e),
        verifyTypedData: e=>ll(t, e),
        uninstallFilter: e=>dr(t, e),
        waitForTransactionReceipt: e=>fl(t, e),
        watchBlocks: e=>dl(t, e),
        watchBlockNumber: e=>zi(t, e),
        watchContractEvent: e=>tc(t, e),
        watchEvent: e=>hl(t, e),
        watchPendingTransactions: e=>pl(t, e)
    }
}
function xs(t) {
    const {key: e="public", name: r="Public Client"} = t;
    return Ci({
        ...t,
        key: e,
        name: r,
        type: "publicClient"
    }).extend(ml)
}
function yl(t, {abi: e, args: r, bytecode: n, ...s}) {
    const i = qi({
        abi: e,
        args: r,
        bytecode: n
    });
    return $n(t, {
        ...s,
        data: i
    })
}
async function bl(t) {
    var r;
    return ((r = t.account) == null ? void 0 : r.type) === "local" ? [t.account.address] : (await t.request({
        method: "eth_accounts"
    })).map(n=>xn(n))
}
async function gl(t) {
    return await t.request({
        method: "wallet_getPermissions"
    })
}
async function wl(t) {
    return (await t.request({
        method: "eth_requestAccounts"
    })).map(r=>ct(r))
}
async function vl(t, e) {
    return t.request({
        method: "wallet_requestPermissions",
        params: [e]
    })
}
async function xl(t, {account: e=t.account, message: r}) {
    if (!e)
        throw new et({
            docsPath: "/docs/actions/wallet/signMessage"
        });
    const n = ne(e);
    if (n.type === "local")
        return n.signMessage({
            message: r
        });
    const s = typeof r == "string" ? un(r) : r.raw instanceof Uint8Array ? Ee(r.raw) : r.raw;
    return t.request({
        method: "personal_sign",
        params: [s, n.address]
    })
}
async function El(t, e) {
    var d, f, h, y;
    const {account: r=t.account, chain: n=t.chain, ...s} = e;
    if (!r)
        throw new et({
            docsPath: "/docs/actions/wallet/signTransaction"
        });
    const i = ne(r);
    Ot({
        account: i,
        ...e
    });
    const o = await M(t, St, "getChainId")({});
    n !== null && Ei({
        currentChainId: o,
        chain: n
    });
    const a = (n == null ? void 0 : n.formatters) || ((d = t.chain) == null ? void 0 : d.formatters)
      , l = ((f = a == null ? void 0 : a.transactionRequest) == null ? void 0 : f.format) || nr;
    return i.type === "local" ? i.signTransaction({
        ...s,
        chainId: o
    }, {
        serializer: (y = (h = t.chain) == null ? void 0 : h.serializers) == null ? void 0 : y.transaction
    }) : await t.request({
        method: "eth_signTransaction",
        params: [{
            ...l(s),
            chainId: $(o),
            from: i.address
        }]
    })
}
async function Cl(t, {account: e=t.account, domain: r, message: n, primaryType: s, types: i}) {
    if (!e)
        throw new et({
            docsPath: "/docs/actions/wallet/signTypedData"
        });
    const o = ne(e)
      , a = {
        EIP712Domain: Di({
            domain: r
        }),
        ...i
    };
    if (_i({
        domain: r,
        message: n,
        primaryType: s,
        types: a
    }),
    o.type === "local")
        return o.signTypedData({
            domain: r,
            primaryType: s,
            types: a,
            message: n
        });
    const l = Q({
        domain: r ?? {},
        primaryType: s,
        types: a,
        message: n
    }, (d,f)=>ie(f) ? f.toLowerCase() : f);
    return t.request({
        method: "eth_signTypedData_v4",
        params: [o.address, l]
    })
}
async function Pl(t, {id: e}) {
    await t.request({
        method: "wallet_switchEthereumChain",
        params: [{
            chainId: $(e)
        }]
    })
}
async function Sl(t, e) {
    return await t.request({
        method: "wallet_watchAsset",
        params: e
    })
}
function Al(t) {
    return {
        addChain: e=>sc(t, e),
        deployContract: e=>yl(t, e),
        getAddresses: ()=>bl(t),
        getChainId: ()=>St(t),
        getPermissions: ()=>gl(t),
        prepareTransactionRequest: e=>lr(t, e),
        requestAddresses: ()=>wl(t),
        requestPermissions: e=>vl(t, e),
        sendRawTransaction: e=>Bn(t, e),
        sendTransaction: e=>$n(t, e),
        signMessage: e=>xl(t, e),
        signTransaction: e=>El(t, e),
        signTypedData: e=>Cl(t, e),
        switchChain: e=>Pl(t, e),
        watchAsset: e=>Sl(t, e),
        writeContract: e=>nc(t, e)
    }
}
function Fl(t) {
    const {key: e="wallet", name: r="Wallet Client", transport: n} = t;
    return Ci({
        ...t,
        key: e,
        name: r,
        transport: i=>n({
            ...i,
            retryCount: 0
        }),
        type: "walletClient"
    }).extend(Al)
}
function kl(t, e={}) {
    const {key: r="webSocket", name: n="WebSocket JSON-RPC", retryDelay: s} = e;
    return ({chain: i, retryCount: o, timeout: a})=>{
        var h;
        const l = e.retryCount ?? o
          , d = a ?? e.timeout ?? 1e4
          , f = t || ((h = i == null ? void 0 : i.rpcUrls.default.webSocket) == null ? void 0 : h[0]);
        if (!f)
            throw new Si;
        return hr({
            key: r,
            name: n,
            async request({method: y, params: g}) {
                const m = {
                    method: y,
                    params: g
                }
                  , w = await Sr(f)
                  , {error: v, result: E} = await ze.webSocketAsync(w, {
                    body: m,
                    timeout: d
                });
                if (v)
                    throw new Sn({
                        body: m,
                        error: v,
                        url: f
                    });
                return E
            },
            retryCount: l,
            retryDelay: s,
            timeout: d,
            type: "webSocket"
        }, {
            getSocket() {
                return Sr(f)
            },
            async subscribe({params: y, onData: g, onError: m}) {
                const w = await Sr(f)
                  , {result: v} = await new Promise((E,C)=>ze.webSocket(w, {
                    body: {
                        method: "eth_subscribe",
                        params: y
                    },
                    onResponse(P) {
                        if (P.error) {
                            C(P.error),
                            m == null || m(P.error);
                            return
                        }
                        if (typeof P.id == "number") {
                            E(P);
                            return
                        }
                        P.method === "eth_subscription" && g(P.params)
                    }
                }));
                return {
                    subscriptionId: v,
                    async unsubscribe() {
                        return new Promise(E=>ze.webSocket(w, {
                            body: {
                                method: "eth_unsubscribe",
                                params: [v]
                            },
                            onResponse: E
                        }))
                    }
                }
            }
        })
    }
}
const Tl = re({
    id: 5,
    network: "goerli",
    name: "Goerli",
    nativeCurrency: {
        name: "Goerli Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        alchemy: {
            http: ["https://eth-goerli.g.alchemy.com/v2"],
            webSocket: ["wss://eth-goerli.g.alchemy.com/v2"]
        },
        infura: {
            http: ["https://goerli.infura.io/v3"],
            webSocket: ["wss://goerli.infura.io/ws/v3"]
        },
        default: {
            http: ["https://rpc.ankr.com/eth_goerli"]
        },
        public: {
            http: ["https://rpc.ankr.com/eth_goerli"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Etherscan",
            url: "https://goerli.etherscan.io"
        },
        default: {
            name: "Etherscan",
            url: "https://goerli.etherscan.io"
        }
    },
    contracts: {
        ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        ensUniversalResolver: {
            address: "0x56522D00C410a43BFfDF00a9A569489297385790",
            blockCreated: 8765204
        },
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 6507670
        }
    },
    testnet: !0
})
  , Ol = re({
    id: 1,
    network: "homestead",
    name: "Ethereum",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        alchemy: {
            http: ["https://eth-mainnet.g.alchemy.com/v2"],
            webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
        },
        infura: {
            http: ["https://mainnet.infura.io/v3"],
            webSocket: ["wss://mainnet.infura.io/ws/v3"]
        },
        default: {
            http: ["https://cloudflare-eth.com"]
        },
        public: {
            http: ["https://cloudflare-eth.com"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Etherscan",
            url: "https://etherscan.io"
        },
        default: {
            name: "Etherscan",
            url: "https://etherscan.io"
        }
    },
    contracts: {
        ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        ensUniversalResolver: {
            address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
            blockCreated: 16966585
        },
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 14353601
        }
    }
})
  , Jd = re({
    id: 10,
    name: "OP Mainnet",
    network: "optimism",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        alchemy: {
            http: ["https://opt-mainnet.g.alchemy.com/v2"],
            webSocket: ["wss://opt-mainnet.g.alchemy.com/v2"]
        },
        infura: {
            http: ["https://optimism-mainnet.infura.io/v3"],
            webSocket: ["wss://optimism-mainnet.infura.io/ws/v3"]
        },
        default: {
            http: ["https://mainnet.optimism.io"]
        },
        public: {
            http: ["https://mainnet.optimism.io"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Etherscan",
            url: "https://optimistic.etherscan.io"
        },
        default: {
            name: "Optimism Explorer",
            url: "https://explorer.optimism.io"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 4286263
        }
    }
}, {
    formatters: hn
})
  , Vd = re({
    id: 137,
    name: "Polygon",
    network: "matic",
    nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
    },
    rpcUrls: {
        alchemy: {
            http: ["https://polygon-mainnet.g.alchemy.com/v2"],
            webSocket: ["wss://polygon-mainnet.g.alchemy.com/v2"]
        },
        infura: {
            http: ["https://polygon-mainnet.infura.io/v3"],
            webSocket: ["wss://polygon-mainnet.infura.io/ws/v3"]
        },
        default: {
            http: ["https://polygon-rpc.com"]
        },
        public: {
            http: ["https://polygon-rpc.com"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "PolygonScan",
            url: "https://polygonscan.com"
        },
        default: {
            name: "PolygonScan",
            url: "https://polygonscan.com"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 25770160
        }
    }
})
  , Xd = re({
    id: 11155111,
    network: "sepolia",
    name: "Sepolia",
    nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "SEP",
        decimals: 18
    },
    rpcUrls: {
        alchemy: {
            http: ["https://eth-sepolia.g.alchemy.com/v2"],
            webSocket: ["wss://eth-sepolia.g.alchemy.com/v2"]
        },
        infura: {
            http: ["https://sepolia.infura.io/v3"],
            webSocket: ["wss://sepolia.infura.io/ws/v3"]
        },
        default: {
            http: ["https://rpc.sepolia.org"]
        },
        public: {
            http: ["https://rpc.sepolia.org"]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io"
        },
        default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 751532
        },
        ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        ensUniversalResolver: {
            address: "0x21B000Fd62a880b2125A61e36a284BB757b76025",
            blockCreated: 3914906
        }
    },
    testnet: !0
});
var Il = class extends Error {
    constructor({chainId: t, connectorId: e}) {
        super(`Chain "${t}" not configured for connector "${e}".`),
        this.name = "ChainNotConfiguredForConnectorError"
    }
}
  , le = class extends Error {
    constructor() {
        super(...arguments),
        this.name = "ConnectorNotFoundError",
        this.message = "Connector not found"
    }
}
;
function Es(t) {
    return typeof t == "string" ? Number.parseInt(t, t.trim().substring(0, 2) === "0x" ? 16 : 10) : typeof t == "bigint" ? Number(t) : t
}
var Gi = {
    exports: {}
};
(function(t) {
    var e = Object.prototype.hasOwnProperty
      , r = "~";
    function n() {}
    Object.create && (n.prototype = Object.create(null),
    new n().__proto__ || (r = !1));
    function s(l, d, f) {
        this.fn = l,
        this.context = d,
        this.once = f || !1
    }
    function i(l, d, f, h, y) {
        if (typeof f != "function")
            throw new TypeError("The listener must be a function");
        var g = new s(f,h || l,y)
          , m = r ? r + d : d;
        return l._events[m] ? l._events[m].fn ? l._events[m] = [l._events[m], g] : l._events[m].push(g) : (l._events[m] = g,
        l._eventsCount++),
        l
    }
    function o(l, d) {
        --l._eventsCount === 0 ? l._events = new n : delete l._events[d]
    }
    function a() {
        this._events = new n,
        this._eventsCount = 0
    }
    a.prototype.eventNames = function() {
        var d = [], f, h;
        if (this._eventsCount === 0)
            return d;
        for (h in f = this._events)
            e.call(f, h) && d.push(r ? h.slice(1) : h);
        return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(f)) : d
    }
    ,
    a.prototype.listeners = function(d) {
        var f = r ? r + d : d
          , h = this._events[f];
        if (!h)
            return [];
        if (h.fn)
            return [h.fn];
        for (var y = 0, g = h.length, m = new Array(g); y < g; y++)
            m[y] = h[y].fn;
        return m
    }
    ,
    a.prototype.listenerCount = function(d) {
        var f = r ? r + d : d
          , h = this._events[f];
        return h ? h.fn ? 1 : h.length : 0
    }
    ,
    a.prototype.emit = function(d, f, h, y, g, m) {
        var w = r ? r + d : d;
        if (!this._events[w])
            return !1;
        var v = this._events[w], E = arguments.length, C, P;
        if (v.fn) {
            switch (v.once && this.removeListener(d, v.fn, void 0, !0),
            E) {
            case 1:
                return v.fn.call(v.context),
                !0;
            case 2:
                return v.fn.call(v.context, f),
                !0;
            case 3:
                return v.fn.call(v.context, f, h),
                !0;
            case 4:
                return v.fn.call(v.context, f, h, y),
                !0;
            case 5:
                return v.fn.call(v.context, f, h, y, g),
                !0;
            case 6:
                return v.fn.call(v.context, f, h, y, g, m),
                !0
            }
            for (P = 1,
            C = new Array(E - 1); P < E; P++)
                C[P - 1] = arguments[P];
            v.fn.apply(v.context, C)
        } else {
            var O = v.length, I;
            for (P = 0; P < O; P++)
                switch (v[P].once && this.removeListener(d, v[P].fn, void 0, !0),
                E) {
                case 1:
                    v[P].fn.call(v[P].context);
                    break;
                case 2:
                    v[P].fn.call(v[P].context, f);
                    break;
                case 3:
                    v[P].fn.call(v[P].context, f, h);
                    break;
                case 4:
                    v[P].fn.call(v[P].context, f, h, y);
                    break;
                default:
                    if (!C)
                        for (I = 1,
                        C = new Array(E - 1); I < E; I++)
                            C[I - 1] = arguments[I];
                    v[P].fn.apply(v[P].context, C)
                }
        }
        return !0
    }
    ,
    a.prototype.on = function(d, f, h) {
        return i(this, d, f, h, !1)
    }
    ,
    a.prototype.once = function(d, f, h) {
        return i(this, d, f, h, !0)
    }
    ,
    a.prototype.removeListener = function(d, f, h, y) {
        var g = r ? r + d : d;
        if (!this._events[g])
            return this;
        if (!f)
            return o(this, g),
            this;
        var m = this._events[g];
        if (m.fn)
            m.fn === f && (!y || m.once) && (!h || m.context === h) && o(this, g);
        else {
            for (var w = 0, v = [], E = m.length; w < E; w++)
                (m[w].fn !== f || y && !m[w].once || h && m[w].context !== h) && v.push(m[w]);
            v.length ? this._events[g] = v.length === 1 ? v[0] : v : o(this, g)
        }
        return this
    }
    ,
    a.prototype.removeAllListeners = function(d) {
        var f;
        return d ? (f = r ? r + d : d,
        this._events[f] && o(this, f)) : (this._events = new n,
        this._eventsCount = 0),
        this
    }
    ,
    a.prototype.off = a.prototype.removeListener,
    a.prototype.addListener = a.prototype.on,
    a.prefixed = r,
    a.EventEmitter = a,
    t.exports = a
}
)(Gi);
var Ml = Gi.exports;
const Bl = _s(Ml);
var _n = (t,e,r)=>{
    if (!e.has(t))
        throw TypeError("Cannot " + r)
}
  , $l = (t,e,r)=>(_n(t, e, "read from private field"),
r ? r.call(t) : e.get(t))
  , Rl = (t,e,r)=>{
    if (e.has(t))
        throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, r)
}
  , jl = (t,e,r,n)=>(_n(t, e, "write to private field"),
e.set(t, r),
r)
  , Zd = (t,e,r)=>(_n(t, e, "access private method"),
r)
  , Nl = class extends Bl {
    constructor({chains: t=[Ol, Tl], options: e}) {
        super(),
        this.chains = t,
        this.options = e
    }
    getBlockExplorerUrls(t) {
        const {default: e, ...r} = t.blockExplorers ?? {};
        if (e)
            return [e.url, ...Object.values(r).map(n=>n.url)]
    }
    isChainUnsupported(t) {
        return !this.chains.some(e=>e.id === t)
    }
    setStorage(t) {
        this.storage = t
    }
}
;
function Ul(t) {
    var r;
    if (!t)
        return "Injected";
    const e = n=>{
        if (n.isApexWallet)
            return "Apex Wallet";
        if (n.isAvalanche)
            return "Core Wallet";
        if (n.isBackpack)
            return "Backpack";
        if (n.isBifrost)
            return "Bifrost Wallet";
        if (n.isBitKeep)
            return "BitKeep";
        if (n.isBitski)
            return "Bitski";
        if (n.isBlockWallet)
            return "BlockWallet";
        if (n.isBraveWallet)
            return "Brave Wallet";
        if (n.isCoin98)
            return "Coin98 Wallet";
        if (n.isCoinbaseWallet)
            return "Coinbase Wallet";
        if (n.isDawn)
            return "Dawn Wallet";
        if (n.isDefiant)
            return "Defiant";
        if (n.isDesig)
            return "Desig Wallet";
        if (n.isEnkrypt)
            return "Enkrypt";
        if (n.isExodus)
            return "Exodus";
        if (n.isFordefi)
            return "Fordefi";
        if (n.isFrame)
            return "Frame";
        if (n.isFrontier)
            return "Frontier Wallet";
        if (n.isGamestop)
            return "GameStop Wallet";
        if (n.isHaqqWallet)
            return "HAQQ Wallet";
        if (n.isHyperPay)
            return "HyperPay Wallet";
        if (n.isImToken)
            return "ImToken";
        if (n.isHaloWallet)
            return "Halo Wallet";
        if (n.isKuCoinWallet)
            return "KuCoin Wallet";
        if (n.isMathWallet)
            return "MathWallet";
        if (n.isNovaWallet)
            return "Nova Wallet";
        if (n.isOkxWallet || n.isOKExWallet)
            return "OKX Wallet";
        if (n.isOktoWallet)
            return "Okto Wallet";
        if (n.isOneInchIOSWallet || n.isOneInchAndroidWallet)
            return "1inch Wallet";
        if (n.isOneKey)
            return "OneKey Wallet";
        if (n.isOpera)
            return "Opera";
        if (n.isPhantom)
            return "Phantom";
        if (n.isPortal)
            return "Ripio Portal";
        if (n.isRabby)
            return "Rabby Wallet";
        if (n.isRainbow)
            return "Rainbow";
        if (n.isSafePal)
            return "SafePal Wallet";
        if (n.isStatus)
            return "Status";
        if (n.isSubWallet)
            return "SubWallet";
        if (n.isTalisman)
            return "Talisman";
        if (n.isTally)
            return "Taho";
        if (n.isTokenPocket)
            return "TokenPocket";
        if (n.isTokenary)
            return "Tokenary";
        if (n.isTrust || n.isTrustWallet)
            return "Trust Wallet";
        if (n.isTTWallet)
            return "TTWallet";
        if (n.isXDEFI)
            return "XDEFI Wallet";
        if (n.isZeal)
            return "Zeal";
        if (n.isZerion)
            return "Zerion";
        if (n.isMetaMask)
            return "MetaMask"
    }
    ;
    if ((r = t.providers) != null && r.length) {
        const n = new Set;
        let s = 1;
        for (const o of t.providers) {
            let a = e(o);
            a || (a = `Unknown Wallet #${s}`,
            s += 1),
            n.add(a)
        }
        const i = [...n];
        return i.length ? i : i[0] ?? "Injected"
    }
    return e(t) ?? "Injected"
}
var Ht, _l = class extends Nl {
    constructor({chains: t, options: e}={}) {
        const r = {
            shimDisconnect: !0,
            getProvider() {
                if (typeof window > "u")
                    return;
                const s = window.ethereum;
                return s != null && s.providers && s.providers.length > 0 ? s.providers[0] : s
            },
            ...e
        };
        super({
            chains: t,
            options: r
        }),
        this.id = "injected",
        Rl(this, Ht, void 0),
        this.shimDisconnectKey = `${this.id}.shimDisconnect`,
        this.onAccountsChanged = s=>{
            s.length === 0 ? this.emit("disconnect") : this.emit("change", {
                account: ct(s[0])
            })
        }
        ,
        this.onChainChanged = s=>{
            const i = Es(s)
              , o = this.isChainUnsupported(i);
            this.emit("change", {
                chain: {
                    id: i,
                    unsupported: o
                }
            })
        }
        ,
        this.onDisconnect = async s=>{
            var i;
            s.code === 1013 && await this.getProvider() && await this.getAccount() || (this.emit("disconnect"),
            this.options.shimDisconnect && ((i = this.storage) == null || i.removeItem(this.shimDisconnectKey)))
        }
        ;
        const n = r.getProvider();
        if (typeof r.name == "string")
            this.name = r.name;
        else if (n) {
            const s = Ul(n);
            r.name ? this.name = r.name(s) : typeof s == "string" ? this.name = s : this.name = s[0]
        } else
            this.name = "Injected";
        this.ready = !!n
    }
    async connect({chainId: t}={}) {
        var e;
        try {
            const r = await this.getProvider();
            if (!r)
                throw new le;
            r.on && (r.on("accountsChanged", this.onAccountsChanged),
            r.on("chainChanged", this.onChainChanged),
            r.on("disconnect", this.onDisconnect)),
            this.emit("message", {
                type: "connecting"
            });
            const n = await r.request({
                method: "eth_requestAccounts"
            })
              , s = ct(n[0]);
            let i = await this.getChainId()
              , o = this.isChainUnsupported(i);
            return t && i !== t && (i = (await this.switchChain(t)).id,
            o = this.isChainUnsupported(i)),
            this.options.shimDisconnect && ((e = this.storage) == null || e.setItem(this.shimDisconnectKey, !0)),
            {
                account: s,
                chain: {
                    id: i,
                    unsupported: o
                }
            }
        } catch (r) {
            throw this.isUserRejectedRequestError(r) ? new de(r) : r.code === -32002 ? new We(r) : r
        }
    }
    async disconnect() {
        var e;
        const t = await this.getProvider();
        t != null && t.removeListener && (t.removeListener("accountsChanged", this.onAccountsChanged),
        t.removeListener("chainChanged", this.onChainChanged),
        t.removeListener("disconnect", this.onDisconnect),
        this.options.shimDisconnect && ((e = this.storage) == null || e.removeItem(this.shimDisconnectKey)))
    }
    async getAccount() {
        const t = await this.getProvider();
        if (!t)
            throw new le;
        const e = await t.request({
            method: "eth_accounts"
        });
        return ct(e[0])
    }
    async getChainId() {
        const t = await this.getProvider();
        if (!t)
            throw new le;
        return t.request({
            method: "eth_chainId"
        }).then(Es)
    }
    async getProvider() {
        const t = this.options.getProvider();
        return t && jl(this, Ht, t),
        $l(this, Ht)
    }
    async getWalletClient({chainId: t}={}) {
        const [e,r] = await Promise.all([this.getProvider(), this.getAccount()])
          , n = this.chains.find(s=>s.id === t);
        if (!e)
            throw new Error("provider is required.");
        return Fl({
            account: r,
            chain: n,
            transport: oc(e)
        })
    }
    async isAuthorized() {
        var t;
        try {
            if (this.options.shimDisconnect && !((t = this.storage) != null && t.getItem(this.shimDisconnectKey)))
                return !1;
            if (!await this.getProvider())
                throw new le;
            return !!await this.getAccount()
        } catch {
            return !1
        }
    }
    async switchChain(t) {
        var n, s, i;
        const e = await this.getProvider();
        if (!e)
            throw new le;
        const r = $(t);
        try {
            return await Promise.all([e.request({
                method: "wallet_switchEthereumChain",
                params: [{
                    chainId: r
                }]
            }), new Promise(o=>this.on("change", ({chain: a})=>{
                (a == null ? void 0 : a.id) === t && o()
            }
            ))]),
            this.chains.find(o=>o.id === t) ?? {
                id: t,
                name: `Chain ${r}`,
                network: `${r}`,
                nativeCurrency: {
                    name: "Ether",
                    decimals: 18,
                    symbol: "ETH"
                },
                rpcUrls: {
                    default: {
                        http: [""]
                    },
                    public: {
                        http: [""]
                    }
                }
            }
        } catch (o) {
            const a = this.chains.find(l=>l.id === t);
            if (!a)
                throw new Il({
                    chainId: t,
                    connectorId: this.id
                });
            if (o.code === 4902 || ((s = (n = o == null ? void 0 : o.data) == null ? void 0 : n.originalError) == null ? void 0 : s.code) === 4902)
                try {
                    if (await e.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: r,
                            chainName: a.name,
                            nativeCurrency: a.nativeCurrency,
                            rpcUrls: [((i = a.rpcUrls.public) == null ? void 0 : i.http[0]) ?? ""],
                            blockExplorerUrls: this.getBlockExplorerUrls(a)
                        }]
                    }),
                    await this.getChainId() !== t)
                        throw new de(new Error("User rejected switch after adding network."));
                    return a
                } catch (l) {
                    throw new de(l)
                }
            throw this.isUserRejectedRequestError(o) ? new de(o) : new He(o)
        }
    }
    async watchAsset({address: t, decimals: e=18, image: r, symbol: n}) {
        const s = await this.getProvider();
        if (!s)
            throw new le;
        return s.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: {
                    address: t,
                    decimals: e,
                    image: r,
                    symbol: n
                }
            }
        })
    }
    isUserRejectedRequestError(t) {
        return t.code === 4001
    }
}
;
Ht = new WeakMap;
var Dn = (t,e,r)=>{
    if (!e.has(t))
        throw TypeError("Cannot " + r)
}
  , Fr = (t,e,r)=>(Dn(t, e, "read from private field"),
e.get(t))
  , kr = (t,e,r)=>{
    if (e.has(t))
        throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, r)
}
  , Lt = (t,e,r,n)=>(Dn(t, e, "write to private field"),
e.set(t, r),
r)
  , Dl = (t,e,r)=>(Dn(t, e, "access private method"),
r)
  , ql = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const Ll = t=>(e,r,n)=>{
    const s = n.subscribe;
    return n.subscribe = (o,a,l)=>{
        let d = o;
        if (a) {
            const f = (l == null ? void 0 : l.equalityFn) || Object.is;
            let h = o(n.getState());
            d = y=>{
                const g = o(y);
                if (!f(h, g)) {
                    const m = h;
                    a(h = g, m)
                }
            }
            ,
            l != null && l.fireImmediately && a(h, h)
        }
        return s(d)
    }
    ,
    t(e, r, n)
}
  , zl = Ll;
function Gl(t, e) {
    let r;
    try {
        r = t()
    } catch {
        return
    }
    return {
        getItem: s=>{
            var i;
            const o = l=>l === null ? null : JSON.parse(l, void 0)
              , a = (i = r.getItem(s)) != null ? i : null;
            return a instanceof Promise ? a.then(o) : o(a)
        }
        ,
        setItem: (s,i)=>r.setItem(s, JSON.stringify(i, void 0)),
        removeItem: s=>r.removeItem(s)
    }
}
const At = t=>e=>{
    try {
        const r = t(e);
        return r instanceof Promise ? r : {
            then(n) {
                return At(n)(r)
            },
            catch(n) {
                return this
            }
        }
    } catch (r) {
        return {
            then(n) {
                return this
            },
            catch(n) {
                return At(n)(r)
            }
        }
    }
}
  , Wl = (t,e)=>(r,n,s)=>{
    let i = {
        getStorage: ()=>localStorage,
        serialize: JSON.stringify,
        deserialize: JSON.parse,
        partialize: v=>v,
        version: 0,
        merge: (v,E)=>({
            ...E,
            ...v
        }),
        ...e
    }
      , o = !1;
    const a = new Set
      , l = new Set;
    let d;
    try {
        d = i.getStorage()
    } catch {}
    if (!d)
        return t((...v)=>{
            console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),
            r(...v)
        }
        , n, s);
    const f = At(i.serialize)
      , h = ()=>{
        const v = i.partialize({
            ...n()
        });
        let E;
        const C = f({
            state: v,
            version: i.version
        }).then(P=>d.setItem(i.name, P)).catch(P=>{
            E = P
        }
        );
        if (E)
            throw E;
        return C
    }
      , y = s.setState;
    s.setState = (v,E)=>{
        y(v, E),
        h()
    }
    ;
    const g = t((...v)=>{
        r(...v),
        h()
    }
    , n, s);
    let m;
    const w = ()=>{
        var v;
        if (!d)
            return;
        o = !1,
        a.forEach(C=>C(n()));
        const E = ((v = i.onRehydrateStorage) == null ? void 0 : v.call(i, n())) || void 0;
        return At(d.getItem.bind(d))(i.name).then(C=>{
            if (C)
                return i.deserialize(C)
        }
        ).then(C=>{
            if (C)
                if (typeof C.version == "number" && C.version !== i.version) {
                    if (i.migrate)
                        return i.migrate(C.state, C.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                } else
                    return C.state
        }
        ).then(C=>{
            var P;
            return m = i.merge(C, (P = n()) != null ? P : g),
            r(m, !0),
            h()
        }
        ).then(()=>{
            E == null || E(m, void 0),
            o = !0,
            l.forEach(C=>C(m))
        }
        ).catch(C=>{
            E == null || E(void 0, C)
        }
        )
    }
    ;
    return s.persist = {
        setOptions: v=>{
            i = {
                ...i,
                ...v
            },
            v.getStorage && (d = v.getStorage())
        }
        ,
        clearStorage: ()=>{
            d == null || d.removeItem(i.name)
        }
        ,
        getOptions: ()=>i,
        rehydrate: ()=>w(),
        hasHydrated: ()=>o,
        onHydrate: v=>(a.add(v),
        ()=>{
            a.delete(v)
        }
        ),
        onFinishHydration: v=>(l.add(v),
        ()=>{
            l.delete(v)
        }
        )
    },
    w(),
    m || g
}
  , Hl = (t,e)=>(r,n,s)=>{
    let i = {
        storage: Gl(()=>localStorage),
        partialize: w=>w,
        version: 0,
        merge: (w,v)=>({
            ...v,
            ...w
        }),
        ...e
    }
      , o = !1;
    const a = new Set
      , l = new Set;
    let d = i.storage;
    if (!d)
        return t((...w)=>{
            console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),
            r(...w)
        }
        , n, s);
    const f = ()=>{
        const w = i.partialize({
            ...n()
        });
        return d.setItem(i.name, {
            state: w,
            version: i.version
        })
    }
      , h = s.setState;
    s.setState = (w,v)=>{
        h(w, v),
        f()
    }
    ;
    const y = t((...w)=>{
        r(...w),
        f()
    }
    , n, s);
    s.getInitialState = ()=>y;
    let g;
    const m = ()=>{
        var w, v;
        if (!d)
            return;
        o = !1,
        a.forEach(C=>{
            var P;
            return C((P = n()) != null ? P : y)
        }
        );
        const E = ((v = i.onRehydrateStorage) == null ? void 0 : v.call(i, (w = n()) != null ? w : y)) || void 0;
        return At(d.getItem.bind(d))(i.name).then(C=>{
            if (C)
                if (typeof C.version == "number" && C.version !== i.version) {
                    if (i.migrate)
                        return i.migrate(C.state, C.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                } else
                    return C.state
        }
        ).then(C=>{
            var P;
            return g = i.merge(C, (P = n()) != null ? P : y),
            r(g, !0),
            f()
        }
        ).then(()=>{
            E == null || E(g, void 0),
            g = n(),
            o = !0,
            l.forEach(C=>C(g))
        }
        ).catch(C=>{
            E == null || E(void 0, C)
        }
        )
    }
    ;
    return s.persist = {
        setOptions: w=>{
            i = {
                ...i,
                ...w
            },
            w.storage && (d = w.storage)
        }
        ,
        clearStorage: ()=>{
            d == null || d.removeItem(i.name)
        }
        ,
        getOptions: ()=>i,
        rehydrate: ()=>m(),
        hasHydrated: ()=>o,
        onHydrate: w=>(a.add(w),
        ()=>{
            a.delete(w)
        }
        ),
        onFinishHydration: w=>(l.add(w),
        ()=>{
            l.delete(w)
        }
        )
    },
    i.skipHydration || m(),
    g || y
}
  , Ql = (t,e)=>"getStorage"in e || "serialize"in e || "deserialize"in e ? ((ql ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),
Wl(t, e)) : Hl(t, e)
  , Kl = Ql;
var Jl = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const Cs = t=>{
    let e;
    const r = new Set
      , n = (f,h)=>{
        const y = typeof f == "function" ? f(e) : f;
        if (!Object.is(y, e)) {
            const g = e;
            e = h ?? (typeof y != "object" || y === null) ? y : Object.assign({}, e, y),
            r.forEach(m=>m(e, g))
        }
    }
      , s = ()=>e
      , l = {
        setState: n,
        getState: s,
        getInitialState: ()=>d,
        subscribe: f=>(r.add(f),
        ()=>r.delete(f)),
        destroy: ()=>{
            (Jl ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),
            r.clear()
        }
    }
      , d = e = t(n, s, l);
    return l
}
  , Vl = t=>t ? Cs(t) : Cs;
function Wi(t, e) {
    if (Object.is(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    if (t instanceof Map && e instanceof Map) {
        if (t.size !== e.size)
            return !1;
        for (const [n,s] of t)
            if (!Object.is(s, e.get(n)))
                return !1;
        return !0
    }
    if (t instanceof Set && e instanceof Set) {
        if (t.size !== e.size)
            return !1;
        for (const n of t)
            if (!e.has(n))
                return !1;
        return !0
    }
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !1;
    for (const n of r)
        if (!Object.prototype.hasOwnProperty.call(e, n) || !Object.is(t[n], e[n]))
            return !1;
    return !0
}
function Yd(t, e, {batch: r={
    multicall: {
        wait: 32
    }
}, pollingInterval: n=4e3, rank: s, retryCount: i, retryDelay: o, stallTimeout: a}={}) {
    if (!t.length)
        throw new Error("must have at least one chain");
    let l = [];
    const d = {}
      , f = {};
    for (const h of t) {
        let y = !1;
        for (const g of e) {
            const m = g(h);
            m && (y = !0,
            l.some(({id: w})=>w === h.id) || (l = [...l, m.chain]),
            d[h.id] = [...d[h.id] || [], ...m.rpcUrls.http],
            m.rpcUrls.webSocket && (f[h.id] = [...f[h.id] || [], ...m.rpcUrls.webSocket]))
        }
        if (!y)
            throw new Error([`Could not find valid provider configuration for chain "${h.name}".
`, "You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.", "Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))
    }
    return {
        chains: l,
        publicClient: ({chainId: h})=>{
            const y = l.find(w=>w.id === h) ?? t[0]
              , g = d[y.id];
            if (!g || !g[0])
                throw new Error(`No providers configured for chain "${y.id}"`);
            const m = xs({
                batch: r,
                chain: y,
                transport: gs(g.map(w=>hc(w, {
                    timeout: a
                })), {
                    rank: s,
                    retryCount: i,
                    retryDelay: o
                }),
                pollingInterval: n
            });
            return Object.assign(m, {
                chains: l
            })
        }
        ,
        webSocketPublicClient: ({chainId: h})=>{
            const y = l.find(w=>w.id === h) ?? t[0]
              , g = f[y.id];
            if (!g || !g[0])
                return;
            const m = xs({
                batch: r,
                chain: y,
                transport: gs(g.map(w=>kl(w, {
                    timeout: a
                })), {
                    rank: s,
                    retryCount: i,
                    retryDelay: o
                }),
                pollingInterval: n
            });
            return Object.assign(m, {
                chains: l
            })
        }
    }
}
var Xl = class extends Error {
    constructor({activeChain: t, targetChain: e}) {
        super(`Chain mismatch: Expected "${e}", received "${t}".`),
        this.name = "ChainMismatchError"
    }
}
  , Zl = class extends Error {
    constructor({chainId: t, connectorId: e}) {
        super(`Chain "${t}" not configured${e ? ` for connector "${e}"` : ""}.`),
        this.name = "ChainNotConfigured"
    }
}
  , Yl = class extends Error {
    constructor() {
        super(...arguments),
        this.name = "ConnectorAlreadyConnectedError",
        this.message = "Connector already connected"
    }
}
  , ef = class extends Error {
    constructor() {
        super(...arguments),
        this.name = "ConfigChainsNotFound",
        this.message = "No chains were found on the wagmi config. Some functions that require a chain may not work."
    }
}
  , tf = class extends Error {
    constructor({connector: t}) {
        super(`"${t.name}" does not support programmatic chain switching.`),
        this.name = "SwitchChainNotSupportedError"
    }
}
;
function en(t, e) {
    if (t === e)
        return !0;
    if (t && e && typeof t == "object" && typeof e == "object") {
        if (t.constructor !== e.constructor)
            return !1;
        let r, n;
        if (Array.isArray(t) && Array.isArray(e)) {
            if (r = t.length,
            r != e.length)
                return !1;
            for (n = r; n-- !== 0; )
                if (!en(t[n], e[n]))
                    return !1;
            return !0
        }
        if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === e.valueOf();
        if (t.toString !== Object.prototype.toString)
            return t.toString() === e.toString();
        const s = Object.keys(t);
        if (r = s.length,
        r !== Object.keys(e).length)
            return !1;
        for (n = r; n-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(e, s[n]))
                return !1;
        for (n = r; n-- !== 0; ) {
            const i = s[n];
            if (i && !en(t[i], e[i]))
                return !1
        }
        return !0
    }
    return t !== t && e !== e
}
var tn = (t,{find: e, replace: r})=>t && e(t) ? r(t) : typeof t != "object" ? t : Array.isArray(t) ? t.map(n=>tn(n, {
    find: e,
    replace: r
})) : t instanceof Object ? Object.entries(t).reduce((n,[s,i])=>({
    ...n,
    [s]: tn(i, {
        find: e,
        replace: r
    })
}), {}) : t;
function rf(t) {
    const e = JSON.parse(t);
    return tn(e, {
        find: n=>typeof n == "string" && n.startsWith("#bigint."),
        replace: n=>BigInt(n.replace("#bigint.", ""))
    })
}
function nf(t) {
    return {
        accessList: t.accessList,
        account: t.account,
        blockNumber: t.blockNumber,
        blockTag: t.blockTag,
        data: t.data,
        gas: t.gas,
        gasPrice: t.gasPrice,
        maxFeePerGas: t.maxFeePerGas,
        maxPriorityFeePerGas: t.maxPriorityFeePerGas,
        nonce: t.nonce,
        to: t.to,
        value: t.value
    }
}
function Ps(t) {
    return typeof t == "number" ? t : t === "wei" ? 0 : Math.abs(oo[t])
}
function Ss(t, e) {
    return t.slice(0, e).join(".") || "."
}
function As(t, e) {
    const {length: r} = t;
    for (let n = 0; n < r; ++n)
        if (t[n] === e)
            return n + 1;
    return 0
}
function sf(t, e) {
    const r = typeof t == "function"
      , n = typeof e == "function"
      , s = []
      , i = [];
    return function(a, l) {
        if (typeof l == "object")
            if (s.length) {
                const d = As(s, this);
                d === 0 ? s[s.length] = this : (s.splice(d),
                i.splice(d)),
                i[i.length] = a;
                const f = As(s, l);
                if (f !== 0)
                    return n ? e.call(this, a, l, Ss(i, f)) : `[ref=${Ss(i, f)}]`
            } else
                s[0] = l,
                i[0] = a;
        return r ? t.call(this, a, l) : l
    }
}
function af(t, e, r, n) {
    return JSON.stringify(t, sf((s,i)=>{
        const o = typeof i == "bigint" ? `#bigint.${i.toString()}` : i;
        return (e == null ? void 0 : e(s, o)) || o
    }
    , n), r ?? void 0)
}
var Hi = {
    getItem: t=>"",
    setItem: (t,e)=>null,
    removeItem: t=>null
};
function Qi({deserialize: t=rf, key: e="wagmi", serialize: r=af, storage: n}) {
    return {
        ...n,
        getItem: (s,i=null)=>{
            const o = n.getItem(`${e}.${s}`);
            try {
                return o ? t(o) : i
            } catch (a) {
                return console.warn(a),
                i
            }
        }
        ,
        setItem: (s,i)=>{
            if (i === null)
                n.removeItem(`${e}.${s}`);
            else
                try {
                    n.setItem(`${e}.${s}`, r(i))
                } catch (o) {
                    console.error(o)
                }
        }
        ,
        removeItem: s=>n.removeItem(`${e}.${s}`)
    }
}
var Fs = "store", _e, ut, rn, Ki, of = class {
    constructor({autoConnect: t=!1, connectors: e=[new _l], publicClient: r, storage: n=Qi({
        storage: typeof window < "u" ? window.localStorage : Hi
    }), logger: s={
        warn: console.warn
    }, webSocketPublicClient: i}) {
        var d, f;
        kr(this, rn),
        this.publicClients = new Map,
        this.webSocketPublicClients = new Map,
        kr(this, _e, void 0),
        kr(this, ut, void 0),
        this.args = {
            autoConnect: t,
            connectors: e,
            logger: s,
            publicClient: r,
            storage: n,
            webSocketPublicClient: i
        };
        let o = "disconnected", a;
        if (t)
            try {
                const h = n.getItem(Fs)
                  , y = (d = h == null ? void 0 : h.state) == null ? void 0 : d.data;
                o = y != null && y.account ? "reconnecting" : "connecting",
                a = (f = y == null ? void 0 : y.chain) == null ? void 0 : f.id
            } catch {}
        const l = typeof e == "function" ? e() : e;
        l.forEach(h=>h.setStorage(n)),
        this.store = Vl(zl(Kl(()=>({
            connectors: l,
            publicClient: this.getPublicClient({
                chainId: a
            }),
            status: o,
            webSocketPublicClient: this.getWebSocketPublicClient({
                chainId: a
            })
        }), {
            name: Fs,
            storage: n,
            partialize: h=>{
                var y, g;
                return {
                    ...t && {
                        data: {
                            account: (y = h == null ? void 0 : h.data) == null ? void 0 : y.account,
                            chain: (g = h == null ? void 0 : h.data) == null ? void 0 : g.chain
                        }
                    },
                    chains: h == null ? void 0 : h.chains
                }
            }
            ,
            version: 2
        }))),
        this.storage = n,
        Lt(this, ut, n == null ? void 0 : n.getItem("wallet")),
        Dl(this, rn, Ki).call(this),
        t && typeof window < "u" && setTimeout(async()=>await this.autoConnect(), 0)
    }
    get chains() {
        return this.store.getState().chains
    }
    get connectors() {
        return this.store.getState().connectors
    }
    get connector() {
        return this.store.getState().connector
    }
    get data() {
        return this.store.getState().data
    }
    get error() {
        return this.store.getState().error
    }
    get lastUsedChainId() {
        var t, e;
        return (e = (t = this.data) == null ? void 0 : t.chain) == null ? void 0 : e.id
    }
    get publicClient() {
        return this.store.getState().publicClient
    }
    get status() {
        return this.store.getState().status
    }
    get subscribe() {
        return this.store.subscribe
    }
    get webSocketPublicClient() {
        return this.store.getState().webSocketPublicClient
    }
    setState(t) {
        const e = typeof t == "function" ? t(this.store.getState()) : t;
        this.store.setState(e, !0)
    }
    clearState() {
        this.setState(t=>({
            ...t,
            chains: void 0,
            connector: void 0,
            data: void 0,
            error: void 0,
            status: "disconnected"
        }))
    }
    async destroy() {
        var t, e;
        this.connector && await ((e = (t = this.connector).disconnect) == null ? void 0 : e.call(t)),
        Lt(this, _e, !1),
        this.clearState(),
        this.store.destroy()
    }
    async autoConnect() {
        if (Fr(this, _e))
            return;
        Lt(this, _e, !0),
        this.setState(r=>{
            var n;
            return {
                ...r,
                status: (n = r.data) != null && n.account ? "reconnecting" : "connecting"
            }
        }
        );
        const t = Fr(this, ut) ? [...this.connectors].sort(r=>r.id === Fr(this, ut) ? -1 : 1) : this.connectors;
        let e = !1;
        for (const r of t) {
            if (!r.ready || !r.isAuthorized || !await r.isAuthorized())
                continue;
            const s = await r.connect();
            this.setState(i=>({
                ...i,
                connector: r,
                chains: r == null ? void 0 : r.chains,
                data: s,
                status: "connected"
            })),
            e = !0;
            break
        }
        return e || this.setState(r=>({
            ...r,
            data: void 0,
            status: "disconnected"
        })),
        Lt(this, _e, !1),
        this.data
    }
    setConnectors(t) {
        this.args = {
            ...this.args,
            connectors: t
        };
        const e = typeof t == "function" ? t() : t;
        e.forEach(r=>r.setStorage(this.args.storage)),
        this.setState(r=>({
            ...r,
            connectors: e
        }))
    }
    getPublicClient({chainId: t}={}) {
        let e = this.publicClients.get(-1);
        if (e && (e == null ? void 0 : e.chain.id) === t || (e = this.publicClients.get(t ?? -1),
        e))
            return e;
        const {publicClient: r} = this.args;
        return e = typeof r == "function" ? r({
            chainId: t
        }) : r,
        this.publicClients.set(t ?? -1, e),
        e
    }
    setPublicClient(t) {
        var r, n;
        const e = (n = (r = this.data) == null ? void 0 : r.chain) == null ? void 0 : n.id;
        this.args = {
            ...this.args,
            publicClient: t
        },
        this.publicClients.clear(),
        this.setState(s=>({
            ...s,
            publicClient: this.getPublicClient({
                chainId: e
            })
        }))
    }
    getWebSocketPublicClient({chainId: t}={}) {
        let e = this.webSocketPublicClients.get(-1);
        if (e && (e == null ? void 0 : e.chain.id) === t || (e = this.webSocketPublicClients.get(t ?? -1),
        e))
            return e;
        const {webSocketPublicClient: r} = this.args;
        return e = typeof r == "function" ? r({
            chainId: t
        }) : r,
        e && this.webSocketPublicClients.set(t ?? -1, e),
        e
    }
    setWebSocketPublicClient(t) {
        var r, n;
        const e = (n = (r = this.data) == null ? void 0 : r.chain) == null ? void 0 : n.id;
        this.args = {
            ...this.args,
            webSocketPublicClient: t
        },
        this.webSocketPublicClients.clear(),
        this.setState(s=>({
            ...s,
            webSocketPublicClient: this.getWebSocketPublicClient({
                chainId: e
            })
        }))
    }
    setLastUsedConnector(t=null) {
        var e;
        (e = this.storage) == null || e.setItem("wallet", t)
    }
}
;
_e = new WeakMap;
ut = new WeakMap;
rn = new WeakSet;
Ki = function() {
    const t = a=>{
        this.setState(l=>({
            ...l,
            data: {
                ...l.data,
                ...a
            }
        }))
    }
      , e = ()=>{
        this.clearState()
    }
      , r = a=>{
        this.setState(l=>({
            ...l,
            error: a
        }))
    }
    ;
    this.store.subscribe(({connector: a})=>a, (a,l)=>{
        var d, f, h, y, g, m;
        (d = l == null ? void 0 : l.off) == null || d.call(l, "change", t),
        (f = l == null ? void 0 : l.off) == null || f.call(l, "disconnect", e),
        (h = l == null ? void 0 : l.off) == null || h.call(l, "error", r),
        a && ((y = a.on) == null || y.call(a, "change", t),
        (g = a.on) == null || g.call(a, "disconnect", e),
        (m = a.on) == null || m.call(a, "error", r))
    }
    );
    const {publicClient: n, webSocketPublicClient: s} = this.args;
    (typeof n == "function" || typeof s == "function") && this.store.subscribe(({data: a})=>{
        var l;
        return (l = a == null ? void 0 : a.chain) == null ? void 0 : l.id
    }
    , a=>{
        this.setState(l=>({
            ...l,
            publicClient: this.getPublicClient({
                chainId: a
            }),
            webSocketPublicClient: this.getWebSocketPublicClient({
                chainId: a
            })
        }))
    }
    )
}
;
var nn;
function uf(t) {
    const e = new of(t);
    return nn = e,
    e
}
function me() {
    if (!nn)
        throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");
    return nn
}
async function cf({chainId: t, connector: e}) {
    const r = me()
      , n = r.connector;
    if (n && e.id === n.id)
        throw new Yl;
    try {
        r.setState(i=>({
            ...i,
            status: "connecting"
        }));
        const s = await e.connect({
            chainId: t
        });
        return r.setLastUsedConnector(e.id),
        r.setState(i=>({
            ...i,
            connector: e,
            chains: e == null ? void 0 : e.chains,
            data: s,
            status: "connected"
        })),
        r.storage.setItem("connected", !0),
        {
            ...s,
            connector: e
        }
    } catch (s) {
        throw r.setState(i=>({
            ...i,
            status: i.connector ? "connected" : "disconnected"
        })),
        s
    }
}
async function lf() {
    const t = me();
    t.connector && await t.connector.disconnect(),
    t.clearState(),
    t.storage.removeItem("connected")
}
var ff = [{
    type: "event",
    name: "Approval",
    inputs: [{
        indexed: !0,
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        name: "value",
        type: "uint256"
    }]
}, {
    type: "event",
    name: "Transfer",
    inputs: [{
        indexed: !0,
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        name: "value",
        type: "uint256"
    }]
}, {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [{
        name: "owner",
        type: "address"
    }, {
        name: "spender",
        type: "address"
    }],
    outputs: [{
        name: "",
        type: "uint256"
    }]
}, {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [{
        name: "spender",
        type: "address"
    }, {
        name: "amount",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bool"
    }]
}, {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [{
        name: "account",
        type: "address"
    }],
    outputs: [{
        name: "",
        type: "uint256"
    }]
}, {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [{
        name: "",
        type: "uint8"
    }]
}, {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [{
        name: "",
        type: "string"
    }]
}, {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [{
        name: "",
        type: "string"
    }]
}, {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [{
        name: "",
        type: "uint256"
    }]
}, {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [{
        name: "recipient",
        type: "address"
    }, {
        name: "amount",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bool"
    }]
}, {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [{
        name: "sender",
        type: "address"
    }, {
        name: "recipient",
        type: "address"
    }, {
        name: "amount",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bool"
    }]
}]
  , df = [{
    type: "event",
    name: "Approval",
    inputs: [{
        indexed: !0,
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        name: "value",
        type: "uint256"
    }]
}, {
    type: "event",
    name: "Transfer",
    inputs: [{
        indexed: !0,
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        name: "value",
        type: "uint256"
    }]
}, {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [{
        name: "owner",
        type: "address"
    }, {
        name: "spender",
        type: "address"
    }],
    outputs: [{
        name: "",
        type: "uint256"
    }]
}, {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [{
        name: "spender",
        type: "address"
    }, {
        name: "amount",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bool"
    }]
}, {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [{
        name: "account",
        type: "address"
    }],
    outputs: [{
        name: "",
        type: "uint256"
    }]
}, {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [{
        name: "",
        type: "uint8"
    }]
}, {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [{
        name: "",
        type: "bytes32"
    }]
}, {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [{
        name: "",
        type: "bytes32"
    }]
}, {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [{
        name: "",
        type: "uint256"
    }]
}, {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [{
        name: "recipient",
        type: "address"
    }, {
        name: "amount",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bool"
    }]
}, {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [{
        name: "sender",
        type: "address"
    }, {
        name: "recipient",
        type: "address"
    }, {
        name: "amount",
        type: "uint256"
    }],
    outputs: [{
        name: "",
        type: "bool"
    }]
}];
function Oe({chainId: t}={}) {
    const e = me();
    return t && e.getPublicClient({
        chainId: t
    }) || e.publicClient
}
async function qn({chainId: t}={}) {
    var n, s;
    return await ((s = (n = me().connector) == null ? void 0 : n.getWalletClient) == null ? void 0 : s.call(n, {
        chainId: t
    })) || null
}
async function hf({abi: t, address: e, args: r, chainId: n, dataSuffix: s, functionName: i, walletClient: o, ...a}) {
    const l = Oe({
        chainId: n
    })
      , d = o ?? await qn({
        chainId: n
    });
    if (!d)
        throw new le;
    n && Vi({
        chainId: n
    });
    const {account: f, accessList: h, blockNumber: y, blockTag: g, gas: m, gasPrice: w, maxFeePerGas: v, maxPriorityFeePerGas: E, nonce: C, value: P} = nf(a)
      , {result: O, request: I} = await l.simulateContract({
        abi: t,
        address: e,
        functionName: i,
        args: r,
        account: f || d.account,
        accessList: h,
        blockNumber: y,
        blockTag: g,
        dataSuffix: s,
        gas: m,
        gasPrice: w,
        maxFeePerGas: v,
        maxPriorityFeePerGas: E,
        nonce: C,
        value: P
    })
      , A = t.filter(k=>"name"in k && k.name === i);
    return {
        mode: "prepared",
        request: {
            ...I,
            abi: A,
            chainId: n
        },
        result: O
    }
}
async function pf({chainId: t, contracts: e, blockNumber: r, blockTag: n, ...s}) {
    const i = Oe({
        chainId: t
    });
    if (!i.chains)
        throw new ef;
    if (t && i.chain.id !== t)
        throw new Zl({
            chainId: t
        });
    return i.multicall({
        allowFailure: s.allowFailure ?? !0,
        blockNumber: r,
        blockTag: n,
        contracts: e
    })
}
async function mf({address: t, account: e, chainId: r, abi: n, args: s, functionName: i, blockNumber: o, blockTag: a}) {
    return Oe({
        chainId: r
    }).readContract({
        abi: n,
        address: t,
        account: e,
        functionName: i,
        args: s,
        blockNumber: o,
        blockTag: a
    })
}
async function yf({contracts: t, blockNumber: e, blockTag: r, ...n}) {
    const {allowFailure: s=!0} = n;
    try {
        const i = Oe()
          , o = t.reduce((f,h,y)=>{
            const g = h.chainId ?? i.chain.id;
            return {
                ...f,
                [g]: [...f[g] || [], {
                    contract: h,
                    index: y
                }]
            }
        }
        , {})
          , a = ()=>Object.entries(o).map(([f,h])=>pf({
            allowFailure: s,
            chainId: parseInt(f),
            contracts: h.map(({contract: y})=>y),
            blockNumber: e,
            blockTag: r
        }))
          , l = (await Promise.all(a())).flat()
          , d = Object.values(o).flatMap(f=>f.map(({index: h})=>h));
        return l.reduce((f,h,y)=>(f && (f[d[y]] = h),
        f), [])
    } catch (i) {
        if (i instanceof Cn)
            throw i;
        const o = ()=>t.map(a=>mf({
            ...a,
            blockNumber: e,
            blockTag: r
        }));
        return s ? (await Promise.allSettled(o())).map(a=>a.status === "fulfilled" ? {
            result: a.value,
            status: "success"
        } : {
            error: a.reason,
            result: void 0,
            status: "failure"
        }) : await Promise.all(o())
    }
}
async function eh(t) {
    const e = await qn({
        chainId: t.chainId
    });
    if (!e)
        throw new le;
    t.chainId && Vi({
        chainId: t.chainId
    });
    let r;
    if (t.mode === "prepared")
        r = t.request;
    else {
        const {chainId: s, mode: i, ...o} = t;
        r = (await hf(o)).request
    }
    return {
        hash: await e.writeContract({
            ...r,
            chain: t.chainId ? {
                id: t.chainId
            } : null
        })
    }
}
async function th({address: t, chainId: e, formatUnits: r, token: n}) {
    const s = me()
      , i = Oe({
        chainId: e
    });
    if (n) {
        const d = async({abi: f})=>{
            const h = {
                abi: f,
                address: n,
                chainId: e
            }
              , [y,g,m] = await yf({
                allowFailure: !1,
                contracts: [{
                    ...h,
                    functionName: "balanceOf",
                    args: [t]
                }, {
                    ...h,
                    functionName: "decimals"
                }, {
                    ...h,
                    functionName: "symbol"
                }]
            });
            return {
                decimals: g,
                formatted: Qt(y ?? "0", Ps(r ?? g)),
                symbol: m,
                value: y
            }
        }
        ;
        try {
            return await d({
                abi: ff
            })
        } catch (f) {
            if (f instanceof Cn) {
                const {symbol: h, ...y} = await d({
                    abi: df
                });
                return {
                    symbol: ln(Be(h, {
                        dir: "right"
                    })),
                    ...y
                }
            }
            throw f
        }
    }
    const o = [...s.publicClient.chains || [], ...s.chains ?? []]
      , a = await i.getBalance({
        address: t
    })
      , l = o.find(d=>d.id === i.chain.id);
    return {
        decimals: (l == null ? void 0 : l.nativeCurrency.decimals) ?? 18,
        formatted: Qt(a ?? "0", Ps(r ?? 18)),
        symbol: (l == null ? void 0 : l.nativeCurrency.symbol) ?? "ETH",
        value: a
    }
}
function Ji() {
    const {data: t, connector: e, status: r} = me();
    switch (r) {
    case "connected":
        return {
            address: t == null ? void 0 : t.account,
            connector: e,
            isConnected: !0,
            isConnecting: !1,
            isDisconnected: !1,
            isReconnecting: !1,
            status: r
        };
    case "reconnecting":
        return {
            address: t == null ? void 0 : t.account,
            connector: e,
            isConnected: !!(t != null && t.account),
            isConnecting: !1,
            isDisconnected: !1,
            isReconnecting: !0,
            status: r
        };
    case "connecting":
        return {
            address: t == null ? void 0 : t.account,
            connector: e,
            isConnected: !1,
            isConnecting: !0,
            isDisconnected: !1,
            isReconnecting: !1,
            status: r
        };
    case "disconnected":
        return {
            address: void 0,
            connector: void 0,
            isConnected: !1,
            isConnecting: !1,
            isDisconnected: !0,
            isReconnecting: !1,
            status: r
        }
    }
}
function Ln() {
    var s, i, o, a;
    const t = me()
      , e = (i = (s = t.data) == null ? void 0 : s.chain) == null ? void 0 : i.id
      , r = t.chains ?? []
      , n = [...((o = t.publicClient) == null ? void 0 : o.chains) || [], ...r].find(l=>l.id === e) ?? {
        id: e,
        name: `Chain ${e}`,
        network: `${e}`,
        nativeCurrency: {
            name: "Ether",
            decimals: 18,
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: [""]
            },
            public: {
                http: [""]
            }
        }
    };
    return {
        chain: e ? {
            ...n,
            ...(a = t.data) == null ? void 0 : a.chain,
            id: e
        } : void 0,
        chains: r
    }
}
async function rh(t) {
    const e = await qn();
    if (!e)
        throw new le;
    return await e.signMessage({
        message: t.message
    })
}
async function bf({chainId: t}) {
    const {connector: e} = me();
    if (!e)
        throw new le;
    if (!e.switchChain)
        throw new tf({
            connector: e
        });
    return e.switchChain(t)
}
function gf(t, {selector: e=r=>r}={}) {
    const r = me()
      , n = ()=>t(Ji());
    return r.subscribe(({data: i, connector: o, status: a})=>e({
        address: i == null ? void 0 : i.account,
        connector: o,
        status: a
    }), n, {
        equalityFn: Wi
    })
}
function wf(t, {selector: e=r=>r}={}) {
    const r = me()
      , n = ()=>t(Ln());
    return r.subscribe(({data: i, chains: o})=>{
        var a;
        return e({
            chainId: (a = i == null ? void 0 : i.chain) == null ? void 0 : a.id,
            chains: o
        })
    }
    , n, {
        equalityFn: Wi
    })
}
async function nh({name: t, chainId: e}) {
    const {normalize: r} = await wi(()=>import("./index-C1tSO5ED.js"), __vite__mapDeps([0, 1]));
    return await Oe({
        chainId: e
    }).getEnsAvatar({
        name: r(t)
    })
}
async function sh({address: t, chainId: e}) {
    return Oe({
        chainId: e
    }).getEnsName({
        address: ct(t)
    })
}
async function ih({chainId: t, confirmations: e=1, hash: r, onReplaced: n, timeout: s=0}) {
    const i = Oe({
        chainId: t
    })
      , o = await i.waitForTransactionReceipt({
        hash: r,
        confirmations: e,
        onReplaced: n,
        timeout: s
    });
    if (o.status === "reverted") {
        const a = await i.getTransaction({
            hash: o.transactionHash
        })
          , l = await i.call({
            ...a,
            gasPrice: a.type !== "eip1559" ? a.gasPrice : void 0,
            maxFeePerGas: a.type === "eip1559" ? a.maxFeePerGas : void 0,
            maxPriorityFeePerGas: a.type === "eip1559" ? a.maxPriorityFeePerGas : void 0
        })
          , d = ln(`0x${l.substring(138)}`);
        throw new Error(d)
    }
    return o
}
function Vi({chainId: t}) {
    var s, i;
    const {chain: e, chains: r} = Ln()
      , n = e == null ? void 0 : e.id;
    if (n && t !== n)
        throw new Xl({
            activeChain: ((s = r.find(o=>o.id === n)) == null ? void 0 : s.name) ?? `Chain ${n}`,
            targetChain: ((i = r.find(o=>o.id === t)) == null ? void 0 : i.name) ?? `Chain ${t}`
        })
}
function vf({storage: t, key: e="REACT_QUERY_OFFLINE_CACHE", throttleTime: r=1e3, serialize: n=JSON.stringify, deserialize: s=JSON.parse, retry: i}) {
    if (t) {
        const o = a=>{
            try {
                t.setItem(e, n(a));
                return
            } catch (l) {
                return l
            }
        }
        ;
        return {
            persistClient: xf(a=>{
                let l = a
                  , d = o(l)
                  , f = 0;
                for (; d && l; )
                    f++,
                    l = i == null ? void 0 : i({
                        persistedClient: l,
                        error: d,
                        errorCount: f
                    }),
                    l && (d = o(l))
            }
            , r),
            restoreClient: ()=>{
                const a = t.getItem(e);
                if (a)
                    return s(a)
            }
            ,
            removeClient: ()=>{
                t.removeItem(e)
            }
        }
    }
    return {
        persistClient: ks,
        restoreClient: ()=>{}
        ,
        removeClient: ks
    }
}
function xf(t, e=100) {
    let r = null, n;
    return function(...s) {
        n = s,
        r === null && (r = setTimeout(()=>{
            t(...n),
            r = null
        }
        , e))
    }
}
function ks() {}
class Rt {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        const r = {
            listener: e
        };
        return this.listeners.add(r),
        this.onSubscribe(),
        ()=>{
            this.listeners.delete(r),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
const zn = typeof window > "u" || "Deno"in window;
function se() {}
function Ef(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Cf(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function Pf(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function zt(t, e, r) {
    return jt(t) ? typeof e == "function" ? {
        ...r,
        queryKey: t,
        queryFn: e
    } : {
        ...e,
        queryKey: t
    } : t
}
function Xi(t, e, r) {
    return jt(t) ? typeof e == "function" ? {
        ...r,
        mutationKey: t,
        mutationFn: e
    } : {
        ...e,
        mutationKey: t
    } : typeof t == "function" ? {
        ...e,
        mutationFn: t
    } : {
        ...t
    }
}
function Ce(t, e, r) {
    return jt(t) ? [{
        ...e,
        queryKey: t
    }, r] : [t || {}, e]
}
function Ts(t, e) {
    const {type: r="all", exact: n, fetchStatus: s, predicate: i, queryKey: o, stale: a} = t;
    if (jt(o)) {
        if (n) {
            if (e.queryHash !== Gn(o, e.options))
                return !1
        } else if (!Yt(e.queryKey, o))
            return !1
    }
    if (r !== "all") {
        const l = e.isActive();
        if (r === "active" && !l || r === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && e.isStale() !== a || typeof s < "u" && s !== e.state.fetchStatus || i && !i(e))
}
function Os(t, e) {
    const {exact: r, fetching: n, predicate: s, mutationKey: i} = t;
    if (jt(i)) {
        if (!e.options.mutationKey)
            return !1;
        if (r) {
            if (Me(e.options.mutationKey) !== Me(i))
                return !1
        } else if (!Yt(e.options.mutationKey, i))
            return !1
    }
    return !(typeof n == "boolean" && e.state.status === "loading" !== n || s && !s(e))
}
function Gn(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || Me)(t)
}
function Me(t) {
    return JSON.stringify(t, (e,r)=>sn(r) ? Object.keys(r).sort().reduce((n,s)=>(n[s] = r[s],
    n), {}) : r)
}
function Yt(t, e) {
    return Zi(t, e)
}
function Zi(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some(r=>!Zi(t[r], e[r])) : !1
}
function Yi(t, e) {
    if (t === e)
        return t;
    const r = Is(t) && Is(e);
    if (r || sn(t) && sn(e)) {
        const n = r ? t.length : Object.keys(t).length
          , s = r ? e : Object.keys(e)
          , i = s.length
          , o = r ? [] : {};
        let a = 0;
        for (let l = 0; l < i; l++) {
            const d = r ? l : s[l];
            o[d] = Yi(t[d], e[d]),
            o[d] === t[d] && a++
        }
        return n === i && a === n ? t : o
    }
    return e
}
function Sf(t, e) {
    if (t && !e || e && !t)
        return !1;
    for (const r in t)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function Is(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function sn(t) {
    if (!Ms(t))
        return !1;
    const e = t.constructor;
    if (typeof e > "u")
        return !0;
    const r = e.prototype;
    return !(!Ms(r) || !r.hasOwnProperty("isPrototypeOf"))
}
function Ms(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function jt(t) {
    return Array.isArray(t)
}
function ea(t) {
    return new Promise(e=>{
        setTimeout(e, t)
    }
    )
}
function Bs(t) {
    ea(0).then(t)
}
function Af() {
    if (typeof AbortController == "function")
        return new AbortController
}
function Ff(t, e, r) {
    return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Yi(t, e) : e
}
class kf extends Rt {
    constructor() {
        super(),
        this.setup = e=>{
            if (!zn && window.addEventListener) {
                const r = ()=>e();
                return window.addEventListener("visibilitychange", r, !1),
                window.addEventListener("focus", r, !1),
                ()=>{
                    window.removeEventListener("visibilitychange", r),
                    window.removeEventListener("focus", r)
                }
            }
        }
    }
    onSubscribe() {
        this.cleanup || this.setEventListener(this.setup)
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var e;
            (e = this.cleanup) == null || e.call(this),
            this.cleanup = void 0
        }
    }
    setEventListener(e) {
        var r;
        this.setup = e,
        (r = this.cleanup) == null || r.call(this),
        this.cleanup = e(n=>{
            typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
        }
        )
    }
    setFocused(e) {
        this.focused !== e && (this.focused = e,
        this.onFocus())
    }
    onFocus() {
        this.listeners.forEach(({listener: e})=>{
            e()
        }
        )
    }
    isFocused() {
        return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState)
    }
}
const an = new kf
  , $s = ["online", "offline"];
class Tf extends Rt {
    constructor() {
        super(),
        this.setup = e=>{
            if (!zn && window.addEventListener) {
                const r = ()=>e();
                return $s.forEach(n=>{
                    window.addEventListener(n, r, !1)
                }
                ),
                ()=>{
                    $s.forEach(n=>{
                        window.removeEventListener(n, r)
                    }
                    )
                }
            }
        }
    }
    onSubscribe() {
        this.cleanup || this.setEventListener(this.setup)
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var e;
            (e = this.cleanup) == null || e.call(this),
            this.cleanup = void 0
        }
    }
    setEventListener(e) {
        var r;
        this.setup = e,
        (r = this.cleanup) == null || r.call(this),
        this.cleanup = e(n=>{
            typeof n == "boolean" ? this.setOnline(n) : this.onOnline()
        }
        )
    }
    setOnline(e) {
        this.online !== e && (this.online = e,
        this.onOnline())
    }
    onOnline() {
        this.listeners.forEach(({listener: e})=>{
            e()
        }
        )
    }
    isOnline() {
        return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine
    }
}
const er = new Tf;
function Of(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function Wn(t) {
    return (t ?? "online") === "online" ? er.isOnline() : !0
}
class ta {
    constructor(e) {
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
function Tr(t) {
    return t instanceof ta
}
function ra(t) {
    let e = !1, r = 0, n = !1, s, i, o;
    const a = new Promise((v,E)=>{
        i = v,
        o = E
    }
    )
      , l = v=>{
        n || (g(new ta(v)),
        t.abort == null || t.abort())
    }
      , d = ()=>{
        e = !0
    }
      , f = ()=>{
        e = !1
    }
      , h = ()=>!an.isFocused() || t.networkMode !== "always" && !er.isOnline()
      , y = v=>{
        n || (n = !0,
        t.onSuccess == null || t.onSuccess(v),
        s == null || s(),
        i(v))
    }
      , g = v=>{
        n || (n = !0,
        t.onError == null || t.onError(v),
        s == null || s(),
        o(v))
    }
      , m = ()=>new Promise(v=>{
        s = E=>{
            const C = n || !h();
            return C && v(E),
            C
        }
        ,
        t.onPause == null || t.onPause()
    }
    ).then(()=>{
        s = void 0,
        n || t.onContinue == null || t.onContinue()
    }
    )
      , w = ()=>{
        if (n)
            return;
        let v;
        try {
            v = t.fn()
        } catch (E) {
            v = Promise.reject(E)
        }
        Promise.resolve(v).then(y).catch(E=>{
            var C, P;
            if (n)
                return;
            const O = (C = t.retry) != null ? C : 3
              , I = (P = t.retryDelay) != null ? P : Of
              , A = typeof I == "function" ? I(r, E) : I
              , k = O === !0 || typeof O == "number" && r < O || typeof O == "function" && O(r, E);
            if (e || !k) {
                g(E);
                return
            }
            r++,
            t.onFail == null || t.onFail(r, E),
            ea(A).then(()=>{
                if (h())
                    return m()
            }
            ).then(()=>{
                e ? g(E) : w()
            }
            )
        }
        )
    }
    ;
    return Wn(t.networkMode) ? w() : m().then(w),
    {
        promise: a,
        cancel: l,
        continue: ()=>(s == null ? void 0 : s()) ? a : Promise.resolve(),
        cancelRetry: d,
        continueRetry: f
    }
}
const Hn = console;
function If() {
    let t = []
      , e = 0
      , r = f=>{
        f()
    }
      , n = f=>{
        f()
    }
    ;
    const s = f=>{
        let h;
        e++;
        try {
            h = f()
        } finally {
            e--,
            e || a()
        }
        return h
    }
      , i = f=>{
        e ? t.push(f) : Bs(()=>{
            r(f)
        }
        )
    }
      , o = f=>(...h)=>{
        i(()=>{
            f(...h)
        }
        )
    }
      , a = ()=>{
        const f = t;
        t = [],
        f.length && Bs(()=>{
            n(()=>{
                f.forEach(h=>{
                    r(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: s,
        batchCalls: o,
        schedule: i,
        setNotifyFunction: f=>{
            r = f
        }
        ,
        setBatchNotifyFunction: f=>{
            n = f
        }
    }
}
const H = If();
class na {
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Cf(this.cacheTime) && (this.gcTimeout = setTimeout(()=>{
            this.optionalRemove()
        }
        , this.cacheTime))
    }
    updateCacheTime(e) {
        this.cacheTime = Math.max(this.cacheTime || 0, e ?? (zn ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        this.gcTimeout && (clearTimeout(this.gcTimeout),
        this.gcTimeout = void 0)
    }
}
class Mf extends na {
    constructor(e) {
        super(),
        this.abortSignalConsumed = !1,
        this.defaultOptions = e.defaultOptions,
        this.setOptions(e.options),
        this.observers = [],
        this.cache = e.cache,
        this.logger = e.logger || Hn,
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        this.initialState = e.state || Bf(this.options),
        this.state = this.initialState,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    setOptions(e) {
        this.options = {
            ...this.defaultOptions,
            ...e
        },
        this.updateCacheTime(this.options.cacheTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this)
    }
    setData(e, r) {
        const n = Ff(this.state.data, e, this.options);
        return this.dispatch({
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        n
    }
    setState(e, r) {
        this.dispatch({
            type: "setState",
            state: e,
            setStateOptions: r
        })
    }
    cancel(e) {
        var r;
        const n = this.promise;
        return (r = this.retryer) == null || r.cancel(e),
        n ? n.then(se).catch(se) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.initialState)
    }
    isActive() {
        return this.observers.some(e=>e.options.enabled !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive()
    }
    isStale() {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(e=>e.getCurrentResult().isStale)
    }
    isStaleByTime(e=0) {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || !Pf(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var e;
        const r = this.observers.find(n=>n.shouldFetchOnWindowFocus());
        r && r.refetch({
            cancelRefetch: !1
        }),
        (e = this.retryer) == null || e.continue()
    }
    onOnline() {
        var e;
        const r = this.observers.find(n=>n.shouldFetchOnReconnect());
        r && r.refetch({
            cancelRefetch: !1
        }),
        (e = this.retryer) == null || e.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(r=>r !== e),
        this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
            revert: !0
        }) : this.retryer.cancelRetry()),
        this.scheduleGc()),
        this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.dispatch({
            type: "invalidate"
        })
    }
    fetch(e, r) {
        var n, s;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.promise) {
                var i;
                return (i = this.retryer) == null || i.continueRetry(),
                this.promise
            }
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const g = this.observers.find(m=>m.options.queryFn);
            g && this.setOptions(g.options)
        }
        const o = Af()
          , a = {
            queryKey: this.queryKey,
            pageParam: void 0,
            meta: this.meta
        }
          , l = g=>{
            Object.defineProperty(g, "signal", {
                enumerable: !0,
                get: ()=>{
                    if (o)
                        return this.abortSignalConsumed = !0,
                        o.signal
                }
            })
        }
        ;
        l(a);
        const d = ()=>this.options.queryFn ? (this.abortSignalConsumed = !1,
        this.options.queryFn(a)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
          , f = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: d
        };
        if (l(f),
        (n = this.options.behavior) == null || n.onFetch(f),
        this.revertState = this.state,
        this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((s = f.fetchOptions) == null ? void 0 : s.meta)) {
            var h;
            this.dispatch({
                type: "fetch",
                meta: (h = f.fetchOptions) == null ? void 0 : h.meta
            })
        }
        const y = g=>{
            if (Tr(g) && g.silent || this.dispatch({
                type: "error",
                error: g
            }),
            !Tr(g)) {
                var m, w, v, E;
                (m = (w = this.cache.config).onError) == null || m.call(w, g, this),
                (v = (E = this.cache.config).onSettled) == null || v.call(E, this.state.data, g, this)
            }
            this.isFetchingOptimistic || this.scheduleGc(),
            this.isFetchingOptimistic = !1
        }
        ;
        return this.retryer = ra({
            fn: f.fetchFn,
            abort: o == null ? void 0 : o.abort.bind(o),
            onSuccess: g=>{
                var m, w, v, E;
                if (typeof g > "u") {
                    y(new Error(this.queryHash + " data is undefined"));
                    return
                }
                this.setData(g),
                (m = (w = this.cache.config).onSuccess) == null || m.call(w, g, this),
                (v = (E = this.cache.config).onSettled) == null || v.call(E, g, this.state.error, this),
                this.isFetchingOptimistic || this.scheduleGc(),
                this.isFetchingOptimistic = !1
            }
            ,
            onError: y,
            onFail: (g,m)=>{
                this.dispatch({
                    type: "failed",
                    failureCount: g,
                    error: m
                })
            }
            ,
            onPause: ()=>{
                this.dispatch({
                    type: "pause"
                })
            }
            ,
            onContinue: ()=>{
                this.dispatch({
                    type: "continue"
                })
            }
            ,
            retry: f.options.retry,
            retryDelay: f.options.retryDelay,
            networkMode: f.options.networkMode
        }),
        this.promise = this.retryer.promise,
        this.promise
    }
    dispatch(e) {
        const r = n=>{
            var s, i;
            switch (e.type) {
            case "failed":
                return {
                    ...n,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error
                };
            case "pause":
                return {
                    ...n,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...n,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...n,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: (s = e.meta) != null ? s : null,
                    fetchStatus: Wn(this.options.networkMode) ? "fetching" : "paused",
                    ...!n.dataUpdatedAt && {
                        error: null,
                        status: "loading"
                    }
                };
            case "success":
                return {
                    ...n,
                    data: e.data,
                    dataUpdateCount: n.dataUpdateCount + 1,
                    dataUpdatedAt: (i = e.dataUpdatedAt) != null ? i : Date.now(),
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
                return Tr(o) && o.revert && this.revertState ? {
                    ...this.revertState,
                    fetchStatus: "idle"
                } : {
                    ...n,
                    error: o,
                    errorUpdateCount: n.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: n.fetchFailureCount + 1,
                    fetchFailureReason: o,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...n,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...n,
                    ...e.state
                }
            }
        }
        ;
        this.state = r(this.state),
        H.batch(()=>{
            this.observers.forEach(n=>{
                n.onQueryUpdate(e)
            }
            ),
            this.cache.notify({
                query: this,
                type: "updated",
                action: e
            })
        }
        )
    }
}
function Bf(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , r = typeof e < "u"
      , n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? n ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "loading",
        fetchStatus: "idle"
    }
}
class $f extends Rt {
    constructor(e) {
        super(),
        this.config = e || {},
        this.queries = [],
        this.queriesMap = {}
    }
    build(e, r, n) {
        var s;
        const i = r.queryKey
          , o = (s = r.queryHash) != null ? s : Gn(i, r);
        let a = this.get(o);
        return a || (a = new Mf({
            cache: this,
            logger: e.getLogger(),
            queryKey: i,
            queryHash: o,
            options: e.defaultQueryOptions(r),
            state: n,
            defaultOptions: e.getQueryDefaults(i)
        }),
        this.add(a)),
        a
    }
    add(e) {
        this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e,
        this.queries.push(e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const r = this.queriesMap[e.queryHash];
        r && (e.destroy(),
        this.queries = this.queries.filter(n=>n !== e),
        r === e && delete this.queriesMap[e.queryHash],
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        H.batch(()=>{
            this.queries.forEach(e=>{
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return this.queriesMap[e]
    }
    getAll() {
        return this.queries
    }
    find(e, r) {
        const [n] = Ce(e, r);
        return typeof n.exact > "u" && (n.exact = !0),
        this.queries.find(s=>Ts(n, s))
    }
    findAll(e, r) {
        const [n] = Ce(e, r);
        return Object.keys(n).length > 0 ? this.queries.filter(s=>Ts(n, s)) : this.queries
    }
    notify(e) {
        H.batch(()=>{
            this.listeners.forEach(({listener: r})=>{
                r(e)
            }
            )
        }
        )
    }
    onFocus() {
        H.batch(()=>{
            this.queries.forEach(e=>{
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        H.batch(()=>{
            this.queries.forEach(e=>{
                e.onOnline()
            }
            )
        }
        )
    }
}
class Rf extends na {
    constructor(e) {
        super(),
        this.defaultOptions = e.defaultOptions,
        this.mutationId = e.mutationId,
        this.mutationCache = e.mutationCache,
        this.logger = e.logger || Hn,
        this.observers = [],
        this.state = e.state || sa(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = {
            ...this.defaultOptions,
            ...e
        },
        this.updateCacheTime(this.options.cacheTime)
    }
    get meta() {
        return this.options.meta
    }
    setState(e) {
        this.dispatch({
            type: "setState",
            state: e
        })
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        this.mutationCache.notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers = this.observers.filter(r=>r !== e),
        this.scheduleGc(),
        this.mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this))
    }
    continue() {
        var e, r;
        return (e = (r = this.retryer) == null ? void 0 : r.continue()) != null ? e : this.execute()
    }
    async execute() {
        const e = ()=>{
            var k;
            return this.retryer = ra({
                fn: ()=>this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                onFail: (B,R)=>{
                    this.dispatch({
                        type: "failed",
                        failureCount: B,
                        error: R
                    })
                }
                ,
                onPause: ()=>{
                    this.dispatch({
                        type: "pause"
                    })
                }
                ,
                onContinue: ()=>{
                    this.dispatch({
                        type: "continue"
                    })
                }
                ,
                retry: (k = this.options.retry) != null ? k : 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode
            }),
            this.retryer.promise
        }
          , r = this.state.status === "loading";
        try {
            var n, s, i, o, a, l, d, f;
            if (!r) {
                var h, y, g, m;
                this.dispatch({
                    type: "loading",
                    variables: this.options.variables
                }),
                await ((h = (y = this.mutationCache.config).onMutate) == null ? void 0 : h.call(y, this.state.variables, this));
                const B = await ((g = (m = this.options).onMutate) == null ? void 0 : g.call(m, this.state.variables));
                B !== this.state.context && this.dispatch({
                    type: "loading",
                    context: B,
                    variables: this.state.variables
                })
            }
            const k = await e();
            return await ((n = (s = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(s, k, this.state.variables, this.state.context, this)),
            await ((i = (o = this.options).onSuccess) == null ? void 0 : i.call(o, k, this.state.variables, this.state.context)),
            await ((a = (l = this.mutationCache.config).onSettled) == null ? void 0 : a.call(l, k, null, this.state.variables, this.state.context, this)),
            await ((d = (f = this.options).onSettled) == null ? void 0 : d.call(f, k, null, this.state.variables, this.state.context)),
            this.dispatch({
                type: "success",
                data: k
            }),
            k
        } catch (k) {
            try {
                var w, v, E, C, P, O, I, A;
                throw await ((w = (v = this.mutationCache.config).onError) == null ? void 0 : w.call(v, k, this.state.variables, this.state.context, this)),
                await ((E = (C = this.options).onError) == null ? void 0 : E.call(C, k, this.state.variables, this.state.context)),
                await ((P = (O = this.mutationCache.config).onSettled) == null ? void 0 : P.call(O, void 0, k, this.state.variables, this.state.context, this)),
                await ((I = (A = this.options).onSettled) == null ? void 0 : I.call(A, void 0, k, this.state.variables, this.state.context)),
                k
            } finally {
                this.dispatch({
                    type: "error",
                    error: k
                })
            }
        }
    }
    dispatch(e) {
        const r = n=>{
            switch (e.type) {
            case "failed":
                return {
                    ...n,
                    failureCount: e.failureCount,
                    failureReason: e.error
                };
            case "pause":
                return {
                    ...n,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...n,
                    isPaused: !1
                };
            case "loading":
                return {
                    ...n,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: !Wn(this.options.networkMode),
                    status: "loading",
                    variables: e.variables
                };
            case "success":
                return {
                    ...n,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...n,
                    data: void 0,
                    error: e.error,
                    failureCount: n.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error"
                };
            case "setState":
                return {
                    ...n,
                    ...e.state
                }
            }
        }
        ;
        this.state = r(this.state),
        H.batch(()=>{
            this.observers.forEach(n=>{
                n.onMutationUpdate(e)
            }
            ),
            this.mutationCache.notify({
                mutation: this,
                type: "updated",
                action: e
            })
        }
        )
    }
}
function sa() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0
    }
}
class jf extends Rt {
    constructor(e) {
        super(),
        this.config = e || {},
        this.mutations = [],
        this.mutationId = 0
    }
    build(e, r, n) {
        const s = new Rf({
            mutationCache: this,
            logger: e.getLogger(),
            mutationId: ++this.mutationId,
            options: e.defaultMutationOptions(r),
            state: n,
            defaultOptions: r.mutationKey ? e.getMutationDefaults(r.mutationKey) : void 0
        });
        return this.add(s),
        s
    }
    add(e) {
        this.mutations.push(e),
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        this.mutations = this.mutations.filter(r=>r !== e),
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    clear() {
        H.batch(()=>{
            this.mutations.forEach(e=>{
                this.remove(e)
            }
            )
        }
        )
    }
    getAll() {
        return this.mutations
    }
    find(e) {
        return typeof e.exact > "u" && (e.exact = !0),
        this.mutations.find(r=>Os(e, r))
    }
    findAll(e) {
        return this.mutations.filter(r=>Os(e, r))
    }
    notify(e) {
        H.batch(()=>{
            this.listeners.forEach(({listener: r})=>{
                r(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        var e;
        return this.resuming = ((e = this.resuming) != null ? e : Promise.resolve()).then(()=>{
            const r = this.mutations.filter(n=>n.state.isPaused);
            return H.batch(()=>r.reduce((n,s)=>n.then(()=>s.continue().catch(se)), Promise.resolve()))
        }
        ).then(()=>{
            this.resuming = void 0
        }
        ),
        this.resuming
    }
}
function Nf() {
    return {
        onFetch: t=>{
            t.fetchFn = ()=>{
                var e, r, n, s, i, o;
                const a = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage
                  , l = (n = t.fetchOptions) == null || (s = n.meta) == null ? void 0 : s.fetchMore
                  , d = l == null ? void 0 : l.pageParam
                  , f = (l == null ? void 0 : l.direction) === "forward"
                  , h = (l == null ? void 0 : l.direction) === "backward"
                  , y = ((i = t.state.data) == null ? void 0 : i.pages) || []
                  , g = ((o = t.state.data) == null ? void 0 : o.pageParams) || [];
                let m = g
                  , w = !1;
                const v = A=>{
                    Object.defineProperty(A, "signal", {
                        enumerable: !0,
                        get: ()=>{
                            var k;
                            if ((k = t.signal) != null && k.aborted)
                                w = !0;
                            else {
                                var B;
                                (B = t.signal) == null || B.addEventListener("abort", ()=>{
                                    w = !0
                                }
                                )
                            }
                            return t.signal
                        }
                    })
                }
                  , E = t.options.queryFn || (()=>Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'"))
                  , C = (A,k,B,R)=>(m = R ? [k, ...m] : [...m, k],
                R ? [B, ...A] : [...A, B])
                  , P = (A,k,B,R)=>{
                    if (w)
                        return Promise.reject("Cancelled");
                    if (typeof B > "u" && !k && A.length)
                        return Promise.resolve(A);
                    const V = {
                        queryKey: t.queryKey,
                        pageParam: B,
                        meta: t.options.meta
                    };
                    v(V);
                    const z = E(V);
                    return Promise.resolve(z).then(br=>C(A, B, br, R))
                }
                ;
                let O;
                if (!y.length)
                    O = P([]);
                else if (f) {
                    const A = typeof d < "u"
                      , k = A ? d : Rs(t.options, y);
                    O = P(y, A, k)
                } else if (h) {
                    const A = typeof d < "u"
                      , k = A ? d : Uf(t.options, y);
                    O = P(y, A, k, !0)
                } else {
                    m = [];
                    const A = typeof t.options.getNextPageParam > "u";
                    O = (a && y[0] ? a(y[0], 0, y) : !0) ? P([], A, g[0]) : Promise.resolve(C([], g[0], y[0]));
                    for (let B = 1; B < y.length; B++)
                        O = O.then(R=>{
                            if (a && y[B] ? a(y[B], B, y) : !0) {
                                const z = A ? g[B] : Rs(t.options, R);
                                return P(R, A, z)
                            }
                            return Promise.resolve(C(R, g[B], y[B]))
                        }
                        )
                }
                return O.then(A=>({
                    pages: A,
                    pageParams: m
                }))
            }
        }
    }
}
function Rs(t, e) {
    return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e)
}
function Uf(t, e) {
    return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e)
}
class _f {
    constructor(e={}) {
        this.queryCache = e.queryCache || new $f,
        this.mutationCache = e.mutationCache || new jf,
        this.logger = e.logger || Hn,
        this.defaultOptions = e.defaultOptions || {},
        this.queryDefaults = [],
        this.mutationDefaults = [],
        this.mountCount = 0
    }
    mount() {
        this.mountCount++,
        this.mountCount === 1 && (this.unsubscribeFocus = an.subscribe(()=>{
            an.isFocused() && (this.resumePausedMutations(),
            this.queryCache.onFocus())
        }
        ),
        this.unsubscribeOnline = er.subscribe(()=>{
            er.isOnline() && (this.resumePausedMutations(),
            this.queryCache.onOnline())
        }
        ))
    }
    unmount() {
        var e, r;
        this.mountCount--,
        this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this),
        this.unsubscribeFocus = void 0,
        (r = this.unsubscribeOnline) == null || r.call(this),
        this.unsubscribeOnline = void 0)
    }
    isFetching(e, r) {
        const [n] = Ce(e, r);
        return n.fetchStatus = "fetching",
        this.queryCache.findAll(n).length
    }
    isMutating(e) {
        return this.mutationCache.findAll({
            ...e,
            fetching: !0
        }).length
    }
    getQueryData(e, r) {
        var n;
        return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e, r, n) {
        const s = zt(e, r, n)
          , i = this.getQueryData(s.queryKey);
        return i ? Promise.resolve(i) : this.fetchQuery(s)
    }
    getQueriesData(e) {
        return this.getQueryCache().findAll(e).map(({queryKey: r, state: n})=>{
            const s = n.data;
            return [r, s]
        }
        )
    }
    setQueryData(e, r, n) {
        const s = this.queryCache.find(e)
          , i = s == null ? void 0 : s.state.data
          , o = Ef(r, i);
        if (typeof o > "u")
            return;
        const a = zt(e)
          , l = this.defaultQueryOptions(a);
        return this.queryCache.build(this, l).setData(o, {
            ...n,
            manual: !0
        })
    }
    setQueriesData(e, r, n) {
        return H.batch(()=>this.getQueryCache().findAll(e).map(({queryKey: s})=>[s, this.setQueryData(s, r, n)]))
    }
    getQueryState(e, r) {
        var n;
        return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state
    }
    removeQueries(e, r) {
        const [n] = Ce(e, r)
          , s = this.queryCache;
        H.batch(()=>{
            s.findAll(n).forEach(i=>{
                s.remove(i)
            }
            )
        }
        )
    }
    resetQueries(e, r, n) {
        const [s,i] = Ce(e, r, n)
          , o = this.queryCache
          , a = {
            type: "active",
            ...s
        };
        return H.batch(()=>(o.findAll(s).forEach(l=>{
            l.reset()
        }
        ),
        this.refetchQueries(a, i)))
    }
    cancelQueries(e, r, n) {
        const [s,i={}] = Ce(e, r, n);
        typeof i.revert > "u" && (i.revert = !0);
        const o = H.batch(()=>this.queryCache.findAll(s).map(a=>a.cancel(i)));
        return Promise.all(o).then(se).catch(se)
    }
    invalidateQueries(e, r, n) {
        const [s,i] = Ce(e, r, n);
        return H.batch(()=>{
            var o, a;
            if (this.queryCache.findAll(s).forEach(d=>{
                d.invalidate()
            }
            ),
            s.refetchType === "none")
                return Promise.resolve();
            const l = {
                ...s,
                type: (o = (a = s.refetchType) != null ? a : s.type) != null ? o : "active"
            };
            return this.refetchQueries(l, i)
        }
        )
    }
    refetchQueries(e, r, n) {
        const [s,i] = Ce(e, r, n)
          , o = H.batch(()=>this.queryCache.findAll(s).filter(l=>!l.isDisabled()).map(l=>{
            var d;
            return l.fetch(void 0, {
                ...i,
                cancelRefetch: (d = i == null ? void 0 : i.cancelRefetch) != null ? d : !0,
                meta: {
                    refetchPage: s.refetchPage
                }
            })
        }
        ));
        let a = Promise.all(o).then(se);
        return i != null && i.throwOnError || (a = a.catch(se)),
        a
    }
    fetchQuery(e, r, n) {
        const s = zt(e, r, n)
          , i = this.defaultQueryOptions(s);
        typeof i.retry > "u" && (i.retry = !1);
        const o = this.queryCache.build(this, i);
        return o.isStaleByTime(i.staleTime) ? o.fetch(i) : Promise.resolve(o.state.data)
    }
    prefetchQuery(e, r, n) {
        return this.fetchQuery(e, r, n).then(se).catch(se)
    }
    fetchInfiniteQuery(e, r, n) {
        const s = zt(e, r, n);
        return s.behavior = Nf(),
        this.fetchQuery(s)
    }
    prefetchInfiniteQuery(e, r, n) {
        return this.fetchInfiniteQuery(e, r, n).then(se).catch(se)
    }
    resumePausedMutations() {
        return this.mutationCache.resumePausedMutations()
    }
    getQueryCache() {
        return this.queryCache
    }
    getMutationCache() {
        return this.mutationCache
    }
    getLogger() {
        return this.logger
    }
    getDefaultOptions() {
        return this.defaultOptions
    }
    setDefaultOptions(e) {
        this.defaultOptions = e
    }
    setQueryDefaults(e, r) {
        const n = this.queryDefaults.find(s=>Me(e) === Me(s.queryKey));
        n ? n.defaultOptions = r : this.queryDefaults.push({
            queryKey: e,
            defaultOptions: r
        })
    }
    getQueryDefaults(e) {
        if (!e)
            return;
        const r = this.queryDefaults.find(n=>Yt(e, n.queryKey));
        return r == null ? void 0 : r.defaultOptions
    }
    setMutationDefaults(e, r) {
        const n = this.mutationDefaults.find(s=>Me(e) === Me(s.mutationKey));
        n ? n.defaultOptions = r : this.mutationDefaults.push({
            mutationKey: e,
            defaultOptions: r
        })
    }
    getMutationDefaults(e) {
        if (!e)
            return;
        const r = this.mutationDefaults.find(n=>Yt(e, n.mutationKey));
        return r == null ? void 0 : r.defaultOptions
    }
    defaultQueryOptions(e) {
        if (e != null && e._defaulted)
            return e;
        const r = {
            ...this.defaultOptions.queries,
            ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
            ...e,
            _defaulted: !0
        };
        return !r.queryHash && r.queryKey && (r.queryHash = Gn(r.queryKey, r)),
        typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"),
        typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense),
        r
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...this.defaultOptions.mutations,
            ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        this.queryCache.clear(),
        this.mutationCache.clear()
    }
}
class Df extends Rt {
    constructor(e, r) {
        super(),
        this.client = e,
        this.setOptions(r),
        this.bindMethods(),
        this.updateResult()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(e) {
        var r;
        const n = this.options;
        this.options = this.client.defaultMutationOptions(e),
        Sf(n, this.options) || this.client.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.currentMutation,
            observer: this
        }),
        (r = this.currentMutation) == null || r.setOptions(this.options)
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var e;
            (e = this.currentMutation) == null || e.removeObserver(this)
        }
    }
    onMutationUpdate(e) {
        this.updateResult();
        const r = {
            listeners: !0
        };
        e.type === "success" ? r.onSuccess = !0 : e.type === "error" && (r.onError = !0),
        this.notify(r)
    }
    getCurrentResult() {
        return this.currentResult
    }
    reset() {
        this.currentMutation = void 0,
        this.updateResult(),
        this.notify({
            listeners: !0
        })
    }
    mutate(e, r) {
        return this.mutateOptions = r,
        this.currentMutation && this.currentMutation.removeObserver(this),
        this.currentMutation = this.client.getMutationCache().build(this.client, {
            ...this.options,
            variables: typeof e < "u" ? e : this.options.variables
        }),
        this.currentMutation.addObserver(this),
        this.currentMutation.execute()
    }
    updateResult() {
        const e = this.currentMutation ? this.currentMutation.state : sa()
          , r = {
            ...e,
            isLoading: e.status === "loading",
            isSuccess: e.status === "success",
            isError: e.status === "error",
            isIdle: e.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
        this.currentResult = r
    }
    notify(e) {
        H.batch(()=>{
            if (this.mutateOptions && this.hasListeners()) {
                if (e.onSuccess) {
                    var r, n, s, i;
                    (r = (n = this.mutateOptions).onSuccess) == null || r.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context),
                    (s = (i = this.mutateOptions).onSettled) == null || s.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)
                } else if (e.onError) {
                    var o, a, l, d;
                    (o = (a = this.mutateOptions).onError) == null || o.call(a, this.currentResult.error, this.currentResult.variables, this.currentResult.context),
                    (l = (d = this.mutateOptions).onSettled) == null || l.call(d, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context)
                }
            }
            e.listeners && this.listeners.forEach(({listener: f})=>{
                f(this.currentResult)
            }
            )
        }
        )
    }
}
function qf(t) {
    return {
        mutationKey: t.options.mutationKey,
        state: t.state
    }
}
function Lf(t) {
    return {
        state: t.state,
        queryKey: t.queryKey,
        queryHash: t.queryHash
    }
}
function zf(t) {
    return t.state.isPaused
}
function Gf(t) {
    return t.state.status === "success"
}
function Wf(t, e={}) {
    const r = []
      , n = [];
    if (e.dehydrateMutations !== !1) {
        const s = e.shouldDehydrateMutation || zf;
        t.getMutationCache().getAll().forEach(i=>{
            s(i) && r.push(qf(i))
        }
        )
    }
    if (e.dehydrateQueries !== !1) {
        const s = e.shouldDehydrateQuery || Gf;
        t.getQueryCache().getAll().forEach(i=>{
            s(i) && n.push(Lf(i))
        }
        )
    }
    return {
        mutations: r,
        queries: n
    }
}
function Hf(t, e, r) {
    if (typeof e != "object" || e === null)
        return;
    const n = t.getMutationCache()
      , s = t.getQueryCache()
      , i = e.mutations || []
      , o = e.queries || [];
    i.forEach(a=>{
        var l;
        n.build(t, {
            ...r == null || (l = r.defaultOptions) == null ? void 0 : l.mutations,
            mutationKey: a.mutationKey
        }, a.state)
    }
    ),
    o.forEach(({queryKey: a, state: l, queryHash: d})=>{
        var f;
        const h = s.get(d);
        if (h) {
            if (h.state.dataUpdatedAt < l.dataUpdatedAt) {
                const {fetchStatus: y, ...g} = l;
                h.setState(g)
            }
            return
        }
        s.build(t, {
            ...r == null || (f = r.defaultOptions) == null ? void 0 : f.queries,
            queryKey: a,
            queryHash: d
        }, {
            ...l,
            fetchStatus: "idle"
        })
    }
    )
}
var ia = {
    exports: {}
}
  , aa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe = N;
function Qf(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Kf = typeof Object.is == "function" ? Object.is : Qf
  , Jf = Qe.useState
  , Vf = Qe.useEffect
  , Xf = Qe.useLayoutEffect
  , Zf = Qe.useDebugValue;
function Yf(t, e) {
    var r = e()
      , n = Jf({
        inst: {
            value: r,
            getSnapshot: e
        }
    })
      , s = n[0].inst
      , i = n[1];
    return Xf(function() {
        s.value = r,
        s.getSnapshot = e,
        Or(s) && i({
            inst: s
        })
    }, [t, r, e]),
    Vf(function() {
        return Or(s) && i({
            inst: s
        }),
        t(function() {
            Or(s) && i({
                inst: s
            })
        })
    }, [t]),
    Zf(r),
    r
}
function Or(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var r = e();
        return !Kf(t, r)
    } catch {
        return !0
    }
}
function ed(t, e) {
    return e()
}
var td = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? ed : Yf;
aa.useSyncExternalStore = Qe.useSyncExternalStore !== void 0 ? Qe.useSyncExternalStore : td;
ia.exports = aa;
var rd = ia.exports;
const nd = rd.useSyncExternalStore
  , js = N.createContext(void 0)
  , oa = N.createContext(!1);
function ua(t, e) {
    return t || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = js),
    window.ReactQueryClientContext) : js)
}
const sd = ({context: t}={})=>{
    const e = N.useContext(ua(t, N.useContext(oa)));
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
  , id = ({client: t, children: e, context: r, contextSharing: n=!1})=>{
    N.useEffect(()=>(t.mount(),
    ()=>{
        t.unmount()
    }
    ), [t]);
    const s = ua(r, n);
    return N.createElement(oa.Provider, {
        value: !r && n
    }, N.createElement(s.Provider, {
        value: t
    }, e))
}
;
function ad(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
function od(t, e, r) {
    const n = Xi(t, e, r)
      , s = sd({
        context: n.context
    })
      , [i] = N.useState(()=>new Df(s,n));
    N.useEffect(()=>{
        i.setOptions(n)
    }
    , [i, n]);
    const o = nd(N.useCallback(l=>i.subscribe(H.batchCalls(l)), [i]), ()=>i.getCurrentResult(), ()=>i.getCurrentResult())
      , a = N.useCallback((l,d)=>{
        i.mutate(l, d).catch(ud)
    }
    , [i]);
    if (o.error && ad(i.options.useErrorBoundary, [o.error]))
        throw o.error;
    return {
        ...o,
        mutate: a,
        mutateAsync: o.mutate
    }
}
function ud() {}
const cd = ["added", "removed", "updated"];
function Ns(t) {
    return cd.includes(t)
}
async function ld({queryClient: t, persister: e, maxAge: r=1e3 * 60 * 60 * 24, buster: n="", hydrateOptions: s}) {
    try {
        const i = await e.restoreClient();
        if (i)
            if (i.timestamp) {
                const o = Date.now() - i.timestamp > r
                  , a = i.buster !== n;
                o || a ? e.removeClient() : Hf(t, i.clientState, s)
            } else
                e.removeClient()
    } catch {
        e.removeClient()
    }
}
async function Us({queryClient: t, persister: e, buster: r="", dehydrateOptions: n}) {
    const s = {
        buster: r,
        timestamp: Date.now(),
        clientState: Wf(t, n)
    };
    await e.persistClient(s)
}
function fd(t) {
    const e = t.queryClient.getQueryCache().subscribe(n=>{
        Ns(n.type) && Us(t)
    }
    )
      , r = t.queryClient.getMutationCache().subscribe(n=>{
        Ns(n.type) && Us(t)
    }
    );
    return ()=>{
        e(),
        r()
    }
}
function dd(t) {
    let e = !1, r;
    const n = ()=>{
        e = !0,
        r == null || r()
    }
      , s = ld(t).then(()=>{
        e || (r = fd(t))
    }
    );
    return [n, s]
}
var ca = {
    exports: {}
}
  , la = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke = N;
function hd(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var pd = typeof Object.is == "function" ? Object.is : hd
  , md = Ke.useState
  , yd = Ke.useEffect
  , bd = Ke.useLayoutEffect
  , gd = Ke.useDebugValue;
function wd(t, e) {
    var r = e()
      , n = md({
        inst: {
            value: r,
            getSnapshot: e
        }
    })
      , s = n[0].inst
      , i = n[1];
    return bd(function() {
        s.value = r,
        s.getSnapshot = e,
        Ir(s) && i({
            inst: s
        })
    }, [t, r, e]),
    yd(function() {
        return Ir(s) && i({
            inst: s
        }),
        t(function() {
            Ir(s) && i({
                inst: s
            })
        })
    }, [t]),
    gd(r),
    r
}
function Ir(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var r = e();
        return !pd(t, r)
    } catch {
        return !0
    }
}
function vd(t, e) {
    return e()
}
var xd = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? vd : wd;
la.useSyncExternalStore = Ke.useSyncExternalStore !== void 0 ? Ke.useSyncExternalStore : xd;
ca.exports = la;
var Ed = ca.exports
  , fa = {
    exports: {}
}
  , da = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr = N
  , Cd = Ed;
function Pd(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Sd = typeof Object.is == "function" ? Object.is : Pd
  , Ad = Cd.useSyncExternalStore
  , Fd = mr.useRef
  , kd = mr.useEffect
  , Td = mr.useMemo
  , Od = mr.useDebugValue;
da.useSyncExternalStoreWithSelector = function(t, e, r, n, s) {
    var i = Fd(null);
    if (i.current === null) {
        var o = {
            hasValue: !1,
            value: null
        };
        i.current = o
    } else
        o = i.current;
    i = Td(function() {
        function l(g) {
            if (!d) {
                if (d = !0,
                f = g,
                g = n(g),
                s !== void 0 && o.hasValue) {
                    var m = o.value;
                    if (s(m, g))
                        return h = m
                }
                return h = g
            }
            if (m = h,
            Sd(f, g))
                return m;
            var w = n(g);
            return s !== void 0 && s(m, w) ? m : (f = g,
            h = w)
        }
        var d = !1, f, h, y = r === void 0 ? null : r;
        return [function() {
            return l(e())
        }
        , y === null ? void 0 : function() {
            return l(y())
        }
        ]
    }, [e, r, n, s]);
    var a = Ad(t, i[0], i[1]);
    return kd(function() {
        o.hasValue = !0,
        o.value = a
    }, [a]),
    Od(a),
    a
}
;
fa.exports = da;
var Id = fa.exports;
function ah({queryClient: t=new _f({
    defaultOptions: {
        queries: {
            cacheTime: 1e3 * 60 * 60 * 24,
            networkMode: "offlineFirst",
            refetchOnWindowFocus: !1,
            retry: 0
        },
        mutations: {
            networkMode: "offlineFirst"
        }
    }
}), storage: e=Qi({
    storage: typeof window < "u" && window.localStorage ? window.localStorage : Hi
}), persister: r=typeof window < "u" ? vf({
    key: "cache",
    storage: e,
    serialize: s=>s,
    deserialize: s=>s
}) : void 0, ...n}) {
    const s = uf({
        ...n,
        storage: e
    });
    return r && dd({
        queryClient: t,
        persister: r,
        dehydrateOptions: {
            shouldDehydrateQuery: i=>i.cacheTime !== 0 && i.queryKey[0].persist !== !1
        }
    }),
    Object.assign(s, {
        queryClient: t
    })
}
var ha = N.createContext(void 0)
  , pa = N.createContext(void 0);
function oh({children: t, config: e}) {
    return N.createElement(ha.Provider, {
        children: N.createElement(id, {
            children: t,
            client: e.queryClient,
            context: pa
        }),
        value: e
    })
}
function yr() {
    const t = N.useContext(ha);
    if (!t)
        throw new Error(["`useConfig` must be used within `WagmiConfig`.\n", "Read more: https://wagmi.sh/react/WagmiConfig"].join(`
`));
    return t
}
function Qn(t, e, r) {
    const n = Xi(t, e, r);
    return od({
        context: pa,
        ...n
    })
}
function Md() {
    const [,t] = N.useReducer(e=>e + 1, 0);
    return t
}
var Mr = t=>typeof t == "object" && !Array.isArray(t);
function ma(t, e, r=e, n=en) {
    const s = N.useRef([])
      , i = Id.useSyncExternalStoreWithSelector(t, e, r, o=>o, (o,a)=>{
        if (Mr(o) && Mr(a) && s.current.length) {
            for (const l of s.current)
                if (!n(o[l], a[l]))
                    return !1;
            return !0
        }
        return n(o, a)
    }
    );
    if (Mr(i)) {
        const o = {
            ...i
        };
        return Object.defineProperties(o, Object.entries(o).reduce((a,[l,d])=>({
            ...a,
            [l]: {
                configurable: !1,
                enumerable: !0,
                get: ()=>(s.current.includes(l) || s.current.push(l),
                d)
            }
        }), {})),
        o
    }
    return i
}
function uh({onConnect: t, onDisconnect: e}={}) {
    const r = yr()
      , n = N.useCallback(a=>gf(a), [r])
      , s = ma(n, Ji)
      , i = N.useRef()
      , o = i.current;
    return N.useEffect(()=>{
        (o == null ? void 0 : o.status) !== "connected" && s.status === "connected" && (t == null || t({
            address: s.address,
            connector: s.connector,
            isReconnected: (o == null ? void 0 : o.status) === "reconnecting" || (o == null ? void 0 : o.status) === void 0
        })),
        (o == null ? void 0 : o.status) === "connected" && s.status === "disconnected" && (e == null || e()),
        i.current = s
    }
    , [t, e, o, s]),
    s
}
var Bd = t=>[{
    entity: "connect",
    ...t
}]
  , $d = t=>{
    const {connector: e, chainId: r} = t;
    if (!e)
        throw new Error("connector is required");
    return cf({
        connector: e,
        chainId: r
    })
}
;
function ch({chainId: t, connector: e, onError: r, onMutate: n, onSettled: s, onSuccess: i}={}) {
    const o = yr()
      , {data: a, error: l, isError: d, isIdle: f, isLoading: h, isSuccess: y, mutate: g, mutateAsync: m, reset: w, status: v, variables: E} = Qn(Bd({
        connector: e,
        chainId: t
    }), $d, {
        onError: r,
        onMutate: n,
        onSettled: s,
        onSuccess: i
    })
      , C = N.useCallback(O=>g({
        chainId: (O == null ? void 0 : O.chainId) ?? t,
        connector: (O == null ? void 0 : O.connector) ?? e
    }), [t, e, g])
      , P = N.useCallback(O=>m({
        chainId: (O == null ? void 0 : O.chainId) ?? t,
        connector: (O == null ? void 0 : O.connector) ?? e
    }), [t, e, m]);
    return {
        connect: C,
        connectAsync: P,
        connectors: o.connectors,
        data: a,
        error: l,
        isError: d,
        isIdle: f,
        isLoading: h,
        isSuccess: y,
        pendingConnector: E == null ? void 0 : E.connector,
        reset: w,
        status: v,
        variables: E
    }
}
var Rd = [{
    entity: "disconnect"
}]
  , jd = ()=>lf();
function lh({onError: t, onMutate: e, onSettled: r, onSuccess: n}={}) {
    const {error: s, isError: i, isIdle: o, isLoading: a, isSuccess: l, mutate: d, mutateAsync: f, reset: h, status: y} = Qn(Rd, jd, {
        ...t ? {
            onError(g, m, w) {
                t(g, w)
            }
        } : {},
        onMutate: e,
        ...r ? {
            onSettled(g, m, w, v) {
                r(m, v)
            }
        } : {},
        ...n ? {
            onSuccess(g, m, w) {
                n(w)
            }
        } : {}
    });
    return {
        disconnect: d,
        disconnectAsync: f,
        error: s,
        isError: i,
        isIdle: o,
        isLoading: a,
        isSuccess: l,
        reset: h,
        status: y
    }
}
function fh() {
    const t = yr()
      , e = N.useCallback(r=>wf(r), [t]);
    return ma(e, Ln)
}
var Nd = t=>[{
    entity: "switchNetwork",
    ...t
}]
  , Ud = t=>{
    const {chainId: e} = t;
    if (!e)
        throw new Error("chainId is required");
    return bf({
        chainId: e
    })
}
;
function dh({chainId: t, throwForSwitchChainNotSupported: e, onError: r, onMutate: n, onSettled: s, onSuccess: i}={}) {
    var B;
    const o = yr()
      , a = Md()
      , {data: l, error: d, isError: f, isIdle: h, isLoading: y, isSuccess: g, mutate: m, mutateAsync: w, reset: v, status: E, variables: C} = Qn(Nd({
        chainId: t
    }), Ud, {
        onError: r,
        onMutate: n,
        onSettled: s,
        onSuccess: i
    })
      , P = N.useCallback(R=>m({
        chainId: R ?? t
    }), [t, m])
      , O = N.useCallback(R=>w({
        chainId: R ?? t
    }), [t, w]);
    N.useEffect(()=>o.subscribe(({chains: V, connector: z})=>({
        chains: V,
        connector: z
    }), a), [o, a]);
    let I, A;
    const k = !!((B = o.connector) != null && B.switchChain);
    return (e || k) && (I = P,
    A = O),
    {
        chains: o.chains ?? [],
        data: l,
        error: d,
        isError: f,
        isIdle: h,
        isLoading: y,
        isSuccess: g,
        pendingChainId: C == null ? void 0 : C.chainId,
        reset: v,
        status: E,
        switchNetwork: I,
        switchNetworkAsync: A,
        variables: C
    }
}
export {dh as $, jl as A, Fl as B, Nl as C, $ as D, Il as E, oc as F, Zd as G, Yd as H, _l as I, ah as J, uh as K, ch as L, lh as M, Xd as N, Hd as O, Qd as P, Gd as Q, Wd as R, He as S, Ld as T, de as U, zd as V, Vd as W, mf as X, eh as Y, ih as Z, wi as _, Tc as a, fh as a0, Te as a1, oh as a2, qd as a3, Jd as a4, Oc as b, Ic as c, Oi as d, Aa as e, rs as f, yc as g, wf as h, Ji as i, Ln as j, sh as k, mc as l, Ol as m, Wt as n, nh as o, Dd as p, th as q, cf as r, bf as s, lf as t, rh as u, ct as v, gf as w, Rl as x, Es as y, $l as z};
