webpackJsonp([0], [, , , , , , , , , , , , , , , , function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createEnv = void 0;
    var n = A(74),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n),
        i = "",
        o = "";
    "undefined" != typeof window && (i = window.navigator.userAgent, o = window.document.cookie || "");
    var a = /ipad/gi,
        s = /iphone|ipod|ipad|ios/gi,
        c = /Android/gi,
        l = /windows\s+phone/gi,
        u = /IPadQQ/gi,
        f = /mobile|mobi|wap|simulator|iphone|android/gi,
        d = /SINA_ROBOT|SINA_WEIBO/gi,
        h = /Weibo|MicroMessenger|YDDict|youdao_dict|QQ(?!Browser)|RenRen|Douban|YiXin|TXMicroBlog|NewsApp/i,
        p = /QQBrowser/gi,
        g = /Android\s+([\d\.]+);/i,
        B = /Windows\s+Phone\s+([\d\.]+);/i,
        w = /OS\s+([\d+_]+)/i,
        m = /\bChrome\/\d/,
        v = /\bVersion\/\d/,
        y = /appver/i,
        E = /NeteaseMusic\/([\d\.]+)?/i,
        Q = /appver=([\d\.]+)?/i,
        C = {
            Weibo: "sina",
            MicroMessenger: "wx",
            YDDict: "youdaodict",
            youdao_dict: "youdaodict",
            YiXin: "yx",
            TXMicroBlog: "tencent",
            NewsApp: "neteasenews",
            QQ: "qq",
            RenRen: "renren",
            Douban: "douban"
        },
        U = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.userAgent || i,
                A = (e.Cookie, function () {
                    return "" !== t && null !== t.match(l)
                }),
                n = function () {
                    if ("" === t) return !1;
                    var e = t.match(s),
                        A = t.match(l);
                    return null !== e && null === A
                },
                U = function () {
                    return "" !== t && null !== t.match(a)
                },
                b = function () {
                    return U() ? "pad" : "phone"
                },
                F = function () {
                    var e = t.match(w);
                    if (null !== e) {
                        return e[1].replace(/_/g, ".")
                    }
                    return ""
                },
                _ = function () {
                    var e = F();
                    return e && "string" == typeof e ? parseInt(e.split(".")[0], 10) : -1
                },
                H = function () {
                    if ("" === t) return !1;
                    var e = t.match(c),
                        A = t.match(l);
                    return null !== e && null === A
                },
                x = function () {
                    var e = t.match(g);
                    return null !== e ? e[1] : ""
                },
                N = function () {
                    var e = t.match(B);
                    return null !== e ? e[1] : ""
                },
                T = function () {
                    if (A()) {
                        var e = N();
                        if (null !== e) try {
                            var t = parseFloat(e, 10);
                            return !!(t && t >= 10)
                        } catch (e) {
                            return !1
                        }
                    }
                    return !1
                },
                I = function () {
                    return "" === t ? 0 : A() ? 3 : n() ? 1 : H() ? 2 : 0
                },
                S = function () {
                    switch (I()) {
                    case 1:
                        return "ios";
                    case 2:
                        return "android";
                    case 3:
                        return "wp";
                    default:
                        return "other"
                    }
                },
                O = function () {
                    var e = N();
                    return e || ((e = t.match(w)) ? e[1].replace(/_/g, ".") : (e = x()) || "")
                },
                M = function () {
                    return "" === t ? 0 : A() ? T() ? 31 : 30 : n() ? U() ? 11 : 10 : H() ? 20 : 0
                },
                k = function () {
                    switch (M()) {
                    case 10:
                        return "iphone";
                    case 11:
                        return "ipad";
                    case 20:
                        return "android";
                    case 30:
                        return "wp";
                    case 31:
                        return "uwp";
                    default:
                        return "other"
                    }
                },
                D = function () {
                    var e = H(),
                        A = m.test(t),
                        n = !v.test(t);
                    return e && A && n
                },
                L = function () {
                    if ("" === t) return !1;
                    var e = t.match(h),
                        A = t.match(p);
                    return null !== e ? e[0].toLowerCase() : null !== A ? A[0].toLowerCase() : ""
                },
                R = function () {
                    return "" !== t && null !== t.match(f)
                },
                P = function () {
                    return "" !== t && null !== t.match(d)
                },
                K = function () {
                    if ("" === t) return !1;
                    var e = L();
                    return "QQ".toLowerCase() === e || "Weibo".toLowerCase() === e || "MicroMessenger".toLowerCase() === e
                },
                X = function () {
                    return null !== t.match(u)
                },
                z = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = "";
                    return (0, r.
                    default)(C).forEach(function (A) {
                            A.toLowerCase() === e && (t = C[A])
                        }),
                    t
                },
                j = function () {
                    var e = i.match(E),
                        t = o.match(y);
                    return null !== e || null !== t
                },
                V = function () {
                    var e = i.match(E) || o.match(Q);
                    return null !== e ? e[1] : ""
                },
                W = function (e) {
                    if (!e) return !1;
                    var t = V();
                    t = t.split(".");
                    var A = e.split(".");
                    if (!t || !t.length || !A.length) return !1;
                    for (var n = Math.max(t.length, A.length), r = 0; r < n; r += 1) {
                        if (t[r] = t[r] || 0, t[r] < A[r]) return -1;
                        if (t[r] > A[r]) return 2
                    }
                    return 1
                };
            return {
                    getPlatform: I,
                    getPlatform2Str: S,
                    getOSVersionStr: O,
                    getDevicePro: M,
                    getDevicePro2Str: k,
                    getDevice: b,
                    getClient: L,
                    getIosLargeVersion: _,
                    getIosVersion: F,
                    getAndroidVersion: x,
                    getWPVersion: N,
                    getAppVersion: V,
                    isIos: n,
                    isPad: U,
                    isAndroid: H,
                    isAndroidChrome: D,
                    isWP: A,
                    isWP10: T,
                    isMobile: R,
                    isSinaRobot: P,
                    isUnsupportedClient: K,
                    isIpadQQ: X,
                    isInNEMapp: j,
                    fetchLogByClient: z,
                    isHigherVersion: function (e) {
                        if (!j() || !e) return !1;
                        var t = W(e);
                        return !(!t || 2 !== t)
                    },
                    isLowerVersion: function (e) {
                        if (!j() || !e) return !1;
                        var t = W(e);
                        return !(!t || -1 !== t)
                    },
                    isEqualVersion: function (e) {
                        if (!j() || !e) return !1;
                        var t = W(e);
                        return !(!t || 1 !== t)
                    }
                }
        };
    t.createEnv = U,
    t.
default = U()
},
, , , , , , function (e, t) {
    var A = e.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = A)
},
, , , , , , function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = A(16),
        i = n(r),
        o = A(156),
        a = n(o),
        s = A(150),
        c = (n(s), A(157)),
        l = n(c),
        u = A(279),
        f = n(u),
        d = A(155),
        h = n(d),
        p = A(103),
        g = n(p),
        B = A(153),
        w = new h.
default (B.ACTIVITY_NAME),
        m = {};
    m.URL = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return /^\//.test(e) ? location.protocol + "//" + B.HOST + e : e
        },
    m.biLogPage = function (e) {
            w.page(e)
        },
    m.biLogClick = function (e, t) {
            w.click(e, t)
        },
    m.isWechat = function () {
            return /micromessenger/i.test(navigator.userAgent)
        },
    m.share = function () {
            i.
        default.isInNEMapp() ? g.
        default.onAppShare():
            i.
        default.getClient() ? (0, f.
        default)():
            alert("想分享给更多好友？复制上面的链接发给他们"),
            console.log("[SHARE] ", JSON.stringify(g.
        default.getShareData()))
        },
    m.getShareLink = function () {
            return B.BASE_URL + "/" + m.randomString(10) + "/index.html"
        },
    m.wakeup = function () {
            a.
        default.wakeup({
                deepLink: "orpheus://openurl?url=" + encodeURIComponent(m.getShareLink()),
                storeLink: "https://music.163.com/m/download",
                guideCallback: l.
            default
            })
        },
    m.randomString = function (e) {
            for (var t = "", A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < e; n++) t += A.charAt(Math.floor(Math.random() * A.length));
            return t
        },
    t.
default = m,
    e.exports = t.
default
},
, , function (e, t) {
    var A = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = A)
},
, , function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseBoundCurves = t.calculatePaddingBoxPath = t.calculateBorderBoxPath = t.parsePathForBorder = t.parseDocumentSize = t.calculateContentBox = t.calculatePaddingBox = t.parseBounds = t.Bounds = void 0;
    var i = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        o = A(100),
        a = n(o),
        s = A(721),
        c = n(s),
        l = t.Bounds = function () {
            function e(t, A, n, i) {
                r(this, e),
                this.left = t,
                this.top = A,
                this.width = n,
                this.height = i
            }
            return i(e, null, [{
                key: "fromClientRect",
                value: function (t, A, n) {
                    return new e(t.left + A, t.top + n, t.width, t.height)
                }
            }]),
            e
        }(),
        u = (t.parseBounds = function (e, t, A) {
            return l.fromClientRect(e.getBoundingClientRect(), t, A)
        }, t.calculatePaddingBox = function (e, t) {
            return new l(e.left + t[3].borderWidth, e.top + t[0].borderWidth, e.width - (t[1].borderWidth + t[3].borderWidth), e.height - (t[0].borderWidth + t[2].borderWidth))
        }, t.calculateContentBox = function (e, t, A) {
            var n = t[0].value,
                r = t[1].value,
                i = t[2].value,
                o = t[3].value;
            return new l(e.left + o + A[3].borderWidth, e.top + n + A[0].borderWidth, e.width - (A[1].borderWidth + A[3].borderWidth + o + r), e.height - (A[0].borderWidth + A[2].borderWidth + n + i))
        }, t.parseDocumentSize = function (e) {
            var t = e.body,
                A = e.documentElement;
            if (!t || !A) throw new Error("");
            var n = Math.max(Math.max(t.scrollWidth, A.scrollWidth), Math.max(t.offsetWidth, A.offsetWidth), Math.max(t.clientWidth, A.clientWidth)),
                r = Math.max(Math.max(t.scrollHeight, A.scrollHeight), Math.max(t.offsetHeight, A.offsetHeight), Math.max(t.clientHeight, A.clientHeight));
            return new l(0, 0, n, r)
        }, t.parsePathForBorder = function (e, t) {
            switch (t) {
            case 0:
                return u(e.topLeftOuter, e.topLeftInner, e.topRightOuter, e.topRightInner);
            case 1:
                return u(e.topRightOuter, e.topRightInner, e.bottomRightOuter, e.bottomRightInner);
            case 2:
                return u(e.bottomRightOuter, e.bottomRightInner, e.bottomLeftOuter, e.bottomLeftInner);
            case 3:
            default:
                return u(e.bottomLeftOuter, e.bottomLeftInner, e.topLeftOuter, e.topLeftInner)
            }
        }, function (e, t, A, n) {
            var r = [];
            return e instanceof c.
        default ? r.push(e.subdivide(.5, !1)):
            r.push(e),
            A instanceof c.
        default ? r.push(A.subdivide(.5, !0)):
            r.push(A),
            n instanceof c.
        default ? r.push(n.subdivide(.5, !0).reverse()):
            r.push(n),
            t instanceof c.
        default ? r.push(t.subdivide(.5, !1).reverse()):
            r.push(t),
            r
        }),
        f = (t.calculateBorderBoxPath = function (e) {
            return [e.topLeftOuter, e.topRightOuter, e.bottomRightOuter, e.bottomLeftOuter]
        }, t.calculatePaddingBoxPath = function (e) {
            return [e.topLeftInner, e.topRightInner, e.bottomRightInner, e.bottomLeftInner]
        }, t.parseBoundCurves = function (e, t, A) {
            var n = A[f.TOP_LEFT][0].getAbsoluteValue(e.width),
                r = A[f.TOP_LEFT][1].getAbsoluteValue(e.height),
                i = A[f.TOP_RIGHT][0].getAbsoluteValue(e.width),
                o = A[f.TOP_RIGHT][1].getAbsoluteValue(e.height),
                s = A[f.BOTTOM_RIGHT][0].getAbsoluteValue(e.width),
                c = A[f.BOTTOM_RIGHT][1].getAbsoluteValue(e.height),
                l = A[f.BOTTOM_LEFT][0].getAbsoluteValue(e.width),
                u = A[f.BOTTOM_LEFT][1].getAbsoluteValue(e.height),
                h = [];
            h.push((n + i) / e.width),
            h.push((l + s) / e.width),
            h.push((r + u) / e.height),
            h.push((o + c) / e.height);
            var p = Math.max.apply(Math, h);
            p > 1 && (n /= p, r /= p, i /= p, o /= p, s /= p, c /= p, l /= p, u /= p);
            var g = e.width - i,
                B = e.height - c,
                w = e.width - s,
                m = e.height - u;
            return {
                    topLeftOuter: n > 0 || r > 0 ? d(e.left, e.top, n, r, f.TOP_LEFT) : new a.
                default (e.left, e.top),
                    topLeftInner:
                    n > 0 || r > 0 ? d(e.left + t[3].borderWidth, e.top + t[0].borderWidth, Math.max(0, n - t[3].borderWidth), Math.max(0, r - t[0].borderWidth), f.TOP_LEFT) : new a.
                default (e.left + t[3].borderWidth, e.top + t[0].borderWidth),
                    topRightOuter:
                    i > 0 || o > 0 ? d(e.left + g, e.top, i, o, f.TOP_RIGHT) : new a.
                default (e.left + e.width, e.top),
                    topRightInner:
                    i > 0 || o > 0 ? d(e.left + Math.min(g, e.width + t[3].borderWidth), e.top + t[0].borderWidth, g > e.width + t[3].borderWidth ? 0 : i - t[3].borderWidth, o - t[0].borderWidth, f.TOP_RIGHT) : new a.
                default (e.left + e.width - t[1].borderWidth, e.top + t[0].borderWidth),
                    bottomRightOuter:
                    s > 0 || c > 0 ? d(e.left + w, e.top + B, s, c, f.BOTTOM_RIGHT) : new a.
                default (e.left + e.width, e.top + e.height),
                    bottomRightInner:
                    s > 0 || c > 0 ? d(e.left + Math.min(w, e.width - t[3].borderWidth), e.top + Math.min(B, e.height + t[0].borderWidth), Math.max(0, s - t[1].borderWidth), c - t[2].borderWidth, f.BOTTOM_RIGHT) : new a.
                default (e.left + e.width - t[1].borderWidth, e.top + e.height - t[2].borderWidth),
                    bottomLeftOuter:
                    l > 0 || u > 0 ? d(e.left, e.top + m, l, u, f.BOTTOM_LEFT) : new a.
                default (e.left, e.top + e.height),
                    bottomLeftInner:
                    l > 0 || u > 0 ? d(e.left + t[3].borderWidth, e.top + m, Math.max(0, l - t[3].borderWidth), u - t[2].borderWidth, f.BOTTOM_LEFT) : new a.
                default (e.left + t[3].borderWidth, e.top + e.height - t[2].borderWidth)
                }
        }, {
            TOP_LEFT: 0,
            TOP_RIGHT: 1,
            BOTTOM_RIGHT: 2,
            BOTTOM_LEFT: 3
        }),
        d = function (e, t, A, n, r) {
            var i = (Math.sqrt(2) - 1) / 3 * 4,
                o = A * i,
                s = n * i,
                l = e + A,
                u = t + n;
            switch (r) {
                case f.TOP_LEFT:
                    return new c.
                default (new a.
                default (e, u), new a.
                default (e, u - s), new a.
                default (l - o, t), new a.
                default (l, t));
                case f.TOP_RIGHT:
                    return new c.
                default (new a.
                default (e, t), new a.
                default (e + o, t), new a.
                default (l, u - s), new a.
                default (l, u));
                case f.BOTTOM_RIGHT:
                    return new c.
                default (new a.
                default (l, t), new a.
                default (l, t + s), new a.
                default (e + o, u), new a.
                default (e, u));
                case f.BOTTOM_LEFT:
                default:
                    return new c.
                default (new a.
                default (l, u), new a.
                default (l - o, u), new a.
                default (e, t + s), new a.
                default (e, t))
                }
        }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            var A = [],
                n = !0,
                r = !1,
                i = void 0;
            try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (A.push(o.value), !t || A.length !== t); n = !0);
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        !n && a.
                        return &&a.
                        return ()
                    } finally {
                        if (r) throw i
                    }
                }
            return A
        }
        return function (t, A) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, A);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        i = function () {
            function e(e, t) {
                for (var A = 0; A < t.length; A++) {
                    var n = t[A];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, A, n) {
                return A && e(t.prototype, A),
                n && e(t, n),
                t
            }
        }(),
        o = /^#([a-f0-9]{3})$/i,
        a = function (e) {
            var t = e.match(o);
            return !!t && [parseInt(t[1][0] + t[1][0], 16), parseInt(t[1][1] + t[1][1], 16), parseInt(t[1][2] + t[1][2], 16), null]
        },
        s = /^#([a-f0-9]{6})$/i,
        c = function (e) {
            var t = e.match(s);
            return !!t && [parseInt(t[1].substring(0, 2), 16), parseInt(t[1].substring(2, 4), 16), parseInt(t[1].substring(4, 6), 16), null]
        },
        l = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
        u = function (e) {
            var t = e.match(l);
            return !!t && [Number(t[1]), Number(t[2]), Number(t[3]), null]
        },
        f = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/,
        d = function (e) {
            var t = e.match(f);
            return !!(t && t.length > 4) && [Number(t[1]), Number(t[2]), Number(t[3]), Number(t[4])]
        },
        h = function (e) {
            return [Math.min(e[0], 255), Math.min(e[1], 255), Math.min(e[2], 255), e.length > 3 ? e[3] : null]
        },
        p = function (e) {
            var t = B[e.toLowerCase()];
            return t || !1
        },
        g = function () {
            function e(t) {
                n(this, e);
                var A = Array.isArray(t) ? h(t) : a(t) || u(t) || d(t) || p(t) || c(t) || [0, 0, 0, null],
                    i = r(A, 4),
                    o = i[0],
                    s = i[1],
                    l = i[2],
                    f = i[3];
                this.r = o,
                this.g = s,
                this.b = l,
                this.a = f
            }
            return i(e, [{
                key: "isTransparent",
                value: function () {
                    return 0 === this.a
                }
            },
            {
                key: "toString",
                value: function () {
                    return null !== this.a && 1 !== this.a ? "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")" : "rgb(" + this.r + "," + this.g + "," + this.b + ")"
                }
            }]),
            e
        }();
    t.
default = g;
    var B = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, null],
            antiquewhite: [250, 235, 215, null],
            aqua: [0, 255, 255, null],
            aquamarine: [127, 255, 212, null],
            azure: [240, 255, 255, null],
            beige: [245, 245, 220, null],
            bisque: [255, 228, 196, null],
            black: [0, 0, 0, null],
            blanchedalmond: [255, 235, 205, null],
            blue: [0, 0, 255, null],
            blueviolet: [138, 43, 226, null],
            brown: [165, 42, 42, null],
            burlywood: [222, 184, 135, null],
            cadetblue: [95, 158, 160, null],
            chartreuse: [127, 255, 0, null],
            chocolate: [210, 105, 30, null],
            coral: [255, 127, 80, null],
            cornflowerblue: [100, 149, 237, null],
            cornsilk: [255, 248, 220, null],
            crimson: [220, 20, 60, null],
            cyan: [0, 255, 255, null],
            darkblue: [0, 0, 139, null],
            darkcyan: [0, 139, 139, null],
            darkgoldenrod: [184, 134, 11, null],
            darkgray: [169, 169, 169, null],
            darkgreen: [0, 100, 0, null],
            darkgrey: [169, 169, 169, null],
            darkkhaki: [189, 183, 107, null],
            darkmagenta: [139, 0, 139, null],
            darkolivegreen: [85, 107, 47, null],
            darkorange: [255, 140, 0, null],
            darkorchid: [153, 50, 204, null],
            darkred: [139, 0, 0, null],
            darksalmon: [233, 150, 122, null],
            darkseagreen: [143, 188, 143, null],
            darkslateblue: [72, 61, 139, null],
            darkslategray: [47, 79, 79, null],
            darkslategrey: [47, 79, 79, null],
            darkturquoise: [0, 206, 209, null],
            darkviolet: [148, 0, 211, null],
            deeppink: [255, 20, 147, null],
            deepskyblue: [0, 191, 255, null],
            dimgray: [105, 105, 105, null],
            dimgrey: [105, 105, 105, null],
            dodgerblue: [30, 144, 255, null],
            firebrick: [178, 34, 34, null],
            floralwhite: [255, 250, 240, null],
            forestgreen: [34, 139, 34, null],
            fuchsia: [255, 0, 255, null],
            gainsboro: [220, 220, 220, null],
            ghostwhite: [248, 248, 255, null],
            gold: [255, 215, 0, null],
            goldenrod: [218, 165, 32, null],
            gray: [128, 128, 128, null],
            green: [0, 128, 0, null],
            greenyellow: [173, 255, 47, null],
            grey: [128, 128, 128, null],
            honeydew: [240, 255, 240, null],
            hotpink: [255, 105, 180, null],
            indianred: [205, 92, 92, null],
            indigo: [75, 0, 130, null],
            ivory: [255, 255, 240, null],
            khaki: [240, 230, 140, null],
            lavender: [230, 230, 250, null],
            lavenderblush: [255, 240, 245, null],
            lawngreen: [124, 252, 0, null],
            lemonchiffon: [255, 250, 205, null],
            lightblue: [173, 216, 230, null],
            lightcoral: [240, 128, 128, null],
            lightcyan: [224, 255, 255, null],
            lightgoldenrodyellow: [250, 250, 210, null],
            lightgray: [211, 211, 211, null],
            lightgreen: [144, 238, 144, null],
            lightgrey: [211, 211, 211, null],
            lightpink: [255, 182, 193, null],
            lightsalmon: [255, 160, 122, null],
            lightseagreen: [32, 178, 170, null],
            lightskyblue: [135, 206, 250, null],
            lightslategray: [119, 136, 153, null],
            lightslategrey: [119, 136, 153, null],
            lightsteelblue: [176, 196, 222, null],
            lightyellow: [255, 255, 224, null],
            lime: [0, 255, 0, null],
            limegreen: [50, 205, 50, null],
            linen: [250, 240, 230, null],
            magenta: [255, 0, 255, null],
            maroon: [128, 0, 0, null],
            mediumaquamarine: [102, 205, 170, null],
            mediumblue: [0, 0, 205, null],
            mediumorchid: [186, 85, 211, null],
            mediumpurple: [147, 112, 219, null],
            mediumseagreen: [60, 179, 113, null],
            mediumslateblue: [123, 104, 238, null],
            mediumspringgreen: [0, 250, 154, null],
            mediumturquoise: [72, 209, 204, null],
            mediumvioletred: [199, 21, 133, null],
            midnightblue: [25, 25, 112, null],
            mintcream: [245, 255, 250, null],
            mistyrose: [255, 228, 225, null],
            moccasin: [255, 228, 181, null],
            navajowhite: [255, 222, 173, null],
            navy: [0, 0, 128, null],
            oldlace: [253, 245, 230, null],
            olive: [128, 128, 0, null],
            olivedrab: [107, 142, 35, null],
            orange: [255, 165, 0, null],
            orangered: [255, 69, 0, null],
            orchid: [218, 112, 214, null],
            palegoldenrod: [238, 232, 170, null],
            palegreen: [152, 251, 152, null],
            paleturquoise: [175, 238, 238, null],
            palevioletred: [219, 112, 147, null],
            papayawhip: [255, 239, 213, null],
            peachpuff: [255, 218, 185, null],
            peru: [205, 133, 63, null],
            pink: [255, 192, 203, null],
            plum: [221, 160, 221, null],
            powderblue: [176, 224, 230, null],
            purple: [128, 0, 128, null],
            rebeccapurple: [102, 51, 153, null],
            red: [255, 0, 0, null],
            rosybrown: [188, 143, 143, null],
            royalblue: [65, 105, 225, null],
            saddlebrown: [139, 69, 19, null],
            salmon: [250, 128, 114, null],
            sandybrown: [244, 164, 96, null],
            seagreen: [46, 139, 87, null],
            seashell: [255, 245, 238, null],
            sienna: [160, 82, 45, null],
            silver: [192, 192, 192, null],
            skyblue: [135, 206, 235, null],
            slateblue: [106, 90, 205, null],
            slategray: [112, 128, 144, null],
            slategrey: [112, 128, 144, null],
            snow: [255, 250, 250, null],
            springgreen: [0, 255, 127, null],
            steelblue: [70, 130, 180, null],
            tan: [210, 180, 140, null],
            teal: [0, 128, 128, null],
            thistle: [216, 191, 216, null],
            tomato: [255, 99, 71, null],
            turquoise: [64, 224, 208, null],
            violet: [238, 130, 238, null],
            wheat: [245, 222, 179, null],
            white: [255, 255, 255, null],
            whitesmoke: [245, 245, 245, null],
            yellow: [255, 255, 0, null],
            yellowgreen: [154, 205, 50, null]
        };
    t.TRANSPARENT = new g([0, 0, 0, 0])
},
, function (e, t, A) {
    e.exports = !A(69)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
},


function (e, t) {
    var A = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return A.call(e, t)
    }
},


function (e, t, A) {
    var n = A(68),
        r = A(161),
        i = A(116),
        o = Object.defineProperty;
    t.f = A(39) ? Object.defineProperty : function (e, t, A) {
            if (n(e), t = i(t, !0), n(A), r) try {
                return o(e, t, A)
            } catch (e) {}
            if ("get" in A || "set" in A) throw TypeError("Accessors not supported!");
            return "value" in A && (e[t] = A.value),
            e
        }
},
, , , , , , , , , , , function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.calculateLengthFromValueWithUnit = t.LENGTH_TYPE = void 0;
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = A(65),
        o = (function (e) {
            e && e.__esModule
        }(i), t.LENGTH_TYPE = {
            PX: 0,
            PERCENTAGE: 1
        }),
        a = function () {
            function e(t) {
                n(this, e),
                this.type = "%" === t.substr(t.length - 1) ? o.PERCENTAGE : o.PX;
                var A = parseFloat(t);
                this.value = isNaN(A) ? 0 : A
            }
            return r(e, [{
                key: "isPercentage",
                value: function () {
                    return this.type === o.PERCENTAGE
                }
            },
            {
                key: "getAbsoluteValue",
                value: function (e) {
                    return this.isPercentage() ? e * (this.value / 100) : this.value
                }
            }], [{
                key: "create",
                value: function (t) {
                    return new e(t)
                }
            }]),
            e
        }();
    t.
default = a;
    var s = function e(t) {
            var A = t.parent;
            return A ? e(A) : parseFloat(t.style.font.fontSize)
        };
    t.calculateLengthFromValueWithUnit = function (e, t, A) {
            switch (A) {
            case "px":
            case "%":
                return new a(t + A);
            case "em":
            case "rem":
                var n = new a(t);
                return n.value *= "em" === A ? parseFloat(e.style.font.fontSize) : s(e),
                n;
            default:
                return new a("0")
            }
        }
},


function (e, t, A) {
    e.exports = A(739)()
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    t.__esModule = !0;
    var r = A(297),
        i = n(r),
        o = A(296),
        a = n(o),
        s = "function" == typeof a.
default && "symbol" == typeof i.
default ?
    function (e) {
            return typeof e
        }:


    function (e) {
            return e && "function" == typeof a.
        default && e.constructor === a.
        default && e !== a.
        default.prototype ? "symbol":
            typeof e
        };
    t.
default = "function" == typeof a.
default && "symbol" === s(i.
    default) ?
    function (e) {
            return void 0 === e ? "undefined" : s(e)
        }:


    function (e) {
            return e && "function" == typeof a.
        default && e.constructor === a.
        default && e !== a.
        default.prototype ? "symbol":
            void 0 === e ? "undefined" : s(e)
        }
},


function (e, t, A) {
    var n = A(33),
        r = A(23),
        i = A(159),
        o = A(57),
        a = function (e, t, A) {
            var s, c, l, u = e & a.F,
                f = e & a.G,
                d = e & a.S,
                h = e & a.P,
                p = e & a.B,
                g = e & a.W,
                B = f ? r : r[t] || (r[t] = {}),
                w = B.prototype,
                m = f ? n : d ? n[t] : (n[t] || {}).prototype;
            f && (A = t);
            for (s in A)(c = !u && m && void 0 !== m[s]) && s in B || (l = c ? m[s] : A[s], B[s] = f && "function" != typeof m[s] ? A[s] : p && c ? i(l, n) : g && m[s] == l ?
                function (e) {
                    var t = function (t, A, n) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, A)
                            }
                            return new e(t, A, n)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype,
                    t
                }(l) : h && "function" == typeof l ? i(Function.call, l) : l, h && ((B.virtual || (B.virtual = {}))[s] = l, e & a.R && w && !w[s] && o(w, s, l)))
        };
    a.F = 1,
    a.G = 2,
    a.S = 4,
    a.P = 8,
    a.B = 16,
    a.W = 32,
    a.U = 64,
    a.R = 128,
    e.exports = a
},


function (e, t, A) {
    var n = A(41),
        r = A(78);
    e.exports = A(39) ?
    function (e, t, A) {
            return n.f(e, t, r(1, A))
        } : function (e, t, A) {
            return e[t] = A,
            e
        }
},


function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
},


function (e, t, A) {
    var n = A(314),
        r = A(105);
    e.exports = function (e) {
            return n(r(e))
        }
},


function (e, t, A) {
    var n = A(113)("wks"),
        r = A(79),
        i = A(33).Symbol,
        o = "function" == typeof i;
        (e.exports = function (e) {
            return n[e] || (n[e] = o && i[e] || (o ? i : r)("Symbol." + e))
        }).store = n
},
, , , , function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = A(37),
        o = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(i),
        a = A(66),
        s = A(73),
        c = A(148),
        l = A(725),
        u = A(726),
        f = A(727),
        d = A(728),
        h = A(729),
        p = A(730),
        g = A(101),
        B = A(731),
        w = A(732),
        m = A(241),
        v = A(242),
        y = A(243),
        E = A(149),
        Q = A(733),
        C = A(244),
        U = A(734),
        b = A(735),
        F = A(736),
        _ = A(737),
        H = A(36),
        x = A(236),
        N = A(147),
        T = ["INPUT", "TEXTAREA", "SELECT"],
        I = function () {
            function e(t, A, r, i) {
                var a = this;
                n(this, e),
                this.parent = A,
                this.tagName = t.tagName,
                this.index = i,
                this.childNodes = [],
                this.listItems = [],
                "number" == typeof t.start && (this.listStart = t.start);
                var I = t.ownerDocument.defaultView,
                    O = I.pageXOffset,
                    M = I.pageYOffset,
                    k = I.getComputedStyle(t, null),
                    D = (0, u.parseDisplay)(k.display),
                    L = "radio" === t.type || "checkbox" === t.type,
                    R = (0, y.parsePosition)(k.position);
                if (this.style = {
                        background: L ? x.INPUT_BACKGROUND : (0, s.parseBackground)(k, r),
                        border: L ? x.INPUT_BORDERS : (0, c.parseBorder)(k),
                        borderRadius: (t instanceof I.HTMLInputElement || t instanceof HTMLInputElement) && L ? (0, x.getInputBorderRadius)(t) : (0, l.parseBorderRadius)(k),
                        color: L ? x.INPUT_COLOR : new o.
                    default (k.color),
                        display:
                        D,
                        float: (0, f.parseCSSFloat)(k.float),
                        font: (0, d.parseFont)(k),
                        letterSpacing: (0, h.parseLetterSpacing)(k.letterSpacing),
                        listStyle: D === u.DISPLAY.LIST_ITEM ? (0, g.parseListStyle)(k) : null,
                        lineBreak: (0, p.parseLineBreak)(k.lineBreak),
                        margin: (0, B.parseMargin)(k),
                        opacity: parseFloat(k.opacity),
                        overflow: -1 === T.indexOf(t.tagName) ? (0, w.parseOverflow)(k.overflow) : w.OVERFLOW.HIDDEN,
                        overflowWrap: (0, m.parseOverflowWrap)(k.overflowWrap ? k.overflowWrap : k.wordWrap),
                        padding: (0, v.parsePadding)(k),
                        position: R,
                        textDecoration: (0, E.parseTextDecoration)(k),
                        textShadow: (0, Q.parseTextShadow)(k.textShadow),
                        textTransform: (0, C.parseTextTransform)(k.textTransform),
                        transform: (0, U.parseTransform)(k),
                        visibility: (0, b.parseVisibility)(k.visibility),
                        wordBreak: (0, F.parseWordBreak)(k.wordBreak),
                        zIndex: (0, _.parseZIndex)(R !== y.POSITION.STATIC ? k.zIndex : "auto")
                    }, this.isTransformed() && (t.style.transform = "matrix(1,0,0,1,0,0)"), D === u.DISPLAY.LIST_ITEM) {
                        var P = (0, N.getListOwner)(this);
                        if (P) {
                            var K = P.listItems.length;
                            P.listItems.push(this),
                            this.listIndex = t.hasAttribute("value") && "number" == typeof t.value ? t.value : 0 === K ? "number" == typeof P.listStart ? P.listStart : 1 : P.listItems[K - 1].listIndex + 1
                        }
                    }
                "IMG" === t.tagName && t.addEventListener("load", function () {
                        a.bounds = (0, H.parseBounds)(t, O, M),
                        a.curvedBounds = (0, H.parseBoundCurves)(a.bounds, a.style.border, a.style.borderRadius)
                    }),
                this.image = S(t, r),
                this.bounds = L ? (0, x.reformatInputBounds)((0, H.parseBounds)(t, O, M)) : (0, H.parseBounds)(t, O, M),
                this.curvedBounds = (0, H.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius)
            }
            return r(e, [{
                key: "getClipPaths",
                value: function () {
                    var e = this.parent ? this.parent.getClipPaths() : [];
                    return this.style.overflow !== w.OVERFLOW.VISIBLE ? e.concat([(0, H.calculatePaddingBoxPath)(this.curvedBounds)]) : e
                }
            },
            {
                key: "isInFlow",
                value: function () {
                    return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned()
                }
            },
            {
                key: "isVisible",
                value: function () {
                    return !(0, a.contains)(this.style.display, u.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === b.VISIBILITY.VISIBLE
                }
            },
            {
                key: "isAbsolutelyPositioned",
                value: function () {
                    return this.style.position !== y.POSITION.STATIC && this.style.position !== y.POSITION.RELATIVE
                }
            },
            {
                key: "isPositioned",
                value: function () {
                    return this.style.position !== y.POSITION.STATIC
                }
            },
            {
                key: "isFloating",
                value: function () {
                    return this.style.float !== f.FLOAT.NONE
                }
            },
            {
                key: "isRootElement",
                value: function () {
                    return null === this.parent
                }
            },
            {
                key: "isTransformed",
                value: function () {
                    return null !== this.style.transform
                }
            },
            {
                key: "isPositionedWithZIndex",
                value: function () {
                    return this.isPositioned() && !this.style.zIndex.auto
                }
            },
            {
                key: "isInlineLevel",
                value: function () {
                    return (0, a.contains)(this.style.display, u.DISPLAY.INLINE) || (0, a.contains)(this.style.display, u.DISPLAY.INLINE_BLOCK) || (0, a.contains)(this.style.display, u.DISPLAY.INLINE_FLEX) || (0, a.contains)(this.style.display, u.DISPLAY.INLINE_GRID) || (0, a.contains)(this.style.display, u.DISPLAY.INLINE_LIST_ITEM) || (0, a.contains)(this.style.display, u.DISPLAY.INLINE_TABLE)
                }
            },
            {
                key: "isInlineBlockOrInlineTable",
                value: function () {
                    return (0, a.contains)(this.style.display, u.DISPLAY.INLINE_BLOCK) || (0, a.contains)(this.style.display, u.DISPLAY.INLINE_TABLE)
                }
            }]),
            e
        }();
    t.
default = I;
    var S = function (e, t) {
            if (e instanceof e.ownerDocument.defaultView.SVGSVGElement || e instanceof SVGSVGElement) {
                var A = new XMLSerializer;
                return t.loadImage("data:image/svg+xml," + encodeURIComponent(A.serializeToString(e)))
            }
            switch (e.tagName) {
            case "IMG":
                var n = e;
                return t.loadImage(n.currentSrc || n.src);
            case "CANVAS":
                var r = e;
                return t.loadCanvas(r);
            case "IFRAME":
                var i = e.getAttribute("data-html2canvas-internal-iframe-key");
                if (i) return i
            }
            return null
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.contains = function (e, t) {
        return 0 != (e & t)
    },
    t.distance = function (e, t) {
        return Math.sqrt(e * e + t * t)
    },
    t.copyCSSStyles = function (e, t) {
        for (var A = e.length - 1; A >= 0; A--) {
            var n = e.item(A);
            "content" !== n && t.style.setProperty(n, e.getPropertyValue(n))
        }
        return t
    },
    t.SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = [{
        index: 1,
        cc: "red",
        cl: "pink",
        cr: "blue",
        ctimu: "black"
    },
    {
        index: 2,
        cc: "blue",
        cl: "pink",
        cr: "yellow",
        ctimu: "white"
    },
    {
        index: 3,
        cc: "pink",
        cl: "yellow",
        cr: "red",
        ctimu: "purple"
    },
    {
        index: 4,
        cc: "yellow",
        cl: "red",
        cr: "blue",
        ctimu: "red"
    },
    {
        index: 5,
        cc: "purple",
        cl: "green",
        cr: "red",
        ctimu: "black"
    },
    {
        index: 6,
        cc: "green",
        cl: "gray",
        cr: "blue",
        ctimu: "black"
    }],
        r = {
            red: "rgb(210, 56, 46)",
            blue: "rgb(118, 146, 255)",
            pink: "rgb(244, 175, 180)",
            green: "rgb(33, 194, 150)",
            gray: "rgb(238, 239, 233)",
            yellow: "rgb(254, 230, 202)",
            purple: "rgb(146, 121, 212)"
        };
    t.
default = {
            cardInfos: n,
            colorMap: r
        },
    e.exports = t.
default
},


function (e, t, A) {
    var n = A(58);
    e.exports = function (e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
    }
},


function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
},
, , , function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseBackgroundImage = t.parseBackground = t.calculateBackgroundRepeatPath = t.calculateBackgroundPosition = t.calculateBackgroungPositioningArea = t.calculateBackgroungPaintingArea = t.calculateGradientBackgroundSize = t.calculateBackgroundSize = t.BACKGROUND_ORIGIN = t.BACKGROUND_CLIP = t.BACKGROUND_SIZE = t.BACKGROUND_REPEAT = void 0;
    var i = A(37),
        o = n(i),
        a = A(53),
        s = n(a),
        c = A(723),
        l = n(c),
        u = A(100),
        f = n(u),
        d = A(36),
        h = A(242),
        p = t.BACKGROUND_REPEAT = {
            REPEAT: 0,
            NO_REPEAT: 1,
            REPEAT_X: 2,
            REPEAT_Y: 3
        },
        g = t.BACKGROUND_SIZE = {
            AUTO: 0,
            CONTAIN: 1,
            COVER: 2,
            LENGTH: 3
        },
        B = t.BACKGROUND_CLIP = {
            BORDER_BOX: 0,
            PADDING_BOX: 1,
            CONTENT_BOX: 2
        },
        w = t.BACKGROUND_ORIGIN = B,
        m = function e(t) {
            switch (r(this, e), t) {
            case "contain":
                this.size = g.CONTAIN;
                break;
            case "cover":
                this.size = g.COVER;
                break;
            case "auto":
                this.size = g.AUTO;
                break;
            default:
                this.value = new s.
            default (t)
            }
        },
        v = (t.calculateBackgroundSize = function (e, t, A) {
            var n = 0,
                r = 0,
                i = e.size;
            if (i[0].size === g.CONTAIN || i[0].size === g.COVER) {
                    var o = A.width / A.height,
                        a = t.width / t.height;
                    return o < a != (i[0].size === g.COVER) ? new l.
                default (A.width, A.width / a):
                    new l.
                default (A.height * a, A.height)
                }
            return i[0].value && (n = i[0].value.getAbsoluteValue(A.width)),
            i[0].size === g.AUTO && i[1].size === g.AUTO ? r = t.height : i[1].size === g.AUTO ? r = n / t.width * t.height : i[1].value && (r = i[1].value.getAbsoluteValue(A.height)),
            i[0].size === g.AUTO && (n = r / t.height * t.width),
            new l.
        default (n, r)
        }, t.calculateGradientBackgroundSize = function (e, t) {
            var A = e.size,
                n = A[0].value ? A[0].value.getAbsoluteValue(t.width) : t.width,
                r = A[1].value ? A[1].value.getAbsoluteValue(t.height) : A[0].value ? n : t.height;
            return new l.
        default (n, r)
        }, new m("auto")),
        y = (t.calculateBackgroungPaintingArea = function (e, t) {
            switch (t) {
            case B.BORDER_BOX:
                return (0, d.calculateBorderBoxPath)(e);
            case B.PADDING_BOX:
            default:
                return (0, d.calculatePaddingBoxPath)(e)
            }
        }, t.calculateBackgroungPositioningArea = function (e, t, A, n) {
            var r = (0, d.calculatePaddingBox)(t, n);
            switch (e) {
            case w.BORDER_BOX:
                return t;
            case w.CONTENT_BOX:
                var i = A[h.PADDING_SIDES.LEFT].getAbsoluteValue(t.width),
                    o = A[h.PADDING_SIDES.RIGHT].getAbsoluteValue(t.width),
                    a = A[h.PADDING_SIDES.TOP].getAbsoluteValue(t.width),
                    s = A[h.PADDING_SIDES.BOTTOM].getAbsoluteValue(t.width);
                return new d.Bounds(r.left + i, r.top + a, r.width - i - o, r.height - a - s);
            case w.PADDING_BOX:
            default:
                return r
            }
        }, t.calculateBackgroundPosition = function (e, t, A) {
            return new f.
        default (e[0].getAbsoluteValue(A.width - t.width), e[1].getAbsoluteValue(A.height - t.height))
        }, t.calculateBackgroundRepeatPath = function (e, t, A, n, r) {
            switch (e.repeat) {
            case p.REPEAT_X:
                return [new f.
            default (Math.round(r.left), Math.round(n.top + t.y)), new f.
            default (Math.round(r.left + r.width), Math.round(n.top + t.y)), new f.
            default (Math.round(r.left + r.width), Math.round(A.height + n.top + t.y)), new f.
            default (Math.round(r.left), Math.round(A.height + n.top + t.y))];
            case p.REPEAT_Y:
                return [new f.
            default (Math.round(n.left + t.x), Math.round(r.top)), new f.
            default (Math.round(n.left + t.x + A.width), Math.round(r.top)), new f.
            default (Math.round(n.left + t.x + A.width), Math.round(r.height + r.top)), new f.
            default (Math.round(n.left + t.x), Math.round(r.height + r.top))];
            case p.NO_REPEAT:
                return [new f.
            default (Math.round(n.left + t.x), Math.round(n.top + t.y)), new f.
            default (Math.round(n.left + t.x + A.width), Math.round(n.top + t.y)), new f.
            default (Math.round(n.left + t.x + A.width), Math.round(n.top + t.y + A.height)), new f.
            default (Math.round(n.left + t.x), Math.round(n.top + t.y + A.height))];
            default:
                return [new f.
            default (Math.round(r.left), Math.round(r.top)), new f.
            default (Math.round(r.left + r.width), Math.round(r.top)), new f.
            default (Math.round(r.left + r.width), Math.round(r.height + r.top)), new f.
            default (Math.round(r.left), Math.round(r.height + r.top))]
            }
        }, t.parseBackground = function (e, t) {
            return {
                backgroundColor: new o.
            default (e.backgroundColor),
                backgroundImage:
                C(e, t),
                backgroundClip: y(e.backgroundClip),
                backgroundOrigin: E(e.backgroundOrigin)
            }
        }, function (e) {
            switch (e) {
            case "padding-box":
                return B.PADDING_BOX;
            case "content-box":
                return B.CONTENT_BOX
            }
            return B.BORDER_BOX
        }),
        E = function (e) {
            switch (e) {
            case "padding-box":
                return w.PADDING_BOX;
            case "content-box":
                return w.CONTENT_BOX
            }
            return w.BORDER_BOX
        },
        Q = function (e) {
            switch (e.trim()) {
            case "no-repeat":
                return p.NO_REPEAT;
            case "repeat-x":
            case "repeat no-repeat":
                return p.REPEAT_X;
            case "repeat-y":
            case "no-repeat repeat":
                return p.REPEAT_Y;
            case "repeat":
                return p.REPEAT
            }
            return p.REPEAT
        },
        C = function (e, t) {
            var A = F(e.backgroundImage).map(function (e) {
                if ("url" === e.method) {
                    var A = t.loadImage(e.args[0]);
                    e.args = A ? [A] : []
                }
                return e
            }),
                n = e.backgroundPosition.split(","),
                r = e.backgroundRepeat.split(","),
                i = e.backgroundSize.split(",");
            return A.map(function (e, t) {
                    var A = (i[t] || "auto").trim().split(" ").map(U),
                        o = (n[t] || "auto").trim().split(" ").map(b);
                    return {
                            source: e,
                            repeat: Q("string" == typeof r[t] ? r[t] : r[0]),
                            size: A.length < 2 ? [A[0], v] : [A[0], A[1]],
                            position: o.length < 2 ? [o[0], o[0]] : [o[0], o[1]]
                        }
                })
        },
        U = function (e) {
            return "auto" === e ? v : new m(e)
        },
        b = function (e) {
            switch (e) {
            case "bottom":
            case "right":
                return new s.
            default ("100%");
            case "left":
            case "top":
                return new s.
            default ("0%");
            case "auto":
                return new s.
            default ("0")
            }
            return new s.
        default (e)
        },
        F = t.parseBackgroundImage = function (e) {
            var t = /^\s$/,
                A = [],
                n = [],
                r = "",
                i = null,
                o = "",
                a = 0,
                s = 0,
                c = function () {
                    var e = "";
                    if (r) {
                        '"' === o.substr(0, 1) && (o = o.substr(1, o.length - 2)),
                        o && n.push(o.trim());
                        var t = r.indexOf("-", 1) + 1;
                        "-" === r.substr(0, 1) && t > 0 && (e = r.substr(0, t).toLowerCase(), r = r.substr(t)),
                        r = r.toLowerCase(),
                        "none" !== r && A.push({
                            prefix: e,
                            method: r,
                            args: n
                        })
                    }
                    n = [],
                    r = o = ""
                };
            return e.split("").forEach(function (e) {
                    if (0 !== a || !t.test(e)) {
                        switch (e) {
                        case '"':
                            i ? i === e && (i = null) : i = e;
                            break;
                        case "(":
                            if (i) break;
                            if (0 === a) return void(a = 1);
                            s++;
                            break;
                        case ")":
                            if (i) break;
                            if (1 === a) {
                                if (0 === s) return a = 0,
                                void c();
                                s--
                            }
                            break;
                        case ",":
                            if (i) break;
                            if (0 === a) return void c();
                            if (1 === a && 0 === s && !r.match(/^url$/i)) return n.push(o.trim()),
                            void(o = "")
                        }
                        0 === a ? r += e : o += e
                    }
                }),
            c(),
            A
        }
},


function (e, t, A) {
    e.exports = {
    default:
        A(305),
        __esModule: !0
    }
},


function (e, t, A) {
    "use strict";
    t.__esModule = !0,
    t.
default = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
},


function (e, t, A) {
    "use strict";
    t.__esModule = !0;
    var n = A(293),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n);
    t.
default = function () {
            function e(e, t) {
                for (var A = 0; A < t.length; A++) {
                    var n = t[A];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    (0, r.
                default)(e, n.key, n)
                }
            }
            return function (t, A, n) {
                return A && e(t.prototype, A),
                n && e(t, n),
                t
            }
        }()
},


function (e, t, A) {
    var n = A(167),
        r = A(106);
    e.exports = Object.keys ||
    function (e) {
            return n(e, r)
        }
},


function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
},


function (e, t) {
    var A = 0,
        n = Math.random();
    e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++A + n).toString(36))
        }
},
, , , , , , , , , , , , , , function (e, t, A) {
    "use strict";
    var n = A(544)();
    e.exports = function (e) {
        return e !== n && null !== e
    }
},
, function (e, t, A) {
    e.exports = A.p + "client/img/lines.fedd23ff.png"
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = A(246),
        r = function (e) {
            if (e.createRange) {
                var t = e.createRange();
                if (t.getBoundingClientRect) {
                    var A = e.createElement("boundtest");
                    A.style.height = "123px",
                    A.style.display = "block",
                    e.body.appendChild(A),
                    t.selectNode(A);
                    var n = t.getBoundingClientRect(),
                        r = Math.round(n.height);
                    if (e.body.removeChild(A), 123 === r) return !0
                }
            }
            return !1
        },
        i = function (e, t) {
            var A = new Image,
                n = e.createElement("canvas"),
                r = n.getContext("2d");
            return new Promise(function (e) {
                    A.src = t;
                    var i = function () {
                        try {
                            r.drawImage(A, 0, 0),
                            n.toDataURL()
                        } catch (t) {
                            return e(!1)
                        }
                        return e(!0)
                    };
                    A.onload = i,
                    A.onerror = function () {
                        return e(!1)
                    },
                    !0 === A.complete && setTimeout(function () {
                        i()
                    }, 500)
                })
        },
        o = function () {
            return void 0 !== (new Image).crossOrigin
        },
        a = function () {
            return "string" == typeof(new XMLHttpRequest).responseType
        },
        s = function (e) {
            var t = new Image,
                A = e.createElement("canvas"),
                n = A.getContext("2d");
            t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
            try {
                    n.drawImage(t, 0, 0),
                    A.toDataURL()
                } catch (e) {
                    return !1
                }
            return !0
        },
        c = function (e) {
            return 0 === e[0] && 255 === e[1] && 0 === e[2] && 255 === e[3]
        },
        l = function (e) {
            var t = e.createElement("canvas");
            t.width = 100,
            t.height = 100;
            var A = t.getContext("2d");
            A.fillStyle = "rgb(0, 255, 0)",
            A.fillRect(0, 0, 100, 100);
            var r = new Image,
                i = t.toDataURL();
            r.src = i;
            var o = (0, n.createForeignObjectSVG)(100, 100, 0, 0, r);
            return A.fillStyle = "red",
            A.fillRect(0, 0, 100, 100),
            (0, n.loadSerializedSVG)(o).then(function (t) {
                    A.drawImage(t, 0, 0);
                    var r = A.getImageData(0, 0, 100, 100).data;
                    A.fillStyle = "red",
                    A.fillRect(0, 0, 100, 100);
                    var o = e.createElement("div");
                    return o.style.backgroundImage = "url(" + i + ")",
                    o.style.height = "100px",
                    c(r) ? (0, n.loadSerializedSVG)((0, n.createForeignObjectSVG)(100, 100, 0, 0, o)) : Promise.reject(!1)
                }).then(function (e) {
                    return A.drawImage(e, 0, 0),
                    c(A.getImageData(0, 0, 100, 100).data)
                }).
            catch (function (e) {
                    return !1
                })
        },
        u = {
            get SUPPORT_RANGE_BOUNDS() {
                var e = r(document);
                return Object.defineProperty(u, "SUPPORT_RANGE_BOUNDS", {
                    value: e
                }),
                e
            },
            get SUPPORT_SVG_DRAWING() {
                var e = s(document);
                return Object.defineProperty(u, "SUPPORT_SVG_DRAWING", {
                    value: e
                }),
                e
            },
            get SUPPORT_BASE64_DRAWING() {
                return function (e) {
                    var t = i(document, e);
                    return Object.defineProperty(u, "SUPPORT_BASE64_DRAWING", {
                        value: function () {
                            return t
                        }
                    }),
                    t
                }
            },
            get SUPPORT_FOREIGNOBJECT_DRAWING() {
                var e = "function" == typeof Array.from && "function" == typeof window.fetch ? l(document) : Promise.resolve(!1);
                return Object.defineProperty(u, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                    value: e
                }),
                e
            },
            get SUPPORT_CORS_IMAGES() {
                var e = o();
                return Object.defineProperty(u, "SUPPORT_CORS_IMAGES", {
                    value: e
                }),
                e
            },
            get SUPPORT_RESPONSE_TYPE() {
                var e = a();
                return Object.defineProperty(u, "SUPPORT_RESPONSE_TYPE", {
                    value: e
                }),
                e
            },
            get SUPPORT_CORS_XHR() {
                var e = "withCredentials" in new XMLHttpRequest;
                return Object.defineProperty(u, "SUPPORT_CORS_XHR", {
                    value: e
                }),
                e
            }
        };
    t.
default = u
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t, A) {
        return e.length > 0 ? t + A.toUpperCase() : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        o = A(244),
        a = A(239),
        s = function () {
            function e(t, A, r) {
                n(this, e),
                this.text = t,
                this.parent = A,
                this.bounds = r
            }
            return i(e, null, [{
                key: "fromTextNode",
                value: function (t, A) {
                    var n = l(t.data, A.style.textTransform);
                    return new e(n, A, (0, a.parseTextBounds)(n, A, t))
                }
            }]),
            e
        }();
    t.
default = s;
    var c = /(^|\s|:|-|\(|\))([a-z])/g,
        l = function (e, t) {
            switch (t) {
            case o.TEXT_TRANSFORM.LOWERCASE:
                return e.toLowerCase();
            case o.TEXT_TRANSFORM.CAPITALIZE:
                return e.replace(c, r);
            case o.TEXT_TRANSFORM.UPPERCASE:
                return e.toUpperCase();
            default:
                return e
            }
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.PATH = {
        VECTOR: 0,
        BEZIER_CURVE: 1,
        CIRCLE: 2
    }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = A(99),
        i = function e(t, A) {
            n(this, e),
            this.type = r.PATH.VECTOR,
            this.x = t,
            this.y = A
        };
    t.
default = i
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseListStyle = t.parseListStyleType = t.LIST_STYLE_TYPE = t.LIST_STYLE_POSITION = void 0;
    var n = A(73),
        r = t.LIST_STYLE_POSITION = {
            INSIDE: 0,
            OUTSIDE: 1
        },
        i = t.LIST_STYLE_TYPE = {
            NONE: -1,
            DISC: 0,
            CIRCLE: 1,
            SQUARE: 2,
            DECIMAL: 3,
            CJK_DECIMAL: 4,
            DECIMAL_LEADING_ZERO: 5,
            LOWER_ROMAN: 6,
            UPPER_ROMAN: 7,
            LOWER_GREEK: 8,
            LOWER_ALPHA: 9,
            UPPER_ALPHA: 10,
            ARABIC_INDIC: 11,
            ARMENIAN: 12,
            BENGALI: 13,
            CAMBODIAN: 14,
            CJK_EARTHLY_BRANCH: 15,
            CJK_HEAVENLY_STEM: 16,
            CJK_IDEOGRAPHIC: 17,
            DEVANAGARI: 18,
            ETHIOPIC_NUMERIC: 19,
            GEORGIAN: 20,
            GUJARATI: 21,
            GURMUKHI: 22,
            HEBREW: 22,
            HIRAGANA: 23,
            HIRAGANA_IROHA: 24,
            JAPANESE_FORMAL: 25,
            JAPANESE_INFORMAL: 26,
            KANNADA: 27,
            KATAKANA: 28,
            KATAKANA_IROHA: 29,
            KHMER: 30,
            KOREAN_HANGUL_FORMAL: 31,
            KOREAN_HANJA_FORMAL: 32,
            KOREAN_HANJA_INFORMAL: 33,
            LAO: 34,
            LOWER_ARMENIAN: 35,
            MALAYALAM: 36,
            MONGOLIAN: 37,
            MYANMAR: 38,
            ORIYA: 39,
            PERSIAN: 40,
            SIMP_CHINESE_FORMAL: 41,
            SIMP_CHINESE_INFORMAL: 42,
            TAMIL: 43,
            TELUGU: 44,
            THAI: 45,
            TIBETAN: 46,
            TRAD_CHINESE_FORMAL: 47,
            TRAD_CHINESE_INFORMAL: 48,
            UPPER_ARMENIAN: 49,
            DISCLOSURE_OPEN: 50,
            DISCLOSURE_CLOSED: 51
        },
        o = t.parseListStyleType = function (e) {
            switch (e) {
            case "disc":
                return i.DISC;
            case "circle":
                return i.CIRCLE;
            case "square":
                return i.SQUARE;
            case "decimal":
                return i.DECIMAL;
            case "cjk-decimal":
                return i.CJK_DECIMAL;
            case "decimal-leading-zero":
                return i.DECIMAL_LEADING_ZERO;
            case "lower-roman":
                return i.LOWER_ROMAN;
            case "upper-roman":
                return i.UPPER_ROMAN;
            case "lower-greek":
                return i.LOWER_GREEK;
            case "lower-alpha":
                return i.LOWER_ALPHA;
            case "upper-alpha":
                return i.UPPER_ALPHA;
            case "arabic-indic":
                return i.ARABIC_INDIC;
            case "armenian":
                return i.ARMENIAN;
            case "bengali":
                return i.BENGALI;
            case "cambodian":
                return i.CAMBODIAN;
            case "cjk-earthly-branch":
                return i.CJK_EARTHLY_BRANCH;
            case "cjk-heavenly-stem":
                return i.CJK_HEAVENLY_STEM;
            case "cjk-ideographic":
                return i.CJK_IDEOGRAPHIC;
            case "devanagari":
                return i.DEVANAGARI;
            case "ethiopic-numeric":
                return i.ETHIOPIC_NUMERIC;
            case "georgian":
                return i.GEORGIAN;
            case "gujarati":
                return i.GUJARATI;
            case "gurmukhi":
                return i.GURMUKHI;
            case "hebrew":
                return i.HEBREW;
            case "hiragana":
                return i.HIRAGANA;
            case "hiragana-iroha":
                return i.HIRAGANA_IROHA;
            case "japanese-formal":
                return i.JAPANESE_FORMAL;
            case "japanese-informal":
                return i.JAPANESE_INFORMAL;
            case "kannada":
                return i.KANNADA;
            case "katakana":
                return i.KATAKANA;
            case "katakana-iroha":
                return i.KATAKANA_IROHA;
            case "khmer":
                return i.KHMER;
            case "korean-hangul-formal":
                return i.KOREAN_HANGUL_FORMAL;
            case "korean-hanja-formal":
                return i.KOREAN_HANJA_FORMAL;
            case "korean-hanja-informal":
                return i.KOREAN_HANJA_INFORMAL;
            case "lao":
                return i.LAO;
            case "lower-armenian":
                return i.LOWER_ARMENIAN;
            case "malayalam":
                return i.MALAYALAM;
            case "mongolian":
                return i.MONGOLIAN;
            case "myanmar":
                return i.MYANMAR;
            case "oriya":
                return i.ORIYA;
            case "persian":
                return i.PERSIAN;
            case "simp-chinese-formal":
                return i.SIMP_CHINESE_FORMAL;
            case "simp-chinese-informal":
                return i.SIMP_CHINESE_INFORMAL;
            case "tamil":
                return i.TAMIL;
            case "telugu":
                return i.TELUGU;
            case "thai":
                return i.THAI;
            case "tibetan":
                return i.TIBETAN;
            case "trad-chinese-formal":
                return i.TRAD_CHINESE_FORMAL;
            case "trad-chinese-informal":
                return i.TRAD_CHINESE_INFORMAL;
            case "upper-armenian":
                return i.UPPER_ARMENIAN;
            case "disclosure-open":
                return i.DISCLOSURE_OPEN;
            case "disclosure-closed":
                return i.DISCLOSURE_CLOSED;
            case "none":
            default:
                return i.NONE
            }
        },
        a = (t.parseListStyle = function (e) {
            var t = (0, n.parseBackgroundImage)(e.getPropertyValue("list-style-image"));
            return {
                listStyleType: o(e.getPropertyValue("list-style-type")),
                listStyleImage: t.length ? t[0] : null,
                listStylePosition: a(e.getPropertyValue("list-style-position"))
            }
        }, function (e) {
            switch (e) {
            case "inside":
                return r.INSIDE;
            case "outside":
            default:
                return r.OUTSIDE
            }
        })
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r() {
        return "//music.163.com/song/media/outer/url?id=" + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = A(154),
        o = n(i),
        a = A(273),
        s = n(a);
    t.
default = {
            Audio: o.
        default,
            getSongURL:
            r,
            tracks: new s.
        default
        },
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PIC_URL = void 0;
    var r = A(104),
        i = n(r),
        o = A(155),
        a = n(o),
        s = A(16),
        c = n(s),
        l = A(754),
        u = n(l),
        f = A(150),
        d = n(f);
    window.api = window.api || {};
    var h = window.api,
        p = t.PIC_URL = "https://p4.music.126.net/FtW_Z9lkb47ObTsGSSBlPg==/19135900369963408.jpg",
        g = !! /music\.163\.com$/.test(location.host),
        B = g ? "music.163.com" : "igame.163.com",
        w = function () {
            return /micromessenger/i.test(navigator.userAgent)
        },
        m = function () {
            var e = {
                qqfriend: "qq",
                qqtimeline: "qzone",
                wxfriend: "wxsession",
                wxtimeline: "wxtimeline",
                yxfriend: "yxsession",
                yxtimeline: "yxtimeline",
                wb: "sina",
                db: "douban"
            };
            return function (t) {
                return e[t] || t
            }
        }(),
        v = {
            init: function () {
                this.onAppShare = this.onAppShare.bind(this),
                this.shareCb = this.shareCb.bind(this),
                this.onWechatReady = this.onWechatReady.bind(this),
                this.updateShareData = this.updateShareData.bind(this),
                this.setShareData.apply(this, arguments),
                c.
            default.isInNEMapp() && this.registMusicShare(),
                w() && this.registWechatShare()
            },
            setShareData: function (e) {
                var t = e.type,
                    A = e.name,
                    n = e.id,
                    r = e.title,
                    i = e.subTitle,
                    o = e.text,
                    s = e.picUrl,
                    c = void 0 === s ? p : s,
                    l = e.link;
                if (void 0 === A && void 0 === this.name) throw new Error("[ShareConfig] 必须提供活动名name");
                this.type = t || this.type || "webviewactivity",
                this.name = A || this.name,
                this.id = n || this.id,
                this.title = r || this.title || document.title,
                this.subTitle = i || this.subTitle || "music.163.com",
                this.text = o || this.text || this.title,
                this.picUrl = c || this.picUrl,
                this.link = l || this.link || location.href,
                this.logger = new a.
            default (this.name)
            },
            getShareData: function () {
                return {
                    type: this.type,
                    name: this.name,
                    id: this.id,
                    title: this.title,
                    subTitle: this.subTitle,
                    text: this.text,
                    picUrl: this.picUrl,
                    link: this.link
                }
            },
            updateShareData: function () {
                this.setShareData.apply(this, arguments),
                this.registWechatShare()
            },
            registMusicShare: function () {
                setTimeout(function () {
                    location.href = "orpheus://settopbutton?" + d.
                default.stringify({
                        title: "分享",
                        icon: "share",
                        callback: "onAppShare()",
                        show: !0,
                        playshow: !0
                    })
                }, 100),
                window.onAppShare = this.onAppShare,
                h.shareCb = this.shareCb
            },
            registWechatShare: function () {
                if (w()) {
                    var e = this,
                        t = function (t) {
                            u.
                        default.config({
                                debug: !1,
                                appId: t.appId,
                                timestamp: t.timestamp,
                                nonceStr: t.noncestr,
                                signature: t.signature,
                                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
                            }),
                            u.
                        default.ready(e.onWechatReady),
                            e.hasWechatToken = !0
                        };
                    if (this.hasWechatToken) return void this.onWechatReady();
                        (0, i.
                    default)("//" + B + "/api/wechat/jssdk/info", {
                            method: "get",
                            data: {
                                url: location.protocol + "//" + B + "/"
                            }
                        }).then(function (e) {
                            return e.json()
                        }).then(function (e) {
                            200 === e.code && t(e)
                        }).
                    catch (function (e) {})
                }
            },
            onWechatReady: function () {
                var e = /from=timeline/.test(location.search) ? "wxtimeline" : "wxsession",
                    t = this,
                    A = function (A) {
                        t.logger.action("indirectshare", {
                            type: t.type,
                            url: t.link,
                            from: e,
                            to: A,
                            target: t.name,
                            is_webview: 1
                        })
                    };
                u.
            default.onMenuShareAppMessage({
                        title: this.title,
                        desc: this.subTitle,
                        link: this.link,
                        imgUrl: this.picUrl,
                        success: A.bind(null, "wxsession")
                    }),
                u.
            default.onMenuShareTimeline({
                        title: this.text,
                        link: this.link,
                        imgUrl: this.picUrl,
                        success: A.bind(null, "wxtimeline")
                    })
            },
            onAppShare: function () {
                var e = [];
                e.push(encodeURIComponent(this.text)),
                e.push(encodeURIComponent(this.picUrl)),
                e.push(encodeURIComponent(this.link)),
                e.push(encodeURIComponent(this.title)),
                e.push(encodeURIComponent(this.subTitle)),
                setTimeout(function () {
                    location.href = "orpheus://share/" + e.join("/")
                }, 20),
                this.logger.action("click", {
                    target: "share",
                    targetid: "button",
                    resource: this.type,
                    url: this.link,
                    activity: this.name,
                    is_webview: 0
                })
            },
            shareCb: function (e, t) {
                e && this.logger.action("click", {
                    target: "share",
                    targetid: m(t || ""),
                    resource: this.type,
                    url: this.link,
                    activity: this.name,
                    is_webview: 0
                })
            }
        };
    t.
default = v
},


function (module, exports, __webpack_require__) {
    !
    function (e, t) {
        module.exports = t()
    }(0, function () {
        return function (e) {
            function t(n) {
                if (A[n]) return A[n].exports;
                var r = A[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(r.exports, r, r.exports, t),
                r.l = !0,
                r.exports
            }
            var A = {};
            return t.m = e,
            t.c = A,
            t.i = function (e) {
                return e
            },
            t.d = function (e, A, n) {
                t.o(e, A) || Object.defineProperty(e, A, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            },
            t.n = function (e) {
                var A = e && e.__esModule ?
                function () {
                    return e.
                default
                } : function () {
                    return e
                };
                return t.d(A, "a", A),
                A
            },
            t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            t.p = "",
            t(t.s = 8)
        }([function (e, t, A) {
            function n(e, t) {
                for (var A in t) t.hasOwnProperty(A) && null == e[A] && (e[A] = t[A]);
                return e
            }
            function r(e) {
                var t = {};
                return e.split("&").forEach(function (e) {
                    var A = e.split("=");
                    if (A.length) {
                        var n = A.shift();
                        n && (t[decodeURIComponent(n)] = decodeURIComponent(A.join("=")))
                    }
                }),
                t
            }
            function i(e) {
                var t = "";
                for (var A in e) void 0 !== e[A] && (t += encodeURIComponent(A) + "=" + encodeURIComponent(e[A]) + "&");
                return t.slice(0, -1)
            }
            function o(e) {
                if ("undefined" != typeof document) {
                    var t = document.cookie,
                        A = "\\b" + e + "=",
                        n = t.search(A);
                    if (n < 0) return "";
                    n += A.length - 2;
                    var r = t.indexOf(";", n);
                    return r < 0 && (r = t.length),
                    t.substring(n, r) || ""
                }
            }
            var a = A(3),
                s = a.asrsea,
                c = a.ecnonasr,
                l = A(4),
                u = l.emj2code,
                f = l.BASE_CODE;
            e.exports = {
                    extend: n,
                    obj2query: i,
                    query2obj: r,
                    getCookie: o,
                    asrsea: s,
                    ecnonasr: c,
                    emj2code: u,
                    BASE_CODE: f
                }
        },


        function (e, t, A) {
            function n(e, t) {
                t = t || {};
                var A = o({
                    url: e,
                    type: t.type || "json",
                    method: t.method || "get",
                    data: t.body || t.data,
                    crossOrigin: !t.noCrossOrigin,
                    withCredentials: void 0 === t.withCredentials || t.withCredentials
                }, t);
                return !1 === t.async ? r(A) : new Promise(function (e, t) {
                    A.error = function (e) {
                        t(e)
                    },
                    A.success = function (t) {
                        e({
                            json: Promise.resolve.bind(Promise, t)
                        })
                    },
                    r(A)
                })
            }
            var r = A(6),
                i = A(0),
                o = i.extend;
            e.exports = n
        },


        function (e, t) {
            var A = function (e, t) {
                var A = {},
                    n = A.lib = {},
                    r = function () {},
                    i = n.Base = {
                        extend: function (e) {
                            r.prototype = this;
                            var t = new r;
                            return e && t.mixIn(e),
                            t.hasOwnProperty("init") || (t.init = function () {
                                t.$super.init.apply(this, arguments)
                            }),
                            t.init.prototype = t,
                            t.$super = this,
                            t
                        },
                        create: function () {
                            var e = this.extend();
                            return e.init.apply(e, arguments),
                            e
                        },
                        init: function () {},
                        mixIn: function (e) {
                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString)
                        },
                        clone: function () {
                            return this.init.prototype.extend(this)
                        }
                    },
                    o = n.WordArray = i.extend({
                        init: function (e, t) {
                            e = this.words = e || [],
                            this.sigBytes = void 0 != t ? t : 4 * e.length
                        },
                        toString: function (e) {
                            return (e || s).stringify(this)
                        },
                        concat: function (e) {
                            var t = this.words,
                                A = e.words,
                                n = this.sigBytes;
                            if (e = e.sigBytes, this.clamp(), n % 4) for (var r = 0; r < e; r++) t[n + r >>> 2] |= (A[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (n + r) % 4 * 8;
                            else if (65535 < A.length) for (r = 0; r < e; r += 4) t[n + r >>> 2] = A[r >>> 2];
                            else t.push.apply(t, A);
                            return this.sigBytes += e,
                            this
                        },
                        clamp: function () {
                            var t = this.words,
                                A = this.sigBytes;
                            t[A >>> 2] &= 4294967295 << 32 - A % 4 * 8,
                            t.length = e.ceil(A / 4)
                        },
                        clone: function () {
                            var e = i.clone.call(this);
                            return e.words = this.words.slice(0),
                            e
                        },
                        random: function (t) {
                            for (var A = [], n = 0; n < t; n += 4) A.push(4294967296 * e.random() | 0);
                            return new o.init(A, t)
                        }
                    }),
                    a = A.enc = {},
                    s = a.Hex = {
                        stringify: function (e) {
                            var t = e.words;
                            e = e.sigBytes;
                            for (var A = [], n = 0; n < e; n++) {
                                var r = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                A.push((r >>> 4).toString(16)),
                                A.push((15 & r).toString(16))
                            }
                            return A.join("")
                        },
                        parse: function (e) {
                            for (var t = e.length, A = [], n = 0; n < t; n += 2) A[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                            return new o.init(A, t / 2)
                        }
                    },
                    c = a.Latin1 = {
                        stringify: function (e) {
                            var t = e.words;
                            e = e.sigBytes;
                            for (var A = [], n = 0; n < e; n++) A.push(String.fromCharCode(t[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                            return A.join("")
                        },
                        parse: function (e) {
                            for (var t = e.length, A = [], n = 0; n < t; n++) A[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                            return new o.init(A, t)
                        }
                    },
                    l = a.Utf8 = {
                        stringify: function (e) {
                            try {
                                return decodeURIComponent(escape(c.stringify(e)))
                            } catch (e) {
                                throw Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function (e) {
                            return c.parse(unescape(encodeURIComponent(e)))
                        }
                    },
                    u = n.BufferedBlockAlgorithm = i.extend({
                        reset: function () {
                            this._data = new o.init,
                            this._nDataBytes = 0
                        },
                        _append: function (e) {
                            "string" == typeof e && (e = l.parse(e)),
                            this._data.concat(e),
                            this._nDataBytes += e.sigBytes
                        },
                        _process: function (t) {
                            var A = this._data,
                                n = A.words,
                                r = A.sigBytes,
                                i = this.blockSize,
                                a = r / (4 * i),
                                a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0);
                            if (t = a * i, r = e.min(4 * t, r), t) {
                                    for (var s = 0; s < t; s += i) this._doProcessBlock(n, s);
                                    s = n.splice(0, t),
                                    A.sigBytes -= r
                                }
                            return new o.init(s, r)
                        },
                        clone: function () {
                            var e = i.clone.call(this);
                            return e._data = this._data.clone(),
                            e
                        },
                        _minBufferSize: 0
                    });
                n.Hasher = u.extend({
                        cfg: i.extend(),
                        init: function (e) {
                            this.cfg = this.cfg.extend(e),
                            this.reset()
                        },
                        reset: function () {
                            u.reset.call(this),
                            this._doReset()
                        },
                        update: function (e) {
                            return this._append(e),
                            this._process(),
                            this
                        },
                        finalize: function (e) {
                            return e && this._append(e),
                            this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function (e) {
                            return function (t, A) {
                                return new e.init(A).finalize(t)
                            }
                        },
                        _createHmacHelper: function (e) {
                            return function (t, A) {
                                return new f.HMAC.init(e, A).finalize(t)
                            }
                        }
                    });
                var f = A.algo = {};
                return A
            }(Math);
            !
            function () {
                var e = A,
                    t = e.lib.WordArray;
                e.enc.Base64 = {
                        stringify: function (e) {
                            var t = e.words,
                                A = e.sigBytes,
                                n = this._map;
                            e.clamp(),
                            e = [];
                            for (var r = 0; r < A; r += 3) for (var i = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, o = 0; 4 > o && r + .75 * o < A; o++) e.push(n.charAt(i >>> 6 * (3 - o) & 63));
                            if (t = n.charAt(64)) for (; e.length % 4;) e.push(t);
                            return e.join("")
                        },
                        parse: function (e) {
                            var A = e.length,
                                n = this._map,
                                r = n.charAt(64);
                            r && -1 != (r = e.indexOf(r)) && (A = r);
                            for (var r = [], i = 0, o = 0; o < A; o++) if (o % 4) {
                                    var a = n.indexOf(e.charAt(o - 1)) << o % 4 * 2,
                                        s = n.indexOf(e.charAt(o)) >>> 6 - o % 4 * 2;
                                    r[i >>> 2] |= (a | s) << 24 - i % 4 * 8,
                                    i++
                                }
                            return t.create(r, i)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
            }(),


            function (e) {
                function t(e, t, A, n, r, i, o) {
                    return ((e = e + (t & A | ~t & n) + r + o) << i | e >>> 32 - i) + t
                }
                function n(e, t, A, n, r, i, o) {
                    return ((e = e + (t & n | A & ~n) + r + o) << i | e >>> 32 - i) + t
                }
                function r(e, t, A, n, r, i, o) {
                    return ((e = e + (t ^ A ^ n) + r + o) << i | e >>> 32 - i) + t
                }
                function i(e, t, A, n, r, i, o) {
                    return ((e = e + (A ^ (t | ~n)) + r + o) << i | e >>> 32 - i) + t
                }
                for (var o = A, a = o.lib, s = a.WordArray, c = a.Hasher, a = o.algo, l = [], u = 0; 64 > u; u++) l[u] = 4294967296 * e.abs(e.sin(u + 1)) | 0;
                a = a.MD5 = c.extend({
                    _doReset: function () {
                        this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function (e, A) {
                        for (var o = 0; 16 > o; o++) {
                            var a = A + o,
                                s = e[a];
                            e[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                        }
                        var o = this._hash.words,
                            a = e[A + 0],
                            s = e[A + 1],
                            c = e[A + 2],
                            u = e[A + 3],
                            f = e[A + 4],
                            d = e[A + 5],
                            h = e[A + 6],
                            p = e[A + 7],
                            g = e[A + 8],
                            B = e[A + 9],
                            w = e[A + 10],
                            m = e[A + 11],
                            v = e[A + 12],
                            y = e[A + 13],
                            E = e[A + 14],
                            Q = e[A + 15],
                            C = o[0],
                            U = o[1],
                            b = o[2],
                            F = o[3],
                            C = t(C, U, b, F, a, 7, l[0]),
                            F = t(F, C, U, b, s, 12, l[1]),
                            b = t(b, F, C, U, c, 17, l[2]),
                            U = t(U, b, F, C, u, 22, l[3]),
                            C = t(C, U, b, F, f, 7, l[4]),
                            F = t(F, C, U, b, d, 12, l[5]),
                            b = t(b, F, C, U, h, 17, l[6]),
                            U = t(U, b, F, C, p, 22, l[7]),
                            C = t(C, U, b, F, g, 7, l[8]),
                            F = t(F, C, U, b, B, 12, l[9]),
                            b = t(b, F, C, U, w, 17, l[10]),
                            U = t(U, b, F, C, m, 22, l[11]),
                            C = t(C, U, b, F, v, 7, l[12]),
                            F = t(F, C, U, b, y, 12, l[13]),
                            b = t(b, F, C, U, E, 17, l[14]),
                            U = t(U, b, F, C, Q, 22, l[15]),
                            C = n(C, U, b, F, s, 5, l[16]),
                            F = n(F, C, U, b, h, 9, l[17]),
                            b = n(b, F, C, U, m, 14, l[18]),
                            U = n(U, b, F, C, a, 20, l[19]),
                            C = n(C, U, b, F, d, 5, l[20]),
                            F = n(F, C, U, b, w, 9, l[21]),
                            b = n(b, F, C, U, Q, 14, l[22]),
                            U = n(U, b, F, C, f, 20, l[23]),
                            C = n(C, U, b, F, B, 5, l[24]),
                            F = n(F, C, U, b, E, 9, l[25]),
                            b = n(b, F, C, U, u, 14, l[26]),
                            U = n(U, b, F, C, g, 20, l[27]),
                            C = n(C, U, b, F, y, 5, l[28]),
                            F = n(F, C, U, b, c, 9, l[29]),
                            b = n(b, F, C, U, p, 14, l[30]),
                            U = n(U, b, F, C, v, 20, l[31]),
                            C = r(C, U, b, F, d, 4, l[32]),
                            F = r(F, C, U, b, g, 11, l[33]),
                            b = r(b, F, C, U, m, 16, l[34]),
                            U = r(U, b, F, C, E, 23, l[35]),
                            C = r(C, U, b, F, s, 4, l[36]),
                            F = r(F, C, U, b, f, 11, l[37]),
                            b = r(b, F, C, U, p, 16, l[38]),
                            U = r(U, b, F, C, w, 23, l[39]),
                            C = r(C, U, b, F, y, 4, l[40]),
                            F = r(F, C, U, b, a, 11, l[41]),
                            b = r(b, F, C, U, u, 16, l[42]),
                            U = r(U, b, F, C, h, 23, l[43]),
                            C = r(C, U, b, F, B, 4, l[44]),
                            F = r(F, C, U, b, v, 11, l[45]),
                            b = r(b, F, C, U, Q, 16, l[46]),
                            U = r(U, b, F, C, c, 23, l[47]),
                            C = i(C, U, b, F, a, 6, l[48]),
                            F = i(F, C, U, b, p, 10, l[49]),
                            b = i(b, F, C, U, E, 15, l[50]),
                            U = i(U, b, F, C, d, 21, l[51]),
                            C = i(C, U, b, F, v, 6, l[52]),
                            F = i(F, C, U, b, u, 10, l[53]),
                            b = i(b, F, C, U, w, 15, l[54]),
                            U = i(U, b, F, C, s, 21, l[55]),
                            C = i(C, U, b, F, g, 6, l[56]),
                            F = i(F, C, U, b, Q, 10, l[57]),
                            b = i(b, F, C, U, h, 15, l[58]),
                            U = i(U, b, F, C, y, 21, l[59]),
                            C = i(C, U, b, F, f, 6, l[60]),
                            F = i(F, C, U, b, m, 10, l[61]),
                            b = i(b, F, C, U, c, 15, l[62]),
                            U = i(U, b, F, C, B, 21, l[63]);
                        o[0] = o[0] + C | 0,
                        o[1] = o[1] + U | 0,
                        o[2] = o[2] + b | 0,
                        o[3] = o[3] + F | 0
                    },
                    _doFinalize: function () {
                        var t = this._data,
                            A = t.words,
                            n = 8 * this._nDataBytes,
                            r = 8 * t.sigBytes;
                        A[r >>> 5] |= 128 << 24 - r % 32;
                        var i = e.floor(n / 4294967296);
                        for (A[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), A[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), t.sigBytes = 4 * (A.length + 1), this._process(), t = this._hash, A = t.words, n = 0; 4 > n; n++) r = A[n],
                        A[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                        return t
                    },
                    clone: function () {
                        var e = c.clone.call(this);
                        return e._hash = this._hash.clone(),
                        e
                    }
                }),
                o.MD5 = c._createHelper(a),
                o.HmacMD5 = c._createHmacHelper(a)
            }(Math),


            function () {
                var e = A,
                    t = e.lib,
                    n = t.Base,
                    r = t.WordArray,
                    t = e.algo,
                    i = t.EvpKDF = n.extend({
                        cfg: n.extend({
                            keySize: 4,
                            hasher: t.MD5,
                            iterations: 1
                        }),
                        init: function (e) {
                            this.cfg = this.cfg.extend(e)
                        },
                        compute: function (e, t) {
                            for (var A = this.cfg, n = A.hasher.create(), i = r.create(), o = i.words, a = A.keySize, A = A.iterations; o.length < a;) {
                                s && n.update(s);
                                var s = n.update(e).finalize(t);
                                n.reset();
                                for (var c = 1; c < A; c++) s = n.finalize(s),
                                n.reset();
                                i.concat(s)
                            }
                            return i.sigBytes = 4 * a,
                            i
                        }
                    });
                e.EvpKDF = function (e, t, A) {
                        return i.create(A).compute(e, t)
                    }
            }(),
            A.lib.Cipher ||
            function (e) {
                var t = A,
                    n = t.lib,
                    r = n.Base,
                    i = n.WordArray,
                    o = n.BufferedBlockAlgorithm,
                    a = t.enc.Base64,
                    s = t.algo.EvpKDF,
                    c = n.Cipher = o.extend({
                        cfg: r.extend(),
                        createEncryptor: function (e, t) {
                            return this.create(this._ENC_XFORM_MODE, e, t)
                        },
                        createDecryptor: function (e, t) {
                            return this.create(this._DEC_XFORM_MODE, e, t)
                        },
                        init: function (e, t, A) {
                            this.cfg = this.cfg.extend(A),
                            this._xformMode = e,
                            this._key = t,
                            this.reset()
                        },
                        reset: function () {
                            o.reset.call(this),
                            this._doReset()
                        },
                        process: function (e) {
                            return this._append(e),
                            this._process()
                        },
                        finalize: function (e) {
                            return e && this._append(e),
                            this._doFinalize()
                        },
                        keySize: 4,
                        ivSize: 4,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function (e) {
                            return {
                                encrypt: function (t, A, n) {
                                    return ("string" == typeof A ? p : h).encrypt(e, t, A, n)
                                },
                                decrypt: function (t, A, n) {
                                    return ("string" == typeof A ? p : h).decrypt(e, t, A, n)
                                }
                            }
                        }
                    });
                n.StreamCipher = c.extend({
                        _doFinalize: function () {
                            return this._process(!0)
                        },
                        blockSize: 1
                    });
                var l = t.mode = {},
                    u = function (e, t, A) {
                        var n = this._iv;
                        n ? this._iv = void 0 : n = this._prevBlock;
                        for (var r = 0; r < A; r++) e[t + r] ^= n[r]
                    },
                    f = (n.BlockCipherMode = r.extend({
                        createEncryptor: function (e, t) {
                            return this.Encryptor.create(e, t)
                        },
                        createDecryptor: function (e, t) {
                            return this.Decryptor.create(e, t)
                        },
                        init: function (e, t) {
                            this._cipher = e,
                            this._iv = t
                        }
                    })).extend();
                f.Encryptor = f.extend({
                        processBlock: function (e, t) {
                            var A = this._cipher,
                                n = A.blockSize;
                            u.call(this, e, t, n),
                            A.encryptBlock(e, t),
                            this._prevBlock = e.slice(t, t + n)
                        }
                    }),
                f.Decryptor = f.extend({
                        processBlock: function (e, t) {
                            var A = this._cipher,
                                n = A.blockSize,
                                r = e.slice(t, t + n);
                            A.decryptBlock(e, t),
                            u.call(this, e, t, n),
                            this._prevBlock = r
                        }
                    }),
                l = l.CBC = f,
                f = (t.pad = {}).Pkcs7 = {
                        pad: function (e, t) {
                            for (var A = 4 * t, A = A - e.sigBytes % A, n = A << 24 | A << 16 | A << 8 | A, r = [], o = 0; o < A; o += 4) r.push(n);
                            A = i.create(r, A),
                            e.concat(A)
                        },
                        unpad: function (e) {
                            e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
                        }
                    },
                n.BlockCipher = c.extend({
                        cfg: c.cfg.extend({
                            mode: l,
                            padding: f
                        }),
                        reset: function () {
                            c.reset.call(this);
                            var e = this.cfg,
                                t = e.iv,
                                e = e.mode;
                            if (this._xformMode == this._ENC_XFORM_MODE) var A = e.createEncryptor;
                            else A = e.createDecryptor,
                            this._minBufferSize = 1;
                            this._mode = A.call(e, this, t && t.words)
                        },
                        _doProcessBlock: function (e, t) {
                            this._mode.processBlock(e, t)
                        },
                        _doFinalize: function () {
                            var e = this.cfg.padding;
                            if (this._xformMode == this._ENC_XFORM_MODE) {
                                e.pad(this._data, this.blockSize);
                                var t = this._process(!0)
                            } else t = this._process(!0),
                            e.unpad(t);
                            return t
                        },
                        blockSize: 4
                    });
                var d = n.CipherParams = r.extend({
                        init: function (e) {
                            this.mixIn(e)
                        },
                        toString: function (e) {
                            return (e || this.formatter).stringify(this)
                        }
                    }),
                    l = (t.format = {}).OpenSSL = {
                        stringify: function (e) {
                            var t = e.ciphertext;
                            return e = e.salt,
                            (e ? i.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(a)
                        },
                        parse: function (e) {
                            e = a.parse(e);
                            var t = e.words;
                            if (1398893684 == t[0] && 1701076831 == t[1]) {
                                var A = i.create(t.slice(2, 4));
                                t.splice(0, 4),
                                e.sigBytes -= 16
                            }
                            return d.create({
                                ciphertext: e,
                                salt: A
                            })
                        }
                    },
                    h = n.SerializableCipher = r.extend({
                        cfg: r.extend({
                            format: l
                        }),
                        encrypt: function (e, t, A, n) {
                            n = this.cfg.extend(n);
                            var r = e.createEncryptor(A, n);
                            return t = r.finalize(t),
                            r = r.cfg,
                            d.create({
                                ciphertext: t,
                                key: A,
                                iv: r.iv,
                                algorithm: e,
                                mode: r.mode,
                                padding: r.padding,
                                blockSize: e.blockSize,
                                formatter: n.format
                            })
                        },
                        decrypt: function (e, t, A, n) {
                            return n = this.cfg.extend(n),
                            t = this._parse(t, n.format),
                            e.createDecryptor(A, n).finalize(t.ciphertext)
                        },
                        _parse: function (e, t) {
                            return "string" == typeof e ? t.parse(e, this) : e
                        }
                    }),
                    t = (t.kdf = {}).OpenSSL = {
                        execute: function (e, t, A, n) {
                            return n || (n = i.random(8)),
                            e = s.create({
                                keySize: t + A
                            }).compute(e, n),
                            A = i.create(e.words.slice(t), 4 * A),
                            e.sigBytes = 4 * t,
                            d.create({
                                key: e,
                                iv: A,
                                salt: n
                            })
                        }
                    },
                    p = n.PasswordBasedCipher = h.extend({
                        cfg: h.cfg.extend({
                            kdf: t
                        }),
                        encrypt: function (e, t, A, n) {
                            return n = this.cfg.extend(n),
                            A = n.kdf.execute(A, e.keySize, e.ivSize),
                            n.iv = A.iv,
                            e = h.encrypt.call(this, e, t, A.key, n),
                            e.mixIn(A),
                            e
                        },
                        decrypt: function (e, t, A, n) {
                            return n = this.cfg.extend(n),
                            t = this._parse(t, n.format),
                            A = n.kdf.execute(A, e.keySize, e.ivSize, t.salt),
                            n.iv = A.iv,
                            h.decrypt.call(this, e, t, A.key, n)
                        }
                    })
            }(),


            function () {
                for (var e = A, t = e.lib.BlockCipher, n = e.algo, r = [], i = [], o = [], a = [], s = [], c = [], l = [], u = [], f = [], d = [], h = [], p = 0; 256 > p; p++) h[p] = 128 > p ? p << 1 : p << 1 ^ 283;
                for (var g = 0, B = 0, p = 0; 256 > p; p++) {
                    var w = B ^ B << 1 ^ B << 2 ^ B << 3 ^ B << 4,
                        w = w >>> 8 ^ 255 & w ^ 99;
                    r[g] = w,
                    i[w] = g;
                    var m = h[g],
                        v = h[m],
                        y = h[v],
                        E = 257 * h[w] ^ 16843008 * w;
                    o[g] = E << 24 | E >>> 8,
                    a[g] = E << 16 | E >>> 16,
                    s[g] = E << 8 | E >>> 24,
                    c[g] = E,
                    E = 16843009 * y ^ 65537 * v ^ 257 * m ^ 16843008 * g,
                    l[w] = E << 24 | E >>> 8,
                    u[w] = E << 16 | E >>> 16,
                    f[w] = E << 8 | E >>> 24,
                    d[w] = E,
                    g ? (g = m ^ h[h[h[y ^ m]]], B ^= h[h[B]]) : g = B = 1
                }
                var Q = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    n = n.AES = t.extend({
                        _doReset: function () {
                            for (var e = this._key, t = e.words, A = e.sigBytes / 4, e = 4 * ((this._nRounds = A + 6) + 1), n = this._keySchedule = [], i = 0; i < e; i++) if (i < A) n[i] = t[i];
                            else {
                                var o = n[i - 1];
                                i % A ? 6 < A && 4 == i % A && (o = r[o >>> 24] << 24 | r[o >>> 16 & 255] << 16 | r[o >>> 8 & 255] << 8 | r[255 & o]) : (o = o << 8 | o >>> 24, o = r[o >>> 24] << 24 | r[o >>> 16 & 255] << 16 | r[o >>> 8 & 255] << 8 | r[255 & o], o ^= Q[i / A | 0] << 24),
                                n[i] = n[i - A] ^ o
                            }
                            for (t = this._invKeySchedule = [], A = 0; A < e; A++) i = e - A,
                            o = A % 4 ? n[i] : n[i - 4],
                            t[A] = 4 > A || 4 >= i ? o : l[r[o >>> 24]] ^ u[r[o >>> 16 & 255]] ^ f[r[o >>> 8 & 255]] ^ d[r[255 & o]]
                        },
                        encryptBlock: function (e, t) {
                            this._doCryptBlock(e, t, this._keySchedule, o, a, s, c, r)
                        },
                        decryptBlock: function (e, t) {
                            var A = e[t + 1];
                            e[t + 1] = e[t + 3],
                            e[t + 3] = A,
                            this._doCryptBlock(e, t, this._invKeySchedule, l, u, f, d, i),
                            A = e[t + 1],
                            e[t + 1] = e[t + 3],
                            e[t + 3] = A
                        },
                        _doCryptBlock: function (e, t, A, n, r, i, o, a) {
                            for (var s = this._nRounds, c = e[t] ^ A[0], l = e[t + 1] ^ A[1], u = e[t + 2] ^ A[2], f = e[t + 3] ^ A[3], d = 4, h = 1; h < s; h++) var p = n[c >>> 24] ^ r[l >>> 16 & 255] ^ i[u >>> 8 & 255] ^ o[255 & f] ^ A[d++],
                                g = n[l >>> 24] ^ r[u >>> 16 & 255] ^ i[f >>> 8 & 255] ^ o[255 & c] ^ A[d++],
                                B = n[u >>> 24] ^ r[f >>> 16 & 255] ^ i[c >>> 8 & 255] ^ o[255 & l] ^ A[d++],
                                f = n[f >>> 24] ^ r[c >>> 16 & 255] ^ i[l >>> 8 & 255] ^ o[255 & u] ^ A[d++],
                                c = p,
                                l = g,
                                u = B;
                            p = (a[c >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & f]) ^ A[d++],
                            g = (a[l >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & c]) ^ A[d++],
                            B = (a[u >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & l]) ^ A[d++],
                            f = (a[f >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & u]) ^ A[d++],
                            e[t] = p,
                            e[t + 1] = g,
                            e[t + 2] = B,
                            e[t + 3] = f
                        },
                        keySize: 8
                    });
                e.AES = t._createHelper(n)
            }(),
            e.exports = A
        },


        function (e, t, A) {
            function n(e) {
                var t, A, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                    r = "";
                for (t = 0; e > t; t += 1) A = Math.random() * n.length,
                A = Math.floor(A),
                r += n.charAt(A);
                return r
            }
            function r(e, t) {
                var A = s.enc.Utf8.parse(t),
                    n = s.enc.Utf8.parse("0102030405060708"),
                    r = s.enc.Utf8.parse(e);
                return s.AES.encrypt(r, A, {
                        iv: n,
                        mode: s.mode.CBC
                    }).toString()
            }
            function i(e, t, A) {
                var n;
                return c.setMaxDigits(131),
                n = new c.RSAKeyPair(t, "", A),
                c.encryptedString(n, e)
            }
            function o(e, t, A, o) {
                var a = {},
                    s = n(16);
                return a.encText = r(e, o),
                a.encText = r(a.encText, s),
                a.encSecKey = i(s, t, A),
                a
            }
            function a(e, t, A, n) {
                var r = {};
                return r.encText = i(e + n, t, A),
                r
            }
            var s = A(2),
                c = A(5);
            e.exports = {
                    asrsea: o,
                    ecnonasr: a
                }
        },


        function (e, t) {
            function A(e) {
                return e.map(function (e) {
                    return n[e]
                }).join("")
            }
            var n = {
                "色": "00e0b",
                "流感": "509f6",
                "这边": "259df",
                "弱": "8642d",
                "嘴唇": "bc356",
                "亲": "62901",
                "开心": "477df",
                "呲牙": "22677",
                "憨笑": "ec152",
                "猫": "b5ff6",
                "皱眉": "8ace6",
                "幽灵": "15bb7",
                "蛋糕": "b7251",
                "发怒": "52b3a",
                "大哭": "b17a8",
                "兔子": "76aea",
                "星星": "8a5aa",
                "钟情": "76d2e",
                "牵手": "41762",
                "公鸡": "9ec4e",
                "爱意": "e341f",
                "禁止": "56135",
                "狗": "fccf6",
                "亲亲": "95280",
                "叉": "104e0",
                "礼物": "312ec",
                "晕": "bda92",
                "呆": "557c9",
                "生病": "38701",
                "钻石": "14af6",
                "拜": "c9d05",
                "怒": "c4f7f",
                "示爱": "0c368",
                "汗": "5b7a4",
                "小鸡": "6bee2",
                "痛苦": "55932",
                "撇嘴": "575cc",
                "惶恐": "e10b4",
                "口罩": "24d81",
                "吐舌": "3cfe4",
                "心碎": "875d3",
                "生气": "e8204",
                "可爱": "7b97d",
                "鬼脸": "def52",
                "跳舞": "741d5",
                "男孩": "46b8e",
                "奸笑": "289dc",
                "猪": "6935b",
                "圈": "3ece0",
                "便便": "462db",
                "外星": "0a22b",
                "圣诞": "8e7",
                "流泪": "01000",
                "强": "1",
                "爱心": "0CoJU",
                "女孩": "m6Qyw",
                "惊恐": "8W8ju",
                "大笑": "d"
            },
                r = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"],
                i = A(r);
            e.exports = {
                    emj2code: A,
                    BASE_CODE: i
                }
        },


        function (e, t) {
            function A(e, t, A) {
                this.e = p(e),
                this.d = p(t),
                this.m = p(A),
                this.chunkSize = 2 * w(this.m),
                this.radix = 16,
                this.barrett = new N(this.m)
            }
            function n(e, t) {
                for (var A, n, r, i, a, s, c, u = new Array, d = t.length, h = 0; d > h;) u[h] = t.charCodeAt(h),
                h++;
                for (; 0 != u.length % e.chunkSize;) u[h++] = 0;
                for (A = u.length, n = "", h = 0; A > h; h += e.chunkSize) {
                    for (a = new o, r = 0, i = h; i < h + e.chunkSize; ++r) a.digits[r] = u[i++],
                    a.digits[r] += u[i++] << 8;
                    s = e.barrett.powMod(a, e.e),
                    c = 16 == e.radix ? f(s) : l(s, e.radix),
                    n += c + " "
                }
                return n.substring(0, n.length - 1)
            }
            function r(e) {
                O = e,
                M = new Array(O);
                for (var t = 0; t < M.length; t++) M[t] = 0;
                k = new o,
                D = new o,
                D.digits[0] = 1
            }
            function o(e) {
                this.digits = "boolean" == typeof e && 1 == e ? null : M.slice(0),
                this.isNeg = !1
            }
            function a(e) {
                var t = new o(!0);
                return t.digits = e.digits.slice(0),
                t.isNeg = e.isNeg,
                t
            }
            function s(e) {
                var t, A = new o;
                for (A.isNeg = 0 > e, e = Math.abs(e), t = 0; e > 0;) A.digits[t++] = e & Y,
                e >>= X;
                return A
            }
            function c(e) {
                var t, A = "";
                for (t = e.length - 1; t > -1; --t) A += e.charAt(t);
                return A
            }
            function l(e, t) {
                var A, n, r = new o;
                for (r.digits[0] = t, A = H(e, r), n = L[A[1].digits[0]]; 1 == _(A[0], k);) A = H(A[0], r),
                digit = A[1].digits[0],
                n += L[A[1].digits[0]];
                return (e.isNeg ? "-" : "") + c(n)
            }
            function u(e) {
                var t = "";
                for (i = 0; 4 > i; ++i) t += R[15 & e],
                e >>>= 4;
                return c(t)
            }
            function f(e) {
                var t, A = "";
                for (w(e), t = w(e); t > -1; --t) A += u(e.digits[t]);
                return A
            }
            function d(e) {
                return e >= 48 && 57 >= e ? e - 48 : e >= 65 && 90 >= e ? 10 + e - 65 : e >= 97 && 122 >= e ? 10 + e - 97 : 0
            }
            function h(e) {
                var t, A = 0,
                    n = Math.min(e.length, 4);
                for (t = 0; n > t; ++t) A <<= 4,
                A |= d(e.charCodeAt(t));
                return A
            }
            function p(e) {
                var t, A, n = new o,
                    r = e.length;
                for (t = r, A = 0; t > 0; t -= 4, ++A) n.digits[A] = h(e.substr(Math.max(t - 4, 0), Math.min(t, 4)));
                return n
            }
            function g(e, t) {
                var A, n, r, i;
                if (e.isNeg != t.isNeg) t.isNeg = !t.isNeg,
                A = B(e, t),
                t.isNeg = !t.isNeg;
                else {
                    for (A = new o, n = 0, i = 0; i < e.digits.length; ++i) r = e.digits[i] + t.digits[i] + n,
                    A.digits[i] = 65535 & r,
                    n = Number(r >= V);
                    A.isNeg = e.isNeg
                }
                return A
            }
            function B(e, t) {
                var A, n, r, i;
                if (e.isNeg != t.isNeg) t.isNeg = !t.isNeg,
                A = g(e, t),
                t.isNeg = !t.isNeg;
                else {
                    for (A = new o, r = 0, i = 0; i < e.digits.length; ++i) n = e.digits[i] - t.digits[i] + r,
                    A.digits[i] = 65535 & n,
                    A.digits[i] < 0 && (A.digits[i] += V),
                    r = 0 - Number(0 > n);
                    if (-1 == r) {
                        for (r = 0, i = 0; i < e.digits.length; ++i) n = 0 - A.digits[i] + r,
                        A.digits[i] = 65535 & n,
                        A.digits[i] < 0 && (A.digits[i] += V),
                        r = 0 - Number(0 > n);
                        A.isNeg = !e.isNeg
                    } else A.isNeg = e.isNeg
                }
                return A
            }
            function w(e) {
                for (var t = e.digits.length - 1; t > 0 && 0 == e.digits[t];)--t;
                return t
            }
            function m(e) {
                var t, A = w(e),
                    n = e.digits[A],
                    r = (A + 1) * z;
                for (t = r; t > r - z && 0 == (32768 & n); --t) n <<= 1;
                return t
            }
            function v(e, t) {
                var A, n, r, i, a = new o,
                    s = w(e),
                    c = w(t);
                for (i = 0; c >= i; ++i) {
                        for (A = 0, r = i, j = 0; s >= j; ++j, ++r) n = a.digits[r] + e.digits[j] * t.digits[i] + A,
                        a.digits[r] = n & Y,
                        A = n >>> X;
                        a.digits[i + s + 1] = A
                    }
                return a.isNeg = e.isNeg != t.isNeg,
                a
            }
            function y(e, t) {
                var A, n, r, i;
                for (result = new o, A = w(e), n = 0, i = 0; A >= i; ++i) r = result.digits[i] + e.digits[i] * t + n,
                result.digits[i] = r & Y,
                n = r >>> X;
                return result.digits[1 + A] = n,
                result
            }
            function E(e, t, A, n, r) {
                var i, o, a = Math.min(t + r, e.length);
                for (i = t, o = n; a > i; ++i, ++o) A[o] = e[i]
            }
            function Q(e, t) {
                var A, n, r, i, a = Math.floor(t / z),
                    s = new o;
                for (E(e.digits, 0, s.digits, a, s.digits.length - a), A = t % z, n = z - A, r = s.digits.length - 1, i = r - 1; r > 0; --r, --i) s.digits[r] = s.digits[r] << A & Y | (s.digits[i] & P[A]) >>> n;
                return s.digits[0] = s.digits[r] << A & Y,
                s.isNeg = e.isNeg,
                s
            }
            function C(e, t) {
                var A, n, r, i, a = Math.floor(t / z),
                    s = new o;
                for (E(e.digits, a, s.digits, 0, e.digits.length - a), A = t % z, n = z - A, r = 0, i = r + 1; r < s.digits.length - 1; ++r, ++i) s.digits[r] = s.digits[r] >>> A | (s.digits[i] & K[A]) << n;
                return s.digits[s.digits.length - 1] >>>= A,
                s.isNeg = e.isNeg,
                s
            }
            function U(e, t) {
                var A = new o;
                return E(e.digits, 0, A.digits, t, A.digits.length - t),
                A
            }
            function b(e, t) {
                var A = new o;
                return E(e.digits, t, A.digits, 0, A.digits.length - t),
                A
            }
            function F(e, t) {
                var A = new o;
                return E(e.digits, 0, A.digits, 0, t),
                A
            }
            function _(e, t) {
                if (e.isNeg != t.isNeg) return 1 - 2 * Number(e.isNeg);
                for (var A = e.digits.length - 1; A >= 0; --A) if (e.digits[A] != t.digits[A]) return e.isNeg ? 1 - 2 * Number(e.digits[A] > t.digits[A]) : 1 - 2 * Number(e.digits[A] < t.digits[A]);
                return 0
            }
            function H(e, t) {
                var A, n, r, i, s, c, l, u, f, d, h, p, v, E, b = m(e),
                    F = m(t),
                    H = t.isNeg;
                if (F > b) return e.isNeg ? (A = a(D), A.isNeg = !t.isNeg, e.isNeg = !1, t.isNeg = !1, n = B(t, e), e.isNeg = !0, t.isNeg = H) : (A = new o, n = a(e)),
                new Array(A, n);
                for (A = new o, n = e, r = Math.ceil(F / z) - 1, i = 0; t.digits[r] < W;) t = Q(t, 1),
                ++i,
                ++F,
                r = Math.ceil(F / z) - 1;
                for (n = Q(n, i), b += i, s = Math.ceil(b / z) - 1, c = U(t, s - r); - 1 != _(n, c);)++A.digits[s - r],
                n = B(n, c);
                for (l = s; l > r; --l) {
                        for (u = l >= n.digits.length ? 0 : n.digits[l], f = l - 1 >= n.digits.length ? 0 : n.digits[l - 1], d = l - 2 >= n.digits.length ? 0 : n.digits[l - 2], h = r >= t.digits.length ? 0 : t.digits[r], p = r - 1 >= t.digits.length ? 0 : t.digits[r - 1], A.digits[l - r - 1] = u == h ? Y : Math.floor((u * V + f) / h), v = A.digits[l - r - 1] * (h * V + p), E = u * J + (f * V + d); v > E;)--A.digits[l - r - 1],
                        v = A.digits[l - r - 1] * (h * V | p),
                        E = u * V * V + (f * V + d);
                        c = U(t, l - r - 1),
                        n = B(n, y(c, A.digits[l - r - 1])),
                        n.isNeg && (n = g(n, c), --A.digits[l - r - 1])
                    }
                return n = C(n, i),
                A.isNeg = e.isNeg != H,
                e.isNeg && (A = H ? g(A, D) : B(A, D), t = C(t, i), n = B(t, n)),
                0 == n.digits[0] && 0 == w(n) && (n.isNeg = !1),
                new Array(A, n)
            }
            function x(e, t) {
                return H(e, t)[0]
            }
            function N(e) {
                this.modulus = a(e),
                this.k = w(this.modulus) + 1;
                var t = new o;
                t.digits[2 * this.k] = 1,
                this.mu = x(t, this.modulus),
                this.bkplus1 = new o,
                this.bkplus1.digits[this.k + 1] = 1,
                this.modulo = T,
                this.multiplyMod = I,
                this.powMod = S
            }
            function T(e) {
                var t, A = b(e, this.k - 1),
                    n = v(A, this.mu),
                    r = b(n, this.k + 1),
                    i = F(e, this.k + 1),
                    o = v(r, this.modulus),
                    a = F(o, this.k + 1),
                    s = B(i, a);
                for (s.isNeg && (s = g(s, this.bkplus1)), t = _(s, this.modulus) >= 0; t;) s = B(s, this.modulus),
                t = _(s, this.modulus) >= 0;
                return s
            }
            function I(e, t) {
                var A = v(e, t);
                return this.modulo(A)
            }
            function S(e, t) {
                var A, n, r = new o;
                for (r.digits[0] = 1, A = e, n = t; 0 != (1 & n.digits[0]) && (r = this.multiplyMod(r, A)), n = C(n, 1), 0 != n.digits[0] || 0 != w(n);) A = this.multiplyMod(A, A);
                return r
            }
            var O, M, k, D, L, R, P, K, X = 16,
                z = X,
                V = 65536,
                W = V >>> 1,
                J = V * V,
                Y = V - 1;
            r(20),
            15,
            s(1e15),
            L = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),
            R = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
            P = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535),
            K = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535),
            e.exports = {
                    RSAKeyPair: A,
                    setMaxDigits: r,
                    encryptedString: n
                }
        },


        function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
             * Reqwest! A general purpose XHR connection manager
             * license MIT (c) Dustin Diaz 2015
             * https://github.com/ded/reqwest
             */
            !
            function (e, t, A) {
                void 0 !== module && module.exports ? module.exports = A() : (__WEBPACK_AMD_DEFINE_FACTORY__ = A, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            }(0, 0, function () {
                function succeed(e) {
                    var t = protocolRe.exec(e.url);
                    return t = t && t[1] || context.location.protocol,
                    httpsRe.test(t) ? twoHundo.test(e.request.status) : !! e.request.response
                }
                function handleReadyState(e, t, A) {
                    return function () {
                        return e._aborted ? A(e.request) : e._timedOut ? A(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : A(e.request)))
                    }
                }
                function setHeaders(e, t) {
                    var A, n = t.headers || {};
                    n.Accept = n.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
                    var r = "undefined" != typeof FormData && t.data instanceof FormData;
                    t.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith),
                    n[contentType] || r || (n[contentType] = t.contentType || defaultHeaders.contentType);
                    for (A in n) n.hasOwnProperty(A) && "setRequestHeader" in e && e.setRequestHeader(A, n[A])
                }
                function setCredentials(e, t) {
                    void 0 !== t.withCredentials && void 0 !== e.withCredentials && (e.withCredentials = !! t.withCredentials)
                }
                function generalCallback(e) {
                    lastValue = e
                }
                function urlappend(e, t) {
                    return e + (/\?/.test(e) ? "&" : "?") + t
                }
                function handleJsonp(e, t, A, n) {
                    var r = uniqid++,
                        i = e.jsonpCallback || "callback",
                        o = e.jsonpCallbackName || reqwest.getcallbackPrefix(r),
                        a = new RegExp("((^|\\?|&)" + i + ")=([^&]+)"),
                        s = n.match(a),
                        c = doc.createElement("script"),
                        l = 0,
                        u = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
                    return s ? "?" === s[3] ? n = n.replace(a, "$1=" + o) : o = s[3] : n = urlappend(n, i + "=" + o),
                    context[o] = generalCallback,
                    c.type = "text/javascript",
                    c.src = n,
                    c.async = !0,
                    void 0 === c.onreadystatechange || u || (c.htmlFor = c.id = "_reqwest_" + r),
                    c.onload = c.onreadystatechange = function () {
                            if (c[readyState] && "complete" !== c[readyState] && "loaded" !== c[readyState] || l) return !1;
                            c.onload = c.onreadystatechange = null,
                            c.onclick && c.onclick(),
                            t(lastValue),
                            lastValue = void 0,
                            head.removeChild(c),
                            l = 1
                        },
                    head.appendChild(c),
                    {
                            abort: function () {
                                c.onload = c.onreadystatechange = null,
                                A({}, "Request is aborted: timeout", {}),
                                lastValue = void 0,
                                head.removeChild(c),
                                l = 1
                            }
                        }
                }
                function getRequest(e, t) {
                    var A, n = this.o,
                        r = (n.method || "GET").toUpperCase(),
                        i = "string" == typeof n ? n : n.url,
                        o = !1 !== n.processData && n.data && "string" != typeof n.data ? reqwest.toQueryString(n.data) : n.data || null,
                        a = !1;
                    return "jsonp" != n.type && "GET" != r || !o || (i = urlappend(i, o), o = null),
                    "jsonp" == n.type ? handleJsonp(n, e, t, i) : (A = n.xhr && n.xhr(n) || xhr(n), A.open(r, i, !1 !== n.async), setHeaders(A, n), setCredentials(A, n), context[xDomainRequest] && A instanceof context[xDomainRequest] ? (A.onload = e, A.onerror = t, A.onprogress = function () {}, a = !0) : A.onreadystatechange = handleReadyState(this, e, t), n.before && n.before(A), a ? setTimeout(function () {
                            A.send(o)
                        }, 200) : A.send(o), A)
                }
                function Reqwest(e, t) {
                    this.o = e,
                    this.fn = t,
                    init.apply(this, arguments)
                }
                function setType(e) {
                    if (null !== e) return e.match("json") ? "json" : e.match("javascript") ? "js" : e.match("text") ? "html" : e.match("xml") ? "xml" : void 0
                }
                function init(o, fn) {
                    function complete(e) {
                        for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
                    }
                    function success(resp) {
                        var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                        resp = "jsonp" !== type ? self.request : resp;
                        var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                            r = filteredResponse;
                        try {
                                resp.responseText = r
                            } catch (e) {}
                        if (r) switch (type) {
                            case "json":
                                try {
                                    resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                                } catch (e) {
                                    return error(resp, "Could not parse JSON in response", e)
                                }
                                break;
                            case "js":
                                resp = eval(r);
                                break;
                            case "html":
                                resp = r;
                                break;
                            case "xml":
                                resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                            }
                        for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                        complete(resp)
                    }
                    function timedOut() {
                        self._timedOut = !0,
                        self.request.abort()
                    }
                    function error(e, t, A) {
                        for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = A, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, A);
                        complete(e)
                    }
                    this.url = "string" == typeof o ? o : o.url,
                    this.timeout = null,
                    this._fulfilled = !1,
                    this._successHandler = function () {},
                    this._fulfillmentHandlers = [],
                    this._errorHandlers = [],
                    this._completeHandlers = [],
                    this._erred = !1,
                    this._responseArgs = {};
                    var self = this;
                    fn = fn ||
                    function () {},
                    o.timeout && (this.timeout = setTimeout(function () {
                        timedOut()
                    }, o.timeout)),
                    o.success && (this._successHandler = function () {
                        o.success.apply(o, arguments)
                    }),
                    o.error && this._errorHandlers.push(function () {
                        o.error.apply(o, arguments)
                    }),
                    o.complete && this._completeHandlers.push(function () {
                        o.complete.apply(o, arguments)
                    }),
                    this.request = getRequest.call(this, success, error)
                }
                function reqwest(e, t) {
                    return new Reqwest(e, t)
                }
                function normalize(e) {
                    return e ? e.replace(/\r?\n/g, "\r\n") : ""
                }
                function serial(e, t) {
                    var A, n, r, i, o = e.name,
                        a = e.tagName.toLowerCase(),
                        s = function (e) {
                            e && !e.disabled && t(o, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text))
                        };
                    if (!e.disabled && o) switch (a) {
                        case "input":
                            /reset|button|image|file/i.test(e.type) || (A = /checkbox/i.test(e.type), n = /radio/i.test(e.type), r = e.value, (!(A || n) || e.checked) && t(o, normalize(A && "" === r ? "on" : r)));
                            break;
                        case "textarea":
                            t(o, normalize(e.value));
                            break;
                        case "select":
                            if ("select-one" === e.type.toLowerCase()) s(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                            else for (i = 0; e.length && i < e.length; i++) e.options[i].selected && s(e.options[i])
                        }
                }
                function eachFormElement() {
                    var e, t, A = this;
                    for (t = 0; t < arguments.length; t++) e = arguments[t],
                    /input|select|textarea/i.test(e.tagName) && serial(e, A),


                    function (e, t) {
                        var n, r, i;
                        for (n = 0; n < t.length; n++) for (i = e[byTag](t[n]), r = 0; r < i.length; r++) serial(i[r], A)
                    }(e, ["input", "select", "textarea"])
                }
                function serializeQueryString() {
                    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
                }
                function serializeHash() {
                    var e = {};
                    return eachFormElement.apply(function (t, A) {
                        t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(A)) : e[t] = A
                    }, arguments),
                    e
                }
                function buildParams(e, t, A, n) {
                    var r, i, o, a = /\[\]$/;
                    if (isArray(t)) for (i = 0; t && i < t.length; i++) o = t[i],
                    A || a.test(e) ? n(e, o) : buildParams(e + "[" + ("object" == typeof o ? i : "") + "]", o, A, n);
                    else if (t && "[object Object]" === t.toString()) for (r in t) buildParams(e + "[" + r + "]", t[r], A, n);
                    else n(e, t)
                }
                var context = this;
                if ("window" in context) var doc = document,
                    byTag = "getElementsByTagName",
                    head = doc[byTag]("head")[0];
                else {
                        var XHR2;
                        try {
                            XHR2 = __webpack_require__(7)
                        } catch (e) {
                            throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
                        }
                    }
                var httpsRe = /^http/,
                    protocolRe = /(^\w+):\/\//,
                    twoHundo = /^(20\d|1223)$/,
                    readyState = "readyState",
                    contentType = "Content-Type",
                    requestedWith = "X-Requested-With",
                    uniqid = 0,
                    callbackPrefix = "reqwest_" + +new Date,
                    lastValue, xmlHttpRequest = "XMLHttpRequest",
                    xDomainRequest = "XDomainRequest",
                    noop = function () {},
                    isArray = "function" == typeof Array.isArray ? Array.isArray : function (e) {
                        return e instanceof Array
                    },
                    defaultHeaders = {
                        contentType: "application/x-www-form-urlencoded",
                        requestedWith: xmlHttpRequest,
                        accept: {
                            "*": "text/javascript, text/html, application/xml, text/xml, */*",
                            xml: "application/xml, text/xml",
                            html: "text/html",
                            text: "text/plain",
                            json: "application/json, text/javascript",
                            js: "application/javascript, text/javascript"
                        }
                    },
                    xhr = function (e) {
                        if (!0 === e.crossOrigin) {
                            var t = context[xmlHttpRequest] ? new XMLHttpRequest : null;
                            if (t && "withCredentials" in t) return t;
                            if (context[xDomainRequest]) return new XDomainRequest;
                            throw new Error("Browser does not support cross-origin requests")
                        }
                        return context[xmlHttpRequest] ? new XMLHttpRequest : XHR2 ? new XHR2 : new ActiveXObject("Microsoft.XMLHTTP")
                    },
                    globalSetupOptions = {
                        dataFilter: function (e) {
                            return e
                        }
                    };
                return Reqwest.prototype = {
                        abort: function () {
                            this._aborted = !0,
                            this.request.abort()
                        },
                        retry: function () {
                            init.call(this, this.o, this.fn)
                        },
                        then: function (e, t) {
                            return e = e ||
                            function () {},
                            t = t ||
                            function () {},
                            this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)),
                            this
                        },
                        always: function (e) {
                            return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e),
                            this
                        },
                        fail: function (e) {
                            return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e),
                            this
                        },
                        catch: function (e) {
                            return this.fail(e)
                        }
                    },
                reqwest.serializeArray = function () {
                        var e = [];
                        return eachFormElement.apply(function (t, A) {
                            e.push({
                                name: t,
                                value: A
                            })
                        }, arguments),
                        e
                    },
                reqwest.serialize = function () {
                        if (0 === arguments.length) return "";
                        var e, t, A = Array.prototype.slice.call(arguments, 0);
                        return e = A.pop(),
                        e && e.nodeType && A.push(e) && (e = null),
                        e && (e = e.type),
                        t = "map" == e ? serializeHash : "array" == e ? reqwest.serializeArray : serializeQueryString,
                        t.apply(null, A)
                    },
                reqwest.toQueryString = function (e, t) {
                        var A, n, r = t || !1,
                            i = [],
                            o = encodeURIComponent,
                            a = function (e, t) {
                                t = "function" == typeof t ? t() : null == t ? "" : t,
                                i[i.length] = o(e) + "=" + o(t)
                            };
                        if (isArray(e)) for (n = 0; e && n < e.length; n++) a(e[n].name, e[n].value);
                        else for (A in e) e.hasOwnProperty(A) && buildParams(A, e[A], r, a);
                        return i.join("&").replace(/%20/g, "+")
                    },
                reqwest.getcallbackPrefix = function () {
                        return callbackPrefix
                    },
                reqwest.compat = function (e, t) {
                        return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)),
                        new Reqwest(e, t)
                    },
                reqwest.ajaxSetup = function (e) {
                        e = e || {};
                        for (var t in e) globalSetupOptions[t] = e[t]
                    },
                reqwest
            })
        },


        function (e, t) {},


        function (e, t, A) {
            function n(e, t) {
                var A, n = {},
                    t = i({}, t),
                    r = e.split("?"),
                    g = t.headers || (t.headers = {});
                if (void 0 === t.credentials && (t.credentials = "include"), p.test(e) && g[d] !== h && !t.noEnc) {
                        g[d] = "application/x-www-form-urlencoded",
                        g.Accept,
                        2 === r.length && (n = a(r[1])),
                        e = r[0],
                        ["query", "data"].forEach(function (e) {
                            t[e] && (n = i(n, "string" == typeof t[e] ? a(t[e]) : t[e]))
                        });
                        var B = s("__csrf");
                        return B && (n.csrf_token = B),
                        e = e.replace("api", "weapi") + (B ? "?" + o({
                            csrf_token: n.csrf_token
                        }) : ""),
                        t.method = "post",
                        delete t.query,
                        delete t.data,
                        A = c(JSON.stringify(n), l(["流泪", "强"]), u, l(["爱心", "女孩", "惊恐", "大笑"])),
                        t.body = o({
                            params: A.encText,
                            encSecKey: A.encSecKey
                        }),
                        f(e, t)
                    }
                return f(e, t)
            }
            var r = A(0),
                i = r.extend,
                o = r.obj2query,
                a = r.query2obj,
                s = r.getCookie,
                c = r.asrsea,
                l = (r.ecnonasr, r.emj2code),
                u = r.BASE_CODE,
                f = void 0;
            "undefined" != typeof window && (f = A(1));
            var d = "Content-Type",
                h = "multipart/form-data",
                p = /(^|\.com)\/api/;
            n.encode = function (e, t) {
                    e || (e = {}),
                    t && (e.csrf_token = t);
                    var A = c(JSON.stringify(e), l(["流泪", "强"]), u, l(["爱心", "女孩", "惊恐", "大笑"]));
                    return t && (A.query = o({
                        csrf_token: t
                    })),
                    A
                },
            n.util = i({
                    fetch: f
                }, r),
            e.exports = n
        }])
    })
},


function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
},


function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
},


function (e, t) {
    e.exports = {}
},


function (e, t) {
    e.exports = !0
},


function (e, t, A) {
    var n = A(68),
        r = A(319),
        i = A(106),
        o = A(112)("IE_PROTO"),
        a = function () {},
        s = function () {
            var e, t = A(160)("iframe"),
                n = i.length;
            for (t.style.display = "none", A(313).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), s = e.F; n--;) delete s.prototype[i[n]];
            return s()
        };
    e.exports = Object.create ||
    function (e, t) {
            var A;
            return null !== e ? (a.prototype = n(e), A = new a, a.prototype = null, A[o] = e) : A = s(),
            void 0 === t ? A : r(A, t)
        }
},


function (e, t) {
    t.f = {}.propertyIsEnumerable
},


function (e, t, A) {
    var n = A(41).f,
        r = A(40),
        i = A(60)("toStringTag");
    e.exports = function (e, t, A) {
            e && !r(e = A ? e : e.prototype, i) && n(e, i, {
                configurable: !0,
                value: t
            })
        }
},


function (e, t, A) {
    var n = A(113)("keys"),
        r = A(79);
    e.exports = function (e) {
            return n[e] || (n[e] = r(e))
        }
},


function (e, t, A) {
    var n = A(33),
        r = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
    e.exports = function (e) {
            return r[e] || (r[e] = {})
        }
},


function (e, t) {
    var A = Math.ceil,
        n = Math.floor;
    e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? n : A)(e)
        }
},


function (e, t, A) {
    var n = A(105);
    e.exports = function (e) {
        return Object(n(e))
    }
},


function (e, t, A) {
    var n = A(58);
    e.exports = function (e, t) {
        if (!n(e)) return e;
        var A, r;
        if (t && "function" == typeof(A = e.toString) && !n(r = A.call(e))) return r;
        if ("function" == typeof(A = e.valueOf) && !n(r = A.call(e))) return r;
        if (!t && "function" == typeof(A = e.toString) && !n(r = A.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
},


function (e, t, A) {
    var n = A(33),
        r = A(23),
        i = A(108),
        o = A(118),
        a = A(41).f;
    e.exports = function (e) {
            var t = r.Symbol || (r.Symbol = i ? {} : n.Symbol || {});
            "_" == e.charAt(0) || e in t || a(t, e, {
                value: o.f(e)
            })
        }
},


function (e, t, A) {
    t.f = A(60)
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    for (var n = (t.toCodePoints = function (e) {
        for (var t = [], A = 0, n = e.length; A < n;) {
            var r = e.charCodeAt(A++);
            if (r >= 55296 && r <= 56319 && A < n) {
                var i = e.charCodeAt(A++);
                56320 == (64512 & i) ? t.push(((1023 & r) << 10) + (1023 & i) + 65536) : (t.push(r), A--)
            } else t.push(r)
        }
        return t
    }, t.fromCodePoint = function () {
        if (String.fromCodePoint) return String.fromCodePoint.apply(String, arguments);
        var e = arguments.length;
        if (!e) return "";
        for (var t = [], A = -1, n = ""; ++A < e;) {
            var r = arguments.length <= A ? void 0 : arguments[A];
            r <= 65535 ? t.push(r) : (r -= 65536, t.push(55296 + (r >> 10), r % 1024 + 56320)),
            (A + 1 === e || t.length > 16384) && (n += String.fromCharCode.apply(String, t), t.length = 0)
        }
        return n
    }, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), r = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i = 0; i < n.length; i++) r[n.charCodeAt(i)] = i;
    t.decode = function (e) {
        var t = .75 * e.length,
            A = e.length,
            n = void 0,
            i = 0,
            o = void 0,
            a = void 0,
            s = void 0,
            c = void 0;
        "=" === e[e.length - 1] && (t--, "=" === e[e.length - 2] && t--);
        var l = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(t) : new Array(t),
            u = Array.isArray(l) ? l : new Uint8Array(l);
        for (n = 0; n < A; n += 4) o = r[e.charCodeAt(n)],
        a = r[e.charCodeAt(n + 1)],
        s = r[e.charCodeAt(n + 2)],
        c = r[e.charCodeAt(n + 3)],
        u[i++] = o << 2 | a >> 4,
        u[i++] = (15 & a) << 4 | s >> 2,
        u[i++] = (3 & s) << 6 | 63 & c;
        return l
    },
    t.polyUint16Array = function (e) {
        for (var t = e.length, A = [], n = 0; n < t; n += 2) A.push(e[n + 1] << 8 | e[n]);
        return A
    },
    t.polyUint32Array = function (e) {
        for (var t = e.length, A = [], n = 0; n < t; n += 4) A.push(e[n + 3] << 24 | e[n + 2] << 16 | e[n + 1] << 8 | e[n]);
        return A
    }
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createCounterText = t.inlineListItemElement = t.getListOwner = void 0;
    var r = A(66),
        i = A(65),
        o = n(i),
        a = A(98),
        s = n(a),
        c = A(101),
        l = A(240),
        u = ["OL", "UL", "MENU"],
        f = (t.getListOwner = function (e) {
            var t = e.parent;
            if (!t) return null;
            do {
                if (-1 !== u.indexOf(t.tagName)) return t;
                t = t.parent
            } while (t);
            return e.parent
        }, t.inlineListItemElement = function (e, t, A) {
            var n = t.style.listStyle;
            if (n) {
                var i = e.ownerDocument.defaultView.getComputedStyle(e, null),
                    a = e.ownerDocument.createElement("html2canvaswrapper");
                switch ((0, r.copyCSSStyles)(i, a), a.style.position = "absolute", a.style.bottom = "auto", a.style.display = "block", a.style.letterSpacing = "normal", n.listStylePosition) {
                    case c.LIST_STYLE_POSITION.OUTSIDE:
                        a.style.left = "auto",
                        a.style.right = e.ownerDocument.defaultView.innerWidth - t.bounds.left - t.style.margin[1].getAbsoluteValue(t.bounds.width) + 7 + "px",
                        a.style.textAlign = "right";
                        break;
                    case c.LIST_STYLE_POSITION.INSIDE:
                        a.style.left = t.bounds.left - t.style.margin[3].getAbsoluteValue(t.bounds.width) + "px",
                        a.style.right = "auto",
                        a.style.textAlign = "left"
                    }
                var l = void 0,
                    u = t.style.margin[0].getAbsoluteValue(t.bounds.width),
                    f = n.listStyleImage;
                if (f) if ("url" === f.method) {
                        var d = e.ownerDocument.createElement("img");
                        d.src = f.args[0],
                        a.style.top = t.bounds.top - u + "px",
                        a.style.width = "auto",
                        a.style.height = "auto",
                        a.appendChild(d)
                    } else {
                        var h = .5 * parseFloat(t.style.font.fontSize);
                        a.style.top = t.bounds.top - u + t.bounds.height - 1.5 * h + "px",
                        a.style.width = h + "px",
                        a.style.height = h + "px",
                        a.style.backgroundImage = i.listStyleImage
                    } else "number" == typeof t.listIndex && (l = e.ownerDocument.createTextNode(y(t.listIndex, n.listStyleType, !0)), a.appendChild(l), a.style.top = t.bounds.top - u + "px");
                var p = e.ownerDocument.body;
                p.appendChild(a),
                l ? (t.childNodes.push(s.
                default.fromTextNode(l, t)), p.removeChild(a)) : t.childNodes.push(new o.
                default (a, t, A, 0))
            }
        }, {
            integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        }),
        d = {
            integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
        },
        h = {
            integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
        },
        p = {
            integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
        },
        g = function (e, t, A, n, r, i) {
            return e < t || e > A ? y(e, r, i.length > 0) : n.integers.reduce(function (t, A, r) {
                for (; e >= A;) e -= A,
                t += n.values[r];
                return t
            }, "") + i
        },
        B = function (e, t, A, n) {
            var r = "";
            do {
                A || e--, r = n(e) + r, e /= t
            } while (e * t >= t);
            return r
        },
        w = function (e, t, A, n, r) {
            var i = A - t + 1;
            return (e < 0 ? "-" : "") + (B(Math.abs(e), i, n, function (e) {
                return (0, l.fromCodePoint)(Math.floor(e % i) + t)
            }) + r)
        },
        m = function (e, t) {
            var A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ". ",
                n = t.length;
            return B(Math.abs(e), n, !1, function (e) {
                    return t[Math.floor(e % n)]
                }) + A
        },
        v = function (e, t, A, n, i, o) {
            if (e < -9999 || e > 9999) return y(e, c.LIST_STYLE_TYPE.CJK_DECIMAL, i.length > 0);
            var a = Math.abs(e),
                s = i;
            if (0 === a) return t[0] + s;
            for (var l = 0; a > 0 && l <= 4; l++) {
                    var u = a % 10;
                    0 === u && (0, r.contains)(o, 1) && "" !== s ? s = t[u] + s : u > 1 || 1 === u && 0 === l || 1 === u && 1 === l && (0, r.contains)(o, 2) || 1 === u && 1 === l && (0, r.contains)(o, 4) && e > 100 || 1 === u && l > 1 && (0, r.contains)(o, 8) ? s = t[u] + (l > 0 ? A[l - 1] : "") + s : 1 === u && l > 0 && (s = A[l - 1] + s),
                    a = Math.floor(a / 10)
                }
            return (e < 0 ? n : "") + s
        },
        y = t.createCounterText = function (e, t, A) {
            var n = A ? ". " : "",
                r = A ? "、" : "",
                i = A ? ", " : "";
            switch (t) {
                case c.LIST_STYLE_TYPE.DISC:
                    return "•";
                case c.LIST_STYLE_TYPE.CIRCLE:
                    return "◦";
                case c.LIST_STYLE_TYPE.SQUARE:
                    return "◾";
                case c.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
                    var o = w(e, 48, 57, !0, n);
                    return o.length < 4 ? "0" + o : o;
                case c.LIST_STYLE_TYPE.CJK_DECIMAL:
                    return m(e, "〇一二三四五六七八九", r);
                case c.LIST_STYLE_TYPE.LOWER_ROMAN:
                    return g(e, 1, 3999, f, c.LIST_STYLE_TYPE.DECIMAL, n).toLowerCase();
                case c.LIST_STYLE_TYPE.UPPER_ROMAN:
                    return g(e, 1, 3999, f, c.LIST_STYLE_TYPE.DECIMAL, n);
                case c.LIST_STYLE_TYPE.LOWER_GREEK:
                    return w(e, 945, 969, !1, n);
                case c.LIST_STYLE_TYPE.LOWER_ALPHA:
                    return w(e, 97, 122, !1, n);
                case c.LIST_STYLE_TYPE.UPPER_ALPHA:
                    return w(e, 65, 90, !1, n);
                case c.LIST_STYLE_TYPE.ARABIC_INDIC:
                    return w(e, 1632, 1641, !0, n);
                case c.LIST_STYLE_TYPE.ARMENIAN:
                case c.LIST_STYLE_TYPE.UPPER_ARMENIAN:
                    return g(e, 1, 9999, d, c.LIST_STYLE_TYPE.DECIMAL, n);
                case c.LIST_STYLE_TYPE.LOWER_ARMENIAN:
                    return g(e, 1, 9999, d, c.LIST_STYLE_TYPE.DECIMAL, n).toLowerCase();
                case c.LIST_STYLE_TYPE.BENGALI:
                    return w(e, 2534, 2543, !0, n);
                case c.LIST_STYLE_TYPE.CAMBODIAN:
                case c.LIST_STYLE_TYPE.KHMER:
                    return w(e, 6112, 6121, !0, n);
                case c.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
                    return m(e, "子丑寅卯辰巳午未申酉戌亥", r);
                case c.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
                    return m(e, "甲乙丙丁戊己庚辛壬癸", r);
                case c.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
                case c.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
                    return v(e, "零一二三四五六七八九", "十百千萬", "負", r, 14);
                case c.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
                    return v(e, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", r, 15);
                case c.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
                    return v(e, "零一二三四五六七八九", "十百千萬", "负", r, 14);
                case c.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
                    return v(e, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", r, 15);
                case c.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
                    return v(e, "〇一二三四五六七八九", "十百千万", "マイナス", r, 0);
                case c.LIST_STYLE_TYPE.JAPANESE_FORMAL:
                    return v(e, "零壱弐参四伍六七八九", "拾百千万", "マイナス", r, 7);
                case c.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
                    return v(e, "영일이삼사오육칠팔구", "십백천만", "마이너스 ", i, 7);
                case c.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
                    return v(e, "零一二三四五六七八九", "十百千萬", "마이너스 ", i, 0);
                case c.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
                    return v(e, "零壹貳參四五六七八九", "拾百千", "마이너스 ", i, 7);
                case c.LIST_STYLE_TYPE.DEVANAGARI:
                    return w(e, 2406, 2415, !0, n);
                case c.LIST_STYLE_TYPE.GEORGIAN:
                    return g(e, 1, 19999, p, c.LIST_STYLE_TYPE.DECIMAL, n);
                case c.LIST_STYLE_TYPE.GUJARATI:
                    return w(e, 2790, 2799, !0, n);
                case c.LIST_STYLE_TYPE.GURMUKHI:
                    return w(e, 2662, 2671, !0, n);
                case c.LIST_STYLE_TYPE.HEBREW:
                    return g(e, 1, 10999, h, c.LIST_STYLE_TYPE.DECIMAL, n);
                case c.LIST_STYLE_TYPE.HIRAGANA:
                    return m(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                case c.LIST_STYLE_TYPE.HIRAGANA_IROHA:
                    return m(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                case c.LIST_STYLE_TYPE.KANNADA:
                    return w(e, 3302, 3311, !0, n);
                case c.LIST_STYLE_TYPE.KATAKANA:
                    return m(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
                case c.LIST_STYLE_TYPE.KATAKANA_IROHA:
                    return m(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
                case c.LIST_STYLE_TYPE.LAO:
                    return w(e, 3792, 3801, !0, n);
                case c.LIST_STYLE_TYPE.MONGOLIAN:
                    return w(e, 6160, 6169, !0, n);
                case c.LIST_STYLE_TYPE.MYANMAR:
                    return w(e, 4160, 4169, !0, n);
                case c.LIST_STYLE_TYPE.ORIYA:
                    return w(e, 2918, 2927, !0, n);
                case c.LIST_STYLE_TYPE.PERSIAN:
                    return w(e, 1776, 1785, !0, n);
                case c.LIST_STYLE_TYPE.TAMIL:
                    return w(e, 3046, 3055, !0, n);
                case c.LIST_STYLE_TYPE.TELUGU:
                    return w(e, 3174, 3183, !0, n);
                case c.LIST_STYLE_TYPE.THAI:
                    return w(e, 3664, 3673, !0, n);
                case c.LIST_STYLE_TYPE.TIBETAN:
                    return w(e, 3872, 3881, !0, n);
                case c.LIST_STYLE_TYPE.DECIMAL:
                default:
                    return w(e, 48, 57, !0, n)
                }
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseBorder = t.BORDER_SIDES = t.BORDER_STYLE = void 0;
    var n = A(37),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n),
        i = t.BORDER_STYLE = {
            NONE: 0,
            SOLID: 1
        },
        o = t.BORDER_SIDES = {
            TOP: 0,
            RIGHT: 1,
            BOTTOM: 2,
            LEFT: 3
        },
        a = Object.keys(o).map(function (e) {
            return e.toLowerCase()
        }),
        s = function (e) {
            switch (e) {
            case "none":
                return i.NONE
            }
            return i.SOLID
        };
    t.parseBorder = function (e) {
            return a.map(function (t) {
                var A = new r.
            default (e.getPropertyValue("border-" + t + "-color")),
                    n = s(e.getPropertyValue("border-" + t + "-style")),
                    i = parseFloat(e.getPropertyValue("border-" + t + "-width"));
                return {
                        borderColor: A,
                        borderStyle: n,
                        borderWidth: isNaN(i) ? 0 : i
                    }
            })
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseTextDecoration = t.TEXT_DECORATION_LINE = t.TEXT_DECORATION = t.TEXT_DECORATION_STYLE = void 0;
    var n = A(37),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n),
        i = t.TEXT_DECORATION_STYLE = {
            SOLID: 0,
            DOUBLE: 1,
            DOTTED: 2,
            DASHED: 3,
            WAVY: 4
        },
        o = t.TEXT_DECORATION = {
            NONE: null
        },
        a = t.TEXT_DECORATION_LINE = {
            UNDERLINE: 1,
            OVERLINE: 2,
            LINE_THROUGH: 3,
            BLINK: 4
        },
        s = function (e) {
            switch (e) {
            case "underline":
                return a.UNDERLINE;
            case "overline":
                return a.OVERLINE;
            case "line-through":
                return a.LINE_THROUGH
            }
            return a.BLINK
        },
        c = function (e) {
            return "none" === e ? null : e.split(" ").map(s)
        },
        l = function (e) {
            switch (e) {
            case "double":
                return i.DOUBLE;
            case "dotted":
                return i.DOTTED;
            case "dashed":
                return i.DASHED;
            case "wavy":
                return i.WAVY
            }
            return i.SOLID
        };
    t.parseTextDecoration = function (e) {
            var t = c(e.textDecorationLine ? e.textDecorationLine : e.textDecoration);
            return null === t ? o.NONE : {
                textDecorationLine: t,
                textDecorationColor: e.textDecorationColor ? new r.
            default (e.textDecorationColor):
                null,
                textDecorationStyle: l(e.textDecorationStyle)
            }
        }
},


function (e, t, A) {
    "use strict";
    t.decode = t.parse = A(743),
    t.encode = t.stringify = A(744)
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        var A = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
        return A
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function s() {}
    t.__esModule = !0,
    t.EXITING = t.ENTERED = t.ENTERING = t.EXITED = t.UNMOUNTED = void 0;
    var c = A(54),
        l = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var A in e) Object.prototype.hasOwnProperty.call(e, A) && (t[A] = e[A]);
            return t.
        default = e,
            t
        }(c),
        u = A(9),
        f = n(u),
        d = A(38),
        h = n(d),
        p = (A(250), t.UNMOUNTED = "unmounted"),
        g = t.EXITED = "exited",
        B = t.ENTERING = "entering",
        w = t.ENTERED = "entered",
        m = t.EXITING = "exiting",
        v = function (e) {
            function t(A, n) {
                i(this, t);
                var r = o(this, e.call(this, A, n)),
                    a = n.transitionGroup,
                    s = a && !a.isMounting ? A.enter : A.appear,
                    c = void 0;
                return r.nextStatus = null,
                A. in ? s ? (c = g, r.nextStatus = B) : c = w : c = A.unmountOnExit || A.mountOnEnter ? p : g,
                r.state = {
                        status: c
                    },
                r.nextCallback = null,
                r
            }
            return a(t, e),
            t.prototype.getChildContext = function () {
                return {
                    transitionGroup: null
                }
            },
            t.prototype.componentDidMount = function () {
                this.updateStatus(!0)
            },
            t.prototype.componentWillReceiveProps = function (e) {
                var t = this.pendingState || this.state,
                    A = t.status;
                e. in ? (A === p && this.setState({
                        status: g
                    }), A !== B && A !== w && (this.nextStatus = B)) : A !== B && A !== w || (this.nextStatus = m)
            },
            t.prototype.componentDidUpdate = function () {
                this.updateStatus()
            },
            t.prototype.componentWillUnmount = function () {
                this.cancelNextCallback()
            },
            t.prototype.getTimeouts = function () {
                var e = this.props.timeout,
                    t = void 0,
                    A = void 0,
                    n = void 0;
                return t = A = n = e,
                null != e && "number" != typeof e && (t = e.exit, A = e.enter, n = e.appear),
                {
                        exit: t,
                        enter: A,
                        appear: n
                    }
            },
            t.prototype.updateStatus = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = this.nextStatus;
                if (null !== t) {
                        this.nextStatus = null,
                        this.cancelNextCallback();
                        var A = h.
                    default.findDOMNode(this);
                        t === B ? this.performEnter(A, e):
                        this.performExit(A)
                    } else this.props.unmountOnExit && this.state.status === g && this.setState({
                        status: p
                    })
            },
            t.prototype.performEnter = function (e, t) {
                var A = this,
                    n = this.props.enter,
                    r = this.context.transitionGroup ? this.context.transitionGroup.isMounting : t,
                    i = this.getTimeouts();
                if (!t && !n) return void this.safeSetState({
                        status: w
                    }, function () {
                        A.props.onEntered(e)
                    });
                this.props.onEnter(e, r),
                this.safeSetState({
                        status: B
                    }, function () {
                        A.props.onEntering(e, r),
                        A.onTransitionEnd(e, i.enter, function () {
                            A.safeSetState({
                                status: w
                            }, function () {
                                A.props.onEntered(e, r)
                            })
                        })
                    })
            },
            t.prototype.performExit = function (e) {
                var t = this,
                    A = this.props.exit,
                    n = this.getTimeouts();
                if (!A) return void this.safeSetState({
                        status: g
                    }, function () {
                        t.props.onExited(e)
                    });
                this.props.onExit(e),
                this.safeSetState({
                        status: m
                    }, function () {
                        t.props.onExiting(e),
                        t.onTransitionEnd(e, n.exit, function () {
                            t.safeSetState({
                                status: g
                            }, function () {
                                t.props.onExited(e)
                            })
                        })
                    })
            },
            t.prototype.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
            },
            t.prototype.safeSetState = function (e, t) {
                var A = this;
                this.pendingState = e,
                t = this.setNextCallback(t),
                this.setState(e, function () {
                    A.pendingState = null,
                    t()
                })
            },
            t.prototype.setNextCallback = function (e) {
                var t = this,
                    A = !0;
                return this.nextCallback = function (n) {
                        A && (A = !1, t.nextCallback = null, e(n))
                    },
                this.nextCallback.cancel = function () {
                        A = !1
                    },
                this.nextCallback
            },
            t.prototype.onTransitionEnd = function (e, t, A) {
                this.setNextCallback(A),
                e ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t)) : setTimeout(this.nextCallback, 0)
            },
            t.prototype.render = function () {
                var e = this.state.status;
                if (e === p) return null;
                var t = this.props,
                    A = t.children,
                    n = r(t, ["children"]);
                if (delete n. in , delete n.mountOnEnter, delete n.unmountOnExit, delete n.appear, delete n.enter, delete n.exit, delete n.timeout, delete n.addEndListener, delete n.onEnter, delete n.onEntering, delete n.onEntered, delete n.onExit, delete n.onExiting, delete n.onExited, "function" == typeof A) return A(e, n);
                var i = f.
            default.Children.only(A);
                return f.
            default.cloneElement(i, n)
            },
            t
        }(f.
    default.Component);
    v.contextTypes = {
            transitionGroup: l.object
        },
    v.childContextTypes = {
            transitionGroup: function () {}
        },
    v.propTypes = {},
    v.defaultProps = { in : !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: s,
            onEntering: s,
            onEntered: s,
            onExit: s,
            onExiting: s,
            onExited: s
        },
    v.UNMOUNTED = 0,
    v.EXITED = 1,
    v.ENTERING = 2,
    v.ENTERED = 3,
    v.EXITING = 4,
    t.
default = v
},
, function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.IS_ONLINE = !! /music\.163\.com$/.test(location.host);
    t.HOST = n ? "music.163.com" : "qa-air.igame.163.com",
    t.ACTIVITY_NAME = "shuomingshu",
    t.BASE_URL = location.protocol + "//" + location.host + "/c/m2-spec"
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = A(75),
        i = n(r),
        o = A(76),
        a = n(o),
        s = A(16),
        c = n(s),
        l = A(561),
        u = n(l),
        f = function (e, t, A) {
            var n = void 0,
                r = void 0,
                i = void 0,
                o = void 0,
                a = void 0,
                s = function s() {
                    var c = +new Date - o;
                    c < t && c >= 0 ? n = setTimeout(s, t - c) : (n = null, A || (a = e.apply(i, r), n || (i = r = null)))
                };
            return function () {
                    i = this,
                    r = arguments,
                    o = +new Date;
                    var c = A && !n;
                    return n || (n = setTimeout(s, t)),
                    c && (a = e.apply(i, r), i = r = null),
                    a
                }
        }(function () {
            c.
        default.isInNEMapp() && (location.href = "orpheus://stopplay")
        }, 100, !0),
        d = function () {
            function e(t) {
                if ((0, i.
            default)(this, e), this.audioNode = document.createElement("audio"), "string" == typeof t && (t = {
                    src: t
                }), !t.src) throw new Error("播放地址不允许为空");
                this.audioNode.src = t.src,
                this.audioNode.preload = !! t.preload,
                this.audioNode.autoplay = !! t.autoplay,
                this.audioNode.loop = !! t.loop,
                this.paused = !t.autoplay,
                this.onPlaying = this.onPlaying.bind(this),
                this.onPause = this.onPause.bind(this),
                this.onPlay = this.onPlay.bind(this),
                this.onEnded = this.onEnded.bind(this),
                this.onError = this.onError.bind(this),
                this.audioNode.addEventListener("playing", this.onPlaying),
                this.audioNode.addEventListener("pause", this.onPause),
                this.audioNode.addEventListener("play", this.onPlay),
                this.audioNode.addEventListener("ended", this.onEnded),
                this.audioNode.addEventListener("error", this.onError)
            }
            return (0, a.
        default)(e, [{
                key: "play",
                value: function () {
                    try {
                        this.paused = !1,
                        f(),
                        this.audioNode.play()
                    } catch (e) {
                        console.log("[AUDIO]", e)
                    }
                }
            },
            {
                key: "load",
                value: function () {
                    try {
                        this.audioNode.load()
                    } catch (e) {
                        console.log("[AUDIO]", e)
                    }
                }
            },
            {
                key: "pause",
                value: function () {
                    try {
                        this.paused = !0,
                        this.audioNode.pause()
                    } catch (e) {
                        console.log("[AUDIO]", e)
                    }
                }
            },
            {
                key: "stop",
                value: function () {
                    try {
                        this.pause(),
                        this.audioNode.removeEventListener("playing", this.onPlaying),
                        this.audioNode.removeEventListener("pause", this.onPause),
                        this.audioNode.removeEventListener("play", this.onPlay),
                        this.audioNode.removeEventListener("ended", this.onEnded),
                        this.audioNode.removeEventListener("error", this.onError),
                        this.audioNode.currentTime = 0,
                        this.audioNode = null
                    } catch (e) {
                        console.log("[AUDIO]", e)
                    }
                }
            },
            {
                key: "isPlaying",
                value: function () {
                    return this.audioNode && this.audioNode.currentTime > 0 && !this.audioNode.paused
                }
            },
            {
                key: "isPaused",
                value: function () {
                    return this.audioNode && this.audioNode.paused
                }
            },
            {
                key: "shouldPlay",
                value: function () {
                    return !this.paused && this.audioNode && (this.audioNode.autoplay || this.audioNode.loop)
                }
            },
            {
                key: "setVolume",
                value: function (e) {
                    this.audioNode.volume = e
                }
            },
            {
                key: "getVolume",
                value: function () {
                    return this.audioNode.volume
                }
            },
            {
                key: "setCurrentTime",
                value: function (e) {
                    this.audioNode.currentTime = e
                }
            },
            {
                key: "getCurrentTime",
                value: function () {
                    return this.audioNode.currentTime
                }
            },
            {
                key: "onPlaying",
                value: function () {
                    this.emit("playing")
                }
            },
            {
                key: "onPause",
                value: function () {
                    this.emit("pause")
                }
            },
            {
                key: "onPlay",
                value: function () {
                    this.emit("play")
                }
            },
            {
                key: "onEnded",
                value: function () {
                    this.audioNode.loop || (this.paused = !0),
                    this.emit("ended")
                }
            },
            {
                key: "onError",
                value: function (e) {
                    this.audioNode.loop || (this.paused = !0),
                    this.emit("error")
                }
            }]),
            e
        }();
    t.
default = d,
    (0, u.
    default)(d.prototype),
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        return e && t && "object" === (void 0 === t ? "undefined" : (0, h.
    default)(t)) ? ((0, f.
    default)(t).forEach(function (A) {
            void 0 !== t[A] && (e[A] = t[A])
        }), e) : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = A(291),
        o = n(i),
        a = A(75),
        s = n(a),
        c = A(76),
        l = n(c),
        u = A(74),
        f = n(u),
        d = A(55),
        h = n(d),
        p = A(16),
        g = n(p),
        B = A(104),
        w = n(B),
        m = !! /music\.163\.com$/.test(location.host),
        v = m ? "music.163.com" : "qa.igame.163.com",
        y = function () {
            function e(t, A) {
                if ((0, s.
            default)(this, e), !t) throw new Error("活动名称不允许为空");
                this.name = t,
                this.id = A || 0
            }
            return (0, l.
        default)(e, [{
                key: "page",
                value: function (e, t) {
                    this.action("page", r({
                        type: "webviewactivity",
                        url: location.href,
                        target: this.name,
                        targetid: this.id,
                        page: e,
                        is_webview: g.
                    default.isMobile() && g.
                    default.isInNEMapp() ? 0:
                        1,
                        osver: g.
                    default.getOSVersionStr()
                    }, t))
                }
            },
            {
                key: "click",
                value: function (e, t, A) {
                    this.action("click", r({
                        resource: "webviewactivity",
                        url: location.href,
                        activity: this.name,
                        activityid: this.id,
                        page: e,
                        target: t,
                        is_webview: g.
                    default.isMobile() && g.
                    default.isInNEMapp() ? 0:
                        1,
                        osver: g.
                    default.getOSVersionStr()
                    }, A))
                }
            },
            {
                key: "download",
                value: function (e, t) {
                    this.action("click", r({
                        resource: "webviewactivity",
                        url: location.href,
                        activity: this.name,
                        activityid: this.id,
                        page: e,
                        target: "downloadclient",
                        targetid: "button",
                        is_webview: g.
                    default.isMobile() && g.
                    default.isInNEMapp() ? 0:
                        1,
                        osver: g.
                    default.getOSVersionStr()
                    }, t))
                }
            },
            {
                key: "open",
                value: function (e, t) {
                    this.action("click", r({
                        resource: "webviewactivity",
                        url: location.href,
                        activity: this.name,
                        activityid: this.id,
                        page: e,
                        target: "openclient",
                        targetid: "button",
                        is_webview: g.
                    default.isMobile() && g.
                    default.isInNEMapp() ? 0:
                        1,
                        osver: g.
                    default.getOSVersionStr()
                    }, t))
                }
            },
            {
                key: "action",
                value: function (e, t, A) {
                    (0, w.
                default)("//" + v + "/api/feedback/weblog", {
                        method: "post",
                        credentials: "include",
                        data: {
                            logs: (0, o.
                        default)([{
                                action: e,
                                json: t
                            }])
                        }
                    }).then(function () {
                        A && A()
                    }).
                    catch (function () {
                        A && A()
                    })
                }
            }]),
            e
        }();
    t.
default = y,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = A(55),
        i = n(r),
        o = A(16),
        a = n(o),
        s = A(275),
        c = n(s),
        l = A(278),
        u = n(l),
        f = "http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.cloudmusic",
        d = "//music.163.com/api/android/download/latest2",
        h = function () {};
    "undefined" != typeof window && (h = A(751), c.
    default.params.market && (d = d + "?market=" + c.
    default.params.market));
    var p = ["micromessenger", "qq", "weibo", "douban", "renren"],
        g = {
            topic: "subject",
            activity: "topic"
        },
        B = /igame\.163\.com/,
        w = function (e) {
            return p.indexOf(e) > -1
        },
        m = function (e) {
            if ("string" != typeof e) return "";
            var t = e;
            return "orpheus://" !== t.substring(0, 10) && (t = "orpheus://" + t),
            t
        },
        v = function (e) {
            var t = void 0;
            return function () {
                return t || (t = e())
            }
        }(function () {
            var e = window.location,
                t = e.hostname;
            t = B.test(t) ? "igame.163.com" : "music.163.com";
            var A = e.protocol + "//" + t + "/m/download",
                n = a.
        default.getPlatform2Str(),
                r = a.
        default.getClient(),
                i = a.
        default.isWP10(),
                o = a.
        default.getDevice();
            return "ios" === n ? A = "pad" === o ? "https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch":
            "micromessenger" === r || "qq" === r ? f : "https://itunes.apple.com/app/id590338362" : "wp" === n ? A = i ? "https://www.microsoft.com/store/apps/9nblggh6g0jf" : "http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39" : "micromessenger" === r || "qq" === r ? A = "http://a.app.qq.com/o/simple.jsp?pkgname=com.netease.cloudmusic&co-channel=87999" : "android" === n && (A = d),
            A
        }),
        y = function (e) {
            if (!e) return "";
            if ("undefined" == typeof window) return e;
            var t = m(e),
                A = window.location,
                n = A.search,
                r = A.hash,
                i = (0, s.parse)(n),
                o = (0, s.parse)(r && r.split("?")[1]),
                c = [];
            if (i.userid && -1 === t.indexOf("shareuserid=") && c.push("shareuserid=" + i.userid), i.yyfrom && -1 === t.indexOf("yyfrom=") && c.push("yyfrom=" + i.yyfrom), -1 === t.indexOf("thirdfrom=")) {
                    var l = a.
                default.getClient(),
                        u = a.
                default.fetchLogByClient(l);
                    u ? c.push("thirdfrom=" + u):
                    o.thirdfrom && c.push("thirdfrom=" + o.thirdfrom)
                }
            var f = t.indexOf("?") > 0 ? "&" : "?";
            return c.length > 0 ? "" + t + f + c.join("&") : t
        },
        E = /^\d+$/,
        Q = function (e, t) {
            var A = void 0;
            A = "openurl" === e ? a.
        default.isInNEMapp() ? "activity":
            "openurl" : g[e] || e;
            var n = String(t),
                r = E.test(n) ? "/" : "?";
            return n = "" !== n ? "" + r + t : "",
            "orpheus://" + A + n
        },
        C = /^orpheus:\/\//,
        U = ["blur", "pagehide", "beforeunload"],
        b = function () {
            var e = [],
                t = null,
                A = null;
            if ("undefined" != typeof window) {
                    var n = function t() {
                        e.forEach(function (e) {
                            window.clearTimeout(e)
                        }),
                        e = [],
                        U.forEach(function (e) {
                            window.removeEventListener(e, t, !1)
                        })
                    };
                    U.forEach(function (e) {
                        window.addEventListener(e, n, !1)
                    })
                }
            return function (n, r) {
                    var i = n;
                    if (i) if (i = y(i), a.
                default.isAndroidChrome()) {
                        var o = i;
                        C.test(o) && (o = o.substring(10));
                        var s = "";
                        "string" == typeof r && r.length > 0 && (s = ";S.browser_fallback_url=" + encodeURIComponent(r));
                        var c = "intent://" + o + "/#Intent;scheme=orpheus;package=com.netease.cloudmusic" + s + ";end";
                        location.href = c
                    } else window.setTimeout(function () {
                        "string" == typeof r && r.length > 0 && e.push(window.setTimeout(function () {
                            +new Date - t < 3100 && (window.top.location.href = r)
                        }, 3e3)),
                        t = +new Date,
                        a.
                    default.getIosLargeVersion() >= 9 ? location.href = i:
                        (A = document.createElement("iframe"), A.src = i, A.style.display = "none", document.body.appendChild(A), window.setTimeout(function () {
                            A && (document.body.removeChild(A), A = null)
                        }, 0))
                    }, 0)
                }
        }(),
        F = function (e, t, A, n) {
            var r = y(e),
                i = window.location,
                o = B.test(i.host) ? "m.igame.163.com" : "m.music.163.com",
                a = i.protocol + "//" + o + "/m/applink/?scheme=" + encodeURIComponent(r);
            n && (a = i.protocol + "//" + o + "/m/applink/emptydl/?scheme=" + encodeURIComponent(r)),
            "string" == typeof t && t && (a = a + "&dl=" + encodeURIComponent(t)),
            "boolean" == typeof A && A && (a += "&redirect=1"),
            i.href = a
        },
        _ = function () {};
    _ = function () {
            var e = [61323, 50123, 49387, 39783, 25023, 16384, 9489, 8732, 6467, 5390, 4678, 3557, 2878],
                t = function (e, t) {
                    _(e, t + 1)
                };
            return function (A, n) {
                    var r = n || 0;
                    if (!(r >= e.length)) {
                        var i = +new Date,
                            o = (0, s.stringify)({
                                k: i,
                                s: (0, u.
                            default)("-x1*0a<-" + i),
                                r: A
                            });
                        h({
                                url: "http://intent.music.163.com:" + e[r] + "/something2?" + o,
                                crossOrigin: !0,
                                method: "get",
                                type: "html",
                                contentType: "text/plain",
                                success: function (e) {
                                    var n = e;
                                    if ("" !== n) {
                                        n = n.replace(/\'/g, '"'),
                                        n = JSON.parse(n);
                                        n.data === (0, u.
                                    default)("i am alive") || t(A, r)
                                    } else t(A, r)
                                },
                                error: function (e) {
                                    t(A, r)
                                }
                            })
                    }
                }
        }();
    var H = function () {
            var e = window.location,
                t = e.hostname;
            return t = B.test(t) ? "igame.163.com" : "music.163.com",
            e.protocol + "//" + t + "/m/download"
        },
        x = function (e) {
            var t = e.platform,
                A = e.client,
                n = e.deepLink,
                r = e.storeLink,
                i = e.autoRedirect,
                o = e.emptylink,
                s = e.guideCallback,
                c = t || a.
        default.getPlatform2Str(),
                l = A || a.
        default.getClient(),
                u = r;
            if (u && "android" === c) {
                    u = H() + "?dl=" + encodeURIComponent(u)
                }
            if (a.
            default.isInNEMapp()) b(n);
            else if (a.
            default.getIosLargeVersion() >= 9 && !a.
            default.isPad())"micromessenger" !== l && "qq" !== l || (u = ""),
            F(n, u, i, o);
            else if (l && w(l)) {
                    if (s && s({
                        platform: c,
                        client: l
                    }), "android" === c) {
                        var f = y(n);
                        _(f)
                    }
                } else b(n, u)
        },
        N = /^https?:\/\//,
        T = function (e, t) {
            if (!e || !t) throw new Error("deepLink and resLink must be exist");
            var A = e;
            "object" === (void 0 === e ? "undefined" : (0, i.
        default)(e)) && (A = Q(e.resType, e.resQuery));
            var n = Date.now(),
                r = t;
            if (!N.test(r)) {
                    var o = "/" === r.charAt(0) ? "" : "/";
                    r = location.protocol + "//" + location.host + o + r
                }
            if (a.
            default.isInNEMapp()) b(A);
            else if (a.
            default.getIosLargeVersion() >= 9) F(A, r, !0),
            setTimeout(function () {
                    Date.now() - n < 200 && (location.href = r)
                }, 100);
            else if (a.
            default.isAndroidChrome()) b(A, r);
            else {
                    var s = a.
                default.getPlatform2Str();
                    "android" === s ? _(y(A)):
                    b(A),
                    setTimeout(function () {
                        location.href = r
                    }, 0)
                }
        },
        I = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.platform,
                A = e.client,
                n = e.storeLink,
                r = e.guideCallback,
                i = t || a.
        default.getPlatform2Str(),
                o = A || a.
        default.getClient(),
                s = n || v();
            return "ios" === i && ("weibo" === o || "douban" === o) || a.
        default.isPad() && ("micromessenger" === o || "qq" === o) ? r ? r({
                    platform: i,
                    client: o
                }):
            "" : ("undefined" != typeof location && (location.href = s), s)
        },
        S = {
            wakeup: x,
            wakeupBeforeLink: T,
            downloadApp: I,
            getOrpheusLink: Q,
            orpheus: b,
            appendBIQuery: y,
            uvl: F,
            getAppDownUrl: v,
            androidWakeup: _
        };
    t.
default = S,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = document.createElement("div");
        document.body.appendChild(t);
        var A = s({}, e, {
                container: t
            });
        h.
    default.render(u.
        default.createElement(w, A), t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign ||
    function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var A = arguments[t];
            for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n])
        }
        return e
    },
        c = function () {
            function e(e, t) {
                for (var A = 0; A < t.length; A++) {
                    var n = t[A];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, A, n) {
                return A && e(t.prototype, A),
                n && e(t, n),
                t
            }
        }();
    t.
default = a,
    A(563);
    var l = A(9),
        u = n(l),
        f = A(249),
        d = A(38),
        h = n(d),
        p = A(54),
        g = n(p),
        B = {
            ios: "Safari",
            ie: "ie"
        },
        w = function (e) {
            function t() {
                r(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.state = {
                    show: !0
                },
                e.close = e.close.bind(e),
                e.dispose = e.dispose.bind(e),
                e
            }
            return o(t, e),
            c(t, [{
                key: "close",
                value: function () {
                    this.setState({
                        show: !1
                    }),
                    setTimeout(this.dispose, 300)
                }
            },
            {
                key: "dispose",
                value: function () {
                    var e = this.props.container;
                    h.
                default.unmountComponentAtNode(e),
                    e.parentNode.removeChild(e)
                }
            },
            {
                key: "render",
                value: function () {
                    var e = this.props.platform,
                        t = this.state.show,
                        A = B[e] || "浏览器";
                    return u.
                default.createElement(f.CSSTransition, { in : t,
                            classNames: "z-fade",
                            appear: !0,
                            enter: !1,
                            exit: !1,
                            unmountOnExit: !0,
                            timeout: 300
                        }, u.
                    default.createElement("div", {
                            className: "m-openmask",
                            onClick: this.close
                        }, u.
                    default.createElement("div", {
                            className: "opentip"
                        }, u.
                    default.createElement("div", {
                            className: "lay"
                        }, u.
                    default.createElement("div", {
                            className: "note"
                        }, u.
                    default.createElement("h3", null, "链接打不开？"), u.
                    default.createElement("p", null, "请点击右上角", u.
                    default.createElement("br", null), "选择在 ", u.
                    default.createElement("span", {
                            className: "s-fc5"
                        }, " “", A, "”"), " 中打开"))))))
                }
            }]),
            t
        }(l.Component);
    w.propTypes = {
            container: g.
        default.object.isRequired
        },
    e.exports = t.
default
},


function (e, t) {
    var A = {}.toString;
    e.exports = function (e) {
        return A.call(e).slice(8, -1)
    }
},


function (e, t, A) {
    var n = A(309);
    e.exports = function (e, t, A) {
        if (n(e), void 0 === t) return e;
        switch (A) {
        case 1:
            return function (A) {
                return e.call(t, A)
            };
        case 2:
            return function (A, n) {
                return e.call(t, A, n)
            };
        case 3:
            return function (A, n, r) {
                return e.call(t, A, n, r)
            }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
},


function (e, t, A) {
    var n = A(58),
        r = A(33).document,
        i = n(r) && n(r.createElement);
    e.exports = function (e) {
            return i ? r.createElement(e) : {}
        }
},


function (e, t, A) {
    e.exports = !A(39) && !A(69)(function () {
        return 7 != Object.defineProperty(A(160)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
},


function (e, t, A) {
    "use strict";
    var n = A(108),
        r = A(56),
        i = A(169),
        o = A(57),
        a = A(40),
        s = A(107),
        c = A(316),
        l = A(111),
        u = A(166),
        f = A(60)("iterator"),
        d = !([].keys && "next" in [].keys()),
        h = function () {
            return this
        };
    e.exports = function (e, t, A, p, g, B, w) {
            c(A, t, p);
            var m, v, y, E = function (e) {
                if (!d && e in b) return b[e];
                switch (e) {
                case "keys":
                case "values":
                    return function () {
                        return new A(this, e)
                    }
                }
                return function () {
                    return new A(this, e)
                }
            },
                Q = t + " Iterator",
                C = "values" == g,
                U = !1,
                b = e.prototype,
                F = b[f] || b["@@iterator"] || g && b[g],
                _ = !d && F || E(g),
                H = g ? C ? E("entries") : _ : void 0,
                x = "Array" == t ? b.entries || F : F;
            if (x && (y = u(x.call(new e))) !== Object.prototype && y.next && (l(y, Q, !0), n || a(y, f) || o(y, f, h)), C && F && "values" !== F.name && (U = !0, _ = function () {
                    return F.call(this)
                }), n && !w || !d && !U && b[f] || o(b, f, _), s[t] = _, s[Q] = h, g) if (m = {
                    values: C ? _ : E("values"),
                    keys: B ? _ : E("keys"),
                    entries: H
                }, w) for (v in m) v in b || i(b, v, m[v]);
            else r(r.P + r.F * (d || U), t, m);
            return m
        }
},


function (e, t, A) {
    var n = A(110),
        r = A(78),
        i = A(59),
        o = A(116),
        a = A(40),
        s = A(161),
        c = Object.getOwnPropertyDescriptor;
    t.f = A(39) ? c : function (e, t) {
            if (e = i(e), t = o(t, !0), s) try {
                return c(e, t)
            } catch (e) {}
            if (a(e, t)) return r(!n.f.call(e, t), e[t])
        }
},


function (e, t, A) {
    var n = A(167),
        r = A(106).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames ||
    function (e) {
            return n(e, r)
        }
},


function (e, t) {
    t.f = Object.getOwnPropertySymbols
},


function (e, t, A) {
    var n = A(40),
        r = A(115),
        i = A(112)("IE_PROTO"),
        o = Object.prototype;
    e.exports = Object.getPrototypeOf ||
    function (e) {
            return e = r(e),
            n(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
        }
},


function (e, t, A) {
    var n = A(40),
        r = A(59),
        i = A(311)(!1),
        o = A(112)("IE_PROTO");
    e.exports = function (e, t) {
            var A, a = r(e),
                s = 0,
                c = [];
            for (A in a) A != o && n(a, A) && c.push(A);
            for (; t.length > s;) n(a, A = t[s++]) && (~i(c, A) || c.push(A));
            return c
        }
},


function (e, t, A) {
    var n = A(56),
        r = A(23),
        i = A(69);
    e.exports = function (e, t) {
            var A = (r.Object || {})[e] || Object[e],
                o = {};
            o[e] = t(A),
            n(n.S + n.F * i(function () {
                    A(1)
                }), "Object", o)
        }
},


function (e, t, A) {
    e.exports = A(57)
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {},
, function (e, t, A) {
    e.exports = A.p + "client/img/gender/boy.bd0d3273.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/gender/g_title.0b1cfed5.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/gender/girl.090fb24b.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/logo_new.a05db73b.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d1.2c897584.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d10.50589dec.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d11.84f152d9.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d12.246ccfd7.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d2.6e383699.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d3.aba8fd43.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d4.7d2f15f0.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d5.e01d925b.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d6.bc931ccb.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d7.aa4c4f84.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d8.751842af.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/ret/d9.aac7cf15.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/t/t1.762abffc.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/t/t2.7bd55937.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/t/t3.0c280635.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/t/t4.3e5e0f74.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/t/t5.0ac4c25e.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/t/t6.5edd5340.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/t/t7.65b3eab0.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/t/t8.716baa26.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/t/t9.13916ca8.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/timu-black.723854a1.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/timu-purple.10935c04.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/timu-red.cc00e68d.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/timu-white.48bfe7e0.png"
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.FontMetrics = void 0;
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = A(66);
    t.FontMetrics = function () {
            function e(t) {
                n(this, e),
                this._data = {},
                this._document = t
            }
            return r(e, [{
                key: "_parseMetrics",
                value: function (e) {
                    var t = this._document.createElement("div"),
                        A = this._document.createElement("img"),
                        n = this._document.createElement("span"),
                        r = this._document.body;
                    if (!r) throw new Error("");
                    t.style.visibility = "hidden",
                    t.style.fontFamily = e.fontFamily,
                    t.style.fontSize = e.fontSize,
                    t.style.margin = "0",
                    t.style.padding = "0",
                    r.appendChild(t),
                    A.src = i.SMALL_IMAGE,
                    A.width = 1,
                    A.height = 1,
                    A.style.margin = "0",
                    A.style.padding = "0",
                    A.style.verticalAlign = "baseline",
                    n.style.fontFamily = e.fontFamily,
                    n.style.fontSize = e.fontSize,
                    n.style.margin = "0",
                    n.style.padding = "0",
                    n.appendChild(this._document.createTextNode("Hidden Text")),
                    t.appendChild(n),
                    t.appendChild(A);
                    var o = A.offsetTop - n.offsetTop + 2;
                    t.removeChild(n),
                    t.appendChild(this._document.createTextNode("Hidden Text")),
                    t.style.lineHeight = "normal",
                    A.style.verticalAlign = "super";
                    var a = A.offsetTop - t.offsetTop + 2;
                    return r.removeChild(t),
                    {
                            baseline: o,
                            middle: a
                        }
                }
            },
            {
                key: "getMetrics",
                value: function (e) {
                    var t = e.fontFamily + " " + e.fontSize;
                    return void 0 === this._data[t] && (this._data[t] = this._parseMetrics(e)),
                    this._data[t]
                }
            }]),
            e
        }()
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.reformatInputBounds = t.inlineSelectElement = t.inlineTextAreaElement = t.inlineInputElement = t.getInputBorderRadius = t.INPUT_BACKGROUND = t.INPUT_BORDERS = t.INPUT_COLOR = void 0;
    var r = A(98),
        i = n(r),
        o = A(73),
        a = A(148),
        s = A(722),
        c = n(s),
        l = A(100),
        u = n(l),
        f = A(37),
        d = n(f),
        h = A(53),
        p = n(h),
        g = (A(36), A(239), A(66)),
        B = (t.INPUT_COLOR = new d.
    default ([42, 42, 42]), new d.
    default ([165, 165, 165])),
        w = new d.
default ([222, 222, 222]),
        m = {
            borderWidth: 1,
            borderColor: B,
            borderStyle: a.BORDER_STYLE.SOLID
        },
        v = (t.INPUT_BORDERS = [m, m, m, m], t.INPUT_BACKGROUND = {
            backgroundColor: w,
            backgroundImage: [],
            backgroundClip: o.BACKGROUND_CLIP.PADDING_BOX,
            backgroundOrigin: o.BACKGROUND_ORIGIN.PADDING_BOX
        }, new p.
    default ("50%")),
        y = [v, v],
        E = [y, y, y, y],
        Q = new p.
default ("3px"),
        C = [Q, Q],
        U = [C, C, C, C],
        b = (t.getInputBorderRadius = function (e) {
            return "radio" === e.type ? E : U
        }, t.inlineInputElement = function (e, t) {
            if ("radio" === e.type || "checkbox" === e.type) {
                if (e.checked) {
                    var A = Math.min(t.bounds.width, t.bounds.height);
                    t.childNodes.push("checkbox" === e.type ? [new u.
                default (t.bounds.left + .39363 * A, t.bounds.top + .79 * A), new u.
                default (t.bounds.left + .16 * A, t.bounds.top + .5549 * A), new u.
                default (t.bounds.left + .27347 * A, t.bounds.top + .44071 * A), new u.
                default (t.bounds.left + .39694 * A, t.bounds.top + .5649 * A), new u.
                default (t.bounds.left + .72983 * A, t.bounds.top + .23 * A), new u.
                default (t.bounds.left + .84 * A, t.bounds.top + .34085 * A), new u.
                default (t.bounds.left + .39363 * A, t.bounds.top + .79 * A)] : new c.
                default (t.bounds.left + A / 4, t.bounds.top + A / 4, A / 4))
                }
            } else b(F(e), e, t, !1)
        }, t.inlineTextAreaElement = function (e, t) {
            b(e.value, e, t, !0)
        }, t.inlineSelectElement = function (e, t) {
            var A = e.options[e.selectedIndex || 0];
            b(A ? A.text || "" : "", e, t, !1)
        }, t.reformatInputBounds = function (e) {
            return e.width > e.height ? (e.left += (e.width - e.height) / 2, e.width = e.height) : e.width < e.height && (e.top += (e.height - e.width) / 2, e.height = e.width),
            e
        }, function (e, t, A, n) {
            var r = t.ownerDocument.body;
            if (e.length > 0 && r) {
                var o = t.ownerDocument.createElement("html2canvaswrapper");
                (0, g.copyCSSStyles)(t.ownerDocument.defaultView.getComputedStyle(t, null), o),
                o.style.position = "absolute",
                o.style.left = A.bounds.left + "px",
                o.style.top = A.bounds.top + "px",
                n || (o.style.whiteSpace = "nowrap");
                var a = t.ownerDocument.createTextNode(e);
                o.appendChild(a),
                r.appendChild(o),
                A.childNodes.push(i.
            default.fromTextNode(a, A)),
                r.removeChild(o)
            }
        }),
        F = function (e) {
            var t = "password" === e.type ? new Array(e.value.length + 1).join("•") : e.value;
            return 0 === t.length ? e.placeholder || "" : t
        }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = function () {
            function e(t, A, r) {
                n(this, e),
                this.enabled = "undefined" != typeof window && t,
                this.start = r || Date.now(),
                this.id = A
            }
            return r(e, [{
                key: "child",
                value: function (t) {
                    return new e(this.enabled, t, this.start)
                }
            },
            {
                key: "log",
                value: function () {
                    if (this.enabled && window.console && window.console.log) {
                        for (var e = arguments.length, t = Array(e), A = 0; A < e; A++) t[A] = arguments[A];
                        Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + "ms", this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"].concat([].slice.call(t, 0)))
                    }
                }
            },
            {
                key: "error",
                value: function () {
                    if (this.enabled && window.console && window.console.error) {
                        for (var e = arguments.length, t = Array(e), A = 0; A < e; A++) t[A] = arguments[A];
                        Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + "ms", this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"].concat([].slice.call(t, 0)))
                    }
                }
            }]),
            e
        }();
    t.
default = i
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Proxy = void 0;
    var n = A(97),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n);
    t.Proxy = function (e, t) {
            if (!t.proxy) return Promise.reject(null);
            var A = t.proxy;
            return new Promise(function (n, i) {
                var o = r.
            default.SUPPORT_CORS_XHR && r.
            default.SUPPORT_RESPONSE_TYPE ? "blob":
                "text",
                    a = r.
            default.SUPPORT_CORS_XHR ? new XMLHttpRequest:
                new XDomainRequest;
                if (a.onload = function () {
                        if (a instanceof XMLHttpRequest) if (200 === a.status) if ("text" === o) n(a.response);
                        else {
                            var e = new FileReader;
                            e.addEventListener("load", function () {
                                return n(e.result)
                            }, !1),
                            e.addEventListener("error", function (e) {
                                return i(e)
                            }, !1),
                            e.readAsDataURL(a.response)
                        } else i("");
                        else n(a.responseText)
                    }, a.onerror = i, a.open("GET", A + "?url=" + encodeURIComponent(e) + "&responseType=" + o), "text" !== o && a instanceof XMLHttpRequest && (a.responseType = o), t.imageTimeout) {
                        var s = t.imageTimeout;
                        a.timeout = s,
                        a.ontimeout = function () {
                            return i("")
                        }
                    }
                a.send()
            })
        }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseTextBounds = t.TextBounds = void 0;
    var r = A(36),
        i = A(149),
        o = A(97),
        a = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(o),
        s = A(240),
        c = t.TextBounds = function e(t, A) {
            n(this, e),
            this.text = t,
            this.bounds = A
        },
        l = (t.parseTextBounds = function (e, t, A) {
            for (var n = 0 !== t.style.letterSpacing, r = n ? (0, s.toCodePoints)(e).map(function (e) {
                return (0, s.fromCodePoint)(e)
            }) : (0, s.breakWords)(e, t), o = r.length, f = A.parentNode ? A.parentNode.ownerDocument.defaultView : null, d = f ? f.pageXOffset : 0, h = f ? f.pageYOffset : 0, p = [], g = 0, B = 0; B < o; B++) {
                var w = r[B];
                if (t.style.textDecoration !== i.TEXT_DECORATION.NONE || w.trim().length > 0) if (a.
            default.SUPPORT_RANGE_BOUNDS) p.push(new c(w, u(A, g, w.length, d, h)));
                else {
                    var m = A.splitText(w.length);
                    p.push(new c(w, l(A, d, h))),
                    A = m
                } else a.
            default.SUPPORT_RANGE_BOUNDS || (A = A.splitText(w.length));
                g += w.length
            }
            return p
        }, function (e, t, A) {
            var n = e.ownerDocument.createElement("html2canvaswrapper");
            n.appendChild(e.cloneNode(!0));
            var i = e.parentNode;
            if (i) {
                i.replaceChild(n, e);
                var o = (0, r.parseBounds)(n, t, A);
                return n.firstChild && i.replaceChild(n.firstChild, n),
                o
            }
            return new r.Bounds(0, 0, 0, 0)
        }),
        u = function (e, t, A, n, i) {
            var o = e.ownerDocument.createRange();
            return o.setStart(e, t),
            o.setEnd(e, t + A),
            r.Bounds.fromClientRect(o.getBoundingClientRect(), n, i)
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.breakWords = t.fromCodePoint = t.toCodePoints = void 0;
    var n = A(538);
    Object.defineProperty(t, "toCodePoints", {
        enumerable: !0,
        get: function () {
            return n.toCodePoints
        }
    }),
    Object.defineProperty(t, "fromCodePoint", {
        enumerable: !0,
        get: function () {
            return n.fromCodePoint
        }
    });
    var r = A(65),
        i = (function (e) {
            e && e.__esModule
        }(r), A(241));
    t.breakWords = function (e, t) {
            for (var A = (0, n.LineBreaker)(e, {
                lineBreak: t.style.lineBreak,
                wordBreak: t.style.overflowWrap === i.OVERFLOW_WRAP.BREAK_WORD ? "break-word" : t.style.wordBreak
            }), r = [], o = void 0; !(o = A.next()).done;) r.push(o.value.slice());
            return r
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.OVERFLOW_WRAP = {
        NORMAL: 0,
        BREAK_WORD: 1
    };
    t.parseOverflowWrap = function (e) {
        switch (e) {
        case "break-word":
            return n.BREAK_WORD;
        case "normal":
        default:
            return n.NORMAL
        }
    }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parsePadding = t.PADDING_SIDES = void 0;
    var n = A(53),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n),
        i = (t.PADDING_SIDES = {
            TOP: 0,
            RIGHT: 1,
            BOTTOM: 2,
            LEFT: 3
        }, ["top", "right", "bottom", "left"]);
    t.parsePadding = function (e) {
            return i.map(function (t) {
                return new r.
            default (e.getPropertyValue("padding-" + t))
            })
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.POSITION = {
        STATIC: 0,
        RELATIVE: 1,
        ABSOLUTE: 2,
        FIXED: 3,
        STICKY: 4
    };
    t.parsePosition = function (e) {
        switch (e) {
        case "relative":
            return n.RELATIVE;
        case "absolute":
            return n.ABSOLUTE;
        case "fixed":
            return n.FIXED;
        case "sticky":
            return n.STICKY
        }
        return n.STATIC
    }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.TEXT_TRANSFORM = {
        NONE: 0,
        LOWERCASE: 1,
        UPPERCASE: 2,
        CAPITALIZE: 3
    };
    t.parseTextTransform = function (e) {
        switch (e) {
        case "uppercase":
            return n.UPPERCASE;
        case "lowercase":
            return n.LOWERCASE;
        case "capitalize":
            return n.CAPITALIZE
        }
        return n.NONE
    }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = A(99),
        o = A(149),
        a = function (e, t) {
            var A = Math.max.apply(null, e.colorStops.map(function (e) {
                return e.stop
            })),
                n = 1 / Math.max(1, A);
            e.colorStops.forEach(function (e) {
                    t.addColorStop(n * e.stop, e.color.toString())
                })
        },
        s = function () {
            function e(t) {
                n(this, e),
                this.canvas = t || document.createElement("canvas")
            }
            return r(e, [{
                key: "render",
                value: function (e) {
                    this.ctx = this.canvas.getContext("2d"),
                    this.options = e,
                    this.canvas.width = Math.floor(e.width * e.scale),
                    this.canvas.height = Math.floor(e.height * e.scale),
                    this.canvas.style.width = e.width + "px",
                    this.canvas.style.height = e.height + "px",
                    this.ctx.scale(this.options.scale, this.options.scale),
                    this.ctx.translate(-e.x, -e.y),
                    this.ctx.textBaseline = "bottom",
                    e.logger.log("Canvas renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + this.options.scale)
                }
            },
            {
                key: "clip",
                value: function (e, t) {
                    var A = this;
                    e.length && (this.ctx.save(), e.forEach(function (e) {
                        A.path(e),
                        A.ctx.clip()
                    })),
                    t(),
                    e.length && this.ctx.restore()
                }
            },
            {
                key: "drawImage",
                value: function (e, t, A) {
                    this.ctx.drawImage(e, t.left, t.top, t.width, t.height, A.left, A.top, A.width, A.height)
                }
            },
            {
                key: "drawShape",
                value: function (e, t) {
                    this.path(e),
                    this.ctx.fillStyle = t.toString(),
                    this.ctx.fill()
                }
            },
            {
                key: "fill",
                value: function (e) {
                    this.ctx.fillStyle = e.toString(),
                    this.ctx.fill()
                }
            },
            {
                key: "getTarget",
                value: function () {
                    return Promise.resolve(this.canvas)
                }
            },
            {
                key: "path",
                value: function (e) {
                    var t = this;
                    this.ctx.beginPath(),
                    Array.isArray(e) ? e.forEach(function (e, A) {
                        var n = e.type === i.PATH.VECTOR ? e : e.start;
                        0 === A ? t.ctx.moveTo(n.x, n.y) : t.ctx.lineTo(n.x, n.y),
                        e.type === i.PATH.BEZIER_CURVE && t.ctx.bezierCurveTo(e.startControl.x, e.startControl.y, e.endControl.x, e.endControl.y, e.end.x, e.end.y)
                    }) : this.ctx.arc(e.x + e.radius, e.y + e.radius, e.radius, 0, 2 * Math.PI, !0),
                    this.ctx.closePath()
                }
            },
            {
                key: "rectangle",
                value: function (e, t, A, n, r) {
                    this.ctx.fillStyle = r.toString(),
                    this.ctx.fillRect(e, t, A, n)
                }
            },
            {
                key: "renderLinearGradient",
                value: function (e, t) {
                    var A = this.ctx.createLinearGradient(e.left + t.direction.x1, e.top + t.direction.y1, e.left + t.direction.x0, e.top + t.direction.y0);
                    a(t, A),
                    this.ctx.fillStyle = A,
                    this.ctx.fillRect(e.left, e.top, e.width, e.height)
                }
            },
            {
                key: "renderRadialGradient",
                value: function (e, t) {
                    var A = this,
                        n = e.left + t.center.x,
                        r = e.top + t.center.y,
                        i = this.ctx.createRadialGradient(n, r, 0, n, r, t.radius.x);
                    if (i) if (a(t, i), this.ctx.fillStyle = i, t.radius.x !== t.radius.y) {
                            var o = e.left + .5 * e.width,
                                s = e.top + .5 * e.height,
                                c = t.radius.y / t.radius.x,
                                l = 1 / c;
                            this.transform(o, s, [1, 0, 0, c, 0, 0], function () {
                                    return A.ctx.fillRect(e.left, l * (e.top - s) + s, e.width, e.height * l)
                                })
                        } else this.ctx.fillRect(e.left, e.top, e.width, e.height)
                }
            },
            {
                key: "renderRepeat",
                value: function (e, t, A, n, r) {
                    this.path(e),
                    this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(t, A), "repeat"),
                    this.ctx.translate(n, r),
                    this.ctx.fill(),
                    this.ctx.translate(-n, -r)
                }
            },
            {
                key: "renderTextNode",
                value: function (e, t, A, n, r) {
                    var i = this;
                    this.ctx.font = [A.fontStyle, A.fontVariant, A.fontWeight, A.fontSize, A.fontFamily].join(" "),
                    e.forEach(function (e) {
                        if (i.ctx.fillStyle = t.toString(), r && e.text.trim().length ? r.slice(0).reverse().forEach(function (t) {
                            i.ctx.shadowColor = t.color.toString(),
                            i.ctx.shadowOffsetX = t.offsetX * i.options.scale,
                            i.ctx.shadowOffsetY = t.offsetY * i.options.scale,
                            i.ctx.shadowBlur = t.blur,
                            i.ctx.fillText(e.text, e.bounds.left, e.bounds.top + e.bounds.height)
                        }) : i.ctx.fillText(e.text, e.bounds.left, e.bounds.top + e.bounds.height), null !== n) {
                            var a = n.textDecorationColor || t;
                            n.textDecorationLine.forEach(function (t) {
                                switch (t) {
                                case o.TEXT_DECORATION_LINE.UNDERLINE:
                                    var n = i.options.fontMetrics.getMetrics(A),
                                        r = n.baseline;
                                    i.rectangle(e.bounds.left, Math.round(e.bounds.top + r), e.bounds.width, 1, a);
                                    break;
                                case o.TEXT_DECORATION_LINE.OVERLINE:
                                    i.rectangle(e.bounds.left, Math.round(e.bounds.top), e.bounds.width, 1, a);
                                    break;
                                case o.TEXT_DECORATION_LINE.LINE_THROUGH:
                                    var s = i.options.fontMetrics.getMetrics(A),
                                        c = s.middle;
                                    i.rectangle(e.bounds.left, Math.ceil(e.bounds.top + c), e.bounds.width, 1, a)
                                }
                            })
                        }
                    })
                }
            },
            {
                key: "resizeImage",
                value: function (e, t) {
                    if (e.width === t.width && e.height === t.height) return e;
                    var A = this.canvas.ownerDocument.createElement("canvas");
                    return A.width = t.width,
                    A.height = t.height,
                    A.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, t.width, t.height),
                    A
                }
            },
            {
                key: "setOpacity",
                value: function (e) {
                    this.ctx.globalAlpha = e
                }
            },
            {
                key: "transform",
                value: function (e, t, A, n) {
                    this.ctx.save(),
                    this.ctx.translate(e, t),
                    this.ctx.transform(A[0], A[1], A[2], A[3], A[4], A[5]),
                    this.ctx.translate(-e, -t),
                    n(),
                    this.ctx.restore()
                }
            }]),
            e
        }();
    t.
default = s
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = function () {
            function e(t) {
                n(this, e),
                this.element = t
            }
            return r(e, [{
                key: "render",
                value: function (e) {
                    var t = this;
                    this.options = e,
                    this.canvas = document.createElement("canvas"),
                    this.ctx = this.canvas.getContext("2d"),
                    this.canvas.width = Math.floor(e.width) * e.scale,
                    this.canvas.height = Math.floor(e.height) * e.scale,
                    this.canvas.style.width = e.width + "px",
                    this.canvas.style.height = e.height + "px",
                    e.logger.log("ForeignObject renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale);
                    var A = o(Math.max(e.windowWidth, e.width) * e.scale, Math.max(e.windowHeight, e.height) * e.scale, e.scrollX * e.scale, e.scrollY * e.scale, this.element);
                    return a(A).then(function (A) {
                        return e.backgroundColor && (t.ctx.fillStyle = e.backgroundColor.toString(), t.ctx.fillRect(0, 0, e.width * e.scale, e.height * e.scale)),
                        t.ctx.drawImage(A, -e.x * e.scale, -e.y * e.scale),
                        t.canvas
                    })
                }
            }]),
            e
        }();
    t.
default = i;
    var o = t.createForeignObjectSVG = function (e, t, A, n, r) {
            var i = "http://www.w3.org/2000/svg",
                o = document.createElementNS(i, "svg"),
                a = document.createElementNS(i, "foreignObject");
            return o.setAttributeNS(null, "width", e),
            o.setAttributeNS(null, "height", t),
            a.setAttributeNS(null, "width", "100%"),
            a.setAttributeNS(null, "height", "100%"),
            a.setAttributeNS(null, "x", A),
            a.setAttributeNS(null, "y", n),
            a.setAttributeNS(null, "externalResourcesRequired", "true"),
            o.appendChild(a),
            a.appendChild(r),
            o
        },
        a = t.loadSerializedSVG = function (e) {
            return new Promise(function (t, A) {
                var n = new Image;
                n.onload = function () {
                    return t(n)
                },
                n.onerror = A,
                n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(e))
            })
        }
},
, function (e, t, A) {
    var n, r;
    !
    function (A, i) {
        n = [],
        void 0 !== (r = function () {
            return A.PxLoader = i()
        }.apply(t, n)) && (e.exports = r)
    }(this, function () {
        function e(e) {
            e = e || {},
            this.settings = e,
            null == e.statusInterval && (e.statusInterval = 5e3),
            null == e.loggingDelay && (e.loggingDelay = 2e4),
            null == e.noProgressTimeout && (e.noProgressTimeout = 1 / 0);
            var A, n = [],
                r = [],
                i = [],
                o = Date.now(),
                a = {
                    QUEUED: 0,
                    WAITING: 1,
                    LOADED: 2,
                    ERROR: 3,
                    TIMEOUT: 4
                },
                s = function (e) {
                    return null == e ? [] : Array.isArray(e) ? e : [e]
                };
            this.add = function (e) {
                    e.tags = new t(e.tags),
                    null == e.priority && (e.priority = 1 / 0),
                    n.push({
                        resource: e,
                        status: a.QUEUED
                    })
                },
            this.addProgressListener = function (e, A) {
                    i.push({
                        callback: e,
                        tags: new t(A)
                    })
                },
            this.addCompletionListener = function (e, A) {
                    r.push({
                        tags: new t(A),
                        callback: function (t) {
                            t.completedCount === t.totalCount && e(t)
                        }
                    })
                };
            var c = function (e) {
                    e = s(e);
                    var t = function (t) {
                        for (var A = t.resource, n = 1 / 0, r = 0; r < A.tags.length; r++) for (var i = 0; i < Math.min(e.length, n) && !(A.tags.all[r] === e[i] && i < n && 0 === (n = i)) && 0 !== n; i++);
                        return n
                    };
                    return function (e, A) {
                        var n = t(e),
                            r = t(A);
                        return n < r ? -1 : n > r ? 1 : e.priority < A.priority ? -1 : e.priority > A.priority ? 1 : 0
                    }
                };
            this.start = function (e) {
                    A = Date.now();
                    var t = c(e);
                    n.sort(t);
                    for (var r = 0, i = n.length; r < i; r++) {
                        var o = n[r];
                        o.status = a.WAITING,
                        o.resource.start(this)
                    }
                    setTimeout(l, 100)
                };
            var l = function () {
                    for (var t = !1, A = Date.now() - o, r = A >= e.noProgressTimeout, i = A >= e.loggingDelay, s = 0, c = n.length; s < c; s++) {
                        var u = n[s];
                        u.status === a.WAITING && (u.resource.checkStatus && u.resource.checkStatus(), u.status === a.WAITING && (r ? u.resource.onTimeout() : t = !0))
                    }
                    i && t && d(),
                    t && setTimeout(l, e.statusInterval)
                };
            this.isBusy = function () {
                    for (var e = 0, t = n.length; e < t; e++) if (n[e].status === a.QUEUED || n[e].status === a.WAITING) return !0;
                    return !1
                };
            var u = function (e, t) {
                    var A, s, c, l, u = null;
                    for (A = 0, s = n.length; A < s; A++) if (n[A].resource === e) {
                        u = n[A];
                        break
                    }
                    if (null != u && u.status === a.WAITING) for (u.status = t, o = Date.now(), c = i.concat(r), A = 0, s = c.length; A < s; A++) l = c[A],
                    (0 === l.tags.length || e.tags.intersects(l.tags)) && f(u, l)
                };
            this.onLoad = function (e) {
                    u(e, a.LOADED)
                },
            this.onError = function (e) {
                    u(e, a.ERROR)
                },
            this.onTimeout = function (e) {
                    u(e, a.TIMEOUT)
                };
            var f = function (e, t) {
                    var A, r, i, o = 0,
                        s = 0;
                    for (A = 0, r = n.length; A < r; A++) i = n[A],
                    !1,
                    (0 === t.tags.length || i.resource.tags.intersects(t.tags)) && (s++, i.status !== a.LOADED && i.status !== a.ERROR && i.status !== a.TIMEOUT || o++);
                    t.callback({
                            resource: e.resource,
                            loaded: e.status === a.LOADED,
                            error: e.status === a.ERROR,
                            timeout: e.status === a.TIMEOUT,
                            completedCount: o,
                            totalCount: s
                        })
                },
                d = this.log = function (e) {
                    if (window.console) {
                        var t = Math.round((Date.now() - A) / 1e3);
                        window.console.log("PxLoader elapsed: " + t + " sec");
                        for (var r = 0, i = n.length; r < i; r++) {
                            var o = n[r];
                            if (e || o.status === a.WAITING) {
                                var s = "PxLoader: #" + r + " " + o.resource.getName();
                                switch (o.status) {
                                case a.QUEUED:
                                    s += " (Not Started)";
                                    break;
                                case a.WAITING:
                                    s += " (Waiting)";
                                    break;
                                case a.LOADED:
                                    s += " (Loaded)";
                                    break;
                                case a.ERROR:
                                    s += " (Error)";
                                    break;
                                case a.TIMEOUT:
                                    s += " (Timeout)"
                                }
                                o.resource.tags.length > 0 && (s += " Tags: [" + o.resource.tags.all.join(",") + "]"),
                                window.console.log(s)
                            }
                        }
                    }
                }
        }
        function t(e) {
            if (this.all = [], this.first = null, this.length = 0, this.lookup = {}, e) {
                if (Array.isArray(e)) this.all = e.slice(0);
                else if ("object" == typeof e) for (var t in e) e.hasOwnProperty(t) && this.all.push(t);
                else this.all.push(e);
                this.length = this.all.length,
                this.length > 0 && (this.first = this.all[0]);
                for (var A = 0; A < this.length; A++) this.lookup[this.all[A]] = !0
            }
        }
        return t.prototype.intersects = function (e) {
            if (0 === this.length || 0 === e.length) return !1;
            if (1 === this.length && 1 === e.length) return this.first === e.first;
            if (e.length < this.length) return e.intersects(this);
            for (var t in this.lookup) if (e.lookup[t]) return !0;
            return !1
        },
        e
    })
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    var r = A(747),
        i = n(r),
        o = A(748),
        a = n(o),
        s = A(151),
        c = n(s);
    e.exports = {
            Transition: c.
        default,
            TransitionGroup:
            a.
        default,
            CSSTransition:
            i.
        default
        }
},


function (e, t, A) {
    "use strict";

    function n(e) {
        var t = "transition" + e + "Timeout",
            A = "transition" + e;
        return function (e) {
                if (e[A]) {
                    if (null == e[t]) return new Error(t + " wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
                    if ("number" != typeof e[t]) return new Error(t + " must be a number (in milliseconds)")
                }
                return null
            }
    }
    t.__esModule = !0,
    t.classNamesShape = t.timeoutsShape = void 0,
    t.transitionTimeout = n;
    var r = A(54),
        i = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(r);
    t.timeoutsShape = i.
default.oneOfType([i.
    default.number, i.
    default.shape({
            enter: i.
        default.number,
            exit:
            i.
        default.number
        }).isRequired]),
    t.classNamesShape = i.
default.oneOfType([i.
    default.string, i.
    default.shape({
            enter: i.
        default.string,
            exit:
            i.
        default.string,
            active:
            i.
        default.string
        }), i.
    default.shape({
            enter: i.
        default.string,
            enterActive:
            i.
        default.string,
            exit:
            i.
        default.string,
            exitActive:
            i.
        default.string
        })])
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }();
    A(565);
    var s = A(9),
        c = n(s),
        l = A(284),
        u = n(l),
        f = A(283),
        d = n(f),
        h = A(282),
        p = n(h),
        g = A(281),
        B = n(g),
        w = A(285),
        m = n(w),
        v = A(16),
        y = n(v),
        E = A(102),
        Q = A(30),
        C = (n(Q), A(289)),
        U = n(C),
        b = A(67),
        F = function (e) {
            function t() {
                r(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                if (e.questions = [5, 9, 12, 11, 2, 15], window.localStorage) {
                    "true" === window.localStorage.getItem("playedSpec") && (e.questions = e.assignQs())
                }
                return e.cards = e.questions.map(function (e, t) {
                    var A = {};
                    return t < 6 && (A = b.cardInfos[t]),
                    {
                        comp: u.
                    default,
                        q:
                        e,
                        qIdx: t,
                        cardInfo: A
                    }
                }),
                e.cards.unshift({
                    comp: d.
                default,
                    cardInfo:
                    {
                        cc: "gray"
                    }
                }),
                e.cards.push({
                    comp: p.
                default,
                    cardInfo:
                    {
                        cc: "gray"
                    }
                }),
                e.cards.push({
                    comp: B.
                default,
                    cardInfo:
                    {
                        cc: "blue"
                    }
                }),
                e.cards.push({
                    comp: B.
                default,
                    cardInfo:
                    {
                        cc: "green"
                    }
                }),
                e.cards.push({
                    comp: m.
                default,
                    cardInfo:
                    {}
                }),
                e.state = {
                    current: 0,
                    userName: "",
                    gender: null,
                    answers: [],
                    isTransition: !1,
                    isFinal: !1,
                    percentage: 0,
                    imgLoaded: !1
                },
                e.answers = [],
                e.handleNameChange = e.handleNameChange.bind(e),
                e.handleNextCard = e.handleNextCard.bind(e),
                e.handleAnimationEnd = e.handleAnimationEnd.bind(e),
                e
            }
            return o(t, e),
            a(t, [{
                key: "assignQs",
                value: function () {
                    return [[8, 12, 5], [11, 9, 10], [6, 3, 7], [1, 4], [13, 14], [2, 15, 16]].map(function (e) {
                        return e[Math.floor(Math.random() * e.length)]
                    })
                }
            },
            {
                key: "getLoadImg",
                value: function () {
                    for (var e = [], t = 1; t < 13; t++) e.push(A(271)("./d" + t + ".png"));
                    for (var n = 1; n < 7; n++) e.push(A(269)("./q-c-" + n + ".png")),
                    e.push(A(270)("./n-" + n + ".png"));
                    for (var r = 1; r < 10; r++) e.push(A(272)("./t" + r + ".png"));
                    for (var i = this.questions, o = 0; o < i.length; o++) {
                        var a = i[o];
                        e.push(A(264)("./" + a + "/A.png")),
                        e.push(A(266)("./" + a + "/B.png")),
                        e.push(A(268)("./" + a + "/C.png")),
                        e.push(A(263)("./" + a + "/A-w.png")),
                        e.push(A(265)("./" + a + "/B-w.png")),
                        e.push(A(267)("./" + a + "/C-w.png"))
                    }
                    return e.push(A(206)),
                    e.push(A(208)),
                    e.push(A(702)),
                    e.push(A(703)),
                    e.push(A(207)),
                    e.push(A(711)),
                    e.push(A(231)),
                    e.push(A(232)),
                    e.push(A(233)),
                    e.push(A(234)),
                    e.push(A(96)),
                    e
                }
            },
            {
                key: "componentDidMount",
                value: function () {
                    var e = this;
                    window.addEventListener("touchmove", function (e) {
                        e.preventDefault()
                    }, {
                        passive: !1
                    }),
                    (0, U.
                default)(this.getLoadImg(), function (t) {
                        e.setState({
                            imgLoaded: t.completedCount == t.totalCount,
                            percentage: Math.floor(t.completedCount / t.totalCount * 100)
                        })
                    }, null, {
                        origin: "anonymous"
                    })
                }
            },
            {
                key: "handleNameChange",
                value: function (e) {
                    this.setState({
                        userName: e
                    })
                }
            },
            {
                key: "handleNextCard",
                value: function (e, t, n) {
                    var r = this;
                    if (1 != this.lockNext) {
                        if (this.lockNext = !0, setTimeout(function () {
                            r.lockNext = !1
                        }, 500), e = void 0 !== e ? e : this.state.gender, !0 === n) return this.setState({
                            isFinal: !0,
                            gender: e
                        }),
                        void setTimeout(function () {
                            r.setState({
                                isFinal: !1,
                                current: r.state.current + 3
                            })
                        }, 400);
                        var i = this.state.answers;
                        t && i.push(t);
                        var o = this.cards[this.state.current + 1];
                        o && void 0 !== o.q ? (E.tracks.set("bgm", {
                            src: A(261)("./" + o.q + ".mp3"),
                            loop: !0,
                            autoplay: !1
                        }), E.tracks.bgm.play()) : E.tracks.bgm.pause(),
                        this.setState({
                            isTransition: !0,
                            current: this.state.current + 1,
                            answers: i,
                            gender: e
                        }),
                        setTimeout(function () {
                            r.setState({
                                isTransition: !1
                            })
                        }, 600)
                    }
                }
            },
            {
                key: "handleAnimationEnd",
                value: function () {
                    this.state.isTransition && this.setState({
                        isTransition: !1
                    })
                }
            },
            {
                key: "render",
                value: function () {
                    var e = this,
                        t = this.state,
                        A = t.current,
                        n = t.isTransition,
                        r = t.isFinal,
                        i = t.answers,
                        o = t.gender,
                        a = t.userName,
                        s = this.cards,
                        l = s.map(function (t, n) {
                            var s = 2;
                            if (r && (s = 3), n < A - 1 || n > A + s) return null;
                            var l = n == A - 1 ? "last-c" : n == A ? "c" : n == A + 1 ? "b-l" : n == A + 2 ? "t-r" : "other",
                                u = t.cardInfo,
                                f = t.comp,
                                d = t.comp + (t.q ? t.q : "") + (u.cc ? u.cc : "") + n;
                            return c.
                        default.createElement("div", {
                                    className: "parall-layer " + l,
                                    key: d,
                                    "data-depth": "0.3"
                                }, c.
                            default.createElement(f, {
                                    q: t.q,
                                    color: u.cc,
                                    qIdx: n,
                                    ctimu: u.ctimu,
                                    pos: l,
                                    answers: i,
                                    gender: o,
                                    userName: a,
                                    handleAnimationEnd: e.handleAnimationEnd,
                                    handleNextCard: e.handleNextCard,
                                    handleNameChange: e.handleNameChange
                                }))
                        });
                    return c.
                default.createElement("div", {
                            className: "m-app" + (y.
                        default.isInNEMapp() ? " z-inapp ":
                            " ") + (n ? "trans" : "") + (r ? " final" : "")
                        }, l, this.state.imgLoaded ? null : c.
                    default.createElement("div", {
                            id: "loading"
                        }, c.
                    default.createElement("div", {
                            className: "splash-text"
                        }, "LOADING"), c.
                    default.createElement("div", {
                            className: "splash-percentage"
                        }, this.state.percentage, "%")))
                }
            }]),
            t
        }(s.Component);
    t.
default = F,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }();
    A(566);
    var s = A(9),
        c = n(s),
        l = A(30),
        u = (n(l), function (e) {
            function t() {
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            a(t, [{
                key: "render",
                value: function () {
                    return c.
                default.createElement("div", {
                        className: "m-web f-page"
                    }, c.
                default.createElement("img", {
                        src: A(710),
                        className: "pic"
                    }))
                }
            }]),
            t
        }(s.Component));
    t.
default = u,
    e.exports = t.
default
},
, function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./1.mp3": 580,
        "./10.mp3": 581,
        "./11.mp3": 582,
        "./12.mp3": 583,
        "./13.mp3": 584,
        "./14.mp3": 585,
        "./15.mp3": 586,
        "./16.mp3": 587,
        "./2.mp3": 588,
        "./3.mp3": 589,
        "./4.mp3": 590,
        "./5.mp3": 591,
        "./6.mp3": 592,
        "./7.mp3": 593,
        "./8.mp3": 594,
        "./9.mp3": 595
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 261
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./timu-black.png": 231,
        "./timu-purple.png": 232,
        "./timu-red.png": 233,
        "./timu-white.png": 234
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 262
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./1/A-w.png": 596,
        "./10/A-w.png": 602,
        "./11/A-w.png": 608,
        "./12/A-w.png": 614,
        "./13/A-w.png": 620,
        "./14/A-w.png": 626,
        "./15/A-w.png": 632,
        "./16/A-w.png": 638,
        "./2/A-w.png": 644,
        "./3/A-w.png": 650,
        "./4/A-w.png": 656,
        "./5/A-w.png": 662,
        "./6/A-w.png": 668,
        "./7/A-w.png": 674,
        "./8/A-w.png": 680,
        "./9/A-w.png": 686
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 263
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./1/A.png": 597,
        "./10/A.png": 603,
        "./11/A.png": 609,
        "./12/A.png": 615,
        "./13/A.png": 621,
        "./14/A.png": 627,
        "./15/A.png": 633,
        "./16/A.png": 639,
        "./2/A.png": 645,
        "./3/A.png": 651,
        "./4/A.png": 657,
        "./5/A.png": 663,
        "./6/A.png": 669,
        "./7/A.png": 675,
        "./8/A.png": 681,
        "./9/A.png": 687
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 264
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./1/B-w.png": 598,
        "./10/B-w.png": 604,
        "./11/B-w.png": 610,
        "./12/B-w.png": 616,
        "./13/B-w.png": 622,
        "./14/B-w.png": 628,
        "./15/B-w.png": 634,
        "./16/B-w.png": 640,
        "./2/B-w.png": 646,
        "./3/B-w.png": 652,
        "./4/B-w.png": 658,
        "./5/B-w.png": 664,
        "./6/B-w.png": 670,
        "./7/B-w.png": 676,
        "./8/B-w.png": 682,
        "./9/B-w.png": 688
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 265
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./1/B.png": 599,
        "./10/B.png": 605,
        "./11/B.png": 611,
        "./12/B.png": 617,
        "./13/B.png": 623,
        "./14/B.png": 629,
        "./15/B.png": 635,
        "./16/B.png": 641,
        "./2/B.png": 647,
        "./3/B.png": 653,
        "./4/B.png": 659,
        "./5/B.png": 665,
        "./6/B.png": 671,
        "./7/B.png": 677,
        "./8/B.png": 683,
        "./9/B.png": 689
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 266
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./1/C-w.png": 600,
        "./10/C-w.png": 606,
        "./11/C-w.png": 612,
        "./12/C-w.png": 618,
        "./13/C-w.png": 624,
        "./14/C-w.png": 630,
        "./15/C-w.png": 636,
        "./16/C-w.png": 642,
        "./2/C-w.png": 648,
        "./3/C-w.png": 654,
        "./4/C-w.png": 660,
        "./5/C-w.png": 666,
        "./6/C-w.png": 672,
        "./7/C-w.png": 678,
        "./8/C-w.png": 684,
        "./9/C-w.png": 690
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 267
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./1/C.png": 601,
        "./10/C.png": 607,
        "./11/C.png": 613,
        "./12/C.png": 619,
        "./13/C.png": 625,
        "./14/C.png": 631,
        "./15/C.png": 637,
        "./16/C.png": 643,
        "./2/C.png": 649,
        "./3/C.png": 655,
        "./4/C.png": 661,
        "./5/C.png": 667,
        "./6/C.png": 673,
        "./7/C.png": 679,
        "./8/C.png": 685,
        "./9/C.png": 691
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 268
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./q-c-1.png": 692,
        "./q-c-2.png": 693,
        "./q-c-3.png": 694,
        "./q-c-4.png": 695,
        "./q-c-5.png": 696,
        "./q-c-6.png": 697
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 269
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./n-1.png": 704,
        "./n-2.png": 705,
        "./n-3.png": 706,
        "./n-4.png": 707,
        "./n-5.png": 708,
        "./n-6.png": 709
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 270
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./d1.png": 210,
        "./d10.png": 211,
        "./d11.png": 212,
        "./d12.png": 213,
        "./d2.png": 214,
        "./d3.png": 215,
        "./d4.png": 216,
        "./d5.png": 217,
        "./d6.png": 218,
        "./d7.png": 219,
        "./d8.png": 220,
        "./d9.png": 221
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 271
},


function (e, t, A) {
    function n(e) {
        return A(r(e))
    }
    function r(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var i = {
        "./t1.png": 222,
        "./t2.png": 223,
        "./t3.png": 224,
        "./t4.png": 225,
        "./t5.png": 226,
        "./t6.png": 227,
        "./t7.png": 228,
        "./t8.png": 229,
        "./t9.png": 230
    };
    n.keys = function () {
        return Object.keys(i)
    },
    n.resolve = r,
    e.exports = n,
    n.id = 272
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = A(74),
        i = n(r),
        o = A(75),
        a = n(o),
        s = A(76),
        c = n(s),
        l = A(154),
        u = n(l),
        f = A(560),
        d = n(f),
        h = function () {
            function e() {
                (0, a.
            default)(this, e),
                this.tracks = {},
                this.onBridgeReady = this.onBridgeReady.bind(this),
                this.onAction = this.onAction.bind(this),
                document.addEventListener("WeixinJSBridgeReady", this.onBridgeReady),
                document.addEventListener("YixinJSBridgeReady", this.onBridgeReady),
                document.body.addEventListener("touchstart", this.onAction),
                document.body.addEventListener("click", this.onAction)
            }
            return (0, c.
        default)(e, [{
                key: "set",
                value: function (e, t) {
                    this.tracks[e] && this.remove(e),
                    this[e] = this.tracks[e] = new u.
                default (t)
                }
            },
            {
                key: "get",
                value: function (e) {
                    return this.tracks[e]
                }
            },
            {
                key: "remove",
                value: function (e) {
                    this.tracks[e] && (this.tracks[e].stop(), (0, d.
                default)(this.tracks[e]), delete this.tracks[e], delete this[e])
                }
            },
            {
                key: "resume",
                value: function () {
                    var e = this.tracks;
                    (0, i.
                default)(e).forEach(function (t) {
                        e[t].shouldPlay() && e[t].play()
                    })
                }
            },
            {
                key: "onBridgeReady",
                value: function () {
                    this.resume(),
                    document.removeEventListener("WeixinJSBridgeReady", this.onBridgeReady),
                    document.removeEventListener("YixinJSBridgeReady", this.onBridgeReady)
                }
            },
            {
                key: "onAction",
                value: function () {
                    this.resume()
                }
            }]),
            e
        }();
    t.
default = h,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = A(294),
        i = n(r),
        o = A(75),
        a = n(o),
        s = A(76),
        c = n(s),
        l = A(299),
        u = n(l),
        f = A(298),
        d = n(f),
        h = A(9),
        p = n(h),
        g = A(38),
        B = n(g),
        w = A(54),
        m = n(w),
        v = A(151),
        y = n(v),
        E = function (e) {
            function t(e) {
                (0, a.
            default)(this, t);
                var A = (0, u.
            default)(this, (t.__proto__ || (0, i.
            default)(t)).call(this, e));
                return A.state = {
                    show: !1
                },
                A
            }
            return (0, d.
        default)(t, e),
            (0, c.
        default)(t, [{
                key: "componentDidMount",
                value: function () {
                    var e = this;
                    this.props.autoClose && window.setTimeout(function () {
                        e.delNode()
                    }, this.props.timeout),
                    this.setState({
                        show: !0
                    })
                }
            },
            {
                key: "delNode",
                value: function () {
                    var e = this;
                    this.setState({
                        show: !1
                    }),
                    window.setTimeout(function () {
                        var t = e.props.container;
                        B.
                    default.unmountComponentAtNode(t),
                        t.parentNode.removeChild(t)
                    }, 200)
                }
            },
            {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.isOk,
                        A = e.text,
                        n = e.type,
                        r = t ? "icn-ok" : "icn-fail";
                    return p.
                default.createElement(y.
                    default, { in : this.state.show,
                            timeout: 50
                        }, function (e, t) {
                            return p.
                        default.createElement("div", {
                                key: "toast",
                                className: "m-toast " + (n ? "m-toast-" + n : "") + " " + (e ? "toast-" + e : "")
                            }, p.
                        default.createElement("i", {
                                className: "icn " + r
                            }), p.
                        default.createElement("div", {
                                className: "text"
                            }, A))
                        })
                }
            }]),
            t
        }(h.Component);
    E.propTypes = {
            container: m.
        default.object.isRequired,
            text:
            m.
        default.string.isRequired,
            isOk:
            m.
        default.bool,
            timeout:
            m.
        default.number,
            type:
            m.
        default.string,
            autoClose:
            m.
        default.bool
        },
    E.defaultProps = {
            timeout: 1500,
            type: "",
            autoClose: !0
        };
    var Q = {},
        C = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var A = e;
            A.container = t;
            var n = p.
        default.createElement(E, A),
                r = B.
        default.render(n, t),
                i = e.key;
            i && (Q[i] = r)
        },
        U = function (e) {
            Q[e].delNode()
        };
    t.
default = {
            ShowToast: C,
            CloseToast: U
        },
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createUrl = t.stringify = t.parse = void 0;
    var n = A(55),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n),
        i = A(276),
        o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        a = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
        s = ["hash", "host", "hostname", "href", "origin", "pathname", "port", "protocol", "search"],
        c = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                A = "";
            e ? A = e : "undefined" != typeof window && (A = window.location);
            var n = {},
                c = t.localhost,
                l = t.onlinehost;
            if (c = c || "igame.163.com", l = l || "music.163.com", A) if ("string" == typeof A) {
                    var u = A.match(a);
                    if (null !== u) {
                        var f = u[1] ? u[1] + ":" : "",
                            d = u[7] ? "#" + u[7] : "",
                            h = u[3] || "",
                            p = u[4] || "",
                            g = u[5] ? "/" + u[5] : "",
                            B = [h],
                            w = u[6] ? "?" + u[6] : "";
                        p && B.push(p),
                        n = {
                                hash: d,
                                host: B.join(":"),
                                hostname: h,
                                href: e,
                                origin: f + "//" + B,
                                pathname: g,
                                port: p,
                                protocol: f,
                                search: w
                            }
                    }
                } else "object" === (void 0 === A ? "undefined" : (0, r.
            default)(A)) && s.forEach(function (e) {
                    o(A, e) && "function" != typeof A[e] && (n[e] = A[e])
                });
            var m = n,
                v = m.search,
                y = m.hostname,
                E = m.protocol;
            n.params = (0, i.parse)(v);
            var Q = y || l;
            "localhost" === y && (Q = c);
            var C = "http:";
            return E && (C = -1 !== E.indexOf(":") ? E : E + ":"),
            n.currentHost = C + "//" + Q,
            n
        };
    t.parse = i.parse,
    t.stringify = i.stringify,
    t.createUrl = c,
    t.
default = c()
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.stringify = t.parse = void 0;
    var r = A(74),
        i = n(r),
        o = A(55),
        a = n(o),
        s = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        c = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                A = {};
            if ("string" != typeof e || 0 === e.length) return A;
            var n = t.gap,
                r = t.eva,
                i = t.cover;
            return n = n || "&",
            r = r || "=",
            i = void 0 !== i && i,
            ("?" === e.charAt(0) ? e.slice(1) : e).split(n).forEach(function (e) {
                    var t = e.indexOf(r),
                        n = t > -1 ? e.slice(0, t) : e,
                        o = t > -1 ? e.slice(t + 1) : "";
                    n = decodeURIComponent(n),
                    o = decodeURIComponent(o),
                    s(A, n) ? Array.isArray(A[n]) ? A[n].push(o) : A[n] = i ? o : [A[n], o] : A[n] = o
                }),
            A
        };
    t.parse = c;
    var l = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ("object" !== (void 0 === e ? "undefined" : (0, a.
        default)(e)) || null === e) return "";
            var A = t.gap,
                n = t.eva;
            return A = A || "&",
            n = n || "=",
            (0, i.
            default)(e).map(function (t) {
                    var r = "" + encodeURIComponent(t) + n;
                    return Array.isArray(e[t]) ? e[t].map(function (e) {
                        return "" + r + encodeURIComponent(e)
                    }).join(A) : "" + r + encodeURIComponent(e[t])
                }).join(A)
        };
    t.stringify = l
},


function (module, exports, __webpack_require__) {
    !
    function (e, t) {
        module.exports = t()
    }(0, function () {
        return function (e) {
            function t(n) {
                if (A[n]) return A[n].exports;
                var r = A[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(r.exports, r, r.exports, t),
                r.l = !0,
                r.exports
            }
            var A = {};
            return t.m = e,
            t.c = A,
            t.i = function (e) {
                return e
            },
            t.d = function (e, A, n) {
                t.o(e, A) || Object.defineProperty(e, A, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            },
            t.n = function (e) {
                var A = e && e.__esModule ?
                function () {
                    return e.
                default
                } : function () {
                    return e
                };
                return t.d(A, "a", A),
                A
            },
            t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            t.p = "",
            t(t.s = 4)
        }([function (e, t, A) {
            "use strict";
            var n = function (e, t) {
                try {
                    return t = t.toLowerCase(),
                    null === e ? "null" == t : void 0 === e ? "undefined" == t : _o.toString.call(e).toLowerCase() == "[object " + t + "]"
                } catch (e) {
                    return !1
                }
            },
                r = {
                    _cache: {},
                    extend: function (e, t, A, n) {
                        for (var r in t) t.hasOwnProperty(r) && (A || void 0 === e[r]) && (n && n(t[r]) || (e[r] = t[r]));
                        return e
                    },
                    obj2query: function (e) {
                        var t = "";
                        if (!e) return t;
                        for (var A in e) t += A + "=" + encodeURIComponent(e[A]) + "&";
                        return t.replace(/&$/, "")
                    },
                    _$getDataInStorageWithDefault: function (e, t) {
                        var A = this._$getDataInStorage(e);
                        return null === A && (A = t, this._$setDataInStorage(e, A)),
                        A
                    },
                    _$getDataInStorage: function (e) {
                        var t = JSON.parse(localStorage.getItem(e) || "null");
                        return null === t ? this._cache[e] : t
                    },
                    _$setDataInStorage: function (e, t) {
                        var A = JSON.stringify(t);
                        try {
                            localStorage.setItem(e, A)
                        } catch (e) {}
                        return A != localStorage.getItem(e) && (this._cache[e] = t),
                        this
                    },
                    _$delDataInStorage: function (e) {
                        return delete this._cache[e],
                        localStorage.removeItem(e),
                        this
                    },
                    _$randNumber: function (e, t) {
                        return Math.floor(Math.random() * (t - e) + e)
                    },
                    _$randNumberString: function (e) {
                        e = Math.max(0, Math.min(e || 8, 30));
                        var t = Math.pow(10, e - 1),
                            A = 10 * t;
                        return this._$randNumber(t, A).toString()
                    },
                    _$isFunction: function (e) {
                        return n(e, "function")
                    },
                    _$isObject: function (e) {
                        return n(e, "object")
                    }
                };
            e.exports = r
        },


        function (e, t, A) {
            "use strict";
            var n = A(0),
                r = A(6),
                i = A(12),
                o = A(3),
                a = {},
                s = function () {},
                c = 262144,
                l = {
                    TOKEN_ERROR: -100,
                    DNS_ERROR: -101
                },
                u = "undefined" != typeof File ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : s,
                f = {
                    MD5_DONE: .2,
                    TOKEN_GET: .22,
                    DNS_GET: .24,
                    UPLOADED: 1
                },
                d = {
                    AUDIO: "audio",
                    IMAGE: "image",
                    TXT: "txt",
                    RAR: "rar",
                    OTHER: "other",
                    VIDEO: "video"
                },
                h = {},
                p = function (e) {
                    o("sysaction", Object.assign({}, e, {
                        type: "nosupload_" + e.type,
                        version: 1,
                        location: location.href,
                        useragent: navigator.userAgent
                    }))
                };
            a._$getUploadType = function () {
                    return d
                };
            var g = function () {
                    return n._$randNumberString(6) + +new Date
                },
                B = function (e, t) {
                    h[t.taskId] && (t.onuploading || s).call(this, e, {
                        taskId: t.taskId
                    })
                },
                w = function (e) {
                    return "nos_file_hash_" + (e.md5 + e.file.size)
                },
                m = function (e) {
                    var t = w(e),
                        A = n._$getDataInStorageWithDefault(t, "{}");
                    try {
                            A = JSON.parse(A)
                        } catch (e) {
                            A = {}
                        }
                    return A
                },
                v = function (e, t) {
                    if (e.md5) {
                        var A = w(e),
                            r = n._$getDataInStorageWithDefault(A, "{}");
                        try {
                                r = JSON.parse(r)
                            } catch (e) {
                                r = {}
                            }
                        n.extend(r, t, !0),
                        n._$setDataInStorage(A, JSON.stringify(r))
                    }
                },
                y = function (e) {
                    var t = w(e);
                    n._$delDataInStorage(t)
                },
                E = function (e, t) {
                    var A = e.urls[Math.min(e.urlIndex, e.urls.length - 1)],
                        n = e.file,
                        i = e.bucket,
                        o = e.objectKey,
                        a = e.token,
                        s = e.context,
                        c = {},
                        l = u.call(n, e.beg, e.end),
                        f = {
                            offset: e.beg,
                            complete: e.lastChunk || !1,
                            version: "1.0"
                        },
                        d = A.u;
                    s && (f.context = s),
                    c["x-nos-token"] = a,
                    c["Content-Type"] = n.type,
                    e.md5 && (c["Content-MD5"] = e.md5),
                    1 == A.t ? (f.objectkey = i + "/" + o, e.origin && (d = e.origin + d)) : d += "/" + i + "/" + o,
                    r._$request(d, {
                            method: "POST",
                            headers: c,
                            query: f,
                            data: l
                        }).then(t.onload).
                    catch (t.onerror)
                },
                Q = function (e, t, A) {
                    e = {
                        code: 200,
                        fileName: A.file.name,
                        size: A.file.size,
                        type: A.file.type,
                        bucket: t.bucket,
                        docId: t.docId,
                        objectKey: t.objectKey,
                        md5: t.md5,
                        url: "//nos.netease.com/" + t.bucket + "/" + t.objectKey,
                        taskId: A.taskId
                    },
                    y(t),
                    h[A.taskId] && (delete h[A.taskId], p({
                        type: "success",
                        result: JSON.stringify(e),
                        timing: +new Date - t.uploadStartTime
                    }), (A.onsuccess || s).call(this, e))
                },
                C = function (e, t, A) {
                    p({
                        type: "error",
                        result: JSON.stringify(e),
                        timing: +new Date - t.uploadStartTime
                    }),
                    (A.onerror || s).call(this, e)
                },
                U = function (e, t, A) {
                    e.context = A.context,
                    e.beg = A.offset,
                    e.retryTimes = 0;
                    var n = e.beg / e.file.size;
                    v(e, {
                        bucket: e.bucket,
                        objectKey: e.objectKey,
                        token: e.token,
                        context: e.context,
                        beg: e.beg,
                        updateTime: +new Date
                    }),
                    n = f.DNS_GET + (f.UPLOADED - f.DNS_GET) * n,
                    B(n, t),
                    e.lastChunk ? Q(A, e, t) : F(e, t)
                },
                b = function (e, t, A) {
                    p({
                        type: "chunkerror",
                        result: JSON.stringify(A),
                        ext: JSON.stringify(e),
                        timing: +new Date - e.chuckUploadStartTime
                    }),
                    e.retryTimes < 10 ? (e.retryTimes++, e.retryTimesTotal++, e.urlIndex = (e.urlIndex + 1) % e.urls.length, F(e, t)) : C(A, e, t)
                },
                F = function (e, t) {
                    if (e && -1 != e.step) {
                        var A = +new Date - e.chuckUploadStartTime;
                        A > 3e4 ? (c = Math.max(16384, Math.ceil(c / 2)), e.urlIndex = (e.urlIndex + 1) % e.urls.length) : A < 50 && (c = Math.min(10485760, Math.ceil(2 * c))),
                        e.end = e.beg + c,
                        e.end >= e.file.size && (e.end = e.file.size, e.lastChunk = !0),
                        e.chuckUploadStartTime = +new Date,
                        E(e, {
                            onload: U.bind(this, e, t),
                            onerror: b.bind(this, e, t)
                        })
                    }
                },
                _ = function (e, t, A) {
                    t.beg = e.offset;
                    var n = t.beg / t.file.size;
                    n = f.DNS_GET + (f.UPLOADED - f.DNS_GET) * n,
                    B(n, A),
                    F(t, A)
                },
                H = function (e, t, A) {
                    t.beg = 0,
                    delete t.context,
                    I(t, A)
                },
                x = function (e, t, A) {
                    if (e.lastChunk = !1, e.urls = A || [], e.urls.push("//nosup-hz1.127.net"), e.urls = e.urls.map(function (e) {
                        return {
                            u: e
                        }
                    }), e.urls.push({
                        u: "/web/proxy/nosupload",
                        t: 1
                    }), e.urlIndex = 0, e.retryTimes = 0, e.retryTimesTotal = 0, B(f.DNS_GET, t), e.fromExist) {
                        delete e.fromExist;
                        var n = e.urls[Math.min(e.urlIndex, e.urls.length - 1)],
                            i = e.bucket,
                            o = e.objectKey,
                            a = e.token,
                            s = e.context,
                            c = {},
                            l = {
                                uploadContext: "",
                                context: s,
                                version: "1.0"
                            };
                        c["x-nos-token"] = a,
                        r._$request(n.u + "/" + i + "/" + o, {
                                headers: c,
                                query: l
                            }).then(function (A) {
                                _(A, e, t)
                            }).
                        catch (function (A) {
                                H(0, e, t)
                            })
                    } else e.beg = 0,
                    F(e, t)
                },
                N = function (e, t) {
                    var A = t.result || {},
                        n = A.bucket,
                        r = A.objectKey,
                        i = A.token,
                        o = h[e.taskId];
                    if (!(n && r && i && o)) return A.code = l.TOKEN_ERROR,
                    void(e.onerror || s).call(this, A);
                    o.docId = A.docId,
                    o.bucket = n,
                    o.objectKey = r,
                    o.token = i,
                    B(f.TOKEN_GET, e),
                    "https:" == location.protocol ? x(o, e, []) : o.reqId = a._$getDns({
                            bucket: n,
                            onload: x.bind(this, o, e),
                            onerror: x.bind(this, o, e, [])
                        }),
                    o.step = 1
                },
                T = function (e, t) {
                    t.code = l.TOKEN_ERROR,
                    delete h[e.taskId],
                    (e.onerror || s).call(this, t)
                },
                I = function (e, t) {
                    var A = t.file,
                        r = A.name,
                        i = r.split(".").pop();
                    a._$allocateToken(n.extend({
                            filename: r,
                            ext: i,
                            onload: N.bind(this, t),
                            onerror: T.bind(this, t)
                        }, t, !0, function (e) {
                            return n._$isFunction(e) || n._$isObject(e)
                        }))
                },
                S = function (e, t) {
                    if (e && -1 != e.step) {
                        e.md5 = e.spark.end();
                        var A = m(e) || {},
                            n = A.bucket,
                            r = A.objectKey,
                            i = A.token;
                        n && r && i ? (e.context = A.context, e.beg = A.beg, e.fromExist = !0, N(t, {
                                result: A
                            })) : I(e, t)
                    }
                },
                O = function (e, t, A) {
                    if (t && -1 != t.step) {
                        t.beg = t.end;
                        var n = t.beg / t.file.size;
                        n = 0 + f.MD5_DONE * n,
                        B(n, A),
                        t.spark.append(e.result),
                        t.lastChunk ? S(t, A) : k(t, A)
                    }
                },
                M = function (e, t, A) {
                    t.md5 = "",
                    I(t, A)
                },
                k = function (e, t) {
                    if (e && -1 != e.step) {
                        e.end = e.beg + 2097152,
                        e.end >= e.file.size && (e.end = e.file.size, e.lastChunk = !0);
                        var A = new FileReader;
                        A.onload = O.bind(this, A, e, t),
                        A.onerror = M.bind(this, A, e, t),
                        A.readAsArrayBuffer(u.call(e.file, e.beg, e.end))
                    }
                };
            a._$upload = function (e) {
                    var t = e.file,
                        A = t.name,
                        n = (A.split(".").pop(), g());
                    c = 262144,
                    e.taskId = n,
                    h[n] = {
                            step: 0
                        },
                    B(0, e);
                    var r = h[n];
                    r.id = n,
                    r.file = t,
                    r.beg = 0,
                    r.lastChunk = !1,
                    r.spark = new i.ArrayBuffer,
                    r.uploadStartTime = +new Date,
                    r.origin = e.origin;
                    var o = e.onerror || s;
                    return e.onerror = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            h[n] && (delete h[n], e.taskId = n, o.apply(this, arguments))
                        },
                    p({
                            type: "start",
                            ext: JSON.stringify(r)
                        }),
                    k(r, e),
                    n
                },
            a._$abort = function (e) {
                    var t = h[e];
                    t && (0 == t.step ? delete h[e] : (t.step = -1, delete h[e]))
                },
            a._$allocateToken = function () {
                    var e = function (e, t) {
                        (t.onload || s).call(this, e)
                    },
                        t = function (e, t) {
                            (t.onerror || s).call(this, e)
                        },
                        A = JSON.stringify({
                            code: 200,
                            size: "$(ObjectSize)"
                        });
                    return function (i) {
                            var o = i.returnBody || A;
                            if (n._$isObject(o)) try {
                                JSON.stringify(o)
                            } catch (e) {
                                o = A
                            }
                            var a = i.isBackend ? "/api/backend/nos/token/alloc" : "/api/nos/token/alloc";
                            return i.origin && (a = i.origin + a),
                            r._$request(a, {
                                method: "POST",
                                credentials: "include",
                                query: {
                                    filename: i.filename || "",
                                    ext: i.ext || "",
                                    type: i.type || d.OTHER,
                                    bucket: i.bucket || "",
                                    local: i.local || !1,
                                    nos_product: i.nosProduct || 0,
                                    return_body: o
                                }
                            }).then(function (t) {
                                e(t, i)
                            }).
                            catch (function (e) {
                                t(e, i)
                            }),
                            0
                        }
                }(),
            a._$getDns = function () {
                    var e = function (e, A) {
                        e.lbs;
                        var n = e.upload;
                        n && n.length || t(e, A),
                        (A.onload || s).call(this, n)
                    },
                        t = function (e, t) {
                            (t.onerror || s).call(this, e)
                        };
                    return function (A) {
                            var n = A.bucket;
                            return r._$request("//wanproxy.127.net/lbs", {
                                query: {
                                    version: "1.0",
                                    bucketname: n
                                }
                            }).then(function (t) {
                                e(t, A)
                            }).
                            catch (function (e) {
                                t(e, A)
                            }),
                            0
                        }
                }(),
            a._$isBucketSupport = function () {
                    return !("undefined" == typeof File || "undefined" == typeof Blob || "undefined" == typeof FileList || !Blob.prototype.webkitSlice && !Blob.prototype.mozSlice && !Blob.prototype.slice)
                },
            e.exports = a
        },


        function (module, exports, __webpack_require__) {
            !
            function (e, t) {
                module.exports = function () {
                    return function (e) {
                        function t(n) {
                            if (A[n]) return A[n].exports;
                            var r = A[n] = {
                                i: n,
                                l: !1,
                                exports: {}
                            };
                            return e[n].call(r.exports, r, r.exports, t),
                            r.l = !0,
                            r.exports
                        }
                        var A = {};
                        return t.m = e,
                        t.c = A,
                        t.i = function (e) {
                            return e
                        },
                        t.d = function (e, A, n) {
                            t.o(e, A) || Object.defineProperty(e, A, {
                                configurable: !1,
                                enumerable: !0,
                                get: n
                            })
                        },
                        t.n = function (e) {
                            var A = e && e.__esModule ?
                            function () {
                                return e.
                            default
                            } : function () {
                                return e
                            };
                            return t.d(A, "a", A),
                            A
                        },
                        t.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        },
                        t.p = "",
                        t(t.s = 8)
                    }([function (e, t, A) {
                        function n(e, t) {
                            for (var A in t) t.hasOwnProperty(A) && null == e[A] && (e[A] = t[A]);
                            return e
                        }
                        function r(e) {
                            var t = {};
                            return e.split("&").forEach(function (e) {
                                var A = e.split("=");
                                if (A.length) {
                                    var n = A.shift();
                                    n && (t[decodeURIComponent(n)] = decodeURIComponent(A.join("=")))
                                }
                            }),
                            t
                        }
                        function i(e) {
                            var t = "";
                            for (var A in e) void 0 !== e[A] && (t += encodeURIComponent(A) + "=" + encodeURIComponent(e[A]) + "&");
                            return t.slice(0, -1)
                        }
                        function o(e) {
                            if ("undefined" != typeof document) {
                                var t = document.cookie,
                                    A = "\\b" + e + "=",
                                    n = t.search(A);
                                if (n < 0) return "";
                                n += A.length - 2;
                                var r = t.indexOf(";", n);
                                return r < 0 && (r = t.length),
                                t.substring(n, r) || ""
                            }
                        }
                        var a = A(3),
                            s = a.asrsea,
                            c = a.ecnonasr,
                            l = A(4),
                            u = l.emj2code,
                            f = l.BASE_CODE;
                        e.exports = {
                                extend: n,
                                obj2query: i,
                                query2obj: r,
                                getCookie: o,
                                asrsea: s,
                                ecnonasr: c,
                                emj2code: u,
                                BASE_CODE: f
                            }
                    },


                    function (e, t, A) {
                        function n(e, t) {
                            t = t || {};
                            var A = o({
                                url: e,
                                type: t.type || "json",
                                method: t.method || "get",
                                data: t.body || t.data,
                                crossOrigin: !t.noCrossOrigin,
                                withCredentials: void 0 === t.withCredentials || t.withCredentials
                            }, t);
                            return !1 === t.async ? r(A) : new Promise(function (e, t) {
                                A.error = function (e) {
                                    t(e)
                                },
                                A.success = function (t) {
                                    e({
                                        json: Promise.resolve.bind(Promise, t)
                                    })
                                },
                                r(A)
                            })
                        }
                        var r = A(6),
                            i = A(0),
                            o = i.extend;
                        e.exports = n
                    },


                    function (e, t) {
                        var A = function (e, t) {
                            var A = {},
                                n = A.lib = {},
                                r = function () {},
                                i = n.Base = {
                                    extend: function (e) {
                                        r.prototype = this;
                                        var t = new r;
                                        return e && t.mixIn(e),
                                        t.hasOwnProperty("init") || (t.init = function () {
                                            t.$super.init.apply(this, arguments)
                                        }),
                                        t.init.prototype = t,
                                        t.$super = this,
                                        t
                                    },
                                    create: function () {
                                        var e = this.extend();
                                        return e.init.apply(e, arguments),
                                        e
                                    },
                                    init: function () {},
                                    mixIn: function (e) {
                                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                                    },
                                    clone: function () {
                                        return this.init.prototype.extend(this)
                                    }
                                },
                                o = n.WordArray = i.extend({
                                    init: function (e, t) {
                                        e = this.words = e || [],
                                        this.sigBytes = void 0 != t ? t : 4 * e.length
                                    },
                                    toString: function (e) {
                                        return (e || s).stringify(this)
                                    },
                                    concat: function (e) {
                                        var t = this.words,
                                            A = e.words,
                                            n = this.sigBytes;
                                        if (e = e.sigBytes, this.clamp(), n % 4) for (var r = 0; r < e; r++) t[n + r >>> 2] |= (A[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (n + r) % 4 * 8;
                                        else if (65535 < A.length) for (r = 0; r < e; r += 4) t[n + r >>> 2] = A[r >>> 2];
                                        else t.push.apply(t, A);
                                        return this.sigBytes += e,
                                        this
                                    },
                                    clamp: function () {
                                        var t = this.words,
                                            A = this.sigBytes;
                                        t[A >>> 2] &= 4294967295 << 32 - A % 4 * 8,
                                        t.length = e.ceil(A / 4)
                                    },
                                    clone: function () {
                                        var e = i.clone.call(this);
                                        return e.words = this.words.slice(0),
                                        e
                                    },
                                    random: function (t) {
                                        for (var A = [], n = 0; n < t; n += 4) A.push(4294967296 * e.random() | 0);
                                        return new o.init(A, t)
                                    }
                                }),
                                a = A.enc = {},
                                s = a.Hex = {
                                    stringify: function (e) {
                                        var t = e.words;
                                        e = e.sigBytes;
                                        for (var A = [], n = 0; n < e; n++) {
                                            var r = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                            A.push((r >>> 4).toString(16)),
                                            A.push((15 & r).toString(16))
                                        }
                                        return A.join("")
                                    },
                                    parse: function (e) {
                                        for (var t = e.length, A = [], n = 0; n < t; n += 2) A[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                                        return new o.init(A, t / 2)
                                    }
                                },
                                c = a.Latin1 = {
                                    stringify: function (e) {
                                        var t = e.words;
                                        e = e.sigBytes;
                                        for (var A = [], n = 0; n < e; n++) A.push(String.fromCharCode(t[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                                        return A.join("")
                                    },
                                    parse: function (e) {
                                        for (var t = e.length, A = [], n = 0; n < t; n++) A[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                                        return new o.init(A, t)
                                    }
                                },
                                l = a.Utf8 = {
                                    stringify: function (e) {
                                        try {
                                            return decodeURIComponent(escape(c.stringify(e)))
                                        } catch (e) {
                                            throw Error("Malformed UTF-8 data")
                                        }
                                    },
                                    parse: function (e) {
                                        return c.parse(unescape(encodeURIComponent(e)))
                                    }
                                },
                                u = n.BufferedBlockAlgorithm = i.extend({
                                    reset: function () {
                                        this._data = new o.init,
                                        this._nDataBytes = 0
                                    },
                                    _append: function (e) {
                                        "string" == typeof e && (e = l.parse(e)),
                                        this._data.concat(e),
                                        this._nDataBytes += e.sigBytes
                                    },
                                    _process: function (t) {
                                        var A = this._data,
                                            n = A.words,
                                            r = A.sigBytes,
                                            i = this.blockSize,
                                            a = r / (4 * i),
                                            a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0);
                                        if (t = a * i, r = e.min(4 * t, r), t) {
                                                for (var s = 0; s < t; s += i) this._doProcessBlock(n, s);
                                                s = n.splice(0, t),
                                                A.sigBytes -= r
                                            }
                                        return new o.init(s, r)
                                    },
                                    clone: function () {
                                        var e = i.clone.call(this);
                                        return e._data = this._data.clone(),
                                        e
                                    },
                                    _minBufferSize: 0
                                });
                            n.Hasher = u.extend({
                                    cfg: i.extend(),
                                    init: function (e) {
                                        this.cfg = this.cfg.extend(e),
                                        this.reset()
                                    },
                                    reset: function () {
                                        u.reset.call(this),
                                        this._doReset()
                                    },
                                    update: function (e) {
                                        return this._append(e),
                                        this._process(),
                                        this
                                    },
                                    finalize: function (e) {
                                        return e && this._append(e),
                                        this._doFinalize()
                                    },
                                    blockSize: 16,
                                    _createHelper: function (e) {
                                        return function (t, A) {
                                            return new e.init(A).finalize(t)
                                        }
                                    },
                                    _createHmacHelper: function (e) {
                                        return function (t, A) {
                                            return new f.HMAC.init(e, A).finalize(t)
                                        }
                                    }
                                });
                            var f = A.algo = {};
                            return A
                        }(Math);
                        !
                        function () {
                            var e = A,
                                t = e.lib.WordArray;
                            e.enc.Base64 = {
                                    stringify: function (e) {
                                        var t = e.words,
                                            A = e.sigBytes,
                                            n = this._map;
                                        e.clamp(),
                                        e = [];
                                        for (var r = 0; r < A; r += 3) for (var i = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, o = 0; 4 > o && r + .75 * o < A; o++) e.push(n.charAt(i >>> 6 * (3 - o) & 63));
                                        if (t = n.charAt(64)) for (; e.length % 4;) e.push(t);
                                        return e.join("")
                                    },
                                    parse: function (e) {
                                        var A = e.length,
                                            n = this._map,
                                            r = n.charAt(64);
                                        r && -1 != (r = e.indexOf(r)) && (A = r);
                                        for (var r = [], i = 0, o = 0; o < A; o++) if (o % 4) {
                                                var a = n.indexOf(e.charAt(o - 1)) << o % 4 * 2,
                                                    s = n.indexOf(e.charAt(o)) >>> 6 - o % 4 * 2;
                                                r[i >>> 2] |= (a | s) << 24 - i % 4 * 8,
                                                i++
                                            }
                                        return t.create(r, i)
                                    },
                                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                                }
                        }(),


                        function (e) {
                            function t(e, t, A, n, r, i, o) {
                                return ((e = e + (t & A | ~t & n) + r + o) << i | e >>> 32 - i) + t
                            }
                            function n(e, t, A, n, r, i, o) {
                                return ((e = e + (t & n | A & ~n) + r + o) << i | e >>> 32 - i) + t
                            }
                            function r(e, t, A, n, r, i, o) {
                                return ((e = e + (t ^ A ^ n) + r + o) << i | e >>> 32 - i) + t
                            }
                            function i(e, t, A, n, r, i, o) {
                                return ((e = e + (A ^ (t | ~n)) + r + o) << i | e >>> 32 - i) + t
                            }
                            for (var o = A, a = o.lib, s = a.WordArray, c = a.Hasher, a = o.algo, l = [], u = 0; 64 > u; u++) l[u] = 4294967296 * e.abs(e.sin(u + 1)) | 0;
                            a = a.MD5 = c.extend({
                                _doReset: function () {
                                    this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                                },
                                _doProcessBlock: function (e, A) {
                                    for (var o = 0; 16 > o; o++) {
                                        var a = A + o,
                                            s = e[a];
                                        e[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                                    }
                                    var o = this._hash.words,
                                        a = e[A + 0],
                                        s = e[A + 1],
                                        c = e[A + 2],
                                        u = e[A + 3],
                                        f = e[A + 4],
                                        d = e[A + 5],
                                        h = e[A + 6],
                                        p = e[A + 7],
                                        g = e[A + 8],
                                        B = e[A + 9],
                                        w = e[A + 10],
                                        m = e[A + 11],
                                        v = e[A + 12],
                                        y = e[A + 13],
                                        E = e[A + 14],
                                        Q = e[A + 15],
                                        C = o[0],
                                        U = o[1],
                                        b = o[2],
                                        F = o[3],
                                        C = t(C, U, b, F, a, 7, l[0]),
                                        F = t(F, C, U, b, s, 12, l[1]),
                                        b = t(b, F, C, U, c, 17, l[2]),
                                        U = t(U, b, F, C, u, 22, l[3]),
                                        C = t(C, U, b, F, f, 7, l[4]),
                                        F = t(F, C, U, b, d, 12, l[5]),
                                        b = t(b, F, C, U, h, 17, l[6]),
                                        U = t(U, b, F, C, p, 22, l[7]),
                                        C = t(C, U, b, F, g, 7, l[8]),
                                        F = t(F, C, U, b, B, 12, l[9]),
                                        b = t(b, F, C, U, w, 17, l[10]),
                                        U = t(U, b, F, C, m, 22, l[11]),
                                        C = t(C, U, b, F, v, 7, l[12]),
                                        F = t(F, C, U, b, y, 12, l[13]),
                                        b = t(b, F, C, U, E, 17, l[14]),
                                        U = t(U, b, F, C, Q, 22, l[15]),
                                        C = n(C, U, b, F, s, 5, l[16]),
                                        F = n(F, C, U, b, h, 9, l[17]),
                                        b = n(b, F, C, U, m, 14, l[18]),
                                        U = n(U, b, F, C, a, 20, l[19]),
                                        C = n(C, U, b, F, d, 5, l[20]),
                                        F = n(F, C, U, b, w, 9, l[21]),
                                        b = n(b, F, C, U, Q, 14, l[22]),
                                        U = n(U, b, F, C, f, 20, l[23]),
                                        C = n(C, U, b, F, B, 5, l[24]),
                                        F = n(F, C, U, b, E, 9, l[25]),
                                        b = n(b, F, C, U, u, 14, l[26]),
                                        U = n(U, b, F, C, g, 20, l[27]),
                                        C = n(C, U, b, F, y, 5, l[28]),
                                        F = n(F, C, U, b, c, 9, l[29]),
                                        b = n(b, F, C, U, p, 14, l[30]),
                                        U = n(U, b, F, C, v, 20, l[31]),
                                        C = r(C, U, b, F, d, 4, l[32]),
                                        F = r(F, C, U, b, g, 11, l[33]),
                                        b = r(b, F, C, U, m, 16, l[34]),
                                        U = r(U, b, F, C, E, 23, l[35]),
                                        C = r(C, U, b, F, s, 4, l[36]),
                                        F = r(F, C, U, b, f, 11, l[37]),
                                        b = r(b, F, C, U, p, 16, l[38]),
                                        U = r(U, b, F, C, w, 23, l[39]),
                                        C = r(C, U, b, F, y, 4, l[40]),
                                        F = r(F, C, U, b, a, 11, l[41]),
                                        b = r(b, F, C, U, u, 16, l[42]),
                                        U = r(U, b, F, C, h, 23, l[43]),
                                        C = r(C, U, b, F, B, 4, l[44]),
                                        F = r(F, C, U, b, v, 11, l[45]),
                                        b = r(b, F, C, U, Q, 16, l[46]),
                                        U = r(U, b, F, C, c, 23, l[47]),
                                        C = i(C, U, b, F, a, 6, l[48]),
                                        F = i(F, C, U, b, p, 10, l[49]),
                                        b = i(b, F, C, U, E, 15, l[50]),
                                        U = i(U, b, F, C, d, 21, l[51]),
                                        C = i(C, U, b, F, v, 6, l[52]),
                                        F = i(F, C, U, b, u, 10, l[53]),
                                        b = i(b, F, C, U, w, 15, l[54]),
                                        U = i(U, b, F, C, s, 21, l[55]),
                                        C = i(C, U, b, F, g, 6, l[56]),
                                        F = i(F, C, U, b, Q, 10, l[57]),
                                        b = i(b, F, C, U, h, 15, l[58]),
                                        U = i(U, b, F, C, y, 21, l[59]),
                                        C = i(C, U, b, F, f, 6, l[60]),
                                        F = i(F, C, U, b, m, 10, l[61]),
                                        b = i(b, F, C, U, c, 15, l[62]),
                                        U = i(U, b, F, C, B, 21, l[63]);
                                    o[0] = o[0] + C | 0,
                                    o[1] = o[1] + U | 0,
                                    o[2] = o[2] + b | 0,
                                    o[3] = o[3] + F | 0
                                },
                                _doFinalize: function () {
                                    var t = this._data,
                                        A = t.words,
                                        n = 8 * this._nDataBytes,
                                        r = 8 * t.sigBytes;
                                    A[r >>> 5] |= 128 << 24 - r % 32;
                                    var i = e.floor(n / 4294967296);
                                    for (A[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), A[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), t.sigBytes = 4 * (A.length + 1), this._process(), t = this._hash, A = t.words, n = 0; 4 > n; n++) r = A[n],
                                    A[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                                    return t
                                },
                                clone: function () {
                                    var e = c.clone.call(this);
                                    return e._hash = this._hash.clone(),
                                    e
                                }
                            }),
                            o.MD5 = c._createHelper(a),
                            o.HmacMD5 = c._createHmacHelper(a)
                        }(Math),


                        function () {
                            var e = A,
                                t = e.lib,
                                n = t.Base,
                                r = t.WordArray,
                                t = e.algo,
                                i = t.EvpKDF = n.extend({
                                    cfg: n.extend({
                                        keySize: 4,
                                        hasher: t.MD5,
                                        iterations: 1
                                    }),
                                    init: function (e) {
                                        this.cfg = this.cfg.extend(e)
                                    },
                                    compute: function (e, t) {
                                        for (var A = this.cfg, n = A.hasher.create(), i = r.create(), o = i.words, a = A.keySize, A = A.iterations; o.length < a;) {
                                            s && n.update(s);
                                            var s = n.update(e).finalize(t);
                                            n.reset();
                                            for (var c = 1; c < A; c++) s = n.finalize(s),
                                            n.reset();
                                            i.concat(s)
                                        }
                                        return i.sigBytes = 4 * a,
                                        i
                                    }
                                });
                            e.EvpKDF = function (e, t, A) {
                                    return i.create(A).compute(e, t)
                                }
                        }(),
                        A.lib.Cipher ||
                        function (e) {
                            var t = A,
                                n = t.lib,
                                r = n.Base,
                                i = n.WordArray,
                                o = n.BufferedBlockAlgorithm,
                                a = t.enc.Base64,
                                s = t.algo.EvpKDF,
                                c = n.Cipher = o.extend({
                                    cfg: r.extend(),
                                    createEncryptor: function (e, t) {
                                        return this.create(this._ENC_XFORM_MODE, e, t)
                                    },
                                    createDecryptor: function (e, t) {
                                        return this.create(this._DEC_XFORM_MODE, e, t)
                                    },
                                    init: function (e, t, A) {
                                        this.cfg = this.cfg.extend(A),
                                        this._xformMode = e,
                                        this._key = t,
                                        this.reset()
                                    },
                                    reset: function () {
                                        o.reset.call(this),
                                        this._doReset()
                                    },
                                    process: function (e) {
                                        return this._append(e),
                                        this._process()
                                    },
                                    finalize: function (e) {
                                        return e && this._append(e),
                                        this._doFinalize()
                                    },
                                    keySize: 4,
                                    ivSize: 4,
                                    _ENC_XFORM_MODE: 1,
                                    _DEC_XFORM_MODE: 2,
                                    _createHelper: function (e) {
                                        return {
                                            encrypt: function (t, A, n) {
                                                return ("string" == typeof A ? p : h).encrypt(e, t, A, n)
                                            },
                                            decrypt: function (t, A, n) {
                                                return ("string" == typeof A ? p : h).decrypt(e, t, A, n)
                                            }
                                        }
                                    }
                                });
                            n.StreamCipher = c.extend({
                                    _doFinalize: function () {
                                        return this._process(!0)
                                    },
                                    blockSize: 1
                                });
                            var l = t.mode = {},
                                u = function (e, t, A) {
                                    var n = this._iv;
                                    n ? this._iv = void 0 : n = this._prevBlock;
                                    for (var r = 0; r < A; r++) e[t + r] ^= n[r]
                                },
                                f = (n.BlockCipherMode = r.extend({
                                    createEncryptor: function (e, t) {
                                        return this.Encryptor.create(e, t)
                                    },
                                    createDecryptor: function (e, t) {
                                        return this.Decryptor.create(e, t)
                                    },
                                    init: function (e, t) {
                                        this._cipher = e,
                                        this._iv = t
                                    }
                                })).extend();
                            f.Encryptor = f.extend({
                                    processBlock: function (e, t) {
                                        var A = this._cipher,
                                            n = A.blockSize;
                                        u.call(this, e, t, n),
                                        A.encryptBlock(e, t),
                                        this._prevBlock = e.slice(t, t + n)
                                    }
                                }),
                            f.Decryptor = f.extend({
                                    processBlock: function (e, t) {
                                        var A = this._cipher,
                                            n = A.blockSize,
                                            r = e.slice(t, t + n);
                                        A.decryptBlock(e, t),
                                        u.call(this, e, t, n),
                                        this._prevBlock = r
                                    }
                                }),
                            l = l.CBC = f,
                            f = (t.pad = {}).Pkcs7 = {
                                    pad: function (e, t) {
                                        for (var A = 4 * t, A = A - e.sigBytes % A, n = A << 24 | A << 16 | A << 8 | A, r = [], o = 0; o < A; o += 4) r.push(n);
                                        A = i.create(r, A),
                                        e.concat(A)
                                    },
                                    unpad: function (e) {
                                        e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
                                    }
                                },
                            n.BlockCipher = c.extend({
                                    cfg: c.cfg.extend({
                                        mode: l,
                                        padding: f
                                    }),
                                    reset: function () {
                                        c.reset.call(this);
                                        var e = this.cfg,
                                            t = e.iv,
                                            e = e.mode;
                                        if (this._xformMode == this._ENC_XFORM_MODE) var A = e.createEncryptor;
                                        else A = e.createDecryptor,
                                        this._minBufferSize = 1;
                                        this._mode = A.call(e, this, t && t.words)
                                    },
                                    _doProcessBlock: function (e, t) {
                                        this._mode.processBlock(e, t)
                                    },
                                    _doFinalize: function () {
                                        var e = this.cfg.padding;
                                        if (this._xformMode == this._ENC_XFORM_MODE) {
                                            e.pad(this._data, this.blockSize);
                                            var t = this._process(!0)
                                        } else t = this._process(!0),
                                        e.unpad(t);
                                        return t
                                    },
                                    blockSize: 4
                                });
                            var d = n.CipherParams = r.extend({
                                    init: function (e) {
                                        this.mixIn(e)
                                    },
                                    toString: function (e) {
                                        return (e || this.formatter).stringify(this)
                                    }
                                }),
                                l = (t.format = {}).OpenSSL = {
                                    stringify: function (e) {
                                        var t = e.ciphertext;
                                        return e = e.salt,
                                        (e ? i.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(a)
                                    },
                                    parse: function (e) {
                                        e = a.parse(e);
                                        var t = e.words;
                                        if (1398893684 == t[0] && 1701076831 == t[1]) {
                                            var A = i.create(t.slice(2, 4));
                                            t.splice(0, 4),
                                            e.sigBytes -= 16
                                        }
                                        return d.create({
                                            ciphertext: e,
                                            salt: A
                                        })
                                    }
                                },
                                h = n.SerializableCipher = r.extend({
                                    cfg: r.extend({
                                        format: l
                                    }),
                                    encrypt: function (e, t, A, n) {
                                        n = this.cfg.extend(n);
                                        var r = e.createEncryptor(A, n);
                                        return t = r.finalize(t),
                                        r = r.cfg,
                                        d.create({
                                            ciphertext: t,
                                            key: A,
                                            iv: r.iv,
                                            algorithm: e,
                                            mode: r.mode,
                                            padding: r.padding,
                                            blockSize: e.blockSize,
                                            formatter: n.format
                                        })
                                    },
                                    decrypt: function (e, t, A, n) {
                                        return n = this.cfg.extend(n),
                                        t = this._parse(t, n.format),
                                        e.createDecryptor(A, n).finalize(t.ciphertext)
                                    },
                                    _parse: function (e, t) {
                                        return "string" == typeof e ? t.parse(e, this) : e
                                    }
                                }),
                                t = (t.kdf = {}).OpenSSL = {
                                    execute: function (e, t, A, n) {
                                        return n || (n = i.random(8)),
                                        e = s.create({
                                            keySize: t + A
                                        }).compute(e, n),
                                        A = i.create(e.words.slice(t), 4 * A),
                                        e.sigBytes = 4 * t,
                                        d.create({
                                            key: e,
                                            iv: A,
                                            salt: n
                                        })
                                    }
                                },
                                p = n.PasswordBasedCipher = h.extend({
                                    cfg: h.cfg.extend({
                                        kdf: t
                                    }),
                                    encrypt: function (e, t, A, n) {
                                        return n = this.cfg.extend(n),
                                        A = n.kdf.execute(A, e.keySize, e.ivSize),
                                        n.iv = A.iv,
                                        e = h.encrypt.call(this, e, t, A.key, n),
                                        e.mixIn(A),
                                        e
                                    },
                                    decrypt: function (e, t, A, n) {
                                        return n = this.cfg.extend(n),
                                        t = this._parse(t, n.format),
                                        A = n.kdf.execute(A, e.keySize, e.ivSize, t.salt),
                                        n.iv = A.iv,
                                        h.decrypt.call(this, e, t, A.key, n)
                                    }
                                })
                        }(),


                        function () {
                            for (var e = A, t = e.lib.BlockCipher, n = e.algo, r = [], i = [], o = [], a = [], s = [], c = [], l = [], u = [], f = [], d = [], h = [], p = 0; 256 > p; p++) h[p] = 128 > p ? p << 1 : p << 1 ^ 283;
                            for (var g = 0, B = 0, p = 0; 256 > p; p++) {
                                var w = B ^ B << 1 ^ B << 2 ^ B << 3 ^ B << 4,
                                    w = w >>> 8 ^ 255 & w ^ 99;
                                r[g] = w,
                                i[w] = g;
                                var m = h[g],
                                    v = h[m],
                                    y = h[v],
                                    E = 257 * h[w] ^ 16843008 * w;
                                o[g] = E << 24 | E >>> 8,
                                a[g] = E << 16 | E >>> 16,
                                s[g] = E << 8 | E >>> 24,
                                c[g] = E,
                                E = 16843009 * y ^ 65537 * v ^ 257 * m ^ 16843008 * g,
                                l[w] = E << 24 | E >>> 8,
                                u[w] = E << 16 | E >>> 16,
                                f[w] = E << 8 | E >>> 24,
                                d[w] = E,
                                g ? (g = m ^ h[h[h[y ^ m]]], B ^= h[h[B]]) : g = B = 1
                            }
                            var Q = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                                n = n.AES = t.extend({
                                    _doReset: function () {
                                        for (var e = this._key, t = e.words, A = e.sigBytes / 4, e = 4 * ((this._nRounds = A + 6) + 1), n = this._keySchedule = [], i = 0; i < e; i++) if (i < A) n[i] = t[i];
                                        else {
                                            var o = n[i - 1];
                                            i % A ? 6 < A && 4 == i % A && (o = r[o >>> 24] << 24 | r[o >>> 16 & 255] << 16 | r[o >>> 8 & 255] << 8 | r[255 & o]) : (o = o << 8 | o >>> 24, o = r[o >>> 24] << 24 | r[o >>> 16 & 255] << 16 | r[o >>> 8 & 255] << 8 | r[255 & o], o ^= Q[i / A | 0] << 24),
                                            n[i] = n[i - A] ^ o
                                        }
                                        for (t = this._invKeySchedule = [], A = 0; A < e; A++) i = e - A,
                                        o = A % 4 ? n[i] : n[i - 4],
                                        t[A] = 4 > A || 4 >= i ? o : l[r[o >>> 24]] ^ u[r[o >>> 16 & 255]] ^ f[r[o >>> 8 & 255]] ^ d[r[255 & o]]
                                    },
                                    encryptBlock: function (e, t) {
                                        this._doCryptBlock(e, t, this._keySchedule, o, a, s, c, r)
                                    },
                                    decryptBlock: function (e, t) {
                                        var A = e[t + 1];
                                        e[t + 1] = e[t + 3],
                                        e[t + 3] = A,
                                        this._doCryptBlock(e, t, this._invKeySchedule, l, u, f, d, i),
                                        A = e[t + 1],
                                        e[t + 1] = e[t + 3],
                                        e[t + 3] = A
                                    },
                                    _doCryptBlock: function (e, t, A, n, r, i, o, a) {
                                        for (var s = this._nRounds, c = e[t] ^ A[0], l = e[t + 1] ^ A[1], u = e[t + 2] ^ A[2], f = e[t + 3] ^ A[3], d = 4, h = 1; h < s; h++) var p = n[c >>> 24] ^ r[l >>> 16 & 255] ^ i[u >>> 8 & 255] ^ o[255 & f] ^ A[d++],
                                            g = n[l >>> 24] ^ r[u >>> 16 & 255] ^ i[f >>> 8 & 255] ^ o[255 & c] ^ A[d++],
                                            B = n[u >>> 24] ^ r[f >>> 16 & 255] ^ i[c >>> 8 & 255] ^ o[255 & l] ^ A[d++],
                                            f = n[f >>> 24] ^ r[c >>> 16 & 255] ^ i[l >>> 8 & 255] ^ o[255 & u] ^ A[d++],
                                            c = p,
                                            l = g,
                                            u = B;
                                        p = (a[c >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & f]) ^ A[d++],
                                        g = (a[l >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & c]) ^ A[d++],
                                        B = (a[u >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & l]) ^ A[d++],
                                        f = (a[f >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & u]) ^ A[d++],
                                        e[t] = p,
                                        e[t + 1] = g,
                                        e[t + 2] = B,
                                        e[t + 3] = f
                                    },
                                    keySize: 8
                                });
                            e.AES = t._createHelper(n)
                        }(),
                        e.exports = A
                    },


                    function (e, t, A) {
                        function n(e) {
                            var t, A, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                                r = "";
                            for (t = 0; e > t; t += 1) A = Math.random() * n.length,
                            A = Math.floor(A),
                            r += n.charAt(A);
                            return r
                        }
                        function r(e, t) {
                            var A = s.enc.Utf8.parse(t),
                                n = s.enc.Utf8.parse("0102030405060708"),
                                r = s.enc.Utf8.parse(e);
                            return s.AES.encrypt(r, A, {
                                    iv: n,
                                    mode: s.mode.CBC
                                }).toString()
                        }
                        function i(e, t, A) {
                            var n;
                            return c.setMaxDigits(131),
                            n = new c.RSAKeyPair(t, "", A),
                            c.encryptedString(n, e)
                        }
                        function o(e, t, A, o) {
                            var a = {},
                                s = n(16);
                            return a.encText = r(e, o),
                            a.encText = r(a.encText, s),
                            a.encSecKey = i(s, t, A),
                            a
                        }
                        function a(e, t, A, n) {
                            var r = {};
                            return r.encText = i(e + n, t, A),
                            r
                        }
                        var s = A(2),
                            c = A(5);
                        e.exports = {
                                asrsea: o,
                                ecnonasr: a
                            }
                    },


                    function (e, t) {
                        function A(e) {
                            return e.map(function (e) {
                                return n[e]
                            }).join("")
                        }
                        var n = {
                            "色": "00e0b",
                            "流感": "509f6",
                            "这边": "259df",
                            "弱": "8642d",
                            "嘴唇": "bc356",
                            "亲": "62901",
                            "开心": "477df",
                            "呲牙": "22677",
                            "憨笑": "ec152",
                            "猫": "b5ff6",
                            "皱眉": "8ace6",
                            "幽灵": "15bb7",
                            "蛋糕": "b7251",
                            "发怒": "52b3a",
                            "大哭": "b17a8",
                            "兔子": "76aea",
                            "星星": "8a5aa",
                            "钟情": "76d2e",
                            "牵手": "41762",
                            "公鸡": "9ec4e",
                            "爱意": "e341f",
                            "禁止": "56135",
                            "狗": "fccf6",
                            "亲亲": "95280",
                            "叉": "104e0",
                            "礼物": "312ec",
                            "晕": "bda92",
                            "呆": "557c9",
                            "生病": "38701",
                            "钻石": "14af6",
                            "拜": "c9d05",
                            "怒": "c4f7f",
                            "示爱": "0c368",
                            "汗": "5b7a4",
                            "小鸡": "6bee2",
                            "痛苦": "55932",
                            "撇嘴": "575cc",
                            "惶恐": "e10b4",
                            "口罩": "24d81",
                            "吐舌": "3cfe4",
                            "心碎": "875d3",
                            "生气": "e8204",
                            "可爱": "7b97d",
                            "鬼脸": "def52",
                            "跳舞": "741d5",
                            "男孩": "46b8e",
                            "奸笑": "289dc",
                            "猪": "6935b",
                            "圈": "3ece0",
                            "便便": "462db",
                            "外星": "0a22b",
                            "圣诞": "8e7",
                            "流泪": "01000",
                            "强": "1",
                            "爱心": "0CoJU",
                            "女孩": "m6Qyw",
                            "惊恐": "8W8ju",
                            "大笑": "d"
                        },
                            r = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"],
                            i = A(r);
                        e.exports = {
                                emj2code: A,
                                BASE_CODE: i
                            }
                    },


                    function (e, t) {
                        function A(e, t, A) {
                            this.e = h(e),
                            this.d = h(t),
                            this.m = h(A),
                            this.chunkSize = 2 * B(this.m),
                            this.radix = 16,
                            this.barrett = new x(this.m)
                        }
                        function n(e, t) {
                            for (var A, n, r, i, a, s, l, f = new Array, d = t.length, h = 0; d > h;) f[h] = t.charCodeAt(h),
                            h++;
                            for (; 0 != f.length % e.chunkSize;) f[h++] = 0;
                            for (A = f.length, n = "", h = 0; A > h; h += e.chunkSize) {
                                for (a = new o, r = 0, i = h; i < h + e.chunkSize; ++r) a.digits[r] = f[i++],
                                a.digits[r] += f[i++] << 8;
                                s = e.barrett.powMod(a, e.e),
                                l = 16 == e.radix ? u(s) : c(s, e.radix),
                                n += l + " "
                            }
                            return n.substring(0, n.length - 1)
                        }
                        function r(e) {
                            S = e,
                            O = new Array(S);
                            for (var t = 0; t < O.length; t++) O[t] = 0;
                            M = new o,
                            k = new o,
                            k.digits[0] = 1
                        }
                        function o(e) {
                            this.digits = "boolean" == typeof e && 1 == e ? null : O.slice(0),
                            this.isNeg = !1
                        }
                        function a(e) {
                            var t = new o(!0);
                            return t.digits = e.digits.slice(0),
                            t.isNeg = e.isNeg,
                            t
                        }
                        function s(e) {
                            var t, A = "";
                            for (t = e.length - 1; t > -1; --t) A += e.charAt(t);
                            return A
                        }
                        function c(e, t) {
                            var A, n, r = new o;
                            for (r.digits[0] = t, A = _(e, r), n = D[A[1].digits[0]]; 1 == F(A[0], M);) A = _(A[0], r),
                            digit = A[1].digits[0],
                            n += D[A[1].digits[0]];
                            return (e.isNeg ? "-" : "") + s(n)
                        }
                        function l(e) {
                            var t = "";
                            for (i = 0; 4 > i; ++i) t += L[15 & e],
                            e >>>= 4;
                            return s(t)
                        }
                        function u(e) {
                            var t, A = "";
                            for (B(e), t = B(e); t > -1; --t) A += l(e.digits[t]);
                            return A
                        }
                        function f(e) {
                            return e >= 48 && 57 >= e ? e - 48 : e >= 65 && 90 >= e ? 10 + e - 65 : e >= 97 && 122 >= e ? 10 + e - 97 : 0
                        }
                        function d(e) {
                            var t, A = 0,
                                n = Math.min(e.length, 4);
                            for (t = 0; n > t; ++t) A <<= 4,
                            A |= f(e.charCodeAt(t));
                            return A
                        }
                        function h(e) {
                            var t, A, n = new o,
                                r = e.length;
                            for (t = r, A = 0; t > 0; t -= 4, ++A) n.digits[A] = d(e.substr(Math.max(t - 4, 0), Math.min(t, 4)));
                            return n
                        }
                        function p(e, t) {
                            var A, n, r, i;
                            if (e.isNeg != t.isNeg) t.isNeg = !t.isNeg,
                            A = g(e, t),
                            t.isNeg = !t.isNeg;
                            else {
                                for (A = new o, n = 0, i = 0; i < e.digits.length; ++i) r = e.digits[i] + t.digits[i] + n,
                                A.digits[i] = 65535 & r,
                                n = Number(r >= z);
                                A.isNeg = e.isNeg
                            }
                            return A
                        }
                        function g(e, t) {
                            var A, n, r, i;
                            if (e.isNeg != t.isNeg) t.isNeg = !t.isNeg,
                            A = p(e, t),
                            t.isNeg = !t.isNeg;
                            else {
                                for (A = new o, r = 0, i = 0; i < e.digits.length; ++i) n = e.digits[i] - t.digits[i] + r,
                                A.digits[i] = 65535 & n,
                                A.digits[i] < 0 && (A.digits[i] += z),
                                r = 0 - Number(0 > n);
                                if (-1 == r) {
                                    for (r = 0, i = 0; i < e.digits.length; ++i) n = 0 - A.digits[i] + r,
                                    A.digits[i] = 65535 & n,
                                    A.digits[i] < 0 && (A.digits[i] += z),
                                    r = 0 - Number(0 > n);
                                    A.isNeg = !e.isNeg
                                } else A.isNeg = e.isNeg
                            }
                            return A
                        }
                        function B(e) {
                            for (var t = e.digits.length - 1; t > 0 && 0 == e.digits[t];)--t;
                            return t
                        }
                        function w(e) {
                            var t, A = B(e),
                                n = e.digits[A],
                                r = (A + 1) * X;
                            for (t = r; t > r - X && 0 == (32768 & n); --t) n <<= 1;
                            return t
                        }
                        function m(e, t) {
                            var A, n, r, i, a = new o,
                                s = B(e),
                                c = B(t);
                            for (i = 0; c >= i; ++i) {
                                    for (A = 0, r = i, j = 0; s >= j; ++j, ++r) n = a.digits[r] + e.digits[j] * t.digits[i] + A,
                                    a.digits[r] = n & J,
                                    A = n >>> K;
                                    a.digits[i + s + 1] = A
                                }
                            return a.isNeg = e.isNeg != t.isNeg,
                            a
                        }
                        function v(e, t) {
                            var A, n, r, i;
                            for (result = new o, A = B(e), n = 0, i = 0; A >= i; ++i) r = result.digits[i] + e.digits[i] * t + n,
                            result.digits[i] = r & J,
                            n = r >>> K;
                            return result.digits[1 + A] = n,
                            result
                        }
                        function y(e, t, A, n, r) {
                            var i, o, a = Math.min(t + r, e.length);
                            for (i = t, o = n; a > i; ++i, ++o) A[o] = e[i]
                        }
                        function E(e, t) {
                            var A, n, r, i, a = Math.floor(t / X),
                                s = new o;
                            for (y(e.digits, 0, s.digits, a, s.digits.length - a), A = t % X, n = X - A, r = s.digits.length - 1, i = r - 1; r > 0; --r, --i) s.digits[r] = s.digits[r] << A & J | (s.digits[i] & R[A]) >>> n;
                            return s.digits[0] = s.digits[r] << A & J,
                            s.isNeg = e.isNeg,
                            s
                        }
                        function Q(e, t) {
                            var A, n, r, i, a = Math.floor(t / X),
                                s = new o;
                            for (y(e.digits, a, s.digits, 0, e.digits.length - a), A = t % X, n = X - A, r = 0, i = r + 1; r < s.digits.length - 1; ++r, ++i) s.digits[r] = s.digits[r] >>> A | (s.digits[i] & P[A]) << n;
                            return s.digits[s.digits.length - 1] >>>= A,
                            s.isNeg = e.isNeg,
                            s
                        }
                        function C(e, t) {
                            var A = new o;
                            return y(e.digits, 0, A.digits, t, A.digits.length - t),
                            A
                        }
                        function U(e, t) {
                            var A = new o;
                            return y(e.digits, t, A.digits, 0, A.digits.length - t),
                            A
                        }
                        function b(e, t) {
                            var A = new o;
                            return y(e.digits, 0, A.digits, 0, t),
                            A
                        }
                        function F(e, t) {
                            if (e.isNeg != t.isNeg) return 1 - 2 * Number(e.isNeg);
                            for (var A = e.digits.length - 1; A >= 0; --A) if (e.digits[A] != t.digits[A]) return e.isNeg ? 1 - 2 * Number(e.digits[A] > t.digits[A]) : 1 - 2 * Number(e.digits[A] < t.digits[A]);
                            return 0
                        }
                        function _(e, t) {
                            var A, n, r, i, s, c, l, u, f, d, h, m, y, U, b = w(e),
                                _ = w(t),
                                H = t.isNeg;
                            if (_ > b) return e.isNeg ? (A = a(k), A.isNeg = !t.isNeg, e.isNeg = !1, t.isNeg = !1, n = g(t, e), e.isNeg = !0, t.isNeg = H) : (A = new o, n = a(e)),
                            new Array(A, n);
                            for (A = new o, n = e, r = Math.ceil(_ / X) - 1, i = 0; t.digits[r] < V;) t = E(t, 1),
                            ++i,
                            ++_,
                            r = Math.ceil(_ / X) - 1;
                            for (n = E(n, i), b += i, s = Math.ceil(b / X) - 1, c = C(t, s - r); - 1 != F(n, c);)++A.digits[s - r],
                            n = g(n, c);
                            for (l = s; l > r; --l) {
                                    for (u = l >= n.digits.length ? 0 : n.digits[l], f = l - 1 >= n.digits.length ? 0 : n.digits[l - 1], d = l - 2 >= n.digits.length ? 0 : n.digits[l - 2], h = r >= t.digits.length ? 0 : t.digits[r], m = r - 1 >= t.digits.length ? 0 : t.digits[r - 1], A.digits[l - r - 1] = u == h ? J : Math.floor((u * z + f) / h), y = A.digits[l - r - 1] * (h * z + m), U = u * W + (f * z + d); y > U;)--A.digits[l - r - 1],
                                    y = A.digits[l - r - 1] * (h * z | m),
                                    U = u * z * z + (f * z + d);
                                    c = C(t, l - r - 1),
                                    n = g(n, v(c, A.digits[l - r - 1])),
                                    n.isNeg && (n = p(n, c), --A.digits[l - r - 1])
                                }
                            return n = Q(n, i),
                            A.isNeg = e.isNeg != H,
                            e.isNeg && (A = H ? p(A, k) : g(A, k), t = Q(t, i), n = g(t, n)),
                            0 == n.digits[0] && 0 == B(n) && (n.isNeg = !1),
                            new Array(A, n)
                        }
                        function H(e, t) {
                            return _(e, t)[0]
                        }
                        function x(e) {
                            this.modulus = a(e),
                            this.k = B(this.modulus) + 1;
                            var t = new o;
                            t.digits[2 * this.k] = 1,
                            this.mu = H(t, this.modulus),
                            this.bkplus1 = new o,
                            this.bkplus1.digits[this.k + 1] = 1,
                            this.modulo = N,
                            this.multiplyMod = T,
                            this.powMod = I
                        }
                        function N(e) {
                            var t, A = U(e, this.k - 1),
                                n = m(A, this.mu),
                                r = U(n, this.k + 1),
                                i = b(e, this.k + 1),
                                o = m(r, this.modulus),
                                a = b(o, this.k + 1),
                                s = g(i, a);
                            for (s.isNeg && (s = p(s, this.bkplus1)), t = F(s, this.modulus) >= 0; t;) s = g(s, this.modulus),
                            t = F(s, this.modulus) >= 0;
                            return s
                        }
                        function T(e, t) {
                            var A = m(e, t);
                            return this.modulo(A)
                        }
                        function I(e, t) {
                            var A, n, r = new o;
                            for (r.digits[0] = 1, A = e, n = t; 0 != (1 & n.digits[0]) && (r = this.multiplyMod(r, A)), n = Q(n, 1), 0 != n.digits[0] || 0 != B(n);) A = this.multiplyMod(A, A);
                            return r
                        }
                        var S, O, M, k, D, L, R, P, K = 16,
                            X = K,
                            z = 65536,
                            V = z >>> 1,
                            W = z * z,
                            J = z - 1;
                        r(20),


                        function (e) {
                                var t, A = new o;
                                for (A.isNeg = 0 > e, e = Math.abs(e), t = 0; e > 0;) A.digits[t++] = e & J,
                                e >>= K;
                                return A
                            }(1e15),
                        D = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),
                        L = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
                        R = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535),
                        P = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535),
                        e.exports = {
                                RSAKeyPair: A,
                                setMaxDigits: r,
                                encryptedString: n
                            }
                    },


                    function (module, exports, __webpack_require__) {
                        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
                        !
                        function (e, t, A) {
                            void 0 !== module && module.exports ? module.exports = A() : (__WEBPACK_AMD_DEFINE_FACTORY__ = A, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
                        }(0, 0, function () {
                            function succeed(e) {
                                var t = protocolRe.exec(e.url);
                                return t = t && t[1] || context.location.protocol,
                                httpsRe.test(t) ? twoHundo.test(e.request.status) : !! e.request.response
                            }
                            function handleReadyState(e, t, A) {
                                return function () {
                                    return e._aborted ? A(e.request) : e._timedOut ? A(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : A(e.request)))
                                }
                            }
                            function setHeaders(e, t) {
                                var A, n = t.headers || {};
                                n.Accept = n.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
                                var r = "undefined" != typeof FormData && t.data instanceof FormData;
                                t.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith),
                                n[contentType] || r || (n[contentType] = t.contentType || defaultHeaders.contentType);
                                for (A in n) n.hasOwnProperty(A) && "setRequestHeader" in e && e.setRequestHeader(A, n[A])
                            }
                            function setCredentials(e, t) {
                                void 0 !== t.withCredentials && void 0 !== e.withCredentials && (e.withCredentials = !! t.withCredentials)
                            }
                            function generalCallback(e) {
                                lastValue = e
                            }
                            function urlappend(e, t) {
                                return e + (/\?/.test(e) ? "&" : "?") + t
                            }
                            function handleJsonp(e, t, A, n) {
                                var r = uniqid++,
                                    i = e.jsonpCallback || "callback",
                                    o = e.jsonpCallbackName || reqwest.getcallbackPrefix(r),
                                    a = new RegExp("((^|\\?|&)" + i + ")=([^&]+)"),
                                    s = n.match(a),
                                    c = doc.createElement("script"),
                                    l = 0,
                                    u = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
                                return s ? "?" === s[3] ? n = n.replace(a, "$1=" + o) : o = s[3] : n = urlappend(n, i + "=" + o),
                                context[o] = generalCallback,
                                c.type = "text/javascript",
                                c.src = n,
                                c.async = !0,
                                void 0 === c.onreadystatechange || u || (c.htmlFor = c.id = "_reqwest_" + r),
                                c.onload = c.onreadystatechange = function () {
                                        if (c[readyState] && "complete" !== c[readyState] && "loaded" !== c[readyState] || l) return !1;
                                        c.onload = c.onreadystatechange = null,
                                        c.onclick && c.onclick(),
                                        t(lastValue),
                                        lastValue = void 0,
                                        head.removeChild(c),
                                        l = 1
                                    },
                                head.appendChild(c),
                                {
                                        abort: function () {
                                            c.onload = c.onreadystatechange = null,
                                            A({}, "Request is aborted: timeout", {}),
                                            lastValue = void 0,
                                            head.removeChild(c),
                                            l = 1
                                        }
                                    }
                            }
                            function getRequest(e, t) {
                                var A, n = this.o,
                                    r = (n.method || "GET").toUpperCase(),
                                    i = "string" == typeof n ? n : n.url,
                                    o = !1 !== n.processData && n.data && "string" != typeof n.data ? reqwest.toQueryString(n.data) : n.data || null,
                                    a = !1;
                                return "jsonp" != n.type && "GET" != r || !o || (i = urlappend(i, o), o = null),
                                "jsonp" == n.type ? handleJsonp(n, e, t, i) : (A = n.xhr && n.xhr(n) || xhr(n), A.open(r, i, !1 !== n.async), setHeaders(A, n), setCredentials(A, n), context[xDomainRequest] && A instanceof context[xDomainRequest] ? (A.onload = e, A.onerror = t, A.onprogress = function () {}, a = !0) : A.onreadystatechange = handleReadyState(this, e, t), n.before && n.before(A), a ? setTimeout(function () {
                                        A.send(o)
                                    }, 200) : A.send(o), A)
                            }
                            function Reqwest(e, t) {
                                this.o = e,
                                this.fn = t,
                                init.apply(this, arguments)
                            }
                            function setType(e) {
                                if (null !== e) return e.match("json") ? "json" : e.match("javascript") ? "js" : e.match("text") ? "html" : e.match("xml") ? "xml" : void 0
                            }
                            function init(o, fn) {
                                function complete(e) {
                                    for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
                                }
                                function success(resp) {
                                    var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                                    resp = "jsonp" !== type ? self.request : resp;
                                    var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                                        r = filteredResponse;
                                    try {
                                            resp.responseText = r
                                        } catch (e) {}
                                    if (r) switch (type) {
                                        case "json":
                                            try {
                                                resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                                            } catch (e) {
                                                return error(resp, "Could not parse JSON in response", e)
                                            }
                                            break;
                                        case "js":
                                            resp = eval(r);
                                            break;
                                        case "html":
                                            resp = r;
                                            break;
                                        case "xml":
                                            resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                                        }
                                    for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                                    complete(resp)
                                }
                                function timedOut() {
                                    self._timedOut = !0,
                                    self.request.abort()
                                }
                                function error(e, t, A) {
                                    for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = A, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, A);
                                    complete(e)
                                }
                                this.url = "string" == typeof o ? o : o.url,
                                this.timeout = null,
                                this._fulfilled = !1,
                                this._successHandler = function () {},
                                this._fulfillmentHandlers = [],
                                this._errorHandlers = [],
                                this._completeHandlers = [],
                                this._erred = !1,
                                this._responseArgs = {};
                                var self = this;
                                fn = fn ||
                                function () {},
                                o.timeout && (this.timeout = setTimeout(function () {
                                    timedOut()
                                }, o.timeout)),
                                o.success && (this._successHandler = function () {
                                    o.success.apply(o, arguments)
                                }),
                                o.error && this._errorHandlers.push(function () {
                                    o.error.apply(o, arguments)
                                }),
                                o.complete && this._completeHandlers.push(function () {
                                    o.complete.apply(o, arguments)
                                }),
                                this.request = getRequest.call(this, success, error)
                            }
                            function reqwest(e, t) {
                                return new Reqwest(e, t)
                            }
                            function normalize(e) {
                                return e ? e.replace(/\r?\n/g, "\r\n") : ""
                            }
                            function serial(e, t) {
                                var A, n, r, i, o = e.name,
                                    a = e.tagName.toLowerCase(),
                                    s = function (e) {
                                        e && !e.disabled && t(o, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text))
                                    };
                                if (!e.disabled && o) switch (a) {
                                    case "input":
                                        /reset|button|image|file/i.test(e.type) || (A = /checkbox/i.test(e.type), n = /radio/i.test(e.type), r = e.value, (!(A || n) || e.checked) && t(o, normalize(A && "" === r ? "on" : r)));
                                        break;
                                    case "textarea":
                                        t(o, normalize(e.value));
                                        break;
                                    case "select":
                                        if ("select-one" === e.type.toLowerCase()) s(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                                        else for (i = 0; e.length && i < e.length; i++) e.options[i].selected && s(e.options[i])
                                    }
                            }
                            function eachFormElement() {
                                var e, t, A = this;
                                for (t = 0; t < arguments.length; t++) e = arguments[t],
                                /input|select|textarea/i.test(e.tagName) && serial(e, A),


                                function (e, t) {
                                    var n, r, i;
                                    for (n = 0; n < t.length; n++) for (i = e[byTag](t[n]), r = 0; r < i.length; r++) serial(i[r], A)
                                }(e, ["input", "select", "textarea"])
                            }
                            function serializeQueryString() {
                                return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
                            }
                            function serializeHash() {
                                var e = {};
                                return eachFormElement.apply(function (t, A) {
                                    t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(A)) : e[t] = A
                                }, arguments),
                                e
                            }
                            function buildParams(e, t, A, n) {
                                var r, i, o, a = /\[\]$/;
                                if (isArray(t)) for (i = 0; t && i < t.length; i++) o = t[i],
                                A || a.test(e) ? n(e, o) : buildParams(e + "[" + ("object" == typeof o ? i : "") + "]", o, A, n);
                                else if (t && "[object Object]" === t.toString()) for (r in t) buildParams(e + "[" + r + "]", t[r], A, n);
                                else n(e, t)
                            }
                            var context = this;
                            if ("window" in context) var doc = document,
                                byTag = "getElementsByTagName",
                                head = doc[byTag]("head")[0];
                            else {
                                    var XHR2;
                                    try {
                                        XHR2 = __webpack_require__(7)
                                    } catch (e) {
                                        throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
                                    }
                                }
                            var httpsRe = /^http/,
                                protocolRe = /(^\w+):\/\//,
                                twoHundo = /^(20\d|1223)$/,
                                readyState = "readyState",
                                contentType = "Content-Type",
                                requestedWith = "X-Requested-With",
                                uniqid = 0,
                                callbackPrefix = "reqwest_" + +new Date,
                                lastValue, xmlHttpRequest = "XMLHttpRequest",
                                xDomainRequest = "XDomainRequest",
                                noop = function () {},
                                isArray = "function" == typeof Array.isArray ? Array.isArray : function (e) {
                                    return e instanceof Array
                                },
                                defaultHeaders = {
                                    contentType: "application/x-www-form-urlencoded",
                                    requestedWith: xmlHttpRequest,
                                    accept: {
                                        "*": "text/javascript, text/html, application/xml, text/xml, */*",
                                        xml: "application/xml, text/xml",
                                        html: "text/html",
                                        text: "text/plain",
                                        json: "application/json, text/javascript",
                                        js: "application/javascript, text/javascript"
                                    }
                                },
                                xhr = function (e) {
                                    if (!0 === e.crossOrigin) {
                                        var t = context[xmlHttpRequest] ? new XMLHttpRequest : null;
                                        if (t && "withCredentials" in t) return t;
                                        if (context[xDomainRequest]) return new XDomainRequest;
                                        throw new Error("Browser does not support cross-origin requests")
                                    }
                                    return context[xmlHttpRequest] ? new XMLHttpRequest : XHR2 ? new XHR2 : new ActiveXObject("Microsoft.XMLHTTP")
                                },
                                globalSetupOptions = {
                                    dataFilter: function (e) {
                                        return e
                                    }
                                };
                            return Reqwest.prototype = {
                                    abort: function () {
                                        this._aborted = !0,
                                        this.request.abort()
                                    },
                                    retry: function () {
                                        init.call(this, this.o, this.fn)
                                    },
                                    then: function (e, t) {
                                        return e = e ||
                                        function () {},
                                        t = t ||
                                        function () {},
                                        this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)),
                                        this
                                    },
                                    always: function (e) {
                                        return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e),
                                        this
                                    },
                                    fail: function (e) {
                                        return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e),
                                        this
                                    },
                                    catch: function (e) {
                                        return this.fail(e)
                                    }
                                },
                            reqwest.serializeArray = function () {
                                    var e = [];
                                    return eachFormElement.apply(function (t, A) {
                                        e.push({
                                            name: t,
                                            value: A
                                        })
                                    }, arguments),
                                    e
                                },
                            reqwest.serialize = function () {
                                    if (0 === arguments.length) return "";
                                    var e, t, A = Array.prototype.slice.call(arguments, 0);
                                    return e = A.pop(),
                                    e && e.nodeType && A.push(e) && (e = null),
                                    e && (e = e.type),
                                    t = "map" == e ? serializeHash : "array" == e ? reqwest.serializeArray : serializeQueryString,
                                    t.apply(null, A)
                                },
                            reqwest.toQueryString = function (e, t) {
                                    var A, n, r = t || !1,
                                        i = [],
                                        o = encodeURIComponent,
                                        a = function (e, t) {
                                            t = "function" == typeof t ? t() : null == t ? "" : t,
                                            i[i.length] = o(e) + "=" + o(t)
                                        };
                                    if (isArray(e)) for (n = 0; e && n < e.length; n++) a(e[n].name, e[n].value);
                                    else for (A in e) e.hasOwnProperty(A) && buildParams(A, e[A], r, a);
                                    return i.join("&").replace(/%20/g, "+")
                                },
                            reqwest.getcallbackPrefix = function () {
                                    return callbackPrefix
                                },
                            reqwest.compat = function (e, t) {
                                    return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)),
                                    new Reqwest(e, t)
                                },
                            reqwest.ajaxSetup = function (e) {
                                    e = e || {};
                                    for (var t in e) globalSetupOptions[t] = e[t]
                                },
                            reqwest
                        })
                    },


                    function (e, t) {},


                    function (e, t, A) {
                        function n(e, t) {
                            var A, n = {},
                                t = i({}, t),
                                r = e.split("?"),
                                g = t.headers || (t.headers = {});
                            if (void 0 === t.credentials && (t.credentials = "include"), p.test(e) && g[d] !== h && !t.noEnc) {
                                    g[d] = "application/x-www-form-urlencoded",
                                    g.Accept,
                                    2 === r.length && (n = a(r[1])),
                                    e = r[0],
                                    ["query", "data"].forEach(function (e) {
                                        t[e] && (n = i(n, "string" == typeof t[e] ? a(t[e]) : t[e]))
                                    });
                                    var B = s("__csrf");
                                    return B && (n.csrf_token = B),
                                    e = e.replace("api", "weapi") + (B ? "?" + o({
                                        csrf_token: n.csrf_token
                                    }) : ""),
                                    t.method = "post",
                                    delete t.query,
                                    delete t.data,
                                    A = c(JSON.stringify(n), l(["流泪", "强"]), u, l(["爱心", "女孩", "惊恐", "大笑"])),
                                    t.body = o({
                                        params: A.encText,
                                        encSecKey: A.encSecKey
                                    }),
                                    f(e, t)
                                }
                            return f(e, t)
                        }
                        var r = A(0),
                            i = r.extend,
                            o = r.obj2query,
                            a = r.query2obj,
                            s = r.getCookie,
                            c = r.asrsea,
                            l = (r.ecnonasr, r.emj2code),
                            u = r.BASE_CODE,
                            f = void 0;
                        "undefined" != typeof window && (f = A(1));
                        var d = "Content-Type",
                            h = "multipart/form-data",
                            p = /(^|\.com)\/api/;
                        n.encode = function (e, t) {
                                e || (e = {}),
                                t && (e.csrf_token = t);
                                var A = c(JSON.stringify(e), l(["流泪", "强"]), u, l(["爱心", "女孩", "惊恐", "大笑"]));
                                return t && (A.query = o({
                                    csrf_token: t
                                })),
                                A
                            },
                        n.util = i({
                                fetch: f
                            }, r),
                        e.exports = n
                    }])
                }()
            }()
        },


        function (e, t, A) {
            "use strict";
            (function (n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = A(7),
                    i = function (e) {
                        return e && e.__esModule ? e : {
                        default:
                            e
                        }
                    }(r),
                    o = function () {},
                    a = o;
                "undefined" != typeof window && (a = A(2));
                var s = function (e) {
                        var t = void 0;
                        e ? t = e : "undefined" != typeof window && (t = window.location);
                        var A = t.hostname || "",
                            n = t.protocol || "";
                        return "localhost" === A && (A = "igame.163.com"),
                        n + "//" + A
                    },
                    c = function (e, t, A) {
                        if (e) {
                            var r = t || null,
                                c = A || o,
                                l = r ? r.privateLocal : void 0,
                                u = s(l);
                            a(u + "/api/feedback/weblog", {
                                    method: "post",
                                    data: {
                                        logs: (0, i.
                                    default)([{
                                            action: e,
                                            json: r
                                        }])
                                    }
                                }).then(function (e) {
                                    return e.json()
                                }).then(function (e) {
                                    c(e)
                                }).
                            catch (function (e) {
                                    c(e)
                                }),
                            n.env.NODE_ENV
                        }
                    };
                t.
            default = c,
                e.exports = t.
            default
            }).call(t, A(11))
        },


        function (e, t, A) {
            "use strict";
            var n = A(1);
            e.exports = n
        },


        function (e, t, A) {
            "use strict";

            function n(e, t) {
                return t = t || {},
                t.method = t.method || "GET",
                t.credentials = t.credentials || "same-origin",
                t.headers = t.headers ? t.headers : {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                t.query && (e = e + "?" + i.obj2query(t.query)),
                t.data && (t.body = t.data),
                r(e, t).then(function (e) {
                    var A = t.raw || "function" != typeof e.json ? e : e.json();
                    return Promise.resolve(A).then(function (t) {
                        return e.ok ? t : Promise.reject({
                            status: e.status,
                            result: t
                        })
                    })
                }).
                catch (function (e) {
                    throw e
                })
            }
            var r = A(10),
                i = A(0);
            e.exports = n
        },


        function (e, t, A) {
            "use strict";

            function n(e, t) {
                return i(e, r({}, t))
            }
            var r = Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var A = arguments[t];
                    for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n])
                }
                return e
            },
                i = A(5);
            e.exports = {
                    _$request: n
                }
        },


        function (e, t, A) {
            e.exports = {
            default:
                A(8),
                __esModule: !0
            }
        },


        function (e, t, A) {
            var n = A(9),
                r = n.JSON || (n.JSON = {
                    stringify: JSON.stringify
                });
            e.exports = function (e) {
                    return r.stringify.apply(r, arguments)
                }
        },


        function (e, t) {
            var A = e.exports = {
                version: "2.4.0"
            };
            "number" == typeof __e && (__e = A)
        },


        function (e, t, A) {
            A(13),
            e.exports = self.fetch.bind(self)
        },


        function (e, t) {
            function A() {
                throw new Error("setTimeout has not been defined")
            }
            function n() {
                throw new Error("clearTimeout has not been defined")
            }
            function r(e) {
                if (l === setTimeout) return setTimeout(e, 0);
                if ((l === A || !l) && setTimeout) return l = setTimeout,
                setTimeout(e, 0);
                try {
                    return l(e, 0)
                } catch (t) {
                    try {
                        return l.call(null, e, 0)
                    } catch (t) {
                        return l.call(this, e, 0)
                    }
                }
            }
            function i(e) {
                if (u === clearTimeout) return clearTimeout(e);
                if ((u === n || !u) && clearTimeout) return u = clearTimeout,
                clearTimeout(e);
                try {
                    return u(e)
                } catch (t) {
                    try {
                        return u.call(null, e)
                    } catch (t) {
                        return u.call(this, e)
                    }
                }
            }
            function o() {
                p && d && (p = !1, d.length ? h = d.concat(h) : g = -1, h.length && a())
            }
            function a() {
                if (!p) {
                    var e = r(o);
                    p = !0;
                    for (var t = h.length; t;) {
                        for (d = h, h = []; ++g < t;) d && d[g].run();
                        g = -1,
                        t = h.length
                    }
                    d = null,
                    p = !1,
                    i(e)
                }
            }
            function s(e, t) {
                this.fun = e,
                this.array = t
            }
            function c() {}
            var l, u, f = e.exports = {};
            !
            function () {
                try {
                    l = "function" == typeof setTimeout ? setTimeout : A
                } catch (e) {
                    l = A
                }
                try {
                    u = "function" == typeof clearTimeout ? clearTimeout : n
                } catch (e) {
                    u = n
                }
            }();
            var d, h = [],
                p = !1,
                g = -1;
            f.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var A = 1; A < arguments.length; A++) t[A - 1] = arguments[A];
                    h.push(new s(e, t)),
                    1 !== h.length || p || r(a)
                },
            s.prototype.run = function () {
                    this.fun.apply(null, this.array)
                },
            f.title = "browser",
            f.browser = !0,
            f.env = {},
            f.argv = [],
            f.version = "",
            f.versions = {},
            f.on = c,
            f.addListener = c,
            f.once = c,
            f.off = c,
            f.removeListener = c,
            f.removeAllListeners = c,
            f.emit = c,
            f.prependListener = c,
            f.prependOnceListener = c,
            f.listeners = function (e) {
                    return []
                },
            f.binding = function (e) {
                    throw new Error("process.binding is not supported")
                },
            f.cwd = function () {
                    return "/"
                },
            f.chdir = function (e) {
                    throw new Error("process.chdir is not supported")
                },
            f.umask = function () {
                    return 0
                }
        },


        function (e, t, A) {
            !
            function (t) {
                e.exports = function (e) {
                    "use strict";

                    function t(e, t) {
                        var A = e[0],
                            n = e[1],
                            r = e[2],
                            i = e[3];
                        A += (n & r | ~n & i) + t[0] - 680876936 | 0,
                        A = (A << 7 | A >>> 25) + n | 0,
                        i += (A & n | ~A & r) + t[1] - 389564586 | 0,
                        i = (i << 12 | i >>> 20) + A | 0,
                        r += (i & A | ~i & n) + t[2] + 606105819 | 0,
                        r = (r << 17 | r >>> 15) + i | 0,
                        n += (r & i | ~r & A) + t[3] - 1044525330 | 0,
                        n = (n << 22 | n >>> 10) + r | 0,
                        A += (n & r | ~n & i) + t[4] - 176418897 | 0,
                        A = (A << 7 | A >>> 25) + n | 0,
                        i += (A & n | ~A & r) + t[5] + 1200080426 | 0,
                        i = (i << 12 | i >>> 20) + A | 0,
                        r += (i & A | ~i & n) + t[6] - 1473231341 | 0,
                        r = (r << 17 | r >>> 15) + i | 0,
                        n += (r & i | ~r & A) + t[7] - 45705983 | 0,
                        n = (n << 22 | n >>> 10) + r | 0,
                        A += (n & r | ~n & i) + t[8] + 1770035416 | 0,
                        A = (A << 7 | A >>> 25) + n | 0,
                        i += (A & n | ~A & r) + t[9] - 1958414417 | 0,
                        i = (i << 12 | i >>> 20) + A | 0,
                        r += (i & A | ~i & n) + t[10] - 42063 | 0,
                        r = (r << 17 | r >>> 15) + i | 0,
                        n += (r & i | ~r & A) + t[11] - 1990404162 | 0,
                        n = (n << 22 | n >>> 10) + r | 0,
                        A += (n & r | ~n & i) + t[12] + 1804603682 | 0,
                        A = (A << 7 | A >>> 25) + n | 0,
                        i += (A & n | ~A & r) + t[13] - 40341101 | 0,
                        i = (i << 12 | i >>> 20) + A | 0,
                        r += (i & A | ~i & n) + t[14] - 1502002290 | 0,
                        r = (r << 17 | r >>> 15) + i | 0,
                        n += (r & i | ~r & A) + t[15] + 1236535329 | 0,
                        n = (n << 22 | n >>> 10) + r | 0,
                        A += (n & i | r & ~i) + t[1] - 165796510 | 0,
                        A = (A << 5 | A >>> 27) + n | 0,
                        i += (A & r | n & ~r) + t[6] - 1069501632 | 0,
                        i = (i << 9 | i >>> 23) + A | 0,
                        r += (i & n | A & ~n) + t[11] + 643717713 | 0,
                        r = (r << 14 | r >>> 18) + i | 0,
                        n += (r & A | i & ~A) + t[0] - 373897302 | 0,
                        n = (n << 20 | n >>> 12) + r | 0,
                        A += (n & i | r & ~i) + t[5] - 701558691 | 0,
                        A = (A << 5 | A >>> 27) + n | 0,
                        i += (A & r | n & ~r) + t[10] + 38016083 | 0,
                        i = (i << 9 | i >>> 23) + A | 0,
                        r += (i & n | A & ~n) + t[15] - 660478335 | 0,
                        r = (r << 14 | r >>> 18) + i | 0,
                        n += (r & A | i & ~A) + t[4] - 405537848 | 0,
                        n = (n << 20 | n >>> 12) + r | 0,
                        A += (n & i | r & ~i) + t[9] + 568446438 | 0,
                        A = (A << 5 | A >>> 27) + n | 0,
                        i += (A & r | n & ~r) + t[14] - 1019803690 | 0,
                        i = (i << 9 | i >>> 23) + A | 0,
                        r += (i & n | A & ~n) + t[3] - 187363961 | 0,
                        r = (r << 14 | r >>> 18) + i | 0,
                        n += (r & A | i & ~A) + t[8] + 1163531501 | 0,
                        n = (n << 20 | n >>> 12) + r | 0,
                        A += (n & i | r & ~i) + t[13] - 1444681467 | 0,
                        A = (A << 5 | A >>> 27) + n | 0,
                        i += (A & r | n & ~r) + t[2] - 51403784 | 0,
                        i = (i << 9 | i >>> 23) + A | 0,
                        r += (i & n | A & ~n) + t[7] + 1735328473 | 0,
                        r = (r << 14 | r >>> 18) + i | 0,
                        n += (r & A | i & ~A) + t[12] - 1926607734 | 0,
                        n = (n << 20 | n >>> 12) + r | 0,
                        A += (n ^ r ^ i) + t[5] - 378558 | 0,
                        A = (A << 4 | A >>> 28) + n | 0,
                        i += (A ^ n ^ r) + t[8] - 2022574463 | 0,
                        i = (i << 11 | i >>> 21) + A | 0,
                        r += (i ^ A ^ n) + t[11] + 1839030562 | 0,
                        r = (r << 16 | r >>> 16) + i | 0,
                        n += (r ^ i ^ A) + t[14] - 35309556 | 0,
                        n = (n << 23 | n >>> 9) + r | 0,
                        A += (n ^ r ^ i) + t[1] - 1530992060 | 0,
                        A = (A << 4 | A >>> 28) + n | 0,
                        i += (A ^ n ^ r) + t[4] + 1272893353 | 0,
                        i = (i << 11 | i >>> 21) + A | 0,
                        r += (i ^ A ^ n) + t[7] - 155497632 | 0,
                        r = (r << 16 | r >>> 16) + i | 0,
                        n += (r ^ i ^ A) + t[10] - 1094730640 | 0,
                        n = (n << 23 | n >>> 9) + r | 0,
                        A += (n ^ r ^ i) + t[13] + 681279174 | 0,
                        A = (A << 4 | A >>> 28) + n | 0,
                        i += (A ^ n ^ r) + t[0] - 358537222 | 0,
                        i = (i << 11 | i >>> 21) + A | 0,
                        r += (i ^ A ^ n) + t[3] - 722521979 | 0,
                        r = (r << 16 | r >>> 16) + i | 0,
                        n += (r ^ i ^ A) + t[6] + 76029189 | 0,
                        n = (n << 23 | n >>> 9) + r | 0,
                        A += (n ^ r ^ i) + t[9] - 640364487 | 0,
                        A = (A << 4 | A >>> 28) + n | 0,
                        i += (A ^ n ^ r) + t[12] - 421815835 | 0,
                        i = (i << 11 | i >>> 21) + A | 0,
                        r += (i ^ A ^ n) + t[15] + 530742520 | 0,
                        r = (r << 16 | r >>> 16) + i | 0,
                        n += (r ^ i ^ A) + t[2] - 995338651 | 0,
                        n = (n << 23 | n >>> 9) + r | 0,
                        A += (r ^ (n | ~i)) + t[0] - 198630844 | 0,
                        A = (A << 6 | A >>> 26) + n | 0,
                        i += (n ^ (A | ~r)) + t[7] + 1126891415 | 0,
                        i = (i << 10 | i >>> 22) + A | 0,
                        r += (A ^ (i | ~n)) + t[14] - 1416354905 | 0,
                        r = (r << 15 | r >>> 17) + i | 0,
                        n += (i ^ (r | ~A)) + t[5] - 57434055 | 0,
                        n = (n << 21 | n >>> 11) + r | 0,
                        A += (r ^ (n | ~i)) + t[12] + 1700485571 | 0,
                        A = (A << 6 | A >>> 26) + n | 0,
                        i += (n ^ (A | ~r)) + t[3] - 1894986606 | 0,
                        i = (i << 10 | i >>> 22) + A | 0,
                        r += (A ^ (i | ~n)) + t[10] - 1051523 | 0,
                        r = (r << 15 | r >>> 17) + i | 0,
                        n += (i ^ (r | ~A)) + t[1] - 2054922799 | 0,
                        n = (n << 21 | n >>> 11) + r | 0,
                        A += (r ^ (n | ~i)) + t[8] + 1873313359 | 0,
                        A = (A << 6 | A >>> 26) + n | 0,
                        i += (n ^ (A | ~r)) + t[15] - 30611744 | 0,
                        i = (i << 10 | i >>> 22) + A | 0,
                        r += (A ^ (i | ~n)) + t[6] - 1560198380 | 0,
                        r = (r << 15 | r >>> 17) + i | 0,
                        n += (i ^ (r | ~A)) + t[13] + 1309151649 | 0,
                        n = (n << 21 | n >>> 11) + r | 0,
                        A += (r ^ (n | ~i)) + t[4] - 145523070 | 0,
                        A = (A << 6 | A >>> 26) + n | 0,
                        i += (n ^ (A | ~r)) + t[11] - 1120210379 | 0,
                        i = (i << 10 | i >>> 22) + A | 0,
                        r += (A ^ (i | ~n)) + t[2] + 718787259 | 0,
                        r = (r << 15 | r >>> 17) + i | 0,
                        n += (i ^ (r | ~A)) + t[9] - 343485551 | 0,
                        n = (n << 21 | n >>> 11) + r | 0,
                        e[0] = A + e[0] | 0,
                        e[1] = n + e[1] | 0,
                        e[2] = r + e[2] | 0,
                        e[3] = i + e[3] | 0
                    }
                    function A(e) {
                        var t, A = [];
                        for (t = 0; t < 64; t += 4) A[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                        return A
                    }
                    function n(e) {
                        var t, A = [];
                        for (t = 0; t < 64; t += 4) A[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                        return A
                    }
                    function r(e) {
                        var n, r, i, o, a, s, c = e.length,
                            l = [1732584193, -271733879, -1732584194, 271733878];
                        for (n = 64; n <= c; n += 64) t(l, A(e.substring(n - 64, n)));
                        for (e = e.substring(n - 64), r = e.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < r; n += 1) i[n >> 2] |= e.charCodeAt(n) << (n % 4 << 3);
                        if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (t(l, i), n = 0; n < 16; n += 1) i[n] = 0;
                        return o = 8 * c,
                        o = o.toString(16).match(/(.*?)(.{0,8})$/),
                        a = parseInt(o[2], 16),
                        s = parseInt(o[1], 16) || 0,
                        i[14] = a,
                        i[15] = s,
                        t(l, i),
                        l
                    }
                    function i(e) {
                        var A, r, i, o, a, s, c = e.length,
                            l = [1732584193, -271733879, -1732584194, 271733878];
                        for (A = 64; A <= c; A += 64) t(l, n(e.subarray(A - 64, A)));
                        for (e = A - 64 < c ? e.subarray(A - 64) : new Uint8Array(0), r = e.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], A = 0; A < r; A += 1) i[A >> 2] |= e[A] << (A % 4 << 3);
                        if (i[A >> 2] |= 128 << (A % 4 << 3), A > 55) for (t(l, i), A = 0; A < 16; A += 1) i[A] = 0;
                        return o = 8 * c,
                        o = o.toString(16).match(/(.*?)(.{0,8})$/),
                        a = parseInt(o[2], 16),
                        s = parseInt(o[1], 16) || 0,
                        i[14] = a,
                        i[15] = s,
                        t(l, i),
                        l
                    }
                    function o(e) {
                        var t, A = "";
                        for (t = 0; t < 4; t += 1) A += h[e >> 8 * t + 4 & 15] + h[e >> 8 * t & 15];
                        return A
                    }
                    function a(e) {
                        var t;
                        for (t = 0; t < e.length; t += 1) e[t] = o(e[t]);
                        return e.join("")
                    }
                    function s(e) {
                        return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))),
                        e
                    }
                    function c(e, t) {
                        var A, n = e.length,
                            r = new ArrayBuffer(n),
                            i = new Uint8Array(r);
                        for (A = 0; A < n; A += 1) i[A] = e.charCodeAt(A);
                        return t ? i : r
                    }
                    function l(e) {
                        return String.fromCharCode.apply(null, new Uint8Array(e))
                    }
                    function u(e, t, A) {
                        var n = new Uint8Array(e.byteLength + t.byteLength);
                        return n.set(new Uint8Array(e)),
                        n.set(new Uint8Array(t), e.byteLength),
                        A ? n : n.buffer
                    }
                    function f(e) {
                        var t, A = [],
                            n = e.length;
                        for (t = 0; t < n - 1; t += 2) A.push(parseInt(e.substr(t, 2), 16));
                        return String.fromCharCode.apply(String, A)
                    }
                    function d() {
                        this.reset()
                    }
                    var h = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
                    return a(r("hello")),
                    "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice ||
                    function () {
                        function t(e, t) {
                            return e = 0 | e || 0,
                            e < 0 ? Math.max(e + t, 0) : Math.min(e, t)
                        }
                        ArrayBuffer.prototype.slice = function (A, n) {
                            var r, i, o, a, s = this.byteLength,
                                c = t(A, s),
                                l = s;
                            return n !== e && (l = t(n, s)),
                            c > l ? new ArrayBuffer(0) : (r = l - c, i = new ArrayBuffer(r), o = new Uint8Array(i), a = new Uint8Array(this, c, r), o.set(a), i)
                        }
                    }(),
                    d.prototype.append = function (e) {
                        return this.appendBinary(s(e)),
                        this
                    },
                    d.prototype.appendBinary = function (e) {
                        this._buff += e,
                        this._length += e.length;
                        var n, r = this._buff.length;
                        for (n = 64; n <= r; n += 64) t(this._hash, A(this._buff.substring(n - 64, n)));
                        return this._buff = this._buff.substring(n - 64),
                        this
                    },
                    d.prototype.end = function (e) {
                        var t, A, n = this._buff,
                            r = n.length,
                            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (t = 0; t < r; t += 1) i[t >> 2] |= n.charCodeAt(t) << (t % 4 << 3);
                        return this._finish(i, r),
                        A = a(this._hash),
                        e && (A = f(A)),
                        this.reset(),
                        A
                    },
                    d.prototype.reset = function () {
                        return this._buff = "",
                        this._length = 0,
                        this._hash = [1732584193, -271733879, -1732584194, 271733878],
                        this
                    },
                    d.prototype.getState = function () {
                        return {
                            buff: this._buff,
                            length: this._length,
                            hash: this._hash
                        }
                    },
                    d.prototype.setState = function (e) {
                        return this._buff = e.buff,
                        this._length = e.length,
                        this._hash = e.hash,
                        this
                    },
                    d.prototype.destroy = function () {
                        delete this._hash,
                        delete this._buff,
                        delete this._length
                    },
                    d.prototype._finish = function (e, A) {
                        var n, r, i, o = A;
                        if (e[o >> 2] |= 128 << (o % 4 << 3), o > 55) for (t(this._hash, e), o = 0; o < 16; o += 1) e[o] = 0;
                        n = 8 * this._length,
                        n = n.toString(16).match(/(.*?)(.{0,8})$/),
                        r = parseInt(n[2], 16),
                        i = parseInt(n[1], 16) || 0,
                        e[14] = r,
                        e[15] = i,
                        t(this._hash, e)
                    },
                    d.hash = function (e, t) {
                        return d.hashBinary(s(e), t)
                    },
                    d.hashBinary = function (e, t) {
                        var A = r(e),
                            n = a(A);
                        return t ? f(n) : n
                    },
                    d.ArrayBuffer = function () {
                        this.reset()
                    },
                    d.ArrayBuffer.prototype.append = function (e) {
                        var A, r = u(this._buff.buffer, e, !0),
                            i = r.length;
                        for (this._length += e.byteLength, A = 64; A <= i; A += 64) t(this._hash, n(r.subarray(A - 64, A)));
                        return this._buff = A - 64 < i ? new Uint8Array(r.buffer.slice(A - 64)) : new Uint8Array(0),
                        this
                    },
                    d.ArrayBuffer.prototype.end = function (e) {
                        var t, A, n = this._buff,
                            r = n.length,
                            i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (t = 0; t < r; t += 1) i[t >> 2] |= n[t] << (t % 4 << 3);
                        return this._finish(i, r),
                        A = a(this._hash),
                        e && (A = f(A)),
                        this.reset(),
                        A
                    },
                    d.ArrayBuffer.prototype.reset = function () {
                        return this._buff = new Uint8Array(0),
                        this._length = 0,
                        this._hash = [1732584193, -271733879, -1732584194, 271733878],
                        this
                    },
                    d.ArrayBuffer.prototype.getState = function () {
                        var e = d.prototype.getState.call(this);
                        return e.buff = l(e.buff),
                        e
                    },
                    d.ArrayBuffer.prototype.setState = function (e) {
                        return e.buff = c(e.buff, !0),
                        d.prototype.setState.call(this, e)
                    },
                    d.ArrayBuffer.prototype.destroy = d.prototype.destroy,
                    d.ArrayBuffer.prototype._finish = d.prototype._finish,
                    d.ArrayBuffer.hash = function (e, t) {
                        var A = i(new Uint8Array(e)),
                            n = a(A);
                        return t ? f(n) : n
                    },
                    d
                }()
            }()
        },


        function (e, t) {
            !
            function (e) {
                "use strict";

                function t(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }
                function A(e) {
                    return "string" != typeof e && (e = String(e)),
                    e
                }
                function n(e) {
                    var t = {
                        next: function () {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return B.iterable && (t[Symbol.iterator] = function () {
                        return t
                    }),
                    t
                }
                function r(e) {
                    this.map = {},
                    e instanceof r ? e.forEach(function (e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function (e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                        this.append(t, e[t])
                    }, this)
                }
                function i(e) {
                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }
                function o(e) {
                    return new Promise(function (t, A) {
                        e.onload = function () {
                            t(e.result)
                        },
                        e.onerror = function () {
                            A(e.error)
                        }
                    })
                }
                function a(e) {
                    var t = new FileReader,
                        A = o(t);
                    return t.readAsArrayBuffer(e),
                    A
                }
                function s(e) {
                    var t = new FileReader,
                        A = o(t);
                    return t.readAsText(e),
                    A
                }
                function c(e) {
                    for (var t = new Uint8Array(e), A = new Array(t.length), n = 0; n < t.length; n++) A[n] = String.fromCharCode(t[n]);
                    return A.join("")
                }
                function l(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)),
                    t.buffer
                }
                function u() {
                    return this.bodyUsed = !1,
                    this._initBody = function (e) {
                        if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e;
                        else if (B.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                        else if (B.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                        else if (B.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                        else if (B.arrayBuffer && B.blob && m(e)) this._bodyArrayBuffer = l(e.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!B.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !v(e)) throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = l(e)
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : B.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    },
                    B.blob && (this.blob = function () {
                        var e = i(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function () {
                        return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
                    }),
                    this.text = function () {
                        var e = i(this);
                        if (e) return e;
                        if (this._bodyBlob) return s(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    },
                    B.formData && (this.formData = function () {
                        return this.text().then(h)
                    }),
                    this.json = function () {
                        return this.text().then(JSON.parse)
                    },
                    this
                }
                function f(e) {
                    var t = e.toUpperCase();
                    return y.indexOf(t) > -1 ? t : e
                }
                function d(e, t) {
                    t = t || {};
                    var A = t.body;
                    if (e instanceof d) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url,
                        this.credentials = e.credentials,
                        t.headers || (this.headers = new r(e.headers)),
                        this.method = e.method,
                        this.mode = e.mode,
                        A || null == e._bodyInit || (A = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new r(t.headers)), this.method = f(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && A) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(A)
                }
                function h(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function (e) {
                        if (e) {
                            var A = e.split("="),
                                n = A.shift().replace(/\+/g, " "),
                                r = A.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(n), decodeURIComponent(r))
                        }
                    }),
                    t
                }
                function p(e) {
                    var t = new r;
                    return e.split(/\r?\n/).forEach(function (e) {
                        var A = e.split(":"),
                            n = A.shift().trim();
                        if (n) {
                                var r = A.join(":").trim();
                                t.append(n, r)
                            }
                    }),
                    t
                }
                function g(e, t) {
                    t || (t = {}),
                    this.type = "default",
                    this.status = "status" in t ? t.status : 200,
                    this.ok = this.status >= 200 && this.status < 300,
                    this.statusText = "statusText" in t ? t.statusText : "OK",
                    this.headers = new r(t.headers),
                    this.url = t.url || "",
                    this._initBody(e)
                }
                if (!e.fetch) {
                    var B = {
                        searchParams: "URLSearchParams" in e,
                        iterable: "Symbol" in e && "iterator" in Symbol,
                        blob: "FileReader" in e && "Blob" in e &&
                        function () {
                            try {
                                return new Blob,
                                !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in e,
                        arrayBuffer: "ArrayBuffer" in e
                    };
                    if (B.arrayBuffer) var w = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        m = function (e) {
                            return e && DataView.prototype.isPrototypeOf(e)
                        },
                        v = ArrayBuffer.isView ||
                    function (e) {
                            return e && w.indexOf(Object.prototype.toString.call(e)) > -1
                        };
                    r.prototype.append = function (e, n) {
                            e = t(e),
                            n = A(n);
                            var r = this.map[e];
                            this.map[e] = r ? r + "," + n : n
                        },
                    r.prototype.delete = function (e) {
                            delete this.map[t(e)]
                        },
                    r.prototype.get = function (e) {
                            return e = t(e),
                            this.has(e) ? this.map[e] : null
                        },
                    r.prototype.has = function (e) {
                            return this.map.hasOwnProperty(t(e))
                        },
                    r.prototype.set = function (e, n) {
                            this.map[t(e)] = A(n)
                        },
                    r.prototype.forEach = function (e, t) {
                            for (var A in this.map) this.map.hasOwnProperty(A) && e.call(t, this.map[A], A, this)
                        },
                    r.prototype.keys = function () {
                            var e = [];
                            return this.forEach(function (t, A) {
                                e.push(A)
                            }),
                            n(e)
                        },
                    r.prototype.values = function () {
                            var e = [];
                            return this.forEach(function (t) {
                                e.push(t)
                            }),
                            n(e)
                        },
                    r.prototype.entries = function () {
                            var e = [];
                            return this.forEach(function (t, A) {
                                e.push([A, t])
                            }),
                            n(e)
                        },
                    B.iterable && (r.prototype[Symbol.iterator] = r.prototype.entries);
                    var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    d.prototype.clone = function () {
                            return new d(this, {
                                body: this._bodyInit
                            })
                        },
                    u.call(d.prototype),
                    u.call(g.prototype),
                    g.prototype.clone = function () {
                            return new g(this._bodyInit, {
                                status: this.status,
                                statusText: this.statusText,
                                headers: new r(this.headers),
                                url: this.url
                            })
                        },
                    g.error = function () {
                            var e = new g(null, {
                                status: 0,
                                statusText: ""
                            });
                            return e.type = "error",
                            e
                        };
                    var E = [301, 302, 303, 307, 308];
                    g.redirect = function (e, t) {
                            if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
                            return new g(null, {
                                status: t,
                                headers: {
                                    location: e
                                }
                            })
                        },
                    e.Headers = r,
                    e.Request = d,
                    e.Response = g,
                    e.fetch = function (e, t) {
                            return new Promise(function (A, n) {
                                var r = new d(e, t),
                                    i = new XMLHttpRequest;
                                i.onload = function () {
                                        var e = {
                                            status: i.status,
                                            statusText: i.statusText,
                                            headers: p(i.getAllResponseHeaders() || "")
                                        };
                                        e.url = "responseURL" in i ? i.responseURL : e.headers.get("X-Request-URL");
                                        var t = "response" in i ? i.response : i.responseText;
                                        A(new g(t, e))
                                    },
                                i.onerror = function () {
                                        n(new TypeError("Network request failed"))
                                    },
                                i.ontimeout = function () {
                                        n(new TypeError("Network request failed"))
                                    },
                                i.open(r.method, r.url, !0),
                                "include" === r.credentials && (i.withCredentials = !0),
                                "responseType" in i && B.blob && (i.responseType = "blob"),
                                r.headers.forEach(function (e, t) {
                                        i.setRequestHeader(t, e)
                                    }),
                                i.send(void 0 === r._bodyInit ? null : r._bodyInit)
                            })
                        },
                    e.fetch.polyfill = !0
                }
            }("undefined" != typeof self ? self : this)
        }])
    })
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        var A = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (A >> 16) << 16 | 65535 & A
    }
    function r(e, t) {
        return e << t | e >>> 32 - t
    }
    function i(e, t, A, i, o, a) {
        return n(r(n(n(t, e), n(i, a)), o), A)
    }
    function o(e, t, A, n, r, o, a) {
        return i(t & A | ~t & n, e, t, r, o, a)
    }
    function a(e, t, A, n, r, o, a) {
        return i(t & n | A & ~n, e, t, r, o, a)
    }
    function s(e, t, A, n, r, o, a) {
        return i(t ^ A ^ n, e, t, r, o, a)
    }
    function c(e, t, A, n, r, o, a) {
        return i(A ^ (t | ~n), e, t, r, o, a)
    }
    function l(e, t) {
        var A = e,
            r = t;
        A[r >> 5] |= 128 << r % 32,
        A[14 + (r + 64 >>> 9 << 4)] = r;
        var i = void 0,
            l = void 0,
            u = void 0,
            f = void 0,
            d = void 0,
            h = 1732584193,
            p = -271733879,
            g = -1732584194,
            B = 271733878;
        for (i = 0; i < A.length; i += 16) l = h,
        u = p,
        f = g,
        d = B,
        h = o(h, p, g, B, A[i], 7, -680876936),
        B = o(B, h, p, g, A[i + 1], 12, -389564586),
        g = o(g, B, h, p, A[i + 2], 17, 606105819),
        p = o(p, g, B, h, A[i + 3], 22, -1044525330),
        h = o(h, p, g, B, A[i + 4], 7, -176418897),
        B = o(B, h, p, g, A[i + 5], 12, 1200080426),
        g = o(g, B, h, p, A[i + 6], 17, -1473231341),
        p = o(p, g, B, h, A[i + 7], 22, -45705983),
        h = o(h, p, g, B, A[i + 8], 7, 1770035416),
        B = o(B, h, p, g, A[i + 9], 12, -1958414417),
        g = o(g, B, h, p, A[i + 10], 17, -42063),
        p = o(p, g, B, h, A[i + 11], 22, -1990404162),
        h = o(h, p, g, B, A[i + 12], 7, 1804603682),
        B = o(B, h, p, g, A[i + 13], 12, -40341101),
        g = o(g, B, h, p, A[i + 14], 17, -1502002290),
        p = o(p, g, B, h, A[i + 15], 22, 1236535329),
        h = a(h, p, g, B, A[i + 1], 5, -165796510),
        B = a(B, h, p, g, A[i + 6], 9, -1069501632),
        g = a(g, B, h, p, A[i + 11], 14, 643717713),
        p = a(p, g, B, h, A[i], 20, -373897302),
        h = a(h, p, g, B, A[i + 5], 5, -701558691),
        B = a(B, h, p, g, A[i + 10], 9, 38016083),
        g = a(g, B, h, p, A[i + 15], 14, -660478335),
        p = a(p, g, B, h, A[i + 4], 20, -405537848),
        h = a(h, p, g, B, A[i + 9], 5, 568446438),
        B = a(B, h, p, g, A[i + 14], 9, -1019803690),
        g = a(g, B, h, p, A[i + 3], 14, -187363961),
        p = a(p, g, B, h, A[i + 8], 20, 1163531501),
        h = a(h, p, g, B, A[i + 13], 5, -1444681467),
        B = a(B, h, p, g, A[i + 2], 9, -51403784),
        g = a(g, B, h, p, A[i + 7], 14, 1735328473),
        p = a(p, g, B, h, A[i + 12], 20, -1926607734),
        h = s(h, p, g, B, A[i + 5], 4, -378558),
        B = s(B, h, p, g, A[i + 8], 11, -2022574463),
        g = s(g, B, h, p, A[i + 11], 16, 1839030562),
        p = s(p, g, B, h, A[i + 14], 23, -35309556),
        h = s(h, p, g, B, A[i + 1], 4, -1530992060),
        B = s(B, h, p, g, A[i + 4], 11, 1272893353),
        g = s(g, B, h, p, A[i + 7], 16, -155497632),
        p = s(p, g, B, h, A[i + 10], 23, -1094730640),
        h = s(h, p, g, B, A[i + 13], 4, 681279174),
        B = s(B, h, p, g, A[i], 11, -358537222),
        g = s(g, B, h, p, A[i + 3], 16, -722521979),
        p = s(p, g, B, h, A[i + 6], 23, 76029189),
        h = s(h, p, g, B, A[i + 9], 4, -640364487),
        B = s(B, h, p, g, A[i + 12], 11, -421815835),
        g = s(g, B, h, p, A[i + 15], 16, 530742520),
        p = s(p, g, B, h, A[i + 2], 23, -995338651),
        h = c(h, p, g, B, A[i], 6, -198630844),
        B = c(B, h, p, g, A[i + 7], 10, 1126891415),
        g = c(g, B, h, p, A[i + 14], 15, -1416354905),
        p = c(p, g, B, h, A[i + 5], 21, -57434055),
        h = c(h, p, g, B, A[i + 12], 6, 1700485571),
        B = c(B, h, p, g, A[i + 3], 10, -1894986606),
        g = c(g, B, h, p, A[i + 10], 15, -1051523),
        p = c(p, g, B, h, A[i + 1], 21, -2054922799),
        h = c(h, p, g, B, A[i + 8], 6, 1873313359),
        B = c(B, h, p, g, A[i + 15], 10, -30611744),
        g = c(g, B, h, p, A[i + 6], 15, -1560198380),
        p = c(p, g, B, h, A[i + 13], 21, 1309151649),
        h = c(h, p, g, B, A[i + 4], 6, -145523070),
        B = c(B, h, p, g, A[i + 11], 10, -1120210379),
        g = c(g, B, h, p, A[i + 2], 15, 718787259),
        p = c(p, g, B, h, A[i + 9], 21, -343485551),
        h = n(h, l),
        p = n(p, u),
        g = n(g, f),
        B = n(B, d);
        return [h, p, g, B]
    }
    function u(e) {
        var t = void 0,
            A = "",
            n = 32 * e.length;
        for (t = 0; t < n; t += 8) A += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return A
    }
    function f(e) {
        var t = void 0,
            A = [];
        for (A[(e.length >> 2) - 1] = void 0, t = 0; t < A.length; t += 1) A[t] = 0;
        var n = 8 * e.length;
        for (t = 0; t < n; t += 8) A[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return A
    }
    function d(e) {
        return u(l(f(e), 8 * e.length))
    }
    function h(e, t) {
        var A = void 0,
            n = f(e),
            r = [],
            i = [];
        for (r[15] = void 0, i[15] = void 0, n.length > 16 && (n = l(n, 8 * e.length)), A = 0; A < 16; A += 1) r[A] = 909522486 ^ n[A],
        i[A] = 1549556828 ^ n[A];
        var o = l(r.concat(f(t)), 512 + 8 * t.length);
        return u(l(i.concat(o), 640))
    }
    function p(e) {
        var t = "0123456789abcdef",
            A = "",
            n = void 0,
            r = void 0;
        for (r = 0; r < e.length; r += 1) n = e.charCodeAt(r),
        A += t.charAt(n >>> 4 & 15) + t.charAt(15 & n);
        return A
    }
    function g(e) {
        return unescape(encodeURIComponent(e))
    }
    function B(e) {
        return d(g(e))
    }
    function w(e) {
        return p(B(e))
    }
    function m(e, t) {
        return h(g(e), g(t))
    }
    function v(e, t) {
        return p(m(e, t))
    }
    function y(e, t, A) {
        return t ? A ? m(t, e) : v(t, e) : A ? B(e) : w(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = y,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = document.createElement("div");
        document.body.appendChild(t);
        var A = s({}, e, {
                container: t
            });
        h.
    default.render(u.
        default.createElement(B, A), t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign ||
    function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var A = arguments[t];
            for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n])
        }
        return e
    },
        c = function () {
            function e(e, t) {
                for (var A = 0; A < t.length; A++) {
                    var n = t[A];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, A, n) {
                return A && e(t.prototype, A),
                n && e(t, n),
                t
            }
        }();
    t.
default = a,
    A(564);
    var l = A(9),
        u = n(l),
        f = A(249),
        d = A(38),
        h = n(d),
        p = A(54),
        g = n(p),
        B = function (e) {
            function t() {
                r(this, t);
                var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.state = {
                    show: !0
                },
                e.close = e.close.bind(e),
                e.dispose = e.dispose.bind(e),
                e
            }
            return o(t, e),
            c(t, [{
                key: "close",
                value: function () {
                    this.setState({
                        show: !1
                    }),
                    setTimeout(this.dispose, 300)
                }
            },
            {
                key: "dispose",
                value: function () {
                    var e = this.props.container;
                    h.
                default.unmountComponentAtNode(e),
                    e.parentNode.removeChild(e)
                }
            },
            {
                key: "render",
                value: function () {
                    var e = this.state.show;
                    return u.
                default.createElement(f.CSSTransition, { in : e,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, u.
                default.createElement("div", {
                        className: "m-sharemask",
                        onClick: this.close
                    }, u.
                default.createElement("div", {
                        className: "pic f-area f-area-top"
                    }), u.
                default.createElement("p", {
                        className: "tip"
                    }, "点击右上角", u.
                default.createElement("br", null), "分享给更多小伙伴")))
                }
            }]),
            t
        }(l.Component);
    B.propTypes = {
            container: g.
        default.object.isRequired
        },
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var a = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }();
    A(260),
    A(254),
    A(255),
    A(256),
    A(257),
    A(258),
    A(259);
    var s = A(9),
        c = n(s),
        l = A(38),
        u = A(103),
        f = n(u),
        d = (A(102), A(16)),
        h = n(d),
        p = A(252),
        g = n(p),
        B = A(251),
        w = n(B),
        m = A(30),
        v = n(m),
        y = A(153),
        E = function (e) {
            function t() {
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            a(t, [{
                key: "componentDidMount",
                value: function () {
                    f.
                default.init({
                        name: y.ACTIVITY_NAME,
                        title: "嗨！点击生成你的使用说明书",
                        subTitle: "这里有你的正确使用方法",
                        link: v.
                    default.getShareLink(),
                        picUrl:
                        "http://p3.music.126.net/DoxXZJ3H4pSJQaODnxDT3Q==/109951163219253416.jpg"
                    }),
                    v.
                default.biLogPage("homepage")
                }
            },
            {
                key: "render",
                value: function () {
                    return h.
                default.isMobile() ? c.
                default.createElement(w.
                default, null):
                    c.
                default.createElement(g.
                default, null)
                }
            }]),
            t
        }(s.Component);
        (0, l.render)(c.
    default.createElement(E, null), document.getElementById("j-root"))
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        s = A(9),
        c = n(s),
        l = A(16),
        u = (n(l), A(30));
    n(u);
    A(204);
    var f = function (e) {
            function t(e) {
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
            }
            return o(t, e),
            a(t, [{
                key: "componentDidMount",
                value: function () {}
            },
            {
                key: "init",
                value: function () {}
            },
            {
                key: "destroy",
                value: function () {}
            },
            {
                key: "render",
                value: function () {
                    var e = this.props.color;
                    return c.
                default.createElement("div", {
                        className: "bg gender " + e + "-bg"
                    }, c.
                default.createElement("div", {
                        className: "content"
                    }, c.
                default.createElement("div", {
                        className: "orn f-bd"
                    }, c.
                default.createElement("div", {
                        className: "lines"
                    }, c.
                default.createElement("img", {
                        src: A(96)
                    })), c.
                default.createElement("div", {
                        className: "trapezoid top " + e + "-bg"
                    }), c.
                default.createElement("div", {
                        className: "trapezoid bottom " + e + "-bg"
                    }), c.
                default.createElement("div", {
                        className: "wave " + e + " top"
                    }), c.
                default.createElement("div", {
                        className: "wave " + e + " right"
                    }), c.
                default.createElement("div", {
                        className: "num"
                    }, c.
                default.createElement("i", {
                        className: "n-1"
                    }), c.
                default.createElement("i", {
                        className: "n-2"
                    }), c.
                default.createElement("i", {
                        className: "n-3"
                    }), c.
                default.createElement("i", {
                        className: "n-4"
                    }), c.
                default.createElement("i", {
                        className: "n-5"
                    }), c.
                default.createElement("i", {
                        className: "n-6"
                    })))))
                }
            }]),
            t
        }(s.Component);
    t.
default = f,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        s = A(9),
        c = n(s),
        l = A(16),
        u = (n(l), A(30));
    n(u);
    A(567);
    var f = A(67),
        d = function (e) {
            function t(e) {
                r(this, t);
                var A = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return A.state = {
                    iptFocus: !1,
                    userName: ""
                },
                A.onNextCard = A.onNextCard.bind(A),
                A
            }
            return o(t, e),
            a(t, [{
                key: "componentDidMount",
                value: function () {}
            },
            {
                key: "init",
                value: function () {}
            },
            {
                key: "destroy",
                value: function () {}
            },
            {
                key: "onNextCard",
                value: function (e) {
                    this.props.handleNextCard(e, null, !0)
                }
            },
            {
                key: "render",
                value: function () {
                    var e = this.props.color,
                        t = f.colorMap[e];
                    return c.
                default.createElement("div", {
                            className: "bg gender question " + e + "-bg"
                        }, c.
                    default.createElement("div", {
                            className: "content"
                        }, c.
                    default.createElement("div", {
                            className: "title"
                        }, c.
                    default.createElement("img", {
                            src: A(207)
                        })), c.
                    default.createElement("div", {
                            className: "trapezoid top " + e + "-bg"
                        }), c.
                    default.createElement("div", {
                            className: "trapezoid bottom " + e + "-bg"
                        }), c.
                    default.createElement("div", {
                            className: "wave " + e + " top"
                        }, c.
                    default.createElement("svg", {
                            width: "196px",
                            height: "25px",
                            viewBox: "0 0 196 25",
                            version: "1.1"
                        }, c.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, c.
                    default.createElement("g", {
                            fill: t,
                            fillRule: "nonzero"
                        }, c.
                    default.createElement("g", null, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(19.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.3",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(38.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.35",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(57.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.4",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(76.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.45",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(95.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.5",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(114.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.55",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(133.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.6",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(152.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.64",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(171.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.69",
                            cy: "12.25",
                            r: "12.25"
                        })))))), c.
                    default.createElement("div", {
                            className: "wave " + e + " right"
                        }, c.
                    default.createElement("svg", {
                            width: "25px",
                            height: "196px",
                            viewBox: "0 0 25 196",
                            version: "1.1"
                        }, c.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, c.
                    default.createElement("g", {
                            id: "shu",
                            fill: t,
                            fillRule: "nonzero"
                        }, c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 171.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.69",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 152.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.64",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 133.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.6",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 114.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.55",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 95.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.5",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 76.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.45",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 57.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.4",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 38.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.35",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 19.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.3",
                            r: "12.25"
                        })), c.
                    default.createElement("g", null, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.25",
                            r: "12.25"
                        })))))), c.
                    default.createElement("div", {
                            className: "g by",
                            onClick: this.onNextCard.bind(this, 1)
                        }, c.
                    default.createElement("img", {
                            className: "boy",
                            src: A(206)
                        }), c.
                    default.createElement("div", {
                            className: "black m"
                        })), c.
                    default.createElement("div", {
                            className: "g gl",
                            onClick: this.onNextCard.bind(this, 0)
                        }, c.
                    default.createElement("img", {
                            className: "girl",
                            src: A(208)
                        }), c.
                    default.createElement("div", {
                            className: "black fm"
                        })), c.
                    default.createElement("div", {
                            className: "orn g-orn f-bd"
                        }, c.
                    default.createElement("div", {
                            className: "lines"
                        }, c.
                    default.createElement("img", {
                            src: A(96)
                        })), c.
                    default.createElement("div", {
                            className: "num"
                        }, c.
                    default.createElement("i", {
                            className: "n-1"
                        }), c.
                    default.createElement("i", {
                            className: "n-2"
                        }), c.
                    default.createElement("i", {
                            className: "n-3"
                        }), c.
                    default.createElement("i", {
                            className: "n-4"
                        }), c.
                    default.createElement("i", {
                            className: "n-5"
                        }), c.
                    default.createElement("i", {
                            className: "n-6"
                        })))))
                }
            }]),
            t
        }(s.Component);
    t.
default = d,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        s = A(9),
        c = n(s),
        l = A(16),
        u = (n(l), A(30)),
        f = (n(u), A(288)),
        d = n(f);
    A(204);
    var h = A(274);
    A(570);
    var p = A(67),
        g = /^[\u4e00-\u9fa5]+$/i,
        B = function (e) {
            function t(e) {
                r(this, t);
                var A = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return A.state = {
                    iptFocus: !1,
                    userName: ""
                },
                A.onIptChange = A.onIptChange.bind(A),
                A.onIptFocus = A.onIptFocus.bind(A),
                A.onIptBlur = A.onIptBlur.bind(A),
                A.onNextCard = A.onNextCard.bind(A),
                A
            }
            return o(t, e),
            a(t, [{
                key: "componentDidMount",
                value: function () {}
            },
            {
                key: "init",
                value: function () {}
            },
            {
                key: "destroy",
                value: function () {}
            },
            {
                key: "onIptChange",
                value: function (e) {
                    this.setState({
                        userName: e.target.value
                    })
                }
            },
            {
                key: "onIptFocus",
                value: function () {
                    var e = this;
                    setTimeout(function () {
                        e.setState({
                            iptFocus: !0
                        })
                    }, 1e3)
                }
            },
            {
                key: "onIptBlur",
                value: function () {
                    this.setState({
                        iptFocus: !1
                    })
                }
            },
            {
                key: "onNextCard",
                value: function () {
                    var e = this.props,
                        t = e.handleNameChange,
                        A = e.handleNextCard,
                        n = this.state.userName;
                    if (!n) return void(0, h.ShowToast)({
                            key: "empty",
                            type: "center",
                            isOk: !1,
                            text: "请先输入名字",
                            autoClose: !0
                        });
                    for (var r = 0, i = 0; i < n.length; i++) g.test(n[i]) ? r += 2 : r++;
                    if (r > 16) return void(0, h.ShowToast)({
                            key: "empty",
                            type: "center",
                            isOk: !1,
                            text: "请不要超过8个字哦",
                            autoClose: !0
                        });
                    var o = (0, d.
                    default)("/api/activity/antispam/keyword/nickname/check", {
                            method: "post",
                            async: !1,
                            data: {
                                content: n
                            }
                        });
                    try {
                            o = JSON.parse(o.request.responseText)
                        } catch (e) {
                            console.log(e)
                        }
                    o && o.data ? (t(n), A()) : o && 0 == o.data || o && 407 == o.code ? (0, h.ShowToast)({
                            key: "empty",
                            type: "center",
                            isOk: !1,
                            text: "换个昵称试试?",
                            autoClose: !0
                        }) : (0, h.ShowToast)({
                            key: "empty",
                            type: "center",
                            isOk: !1,
                            text: "操作失败，请重试",
                            autoClose: !0
                        })
                }
            },
            {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = (e.q, e.color),
                        n = p.colorMap[t],
                        r = this.state,
                        i = r.userName,
                        o = r.iptFocus,
                        a = i ? "" : c.
                default.createElement("div", {
                            className: "placeholder"
                        }, "请输入你的名字"),
                        s = "ipt " + (o ? "focus" : "");
                    return c.
                default.createElement("div", {
                            className: "bg name-input " + t + "-bg"
                        }, c.
                    default.createElement("div", {
                            className: "content"
                        }, c.
                    default.createElement("div", {
                            className: "title"
                        }, c.
                    default.createElement("img", {
                            src: A(701)
                        })), c.
                    default.createElement("div", {
                            className: "new-logo"
                        }, c.
                    default.createElement("img", {
                            src: A(209)
                        })), c.
                    default.createElement("div", {
                            className: "click",
                            onClick: this.onNextCard
                        }, c.
                    default.createElement("img", {
                            src: A(698)
                        }), c.
                    default.createElement("img", {
                            className: "logo",
                            src: A(700)
                        })), c.
                    default.createElement("div", {
                            className: "left-lines"
                        }, c.
                    default.createElement("img", {
                            src: A(699)
                        })), c.
                    default.createElement("div", {
                            className: s
                        }, c.
                    default.createElement("input", {
                            value: this.state.userName,
                            onFocus: this.onIptFocus,
                            onBlur: this.onIptBlur,
                            onChange: this.onIptChange,
                            type: "text"
                        }), a, c.
                    default.createElement("div", {
                            className: "name-line l-1"
                        }), c.
                    default.createElement("div", {
                            className: "name-line l-2"
                        }), c.
                    default.createElement("div", {
                            className: "name-line l-3"
                        })), c.
                    default.createElement("div", {
                            className: "trapezoid top " + t + "-bg"
                        }), c.
                    default.createElement("div", {
                            className: "trapezoid bottom " + t + "-bg"
                        }), c.
                    default.createElement("div", {
                            className: "wave " + t + " top"
                        }, c.
                    default.createElement("svg", {
                            width: "196px",
                            height: "25px",
                            viewBox: "0 0 196 25",
                            version: "1.1"
                        }, c.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, c.
                    default.createElement("g", {
                            fill: n,
                            fillRule: "nonzero"
                        }, c.
                    default.createElement("g", null, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(19.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.3",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(38.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.35",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(57.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.4",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(76.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.45",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(95.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.5",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(114.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.55",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(133.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.6",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(152.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.64",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(171.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.69",
                            cy: "12.25",
                            r: "12.25"
                        })))))), c.
                    default.createElement("div", {
                            className: "wave " + t + " right"
                        }, c.
                    default.createElement("svg", {
                            width: "25px",
                            height: "196px",
                            viewBox: "0 0 25 196",
                            version: "1.1"
                        }, c.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, c.
                    default.createElement("g", {
                            id: "shu",
                            fill: n,
                            fillRule: "nonzero"
                        }, c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 171.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.69",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 152.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.64",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 133.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.6",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 114.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.55",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 95.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.5",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 76.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.45",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 57.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.4",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 38.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.35",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 19.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.3",
                            r: "12.25"
                        })), c.
                    default.createElement("g", null, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.25",
                            r: "12.25"
                        }))))))))
                }
            }]),
            t
        }(s.Component);
    t.
default = B,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }();
    A(568);
    var s = A(9),
        c = n(s),
        l = A(16),
        u = (n(l), A(102), A(30)),
        f = (n(u), A(738)),
        d = (n(f), A(753)),
        h = n(d),
        p = A(67),
        g = function (e) {
            function t(e) {
                r(this, t);
                var A = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return A.state = {
                    choose: ""
                },
                A.add = !1,
                A.lockTime = 2e3,
                A.lockTime2 = 500,
                A.ampMax = 20,
                A.ampInStep = 1,
                A.v = .4,
                A.lock = !1,
                A.nextQuestion = A.nextQuestion.bind(A),
                A.updateWaves = A.updateWaves.bind(A),
                A
            }
            return o(t, e),
            a(t, [{
                key: "componentDidMount",
                value: function () {
                    this.waves = new h.
                default ({
                        el: this.canvas,
                        running: !1,
                        speed: 4,
                        width: 1200,
                        height: 100,
                        wavesWidth: "8%",
                        ease: "SineInOut",
                        waves: [{
                            timeModifier: 15,
                            lineWidth: .3,
                            amplitude: 0,
                            wavelength: 3,
                            segmentLength: 2,
                            strokeStyle: "rgb(0,0,0)"
                        }]
                    });
                    this.stopWaves = !0,
                    this.updateWaves()
                }
            },
            {
                key: "componentDidUpdate",
                value: function () {
                    "c" == this.props.pos ? (this.stopWaves && (this.stopWaves = !1, this.updateWaves()), this.layer.addEventListener("animationend", this.props.handleAnimationEnd)) : (this.layer.removeEventListener("animationend", this.props.handleAnimationEnd), this.stopWaves = !0)
                }
            },
            {
                key: "updateWaves",
                value: function () {
                    var e = this.waves,
                        t = this.lock,
                        A = this.add,
                        n = this.lockTime,
                        r = this.lockTime2,
                        i = this.ampMax,
                        o = (this.ampInStep, this.v),
                        a = this,
                        s = e.waves[0].amplitude;
                    t || (A && Math.abs(s) > i ? this.add = !1 : Math.abs(s) < .5 && (this.add = !0), Math.abs(s) > i ? (a.lock = !0, setTimeout(function () {
                            a.lock = !1
                        }, n)) : Math.abs(s) < .5 && (a.lock = !0, setTimeout(function () {
                            a.lock = !1
                        }, r)), this.waves.waves[0].amplitude = A ? s + o : s - o),
                    e.update(),
                    this.stopWaves || window.requestAnimationFrame(this.updateWaves)
                }
            },
            {
                key: "init",
                value: function () {}
            },
            {
                key: "destroy",
                value: function () {}
            },
            {
                key: "nextQuestion",
                value: function (e) {
                    var t = this;
                    this.setState({
                        choose: e.a
                    }),
                    setTimeout(function () {
                        t.setState({
                            choose: ""
                        }),
                        t.props.handleNextCard(void 0, e)
                    }, 100)
                }
            },
            {
                key: "render",
                value: function () {
                    var e = this,
                        t = this.props,
                        n = t.q,
                        r = t.color,
                        i = t.qIdx,
                        o = t.ctimu,
                        a = this.state.choose,
                        s = p.colorMap[r];
                    return c.
                default.createElement("div", {
                            className: "bg question " + r + "-bg",
                            ref: function (t) {
                                e.layer = t
                            }
                        }, c.
                    default.createElement("div", {
                            className: "content"
                        }, c.
                    default.createElement("div", {
                            className: "timu"
                        }, c.
                    default.createElement("img", {
                            src: A(262)("./timu-" + o + ".png")
                        })), c.
                    default.createElement("div", {
                            className: "trapezoid top " + r + "-bg"
                        }), c.
                    default.createElement("div", {
                            className: "trapezoid bottom " + r + "-bg"
                        }), c.
                    default.createElement("div", {
                            className: "wave " + r + " top"
                        }, c.
                    default.createElement("svg", {
                            width: "196px",
                            height: "25px",
                            viewBox: "0 0 196 25",
                            version: "1.1"
                        }, c.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, c.
                    default.createElement("g", {
                            fill: s,
                            fillRule: "nonzero"
                        }, c.
                    default.createElement("g", null, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(19.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.3",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(38.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.35",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(57.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.4",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(76.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.45",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(95.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.5",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(114.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.55",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(133.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.6",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(152.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.64",
                            cy: "12.25",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(171.000000, 0.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.69",
                            cy: "12.25",
                            r: "12.25"
                        })))))), c.
                    default.createElement("div", {
                            className: "wave " + r + " right"
                        }, c.
                    default.createElement("svg", {
                            width: "25px",
                            height: "196px",
                            viewBox: "0 0 25 196",
                            version: "1.1"
                        }, c.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, c.
                    default.createElement("g", {
                            id: "shu",
                            fill: s,
                            fillRule: "nonzero"
                        }, c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 171.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.69",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 152.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.64",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 133.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.6",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 114.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.55",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 95.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.5",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 76.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.45",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 57.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.4",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 38.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.35",
                            r: "12.25"
                        })), c.
                    default.createElement("g", {
                            transform: "translate(0.000000, 19.000000)"
                        }, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.3",
                            r: "12.25"
                        })), c.
                    default.createElement("g", null, c.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.25",
                            r: "12.25"
                        })))))), n ? c.
                    default.createElement("div", {
                            className: "q-c q-c-" + i
                        }, c.
                    default.createElement("div", {
                            className: "answer _" + n + " A" + ("A" === a ? " w" : ""),
                            onClick: this.nextQuestion.bind(this, {
                                a: "A",
                                q: n
                            })
                        }), c.
                    default.createElement("div", {
                            className: "answer _" + n + " B" + ("B" === a ? " w" : ""),
                            onClick: this.nextQuestion.bind(this, {
                                a: "B",
                                q: n
                            })
                        }), c.
                    default.createElement("div", {
                            className: "answer _" + n + " C" + ("C" === a ? " w" : ""),
                            onClick: this.nextQuestion.bind(this, {
                                a: "C",
                                q: n
                            })
                        })):
                        null, c.
                    default.createElement("div", {
                            className: "orn f-bd"
                        }, c.
                    default.createElement("div", {
                            ref: function (t) {
                                e.cc = t
                            },
                            className: "curve-container"
                        }, c.
                    default.createElement("canvas", {
                            ref: function (t) {
                                e.canvas = t
                            },
                            className: "curve"
                        })), c.
                    default.createElement("div", {
                            className: "lines"
                        }, c.
                    default.createElement("img", {
                            src: A(96)
                        })), c.
                    default.createElement("div", {
                            className: "num"
                        }, c.
                    default.createElement("i", {
                            className: "n-1 _" + (i - 1)
                        }), c.
                    default.createElement("i", {
                            className: "n-2 _" + (i - 2)
                        }), c.
                    default.createElement("i", {
                            className: "n-3 _" + (i - 3)
                        }), c.
                    default.createElement("i", {
                            className: "n-4 _" + (i - 4)
                        }), c.
                    default.createElement("i", {
                            className: "n-5 _" + (i - 5)
                        }), c.
                    default.createElement("i", {
                            className: "n-6 _" + (i - 6)
                        })))))
                }
            }]),
            t
        }(s.Component);
    t.
default = g,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function a(e) {
        return e += "",
        e.length < 2 ? "0" + e : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        c = A(9),
        l = n(c),
        u = A(16),
        f = n(u),
        d = A(156),
        h = n(d),
        p = A(157),
        g = n(p),
        B = A(277),
        w = A(30),
        m = n(w);
    A(569);
    var v = A(286),
        y = n(v),
        E = A(724),
        Q = n(E),
        C = A(562),
        U = n(C),
        b = A(742),
        F = n(b),
        _ = (A(67), A(287)),
        H = n(_),
        x = A(103),
        N = n(x);
    A(210),
    A(214),
    A(215),
    A(216),
    A(217),
    A(218),
    A(219),
    A(220),
    A(221),
    A(211),
    A(212),
    A(213);
    var T = function (e) {
            function t(e) {
                r(this, t);
                var A = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return A.state = {
                    ing: !0,
                    ss: []
                },
                A.retColor = null,
                A.chooseSpec = A.chooseSpec.bind(A),
                A.toImg = A.toImg.bind(A),
                A.handleTransitionEnd = A.handleTransitionEnd.bind(A),
                A.doAgain = A.doAgain.bind(A),
                A.savePicInapp = A.savePicInapp.bind(A),
                A.uploadImg = A.uploadImg.bind(A),
                A
            }
            return o(t, e),
            s(t, [{
                key: "savePicInapp",
                value: function () {
                    if (this.specUrl) {
                        var e = m.
                    default.getShareLink();
                        h.
                    default.orpheus("orpheus://sharepic?picUrl=" + encodeURIComponent("http:" + this.specUrl) + "&shareUrl=" + encodeURIComponent(e) + "&wbDesc=" + encodeURIComponent("嗨！点击生成你的使用说明书 " + e) + "&qqDesc=" + encodeURIComponent("嗨！点击生成你的使用说明书 " + e))
                    }
                }
            },
            {
                key: "doAgain",
                value: function () {
                    h.
                default.wakeup({
                        deepLink: "orpheus://activity?url=" + decodeURIComponent(m.
                    default.getShareLink()),
                        storeLink: h.
                    default.getAppDownUrl(),
                        guideCallback:
                        g.
                    default
                    })
                }
            },
            {
                key: "componentDidMount",
                value: function () {
                    var e = this;
                    setTimeout(function () {
                        e.setState({
                            ing: !1
                        })
                    }, 2500);
                    this.qrcode = new F.
                default (document.querySelector(".qrcode"), {
                        text: m.
                    default.getShareLink(),
                        width:
                        90,
                        height: 90,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: F.
                    default.CorrectLevel.M
                    });
                    this.chooseSpec(),
                    window.localStorage && window.localStorage.setItem("playedSpec", !0),
                    this.layer.addEventListener("transitionend", this.handleTransitionEnd)
                }
            },
            {
                key: "handleTransitionEnd",
                value: function () {
                    this.removeLastQ(),
                    this.removeT3d(),
                    this.toImg()
                }
            },
            {
                key: "removeLastQ",
                value: function () {
                    var e = document.querySelector(".parall-layer.last-c");
                    e && e.parentElement && e.parentElement.removeChild(e)
                }
            },
            {
                key: "removeT3d",
                value: function () {
                    var e = document.querySelector(".t3d-wrap");
                    e && e.parentElement && e.parentElement.removeChild(e);
                    var t = document.querySelector(".ing-wrap");
                    t && t.parentElement && t.parentElement.removeChild(t)
                }
            },
            {
                key: "chooseSpec",
                value: function () {
                    var e = H.
                default.spec,
                        t = (H.
                    default.l1, H.
                    default.l2, H.
                    default.qss),
                        A = this.props,
                        n = A.answers,
                        r = (A.gender, 0),
                        i = 0;
                    n.forEach(function (e) {
                            e.a === t[e.q - 1].decent ? r++ : e.a === t[e.q - 1].foodie && i++
                        });
                    for (var o = r >= 5, a = i >= 1, s = void 0, c = void 0, l = void 0, u = !0; u;) s = this.chooseFromL2(),
                    u = this.checkS1(s, o);
                    var f = .2,
                        d = 0;
                    a && (f = .1, .2, d = .7);
                    var h = Math.random(),
                        p = e[s].and;
                    if (p.candi.length && h < p.r) for (var g = !0, B = p.candi.length; g;) c = p.candi[Math.floor(B * Math.random())],
                    g = this.checkS2(s, c, o);
                    else if (h < d) for (var w = !0; w;) c = this.chooseFromF(),
                    w = this.checkS2(s, c, o);
                    else if (h < f) for (var m = !0; m;) c = this.chooseFromL1(),
                    m = this.checkS2(s, c, o);
                    else {
                            c = this.chooseFromL2();
                            for (var v = !0; v;) c = this.chooseFromL2(),
                            v = this.checkS2(s, c, o)
                        }
                    var y = e[c].and;
                    if (y.candi.length && Math.random() < y.r) for (var E = !0, Q = y.candi.length; E;) l = y.candi[Math.floor(Q * Math.random())],
                    E = this.checkS3(s, c, l, o);
                    else if (Math.random() < .5) for (var C = !0; C;) l = this.chooseFromL1(),
                    C = this.checkS3(s, c, l, o);
                    else {
                            l = this.chooseFromL2();
                            for (var U = !0; U;) l = this.chooseFromL2(),
                            U = this.checkS3(s, c, l, o)
                        }
                    this.setState({
                            ss: [s, c, l]
                        })
                }
            },
            {
                key: "checkS1",
                value: function (e, t) {
                    var A = H.
                default.spec,
                        n = this.props.gender;
                    return !(!t || "幽默" !== A[e].tag) || A[e].fm && 1 == n
                }
            },
            {
                key: "checkS2",
                value: function (e, t, A) {
                    var n = H.
                default.spec,
                        r = this.props.gender;
                    return !(!n[t].fm || 1 != r) || (t === e || (!(!A || "幽默" !== n[t].tag) || (n[e].not.some(function (e) {
                            return e === t
                        }) || !1)))
                }
            },
            {
                key: "checkS3",
                value: function (e, t, A, n) {
                    var r = H.
                default.spec,
                        i = this.props.gender;
                    if (r[A].fm && 1 == i) return !0;
                    if (A === e || A === t) return !0;
                    if (n && "幽默" === r[A].tag) return !0;
                    var o = r[e].not.some(function (e) {
                            return e === A
                        }),
                        a = r[t].not.some(function (e) {
                            return e === A
                        });
                    return o || a || !1
                }
            },
            {
                key: "chooseFromL1",
                value: function () {
                    var e = H.
                default.l1;
                    return e[Math.floor(Math.random() * e.length)]
                }
            },
            {
                key: "chooseFromL2",
                value: function () {
                    var e = H.
                default.l2;
                    return e[Math.floor(Math.random() * e.length)]
                }
            },
            {
                key: "chooseFromF",
                value: function () {
                    var e = H.
                default.foodie;
                    return e[Math.floor(Math.random() * e.length)]
                }
            },
            {
                key: "uploadImg",
                value: function (e) {
                    for (var t = e.split(","), A = t[0].match(/:(.*?);/)[1], n = atob(t[1]), r = n.length, i = new Uint8Array(r); r--;) i[r] = n.charCodeAt(r);
                    var o = new Blob([i], {
                        type: A
                    });
                    o.name = "spec.png";
                    var a = this,
                        s = /music\.163\.com$/.test(location.origin) ? "music.163.com" : "qa.igame.163.com";
                    s = location.protocol + "//" + s,
                    (0, B._$upload)({
                            isBackend: !1,
                            origin: s,
                            file: o,
                            type: "image",
                            onsuccess: function (e) {
                                if (e && e.url) {
                                    a.specUrl = e.url;
                                    var t = document.querySelector(".save-pic.inapp");
                                    t && (t.style.zIndex = 10, t.style.display = "block")
                                }
                            },
                            onerror: function (e) {
                                console.log("err", e)
                            }
                        })
                }
            },
            {
                key: "toImg",
                value: function () {
                    var e = {
                        scale: 2,
                        logging: !1,
                        width: window.innerWidth,
                        height: window.innerHeight,
                        useCORS: !0
                    },
                        t = this;
                        (0, Q.
                    default)(document.querySelector(".m-app"), e).then(function (e) {
                            var A = U.
                        default.convertToPNG(e, e.width, e.height);
                            if (document.querySelector(".ret-img").appendChild(A.cloneNode()), f.
                        default.isInNEMapp()) {
                                var n = e.toDataURL();
                                t.uploadImg(n)
                            } else {
                                var r = document.querySelector(".save-pic.out");
                                r && (r.appendChild(A), r.style.display = "block", r.style.zIndex = 10)
                            }
                        })
                }
            },
            {
                key: "sharePage",
                value: function (e) {
                    N.
                default.onAppShare(),
                    e.stopPropagation()
                }
            },
            {
                key: "render",
                value: function () {
                    var e = this,
                        t = this.state,
                        n = t.ing,
                        r = t.ss,
                        i = this.props,
                        o = i.userName,
                        s = i.gender,
                        c = r.map(function (e) {
                            var t = H.
                        default.spec[e].val.replace("XXX", o);
                            return 0 == s && (t = t.replace("他", "她")),
                            t
                        }),
                        u = 24 + 2.4 * (8 - o.length);
                    u = u > 36 ? 36 : u < 24 ? 24 : u;
                    var d = /^[\u4e00-\u9fa5]+$/i.test(o),
                        h = d && o.length < 4 ? "8px" : "normal",
                        p = new Date,
                        g = p.toLocaleDateString().replace(/\//g, ".");
                    g = g.split(".").map(function (e) {
                            return a(e)
                        }),
                    g = g.join(".");
                    var B = a(p.getHours()) + ":" + a(p.getMinutes()) + ":" + a(p.getSeconds()),
                        w = void 0;
                    w = this.retColor ? this.retColor : this.retColor = y.
                default [Math.floor(Math.random() * y.
                    default.length)];
                    var m = w,
                        v = m.centerColor,
                        E = m.leftColor,
                        Q = m.rightColor,
                        C = m.fontColor,
                        U = m.lineColor,
                        b = m.dot,
                        F = v,
                        _ = f.
                default.isInNEMapp();
                    return l.
                default.createElement("div", {
                            className: n ? "ing" : ""
                        }, l.
                    default.createElement("div", {
                            className: "bg ret-page",
                            ref: function (t) {
                                e.layer = t
                            },
                            style: {
                                backgroundColor: v
                            }
                        }, l.
                    default.createElement("div", {
                            className: "ret-wrap"
                        }, l.
                    default.createElement("div", {
                            className: "dec-wrap"
                        }, l.
                    default.createElement("div", {
                            className: "trapezoid top",
                            style: {
                                backgroundColor: v
                            }
                        }), l.
                    default.createElement("div", {
                            className: "wave  top"
                        }, l.
                    default.createElement("svg", {
                            width: "196px",
                            height: "25px",
                            viewBox: "0 0 196 25",
                            version: "1.1"
                        }, l.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, l.
                    default.createElement("g", {
                            fill: F,
                            fillRule: "nonzero"
                        }, l.
                    default.createElement("g", null, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.25",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(19.000000, 0.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.3",
                            cy: "12.25",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(38.000000, 0.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.35",
                            cy: "12.25",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(57.000000, 0.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.4",
                            cy: "12.25",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(76.000000, 0.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.45",
                            cy: "12.25",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(95.000000, 0.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.5",
                            cy: "12.25",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(114.000000, 0.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.55",
                            cy: "12.25",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(133.000000, 0.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.6",
                            cy: "12.25",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(152.000000, 0.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.64",
                            cy: "12.25",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(171.000000, 0.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.69",
                            cy: "12.25",
                            r: "12.25"
                        })))))), l.
                    default.createElement("div", {
                            className: "wave  right"
                        }, l.
                    default.createElement("svg", {
                            width: "25px",
                            height: "196px",
                            viewBox: "0 0 25 196",
                            version: "1.1"
                        }, l.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, l.
                    default.createElement("g", {
                            id: "shu",
                            fill: F,
                            fillRule: "nonzero"
                        }, l.
                    default.createElement("g", {
                            transform: "translate(0.000000, 171.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.69",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(0.000000, 152.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.64",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(0.000000, 133.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.6",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(0.000000, 114.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.55",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(0.000000, 95.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.5",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(0.000000, 76.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.45",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(0.000000, 57.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.4",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(0.000000, 38.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.35",
                            r: "12.25"
                        })), l.
                    default.createElement("g", {
                            transform: "translate(0.000000, 19.000000)"
                        }, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.3",
                            r: "12.25"
                        })), l.
                    default.createElement("g", null, l.
                    default.createElement("circle", {
                            cx: "12.25",
                            cy: "12.25",
                            r: "12.25"
                        }))))))), l.
                    default.createElement("div", {
                            className: "infos",
                            style: {
                                color: C,
                                borderColor: U
                            }
                        }, l.
                    default.createElement("div", {
                            className: "row _1"
                        }, l.
                    default.createElement("div", {
                            className: "time",
                            style: {
                                borderColor: U
                            }
                        }, g, " ", l.
                    default.createElement("span", {
                            style: {
                                backgroundColor: v
                            }
                        }, "日期")), l.
                    default.createElement("div", {
                            className: "no"
                        }, B, l.
                    default.createElement("span", {
                            style: {
                                backgroundColor: v
                            }
                        }, "时间"))), l.
                    default.createElement("div", {
                            className: "row _2",
                            style: {
                                borderColor: U
                            }
                        }, l.
                    default.createElement("div", {
                            className: "name",
                            style: {
                                borderColor: U,
                                letterSpacing: h,
                                fontSize: u
                            }
                        }, o)), l.
                    default.createElement("div", {
                            className: "row _3",
                            style: {
                                borderColor: U
                            }
                        }, l.
                    default.createElement("div", {
                            className: "spec"
                        }, "使用说明书")), l.
                    default.createElement("div", {
                            className: "specs"
                        }, l.
                    default.createElement("div", {
                            className: "spec _1"
                        }, c[0]), l.
                    default.createElement("div", {
                            className: "spec _2"
                        }, c[1]), l.
                    default.createElement("div", {
                            className: "spec _3"
                        }, c[2])), l.
                    default.createElement("div", {
                            className: "ret-line l-1",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "ret-line l-2",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "ret-line l-3",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "divs-wrap"
                        }, l.
                    default.createElement("svg", {
                            width: "124px",
                            height: "32px",
                            viewBox: "0 0 124 32",
                            version: "1.1"
                        }, l.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, l.
                    default.createElement("g", {
                            fill: U,
                            fillRule: "nonzero"
                        }, l.
                    default.createElement("path", {
                            d: "M124,31.2 L0.19,31.2 L0.19,0 L124,0 L124,31.2 Z M1.39,30 L122.81,30 L122.81,1.19 L1.39,1.19 L1.39,30 Z"
                        }), l.
                    default.createElement("path", {
                            d: "M31.8,31.2 L0,31.2 L0,0.48 L31.8,0.48 L31.8,31.2 Z M1.19,30 L30.61,30 L30.61,1.67 L1.19,1.67 L1.19,30 Z"
                        }), l.
                    default.createElement("path", {
                            d: "M92.93,31.08 L61.13,31.08 L61.13,0.6 L92.93,0.6 L92.93,31.08 Z M62.32,29.88 L91.74,29.88 L91.74,1.8 L62.32,1.8 L62.32,29.88 Z"
                        }), l.
                    default.createElement("path", {
                            d: "M123.59,31.08 L91.79,31.08 L91.79,0.6 L123.59,0.6 L123.59,31.08 Z M93,29.88 L122.4,29.88 L122.4,1.8 L93,1.8 L93,29.88 Z"
                        }), l.
                    default.createElement("rect", {
                            transform: "translate(16.347929, 16.100475) rotate(-45.740000) translate(-16.347929, -16.100475) ",
                            x: "15.7529287",
                            y: "-4.31952545",
                            width: "1.19",
                            height: "40.84"
                        }), l.
                    default.createElement("path", {
                            d: "M46.47,29.57 C38.682785,29.57 32.37,23.257215 32.37,15.47 C32.37,7.68278503 38.682785,1.37 46.47,1.37 C54.257215,1.37 60.57,7.68278503 60.57,15.47 C60.5644846,23.2549293 54.2549293,29.5644846 46.47,29.57 Z M46.47,2.57 C39.3455267,2.57 33.57,8.34552673 33.57,15.47 C33.57,22.5944733 39.3455267,28.37 46.47,28.37 C53.5944733,28.37 59.37,22.5944733 59.37,15.47 C59.358987,8.35009346 53.5899065,2.58101302 46.47,2.57 Z"
                        }), l.
                    default.createElement("rect", {
                            transform: "translate(107.701406, 15.838594) rotate(-46.270000) translate(-107.701406, -15.838594) ",
                            x: "107.106406",
                            y: "-5.34140592",
                            width: "1.19",
                            height: "42.36"
                        }), l.
                    default.createElement("rect", {
                            transform: "translate(107.682484, 15.835082) rotate(-43.740000) translate(-107.682484, -15.835082) ",
                            x: "86.5024838",
                            y: "15.2400816",
                            width: "42.36",
                            height: "1.19"
                        }), l.
                    default.createElement("rect", {
                            x: "64.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }), l.
                    default.createElement("rect", {
                            x: "67.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }), l.
                    default.createElement("rect", {
                            x: "70.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }), l.
                    default.createElement("rect", {
                            x: "73.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }), l.
                    default.createElement("rect", {
                            x: "76.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }), l.
                    default.createElement("rect", {
                            x: "79.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }), l.
                    default.createElement("rect", {
                            x: "82.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }), l.
                    default.createElement("rect", {
                            x: "85.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }), l.
                    default.createElement("rect", {
                            x: "88.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }), l.
                    default.createElement("rect", {
                            x: "91.12",
                            y: "1.1",
                            width: "1.19",
                            height: "29"
                        }))))), l.
                    default.createElement("div", {
                            className: "circle _1",
                            style: {
                                backgroundColor: E
                            }
                        }), l.
                    default.createElement("div", {
                            className: "circle _2",
                            style: {
                                backgroundColor: E
                            }
                        }), l.
                    default.createElement("div", {
                            className: "lines-wrap"
                        }, l.
                    default.createElement("svg", {
                            width: "23",
                            height: "396",
                            viewBox: "0 0 23 396"
                        }, l.
                    default.createElement("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(0 1)"
                        }, l.
                    default.createElement("path", {
                            stroke: U,
                            strokeWidth: "3",
                            d: "M0 .5L21.093.5M0 8L21.093 8M0 15.499L21.093 15.499M0 22.999L21.093 22.999M0 30.499L21.093 30.499M0 37.998L21.093 37.998M0 45.498L21.093 45.498M0 52.997L21.093 52.997M0 60.497L21.093 60.497M0 67.997L21.093 67.997M0 75.496L21.093 75.496M0 82.996L21.093 82.996M0 90.496L21.093 90.496M0 97.995L21.093 97.995M0 105.495L21.093 105.495M0 112.994L21.093 112.994M0 120.494L21.093 120.494M0 127.994L21.093 127.994M0 135.493L21.093 135.493M0 142.993L21.093 142.993M0 150.493L21.093 150.493M0 157.992L21.093 157.992M0 165.492L21.093 165.492M0 172.991L21.093 172.991M0 180.491L21.093 180.491M0 187.991L21.093 187.991"
                        }), l.
                    default.createElement("rect", {
                            width: "22.499",
                            height: "199.49",
                            x: ".047",
                            y: "195.49",
                            fill: U,
                            fillRule: "nonzero"
                        })))), l.
                    default.createElement("div", {
                            className: "broken-wrap"
                        }, l.
                    default.createElement("svg", {
                            width: "68px",
                            height: "196px",
                            viewBox: "0 0 68 196",
                            version: "1.1"
                        }, l.
                    default.createElement("g", {
                            stroke: "none",
                            strokeWidth: "1",
                            fill: "none",
                            fillRule: "evenodd"
                        }, l.
                    default.createElement("g", {
                            fill: U,
                            fillRule: "nonzero"
                        }, l.
                    default.createElement("polygon", {
                            points: "18.96 195.5 16.5 195.5 16.5 40.83 0 25.72 0 0 2.46 0 2.46 24.64 18.96 39.75"
                        }), l.
                    default.createElement("polygon", {
                            points: "38.66 195.5 32.8 195.5 32.8 41.58 16.3 26.47 16.3 0 22.16 0 22.16 23.89 38.66 39"
                        }), l.
                    default.createElement("polygon", {
                            points: "67.81 195.5 54.64 195.5 54.64 43.19 38.14 28.08 38.14 0 51.31 0 51.31 22.28 67.81 37.39"
                        })))))), l.
                    default.createElement("div", {
                            className: "bottom-tip",
                            style: {
                                color: C,
                                backgroundColor: v
                            }
                        }, "注：打开“网易云音乐”，搜索“说明书”。"), l.
                    default.createElement("div", {
                            className: "rect _1",
                            style: {
                                backgroundColor: Q
                            }
                        }), l.
                    default.createElement("div", {
                            className: "rect _2",
                            style: {
                                backgroundColor: Q
                            }
                        }), l.
                    default.createElement("div", {
                            className: "rect _3",
                            style: {
                                backgroundColor: Q
                            }
                        }), l.
                    default.createElement("div", {
                            className: "slash _1",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "slash _2",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "slash _3",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "slash _4",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "slash _5",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "slash _6",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "dots " + b
                        }), l.
                    default.createElement("div", {
                            className: "qrcode"
                        }), l.
                    default.createElement("div", {
                            className: "qrcode-tip",
                            style: {
                                color: C
                            }
                        }, "扫一扫生成你的使用说明书"), l.
                    default.createElement("div", {
                            className: "trapezoid top " + v + "-bg"
                        }), l.
                    default.createElement("div", {
                            className: "trapezoid bottom " + v + "-bg"
                        }), l.
                    default.createElement("div", {
                            className: "new-logo"
                        }, l.
                    default.createElement("img", {
                            src: A(209)
                        })))), l.
                    default.createElement("div", {
                            className: "ing-wrap"
                        }, l.
                    default.createElement("div", {
                            className: "ing-tip",
                            style: {
                                color: C
                            }
                        }, l.
                    default.createElement("p", null, "正 在 生 成"), l.
                    default.createElement("div", {
                            className: "ret-line l-1",
                            style: {
                                backgroundColor: C
                            }
                        }), l.
                    default.createElement("div", {
                            className: "ret-line l-2",
                            style: {
                                backgroundColor: C
                            }
                        }), l.
                    default.createElement("div", {
                            className: "ret-line l-3",
                            style: {
                                backgroundColor: C
                            }
                        }), l.
                    default.createElement("p", null, "你的 ", l.
                    default.createElement("span", {
                            className: "shing _1"
                        }, "/"), l.
                    default.createElement("span", {
                            className: "shing _2"
                        }, "/"), l.
                    default.createElement("span", {
                            className: "shing _3"
                        }, "/"), l.
                    default.createElement("span", {
                            className: "shing _4"
                        }, "/"), l.
                    default.createElement("span", {
                            className: "shing _5"
                        }, "/"), l.
                    default.createElement("span", {
                            className: "shing _6"
                        }, "/")), l.
                    default.createElement("p", null, "使用说明书"))), l.
                    default.createElement("div", {
                            className: "t3d-wrap"
                        }, l.
                    default.createElement("div", {
                            className: "t3d t1"
                        }, l.
                    default.createElement("img", {
                            src: A(222)
                        })), l.
                    default.createElement("div", {
                            className: "t3d t2"
                        }, l.
                    default.createElement("img", {
                            src: A(223)
                        })), l.
                    default.createElement("div", {
                            className: "t3d t3"
                        }, l.
                    default.createElement("img", {
                            src: A(224)
                        })), l.
                    default.createElement("div", {
                            className: "t3d t4"
                        }, l.
                    default.createElement("img", {
                            src: A(225)
                        })), l.
                    default.createElement("div", {
                            className: "t3d t5"
                        }, l.
                    default.createElement("img", {
                            src: A(226)
                        })), l.
                    default.createElement("div", {
                            className: "t3d t6"
                        }, l.
                    default.createElement("img", {
                            src: A(227)
                        })), l.
                    default.createElement("div", {
                            className: "t3d t7"
                        }, l.
                    default.createElement("img", {
                            src: A(228)
                        })), l.
                    default.createElement("div", {
                            className: "t3d t8"
                        }, l.
                    default.createElement("img", {
                            src: A(229)
                        })), l.
                    default.createElement("div", {
                            className: "t3d t9"
                        }, l.
                    default.createElement("img", {
                            src: A(230)
                        }))), l.
                    default.createElement("div", {
                            className: "fly left",
                            style: {
                                backgroundColor: E
                            }
                        }), l.
                    default.createElement("div", {
                            className: "fly right",
                            style: {
                                backgroundColor: Q
                            }
                        }), l.
                    default.createElement("div", {
                            className: "ret-img"
                        }), _ ? l.
                    default.createElement("div", {
                            className: "save-pic inapp",
                            onClick: this.savePicInapp,
                            style: {
                                backgroundColor: v,
                                color: C
                            }
                        }, l.
                    default.createElement("p", null, "分 享"), l.
                    default.createElement("p", null, "图 片")):
                        l.
                    default.createElement("div", {
                            className: "save-pic out",
                            style: {
                                color: C
                            }
                        }, l.
                    default.createElement("p", null, "长按保存图片"), l.
                    default.createElement("div", {
                            className: "line _1",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "line _2",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("div", {
                            className: "line _3",
                            style: {
                                backgroundColor: U
                            }
                        }), l.
                    default.createElement("p", {
                            className: "again",
                            style: {
                                backgroundColor: v,
                                display: "none"
                            },
                            onClick: this.doAgain
                        }, "再 测 一 次")))
                }
            }]),
            t
        }(c.Component);
    t.
default = T,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = [{
        index: 0,
        centerColor: "#7692fe",
        leftColor: "#f3afb4",
        rightColor: "#fee6c9",
        fontColor: "#ffffff",
        lineColor: "#ff80b2",
        dot: "d1"
    },
    {
        index: 1,
        centerColor: "#f3afb4",
        leftColor: "#fee6c9",
        rightColor: "#9179d3",
        fontColor: "#4d2a75",
        lineColor: "#40ffba",
        dot: "d2"
    },
    {
        index: 2,
        centerColor: "#d2382d",
        leftColor: "#f3afb4",
        rightColor: "#fee6c9",
        fontColor: "#ffffff",
        lineColor: "#ff80b2",
        dot: "d1"
    },
    {
        index: 3,
        centerColor: "#ff464f",
        leftColor: "#ff80b2",
        rightColor: "#ffbca9",
        fontColor: "#510741",
        lineColor: "#ffbca9",
        dot: "d3"
    },
    {
        index: 4,
        centerColor: "#1f5890",
        leftColor: "#f7bba8",
        rightColor: "#66aee0",
        fontColor: "#eb6664",
        lineColor: "#ee7faf",
        dot: "d4"
    },
    {
        index: 5,
        centerColor: "#9179d3",
        leftColor: "#20c296",
        rightColor: "#f8b7cb",
        fontColor: "#ffffff",
        lineColor: "#f90b67",
        dot: "d5"
    },
    {
        index: 6,
        centerColor: "#20c296",
        leftColor: "#7692fe",
        rightColor: "#f8b7cb",
        fontColor: "#ffffff",
        lineColor: "#ff464f",
        dot: "d6"
    },
    {
        index: 7,
        centerColor: "#45777e",
        leftColor: "#ffa886",
        rightColor: "#d8b0b0",
        fontColor: "#d8b0b0",
        lineColor: "#000000",
        dot: "d7"
    },
    {
        index: 8,
        centerColor: "#16243d",
        leftColor: "#2fac66",
        rightColor: "#f3afb4",
        fontColor: "#ffffff",
        lineColor: "#e84e0e",
        dot: "d8"
    },
    {
        index: 9,
        centerColor: "#2f2a2c",
        leftColor: "#fee6c9",
        rightColor: "#9179d3",
        fontColor: "#6b72c1",
        lineColor: "#fee6c9",
        dot: "d9"
    },
    {
        index: 10,
        centerColor: "#446db4",
        leftColor: "#f7acc0",
        rightColor: "#3fc1c9",
        fontColor: "#ffffff",
        lineColor: "#f7acc0",
        dot: "d10"
    },
    {
        index: 11,
        centerColor: "#c79ccd",
        leftColor: "#446db4",
        rightColor: "#fcd2ca",
        fontColor: "#000000",
        lineColor: "#fcefb1",
        dot: "d11"
    },
    {
        index: 12,
        centerColor: "#b4dac3",
        leftColor: "#783299",
        rightColor: "#999fd1",
        fontColor: "#380720",
        lineColor: "#eb7d2c",
        dot: "d12"
    },
    {
        index: 13,
        centerColor: "#eecead",
        leftColor: "#668ad2",
        rightColor: "#00cb9e",
        fontColor: "#352a21",
        lineColor: "#ff80b2",
        dot: "d1"
    }];
    t.
default = n,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = [{
        val: "XXX擅于发现美的事物，并从中吸收能量，变得越来越好看。",
        index: 0,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !0,
        tag: ""
    },
    {
        val: "XXX笑起来像个孩子，把他带在身边，能带来青春永驻的效果。",
        index: 1,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "请多给予XXX一点睡眠时间。",
        index: 2,
        level: 2,
        not: [42, 45, 65, 64],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX偶尔也有像天使一样温柔的时候。",
        index: 3,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX喜欢自由，适合经常带出去放养。",
        index: 4,
        level: 2,
        not: [46],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "肚子饿了就会心情不好，带XXX一起去吃美味的食物吧！",
        index: 5,
        level: 2,
        not: [8, 37, 39, 43, 44, 51, 52, 13],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "吃"
    },
    {
        val: "XXX常常给身边的人带来好运。",
        index: 6,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX因为太可爱了，会令人陷入沉迷，属于正常现象。",
        index: 7,
        level: 2,
        not: [11],
        and: {
            candi: [],
            r: .3
        },
        fm: !0,
        tag: ""
    },
    {
        val: "XXX遇到香喷喷的东西就会变圆。",
        index: 8,
        level: 2,
        not: [5, 37, 39, 43, 44, 51, 52, 13],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "吃"
    },
    {
        val: "可能因为材质特殊，XXX对外界的攻击有折射能力。",
        index: 9,
        level: 2,
        not: [61, 40],
        and: {
            candi: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 34],
            r: 1
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX虽然经过多次更新迭代，但依然有颗纯真的心。",
        index: 10,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX发光的时候，可能会使对象产生短时眩晕，使用时请注意。",
        index: 11,
        level: 2,
        not: [7, 19],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX拥有迷之运气，中乐透的实力异于常人。",
        index: 12,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "只要缘分到了，XXX自己就会瘦下来。",
        index: 13,
        level: 2,
        not: [5, 8, 37, 39, 43, 44, 51, 52],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "吃"
    },
    {
        val: "XXX拥有高性能大脑，可快速运转，但过度工作（学习）容易发热。",
        index: 14,
        level: 2,
        not: [58],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX买买买时会释放出强大气场，胆子也会变大。",
        index: 15,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX常常因为无法体验人类的乐趣而神伤。",
        index: 16,
        level: 2,
        not: [24, 30, 31, 20],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX是能带来元气和灵感的谜之吉祥物。",
        index: 17,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX心心念念的梦，会在某个不经意的时候实现。",
        index: 18,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX的光芒太耀眼，但也不至于会刺瞎别人。",
        index: 19,
        level: 2,
        not: [11],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX历经严苛质检品控，是市面上难得一遇的珍品。",
        index: 20,
        level: 2,
        not: [30, 33, 62, 35, 16],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "只要对XXX倾注感情，他就能成为最可靠的伙伴，遇到危机可无限次召唤。",
        index: 21,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX的出厂设定就是温暖的守护者，也是周围人快乐和活力的源泉。",
        index: 22,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX有极为罕见的感官知觉，对他说谎可不是明智之举。",
        index: 23,
        level: 2,
        not: [],
        and: {
            candi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 34],
            r: 1
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX装备了精准的探测仪，能发觉并把握住人生中真正的机会。",
        index: 24,
        level: 2,
        not: [33, 62, 35, 16],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX能通过每次挑战完成升级，获得更高的智慧和运气。",
        index: 25,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX具备安全与稳定性，是居家、旅行必备的小能手。",
        index: 26,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX能快速拆卸烦恼，重新制作出充满乐趣和创造力的产物。",
        index: 27,
        level: 2,
        not: [],
        and: {
            candi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 34],
            r: 1
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "变态（萌）是XXX的常态。",
        index: 28,
        level: 2,
        not: [],
        and: {
            candi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 34],
            r: 1
        },
        fm: !1,
        tag: ""
    },
    {
        val: "保温杯和泡脚桶，可延长XXX的使用寿命。",
        index: 29,
        level: 2,
        not: [],
        and: {
            candi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 34],
            r: 1
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX偶尔会孤单，但也能享受孤单，是一款自由的产品。",
        index: 30,
        level: 2,
        not: [33, 62, 35, 16],
        and: {
            candi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 34],
            r: 1
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX对时间的感知力弱，所以不知不觉又加班了。",
        index: 31,
        level: 2,
        not: [33, 62, 35, 16],
        and: {
            candi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25, 26, 34],
            r: 1
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX拥有读气氛的技巧和超高感知力，自己却毫无察觉。",
        index: 32,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX是怪人，但接触后会很有趣，一款来自外星的产品。",
        index: 33,
        level: 2,
        not: [20, 30, 31, 24],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX听到喜爱的音乐，就能触发运气开挂的效果。",
        index: 34,
        level: 2,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX还在努力融入人类世界，拥有地球人不具备的思维方式。",
        index: 35,
        level: 1,
        not: [24, 30, 31, 20],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX肯花费大量时间和精力，超出预期的完成任务。",
        index: 36,
        level: 1,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "要定期给予XXX喂食，他相当单纯。",
        index: 37,
        level: 1,
        not: [5, 8, 39, 43, 44, 51, 52, 13],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "吃"
    },
    {
        val: "请用纤细的语调对XXX说话吧。",
        index: 38,
        level: 1,
        not: [43, 44, 42, 30, 61, 47, 49, 55, 57, 45],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "如果做事开始慢腾腾，及时给XXX一点吃的。",
        index: 39,
        level: 1,
        not: [5, 8, 37, 43, 44, 51, 52, 13],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "吃"
    },
    {
        val: "XXX如果发生故障，就给他一个拥抱吧。",
        index: 40,
        level: 1,
        not: [61, 9],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX喜欢被夸奖，所以一天表扬他一次吧。",
        index: 41,
        level: 1,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX一困就会情绪低落，请给予他适当的睡眠时间。",
        index: 42,
        level: 1,
        not: [43, 44, 30, 61, 38, 47, 49, 55, 57, 45, 2, 65, 64],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX即使心情低落，也会保持精神，这时候给他送些点心吧。",
        index: 43,
        level: 1,
        not: [44, 42, 30, 61, 38, 47, 49, 55, 57, 45, 5, 8, 37, 39, 51, 52, 13],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "吃"
    },
    {
        val: "XXX心情不好的时候，给他吃一点甜甜的东西吧！",
        index: 44,
        level: 1,
        not: [42, 30, 61, 38, 47, 49, 55, 57, 45, 5, 8, 37, 39, 51, 52, 13, 43],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "吃"
    },
    {
        val: "XXX最大的兴趣就是睡觉。",
        index: 45,
        level: 1,
        not: [2, 42, 65, 43, 44, 42, 30, 61, 38, 47, 49, 55, 57, 64],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX能带给你更神奇的经历...当你带他出去玩的时候。",
        index: 46,
        level: 1,
        not: [4],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX看着对方眼睛说话就会脸红。",
        index: 47,
        level: 1,
        not: [43, 44, 42, 30, 61, 38, 49, 55, 57, 45],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX对气温变化的感知力很弱，可能因为内心一直是暖的。",
        index: 48,
        level: 1,
        not: [50],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX脑子里塞满天真的幻想，能拍成一部高分动画片。",
        index: 49,
        level: 1,
        not: [43, 44, 42, 30, 61, 38, 47, 55, 57, 45],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX遇到寒冷的温度就会变圆。",
        index: 50,
        level: 1,
        not: [48, 5, 8, 37, 39, 43, 44, 51, 52, 13],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX吃越少，越会变胖",
        index: 51,
        level: 1,
        not: [5, 8, 37, 39, 43, 44, 52, 13],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "吃"
    },
    {
        val: "吃饭也是XXX缓解压力的一种办法",
        index: 52,
        level: 1,
        not: [5, 8, 37, 39, 43, 44, 51, 13],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "吃"
    },
    {
        val: "XXX易燃，需要时刻为他准备好灭火器。",
        index: 53,
        level: 1,
        not: [43, 44, 42, 30, 61, 38, 47, 49, 55, 57, 45],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX拥有巨大内存，收到的关心（和红包）他都会记得。",
        index: 54,
        level: 1,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "如果丢开XXX不管，要小心他自己溜走了！",
        index: 55,
        level: 1,
        not: [43, 44, 42, 30, 61, 38, 47, 49, 57, 45],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "未来的道路上，XXX会因为无敌而略感寂寞。",
        index: 56,
        level: 1,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX不擅长向别人求助。如果有人察觉到的话请主动帮他一下。",
        index: 57,
        level: 1,
        not: [43, 44, 42, 30, 61, 38, 47, 49, 55, 45],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX的脑部为S级原装货，其他身体部分都是普通零件。",
        index: 58,
        level: 1,
        not: [14],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "如果你觉得XXX发量开始减少，那一定是出现了幻觉。",
        index: 59,
        level: 1,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX只要一出门就会变漂亮。",
        index: 60,
        level: 1,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !0,
        tag: ""
    },
    {
        val: "XXX遇到刮痕损伤不会自己修理。",
        index: 61,
        level: 1,
        not: [9, 40, 43, 44, 42, 30, 38, 47, 49, 55, 57, 45],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX对地球充满好奇，喜欢人类（不工作时）的生活方式。",
        index: 62,
        level: 1,
        not: [24, 30, 31, 20],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX只要开启降噪模式，就能获得坚定追随内心和直觉的勇气。",
        index: 63,
        level: 1,
        not: [],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: ""
    },
    {
        val: "XXX早上起床时容易发生爆炸。",
        index: 64,
        level: 1,
        not: [2, 42, 45, 65],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    },
    {
        val: "XXX按时睡觉的程序被设计的太复杂，很难执行。",
        index: 65,
        level: 1,
        not: [2, 42, 45, 64],
        and: {
            candi: [],
            r: .3
        },
        fm: !1,
        tag: "幽默"
    }],
        r = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
        i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
        o = [5, 8, 37, 39, 43, 44, 51, 52, 13, 48, 50],
        a = [{
            decent: "A",
            foodie: "B"
        },
        {
            decent: "",
            foodie: ""
        },
        {
            decent: "A",
            foodie: ""
        },
        {
            decent: "B",
            foodie: "C"
        },
        {
            decent: "A",
            foodie: ""
        },
        {
            decent: "B",
            foodie: ""
        },
        {
            decent: "A",
            foodie: ""
        },
        {
            decent: "B",
            foodie: ""
        },
        {
            decent: "A",
            foodie: ""
        },
        {
            decent: "A",
            foodie: ""
        },
        {
            decent: "A",
            foodie: ""
        },
        {
            decent: "A",
            foodie: ""
        },
        {
            decent: "C",
            foodie: ""
        },
        {
            decent: "C",
            foodie: ""
        },
        {
            decent: "",
            foodie: ""
        },
        {
            decent: "A",
            foodie: ""
        }];
    t.
default = {
            spec: n,
            l1: r,
            l2: i,
            qss: a,
            foodie: o
        },
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = A(104),
        i = n(r),
        o = A(150),
        a = n(o),
        s = A(30),
        c = n(s),
        l = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e = c.
        default.URL(e),
            t.noEnc = !! t.noEnc,
            t.method = t.method || "GET",
            t.credentials = t.credentials || "include",
            t.withCredentials = "include" === t.credentials,
            t.data && (/GET|HEAD/.test(t.method) || (t.headers = {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }, t.body = a.
        default.stringify(t.data))),
            t.query && (e = e + "?" + a.
        default.stringify(t.query)),
            (0, i.
        default)(e, t).then(function (e) {
                return t.raw ? e.text() : e.json().then(function (e) {
                    if (void 0 === e.code || 200 === e.code) return e;
                    throw e
                })
            }).
            catch (function (e) {
                throw e
            })
        };
    t.
default = l,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        return new Promise(function (A) {
            if (!e || e.length <= 0) return Promise.resolve([]);
            var n = new o.
        default,
                r = [],
                i = setTimeout(function () {
                    A(r)
                }, 2e4);
            e.forEach(function (e) {
                    r.push(n.addImage(e, null, null, {
                        origin: "anonymous"
                    }))
                }),
            "function" == typeof t && n.addProgressListener(t),
            n.addCompletionListener(function (e) {
                    i = clearTimeout(i),
                    A(r)
                }),
            n.start()
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = r;
    var i = A(248),
        o = n(i),
        a = A(741);
    n(a);
    e.exports = t.
default
},
, function (e, t, A) {
    e.exports = {
    default:
        A(301),
        __esModule: !0
    }
},


function (e, t, A) {
    e.exports = {
    default:
        A(302),
        __esModule: !0
    }
},


function (e, t, A) {
    e.exports = {
    default:
        A(303),
        __esModule: !0
    }
},


function (e, t, A) {
    e.exports = {
    default:
        A(304),
        __esModule: !0
    }
},


function (e, t, A) {
    e.exports = {
    default:
        A(306),
        __esModule: !0
    }
},


function (e, t, A) {
    e.exports = {
    default:
        A(307),
        __esModule: !0
    }
},


function (e, t, A) {
    e.exports = {
    default:
        A(308),
        __esModule: !0
    }
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    t.__esModule = !0;
    var r = A(295),
        i = n(r),
        o = A(292),
        a = n(o),
        s = A(55),
        c = n(s);
    t.
default = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, c.
        default)(t)));
            e.prototype = (0, a.
        default)(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (i.
        default ? (0, i.
        default)(e, t):
            e.__proto__ = t)
        }
},


function (e, t, A) {
    "use strict";
    t.__esModule = !0;
    var n = A(55),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n);
    t.
default = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : (0, r.
        default)(t)) && "function" != typeof t ? e : t
        }
},
, function (e, t, A) {
    var n = A(23),
        r = n.JSON || (n.JSON = {
            stringify: JSON.stringify
        });
    e.exports = function (e) {
            return r.stringify.apply(r, arguments)
        }
},


function (e, t, A) {
    A(326);
    var n = A(23).Object;
    e.exports = function (e, t) {
        return n.create(e, t)
    }
},


function (e, t, A) {
    A(327);
    var n = A(23).Object;
    e.exports = function (e, t, A) {
        return n.defineProperty(e, t, A)
    }
},


function (e, t, A) {
    A(328),
    e.exports = A(23).Object.getPrototypeOf
},


function (e, t, A) {
    A(329),
    e.exports = A(23).Object.keys
},


function (e, t, A) {
    A(330),
    e.exports = A(23).Object.setPrototypeOf
},


function (e, t, A) {
    A(333),
    A(331),
    A(334),
    A(335),
    e.exports = A(23).Symbol
},


function (e, t, A) {
    A(332),
    A(336),
    e.exports = A(118).f("iterator")
},


function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
},


function (e, t) {
    e.exports = function () {}
},


function (e, t, A) {
    var n = A(59),
        r = A(324),
        i = A(323);
    e.exports = function (e) {
            return function (t, A, o) {
                var a, s = n(t),
                    c = r(s.length),
                    l = i(o, c);
                if (e && A != A) {
                        for (; c > l;) if ((a = s[l++]) != a) return !0
                    } else for (; c > l; l++) if ((e || l in s) && s[l] === A) return e || l || 0;
                return !e && -1
            }
        }
},


function (e, t, A) {
    var n = A(77),
        r = A(165),
        i = A(110);
    e.exports = function (e) {
            var t = n(e),
                A = r.f;
            if (A) for (var o, a = A(e), s = i.f, c = 0; a.length > c;) s.call(e, o = a[c++]) && t.push(o);
            return t
        }
},


function (e, t, A) {
    var n = A(33).document;
    e.exports = n && n.documentElement
},


function (e, t, A) {
    var n = A(158);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == n(e) ? e.split("") : Object(e)
    }
},


function (e, t, A) {
    var n = A(158);
    e.exports = Array.isArray ||
    function (e) {
        return "Array" == n(e)
    }
},


function (e, t, A) {
    "use strict";
    var n = A(109),
        r = A(78),
        i = A(111),
        o = {};
    A(57)(o, A(60)("iterator"), function () {
            return this
        }),
    e.exports = function (e, t, A) {
            e.prototype = n(o, {
                next: r(1, A)
            }),
            i(e, t + " Iterator")
        }
},


function (e, t) {
    e.exports = function (e, t) {
        return {
            value: t,
            done: !! e
        }
    }
},


function (e, t, A) {
    var n = A(79)("meta"),
        r = A(58),
        i = A(40),
        o = A(41).f,
        a = 0,
        s = Object.isExtensible ||
    function () {
            return !0
        },
        c = !A(69)(function () {
            return s(Object.preventExtensions({}))
        }),
        l = function (e) {
            o(e, n, {
                value: {
                    i: "O" + ++a,
                    w: {}
                }
            })
        },
        u = function (e, t) {
            if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, n)) {
                if (!s(e)) return "F";
                if (!t) return "E";
                l(e)
            }
            return e[n].i
        },
        f = function (e, t) {
            if (!i(e, n)) {
                if (!s(e)) return !0;
                if (!t) return !1;
                l(e)
            }
            return e[n].w
        },
        d = function (e) {
            return c && h.NEED && s(e) && !i(e, n) && l(e),
            e
        },
        h = e.exports = {
            KEY: n,
            NEED: !1,
            fastKey: u,
            getWeak: f,
            onFreeze: d
        }
},


function (e, t, A) {
    var n = A(41),
        r = A(68),
        i = A(77);
    e.exports = A(39) ? Object.defineProperties : function (e, t) {
            r(e);
            for (var A, o = i(t), a = o.length, s = 0; a > s;) n.f(e, A = o[s++], t[A]);
            return e
        }
},


function (e, t, A) {
    var n = A(59),
        r = A(164).f,
        i = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        a = function (e) {
            try {
                return r(e)
            } catch (e) {
                return o.slice()
            }
        };
    e.exports.f = function (e) {
            return o && "[object Window]" == i.call(e) ? a(e) : r(n(e))
        }
},


function (e, t, A) {
    var n = A(58),
        r = A(68),
        i = function (e, t) {
            if (r(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ?
            function (e, t, n) {
                try {
                    n = A(159)(Function.call, A(163).f(Object.prototype, "__proto__").set, 2),
                    n(e, []),
                    t = !(e instanceof Array)
                } catch (e) {
                    t = !0
                }
                return function (e, A) {
                    return i(e, A),
                    t ? e.__proto__ = A : n(e, A),
                    e
                }
            }({}, !1) : void 0),
            check: i
        }
},


function (e, t, A) {
    var n = A(114),
        r = A(105);
    e.exports = function (e) {
            return function (t, A) {
                var i, o, a = String(r(t)),
                    s = n(A),
                    c = a.length;
                return s < 0 || s >= c ? e ? "" : void 0 : (i = a.charCodeAt(s), i < 55296 || i > 56319 || s + 1 === c || (o = a.charCodeAt(s + 1)) < 56320 || o > 57343 ? e ? a.charAt(s) : i : e ? a.slice(s, s + 2) : o - 56320 + (i - 55296 << 10) + 65536)
            }
        }
},


function (e, t, A) {
    var n = A(114),
        r = Math.max,
        i = Math.min;
    e.exports = function (e, t) {
            return e = n(e),
            e < 0 ? r(e + t, 0) : i(e, t)
        }
},


function (e, t, A) {
    var n = A(114),
        r = Math.min;
    e.exports = function (e) {
            return e > 0 ? r(n(e), 9007199254740991) : 0
        }
},


function (e, t, A) {
    "use strict";
    var n = A(310),
        r = A(317),
        i = A(107),
        o = A(59);
    e.exports = A(162)(Array, "Array", function (e, t) {
            this._t = o(e),
            this._i = 0,
            this._k = t
        }, function () {
            var e = this._t,
                t = this._k,
                A = this._i++;
            return !e || A >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, A) : "values" == t ? r(0, e[A]) : r(0, [A, e[A]])
        }, "values"),
    i.Arguments = i.Array,
    n("keys"),
    n("values"),
    n("entries")
},


function (e, t, A) {
    var n = A(56);
    n(n.S, "Object", {
        create: A(109)
    })
},


function (e, t, A) {
    var n = A(56);
    n(n.S + n.F * !A(39), "Object", {
        defineProperty: A(41).f
    })
},


function (e, t, A) {
    var n = A(115),
        r = A(166);
    A(168)("getPrototypeOf", function () {
            return function (e) {
                return r(n(e))
            }
        })
},


function (e, t, A) {
    var n = A(115),
        r = A(77);
    A(168)("keys", function () {
            return function (e) {
                return r(n(e))
            }
        })
},


function (e, t, A) {
    var n = A(56);
    n(n.S, "Object", {
        setPrototypeOf: A(321).set
    })
},


function (e, t) {},


function (e, t, A) {
    "use strict";
    var n = A(322)(!0);
    A(162)(String, "String", function (e) {
        this._t = String(e),
        this._i = 0
    }, function () {
        var e, t = this._t,
            A = this._i;
        return A >= t.length ? {
                value: void 0,
                done: !0
            } : (e = n(t, A), this._i += e.length, {
                value: e,
                done: !1
            })
    })
},


function (e, t, A) {
    "use strict";
    var n = A(33),
        r = A(40),
        i = A(39),
        o = A(56),
        a = A(169),
        s = A(318).KEY,
        c = A(69),
        l = A(113),
        u = A(111),
        f = A(79),
        d = A(60),
        h = A(118),
        p = A(117),
        g = A(312),
        B = A(315),
        w = A(68),
        m = A(58),
        v = A(59),
        y = A(116),
        E = A(78),
        Q = A(109),
        C = A(320),
        U = A(163),
        b = A(41),
        F = A(77),
        _ = U.f,
        H = b.f,
        x = C.f,
        N = n.Symbol,
        T = n.JSON,
        I = T && T.stringify,
        S = d("_hidden"),
        O = d("toPrimitive"),
        M = {}.propertyIsEnumerable,
        k = l("symbol-registry"),
        D = l("symbols"),
        L = l("op-symbols"),
        R = Object.prototype,
        P = "function" == typeof N,
        K = n.QObject,
        X = !K || !K.prototype || !K.prototype.findChild,
        z = i && c(function () {
            return 7 != Q(H({}, "a", {
                get: function () {
                    return H(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ?
    function (e, t, A) {
            var n = _(R, t);
            n && delete R[t],
            H(e, t, A),
            n && e !== R && H(R, t, n)
        } : H,
        j = function (e) {
            var t = D[e] = Q(N.prototype);
            return t._k = e,
            t
        },
        V = P && "symbol" == typeof N.iterator ?
    function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof N
        },
        W = function (e, t, A) {
            return e === R && W(L, t, A),
            w(e),
            t = y(t, !0),
            w(A),
            r(D, t) ? (A.enumerable ? (r(e, S) && e[S][t] && (e[S][t] = !1), A = Q(A, {
                enumerable: E(0, !1)
            })) : (r(e, S) || H(e, S, E(1, {})), e[S][t] = !0), z(e, t, A)) : H(e, t, A)
        },
        J = function (e, t) {
            w(e);
            for (var A, n = g(t = v(t)), r = 0, i = n.length; i > r;) W(e, A = n[r++], t[A]);
            return e
        },
        Y = function (e, t) {
            return void 0 === t ? Q(e) : J(Q(e), t)
        },
        G = function (e) {
            var t = M.call(this, e = y(e, !0));
            return !(this === R && r(D, e) && !r(L, e)) && (!(t || !r(this, e) || !r(D, e) || r(this, S) && this[S][e]) || t)
        },
        q = function (e, t) {
            if (e = v(e), t = y(t, !0), e !== R || !r(D, t) || r(L, t)) {
                var A = _(e, t);
                return !A || !r(D, t) || r(e, S) && e[S][t] || (A.enumerable = !0),
                A
            }
        },
        $ = function (e) {
            for (var t, A = x(v(e)), n = [], i = 0; A.length > i;) r(D, t = A[i++]) || t == S || t == s || n.push(t);
            return n
        },
        Z = function (e) {
            for (var t, A = e === R, n = x(A ? L : v(e)), i = [], o = 0; n.length > o;)!r(D, t = n[o++]) || A && !r(R, t) || i.push(D[t]);
            return i
        };
    P || (N = function () {
            if (this instanceof N) throw TypeError("Symbol is not a constructor!");
            var e = f(arguments.length > 0 ? arguments[0] : void 0),
                t = function (A) {
                    this === R && t.call(L, A),
                    r(this, S) && r(this[S], e) && (this[S][e] = !1),
                    z(this, e, E(1, A))
                };
            return i && X && z(R, e, {
                    configurable: !0,
                    set: t
                }),
            j(e)
        }, a(N.prototype, "toString", function () {
            return this._k
        }), U.f = q, b.f = W, A(164).f = C.f = $, A(110).f = G, A(165).f = Z, i && !A(108) && a(R, "propertyIsEnumerable", G, !0), h.f = function (e) {
            return j(d(e))
        }),
    o(o.G + o.W + o.F * !P, {
            Symbol: N
        });
    for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) d(ee[te++]);
    for (var Ae = F(d.store), ne = 0; Ae.length > ne;) p(Ae[ne++]);
    o(o.S + o.F * !P, "Symbol", {
            for: function (e) {
                return r(k, e += "") ? k[e] : k[e] = N(e)
            },
            keyFor: function (e) {
                if (!V(e)) throw TypeError(e + " is not a symbol!");
                for (var t in k) if (k[t] === e) return t
            },
            useSetter: function () {
                X = !0
            },
            useSimple: function () {
                X = !1
            }
        }),
    o(o.S + o.F * !P, "Object", {
            create: Y,
            defineProperty: W,
            defineProperties: J,
            getOwnPropertyDescriptor: q,
            getOwnPropertyNames: $,
            getOwnPropertySymbols: Z
        }),
    T && o(o.S + o.F * (!P || c(function () {
            var e = N();
            return "[null]" != I([e]) || "{}" != I({
                a: e
            }) || "{}" != I(Object(e))
        })), "JSON", {
            stringify: function (e) {
                for (var t, A, n = [e], r = 1; arguments.length > r;) n.push(arguments[r++]);
                if (A = t = n[1], (m(t) || void 0 !== e) && !V(e)) return B(t) || (t = function (e, t) {
                    if ("function" == typeof A && (t = A.call(this, e, t)), !V(t)) return t
                }),
                n[1] = t,
                I.apply(T, n)
            }
        }),
    N.prototype[O] || A(57)(N.prototype, O, N.prototype.valueOf),
    u(N, "Symbol"),
    u(Math, "Math", !0),
    u(n.JSON, "JSON", !0)
},


function (e, t, A) {
    A(117)("asyncIterator")
},


function (e, t, A) {
    A(117)("observable")
},


function (e, t, A) {
    A(325);
    for (var n = A(33), r = A(57), i = A(107), o = A(60)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < a.length; s++) {
        var c = a[s],
            l = n[c],
            u = l && l.prototype;
        u && !u[o] && r(u, o, c),
        i[c] = i.Array
    }
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, A) {
    "use strict";

    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0, A = Array(e.length); t < e.length; t++) A[t] = e[t];
            return A
        }
        return Array.from(e)
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.LineBreaker = t.inlineBreakOpportunities = t.lineBreakAtIndex = t.codePointsToCharacterClasses = t.UnicodeTrie = t.BREAK_ALLOWED = t.BREAK_NOT_ALLOWED = t.BREAK_MANDATORY = t.classes = t.LETTER_NUMBER_MODIFIER = void 0;
    var i = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        o = function () {
            function e(e, t) {
                var A = [],
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                        for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (A.push(o.value), !t || A.length !== t); n = !0);
                    } catch (e) {
                        r = !0,
                        i = e
                    } finally {
                        try {
                            !n && a.
                            return &&a.
                            return ()
                        } finally {
                            if (r) throw i
                        }
                    }
                return A
            }
            return function (t, A) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, A);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        a = A(537),
        s = A(539),
        c = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(s),
        l = A(146),
        u = t.LETTER_NUMBER_MODIFIER = 50,
        f = (t.classes = {
            BK: 1,
            CR: 2,
            LF: 3,
            CM: 4,
            NL: 5,
            SG: 6,
            WJ: 7,
            ZW: 8,
            GL: 9,
            SP: 10,
            ZWJ: 11,
            B2: 12,
            BA: 13,
            BB: 14,
            HY: 15,
            CB: 16,
            CL: 17,
            CP: 18,
            EX: 19,
            IN: 20,
            NS: 21,
            OP: 22,
            QU: 23,
            IS: 24,
            NU: 25,
            PO: 26,
            PR: 27,
            SY: 28,
            AI: 29,
            AL: 30,
            CJ: 31,
            EB: 32,
            EM: 33,
            H2: 34,
            H3: 35,
            HL: 36,
            ID: 37,
            JL: 38,
            JV: 39,
            JT: 40,
            RI: 41,
            SA: 42,
            XX: 43
        }, t.BREAK_MANDATORY = "!"),
        d = t.BREAK_NOT_ALLOWED = "×",
        h = t.BREAK_ALLOWED = "÷",
        p = t.UnicodeTrie = (0, a.createTrieFromBase64)(c.
    default),
        g = [30, 36],
        B = [1, 2, 3, 5],
        w = [10, 8],
        m = [27, 26],
        v = B.concat(w),
        y = [38, 39, 40, 34, 35],
        E = [15, 13],
        Q = t.codePointsToCharacterClasses = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "strict",
                A = [],
                n = [],
                r = [];
            return e.forEach(function (e, i) {
                    var o = p.get(e);
                    if (o > u ? (r.push(!0), o -= u) : r.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(t) && -1 !== [8208, 8211, 12316, 12448].indexOf(e)) return n.push(i),
                    A.push(16);
                    if (4 === o || 11 === o) {
                        if (0 === i) return n.push(i),
                        A.push(30);
                        var a = A[i - 1];
                        return -1 === v.indexOf(a) ? (n.push(n[i - 1]), A.push(a)) : (n.push(i), A.push(30))
                    }
                    return n.push(i),
                    31 === o ? A.push("strict" === t ? 21 : 37) : 42 === o ? A.push(30) : 29 === o ? A.push(30) : 43 === o ? e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141 ? A.push(37) : A.push(30) : void A.push(o)
                }),
            [n, A, r]
        },
        C = function (e, t, A, n) {
            var r = n[A];
            if (Array.isArray(e) ? -1 !== e.indexOf(r) : e === r) for (var i = A; i <= n.length;) {
                i++;
                var o = n[i];
                if (o === t) return !0;
                if (10 !== o) break
            }
            if (10 === r) for (var a = A; a > 0;) {
                a--;
                var s = n[a];
                if (Array.isArray(e) ? -1 !== e.indexOf(s) : e === s) for (var c = A; c <= n.length;) {
                    c++;
                    var l = n[c];
                    if (l === t) return !0;
                    if (10 !== l) break
                }
                if (10 !== s) break
            }
            return !1
        },
        U = function (e, t) {
            for (var A = e; A >= 0;) {
                var n = t[A];
                if (10 !== n) return n;
                A--
            }
            return 0
        },
        b = function (e, t, A, n, r) {
            if (0 === A[n]) return d;
            var i = n - 1;
            if (Array.isArray(r) && !0 === r[i]) return d;
            var o = i - 1,
                a = i + 1,
                s = t[i],
                c = o >= 0 ? t[o] : 0,
                l = t[a];
            if (2 === s && 3 === l) return d;
            if (-1 !== B.indexOf(s)) return f;
            if (-1 !== B.indexOf(l)) return d;
            if (-1 !== w.indexOf(l)) return d;
            if (8 === U(i, t)) return h;
            if (11 === p.get(e[i]) && (37 === l || 32 === l || 33 === l)) return d;
            if (7 === s || 7 === l) return d;
            if (9 === s) return d;
            if (-1 === [10, 13, 15].indexOf(s) && 9 === l) return d;
            if (-1 !== [17, 18, 19, 24, 28].indexOf(l)) return d;
            if (22 === U(i, t)) return d;
            if (C(23, 22, i, t)) return d;
            if (C([17, 18], 21, i, t)) return d;
            if (C(12, 12, i, t)) return d;
            if (10 === s) return h;
            if (23 === s || 23 === l) return d;
            if (16 === l || 16 === s) return h;
            if (-1 !== [13, 15, 21].indexOf(l) || 14 === s) return d;
            if (36 === c && -1 !== E.indexOf(s)) return d;
            if (28 === s && 36 === l) return d;
            if (20 === l && -1 !== g.concat(20, 19, 25, 37, 32, 33).indexOf(s)) return d;
            if (-1 !== g.indexOf(l) && 25 === s || -1 !== g.indexOf(s) && 25 === l) return d;
            if (27 === s && -1 !== [37, 32, 33].indexOf(l) || -1 !== [37, 32, 33].indexOf(s) && 26 === l) return d;
            if (-1 !== g.indexOf(s) && -1 !== m.indexOf(l) || -1 !== m.indexOf(s) && -1 !== g.indexOf(l)) return d;
            if (-1 !== [27, 26].indexOf(s) && (25 === l || -1 !== [22, 15].indexOf(l) && 25 === t[a + 1]) || -1 !== [22, 15].indexOf(s) && 25 === l || 25 === s && -1 !== [25, 28, 24].indexOf(l)) return d;
            if (-1 !== [25, 28, 24, 17, 18].indexOf(l)) for (var u = i; u >= 0;) {
                    var v = t[u];
                    if (25 === v) return d;
                    if (-1 === [28, 24].indexOf(v)) break;
                    u--
                }
            if (-1 !== [27, 26].indexOf(l)) for (var Q = -1 !== [17, 18].indexOf(s) ? o : i; Q >= 0;) {
                    var b = t[Q];
                    if (25 === b) return d;
                    if (-1 === [28, 24].indexOf(b)) break;
                    Q--
                }
            if (38 === s && -1 !== [38, 39, 34, 35].indexOf(l) || -1 !== [39, 34].indexOf(s) && -1 !== [39, 40].indexOf(l) || -1 !== [40, 35].indexOf(s) && 40 === l) return d;
            if (-1 !== y.indexOf(s) && -1 !== [20, 26].indexOf(l) || -1 !== y.indexOf(l) && 27 === s) return d;
            if (-1 !== g.indexOf(s) && -1 !== g.indexOf(l)) return d;
            if (24 === s && -1 !== g.indexOf(l)) return d;
            if (-1 !== g.concat(25).indexOf(s) && 22 === l || -1 !== g.concat(25).indexOf(l) && 18 === s) return d;
            if (41 === s && 41 === l) {
                    for (var F = A[i], _ = 1; F > 0 && (F--, 41 === t[F]);) _++;
                    if (_ % 2 != 0) return d
                }
            return 32 === s && 33 === l ? d : h
        },
        F = (t.lineBreakAtIndex = function (e, t) {
            if (0 === t) return d;
            if (t >= e.length) return f;
            var A = Q(e),
                n = o(A, 2),
                r = n[0],
                i = n[1];
            return b(e, i, r, t)
        }, function (e, t) {
            t || (t = {
                lineBreak: "normal",
                wordBreak: "normal"
            });
            var A = Q(e, t.lineBreak),
                n = o(A, 3),
                r = n[0],
                i = n[1],
                a = n[2];
            return "break-all" !== t.wordBreak && "break-word" !== t.wordBreak || (i = i.map(function (e) {
                    return -1 !== [25, 30, 42].indexOf(e) ? 37 : e
                })),
            [r, i, "keep-all" === t.wordBreak ? a.map(function (t, A) {
                    return t && e[A] >= 19968 && e[A] <= 40959
                }) : null]
        }),
        _ = (t.inlineBreakOpportunities = function (e, t) {
            var A = (0, l.toCodePoints)(e),
                n = d,
                r = F(A, t),
                i = o(r, 3),
                a = i[0],
                s = i[1],
                c = i[2];
            return A.forEach(function (e, t) {
                    n += (0, l.fromCodePoint)(e) + (t >= A.length - 1 ? f : b(A, s, a, t + 1, c))
                }),
            n
        }, function () {
            function e(t, A, n, i) {
                r(this, e),
                this._codePoints = t,
                this.required = A === f,
                this.start = n,
                this.end = i
            }
            return i(e, [{
                key: "slice",
                value: function () {
                    return l.fromCodePoint.apply(void 0, n(this._codePoints.slice(this.start, this.end)))
                }
            }]),
            e
        }());
    t.LineBreaker = function (e, t) {
            var A = (0, l.toCodePoints)(e),
                n = F(A, t),
                r = o(n, 3),
                i = r[0],
                a = r[1],
                s = r[2],
                c = A.length,
                u = 0,
                f = 0;
            return {
                    next: function () {
                        if (f >= c) return {
                            done: !0
                        };
                        for (var e = d; f < c && (e = b(A, a, i, ++f, s)) === d;);
                        if (e !== d || f === c) {
                            var t = new _(A, e, u, f);
                            return u = f,
                            {
                                value: t,
                                done: !1
                            }
                        }
                        return {
                            done: !0
                        }
                    }
                }
        }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Trie = t.createTrieFromBase64 = t.UTRIE2_INDEX_2_MASK = t.UTRIE2_INDEX_2_BLOCK_LENGTH = t.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = t.UTRIE2_INDEX_1_OFFSET = t.UTRIE2_UTF8_2B_INDEX_2_LENGTH = t.UTRIE2_UTF8_2B_INDEX_2_OFFSET = t.UTRIE2_INDEX_2_BMP_LENGTH = t.UTRIE2_LSCP_INDEX_2_LENGTH = t.UTRIE2_DATA_MASK = t.UTRIE2_DATA_BLOCK_LENGTH = t.UTRIE2_LSCP_INDEX_2_OFFSET = t.UTRIE2_SHIFT_1_2 = t.UTRIE2_INDEX_SHIFT = t.UTRIE2_SHIFT_1 = t.UTRIE2_SHIFT_2 = void 0;
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = A(146),
        o = t.UTRIE2_SHIFT_2 = 5,
        a = t.UTRIE2_SHIFT_1 = 11,
        s = t.UTRIE2_INDEX_SHIFT = 2,
        c = t.UTRIE2_SHIFT_1_2 = a - o,
        l = t.UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> o,
        u = t.UTRIE2_DATA_BLOCK_LENGTH = 1 << o,
        f = t.UTRIE2_DATA_MASK = u - 1,
        d = t.UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> o,
        h = t.UTRIE2_INDEX_2_BMP_LENGTH = l + d,
        p = t.UTRIE2_UTF8_2B_INDEX_2_OFFSET = h,
        g = t.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32,
        B = t.UTRIE2_INDEX_1_OFFSET = p + g,
        w = t.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> a,
        m = t.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << c,
        v = t.UTRIE2_INDEX_2_MASK = m - 1,
        y = (t.createTrieFromBase64 = function (e) {
            var t = (0, i.decode)(e),
                A = Array.isArray(t) ? (0, i.polyUint32Array)(t) : new Uint32Array(t),
                n = Array.isArray(t) ? (0, i.polyUint16Array)(t) : new Uint16Array(t),
                r = n.slice(12, A[4] / 2),
                o = 2 === A[5] ? n.slice((24 + A[4]) / 2) : A.slice(Math.ceil((24 + A[4]) / 4));
            return new y(A[0], A[1], A[2], A[3], r, o)
        }, t.Trie = function () {
            function e(t, A, r, i, o, a) {
                n(this, e),
                this.initialValue = t,
                this.errorValue = A,
                this.highStart = r,
                this.highValueIndex = i,
                this.index = o,
                this.data = a
            }
            return r(e, [{
                key: "get",
                value: function (e) {
                    var t = void 0;
                    if (e >= 0) {
                        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> o],
                        t = (t << s) + (e & f),
                        this.data[t];
                        if (e <= 65535) return t = this.index[l + (e - 55296 >> o)],
                        t = (t << s) + (e & f),
                        this.data[t];
                        if (e < this.highStart) return t = B - w + (e >> a),
                        t = this.index[t],
                        t += e >> o & v,
                        t = this.index[t],
                        t = (t << s) + (e & f),
                        this.data[t];
                        if (e <= 1114111) return this.data[this.highValueIndex]
                    }
                    return this.errorValue
                }
            }]),
            e
        }())
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = A(146);
    Object.defineProperty(t, "toCodePoints", {
        enumerable: !0,
        get: function () {
            return n.toCodePoints
        }
    }),
    Object.defineProperty(t, "fromCodePoint", {
        enumerable: !0,
        get: function () {
            return n.fromCodePoint
        }
    });
    var r = A(536);
    Object.defineProperty(t, "LineBreaker", {
        enumerable: !0,
        get: function () {
            return r.LineBreaker
        }
    })
},


function (e, t, A) {
    "use strict";
    e.exports = "KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"
},


function (e, t, A) {
    "use strict";
    var n, r = A(545),
        i = A(553),
        o = A(548),
        a = A(557);
    n = e.exports = function (e, t) {
            var A, n, o, s, c;
            return arguments.length < 2 || "string" != typeof e ? (s = t, t = e, e = null) : s = arguments[2],
            null == e ? (A = o = !0, n = !1) : (A = a.call(e, "c"), n = a.call(e, "e"), o = a.call(e, "w")),
            c = {
                value: t,
                configurable: A,
                enumerable: n,
                writable: o
            },
            s ? r(i(s), c) : c
        },
    n.gs = function (e, t, A) {
            var n, s, c, l;
            return "string" != typeof e ? (c = A, A = t, t = e, e = null) : c = arguments[3],
            null == t ? t = void 0 : o(t) ? null == A ? A = void 0 : o(A) || (c = A, A = void 0) : (c = t, t = A = void 0),
            null == e ? (n = !0, s = !1) : (n = a.call(e, "c"), s = a.call(e, "e")),
            l = {
                get: t,
                set: A,
                configurable: n,
                enumerable: s
            },
            c ? r(i(c), l) : l
        }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        e.classList ? e.classList.add(t) : (0, i.
    default)(e, t) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = n;
    var r = A(542),
        i = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(r);
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        return e.classList ? !! t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = n,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
    }
    e.exports = function (e, t) {
        e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = n(e.className, t) : e.setAttribute("class", n(e.className && e.className.baseVal || "", t))
    }
},


function (e, t, A) {
    "use strict";
    e.exports = function () {}
},


function (e, t, A) {
    "use strict";
    e.exports = A(546)() ? Object.assign : A(547)
},


function (e, t, A) {
    "use strict";
    e.exports = function () {
        var e, t = Object.assign;
        return "function" == typeof t && (e = {
            foo: "raz"
        }, t(e, {
            bar: "dwa"
        }, {
            trzy: "trzy"
        }), e.foo + e.bar + e.trzy === "razdwatrzy")
    }
},


function (e, t, A) {
    "use strict";
    var n = A(550),
        r = A(556),
        i = Math.max;
    e.exports = function (e, t) {
            var A, o, a, s = i(arguments.length, 2);
            for (e = Object(r(e)), a = function (n) {
                try {
                    e[n] = t[n]
                } catch (e) {
                    A || (A = e)
                }
            }, o = 1; o < s; ++o) t = arguments[o],
            n(t).forEach(a);
            if (void 0 !== A) throw A;
            return e
        }
},


function (e, t, A) {
    "use strict";
    e.exports = function (e) {
        return "function" == typeof e
    }
},


function (e, t, A) {
    "use strict";
    var n = A(94),
        r = {
            function: !0,
            object: !0
        };
    e.exports = function (e) {
            return n(e) && r[typeof e] || !1
        }
},


function (e, t, A) {
    "use strict";
    e.exports = A(551)() ? Object.keys : A(552)
},


function (e, t, A) {
    "use strict";
    e.exports = function () {
        try {
            return Object.keys("primitive"),
            !0
        } catch (e) {
            return !1
        }
    }
},


function (e, t, A) {
    "use strict";
    var n = A(94),
        r = Object.keys;
    e.exports = function (e) {
            return r(n(e) ? Object(e) : e)
        }
},


function (e, t, A) {
    "use strict";
    var n = A(94),
        r = Array.prototype.forEach,
        i = Object.create,
        o = function (e, t) {
            var A;
            for (A in e) t[A] = e[A]
        };
    e.exports = function (e) {
            var t = i(null);
            return r.call(arguments, function (e) {
                n(e) && o(Object(e), t)
            }),
            t
        }
},


function (e, t, A) {
    "use strict";
    e.exports = function (e) {
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        return e
    }
},


function (e, t, A) {
    "use strict";
    var n = A(549);
    e.exports = function (e) {
        if (!n(e)) throw new TypeError(e + " is not an Object");
        return e
    }
},


function (e, t, A) {
    "use strict";
    var n = A(94);
    e.exports = function (e) {
        if (!n(e)) throw new TypeError("Cannot use null or undefined");
        return e
    }
},


function (e, t, A) {
    "use strict";
    e.exports = A(558)() ? String.prototype.contains : A(559)
},


function (e, t, A) {
    "use strict";
    var n = "razdwatrzy";
    e.exports = function () {
        return "function" == typeof n.contains && (!0 === n.contains("dwa") && !1 === n.contains("foo"))
    }
},


function (e, t, A) {
    "use strict";
    var n = String.prototype.indexOf;
    e.exports = function (e) {
        return n.call(this, e, arguments[1]) > -1
    }
},


function (e, t, A) {
    "use strict";
    var n = A(555),
        r = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
            var t, A = arguments[1];
            if (n(e), void 0 !== A) {
                if (!(t = r.call(e, "__ee__") && e.__ee__)) return;
                return void(t[A] && delete t[A])
            }
            r.call(e, "__ee__") && delete e.__ee__
        }
},


function (e, t, A) {
    "use strict";
    var n, r, i, o, a, s, c, l = A(540),
        u = A(554),
        f = Function.prototype.apply,
        d = Function.prototype.call,
        h = Object.create,
        p = Object.defineProperty,
        g = Object.defineProperties,
        B = Object.prototype.hasOwnProperty,
        w = {
            configurable: !0,
            enumerable: !1,
            writable: !0
        };
    n = function (e, t) {
            var A;
            return u(t),
            B.call(this, "__ee__") ? A = this.__ee__ : (A = w.value = h(null), p(this, "__ee__", w), w.value = null),
            A[e] ? "object" == typeof A[e] ? A[e].push(t) : A[e] = [A[e], t] : A[e] = t,
            this
        },
    r = function (e, t) {
            var A, r;
            return u(t),
            r = this,
            n.call(this, e, A = function () {
                i.call(r, e, A),
                f.call(t, this, arguments)
            }),
            A.__eeOnceListener__ = t,
            this
        },
    i = function (e, t) {
            var A, n, r, i;
            if (u(t), !B.call(this, "__ee__")) return this;
            if (A = this.__ee__, !A[e]) return this;
            if ("object" == typeof(n = A[e])) for (i = 0; r = n[i]; ++i) r !== t && r.__eeOnceListener__ !== t || (2 === n.length ? A[e] = n[i ? 0 : 1] : n.splice(i, 1));
            else n !== t && n.__eeOnceListener__ !== t || delete A[e];
            return this
        },
    o = function (e) {
            var t, A, n, r, i;
            if (B.call(this, "__ee__") && (r = this.__ee__[e])) if ("object" == typeof r) {
                for (A = arguments.length, i = new Array(A - 1), t = 1; t < A; ++t) i[t - 1] = arguments[t];
                for (r = r.slice(), t = 0; n = r[t]; ++t) f.call(n, this, i)
            } else switch (arguments.length) {
            case 1:
                d.call(r, this);
                break;
            case 2:
                d.call(r, this, arguments[1]);
                break;
            case 3:
                d.call(r, this, arguments[1], arguments[2]);
                break;
            default:
                for (A = arguments.length, i = new Array(A - 1), t = 1; t < A; ++t) i[t - 1] = arguments[t];
                f.call(r, this, i)
            }
        },
    a = {
            on: n,
            once: r,
            off: i,
            emit: o
        },
    s = {
            on: l(n),
            once: l(r),
            off: l(i),
            emit: l(o)
        },
    c = g({}, s),
    e.exports = t = function (e) {
            return null == e ? h(c) : g(Object(e), s)
        },
    t.methods = a
},


function (e, t, A) {
    A(752)(A(745)),
    e.exports = window.Canvas2Image
},


function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t) {},


function (e, t) {},
, , , , , function (e, t, A) {
    "use strict";

    function n(e, t, A, n, i, o, a, s) {
        if (r(t), !e) {
            var c;
            if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var l = [A, n, i, o, a, s],
                    u = 0;
                c = new Error(t.replace(/%s/g, function () {
                        return l[u++]
                    })),
                c.name = "Invariant Violation"
            }
            throw c.framesToPop = 1,
            c
        }
    }
    var r = function (e) {};
    e.exports = n
},
, , , function (e, t, A) {
    e.exports = A.p + "client/audio/1.b2c2daa5.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/10.027de35f.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/11.b126f1d2.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/12.019d0ae8.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/13.681832b0.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/14.05452b89.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/15.38c0cc0c.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/16.fe4a7cf6.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/2.1fba321a.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/3.b7cd2dc4.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/4.ce7ff750.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/5.c8b8d27a.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/6.641f9a1f.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/7.c6b90543.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/8.647bf4ef.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/audio/9.dfaa016a.mp3"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/1/A-w.3a6eaa78.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/1/A.bf192bf3.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/1/B-w.742d6ef1.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/1/B.29a6c59d.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/1/C-w.1d9cad92.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/1/C.9fc9ffdd.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/10/A-w.483d3c9a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/10/A.b8398a3e.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/10/B-w.b38a7919.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/10/B.b8ecb70f.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/10/C-w.17bab230.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/10/C.627ff7fa.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/11/A-w.3f83b7fb.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/11/A.9952f2f0.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/11/B-w.d49610ce.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/11/B.51d40be1.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/11/C-w.8e934af3.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/11/C.2517ca66.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/12/A-w.f14ca90a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/12/A.630103cd.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/12/B-w.e4c508be.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/12/B.772bed36.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/12/C-w.5a6c2470.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/12/C.3051ba7a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/13/A-w.399e83c1.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/13/A.1e0d203f.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/13/B-w.20644fb4.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/13/B.1644f371.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/13/C-w.154b3265.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/13/C.642fe04a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/14/A-w.7a446b38.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/14/A.29c13c40.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/14/B-w.42c2bcd7.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/14/B.9c54dc46.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/14/C-w.96e46449.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/14/C.bbbf3d69.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/15/A-w.3cc624b1.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/15/A.18b7b85b.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/15/B-w.c99a241c.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/15/B.3c493501.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/15/C-w.f258bf28.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/15/C.516e9ac0.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/16/A-w.1cf5eb0b.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/16/A.9eb8579c.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/16/B-w.eff17662.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/16/B.7bce8e7f.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/16/C-w.10d917d3.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/16/C.ea269783.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/2/A-w.b90fea4d.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/2/A.7d5bb45c.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/2/B-w.149c8751.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/2/B.75f72de8.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/2/C-w.870fc90d.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/2/C.090488ae.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/3/A-w.48832f6c.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/3/A.4fbbfa2a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/3/B-w.9056dbb5.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/3/B.cafa68cf.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/3/C-w.4eb6f54c.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/3/C.68ef4c21.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/4/A-w.6102943b.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/4/A.3bb4b2be.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/4/B-w.900db9c7.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/4/B.2e0c3af2.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/4/C-w.07de401a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/4/C.f7533219.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/5/A-w.0c4845f9.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/5/A.21b26db9.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/5/B-w.60883774.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/5/B.84def76a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/5/C-w.81b111c8.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/5/C.c97e159e.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/6/A-w.55a6a4f4.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/6/A.fc0d722a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/6/B-w.5f875235.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/6/B.a1a12fcb.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/6/C-w.b9b19c6c.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/6/C.199b4654.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/7/A-w.f5022afe.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/7/A.5ace7ef1.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/7/B-w.d0a83b18.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/7/B.80322daa.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/7/C-w.b5dcc9c6.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/7/C.e7d674cd.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/8/A-w.920d398d.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/8/A.44e2327a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/8/B-w.f38f727a.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/8/B.2edeab4d.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/8/C-w.96e5e307.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/8/C.98e68ff1.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/9/A-w.16be50c1.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/9/A.036f9c1f.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/9/B-w.c545f6d5.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/9/B.2ba90e90.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/9/C-w.bb585852.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/answer/9/C.c5f1366f.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/center/q-c-1.d54d7087.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/center/q-c-2.b6866a2e.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/center/q-c-3.01ebb625.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/center/q-c-4.99d402f3.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/center/q-c-5.bfd23f60.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/center/q-c-6.e46c20ed.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/first/click.3c109e08.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/first/left_lines.bf57df95.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/first/logo.cb808d19.gif"
},


function (e, t, A) {
    e.exports = A.p + "client/img/first/title.9f6f1617.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/gender/fm.f493d842.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/gender/m.aa989f76.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/num/n-1.6f99eb11.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/num/n-2.f6773325.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/num/n-3.a4b14a5d.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/num/n-4.8dc0e5a1.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/num/n-5.8ec768b5.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/num/n-6.2b675cd3.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/spec_web.1da5c2ea.png"
},


function (e, t, A) {
    e.exports = A.p + "client/img/timu.656408d8.png"
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;
    t.parseAngle = function (e) {
        var t = e.match(n);
        if (t) {
            var A = parseFloat(t[1]);
            switch (t[2].toLowerCase()) {
            case "deg":
                return Math.PI * A / 180;
            case "grad":
                return Math.PI / 200 * A;
            case "rad":
                return A;
            case "turn":
                return 2 * Math.PI * A
            }
        }
        return null
    }
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.cloneWindow = t.DocumentCloner = void 0;
    var i = function () {
        function e(e, t) {
            var A = [],
                n = !0,
                r = !1,
                i = void 0;
            try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (A.push(o.value), !t || A.length !== t); n = !0);
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        !n && a.
                        return &&a.
                        return ()
                    } finally {
                        if (r) throw i
                    }
                }
            return A
        }
        return function (t, A) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, A);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        o = function () {
            function e(e, t) {
                for (var A = 0; A < t.length; A++) {
                    var n = t[A];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, A, n) {
                return A && e(t.prototype, A),
                n && e(t, n),
                t
            }
        }(),
        a = A(36),
        s = A(238),
        c = A(718),
        l = n(c),
        u = A(66),
        f = A(73),
        d = A(245),
        h = n(d),
        p = A(716),
        g = t.DocumentCloner = function () {
            function e(t, A, n, i, o) {
                r(this, e),
                this.referenceElement = t,
                this.scrolledElements = [],
                this.copyStyles = i,
                this.inlineImages = i,
                this.logger = n,
                this.options = A,
                this.renderer = o,
                this.resourceLoader = new l.
            default (A, n, window),
                this.pseudoContentData = {
                    counters: {},
                    quoteDepth: 0
                },
                this.documentElement = this.cloneNode(t.ownerDocument.documentElement)
            }
            return o(e, [{
                key: "inlineAllImages",
                value: function (e) {
                    var t = this;
                    if (this.inlineImages && e) {
                        var A = e.style;
                        Promise.all((0, f.parseBackgroundImage)(A.backgroundImage).map(function (e) {
                            return "url" === e.method ? t.resourceLoader.inlineImage(e.args[0]).then(function (e) {
                                return e && "string" == typeof e.src ? 'url("' + e.src + '")' : "none"
                            }).
                            catch (function (e) {}) : Promise.resolve("" + e.prefix + e.method + "(" + e.args.join(",") + ")")
                        })).then(function (e) {
                            e.length > 1 && (A.backgroundColor = ""),
                            A.backgroundImage = e.join(",")
                        }),
                        e instanceof HTMLImageElement && this.resourceLoader.inlineImage(e.src).then(function (t) {
                            if (t && e instanceof HTMLImageElement && e.parentNode) {
                                var A = e.parentNode,
                                    n = (0, u.copyCSSStyles)(e.style, t.cloneNode(!1));
                                A.replaceChild(n, e)
                            }
                        }).
                        catch (function (e) {})
                    }
                }
            },
            {
                key: "inlineFonts",
                value: function (e) {
                    var t = this;
                    return Promise.all(Array.from(e.styleSheets).map(function (t) {
                        return t.href ? fetch(t.href).then(function (e) {
                            return e.text()
                        }).then(function (e) {
                            return w(e, t.href)
                        }).
                        catch (function (e) {
                            return []
                        }) : B(t, e)
                    })).then(function (e) {
                        return e.reduce(function (e, t) {
                            return e.concat(t)
                        }, [])
                    }).then(function (e) {
                        return Promise.all(e.map(function (e) {
                            return fetch(e.formats[0].src).then(function (e) {
                                return e.blob()
                            }).then(function (e) {
                                return new Promise(function (t, A) {
                                    var n = new FileReader;
                                    n.onerror = A,
                                    n.onload = function () {
                                        var e = n.result;
                                        t(e)
                                    },
                                    n.readAsDataURL(e)
                                })
                            }).then(function (t) {
                                return e.fontFace.setProperty("src", 'url("' + t + '")'),
                                "@font-face {" + e.fontFace.cssText + " "
                            })
                        }))
                    }).then(function (A) {
                        var n = e.createElement("style");
                        n.textContent = A.join("\n"),
                        t.documentElement.appendChild(n)
                    })
                }
            },
            {
                key: "createElementClone",
                value: function (e) {
                    var t = this;
                    if (this.copyStyles && e instanceof HTMLCanvasElement) {
                        var A = e.ownerDocument.createElement("img");
                        try {
                            return A.src = e.toDataURL(),
                            A
                        } catch (e) {}
                    }
                    if (e instanceof HTMLIFrameElement) {
                        var n = e.cloneNode(!1),
                            r = H();
                        n.setAttribute("data-html2canvas-internal-iframe-key", r);
                        var i = (0, a.parseBounds)(e, 0, 0),
                            o = i.width,
                            s = i.height;
                        return this.resourceLoader.cache[r] = N(e, this.options).then(function (e) {
                                return t.renderer(e, {
                                    async: t.options.async,
                                    allowTaint: t.options.allowTaint,
                                    backgroundColor: "#ffffff",
                                    canvas: null,
                                    imageTimeout: t.options.imageTimeout,
                                    logging: t.options.logging,
                                    proxy: t.options.proxy,
                                    removeContainer: t.options.removeContainer,
                                    scale: t.options.scale,
                                    foreignObjectRendering: t.options.foreignObjectRendering,
                                    useCORS: t.options.useCORS,
                                    target: new h.
                                default,
                                    width:
                                    o,
                                    height: s,
                                    x: 0,
                                    y: 0,
                                    windowWidth: e.ownerDocument.defaultView.innerWidth,
                                    windowHeight: e.ownerDocument.defaultView.innerHeight,
                                    scrollX: e.ownerDocument.defaultView.pageXOffset,
                                    scrollY: e.ownerDocument.defaultView.pageYOffset
                                }, t.logger.child(r))
                            }).then(function (t) {
                                return new Promise(function (A, r) {
                                    var i = document.createElement("img");
                                    i.onload = function () {
                                        return A(t)
                                    },
                                    i.onerror = r,
                                    i.src = t.toDataURL(),
                                    n.parentNode && n.parentNode.replaceChild((0, u.copyCSSStyles)(e.ownerDocument.defaultView.getComputedStyle(e), i), n)
                                })
                            }),
                        n
                    }
                    if (e instanceof HTMLStyleElement && e.sheet && e.sheet.cssRules) {
                        var c = [].slice.call(e.sheet.cssRules, 0).reduce(function (e, t) {
                            return e + t.cssText
                        }, ""),
                            l = e.cloneNode(!1);
                        return l.textContent = c,
                        l
                    }
                    return e.cloneNode(!1)
                }
            },
            {
                key: "cloneNode",
                value: function (e) {
                    var t = e.nodeType === Node.TEXT_NODE ? document.createTextNode(e.nodeValue) : this.createElementClone(e),
                        A = e.ownerDocument.defaultView,
                        n = e instanceof A.HTMLElement ? A.getComputedStyle(e) : null,
                        r = e instanceof A.HTMLElement ? A.getComputedStyle(e, ":before") : null,
                        i = e instanceof A.HTMLElement ? A.getComputedStyle(e, ":after") : null;
                    this.referenceElement === e && t instanceof A.HTMLElement && (this.clonedReferenceElement = t),
                    t instanceof A.HTMLBodyElement && b(t);
                    for (var o = (0, p.parseCounterReset)(n, this.pseudoContentData), a = (0, p.resolvePseudoContent)(e, r, this.pseudoContentData), s = e.firstChild; s; s = s.nextSibling) s.nodeType === Node.ELEMENT_NODE && ("SCRIPT" === s.nodeName || s.hasAttribute("data-html2canvas-ignore") || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(s)) || this.copyStyles && "STYLE" === s.nodeName || t.appendChild(this.cloneNode(s));
                    var c = (0, p.resolvePseudoContent)(e, i, this.pseudoContentData);
                    if ((0, p.popCounters)(o, this.pseudoContentData), e instanceof A.HTMLElement && t instanceof A.HTMLElement) switch (r && this.inlineAllImages(y(e, t, r, a, E)), i && this.inlineAllImages(y(e, t, i, c, Q)), !n || !this.copyStyles || e instanceof HTMLIFrameElement || (0, u.copyCSSStyles)(n, t), this.inlineAllImages(t), 0 === e.scrollTop && 0 === e.scrollLeft || this.scrolledElements.push([t, e.scrollLeft, e.scrollTop]), e.nodeName) {
                        case "CANVAS":
                            this.copyStyles || v(e, t);
                            break;
                        case "TEXTAREA":
                        case "SELECT":
                            t.value = e.value
                        }
                    return t
                }
            }]),
            e
        }(),
        B = function (e, t) {
            return (e.cssRules ? Array.from(e.cssRules) : []).filter(function (e) {
                return e.type === CSSRule.FONT_FACE_RULE
            }).map(function (e) {
                for (var A = (0, f.parseBackgroundImage)(e.style.getPropertyValue("src")), n = [], r = 0; r < A.length; r++) if ("url" === A[r].method && A[r + 1] && "format" === A[r + 1].method) {
                    var i = t.createElement("a");
                    i.href = A[r].args[0],
                    t.body && t.body.appendChild(i);
                    var o = {
                        src: i.href,
                        format: A[r + 1].args[0]
                    };
                    n.push(o)
                }
                return {
                    formats: n.filter(function (e) {
                        return /^woff/i.test(e.format)
                    }),
                    fontFace: e.style
                }
            }).filter(function (e) {
                return e.formats.length
            })
        },
        w = function (e, t) {
            var A = document.implementation.createHTMLDocument(""),
                n = document.createElement("base");
            n.href = t;
            var r = document.createElement("style");
            return r.textContent = e,
            A.head && A.head.appendChild(n),
            A.body && A.body.appendChild(r),
            r.sheet ? B(r.sheet, A) : []
        },
        m = function (e, t, A) {
            !e.defaultView || t === e.defaultView.pageXOffset && A === e.defaultView.pageYOffset || e.defaultView.scrollTo(t, A)
        },
        v = function (e, t) {
            try {
                if (t) {
                    t.width = e.width,
                    t.height = e.height;
                    var A = e.getContext("2d"),
                        n = t.getContext("2d");
                    A ? n.putImageData(A.getImageData(0, 0, e.width, e.height), 0, 0) : n.drawImage(e, 0, 0)
                }
            } catch (e) {}
        },
        y = function (e, t, A, n, r) {
            if (A && A.content && "none" !== A.content && "-moz-alt-content" !== A.content && "none" !== A.display) {
                var i = t.ownerDocument.createElement("html2canvaspseudoelement");
                if ((0, u.copyCSSStyles)(A, i), n) for (var o = n.length, a = 0; a < o; a++) {
                    var s = n[a];
                    switch (s.type) {
                    case p.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                        var c = t.ownerDocument.createElement("img");
                        c.src = (0, f.parseBackgroundImage)("url(" + s.value + ")")[0].args[0],
                        c.style.opacity = "1",
                        i.appendChild(c);
                        break;
                    case p.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                        i.appendChild(t.ownerDocument.createTextNode(s.value))
                    }
                }
                return i.className = C + " " + U,
                t.className += r === E ? " " + C : " " + U,
                r === E ? t.insertBefore(i, t.firstChild) : t.appendChild(i),
                i
            }
        },
        E = ":before",
        Q = ":after",
        C = "___html2canvas___pseudoelement_before",
        U = "___html2canvas___pseudoelement_after",
        b = function (e) {
            F(e, "." + C + E + '{\n    content: "" !important;\n    display: none !important;\n}\n         .' + U + Q + '{\n    content: "" !important;\n    display: none !important;\n}')
        },
        F = function (e, t) {
            var A = e.ownerDocument.createElement("style");
            A.innerHTML = t,
            e.appendChild(A)
        },
        _ = function (e) {
            var t = i(e, 3),
                A = t[0],
                n = t[1],
                r = t[2];
            A.scrollLeft = n,
            A.scrollTop = r
        },
        H = function () {
            return Math.ceil(Date.now() + 1e7 * Math.random()).toString(16)
        },
        x = /^data:text\/(.+);(base64)?,(.*)$/i,
        N = function (e, t) {
            try {
                return Promise.resolve(e.contentWindow.document.documentElement)
            } catch (A) {
                return t.proxy ? (0, s.Proxy)(e.src, t).then(function (e) {
                    var t = e.match(x);
                    return t ? "base64" === t[2] ? window.atob(decodeURIComponent(t[3])) : decodeURIComponent(t[3]) : Promise.reject()
                }).then(function (t) {
                    return T(e.ownerDocument, (0, a.parseBounds)(e, 0, 0)).then(function (e) {
                        var A = e.contentWindow,
                            n = A.document;
                        n.open(),
                        n.write(t);
                        var r = I(e).then(function () {
                                return n.documentElement
                            });
                        return n.close(),
                        r
                    })
                }) : Promise.reject()
            }
        },
        T = function (e, t) {
            var A = e.createElement("iframe");
            return A.className = "html2canvas-container",
            A.style.visibility = "hidden",
            A.style.position = "fixed",
            A.style.left = "-10000px",
            A.style.top = "0px",
            A.style.border = "0",
            A.width = t.width.toString(),
            A.height = t.height.toString(),
            A.scrolling = "no",
            A.setAttribute("data-html2canvas-ignore", "true"),
            e.body ? (e.body.appendChild(A), Promise.resolve(A)) : Promise.reject("")
        },
        I = function (e) {
            var t = e.contentWindow,
                A = t.document;
            return new Promise(function (n, r) {
                    t.onload = e.onload = A.onreadystatechange = function () {
                        var t = setInterval(function () {
                            A.body.childNodes.length > 0 && "complete" === A.readyState && (clearInterval(t), n(e))
                        }, 50)
                    }
                })
        },
        S = (t.cloneWindow = function (e, t, A, n, r, i) {
            var o = new g(A, n, r, !1, i),
                a = e.defaultView.pageXOffset,
                s = e.defaultView.pageYOffset;
            return T(e, t).then(function (r) {
                    var i = r.contentWindow,
                        c = i.document,
                        l = I(r).then(function () {
                            o.scrolledElements.forEach(_),
                            i.scrollTo(t.left, t.top),
                            !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === t.top && i.scrollX === t.left || (c.documentElement.style.top = -t.top + "px", c.documentElement.style.left = -t.left + "px", c.documentElement.style.position = "absolute");
                            var A = Promise.resolve([r, o.clonedReferenceElement, o.resourceLoader]),
                                a = n.onclone;
                            return o.clonedReferenceElement instanceof i.HTMLElement || o.clonedReferenceElement instanceof e.defaultView.HTMLElement || o.clonedReferenceElement instanceof HTMLElement ? "function" == typeof a ? Promise.resolve().then(function () {
                                    return a(c)
                                }).then(function () {
                                    return A
                                }) : A : Promise.reject("")
                        });
                    return c.open(),
                    c.write(S(document.doctype) + "<html></html>"),
                    m(A.ownerDocument, a, s),
                    c.replaceChild(c.adoptNode(o.documentElement), c.documentElement),
                    c.close(),
                    l
                })
        }, function (e) {
            var t = "";
            return e && (t += "<!DOCTYPE ", e.name && (t += e.name), e.internalSubset && (t += e.internalSubset), e.publicId && (t += '"' + e.publicId + '"'), e.systemId && (t += '"' + e.systemId + '"'), t += ">"),
            t
        })
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.transformWebkitRadialGradientArgs = t.parseGradient = t.RadialGradient = t.LinearGradient = t.RADIAL_GRADIENT_SHAPE = t.GRADIENT_TYPE = void 0;
    var i = function () {
        function e(e, t) {
            var A = [],
                n = !0,
                r = !1,
                i = void 0;
            try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (A.push(o.value), !t || A.length !== t); n = !0);
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        !n && a.
                        return &&a.
                        return ()
                    } finally {
                        if (r) throw i
                    }
                }
            return A
        }
        return function (t, A) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, A);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        o = A(65),
        a = (n(o), A(712)),
        s = A(37),
        c = n(s),
        l = A(53),
        u = n(l),
        f = A(66),
        d = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i,
        h = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i,
        p = /(px)|%|( 0)$/i,
        g = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i,
        B = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i,
        w = t.GRADIENT_TYPE = {
            LINEAR_GRADIENT: 0,
            RADIAL_GRADIENT: 1
        },
        m = t.RADIAL_GRADIENT_SHAPE = {
            CIRCLE: 0,
            ELLIPSE: 1
        },
        v = {
            left: new u.
        default ("0%"),
            top:
            new u.
        default ("0%"),
            center:
            new u.
        default ("50%"),
            right:
            new u.
        default ("100%"),
            bottom:
            new u.
        default ("100%")
        },
        y = t.LinearGradient = function e(t, A) {
            r(this, e),
            this.type = w.LINEAR_GRADIENT,
            this.colorStops = t,
            this.direction = A
        },
        E = t.RadialGradient = function e(t, A, n, i) {
            r(this, e),
            this.type = w.RADIAL_GRADIENT,
            this.colorStops = t,
            this.shape = A,
            this.center = n,
            this.radius = i
        },
        Q = (t.parseGradient = function (e, t, A) {
            var n = t.args,
                r = t.method,
                i = t.prefix;
            return "linear-gradient" === r ? C(n, A, !! i) : "gradient" === r && "linear" === n[0] ? C(["to bottom"].concat(I(n.slice(3))), A, !! i) : "radial-gradient" === r ? U(e, "-webkit-" === i ? T(n) : n, A) : "gradient" === r && "radial" === n[0] ? U(e, I(T(n.slice(1))), A) : void 0
        }, function (e, t, A) {
            for (var n = [], r = t; r < e.length; r++) {
                var i = e[r],
                    o = p.test(i),
                    a = i.lastIndexOf(" "),
                    s = new c.
            default (o ? i.substring(0, a) : i),
                    l = o ? new u.
            default (i.substring(a + 1)):
                r === t ? new u.
            default ("0%"):
                r === e.length - 1 ? new u.
            default ("100%"):
                null;
                n.push({
                        color: s,
                        stop: l
                    })
            }
            for (var f = n.map(function (e) {
                var t = e.color,
                    n = e.stop;
                return {
                        color: t,
                        stop: 0 === A ? 0 : n ? n.getAbsoluteValue(A) / A : null
                    }
            }), d = f[0].stop, h = 0; h < f.length; h++) if (null !== d) {
                var g = f[h].stop;
                if (null === g) {
                    for (var B = h; null === f[B].stop;) B++;
                    for (var w = B - h + 1, m = f[B].stop, v = (m - d) / w; h < B; h++) d = f[h].stop = d + v
                } else d = g
            }
            return f
        }),
        C = function (e, t, A) {
            var n = (0, a.parseAngle)(e[0]),
                r = d.test(e[0]),
                i = r || null !== n || h.test(e[0]),
                o = i ? null !== n ? b(A ? n - .5 * Math.PI : n, t) : r ? _(e[0], t) : H(e[0], t) : b(Math.PI, t),
                s = i ? 1 : 0,
                c = Math.min((0, f.distance)(Math.abs(o.x0) + Math.abs(o.x1), Math.abs(o.y0) + Math.abs(o.y1)), 2 * t.width, 2 * t.height);
            return new y(Q(e, s, c), o)
        },
        U = function (e, t, A) {
            var n = t[0].match(B),
                r = n && ("circle" === n[1] || void 0 !== n[3] && void 0 === n[5]) ? m.CIRCLE : m.ELLIPSE,
                i = {},
                o = {};
            n && (void 0 !== n[3] && (i.x = (0, l.calculateLengthFromValueWithUnit)(e, n[3], n[4]).getAbsoluteValue(A.width)), void 0 !== n[5] && (i.y = (0, l.calculateLengthFromValueWithUnit)(e, n[5], n[6]).getAbsoluteValue(A.height)), n[7] ? o.x = v[n[7].toLowerCase()] : void 0 !== n[8] && (o.x = (0, l.calculateLengthFromValueWithUnit)(e, n[8], n[9])), n[10] ? o.y = v[n[10].toLowerCase()] : void 0 !== n[11] && (o.y = (0, l.calculateLengthFromValueWithUnit)(e, n[11], n[12])));
            var a = {
                    x: void 0 === o.x ? A.width / 2 : o.x.getAbsoluteValue(A.width),
                    y: void 0 === o.y ? A.height / 2 : o.y.getAbsoluteValue(A.height)
                },
                s = N(n && n[2] || "farthest-corner", r, a, i, A);
            return new E(Q(t, n ? 1 : 0, Math.min(s.x, s.y)), r, a, s)
        },
        b = function (e, t) {
            var A = t.width,
                n = t.height,
                r = .5 * A,
                i = .5 * n,
                o = Math.abs(A * Math.sin(e)) + Math.abs(n * Math.cos(e)),
                a = o / 2,
                s = r + Math.sin(e) * a,
                c = i - Math.cos(e) * a;
            return {
                    x0: s,
                    x1: A - s,
                    y0: c,
                    y1: n - c
                }
        },
        F = function (e) {
            return Math.acos(e.width / 2 / ((0, f.distance)(e.width, e.height) / 2))
        },
        _ = function (e, t) {
            switch (e) {
            case "bottom":
            case "to top":
                return b(0, t);
            case "left":
            case "to right":
                return b(Math.PI / 2, t);
            case "right":
            case "to left":
                return b(3 * Math.PI / 2, t);
            case "top right":
            case "right top":
            case "to bottom left":
            case "to left bottom":
                return b(Math.PI + F(t), t);
            case "top left":
            case "left top":
            case "to bottom right":
            case "to right bottom":
                return b(Math.PI - F(t), t);
            case "bottom left":
            case "left bottom":
            case "to top right":
            case "to right top":
                return b(F(t), t);
            case "bottom right":
            case "right bottom":
            case "to top left":
            case "to left top":
                return b(2 * Math.PI - F(t), t);
            case "top":
            case "to bottom":
            default:
                return b(Math.PI, t)
            }
        },
        H = function (e, t) {
            var A = e.split(" ").map(parseFloat),
                n = i(A, 2),
                r = n[0],
                o = n[1],
                a = r / 100 * t.width / (o / 100 * t.height);
            return b(Math.atan(isNaN(a) ? 1 : a) + Math.PI / 2, t)
        },
        x = function (e, t, A, n) {
            return [{
                x: 0,
                y: 0
            }, {
                x: 0,
                y: e.height
            }, {
                x: e.width,
                y: 0
            }, {
                x: e.width,
                y: e.height
            }].reduce(function (e, r) {
                var i = (0, f.distance)(t - r.x, A - r.y);
                return (n ? i < e.optimumDistance : i > e.optimumDistance) ? {
                    optimumCorner: r,
                    optimumDistance: i
                } : e
            }, {
                optimumDistance: n ? 1 / 0 : -1 / 0,
                optimumCorner: null
            }).optimumCorner
        },
        N = function (e, t, A, n, r) {
            var i = A.x,
                o = A.y,
                a = 0,
                s = 0;
            switch (e) {
                case "closest-side":
                    t === m.CIRCLE ? a = s = Math.min(Math.abs(i), Math.abs(i - r.width), Math.abs(o), Math.abs(o - r.height)) : t === m.ELLIPSE && (a = Math.min(Math.abs(i), Math.abs(i - r.width)), s = Math.min(Math.abs(o), Math.abs(o - r.height)));
                    break;
                case "closest-corner":
                    if (t === m.CIRCLE) a = s = Math.min((0, f.distance)(i, o), (0, f.distance)(i, o - r.height), (0, f.distance)(i - r.width, o), (0, f.distance)(i - r.width, o - r.height));
                    else if (t === m.ELLIPSE) {
                        var c = Math.min(Math.abs(o), Math.abs(o - r.height)) / Math.min(Math.abs(i), Math.abs(i - r.width)),
                            l = x(r, i, o, !0);
                        a = (0, f.distance)(l.x - i, (l.y - o) / c),
                        s = c * a
                    }
                    break;
                case "farthest-side":
                    t === m.CIRCLE ? a = s = Math.max(Math.abs(i), Math.abs(i - r.width), Math.abs(o), Math.abs(o - r.height)) : t === m.ELLIPSE && (a = Math.max(Math.abs(i), Math.abs(i - r.width)), s = Math.max(Math.abs(o), Math.abs(o - r.height)));
                    break;
                case "farthest-corner":
                    if (t === m.CIRCLE) a = s = Math.max((0, f.distance)(i, o), (0, f.distance)(i, o - r.height), (0, f.distance)(i - r.width, o), (0, f.distance)(i - r.width, o - r.height));
                    else if (t === m.ELLIPSE) {
                        var u = Math.max(Math.abs(o), Math.abs(o - r.height)) / Math.max(Math.abs(i), Math.abs(i - r.width)),
                            d = x(r, i, o, !1);
                        a = (0, f.distance)(d.x - i, (d.y - o) / u),
                        s = u * a
                    }
                    break;
                default:
                    a = n.x || 0,
                    s = void 0 !== n.y ? n.y : a
                }
            return {
                    x: a,
                    y: s
                }
        },
        T = t.transformWebkitRadialGradientArgs = function (e) {
            var t = "",
                A = "",
                n = "",
                r = "",
                i = 0,
                o = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i,
                a = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i,
                s = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i,
                c = e[i].match(o);
            c && i++;
            var l = e[i].match(a);
            l && (t = l[1] || "", n = l[2] || "", "contain" === n ? n = "closest-side" : "cover" === n && (n = "farthest-corner"), i++);
            var u = e[i].match(s);
            u && i++;
            var f = e[i].match(o);
            f && i++;
            var d = e[i].match(s);
            d && i++;
            var h = f || c;
            h && h[1] && (r = h[1] + (/^\d+$/.test(h[1]) ? "px" : ""), h[2] && (r += " " + h[2] + (/^\d+$/.test(h[2]) ? "px" : "")));
            var p = d || u;
            return p && (A = p[0], p[1] || (A += "px")),
            !r || t || A || n || (A = r, r = ""),
            r && (r = "at " + r),
            [
                    [t, n, A, r].filter(function (e) {
                        return !!e
                    }).join(" ")].concat(e.slice(i))
        },
        I = function (e) {
            return e.map(function (e) {
                return e.match(g)
            }).map(function (t, A) {
                if (!t) return e[A];
                switch (t[1]) {
                case "from":
                    return t[4] + " 0%";
                case "to":
                    return t[4] + " 100%";
                case "color-stop":
                    return "%" === t[3] ? t[4] + " " + t[2] : t[4] + " " + 100 * parseFloat(t[2]) + "%"
                }
            })
        }
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.NodeParser = void 0;
    var r = A(719),
        i = n(r),
        o = A(65),
        a = n(o),
        s = A(98),
        c = n(s),
        l = A(236),
        u = A(147),
        f = A(101),
        d = (t.NodeParser = function (e, t, A) {
            var n = 0,
                r = new a.
        default (e, null, t, n++),
                o = new i.
        default (r, null, !0);
            return h(e, r, o, t, n),
            o
        }, ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"]),
        h = function e(t, A, n, r, o) {
            for (var s, h = t.firstChild; h; h = s) {
                s = h.nextSibling;
                var B = h.ownerDocument.defaultView;
                if (h instanceof B.Text || h instanceof Text || B.parent && h instanceof B.parent.Text) h.data.trim().length > 0 && A.childNodes.push(c.
            default.fromTextNode(h, A));
                else if (h instanceof B.HTMLElement || h instanceof HTMLElement || B.parent && h instanceof B.parent.HTMLElement) {
                    if (-1 === d.indexOf(h.nodeName)) {
                        var w = new a.
                    default (h, A, r, o++);
                        if (w.isVisible()) {
                            "INPUT" === h.tagName ? (0, l.inlineInputElement)(h, w) : "TEXTAREA" === h.tagName ? (0, l.inlineTextAreaElement)(h, w) : "SELECT" === h.tagName ? (0, l.inlineSelectElement)(h, w) : w.style.listStyle && w.style.listStyle.listStyleType !== f.LIST_STYLE_TYPE.NONE && (0, u.inlineListItemElement)(h, w, r);
                            var m = "TEXTAREA" !== h.tagName,
                                v = p(w, h);
                            if (v || g(w)) {
                                    var y = v || w.isPositioned() ? n.getRealParentStackingContext() : n,
                                        E = new i.
                                default (w, y, v);
                                    y.contexts.push(E),
                                    m && e(h, w, E, r, o)
                                } else n.children.push(w),
                            m && e(h, w, n, r, o)
                        }
                    }
                } else if (h instanceof B.SVGSVGElement || h instanceof SVGSVGElement || B.parent && h instanceof B.parent.SVGSVGElement) {
                    var Q = new a.
                default (h, A, r, o++),
                        C = p(Q, h);
                    if (C || g(Q)) {
                            var U = C || Q.isPositioned() ? n.getRealParentStackingContext() : n,
                                b = new i.
                        default (Q, U, C);
                            U.contexts.push(b)
                        } else n.children.push(Q)
                }
            }
        },
        p = function (e, t) {
            return e.isRootElement() || e.isPositionedWithZIndex() || e.style.opacity < 1 || e.isTransformed() || B(e, t)
        },
        g = function (e) {
            return e.isPositioned() || e.isFloating()
        },
        B = function (e, t) {
            return "BODY" === t.nodeName && e.parent instanceof a.
        default && e.parent.style.background.backgroundColor.isTransparent()
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseContent = t.resolvePseudoContent = t.popCounters = t.parseCounterReset = t.TOKEN_TYPE = t.PSEUDO_CONTENT_ITEM_TYPE = void 0;
    var n = function () {
        function e(e, t) {
            var A = [],
                n = !0,
                r = !1,
                i = void 0;
            try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (A.push(o.value), !t || A.length !== t); n = !0);
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        !n && a.
                        return &&a.
                        return ()
                    } finally {
                        if (r) throw i
                    }
                }
            return A
        }
        return function (t, A) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, A);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        r = A(147),
        i = A(101),
        o = t.PSEUDO_CONTENT_ITEM_TYPE = {
            TEXT: 0,
            IMAGE: 1
        },
        a = t.TOKEN_TYPE = {
            STRING: 0,
            ATTRIBUTE: 1,
            URL: 2,
            COUNTER: 3,
            COUNTERS: 4,
            OPENQUOTE: 5,
            CLOSEQUOTE: 6
        },
        s = (t.parseCounterReset = function (e, t) {
            if (!e || !e.counterReset || "none" === e.counterReset) return [];
            for (var A = [], r = e.counterReset.split(/\s*,\s*/), i = r.length, o = 0; o < i; o++) {
                var a = r[o].split(/\s+/),
                    s = n(a, 2),
                    c = s[0],
                    l = s[1];
                A.push(c);
                var u = t.counters[c];
                u || (u = t.counters[c] = []),
                u.push(parseInt(l || 0, 10))
            }
            return A
        }, t.popCounters = function (e, t) {
            for (var A = e.length, n = 0; n < A; n++) t.counters[e[n]].pop()
        }, t.resolvePseudoContent = function (e, t, A) {
            if (!t || !t.content || "none" === t.content || "-moz-alt-content" === t.content || "none" === t.display) return null;
            var r = s(t.content),
                i = r.length,
                c = [],
                f = "",
                d = t.counterIncrement;
            if (d && "none" !== d) {
                    var h = d.split(/\s+/),
                        p = n(h, 2),
                        g = p[0],
                        B = p[1],
                        w = A.counters[g];
                    w && (w[w.length - 1] += void 0 === B ? 1 : parseInt(B, 10))
                }
            for (var m = 0; m < i; m++) {
                    var v = r[m];
                    switch (v.type) {
                    case a.STRING:
                        f += v.value || "";
                        break;
                    case a.ATTRIBUTE:
                        e instanceof HTMLElement && v.value && (f += e.getAttribute(v.value) || "");
                        break;
                    case a.COUNTER:
                        var y = A.counters[v.name || ""];
                        y && (f += u([y[y.length - 1]], "", v.format));
                        break;
                    case a.COUNTERS:
                        var E = A.counters[v.name || ""];
                        E && (f += u(E, v.glue, v.format));
                        break;
                    case a.OPENQUOTE:
                        f += l(t, !0, A.quoteDepth),
                        A.quoteDepth++;
                        break;
                    case a.CLOSEQUOTE:
                        A.quoteDepth--,
                        f += l(t, !1, A.quoteDepth);
                        break;
                    case a.URL:
                        f && (c.push({
                            type: o.TEXT,
                            value: f
                        }), f = ""),
                        c.push({
                            type: o.IMAGE,
                            value: v.value || ""
                        })
                    }
                }
            return f && c.push({
                    type: o.TEXT,
                    value: f
                }),
            c
        }, t.parseContent = function (e, t) {
            if (t && t[e]) return t[e];
            for (var A = [], n = e.length, r = !1, i = !1, o = !1, s = "", l = "", u = [], f = 0; f < n; f++) {
                var d = e.charAt(f);
                switch (d) {
                case "'":
                case '"':
                    i ? s += d : (r = !r, o || r || (A.push({
                        type: a.STRING,
                        value: s
                    }), s = ""));
                    break;
                case "\\":
                    i ? (s += d, i = !1) : i = !0;
                    break;
                case "(":
                    r ? s += d : (o = !0, l = s, s = "", u = []);
                    break;
                case ")":
                    if (r) s += d;
                    else if (o) {
                        switch (s && u.push(s), l) {
                        case "attr":
                            u.length > 0 && A.push({
                                type: a.ATTRIBUTE,
                                value: u[0]
                            });
                            break;
                        case "counter":
                            if (u.length > 0) {
                                var h = {
                                    type: a.COUNTER,
                                    name: u[0]
                                };
                                u.length > 1 && (h.format = u[1]),
                                A.push(h)
                            }
                            break;
                        case "counters":
                            if (u.length > 0) {
                                var p = {
                                    type: a.COUNTERS,
                                    name: u[0]
                                };
                                u.length > 1 && (p.glue = u[1]),
                                u.length > 2 && (p.format = u[2]),
                                A.push(p)
                            }
                            break;
                        case "url":
                            u.length > 0 && A.push({
                                type: a.URL,
                                value: u[0]
                            })
                        }
                        o = !1,
                        s = ""
                    }
                    break;
                case ",":
                    r ? s += d : o && (u.push(s), s = "");
                    break;
                case " ":
                case "\t":
                    r ? s += d : s && (c(A, s), s = "");
                    break;
                default:
                    s += d
                }
                "\\" !== d && (i = !1)
            }
            return s && c(A, s),
            t && (t[e] = A),
            A
        }),
        c = function (e, t) {
            switch (t) {
            case "open-quote":
                e.push({
                    type: a.OPENQUOTE
                });
                break;
            case "close-quote":
                e.push({
                    type: a.CLOSEQUOTE
                })
            }
        },
        l = function (e, t, A) {
            var n = e.quotes ? e.quotes.split(/\s+/) : ["'\"'", "'\"'"],
                r = 2 * A;
            return r >= n.length && (r = n.length - 2),
            t || ++r,
            n[r].replace(/^["']|["']$/g, "")
        },
        u = function (e, t, A) {
            for (var n = e.length, o = "", a = 0; a < n; a++) a > 0 && (o += t || ""),
            o += (0, r.createCounterText)(e[a], (0, i.parseListStyleType)(A || "decimal"), !1);
            return o
        }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            var A = [],
                n = !0,
                r = !1,
                i = void 0;
            try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (A.push(o.value), !t || A.length !== t); n = !0);
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        !n && a.
                        return &&a.
                        return ()
                    } finally {
                        if (r) throw i
                    }
                }
            return A
        }
        return function (t, A) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, A);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        i = function () {
            function e(e, t) {
                for (var A = 0; A < t.length; A++) {
                    var n = t[A];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, A, n) {
                return A && e(t.prototype, A),
                n && e(t, n),
                t
            }
        }(),
        o = A(36),
        a = (A(235), A(714)),
        s = A(98),
        c = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(s),
        l = A(73),
        u = A(148),
        f = function () {
            function e(t, A) {
                n(this, e),
                this.target = t,
                this.options = A,
                t.render(A)
            }
            return i(e, [{
                key: "renderNode",
                value: function (e) {
                    e.isVisible() && (this.renderNodeBackgroundAndBorders(e), this.renderNodeContent(e))
                }
            },
            {
                key: "renderNodeContent",
                value: function (e) {
                    var t = this,
                        A = function () {
                            if (e.childNodes.length && e.childNodes.forEach(function (A) {
                                if (A instanceof c.
                            default) {
                                    var n = A.parent.style;
                                    t.target.renderTextNode(A.bounds, n.color, n.font, n.textDecoration, n.textShadow)
                                } else t.target.drawShape(A, e.style.color)
                            }), e.image) {
                                var A = t.options.imageStore.get(e.image);
                                if (A) {
                                    var n = (0, o.calculateContentBox)(e.bounds, e.style.padding, e.style.border),
                                        r = "number" == typeof A.width && A.width > 0 ? A.width : n.width,
                                        i = "number" == typeof A.height && A.height > 0 ? A.height : n.height;
                                    r > 0 && i > 0 && t.target.clip([(0, o.calculatePaddingBoxPath)(e.curvedBounds)], function () {
                                            t.target.drawImage(A, new o.Bounds(0, 0, r, i), n)
                                        })
                                }
                            }
                        },
                        n = e.getClipPaths();
                    n.length ? this.target.clip(n, A) : A()
                }
            },
            {
                key: "renderNodeBackgroundAndBorders",
                value: function (e) {
                    var t = this,
                        A = !e.style.background.backgroundColor.isTransparent() || e.style.background.backgroundImage.length,
                        n = e.style.border.some(function (e) {
                            return e.borderStyle !== u.BORDER_STYLE.NONE && !e.borderColor.isTransparent()
                        }),
                        r = function () {
                            var n = (0, l.calculateBackgroungPaintingArea)(e.curvedBounds, e.style.background.backgroundClip);
                            A && t.target.clip([n], function () {
                                e.style.background.backgroundColor.isTransparent() || t.target.fill(e.style.background.backgroundColor),
                                t.renderBackgroundImage(e)
                            }),
                            e.style.border.forEach(function (A, n) {
                                A.borderStyle === u.BORDER_STYLE.NONE || A.borderColor.isTransparent() || t.renderBorder(A, n, e.curvedBounds)
                            })
                        };
                    if (A || n) {
                            var i = e.parent ? e.parent.getClipPaths() : [];
                            i.length ? this.target.clip(i, r) : r()
                        }
                }
            },
            {
                key: "renderBackgroundImage",
                value: function (e) {
                    var t = this;
                    e.style.background.backgroundImage.slice(0).reverse().forEach(function (A) {
                        "url" === A.source.method && A.source.args.length ? t.renderBackgroundRepeat(e, A) : /gradient/i.test(A.source.method) && t.renderBackgroundGradient(e, A)
                    })
                }
            },
            {
                key: "renderBackgroundRepeat",
                value: function (e, t) {
                    var A = this.options.imageStore.get(t.source.args[0]);
                    if (A) {
                        var n = (0, l.calculateBackgroungPositioningArea)(e.style.background.backgroundOrigin, e.bounds, e.style.padding, e.style.border),
                            r = (0, l.calculateBackgroundSize)(t, A, n),
                            i = (0, l.calculateBackgroundPosition)(t.position, r, n),
                            o = (0, l.calculateBackgroundRepeatPath)(t, i, r, n, e.bounds),
                            a = Math.round(n.left + i.x),
                            s = Math.round(n.top + i.y);
                        this.target.renderRepeat(o, A, r, a, s)
                    }
                }
            },
            {
                key: "renderBackgroundGradient",
                value: function (e, t) {
                    var A = (0, l.calculateBackgroungPositioningArea)(e.style.background.backgroundOrigin, e.bounds, e.style.padding, e.style.border),
                        n = (0, l.calculateGradientBackgroundSize)(t, A),
                        r = (0, l.calculateBackgroundPosition)(t.position, n, A),
                        i = new o.Bounds(Math.round(A.left + r.x), Math.round(A.top + r.y), n.width, n.height),
                        s = (0, a.parseGradient)(e, t.source, i);
                    if (s) switch (s.type) {
                        case a.GRADIENT_TYPE.LINEAR_GRADIENT:
                            this.target.renderLinearGradient(i, s);
                            break;
                        case a.GRADIENT_TYPE.RADIAL_GRADIENT:
                            this.target.renderRadialGradient(i, s)
                        }
                }
            },
            {
                key: "renderBorder",
                value: function (e, t, A) {
                    this.target.drawShape((0, o.parsePathForBorder)(A, t), e.borderColor)
                }
            },
            {
                key: "renderStack",
                value: function (e) {
                    var t = this;
                    if (e.container.isVisible()) {
                        var A = e.getOpacity();
                        A !== this._opacity && (this.target.setOpacity(e.getOpacity()), this._opacity = A);
                        var n = e.container.style.transform;
                        null !== n ? this.target.transform(e.container.bounds.left + n.transformOrigin[0].value, e.container.bounds.top + n.transformOrigin[1].value, n.transform, function () {
                            return t.renderStackContent(e)
                        }) : this.renderStackContent(e)
                    }
                }
            },
            {
                key: "renderStackContent",
                value: function (e) {
                    var t = h(e),
                        A = r(t, 5),
                        n = A[0],
                        i = A[1],
                        o = A[2],
                        a = A[3],
                        s = A[4],
                        c = d(e),
                        l = r(c, 2),
                        u = l[0],
                        f = l[1];
                    this.renderNodeBackgroundAndBorders(e.container),
                    n.sort(p).forEach(this.renderStack, this),
                    this.renderNodeContent(e.container),
                    f.forEach(this.renderNode, this),
                    a.forEach(this.renderStack, this),
                    s.forEach(this.renderStack, this),
                    u.forEach(this.renderNode, this),
                    i.forEach(this.renderStack, this),
                    o.sort(p).forEach(this.renderStack, this)
                }
            },
            {
                key: "render",
                value: function (e) {
                    this.options.backgroundColor && this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor),
                    this.renderStack(e);
                    var t = this.target.getTarget();
                    return t
                }
            }]),
            e
        }();
    t.
default = f;
    var d = function (e) {
            for (var t = [], A = [], n = e.children.length, r = 0; r < n; r++) {
                var i = e.children[r];
                i.isInlineLevel() ? t.push(i) : A.push(i)
            }
            return [t, A]
        },
        h = function (e) {
            for (var t = [], A = [], n = [], r = [], i = [], o = e.contexts.length, a = 0; a < o; a++) {
                var s = e.contexts[a];
                s.container.isPositioned() || s.container.style.opacity < 1 || s.container.isTransformed() ? s.container.style.zIndex.order < 0 ? t.push(s) : s.container.style.zIndex.order > 0 ? n.push(s) : A.push(s) : s.container.isFloating() ? r.push(s) : i.push(s)
            }
            return [t, A, n, r, i]
        },
        p = function (e, t) {
            return e.container.style.zIndex.order > t.container.style.zIndex.order ? 1 : e.container.style.zIndex.order < t.container.style.zIndex.order ? -1 : e.container.index > t.container.index ? 1 : -1
        }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ResourceStore = void 0;
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = A(97),
        o = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(i),
        a = A(238),
        s = function () {
            function e(t, A, r) {
                n(this, e),
                this.options = t,
                this._window = r,
                this.origin = this.getOrigin(r.location.href),
                this.cache = {},
                this.logger = A,
                this._index = 0
            }
            return r(e, [{
                key: "loadImage",
                value: function (e) {
                    var t = this;
                    if (this.hasResourceInCache(e)) return e;
                    if (!p(e) || o.
                default.SUPPORT_SVG_DRAWING) {
                        if (!0 === this.options.allowTaint || d(e) || this.isSameOrigin(e)) return this.addImage(e, e, !1);
                        if (!this.isSameOrigin(e)) {
                            if ("string" == typeof this.options.proxy) return this.cache[e] = (0, a.Proxy)(e, this.options).then(function (e) {
                                return g(e, t.options.imageTimeout || 0)
                            }),
                            e;
                            if (!0 === this.options.useCORS && o.
                        default.SUPPORT_CORS_IMAGES) return this.addImage(e, e, !0)
                        }
                    }
                }
            },
            {
                key: "inlineImage",
                value: function (e) {
                    var t = this;
                    return d(e) ? g(e, this.options.imageTimeout || 0) : this.hasResourceInCache(e) ? this.cache[e] : this.isSameOrigin(e) || "string" != typeof this.options.proxy ? this.xhrImage(e) : this.cache[e] = (0, a.Proxy)(e, this.options).then(function (e) {
                        return g(e, t.options.imageTimeout || 0)
                    })
                }
            },
            {
                key: "xhrImage",
                value: function (e) {
                    var t = this;
                    return this.cache[e] = new Promise(function (A, n) {
                        var r = new XMLHttpRequest;
                        if (r.onreadystatechange = function () {
                            if (4 === r.readyState) if (200 !== r.status) n("Failed to fetch image " + e.substring(0, 256) + " with status code " + r.status);
                            else {
                                var t = new FileReader;
                                t.addEventListener("load", function () {
                                    var e = t.result;
                                    A(e)
                                }, !1),
                                t.addEventListener("error", function (e) {
                                    return n(e)
                                }, !1),
                                t.readAsDataURL(r.response)
                            }
                        }, r.responseType = "blob", t.options.imageTimeout) {
                            var i = t.options.imageTimeout;
                            r.timeout = i,
                            r.ontimeout = function () {
                                return n("")
                            }
                        }
                        r.open("GET", e, !0),
                        r.send()
                    }).then(function (e) {
                        return g(e, t.options.imageTimeout || 0)
                    }),
                    this.cache[e]
                }
            },
            {
                key: "loadCanvas",
                value: function (e) {
                    var t = String(this._index++);
                    return this.cache[t] = Promise.resolve(e),
                    t
                }
            },
            {
                key: "hasResourceInCache",
                value: function (e) {
                    return void 0 !== this.cache[e]
                }
            },
            {
                key: "addImage",
                value: function (e, t, A) {
                    var n = this,
                        r = function (e) {
                            return new Promise(function (r, i) {
                                var o = new Image;
                                if (o.onload = function () {
                                    return r(o)
                                }, e && !A || (o.crossOrigin = "anonymous"), o.onerror = i, o.src = t, !0 === o.complete && setTimeout(function () {
                                    r(o)
                                }, 500), n.options.imageTimeout) {
                                    var a = n.options.imageTimeout;
                                    setTimeout(function () {
                                        return i("")
                                    }, a)
                                }
                            })
                        };
                    return this.cache[e] = h(t) && !p(t) ? o.
                default.SUPPORT_BASE64_DRAWING(t).then(r):
                    r(!0),
                    e
                }
            },
            {
                key: "isSameOrigin",
                value: function (e) {
                    return this.getOrigin(e) === this.origin
                }
            },
            {
                key: "getOrigin",
                value: function (e) {
                    var t = this._link || (this._link = this._window.document.createElement("a"));
                    return t.href = e,
                    t.href = t.href,
                    t.protocol + t.hostname + t.port
                }
            },
            {
                key: "ready",
                value: function () {
                    var e = this,
                        t = Object.keys(this.cache),
                        A = t.map(function (t) {
                            return e.cache[t].
                            catch (function (e) {
                                return null
                            })
                        });
                    return Promise.all(A).then(function (e) {
                            return new c(t, e)
                        })
                }
            }]),
            e
        }();
    t.
default = s;
    var c = t.ResourceStore = function () {
            function e(t, A) {
                n(this, e),
                this._keys = t,
                this._resources = A
            }
            return r(e, [{
                key: "get",
                value: function (e) {
                    var t = this._keys.indexOf(e);
                    return -1 === t ? null : this._resources[t]
                }
            }]),
            e
        }(),
        l = /^data:image\/svg\+xml/i,
        u = /^data:image\/.*;base64,/i,
        f = /^data:image\/.*/i,
        d = function (e) {
            return f.test(e)
        },
        h = function (e) {
            return u.test(e)
        },
        p = function (e) {
            return "svg" === e.substr(-3).toLowerCase() || l.test(e)
        },
        g = function (e, t) {
            return new Promise(function (A, n) {
                var r = new Image;
                r.onload = function () {
                    return A(r)
                },
                r.onerror = n,
                r.src = e,
                !0 === r.complete && setTimeout(function () {
                    A(r)
                }, 500),
                t && setTimeout(function () {
                    return n("")
                }, t)
            })
        }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = A(65),
        o = (function (e) {
            e && e.__esModule
        }(i), A(243), function () {
            function e(t, A, r) {
                n(this, e),
                this.container = t,
                this.parent = A,
                this.contexts = [],
                this.children = [],
                this.treatAsRealStackingContext = r
            }
            return r(e, [{
                key: "getOpacity",
                value: function () {
                    return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity
                }
            },
            {
                key: "getRealParentStackingContext",
                value: function () {
                    return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext()
                }
            }]),
            e
        }());
    t.
default = o
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.renderElement = void 0;
    var r = function () {
        function e(e, t) {
            var A = [],
                n = !0,
                r = !1,
                i = void 0;
            try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (A.push(o.value), !t || A.length !== t); n = !0);
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        !n && a.
                        return &&a.
                        return ()
                    } finally {
                        if (r) throw i
                    }
                }
            return A
        }
        return function (t, A) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, A);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        i = A(237),
        o = (n(i), A(715)),
        a = A(717),
        s = n(a),
        c = A(246),
        l = n(c),
        u = A(97),
        f = n(u),
        d = A(36),
        h = A(713),
        p = A(235),
        g = A(37),
        B = n(g);
    t.renderElement = function e(t, A, n) {
            var i = t.ownerDocument,
                a = new d.Bounds(A.scrollX, A.scrollY, A.windowWidth, A.windowHeight),
                c = i.documentElement ? new B.
        default (getComputedStyle(i.documentElement).backgroundColor):
            g.TRANSPARENT,
                u = i.body ? new B.
        default (getComputedStyle(i.body).backgroundColor):
            g.TRANSPARENT,
                w = t === i.documentElement ? c.isTransparent() ? u.isTransparent() ? A.backgroundColor ? new B.
        default (A.backgroundColor):
            null : u : c : A.backgroundColor ? new B.
        default (A.backgroundColor):
            null;
            return (A.foreignObjectRendering ? f.
            default.SUPPORT_FOREIGNOBJECT_DRAWING:
                Promise.resolve(!1)).then(function (c) {
                    return c ?
                    function (e) {
                        return e.inlineFonts(i).then(function () {
                            return e.resourceLoader.ready()
                        }).then(function () {
                            return new l.
                        default (e.documentElement).render({
                                backgroundColor: w,
                                logger: n,
                                scale: A.scale,
                                x: A.x,
                                y: A.y,
                                width: A.width,
                                height: A.height,
                                windowWidth: A.windowWidth,
                                windowHeight: A.windowHeight,
                                scrollX: A.scrollX,
                                scrollY: A.scrollY
                            })
                        })
                    }(new h.DocumentCloner(t, A, n, !0, e)) : (0, h.cloneWindow)(i, a, t, A, n, e).then(function (e) {
                        var t = r(e, 3),
                            i = t[0],
                            a = t[1],
                            c = t[2],
                            l = (0, o.NodeParser)(a, c, n),
                            u = a.ownerDocument;
                        return w === l.container.style.background.backgroundColor && (l.container.style.background.backgroundColor = g.TRANSPARENT),
                        c.ready().then(function (e) {
                                var t = new p.FontMetrics(u),
                                    r = {
                                        backgroundColor: w,
                                        fontMetrics: t,
                                        imageStore: e,
                                        logger: n,
                                        scale: A.scale,
                                        x: A.x,
                                        y: A.y,
                                        width: A.width,
                                        height: A.height
                                    };
                                if (Array.isArray(A.target)) return Promise.all(A.target.map(function (e) {
                                        return new s.
                                    default (e, r).render(l)
                                    }));
                                var o = new s.
                            default (A.target, r),
                                    a = o.render(l);
                                return !0 === A.removeContainer && i.parentNode && i.parentNode.removeChild(i),
                                a
                            })
                    })
                })
        }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            for (var A = 0; A < t.length; A++) {
                var n = t[A];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, A, n) {
            return A && e(t.prototype, A),
            n && e(t, n),
            t
        }
    }(),
        i = A(99),
        o = A(100),
        a = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(o),
        s = function (e, t, A) {
            return new a.
        default (e.x + (t.x - e.x) * A, e.y + (t.y - e.y) * A)
        },
        c = function () {
            function e(t, A, r, o) {
                n(this, e),
                this.type = i.PATH.BEZIER_CURVE,
                this.start = t,
                this.startControl = A,
                this.endControl = r,
                this.end = o
            }
            return r(e, [{
                key: "subdivide",
                value: function (t, A) {
                    var n = s(this.start, this.startControl, t),
                        r = s(this.startControl, this.endControl, t),
                        i = s(this.endControl, this.end, t),
                        o = s(n, r, t),
                        a = s(r, i, t),
                        c = s(o, a, t);
                    return A ? new e(this.start, n, o, c) : new e(c, a, i, this.end)
                }
            },
            {
                key: "reverse",
                value: function () {
                    return new e(this.end, this.endControl, this.startControl, this.start)
                }
            }]),
            e
        }();
    t.
default = c
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = A(99),
        i = function e(t, A, i) {
            n(this, e),
            this.type = r.PATH.CIRCLE,
            this.x = t,
            this.y = A,
            this.radius = i
        };
    t.
default = i
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function e(t, A) {
        n(this, e),
        this.width = t,
        this.height = A
    };
    t.
default = r
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    var r = Object.assign ||
    function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var A = arguments[t];
            for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n])
        }
        return e
    },
        i = A(245),
        o = n(i),
        a = A(237),
        s = n(a),
        c = A(720),
        l = A(36),
        u = function (e, t) {
            var A = t || {},
                n = new s.
        default ("boolean" != typeof A.logging || A.logging);
            n.log("html2canvas $npm_package_version");
            var i = e.ownerDocument;
            if (!i) return Promise.reject("Provided element is not within a Document");
            var a = i.defaultView,
                u = a.pageXOffset,
                f = a.pageYOffset,
                d = "HTML" === e.tagName || "BODY" === e.tagName,
                h = d ? (0, l.parseDocumentSize)(i):
            (0, l.parseBounds)(e, u, f),
                p = h.width,
                g = h.height,
                B = h.left,
                w = h.top,
                m = {
                    async: !0,
                    allowTaint: !1,
                    backgroundColor: "#ffffff",
                    imageTimeout: 15e3,
                    logging: !0,
                    proxy: null,
                    removeContainer: !0,
                    foreignObjectRendering: !1,
                    scale: a.devicePixelRatio || 1,
                    target: new o.
                default (A.canvas),
                    useCORS:
                    !1,
                    x: B,
                    y: w,
                    width: Math.ceil(p),
                    height: Math.ceil(g),
                    windowWidth: a.innerWidth,
                    windowHeight: a.innerHeight,
                    scrollX: a.pageXOffset,
                    scrollY: a.pageYOffset
                },
                v = (0, c.renderElement)(e, r({}, m, A), n);
            return v
        };
    u.CanvasRenderer = o.
default,
    e.exports = u
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseBorderRadius = void 0;
    var n = function () {
        function e(e, t) {
            var A = [],
                n = !0,
                r = !1,
                i = void 0;
            try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (A.push(o.value), !t || A.length !== t); n = !0);
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        !n && a.
                        return &&a.
                        return ()
                    } finally {
                        if (r) throw i
                    }
                }
            return A
        }
        return function (t, A) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, A);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        r = A(53),
        i = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(r),
        o = ["top-left", "top-right", "bottom-right", "bottom-left"];
    t.parseBorderRadius = function (e) {
            return o.map(function (t) {
                var A = e.getPropertyValue("border-" + t + "-radius"),
                    r = A.split(" ").map(i.
                default.create),
                    o = n(r, 2),
                    a = o[0],
                    s = o[1];
                return void 0 === s ? [a, a] : [a, s]
            })
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.DISPLAY = {
        NONE: 1,
        BLOCK: 2,
        INLINE: 4,
        RUN_IN: 8,
        FLOW: 16,
        FLOW_ROOT: 32,
        TABLE: 64,
        FLEX: 128,
        GRID: 256,
        RUBY: 512,
        SUBGRID: 1024,
        LIST_ITEM: 2048,
        TABLE_ROW_GROUP: 4096,
        TABLE_HEADER_GROUP: 8192,
        TABLE_FOOTER_GROUP: 16384,
        TABLE_ROW: 32768,
        TABLE_CELL: 65536,
        TABLE_COLUMN_GROUP: 1 << 17,
        TABLE_COLUMN: 1 << 18,
        TABLE_CAPTION: 1 << 19,
        RUBY_BASE: 1 << 20,
        RUBY_TEXT: 1 << 21,
        RUBY_BASE_CONTAINER: 1 << 22,
        RUBY_TEXT_CONTAINER: 1 << 23,
        CONTENTS: 1 << 24,
        INLINE_BLOCK: 1 << 25,
        INLINE_LIST_ITEM: 1 << 26,
        INLINE_TABLE: 1 << 27,
        INLINE_FLEX: 1 << 28,
        INLINE_GRID: 1 << 29
    },
        r = function (e) {
            switch (e) {
            case "block":
                return n.BLOCK;
            case "inline":
                return n.INLINE;
            case "run-in":
                return n.RUN_IN;
            case "flow":
                return n.FLOW;
            case "flow-root":
                return n.FLOW_ROOT;
            case "table":
                return n.TABLE;
            case "flex":
                return n.FLEX;
            case "grid":
                return n.GRID;
            case "ruby":
                return n.RUBY;
            case "subgrid":
                return n.SUBGRID;
            case "list-item":
                return n.LIST_ITEM;
            case "table-row-group":
                return n.TABLE_ROW_GROUP;
            case "table-header-group":
                return n.TABLE_HEADER_GROUP;
            case "table-footer-group":
                return n.TABLE_FOOTER_GROUP;
            case "table-row":
                return n.TABLE_ROW;
            case "table-cell":
                return n.TABLE_CELL;
            case "table-column-group":
                return n.TABLE_COLUMN_GROUP;
            case "table-column":
                return n.TABLE_COLUMN;
            case "table-caption":
                return n.TABLE_CAPTION;
            case "ruby-base":
                return n.RUBY_BASE;
            case "ruby-text":
                return n.RUBY_TEXT;
            case "ruby-base-container":
                return n.RUBY_BASE_CONTAINER;
            case "ruby-text-container":
                return n.RUBY_TEXT_CONTAINER;
            case "contents":
                return n.CONTENTS;
            case "inline-block":
                return n.INLINE_BLOCK;
            case "inline-list-item":
                return n.INLINE_LIST_ITEM;
            case "inline-table":
                return n.INLINE_TABLE;
            case "inline-flex":
                return n.INLINE_FLEX;
            case "inline-grid":
                return n.INLINE_GRID
            }
            return n.NONE
        },
        i = function (e, t) {
            return e | r(t)
        };
    t.parseDisplay = function (e) {
            return e.split(" ").reduce(i, 0)
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.FLOAT = {
        NONE: 0,
        LEFT: 1,
        RIGHT: 2,
        INLINE_START: 3,
        INLINE_END: 4
    };
    t.parseCSSFloat = function (e) {
        switch (e) {
        case "left":
            return n.LEFT;
        case "right":
            return n.RIGHT;
        case "inline-start":
            return n.INLINE_START;
        case "inline-end":
            return n.INLINE_END
        }
        return n.NONE
    }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e) {
        switch (e) {
        case "normal":
            return 400;
        case "bold":
            return 700
        }
        var t = parseInt(e, 10);
        return isNaN(t) ? 400 : t
    };
    t.parseFont = function (e) {
        return {
            fontFamily: e.fontFamily,
            fontSize: e.fontSize,
            fontStyle: e.fontStyle,
            fontVariant: e.fontVariant,
            fontWeight: n(e.fontWeight)
        }
    }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.parseLetterSpacing = function (e) {
        if ("normal" === e) return 0;
        var t = parseFloat(e);
        return isNaN(t) ? 0 : t
    }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.LINE_BREAK = {
        NORMAL: "normal",
        STRICT: "strict"
    };
    t.parseLineBreak = function (e) {
        switch (e) {
        case "strict":
            return n.STRICT;
        case "normal":
        default:
            return n.NORMAL
        }
    }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseMargin = void 0;
    var n = A(53),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n),
        i = ["top", "right", "bottom", "left"];
    t.parseMargin = function (e) {
            return i.map(function (t) {
                return new r.
            default (e.getPropertyValue("margin-" + t))
            })
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.OVERFLOW = {
        VISIBLE: 0,
        HIDDEN: 1,
        SCROLL: 2,
        AUTO: 3
    };
    t.parseOverflow = function (e) {
        switch (e) {
        case "hidden":
            return n.HIDDEN;
        case "scroll":
            return n.SCROLL;
        case "auto":
            return n.AUTO;
        case "visible":
        default:
            return n.VISIBLE
        }
    }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseTextShadow = void 0;
    var n = A(37),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n),
        i = /^([+-]|\d|\.)$/i;
    t.parseTextShadow = function (e) {
            if ("none" === e || "string" != typeof e) return null;
            for (var t = "", A = !1, n = [], o = [], a = 0, s = null, c = function () {
                t.length && (A ? n.push(parseFloat(t)) : s = new r.
            default (t)),
                A = !1,
                t = ""
            }, l = function () {
                n.length && null !== s && o.push({
                    color: s,
                    offsetX: n[0] || 0,
                    offsetY: n[1] || 0,
                    blur: n[2] || 0
                }),
                n.splice(0, n.length),
                s = null
            }, u = 0; u < e.length; u++) {
                var f = e[u];
                switch (f) {
                case "(":
                    t += f,
                    a++;
                    break;
                case ")":
                    t += f,
                    a--;
                    break;
                case ",":
                    0 === a ? (c(), l()) : t += f;
                    break;
                case " ":
                    0 === a ? c() : t += f;
                    break;
                default:
                    0 === t.length && i.test(f) && (A = !0),
                    t += f
                }
            }
            return c(),
            l(),
            0 === o.length ? null : o
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.parseTransform = void 0;
    var n = A(53),
        r = function (e) {
            return e && e.__esModule ? e : {
            default:
                e
            }
        }(n),
        i = function (e) {
            return parseFloat(e.trim())
        },
        o = /(matrix|matrix3d)\((.+)\)/,
        a = (t.parseTransform = function (e) {
            var t = s(e.transform || e.webkitTransform || e.mozTransform || e.msTransform || e.oTransform);
            return null === t ? null : {
                transform: t,
                transformOrigin: a(e.transformOrigin || e.webkitTransformOrigin || e.mozTransformOrigin || e.msTransformOrigin || e.oTransformOrigin)
            }
        }, function (e) {
            if ("string" != typeof e) {
                var t = new r.
            default ("0");
                return [t, t]
            }
            var A = e.split(" ").map(r.
        default.create);
            return [A[0], A[1]]
        }),
        s = function (e) {
            if ("none" === e || "string" != typeof e) return null;
            var t = e.match(o);
            if (t) {
                if ("matrix" === t[1]) {
                    var A = t[2].split(",").map(i);
                    return [A[0], A[1], A[2], A[3], A[4], A[5]]
                }
                var n = t[2].split(",").map(i);
                return [n[0], n[1], n[4], n[5], n[12], n[13]]
            }
            return null
        }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.VISIBILITY = {
        VISIBLE: 0,
        HIDDEN: 1,
        COLLAPSE: 2
    };
    t.parseVisibility = function (e) {
        switch (e) {
        case "hidden":
            return n.HIDDEN;
        case "collapse":
            return n.COLLAPSE;
        case "visible":
        default:
            return n.VISIBLE
        }
    }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = t.WORD_BREAK = {
        NORMAL: "normal",
        BREAK_ALL: "break-all",
        KEEP_ALL: "keep-all"
    };
    t.parseWordBreak = function (e) {
        switch (e) {
        case "break-all":
            return n.BREAK_ALL;
        case "keep-all":
            return n.KEEP_ALL;
        case "normal":
        default:
            return n.NORMAL
        }
    }
},


function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.parseZIndex = function (e) {
        var t = "auto" === e;
        return {
            auto: t,
            order: t ? 0 : parseInt(e, 10)
        }
    }
},


function (e, t, A) {
    (function (t) {
        var A, A;
        !
        function (t) {
            e.exports = t()
        }(function () {
            return function e(t, n, r) {
                function i(a, s) {
                    if (!n[a]) {
                        if (!t[a]) {
                            var c = "function" == typeof A && A;
                            if (!s && c) return A(a, !0);
                            if (o) return o(a, !0);
                            var l = new Error("Cannot find module '" + a + "'");
                            throw l.code = "MODULE_NOT_FOUND",
                            l
                        }
                        var u = n[a] = {
                            exports: {}
                        };
                        t[a][0].call(u.exports, function (e) {
                            var A = t[a][1][e];
                            return i(A || e)
                        }, u, u.exports, e, t, n, r)
                    }
                    return n[a].exports
                }
                for (var o = "function" == typeof A && A, a = 0; a < r.length; a++) i(r[a]);
                return i
            }({
                1: [function (e, t, A) {
                    /*
                     object-assign
                     (c) Sindre Sorhus
                     @license MIT
                     */
                    "use strict";

                    function n(e) {
                        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }
                    var r = Object.getOwnPropertySymbols,
                        i = Object.prototype.hasOwnProperty,
                        o = Object.prototype.propertyIsEnumerable;
                    t.exports = function () {
                            try {
                                if (!Object.assign) return !1;
                                var e = new String("abc");
                                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                                for (var t = {}, A = 0; A < 10; A++) t["_" + String.fromCharCode(A)] = A;
                                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                                    return t[e]
                                }).join("")) return !1;
                                var n = {};
                                return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                                    n[e] = e
                                }),
                                "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                            } catch (e) {
                                return !1
                            }
                        }() ? Object.assign : function (e, t) {
                            for (var A, a, s = n(e), c = 1; c < arguments.length; c++) {
                                A = Object(arguments[c]);
                                for (var l in A) i.call(A, l) && (s[l] = A[l]);
                                if (r) {
                                    a = r(A);
                                    for (var u = 0; u < a.length; u++) o.call(A, a[u]) && (s[a[u]] = A[a[u]])
                                }
                            }
                            return s
                        }
                },
                {}],
                2: [function (e, t, A) {
                    (function (e) {
                        (function () {
                            var A, n, r, i, o, a;
                            "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function () {
                                return performance.now()
                            } : void 0 !== e && null !== e && e.hrtime ? (t.exports = function () {
                                return (A() - o) / 1e6
                            }, n = e.hrtime, A = function () {
                                var e;
                                return e = n(),
                                1e9 * e[0] + e[1]
                            }, i = A(), a = 1e9 * e.uptime(), o = i - a) : Date.now ? (t.exports = function () {
                                return Date.now() - r
                            }, r = Date.now()) : (t.exports = function () {
                                return (new Date).getTime() - r
                            }, r = (new Date).getTime())
                        }).call(this)
                    }).call(this, e("_process"))
                },
                {
                    _process: 3
                }],
                3: [function (e, t, A) {
                    function n() {
                        throw new Error("setTimeout has not been defined")
                    }
                    function r() {
                        throw new Error("clearTimeout has not been defined")
                    }
                    function i(e) {
                        if (u === setTimeout) return setTimeout(e, 0);
                        if ((u === n || !u) && setTimeout) return u = setTimeout,
                        setTimeout(e, 0);
                        try {
                            return u(e, 0)
                        } catch (t) {
                            try {
                                return u.call(null, e, 0)
                            } catch (t) {
                                return u.call(this, e, 0)
                            }
                        }
                    }
                    function o(e) {
                        if (f === clearTimeout) return clearTimeout(e);
                        if ((f === r || !f) && clearTimeout) return f = clearTimeout,
                        clearTimeout(e);
                        try {
                            return f(e)
                        } catch (t) {
                            try {
                                return f.call(null, e)
                            } catch (t) {
                                return f.call(this, e)
                            }
                        }
                    }
                    function a() {
                        g && h && (g = !1, h.length ? p = h.concat(p) : B = -1, p.length && s())
                    }
                    function s() {
                        if (!g) {
                            var e = i(a);
                            g = !0;
                            for (var t = p.length; t;) {
                                for (h = p, p = []; ++B < t;) h && h[B].run();
                                B = -1,
                                t = p.length
                            }
                            h = null,
                            g = !1,
                            o(e)
                        }
                    }
                    function c(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function l() {}
                    var u, f, d = t.exports = {};
                    !
                    function () {
                        try {
                            u = "function" == typeof setTimeout ? setTimeout : n
                        } catch (e) {
                            u = n
                        }
                        try {
                            f = "function" == typeof clearTimeout ? clearTimeout : r
                        } catch (e) {
                            f = r
                        }
                    }();
                    var h, p = [],
                        g = !1,
                        B = -1;
                    d.nextTick = function (e) {
                            var t = new Array(arguments.length - 1);
                            if (arguments.length > 1) for (var A = 1; A < arguments.length; A++) t[A - 1] = arguments[A];
                            p.push(new c(e, t)),
                            1 !== p.length || g || i(s)
                        },
                    c.prototype.run = function () {
                            this.fun.apply(null, this.array)
                        },
                    d.title = "browser",
                    d.browser = !0,
                    d.env = {},
                    d.argv = [],
                    d.version = "",
                    d.versions = {},
                    d.on = l,
                    d.addListener = l,
                    d.once = l,
                    d.off = l,
                    d.removeListener = l,
                    d.removeAllListeners = l,
                    d.emit = l,
                    d.prependListener = l,
                    d.prependOnceListener = l,
                    d.listeners = function (e) {
                            return []
                        },
                    d.binding = function (e) {
                            throw new Error("process.binding is not supported")
                        },
                    d.cwd = function () {
                            return "/"
                        },
                    d.chdir = function (e) {
                            throw new Error("process.chdir is not supported")
                        },
                    d.umask = function () {
                            return 0
                        }
                },
                {}],
                4: [function (e, A, n) {
                    (function (t) {
                        for (var n = e("performance-now"), r = "undefined" == typeof window ? t : window, i = ["moz", "webkit"], o = "AnimationFrame", a = r["request" + o], s = r["cancel" + o] || r["cancelRequest" + o], c = 0; !a && c < i.length; c++) a = r[i[c] + "Request" + o],
                        s = r[i[c] + "Cancel" + o] || r[i[c] + "CancelRequest" + o];
                        if (!a || !s) {
                            var l = 0,
                                u = 0,
                                f = [];
                            a = function (e) {
                                    if (0 === f.length) {
                                        var t = n(),
                                            A = Math.max(0, 1e3 / 60 - (t - l));
                                        l = A + t,
                                        setTimeout(function () {
                                                var e = f.slice(0);
                                                f.length = 0;
                                                for (var t = 0; t < e.length; t++) if (!e[t].cancelled) try {
                                                    e[t].callback(l)
                                                } catch (e) {
                                                    setTimeout(function () {
                                                        throw e
                                                    }, 0)
                                                }
                                            }, Math.round(A))
                                    }
                                    return f.push({
                                        handle: ++u,
                                        callback: e,
                                        cancelled: !1
                                    }),
                                    u
                                },
                            s = function (e) {
                                    for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
                                }
                        }
                        A.exports = function (e) {
                            return a.call(r, e)
                        },
                        A.exports.cancel = function () {
                            s.apply(r, arguments)
                        },
                        A.exports.polyfill = function () {
                            r.requestAnimationFrame = a,
                            r.cancelAnimationFrame = s
                        }
                    }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                },
                {
                    "performance-now": 2
                }],
                5: [function (e, t, A) {
                    "use strict";

                    function n(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    var r = function () {
                        function e(e, t) {
                            for (var A = 0; A < t.length; A++) {
                                var n = t[A];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        return function (t, A, n) {
                            return A && e(t.prototype, A),
                            n && e(t, n),
                            t
                        }
                    }(),
                        i = e("raf"),
                        o = e("object-assign"),
                        a = {
                            propertyCache: {},
                            vendors: [null, ["-webkit-", "webkit"],
                                ["-moz-", "Moz"],
                                ["-o-", "O"],
                                ["-ms-", "ms"]
                            ],
                            clamp: function (e, t, A) {
                                return t < A ? e < t ? t : e > A ? A : e : e < A ? A : e > t ? t : e
                            },
                            data: function (e, t) {
                                return a.deserialize(e.getAttribute("data-" + t))
                            },
                            deserialize: function (e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : !isNaN(parseFloat(e)) && isFinite(e) ? parseFloat(e) : e)
                            },
                            camelCase: function (e) {
                                return e.replace(/-+(.)?/g, function (e, t) {
                                    return t ? t.toUpperCase() : ""
                                })
                            },
                            accelerate: function (e) {
                                a.css(e, "transform", "translate3d(0,0,0) rotate(0.0001deg)"),
                                a.css(e, "transform-style", "preserve-3d"),
                                a.css(e, "backface-visibility", "hidden")
                            },
                            transformSupport: function (e) {
                                for (var t = document.createElement("div"), A = !1, n = null, r = !1, i = null, o = null, s = 0, c = a.vendors.length; s < c; s++) if (null !== a.vendors[s] ? (i = a.vendors[s][0] + "transform", o = a.vendors[s][1] + "Transform") : (i = "transform", o = "transform"), void 0 !== t.style[o]) {
                                    A = !0;
                                    break
                                }
                                switch (e) {
                                case "2D":
                                    r = A;
                                    break;
                                case "3D":
                                    if (A) {
                                        var l = document.body || document.createElement("body"),
                                            u = document.documentElement,
                                            f = u.style.overflow,
                                            d = !1;
                                        document.body || (d = !0, u.style.overflow = "hidden", u.appendChild(l), l.style.overflow = "hidden", l.style.background = ""),
                                        l.appendChild(t),
                                        t.style[o] = "translate3d(1px,1px,1px)",
                                        n = window.getComputedStyle(t).getPropertyValue(i),
                                        r = void 0 !== n && n.length > 0 && "none" !== n,
                                        u.style.overflow = f,
                                        l.removeChild(t),
                                        d && (l.removeAttribute("style"), l.parentNode.removeChild(l))
                                    }
                                }
                                return r
                            },
                            css: function (e, t, A) {
                                var n = a.propertyCache[t];
                                if (!n) for (var r = 0, i = a.vendors.length; r < i; r++) if (n = null !== a.vendors[r] ? a.camelCase(a.vendors[r][1] + "-" + t) : t, void 0 !== e.style[n]) {
                                    a.propertyCache[t] = n;
                                    break
                                }
                                e.style[n] = A
                            }
                        },
                        s = {
                            relativeInput: !1,
                            clipRelativeInput: !1,
                            inputElement: null,
                            hoverOnly: !1,
                            calibrationThreshold: 100,
                            calibrationDelay: 500,
                            supportDelay: 500,
                            calibrateX: !1,
                            calibrateY: !0,
                            invertX: !0,
                            invertY: !0,
                            limitX: !1,
                            limitY: !1,
                            scalarX: 10,
                            scalarY: 10,
                            frictionX: .1,
                            frictionY: .1,
                            originX: .5,
                            originY: .5,
                            pointerEvents: !1,
                            precision: 1,
                            onReady: null,
                            selector: null
                        },
                        c = function () {
                            function e(t, A) {
                                n(this, e),
                                this.element = t;
                                var r = {
                                    calibrateX: a.data(this.element, "calibrate-x"),
                                    calibrateY: a.data(this.element, "calibrate-y"),
                                    invertX: a.data(this.element, "invert-x"),
                                    invertY: a.data(this.element, "invert-y"),
                                    limitX: a.data(this.element, "limit-x"),
                                    limitY: a.data(this.element, "limit-y"),
                                    scalarX: a.data(this.element, "scalar-x"),
                                    scalarY: a.data(this.element, "scalar-y"),
                                    frictionX: a.data(this.element, "friction-x"),
                                    frictionY: a.data(this.element, "friction-y"),
                                    originX: a.data(this.element, "origin-x"),
                                    originY: a.data(this.element, "origin-y"),
                                    pointerEvents: a.data(this.element, "pointer-events"),
                                    precision: a.data(this.element, "precision"),
                                    relativeInput: a.data(this.element, "relative-input"),
                                    clipRelativeInput: a.data(this.element, "clip-relative-input"),
                                    hoverOnly: a.data(this.element, "hover-only"),
                                    inputElement: document.querySelector(a.data(this.element, "input-element")),
                                    selector: a.data(this.element, "selector")
                                };
                                for (var i in r) null === r[i] && delete r[i];
                                o(this, s, r, A),
                                this.inputElement || (this.inputElement = this.element),
                                this.calibrationTimer = null,
                                this.calibrationFlag = !0,
                                this.enabled = !1,
                                this.depthsX = [],
                                this.depthsY = [],
                                this.raf = null,
                                this.bounds = null,
                                this.elementPositionX = 0,
                                this.elementPositionY = 0,
                                this.elementWidth = 0,
                                this.elementHeight = 0,
                                this.elementCenterX = 0,
                                this.elementCenterY = 0,
                                this.elementRangeX = 0,
                                this.elementRangeY = 0,
                                this.calibrationX = 0,
                                this.calibrationY = 0,
                                this.inputX = 0,
                                this.inputY = 0,
                                this.motionX = 0,
                                this.motionY = 0,
                                this.velocityX = 0,
                                this.velocityY = 0,
                                this.onMouseMove = this.onMouseMove.bind(this),
                                this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
                                this.onDeviceMotion = this.onDeviceMotion.bind(this),
                                this.onOrientationTimer = this.onOrientationTimer.bind(this),
                                this.onMotionTimer = this.onMotionTimer.bind(this),
                                this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
                                this.onAnimationFrame = this.onAnimationFrame.bind(this),
                                this.onWindowResize = this.onWindowResize.bind(this),
                                this.windowWidth = null,
                                this.windowHeight = null,
                                this.windowCenterX = null,
                                this.windowCenterY = null,
                                this.windowRadiusX = null,
                                this.windowRadiusY = null,
                                this.portrait = !1,
                                this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
                                this.motionSupport = !! window.DeviceMotionEvent && !this.desktop,
                                this.orientationSupport = !! window.DeviceOrientationEvent && !this.desktop,
                                this.orientationStatus = 0,
                                this.motionStatus = 0,
                                this.initialise()
                            }
                            return r(e, [{
                                key: "initialise",
                                value: function () {
                                    void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")),
                                    this.transform3DSupport && a.accelerate(this.element),
                                    "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"),
                                    this.pointerEvents || (this.element.style.pointerEvents = "none"),
                                    this.updateLayers(),
                                    this.updateDimensions(),
                                    this.enable(),
                                    this.queueCalibration(this.calibrationDelay)
                                }
                            },
                            {
                                key: "doReadyCallback",
                                value: function () {
                                    this.onReady && this.onReady()
                                }
                            },
                            {
                                key: "updateLayers",
                                value: function () {
                                    this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children,
                                    this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."),
                                    this.depthsX = [],
                                    this.depthsY = [];
                                    for (var e = 0; e < this.layers.length; e++) {
                                        var t = this.layers[e];
                                        this.transform3DSupport && a.accelerate(t),
                                        t.style.position = e ? "absolute" : "relative",
                                        t.style.display = "block",
                                        t.style.left = 0,
                                        t.style.top = 0;
                                        var A = a.data(t, "depth") || 0;
                                        this.depthsX.push(a.data(t, "depth-x") || A),
                                        this.depthsY.push(a.data(t, "depth-y") || A)
                                    }
                                }
                            },
                            {
                                key: "updateDimensions",
                                value: function () {
                                    this.windowWidth = window.innerWidth,
                                    this.windowHeight = window.innerHeight,
                                    this.windowCenterX = this.windowWidth * this.originX,
                                    this.windowCenterY = this.windowHeight * this.originY,
                                    this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX),
                                    this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                                }
                            },
                            {
                                key: "updateBounds",
                                value: function () {
                                    this.bounds = this.inputElement.getBoundingClientRect(),
                                    this.elementPositionX = this.bounds.left,
                                    this.elementPositionY = this.bounds.top,
                                    this.elementWidth = this.bounds.width,
                                    this.elementHeight = this.bounds.height,
                                    this.elementCenterX = this.elementWidth * this.originX,
                                    this.elementCenterY = this.elementHeight * this.originY,
                                    this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX),
                                    this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                                }
                            },
                            {
                                key: "queueCalibration",
                                value: function (e) {
                                    clearTimeout(this.calibrationTimer),
                                    this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
                                }
                            },
                            {
                                key: "enable",
                                value: function () {
                                    this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = i(this.onAnimationFrame))
                                }
                            },
                            {
                                key: "disable",
                                value: function () {
                                    this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), i.cancel(this.raf))
                                }
                            },
                            {
                                key: "calibrate",
                                value: function (e, t) {
                                    this.calibrateX = void 0 === e ? this.calibrateX : e,
                                    this.calibrateY = void 0 === t ? this.calibrateY : t
                                }
                            },
                            {
                                key: "invert",
                                value: function (e, t) {
                                    this.invertX = void 0 === e ? this.invertX : e,
                                    this.invertY = void 0 === t ? this.invertY : t
                                }
                            },
                            {
                                key: "friction",
                                value: function (e, t) {
                                    this.frictionX = void 0 === e ? this.frictionX : e,
                                    this.frictionY = void 0 === t ? this.frictionY : t
                                }
                            },
                            {
                                key: "scalar",
                                value: function (e, t) {
                                    this.scalarX = void 0 === e ? this.scalarX : e,
                                    this.scalarY = void 0 === t ? this.scalarY : t
                                }
                            },
                            {
                                key: "limit",
                                value: function (e, t) {
                                    this.limitX = void 0 === e ? this.limitX : e,
                                    this.limitY = void 0 === t ? this.limitY : t
                                }
                            },
                            {
                                key: "origin",
                                value: function (e, t) {
                                    this.originX = void 0 === e ? this.originX : e,
                                    this.originY = void 0 === t ? this.originY : t
                                }
                            },
                            {
                                key: "setInputElement",
                                value: function (e) {
                                    this.inputElement = e,
                                    this.updateDimensions()
                                }
                            },
                            {
                                key: "setPosition",
                                value: function (e, t, A) {
                                    t = t.toFixed(this.precision) + "px",
                                    A = A.toFixed(this.precision) + "px",
                                    this.transform3DSupport ? a.css(e, "transform", "translate3d(" + t + "," + A + ",0)") : this.transform2DSupport ? a.css(e, "transform", "translate(" + t + "," + A + ")") : (e.style.left = t, e.style.top = A)
                                }
                            },
                            {
                                key: "onOrientationTimer",
                                value: function () {
                                    this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                                }
                            },
                            {
                                key: "onMotionTimer",
                                value: function () {
                                    this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                                }
                            },
                            {
                                key: "onCalibrationTimer",
                                value: function () {
                                    this.calibrationFlag = !0
                                }
                            },
                            {
                                key: "onWindowResize",
                                value: function () {
                                    this.updateDimensions()
                                }
                            },
                            {
                                key: "onAnimationFrame",
                                value: function () {
                                    this.updateBounds();
                                    var e = this.inputX - this.calibrationX,
                                        t = this.inputY - this.calibrationY;
                                        (Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0),
                                    this.portrait ? (this.motionX = this.calibrateX ? t : this.inputY, this.motionY = this.calibrateY ? e : this.inputX) : (this.motionX = this.calibrateX ? e : this.inputX, this.motionY = this.calibrateY ? t : this.inputY),
                                    this.motionX *= this.elementWidth * (this.scalarX / 100),
                                    this.motionY *= this.elementHeight * (this.scalarY / 100),
                                    isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)),
                                    isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)),
                                    this.velocityX += (this.motionX - this.velocityX) * this.frictionX,
                                    this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                                    for (var A = 0; A < this.layers.length; A++) {
                                            var n = this.layers[A],
                                                r = this.depthsX[A],
                                                o = this.depthsY[A],
                                                s = this.velocityX * (r * (this.invertX ? -1 : 1)),
                                                c = this.velocityY * (o * (this.invertY ? -1 : 1));
                                            this.setPosition(n, s, c)
                                        }
                                    this.raf = i(this.onAnimationFrame)
                                }
                            },
                            {
                                key: "rotate",
                                value: function (e, t) {
                                    var A = (e || 0) / 30,
                                        n = (t || 0) / 30,
                                        r = this.windowHeight > this.windowWidth;
                                    this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0),
                                    this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = A, this.calibrationY = n),
                                    this.inputX = A,
                                    this.inputY = n
                                }
                            },
                            {
                                key: "onDeviceOrientation",
                                value: function (e) {
                                    var t = e.beta,
                                        A = e.gamma;
                                    null !== t && null !== A && (this.orientationStatus = 1, this.rotate(t, A))
                                }
                            },
                            {
                                key: "onDeviceMotion",
                                value: function (e) {
                                    var t = e.rotationRate.beta,
                                        A = e.rotationRate.gamma;
                                    null !== t && null !== A && (this.motionStatus = 1, this.rotate(t, A))
                                }
                            },
                            {
                                key: "onMouseMove",
                                value: function (e) {
                                    var t = e.clientX,
                                        A = e.clientY;
                                    if (this.hoverOnly && (t < this.elementPositionX || t > this.elementPositionX + this.elementWidth || A < this.elementPositionY || A > this.elementPositionY + this.elementHeight)) return this.inputX = 0,
                                    void(this.inputY = 0);
                                    this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.elementPositionX), t = Math.min(t, this.elementPositionX + this.elementWidth), A = Math.max(A, this.elementPositionY), A = Math.min(A, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (t - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (A - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (t - this.windowCenterX) / this.windowRadiusX, this.inputY = (A - this.windowCenterY) / this.windowRadiusY)
                                }
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    this.disable(),
                                    clearTimeout(this.calibrationTimer),
                                    clearTimeout(this.detectionTimer),
                                    this.element.removeAttribute("style");
                                    for (var e = 0; e < this.layers.length; e++) this.layers[e].removeAttribute("style");
                                    delete this.element,
                                    delete this.layers
                                }
                            },
                            {
                                key: "version",
                                value: function () {
                                    return "3.1.0"
                                }
                            }]),
                            e
                        }();
                    t.exports = c
                },
                {
                    "object-assign": 1,
                    raf: 4
                }]
            }, {}, [5])(5)
        })
    }).call(t, A(152))
},


function (e, t, A) {
    "use strict";
    var n = A(95),
        r = A(576),
        i = A(740);
    e.exports = function () {
            function e(e, t, A, n, o, a) {
                a !== i && r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var A = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return A.checkPropTypes = n,
            A.PropTypes = A,
            A
        }
},


function (e, t, A) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
},


function (e, t, A) {
    var n, r;
    !
    function (i, o) {
        n = [A(248)],
        void 0 !== (r = function (e) {
            return i.PxLoaderImage = o(e)
        }.apply(t, n)) && (e.exports = r)
    }(this, function (e) {
        function t(e, t, A, n) {
            n = n || {};
            var r, i = this,
                o = null;
            r = this.img = new Image,
            n.origin && (r.crossOrigin = n.origin),
            this.tags = t,
            this.priority = A;
            var a = function () {
                    "complete" === i.img.readyState && s()
                },
                s = function () {
                    o.onLoad(i),
                    u()
                },
                c = function () {
                    o.onError(i),
                    u()
                },
                l = function () {
                    o.onTimeout(i),
                    u()
                },
                u = function () {
                    i.unbind("load", s),
                    i.unbind("readystatechange", a),
                    i.unbind("error", c)
                };
            this.start = function (t) {
                    o = t,
                    i.bind("load", s),
                    i.bind("readystatechange", a),
                    i.bind("error", c),
                    i.img.src = e
                },
            this.checkStatus = function () {
                    a()
                },
            this.onTimeout = function () {
                    i.img.complete ? s() : l()
                },
            this.getName = function () {
                    return e
                },
            this.bind = function (e, t) {
                    i.img.addEventListener(e, t, !1)
                },
            this.unbind = function (e, t) {
                    i.img.removeEventListener(e, t, !1)
                }
        }
        return e.prototype.addImage = function (e, A, n, r) {
            var i = new t(e, A, n, r);
            return this.add(i),
            i.img
        },
        t
    })
},


function (e, t, A) {
    var n;
    !
    function (t, A) {
        e.exports = A()
    }(0, function () {
        function e(e) {
            this.mode = c.MODE_8BIT_BYTE,
            this.data = e,
            this.parsedData = [];
            for (var t = 0, A = this.data.length; t < A; t++) {
                var n = [],
                    r = this.data.charCodeAt(t);
                r > 65536 ? (n[0] = 240 | (1835008 & r) >>> 18, n[1] = 128 | (258048 & r) >>> 12, n[2] = 128 | (4032 & r) >>> 6, n[3] = 128 | 63 & r) : r > 2048 ? (n[0] = 224 | (61440 & r) >>> 12, n[1] = 128 | (4032 & r) >>> 6, n[2] = 128 | 63 & r) : r > 128 ? (n[0] = 192 | (1984 & r) >>> 6, n[1] = 128 | 63 & r) : n[0] = r,
                this.parsedData.push(n)
            }
            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
            this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
        }
        function t(e, t) {
            this.typeNumber = e,
            this.errorCorrectLevel = t,
            this.modules = null,
            this.moduleCount = 0,
            this.dataCache = null,
            this.dataList = []
        }
        function A(e, t) {
            if (void 0 == e.length) throw new Error(e.length + "/" + t);
            for (var A = 0; A < e.length && 0 == e[A];) A++;
            this.num = new Array(e.length - A + t);
            for (var n = 0; n < e.length - A; n++) this.num[n] = e[n + A]
        }
        function r(e, t) {
            this.totalCount = e,
            this.dataCount = t
        }
        function i() {
            this.buffer = [],
            this.length = 0
        }
        function o() {
            var e = !1,
                t = navigator.userAgent;
            if (/android/i.test(t)) {
                    e = !0;
                    var A = t.toString().match(/android ([0-9]\.[0-9])/i);
                    A && A[1] && (e = parseFloat(A[1]))
                }
            return e
        }
        function a(e, t) {
            for (var A = 1, n = s(e), r = 0, i = p.length; r <= i; r++) {
                var o = 0;
                switch (t) {
                case l.L:
                    o = p[r][0];
                    break;
                case l.M:
                    o = p[r][1];
                    break;
                case l.Q:
                    o = p[r][2];
                    break;
                case l.H:
                    o = p[r][3]
                }
                if (n <= o) break;
                A++
            }
            if (A > p.length) throw new Error("Too long data");
            return A
        }
        function s(e) {
            var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
            return t.length + (t.length != e ? 3 : 0)
        }
        e.prototype = {
            getLength: function (e) {
                return this.parsedData.length
            },
            write: function (e) {
                for (var t = 0, A = this.parsedData.length; t < A; t++) e.put(this.parsedData[t], 8)
            }
        },
        t.prototype = {
            addData: function (t) {
                var A = new e(t);
                this.dataList.push(A),
                this.dataCache = null
            },
            isDark: function (e, t) {
                if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
                return this.modules[e][t]
            },
            getModuleCount: function () {
                return this.moduleCount
            },
            make: function () {
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function (e, A) {
                this.moduleCount = 4 * this.typeNumber + 17,
                this.modules = new Array(this.moduleCount);
                for (var n = 0; n < this.moduleCount; n++) {
                    this.modules[n] = new Array(this.moduleCount);
                    for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null
                }
                this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(e, A),
                this.typeNumber >= 7 && this.setupTypeNumber(e),
                null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                this.mapData(this.dataCache, A)
            },
            setupPositionProbePattern: function (e, t) {
                for (var A = -1; A <= 7; A++) if (!(e + A <= -1 || this.moduleCount <= e + A)) for (var n = -1; n <= 7; n++) t + n <= -1 || this.moduleCount <= t + n || (this.modules[e + A][t + n] = 0 <= A && A <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == A || 6 == A) || 2 <= A && A <= 4 && 2 <= n && n <= 4)
            },
            getBestMaskPattern: function () {
                for (var e = 0, t = 0, A = 0; A < 8; A++) {
                    this.makeImpl(!0, A);
                    var n = f.getLostPoint(this);
                    (0 == A || e > n) && (e = n, t = A)
                }
                return t
            },
            createMovieClip: function (e, t, A) {
                var n = e.createEmptyMovieClip(t, A);
                this.make();
                for (var r = 0; r < this.modules.length; r++) for (var i = 1 * r, o = 0; o < this.modules[r].length; o++) {
                    var a = 1 * o,
                        s = this.modules[r][o];
                    s && (n.beginFill(0, 100), n.moveTo(a, i), n.lineTo(a + 1, i), n.lineTo(a + 1, i + 1), n.lineTo(a, i + 1), n.endFill())
                }
                return n
            },
            setupTimingPattern: function () {
                for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
            },
            setupPositionAdjustPattern: function () {
                for (var e = f.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) for (var A = 0; A < e.length; A++) {
                    var n = e[t],
                        r = e[A];
                    if (null == this.modules[n][r]) for (var i = -2; i <= 2; i++) for (var o = -2; o <= 2; o++) this.modules[n + i][r + o] = -2 == i || 2 == i || -2 == o || 2 == o || 0 == i && 0 == o
                }
            },
            setupTypeNumber: function (e) {
                for (var t = f.getBCHTypeNumber(this.typeNumber), A = 0; A < 18; A++) {
                    var n = !e && 1 == (t >> A & 1);
                    this.modules[Math.floor(A / 3)][A % 3 + this.moduleCount - 8 - 3] = n
                }
                for (var A = 0; A < 18; A++) {
                    var n = !e && 1 == (t >> A & 1);
                    this.modules[A % 3 + this.moduleCount - 8 - 3][Math.floor(A / 3)] = n
                }
            },
            setupTypeInfo: function (e, t) {
                for (var A = this.errorCorrectLevel << 3 | t, n = f.getBCHTypeInfo(A), r = 0; r < 15; r++) {
                    var i = !e && 1 == (n >> r & 1);
                    r < 6 ? this.modules[r][8] = i : r < 8 ? this.modules[r + 1][8] = i : this.modules[this.moduleCount - 15 + r][8] = i
                }
                for (var r = 0; r < 15; r++) {
                    var i = !e && 1 == (n >> r & 1);
                    r < 8 ? this.modules[8][this.moduleCount - r - 1] = i : r < 9 ? this.modules[8][15 - r - 1 + 1] = i : this.modules[8][15 - r - 1] = i
                }
                this.modules[this.moduleCount - 8][8] = !e
            },
            mapData: function (e, t) {
                for (var A = -1, n = this.moduleCount - 1, r = 7, i = 0, o = this.moduleCount - 1; o > 0; o -= 2) for (6 == o && o--;;) {
                    for (var a = 0; a < 2; a++) if (null == this.modules[n][o - a]) {
                        var s = !1;
                        i < e.length && (s = 1 == (e[i] >>> r & 1));
                        var c = f.getMask(t, n, o - a);
                        c && (s = !s),
                        this.modules[n][o - a] = s,
                        r--,
                        -1 == r && (i++, r = 7)
                    }
                    if ((n += A) < 0 || this.moduleCount <= n) {
                        n -= A,
                        A = -A;
                        break
                    }
                }
            }
        },
        t.PAD0 = 236,
        t.PAD1 = 17,
        t.createData = function (e, A, n) {
            for (var o = r.getRSBlocks(e, A), a = new i, s = 0; s < n.length; s++) {
                var c = n[s];
                a.put(c.mode, 4),
                a.put(c.getLength(), f.getLengthInBits(c.mode, e)),
                c.write(a)
            }
            for (var l = 0, s = 0; s < o.length; s++) l += o[s].dataCount;
            if (a.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * l + ")");
            for (a.getLengthInBits() + 4 <= 8 * l && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(!1);
            for (;;) {
                if (a.getLengthInBits() >= 8 * l) break;
                if (a.put(t.PAD0, 8), a.getLengthInBits() >= 8 * l) break;
                a.put(t.PAD1, 8)
            }
            return t.createBytes(a, o)
        },
        t.createBytes = function (e, t) {
            for (var n = 0, r = 0, i = 0, o = new Array(t.length), a = new Array(t.length), s = 0; s < t.length; s++) {
                var c = t[s].dataCount,
                    l = t[s].totalCount - c;
                r = Math.max(r, c),
                i = Math.max(i, l),
                o[s] = new Array(c);
                for (var u = 0; u < o[s].length; u++) o[s][u] = 255 & e.buffer[u + n];
                n += c;
                var d = f.getErrorCorrectPolynomial(l),
                    h = new A(o[s], d.getLength() - 1),
                    p = h.mod(d);
                a[s] = new Array(d.getLength() - 1);
                for (var u = 0; u < a[s].length; u++) {
                        var g = u + p.getLength() - a[s].length;
                        a[s][u] = g >= 0 ? p.get(g) : 0
                    }
            }
            for (var B = 0, u = 0; u < t.length; u++) B += t[u].totalCount;
            for (var w = new Array(B), m = 0, u = 0; u < r; u++) for (var s = 0; s < t.length; s++) u < o[s].length && (w[m++] = o[s][u]);
            for (var u = 0; u < i; u++) for (var s = 0; s < t.length; s++) u < a[s].length && (w[m++] = a[s][u]);
            return w
        };
        for (var c = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, l = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, u = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, f = {
            PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (e) {
                for (var t = e << 10; f.getBCHDigit(t) - f.getBCHDigit(f.G15) >= 0;) t ^= f.G15 << f.getBCHDigit(t) - f.getBCHDigit(f.G15);
                return (e << 10 | t) ^ f.G15_MASK
            },
            getBCHTypeNumber: function (e) {
                for (var t = e << 12; f.getBCHDigit(t) - f.getBCHDigit(f.G18) >= 0;) t ^= f.G18 << f.getBCHDigit(t) - f.getBCHDigit(f.G18);
                return e << 12 | t
            },
            getBCHDigit: function (e) {
                for (var t = 0; 0 != e;) t++,
                e >>>= 1;
                return t
            },
            getPatternPosition: function (e) {
                return f.PATTERN_POSITION_TABLE[e - 1]
            },
            getMask: function (e, t, A) {
                switch (e) {
                case u.PATTERN000:
                    return (t + A) % 2 == 0;
                case u.PATTERN001:
                    return t % 2 == 0;
                case u.PATTERN010:
                    return A % 3 == 0;
                case u.PATTERN011:
                    return (t + A) % 3 == 0;
                case u.PATTERN100:
                    return (Math.floor(t / 2) + Math.floor(A / 3)) % 2 == 0;
                case u.PATTERN101:
                    return t * A % 2 + t * A % 3 == 0;
                case u.PATTERN110:
                    return (t * A % 2 + t * A % 3) % 2 == 0;
                case u.PATTERN111:
                    return (t * A % 3 + (t + A) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + e)
                }
            },
            getErrorCorrectPolynomial: function (e) {
                for (var t = new A([1], 0), n = 0; n < e; n++) t = t.multiply(new A([1, d.gexp(n)], 0));
                return t
            },
            getLengthInBits: function (e, t) {
                if (1 <= t && t < 10) switch (e) {
                case c.MODE_NUMBER:
                    return 10;
                case c.MODE_ALPHA_NUM:
                    return 9;
                case c.MODE_8BIT_BYTE:
                case c.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + e)
                } else if (t < 27) switch (e) {
                case c.MODE_NUMBER:
                    return 12;
                case c.MODE_ALPHA_NUM:
                    return 11;
                case c.MODE_8BIT_BYTE:
                    return 16;
                case c.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + e)
                } else {
                    if (!(t < 41)) throw new Error("type:" + t);
                    switch (e) {
                    case c.MODE_NUMBER:
                        return 14;
                    case c.MODE_ALPHA_NUM:
                        return 13;
                    case c.MODE_8BIT_BYTE:
                        return 16;
                    case c.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + e)
                    }
                }
            },
            getLostPoint: function (e) {
                for (var t = e.getModuleCount(), A = 0, n = 0; n < t; n++) for (var r = 0; r < t; r++) {
                    for (var i = 0, o = e.isDark(n, r), a = -1; a <= 1; a++) if (!(n + a < 0 || t <= n + a)) for (var s = -1; s <= 1; s++) r + s < 0 || t <= r + s || 0 == a && 0 == s || o == e.isDark(n + a, r + s) && i++;
                    i > 5 && (A += 3 + i - 5)
                }
                for (var n = 0; n < t - 1; n++) for (var r = 0; r < t - 1; r++) {
                    var c = 0;
                    e.isDark(n, r) && c++,
                    e.isDark(n + 1, r) && c++,
                    e.isDark(n, r + 1) && c++,
                    e.isDark(n + 1, r + 1) && c++,
                    0 != c && 4 != c || (A += 3)
                }
                for (var n = 0; n < t; n++) for (var r = 0; r < t - 6; r++) e.isDark(n, r) && !e.isDark(n, r + 1) && e.isDark(n, r + 2) && e.isDark(n, r + 3) && e.isDark(n, r + 4) && !e.isDark(n, r + 5) && e.isDark(n, r + 6) && (A += 40);
                for (var r = 0; r < t; r++) for (var n = 0; n < t - 6; n++) e.isDark(n, r) && !e.isDark(n + 1, r) && e.isDark(n + 2, r) && e.isDark(n + 3, r) && e.isDark(n + 4, r) && !e.isDark(n + 5, r) && e.isDark(n + 6, r) && (A += 40);
                for (var l = 0, r = 0; r < t; r++) for (var n = 0; n < t; n++) e.isDark(n, r) && l++;
                return A += Math.abs(100 * l / t / t - 50) / 5 * 10
            }
        }, d = {
            glog: function (e) {
                if (e < 1) throw new Error("glog(" + e + ")");
                return d.LOG_TABLE[e]
            },
            gexp: function (e) {
                for (; e < 0;) e += 255;
                for (; e >= 256;) e -= 255;
                return d.EXP_TABLE[e]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, h = 0; h < 8; h++) d.EXP_TABLE[h] = 1 << h;
        for (var h = 8; h < 256; h++) d.EXP_TABLE[h] = d.EXP_TABLE[h - 4] ^ d.EXP_TABLE[h - 5] ^ d.EXP_TABLE[h - 6] ^ d.EXP_TABLE[h - 8];
        for (var h = 0; h < 255; h++) d.LOG_TABLE[d.EXP_TABLE[h]] = h;
        A.prototype = {
            get: function (e) {
                return this.num[e]
            },
            getLength: function () {
                return this.num.length
            },
            multiply: function (e) {
                for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++) for (var r = 0; r < e.getLength(); r++) t[n + r] ^= d.gexp(d.glog(this.get(n)) + d.glog(e.get(r)));
                return new A(t, 0)
            },
            mod: function (e) {
                if (this.getLength() - e.getLength() < 0) return this;
                for (var t = d.glog(this.get(0)) - d.glog(e.get(0)), n = new Array(this.getLength()), r = 0; r < this.getLength(); r++) n[r] = this.get(r);
                for (var r = 0; r < e.getLength(); r++) n[r] ^= d.gexp(d.glog(e.get(r)) + t);
                return new A(n, 0).mod(e)
            }
        },
        r.RS_BLOCK_TABLE = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
        ],
        r.getRSBlocks = function (e, t) {
            var A = r.getRsBlockTable(e, t);
            if (void 0 == A) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
            for (var n = A.length / 3, i = [], o = 0; o < n; o++) for (var a = A[3 * o + 0], s = A[3 * o + 1], c = A[3 * o + 2], l = 0; l < a; l++) i.push(new r(s, c));
            return i
        },
        r.getRsBlockTable = function (e, t) {
            switch (t) {
            case l.L:
                return r.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case l.M:
                return r.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case l.Q:
                return r.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case l.H:
                return r.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
                return
            }
        },
        i.prototype = {
            get: function (e) {
                var t = Math.floor(e / 8);
                return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
            },
            put: function (e, t) {
                for (var A = 0; A < t; A++) this.putBit(1 == (e >>> t - A - 1 & 1))
            },
            getLengthInBits: function () {
                return this.length
            },
            putBit: function (e) {
                var t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0),
                e && (this.buffer[t] |= 128 >>> this.length % 8),
                this.length++
            }
        };
        var p = [
            [17, 14, 11, 7],
            [32, 26, 20, 14],
            [53, 42, 32, 24],
            [78, 62, 46, 34],
            [106, 84, 60, 44],
            [134, 106, 74, 58],
            [154, 122, 86, 64],
            [192, 152, 108, 84],
            [230, 180, 130, 98],
            [271, 213, 151, 119],
            [321, 251, 177, 137],
            [367, 287, 203, 155],
            [425, 331, 241, 177],
            [458, 362, 258, 194],
            [520, 412, 292, 220],
            [586, 450, 322, 250],
            [644, 504, 364, 280],
            [718, 560, 394, 310],
            [792, 624, 442, 338],
            [858, 666, 482, 382],
            [929, 711, 509, 403],
            [1003, 779, 565, 439],
            [1091, 857, 611, 461],
            [1171, 911, 661, 511],
            [1273, 997, 715, 535],
            [1367, 1059, 751, 593],
            [1465, 1125, 805, 625],
            [1528, 1190, 868, 658],
            [1628, 1264, 908, 698],
            [1732, 1370, 982, 742],
            [1840, 1452, 1030, 790],
            [1952, 1538, 1112, 842],
            [2068, 1628, 1168, 898],
            [2188, 1722, 1228, 958],
            [2303, 1809, 1283, 983],
            [2431, 1911, 1351, 1051],
            [2563, 1989, 1423, 1093],
            [2699, 2099, 1499, 1139],
            [2809, 2213, 1579, 1219],
            [2953, 2331, 1663, 1273]
        ],
            g = function () {
                var e = function (e, t) {
                    this._el = e,
                    this._htOption = t
                };
                return e.prototype.draw = function (e) {
                    function t(e, t) {
                        var A = document.createElementNS("http://www.w3.org/2000/svg", e);
                        for (var n in t) t.hasOwnProperty(n) && A.setAttribute(n, t[n]);
                        return A
                    }
                    var A = this._htOption,
                        n = this._el,
                        r = e.getModuleCount();
                    Math.floor(A.width / r),
                    Math.floor(A.height / r);
                    this.clear();
                    var i = t("svg", {
                            viewBox: "0 0 " + String(r) + " " + String(r),
                            width: "100%",
                            height: "100%",
                            fill: A.colorLight
                        });
                    i.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"),
                    n.appendChild(i),
                    i.appendChild(t("rect", {
                            fill: A.colorLight,
                            width: "100%",
                            height: "100%"
                        })),
                    i.appendChild(t("rect", {
                            fill: A.colorDark,
                            width: "1",
                            height: "1",
                            id: "template"
                        }));
                    for (var o = 0; o < r; o++) for (var a = 0; a < r; a++) if (e.isDark(o, a)) {
                            var s = t("use", {
                                x: String(a),
                                y: String(o)
                            });
                            s.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"),
                            i.appendChild(s)
                        }
                },
                e.prototype.clear = function () {
                    for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
                },
                e
            }(),
            B = "svg" === document.documentElement.tagName.toLowerCase(),
            w = B ? g : function () {
                return "undefined" != typeof CanvasRenderingContext2D
            }() ?
        function () {
                function e() {
                    this._elImage.src = this._elCanvas.toDataURL("image/png"),
                    this._elImage.style.display = "block",
                    this._elCanvas.style.display = "none"
                }
                function t(e, t) {
                    var A = this;
                    if (A._fFail = t, A._fSuccess = e, null === A._bSupportDataURI) {
                        var n = document.createElement("img"),
                            r = function () {
                                A._bSupportDataURI = !1,
                                A._fFail && A._fFail.call(A)
                            },
                            i = function () {
                                A._bSupportDataURI = !0,
                                A._fSuccess && A._fSuccess.call(A)
                            };
                        return n.onabort = r,
                        n.onerror = r,
                        n.onload = i,
                        void(n.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                    }!0 === A._bSupportDataURI && A._fSuccess ? A._fSuccess.call(A) : !1 === A._bSupportDataURI && A._fFail && A._fFail.call(A)
                }
                if (this._android && this._android <= 2.1) {
                    var A = 1 / window.devicePixelRatio,
                        n = CanvasRenderingContext2D.prototype.drawImage;
                    CanvasRenderingContext2D.prototype.drawImage = function (e, t, r, i, o, a, s, c, l) {
                            if ("nodeName" in e && /img/i.test(e.nodeName)) for (var u = arguments.length - 1; u >= 1; u--) arguments[u] = arguments[u] * A;
                            else void 0 === c && (arguments[1] *= A, arguments[2] *= A, arguments[3] *= A, arguments[4] *= A);
                            n.apply(this, arguments)
                        }
                }
                var r = function (e, t) {
                    this._bIsPainted = !1,
                    this._android = o(),
                    this._htOption = t,
                    this._elCanvas = document.createElement("canvas"),
                    this._elCanvas.width = t.width,
                    this._elCanvas.height = t.height,
                    e.appendChild(this._elCanvas),
                    this._el = e,
                    this._oContext = this._elCanvas.getContext("2d"),
                    this._bIsPainted = !1,
                    this._elImage = document.createElement("img"),
                    this._elImage.alt = "Scan me!",
                    this._elImage.style.display = "none",
                    this._el.appendChild(this._elImage),
                    this._bSupportDataURI = null
                };
                return r.prototype.draw = function (e) {
                    var t = this._elImage,
                        A = this._oContext,
                        n = this._htOption,
                        r = e.getModuleCount(),
                        i = n.width / r,
                        o = n.height / r,
                        a = Math.round(i),
                        s = Math.round(o);
                    t.style.display = "none",
                    this.clear();
                    for (var c = 0; c < r; c++) for (var l = 0; l < r; l++) {
                            var u = e.isDark(c, l),
                                f = l * i,
                                d = c * o;
                            A.strokeStyle = u ? n.colorDark : n.colorLight,
                            A.lineWidth = 1,
                            A.fillStyle = u ? n.colorDark : n.colorLight,
                            A.fillRect(f, d, i, o),
                            A.strokeRect(Math.floor(f) + .5, Math.floor(d) + .5, a, s),
                            A.strokeRect(Math.ceil(f) - .5, Math.ceil(d) - .5, a, s)
                        }
                    this._bIsPainted = !0
                },
                r.prototype.makeImage = function () {
                    this._bIsPainted && t.call(this, e)
                },
                r.prototype.isPainted = function () {
                    return this._bIsPainted
                },
                r.prototype.clear = function () {
                    this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
                    this._bIsPainted = !1
                },
                r.prototype.round = function (e) {
                    return e ? Math.floor(1e3 * e) / 1e3 : e
                },
                r
            }() : function () {
                var e = function (e, t) {
                    this._el = e,
                    this._htOption = t
                };
                return e.prototype.draw = function (e) {
                    for (var t = this._htOption, A = this._el, n = e.getModuleCount(), r = Math.floor(t.width / n), i = Math.floor(t.height / n), o = ['<table style="border:0;border-collapse:collapse;">'], a = 0; a < n; a++) {
                        o.push("<tr>");
                        for (var s = 0; s < n; s++) o.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + i + "px;background-color:" + (e.isDark(a, s) ? t.colorDark : t.colorLight) + ';"></td>');
                        o.push("</tr>")
                    }
                    o.push("</table>"),
                    A.innerHTML = o.join("");
                    var c = A.childNodes[0],
                        l = (t.width - c.offsetWidth) / 2,
                        u = (t.height - c.offsetHeight) / 2;
                    l > 0 && u > 0 && (c.style.margin = u + "px " + l + "px")
                },
                e.prototype.clear = function () {
                    this._el.innerHTML = ""
                },
                e
            }();
        return n = function (e, t) {
                if (this._htOption = {
                    width: 256,
                    height: 256,
                    typeNumber: 4,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: l.H
                }, "string" == typeof t && (t = {
                    text: t
                }), t) for (var A in t) this._htOption[A] = t[A];
                "string" == typeof e && (e = document.getElementById(e)),
                this._htOption.useSVG && (w = g),
                this._android = o(),
                this._el = e,
                this._oQRCode = null,
                this._oDrawing = new w(this._el, this._htOption),
                this._htOption.text && this.makeCode(this._htOption.text)
            },
        n.prototype.makeCode = function (e) {
                this._oQRCode = new t(a(e, this._htOption.correctLevel), this._htOption.correctLevel),
                this._oQRCode.addData(e),
                this._oQRCode.make(),
                this._el.title = e,
                this._oDrawing.draw(this._oQRCode),
                this.makeImage()
            },
        n.prototype.makeImage = function () {
                "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
            },
        n.prototype.clear = function () {
                this._oDrawing.clear()
            },
        n.CorrectLevel = l,
        n
    })
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function (e, t, A, i) {
        t = t || "&",
        A = A || "=";
        var o = {};
        if ("string" != typeof e || 0 === e.length) return o;
        var a = /\+/g;
        e = e.split(t);
        var s = 1e3;
        i && "number" == typeof i.maxKeys && (s = i.maxKeys);
        var c = e.length;
        s > 0 && c > s && (c = s);
        for (var l = 0; l < c; ++l) {
            var u, f, d, h, p = e[l].replace(a, "%20"),
                g = p.indexOf(A);
            g >= 0 ? (u = p.substr(0, g), f = p.substr(g + 1)) : (u = p, f = ""),
            d = decodeURIComponent(u),
            h = decodeURIComponent(f),
            n(o, d) ? r(o[d]) ? o[d].push(h) : o[d] = [o[d], h] : o[d] = h
        }
        return o
    };
    var r = Array.isArray ||
    function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        if (e.map) return e.map(t);
        for (var A = [], n = 0; n < e.length; n++) A.push(t(e[n], n));
        return A
    }
    var r = function (e) {
        switch (typeof e) {
        case "string":
            return e;
        case "boolean":
            return e ? "true" : "false";
        case "number":
            return isFinite(e) ? e : "";
        default:
            return ""
        }
    };
    e.exports = function (e, t, A, a) {
        return t = t || "&",
        A = A || "=",
        null === e && (e = void 0),
        "object" == typeof e ? n(o(e), function (o) {
            var a = encodeURIComponent(r(o)) + A;
            return i(e[o]) ? n(e[o], function (e) {
                return a + encodeURIComponent(r(e))
            }).join(t) : a + encodeURIComponent(r(e[o]))
        }).join(t) : a ? encodeURIComponent(r(a)) + A + encodeURIComponent(r(e)) : ""
    };
    var i = Array.isArray ||
    function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    },
        o = Object.keys ||
    function (e) {
            var t = [];
            for (var A in e) Object.prototype.hasOwnProperty.call(e, A) && t.push(A);
            return t
        }
},


function (e, t) {
    e.exports = "/**\n * covert canvas to image\n * and save the image file\n */\n\nvar Canvas2Image = function () {\n\n\t// check if support sth.\n\tvar $support = function () {\n\t\tvar canvas = document.createElement('canvas'),\n\t\t\tctx = canvas.getContext('2d');\n\n\t\treturn {\n\t\t\tcanvas: !!ctx,\n\t\t\timageData: !!ctx.getImageData,\n\t\t\tdataURL: !!canvas.toDataURL,\n\t\t\tbtoa: !!window.btoa\n\t\t};\n\t}();\n\n\tvar downloadMime = 'image/octet-stream';\n\n\tfunction scaleCanvas (canvas, width, height) {\n\t\tvar w = canvas.width,\n\t\t\th = canvas.height;\n\t\tif (width == undefined) {\n\t\t\twidth = w;\n\t\t}\n\t\tif (height == undefined) {\n\t\t\theight = h;\n\t\t}\n\n\t\tvar retCanvas = document.createElement('canvas');\n\t\tvar retCtx = retCanvas.getContext('2d');\n\t\tretCanvas.width = width;\n\t\tretCanvas.height = height;\n\t\tretCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);\n\t\treturn retCanvas;\n\t}\n\n\tfunction getDataURL (canvas, type, width, height) {\n\t\tcanvas = scaleCanvas(canvas, width, height);\n\t\treturn canvas.toDataURL(type);\n\t}\n\n\tfunction saveFile (strData) {\n\t\tdocument.location.href = strData;\n\t}\n\n\tfunction genImage(strData) {\n\t\tvar img = document.createElement('img');\n\t\timg.src = strData;\n\t\treturn img;\n\t}\n\tfunction fixType (type) {\n\t\ttype = type.toLowerCase().replace(/jpg/i, 'jpeg');\n\t\tvar r = type.match(/png|jpeg|bmp|gif/)[0];\n\t\treturn 'image/' + r;\n\t}\n\tfunction encodeData (data) {\n\t\tif (!window.btoa) { throw 'btoa undefined' }\n\t\tvar str = '';\n\t\tif (typeof data == 'string') {\n\t\t\tstr = data;\n\t\t} else {\n\t\t\tfor (var i = 0; i < data.length; i ++) {\n\t\t\t\tstr += String.fromCharCode(data[i]);\n\t\t\t}\n\t\t}\n\n\t\treturn btoa(str);\n\t}\n\tfunction getImageData (canvas) {\n\t\tvar w = canvas.width,\n\t\t\th = canvas.height;\n\t\treturn canvas.getContext('2d').getImageData(0, 0, w, h);\n\t}\n\tfunction makeURI (strData, type) {\n\t\treturn 'data:' + type + ';base64,' + strData;\n\t}\n\n\n\t/**\n\t * create bitmap image\n\t * 按照规则生成图片响应头和响应体\n\t */\n\tvar genBitmapImage = function (oData) {\n\n\t\t//\n\t\t// BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx\n\t\t// BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx\n\t\t//\n\n\t\tvar biWidth  = oData.width;\n\t\tvar biHeight\t= oData.height;\n\t\tvar biSizeImage = biWidth * biHeight * 3;\n\t\tvar bfSize  = biSizeImage + 54; // total header size = 54 bytes\n\n\t\t//\n\t\t//  typedef struct tagBITMAPFILEHEADER {\n\t\t//  \tWORD bfType;\n\t\t//  \tDWORD bfSize;\n\t\t//  \tWORD bfReserved1;\n\t\t//  \tWORD bfReserved2;\n\t\t//  \tDWORD bfOffBits;\n\t\t//  } BITMAPFILEHEADER;\n\t\t//\n\t\tvar BITMAPFILEHEADER = [\n\t\t\t// WORD bfType -- The file type signature; must be \"BM\"\n\t\t\t0x42, 0x4D,\n\t\t\t// DWORD bfSize -- The size, in bytes, of the bitmap file\n\t\t\tbfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,\n\t\t\t// WORD bfReserved1 -- Reserved; must be zero\n\t\t\t0, 0,\n\t\t\t// WORD bfReserved2 -- Reserved; must be zero\n\t\t\t0, 0,\n\t\t\t// DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.\n\t\t\t54, 0, 0, 0\n\t\t];\n\n\t\t//\n\t\t//  typedef struct tagBITMAPINFOHEADER {\n\t\t//  \tDWORD biSize;\n\t\t//  \tLONG  biWidth;\n\t\t//  \tLONG  biHeight;\n\t\t//  \tWORD  biPlanes;\n\t\t//  \tWORD  biBitCount;\n\t\t//  \tDWORD biCompression;\n\t\t//  \tDWORD biSizeImage;\n\t\t//  \tLONG  biXPelsPerMeter;\n\t\t//  \tLONG  biYPelsPerMeter;\n\t\t//  \tDWORD biClrUsed;\n\t\t//  \tDWORD biClrImportant;\n\t\t//  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;\n\t\t//\n\t\tvar BITMAPINFOHEADER = [\n\t\t\t// DWORD biSize -- The number of bytes required by the structure\n\t\t\t40, 0, 0, 0,\n\t\t\t// LONG biWidth -- The width of the bitmap, in pixels\n\t\t\tbiWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,\n\t\t\t// LONG biHeight -- The height of the bitmap, in pixels\n\t\t\tbiHeight & 0xff, biHeight >> 8  & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,\n\t\t\t// WORD biPlanes -- The number of planes for the target device. This value must be set to 1\n\t\t\t1, 0,\n\t\t\t// WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap\n\t\t\t// has a maximum of 2^24 colors (16777216, Truecolor)\n\t\t\t24, 0,\n\t\t\t// DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed\n\t\t\t0, 0, 0, 0,\n\t\t\t// DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps\n\t\t\tbiSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,\n\t\t\t// LONG biXPelsPerMeter, unused\n\t\t\t0,0,0,0,\n\t\t\t// LONG biYPelsPerMeter, unused\n\t\t\t0,0,0,0,\n\t\t\t// DWORD biClrUsed, the number of color indexes of palette, unused\n\t\t\t0,0,0,0,\n\t\t\t// DWORD biClrImportant, unused\n\t\t\t0,0,0,0\n\t\t];\n\n\t\tvar iPadding = (4 - ((biWidth * 3) % 4)) % 4;\n\n\t\tvar aImgData = oData.data;\n\n\t\tvar strPixelData = '';\n\t\tvar biWidth4 = biWidth<<2;\n\t\tvar y = biHeight;\n\t\tvar fromCharCode = String.fromCharCode;\n\n\t\tdo {\n\t\t\tvar iOffsetY = biWidth4*(y-1);\n\t\t\tvar strPixelRow = '';\n\t\t\tfor (var x = 0; x < biWidth; x++) {\n\t\t\t\tvar iOffsetX = x<<2;\n\t\t\t\tstrPixelRow += fromCharCode(aImgData[iOffsetY+iOffsetX+2]) +\n\t\t\t\t\t\t\t   fromCharCode(aImgData[iOffsetY+iOffsetX+1]) +\n\t\t\t\t\t\t\t   fromCharCode(aImgData[iOffsetY+iOffsetX]);\n\t\t\t}\n\n\t\t\tfor (var c = 0; c < iPadding; c++) {\n\t\t\t\tstrPixelRow += String.fromCharCode(0);\n\t\t\t}\n\n\t\t\tstrPixelData += strPixelRow;\n\t\t} while (--y);\n\n\t\tvar strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);\n\n\t\treturn strEncoded;\n\t};\n\n\t/**\n\t * saveAsImage\n\t * @param canvasElement\n\t * @param {String} image type\n\t * @param {Number} [optional] png width\n\t * @param {Number} [optional] png height\n\t */\n\tvar saveAsImage = function (canvas, width, height, type) {\n\t\tif ($support.canvas && $support.dataURL) {\n\t\t\tif (typeof canvas == \"string\") { canvas = document.getElementById(canvas); }\n\t\t\tif (type == undefined) { type = 'png'; }\n\t\t\ttype = fixType(type);\n\t\t\tif (/bmp/.test(type)) {\n\t\t\t\tvar data = getImageData(scaleCanvas(canvas, width, height));\n\t\t\t\tvar strData = genBitmapImage(data);\n\t\t\t\tsaveFile(makeURI(strData, downloadMime));\n\t\t\t} else {\n\t\t\t\tvar strData = getDataURL(canvas, type, width, height);\n\t\t\t\tsaveFile(strData.replace(type, downloadMime));\n\t\t\t}\n\t\t}\n\t};\n\n\tvar convertToImage = function (canvas, width, height, type) {\n\t\tif ($support.canvas && $support.dataURL) {\n\t\t\tif (typeof canvas == \"string\") { canvas = document.getElementById(canvas); }\n\t\t\tif (type == undefined) { type = 'png'; }\n\t\t\ttype = fixType(type);\n\n\t\t\tif (/bmp/.test(type)) {\n\t\t\t\tvar data = getImageData(scaleCanvas(canvas, width, height));\n\t\t\t\tvar strData = genBitmapImage(data);\n\t\t\t\treturn genImage(makeURI(strData, 'image/bmp'));\n\t\t\t} else {\n\t\t\t\tvar strData = getDataURL(canvas, type, width, height);\n\t\t\t\treturn genImage(strData);\n\t\t\t}\n\t\t}\n\t};\n\n\n\n\treturn {\n\t\tsaveAsImage: saveAsImage,\n\t\tsaveAsPNG: function (canvas, width, height) {\n\t\t\treturn saveAsImage(canvas, width, height, 'png');\n\t\t},\n\t\tsaveAsJPEG: function (canvas, width, height) {\n\t\t\treturn saveAsImage(canvas, width, height, 'jpeg');\n\t\t},\n\t\tsaveAsGIF: function (canvas, width, height) {\n\t\t\treturn saveAsImage(canvas, width, height, 'gif');\n\t\t},\n\t\tsaveAsBMP: function (canvas, width, height) {\n\t\t\treturn saveAsImage(canvas, width, height, 'bmp');\n\t\t},\n\n\t\tconvertToImage: convertToImage,\n\t\tconvertToPNG: function (canvas, width, height) {\n\t\t\treturn convertToImage(canvas, width, height, 'png');\n\t\t},\n\t\tconvertToJPEG: function (canvas, width, height) {\n\t\t\treturn convertToImage(canvas, width, height, 'jpeg');\n\t\t},\n\t\tconvertToGIF: function (canvas, width, height) {\n\t\t\treturn convertToImage(canvas, width, height, 'gif');\n\t\t},\n\t\tconvertToBMP: function (canvas, width, height) {\n\t\t\treturn convertToImage(canvas, width, height, 'bmp');\n\t\t}\n\t};\n\n}();\n"
},
, function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    t.__esModule = !0;
    var a = Object.assign ||
    function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var A = arguments[t];
            for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n])
        }
        return e
    },
        s = A(54),
        c = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var A in e) Object.prototype.hasOwnProperty.call(e, A) && (t[A] = e[A]);
            return t.
        default = e,
            t
        }(s),
        l = A(541),
        u = n(l),
        f = A(543),
        d = n(f),
        h = A(9),
        p = n(h),
        g = A(151),
        B = n(g),
        w = A(250),
        m = function (e, t) {
            return t && t.split(" ").forEach(function (t) {
                return (0, u.
            default)(e, t)
            })
        },
        v = function (e, t) {
            return t && t.split(" ").forEach(function (t) {
                return (0, d.
            default)(e, t)
            })
        },
        y = (a({}, B.
    default.propTypes, {
            classNames: w.classNamesShape,
            onEnter: c.func,
            onEntering: c.func,
            onEntered: c.func,
            onExit: c.func,
            onExiting: c.func,
            onExited: c.func
        }), function (e) {
            function t() {
                var A, n, o;
                r(this, t);
                for (var a = arguments.length, s = Array(a), c = 0; c < a; c++) s[c] = arguments[c];
                return A = n = i(this, e.call.apply(e, [this].concat(s))),
                n.onEnter = function (e, t) {
                    var A = n.getClassNames(t ? "appear" : "enter"),
                        r = A.className;
                    n.removeClasses(e, "exit"),
                    m(e, r),
                    n.props.onEnter && n.props.onEnter(e)
                },
                n.onEntering = function (e, t) {
                    var A = n.getClassNames(t ? "appear" : "enter"),
                        r = A.activeClassName;
                    n.reflowAndAddClass(e, r),
                    n.props.onEntering && n.props.onEntering(e)
                },
                n.onEntered = function (e, t) {
                    n.removeClasses(e, t ? "appear" : "enter"),
                    n.props.onEntered && n.props.onEntered(e)
                },
                n.onExit = function (e) {
                    var t = n.getClassNames("exit"),
                        A = t.className;
                    n.removeClasses(e, "appear"),
                    n.removeClasses(e, "enter"),
                    m(e, A),
                    n.props.onExit && n.props.onExit(e)
                },
                n.onExiting = function (e) {
                    var t = n.getClassNames("exit"),
                        A = t.activeClassName;
                    n.reflowAndAddClass(e, A),
                    n.props.onExiting && n.props.onExiting(e)
                },
                n.onExited = function (e) {
                    n.removeClasses(e, "exit"),
                    n.props.onExited && n.props.onExited(e)
                },
                n.getClassNames = function (e) {
                    var t = n.props.classNames,
                        A = "string" != typeof t ? t[e] : t + "-" + e;
                    return {
                            className: A,
                            activeClassName: "string" != typeof t ? t[e + "Active"] : A + "-active"
                        }
                },
                o = A,
                i(n, o)
            }
            return o(t, e),
            t.prototype.removeClasses = function (e, t) {
                var A = this.getClassNames(t),
                    n = A.className,
                    r = A.activeClassName;
                n && v(e, n),
                r && v(e, r)
            },
            t.prototype.reflowAndAddClass = function (e, t) {
                e.scrollTop,
                m(e, t)
            },
            t.prototype.render = function () {
                var e = a({}, this.props);
                return delete e.classNames,
                p.
            default.createElement(B.
            default, a({}, e, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }))
            },
            t
        }(p.
    default.Component));
    y.propTypes = {},
    t.
default = y,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function r(e, t) {
        var A = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
        return A
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    t.__esModule = !0;
    var s = Object.assign ||
    function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var A = arguments[t];
            for (var n in A) Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n])
        }
        return e
    },
        c = A(54),
        l = n(c),
        u = A(9),
        f = n(u),
        d = A(749),
        h = Object.values ||
    function (e) {
            return Object.keys(e).map(function (t) {
                return e[t]
            })
        },
        p = (l.
    default.any, l.
    default.node, l.
    default.bool, l.
    default.bool, l.
    default.bool, l.
    default.func, {
            component: "div",
            childFactory: function (e) {
                return e
            }
        }),
        g = function (e) {
            function t(A, n) {
                i(this, t);
                var r = o(this, e.call(this, A, n));
                return r.handleExited = function (e, t, A) {
                    var n = (0, d.getChildMapping)(r.props.children);
                    e in n || (A && A(t), r.setState(function (t) {
                        var A = s({}, t.children);
                        return delete A[e],
                        {
                            children: A
                        }
                    }))
                },
                r.state = {
                    children: (0, d.getChildMapping)(A.children, function (e) {
                        var t = function (t) {
                            r.handleExited(e.key, t, e.props.onExited)
                        };
                        return (0, u.cloneElement)(e, {
                            onExited: t,
                            in : !0,
                            appear: r.getProp(e, "appear"),
                            enter: r.getProp(e, "enter"),
                            exit: r.getProp(e, "exit")
                        })
                    })
                },
                r
            }
            return a(t, e),
            t.prototype.getChildContext = function () {
                return {
                    transitionGroup: {
                        isMounting: !this.appeared
                    }
                }
            },
            t.prototype.getProp = function (e, t) {
                var A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.props;
                return null != A[t] ? A[t] : e.props[t]
            },
            t.prototype.componentDidMount = function () {
                this.appeared = !0
            },
            t.prototype.componentWillReceiveProps = function (e) {
                var t = this,
                    A = this.state.children,
                    n = (0, d.getChildMapping)(e.children),
                    r = (0, d.mergeChildMappings)(A, n);
                Object.keys(r).forEach(function (i) {
                        var o = r[i];
                        if ((0, u.isValidElement)(o)) {
                            var a = function (e) {
                                t.handleExited(o.key, e, o.props.onExited)
                            },
                                s = i in A,
                                c = i in n,
                                l = A[i],
                                f = (0, u.isValidElement)(l) && !l.props. in ;
                            !c || s && !f ? c || !s || f ? c && s && (0, u.isValidElement)(l) && (r[i] = (0, u.cloneElement)(o, {
                                    onExited: a,
                                    in : l.props. in ,
                                    exit: t.getProp(o, "exit", e),
                                    enter: t.getProp(o, "enter", e)
                                })) : r[i] = (0, u.cloneElement)(o, { in : !1
                                }) : r[i] = (0, u.cloneElement)(o, {
                                    onExited: a,
                                    in : !0,
                                    exit: t.getProp(o, "exit", e),
                                    enter: t.getProp(o, "enter", e)
                                })
                        }
                    }),
                this.setState({
                        children: r
                    })
            },
            t.prototype.render = function () {
                var e = this.props,
                    t = e.component,
                    A = e.childFactory,
                    n = r(e, ["component", "childFactory"]),
                    i = this.state.children;
                return delete n.appear,
                delete n.enter,
                delete n.exit,
                f.
            default.createElement(t, n, h(i).map(A))
            },
            t
        }(f.
    default.Component);
    g.childContextTypes = {
            transitionGroup: l.
        default.object.isRequired
        },
    g.propTypes = {},
    g.defaultProps = p,
    t.
default = g,
    e.exports = t.
default
},


function (e, t, A) {
    "use strict";

    function n(e, t) {
        var A = function (e) {
            return t && (0, i.isValidElement)(e) ? t(e) : e
        },
            n = Object.create(null);
        return e && i.Children.map(e, function (e) {
                return e
            }).forEach(function (e) {
                n[e.key] = A(e)
            }),
        n
    }
    function r(e, t) {
        function A(A) {
            return A in t ? t[A] : e[A]
        }
        e = e || {},
        t = t || {};
        var n = Object.create(null),
            r = [];
        for (var i in e) i in t ? r.length && (n[i] = r, r = []) : r.push(i);
        var o = void 0,
            a = {};
        for (var s in t) {
                if (n[s]) for (o = 0; o < n[s].length; o++) {
                    var c = n[s][o];
                    a[n[s][o]] = A(c)
                }
                a[s] = A(s)
            }
        for (o = 0; o < r.length; o++) a[r[o]] = A(r[o]);
        return a
    }
    t.__esModule = !0,
    t.getChildMapping = n,
    t.mergeChildMappings = r;
    var i = A(9)
},
, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * Reqwest! A general purpose XHR connection manager
     * license MIT (c) Dustin Diaz 2015
     * https://github.com/ded/reqwest
     */
    !
    function (e, t, A) {
        void 0 !== module && module.exports ? module.exports = A() : (__WEBPACK_AMD_DEFINE_FACTORY__ = A, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }(0, 0, function () {
        function succeed(e) {
            var t = protocolRe.exec(e.url);
            return t = t && t[1] || context.location.protocol,
            httpsRe.test(t) ? twoHundo.test(e.request.status) : !! e.request.response
        }
        function handleReadyState(e, t, A) {
            return function () {
                return e._aborted ? A(e.request) : e._timedOut ? A(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : A(e.request)))
            }
        }
        function setHeaders(e, t) {
            var A, n = t.headers || {};
            n.Accept = n.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
            var r = "undefined" != typeof FormData && t.data instanceof FormData;
            t.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith),
            n[contentType] || r || (n[contentType] = t.contentType || defaultHeaders.contentType);
            for (A in n) n.hasOwnProperty(A) && "setRequestHeader" in e && e.setRequestHeader(A, n[A])
        }
        function setCredentials(e, t) {
            void 0 !== t.withCredentials && void 0 !== e.withCredentials && (e.withCredentials = !! t.withCredentials)
        }
        function generalCallback(e) {
            lastValue = e
        }
        function urlappend(e, t) {
            return e + (/\?/.test(e) ? "&" : "?") + t
        }
        function handleJsonp(e, t, A, n) {
            var r = uniqid++,
                i = e.jsonpCallback || "callback",
                o = e.jsonpCallbackName || reqwest.getcallbackPrefix(r),
                a = new RegExp("((^|\\?|&)" + i + ")=([^&]+)"),
                s = n.match(a),
                c = doc.createElement("script"),
                l = 0,
                u = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
            return s ? "?" === s[3] ? n = n.replace(a, "$1=" + o) : o = s[3] : n = urlappend(n, i + "=" + o),
            context[o] = generalCallback,
            c.type = "text/javascript",
            c.src = n,
            c.async = !0,
            void 0 === c.onreadystatechange || u || (c.htmlFor = c.id = "_reqwest_" + r),
            c.onload = c.onreadystatechange = function () {
                    if (c[readyState] && "complete" !== c[readyState] && "loaded" !== c[readyState] || l) return !1;
                    c.onload = c.onreadystatechange = null,
                    c.onclick && c.onclick(),
                    t(lastValue),
                    lastValue = void 0,
                    head.removeChild(c),
                    l = 1
                },
            head.appendChild(c),
            {
                    abort: function () {
                        c.onload = c.onreadystatechange = null,
                        A({}, "Request is aborted: timeout", {}),
                        lastValue = void 0,
                        head.removeChild(c),
                        l = 1
                    }
                }
        }
        function getRequest(e, t) {
            var A, n = this.o,
                r = (n.method || "GET").toUpperCase(),
                i = "string" == typeof n ? n : n.url,
                o = !1 !== n.processData && n.data && "string" != typeof n.data ? reqwest.toQueryString(n.data) : n.data || null,
                a = !1;
            return "jsonp" != n.type && "GET" != r || !o || (i = urlappend(i, o), o = null),
            "jsonp" == n.type ? handleJsonp(n, e, t, i) : (A = n.xhr && n.xhr(n) || xhr(n), A.open(r, i, !1 !== n.async), setHeaders(A, n), setCredentials(A, n), context[xDomainRequest] && A instanceof context[xDomainRequest] ? (A.onload = e, A.onerror = t, A.onprogress = function () {}, a = !0) : A.onreadystatechange = handleReadyState(this, e, t), n.before && n.before(A), a ? setTimeout(function () {
                    A.send(o)
                }, 200) : A.send(o), A)
        }
        function Reqwest(e, t) {
            this.o = e,
            this.fn = t,
            init.apply(this, arguments)
        }
        function setType(e) {
            if (null !== e) return e.match("json") ? "json" : e.match("javascript") ? "js" : e.match("text") ? "html" : e.match("xml") ? "xml" : void 0
        }
        function init(o, fn) {
            function complete(e) {
                for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
            }
            function success(resp) {
                var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                resp = "jsonp" !== type ? self.request : resp;
                var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                    r = filteredResponse;
                try {
                        resp.responseText = r
                    } catch (e) {}
                if (r) switch (type) {
                    case "json":
                        try {
                            resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                        } catch (e) {
                            return error(resp, "Could not parse JSON in response", e)
                        }
                        break;
                    case "js":
                        resp = eval(r);
                        break;
                    case "html":
                        resp = r;
                        break;
                    case "xml":
                        resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                    }
                for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                complete(resp)
            }
            function timedOut() {
                self._timedOut = !0,
                self.request.abort()
            }
            function error(e, t, A) {
                for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = A, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, A);
                complete(e)
            }
            this.url = "string" == typeof o ? o : o.url,
            this.timeout = null,
            this._fulfilled = !1,
            this._successHandler = function () {},
            this._fulfillmentHandlers = [],
            this._errorHandlers = [],
            this._completeHandlers = [],
            this._erred = !1,
            this._responseArgs = {};
            var self = this;
            fn = fn ||
            function () {},
            o.timeout && (this.timeout = setTimeout(function () {
                timedOut()
            }, o.timeout)),
            o.success && (this._successHandler = function () {
                o.success.apply(o, arguments)
            }),
            o.error && this._errorHandlers.push(function () {
                o.error.apply(o, arguments)
            }),
            o.complete && this._completeHandlers.push(function () {
                o.complete.apply(o, arguments)
            }),
            this.request = getRequest.call(this, success, error)
        }
        function reqwest(e, t) {
            return new Reqwest(e, t)
        }
        function normalize(e) {
            return e ? e.replace(/\r?\n/g, "\r\n") : ""
        }
        function serial(e, t) {
            var A, n, r, i, o = e.name,
                a = e.tagName.toLowerCase(),
                s = function (e) {
                    e && !e.disabled && t(o, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text))
                };
            if (!e.disabled && o) switch (a) {
                case "input":
                    /reset|button|image|file/i.test(e.type) || (A = /checkbox/i.test(e.type), n = /radio/i.test(e.type), r = e.value, (!(A || n) || e.checked) && t(o, normalize(A && "" === r ? "on" : r)));
                    break;
                case "textarea":
                    t(o, normalize(e.value));
                    break;
                case "select":
                    if ("select-one" === e.type.toLowerCase()) s(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                    else for (i = 0; e.length && i < e.length; i++) e.options[i].selected && s(e.options[i])
                }
        }
        function eachFormElement() {
            var e, t, A = this;
            for (t = 0; t < arguments.length; t++) e = arguments[t],
            /input|select|textarea/i.test(e.tagName) && serial(e, A),


            function (e, t) {
                var n, r, i;
                for (n = 0; n < t.length; n++) for (i = e[byTag](t[n]), r = 0; r < i.length; r++) serial(i[r], A)
            }(e, ["input", "select", "textarea"])
        }
        function serializeQueryString() {
            return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
        }
        function serializeHash() {
            var e = {};
            return eachFormElement.apply(function (t, A) {
                t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(A)) : e[t] = A
            }, arguments),
            e
        }
        function buildParams(e, t, A, n) {
            var r, i, o, a = /\[\]$/;
            if (isArray(t)) for (i = 0; t && i < t.length; i++) o = t[i],
            A || a.test(e) ? n(e, o) : buildParams(e + "[" + ("object" == typeof o ? i : "") + "]", o, A, n);
            else if (t && "[object Object]" === t.toString()) for (r in t) buildParams(e + "[" + r + "]", t[r], A, n);
            else n(e, t)
        }
        var context = this;
        if ("window" in context) var doc = document,
            byTag = "getElementsByTagName",
            head = doc[byTag]("head")[0];
        else {
                var XHR2;
                try {
                    XHR2 = __webpack_require__(755)
                } catch (e) {
                    throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
                }
            }
        var httpsRe = /^http/,
            protocolRe = /(^\w+):\/\//,
            twoHundo = /^(20\d|1223)$/,
            readyState = "readyState",
            contentType = "Content-Type",
            requestedWith = "X-Requested-With",
            uniqid = 0,
            callbackPrefix = "reqwest_" + +new Date,
            lastValue, xmlHttpRequest = "XMLHttpRequest",
            xDomainRequest = "XDomainRequest",
            noop = function () {},
            isArray = "function" == typeof Array.isArray ? Array.isArray : function (e) {
                return e instanceof Array
            },
            defaultHeaders = {
                contentType: "application/x-www-form-urlencoded",
                requestedWith: xmlHttpRequest,
                accept: {
                    "*": "text/javascript, text/html, application/xml, text/xml, */*",
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    js: "application/javascript, text/javascript"
                }
            },
            xhr = function (e) {
                if (!0 === e.crossOrigin) {
                    var t = context[xmlHttpRequest] ? new XMLHttpRequest : null;
                    if (t && "withCredentials" in t) return t;
                    if (context[xDomainRequest]) return new XDomainRequest;
                    throw new Error("Browser does not support cross-origin requests")
                }
                return context[xmlHttpRequest] ? new XMLHttpRequest : XHR2 ? new XHR2 : new ActiveXObject("Microsoft.XMLHTTP")
            },
            globalSetupOptions = {
                dataFilter: function (e) {
                    return e
                }
            };
        return Reqwest.prototype = {
                abort: function () {
                    this._aborted = !0,
                    this.request.abort()
                },
                retry: function () {
                    init.call(this, this.o, this.fn)
                },
                then: function (e, t) {
                    return e = e ||
                    function () {},
                    t = t ||
                    function () {},
                    this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)),
                    this
                },
                always: function (e) {
                    return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e),
                    this
                },
                fail: function (e) {
                    return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e),
                    this
                },
                catch: function (e) {
                    return this.fail(e)
                }
            },
        reqwest.serializeArray = function () {
                var e = [];
                return eachFormElement.apply(function (t, A) {
                    e.push({
                        name: t,
                        value: A
                    })
                }, arguments),
                e
            },
        reqwest.serialize = function () {
                if (0 === arguments.length) return "";
                var e, t, A = Array.prototype.slice.call(arguments, 0);
                return e = A.pop(),
                e && e.nodeType && A.push(e) && (e = null),
                e && (e = e.type),
                t = "map" == e ? serializeHash : "array" == e ? reqwest.serializeArray : serializeQueryString,
                t.apply(null, A)
            },
        reqwest.toQueryString = function (e, t) {
                var A, n, r = t || !1,
                    i = [],
                    o = encodeURIComponent,
                    a = function (e, t) {
                        t = "function" == typeof t ? t() : null == t ? "" : t,
                        i[i.length] = o(e) + "=" + o(t)
                    };
                if (isArray(e)) for (n = 0; e && n < e.length; n++) a(e[n].name, e[n].value);
                else for (A in e) e.hasOwnProperty(A) && buildParams(A, e[A], r, a);
                return i.join("&").replace(/%20/g, "+")
            },
        reqwest.getcallbackPrefix = function () {
                return callbackPrefix
            },
        reqwest.compat = function (e, t) {
                return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)),
                new Reqwest(e, t)
            },
        reqwest.ajaxSetup = function (e) {
                e = e || {};
                for (var t in e) globalSetupOptions[t] = e[t]
            },
        reqwest
    })
},


function (e, t) {
    e.exports = function (e) {
        function t(e) {
            "undefined" != typeof console && (console.error || console.log)("[Script Loader]", e)
        }
        try {
            "undefined" != typeof execScript &&
            function () {
                return "undefined" != typeof attachEvent && "undefined" == typeof addEventListener
            }() ? execScript(e) : "undefined" != typeof eval ? eval.call(null, e) : t("EvalError: No eval function available")
        } catch (e) {
            t(e)
        }
    }
},


function (e, t, A) {
    var n, r;
    /*!
     _______ _____ __   _ _______      _  _  _ _______ _    _ _______ _______
     |______   |   | \  | |______      |  |  | |_____|  \  /  |______ |______
     ______| __|__ |  \_| |______      |__|__| |     |   \/   |______ ______|
     
     sine-waves v0.3.0 <https://github.com/isuttell/sine-waves>
     Contributor(s): Isaac Suttell <isaac@isaacsuttell.com>
     Last Build: 2014-12-03
     Do not edit this file. It is created from the src/ folder.
     */
    !
    function (A, i) {
        "use strict";
        n = [],
        void 0 !== (r = function () {
            return i()
        }.apply(t, n)) && (e.exports = r)
    }(0, function () {
        "use strict";

        function e(e) {
            if (this.options = s.defaults(this.options, e), this.el = this.options.el, delete this.options.el, !this.el) throw "No Canvas Selected";
            if (this.ctx = this.el.getContext("2d"), this.waves = this.options.waves, delete this.options.waves, !this.waves || !this.waves.length) throw "No waves specified";
            this.dpr = window.devicePixelRatio || 1,
            this.updateDimensions(),
            window.addEventListener("resize", this.updateDimensions.bind(this)),
            this.setupUserFunctions(),
            this.easeFn = s.getFn(d, this.options.ease, "linear"),
            this.rotation = s.degreesToRadians(this.options.rotate),
            s.isType(this.options.running, "boolean") && (this.running = this.options.running),
            this.setupWaveFns(),
            this.loop()
        }
        function t(e, t) {
            return s.isType(e, "number") ? e : (e = e.toString(), e.indexOf("%") > -1 ? (e = parseFloat(e), e > 1 && (e /= 100), t * e) : e.indexOf("px") > -1 ? parseInt(e, 10) : void 0)
        }
        Function.prototype.bind || (Function.prototype.bind = function (e) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var t = Array.prototype.slice.call(arguments, 1),
                A = this,
                n = function () {},
                r = function () {
                    return A.apply(this instanceof n && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                };
            return n.prototype = this.prototype,
            r.prototype = new n,
            r
        });
        for (var A = ["ms", "moz", "webkit", "o"], n = 0; n < A.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[A[n] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[A[n] + "CancelAnimationFrame"] || window[A[n] + "CancelRequestAnimationFrame"];
        if (!window.requestAnimationFrame) {
            var r = 0;
            window.requestAnimationFrame = function (e) {
                var t = (new Date).getTime(),
                    A = Math.max(0, 16 - (t - r)),
                    n = window.setTimeout(function () {
                        e(t + A)
                    }, A);
                return r = t + A,
                n
            }
        }
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        });
        var i = Math.PI / 180,
            o = 2 * Math.PI,
            a = Math.PI / 2,
            s = {},
            c = s.isType = function (e, t) {
                return {}.toString.call(e).toLowerCase() === "[object " + t.toLowerCase() + "]"
            },
            l = s.isFunction = function (e) {
                return c(e, "function")
            },
            u = s.isString = function (e) {
                return c(e, "string")
            },
            f = (s.isNumber = function (e) {
                return c(e, "number")
            }, s.shallowClone = function (e) {
                var t = {};
                for (var A in e) e.hasOwnProperty(A) && (t[A] = e[A]);
                return t
            }),
            d = (s.defaults = function (e, t) {
                c(t, "object") || (t = {});
                var A = f(e);
                for (var n in t) t.hasOwnProperty(n) && (A[n] = t[n]);
                return A
            }, s.degreesToRadians = function (e) {
                if (!c(e, "number")) throw new TypeError("Degrees is not a number");
                return e * i
            }, s.getFn = function (e, t, A) {
                return l(t) ? t : u(t) && l(e[t.toLowerCase()]) ? e[t.toLowerCase()] : e[A]
            }, {});
        d.linear = function (e, t) {
                return t
            },
        d.sinein = function (e, t) {
                return t * (Math.sin(e * Math.PI - a) + 1) * .5
            },
        d.sineout = function (e, t) {
                return t * (Math.sin(e * Math.PI + a) + 1) * .5
            },
        d.sineinout = function (e, t) {
                return t * (Math.sin(e * o - a) + 1) * .5
            };
        var h = {};
        h.sine = function (e) {
                return Math.sin(e)
            },
        h.sin = h.sine,
        h.sign = function (e) {
                return e = +e,
                0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
            },
        h.square = function (e) {
                return h.sign(Math.sin(e * o))
            },
        h.sawtooth = function (e) {
                return 2 * (e - Math.floor(e + .5))
            },
        h.triangle = function (e) {
                return Math.abs(h.sawtooth(e))
            },
        e.prototype.options = {
                speed: 10,
                rotate: 0,
                ease: "Linear",
                wavesWidth: "95%"
            },
        e.prototype.setupWaveFns = function () {
                for (var e = -1, t = this.waves.length; ++e < t;) this.waves[e].waveFn = s.getFn(h, this.waves[e].type, "sine")
            },
        e.prototype.setupUserFunctions = function () {
                s.isFunction(this.options.resizeEvent) && (this.options.resizeEvent.call(this), window.addEventListener("resize", this.options.resizeEvent.bind(this))),
                s.isFunction(this.options.initialize) && this.options.initialize.call(this)
            };
        var p = {
                timeModifier: 1,
                amplitude: 50,
                wavelength: 50,
                segmentLength: 10,
                lineWidth: 1,
                strokeStyle: "rgba(255, 255, 255, 0.2)",
                type: "Sine"
            };
        return e.prototype.getDimension = function (e) {
                return s.isNumber(this.options[e]) ? this.options[e] : s.isFunction(this.options[e]) ? this.options[e].call(this, this.el) : "width" === e ? this.el.clientWidth : "height" === e ? this.el.clientHeight : void 0
            },
        e.prototype.updateDimensions = function () {
                var e = this.getDimension("width"),
                    A = this.getDimension("height");
                this.width = this.el.width = e * this.dpr,
                this.height = this.el.height = A * this.dpr,
                this.el.style.width = e + "px",
                this.el.style.height = A + "px",
                this.waveWidth = t(this.options.wavesWidth, this.width),
                this.waveLeft = (this.width - this.waveWidth) / 2,
                this.yAxis = this.height / 2
            },
        e.prototype.clear = function () {
                this.ctx.clearRect(0, 0, this.width, this.height)
            },
        e.prototype.time = 0,
        e.prototype.update = function (e) {
                this.time = this.time - .007,
                void 0 === e && (e = this.time);
                var t = -1,
                    A = this.waves.length;
                for (this.clear(), this.ctx.save(), this.rotation > 0 && (this.ctx.translate(this.width / 2, this.height / 2), this.ctx.rotate(this.rotation), this.ctx.translate(-this.width / 2, -this.height / 2)); ++t < A;) {
                        var n = this.waves[t].timeModifier || 1;
                        this.drawWave(e * n, this.waves[t])
                    }
                this.ctx.restore(),
                t = void 0,
                A = void 0
            },
        e.prototype.getPoint = function (e, t, A) {
                var n = e * this.options.speed + (-this.yAxis + t) / A.wavelength,
                    r = A.waveFn.call(this, n, h),
                    i = this.easeFn.call(this, t / this.waveWidth, A.amplitude);
                return n = t + this.waveLeft,
                r = i * r + this.yAxis,
                {
                        x: n,
                        y: r
                    }
            },
        e.prototype.drawWave = function (e, t) {
                t = s.defaults(p, t),
                this.ctx.lineWidth = t.lineWidth * this.dpr,
                this.ctx.strokeStyle = t.strokeStyle,
                this.ctx.lineCap = "butt",
                this.ctx.lineJoin = "round",
                this.ctx.beginPath(),
                this.ctx.moveTo(0, this.yAxis),
                this.ctx.lineTo(this.waveLeft, this.yAxis);
                var A, n;
                for (A = 0; A < this.waveWidth; A += t.segmentLength) n = this.getPoint(e, A, t),
                this.ctx.lineTo(n.x, n.y),
                n = void 0;
                A = void 0,
                t = void 0,
                this.ctx.lineTo(this.width, this.yAxis),
                this.ctx.stroke()
            },
        e.prototype.running = !0,
        e.prototype.loop = function () {
                !0 === this.running && this.update(),
                window.requestAnimationFrame(this.loop.bind(this))
            },
        e.prototype.Waves = h,
        e.prototype.Ease = d,
        e
    })
},


function (e, t) {
    !
    function (t, A) {
        e.exports = function (e, t) {
            function A(t, A, n) {
                e.WeixinJSBridge ? WeixinJSBridge.invoke(t, r(A), function (e) {
                    a(t, e, n)
                }) : l(t, n)
            }
            function n(t, A, n) {
                e.WeixinJSBridge ? WeixinJSBridge.on(t, function (e) {
                    n && n.trigger && n.trigger(e),
                    a(t, e, A)
                }) : n ? l(t, n) : l(t, A)
            }
            function r(e) {
                return e = e || {},
                e.appId = x.appId,
                e.verifyAppId = x.appId,
                e.verifySignType = "sha1",
                e.verifyTimestamp = x.timestamp + "",
                e.verifyNonceStr = x.nonceStr,
                e.verifySignature = x.signature,
                e
            }
            function i(e) {
                return {
                    timeStamp: e.timestamp + "",
                    nonceStr: e.nonceStr,
                    package: e.package,
                    paySign: e.paySign,
                    signType: e.signType || "SHA1"
                }
            }
            function o(e) {
                return e.postalCode = e.addressPostalCode,
                delete e.addressPostalCode,
                e.provinceName = e.proviceFirstStageName,
                delete e.proviceFirstStageName,
                e.cityName = e.addressCitySecondStageName,
                delete e.addressCitySecondStageName,
                e.countryName = e.addressCountiesThirdStageName,
                delete e.addressCountiesThirdStageName,
                e.detailInfo = e.addressDetailInfo,
                delete e.addressDetailInfo,
                e
            }
            function a(e, t, A) {
                "openEnterpriseChat" == e && (t.errCode = t.err_code),
                delete t.err_code,
                delete t.err_desc,
                delete t.err_detail;
                var n = t.errMsg;
                n || (n = t.err_msg, delete t.err_msg, n = s(e, n), t.errMsg = n),
                (A = A || {})._complete && (A._complete(t), delete A._complete),
                n = t.errMsg || "",
                x.debug && !A.isInnerInvoke && alert(JSON.stringify(t));
                var r = n.indexOf(":");
                switch (n.substring(r + 1)) {
                case "ok":
                    A.success && A.success(t);
                    break;
                case "cancel":
                    A.cancel && A.cancel(t);
                    break;
                default:
                    A.fail && A.fail(t)
                }
                A.complete && A.complete(t)
            }
            function s(e, t) {
                var A = e,
                    n = B[A];
                n && (A = n);
                var r = "ok";
                if (t) {
                        var i = t.indexOf(":");
                        "confirm" == (r = t.substring(i + 1)) && (r = "ok"),
                        "failed" == r && (r = "fail"),
                        -1 != r.indexOf("failed_") && (r = r.substring(7)),
                        -1 != r.indexOf("fail_") && (r = r.substring(5)),
                        "access denied" != (r = (r = r.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != r || (r = "permission denied"),
                        "config" == A && "function not exist" == r && (r = "ok"),
                        "" == r && (r = "fail")
                    }
                return t = A + ":" + r
            }
            function c(e) {
                if (e) {
                    for (var t = 0, A = e.length; t < A; ++t) {
                        var n = e[t],
                            r = g[n];
                        r && (e[t] = r)
                    }
                    return e
                }
            }
            function l(e, t) {
                if (!(!x.debug || t && t.isInnerInvoke)) {
                    var A = B[e];
                    A && (e = A),
                    t && t._complete && delete t._complete,
                    console.log('"' + e + '",', t || "")
                }
            }
            function u(e) {
                if (!(E || Q || x.debug || F < "6.0.2" || H.systemType < 0)) {
                    var t = new Image;
                    H.appId = x.appId,
                    H.initTime = _.initEndTime - _.initStartTime,
                    H.preVerifyTime = _.preVerifyEndTime - _.preVerifyStartTime,
                    O.getNetworkType({
                        isInnerInvoke: !0,
                        success: function (e) {
                            H.networkType = e.networkType;
                            var A = "https://open.weixin.qq.com/sdk/report?v=" + H.version + "&o=" + H.isPreVerifyOk + "&s=" + H.systemType + "&c=" + H.clientVersion + "&a=" + H.appId + "&n=" + H.networkType + "&i=" + H.initTime + "&p=" + H.preVerifyTime + "&u=" + H.url;
                            t.src = A
                        }
                    })
                }
            }
            function f() {
                return (new Date).getTime()
            }
            function d(t) {
                C && (e.WeixinJSBridge ? "preInject" === w.__wxjsjs__isPreInject ? w.addEventListener && w.addEventListener("WeixinJSBridgeReady", t, !1) : t() : w.addEventListener && w.addEventListener("WeixinJSBridgeReady", t, !1))
            }
            function h() {
                O.invoke || (O.invoke = function (t, A, n) {
                    e.WeixinJSBridge && WeixinJSBridge.invoke(t, r(A), n)
                }, O.on = function (t, A) {
                    e.WeixinJSBridge && WeixinJSBridge.on(t, A)
                })
            }
            function p(e) {
                if ("string" == typeof e && e.length > 0) {
                    var t = e.split("?")[0],
                        A = e.split("?")[1];
                    return t += ".html",
                    void 0 !== A ? t + "?" + A : t
                }
            }
            if (!e.jWeixin) {
                var g = {
                    config: "preVerifyJSAPI",
                    onMenuShareTimeline: "menu:share:timeline",
                    onMenuShareAppMessage: "menu:share:appmessage",
                    onMenuShareQQ: "menu:share:qq",
                    onMenuShareWeibo: "menu:share:weiboApp",
                    onMenuShareQZone: "menu:share:QZone",
                    previewImage: "imagePreview",
                    getLocation: "geoLocation",
                    openProductSpecificView: "openProductViewWithPid",
                    addCard: "batchAddCard",
                    openCard: "batchViewCard",
                    chooseWXPay: "getBrandWCPayRequest",
                    openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
                    startSearchBeacons: "startMonitoringBeacons",
                    stopSearchBeacons: "stopMonitoringBeacons",
                    onSearchBeacons: "onBeaconsInRange",
                    consumeAndShareCard: "consumedShareCard",
                    openAddress: "editAddress"
                },
                    B = function () {
                        var e = {};
                        for (var t in g) e[g[t]] = t;
                        return e
                    }(),
                    w = e.document,
                    m = w.title,
                    v = navigator.userAgent.toLowerCase(),
                    y = navigator.platform.toLowerCase(),
                    E = !(!y.match("mac") && !y.match("win")),
                    Q = -1 != v.indexOf("wxdebugger"),
                    C = -1 != v.indexOf("micromessenger"),
                    U = -1 != v.indexOf("android"),
                    b = -1 != v.indexOf("iphone") || -1 != v.indexOf("ipad"),
                    F = function () {
                        var e = v.match(/micromessenger\/(\d+\.\d+\.\d+)/) || v.match(/micromessenger\/(\d+\.\d+)/);
                        return e ? e[1] : ""
                    }(),
                    _ = {
                        initStartTime: f(),
                        initEndTime: 0,
                        preVerifyStartTime: 0,
                        preVerifyEndTime: 0
                    },
                    H = {
                        version: 1,
                        appId: "",
                        initTime: 0,
                        preVerifyTime: 0,
                        networkType: "",
                        isPreVerifyOk: 1,
                        systemType: b ? 1 : U ? 2 : -1,
                        clientVersion: F,
                        url: encodeURIComponent(location.href)
                    },
                    x = {},
                    N = {
                        _completes: []
                    },
                    T = {
                        state: 0,
                        data: {}
                    };
                d(function () {
                        _.initEndTime = f()
                    });
                var I = !1,
                    S = [],
                    O = {
                        config: function (e) {
                            x = e,
                            l("config", e);
                            var t = !1 !== x.check;
                            d(function () {
                                if (t) A(g.config, {
                                    verifyJsApiList: c(x.jsApiList)
                                }, function () {
                                    N._complete = function (e) {
                                        _.preVerifyEndTime = f(),
                                        T.state = 1,
                                        T.data = e
                                    },
                                    N.success = function (e) {
                                        H.isPreVerifyOk = 0
                                    },
                                    N.fail = function (e) {
                                        N._fail ? N._fail(e) : T.state = -1
                                    };
                                    var e = N._completes;
                                    return e.push(function () {
                                        u()
                                    }),
                                    N.complete = function (t) {
                                        for (var A = 0, n = e.length; A < n; ++A) e[A]();
                                        N._completes = []
                                    },
                                    N
                                }()),
                                _.preVerifyStartTime = f();
                                else {
                                    T.state = 1;
                                    for (var e = N._completes, n = 0, r = e.length; n < r; ++n) e[n]();
                                    N._completes = []
                                }
                            }),
                            h()
                        },
                        ready: function (e) {
                            0 != T.state ? e() : (N._completes.push(e), !C && x.debug && e())
                        },
                        error: function (e) {
                            F < "6.0.2" || (-1 == T.state ? e(T.data) : N._fail = e)
                        },
                        checkJsApi: function (e) {
                            var t = function (e) {
                                var t = e.checkResult;
                                for (var A in t) {
                                    var n = B[A];
                                    n && (t[n] = t[A], delete t[A])
                                }
                                return e
                            };
                            A("checkJsApi", {
                                jsApiList: c(e.jsApiList)
                            }, (e._complete = function (e) {
                                if (U) {
                                    var A = e.checkResult;
                                    A && (e.checkResult = JSON.parse(A))
                                }
                                e = t(e)
                            }, e))
                        },
                        onMenuShareTimeline: function (e) {
                            n(g.onMenuShareTimeline, {
                                complete: function () {
                                    A("shareTimeline", {
                                        title: e.title || m,
                                        desc: e.title || m,
                                        img_url: e.imgUrl || "",
                                        link: e.link || location.href,
                                        type: e.type || "link",
                                        data_url: e.dataUrl || ""
                                    }, e)
                                }
                            }, e)
                        },
                        onMenuShareAppMessage: function (e) {
                            n(g.onMenuShareAppMessage, {
                                complete: function () {
                                    A("sendAppMessage", {
                                        title: e.title || m,
                                        desc: e.desc || "",
                                        link: e.link || location.href,
                                        img_url: e.imgUrl || "",
                                        type: e.type || "link",
                                        data_url: e.dataUrl || ""
                                    }, e)
                                }
                            }, e)
                        },
                        onMenuShareQQ: function (e) {
                            n(g.onMenuShareQQ, {
                                complete: function () {
                                    A("shareQQ", {
                                        title: e.title || m,
                                        desc: e.desc || "",
                                        img_url: e.imgUrl || "",
                                        link: e.link || location.href
                                    }, e)
                                }
                            }, e)
                        },
                        onMenuShareWeibo: function (e) {
                            n(g.onMenuShareWeibo, {
                                complete: function () {
                                    A("shareWeiboApp", {
                                        title: e.title || m,
                                        desc: e.desc || "",
                                        img_url: e.imgUrl || "",
                                        link: e.link || location.href
                                    }, e)
                                }
                            }, e)
                        },
                        onMenuShareQZone: function (e) {
                            n(g.onMenuShareQZone, {
                                complete: function () {
                                    A("shareQZone", {
                                        title: e.title || m,
                                        desc: e.desc || "",
                                        img_url: e.imgUrl || "",
                                        link: e.link || location.href
                                    }, e)
                                }
                            }, e)
                        },
                        startRecord: function (e) {
                            A("startRecord", {}, e)
                        },
                        stopRecord: function (e) {
                            A("stopRecord", {}, e)
                        },
                        onVoiceRecordEnd: function (e) {
                            n("onVoiceRecordEnd", e)
                        },
                        playVoice: function (e) {
                            A("playVoice", {
                                localId: e.localId
                            }, e)
                        },
                        pauseVoice: function (e) {
                            A("pauseVoice", {
                                localId: e.localId
                            }, e)
                        },
                        stopVoice: function (e) {
                            A("stopVoice", {
                                localId: e.localId
                            }, e)
                        },
                        onVoicePlayEnd: function (e) {
                            n("onVoicePlayEnd", e)
                        },
                        uploadVoice: function (e) {
                            A("uploadVoice", {
                                localId: e.localId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            }, e)
                        },
                        downloadVoice: function (e) {
                            A("downloadVoice", {
                                serverId: e.serverId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            }, e)
                        },
                        translateVoice: function (e) {
                            A("translateVoice", {
                                localId: e.localId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            }, e)
                        },
                        chooseImage: function (e) {
                            A("chooseImage", {
                                scene: "1|2",
                                count: e.count || 9,
                                sizeType: e.sizeType || ["original", "compressed"],
                                sourceType: e.sourceType || ["album", "camera"]
                            }, (e._complete = function (e) {
                                if (U) {
                                    var t = e.localIds;
                                    t && (e.localIds = JSON.parse(t))
                                }
                            }, e))
                        },
                        getLocation: function (e) {},
                        previewImage: function (e) {
                            A(g.previewImage, {
                                current: e.current,
                                urls: e.urls
                            }, e)
                        },
                        uploadImage: function (e) {
                            A("uploadImage", {
                                localId: e.localId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            }, e)
                        },
                        downloadImage: function (e) {
                            A("downloadImage", {
                                serverId: e.serverId,
                                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                            }, e)
                        },
                        getLocalImgData: function (e) {
                            !1 === I ? (I = !0, A("getLocalImgData", {
                                localId: e.localId
                            }, (e._complete = function (e) {
                                if (I = !1, S.length > 0) {
                                    var t = S.shift();
                                    wx.getLocalImgData(t)
                                }
                            }, e))) : S.push(e)
                        },
                        getNetworkType: function (e) {
                            var t = function (e) {
                                var t = e.errMsg;
                                e.errMsg = "getNetworkType:ok";
                                var A = e.subtype;
                                if (delete e.subtype, A) e.networkType = A;
                                else {
                                    var n = t.indexOf(":"),
                                        r = t.substring(n + 1);
                                    switch (r) {
                                        case "wifi":
                                        case "edge":
                                        case "wwan":
                                            e.networkType = r;
                                            break;
                                        default:
                                            e.errMsg = "getNetworkType:fail"
                                        }
                                }
                                return e
                            };
                            A("getNetworkType", {}, (e._complete = function (e) {
                                e = t(e)
                            }, e))
                        },
                        openLocation: function (e) {
                            A("openLocation", {
                                latitude: e.latitude,
                                longitude: e.longitude,
                                name: e.name || "",
                                address: e.address || "",
                                scale: e.scale || 28,
                                infoUrl: e.infoUrl || ""
                            }, e)
                        },
                        getLocation: function (e) {
                            e = e || {},
                            A(g.getLocation, {
                                type: e.type || "wgs84"
                            }, (e._complete = function (e) {
                                delete e.type
                            }, e))
                        },
                        hideOptionMenu: function (e) {
                            A("hideOptionMenu", {}, e)
                        },
                        showOptionMenu: function (e) {
                            A("showOptionMenu", {}, e)
                        },
                        closeWindow: function (e) {
                            A("closeWindow", {}, e = e || {})
                        },
                        hideMenuItems: function (e) {
                            A("hideMenuItems", {
                                menuList: e.menuList
                            }, e)
                        },
                        showMenuItems: function (e) {
                            A("showMenuItems", {
                                menuList: e.menuList
                            }, e)
                        },
                        hideAllNonBaseMenuItem: function (e) {
                            A("hideAllNonBaseMenuItem", {}, e)
                        },
                        showAllNonBaseMenuItem: function (e) {
                            A("showAllNonBaseMenuItem", {}, e)
                        },
                        scanQRCode: function (e) {
                            A("scanQRCode", {
                                needResult: (e = e || {}).needResult || 0,
                                scanType: e.scanType || ["qrCode", "barCode"]
                            }, (e._complete = function (e) {
                                if (b) {
                                    var t = e.resultStr;
                                    if (t) {
                                        var A = JSON.parse(t);
                                        e.resultStr = A && A.scan_code && A.scan_code.scan_result
                                    }
                                }
                            }, e))
                        },
                        openAddress: function (e) {
                            A(g.openAddress, {}, (e._complete = function (e) {
                                e = o(e)
                            }, e))
                        },
                        openProductSpecificView: function (e) {
                            A(g.openProductSpecificView, {
                                pid: e.productId,
                                view_type: e.viewType || 0,
                                ext_info: e.extInfo
                            }, e)
                        },
                        addCard: function (e) {
                            for (var t = e.cardList, n = [], r = 0, i = t.length; r < i; ++r) {
                                var o = t[r],
                                    a = {
                                        card_id: o.cardId,
                                        card_ext: o.cardExt
                                    };
                                n.push(a)
                            }
                            A(g.addCard, {
                                card_list: n
                            }, (e._complete = function (e) {
                                var t = e.card_list;
                                if (t) {
                                    for (var A = 0, n = (t = JSON.parse(t)).length; A < n; ++A) {
                                        var r = t[A];
                                        r.cardId = r.card_id,
                                        r.cardExt = r.card_ext,
                                        r.isSuccess = !! r.is_succ,
                                        delete r.card_id,
                                        delete r.card_ext,
                                        delete r.is_succ
                                    }
                                    e.cardList = t,
                                    delete e.card_list
                                }
                            }, e))
                        },
                        chooseCard: function (e) {
                            A("chooseCard", {
                                app_id: x.appId,
                                location_id: e.shopId || "",
                                sign_type: e.signType || "SHA1",
                                card_id: e.cardId || "",
                                card_type: e.cardType || "",
                                card_sign: e.cardSign,
                                time_stamp: e.timestamp + "",
                                nonce_str: e.nonceStr
                            }, (e._complete = function (e) {
                                e.cardList = e.choose_card_info,
                                delete e.choose_card_info
                            }, e))
                        },
                        openCard: function (e) {
                            for (var t = e.cardList, n = [], r = 0, i = t.length; r < i; ++r) {
                                var o = t[r],
                                    a = {
                                        card_id: o.cardId,
                                        code: o.code
                                    };
                                n.push(a)
                            }
                            A(g.openCard, {
                                card_list: n
                            }, e)
                        },
                        consumeAndShareCard: function (e) {
                            A(g.consumeAndShareCard, {
                                consumedCardId: e.cardId,
                                consumedCode: e.code
                            }, e)
                        },
                        chooseWXPay: function (e) {
                            A(g.chooseWXPay, i(e), e)
                        },
                        openEnterpriseRedPacket: function (e) {
                            A(g.openEnterpriseRedPacket, i(e), e)
                        },
                        startSearchBeacons: function (e) {
                            A(g.startSearchBeacons, {
                                ticket: e.ticket
                            }, e)
                        },
                        stopSearchBeacons: function (e) {
                            A(g.stopSearchBeacons, {}, e)
                        },
                        onSearchBeacons: function (e) {
                            n(g.onSearchBeacons, e)
                        },
                        openEnterpriseChat: function (e) {
                            A("openEnterpriseChat", {
                                useridlist: e.userIds,
                                chatname: e.groupName
                            }, e)
                        },
                        launchMiniProgram: function (e) {
                            A("launchMiniProgram", {
                                targetAppId: e.targetAppId,
                                path: p(e.path),
                                envVersion: e.envVersion
                            }, e)
                        },
                        miniProgram: {
                            navigateBack: function (e) {
                                e = e || {},
                                d(function () {
                                    A("invokeMiniProgramAPI", {
                                        name: "navigateBack",
                                        arg: {
                                            delta: e.delta || 1
                                        }
                                    }, e)
                                })
                            },
                            navigateTo: function (e) {
                                d(function () {
                                    A("invokeMiniProgramAPI", {
                                        name: "navigateTo",
                                        arg: {
                                            url: e.url
                                        }
                                    }, e)
                                })
                            },
                            redirectTo: function (e) {
                                d(function () {
                                    A("invokeMiniProgramAPI", {
                                        name: "redirectTo",
                                        arg: {
                                            url: e.url
                                        }
                                    }, e)
                                })
                            },
                            switchTab: function (e) {
                                d(function () {
                                    A("invokeMiniProgramAPI", {
                                        name: "switchTab",
                                        arg: {
                                            url: e.url
                                        }
                                    }, e)
                                })
                            },
                            reLaunch: function (e) {
                                d(function () {
                                    A("invokeMiniProgramAPI", {
                                        name: "reLaunch",
                                        arg: {
                                            url: e.url
                                        }
                                    }, e)
                                })
                            },
                            postMessage: function (e) {
                                d(function () {
                                    A("invokeMiniProgramAPI", {
                                        name: "postMessage",
                                        arg: e.data || {}
                                    }, e)
                                })
                            },
                            getEnv: function (t) {
                                d(function () {
                                    t({
                                        miniprogram: "miniprogram" === e.__wxjs_environment
                                    })
                                })
                            }
                        }
                    },
                    M = 1,
                    k = {};
                return w.addEventListener("error", function (e) {
                        if (!U) {
                            var t = e.target,
                                A = t.tagName,
                                n = t.src;
                            if (("IMG" == A || "VIDEO" == A || "AUDIO" == A || "SOURCE" == A) && -1 != n.indexOf("wxlocalresource://")) {
                                    e.preventDefault(),
                                    e.stopPropagation();
                                    var r = t["wx-id"];
                                    if (r || (r = M++, t["wx-id"] = r), k[r]) return;
                                    k[r] = !0,
                                    wx.ready(function () {
                                        wx.getLocalImgData({
                                            localId: n,
                                            success: function (e) {
                                                t.src = e.localData
                                            }
                                        })
                                    })
                                }
                        }
                    }, !0),
                w.addEventListener("load", function (e) {
                        if (!U) {
                            var t = e.target,
                                A = t.tagName;
                            if (t.src, "IMG" == A || "VIDEO" == A || "AUDIO" == A || "SOURCE" == A) {
                                    var n = t["wx-id"];
                                    n && (k[n] = !1)
                                }
                        }
                    }, !0),
                t && (e.wx = e.jWeixin = O),
                O
            }
        }(t)
    }(window)
},


function (e, t) {}], [280]);