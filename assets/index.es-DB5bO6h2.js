const __vite__fileDeps = ["assets/index-B_XfQ8h8.js", "assets/wagmi-vendor-C9YtqVWf.js", "assets/react-vendor-CtoQAI7o.js", "assets/index-C0u5VlO1.js", "assets/index-DRrGzoYq.css"]
  , __vite__mapDeps = i=>i.map(i=>__vite__fileDeps[i]);
import {e as qc, f as ui, p as ac, _ as A0} from "./wagmi-vendor-C9YtqVWf.js";
import {r as rn, c as te, e as Sr, d as T0, w as nf, f as of, g as jc, t as Ro, h as C0, i as xi, V as $0, M as N0, N as G, k as D0, j as xc, l as q0, K as j0, A as L0, q as Vh, x as M0, H as z0, F as U0, m as Gh, $ as H0, n as k0, J as K0, u as Xs, o as Wh, X as B0, v as F0, y as Lc, _ as af, z as qr, I as V0, B as Jh, C as ys, D as At, U as Ft, E as Ii, G as ar, L as G0, O as vs, P as cf, Q as W0, R as J0, S as Q0, T as uf, W as Y0, Y as hf, Z as lf, a0 as ws, a1 as Pc, a2 as bo, a3 as _s, a4 as Z0, a5 as _o, a6 as X0, a7 as ew, a8 as tw, a9 as rw, aa as fo, ab as iw, ac as sw, ad as cc, ae as Qh, af as nw, ag as ow, ah as aw, ai as Yh, aj as cw, ak as uw, al as hw, am as lw, an as fw, ao as pw, ap as dw, aq as Js, ar as ff, as as uc, at as gw, au as yw} from "./index-C0u5VlO1.js";
import {a as pf, g as Oo, c as Lr} from "./react-vendor-CtoQAI7o.js";
const vw = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , mw = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , ww = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function bw(a, t) {
    if (a === "__proto__" || a === "constructor" && t && typeof t == "object" && "prototype"in t) {
        _w(a);
        return
    }
    return t
}
function _w(a) {
    console.warn(`[destr] Dropping "${a}" key to prevent prototype pollution.`)
}
function po(a, t={}) {
    if (typeof a != "string")
        return a;
    const i = a.trim();
    if (a[0] === '"' && a.endsWith('"') && !a.includes("\\"))
        return i.slice(1, -1);
    if (i.length <= 9) {
        const n = i.toLowerCase();
        if (n === "true")
            return !0;
        if (n === "false")
            return !1;
        if (n === "undefined")
            return;
        if (n === "null")
            return null;
        if (n === "nan")
            return Number.NaN;
        if (n === "infinity")
            return Number.POSITIVE_INFINITY;
        if (n === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!ww.test(a)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return a
    }
    try {
        if (vw.test(a) || mw.test(a)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(a, bw)
        }
        return JSON.parse(a)
    } catch (n) {
        if (t.strict)
            throw n;
        return a
    }
}
function Ew(a) {
    return !a || typeof a.then != "function" ? Promise.resolve(a) : a
}
function jt(a, ...t) {
    try {
        return Ew(a(...t))
    } catch (i) {
        return Promise.reject(i)
    }
}
function Iw(a) {
    const t = typeof a;
    return a === null || t !== "object" && t !== "function"
}
function xw(a) {
    const t = Object.getPrototypeOf(a);
    return !t || t.isPrototypeOf(Object)
}
function Eo(a) {
    if (Iw(a))
        return String(a);
    if (xw(a) || Array.isArray(a))
        return JSON.stringify(a);
    if (typeof a.toJSON == "function")
        return Eo(a.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}
function df() {
    if (typeof qc.Buffer === void 0)
        throw new TypeError("[unstorage] Buffer is not supported!")
}
const Sc = "base64:";
function Pw(a) {
    if (typeof a == "string")
        return a;
    df();
    const t = qc.Buffer.from(a).toString("base64");
    return Sc + t
}
function Sw(a) {
    return typeof a != "string" || !a.startsWith(Sc) ? a : (df(),
    qc.Buffer.from(a.slice(Sc.length), "base64"))
}
function or(a) {
    return a ? a.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
}
function Rw(...a) {
    return or(a.join(":"))
}
function go(a) {
    return a = or(a),
    a ? a + ":" : ""
}
const Ow = "memory"
  , Aw = ()=>{
    const a = new Map;
    return {
        name: Ow,
        options: {},
        hasItem(t) {
            return a.has(t)
        },
        getItem(t) {
            return a.get(t) ?? null
        },
        getItemRaw(t) {
            return a.get(t) ?? null
        },
        setItem(t, i) {
            a.set(t, i)
        },
        setItemRaw(t, i) {
            a.set(t, i)
        },
        removeItem(t) {
            a.delete(t)
        },
        getKeys() {
            return Array.from(a.keys())
        },
        clear() {
            a.clear()
        },
        dispose() {
            a.clear()
        }
    }
}
;
function Tw(a={}) {
    const t = {
        mounts: {
            "": a.driver || Aw()
        },
        mountpoints: [""],
        watching: !1,
        watchListeners: [],
        unwatch: {}
    }
      , i = g=>{
        for (const E of t.mountpoints)
            if (g.startsWith(E))
                return {
                    base: E,
                    relativeKey: g.slice(E.length),
                    driver: t.mounts[E]
                };
        return {
            base: "",
            relativeKey: g,
            driver: t.mounts[""]
        }
    }
      , n = (g,E)=>t.mountpoints.filter(O=>O.startsWith(g) || E && g.startsWith(O)).map(O=>({
        relativeBase: g.length > O.length ? g.slice(O.length) : void 0,
        mountpoint: O,
        driver: t.mounts[O]
    }))
      , o = (g,E)=>{
        if (t.watching) {
            E = or(E);
            for (const O of t.watchListeners)
                O(g, E)
        }
    }
      , h = async()=>{
        if (!t.watching) {
            t.watching = !0;
            for (const g in t.mounts)
                t.unwatch[g] = await Zh(t.mounts[g], o, g)
        }
    }
      , p = async()=>{
        if (t.watching) {
            for (const g in t.unwatch)
                await t.unwatch[g]();
            t.unwatch = {},
            t.watching = !1
        }
    }
      , y = (g,E,O)=>{
        const N = new Map
          , j = T=>{
            let Y = N.get(T.base);
            return Y || (Y = {
                driver: T.driver,
                base: T.base,
                items: []
            },
            N.set(T.base, Y)),
            Y
        }
        ;
        for (const T of g) {
            const Y = typeof T == "string"
              , re = or(Y ? T : T.key)
              , oe = Y ? void 0 : T.value
              , ce = Y || !T.options ? E : {
                ...E,
                ...T.options
            }
              , ae = i(re);
            j(ae).items.push({
                key: re,
                value: oe,
                relativeKey: ae.relativeKey,
                options: ce
            })
        }
        return Promise.all([...N.values()].map(T=>O(T))).then(T=>T.flat())
    }
      , m = {
        hasItem(g, E={}) {
            g = or(g);
            const {relativeKey: O, driver: N} = i(g);
            return jt(N.hasItem, O, E)
        },
        getItem(g, E={}) {
            g = or(g);
            const {relativeKey: O, driver: N} = i(g);
            return jt(N.getItem, O, E).then(j=>po(j))
        },
        getItems(g, E) {
            return y(g, E, O=>O.driver.getItems ? jt(O.driver.getItems, O.items.map(N=>({
                key: N.relativeKey,
                options: N.options
            })), E).then(N=>N.map(j=>({
                key: Rw(O.base, j.key),
                value: po(j.value)
            }))) : Promise.all(O.items.map(N=>jt(O.driver.getItem, N.relativeKey, N.options).then(j=>({
                key: N.key,
                value: po(j)
            })))))
        },
        getItemRaw(g, E={}) {
            g = or(g);
            const {relativeKey: O, driver: N} = i(g);
            return N.getItemRaw ? jt(N.getItemRaw, O, E) : jt(N.getItem, O, E).then(j=>Sw(j))
        },
        async setItem(g, E, O={}) {
            if (E === void 0)
                return m.removeItem(g);
            g = or(g);
            const {relativeKey: N, driver: j} = i(g);
            j.setItem && (await jt(j.setItem, N, Eo(E), O),
            j.watch || o("update", g))
        },
        async setItems(g, E) {
            await y(g, E, async O=>{
                if (O.driver.setItems)
                    return jt(O.driver.setItems, O.items.map(N=>({
                        key: N.relativeKey,
                        value: Eo(N.value),
                        options: N.options
                    })), E);
                O.driver.setItem && await Promise.all(O.items.map(N=>jt(O.driver.setItem, N.relativeKey, Eo(N.value), N.options)))
            }
            )
        },
        async setItemRaw(g, E, O={}) {
            if (E === void 0)
                return m.removeItem(g, O);
            g = or(g);
            const {relativeKey: N, driver: j} = i(g);
            if (j.setItemRaw)
                await jt(j.setItemRaw, N, E, O);
            else if (j.setItem)
                await jt(j.setItem, N, Pw(E), O);
            else
                return;
            j.watch || o("update", g)
        },
        async removeItem(g, E={}) {
            typeof E == "boolean" && (E = {
                removeMeta: E
            }),
            g = or(g);
            const {relativeKey: O, driver: N} = i(g);
            N.removeItem && (await jt(N.removeItem, O, E),
            (E.removeMeta || E.removeMata) && await jt(N.removeItem, O + "$", E),
            N.watch || o("remove", g))
        },
        async getMeta(g, E={}) {
            typeof E == "boolean" && (E = {
                nativeOnly: E
            }),
            g = or(g);
            const {relativeKey: O, driver: N} = i(g)
              , j = Object.create(null);
            if (N.getMeta && Object.assign(j, await jt(N.getMeta, O, E)),
            !E.nativeOnly) {
                const T = await jt(N.getItem, O + "$", E).then(Y=>po(Y));
                T && typeof T == "object" && (typeof T.atime == "string" && (T.atime = new Date(T.atime)),
                typeof T.mtime == "string" && (T.mtime = new Date(T.mtime)),
                Object.assign(j, T))
            }
            return j
        },
        setMeta(g, E, O={}) {
            return this.setItem(g + "$", E, O)
        },
        removeMeta(g, E={}) {
            return this.removeItem(g + "$", E)
        },
        async getKeys(g, E={}) {
            g = go(g);
            const O = n(g, !0);
            let N = [];
            const j = [];
            for (const T of O) {
                const re = (await jt(T.driver.getKeys, T.relativeBase, E)).map(oe=>T.mountpoint + or(oe)).filter(oe=>!N.some(ce=>oe.startsWith(ce)));
                j.push(...re),
                N = [T.mountpoint, ...N.filter(oe=>!oe.startsWith(T.mountpoint))]
            }
            return g ? j.filter(T=>T.startsWith(g) && !T.endsWith("$")) : j.filter(T=>!T.endsWith("$"))
        },
        async clear(g, E={}) {
            g = go(g),
            await Promise.all(n(g, !1).map(async O=>{
                if (O.driver.clear)
                    return jt(O.driver.clear, O.relativeBase, E);
                if (O.driver.removeItem) {
                    const N = await O.driver.getKeys(O.relativeBase || "", E);
                    return Promise.all(N.map(j=>O.driver.removeItem(j, E)))
                }
            }
            ))
        },
        async dispose() {
            await Promise.all(Object.values(t.mounts).map(g=>Xh(g)))
        },
        async watch(g) {
            return await h(),
            t.watchListeners.push(g),
            async()=>{
                t.watchListeners = t.watchListeners.filter(E=>E !== g),
                t.watchListeners.length === 0 && await p()
            }
        },
        async unwatch() {
            t.watchListeners = [],
            await p()
        },
        mount(g, E) {
            if (g = go(g),
            g && t.mounts[g])
                throw new Error(`already mounted at ${g}`);
            return g && (t.mountpoints.push(g),
            t.mountpoints.sort((O,N)=>N.length - O.length)),
            t.mounts[g] = E,
            t.watching && Promise.resolve(Zh(E, o, g)).then(O=>{
                t.unwatch[g] = O
            }
            ).catch(console.error),
            m
        },
        async unmount(g, E=!0) {
            g = go(g),
            !(!g || !t.mounts[g]) && (t.watching && g in t.unwatch && (t.unwatch[g](),
            delete t.unwatch[g]),
            E && await Xh(t.mounts[g]),
            t.mountpoints = t.mountpoints.filter(O=>O !== g),
            delete t.mounts[g])
        },
        getMount(g="") {
            g = or(g) + ":";
            const E = i(g);
            return {
                driver: E.driver,
                base: E.base
            }
        },
        getMounts(g="", E={}) {
            return g = or(g),
            n(g, E.parents).map(N=>({
                driver: N.driver,
                base: N.mountpoint
            }))
        }
    };
    return m
}
function Zh(a, t, i) {
    return a.watch ? a.watch((n,o)=>t(n, i + o)) : ()=>{}
}
async function Xh(a) {
    typeof a.dispose == "function" && await jt(a.dispose)
}
function Fi(a) {
    return new Promise((t,i)=>{
        a.oncomplete = a.onsuccess = ()=>t(a.result),
        a.onabort = a.onerror = ()=>i(a.error)
    }
    )
}
function gf(a, t) {
    const i = indexedDB.open(a);
    i.onupgradeneeded = ()=>i.result.createObjectStore(t);
    const n = Fi(i);
    return (o,h)=>n.then(p=>h(p.transaction(t, o).objectStore(t)))
}
let hc;
function sn() {
    return hc || (hc = gf("keyval-store", "keyval")),
    hc
}
function el(a, t=sn()) {
    return t("readonly", i=>Fi(i.get(a)))
}
function Cw(a, t, i=sn()) {
    return i("readwrite", n=>(n.put(t, a),
    Fi(n.transaction)))
}
function $w(a, t=sn()) {
    return t("readwrite", i=>(i.delete(a),
    Fi(i.transaction)))
}
function Nw(a=sn()) {
    return a("readwrite", t=>(t.clear(),
    Fi(t.transaction)))
}
function Dw(a, t) {
    return a.openCursor().onsuccess = function() {
        this.result && (t(this.result),
        this.result.continue())
    }
    ,
    Fi(a.transaction)
}
function qw(a=sn()) {
    return a("readonly", t=>{
        if (t.getAllKeys)
            return Fi(t.getAllKeys());
        const i = [];
        return Dw(t, n=>i.push(n.key)).then(()=>i)
    }
    )
}
const jw = a=>JSON.stringify(a, (t,i)=>typeof i == "bigint" ? i.toString() + "n" : i)
  , Lw = a=>{
    const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g
      , i = a.replace(t, '$1"$2n"$3');
    return JSON.parse(i, (n,o)=>typeof o == "string" && o.match(/^\d+n$/) ? BigInt(o.substring(0, o.length - 1)) : o)
}
;
function nn(a) {
    if (typeof a != "string")
        throw new Error(`Cannot safe json parse value of type ${typeof a}`);
    try {
        return Lw(a)
    } catch {
        return a
    }
}
function Bi(a) {
    return typeof a == "string" ? a : jw(a) || ""
}
const Mw = "idb-keyval";
var zw = (a={})=>{
    const t = a.base && a.base.length > 0 ? `${a.base}:` : ""
      , i = o=>t + o;
    let n;
    return a.dbName && a.storeName && (n = gf(a.dbName, a.storeName)),
    {
        name: Mw,
        options: a,
        async hasItem(o) {
            return !(typeof await el(i(o), n) > "u")
        },
        async getItem(o) {
            return await el(i(o), n) ?? null
        },
        setItem(o, h) {
            return Cw(i(o), h, n)
        },
        removeItem(o) {
            return $w(i(o), n)
        },
        getKeys() {
            return qw(n)
        },
        clear() {
            return Nw(n)
        }
    }
}
;
const Uw = "WALLET_CONNECT_V2_INDEXED_DB"
  , Hw = "keyvaluestorage";
let kw = class {
    constructor() {
        this.indexedDb = Tw({
            driver: zw({
                dbName: Uw,
                storeName: Hw
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t=>[t.key, t.value])
    }
    async getItem(t) {
        const i = await this.indexedDb.getItem(t);
        if (i !== null)
            return i
    }
    async setItem(t, i) {
        await this.indexedDb.setItem(t, Bi(i))
    }
    async removeItem(t) {
        await this.indexedDb.removeItem(t)
    }
}
;
var lc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof ui < "u" ? ui : typeof self < "u" ? self : {}
  , Io = {
    exports: {}
};
(function() {
    let a;
    function t() {}
    a = t,
    a.prototype.getItem = function(i) {
        return this.hasOwnProperty(i) ? String(this[i]) : null
    }
    ,
    a.prototype.setItem = function(i, n) {
        this[i] = String(n)
    }
    ,
    a.prototype.removeItem = function(i) {
        delete this[i]
    }
    ,
    a.prototype.clear = function() {
        const i = this;
        Object.keys(i).forEach(function(n) {
            i[n] = void 0,
            delete i[n]
        })
    }
    ,
    a.prototype.key = function(i) {
        return i = i || 0,
        Object.keys(this)[i]
    }
    ,
    a.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }),
    typeof lc < "u" && lc.localStorage ? Io.exports = lc.localStorage : typeof window < "u" && window.localStorage ? Io.exports = window.localStorage : Io.exports = new t
}
)();
function Kw(a) {
    var t;
    return [a[0], nn((t = a[1]) != null ? t : "")]
}
class Bw {
    constructor() {
        this.localStorage = Io.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(Kw)
    }
    async getItem(t) {
        const i = this.localStorage.getItem(t);
        if (i !== null)
            return nn(i)
    }
    async setItem(t, i) {
        this.localStorage.setItem(t, Bi(i))
    }
    async removeItem(t) {
        this.localStorage.removeItem(t)
    }
}
const Fw = "wc_storage_version"
  , tl = 1
  , Vw = async(a,t,i)=>{
    const n = Fw
      , o = await t.getItem(n);
    if (o && o >= tl) {
        i(t);
        return
    }
    const h = await a.getKeys();
    if (!h.length) {
        i(t);
        return
    }
    const p = [];
    for (; h.length; ) {
        const y = h.shift();
        if (!y)
            continue;
        const m = y.toLowerCase();
        if (m.includes("wc@") || m.includes("walletconnect") || m.includes("wc_") || m.includes("wallet_connect")) {
            const g = await a.getItem(y);
            await t.setItem(y, g),
            p.push(y)
        }
    }
    await t.setItem(n, tl),
    i(t),
    Gw(a, p)
}
  , Gw = async(a,t)=>{
    t.length && t.forEach(async i=>{
        await a.removeItem(i)
    }
    )
}
;
let Ww = class {
    constructor() {
        this.initialized = !1,
        this.setInitialized = i=>{
            this.storage = i,
            this.initialized = !0
        }
        ;
        const t = new Bw;
        this.storage = t;
        try {
            const i = new kw;
            Vw(t, i, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(),
        this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(),
        this.storage.getEntries()
    }
    async getItem(t) {
        return await this.initialize(),
        this.storage.getItem(t)
    }
    async setItem(t, i) {
        return await this.initialize(),
        this.storage.setItem(t, i)
    }
    async removeItem(t) {
        return await this.initialize(),
        this.storage.removeItem(t)
    }
    async initialize() {
        this.initialized || await new Promise(t=>{
            const i = setInterval(()=>{
                this.initialized && (clearInterval(i),
                t())
            }
            , 20)
        }
        )
    }
}
;
var Es = {}
  , ks = {}
  , fc = {}
  , Ks = {};
class Vi {
}
const Jw = Object.freeze(Object.defineProperty({
    __proto__: null,
    IEvents: Vi
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Qw = pf(Jw);
var rl;
function Yw() {
    if (rl)
        return Ks;
    rl = 1,
    Object.defineProperty(Ks, "__esModule", {
        value: !0
    }),
    Ks.IHeartBeat = void 0;
    const a = Qw;
    class t extends a.IEvents {
        constructor(n) {
            super()
        }
    }
    return Ks.IHeartBeat = t,
    Ks
}
var il;
function yf() {
    return il || (il = 1,
    function(a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        rn.__exportStar(Yw(), a)
    }(fc)),
    fc
}
var pc = {}, Ki = {}, sl;
function Zw() {
    if (sl)
        return Ki;
    sl = 1,
    Object.defineProperty(Ki, "__esModule", {
        value: !0
    }),
    Ki.HEARTBEAT_EVENTS = Ki.HEARTBEAT_INTERVAL = void 0;
    const a = te;
    return Ki.HEARTBEAT_INTERVAL = a.FIVE_SECONDS,
    Ki.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
    },
    Ki
}
var nl;
function vf() {
    return nl || (nl = 1,
    function(a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        rn.__exportStar(Zw(), a)
    }(pc)),
    pc
}
var ol;
function Xw() {
    if (ol)
        return ks;
    ol = 1,
    Object.defineProperty(ks, "__esModule", {
        value: !0
    }),
    ks.HeartBeat = void 0;
    const a = rn
      , t = Sr
      , i = te
      , n = yf()
      , o = vf();
    class h extends n.IHeartBeat {
        constructor(y) {
            super(y),
            this.events = new t.EventEmitter,
            this.interval = o.HEARTBEAT_INTERVAL,
            this.interval = (y == null ? void 0 : y.interval) || o.HEARTBEAT_INTERVAL
        }
        static init(y) {
            return a.__awaiter(this, void 0, void 0, function*() {
                const m = new h(y);
                return yield m.init(),
                m
            })
        }
        init() {
            return a.__awaiter(this, void 0, void 0, function*() {
                yield this.initialize()
            })
        }
        stop() {
            clearInterval(this.intervalRef)
        }
        on(y, m) {
            this.events.on(y, m)
        }
        once(y, m) {
            this.events.once(y, m)
        }
        off(y, m) {
            this.events.off(y, m)
        }
        removeListener(y, m) {
            this.events.removeListener(y, m)
        }
        initialize() {
            return a.__awaiter(this, void 0, void 0, function*() {
                this.intervalRef = setInterval(()=>this.pulse(), i.toMiliseconds(this.interval))
            })
        }
        pulse() {
            this.events.emit(o.HEARTBEAT_EVENTS.pulse)
        }
    }
    return ks.HeartBeat = h,
    ks
}
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const t = rn;
    t.__exportStar(Xw(), a),
    t.__exportStar(yf(), a),
    t.__exportStar(vf(), a)
}
)(Es);
function eb(a) {
    try {
        return JSON.stringify(a)
    } catch {
        return '"[Circular]"'
    }
}
var tb = rb;
function rb(a, t, i) {
    var n = i && i.stringify || eb
      , o = 1;
    if (typeof a == "object" && a !== null) {
        var h = t.length + o;
        if (h === 1)
            return a;
        var p = new Array(h);
        p[0] = n(a);
        for (var y = 1; y < h; y++)
            p[y] = n(t[y]);
        return p.join(" ")
    }
    if (typeof a != "string")
        return a;
    var m = t.length;
    if (m === 0)
        return a;
    for (var g = "", E = 1 - o, O = -1, N = a && a.length || 0, j = 0; j < N; ) {
        if (a.charCodeAt(j) === 37 && j + 1 < N) {
            switch (O = O > -1 ? O : 0,
            a.charCodeAt(j + 1)) {
            case 100:
            case 102:
                if (E >= m || t[E] == null)
                    break;
                O < j && (g += a.slice(O, j)),
                g += Number(t[E]),
                O = j + 2,
                j++;
                break;
            case 105:
                if (E >= m || t[E] == null)
                    break;
                O < j && (g += a.slice(O, j)),
                g += Math.floor(Number(t[E])),
                O = j + 2,
                j++;
                break;
            case 79:
            case 111:
            case 106:
                if (E >= m || t[E] === void 0)
                    break;
                O < j && (g += a.slice(O, j));
                var T = typeof t[E];
                if (T === "string") {
                    g += "'" + t[E] + "'",
                    O = j + 2,
                    j++;
                    break
                }
                if (T === "function") {
                    g += t[E].name || "<anonymous>",
                    O = j + 2,
                    j++;
                    break
                }
                g += n(t[E]),
                O = j + 2,
                j++;
                break;
            case 115:
                if (E >= m)
                    break;
                O < j && (g += a.slice(O, j)),
                g += String(t[E]),
                O = j + 2,
                j++;
                break;
            case 37:
                O < j && (g += a.slice(O, j)),
                g += "%",
                O = j + 2,
                j++,
                E--;
                break
            }
            ++E
        }
        ++j
    }
    return O === -1 ? a : (O < N && (g += a.slice(O)),
    g)
}
const al = tb;
var ib = Fr;
const en = pb().console || {}
  , sb = {
    mapHttpRequest: yo,
    mapHttpResponse: yo,
    wrapRequestSerializer: dc,
    wrapResponseSerializer: dc,
    wrapErrorSerializer: dc,
    req: yo,
    res: yo,
    err: ub
};
function nb(a, t) {
    return Array.isArray(a) ? a.filter(function(n) {
        return n !== "!stdSerializers.err"
    }) : a === !0 ? Object.keys(t) : !1
}
function Fr(a) {
    a = a || {},
    a.browser = a.browser || {};
    const t = a.browser.transmit;
    if (t && typeof t.send != "function")
        throw Error("pino: transmit option must have a send function");
    const i = a.browser.write || en;
    a.browser.write && (a.browser.asObject = !0);
    const n = a.serializers || {}
      , o = nb(a.browser.serialize, n);
    let h = a.browser.serialize;
    Array.isArray(a.browser.serialize) && a.browser.serialize.indexOf("!stdSerializers.err") > -1 && (h = !1);
    const p = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof i == "function" && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i),
    a.enabled === !1 && (a.level = "silent");
    const y = a.level || "info"
      , m = Object.create(i);
    m.log || (m.log = tn),
    Object.defineProperty(m, "levelVal", {
        get: E
    }),
    Object.defineProperty(m, "level", {
        get: O,
        set: N
    });
    const g = {
        transmit: t,
        serialize: o,
        asObject: a.browser.asObject,
        levels: p,
        timestamp: hb(a)
    };
    m.levels = Fr.levels,
    m.level = y,
    m.setMaxListeners = m.getMaxListeners = m.emit = m.addListener = m.on = m.prependListener = m.once = m.prependOnceListener = m.removeListener = m.removeAllListeners = m.listeners = m.listenerCount = m.eventNames = m.write = m.flush = tn,
    m.serializers = n,
    m._serialize = o,
    m._stdErrSerialize = h,
    m.child = j,
    t && (m._logEvent = Rc());
    function E() {
        return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
    }
    function O() {
        return this._level
    }
    function N(T) {
        if (T !== "silent" && !this.levels.values[T])
            throw Error("unknown level " + T);
        this._level = T,
        ds(g, m, "error", "log"),
        ds(g, m, "fatal", "error"),
        ds(g, m, "warn", "error"),
        ds(g, m, "info", "log"),
        ds(g, m, "debug", "log"),
        ds(g, m, "trace", "log")
    }
    function j(T, Y) {
        if (!T)
            throw new Error("missing bindings for child Pino");
        Y = Y || {},
        o && T.serializers && (Y.serializers = T.serializers);
        const re = Y.serializers;
        if (o && re) {
            var oe = Object.assign({}, n, re)
              , ce = a.browser.serialize === !0 ? Object.keys(oe) : o;
            delete T.serializers,
            Ao([T], ce, oe, this._stdErrSerialize)
        }
        function ae(ee) {
            this._childLevel = (ee._childLevel | 0) + 1,
            this.error = gs(ee, T, "error"),
            this.fatal = gs(ee, T, "fatal"),
            this.warn = gs(ee, T, "warn"),
            this.info = gs(ee, T, "info"),
            this.debug = gs(ee, T, "debug"),
            this.trace = gs(ee, T, "trace"),
            oe && (this.serializers = oe,
            this._serialize = ce),
            t && (this._logEvent = Rc([].concat(ee._logEvent.bindings, T)))
        }
        return ae.prototype = this,
        new ae(this)
    }
    return m
}
Fr.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
    }
};
Fr.stdSerializers = sb;
Fr.stdTimeFunctions = Object.assign({}, {
    nullTime: mf,
    epochTime: wf,
    unixTime: lb,
    isoTime: fb
});
function ds(a, t, i, n) {
    const o = Object.getPrototypeOf(t);
    t[i] = t.levelVal > t.levels.values[i] ? tn : o[i] ? o[i] : en[i] || en[n] || tn,
    ob(a, t, i)
}
function ob(a, t, i) {
    !a.transmit && t[i] === tn || (t[i] = function(n) {
        return function() {
            const h = a.timestamp()
              , p = new Array(arguments.length)
              , y = Object.getPrototypeOf && Object.getPrototypeOf(this) === en ? en : this;
            for (var m = 0; m < p.length; m++)
                p[m] = arguments[m];
            if (a.serialize && !a.asObject && Ao(p, this._serialize, this.serializers, this._stdErrSerialize),
            a.asObject ? n.call(y, ab(this, i, p, h)) : n.apply(y, p),
            a.transmit) {
                const g = a.transmit.level || t.level
                  , E = Fr.levels.values[g]
                  , O = Fr.levels.values[i];
                if (O < E)
                    return;
                cb(this, {
                    ts: h,
                    methodLevel: i,
                    methodValue: O,
                    transmitLevel: g,
                    transmitValue: Fr.levels.values[a.transmit.level || t.level],
                    send: a.transmit.send,
                    val: t.levelVal
                }, p)
            }
        }
    }(t[i]))
}
function ab(a, t, i, n) {
    a._serialize && Ao(i, a._serialize, a.serializers, a._stdErrSerialize);
    const o = i.slice();
    let h = o[0];
    const p = {};
    n && (p.time = n),
    p.level = Fr.levels.values[t];
    let y = (a._childLevel | 0) + 1;
    if (y < 1 && (y = 1),
    h !== null && typeof h == "object") {
        for (; y-- && typeof o[0] == "object"; )
            Object.assign(p, o.shift());
        h = o.length ? al(o.shift(), o) : void 0
    } else
        typeof h == "string" && (h = al(o.shift(), o));
    return h !== void 0 && (p.msg = h),
    p
}
function Ao(a, t, i, n) {
    for (const o in a)
        if (n && a[o]instanceof Error)
            a[o] = Fr.stdSerializers.err(a[o]);
        else if (typeof a[o] == "object" && !Array.isArray(a[o]))
            for (const h in a[o])
                t && t.indexOf(h) > -1 && h in i && (a[o][h] = i[h](a[o][h]))
}
function gs(a, t, i) {
    return function() {
        const n = new Array(1 + arguments.length);
        n[0] = t;
        for (var o = 1; o < n.length; o++)
            n[o] = arguments[o - 1];
        return a[i].apply(this, n)
    }
}
function cb(a, t, i) {
    const n = t.send
      , o = t.ts
      , h = t.methodLevel
      , p = t.methodValue
      , y = t.val
      , m = a._logEvent.bindings;
    Ao(i, a._serialize || Object.keys(a.serializers), a.serializers, a._stdErrSerialize === void 0 ? !0 : a._stdErrSerialize),
    a._logEvent.ts = o,
    a._logEvent.messages = i.filter(function(g) {
        return m.indexOf(g) === -1
    }),
    a._logEvent.level.label = h,
    a._logEvent.level.value = p,
    n(h, a._logEvent, y),
    a._logEvent = Rc(m)
}
function Rc(a) {
    return {
        ts: 0,
        messages: [],
        bindings: a || [],
        level: {
            label: "",
            value: 0
        }
    }
}
function ub(a) {
    const t = {
        type: a.constructor.name,
        msg: a.message,
        stack: a.stack
    };
    for (const i in a)
        t[i] === void 0 && (t[i] = a[i]);
    return t
}
function hb(a) {
    return typeof a.timestamp == "function" ? a.timestamp : a.timestamp === !1 ? mf : wf
}
function yo() {
    return {}
}
function dc(a) {
    return a
}
function tn() {}
function mf() {
    return !1
}
function wf() {
    return Date.now()
}
function lb() {
    return Math.round(Date.now() / 1e3)
}
function fb() {
    return new Date(Date.now()).toISOString()
}
function pb() {
    function a(t) {
        return typeof t < "u" && t
    }
    try {
        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
            get: function() {
                return delete Object.prototype.globalThis,
                this.globalThis = this
            },
            configurable: !0
        }),
        globalThis
    } catch {
        return a(self) || a(window) || a(this) || {}
    }
}
const To = Oo(ib)
  , db = {
    level: "info"
}
  , on = "custom_context";
var gb = Object.defineProperty
  , yb = Object.defineProperties
  , vb = Object.getOwnPropertyDescriptors
  , cl = Object.getOwnPropertySymbols
  , mb = Object.prototype.hasOwnProperty
  , wb = Object.prototype.propertyIsEnumerable
  , ul = (a,t,i)=>t in a ? gb(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , bb = (a,t)=>{
    for (var i in t || (t = {}))
        mb.call(t, i) && ul(a, i, t[i]);
    if (cl)
        for (var i of cl(t))
            wb.call(t, i) && ul(a, i, t[i]);
    return a
}
  , _b = (a,t)=>yb(a, vb(t));
function Co(a) {
    return _b(bb({}, a), {
        level: (a == null ? void 0 : a.level) || db.level
    })
}
function Eb(a, t=on) {
    return a[t] || ""
}
function Ib(a, t, i=on) {
    return a[i] = t,
    a
}
function cr(a, t=on) {
    let i = "";
    return typeof a.bindings > "u" ? i = Eb(a, t) : i = a.bindings().context || "",
    i
}
function xb(a, t, i=on) {
    const n = cr(a, i);
    return n.trim() ? `${n}/${t}` : t
}
function ur(a, t, i=on) {
    const n = xb(a, t, i)
      , o = a.child({
        context: n
    });
    return Ib(o, n, i)
}
let Pb = class extends Vi {
    constructor(t) {
        super(),
        this.opts = t,
        this.protocol = "wc",
        this.version = 2
    }
}
  , Sb = class extends Vi {
    constructor(t, i) {
        super(),
        this.core = t,
        this.logger = i,
        this.records = new Map
    }
}
  , Rb = class {
    constructor(t, i) {
        this.logger = t,
        this.core = i
    }
}
  , Ob = class extends Vi {
    constructor(t, i) {
        super(),
        this.relayer = t,
        this.logger = i
    }
}
  , Ab = class extends Vi {
    constructor(t) {
        super()
    }
}
  , Tb = class {
    constructor(t, i, n, o) {
        this.core = t,
        this.logger = i,
        this.name = n
    }
}
  , Cb = class extends Vi {
    constructor(t, i) {
        super(),
        this.relayer = t,
        this.logger = i
    }
}
  , $b = class extends Vi {
    constructor(t, i) {
        super(),
        this.core = t,
        this.logger = i
    }
}
  , Nb = class {
    constructor(t, i) {
        this.projectId = t,
        this.logger = i
    }
}
  , Db = class {
    constructor(t, i) {
        this.projectId = t,
        this.logger = i
    }
}
  , qb = class {
    constructor(t) {
        this.opts = t,
        this.protocol = "wc",
        this.version = 2
    }
}
  , jb = class {
    constructor(t) {
        this.client = t
    }
}
;
var Mc = {}
  , bf = {};
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = T0
      , i = nf;
    a.DIGEST_LENGTH = 64,
    a.BLOCK_SIZE = 128;
    var n = function() {
        function y() {
            this.digestLength = a.DIGEST_LENGTH,
            this.blockSize = a.BLOCK_SIZE,
            this._stateHi = new Int32Array(8),
            this._stateLo = new Int32Array(8),
            this._tempHi = new Int32Array(16),
            this._tempLo = new Int32Array(16),
            this._buffer = new Uint8Array(256),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this.reset()
        }
        return y.prototype._initState = function() {
            this._stateHi[0] = 1779033703,
            this._stateHi[1] = 3144134277,
            this._stateHi[2] = 1013904242,
            this._stateHi[3] = 2773480762,
            this._stateHi[4] = 1359893119,
            this._stateHi[5] = 2600822924,
            this._stateHi[6] = 528734635,
            this._stateHi[7] = 1541459225,
            this._stateLo[0] = 4089235720,
            this._stateLo[1] = 2227873595,
            this._stateLo[2] = 4271175723,
            this._stateLo[3] = 1595750129,
            this._stateLo[4] = 2917565137,
            this._stateLo[5] = 725511199,
            this._stateLo[6] = 4215389547,
            this._stateLo[7] = 327033209
        }
        ,
        y.prototype.reset = function() {
            return this._initState(),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this
        }
        ,
        y.prototype.clean = function() {
            i.wipe(this._buffer),
            i.wipe(this._tempHi),
            i.wipe(this._tempLo),
            this.reset()
        }
        ,
        y.prototype.update = function(m, g) {
            if (g === void 0 && (g = m.length),
            this._finished)
                throw new Error("SHA512: can't update because hash was finished.");
            var E = 0;
            if (this._bytesHashed += g,
            this._bufferLength > 0) {
                for (; this._bufferLength < a.BLOCK_SIZE && g > 0; )
                    this._buffer[this._bufferLength++] = m[E++],
                    g--;
                this._bufferLength === this.blockSize && (h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                this._bufferLength = 0)
            }
            for (g >= this.blockSize && (E = h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, m, E, g),
            g %= this.blockSize); g > 0; )
                this._buffer[this._bufferLength++] = m[E++],
                g--;
            return this
        }
        ,
        y.prototype.finish = function(m) {
            if (!this._finished) {
                var g = this._bytesHashed
                  , E = this._bufferLength
                  , O = g / 536870912 | 0
                  , N = g << 3
                  , j = g % 128 < 112 ? 128 : 256;
                this._buffer[E] = 128;
                for (var T = E + 1; T < j - 8; T++)
                    this._buffer[T] = 0;
                t.writeUint32BE(O, this._buffer, j - 8),
                t.writeUint32BE(N, this._buffer, j - 4),
                h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, j),
                this._finished = !0
            }
            for (var T = 0; T < this.digestLength / 8; T++)
                t.writeUint32BE(this._stateHi[T], m, T * 8),
                t.writeUint32BE(this._stateLo[T], m, T * 8 + 4);
            return this
        }
        ,
        y.prototype.digest = function() {
            var m = new Uint8Array(this.digestLength);
            return this.finish(m),
            m
        }
        ,
        y.prototype.saveState = function() {
            if (this._finished)
                throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }
        ,
        y.prototype.restoreState = function(m) {
            return this._stateHi.set(m.stateHi),
            this._stateLo.set(m.stateLo),
            this._bufferLength = m.bufferLength,
            m.buffer && this._buffer.set(m.buffer),
            this._bytesHashed = m.bytesHashed,
            this._finished = !1,
            this
        }
        ,
        y.prototype.cleanSavedState = function(m) {
            i.wipe(m.stateHi),
            i.wipe(m.stateLo),
            m.buffer && i.wipe(m.buffer),
            m.bufferLength = 0,
            m.bytesHashed = 0
        }
        ,
        y
    }();
    a.SHA512 = n;
    var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
    function h(y, m, g, E, O, N, j) {
        for (var T = g[0], Y = g[1], re = g[2], oe = g[3], ce = g[4], ae = g[5], ee = g[6], he = g[7], pe = E[0], Q = E[1], ve = E[2], wt = E[3], st = E[4], Ke = E[5], Lt = E[6], Mt = E[7], b, S, J, le, k, H, K, B; j >= 128; ) {
            for (var Xe = 0; Xe < 16; Xe++) {
                var nt = 8 * Xe + N;
                y[Xe] = t.readUint32BE(O, nt),
                m[Xe] = t.readUint32BE(O, nt + 4)
            }
            for (var Xe = 0; Xe < 80; Xe++) {
                var Oi = T
                  , Ee = Y
                  , Rr = re
                  , D = oe
                  , $ = ce
                  , A = ae
                  , u = ee
                  , I = he
                  , Z = pe
                  , ue = Q
                  , me = ve
                  , Re = wt
                  , Ae = st
                  , Ie = Ke
                  , bt = Lt
                  , dt = Mt;
                if (b = he,
                S = Mt,
                k = S & 65535,
                H = S >>> 16,
                K = b & 65535,
                B = b >>> 16,
                b = (ce >>> 14 | st << 18) ^ (ce >>> 18 | st << 14) ^ (st >>> 9 | ce << 23),
                S = (st >>> 14 | ce << 18) ^ (st >>> 18 | ce << 14) ^ (ce >>> 9 | st << 23),
                k += S & 65535,
                H += S >>> 16,
                K += b & 65535,
                B += b >>> 16,
                b = ce & ae ^ ~ce & ee,
                S = st & Ke ^ ~st & Lt,
                k += S & 65535,
                H += S >>> 16,
                K += b & 65535,
                B += b >>> 16,
                b = o[Xe * 2],
                S = o[Xe * 2 + 1],
                k += S & 65535,
                H += S >>> 16,
                K += b & 65535,
                B += b >>> 16,
                b = y[Xe % 16],
                S = m[Xe % 16],
                k += S & 65535,
                H += S >>> 16,
                K += b & 65535,
                B += b >>> 16,
                H += k >>> 16,
                K += H >>> 16,
                B += K >>> 16,
                J = K & 65535 | B << 16,
                le = k & 65535 | H << 16,
                b = J,
                S = le,
                k = S & 65535,
                H = S >>> 16,
                K = b & 65535,
                B = b >>> 16,
                b = (T >>> 28 | pe << 4) ^ (pe >>> 2 | T << 30) ^ (pe >>> 7 | T << 25),
                S = (pe >>> 28 | T << 4) ^ (T >>> 2 | pe << 30) ^ (T >>> 7 | pe << 25),
                k += S & 65535,
                H += S >>> 16,
                K += b & 65535,
                B += b >>> 16,
                b = T & Y ^ T & re ^ Y & re,
                S = pe & Q ^ pe & ve ^ Q & ve,
                k += S & 65535,
                H += S >>> 16,
                K += b & 65535,
                B += b >>> 16,
                H += k >>> 16,
                K += H >>> 16,
                B += K >>> 16,
                I = K & 65535 | B << 16,
                dt = k & 65535 | H << 16,
                b = D,
                S = Re,
                k = S & 65535,
                H = S >>> 16,
                K = b & 65535,
                B = b >>> 16,
                b = J,
                S = le,
                k += S & 65535,
                H += S >>> 16,
                K += b & 65535,
                B += b >>> 16,
                H += k >>> 16,
                K += H >>> 16,
                B += K >>> 16,
                D = K & 65535 | B << 16,
                Re = k & 65535 | H << 16,
                Y = Oi,
                re = Ee,
                oe = Rr,
                ce = D,
                ae = $,
                ee = A,
                he = u,
                T = I,
                Q = Z,
                ve = ue,
                wt = me,
                st = Re,
                Ke = Ae,
                Lt = Ie,
                Mt = bt,
                pe = dt,
                Xe % 16 === 15)
                    for (var nt = 0; nt < 16; nt++)
                        b = y[nt],
                        S = m[nt],
                        k = S & 65535,
                        H = S >>> 16,
                        K = b & 65535,
                        B = b >>> 16,
                        b = y[(nt + 9) % 16],
                        S = m[(nt + 9) % 16],
                        k += S & 65535,
                        H += S >>> 16,
                        K += b & 65535,
                        B += b >>> 16,
                        J = y[(nt + 1) % 16],
                        le = m[(nt + 1) % 16],
                        b = (J >>> 1 | le << 31) ^ (J >>> 8 | le << 24) ^ J >>> 7,
                        S = (le >>> 1 | J << 31) ^ (le >>> 8 | J << 24) ^ (le >>> 7 | J << 25),
                        k += S & 65535,
                        H += S >>> 16,
                        K += b & 65535,
                        B += b >>> 16,
                        J = y[(nt + 14) % 16],
                        le = m[(nt + 14) % 16],
                        b = (J >>> 19 | le << 13) ^ (le >>> 29 | J << 3) ^ J >>> 6,
                        S = (le >>> 19 | J << 13) ^ (J >>> 29 | le << 3) ^ (le >>> 6 | J << 26),
                        k += S & 65535,
                        H += S >>> 16,
                        K += b & 65535,
                        B += b >>> 16,
                        H += k >>> 16,
                        K += H >>> 16,
                        B += K >>> 16,
                        y[nt] = K & 65535 | B << 16,
                        m[nt] = k & 65535 | H << 16
            }
            b = T,
            S = pe,
            k = S & 65535,
            H = S >>> 16,
            K = b & 65535,
            B = b >>> 16,
            b = g[0],
            S = E[0],
            k += S & 65535,
            H += S >>> 16,
            K += b & 65535,
            B += b >>> 16,
            H += k >>> 16,
            K += H >>> 16,
            B += K >>> 16,
            g[0] = T = K & 65535 | B << 16,
            E[0] = pe = k & 65535 | H << 16,
            b = Y,
            S = Q,
            k = S & 65535,
            H = S >>> 16,
            K = b & 65535,
            B = b >>> 16,
            b = g[1],
            S = E[1],
            k += S & 65535,
            H += S >>> 16,
            K += b & 65535,
            B += b >>> 16,
            H += k >>> 16,
            K += H >>> 16,
            B += K >>> 16,
            g[1] = Y = K & 65535 | B << 16,
            E[1] = Q = k & 65535 | H << 16,
            b = re,
            S = ve,
            k = S & 65535,
            H = S >>> 16,
            K = b & 65535,
            B = b >>> 16,
            b = g[2],
            S = E[2],
            k += S & 65535,
            H += S >>> 16,
            K += b & 65535,
            B += b >>> 16,
            H += k >>> 16,
            K += H >>> 16,
            B += K >>> 16,
            g[2] = re = K & 65535 | B << 16,
            E[2] = ve = k & 65535 | H << 16,
            b = oe,
            S = wt,
            k = S & 65535,
            H = S >>> 16,
            K = b & 65535,
            B = b >>> 16,
            b = g[3],
            S = E[3],
            k += S & 65535,
            H += S >>> 16,
            K += b & 65535,
            B += b >>> 16,
            H += k >>> 16,
            K += H >>> 16,
            B += K >>> 16,
            g[3] = oe = K & 65535 | B << 16,
            E[3] = wt = k & 65535 | H << 16,
            b = ce,
            S = st,
            k = S & 65535,
            H = S >>> 16,
            K = b & 65535,
            B = b >>> 16,
            b = g[4],
            S = E[4],
            k += S & 65535,
            H += S >>> 16,
            K += b & 65535,
            B += b >>> 16,
            H += k >>> 16,
            K += H >>> 16,
            B += K >>> 16,
            g[4] = ce = K & 65535 | B << 16,
            E[4] = st = k & 65535 | H << 16,
            b = ae,
            S = Ke,
            k = S & 65535,
            H = S >>> 16,
            K = b & 65535,
            B = b >>> 16,
            b = g[5],
            S = E[5],
            k += S & 65535,
            H += S >>> 16,
            K += b & 65535,
            B += b >>> 16,
            H += k >>> 16,
            K += H >>> 16,
            B += K >>> 16,
            g[5] = ae = K & 65535 | B << 16,
            E[5] = Ke = k & 65535 | H << 16,
            b = ee,
            S = Lt,
            k = S & 65535,
            H = S >>> 16,
            K = b & 65535,
            B = b >>> 16,
            b = g[6],
            S = E[6],
            k += S & 65535,
            H += S >>> 16,
            K += b & 65535,
            B += b >>> 16,
            H += k >>> 16,
            K += H >>> 16,
            B += K >>> 16,
            g[6] = ee = K & 65535 | B << 16,
            E[6] = Lt = k & 65535 | H << 16,
            b = he,
            S = Mt,
            k = S & 65535,
            H = S >>> 16,
            K = b & 65535,
            B = b >>> 16,
            b = g[7],
            S = E[7],
            k += S & 65535,
            H += S >>> 16,
            K += b & 65535,
            B += b >>> 16,
            H += k >>> 16,
            K += H >>> 16,
            B += K >>> 16,
            g[7] = he = K & 65535 | B << 16,
            E[7] = Mt = k & 65535 | H << 16,
            N += 128,
            j -= 128
        }
        return N
    }
    function p(y) {
        var m = new n;
        m.update(y);
        var g = m.digest();
        return m.clean(),
        g
    }
    a.hash = p
}
)(bf);
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.convertSecretKeyToX25519 = a.convertPublicKeyToX25519 = a.verify = a.sign = a.extractPublicKeyFromSecretKey = a.generateKeyPair = a.generateKeyPairFromSeed = a.SEED_LENGTH = a.SECRET_KEY_LENGTH = a.PUBLIC_KEY_LENGTH = a.SIGNATURE_LENGTH = void 0;
    const t = of
      , i = bf
      , n = nf;
    a.SIGNATURE_LENGTH = 64,
    a.PUBLIC_KEY_LENGTH = 32,
    a.SECRET_KEY_LENGTH = 64,
    a.SEED_LENGTH = 32;
    function o(D) {
        const $ = new Float64Array(16);
        if (D)
            for (let A = 0; A < D.length; A++)
                $[A] = D[A];
        return $
    }
    const h = new Uint8Array(32);
    h[0] = 9;
    const p = o()
      , y = o([1])
      , m = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
      , g = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
      , E = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
      , O = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
      , N = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function j(D, $) {
        for (let A = 0; A < 16; A++)
            D[A] = $[A] | 0
    }
    function T(D) {
        let $ = 1;
        for (let A = 0; A < 16; A++) {
            let u = D[A] + $ + 65535;
            $ = Math.floor(u / 65536),
            D[A] = u - $ * 65536
        }
        D[0] += $ - 1 + 37 * ($ - 1)
    }
    function Y(D, $, A) {
        const u = ~(A - 1);
        for (let I = 0; I < 16; I++) {
            const Z = u & (D[I] ^ $[I]);
            D[I] ^= Z,
            $[I] ^= Z
        }
    }
    function re(D, $) {
        const A = o()
          , u = o();
        for (let I = 0; I < 16; I++)
            u[I] = $[I];
        T(u),
        T(u),
        T(u);
        for (let I = 0; I < 2; I++) {
            A[0] = u[0] - 65517;
            for (let ue = 1; ue < 15; ue++)
                A[ue] = u[ue] - 65535 - (A[ue - 1] >> 16 & 1),
                A[ue - 1] &= 65535;
            A[15] = u[15] - 32767 - (A[14] >> 16 & 1);
            const Z = A[15] >> 16 & 1;
            A[14] &= 65535,
            Y(u, A, 1 - Z)
        }
        for (let I = 0; I < 16; I++)
            D[2 * I] = u[I] & 255,
            D[2 * I + 1] = u[I] >> 8
    }
    function oe(D, $) {
        let A = 0;
        for (let u = 0; u < 32; u++)
            A |= D[u] ^ $[u];
        return (1 & A - 1 >>> 8) - 1
    }
    function ce(D, $) {
        const A = new Uint8Array(32)
          , u = new Uint8Array(32);
        return re(A, D),
        re(u, $),
        oe(A, u)
    }
    function ae(D) {
        const $ = new Uint8Array(32);
        return re($, D),
        $[0] & 1
    }
    function ee(D, $) {
        for (let A = 0; A < 16; A++)
            D[A] = $[2 * A] + ($[2 * A + 1] << 8);
        D[15] &= 32767
    }
    function he(D, $, A) {
        for (let u = 0; u < 16; u++)
            D[u] = $[u] + A[u]
    }
    function pe(D, $, A) {
        for (let u = 0; u < 16; u++)
            D[u] = $[u] - A[u]
    }
    function Q(D, $, A) {
        let u, I, Z = 0, ue = 0, me = 0, Re = 0, Ae = 0, Ie = 0, bt = 0, dt = 0, et = 0, Ce = 0, Be = 0, Fe = 0, tt = 0, qe = 0, Ve = 0, Oe = 0, Le = 0, ot = 0, Ne = 0, _t = 0, Tt = 0, zt = 0, Ut = 0, Nt = 0, Gt = 0, Xt = 0, Mr = 0, Wt = 0, Vr = 0, fi = 0, Ai = 0, at = A[0], Je = A[1], ct = A[2], ut = A[3], rt = A[4], Qe = A[5], Et = A[6], It = A[7], ht = A[8], xt = A[9], lt = A[10], gt = A[11], ft = A[12], ke = A[13], Pt = A[14], St = A[15];
        u = $[0],
        Z += u * at,
        ue += u * Je,
        me += u * ct,
        Re += u * ut,
        Ae += u * rt,
        Ie += u * Qe,
        bt += u * Et,
        dt += u * It,
        et += u * ht,
        Ce += u * xt,
        Be += u * lt,
        Fe += u * gt,
        tt += u * ft,
        qe += u * ke,
        Ve += u * Pt,
        Oe += u * St,
        u = $[1],
        ue += u * at,
        me += u * Je,
        Re += u * ct,
        Ae += u * ut,
        Ie += u * rt,
        bt += u * Qe,
        dt += u * Et,
        et += u * It,
        Ce += u * ht,
        Be += u * xt,
        Fe += u * lt,
        tt += u * gt,
        qe += u * ft,
        Ve += u * ke,
        Oe += u * Pt,
        Le += u * St,
        u = $[2],
        me += u * at,
        Re += u * Je,
        Ae += u * ct,
        Ie += u * ut,
        bt += u * rt,
        dt += u * Qe,
        et += u * Et,
        Ce += u * It,
        Be += u * ht,
        Fe += u * xt,
        tt += u * lt,
        qe += u * gt,
        Ve += u * ft,
        Oe += u * ke,
        Le += u * Pt,
        ot += u * St,
        u = $[3],
        Re += u * at,
        Ae += u * Je,
        Ie += u * ct,
        bt += u * ut,
        dt += u * rt,
        et += u * Qe,
        Ce += u * Et,
        Be += u * It,
        Fe += u * ht,
        tt += u * xt,
        qe += u * lt,
        Ve += u * gt,
        Oe += u * ft,
        Le += u * ke,
        ot += u * Pt,
        Ne += u * St,
        u = $[4],
        Ae += u * at,
        Ie += u * Je,
        bt += u * ct,
        dt += u * ut,
        et += u * rt,
        Ce += u * Qe,
        Be += u * Et,
        Fe += u * It,
        tt += u * ht,
        qe += u * xt,
        Ve += u * lt,
        Oe += u * gt,
        Le += u * ft,
        ot += u * ke,
        Ne += u * Pt,
        _t += u * St,
        u = $[5],
        Ie += u * at,
        bt += u * Je,
        dt += u * ct,
        et += u * ut,
        Ce += u * rt,
        Be += u * Qe,
        Fe += u * Et,
        tt += u * It,
        qe += u * ht,
        Ve += u * xt,
        Oe += u * lt,
        Le += u * gt,
        ot += u * ft,
        Ne += u * ke,
        _t += u * Pt,
        Tt += u * St,
        u = $[6],
        bt += u * at,
        dt += u * Je,
        et += u * ct,
        Ce += u * ut,
        Be += u * rt,
        Fe += u * Qe,
        tt += u * Et,
        qe += u * It,
        Ve += u * ht,
        Oe += u * xt,
        Le += u * lt,
        ot += u * gt,
        Ne += u * ft,
        _t += u * ke,
        Tt += u * Pt,
        zt += u * St,
        u = $[7],
        dt += u * at,
        et += u * Je,
        Ce += u * ct,
        Be += u * ut,
        Fe += u * rt,
        tt += u * Qe,
        qe += u * Et,
        Ve += u * It,
        Oe += u * ht,
        Le += u * xt,
        ot += u * lt,
        Ne += u * gt,
        _t += u * ft,
        Tt += u * ke,
        zt += u * Pt,
        Ut += u * St,
        u = $[8],
        et += u * at,
        Ce += u * Je,
        Be += u * ct,
        Fe += u * ut,
        tt += u * rt,
        qe += u * Qe,
        Ve += u * Et,
        Oe += u * It,
        Le += u * ht,
        ot += u * xt,
        Ne += u * lt,
        _t += u * gt,
        Tt += u * ft,
        zt += u * ke,
        Ut += u * Pt,
        Nt += u * St,
        u = $[9],
        Ce += u * at,
        Be += u * Je,
        Fe += u * ct,
        tt += u * ut,
        qe += u * rt,
        Ve += u * Qe,
        Oe += u * Et,
        Le += u * It,
        ot += u * ht,
        Ne += u * xt,
        _t += u * lt,
        Tt += u * gt,
        zt += u * ft,
        Ut += u * ke,
        Nt += u * Pt,
        Gt += u * St,
        u = $[10],
        Be += u * at,
        Fe += u * Je,
        tt += u * ct,
        qe += u * ut,
        Ve += u * rt,
        Oe += u * Qe,
        Le += u * Et,
        ot += u * It,
        Ne += u * ht,
        _t += u * xt,
        Tt += u * lt,
        zt += u * gt,
        Ut += u * ft,
        Nt += u * ke,
        Gt += u * Pt,
        Xt += u * St,
        u = $[11],
        Fe += u * at,
        tt += u * Je,
        qe += u * ct,
        Ve += u * ut,
        Oe += u * rt,
        Le += u * Qe,
        ot += u * Et,
        Ne += u * It,
        _t += u * ht,
        Tt += u * xt,
        zt += u * lt,
        Ut += u * gt,
        Nt += u * ft,
        Gt += u * ke,
        Xt += u * Pt,
        Mr += u * St,
        u = $[12],
        tt += u * at,
        qe += u * Je,
        Ve += u * ct,
        Oe += u * ut,
        Le += u * rt,
        ot += u * Qe,
        Ne += u * Et,
        _t += u * It,
        Tt += u * ht,
        zt += u * xt,
        Ut += u * lt,
        Nt += u * gt,
        Gt += u * ft,
        Xt += u * ke,
        Mr += u * Pt,
        Wt += u * St,
        u = $[13],
        qe += u * at,
        Ve += u * Je,
        Oe += u * ct,
        Le += u * ut,
        ot += u * rt,
        Ne += u * Qe,
        _t += u * Et,
        Tt += u * It,
        zt += u * ht,
        Ut += u * xt,
        Nt += u * lt,
        Gt += u * gt,
        Xt += u * ft,
        Mr += u * ke,
        Wt += u * Pt,
        Vr += u * St,
        u = $[14],
        Ve += u * at,
        Oe += u * Je,
        Le += u * ct,
        ot += u * ut,
        Ne += u * rt,
        _t += u * Qe,
        Tt += u * Et,
        zt += u * It,
        Ut += u * ht,
        Nt += u * xt,
        Gt += u * lt,
        Xt += u * gt,
        Mr += u * ft,
        Wt += u * ke,
        Vr += u * Pt,
        fi += u * St,
        u = $[15],
        Oe += u * at,
        Le += u * Je,
        ot += u * ct,
        Ne += u * ut,
        _t += u * rt,
        Tt += u * Qe,
        zt += u * Et,
        Ut += u * It,
        Nt += u * ht,
        Gt += u * xt,
        Xt += u * lt,
        Mr += u * gt,
        Wt += u * ft,
        Vr += u * ke,
        fi += u * Pt,
        Ai += u * St,
        Z += 38 * Le,
        ue += 38 * ot,
        me += 38 * Ne,
        Re += 38 * _t,
        Ae += 38 * Tt,
        Ie += 38 * zt,
        bt += 38 * Ut,
        dt += 38 * Nt,
        et += 38 * Gt,
        Ce += 38 * Xt,
        Be += 38 * Mr,
        Fe += 38 * Wt,
        tt += 38 * Vr,
        qe += 38 * fi,
        Ve += 38 * Ai,
        I = 1,
        u = Z + I + 65535,
        I = Math.floor(u / 65536),
        Z = u - I * 65536,
        u = ue + I + 65535,
        I = Math.floor(u / 65536),
        ue = u - I * 65536,
        u = me + I + 65535,
        I = Math.floor(u / 65536),
        me = u - I * 65536,
        u = Re + I + 65535,
        I = Math.floor(u / 65536),
        Re = u - I * 65536,
        u = Ae + I + 65535,
        I = Math.floor(u / 65536),
        Ae = u - I * 65536,
        u = Ie + I + 65535,
        I = Math.floor(u / 65536),
        Ie = u - I * 65536,
        u = bt + I + 65535,
        I = Math.floor(u / 65536),
        bt = u - I * 65536,
        u = dt + I + 65535,
        I = Math.floor(u / 65536),
        dt = u - I * 65536,
        u = et + I + 65535,
        I = Math.floor(u / 65536),
        et = u - I * 65536,
        u = Ce + I + 65535,
        I = Math.floor(u / 65536),
        Ce = u - I * 65536,
        u = Be + I + 65535,
        I = Math.floor(u / 65536),
        Be = u - I * 65536,
        u = Fe + I + 65535,
        I = Math.floor(u / 65536),
        Fe = u - I * 65536,
        u = tt + I + 65535,
        I = Math.floor(u / 65536),
        tt = u - I * 65536,
        u = qe + I + 65535,
        I = Math.floor(u / 65536),
        qe = u - I * 65536,
        u = Ve + I + 65535,
        I = Math.floor(u / 65536),
        Ve = u - I * 65536,
        u = Oe + I + 65535,
        I = Math.floor(u / 65536),
        Oe = u - I * 65536,
        Z += I - 1 + 37 * (I - 1),
        I = 1,
        u = Z + I + 65535,
        I = Math.floor(u / 65536),
        Z = u - I * 65536,
        u = ue + I + 65535,
        I = Math.floor(u / 65536),
        ue = u - I * 65536,
        u = me + I + 65535,
        I = Math.floor(u / 65536),
        me = u - I * 65536,
        u = Re + I + 65535,
        I = Math.floor(u / 65536),
        Re = u - I * 65536,
        u = Ae + I + 65535,
        I = Math.floor(u / 65536),
        Ae = u - I * 65536,
        u = Ie + I + 65535,
        I = Math.floor(u / 65536),
        Ie = u - I * 65536,
        u = bt + I + 65535,
        I = Math.floor(u / 65536),
        bt = u - I * 65536,
        u = dt + I + 65535,
        I = Math.floor(u / 65536),
        dt = u - I * 65536,
        u = et + I + 65535,
        I = Math.floor(u / 65536),
        et = u - I * 65536,
        u = Ce + I + 65535,
        I = Math.floor(u / 65536),
        Ce = u - I * 65536,
        u = Be + I + 65535,
        I = Math.floor(u / 65536),
        Be = u - I * 65536,
        u = Fe + I + 65535,
        I = Math.floor(u / 65536),
        Fe = u - I * 65536,
        u = tt + I + 65535,
        I = Math.floor(u / 65536),
        tt = u - I * 65536,
        u = qe + I + 65535,
        I = Math.floor(u / 65536),
        qe = u - I * 65536,
        u = Ve + I + 65535,
        I = Math.floor(u / 65536),
        Ve = u - I * 65536,
        u = Oe + I + 65535,
        I = Math.floor(u / 65536),
        Oe = u - I * 65536,
        Z += I - 1 + 37 * (I - 1),
        D[0] = Z,
        D[1] = ue,
        D[2] = me,
        D[3] = Re,
        D[4] = Ae,
        D[5] = Ie,
        D[6] = bt,
        D[7] = dt,
        D[8] = et,
        D[9] = Ce,
        D[10] = Be,
        D[11] = Fe,
        D[12] = tt,
        D[13] = qe,
        D[14] = Ve,
        D[15] = Oe
    }
    function ve(D, $) {
        Q(D, $, $)
    }
    function wt(D, $) {
        const A = o();
        let u;
        for (u = 0; u < 16; u++)
            A[u] = $[u];
        for (u = 253; u >= 0; u--)
            ve(A, A),
            u !== 2 && u !== 4 && Q(A, A, $);
        for (u = 0; u < 16; u++)
            D[u] = A[u]
    }
    function st(D, $) {
        const A = o();
        let u;
        for (u = 0; u < 16; u++)
            A[u] = $[u];
        for (u = 250; u >= 0; u--)
            ve(A, A),
            u !== 1 && Q(A, A, $);
        for (u = 0; u < 16; u++)
            D[u] = A[u]
    }
    function Ke(D, $) {
        const A = o()
          , u = o()
          , I = o()
          , Z = o()
          , ue = o()
          , me = o()
          , Re = o()
          , Ae = o()
          , Ie = o();
        pe(A, D[1], D[0]),
        pe(Ie, $[1], $[0]),
        Q(A, A, Ie),
        he(u, D[0], D[1]),
        he(Ie, $[0], $[1]),
        Q(u, u, Ie),
        Q(I, D[3], $[3]),
        Q(I, I, g),
        Q(Z, D[2], $[2]),
        he(Z, Z, Z),
        pe(ue, u, A),
        pe(me, Z, I),
        he(Re, Z, I),
        he(Ae, u, A),
        Q(D[0], ue, me),
        Q(D[1], Ae, Re),
        Q(D[2], Re, me),
        Q(D[3], ue, Ae)
    }
    function Lt(D, $, A) {
        for (let u = 0; u < 4; u++)
            Y(D[u], $[u], A)
    }
    function Mt(D, $) {
        const A = o()
          , u = o()
          , I = o();
        wt(I, $[2]),
        Q(A, $[0], I),
        Q(u, $[1], I),
        re(D, u),
        D[31] ^= ae(A) << 7
    }
    function b(D, $, A) {
        j(D[0], p),
        j(D[1], y),
        j(D[2], y),
        j(D[3], p);
        for (let u = 255; u >= 0; --u) {
            const I = A[u / 8 | 0] >> (u & 7) & 1;
            Lt(D, $, I),
            Ke($, D),
            Ke(D, D),
            Lt(D, $, I)
        }
    }
    function S(D, $) {
        const A = [o(), o(), o(), o()];
        j(A[0], E),
        j(A[1], O),
        j(A[2], y),
        Q(A[3], E, O),
        b(D, A, $)
    }
    function J(D) {
        if (D.length !== a.SEED_LENGTH)
            throw new Error(`ed25519: seed must be ${a.SEED_LENGTH} bytes`);
        const $ = (0,
        i.hash)(D);
        $[0] &= 248,
        $[31] &= 127,
        $[31] |= 64;
        const A = new Uint8Array(32)
          , u = [o(), o(), o(), o()];
        S(u, $),
        Mt(A, u);
        const I = new Uint8Array(64);
        return I.set(D),
        I.set(A, 32),
        {
            publicKey: A,
            secretKey: I
        }
    }
    a.generateKeyPairFromSeed = J;
    function le(D) {
        const $ = (0,
        t.randomBytes)(32, D)
          , A = J($);
        return (0,
        n.wipe)($),
        A
    }
    a.generateKeyPair = le;
    function k(D) {
        if (D.length !== a.SECRET_KEY_LENGTH)
            throw new Error(`ed25519: secret key must be ${a.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(D.subarray(32))
    }
    a.extractPublicKeyFromSecretKey = k;
    const H = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function K(D, $) {
        let A, u, I, Z;
        for (u = 63; u >= 32; --u) {
            for (A = 0,
            I = u - 32,
            Z = u - 12; I < Z; ++I)
                $[I] += A - 16 * $[u] * H[I - (u - 32)],
                A = Math.floor(($[I] + 128) / 256),
                $[I] -= A * 256;
            $[I] += A,
            $[u] = 0
        }
        for (A = 0,
        I = 0; I < 32; I++)
            $[I] += A - ($[31] >> 4) * H[I],
            A = $[I] >> 8,
            $[I] &= 255;
        for (I = 0; I < 32; I++)
            $[I] -= A * H[I];
        for (u = 0; u < 32; u++)
            $[u + 1] += $[u] >> 8,
            D[u] = $[u] & 255
    }
    function B(D) {
        const $ = new Float64Array(64);
        for (let A = 0; A < 64; A++)
            $[A] = D[A];
        for (let A = 0; A < 64; A++)
            D[A] = 0;
        K(D, $)
    }
    function Xe(D, $) {
        const A = new Float64Array(64)
          , u = [o(), o(), o(), o()]
          , I = (0,
        i.hash)(D.subarray(0, 32));
        I[0] &= 248,
        I[31] &= 127,
        I[31] |= 64;
        const Z = new Uint8Array(64);
        Z.set(I.subarray(32), 32);
        const ue = new i.SHA512;
        ue.update(Z.subarray(32)),
        ue.update($);
        const me = ue.digest();
        ue.clean(),
        B(me),
        S(u, me),
        Mt(Z, u),
        ue.reset(),
        ue.update(Z.subarray(0, 32)),
        ue.update(D.subarray(32)),
        ue.update($);
        const Re = ue.digest();
        B(Re);
        for (let Ae = 0; Ae < 32; Ae++)
            A[Ae] = me[Ae];
        for (let Ae = 0; Ae < 32; Ae++)
            for (let Ie = 0; Ie < 32; Ie++)
                A[Ae + Ie] += Re[Ae] * I[Ie];
        return K(Z.subarray(32), A),
        Z
    }
    a.sign = Xe;
    function nt(D, $) {
        const A = o()
          , u = o()
          , I = o()
          , Z = o()
          , ue = o()
          , me = o()
          , Re = o();
        return j(D[2], y),
        ee(D[1], $),
        ve(I, D[1]),
        Q(Z, I, m),
        pe(I, I, D[2]),
        he(Z, D[2], Z),
        ve(ue, Z),
        ve(me, ue),
        Q(Re, me, ue),
        Q(A, Re, I),
        Q(A, A, Z),
        st(A, A),
        Q(A, A, I),
        Q(A, A, Z),
        Q(A, A, Z),
        Q(D[0], A, Z),
        ve(u, D[0]),
        Q(u, u, Z),
        ce(u, I) && Q(D[0], D[0], N),
        ve(u, D[0]),
        Q(u, u, Z),
        ce(u, I) ? -1 : (ae(D[0]) === $[31] >> 7 && pe(D[0], p, D[0]),
        Q(D[3], D[0], D[1]),
        0)
    }
    function Oi(D, $, A) {
        const u = new Uint8Array(32)
          , I = [o(), o(), o(), o()]
          , Z = [o(), o(), o(), o()];
        if (A.length !== a.SIGNATURE_LENGTH)
            throw new Error(`ed25519: signature must be ${a.SIGNATURE_LENGTH} bytes`);
        if (nt(Z, D))
            return !1;
        const ue = new i.SHA512;
        ue.update(A.subarray(0, 32)),
        ue.update(D),
        ue.update($);
        const me = ue.digest();
        return B(me),
        b(I, Z, me),
        S(Z, A.subarray(32)),
        Ke(I, Z),
        Mt(u, I),
        !oe(A, u)
    }
    a.verify = Oi;
    function Ee(D) {
        let $ = [o(), o(), o(), o()];
        if (nt($, D))
            throw new Error("Ed25519: invalid public key");
        let A = o()
          , u = o()
          , I = $[1];
        he(A, y, I),
        pe(u, y, I),
        wt(u, u),
        Q(A, A, u);
        let Z = new Uint8Array(32);
        return re(Z, A),
        Z
    }
    a.convertPublicKeyToX25519 = Ee;
    function Rr(D) {
        const $ = (0,
        i.hash)(D.subarray(0, 32));
        $[0] &= 248,
        $[31] &= 127,
        $[31] |= 64;
        const A = new Uint8Array($.subarray(0, 32));
        return (0,
        n.wipe)($),
        A
    }
    a.convertSecretKeyToX25519 = Rr
}
)(Mc);
const Lb = "EdDSA"
  , Mb = "JWT"
  , _f = "."
  , Ef = "base64url"
  , zb = "utf8"
  , Ub = "utf8"
  , Hb = ":"
  , kb = "did"
  , Kb = "key"
  , hl = "base58btc"
  , Bb = "z"
  , Fb = "K36"
  , Vb = 32;
function xo(a) {
    return Ro(jc(Bi(a), zb), Ef)
}
function If(a) {
    const t = jc(Fb, hl)
      , i = Bb + Ro(C0([t, a]), hl);
    return [kb, Kb, i].join(Hb)
}
function Gb(a) {
    return Ro(a, Ef)
}
function Wb(a) {
    return jc([xo(a.header), xo(a.payload)].join(_f), Ub)
}
function Jb(a) {
    return [xo(a.header), xo(a.payload), Gb(a.signature)].join(_f)
}
function ll(a=of.randomBytes(Vb)) {
    return Mc.generateKeyPairFromSeed(a)
}
async function Qb(a, t, i, n, o=te.fromMiliseconds(Date.now())) {
    const h = {
        alg: Lb,
        typ: Mb
    }
      , p = If(n.publicKey)
      , y = o + i
      , m = {
        iss: p,
        sub: a,
        aud: t,
        iat: o,
        exp: y
    }
      , g = Wb({
        header: h,
        payload: m
    })
      , E = Mc.sign(n.secretKey, g);
    return Jb({
        header: h,
        payload: m,
        signature: E
    })
}
const Yb = "PARSE_ERROR"
  , Zb = "INVALID_REQUEST"
  , Xb = "METHOD_NOT_FOUND"
  , e_ = "INVALID_PARAMS"
  , xf = "INTERNAL_ERROR"
  , zc = "SERVER_ERROR"
  , t_ = [-32700, -32600, -32601, -32602, -32603]
  , Zs = {
    [Yb]: {
        code: -32700,
        message: "Parse error"
    },
    [Zb]: {
        code: -32600,
        message: "Invalid Request"
    },
    [Xb]: {
        code: -32601,
        message: "Method not found"
    },
    [e_]: {
        code: -32602,
        message: "Invalid params"
    },
    [xf]: {
        code: -32603,
        message: "Internal error"
    },
    [zc]: {
        code: -32e3,
        message: "Server error"
    }
}
  , Pf = zc;
function r_(a) {
    return t_.includes(a)
}
function fl(a) {
    return Object.keys(Zs).includes(a) ? Zs[a] : Zs[Pf]
}
function i_(a) {
    const t = Object.values(Zs).find(i=>i.code === a);
    return t || Zs[Pf]
}
function Sf(a, t, i) {
    return a.message.includes("getaddrinfo ENOTFOUND") || a.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${i} RPC url at ${t}`) : a
}
var Rf = {}, si = {}, pl;
function s_() {
    if (pl)
        return si;
    pl = 1,
    Object.defineProperty(si, "__esModule", {
        value: !0
    }),
    si.isBrowserCryptoAvailable = si.getSubtleCrypto = si.getBrowerCrypto = void 0;
    function a() {
        return (Lr === null || Lr === void 0 ? void 0 : Lr.crypto) || (Lr === null || Lr === void 0 ? void 0 : Lr.msCrypto) || {}
    }
    si.getBrowerCrypto = a;
    function t() {
        const n = a();
        return n.subtle || n.webkitSubtle
    }
    si.getSubtleCrypto = t;
    function i() {
        return !!a() && !!t()
    }
    return si.isBrowserCryptoAvailable = i,
    si
}
var ni = {}, dl;
function n_() {
    if (dl)
        return ni;
    dl = 1,
    Object.defineProperty(ni, "__esModule", {
        value: !0
    }),
    ni.isBrowser = ni.isNode = ni.isReactNative = void 0;
    function a() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative"
    }
    ni.isReactNative = a;
    function t() {
        return typeof ac < "u" && typeof ac.versions < "u" && typeof ac.versions.node < "u"
    }
    ni.isNode = t;
    function i() {
        return !a() && !t()
    }
    return ni.isBrowser = i,
    ni
}
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const t = rn;
    t.__exportStar(s_(), a),
    t.__exportStar(n_(), a)
}
)(Rf);
function Uc(a=3) {
    const t = Date.now() * Math.pow(10, a)
      , i = Math.floor(Math.random() * Math.pow(10, a));
    return t + i
}
function Of(a=6) {
    return BigInt(Uc(a))
}
function bs(a, t, i) {
    return {
        id: i || Uc(),
        jsonrpc: "2.0",
        method: a,
        params: t
    }
}
function $o(a, t) {
    return {
        id: a,
        jsonrpc: "2.0",
        result: t
    }
}
function No(a, t, i) {
    return {
        id: a,
        jsonrpc: "2.0",
        error: o_(t)
    }
}
function o_(a, t) {
    return typeof a > "u" ? fl(xf) : (typeof a == "string" && (a = Object.assign(Object.assign({}, fl(zc)), {
        message: a
    })),
    r_(a.code) && (a = i_(a.code)),
    a)
}
class a_ {
}
class c_ extends a_ {
    constructor() {
        super()
    }
}
class u_ extends c_ {
    constructor(t) {
        super()
    }
}
const h_ = "^https?:"
  , l_ = "^wss?:";
function f_(a) {
    const t = a.match(new RegExp(/^\w+:/,"gi"));
    if (!(!t || !t.length))
        return t[0]
}
function Af(a, t) {
    const i = f_(a);
    return typeof i > "u" ? !1 : new RegExp(t).test(i)
}
function gl(a) {
    return Af(a, h_)
}
function yl(a) {
    return Af(a, l_)
}
function p_(a) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(a)
}
function Tf(a) {
    return typeof a == "object" && "id"in a && "jsonrpc"in a && a.jsonrpc === "2.0"
}
function Hc(a) {
    return Tf(a) && "method"in a
}
function Do(a) {
    return Tf(a) && (ci(a) || jr(a))
}
function ci(a) {
    return "result"in a
}
function jr(a) {
    return "error"in a
}
class hi extends u_ {
    constructor(t) {
        super(t),
        this.events = new Sr.EventEmitter,
        this.hasRegisteredEventListeners = !1,
        this.connection = this.setConnection(t),
        this.connection.connected && this.registerEventListeners()
    }
    async connect(t=this.connection) {
        await this.open(t)
    }
    async disconnect() {
        await this.close()
    }
    on(t, i) {
        this.events.on(t, i)
    }
    once(t, i) {
        this.events.once(t, i)
    }
    off(t, i) {
        this.events.off(t, i)
    }
    removeListener(t, i) {
        this.events.removeListener(t, i)
    }
    async request(t, i) {
        return this.requestStrict(bs(t.method, t.params || [], t.id || Of().toString()), i)
    }
    async requestStrict(t, i) {
        return new Promise(async(n,o)=>{
            if (!this.connection.connected)
                try {
                    await this.open()
                } catch (h) {
                    o(h)
                }
            this.events.on(`${t.id}`, h=>{
                jr(h) ? o(h.error) : n(h.result)
            }
            );
            try {
                await this.connection.send(t, i)
            } catch (h) {
                o(h)
            }
        }
        )
    }
    setConnection(t=this.connection) {
        return t
    }
    onPayload(t) {
        this.events.emit("payload", t),
        Do(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
            type: t.method,
            data: t.params
        })
    }
    onClose(t) {
        t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)),
        this.events.emit("disconnect")
    }
    async open(t=this.connection) {
        this.connection === t && this.connection.connected || (this.connection.connected && this.close(),
        typeof t == "string" && (await this.connection.open(t),
        t = this.connection),
        this.connection = this.setConnection(t),
        await this.connection.open(),
        this.registerEventListeners(),
        this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", t=>this.onPayload(t)),
        this.connection.on("close", t=>this.onClose(t)),
        this.connection.on("error", t=>this.events.emit("error", t)),
        this.connection.on("register_error", t=>this.onClose()),
        this.hasRegisteredEventListeners = !0)
    }
}
const d_ = ()=>typeof WebSocket < "u" ? WebSocket : typeof ui < "u" && typeof ui.WebSocket < "u" ? ui.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws")
  , g_ = ()=>typeof WebSocket < "u" || typeof ui < "u" && typeof ui.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u"
  , vl = a=>a.split("?")[0]
  , ml = 10
  , y_ = d_();
let v_ = class {
    constructor(t) {
        if (this.url = t,
        this.events = new Sr.EventEmitter,
        this.registering = !1,
        !yl(t))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        this.url = t
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(t, i) {
        this.events.on(t, i)
    }
    once(t, i) {
        this.events.once(t, i)
    }
    off(t, i) {
        this.events.off(t, i)
    }
    removeListener(t, i) {
        this.events.removeListener(t, i)
    }
    async open(t=this.url) {
        await this.register(t)
    }
    async close() {
        return new Promise((t,i)=>{
            if (typeof this.socket > "u") {
                i(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = n=>{
                this.onClose(n),
                t()
            }
            ,
            this.socket.close()
        }
        )
    }
    async send(t) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(Bi(t))
        } catch (i) {
            this.onError(t.id, i)
        }
    }
    register(t=this.url) {
        if (!yl(t))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        if (this.registering) {
            const i = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= i || this.events.listenerCount("open") >= i) && this.events.setMaxListeners(i + 1),
            new Promise((n,o)=>{
                this.events.once("register_error", h=>{
                    this.resetMaxListeners(),
                    o(h)
                }
                ),
                this.events.once("open", ()=>{
                    if (this.resetMaxListeners(),
                    typeof this.socket > "u")
                        return o(new Error("WebSocket connection is missing or invalid"));
                    n(this.socket)
                }
                )
            }
            )
        }
        return this.url = t,
        this.registering = !0,
        new Promise((i,n)=>{
            const o = new URLSearchParams(t).get("origin")
              , h = Rf.isReactNative() ? {
                headers: {
                    origin: o
                }
            } : {
                rejectUnauthorized: !p_(t)
            }
              , p = new y_(t,[],h);
            g_() ? p.onerror = y=>{
                const m = y;
                n(this.emitError(m.error))
            }
            : p.on("error", y=>{
                n(this.emitError(y))
            }
            ),
            p.onopen = ()=>{
                this.onOpen(p),
                i(p)
            }
        }
        )
    }
    onOpen(t) {
        t.onmessage = i=>this.onPayload(i),
        t.onclose = i=>this.onClose(i),
        this.socket = t,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose(t) {
        this.socket = void 0,
        this.registering = !1,
        this.events.emit("close", t)
    }
    onPayload(t) {
        if (typeof t.data > "u")
            return;
        const i = typeof t.data == "string" ? nn(t.data) : t.data;
        this.events.emit("payload", i)
    }
    onError(t, i) {
        const n = this.parseError(i)
          , o = n.message || n.toString()
          , h = No(t, o);
        this.events.emit("payload", h)
    }
    parseError(t, i=this.url) {
        return Sf(t, vl(i), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > ml && this.events.setMaxListeners(ml)
    }
    emitError(t) {
        const i = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${vl(this.url)}`));
        return this.events.emit("register_error", i),
        i
    }
}
;
var Po = {
    exports: {}
};
Po.exports;
(function(a, t) {
    var i = 200
      , n = "__lodash_hash_undefined__"
      , o = 1
      , h = 2
      , p = 9007199254740991
      , y = "[object Arguments]"
      , m = "[object Array]"
      , g = "[object AsyncFunction]"
      , E = "[object Boolean]"
      , O = "[object Date]"
      , N = "[object Error]"
      , j = "[object Function]"
      , T = "[object GeneratorFunction]"
      , Y = "[object Map]"
      , re = "[object Number]"
      , oe = "[object Null]"
      , ce = "[object Object]"
      , ae = "[object Promise]"
      , ee = "[object Proxy]"
      , he = "[object RegExp]"
      , pe = "[object Set]"
      , Q = "[object String]"
      , ve = "[object Symbol]"
      , wt = "[object Undefined]"
      , st = "[object WeakMap]"
      , Ke = "[object ArrayBuffer]"
      , Lt = "[object DataView]"
      , Mt = "[object Float32Array]"
      , b = "[object Float64Array]"
      , S = "[object Int8Array]"
      , J = "[object Int16Array]"
      , le = "[object Int32Array]"
      , k = "[object Uint8Array]"
      , H = "[object Uint8ClampedArray]"
      , K = "[object Uint16Array]"
      , B = "[object Uint32Array]"
      , Xe = /[\\^$.*+?()[\]{}|]/g
      , nt = /^\[object .+?Constructor\]$/
      , Oi = /^(?:0|[1-9]\d*)$/
      , Ee = {};
    Ee[Mt] = Ee[b] = Ee[S] = Ee[J] = Ee[le] = Ee[k] = Ee[H] = Ee[K] = Ee[B] = !0,
    Ee[y] = Ee[m] = Ee[Ke] = Ee[E] = Ee[Lt] = Ee[O] = Ee[N] = Ee[j] = Ee[Y] = Ee[re] = Ee[ce] = Ee[he] = Ee[pe] = Ee[Q] = Ee[st] = !1;
    var Rr = typeof Lr == "object" && Lr && Lr.Object === Object && Lr
      , D = typeof self == "object" && self && self.Object === Object && self
      , $ = Rr || D || Function("return this")()
      , A = t && !t.nodeType && t
      , u = A && !0 && a && !a.nodeType && a
      , I = u && u.exports === A
      , Z = I && Rr.process
      , ue = function() {
        try {
            return Z && Z.binding && Z.binding("util")
        } catch {}
    }()
      , me = ue && ue.isTypedArray;
    function Re(v, x) {
        for (var z = -1, V = v == null ? 0 : v.length, ze = 0, de = []; ++z < V; ) {
            var Ge = v[z];
            x(Ge, z, v) && (de[ze++] = Ge)
        }
        return de
    }
    function Ae(v, x) {
        for (var z = -1, V = x.length, ze = v.length; ++z < V; )
            v[ze + z] = x[z];
        return v
    }
    function Ie(v, x) {
        for (var z = -1, V = v == null ? 0 : v.length; ++z < V; )
            if (x(v[z], z, v))
                return !0;
        return !1
    }
    function bt(v, x) {
        for (var z = -1, V = Array(v); ++z < v; )
            V[z] = x(z);
        return V
    }
    function dt(v) {
        return function(x) {
            return v(x)
        }
    }
    function et(v, x) {
        return v.has(x)
    }
    function Ce(v, x) {
        return v == null ? void 0 : v[x]
    }
    function Be(v) {
        var x = -1
          , z = Array(v.size);
        return v.forEach(function(V, ze) {
            z[++x] = [ze, V]
        }),
        z
    }
    function Fe(v, x) {
        return function(z) {
            return v(x(z))
        }
    }
    function tt(v) {
        var x = -1
          , z = Array(v.size);
        return v.forEach(function(V) {
            z[++x] = V
        }),
        z
    }
    var qe = Array.prototype
      , Ve = Function.prototype
      , Oe = Object.prototype
      , Le = $["__core-js_shared__"]
      , ot = Ve.toString
      , Ne = Oe.hasOwnProperty
      , _t = function() {
        var v = /[^.]+$/.exec(Le && Le.keys && Le.keys.IE_PROTO || "");
        return v ? "Symbol(src)_1." + v : ""
    }()
      , Tt = Oe.toString
      , zt = RegExp("^" + ot.call(Ne).replace(Xe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , Ut = I ? $.Buffer : void 0
      , Nt = $.Symbol
      , Gt = $.Uint8Array
      , Xt = Oe.propertyIsEnumerable
      , Mr = qe.splice
      , Wt = Nt ? Nt.toStringTag : void 0
      , Vr = Object.getOwnPropertySymbols
      , fi = Ut ? Ut.isBuffer : void 0
      , Ai = Fe(Object.keys, Object)
      , at = hr($, "DataView")
      , Je = hr($, "Map")
      , ct = hr($, "Promise")
      , ut = hr($, "Set")
      , rt = hr($, "WeakMap")
      , Qe = hr(Object, "create")
      , Et = Wr(at)
      , It = Wr(Je)
      , ht = Wr(ct)
      , xt = Wr(ut)
      , lt = Wr(rt)
      , gt = Nt ? Nt.prototype : void 0
      , ft = gt ? gt.valueOf : void 0;
    function ke(v) {
        var x = -1
          , z = v == null ? 0 : v.length;
        for (this.clear(); ++x < z; ) {
            var V = v[x];
            this.set(V[0], V[1])
        }
    }
    function Pt() {
        this.__data__ = Qe ? Qe(null) : {},
        this.size = 0
    }
    function St(v) {
        var x = this.has(v) && delete this.__data__[v];
        return this.size -= x ? 1 : 0,
        x
    }
    function Lo(v) {
        var x = this.__data__;
        if (Qe) {
            var z = x[v];
            return z === n ? void 0 : z
        }
        return Ne.call(x, v) ? x[v] : void 0
    }
    function Mo(v) {
        var x = this.__data__;
        return Qe ? x[v] !== void 0 : Ne.call(x, v)
    }
    function zo(v, x) {
        var z = this.__data__;
        return this.size += this.has(v) ? 0 : 1,
        z[v] = Qe && x === void 0 ? n : x,
        this
    }
    ke.prototype.clear = Pt,
    ke.prototype.delete = St,
    ke.prototype.get = Lo,
    ke.prototype.has = Mo,
    ke.prototype.set = zo;
    function yr(v) {
        var x = -1
          , z = v == null ? 0 : v.length;
        for (this.clear(); ++x < z; ) {
            var V = v[x];
            this.set(V[0], V[1])
        }
    }
    function Uo() {
        this.__data__ = [],
        this.size = 0
    }
    function Ho(v) {
        var x = this.__data__
          , z = Ti(x, v);
        if (z < 0)
            return !1;
        var V = x.length - 1;
        return z == V ? x.pop() : Mr.call(x, z, 1),
        --this.size,
        !0
    }
    function ko(v) {
        var x = this.__data__
          , z = Ti(x, v);
        return z < 0 ? void 0 : x[z][1]
    }
    function Ko(v) {
        return Ti(this.__data__, v) > -1
    }
    function Bo(v, x) {
        var z = this.__data__
          , V = Ti(z, v);
        return V < 0 ? (++this.size,
        z.push([v, x])) : z[V][1] = x,
        this
    }
    yr.prototype.clear = Uo,
    yr.prototype.delete = Ho,
    yr.prototype.get = ko,
    yr.prototype.has = Ko,
    yr.prototype.set = Bo;
    function Gr(v) {
        var x = -1
          , z = v == null ? 0 : v.length;
        for (this.clear(); ++x < z; ) {
            var V = v[x];
            this.set(V[0], V[1])
        }
    }
    function Wi() {
        this.size = 0,
        this.__data__ = {
            hash: new ke,
            map: new (Je || yr),
            string: new ke
        }
    }
    function Fo(v) {
        var x = pi(this, v).delete(v);
        return this.size -= x ? 1 : 0,
        x
    }
    function Ji(v) {
        return pi(this, v).get(v)
    }
    function Vo(v) {
        return pi(this, v).has(v)
    }
    function Go(v, x) {
        var z = pi(this, v)
          , V = z.size;
        return z.set(v, x),
        this.size += z.size == V ? 0 : 1,
        this
    }
    Gr.prototype.clear = Wi,
    Gr.prototype.delete = Fo,
    Gr.prototype.get = Ji,
    Gr.prototype.has = Vo,
    Gr.prototype.set = Go;
    function Qi(v) {
        var x = -1
          , z = v == null ? 0 : v.length;
        for (this.__data__ = new Gr; ++x < z; )
            this.add(v[x])
    }
    function cn(v) {
        return this.__data__.set(v, n),
        this
    }
    function un(v) {
        return this.__data__.has(v)
    }
    Qi.prototype.add = Qi.prototype.push = cn,
    Qi.prototype.has = un;
    function Or(v) {
        var x = this.__data__ = new yr(v);
        this.size = x.size
    }
    function Wo() {
        this.__data__ = new yr,
        this.size = 0
    }
    function Jo(v) {
        var x = this.__data__
          , z = x.delete(v);
        return this.size = x.size,
        z
    }
    function Qo(v) {
        return this.__data__.get(v)
    }
    function Yo(v) {
        return this.__data__.has(v)
    }
    function hn(v, x) {
        var z = this.__data__;
        if (z instanceof yr) {
            var V = z.__data__;
            if (!Je || V.length < i - 1)
                return V.push([v, x]),
                this.size = ++z.size,
                this;
            z = this.__data__ = new Gr(V)
        }
        return z.set(v, x),
        this.size = z.size,
        this
    }
    Or.prototype.clear = Wo,
    Or.prototype.delete = Jo,
    Or.prototype.get = Qo,
    Or.prototype.has = Yo,
    Or.prototype.set = hn;
    function ln(v, x) {
        var z = Xi(v)
          , V = !z && In(v)
          , ze = !z && !V && Ps(v)
          , de = !z && !V && !ze && Sn(v)
          , Ge = z || V || ze || de
          , Rt = Ge ? bt(v.length, String) : []
          , Pe = Rt.length;
        for (var Ue in v)
            Ne.call(v, Ue) && !(Ge && (Ue == "length" || ze && (Ue == "offset" || Ue == "parent") || de && (Ue == "buffer" || Ue == "byteLength" || Ue == "byteOffset") || mn(Ue, Pe))) && Rt.push(Ue);
        return Rt
    }
    function Ti(v, x) {
        for (var z = v.length; z--; )
            if (En(v[z][0], x))
                return z;
        return -1
    }
    function Is(v, x, z) {
        var V = x(v);
        return Xi(v) ? V : Ae(V, z(v))
    }
    function Ci(v) {
        return v == null ? v === void 0 ? wt : oe : Wt && Wt in Object(v) ? yn(v) : ea(v)
    }
    function xs(v) {
        return Ni(v) && Ci(v) == y
    }
    function $i(v, x, z, V, ze) {
        return v === x ? !0 : v == null || x == null || !Ni(v) && !Ni(x) ? v !== v && x !== x : fn(v, x, z, V, $i, ze)
    }
    function fn(v, x, z, V, ze, de) {
        var Ge = Xi(v)
          , Rt = Xi(x)
          , Pe = Ge ? m : zr(v)
          , Ue = Rt ? m : zr(x);
        Pe = Pe == y ? ce : Pe,
        Ue = Ue == y ? ce : Ue;
        var yt = Pe == ce
          , er = Ue == ce
          , Ot = Pe == Ue;
        if (Ot && Ps(v)) {
            if (!Ps(x))
                return !1;
            Ge = !0,
            yt = !1
        }
        if (Ot && !yt)
            return de || (de = new Or),
            Ge || Sn(v) ? Yi(v, x, z, V, ze, de) : Xo(v, x, Pe, z, V, ze, de);
        if (!(z & o)) {
            var We = yt && Ne.call(v, "__wrapped__")
              , Jt = er && Ne.call(x, "__wrapped__");
            if (We || Jt) {
                var Ar = We ? v.value() : v
                  , vr = Jt ? x.value() : x;
                return de || (de = new Or),
                ze(Ar, vr, z, V, de)
            }
        }
        return Ot ? (de || (de = new Or),
        gn(v, x, z, V, ze, de)) : !1
    }
    function Zo(v) {
        if (!Pn(v) || bn(v))
            return !1;
        var x = es(v) ? zt : nt;
        return x.test(Wr(v))
    }
    function pn(v) {
        return Ni(v) && xn(v.length) && !!Ee[Ci(v)]
    }
    function dn(v) {
        if (!_n(v))
            return Ai(v);
        var x = [];
        for (var z in Object(v))
            Ne.call(v, z) && z != "constructor" && x.push(z);
        return x
    }
    function Yi(v, x, z, V, ze, de) {
        var Ge = z & o
          , Rt = v.length
          , Pe = x.length;
        if (Rt != Pe && !(Ge && Pe > Rt))
            return !1;
        var Ue = de.get(v);
        if (Ue && de.get(x))
            return Ue == x;
        var yt = -1
          , er = !0
          , Ot = z & h ? new Qi : void 0;
        for (de.set(v, x),
        de.set(x, v); ++yt < Rt; ) {
            var We = v[yt]
              , Jt = x[yt];
            if (V)
                var Ar = Ge ? V(Jt, We, yt, x, v, de) : V(We, Jt, yt, v, x, de);
            if (Ar !== void 0) {
                if (Ar)
                    continue;
                er = !1;
                break
            }
            if (Ot) {
                if (!Ie(x, function(vr, Ur) {
                    if (!et(Ot, Ur) && (We === vr || ze(We, vr, z, V, de)))
                        return Ot.push(Ur)
                })) {
                    er = !1;
                    break
                }
            } else if (!(We === Jt || ze(We, Jt, z, V, de))) {
                er = !1;
                break
            }
        }
        return de.delete(v),
        de.delete(x),
        er
    }
    function Xo(v, x, z, V, ze, de, Ge) {
        switch (z) {
        case Lt:
            if (v.byteLength != x.byteLength || v.byteOffset != x.byteOffset)
                return !1;
            v = v.buffer,
            x = x.buffer;
        case Ke:
            return !(v.byteLength != x.byteLength || !de(new Gt(v), new Gt(x)));
        case E:
        case O:
        case re:
            return En(+v, +x);
        case N:
            return v.name == x.name && v.message == x.message;
        case he:
        case Q:
            return v == x + "";
        case Y:
            var Rt = Be;
        case pe:
            var Pe = V & o;
            if (Rt || (Rt = tt),
            v.size != x.size && !Pe)
                return !1;
            var Ue = Ge.get(v);
            if (Ue)
                return Ue == x;
            V |= h,
            Ge.set(v, x);
            var yt = Yi(Rt(v), Rt(x), V, ze, de, Ge);
            return Ge.delete(v),
            yt;
        case ve:
            if (ft)
                return ft.call(v) == ft.call(x)
        }
        return !1
    }
    function gn(v, x, z, V, ze, de) {
        var Ge = z & o
          , Rt = Zi(v)
          , Pe = Rt.length
          , Ue = Zi(x)
          , yt = Ue.length;
        if (Pe != yt && !Ge)
            return !1;
        for (var er = Pe; er--; ) {
            var Ot = Rt[er];
            if (!(Ge ? Ot in x : Ne.call(x, Ot)))
                return !1
        }
        var We = de.get(v);
        if (We && de.get(x))
            return We == x;
        var Jt = !0;
        de.set(v, x),
        de.set(x, v);
        for (var Ar = Ge; ++er < Pe; ) {
            Ot = Rt[er];
            var vr = v[Ot]
              , Ur = x[Ot];
            if (V)
                var Ss = Ge ? V(Ur, vr, Ot, x, v, de) : V(vr, Ur, Ot, v, x, de);
            if (!(Ss === void 0 ? vr === Ur || ze(vr, Ur, z, V, de) : Ss)) {
                Jt = !1;
                break
            }
            Ar || (Ar = Ot == "constructor")
        }
        if (Jt && !Ar) {
            var Di = v.constructor
              , Dt = x.constructor;
            Di != Dt && "constructor"in v && "constructor"in x && !(typeof Di == "function" && Di instanceof Di && typeof Dt == "function" && Dt instanceof Dt) && (Jt = !1)
        }
        return de.delete(v),
        de.delete(x),
        Jt
    }
    function Zi(v) {
        return Is(v, ia, vn)
    }
    function pi(v, x) {
        var z = v.__data__;
        return wn(x) ? z[typeof x == "string" ? "string" : "hash"] : z.map
    }
    function hr(v, x) {
        var z = Ce(v, x);
        return Zo(z) ? z : void 0
    }
    function yn(v) {
        var x = Ne.call(v, Wt)
          , z = v[Wt];
        try {
            v[Wt] = void 0;
            var V = !0
        } catch {}
        var ze = Tt.call(v);
        return V && (x ? v[Wt] = z : delete v[Wt]),
        ze
    }
    var vn = Vr ? function(v) {
        return v == null ? [] : (v = Object(v),
        Re(Vr(v), function(x) {
            return Xt.call(v, x)
        }))
    }
    : Me
      , zr = Ci;
    (at && zr(new at(new ArrayBuffer(1))) != Lt || Je && zr(new Je) != Y || ct && zr(ct.resolve()) != ae || ut && zr(new ut) != pe || rt && zr(new rt) != st) && (zr = function(v) {
        var x = Ci(v)
          , z = x == ce ? v.constructor : void 0
          , V = z ? Wr(z) : "";
        if (V)
            switch (V) {
            case Et:
                return Lt;
            case It:
                return Y;
            case ht:
                return ae;
            case xt:
                return pe;
            case lt:
                return st
            }
        return x
    }
    );
    function mn(v, x) {
        return x = x ?? p,
        !!x && (typeof v == "number" || Oi.test(v)) && v > -1 && v % 1 == 0 && v < x
    }
    function wn(v) {
        var x = typeof v;
        return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? v !== "__proto__" : v === null
    }
    function bn(v) {
        return !!_t && _t in v
    }
    function _n(v) {
        var x = v && v.constructor
          , z = typeof x == "function" && x.prototype || Oe;
        return v === z
    }
    function ea(v) {
        return Tt.call(v)
    }
    function Wr(v) {
        if (v != null) {
            try {
                return ot.call(v)
            } catch {}
            try {
                return v + ""
            } catch {}
        }
        return ""
    }
    function En(v, x) {
        return v === x || v !== v && x !== x
    }
    var In = xs(function() {
        return arguments
    }()) ? xs : function(v) {
        return Ni(v) && Ne.call(v, "callee") && !Xt.call(v, "callee")
    }
      , Xi = Array.isArray;
    function ta(v) {
        return v != null && xn(v.length) && !es(v)
    }
    var Ps = fi || je;
    function ra(v, x) {
        return $i(v, x)
    }
    function es(v) {
        if (!Pn(v))
            return !1;
        var x = Ci(v);
        return x == j || x == T || x == g || x == ee
    }
    function xn(v) {
        return typeof v == "number" && v > -1 && v % 1 == 0 && v <= p
    }
    function Pn(v) {
        var x = typeof v;
        return v != null && (x == "object" || x == "function")
    }
    function Ni(v) {
        return v != null && typeof v == "object"
    }
    var Sn = me ? dt(me) : pn;
    function ia(v) {
        return ta(v) ? ln(v) : dn(v)
    }
    function Me() {
        return []
    }
    function je() {
        return !1
    }
    a.exports = ra
}
)(Po, Po.exports);
var m_ = Po.exports;
const w_ = Oo(m_);
function b_(a, t) {
    return t = t || {},
    new Promise(function(i, n) {
        var o = new XMLHttpRequest
          , h = []
          , p = []
          , y = {}
          , m = function() {
            return {
                ok: (o.status / 100 | 0) == 2,
                statusText: o.statusText,
                status: o.status,
                url: o.responseURL,
                text: function() {
                    return Promise.resolve(o.responseText)
                },
                json: function() {
                    return Promise.resolve(o.responseText).then(JSON.parse)
                },
                blob: function() {
                    return Promise.resolve(new Blob([o.response]))
                },
                clone: m,
                headers: {
                    keys: function() {
                        return h
                    },
                    entries: function() {
                        return p
                    },
                    get: function(E) {
                        return y[E.toLowerCase()]
                    },
                    has: function(E) {
                        return E.toLowerCase()in y
                    }
                }
            }
        };
        for (var g in o.open(t.method || "get", a, !0),
        o.onload = function() {
            o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(E, O, N) {
                h.push(O = O.toLowerCase()),
                p.push([O, N]),
                y[O] = y[O] ? y[O] + "," + N : N
            }),
            i(m())
        }
        ,
        o.onerror = n,
        o.withCredentials = t.credentials == "include",
        t.headers)
            o.setRequestHeader(g, t.headers[g]);
        o.send(t.body || null)
    }
    )
}
const __ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: b_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , wl = pf(__);
var E_ = self.fetch || (self.fetch = wl.default || wl);
const I_ = Oo(E_);
var x_ = {};
function P_(a, t) {
    if (a.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var i = new Uint8Array(256), n = 0; n < i.length; n++)
        i[n] = 255;
    for (var o = 0; o < a.length; o++) {
        var h = a.charAt(o)
          , p = h.charCodeAt(0);
        if (i[p] !== 255)
            throw new TypeError(h + " is ambiguous");
        i[p] = o
    }
    var y = a.length
      , m = a.charAt(0)
      , g = Math.log(y) / Math.log(256)
      , E = Math.log(256) / Math.log(y);
    function O(T) {
        if (T instanceof Uint8Array || (ArrayBuffer.isView(T) ? T = new Uint8Array(T.buffer,T.byteOffset,T.byteLength) : Array.isArray(T) && (T = Uint8Array.from(T))),
        !(T instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (T.length === 0)
            return "";
        for (var Y = 0, re = 0, oe = 0, ce = T.length; oe !== ce && T[oe] === 0; )
            oe++,
            Y++;
        for (var ae = (ce - oe) * E + 1 >>> 0, ee = new Uint8Array(ae); oe !== ce; ) {
            for (var he = T[oe], pe = 0, Q = ae - 1; (he !== 0 || pe < re) && Q !== -1; Q--,
            pe++)
                he += 256 * ee[Q] >>> 0,
                ee[Q] = he % y >>> 0,
                he = he / y >>> 0;
            if (he !== 0)
                throw new Error("Non-zero carry");
            re = pe,
            oe++
        }
        for (var ve = ae - re; ve !== ae && ee[ve] === 0; )
            ve++;
        for (var wt = m.repeat(Y); ve < ae; ++ve)
            wt += a.charAt(ee[ve]);
        return wt
    }
    function N(T) {
        if (typeof T != "string")
            throw new TypeError("Expected String");
        if (T.length === 0)
            return new Uint8Array;
        var Y = 0;
        if (T[Y] !== " ") {
            for (var re = 0, oe = 0; T[Y] === m; )
                re++,
                Y++;
            for (var ce = (T.length - Y) * g + 1 >>> 0, ae = new Uint8Array(ce); T[Y]; ) {
                var ee = i[T.charCodeAt(Y)];
                if (ee === 255)
                    return;
                for (var he = 0, pe = ce - 1; (ee !== 0 || he < oe) && pe !== -1; pe--,
                he++)
                    ee += y * ae[pe] >>> 0,
                    ae[pe] = ee % 256 >>> 0,
                    ee = ee / 256 >>> 0;
                if (ee !== 0)
                    throw new Error("Non-zero carry");
                oe = he,
                Y++
            }
            if (T[Y] !== " ") {
                for (var Q = ce - oe; Q !== ce && ae[Q] === 0; )
                    Q++;
                for (var ve = new Uint8Array(re + (ce - Q)), wt = re; Q !== ce; )
                    ve[wt++] = ae[Q++];
                return ve
            }
        }
    }
    function j(T) {
        var Y = N(T);
        if (Y)
            return Y;
        throw new Error(`Non-${t} character`)
    }
    return {
        encode: O,
        decodeUnsafe: N,
        decode: j
    }
}
var S_ = P_
  , R_ = S_;
const Cf = a=>{
    if (a instanceof Uint8Array && a.constructor.name === "Uint8Array")
        return a;
    if (a instanceof ArrayBuffer)
        return new Uint8Array(a);
    if (ArrayBuffer.isView(a))
        return new Uint8Array(a.buffer,a.byteOffset,a.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , O_ = a=>new TextEncoder().encode(a)
  , A_ = a=>new TextDecoder().decode(a);
class T_ {
    constructor(t, i, n) {
        this.name = t,
        this.prefix = i,
        this.baseEncode = n
    }
    encode(t) {
        if (t instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class C_ {
    constructor(t, i, n) {
        if (this.name = t,
        this.prefix = i,
        i.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = i.codePointAt(0),
        this.baseDecode = n
    }
    decode(t) {
        if (typeof t == "string") {
            if (t.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(t.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(t) {
        return $f(this, t)
    }
}
class $_ {
    constructor(t) {
        this.decoders = t
    }
    or(t) {
        return $f(this, t)
    }
    decode(t) {
        const i = t[0]
          , n = this.decoders[i];
        if (n)
            return n.decode(t);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const $f = (a,t)=>new $_({
    ...a.decoders || {
        [a.prefix]: a
    },
    ...t.decoders || {
        [t.prefix]: t
    }
});
class N_ {
    constructor(t, i, n, o) {
        this.name = t,
        this.prefix = i,
        this.baseEncode = n,
        this.baseDecode = o,
        this.encoder = new T_(t,i,n),
        this.decoder = new C_(t,i,o)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
}
const qo = ({name: a, prefix: t, encode: i, decode: n})=>new N_(a,t,i,n)
  , an = ({prefix: a, name: t, alphabet: i})=>{
    const {encode: n, decode: o} = R_(i, t);
    return qo({
        prefix: a,
        name: t,
        encode: n,
        decode: h=>Cf(o(h))
    })
}
  , D_ = (a,t,i,n)=>{
    const o = {};
    for (let E = 0; E < t.length; ++E)
        o[t[E]] = E;
    let h = a.length;
    for (; a[h - 1] === "="; )
        --h;
    const p = new Uint8Array(h * i / 8 | 0);
    let y = 0
      , m = 0
      , g = 0;
    for (let E = 0; E < h; ++E) {
        const O = o[a[E]];
        if (O === void 0)
            throw new SyntaxError(`Non-${n} character`);
        m = m << i | O,
        y += i,
        y >= 8 && (y -= 8,
        p[g++] = 255 & m >> y)
    }
    if (y >= i || 255 & m << 8 - y)
        throw new SyntaxError("Unexpected end of data");
    return p
}
  , q_ = (a,t,i)=>{
    const n = t[t.length - 1] === "="
      , o = (1 << i) - 1;
    let h = ""
      , p = 0
      , y = 0;
    for (let m = 0; m < a.length; ++m)
        for (y = y << 8 | a[m],
        p += 8; p > i; )
            p -= i,
            h += t[o & y >> p];
    if (p && (h += t[o & y << i - p]),
    n)
        for (; h.length * i & 7; )
            h += "=";
    return h
}
  , kt = ({name: a, prefix: t, bitsPerChar: i, alphabet: n})=>qo({
    prefix: t,
    name: a,
    encode(o) {
        return q_(o, n, i)
    },
    decode(o) {
        return D_(o, n, i, a)
    }
})
  , j_ = qo({
    prefix: "\0",
    name: "identity",
    encode: a=>A_(a),
    decode: a=>O_(a)
});
var L_ = Object.freeze({
    __proto__: null,
    identity: j_
});
const M_ = kt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var z_ = Object.freeze({
    __proto__: null,
    base2: M_
});
const U_ = kt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var H_ = Object.freeze({
    __proto__: null,
    base8: U_
});
const k_ = an({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var K_ = Object.freeze({
    __proto__: null,
    base10: k_
});
const B_ = kt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , F_ = kt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var V_ = Object.freeze({
    __proto__: null,
    base16: B_,
    base16upper: F_
});
const G_ = kt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , W_ = kt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , J_ = kt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , Q_ = kt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , Y_ = kt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , Z_ = kt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , X_ = kt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , e1 = kt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , t1 = kt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var r1 = Object.freeze({
    __proto__: null,
    base32: G_,
    base32upper: W_,
    base32pad: J_,
    base32padupper: Q_,
    base32hex: Y_,
    base32hexupper: Z_,
    base32hexpad: X_,
    base32hexpadupper: e1,
    base32z: t1
});
const i1 = an({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , s1 = an({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var n1 = Object.freeze({
    __proto__: null,
    base36: i1,
    base36upper: s1
});
const o1 = an({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , a1 = an({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var c1 = Object.freeze({
    __proto__: null,
    base58btc: o1,
    base58flickr: a1
});
const u1 = kt({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , h1 = kt({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , l1 = kt({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , f1 = kt({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var p1 = Object.freeze({
    __proto__: null,
    base64: u1,
    base64pad: h1,
    base64url: l1,
    base64urlpad: f1
});
const Nf = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂")
  , d1 = Nf.reduce((a,t,i)=>(a[i] = t,
a), [])
  , g1 = Nf.reduce((a,t,i)=>(a[t.codePointAt(0)] = i,
a), []);
function y1(a) {
    return a.reduce((t,i)=>(t += d1[i],
    t), "")
}
function v1(a) {
    const t = [];
    for (const i of a) {
        const n = g1[i.codePointAt(0)];
        if (n === void 0)
            throw new Error(`Non-base256emoji character: ${i}`);
        t.push(n)
    }
    return new Uint8Array(t)
}
const m1 = qo({
    prefix: "🚀",
    name: "base256emoji",
    encode: y1,
    decode: v1
});
var w1 = Object.freeze({
    __proto__: null,
    base256emoji: m1
})
  , b1 = Df
  , bl = 128
  , _1 = 127
  , E1 = ~_1
  , I1 = Math.pow(2, 31);
function Df(a, t, i) {
    t = t || [],
    i = i || 0;
    for (var n = i; a >= I1; )
        t[i++] = a & 255 | bl,
        a /= 128;
    for (; a & E1; )
        t[i++] = a & 255 | bl,
        a >>>= 7;
    return t[i] = a | 0,
    Df.bytes = i - n + 1,
    t
}
var x1 = Oc
  , P1 = 128
  , _l = 127;
function Oc(a, n) {
    var i = 0, n = n || 0, o = 0, h = n, p, y = a.length;
    do {
        if (h >= y)
            throw Oc.bytes = 0,
            new RangeError("Could not decode varint");
        p = a[h++],
        i += o < 28 ? (p & _l) << o : (p & _l) * Math.pow(2, o),
        o += 7
    } while (p >= P1);
    return Oc.bytes = h - n,
    i
}
var S1 = Math.pow(2, 7)
  , R1 = Math.pow(2, 14)
  , O1 = Math.pow(2, 21)
  , A1 = Math.pow(2, 28)
  , T1 = Math.pow(2, 35)
  , C1 = Math.pow(2, 42)
  , $1 = Math.pow(2, 49)
  , N1 = Math.pow(2, 56)
  , D1 = Math.pow(2, 63)
  , q1 = function(a) {
    return a < S1 ? 1 : a < R1 ? 2 : a < O1 ? 3 : a < A1 ? 4 : a < T1 ? 5 : a < C1 ? 6 : a < $1 ? 7 : a < N1 ? 8 : a < D1 ? 9 : 10
}
  , j1 = {
    encode: b1,
    decode: x1,
    encodingLength: q1
}
  , qf = j1;
const El = (a,t,i=0)=>(qf.encode(a, t, i),
t)
  , Il = a=>qf.encodingLength(a)
  , Ac = (a,t)=>{
    const i = t.byteLength
      , n = Il(a)
      , o = n + Il(i)
      , h = new Uint8Array(o + i);
    return El(a, h, 0),
    El(i, h, n),
    h.set(t, o),
    new L1(a,i,t,h)
}
;
class L1 {
    constructor(t, i, n, o) {
        this.code = t,
        this.size = i,
        this.digest = n,
        this.bytes = o
    }
}
const jf = ({name: a, code: t, encode: i})=>new M1(a,t,i);
class M1 {
    constructor(t, i, n) {
        this.name = t,
        this.code = i,
        this.encode = n
    }
    digest(t) {
        if (t instanceof Uint8Array) {
            const i = this.encode(t);
            return i instanceof Uint8Array ? Ac(this.code, i) : i.then(n=>Ac(this.code, n))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
const Lf = a=>async t=>new Uint8Array(await crypto.subtle.digest(a, t))
  , z1 = jf({
    name: "sha2-256",
    code: 18,
    encode: Lf("SHA-256")
})
  , U1 = jf({
    name: "sha2-512",
    code: 19,
    encode: Lf("SHA-512")
});
var H1 = Object.freeze({
    __proto__: null,
    sha256: z1,
    sha512: U1
});
const Mf = 0
  , k1 = "identity"
  , zf = Cf
  , K1 = a=>Ac(Mf, zf(a))
  , B1 = {
    code: Mf,
    name: k1,
    encode: zf,
    digest: K1
};
var F1 = Object.freeze({
    __proto__: null,
    identity: B1
});
new TextEncoder,
new TextDecoder;
const xl = {
    ...L_,
    ...z_,
    ...H_,
    ...K_,
    ...V_,
    ...r1,
    ...n1,
    ...c1,
    ...p1,
    ...w1
};
({
    ...H1,
    ...F1
});
function Uf(a) {
    return globalThis.Buffer != null ? new Uint8Array(a.buffer,a.byteOffset,a.byteLength) : a
}
function V1(a=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Uf(globalThis.Buffer.allocUnsafe(a)) : new Uint8Array(a)
}
function Hf(a, t, i, n) {
    return {
        name: a,
        prefix: t,
        encoder: {
            name: a,
            prefix: t,
            encode: i
        },
        decoder: {
            decode: n
        }
    }
}
const Pl = Hf("utf8", "u", a=>"u" + new TextDecoder("utf8").decode(a), a=>new TextEncoder().encode(a.substring(1)))
  , gc = Hf("ascii", "a", a=>{
    let t = "a";
    for (let i = 0; i < a.length; i++)
        t += String.fromCharCode(a[i]);
    return t
}
, a=>{
    a = a.substring(1);
    const t = V1(a.length);
    for (let i = 0; i < a.length; i++)
        t[i] = a.charCodeAt(i);
    return t
}
)
  , G1 = {
    utf8: Pl,
    "utf-8": Pl,
    hex: xl.base16,
    latin1: gc,
    ascii: gc,
    binary: gc,
    ...xl
};
function W1(a, t="utf8") {
    const i = G1[t];
    if (!i)
        throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Uf(globalThis.Buffer.from(a, "utf-8")) : i.decoder.decode(`${i.prefix}${a}`)
}
const kf = "wc"
  , J1 = 2
  , kc = "core"
  , Pi = `${kf}@2:${kc}:`
  , Q1 = {
    name: kc,
    logger: "error"
}
  , Y1 = {
    database: ":memory:"
}
  , Z1 = "crypto"
  , Sl = "client_ed25519_seed"
  , X1 = te.ONE_DAY
  , eE = "keychain"
  , tE = "0.3"
  , rE = "messages"
  , iE = "0.3"
  , sE = te.SIX_HOURS
  , nE = "publisher"
  , Kf = "irn"
  , oE = "error"
  , Bf = "wss://relay.walletconnect.com"
  , Rl = "wss://relay.walletconnect.org"
  , aE = "relayer"
  , Vt = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}
  , cE = "_subscription"
  , oi = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}
  , uE = te.ONE_SECOND
  , hE = "2.11.0"
  , lE = 1e4
  , fE = "0.3"
  , pE = "WALLETCONNECT_CLIENT_ID"
  , Dr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}
  , dE = "subscription"
  , gE = "0.3"
  , yE = te.FIVE_SECONDS * 1e3
  , vE = "pairing"
  , mE = "0.3"
  , Bs = {
    wc_pairingDelete: {
        req: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: te.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: te.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 0
        }
    }
}
  , Qs = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}
  , Br = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}
  , wE = "history"
  , bE = "0.3"
  , _E = "expirer"
  , Pr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}
  , EE = "0.3"
  , yc = "verify-api"
  , ms = "https://verify.walletconnect.com"
  , Tc = "https://verify.walletconnect.org"
  , IE = [ms, Tc]
  , xE = "echo"
  , PE = "https://echo.walletconnect.com";
class SE {
    constructor(t, i) {
        this.core = t,
        this.logger = i,
        this.keychain = new Map,
        this.name = eE,
        this.version = tE,
        this.initialized = !1,
        this.storagePrefix = Pi,
        this.init = async()=>{
            if (!this.initialized) {
                const n = await this.getKeyChain();
                typeof n < "u" && (this.keychain = n),
                this.initialized = !0
            }
        }
        ,
        this.has = n=>(this.isInitialized(),
        this.keychain.has(n)),
        this.set = async(n,o)=>{
            this.isInitialized(),
            this.keychain.set(n, o),
            await this.persist()
        }
        ,
        this.get = n=>{
            this.isInitialized();
            const o = this.keychain.get(n);
            if (typeof o > "u") {
                const {message: h} = G("NO_MATCHING_KEY", `${this.name}: ${n}`);
                throw new Error(h)
            }
            return o
        }
        ,
        this.del = async n=>{
            this.isInitialized(),
            this.keychain.delete(n),
            await this.persist()
        }
        ,
        this.core = t,
        this.logger = ur(i, this.name)
    }
    get context() {
        return cr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(t) {
        await this.core.storage.setItem(this.storageKey, hf(t))
    }
    async getKeyChain() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? lf(t) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class RE {
    constructor(t, i, n) {
        this.core = t,
        this.logger = i,
        this.name = Z1,
        this.initialized = !1,
        this.init = async()=>{
            this.initialized || (await this.keychain.init(),
            this.initialized = !0)
        }
        ,
        this.hasKeys = o=>(this.isInitialized(),
        this.keychain.has(o)),
        this.getClientId = async()=>{
            this.isInitialized();
            const o = await this.getClientSeed()
              , h = ll(o);
            return If(h.publicKey)
        }
        ,
        this.generateKeyPair = ()=>{
            this.isInitialized();
            const o = D0();
            return this.setPrivateKey(o.publicKey, o.privateKey)
        }
        ,
        this.signJWT = async o=>{
            this.isInitialized();
            const h = await this.getClientSeed()
              , p = ll(h)
              , y = xc();
            return await Qb(y, o, X1, p)
        }
        ,
        this.generateSharedKey = (o,h,p)=>{
            this.isInitialized();
            const y = this.getPrivateKey(o)
              , m = q0(y, h);
            return this.setSymKey(m, p)
        }
        ,
        this.setSymKey = async(o,h)=>{
            this.isInitialized();
            const p = h || j0(o);
            return await this.keychain.set(p, o),
            p
        }
        ,
        this.deleteKeyPair = async o=>{
            this.isInitialized(),
            await this.keychain.del(o)
        }
        ,
        this.deleteSymKey = async o=>{
            this.isInitialized(),
            await this.keychain.del(o)
        }
        ,
        this.encode = async(o,h,p)=>{
            this.isInitialized();
            const y = L0(p)
              , m = Bi(h);
            if (Vh(y)) {
                const N = y.senderPublicKey
                  , j = y.receiverPublicKey;
                o = await this.generateSharedKey(N, j)
            }
            const g = this.getSymKey(o)
              , {type: E, senderPublicKey: O} = y;
            return M0({
                type: E,
                symKey: g,
                message: m,
                senderPublicKey: O
            })
        }
        ,
        this.decode = async(o,h,p)=>{
            this.isInitialized();
            const y = z0(h, p);
            if (Vh(y)) {
                const m = y.receiverPublicKey
                  , g = y.senderPublicKey;
                o = await this.generateSharedKey(m, g)
            }
            try {
                const m = this.getSymKey(o)
                  , g = U0({
                    symKey: m,
                    encoded: h
                });
                return nn(g)
            } catch (m) {
                this.logger.error(`Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`),
                this.logger.error(m)
            }
        }
        ,
        this.getPayloadType = o=>{
            const h = Gh(o);
            return H0(h.type)
        }
        ,
        this.getPayloadSenderPublicKey = o=>{
            const h = Gh(o);
            return h.senderPublicKey ? Ro(h.senderPublicKey, k0) : void 0
        }
        ,
        this.core = t,
        this.logger = ur(i, this.name),
        this.keychain = n || new SE(this.core,this.logger)
    }
    get context() {
        return cr(this.logger)
    }
    async setPrivateKey(t, i) {
        return await this.keychain.set(t, i),
        t
    }
    getPrivateKey(t) {
        return this.keychain.get(t)
    }
    async getClientSeed() {
        let t = "";
        try {
            t = this.keychain.get(Sl)
        } catch {
            t = xc(),
            await this.keychain.set(Sl, t)
        }
        return W1(t, "base16")
    }
    getSymKey(t) {
        return this.keychain.get(t)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class OE extends Rb {
    constructor(t, i) {
        super(t, i),
        this.logger = t,
        this.core = i,
        this.messages = new Map,
        this.name = rE,
        this.version = iE,
        this.initialized = !1,
        this.storagePrefix = Pi,
        this.init = async()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const n = await this.getRelayerMessages();
                    typeof n < "u" && (this.messages = n),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (n) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(n)
                } finally {
                    this.initialized = !0
                }
            }
        }
        ,
        this.set = async(n,o)=>{
            this.isInitialized();
            const h = ws(o);
            let p = this.messages.get(n);
            return typeof p > "u" && (p = {}),
            typeof p[h] < "u" || (p[h] = o,
            this.messages.set(n, p),
            await this.persist()),
            h
        }
        ,
        this.get = n=>{
            this.isInitialized();
            let o = this.messages.get(n);
            return typeof o > "u" && (o = {}),
            o
        }
        ,
        this.has = (n,o)=>{
            this.isInitialized();
            const h = this.get(n)
              , p = ws(o);
            return typeof h[p] < "u"
        }
        ,
        this.del = async n=>{
            this.isInitialized(),
            this.messages.delete(n),
            await this.persist()
        }
        ,
        this.logger = ur(t, this.name),
        this.core = i
    }
    get context() {
        return cr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setRelayerMessages(t) {
        await this.core.storage.setItem(this.storageKey, hf(t))
    }
    async getRelayerMessages() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? lf(t) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class AE extends Ob {
    constructor(t, i) {
        super(t, i),
        this.relayer = t,
        this.logger = i,
        this.events = new Sr.EventEmitter,
        this.name = nE,
        this.queue = new Map,
        this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS),
        this.needsTransportRestart = !1,
        this.publish = async(n,o,h)=>{
            var p;
            this.logger.debug("Publishing Payload"),
            this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: n,
                    message: o,
                    opts: h
                }
            });
            try {
                const y = (h == null ? void 0 : h.ttl) || sE
                  , m = Pc(h)
                  , g = (h == null ? void 0 : h.prompt) || !1
                  , E = (h == null ? void 0 : h.tag) || 0
                  , O = (h == null ? void 0 : h.id) || Of().toString()
                  , N = {
                    topic: n,
                    message: o,
                    opts: {
                        ttl: y,
                        relay: m,
                        prompt: g,
                        tag: E,
                        id: O
                    }
                }
                  , j = setTimeout(()=>this.queue.set(O, N), this.publishTimeout);
                try {
                    await await Xs(this.rpcPublish(n, o, y, m, g, E, O), this.publishTimeout, "Failed to publish payload, please try again."),
                    this.removeRequestFromQueue(O),
                    this.relayer.events.emit(Vt.publish, N)
                } catch (T) {
                    if (this.logger.debug("Publishing Payload stalled"),
                    this.needsTransportRestart = !0,
                    (p = h == null ? void 0 : h.internal) != null && p.throwOnFailedPublish)
                        throw this.removeRequestFromQueue(O),
                        T;
                    return
                } finally {
                    clearTimeout(j)
                }
                this.logger.debug("Successfully Published Payload"),
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: n,
                        message: o,
                        opts: h
                    }
                })
            } catch (y) {
                throw this.logger.debug("Failed to Publish Payload"),
                this.logger.error(y),
                y
            }
        }
        ,
        this.on = (n,o)=>{
            this.events.on(n, o)
        }
        ,
        this.once = (n,o)=>{
            this.events.once(n, o)
        }
        ,
        this.off = (n,o)=>{
            this.events.off(n, o)
        }
        ,
        this.removeListener = (n,o)=>{
            this.events.removeListener(n, o)
        }
        ,
        this.relayer = t,
        this.logger = ur(i, this.name),
        this.registerEventListeners()
    }
    get context() {
        return cr(this.logger)
    }
    rpcPublish(t, i, n, o, h, p, y) {
        var m, g, E, O;
        const N = {
            method: bo(o.protocol).publish,
            params: {
                topic: t,
                message: i,
                ttl: n,
                prompt: h,
                tag: p
            },
            id: y
        };
        return xi((m = N.params) == null ? void 0 : m.prompt) && ((g = N.params) == null || delete g.prompt),
        xi((E = N.params) == null ? void 0 : E.tag) && ((O = N.params) == null || delete O.tag),
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: N
        }),
        this.relayer.request(N)
    }
    removeRequestFromQueue(t) {
        this.queue.delete(t)
    }
    checkQueue() {
        this.queue.forEach(async t=>{
            const {topic: i, message: n, opts: o} = t;
            await this.publish(i, n, o)
        }
        )
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Es.HEARTBEAT_EVENTS.pulse, ()=>{
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1,
                this.relayer.events.emit(Vt.connection_stalled);
                return
            }
            this.checkQueue()
        }
        ),
        this.relayer.on(Vt.message_ack, t=>{
            this.removeRequestFromQueue(t.id.toString())
        }
        )
    }
}
class TE {
    constructor() {
        this.map = new Map,
        this.set = (t,i)=>{
            const n = this.get(t);
            this.exists(t, i) || this.map.set(t, [...n, i])
        }
        ,
        this.get = t=>this.map.get(t) || [],
        this.exists = (t,i)=>this.get(t).includes(i),
        this.delete = (t,i)=>{
            if (typeof i > "u") {
                this.map.delete(t);
                return
            }
            if (!this.map.has(t))
                return;
            const n = this.get(t);
            if (!this.exists(t, i))
                return;
            const o = n.filter(h=>h !== i);
            if (!o.length) {
                this.map.delete(t);
                return
            }
            this.map.set(t, o)
        }
        ,
        this.clear = ()=>{
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var CE = Object.defineProperty
  , $E = Object.defineProperties
  , NE = Object.getOwnPropertyDescriptors
  , Ol = Object.getOwnPropertySymbols
  , DE = Object.prototype.hasOwnProperty
  , qE = Object.prototype.propertyIsEnumerable
  , Al = (a,t,i)=>t in a ? CE(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , Fs = (a,t)=>{
    for (var i in t || (t = {}))
        DE.call(t, i) && Al(a, i, t[i]);
    if (Ol)
        for (var i of Ol(t))
            qE.call(t, i) && Al(a, i, t[i]);
    return a
}
  , vc = (a,t)=>$E(a, NE(t));
class jE extends Cb {
    constructor(t, i) {
        super(t, i),
        this.relayer = t,
        this.logger = i,
        this.subscriptions = new Map,
        this.topicMap = new TE,
        this.events = new Sr.EventEmitter,
        this.name = dE,
        this.version = gE,
        this.pending = new Map,
        this.cached = [],
        this.initialized = !1,
        this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
        this.pollingInterval = 20,
        this.storagePrefix = Pi,
        this.subscribeTimeout = 1e4,
        this.restartInProgress = !1,
        this.batchSubscribeTopicsLimit = 500,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            this.clientId = await this.relayer.core.crypto.getClientId())
        }
        ,
        this.subscribe = async(n,o)=>{
            await this.restartToComplete(),
            this.isInitialized(),
            this.logger.debug("Subscribing Topic"),
            this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: n,
                    opts: o
                }
            });
            try {
                const h = Pc(o)
                  , p = {
                    topic: n,
                    relay: h
                };
                this.pending.set(n, p);
                const y = await this.rpcSubscribe(n, h);
                return this.onSubscribe(y, p),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: n,
                        opts: o
                    }
                }),
                y
            } catch (h) {
                throw this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(h),
                h
            }
        }
        ,
        this.unsubscribe = async(n,o)=>{
            await this.restartToComplete(),
            this.isInitialized(),
            typeof (o == null ? void 0 : o.id) < "u" ? await this.unsubscribeById(n, o.id, o) : await this.unsubscribeByTopic(n, o)
        }
        ,
        this.isSubscribed = async n=>this.topics.includes(n) ? !0 : await new Promise((o,h)=>{
            const p = new te.Watch;
            p.start(this.pendingSubscriptionWatchLabel);
            const y = setInterval(()=>{
                !this.pending.has(n) && this.topics.includes(n) && (clearInterval(y),
                p.stop(this.pendingSubscriptionWatchLabel),
                o(!0)),
                p.elapsed(this.pendingSubscriptionWatchLabel) >= yE && (clearInterval(y),
                p.stop(this.pendingSubscriptionWatchLabel),
                h(new Error("Subscription resolution timeout")))
            }
            , this.pollingInterval)
        }
        ).catch(()=>!1),
        this.on = (n,o)=>{
            this.events.on(n, o)
        }
        ,
        this.once = (n,o)=>{
            this.events.once(n, o)
        }
        ,
        this.off = (n,o)=>{
            this.events.off(n, o)
        }
        ,
        this.removeListener = (n,o)=>{
            this.events.removeListener(n, o)
        }
        ,
        this.restart = async()=>{
            this.restartInProgress = !0,
            await this.restore(),
            await this.reset(),
            this.restartInProgress = !1
        }
        ,
        this.relayer = t,
        this.logger = ur(i, this.name),
        this.clientId = ""
    }
    get context() {
        return cr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(t, i) {
        let n = !1;
        try {
            n = this.getSubscription(t).topic === i
        } catch {}
        return n
    }
    onEnable() {
        this.cached = [],
        this.initialized = !0
    }
    onDisable() {
        this.cached = this.values,
        this.subscriptions.clear(),
        this.topicMap.clear()
    }
    async unsubscribeByTopic(t, i) {
        const n = this.topicMap.get(t);
        await Promise.all(n.map(async o=>await this.unsubscribeById(t, o, i)))
    }
    async unsubscribeById(t, i, n) {
        this.logger.debug("Unsubscribing Topic"),
        this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: t,
                id: i,
                opts: n
            }
        });
        try {
            const o = Pc(n);
            await this.rpcUnsubscribe(t, i, o);
            const h = Ft("USER_DISCONNECTED", `${this.name}, ${t}`);
            await this.onUnsubscribe(t, i, h),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: t,
                    id: i,
                    opts: n
                }
            })
        } catch (o) {
            throw this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(o),
            o
        }
    }
    async rpcSubscribe(t, i) {
        const n = {
            method: bo(i.protocol).subscribe,
            params: {
                topic: t
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        });
        try {
            await await Xs(this.relayer.request(n), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(Vt.connection_stalled)
        }
        return ws(t + this.clientId)
    }
    async rpcBatchSubscribe(t) {
        if (!t.length)
            return;
        const i = t[0].relay
          , n = {
            method: bo(i.protocol).batchSubscribe,
            params: {
                topics: t.map(o=>o.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        });
        try {
            return await await Xs(this.relayer.request(n), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
            this.relayer.events.emit(Vt.connection_stalled)
        }
    }
    rpcUnsubscribe(t, i, n) {
        const o = {
            method: bo(n.protocol).unsubscribe,
            params: {
                topic: t,
                id: i
            }
        };
        return this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: o
        }),
        this.relayer.request(o)
    }
    onSubscribe(t, i) {
        this.setSubscription(t, vc(Fs({}, i), {
            id: t
        })),
        this.pending.delete(i.topic)
    }
    onBatchSubscribe(t) {
        t.length && t.forEach(i=>{
            this.setSubscription(i.id, Fs({}, i)),
            this.pending.delete(i.topic)
        }
        )
    }
    async onUnsubscribe(t, i, n) {
        this.events.removeAllListeners(i),
        this.hasSubscription(i, t) && this.deleteSubscription(i, n),
        await this.relayer.messages.del(t)
    }
    async setRelayerSubscriptions(t) {
        await this.relayer.core.storage.setItem(this.storageKey, t)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(t, i) {
        this.subscriptions.has(t) || (this.logger.debug("Setting subscription"),
        this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: t,
            subscription: i
        }),
        this.addSubscription(t, i))
    }
    addSubscription(t, i) {
        this.subscriptions.set(t, Fs({}, i)),
        this.topicMap.set(i.topic, t),
        this.events.emit(Dr.created, i)
    }
    getSubscription(t) {
        this.logger.debug("Getting subscription"),
        this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: t
        });
        const i = this.subscriptions.get(t);
        if (!i) {
            const {message: n} = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(n)
        }
        return i
    }
    deleteSubscription(t, i) {
        this.logger.debug("Deleting subscription"),
        this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: t,
            reason: i
        });
        const n = this.getSubscription(t);
        this.subscriptions.delete(t),
        this.topicMap.delete(n.topic, t),
        this.events.emit(Dr.deleted, vc(Fs({}, n), {
            reason: i
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values),
        this.events.emit(Dr.sync)
    }
    async reset() {
        if (this.cached.length) {
            const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let i = 0; i < t; i++) {
                const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(n)
            }
        }
        this.events.emit(Dr.resubscribed)
    }
    async restore() {
        try {
            const t = await this.getRelayerSubscriptions();
            if (typeof t > "u" || !t.length)
                return;
            if (this.subscriptions.size) {
                const {message: i} = G("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(i),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                new Error(i)
            }
            this.cached = t,
            this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(t)
        }
    }
    async batchSubscribe(t) {
        if (!t.length)
            return;
        const i = await this.rpcBatchSubscribe(t);
        _s(i) && this.onBatchSubscribe(i.map((n,o)=>vc(Fs({}, t[o]), {
            id: n
        })))
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(),
        this.onEnable())
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
        const t = [];
        this.pending.forEach(i=>{
            t.push(i)
        }
        ),
        await this.batchSubscribe(t)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Es.HEARTBEAT_EVENTS.pulse, async()=>{
            await this.checkPending()
        }
        ),
        this.relayer.on(Vt.connect, async()=>{
            await this.onConnect()
        }
        ),
        this.relayer.on(Vt.disconnect, ()=>{
            this.onDisconnect()
        }
        ),
        this.events.on(Dr.created, async t=>{
            const i = Dr.created;
            this.logger.info(`Emitting ${i}`),
            this.logger.debug({
                type: "event",
                event: i,
                data: t
            }),
            await this.persist()
        }
        ),
        this.events.on(Dr.deleted, async t=>{
            const i = Dr.deleted;
            this.logger.info(`Emitting ${i}`),
            this.logger.debug({
                type: "event",
                event: i,
                data: t
            }),
            await this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(t=>{
            const i = setInterval(()=>{
                this.restartInProgress || (clearInterval(i),
                t())
            }
            , this.pollingInterval)
        }
        )
    }
}
var LE = Object.defineProperty
  , Tl = Object.getOwnPropertySymbols
  , ME = Object.prototype.hasOwnProperty
  , zE = Object.prototype.propertyIsEnumerable
  , Cl = (a,t,i)=>t in a ? LE(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , UE = (a,t)=>{
    for (var i in t || (t = {}))
        ME.call(t, i) && Cl(a, i, t[i]);
    if (Tl)
        for (var i of Tl(t))
            zE.call(t, i) && Cl(a, i, t[i]);
    return a
}
;
class HE extends Ab {
    constructor(t) {
        super(t),
        this.protocol = "wc",
        this.version = 2,
        this.events = new Sr.EventEmitter,
        this.name = aE,
        this.transportExplicitlyClosed = !1,
        this.initialized = !1,
        this.connectionAttemptInProgress = !1,
        this.connectionStatusPollingInterval = 20,
        this.staleConnectionErrors = ["socket hang up", "socket stalled"],
        this.hasExperiencedNetworkDisruption = !1,
        this.request = async i=>{
            this.logger.debug("Publishing Request Payload");
            try {
                return await this.toEstablishConnection(),
                await this.provider.request(i)
            } catch (n) {
                throw this.logger.debug("Failed to Publish Request"),
                this.logger.error(n),
                n
            }
        }
        ,
        this.onPayloadHandler = i=>{
            this.onProviderPayload(i)
        }
        ,
        this.onConnectHandler = ()=>{
            this.events.emit(Vt.connect)
        }
        ,
        this.onDisconnectHandler = ()=>{
            this.onProviderDisconnect()
        }
        ,
        this.onProviderErrorHandler = i=>{
            this.logger.error(i),
            this.events.emit(Vt.error, i),
            this.logger.info("Fatal socket error received, closing transport"),
            this.transportClose()
        }
        ,
        this.registerProviderListeners = ()=>{
            this.provider.on(oi.payload, this.onPayloadHandler),
            this.provider.on(oi.connect, this.onConnectHandler),
            this.provider.on(oi.disconnect, this.onDisconnectHandler),
            this.provider.on(oi.error, this.onProviderErrorHandler)
        }
        ,
        this.core = t.core,
        this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? ur(t.logger, this.name) : To(Co({
            level: t.logger || oE
        })),
        this.messages = new OE(this.logger,t.core),
        this.subscriber = new jE(this,this.logger),
        this.publisher = new AE(this,this.logger),
        this.relayUrl = (t == null ? void 0 : t.relayUrl) || Bf,
        this.projectId = t.projectId,
        this.bundleId = K0(),
        this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"),
        this.registerEventListeners(),
        await this.createProvider(),
        await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Rl}...`),
            await this.restartTransport(Rl)
        }
        this.initialized = !0,
        setTimeout(async()=>{
            this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"),
            await this.transportClose(),
            this.transportExplicitlyClosed = !1)
        }
        , lE)
    }
    get context() {
        return cr(this.logger)
    }
    get connected() {
        return this.provider.connection.connected
    }
    get connecting() {
        return this.provider.connection.connecting
    }
    async publish(t, i, n) {
        this.isInitialized(),
        await this.publisher.publish(t, i, n),
        await this.recordMessageEvent({
            topic: t,
            message: i,
            publishedAt: Date.now()
        })
    }
    async subscribe(t, i) {
        var n;
        this.isInitialized();
        let o = ((n = this.subscriber.topicMap.get(t)) == null ? void 0 : n[0]) || "";
        if (o)
            return o;
        let h;
        const p = y=>{
            y.topic === t && (this.subscriber.off(Dr.created, p),
            h())
        }
        ;
        return await Promise.all([new Promise(y=>{
            h = y,
            this.subscriber.on(Dr.created, p)
        }
        ), new Promise(async y=>{
            o = await this.subscriber.subscribe(t, i),
            y()
        }
        )]),
        o
    }
    async unsubscribe(t, i) {
        this.isInitialized(),
        await this.subscriber.unsubscribe(t, i)
    }
    on(t, i) {
        this.events.on(t, i)
    }
    once(t, i) {
        this.events.once(t, i)
    }
    off(t, i) {
        this.events.off(t, i)
    }
    removeListener(t, i) {
        this.events.removeListener(t, i)
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0,
        this.hasExperiencedNetworkDisruption && this.connected ? await Xs(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(()=>this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
    }
    async transportOpen(t) {
        if (this.transportExplicitlyClosed = !1,
        await this.confirmOnlineStateOrThrow(),
        !this.connectionAttemptInProgress) {
            t && t !== this.relayUrl && (this.relayUrl = t,
            await this.transportClose(),
            await this.createProvider()),
            this.connectionAttemptInProgress = !0;
            try {
                await Promise.all([new Promise(i=>{
                    if (!this.initialized)
                        return i();
                    this.subscriber.once(Dr.resubscribed, ()=>{
                        i()
                    }
                    )
                }
                ), new Promise(async(i,n)=>{
                    try {
                        await Xs(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                    } catch (o) {
                        n(o);
                        return
                    }
                    i()
                }
                )])
            } catch (i) {
                this.logger.error(i);
                const n = i;
                if (!this.isConnectionStalled(n.message))
                    throw i;
                this.provider.events.emit(oi.disconnect)
            } finally {
                this.connectionAttemptInProgress = !1,
                this.hasExperiencedNetworkDisruption = !1
            }
        }
    }
    async restartTransport(t) {
        await this.confirmOnlineStateOrThrow(),
        !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl,
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await Wh())
            throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    isConnectionStalled(t) {
        return this.staleConnectionErrors.some(i=>t.includes(i))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const t = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new hi(new v_(B0({
            sdkVersion: hE,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: t,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))),
        this.registerProviderListeners()
    }
    async recordMessageEvent(t) {
        const {topic: i, message: n} = t;
        await this.messages.set(i, n)
    }
    async shouldIgnoreMessageEvent(t) {
        const {topic: i, message: n} = t;
        if (!n || n.length === 0)
            return this.logger.debug(`Ignoring invalid/empty message: ${n}`),
            !0;
        if (!await this.subscriber.isSubscribed(i))
            return this.logger.debug(`Ignoring message for non-subscribed topic ${i}`),
            !0;
        const o = this.messages.has(i, n);
        return o && this.logger.debug(`Ignoring duplicate message: ${n}`),
        o
    }
    async onProviderPayload(t) {
        if (this.logger.debug("Incoming Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: t
        }),
        Hc(t)) {
            if (!t.method.endsWith(cE))
                return;
            const i = t.params
              , {topic: n, message: o, publishedAt: h} = i.data
              , p = {
                topic: n,
                message: o,
                publishedAt: h
            };
            this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(UE({
                type: "event",
                event: i.id
            }, p)),
            this.events.emit(i.id, p),
            await this.acknowledgePayload(t),
            await this.onMessageEvent(p)
        } else
            Do(t) && this.events.emit(Vt.message_ack, t)
    }
    async onMessageEvent(t) {
        await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Vt.message, t),
        await this.recordMessageEvent(t))
    }
    async acknowledgePayload(t) {
        const i = $o(t.id, !0);
        await this.provider.connection.send(i)
    }
    unregisterProviderListeners() {
        this.provider.off(oi.payload, this.onPayloadHandler),
        this.provider.off(oi.connect, this.onConnectHandler),
        this.provider.off(oi.disconnect, this.onDisconnectHandler),
        this.provider.off(oi.error, this.onProviderErrorHandler)
    }
    async registerEventListeners() {
        this.events.on(Vt.connection_stalled, ()=>{
            this.restartTransport().catch(i=>this.logger.error(i))
        }
        );
        let t = await Wh();
        F0(async i=>{
            this.initialized && t !== i && (t = i,
            i ? await this.restartTransport().catch(n=>this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0,
            await this.transportClose().catch(n=>this.logger.error(n))))
        }
        )
    }
    onProviderDisconnect() {
        this.events.emit(Vt.disconnect),
        this.attemptToReconnect()
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
        setTimeout(async()=>{
            await this.restartTransport().catch(t=>this.logger.error(t))
        }
        , te.toMiliseconds(uE)))
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(),
        !this.connected) {
            if (this.connectionAttemptInProgress)
                return await new Promise(t=>{
                    const i = setInterval(()=>{
                        this.connected && (clearInterval(i),
                        t())
                    }
                    , this.connectionStatusPollingInterval)
                }
                );
            await this.restartTransport()
        }
    }
}
var kE = Object.defineProperty
  , $l = Object.getOwnPropertySymbols
  , KE = Object.prototype.hasOwnProperty
  , BE = Object.prototype.propertyIsEnumerable
  , Nl = (a,t,i)=>t in a ? kE(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , Dl = (a,t)=>{
    for (var i in t || (t = {}))
        KE.call(t, i) && Nl(a, i, t[i]);
    if ($l)
        for (var i of $l(t))
            BE.call(t, i) && Nl(a, i, t[i]);
    return a
}
;
class jo extends Tb {
    constructor(t, i, n, o=Pi, h=void 0) {
        super(t, i, n, o),
        this.core = t,
        this.logger = i,
        this.name = n,
        this.map = new Map,
        this.version = fE,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = Pi,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(p=>{
                this.getKey && p !== null && !xi(p) ? this.map.set(this.getKey(p), p) : $0(p) ? this.map.set(p.id, p) : N0(p) && this.map.set(p.topic, p)
            }
            ),
            this.cached = [],
            this.initialized = !0)
        }
        ,
        this.set = async(p,y)=>{
            this.isInitialized(),
            this.map.has(p) ? await this.update(p, y) : (this.logger.debug("Setting value"),
            this.logger.trace({
                type: "method",
                method: "set",
                key: p,
                value: y
            }),
            this.map.set(p, y),
            await this.persist())
        }
        ,
        this.get = p=>(this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({
            type: "method",
            method: "get",
            key: p
        }),
        this.getData(p)),
        this.getAll = p=>(this.isInitialized(),
        p ? this.values.filter(y=>Object.keys(p).every(m=>w_(y[m], p[m]))) : this.values),
        this.update = async(p,y)=>{
            this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
                type: "method",
                method: "update",
                key: p,
                update: y
            });
            const m = Dl(Dl({}, this.getData(p)), y);
            this.map.set(p, m),
            await this.persist()
        }
        ,
        this.delete = async(p,y)=>{
            this.isInitialized(),
            this.map.has(p) && (this.logger.debug("Deleting value"),
            this.logger.trace({
                type: "method",
                method: "delete",
                key: p,
                reason: y
            }),
            this.map.delete(p),
            await this.persist())
        }
        ,
        this.logger = ur(i, this.name),
        this.storagePrefix = o,
        this.getKey = h
    }
    get context() {
        return cr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    async setDataStore(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(t) {
        const i = this.map.get(t);
        if (!i) {
            const {message: n} = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(n),
            new Error(n)
        }
        return i
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const t = await this.getDataStore();
            if (typeof t > "u" || !t.length)
                return;
            if (this.map.size) {
                const {message: i} = G("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(i),
                new Error(i)
            }
            this.cached = t,
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class FE {
    constructor(t, i) {
        this.core = t,
        this.logger = i,
        this.name = vE,
        this.version = mE,
        this.events = new Lc,
        this.initialized = !1,
        this.storagePrefix = Pi,
        this.ignoredPayloadTypes = [af],
        this.registeredMethods = [],
        this.init = async()=>{
            this.initialized || (await this.pairings.init(),
            await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.initialized = !0,
            this.logger.trace("Initialized"))
        }
        ,
        this.register = ({methods: n})=>{
            this.isInitialized(),
            this.registeredMethods = [...new Set([...this.registeredMethods, ...n])]
        }
        ,
        this.create = async()=>{
            this.isInitialized();
            const n = xc()
              , o = await this.core.crypto.setSymKey(n)
              , h = qr(te.FIVE_MINUTES)
              , p = {
                protocol: Kf
            }
              , y = {
                topic: o,
                expiry: h,
                relay: p,
                active: !1
            }
              , m = V0({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: o,
                symKey: n,
                relay: p
            });
            return await this.pairings.set(o, y),
            await this.core.relayer.subscribe(o),
            this.core.expirer.set(o, h),
            {
                topic: o,
                uri: m
            }
        }
        ,
        this.pair = async n=>{
            this.isInitialized(),
            this.isValidPair(n);
            const {topic: o, symKey: h, relay: p} = Jh(n.uri);
            let y;
            if (this.pairings.keys.includes(o) && (y = this.pairings.get(o),
            y.active))
                throw new Error(`Pairing already exists: ${o}. Please try again with a new connection URI.`);
            const m = qr(te.FIVE_MINUTES)
              , g = {
                topic: o,
                relay: p,
                expiry: m,
                active: !1
            };
            return await this.pairings.set(o, g),
            this.core.expirer.set(o, m),
            n.activatePairing && await this.activate({
                topic: o
            }),
            this.events.emit(Qs.create, g),
            this.core.crypto.keychain.has(o) || (await this.core.crypto.setSymKey(h, o),
            await this.core.relayer.subscribe(o, {
                relay: p
            })),
            g
        }
        ,
        this.activate = async({topic: n})=>{
            this.isInitialized();
            const o = qr(te.THIRTY_DAYS);
            await this.pairings.update(n, {
                active: !0,
                expiry: o
            }),
            this.core.expirer.set(n, o)
        }
        ,
        this.ping = async n=>{
            this.isInitialized(),
            await this.isValidPing(n);
            const {topic: o} = n;
            if (this.pairings.keys.includes(o)) {
                const h = await this.sendRequest(o, "wc_pairingPing", {})
                  , {done: p, resolve: y, reject: m} = ys();
                this.events.once(At("pairing_ping", h), ({error: g})=>{
                    g ? m(g) : y()
                }
                ),
                await p()
            }
        }
        ,
        this.updateExpiry = async({topic: n, expiry: o})=>{
            this.isInitialized(),
            await this.pairings.update(n, {
                expiry: o
            })
        }
        ,
        this.updateMetadata = async({topic: n, metadata: o})=>{
            this.isInitialized(),
            await this.pairings.update(n, {
                peerMetadata: o
            })
        }
        ,
        this.getPairings = ()=>(this.isInitialized(),
        this.pairings.values),
        this.disconnect = async n=>{
            this.isInitialized(),
            await this.isValidDisconnect(n);
            const {topic: o} = n;
            this.pairings.keys.includes(o) && (await this.sendRequest(o, "wc_pairingDelete", Ft("USER_DISCONNECTED")),
            await this.deletePairing(o))
        }
        ,
        this.sendRequest = async(n,o,h)=>{
            const p = bs(o, h)
              , y = await this.core.crypto.encode(n, p)
              , m = Bs[o].req;
            return this.core.history.set(n, p),
            this.core.relayer.publish(n, y, m),
            p.id
        }
        ,
        this.sendResult = async(n,o,h)=>{
            const p = $o(n, h)
              , y = await this.core.crypto.encode(o, p)
              , m = await this.core.history.get(o, n)
              , g = Bs[m.request.method].res;
            await this.core.relayer.publish(o, y, g),
            await this.core.history.resolve(p)
        }
        ,
        this.sendError = async(n,o,h)=>{
            const p = No(n, h)
              , y = await this.core.crypto.encode(o, p)
              , m = await this.core.history.get(o, n)
              , g = Bs[m.request.method] ? Bs[m.request.method].res : Bs.unregistered_method.res;
            await this.core.relayer.publish(o, y, g),
            await this.core.history.resolve(p)
        }
        ,
        this.deletePairing = async(n,o)=>{
            await this.core.relayer.unsubscribe(n),
            await Promise.all([this.pairings.delete(n, Ft("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), o ? Promise.resolve() : this.core.expirer.del(n)])
        }
        ,
        this.cleanup = async()=>{
            const n = this.pairings.getAll().filter(o=>Ii(o.expiry));
            await Promise.all(n.map(o=>this.deletePairing(o.topic)))
        }
        ,
        this.onRelayEventRequest = n=>{
            const {topic: o, payload: h} = n;
            switch (h.method) {
            case "wc_pairingPing":
                return this.onPairingPingRequest(o, h);
            case "wc_pairingDelete":
                return this.onPairingDeleteRequest(o, h);
            default:
                return this.onUnknownRpcMethodRequest(o, h)
            }
        }
        ,
        this.onRelayEventResponse = async n=>{
            const {topic: o, payload: h} = n
              , p = (await this.core.history.get(o, h.id)).request.method;
            switch (p) {
            case "wc_pairingPing":
                return this.onPairingPingResponse(o, h);
            default:
                return this.onUnknownRpcMethodResponse(p)
            }
        }
        ,
        this.onPairingPingRequest = async(n,o)=>{
            const {id: h} = o;
            try {
                this.isValidPing({
                    topic: n
                }),
                await this.sendResult(h, n, !0),
                this.events.emit(Qs.ping, {
                    id: h,
                    topic: n
                })
            } catch (p) {
                await this.sendError(h, n, p),
                this.logger.error(p)
            }
        }
        ,
        this.onPairingPingResponse = (n,o)=>{
            const {id: h} = o;
            setTimeout(()=>{
                ci(o) ? this.events.emit(At("pairing_ping", h), {}) : jr(o) && this.events.emit(At("pairing_ping", h), {
                    error: o.error
                })
            }
            , 500)
        }
        ,
        this.onPairingDeleteRequest = async(n,o)=>{
            const {id: h} = o;
            try {
                this.isValidDisconnect({
                    topic: n
                }),
                await this.deletePairing(n),
                this.events.emit(Qs.delete, {
                    id: h,
                    topic: n
                })
            } catch (p) {
                await this.sendError(h, n, p),
                this.logger.error(p)
            }
        }
        ,
        this.onUnknownRpcMethodRequest = async(n,o)=>{
            const {id: h, method: p} = o;
            try {
                if (this.registeredMethods.includes(p))
                    return;
                const y = Ft("WC_METHOD_UNSUPPORTED", p);
                await this.sendError(h, n, y),
                this.logger.error(y)
            } catch (y) {
                await this.sendError(h, n, y),
                this.logger.error(y)
            }
        }
        ,
        this.onUnknownRpcMethodResponse = n=>{
            this.registeredMethods.includes(n) || this.logger.error(Ft("WC_METHOD_UNSUPPORTED", n))
        }
        ,
        this.isValidPair = n=>{
            var o;
            if (!ar(n)) {
                const {message: p} = G("MISSING_OR_INVALID", `pair() params: ${n}`);
                throw new Error(p)
            }
            if (!G0(n.uri)) {
                const {message: p} = G("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
                throw new Error(p)
            }
            const h = Jh(n.uri);
            if (!((o = h == null ? void 0 : h.relay) != null && o.protocol)) {
                const {message: p} = G("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(p)
            }
            if (!(h != null && h.symKey)) {
                const {message: p} = G("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(p)
            }
        }
        ,
        this.isValidPing = async n=>{
            if (!ar(n)) {
                const {message: h} = G("MISSING_OR_INVALID", `ping() params: ${n}`);
                throw new Error(h)
            }
            const {topic: o} = n;
            await this.isValidPairingTopic(o)
        }
        ,
        this.isValidDisconnect = async n=>{
            if (!ar(n)) {
                const {message: h} = G("MISSING_OR_INVALID", `disconnect() params: ${n}`);
                throw new Error(h)
            }
            const {topic: o} = n;
            await this.isValidPairingTopic(o)
        }
        ,
        this.isValidPairingTopic = async n=>{
            if (!vs(n, !1)) {
                const {message: o} = G("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
                throw new Error(o)
            }
            if (!this.pairings.keys.includes(n)) {
                const {message: o} = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
                throw new Error(o)
            }
            if (Ii(this.pairings.get(n).expiry)) {
                await this.deletePairing(n);
                const {message: o} = G("EXPIRED", `pairing topic: ${n}`);
                throw new Error(o)
            }
        }
        ,
        this.core = t,
        this.logger = ur(i, this.name),
        this.pairings = new jo(this.core,this.logger,this.name,this.storagePrefix)
    }
    get context() {
        return cr(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(Vt.message, async t=>{
            const {topic: i, message: n} = t;
            if (!this.pairings.keys.includes(i) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
                return;
            const o = await this.core.crypto.decode(i, n);
            try {
                Hc(o) ? (this.core.history.set(i, o),
                this.onRelayEventRequest({
                    topic: i,
                    payload: o
                })) : Do(o) && (await this.core.history.resolve(o),
                await this.onRelayEventResponse({
                    topic: i,
                    payload: o
                }),
                this.core.history.delete(i, o.id))
            } catch (h) {
                this.logger.error(h)
            }
        }
        )
    }
    registerExpirerEvents() {
        this.core.expirer.on(Pr.expired, async t=>{
            const {topic: i} = cf(t.target);
            i && this.pairings.keys.includes(i) && (await this.deletePairing(i, !0),
            this.events.emit(Qs.expire, {
                topic: i
            }))
        }
        )
    }
}
class VE extends Sb {
    constructor(t, i) {
        super(t, i),
        this.core = t,
        this.logger = i,
        this.records = new Map,
        this.events = new Sr.EventEmitter,
        this.name = wE,
        this.version = bE,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = Pi,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(n=>this.records.set(n.id, n)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.set = (n,o,h)=>{
            if (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
                type: "method",
                method: "set",
                topic: n,
                request: o,
                chainId: h
            }),
            this.records.has(o.id))
                return;
            const p = {
                id: o.id,
                topic: n,
                request: {
                    method: o.method,
                    params: o.params || null
                },
                chainId: h,
                expiry: qr(te.THIRTY_DAYS)
            };
            this.records.set(p.id, p),
            this.events.emit(Br.created, p)
        }
        ,
        this.resolve = async n=>{
            if (this.isInitialized(),
            this.logger.debug("Updating JSON-RPC response history record"),
            this.logger.trace({
                type: "method",
                method: "update",
                response: n
            }),
            !this.records.has(n.id))
                return;
            const o = await this.getRecord(n.id);
            typeof o.response > "u" && (o.response = jr(n) ? {
                error: n.error
            } : {
                result: n.result
            },
            this.records.set(o.id, o),
            this.events.emit(Br.updated, o))
        }
        ,
        this.get = async(n,o)=>(this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({
            type: "method",
            method: "get",
            topic: n,
            id: o
        }),
        await this.getRecord(o)),
        this.delete = (n,o)=>{
            this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({
                type: "method",
                method: "delete",
                id: o
            }),
            this.values.forEach(h=>{
                if (h.topic === n) {
                    if (typeof o < "u" && h.id !== o)
                        return;
                    this.records.delete(h.id),
                    this.events.emit(Br.deleted, h)
                }
            }
            )
        }
        ,
        this.exists = async(n,o)=>(this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === n : !1),
        this.on = (n,o)=>{
            this.events.on(n, o)
        }
        ,
        this.once = (n,o)=>{
            this.events.once(n, o)
        }
        ,
        this.off = (n,o)=>{
            this.events.off(n, o)
        }
        ,
        this.removeListener = (n,o)=>{
            this.events.removeListener(n, o)
        }
        ,
        this.logger = ur(i, this.name)
    }
    get context() {
        return cr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const t = [];
        return this.values.forEach(i=>{
            if (typeof i.response < "u")
                return;
            const n = {
                topic: i.topic,
                request: bs(i.request.method, i.request.params, i.id),
                chainId: i.chainId
            };
            return t.push(n)
        }
        ),
        t
    }
    async setJsonRpcRecords(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(t) {
        this.isInitialized();
        const i = this.records.get(t);
        if (!i) {
            const {message: n} = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(n)
        }
        return i
    }
    async persist() {
        await this.setJsonRpcRecords(this.values),
        this.events.emit(Br.sync)
    }
    async restore() {
        try {
            const t = await this.getJsonRpcRecords();
            if (typeof t > "u" || !t.length)
                return;
            if (this.records.size) {
                const {message: i} = G("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(i),
                new Error(i)
            }
            this.cached = t,
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(t)
        }
    }
    registerEventListeners() {
        this.events.on(Br.created, t=>{
            const i = Br.created;
            this.logger.info(`Emitting ${i}`),
            this.logger.debug({
                type: "event",
                event: i,
                record: t
            }),
            this.persist()
        }
        ),
        this.events.on(Br.updated, t=>{
            const i = Br.updated;
            this.logger.info(`Emitting ${i}`),
            this.logger.debug({
                type: "event",
                event: i,
                record: t
            }),
            this.persist()
        }
        ),
        this.events.on(Br.deleted, t=>{
            const i = Br.deleted;
            this.logger.info(`Emitting ${i}`),
            this.logger.debug({
                type: "event",
                event: i,
                record: t
            }),
            this.persist()
        }
        ),
        this.core.heartbeat.on(Es.HEARTBEAT_EVENTS.pulse, ()=>{
            this.cleanup()
        }
        )
    }
    cleanup() {
        try {
            this.records.forEach(t=>{
                te.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.delete(t.topic, t.id))
            }
            )
        } catch (t) {
            this.logger.warn(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class GE extends $b {
    constructor(t, i) {
        super(t, i),
        this.core = t,
        this.logger = i,
        this.expirations = new Map,
        this.events = new Sr.EventEmitter,
        this.name = _E,
        this.version = EE,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = Pi,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(n=>this.expirations.set(n.target, n)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.has = n=>{
            try {
                const o = this.formatTarget(n);
                return typeof this.getExpiration(o) < "u"
            } catch {
                return !1
            }
        }
        ,
        this.set = (n,o)=>{
            this.isInitialized();
            const h = this.formatTarget(n)
              , p = {
                target: h,
                expiry: o
            };
            this.expirations.set(h, p),
            this.checkExpiry(h, p),
            this.events.emit(Pr.created, {
                target: h,
                expiration: p
            })
        }
        ,
        this.get = n=>{
            this.isInitialized();
            const o = this.formatTarget(n);
            return this.getExpiration(o)
        }
        ,
        this.del = n=>{
            if (this.isInitialized(),
            this.has(n)) {
                const o = this.formatTarget(n)
                  , h = this.getExpiration(o);
                this.expirations.delete(o),
                this.events.emit(Pr.deleted, {
                    target: o,
                    expiration: h
                })
            }
        }
        ,
        this.on = (n,o)=>{
            this.events.on(n, o)
        }
        ,
        this.once = (n,o)=>{
            this.events.once(n, o)
        }
        ,
        this.off = (n,o)=>{
            this.events.off(n, o)
        }
        ,
        this.removeListener = (n,o)=>{
            this.events.removeListener(n, o)
        }
        ,
        this.logger = ur(i, this.name)
    }
    get context() {
        return cr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(t) {
        if (typeof t == "string")
            return W0(t);
        if (typeof t == "number")
            return J0(t);
        const {message: i} = G("UNKNOWN_TYPE", `Target type: ${typeof t}`);
        throw new Error(i)
    }
    async setExpirations(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values),
        this.events.emit(Pr.sync)
    }
    async restore() {
        try {
            const t = await this.getExpirations();
            if (typeof t > "u" || !t.length)
                return;
            if (this.expirations.size) {
                const {message: i} = G("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(i),
                new Error(i)
            }
            this.cached = t,
            this.logger.debug(`Successfully Restored expirations for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(t)
        }
    }
    getExpiration(t) {
        const i = this.expirations.get(t);
        if (!i) {
            const {message: n} = G("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(n),
            new Error(n)
        }
        return i
    }
    checkExpiry(t, i) {
        const {expiry: n} = i;
        te.toMiliseconds(n) - Date.now() <= 0 && this.expire(t, i)
    }
    expire(t, i) {
        this.expirations.delete(t),
        this.events.emit(Pr.expired, {
            target: t,
            expiration: i
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((t,i)=>this.checkExpiry(i, t))
    }
    registerEventListeners() {
        this.core.heartbeat.on(Es.HEARTBEAT_EVENTS.pulse, ()=>this.checkExpirations()),
        this.events.on(Pr.created, t=>{
            const i = Pr.created;
            this.logger.info(`Emitting ${i}`),
            this.logger.debug({
                type: "event",
                event: i,
                data: t
            }),
            this.persist()
        }
        ),
        this.events.on(Pr.expired, t=>{
            const i = Pr.expired;
            this.logger.info(`Emitting ${i}`),
            this.logger.debug({
                type: "event",
                event: i,
                data: t
            }),
            this.persist()
        }
        ),
        this.events.on(Pr.deleted, t=>{
            const i = Pr.deleted;
            this.logger.info(`Emitting ${i}`),
            this.logger.debug({
                type: "event",
                event: i,
                data: t
            }),
            this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class WE extends Nb {
    constructor(t, i) {
        super(t, i),
        this.projectId = t,
        this.logger = i,
        this.name = yc,
        this.initialized = !1,
        this.queue = [],
        this.verifyDisabled = !1,
        this.init = async n=>{
            if (this.verifyDisabled || Q0() || !uf())
                return;
            const o = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
            this.verifyUrl !== o && this.removeIframe(),
            this.verifyUrl = o;
            try {
                await this.createIframe()
            } catch (h) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                this.logger.info(h)
            }
            if (!this.initialized) {
                this.removeIframe(),
                this.verifyUrl = Tc;
                try {
                    await this.createIframe()
                } catch (h) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                    this.logger.info(h),
                    this.verifyDisabled = !0
                }
            }
        }
        ,
        this.register = async n=>{
            this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId),
            await this.init())
        }
        ,
        this.resolve = async n=>{
            if (this.isDevEnv)
                return "";
            const o = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
            let h;
            try {
                h = await this.fetchAttestation(n.attestationId, o)
            } catch (p) {
                this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${o}`),
                this.logger.info(p),
                h = await this.fetchAttestation(n.attestationId, Tc)
            }
            return h
        }
        ,
        this.fetchAttestation = async(n,o)=>{
            this.logger.info(`resolving attestation: ${n} from url: ${o}`);
            const h = this.startAbortTimer(te.ONE_SECOND * 2)
              , p = await fetch(`${o}/attestation/${n}`, {
                signal: this.abortController.signal
            });
            return clearTimeout(h),
            p.status === 200 ? await p.json() : void 0
        }
        ,
        this.addToQueue = n=>{
            this.queue.push(n)
        }
        ,
        this.processQueue = ()=>{
            this.queue.length !== 0 && (this.queue.forEach(n=>this.sendPost(n)),
            this.queue = [])
        }
        ,
        this.sendPost = n=>{
            var o;
            try {
                if (!this.iframe)
                    return;
                (o = this.iframe.contentWindow) == null || o.postMessage(n, "*"),
                this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`)
            } catch {}
        }
        ,
        this.createIframe = async()=>{
            let n;
            const o = h=>{
                h.data === "verify_ready" && (this.initialized = !0,
                this.processQueue(),
                window.removeEventListener("message", o),
                n())
            }
            ;
            await Promise.race([new Promise(h=>{
                if (document.getElementById(yc))
                    return h();
                window.addEventListener("message", o);
                const p = document.createElement("iframe");
                p.id = yc,
                p.src = `${this.verifyUrl}/${this.projectId}`,
                p.style.display = "none",
                document.body.append(p),
                this.iframe = p,
                n = h
            }
            ), new Promise((h,p)=>setTimeout(()=>{
                window.removeEventListener("message", o),
                p("verify iframe load timeout")
            }
            , te.toMiliseconds(te.FIVE_SECONDS)))])
        }
        ,
        this.removeIframe = ()=>{
            this.iframe && (this.iframe.remove(),
            this.iframe = void 0,
            this.initialized = !1)
        }
        ,
        this.getVerifyUrl = n=>{
            let o = n || ms;
            return IE.includes(o) || (this.logger.info(`verify url: ${o}, not included in trusted list, assigning default: ${ms}`),
            o = ms),
            o
        }
        ,
        this.logger = ur(i, this.name),
        this.verifyUrl = ms,
        this.abortController = new AbortController,
        this.isDevEnv = Y0() && x_.IS_VITEST
    }
    get context() {
        return cr(this.logger)
    }
    startAbortTimer(t) {
        return this.abortController = new AbortController,
        setTimeout(()=>this.abortController.abort(), te.toMiliseconds(t))
    }
}
class JE extends Db {
    constructor(t, i) {
        super(t, i),
        this.projectId = t,
        this.logger = i,
        this.context = xE,
        this.registerDeviceToken = async n=>{
            const {clientId: o, token: h, notificationType: p, enableEncrypted: y=!1} = n
              , m = `${PE}/${this.projectId}/clients`;
            await I_(m, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: o,
                    type: p,
                    token: h,
                    always_raw: y
                })
            })
        }
        ,
        this.logger = ur(i, this.context)
    }
}
var QE = Object.defineProperty
  , ql = Object.getOwnPropertySymbols
  , YE = Object.prototype.hasOwnProperty
  , ZE = Object.prototype.propertyIsEnumerable
  , jl = (a,t,i)=>t in a ? QE(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , Ll = (a,t)=>{
    for (var i in t || (t = {}))
        YE.call(t, i) && jl(a, i, t[i]);
    if (ql)
        for (var i of ql(t))
            ZE.call(t, i) && jl(a, i, t[i]);
    return a
}
;
class Kc extends Pb {
    constructor(t) {
        super(t),
        this.protocol = kf,
        this.version = J1,
        this.name = kc,
        this.events = new Sr.EventEmitter,
        this.initialized = !1,
        this.on = (n,o)=>this.events.on(n, o),
        this.once = (n,o)=>this.events.once(n, o),
        this.off = (n,o)=>this.events.off(n, o),
        this.removeListener = (n,o)=>this.events.removeListener(n, o),
        this.projectId = t == null ? void 0 : t.projectId,
        this.relayUrl = (t == null ? void 0 : t.relayUrl) || Bf,
        this.customStoragePrefix = t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
        const i = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : To(Co({
            level: (t == null ? void 0 : t.logger) || Q1.logger
        }));
        this.logger = ur(i, this.name),
        this.heartbeat = new Es.HeartBeat,
        this.crypto = new RE(this,this.logger,t == null ? void 0 : t.keychain),
        this.history = new VE(this,this.logger),
        this.expirer = new GE(this,this.logger),
        this.storage = t != null && t.storage ? t.storage : new Ww(Ll(Ll({}, Y1), t == null ? void 0 : t.storageOptions)),
        this.relayer = new HE({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }),
        this.pairing = new FE(this,this.logger),
        this.verify = new WE(this.projectId || "",this.logger),
        this.echoClient = new JE(this.projectId || "",this.logger)
    }
    static async init(t) {
        const i = new Kc(t);
        await i.initialize();
        const n = await i.crypto.getClientId();
        return await i.storage.setItem(pE, n),
        i
    }
    get context() {
        return cr(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(),
            await this.history.init(),
            await this.expirer.init(),
            await this.relayer.init(),
            await this.heartbeat.init(),
            await this.pairing.init(),
            this.initialized = !0,
            this.logger.info("Core Initialization Success")
        } catch (t) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t),
            this.logger.error(t.message),
            t
        }
    }
}
const XE = Kc
  , Ff = "wc"
  , Vf = 2
  , Gf = "client"
  , Bc = `${Ff}@${Vf}:${Gf}:`
  , mc = {
    name: Gf,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com"
}
  , Ml = "WALLETCONNECT_DEEPLINK_CHOICE"
  , eI = "proposal"
  , Wf = "Proposal expired"
  , tI = "session"
  , vo = te.SEVEN_DAYS
  , rI = "engine"
  , Vs = {
    wc_sessionPropose: {
        req: {
            ttl: te.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: te.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: te.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: te.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: te.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: te.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: te.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: te.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: te.ONE_DAY,
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: te.THIRTY_SECONDS,
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: te.THIRTY_SECONDS,
            prompt: !1,
            tag: 1115
        }
    }
}
  , wc = {
    min: te.FIVE_MINUTES,
    max: te.SEVEN_DAYS
}
  , ai = {
    idle: "IDLE",
    active: "ACTIVE"
}
  , iI = "request"
  , sI = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var nI = Object.defineProperty
  , oI = Object.defineProperties
  , aI = Object.getOwnPropertyDescriptors
  , zl = Object.getOwnPropertySymbols
  , cI = Object.prototype.hasOwnProperty
  , uI = Object.prototype.propertyIsEnumerable
  , Ul = (a,t,i)=>t in a ? nI(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , nr = (a,t)=>{
    for (var i in t || (t = {}))
        cI.call(t, i) && Ul(a, i, t[i]);
    if (zl)
        for (var i of zl(t))
            uI.call(t, i) && Ul(a, i, t[i]);
    return a
}
  , Gs = (a,t)=>oI(a, aI(t));
class hI extends jb {
    constructor(t) {
        super(t),
        this.name = rI,
        this.events = new Lc,
        this.initialized = !1,
        this.ignoredPayloadTypes = [af],
        this.requestQueue = {
            state: ai.idle,
            queue: []
        },
        this.sessionRequestQueue = {
            state: ai.idle,
            queue: []
        },
        this.requestQueueDelay = te.ONE_SECOND,
        this.init = async()=>{
            this.initialized || (await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            this.client.core.pairing.register({
                methods: Object.keys(Vs)
            }),
            this.initialized = !0,
            setTimeout(()=>{
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                this.processSessionRequestQueue()
            }
            , te.toMiliseconds(this.requestQueueDelay)))
        }
        ,
        this.connect = async i=>{
            await this.isInitialized();
            const n = Gs(nr({}, i), {
                requiredNamespaces: i.requiredNamespaces || {},
                optionalNamespaces: i.optionalNamespaces || {}
            });
            await this.isValidConnect(n);
            const {pairingTopic: o, requiredNamespaces: h, optionalNamespaces: p, sessionProperties: y, relays: m} = n;
            let g = o, E, O = !1;
            if (g && (O = this.client.core.pairing.pairings.get(g).active),
            !g || !O) {
                const {topic: ae, uri: ee} = await this.client.core.pairing.create();
                g = ae,
                E = ee
            }
            const N = await this.client.core.crypto.generateKeyPair()
              , j = nr({
                requiredNamespaces: h,
                optionalNamespaces: p,
                relays: m ?? [{
                    protocol: Kf
                }],
                proposer: {
                    publicKey: N,
                    metadata: this.client.metadata
                }
            }, y && {
                sessionProperties: y
            })
              , {reject: T, resolve: Y, done: re} = ys(te.FIVE_MINUTES, Wf);
            if (this.events.once(At("session_connect"), async({error: ae, session: ee})=>{
                if (ae)
                    T(ae);
                else if (ee) {
                    ee.self.publicKey = N;
                    const he = Gs(nr({}, ee), {
                        requiredNamespaces: ee.requiredNamespaces,
                        optionalNamespaces: ee.optionalNamespaces
                    });
                    await this.client.session.set(ee.topic, he),
                    await this.setExpiry(ee.topic, ee.expiry),
                    g && await this.client.core.pairing.updateMetadata({
                        topic: g,
                        metadata: ee.peer.metadata
                    }),
                    Y(he)
                }
            }
            ),
            !g) {
                const {message: ae} = G("NO_MATCHING_KEY", `connect() pairing topic: ${g}`);
                throw new Error(ae)
            }
            const oe = await this.sendRequest({
                topic: g,
                method: "wc_sessionPropose",
                params: j
            })
              , ce = qr(te.FIVE_MINUTES);
            return await this.setProposal(oe, nr({
                id: oe,
                expiry: ce
            }, j)),
            {
                uri: E,
                approval: re
            }
        }
        ,
        this.pair = async i=>(await this.isInitialized(),
        await this.client.core.pairing.pair(i)),
        this.approve = async i=>{
            await this.isInitialized(),
            await this.isValidApprove(i);
            const {id: n, relayProtocol: o, namespaces: h, sessionProperties: p} = i
              , y = this.client.proposal.get(n);
            let {pairingTopic: m, proposer: g, requiredNamespaces: E, optionalNamespaces: O} = y;
            m = m || "",
            _o(E) || (E = X0(h, "approve()"));
            const N = await this.client.core.crypto.generateKeyPair()
              , j = g.publicKey
              , T = await this.client.core.crypto.generateSharedKey(N, j);
            m && n && (await this.client.core.pairing.updateMetadata({
                topic: m,
                metadata: g.metadata
            }),
            await this.sendResult({
                id: n,
                topic: m,
                result: {
                    relay: {
                        protocol: o ?? "irn"
                    },
                    responderPublicKey: N
                }
            }),
            await this.client.proposal.delete(n, Ft("USER_DISCONNECTED")),
            await this.client.core.pairing.activate({
                topic: m
            }));
            const Y = nr({
                relay: {
                    protocol: o ?? "irn"
                },
                namespaces: h,
                requiredNamespaces: E,
                optionalNamespaces: O,
                pairingTopic: m,
                controller: {
                    publicKey: N,
                    metadata: this.client.metadata
                },
                expiry: qr(vo)
            }, p && {
                sessionProperties: p
            });
            await this.client.core.relayer.subscribe(T),
            await this.sendRequest({
                topic: T,
                method: "wc_sessionSettle",
                params: Y,
                throwOnFailedPublish: !0
            });
            const re = Gs(nr({}, Y), {
                topic: T,
                pairingTopic: m,
                acknowledged: !1,
                self: Y.controller,
                peer: {
                    publicKey: g.publicKey,
                    metadata: g.metadata
                },
                controller: N
            });
            return await this.client.session.set(T, re),
            await this.setExpiry(T, qr(vo)),
            {
                topic: T,
                acknowledged: ()=>new Promise(oe=>setTimeout(()=>oe(this.client.session.get(T)), 500))
            }
        }
        ,
        this.reject = async i=>{
            await this.isInitialized(),
            await this.isValidReject(i);
            const {id: n, reason: o} = i
              , {pairingTopic: h} = this.client.proposal.get(n);
            h && (await this.sendError(n, h, o),
            await this.client.proposal.delete(n, Ft("USER_DISCONNECTED")))
        }
        ,
        this.update = async i=>{
            await this.isInitialized(),
            await this.isValidUpdate(i);
            const {topic: n, namespaces: o} = i
              , h = await this.sendRequest({
                topic: n,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: o
                }
            })
              , {done: p, resolve: y, reject: m} = ys();
            return this.events.once(At("session_update", h), ({error: g})=>{
                g ? m(g) : y()
            }
            ),
            await this.client.session.update(n, {
                namespaces: o
            }),
            {
                acknowledged: p
            }
        }
        ,
        this.extend = async i=>{
            await this.isInitialized(),
            await this.isValidExtend(i);
            const {topic: n} = i
              , o = await this.sendRequest({
                topic: n,
                method: "wc_sessionExtend",
                params: {}
            })
              , {done: h, resolve: p, reject: y} = ys();
            return this.events.once(At("session_extend", o), ({error: m})=>{
                m ? y(m) : p()
            }
            ),
            await this.setExpiry(n, qr(vo)),
            {
                acknowledged: h
            }
        }
        ,
        this.request = async i=>{
            await this.isInitialized(),
            await this.isValidRequest(i);
            const {chainId: n, request: o, topic: h, expiry: p} = i
              , y = Uc()
              , {done: m, resolve: g, reject: E} = ys(p, "Request expired. Please try again.");
            return this.events.once(At("session_request", y), ({error: O, result: N})=>{
                O ? E(O) : g(N)
            }
            ),
            await Promise.all([new Promise(async O=>{
                await this.sendRequest({
                    clientRpcId: y,
                    topic: h,
                    method: "wc_sessionRequest",
                    params: {
                        request: o,
                        chainId: n
                    },
                    expiry: p,
                    throwOnFailedPublish: !0
                }).catch(N=>E(N)),
                this.client.events.emit("session_request_sent", {
                    topic: h,
                    request: o,
                    chainId: n,
                    id: y
                }),
                O()
            }
            ), new Promise(async O=>{
                const N = await ew(this.client.core.storage, Ml);
                tw({
                    id: y,
                    topic: h,
                    wcDeepLink: N
                }),
                O()
            }
            ), m()]).then(O=>O[2])
        }
        ,
        this.respond = async i=>{
            await this.isInitialized(),
            await this.isValidRespond(i);
            const {topic: n, response: o} = i
              , {id: h} = o;
            ci(o) ? await this.sendResult({
                id: h,
                topic: n,
                result: o.result,
                throwOnFailedPublish: !0
            }) : jr(o) && await this.sendError(h, n, o.error),
            this.cleanupAfterResponse(i)
        }
        ,
        this.ping = async i=>{
            await this.isInitialized(),
            await this.isValidPing(i);
            const {topic: n} = i;
            if (this.client.session.keys.includes(n)) {
                const o = await this.sendRequest({
                    topic: n,
                    method: "wc_sessionPing",
                    params: {}
                })
                  , {done: h, resolve: p, reject: y} = ys();
                this.events.once(At("session_ping", o), ({error: m})=>{
                    m ? y(m) : p()
                }
                ),
                await h()
            } else
                this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({
                    topic: n
                })
        }
        ,
        this.emit = async i=>{
            await this.isInitialized(),
            await this.isValidEmit(i);
            const {topic: n, event: o, chainId: h} = i;
            await this.sendRequest({
                topic: n,
                method: "wc_sessionEvent",
                params: {
                    event: o,
                    chainId: h
                }
            })
        }
        ,
        this.disconnect = async i=>{
            await this.isInitialized(),
            await this.isValidDisconnect(i);
            const {topic: n} = i;
            this.client.session.keys.includes(n) ? (await this.sendRequest({
                topic: n,
                method: "wc_sessionDelete",
                params: Ft("USER_DISCONNECTED"),
                throwOnFailedPublish: !0
            }),
            await this.deleteSession(n)) : await this.client.core.pairing.disconnect({
                topic: n
            })
        }
        ,
        this.find = i=>(this.isInitialized(),
        this.client.session.getAll().filter(n=>rw(n, i))),
        this.getPendingSessionRequests = ()=>(this.isInitialized(),
        this.client.pendingRequest.getAll()),
        this.cleanupDuplicatePairings = async i=>{
            if (i.pairingTopic)
                try {
                    const n = this.client.core.pairing.pairings.get(i.pairingTopic)
                      , o = this.client.core.pairing.pairings.getAll().filter(h=>{
                        var p, y;
                        return ((p = h.peerMetadata) == null ? void 0 : p.url) && ((y = h.peerMetadata) == null ? void 0 : y.url) === i.peer.metadata.url && h.topic && h.topic !== n.topic
                    }
                    );
                    if (o.length === 0)
                        return;
                    this.client.logger.info(`Cleaning up ${o.length} duplicate pairing(s)`),
                    await Promise.all(o.map(h=>this.client.core.pairing.disconnect({
                        topic: h.topic
                    }))),
                    this.client.logger.info("Duplicate pairings clean up finished")
                } catch (n) {
                    this.client.logger.error(n)
                }
        }
        ,
        this.deleteSession = async(i,n)=>{
            const {self: o} = this.client.session.get(i);
            await this.client.core.relayer.unsubscribe(i),
            this.client.session.delete(i, Ft("USER_DISCONNECTED")),
            this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey),
            this.client.core.crypto.keychain.has(i) && await this.client.core.crypto.deleteSymKey(i),
            n || this.client.core.expirer.del(i),
            this.client.core.storage.removeItem(Ml).catch(h=>this.client.logger.warn(h)),
            this.getPendingSessionRequests().forEach(h=>{
                h.topic === i && this.deletePendingSessionRequest(h.id, Ft("USER_DISCONNECTED"))
            }
            )
        }
        ,
        this.deleteProposal = async(i,n)=>{
            await Promise.all([this.client.proposal.delete(i, Ft("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(i)])
        }
        ,
        this.deletePendingSessionRequest = async(i,n,o=!1)=>{
            await Promise.all([this.client.pendingRequest.delete(i, n), o ? Promise.resolve() : this.client.core.expirer.del(i)]),
            this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(h=>h.id !== i),
            o && (this.sessionRequestQueue.state = ai.idle)
        }
        ,
        this.setExpiry = async(i,n)=>{
            this.client.session.keys.includes(i) && await this.client.session.update(i, {
                expiry: n
            }),
            this.client.core.expirer.set(i, n)
        }
        ,
        this.setProposal = async(i,n)=>{
            await this.client.proposal.set(i, n),
            this.client.core.expirer.set(i, n.expiry)
        }
        ,
        this.setPendingSessionRequest = async i=>{
            const n = Vs.wc_sessionRequest.req.ttl
              , {id: o, topic: h, params: p, verifyContext: y} = i;
            await this.client.pendingRequest.set(o, {
                id: o,
                topic: h,
                params: p,
                verifyContext: y
            }),
            n && this.client.core.expirer.set(o, qr(n))
        }
        ,
        this.sendRequest = async i=>{
            const {topic: n, method: o, params: h, expiry: p, relayRpcId: y, clientRpcId: m, throwOnFailedPublish: g} = i
              , E = bs(o, h, m);
            if (uf() && sI.includes(o)) {
                const j = ws(JSON.stringify(E));
                this.client.core.verify.register({
                    attestationId: j
                })
            }
            const O = await this.client.core.crypto.encode(n, E)
              , N = Vs[o].req;
            return p && (N.ttl = p),
            y && (N.id = y),
            this.client.core.history.set(n, E),
            g ? (N.internal = Gs(nr({}, N.internal), {
                throwOnFailedPublish: !0
            }),
            await this.client.core.relayer.publish(n, O, N)) : this.client.core.relayer.publish(n, O, N).catch(j=>this.client.logger.error(j)),
            E.id
        }
        ,
        this.sendResult = async i=>{
            const {id: n, topic: o, result: h, throwOnFailedPublish: p} = i
              , y = $o(n, h)
              , m = await this.client.core.crypto.encode(o, y)
              , g = await this.client.core.history.get(o, n)
              , E = Vs[g.request.method].res;
            p ? (E.internal = Gs(nr({}, E.internal), {
                throwOnFailedPublish: !0
            }),
            await this.client.core.relayer.publish(o, m, E)) : this.client.core.relayer.publish(o, m, E).catch(O=>this.client.logger.error(O)),
            await this.client.core.history.resolve(y)
        }
        ,
        this.sendError = async(i,n,o)=>{
            const h = No(i, o)
              , p = await this.client.core.crypto.encode(n, h)
              , y = await this.client.core.history.get(n, i)
              , m = Vs[y.request.method].res;
            this.client.core.relayer.publish(n, p, m),
            await this.client.core.history.resolve(h)
        }
        ,
        this.cleanup = async()=>{
            const i = []
              , n = [];
            this.client.session.getAll().forEach(o=>{
                Ii(o.expiry) && i.push(o.topic)
            }
            ),
            this.client.proposal.getAll().forEach(o=>{
                Ii(o.expiry) && n.push(o.id)
            }
            ),
            await Promise.all([...i.map(o=>this.deleteSession(o)), ...n.map(o=>this.deleteProposal(o))])
        }
        ,
        this.onRelayEventRequest = async i=>{
            this.requestQueue.queue.push(i),
            await this.processRequestsQueue()
        }
        ,
        this.processRequestsQueue = async()=>{
            if (this.requestQueue.state === ai.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                this.requestQueue.state = ai.active;
                const i = this.requestQueue.queue.shift();
                if (i)
                    try {
                        this.processRequest(i),
                        await new Promise(n=>setTimeout(n, 300))
                    } catch (n) {
                        this.client.logger.warn(n)
                    }
            }
            this.requestQueue.state = ai.idle
        }
        ,
        this.processRequest = i=>{
            const {topic: n, payload: o} = i
              , h = o.method;
            switch (h) {
            case "wc_sessionPropose":
                return this.onSessionProposeRequest(n, o);
            case "wc_sessionSettle":
                return this.onSessionSettleRequest(n, o);
            case "wc_sessionUpdate":
                return this.onSessionUpdateRequest(n, o);
            case "wc_sessionExtend":
                return this.onSessionExtendRequest(n, o);
            case "wc_sessionPing":
                return this.onSessionPingRequest(n, o);
            case "wc_sessionDelete":
                return this.onSessionDeleteRequest(n, o);
            case "wc_sessionRequest":
                return this.onSessionRequest(n, o);
            case "wc_sessionEvent":
                return this.onSessionEventRequest(n, o);
            default:
                return this.client.logger.info(`Unsupported request method ${h}`)
            }
        }
        ,
        this.onRelayEventResponse = async i=>{
            const {topic: n, payload: o} = i
              , h = (await this.client.core.history.get(n, o.id)).request.method;
            switch (h) {
            case "wc_sessionPropose":
                return this.onSessionProposeResponse(n, o);
            case "wc_sessionSettle":
                return this.onSessionSettleResponse(n, o);
            case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(n, o);
            case "wc_sessionExtend":
                return this.onSessionExtendResponse(n, o);
            case "wc_sessionPing":
                return this.onSessionPingResponse(n, o);
            case "wc_sessionRequest":
                return this.onSessionRequestResponse(n, o);
            default:
                return this.client.logger.info(`Unsupported response method ${h}`)
            }
        }
        ,
        this.onRelayEventUnknownPayload = i=>{
            const {topic: n} = i
              , {message: o} = G("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(o)
        }
        ,
        this.onSessionProposeRequest = async(i,n)=>{
            const {params: o, id: h} = n;
            try {
                this.isValidConnect(nr({}, n.params));
                const p = qr(te.FIVE_MINUTES)
                  , y = nr({
                    id: h,
                    pairingTopic: i,
                    expiry: p
                }, o);
                await this.setProposal(h, y);
                const m = ws(JSON.stringify(n))
                  , g = await this.getVerifyContext(m, y.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: h,
                    params: y,
                    verifyContext: g
                })
            } catch (p) {
                await this.sendError(h, i, p),
                this.client.logger.error(p)
            }
        }
        ,
        this.onSessionProposeResponse = async(i,n)=>{
            const {id: o} = n;
            if (ci(n)) {
                const {result: h} = n;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: h
                });
                const p = this.client.proposal.get(o);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: p
                });
                const y = p.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: y
                });
                const m = h.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: m
                });
                const g = await this.client.core.crypto.generateSharedKey(y, m);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: g
                });
                const E = await this.client.core.relayer.subscribe(g);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: E
                }),
                await this.client.core.pairing.activate({
                    topic: i
                })
            } else
                jr(n) && (await this.client.proposal.delete(o, Ft("USER_DISCONNECTED")),
                this.events.emit(At("session_connect"), {
                    error: n.error
                }))
        }
        ,
        this.onSessionSettleRequest = async(i,n)=>{
            const {id: o, params: h} = n;
            try {
                this.isValidSessionSettleRequest(h);
                const {relay: p, controller: y, expiry: m, namespaces: g, requiredNamespaces: E, optionalNamespaces: O, sessionProperties: N, pairingTopic: j} = n.params
                  , T = nr({
                    topic: i,
                    relay: p,
                    expiry: m,
                    namespaces: g,
                    acknowledged: !0,
                    pairingTopic: j,
                    requiredNamespaces: E,
                    optionalNamespaces: O,
                    controller: y.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: y.publicKey,
                        metadata: y.metadata
                    }
                }, N && {
                    sessionProperties: N
                });
                await this.sendResult({
                    id: n.id,
                    topic: i,
                    result: !0
                }),
                this.events.emit(At("session_connect"), {
                    session: T
                }),
                this.cleanupDuplicatePairings(T)
            } catch (p) {
                await this.sendError(o, i, p),
                this.client.logger.error(p)
            }
        }
        ,
        this.onSessionSettleResponse = async(i,n)=>{
            const {id: o} = n;
            ci(n) ? (await this.client.session.update(i, {
                acknowledged: !0
            }),
            this.events.emit(At("session_approve", o), {})) : jr(n) && (await this.client.session.delete(i, Ft("USER_DISCONNECTED")),
            this.events.emit(At("session_approve", o), {
                error: n.error
            }))
        }
        ,
        this.onSessionUpdateRequest = async(i,n)=>{
            const {params: o, id: h} = n;
            try {
                const p = `${i}_session_update`
                  , y = fo.get(p);
                if (y && this.isRequestOutOfSync(y, h)) {
                    this.client.logger.info(`Discarding out of sync request - ${h}`);
                    return
                }
                this.isValidUpdate(nr({
                    topic: i
                }, o)),
                await this.client.session.update(i, {
                    namespaces: o.namespaces
                }),
                await this.sendResult({
                    id: h,
                    topic: i,
                    result: !0
                }),
                this.client.events.emit("session_update", {
                    id: h,
                    topic: i,
                    params: o
                }),
                fo.set(p, h)
            } catch (p) {
                await this.sendError(h, i, p),
                this.client.logger.error(p)
            }
        }
        ,
        this.isRequestOutOfSync = (i,n)=>parseInt(n.toString().slice(0, -3)) <= parseInt(i.toString().slice(0, -3)),
        this.onSessionUpdateResponse = (i,n)=>{
            const {id: o} = n;
            ci(n) ? this.events.emit(At("session_update", o), {}) : jr(n) && this.events.emit(At("session_update", o), {
                error: n.error
            })
        }
        ,
        this.onSessionExtendRequest = async(i,n)=>{
            const {id: o} = n;
            try {
                this.isValidExtend({
                    topic: i
                }),
                await this.setExpiry(i, qr(vo)),
                await this.sendResult({
                    id: o,
                    topic: i,
                    result: !0
                }),
                this.client.events.emit("session_extend", {
                    id: o,
                    topic: i
                })
            } catch (h) {
                await this.sendError(o, i, h),
                this.client.logger.error(h)
            }
        }
        ,
        this.onSessionExtendResponse = (i,n)=>{
            const {id: o} = n;
            ci(n) ? this.events.emit(At("session_extend", o), {}) : jr(n) && this.events.emit(At("session_extend", o), {
                error: n.error
            })
        }
        ,
        this.onSessionPingRequest = async(i,n)=>{
            const {id: o} = n;
            try {
                this.isValidPing({
                    topic: i
                }),
                await this.sendResult({
                    id: o,
                    topic: i,
                    result: !0
                }),
                this.client.events.emit("session_ping", {
                    id: o,
                    topic: i
                })
            } catch (h) {
                await this.sendError(o, i, h),
                this.client.logger.error(h)
            }
        }
        ,
        this.onSessionPingResponse = (i,n)=>{
            const {id: o} = n;
            setTimeout(()=>{
                ci(n) ? this.events.emit(At("session_ping", o), {}) : jr(n) && this.events.emit(At("session_ping", o), {
                    error: n.error
                })
            }
            , 500)
        }
        ,
        this.onSessionDeleteRequest = async(i,n)=>{
            const {id: o} = n;
            try {
                this.isValidDisconnect({
                    topic: i,
                    reason: n.params
                }),
                await Promise.all([new Promise(h=>{
                    this.client.core.relayer.once(Vt.publish, async()=>{
                        h(await this.deleteSession(i))
                    }
                    )
                }
                ), this.sendResult({
                    id: o,
                    topic: i,
                    result: !0
                })]),
                this.client.events.emit("session_delete", {
                    id: o,
                    topic: i
                })
            } catch (h) {
                this.client.logger.error(h)
            }
        }
        ,
        this.onSessionRequest = async(i,n)=>{
            const {id: o, params: h} = n;
            try {
                this.isValidRequest(nr({
                    topic: i
                }, h));
                const p = ws(JSON.stringify(bs("wc_sessionRequest", h, o)))
                  , y = this.client.session.get(i)
                  , m = await this.getVerifyContext(p, y.peer.metadata)
                  , g = {
                    id: o,
                    topic: i,
                    params: h,
                    verifyContext: m
                };
                await this.setPendingSessionRequest(g),
                this.addSessionRequestToSessionRequestQueue(g),
                this.processSessionRequestQueue()
            } catch (p) {
                await this.sendError(o, i, p),
                this.client.logger.error(p)
            }
        }
        ,
        this.onSessionRequestResponse = (i,n)=>{
            const {id: o} = n;
            ci(n) ? this.events.emit(At("session_request", o), {
                result: n.result
            }) : jr(n) && this.events.emit(At("session_request", o), {
                error: n.error
            })
        }
        ,
        this.onSessionEventRequest = async(i,n)=>{
            const {id: o, params: h} = n;
            try {
                const p = `${i}_session_event_${h.event.name}`
                  , y = fo.get(p);
                if (y && this.isRequestOutOfSync(y, o)) {
                    this.client.logger.info(`Discarding out of sync request - ${o}`);
                    return
                }
                this.isValidEmit(nr({
                    topic: i
                }, h)),
                this.client.events.emit("session_event", {
                    id: o,
                    topic: i,
                    params: h
                }),
                fo.set(p, o)
            } catch (p) {
                await this.sendError(o, i, p),
                this.client.logger.error(p)
            }
        }
        ,
        this.addSessionRequestToSessionRequestQueue = i=>{
            this.sessionRequestQueue.queue.push(i)
        }
        ,
        this.cleanupAfterResponse = i=>{
            this.deletePendingSessionRequest(i.response.id, {
                message: "fulfilled",
                code: 0
            }),
            setTimeout(()=>{
                this.sessionRequestQueue.state = ai.idle,
                this.processSessionRequestQueue()
            }
            , te.toMiliseconds(this.requestQueueDelay))
        }
        ,
        this.processSessionRequestQueue = ()=>{
            if (this.sessionRequestQueue.state === ai.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const i = this.sessionRequestQueue.queue[0];
            if (!i) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = ai.active,
                this.client.events.emit("session_request", i)
            } catch (n) {
                this.client.logger.error(n)
            }
        }
        ,
        this.onPairingCreated = i=>{
            if (i.active)
                return;
            const n = this.client.proposal.getAll().find(o=>o.pairingTopic === i.topic);
            n && this.onSessionProposeRequest(i.topic, bs("wc_sessionPropose", {
                requiredNamespaces: n.requiredNamespaces,
                optionalNamespaces: n.optionalNamespaces,
                relays: n.relays,
                proposer: n.proposer,
                sessionProperties: n.sessionProperties
            }, n.id))
        }
        ,
        this.isValidConnect = async i=>{
            if (!ar(i)) {
                const {message: m} = G("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(i)}`);
                throw new Error(m)
            }
            const {pairingTopic: n, requiredNamespaces: o, optionalNamespaces: h, sessionProperties: p, relays: y} = i;
            if (xi(n) || await this.isValidPairingTopic(n),
            !iw(y)) {
                const {message: m} = G("MISSING_OR_INVALID", `connect() relays: ${y}`);
                throw new Error(m)
            }
            !xi(o) && _o(o) !== 0 && this.validateNamespaces(o, "requiredNamespaces"),
            !xi(h) && _o(h) !== 0 && this.validateNamespaces(h, "optionalNamespaces"),
            xi(p) || this.validateSessionProps(p, "sessionProperties")
        }
        ,
        this.validateNamespaces = (i,n)=>{
            const o = sw(i, "connect()", n);
            if (o)
                throw new Error(o.message)
        }
        ,
        this.isValidApprove = async i=>{
            if (!ar(i))
                throw new Error(G("MISSING_OR_INVALID", `approve() params: ${i}`).message);
            const {id: n, namespaces: o, relayProtocol: h, sessionProperties: p} = i;
            await this.isValidProposalId(n);
            const y = this.client.proposal.get(n)
              , m = cc(o, "approve()");
            if (m)
                throw new Error(m.message);
            const g = Qh(y.requiredNamespaces, o, "approve()");
            if (g)
                throw new Error(g.message);
            if (!vs(h, !0)) {
                const {message: E} = G("MISSING_OR_INVALID", `approve() relayProtocol: ${h}`);
                throw new Error(E)
            }
            xi(p) || this.validateSessionProps(p, "sessionProperties")
        }
        ,
        this.isValidReject = async i=>{
            if (!ar(i)) {
                const {message: h} = G("MISSING_OR_INVALID", `reject() params: ${i}`);
                throw new Error(h)
            }
            const {id: n, reason: o} = i;
            if (await this.isValidProposalId(n),
            !nw(o)) {
                const {message: h} = G("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(o)}`);
                throw new Error(h)
            }
        }
        ,
        this.isValidSessionSettleRequest = i=>{
            if (!ar(i)) {
                const {message: g} = G("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${i}`);
                throw new Error(g)
            }
            const {relay: n, controller: o, namespaces: h, expiry: p} = i;
            if (!ow(n)) {
                const {message: g} = G("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(g)
            }
            const y = aw(o, "onSessionSettleRequest()");
            if (y)
                throw new Error(y.message);
            const m = cc(h, "onSessionSettleRequest()");
            if (m)
                throw new Error(m.message);
            if (Ii(p)) {
                const {message: g} = G("EXPIRED", "onSessionSettleRequest()");
                throw new Error(g)
            }
        }
        ,
        this.isValidUpdate = async i=>{
            if (!ar(i)) {
                const {message: m} = G("MISSING_OR_INVALID", `update() params: ${i}`);
                throw new Error(m)
            }
            const {topic: n, namespaces: o} = i;
            await this.isValidSessionTopic(n);
            const h = this.client.session.get(n)
              , p = cc(o, "update()");
            if (p)
                throw new Error(p.message);
            const y = Qh(h.requiredNamespaces, o, "update()");
            if (y)
                throw new Error(y.message)
        }
        ,
        this.isValidExtend = async i=>{
            if (!ar(i)) {
                const {message: o} = G("MISSING_OR_INVALID", `extend() params: ${i}`);
                throw new Error(o)
            }
            const {topic: n} = i;
            await this.isValidSessionTopic(n)
        }
        ,
        this.isValidRequest = async i=>{
            if (!ar(i)) {
                const {message: m} = G("MISSING_OR_INVALID", `request() params: ${i}`);
                throw new Error(m)
            }
            const {topic: n, request: o, chainId: h, expiry: p} = i;
            await this.isValidSessionTopic(n);
            const {namespaces: y} = this.client.session.get(n);
            if (!Yh(y, h)) {
                const {message: m} = G("MISSING_OR_INVALID", `request() chainId: ${h}`);
                throw new Error(m)
            }
            if (!cw(o)) {
                const {message: m} = G("MISSING_OR_INVALID", `request() ${JSON.stringify(o)}`);
                throw new Error(m)
            }
            if (!uw(y, h, o.method)) {
                const {message: m} = G("MISSING_OR_INVALID", `request() method: ${o.method}`);
                throw new Error(m)
            }
            if (p && !hw(p, wc)) {
                const {message: m} = G("MISSING_OR_INVALID", `request() expiry: ${p}. Expiry must be a number (in seconds) between ${wc.min} and ${wc.max}`);
                throw new Error(m)
            }
        }
        ,
        this.isValidRespond = async i=>{
            var n;
            if (!ar(i)) {
                const {message: p} = G("MISSING_OR_INVALID", `respond() params: ${i}`);
                throw new Error(p)
            }
            const {topic: o, response: h} = i;
            try {
                await this.isValidSessionTopic(o)
            } catch (p) {
                throw (n = i == null ? void 0 : i.response) != null && n.id && this.cleanupAfterResponse(i),
                p
            }
            if (!lw(h)) {
                const {message: p} = G("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(h)}`);
                throw new Error(p)
            }
        }
        ,
        this.isValidPing = async i=>{
            if (!ar(i)) {
                const {message: o} = G("MISSING_OR_INVALID", `ping() params: ${i}`);
                throw new Error(o)
            }
            const {topic: n} = i;
            await this.isValidSessionOrPairingTopic(n)
        }
        ,
        this.isValidEmit = async i=>{
            if (!ar(i)) {
                const {message: y} = G("MISSING_OR_INVALID", `emit() params: ${i}`);
                throw new Error(y)
            }
            const {topic: n, event: o, chainId: h} = i;
            await this.isValidSessionTopic(n);
            const {namespaces: p} = this.client.session.get(n);
            if (!Yh(p, h)) {
                const {message: y} = G("MISSING_OR_INVALID", `emit() chainId: ${h}`);
                throw new Error(y)
            }
            if (!fw(o)) {
                const {message: y} = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(y)
            }
            if (!pw(p, h, o.name)) {
                const {message: y} = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(y)
            }
        }
        ,
        this.isValidDisconnect = async i=>{
            if (!ar(i)) {
                const {message: o} = G("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                throw new Error(o)
            }
            const {topic: n} = i;
            await this.isValidSessionOrPairingTopic(n)
        }
        ,
        this.getVerifyContext = async(i,n)=>{
            const o = {
                verified: {
                    verifyUrl: n.verifyUrl || ms,
                    validation: "UNKNOWN",
                    origin: n.url || ""
                }
            };
            try {
                const h = await this.client.core.verify.resolve({
                    attestationId: i,
                    verifyUrl: n.verifyUrl
                });
                h && (o.verified.origin = h.origin,
                o.verified.isScam = h.isScam,
                o.verified.validation = h.origin === new URL(n.url).origin ? "VALID" : "INVALID")
            } catch (h) {
                this.client.logger.info(h)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(o)}`),
            o
        }
        ,
        this.validateSessionProps = (i,n)=>{
            Object.values(i).forEach(o=>{
                if (!vs(o, !1)) {
                    const {message: h} = G("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(o)}`);
                    throw new Error(h)
                }
            }
            )
        }
    }
    async isInitialized() {
        if (!this.initialized) {
            const {message: t} = G("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(Vt.message, async t=>{
            const {topic: i, message: n} = t;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
                return;
            const o = await this.client.core.crypto.decode(i, n);
            try {
                Hc(o) ? (this.client.core.history.set(i, o),
                this.onRelayEventRequest({
                    topic: i,
                    payload: o
                })) : Do(o) ? (await this.client.core.history.resolve(o),
                await this.onRelayEventResponse({
                    topic: i,
                    payload: o
                }),
                this.client.core.history.delete(i, o.id)) : this.onRelayEventUnknownPayload({
                    topic: i,
                    payload: o
                })
            } catch (h) {
                this.client.logger.error(h)
            }
        }
        )
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(Pr.expired, async t=>{
            const {topic: i, id: n} = cf(t.target);
            if (n && this.client.pendingRequest.keys.includes(n))
                return await this.deletePendingSessionRequest(n, G("EXPIRED"), !0);
            i ? this.client.session.keys.includes(i) && (await this.deleteSession(i, !0),
            this.client.events.emit("session_expire", {
                topic: i
            })) : n && (await this.deleteProposal(n, !0),
            this.client.events.emit("proposal_expire", {
                id: n
            }))
        }
        )
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(Qs.create, t=>this.onPairingCreated(t))
    }
    isValidPairingTopic(t) {
        if (!vs(t, !1)) {
            const {message: i} = G("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
            throw new Error(i)
        }
        if (!this.client.core.pairing.pairings.keys.includes(t)) {
            const {message: i} = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
            throw new Error(i)
        }
        if (Ii(this.client.core.pairing.pairings.get(t).expiry)) {
            const {message: i} = G("EXPIRED", `pairing topic: ${t}`);
            throw new Error(i)
        }
    }
    async isValidSessionTopic(t) {
        if (!vs(t, !1)) {
            const {message: i} = G("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
            throw new Error(i)
        }
        if (!this.client.session.keys.includes(t)) {
            const {message: i} = G("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
            throw new Error(i)
        }
        if (Ii(this.client.session.get(t).expiry)) {
            await this.deleteSession(t);
            const {message: i} = G("EXPIRED", `session topic: ${t}`);
            throw new Error(i)
        }
    }
    async isValidSessionOrPairingTopic(t) {
        if (this.client.session.keys.includes(t))
            await this.isValidSessionTopic(t);
        else if (this.client.core.pairing.pairings.keys.includes(t))
            this.isValidPairingTopic(t);
        else if (vs(t, !1)) {
            const {message: i} = G("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
            throw new Error(i)
        } else {
            const {message: i} = G("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
            throw new Error(i)
        }
    }
    async isValidProposalId(t) {
        if (!dw(t)) {
            const {message: i} = G("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
            throw new Error(i)
        }
        if (!this.client.proposal.keys.includes(t)) {
            const {message: i} = G("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
            throw new Error(i)
        }
        if (Ii(this.client.proposal.get(t).expiry)) {
            await this.deleteProposal(t);
            const {message: i} = G("EXPIRED", `proposal id: ${t}`);
            throw new Error(i)
        }
    }
}
class lI extends jo {
    constructor(t, i) {
        super(t, i, eI, Bc),
        this.core = t,
        this.logger = i
    }
}
class fI extends jo {
    constructor(t, i) {
        super(t, i, tI, Bc),
        this.core = t,
        this.logger = i
    }
}
class pI extends jo {
    constructor(t, i) {
        super(t, i, iI, Bc, n=>n.id),
        this.core = t,
        this.logger = i
    }
}
let dI = class Jf extends qb {
    constructor(t) {
        super(t),
        this.protocol = Ff,
        this.version = Vf,
        this.name = mc.name,
        this.events = new Sr.EventEmitter,
        this.on = (n,o)=>this.events.on(n, o),
        this.once = (n,o)=>this.events.once(n, o),
        this.off = (n,o)=>this.events.off(n, o),
        this.removeListener = (n,o)=>this.events.removeListener(n, o),
        this.removeAllListeners = n=>this.events.removeAllListeners(n),
        this.connect = async n=>{
            try {
                return await this.engine.connect(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.pair = async n=>{
            try {
                return await this.engine.pair(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.approve = async n=>{
            try {
                return await this.engine.approve(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.reject = async n=>{
            try {
                return await this.engine.reject(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.update = async n=>{
            try {
                return await this.engine.update(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.extend = async n=>{
            try {
                return await this.engine.extend(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.request = async n=>{
            try {
                return await this.engine.request(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.respond = async n=>{
            try {
                return await this.engine.respond(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.ping = async n=>{
            try {
                return await this.engine.ping(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.emit = async n=>{
            try {
                return await this.engine.emit(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.disconnect = async n=>{
            try {
                return await this.engine.disconnect(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.find = n=>{
            try {
                return this.engine.find(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.getPendingSessionRequests = ()=>{
            try {
                return this.engine.getPendingSessionRequests()
            } catch (n) {
                throw this.logger.error(n.message),
                n
            }
        }
        ,
        this.name = (t == null ? void 0 : t.name) || mc.name,
        this.metadata = (t == null ? void 0 : t.metadata) || Z0();
        const i = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : To(Co({
            level: (t == null ? void 0 : t.logger) || mc.logger
        }));
        this.core = (t == null ? void 0 : t.core) || new XE(t),
        this.logger = ur(i, this.name),
        this.session = new fI(this.core,this.logger),
        this.proposal = new lI(this.core,this.logger),
        this.pendingRequest = new pI(this.core,this.logger),
        this.engine = new hI(this)
    }
    static async init(t) {
        const i = new Jf(t);
        return await i.initialize(),
        i
    }
    get context() {
        return cr(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(),
            await this.session.init(),
            await this.proposal.init(),
            await this.pendingRequest.init(),
            await this.engine.init(),
            this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }),
            this.logger.info("SignClient Initialization Success")
        } catch (t) {
            throw this.logger.info("SignClient Initialization Failure"),
            this.logger.error(t.message),
            t
        }
    }
}
;
var Cc = {
    exports: {}
};
(function(a, t) {
    var i = typeof self < "u" ? self : Lr
      , n = function() {
        function h() {
            this.fetch = !1,
            this.DOMException = i.DOMException
        }
        return h.prototype = i,
        new h
    }();
    (function(h) {
        (function(p) {
            var y = {
                searchParams: "URLSearchParams"in h,
                iterable: "Symbol"in h && "iterator"in Symbol,
                blob: "FileReader"in h && "Blob"in h && function() {
                    try {
                        return new Blob,
                        !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData"in h,
                arrayBuffer: "ArrayBuffer"in h
            };
            function m(b) {
                return b && DataView.prototype.isPrototypeOf(b)
            }
            if (y.arrayBuffer)
                var g = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , E = ArrayBuffer.isView || function(b) {
                    return b && g.indexOf(Object.prototype.toString.call(b)) > -1
                }
                ;
            function O(b) {
                if (typeof b != "string" && (b = String(b)),
                /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b))
                    throw new TypeError("Invalid character in header field name");
                return b.toLowerCase()
            }
            function N(b) {
                return typeof b != "string" && (b = String(b)),
                b
            }
            function j(b) {
                var S = {
                    next: function() {
                        var J = b.shift();
                        return {
                            done: J === void 0,
                            value: J
                        }
                    }
                };
                return y.iterable && (S[Symbol.iterator] = function() {
                    return S
                }
                ),
                S
            }
            function T(b) {
                this.map = {},
                b instanceof T ? b.forEach(function(S, J) {
                    this.append(J, S)
                }, this) : Array.isArray(b) ? b.forEach(function(S) {
                    this.append(S[0], S[1])
                }, this) : b && Object.getOwnPropertyNames(b).forEach(function(S) {
                    this.append(S, b[S])
                }, this)
            }
            T.prototype.append = function(b, S) {
                b = O(b),
                S = N(S);
                var J = this.map[b];
                this.map[b] = J ? J + ", " + S : S
            }
            ,
            T.prototype.delete = function(b) {
                delete this.map[O(b)]
            }
            ,
            T.prototype.get = function(b) {
                return b = O(b),
                this.has(b) ? this.map[b] : null
            }
            ,
            T.prototype.has = function(b) {
                return this.map.hasOwnProperty(O(b))
            }
            ,
            T.prototype.set = function(b, S) {
                this.map[O(b)] = N(S)
            }
            ,
            T.prototype.forEach = function(b, S) {
                for (var J in this.map)
                    this.map.hasOwnProperty(J) && b.call(S, this.map[J], J, this)
            }
            ,
            T.prototype.keys = function() {
                var b = [];
                return this.forEach(function(S, J) {
                    b.push(J)
                }),
                j(b)
            }
            ,
            T.prototype.values = function() {
                var b = [];
                return this.forEach(function(S) {
                    b.push(S)
                }),
                j(b)
            }
            ,
            T.prototype.entries = function() {
                var b = [];
                return this.forEach(function(S, J) {
                    b.push([J, S])
                }),
                j(b)
            }
            ,
            y.iterable && (T.prototype[Symbol.iterator] = T.prototype.entries);
            function Y(b) {
                if (b.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                b.bodyUsed = !0
            }
            function re(b) {
                return new Promise(function(S, J) {
                    b.onload = function() {
                        S(b.result)
                    }
                    ,
                    b.onerror = function() {
                        J(b.error)
                    }
                }
                )
            }
            function oe(b) {
                var S = new FileReader
                  , J = re(S);
                return S.readAsArrayBuffer(b),
                J
            }
            function ce(b) {
                var S = new FileReader
                  , J = re(S);
                return S.readAsText(b),
                J
            }
            function ae(b) {
                for (var S = new Uint8Array(b), J = new Array(S.length), le = 0; le < S.length; le++)
                    J[le] = String.fromCharCode(S[le]);
                return J.join("")
            }
            function ee(b) {
                if (b.slice)
                    return b.slice(0);
                var S = new Uint8Array(b.byteLength);
                return S.set(new Uint8Array(b)),
                S.buffer
            }
            function he() {
                return this.bodyUsed = !1,
                this._initBody = function(b) {
                    this._bodyInit = b,
                    b ? typeof b == "string" ? this._bodyText = b : y.blob && Blob.prototype.isPrototypeOf(b) ? this._bodyBlob = b : y.formData && FormData.prototype.isPrototypeOf(b) ? this._bodyFormData = b : y.searchParams && URLSearchParams.prototype.isPrototypeOf(b) ? this._bodyText = b.toString() : y.arrayBuffer && y.blob && m(b) ? (this._bodyArrayBuffer = ee(b.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : y.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(b) || E(b)) ? this._bodyArrayBuffer = ee(b) : this._bodyText = b = Object.prototype.toString.call(b) : this._bodyText = "",
                    this.headers.get("content-type") || (typeof b == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : y.searchParams && URLSearchParams.prototype.isPrototypeOf(b) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                y.blob && (this.blob = function() {
                    var b = Y(this);
                    if (b)
                        return b;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? Y(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(oe)
                }
                ),
                this.text = function() {
                    var b = Y(this);
                    if (b)
                        return b;
                    if (this._bodyBlob)
                        return ce(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(ae(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                y.formData && (this.formData = function() {
                    return this.text().then(wt)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            var pe = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function Q(b) {
                var S = b.toUpperCase();
                return pe.indexOf(S) > -1 ? S : b
            }
            function ve(b, S) {
                S = S || {};
                var J = S.body;
                if (b instanceof ve) {
                    if (b.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = b.url,
                    this.credentials = b.credentials,
                    S.headers || (this.headers = new T(b.headers)),
                    this.method = b.method,
                    this.mode = b.mode,
                    this.signal = b.signal,
                    !J && b._bodyInit != null && (J = b._bodyInit,
                    b.bodyUsed = !0)
                } else
                    this.url = String(b);
                if (this.credentials = S.credentials || this.credentials || "same-origin",
                (S.headers || !this.headers) && (this.headers = new T(S.headers)),
                this.method = Q(S.method || this.method || "GET"),
                this.mode = S.mode || this.mode || null,
                this.signal = S.signal || this.signal,
                this.referrer = null,
                (this.method === "GET" || this.method === "HEAD") && J)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(J)
            }
            ve.prototype.clone = function() {
                return new ve(this,{
                    body: this._bodyInit
                })
            }
            ;
            function wt(b) {
                var S = new FormData;
                return b.trim().split("&").forEach(function(J) {
                    if (J) {
                        var le = J.split("=")
                          , k = le.shift().replace(/\+/g, " ")
                          , H = le.join("=").replace(/\+/g, " ");
                        S.append(decodeURIComponent(k), decodeURIComponent(H))
                    }
                }),
                S
            }
            function st(b) {
                var S = new T
                  , J = b.replace(/\r?\n[\t ]+/g, " ");
                return J.split(/\r?\n/).forEach(function(le) {
                    var k = le.split(":")
                      , H = k.shift().trim();
                    if (H) {
                        var K = k.join(":").trim();
                        S.append(H, K)
                    }
                }),
                S
            }
            he.call(ve.prototype);
            function Ke(b, S) {
                S || (S = {}),
                this.type = "default",
                this.status = S.status === void 0 ? 200 : S.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = "statusText"in S ? S.statusText : "OK",
                this.headers = new T(S.headers),
                this.url = S.url || "",
                this._initBody(b)
            }
            he.call(Ke.prototype),
            Ke.prototype.clone = function() {
                return new Ke(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new T(this.headers),
                    url: this.url
                })
            }
            ,
            Ke.error = function() {
                var b = new Ke(null,{
                    status: 0,
                    statusText: ""
                });
                return b.type = "error",
                b
            }
            ;
            var Lt = [301, 302, 303, 307, 308];
            Ke.redirect = function(b, S) {
                if (Lt.indexOf(S) === -1)
                    throw new RangeError("Invalid status code");
                return new Ke(null,{
                    status: S,
                    headers: {
                        location: b
                    }
                })
            }
            ,
            p.DOMException = h.DOMException;
            try {
                new p.DOMException
            } catch {
                p.DOMException = function(S, J) {
                    this.message = S,
                    this.name = J;
                    var le = Error(S);
                    this.stack = le.stack
                }
                ,
                p.DOMException.prototype = Object.create(Error.prototype),
                p.DOMException.prototype.constructor = p.DOMException
            }
            function Mt(b, S) {
                return new Promise(function(J, le) {
                    var k = new ve(b,S);
                    if (k.signal && k.signal.aborted)
                        return le(new p.DOMException("Aborted","AbortError"));
                    var H = new XMLHttpRequest;
                    function K() {
                        H.abort()
                    }
                    H.onload = function() {
                        var B = {
                            status: H.status,
                            statusText: H.statusText,
                            headers: st(H.getAllResponseHeaders() || "")
                        };
                        B.url = "responseURL"in H ? H.responseURL : B.headers.get("X-Request-URL");
                        var Xe = "response"in H ? H.response : H.responseText;
                        J(new Ke(Xe,B))
                    }
                    ,
                    H.onerror = function() {
                        le(new TypeError("Network request failed"))
                    }
                    ,
                    H.ontimeout = function() {
                        le(new TypeError("Network request failed"))
                    }
                    ,
                    H.onabort = function() {
                        le(new p.DOMException("Aborted","AbortError"))
                    }
                    ,
                    H.open(k.method, k.url, !0),
                    k.credentials === "include" ? H.withCredentials = !0 : k.credentials === "omit" && (H.withCredentials = !1),
                    "responseType"in H && y.blob && (H.responseType = "blob"),
                    k.headers.forEach(function(B, Xe) {
                        H.setRequestHeader(Xe, B)
                    }),
                    k.signal && (k.signal.addEventListener("abort", K),
                    H.onreadystatechange = function() {
                        H.readyState === 4 && k.signal.removeEventListener("abort", K)
                    }
                    ),
                    H.send(typeof k._bodyInit > "u" ? null : k._bodyInit)
                }
                )
            }
            return Mt.polyfill = !0,
            h.fetch || (h.fetch = Mt,
            h.Headers = T,
            h.Request = ve,
            h.Response = Ke),
            p.Headers = T,
            p.Request = ve,
            p.Response = Ke,
            p.fetch = Mt,
            Object.defineProperty(p, "__esModule", {
                value: !0
            }),
            p
        }
        )({})
    }
    )(n),
    n.fetch.ponyfill = !0,
    delete n.fetch.polyfill;
    var o = n;
    t = o.fetch,
    t.default = o.fetch,
    t.fetch = o.fetch,
    t.Headers = o.Headers,
    t.Request = o.Request,
    t.Response = o.Response,
    a.exports = t
}
)(Cc, Cc.exports);
var gI = Cc.exports;
const Hl = Oo(gI);
var yI = Object.defineProperty
  , vI = Object.defineProperties
  , mI = Object.getOwnPropertyDescriptors
  , kl = Object.getOwnPropertySymbols
  , wI = Object.prototype.hasOwnProperty
  , bI = Object.prototype.propertyIsEnumerable
  , Kl = (a,t,i)=>t in a ? yI(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , Bl = (a,t)=>{
    for (var i in t || (t = {}))
        wI.call(t, i) && Kl(a, i, t[i]);
    if (kl)
        for (var i of kl(t))
            bI.call(t, i) && Kl(a, i, t[i]);
    return a
}
  , Fl = (a,t)=>vI(a, mI(t));
const _I = {
    Accept: "application/json",
    "Content-Type": "application/json"
}
  , EI = "POST"
  , Vl = {
    headers: _I,
    method: EI
}
  , Gl = 10;
let Ri = class {
    constructor(t, i=!1) {
        if (this.url = t,
        this.disableProviderPing = i,
        this.events = new Sr.EventEmitter,
        this.isAvailable = !1,
        this.registering = !1,
        !gl(t))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        this.url = t,
        this.disableProviderPing = i
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(t, i) {
        this.events.on(t, i)
    }
    once(t, i) {
        this.events.once(t, i)
    }
    off(t, i) {
        this.events.off(t, i)
    }
    removeListener(t, i) {
        this.events.removeListener(t, i)
    }
    async open(t=this.url) {
        await this.register(t)
    }
    async close() {
        if (!this.isAvailable)
            throw new Error("Connection already closed");
        this.onClose()
    }
    async send(t) {
        this.isAvailable || await this.register();
        try {
            const i = Bi(t)
              , n = await (await Hl(this.url, Fl(Bl({}, Vl), {
                body: i
            }))).json();
            this.onPayload({
                data: n
            })
        } catch (i) {
            this.onError(t.id, i)
        }
    }
    async register(t=this.url) {
        if (!gl(t))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        if (this.registering) {
            const i = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= i || this.events.listenerCount("open") >= i) && this.events.setMaxListeners(i + 1),
            new Promise((n,o)=>{
                this.events.once("register_error", h=>{
                    this.resetMaxListeners(),
                    o(h)
                }
                ),
                this.events.once("open", ()=>{
                    if (this.resetMaxListeners(),
                    typeof this.isAvailable > "u")
                        return o(new Error("HTTP connection is missing or invalid"));
                    n()
                }
                )
            }
            )
        }
        this.url = t,
        this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const i = Bi({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await Hl(t, Fl(Bl({}, Vl), {
                    body: i
                }))
            }
            this.onOpen()
        } catch (i) {
            const n = this.parseError(i);
            throw this.events.emit("register_error", n),
            this.onClose(),
            n
        }
    }
    onOpen() {
        this.isAvailable = !0,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1,
        this.registering = !1,
        this.events.emit("close")
    }
    onPayload(t) {
        if (typeof t.data > "u")
            return;
        const i = typeof t.data == "string" ? nn(t.data) : t.data;
        this.events.emit("payload", i)
    }
    onError(t, i) {
        const n = this.parseError(i)
          , o = n.message || n.toString()
          , h = No(t, o);
        this.events.emit("payload", h)
    }
    parseError(t, i=this.url) {
        return Sf(t, i, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Gl && this.events.setMaxListeners(Gl)
    }
}
;
const Wl = "error"
  , II = "wss://relay.walletconnect.com"
  , xI = "wc"
  , PI = "universal_provider"
  , Jl = `${xI}@2:${PI}:`
  , SI = "https://rpc.walletconnect.com/v1/"
  , li = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
var Ws = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof ui < "u" ? ui : typeof self < "u" ? self : {}
  , $c = {
    exports: {}
};
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(a, t) {
    (function() {
        var i, n = "4.17.21", o = 200, h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", p = "Expected a function", y = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", g = 500, E = "__lodash_placeholder__", O = 1, N = 2, j = 4, T = 1, Y = 2, re = 1, oe = 2, ce = 4, ae = 8, ee = 16, he = 32, pe = 64, Q = 128, ve = 256, wt = 512, st = 30, Ke = "...", Lt = 800, Mt = 16, b = 1, S = 2, J = 3, le = 1 / 0, k = 9007199254740991, H = 17976931348623157e292, K = NaN, B = 4294967295, Xe = B - 1, nt = B >>> 1, Oi = [["ary", Q], ["bind", re], ["bindKey", oe], ["curry", ae], ["curryRight", ee], ["flip", wt], ["partial", he], ["partialRight", pe], ["rearg", ve]], Ee = "[object Arguments]", Rr = "[object Array]", D = "[object AsyncFunction]", $ = "[object Boolean]", A = "[object Date]", u = "[object DOMException]", I = "[object Error]", Z = "[object Function]", ue = "[object GeneratorFunction]", me = "[object Map]", Re = "[object Number]", Ae = "[object Null]", Ie = "[object Object]", bt = "[object Promise]", dt = "[object Proxy]", et = "[object RegExp]", Ce = "[object Set]", Be = "[object String]", Fe = "[object Symbol]", tt = "[object Undefined]", qe = "[object WeakMap]", Ve = "[object WeakSet]", Oe = "[object ArrayBuffer]", Le = "[object DataView]", ot = "[object Float32Array]", Ne = "[object Float64Array]", _t = "[object Int8Array]", Tt = "[object Int16Array]", zt = "[object Int32Array]", Ut = "[object Uint8Array]", Nt = "[object Uint8ClampedArray]", Gt = "[object Uint16Array]", Xt = "[object Uint32Array]", Mr = /\b__p \+= '';/g, Wt = /\b(__p \+=) '' \+/g, Vr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fi = /&(?:amp|lt|gt|quot|#39);/g, Ai = /[&<>"']/g, at = RegExp(fi.source), Je = RegExp(Ai.source), ct = /<%-([\s\S]+?)%>/g, ut = /<%([\s\S]+?)%>/g, rt = /<%=([\s\S]+?)%>/g, Qe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Et = /^\w*$/, It = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ht = /[\\^$.*+?()[\]{}|]/g, xt = RegExp(ht.source), lt = /^\s+/, gt = /\s/, ft = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ke = /\{\n\/\* \[wrapped with (.+)\] \*/, Pt = /,? & /, St = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Lo = /[()=,{}\[\]\/\s]/, Mo = /\\(\\)?/g, zo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, yr = /\w*$/, Uo = /^[-+]0x[0-9a-f]+$/i, Ho = /^0b[01]+$/i, ko = /^\[object .+?Constructor\]$/, Ko = /^0o[0-7]+$/i, Bo = /^(?:0|[1-9]\d*)$/, Gr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Wi = /($^)/, Fo = /['\n\r\u2028\u2029\\]/g, Ji = "\\ud800-\\udfff", Vo = "\\u0300-\\u036f", Go = "\\ufe20-\\ufe2f", Qi = "\\u20d0-\\u20ff", cn = Vo + Go + Qi, un = "\\u2700-\\u27bf", Or = "a-z\\xdf-\\xf6\\xf8-\\xff", Wo = "\\xac\\xb1\\xd7\\xf7", Jo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Qo = "\\u2000-\\u206f", Yo = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", hn = "A-Z\\xc0-\\xd6\\xd8-\\xde", ln = "\\ufe0e\\ufe0f", Ti = Wo + Jo + Qo + Yo, Is = "['’]", Ci = "[" + Ji + "]", xs = "[" + Ti + "]", $i = "[" + cn + "]", fn = "\\d+", Zo = "[" + un + "]", pn = "[" + Or + "]", dn = "[^" + Ji + Ti + fn + un + Or + hn + "]", Yi = "\\ud83c[\\udffb-\\udfff]", Xo = "(?:" + $i + "|" + Yi + ")", gn = "[^" + Ji + "]", Zi = "(?:\\ud83c[\\udde6-\\uddff]){2}", pi = "[\\ud800-\\udbff][\\udc00-\\udfff]", hr = "[" + hn + "]", yn = "\\u200d", vn = "(?:" + pn + "|" + dn + ")", zr = "(?:" + hr + "|" + dn + ")", mn = "(?:" + Is + "(?:d|ll|m|re|s|t|ve))?", wn = "(?:" + Is + "(?:D|LL|M|RE|S|T|VE))?", bn = Xo + "?", _n = "[" + ln + "]?", ea = "(?:" + yn + "(?:" + [gn, Zi, pi].join("|") + ")" + _n + bn + ")*", Wr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", En = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", In = _n + bn + ea, Xi = "(?:" + [Zo, Zi, pi].join("|") + ")" + In, ta = "(?:" + [gn + $i + "?", $i, Zi, pi, Ci].join("|") + ")", Ps = RegExp(Is, "g"), ra = RegExp($i, "g"), es = RegExp(Yi + "(?=" + Yi + ")|" + ta + In, "g"), xn = RegExp([hr + "?" + pn + "+" + mn + "(?=" + [xs, hr, "$"].join("|") + ")", zr + "+" + wn + "(?=" + [xs, hr + vn, "$"].join("|") + ")", hr + "?" + vn + "+" + mn, hr + "+" + wn, En, Wr, fn, Xi].join("|"), "g"), Pn = RegExp("[" + yn + Ji + cn + ln + "]"), Ni = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Sn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], ia = -1, Me = {};
        Me[ot] = Me[Ne] = Me[_t] = Me[Tt] = Me[zt] = Me[Ut] = Me[Nt] = Me[Gt] = Me[Xt] = !0,
        Me[Ee] = Me[Rr] = Me[Oe] = Me[$] = Me[Le] = Me[A] = Me[I] = Me[Z] = Me[me] = Me[Re] = Me[Ie] = Me[et] = Me[Ce] = Me[Be] = Me[qe] = !1;
        var je = {};
        je[Ee] = je[Rr] = je[Oe] = je[Le] = je[$] = je[A] = je[ot] = je[Ne] = je[_t] = je[Tt] = je[zt] = je[me] = je[Re] = je[Ie] = je[et] = je[Ce] = je[Be] = je[Fe] = je[Ut] = je[Nt] = je[Gt] = je[Xt] = !0,
        je[I] = je[Z] = je[qe] = !1;
        var v = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s"
        }
          , x = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , z = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
          , V = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , ze = parseFloat
          , de = parseInt
          , Ge = typeof Ws == "object" && Ws && Ws.Object === Object && Ws
          , Rt = typeof self == "object" && self && self.Object === Object && self
          , Pe = Ge || Rt || Function("return this")()
          , Ue = t && !t.nodeType && t
          , yt = Ue && !0 && a && !a.nodeType && a
          , er = yt && yt.exports === Ue
          , Ot = er && Ge.process
          , We = function() {
            try {
                var P = yt && yt.require && yt.require("util").types;
                return P || Ot && Ot.binding && Ot.binding("util")
            } catch {}
        }()
          , Jt = We && We.isArrayBuffer
          , Ar = We && We.isDate
          , vr = We && We.isMap
          , Ur = We && We.isRegExp
          , Ss = We && We.isSet
          , Di = We && We.isTypedArray;
        function Dt(P, q, C) {
            switch (C.length) {
            case 0:
                return P.call(q);
            case 1:
                return P.call(q, C[0]);
            case 2:
                return P.call(q, C[0], C[1]);
            case 3:
                return P.call(q, C[0], C[1], C[2])
            }
            return P.apply(q, C)
        }
        function Zf(P, q, C, W) {
            for (var fe = -1, Te = P == null ? 0 : P.length; ++fe < Te; ) {
                var Ct = P[fe];
                q(W, Ct, C(Ct), P)
            }
            return W
        }
        function mr(P, q) {
            for (var C = -1, W = P == null ? 0 : P.length; ++C < W && q(P[C], C, P) !== !1; )
                ;
            return P
        }
        function Xf(P, q) {
            for (var C = P == null ? 0 : P.length; C-- && q(P[C], C, P) !== !1; )
                ;
            return P
        }
        function Gc(P, q) {
            for (var C = -1, W = P == null ? 0 : P.length; ++C < W; )
                if (!q(P[C], C, P))
                    return !1;
            return !0
        }
        function di(P, q) {
            for (var C = -1, W = P == null ? 0 : P.length, fe = 0, Te = []; ++C < W; ) {
                var Ct = P[C];
                q(Ct, C, P) && (Te[fe++] = Ct)
            }
            return Te
        }
        function Rn(P, q) {
            var C = P == null ? 0 : P.length;
            return !!C && ts(P, q, 0) > -1
        }
        function sa(P, q, C) {
            for (var W = -1, fe = P == null ? 0 : P.length; ++W < fe; )
                if (C(q, P[W]))
                    return !0;
            return !1
        }
        function Ye(P, q) {
            for (var C = -1, W = P == null ? 0 : P.length, fe = Array(W); ++C < W; )
                fe[C] = q(P[C], C, P);
            return fe
        }
        function gi(P, q) {
            for (var C = -1, W = q.length, fe = P.length; ++C < W; )
                P[fe + C] = q[C];
            return P
        }
        function na(P, q, C, W) {
            var fe = -1
              , Te = P == null ? 0 : P.length;
            for (W && Te && (C = P[++fe]); ++fe < Te; )
                C = q(C, P[fe], fe, P);
            return C
        }
        function ep(P, q, C, W) {
            var fe = P == null ? 0 : P.length;
            for (W && fe && (C = P[--fe]); fe--; )
                C = q(C, P[fe], fe, P);
            return C
        }
        function oa(P, q) {
            for (var C = -1, W = P == null ? 0 : P.length; ++C < W; )
                if (q(P[C], C, P))
                    return !0;
            return !1
        }
        var tp = aa("length");
        function rp(P) {
            return P.split("")
        }
        function ip(P) {
            return P.match(St) || []
        }
        function Wc(P, q, C) {
            var W;
            return C(P, function(fe, Te, Ct) {
                if (q(fe, Te, Ct))
                    return W = Te,
                    !1
            }),
            W
        }
        function On(P, q, C, W) {
            for (var fe = P.length, Te = C + (W ? 1 : -1); W ? Te-- : ++Te < fe; )
                if (q(P[Te], Te, P))
                    return Te;
            return -1
        }
        function ts(P, q, C) {
            return q === q ? gp(P, q, C) : On(P, Jc, C)
        }
        function sp(P, q, C, W) {
            for (var fe = C - 1, Te = P.length; ++fe < Te; )
                if (W(P[fe], q))
                    return fe;
            return -1
        }
        function Jc(P) {
            return P !== P
        }
        function Qc(P, q) {
            var C = P == null ? 0 : P.length;
            return C ? ua(P, q) / C : K
        }
        function aa(P) {
            return function(q) {
                return q == null ? i : q[P]
            }
        }
        function ca(P) {
            return function(q) {
                return P == null ? i : P[q]
            }
        }
        function Yc(P, q, C, W, fe) {
            return fe(P, function(Te, Ct, He) {
                C = W ? (W = !1,
                Te) : q(C, Te, Ct, He)
            }),
            C
        }
        function np(P, q) {
            var C = P.length;
            for (P.sort(q); C--; )
                P[C] = P[C].value;
            return P
        }
        function ua(P, q) {
            for (var C, W = -1, fe = P.length; ++W < fe; ) {
                var Te = q(P[W]);
                Te !== i && (C = C === i ? Te : C + Te)
            }
            return C
        }
        function ha(P, q) {
            for (var C = -1, W = Array(P); ++C < P; )
                W[C] = q(C);
            return W
        }
        function op(P, q) {
            return Ye(q, function(C) {
                return [C, P[C]]
            })
        }
        function Zc(P) {
            return P && P.slice(0, ru(P) + 1).replace(lt, "")
        }
        function lr(P) {
            return function(q) {
                return P(q)
            }
        }
        function la(P, q) {
            return Ye(q, function(C) {
                return P[C]
            })
        }
        function Rs(P, q) {
            return P.has(q)
        }
        function Xc(P, q) {
            for (var C = -1, W = P.length; ++C < W && ts(q, P[C], 0) > -1; )
                ;
            return C
        }
        function eu(P, q) {
            for (var C = P.length; C-- && ts(q, P[C], 0) > -1; )
                ;
            return C
        }
        function ap(P, q) {
            for (var C = P.length, W = 0; C--; )
                P[C] === q && ++W;
            return W
        }
        var cp = ca(v)
          , up = ca(x);
        function hp(P) {
            return "\\" + V[P]
        }
        function lp(P, q) {
            return P == null ? i : P[q]
        }
        function rs(P) {
            return Pn.test(P)
        }
        function fp(P) {
            return Ni.test(P)
        }
        function pp(P) {
            for (var q, C = []; !(q = P.next()).done; )
                C.push(q.value);
            return C
        }
        function fa(P) {
            var q = -1
              , C = Array(P.size);
            return P.forEach(function(W, fe) {
                C[++q] = [fe, W]
            }),
            C
        }
        function tu(P, q) {
            return function(C) {
                return P(q(C))
            }
        }
        function yi(P, q) {
            for (var C = -1, W = P.length, fe = 0, Te = []; ++C < W; ) {
                var Ct = P[C];
                (Ct === q || Ct === E) && (P[C] = E,
                Te[fe++] = C)
            }
            return Te
        }
        function An(P) {
            var q = -1
              , C = Array(P.size);
            return P.forEach(function(W) {
                C[++q] = W
            }),
            C
        }
        function dp(P) {
            var q = -1
              , C = Array(P.size);
            return P.forEach(function(W) {
                C[++q] = [W, W]
            }),
            C
        }
        function gp(P, q, C) {
            for (var W = C - 1, fe = P.length; ++W < fe; )
                if (P[W] === q)
                    return W;
            return -1
        }
        function yp(P, q, C) {
            for (var W = C + 1; W--; )
                if (P[W] === q)
                    return W;
            return W
        }
        function is(P) {
            return rs(P) ? mp(P) : tp(P)
        }
        function Tr(P) {
            return rs(P) ? wp(P) : rp(P)
        }
        function ru(P) {
            for (var q = P.length; q-- && gt.test(P.charAt(q)); )
                ;
            return q
        }
        var vp = ca(z);
        function mp(P) {
            for (var q = es.lastIndex = 0; es.test(P); )
                ++q;
            return q
        }
        function wp(P) {
            return P.match(es) || []
        }
        function bp(P) {
            return P.match(xn) || []
        }
        var _p = function P(q) {
            q = q == null ? Pe : ss.defaults(Pe.Object(), q, ss.pick(Pe, Sn));
            var C = q.Array
              , W = q.Date
              , fe = q.Error
              , Te = q.Function
              , Ct = q.Math
              , He = q.Object
              , pa = q.RegExp
              , Ep = q.String
              , wr = q.TypeError
              , Tn = C.prototype
              , Ip = Te.prototype
              , ns = He.prototype
              , Cn = q["__core-js_shared__"]
              , $n = Ip.toString
              , De = ns.hasOwnProperty
              , xp = 0
              , iu = function() {
                var e = /[^.]+$/.exec(Cn && Cn.keys && Cn.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }()
              , Nn = ns.toString
              , Pp = $n.call(He)
              , Sp = Pe._
              , Rp = pa("^" + $n.call(De).replace(ht, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , Dn = er ? q.Buffer : i
              , vi = q.Symbol
              , qn = q.Uint8Array
              , su = Dn ? Dn.allocUnsafe : i
              , jn = tu(He.getPrototypeOf, He)
              , nu = He.create
              , ou = ns.propertyIsEnumerable
              , Ln = Tn.splice
              , au = vi ? vi.isConcatSpreadable : i
              , Os = vi ? vi.iterator : i
              , qi = vi ? vi.toStringTag : i
              , Mn = function() {
                try {
                    var e = Ui(He, "defineProperty");
                    return e({}, "", {}),
                    e
                } catch {}
            }()
              , Op = q.clearTimeout !== Pe.clearTimeout && q.clearTimeout
              , Ap = W && W.now !== Pe.Date.now && W.now
              , Tp = q.setTimeout !== Pe.setTimeout && q.setTimeout
              , zn = Ct.ceil
              , Un = Ct.floor
              , da = He.getOwnPropertySymbols
              , Cp = Dn ? Dn.isBuffer : i
              , cu = q.isFinite
              , $p = Tn.join
              , Np = tu(He.keys, He)
              , $t = Ct.max
              , Kt = Ct.min
              , Dp = W.now
              , qp = q.parseInt
              , uu = Ct.random
              , jp = Tn.reverse
              , ga = Ui(q, "DataView")
              , As = Ui(q, "Map")
              , ya = Ui(q, "Promise")
              , os = Ui(q, "Set")
              , Ts = Ui(q, "WeakMap")
              , Cs = Ui(He, "create")
              , Hn = Ts && new Ts
              , as = {}
              , Lp = Hi(ga)
              , Mp = Hi(As)
              , zp = Hi(ya)
              , Up = Hi(os)
              , Hp = Hi(Ts)
              , kn = vi ? vi.prototype : i
              , $s = kn ? kn.valueOf : i
              , hu = kn ? kn.toString : i;
            function f(e) {
                if (pt(e) && !ge(e) && !(e instanceof xe)) {
                    if (e instanceof br)
                        return e;
                    if (De.call(e, "__wrapped__"))
                        return lh(e)
                }
                return new br(e)
            }
            var cs = function() {
                function e() {}
                return function(r) {
                    if (!it(r))
                        return {};
                    if (nu)
                        return nu(r);
                    e.prototype = r;
                    var s = new e;
                    return e.prototype = i,
                    s
                }
            }();
            function Kn() {}
            function br(e, r) {
                this.__wrapped__ = e,
                this.__actions__ = [],
                this.__chain__ = !!r,
                this.__index__ = 0,
                this.__values__ = i
            }
            f.templateSettings = {
                escape: ct,
                evaluate: ut,
                interpolate: rt,
                variable: "",
                imports: {
                    _: f
                }
            },
            f.prototype = Kn.prototype,
            f.prototype.constructor = f,
            br.prototype = cs(Kn.prototype),
            br.prototype.constructor = br;
            function xe(e) {
                this.__wrapped__ = e,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = B,
                this.__views__ = []
            }
            function kp() {
                var e = new xe(this.__wrapped__);
                return e.__actions__ = tr(this.__actions__),
                e.__dir__ = this.__dir__,
                e.__filtered__ = this.__filtered__,
                e.__iteratees__ = tr(this.__iteratees__),
                e.__takeCount__ = this.__takeCount__,
                e.__views__ = tr(this.__views__),
                e
            }
            function Kp() {
                if (this.__filtered__) {
                    var e = new xe(this);
                    e.__dir__ = -1,
                    e.__filtered__ = !0
                } else
                    e = this.clone(),
                    e.__dir__ *= -1;
                return e
            }
            function Bp() {
                var e = this.__wrapped__.value()
                  , r = this.__dir__
                  , s = ge(e)
                  , c = r < 0
                  , l = s ? e.length : 0
                  , d = rg(0, l, this.__views__)
                  , w = d.start
                  , _ = d.end
                  , R = _ - w
                  , L = c ? _ : w - 1
                  , M = this.__iteratees__
                  , U = M.length
                  , F = 0
                  , X = Kt(R, this.__takeCount__);
                if (!s || !c && l == R && X == R)
                    return Du(e, this.__actions__);
                var se = [];
                e: for (; R-- && F < X; ) {
                    L += r;
                    for (var we = -1, ne = e[L]; ++we < U; ) {
                        var _e = M[we]
                          , Se = _e.iteratee
                          , dr = _e.type
                          , Zt = Se(ne);
                        if (dr == S)
                            ne = Zt;
                        else if (!Zt) {
                            if (dr == b)
                                continue e;
                            break e
                        }
                    }
                    se[F++] = ne
                }
                return se
            }
            xe.prototype = cs(Kn.prototype),
            xe.prototype.constructor = xe;
            function ji(e) {
                var r = -1
                  , s = e == null ? 0 : e.length;
                for (this.clear(); ++r < s; ) {
                    var c = e[r];
                    this.set(c[0], c[1])
                }
            }
            function Fp() {
                this.__data__ = Cs ? Cs(null) : {},
                this.size = 0
            }
            function Vp(e) {
                var r = this.has(e) && delete this.__data__[e];
                return this.size -= r ? 1 : 0,
                r
            }
            function Gp(e) {
                var r = this.__data__;
                if (Cs) {
                    var s = r[e];
                    return s === m ? i : s
                }
                return De.call(r, e) ? r[e] : i
            }
            function Wp(e) {
                var r = this.__data__;
                return Cs ? r[e] !== i : De.call(r, e)
            }
            function Jp(e, r) {
                var s = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                s[e] = Cs && r === i ? m : r,
                this
            }
            ji.prototype.clear = Fp,
            ji.prototype.delete = Vp,
            ji.prototype.get = Gp,
            ji.prototype.has = Wp,
            ji.prototype.set = Jp;
            function Jr(e) {
                var r = -1
                  , s = e == null ? 0 : e.length;
                for (this.clear(); ++r < s; ) {
                    var c = e[r];
                    this.set(c[0], c[1])
                }
            }
            function Qp() {
                this.__data__ = [],
                this.size = 0
            }
            function Yp(e) {
                var r = this.__data__
                  , s = Bn(r, e);
                if (s < 0)
                    return !1;
                var c = r.length - 1;
                return s == c ? r.pop() : Ln.call(r, s, 1),
                --this.size,
                !0
            }
            function Zp(e) {
                var r = this.__data__
                  , s = Bn(r, e);
                return s < 0 ? i : r[s][1]
            }
            function Xp(e) {
                return Bn(this.__data__, e) > -1
            }
            function ed(e, r) {
                var s = this.__data__
                  , c = Bn(s, e);
                return c < 0 ? (++this.size,
                s.push([e, r])) : s[c][1] = r,
                this
            }
            Jr.prototype.clear = Qp,
            Jr.prototype.delete = Yp,
            Jr.prototype.get = Zp,
            Jr.prototype.has = Xp,
            Jr.prototype.set = ed;
            function Qr(e) {
                var r = -1
                  , s = e == null ? 0 : e.length;
                for (this.clear(); ++r < s; ) {
                    var c = e[r];
                    this.set(c[0], c[1])
                }
            }
            function td() {
                this.size = 0,
                this.__data__ = {
                    hash: new ji,
                    map: new (As || Jr),
                    string: new ji
                }
            }
            function rd(e) {
                var r = ro(this, e).delete(e);
                return this.size -= r ? 1 : 0,
                r
            }
            function id(e) {
                return ro(this, e).get(e)
            }
            function sd(e) {
                return ro(this, e).has(e)
            }
            function nd(e, r) {
                var s = ro(this, e)
                  , c = s.size;
                return s.set(e, r),
                this.size += s.size == c ? 0 : 1,
                this
            }
            Qr.prototype.clear = td,
            Qr.prototype.delete = rd,
            Qr.prototype.get = id,
            Qr.prototype.has = sd,
            Qr.prototype.set = nd;
            function Li(e) {
                var r = -1
                  , s = e == null ? 0 : e.length;
                for (this.__data__ = new Qr; ++r < s; )
                    this.add(e[r])
            }
            function od(e) {
                return this.__data__.set(e, m),
                this
            }
            function ad(e) {
                return this.__data__.has(e)
            }
            Li.prototype.add = Li.prototype.push = od,
            Li.prototype.has = ad;
            function Cr(e) {
                var r = this.__data__ = new Jr(e);
                this.size = r.size
            }
            function cd() {
                this.__data__ = new Jr,
                this.size = 0
            }
            function ud(e) {
                var r = this.__data__
                  , s = r.delete(e);
                return this.size = r.size,
                s
            }
            function hd(e) {
                return this.__data__.get(e)
            }
            function ld(e) {
                return this.__data__.has(e)
            }
            function fd(e, r) {
                var s = this.__data__;
                if (s instanceof Jr) {
                    var c = s.__data__;
                    if (!As || c.length < o - 1)
                        return c.push([e, r]),
                        this.size = ++s.size,
                        this;
                    s = this.__data__ = new Qr(c)
                }
                return s.set(e, r),
                this.size = s.size,
                this
            }
            Cr.prototype.clear = cd,
            Cr.prototype.delete = ud,
            Cr.prototype.get = hd,
            Cr.prototype.has = ld,
            Cr.prototype.set = fd;
            function lu(e, r) {
                var s = ge(e)
                  , c = !s && ki(e)
                  , l = !s && !c && Ei(e)
                  , d = !s && !c && !l && fs(e)
                  , w = s || c || l || d
                  , _ = w ? ha(e.length, Ep) : []
                  , R = _.length;
                for (var L in e)
                    (r || De.call(e, L)) && !(w && (L == "length" || l && (L == "offset" || L == "parent") || d && (L == "buffer" || L == "byteLength" || L == "byteOffset") || ei(L, R))) && _.push(L);
                return _
            }
            function fu(e) {
                var r = e.length;
                return r ? e[Ra(0, r - 1)] : i
            }
            function pd(e, r) {
                return io(tr(e), Mi(r, 0, e.length))
            }
            function dd(e) {
                return io(tr(e))
            }
            function va(e, r, s) {
                (s !== i && !$r(e[r], s) || s === i && !(r in e)) && Yr(e, r, s)
            }
            function Ns(e, r, s) {
                var c = e[r];
                (!(De.call(e, r) && $r(c, s)) || s === i && !(r in e)) && Yr(e, r, s)
            }
            function Bn(e, r) {
                for (var s = e.length; s--; )
                    if ($r(e[s][0], r))
                        return s;
                return -1
            }
            function gd(e, r, s, c) {
                return mi(e, function(l, d, w) {
                    r(c, l, s(l), w)
                }),
                c
            }
            function pu(e, r) {
                return e && kr(r, qt(r), e)
            }
            function yd(e, r) {
                return e && kr(r, ir(r), e)
            }
            function Yr(e, r, s) {
                r == "__proto__" && Mn ? Mn(e, r, {
                    configurable: !0,
                    enumerable: !0,
                    value: s,
                    writable: !0
                }) : e[r] = s
            }
            function ma(e, r) {
                for (var s = -1, c = r.length, l = C(c), d = e == null; ++s < c; )
                    l[s] = d ? i : Za(e, r[s]);
                return l
            }
            function Mi(e, r, s) {
                return e === e && (s !== i && (e = e <= s ? e : s),
                r !== i && (e = e >= r ? e : r)),
                e
            }
            function _r(e, r, s, c, l, d) {
                var w, _ = r & O, R = r & N, L = r & j;
                if (s && (w = l ? s(e, c, l, d) : s(e)),
                w !== i)
                    return w;
                if (!it(e))
                    return e;
                var M = ge(e);
                if (M) {
                    if (w = sg(e),
                    !_)
                        return tr(e, w)
                } else {
                    var U = Bt(e)
                      , F = U == Z || U == ue;
                    if (Ei(e))
                        return Lu(e, _);
                    if (U == Ie || U == Ee || F && !l) {
                        if (w = R || F ? {} : rh(e),
                        !_)
                            return R ? Gd(e, yd(w, e)) : Vd(e, pu(w, e))
                    } else {
                        if (!je[U])
                            return l ? e : {};
                        w = ng(e, U, _)
                    }
                }
                d || (d = new Cr);
                var X = d.get(e);
                if (X)
                    return X;
                d.set(e, w),
                Ch(e) ? e.forEach(function(ne) {
                    w.add(_r(ne, r, s, ne, e, d))
                }) : Ah(e) && e.forEach(function(ne, _e) {
                    w.set(_e, _r(ne, r, s, _e, e, d))
                });
                var se = L ? R ? Ma : La : R ? ir : qt
                  , we = M ? i : se(e);
                return mr(we || e, function(ne, _e) {
                    we && (_e = ne,
                    ne = e[_e]),
                    Ns(w, _e, _r(ne, r, s, _e, e, d))
                }),
                w
            }
            function vd(e) {
                var r = qt(e);
                return function(s) {
                    return du(s, e, r)
                }
            }
            function du(e, r, s) {
                var c = s.length;
                if (e == null)
                    return !c;
                for (e = He(e); c--; ) {
                    var l = s[c]
                      , d = r[l]
                      , w = e[l];
                    if (w === i && !(l in e) || !d(w))
                        return !1
                }
                return !0
            }
            function gu(e, r, s) {
                if (typeof e != "function")
                    throw new wr(p);
                return Us(function() {
                    e.apply(i, s)
                }, r)
            }
            function Ds(e, r, s, c) {
                var l = -1
                  , d = Rn
                  , w = !0
                  , _ = e.length
                  , R = []
                  , L = r.length;
                if (!_)
                    return R;
                s && (r = Ye(r, lr(s))),
                c ? (d = sa,
                w = !1) : r.length >= o && (d = Rs,
                w = !1,
                r = new Li(r));
                e: for (; ++l < _; ) {
                    var M = e[l]
                      , U = s == null ? M : s(M);
                    if (M = c || M !== 0 ? M : 0,
                    w && U === U) {
                        for (var F = L; F--; )
                            if (r[F] === U)
                                continue e;
                        R.push(M)
                    } else
                        d(r, U, c) || R.push(M)
                }
                return R
            }
            var mi = ku(Hr)
              , yu = ku(ba, !0);
            function md(e, r) {
                var s = !0;
                return mi(e, function(c, l, d) {
                    return s = !!r(c, l, d),
                    s
                }),
                s
            }
            function Fn(e, r, s) {
                for (var c = -1, l = e.length; ++c < l; ) {
                    var d = e[c]
                      , w = r(d);
                    if (w != null && (_ === i ? w === w && !pr(w) : s(w, _)))
                        var _ = w
                          , R = d
                }
                return R
            }
            function wd(e, r, s, c) {
                var l = e.length;
                for (s = ye(s),
                s < 0 && (s = -s > l ? 0 : l + s),
                c = c === i || c > l ? l : ye(c),
                c < 0 && (c += l),
                c = s > c ? 0 : Nh(c); s < c; )
                    e[s++] = r;
                return e
            }
            function vu(e, r) {
                var s = [];
                return mi(e, function(c, l, d) {
                    r(c, l, d) && s.push(c)
                }),
                s
            }
            function Ht(e, r, s, c, l) {
                var d = -1
                  , w = e.length;
                for (s || (s = ag),
                l || (l = []); ++d < w; ) {
                    var _ = e[d];
                    r > 0 && s(_) ? r > 1 ? Ht(_, r - 1, s, c, l) : gi(l, _) : c || (l[l.length] = _)
                }
                return l
            }
            var wa = Ku()
              , mu = Ku(!0);
            function Hr(e, r) {
                return e && wa(e, r, qt)
            }
            function ba(e, r) {
                return e && mu(e, r, qt)
            }
            function Vn(e, r) {
                return di(r, function(s) {
                    return ti(e[s])
                })
            }
            function zi(e, r) {
                r = bi(r, e);
                for (var s = 0, c = r.length; e != null && s < c; )
                    e = e[Kr(r[s++])];
                return s && s == c ? e : i
            }
            function wu(e, r, s) {
                var c = r(e);
                return ge(e) ? c : gi(c, s(e))
            }
            function Qt(e) {
                return e == null ? e === i ? tt : Ae : qi && qi in He(e) ? tg(e) : dg(e)
            }
            function _a(e, r) {
                return e > r
            }
            function bd(e, r) {
                return e != null && De.call(e, r)
            }
            function _d(e, r) {
                return e != null && r in He(e)
            }
            function Ed(e, r, s) {
                return e >= Kt(r, s) && e < $t(r, s)
            }
            function Ea(e, r, s) {
                for (var c = s ? sa : Rn, l = e[0].length, d = e.length, w = d, _ = C(d), R = 1 / 0, L = []; w--; ) {
                    var M = e[w];
                    w && r && (M = Ye(M, lr(r))),
                    R = Kt(M.length, R),
                    _[w] = !s && (r || l >= 120 && M.length >= 120) ? new Li(w && M) : i
                }
                M = e[0];
                var U = -1
                  , F = _[0];
                e: for (; ++U < l && L.length < R; ) {
                    var X = M[U]
                      , se = r ? r(X) : X;
                    if (X = s || X !== 0 ? X : 0,
                    !(F ? Rs(F, se) : c(L, se, s))) {
                        for (w = d; --w; ) {
                            var we = _[w];
                            if (!(we ? Rs(we, se) : c(e[w], se, s)))
                                continue e
                        }
                        F && F.push(se),
                        L.push(X)
                    }
                }
                return L
            }
            function Id(e, r, s, c) {
                return Hr(e, function(l, d, w) {
                    r(c, s(l), d, w)
                }),
                c
            }
            function qs(e, r, s) {
                r = bi(r, e),
                e = oh(e, r);
                var c = e == null ? e : e[Kr(Ir(r))];
                return c == null ? i : Dt(c, e, s)
            }
            function bu(e) {
                return pt(e) && Qt(e) == Ee
            }
            function xd(e) {
                return pt(e) && Qt(e) == Oe
            }
            function Pd(e) {
                return pt(e) && Qt(e) == A
            }
            function js(e, r, s, c, l) {
                return e === r ? !0 : e == null || r == null || !pt(e) && !pt(r) ? e !== e && r !== r : Sd(e, r, s, c, js, l)
            }
            function Sd(e, r, s, c, l, d) {
                var w = ge(e)
                  , _ = ge(r)
                  , R = w ? Rr : Bt(e)
                  , L = _ ? Rr : Bt(r);
                R = R == Ee ? Ie : R,
                L = L == Ee ? Ie : L;
                var M = R == Ie
                  , U = L == Ie
                  , F = R == L;
                if (F && Ei(e)) {
                    if (!Ei(r))
                        return !1;
                    w = !0,
                    M = !1
                }
                if (F && !M)
                    return d || (d = new Cr),
                    w || fs(e) ? Xu(e, r, s, c, l, d) : Xd(e, r, R, s, c, l, d);
                if (!(s & T)) {
                    var X = M && De.call(e, "__wrapped__")
                      , se = U && De.call(r, "__wrapped__");
                    if (X || se) {
                        var we = X ? e.value() : e
                          , ne = se ? r.value() : r;
                        return d || (d = new Cr),
                        l(we, ne, s, c, d)
                    }
                }
                return F ? (d || (d = new Cr),
                eg(e, r, s, c, l, d)) : !1
            }
            function Rd(e) {
                return pt(e) && Bt(e) == me
            }
            function Ia(e, r, s, c) {
                var l = s.length
                  , d = l
                  , w = !c;
                if (e == null)
                    return !d;
                for (e = He(e); l--; ) {
                    var _ = s[l];
                    if (w && _[2] ? _[1] !== e[_[0]] : !(_[0]in e))
                        return !1
                }
                for (; ++l < d; ) {
                    _ = s[l];
                    var R = _[0]
                      , L = e[R]
                      , M = _[1];
                    if (w && _[2]) {
                        if (L === i && !(R in e))
                            return !1
                    } else {
                        var U = new Cr;
                        if (c)
                            var F = c(L, M, R, e, r, U);
                        if (!(F === i ? js(M, L, T | Y, c, U) : F))
                            return !1
                    }
                }
                return !0
            }
            function _u(e) {
                if (!it(e) || ug(e))
                    return !1;
                var r = ti(e) ? Rp : ko;
                return r.test(Hi(e))
            }
            function Od(e) {
                return pt(e) && Qt(e) == et
            }
            function Ad(e) {
                return pt(e) && Bt(e) == Ce
            }
            function Td(e) {
                return pt(e) && uo(e.length) && !!Me[Qt(e)]
            }
            function Eu(e) {
                return typeof e == "function" ? e : e == null ? sr : typeof e == "object" ? ge(e) ? Pu(e[0], e[1]) : xu(e) : Bh(e)
            }
            function xa(e) {
                if (!zs(e))
                    return Np(e);
                var r = [];
                for (var s in He(e))
                    De.call(e, s) && s != "constructor" && r.push(s);
                return r
            }
            function Cd(e) {
                if (!it(e))
                    return pg(e);
                var r = zs(e)
                  , s = [];
                for (var c in e)
                    c == "constructor" && (r || !De.call(e, c)) || s.push(c);
                return s
            }
            function Pa(e, r) {
                return e < r
            }
            function Iu(e, r) {
                var s = -1
                  , c = rr(e) ? C(e.length) : [];
                return mi(e, function(l, d, w) {
                    c[++s] = r(l, d, w)
                }),
                c
            }
            function xu(e) {
                var r = Ua(e);
                return r.length == 1 && r[0][2] ? sh(r[0][0], r[0][1]) : function(s) {
                    return s === e || Ia(s, e, r)
                }
            }
            function Pu(e, r) {
                return ka(e) && ih(r) ? sh(Kr(e), r) : function(s) {
                    var c = Za(s, e);
                    return c === i && c === r ? Xa(s, e) : js(r, c, T | Y)
                }
            }
            function Gn(e, r, s, c, l) {
                e !== r && wa(r, function(d, w) {
                    if (l || (l = new Cr),
                    it(d))
                        $d(e, r, w, s, Gn, c, l);
                    else {
                        var _ = c ? c(Ba(e, w), d, w + "", e, r, l) : i;
                        _ === i && (_ = d),
                        va(e, w, _)
                    }
                }, ir)
            }
            function $d(e, r, s, c, l, d, w) {
                var _ = Ba(e, s)
                  , R = Ba(r, s)
                  , L = w.get(R);
                if (L) {
                    va(e, s, L);
                    return
                }
                var M = d ? d(_, R, s + "", e, r, w) : i
                  , U = M === i;
                if (U) {
                    var F = ge(R)
                      , X = !F && Ei(R)
                      , se = !F && !X && fs(R);
                    M = R,
                    F || X || se ? ge(_) ? M = _ : vt(_) ? M = tr(_) : X ? (U = !1,
                    M = Lu(R, !0)) : se ? (U = !1,
                    M = Mu(R, !0)) : M = [] : Hs(R) || ki(R) ? (M = _,
                    ki(_) ? M = Dh(_) : (!it(_) || ti(_)) && (M = rh(R))) : U = !1
                }
                U && (w.set(R, M),
                l(M, R, c, d, w),
                w.delete(R)),
                va(e, s, M)
            }
            function Su(e, r) {
                var s = e.length;
                if (s)
                    return r += r < 0 ? s : 0,
                    ei(r, s) ? e[r] : i
            }
            function Ru(e, r, s) {
                r.length ? r = Ye(r, function(d) {
                    return ge(d) ? function(w) {
                        return zi(w, d.length === 1 ? d[0] : d)
                    }
                    : d
                }) : r = [sr];
                var c = -1;
                r = Ye(r, lr(ie()));
                var l = Iu(e, function(d, w, _) {
                    var R = Ye(r, function(L) {
                        return L(d)
                    });
                    return {
                        criteria: R,
                        index: ++c,
                        value: d
                    }
                });
                return np(l, function(d, w) {
                    return Fd(d, w, s)
                })
            }
            function Nd(e, r) {
                return Ou(e, r, function(s, c) {
                    return Xa(e, c)
                })
            }
            function Ou(e, r, s) {
                for (var c = -1, l = r.length, d = {}; ++c < l; ) {
                    var w = r[c]
                      , _ = zi(e, w);
                    s(_, w) && Ls(d, bi(w, e), _)
                }
                return d
            }
            function Dd(e) {
                return function(r) {
                    return zi(r, e)
                }
            }
            function Sa(e, r, s, c) {
                var l = c ? sp : ts
                  , d = -1
                  , w = r.length
                  , _ = e;
                for (e === r && (r = tr(r)),
                s && (_ = Ye(e, lr(s))); ++d < w; )
                    for (var R = 0, L = r[d], M = s ? s(L) : L; (R = l(_, M, R, c)) > -1; )
                        _ !== e && Ln.call(_, R, 1),
                        Ln.call(e, R, 1);
                return e
            }
            function Au(e, r) {
                for (var s = e ? r.length : 0, c = s - 1; s--; ) {
                    var l = r[s];
                    if (s == c || l !== d) {
                        var d = l;
                        ei(l) ? Ln.call(e, l, 1) : Ta(e, l)
                    }
                }
                return e
            }
            function Ra(e, r) {
                return e + Un(uu() * (r - e + 1))
            }
            function qd(e, r, s, c) {
                for (var l = -1, d = $t(zn((r - e) / (s || 1)), 0), w = C(d); d--; )
                    w[c ? d : ++l] = e,
                    e += s;
                return w
            }
            function Oa(e, r) {
                var s = "";
                if (!e || r < 1 || r > k)
                    return s;
                do
                    r % 2 && (s += e),
                    r = Un(r / 2),
                    r && (e += e);
                while (r);
                return s
            }
            function be(e, r) {
                return Fa(nh(e, r, sr), e + "")
            }
            function jd(e) {
                return fu(ps(e))
            }
            function Ld(e, r) {
                var s = ps(e);
                return io(s, Mi(r, 0, s.length))
            }
            function Ls(e, r, s, c) {
                if (!it(e))
                    return e;
                r = bi(r, e);
                for (var l = -1, d = r.length, w = d - 1, _ = e; _ != null && ++l < d; ) {
                    var R = Kr(r[l])
                      , L = s;
                    if (R === "__proto__" || R === "constructor" || R === "prototype")
                        return e;
                    if (l != w) {
                        var M = _[R];
                        L = c ? c(M, R, _) : i,
                        L === i && (L = it(M) ? M : ei(r[l + 1]) ? [] : {})
                    }
                    Ns(_, R, L),
                    _ = _[R]
                }
                return e
            }
            var Tu = Hn ? function(e, r) {
                return Hn.set(e, r),
                e
            }
            : sr
              , Md = Mn ? function(e, r) {
                return Mn(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: tc(r),
                    writable: !0
                })
            }
            : sr;
            function zd(e) {
                return io(ps(e))
            }
            function Er(e, r, s) {
                var c = -1
                  , l = e.length;
                r < 0 && (r = -r > l ? 0 : l + r),
                s = s > l ? l : s,
                s < 0 && (s += l),
                l = r > s ? 0 : s - r >>> 0,
                r >>>= 0;
                for (var d = C(l); ++c < l; )
                    d[c] = e[c + r];
                return d
            }
            function Ud(e, r) {
                var s;
                return mi(e, function(c, l, d) {
                    return s = r(c, l, d),
                    !s
                }),
                !!s
            }
            function Wn(e, r, s) {
                var c = 0
                  , l = e == null ? c : e.length;
                if (typeof r == "number" && r === r && l <= nt) {
                    for (; c < l; ) {
                        var d = c + l >>> 1
                          , w = e[d];
                        w !== null && !pr(w) && (s ? w <= r : w < r) ? c = d + 1 : l = d
                    }
                    return l
                }
                return Aa(e, r, sr, s)
            }
            function Aa(e, r, s, c) {
                var l = 0
                  , d = e == null ? 0 : e.length;
                if (d === 0)
                    return 0;
                r = s(r);
                for (var w = r !== r, _ = r === null, R = pr(r), L = r === i; l < d; ) {
                    var M = Un((l + d) / 2)
                      , U = s(e[M])
                      , F = U !== i
                      , X = U === null
                      , se = U === U
                      , we = pr(U);
                    if (w)
                        var ne = c || se;
                    else
                        L ? ne = se && (c || F) : _ ? ne = se && F && (c || !X) : R ? ne = se && F && !X && (c || !we) : X || we ? ne = !1 : ne = c ? U <= r : U < r;
                    ne ? l = M + 1 : d = M
                }
                return Kt(d, Xe)
            }
            function Cu(e, r) {
                for (var s = -1, c = e.length, l = 0, d = []; ++s < c; ) {
                    var w = e[s]
                      , _ = r ? r(w) : w;
                    if (!s || !$r(_, R)) {
                        var R = _;
                        d[l++] = w === 0 ? 0 : w
                    }
                }
                return d
            }
            function $u(e) {
                return typeof e == "number" ? e : pr(e) ? K : +e
            }
            function fr(e) {
                if (typeof e == "string")
                    return e;
                if (ge(e))
                    return Ye(e, fr) + "";
                if (pr(e))
                    return hu ? hu.call(e) : "";
                var r = e + "";
                return r == "0" && 1 / e == -le ? "-0" : r
            }
            function wi(e, r, s) {
                var c = -1
                  , l = Rn
                  , d = e.length
                  , w = !0
                  , _ = []
                  , R = _;
                if (s)
                    w = !1,
                    l = sa;
                else if (d >= o) {
                    var L = r ? null : Yd(e);
                    if (L)
                        return An(L);
                    w = !1,
                    l = Rs,
                    R = new Li
                } else
                    R = r ? [] : _;
                e: for (; ++c < d; ) {
                    var M = e[c]
                      , U = r ? r(M) : M;
                    if (M = s || M !== 0 ? M : 0,
                    w && U === U) {
                        for (var F = R.length; F--; )
                            if (R[F] === U)
                                continue e;
                        r && R.push(U),
                        _.push(M)
                    } else
                        l(R, U, s) || (R !== _ && R.push(U),
                        _.push(M))
                }
                return _
            }
            function Ta(e, r) {
                return r = bi(r, e),
                e = oh(e, r),
                e == null || delete e[Kr(Ir(r))]
            }
            function Nu(e, r, s, c) {
                return Ls(e, r, s(zi(e, r)), c)
            }
            function Jn(e, r, s, c) {
                for (var l = e.length, d = c ? l : -1; (c ? d-- : ++d < l) && r(e[d], d, e); )
                    ;
                return s ? Er(e, c ? 0 : d, c ? d + 1 : l) : Er(e, c ? d + 1 : 0, c ? l : d)
            }
            function Du(e, r) {
                var s = e;
                return s instanceof xe && (s = s.value()),
                na(r, function(c, l) {
                    return l.func.apply(l.thisArg, gi([c], l.args))
                }, s)
            }
            function Ca(e, r, s) {
                var c = e.length;
                if (c < 2)
                    return c ? wi(e[0]) : [];
                for (var l = -1, d = C(c); ++l < c; )
                    for (var w = e[l], _ = -1; ++_ < c; )
                        _ != l && (d[l] = Ds(d[l] || w, e[_], r, s));
                return wi(Ht(d, 1), r, s)
            }
            function qu(e, r, s) {
                for (var c = -1, l = e.length, d = r.length, w = {}; ++c < l; ) {
                    var _ = c < d ? r[c] : i;
                    s(w, e[c], _)
                }
                return w
            }
            function $a(e) {
                return vt(e) ? e : []
            }
            function Na(e) {
                return typeof e == "function" ? e : sr
            }
            function bi(e, r) {
                return ge(e) ? e : ka(e, r) ? [e] : hh($e(e))
            }
            var Hd = be;
            function _i(e, r, s) {
                var c = e.length;
                return s = s === i ? c : s,
                !r && s >= c ? e : Er(e, r, s)
            }
            var ju = Op || function(e) {
                return Pe.clearTimeout(e)
            }
            ;
            function Lu(e, r) {
                if (r)
                    return e.slice();
                var s = e.length
                  , c = su ? su(s) : new e.constructor(s);
                return e.copy(c),
                c
            }
            function Da(e) {
                var r = new e.constructor(e.byteLength);
                return new qn(r).set(new qn(e)),
                r
            }
            function kd(e, r) {
                var s = r ? Da(e.buffer) : e.buffer;
                return new e.constructor(s,e.byteOffset,e.byteLength)
            }
            function Kd(e) {
                var r = new e.constructor(e.source,yr.exec(e));
                return r.lastIndex = e.lastIndex,
                r
            }
            function Bd(e) {
                return $s ? He($s.call(e)) : {}
            }
            function Mu(e, r) {
                var s = r ? Da(e.buffer) : e.buffer;
                return new e.constructor(s,e.byteOffset,e.length)
            }
            function zu(e, r) {
                if (e !== r) {
                    var s = e !== i
                      , c = e === null
                      , l = e === e
                      , d = pr(e)
                      , w = r !== i
                      , _ = r === null
                      , R = r === r
                      , L = pr(r);
                    if (!_ && !L && !d && e > r || d && w && R && !_ && !L || c && w && R || !s && R || !l)
                        return 1;
                    if (!c && !d && !L && e < r || L && s && l && !c && !d || _ && s && l || !w && l || !R)
                        return -1
                }
                return 0
            }
            function Fd(e, r, s) {
                for (var c = -1, l = e.criteria, d = r.criteria, w = l.length, _ = s.length; ++c < w; ) {
                    var R = zu(l[c], d[c]);
                    if (R) {
                        if (c >= _)
                            return R;
                        var L = s[c];
                        return R * (L == "desc" ? -1 : 1)
                    }
                }
                return e.index - r.index
            }
            function Uu(e, r, s, c) {
                for (var l = -1, d = e.length, w = s.length, _ = -1, R = r.length, L = $t(d - w, 0), M = C(R + L), U = !c; ++_ < R; )
                    M[_] = r[_];
                for (; ++l < w; )
                    (U || l < d) && (M[s[l]] = e[l]);
                for (; L--; )
                    M[_++] = e[l++];
                return M
            }
            function Hu(e, r, s, c) {
                for (var l = -1, d = e.length, w = -1, _ = s.length, R = -1, L = r.length, M = $t(d - _, 0), U = C(M + L), F = !c; ++l < M; )
                    U[l] = e[l];
                for (var X = l; ++R < L; )
                    U[X + R] = r[R];
                for (; ++w < _; )
                    (F || l < d) && (U[X + s[w]] = e[l++]);
                return U
            }
            function tr(e, r) {
                var s = -1
                  , c = e.length;
                for (r || (r = C(c)); ++s < c; )
                    r[s] = e[s];
                return r
            }
            function kr(e, r, s, c) {
                var l = !s;
                s || (s = {});
                for (var d = -1, w = r.length; ++d < w; ) {
                    var _ = r[d]
                      , R = c ? c(s[_], e[_], _, s, e) : i;
                    R === i && (R = e[_]),
                    l ? Yr(s, _, R) : Ns(s, _, R)
                }
                return s
            }
            function Vd(e, r) {
                return kr(e, Ha(e), r)
            }
            function Gd(e, r) {
                return kr(e, eh(e), r)
            }
            function Qn(e, r) {
                return function(s, c) {
                    var l = ge(s) ? Zf : gd
                      , d = r ? r() : {};
                    return l(s, e, ie(c, 2), d)
                }
            }
            function us(e) {
                return be(function(r, s) {
                    var c = -1
                      , l = s.length
                      , d = l > 1 ? s[l - 1] : i
                      , w = l > 2 ? s[2] : i;
                    for (d = e.length > 3 && typeof d == "function" ? (l--,
                    d) : i,
                    w && Yt(s[0], s[1], w) && (d = l < 3 ? i : d,
                    l = 1),
                    r = He(r); ++c < l; ) {
                        var _ = s[c];
                        _ && e(r, _, c, d)
                    }
                    return r
                })
            }
            function ku(e, r) {
                return function(s, c) {
                    if (s == null)
                        return s;
                    if (!rr(s))
                        return e(s, c);
                    for (var l = s.length, d = r ? l : -1, w = He(s); (r ? d-- : ++d < l) && c(w[d], d, w) !== !1; )
                        ;
                    return s
                }
            }
            function Ku(e) {
                return function(r, s, c) {
                    for (var l = -1, d = He(r), w = c(r), _ = w.length; _--; ) {
                        var R = w[e ? _ : ++l];
                        if (s(d[R], R, d) === !1)
                            break
                    }
                    return r
                }
            }
            function Wd(e, r, s) {
                var c = r & re
                  , l = Ms(e);
                function d() {
                    var w = this && this !== Pe && this instanceof d ? l : e;
                    return w.apply(c ? s : this, arguments)
                }
                return d
            }
            function Bu(e) {
                return function(r) {
                    r = $e(r);
                    var s = rs(r) ? Tr(r) : i
                      , c = s ? s[0] : r.charAt(0)
                      , l = s ? _i(s, 1).join("") : r.slice(1);
                    return c[e]() + l
                }
            }
            function hs(e) {
                return function(r) {
                    return na(kh(Hh(r).replace(Ps, "")), e, "")
                }
            }
            function Ms(e) {
                return function() {
                    var r = arguments;
                    switch (r.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(r[0]);
                    case 2:
                        return new e(r[0],r[1]);
                    case 3:
                        return new e(r[0],r[1],r[2]);
                    case 4:
                        return new e(r[0],r[1],r[2],r[3]);
                    case 5:
                        return new e(r[0],r[1],r[2],r[3],r[4]);
                    case 6:
                        return new e(r[0],r[1],r[2],r[3],r[4],r[5]);
                    case 7:
                        return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])
                    }
                    var s = cs(e.prototype)
                      , c = e.apply(s, r);
                    return it(c) ? c : s
                }
            }
            function Jd(e, r, s) {
                var c = Ms(e);
                function l() {
                    for (var d = arguments.length, w = C(d), _ = d, R = ls(l); _--; )
                        w[_] = arguments[_];
                    var L = d < 3 && w[0] !== R && w[d - 1] !== R ? [] : yi(w, R);
                    if (d -= L.length,
                    d < s)
                        return Ju(e, r, Yn, l.placeholder, i, w, L, i, i, s - d);
                    var M = this && this !== Pe && this instanceof l ? c : e;
                    return Dt(M, this, w)
                }
                return l
            }
            function Fu(e) {
                return function(r, s, c) {
                    var l = He(r);
                    if (!rr(r)) {
                        var d = ie(s, 3);
                        r = qt(r),
                        s = function(_) {
                            return d(l[_], _, l)
                        }
                    }
                    var w = e(r, s, c);
                    return w > -1 ? l[d ? r[w] : w] : i
                }
            }
            function Vu(e) {
                return Xr(function(r) {
                    var s = r.length
                      , c = s
                      , l = br.prototype.thru;
                    for (e && r.reverse(); c--; ) {
                        var d = r[c];
                        if (typeof d != "function")
                            throw new wr(p);
                        if (l && !w && to(d) == "wrapper")
                            var w = new br([],!0)
                    }
                    for (c = w ? c : s; ++c < s; ) {
                        d = r[c];
                        var _ = to(d)
                          , R = _ == "wrapper" ? za(d) : i;
                        R && Ka(R[0]) && R[1] == (Q | ae | he | ve) && !R[4].length && R[9] == 1 ? w = w[to(R[0])].apply(w, R[3]) : w = d.length == 1 && Ka(d) ? w[_]() : w.thru(d)
                    }
                    return function() {
                        var L = arguments
                          , M = L[0];
                        if (w && L.length == 1 && ge(M))
                            return w.plant(M).value();
                        for (var U = 0, F = s ? r[U].apply(this, L) : M; ++U < s; )
                            F = r[U].call(this, F);
                        return F
                    }
                })
            }
            function Yn(e, r, s, c, l, d, w, _, R, L) {
                var M = r & Q
                  , U = r & re
                  , F = r & oe
                  , X = r & (ae | ee)
                  , se = r & wt
                  , we = F ? i : Ms(e);
                function ne() {
                    for (var _e = arguments.length, Se = C(_e), dr = _e; dr--; )
                        Se[dr] = arguments[dr];
                    if (X)
                        var Zt = ls(ne)
                          , gr = ap(Se, Zt);
                    if (c && (Se = Uu(Se, c, l, X)),
                    d && (Se = Hu(Se, d, w, X)),
                    _e -= gr,
                    X && _e < L) {
                        var mt = yi(Se, Zt);
                        return Ju(e, r, Yn, ne.placeholder, s, Se, mt, _, R, L - _e)
                    }
                    var Nr = U ? s : this
                      , ii = F ? Nr[e] : e;
                    return _e = Se.length,
                    _ ? Se = gg(Se, _) : se && _e > 1 && Se.reverse(),
                    M && R < _e && (Se.length = R),
                    this && this !== Pe && this instanceof ne && (ii = we || Ms(ii)),
                    ii.apply(Nr, Se)
                }
                return ne
            }
            function Gu(e, r) {
                return function(s, c) {
                    return Id(s, e, r(c), {})
                }
            }
            function Zn(e, r) {
                return function(s, c) {
                    var l;
                    if (s === i && c === i)
                        return r;
                    if (s !== i && (l = s),
                    c !== i) {
                        if (l === i)
                            return c;
                        typeof s == "string" || typeof c == "string" ? (s = fr(s),
                        c = fr(c)) : (s = $u(s),
                        c = $u(c)),
                        l = e(s, c)
                    }
                    return l
                }
            }
            function qa(e) {
                return Xr(function(r) {
                    return r = Ye(r, lr(ie())),
                    be(function(s) {
                        var c = this;
                        return e(r, function(l) {
                            return Dt(l, c, s)
                        })
                    })
                })
            }
            function Xn(e, r) {
                r = r === i ? " " : fr(r);
                var s = r.length;
                if (s < 2)
                    return s ? Oa(r, e) : r;
                var c = Oa(r, zn(e / is(r)));
                return rs(r) ? _i(Tr(c), 0, e).join("") : c.slice(0, e)
            }
            function Qd(e, r, s, c) {
                var l = r & re
                  , d = Ms(e);
                function w() {
                    for (var _ = -1, R = arguments.length, L = -1, M = c.length, U = C(M + R), F = this && this !== Pe && this instanceof w ? d : e; ++L < M; )
                        U[L] = c[L];
                    for (; R--; )
                        U[L++] = arguments[++_];
                    return Dt(F, l ? s : this, U)
                }
                return w
            }
            function Wu(e) {
                return function(r, s, c) {
                    return c && typeof c != "number" && Yt(r, s, c) && (s = c = i),
                    r = ri(r),
                    s === i ? (s = r,
                    r = 0) : s = ri(s),
                    c = c === i ? r < s ? 1 : -1 : ri(c),
                    qd(r, s, c, e)
                }
            }
            function eo(e) {
                return function(r, s) {
                    return typeof r == "string" && typeof s == "string" || (r = xr(r),
                    s = xr(s)),
                    e(r, s)
                }
            }
            function Ju(e, r, s, c, l, d, w, _, R, L) {
                var M = r & ae
                  , U = M ? w : i
                  , F = M ? i : w
                  , X = M ? d : i
                  , se = M ? i : d;
                r |= M ? he : pe,
                r &= ~(M ? pe : he),
                r & ce || (r &= ~(re | oe));
                var we = [e, r, l, X, U, se, F, _, R, L]
                  , ne = s.apply(i, we);
                return Ka(e) && ah(ne, we),
                ne.placeholder = c,
                ch(ne, e, r)
            }
            function ja(e) {
                var r = Ct[e];
                return function(s, c) {
                    if (s = xr(s),
                    c = c == null ? 0 : Kt(ye(c), 292),
                    c && cu(s)) {
                        var l = ($e(s) + "e").split("e")
                          , d = r(l[0] + "e" + (+l[1] + c));
                        return l = ($e(d) + "e").split("e"),
                        +(l[0] + "e" + (+l[1] - c))
                    }
                    return r(s)
                }
            }
            var Yd = os && 1 / An(new os([, -0]))[1] == le ? function(e) {
                return new os(e)
            }
            : sc;
            function Qu(e) {
                return function(r) {
                    var s = Bt(r);
                    return s == me ? fa(r) : s == Ce ? dp(r) : op(r, e(r))
                }
            }
            function Zr(e, r, s, c, l, d, w, _) {
                var R = r & oe;
                if (!R && typeof e != "function")
                    throw new wr(p);
                var L = c ? c.length : 0;
                if (L || (r &= ~(he | pe),
                c = l = i),
                w = w === i ? w : $t(ye(w), 0),
                _ = _ === i ? _ : ye(_),
                L -= l ? l.length : 0,
                r & pe) {
                    var M = c
                      , U = l;
                    c = l = i
                }
                var F = R ? i : za(e)
                  , X = [e, r, s, c, l, M, U, d, w, _];
                if (F && fg(X, F),
                e = X[0],
                r = X[1],
                s = X[2],
                c = X[3],
                l = X[4],
                _ = X[9] = X[9] === i ? R ? 0 : e.length : $t(X[9] - L, 0),
                !_ && r & (ae | ee) && (r &= ~(ae | ee)),
                !r || r == re)
                    var se = Wd(e, r, s);
                else
                    r == ae || r == ee ? se = Jd(e, r, _) : (r == he || r == (re | he)) && !l.length ? se = Qd(e, r, s, c) : se = Yn.apply(i, X);
                var we = F ? Tu : ah;
                return ch(we(se, X), e, r)
            }
            function Yu(e, r, s, c) {
                return e === i || $r(e, ns[s]) && !De.call(c, s) ? r : e
            }
            function Zu(e, r, s, c, l, d) {
                return it(e) && it(r) && (d.set(r, e),
                Gn(e, r, i, Zu, d),
                d.delete(r)),
                e
            }
            function Zd(e) {
                return Hs(e) ? i : e
            }
            function Xu(e, r, s, c, l, d) {
                var w = s & T
                  , _ = e.length
                  , R = r.length;
                if (_ != R && !(w && R > _))
                    return !1;
                var L = d.get(e)
                  , M = d.get(r);
                if (L && M)
                    return L == r && M == e;
                var U = -1
                  , F = !0
                  , X = s & Y ? new Li : i;
                for (d.set(e, r),
                d.set(r, e); ++U < _; ) {
                    var se = e[U]
                      , we = r[U];
                    if (c)
                        var ne = w ? c(we, se, U, r, e, d) : c(se, we, U, e, r, d);
                    if (ne !== i) {
                        if (ne)
                            continue;
                        F = !1;
                        break
                    }
                    if (X) {
                        if (!oa(r, function(_e, Se) {
                            if (!Rs(X, Se) && (se === _e || l(se, _e, s, c, d)))
                                return X.push(Se)
                        })) {
                            F = !1;
                            break
                        }
                    } else if (!(se === we || l(se, we, s, c, d))) {
                        F = !1;
                        break
                    }
                }
                return d.delete(e),
                d.delete(r),
                F
            }
            function Xd(e, r, s, c, l, d, w) {
                switch (s) {
                case Le:
                    if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
                        return !1;
                    e = e.buffer,
                    r = r.buffer;
                case Oe:
                    return !(e.byteLength != r.byteLength || !d(new qn(e), new qn(r)));
                case $:
                case A:
                case Re:
                    return $r(+e, +r);
                case I:
                    return e.name == r.name && e.message == r.message;
                case et:
                case Be:
                    return e == r + "";
                case me:
                    var _ = fa;
                case Ce:
                    var R = c & T;
                    if (_ || (_ = An),
                    e.size != r.size && !R)
                        return !1;
                    var L = w.get(e);
                    if (L)
                        return L == r;
                    c |= Y,
                    w.set(e, r);
                    var M = Xu(_(e), _(r), c, l, d, w);
                    return w.delete(e),
                    M;
                case Fe:
                    if ($s)
                        return $s.call(e) == $s.call(r)
                }
                return !1
            }
            function eg(e, r, s, c, l, d) {
                var w = s & T
                  , _ = La(e)
                  , R = _.length
                  , L = La(r)
                  , M = L.length;
                if (R != M && !w)
                    return !1;
                for (var U = R; U--; ) {
                    var F = _[U];
                    if (!(w ? F in r : De.call(r, F)))
                        return !1
                }
                var X = d.get(e)
                  , se = d.get(r);
                if (X && se)
                    return X == r && se == e;
                var we = !0;
                d.set(e, r),
                d.set(r, e);
                for (var ne = w; ++U < R; ) {
                    F = _[U];
                    var _e = e[F]
                      , Se = r[F];
                    if (c)
                        var dr = w ? c(Se, _e, F, r, e, d) : c(_e, Se, F, e, r, d);
                    if (!(dr === i ? _e === Se || l(_e, Se, s, c, d) : dr)) {
                        we = !1;
                        break
                    }
                    ne || (ne = F == "constructor")
                }
                if (we && !ne) {
                    var Zt = e.constructor
                      , gr = r.constructor;
                    Zt != gr && "constructor"in e && "constructor"in r && !(typeof Zt == "function" && Zt instanceof Zt && typeof gr == "function" && gr instanceof gr) && (we = !1)
                }
                return d.delete(e),
                d.delete(r),
                we
            }
            function Xr(e) {
                return Fa(nh(e, i, dh), e + "")
            }
            function La(e) {
                return wu(e, qt, Ha)
            }
            function Ma(e) {
                return wu(e, ir, eh)
            }
            var za = Hn ? function(e) {
                return Hn.get(e)
            }
            : sc;
            function to(e) {
                for (var r = e.name + "", s = as[r], c = De.call(as, r) ? s.length : 0; c--; ) {
                    var l = s[c]
                      , d = l.func;
                    if (d == null || d == e)
                        return l.name
                }
                return r
            }
            function ls(e) {
                var r = De.call(f, "placeholder") ? f : e;
                return r.placeholder
            }
            function ie() {
                var e = f.iteratee || rc;
                return e = e === rc ? Eu : e,
                arguments.length ? e(arguments[0], arguments[1]) : e
            }
            function ro(e, r) {
                var s = e.__data__;
                return cg(r) ? s[typeof r == "string" ? "string" : "hash"] : s.map
            }
            function Ua(e) {
                for (var r = qt(e), s = r.length; s--; ) {
                    var c = r[s]
                      , l = e[c];
                    r[s] = [c, l, ih(l)]
                }
                return r
            }
            function Ui(e, r) {
                var s = lp(e, r);
                return _u(s) ? s : i
            }
            function tg(e) {
                var r = De.call(e, qi)
                  , s = e[qi];
                try {
                    e[qi] = i;
                    var c = !0
                } catch {}
                var l = Nn.call(e);
                return c && (r ? e[qi] = s : delete e[qi]),
                l
            }
            var Ha = da ? function(e) {
                return e == null ? [] : (e = He(e),
                di(da(e), function(r) {
                    return ou.call(e, r)
                }))
            }
            : nc
              , eh = da ? function(e) {
                for (var r = []; e; )
                    gi(r, Ha(e)),
                    e = jn(e);
                return r
            }
            : nc
              , Bt = Qt;
            (ga && Bt(new ga(new ArrayBuffer(1))) != Le || As && Bt(new As) != me || ya && Bt(ya.resolve()) != bt || os && Bt(new os) != Ce || Ts && Bt(new Ts) != qe) && (Bt = function(e) {
                var r = Qt(e)
                  , s = r == Ie ? e.constructor : i
                  , c = s ? Hi(s) : "";
                if (c)
                    switch (c) {
                    case Lp:
                        return Le;
                    case Mp:
                        return me;
                    case zp:
                        return bt;
                    case Up:
                        return Ce;
                    case Hp:
                        return qe
                    }
                return r
            }
            );
            function rg(e, r, s) {
                for (var c = -1, l = s.length; ++c < l; ) {
                    var d = s[c]
                      , w = d.size;
                    switch (d.type) {
                    case "drop":
                        e += w;
                        break;
                    case "dropRight":
                        r -= w;
                        break;
                    case "take":
                        r = Kt(r, e + w);
                        break;
                    case "takeRight":
                        e = $t(e, r - w);
                        break
                    }
                }
                return {
                    start: e,
                    end: r
                }
            }
            function ig(e) {
                var r = e.match(ke);
                return r ? r[1].split(Pt) : []
            }
            function th(e, r, s) {
                r = bi(r, e);
                for (var c = -1, l = r.length, d = !1; ++c < l; ) {
                    var w = Kr(r[c]);
                    if (!(d = e != null && s(e, w)))
                        break;
                    e = e[w]
                }
                return d || ++c != l ? d : (l = e == null ? 0 : e.length,
                !!l && uo(l) && ei(w, l) && (ge(e) || ki(e)))
            }
            function sg(e) {
                var r = e.length
                  , s = new e.constructor(r);
                return r && typeof e[0] == "string" && De.call(e, "index") && (s.index = e.index,
                s.input = e.input),
                s
            }
            function rh(e) {
                return typeof e.constructor == "function" && !zs(e) ? cs(jn(e)) : {}
            }
            function ng(e, r, s) {
                var c = e.constructor;
                switch (r) {
                case Oe:
                    return Da(e);
                case $:
                case A:
                    return new c(+e);
                case Le:
                    return kd(e, s);
                case ot:
                case Ne:
                case _t:
                case Tt:
                case zt:
                case Ut:
                case Nt:
                case Gt:
                case Xt:
                    return Mu(e, s);
                case me:
                    return new c;
                case Re:
                case Be:
                    return new c(e);
                case et:
                    return Kd(e);
                case Ce:
                    return new c;
                case Fe:
                    return Bd(e)
                }
            }
            function og(e, r) {
                var s = r.length;
                if (!s)
                    return e;
                var c = s - 1;
                return r[c] = (s > 1 ? "& " : "") + r[c],
                r = r.join(s > 2 ? ", " : " "),
                e.replace(ft, `{
/* [wrapped with ` + r + `] */
`)
            }
            function ag(e) {
                return ge(e) || ki(e) || !!(au && e && e[au])
            }
            function ei(e, r) {
                var s = typeof e;
                return r = r ?? k,
                !!r && (s == "number" || s != "symbol" && Bo.test(e)) && e > -1 && e % 1 == 0 && e < r
            }
            function Yt(e, r, s) {
                if (!it(s))
                    return !1;
                var c = typeof r;
                return (c == "number" ? rr(s) && ei(r, s.length) : c == "string" && r in s) ? $r(s[r], e) : !1
            }
            function ka(e, r) {
                if (ge(e))
                    return !1;
                var s = typeof e;
                return s == "number" || s == "symbol" || s == "boolean" || e == null || pr(e) ? !0 : Et.test(e) || !Qe.test(e) || r != null && e in He(r)
            }
            function cg(e) {
                var r = typeof e;
                return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null
            }
            function Ka(e) {
                var r = to(e)
                  , s = f[r];
                if (typeof s != "function" || !(r in xe.prototype))
                    return !1;
                if (e === s)
                    return !0;
                var c = za(s);
                return !!c && e === c[0]
            }
            function ug(e) {
                return !!iu && iu in e
            }
            var hg = Cn ? ti : oc;
            function zs(e) {
                var r = e && e.constructor
                  , s = typeof r == "function" && r.prototype || ns;
                return e === s
            }
            function ih(e) {
                return e === e && !it(e)
            }
            function sh(e, r) {
                return function(s) {
                    return s == null ? !1 : s[e] === r && (r !== i || e in He(s))
                }
            }
            function lg(e) {
                var r = ao(e, function(c) {
                    return s.size === g && s.clear(),
                    c
                })
                  , s = r.cache;
                return r
            }
            function fg(e, r) {
                var s = e[1]
                  , c = r[1]
                  , l = s | c
                  , d = l < (re | oe | Q)
                  , w = c == Q && s == ae || c == Q && s == ve && e[7].length <= r[8] || c == (Q | ve) && r[7].length <= r[8] && s == ae;
                if (!(d || w))
                    return e;
                c & re && (e[2] = r[2],
                l |= s & re ? 0 : ce);
                var _ = r[3];
                if (_) {
                    var R = e[3];
                    e[3] = R ? Uu(R, _, r[4]) : _,
                    e[4] = R ? yi(e[3], E) : r[4]
                }
                return _ = r[5],
                _ && (R = e[5],
                e[5] = R ? Hu(R, _, r[6]) : _,
                e[6] = R ? yi(e[5], E) : r[6]),
                _ = r[7],
                _ && (e[7] = _),
                c & Q && (e[8] = e[8] == null ? r[8] : Kt(e[8], r[8])),
                e[9] == null && (e[9] = r[9]),
                e[0] = r[0],
                e[1] = l,
                e
            }
            function pg(e) {
                var r = [];
                if (e != null)
                    for (var s in He(e))
                        r.push(s);
                return r
            }
            function dg(e) {
                return Nn.call(e)
            }
            function nh(e, r, s) {
                return r = $t(r === i ? e.length - 1 : r, 0),
                function() {
                    for (var c = arguments, l = -1, d = $t(c.length - r, 0), w = C(d); ++l < d; )
                        w[l] = c[r + l];
                    l = -1;
                    for (var _ = C(r + 1); ++l < r; )
                        _[l] = c[l];
                    return _[r] = s(w),
                    Dt(e, this, _)
                }
            }
            function oh(e, r) {
                return r.length < 2 ? e : zi(e, Er(r, 0, -1))
            }
            function gg(e, r) {
                for (var s = e.length, c = Kt(r.length, s), l = tr(e); c--; ) {
                    var d = r[c];
                    e[c] = ei(d, s) ? l[d] : i
                }
                return e
            }
            function Ba(e, r) {
                if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
                    return e[r]
            }
            var ah = uh(Tu)
              , Us = Tp || function(e, r) {
                return Pe.setTimeout(e, r)
            }
              , Fa = uh(Md);
            function ch(e, r, s) {
                var c = r + "";
                return Fa(e, og(c, yg(ig(c), s)))
            }
            function uh(e) {
                var r = 0
                  , s = 0;
                return function() {
                    var c = Dp()
                      , l = Mt - (c - s);
                    if (s = c,
                    l > 0) {
                        if (++r >= Lt)
                            return arguments[0]
                    } else
                        r = 0;
                    return e.apply(i, arguments)
                }
            }
            function io(e, r) {
                var s = -1
                  , c = e.length
                  , l = c - 1;
                for (r = r === i ? c : r; ++s < r; ) {
                    var d = Ra(s, l)
                      , w = e[d];
                    e[d] = e[s],
                    e[s] = w
                }
                return e.length = r,
                e
            }
            var hh = lg(function(e) {
                var r = [];
                return e.charCodeAt(0) === 46 && r.push(""),
                e.replace(It, function(s, c, l, d) {
                    r.push(l ? d.replace(Mo, "$1") : c || s)
                }),
                r
            });
            function Kr(e) {
                if (typeof e == "string" || pr(e))
                    return e;
                var r = e + "";
                return r == "0" && 1 / e == -le ? "-0" : r
            }
            function Hi(e) {
                if (e != null) {
                    try {
                        return $n.call(e)
                    } catch {}
                    try {
                        return e + ""
                    } catch {}
                }
                return ""
            }
            function yg(e, r) {
                return mr(Oi, function(s) {
                    var c = "_." + s[0];
                    r & s[1] && !Rn(e, c) && e.push(c)
                }),
                e.sort()
            }
            function lh(e) {
                if (e instanceof xe)
                    return e.clone();
                var r = new br(e.__wrapped__,e.__chain__);
                return r.__actions__ = tr(e.__actions__),
                r.__index__ = e.__index__,
                r.__values__ = e.__values__,
                r
            }
            function vg(e, r, s) {
                (s ? Yt(e, r, s) : r === i) ? r = 1 : r = $t(ye(r), 0);
                var c = e == null ? 0 : e.length;
                if (!c || r < 1)
                    return [];
                for (var l = 0, d = 0, w = C(zn(c / r)); l < c; )
                    w[d++] = Er(e, l, l += r);
                return w
            }
            function mg(e) {
                for (var r = -1, s = e == null ? 0 : e.length, c = 0, l = []; ++r < s; ) {
                    var d = e[r];
                    d && (l[c++] = d)
                }
                return l
            }
            function wg() {
                var e = arguments.length;
                if (!e)
                    return [];
                for (var r = C(e - 1), s = arguments[0], c = e; c--; )
                    r[c - 1] = arguments[c];
                return gi(ge(s) ? tr(s) : [s], Ht(r, 1))
            }
            var bg = be(function(e, r) {
                return vt(e) ? Ds(e, Ht(r, 1, vt, !0)) : []
            })
              , _g = be(function(e, r) {
                var s = Ir(r);
                return vt(s) && (s = i),
                vt(e) ? Ds(e, Ht(r, 1, vt, !0), ie(s, 2)) : []
            })
              , Eg = be(function(e, r) {
                var s = Ir(r);
                return vt(s) && (s = i),
                vt(e) ? Ds(e, Ht(r, 1, vt, !0), i, s) : []
            });
            function Ig(e, r, s) {
                var c = e == null ? 0 : e.length;
                return c ? (r = s || r === i ? 1 : ye(r),
                Er(e, r < 0 ? 0 : r, c)) : []
            }
            function xg(e, r, s) {
                var c = e == null ? 0 : e.length;
                return c ? (r = s || r === i ? 1 : ye(r),
                r = c - r,
                Er(e, 0, r < 0 ? 0 : r)) : []
            }
            function Pg(e, r) {
                return e && e.length ? Jn(e, ie(r, 3), !0, !0) : []
            }
            function Sg(e, r) {
                return e && e.length ? Jn(e, ie(r, 3), !0) : []
            }
            function Rg(e, r, s, c) {
                var l = e == null ? 0 : e.length;
                return l ? (s && typeof s != "number" && Yt(e, r, s) && (s = 0,
                c = l),
                wd(e, r, s, c)) : []
            }
            function fh(e, r, s) {
                var c = e == null ? 0 : e.length;
                if (!c)
                    return -1;
                var l = s == null ? 0 : ye(s);
                return l < 0 && (l = $t(c + l, 0)),
                On(e, ie(r, 3), l)
            }
            function ph(e, r, s) {
                var c = e == null ? 0 : e.length;
                if (!c)
                    return -1;
                var l = c - 1;
                return s !== i && (l = ye(s),
                l = s < 0 ? $t(c + l, 0) : Kt(l, c - 1)),
                On(e, ie(r, 3), l, !0)
            }
            function dh(e) {
                var r = e == null ? 0 : e.length;
                return r ? Ht(e, 1) : []
            }
            function Og(e) {
                var r = e == null ? 0 : e.length;
                return r ? Ht(e, le) : []
            }
            function Ag(e, r) {
                var s = e == null ? 0 : e.length;
                return s ? (r = r === i ? 1 : ye(r),
                Ht(e, r)) : []
            }
            function Tg(e) {
                for (var r = -1, s = e == null ? 0 : e.length, c = {}; ++r < s; ) {
                    var l = e[r];
                    c[l[0]] = l[1]
                }
                return c
            }
            function gh(e) {
                return e && e.length ? e[0] : i
            }
            function Cg(e, r, s) {
                var c = e == null ? 0 : e.length;
                if (!c)
                    return -1;
                var l = s == null ? 0 : ye(s);
                return l < 0 && (l = $t(c + l, 0)),
                ts(e, r, l)
            }
            function $g(e) {
                var r = e == null ? 0 : e.length;
                return r ? Er(e, 0, -1) : []
            }
            var Ng = be(function(e) {
                var r = Ye(e, $a);
                return r.length && r[0] === e[0] ? Ea(r) : []
            })
              , Dg = be(function(e) {
                var r = Ir(e)
                  , s = Ye(e, $a);
                return r === Ir(s) ? r = i : s.pop(),
                s.length && s[0] === e[0] ? Ea(s, ie(r, 2)) : []
            })
              , qg = be(function(e) {
                var r = Ir(e)
                  , s = Ye(e, $a);
                return r = typeof r == "function" ? r : i,
                r && s.pop(),
                s.length && s[0] === e[0] ? Ea(s, i, r) : []
            });
            function jg(e, r) {
                return e == null ? "" : $p.call(e, r)
            }
            function Ir(e) {
                var r = e == null ? 0 : e.length;
                return r ? e[r - 1] : i
            }
            function Lg(e, r, s) {
                var c = e == null ? 0 : e.length;
                if (!c)
                    return -1;
                var l = c;
                return s !== i && (l = ye(s),
                l = l < 0 ? $t(c + l, 0) : Kt(l, c - 1)),
                r === r ? yp(e, r, l) : On(e, Jc, l, !0)
            }
            function Mg(e, r) {
                return e && e.length ? Su(e, ye(r)) : i
            }
            var zg = be(yh);
            function yh(e, r) {
                return e && e.length && r && r.length ? Sa(e, r) : e
            }
            function Ug(e, r, s) {
                return e && e.length && r && r.length ? Sa(e, r, ie(s, 2)) : e
            }
            function Hg(e, r, s) {
                return e && e.length && r && r.length ? Sa(e, r, i, s) : e
            }
            var kg = Xr(function(e, r) {
                var s = e == null ? 0 : e.length
                  , c = ma(e, r);
                return Au(e, Ye(r, function(l) {
                    return ei(l, s) ? +l : l
                }).sort(zu)),
                c
            });
            function Kg(e, r) {
                var s = [];
                if (!(e && e.length))
                    return s;
                var c = -1
                  , l = []
                  , d = e.length;
                for (r = ie(r, 3); ++c < d; ) {
                    var w = e[c];
                    r(w, c, e) && (s.push(w),
                    l.push(c))
                }
                return Au(e, l),
                s
            }
            function Va(e) {
                return e == null ? e : jp.call(e)
            }
            function Bg(e, r, s) {
                var c = e == null ? 0 : e.length;
                return c ? (s && typeof s != "number" && Yt(e, r, s) ? (r = 0,
                s = c) : (r = r == null ? 0 : ye(r),
                s = s === i ? c : ye(s)),
                Er(e, r, s)) : []
            }
            function Fg(e, r) {
                return Wn(e, r)
            }
            function Vg(e, r, s) {
                return Aa(e, r, ie(s, 2))
            }
            function Gg(e, r) {
                var s = e == null ? 0 : e.length;
                if (s) {
                    var c = Wn(e, r);
                    if (c < s && $r(e[c], r))
                        return c
                }
                return -1
            }
            function Wg(e, r) {
                return Wn(e, r, !0)
            }
            function Jg(e, r, s) {
                return Aa(e, r, ie(s, 2), !0)
            }
            function Qg(e, r) {
                var s = e == null ? 0 : e.length;
                if (s) {
                    var c = Wn(e, r, !0) - 1;
                    if ($r(e[c], r))
                        return c
                }
                return -1
            }
            function Yg(e) {
                return e && e.length ? Cu(e) : []
            }
            function Zg(e, r) {
                return e && e.length ? Cu(e, ie(r, 2)) : []
            }
            function Xg(e) {
                var r = e == null ? 0 : e.length;
                return r ? Er(e, 1, r) : []
            }
            function ey(e, r, s) {
                return e && e.length ? (r = s || r === i ? 1 : ye(r),
                Er(e, 0, r < 0 ? 0 : r)) : []
            }
            function ty(e, r, s) {
                var c = e == null ? 0 : e.length;
                return c ? (r = s || r === i ? 1 : ye(r),
                r = c - r,
                Er(e, r < 0 ? 0 : r, c)) : []
            }
            function ry(e, r) {
                return e && e.length ? Jn(e, ie(r, 3), !1, !0) : []
            }
            function iy(e, r) {
                return e && e.length ? Jn(e, ie(r, 3)) : []
            }
            var sy = be(function(e) {
                return wi(Ht(e, 1, vt, !0))
            })
              , ny = be(function(e) {
                var r = Ir(e);
                return vt(r) && (r = i),
                wi(Ht(e, 1, vt, !0), ie(r, 2))
            })
              , oy = be(function(e) {
                var r = Ir(e);
                return r = typeof r == "function" ? r : i,
                wi(Ht(e, 1, vt, !0), i, r)
            });
            function ay(e) {
                return e && e.length ? wi(e) : []
            }
            function cy(e, r) {
                return e && e.length ? wi(e, ie(r, 2)) : []
            }
            function uy(e, r) {
                return r = typeof r == "function" ? r : i,
                e && e.length ? wi(e, i, r) : []
            }
            function Ga(e) {
                if (!(e && e.length))
                    return [];
                var r = 0;
                return e = di(e, function(s) {
                    if (vt(s))
                        return r = $t(s.length, r),
                        !0
                }),
                ha(r, function(s) {
                    return Ye(e, aa(s))
                })
            }
            function vh(e, r) {
                if (!(e && e.length))
                    return [];
                var s = Ga(e);
                return r == null ? s : Ye(s, function(c) {
                    return Dt(r, i, c)
                })
            }
            var hy = be(function(e, r) {
                return vt(e) ? Ds(e, r) : []
            })
              , ly = be(function(e) {
                return Ca(di(e, vt))
            })
              , fy = be(function(e) {
                var r = Ir(e);
                return vt(r) && (r = i),
                Ca(di(e, vt), ie(r, 2))
            })
              , py = be(function(e) {
                var r = Ir(e);
                return r = typeof r == "function" ? r : i,
                Ca(di(e, vt), i, r)
            })
              , dy = be(Ga);
            function gy(e, r) {
                return qu(e || [], r || [], Ns)
            }
            function yy(e, r) {
                return qu(e || [], r || [], Ls)
            }
            var vy = be(function(e) {
                var r = e.length
                  , s = r > 1 ? e[r - 1] : i;
                return s = typeof s == "function" ? (e.pop(),
                s) : i,
                vh(e, s)
            });
            function mh(e) {
                var r = f(e);
                return r.__chain__ = !0,
                r
            }
            function my(e, r) {
                return r(e),
                e
            }
            function so(e, r) {
                return r(e)
            }
            var wy = Xr(function(e) {
                var r = e.length
                  , s = r ? e[0] : 0
                  , c = this.__wrapped__
                  , l = function(d) {
                    return ma(d, e)
                };
                return r > 1 || this.__actions__.length || !(c instanceof xe) || !ei(s) ? this.thru(l) : (c = c.slice(s, +s + (r ? 1 : 0)),
                c.__actions__.push({
                    func: so,
                    args: [l],
                    thisArg: i
                }),
                new br(c,this.__chain__).thru(function(d) {
                    return r && !d.length && d.push(i),
                    d
                }))
            });
            function by() {
                return mh(this)
            }
            function _y() {
                return new br(this.value(),this.__chain__)
            }
            function Ey() {
                this.__values__ === i && (this.__values__ = $h(this.value()));
                var e = this.__index__ >= this.__values__.length
                  , r = e ? i : this.__values__[this.__index__++];
                return {
                    done: e,
                    value: r
                }
            }
            function Iy() {
                return this
            }
            function xy(e) {
                for (var r, s = this; s instanceof Kn; ) {
                    var c = lh(s);
                    c.__index__ = 0,
                    c.__values__ = i,
                    r ? l.__wrapped__ = c : r = c;
                    var l = c;
                    s = s.__wrapped__
                }
                return l.__wrapped__ = e,
                r
            }
            function Py() {
                var e = this.__wrapped__;
                if (e instanceof xe) {
                    var r = e;
                    return this.__actions__.length && (r = new xe(this)),
                    r = r.reverse(),
                    r.__actions__.push({
                        func: so,
                        args: [Va],
                        thisArg: i
                    }),
                    new br(r,this.__chain__)
                }
                return this.thru(Va)
            }
            function Sy() {
                return Du(this.__wrapped__, this.__actions__)
            }
            var Ry = Qn(function(e, r, s) {
                De.call(e, s) ? ++e[s] : Yr(e, s, 1)
            });
            function Oy(e, r, s) {
                var c = ge(e) ? Gc : md;
                return s && Yt(e, r, s) && (r = i),
                c(e, ie(r, 3))
            }
            function Ay(e, r) {
                var s = ge(e) ? di : vu;
                return s(e, ie(r, 3))
            }
            var Ty = Fu(fh)
              , Cy = Fu(ph);
            function $y(e, r) {
                return Ht(no(e, r), 1)
            }
            function Ny(e, r) {
                return Ht(no(e, r), le)
            }
            function Dy(e, r, s) {
                return s = s === i ? 1 : ye(s),
                Ht(no(e, r), s)
            }
            function wh(e, r) {
                var s = ge(e) ? mr : mi;
                return s(e, ie(r, 3))
            }
            function bh(e, r) {
                var s = ge(e) ? Xf : yu;
                return s(e, ie(r, 3))
            }
            var qy = Qn(function(e, r, s) {
                De.call(e, s) ? e[s].push(r) : Yr(e, s, [r])
            });
            function jy(e, r, s, c) {
                e = rr(e) ? e : ps(e),
                s = s && !c ? ye(s) : 0;
                var l = e.length;
                return s < 0 && (s = $t(l + s, 0)),
                ho(e) ? s <= l && e.indexOf(r, s) > -1 : !!l && ts(e, r, s) > -1
            }
            var Ly = be(function(e, r, s) {
                var c = -1
                  , l = typeof r == "function"
                  , d = rr(e) ? C(e.length) : [];
                return mi(e, function(w) {
                    d[++c] = l ? Dt(r, w, s) : qs(w, r, s)
                }),
                d
            })
              , My = Qn(function(e, r, s) {
                Yr(e, s, r)
            });
            function no(e, r) {
                var s = ge(e) ? Ye : Iu;
                return s(e, ie(r, 3))
            }
            function zy(e, r, s, c) {
                return e == null ? [] : (ge(r) || (r = r == null ? [] : [r]),
                s = c ? i : s,
                ge(s) || (s = s == null ? [] : [s]),
                Ru(e, r, s))
            }
            var Uy = Qn(function(e, r, s) {
                e[s ? 0 : 1].push(r)
            }, function() {
                return [[], []]
            });
            function Hy(e, r, s) {
                var c = ge(e) ? na : Yc
                  , l = arguments.length < 3;
                return c(e, ie(r, 4), s, l, mi)
            }
            function ky(e, r, s) {
                var c = ge(e) ? ep : Yc
                  , l = arguments.length < 3;
                return c(e, ie(r, 4), s, l, yu)
            }
            function Ky(e, r) {
                var s = ge(e) ? di : vu;
                return s(e, co(ie(r, 3)))
            }
            function By(e) {
                var r = ge(e) ? fu : jd;
                return r(e)
            }
            function Fy(e, r, s) {
                (s ? Yt(e, r, s) : r === i) ? r = 1 : r = ye(r);
                var c = ge(e) ? pd : Ld;
                return c(e, r)
            }
            function Vy(e) {
                var r = ge(e) ? dd : zd;
                return r(e)
            }
            function Gy(e) {
                if (e == null)
                    return 0;
                if (rr(e))
                    return ho(e) ? is(e) : e.length;
                var r = Bt(e);
                return r == me || r == Ce ? e.size : xa(e).length
            }
            function Wy(e, r, s) {
                var c = ge(e) ? oa : Ud;
                return s && Yt(e, r, s) && (r = i),
                c(e, ie(r, 3))
            }
            var Jy = be(function(e, r) {
                if (e == null)
                    return [];
                var s = r.length;
                return s > 1 && Yt(e, r[0], r[1]) ? r = [] : s > 2 && Yt(r[0], r[1], r[2]) && (r = [r[0]]),
                Ru(e, Ht(r, 1), [])
            })
              , oo = Ap || function() {
                return Pe.Date.now()
            }
            ;
            function Qy(e, r) {
                if (typeof r != "function")
                    throw new wr(p);
                return e = ye(e),
                function() {
                    if (--e < 1)
                        return r.apply(this, arguments)
                }
            }
            function _h(e, r, s) {
                return r = s ? i : r,
                r = e && r == null ? e.length : r,
                Zr(e, Q, i, i, i, i, r)
            }
            function Eh(e, r) {
                var s;
                if (typeof r != "function")
                    throw new wr(p);
                return e = ye(e),
                function() {
                    return --e > 0 && (s = r.apply(this, arguments)),
                    e <= 1 && (r = i),
                    s
                }
            }
            var Wa = be(function(e, r, s) {
                var c = re;
                if (s.length) {
                    var l = yi(s, ls(Wa));
                    c |= he
                }
                return Zr(e, c, r, s, l)
            })
              , Ih = be(function(e, r, s) {
                var c = re | oe;
                if (s.length) {
                    var l = yi(s, ls(Ih));
                    c |= he
                }
                return Zr(r, c, e, s, l)
            });
            function xh(e, r, s) {
                r = s ? i : r;
                var c = Zr(e, ae, i, i, i, i, i, r);
                return c.placeholder = xh.placeholder,
                c
            }
            function Ph(e, r, s) {
                r = s ? i : r;
                var c = Zr(e, ee, i, i, i, i, i, r);
                return c.placeholder = Ph.placeholder,
                c
            }
            function Sh(e, r, s) {
                var c, l, d, w, _, R, L = 0, M = !1, U = !1, F = !0;
                if (typeof e != "function")
                    throw new wr(p);
                r = xr(r) || 0,
                it(s) && (M = !!s.leading,
                U = "maxWait"in s,
                d = U ? $t(xr(s.maxWait) || 0, r) : d,
                F = "trailing"in s ? !!s.trailing : F);
                function X(mt) {
                    var Nr = c
                      , ii = l;
                    return c = l = i,
                    L = mt,
                    w = e.apply(ii, Nr),
                    w
                }
                function se(mt) {
                    return L = mt,
                    _ = Us(_e, r),
                    M ? X(mt) : w
                }
                function we(mt) {
                    var Nr = mt - R
                      , ii = mt - L
                      , Fh = r - Nr;
                    return U ? Kt(Fh, d - ii) : Fh
                }
                function ne(mt) {
                    var Nr = mt - R
                      , ii = mt - L;
                    return R === i || Nr >= r || Nr < 0 || U && ii >= d
                }
                function _e() {
                    var mt = oo();
                    if (ne(mt))
                        return Se(mt);
                    _ = Us(_e, we(mt))
                }
                function Se(mt) {
                    return _ = i,
                    F && c ? X(mt) : (c = l = i,
                    w)
                }
                function dr() {
                    _ !== i && ju(_),
                    L = 0,
                    c = R = l = _ = i
                }
                function Zt() {
                    return _ === i ? w : Se(oo())
                }
                function gr() {
                    var mt = oo()
                      , Nr = ne(mt);
                    if (c = arguments,
                    l = this,
                    R = mt,
                    Nr) {
                        if (_ === i)
                            return se(R);
                        if (U)
                            return ju(_),
                            _ = Us(_e, r),
                            X(R)
                    }
                    return _ === i && (_ = Us(_e, r)),
                    w
                }
                return gr.cancel = dr,
                gr.flush = Zt,
                gr
            }
            var Yy = be(function(e, r) {
                return gu(e, 1, r)
            })
              , Zy = be(function(e, r, s) {
                return gu(e, xr(r) || 0, s)
            });
            function Xy(e) {
                return Zr(e, wt)
            }
            function ao(e, r) {
                if (typeof e != "function" || r != null && typeof r != "function")
                    throw new wr(p);
                var s = function() {
                    var c = arguments
                      , l = r ? r.apply(this, c) : c[0]
                      , d = s.cache;
                    if (d.has(l))
                        return d.get(l);
                    var w = e.apply(this, c);
                    return s.cache = d.set(l, w) || d,
                    w
                };
                return s.cache = new (ao.Cache || Qr),
                s
            }
            ao.Cache = Qr;
            function co(e) {
                if (typeof e != "function")
                    throw new wr(p);
                return function() {
                    var r = arguments;
                    switch (r.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, r[0]);
                    case 2:
                        return !e.call(this, r[0], r[1]);
                    case 3:
                        return !e.call(this, r[0], r[1], r[2])
                    }
                    return !e.apply(this, r)
                }
            }
            function ev(e) {
                return Eh(2, e)
            }
            var tv = Hd(function(e, r) {
                r = r.length == 1 && ge(r[0]) ? Ye(r[0], lr(ie())) : Ye(Ht(r, 1), lr(ie()));
                var s = r.length;
                return be(function(c) {
                    for (var l = -1, d = Kt(c.length, s); ++l < d; )
                        c[l] = r[l].call(this, c[l]);
                    return Dt(e, this, c)
                })
            })
              , Ja = be(function(e, r) {
                var s = yi(r, ls(Ja));
                return Zr(e, he, i, r, s)
            })
              , Rh = be(function(e, r) {
                var s = yi(r, ls(Rh));
                return Zr(e, pe, i, r, s)
            })
              , rv = Xr(function(e, r) {
                return Zr(e, ve, i, i, i, r)
            });
            function iv(e, r) {
                if (typeof e != "function")
                    throw new wr(p);
                return r = r === i ? r : ye(r),
                be(e, r)
            }
            function sv(e, r) {
                if (typeof e != "function")
                    throw new wr(p);
                return r = r == null ? 0 : $t(ye(r), 0),
                be(function(s) {
                    var c = s[r]
                      , l = _i(s, 0, r);
                    return c && gi(l, c),
                    Dt(e, this, l)
                })
            }
            function nv(e, r, s) {
                var c = !0
                  , l = !0;
                if (typeof e != "function")
                    throw new wr(p);
                return it(s) && (c = "leading"in s ? !!s.leading : c,
                l = "trailing"in s ? !!s.trailing : l),
                Sh(e, r, {
                    leading: c,
                    maxWait: r,
                    trailing: l
                })
            }
            function ov(e) {
                return _h(e, 1)
            }
            function av(e, r) {
                return Ja(Na(r), e)
            }
            function cv() {
                if (!arguments.length)
                    return [];
                var e = arguments[0];
                return ge(e) ? e : [e]
            }
            function uv(e) {
                return _r(e, j)
            }
            function hv(e, r) {
                return r = typeof r == "function" ? r : i,
                _r(e, j, r)
            }
            function lv(e) {
                return _r(e, O | j)
            }
            function fv(e, r) {
                return r = typeof r == "function" ? r : i,
                _r(e, O | j, r)
            }
            function pv(e, r) {
                return r == null || du(e, r, qt(r))
            }
            function $r(e, r) {
                return e === r || e !== e && r !== r
            }
            var dv = eo(_a)
              , gv = eo(function(e, r) {
                return e >= r
            })
              , ki = bu(function() {
                return arguments
            }()) ? bu : function(e) {
                return pt(e) && De.call(e, "callee") && !ou.call(e, "callee")
            }
              , ge = C.isArray
              , yv = Jt ? lr(Jt) : xd;
            function rr(e) {
                return e != null && uo(e.length) && !ti(e)
            }
            function vt(e) {
                return pt(e) && rr(e)
            }
            function vv(e) {
                return e === !0 || e === !1 || pt(e) && Qt(e) == $
            }
            var Ei = Cp || oc
              , mv = Ar ? lr(Ar) : Pd;
            function wv(e) {
                return pt(e) && e.nodeType === 1 && !Hs(e)
            }
            function bv(e) {
                if (e == null)
                    return !0;
                if (rr(e) && (ge(e) || typeof e == "string" || typeof e.splice == "function" || Ei(e) || fs(e) || ki(e)))
                    return !e.length;
                var r = Bt(e);
                if (r == me || r == Ce)
                    return !e.size;
                if (zs(e))
                    return !xa(e).length;
                for (var s in e)
                    if (De.call(e, s))
                        return !1;
                return !0
            }
            function _v(e, r) {
                return js(e, r)
            }
            function Ev(e, r, s) {
                s = typeof s == "function" ? s : i;
                var c = s ? s(e, r) : i;
                return c === i ? js(e, r, i, s) : !!c
            }
            function Qa(e) {
                if (!pt(e))
                    return !1;
                var r = Qt(e);
                return r == I || r == u || typeof e.message == "string" && typeof e.name == "string" && !Hs(e)
            }
            function Iv(e) {
                return typeof e == "number" && cu(e)
            }
            function ti(e) {
                if (!it(e))
                    return !1;
                var r = Qt(e);
                return r == Z || r == ue || r == D || r == dt
            }
            function Oh(e) {
                return typeof e == "number" && e == ye(e)
            }
            function uo(e) {
                return typeof e == "number" && e > -1 && e % 1 == 0 && e <= k
            }
            function it(e) {
                var r = typeof e;
                return e != null && (r == "object" || r == "function")
            }
            function pt(e) {
                return e != null && typeof e == "object"
            }
            var Ah = vr ? lr(vr) : Rd;
            function xv(e, r) {
                return e === r || Ia(e, r, Ua(r))
            }
            function Pv(e, r, s) {
                return s = typeof s == "function" ? s : i,
                Ia(e, r, Ua(r), s)
            }
            function Sv(e) {
                return Th(e) && e != +e
            }
            function Rv(e) {
                if (hg(e))
                    throw new fe(h);
                return _u(e)
            }
            function Ov(e) {
                return e === null
            }
            function Av(e) {
                return e == null
            }
            function Th(e) {
                return typeof e == "number" || pt(e) && Qt(e) == Re
            }
            function Hs(e) {
                if (!pt(e) || Qt(e) != Ie)
                    return !1;
                var r = jn(e);
                if (r === null)
                    return !0;
                var s = De.call(r, "constructor") && r.constructor;
                return typeof s == "function" && s instanceof s && $n.call(s) == Pp
            }
            var Ya = Ur ? lr(Ur) : Od;
            function Tv(e) {
                return Oh(e) && e >= -k && e <= k
            }
            var Ch = Ss ? lr(Ss) : Ad;
            function ho(e) {
                return typeof e == "string" || !ge(e) && pt(e) && Qt(e) == Be
            }
            function pr(e) {
                return typeof e == "symbol" || pt(e) && Qt(e) == Fe
            }
            var fs = Di ? lr(Di) : Td;
            function Cv(e) {
                return e === i
            }
            function $v(e) {
                return pt(e) && Bt(e) == qe
            }
            function Nv(e) {
                return pt(e) && Qt(e) == Ve
            }
            var Dv = eo(Pa)
              , qv = eo(function(e, r) {
                return e <= r
            });
            function $h(e) {
                if (!e)
                    return [];
                if (rr(e))
                    return ho(e) ? Tr(e) : tr(e);
                if (Os && e[Os])
                    return pp(e[Os]());
                var r = Bt(e)
                  , s = r == me ? fa : r == Ce ? An : ps;
                return s(e)
            }
            function ri(e) {
                if (!e)
                    return e === 0 ? e : 0;
                if (e = xr(e),
                e === le || e === -le) {
                    var r = e < 0 ? -1 : 1;
                    return r * H
                }
                return e === e ? e : 0
            }
            function ye(e) {
                var r = ri(e)
                  , s = r % 1;
                return r === r ? s ? r - s : r : 0
            }
            function Nh(e) {
                return e ? Mi(ye(e), 0, B) : 0
            }
            function xr(e) {
                if (typeof e == "number")
                    return e;
                if (pr(e))
                    return K;
                if (it(e)) {
                    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
                    e = it(r) ? r + "" : r
                }
                if (typeof e != "string")
                    return e === 0 ? e : +e;
                e = Zc(e);
                var s = Ho.test(e);
                return s || Ko.test(e) ? de(e.slice(2), s ? 2 : 8) : Uo.test(e) ? K : +e
            }
            function Dh(e) {
                return kr(e, ir(e))
            }
            function jv(e) {
                return e ? Mi(ye(e), -k, k) : e === 0 ? e : 0
            }
            function $e(e) {
                return e == null ? "" : fr(e)
            }
            var Lv = us(function(e, r) {
                if (zs(r) || rr(r)) {
                    kr(r, qt(r), e);
                    return
                }
                for (var s in r)
                    De.call(r, s) && Ns(e, s, r[s])
            })
              , qh = us(function(e, r) {
                kr(r, ir(r), e)
            })
              , lo = us(function(e, r, s, c) {
                kr(r, ir(r), e, c)
            })
              , Mv = us(function(e, r, s, c) {
                kr(r, qt(r), e, c)
            })
              , zv = Xr(ma);
            function Uv(e, r) {
                var s = cs(e);
                return r == null ? s : pu(s, r)
            }
            var Hv = be(function(e, r) {
                e = He(e);
                var s = -1
                  , c = r.length
                  , l = c > 2 ? r[2] : i;
                for (l && Yt(r[0], r[1], l) && (c = 1); ++s < c; )
                    for (var d = r[s], w = ir(d), _ = -1, R = w.length; ++_ < R; ) {
                        var L = w[_]
                          , M = e[L];
                        (M === i || $r(M, ns[L]) && !De.call(e, L)) && (e[L] = d[L])
                    }
                return e
            })
              , kv = be(function(e) {
                return e.push(i, Zu),
                Dt(jh, i, e)
            });
            function Kv(e, r) {
                return Wc(e, ie(r, 3), Hr)
            }
            function Bv(e, r) {
                return Wc(e, ie(r, 3), ba)
            }
            function Fv(e, r) {
                return e == null ? e : wa(e, ie(r, 3), ir)
            }
            function Vv(e, r) {
                return e == null ? e : mu(e, ie(r, 3), ir)
            }
            function Gv(e, r) {
                return e && Hr(e, ie(r, 3))
            }
            function Wv(e, r) {
                return e && ba(e, ie(r, 3))
            }
            function Jv(e) {
                return e == null ? [] : Vn(e, qt(e))
            }
            function Qv(e) {
                return e == null ? [] : Vn(e, ir(e))
            }
            function Za(e, r, s) {
                var c = e == null ? i : zi(e, r);
                return c === i ? s : c
            }
            function Yv(e, r) {
                return e != null && th(e, r, bd)
            }
            function Xa(e, r) {
                return e != null && th(e, r, _d)
            }
            var Zv = Gu(function(e, r, s) {
                r != null && typeof r.toString != "function" && (r = Nn.call(r)),
                e[r] = s
            }, tc(sr))
              , Xv = Gu(function(e, r, s) {
                r != null && typeof r.toString != "function" && (r = Nn.call(r)),
                De.call(e, r) ? e[r].push(s) : e[r] = [s]
            }, ie)
              , em = be(qs);
            function qt(e) {
                return rr(e) ? lu(e) : xa(e)
            }
            function ir(e) {
                return rr(e) ? lu(e, !0) : Cd(e)
            }
            function tm(e, r) {
                var s = {};
                return r = ie(r, 3),
                Hr(e, function(c, l, d) {
                    Yr(s, r(c, l, d), c)
                }),
                s
            }
            function rm(e, r) {
                var s = {};
                return r = ie(r, 3),
                Hr(e, function(c, l, d) {
                    Yr(s, l, r(c, l, d))
                }),
                s
            }
            var im = us(function(e, r, s) {
                Gn(e, r, s)
            })
              , jh = us(function(e, r, s, c) {
                Gn(e, r, s, c)
            })
              , sm = Xr(function(e, r) {
                var s = {};
                if (e == null)
                    return s;
                var c = !1;
                r = Ye(r, function(d) {
                    return d = bi(d, e),
                    c || (c = d.length > 1),
                    d
                }),
                kr(e, Ma(e), s),
                c && (s = _r(s, O | N | j, Zd));
                for (var l = r.length; l--; )
                    Ta(s, r[l]);
                return s
            });
            function nm(e, r) {
                return Lh(e, co(ie(r)))
            }
            var om = Xr(function(e, r) {
                return e == null ? {} : Nd(e, r)
            });
            function Lh(e, r) {
                if (e == null)
                    return {};
                var s = Ye(Ma(e), function(c) {
                    return [c]
                });
                return r = ie(r),
                Ou(e, s, function(c, l) {
                    return r(c, l[0])
                })
            }
            function am(e, r, s) {
                r = bi(r, e);
                var c = -1
                  , l = r.length;
                for (l || (l = 1,
                e = i); ++c < l; ) {
                    var d = e == null ? i : e[Kr(r[c])];
                    d === i && (c = l,
                    d = s),
                    e = ti(d) ? d.call(e) : d
                }
                return e
            }
            function cm(e, r, s) {
                return e == null ? e : Ls(e, r, s)
            }
            function um(e, r, s, c) {
                return c = typeof c == "function" ? c : i,
                e == null ? e : Ls(e, r, s, c)
            }
            var Mh = Qu(qt)
              , zh = Qu(ir);
            function hm(e, r, s) {
                var c = ge(e)
                  , l = c || Ei(e) || fs(e);
                if (r = ie(r, 4),
                s == null) {
                    var d = e && e.constructor;
                    l ? s = c ? new d : [] : it(e) ? s = ti(d) ? cs(jn(e)) : {} : s = {}
                }
                return (l ? mr : Hr)(e, function(w, _, R) {
                    return r(s, w, _, R)
                }),
                s
            }
            function lm(e, r) {
                return e == null ? !0 : Ta(e, r)
            }
            function fm(e, r, s) {
                return e == null ? e : Nu(e, r, Na(s))
            }
            function pm(e, r, s, c) {
                return c = typeof c == "function" ? c : i,
                e == null ? e : Nu(e, r, Na(s), c)
            }
            function ps(e) {
                return e == null ? [] : la(e, qt(e))
            }
            function dm(e) {
                return e == null ? [] : la(e, ir(e))
            }
            function gm(e, r, s) {
                return s === i && (s = r,
                r = i),
                s !== i && (s = xr(s),
                s = s === s ? s : 0),
                r !== i && (r = xr(r),
                r = r === r ? r : 0),
                Mi(xr(e), r, s)
            }
            function ym(e, r, s) {
                return r = ri(r),
                s === i ? (s = r,
                r = 0) : s = ri(s),
                e = xr(e),
                Ed(e, r, s)
            }
            function vm(e, r, s) {
                if (s && typeof s != "boolean" && Yt(e, r, s) && (r = s = i),
                s === i && (typeof r == "boolean" ? (s = r,
                r = i) : typeof e == "boolean" && (s = e,
                e = i)),
                e === i && r === i ? (e = 0,
                r = 1) : (e = ri(e),
                r === i ? (r = e,
                e = 0) : r = ri(r)),
                e > r) {
                    var c = e;
                    e = r,
                    r = c
                }
                if (s || e % 1 || r % 1) {
                    var l = uu();
                    return Kt(e + l * (r - e + ze("1e-" + ((l + "").length - 1))), r)
                }
                return Ra(e, r)
            }
            var mm = hs(function(e, r, s) {
                return r = r.toLowerCase(),
                e + (s ? Uh(r) : r)
            });
            function Uh(e) {
                return ec($e(e).toLowerCase())
            }
            function Hh(e) {
                return e = $e(e),
                e && e.replace(Gr, cp).replace(ra, "")
            }
            function wm(e, r, s) {
                e = $e(e),
                r = fr(r);
                var c = e.length;
                s = s === i ? c : Mi(ye(s), 0, c);
                var l = s;
                return s -= r.length,
                s >= 0 && e.slice(s, l) == r
            }
            function bm(e) {
                return e = $e(e),
                e && Je.test(e) ? e.replace(Ai, up) : e
            }
            function _m(e) {
                return e = $e(e),
                e && xt.test(e) ? e.replace(ht, "\\$&") : e
            }
            var Em = hs(function(e, r, s) {
                return e + (s ? "-" : "") + r.toLowerCase()
            })
              , Im = hs(function(e, r, s) {
                return e + (s ? " " : "") + r.toLowerCase()
            })
              , xm = Bu("toLowerCase");
            function Pm(e, r, s) {
                e = $e(e),
                r = ye(r);
                var c = r ? is(e) : 0;
                if (!r || c >= r)
                    return e;
                var l = (r - c) / 2;
                return Xn(Un(l), s) + e + Xn(zn(l), s)
            }
            function Sm(e, r, s) {
                e = $e(e),
                r = ye(r);
                var c = r ? is(e) : 0;
                return r && c < r ? e + Xn(r - c, s) : e
            }
            function Rm(e, r, s) {
                e = $e(e),
                r = ye(r);
                var c = r ? is(e) : 0;
                return r && c < r ? Xn(r - c, s) + e : e
            }
            function Om(e, r, s) {
                return s || r == null ? r = 0 : r && (r = +r),
                qp($e(e).replace(lt, ""), r || 0)
            }
            function Am(e, r, s) {
                return (s ? Yt(e, r, s) : r === i) ? r = 1 : r = ye(r),
                Oa($e(e), r)
            }
            function Tm() {
                var e = arguments
                  , r = $e(e[0]);
                return e.length < 3 ? r : r.replace(e[1], e[2])
            }
            var Cm = hs(function(e, r, s) {
                return e + (s ? "_" : "") + r.toLowerCase()
            });
            function $m(e, r, s) {
                return s && typeof s != "number" && Yt(e, r, s) && (r = s = i),
                s = s === i ? B : s >>> 0,
                s ? (e = $e(e),
                e && (typeof r == "string" || r != null && !Ya(r)) && (r = fr(r),
                !r && rs(e)) ? _i(Tr(e), 0, s) : e.split(r, s)) : []
            }
            var Nm = hs(function(e, r, s) {
                return e + (s ? " " : "") + ec(r)
            });
            function Dm(e, r, s) {
                return e = $e(e),
                s = s == null ? 0 : Mi(ye(s), 0, e.length),
                r = fr(r),
                e.slice(s, s + r.length) == r
            }
            function qm(e, r, s) {
                var c = f.templateSettings;
                s && Yt(e, r, s) && (r = i),
                e = $e(e),
                r = lo({}, r, c, Yu);
                var l = lo({}, r.imports, c.imports, Yu), d = qt(l), w = la(l, d), _, R, L = 0, M = r.interpolate || Wi, U = "__p += '", F = pa((r.escape || Wi).source + "|" + M.source + "|" + (M === rt ? zo : Wi).source + "|" + (r.evaluate || Wi).source + "|$", "g"), X = "//# sourceURL=" + (De.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ia + "]") + `
`;
                e.replace(F, function(ne, _e, Se, dr, Zt, gr) {
                    return Se || (Se = dr),
                    U += e.slice(L, gr).replace(Fo, hp),
                    _e && (_ = !0,
                    U += `' +
__e(` + _e + `) +
'`),
                    Zt && (R = !0,
                    U += `';
` + Zt + `;
__p += '`),
                    Se && (U += `' +
((__t = (` + Se + `)) == null ? '' : __t) +
'`),
                    L = gr + ne.length,
                    ne
                }),
                U += `';
`;
                var se = De.call(r, "variable") && r.variable;
                if (!se)
                    U = `with (obj) {
` + U + `
}
`;
                else if (Lo.test(se))
                    throw new fe(y);
                U = (R ? U.replace(Mr, "") : U).replace(Wt, "$1").replace(Vr, "$1;"),
                U = "function(" + (se || "obj") + `) {
` + (se ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (R ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
                var we = Kh(function() {
                    return Te(d, X + "return " + U).apply(i, w)
                });
                if (we.source = U,
                Qa(we))
                    throw we;
                return we
            }
            function jm(e) {
                return $e(e).toLowerCase()
            }
            function Lm(e) {
                return $e(e).toUpperCase()
            }
            function Mm(e, r, s) {
                if (e = $e(e),
                e && (s || r === i))
                    return Zc(e);
                if (!e || !(r = fr(r)))
                    return e;
                var c = Tr(e)
                  , l = Tr(r)
                  , d = Xc(c, l)
                  , w = eu(c, l) + 1;
                return _i(c, d, w).join("")
            }
            function zm(e, r, s) {
                if (e = $e(e),
                e && (s || r === i))
                    return e.slice(0, ru(e) + 1);
                if (!e || !(r = fr(r)))
                    return e;
                var c = Tr(e)
                  , l = eu(c, Tr(r)) + 1;
                return _i(c, 0, l).join("")
            }
            function Um(e, r, s) {
                if (e = $e(e),
                e && (s || r === i))
                    return e.replace(lt, "");
                if (!e || !(r = fr(r)))
                    return e;
                var c = Tr(e)
                  , l = Xc(c, Tr(r));
                return _i(c, l).join("")
            }
            function Hm(e, r) {
                var s = st
                  , c = Ke;
                if (it(r)) {
                    var l = "separator"in r ? r.separator : l;
                    s = "length"in r ? ye(r.length) : s,
                    c = "omission"in r ? fr(r.omission) : c
                }
                e = $e(e);
                var d = e.length;
                if (rs(e)) {
                    var w = Tr(e);
                    d = w.length
                }
                if (s >= d)
                    return e;
                var _ = s - is(c);
                if (_ < 1)
                    return c;
                var R = w ? _i(w, 0, _).join("") : e.slice(0, _);
                if (l === i)
                    return R + c;
                if (w && (_ += R.length - _),
                Ya(l)) {
                    if (e.slice(_).search(l)) {
                        var L, M = R;
                        for (l.global || (l = pa(l.source, $e(yr.exec(l)) + "g")),
                        l.lastIndex = 0; L = l.exec(M); )
                            var U = L.index;
                        R = R.slice(0, U === i ? _ : U)
                    }
                } else if (e.indexOf(fr(l), _) != _) {
                    var F = R.lastIndexOf(l);
                    F > -1 && (R = R.slice(0, F))
                }
                return R + c
            }
            function km(e) {
                return e = $e(e),
                e && at.test(e) ? e.replace(fi, vp) : e
            }
            var Km = hs(function(e, r, s) {
                return e + (s ? " " : "") + r.toUpperCase()
            })
              , ec = Bu("toUpperCase");
            function kh(e, r, s) {
                return e = $e(e),
                r = s ? i : r,
                r === i ? fp(e) ? bp(e) : ip(e) : e.match(r) || []
            }
            var Kh = be(function(e, r) {
                try {
                    return Dt(e, i, r)
                } catch (s) {
                    return Qa(s) ? s : new fe(s)
                }
            })
              , Bm = Xr(function(e, r) {
                return mr(r, function(s) {
                    s = Kr(s),
                    Yr(e, s, Wa(e[s], e))
                }),
                e
            });
            function Fm(e) {
                var r = e == null ? 0 : e.length
                  , s = ie();
                return e = r ? Ye(e, function(c) {
                    if (typeof c[1] != "function")
                        throw new wr(p);
                    return [s(c[0]), c[1]]
                }) : [],
                be(function(c) {
                    for (var l = -1; ++l < r; ) {
                        var d = e[l];
                        if (Dt(d[0], this, c))
                            return Dt(d[1], this, c)
                    }
                })
            }
            function Vm(e) {
                return vd(_r(e, O))
            }
            function tc(e) {
                return function() {
                    return e
                }
            }
            function Gm(e, r) {
                return e == null || e !== e ? r : e
            }
            var Wm = Vu()
              , Jm = Vu(!0);
            function sr(e) {
                return e
            }
            function rc(e) {
                return Eu(typeof e == "function" ? e : _r(e, O))
            }
            function Qm(e) {
                return xu(_r(e, O))
            }
            function Ym(e, r) {
                return Pu(e, _r(r, O))
            }
            var Zm = be(function(e, r) {
                return function(s) {
                    return qs(s, e, r)
                }
            })
              , Xm = be(function(e, r) {
                return function(s) {
                    return qs(e, s, r)
                }
            });
            function ic(e, r, s) {
                var c = qt(r)
                  , l = Vn(r, c);
                s == null && !(it(r) && (l.length || !c.length)) && (s = r,
                r = e,
                e = this,
                l = Vn(r, qt(r)));
                var d = !(it(s) && "chain"in s) || !!s.chain
                  , w = ti(e);
                return mr(l, function(_) {
                    var R = r[_];
                    e[_] = R,
                    w && (e.prototype[_] = function() {
                        var L = this.__chain__;
                        if (d || L) {
                            var M = e(this.__wrapped__)
                              , U = M.__actions__ = tr(this.__actions__);
                            return U.push({
                                func: R,
                                args: arguments,
                                thisArg: e
                            }),
                            M.__chain__ = L,
                            M
                        }
                        return R.apply(e, gi([this.value()], arguments))
                    }
                    )
                }),
                e
            }
            function e0() {
                return Pe._ === this && (Pe._ = Sp),
                this
            }
            function sc() {}
            function t0(e) {
                return e = ye(e),
                be(function(r) {
                    return Su(r, e)
                })
            }
            var r0 = qa(Ye)
              , i0 = qa(Gc)
              , s0 = qa(oa);
            function Bh(e) {
                return ka(e) ? aa(Kr(e)) : Dd(e)
            }
            function n0(e) {
                return function(r) {
                    return e == null ? i : zi(e, r)
                }
            }
            var o0 = Wu()
              , a0 = Wu(!0);
            function nc() {
                return []
            }
            function oc() {
                return !1
            }
            function c0() {
                return {}
            }
            function u0() {
                return ""
            }
            function h0() {
                return !0
            }
            function l0(e, r) {
                if (e = ye(e),
                e < 1 || e > k)
                    return [];
                var s = B
                  , c = Kt(e, B);
                r = ie(r),
                e -= B;
                for (var l = ha(c, r); ++s < e; )
                    r(s);
                return l
            }
            function f0(e) {
                return ge(e) ? Ye(e, Kr) : pr(e) ? [e] : tr(hh($e(e)))
            }
            function p0(e) {
                var r = ++xp;
                return $e(e) + r
            }
            var d0 = Zn(function(e, r) {
                return e + r
            }, 0)
              , g0 = ja("ceil")
              , y0 = Zn(function(e, r) {
                return e / r
            }, 1)
              , v0 = ja("floor");
            function m0(e) {
                return e && e.length ? Fn(e, sr, _a) : i
            }
            function w0(e, r) {
                return e && e.length ? Fn(e, ie(r, 2), _a) : i
            }
            function b0(e) {
                return Qc(e, sr)
            }
            function _0(e, r) {
                return Qc(e, ie(r, 2))
            }
            function E0(e) {
                return e && e.length ? Fn(e, sr, Pa) : i
            }
            function I0(e, r) {
                return e && e.length ? Fn(e, ie(r, 2), Pa) : i
            }
            var x0 = Zn(function(e, r) {
                return e * r
            }, 1)
              , P0 = ja("round")
              , S0 = Zn(function(e, r) {
                return e - r
            }, 0);
            function R0(e) {
                return e && e.length ? ua(e, sr) : 0
            }
            function O0(e, r) {
                return e && e.length ? ua(e, ie(r, 2)) : 0
            }
            return f.after = Qy,
            f.ary = _h,
            f.assign = Lv,
            f.assignIn = qh,
            f.assignInWith = lo,
            f.assignWith = Mv,
            f.at = zv,
            f.before = Eh,
            f.bind = Wa,
            f.bindAll = Bm,
            f.bindKey = Ih,
            f.castArray = cv,
            f.chain = mh,
            f.chunk = vg,
            f.compact = mg,
            f.concat = wg,
            f.cond = Fm,
            f.conforms = Vm,
            f.constant = tc,
            f.countBy = Ry,
            f.create = Uv,
            f.curry = xh,
            f.curryRight = Ph,
            f.debounce = Sh,
            f.defaults = Hv,
            f.defaultsDeep = kv,
            f.defer = Yy,
            f.delay = Zy,
            f.difference = bg,
            f.differenceBy = _g,
            f.differenceWith = Eg,
            f.drop = Ig,
            f.dropRight = xg,
            f.dropRightWhile = Pg,
            f.dropWhile = Sg,
            f.fill = Rg,
            f.filter = Ay,
            f.flatMap = $y,
            f.flatMapDeep = Ny,
            f.flatMapDepth = Dy,
            f.flatten = dh,
            f.flattenDeep = Og,
            f.flattenDepth = Ag,
            f.flip = Xy,
            f.flow = Wm,
            f.flowRight = Jm,
            f.fromPairs = Tg,
            f.functions = Jv,
            f.functionsIn = Qv,
            f.groupBy = qy,
            f.initial = $g,
            f.intersection = Ng,
            f.intersectionBy = Dg,
            f.intersectionWith = qg,
            f.invert = Zv,
            f.invertBy = Xv,
            f.invokeMap = Ly,
            f.iteratee = rc,
            f.keyBy = My,
            f.keys = qt,
            f.keysIn = ir,
            f.map = no,
            f.mapKeys = tm,
            f.mapValues = rm,
            f.matches = Qm,
            f.matchesProperty = Ym,
            f.memoize = ao,
            f.merge = im,
            f.mergeWith = jh,
            f.method = Zm,
            f.methodOf = Xm,
            f.mixin = ic,
            f.negate = co,
            f.nthArg = t0,
            f.omit = sm,
            f.omitBy = nm,
            f.once = ev,
            f.orderBy = zy,
            f.over = r0,
            f.overArgs = tv,
            f.overEvery = i0,
            f.overSome = s0,
            f.partial = Ja,
            f.partialRight = Rh,
            f.partition = Uy,
            f.pick = om,
            f.pickBy = Lh,
            f.property = Bh,
            f.propertyOf = n0,
            f.pull = zg,
            f.pullAll = yh,
            f.pullAllBy = Ug,
            f.pullAllWith = Hg,
            f.pullAt = kg,
            f.range = o0,
            f.rangeRight = a0,
            f.rearg = rv,
            f.reject = Ky,
            f.remove = Kg,
            f.rest = iv,
            f.reverse = Va,
            f.sampleSize = Fy,
            f.set = cm,
            f.setWith = um,
            f.shuffle = Vy,
            f.slice = Bg,
            f.sortBy = Jy,
            f.sortedUniq = Yg,
            f.sortedUniqBy = Zg,
            f.split = $m,
            f.spread = sv,
            f.tail = Xg,
            f.take = ey,
            f.takeRight = ty,
            f.takeRightWhile = ry,
            f.takeWhile = iy,
            f.tap = my,
            f.throttle = nv,
            f.thru = so,
            f.toArray = $h,
            f.toPairs = Mh,
            f.toPairsIn = zh,
            f.toPath = f0,
            f.toPlainObject = Dh,
            f.transform = hm,
            f.unary = ov,
            f.union = sy,
            f.unionBy = ny,
            f.unionWith = oy,
            f.uniq = ay,
            f.uniqBy = cy,
            f.uniqWith = uy,
            f.unset = lm,
            f.unzip = Ga,
            f.unzipWith = vh,
            f.update = fm,
            f.updateWith = pm,
            f.values = ps,
            f.valuesIn = dm,
            f.without = hy,
            f.words = kh,
            f.wrap = av,
            f.xor = ly,
            f.xorBy = fy,
            f.xorWith = py,
            f.zip = dy,
            f.zipObject = gy,
            f.zipObjectDeep = yy,
            f.zipWith = vy,
            f.entries = Mh,
            f.entriesIn = zh,
            f.extend = qh,
            f.extendWith = lo,
            ic(f, f),
            f.add = d0,
            f.attempt = Kh,
            f.camelCase = mm,
            f.capitalize = Uh,
            f.ceil = g0,
            f.clamp = gm,
            f.clone = uv,
            f.cloneDeep = lv,
            f.cloneDeepWith = fv,
            f.cloneWith = hv,
            f.conformsTo = pv,
            f.deburr = Hh,
            f.defaultTo = Gm,
            f.divide = y0,
            f.endsWith = wm,
            f.eq = $r,
            f.escape = bm,
            f.escapeRegExp = _m,
            f.every = Oy,
            f.find = Ty,
            f.findIndex = fh,
            f.findKey = Kv,
            f.findLast = Cy,
            f.findLastIndex = ph,
            f.findLastKey = Bv,
            f.floor = v0,
            f.forEach = wh,
            f.forEachRight = bh,
            f.forIn = Fv,
            f.forInRight = Vv,
            f.forOwn = Gv,
            f.forOwnRight = Wv,
            f.get = Za,
            f.gt = dv,
            f.gte = gv,
            f.has = Yv,
            f.hasIn = Xa,
            f.head = gh,
            f.identity = sr,
            f.includes = jy,
            f.indexOf = Cg,
            f.inRange = ym,
            f.invoke = em,
            f.isArguments = ki,
            f.isArray = ge,
            f.isArrayBuffer = yv,
            f.isArrayLike = rr,
            f.isArrayLikeObject = vt,
            f.isBoolean = vv,
            f.isBuffer = Ei,
            f.isDate = mv,
            f.isElement = wv,
            f.isEmpty = bv,
            f.isEqual = _v,
            f.isEqualWith = Ev,
            f.isError = Qa,
            f.isFinite = Iv,
            f.isFunction = ti,
            f.isInteger = Oh,
            f.isLength = uo,
            f.isMap = Ah,
            f.isMatch = xv,
            f.isMatchWith = Pv,
            f.isNaN = Sv,
            f.isNative = Rv,
            f.isNil = Av,
            f.isNull = Ov,
            f.isNumber = Th,
            f.isObject = it,
            f.isObjectLike = pt,
            f.isPlainObject = Hs,
            f.isRegExp = Ya,
            f.isSafeInteger = Tv,
            f.isSet = Ch,
            f.isString = ho,
            f.isSymbol = pr,
            f.isTypedArray = fs,
            f.isUndefined = Cv,
            f.isWeakMap = $v,
            f.isWeakSet = Nv,
            f.join = jg,
            f.kebabCase = Em,
            f.last = Ir,
            f.lastIndexOf = Lg,
            f.lowerCase = Im,
            f.lowerFirst = xm,
            f.lt = Dv,
            f.lte = qv,
            f.max = m0,
            f.maxBy = w0,
            f.mean = b0,
            f.meanBy = _0,
            f.min = E0,
            f.minBy = I0,
            f.stubArray = nc,
            f.stubFalse = oc,
            f.stubObject = c0,
            f.stubString = u0,
            f.stubTrue = h0,
            f.multiply = x0,
            f.nth = Mg,
            f.noConflict = e0,
            f.noop = sc,
            f.now = oo,
            f.pad = Pm,
            f.padEnd = Sm,
            f.padStart = Rm,
            f.parseInt = Om,
            f.random = vm,
            f.reduce = Hy,
            f.reduceRight = ky,
            f.repeat = Am,
            f.replace = Tm,
            f.result = am,
            f.round = P0,
            f.runInContext = P,
            f.sample = By,
            f.size = Gy,
            f.snakeCase = Cm,
            f.some = Wy,
            f.sortedIndex = Fg,
            f.sortedIndexBy = Vg,
            f.sortedIndexOf = Gg,
            f.sortedLastIndex = Wg,
            f.sortedLastIndexBy = Jg,
            f.sortedLastIndexOf = Qg,
            f.startCase = Nm,
            f.startsWith = Dm,
            f.subtract = S0,
            f.sum = R0,
            f.sumBy = O0,
            f.template = qm,
            f.times = l0,
            f.toFinite = ri,
            f.toInteger = ye,
            f.toLength = Nh,
            f.toLower = jm,
            f.toNumber = xr,
            f.toSafeInteger = jv,
            f.toString = $e,
            f.toUpper = Lm,
            f.trim = Mm,
            f.trimEnd = zm,
            f.trimStart = Um,
            f.truncate = Hm,
            f.unescape = km,
            f.uniqueId = p0,
            f.upperCase = Km,
            f.upperFirst = ec,
            f.each = wh,
            f.eachRight = bh,
            f.first = gh,
            ic(f, function() {
                var e = {};
                return Hr(f, function(r, s) {
                    De.call(f.prototype, s) || (e[s] = r)
                }),
                e
            }(), {
                chain: !1
            }),
            f.VERSION = n,
            mr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                f[e].placeholder = f
            }),
            mr(["drop", "take"], function(e, r) {
                xe.prototype[e] = function(s) {
                    s = s === i ? 1 : $t(ye(s), 0);
                    var c = this.__filtered__ && !r ? new xe(this) : this.clone();
                    return c.__filtered__ ? c.__takeCount__ = Kt(s, c.__takeCount__) : c.__views__.push({
                        size: Kt(s, B),
                        type: e + (c.__dir__ < 0 ? "Right" : "")
                    }),
                    c
                }
                ,
                xe.prototype[e + "Right"] = function(s) {
                    return this.reverse()[e](s).reverse()
                }
            }),
            mr(["filter", "map", "takeWhile"], function(e, r) {
                var s = r + 1
                  , c = s == b || s == J;
                xe.prototype[e] = function(l) {
                    var d = this.clone();
                    return d.__iteratees__.push({
                        iteratee: ie(l, 3),
                        type: s
                    }),
                    d.__filtered__ = d.__filtered__ || c,
                    d
                }
            }),
            mr(["head", "last"], function(e, r) {
                var s = "take" + (r ? "Right" : "");
                xe.prototype[e] = function() {
                    return this[s](1).value()[0]
                }
            }),
            mr(["initial", "tail"], function(e, r) {
                var s = "drop" + (r ? "" : "Right");
                xe.prototype[e] = function() {
                    return this.__filtered__ ? new xe(this) : this[s](1)
                }
            }),
            xe.prototype.compact = function() {
                return this.filter(sr)
            }
            ,
            xe.prototype.find = function(e) {
                return this.filter(e).head()
            }
            ,
            xe.prototype.findLast = function(e) {
                return this.reverse().find(e)
            }
            ,
            xe.prototype.invokeMap = be(function(e, r) {
                return typeof e == "function" ? new xe(this) : this.map(function(s) {
                    return qs(s, e, r)
                })
            }),
            xe.prototype.reject = function(e) {
                return this.filter(co(ie(e)))
            }
            ,
            xe.prototype.slice = function(e, r) {
                e = ye(e);
                var s = this;
                return s.__filtered__ && (e > 0 || r < 0) ? new xe(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)),
                r !== i && (r = ye(r),
                s = r < 0 ? s.dropRight(-r) : s.take(r - e)),
                s)
            }
            ,
            xe.prototype.takeRightWhile = function(e) {
                return this.reverse().takeWhile(e).reverse()
            }
            ,
            xe.prototype.toArray = function() {
                return this.take(B)
            }
            ,
            Hr(xe.prototype, function(e, r) {
                var s = /^(?:filter|find|map|reject)|While$/.test(r)
                  , c = /^(?:head|last)$/.test(r)
                  , l = f[c ? "take" + (r == "last" ? "Right" : "") : r]
                  , d = c || /^find/.test(r);
                l && (f.prototype[r] = function() {
                    var w = this.__wrapped__
                      , _ = c ? [1] : arguments
                      , R = w instanceof xe
                      , L = _[0]
                      , M = R || ge(w)
                      , U = function(_e) {
                        var Se = l.apply(f, gi([_e], _));
                        return c && F ? Se[0] : Se
                    };
                    M && s && typeof L == "function" && L.length != 1 && (R = M = !1);
                    var F = this.__chain__
                      , X = !!this.__actions__.length
                      , se = d && !F
                      , we = R && !X;
                    if (!d && M) {
                        w = we ? w : new xe(this);
                        var ne = e.apply(w, _);
                        return ne.__actions__.push({
                            func: so,
                            args: [U],
                            thisArg: i
                        }),
                        new br(ne,F)
                    }
                    return se && we ? e.apply(this, _) : (ne = this.thru(U),
                    se ? c ? ne.value()[0] : ne.value() : ne)
                }
                )
            }),
            mr(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                var r = Tn[e]
                  , s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                  , c = /^(?:pop|shift)$/.test(e);
                f.prototype[e] = function() {
                    var l = arguments;
                    if (c && !this.__chain__) {
                        var d = this.value();
                        return r.apply(ge(d) ? d : [], l)
                    }
                    return this[s](function(w) {
                        return r.apply(ge(w) ? w : [], l)
                    })
                }
            }),
            Hr(xe.prototype, function(e, r) {
                var s = f[r];
                if (s) {
                    var c = s.name + "";
                    De.call(as, c) || (as[c] = []),
                    as[c].push({
                        name: r,
                        func: s
                    })
                }
            }),
            as[Yn(i, oe).name] = [{
                name: "wrapper",
                func: i
            }],
            xe.prototype.clone = kp,
            xe.prototype.reverse = Kp,
            xe.prototype.value = Bp,
            f.prototype.at = wy,
            f.prototype.chain = by,
            f.prototype.commit = _y,
            f.prototype.next = Ey,
            f.prototype.plant = xy,
            f.prototype.reverse = Py,
            f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = Sy,
            f.prototype.first = f.prototype.head,
            Os && (f.prototype[Os] = Iy),
            f
        }
          , ss = _p();
        yt ? ((yt.exports = ss)._ = ss,
        Ue._ = ss) : Pe._ = ss
    }
    ).call(Ws)
}
)($c, $c.exports);
var RI = Object.defineProperty
  , OI = Object.defineProperties
  , AI = Object.getOwnPropertyDescriptors
  , Ql = Object.getOwnPropertySymbols
  , TI = Object.prototype.hasOwnProperty
  , CI = Object.prototype.propertyIsEnumerable
  , Yl = (a,t,i)=>t in a ? RI(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , mo = (a,t)=>{
    for (var i in t || (t = {}))
        TI.call(t, i) && Yl(a, i, t[i]);
    if (Ql)
        for (var i of Ql(t))
            CI.call(t, i) && Yl(a, i, t[i]);
    return a
}
  , $I = (a,t)=>OI(a, AI(t));
function Si(a, t, i) {
    var n;
    const o = gw(a);
    return ((n = t.rpcMap) == null ? void 0 : n[o.reference]) || `${SI}?chainId=${o.namespace}:${o.reference}&projectId=${i}`
}
function Gi(a) {
    return a.includes(":") ? a.split(":")[1] : a
}
function Qf(a) {
    return a.map(t=>`${t.split(":")[0]}:${t.split(":")[1]}`)
}
function NI(a, t) {
    const i = Object.keys(t.namespaces).filter(o=>o.includes(a));
    if (!i.length)
        return [];
    const n = [];
    return i.forEach(o=>{
        const h = t.namespaces[o].accounts;
        n.push(...h)
    }
    ),
    n
}
function DI(a={}, t={}) {
    const i = Zl(a)
      , n = Zl(t);
    return $c.exports.merge(i, n)
}
function Zl(a) {
    var t, i, n, o;
    const h = {};
    if (!_o(a))
        return h;
    for (const [p,y] of Object.entries(a)) {
        const m = ff(p) ? [p] : y.chains
          , g = y.methods || []
          , E = y.events || []
          , O = y.rpcMap || {}
          , N = Js(p);
        h[N] = $I(mo(mo({}, h[N]), y), {
            chains: uc(m, (t = h[N]) == null ? void 0 : t.chains),
            methods: uc(g, (i = h[N]) == null ? void 0 : i.methods),
            events: uc(E, (n = h[N]) == null ? void 0 : n.events),
            rpcMap: mo(mo({}, O), (o = h[N]) == null ? void 0 : o.rpcMap)
        })
    }
    return h
}
function qI(a) {
    return a.includes(":") ? a.split(":")[2] : a
}
function jI(a) {
    const t = {};
    for (const [i,n] of Object.entries(a)) {
        const o = n.methods || []
          , h = n.events || []
          , p = n.accounts || []
          , y = ff(i) ? [i] : n.chains ? n.chains : Qf(n.accounts);
        t[i] = {
            chains: y,
            methods: o,
            events: h,
            accounts: p
        }
    }
    return t
}
function bc(a) {
    return typeof a == "number" ? a : a.includes("0x") ? parseInt(a, 16) : a.includes(":") ? Number(a.split(":")[1]) : Number(a)
}
const Yf = {}
  , Ze = a=>Yf[a]
  , _c = (a,t)=>{
    Yf[a] = t
}
;
class LI {
    constructor(t) {
        this.name = "polkadot",
        this.namespace = t.namespace,
        this.events = Ze("events"),
        this.client = Ze("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, i) {
        this.httpProviders[t] || this.setHttpProvider(t, i),
        this.chainId = t,
        this.events.emit(li.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter(i=>i.split(":")[1] === this.chainId.toString()).map(i=>i.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(i=>{
            var n;
            const o = Gi(i);
            t[o] = this.createHttpProvider(o, (n = this.namespace.rpcMap) == null ? void 0 : n[i])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , i = this.httpProviders[t];
        if (typeof i > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return i
    }
    setHttpProvider(t, i) {
        const n = this.createHttpProvider(t, i);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, i) {
        const n = i || Si(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new hi(new Ri(n,Ze("disableProviderPing")))
    }
}
class MI {
    constructor(t) {
        this.name = "eip155",
        this.namespace = t.namespace,
        this.events = Ze("events"),
        this.client = Ze("client"),
        this.httpProviders = this.createHttpProviders(),
        this.chainId = parseInt(this.getDefaultChain())
    }
    async request(t) {
        switch (t.request.method) {
        case "eth_requestAccounts":
            return this.getAccounts();
        case "eth_accounts":
            return this.getAccounts();
        case "wallet_switchEthereumChain":
            return await this.handleSwitchChain(t);
        case "eth_chainId":
            return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    setDefaultChain(t, i) {
        this.httpProviders[t] || this.setHttpProvider(parseInt(t), i),
        this.chainId = parseInt(t),
        this.events.emit(li.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId.toString();
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    createHttpProvider(t, i) {
        const n = i || Si(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new hi(new Ri(n,Ze("disableProviderPing")))
    }
    setHttpProvider(t, i) {
        const n = this.createHttpProvider(t, i);
        n && (this.httpProviders[t] = n)
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(i=>{
            var n;
            const o = parseInt(Gi(i));
            t[o] = this.createHttpProvider(o, (n = this.namespace.rpcMap) == null ? void 0 : n[i])
        }
        ),
        t
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(i=>i.split(":")[1] === this.chainId.toString()).map(i=>i.split(":")[2]))] : []
    }
    getHttpProvider() {
        const t = this.chainId
          , i = this.httpProviders[t];
        if (typeof i > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return i
    }
    async handleSwitchChain(t) {
        var i, n;
        let o = t.request.params ? (i = t.request.params[0]) == null ? void 0 : i.chainId : "0x0";
        o = o.startsWith("0x") ? o : `0x${o}`;
        const h = parseInt(o, 16);
        if (this.isChainApproved(h))
            this.setDefaultChain(`${h}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
            await this.client.request({
                topic: t.topic,
                request: {
                    method: t.request.method,
                    params: [{
                        chainId: o
                    }]
                },
                chainId: (n = this.namespace.chains) == null ? void 0 : n[0]
            }),
            this.setDefaultChain(`${h}`);
        else
            throw new Error(`Failed to switch to chain 'eip155:${h}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(t) {
        return this.namespace.chains.includes(`${this.name}:${t}`)
    }
}
class zI {
    constructor(t) {
        this.name = "solana",
        this.namespace = t.namespace,
        this.events = Ze("events"),
        this.client = Ze("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, i) {
        this.httpProviders[t] || this.setHttpProvider(t, i),
        this.chainId = t,
        this.events.emit(li.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(i=>i.split(":")[1] === this.chainId.toString()).map(i=>i.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(i=>{
            var n;
            const o = Gi(i);
            t[o] = this.createHttpProvider(o, (n = this.namespace.rpcMap) == null ? void 0 : n[i])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , i = this.httpProviders[t];
        if (typeof i > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return i
    }
    setHttpProvider(t, i) {
        const n = this.createHttpProvider(t, i);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, i) {
        const n = i || Si(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new hi(new Ri(n,Ze("disableProviderPing")))
    }
}
class UI {
    constructor(t) {
        this.name = "cosmos",
        this.namespace = t.namespace,
        this.events = Ze("events"),
        this.client = Ze("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, i) {
        this.httpProviders[t] || this.setHttpProvider(t, i),
        this.chainId = t,
        this.events.emit(li.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(i=>i.split(":")[1] === this.chainId.toString()).map(i=>i.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(i=>{
            var n;
            const o = Gi(i);
            t[o] = this.createHttpProvider(o, (n = this.namespace.rpcMap) == null ? void 0 : n[i])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , i = this.httpProviders[t];
        if (typeof i > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return i
    }
    setHttpProvider(t, i) {
        const n = this.createHttpProvider(t, i);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, i) {
        const n = i || Si(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new hi(new Ri(n,Ze("disableProviderPing")))
    }
}
class HI {
    constructor(t) {
        this.name = "cip34",
        this.namespace = t.namespace,
        this.events = Ze("events"),
        this.client = Ze("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, i) {
        this.httpProviders[t] || this.setHttpProvider(t, i),
        this.chainId = t,
        this.events.emit(li.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(i=>i.split(":")[1] === this.chainId.toString()).map(i=>i.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(i=>{
            const n = this.getCardanoRPCUrl(i)
              , o = Gi(i);
            t[o] = this.createHttpProvider(o, n)
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , i = this.httpProviders[t];
        if (typeof i > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return i
    }
    getCardanoRPCUrl(t) {
        const i = this.namespace.rpcMap;
        if (i)
            return i[t]
    }
    setHttpProvider(t, i) {
        const n = this.createHttpProvider(t, i);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, i) {
        const n = i || this.getCardanoRPCUrl(t);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new hi(new Ri(n,Ze("disableProviderPing")))
    }
}
class kI {
    constructor(t) {
        this.name = "elrond",
        this.namespace = t.namespace,
        this.events = Ze("events"),
        this.client = Ze("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, i) {
        this.httpProviders[t] || this.setHttpProvider(t, i),
        this.chainId = t,
        this.events.emit(li.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(i=>i.split(":")[1] === this.chainId.toString()).map(i=>i.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(i=>{
            var n;
            const o = Gi(i);
            t[o] = this.createHttpProvider(o, (n = this.namespace.rpcMap) == null ? void 0 : n[i])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , i = this.httpProviders[t];
        if (typeof i > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return i
    }
    setHttpProvider(t, i) {
        const n = this.createHttpProvider(t, i);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, i) {
        const n = i || Si(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new hi(new Ri(n,Ze("disableProviderPing")))
    }
}
class KI {
    constructor(t) {
        this.name = "multiversx",
        this.namespace = t.namespace,
        this.events = Ze("events"),
        this.client = Ze("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, i) {
        this.httpProviders[t] || this.setHttpProvider(t, i),
        this.chainId = t,
        this.events.emit(li.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(i=>i.split(":")[1] === this.chainId.toString()).map(i=>i.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(i=>{
            var n;
            const o = Gi(i);
            t[o] = this.createHttpProvider(o, (n = this.namespace.rpcMap) == null ? void 0 : n[i])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , i = this.httpProviders[t];
        if (typeof i > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return i
    }
    setHttpProvider(t, i) {
        const n = this.createHttpProvider(t, i);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, i) {
        const n = i || Si(t, this.namespace, this.client.core.projectId);
        if (!n)
            throw new Error(`No RPC url provided for chainId: ${t}`);
        return new hi(new Ri(n,Ze("disableProviderPing")))
    }
}
class BI {
    constructor(t) {
        this.name = "near",
        this.namespace = t.namespace,
        this.events = Ze("events"),
        this.client = Ze("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t)
            throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, i) {
        if (this.chainId = t,
        !this.httpProviders[t]) {
            const n = i || Si(`${this.name}:${t}`, this.namespace);
            if (!n)
                throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, n)
        }
        this.events.emit(li.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter(i=>i.split(":")[1] === this.chainId.toString()).map(i=>i.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(i=>{
            var n;
            t[i] = this.createHttpProvider(i, (n = this.namespace.rpcMap) == null ? void 0 : n[i])
        }
        ),
        t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`
          , i = this.httpProviders[t];
        if (typeof i > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
        return i
    }
    setHttpProvider(t, i) {
        const n = this.createHttpProvider(t, i);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, i) {
        const n = i || Si(t, this.namespace);
        return typeof n > "u" ? void 0 : new hi(new Ri(n,Ze("disableProviderPing")))
    }
}
var FI = Object.defineProperty
  , VI = Object.defineProperties
  , GI = Object.getOwnPropertyDescriptors
  , Xl = Object.getOwnPropertySymbols
  , WI = Object.prototype.hasOwnProperty
  , JI = Object.prototype.propertyIsEnumerable
  , ef = (a,t,i)=>t in a ? FI(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , wo = (a,t)=>{
    for (var i in t || (t = {}))
        WI.call(t, i) && ef(a, i, t[i]);
    if (Xl)
        for (var i of Xl(t))
            JI.call(t, i) && ef(a, i, t[i]);
    return a
}
  , Ec = (a,t)=>VI(a, GI(t));
class Fc {
    constructor(t) {
        this.events = new Lc,
        this.rpcProviders = {},
        this.shouldAbortPairingAttempt = !1,
        this.maxPairingAttempts = 10,
        this.disableProviderPing = !1,
        this.providerOpts = t,
        this.logger = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : To(Co({
            level: (t == null ? void 0 : t.logger) || Wl
        })),
        this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || !1
    }
    static async init(t) {
        const i = new Fc(t);
        return await i.initialize(),
        i
    }
    async request(t, i) {
        const [n,o] = this.validateChain(i);
        if (!this.session)
            throw new Error("Please call connect() before request()");
        return await this.getProvider(n).request({
            request: wo({}, t),
            chainId: `${n}:${o}`,
            topic: this.session.topic
        })
    }
    sendAsync(t, i, n) {
        const o = new Date().getTime();
        this.request(t, n).then(h=>i(null, $o(o, h))).catch(h=>i(h, void 0))
    }
    async enable() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }),
        await this.requestAccounts()
    }
    async disconnect() {
        var t;
        if (!this.session)
            throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (t = this.session) == null ? void 0 : t.topic,
            reason: Ft("USER_DISCONNECTED")
        }),
        await this.cleanup()
    }
    async connect(t) {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (this.setNamespaces(t),
        await this.cleanupPendingPairings(),
        !t.skipPairing)
            return await this.pair(t.pairingTopic)
    }
    on(t, i) {
        this.events.on(t, i)
    }
    once(t, i) {
        this.events.once(t, i)
    }
    removeListener(t, i) {
        this.events.removeListener(t, i)
    }
    off(t, i) {
        this.events.off(t, i)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(t) {
        this.shouldAbortPairingAttempt = !1;
        let i = 0;
        do {
            if (this.shouldAbortPairingAttempt)
                throw new Error("Pairing aborted");
            if (i >= this.maxPairingAttempts)
                throw new Error("Max auto pairing attempts reached");
            const {uri: n, approval: o} = await this.client.connect({
                pairingTopic: t,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            n && (this.uri = n,
            this.events.emit("display_uri", n)),
            await o().then(h=>{
                this.session = h,
                this.namespaces || (this.namespaces = jI(h.namespaces),
                this.persist("namespaces", this.namespaces))
            }
            ).catch(h=>{
                if (h.message !== Wf)
                    throw h;
                i++
            }
            )
        } while (!this.session);
        return this.onConnect(),
        this.session
    }
    setDefaultChain(t, i) {
        try {
            if (!this.session)
                return;
            const [n,o] = this.validateChain(t);
            this.getProvider(n).setDefaultChain(o, i)
        } catch (n) {
            if (!/Please call connect/.test(n.message))
                throw n
        }
    }
    async cleanupPendingPairings(t={}) {
        this.logger.info("Cleaning up inactive pairings...");
        const i = this.client.pairing.getAll();
        if (_s(i)) {
            for (const n of i)
                t.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
            this.logger.info(`Inactive pairings cleared: ${i.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"),
        this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
        this.client.session.length) {
            const t = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[t]),
            this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"),
        await this.createClient(),
        await this.checkStorage(),
        this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await dI.init({
            logger: this.providerOpts.logger || Wl,
            relayUrl: this.providerOpts.relayUrl || II,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }),
        this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (!this.session)
            throw new Error("Session not initialized. Please call connect() before enable()");
        const t = [...new Set(Object.keys(this.session.namespaces).map(i=>Js(i)))];
        _c("client", this.client),
        _c("events", this.events),
        _c("disableProviderPing", this.disableProviderPing),
        t.forEach(i=>{
            if (!this.session)
                return;
            const n = NI(i, this.session)
              , o = Qf(n)
              , h = DI(this.namespaces, this.optionalNamespaces)
              , p = Ec(wo({}, h[i]), {
                accounts: n,
                chains: o
            });
            switch (i) {
            case "eip155":
                this.rpcProviders[i] = new MI({
                    namespace: p
                });
                break;
            case "solana":
                this.rpcProviders[i] = new zI({
                    namespace: p
                });
                break;
            case "cosmos":
                this.rpcProviders[i] = new UI({
                    namespace: p
                });
                break;
            case "polkadot":
                this.rpcProviders[i] = new LI({
                    namespace: p
                });
                break;
            case "cip34":
                this.rpcProviders[i] = new HI({
                    namespace: p
                });
                break;
            case "elrond":
                this.rpcProviders[i] = new kI({
                    namespace: p
                });
                break;
            case "multiversx":
                this.rpcProviders[i] = new KI({
                    namespace: p
                });
                break;
            case "near":
                this.rpcProviders[i] = new BI({
                    namespace: p
                });
                break
            }
        }
        )
    }
    registerEventListeners() {
        if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", t=>{
            this.events.emit("session_ping", t)
        }
        ),
        this.client.on("session_event", t=>{
            const {params: i} = t
              , {event: n} = i;
            if (n.name === "accountsChanged") {
                const o = n.data;
                o && _s(o) && this.events.emit("accountsChanged", o.map(qI))
            } else if (n.name === "chainChanged") {
                const o = i.chainId
                  , h = i.event.data
                  , p = Js(o)
                  , y = bc(o) !== bc(h) ? `${p}:${bc(h)}` : o;
                this.onChainChanged(y)
            } else
                this.events.emit(n.name, n.data);
            this.events.emit("session_event", t)
        }
        ),
        this.client.on("session_update", ({topic: t, params: i})=>{
            var n;
            const {namespaces: o} = i
              , h = (n = this.client) == null ? void 0 : n.session.get(t);
            this.session = Ec(wo({}, h), {
                namespaces: o
            }),
            this.onSessionUpdate(),
            this.events.emit("session_update", {
                topic: t,
                params: i
            })
        }
        ),
        this.client.on("session_delete", async t=>{
            await this.cleanup(),
            this.events.emit("session_delete", t),
            this.events.emit("disconnect", Ec(wo({}, Ft("USER_DISCONNECTED")), {
                data: t.topic
            }))
        }
        ),
        this.on(li.DEFAULT_CHAIN_CHANGED, t=>{
            this.onChainChanged(t, !0)
        }
        )
    }
    getProvider(t) {
        if (!this.rpcProviders[t])
            throw new Error(`Provider not found: ${t}`);
        return this.rpcProviders[t]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(t=>{
            var i;
            this.getProvider(t).updateNamespace((i = this.session) == null ? void 0 : i.namespaces[t])
        }
        )
    }
    setNamespaces(t) {
        const {namespaces: i, optionalNamespaces: n, sessionProperties: o} = t;
        i && Object.keys(i).length && (this.namespaces = i),
        n && Object.keys(n).length && (this.optionalNamespaces = n),
        this.sessionProperties = o,
        this.persist("namespaces", i),
        this.persist("optionalNamespaces", n)
    }
    validateChain(t) {
        const [i,n] = (t == null ? void 0 : t.split(":")) || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [i, n];
        if (i && !Object.keys(this.namespaces || {}).map(p=>Js(p)).includes(i))
            throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);
        if (i && n)
            return [i, n];
        const o = Js(Object.keys(this.namespaces)[0])
          , h = this.rpcProviders[o].getDefaultChain();
        return [o, h]
    }
    async requestAccounts() {
        const [t] = this.validateChain();
        return await this.getProvider(t).requestAccounts()
    }
    onChainChanged(t, i=!1) {
        var n;
        if (!this.namespaces)
            return;
        const [o,h] = this.validateChain(t);
        i || this.getProvider(o).setDefaultChain(h),
        ((n = this.namespaces[o]) != null ? n : this.namespaces[`${o}:${h}`]).defaultChain = h,
        this.persist("namespaces", this.namespaces),
        this.events.emit("chainChanged", h)
    }
    onConnect() {
        this.createProviders(),
        this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0,
        this.namespaces = void 0,
        this.optionalNamespaces = void 0,
        this.sessionProperties = void 0,
        this.persist("namespaces", void 0),
        this.persist("optionalNamespaces", void 0),
        this.persist("sessionProperties", void 0),
        await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(t, i) {
        this.client.core.storage.setItem(`${Jl}/${t}`, i)
    }
    async getFromStore(t) {
        return await this.client.core.storage.getItem(`${Jl}/${t}`)
    }
}
const QI = Fc
  , YI = "wc"
  , ZI = "ethereum_provider"
  , XI = `${YI}@2:${ZI}:`
  , ex = "https://rpc.walletconnect.com/v1/"
  , Nc = ["eth_sendTransaction", "personal_sign"]
  , tx = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
  , Dc = ["chainChanged", "accountsChanged"]
  , rx = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var ix = Object.defineProperty
  , sx = Object.defineProperties
  , nx = Object.getOwnPropertyDescriptors
  , tf = Object.getOwnPropertySymbols
  , ox = Object.prototype.hasOwnProperty
  , ax = Object.prototype.propertyIsEnumerable
  , rf = (a,t,i)=>t in a ? ix(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : a[t] = i
  , Ys = (a,t)=>{
    for (var i in t || (t = {}))
        ox.call(t, i) && rf(a, i, t[i]);
    if (tf)
        for (var i of tf(t))
            ax.call(t, i) && rf(a, i, t[i]);
    return a
}
  , sf = (a,t)=>sx(a, nx(t));
function So(a) {
    return Number(a[0].split(":")[1])
}
function Ic(a) {
    return `0x${a.toString(16)}`
}
function cx(a) {
    const {chains: t, optionalChains: i, methods: n, optionalMethods: o, events: h, optionalEvents: p, rpcMap: y} = a;
    if (!_s(t))
        throw new Error("Invalid chains");
    const m = {
        chains: t,
        methods: n || Nc,
        events: h || Dc,
        rpcMap: Ys({}, t.length ? {
            [So(t)]: y[So(t)]
        } : {})
    }
      , g = h == null ? void 0 : h.filter(j=>!Dc.includes(j))
      , E = n == null ? void 0 : n.filter(j=>!Nc.includes(j));
    if (!i && !p && !o && !(g != null && g.length) && !(E != null && E.length))
        return {
            required: t.length ? m : void 0
        };
    const O = (g == null ? void 0 : g.length) && (E == null ? void 0 : E.length) || !i
      , N = {
        chains: [...new Set(O ? m.chains.concat(i || []) : i)],
        methods: [...new Set(m.methods.concat(o != null && o.length ? o : tx))],
        events: [...new Set(m.events.concat(p != null && p.length ? p : rx))],
        rpcMap: y
    };
    return {
        required: t.length ? m : void 0,
        optional: i.length ? N : void 0
    }
}
class Vc {
    constructor() {
        this.events = new Sr.EventEmitter,
        this.namespace = "eip155",
        this.accounts = [],
        this.chainId = 1,
        this.STORAGE_KEY = XI,
        this.on = (t,i)=>(this.events.on(t, i),
        this),
        this.once = (t,i)=>(this.events.once(t, i),
        this),
        this.removeListener = (t,i)=>(this.events.removeListener(t, i),
        this),
        this.off = (t,i)=>(this.events.off(t, i),
        this),
        this.parseAccount = t=>this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t,
        this.signer = {},
        this.rpc = {}
    }
    static async init(t) {
        const i = new Vc;
        return await i.initialize(t),
        i
    }
    async request(t) {
        return await this.signer.request(t, this.formatChainId(this.chainId))
    }
    sendAsync(t, i) {
        this.signer.sendAsync(t, i, this.formatChainId(this.chainId))
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(),
        await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(t) {
        if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(t);
        const {required: i, optional: n} = cx(this.rpc);
        try {
            const o = await new Promise(async(p,y)=>{
                var m;
                this.rpc.showQrModal && ((m = this.modal) == null || m.subscribeModal(g=>{
                    !g.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                    y(new Error("Connection request reset. Please try again.")))
                }
                )),
                await this.signer.connect(sf(Ys({
                    namespaces: Ys({}, i && {
                        [this.namespace]: i
                    })
                }, n && {
                    optionalNamespaces: {
                        [this.namespace]: n
                    }
                }), {
                    pairingTopic: t == null ? void 0 : t.pairingTopic
                })).then(g=>{
                    p(g)
                }
                ).catch(g=>{
                    y(new Error(g.message))
                }
                )
            }
            );
            if (!o)
                return;
            const h = yw(o.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : h),
            this.setAccounts(h),
            this.events.emit("connect", {
                chainId: Ic(this.chainId)
            })
        } catch (o) {
            throw this.signer.logger.error(o),
            o
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(),
        this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", t=>{
            const {params: i} = t
              , {event: n} = i;
            n.name === "accountsChanged" ? (this.accounts = this.parseAccounts(n.data),
            this.events.emit("accountsChanged", this.accounts)) : n.name === "chainChanged" ? this.setChainId(this.formatChainId(n.data)) : this.events.emit(n.name, n.data),
            this.events.emit("session_event", t)
        }
        ),
        this.signer.on("chainChanged", t=>{
            const i = parseInt(t);
            this.chainId = i,
            this.events.emit("chainChanged", Ic(this.chainId)),
            this.persist()
        }
        ),
        this.signer.on("session_update", t=>{
            this.events.emit("session_update", t)
        }
        ),
        this.signer.on("session_delete", t=>{
            this.reset(),
            this.events.emit("session_delete", t),
            this.events.emit("disconnect", sf(Ys({}, Ft("USER_DISCONNECTED")), {
                data: t.topic,
                name: "USER_DISCONNECTED"
            }))
        }
        ),
        this.signer.on("display_uri", t=>{
            var i, n;
            this.rpc.showQrModal && ((i = this.modal) == null || i.closeModal(),
            (n = this.modal) == null || n.openModal({
                uri: t
            })),
            this.events.emit("display_uri", t)
        }
        )
    }
    switchEthereumChain(t) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: t.toString(16)
            }]
        })
    }
    isCompatibleChainId(t) {
        return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(t) {
        return `${this.namespace}:${t}`
    }
    parseChainId(t) {
        return Number(t.split(":")[1])
    }
    setChainIds(t) {
        const i = t.filter(n=>this.isCompatibleChainId(n)).map(n=>this.parseChainId(n));
        i.length && (this.chainId = i[0],
        this.events.emit("chainChanged", Ic(this.chainId)),
        this.persist())
    }
    setChainId(t) {
        if (this.isCompatibleChainId(t)) {
            const i = this.parseChainId(t);
            this.chainId = i,
            this.switchEthereumChain(i)
        }
    }
    parseAccountId(t) {
        const [i,n,o] = t.split(":");
        return {
            chainId: `${i}:${n}`,
            address: o
        }
    }
    setAccounts(t) {
        this.accounts = t.filter(i=>this.parseChainId(this.parseAccountId(i).chainId) === this.chainId).map(i=>this.parseAccountId(i).address),
        this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(t) {
        var i, n;
        const o = (i = t == null ? void 0 : t.chains) != null ? i : []
          , h = (n = t == null ? void 0 : t.optionalChains) != null ? n : []
          , p = o.concat(h);
        if (!p.length)
            throw new Error("No chains specified in either `chains` or `optionalChains`");
        const y = o.length ? (t == null ? void 0 : t.methods) || Nc : []
          , m = o.length ? (t == null ? void 0 : t.events) || Dc : []
          , g = (t == null ? void 0 : t.optionalMethods) || []
          , E = (t == null ? void 0 : t.optionalEvents) || []
          , O = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(p, t.projectId)
          , N = (t == null ? void 0 : t.qrModalOptions) || void 0;
        return {
            chains: o == null ? void 0 : o.map(j=>this.formatChainId(j)),
            optionalChains: h.map(j=>this.formatChainId(j)),
            methods: y,
            events: m,
            optionalMethods: g,
            optionalEvents: E,
            rpcMap: O,
            showQrModal: !!(t != null && t.showQrModal),
            qrModalOptions: N,
            projectId: t.projectId,
            metadata: t.metadata
        }
    }
    buildRpcMap(t, i) {
        const n = {};
        return t.forEach(o=>{
            n[o] = this.getRpcUrl(o, i)
        }
        ),
        n
    }
    async initialize(t) {
        if (this.rpc = this.getRpcConfig(t),
        this.chainId = this.rpc.chains.length ? So(this.rpc.chains) : So(this.rpc.optionalChains),
        this.signer = await QI.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: t.disableProviderPing,
            relayUrl: t.relayUrl,
            storageOptions: t.storageOptions
        }),
        this.registerEventListeners(),
        await this.loadPersistedSession(),
        this.rpc.showQrModal) {
            let i;
            try {
                const {WalletConnectModal: n} = await A0(()=>import("./index-B_XfQ8h8.js").then(o=>o.i), __vite__mapDeps([0, 1, 2, 3, 4]));
                i = n
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (i)
                try {
                    this.modal = new i(Ys({
                        projectId: this.rpc.projectId
                    }, this.rpc.qrModalOptions))
                } catch (n) {
                    throw this.signer.logger.error(n),
                    new Error("Could not generate WalletConnectModal Instance")
                }
        }
    }
    loadConnectOpts(t) {
        if (!t)
            return;
        const {chains: i, optionalChains: n, rpcMap: o} = t;
        i && _s(i) && (this.rpc.chains = i.map(h=>this.formatChainId(h)),
        i.forEach(h=>{
            this.rpc.rpcMap[h] = (o == null ? void 0 : o[h]) || this.getRpcUrl(h)
        }
        )),
        n && _s(n) && (this.rpc.optionalChains = [],
        this.rpc.optionalChains = n == null ? void 0 : n.map(h=>this.formatChainId(h)),
        n.forEach(h=>{
            this.rpc.rpcMap[h] = (o == null ? void 0 : o[h]) || this.getRpcUrl(h)
        }
        ))
    }
    getRpcUrl(t, i) {
        var n;
        return ((n = this.rpc.rpcMap) == null ? void 0 : n[t]) || `${ex}?chainId=eip155:${t}&projectId=${i || this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (!this.session)
            return;
        const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
          , i = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
        this.setChainIds(t ? [this.formatChainId(t)] : i == null ? void 0 : i.accounts),
        this.setAccounts(i == null ? void 0 : i.accounts)
    }
    reset() {
        this.chainId = 1,
        this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(t) {
        return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map(i=>this.parseAccount(i))
    }
}
const Ox = Vc;
export {Ox as EthereumProvider, rx as OPTIONAL_EVENTS, tx as OPTIONAL_METHODS, Dc as REQUIRED_EVENTS, Nc as REQUIRED_METHODS, Vc as default};
