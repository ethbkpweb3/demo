import {c as $, a as _n, g as Mu} from "./react-vendor-CtoQAI7o.js";
import {e as H, p as Ai} from "./wagmi-vendor-C9YtqVWf.js";
import {av as Ru, aw as ic, e as oc} from "./index-C0u5VlO1.js";
function Iu(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const i in n)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(n, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: ()=>n[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var zi = {}
  , fn = {}
  , us = {};
Object.defineProperty(us, "__esModule", {
    value: !0
});
us.walletLogo = void 0;
const Au = (e,t)=>{
    let r;
    switch (e) {
    case "standard":
        return r = t,
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
        return r = t,
        `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
        return r = (.1 * t).toFixed(2),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
        return r = (.25 * t).toFixed(2),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
        return r = (.1 * t).toFixed(2),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
        return r = (.25 * t).toFixed(2),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
        return r = t,
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
    }
}
;
us.walletLogo = Au;
var hs = {};
Object.defineProperty(hs, "__esModule", {
    value: !0
});
hs.LINK_API_URL = void 0;
hs.LINK_API_URL = "https://www.walletlink.org";
var T = {}
  , Wi = {
    exports: {}
};
Wi.exports;
(function(e) {
    (function(t, r) {
        function n(y, o) {
            if (!y)
                throw new Error(o || "Assertion failed")
        }
        function i(y, o) {
            y.super_ = o;
            var h = function() {};
            h.prototype = o.prototype,
            y.prototype = new h,
            y.prototype.constructor = y
        }
        function s(y, o, h) {
            if (s.isBN(y))
                return y;
            this.negative = 0,
            this.words = null,
            this.length = 0,
            this.red = null,
            y !== null && ((o === "le" || o === "be") && (h = o,
            o = 10),
            this._init(y || 0, o || 10, h || "be"))
        }
        typeof t == "object" ? t.exports = s : r.BN = s,
        s.BN = s,
        s.wordSize = 26;
        var a;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? a = window.Buffer : a = H.Buffer
        } catch {}
        s.isBN = function(o) {
            return o instanceof s ? !0 : o !== null && typeof o == "object" && o.constructor.wordSize === s.wordSize && Array.isArray(o.words)
        }
        ,
        s.max = function(o, h) {
            return o.cmp(h) > 0 ? o : h
        }
        ,
        s.min = function(o, h) {
            return o.cmp(h) < 0 ? o : h
        }
        ,
        s.prototype._init = function(o, h, g) {
            if (typeof o == "number")
                return this._initNumber(o, h, g);
            if (typeof o == "object")
                return this._initArray(o, h, g);
            h === "hex" && (h = 16),
            n(h === (h | 0) && h >= 2 && h <= 36),
            o = o.toString().replace(/\s+/g, "");
            var _ = 0;
            o[0] === "-" && (_++,
            this.negative = 1),
            _ < o.length && (h === 16 ? this._parseHex(o, _, g) : (this._parseBase(o, h, _),
            g === "le" && this._initArray(this.toArray(), h, g)))
        }
        ,
        s.prototype._initNumber = function(o, h, g) {
            o < 0 && (this.negative = 1,
            o = -o),
            o < 67108864 ? (this.words = [o & 67108863],
            this.length = 1) : o < 4503599627370496 ? (this.words = [o & 67108863, o / 67108864 & 67108863],
            this.length = 2) : (n(o < 9007199254740992),
            this.words = [o & 67108863, o / 67108864 & 67108863, 1],
            this.length = 3),
            g === "le" && this._initArray(this.toArray(), h, g)
        }
        ,
        s.prototype._initArray = function(o, h, g) {
            if (n(typeof o.length == "number"),
            o.length <= 0)
                return this.words = [0],
                this.length = 1,
                this;
            this.length = Math.ceil(o.length / 3),
            this.words = new Array(this.length);
            for (var _ = 0; _ < this.length; _++)
                this.words[_] = 0;
            var w, S, k = 0;
            if (g === "be")
                for (_ = o.length - 1,
                w = 0; _ >= 0; _ -= 3)
                    S = o[_] | o[_ - 1] << 8 | o[_ - 2] << 16,
                    this.words[w] |= S << k & 67108863,
                    this.words[w + 1] = S >>> 26 - k & 67108863,
                    k += 24,
                    k >= 26 && (k -= 26,
                    w++);
            else if (g === "le")
                for (_ = 0,
                w = 0; _ < o.length; _ += 3)
                    S = o[_] | o[_ + 1] << 8 | o[_ + 2] << 16,
                    this.words[w] |= S << k & 67108863,
                    this.words[w + 1] = S >>> 26 - k & 67108863,
                    k += 24,
                    k >= 26 && (k -= 26,
                    w++);
            return this._strip()
        }
        ;
        function c(y, o) {
            var h = y.charCodeAt(o);
            if (h >= 48 && h <= 57)
                return h - 48;
            if (h >= 65 && h <= 70)
                return h - 55;
            if (h >= 97 && h <= 102)
                return h - 87;
            n(!1, "Invalid character in " + y)
        }
        function d(y, o, h) {
            var g = c(y, h);
            return h - 1 >= o && (g |= c(y, h - 1) << 4),
            g
        }
        s.prototype._parseHex = function(o, h, g) {
            this.length = Math.ceil((o.length - h) / 6),
            this.words = new Array(this.length);
            for (var _ = 0; _ < this.length; _++)
                this.words[_] = 0;
            var w = 0, S = 0, k;
            if (g === "be")
                for (_ = o.length - 1; _ >= h; _ -= 2)
                    k = d(o, h, _) << w,
                    this.words[S] |= k & 67108863,
                    w >= 18 ? (w -= 18,
                    S += 1,
                    this.words[S] |= k >>> 26) : w += 8;
            else {
                var v = o.length - h;
                for (_ = v % 2 === 0 ? h + 1 : h; _ < o.length; _ += 2)
                    k = d(o, h, _) << w,
                    this.words[S] |= k & 67108863,
                    w >= 18 ? (w -= 18,
                    S += 1,
                    this.words[S] |= k >>> 26) : w += 8
            }
            this._strip()
        }
        ;
        function u(y, o, h, g) {
            for (var _ = 0, w = 0, S = Math.min(y.length, h), k = o; k < S; k++) {
                var v = y.charCodeAt(k) - 48;
                _ *= g,
                v >= 49 ? w = v - 49 + 10 : v >= 17 ? w = v - 17 + 10 : w = v,
                n(v >= 0 && w < g, "Invalid character"),
                _ += w
            }
            return _
        }
        s.prototype._parseBase = function(o, h, g) {
            this.words = [0],
            this.length = 1;
            for (var _ = 0, w = 1; w <= 67108863; w *= h)
                _++;
            _--,
            w = w / h | 0;
            for (var S = o.length - g, k = S % _, v = Math.min(S, S - k) + g, l = 0, b = g; b < v; b += _)
                l = u(o, b, b + _, h),
                this.imuln(w),
                this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
            if (k !== 0) {
                var L = 1;
                for (l = u(o, b, o.length, h),
                b = 0; b < k; b++)
                    L *= h;
                this.imuln(L),
                this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l)
            }
            this._strip()
        }
        ,
        s.prototype.copy = function(o) {
            o.words = new Array(this.length);
            for (var h = 0; h < this.length; h++)
                o.words[h] = this.words[h];
            o.length = this.length,
            o.negative = this.negative,
            o.red = this.red
        }
        ;
        function p(y, o) {
            y.words = o.words,
            y.length = o.length,
            y.negative = o.negative,
            y.red = o.red
        }
        if (s.prototype._move = function(o) {
            p(o, this)
        }
        ,
        s.prototype.clone = function() {
            var o = new s(null);
            return this.copy(o),
            o
        }
        ,
        s.prototype._expand = function(o) {
            for (; this.length < o; )
                this.words[this.length++] = 0;
            return this
        }
        ,
        s.prototype._strip = function() {
            for (; this.length > 1 && this.words[this.length - 1] === 0; )
                this.length--;
            return this._normSign()
        }
        ,
        s.prototype._normSign = function() {
            return this.length === 1 && this.words[0] === 0 && (this.negative = 0),
            this
        }
        ,
        typeof Symbol < "u" && typeof Symbol.for == "function")
            try {
                s.prototype[Symbol.for("nodejs.util.inspect.custom")] = f
            } catch {
                s.prototype.inspect = f
            }
        else
            s.prototype.inspect = f;
        function f() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var m = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
          , E = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
          , C = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        s.prototype.toString = function(o, h) {
            o = o || 10,
            h = h | 0 || 1;
            var g;
            if (o === 16 || o === "hex") {
                g = "";
                for (var _ = 0, w = 0, S = 0; S < this.length; S++) {
                    var k = this.words[S]
                      , v = ((k << _ | w) & 16777215).toString(16);
                    w = k >>> 24 - _ & 16777215,
                    _ += 2,
                    _ >= 26 && (_ -= 26,
                    S--),
                    w !== 0 || S !== this.length - 1 ? g = m[6 - v.length] + v + g : g = v + g
                }
                for (w !== 0 && (g = w.toString(16) + g); g.length % h !== 0; )
                    g = "0" + g;
                return this.negative !== 0 && (g = "-" + g),
                g
            }
            if (o === (o | 0) && o >= 2 && o <= 36) {
                var l = E[o]
                  , b = C[o];
                g = "";
                var L = this.clone();
                for (L.negative = 0; !L.isZero(); ) {
                    var O = L.modrn(b).toString(o);
                    L = L.idivn(b),
                    L.isZero() ? g = O + g : g = m[l - O.length] + O + g
                }
                for (this.isZero() && (g = "0" + g); g.length % h !== 0; )
                    g = "0" + g;
                return this.negative !== 0 && (g = "-" + g),
                g
            }
            n(!1, "Base should be between 2 and 36")
        }
        ,
        s.prototype.toNumber = function() {
            var o = this.words[0];
            return this.length === 2 ? o += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? o += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
            this.negative !== 0 ? -o : o
        }
        ,
        s.prototype.toJSON = function() {
            return this.toString(16, 2)
        }
        ,
        a && (s.prototype.toBuffer = function(o, h) {
            return this.toArrayLike(a, o, h)
        }
        ),
        s.prototype.toArray = function(o, h) {
            return this.toArrayLike(Array, o, h)
        }
        ;
        var N = function(o, h) {
            return o.allocUnsafe ? o.allocUnsafe(h) : new o(h)
        };
        s.prototype.toArrayLike = function(o, h, g) {
            this._strip();
            var _ = this.byteLength()
              , w = g || Math.max(1, _);
            n(_ <= w, "byte array longer than desired length"),
            n(w > 0, "Requested array length <= 0");
            var S = N(o, w)
              , k = h === "le" ? "LE" : "BE";
            return this["_toArrayLike" + k](S, _),
            S
        }
        ,
        s.prototype._toArrayLikeLE = function(o, h) {
            for (var g = 0, _ = 0, w = 0, S = 0; w < this.length; w++) {
                var k = this.words[w] << S | _;
                o[g++] = k & 255,
                g < o.length && (o[g++] = k >> 8 & 255),
                g < o.length && (o[g++] = k >> 16 & 255),
                S === 6 ? (g < o.length && (o[g++] = k >> 24 & 255),
                _ = 0,
                S = 0) : (_ = k >>> 24,
                S += 2)
            }
            if (g < o.length)
                for (o[g++] = _; g < o.length; )
                    o[g++] = 0
        }
        ,
        s.prototype._toArrayLikeBE = function(o, h) {
            for (var g = o.length - 1, _ = 0, w = 0, S = 0; w < this.length; w++) {
                var k = this.words[w] << S | _;
                o[g--] = k & 255,
                g >= 0 && (o[g--] = k >> 8 & 255),
                g >= 0 && (o[g--] = k >> 16 & 255),
                S === 6 ? (g >= 0 && (o[g--] = k >> 24 & 255),
                _ = 0,
                S = 0) : (_ = k >>> 24,
                S += 2)
            }
            if (g >= 0)
                for (o[g--] = _; g >= 0; )
                    o[g--] = 0
        }
        ,
        Math.clz32 ? s.prototype._countBits = function(o) {
            return 32 - Math.clz32(o)
        }
        : s.prototype._countBits = function(o) {
            var h = o
              , g = 0;
            return h >= 4096 && (g += 13,
            h >>>= 13),
            h >= 64 && (g += 7,
            h >>>= 7),
            h >= 8 && (g += 4,
            h >>>= 4),
            h >= 2 && (g += 2,
            h >>>= 2),
            g + h
        }
        ,
        s.prototype._zeroBits = function(o) {
            if (o === 0)
                return 26;
            var h = o
              , g = 0;
            return h & 8191 || (g += 13,
            h >>>= 13),
            h & 127 || (g += 7,
            h >>>= 7),
            h & 15 || (g += 4,
            h >>>= 4),
            h & 3 || (g += 2,
            h >>>= 2),
            h & 1 || g++,
            g
        }
        ,
        s.prototype.bitLength = function() {
            var o = this.words[this.length - 1]
              , h = this._countBits(o);
            return (this.length - 1) * 26 + h
        }
        ;
        function M(y) {
            for (var o = new Array(y.bitLength()), h = 0; h < o.length; h++) {
                var g = h / 26 | 0
                  , _ = h % 26;
                o[h] = y.words[g] >>> _ & 1
            }
            return o
        }
        s.prototype.zeroBits = function() {
            if (this.isZero())
                return 0;
            for (var o = 0, h = 0; h < this.length; h++) {
                var g = this._zeroBits(this.words[h]);
                if (o += g,
                g !== 26)
                    break
            }
            return o
        }
        ,
        s.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }
        ,
        s.prototype.toTwos = function(o) {
            return this.negative !== 0 ? this.abs().inotn(o).iaddn(1) : this.clone()
        }
        ,
        s.prototype.fromTwos = function(o) {
            return this.testn(o - 1) ? this.notn(o).iaddn(1).ineg() : this.clone()
        }
        ,
        s.prototype.isNeg = function() {
            return this.negative !== 0
        }
        ,
        s.prototype.neg = function() {
            return this.clone().ineg()
        }
        ,
        s.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1),
            this
        }
        ,
        s.prototype.iuor = function(o) {
            for (; this.length < o.length; )
                this.words[this.length++] = 0;
            for (var h = 0; h < o.length; h++)
                this.words[h] = this.words[h] | o.words[h];
            return this._strip()
        }
        ,
        s.prototype.ior = function(o) {
            return n((this.negative | o.negative) === 0),
            this.iuor(o)
        }
        ,
        s.prototype.or = function(o) {
            return this.length > o.length ? this.clone().ior(o) : o.clone().ior(this)
        }
        ,
        s.prototype.uor = function(o) {
            return this.length > o.length ? this.clone().iuor(o) : o.clone().iuor(this)
        }
        ,
        s.prototype.iuand = function(o) {
            var h;
            this.length > o.length ? h = o : h = this;
            for (var g = 0; g < h.length; g++)
                this.words[g] = this.words[g] & o.words[g];
            return this.length = h.length,
            this._strip()
        }
        ,
        s.prototype.iand = function(o) {
            return n((this.negative | o.negative) === 0),
            this.iuand(o)
        }
        ,
        s.prototype.and = function(o) {
            return this.length > o.length ? this.clone().iand(o) : o.clone().iand(this)
        }
        ,
        s.prototype.uand = function(o) {
            return this.length > o.length ? this.clone().iuand(o) : o.clone().iuand(this)
        }
        ,
        s.prototype.iuxor = function(o) {
            var h, g;
            this.length > o.length ? (h = this,
            g = o) : (h = o,
            g = this);
            for (var _ = 0; _ < g.length; _++)
                this.words[_] = h.words[_] ^ g.words[_];
            if (this !== h)
                for (; _ < h.length; _++)
                    this.words[_] = h.words[_];
            return this.length = h.length,
            this._strip()
        }
        ,
        s.prototype.ixor = function(o) {
            return n((this.negative | o.negative) === 0),
            this.iuxor(o)
        }
        ,
        s.prototype.xor = function(o) {
            return this.length > o.length ? this.clone().ixor(o) : o.clone().ixor(this)
        }
        ,
        s.prototype.uxor = function(o) {
            return this.length > o.length ? this.clone().iuxor(o) : o.clone().iuxor(this)
        }
        ,
        s.prototype.inotn = function(o) {
            n(typeof o == "number" && o >= 0);
            var h = Math.ceil(o / 26) | 0
              , g = o % 26;
            this._expand(h),
            g > 0 && h--;
            for (var _ = 0; _ < h; _++)
                this.words[_] = ~this.words[_] & 67108863;
            return g > 0 && (this.words[_] = ~this.words[_] & 67108863 >> 26 - g),
            this._strip()
        }
        ,
        s.prototype.notn = function(o) {
            return this.clone().inotn(o)
        }
        ,
        s.prototype.setn = function(o, h) {
            n(typeof o == "number" && o >= 0);
            var g = o / 26 | 0
              , _ = o % 26;
            return this._expand(g + 1),
            h ? this.words[g] = this.words[g] | 1 << _ : this.words[g] = this.words[g] & ~(1 << _),
            this._strip()
        }
        ,
        s.prototype.iadd = function(o) {
            var h;
            if (this.negative !== 0 && o.negative === 0)
                return this.negative = 0,
                h = this.isub(o),
                this.negative ^= 1,
                this._normSign();
            if (this.negative === 0 && o.negative !== 0)
                return o.negative = 0,
                h = this.isub(o),
                o.negative = 1,
                h._normSign();
            var g, _;
            this.length > o.length ? (g = this,
            _ = o) : (g = o,
            _ = this);
            for (var w = 0, S = 0; S < _.length; S++)
                h = (g.words[S] | 0) + (_.words[S] | 0) + w,
                this.words[S] = h & 67108863,
                w = h >>> 26;
            for (; w !== 0 && S < g.length; S++)
                h = (g.words[S] | 0) + w,
                this.words[S] = h & 67108863,
                w = h >>> 26;
            if (this.length = g.length,
            w !== 0)
                this.words[this.length] = w,
                this.length++;
            else if (g !== this)
                for (; S < g.length; S++)
                    this.words[S] = g.words[S];
            return this
        }
        ,
        s.prototype.add = function(o) {
            var h;
            return o.negative !== 0 && this.negative === 0 ? (o.negative = 0,
            h = this.sub(o),
            o.negative ^= 1,
            h) : o.negative === 0 && this.negative !== 0 ? (this.negative = 0,
            h = o.sub(this),
            this.negative = 1,
            h) : this.length > o.length ? this.clone().iadd(o) : o.clone().iadd(this)
        }
        ,
        s.prototype.isub = function(o) {
            if (o.negative !== 0) {
                o.negative = 0;
                var h = this.iadd(o);
                return o.negative = 1,
                h._normSign()
            } else if (this.negative !== 0)
                return this.negative = 0,
                this.iadd(o),
                this.negative = 1,
                this._normSign();
            var g = this.cmp(o);
            if (g === 0)
                return this.negative = 0,
                this.length = 1,
                this.words[0] = 0,
                this;
            var _, w;
            g > 0 ? (_ = this,
            w = o) : (_ = o,
            w = this);
            for (var S = 0, k = 0; k < w.length; k++)
                h = (_.words[k] | 0) - (w.words[k] | 0) + S,
                S = h >> 26,
                this.words[k] = h & 67108863;
            for (; S !== 0 && k < _.length; k++)
                h = (_.words[k] | 0) + S,
                S = h >> 26,
                this.words[k] = h & 67108863;
            if (S === 0 && k < _.length && _ !== this)
                for (; k < _.length; k++)
                    this.words[k] = _.words[k];
            return this.length = Math.max(this.length, k),
            _ !== this && (this.negative = 1),
            this._strip()
        }
        ,
        s.prototype.sub = function(o) {
            return this.clone().isub(o)
        }
        ;
        function A(y, o, h) {
            h.negative = o.negative ^ y.negative;
            var g = y.length + o.length | 0;
            h.length = g,
            g = g - 1 | 0;
            var _ = y.words[0] | 0
              , w = o.words[0] | 0
              , S = _ * w
              , k = S & 67108863
              , v = S / 67108864 | 0;
            h.words[0] = k;
            for (var l = 1; l < g; l++) {
                for (var b = v >>> 26, L = v & 67108863, O = Math.min(l, o.length - 1), B = Math.max(0, l - y.length + 1); B <= O; B++) {
                    var ze = l - B | 0;
                    _ = y.words[ze] | 0,
                    w = o.words[B] | 0,
                    S = _ * w + L,
                    b += S / 67108864 | 0,
                    L = S & 67108863
                }
                h.words[l] = L | 0,
                v = b | 0
            }
            return v !== 0 ? h.words[l] = v | 0 : h.length--,
            h._strip()
        }
        var I = function(o, h, g) {
            var _ = o.words, w = h.words, S = g.words, k = 0, v, l, b, L = _[0] | 0, O = L & 8191, B = L >>> 13, ze = _[1] | 0, K = ze & 8191, ee = ze >>> 13, Yr = _[2] | 0, Me = Yr & 8191, Re = Yr >>> 13, en = _[3] | 0, Ie = en & 8191, Ae = en >>> 13, tn = _[4] | 0, Ne = tn & 8191, xe = tn >>> 13, rn = _[5] | 0, Le = rn & 8191, Te = rn >>> 13, nn = _[6] | 0, Pe = nn & 8191, Oe = nn >>> 13, sn = _[7] | 0, $e = sn & 8191, Be = sn >>> 13, fr = _[8] | 0, te = fr & 8191, re = fr >>> 13, pr = _[9] | 0, ne = pr & 8191, se = pr >>> 13, gr = w[0] | 0, ie = gr & 8191, oe = gr >>> 13, mr = w[1] | 0, ae = mr & 8191, ce = mr >>> 13, _r = w[2] | 0, le = _r & 8191, ue = _r >>> 13, vr = w[3] | 0, he = vr & 8191, de = vr >>> 13, yr = w[4] | 0, fe = yr & 8191, pe = yr >>> 13, wr = w[5] | 0, ge = wr & 8191, me = wr >>> 13, br = w[6] | 0, _e = br & 8191, ve = br >>> 13, Er = w[7] | 0, ye = Er & 8191, we = Er >>> 13, Sr = w[8] | 0, be = Sr & 8191, Ee = Sr >>> 13, kr = w[9] | 0, Se = kr & 8191, ke = kr >>> 13;
            g.negative = o.negative ^ h.negative,
            g.length = 19,
            v = Math.imul(O, ie),
            l = Math.imul(O, oe),
            l = l + Math.imul(B, ie) | 0,
            b = Math.imul(B, oe);
            var $t = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + ($t >>> 26) | 0,
            $t &= 67108863,
            v = Math.imul(K, ie),
            l = Math.imul(K, oe),
            l = l + Math.imul(ee, ie) | 0,
            b = Math.imul(ee, oe),
            v = v + Math.imul(O, ae) | 0,
            l = l + Math.imul(O, ce) | 0,
            l = l + Math.imul(B, ae) | 0,
            b = b + Math.imul(B, ce) | 0;
            var Bt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Bt >>> 26) | 0,
            Bt &= 67108863,
            v = Math.imul(Me, ie),
            l = Math.imul(Me, oe),
            l = l + Math.imul(Re, ie) | 0,
            b = Math.imul(Re, oe),
            v = v + Math.imul(K, ae) | 0,
            l = l + Math.imul(K, ce) | 0,
            l = l + Math.imul(ee, ae) | 0,
            b = b + Math.imul(ee, ce) | 0,
            v = v + Math.imul(O, le) | 0,
            l = l + Math.imul(O, ue) | 0,
            l = l + Math.imul(B, le) | 0,
            b = b + Math.imul(B, ue) | 0;
            var Ft = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Ft >>> 26) | 0,
            Ft &= 67108863,
            v = Math.imul(Ie, ie),
            l = Math.imul(Ie, oe),
            l = l + Math.imul(Ae, ie) | 0,
            b = Math.imul(Ae, oe),
            v = v + Math.imul(Me, ae) | 0,
            l = l + Math.imul(Me, ce) | 0,
            l = l + Math.imul(Re, ae) | 0,
            b = b + Math.imul(Re, ce) | 0,
            v = v + Math.imul(K, le) | 0,
            l = l + Math.imul(K, ue) | 0,
            l = l + Math.imul(ee, le) | 0,
            b = b + Math.imul(ee, ue) | 0,
            v = v + Math.imul(O, he) | 0,
            l = l + Math.imul(O, de) | 0,
            l = l + Math.imul(B, he) | 0,
            b = b + Math.imul(B, de) | 0;
            var jt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (jt >>> 26) | 0,
            jt &= 67108863,
            v = Math.imul(Ne, ie),
            l = Math.imul(Ne, oe),
            l = l + Math.imul(xe, ie) | 0,
            b = Math.imul(xe, oe),
            v = v + Math.imul(Ie, ae) | 0,
            l = l + Math.imul(Ie, ce) | 0,
            l = l + Math.imul(Ae, ae) | 0,
            b = b + Math.imul(Ae, ce) | 0,
            v = v + Math.imul(Me, le) | 0,
            l = l + Math.imul(Me, ue) | 0,
            l = l + Math.imul(Re, le) | 0,
            b = b + Math.imul(Re, ue) | 0,
            v = v + Math.imul(K, he) | 0,
            l = l + Math.imul(K, de) | 0,
            l = l + Math.imul(ee, he) | 0,
            b = b + Math.imul(ee, de) | 0,
            v = v + Math.imul(O, fe) | 0,
            l = l + Math.imul(O, pe) | 0,
            l = l + Math.imul(B, fe) | 0,
            b = b + Math.imul(B, pe) | 0;
            var Dt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Dt >>> 26) | 0,
            Dt &= 67108863,
            v = Math.imul(Le, ie),
            l = Math.imul(Le, oe),
            l = l + Math.imul(Te, ie) | 0,
            b = Math.imul(Te, oe),
            v = v + Math.imul(Ne, ae) | 0,
            l = l + Math.imul(Ne, ce) | 0,
            l = l + Math.imul(xe, ae) | 0,
            b = b + Math.imul(xe, ce) | 0,
            v = v + Math.imul(Ie, le) | 0,
            l = l + Math.imul(Ie, ue) | 0,
            l = l + Math.imul(Ae, le) | 0,
            b = b + Math.imul(Ae, ue) | 0,
            v = v + Math.imul(Me, he) | 0,
            l = l + Math.imul(Me, de) | 0,
            l = l + Math.imul(Re, he) | 0,
            b = b + Math.imul(Re, de) | 0,
            v = v + Math.imul(K, fe) | 0,
            l = l + Math.imul(K, pe) | 0,
            l = l + Math.imul(ee, fe) | 0,
            b = b + Math.imul(ee, pe) | 0,
            v = v + Math.imul(O, ge) | 0,
            l = l + Math.imul(O, me) | 0,
            l = l + Math.imul(B, ge) | 0,
            b = b + Math.imul(B, me) | 0;
            var Ht = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Ht >>> 26) | 0,
            Ht &= 67108863,
            v = Math.imul(Pe, ie),
            l = Math.imul(Pe, oe),
            l = l + Math.imul(Oe, ie) | 0,
            b = Math.imul(Oe, oe),
            v = v + Math.imul(Le, ae) | 0,
            l = l + Math.imul(Le, ce) | 0,
            l = l + Math.imul(Te, ae) | 0,
            b = b + Math.imul(Te, ce) | 0,
            v = v + Math.imul(Ne, le) | 0,
            l = l + Math.imul(Ne, ue) | 0,
            l = l + Math.imul(xe, le) | 0,
            b = b + Math.imul(xe, ue) | 0,
            v = v + Math.imul(Ie, he) | 0,
            l = l + Math.imul(Ie, de) | 0,
            l = l + Math.imul(Ae, he) | 0,
            b = b + Math.imul(Ae, de) | 0,
            v = v + Math.imul(Me, fe) | 0,
            l = l + Math.imul(Me, pe) | 0,
            l = l + Math.imul(Re, fe) | 0,
            b = b + Math.imul(Re, pe) | 0,
            v = v + Math.imul(K, ge) | 0,
            l = l + Math.imul(K, me) | 0,
            l = l + Math.imul(ee, ge) | 0,
            b = b + Math.imul(ee, me) | 0,
            v = v + Math.imul(O, _e) | 0,
            l = l + Math.imul(O, ve) | 0,
            l = l + Math.imul(B, _e) | 0,
            b = b + Math.imul(B, ve) | 0;
            var Ut = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Ut >>> 26) | 0,
            Ut &= 67108863,
            v = Math.imul($e, ie),
            l = Math.imul($e, oe),
            l = l + Math.imul(Be, ie) | 0,
            b = Math.imul(Be, oe),
            v = v + Math.imul(Pe, ae) | 0,
            l = l + Math.imul(Pe, ce) | 0,
            l = l + Math.imul(Oe, ae) | 0,
            b = b + Math.imul(Oe, ce) | 0,
            v = v + Math.imul(Le, le) | 0,
            l = l + Math.imul(Le, ue) | 0,
            l = l + Math.imul(Te, le) | 0,
            b = b + Math.imul(Te, ue) | 0,
            v = v + Math.imul(Ne, he) | 0,
            l = l + Math.imul(Ne, de) | 0,
            l = l + Math.imul(xe, he) | 0,
            b = b + Math.imul(xe, de) | 0,
            v = v + Math.imul(Ie, fe) | 0,
            l = l + Math.imul(Ie, pe) | 0,
            l = l + Math.imul(Ae, fe) | 0,
            b = b + Math.imul(Ae, pe) | 0,
            v = v + Math.imul(Me, ge) | 0,
            l = l + Math.imul(Me, me) | 0,
            l = l + Math.imul(Re, ge) | 0,
            b = b + Math.imul(Re, me) | 0,
            v = v + Math.imul(K, _e) | 0,
            l = l + Math.imul(K, ve) | 0,
            l = l + Math.imul(ee, _e) | 0,
            b = b + Math.imul(ee, ve) | 0,
            v = v + Math.imul(O, ye) | 0,
            l = l + Math.imul(O, we) | 0,
            l = l + Math.imul(B, ye) | 0,
            b = b + Math.imul(B, we) | 0;
            var Vt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Vt >>> 26) | 0,
            Vt &= 67108863,
            v = Math.imul(te, ie),
            l = Math.imul(te, oe),
            l = l + Math.imul(re, ie) | 0,
            b = Math.imul(re, oe),
            v = v + Math.imul($e, ae) | 0,
            l = l + Math.imul($e, ce) | 0,
            l = l + Math.imul(Be, ae) | 0,
            b = b + Math.imul(Be, ce) | 0,
            v = v + Math.imul(Pe, le) | 0,
            l = l + Math.imul(Pe, ue) | 0,
            l = l + Math.imul(Oe, le) | 0,
            b = b + Math.imul(Oe, ue) | 0,
            v = v + Math.imul(Le, he) | 0,
            l = l + Math.imul(Le, de) | 0,
            l = l + Math.imul(Te, he) | 0,
            b = b + Math.imul(Te, de) | 0,
            v = v + Math.imul(Ne, fe) | 0,
            l = l + Math.imul(Ne, pe) | 0,
            l = l + Math.imul(xe, fe) | 0,
            b = b + Math.imul(xe, pe) | 0,
            v = v + Math.imul(Ie, ge) | 0,
            l = l + Math.imul(Ie, me) | 0,
            l = l + Math.imul(Ae, ge) | 0,
            b = b + Math.imul(Ae, me) | 0,
            v = v + Math.imul(Me, _e) | 0,
            l = l + Math.imul(Me, ve) | 0,
            l = l + Math.imul(Re, _e) | 0,
            b = b + Math.imul(Re, ve) | 0,
            v = v + Math.imul(K, ye) | 0,
            l = l + Math.imul(K, we) | 0,
            l = l + Math.imul(ee, ye) | 0,
            b = b + Math.imul(ee, we) | 0,
            v = v + Math.imul(O, be) | 0,
            l = l + Math.imul(O, Ee) | 0,
            l = l + Math.imul(B, be) | 0,
            b = b + Math.imul(B, Ee) | 0;
            var zt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (zt >>> 26) | 0,
            zt &= 67108863,
            v = Math.imul(ne, ie),
            l = Math.imul(ne, oe),
            l = l + Math.imul(se, ie) | 0,
            b = Math.imul(se, oe),
            v = v + Math.imul(te, ae) | 0,
            l = l + Math.imul(te, ce) | 0,
            l = l + Math.imul(re, ae) | 0,
            b = b + Math.imul(re, ce) | 0,
            v = v + Math.imul($e, le) | 0,
            l = l + Math.imul($e, ue) | 0,
            l = l + Math.imul(Be, le) | 0,
            b = b + Math.imul(Be, ue) | 0,
            v = v + Math.imul(Pe, he) | 0,
            l = l + Math.imul(Pe, de) | 0,
            l = l + Math.imul(Oe, he) | 0,
            b = b + Math.imul(Oe, de) | 0,
            v = v + Math.imul(Le, fe) | 0,
            l = l + Math.imul(Le, pe) | 0,
            l = l + Math.imul(Te, fe) | 0,
            b = b + Math.imul(Te, pe) | 0,
            v = v + Math.imul(Ne, ge) | 0,
            l = l + Math.imul(Ne, me) | 0,
            l = l + Math.imul(xe, ge) | 0,
            b = b + Math.imul(xe, me) | 0,
            v = v + Math.imul(Ie, _e) | 0,
            l = l + Math.imul(Ie, ve) | 0,
            l = l + Math.imul(Ae, _e) | 0,
            b = b + Math.imul(Ae, ve) | 0,
            v = v + Math.imul(Me, ye) | 0,
            l = l + Math.imul(Me, we) | 0,
            l = l + Math.imul(Re, ye) | 0,
            b = b + Math.imul(Re, we) | 0,
            v = v + Math.imul(K, be) | 0,
            l = l + Math.imul(K, Ee) | 0,
            l = l + Math.imul(ee, be) | 0,
            b = b + Math.imul(ee, Ee) | 0,
            v = v + Math.imul(O, Se) | 0,
            l = l + Math.imul(O, ke) | 0,
            l = l + Math.imul(B, Se) | 0,
            b = b + Math.imul(B, ke) | 0;
            var Wt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Wt >>> 26) | 0,
            Wt &= 67108863,
            v = Math.imul(ne, ae),
            l = Math.imul(ne, ce),
            l = l + Math.imul(se, ae) | 0,
            b = Math.imul(se, ce),
            v = v + Math.imul(te, le) | 0,
            l = l + Math.imul(te, ue) | 0,
            l = l + Math.imul(re, le) | 0,
            b = b + Math.imul(re, ue) | 0,
            v = v + Math.imul($e, he) | 0,
            l = l + Math.imul($e, de) | 0,
            l = l + Math.imul(Be, he) | 0,
            b = b + Math.imul(Be, de) | 0,
            v = v + Math.imul(Pe, fe) | 0,
            l = l + Math.imul(Pe, pe) | 0,
            l = l + Math.imul(Oe, fe) | 0,
            b = b + Math.imul(Oe, pe) | 0,
            v = v + Math.imul(Le, ge) | 0,
            l = l + Math.imul(Le, me) | 0,
            l = l + Math.imul(Te, ge) | 0,
            b = b + Math.imul(Te, me) | 0,
            v = v + Math.imul(Ne, _e) | 0,
            l = l + Math.imul(Ne, ve) | 0,
            l = l + Math.imul(xe, _e) | 0,
            b = b + Math.imul(xe, ve) | 0,
            v = v + Math.imul(Ie, ye) | 0,
            l = l + Math.imul(Ie, we) | 0,
            l = l + Math.imul(Ae, ye) | 0,
            b = b + Math.imul(Ae, we) | 0,
            v = v + Math.imul(Me, be) | 0,
            l = l + Math.imul(Me, Ee) | 0,
            l = l + Math.imul(Re, be) | 0,
            b = b + Math.imul(Re, Ee) | 0,
            v = v + Math.imul(K, Se) | 0,
            l = l + Math.imul(K, ke) | 0,
            l = l + Math.imul(ee, Se) | 0,
            b = b + Math.imul(ee, ke) | 0;
            var qt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (qt >>> 26) | 0,
            qt &= 67108863,
            v = Math.imul(ne, le),
            l = Math.imul(ne, ue),
            l = l + Math.imul(se, le) | 0,
            b = Math.imul(se, ue),
            v = v + Math.imul(te, he) | 0,
            l = l + Math.imul(te, de) | 0,
            l = l + Math.imul(re, he) | 0,
            b = b + Math.imul(re, de) | 0,
            v = v + Math.imul($e, fe) | 0,
            l = l + Math.imul($e, pe) | 0,
            l = l + Math.imul(Be, fe) | 0,
            b = b + Math.imul(Be, pe) | 0,
            v = v + Math.imul(Pe, ge) | 0,
            l = l + Math.imul(Pe, me) | 0,
            l = l + Math.imul(Oe, ge) | 0,
            b = b + Math.imul(Oe, me) | 0,
            v = v + Math.imul(Le, _e) | 0,
            l = l + Math.imul(Le, ve) | 0,
            l = l + Math.imul(Te, _e) | 0,
            b = b + Math.imul(Te, ve) | 0,
            v = v + Math.imul(Ne, ye) | 0,
            l = l + Math.imul(Ne, we) | 0,
            l = l + Math.imul(xe, ye) | 0,
            b = b + Math.imul(xe, we) | 0,
            v = v + Math.imul(Ie, be) | 0,
            l = l + Math.imul(Ie, Ee) | 0,
            l = l + Math.imul(Ae, be) | 0,
            b = b + Math.imul(Ae, Ee) | 0,
            v = v + Math.imul(Me, Se) | 0,
            l = l + Math.imul(Me, ke) | 0,
            l = l + Math.imul(Re, Se) | 0,
            b = b + Math.imul(Re, ke) | 0;
            var Jt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Jt >>> 26) | 0,
            Jt &= 67108863,
            v = Math.imul(ne, he),
            l = Math.imul(ne, de),
            l = l + Math.imul(se, he) | 0,
            b = Math.imul(se, de),
            v = v + Math.imul(te, fe) | 0,
            l = l + Math.imul(te, pe) | 0,
            l = l + Math.imul(re, fe) | 0,
            b = b + Math.imul(re, pe) | 0,
            v = v + Math.imul($e, ge) | 0,
            l = l + Math.imul($e, me) | 0,
            l = l + Math.imul(Be, ge) | 0,
            b = b + Math.imul(Be, me) | 0,
            v = v + Math.imul(Pe, _e) | 0,
            l = l + Math.imul(Pe, ve) | 0,
            l = l + Math.imul(Oe, _e) | 0,
            b = b + Math.imul(Oe, ve) | 0,
            v = v + Math.imul(Le, ye) | 0,
            l = l + Math.imul(Le, we) | 0,
            l = l + Math.imul(Te, ye) | 0,
            b = b + Math.imul(Te, we) | 0,
            v = v + Math.imul(Ne, be) | 0,
            l = l + Math.imul(Ne, Ee) | 0,
            l = l + Math.imul(xe, be) | 0,
            b = b + Math.imul(xe, Ee) | 0,
            v = v + Math.imul(Ie, Se) | 0,
            l = l + Math.imul(Ie, ke) | 0,
            l = l + Math.imul(Ae, Se) | 0,
            b = b + Math.imul(Ae, ke) | 0;
            var Gt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Gt >>> 26) | 0,
            Gt &= 67108863,
            v = Math.imul(ne, fe),
            l = Math.imul(ne, pe),
            l = l + Math.imul(se, fe) | 0,
            b = Math.imul(se, pe),
            v = v + Math.imul(te, ge) | 0,
            l = l + Math.imul(te, me) | 0,
            l = l + Math.imul(re, ge) | 0,
            b = b + Math.imul(re, me) | 0,
            v = v + Math.imul($e, _e) | 0,
            l = l + Math.imul($e, ve) | 0,
            l = l + Math.imul(Be, _e) | 0,
            b = b + Math.imul(Be, ve) | 0,
            v = v + Math.imul(Pe, ye) | 0,
            l = l + Math.imul(Pe, we) | 0,
            l = l + Math.imul(Oe, ye) | 0,
            b = b + Math.imul(Oe, we) | 0,
            v = v + Math.imul(Le, be) | 0,
            l = l + Math.imul(Le, Ee) | 0,
            l = l + Math.imul(Te, be) | 0,
            b = b + Math.imul(Te, Ee) | 0,
            v = v + Math.imul(Ne, Se) | 0,
            l = l + Math.imul(Ne, ke) | 0,
            l = l + Math.imul(xe, Se) | 0,
            b = b + Math.imul(xe, ke) | 0;
            var Zt = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (Zt >>> 26) | 0,
            Zt &= 67108863,
            v = Math.imul(ne, ge),
            l = Math.imul(ne, me),
            l = l + Math.imul(se, ge) | 0,
            b = Math.imul(se, me),
            v = v + Math.imul(te, _e) | 0,
            l = l + Math.imul(te, ve) | 0,
            l = l + Math.imul(re, _e) | 0,
            b = b + Math.imul(re, ve) | 0,
            v = v + Math.imul($e, ye) | 0,
            l = l + Math.imul($e, we) | 0,
            l = l + Math.imul(Be, ye) | 0,
            b = b + Math.imul(Be, we) | 0,
            v = v + Math.imul(Pe, be) | 0,
            l = l + Math.imul(Pe, Ee) | 0,
            l = l + Math.imul(Oe, be) | 0,
            b = b + Math.imul(Oe, Ee) | 0,
            v = v + Math.imul(Le, Se) | 0,
            l = l + Math.imul(Le, ke) | 0,
            l = l + Math.imul(Te, Se) | 0,
            b = b + Math.imul(Te, ke) | 0;
            var ni = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (ni >>> 26) | 0,
            ni &= 67108863,
            v = Math.imul(ne, _e),
            l = Math.imul(ne, ve),
            l = l + Math.imul(se, _e) | 0,
            b = Math.imul(se, ve),
            v = v + Math.imul(te, ye) | 0,
            l = l + Math.imul(te, we) | 0,
            l = l + Math.imul(re, ye) | 0,
            b = b + Math.imul(re, we) | 0,
            v = v + Math.imul($e, be) | 0,
            l = l + Math.imul($e, Ee) | 0,
            l = l + Math.imul(Be, be) | 0,
            b = b + Math.imul(Be, Ee) | 0,
            v = v + Math.imul(Pe, Se) | 0,
            l = l + Math.imul(Pe, ke) | 0,
            l = l + Math.imul(Oe, Se) | 0,
            b = b + Math.imul(Oe, ke) | 0;
            var si = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (si >>> 26) | 0,
            si &= 67108863,
            v = Math.imul(ne, ye),
            l = Math.imul(ne, we),
            l = l + Math.imul(se, ye) | 0,
            b = Math.imul(se, we),
            v = v + Math.imul(te, be) | 0,
            l = l + Math.imul(te, Ee) | 0,
            l = l + Math.imul(re, be) | 0,
            b = b + Math.imul(re, Ee) | 0,
            v = v + Math.imul($e, Se) | 0,
            l = l + Math.imul($e, ke) | 0,
            l = l + Math.imul(Be, Se) | 0,
            b = b + Math.imul(Be, ke) | 0;
            var ii = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (ii >>> 26) | 0,
            ii &= 67108863,
            v = Math.imul(ne, be),
            l = Math.imul(ne, Ee),
            l = l + Math.imul(se, be) | 0,
            b = Math.imul(se, Ee),
            v = v + Math.imul(te, Se) | 0,
            l = l + Math.imul(te, ke) | 0,
            l = l + Math.imul(re, Se) | 0,
            b = b + Math.imul(re, ke) | 0;
            var oi = (k + v | 0) + ((l & 8191) << 13) | 0;
            k = (b + (l >>> 13) | 0) + (oi >>> 26) | 0,
            oi &= 67108863,
            v = Math.imul(ne, Se),
            l = Math.imul(ne, ke),
            l = l + Math.imul(se, Se) | 0,
            b = Math.imul(se, ke);
            var ai = (k + v | 0) + ((l & 8191) << 13) | 0;
            return k = (b + (l >>> 13) | 0) + (ai >>> 26) | 0,
            ai &= 67108863,
            S[0] = $t,
            S[1] = Bt,
            S[2] = Ft,
            S[3] = jt,
            S[4] = Dt,
            S[5] = Ht,
            S[6] = Ut,
            S[7] = Vt,
            S[8] = zt,
            S[9] = Wt,
            S[10] = qt,
            S[11] = Jt,
            S[12] = Gt,
            S[13] = Zt,
            S[14] = ni,
            S[15] = si,
            S[16] = ii,
            S[17] = oi,
            S[18] = ai,
            k !== 0 && (S[19] = k,
            g.length++),
            g
        };
        Math.imul || (I = A);
        function R(y, o, h) {
            h.negative = o.negative ^ y.negative,
            h.length = y.length + o.length;
            for (var g = 0, _ = 0, w = 0; w < h.length - 1; w++) {
                var S = _;
                _ = 0;
                for (var k = g & 67108863, v = Math.min(w, o.length - 1), l = Math.max(0, w - y.length + 1); l <= v; l++) {
                    var b = w - l
                      , L = y.words[b] | 0
                      , O = o.words[l] | 0
                      , B = L * O
                      , ze = B & 67108863;
                    S = S + (B / 67108864 | 0) | 0,
                    ze = ze + k | 0,
                    k = ze & 67108863,
                    S = S + (ze >>> 26) | 0,
                    _ += S >>> 26,
                    S &= 67108863
                }
                h.words[w] = k,
                g = S,
                S = _
            }
            return g !== 0 ? h.words[w] = g : h.length--,
            h._strip()
        }
        function F(y, o, h) {
            return R(y, o, h)
        }
        s.prototype.mulTo = function(o, h) {
            var g, _ = this.length + o.length;
            return this.length === 10 && o.length === 10 ? g = I(this, o, h) : _ < 63 ? g = A(this, o, h) : _ < 1024 ? g = R(this, o, h) : g = F(this, o, h),
            g
        }
        ,
        s.prototype.mul = function(o) {
            var h = new s(null);
            return h.words = new Array(this.length + o.length),
            this.mulTo(o, h)
        }
        ,
        s.prototype.mulf = function(o) {
            var h = new s(null);
            return h.words = new Array(this.length + o.length),
            F(this, o, h)
        }
        ,
        s.prototype.imul = function(o) {
            return this.clone().mulTo(o, this)
        }
        ,
        s.prototype.imuln = function(o) {
            var h = o < 0;
            h && (o = -o),
            n(typeof o == "number"),
            n(o < 67108864);
            for (var g = 0, _ = 0; _ < this.length; _++) {
                var w = (this.words[_] | 0) * o
                  , S = (w & 67108863) + (g & 67108863);
                g >>= 26,
                g += w / 67108864 | 0,
                g += S >>> 26,
                this.words[_] = S & 67108863
            }
            return g !== 0 && (this.words[_] = g,
            this.length++),
            h ? this.ineg() : this
        }
        ,
        s.prototype.muln = function(o) {
            return this.clone().imuln(o)
        }
        ,
        s.prototype.sqr = function() {
            return this.mul(this)
        }
        ,
        s.prototype.isqr = function() {
            return this.imul(this.clone())
        }
        ,
        s.prototype.pow = function(o) {
            var h = M(o);
            if (h.length === 0)
                return new s(1);
            for (var g = this, _ = 0; _ < h.length && h[_] === 0; _++,
            g = g.sqr())
                ;
            if (++_ < h.length)
                for (var w = g.sqr(); _ < h.length; _++,
                w = w.sqr())
                    h[_] !== 0 && (g = g.mul(w));
            return g
        }
        ,
        s.prototype.iushln = function(o) {
            n(typeof o == "number" && o >= 0);
            var h = o % 26, g = (o - h) / 26, _ = 67108863 >>> 26 - h << 26 - h, w;
            if (h !== 0) {
                var S = 0;
                for (w = 0; w < this.length; w++) {
                    var k = this.words[w] & _
                      , v = (this.words[w] | 0) - k << h;
                    this.words[w] = v | S,
                    S = k >>> 26 - h
                }
                S && (this.words[w] = S,
                this.length++)
            }
            if (g !== 0) {
                for (w = this.length - 1; w >= 0; w--)
                    this.words[w + g] = this.words[w];
                for (w = 0; w < g; w++)
                    this.words[w] = 0;
                this.length += g
            }
            return this._strip()
        }
        ,
        s.prototype.ishln = function(o) {
            return n(this.negative === 0),
            this.iushln(o)
        }
        ,
        s.prototype.iushrn = function(o, h, g) {
            n(typeof o == "number" && o >= 0);
            var _;
            h ? _ = (h - h % 26) / 26 : _ = 0;
            var w = o % 26
              , S = Math.min((o - w) / 26, this.length)
              , k = 67108863 ^ 67108863 >>> w << w
              , v = g;
            if (_ -= S,
            _ = Math.max(0, _),
            v) {
                for (var l = 0; l < S; l++)
                    v.words[l] = this.words[l];
                v.length = S
            }
            if (S !== 0)
                if (this.length > S)
                    for (this.length -= S,
                    l = 0; l < this.length; l++)
                        this.words[l] = this.words[l + S];
                else
                    this.words[0] = 0,
                    this.length = 1;
            var b = 0;
            for (l = this.length - 1; l >= 0 && (b !== 0 || l >= _); l--) {
                var L = this.words[l] | 0;
                this.words[l] = b << 26 - w | L >>> w,
                b = L & k
            }
            return v && b !== 0 && (v.words[v.length++] = b),
            this.length === 0 && (this.words[0] = 0,
            this.length = 1),
            this._strip()
        }
        ,
        s.prototype.ishrn = function(o, h, g) {
            return n(this.negative === 0),
            this.iushrn(o, h, g)
        }
        ,
        s.prototype.shln = function(o) {
            return this.clone().ishln(o)
        }
        ,
        s.prototype.ushln = function(o) {
            return this.clone().iushln(o)
        }
        ,
        s.prototype.shrn = function(o) {
            return this.clone().ishrn(o)
        }
        ,
        s.prototype.ushrn = function(o) {
            return this.clone().iushrn(o)
        }
        ,
        s.prototype.testn = function(o) {
            n(typeof o == "number" && o >= 0);
            var h = o % 26
              , g = (o - h) / 26
              , _ = 1 << h;
            if (this.length <= g)
                return !1;
            var w = this.words[g];
            return !!(w & _)
        }
        ,
        s.prototype.imaskn = function(o) {
            n(typeof o == "number" && o >= 0);
            var h = o % 26
              , g = (o - h) / 26;
            if (n(this.negative === 0, "imaskn works only with positive numbers"),
            this.length <= g)
                return this;
            if (h !== 0 && g++,
            this.length = Math.min(g, this.length),
            h !== 0) {
                var _ = 67108863 ^ 67108863 >>> h << h;
                this.words[this.length - 1] &= _
            }
            return this._strip()
        }
        ,
        s.prototype.maskn = function(o) {
            return this.clone().imaskn(o)
        }
        ,
        s.prototype.iaddn = function(o) {
            return n(typeof o == "number"),
            n(o < 67108864),
            o < 0 ? this.isubn(-o) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= o ? (this.words[0] = o - (this.words[0] | 0),
            this.negative = 0,
            this) : (this.negative = 0,
            this.isubn(o),
            this.negative = 1,
            this) : this._iaddn(o)
        }
        ,
        s.prototype._iaddn = function(o) {
            this.words[0] += o;
            for (var h = 0; h < this.length && this.words[h] >= 67108864; h++)
                this.words[h] -= 67108864,
                h === this.length - 1 ? this.words[h + 1] = 1 : this.words[h + 1]++;
            return this.length = Math.max(this.length, h + 1),
            this
        }
        ,
        s.prototype.isubn = function(o) {
            if (n(typeof o == "number"),
            n(o < 67108864),
            o < 0)
                return this.iaddn(-o);
            if (this.negative !== 0)
                return this.negative = 0,
                this.iaddn(o),
                this.negative = 1,
                this;
            if (this.words[0] -= o,
            this.length === 1 && this.words[0] < 0)
                this.words[0] = -this.words[0],
                this.negative = 1;
            else
                for (var h = 0; h < this.length && this.words[h] < 0; h++)
                    this.words[h] += 67108864,
                    this.words[h + 1] -= 1;
            return this._strip()
        }
        ,
        s.prototype.addn = function(o) {
            return this.clone().iaddn(o)
        }
        ,
        s.prototype.subn = function(o) {
            return this.clone().isubn(o)
        }
        ,
        s.prototype.iabs = function() {
            return this.negative = 0,
            this
        }
        ,
        s.prototype.abs = function() {
            return this.clone().iabs()
        }
        ,
        s.prototype._ishlnsubmul = function(o, h, g) {
            var _ = o.length + g, w;
            this._expand(_);
            var S, k = 0;
            for (w = 0; w < o.length; w++) {
                S = (this.words[w + g] | 0) + k;
                var v = (o.words[w] | 0) * h;
                S -= v & 67108863,
                k = (S >> 26) - (v / 67108864 | 0),
                this.words[w + g] = S & 67108863
            }
            for (; w < this.length - g; w++)
                S = (this.words[w + g] | 0) + k,
                k = S >> 26,
                this.words[w + g] = S & 67108863;
            if (k === 0)
                return this._strip();
            for (n(k === -1),
            k = 0,
            w = 0; w < this.length; w++)
                S = -(this.words[w] | 0) + k,
                k = S >> 26,
                this.words[w] = S & 67108863;
            return this.negative = 1,
            this._strip()
        }
        ,
        s.prototype._wordDiv = function(o, h) {
            var g = this.length - o.length
              , _ = this.clone()
              , w = o
              , S = w.words[w.length - 1] | 0
              , k = this._countBits(S);
            g = 26 - k,
            g !== 0 && (w = w.ushln(g),
            _.iushln(g),
            S = w.words[w.length - 1] | 0);
            var v = _.length - w.length, l;
            if (h !== "mod") {
                l = new s(null),
                l.length = v + 1,
                l.words = new Array(l.length);
                for (var b = 0; b < l.length; b++)
                    l.words[b] = 0
            }
            var L = _.clone()._ishlnsubmul(w, 1, v);
            L.negative === 0 && (_ = L,
            l && (l.words[v] = 1));
            for (var O = v - 1; O >= 0; O--) {
                var B = (_.words[w.length + O] | 0) * 67108864 + (_.words[w.length + O - 1] | 0);
                for (B = Math.min(B / S | 0, 67108863),
                _._ishlnsubmul(w, B, O); _.negative !== 0; )
                    B--,
                    _.negative = 0,
                    _._ishlnsubmul(w, 1, O),
                    _.isZero() || (_.negative ^= 1);
                l && (l.words[O] = B)
            }
            return l && l._strip(),
            _._strip(),
            h !== "div" && g !== 0 && _.iushrn(g),
            {
                div: l || null,
                mod: _
            }
        }
        ,
        s.prototype.divmod = function(o, h, g) {
            if (n(!o.isZero()),
            this.isZero())
                return {
                    div: new s(0),
                    mod: new s(0)
                };
            var _, w, S;
            return this.negative !== 0 && o.negative === 0 ? (S = this.neg().divmod(o, h),
            h !== "mod" && (_ = S.div.neg()),
            h !== "div" && (w = S.mod.neg(),
            g && w.negative !== 0 && w.iadd(o)),
            {
                div: _,
                mod: w
            }) : this.negative === 0 && o.negative !== 0 ? (S = this.divmod(o.neg(), h),
            h !== "mod" && (_ = S.div.neg()),
            {
                div: _,
                mod: S.mod
            }) : this.negative & o.negative ? (S = this.neg().divmod(o.neg(), h),
            h !== "div" && (w = S.mod.neg(),
            g && w.negative !== 0 && w.isub(o)),
            {
                div: S.div,
                mod: w
            }) : o.length > this.length || this.cmp(o) < 0 ? {
                div: new s(0),
                mod: this
            } : o.length === 1 ? h === "div" ? {
                div: this.divn(o.words[0]),
                mod: null
            } : h === "mod" ? {
                div: null,
                mod: new s(this.modrn(o.words[0]))
            } : {
                div: this.divn(o.words[0]),
                mod: new s(this.modrn(o.words[0]))
            } : this._wordDiv(o, h)
        }
        ,
        s.prototype.div = function(o) {
            return this.divmod(o, "div", !1).div
        }
        ,
        s.prototype.mod = function(o) {
            return this.divmod(o, "mod", !1).mod
        }
        ,
        s.prototype.umod = function(o) {
            return this.divmod(o, "mod", !0).mod
        }
        ,
        s.prototype.divRound = function(o) {
            var h = this.divmod(o);
            if (h.mod.isZero())
                return h.div;
            var g = h.div.negative !== 0 ? h.mod.isub(o) : h.mod
              , _ = o.ushrn(1)
              , w = o.andln(1)
              , S = g.cmp(_);
            return S < 0 || w === 1 && S === 0 ? h.div : h.div.negative !== 0 ? h.div.isubn(1) : h.div.iaddn(1)
        }
        ,
        s.prototype.modrn = function(o) {
            var h = o < 0;
            h && (o = -o),
            n(o <= 67108863);
            for (var g = (1 << 26) % o, _ = 0, w = this.length - 1; w >= 0; w--)
                _ = (g * _ + (this.words[w] | 0)) % o;
            return h ? -_ : _
        }
        ,
        s.prototype.modn = function(o) {
            return this.modrn(o)
        }
        ,
        s.prototype.idivn = function(o) {
            var h = o < 0;
            h && (o = -o),
            n(o <= 67108863);
            for (var g = 0, _ = this.length - 1; _ >= 0; _--) {
                var w = (this.words[_] | 0) + g * 67108864;
                this.words[_] = w / o | 0,
                g = w % o
            }
            return this._strip(),
            h ? this.ineg() : this
        }
        ,
        s.prototype.divn = function(o) {
            return this.clone().idivn(o)
        }
        ,
        s.prototype.egcd = function(o) {
            n(o.negative === 0),
            n(!o.isZero());
            var h = this
              , g = o.clone();
            h.negative !== 0 ? h = h.umod(o) : h = h.clone();
            for (var _ = new s(1), w = new s(0), S = new s(0), k = new s(1), v = 0; h.isEven() && g.isEven(); )
                h.iushrn(1),
                g.iushrn(1),
                ++v;
            for (var l = g.clone(), b = h.clone(); !h.isZero(); ) {
                for (var L = 0, O = 1; !(h.words[0] & O) && L < 26; ++L,
                O <<= 1)
                    ;
                if (L > 0)
                    for (h.iushrn(L); L-- > 0; )
                        (_.isOdd() || w.isOdd()) && (_.iadd(l),
                        w.isub(b)),
                        _.iushrn(1),
                        w.iushrn(1);
                for (var B = 0, ze = 1; !(g.words[0] & ze) && B < 26; ++B,
                ze <<= 1)
                    ;
                if (B > 0)
                    for (g.iushrn(B); B-- > 0; )
                        (S.isOdd() || k.isOdd()) && (S.iadd(l),
                        k.isub(b)),
                        S.iushrn(1),
                        k.iushrn(1);
                h.cmp(g) >= 0 ? (h.isub(g),
                _.isub(S),
                w.isub(k)) : (g.isub(h),
                S.isub(_),
                k.isub(w))
            }
            return {
                a: S,
                b: k,
                gcd: g.iushln(v)
            }
        }
        ,
        s.prototype._invmp = function(o) {
            n(o.negative === 0),
            n(!o.isZero());
            var h = this
              , g = o.clone();
            h.negative !== 0 ? h = h.umod(o) : h = h.clone();
            for (var _ = new s(1), w = new s(0), S = g.clone(); h.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
                for (var k = 0, v = 1; !(h.words[0] & v) && k < 26; ++k,
                v <<= 1)
                    ;
                if (k > 0)
                    for (h.iushrn(k); k-- > 0; )
                        _.isOdd() && _.iadd(S),
                        _.iushrn(1);
                for (var l = 0, b = 1; !(g.words[0] & b) && l < 26; ++l,
                b <<= 1)
                    ;
                if (l > 0)
                    for (g.iushrn(l); l-- > 0; )
                        w.isOdd() && w.iadd(S),
                        w.iushrn(1);
                h.cmp(g) >= 0 ? (h.isub(g),
                _.isub(w)) : (g.isub(h),
                w.isub(_))
            }
            var L;
            return h.cmpn(1) === 0 ? L = _ : L = w,
            L.cmpn(0) < 0 && L.iadd(o),
            L
        }
        ,
        s.prototype.gcd = function(o) {
            if (this.isZero())
                return o.abs();
            if (o.isZero())
                return this.abs();
            var h = this.clone()
              , g = o.clone();
            h.negative = 0,
            g.negative = 0;
            for (var _ = 0; h.isEven() && g.isEven(); _++)
                h.iushrn(1),
                g.iushrn(1);
            do {
                for (; h.isEven(); )
                    h.iushrn(1);
                for (; g.isEven(); )
                    g.iushrn(1);
                var w = h.cmp(g);
                if (w < 0) {
                    var S = h;
                    h = g,
                    g = S
                } else if (w === 0 || g.cmpn(1) === 0)
                    break;
                h.isub(g)
            } while (!0);
            return g.iushln(_)
        }
        ,
        s.prototype.invm = function(o) {
            return this.egcd(o).a.umod(o)
        }
        ,
        s.prototype.isEven = function() {
            return (this.words[0] & 1) === 0
        }
        ,
        s.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1
        }
        ,
        s.prototype.andln = function(o) {
            return this.words[0] & o
        }
        ,
        s.prototype.bincn = function(o) {
            n(typeof o == "number");
            var h = o % 26
              , g = (o - h) / 26
              , _ = 1 << h;
            if (this.length <= g)
                return this._expand(g + 1),
                this.words[g] |= _,
                this;
            for (var w = _, S = g; w !== 0 && S < this.length; S++) {
                var k = this.words[S] | 0;
                k += w,
                w = k >>> 26,
                k &= 67108863,
                this.words[S] = k
            }
            return w !== 0 && (this.words[S] = w,
            this.length++),
            this
        }
        ,
        s.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0
        }
        ,
        s.prototype.cmpn = function(o) {
            var h = o < 0;
            if (this.negative !== 0 && !h)
                return -1;
            if (this.negative === 0 && h)
                return 1;
            this._strip();
            var g;
            if (this.length > 1)
                g = 1;
            else {
                h && (o = -o),
                n(o <= 67108863, "Number is too big");
                var _ = this.words[0] | 0;
                g = _ === o ? 0 : _ < o ? -1 : 1
            }
            return this.negative !== 0 ? -g | 0 : g
        }
        ,
        s.prototype.cmp = function(o) {
            if (this.negative !== 0 && o.negative === 0)
                return -1;
            if (this.negative === 0 && o.negative !== 0)
                return 1;
            var h = this.ucmp(o);
            return this.negative !== 0 ? -h | 0 : h
        }
        ,
        s.prototype.ucmp = function(o) {
            if (this.length > o.length)
                return 1;
            if (this.length < o.length)
                return -1;
            for (var h = 0, g = this.length - 1; g >= 0; g--) {
                var _ = this.words[g] | 0
                  , w = o.words[g] | 0;
                if (_ !== w) {
                    _ < w ? h = -1 : _ > w && (h = 1);
                    break
                }
            }
            return h
        }
        ,
        s.prototype.gtn = function(o) {
            return this.cmpn(o) === 1
        }
        ,
        s.prototype.gt = function(o) {
            return this.cmp(o) === 1
        }
        ,
        s.prototype.gten = function(o) {
            return this.cmpn(o) >= 0
        }
        ,
        s.prototype.gte = function(o) {
            return this.cmp(o) >= 0
        }
        ,
        s.prototype.ltn = function(o) {
            return this.cmpn(o) === -1
        }
        ,
        s.prototype.lt = function(o) {
            return this.cmp(o) === -1
        }
        ,
        s.prototype.lten = function(o) {
            return this.cmpn(o) <= 0
        }
        ,
        s.prototype.lte = function(o) {
            return this.cmp(o) <= 0
        }
        ,
        s.prototype.eqn = function(o) {
            return this.cmpn(o) === 0
        }
        ,
        s.prototype.eq = function(o) {
            return this.cmp(o) === 0
        }
        ,
        s.red = function(o) {
            return new V(o)
        }
        ,
        s.prototype.toRed = function(o) {
            return n(!this.red, "Already a number in reduction context"),
            n(this.negative === 0, "red works only with positives"),
            o.convertTo(this)._forceRed(o)
        }
        ,
        s.prototype.fromRed = function() {
            return n(this.red, "fromRed works only with numbers in reduction context"),
            this.red.convertFrom(this)
        }
        ,
        s.prototype._forceRed = function(o) {
            return this.red = o,
            this
        }
        ,
        s.prototype.forceRed = function(o) {
            return n(!this.red, "Already a number in reduction context"),
            this._forceRed(o)
        }
        ,
        s.prototype.redAdd = function(o) {
            return n(this.red, "redAdd works only with red numbers"),
            this.red.add(this, o)
        }
        ,
        s.prototype.redIAdd = function(o) {
            return n(this.red, "redIAdd works only with red numbers"),
            this.red.iadd(this, o)
        }
        ,
        s.prototype.redSub = function(o) {
            return n(this.red, "redSub works only with red numbers"),
            this.red.sub(this, o)
        }
        ,
        s.prototype.redISub = function(o) {
            return n(this.red, "redISub works only with red numbers"),
            this.red.isub(this, o)
        }
        ,
        s.prototype.redShl = function(o) {
            return n(this.red, "redShl works only with red numbers"),
            this.red.shl(this, o)
        }
        ,
        s.prototype.redMul = function(o) {
            return n(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, o),
            this.red.mul(this, o)
        }
        ,
        s.prototype.redIMul = function(o) {
            return n(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, o),
            this.red.imul(this, o)
        }
        ,
        s.prototype.redSqr = function() {
            return n(this.red, "redSqr works only with red numbers"),
            this.red._verify1(this),
            this.red.sqr(this)
        }
        ,
        s.prototype.redISqr = function() {
            return n(this.red, "redISqr works only with red numbers"),
            this.red._verify1(this),
            this.red.isqr(this)
        }
        ,
        s.prototype.redSqrt = function() {
            return n(this.red, "redSqrt works only with red numbers"),
            this.red._verify1(this),
            this.red.sqrt(this)
        }
        ,
        s.prototype.redInvm = function() {
            return n(this.red, "redInvm works only with red numbers"),
            this.red._verify1(this),
            this.red.invm(this)
        }
        ,
        s.prototype.redNeg = function() {
            return n(this.red, "redNeg works only with red numbers"),
            this.red._verify1(this),
            this.red.neg(this)
        }
        ,
        s.prototype.redPow = function(o) {
            return n(this.red && !o.red, "redPow(normalNum)"),
            this.red._verify1(this),
            this.red.pow(this, o)
        }
        ;
        var x = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };
        function P(y, o) {
            this.name = y,
            this.p = new s(o,16),
            this.n = this.p.bitLength(),
            this.k = new s(1).iushln(this.n).isub(this.p),
            this.tmp = this._tmp()
        }
        P.prototype._tmp = function() {
            var o = new s(null);
            return o.words = new Array(Math.ceil(this.n / 13)),
            o
        }
        ,
        P.prototype.ireduce = function(o) {
            var h = o, g;
            do
                this.split(h, this.tmp),
                h = this.imulK(h),
                h = h.iadd(this.tmp),
                g = h.bitLength();
            while (g > this.n);
            var _ = g < this.n ? -1 : h.ucmp(this.p);
            return _ === 0 ? (h.words[0] = 0,
            h.length = 1) : _ > 0 ? h.isub(this.p) : h.strip !== void 0 ? h.strip() : h._strip(),
            h
        }
        ,
        P.prototype.split = function(o, h) {
            o.iushrn(this.n, 0, h)
        }
        ,
        P.prototype.imulK = function(o) {
            return o.imul(this.k)
        }
        ;
        function z() {
            P.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        i(z, P),
        z.prototype.split = function(o, h) {
            for (var g = 4194303, _ = Math.min(o.length, 9), w = 0; w < _; w++)
                h.words[w] = o.words[w];
            if (h.length = _,
            o.length <= 9) {
                o.words[0] = 0,
                o.length = 1;
                return
            }
            var S = o.words[9];
            for (h.words[h.length++] = S & g,
            w = 10; w < o.length; w++) {
                var k = o.words[w] | 0;
                o.words[w - 10] = (k & g) << 4 | S >>> 22,
                S = k
            }
            S >>>= 22,
            o.words[w - 10] = S,
            S === 0 && o.length > 10 ? o.length -= 10 : o.length -= 9
        }
        ,
        z.prototype.imulK = function(o) {
            o.words[o.length] = 0,
            o.words[o.length + 1] = 0,
            o.length += 2;
            for (var h = 0, g = 0; g < o.length; g++) {
                var _ = o.words[g] | 0;
                h += _ * 977,
                o.words[g] = h & 67108863,
                h = _ * 64 + (h / 67108864 | 0)
            }
            return o.words[o.length - 1] === 0 && (o.length--,
            o.words[o.length - 1] === 0 && o.length--),
            o
        }
        ;
        function Y() {
            P.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        i(Y, P);
        function G() {
            P.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        i(G, P);
        function Z() {
            P.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        i(Z, P),
        Z.prototype.imulK = function(o) {
            for (var h = 0, g = 0; g < o.length; g++) {
                var _ = (o.words[g] | 0) * 19 + h
                  , w = _ & 67108863;
                _ >>>= 26,
                o.words[g] = w,
                h = _
            }
            return h !== 0 && (o.words[o.length++] = h),
            o
        }
        ,
        s._prime = function(o) {
            if (x[o])
                return x[o];
            var h;
            if (o === "k256")
                h = new z;
            else if (o === "p224")
                h = new Y;
            else if (o === "p192")
                h = new G;
            else if (o === "p25519")
                h = new Z;
            else
                throw new Error("Unknown prime " + o);
            return x[o] = h,
            h
        }
        ;
        function V(y) {
            if (typeof y == "string") {
                var o = s._prime(y);
                this.m = o.p,
                this.prime = o
            } else
                n(y.gtn(1), "modulus must be greater than 1"),
                this.m = y,
                this.prime = null
        }
        V.prototype._verify1 = function(o) {
            n(o.negative === 0, "red works only with positives"),
            n(o.red, "red works only with red numbers")
        }
        ,
        V.prototype._verify2 = function(o, h) {
            n((o.negative | h.negative) === 0, "red works only with positives"),
            n(o.red && o.red === h.red, "red works only with red numbers")
        }
        ,
        V.prototype.imod = function(o) {
            return this.prime ? this.prime.ireduce(o)._forceRed(this) : (p(o, o.umod(this.m)._forceRed(this)),
            o)
        }
        ,
        V.prototype.neg = function(o) {
            return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this)
        }
        ,
        V.prototype.add = function(o, h) {
            this._verify2(o, h);
            var g = o.add(h);
            return g.cmp(this.m) >= 0 && g.isub(this.m),
            g._forceRed(this)
        }
        ,
        V.prototype.iadd = function(o, h) {
            this._verify2(o, h);
            var g = o.iadd(h);
            return g.cmp(this.m) >= 0 && g.isub(this.m),
            g
        }
        ,
        V.prototype.sub = function(o, h) {
            this._verify2(o, h);
            var g = o.sub(h);
            return g.cmpn(0) < 0 && g.iadd(this.m),
            g._forceRed(this)
        }
        ,
        V.prototype.isub = function(o, h) {
            this._verify2(o, h);
            var g = o.isub(h);
            return g.cmpn(0) < 0 && g.iadd(this.m),
            g
        }
        ,
        V.prototype.shl = function(o, h) {
            return this._verify1(o),
            this.imod(o.ushln(h))
        }
        ,
        V.prototype.imul = function(o, h) {
            return this._verify2(o, h),
            this.imod(o.imul(h))
        }
        ,
        V.prototype.mul = function(o, h) {
            return this._verify2(o, h),
            this.imod(o.mul(h))
        }
        ,
        V.prototype.isqr = function(o) {
            return this.imul(o, o.clone())
        }
        ,
        V.prototype.sqr = function(o) {
            return this.mul(o, o)
        }
        ,
        V.prototype.sqrt = function(o) {
            if (o.isZero())
                return o.clone();
            var h = this.m.andln(3);
            if (n(h % 2 === 1),
            h === 3) {
                var g = this.m.add(new s(1)).iushrn(2);
                return this.pow(o, g)
            }
            for (var _ = this.m.subn(1), w = 0; !_.isZero() && _.andln(1) === 0; )
                w++,
                _.iushrn(1);
            n(!_.isZero());
            var S = new s(1).toRed(this)
              , k = S.redNeg()
              , v = this.m.subn(1).iushrn(1)
              , l = this.m.bitLength();
            for (l = new s(2 * l * l).toRed(this); this.pow(l, v).cmp(k) !== 0; )
                l.redIAdd(k);
            for (var b = this.pow(l, _), L = this.pow(o, _.addn(1).iushrn(1)), O = this.pow(o, _), B = w; O.cmp(S) !== 0; ) {
                for (var ze = O, K = 0; ze.cmp(S) !== 0; K++)
                    ze = ze.redSqr();
                n(K < B);
                var ee = this.pow(b, new s(1).iushln(B - K - 1));
                L = L.redMul(ee),
                b = ee.redSqr(),
                O = O.redMul(b),
                B = K
            }
            return L
        }
        ,
        V.prototype.invm = function(o) {
            var h = o._invmp(this.m);
            return h.negative !== 0 ? (h.negative = 0,
            this.imod(h).redNeg()) : this.imod(h)
        }
        ,
        V.prototype.pow = function(o, h) {
            if (h.isZero())
                return new s(1).toRed(this);
            if (h.cmpn(1) === 0)
                return o.clone();
            var g = 4
              , _ = new Array(1 << g);
            _[0] = new s(1).toRed(this),
            _[1] = o;
            for (var w = 2; w < _.length; w++)
                _[w] = this.mul(_[w - 1], o);
            var S = _[0]
              , k = 0
              , v = 0
              , l = h.bitLength() % 26;
            for (l === 0 && (l = 26),
            w = h.length - 1; w >= 0; w--) {
                for (var b = h.words[w], L = l - 1; L >= 0; L--) {
                    var O = b >> L & 1;
                    if (S !== _[0] && (S = this.sqr(S)),
                    O === 0 && k === 0) {
                        v = 0;
                        continue
                    }
                    k <<= 1,
                    k |= O,
                    v++,
                    !(v !== g && (w !== 0 || L !== 0)) && (S = this.mul(S, _[k]),
                    v = 0,
                    k = 0)
                }
                l = 26
            }
            return S
        }
        ,
        V.prototype.convertTo = function(o) {
            var h = o.umod(this.m);
            return h === o ? h.clone() : h
        }
        ,
        V.prototype.convertFrom = function(o) {
            var h = o.clone();
            return h.red = null,
            h
        }
        ,
        s.mont = function(o) {
            return new Q(o)
        }
        ;
        function Q(y) {
            V.call(this, y),
            this.shift = this.m.bitLength(),
            this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26),
            this.r = new s(1).iushln(this.shift),
            this.r2 = this.imod(this.r.sqr()),
            this.rinv = this.r._invmp(this.m),
            this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
            this.minv = this.minv.umod(this.r),
            this.minv = this.r.sub(this.minv)
        }
        i(Q, V),
        Q.prototype.convertTo = function(o) {
            return this.imod(o.ushln(this.shift))
        }
        ,
        Q.prototype.convertFrom = function(o) {
            var h = this.imod(o.mul(this.rinv));
            return h.red = null,
            h
        }
        ,
        Q.prototype.imul = function(o, h) {
            if (o.isZero() || h.isZero())
                return o.words[0] = 0,
                o.length = 1,
                o;
            var g = o.imul(h)
              , _ = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
              , w = g.isub(_).iushrn(this.shift)
              , S = w;
            return w.cmp(this.m) >= 0 ? S = w.isub(this.m) : w.cmpn(0) < 0 && (S = w.iadd(this.m)),
            S._forceRed(this)
        }
        ,
        Q.prototype.mul = function(o, h) {
            if (o.isZero() || h.isZero())
                return new s(0)._forceRed(this);
            var g = o.mul(h)
              , _ = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
              , w = g.isub(_).iushrn(this.shift)
              , S = w;
            return w.cmp(this.m) >= 0 ? S = w.isub(this.m) : w.cmpn(0) < 0 && (S = w.iadd(this.m)),
            S._forceRed(this)
        }
        ,
        Q.prototype.invm = function(o) {
            var h = this.imod(o._invmp(this.m).mul(this.r2));
            return h._forceRed(this)
        }
    }
    )(e, $)
}
)(Wi);
var ds = Wi.exports
  , vn = {}
  , It = {};
Object.defineProperty(It, "__esModule", {
    value: !0
});
It.errorValues = It.standardErrorCodes = void 0;
It.standardErrorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
        unsupportedChain: 4902
    }
};
It.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    },
    4902: {
        standard: "EIP-3085",
        message: "Unrecognized chain ID."
    }
};
var fs = {}
  , ps = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.serialize = e.getErrorCode = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const t = It
      , r = "Unspecified error message.";
    e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    function n(m, E=r) {
        if (m && Number.isInteger(m)) {
            const C = m.toString();
            if (p(t.errorValues, C))
                return t.errorValues[C].message;
            if (d(m))
                return e.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return E
    }
    e.getMessageFromCode = n;
    function i(m) {
        if (!Number.isInteger(m))
            return !1;
        const E = m.toString();
        return !!(t.errorValues[E] || d(m))
    }
    e.isValidCode = i;
    function s(m) {
        var E;
        if (typeof m == "number")
            return m;
        if (a(m))
            return (E = m.code) !== null && E !== void 0 ? E : m.errorCode
    }
    e.getErrorCode = s;
    function a(m) {
        return typeof m == "object" && m !== null && (typeof m.code == "number" || typeof m.errorCode == "number")
    }
    function c(m, {shouldIncludeStack: E=!1}={}) {
        const C = {};
        if (m && typeof m == "object" && !Array.isArray(m) && p(m, "code") && i(m.code)) {
            const N = m;
            C.code = N.code,
            N.message && typeof N.message == "string" ? (C.message = N.message,
            p(N, "data") && (C.data = N.data)) : (C.message = n(C.code),
            C.data = {
                originalError: u(m)
            })
        } else
            C.code = t.standardErrorCodes.rpc.internal,
            C.message = f(m, "message") ? m.message : r,
            C.data = {
                originalError: u(m)
            };
        return E && (C.stack = f(m, "stack") ? m.stack : void 0),
        C
    }
    e.serialize = c;
    function d(m) {
        return m >= -32099 && m <= -32e3
    }
    function u(m) {
        return m && typeof m == "object" && !Array.isArray(m) ? Object.assign({}, m) : m
    }
    function p(m, E) {
        return Object.prototype.hasOwnProperty.call(m, E)
    }
    function f(m, E) {
        return typeof m == "object" && m !== null && E in m && typeof m[E] == "string"
    }
}
)(ps);
Object.defineProperty(fs, "__esModule", {
    value: !0
});
fs.standardErrors = void 0;
const Ge = It
  , ac = ps;
fs.standardErrors = {
    rpc: {
        parse: e=>ot(Ge.standardErrorCodes.rpc.parse, e),
        invalidRequest: e=>ot(Ge.standardErrorCodes.rpc.invalidRequest, e),
        invalidParams: e=>ot(Ge.standardErrorCodes.rpc.invalidParams, e),
        methodNotFound: e=>ot(Ge.standardErrorCodes.rpc.methodNotFound, e),
        internal: e=>ot(Ge.standardErrorCodes.rpc.internal, e),
        server: e=>{
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const {code: t} = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return ot(t, e)
        }
        ,
        invalidInput: e=>ot(Ge.standardErrorCodes.rpc.invalidInput, e),
        resourceNotFound: e=>ot(Ge.standardErrorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: e=>ot(Ge.standardErrorCodes.rpc.resourceUnavailable, e),
        transactionRejected: e=>ot(Ge.standardErrorCodes.rpc.transactionRejected, e),
        methodNotSupported: e=>ot(Ge.standardErrorCodes.rpc.methodNotSupported, e),
        limitExceeded: e=>ot(Ge.standardErrorCodes.rpc.limitExceeded, e)
    },
    provider: {
        userRejectedRequest: e=>Cr(Ge.standardErrorCodes.provider.userRejectedRequest, e),
        unauthorized: e=>Cr(Ge.standardErrorCodes.provider.unauthorized, e),
        unsupportedMethod: e=>Cr(Ge.standardErrorCodes.provider.unsupportedMethod, e),
        disconnected: e=>Cr(Ge.standardErrorCodes.provider.disconnected, e),
        chainDisconnected: e=>Cr(Ge.standardErrorCodes.provider.chainDisconnected, e),
        unsupportedChain: e=>Cr(Ge.standardErrorCodes.provider.unsupportedChain, e),
        custom: e=>{
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const {code: t, message: r, data: n} = e;
            if (!r || typeof r != "string")
                throw new Error('"message" must be a nonempty string');
            return new uc(t,r,n)
        }
    }
};
function ot(e, t) {
    const [r,n] = cc(t);
    return new lc(e,r || (0,
    ac.getMessageFromCode)(e),n)
}
function Cr(e, t) {
    const [r,n] = cc(t);
    return new uc(e,r || (0,
    ac.getMessageFromCode)(e),n)
}
function cc(e) {
    if (e) {
        if (typeof e == "string")
            return [e];
        if (typeof e == "object" && !Array.isArray(e)) {
            const {message: t, data: r} = e;
            if (t && typeof t != "string")
                throw new Error("Must specify string message.");
            return [t || void 0, r]
        }
    }
    return []
}
let lc = class extends Error {
    constructor(t, r, n) {
        if (!Number.isInteger(t))
            throw new Error('"code" must be an integer.');
        if (!r || typeof r != "string")
            throw new Error('"message" must be a nonempty string.');
        super(r),
        this.code = t,
        n !== void 0 && (this.data = n)
    }
}
  , uc = class extends lc {
    constructor(t, r, n) {
        if (!Nu(t))
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(t, r, n)
    }
}
;
function Nu(e) {
    return Number.isInteger(e) && e >= 1e3 && e <= 4999
}
var gs = {}
  , Wr = {};
Object.defineProperty(Wr, "__esModule", {
    value: !0
});
Wr.isErrorResponse = void 0;
function xu(e) {
    return e.errorMessage !== void 0
}
Wr.isErrorResponse = xu;
var qr = {};
Object.defineProperty(qr, "__esModule", {
    value: !0
});
qr.LIB_VERSION = void 0;
qr.LIB_VERSION = "3.9.3";
Object.defineProperty(gs, "__esModule", {
    value: !0
});
gs.serializeError = void 0;
const Lu = Wr
  , Tu = qr
  , Pu = It
  , Ou = ps;
function $u(e, t) {
    const r = (0,
    Ou.serialize)(Bu(e), {
        shouldIncludeStack: !0
    })
      , n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
    n.searchParams.set("version", Tu.LIB_VERSION),
    n.searchParams.set("code", r.code.toString());
    const i = Fu(r.data, t);
    return i && n.searchParams.set("method", i),
    n.searchParams.set("message", r.message),
    Object.assign(Object.assign({}, r), {
        docUrl: n.href
    })
}
gs.serializeError = $u;
function Bu(e) {
    return typeof e == "string" ? {
        message: e,
        code: Pu.standardErrorCodes.rpc.internal
    } : (0,
    Lu.isErrorResponse)(e) ? Object.assign(Object.assign({}, e), {
        message: e.errorMessage,
        code: e.errorCode,
        data: {
            method: e.method
        }
    }) : e
}
function Fu(e, t) {
    const r = e == null ? void 0 : e.method;
    if (r)
        return r;
    if (t !== void 0) {
        if (typeof t == "string")
            return t;
        if (Array.isArray(t)) {
            if (t.length > 0)
                return t[0].method
        } else
            return t.method
    }
}
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.standardErrors = e.standardErrorCodes = e.serializeError = e.getMessageFromCode = e.getErrorCode = void 0;
    const t = It;
    Object.defineProperty(e, "standardErrorCodes", {
        enumerable: !0,
        get: function() {
            return t.standardErrorCodes
        }
    });
    const r = fs;
    Object.defineProperty(e, "standardErrors", {
        enumerable: !0,
        get: function() {
            return r.standardErrors
        }
    });
    const n = gs;
    Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function() {
            return n.serializeError
        }
    });
    const i = ps;
    Object.defineProperty(e, "getErrorCode", {
        enumerable: !0,
        get: function() {
            return i.getErrorCode
        }
    }),
    Object.defineProperty(e, "getMessageFromCode", {
        enumerable: !0,
        get: function() {
            return i.getMessageFromCode
        }
    })
}
)(vn);
var We = {};
Object.defineProperty(We, "__esModule", {
    value: !0
});
We.ProviderType = We.RegExpString = We.IntNumber = We.BigIntString = We.AddressString = We.HexString = We.OpaqueType = void 0;
function yn() {
    return e=>e
}
We.OpaqueType = yn;
We.HexString = yn();
We.AddressString = yn();
We.BigIntString = yn();
function ju(e) {
    return Math.floor(e)
}
We.IntNumber = ju;
We.RegExpString = yn();
var Oo;
(function(e) {
    e.CoinbaseWallet = "CoinbaseWallet",
    e.MetaMask = "MetaMask",
    e.Unselected = ""
}
)(Oo || (We.ProviderType = Oo = {}));
var Du = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(T, "__esModule", {
    value: !0
});
T.isMobileWeb = T.getLocation = T.isInIFrame = T.createQrUrl = T.getFavicon = T.range = T.isBigNumber = T.ensureParsedJSONObject = T.ensureBN = T.ensureRegExpString = T.ensureIntNumber = T.ensureBuffer = T.ensureAddressString = T.ensureEvenLengthHexString = T.ensureHexString = T.isHexString = T.prepend0x = T.strip0x = T.has0xPrefix = T.hexStringFromIntNumber = T.intNumberFromHexString = T.bigIntStringFromBN = T.hexStringFromBuffer = T.hexStringToUint8Array = T.uint8ArrayToHex = T.randomBytesHex = void 0;
const Lt = Du(ds)
  , lr = vn
  , ut = We
  , hc = /^[0-9]*$/
  , dc = /^[a-f0-9]*$/;
function Hu(e) {
    return fc(crypto.getRandomValues(new Uint8Array(e)))
}
T.randomBytesHex = Hu;
function fc(e) {
    return [...e].map(t=>t.toString(16).padStart(2, "0")).join("")
}
T.uint8ArrayToHex = fc;
function Uu(e) {
    return new Uint8Array(e.match(/.{1,2}/g).map(t=>parseInt(t, 16)))
}
T.hexStringToUint8Array = Uu;
function Vu(e, t=!1) {
    const r = e.toString("hex");
    return (0,
    ut.HexString)(t ? `0x${r}` : r)
}
T.hexStringFromBuffer = Vu;
function zu(e) {
    return (0,
    ut.BigIntString)(e.toString(10))
}
T.bigIntStringFromBN = zu;
function Wu(e) {
    return (0,
    ut.IntNumber)(new Lt.default(bn(e, !1),16).toNumber())
}
T.intNumberFromHexString = Wu;
function qu(e) {
    return (0,
    ut.HexString)(`0x${new Lt.default(e).toString(16)}`)
}
T.hexStringFromIntNumber = qu;
function qi(e) {
    return e.startsWith("0x") || e.startsWith("0X")
}
T.has0xPrefix = qi;
function ms(e) {
    return qi(e) ? e.slice(2) : e
}
T.strip0x = ms;
function pc(e) {
    return qi(e) ? `0x${e.slice(2)}` : `0x${e}`
}
T.prepend0x = pc;
function wn(e) {
    if (typeof e != "string")
        return !1;
    const t = ms(e).toLowerCase();
    return dc.test(t)
}
T.isHexString = wn;
function gc(e, t=!1) {
    if (typeof e == "string") {
        const r = ms(e).toLowerCase();
        if (dc.test(r))
            return (0,
            ut.HexString)(t ? `0x${r}` : r)
    }
    throw lr.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)
}
T.ensureHexString = gc;
function bn(e, t=!1) {
    let r = gc(e, !1);
    return r.length % 2 === 1 && (r = (0,
    ut.HexString)(`0${r}`)),
    t ? (0,
    ut.HexString)(`0x${r}`) : r
}
T.ensureEvenLengthHexString = bn;
function Ju(e) {
    if (typeof e == "string") {
        const t = ms(e).toLowerCase();
        if (wn(t) && t.length === 40)
            return (0,
            ut.AddressString)(pc(t))
    }
    throw lr.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)
}
T.ensureAddressString = Ju;
function Gu(e) {
    if (H.Buffer.isBuffer(e))
        return e;
    if (typeof e == "string") {
        if (wn(e)) {
            const t = bn(e, !1);
            return H.Buffer.from(t, "hex")
        }
        return H.Buffer.from(e, "utf8")
    }
    throw lr.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)
}
T.ensureBuffer = Gu;
function mc(e) {
    if (typeof e == "number" && Number.isInteger(e))
        return (0,
        ut.IntNumber)(e);
    if (typeof e == "string") {
        if (hc.test(e))
            return (0,
            ut.IntNumber)(Number(e));
        if (wn(e))
            return (0,
            ut.IntNumber)(new Lt.default(bn(e, !1),16).toNumber())
    }
    throw lr.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
}
T.ensureIntNumber = mc;
function Zu(e) {
    if (e instanceof RegExp)
        return (0,
        ut.RegExpString)(e.toString());
    throw lr.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)
}
T.ensureRegExpString = Zu;
function Qu(e) {
    if (e !== null && (Lt.default.isBN(e) || _c(e)))
        return new Lt.default(e.toString(10),10);
    if (typeof e == "number")
        return new Lt.default(mc(e));
    if (typeof e == "string") {
        if (hc.test(e))
            return new Lt.default(e,10);
        if (wn(e))
            return new Lt.default(bn(e, !1),16)
    }
    throw lr.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
}
T.ensureBN = Qu;
function Ku(e) {
    if (typeof e == "string")
        return JSON.parse(e);
    if (typeof e == "object")
        return e;
    throw lr.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)
}
T.ensureParsedJSONObject = Ku;
function _c(e) {
    if (e == null || typeof e.constructor != "function")
        return !1;
    const {constructor: t} = e;
    return typeof t.config == "function" && typeof t.EUCLID == "number"
}
T.isBigNumber = _c;
function Xu(e, t) {
    return Array.from({
        length: t - e
    }, (r,n)=>e + n)
}
T.range = Xu;
function Yu() {
    const e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]')
      , {protocol: t, host: r} = document.location
      , n = e ? e.getAttribute("href") : null;
    return !n || n.startsWith("javascript:") || n.startsWith("vbscript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? t + n : `${t}//${r}${n}`
}
T.getFavicon = Yu;
function eh(e, t, r, n, i, s) {
    const a = n ? "parent-id" : "id"
      , c = new URLSearchParams({
        [a]: e,
        secret: t,
        server: r,
        v: i,
        chainId: s.toString()
    }).toString();
    return `${r}/#/link?${c}`
}
T.createQrUrl = eh;
function vc() {
    try {
        return window.frameElement !== null
    } catch {
        return !1
    }
}
T.isInIFrame = vc;
function th() {
    try {
        return vc() && window.top ? window.top.location : window.location
    } catch {
        return window.location
    }
}
T.getLocation = th;
function rh() {
    var e;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((e = window == null ? void 0 : window.navigator) === null || e === void 0 ? void 0 : e.userAgent)
}
T.isMobileWeb = rh;
var _s = {};
Object.defineProperty(_s, "__esModule", {
    value: !0
});
_s.ScopedLocalStorage = void 0;
class nh {
    constructor(t) {
        this.scope = t
    }
    setItem(t, r) {
        localStorage.setItem(this.scopedKey(t), r)
    }
    getItem(t) {
        return localStorage.getItem(this.scopedKey(t))
    }
    removeItem(t) {
        localStorage.removeItem(this.scopedKey(t))
    }
    clear() {
        const t = this.scopedKey("")
          , r = [];
        for (let n = 0; n < localStorage.length; n++) {
            const i = localStorage.key(n);
            typeof i == "string" && i.startsWith(t) && r.push(i)
        }
        r.forEach(n=>localStorage.removeItem(n))
    }
    scopedKey(t) {
        return `${this.scope}:${t}`
    }
}
_s.ScopedLocalStorage = nh;
var Br = {}
  , yc = {
    exports: {}
};
(function(e) {
    var t = Object.prototype.hasOwnProperty
      , r = "~";
    function n() {}
    Object.create && (n.prototype = Object.create(null),
    new n().__proto__ || (r = !1));
    function i(d, u, p) {
        this.fn = d,
        this.context = u,
        this.once = p || !1
    }
    function s(d, u, p, f, m) {
        if (typeof p != "function")
            throw new TypeError("The listener must be a function");
        var E = new i(p,f || d,m)
          , C = r ? r + u : u;
        return d._events[C] ? d._events[C].fn ? d._events[C] = [d._events[C], E] : d._events[C].push(E) : (d._events[C] = E,
        d._eventsCount++),
        d
    }
    function a(d, u) {
        --d._eventsCount === 0 ? d._events = new n : delete d._events[u]
    }
    function c() {
        this._events = new n,
        this._eventsCount = 0
    }
    c.prototype.eventNames = function() {
        var u = [], p, f;
        if (this._eventsCount === 0)
            return u;
        for (f in p = this._events)
            t.call(p, f) && u.push(r ? f.slice(1) : f);
        return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(p)) : u
    }
    ,
    c.prototype.listeners = function(u) {
        var p = r ? r + u : u
          , f = this._events[p];
        if (!f)
            return [];
        if (f.fn)
            return [f.fn];
        for (var m = 0, E = f.length, C = new Array(E); m < E; m++)
            C[m] = f[m].fn;
        return C
    }
    ,
    c.prototype.listenerCount = function(u) {
        var p = r ? r + u : u
          , f = this._events[p];
        return f ? f.fn ? 1 : f.length : 0
    }
    ,
    c.prototype.emit = function(u, p, f, m, E, C) {
        var N = r ? r + u : u;
        if (!this._events[N])
            return !1;
        var M = this._events[N], A = arguments.length, I, R;
        if (M.fn) {
            switch (M.once && this.removeListener(u, M.fn, void 0, !0),
            A) {
            case 1:
                return M.fn.call(M.context),
                !0;
            case 2:
                return M.fn.call(M.context, p),
                !0;
            case 3:
                return M.fn.call(M.context, p, f),
                !0;
            case 4:
                return M.fn.call(M.context, p, f, m),
                !0;
            case 5:
                return M.fn.call(M.context, p, f, m, E),
                !0;
            case 6:
                return M.fn.call(M.context, p, f, m, E, C),
                !0
            }
            for (R = 1,
            I = new Array(A - 1); R < A; R++)
                I[R - 1] = arguments[R];
            M.fn.apply(M.context, I)
        } else {
            var F = M.length, x;
            for (R = 0; R < F; R++)
                switch (M[R].once && this.removeListener(u, M[R].fn, void 0, !0),
                A) {
                case 1:
                    M[R].fn.call(M[R].context);
                    break;
                case 2:
                    M[R].fn.call(M[R].context, p);
                    break;
                case 3:
                    M[R].fn.call(M[R].context, p, f);
                    break;
                case 4:
                    M[R].fn.call(M[R].context, p, f, m);
                    break;
                default:
                    if (!I)
                        for (x = 1,
                        I = new Array(A - 1); x < A; x++)
                            I[x - 1] = arguments[x];
                    M[R].fn.apply(M[R].context, I)
                }
        }
        return !0
    }
    ,
    c.prototype.on = function(u, p, f) {
        return s(this, u, p, f, !1)
    }
    ,
    c.prototype.once = function(u, p, f) {
        return s(this, u, p, f, !0)
    }
    ,
    c.prototype.removeListener = function(u, p, f, m) {
        var E = r ? r + u : u;
        if (!this._events[E])
            return this;
        if (!p)
            return a(this, E),
            this;
        var C = this._events[E];
        if (C.fn)
            C.fn === p && (!m || C.once) && (!f || C.context === f) && a(this, E);
        else {
            for (var N = 0, M = [], A = C.length; N < A; N++)
                (C[N].fn !== p || m && !C[N].once || f && C[N].context !== f) && M.push(C[N]);
            M.length ? this._events[E] = M.length === 1 ? M[0] : M : a(this, E)
        }
        return this
    }
    ,
    c.prototype.removeAllListeners = function(u) {
        var p;
        return u ? (p = r ? r + u : u,
        this._events[p] && a(this, p)) : (this._events = new n,
        this._eventsCount = 0),
        this
    }
    ,
    c.prototype.off = c.prototype.removeListener,
    c.prototype.addListener = c.prototype.on,
    c.prefixed = r,
    c.EventEmitter = c,
    e.exports = c
}
)(yc);
var sh = yc.exports
  , En = {}
  , Sn = {}
  , Jr = {};
Object.defineProperty(Jr, "__esModule", {
    value: !0
});
Jr.EVENTS = void 0;
Jr.EVENTS = {
    STARTED_CONNECTING: "walletlink_sdk.started.connecting",
    CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
    DISCONNECTED: "walletlink_sdk.disconnected",
    METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
    LINKED: "walletlink_sdk.linked",
    FAILURE: "walletlink_sdk.generic_failure",
    SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
    ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
    SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
    UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
    SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
    GENERAL_ERROR: "walletlink_sdk.general_error",
    WEB3_REQUEST: "walletlink_sdk.web3.request",
    WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
    WEB3_RESPONSE: "walletlink_sdk.web3.response",
    METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
    UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var lt = {};
Object.defineProperty(lt, "__esModule", {
    value: !0
});
lt.RelayAbstract = lt.APP_VERSION_KEY = lt.LOCAL_STORAGE_ADDRESSES_KEY = lt.WALLET_USER_NAME_KEY = void 0;
const $o = vn;
lt.WALLET_USER_NAME_KEY = "walletUsername";
lt.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
lt.APP_VERSION_KEY = "AppVersion";
class ih {
    async makeEthereumJSONRPCRequest(t, r) {
        if (!r)
            throw new Error("Error: No jsonRpcUrl provided");
        return window.fetch(r, {
            method: "POST",
            body: JSON.stringify(t),
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(n=>n.json()).then(n=>{
            if (!n)
                throw $o.standardErrors.rpc.parse({});
            const i = n
              , {error: s} = i;
            if (s)
                throw (0,
                $o.serializeError)(s, t.method);
            return i
        }
        )
    }
}
lt.RelayAbstract = ih;
var Gr = {};
Object.defineProperty(Gr, "__esModule", {
    value: !0
});
Gr.Session = void 0;
const Bo = Ru
  , Fo = T
  , jo = "session:id"
  , Do = "session:secret"
  , Ho = "session:linked";
class Ji {
    constructor(t, r, n, i) {
        this._storage = t,
        this._id = r || (0,
        Fo.randomBytesHex)(16),
        this._secret = n || (0,
        Fo.randomBytesHex)(32),
        this._key = new Bo.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"),
        this._linked = !!i
    }
    static load(t) {
        const r = t.getItem(jo)
          , n = t.getItem(Ho)
          , i = t.getItem(Do);
        return r && i ? new Ji(t,r,i,n === "1") : null
    }
    static hash(t) {
        return new Bo.sha256().update(t).digest("hex")
    }
    get id() {
        return this._id
    }
    get secret() {
        return this._secret
    }
    get key() {
        return this._key
    }
    get linked() {
        return this._linked
    }
    set linked(t) {
        this._linked = t,
        this.persistLinked()
    }
    save() {
        return this._storage.setItem(jo, this._id),
        this._storage.setItem(Do, this._secret),
        this.persistLinked(),
        this
    }
    persistLinked() {
        this._storage.setItem(Ho, this._linked ? "1" : "0")
    }
}
Gr.Session = Ji;
var vs = {}
  , ys = {};
Object.defineProperty(ys, "__esModule", {
    value: !0
});
ys.Cipher = void 0;
const Hn = T;
class oh {
    constructor(t) {
        this.secret = t
    }
    async encrypt(t) {
        const r = this.secret;
        if (r.length !== 64)
            throw Error("secret must be 256 bits");
        const n = crypto.getRandomValues(new Uint8Array(12))
          , i = await crypto.subtle.importKey("raw", (0,
        Hn.hexStringToUint8Array)(r), {
            name: "aes-gcm"
        }, !1, ["encrypt", "decrypt"])
          , s = new TextEncoder
          , a = await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: n
        }, i, s.encode(t))
          , c = 16
          , d = a.slice(a.byteLength - c)
          , u = a.slice(0, a.byteLength - c)
          , p = new Uint8Array(d)
          , f = new Uint8Array(u)
          , m = new Uint8Array([...n, ...p, ...f]);
        return (0,
        Hn.uint8ArrayToHex)(m)
    }
    async decrypt(t) {
        const r = this.secret;
        if (r.length !== 64)
            throw Error("secret must be 256 bits");
        return new Promise((n,i)=>{
            (async function() {
                const s = await crypto.subtle.importKey("raw", (0,
                Hn.hexStringToUint8Array)(r), {
                    name: "aes-gcm"
                }, !1, ["encrypt", "decrypt"])
                  , a = (0,
                Hn.hexStringToUint8Array)(t)
                  , c = a.slice(0, 12)
                  , d = a.slice(12, 28)
                  , u = a.slice(28)
                  , p = new Uint8Array([...u, ...d])
                  , f = {
                    name: "AES-GCM",
                    iv: new Uint8Array(c)
                };
                try {
                    const m = await window.crypto.subtle.decrypt(f, s, p)
                      , E = new TextDecoder;
                    n(E.decode(m))
                } catch (m) {
                    i(m)
                }
            }
            )()
        }
        )
    }
}
ys.Cipher = oh;
var ws = {};
Object.defineProperty(ws, "__esModule", {
    value: !0
});
ws.WalletLinkHTTP = void 0;
class ah {
    constructor(t, r, n) {
        this.linkAPIUrl = t,
        this.sessionId = r;
        const i = `${r}:${n}`;
        this.auth = `Basic ${btoa(i)}`
    }
    async markUnseenEventsAsSeen(t) {
        return Promise.all(t.map(r=>fetch(`${this.linkAPIUrl}/events/${r.eventId}/seen`, {
            method: "POST",
            headers: {
                Authorization: this.auth
            }
        }))).catch(r=>console.error("Unabled to mark event as failed:", r))
    }
    async fetchUnseenEvents() {
        var t;
        const r = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: {
                Authorization: this.auth
            }
        });
        if (r.ok) {
            const {events: n, error: i} = await r.json();
            if (i)
                throw new Error(`Check unseen events failed: ${i}`);
            const s = (t = n == null ? void 0 : n.filter(a=>a.event === "Web3Response").map(a=>({
                type: "Event",
                sessionId: this.sessionId,
                eventId: a.id,
                event: a.event,
                data: a.data
            }))) !== null && t !== void 0 ? t : [];
            return this.markUnseenEventsAsSeen(s),
            s
        }
        throw new Error(`Check unseen events failed: ${r.status}`)
    }
}
ws.WalletLinkHTTP = ah;
var Fr = {};
Object.defineProperty(Fr, "__esModule", {
    value: !0
});
Fr.WalletLinkWebSocket = Fr.ConnectionState = void 0;
var Lr;
(function(e) {
    e[e.DISCONNECTED = 0] = "DISCONNECTED",
    e[e.CONNECTING = 1] = "CONNECTING",
    e[e.CONNECTED = 2] = "CONNECTED"
}
)(Lr || (Fr.ConnectionState = Lr = {}));
class ch {
    setConnectionStateListener(t) {
        this.connectionStateListener = t
    }
    setIncomingDataListener(t) {
        this.incomingDataListener = t
    }
    constructor(t, r=WebSocket) {
        this.WebSocketClass = r,
        this.webSocket = null,
        this.pendingData = [],
        this.url = t.replace(/^http/, "ws")
    }
    async connect() {
        if (this.webSocket)
            throw new Error("webSocket object is not null");
        return new Promise((t,r)=>{
            var n;
            let i;
            try {
                this.webSocket = i = new this.WebSocketClass(this.url)
            } catch (s) {
                r(s);
                return
            }
            (n = this.connectionStateListener) === null || n === void 0 || n.call(this, Lr.CONNECTING),
            i.onclose = s=>{
                var a;
                this.clearWebSocket(),
                r(new Error(`websocket error ${s.code}: ${s.reason}`)),
                (a = this.connectionStateListener) === null || a === void 0 || a.call(this, Lr.DISCONNECTED)
            }
            ,
            i.onopen = s=>{
                var a;
                t(),
                (a = this.connectionStateListener) === null || a === void 0 || a.call(this, Lr.CONNECTED),
                this.pendingData.length > 0 && ([...this.pendingData].forEach(d=>this.sendData(d)),
                this.pendingData = [])
            }
            ,
            i.onmessage = s=>{
                var a, c;
                if (s.data === "h")
                    (a = this.incomingDataListener) === null || a === void 0 || a.call(this, {
                        type: "Heartbeat"
                    });
                else
                    try {
                        const d = JSON.parse(s.data);
                        (c = this.incomingDataListener) === null || c === void 0 || c.call(this, d)
                    } catch {}
            }
        }
        )
    }
    disconnect() {
        var t;
        const {webSocket: r} = this;
        if (r) {
            this.clearWebSocket(),
            (t = this.connectionStateListener) === null || t === void 0 || t.call(this, Lr.DISCONNECTED),
            this.connectionStateListener = void 0,
            this.incomingDataListener = void 0;
            try {
                r.close()
            } catch {}
        }
    }
    sendData(t) {
        const {webSocket: r} = this;
        if (!r) {
            this.pendingData.push(t),
            this.connect();
            return
        }
        r.send(t)
    }
    clearWebSocket() {
        const {webSocket: t} = this;
        t && (this.webSocket = null,
        t.onclose = null,
        t.onerror = null,
        t.onmessage = null,
        t.onopen = null)
    }
}
Fr.WalletLinkWebSocket = ch;
Object.defineProperty(vs, "__esModule", {
    value: !0
});
vs.WalletLinkConnection = void 0;
const Mr = We
  , lh = ys
  , mt = Jr
  , Uo = lt
  , Rr = Gr
  , uh = ws
  , Un = Fr
  , Vo = 1e4
  , hh = 6e4;
class dh {
    constructor({session: t, linkAPIUrl: r, listener: n, diagnostic: i, WebSocketClass: s=WebSocket}) {
        this.destroyed = !1,
        this.lastHeartbeatResponse = 0,
        this.nextReqId = (0,
        Mr.IntNumber)(1),
        this._connected = !1,
        this._linked = !1,
        this.shouldFetchUnseenEventsOnConnect = !1,
        this.requestResolutions = new Map,
        this.handleSessionMetadataUpdated = c=>{
            if (!c)
                return;
            new Map([["__destroyed", this.handleDestroyed], ["EthereumAddress", this.handleAccountUpdated], ["WalletUsername", this.handleWalletUsernameUpdated], ["AppVersion", this.handleAppVersionUpdated], ["ChainId", u=>c.JsonRpcUrl && this.handleChainUpdated(u, c.JsonRpcUrl)]]).forEach((u,p)=>{
                const f = c[p];
                f !== void 0 && u(f)
            }
            )
        }
        ,
        this.handleDestroyed = c=>{
            var d, u;
            c === "1" && ((d = this.listener) === null || d === void 0 || d.resetAndReload(),
            (u = this.diagnostic) === null || u === void 0 || u.log(mt.EVENTS.METADATA_DESTROYED, {
                alreadyDestroyed: this.isDestroyed,
                sessionIdHash: Rr.Session.hash(this.session.id)
            }))
        }
        ,
        this.handleAccountUpdated = async c=>{
            var d, u;
            try {
                const p = await this.cipher.decrypt(c);
                (d = this.listener) === null || d === void 0 || d.accountUpdated(p)
            } catch {
                (u = this.diagnostic) === null || u === void 0 || u.log(mt.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "selectedAddress"
                })
            }
        }
        ,
        this.handleMetadataUpdated = async(c,d)=>{
            var u, p;
            try {
                const f = await this.cipher.decrypt(d);
                (u = this.listener) === null || u === void 0 || u.metadataUpdated(c, f)
            } catch {
                (p = this.diagnostic) === null || p === void 0 || p.log(mt.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: c
                })
            }
        }
        ,
        this.handleWalletUsernameUpdated = async c=>{
            this.handleMetadataUpdated(Uo.WALLET_USER_NAME_KEY, c)
        }
        ,
        this.handleAppVersionUpdated = async c=>{
            this.handleMetadataUpdated(Uo.APP_VERSION_KEY, c)
        }
        ,
        this.handleChainUpdated = async(c,d)=>{
            var u, p;
            try {
                const f = await this.cipher.decrypt(c)
                  , m = await this.cipher.decrypt(d);
                (u = this.listener) === null || u === void 0 || u.chainUpdated(f, m)
            } catch {
                (p = this.diagnostic) === null || p === void 0 || p.log(mt.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "chainId|jsonRpcUrl"
                })
            }
        }
        ,
        this.session = t,
        this.cipher = new lh.Cipher(t.secret),
        this.diagnostic = i,
        this.listener = n;
        const a = new Un.WalletLinkWebSocket(`${r}/rpc`,s);
        a.setConnectionStateListener(async c=>{
            var d;
            (d = this.diagnostic) === null || d === void 0 || d.log(mt.EVENTS.CONNECTED_STATE_CHANGE, {
                state: c,
                sessionIdHash: Rr.Session.hash(t.id)
            });
            let u = !1;
            switch (c) {
            case Un.ConnectionState.DISCONNECTED:
                if (!this.destroyed) {
                    const p = async()=>{
                        await new Promise(f=>setTimeout(f, 5e3)),
                        this.destroyed || a.connect().catch(()=>{
                            p()
                        }
                        )
                    }
                    ;
                    p()
                }
                break;
            case Un.ConnectionState.CONNECTED:
                try {
                    await this.authenticate(),
                    this.sendIsLinked(),
                    this.sendGetSessionConfig(),
                    u = !0
                } catch {}
                this.updateLastHeartbeat(),
                setInterval(()=>{
                    this.heartbeat()
                }
                , Vo),
                this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                break;
            case Un.ConnectionState.CONNECTING:
                break
            }
            this.connected !== u && (this.connected = u)
        }
        ),
        a.setIncomingDataListener(c=>{
            var d, u, p;
            switch (c.type) {
            case "Heartbeat":
                this.updateLastHeartbeat();
                return;
            case "IsLinkedOK":
            case "Linked":
                {
                    const f = c.type === "IsLinkedOK" ? c.linked : void 0;
                    (d = this.diagnostic) === null || d === void 0 || d.log(mt.EVENTS.LINKED, {
                        sessionIdHash: Rr.Session.hash(t.id),
                        linked: f,
                        type: c.type,
                        onlineGuests: c.onlineGuests
                    }),
                    this.linked = f || c.onlineGuests > 0;
                    break
                }
            case "GetSessionConfigOK":
            case "SessionConfigUpdated":
                {
                    (u = this.diagnostic) === null || u === void 0 || u.log(mt.EVENTS.SESSION_CONFIG_RECEIVED, {
                        sessionIdHash: Rr.Session.hash(t.id),
                        metadata_keys: c && c.metadata ? Object.keys(c.metadata) : void 0
                    }),
                    this.handleSessionMetadataUpdated(c.metadata);
                    break
                }
            case "Event":
                {
                    this.handleIncomingEvent(c);
                    break
                }
            }
            c.id !== void 0 && ((p = this.requestResolutions.get(c.id)) === null || p === void 0 || p(c))
        }
        ),
        this.ws = a,
        this.http = new uh.WalletLinkHTTP(r,t.id,t.key)
    }
    connect() {
        var t;
        if (this.destroyed)
            throw new Error("instance is destroyed");
        (t = this.diagnostic) === null || t === void 0 || t.log(mt.EVENTS.STARTED_CONNECTING, {
            sessionIdHash: Rr.Session.hash(this.session.id)
        }),
        this.ws.connect()
    }
    destroy() {
        var t;
        this.destroyed = !0,
        this.ws.disconnect(),
        (t = this.diagnostic) === null || t === void 0 || t.log(mt.EVENTS.DISCONNECTED, {
            sessionIdHash: Rr.Session.hash(this.session.id)
        }),
        this.listener = void 0
    }
    get isDestroyed() {
        return this.destroyed
    }
    get connected() {
        return this._connected
    }
    set connected(t) {
        var r, n;
        this._connected = t,
        t && ((r = this.onceConnected) === null || r === void 0 || r.call(this)),
        (n = this.listener) === null || n === void 0 || n.connectedUpdated(t)
    }
    setOnceConnected(t) {
        return new Promise(r=>{
            this.connected ? t().then(r) : this.onceConnected = ()=>{
                t().then(r),
                this.onceConnected = void 0
            }
        }
        )
    }
    get linked() {
        return this._linked
    }
    set linked(t) {
        var r, n;
        this._linked = t,
        t && ((r = this.onceLinked) === null || r === void 0 || r.call(this)),
        (n = this.listener) === null || n === void 0 || n.linkedUpdated(t)
    }
    setOnceLinked(t) {
        return new Promise(r=>{
            this.linked ? t().then(r) : this.onceLinked = ()=>{
                t().then(r),
                this.onceLinked = void 0
            }
        }
        )
    }
    async handleIncomingEvent(t) {
        var r, n;
        if (!(t.type !== "Event" || t.event !== "Web3Response"))
            try {
                const i = await this.cipher.decrypt(t.data)
                  , s = JSON.parse(i);
                if (s.type !== "WEB3_RESPONSE")
                    return;
                (r = this.listener) === null || r === void 0 || r.handleWeb3ResponseMessage(s)
            } catch {
                (n = this.diagnostic) === null || n === void 0 || n.log(mt.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "incomingEvent"
                })
            }
    }
    async checkUnseenEvents() {
        if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return
        }
        await new Promise(t=>setTimeout(t, 250));
        try {
            await this.fetchUnseenEventsAPI()
        } catch (t) {
            console.error("Unable to check for unseen events", t)
        }
    }
    async fetchUnseenEventsAPI() {
        this.shouldFetchUnseenEventsOnConnect = !1,
        (await this.http.fetchUnseenEvents()).forEach(r=>this.handleIncomingEvent(r))
    }
    async setSessionMetadata(t, r) {
        const n = {
            type: "SetSessionConfig",
            id: (0,
            Mr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            metadata: {
                [t]: r
            }
        };
        return this.setOnceConnected(async()=>{
            const i = await this.makeRequest(n);
            if (i.type === "Fail")
                throw new Error(i.error || "failed to set session metadata")
        }
        )
    }
    async publishEvent(t, r, n=!1) {
        const i = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, r), {
            origin: location.origin,
            relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
        })))
          , s = {
            type: "PublishEvent",
            id: (0,
            Mr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            event: t,
            data: i,
            callWebhook: n
        };
        return this.setOnceLinked(async()=>{
            const a = await this.makeRequest(s);
            if (a.type === "Fail")
                throw new Error(a.error || "failed to publish event");
            return a.eventId
        }
        )
    }
    sendData(t) {
        this.ws.sendData(JSON.stringify(t))
    }
    updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now()
    }
    heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > Vo * 2) {
            this.ws.disconnect();
            return
        }
        try {
            this.ws.sendData("h")
        } catch {}
    }
    async makeRequest(t, r=hh) {
        const n = t.id;
        this.sendData(t);
        let i;
        return Promise.race([new Promise((s,a)=>{
            i = window.setTimeout(()=>{
                a(new Error(`request ${n} timed out`))
            }
            , r)
        }
        ), new Promise(s=>{
            this.requestResolutions.set(n, a=>{
                clearTimeout(i),
                s(a),
                this.requestResolutions.delete(n)
            }
            )
        }
        )])
    }
    async authenticate() {
        const t = {
            type: "HostSession",
            id: (0,
            Mr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            sessionKey: this.session.key
        }
          , r = await this.makeRequest(t);
        if (r.type === "Fail")
            throw new Error(r.error || "failed to authentcate")
    }
    sendIsLinked() {
        const t = {
            type: "IsLinked",
            id: (0,
            Mr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id
        };
        this.sendData(t)
    }
    sendGetSessionConfig() {
        const t = {
            type: "GetSessionConfig",
            id: (0,
            Mr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id
        };
        this.sendData(t)
    }
}
vs.WalletLinkConnection = dh;
var kn = {}
  , Cn = {}
  , Gi = {};
Object.defineProperty(Gi, "__esModule", {
    value: !0
});
Gi.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var fh = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Cn, "__esModule", {
    value: !0
});
Cn.injectCssReset = void 0;
const ph = fh(Gi);
function gh() {
    const e = document.createElement("style");
    e.type = "text/css",
    e.appendChild(document.createTextNode(ph.default)),
    document.documentElement.appendChild(e)
}
Cn.injectCssReset = gh;
var bs = {}, Mn, Ce, wc, bc, er, zo, Ec, Ni, Zi, xi, Li, Sc, pn = {}, kc = [], mh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Es = Array.isArray;
function Rt(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}
function Cc(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}
function Ti(e, t, r) {
    var n, i, s, a = {};
    for (s in t)
        s == "key" ? n = t[s] : s == "ref" ? i = t[s] : a[s] = t[s];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? Mn.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
        for (s in e.defaultProps)
            a[s] === void 0 && (a[s] = e.defaultProps[s]);
    return un(e, a, n, i, null)
}
function un(e, t, r, n, i) {
    var s = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: i ?? ++wc,
        __i: -1,
        __u: 0
    };
    return i == null && Ce.vnode != null && Ce.vnode(s),
    s
}
function _h() {
    return {
        current: null
    }
}
function Rn(e) {
    return e.children
}
function hn(e, t) {
    this.props = e,
    this.context = t
}
function or(e, t) {
    if (t == null)
        return e.__ ? or(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++)
        if ((r = e.__k[t]) != null && r.__e != null)
            return r.__e;
    return typeof e.type == "function" ? or(e) : null
}
function Mc(e) {
    var t, r;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null,
        t = 0; t < e.__k.length; t++)
            if ((r = e.__k[t]) != null && r.__e != null) {
                e.__e = e.__c.base = r.__e;
                break
            }
        return Mc(e)
    }
}
function Pi(e) {
    (!e.__d && (e.__d = !0) && er.push(e) && !ss.__r++ || zo !== Ce.debounceRendering) && ((zo = Ce.debounceRendering) || Ec)(ss)
}
function ss() {
    var e, t, r, n, i, s, a, c;
    for (er.sort(Ni); e = er.shift(); )
        e.__d && (t = er.length,
        n = void 0,
        s = (i = (r = e).__v).__e,
        a = [],
        c = [],
        r.__P && ((n = Rt({}, i)).__v = i.__v + 1,
        Ce.vnode && Ce.vnode(n),
        Qi(r.__P, n, i, r.__n, r.__P.namespaceURI, 32 & i.__u ? [s] : null, a, s ?? or(i), !!(32 & i.__u), c),
        n.__v = i.__v,
        n.__.__k[n.__i] = n,
        Nc(a, n, c),
        n.__e != s && Mc(n)),
        er.length > t && er.sort(Ni));
    ss.__r = 0
}
function Rc(e, t, r, n, i, s, a, c, d, u, p) {
    var f, m, E, C, N, M = n && n.__k || kc, A = t.length;
    for (r.__d = d,
    vh(r, t, M),
    d = r.__d,
    f = 0; f < A; f++)
        (E = r.__k[f]) != null && typeof E != "boolean" && typeof E != "function" && (m = E.__i === -1 ? pn : M[E.__i] || pn,
        E.__i = f,
        Qi(e, E, m, i, s, a, c, d, u, p),
        C = E.__e,
        E.ref && m.ref != E.ref && (m.ref && Ki(m.ref, null, E),
        p.push(E.ref, E.__c || C, E)),
        N == null && C != null && (N = C),
        65536 & E.__u || m.__k === E.__k ? (d && !d.isConnected && (d = or(m)),
        d = Ic(E, d, e)) : typeof E.type == "function" && E.__d !== void 0 ? d = E.__d : C && (d = C.nextSibling),
        E.__d = void 0,
        E.__u &= -196609);
    r.__d = d,
    r.__e = N
}
function vh(e, t, r) {
    var n, i, s, a, c, d = t.length, u = r.length, p = u, f = 0;
    for (e.__k = [],
    n = 0; n < d; n++)
        a = n + f,
        (i = e.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? un(null, i, null, null, null) : Es(i) ? un(Rn, {
            children: i
        }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? un(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = e,
        i.__b = e.__b + 1,
        c = yh(i, r, a, p),
        i.__i = c,
        s = null,
        c !== -1 && (p--,
        (s = r[c]) && (s.__u |= 131072)),
        s == null || s.__v === null ? (c == -1 && f--,
        typeof i.type != "function" && (i.__u |= 65536)) : c !== a && (c === a + 1 ? f++ : c > a ? p > d - a ? f += c - a : f-- : c < a ? c == a - 1 && (f = c - a) : f = 0,
        c !== n + f && (i.__u |= 65536))) : (s = r[a]) && s.key == null && s.__e && !(131072 & s.__u) && (s.__e == e.__d && (e.__d = or(s)),
        Oi(s, s, !1),
        r[a] = null,
        p--);
    if (p)
        for (n = 0; n < u; n++)
            (s = r[n]) != null && !(131072 & s.__u) && (s.__e == e.__d && (e.__d = or(s)),
            Oi(s, s))
}
function Ic(e, t, r) {
    var n, i;
    if (typeof e.type == "function") {
        for (n = e.__k,
        i = 0; n && i < n.length; i++)
            n[i] && (n[i].__ = e,
            t = Ic(n[i], t, r));
        return t
    }
    e.__e != t && (r.insertBefore(e.__e, t || null),
    t = e.__e);
    do
        t = t && t.nextSibling;
    while (t != null && t.nodeType === 8);
    return t
}
function Ac(e, t) {
    return t = t || [],
    e == null || typeof e == "boolean" || (Es(e) ? e.some(function(r) {
        Ac(r, t)
    }) : t.push(e)),
    t
}
function yh(e, t, r, n) {
    var i = e.key
      , s = e.type
      , a = r - 1
      , c = r + 1
      , d = t[r];
    if (d === null || d && i == d.key && s === d.type && !(131072 & d.__u))
        return r;
    if (n > (d != null && !(131072 & d.__u) ? 1 : 0))
        for (; a >= 0 || c < t.length; ) {
            if (a >= 0) {
                if ((d = t[a]) && !(131072 & d.__u) && i == d.key && s === d.type)
                    return a;
                a--
            }
            if (c < t.length) {
                if ((d = t[c]) && !(131072 & d.__u) && i == d.key && s === d.type)
                    return c;
                c++
            }
        }
    return -1
}
function Wo(e, t, r) {
    t[0] === "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || mh.test(t) ? r : r + "px"
}
function Vn(e, t, r, n, i) {
    var s;
    e: if (t === "style")
        if (typeof r == "string")
            e.style.cssText = r;
        else {
            if (typeof n == "string" && (e.style.cssText = n = ""),
            n)
                for (t in n)
                    r && t in r || Wo(e.style, t, "");
            if (r)
                for (t in r)
                    n && r[t] === n[t] || Wo(e.style, t, r[t])
        }
    else if (t[0] === "o" && t[1] === "n")
        s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")),
        t = t.toLowerCase()in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2),
        e.l || (e.l = {}),
        e.l[t + s] = r,
        r ? n ? r.u = n.u : (r.u = Zi,
        e.addEventListener(t, s ? Li : xi, s)) : e.removeEventListener(t, s ? Li : xi, s);
    else {
        if (i == "http://www.w3.org/2000/svg")
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t in e)
            try {
                e[t] = r ?? "";
                break e
            } catch {}
        typeof r == "function" || (r == null || r === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, r))
    }
}
function qo(e) {
    return function(t) {
        if (this.l) {
            var r = this.l[t.type + e];
            if (t.t == null)
                t.t = Zi++;
            else if (t.t < r.u)
                return;
            return r(Ce.event ? Ce.event(t) : t)
        }
    }
}
function Qi(e, t, r, n, i, s, a, c, d, u) {
    var p, f, m, E, C, N, M, A, I, R, F, x, P, z, Y, G = t.type;
    if (t.constructor !== void 0)
        return null;
    128 & r.__u && (d = !!(32 & r.__u),
    s = [c = t.__e = r.__e]),
    (p = Ce.__b) && p(t);
    e: if (typeof G == "function")
        try {
            if (A = t.props,
            I = (p = G.contextType) && n[p.__c],
            R = p ? I ? I.props.value : p.__ : n,
            r.__c ? M = (f = t.__c = r.__c).__ = f.__E : ("prototype"in G && G.prototype.render ? t.__c = f = new G(A,R) : (t.__c = f = new hn(A,R),
            f.constructor = G,
            f.render = bh),
            I && I.sub(f),
            f.props = A,
            f.state || (f.state = {}),
            f.context = R,
            f.__n = n,
            m = f.__d = !0,
            f.__h = [],
            f._sb = []),
            f.__s == null && (f.__s = f.state),
            G.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = Rt({}, f.__s)),
            Rt(f.__s, G.getDerivedStateFromProps(A, f.__s))),
            E = f.props,
            C = f.state,
            f.__v = t,
            m)
                G.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(),
                f.componentDidMount != null && f.__h.push(f.componentDidMount);
            else {
                if (G.getDerivedStateFromProps == null && A !== E && f.componentWillReceiveProps != null && f.componentWillReceiveProps(A, R),
                !f.__e && (f.shouldComponentUpdate != null && f.shouldComponentUpdate(A, f.__s, R) === !1 || t.__v === r.__v)) {
                    for (t.__v !== r.__v && (f.props = A,
                    f.state = f.__s,
                    f.__d = !1),
                    t.__e = r.__e,
                    t.__k = r.__k,
                    t.__k.forEach(function(Z) {
                        Z && (Z.__ = t)
                    }),
                    F = 0; F < f._sb.length; F++)
                        f.__h.push(f._sb[F]);
                    f._sb = [],
                    f.__h.length && a.push(f);
                    break e
                }
                f.componentWillUpdate != null && f.componentWillUpdate(A, f.__s, R),
                f.componentDidUpdate != null && f.__h.push(function() {
                    f.componentDidUpdate(E, C, N)
                })
            }
            if (f.context = R,
            f.props = A,
            f.__P = e,
            f.__e = !1,
            x = Ce.__r,
            P = 0,
            "prototype"in G && G.prototype.render) {
                for (f.state = f.__s,
                f.__d = !1,
                x && x(t),
                p = f.render(f.props, f.state, f.context),
                z = 0; z < f._sb.length; z++)
                    f.__h.push(f._sb[z]);
                f._sb = []
            } else
                do
                    f.__d = !1,
                    x && x(t),
                    p = f.render(f.props, f.state, f.context),
                    f.state = f.__s;
                while (f.__d && ++P < 25);
            f.state = f.__s,
            f.getChildContext != null && (n = Rt(Rt({}, n), f.getChildContext())),
            m || f.getSnapshotBeforeUpdate == null || (N = f.getSnapshotBeforeUpdate(E, C)),
            Rc(e, Es(Y = p != null && p.type === Rn && p.key == null ? p.props.children : p) ? Y : [Y], t, r, n, i, s, a, c, d, u),
            f.base = t.__e,
            t.__u &= -161,
            f.__h.length && a.push(f),
            M && (f.__E = f.__ = null)
        } catch (Z) {
            t.__v = null,
            d || s != null ? (t.__e = c,
            t.__u |= d ? 160 : 32,
            s[s.indexOf(c)] = null) : (t.__e = r.__e,
            t.__k = r.__k),
            Ce.__e(Z, t, r)
        }
    else
        s == null && t.__v === r.__v ? (t.__k = r.__k,
        t.__e = r.__e) : t.__e = wh(r.__e, t, r, n, i, s, a, d, u);
    (p = Ce.diffed) && p(t)
}
function Nc(e, t, r) {
    t.__d = void 0;
    for (var n = 0; n < r.length; n++)
        Ki(r[n], r[++n], r[++n]);
    Ce.__c && Ce.__c(t, e),
    e.some(function(i) {
        try {
            e = i.__h,
            i.__h = [],
            e.some(function(s) {
                s.call(i)
            })
        } catch (s) {
            Ce.__e(s, i.__v)
        }
    })
}
function wh(e, t, r, n, i, s, a, c, d) {
    var u, p, f, m, E, C, N, M = r.props, A = t.props, I = t.type;
    if (I === "svg" ? i = "http://www.w3.org/2000/svg" : I === "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"),
    s != null) {
        for (u = 0; u < s.length; u++)
            if ((E = s[u]) && "setAttribute"in E == !!I && (I ? E.localName === I : E.nodeType === 3)) {
                e = E,
                s[u] = null;
                break
            }
    }
    if (e == null) {
        if (I === null)
            return document.createTextNode(A);
        e = document.createElementNS(i, I, A.is && A),
        s = null,
        c = !1
    }
    if (I === null)
        M === A || c && e.data === A || (e.data = A);
    else {
        if (s = s && Mn.call(e.childNodes),
        M = r.props || pn,
        !c && s != null)
            for (M = {},
            u = 0; u < e.attributes.length; u++)
                M[(E = e.attributes[u]).name] = E.value;
        for (u in M)
            if (E = M[u],
            u != "children") {
                if (u == "dangerouslySetInnerHTML")
                    f = E;
                else if (u !== "key" && !(u in A)) {
                    if (u == "value" && "defaultValue"in A || u == "checked" && "defaultChecked"in A)
                        continue;
                    Vn(e, u, null, E, i)
                }
            }
        for (u in A)
            E = A[u],
            u == "children" ? m = E : u == "dangerouslySetInnerHTML" ? p = E : u == "value" ? C = E : u == "checked" ? N = E : u === "key" || c && typeof E != "function" || M[u] === E || Vn(e, u, E, M[u], i);
        if (p)
            c || f && (p.__html === f.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html),
            t.__k = [];
        else if (f && (e.innerHTML = ""),
        Rc(e, Es(m) ? m : [m], t, r, n, I === "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, s, a, s ? s[0] : r.__k && or(r, 0), c, d),
        s != null)
            for (u = s.length; u--; )
                s[u] != null && Cc(s[u]);
        c || (u = "value",
        C !== void 0 && (C !== e[u] || I === "progress" && !C || I === "option" && C !== M[u]) && Vn(e, u, C, M[u], i),
        u = "checked",
        N !== void 0 && N !== e[u] && Vn(e, u, N, M[u], i))
    }
    return e
}
function Ki(e, t, r) {
    try {
        typeof e == "function" ? e(t) : e.current = t
    } catch (n) {
        Ce.__e(n, r)
    }
}
function Oi(e, t, r) {
    var n, i;
    if (Ce.unmount && Ce.unmount(e),
    (n = e.ref) && (n.current && n.current !== e.__e || Ki(n, null, t)),
    (n = e.__c) != null) {
        if (n.componentWillUnmount)
            try {
                n.componentWillUnmount()
            } catch (s) {
                Ce.__e(s, t)
            }
        n.base = n.__P = null
    }
    if (n = e.__k)
        for (i = 0; i < n.length; i++)
            n[i] && Oi(n[i], t, r || typeof e.type != "function");
    r || e.__e == null || Cc(e.__e),
    e.__c = e.__ = e.__e = e.__d = void 0
}
function bh(e, t, r) {
    return this.constructor(e, r)
}
function xc(e, t, r) {
    var n, i, s, a;
    Ce.__ && Ce.__(e, t),
    i = (n = typeof r == "function") ? null : r && r.__k || t.__k,
    s = [],
    a = [],
    Qi(t, e = (!n && r || t).__k = Ti(Rn, null, [e]), i || pn, pn, t.namespaceURI, !n && r ? [r] : i ? null : t.firstChild ? Mn.call(t.childNodes) : null, s, !n && r ? r : i ? i.__e : t.firstChild, n, a),
    Nc(s, e, a)
}
function Lc(e, t) {
    xc(e, t, Lc)
}
function Eh(e, t, r) {
    var n, i, s, a, c = Rt({}, e.props);
    for (s in e.type && e.type.defaultProps && (a = e.type.defaultProps),
    t)
        s == "key" ? n = t[s] : s == "ref" ? i = t[s] : c[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s];
    return arguments.length > 2 && (c.children = arguments.length > 3 ? Mn.call(arguments, 2) : r),
    un(e.type, c, n || e.key, i || e.ref, null)
}
function Sh(e, t) {
    var r = {
        __c: t = "__cC" + Sc++,
        __: e,
        Consumer: function(n, i) {
            return n.children(i)
        },
        Provider: function(n) {
            var i, s;
            return this.getChildContext || (i = [],
            (s = {})[t] = this,
            this.getChildContext = function() {
                return s
            }
            ,
            this.shouldComponentUpdate = function(a) {
                this.props.value !== a.value && i.some(function(c) {
                    c.__e = !0,
                    Pi(c)
                })
            }
            ,
            this.sub = function(a) {
                i.push(a);
                var c = a.componentWillUnmount;
                a.componentWillUnmount = function() {
                    i.splice(i.indexOf(a), 1),
                    c && c.call(a)
                }
            }
            ),
            n.children
        }
    };
    return r.Provider.__ = r.Consumer.contextType = r
}
Mn = kc.slice,
Ce = {
    __e: function(e, t, r, n) {
        for (var i, s, a; t = t.__; )
            if ((i = t.__c) && !i.__)
                try {
                    if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(e)),
                    a = i.__d),
                    i.componentDidCatch != null && (i.componentDidCatch(e, n || {}),
                    a = i.__d),
                    a)
                        return i.__E = i
                } catch (c) {
                    e = c
                }
        throw e
    }
},
wc = 0,
bc = function(e) {
    return e != null && e.constructor == null
}
,
hn.prototype.setState = function(e, t) {
    var r;
    r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Rt({}, this.state),
    typeof e == "function" && (e = e(Rt({}, r), this.props)),
    e && Rt(r, e),
    e != null && this.__v && (t && this._sb.push(t),
    Pi(this))
}
,
hn.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0,
    e && this.__h.push(e),
    Pi(this))
}
,
hn.prototype.render = Rn,
er = [],
Ec = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
Ni = function(e, t) {
    return e.__v.__b - t.__v.__b
}
,
ss.__r = 0,
Zi = 0,
xi = qo(!1),
Li = qo(!0),
Sc = 0;
const kh = Object.freeze(Object.defineProperty({
    __proto__: null,
    Component: hn,
    Fragment: Rn,
    cloneElement: Eh,
    createContext: Sh,
    createElement: Ti,
    createRef: _h,
    h: Ti,
    hydrate: Lc,
    get isValidElement() {
        return bc
    },
    get options() {
        return Ce
    },
    render: xc,
    toChildArray: Ac
}, Symbol.toStringTag, {
    value: "Module"
}))
  , tt = _n(kh);
var Ss = {};
function Tc(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number")
        n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (r = Tc(e[t])) && (n && (n += " "),
                n += r);
        else
            for (t in e)
                e[t] && (n && (n += " "),
                n += t);
    return n
}
function Jo() {
    for (var e, t, r = 0, n = ""; r < arguments.length; )
        (e = arguments[r++]) && (t = Tc(e)) && (n && (n += " "),
        n += t);
    return n
}
const Ch = Object.freeze(Object.defineProperty({
    __proto__: null,
    clsx: Jo,
    default: Jo
}, Symbol.toStringTag, {
    value: "Module"
}))
  , In = _n(Ch);
var At, X, ci, Go, jr = 0, Pc = [], ts = [], De = Ce, Zo = De.__b, Qo = De.__r, Ko = De.diffed, Xo = De.__c, Yo = De.unmount, ea = De.__;
function ur(e, t) {
    De.__h && De.__h(X, e, jr || t),
    jr = 0;
    var r = X.__H || (X.__H = {
        __: [],
        __h: []
    });
    return e >= r.__.length && r.__.push({
        __V: ts
    }),
    r.__[e]
}
function Oc(e) {
    return jr = 1,
    $c(Fc, e)
}
function $c(e, t, r) {
    var n = ur(At++, 2);
    if (n.t = e,
    !n.__c && (n.__ = [r ? r(t) : Fc(void 0, t), function(c) {
        var d = n.__N ? n.__N[0] : n.__[0]
          , u = n.t(d, c);
        d !== u && (n.__N = [u, n.__[1]],
        n.__c.setState({}))
    }
    ],
    n.__c = X,
    !X.u)) {
        var i = function(c, d, u) {
            if (!n.__c.__H)
                return !0;
            var p = n.__c.__H.__.filter(function(m) {
                return !!m.__c
            });
            if (p.every(function(m) {
                return !m.__N
            }))
                return !s || s.call(this, c, d, u);
            var f = !1;
            return p.forEach(function(m) {
                if (m.__N) {
                    var E = m.__[0];
                    m.__ = m.__N,
                    m.__N = void 0,
                    E !== m.__[0] && (f = !0)
                }
            }),
            !(!f && n.__c.props === c) && (!s || s.call(this, c, d, u))
        };
        X.u = !0;
        var s = X.shouldComponentUpdate
          , a = X.componentWillUpdate;
        X.componentWillUpdate = function(c, d, u) {
            if (this.__e) {
                var p = s;
                s = void 0,
                i(c, d, u),
                s = p
            }
            a && a.call(this, c, d, u)
        }
        ,
        X.shouldComponentUpdate = i
    }
    return n.__N || n.__
}
function Mh(e, t) {
    var r = ur(At++, 3);
    !De.__s && Yi(r.__H, t) && (r.__ = e,
    r.i = t,
    X.__H.__h.push(r))
}
function Bc(e, t) {
    var r = ur(At++, 4);
    !De.__s && Yi(r.__H, t) && (r.__ = e,
    r.i = t,
    X.__h.push(r))
}
function Rh(e) {
    return jr = 5,
    Xi(function() {
        return {
            current: e
        }
    }, [])
}
function Ih(e, t, r) {
    jr = 6,
    Bc(function() {
        return typeof e == "function" ? (e(t()),
        function() {
            return e(null)
        }
        ) : e ? (e.current = t(),
        function() {
            return e.current = null
        }
        ) : void 0
    }, r == null ? r : r.concat(e))
}
function Xi(e, t) {
    var r = ur(At++, 7);
    return Yi(r.__H, t) ? (r.__V = e(),
    r.i = t,
    r.__h = e,
    r.__V) : r.__
}
function Ah(e, t) {
    return jr = 8,
    Xi(function() {
        return e
    }, t)
}
function Nh(e) {
    var t = X.context[e.__c]
      , r = ur(At++, 9);
    return r.c = e,
    t ? (r.__ == null && (r.__ = !0,
    t.sub(X)),
    t.props.value) : e.__
}
function xh(e, t) {
    De.useDebugValue && De.useDebugValue(t ? t(e) : e)
}
function Lh(e) {
    var t = ur(At++, 10)
      , r = Oc();
    return t.__ = e,
    X.componentDidCatch || (X.componentDidCatch = function(n, i) {
        t.__ && t.__(n, i),
        r[1](n)
    }
    ),
    [r[0], function() {
        r[1](void 0)
    }
    ]
}
function Th() {
    var e = ur(At++, 11);
    if (!e.__) {
        for (var t = X.__v; t !== null && !t.__m && t.__ !== null; )
            t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++
    }
    return e.__
}
function Ph() {
    for (var e; e = Pc.shift(); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(rs),
                e.__H.__h.forEach($i),
                e.__H.__h = []
            } catch (t) {
                e.__H.__h = [],
                De.__e(t, e.__v)
            }
}
De.__b = function(e) {
    X = null,
    Zo && Zo(e)
}
,
De.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m),
    ea && ea(e, t)
}
,
De.__r = function(e) {
    Qo && Qo(e),
    At = 0;
    var t = (X = e.__c).__H;
    t && (ci === X ? (t.__h = [],
    X.__h = [],
    t.__.forEach(function(r) {
        r.__N && (r.__ = r.__N),
        r.__V = ts,
        r.__N = r.i = void 0
    })) : (t.__h.forEach(rs),
    t.__h.forEach($i),
    t.__h = [],
    At = 0)),
    ci = X
}
,
De.diffed = function(e) {
    Ko && Ko(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Pc.push(t) !== 1 && Go === De.requestAnimationFrame || ((Go = De.requestAnimationFrame) || Oh)(Ph)),
    t.__H.__.forEach(function(r) {
        r.i && (r.__H = r.i),
        r.__V !== ts && (r.__ = r.__V),
        r.i = void 0,
        r.__V = ts
    })),
    ci = X = null
}
,
De.__c = function(e, t) {
    t.some(function(r) {
        try {
            r.__h.forEach(rs),
            r.__h = r.__h.filter(function(n) {
                return !n.__ || $i(n)
            })
        } catch (n) {
            t.some(function(i) {
                i.__h && (i.__h = [])
            }),
            t = [],
            De.__e(n, r.__v)
        }
    }),
    Xo && Xo(e, t)
}
,
De.unmount = function(e) {
    Yo && Yo(e);
    var t, r = e.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            rs(n)
        } catch (i) {
            t = i
        }
    }),
    r.__H = void 0,
    t && De.__e(t, r.__v))
}
;
var ta = typeof requestAnimationFrame == "function";
function Oh(e) {
    var t, r = function() {
        clearTimeout(n),
        ta && cancelAnimationFrame(t),
        setTimeout(e)
    }, n = setTimeout(r, 100);
    ta && (t = requestAnimationFrame(r))
}
function rs(e) {
    var t = X
      , r = e.__c;
    typeof r == "function" && (e.__c = void 0,
    r()),
    X = t
}
function $i(e) {
    var t = X;
    e.__c = e.__(),
    X = t
}
function Yi(e, t) {
    return !e || e.length !== t.length || t.some(function(r, n) {
        return r !== e[n]
    })
}
function Fc(e, t) {
    return typeof t == "function" ? t(e) : t
}
const $h = Object.freeze(Object.defineProperty({
    __proto__: null,
    useCallback: Ah,
    useContext: Nh,
    useDebugValue: xh,
    useEffect: Mh,
    useErrorBoundary: Lh,
    useId: Th,
    useImperativeHandle: Ih,
    useLayoutEffect: Bc,
    useMemo: Xi,
    useReducer: $c,
    useRef: Rh,
    useState: Oc
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ks = _n($h);
var Dr = {}
  , Cs = {};
Object.defineProperty(Cs, "__esModule", {
    value: !0
});
Cs.CloseIcon = void 0;
const ra = tt;
function Bh(e) {
    return (0,
    ra.h)("svg", Object.assign({
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    ra.h)("path", {
        d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
    }))
}
Cs.CloseIcon = Bh;
var Ms = {};
Object.defineProperty(Ms, "__esModule", {
    value: !0
});
Ms.CoinbaseWalletRound = void 0;
const zn = tt;
function Fh(e) {
    return (0,
    zn.h)("svg", Object.assign({
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    zn.h)("circle", {
        cx: "14",
        cy: "14",
        r: "14",
        fill: "#0052FF"
    }), (0,
    zn.h)("path", {
        d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
        fill: "white"
    }), (0,
    zn.h)("path", {
        d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
        fill: "#0052FF"
    }))
}
Ms.CoinbaseWalletRound = Fh;
var Rs = {};
Object.defineProperty(Rs, "__esModule", {
    value: !0
});
Rs.QRCodeIcon = void 0;
const on = tt;
function jh(e) {
    return (0,
    on.h)("svg", Object.assign({
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    on.h)("path", {
        d: "M3 3V8.99939L5 8.99996V5H9V3H3Z"
    }), (0,
    on.h)("path", {
        d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z"
    }), (0,
    on.h)("path", {
        d: "M21 9H19V5H15.0006L15 3H21V9Z"
    }), (0,
    on.h)("path", {
        d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z"
    }))
}
Rs.QRCodeIcon = jh;
var Is = {};
function jc(e) {
    this.mode = st.MODE_8BIT_BYTE,
    this.data = e,
    this.parsedData = [];
    for (var t = 0, r = this.data.length; t < r; t++) {
        var n = []
          , i = this.data.charCodeAt(t);
        i > 65536 ? (n[0] = 240 | (i & 1835008) >>> 18,
        n[1] = 128 | (i & 258048) >>> 12,
        n[2] = 128 | (i & 4032) >>> 6,
        n[3] = 128 | i & 63) : i > 2048 ? (n[0] = 224 | (i & 61440) >>> 12,
        n[1] = 128 | (i & 4032) >>> 6,
        n[2] = 128 | i & 63) : i > 128 ? (n[0] = 192 | (i & 1984) >>> 6,
        n[1] = 128 | i & 63) : n[0] = i,
        this.parsedData.push(n)
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData),
    this.parsedData.length != this.data.length && (this.parsedData.unshift(191),
    this.parsedData.unshift(187),
    this.parsedData.unshift(239))
}
jc.prototype = {
    getLength: function(e) {
        return this.parsedData.length
    },
    write: function(e) {
        for (var t = 0, r = this.parsedData.length; t < r; t++)
            e.put(this.parsedData[t], 8)
    }
};
function Et(e, t) {
    this.typeNumber = e,
    this.errorCorrectLevel = t,
    this.modules = null,
    this.moduleCount = 0,
    this.dataCache = null,
    this.dataList = []
}
Et.prototype = {
    addData: function(e) {
        var t = new jc(e);
        this.dataList.push(t),
        this.dataCache = null
    },
    isDark: function(e, t) {
        if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
            throw new Error(e + "," + t);
        return this.modules[e][t]
    },
    getModuleCount: function() {
        return this.moduleCount
    },
    make: function() {
        this.makeImpl(!1, this.getBestMaskPattern())
    },
    makeImpl: function(e, t) {
        this.moduleCount = this.typeNumber * 4 + 17,
        this.modules = new Array(this.moduleCount);
        for (var r = 0; r < this.moduleCount; r++) {
            this.modules[r] = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++)
                this.modules[r][n] = null
        }
        this.setupPositionProbePattern(0, 0),
        this.setupPositionProbePattern(this.moduleCount - 7, 0),
        this.setupPositionProbePattern(0, this.moduleCount - 7),
        this.setupPositionAdjustPattern(),
        this.setupTimingPattern(),
        this.setupTypeInfo(e, t),
        this.typeNumber >= 7 && this.setupTypeNumber(e),
        this.dataCache == null && (this.dataCache = Et.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
        this.mapData(this.dataCache, t)
    },
    setupPositionProbePattern: function(e, t) {
        for (var r = -1; r <= 7; r++)
            if (!(e + r <= -1 || this.moduleCount <= e + r))
                for (var n = -1; n <= 7; n++)
                    t + n <= -1 || this.moduleCount <= t + n || (0 <= r && r <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[e + r][t + n] = !0 : this.modules[e + r][t + n] = !1)
    },
    getBestMaskPattern: function() {
        for (var e = 0, t = 0, r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            var n = je.getLostPoint(this);
            (r == 0 || e > n) && (e = n,
            t = r)
        }
        return t
    },
    createMovieClip: function(e, t, r) {
        var n = e.createEmptyMovieClip(t, r)
          , i = 1;
        this.make();
        for (var s = 0; s < this.modules.length; s++)
            for (var a = s * i, c = 0; c < this.modules[s].length; c++) {
                var d = c * i
                  , u = this.modules[s][c];
                u && (n.beginFill(0, 100),
                n.moveTo(d, a),
                n.lineTo(d + i, a),
                n.lineTo(d + i, a + i),
                n.lineTo(d, a + i),
                n.endFill())
            }
        return n
    },
    setupTimingPattern: function() {
        for (var e = 8; e < this.moduleCount - 8; e++)
            this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
        for (var t = 8; t < this.moduleCount - 8; t++)
            this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0)
    },
    setupPositionAdjustPattern: function() {
        for (var e = je.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
            for (var r = 0; r < e.length; r++) {
                var n = e[t]
                  , i = e[r];
                if (this.modules[n][i] == null)
                    for (var s = -2; s <= 2; s++)
                        for (var a = -2; a <= 2; a++)
                            s == -2 || s == 2 || a == -2 || a == 2 || s == 0 && a == 0 ? this.modules[n + s][i + a] = !0 : this.modules[n + s][i + a] = !1
            }
    },
    setupTypeNumber: function(e) {
        for (var t = je.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
            var n = !e && (t >> r & 1) == 1;
            this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
        }
        for (var r = 0; r < 18; r++) {
            var n = !e && (t >> r & 1) == 1;
            this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
        }
    },
    setupTypeInfo: function(e, t) {
        for (var r = this.errorCorrectLevel << 3 | t, n = je.getBCHTypeInfo(r), i = 0; i < 15; i++) {
            var s = !e && (n >> i & 1) == 1;
            i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s
        }
        for (var i = 0; i < 15; i++) {
            var s = !e && (n >> i & 1) == 1;
            i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s
        }
        this.modules[this.moduleCount - 8][8] = !e
    },
    mapData: function(e, t) {
        for (var r = -1, n = this.moduleCount - 1, i = 7, s = 0, a = this.moduleCount - 1; a > 0; a -= 2)
            for (a == 6 && a--; ; ) {
                for (var c = 0; c < 2; c++)
                    if (this.modules[n][a - c] == null) {
                        var d = !1;
                        s < e.length && (d = (e[s] >>> i & 1) == 1);
                        var u = je.getMask(t, n, a - c);
                        u && (d = !d),
                        this.modules[n][a - c] = d,
                        i--,
                        i == -1 && (s++,
                        i = 7)
                    }
                if (n += r,
                n < 0 || this.moduleCount <= n) {
                    n -= r,
                    r = -r;
                    break
                }
            }
    }
};
Et.PAD0 = 236;
Et.PAD1 = 17;
Et.createData = function(e, t, r) {
    for (var n = bt.getRSBlocks(e, t), i = new Dc, s = 0; s < r.length; s++) {
        var a = r[s];
        i.put(a.mode, 4),
        i.put(a.getLength(), je.getLengthInBits(a.mode, e)),
        a.write(i)
    }
    for (var c = 0, s = 0; s < n.length; s++)
        c += n[s].dataCount;
    if (i.getLengthInBits() > c * 8)
        throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + c * 8 + ")");
    for (i.getLengthInBits() + 4 <= c * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
        i.putBit(!1);
    for (; !(i.getLengthInBits() >= c * 8 || (i.put(Et.PAD0, 8),
    i.getLengthInBits() >= c * 8)); )
        i.put(Et.PAD1, 8);
    return Et.createBytes(i, n)
}
;
Et.createBytes = function(e, t) {
    for (var r = 0, n = 0, i = 0, s = new Array(t.length), a = new Array(t.length), c = 0; c < t.length; c++) {
        var d = t[c].dataCount
          , u = t[c].totalCount - d;
        n = Math.max(n, d),
        i = Math.max(i, u),
        s[c] = new Array(d);
        for (var p = 0; p < s[c].length; p++)
            s[c][p] = 255 & e.buffer[p + r];
        r += d;
        var f = je.getErrorCorrectPolynomial(u)
          , m = new Tr(s[c],f.getLength() - 1)
          , E = m.mod(f);
        a[c] = new Array(f.getLength() - 1);
        for (var p = 0; p < a[c].length; p++) {
            var C = p + E.getLength() - a[c].length;
            a[c][p] = C >= 0 ? E.get(C) : 0
        }
    }
    for (var N = 0, p = 0; p < t.length; p++)
        N += t[p].totalCount;
    for (var M = new Array(N), A = 0, p = 0; p < n; p++)
        for (var c = 0; c < t.length; c++)
            p < s[c].length && (M[A++] = s[c][p]);
    for (var p = 0; p < i; p++)
        for (var c = 0; c < t.length; c++)
            p < a[c].length && (M[A++] = a[c][p]);
    return M
}
;
var st = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8
}
  , Tt = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
}
  , Nt = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
}
  , je = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function(e) {
        for (var t = e << 10; je.getBCHDigit(t) - je.getBCHDigit(je.G15) >= 0; )
            t ^= je.G15 << je.getBCHDigit(t) - je.getBCHDigit(je.G15);
        return (e << 10 | t) ^ je.G15_MASK
    },
    getBCHTypeNumber: function(e) {
        for (var t = e << 12; je.getBCHDigit(t) - je.getBCHDigit(je.G18) >= 0; )
            t ^= je.G18 << je.getBCHDigit(t) - je.getBCHDigit(je.G18);
        return e << 12 | t
    },
    getBCHDigit: function(e) {
        for (var t = 0; e != 0; )
            t++,
            e >>>= 1;
        return t
    },
    getPatternPosition: function(e) {
        return je.PATTERN_POSITION_TABLE[e - 1]
    },
    getMask: function(e, t, r) {
        switch (e) {
        case Nt.PATTERN000:
            return (t + r) % 2 == 0;
        case Nt.PATTERN001:
            return t % 2 == 0;
        case Nt.PATTERN010:
            return r % 3 == 0;
        case Nt.PATTERN011:
            return (t + r) % 3 == 0;
        case Nt.PATTERN100:
            return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
        case Nt.PATTERN101:
            return t * r % 2 + t * r % 3 == 0;
        case Nt.PATTERN110:
            return (t * r % 2 + t * r % 3) % 2 == 0;
        case Nt.PATTERN111:
            return (t * r % 3 + (t + r) % 2) % 2 == 0;
        default:
            throw new Error("bad maskPattern:" + e)
        }
    },
    getErrorCorrectPolynomial: function(e) {
        for (var t = new Tr([1],0), r = 0; r < e; r++)
            t = t.multiply(new Tr([1, Je.gexp(r)],0));
        return t
    },
    getLengthInBits: function(e, t) {
        if (1 <= t && t < 10)
            switch (e) {
            case st.MODE_NUMBER:
                return 10;
            case st.MODE_ALPHA_NUM:
                return 9;
            case st.MODE_8BIT_BYTE:
                return 8;
            case st.MODE_KANJI:
                return 8;
            default:
                throw new Error("mode:" + e)
            }
        else if (t < 27)
            switch (e) {
            case st.MODE_NUMBER:
                return 12;
            case st.MODE_ALPHA_NUM:
                return 11;
            case st.MODE_8BIT_BYTE:
                return 16;
            case st.MODE_KANJI:
                return 10;
            default:
                throw new Error("mode:" + e)
            }
        else if (t < 41)
            switch (e) {
            case st.MODE_NUMBER:
                return 14;
            case st.MODE_ALPHA_NUM:
                return 13;
            case st.MODE_8BIT_BYTE:
                return 16;
            case st.MODE_KANJI:
                return 12;
            default:
                throw new Error("mode:" + e)
            }
        else
            throw new Error("type:" + t)
    },
    getLostPoint: function(e) {
        for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
            for (var i = 0; i < t; i++) {
                for (var s = 0, a = e.isDark(n, i), c = -1; c <= 1; c++)
                    if (!(n + c < 0 || t <= n + c))
                        for (var d = -1; d <= 1; d++)
                            i + d < 0 || t <= i + d || c == 0 && d == 0 || a == e.isDark(n + c, i + d) && s++;
                s > 5 && (r += 3 + s - 5)
            }
        for (var n = 0; n < t - 1; n++)
            for (var i = 0; i < t - 1; i++) {
                var u = 0;
                e.isDark(n, i) && u++,
                e.isDark(n + 1, i) && u++,
                e.isDark(n, i + 1) && u++,
                e.isDark(n + 1, i + 1) && u++,
                (u == 0 || u == 4) && (r += 3)
            }
        for (var n = 0; n < t; n++)
            for (var i = 0; i < t - 6; i++)
                e.isDark(n, i) && !e.isDark(n, i + 1) && e.isDark(n, i + 2) && e.isDark(n, i + 3) && e.isDark(n, i + 4) && !e.isDark(n, i + 5) && e.isDark(n, i + 6) && (r += 40);
        for (var i = 0; i < t; i++)
            for (var n = 0; n < t - 6; n++)
                e.isDark(n, i) && !e.isDark(n + 1, i) && e.isDark(n + 2, i) && e.isDark(n + 3, i) && e.isDark(n + 4, i) && !e.isDark(n + 5, i) && e.isDark(n + 6, i) && (r += 40);
        for (var p = 0, i = 0; i < t; i++)
            for (var n = 0; n < t; n++)
                e.isDark(n, i) && p++;
        var f = Math.abs(100 * p / t / t - 50) / 5;
        return r += f * 10,
        r
    }
}
  , Je = {
    glog: function(e) {
        if (e < 1)
            throw new Error("glog(" + e + ")");
        return Je.LOG_TABLE[e]
    },
    gexp: function(e) {
        for (; e < 0; )
            e += 255;
        for (; e >= 256; )
            e -= 255;
        return Je.EXP_TABLE[e]
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
};
for (var Ze = 0; Ze < 8; Ze++)
    Je.EXP_TABLE[Ze] = 1 << Ze;
for (var Ze = 8; Ze < 256; Ze++)
    Je.EXP_TABLE[Ze] = Je.EXP_TABLE[Ze - 4] ^ Je.EXP_TABLE[Ze - 5] ^ Je.EXP_TABLE[Ze - 6] ^ Je.EXP_TABLE[Ze - 8];
for (var Ze = 0; Ze < 255; Ze++)
    Je.LOG_TABLE[Je.EXP_TABLE[Ze]] = Ze;
function Tr(e, t) {
    if (e.length == null)
        throw new Error(e.length + "/" + t);
    for (var r = 0; r < e.length && e[r] == 0; )
        r++;
    this.num = new Array(e.length - r + t);
    for (var n = 0; n < e.length - r; n++)
        this.num[n] = e[n + r]
}
Tr.prototype = {
    get: function(e) {
        return this.num[e]
    },
    getLength: function() {
        return this.num.length
    },
    multiply: function(e) {
        for (var t = new Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
            for (var n = 0; n < e.getLength(); n++)
                t[r + n] ^= Je.gexp(Je.glog(this.get(r)) + Je.glog(e.get(n)));
        return new Tr(t,0)
    },
    mod: function(e) {
        if (this.getLength() - e.getLength() < 0)
            return this;
        for (var t = Je.glog(this.get(0)) - Je.glog(e.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
            r[n] = this.get(n);
        for (var n = 0; n < e.getLength(); n++)
            r[n] ^= Je.gexp(Je.glog(e.get(n)) + t);
        return new Tr(r,0).mod(e)
    }
};
function bt(e, t) {
    this.totalCount = e,
    this.dataCount = t
}
bt.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
bt.getRSBlocks = function(e, t) {
    var r = bt.getRsBlockTable(e, t);
    if (r == null)
        throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
    for (var n = r.length / 3, i = [], s = 0; s < n; s++)
        for (var a = r[s * 3 + 0], c = r[s * 3 + 1], d = r[s * 3 + 2], u = 0; u < a; u++)
            i.push(new bt(c,d));
    return i
}
;
bt.getRsBlockTable = function(e, t) {
    switch (t) {
    case Tt.L:
        return bt.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
    case Tt.M:
        return bt.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
    case Tt.Q:
        return bt.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
    case Tt.H:
        return bt.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
    default:
        return
    }
}
;
function Dc() {
    this.buffer = [],
    this.length = 0
}
Dc.prototype = {
    get: function(e) {
        var t = Math.floor(e / 8);
        return (this.buffer[t] >>> 7 - e % 8 & 1) == 1
    },
    put: function(e, t) {
        for (var r = 0; r < t; r++)
            this.putBit((e >>> t - r - 1 & 1) == 1)
    },
    getLengthInBits: function() {
        return this.length
    },
    putBit: function(e) {
        var t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0),
        e && (this.buffer[t] |= 128 >>> this.length % 8),
        this.length++
    }
};
var li = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function Hc(e) {
    if (this.options = {
        padding: 4,
        width: 256,
        height: 256,
        typeNumber: 4,
        color: "#000000",
        background: "#ffffff",
        ecl: "M",
        image: {
            svg: "",
            width: 0,
            height: 0
        }
    },
    typeof e == "string" && (e = {
        content: e
    }),
    e)
        for (var t in e)
            this.options[t] = e[t];
    if (typeof this.options.content != "string")
        throw new Error("Expected 'content' as string!");
    if (this.options.content.length === 0)
        throw new Error("Expected 'content' to be non-empty!");
    if (!(this.options.padding >= 0))
        throw new Error("Expected 'padding' value to be non-negative!");
    if (!(this.options.width > 0) || !(this.options.height > 0))
        throw new Error("Expected 'width' or 'height' value to be higher than zero!");
    function r(d) {
        switch (d) {
        case "L":
            return Tt.L;
        case "M":
            return Tt.M;
        case "Q":
            return Tt.Q;
        case "H":
            return Tt.H;
        default:
            throw new Error("Unknwon error correction level: " + d)
        }
    }
    function n(d, u) {
        for (var p = i(d), f = 1, m = 0, E = 0, C = li.length; E <= C; E++) {
            var N = li[E];
            if (!N)
                throw new Error("Content too long: expected " + m + " but got " + p);
            switch (u) {
            case "L":
                m = N[0];
                break;
            case "M":
                m = N[1];
                break;
            case "Q":
                m = N[2];
                break;
            case "H":
                m = N[3];
                break;
            default:
                throw new Error("Unknwon error correction level: " + u)
            }
            if (p <= m)
                break;
            f++
        }
        if (f > li.length)
            throw new Error("Content too long");
        return f
    }
    function i(d) {
        var u = encodeURI(d).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return u.length + (u.length != d ? 3 : 0)
    }
    var s = this.options.content
      , a = n(s, this.options.ecl)
      , c = r(this.options.ecl);
    this.qrcode = new Et(a,c),
    this.qrcode.addData(s),
    this.qrcode.make()
}
Hc.prototype.svg = function(e) {
    var t = this.options || {}
      , r = this.qrcode.modules;
    typeof e > "u" && (e = {
        container: t.container || "svg"
    });
    for (var n = typeof t.pretty < "u" ? !!t.pretty : !0, i = n ? "  " : "", s = n ? `\r
` : "", a = t.width, c = t.height, d = r.length, u = a / (d + 2 * t.padding), p = c / (d + 2 * t.padding), f = typeof t.join < "u" ? !!t.join : !1, m = typeof t.swap < "u" ? !!t.swap : !1, E = typeof t.xmlDeclaration < "u" ? !!t.xmlDeclaration : !0, C = typeof t.predefined < "u" ? !!t.predefined : !1, N = C ? i + '<defs><path id="qrmodule" d="M0 0 h' + p + " v" + u + ' H0 z" style="fill:' + t.color + ';shape-rendering:crispEdges;" /></defs>' + s : "", M = i + '<rect x="0" y="0" width="' + a + '" height="' + c + '" style="fill:' + t.background + ';shape-rendering:crispEdges;"/>' + s, A = "", I = "", R = 0; R < d; R++)
        for (var F = 0; F < d; F++) {
            var x = r[F][R];
            if (x) {
                var P = F * u + t.padding * u
                  , z = R * p + t.padding * p;
                if (m) {
                    var Y = P;
                    P = z,
                    z = Y
                }
                if (f) {
                    var G = u + P
                      , Z = p + z;
                    P = Number.isInteger(P) ? Number(P) : P.toFixed(2),
                    z = Number.isInteger(z) ? Number(z) : z.toFixed(2),
                    G = Number.isInteger(G) ? Number(G) : G.toFixed(2),
                    Z = Number.isInteger(Z) ? Number(Z) : Z.toFixed(2),
                    I += "M" + P + "," + z + " V" + Z + " H" + G + " V" + z + " H" + P + " Z "
                } else
                    C ? A += i + '<use x="' + P.toString() + '" y="' + z.toString() + '" href="#qrmodule" />' + s : A += i + '<rect x="' + P.toString() + '" y="' + z.toString() + '" width="' + u + '" height="' + p + '" style="fill:' + t.color + ';shape-rendering:crispEdges;"/>' + s
            }
        }
    f && (A = i + '<path x="0" y="0" style="fill:' + t.color + ';shape-rendering:crispEdges;" d="' + I + '" />');
    let V = "";
    if (this.options.image !== void 0 && this.options.image.svg) {
        const y = a * this.options.image.width / 100
          , o = c * this.options.image.height / 100
          , h = a / 2 - y / 2
          , g = c / 2 - o / 2;
        V += `<svg x="${h}" y="${g}" width="${y}" height="${o}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`,
        V += this.options.image.svg + s,
        V += "</svg>"
    }
    var Q = "";
    switch (e.container) {
    case "svg":
        E && (Q += '<?xml version="1.0" standalone="yes"?>' + s),
        Q += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + a + '" height="' + c + '">' + s,
        Q += N + M + A,
        Q += V,
        Q += "</svg>";
        break;
    case "svg-viewbox":
        E && (Q += '<?xml version="1.0" standalone="yes"?>' + s),
        Q += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + a + " " + c + '">' + s,
        Q += N + M + A,
        Q += V,
        Q += "</svg>";
        break;
    case "g":
        Q += '<g width="' + a + '" height="' + c + '">' + s,
        Q += N + M + A,
        Q += V,
        Q += "</g>";
        break;
    default:
        Q += (N + M + A + V).replace(/^\s+/, "");
        break
    }
    return Q
}
;
var Dh = Hc
  , Hh = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Is, "__esModule", {
    value: !0
});
Is.QRCode = void 0;
const Uh = tt
  , na = ks
  , Vh = Hh(Dh)
  , zh = e=>{
    const [t,r] = (0,
    na.useState)("");
    return (0,
    na.useEffect)(()=>{
        var n, i;
        const s = new Vh.default({
            content: e.content,
            background: e.bgColor || "#ffffff",
            color: e.fgColor || "#000000",
            container: "svg",
            ecl: "M",
            width: (n = e.width) !== null && n !== void 0 ? n : 256,
            height: (i = e.height) !== null && i !== void 0 ? i : 256,
            padding: 0,
            image: e.image
        })
          , a = H.Buffer.from(s.svg(), "utf8").toString("base64");
        r(`data:image/svg+xml;base64,${a}`)
    }
    , [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]),
    t ? (0,
    Uh.h)("img", {
        src: t,
        alt: "QR Code"
    }) : null
}
;
Is.QRCode = zh;
var As = {}
  , eo = {};
Object.defineProperty(eo, "__esModule", {
    value: !0
});
eo.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var Wh = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(As, "__esModule", {
    value: !0
});
As.Spinner = void 0;
const Wn = tt
  , qh = Wh(eo)
  , Jh = e=>{
    var t;
    const r = (t = e.size) !== null && t !== void 0 ? t : 64
      , n = e.color || "#000";
    return (0,
    Wn.h)("div", {
        class: "-cbwsdk-spinner"
    }, (0,
    Wn.h)("style", null, qh.default), (0,
    Wn.h)("svg", {
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            width: r,
            height: r
        }
    }, (0,
    Wn.h)("circle", {
        style: {
            cx: 50,
            cy: 50,
            r: 45,
            stroke: n
        }
    })))
}
;
As.Spinner = Jh;
var to = {};
Object.defineProperty(to, "__esModule", {
    value: !0
});
to.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var Uc = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Dr, "__esModule", {
    value: !0
});
Dr.CoinbaseWalletSteps = Dr.ConnectContent = void 0;
const ir = Uc(In)
  , q = tt
  , Gh = T
  , Zh = qr
  , Qh = Cs
  , Kh = Ms
  , Xh = Rs
  , Yh = Is
  , ed = As
  , td = Uc(to)
  , ui = {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    steps: Vc
}
  , rd = e=>e === "light" ? "#FFFFFF" : "#0A0B0D";
function nd(e) {
    const {theme: t} = e
      , r = (0,
    Gh.createQrUrl)(e.sessionId, e.sessionSecret, e.linkAPIUrl, e.isParentConnection, e.version, e.chainId)
      , n = ui.steps;
    return (0,
    q.h)("div", {
        "data-testid": "connect-content",
        className: (0,
        ir.default)("-cbwsdk-connect-content", t)
    }, (0,
    q.h)("style", null, td.default), (0,
    q.h)("div", {
        className: "-cbwsdk-connect-content-header"
    }, (0,
    q.h)("h2", {
        className: (0,
        ir.default)("-cbwsdk-connect-content-heading", t)
    }, "Scan to connect with our mobile app"), e.onCancel && (0,
    q.h)("button", {
        type: "button",
        className: "-cbwsdk-cancel-button",
        onClick: e.onCancel
    }, (0,
    q.h)(Qh.CloseIcon, {
        fill: t === "light" ? "#0A0B0D" : "#FFFFFF"
    }))), (0,
    q.h)("div", {
        className: "-cbwsdk-connect-content-layout"
    }, (0,
    q.h)("div", {
        className: "-cbwsdk-connect-content-column-left"
    }, (0,
    q.h)(sd, {
        title: ui.title,
        description: ui.description,
        theme: t
    })), (0,
    q.h)("div", {
        className: "-cbwsdk-connect-content-column-right"
    }, (0,
    q.h)("div", {
        className: "-cbwsdk-connect-content-qr-wrapper"
    }, (0,
    q.h)(Yh.QRCode, {
        content: r,
        width: 200,
        height: 200,
        fgColor: "#000",
        bgColor: "transparent"
    }), (0,
    q.h)("input", {
        type: "hidden",
        name: "cbw-cbwsdk-version",
        value: Zh.LIB_VERSION
    }), (0,
    q.h)("input", {
        type: "hidden",
        value: r
    })), (0,
    q.h)(n, {
        theme: t
    }), !e.isConnected && (0,
    q.h)("div", {
        "data-testid": "connecting-spinner",
        className: (0,
        ir.default)("-cbwsdk-connect-content-qr-connecting", t)
    }, (0,
    q.h)(ed.Spinner, {
        size: 36,
        color: t === "dark" ? "#FFF" : "#000"
    }), (0,
    q.h)("p", null, "Connecting...")))))
}
Dr.ConnectContent = nd;
function sd({title: e, description: t, theme: r}) {
    return (0,
    q.h)("div", {
        className: (0,
        ir.default)("-cbwsdk-connect-item", r)
    }, (0,
    q.h)("div", null, (0,
    q.h)(Kh.CoinbaseWalletRound, null)), (0,
    q.h)("div", {
        className: "-cbwsdk-connect-item-copy-wrapper"
    }, (0,
    q.h)("h3", {
        className: "-cbwsdk-connect-item-title"
    }, e), (0,
    q.h)("p", {
        className: "-cbwsdk-connect-item-description"
    }, t)))
}
function Vc({theme: e}) {
    return (0,
    q.h)("ol", {
        className: "-cbwsdk-wallet-steps"
    }, (0,
    q.h)("li", {
        className: (0,
        ir.default)("-cbwsdk-wallet-steps-item", e)
    }, (0,
    q.h)("div", {
        className: "-cbwsdk-wallet-steps-item-wrapper"
    }, "Open Coinbase Wallet app")), (0,
    q.h)("li", {
        className: (0,
        ir.default)("-cbwsdk-wallet-steps-item", e)
    }, (0,
    q.h)("div", {
        className: "-cbwsdk-wallet-steps-item-wrapper"
    }, (0,
    q.h)("span", null, "Tap ", (0,
    q.h)("strong", null, "Scan"), " "), (0,
    q.h)("span", {
        className: (0,
        ir.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", e)
    }, (0,
    q.h)(Xh.QRCodeIcon, {
        fill: rd(e)
    })))))
}
Dr.CoinbaseWalletSteps = Vc;
var Ns = {}
  , xs = {};
Object.defineProperty(xs, "__esModule", {
    value: !0
});
xs.ArrowLeftIcon = void 0;
const sa = tt;
function id(e) {
    return (0,
    sa.h)("svg", Object.assign({
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    sa.h)("path", {
        d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
    }))
}
xs.ArrowLeftIcon = id;
var Ls = {};
Object.defineProperty(Ls, "__esModule", {
    value: !0
});
Ls.LaptopIcon = void 0;
const hi = tt;
function od(e) {
    return (0,
    hi.h)("svg", Object.assign({
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    hi.h)("path", {
        d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
    }), (0,
    hi.h)("path", {
        d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
    }))
}
Ls.LaptopIcon = od;
var Ts = {};
Object.defineProperty(Ts, "__esModule", {
    value: !0
});
Ts.SafeIcon = void 0;
const ia = tt;
function ad(e) {
    return (0,
    ia.h)("svg", Object.assign({
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0,
    ia.h)("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
    }))
}
Ts.SafeIcon = ad;
var ro = {};
Object.defineProperty(ro, "__esModule", {
    value: !0
});
ro.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var zc = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Ns, "__esModule", {
    value: !0
});
Ns.TryExtensionContent = void 0;
const Qt = zc(In)
  , Ve = tt
  , di = ks
  , cd = xs
  , ld = Ls
  , ud = Ts
  , hd = zc(ro);
function dd({theme: e}) {
    const [t,r] = (0,
    di.useState)(!1)
      , n = (0,
    di.useCallback)(()=>{
        window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank")
    }
    , [])
      , i = (0,
    di.useCallback)(()=>{
        t ? window.location.reload() : (n(),
        r(!0))
    }
    , [n, t]);
    return (0,
    Ve.h)("div", {
        class: (0,
        Qt.default)("-cbwsdk-try-extension", e)
    }, (0,
    Ve.h)("style", null, hd.default), (0,
    Ve.h)("div", {
        class: "-cbwsdk-try-extension-column-half"
    }, (0,
    Ve.h)("h3", {
        class: (0,
        Qt.default)("-cbwsdk-try-extension-heading", e)
    }, "Or try the Coinbase Wallet browser extension"), (0,
    Ve.h)("div", {
        class: "-cbwsdk-try-extension-cta-wrapper"
    }, (0,
    Ve.h)("button", {
        class: (0,
        Qt.default)("-cbwsdk-try-extension-cta", e),
        onClick: i
    }, t ? "Refresh" : "Install"), (0,
    Ve.h)("div", null, !t && (0,
    Ve.h)(cd.ArrowLeftIcon, {
        class: "-cbwsdk-try-extension-cta-icon",
        fill: e === "light" ? "#0052FF" : "#588AF5"
    })))), (0,
    Ve.h)("div", {
        class: "-cbwsdk-try-extension-column-half"
    }, (0,
    Ve.h)("ul", {
        class: "-cbwsdk-try-extension-list"
    }, (0,
    Ve.h)("li", {
        class: "-cbwsdk-try-extension-list-item"
    }, (0,
    Ve.h)("div", {
        class: "-cbwsdk-try-extension-list-item-icon-wrapper"
    }, (0,
    Ve.h)("span", {
        class: (0,
        Qt.default)("-cbwsdk-try-extension-list-item-icon", e)
    }, (0,
    Ve.h)(ld.LaptopIcon, {
        fill: e === "light" ? "#0A0B0D" : "#FFFFFF"
    }))), (0,
    Ve.h)("div", {
        class: (0,
        Qt.default)("-cbwsdk-try-extension-list-item-copy", e)
    }, "Connect with dapps with just one click on your desktop browser")), (0,
    Ve.h)("li", {
        class: "-cbwsdk-try-extension-list-item"
    }, (0,
    Ve.h)("div", {
        class: "-cbwsdk-try-extension-list-item-icon-wrapper"
    }, (0,
    Ve.h)("span", {
        class: (0,
        Qt.default)("-cbwsdk-try-extension-list-item-icon", e)
    }, (0,
    Ve.h)(ud.SafeIcon, {
        fill: e === "light" ? "#0A0B0D" : "#FFFFFF"
    }))), (0,
    Ve.h)("div", {
        class: (0,
        Qt.default)("-cbwsdk-try-extension-list-item-copy", e)
    }, "Add an additional layer of security by using a supported Ledger hardware wallet")))))
}
Ns.TryExtensionContent = dd;
var no = {};
Object.defineProperty(no, "__esModule", {
    value: !0
});
no.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var Wc = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Ss, "__esModule", {
    value: !0
});
Ss.ConnectDialog = void 0;
const fi = Wc(In)
  , Kt = tt
  , pi = ks
  , fd = Dr
  , pd = Ns
  , gd = Wc(no)
  , md = e=>{
    const {isOpen: t, darkMode: r} = e
      , [n,i] = (0,
    pi.useState)(!t)
      , [s,a] = (0,
    pi.useState)(!t);
    (0,
    pi.useEffect)(()=>{
        const d = [window.setTimeout(()=>{
            a(!t)
        }
        , 10)];
        return t ? i(!1) : d.push(window.setTimeout(()=>{
            i(!0)
        }
        , 360)),
        ()=>{
            d.forEach(window.clearTimeout)
        }
    }
    , [t]);
    const c = r ? "dark" : "light";
    return (0,
    Kt.h)("div", {
        class: (0,
        fi.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden")
    }, (0,
    Kt.h)("style", null, gd.default), (0,
    Kt.h)("div", {
        class: (0,
        fi.default)("-cbwsdk-connect-dialog-backdrop", c, s && "-cbwsdk-connect-dialog-backdrop-hidden")
    }), (0,
    Kt.h)("div", {
        class: "-cbwsdk-connect-dialog"
    }, (0,
    Kt.h)("div", {
        class: (0,
        fi.default)("-cbwsdk-connect-dialog-box", s && "-cbwsdk-connect-dialog-box-hidden")
    }, e.connectDisabled ? null : (0,
    Kt.h)(fd.ConnectContent, {
        theme: c,
        version: e.version,
        sessionId: e.sessionId,
        sessionSecret: e.sessionSecret,
        linkAPIUrl: e.linkAPIUrl,
        isConnected: e.isConnected,
        isParentConnection: e.isParentConnection,
        chainId: e.chainId,
        onCancel: e.onCancel
    }), (0,
    Kt.h)(pd.TryExtensionContent, {
        theme: c
    }))))
}
;
Ss.ConnectDialog = md;
Object.defineProperty(bs, "__esModule", {
    value: !0
});
bs.LinkFlow = void 0;
const gi = tt
  , _d = Ss;
class vd {
    constructor(t) {
        this.connected = !1,
        this.chainId = 1,
        this.isOpen = !1,
        this.onCancel = null,
        this.root = null,
        this.connectDisabled = !1,
        this.darkMode = t.darkMode,
        this.version = t.version,
        this.sessionId = t.sessionId,
        this.sessionSecret = t.sessionSecret,
        this.linkAPIUrl = t.linkAPIUrl,
        this.isParentConnection = t.isParentConnection
    }
    attach(t) {
        this.root = document.createElement("div"),
        this.root.className = "-cbwsdk-link-flow-root",
        t.appendChild(this.root),
        this.render()
    }
    setConnected(t) {
        this.connected !== t && (this.connected = t,
        this.render())
    }
    setChainId(t) {
        this.chainId !== t && (this.chainId = t,
        this.render())
    }
    detach() {
        var t;
        this.root && ((0,
        gi.render)(null, this.root),
        (t = this.root.parentElement) === null || t === void 0 || t.removeChild(this.root))
    }
    setConnectDisabled(t) {
        this.connectDisabled = t
    }
    open(t) {
        this.isOpen = !0,
        this.onCancel = t.onCancel,
        this.render()
    }
    close() {
        this.isOpen = !1,
        this.onCancel = null,
        this.render()
    }
    render() {
        this.root && (0,
        gi.render)((0,
        gi.h)(_d.ConnectDialog, {
            darkMode: this.darkMode,
            version: this.version,
            sessionId: this.sessionId,
            sessionSecret: this.sessionSecret,
            linkAPIUrl: this.linkAPIUrl,
            isOpen: this.isOpen,
            isConnected: this.connected,
            isParentConnection: this.isParentConnection,
            chainId: this.chainId,
            onCancel: this.onCancel,
            connectDisabled: this.connectDisabled
        }), this.root)
    }
}
bs.LinkFlow = vd;
var so = {}
  , io = {};
Object.defineProperty(io, "__esModule", {
    value: !0
});
io.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(e) {
    var t = $ && $.__importDefault || function(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.SnackbarInstance = e.SnackbarContainer = e.Snackbar = void 0;
    const r = t(In)
      , n = tt
      , i = ks
      , s = t(io)
      , a = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+"
      , c = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
    class d {
        constructor(m) {
            this.items = new Map,
            this.nextItemKey = 0,
            this.root = null,
            this.darkMode = m.darkMode
        }
        attach(m) {
            this.root = document.createElement("div"),
            this.root.className = "-cbwsdk-snackbar-root",
            m.appendChild(this.root),
            this.render()
        }
        presentItem(m) {
            const E = this.nextItemKey++;
            return this.items.set(E, m),
            this.render(),
            ()=>{
                this.items.delete(E),
                this.render()
            }
        }
        clear() {
            this.items.clear(),
            this.render()
        }
        render() {
            this.root && (0,
            n.render)((0,
            n.h)("div", null, (0,
            n.h)(e.SnackbarContainer, {
                darkMode: this.darkMode
            }, Array.from(this.items.entries()).map(([m,E])=>(0,
            n.h)(e.SnackbarInstance, Object.assign({}, E, {
                key: m
            }))))), this.root)
        }
    }
    e.Snackbar = d;
    const u = f=>(0,
    n.h)("div", {
        class: (0,
        r.default)("-cbwsdk-snackbar-container")
    }, (0,
    n.h)("style", null, s.default), (0,
    n.h)("div", {
        class: "-cbwsdk-snackbar"
    }, f.children));
    e.SnackbarContainer = u;
    const p = ({autoExpand: f, message: m, menuItems: E})=>{
        const [C,N] = (0,
        i.useState)(!0)
          , [M,A] = (0,
        i.useState)(f ?? !1);
        (0,
        i.useEffect)(()=>{
            const R = [window.setTimeout(()=>{
                N(!1)
            }
            , 1), window.setTimeout(()=>{
                A(!0)
            }
            , 1e4)];
            return ()=>{
                R.forEach(window.clearTimeout)
            }
        }
        );
        const I = ()=>{
            A(!M)
        }
        ;
        return (0,
        n.h)("div", {
            class: (0,
            r.default)("-cbwsdk-snackbar-instance", C && "-cbwsdk-snackbar-instance-hidden", M && "-cbwsdk-snackbar-instance-expanded")
        }, (0,
        n.h)("div", {
            class: "-cbwsdk-snackbar-instance-header",
            onClick: I
        }, (0,
        n.h)("img", {
            src: a,
            class: "-cbwsdk-snackbar-instance-header-cblogo"
        }), " ", (0,
        n.h)("div", {
            class: "-cbwsdk-snackbar-instance-header-message"
        }, m), (0,
        n.h)("div", {
            class: "-gear-container"
        }, !M && (0,
        n.h)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, (0,
        n.h)("circle", {
            cx: "12",
            cy: "12",
            r: "12",
            fill: "#F5F7F8"
        })), (0,
        n.h)("img", {
            src: c,
            class: "-gear-icon",
            title: "Expand"
        }))), E && E.length > 0 && (0,
        n.h)("div", {
            class: "-cbwsdk-snackbar-instance-menu"
        }, E.map((R,F)=>(0,
        n.h)("div", {
            class: (0,
            r.default)("-cbwsdk-snackbar-instance-menu-item", R.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
            onClick: R.onClick,
            key: F
        }, (0,
        n.h)("svg", {
            width: R.svgWidth,
            height: R.svgHeight,
            viewBox: "0 0 10 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, (0,
        n.h)("path", {
            "fill-rule": R.defaultFillRule,
            "clip-rule": R.defaultClipRule,
            d: R.path,
            fill: "#AAAAAA"
        })), (0,
        n.h)("span", {
            class: (0,
            r.default)("-cbwsdk-snackbar-instance-menu-item-info", R.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
        }, R.info)))))
    }
    ;
    e.SnackbarInstance = p
}
)(so);
Object.defineProperty(kn, "__esModule", {
    value: !0
});
kn.WalletLinkRelayUI = void 0;
const yd = Cn
  , wd = bs
  , bd = so;
class Ed {
    constructor(t) {
        this.standalone = null,
        this.attached = !1,
        this.snackbar = new bd.Snackbar({
            darkMode: t.darkMode
        }),
        this.linkFlow = new wd.LinkFlow({
            darkMode: t.darkMode,
            version: t.version,
            sessionId: t.session.id,
            sessionSecret: t.session.secret,
            linkAPIUrl: t.linkAPIUrl,
            isParentConnection: !1
        })
    }
    attach() {
        if (this.attached)
            throw new Error("Coinbase Wallet SDK UI is already attached");
        const t = document.documentElement
          , r = document.createElement("div");
        r.className = "-cbwsdk-css-reset",
        t.appendChild(r),
        this.linkFlow.attach(r),
        this.snackbar.attach(r),
        this.attached = !0,
        (0,
        yd.injectCssReset)()
    }
    setConnected(t) {
        this.linkFlow.setConnected(t)
    }
    setChainId(t) {
        this.linkFlow.setChainId(t)
    }
    setConnectDisabled(t) {
        this.linkFlow.setConnectDisabled(t)
    }
    addEthereumChain() {}
    watchAsset() {}
    switchEthereumChain() {}
    requestEthereumAccounts(t) {
        this.linkFlow.open({
            onCancel: t.onCancel
        })
    }
    hideRequestEthereumAccounts() {
        this.linkFlow.close()
    }
    signEthereumMessage() {}
    signEthereumTransaction() {}
    submitEthereumTransaction() {}
    ethereumAddressFromSignedMessage() {}
    showConnecting(t) {
        let r;
        return t.isUnlinkedErrorState ? r = {
            autoExpand: !0,
            message: "Connection lost",
            menuItems: [{
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection
            }]
        } : r = {
            message: "Confirm on phone",
            menuItems: [{
                isRed: !0,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: t.onCancel
            }, {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection
            }]
        },
        this.snackbar.presentItem(r)
    }
    reloadUI() {
        document.location.reload()
    }
    inlineAccountsResponse() {
        return !1
    }
    inlineAddEthereumChain() {
        return !1
    }
    inlineWatchAsset() {
        return !1
    }
    inlineSwitchEthereumChain() {
        return !1
    }
    setStandalone(t) {
        this.standalone = t
    }
    isStandalone() {
        var t;
        return (t = this.standalone) !== null && t !== void 0 ? t : !1
    }
}
kn.WalletLinkRelayUI = Ed;
Object.defineProperty(Sn, "__esModule", {
    value: !0
});
Sn.WalletLinkRelay = void 0;
const Ir = vn
  , Sd = We
  , Fe = T
  , Xt = Jr
  , oa = lt
  , xt = Gr
  , kd = vs
  , Yt = Wr
  , Cd = kn;
class Mt extends oa.RelayAbstract {
    constructor(t) {
        var r;
        super(),
        this.accountsCallback = null,
        this.chainCallbackParams = {
            chainId: "",
            jsonRpcUrl: ""
        },
        this.chainCallback = null,
        this.dappDefaultChain = 1,
        this.appName = "",
        this.appLogoUrl = null,
        this.linkedUpdated = a=>{
            var c;
            this.isLinked = a;
            const d = this.storage.getItem(oa.LOCAL_STORAGE_ADDRESSES_KEY);
            if (a && (this.session.linked = a),
            this.isUnlinkedErrorState = !1,
            d) {
                const u = d.split(" ")
                  , p = this.storage.getItem("IsStandaloneSigning") === "true";
                if (u[0] !== "" && !a && this.session.linked && !p) {
                    this.isUnlinkedErrorState = !0;
                    const f = this.getSessionIdHash();
                    (c = this.diagnostic) === null || c === void 0 || c.log(Xt.EVENTS.UNLINKED_ERROR_STATE, {
                        sessionIdHash: f
                    })
                }
            }
        }
        ,
        this.metadataUpdated = (a,c)=>{
            this.storage.setItem(a, c)
        }
        ,
        this.chainUpdated = (a,c)=>{
            this.chainCallbackParams.chainId === a && this.chainCallbackParams.jsonRpcUrl === c || (this.chainCallbackParams = {
                chainId: a,
                jsonRpcUrl: c
            },
            this.chainCallback && this.chainCallback(a, c))
        }
        ,
        this.accountUpdated = a=>{
            this.accountsCallback && this.accountsCallback([a]),
            Mt.accountRequestCallbackIds.size > 0 && (Array.from(Mt.accountRequestCallbackIds.values()).forEach(c=>{
                const d = {
                    type: "WEB3_RESPONSE",
                    id: c,
                    response: {
                        method: "requestEthereumAccounts",
                        result: [a]
                    }
                };
                this.invokeCallback(Object.assign(Object.assign({}, d), {
                    id: c
                }))
            }
            ),
            Mt.accountRequestCallbackIds.clear())
        }
        ,
        this.connectedUpdated = a=>{
            this.ui.setConnected(a)
        }
        ,
        this.resetAndReload = this.resetAndReload.bind(this),
        this.linkAPIUrl = t.linkAPIUrl,
        this.storage = t.storage,
        this.options = t;
        const {session: n, ui: i, connection: s} = this.subscribe();
        this._session = n,
        this.connection = s,
        this.relayEventManager = t.relayEventManager,
        this.diagnostic = t.diagnosticLogger,
        this._reloadOnDisconnect = (r = t.reloadOnDisconnect) !== null && r !== void 0 ? r : !0,
        this.ui = i
    }
    subscribe() {
        const t = xt.Session.load(this.storage) || new xt.Session(this.storage).save()
          , {linkAPIUrl: r, diagnostic: n} = this
          , i = new kd.WalletLinkConnection({
            session: t,
            linkAPIUrl: r,
            diagnostic: n,
            listener: this
        })
          , {version: s, darkMode: a} = this.options
          , c = this.options.uiConstructor({
            linkAPIUrl: r,
            version: s,
            darkMode: a,
            session: t
        });
        return i.connect(),
        {
            session: t,
            ui: c,
            connection: i
        }
    }
    attachUI() {
        this.ui.attach()
    }
    resetAndReload() {
        Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise(t=>setTimeout(()=>t(null), 1e3))]).then(()=>{
            var t, r;
            const n = this.ui.isStandalone();
            (t = this.diagnostic) === null || t === void 0 || t.log(Xt.EVENTS.SESSION_STATE_CHANGE, {
                method: "relay::resetAndReload",
                sessionMetadataChange: "__destroyed, 1",
                sessionIdHash: this.getSessionIdHash()
            }),
            this.connection.destroy();
            const i = xt.Session.load(this.storage);
            if ((i == null ? void 0 : i.id) === this._session.id ? this.storage.clear() : i && ((r = this.diagnostic) === null || r === void 0 || r.log(Xt.EVENTS.SKIPPED_CLEARING_SESSION, {
                sessionIdHash: this.getSessionIdHash(),
                storedSessionIdHash: xt.Session.hash(i.id)
            })),
            this._reloadOnDisconnect) {
                this.ui.reloadUI();
                return
            }
            this.accountsCallback && this.accountsCallback([], !0);
            const {session: s, ui: a, connection: c} = this.subscribe();
            this._session = s,
            this.connection = c,
            this.ui = a,
            n && this.ui.setStandalone && this.ui.setStandalone(!0),
            this.options.headlessMode || this.attachUI()
        }
        ).catch(t=>{
            var r;
            (r = this.diagnostic) === null || r === void 0 || r.log(Xt.EVENTS.FAILURE, {
                method: "relay::resetAndReload",
                message: `failed to reset and reload with ${t}`,
                sessionIdHash: this.getSessionIdHash()
            })
        }
        )
    }
    setAppInfo(t, r) {
        this.appName = t,
        this.appLogoUrl = r
    }
    getStorageItem(t) {
        return this.storage.getItem(t)
    }
    get session() {
        return this._session
    }
    setStorageItem(t, r) {
        this.storage.setItem(t, r)
    }
    signEthereumMessage(t, r, n, i) {
        return this.sendRequest({
            method: "signEthereumMessage",
            params: {
                message: (0,
                Fe.hexStringFromBuffer)(t, !0),
                address: r,
                addPrefix: n,
                typedDataJson: i || null
            }
        })
    }
    ethereumAddressFromSignedMessage(t, r, n) {
        return this.sendRequest({
            method: "ethereumAddressFromSignedMessage",
            params: {
                message: (0,
                Fe.hexStringFromBuffer)(t, !0),
                signature: (0,
                Fe.hexStringFromBuffer)(r, !0),
                addPrefix: n
            }
        })
    }
    signEthereumTransaction(t) {
        return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
                fromAddress: t.fromAddress,
                toAddress: t.toAddress,
                weiValue: (0,
                Fe.bigIntStringFromBN)(t.weiValue),
                data: (0,
                Fe.hexStringFromBuffer)(t.data, !0),
                nonce: t.nonce,
                gasPriceInWei: t.gasPriceInWei ? (0,
                Fe.bigIntStringFromBN)(t.gasPriceInWei) : null,
                maxFeePerGas: t.gasPriceInWei ? (0,
                Fe.bigIntStringFromBN)(t.gasPriceInWei) : null,
                maxPriorityFeePerGas: t.gasPriceInWei ? (0,
                Fe.bigIntStringFromBN)(t.gasPriceInWei) : null,
                gasLimit: t.gasLimit ? (0,
                Fe.bigIntStringFromBN)(t.gasLimit) : null,
                chainId: t.chainId,
                shouldSubmit: !1
            }
        })
    }
    signAndSubmitEthereumTransaction(t) {
        return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
                fromAddress: t.fromAddress,
                toAddress: t.toAddress,
                weiValue: (0,
                Fe.bigIntStringFromBN)(t.weiValue),
                data: (0,
                Fe.hexStringFromBuffer)(t.data, !0),
                nonce: t.nonce,
                gasPriceInWei: t.gasPriceInWei ? (0,
                Fe.bigIntStringFromBN)(t.gasPriceInWei) : null,
                maxFeePerGas: t.maxFeePerGas ? (0,
                Fe.bigIntStringFromBN)(t.maxFeePerGas) : null,
                maxPriorityFeePerGas: t.maxPriorityFeePerGas ? (0,
                Fe.bigIntStringFromBN)(t.maxPriorityFeePerGas) : null,
                gasLimit: t.gasLimit ? (0,
                Fe.bigIntStringFromBN)(t.gasLimit) : null,
                chainId: t.chainId,
                shouldSubmit: !0
            }
        })
    }
    submitEthereumTransaction(t, r) {
        return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
                signedTransaction: (0,
                Fe.hexStringFromBuffer)(t, !0),
                chainId: r
            }
        })
    }
    scanQRCode(t) {
        return this.sendRequest({
            method: "scanQRCode",
            params: {
                regExp: t
            }
        })
    }
    getQRCodeUrl() {
        return (0,
        Fe.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain)
    }
    genericRequest(t, r) {
        return this.sendRequest({
            method: "generic",
            params: {
                action: r,
                data: t
            }
        })
    }
    sendGenericMessage(t) {
        return this.sendRequest(t)
    }
    sendRequest(t) {
        let r = null;
        const n = (0,
        Fe.randomBytesHex)(8)
          , i = a=>{
            this.publishWeb3RequestCanceledEvent(n),
            this.handleErrorResponse(n, t.method, a),
            r == null || r()
        }
        ;
        return {
            promise: new Promise((a,c)=>{
                this.ui.isStandalone() || (r = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: i,
                    onResetConnection: this.resetAndReload
                })),
                this.relayEventManager.callbacks.set(n, d=>{
                    if (r == null || r(),
                    (0,
                    Yt.isErrorResponse)(d))
                        return c(new Error(d.errorMessage));
                    a(d)
                }
                ),
                this.ui.isStandalone() ? this.sendRequestStandalone(n, t) : this.publishWeb3RequestEvent(n, t)
            }
            ),
            cancel: i
        }
    }
    setConnectDisabled(t) {
        this.ui.setConnectDisabled(t)
    }
    setAccountsCallback(t) {
        this.accountsCallback = t
    }
    setChainCallback(t) {
        this.chainCallback = t
    }
    setDappDefaultChainCallback(t) {
        this.dappDefaultChain = t,
        this.ui instanceof Cd.WalletLinkRelayUI && this.ui.setChainId(t)
    }
    publishWeb3RequestEvent(t, r) {
        var n;
        const i = {
            type: "WEB3_REQUEST",
            id: t,
            request: r
        }
          , s = xt.Session.load(this.storage);
        (n = this.diagnostic) === null || n === void 0 || n.log(Xt.EVENTS.WEB3_REQUEST, {
            eventId: i.id,
            method: `relay::${r.method}`,
            sessionIdHash: this.getSessionIdHash(),
            storedSessionIdHash: s ? xt.Session.hash(s.id) : "",
            isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
        }),
        this.publishEvent("Web3Request", i, !0).then(a=>{
            var c;
            (c = this.diagnostic) === null || c === void 0 || c.log(Xt.EVENTS.WEB3_REQUEST_PUBLISHED, {
                eventId: i.id,
                method: `relay::${r.method}`,
                sessionIdHash: this.getSessionIdHash(),
                storedSessionIdHash: s ? xt.Session.hash(s.id) : "",
                isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
            })
        }
        ).catch(a=>{
            this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: i.id,
                response: {
                    method: r.method,
                    errorMessage: a.message
                }
            })
        }
        )
    }
    publishWeb3RequestCanceledEvent(t) {
        const r = {
            type: "WEB3_REQUEST_CANCELED",
            id: t
        };
        this.publishEvent("Web3RequestCanceled", r, !1).then()
    }
    publishEvent(t, r, n) {
        return this.connection.publishEvent(t, r, n)
    }
    handleWeb3ResponseMessage(t) {
        var r;
        const {response: n} = t;
        if ((r = this.diagnostic) === null || r === void 0 || r.log(Xt.EVENTS.WEB3_RESPONSE, {
            eventId: t.id,
            method: `relay::${n.method}`,
            sessionIdHash: this.getSessionIdHash()
        }),
        n.method === "requestEthereumAccounts") {
            Mt.accountRequestCallbackIds.forEach(i=>this.invokeCallback(Object.assign(Object.assign({}, t), {
                id: i
            }))),
            Mt.accountRequestCallbackIds.clear();
            return
        }
        this.invokeCallback(t)
    }
    handleErrorResponse(t, r, n, i) {
        var s;
        const a = (s = n == null ? void 0 : n.message) !== null && s !== void 0 ? s : (0,
        Ir.getMessageFromCode)(i);
        this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: t,
            response: {
                method: r,
                errorMessage: a,
                errorCode: i
            }
        })
    }
    invokeCallback(t) {
        const r = this.relayEventManager.callbacks.get(t.id);
        r && (r(t.response),
        this.relayEventManager.callbacks.delete(t.id))
    }
    requestEthereumAccounts() {
        const t = {
            method: "requestEthereumAccounts",
            params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null
            }
        }
          , r = (0,
        Fe.randomBytesHex)(8)
          , n = s=>{
            this.publishWeb3RequestCanceledEvent(r),
            this.handleErrorResponse(r, t.method, s)
        }
        ;
        return {
            promise: new Promise((s,a)=>{
                if (this.relayEventManager.callbacks.set(r, c=>{
                    if (this.ui.hideRequestEthereumAccounts(),
                    (0,
                    Yt.isErrorResponse)(c))
                        return a(new Error(c.errorMessage));
                    s(c)
                }
                ),
                this.ui.inlineAccountsResponse()) {
                    const c = d=>{
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: r,
                            response: {
                                method: "requestEthereumAccounts",
                                result: d
                            }
                        })
                    }
                    ;
                    this.ui.requestEthereumAccounts({
                        onCancel: n,
                        onAccounts: c
                    })
                } else {
                    const c = Ir.standardErrors.provider.userRejectedRequest("User denied account authorization");
                    this.ui.requestEthereumAccounts({
                        onCancel: ()=>n(c)
                    })
                }
                Mt.accountRequestCallbackIds.add(r),
                !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(r, t)
            }
            ),
            cancel: n
        }
    }
    selectProvider(t) {
        const r = {
            method: "selectProvider",
            params: {
                providerOptions: t
            }
        }
          , n = (0,
        Fe.randomBytesHex)(8)
          , i = a=>{
            this.publishWeb3RequestCanceledEvent(n),
            this.handleErrorResponse(n, r.method, a)
        }
          , s = new Promise((a,c)=>{
            this.relayEventManager.callbacks.set(n, p=>{
                if ((0,
                Yt.isErrorResponse)(p))
                    return c(new Error(p.errorMessage));
                a(p)
            }
            );
            const d = p=>{
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: n,
                    response: {
                        method: "selectProvider",
                        result: Sd.ProviderType.Unselected
                    }
                })
            }
              , u = p=>{
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: n,
                    response: {
                        method: "selectProvider",
                        result: p
                    }
                })
            }
            ;
            this.ui.selectProvider && this.ui.selectProvider({
                onApprove: u,
                onCancel: d,
                providerOptions: t
            })
        }
        );
        return {
            cancel: i,
            promise: s
        }
    }
    watchAsset(t, r, n, i, s, a) {
        const c = {
            method: "watchAsset",
            params: {
                type: t,
                options: {
                    address: r,
                    symbol: n,
                    decimals: i,
                    image: s
                },
                chainId: a
            }
        };
        let d = null;
        const u = (0,
        Fe.randomBytesHex)(8)
          , p = m=>{
            this.publishWeb3RequestCanceledEvent(u),
            this.handleErrorResponse(u, c.method, m),
            d == null || d()
        }
        ;
        this.ui.inlineWatchAsset() || (d = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: p,
            onResetConnection: this.resetAndReload
        }));
        const f = new Promise((m,E)=>{
            this.relayEventManager.callbacks.set(u, M=>{
                if (d == null || d(),
                (0,
                Yt.isErrorResponse)(M))
                    return E(new Error(M.errorMessage));
                m(M)
            }
            );
            const C = M=>{
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: u,
                    response: {
                        method: "watchAsset",
                        result: !1
                    }
                })
            }
              , N = ()=>{
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: u,
                    response: {
                        method: "watchAsset",
                        result: !0
                    }
                })
            }
            ;
            this.ui.inlineWatchAsset() && this.ui.watchAsset({
                onApprove: N,
                onCancel: C,
                type: t,
                address: r,
                symbol: n,
                decimals: i,
                image: s,
                chainId: a
            }),
            !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(u, c)
        }
        );
        return {
            cancel: p,
            promise: f
        }
    }
    addEthereumChain(t, r, n, i, s, a) {
        const c = {
            method: "addEthereumChain",
            params: {
                chainId: t,
                rpcUrls: r,
                blockExplorerUrls: i,
                chainName: s,
                iconUrls: n,
                nativeCurrency: a
            }
        };
        let d = null;
        const u = (0,
        Fe.randomBytesHex)(8)
          , p = m=>{
            this.publishWeb3RequestCanceledEvent(u),
            this.handleErrorResponse(u, c.method, m),
            d == null || d()
        }
        ;
        return this.ui.inlineAddEthereumChain(t) || (d = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: p,
            onResetConnection: this.resetAndReload
        })),
        {
            promise: new Promise((m,E)=>{
                this.relayEventManager.callbacks.set(u, M=>{
                    if (d == null || d(),
                    (0,
                    Yt.isErrorResponse)(M))
                        return E(new Error(M.errorMessage));
                    m(M)
                }
                );
                const C = M=>{
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: u,
                        response: {
                            method: "addEthereumChain",
                            result: {
                                isApproved: !1,
                                rpcUrl: ""
                            }
                        }
                    })
                }
                  , N = M=>{
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: u,
                        response: {
                            method: "addEthereumChain",
                            result: {
                                isApproved: !0,
                                rpcUrl: M
                            }
                        }
                    })
                }
                ;
                this.ui.inlineAddEthereumChain(t) && this.ui.addEthereumChain({
                    onCancel: C,
                    onApprove: N,
                    chainId: c.params.chainId,
                    rpcUrls: c.params.rpcUrls,
                    blockExplorerUrls: c.params.blockExplorerUrls,
                    chainName: c.params.chainName,
                    iconUrls: c.params.iconUrls,
                    nativeCurrency: c.params.nativeCurrency
                }),
                !this.ui.inlineAddEthereumChain(t) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(u, c)
            }
            ),
            cancel: p
        }
    }
    switchEthereumChain(t, r) {
        const n = {
            method: "switchEthereumChain",
            params: Object.assign({
                chainId: t
            }, {
                address: r
            })
        }
          , i = (0,
        Fe.randomBytesHex)(8)
          , s = c=>{
            this.publishWeb3RequestCanceledEvent(i),
            this.handleErrorResponse(i, n.method, c)
        }
        ;
        return {
            promise: new Promise((c,d)=>{
                this.relayEventManager.callbacks.set(i, f=>{
                    if ((0,
                    Yt.isErrorResponse)(f) && f.errorCode)
                        return d(Ir.standardErrors.provider.custom({
                            code: f.errorCode,
                            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                        }));
                    if ((0,
                    Yt.isErrorResponse)(f))
                        return d(new Error(f.errorMessage));
                    c(f)
                }
                );
                const u = f=>{
                    var m;
                    if (f) {
                        const E = (m = (0,
                        Ir.getErrorCode)(f)) !== null && m !== void 0 ? m : Ir.standardErrorCodes.provider.unsupportedChain;
                        this.handleErrorResponse(i, "switchEthereumChain", f instanceof Error ? f : Ir.standardErrors.provider.unsupportedChain(t), E)
                    } else
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: i,
                            response: {
                                method: "switchEthereumChain",
                                result: {
                                    isApproved: !1,
                                    rpcUrl: ""
                                }
                            }
                        })
                }
                  , p = f=>{
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: i,
                        response: {
                            method: "switchEthereumChain",
                            result: {
                                isApproved: !0,
                                rpcUrl: f
                            }
                        }
                    })
                }
                ;
                this.ui.switchEthereumChain({
                    onCancel: u,
                    onApprove: p,
                    chainId: n.params.chainId,
                    address: n.params.address
                }),
                !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(i, n)
            }
            ),
            cancel: s
        }
    }
    inlineAddEthereumChain(t) {
        return this.ui.inlineAddEthereumChain(t)
    }
    getSessionIdHash() {
        return xt.Session.hash(this._session.id)
    }
    sendRequestStandalone(t, r) {
        const n = s=>{
            this.handleErrorResponse(t, r.method, s)
        }
          , i = s=>{
            this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: t,
                response: s
            })
        }
        ;
        switch (r.method) {
        case "signEthereumMessage":
            this.ui.signEthereumMessage({
                request: r,
                onSuccess: i,
                onCancel: n
            });
            break;
        case "signEthereumTransaction":
            this.ui.signEthereumTransaction({
                request: r,
                onSuccess: i,
                onCancel: n
            });
            break;
        case "submitEthereumTransaction":
            this.ui.submitEthereumTransaction({
                request: r,
                onSuccess: i,
                onCancel: n
            });
            break;
        case "ethereumAddressFromSignedMessage":
            this.ui.ethereumAddressFromSignedMessage({
                request: r,
                onSuccess: i
            });
            break;
        default:
            n();
            break
        }
    }
}
Sn.WalletLinkRelay = Mt;
Mt.accountRequestCallbackIds = new Set;
var An = {}
  , Ps = {}
  , qc = {};
(function(e) {
    var t = $ && $.__createBinding || (Object.create ? function(n, i, s, a) {
        a === void 0 && (a = s);
        var c = Object.getOwnPropertyDescriptor(i, s);
        (!c || ("get"in c ? !i.__esModule : c.writable || c.configurable)) && (c = {
            enumerable: !0,
            get: function() {
                return i[s]
            }
        }),
        Object.defineProperty(n, a, c)
    }
    : function(n, i, s, a) {
        a === void 0 && (a = s),
        n[a] = i[s]
    }
    )
      , r = $ && $.__exportStar || function(n, i) {
        for (var s in n)
            s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    r(so, e)
}
)(qc);
var oo = {};
Object.defineProperty(oo, "__esModule", {
    value: !0
});
oo.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
var Jc = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Ps, "__esModule", {
    value: !0
});
Ps.RedirectDialog = void 0;
const Md = Jc(In)
  , wt = tt
  , Rd = Cn
  , Id = qc
  , Ad = Jc(oo);
class Nd {
    constructor() {
        this.root = null
    }
    attach() {
        const t = document.documentElement;
        this.root = document.createElement("div"),
        this.root.className = "-cbwsdk-css-reset",
        t.appendChild(this.root),
        (0,
        Rd.injectCssReset)()
    }
    present(t) {
        this.render(t)
    }
    clear() {
        this.render(null)
    }
    render(t) {
        this.root && ((0,
        wt.render)(null, this.root),
        t && (0,
        wt.render)((0,
        wt.h)(xd, Object.assign({}, t, {
            onDismiss: ()=>{
                this.clear()
            }
        })), this.root))
    }
}
Ps.RedirectDialog = Nd;
const xd = ({title: e, buttonText: t, darkMode: r, onButtonClick: n, onDismiss: i})=>{
    const s = r ? "dark" : "light";
    return (0,
    wt.h)(Id.SnackbarContainer, {
        darkMode: r
    }, (0,
    wt.h)("div", {
        class: "-cbwsdk-redirect-dialog"
    }, (0,
    wt.h)("style", null, Ad.default), (0,
    wt.h)("div", {
        class: "-cbwsdk-redirect-dialog-backdrop",
        onClick: i
    }), (0,
    wt.h)("div", {
        class: (0,
        Md.default)("-cbwsdk-redirect-dialog-box", s)
    }, (0,
    wt.h)("p", null, e), (0,
    wt.h)("button", {
        onClick: n
    }, t))))
}
;
Object.defineProperty(An, "__esModule", {
    value: !0
});
An.MobileRelayUI = void 0;
const Ld = Ps;
class Td {
    constructor(t) {
        this.attached = !1,
        this.darkMode = !1,
        this.redirectDialog = new Ld.RedirectDialog,
        this.darkMode = t.darkMode
    }
    attach() {
        if (this.attached)
            throw new Error("Coinbase Wallet SDK UI is already attached");
        this.redirectDialog.attach(),
        this.attached = !0
    }
    setConnected(t) {}
    redirectToCoinbaseWallet(t) {
        const r = new URL("https://go.cb-w.com/walletlink");
        r.searchParams.append("redirect_url", window.location.href),
        t && r.searchParams.append("wl_url", t);
        const n = document.createElement("a");
        n.target = "cbw-opener",
        n.href = r.href,
        n.rel = "noreferrer noopener",
        n.click()
    }
    openCoinbaseWalletDeeplink(t) {
        this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            darkMode: this.darkMode,
            onButtonClick: ()=>{
                this.redirectToCoinbaseWallet(t)
            }
        }),
        setTimeout(()=>{
            this.redirectToCoinbaseWallet(t)
        }
        , 99)
    }
    showConnecting(t) {
        return ()=>{
            this.redirectDialog.clear()
        }
    }
    hideRequestEthereumAccounts() {
        this.redirectDialog.clear()
    }
    requestEthereumAccounts() {}
    addEthereumChain() {}
    watchAsset() {}
    selectProvider() {}
    switchEthereumChain() {}
    signEthereumMessage() {}
    signEthereumTransaction() {}
    submitEthereumTransaction() {}
    ethereumAddressFromSignedMessage() {}
    reloadUI() {}
    setStandalone() {}
    setConnectDisabled() {}
    inlineAccountsResponse() {
        return !1
    }
    inlineAddEthereumChain() {
        return !1
    }
    inlineWatchAsset() {
        return !1
    }
    inlineSwitchEthereumChain() {
        return !1
    }
    isStandalone() {
        return !1
    }
}
An.MobileRelayUI = Td;
Object.defineProperty(En, "__esModule", {
    value: !0
});
En.MobileRelay = void 0;
const Pd = T
  , Od = Sn
  , $d = An;
class Bd extends Od.WalletLinkRelay {
    constructor(t) {
        var r;
        super(t),
        this._enableMobileWalletLink = (r = t.enableMobileWalletLink) !== null && r !== void 0 ? r : !1
    }
    requestEthereumAccounts() {
        return this._enableMobileWalletLink ? super.requestEthereumAccounts() : {
            promise: new Promise(()=>{
                const t = (0,
                Pd.getLocation)();
                t.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(t.href)}`
            }
            ),
            cancel: ()=>{}
        }
    }
    publishWeb3RequestEvent(t, r) {
        if (super.publishWeb3RequestEvent(t, r),
        !(this._enableMobileWalletLink && this.ui instanceof $d.MobileRelayUI))
            return;
        let n = !1;
        switch (r.method) {
        case "requestEthereumAccounts":
        case "connectAndSignIn":
            n = !0,
            this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
            break;
        case "switchEthereumChain":
            return;
        default:
            n = !0,
            this.ui.openCoinbaseWalletDeeplink();
            break
        }
        n && window.addEventListener("blur", ()=>{
            window.addEventListener("focus", ()=>{
                this.connection.checkUnseenEvents()
            }
            , {
                once: !0
            })
        }
        , {
            once: !0
        })
    }
    handleWeb3ResponseMessage(t) {
        super.handleWeb3ResponseMessage(t)
    }
    connectAndSignIn(t) {
        if (!this._enableMobileWalletLink)
            throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
        return this.sendRequest({
            method: "connectAndSignIn",
            params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl,
                domain: window.location.hostname,
                aud: window.location.href,
                version: "1",
                type: "eip4361",
                nonce: t.nonce,
                iat: new Date().toISOString(),
                chainId: `eip155:${this.dappDefaultChain}`,
                statement: t.statement,
                resources: t.resources
            }
        })
    }
}
En.MobileRelay = Bd;
const {Transform: Fd} = ic;
var jd = e=>class Gc extends Fd {
    constructor(r, n, i, s, a) {
        super(a),
        this._rate = r,
        this._capacity = n,
        this._delimitedSuffix = i,
        this._hashBitLength = s,
        this._options = a,
        this._state = new e,
        this._state.initialize(r, n),
        this._finalized = !1
    }
    _transform(r, n, i) {
        let s = null;
        try {
            this.update(r, n)
        } catch (a) {
            s = a
        }
        i(s)
    }
    _flush(r) {
        let n = null;
        try {
            this.push(this.digest())
        } catch (i) {
            n = i
        }
        r(n)
    }
    update(r, n) {
        if (!H.Buffer.isBuffer(r) && typeof r != "string")
            throw new TypeError("Data must be a string or a buffer");
        if (this._finalized)
            throw new Error("Digest already called");
        return H.Buffer.isBuffer(r) || (r = H.Buffer.from(r, n)),
        this._state.absorb(r),
        this
    }
    digest(r) {
        if (this._finalized)
            throw new Error("Digest already called");
        this._finalized = !0,
        this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
        let n = this._state.squeeze(this._hashBitLength / 8);
        return r !== void 0 && (n = n.toString(r)),
        this._resetState(),
        n
    }
    _resetState() {
        return this._state.initialize(this._rate, this._capacity),
        this
    }
    _clone() {
        const r = new Gc(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);
        return this._state.copy(r._state),
        r._finalized = this._finalized,
        r
    }
}
;
const {Transform: Dd} = ic;
var Hd = e=>class Zc extends Dd {
    constructor(r, n, i, s) {
        super(s),
        this._rate = r,
        this._capacity = n,
        this._delimitedSuffix = i,
        this._options = s,
        this._state = new e,
        this._state.initialize(r, n),
        this._finalized = !1
    }
    _transform(r, n, i) {
        let s = null;
        try {
            this.update(r, n)
        } catch (a) {
            s = a
        }
        i(s)
    }
    _flush() {}
    _read(r) {
        this.push(this.squeeze(r))
    }
    update(r, n) {
        if (!H.Buffer.isBuffer(r) && typeof r != "string")
            throw new TypeError("Data must be a string or a buffer");
        if (this._finalized)
            throw new Error("Squeeze already called");
        return H.Buffer.isBuffer(r) || (r = H.Buffer.from(r, n)),
        this._state.absorb(r),
        this
    }
    squeeze(r, n) {
        this._finalized || (this._finalized = !0,
        this._state.absorbLastFewBits(this._delimitedSuffix));
        let i = this._state.squeeze(r);
        return n !== void 0 && (i = i.toString(n)),
        i
    }
    _resetState() {
        return this._state.initialize(this._rate, this._capacity),
        this
    }
    _clone() {
        const r = new Zc(this._rate,this._capacity,this._delimitedSuffix,this._options);
        return this._state.copy(r._state),
        r._finalized = this._finalized,
        r
    }
}
;
const Ud = jd
  , Vd = Hd;
var zd = function(e) {
    const t = Ud(e)
      , r = Vd(e);
    return function(n, i) {
        switch (typeof n == "string" ? n.toLowerCase() : n) {
        case "keccak224":
            return new t(1152,448,null,224,i);
        case "keccak256":
            return new t(1088,512,null,256,i);
        case "keccak384":
            return new t(832,768,null,384,i);
        case "keccak512":
            return new t(576,1024,null,512,i);
        case "sha3-224":
            return new t(1152,448,6,224,i);
        case "sha3-256":
            return new t(1088,512,6,256,i);
        case "sha3-384":
            return new t(832,768,6,384,i);
        case "sha3-512":
            return new t(576,1024,6,512,i);
        case "shake128":
            return new r(1344,256,31,i);
        case "shake256":
            return new r(1088,512,31,i);
        default:
            throw new Error("Invald algorithm: " + n)
        }
    }
}
  , Qc = {};
const aa = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
Qc.p1600 = function(e) {
    for (let t = 0; t < 24; ++t) {
        const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]
          , n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]
          , i = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]
          , s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]
          , a = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]
          , c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]
          , d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]
          , u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]
          , p = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]
          , f = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
        let m = p ^ (i << 1 | s >>> 31)
          , E = f ^ (s << 1 | i >>> 31);
        const C = e[0] ^ m
          , N = e[1] ^ E
          , M = e[10] ^ m
          , A = e[11] ^ E
          , I = e[20] ^ m
          , R = e[21] ^ E
          , F = e[30] ^ m
          , x = e[31] ^ E
          , P = e[40] ^ m
          , z = e[41] ^ E;
        m = r ^ (a << 1 | c >>> 31),
        E = n ^ (c << 1 | a >>> 31);
        const Y = e[2] ^ m
          , G = e[3] ^ E
          , Z = e[12] ^ m
          , V = e[13] ^ E
          , Q = e[22] ^ m
          , y = e[23] ^ E
          , o = e[32] ^ m
          , h = e[33] ^ E
          , g = e[42] ^ m
          , _ = e[43] ^ E;
        m = i ^ (d << 1 | u >>> 31),
        E = s ^ (u << 1 | d >>> 31);
        const w = e[4] ^ m
          , S = e[5] ^ E
          , k = e[14] ^ m
          , v = e[15] ^ E
          , l = e[24] ^ m
          , b = e[25] ^ E
          , L = e[34] ^ m
          , O = e[35] ^ E
          , B = e[44] ^ m
          , ze = e[45] ^ E;
        m = a ^ (p << 1 | f >>> 31),
        E = c ^ (f << 1 | p >>> 31);
        const K = e[6] ^ m
          , ee = e[7] ^ E
          , Yr = e[16] ^ m
          , Me = e[17] ^ E
          , Re = e[26] ^ m
          , en = e[27] ^ E
          , Ie = e[36] ^ m
          , Ae = e[37] ^ E
          , tn = e[46] ^ m
          , Ne = e[47] ^ E;
        m = d ^ (r << 1 | n >>> 31),
        E = u ^ (n << 1 | r >>> 31);
        const xe = e[8] ^ m
          , rn = e[9] ^ E
          , Le = e[18] ^ m
          , Te = e[19] ^ E
          , nn = e[28] ^ m
          , Pe = e[29] ^ E
          , Oe = e[38] ^ m
          , sn = e[39] ^ E
          , $e = e[48] ^ m
          , Be = e[49] ^ E
          , fr = C
          , te = N
          , re = A << 4 | M >>> 28
          , pr = M << 4 | A >>> 28
          , ne = I << 3 | R >>> 29
          , se = R << 3 | I >>> 29
          , gr = x << 9 | F >>> 23
          , ie = F << 9 | x >>> 23
          , oe = P << 18 | z >>> 14
          , mr = z << 18 | P >>> 14
          , ae = Y << 1 | G >>> 31
          , ce = G << 1 | Y >>> 31
          , _r = V << 12 | Z >>> 20
          , le = Z << 12 | V >>> 20
          , ue = Q << 10 | y >>> 22
          , vr = y << 10 | Q >>> 22
          , he = h << 13 | o >>> 19
          , de = o << 13 | h >>> 19
          , yr = g << 2 | _ >>> 30
          , fe = _ << 2 | g >>> 30
          , pe = S << 30 | w >>> 2
          , wr = w << 30 | S >>> 2
          , ge = k << 6 | v >>> 26
          , me = v << 6 | k >>> 26
          , br = b << 11 | l >>> 21
          , _e = l << 11 | b >>> 21
          , ve = L << 15 | O >>> 17
          , Er = O << 15 | L >>> 17
          , ye = ze << 29 | B >>> 3
          , we = B << 29 | ze >>> 3
          , Sr = K << 28 | ee >>> 4
          , be = ee << 28 | K >>> 4
          , Ee = Me << 23 | Yr >>> 9
          , kr = Yr << 23 | Me >>> 9
          , Se = Re << 25 | en >>> 7
          , ke = en << 25 | Re >>> 7
          , $t = Ie << 21 | Ae >>> 11
          , Bt = Ae << 21 | Ie >>> 11
          , Ft = Ne << 24 | tn >>> 8
          , jt = tn << 24 | Ne >>> 8
          , Dt = xe << 27 | rn >>> 5
          , Ht = rn << 27 | xe >>> 5
          , Ut = Le << 20 | Te >>> 12
          , Vt = Te << 20 | Le >>> 12
          , zt = Pe << 7 | nn >>> 25
          , Wt = nn << 7 | Pe >>> 25
          , qt = Oe << 8 | sn >>> 24
          , Jt = sn << 8 | Oe >>> 24
          , Gt = $e << 14 | Be >>> 18
          , Zt = Be << 14 | $e >>> 18;
        e[0] = fr ^ ~_r & br,
        e[1] = te ^ ~le & _e,
        e[10] = Sr ^ ~Ut & ne,
        e[11] = be ^ ~Vt & se,
        e[20] = ae ^ ~ge & Se,
        e[21] = ce ^ ~me & ke,
        e[30] = Dt ^ ~re & ue,
        e[31] = Ht ^ ~pr & vr,
        e[40] = pe ^ ~Ee & zt,
        e[41] = wr ^ ~kr & Wt,
        e[2] = _r ^ ~br & $t,
        e[3] = le ^ ~_e & Bt,
        e[12] = Ut ^ ~ne & he,
        e[13] = Vt ^ ~se & de,
        e[22] = ge ^ ~Se & qt,
        e[23] = me ^ ~ke & Jt,
        e[32] = re ^ ~ue & ve,
        e[33] = pr ^ ~vr & Er,
        e[42] = Ee ^ ~zt & gr,
        e[43] = kr ^ ~Wt & ie,
        e[4] = br ^ ~$t & Gt,
        e[5] = _e ^ ~Bt & Zt,
        e[14] = ne ^ ~he & ye,
        e[15] = se ^ ~de & we,
        e[24] = Se ^ ~qt & oe,
        e[25] = ke ^ ~Jt & mr,
        e[34] = ue ^ ~ve & Ft,
        e[35] = vr ^ ~Er & jt,
        e[44] = zt ^ ~gr & yr,
        e[45] = Wt ^ ~ie & fe,
        e[6] = $t ^ ~Gt & fr,
        e[7] = Bt ^ ~Zt & te,
        e[16] = he ^ ~ye & Sr,
        e[17] = de ^ ~we & be,
        e[26] = qt ^ ~oe & ae,
        e[27] = Jt ^ ~mr & ce,
        e[36] = ve ^ ~Ft & Dt,
        e[37] = Er ^ ~jt & Ht,
        e[46] = gr ^ ~yr & pe,
        e[47] = ie ^ ~fe & wr,
        e[8] = Gt ^ ~fr & _r,
        e[9] = Zt ^ ~te & le,
        e[18] = ye ^ ~Sr & Ut,
        e[19] = we ^ ~be & Vt,
        e[28] = oe ^ ~ae & ge,
        e[29] = mr ^ ~ce & me,
        e[38] = Ft ^ ~Dt & re,
        e[39] = jt ^ ~Ht & pr,
        e[48] = yr ^ ~pe & Ee,
        e[49] = fe ^ ~wr & kr,
        e[0] ^= aa[t * 2],
        e[1] ^= aa[t * 2 + 1]
    }
}
;
const is = Qc;
function Zr() {
    this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.blockSize = null,
    this.count = 0,
    this.squeezing = !1
}
Zr.prototype.initialize = function(e, t) {
    for (let r = 0; r < 50; ++r)
        this.state[r] = 0;
    this.blockSize = e / 8,
    this.count = 0,
    this.squeezing = !1
}
;
Zr.prototype.absorb = function(e) {
    for (let t = 0; t < e.length; ++t)
        this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4),
        this.count += 1,
        this.count === this.blockSize && (is.p1600(this.state),
        this.count = 0)
}
;
Zr.prototype.absorbLastFewBits = function(e) {
    this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4),
    e & 128 && this.count === this.blockSize - 1 && is.p1600(this.state),
    this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4),
    is.p1600(this.state),
    this.count = 0,
    this.squeezing = !0
}
;
Zr.prototype.squeeze = function(e) {
    this.squeezing || this.absorbLastFewBits(1);
    const t = H.Buffer.alloc(e);
    for (let r = 0; r < e; ++r)
        t[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255,
        this.count += 1,
        this.count === this.blockSize && (is.p1600(this.state),
        this.count = 0);
    return t
}
;
Zr.prototype.copy = function(e) {
    for (let t = 0; t < 50; ++t)
        e.state[t] = this.state[t];
    e.blockSize = this.blockSize,
    e.count = this.count,
    e.squeezing = this.squeezing
}
;
var Wd = Zr
  , qd = zd(Wd);
const Jd = qd
  , Gd = ds;
function Kc(e) {
    return H.Buffer.allocUnsafe(e).fill(0)
}
function Xc(e, t, r) {
    const n = Kc(t);
    return e = Os(e),
    r ? e.length < t ? (e.copy(n),
    n) : e.slice(0, t) : e.length < t ? (e.copy(n, t - e.length),
    n) : e.slice(-t)
}
function Zd(e, t) {
    return Xc(e, t, !0)
}
function Os(e) {
    if (!H.Buffer.isBuffer(e))
        if (Array.isArray(e))
            e = H.Buffer.from(e);
        else if (typeof e == "string")
            Yc(e) ? e = H.Buffer.from(Xd(el(e)), "hex") : e = H.Buffer.from(e);
        else if (typeof e == "number")
            e = intToBuffer(e);
        else if (e == null)
            e = H.Buffer.allocUnsafe(0);
        else if (Gd.isBN(e))
            e = e.toArrayLike(H.Buffer);
        else if (e.toArray)
            e = H.Buffer.from(e.toArray());
        else
            throw new Error("invalid type");
    return e
}
function Qd(e) {
    return e = Os(e),
    "0x" + e.toString("hex")
}
function Kd(e, t) {
    return e = Os(e),
    t || (t = 256),
    Jd("keccak" + t).update(e).digest()
}
function Xd(e) {
    return e.length % 2 ? "0" + e : e
}
function Yc(e) {
    return typeof e == "string" && e.match(/^0x[0-9A-Fa-f]*$/)
}
function el(e) {
    return typeof e == "string" && e.startsWith("0x") ? e.slice(2) : e
}
var tl = {
    zeros: Kc,
    setLength: Xc,
    setLengthRight: Zd,
    isHexString: Yc,
    stripHexPrefix: el,
    toBuffer: Os,
    bufferToHex: Qd,
    keccak: Kd
};
const ar = tl
  , nr = ds;
function rl(e) {
    return e.startsWith("int[") ? "int256" + e.slice(3) : e === "int" ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : e === "uint" ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : e === "fixed" ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : e === "ufixed" ? "ufixed128x128" : e
}
function Pr(e) {
    return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
}
function ca(e) {
    var t = /^\D+(\d+)x(\d+)$/.exec(e);
    return [parseInt(t[1], 10), parseInt(t[2], 10)]
}
function nl(e) {
    var t = e.match(/(.*)\[(.*?)\]$/);
    return t ? t[2] === "" ? "dynamic" : parseInt(t[2], 10) : null
}
function tr(e) {
    var t = typeof e;
    if (t === "string")
        return ar.isHexString(e) ? new nr(ar.stripHexPrefix(e),16) : new nr(e,10);
    if (t === "number")
        return new nr(e);
    if (e.toArray)
        return e;
    throw new Error("Argument is not a number")
}
function yt(e, t) {
    var r, n, i, s;
    if (e === "address")
        return yt("uint160", tr(t));
    if (e === "bool")
        return yt("uint8", t ? 1 : 0);
    if (e === "string")
        return yt("bytes", new H.Buffer(t,"utf8"));
    if (ef(e)) {
        if (typeof t.length > "u")
            throw new Error("Not an array?");
        if (r = nl(e),
        r !== "dynamic" && r !== 0 && t.length > r)
            throw new Error("Elements exceed array size: " + r);
        i = [],
        e = e.slice(0, e.lastIndexOf("[")),
        typeof t == "string" && (t = JSON.parse(t));
        for (s in t)
            i.push(yt(e, t[s]));
        if (r === "dynamic") {
            var a = yt("uint256", t.length);
            i.unshift(a)
        }
        return H.Buffer.concat(i)
    } else {
        if (e === "bytes")
            return t = new H.Buffer(t),
            i = H.Buffer.concat([yt("uint256", t.length), t]),
            t.length % 32 !== 0 && (i = H.Buffer.concat([i, ar.zeros(32 - t.length % 32)])),
            i;
        if (e.startsWith("bytes")) {
            if (r = Pr(e),
            r < 1 || r > 32)
                throw new Error("Invalid bytes<N> width: " + r);
            return ar.setLengthRight(t, 32)
        } else if (e.startsWith("uint")) {
            if (r = Pr(e),
            r % 8 || r < 8 || r > 256)
                throw new Error("Invalid uint<N> width: " + r);
            if (n = tr(t),
            n.bitLength() > r)
                throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
            if (n < 0)
                throw new Error("Supplied uint is negative");
            return n.toArrayLike(H.Buffer, "be", 32)
        } else if (e.startsWith("int")) {
            if (r = Pr(e),
            r % 8 || r < 8 || r > 256)
                throw new Error("Invalid int<N> width: " + r);
            if (n = tr(t),
            n.bitLength() > r)
                throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
            return n.toTwos(256).toArrayLike(H.Buffer, "be", 32)
        } else if (e.startsWith("ufixed")) {
            if (r = ca(e),
            n = tr(t),
            n < 0)
                throw new Error("Supplied ufixed is negative");
            return yt("uint256", n.mul(new nr(2).pow(new nr(r[1]))))
        } else if (e.startsWith("fixed"))
            return r = ca(e),
            yt("int256", tr(t).mul(new nr(2).pow(new nr(r[1]))))
    }
    throw new Error("Unsupported or invalid type: " + e)
}
function Yd(e) {
    return e === "string" || e === "bytes" || nl(e) === "dynamic"
}
function ef(e) {
    return e.lastIndexOf("]") === e.length - 1
}
function tf(e, t) {
    var r = []
      , n = []
      , i = 32 * e.length;
    for (var s in e) {
        var a = rl(e[s])
          , c = t[s]
          , d = yt(a, c);
        Yd(a) ? (r.push(yt("uint256", i)),
        n.push(d),
        i += d.length) : r.push(d)
    }
    return H.Buffer.concat(r.concat(n))
}
function sl(e, t) {
    if (e.length !== t.length)
        throw new Error("Number of types are not matching the values");
    for (var r, n, i = [], s = 0; s < e.length; s++) {
        var a = rl(e[s])
          , c = t[s];
        if (a === "bytes")
            i.push(c);
        else if (a === "string")
            i.push(new H.Buffer(c,"utf8"));
        else if (a === "bool")
            i.push(new H.Buffer(c ? "01" : "00","hex"));
        else if (a === "address")
            i.push(ar.setLength(c, 20));
        else if (a.startsWith("bytes")) {
            if (r = Pr(a),
            r < 1 || r > 32)
                throw new Error("Invalid bytes<N> width: " + r);
            i.push(ar.setLengthRight(c, r))
        } else if (a.startsWith("uint")) {
            if (r = Pr(a),
            r % 8 || r < 8 || r > 256)
                throw new Error("Invalid uint<N> width: " + r);
            if (n = tr(c),
            n.bitLength() > r)
                throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
            i.push(n.toArrayLike(H.Buffer, "be", r / 8))
        } else if (a.startsWith("int")) {
            if (r = Pr(a),
            r % 8 || r < 8 || r > 256)
                throw new Error("Invalid int<N> width: " + r);
            if (n = tr(c),
            n.bitLength() > r)
                throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
            i.push(n.toTwos(r).toArrayLike(H.Buffer, "be", r / 8))
        } else
            throw new Error("Unsupported or invalid type: " + a)
    }
    return H.Buffer.concat(i)
}
function rf(e, t) {
    return ar.keccak(sl(e, t))
}
var nf = {
    rawEncode: tf,
    solidityPack: sl,
    soliditySHA3: rf
};
const ft = tl
  , dn = nf
  , il = {
    type: "object",
    properties: {
        types: {
            type: "object",
            additionalProperties: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        },
                        type: {
                            type: "string"
                        }
                    },
                    required: ["name", "type"]
                }
            }
        },
        primaryType: {
            type: "string"
        },
        domain: {
            type: "object"
        },
        message: {
            type: "object"
        }
    },
    required: ["types", "primaryType", "domain", "message"]
}
  , mi = {
    encodeData(e, t, r, n=!0) {
        const i = ["bytes32"]
          , s = [this.hashType(e, r)];
        if (n) {
            const a = (c,d,u)=>{
                if (r[d] !== void 0)
                    return ["bytes32", u == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : ft.keccak(this.encodeData(d, u, r, n))];
                if (u === void 0)
                    throw new Error(`missing value for field ${c} of type ${d}`);
                if (d === "bytes")
                    return ["bytes32", ft.keccak(u)];
                if (d === "string")
                    return typeof u == "string" && (u = H.Buffer.from(u, "utf8")),
                    ["bytes32", ft.keccak(u)];
                if (d.lastIndexOf("]") === d.length - 1) {
                    const p = d.slice(0, d.lastIndexOf("["))
                      , f = u.map(m=>a(c, p, m));
                    return ["bytes32", ft.keccak(dn.rawEncode(f.map(([m])=>m), f.map(([,m])=>m)))]
                }
                return [d, u]
            }
            ;
            for (const c of r[e]) {
                const [d,u] = a(c.name, c.type, t[c.name]);
                i.push(d),
                s.push(u)
            }
        } else
            for (const a of r[e]) {
                let c = t[a.name];
                if (c !== void 0)
                    if (a.type === "bytes")
                        i.push("bytes32"),
                        c = ft.keccak(c),
                        s.push(c);
                    else if (a.type === "string")
                        i.push("bytes32"),
                        typeof c == "string" && (c = H.Buffer.from(c, "utf8")),
                        c = ft.keccak(c),
                        s.push(c);
                    else if (r[a.type] !== void 0)
                        i.push("bytes32"),
                        c = ft.keccak(this.encodeData(a.type, c, r, n)),
                        s.push(c);
                    else {
                        if (a.type.lastIndexOf("]") === a.type.length - 1)
                            throw new Error("Arrays currently unimplemented in encodeData");
                        i.push(a.type),
                        s.push(c)
                    }
            }
        return dn.rawEncode(i, s)
    },
    encodeType(e, t) {
        let r = ""
          , n = this.findTypeDependencies(e, t).filter(i=>i !== e);
        n = [e].concat(n.sort());
        for (const i of n) {
            if (!t[i])
                throw new Error("No type definition specified: " + i);
            r += i + "(" + t[i].map(({name: a, type: c})=>c + " " + a).join(",") + ")"
        }
        return r
    },
    findTypeDependencies(e, t, r=[]) {
        if (e = e.match(/^\w*/)[0],
        r.includes(e) || t[e] === void 0)
            return r;
        r.push(e);
        for (const n of t[e])
            for (const i of this.findTypeDependencies(n.type, t, r))
                !r.includes(i) && r.push(i);
        return r
    },
    hashStruct(e, t, r, n=!0) {
        return ft.keccak(this.encodeData(e, t, r, n))
    },
    hashType(e, t) {
        return ft.keccak(this.encodeType(e, t))
    },
    sanitizeData(e) {
        const t = {};
        for (const r in il.properties)
            e[r] && (t[r] = e[r]);
        return t.types && (t.types = Object.assign({
            EIP712Domain: []
        }, t.types)),
        t
    },
    hash(e, t=!0) {
        const r = this.sanitizeData(e)
          , n = [H.Buffer.from("1901", "hex")];
        return n.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
        r.primaryType !== "EIP712Domain" && n.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
        ft.keccak(H.Buffer.concat(n))
    }
};
var sf = {
    TYPED_MESSAGE_SCHEMA: il,
    TypedDataUtils: mi,
    hashForSignTypedDataLegacy: function(e) {
        return of(e.data)
    },
    hashForSignTypedData_v3: function(e) {
        return mi.hash(e.data, !1)
    },
    hashForSignTypedData_v4: function(e) {
        return mi.hash(e.data)
    }
};
function of(e) {
    const t = new Error("Expect argument to be non-empty array");
    if (typeof e != "object" || !e.length)
        throw t;
    const r = e.map(function(s) {
        return s.type === "bytes" ? ft.toBuffer(s.value) : s.value
    })
      , n = e.map(function(s) {
        return s.type
    })
      , i = e.map(function(s) {
        if (!s.name)
            throw t;
        return s.type + " " + s.name
    });
    return dn.soliditySHA3(["bytes32", "bytes32"], [dn.soliditySHA3(new Array(e.length).fill("string"), i), dn.soliditySHA3(n, r)])
}
var Hr = {};
Object.defineProperty(Hr, "__esModule", {
    value: !0
});
Hr.filterFromParam = Hr.FilterPolyfill = void 0;
const xr = We
  , Xe = T
  , af = 5 * 60 * 1e3
  , rr = {
    jsonrpc: "2.0",
    id: 0
};
class cf {
    constructor(t) {
        this.logFilters = new Map,
        this.blockFilters = new Set,
        this.pendingTransactionFilters = new Set,
        this.cursors = new Map,
        this.timeouts = new Map,
        this.nextFilterId = (0,
        xr.IntNumber)(1),
        this.REQUEST_THROTTLE_INTERVAL = 1e3,
        this.lastFetchTimestamp = new Date(0),
        this.resolvers = [],
        this.provider = t
    }
    async newFilter(t) {
        const r = ol(t)
          , n = this.makeFilterId()
          , i = await this.setInitialCursorPosition(n, r.fromBlock);
        return console.info(`Installing new log filter(${n}):`, r, "initial cursor position:", i),
        this.logFilters.set(n, r),
        this.setFilterTimeout(n),
        (0,
        Xe.hexStringFromIntNumber)(n)
    }
    async newBlockFilter() {
        const t = this.makeFilterId()
          , r = await this.setInitialCursorPosition(t, "latest");
        return console.info(`Installing new block filter (${t}) with initial cursor position:`, r),
        this.blockFilters.add(t),
        this.setFilterTimeout(t),
        (0,
        Xe.hexStringFromIntNumber)(t)
    }
    async newPendingTransactionFilter() {
        const t = this.makeFilterId()
          , r = await this.setInitialCursorPosition(t, "latest");
        return console.info(`Installing new block filter (${t}) with initial cursor position:`, r),
        this.pendingTransactionFilters.add(t),
        this.setFilterTimeout(t),
        (0,
        Xe.hexStringFromIntNumber)(t)
    }
    uninstallFilter(t) {
        const r = (0,
        Xe.intNumberFromHexString)(t);
        return console.info(`Uninstalling filter (${r})`),
        this.deleteFilter(r),
        !0
    }
    getFilterChanges(t) {
        const r = (0,
        Xe.intNumberFromHexString)(t);
        return this.timeouts.has(r) && this.setFilterTimeout(r),
        this.logFilters.has(r) ? this.getLogFilterChanges(r) : this.blockFilters.has(r) ? this.getBlockFilterChanges(r) : this.pendingTransactionFilters.has(r) ? this.getPendingTransactionFilterChanges(r) : Promise.resolve(qn())
    }
    async getFilterLogs(t) {
        const r = (0,
        Xe.intNumberFromHexString)(t)
          , n = this.logFilters.get(r);
        return n ? this.sendAsyncPromise(Object.assign(Object.assign({}, rr), {
            method: "eth_getLogs",
            params: [la(n)]
        })) : qn()
    }
    makeFilterId() {
        return (0,
        xr.IntNumber)(++this.nextFilterId)
    }
    sendAsyncPromise(t) {
        return new Promise((r,n)=>{
            this.provider.sendAsync(t, (i,s)=>{
                if (i)
                    return n(i);
                if (Array.isArray(s) || s == null)
                    return n(new Error(`unexpected response received: ${JSON.stringify(s)}`));
                r(s)
            }
            )
        }
        )
    }
    deleteFilter(t) {
        console.info(`Deleting filter (${t})`),
        this.logFilters.delete(t),
        this.blockFilters.delete(t),
        this.pendingTransactionFilters.delete(t),
        this.cursors.delete(t),
        this.timeouts.delete(t)
    }
    async getLogFilterChanges(t) {
        const r = this.logFilters.get(t)
          , n = this.cursors.get(t);
        if (!n || !r)
            return qn();
        const i = await this.getCurrentBlockHeight()
          , s = r.toBlock === "latest" ? i : r.toBlock;
        if (n > i || n > Number(r.toBlock))
            return Jn();
        console.info(`Fetching logs from ${n} to ${s} for filter ${t}`);
        const a = await this.sendAsyncPromise(Object.assign(Object.assign({}, rr), {
            method: "eth_getLogs",
            params: [la(Object.assign(Object.assign({}, r), {
                fromBlock: n,
                toBlock: s
            }))]
        }));
        if (Array.isArray(a.result)) {
            const c = a.result.map(u=>(0,
            Xe.intNumberFromHexString)(u.blockNumber || "0x0"))
              , d = Math.max(...c);
            if (d && d > n) {
                const u = (0,
                xr.IntNumber)(d + 1);
                console.info(`Moving cursor position for filter (${t}) from ${n} to ${u}`),
                this.cursors.set(t, u)
            }
        }
        return a
    }
    async getBlockFilterChanges(t) {
        const r = this.cursors.get(t);
        if (!r)
            return qn();
        const n = await this.getCurrentBlockHeight();
        if (r > n)
            return Jn();
        console.info(`Fetching blocks from ${r} to ${n} for filter (${t})`);
        const i = (await Promise.all((0,
        Xe.range)(r, n + 1).map(a=>this.getBlockHashByNumber((0,
        xr.IntNumber)(a))))).filter(a=>!!a)
          , s = (0,
        xr.IntNumber)(r + i.length);
        return console.info(`Moving cursor position for filter (${t}) from ${r} to ${s}`),
        this.cursors.set(t, s),
        Object.assign(Object.assign({}, rr), {
            result: i
        })
    }
    async getPendingTransactionFilterChanges(t) {
        return Promise.resolve(Jn())
    }
    async setInitialCursorPosition(t, r) {
        const n = await this.getCurrentBlockHeight()
          , i = typeof r == "number" && r > n ? r : n;
        return this.cursors.set(t, i),
        i
    }
    setFilterTimeout(t) {
        const r = this.timeouts.get(t);
        r && window.clearTimeout(r);
        const n = window.setTimeout(()=>{
            console.info(`Filter (${t}) timed out`),
            this.deleteFilter(t)
        }
        , af);
        this.timeouts.set(t, n)
    }
    async getCurrentBlockHeight() {
        const t = new Date;
        if (t.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
            this.lastFetchTimestamp = t;
            const r = await this._getCurrentBlockHeight();
            this.currentBlockHeight = r,
            this.resolvers.forEach(n=>n(r)),
            this.resolvers = []
        }
        return this.currentBlockHeight ? this.currentBlockHeight : new Promise(r=>this.resolvers.push(r))
    }
    async _getCurrentBlockHeight() {
        const {result: t} = await this.sendAsyncPromise(Object.assign(Object.assign({}, rr), {
            method: "eth_blockNumber",
            params: []
        }));
        return (0,
        Xe.intNumberFromHexString)((0,
        Xe.ensureHexString)(t))
    }
    async getBlockHashByNumber(t) {
        const r = await this.sendAsyncPromise(Object.assign(Object.assign({}, rr), {
            method: "eth_getBlockByNumber",
            params: [(0,
            Xe.hexStringFromIntNumber)(t), !1]
        }));
        return r.result && typeof r.result.hash == "string" ? (0,
        Xe.ensureHexString)(r.result.hash) : null
    }
}
Hr.FilterPolyfill = cf;
function ol(e) {
    return {
        fromBlock: ua(e.fromBlock),
        toBlock: ua(e.toBlock),
        addresses: e.address === void 0 ? null : Array.isArray(e.address) ? e.address : [e.address],
        topics: e.topics || []
    }
}
Hr.filterFromParam = ol;
function la(e) {
    const t = {
        fromBlock: ha(e.fromBlock),
        toBlock: ha(e.toBlock),
        topics: e.topics
    };
    return e.addresses !== null && (t.address = e.addresses),
    t
}
function ua(e) {
    if (e === void 0 || e === "latest" || e === "pending")
        return "latest";
    if (e === "earliest")
        return (0,
        xr.IntNumber)(0);
    if ((0,
    Xe.isHexString)(e))
        return (0,
        Xe.intNumberFromHexString)(e);
    throw new Error(`Invalid block option: ${String(e)}`)
}
function ha(e) {
    return e === "latest" ? e : (0,
    Xe.hexStringFromIntNumber)(e)
}
function qn() {
    return Object.assign(Object.assign({}, rr), {
        error: {
            code: -32e3,
            message: "filter not found"
        }
    })
}
function Jn() {
    return Object.assign(Object.assign({}, rr), {
        result: []
    })
}
var $s = {}
  , al = {}
  , Bs = {}
  , ao = lf;
function lf(e) {
    e = e || {};
    var t = e.max || Number.MAX_SAFE_INTEGER
      , r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
    return function() {
        return r = r % t,
        r++
    }
}
const da = (e,t)=>function() {
    const r = t.promiseModule
      , n = new Array(arguments.length);
    for (let i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
    return new r((i,s)=>{
        t.errorFirst ? n.push(function(a, c) {
            if (t.multiArgs) {
                const d = new Array(arguments.length - 1);
                for (let u = 1; u < arguments.length; u++)
                    d[u - 1] = arguments[u];
                a ? (d.unshift(a),
                s(d)) : i(d)
            } else
                a ? s(a) : i(c)
        }) : n.push(function(a) {
            if (t.multiArgs) {
                const c = new Array(arguments.length - 1);
                for (let d = 0; d < arguments.length; d++)
                    c[d] = arguments[d];
                i(c)
            } else
                i(a)
        }),
        e.apply(this, n)
    }
    )
}
;
var uf = (e,t)=>{
    t = Object.assign({
        exclude: [/.+(Sync|Stream)$/],
        errorFirst: !0,
        promiseModule: Promise
    }, t);
    const r = i=>{
        const s = a=>typeof a == "string" ? i === a : a.test(i);
        return t.include ? t.include.some(s) : !t.exclude.some(s)
    }
    ;
    let n;
    typeof e == "function" ? n = function() {
        return t.excludeMain ? e.apply(this, arguments) : da(e, t).apply(this, arguments)
    }
    : n = Object.create(Object.getPrototypeOf(e));
    for (const i in e) {
        const s = e[i];
        n[i] = typeof s == "function" && r(i) ? da(s, t) : s
    }
    return n
}
  , Nn = {}
  , xn = {};
Object.defineProperty(xn, "__esModule", {
    value: !0
});
const hf = oc;
function fa(e, t, r) {
    try {
        Reflect.apply(e, t, r)
    } catch (n) {
        setTimeout(()=>{
            throw n
        }
        )
    }
}
function df(e) {
    const t = e.length
      , r = new Array(t);
    for (let n = 0; n < t; n += 1)
        r[n] = e[n];
    return r
}
let ff = class extends hf.EventEmitter {
    emit(t, ...r) {
        let n = t === "error";
        const i = this._events;
        if (i !== void 0)
            n = n && i.error === void 0;
        else if (!n)
            return !1;
        if (n) {
            let a;
            if (r.length > 0 && ([a] = r),
            a instanceof Error)
                throw a;
            const c = new Error(`Unhandled error.${a ? ` (${a.message})` : ""}`);
            throw c.context = a,
            c
        }
        const s = i[t];
        if (s === void 0)
            return !1;
        if (typeof s == "function")
            fa(s, this, r);
        else {
            const a = s.length
              , c = df(s);
            for (let d = 0; d < a; d += 1)
                fa(c[d], this, r)
        }
        return !0
    }
}
;
xn.default = ff;
var pf = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Nn, "__esModule", {
    value: !0
});
Nn.BaseBlockTracker = void 0;
const gf = pf(xn)
  , mf = 1e3
  , _f = (e,t)=>e + t
  , pa = ["sync", "latest"];
class vf extends gf.default {
    constructor(t) {
        super(),
        this._blockResetDuration = t.blockResetDuration || 20 * mf,
        this._usePastBlocks = t.usePastBlocks || !1,
        this._currentBlock = null,
        this._isRunning = !1,
        this._onNewListener = this._onNewListener.bind(this),
        this._onRemoveListener = this._onRemoveListener.bind(this),
        this._resetCurrentBlock = this._resetCurrentBlock.bind(this),
        this._setupInternalEvents()
    }
    async destroy() {
        this._cancelBlockResetTimeout(),
        await this._maybeEnd(),
        super.removeAllListeners()
    }
    isRunning() {
        return this._isRunning
    }
    getCurrentBlock() {
        return this._currentBlock
    }
    async getLatestBlock() {
        return this._currentBlock ? this._currentBlock : await new Promise(r=>this.once("latest", r))
    }
    removeAllListeners(t) {
        return t ? super.removeAllListeners(t) : super.removeAllListeners(),
        this._setupInternalEvents(),
        this._onRemoveListener(),
        this
    }
    _setupInternalEvents() {
        this.removeListener("newListener", this._onNewListener),
        this.removeListener("removeListener", this._onRemoveListener),
        this.on("newListener", this._onNewListener),
        this.on("removeListener", this._onRemoveListener)
    }
    _onNewListener(t) {
        pa.includes(t) && this._maybeStart()
    }
    _onRemoveListener() {
        this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
    }
    async _maybeStart() {
        this._isRunning || (this._isRunning = !0,
        this._cancelBlockResetTimeout(),
        await this._start(),
        this.emit("_started"))
    }
    async _maybeEnd() {
        this._isRunning && (this._isRunning = !1,
        this._setupBlockResetTimeout(),
        await this._end(),
        this.emit("_ended"))
    }
    _getBlockTrackerEventCount() {
        return pa.map(t=>this.listenerCount(t)).reduce(_f)
    }
    _shouldUseNewBlock(t) {
        const r = this._currentBlock;
        if (!r)
            return !0;
        const n = ga(t)
          , i = ga(r);
        return this._usePastBlocks && n < i || n > i
    }
    _newPotentialLatest(t) {
        this._shouldUseNewBlock(t) && this._setCurrentBlock(t)
    }
    _setCurrentBlock(t) {
        const r = this._currentBlock;
        this._currentBlock = t,
        this.emit("latest", t),
        this.emit("sync", {
            oldBlock: r,
            newBlock: t
        })
    }
    _setupBlockResetTimeout() {
        this._cancelBlockResetTimeout(),
        this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration),
        this._blockResetTimeout.unref && this._blockResetTimeout.unref()
    }
    _cancelBlockResetTimeout() {
        this._blockResetTimeout && clearTimeout(this._blockResetTimeout)
    }
    _resetCurrentBlock() {
        this._currentBlock = null
    }
}
Nn.BaseBlockTracker = vf;
function ga(e) {
    return Number.parseInt(e, 16)
}
var cl = {}
  , ll = {}
  , Qe = {};
class ul extends TypeError {
    constructor(t, r) {
        let n;
        const {message: i, explanation: s, ...a} = t
          , {path: c} = t
          , d = c.length === 0 ? i : `At path: ${c.join(".")} -- ${i}`;
        super(s ?? d),
        s != null && (this.cause = d),
        Object.assign(this, a),
        this.name = this.constructor.name,
        this.failures = ()=>n ?? (n = [t, ...r()])
    }
}
function yf(e) {
    return ht(e) && typeof e[Symbol.iterator] == "function"
}
function ht(e) {
    return typeof e == "object" && e != null
}
function ma(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}
function qe(e) {
    return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`
}
function wf(e) {
    const {done: t, value: r} = e.next();
    return t ? void 0 : r
}
function bf(e, t, r, n) {
    if (e === !0)
        return;
    e === !1 ? e = {} : typeof e == "string" && (e = {
        message: e
    });
    const {path: i, branch: s} = t
      , {type: a} = r
      , {refinement: c, message: d=`Expected a value of type \`${a}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${qe(n)}\``} = e;
    return {
        value: n,
        type: a,
        refinement: c,
        key: i[i.length - 1],
        path: i,
        branch: s,
        ...e,
        message: d
    }
}
function *Bi(e, t, r, n) {
    yf(e) || (e = [e]);
    for (const i of e) {
        const s = bf(i, t, r, n);
        s && (yield s)
    }
}
function *co(e, t, r={}) {
    const {path: n=[], branch: i=[e], coerce: s=!1, mask: a=!1} = r
      , c = {
        path: n,
        branch: i
    };
    if (s && (e = t.coercer(e, c),
    a && t.type !== "type" && ht(t.schema) && ht(e) && !Array.isArray(e)))
        for (const u in e)
            t.schema[u] === void 0 && delete e[u];
    let d = "valid";
    for (const u of t.validator(e, c))
        u.explanation = r.message,
        d = "not_valid",
        yield[u, void 0];
    for (let[u,p,f] of t.entries(e, c)) {
        const m = co(p, f, {
            path: u === void 0 ? n : [...n, u],
            branch: u === void 0 ? i : [...i, p],
            coerce: s,
            mask: a,
            message: r.message
        });
        for (const E of m)
            E[0] ? (d = E[0].refinement != null ? "not_refined" : "not_valid",
            yield[E[0], void 0]) : s && (p = E[1],
            u === void 0 ? e = p : e instanceof Map ? e.set(u, p) : e instanceof Set ? e.add(p) : ht(e) && (p !== void 0 || u in e) && (e[u] = p))
    }
    if (d !== "not_valid")
        for (const u of t.refiner(e, c))
            u.explanation = r.message,
            d = "not_refined",
            yield[u, void 0];
    d === "valid" && (yield[void 0, e])
}
class Ue {
    constructor(t) {
        const {type: r, schema: n, validator: i, refiner: s, coercer: a=d=>d, entries: c=function*() {}
        } = t;
        this.type = r,
        this.schema = n,
        this.entries = c,
        this.coercer = a,
        i ? this.validator = (d,u)=>{
            const p = i(d, u);
            return Bi(p, u, this, d)
        }
        : this.validator = ()=>[],
        s ? this.refiner = (d,u)=>{
            const p = s(d, u);
            return Bi(p, u, this, d)
        }
        : this.refiner = ()=>[]
    }
    assert(t, r) {
        return hl(t, this, r)
    }
    create(t, r) {
        return dl(t, this, r)
    }
    is(t) {
        return lo(t, this)
    }
    mask(t, r) {
        return fl(t, this, r)
    }
    validate(t, r={}) {
        return Qr(t, this, r)
    }
}
function hl(e, t, r) {
    const n = Qr(e, t, {
        message: r
    });
    if (n[0])
        throw n[0]
}
function dl(e, t, r) {
    const n = Qr(e, t, {
        coerce: !0,
        message: r
    });
    if (n[0])
        throw n[0];
    return n[1]
}
function fl(e, t, r) {
    const n = Qr(e, t, {
        coerce: !0,
        mask: !0,
        message: r
    });
    if (n[0])
        throw n[0];
    return n[1]
}
function lo(e, t) {
    return !Qr(e, t)[0]
}
function Qr(e, t, r={}) {
    const n = co(e, t, r)
      , i = wf(n);
    return i[0] ? [new ul(i[0],function*() {
        for (const a of n)
            a[0] && (yield a[0])
    }
    ), void 0] : [void 0, i[1]]
}
function Ef(...e) {
    const t = e[0].type === "type"
      , r = e.map(i=>i.schema)
      , n = Object.assign({}, ...r);
    return t ? Tn(n) : Ln(n)
}
function rt(e, t) {
    return new Ue({
        type: e,
        schema: null,
        validator: t
    })
}
function Sf(e, t) {
    return new Ue({
        ...e,
        refiner: (r,n)=>r === void 0 || e.refiner(r, n),
        validator(r, n) {
            return r === void 0 ? !0 : (t(r, n),
            e.validator(r, n))
        }
    })
}
function kf(e) {
    return new Ue({
        type: "dynamic",
        schema: null,
        *entries(t, r) {
            yield*e(t, r).entries(t, r)
        },
        validator(t, r) {
            return e(t, r).validator(t, r)
        },
        coercer(t, r) {
            return e(t, r).coercer(t, r)
        },
        refiner(t, r) {
            return e(t, r).refiner(t, r)
        }
    })
}
function Cf(e) {
    let t;
    return new Ue({
        type: "lazy",
        schema: null,
        *entries(r, n) {
            t ?? (t = e()),
            yield*t.entries(r, n)
        },
        validator(r, n) {
            return t ?? (t = e()),
            t.validator(r, n)
        },
        coercer(r, n) {
            return t ?? (t = e()),
            t.coercer(r, n)
        },
        refiner(r, n) {
            return t ?? (t = e()),
            t.refiner(r, n)
        }
    })
}
function Mf(e, t) {
    const {schema: r} = e
      , n = {
        ...r
    };
    for (const i of t)
        delete n[i];
    switch (e.type) {
    case "type":
        return Tn(n);
    default:
        return Ln(n)
    }
}
function Rf(e) {
    const t = e instanceof Ue
      , r = t ? {
        ...e.schema
    } : {
        ...e
    };
    for (const n in r)
        r[n] = pl(r[n]);
    return t && e.type === "type" ? Tn(r) : Ln(r)
}
function If(e, t) {
    const {schema: r} = e
      , n = {};
    for (const i of t)
        n[i] = r[i];
    switch (e.type) {
    case "type":
        return Tn(n);
    default:
        return Ln(n)
    }
}
function Af(e, t) {
    return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."),
    rt(e, t)
}
function Nf() {
    return rt("any", ()=>!0)
}
function xf(e) {
    return new Ue({
        type: "array",
        schema: e,
        *entries(t) {
            if (e && Array.isArray(t))
                for (const [r,n] of t.entries())
                    yield[r, n, e]
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        },
        validator(t) {
            return Array.isArray(t) || `Expected an array value, but received: ${qe(t)}`
        }
    })
}
function Lf() {
    return rt("bigint", e=>typeof e == "bigint")
}
function Tf() {
    return rt("boolean", e=>typeof e == "boolean")
}
function Pf() {
    return rt("date", e=>e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${qe(e)}`)
}
function Of(e) {
    const t = {}
      , r = e.map(n=>qe(n)).join();
    for (const n of e)
        t[n] = n;
    return new Ue({
        type: "enums",
        schema: t,
        validator(n) {
            return e.includes(n) || `Expected one of \`${r}\`, but received: ${qe(n)}`
        }
    })
}
function $f() {
    return rt("func", e=>typeof e == "function" || `Expected a function, but received: ${qe(e)}`)
}
function Bf(e) {
    return rt("instance", t=>t instanceof e || `Expected a \`${e.name}\` instance, but received: ${qe(t)}`)
}
function Ff() {
    return rt("integer", e=>typeof e == "number" && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${qe(e)}`)
}
function jf(e) {
    return new Ue({
        type: "intersection",
        schema: null,
        *entries(t, r) {
            for (const n of e)
                yield*n.entries(t, r)
        },
        *validator(t, r) {
            for (const n of e)
                yield*n.validator(t, r)
        },
        *refiner(t, r) {
            for (const n of e)
                yield*n.refiner(t, r)
        }
    })
}
function Df(e) {
    const t = qe(e)
      , r = typeof e;
    return new Ue({
        type: "literal",
        schema: r === "string" || r === "number" || r === "boolean" ? e : null,
        validator(n) {
            return n === e || `Expected the literal \`${t}\`, but received: ${qe(n)}`
        }
    })
}
function Hf(e, t) {
    return new Ue({
        type: "map",
        schema: null,
        *entries(r) {
            if (e && t && r instanceof Map)
                for (const [n,i] of r.entries())
                    yield[n, n, e],
                    yield[n, i, t]
        },
        coercer(r) {
            return r instanceof Map ? new Map(r) : r
        },
        validator(r) {
            return r instanceof Map || `Expected a \`Map\` object, but received: ${qe(r)}`
        }
    })
}
function uo() {
    return rt("never", ()=>!1)
}
function Uf(e) {
    return new Ue({
        ...e,
        validator: (t,r)=>t === null || e.validator(t, r),
        refiner: (t,r)=>t === null || e.refiner(t, r)
    })
}
function Vf() {
    return rt("number", e=>typeof e == "number" && !isNaN(e) || `Expected a number, but received: ${qe(e)}`)
}
function Ln(e) {
    const t = e ? Object.keys(e) : []
      , r = uo();
    return new Ue({
        type: "object",
        schema: e || null,
        *entries(n) {
            if (e && ht(n)) {
                const i = new Set(Object.keys(n));
                for (const s of t)
                    i.delete(s),
                    yield[s, n[s], e[s]];
                for (const s of i)
                    yield[s, n[s], r]
            }
        },
        validator(n) {
            return ht(n) || `Expected an object, but received: ${qe(n)}`
        },
        coercer(n) {
            return ht(n) ? {
                ...n
            } : n
        }
    })
}
function pl(e) {
    return new Ue({
        ...e,
        validator: (t,r)=>t === void 0 || e.validator(t, r),
        refiner: (t,r)=>t === void 0 || e.refiner(t, r)
    })
}
function zf(e, t) {
    return new Ue({
        type: "record",
        schema: null,
        *entries(r) {
            if (ht(r))
                for (const n in r) {
                    const i = r[n];
                    yield[n, n, e],
                    yield[n, i, t]
                }
        },
        validator(r) {
            return ht(r) || `Expected an object, but received: ${qe(r)}`
        }
    })
}
function Wf() {
    return rt("regexp", e=>e instanceof RegExp)
}
function qf(e) {
    return new Ue({
        type: "set",
        schema: null,
        *entries(t) {
            if (e && t instanceof Set)
                for (const r of t)
                    yield[r, r, e]
        },
        coercer(t) {
            return t instanceof Set ? new Set(t) : t
        },
        validator(t) {
            return t instanceof Set || `Expected a \`Set\` object, but received: ${qe(t)}`
        }
    })
}
function gl() {
    return rt("string", e=>typeof e == "string" || `Expected a string, but received: ${qe(e)}`)
}
function Jf(e) {
    const t = uo();
    return new Ue({
        type: "tuple",
        schema: null,
        *entries(r) {
            if (Array.isArray(r)) {
                const n = Math.max(e.length, r.length);
                for (let i = 0; i < n; i++)
                    yield[i, r[i], e[i] || t]
            }
        },
        validator(r) {
            return Array.isArray(r) || `Expected an array, but received: ${qe(r)}`
        }
    })
}
function Tn(e) {
    const t = Object.keys(e);
    return new Ue({
        type: "type",
        schema: e,
        *entries(r) {
            if (ht(r))
                for (const n of t)
                    yield[n, r[n], e[n]]
        },
        validator(r) {
            return ht(r) || `Expected an object, but received: ${qe(r)}`
        },
        coercer(r) {
            return ht(r) ? {
                ...r
            } : r
        }
    })
}
function Gf(e) {
    const t = e.map(r=>r.type).join(" | ");
    return new Ue({
        type: "union",
        schema: null,
        coercer(r) {
            for (const n of e) {
                const [i,s] = n.validate(r, {
                    coerce: !0
                });
                if (!i)
                    return s
            }
            return r
        },
        validator(r, n) {
            const i = [];
            for (const s of e) {
                const [...a] = co(r, s, n)
                  , [c] = a;
                if (c[0])
                    for (const [d] of a)
                        d && i.push(d);
                else
                    return []
            }
            return [`Expected the value to satisfy a union of \`${t}\`, but received: ${qe(r)}`, ...i]
        }
    })
}
function ml() {
    return rt("unknown", ()=>!0)
}
function ho(e, t, r) {
    return new Ue({
        ...e,
        coercer: (n,i)=>lo(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)
    })
}
function Zf(e, t, r={}) {
    return ho(e, ml(), n=>{
        const i = typeof t == "function" ? t() : t;
        if (n === void 0)
            return i;
        if (!r.strict && ma(n) && ma(i)) {
            const s = {
                ...n
            };
            let a = !1;
            for (const c in i)
                s[c] === void 0 && (s[c] = i[c],
                a = !0);
            if (a)
                return s
        }
        return n
    }
    )
}
function Qf(e) {
    return ho(e, gl(), t=>t.trim())
}
function Kf(e) {
    return hr(e, "empty", t=>{
        const r = _l(t);
        return r === 0 || `Expected an empty ${e.type} but received one with a size of \`${r}\``
    }
    )
}
function _l(e) {
    return e instanceof Map || e instanceof Set ? e.size : e.length
}
function Xf(e, t, r={}) {
    const {exclusive: n} = r;
    return hr(e, "max", i=>n ? i < t : i <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${i}\``)
}
function Yf(e, t, r={}) {
    const {exclusive: n} = r;
    return hr(e, "min", i=>n ? i > t : i >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${i}\``)
}
function e0(e) {
    return hr(e, "nonempty", t=>_l(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`)
}
function t0(e, t) {
    return hr(e, "pattern", r=>t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`)
}
function r0(e, t, r=t) {
    const n = `Expected a ${e.type}`
      , i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
    return hr(e, "size", s=>{
        if (typeof s == "number" || s instanceof Date)
            return t <= s && s <= r || `${n} ${i} but received \`${s}\``;
        if (s instanceof Map || s instanceof Set) {
            const {size: a} = s;
            return t <= a && a <= r || `${n} with a size ${i} but received one with a size of \`${a}\``
        } else {
            const {length: a} = s;
            return t <= a && a <= r || `${n} with a length ${i} but received one with a length of \`${a}\``
        }
    }
    )
}
function hr(e, t, r) {
    return new Ue({
        ...e,
        *refiner(n, i) {
            yield*e.refiner(n, i);
            const s = r(n, i)
              , a = Bi(s, i, e, n);
            for (const c of a)
                yield{
                    ...c,
                    refinement: t
                }
        }
    })
}
const n0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    Struct: Ue,
    StructError: ul,
    any: Nf,
    array: xf,
    assert: hl,
    assign: Ef,
    bigint: Lf,
    boolean: Tf,
    coerce: ho,
    create: dl,
    date: Pf,
    defaulted: Zf,
    define: rt,
    deprecated: Sf,
    dynamic: kf,
    empty: Kf,
    enums: Of,
    func: $f,
    instance: Bf,
    integer: Ff,
    intersection: jf,
    is: lo,
    lazy: Cf,
    literal: Df,
    map: Hf,
    mask: fl,
    max: Xf,
    min: Yf,
    never: uo,
    nonempty: e0,
    nullable: Uf,
    number: Vf,
    object: Ln,
    omit: Mf,
    optional: pl,
    partial: Rf,
    pattern: t0,
    pick: If,
    record: zf,
    refine: hr,
    regexp: Wf,
    set: qf,
    size: r0,
    string: gl,
    struct: Af,
    trimmed: Qf,
    tuple: Jf,
    type: Tn,
    union: Gf,
    unknown: ml,
    validate: Qr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , dr = _n(n0);
Object.defineProperty(Qe, "__esModule", {
    value: !0
});
Qe.assertExhaustive = Qe.assertStruct = Qe.assert = Qe.AssertionError = void 0;
const s0 = dr;
function i0(e) {
    return typeof e == "object" && e !== null && "message"in e
}
function o0(e) {
    var t, r;
    return typeof ((r = (t = e == null ? void 0 : e.prototype) === null || t === void 0 ? void 0 : t.constructor) === null || r === void 0 ? void 0 : r.name) == "string"
}
function a0(e) {
    const t = i0(e) ? e.message : String(e);
    return t.endsWith(".") ? t.slice(0, -1) : t
}
function vl(e, t) {
    return o0(e) ? new e({
        message: t
    }) : e({
        message: t
    })
}
class fo extends Error {
    constructor(t) {
        super(t.message),
        this.code = "ERR_ASSERTION"
    }
}
Qe.AssertionError = fo;
function c0(e, t="Assertion failed.", r=fo) {
    if (!e)
        throw t instanceof Error ? t : vl(r, t)
}
Qe.assert = c0;
function l0(e, t, r="Assertion failed", n=fo) {
    try {
        (0,
        s0.assert)(e, t)
    } catch (i) {
        throw vl(n, `${r}: ${a0(i)}.`)
    }
}
Qe.assertStruct = l0;
function u0(e) {
    throw new Error("Invalid branch reached. Should be detected during compilation.")
}
Qe.assertExhaustive = u0;
var Pn = {};
Object.defineProperty(Pn, "__esModule", {
    value: !0
});
Pn.base64 = void 0;
const h0 = dr
  , d0 = Qe
  , f0 = (e,t={})=>{
    var r, n;
    const i = (r = t.paddingRequired) !== null && r !== void 0 ? r : !1
      , s = (n = t.characterSet) !== null && n !== void 0 ? n : "base64";
    let a;
    s === "base64" ? a = String.raw`[A-Za-z0-9+\/]` : ((0,
    d0.assert)(s === "base64url"),
    a = String.raw`[-_A-Za-z0-9]`);
    let c;
    return i ? c = new RegExp(`^(?:${a}{4})*(?:${a}{3}=|${a}{2}==)?$`,"u") : c = new RegExp(`^(?:${a}{4})*(?:${a}{2,3}|${a}{3}=|${a}{2}==)?$`,"u"),
    (0,
    h0.pattern)(e, c)
}
;
Pn.base64 = f0;
var J = {}
  , On = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.remove0x = e.add0x = e.assertIsStrictHexString = e.assertIsHexString = e.isStrictHexString = e.isHexString = e.StrictHexStruct = e.HexStruct = void 0;
    const t = dr
      , r = Qe;
    e.HexStruct = (0,
    t.pattern)((0,
    t.string)(), /^(?:0x)?[0-9a-f]+$/iu),
    e.StrictHexStruct = (0,
    t.pattern)((0,
    t.string)(), /^0x[0-9a-f]+$/iu);
    function n(u) {
        return (0,
        t.is)(u, e.HexStruct)
    }
    e.isHexString = n;
    function i(u) {
        return (0,
        t.is)(u, e.StrictHexStruct)
    }
    e.isStrictHexString = i;
    function s(u) {
        (0,
        r.assert)(n(u), "Value must be a hexadecimal string.")
    }
    e.assertIsHexString = s;
    function a(u) {
        (0,
        r.assert)(i(u), 'Value must be a hexadecimal string, starting with "0x".')
    }
    e.assertIsStrictHexString = a;
    function c(u) {
        return u.startsWith("0x") ? u : u.startsWith("0X") ? `0x${u.substring(2)}` : `0x${u}`
    }
    e.add0x = c;
    function d(u) {
        return u.startsWith("0x") || u.startsWith("0X") ? u.substring(2) : u
    }
    e.remove0x = d
}
)(On);
Object.defineProperty(J, "__esModule", {
    value: !0
});
J.createDataView = J.concatBytes = J.valueToBytes = J.stringToBytes = J.numberToBytes = J.signedBigIntToBytes = J.bigIntToBytes = J.hexToBytes = J.bytesToString = J.bytesToNumber = J.bytesToSignedBigInt = J.bytesToBigInt = J.bytesToHex = J.assertIsBytes = J.isBytes = void 0;
const it = Qe
  , Fi = On
  , _a = 48
  , va = 58
  , ya = 87;
function p0() {
    const e = [];
    return ()=>{
        if (e.length === 0)
            for (let t = 0; t < 256; t++)
                e.push(t.toString(16).padStart(2, "0"));
        return e
    }
}
const g0 = p0();
function po(e) {
    return e instanceof Uint8Array
}
J.isBytes = po;
function Kr(e) {
    (0,
    it.assert)(po(e), "Value must be a Uint8Array.")
}
J.assertIsBytes = Kr;
function yl(e) {
    if (Kr(e),
    e.length === 0)
        return "0x";
    const t = g0()
      , r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
        r[n] = t[e[n]];
    return (0,
    Fi.add0x)(r.join(""))
}
J.bytesToHex = yl;
function wl(e) {
    Kr(e);
    const t = yl(e);
    return BigInt(t)
}
J.bytesToBigInt = wl;
function m0(e) {
    Kr(e);
    let t = BigInt(0);
    for (const r of e)
        t = (t << BigInt(8)) + BigInt(r);
    return BigInt.asIntN(e.length * 8, t)
}
J.bytesToSignedBigInt = m0;
function _0(e) {
    Kr(e);
    const t = wl(e);
    return (0,
    it.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."),
    Number(t)
}
J.bytesToNumber = _0;
function v0(e) {
    return Kr(e),
    new TextDecoder().decode(e)
}
J.bytesToString = v0;
function Fs(e) {
    var t;
    if (((t = e == null ? void 0 : e.toLowerCase) === null || t === void 0 ? void 0 : t.call(e)) === "0x")
        return new Uint8Array;
    (0,
    Fi.assertIsHexString)(e);
    const r = (0,
    Fi.remove0x)(e).toLowerCase()
      , n = r.length % 2 === 0 ? r : `0${r}`
      , i = new Uint8Array(n.length / 2);
    for (let s = 0; s < i.length; s++) {
        const a = n.charCodeAt(s * 2)
          , c = n.charCodeAt(s * 2 + 1)
          , d = a - (a < va ? _a : ya)
          , u = c - (c < va ? _a : ya);
        i[s] = d * 16 + u
    }
    return i
}
J.hexToBytes = Fs;
function bl(e) {
    (0,
    it.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0,
    it.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
    const t = e.toString(16);
    return Fs(t)
}
J.bigIntToBytes = bl;
function y0(e, t) {
    (0,
    it.assert)(t > 0);
    const r = e >> BigInt(31);
    return !((~e & r) + (e & ~r) >> BigInt(t * 8 + -1))
}
function w0(e, t) {
    (0,
    it.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0,
    it.assert)(typeof t == "number", "Byte length must be a number."),
    (0,
    it.assert)(t > 0, "Byte length must be greater than 0."),
    (0,
    it.assert)(y0(e, t), "Byte length is too small to represent the given value.");
    let r = e;
    const n = new Uint8Array(t);
    for (let i = 0; i < n.length; i++)
        n[i] = Number(BigInt.asUintN(8, r)),
        r >>= BigInt(8);
    return n.reverse()
}
J.signedBigIntToBytes = w0;
function El(e) {
    (0,
    it.assert)(typeof e == "number", "Value must be a number."),
    (0,
    it.assert)(e >= 0, "Value must be a non-negative number."),
    (0,
    it.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
    const t = e.toString(16);
    return Fs(t)
}
J.numberToBytes = El;
function Sl(e) {
    return (0,
    it.assert)(typeof e == "string", "Value must be a string."),
    new TextEncoder().encode(e)
}
J.stringToBytes = Sl;
function kl(e) {
    if (typeof e == "bigint")
        return bl(e);
    if (typeof e == "number")
        return El(e);
    if (typeof e == "string")
        return e.startsWith("0x") ? Fs(e) : Sl(e);
    if (po(e))
        return e;
    throw new TypeError(`Unsupported value type: "${typeof e}".`)
}
J.valueToBytes = kl;
function b0(e) {
    const t = new Array(e.length);
    let r = 0;
    for (let i = 0; i < e.length; i++) {
        const s = kl(e[i]);
        t[i] = s,
        r += s.length
    }
    const n = new Uint8Array(r);
    for (let i = 0, s = 0; i < t.length; i++)
        n.set(t[i], s),
        s += t[i].length;
    return n
}
J.concatBytes = b0;
function E0(e) {
    if (typeof H.Buffer < "u" && e instanceof H.Buffer) {
        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        return new DataView(t)
    }
    return new DataView(e.buffer,e.byteOffset,e.byteLength)
}
J.createDataView = E0;
var js = {};
Object.defineProperty(js, "__esModule", {
    value: !0
});
js.ChecksumStruct = void 0;
const wa = dr
  , S0 = Pn;
js.ChecksumStruct = (0,
wa.size)((0,
S0.base64)((0,
wa.string)(), {
    paddingRequired: !0
}), 44, 44);
var St = {};
Object.defineProperty(St, "__esModule", {
    value: !0
});
St.createHex = St.createBytes = St.createBigInt = St.createNumber = void 0;
const He = dr
  , k0 = Qe
  , Cl = J
  , Ds = On
  , Ml = (0,
He.union)([(0,
He.number)(), (0,
He.bigint)(), (0,
He.string)(), Ds.StrictHexStruct])
  , C0 = (0,
He.coerce)((0,
He.number)(), Ml, Number)
  , M0 = (0,
He.coerce)((0,
He.bigint)(), Ml, BigInt);
(0,
He.union)([Ds.StrictHexStruct, (0,
He.instance)(Uint8Array)]);
const R0 = (0,
He.coerce)((0,
He.instance)(Uint8Array), (0,
He.union)([Ds.StrictHexStruct]), Cl.hexToBytes)
  , I0 = (0,
He.coerce)(Ds.StrictHexStruct, (0,
He.instance)(Uint8Array), Cl.bytesToHex);
function A0(e) {
    try {
        const t = (0,
        He.create)(e, C0);
        return (0,
        k0.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`),
        t
    } catch (t) {
        throw t instanceof He.StructError ? new Error(`Expected a number-like value, got "${e}".`) : t
    }
}
St.createNumber = A0;
function N0(e) {
    try {
        return (0,
        He.create)(e, M0)
    } catch (t) {
        throw t instanceof He.StructError ? new Error(`Expected a number-like value, got "${String(t.value)}".`) : t
    }
}
St.createBigInt = N0;
function x0(e) {
    if (typeof e == "string" && e.toLowerCase() === "0x")
        return new Uint8Array;
    try {
        return (0,
        He.create)(e, R0)
    } catch (t) {
        throw t instanceof He.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t
    }
}
St.createBytes = x0;
function L0(e) {
    if (e instanceof Uint8Array && e.length === 0 || typeof e == "string" && e.toLowerCase() === "0x")
        return "0x";
    try {
        return (0,
        He.create)(e, I0)
    } catch (t) {
        throw t instanceof He.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t
    }
}
St.createHex = L0;
var Ur = {}, Rl = $ && $.__classPrivateFieldSet || function(e, t, r, n, i) {
    if (n === "m")
        throw new TypeError("Private method is not writable");
    if (n === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !i : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r),
    r
}
, Ye = $ && $.__classPrivateFieldGet || function(e, t, r, n) {
    if (r === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !n : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e)
}
, dt, _t;
Object.defineProperty(Ur, "__esModule", {
    value: !0
});
Ur.FrozenSet = Ur.FrozenMap = void 0;
class go {
    constructor(t) {
        dt.set(this, void 0),
        Rl(this, dt, new Map(t), "f"),
        Object.freeze(this)
    }
    get size() {
        return Ye(this, dt, "f").size
    }
    [(dt = new WeakMap,
    Symbol.iterator)]() {
        return Ye(this, dt, "f")[Symbol.iterator]()
    }
    entries() {
        return Ye(this, dt, "f").entries()
    }
    forEach(t, r) {
        return Ye(this, dt, "f").forEach((n,i,s)=>t.call(r, n, i, this))
    }
    get(t) {
        return Ye(this, dt, "f").get(t)
    }
    has(t) {
        return Ye(this, dt, "f").has(t)
    }
    keys() {
        return Ye(this, dt, "f").keys()
    }
    values() {
        return Ye(this, dt, "f").values()
    }
    toString() {
        return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([t,r])=>`${String(t)} => ${String(r)}`).join(", ")} ` : ""}}`
    }
}
Ur.FrozenMap = go;
class mo {
    constructor(t) {
        _t.set(this, void 0),
        Rl(this, _t, new Set(t), "f"),
        Object.freeze(this)
    }
    get size() {
        return Ye(this, _t, "f").size
    }
    [(_t = new WeakMap,
    Symbol.iterator)]() {
        return Ye(this, _t, "f")[Symbol.iterator]()
    }
    entries() {
        return Ye(this, _t, "f").entries()
    }
    forEach(t, r) {
        return Ye(this, _t, "f").forEach((n,i,s)=>t.call(r, n, i, this))
    }
    has(t) {
        return Ye(this, _t, "f").has(t)
    }
    keys() {
        return Ye(this, _t, "f").keys()
    }
    values() {
        return Ye(this, _t, "f").values()
    }
    toString() {
        return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map(t=>String(t)).join(", ")} ` : ""}}`
    }
}
Ur.FrozenSet = mo;
Object.freeze(go);
Object.freeze(go.prototype);
Object.freeze(mo);
Object.freeze(mo.prototype);
var Il = {};
Object.defineProperty(Il, "__esModule", {
    value: !0
});
var Al = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getJsonRpcIdValidator = e.assertIsJsonRpcError = e.isJsonRpcError = e.assertIsJsonRpcFailure = e.isJsonRpcFailure = e.assertIsJsonRpcSuccess = e.isJsonRpcSuccess = e.assertIsJsonRpcResponse = e.isJsonRpcResponse = e.assertIsPendingJsonRpcResponse = e.isPendingJsonRpcResponse = e.JsonRpcResponseStruct = e.JsonRpcFailureStruct = e.JsonRpcSuccessStruct = e.PendingJsonRpcResponseStruct = e.assertIsJsonRpcRequest = e.isJsonRpcRequest = e.assertIsJsonRpcNotification = e.isJsonRpcNotification = e.JsonRpcNotificationStruct = e.JsonRpcRequestStruct = e.JsonRpcParamsStruct = e.JsonRpcErrorStruct = e.JsonRpcIdStruct = e.JsonRpcVersionStruct = e.jsonrpc2 = e.getJsonSize = e.isValidJson = e.JsonStruct = e.UnsafeJsonStruct = void 0;
    const t = dr
      , r = Qe
      , n = ()=>(0,
    t.define)("finite number", x=>(0,
    t.is)(x, (0,
    t.number)()) && Number.isFinite(x));
    e.UnsafeJsonStruct = (0,
    t.union)([(0,
    t.literal)(null), (0,
    t.boolean)(), n(), (0,
    t.string)(), (0,
    t.array)((0,
    t.lazy)(()=>e.UnsafeJsonStruct)), (0,
    t.record)((0,
    t.string)(), (0,
    t.lazy)(()=>e.UnsafeJsonStruct))]),
    e.JsonStruct = (0,
    t.define)("Json", (x,P)=>{
        function z(Y, G) {
            const V = [...G.validator(Y, P)];
            return V.length > 0 ? V : !0
        }
        try {
            const Y = z(x, e.UnsafeJsonStruct);
            return Y !== !0 ? Y : z(JSON.parse(JSON.stringify(x)), e.UnsafeJsonStruct)
        } catch (Y) {
            return Y instanceof RangeError ? "Circular reference detected" : !1
        }
    }
    );
    function i(x) {
        return (0,
        t.is)(x, e.JsonStruct)
    }
    e.isValidJson = i;
    function s(x) {
        (0,
        r.assertStruct)(x, e.JsonStruct, "Invalid JSON value");
        const P = JSON.stringify(x);
        return new TextEncoder().encode(P).byteLength
    }
    e.getJsonSize = s,
    e.jsonrpc2 = "2.0",
    e.JsonRpcVersionStruct = (0,
    t.literal)(e.jsonrpc2),
    e.JsonRpcIdStruct = (0,
    t.nullable)((0,
    t.union)([(0,
    t.number)(), (0,
    t.string)()])),
    e.JsonRpcErrorStruct = (0,
    t.object)({
        code: (0,
        t.integer)(),
        message: (0,
        t.string)(),
        data: (0,
        t.optional)(e.JsonStruct),
        stack: (0,
        t.optional)((0,
        t.string)())
    }),
    e.JsonRpcParamsStruct = (0,
    t.optional)((0,
    t.union)([(0,
    t.record)((0,
    t.string)(), e.JsonStruct), (0,
    t.array)(e.JsonStruct)])),
    e.JsonRpcRequestStruct = (0,
    t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        method: (0,
        t.string)(),
        params: e.JsonRpcParamsStruct
    }),
    e.JsonRpcNotificationStruct = (0,
    t.omit)(e.JsonRpcRequestStruct, ["id"]);
    function a(x) {
        return (0,
        t.is)(x, e.JsonRpcNotificationStruct)
    }
    e.isJsonRpcNotification = a;
    function c(x, P) {
        (0,
        r.assertStruct)(x, e.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", P)
    }
    e.assertIsJsonRpcNotification = c;
    function d(x) {
        return (0,
        t.is)(x, e.JsonRpcRequestStruct)
    }
    e.isJsonRpcRequest = d;
    function u(x, P) {
        (0,
        r.assertStruct)(x, e.JsonRpcRequestStruct, "Invalid JSON-RPC request", P)
    }
    e.assertIsJsonRpcRequest = u,
    e.PendingJsonRpcResponseStruct = (0,
    t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        result: (0,
        t.optional)((0,
        t.unknown)()),
        error: (0,
        t.optional)(e.JsonRpcErrorStruct)
    }),
    e.JsonRpcSuccessStruct = (0,
    t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        result: e.JsonStruct
    }),
    e.JsonRpcFailureStruct = (0,
    t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        error: e.JsonRpcErrorStruct
    }),
    e.JsonRpcResponseStruct = (0,
    t.union)([e.JsonRpcSuccessStruct, e.JsonRpcFailureStruct]);
    function p(x) {
        return (0,
        t.is)(x, e.PendingJsonRpcResponseStruct)
    }
    e.isPendingJsonRpcResponse = p;
    function f(x, P) {
        (0,
        r.assertStruct)(x, e.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", P)
    }
    e.assertIsPendingJsonRpcResponse = f;
    function m(x) {
        return (0,
        t.is)(x, e.JsonRpcResponseStruct)
    }
    e.isJsonRpcResponse = m;
    function E(x, P) {
        (0,
        r.assertStruct)(x, e.JsonRpcResponseStruct, "Invalid JSON-RPC response", P)
    }
    e.assertIsJsonRpcResponse = E;
    function C(x) {
        return (0,
        t.is)(x, e.JsonRpcSuccessStruct)
    }
    e.isJsonRpcSuccess = C;
    function N(x, P) {
        (0,
        r.assertStruct)(x, e.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", P)
    }
    e.assertIsJsonRpcSuccess = N;
    function M(x) {
        return (0,
        t.is)(x, e.JsonRpcFailureStruct)
    }
    e.isJsonRpcFailure = M;
    function A(x, P) {
        (0,
        r.assertStruct)(x, e.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", P)
    }
    e.assertIsJsonRpcFailure = A;
    function I(x) {
        return (0,
        t.is)(x, e.JsonRpcErrorStruct)
    }
    e.isJsonRpcError = I;
    function R(x, P) {
        (0,
        r.assertStruct)(x, e.JsonRpcErrorStruct, "Invalid JSON-RPC error", P)
    }
    e.assertIsJsonRpcError = R;
    function F(x) {
        const {permitEmptyString: P, permitFractions: z, permitNull: Y} = Object.assign({
            permitEmptyString: !0,
            permitFractions: !1,
            permitNull: !0
        }, x);
        return Z=>!!(typeof Z == "number" && (z || Number.isInteger(Z)) || typeof Z == "string" && (P || Z.length > 0) || Y && Z === null)
    }
    e.getJsonRpcIdValidator = F
}
)(Al);
var Nl = {};
Object.defineProperty(Nl, "__esModule", {
    value: !0
});
var Vr = {}, ji = {
    exports: {}
}, _i, ba;
function T0() {
    if (ba)
        return _i;
    ba = 1;
    var e = 1e3
      , t = e * 60
      , r = t * 60
      , n = r * 24
      , i = n * 7
      , s = n * 365.25;
    _i = function(p, f) {
        f = f || {};
        var m = typeof p;
        if (m === "string" && p.length > 0)
            return a(p);
        if (m === "number" && isFinite(p))
            return f.long ? d(p) : c(p);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(p))
    }
    ;
    function a(p) {
        if (p = String(p),
        !(p.length > 100)) {
            var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(p);
            if (f) {
                var m = parseFloat(f[1])
                  , E = (f[2] || "ms").toLowerCase();
                switch (E) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return m * s;
                case "weeks":
                case "week":
                case "w":
                    return m * i;
                case "days":
                case "day":
                case "d":
                    return m * n;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return m * r;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return m * t;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return m * e;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return m;
                default:
                    return
                }
            }
        }
    }
    function c(p) {
        var f = Math.abs(p);
        return f >= n ? Math.round(p / n) + "d" : f >= r ? Math.round(p / r) + "h" : f >= t ? Math.round(p / t) + "m" : f >= e ? Math.round(p / e) + "s" : p + "ms"
    }
    function d(p) {
        var f = Math.abs(p);
        return f >= n ? u(p, f, n, "day") : f >= r ? u(p, f, r, "hour") : f >= t ? u(p, f, t, "minute") : f >= e ? u(p, f, e, "second") : p + " ms"
    }
    function u(p, f, m, E) {
        var C = f >= m * 1.5;
        return Math.round(p / m) + " " + E + (C ? "s" : "")
    }
    return _i
}
function P0(e) {
    r.debug = r,
    r.default = r,
    r.coerce = d,
    r.disable = s,
    r.enable = i,
    r.enabled = a,
    r.humanize = T0(),
    r.destroy = u,
    Object.keys(e).forEach(p=>{
        r[p] = e[p]
    }
    ),
    r.names = [],
    r.skips = [],
    r.formatters = {};
    function t(p) {
        let f = 0;
        for (let m = 0; m < p.length; m++)
            f = (f << 5) - f + p.charCodeAt(m),
            f |= 0;
        return r.colors[Math.abs(f) % r.colors.length]
    }
    r.selectColor = t;
    function r(p) {
        let f, m = null, E, C;
        function N(...M) {
            if (!N.enabled)
                return;
            const A = N
              , I = Number(new Date)
              , R = I - (f || I);
            A.diff = R,
            A.prev = f,
            A.curr = I,
            f = I,
            M[0] = r.coerce(M[0]),
            typeof M[0] != "string" && M.unshift("%O");
            let F = 0;
            M[0] = M[0].replace(/%([a-zA-Z%])/g, (P,z)=>{
                if (P === "%%")
                    return "%";
                F++;
                const Y = r.formatters[z];
                if (typeof Y == "function") {
                    const G = M[F];
                    P = Y.call(A, G),
                    M.splice(F, 1),
                    F--
                }
                return P
            }
            ),
            r.formatArgs.call(A, M),
            (A.log || r.log).apply(A, M)
        }
        return N.namespace = p,
        N.useColors = r.useColors(),
        N.color = r.selectColor(p),
        N.extend = n,
        N.destroy = r.destroy,
        Object.defineProperty(N, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: ()=>m !== null ? m : (E !== r.namespaces && (E = r.namespaces,
            C = r.enabled(p)),
            C),
            set: M=>{
                m = M
            }
        }),
        typeof r.init == "function" && r.init(N),
        N
    }
    function n(p, f) {
        const m = r(this.namespace + (typeof f > "u" ? ":" : f) + p);
        return m.log = this.log,
        m
    }
    function i(p) {
        r.save(p),
        r.namespaces = p,
        r.names = [],
        r.skips = [];
        let f;
        const m = (typeof p == "string" ? p : "").split(/[\s,]+/)
          , E = m.length;
        for (f = 0; f < E; f++)
            m[f] && (p = m[f].replace(/\*/g, ".*?"),
            p[0] === "-" ? r.skips.push(new RegExp("^" + p.slice(1) + "$")) : r.names.push(new RegExp("^" + p + "$")))
    }
    function s() {
        const p = [...r.names.map(c), ...r.skips.map(c).map(f=>"-" + f)].join(",");
        return r.enable(""),
        p
    }
    function a(p) {
        if (p[p.length - 1] === "*")
            return !0;
        let f, m;
        for (f = 0,
        m = r.skips.length; f < m; f++)
            if (r.skips[f].test(p))
                return !1;
        for (f = 0,
        m = r.names.length; f < m; f++)
            if (r.names[f].test(p))
                return !0;
        return !1
    }
    function c(p) {
        return p.toString().substring(2, p.toString().length - 2).replace(/\.\*\?$/, "*")
    }
    function d(p) {
        return p instanceof Error ? p.stack || p.message : p
    }
    function u() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }
    return r.enable(r.load()),
    r
}
var O0 = P0;
(function(e, t) {
    var r = {};
    t.formatArgs = i,
    t.save = s,
    t.load = a,
    t.useColors = n,
    t.storage = c(),
    t.destroy = (()=>{
        let u = !1;
        return ()=>{
            u || (u = !0,
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    }
    )(),
    t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function n() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    function i(u) {
        if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
        !this.useColors)
            return;
        const p = "color: " + this.color;
        u.splice(1, 0, p, "color: inherit");
        let f = 0
          , m = 0;
        u[0].replace(/%[a-zA-Z%]/g, E=>{
            E !== "%%" && (f++,
            E === "%c" && (m = f))
        }
        ),
        u.splice(m, 0, p)
    }
    t.log = console.debug || console.log || (()=>{}
    );
    function s(u) {
        try {
            u ? t.storage.setItem("debug", u) : t.storage.removeItem("debug")
        } catch {}
    }
    function a() {
        let u;
        try {
            u = t.storage.getItem("debug")
        } catch {}
        return !u && typeof Ai < "u" && "env"in Ai && (u = r.DEBUG),
        u
    }
    function c() {
        try {
            return localStorage
        } catch {}
    }
    e.exports = O0(t);
    const {formatters: d} = e.exports;
    d.j = function(u) {
        try {
            return JSON.stringify(u)
        } catch (p) {
            return "[UnexpectedJSONParseError]: " + p.message
        }
    }
}
)(ji, ji.exports);
var $0 = ji.exports
  , B0 = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Vr, "__esModule", {
    value: !0
});
Vr.createModuleLogger = Vr.createProjectLogger = void 0;
const F0 = B0($0)
  , j0 = (0,
F0.default)("metamask");
function D0(e) {
    return j0.extend(e)
}
Vr.createProjectLogger = D0;
function H0(e, t) {
    return e.extend(t)
}
Vr.createModuleLogger = H0;
var xl = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.calculateNumberSize = e.calculateStringSize = e.isASCII = e.isPlainObject = e.ESCAPE_CHARACTERS_REGEXP = e.JsonSize = e.hasProperty = e.isObject = e.isNullOrUndefined = e.isNonEmptyArray = void 0;
    function t(u) {
        return Array.isArray(u) && u.length > 0
    }
    e.isNonEmptyArray = t;
    function r(u) {
        return u == null
    }
    e.isNullOrUndefined = r;
    function n(u) {
        return !!u && typeof u == "object" && !Array.isArray(u)
    }
    e.isObject = n;
    const i = (u,p)=>Object.hasOwnProperty.call(u, p);
    e.hasProperty = i,
    function(u) {
        u[u.Null = 4] = "Null",
        u[u.Comma = 1] = "Comma",
        u[u.Wrapper = 1] = "Wrapper",
        u[u.True = 4] = "True",
        u[u.False = 5] = "False",
        u[u.Quote = 1] = "Quote",
        u[u.Colon = 1] = "Colon",
        u[u.Date = 24] = "Date"
    }(e.JsonSize || (e.JsonSize = {})),
    e.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
    function s(u) {
        if (typeof u != "object" || u === null)
            return !1;
        try {
            let p = u;
            for (; Object.getPrototypeOf(p) !== null; )
                p = Object.getPrototypeOf(p);
            return Object.getPrototypeOf(u) === p
        } catch {
            return !1
        }
    }
    e.isPlainObject = s;
    function a(u) {
        return u.charCodeAt(0) <= 127
    }
    e.isASCII = a;
    function c(u) {
        var p;
        return u.split("").reduce((m,E)=>a(E) ? m + 1 : m + 2, 0) + ((p = u.match(e.ESCAPE_CHARACTERS_REGEXP)) !== null && p !== void 0 ? p : []).length
    }
    e.calculateStringSize = c;
    function d(u) {
        return u.toString().length
    }
    e.calculateNumberSize = d
}
)(xl);
var kt = {};
Object.defineProperty(kt, "__esModule", {
    value: !0
});
kt.hexToBigInt = kt.hexToNumber = kt.bigIntToHex = kt.numberToHex = void 0;
const Or = Qe
  , gn = On
  , U0 = e=>((0,
Or.assert)(typeof e == "number", "Value must be a number."),
(0,
Or.assert)(e >= 0, "Value must be a non-negative number."),
(0,
Or.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."),
(0,
gn.add0x)(e.toString(16)));
kt.numberToHex = U0;
const V0 = e=>((0,
Or.assert)(typeof e == "bigint", "Value must be a bigint."),
(0,
Or.assert)(e >= 0, "Value must be a non-negative bigint."),
(0,
gn.add0x)(e.toString(16)));
kt.bigIntToHex = V0;
const z0 = e=>{
    (0,
    gn.assertIsHexString)(e);
    const t = parseInt(e, 16);
    return (0,
    Or.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."),
    t
}
;
kt.hexToNumber = z0;
const W0 = e=>((0,
gn.assertIsHexString)(e),
BigInt((0,
gn.add0x)(e)));
kt.hexToBigInt = W0;
var Ll = {};
Object.defineProperty(Ll, "__esModule", {
    value: !0
});
var Tl = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.timeSince = e.inMilliseconds = e.Duration = void 0,
    function(s) {
        s[s.Millisecond = 1] = "Millisecond",
        s[s.Second = 1e3] = "Second",
        s[s.Minute = 6e4] = "Minute",
        s[s.Hour = 36e5] = "Hour",
        s[s.Day = 864e5] = "Day",
        s[s.Week = 6048e5] = "Week",
        s[s.Year = 31536e6] = "Year"
    }(e.Duration || (e.Duration = {}));
    const t = s=>Number.isInteger(s) && s >= 0
      , r = (s,a)=>{
        if (!t(s))
            throw new Error(`"${a}" must be a non-negative integer. Received: "${s}".`)
    }
    ;
    function n(s, a) {
        return r(s, "count"),
        s * a
    }
    e.inMilliseconds = n;
    function i(s) {
        return r(s, "timestamp"),
        Date.now() - s
    }
    e.timeSince = i
}
)(Tl);
var Pl = {};
Object.defineProperty(Pl, "__esModule", {
    value: !0
});
var Ol = {}
  , Di = {
    exports: {}
};
const q0 = "2.0.0"
  , $l = 256
  , J0 = Number.MAX_SAFE_INTEGER || 9007199254740991
  , G0 = 16
  , Z0 = $l - 6
  , Q0 = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
var Hs = {
    MAX_LENGTH: $l,
    MAX_SAFE_COMPONENT_LENGTH: G0,
    MAX_SAFE_BUILD_LENGTH: Z0,
    MAX_SAFE_INTEGER: J0,
    RELEASE_TYPES: Q0,
    SEMVER_SPEC_VERSION: q0,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
}
  , vi = {};
const K0 = typeof Ai == "object" && vi && vi.NODE_DEBUG && /\bsemver\b/i.test(vi.NODE_DEBUG) ? (...e)=>console.error("SEMVER", ...e) : ()=>{}
;
var Us = K0;
(function(e, t) {
    const {MAX_SAFE_COMPONENT_LENGTH: r, MAX_SAFE_BUILD_LENGTH: n, MAX_LENGTH: i} = Hs
      , s = Us;
    t = e.exports = {};
    const a = t.re = []
      , c = t.safeRe = []
      , d = t.src = []
      , u = t.t = {};
    let p = 0;
    const f = "[a-zA-Z0-9-]"
      , m = [["\\s", 1], ["\\d", i], [f, n]]
      , E = N=>{
        for (const [M,A] of m)
            N = N.split(`${M}*`).join(`${M}{0,${A}}`).split(`${M}+`).join(`${M}{1,${A}}`);
        return N
    }
      , C = (N,M,A)=>{
        const I = E(M)
          , R = p++;
        s(N, R, M),
        u[N] = R,
        d[R] = M,
        a[R] = new RegExp(M,A ? "g" : void 0),
        c[R] = new RegExp(I,A ? "g" : void 0)
    }
    ;
    C("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
    C("NUMERICIDENTIFIERLOOSE", "\\d+"),
    C("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`),
    C("MAINVERSION", `(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})`),
    C("MAINVERSIONLOOSE", `(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})`),
    C("PRERELEASEIDENTIFIER", `(?:${d[u.NUMERICIDENTIFIER]}|${d[u.NONNUMERICIDENTIFIER]})`),
    C("PRERELEASEIDENTIFIERLOOSE", `(?:${d[u.NUMERICIDENTIFIERLOOSE]}|${d[u.NONNUMERICIDENTIFIER]})`),
    C("PRERELEASE", `(?:-(${d[u.PRERELEASEIDENTIFIER]}(?:\\.${d[u.PRERELEASEIDENTIFIER]})*))`),
    C("PRERELEASELOOSE", `(?:-?(${d[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[u.PRERELEASEIDENTIFIERLOOSE]})*))`),
    C("BUILDIDENTIFIER", `${f}+`),
    C("BUILD", `(?:\\+(${d[u.BUILDIDENTIFIER]}(?:\\.${d[u.BUILDIDENTIFIER]})*))`),
    C("FULLPLAIN", `v?${d[u.MAINVERSION]}${d[u.PRERELEASE]}?${d[u.BUILD]}?`),
    C("FULL", `^${d[u.FULLPLAIN]}$`),
    C("LOOSEPLAIN", `[v=\\s]*${d[u.MAINVERSIONLOOSE]}${d[u.PRERELEASELOOSE]}?${d[u.BUILD]}?`),
    C("LOOSE", `^${d[u.LOOSEPLAIN]}$`),
    C("GTLT", "((?:<|>)?=?)"),
    C("XRANGEIDENTIFIERLOOSE", `${d[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
    C("XRANGEIDENTIFIER", `${d[u.NUMERICIDENTIFIER]}|x|X|\\*`),
    C("XRANGEPLAIN", `[v=\\s]*(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:${d[u.PRERELEASE]})?${d[u.BUILD]}?)?)?`),
    C("XRANGEPLAINLOOSE", `[v=\\s]*(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:${d[u.PRERELEASELOOSE]})?${d[u.BUILD]}?)?)?`),
    C("XRANGE", `^${d[u.GTLT]}\\s*${d[u.XRANGEPLAIN]}$`),
    C("XRANGELOOSE", `^${d[u.GTLT]}\\s*${d[u.XRANGEPLAINLOOSE]}$`),
    C("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),
    C("COERCE", `${d[u.COERCEPLAIN]}(?:$|[^\\d])`),
    C("COERCEFULL", d[u.COERCEPLAIN] + `(?:${d[u.PRERELEASE]})?(?:${d[u.BUILD]})?(?:$|[^\\d])`),
    C("COERCERTL", d[u.COERCE], !0),
    C("COERCERTLFULL", d[u.COERCEFULL], !0),
    C("LONETILDE", "(?:~>?)"),
    C("TILDETRIM", `(\\s*)${d[u.LONETILDE]}\\s+`, !0),
    t.tildeTrimReplace = "$1~",
    C("TILDE", `^${d[u.LONETILDE]}${d[u.XRANGEPLAIN]}$`),
    C("TILDELOOSE", `^${d[u.LONETILDE]}${d[u.XRANGEPLAINLOOSE]}$`),
    C("LONECARET", "(?:\\^)"),
    C("CARETTRIM", `(\\s*)${d[u.LONECARET]}\\s+`, !0),
    t.caretTrimReplace = "$1^",
    C("CARET", `^${d[u.LONECARET]}${d[u.XRANGEPLAIN]}$`),
    C("CARETLOOSE", `^${d[u.LONECARET]}${d[u.XRANGEPLAINLOOSE]}$`),
    C("COMPARATORLOOSE", `^${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]})$|^$`),
    C("COMPARATOR", `^${d[u.GTLT]}\\s*(${d[u.FULLPLAIN]})$|^$`),
    C("COMPARATORTRIM", `(\\s*)${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]}|${d[u.XRANGEPLAIN]})`, !0),
    t.comparatorTrimReplace = "$1$2$3",
    C("HYPHENRANGE", `^\\s*(${d[u.XRANGEPLAIN]})\\s+-\\s+(${d[u.XRANGEPLAIN]})\\s*$`),
    C("HYPHENRANGELOOSE", `^\\s*(${d[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[u.XRANGEPLAINLOOSE]})\\s*$`),
    C("STAR", "(<|>)?=?\\s*\\*"),
    C("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
    C("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
}
)(Di, Di.exports);
var $n = Di.exports;
const X0 = Object.freeze({
    loose: !0
})
  , Y0 = Object.freeze({})
  , e1 = e=>e ? typeof e != "object" ? X0 : e : Y0;
var _o = e1;
const Ea = /^[0-9]+$/
  , Bl = (e,t)=>{
    const r = Ea.test(e)
      , n = Ea.test(t);
    return r && n && (e = +e,
    t = +t),
    e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
}
  , t1 = (e,t)=>Bl(t, e);
var Fl = {
    compareIdentifiers: Bl,
    rcompareIdentifiers: t1
};
const Gn = Us
  , {MAX_LENGTH: Sa, MAX_SAFE_INTEGER: Zn} = Hs
  , {safeRe: ka, t: Ca} = $n
  , r1 = _o
  , {compareIdentifiers: Ar} = Fl;
let n1 = class vt {
    constructor(t, r) {
        if (r = r1(r),
        t instanceof vt) {
            if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease)
                return t;
            t = t.version
        } else if (typeof t != "string")
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
        if (t.length > Sa)
            throw new TypeError(`version is longer than ${Sa} characters`);
        Gn("SemVer", t, r),
        this.options = r,
        this.loose = !!r.loose,
        this.includePrerelease = !!r.includePrerelease;
        const n = t.trim().match(r.loose ? ka[Ca.LOOSE] : ka[Ca.FULL]);
        if (!n)
            throw new TypeError(`Invalid Version: ${t}`);
        if (this.raw = t,
        this.major = +n[1],
        this.minor = +n[2],
        this.patch = +n[3],
        this.major > Zn || this.major < 0)
            throw new TypeError("Invalid major version");
        if (this.minor > Zn || this.minor < 0)
            throw new TypeError("Invalid minor version");
        if (this.patch > Zn || this.patch < 0)
            throw new TypeError("Invalid patch version");
        n[4] ? this.prerelease = n[4].split(".").map(i=>{
            if (/^[0-9]+$/.test(i)) {
                const s = +i;
                if (s >= 0 && s < Zn)
                    return s
            }
            return i
        }
        ) : this.prerelease = [],
        this.build = n[5] ? n[5].split(".") : [],
        this.format()
    }
    format() {
        return this.version = `${this.major}.${this.minor}.${this.patch}`,
        this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
        this.version
    }
    toString() {
        return this.version
    }
    compare(t) {
        if (Gn("SemVer.compare", this.version, this.options, t),
        !(t instanceof vt)) {
            if (typeof t == "string" && t === this.version)
                return 0;
            t = new vt(t,this.options)
        }
        return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
    }
    compareMain(t) {
        return t instanceof vt || (t = new vt(t,this.options)),
        Ar(this.major, t.major) || Ar(this.minor, t.minor) || Ar(this.patch, t.patch)
    }
    comparePre(t) {
        if (t instanceof vt || (t = new vt(t,this.options)),
        this.prerelease.length && !t.prerelease.length)
            return -1;
        if (!this.prerelease.length && t.prerelease.length)
            return 1;
        if (!this.prerelease.length && !t.prerelease.length)
            return 0;
        let r = 0;
        do {
            const n = this.prerelease[r]
              , i = t.prerelease[r];
            if (Gn("prerelease compare", r, n, i),
            n === void 0 && i === void 0)
                return 0;
            if (i === void 0)
                return 1;
            if (n === void 0)
                return -1;
            if (n === i)
                continue;
            return Ar(n, i)
        } while (++r)
    }
    compareBuild(t) {
        t instanceof vt || (t = new vt(t,this.options));
        let r = 0;
        do {
            const n = this.build[r]
              , i = t.build[r];
            if (Gn("build compare", r, n, i),
            n === void 0 && i === void 0)
                return 0;
            if (i === void 0)
                return 1;
            if (n === void 0)
                return -1;
            if (n === i)
                continue;
            return Ar(n, i)
        } while (++r)
    }
    inc(t, r, n) {
        switch (t) {
        case "premajor":
            this.prerelease.length = 0,
            this.patch = 0,
            this.minor = 0,
            this.major++,
            this.inc("pre", r, n);
            break;
        case "preminor":
            this.prerelease.length = 0,
            this.patch = 0,
            this.minor++,
            this.inc("pre", r, n);
            break;
        case "prepatch":
            this.prerelease.length = 0,
            this.inc("patch", r, n),
            this.inc("pre", r, n);
            break;
        case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", r, n),
            this.inc("pre", r, n);
            break;
        case "major":
            (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++,
            this.minor = 0,
            this.patch = 0,
            this.prerelease = [];
            break;
        case "minor":
            (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
            this.patch = 0,
            this.prerelease = [];
            break;
        case "patch":
            this.prerelease.length === 0 && this.patch++,
            this.prerelease = [];
            break;
        case "pre":
            {
                const i = Number(n) ? 1 : 0;
                if (!r && n === !1)
                    throw new Error("invalid increment argument: identifier is empty");
                if (this.prerelease.length === 0)
                    this.prerelease = [i];
                else {
                    let s = this.prerelease.length;
                    for (; --s >= 0; )
                        typeof this.prerelease[s] == "number" && (this.prerelease[s]++,
                        s = -2);
                    if (s === -1) {
                        if (r === this.prerelease.join(".") && n === !1)
                            throw new Error("invalid increment argument: identifier already exists");
                        this.prerelease.push(i)
                    }
                }
                if (r) {
                    let s = [r, i];
                    n === !1 && (s = [r]),
                    Ar(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = s) : this.prerelease = s
                }
                break
            }
        default:
            throw new Error(`invalid increment argument: ${t}`)
        }
        return this.raw = this.format(),
        this.build.length && (this.raw += `+${this.build.join(".")}`),
        this
    }
}
;
var et = n1;
const Ma = et
  , s1 = (e,t,r=!1)=>{
    if (e instanceof Ma)
        return e;
    try {
        return new Ma(e,t)
    } catch (n) {
        if (!r)
            return null;
        throw n
    }
}
;
var Xr = s1;
const i1 = Xr
  , o1 = (e,t)=>{
    const r = i1(e, t);
    return r ? r.version : null
}
;
var a1 = o1;
const c1 = Xr
  , l1 = (e,t)=>{
    const r = c1(e.trim().replace(/^[=v]+/, ""), t);
    return r ? r.version : null
}
;
var u1 = l1;
const Ra = et
  , h1 = (e,t,r,n,i)=>{
    typeof r == "string" && (i = n,
    n = r,
    r = void 0);
    try {
        return new Ra(e instanceof Ra ? e.version : e,r).inc(t, n, i).version
    } catch {
        return null
    }
}
;
var d1 = h1;
const Ia = Xr
  , f1 = (e,t)=>{
    const r = Ia(e, null, !0)
      , n = Ia(t, null, !0)
      , i = r.compare(n);
    if (i === 0)
        return null;
    const s = i > 0
      , a = s ? r : n
      , c = s ? n : r
      , d = !!a.prerelease.length;
    if (!!c.prerelease.length && !d)
        return !c.patch && !c.minor ? "major" : a.patch ? "patch" : a.minor ? "minor" : "major";
    const p = d ? "pre" : "";
    return r.major !== n.major ? p + "major" : r.minor !== n.minor ? p + "minor" : r.patch !== n.patch ? p + "patch" : "prerelease"
}
;
var p1 = f1;
const g1 = et
  , m1 = (e,t)=>new g1(e,t).major;
var _1 = m1;
const v1 = et
  , y1 = (e,t)=>new v1(e,t).minor;
var w1 = y1;
const b1 = et
  , E1 = (e,t)=>new b1(e,t).patch;
var S1 = E1;
const k1 = Xr
  , C1 = (e,t)=>{
    const r = k1(e, t);
    return r && r.prerelease.length ? r.prerelease : null
}
;
var M1 = C1;
const Aa = et
  , R1 = (e,t,r)=>new Aa(e,r).compare(new Aa(t,r));
var pt = R1;
const I1 = pt
  , A1 = (e,t,r)=>I1(t, e, r);
var N1 = A1;
const x1 = pt
  , L1 = (e,t)=>x1(e, t, !0);
var T1 = L1;
const Na = et
  , P1 = (e,t,r)=>{
    const n = new Na(e,r)
      , i = new Na(t,r);
    return n.compare(i) || n.compareBuild(i)
}
;
var vo = P1;
const O1 = vo
  , $1 = (e,t)=>e.sort((r,n)=>O1(r, n, t));
var B1 = $1;
const F1 = vo
  , j1 = (e,t)=>e.sort((r,n)=>F1(n, r, t));
var D1 = j1;
const H1 = pt
  , U1 = (e,t,r)=>H1(e, t, r) > 0;
var Vs = U1;
const V1 = pt
  , z1 = (e,t,r)=>V1(e, t, r) < 0;
var yo = z1;
const W1 = pt
  , q1 = (e,t,r)=>W1(e, t, r) === 0;
var jl = q1;
const J1 = pt
  , G1 = (e,t,r)=>J1(e, t, r) !== 0;
var Dl = G1;
const Z1 = pt
  , Q1 = (e,t,r)=>Z1(e, t, r) >= 0;
var wo = Q1;
const K1 = pt
  , X1 = (e,t,r)=>K1(e, t, r) <= 0;
var bo = X1;
const Y1 = jl
  , ep = Dl
  , tp = Vs
  , rp = wo
  , np = yo
  , sp = bo
  , ip = (e,t,r,n)=>{
    switch (t) {
    case "===":
        return typeof e == "object" && (e = e.version),
        typeof r == "object" && (r = r.version),
        e === r;
    case "!==":
        return typeof e == "object" && (e = e.version),
        typeof r == "object" && (r = r.version),
        e !== r;
    case "":
    case "=":
    case "==":
        return Y1(e, r, n);
    case "!=":
        return ep(e, r, n);
    case ">":
        return tp(e, r, n);
    case ">=":
        return rp(e, r, n);
    case "<":
        return np(e, r, n);
    case "<=":
        return sp(e, r, n);
    default:
        throw new TypeError(`Invalid operator: ${t}`)
    }
}
;
var Hl = ip;
const op = et
  , ap = Xr
  , {safeRe: Qn, t: Kn} = $n
  , cp = (e,t)=>{
    if (e instanceof op)
        return e;
    if (typeof e == "number" && (e = String(e)),
    typeof e != "string")
        return null;
    t = t || {};
    let r = null;
    if (!t.rtl)
        r = e.match(t.includePrerelease ? Qn[Kn.COERCEFULL] : Qn[Kn.COERCE]);
    else {
        const d = t.includePrerelease ? Qn[Kn.COERCERTLFULL] : Qn[Kn.COERCERTL];
        let u;
        for (; (u = d.exec(e)) && (!r || r.index + r[0].length !== e.length); )
            (!r || u.index + u[0].length !== r.index + r[0].length) && (r = u),
            d.lastIndex = u.index + u[1].length + u[2].length;
        d.lastIndex = -1
    }
    if (r === null)
        return null;
    const n = r[2]
      , i = r[3] || "0"
      , s = r[4] || "0"
      , a = t.includePrerelease && r[5] ? `-${r[5]}` : ""
      , c = t.includePrerelease && r[6] ? `+${r[6]}` : "";
    return ap(`${n}.${i}.${s}${a}${c}`, t)
}
;
var lp = cp;
class up {
    constructor() {
        this.max = 1e3,
        this.map = new Map
    }
    get(t) {
        const r = this.map.get(t);
        if (r !== void 0)
            return this.map.delete(t),
            this.map.set(t, r),
            r
    }
    delete(t) {
        return this.map.delete(t)
    }
    set(t, r) {
        if (!this.delete(t) && r !== void 0) {
            if (this.map.size >= this.max) {
                const i = this.map.keys().next().value;
                this.delete(i)
            }
            this.map.set(t, r)
        }
        return this
    }
}
var hp = up, yi, xa;
function gt() {
    if (xa)
        return yi;
    xa = 1;
    class e {
        constructor(o, h) {
            if (h = n(h),
            o instanceof e)
                return o.loose === !!h.loose && o.includePrerelease === !!h.includePrerelease ? o : new e(o.raw,h);
            if (o instanceof i)
                return this.raw = o.value,
                this.set = [[o]],
                this.format(),
                this;
            if (this.options = h,
            this.loose = !!h.loose,
            this.includePrerelease = !!h.includePrerelease,
            this.raw = o.trim().split(/\s+/).join(" "),
            this.set = this.raw.split("||").map(g=>this.parseRange(g.trim())).filter(g=>g.length),
            !this.set.length)
                throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
            if (this.set.length > 1) {
                const g = this.set[0];
                if (this.set = this.set.filter(_=>!C(_[0])),
                this.set.length === 0)
                    this.set = [g];
                else if (this.set.length > 1) {
                    for (const _ of this.set)
                        if (_.length === 1 && N(_[0])) {
                            this.set = [_];
                            break
                        }
                }
            }
            this.format()
        }
        format() {
            return this.range = this.set.map(o=>o.join(" ").trim()).join("||").trim(),
            this.range
        }
        toString() {
            return this.range
        }
        parseRange(o) {
            const g = ((this.options.includePrerelease && m) | (this.options.loose && E)) + ":" + o
              , _ = r.get(g);
            if (_)
                return _;
            const w = this.options.loose
              , S = w ? c[d.HYPHENRANGELOOSE] : c[d.HYPHENRANGE];
            o = o.replace(S, V(this.options.includePrerelease)),
            s("hyphen replace", o),
            o = o.replace(c[d.COMPARATORTRIM], u),
            s("comparator trim", o),
            o = o.replace(c[d.TILDETRIM], p),
            s("tilde trim", o),
            o = o.replace(c[d.CARETTRIM], f),
            s("caret trim", o);
            let k = o.split(" ").map(L=>A(L, this.options)).join(" ").split(/\s+/).map(L=>Z(L, this.options));
            w && (k = k.filter(L=>(s("loose invalid filter", L, this.options),
            !!L.match(c[d.COMPARATORLOOSE])))),
            s("range list", k);
            const v = new Map
              , l = k.map(L=>new i(L,this.options));
            for (const L of l) {
                if (C(L))
                    return [L];
                v.set(L.value, L)
            }
            v.size > 1 && v.has("") && v.delete("");
            const b = [...v.values()];
            return r.set(g, b),
            b
        }
        intersects(o, h) {
            if (!(o instanceof e))
                throw new TypeError("a Range is required");
            return this.set.some(g=>M(g, h) && o.set.some(_=>M(_, h) && g.every(w=>_.every(S=>w.intersects(S, h)))))
        }
        test(o) {
            if (!o)
                return !1;
            if (typeof o == "string")
                try {
                    o = new a(o,this.options)
                } catch {
                    return !1
                }
            for (let h = 0; h < this.set.length; h++)
                if (Q(this.set[h], o, this.options))
                    return !0;
            return !1
        }
    }
    yi = e;
    const t = hp
      , r = new t
      , n = _o
      , i = zs()
      , s = Us
      , a = et
      , {safeRe: c, t: d, comparatorTrimReplace: u, tildeTrimReplace: p, caretTrimReplace: f} = $n
      , {FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: E} = Hs
      , C = y=>y.value === "<0.0.0-0"
      , N = y=>y.value === ""
      , M = (y,o)=>{
        let h = !0;
        const g = y.slice();
        let _ = g.pop();
        for (; h && g.length; )
            h = g.every(w=>_.intersects(w, o)),
            _ = g.pop();
        return h
    }
      , A = (y,o)=>(s("comp", y, o),
    y = x(y, o),
    s("caret", y),
    y = R(y, o),
    s("tildes", y),
    y = z(y, o),
    s("xrange", y),
    y = G(y, o),
    s("stars", y),
    y)
      , I = y=>!y || y.toLowerCase() === "x" || y === "*"
      , R = (y,o)=>y.trim().split(/\s+/).map(h=>F(h, o)).join(" ")
      , F = (y,o)=>{
        const h = o.loose ? c[d.TILDELOOSE] : c[d.TILDE];
        return y.replace(h, (g,_,w,S,k)=>{
            s("tilde", y, g, _, w, S, k);
            let v;
            return I(_) ? v = "" : I(w) ? v = `>=${_}.0.0 <${+_ + 1}.0.0-0` : I(S) ? v = `>=${_}.${w}.0 <${_}.${+w + 1}.0-0` : k ? (s("replaceTilde pr", k),
            v = `>=${_}.${w}.${S}-${k} <${_}.${+w + 1}.0-0`) : v = `>=${_}.${w}.${S} <${_}.${+w + 1}.0-0`,
            s("tilde return", v),
            v
        }
        )
    }
      , x = (y,o)=>y.trim().split(/\s+/).map(h=>P(h, o)).join(" ")
      , P = (y,o)=>{
        s("caret", y, o);
        const h = o.loose ? c[d.CARETLOOSE] : c[d.CARET]
          , g = o.includePrerelease ? "-0" : "";
        return y.replace(h, (_,w,S,k,v)=>{
            s("caret", y, _, w, S, k, v);
            let l;
            return I(w) ? l = "" : I(S) ? l = `>=${w}.0.0${g} <${+w + 1}.0.0-0` : I(k) ? w === "0" ? l = `>=${w}.${S}.0${g} <${w}.${+S + 1}.0-0` : l = `>=${w}.${S}.0${g} <${+w + 1}.0.0-0` : v ? (s("replaceCaret pr", v),
            w === "0" ? S === "0" ? l = `>=${w}.${S}.${k}-${v} <${w}.${S}.${+k + 1}-0` : l = `>=${w}.${S}.${k}-${v} <${w}.${+S + 1}.0-0` : l = `>=${w}.${S}.${k}-${v} <${+w + 1}.0.0-0`) : (s("no pr"),
            w === "0" ? S === "0" ? l = `>=${w}.${S}.${k}${g} <${w}.${S}.${+k + 1}-0` : l = `>=${w}.${S}.${k}${g} <${w}.${+S + 1}.0-0` : l = `>=${w}.${S}.${k} <${+w + 1}.0.0-0`),
            s("caret return", l),
            l
        }
        )
    }
      , z = (y,o)=>(s("replaceXRanges", y, o),
    y.split(/\s+/).map(h=>Y(h, o)).join(" "))
      , Y = (y,o)=>{
        y = y.trim();
        const h = o.loose ? c[d.XRANGELOOSE] : c[d.XRANGE];
        return y.replace(h, (g,_,w,S,k,v)=>{
            s("xRange", y, g, _, w, S, k, v);
            const l = I(w)
              , b = l || I(S)
              , L = b || I(k)
              , O = L;
            return _ === "=" && O && (_ = ""),
            v = o.includePrerelease ? "-0" : "",
            l ? _ === ">" || _ === "<" ? g = "<0.0.0-0" : g = "*" : _ && O ? (b && (S = 0),
            k = 0,
            _ === ">" ? (_ = ">=",
            b ? (w = +w + 1,
            S = 0,
            k = 0) : (S = +S + 1,
            k = 0)) : _ === "<=" && (_ = "<",
            b ? w = +w + 1 : S = +S + 1),
            _ === "<" && (v = "-0"),
            g = `${_ + w}.${S}.${k}${v}`) : b ? g = `>=${w}.0.0${v} <${+w + 1}.0.0-0` : L && (g = `>=${w}.${S}.0${v} <${w}.${+S + 1}.0-0`),
            s("xRange return", g),
            g
        }
        )
    }
      , G = (y,o)=>(s("replaceStars", y, o),
    y.trim().replace(c[d.STAR], ""))
      , Z = (y,o)=>(s("replaceGTE0", y, o),
    y.trim().replace(c[o.includePrerelease ? d.GTE0PRE : d.GTE0], ""))
      , V = y=>(o,h,g,_,w,S,k,v,l,b,L,O)=>(I(g) ? h = "" : I(_) ? h = `>=${g}.0.0${y ? "-0" : ""}` : I(w) ? h = `>=${g}.${_}.0${y ? "-0" : ""}` : S ? h = `>=${h}` : h = `>=${h}${y ? "-0" : ""}`,
    I(l) ? v = "" : I(b) ? v = `<${+l + 1}.0.0-0` : I(L) ? v = `<${l}.${+b + 1}.0-0` : O ? v = `<=${l}.${b}.${L}-${O}` : y ? v = `<${l}.${b}.${+L + 1}-0` : v = `<=${v}`,
    `${h} ${v}`.trim())
      , Q = (y,o,h)=>{
        for (let g = 0; g < y.length; g++)
            if (!y[g].test(o))
                return !1;
        if (o.prerelease.length && !h.includePrerelease) {
            for (let g = 0; g < y.length; g++)
                if (s(y[g].semver),
                y[g].semver !== i.ANY && y[g].semver.prerelease.length > 0) {
                    const _ = y[g].semver;
                    if (_.major === o.major && _.minor === o.minor && _.patch === o.patch)
                        return !0
                }
            return !1
        }
        return !0
    }
    ;
    return yi
}
var wi, La;
function zs() {
    if (La)
        return wi;
    La = 1;
    const e = Symbol("SemVer ANY");
    class t {
        static get ANY() {
            return e
        }
        constructor(p, f) {
            if (f = r(f),
            p instanceof t) {
                if (p.loose === !!f.loose)
                    return p;
                p = p.value
            }
            p = p.trim().split(/\s+/).join(" "),
            a("comparator", p, f),
            this.options = f,
            this.loose = !!f.loose,
            this.parse(p),
            this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version,
            a("comp", this)
        }
        parse(p) {
            const f = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR]
              , m = p.match(f);
            if (!m)
                throw new TypeError(`Invalid comparator: ${p}`);
            this.operator = m[1] !== void 0 ? m[1] : "",
            this.operator === "=" && (this.operator = ""),
            m[2] ? this.semver = new c(m[2],this.options.loose) : this.semver = e
        }
        toString() {
            return this.value
        }
        test(p) {
            if (a("Comparator.test", p, this.options.loose),
            this.semver === e || p === e)
                return !0;
            if (typeof p == "string")
                try {
                    p = new c(p,this.options)
                } catch {
                    return !1
                }
            return s(p, this.operator, this.semver, this.options)
        }
        intersects(p, f) {
            if (!(p instanceof t))
                throw new TypeError("a Comparator is required");
            return this.operator === "" ? this.value === "" ? !0 : new d(p.value,f).test(this.value) : p.operator === "" ? p.value === "" ? !0 : new d(this.value,f).test(p.semver) : (f = r(f),
            f.includePrerelease && (this.value === "<0.0.0-0" || p.value === "<0.0.0-0") || !f.includePrerelease && (this.value.startsWith("<0.0.0") || p.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && p.operator.startsWith(">") || this.operator.startsWith("<") && p.operator.startsWith("<") || this.semver.version === p.semver.version && this.operator.includes("=") && p.operator.includes("=") || s(this.semver, "<", p.semver, f) && this.operator.startsWith(">") && p.operator.startsWith("<") || s(this.semver, ">", p.semver, f) && this.operator.startsWith("<") && p.operator.startsWith(">")))
        }
    }
    wi = t;
    const r = _o
      , {safeRe: n, t: i} = $n
      , s = Hl
      , a = Us
      , c = et
      , d = gt();
    return wi
}
const dp = gt()
  , fp = (e,t,r)=>{
    try {
        t = new dp(t,r)
    } catch {
        return !1
    }
    return t.test(e)
}
;
var Ws = fp;
const pp = gt()
  , gp = (e,t)=>new pp(e,t).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));
var mp = gp;
const _p = et
  , vp = gt()
  , yp = (e,t,r)=>{
    let n = null
      , i = null
      , s = null;
    try {
        s = new vp(t,r)
    } catch {
        return null
    }
    return e.forEach(a=>{
        s.test(a) && (!n || i.compare(a) === -1) && (n = a,
        i = new _p(n,r))
    }
    ),
    n
}
;
var wp = yp;
const bp = et
  , Ep = gt()
  , Sp = (e,t,r)=>{
    let n = null
      , i = null
      , s = null;
    try {
        s = new Ep(t,r)
    } catch {
        return null
    }
    return e.forEach(a=>{
        s.test(a) && (!n || i.compare(a) === 1) && (n = a,
        i = new bp(n,r))
    }
    ),
    n
}
;
var kp = Sp;
const bi = et
  , Cp = gt()
  , Ta = Vs
  , Mp = (e,t)=>{
    e = new Cp(e,t);
    let r = new bi("0.0.0");
    if (e.test(r) || (r = new bi("0.0.0-0"),
    e.test(r)))
        return r;
    r = null;
    for (let n = 0; n < e.set.length; ++n) {
        const i = e.set[n];
        let s = null;
        i.forEach(a=>{
            const c = new bi(a.semver.version);
            switch (a.operator) {
            case ">":
                c.prerelease.length === 0 ? c.patch++ : c.prerelease.push(0),
                c.raw = c.format();
            case "":
            case ">=":
                (!s || Ta(c, s)) && (s = c);
                break;
            case "<":
            case "<=":
                break;
            default:
                throw new Error(`Unexpected operation: ${a.operator}`)
            }
        }
        ),
        s && (!r || Ta(r, s)) && (r = s)
    }
    return r && e.test(r) ? r : null
}
;
var Rp = Mp;
const Ip = gt()
  , Ap = (e,t)=>{
    try {
        return new Ip(e,t).range || "*"
    } catch {
        return null
    }
}
;
var Np = Ap;
const xp = et
  , Ul = zs()
  , {ANY: Lp} = Ul
  , Tp = gt()
  , Pp = Ws
  , Pa = Vs
  , Oa = yo
  , Op = bo
  , $p = wo
  , Bp = (e,t,r,n)=>{
    e = new xp(e,n),
    t = new Tp(t,n);
    let i, s, a, c, d;
    switch (r) {
    case ">":
        i = Pa,
        s = Op,
        a = Oa,
        c = ">",
        d = ">=";
        break;
    case "<":
        i = Oa,
        s = $p,
        a = Pa,
        c = "<",
        d = "<=";
        break;
    default:
        throw new TypeError('Must provide a hilo val of "<" or ">"')
    }
    if (Pp(e, t, n))
        return !1;
    for (let u = 0; u < t.set.length; ++u) {
        const p = t.set[u];
        let f = null
          , m = null;
        if (p.forEach(E=>{
            E.semver === Lp && (E = new Ul(">=0.0.0")),
            f = f || E,
            m = m || E,
            i(E.semver, f.semver, n) ? f = E : a(E.semver, m.semver, n) && (m = E)
        }
        ),
        f.operator === c || f.operator === d || (!m.operator || m.operator === c) && s(e, m.semver))
            return !1;
        if (m.operator === d && a(e, m.semver))
            return !1
    }
    return !0
}
;
var Eo = Bp;
const Fp = Eo
  , jp = (e,t,r)=>Fp(e, t, ">", r);
var Dp = jp;
const Hp = Eo
  , Up = (e,t,r)=>Hp(e, t, "<", r);
var Vp = Up;
const $a = gt()
  , zp = (e,t,r)=>(e = new $a(e,r),
t = new $a(t,r),
e.intersects(t, r));
var Wp = zp;
const qp = Ws
  , Jp = pt;
var Gp = (e,t,r)=>{
    const n = [];
    let i = null
      , s = null;
    const a = e.sort((p,f)=>Jp(p, f, r));
    for (const p of a)
        qp(p, t, r) ? (s = p,
        i || (i = p)) : (s && n.push([i, s]),
        s = null,
        i = null);
    i && n.push([i, null]);
    const c = [];
    for (const [p,f] of n)
        p === f ? c.push(p) : !f && p === a[0] ? c.push("*") : f ? p === a[0] ? c.push(`<=${f}`) : c.push(`${p} - ${f}`) : c.push(`>=${p}`);
    const d = c.join(" || ")
      , u = typeof t.raw == "string" ? t.raw : String(t);
    return d.length < u.length ? d : t
}
;
const Ba = gt()
  , So = zs()
  , {ANY: Ei} = So
  , an = Ws
  , ko = pt
  , Zp = (e,t,r={})=>{
    if (e === t)
        return !0;
    e = new Ba(e,r),
    t = new Ba(t,r);
    let n = !1;
    e: for (const i of e.set) {
        for (const s of t.set) {
            const a = Kp(i, s, r);
            if (n = n || a !== null,
            a)
                continue e
        }
        if (n)
            return !1
    }
    return !0
}
  , Qp = [new So(">=0.0.0-0")]
  , Fa = [new So(">=0.0.0")]
  , Kp = (e,t,r)=>{
    if (e === t)
        return !0;
    if (e.length === 1 && e[0].semver === Ei) {
        if (t.length === 1 && t[0].semver === Ei)
            return !0;
        r.includePrerelease ? e = Qp : e = Fa
    }
    if (t.length === 1 && t[0].semver === Ei) {
        if (r.includePrerelease)
            return !0;
        t = Fa
    }
    const n = new Set;
    let i, s;
    for (const E of e)
        E.operator === ">" || E.operator === ">=" ? i = ja(i, E, r) : E.operator === "<" || E.operator === "<=" ? s = Da(s, E, r) : n.add(E.semver);
    if (n.size > 1)
        return null;
    let a;
    if (i && s) {
        if (a = ko(i.semver, s.semver, r),
        a > 0)
            return null;
        if (a === 0 && (i.operator !== ">=" || s.operator !== "<="))
            return null
    }
    for (const E of n) {
        if (i && !an(E, String(i), r) || s && !an(E, String(s), r))
            return null;
        for (const C of t)
            if (!an(E, String(C), r))
                return !1;
        return !0
    }
    let c, d, u, p, f = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1, m = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
    f && f.prerelease.length === 1 && s.operator === "<" && f.prerelease[0] === 0 && (f = !1);
    for (const E of t) {
        if (p = p || E.operator === ">" || E.operator === ">=",
        u = u || E.operator === "<" || E.operator === "<=",
        i) {
            if (m && E.semver.prerelease && E.semver.prerelease.length && E.semver.major === m.major && E.semver.minor === m.minor && E.semver.patch === m.patch && (m = !1),
            E.operator === ">" || E.operator === ">=") {
                if (c = ja(i, E, r),
                c === E && c !== i)
                    return !1
            } else if (i.operator === ">=" && !an(i.semver, String(E), r))
                return !1
        }
        if (s) {
            if (f && E.semver.prerelease && E.semver.prerelease.length && E.semver.major === f.major && E.semver.minor === f.minor && E.semver.patch === f.patch && (f = !1),
            E.operator === "<" || E.operator === "<=") {
                if (d = Da(s, E, r),
                d === E && d !== s)
                    return !1
            } else if (s.operator === "<=" && !an(s.semver, String(E), r))
                return !1
        }
        if (!E.operator && (s || i) && a !== 0)
            return !1
    }
    return !(i && u && !s && a !== 0 || s && p && !i && a !== 0 || m || f)
}
  , ja = (e,t,r)=>{
    if (!e)
        return t;
    const n = ko(e.semver, t.semver, r);
    return n > 0 ? e : n < 0 || t.operator === ">" && e.operator === ">=" ? t : e
}
  , Da = (e,t,r)=>{
    if (!e)
        return t;
    const n = ko(e.semver, t.semver, r);
    return n < 0 ? e : n > 0 || t.operator === "<" && e.operator === "<=" ? t : e
}
;
var Xp = Zp;
const Si = $n
  , Ha = Hs
  , Yp = et
  , Ua = Fl
  , eg = Xr
  , tg = a1
  , rg = u1
  , ng = d1
  , sg = p1
  , ig = _1
  , og = w1
  , ag = S1
  , cg = M1
  , lg = pt
  , ug = N1
  , hg = T1
  , dg = vo
  , fg = B1
  , pg = D1
  , gg = Vs
  , mg = yo
  , _g = jl
  , vg = Dl
  , yg = wo
  , wg = bo
  , bg = Hl
  , Eg = lp
  , Sg = zs()
  , kg = gt()
  , Cg = Ws
  , Mg = mp
  , Rg = wp
  , Ig = kp
  , Ag = Rp
  , Ng = Np
  , xg = Eo
  , Lg = Dp
  , Tg = Vp
  , Pg = Wp
  , Og = Gp
  , $g = Xp;
var Bg = {
    parse: eg,
    valid: tg,
    clean: rg,
    inc: ng,
    diff: sg,
    major: ig,
    minor: og,
    patch: ag,
    prerelease: cg,
    compare: lg,
    rcompare: ug,
    compareLoose: hg,
    compareBuild: dg,
    sort: fg,
    rsort: pg,
    gt: gg,
    lt: mg,
    eq: _g,
    neq: vg,
    gte: yg,
    lte: wg,
    cmp: bg,
    coerce: Eg,
    Comparator: Sg,
    Range: kg,
    satisfies: Cg,
    toComparators: Mg,
    maxSatisfying: Rg,
    minSatisfying: Ig,
    minVersion: Ag,
    validRange: Ng,
    outside: xg,
    gtr: Lg,
    ltr: Tg,
    intersects: Pg,
    simplifyRange: Og,
    subset: $g,
    SemVer: Yp,
    re: Si.re,
    src: Si.src,
    tokens: Si.t,
    SEMVER_SPEC_VERSION: Ha.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: Ha.RELEASE_TYPES,
    compareIdentifiers: Ua.compareIdentifiers,
    rcompareIdentifiers: Ua.rcompareIdentifiers
};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.satisfiesVersionRange = e.gtRange = e.gtVersion = e.assertIsSemVerRange = e.assertIsSemVerVersion = e.isValidSemVerRange = e.isValidSemVerVersion = e.VersionRangeStruct = e.VersionStruct = void 0;
    const t = Bg
      , r = dr
      , n = Qe;
    e.VersionStruct = (0,
    r.refine)((0,
    r.string)(), "Version", f=>(0,
    t.valid)(f) === null ? `Expected SemVer version, got "${f}"` : !0),
    e.VersionRangeStruct = (0,
    r.refine)((0,
    r.string)(), "Version range", f=>(0,
    t.validRange)(f) === null ? `Expected SemVer range, got "${f}"` : !0);
    function i(f) {
        return (0,
        r.is)(f, e.VersionStruct)
    }
    e.isValidSemVerVersion = i;
    function s(f) {
        return (0,
        r.is)(f, e.VersionRangeStruct)
    }
    e.isValidSemVerRange = s;
    function a(f) {
        (0,
        n.assertStruct)(f, e.VersionStruct)
    }
    e.assertIsSemVerVersion = a;
    function c(f) {
        (0,
        n.assertStruct)(f, e.VersionRangeStruct)
    }
    e.assertIsSemVerRange = c;
    function d(f, m) {
        return (0,
        t.gt)(f, m)
    }
    e.gtVersion = d;
    function u(f, m) {
        return (0,
        t.gtr)(f, m)
    }
    e.gtRange = u;
    function p(f, m) {
        return (0,
        t.satisfies)(f, m, {
            includePrerelease: !0
        })
    }
    e.satisfiesVersionRange = p
}
)(Ol);
(function(e) {
    var t = $ && $.__createBinding || (Object.create ? function(n, i, s, a) {
        a === void 0 && (a = s);
        var c = Object.getOwnPropertyDescriptor(i, s);
        (!c || ("get"in c ? !i.__esModule : c.writable || c.configurable)) && (c = {
            enumerable: !0,
            get: function() {
                return i[s]
            }
        }),
        Object.defineProperty(n, a, c)
    }
    : function(n, i, s, a) {
        a === void 0 && (a = s),
        n[a] = i[s]
    }
    )
      , r = $ && $.__exportStar || function(n, i) {
        for (var s in n)
            s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    r(Qe, e),
    r(Pn, e),
    r(J, e),
    r(js, e),
    r(St, e),
    r(Ur, e),
    r(Il, e),
    r(On, e),
    r(Al, e),
    r(Nl, e),
    r(Vr, e),
    r(xl, e),
    r(kt, e),
    r(Ll, e),
    r(Tl, e),
    r(Pl, e),
    r(Ol, e)
}
)(ll);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.createModuleLogger = e.projectLogger = void 0;
    const t = ll;
    Object.defineProperty(e, "createModuleLogger", {
        enumerable: !0,
        get: function() {
            return t.createModuleLogger
        }
    }),
    e.projectLogger = (0,
    t.createProjectLogger)("eth-block-tracker")
}
)(cl);
var Vl = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Bs, "__esModule", {
    value: !0
});
Bs.PollingBlockTracker = void 0;
const Fg = Vl(ao)
  , jg = Vl(uf)
  , Dg = Nn
  , Va = cl
  , za = (0,
Va.createModuleLogger)(Va.projectLogger, "polling-block-tracker")
  , Hg = (0,
Fg.default)()
  , Ug = 1e3;
class Vg extends Dg.BaseBlockTracker {
    constructor(t={}) {
        var r;
        if (!t.provider)
            throw new Error("PollingBlockTracker - no provider specified.");
        super(Object.assign(Object.assign({}, t), {
            blockResetDuration: (r = t.blockResetDuration) !== null && r !== void 0 ? r : t.pollingInterval
        })),
        this._provider = t.provider,
        this._pollingInterval = t.pollingInterval || 20 * Ug,
        this._retryTimeout = t.retryTimeout || this._pollingInterval / 10,
        this._keepEventLoopActive = t.keepEventLoopActive === void 0 ? !0 : t.keepEventLoopActive,
        this._setSkipCacheFlag = t.setSkipCacheFlag || !1
    }
    async checkForLatestBlock() {
        return await this._updateLatestBlock(),
        await this.getLatestBlock()
    }
    async _start() {
        this._synchronize()
    }
    async _end() {}
    async _synchronize() {
        for (var t; this._isRunning; )
            try {
                await this._updateLatestBlock();
                const r = Wa(this._pollingInterval, !this._keepEventLoopActive);
                this.emit("_waitingForNextIteration"),
                await r
            } catch (r) {
                const n = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(t = r.stack) !== null && t !== void 0 ? t : r}`);
                try {
                    this.emit("error", n)
                } catch {
                    console.error(n)
                }
                const i = Wa(this._retryTimeout, !this._keepEventLoopActive);
                this.emit("_waitingForNextIteration"),
                await i
            }
    }
    async _updateLatestBlock() {
        const t = await this._fetchLatestBlock();
        this._newPotentialLatest(t)
    }
    async _fetchLatestBlock() {
        const t = {
            jsonrpc: "2.0",
            id: Hg(),
            method: "eth_blockNumber",
            params: []
        };
        this._setSkipCacheFlag && (t.skipCache = !0),
        za("Making request", t);
        const r = await (0,
        jg.default)(n=>this._provider.sendAsync(t, n))();
        if (za("Got response", r),
        r.error)
            throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
        return r.result
    }
}
Bs.PollingBlockTracker = Vg;
function Wa(e, t) {
    return new Promise(r=>{
        const n = setTimeout(r, e);
        n.unref && t && n.unref()
    }
    )
}
var qs = {}
  , zg = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(qs, "__esModule", {
    value: !0
});
qs.SubscribeBlockTracker = void 0;
const Wg = zg(ao)
  , qg = Nn
  , Jg = (0,
Wg.default)();
class Gg extends qg.BaseBlockTracker {
    constructor(t={}) {
        if (!t.provider)
            throw new Error("SubscribeBlockTracker - no provider specified.");
        super(t),
        this._provider = t.provider,
        this._subscriptionId = null
    }
    async checkForLatestBlock() {
        return await this.getLatestBlock()
    }
    async _start() {
        if (this._subscriptionId === void 0 || this._subscriptionId === null)
            try {
                const t = await this._call("eth_blockNumber");
                this._subscriptionId = await this._call("eth_subscribe", "newHeads"),
                this._provider.on("data", this._handleSubData.bind(this)),
                this._newPotentialLatest(t)
            } catch (t) {
                this.emit("error", t)
            }
    }
    async _end() {
        if (this._subscriptionId !== null && this._subscriptionId !== void 0)
            try {
                await this._call("eth_unsubscribe", this._subscriptionId),
                this._subscriptionId = null
            } catch (t) {
                this.emit("error", t)
            }
    }
    _call(t, ...r) {
        return new Promise((n,i)=>{
            this._provider.sendAsync({
                id: Jg(),
                method: t,
                params: r,
                jsonrpc: "2.0"
            }, (s,a)=>{
                s ? i(s) : n(a.result)
            }
            )
        }
        )
    }
    _handleSubData(t, r) {
        var n;
        r.method === "eth_subscription" && ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) === this._subscriptionId && this._newPotentialLatest(r.params.result.number)
    }
}
qs.SubscribeBlockTracker = Gg;
(function(e) {
    var t = $ && $.__createBinding || (Object.create ? function(n, i, s, a) {
        a === void 0 && (a = s),
        Object.defineProperty(n, a, {
            enumerable: !0,
            get: function() {
                return i[s]
            }
        })
    }
    : function(n, i, s, a) {
        a === void 0 && (a = s),
        n[a] = i[s]
    }
    )
      , r = $ && $.__exportStar || function(n, i) {
        for (var s in n)
            s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    r(Bs, e),
    r(qs, e)
}
)(al);
var Co = {}
  , Js = {}
  , Bn = {};
Object.defineProperty(Bn, "__esModule", {
    value: !0
});
Bn.getUniqueId = void 0;
const zl = 4294967295;
let ki = Math.floor(Math.random() * zl);
function Zg() {
    return ki = (ki + 1) % zl,
    ki
}
Bn.getUniqueId = Zg;
Object.defineProperty(Js, "__esModule", {
    value: !0
});
Js.createIdRemapMiddleware = void 0;
const Qg = Bn;
function Kg() {
    return (e,t,r,n)=>{
        const i = e.id
          , s = Qg.getUniqueId();
        e.id = s,
        t.id = s,
        r(a=>{
            e.id = i,
            t.id = i,
            a()
        }
        )
    }
}
Js.createIdRemapMiddleware = Kg;
var Gs = {};
Object.defineProperty(Gs, "__esModule", {
    value: !0
});
Gs.createAsyncMiddleware = void 0;
function Xg(e) {
    return async(t,r,n,i)=>{
        let s;
        const a = new Promise(p=>{
            s = p
        }
        );
        let c = null
          , d = !1;
        const u = async()=>{
            d = !0,
            n(p=>{
                c = p,
                s()
            }
            ),
            await a
        }
        ;
        try {
            await e(t, r, u),
            d ? (await a,
            c(null)) : i(null)
        } catch (p) {
            c ? c(p) : i(p)
        }
    }
}
Gs.createAsyncMiddleware = Xg;
var Zs = {};
Object.defineProperty(Zs, "__esModule", {
    value: !0
});
Zs.createScaffoldMiddleware = void 0;
function Yg(e) {
    return (t,r,n,i)=>{
        const s = e[t.method];
        return s === void 0 ? n() : typeof s == "function" ? s(t, r, n, i) : (r.result = s,
        i())
    }
}
Zs.createScaffoldMiddleware = Yg;
var Fn = {}
  , Mo = {};
Object.defineProperty(Mo, "__esModule", {
    value: !0
});
const em = oc;
function qa(e, t, r) {
    try {
        Reflect.apply(e, t, r)
    } catch (n) {
        setTimeout(()=>{
            throw n
        }
        )
    }
}
function tm(e) {
    const t = e.length
      , r = new Array(t);
    for (let n = 0; n < t; n += 1)
        r[n] = e[n];
    return r
}
let rm = class extends em.EventEmitter {
    emit(t, ...r) {
        let n = t === "error";
        const i = this._events;
        if (i !== void 0)
            n = n && i.error === void 0;
        else if (!n)
            return !1;
        if (n) {
            let a;
            if (r.length > 0 && ([a] = r),
            a instanceof Error)
                throw a;
            const c = new Error(`Unhandled error.${a ? ` (${a.message})` : ""}`);
            throw c.context = a,
            c
        }
        const s = i[t];
        if (s === void 0)
            return !1;
        if (typeof s == "function")
            qa(s, this, r);
        else {
            const a = s.length
              , c = tm(s);
            for (let d = 0; d < a; d += 1)
                qa(c[d], this, r)
        }
        return !0
    }
}
;
Mo.default = rm;
var Wl = {}
  , Pt = {}
  , nm = mn;
mn.default = mn;
mn.stable = Gl;
mn.stableStringify = Gl;
var os = "[...]"
  , ql = "[Circular]"
  , cr = []
  , sr = [];
function Jl() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    }
}
function mn(e, t, r, n) {
    typeof n > "u" && (n = Jl()),
    Hi(e, "", 0, [], void 0, 0, n);
    var i;
    try {
        sr.length === 0 ? i = JSON.stringify(e, t, r) : i = JSON.stringify(e, Zl(t), r)
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
    } finally {
        for (; cr.length !== 0; ) {
            var s = cr.pop();
            s.length === 4 ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2]
        }
    }
    return i
}
function $r(e, t, r, n) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    i.get !== void 0 ? i.configurable ? (Object.defineProperty(n, r, {
        value: e
    }),
    cr.push([n, r, t, i])) : sr.push([t, r, e]) : (n[r] = e,
    cr.push([n, r, t]))
}
function Hi(e, t, r, n, i, s, a) {
    s += 1;
    var c;
    if (typeof e == "object" && e !== null) {
        for (c = 0; c < n.length; c++)
            if (n[c] === e) {
                $r(ql, e, t, i);
                return
            }
        if (typeof a.depthLimit < "u" && s > a.depthLimit) {
            $r(os, e, t, i);
            return
        }
        if (typeof a.edgesLimit < "u" && r + 1 > a.edgesLimit) {
            $r(os, e, t, i);
            return
        }
        if (n.push(e),
        Array.isArray(e))
            for (c = 0; c < e.length; c++)
                Hi(e[c], c, c, n, e, s, a);
        else {
            var d = Object.keys(e);
            for (c = 0; c < d.length; c++) {
                var u = d[c];
                Hi(e[u], u, c, n, e, s, a)
            }
        }
        n.pop()
    }
}
function sm(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
}
function Gl(e, t, r, n) {
    typeof n > "u" && (n = Jl());
    var i = Ui(e, "", 0, [], void 0, 0, n) || e, s;
    try {
        sr.length === 0 ? s = JSON.stringify(i, t, r) : s = JSON.stringify(i, Zl(t), r)
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
    } finally {
        for (; cr.length !== 0; ) {
            var a = cr.pop();
            a.length === 4 ? Object.defineProperty(a[0], a[1], a[3]) : a[0][a[1]] = a[2]
        }
    }
    return s
}
function Ui(e, t, r, n, i, s, a) {
    s += 1;
    var c;
    if (typeof e == "object" && e !== null) {
        for (c = 0; c < n.length; c++)
            if (n[c] === e) {
                $r(ql, e, t, i);
                return
            }
        try {
            if (typeof e.toJSON == "function")
                return
        } catch {
            return
        }
        if (typeof a.depthLimit < "u" && s > a.depthLimit) {
            $r(os, e, t, i);
            return
        }
        if (typeof a.edgesLimit < "u" && r + 1 > a.edgesLimit) {
            $r(os, e, t, i);
            return
        }
        if (n.push(e),
        Array.isArray(e))
            for (c = 0; c < e.length; c++)
                Ui(e[c], c, c, n, e, s, a);
        else {
            var d = {}
              , u = Object.keys(e).sort(sm);
            for (c = 0; c < u.length; c++) {
                var p = u[c];
                Ui(e[p], p, c, n, e, s, a),
                d[p] = e[p]
            }
            if (typeof i < "u")
                cr.push([i, t, e]),
                i[t] = d;
            else
                return d
        }
        n.pop()
    }
}
function Zl(e) {
    return e = typeof e < "u" ? e : function(t, r) {
        return r
    }
    ,
    function(t, r) {
        if (sr.length > 0)
            for (var n = 0; n < sr.length; n++) {
                var i = sr[n];
                if (i[1] === t && i[0] === r) {
                    r = i[2],
                    sr.splice(n, 1);
                    break
                }
            }
        return e.call(this, t, r)
    }
}
Object.defineProperty(Pt, "__esModule", {
    value: !0
});
Pt.EthereumProviderError = Pt.EthereumRpcError = void 0;
const im = nm;
class Ql extends Error {
    constructor(t, r, n) {
        if (!Number.isInteger(t))
            throw new Error('"code" must be an integer.');
        if (!r || typeof r != "string")
            throw new Error('"message" must be a nonempty string.');
        super(r),
        this.code = t,
        n !== void 0 && (this.data = n)
    }
    serialize() {
        const t = {
            code: this.code,
            message: this.message
        };
        return this.data !== void 0 && (t.data = this.data),
        this.stack && (t.stack = this.stack),
        t
    }
    toString() {
        return im.default(this.serialize(), cm, 2)
    }
}
Pt.EthereumRpcError = Ql;
class om extends Ql {
    constructor(t, r, n) {
        if (!am(t))
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(t, r, n)
    }
}
Pt.EthereumProviderError = om;
function am(e) {
    return Number.isInteger(e) && e >= 1e3 && e <= 4999
}
function cm(e, t) {
    if (t !== "[Circular]")
        return t
}
var Ro = {}
  , Ot = {};
Object.defineProperty(Ot, "__esModule", {
    value: !0
});
Ot.errorValues = Ot.errorCodes = void 0;
Ot.errorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
};
Ot.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const t = Ot
      , r = Pt
      , n = t.errorCodes.rpc.internal
      , i = "Unspecified error message. This is a bug, please report it."
      , s = {
        code: n,
        message: a(n)
    };
    e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    function a(m, E=i) {
        if (Number.isInteger(m)) {
            const C = m.toString();
            if (f(t.errorValues, C))
                return t.errorValues[C].message;
            if (u(m))
                return e.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return E
    }
    e.getMessageFromCode = a;
    function c(m) {
        if (!Number.isInteger(m))
            return !1;
        const E = m.toString();
        return !!(t.errorValues[E] || u(m))
    }
    e.isValidCode = c;
    function d(m, {fallbackError: E=s, shouldIncludeStack: C=!1}={}) {
        var N, M;
        if (!E || !Number.isInteger(E.code) || typeof E.message != "string")
            throw new Error("Must provide fallback error with integer number code and string message.");
        if (m instanceof r.EthereumRpcError)
            return m.serialize();
        const A = {};
        if (m && typeof m == "object" && !Array.isArray(m) && f(m, "code") && c(m.code)) {
            const R = m;
            A.code = R.code,
            R.message && typeof R.message == "string" ? (A.message = R.message,
            f(R, "data") && (A.data = R.data)) : (A.message = a(A.code),
            A.data = {
                originalError: p(m)
            })
        } else {
            A.code = E.code;
            const R = (N = m) === null || N === void 0 ? void 0 : N.message;
            A.message = R && typeof R == "string" ? R : E.message,
            A.data = {
                originalError: p(m)
            }
        }
        const I = (M = m) === null || M === void 0 ? void 0 : M.stack;
        return C && m && I && typeof I == "string" && (A.stack = I),
        A
    }
    e.serializeError = d;
    function u(m) {
        return m >= -32099 && m <= -32e3
    }
    function p(m) {
        return m && typeof m == "object" && !Array.isArray(m) ? Object.assign({}, m) : m
    }
    function f(m, E) {
        return Object.prototype.hasOwnProperty.call(m, E)
    }
}
)(Ro);
var Qs = {};
Object.defineProperty(Qs, "__esModule", {
    value: !0
});
Qs.ethErrors = void 0;
const Io = Pt
  , Kl = Ro
  , Ke = Ot;
Qs.ethErrors = {
    rpc: {
        parse: e=>at(Ke.errorCodes.rpc.parse, e),
        invalidRequest: e=>at(Ke.errorCodes.rpc.invalidRequest, e),
        invalidParams: e=>at(Ke.errorCodes.rpc.invalidParams, e),
        methodNotFound: e=>at(Ke.errorCodes.rpc.methodNotFound, e),
        internal: e=>at(Ke.errorCodes.rpc.internal, e),
        server: e=>{
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const {code: t} = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return at(t, e)
        }
        ,
        invalidInput: e=>at(Ke.errorCodes.rpc.invalidInput, e),
        resourceNotFound: e=>at(Ke.errorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: e=>at(Ke.errorCodes.rpc.resourceUnavailable, e),
        transactionRejected: e=>at(Ke.errorCodes.rpc.transactionRejected, e),
        methodNotSupported: e=>at(Ke.errorCodes.rpc.methodNotSupported, e),
        limitExceeded: e=>at(Ke.errorCodes.rpc.limitExceeded, e)
    },
    provider: {
        userRejectedRequest: e=>cn(Ke.errorCodes.provider.userRejectedRequest, e),
        unauthorized: e=>cn(Ke.errorCodes.provider.unauthorized, e),
        unsupportedMethod: e=>cn(Ke.errorCodes.provider.unsupportedMethod, e),
        disconnected: e=>cn(Ke.errorCodes.provider.disconnected, e),
        chainDisconnected: e=>cn(Ke.errorCodes.provider.chainDisconnected, e),
        custom: e=>{
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const {code: t, message: r, data: n} = e;
            if (!r || typeof r != "string")
                throw new Error('"message" must be a nonempty string');
            return new Io.EthereumProviderError(t,r,n)
        }
    }
};
function at(e, t) {
    const [r,n] = Xl(t);
    return new Io.EthereumRpcError(e,r || Kl.getMessageFromCode(e),n)
}
function cn(e, t) {
    const [r,n] = Xl(t);
    return new Io.EthereumProviderError(e,r || Kl.getMessageFromCode(e),n)
}
function Xl(e) {
    if (e) {
        if (typeof e == "string")
            return [e];
        if (typeof e == "object" && !Array.isArray(e)) {
            const {message: t, data: r} = e;
            if (t && typeof t != "string")
                throw new Error("Must specify string message.");
            return [t || void 0, r]
        }
    }
    return []
}
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
    const t = Pt;
    Object.defineProperty(e, "EthereumRpcError", {
        enumerable: !0,
        get: function() {
            return t.EthereumRpcError
        }
    }),
    Object.defineProperty(e, "EthereumProviderError", {
        enumerable: !0,
        get: function() {
            return t.EthereumProviderError
        }
    });
    const r = Ro;
    Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function() {
            return r.serializeError
        }
    }),
    Object.defineProperty(e, "getMessageFromCode", {
        enumerable: !0,
        get: function() {
            return r.getMessageFromCode
        }
    });
    const n = Qs;
    Object.defineProperty(e, "ethErrors", {
        enumerable: !0,
        get: function() {
            return n.ethErrors
        }
    });
    const i = Ot;
    Object.defineProperty(e, "errorCodes", {
        enumerable: !0,
        get: function() {
            return i.errorCodes
        }
    })
}
)(Wl);
var lm = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Fn, "__esModule", {
    value: !0
});
Fn.JsonRpcEngine = void 0;
const um = lm(Mo)
  , ct = Wl;
class Ct extends um.default {
    constructor() {
        super(),
        this._middleware = []
    }
    push(t) {
        this._middleware.push(t)
    }
    handle(t, r) {
        if (r && typeof r != "function")
            throw new Error('"callback" must be a function if provided.');
        return Array.isArray(t) ? r ? this._handleBatch(t, r) : this._handleBatch(t) : r ? this._handle(t, r) : this._promiseHandle(t)
    }
    asMiddleware() {
        return async(t,r,n,i)=>{
            try {
                const [s,a,c] = await Ct._runAllMiddleware(t, r, this._middleware);
                return a ? (await Ct._runReturnHandlers(c),
                i(s)) : n(async d=>{
                    try {
                        await Ct._runReturnHandlers(c)
                    } catch (u) {
                        return d(u)
                    }
                    return d()
                }
                )
            } catch (s) {
                return i(s)
            }
        }
    }
    async _handleBatch(t, r) {
        try {
            const n = await Promise.all(t.map(this._promiseHandle.bind(this)));
            return r ? r(null, n) : n
        } catch (n) {
            if (r)
                return r(n);
            throw n
        }
    }
    _promiseHandle(t) {
        return new Promise(r=>{
            this._handle(t, (n,i)=>{
                r(i)
            }
            )
        }
        )
    }
    async _handle(t, r) {
        if (!t || Array.isArray(t) || typeof t != "object") {
            const a = new ct.EthereumRpcError(ct.errorCodes.rpc.invalidRequest,`Requests must be plain objects. Received: ${typeof t}`,{
                request: t
            });
            return r(a, {
                id: void 0,
                jsonrpc: "2.0",
                error: a
            })
        }
        if (typeof t.method != "string") {
            const a = new ct.EthereumRpcError(ct.errorCodes.rpc.invalidRequest,`Must specify a string method. Received: ${typeof t.method}`,{
                request: t
            });
            return r(a, {
                id: t.id,
                jsonrpc: "2.0",
                error: a
            })
        }
        const n = Object.assign({}, t)
          , i = {
            id: n.id,
            jsonrpc: n.jsonrpc
        };
        let s = null;
        try {
            await this._processRequest(n, i)
        } catch (a) {
            s = a
        }
        return s && (delete i.result,
        i.error || (i.error = ct.serializeError(s))),
        r(s, i)
    }
    async _processRequest(t, r) {
        const [n,i,s] = await Ct._runAllMiddleware(t, r, this._middleware);
        if (Ct._checkForCompletion(t, r, i),
        await Ct._runReturnHandlers(s),
        n)
            throw n
    }
    static async _runAllMiddleware(t, r, n) {
        const i = [];
        let s = null
          , a = !1;
        for (const c of n)
            if ([s,a] = await Ct._runMiddleware(t, r, c, i),
            a)
                break;
        return [s, a, i.reverse()]
    }
    static _runMiddleware(t, r, n, i) {
        return new Promise(s=>{
            const a = d=>{
                const u = d || r.error;
                u && (r.error = ct.serializeError(u)),
                s([u, !0])
            }
              , c = d=>{
                r.error ? a(r.error) : (d && (typeof d != "function" && a(new ct.EthereumRpcError(ct.errorCodes.rpc.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof d}" for request:
${Ci(t)}`,{
                    request: t
                })),
                i.push(d)),
                s([null, !1]))
            }
            ;
            try {
                n(t, r, c, a)
            } catch (d) {
                a(d)
            }
        }
        )
    }
    static async _runReturnHandlers(t) {
        for (const r of t)
            await new Promise((n,i)=>{
                r(s=>s ? i(s) : n())
            }
            )
    }
    static _checkForCompletion(t, r, n) {
        if (!("result"in r) && !("error"in r))
            throw new ct.EthereumRpcError(ct.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:
${Ci(t)}`,{
                request: t
            });
        if (!n)
            throw new ct.EthereumRpcError(ct.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:
${Ci(t)}`,{
                request: t
            })
    }
}
Fn.JsonRpcEngine = Ct;
function Ci(e) {
    return JSON.stringify(e, null, 2)
}
var Ks = {};
Object.defineProperty(Ks, "__esModule", {
    value: !0
});
Ks.mergeMiddleware = void 0;
const hm = Fn;
function dm(e) {
    const t = new hm.JsonRpcEngine;
    return e.forEach(r=>t.push(r)),
    t.asMiddleware()
}
Ks.mergeMiddleware = dm;
(function(e) {
    var t = $ && $.__createBinding || (Object.create ? function(n, i, s, a) {
        a === void 0 && (a = s),
        Object.defineProperty(n, a, {
            enumerable: !0,
            get: function() {
                return i[s]
            }
        })
    }
    : function(n, i, s, a) {
        a === void 0 && (a = s),
        n[a] = i[s]
    }
    )
      , r = $ && $.__exportStar || function(n, i) {
        for (var s in n)
            s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
    }
    ;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    r(Js, e),
    r(Gs, e),
    r(Zs, e),
    r(Bn, e),
    r(Fn, e),
    r(Ks, e)
}
)(Co);
var Yl = {}
  , Ao = {}
  , Vi = function(e, t) {
    return Vi = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(r, n) {
        r.__proto__ = n
    }
    || function(r, n) {
        for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
    }
    ,
    Vi(e, t)
};
function eu(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Vi(e, t);
    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype,
    new r)
}
var as = function() {
    return as = Object.assign || function(t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var s in r)
                Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    as.apply(this, arguments)
};
function tu(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
    return r
}
function ru(e, t, r, n) {
    var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        s = Reflect.decorate(e, t, r, n);
    else
        for (var c = e.length - 1; c >= 0; c--)
            (a = e[c]) && (s = (i < 3 ? a(s) : i > 3 ? a(t, r, s) : a(t, r)) || s);
    return i > 3 && s && Object.defineProperty(t, r, s),
    s
}
function nu(e, t) {
    return function(r, n) {
        t(r, n, e)
    }
}
function fm(e, t, r, n, i, s) {
    function a(A) {
        if (A !== void 0 && typeof A != "function")
            throw new TypeError("Function expected");
        return A
    }
    for (var c = n.kind, d = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, p = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), f, m = !1, E = r.length - 1; E >= 0; E--) {
        var C = {};
        for (var N in n)
            C[N] = N === "access" ? {} : n[N];
        for (var N in n.access)
            C.access[N] = n.access[N];
        C.addInitializer = function(A) {
            if (m)
                throw new TypeError("Cannot add initializers after decoration has completed");
            s.push(a(A || null))
        }
        ;
        var M = (0,
        r[E])(c === "accessor" ? {
            get: p.get,
            set: p.set
        } : p[d], C);
        if (c === "accessor") {
            if (M === void 0)
                continue;
            if (M === null || typeof M != "object")
                throw new TypeError("Object expected");
            (f = a(M.get)) && (p.get = f),
            (f = a(M.set)) && (p.set = f),
            (f = a(M.init)) && i.unshift(f)
        } else
            (f = a(M)) && (c === "field" ? i.unshift(f) : p[d] = f)
    }
    u && Object.defineProperty(u, n.name, p),
    m = !0
}
function pm(e, t, r) {
    for (var n = arguments.length > 2, i = 0; i < t.length; i++)
        r = n ? t[i].call(e, r) : t[i].call(e);
    return n ? r : void 0
}
function gm(e) {
    return typeof e == "symbol" ? e : "".concat(e)
}
function mm(e, t, r) {
    return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""),
    Object.defineProperty(e, "name", {
        configurable: !0,
        value: r ? "".concat(r, " ", t) : t
    })
}
function su(e, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(e, t)
}
function iu(e, t, r, n) {
    function i(s) {
        return s instanceof r ? s : new r(function(a) {
            a(s)
        }
        )
    }
    return new (r || (r = Promise))(function(s, a) {
        function c(p) {
            try {
                u(n.next(p))
            } catch (f) {
                a(f)
            }
        }
        function d(p) {
            try {
                u(n.throw(p))
            } catch (f) {
                a(f)
            }
        }
        function u(p) {
            p.done ? s(p.value) : i(p.value).then(c, d)
        }
        u((n = n.apply(e, t || [])).next())
    }
    )
}
function ou(e, t) {
    var r = {
        label: 0,
        sent: function() {
            if (s[0] & 1)
                throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    }, n, i, s, a;
    return a = {
        next: c(0),
        throw: c(1),
        return: c(2)
    },
    typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this
    }
    ),
    a;
    function c(u) {
        return function(p) {
            return d([u, p])
        }
    }
    function d(u) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; a && (a = 0,
        u[0] && (r = 0)),
        r; )
            try {
                if (n = 1,
                i && (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i),
                0) : i.next) && !(s = s.call(i, u[1])).done)
                    return s;
                switch (i = 0,
                s && (u = [u[0] & 2, s.value]),
                u[0]) {
                case 0:
                case 1:
                    s = u;
                    break;
                case 4:
                    return r.label++,
                    {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    r.label++,
                    i = u[1],
                    u = [0];
                    continue;
                case 7:
                    u = r.ops.pop(),
                    r.trys.pop();
                    continue;
                default:
                    if (s = r.trys,
                    !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
                        r.label = u[1];
                        break
                    }
                    if (u[0] === 6 && r.label < s[1]) {
                        r.label = s[1],
                        s = u;
                        break
                    }
                    if (s && r.label < s[2]) {
                        r.label = s[2],
                        r.ops.push(u);
                        break
                    }
                    s[2] && r.ops.pop(),
                    r.trys.pop();
                    continue
                }
                u = t.call(e, r)
            } catch (p) {
                u = [6, p],
                i = 0
            } finally {
                n = s = 0
            }
        if (u[0] & 5)
            throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}
var Xs = Object.create ? function(e, t, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get"in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
        enumerable: !0,
        get: function() {
            return t[r]
        }
    }),
    Object.defineProperty(e, n, i)
}
: function(e, t, r, n) {
    n === void 0 && (n = r),
    e[n] = t[r]
}
;
function au(e, t) {
    for (var r in e)
        r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Xs(t, e, r)
}
function cs(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , r = t && e[t]
      , n = 0;
    if (r)
        return r.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && n >= e.length && (e = void 0),
                {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function No(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
        return e;
    var n = r.call(e), i, s = [], a;
    try {
        for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
            s.push(i.value)
    } catch (c) {
        a = {
            error: c
        }
    } finally {
        try {
            i && !i.done && (r = n.return) && r.call(n)
        } finally {
            if (a)
                throw a.error
        }
    }
    return s
}
function cu() {
    for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(No(arguments[t]));
    return e
}
function lu() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++)
        e += arguments[t].length;
    for (var n = Array(e), i = 0, t = 0; t < r; t++)
        for (var s = arguments[t], a = 0, c = s.length; a < c; a++,
        i++)
            n[i] = s[a];
    return n
}
function uu(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, i = t.length, s; n < i; n++)
            (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)),
            s[n] = t[n]);
    return e.concat(s || Array.prototype.slice.call(t))
}
function zr(e) {
    return this instanceof zr ? (this.v = e,
    this) : new zr(e)
}
function hu(e, t, r) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []), i, s = [];
    return i = {},
    a("next"),
    a("throw"),
    a("return"),
    i[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    i;
    function a(m) {
        n[m] && (i[m] = function(E) {
            return new Promise(function(C, N) {
                s.push([m, E, C, N]) > 1 || c(m, E)
            }
            )
        }
        )
    }
    function c(m, E) {
        try {
            d(n[m](E))
        } catch (C) {
            f(s[0][3], C)
        }
    }
    function d(m) {
        m.value instanceof zr ? Promise.resolve(m.value.v).then(u, p) : f(s[0][2], m)
    }
    function u(m) {
        c("next", m)
    }
    function p(m) {
        c("throw", m)
    }
    function f(m, E) {
        m(E),
        s.shift(),
        s.length && c(s[0][0], s[0][1])
    }
}
function du(e) {
    var t, r;
    return t = {},
    n("next"),
    n("throw", function(i) {
        throw i
    }),
    n("return"),
    t[Symbol.iterator] = function() {
        return this
    }
    ,
    t;
    function n(i, s) {
        t[i] = e[i] ? function(a) {
            return (r = !r) ? {
                value: zr(e[i](a)),
                done: !1
            } : s ? s(a) : a
        }
        : s
    }
}
function fu(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], r;
    return t ? t.call(e) : (e = typeof cs == "function" ? cs(e) : e[Symbol.iterator](),
    r = {},
    n("next"),
    n("throw"),
    n("return"),
    r[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    r);
    function n(s) {
        r[s] = e[s] && function(a) {
            return new Promise(function(c, d) {
                a = e[s](a),
                i(c, d, a.done, a.value)
            }
            )
        }
    }
    function i(s, a, c, d) {
        Promise.resolve(d).then(function(u) {
            s({
                value: u,
                done: c
            })
        }, a)
    }
}
function pu(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t,
    e
}
var _m = Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    })
}
: function(e, t) {
    e.default = t
}
;
function gu(e) {
    if (e && e.__esModule)
        return e;
    var t = {};
    if (e != null)
        for (var r in e)
            r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && Xs(t, e, r);
    return _m(t, e),
    t
}
function mu(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function _u(e, t, r, n) {
    if (r === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !n : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e)
}
function vu(e, t, r, n, i) {
    if (n === "m")
        throw new TypeError("Private method is not writable");
    if (n === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !i : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r),
    r
}
function yu(e, t) {
    if (t === null || typeof t != "object" && typeof t != "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof e == "function" ? t === e : e.has(t)
}
function wu(e, t, r) {
    if (t != null) {
        if (typeof t != "object" && typeof t != "function")
            throw new TypeError("Object expected.");
        var n;
        if (r) {
            if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
        }
        if (n === void 0) {
            if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose]
        }
        if (typeof n != "function")
            throw new TypeError("Object not disposable.");
        e.stack.push({
            value: t,
            dispose: n,
            async: r
        })
    } else
        r && e.stack.push({
            async: !0
        });
    return t
}
var vm = typeof SuppressedError == "function" ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError",
    n.error = e,
    n.suppressed = t,
    n
}
;
function bu(e) {
    function t(n) {
        e.error = e.hasError ? new vm(n,e.error,"An error was suppressed during disposal.") : n,
        e.hasError = !0
    }
    function r() {
        for (; e.stack.length; ) {
            var n = e.stack.pop();
            try {
                var i = n.dispose && n.dispose.call(n.value);
                if (n.async)
                    return Promise.resolve(i).then(r, function(s) {
                        return t(s),
                        r()
                    })
            } catch (s) {
                t(s)
            }
        }
        if (e.hasError)
            throw e.error
    }
    return r()
}
const ym = {
    __extends: eu,
    __assign: as,
    __rest: tu,
    __decorate: ru,
    __param: nu,
    __metadata: su,
    __awaiter: iu,
    __generator: ou,
    __createBinding: Xs,
    __exportStar: au,
    __values: cs,
    __read: No,
    __spread: cu,
    __spreadArrays: lu,
    __spreadArray: uu,
    __await: zr,
    __asyncGenerator: hu,
    __asyncDelegator: du,
    __asyncValues: fu,
    __makeTemplateObject: pu,
    __importStar: gu,
    __importDefault: mu,
    __classPrivateFieldGet: _u,
    __classPrivateFieldSet: vu,
    __classPrivateFieldIn: yu,
    __addDisposableResource: wu,
    __disposeResources: bu
}
  , wm = Object.freeze(Object.defineProperty({
    __proto__: null,
    __addDisposableResource: wu,
    get __assign() {
        return as
    },
    __asyncDelegator: du,
    __asyncGenerator: hu,
    __asyncValues: fu,
    __await: zr,
    __awaiter: iu,
    __classPrivateFieldGet: _u,
    __classPrivateFieldIn: yu,
    __classPrivateFieldSet: vu,
    __createBinding: Xs,
    __decorate: ru,
    __disposeResources: bu,
    __esDecorate: fm,
    __exportStar: au,
    __extends: eu,
    __generator: ou,
    __importDefault: mu,
    __importStar: gu,
    __makeTemplateObject: pu,
    __metadata: su,
    __param: nu,
    __propKey: gm,
    __read: No,
    __rest: tu,
    __runInitializers: pm,
    __setFunctionName: mm,
    __spread: cu,
    __spreadArray: uu,
    __spreadArrays: lu,
    __values: cs,
    default: ym
}, Symbol.toStringTag, {
    value: "Module"
}))
  , xo = _n(wm);
var Ys = {};
Object.defineProperty(Ys, "__esModule", {
    value: !0
});
var Ja = xo
  , bm = function() {
    function e(t) {
        if (this._maxConcurrency = t,
        this._queue = [],
        t <= 0)
            throw new Error("semaphore must be initialized to a positive value");
        this._value = t
    }
    return e.prototype.acquire = function() {
        var t = this
          , r = this.isLocked()
          , n = new Promise(function(i) {
            return t._queue.push(i)
        }
        );
        return r || this._dispatch(),
        n
    }
    ,
    e.prototype.runExclusive = function(t) {
        return Ja.__awaiter(this, void 0, void 0, function() {
            var r, n, i;
            return Ja.__generator(this, function(s) {
                switch (s.label) {
                case 0:
                    return [4, this.acquire()];
                case 1:
                    r = s.sent(),
                    n = r[0],
                    i = r[1],
                    s.label = 2;
                case 2:
                    return s.trys.push([2, , 4, 5]),
                    [4, t(n)];
                case 3:
                    return [2, s.sent()];
                case 4:
                    return i(),
                    [7];
                case 5:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.isLocked = function() {
        return this._value <= 0
    }
    ,
    e.prototype.release = function() {
        if (this._maxConcurrency > 1)
            throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
        if (this._currentReleaser) {
            var t = this._currentReleaser;
            this._currentReleaser = void 0,
            t()
        }
    }
    ,
    e.prototype._dispatch = function() {
        var t = this
          , r = this._queue.shift();
        if (r) {
            var n = !1;
            this._currentReleaser = function() {
                n || (n = !0,
                t._value++,
                t._dispatch())
            }
            ,
            r([this._value--, this._currentReleaser])
        }
    }
    ,
    e
}();
Ys.default = bm;
Object.defineProperty(Ao, "__esModule", {
    value: !0
});
var Ga = xo
  , Em = Ys
  , Sm = function() {
    function e() {
        this._semaphore = new Em.default(1)
    }
    return e.prototype.acquire = function() {
        return Ga.__awaiter(this, void 0, void 0, function() {
            var t, r;
            return Ga.__generator(this, function(n) {
                switch (n.label) {
                case 0:
                    return [4, this._semaphore.acquire()];
                case 1:
                    return t = n.sent(),
                    r = t[1],
                    [2, r]
                }
            })
        })
    }
    ,
    e.prototype.runExclusive = function(t) {
        return this._semaphore.runExclusive(function() {
            return t()
        })
    }
    ,
    e.prototype.isLocked = function() {
        return this._semaphore.isLocked()
    }
    ,
    e.prototype.release = function() {
        this._semaphore.release()
    }
    ,
    e
}();
Ao.default = Sm;
var ei = {};
Object.defineProperty(ei, "__esModule", {
    value: !0
});
ei.withTimeout = void 0;
var Xn = xo;
function km(e, t, r) {
    var n = this;
    return r === void 0 && (r = new Error("timeout")),
    {
        acquire: function() {
            return new Promise(function(i, s) {
                return Xn.__awaiter(n, void 0, void 0, function() {
                    var a, c, d;
                    return Xn.__generator(this, function(u) {
                        switch (u.label) {
                        case 0:
                            return a = !1,
                            setTimeout(function() {
                                a = !0,
                                s(r)
                            }, t),
                            [4, e.acquire()];
                        case 1:
                            return c = u.sent(),
                            a ? (d = Array.isArray(c) ? c[1] : c,
                            d()) : i(c),
                            [2]
                        }
                    })
                })
            }
            )
        },
        runExclusive: function(i) {
            return Xn.__awaiter(this, void 0, void 0, function() {
                var s, a;
                return Xn.__generator(this, function(c) {
                    switch (c.label) {
                    case 0:
                        s = function() {}
                        ,
                        c.label = 1;
                    case 1:
                        return c.trys.push([1, , 7, 8]),
                        [4, this.acquire()];
                    case 2:
                        return a = c.sent(),
                        Array.isArray(a) ? (s = a[1],
                        [4, i(a[0])]) : [3, 4];
                    case 3:
                        return [2, c.sent()];
                    case 4:
                        return s = a,
                        [4, i()];
                    case 5:
                        return [2, c.sent()];
                    case 6:
                        return [3, 8];
                    case 7:
                        return s(),
                        [7];
                    case 8:
                        return [2]
                    }
                })
            })
        },
        release: function() {
            e.release()
        },
        isLocked: function() {
            return e.isLocked()
        }
    }
}
ei.withTimeout = km;
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.withTimeout = e.Semaphore = e.Mutex = void 0;
    var t = Ao;
    Object.defineProperty(e, "Mutex", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    });
    var r = Ys;
    Object.defineProperty(e, "Semaphore", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    });
    var n = ei;
    Object.defineProperty(e, "withTimeout", {
        enumerable: !0,
        get: function() {
            return n.withTimeout
        }
    })
}
)(Yl);
var Cm = Rm
  , Mm = Object.prototype.hasOwnProperty;
function Rm() {
    for (var e = {}, t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
            Mm.call(r, n) && (e[n] = r[n])
    }
    return e
}
const Im = Cm
  , Am = ao();
var Nm = j;
function j(e) {
    const t = this;
    t.currentProvider = e
}
j.prototype.getBalance = jn(2, "eth_getBalance");
j.prototype.getCode = jn(2, "eth_getCode");
j.prototype.getTransactionCount = jn(2, "eth_getTransactionCount");
j.prototype.getStorageAt = jn(3, "eth_getStorageAt");
j.prototype.call = jn(2, "eth_call");
j.prototype.protocolVersion = U("eth_protocolVersion");
j.prototype.syncing = U("eth_syncing");
j.prototype.coinbase = U("eth_coinbase");
j.prototype.mining = U("eth_mining");
j.prototype.hashrate = U("eth_hashrate");
j.prototype.gasPrice = U("eth_gasPrice");
j.prototype.accounts = U("eth_accounts");
j.prototype.blockNumber = U("eth_blockNumber");
j.prototype.getBlockTransactionCountByHash = U("eth_getBlockTransactionCountByHash");
j.prototype.getBlockTransactionCountByNumber = U("eth_getBlockTransactionCountByNumber");
j.prototype.getUncleCountByBlockHash = U("eth_getUncleCountByBlockHash");
j.prototype.getUncleCountByBlockNumber = U("eth_getUncleCountByBlockNumber");
j.prototype.sign = U("eth_sign");
j.prototype.sendTransaction = U("eth_sendTransaction");
j.prototype.sendRawTransaction = U("eth_sendRawTransaction");
j.prototype.estimateGas = U("eth_estimateGas");
j.prototype.getBlockByHash = U("eth_getBlockByHash");
j.prototype.getBlockByNumber = U("eth_getBlockByNumber");
j.prototype.getTransactionByHash = U("eth_getTransactionByHash");
j.prototype.getTransactionByBlockHashAndIndex = U("eth_getTransactionByBlockHashAndIndex");
j.prototype.getTransactionByBlockNumberAndIndex = U("eth_getTransactionByBlockNumberAndIndex");
j.prototype.getTransactionReceipt = U("eth_getTransactionReceipt");
j.prototype.getUncleByBlockHashAndIndex = U("eth_getUncleByBlockHashAndIndex");
j.prototype.getUncleByBlockNumberAndIndex = U("eth_getUncleByBlockNumberAndIndex");
j.prototype.getCompilers = U("eth_getCompilers");
j.prototype.compileLLL = U("eth_compileLLL");
j.prototype.compileSolidity = U("eth_compileSolidity");
j.prototype.compileSerpent = U("eth_compileSerpent");
j.prototype.newFilter = U("eth_newFilter");
j.prototype.newBlockFilter = U("eth_newBlockFilter");
j.prototype.newPendingTransactionFilter = U("eth_newPendingTransactionFilter");
j.prototype.uninstallFilter = U("eth_uninstallFilter");
j.prototype.getFilterChanges = U("eth_getFilterChanges");
j.prototype.getFilterLogs = U("eth_getFilterLogs");
j.prototype.getLogs = U("eth_getLogs");
j.prototype.getWork = U("eth_getWork");
j.prototype.submitWork = U("eth_submitWork");
j.prototype.submitHashrate = U("eth_submitHashrate");
j.prototype.sendAsync = function(e, t) {
    this.currentProvider.sendAsync(xm(e), function(n, i) {
        if (!n && i.error && (n = new Error("EthQuery - RPC Error - " + i.error.message)),
        n)
            return t(n);
        t(null, i.result)
    })
}
;
function U(e) {
    return function() {
        const t = this;
        var r = [].slice.call(arguments)
          , n = r.pop();
        t.sendAsync({
            method: e,
            params: r
        }, n)
    }
}
function jn(e, t) {
    return function() {
        const r = this;
        var n = [].slice.call(arguments)
          , i = n.pop();
        n.length < e && n.push("latest"),
        r.sendAsync({
            method: t,
            params: n
        }, i)
    }
}
function xm(e) {
    return Im({
        id: Am(),
        jsonrpc: "2.0",
        params: []
    }, e)
}
const Za = (e,t,r,n)=>function(...i) {
    const s = t.promiseModule;
    return new s((a,c)=>{
        t.multiArgs ? i.push((...u)=>{
            t.errorFirst ? u[0] ? c(u) : (u.shift(),
            a(u)) : a(u)
        }
        ) : t.errorFirst ? i.push((u,p)=>{
            u ? c(u) : a(p)
        }
        ) : i.push(a),
        Reflect.apply(e, this === r ? n : this, i)
    }
    )
}
  , Qa = new WeakMap;
var Lm = (e,t)=>{
    t = {
        exclude: [/.+(?:Sync|Stream)$/],
        errorFirst: !0,
        promiseModule: Promise,
        ...t
    };
    const r = typeof e;
    if (!(e !== null && (r === "object" || r === "function")))
        throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e === null ? "null" : r}\``);
    const n = (a,c)=>{
        let d = Qa.get(a);
        if (d || (d = {},
        Qa.set(a, d)),
        c in d)
            return d[c];
        const u = C=>typeof C == "string" || typeof c == "symbol" ? c === C : C.test(c)
          , p = Reflect.getOwnPropertyDescriptor(a, c)
          , f = p === void 0 || p.writable || p.configurable
          , E = (t.include ? t.include.some(u) : !t.exclude.some(u)) && f;
        return d[c] = E,
        E
    }
      , i = new WeakMap
      , s = new Proxy(e,{
        apply(a, c, d) {
            const u = i.get(a);
            if (u)
                return Reflect.apply(u, c, d);
            const p = t.excludeMain ? a : Za(a, t, s, a);
            return i.set(a, p),
            Reflect.apply(p, c, d)
        },
        get(a, c) {
            const d = a[c];
            if (!n(a, c) || d === Function.prototype[c])
                return d;
            const u = i.get(d);
            if (u)
                return u;
            if (typeof d == "function") {
                const p = Za(d, t, s, a);
                return i.set(d, p),
                p
            }
            return d
        }
    });
    return s
}
;
const Tm = xn.default;
let Pm = class extends Tm {
    constructor() {
        super(),
        this.updates = []
    }
    async initialize() {}
    async update() {
        throw new Error("BaseFilter - no update method specified")
    }
    addResults(t) {
        this.updates = this.updates.concat(t),
        t.forEach(r=>this.emit("update", r))
    }
    addInitialResults(t) {}
    getChangesAndClear() {
        const t = this.updates;
        return this.updates = [],
        t
    }
}
;
var Lo = Pm;
const Om = Lo;
let $m = class extends Om {
    constructor() {
        super(),
        this.allResults = []
    }
    async update() {
        throw new Error("BaseFilterWithHistory - no update method specified")
    }
    addResults(t) {
        this.allResults = this.allResults.concat(t),
        super.addResults(t)
    }
    addInitialResults(t) {
        this.allResults = this.allResults.concat(t),
        super.addInitialResults(t)
    }
    getAllResults() {
        return this.allResults
    }
}
;
var Bm = $m
  , Dn = {
    minBlockRef: Fm,
    maxBlockRef: jm,
    sortBlockRefs: To,
    bnToHex: Dm,
    blockRefIsNumber: Hm,
    hexToInt: ls,
    incrementHexInt: Um,
    intToHex: Eu,
    unsafeRandomBytes: Vm
};
function Fm(...e) {
    return To(e)[0]
}
function jm(...e) {
    const t = To(e);
    return t[t.length - 1]
}
function To(e) {
    return e.sort((t,r)=>t === "latest" || r === "earliest" ? 1 : r === "latest" || t === "earliest" ? -1 : ls(t) - ls(r))
}
function Dm(e) {
    return "0x" + e.toString(16)
}
function Hm(e) {
    return e && !["earliest", "latest", "pending"].includes(e)
}
function ls(e) {
    return e == null ? e : Number.parseInt(e, 16)
}
function Um(e) {
    if (e == null)
        return e;
    const t = ls(e);
    return Eu(t + 1)
}
function Eu(e) {
    if (e == null)
        return e;
    let t = e.toString(16);
    return t.length % 2 && (t = "0" + t),
    "0x" + t
}
function Vm(e) {
    let t = "0x";
    for (let r = 0; r < e; r++)
        t += Ka(),
        t += Ka();
    return t
}
function Ka() {
    return Math.floor(Math.random() * 16).toString(16)
}
const zm = Nm
  , Wm = Lm
  , qm = Bm
  , {bnToHex: ov, hexToInt: Yn, incrementHexInt: Jm, minBlockRef: Gm, blockRefIsNumber: Zm} = Dn;
let Qm = class extends qm {
    constructor({provider: t, params: r}) {
        super(),
        this.type = "log",
        this.ethQuery = new zm(t),
        this.params = Object.assign({
            fromBlock: "latest",
            toBlock: "latest",
            address: void 0,
            topics: []
        }, r),
        this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]),
        this.params.address = this.params.address.map(n=>n.toLowerCase()))
    }
    async initialize({currentBlock: t}) {
        let r = this.params.fromBlock;
        ["latest", "pending"].includes(r) && (r = t),
        r === "earliest" && (r = "0x0"),
        this.params.fromBlock = r;
        const n = Gm(this.params.toBlock, t)
          , i = Object.assign({}, this.params, {
            toBlock: n
        })
          , s = await this._fetchLogs(i);
        this.addInitialResults(s)
    }
    async update({oldBlock: t, newBlock: r}) {
        const n = r;
        let i;
        t ? i = Jm(t) : i = r;
        const s = Object.assign({}, this.params, {
            fromBlock: i,
            toBlock: n
        })
          , c = (await this._fetchLogs(s)).filter(d=>this.matchLog(d));
        this.addResults(c)
    }
    async _fetchLogs(t) {
        return await Wm(n=>this.ethQuery.getLogs(t, n))()
    }
    matchLog(t) {
        if (Yn(this.params.fromBlock) >= Yn(t.blockNumber) || Zm(this.params.toBlock) && Yn(this.params.toBlock) <= Yn(t.blockNumber))
            return !1;
        const r = t.address && t.address.toLowerCase();
        return this.params.address && r && !this.params.address.includes(r) ? !1 : this.params.topics.every((i,s)=>{
            let a = t.topics[s];
            if (!a)
                return !1;
            a = a.toLowerCase();
            let c = Array.isArray(i) ? i : [i];
            return c.includes(null) ? !0 : (c = c.map(p=>p.toLowerCase()),
            c.includes(a))
        }
        )
    }
}
;
var Km = Qm
  , Po = Xm;
async function Xm({provider: e, fromBlock: t, toBlock: r}) {
    t || (t = r);
    const n = Xa(t)
      , s = Xa(r) - n + 1
      , a = Array(s).fill().map((d,u)=>n + u).map(Ym);
    let c = await Promise.all(a.map(d=>t_(e, "eth_getBlockByNumber", [d, !1])));
    return c = c.filter(d=>d !== null),
    c
}
function Xa(e) {
    return e == null ? e : Number.parseInt(e, 16)
}
function Ym(e) {
    return e == null ? e : "0x" + e.toString(16)
}
function e_(e, t) {
    return new Promise((r,n)=>{
        e.sendAsync(t, (i,s)=>{
            i ? n(i) : s.error ? n(s.error) : s.result ? r(s.result) : n(new Error("Result was empty"))
        }
        )
    }
    )
}
async function t_(e, t, r) {
    for (let n = 0; n < 3; n++)
        try {
            return await e_(e, {
                id: 1,
                jsonrpc: "2.0",
                method: t,
                params: r
            })
        } catch (i) {
            console.error(`provider.sendAsync failed: ${i.stack || i.message || i}`)
        }
    return null
}
const r_ = Lo
  , n_ = Po
  , {incrementHexInt: s_} = Dn;
let i_ = class extends r_ {
    constructor({provider: t, params: r}) {
        super(),
        this.type = "block",
        this.provider = t
    }
    async update({oldBlock: t, newBlock: r}) {
        const n = r
          , i = s_(t)
          , a = (await n_({
            provider: this.provider,
            fromBlock: i,
            toBlock: n
        })).map(c=>c.hash);
        this.addResults(a)
    }
}
;
var o_ = i_;
const a_ = Lo
  , c_ = Po
  , {incrementHexInt: l_} = Dn;
let u_ = class extends a_ {
    constructor({provider: t}) {
        super(),
        this.type = "tx",
        this.provider = t
    }
    async update({oldBlock: t}) {
        const r = t
          , n = l_(t)
          , i = await c_({
            provider: this.provider,
            fromBlock: n,
            toBlock: r
        })
          , s = [];
        for (const a of i)
            s.push(...a.transactions);
        this.addResults(s)
    }
}
;
var h_ = u_;
const d_ = Yl.Mutex
  , {createAsyncMiddleware: f_, createScaffoldMiddleware: p_} = Co
  , g_ = Km
  , m_ = o_
  , __ = h_
  , {intToHex: Su, hexToInt: Mi} = Dn;
var v_ = y_;
function y_({blockTracker: e, provider: t}) {
    let r = 0
      , n = {};
    const i = new d_
      , s = w_({
        mutex: i
    })
      , a = p_({
        eth_newFilter: s(Ri(d)),
        eth_newBlockFilter: s(Ri(u)),
        eth_newPendingTransactionFilter: s(Ri(p)),
        eth_uninstallFilter: s(ns(E)),
        eth_getFilterChanges: s(ns(f)),
        eth_getFilterLogs: s(ns(m))
    })
      , c = async({oldBlock: I, newBlock: R})=>{
        if (n.length === 0)
            return;
        const F = await i.acquire();
        try {
            await Promise.all(Nr(n).map(async x=>{
                try {
                    await x.update({
                        oldBlock: I,
                        newBlock: R
                    })
                } catch (P) {
                    console.error(P)
                }
            }
            ))
        } catch (x) {
            console.error(x)
        }
        F()
    }
    ;
    return a.newLogFilter = d,
    a.newBlockFilter = u,
    a.newPendingTransactionFilter = p,
    a.uninstallFilter = E,
    a.getFilterChanges = f,
    a.getFilterLogs = m,
    a.destroy = ()=>{
        M()
    }
    ,
    a;
    async function d(I) {
        const R = new g_({
            provider: t,
            params: I
        });
        return await C(R),
        R
    }
    async function u() {
        const I = new m_({
            provider: t
        });
        return await C(I),
        I
    }
    async function p() {
        const I = new __({
            provider: t
        });
        return await C(I),
        I
    }
    async function f(I) {
        const R = Mi(I)
          , F = n[R];
        if (!F)
            throw new Error(`No filter for index "${R}"`);
        return F.getChangesAndClear()
    }
    async function m(I) {
        const R = Mi(I)
          , F = n[R];
        if (!F)
            throw new Error(`No filter for index "${R}"`);
        let x = [];
        return F.type === "log" && (x = F.getAllResults()),
        x
    }
    async function E(I) {
        const R = Mi(I)
          , x = !!n[R];
        return x && await N(R),
        x
    }
    async function C(I) {
        const R = Nr(n).length
          , F = await e.getLatestBlock();
        await I.initialize({
            currentBlock: F
        }),
        r++,
        n[r] = I,
        I.id = r,
        I.idHex = Su(r);
        const x = Nr(n).length;
        return A({
            prevFilterCount: R,
            newFilterCount: x
        }),
        r
    }
    async function N(I) {
        const R = Nr(n).length;
        delete n[I];
        const F = Nr(n).length;
        A({
            prevFilterCount: R,
            newFilterCount: F
        })
    }
    async function M() {
        const I = Nr(n).length;
        n = {},
        A({
            prevFilterCount: I,
            newFilterCount: 0
        })
    }
    function A({prevFilterCount: I, newFilterCount: R}) {
        if (I === 0 && R > 0) {
            e.on("sync", c);
            return
        }
        if (I > 0 && R === 0) {
            e.removeListener("sync", c);
            return
        }
    }
}
function Ri(e) {
    return ns(async(...t)=>{
        const r = await e(...t);
        return Su(r.id)
    }
    )
}
function ns(e) {
    return f_(async(t,r)=>{
        const n = await e.apply(null, t.params);
        r.result = n
    }
    )
}
function w_({mutex: e}) {
    return t=>async(r,n,i,s)=>{
        (await e.acquire())(),
        t(r, n, i, s)
    }
}
function Nr(e, t) {
    const r = [];
    for (let n in e)
        r.push(e[n]);
    return r
}
const b_ = xn.default
  , {createAsyncMiddleware: Ya, createScaffoldMiddleware: E_} = Co
  , S_ = v_
  , {unsafeRandomBytes: k_, incrementHexInt: C_} = Dn
  , M_ = Po;
var R_ = I_;
function I_({blockTracker: e, provider: t}) {
    const r = {}
      , n = S_({
        blockTracker: e,
        provider: t
    });
    let i = !1;
    const s = new b_
      , a = E_({
        eth_subscribe: Ya(c),
        eth_unsubscribe: Ya(d)
    });
    return a.destroy = p,
    {
        events: s,
        middleware: a
    };
    async function c(f, m) {
        if (i)
            throw new Error("SubscriptionManager - attempting to use after destroying");
        const E = f.params[0]
          , C = k_(16);
        let N;
        switch (E) {
        case "newHeads":
            N = M({
                subId: C
            });
            break;
        case "logs":
            const I = f.params[1]
              , R = await n.newLogFilter(I);
            N = A({
                subId: C,
                filter: R
            });
            break;
        default:
            throw new Error(`SubscriptionManager - unsupported subscription type "${E}"`)
        }
        r[C] = N,
        m.result = C;
        return;
        function M({subId: I}) {
            const R = {
                type: E,
                destroy: async()=>{
                    e.removeListener("sync", R.update)
                }
                ,
                update: async({oldBlock: F, newBlock: x})=>{
                    const P = x
                      , z = C_(F);
                    (await M_({
                        provider: t,
                        fromBlock: z,
                        toBlock: P
                    })).map(A_).filter(Z=>Z !== null).forEach(Z=>{
                        u(I, Z)
                    }
                    )
                }
            };
            return e.on("sync", R.update),
            R
        }
        function A({subId: I, filter: R}) {
            return R.on("update", x=>u(I, x)),
            {
                type: E,
                destroy: async()=>await n.uninstallFilter(R.idHex)
            }
        }
    }
    async function d(f, m) {
        if (i)
            throw new Error("SubscriptionManager - attempting to use after destroying");
        const E = f.params[0]
          , C = r[E];
        if (!C) {
            m.result = !1;
            return
        }
        delete r[E],
        await C.destroy(),
        m.result = !0
    }
    function u(f, m) {
        s.emit("notification", {
            jsonrpc: "2.0",
            method: "eth_subscription",
            params: {
                subscription: f,
                result: m
            }
        })
    }
    function p() {
        s.removeAllListeners();
        for (const f in r)
            r[f].destroy(),
            delete r[f];
        i = !0
    }
}
function A_(e) {
    return e == null ? null : {
        hash: e.hash,
        parentHash: e.parentHash,
        sha3Uncles: e.sha3Uncles,
        miner: e.miner,
        stateRoot: e.stateRoot,
        transactionsRoot: e.transactionsRoot,
        receiptsRoot: e.receiptsRoot,
        logsBloom: e.logsBloom,
        difficulty: e.difficulty,
        number: e.number,
        gasLimit: e.gasLimit,
        gasUsed: e.gasUsed,
        nonce: e.nonce,
        mixHash: e.mixHash,
        timestamp: e.timestamp,
        extraData: e.extraData
    }
}
Object.defineProperty($s, "__esModule", {
    value: !0
});
$s.SubscriptionManager = void 0;
const N_ = al
  , x_ = R_
  , ec = ()=>{}
;
class L_ {
    constructor(t) {
        const r = new N_.PollingBlockTracker({
            provider: t,
            pollingInterval: 15e3,
            setSkipCacheFlag: !0
        })
          , {events: n, middleware: i} = x_({
            blockTracker: r,
            provider: t
        });
        this.events = n,
        this.subscriptionMiddleware = i
    }
    async handleRequest(t) {
        const r = {};
        return await this.subscriptionMiddleware(t, r, ec, ec),
        r
    }
    destroy() {
        this.subscriptionMiddleware.destroy()
    }
}
$s.SubscriptionManager = L_;
var ku = $ && $.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Br, "__esModule", {
    value: !0
});
Br.CoinbaseWalletProvider = void 0;
const T_ = ku(ds)
  , P_ = sh
  , W = vn
  , D = T
  , O_ = En
  , tc = lt
  , es = Gr
  , nt = Wr
  , Ii = ku(sf)
  , ln = Jr
  , $_ = Hr
  , B_ = $s
  , rc = "DefaultChainId"
  , nc = "DefaultJsonRpcUrl";
class F_ extends P_.EventEmitter {
    constructor(t) {
        var r, n;
        super(),
        this._filterPolyfill = new $_.FilterPolyfill(this),
        this._subscriptionManager = new B_.SubscriptionManager(this),
        this._relay = null,
        this._addresses = [],
        this.hasMadeFirstChainChangedEmission = !1,
        this.setProviderInfo = this.setProviderInfo.bind(this),
        this.updateProviderInfo = this.updateProviderInfo.bind(this),
        this.getChainId = this.getChainId.bind(this),
        this.setAppInfo = this.setAppInfo.bind(this),
        this.enable = this.enable.bind(this),
        this.close = this.close.bind(this),
        this.send = this.send.bind(this),
        this.sendAsync = this.sendAsync.bind(this),
        this.request = this.request.bind(this),
        this._setAddresses = this._setAddresses.bind(this),
        this.scanQRCode = this.scanQRCode.bind(this),
        this.genericRequest = this.genericRequest.bind(this),
        this._chainIdFromOpts = t.chainId,
        this._jsonRpcUrlFromOpts = t.jsonRpcUrl,
        this._overrideIsMetaMask = t.overrideIsMetaMask,
        this._relayProvider = t.relayProvider,
        this._storage = t.storage,
        this._relayEventManager = t.relayEventManager,
        this.diagnostic = t.diagnosticLogger,
        this.reloadOnDisconnect = !0,
        this.isCoinbaseWallet = (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0,
        this.isCoinbaseBrowser = (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1,
        this.qrUrl = t.qrUrl;
        const i = this.getChainId()
          , s = (0,
        D.prepend0x)(i.toString(16));
        this.emit("connect", {
            chainIdStr: s
        });
        const a = this._storage.getItem(tc.LOCAL_STORAGE_ADDRESSES_KEY);
        if (a) {
            const c = a.split(" ");
            c[0] !== "" && (this._addresses = c.map(d=>(0,
            D.ensureAddressString)(d)),
            this.emit("accountsChanged", c))
        }
        this._subscriptionManager.events.on("notification", c=>{
            this.emit("message", {
                type: c.method,
                data: c.params
            })
        }
        ),
        this._isAuthorized() && this.initializeRelay(),
        window.addEventListener("message", c=>{
            var d;
            if (!(c.origin !== location.origin || c.source !== window) && c.data.type === "walletLinkMessage" && c.data.data.action === "dappChainSwitched") {
                const u = c.data.data.chainId
                  , p = (d = c.data.data.jsonRpcUrl) !== null && d !== void 0 ? d : this.jsonRpcUrl;
                this.updateProviderInfo(p, Number(u))
            }
        }
        )
    }
    get selectedAddress() {
        return this._addresses[0] || void 0
    }
    get networkVersion() {
        return this.getChainId().toString(10)
    }
    get chainId() {
        return (0,
        D.prepend0x)(this.getChainId().toString(16))
    }
    get isWalletLink() {
        return !0
    }
    get isMetaMask() {
        return this._overrideIsMetaMask
    }
    get host() {
        return this.jsonRpcUrl
    }
    get connected() {
        return !0
    }
    isConnected() {
        return !0
    }
    get jsonRpcUrl() {
        var t;
        return (t = this._storage.getItem(nc)) !== null && t !== void 0 ? t : this._jsonRpcUrlFromOpts
    }
    set jsonRpcUrl(t) {
        this._storage.setItem(nc, t)
    }
    disableReloadOnDisconnect() {
        this.reloadOnDisconnect = !1
    }
    setProviderInfo(t, r) {
        this.isCoinbaseBrowser || (this._chainIdFromOpts = r,
        this._jsonRpcUrlFromOpts = t),
        this.updateProviderInfo(this.jsonRpcUrl, this.getChainId())
    }
    updateProviderInfo(t, r) {
        this.jsonRpcUrl = t;
        const n = this.getChainId();
        this._storage.setItem(rc, r.toString(10)),
        ((0,
        D.ensureIntNumber)(r) !== n || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()),
        this.hasMadeFirstChainChangedEmission = !0)
    }
    async watchAsset(t, r, n, i, s, a) {
        const d = await (await this.initializeRelay()).watchAsset(t, r, n, i, s, a == null ? void 0 : a.toString()).promise;
        return (0,
        nt.isErrorResponse)(d) ? !1 : !!d.result
    }
    async addEthereumChain(t, r, n, i, s, a) {
        var c, d;
        if ((0,
        D.ensureIntNumber)(t) === this.getChainId())
            return !1;
        const u = await this.initializeRelay()
          , p = u.inlineAddEthereumChain(t.toString());
        !this._isAuthorized() && !p && await u.requestEthereumAccounts().promise;
        const f = await u.addEthereumChain(t.toString(), r, s, n, i, a).promise;
        return (0,
        nt.isErrorResponse)(f) ? !1 : (((c = f.result) === null || c === void 0 ? void 0 : c.isApproved) === !0 && this.updateProviderInfo(r[0], t),
        ((d = f.result) === null || d === void 0 ? void 0 : d.isApproved) === !0)
    }
    async switchEthereumChain(t) {
        const n = await (await this.initializeRelay()).switchEthereumChain(t.toString(10), this.selectedAddress || void 0).promise;
        if ((0,
        nt.isErrorResponse)(n)) {
            if (!n.errorCode)
                return;
            throw n.errorCode === W.standardErrorCodes.provider.unsupportedChain ? W.standardErrors.provider.unsupportedChain() : W.standardErrors.provider.custom({
                message: n.errorMessage,
                code: n.errorCode
            })
        }
        const i = n.result;
        i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, t)
    }
    setAppInfo(t, r) {
        this.initializeRelay().then(n=>n.setAppInfo(t, r))
    }
    async enable() {
        var t;
        return (t = this.diagnostic) === null || t === void 0 || t.log(ln.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::enable",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay ? es.Session.hash(this._relay.session.id) : void 0
        }),
        this._isAuthorized() ? [...this._addresses] : await this.send("eth_requestAccounts")
    }
    async close() {
        (await this.initializeRelay()).resetAndReload()
    }
    send(t, r) {
        try {
            const n = this._send(t, r);
            if (n instanceof Promise)
                return n.catch(i=>{
                    throw (0,
                    W.serializeError)(i, t)
                }
                )
        } catch (n) {
            throw (0,
            W.serializeError)(n, t)
        }
    }
    _send(t, r) {
        if (typeof t == "string") {
            const i = t
              , s = Array.isArray(r) ? r : r !== void 0 ? [r] : []
              , a = {
                jsonrpc: "2.0",
                id: 0,
                method: i,
                params: s
            };
            return this._sendRequestAsync(a).then(c=>c.result)
        }
        if (typeof r == "function") {
            const i = t
              , s = r;
            return this._sendAsync(i, s)
        }
        if (Array.isArray(t))
            return t.map(s=>this._sendRequest(s));
        const n = t;
        return this._sendRequest(n)
    }
    async sendAsync(t, r) {
        try {
            return this._sendAsync(t, r).catch(n=>{
                throw (0,
                W.serializeError)(n, t)
            }
            )
        } catch (n) {
            return Promise.reject((0,
            W.serializeError)(n, t))
        }
    }
    async _sendAsync(t, r) {
        if (typeof r != "function")
            throw new Error("callback is required");
        if (Array.isArray(t)) {
            const i = r;
            this._sendMultipleRequestsAsync(t).then(s=>i(null, s)).catch(s=>i(s, null));
            return
        }
        const n = r;
        return this._sendRequestAsync(t).then(i=>n(null, i)).catch(i=>n(i, null))
    }
    async request(t) {
        try {
            return this._request(t).catch(r=>{
                throw (0,
                W.serializeError)(r, t.method)
            }
            )
        } catch (r) {
            return Promise.reject((0,
            W.serializeError)(r, t.method))
        }
    }
    async _request(t) {
        if (!t || typeof t != "object" || Array.isArray(t))
            throw W.standardErrors.rpc.invalidRequest({
                message: "Expected a single, non-array, object argument.",
                data: t
            });
        const {method: r, params: n} = t;
        if (typeof r != "string" || r.length === 0)
            throw W.standardErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: t
            });
        if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
            throw W.standardErrors.rpc.invalidRequest({
                message: "'args.params' must be an object or array if provided.",
                data: t
            });
        const i = n === void 0 ? [] : n
          , s = this._relayEventManager.makeRequestId();
        return (await this._sendRequestAsync({
            method: r,
            params: i,
            jsonrpc: "2.0",
            id: s
        })).result
    }
    async scanQRCode(t) {
        const n = await (await this.initializeRelay()).scanQRCode((0,
        D.ensureRegExpString)(t)).promise;
        if ((0,
        nt.isErrorResponse)(n))
            throw (0,
            W.serializeError)(n.errorMessage, "scanQRCode");
        if (typeof n.result != "string")
            throw (0,
            W.serializeError)("result was not a string", "scanQRCode");
        return n.result
    }
    async genericRequest(t, r) {
        const i = await (await this.initializeRelay()).genericRequest(t, r).promise;
        if ((0,
        nt.isErrorResponse)(i))
            throw (0,
            W.serializeError)(i.errorMessage, "generic");
        if (typeof i.result != "string")
            throw (0,
            W.serializeError)("result was not a string", "generic");
        return i.result
    }
    async connectAndSignIn(t) {
        var r;
        (r = this.diagnostic) === null || r === void 0 || r.log(ln.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::connectAndSignIn",
            sessionIdHash: this._relay ? es.Session.hash(this._relay.session.id) : void 0
        });
        let n;
        try {
            const s = await this.initializeRelay();
            if (!(s instanceof O_.MobileRelay))
                throw new Error("connectAndSignIn is only supported on mobile");
            if (n = await s.connectAndSignIn(t).promise,
            (0,
            nt.isErrorResponse)(n))
                throw new Error(n.errorMessage)
        } catch (s) {
            throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? W.standardErrors.provider.userRejectedRequest("User denied account authorization") : s
        }
        if (!n.result)
            throw new Error("accounts received is empty");
        const {accounts: i} = n.result;
        return this._setAddresses(i),
        this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()),
        n.result
    }
    async selectProvider(t) {
        const n = await (await this.initializeRelay()).selectProvider(t).promise;
        if ((0,
        nt.isErrorResponse)(n))
            throw (0,
            W.serializeError)(n.errorMessage, "selectProvider");
        if (typeof n.result != "string")
            throw (0,
            W.serializeError)("result was not a string", "selectProvider");
        return n.result
    }
    supportsSubscriptions() {
        return !1
    }
    subscribe() {
        throw new Error("Subscriptions are not supported")
    }
    unsubscribe() {
        throw new Error("Subscriptions are not supported")
    }
    disconnect() {
        return !0
    }
    _sendRequest(t) {
        const r = {
            jsonrpc: "2.0",
            id: t.id
        }
          , {method: n} = t;
        if (r.result = this._handleSynchronousMethods(t),
        r.result === void 0)
            throw new Error(`Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`);
        return r
    }
    _setAddresses(t, r) {
        if (!Array.isArray(t))
            throw new Error("addresses is not an array");
        const n = t.map(i=>(0,
        D.ensureAddressString)(i));
        JSON.stringify(n) !== JSON.stringify(this._addresses) && (this._addresses = n,
        this.emit("accountsChanged", this._addresses),
        this._storage.setItem(tc.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")))
    }
    _sendRequestAsync(t) {
        return new Promise((r,n)=>{
            try {
                const i = this._handleSynchronousMethods(t);
                if (i !== void 0)
                    return r({
                        jsonrpc: "2.0",
                        id: t.id,
                        result: i
                    });
                const s = this._handleAsynchronousFilterMethods(t);
                if (s !== void 0) {
                    s.then(c=>r(Object.assign(Object.assign({}, c), {
                        id: t.id
                    }))).catch(c=>n(c));
                    return
                }
                const a = this._handleSubscriptionMethods(t);
                if (a !== void 0) {
                    a.then(c=>r({
                        jsonrpc: "2.0",
                        id: t.id,
                        result: c.result
                    })).catch(c=>n(c));
                    return
                }
            } catch (i) {
                return n(i)
            }
            this._handleAsynchronousMethods(t).then(i=>i && r(Object.assign(Object.assign({}, i), {
                id: t.id
            }))).catch(i=>n(i))
        }
        )
    }
    _sendMultipleRequestsAsync(t) {
        return Promise.all(t.map(r=>this._sendRequestAsync(r)))
    }
    _handleSynchronousMethods(t) {
        const {method: r} = t
          , n = t.params || [];
        switch (r) {
        case "eth_accounts":
            return this._eth_accounts();
        case "eth_coinbase":
            return this._eth_coinbase();
        case "eth_uninstallFilter":
            return this._eth_uninstallFilter(n);
        case "net_version":
            return this._net_version();
        case "eth_chainId":
            return this._eth_chainId();
        default:
            return
        }
    }
    async _handleAsynchronousMethods(t) {
        const {method: r} = t
          , n = t.params || [];
        switch (r) {
        case "eth_requestAccounts":
            return this._eth_requestAccounts();
        case "eth_sign":
            return this._eth_sign(n);
        case "eth_ecRecover":
            return this._eth_ecRecover(n);
        case "personal_sign":
            return this._personal_sign(n);
        case "personal_ecRecover":
            return this._personal_ecRecover(n);
        case "eth_signTransaction":
            return this._eth_signTransaction(n);
        case "eth_sendRawTransaction":
            return this._eth_sendRawTransaction(n);
        case "eth_sendTransaction":
            return this._eth_sendTransaction(n);
        case "eth_signTypedData_v1":
            return this._eth_signTypedData_v1(n);
        case "eth_signTypedData_v2":
            return this._throwUnsupportedMethodError();
        case "eth_signTypedData_v3":
            return this._eth_signTypedData_v3(n);
        case "eth_signTypedData_v4":
        case "eth_signTypedData":
            return this._eth_signTypedData_v4(n);
        case "cbWallet_arbitrary":
            return this._cbwallet_arbitrary(n);
        case "wallet_addEthereumChain":
            return this._wallet_addEthereumChain(n);
        case "wallet_switchEthereumChain":
            return this._wallet_switchEthereumChain(n);
        case "wallet_watchAsset":
            return this._wallet_watchAsset(n)
        }
        return (await this.initializeRelay()).makeEthereumJSONRPCRequest(t, this.jsonRpcUrl).catch(s=>{
            var a;
            throw (s.code === W.standardErrorCodes.rpc.methodNotFound || s.code === W.standardErrorCodes.rpc.methodNotSupported) && ((a = this.diagnostic) === null || a === void 0 || a.log(ln.EVENTS.METHOD_NOT_IMPLEMENTED, {
                method: t.method,
                sessionIdHash: this._relay ? es.Session.hash(this._relay.session.id) : void 0
            })),
            s
        }
        )
    }
    _handleAsynchronousFilterMethods(t) {
        const {method: r} = t
          , n = t.params || [];
        switch (r) {
        case "eth_newFilter":
            return this._eth_newFilter(n);
        case "eth_newBlockFilter":
            return this._eth_newBlockFilter();
        case "eth_newPendingTransactionFilter":
            return this._eth_newPendingTransactionFilter();
        case "eth_getFilterChanges":
            return this._eth_getFilterChanges(n);
        case "eth_getFilterLogs":
            return this._eth_getFilterLogs(n)
        }
    }
    _handleSubscriptionMethods(t) {
        switch (t.method) {
        case "eth_subscribe":
        case "eth_unsubscribe":
            return this._subscriptionManager.handleRequest(t)
        }
    }
    _isKnownAddress(t) {
        try {
            const r = (0,
            D.ensureAddressString)(t);
            return this._addresses.map(i=>(0,
            D.ensureAddressString)(i)).includes(r)
        } catch {}
        return !1
    }
    _ensureKnownAddress(t) {
        var r;
        if (!this._isKnownAddress(t))
            throw (r = this.diagnostic) === null || r === void 0 || r.log(ln.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
            new Error("Unknown Ethereum address")
    }
    _prepareTransactionParams(t) {
        const r = t.from ? (0,
        D.ensureAddressString)(t.from) : this.selectedAddress;
        if (!r)
            throw new Error("Ethereum address is unavailable");
        this._ensureKnownAddress(r);
        const n = t.to ? (0,
        D.ensureAddressString)(t.to) : null
          , i = t.value != null ? (0,
        D.ensureBN)(t.value) : new T_.default(0)
          , s = t.data ? (0,
        D.ensureBuffer)(t.data) : H.Buffer.alloc(0)
          , a = t.nonce != null ? (0,
        D.ensureIntNumber)(t.nonce) : null
          , c = t.gasPrice != null ? (0,
        D.ensureBN)(t.gasPrice) : null
          , d = t.maxFeePerGas != null ? (0,
        D.ensureBN)(t.maxFeePerGas) : null
          , u = t.maxPriorityFeePerGas != null ? (0,
        D.ensureBN)(t.maxPriorityFeePerGas) : null
          , p = t.gas != null ? (0,
        D.ensureBN)(t.gas) : null
          , f = t.chainId ? (0,
        D.ensureIntNumber)(t.chainId) : this.getChainId();
        return {
            fromAddress: r,
            toAddress: n,
            weiValue: i,
            data: s,
            nonce: a,
            gasPriceInWei: c,
            maxFeePerGas: d,
            maxPriorityFeePerGas: u,
            gasLimit: p,
            chainId: f
        }
    }
    _isAuthorized() {
        return this._addresses.length > 0
    }
    _requireAuthorization() {
        if (!this._isAuthorized())
            throw W.standardErrors.provider.unauthorized({})
    }
    _throwUnsupportedMethodError() {
        throw W.standardErrors.provider.unsupportedMethod({})
    }
    async _signEthereumMessage(t, r, n, i) {
        this._ensureKnownAddress(r);
        try {
            const a = await (await this.initializeRelay()).signEthereumMessage(t, r, n, i).promise;
            if ((0,
            nt.isErrorResponse)(a))
                throw new Error(a.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: a.result
            }
        } catch (s) {
            throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? W.standardErrors.provider.userRejectedRequest("User denied message signature") : s
        }
    }
    async _ethereumAddressFromSignedMessage(t, r, n) {
        const s = await (await this.initializeRelay()).ethereumAddressFromSignedMessage(t, r, n).promise;
        if ((0,
        nt.isErrorResponse)(s))
            throw new Error(s.errorMessage);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: s.result
        }
    }
    _eth_accounts() {
        return [...this._addresses]
    }
    _eth_coinbase() {
        return this.selectedAddress || null
    }
    _net_version() {
        return this.getChainId().toString(10)
    }
    _eth_chainId() {
        return (0,
        D.hexStringFromIntNumber)(this.getChainId())
    }
    getChainId() {
        const t = this._storage.getItem(rc);
        if (!t)
            return (0,
            D.ensureIntNumber)(this._chainIdFromOpts);
        const r = parseInt(t, 10);
        return (0,
        D.ensureIntNumber)(r)
    }
    async _eth_requestAccounts() {
        var t;
        if ((t = this.diagnostic) === null || t === void 0 || t.log(ln.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::_eth_requestAccounts",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay ? es.Session.hash(this._relay.session.id) : void 0
        }),
        this._isAuthorized())
            return Promise.resolve({
                jsonrpc: "2.0",
                id: 0,
                result: this._addresses
            });
        let r;
        try {
            if (r = await (await this.initializeRelay()).requestEthereumAccounts().promise,
            (0,
            nt.isErrorResponse)(r))
                throw new Error(r.errorMessage)
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? W.standardErrors.provider.userRejectedRequest("User denied account authorization") : n
        }
        if (!r.result)
            throw new Error("accounts received is empty");
        return this._setAddresses(r.result),
        this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()),
        {
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
        }
    }
    _eth_sign(t) {
        this._requireAuthorization();
        const r = (0,
        D.ensureAddressString)(t[0])
          , n = (0,
        D.ensureBuffer)(t[1]);
        return this._signEthereumMessage(n, r, !1)
    }
    _eth_ecRecover(t) {
        const r = (0,
        D.ensureBuffer)(t[0])
          , n = (0,
        D.ensureBuffer)(t[1]);
        return this._ethereumAddressFromSignedMessage(r, n, !1)
    }
    _personal_sign(t) {
        this._requireAuthorization();
        const r = (0,
        D.ensureBuffer)(t[0])
          , n = (0,
        D.ensureAddressString)(t[1]);
        return this._signEthereumMessage(r, n, !0)
    }
    _personal_ecRecover(t) {
        const r = (0,
        D.ensureBuffer)(t[0])
          , n = (0,
        D.ensureBuffer)(t[1]);
        return this._ethereumAddressFromSignedMessage(r, n, !0)
    }
    async _eth_signTransaction(t) {
        this._requireAuthorization();
        const r = this._prepareTransactionParams(t[0] || {});
        try {
            const i = await (await this.initializeRelay()).signEthereumTransaction(r).promise;
            if ((0,
            nt.isErrorResponse)(i))
                throw new Error(i.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: i.result
            }
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? W.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n
        }
    }
    async _eth_sendRawTransaction(t) {
        const r = (0,
        D.ensureBuffer)(t[0])
          , i = await (await this.initializeRelay()).submitEthereumTransaction(r, this.getChainId()).promise;
        if ((0,
        nt.isErrorResponse)(i))
            throw new Error(i.errorMessage);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: i.result
        }
    }
    async _eth_sendTransaction(t) {
        this._requireAuthorization();
        const r = this._prepareTransactionParams(t[0] || {});
        try {
            const i = await (await this.initializeRelay()).signAndSubmitEthereumTransaction(r).promise;
            if ((0,
            nt.isErrorResponse)(i))
                throw new Error(i.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: i.result
            }
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? W.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n
        }
    }
    async _eth_signTypedData_v1(t) {
        this._requireAuthorization();
        const r = (0,
        D.ensureParsedJSONObject)(t[0])
          , n = (0,
        D.ensureAddressString)(t[1]);
        this._ensureKnownAddress(n);
        const i = Ii.default.hashForSignTypedDataLegacy({
            data: r
        })
          , s = JSON.stringify(r, null, 2);
        return this._signEthereumMessage(i, n, !1, s)
    }
    async _eth_signTypedData_v3(t) {
        this._requireAuthorization();
        const r = (0,
        D.ensureAddressString)(t[0])
          , n = (0,
        D.ensureParsedJSONObject)(t[1]);
        this._ensureKnownAddress(r);
        const i = Ii.default.hashForSignTypedData_v3({
            data: n
        })
          , s = JSON.stringify(n, null, 2);
        return this._signEthereumMessage(i, r, !1, s)
    }
    async _eth_signTypedData_v4(t) {
        this._requireAuthorization();
        const r = (0,
        D.ensureAddressString)(t[0])
          , n = (0,
        D.ensureParsedJSONObject)(t[1]);
        this._ensureKnownAddress(r);
        const i = Ii.default.hashForSignTypedData_v4({
            data: n
        })
          , s = JSON.stringify(n, null, 2);
        return this._signEthereumMessage(i, r, !1, s)
    }
    async _cbwallet_arbitrary(t) {
        const r = t[0]
          , n = t[1];
        if (typeof n != "string")
            throw new Error("parameter must be a string");
        if (typeof r != "object" || r === null)
            throw new Error("parameter must be an object");
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.genericRequest(r, n)
        }
    }
    async _wallet_addEthereumChain(t) {
        var r, n, i, s;
        const a = t[0];
        if (((r = a.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
            return {
                jsonrpc: "2.0",
                id: 0,
                error: {
                    code: 2,
                    message: "please pass in at least 1 rpcUrl"
                }
            };
        if (!a.chainName || a.chainName.trim() === "")
            throw W.standardErrors.rpc.invalidParams("chainName is a required field");
        if (!a.nativeCurrency)
            throw W.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
        const c = parseInt(a.chainId, 16);
        return await this.addEthereumChain(c, (n = a.rpcUrls) !== null && n !== void 0 ? n : [], (i = a.blockExplorerUrls) !== null && i !== void 0 ? i : [], a.chainName, (s = a.iconUrls) !== null && s !== void 0 ? s : [], a.nativeCurrency) ? {
            jsonrpc: "2.0",
            id: 0,
            result: null
        } : {
            jsonrpc: "2.0",
            id: 0,
            error: {
                code: 2,
                message: "unable to add ethereum chain"
            }
        }
    }
    async _wallet_switchEthereumChain(t) {
        const r = t[0];
        return await this.switchEthereumChain(parseInt(r.chainId, 16)),
        {
            jsonrpc: "2.0",
            id: 0,
            result: null
        }
    }
    async _wallet_watchAsset(t) {
        const r = Array.isArray(t) ? t[0] : t;
        if (!r.type)
            throw W.standardErrors.rpc.invalidParams("Type is required");
        if ((r == null ? void 0 : r.type) !== "ERC20")
            throw W.standardErrors.rpc.invalidParams(`Asset of type '${r.type}' is not supported`);
        if (!(r != null && r.options))
            throw W.standardErrors.rpc.invalidParams("Options are required");
        if (!(r != null && r.options.address))
            throw W.standardErrors.rpc.invalidParams("Address is required");
        const n = this.getChainId()
          , {address: i, symbol: s, image: a, decimals: c} = r.options;
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.watchAsset(r.type, i, s, c, a, n)
        }
    }
    _eth_uninstallFilter(t) {
        const r = (0,
        D.ensureHexString)(t[0]);
        return this._filterPolyfill.uninstallFilter(r)
    }
    async _eth_newFilter(t) {
        const r = t[0];
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newFilter(r)
        }
    }
    async _eth_newBlockFilter() {
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newBlockFilter()
        }
    }
    async _eth_newPendingTransactionFilter() {
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newPendingTransactionFilter()
        }
    }
    _eth_getFilterChanges(t) {
        const r = (0,
        D.ensureHexString)(t[0]);
        return this._filterPolyfill.getFilterChanges(r)
    }
    _eth_getFilterLogs(t) {
        const r = (0,
        D.ensureHexString)(t[0]);
        return this._filterPolyfill.getFilterLogs(r)
    }
    initializeRelay() {
        return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then(t=>(t.setAccountsCallback((r,n)=>this._setAddresses(r, n)),
        t.setChainCallback((r,n)=>{
            this.updateProviderInfo(n, parseInt(r, 10))
        }
        ),
        t.setDappDefaultChainCallback(this._chainIdFromOpts),
        this._relay = t,
        t))
    }
}
Br.CoinbaseWalletProvider = F_;
var ti = {};
Object.defineProperty(ti, "__esModule", {
    value: !0
});
ti.RelayEventManager = void 0;
const j_ = T;
class D_ {
    constructor() {
        this._nextRequestId = 0,
        this.callbacks = new Map
    }
    makeRequestId() {
        this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
        const t = this._nextRequestId
          , r = (0,
        j_.prepend0x)(t.toString(16));
        return this.callbacks.get(r) && this.callbacks.delete(r),
        t
    }
}
ti.RelayEventManager = D_;
Object.defineProperty(fn, "__esModule", {
    value: !0
});
fn.CoinbaseWalletSDK = void 0;
const H_ = us
  , U_ = hs
  , sc = T
  , V_ = _s
  , z_ = Br
  , W_ = En
  , q_ = An
  , J_ = ti
  , G_ = kn
  , Z_ = Sn
  , Cu = qr;
class ri {
    constructor(t) {
        var r, n, i;
        this._appName = "",
        this._appLogoUrl = null,
        this._relay = null,
        this._relayEventManager = null;
        const s = t.linkAPIUrl || U_.LINK_API_URL;
        typeof t.overrideIsMetaMask > "u" ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = t.overrideIsMetaMask,
        this._overrideIsCoinbaseWallet = (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0,
        this._overrideIsCoinbaseBrowser = (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1,
        this._diagnosticLogger = t.diagnosticLogger,
        this._reloadOnDisconnect = (i = t.reloadOnDisconnect) !== null && i !== void 0 ? i : !0;
        const a = new URL(s)
          , c = `${a.protocol}//${a.host}`;
        if (this._storage = new V_.ScopedLocalStorage(`-walletlink:${c}`),
        this._storage.setItem("version", ri.VERSION),
        this.walletExtension || this.coinbaseBrowser)
            return;
        this._relayEventManager = new J_.RelayEventManager;
        const d = (0,
        sc.isMobileWeb)()
          , u = t.uiConstructor || (f=>d ? new q_.MobileRelayUI(f) : new G_.WalletLinkRelayUI(f))
          , p = {
            linkAPIUrl: s,
            version: Cu.LIB_VERSION,
            darkMode: !!t.darkMode,
            headlessMode: !!t.headlessMode,
            uiConstructor: u,
            storage: this._storage,
            relayEventManager: this._relayEventManager,
            diagnosticLogger: this._diagnosticLogger,
            reloadOnDisconnect: this._reloadOnDisconnect,
            enableMobileWalletLink: t.enableMobileWalletLink
        };
        this._relay = d ? new W_.MobileRelay(p) : new Z_.WalletLinkRelay(p),
        this.setAppInfo(t.appName, t.appLogoUrl),
        !t.headlessMode && this._relay.attachUI()
    }
    makeWeb3Provider(t="", r=1) {
        const n = this.walletExtension;
        if (n)
            return this.isCipherProvider(n) || n.setProviderInfo(t, r),
            this._reloadOnDisconnect === !1 && typeof n.disableReloadOnDisconnect == "function" && n.disableReloadOnDisconnect(),
            n;
        const i = this.coinbaseBrowser;
        if (i)
            return i;
        const s = this._relay;
        if (!s || !this._relayEventManager || !this._storage)
            throw new Error("Relay not initialized, should never happen");
        return t || s.setConnectDisabled(!0),
        new z_.CoinbaseWalletProvider({
            relayProvider: ()=>Promise.resolve(s),
            relayEventManager: this._relayEventManager,
            storage: this._storage,
            jsonRpcUrl: t,
            chainId: r,
            qrUrl: this.getQrUrl(),
            diagnosticLogger: this._diagnosticLogger,
            overrideIsMetaMask: this._overrideIsMetaMask,
            overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
            overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
        })
    }
    setAppInfo(t, r) {
        var n;
        this._appName = t || "DApp",
        this._appLogoUrl = r || (0,
        sc.getFavicon)();
        const i = this.walletExtension;
        i ? this.isCipherProvider(i) || i.setAppInfo(this._appName, this._appLogoUrl) : (n = this._relay) === null || n === void 0 || n.setAppInfo(this._appName, this._appLogoUrl)
    }
    disconnect() {
        var t;
        const r = this === null || this === void 0 ? void 0 : this.walletExtension;
        r ? r.close() : (t = this._relay) === null || t === void 0 || t.resetAndReload()
    }
    getQrUrl() {
        var t, r;
        return (r = (t = this._relay) === null || t === void 0 ? void 0 : t.getQRCodeUrl()) !== null && r !== void 0 ? r : null
    }
    getCoinbaseWalletLogo(t, r=240) {
        return (0,
        H_.walletLogo)(t, r)
    }
    get walletExtension() {
        var t;
        return (t = window.coinbaseWalletExtension) !== null && t !== void 0 ? t : window.walletLinkExtension
    }
    get coinbaseBrowser() {
        var t, r;
        try {
            const n = (t = window.ethereum) !== null && t !== void 0 ? t : (r = window.top) === null || r === void 0 ? void 0 : r.ethereum;
            return n && "isCoinbaseBrowser"in n && n.isCoinbaseBrowser ? n : void 0
        } catch {
            return
        }
    }
    isCipherProvider(t) {
        return typeof t.isCipher == "boolean" && t.isCipher
    }
}
fn.CoinbaseWalletSDK = ri;
ri.VERSION = Cu.LIB_VERSION;
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.CoinbaseWalletProvider = e.CoinbaseWalletSDK = void 0;
    const t = fn
      , r = Br;
    var n = fn;
    Object.defineProperty(e, "CoinbaseWalletSDK", {
        enumerable: !0,
        get: function() {
            return n.CoinbaseWalletSDK
        }
    });
    var i = Br;
    Object.defineProperty(e, "CoinbaseWalletProvider", {
        enumerable: !0,
        get: function() {
            return i.CoinbaseWalletProvider
        }
    }),
    e.default = t.CoinbaseWalletSDK,
    typeof window < "u" && (window.CoinbaseWalletSDK = t.CoinbaseWalletSDK,
    window.CoinbaseWalletProvider = r.CoinbaseWalletProvider,
    window.WalletLink = t.CoinbaseWalletSDK,
    window.WalletLinkProvider = r.CoinbaseWalletProvider)
}
)(zi);
const Q_ = Mu(zi)
  , uv = Iu({
    __proto__: null,
    default: Q_
}, [zi]);
export {uv as i};
