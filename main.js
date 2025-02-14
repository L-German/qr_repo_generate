// Copyright 2012 Google Inc. All rights reserved.

(function () {
    var data = {
        resource: {
            version: "1",

            macros: [{ function: "__e" }],
            tags: [
                {
                    function: "__ogt_1p_data_v2",
                    priority: 2,
                    vtp_isAutoEnabled: true,
                    vtp_autoCollectExclusionSelectors: ["list", ["map", "exclusionSelector", ""]],
                    vtp_isEnabled: true,
                    vtp_autoEmailEnabled: true,
                    vtp_autoPhoneEnabled: false,
                    vtp_autoAddressEnabled: false,
                    vtp_isAutoCollectPiiEnabledFlag: false,
                    tag_id: 6,
                },
                { function: "__ccd_ga_first", priority: 1, vtp_instanceDestinationId: "UA-23532931-1", tag_id: 9 },
                { function: "__rep", vtp_containerId: "UA-23532931-1", vtp_remoteConfig: ["map"], tag_id: 1 },
                { function: "__zone", vtp_childContainers: ["list", ["map", "publicId", "G-LQ23JK4XD6"]], vtp_inheritParentConfig: true, vtp_enableConfiguration: false, tag_id: 3 },
                { function: "__ccd_ga_last", priority: 0, vtp_instanceDestinationId: "UA-23532931-1", tag_id: 8 },
            ],
            predicates: [
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" },
            ],
            rules: [
                [
                    ["if", 0],
                    ["add", 2, 3],
                ],
                [
                    ["if", 1],
                    ["add", 0, 4, 1],
                ],
            ],
        },
        runtime: [
            [50, "__ccd_ga_first", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]],
            [50, "__ccd_ga_last", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]],
            [50, "__e", [46, "a"], [36, [13, [41, "$0"], [3, "$0", ["require", "internal.getEventData"]], ["$0", "event"]]]],
            [
                50,
                "__ogt_1p_data_v2",
                [46, "a"],
                [
                    50,
                    "n",
                    [46, "s", "t"],
                    [52, "u", [7]],
                    [52, "v", [2, [15, "b"], "keys", [7, [15, "s"]]]],
                    [
                        65,
                        "w",
                        [15, "v"],
                        [
                            46,
                            [
                                53,
                                [52, "x", [30, [16, [15, "s"], [15, "w"]], [7]]],
                                [52, "y", [39, [18, [17, [15, "x"], "length"], 0], "1", "0"]],
                                [52, "z", [39, ["o", [15, "t"], [15, "w"]], "1", "0"]],
                                [2, [15, "u"], "push", [7, [0, [0, [0, [16, [15, "m"], [15, "w"]], "-"], [15, "y"]], [15, "z"]]]],
                            ],
                        ],
                    ],
                    [36, [2, [15, "u"], "join", [7, "~"]]],
                ],
                [
                    50,
                    "o",
                    [46, "s", "t"],
                    [22, [28, [15, "s"]], [46, [36, false]]],
                    [
                        38,
                        [15, "t"],
                        [46, "email", "phone_number", "first_name", "last_name", "street", "city", "region", "postal_code", "country"],
                        [
                            46,
                            [5, [46, [36, [28, [28, [16, [15, "s"], "email"]]]]]],
                            [5, [46, [36, [28, [28, [16, [15, "s"], "phone_number"]]]]]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46, [36, ["p", [15, "s"], [15, "t"]]]]],
                            [9, [46, [36, false]]],
                        ],
                    ],
                ],
                [50, "p", [46, "s", "t"], [36, [1, [28, [28, [16, [15, "s"], "address"]]], [28, [28, [16, [16, [15, "s"], "address"], [15, "t"]]]]]]],
                [
                    50,
                    "q",
                    [46, "s", "t", "u"],
                    [22, [20, [16, [15, "t"], "type"], [15, "u"]], [46, [22, [28, [15, "s"]], [46, [3, "s", [8]]]], [22, [28, [16, [15, "s"], [15, "u"]]], [46, [43, [15, "s"], [15, "u"], [16, [15, "t"], "userData"]]]]]],
                    [36, [15, "s"]],
                ],
                [50, "r", [46, "s", "t", "u"], [22, [28, [16, [15, "a"], [15, "u"]]], [46, [36]]], [43, [15, "s"], [15, "t"], [8, "value", [16, [15, "a"], [15, "u"]]]]],
                [22, [28, [17, [15, "a"], "isEnabled"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]],
                [52, "b", ["require", "Object"]],
                [52, "c", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]],
                [52, "d", ["require", "internal.getDestinationIds"]],
                [52, "e", ["require", "internal.getProductSettingsParameter"]],
                [52, "f", ["require", "internal.detectUserProvidedData"]],
                [52, "g", ["require", "queryPermission"]],
                [52, "h", ["require", "internal.setRemoteConfigParameter"]],
                [52, "i", ["require", "internal.registerCcdCallback"]],
                [52, "j", "_z"],
                [52, "k", [30, ["d"], [7]]],
                [52, "l", [8, "enable_code", true]],
                [52, "m", [8, "email", "1", "phone_number", "2", "first_name", "3", "last_name", "4", "country", "5", "postal_code", "6", "street", "7", "city", "8", "region", "9"]],
                [
                    22,
                    [17, [15, "a"], "isAutoEnabled"],
                    [
                        46,
                        [
                            53,
                            [52, "s", [7]],
                            [
                                22,
                                [1, [17, [15, "a"], "autoCollectExclusionSelectors"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]],
                                [
                                    46,
                                    [
                                        53,
                                        [41, "v"],
                                        [3, "v", 0],
                                        [
                                            63,
                                            [7, "v"],
                                            [23, [15, "v"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]],
                                            [33, [15, "v"], [3, "v", [0, [15, "v"], 1]]],
                                            [46, [53, [52, "w", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"], [15, "v"]], "exclusionSelector"]], [22, [15, "w"], [46, [2, [15, "s"], "push", [7, [15, "w"]]]]]]],
                                        ],
                                    ],
                                ],
                            ],
                            [52, "t", [30, [16, [15, "c"], "enableAutoPhoneAndAddressDetection"], [17, [15, "a"], "isAutoCollectPiiEnabledFlag"]]],
                            [52, "u", [39, [17, [15, "a"], "isAutoCollectPiiEnabledFlag"], [17, [15, "a"], "autoEmailEnabled"], true]],
                            [
                                43,
                                [15, "l"],
                                "auto_detect",
                                [8, "email", [15, "u"], "phone", [1, [15, "t"], [17, [15, "a"], "autoPhoneEnabled"]], "address", [1, [15, "t"], [17, [15, "a"], "autoAddressEnabled"]], "exclude_element_selectors", [15, "s"]],
                            ],
                        ],
                    ],
                ],
                [
                    22,
                    [17, [15, "a"], "isManualEnabled"],
                    [
                        46,
                        [
                            53,
                            [52, "s", [8]],
                            [22, [17, [15, "a"], "manualEmailEnabled"], [46, ["r", [15, "s"], "email", "emailValue"]]],
                            [22, [17, [15, "a"], "manualPhoneEnabled"], [46, ["r", [15, "s"], "phone", "phoneValue"]]],
                            [
                                22,
                                [17, [15, "a"], "manualAddressEnabled"],
                                [
                                    46,
                                    [
                                        53,
                                        [52, "t", [8]],
                                        ["r", [15, "t"], "first_name", "firstNameValue"],
                                        ["r", [15, "t"], "last_name", "lastNameValue"],
                                        ["r", [15, "t"], "street", "streetValue"],
                                        ["r", [15, "t"], "city", "cityValue"],
                                        ["r", [15, "t"], "region", "regionValue"],
                                        ["r", [15, "t"], "country", "countryValue"],
                                        ["r", [15, "t"], "postal_code", "postalCodeValue"],
                                        [43, [15, "s"], "name_and_address", [7, [15, "t"]]],
                                    ],
                                ],
                            ],
                            [43, [15, "l"], "selectors", [15, "s"]],
                        ],
                    ],
                ],
                [
                    65,
                    "s",
                    [15, "k"],
                    [
                        46,
                        [
                            53,
                            ["h", [15, "s"], "user_data_settings", [15, "l"]],
                            [52, "t", [16, [15, "l"], "auto_detect"]],
                            [22, [28, [15, "t"]], [46, [6]]],
                            [
                                52,
                                "u",
                                [
                                    51,
                                    "",
                                    [7, "v"],
                                    [52, "w", [2, [15, "v"], "getMetadata", [7, "user_data_from_automatic"]]],
                                    [22, [15, "w"], [46, [36, [15, "w"]]]],
                                    [52, "x", [1, [16, [15, "c"], "enableDataLayerSearchExperiment"], [20, [2, [15, "s"], "indexOf", [7, "G-"]], 0]]],
                                    [41, "y"],
                                    [
                                        22,
                                        ["g", "detect_user_provided_data", "auto"],
                                        [
                                            46,
                                            [
                                                3,
                                                "y",
                                                [
                                                    "f",
                                                    [
                                                        8,
                                                        "excludeElementSelectors",
                                                        [16, [15, "t"], "exclude_element_selectors"],
                                                        "fieldFilters",
                                                        [8, "email", [16, [15, "t"], "email"], "phone", [16, [15, "t"], "phone"], "address", [16, [15, "t"], "address"]],
                                                        "performDataLayerSearch",
                                                        [15, "x"],
                                                    ],
                                                ],
                                            ],
                                        ],
                                    ],
                                    [52, "z", [1, [15, "y"], [16, [15, "y"], "elements"]]],
                                    [52, "ba", [8]],
                                    [
                                        22,
                                        [1, [15, "z"], [18, [17, [15, "z"], "length"], 0]],
                                        [
                                            46,
                                            [
                                                53,
                                                [41, "bb"],
                                                [
                                                    53,
                                                    [41, "bc"],
                                                    [3, "bc", 0],
                                                    [
                                                        63,
                                                        [7, "bc"],
                                                        [23, [15, "bc"], [17, [15, "z"], "length"]],
                                                        [33, [15, "bc"], [3, "bc", [0, [15, "bc"], 1]]],
                                                        [
                                                            46,
                                                            [
                                                                53,
                                                                [52, "bd", [16, [15, "z"], [15, "bc"]]],
                                                                ["q", [15, "ba"], [15, "bd"], "email"],
                                                                [
                                                                    22,
                                                                    [16, [15, "c"], "enableAutoPiiOnPhoneAndAddress"],
                                                                    [
                                                                        46,
                                                                        ["q", [15, "ba"], [15, "bd"], "phone_number"],
                                                                        [3, "bb", ["q", [15, "bb"], [15, "bd"], "first_name"]],
                                                                        [3, "bb", ["q", [15, "bb"], [15, "bd"], "last_name"]],
                                                                        [3, "bb", ["q", [15, "bb"], [15, "bd"], "country"]],
                                                                        [3, "bb", ["q", [15, "bb"], [15, "bd"], "postal_code"]],
                                                                    ],
                                                                ],
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                                [22, [1, [15, "bb"], [28, [16, [15, "ba"], "address"]]], [46, [43, [15, "ba"], "address", [15, "bb"]]]],
                                            ],
                                        ],
                                    ],
                                    [
                                        22,
                                        [15, "x"],
                                        [
                                            46,
                                            [
                                                53,
                                                [52, "bb", [1, [15, "y"], [16, [15, "y"], "dataLayerSearchResults"]]],
                                                [22, [15, "bb"], [46, [53, [52, "bc", ["n", [15, "bb"], [15, "ba"]]], [22, [15, "bc"], [46, [2, [15, "v"], "setHitData", [7, [15, "j"], [15, "bc"]]]]]]]],
                                            ],
                                        ],
                                    ],
                                    [2, [15, "v"], "setMetadata", [7, "user_data_from_automatic", [15, "ba"]]],
                                    [36, [15, "ba"]],
                                ],
                            ],
                            ["i", [15, "s"], [51, "", [7, "v"], [2, [15, "v"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "u"]]]]],
                        ],
                    ],
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]],
            ],
        ],
        entities: {
            __ccd_ga_first: { "2": true, "4": true },
            __ccd_ga_last: { "2": true, "4": true },
            __e: { "2": true, "4": true },
            __ogt_1p_data_v2: { "2": true },
        },
        blob: { "1": "1" },
        permissions: {
            __ccd_ga_first: {},
            __ccd_ga_last: {},
            __e: { read_event_data: { eventDataAccess: "specific", keyPatterns: ["event"] } },
            __ogt_1p_data_v2: { detect_user_provided_data: { limitDataSources: true, allowAutoDataSources: true, allowManualDataSources: false, allowCodeDataSources: false } },
        },

        security_groups: {
            google: ["__ccd_ga_first", "__ccd_ga_last", "__e", "__ogt_1p_data_v2"],
        },
    };

    var h,
        aa = function (a) {
            var b = 0;
            return function () {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            };
        },
        da =
            typeof Object.defineProperties == "function"
                ? Object.defineProperty
                : function (a, b, c) {
                      if (a == Array.prototype || a == Object.prototype) return a;
                      a[b] = c.value;
                      return a;
                  },
        ea = function (a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d;
            }
            throw Error("Cannot find global object");
        },
        ja = ea(this),
        ka = function (a, b) {
            if (b)
                a: {
                    for (var c = ja, d = a.split("."), e = 0; e < d.length - 1; e++) {
                        var f = d[e];
                        if (!(f in c)) break a;
                        c = c[f];
                    }
                    var g = d[d.length - 1],
                        k = c[g],
                        m = b(k);
                    m != k && m != null && da(c, g, { configurable: !0, writable: !0, value: m });
                }
        };
    ka("Symbol", function (a) {
        if (a) return a;
        var b = function (f, g) {
            this.j = f;
            da(this, "description", { configurable: !0, writable: !0, value: g });
        };
        b.prototype.toString = function () {
            return this.j;
        };
        var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
            d = 0,
            e = function (f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f);
            };
        return e;
    });
    var la =
            typeof Object.create == "function"
                ? Object.create
                : function (a) {
                      var b = function () {};
                      b.prototype = a;
                      return new b();
                  },
        ma;
    if (typeof Object.setPrototypeOf == "function") ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = { a: !0 },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a;
            } catch (a) {}
            na = !1;
        }
        ma = na
            ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                  return a;
              }
            : null;
    }
    var qa = ma,
        ra = function (a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d);
                        } else a[c] = b[c];
            a.Ao = b.prototype;
        },
        l = function (a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return { next: aa(a) };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        sa = function (a) {
            for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
            return c;
        },
        ta = function (a) {
            return a instanceof Array ? a : sa(l(a));
        },
        wa = function (a) {
            return ua(a, a);
        },
        ua = function (a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a;
        },
        xa =
            typeof Object.assign == "function"
                ? Object.assign
                : function (a, b) {
                      for (var c = 1; c < arguments.length; c++) {
                          var d = arguments[c];
                          if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
                      }
                      return a;
                  };
    ka("Object.assign", function (a) {
        return a || xa;
    });
    var ya = function () {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var za = this || self;
    var Aa = function (a, b) {
        this.type = a;
        this.data = b;
    };
    Aa.prototype.getType = function () {
        return this.type;
    };
    Aa.prototype.getData = function () {
        return this.data;
    };
    var Ba = function () {
        this.map = {};
        this.j = {};
    };
    h = Ba.prototype;
    h.get = function (a) {
        return this.map["dust." + a];
    };
    h.set = function (a, b) {
        var c = "dust." + a;
        this.j.hasOwnProperty(c) || (this.map[c] = b);
    };
    h.zi = function (a, b) {
        this.set(a, b);
        this.j["dust." + a] = !0;
    };
    h.has = function (a) {
        return this.map.hasOwnProperty("dust." + a);
    };
    h.remove = function (a) {
        var b = "dust." + a;
        this.j.hasOwnProperty(b) || delete this.map[b];
    };
    var Da = function (a, b) {
        var c = [],
            d;
        for (d in a.map)
            if (a.map.hasOwnProperty(d)) {
                var e = d.substring(5);
                switch (b) {
                    case 1:
                        c.push(e);
                        break;
                    case 2:
                        c.push(a.map[d]);
                        break;
                    case 3:
                        c.push([e, a.map[d]]);
                }
            }
        return c;
    };
    Ba.prototype.la = function () {
        return Da(this, 1);
    };
    Ba.prototype.Yb = function () {
        return Da(this, 2);
    };
    Ba.prototype.Ib = function () {
        return Da(this, 3);
    };
    var Ea = function () {};
    Ea.prototype.reset = function () {};
    var Fa = function (a, b) {
        this.K = a;
        this.parent = b;
        this.j = this.C = void 0;
        this.zc = !1;
        this.H = function (c, d, e) {
            return c.apply(d, e);
        };
        this.values = new Ba();
    };
    Fa.prototype.add = function (a, b) {
        Ga(this, a, b, !1);
    };
    var Ga = function (a, b, c, d) {
        a.zc || (d ? a.values.zi(b, c) : a.values.set(b, c));
    };
    Fa.prototype.set = function (a, b) {
        this.zc || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b));
    };
    Fa.prototype.get = function (a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0;
    };
    Fa.prototype.has = function (a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
    };
    var Ha = function (a) {
        var b = new Fa(a.K, a);
        a.C && (b.C = a.C);
        b.H = a.H;
        b.j = a.j;
        return b;
    };
    Fa.prototype.Pd = function () {
        return this.K;
    };
    Fa.prototype.Ia = function () {
        this.zc = !0;
    };
    function Ia(a, b) {
        for (var c, d = l(b), e = d.next(); !e.done && !((c = Ka(a, e.value)), c instanceof Aa); e = d.next());
        return c;
    }
    function Ka(a, b) {
        try {
            var c = l(b),
                d = c.next().value,
                e = sa(c),
                f = a.get(String(d));
            if (!f || typeof f.invoke !== "function") throw Error("Attempting to execute non-function " + b[0] + ".");
            return f.invoke.apply(f, [a].concat(ta(e)));
        } catch (k) {
            var g = a.C;
            g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
            throw k;
        }
    }
    var La = function () {
        this.C = new Ea();
        this.j = new Fa(this.C);
    };
    h = La.prototype;
    h.Pd = function () {
        return this.C;
    };
    h.execute = function (a) {
        return this.xi([a].concat(ta(ya.apply(1, arguments))));
    };
    h.xi = function () {
        for (var a, b = l(ya.apply(0, arguments)), c = b.next(); !c.done; c = b.next()) a = Ka(this.j, c.value);
        return a;
    };
    h.Il = function (a) {
        var b = ya.apply(1, arguments),
            c = Ha(this.j);
        c.j = a;
        for (var d, e = l(b), f = e.next(); !f.done; f = e.next()) d = Ka(c, f.value);
        return d;
    };
    h.Ia = function () {
        this.j.Ia();
    };
    var Ma = function () {
        this.ma = !1;
        this.R = new Ba();
    };
    h = Ma.prototype;
    h.get = function (a) {
        return this.R.get(a);
    };
    h.set = function (a, b) {
        this.ma || this.R.set(a, b);
    };
    h.has = function (a) {
        return this.R.has(a);
    };
    h.zi = function (a, b) {
        this.ma || this.R.zi(a, b);
    };
    h.remove = function (a) {
        this.ma || this.R.remove(a);
    };
    h.la = function () {
        return this.R.la();
    };
    h.Yb = function () {
        return this.R.Yb();
    };
    h.Ib = function () {
        return this.R.Ib();
    };
    h.Ia = function () {
        this.ma = !0;
    };
    h.zc = function () {
        return this.ma;
    };
    function Na() {
        for (var a = Oa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b;
    }
    function Pa() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + ".";
    }
    var Oa, Qa;
    function Ra(a) {
        Oa = Oa || Pa();
        Qa = Qa || Na();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = ((f & 3) << 4) | (g >> 4),
                p = ((g & 15) << 2) | (k >> 6),
                q = k & 63;
            e || ((q = 64), d || (p = 64));
            b.push(Oa[m], Oa[n], Oa[p], Oa[q]);
        }
        return b.join("");
    }
    function Sa(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++),
                    p = Qa[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m;
        }
        Oa = Oa || Pa();
        Qa = Qa || Na();
        for (var c = "", d = 0; ; ) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (k === 64 && e === -1) return c;
            c += String.fromCharCode((e << 2) | (f >> 4));
            g !== 64 && ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))), k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
        }
    }
    var Ua = {};
    function Va(a, b) {
        Ua[a] = Ua[a] || [];
        Ua[a][b] = !0;
    }
    function Wa(a) {
        var b = Ua[a];
        if (!b || b.length === 0) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)), b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return Ra(c.join("")).replace(/\.+$/, "");
    }
    function Xa() {
        for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return a.length > 0 ? a : void 0;
    }
    function Ya() {}
    function Za(a) {
        return typeof a === "function";
    }
    function $a(a) {
        return typeof a === "string";
    }
    function ab(a) {
        return typeof a === "number" && !isNaN(a);
    }
    function bb(a) {
        return Array.isArray(a) ? a : [a];
    }
    function db(a, b) {
        if (a && Array.isArray(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    }
    function eb(a, b) {
        if (!ab(a) || !ab(b) || a > b) (a = 0), (b = 2147483647);
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    function fb(a, b) {
        for (var c = new gb(), d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
        return !1;
    }
    function hb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    }
    function ib(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"));
    }
    function jb(a) {
        return Math.round(Number(a)) || 0;
    }
    function kb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a;
    }
    function lb(a) {
        var b = [];
        if (Array.isArray(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b;
    }
    function mb(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : "";
    }
    function nb() {
        return new Date(Date.now());
    }
    function ob() {
        return nb().getTime();
    }
    var gb = function () {
        this.prefix = "gtm.";
        this.values = {};
    };
    gb.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b;
    };
    gb.prototype.get = function (a) {
        return this.values[this.prefix + a];
    };
    gb.prototype.contains = function (a) {
        return this.get(a) !== void 0;
    };
    function pb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c;
    }
    function qb(a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c();
                } catch (d) {}
            }
        };
    }
    function rb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    }
    function sb(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c;
    }
    function tb(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b;
    }
    function ub(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b;
    }
    function vb(a, b) {
        var c = z;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0) return;
        }
        return d;
    }
    function wb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c;
    }
    var xb = /^\w{1,9}$/;
    function yb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        hb(a, function (d, e) {
            xb.test(d) && e && c.push(d);
        });
        return c.join(b);
    }
    function zb(a, b) {
        function c() {
            e && ++d === b && (e(), (e = null), (c.done = !0));
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c;
    }
    function Ab(a) {
        if (!a) return a;
        var b = a;
        try {
            b = decodeURIComponent(a);
        } catch (d) {}
        var c = b.split(",");
        return c.length === 2 && c[0] === c[1] ? c[0] : a;
    }
    function Cb(a, b, c) {
        function d(n) {
            var p = n.split("=")[0];
            if (a.indexOf(p) < 0) return n;
            if (c !== void 0) return p + "=" + c;
        }
        function e(n) {
            return n
                .split("&")
                .map(d)
                .filter(function (p) {
                    return p !== void 0;
                })
                .join("&");
        }
        var f = b.href.split(/[?#]/)[0],
            g = b.search,
            k = b.hash;
        g[0] === "?" && (g = g.substring(1));
        k[0] === "#" && (k = k.substring(1));
        g = e(g);
        k = e(k);
        g !== "" && (g = "?" + g);
        k !== "" && (k = "#" + k);
        var m = "" + f + g + k;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m;
    }
    function Db(a) {
        for (var b = 0; b < 3; ++b)
            try {
                var c = decodeURIComponent(a).replace(/\+/g, " ");
                if (c === a) break;
                a = c;
            } catch (d) {
                return "";
            }
        return a;
    } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
    var Eb = globalThis.trustedTypes,
        Fb;
    function Gb() {
        var a = null;
        if (!Eb) return a;
        try {
            var b = function (c) {
                return c;
            };
            a = Eb.createPolicy("goog#html", { createHTML: b, createScript: b, createScriptURL: b });
        } catch (c) {}
        return a;
    }
    function Hb() {
        Fb === void 0 && (Fb = Gb());
        return Fb;
    }
    var Ib = function (a) {
        this.j = a;
    };
    Ib.prototype.toString = function () {
        return this.j + "";
    };
    function Jb(a) {
        var b = a,
            c = Hb();
        return new Ib(c ? c.createScriptURL(b) : b);
    }
    function Kb(a) {
        if (a instanceof Ib) return a.j;
        throw Error("");
    }
    var Lb = wa([""]),
        Mb = ua(["\x00"], ["\\0"]),
        Nb = ua(["\n"], ["\\n"]),
        Ob = ua(["\x00"], ["\\u0000"]);
    function Pb(a) {
        return a.toString().indexOf("`") === -1;
    }
    Pb(function (a) {
        return a(Lb);
    }) ||
        Pb(function (a) {
            return a(Mb);
        }) ||
        Pb(function (a) {
            return a(Nb);
        }) ||
        Pb(function (a) {
            return a(Ob);
        });
    var Qb = function (a) {
        this.j = a;
    };
    Qb.prototype.toString = function () {
        return this.j;
    };
    var Rb = function (a) {
        this.Zm = a;
    };
    function Sb(a) {
        return new Rb(function (b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":";
        });
    }
    var Tb = [
        Sb("data"),
        Sb("http"),
        Sb("https"),
        Sb("mailto"),
        Sb("ftp"),
        new Rb(function (a) {
            return /^[^:]*([/?#]|$)/.test(a);
        }),
    ];
    function Ub(a) {
        var b;
        b = b === void 0 ? Tb : b;
        if (a instanceof Qb) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Rb && d.Zm(a)) return new Qb(a);
        }
    }
    var Vb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    function Wb(a) {
        var b;
        if (a instanceof Qb)
            if (a instanceof Qb) b = a.j;
            else throw Error("");
        else b = Vb.test(a) ? a : void 0;
        return b;
    }
    function Xb(a, b) {
        var c = Wb(b);
        c !== void 0 && (a.action = c);
    }
    var Yb = function (a) {
        this.j = a;
    };
    Yb.prototype.toString = function () {
        return this.j + "";
    };
    var $b = function () {
        this.j = Zb[0].toLowerCase();
    };
    $b.prototype.toString = function () {
        return this.j;
    };
    function ac(a, b) {
        var c = [new $b()];
        if (c.length === 0) throw Error("");
        var d = c.map(function (f) {
                var g;
                if (f instanceof $b) g = f.j;
                else throw Error("");
                return g;
            }),
            e = b.toLowerCase();
        if (
            d.every(function (f) {
                return e.indexOf(f) !== 0;
            })
        )
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true");
    }
    var bc = Array.prototype.indexOf
        ? function (a, b) {
              return Array.prototype.indexOf.call(a, b, void 0);
          }
        : function (a, b) {
              if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
              for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
              return -1;
          };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
        .split(" ")
        .concat(["BUTTON", "INPUT"]);
    function cc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a;
    }
    var z = window,
        dc = window.history,
        A = document,
        ec = navigator;
    function fc() {
        var a;
        try {
            a = ec.serviceWorker;
        } catch (b) {
            return;
        }
        return a;
    }
    var gc = A.currentScript,
        hc = gc && gc.src;
    function ic(a, b) {
        var c = z[a];
        z[a] = c === void 0 ? b : c;
        return z[a];
    }
    function jc(a) {
        return (ec.userAgent || "").indexOf(a) !== -1;
    }
    var kc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        lc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
    function mc(a, b, c) {
        b &&
            hb(b, function (d, e) {
                d = d.toLowerCase();
                c.hasOwnProperty(d) || a.setAttribute(d, e);
            });
    }
    function nc(a, b, c, d, e) {
        var f = A.createElement("script");
        mc(f, d, kc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var g;
        g = Jb(cc(a));
        f.src = Kb(g);
        var k,
            m = f.ownerDocument;
        m = m === void 0 ? document : m;
        var n,
            p,
            q = (p = (n = m).querySelector) == null ? void 0 : p.call(n, "script[nonce]");
        (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") && f.setAttribute("nonce", k);
        b && (f.onload = b);
        c && (f.onerror = c);
        if (e) e.appendChild(f);
        else {
            var r = A.getElementsByTagName("script")[0] || A.body || A.head;
            r.parentNode.insertBefore(f, r);
        }
        return f;
    }
    function oc() {
        if (hc) {
            var a = hc.toLowerCase();
            if (a.indexOf("https://") === 0) return 2;
            if (a.indexOf("http://") === 0) return 3;
        }
        return 1;
    }
    function pc(a, b, c, d, e) {
        var f;
        f = f === void 0 ? !0 : f;
        var g = e,
            k = !1;
        g || ((g = A.createElement("iframe")), (k = !0));
        mc(g, c, lc);
        d &&
            hb(d, function (n, p) {
                g.dataset[n] = p;
            });
        f && ((g.height = "0"), (g.width = "0"), (g.style.display = "none"), (g.style.visibility = "hidden"));
        a !== void 0 && (g.src = a);
        if (k) {
            var m = (A.body && A.body.lastChild) || A.body || A.head;
            m.parentNode.insertBefore(g, m);
        }
        b && (g.onload = b);
        return g;
    }
    function qc(a, b, c, d) {
        rc(a, b, c, d);
    }
    function sc(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, !!d);
    }
    function tc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }
    function F(a) {
        z.setTimeout(a, 0);
    }
    function uc(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    }
    function vc(a) {
        var b = a.innerText || a.textContent || "";
        b && b !== " " && ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b;
    }
    function wc(a) {
        var b = A.createElement("div"),
            c = b,
            d,
            e = cc("A<div>" + a + "</div>"),
            f = Hb();
        d = new Yb(f ? f.createHTML(e) : e);
        if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName)) throw Error("");
        var g;
        if (d instanceof Yb) g = d.j;
        else throw Error("");
        c.innerHTML = g;
        b = b.lastChild;
        for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
        return k;
    }
    function xc(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement;
        }
        return null;
    }
    function yc(a, b, c) {
        var d;
        try {
            d = ec.sendBeacon && ec.sendBeacon(a);
        } catch (e) {
            Va("TAGGING", 15);
        }
        d ? b == null || b() : rc(a, b, c);
    }
    function zc(a, b) {
        try {
            return ec.sendBeacon(a, b);
        } catch (c) {
            Va("TAGGING", 15);
        }
        return !1;
    }
    var Ac = { cache: "no-store", credentials: "include", keepalive: !0, method: "POST", mode: "no-cors", redirect: "follow" };
    function Bc(a, b, c, d, e) {
        if (Cc()) {
            var f = Object.assign({}, Ac);
            b && (f.body = b);
            c && (c.attributionReporting && (f.attributionReporting = c.attributionReporting), c.browsingTopics && (f.browsingTopics = c.browsingTopics), c.credentials && (f.credentials = c.credentials), c.mode && (f.mode = c.mode));
            try {
                var g = z.fetch(a, f);
                if (g)
                    return (
                        g
                            .then(function (m) {
                                m && (m.ok || m.status === 0) ? d == null || d() : e == null || e();
                            })
                            .catch(function () {
                                e == null || e();
                            }),
                        !0
                    );
            } catch (m) {}
        }
        if (c && c.Bk) return e == null || e(), !1;
        if (b) {
            var k = zc(a, b);
            k ? d == null || d() : e == null || e();
            return k;
        }
        yc(a, d, e);
        return !0;
    }
    function Cc() {
        return typeof z.fetch === "function";
    }
    function Dc(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c;
    }
    function Ec() {
        var a = z.performance;
        if (a && Za(a.now)) return a.now();
    }
    function Fc() {
        var a,
            b = z.performance;
        if (b && b.getEntriesByType)
            try {
                var c = b.getEntriesByType("navigation");
                c && c.length > 0 && (a = c[0].type);
            } catch (d) {
                return "e";
            }
        if (!a) return "u";
        switch (a) {
            case "navigate":
                return "n";
            case "back_forward":
                return "h";
            case "reload":
                return "r";
            case "prerender":
                return "p";
            default:
                return "x";
        }
    }
    function Gc() {
        return z.performance || void 0;
    }
    function Hc() {
        var a = z.webPixelsManager;
        return a ? a.createShopifyExtend !== void 0 : !1;
    }
    var rc = function (a, b, c, d) {
        var e = new Image(1, 1);
        mc(e, d, {});
        e.onload = function () {
            e.onload = null;
            b && b();
        };
        e.onerror = function () {
            e.onerror = null;
            c && c();
        };
        e.src = a;
        return e;
    };
    function Ic(a, b) {
        return this.evaluate(a) && this.evaluate(b);
    }
    function Jc(a, b) {
        return this.evaluate(a) === this.evaluate(b);
    }
    function Kc(a, b) {
        return this.evaluate(a) || this.evaluate(b);
    }
    function Lc(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        return String(c).indexOf(String(d)) > -1;
    }
    function Mc(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d;
    }
    function Nc(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        switch (c) {
            case "pageLocation":
                var e = z.location.href;
                d instanceof Ma && d.get("stripProtocol") && (e = e.replace(/^https?:\/\//, ""));
                return e;
        }
    } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
    var Oc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Pc = function (a) {
            if (a == null) return String(a);
            var b = Oc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object";
        },
        Qc = function (a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b);
        },
        Rc = function (a) {
            if (!a || Pc(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Qc(a, "constructor") && !Qc(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (c) {
                return !1;
            }
            for (var b in a);
            return b === void 0 || Qc(a, b);
        },
        Sc = function (a, b) {
            var c = b || (Pc(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (Qc(a, d)) {
                    var e = a[d];
                    Pc(e) == "array" ? (Pc(c[d]) != "array" && (c[d] = []), (c[d] = Sc(e, c[d]))) : Rc(e) ? (Rc(c[d]) || (c[d] = {}), (c[d] = Sc(e, c[d]))) : (c[d] = e);
                }
            return c;
        };
    function Tc(a) {
        if (a == void 0 || Array.isArray(a) || Rc(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0;
        }
        return !1;
    }
    function Uc(a) {
        return (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) || (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a));
    }
    var Vc = function (a) {
        a = a === void 0 ? [] : a;
        this.R = new Ba();
        this.values = [];
        this.ma = !1;
        for (var b in a) a.hasOwnProperty(b) && (Uc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.R.set(b, a[b]));
    };
    h = Vc.prototype;
    h.toString = function (a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.values.length; c++) {
            var d = this.values[c];
            d === null || d === void 0 ? b.push("") : d instanceof Vc ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d));
        }
        return b.join(",");
    };
    h.set = function (a, b) {
        if (!this.ma)
            if (a === "length") {
                if (!Uc(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.values.length = Number(b);
            } else Uc(a) ? (this.values[Number(a)] = b) : this.R.set(a, b);
    };
    h.get = function (a) {
        return a === "length" ? this.length() : Uc(a) ? this.values[Number(a)] : this.R.get(a);
    };
    h.length = function () {
        return this.values.length;
    };
    h.la = function () {
        for (var a = this.R.la(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(String(b));
        return a;
    };
    h.Yb = function () {
        for (var a = this.R.Yb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(this.values[b]);
        return a;
    };
    h.Ib = function () {
        for (var a = this.R.Ib(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
        return a;
    };
    h.remove = function (a) {
        Uc(a) ? delete this.values[Number(a)] : this.ma || this.R.remove(a);
    };
    h.pop = function () {
        return this.values.pop();
    };
    h.push = function () {
        return this.values.push.apply(this.values, ta(ya.apply(0, arguments)));
    };
    h.shift = function () {
        return this.values.shift();
    };
    h.splice = function (a, b) {
        var c = ya.apply(2, arguments);
        return b === void 0 && c.length === 0 ? new Vc(this.values.splice(a)) : new Vc(this.values.splice.apply(this.values, [a, b || 0].concat(ta(c))));
    };
    h.unshift = function () {
        return this.values.unshift.apply(this.values, ta(ya.apply(0, arguments)));
    };
    h.has = function (a) {
        return (Uc(a) && this.values.hasOwnProperty(a)) || this.R.has(a);
    };
    h.Ia = function () {
        this.ma = !0;
        Object.freeze(this.values);
    };
    h.zc = function () {
        return this.ma;
    };
    function Wc(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b;
    }
    var Xc = function (a, b) {
        this.functionName = a;
        this.Od = b;
        this.R = new Ba();
        this.ma = !1;
    };
    h = Xc.prototype;
    h.toString = function () {
        return this.functionName;
    };
    h.getName = function () {
        return this.functionName;
    };
    h.invoke = function (a) {
        return this.Od.call.apply(this.Od, [new Yc(this, a)].concat(ta(ya.apply(1, arguments))));
    };
    h.ib = function (a) {
        var b = ya.apply(1, arguments);
        try {
            return this.invoke.apply(this, [a].concat(ta(b)));
        } catch (c) {}
    };
    h.get = function (a) {
        return this.R.get(a);
    };
    h.set = function (a, b) {
        this.ma || this.R.set(a, b);
    };
    h.has = function (a) {
        return this.R.has(a);
    };
    h.remove = function (a) {
        this.ma || this.R.remove(a);
    };
    h.la = function () {
        return this.R.la();
    };
    h.Yb = function () {
        return this.R.Yb();
    };
    h.Ib = function () {
        return this.R.Ib();
    };
    h.Ia = function () {
        this.ma = !0;
    };
    h.zc = function () {
        return this.ma;
    };
    var Yc = function (a, b) {
        this.Od = a;
        this.D = b;
    };
    Yc.prototype.evaluate = function (a) {
        var b = this.D;
        return Array.isArray(a) ? Ka(b, a) : a;
    };
    Yc.prototype.getName = function () {
        return this.Od.getName();
    };
    Yc.prototype.Pd = function () {
        return this.D.Pd();
    };
    var Zc = function () {
        this.map = new Map();
    };
    Zc.prototype.set = function (a, b) {
        this.map.set(a, b);
    };
    Zc.prototype.get = function (a) {
        return this.map.get(a);
    };
    var $c = function () {
        this.keys = [];
        this.values = [];
    };
    $c.prototype.set = function (a, b) {
        this.keys.push(a);
        this.values.push(b);
    };
    $c.prototype.get = function (a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b];
    };
    function ad() {
        try {
            return Map ? new Zc() : new $c();
        } catch (a) {
            return new $c();
        }
    }
    var bd = function (a) {
        if (a instanceof bd) return a;
        if (Tc(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a;
    };
    bd.prototype.getValue = function () {
        return this.value;
    };
    bd.prototype.toString = function () {
        return String(this.value);
    };
    var dd = function (a) {
        this.promise = a;
        this.ma = !1;
        this.R = new Ba();
        this.R.set("then", cd(this));
        this.R.set("catch", cd(this, !0));
        this.R.set("finally", cd(this, !1, !0));
    };
    h = dd.prototype;
    h.get = function (a) {
        return this.R.get(a);
    };
    h.set = function (a, b) {
        this.ma || this.R.set(a, b);
    };
    h.has = function (a) {
        return this.R.has(a);
    };
    h.remove = function (a) {
        this.ma || this.R.remove(a);
    };
    h.la = function () {
        return this.R.la();
    };
    h.Yb = function () {
        return this.R.Yb();
    };
    h.Ib = function () {
        return this.R.Ib();
    };
    var cd = function (a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new Xc("", function (d, e) {
            b && ((e = d), (d = void 0));
            c && (e = d);
            d instanceof Xc || (d = void 0);
            e instanceof Xc || (e = void 0);
            var f = Ha(this.D),
                g = function (m) {
                    return function (n) {
                        return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
                    };
                },
                k = a.promise.then(d && g(d), e && g(e));
            return new dd(k);
        });
    };
    dd.prototype.Ia = function () {
        this.ma = !0;
    };
    dd.prototype.zc = function () {
        return this.ma;
    };
    function G(a, b, c) {
        var d = ad(),
            e = function (g, k) {
                for (var m = g.la(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
            },
            f = function (g) {
                if (g === null || g === void 0) return g;
                var k = d.get(g);
                if (k) return k;
                if (g instanceof Vc) {
                    var m = [];
                    d.set(g, m);
                    for (var n = g.la(), p = 0; p < n.length; p++) m[n[p]] = f(g.get(n[p]));
                    return m;
                }
                if (g instanceof dd) return g.promise;
                if (g instanceof Ma) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q;
                }
                if (g instanceof Xc) {
                    var r = function () {
                        for (var v = ya.apply(0, arguments), t = [], w = 0; w < v.length; w++) t[w] = ed(v[w], b, c);
                        var x = new Fa(b ? b.Pd() : new Ea());
                        b && (x.j = b.j);
                        return f(g.invoke.apply(g, [x].concat(ta(t))));
                    };
                    d.set(g, r);
                    e(g, r);
                    return r;
                }
                var u = !1;
                switch (c) {
                    case 1:
                        u = !0;
                        break;
                    case 2:
                        u = !1;
                        break;
                    case 3:
                        u = !1;
                        break;
                    default:
                }
                if (g instanceof bd && u) return g.getValue();
                switch (typeof g) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return g;
                    case "object":
                        if (g === null) return null;
                }
            };
        return f(a);
    }
    function ed(a, b, c) {
        var d = ad(),
            e = function (g, k) {
                for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
            },
            f = function (g) {
                var k = d.get(g);
                if (k) return k;
                if (Array.isArray(g) || ib(g)) {
                    var m = new Vc([]);
                    d.set(g, m);
                    for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                    return m;
                }
                if (Rc(g)) {
                    var p = new Ma();
                    d.set(g, p);
                    e(g, p);
                    return p;
                }
                if (typeof g === "function") {
                    var q = new Xc("", function () {
                        for (var x = ya.apply(0, arguments), y = [], B = 0; B < x.length; B++) y[B] = G(this.evaluate(x[B]), b, c);
                        return f((0, this.D.H)(g, g, y));
                    });
                    d.set(g, q);
                    e(g, q);
                    return q;
                }
                var t = typeof g;
                if (g === null || t === "string" || t === "number" || t === "boolean") return g;
                var w = !1;
                switch (c) {
                    case 1:
                        w = !0;
                        break;
                    case 2:
                        w = !1;
                        break;
                    default:
                }
                if (g !== void 0 && w) return new bd(g);
            };
        return f(a);
    }
    function fd() {
        var a = !1;
        return a;
    }
    var gd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function (a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof Vc) for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new Vc(b);
        },
        every: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0;
        },
        filter: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new Vc(d);
        },
        forEach: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this);
        },
        hasOwnProperty: function (a, b) {
            return this.has(b);
        },
        indexOf: function (a, b, c) {
            var d = this.length(),
                e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++) if (this.has(f) && this.get(f) === b) return f;
            return -1;
        },
        join: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b);
        },
        lastIndexOf: function (a, b, c) {
            var d = this.length(),
                e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--) if (this.has(f) && this.get(f) === b) return f;
            return -1;
        },
        map: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new Vc(d);
        },
        pop: function () {
            return this.pop();
        },
        push: function (a) {
            return this.push.apply(this, ta(ya.apply(1, arguments)));
        },
        reduce: function (a, b, c) {
            var d = this.length(),
                e,
                f = 0;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break;
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e;
        },
        reduceRight: function (a, b, c) {
            var d = this.length(),
                e,
                f = d - 1;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break;
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var k = f; k >= 0; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e;
        },
        reverse: function () {
            for (var a = Wc(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this;
        },
        shift: function () {
            return this.shift();
        },
        slice: function (a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new Vc(e);
        },
        some: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1;
        },
        sort: function (a, b) {
            var c = Wc(this);
            b === void 0
                ? c.sort()
                : c.sort(function (e, f) {
                      return Number(b.invoke(a, e, f));
                  });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this;
        },
        splice: function (a, b, c) {
            return this.splice.apply(this, [b, c].concat(ta(ya.apply(3, arguments))));
        },
        toString: function () {
            return this.toString();
        },
        unshift: function (a) {
            return this.unshift.apply(this, ta(ya.apply(1, arguments)));
        },
    };
    var hd = function (a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
    };
    ra(hd, Error);
    var id = { charAt: 1, concat: 1, indexOf: 1, lastIndexOf: 1, match: 1, replace: 1, search: 1, slice: 1, split: 1, substring: 1, toLowerCase: 1, toLocaleLowerCase: 1, toString: 1, toUpperCase: 1, toLocaleUpperCase: 1, trim: 1 },
        jd = new Aa("break"),
        kd = new Aa("continue");
    function md(a, b) {
        return this.evaluate(a) + this.evaluate(b);
    }
    function nd(a, b) {
        return this.evaluate(a) && this.evaluate(b);
    }
    function od(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!(f instanceof Vc)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (d === null || d === void 0) {
            var g = "TypeError: Can't read property " + e + " of " + d + ".";
            if (fd()) throw new hd(g);
            throw Error(g);
        }
        var k = typeof d === "number";
        if (typeof d === "boolean" || k) {
            if (e === "toString") {
                if (k && f.length()) {
                    var m = G(f.get(0));
                    try {
                        return d.toString(m);
                    } catch (D) {}
                }
                return d.toString();
            }
            var n = "TypeError: " + d + "." + e + " is not a function.";
            if (fd()) throw new hd(n);
            throw Error(n);
        }
        if (typeof d === "string") {
            if (id.hasOwnProperty(e)) {
                var p = 2;
                p = 1;
                var q = G(f, void 0, p);
                return ed(d[e].apply(d, q), this.D);
            }
            var r = "TypeError: " + e + " is not a function";
            if (fd()) throw new hd(r);
            throw Error(r);
        }
        if (d instanceof Vc) {
            if (d.has(e)) {
                var u = d.get(String(e));
                if (u instanceof Xc) {
                    var v = Wc(f);
                    return u.invoke.apply(u, [this.D].concat(ta(v)));
                }
                var t = "TypeError: " + e + " is not a function";
                if (fd()) throw new hd(t);
                throw Error(t);
            }
            if (gd.supportedMethods.indexOf(e) >= 0) {
                var w = Wc(f);
                return gd[e].call.apply(gd[e], [d, this.D].concat(ta(w)));
            }
        }
        if (d instanceof Xc || d instanceof Ma || d instanceof dd) {
            if (d.has(e)) {
                var x = d.get(e);
                if (x instanceof Xc) {
                    var y = Wc(f);
                    return x.invoke.apply(x, [this.D].concat(ta(y)));
                }
                var B = "TypeError: " + e + " is not a function";
                if (fd()) throw new hd(B);
                throw Error(B);
            }
            if (e === "toString") return d instanceof Xc ? d.getName() : d.toString();
            if (e === "hasOwnProperty") return d.has(f.get(0));
        }
        if (d instanceof bd && e === "toString") return d.toString();
        var C = "TypeError: Object has no '" + e + "' property.";
        if (fd()) throw new hd(C);
        throw Error(C);
    }
    function pd(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.D;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d;
    }
    function qd() {
        var a = ya.apply(0, arguments),
            b = Ha(this.D),
            c = Ia(b, a);
        if (c instanceof Aa) return c;
    }
    function rd() {
        return jd;
    }
    function sd(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof Aa) return d;
        }
    }
    function td() {
        for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                Ga(a, c, d, !0);
            }
        }
    }
    function ud() {
        return kd;
    }
    function vd(a, b) {
        return new Aa(a, this.evaluate(b));
    }
    function wd(a, b) {
        for (var c = ya.apply(2, arguments), d = new Vc(), e = this.evaluate(b), f = 0; f < e.length; f++) d.push(e[f]);
        var g = [51, a, d].concat(ta(c));
        this.D.add(a, this.evaluate(g));
    }
    function xd(a, b) {
        return this.evaluate(a) / this.evaluate(b);
    }
    function yd(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b),
            e = c instanceof bd,
            f = d instanceof bd;
        return e || f ? (e && f ? c.getValue() === d.getValue() : !1) : c == d;
    }
    function zd() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a;
    }
    function Ad(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Ia(f, d);
            if (g instanceof Aa) {
                if (g.getType() === "break") break;
                if (g.getType() === "return") return g;
            }
        }
    }
    function Bd(a, b, c) {
        if (typeof b === "string")
            return Ad(
                a,
                function () {
                    return b.length;
                },
                function (f) {
                    return f;
                },
                c
            );
        if (b instanceof Ma || b instanceof dd || b instanceof Vc || b instanceof Xc) {
            var d = b.la(),
                e = d.length;
            return Ad(
                a,
                function () {
                    return e;
                },
                function (f) {
                    return d[f];
                },
                c
            );
        }
    }
    function Cd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Bd(
            function (k) {
                g.set(d, k);
                return g;
            },
            e,
            f
        );
    }
    function Dd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Bd(
            function (k) {
                var m = Ha(g);
                Ga(m, d, k, !0);
                return m;
            },
            e,
            f
        );
    }
    function Ed(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Bd(
            function (k) {
                var m = Ha(g);
                m.add(d, k);
                return m;
            },
            e,
            f
        );
    }
    function Fd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Gd(
            function (k) {
                g.set(d, k);
                return g;
            },
            e,
            f
        );
    }
    function Hd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Gd(
            function (k) {
                var m = Ha(g);
                Ga(m, d, k, !0);
                return m;
            },
            e,
            f
        );
    }
    function Id(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Gd(
            function (k) {
                var m = Ha(g);
                m.add(d, k);
                return m;
            },
            e,
            f
        );
    }
    function Gd(a, b, c) {
        if (typeof b === "string")
            return Ad(
                a,
                function () {
                    return b.length;
                },
                function (d) {
                    return b[d];
                },
                c
            );
        if (b instanceof Vc)
            return Ad(
                a,
                function () {
                    return b.length();
                },
                function (d) {
                    return b.get(d);
                },
                c
            );
        if (fd()) throw new hd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }
    function Jd(a, b, c, d) {
        function e(q, r) {
            for (var u = 0; u < f.length(); u++) {
                var v = f.get(u);
                r.add(v, q.get(v));
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof Vc)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.D,
            k = this.evaluate(d),
            m = Ha(g);
        for (e(g, m); Ka(m, b); ) {
            var n = Ia(m, k);
            if (n instanceof Aa) {
                if (n.getType() === "break") break;
                if (n.getType() === "return") return n;
            }
            var p = Ha(g);
            e(m, p);
            Ka(p, c);
            m = p;
        }
    }
    function Kd(a, b) {
        var c = ya.apply(2, arguments),
            d = this.D,
            e = this.evaluate(b);
        if (!(e instanceof Vc)) throw Error("Error: non-List value given for Fn argument names.");
        return new Xc(
            a,
            (function () {
                return function () {
                    var f = ya.apply(0, arguments),
                        g = Ha(d);
                    g.j === void 0 && (g.j = this.D.j);
                    for (var k = [], m = 0; m < f.length; m++) {
                        var n = this.evaluate(f[m]);
                        if (n instanceof Aa) return n;
                        k[m] = n;
                    }
                    for (var p = e.get("length"), q = 0; q < p; q++) q < k.length ? g.add(e.get(q), k[q]) : g.add(e.get(q), void 0);
                    g.add("arguments", new Vc(k));
                    var r = Ia(g, c);
                    if (r instanceof Aa) return r.getType() === "return" ? r.getData() : r;
                };
            })()
        );
    }
    function Ld(a) {
        var b = this.evaluate(a),
            c = this.D;
        if (Md && !c.has(b)) throw new ReferenceError(b + " is not defined.");
        return c.get(b);
    }
    function Nd(a, b) {
        var c,
            d = this.evaluate(a),
            e = this.evaluate(b);
        if (d === void 0 || d === null) {
            var f = "TypeError: Cannot read properties of " + d + " (reading '" + e + "')";
            if (fd()) throw new hd(f);
            throw Error(f);
        }
        if (d instanceof Ma || d instanceof dd || d instanceof Vc || d instanceof Xc) c = d.get(e);
        else if (typeof d === "string") e === "length" ? (c = d.length) : Uc(e) && (c = d[e]);
        else if (d instanceof bd) return;
        return c;
    }
    function Od(a, b) {
        return this.evaluate(a) > this.evaluate(b);
    }
    function Pd(a, b) {
        return this.evaluate(a) >= this.evaluate(b);
    }
    function Qd(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        c instanceof bd && (c = c.getValue());
        d instanceof bd && (d = d.getValue());
        return c === d;
    }
    function Rd(a, b) {
        return !Qd.call(this, a, b);
    }
    function Sd(a, b, c) {
        var d = [];
        this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
        var e = Ia(this.D, d);
        if (e instanceof Aa) return e;
    }
    var Md = !1;
    function Td(a, b) {
        return this.evaluate(a) < this.evaluate(b);
    }
    function Ud(a, b) {
        return this.evaluate(a) <= this.evaluate(b);
    }
    function Vd() {
        for (var a = new Vc(), b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c);
        }
        return a;
    }
    function Wd() {
        for (var a = new Ma(), b = 0; b < arguments.length - 1; b += 2) {
            var c = String(this.evaluate(arguments[b])),
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d);
        }
        return a;
    }
    function Xd(a, b) {
        return this.evaluate(a) % this.evaluate(b);
    }
    function Yd(a, b) {
        return this.evaluate(a) * this.evaluate(b);
    }
    function Zd(a) {
        return -this.evaluate(a);
    }
    function $d(a) {
        return !this.evaluate(a);
    }
    function ae(a, b) {
        return !yd.call(this, a, b);
    }
    function be() {
        return null;
    }
    function ce(a, b) {
        return this.evaluate(a) || this.evaluate(b);
    }
    function de(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c;
    }
    function ee(a) {
        return this.evaluate(a);
    }
    function fe() {
        return ya.apply(0, arguments);
    }
    function ge(a) {
        return new Aa("return", this.evaluate(a));
    }
    function he(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (d === null || d === void 0) {
            var g = "TypeError: Can't set property " + e + " of " + d + ".";
            if (fd()) throw new hd(g);
            throw Error(g);
        }
        (d instanceof Xc || d instanceof Vc || d instanceof Ma) && d.set(String(e), f);
        return f;
    }
    function ie(a, b) {
        return this.evaluate(a) - this.evaluate(b);
    }
    function je(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!Array.isArray(e) || !Array.isArray(f)) throw Error("Error: Malformed switch instruction.");
        for (var g, k = !1, m = 0; m < e.length; m++)
            if (k || d === this.evaluate(e[m]))
                if (((g = this.evaluate(f[m])), g instanceof Aa)) {
                    var n = g.getType();
                    if (n === "break") return;
                    if (n === "return" || n === "continue") return g;
                } else k = !0;
        if (f.length === e.length + 1 && ((g = this.evaluate(f[f.length - 1])), g instanceof Aa && (g.getType() === "return" || g.getType() === "continue"))) return g;
    }
    function ke(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
    }
    function le(a) {
        var b = this.evaluate(a);
        return b instanceof Xc ? "function" : typeof b;
    }
    function me() {
        for (var a = this.D, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0);
        }
    }
    function ne(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Ia(this.D, e);
            if (f instanceof Aa) {
                if (f.getType() === "break") return;
                if (f.getType() === "return") return f;
            }
        }
        for (; this.evaluate(a); ) {
            var g = Ia(this.D, e);
            if (g instanceof Aa) {
                if (g.getType() === "break") break;
                if (g.getType() === "return") return g;
            }
            this.evaluate(b);
        }
    }
    function oe(a) {
        return ~Number(this.evaluate(a));
    }
    function pe(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b));
    }
    function qe(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b));
    }
    function re(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
    }
    function se(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b));
    }
    function te(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
    }
    function ue(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b));
    }
    function ve() {}
    function we(a, b, c, d, e) {
        var f = !0;
        try {
            var g = this.evaluate(c);
            if (g instanceof Aa) return g;
        } catch (r) {
            if (!(r instanceof hd && a)) throw ((f = r instanceof hd), r);
            var k = Ha(this.D),
                m = new bd(r);
            k.add(b, m);
            var n = this.evaluate(d),
                p = Ia(k, n);
            if (p instanceof Aa) return p;
        } finally {
            if (f && e !== void 0) {
                var q = this.evaluate(e);
                if (q instanceof Aa) return q;
            }
        }
    }
    var ye = function () {
        this.j = new La();
        xe(this);
    };
    ye.prototype.execute = function (a) {
        return this.j.xi(a);
    };
    var xe = function (a) {
        var b = function (c, d) {
            var e = new Xc(String(c), d);
            e.Ia();
            a.j.j.set(String(c), e);
        };
        b("map", Wd);
        b("and", Ic);
        b("contains", Lc);
        b("equals", Jc);
        b("or", Kc);
        b("startsWith", Mc);
        b("variable", Nc);
    };
    var Ae = function () {
        this.C = !1;
        this.j = new La();
        ze(this);
        this.C = !0;
    };
    Ae.prototype.execute = function (a) {
        return Be(this.j.xi(a));
    };
    var Ce = function (a, b, c) {
        return Be(a.j.Il(b, c));
    };
    Ae.prototype.Ia = function () {
        this.j.Ia();
    };
    var ze = function (a) {
        var b = function (c, d) {
            var e = String(c),
                f = new Xc(e, d);
            f.Ia();
            a.j.j.set(e, f);
        };
        b(0, md);
        b(1, nd);
        b(2, od);
        b(3, pd);
        b(56, se);
        b(57, pe);
        b(58, oe);
        b(59, ue);
        b(60, qe);
        b(61, re);
        b(62, te);
        b(53, qd);
        b(4, rd);
        b(5, sd);
        b(52, td);
        b(6, ud);
        b(49, vd);
        b(7, Vd);
        b(8, Wd);
        b(9, sd);
        b(50, wd);
        b(10, xd);
        b(12, yd);
        b(13, zd);
        b(51, Kd);
        b(47, Cd);
        b(54, Dd);
        b(55, Ed);
        b(63, Jd);
        b(64, Fd);
        b(65, Hd);
        b(66, Id);
        b(15, Ld);
        b(16, Nd);
        b(17, Nd);
        b(18, Od);
        b(19, Pd);
        b(20, Qd);
        b(21, Rd);
        b(22, Sd);
        b(23, Td);
        b(24, Ud);
        b(25, Xd);
        b(26, Yd);
        b(27, Zd);
        b(28, $d);
        b(29, ae);
        b(45, be);
        b(30, ce);
        b(32, de);
        b(33, de);
        b(34, ee);
        b(35, ee);
        b(46, fe);
        b(36, ge);
        b(43, he);
        b(37, ie);
        b(38, je);
        b(39, ke);
        b(67, we);
        b(40, le);
        b(44, ve);
        b(41, me);
        b(42, ne);
    };
    Ae.prototype.Pd = function () {
        return this.j.Pd();
    };
    function Be(a) {
        if (a instanceof Aa || a instanceof Xc || a instanceof Vc || a instanceof Ma || a instanceof dd || a instanceof bd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a;
    }
    var De = function (a) {
        this.message = a;
    };
    function Ee(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a];
        return b === void 0 ? new De("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b;
    }
    function Fe(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-";
        }
    }
    var Ge = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function He(a, b) {
        for (var c = "", d = !0; a > 7; ) {
            var e = a & 31;
            a >>= 5;
            d ? (d = !1) : (e |= 32);
            c = "" + Ee(e) + c;
        }
        a <<= 2;
        d || (a |= 32);
        return (c = "" + Ee(a | b) + c);
    }
    var Ie = (function () {
        function a(b) {
            return {
                toString: function () {
                    return b;
                },
            };
        }
        return {
            fl: a("consent"),
            Ji: a("convert_case_to"),
            Ki: a("convert_false_to"),
            Li: a("convert_null_to"),
            Mi: a("convert_true_to"),
            Ni: a("convert_undefined_to"),
            Sn: a("debug_mode_metadata"),
            ra: a("function"),
            yh: a("instance_name"),
            Ll: a("live_only"),
            Ml: a("malware_disabled"),
            METADATA: a("metadata"),
            Pl: a("original_activity_id"),
            ho: a("original_vendor_template_id"),
            fo: a("once_on_load"),
            Ol: a("once_per_event"),
            Xj: a("once_per_load"),
            jo: a("priority_override"),
            ko: a("respected_consent_types"),
            hk: a("setup_tags"),
            Pe: a("tag_id"),
            mk: a("teardown_tags"),
        };
    })();
    var df;
    var ef = [],
        gf = [],
        hf = [],
        jf = [],
        kf = [],
        lf = {},
        mf,
        nf;
    function of(a) {
        nf = nf || a;
    }
    function pf(a) {}
    var qf,
        rf = [],
        sf = [];
    function tf(a, b) {
        var c = {};
        c[Ie.ra] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c;
    }
    function uf(a, b, c) {
        try {
            return mf(vf(a, b, c));
        } catch (d) {
            JSON.stringify(a);
        }
        return 2;
    }
    function wf(a) {
        var b = a[Ie.ra];
        if (!b) throw Error("Error: No function name given for function call.");
        return !!lf[b];
    }
    var vf = function (a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
            return d;
        },
        xf = function (a, b, c) {
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(xf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ef[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var k = String(g[Ie.yh]);
                        try {
                            var m = vf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = yf(m, { event: b, index: f, type: 2, name: k });
                            qf && (d = qf.hm(d, m));
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = xf(a[q], b, c);
                            nf && (p = p || nf.Wm(r));
                            d.push(r);
                        }
                        return nf && p ? nf.km(d) : d.join("");
                    case "escape":
                        d = xf(a[1], b, c);
                        if (nf && Array.isArray(a[1]) && a[1][0] === "macro" && nf.Xm(a)) return nf.sn(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Pe[a[u]] && (d = Pe[a[u]](d));
                        return d;
                    case "tag":
                        var v = a[1];
                        if (!jf[v]) throw Error("Unable to resolve tag reference " + v + ".");
                        return { uk: a[2], index: v };
                    case "zb":
                        var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        t[Ie.ra] = a[1];
                        var w = uf(t, b, c),
                            x = !!a[4];
                        return x || w !== 2 ? x !== (w === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a;
        },
        yf = function (a, b) {
            var c = a[Ie.ra],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = lf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) && e && rf.indexOf(c) !== -1,
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && tb(m, "vtp_") && (e && (g[m] = a[m]), !e || f) && (k[m.substring(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (b.name == null) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (q == null) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = ef[q];
                                    break;
                                case 1:
                                    r = jf[q];
                                    break;
                                default:
                                    n = "";
                                    break a;
                            }
                            var u = r && r[Ie.yh];
                            n = u ? String(u) : "";
                        }
                    }
                    b.name = n;
                }
                e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
            }
            var v, t, w;
            if (f && sf.indexOf(c) === -1) {
                sf.push(c);
                var x = ob();
                v = e(g);
                var y = ob() - x,
                    B = ob();
                t = df(c, k, b);
                w = y - (ob() - B);
            } else if ((e && (v = e(g)), !e || f)) t = df(c, k, b);
            f &&
                d &&
                (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
                Tc(v) ? (Array.isArray(v) ? Array.isArray(t) : Rc(v) ? Rc(t) : typeof v === "function" ? typeof t === "function" : v === t) || d.reportMacroDiscrepancy(d.id, c) : v !== t && d.reportMacroDiscrepancy(d.id, c),
                w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
            return e ? v : t;
        };
    var zf = function (a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError";
    };
    ra(zf, Error);
    zf.prototype.getMessage = function () {
        return this.message;
    };
    function Af(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", { value: { line: b[0] } });
            for (var c = 1; c < a.length; c++) Af(a[c], b[c]);
        }
    }
    var Bf = function (a, b) {
        var c;
        c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.nn = a;
        this.j = [];
        this.C = b;
    };
    ra(Bf, Error);
    function Cf() {
        return function (a, b) {
            a instanceof Bf || (a = new Bf(a, Df));
            b && a instanceof Bf && a.j.push(b);
            throw a;
        };
    }
    function Df(a) {
        if (!a.length) return a;
        a.push({ id: "main", line: 0 });
        for (var b = a.length - 1; b > 0; b--) ab(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a;
    }
    function Ef(a) {
        function b(r) {
            for (var u = 0; u < r.length; u++) d[r[u]] = !0;
        }
        for (var c = [], d = [], e = Ff(a), f = 0; f < gf.length; f++) {
            var g = gf[f],
                k = Gf(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || []);
            } else k === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < jf.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p;
    }
    function Gf(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0) return !1;
            if (e === 2) return null;
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (k === 2) return null;
            if (k === 1) return !1;
        }
        return !0;
    }
    function Ff(a) {
        var b = [];
        return function (c) {
            b[c] === void 0 && (b[c] = uf(hf[c], a));
            return b[c];
        };
    }
    function Hf(a, b) {
        b[Ie.Ji] && typeof a === "string" && (a = b[Ie.Ji] === 1 ? a.toLowerCase() : a.toUpperCase());
        b.hasOwnProperty(Ie.Li) && a === null && (a = b[Ie.Li]);
        b.hasOwnProperty(Ie.Ni) && a === void 0 && (a = b[Ie.Ni]);
        b.hasOwnProperty(Ie.Mi) && a === !0 && (a = b[Ie.Mi]);
        b.hasOwnProperty(Ie.Ki) && a === !1 && (a = b[Ie.Ki]);
        return a;
    }
    var If = function () {
            this.j = {};
        },
        Kf = function (a, b) {
            var c = Jf.j,
                d;
            (d = c.j)[a] != null || (d[a] = []);
            c.j[a].push(function () {
                return b.apply(null, ta(ya.apply(0, arguments)));
            });
        };
    function Lf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    (f = a[e](b, c, d)), (g += ".");
                } catch (k) {
                    g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + ".";
                }
                if (!f) throw new zf(c, d, g);
            }
    }
    function Mf(a, b, c) {
        return function (d) {
            if (d) {
                var e = a.j[d],
                    f = a.j.all;
                if (e || f) {
                    var g = c.apply(void 0, [d].concat(ta(ya.apply(1, arguments))));
                    Lf(e, b, d, g);
                    Lf(f, b, d, g);
                }
            }
        };
    }
    var Qf = function () {
            var a = data.permissions || {},
                b = Nf.ctid,
                c = this;
            this.C = {};
            this.j = new If();
            var d = {},
                e = {},
                f = Mf(this.j, b, function (g) {
                    return g && d[g] ? d[g].apply(void 0, [g].concat(ta(ya.apply(1, arguments)))) : {};
                });
            hb(a, function (g, k) {
                function m(p) {
                    var q = ya.apply(1, arguments);
                    if (!n[p]) throw Of(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(ta(q)));
                }
                var n = {};
                hb(k, function (p, q) {
                    var r = Pf(p, q);
                    n[p] = r.assert;
                    d[p] || (d[p] = r.M);
                    r.pk && !e[p] && (e[p] = r.pk);
                });
                c.C[g] = function (p, q) {
                    var r = n[p];
                    if (!r) throw Of(p, {}, "The requested permission " + p + " is not configured.");
                    var u = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, u);
                    f.apply(void 0, u);
                    var v = e[p];
                    v && v.apply(null, [m].concat(ta(u.slice(1))));
                };
            });
        },
        Rf = function (a) {
            return Jf.C[a] || function () {};
        };
    function Pf(a, b) {
        var c = tf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Of;
        try {
            return yf(c);
        } catch (d) {
            return {
                assert: function (e) {
                    throw new zf(e, {}, "Permission " + e + " is unknown.");
                },
                M: function () {
                    throw new zf(a, {}, "Permission " + a + " is unknown.");
                },
            };
        }
    }
    function Of(a, b, c) {
        return new zf(a, b, c);
    }
    var Sf = !1;
    var Tf = {};
    Tf.Uk = kb("");
    Tf.qm = kb("");
    var Zf = {},
        $f = ((Zf.uaa = !0), (Zf.uab = !0), (Zf.uafvl = !0), (Zf.uamb = !0), (Zf.uam = !0), (Zf.uap = !0), (Zf.uapv = !0), (Zf.uaw = !0), Zf);
    var hg = function (a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!fg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (d.length === 0) m = !1;
                else {
                    for (var n = d.split("."), p = 0; p < n.length; p++)
                        if (!gg.exec(n[p])) {
                            m = !1;
                            break a;
                        }
                    m = !0;
                }
                if (!m || k.length > d.length || (!g && d.length !== e.length) ? 0 : g ? tb(d, k) && (d === k || d.charAt(k.length) === ".") : d === k) return !0;
            }
            return !1;
        },
        gg = /^[a-z$_][\w$]*$/i,
        fg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
    var ig = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function jg(a, b) {
        var c = String(a),
            d = String(b),
            e = c.length - d.length;
        return e >= 0 && c.indexOf(d, e) === e;
    }
    var kg = new gb();
    function lg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + String(d),
                f = kg.get(e);
            f || ((f = new RegExp(b, d)), kg.set(e, f));
            return f.test(a);
        } catch (g) {
            return !1;
        }
    }
    function mg(a, b) {
        return String(a).indexOf(String(b)) >= 0;
    }
    function ng(a, b) {
        return String(a) === String(b);
    }
    function og(a, b) {
        return Number(a) >= Number(b);
    }
    function pg(a, b) {
        return Number(a) <= Number(b);
    }
    function qg(a, b) {
        return Number(a) > Number(b);
    }
    function rg(a, b) {
        return Number(a) < Number(b);
    }
    function sg(a, b) {
        return tb(String(a), String(b));
    }
    var zg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Ag = { Fn: "function", PixieMap: "Object", List: "Array" };
    function Bg(a, b) {
        for (var c = ["input:!*"], d = 0; d < c.length; d++) {
            var e = zg.exec(c[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                k = e[3],
                m = b[d];
            if (m == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (k !== "*") {
                var n = typeof m;
                m instanceof Xc ? (n = "Fn") : m instanceof Vc ? (n = "List") : m instanceof Ma ? (n = "PixieMap") : m instanceof dd ? (n = "PixiePromise") : m instanceof bd && (n = "OpaqueValue");
                if (n !== k) throw Error("Error in " + a + ". Argument " + f + " has type " + ((Ag[n] || n) + ", which does not match required type ") + ((Ag[k] || k) + "."));
            }
        }
    }
    function I(a, b, c) {
        for (var d = [], e = l(c), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            g instanceof Xc ? d.push("function") : g instanceof Vc ? d.push("Array") : g instanceof Ma ? d.push("Object") : g instanceof dd ? d.push("Promise") : g instanceof bd ? d.push("OpaqueValue") : d.push(typeof g);
        }
        return Error("Argument error in " + a + ". Expected argument types [" + (b.join(",") + "], but received [") + (d.join(",") + "]."));
    }
    function Cg(a) {
        return a instanceof Ma;
    }
    function Dg(a) {
        return Cg(a) || a === null || Eg(a);
    }
    function Fg(a) {
        return a instanceof Xc;
    }
    function Gg(a) {
        return Fg(a) || a === null || Eg(a);
    }
    function Hg(a) {
        return a instanceof Vc;
    }
    function Ig(a) {
        return a instanceof bd;
    }
    function L(a) {
        return typeof a === "string";
    }
    function Jg(a) {
        return L(a) || a === null || Eg(a);
    }
    function Kg(a) {
        return typeof a === "boolean";
    }
    function Lg(a) {
        return Kg(a) || a === null || Eg(a);
    }
    function Mg(a) {
        return typeof a === "number";
    }
    function Eg(a) {
        return a === void 0;
    }
    function Ng(a) {
        return "" + a;
    }
    function Og(a, b) {
        var c = [];
        return c;
    }
    function Pg(a, b) {
        var c = new Xc(a, function () {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d);
            } catch (g) {
                if (fd()) throw new hd(g.message);
                throw g;
            }
        });
        c.Ia();
        return c;
    }
    function Qg(a, b) {
        var c = new Ma(),
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                Za(e) ? c.set(d, Pg(a + "_" + d, e)) : Rc(e) ? c.set(d, Qg(a + "_" + d, e)) : (ab(e) || $a(e) || typeof e === "boolean") && c.set(d, e);
            }
        c.Ia();
        return c;
    }
    function Rg(a, b) {
        if (!L(a)) throw I(this.getName(), ["string"], arguments);
        if (!Jg(b)) throw I(this.getName(), ["string", "undefined"], arguments);
        var c = {},
            d = new Ma();
        return (d = Qg("AssertApiSubject", c));
    }
    function Sg(a, b) {
        if (!Jg(b)) throw I(this.getName(), ["string", "undefined"], arguments);
        if (a instanceof dd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new Ma();
        return (d = Qg("AssertThatSubject", c));
    }
    function Tg(a) {
        return function () {
            for (var b = ya.apply(0, arguments), c = [], d = this.D, e = 0; e < b.length; ++e) c.push(G(b[e], d));
            return ed(a.apply(null, c));
        };
    }
    function Ug() {
        for (var a = Math, b = Vg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Tg(a[e].bind(a)));
        }
        return c;
    }
    function Wg(a) {
        var b;
        return b;
    }
    function Xg(a) {
        var b;
        return b;
    }
    function Yg(a) {
        try {
            return encodeURI(a);
        } catch (b) {}
    }
    function Zg(a) {
        try {
            return encodeURIComponent(String(a));
        } catch (b) {}
    }
    function dh(a) {
        if (!Jg(a)) throw I(this.getName(), ["string|undefined"], arguments);
    }
    function eh(a, b) {
        if (!Mg(a) || !Mg(b)) throw I(this.getName(), ["number", "number"], arguments);
        return eb(a, b);
    }
    function fh() {
        return new Date().getTime();
    }
    function gh(a) {
        if (a === null) return "null";
        if (a instanceof Vc) return "array";
        if (a instanceof Xc) return "function";
        if (a instanceof bd) {
            var b = a.getValue();
            if ((b == null ? void 0 : b.constructor) === void 0 || b.constructor.name === void 0) {
                var c = String(b);
                return c.substring(8, c.length - 1);
            }
            return String(b.constructor.name);
        }
        return typeof a;
    }
    function hh(a) {
        function b(c) {
            return function (d) {
                try {
                    return c(d);
                } catch (e) {
                    (Sf || Tf.Uk) && a.call(this, e.message);
                }
            };
        }
        return {
            parse: b(function (c) {
                return ed(JSON.parse(c));
            }),
            stringify: b(function (c) {
                return JSON.stringify(G(c));
            }),
            publicName: "JSON",
        };
    }
    function ih(a) {
        return jb(G(a, this.D));
    }
    function jh(a) {
        return Number(G(a, this.D));
    }
    function kh(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
    }
    function lh(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null;
    }
    var Vg = "floor ceil round max min abs pow sqrt".split(" ");
    function mh() {
        var a = {};
        return {
            Bm: function (b) {
                return a.hasOwnProperty(b) ? a[b] : void 0;
            },
            Qk: function (b, c) {
                a[b] = c;
            },
            reset: function () {
                a = {};
            },
        };
    }
    function nh(a, b) {
        return function () {
            return Xc.prototype.invoke.apply(a, [b].concat(ta(ya.apply(0, arguments))));
        };
    }
    function oh(a, b) {
        if (!L(a)) throw I(this.getName(), ["string", "any"], arguments);
    }
    function ph(a, b) {
        if (!L(a) || !Cg(b)) throw I(this.getName(), ["string", "PixieMap"], arguments);
    }
    var qh = {};
    var rh = function (a) {
        var b = new Ma();
        if (a instanceof Vc)
            for (var c = a.la(), d = 0; d < c.length; d++) {
                var e = c[d];
                a.has(e) && b.set(e, a.get(e));
            }
        else if (a instanceof Xc)
            for (var f = a.la(), g = 0; g < f.length; g++) {
                var k = f[g];
                b.set(k, a.get(k));
            }
        else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b;
    };
    qh.keys = function (a) {
        Bg(this.getName(), arguments);
        if (a instanceof Vc || a instanceof Xc || typeof a === "string") a = rh(a);
        if (a instanceof Ma || a instanceof dd) return new Vc(a.la());
        return new Vc();
    };
    qh.values = function (a) {
        Bg(this.getName(), arguments);
        if (a instanceof Vc || a instanceof Xc || typeof a === "string") a = rh(a);
        if (a instanceof Ma || a instanceof dd) return new Vc(a.Yb());
        return new Vc();
    };
    qh.entries = function (a) {
        Bg(this.getName(), arguments);
        if (a instanceof Vc || a instanceof Xc || typeof a === "string") a = rh(a);
        if (a instanceof Ma || a instanceof dd)
            return new Vc(
                a.Ib().map(function (b) {
                    return new Vc(b);
                })
            );
        return new Vc();
    };
    qh.freeze = function (a) {
        (a instanceof Ma || a instanceof dd || a instanceof Vc || a instanceof Xc) && a.Ia();
        return a;
    };
    qh.delete = function (a, b) {
        if (a instanceof Ma && !a.zc()) return a.remove(b), !0;
        return !1;
    };
    function M(a, b) {
        var c = ya.apply(2, arguments),
            d = a.D.j;
        if (!d) throw Error("Missing program state.");
        if (d.yn) {
            try {
                d.qk.apply(null, [b].concat(ta(c)));
            } catch (e) {
                throw (Va("TAGGING", 21), e);
            }
            return;
        }
        d.qk.apply(null, [b].concat(ta(c)));
    }
    var sh = function () {
        this.C = {};
        this.j = {};
        this.H = !0;
    };
    sh.prototype.get = function (a, b) {
        var c = this.contains(a) ? this.C[a] : void 0;
        return c;
    };
    sh.prototype.contains = function (a) {
        return this.C.hasOwnProperty(a);
    };
    sh.prototype.add = function (a, b, c) {
        if (this.contains(a)) throw Error("Attempting to add a function which already exists: " + a + ".");
        if (this.j.hasOwnProperty(a)) throw Error("Attempting to add an API with an existing private API name: " + a + ".");
        this.C[a] = c ? void 0 : Za(b) ? Pg(a, b) : Qg(a, b);
    };
    function th(a, b) {
        var c = void 0;
        return c;
    }
    function uh(a, b) {}
    uh.F = "internal.safeInvoke";
    function vh() {
        var a = {};
        return a;
    }
    var P = {
            g: {
                wa: "ad_personalization",
                N: "ad_storage",
                O: "ad_user_data",
                T: "analytics_storage",
                tb: "region",
                fc: "consent_updated",
                be: "wait_for_update",
                Pi: "app_remove",
                Qi: "app_store_refund",
                Ri: "app_store_subscription_cancel",
                Si: "app_store_subscription_convert",
                Ti: "app_store_subscription_renew",
                ml: "consent_update",
                Dg: "add_payment_info",
                Eg: "add_shipping_info",
                Bc: "add_to_cart",
                Cc: "remove_from_cart",
                Fg: "view_cart",
                hc: "begin_checkout",
                Dc: "select_item",
                vb: "view_item_list",
                Pb: "select_promotion",
                wb: "view_promotion",
                La: "purchase",
                Ec: "refund",
                Pa: "view_item",
                Gg: "add_to_wishlist",
                nl: "exception",
                Ui: "first_open",
                Vi: "first_visit",
                da: "gtag.config",
                ab: "gtag.get",
                Wi: "in_app_purchase",
                ic: "page_view",
                ol: "screen_view",
                Xi: "session_start",
                Un: "source_update",
                pl: "timing_complete",
                ql: "track_social",
                dd: "user_engagement",
                rl: "user_id_update",
                ee: "gclid_link_decoration_source",
                fe: "gclid_storage_source",
                xb: "gclgb",
                cb: "gclid",
                Yi: "gclid_len",
                ed: "gclgs",
                fd: "gcllp",
                gd: "gclst",
                ka: "ads_data_redaction",
                Zi: "gad_source",
                aj: "gad_source_src",
                bj: "ndclid",
                cj: "ngad_source",
                dj: "ngbraid",
                ej: "ngclid",
                fj: "ngclsrc",
                he: "gclid_url",
                gj: "gclsrc",
                Hg: "gbraid",
                Ef: "wbraid",
                na: "allow_ad_personalization_signals",
                Ff: "allow_custom_scripts",
                ie: "allow_direct_google_requests",
                Gf: "allow_display_features",
                je: "allow_enhanced_conversions",
                jb: "allow_google_signals",
                Fa: "allow_interest_groups",
                sl: "app_id",
                tl: "app_installer_id",
                vl: "app_name",
                wl: "app_version",
                yb: "auid",
                ij: "auto_detection_enabled",
                jc: "aw_remarketing",
                Hf: "aw_remarketing_only",
                ke: "discount",
                me: "aw_feed_country",
                ne: "aw_feed_language",
                fa: "items",
                oe: "aw_merchant_id",
                Ig: "aw_basket_type",
                hd: "campaign_content",
                jd: "campaign_id",
                kd: "campaign_medium",
                ld: "campaign_name",
                md: "campaign",
                nd: "campaign_source",
                od: "campaign_term",
                kb: "client_id",
                jj: "rnd",
                Jg: "consent_update_type",
                kj: "content_group",
                lj: "content_type",
                lb: "conversion_cookie_prefix",
                pd: "conversion_id",
                xa: "conversion_linker",
                mj: "conversion_linker_disabled",
                kc: "conversion_api",
                If: "cookie_deprecation",
                Qa: "cookie_domain",
                Ra: "cookie_expires",
                eb: "cookie_flags",
                Fc: "cookie_name",
                zb: "cookie_path",
                Ma: "cookie_prefix",
                mc: "cookie_update",
                Gc: "country",
                Ba: "currency",
                Kg: "customer_buyer_stage",
                pe: "customer_lifetime_value",
                Lg: "customer_loyalty",
                Mg: "customer_ltv_bucket",
                rd: "custom_map",
                Ng: "gcldc",
                qe: "dclid",
                Og: "debug_mode",
                ia: "developer_id",
                nj: "disable_merchant_reported_purchases",
                sd: "dc_custom_params",
                oj: "dc_natural_search",
                Pg: "dynamic_event_settings",
                Qg: "affiliation",
                se: "checkout_option",
                Jf: "checkout_step",
                Rg: "coupon",
                ud: "item_list_name",
                Kf: "list_name",
                pj: "promotions",
                vd: "shipping",
                Lf: "tax",
                te: "engagement_time_msec",
                ue: "enhanced_client_id",
                ve: "enhanced_conversions",
                Sg: "enhanced_conversions_automatic_settings",
                we: "estimated_delivery_date",
                Mf: "euid_logged_in_state",
                wd: "event_callback",
                xl: "event_category",
                ob: "event_developer_id_string",
                yl: "event_label",
                Hc: "event",
                xe: "event_settings",
                ye: "event_timeout",
                zl: "description",
                Al: "fatal",
                qj: "experiments",
                Nf: "firebase_id",
                Ic: "first_party_collection",
                ze: "_x_20",
                Ab: "_x_19",
                rj: "fledge_drop_reason",
                Tg: "fledge",
                Ug: "flight_error_code",
                Vg: "flight_error_message",
                sj: "fl_activity_category",
                tj: "fl_activity_group",
                Wg: "fl_advertiser_id",
                uj: "fl_ar_dedupe",
                Xg: "match_id",
                vj: "fl_random_number",
                wj: "tran",
                xj: "u",
                Ae: "gac_gclid",
                Jc: "gac_wbraid",
                Yg: "gac_wbraid_multiple_conversions",
                Zg: "ga_restrict_domain",
                ah: "ga_temp_client_id",
                Bl: "ga_temp_ecid",
                nc: "gdpr_applies",
                bh: "geo_granularity",
                Qb: "value_callback",
                Bb: "value_key",
                Kc: "_google_ng",
                Lc: "google_signals",
                eh: "google_tld",
                Be: "groups",
                fh: "gsa_experiment_id",
                yj: "gtm_up",
                Rb: "iframe_state",
                xd: "ignore_referrer",
                Of: "internal_traffic_results",
                oc: "is_legacy_converted",
                Sb: "is_legacy_loaded",
                Ce: "is_passthrough",
                yd: "_lps",
                Sa: "language",
                De: "legacy_developer_id_string",
                ya: "linker",
                Mc: "accept_incoming",
                Cb: "decorate_forms",
                W: "domains",
                Tb: "url_position",
                Pf: "merchant_feed_label",
                Qf: "merchant_feed_language",
                Rf: "merchant_id",
                gh: "method",
                Cl: "name",
                zj: "navigation_type",
                zd: "new_customer",
                hh: "non_interaction",
                Aj: "optimize_id",
                ih: "page_hostname",
                Bd: "page_path",
                Ga: "page_referrer",
                fb: "page_title",
                jh: "passengers",
                kh: "phone_conversion_callback",
                Bj: "phone_conversion_country_code",
                lh: "phone_conversion_css_class",
                Cj: "phone_conversion_ids",
                mh: "phone_conversion_number",
                nh: "phone_conversion_options",
                Dl: "_platinum_request_status",
                oh: "_protected_audience_enabled",
                Cd: "quantity",
                Ee: "redact_device_info",
                Sf: "referral_exclusion_definition",
                Vn: "_request_start_time",
                Db: "restricted_data_processing",
                Dj: "retoken",
                El: "sample_rate",
                Tf: "screen_name",
                Ub: "screen_resolution",
                Ej: "_script_source",
                Fj: "search_term",
                Na: "send_page_view",
                qc: "send_to",
                Dd: "server_container_url",
                Ed: "session_duration",
                Fe: "session_engaged",
                Uf: "session_engaged_time",
                Eb: "session_id",
                Ge: "session_number",
                Vf: "_shared_user_id",
                Fd: "delivery_postal_code",
                Wn: "_tag_firing_delay",
                Xn: "_tag_firing_time",
                Fl: "temporary_client_id",
                Wf: "topmost_url",
                Gj: "tracking_id",
                Xf: "traffic_type",
                Ca: "transaction_id",
                Vb: "transport_url",
                ph: "trip_type",
                sc: "update",
                hb: "url_passthrough",
                Hj: "uptgs",
                Yf: "_user_agent_architecture",
                Zf: "_user_agent_bitness",
                cg: "_user_agent_full_version_list",
                dg: "_user_agent_mobile",
                eg: "_user_agent_model",
                fg: "_user_agent_platform",
                gg: "_user_agent_platform_version",
                hg: "_user_agent_wow64",
                Da: "user_data",
                qh: "user_data_auto_latency",
                rh: "user_data_auto_meta",
                sh: "user_data_auto_multi",
                th: "user_data_auto_selectors",
                uh: "user_data_auto_status",
                Gd: "user_data_mode",
                He: "user_data_settings",
                Ea: "user_id",
                qb: "user_properties",
                Ij: "_user_region",
                Hd: "us_privacy_string",
                oa: "value",
                vh: "wbraid_multiple_conversions",
                Id: "_fpm_parameters",
                Pj: "_host_name",
                Qj: "_in_page_command",
                Rj: "_ip_override",
                Sj: "_is_passthrough_cid",
                Wb: "non_personalized_ads",
                Ne: "_sst_parameters",
                nb: "conversion_label",
                qa: "page_location",
                pb: "global_developer_id_string",
                rc: "tc_privacy_string",
            },
        },
        wh = {},
        xh = Object.freeze(
            ((wh[P.g.na] = 1),
            (wh[P.g.Gf] = 1),
            (wh[P.g.je] = 1),
            (wh[P.g.jb] = 1),
            (wh[P.g.fa] = 1),
            (wh[P.g.Qa] = 1),
            (wh[P.g.Ra] = 1),
            (wh[P.g.eb] = 1),
            (wh[P.g.Fc] = 1),
            (wh[P.g.zb] = 1),
            (wh[P.g.Ma] = 1),
            (wh[P.g.mc] = 1),
            (wh[P.g.rd] = 1),
            (wh[P.g.ia] = 1),
            (wh[P.g.Pg] = 1),
            (wh[P.g.wd] = 1),
            (wh[P.g.xe] = 1),
            (wh[P.g.ye] = 1),
            (wh[P.g.Ic] = 1),
            (wh[P.g.Zg] = 1),
            (wh[P.g.Lc] = 1),
            (wh[P.g.eh] = 1),
            (wh[P.g.Be] = 1),
            (wh[P.g.Of] = 1),
            (wh[P.g.oc] = 1),
            (wh[P.g.Sb] = 1),
            (wh[P.g.ya] = 1),
            (wh[P.g.Sf] = 1),
            (wh[P.g.Db] = 1),
            (wh[P.g.Na] = 1),
            (wh[P.g.qc] = 1),
            (wh[P.g.Dd] = 1),
            (wh[P.g.Ed] = 1),
            (wh[P.g.Uf] = 1),
            (wh[P.g.Fd] = 1),
            (wh[P.g.Vb] = 1),
            (wh[P.g.sc] = 1),
            (wh[P.g.He] = 1),
            (wh[P.g.qb] = 1),
            (wh[P.g.Ne] = 1),
            wh)
        );
    Object.freeze([P.g.qa, P.g.Ga, P.g.fb, P.g.Sa, P.g.Tf, P.g.Ea, P.g.Nf, P.g.kj]);
    var yh = {},
        zh = Object.freeze(((yh[P.g.Pi] = 1), (yh[P.g.Qi] = 1), (yh[P.g.Ri] = 1), (yh[P.g.Si] = 1), (yh[P.g.Ti] = 1), (yh[P.g.Ui] = 1), (yh[P.g.Vi] = 1), (yh[P.g.Wi] = 1), (yh[P.g.Xi] = 1), (yh[P.g.dd] = 1), yh)),
        Ah = {},
        Bh = Object.freeze(
            ((Ah[P.g.Dg] = 1),
            (Ah[P.g.Eg] = 1),
            (Ah[P.g.Bc] = 1),
            (Ah[P.g.Cc] = 1),
            (Ah[P.g.Fg] = 1),
            (Ah[P.g.hc] = 1),
            (Ah[P.g.Dc] = 1),
            (Ah[P.g.vb] = 1),
            (Ah[P.g.Pb] = 1),
            (Ah[P.g.wb] = 1),
            (Ah[P.g.La] = 1),
            (Ah[P.g.Ec] = 1),
            (Ah[P.g.Pa] = 1),
            (Ah[P.g.Gg] = 1),
            Ah)
        ),
        Ch = Object.freeze([P.g.na, P.g.ie, P.g.jb, P.g.mc, P.g.Ic, P.g.xd, P.g.Na, P.g.sc]),
        Dh = Object.freeze([].concat(ta(Ch))),
        Eh = Object.freeze([P.g.Ra, P.g.ye, P.g.Ed, P.g.Uf, P.g.te]),
        Fh = Object.freeze([].concat(ta(Eh))),
        Gh = {},
        Hh = ((Gh[P.g.N] = "1"), (Gh[P.g.T] = "2"), (Gh[P.g.O] = "3"), (Gh[P.g.wa] = "4"), Gh),
        Ih = {},
        Jh = Object.freeze(
            ((Ih[P.g.ee] = 1),
            (Ih[P.g.fe] = 1),
            (Ih[P.g.na] = 1),
            (Ih[P.g.ie] = 1),
            (Ih[P.g.je] = 1),
            (Ih[P.g.Fa] = 1),
            (Ih[P.g.jc] = 1),
            (Ih[P.g.Hf] = 1),
            (Ih[P.g.ke] = 1),
            (Ih[P.g.me] = 1),
            (Ih[P.g.ne] = 1),
            (Ih[P.g.fa] = 1),
            (Ih[P.g.oe] = 1),
            (Ih[P.g.lb] = 1),
            (Ih[P.g.xa] = 1),
            (Ih[P.g.Qa] = 1),
            (Ih[P.g.Ra] = 1),
            (Ih[P.g.eb] = 1),
            (Ih[P.g.Ma] = 1),
            (Ih[P.g.Ba] = 1),
            (Ih[P.g.Kg] = 1),
            (Ih[P.g.pe] = 1),
            (Ih[P.g.Lg] = 1),
            (Ih[P.g.Mg] = 1),
            (Ih[P.g.ia] = 1),
            (Ih[P.g.nj] = 1),
            (Ih[P.g.ve] = 1),
            (Ih[P.g.we] = 1),
            (Ih[P.g.Nf] = 1),
            (Ih[P.g.Ic] = 1),
            (Ih[P.g.oc] = 1),
            (Ih[P.g.Sb] = 1),
            (Ih[P.g.Sa] = 1),
            (Ih[P.g.Pf] = 1),
            (Ih[P.g.Qf] = 1),
            (Ih[P.g.Rf] = 1),
            (Ih[P.g.zd] = 1),
            (Ih[P.g.qa] = 1),
            (Ih[P.g.Ga] = 1),
            (Ih[P.g.kh] = 1),
            (Ih[P.g.lh] = 1),
            (Ih[P.g.mh] = 1),
            (Ih[P.g.nh] = 1),
            (Ih[P.g.Db] = 1),
            (Ih[P.g.Na] = 1),
            (Ih[P.g.qc] = 1),
            (Ih[P.g.Dd] = 1),
            (Ih[P.g.Fd] = 1),
            (Ih[P.g.Ca] = 1),
            (Ih[P.g.Vb] = 1),
            (Ih[P.g.sc] = 1),
            (Ih[P.g.hb] = 1),
            (Ih[P.g.Da] = 1),
            (Ih[P.g.Ea] = 1),
            (Ih[P.g.oa] = 1),
            Ih)
        ),
        Kh = {},
        Lh = Object.freeze(((Kh.search = "s"), (Kh.youtube = "y"), (Kh.playstore = "p"), (Kh.shopping = "h"), (Kh.ads = "a"), (Kh.maps = "m"), Kh));
    Object.freeze(P.g);
    var Q = {},
        Mh =
            ((Q[P.g.fc] = "gcu"),
            (Q[P.g.xb] = "gclgb"),
            (Q[P.g.cb] = "gclaw"),
            (Q[P.g.Yi] = "gclid_len"),
            (Q[P.g.ed] = "gclgs"),
            (Q[P.g.fd] = "gcllp"),
            (Q[P.g.gd] = "gclst"),
            (Q[P.g.bj] = "ndclid"),
            (Q[P.g.cj] = "ngad_source"),
            (Q[P.g.dj] = "ngbraid"),
            (Q[P.g.ej] = "ngclid"),
            (Q[P.g.fj] = "ngclsrc"),
            (Q[P.g.yb] = "auid"),
            (Q[P.g.ke] = "dscnt"),
            (Q[P.g.me] = "fcntr"),
            (Q[P.g.ne] = "flng"),
            (Q[P.g.oe] = "mid"),
            (Q[P.g.Ig] = "bttype"),
            (Q[P.g.kb] = "gacid"),
            (Q[P.g.nb] = "label"),
            (Q[P.g.kc] = "capi"),
            (Q[P.g.If] = "pscdl"),
            (Q[P.g.Ba] = "currency_code"),
            (Q[P.g.Kg] = "clobs"),
            (Q[P.g.pe] = "vdltv"),
            (Q[P.g.Lg] = "clolo"),
            (Q[P.g.Mg] = "clolb"),
            (Q[P.g.Og] = "_dbg"),
            (Q[P.g.we] = "oedeld"),
            (Q[P.g.ob] = "edid"),
            (Q[P.g.rj] = "fdr"),
            (Q[P.g.Tg] = "fledge"),
            (Q[P.g.Ae] = "gac"),
            (Q[P.g.Jc] = "gacgb"),
            (Q[P.g.Yg] = "gacmcov"),
            (Q[P.g.nc] = "gdpr"),
            (Q[P.g.pb] = "gdid"),
            (Q[P.g.Kc] = "_ng"),
            (Q[P.g.fh] = "gsaexp"),
            (Q[P.g.Rb] = "frm"),
            (Q[P.g.Ce] = "gtm_up"),
            (Q[P.g.yd] = "lps"),
            (Q[P.g.De] = "did"),
            (Q[P.g.Pf] = "fcntr"),
            (Q[P.g.Qf] = "flng"),
            (Q[P.g.Rf] = "mid"),
            (Q[P.g.zd] = void 0),
            (Q[P.g.fb] = "tiba"),
            (Q[P.g.Db] = "rdp"),
            (Q[P.g.Eb] = "ecsid"),
            (Q[P.g.Vf] = "ga_uid"),
            (Q[P.g.Fd] = "delopc"),
            (Q[P.g.rc] = "gdpr_consent"),
            (Q[P.g.Ca] = "oid"),
            (Q[P.g.Hj] = "uptgs"),
            (Q[P.g.Yf] = "uaa"),
            (Q[P.g.Zf] = "uab"),
            (Q[P.g.cg] = "uafvl"),
            (Q[P.g.dg] = "uamb"),
            (Q[P.g.eg] = "uam"),
            (Q[P.g.fg] = "uap"),
            (Q[P.g.gg] = "uapv"),
            (Q[P.g.hg] = "uaw"),
            (Q[P.g.qh] = "ec_lat"),
            (Q[P.g.rh] = "ec_meta"),
            (Q[P.g.sh] = "ec_m"),
            (Q[P.g.th] = "ec_sel"),
            (Q[P.g.uh] = "ec_s"),
            (Q[P.g.Gd] = "ec_mode"),
            (Q[P.g.Ea] = "userId"),
            (Q[P.g.Hd] = "us_privacy"),
            (Q[P.g.oa] = "value"),
            (Q[P.g.vh] = "mcov"),
            (Q[P.g.Pj] = "hn"),
            (Q[P.g.Qj] = "gtm_ee"),
            (Q[P.g.Wb] = "npa"),
            (Q[P.g.pd] = null),
            (Q[P.g.Ub] = null),
            (Q[P.g.Sa] = null),
            (Q[P.g.fa] = null),
            (Q[P.g.qa] = null),
            (Q[P.g.Ga] = null),
            (Q[P.g.Wf] = null),
            (Q[P.g.Id] = null),
            (Q[P.g.ee] = null),
            (Q[P.g.fe] = null),
            Q);
    function Nh(a, b) {
        if (a) {
            var c = a.split("x");
            c.length === 2 && (Oh(b, "u_w", c[0]), Oh(b, "u_h", c[1]));
        }
    }
    function Ph(a, b) {
        a && (a.length === 2 ? Oh(b, "hl", a) : a.length === 5 && (Oh(b, "hl", a.substring(0, 2)), Oh(b, "gl", a.substring(3, 5))));
    }
    function Qh(a) {
        var b = Rh;
        b = b === void 0 ? Sh : b;
        var c;
        var d = b;
        if (a && a.length) {
            for (var e = [], f = 0; f < a.length; ++f) {
                var g = a[f];
                g && e.push({ item_id: d(g), quantity: g.quantity, value: g.price, start_date: g.start_date, end_date: g.end_date });
            }
            c = e;
        } else c = [];
        var k;
        var m = c;
        if (m) {
            for (var n = [], p = 0; p < m.length; p++) {
                var q = m[p],
                    r = [];
                q && (r.push(Th(q.value)), r.push(Th(q.quantity)), r.push(Th(q.item_id)), r.push(Th(q.start_date)), r.push(Th(q.end_date)), n.push("(" + r.join("*") + ")"));
            }
            k = n.length > 0 ? n.join("") : "";
        } else k = "";
        return k;
    }
    function Sh(a) {
        return Uh(a.item_id, a.id, a.item_name);
    }
    function Uh() {
        for (var a = l(ya.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            if (c !== null && c !== void 0) return c;
        }
    }
    function Vh(a) {
        if (a && a.length) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("");
            }
            return b.join(",");
        }
    }
    function Oh(a, b, c) {
        c === void 0 || c === null || (c === "" && !$f[b]) || (a[b] = c);
    }
    function Th(a) {
        return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
    }
    function Wh(a) {
        return Xh ? A.querySelectorAll(a) : null;
    }
    function Yh(a, b) {
        if (!Xh) return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b);
            } catch (e) {
                return null;
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!A.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d;
            } catch (e) {
                break;
            }
            d = d.parentElement || d.parentNode;
        } while (d !== null && d.nodeType === 1);
        return null;
    }
    var Zh = !1;
    if (A.querySelectorAll)
        try {
            var di = A.querySelectorAll(":root");
            di && di.length == 1 && di[0] == A.documentElement && (Zh = !0);
        } catch (a) {}
    var Xh = Zh;
    function ei(a) {
        switch (a) {
            case 0:
                break;
            case 9:
                return "e4";
            case 6:
                return "e5";
            case 14:
                return "e6";
            default:
                return "e7";
        }
    }
    var fi = /^[0-9A-Fa-f]{64}$/;
    function gi(a) {
        try {
            return new TextEncoder().encode(a);
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128
                    ? b.push(d)
                    : d < 2048
                    ? b.push(192 | (d >> 6), 128 | (d & 63))
                    : d < 55296 || d >= 57344
                    ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
                    : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))), b.push(240 | (d >> 18), 128 | ((d >> 12) & 63), 128 | ((d >> 6) & 63), 128 | (d & 63)));
            }
            return new Uint8Array(b);
        }
    }
    function hi(a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        var b;
        if ((b = z.crypto) == null ? 0 : b.subtle) {
            if (fi.test(a)) return Promise.resolve(a);
            try {
                var c = gi(a);
                return z.crypto.subtle
                    .digest("SHA-256", c)
                    .then(function (d) {
                        var e = Array.from(new Uint8Array(d))
                            .map(function (f) {
                                return String.fromCharCode(f);
                            })
                            .join("");
                        return z.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                    })
                    .catch(function () {
                        return "e2";
                    });
            } catch (d) {
                return Promise.resolve("e2");
            }
        } else return Promise.resolve("e1");
    }
    function ii(a, b) {
        if (a === "") return b;
        var c = Number(a);
        return isNaN(c) ? b : c;
    }
    var ji = [],
        ki = {};
    function li(a) {
        return ji[a] === void 0 ? !1 : ji[a];
    }
    var mi = [];
    function ni(a) {
        switch (a) {
            case 0:
                return 0;
            case 50:
                return 1;
            case 51:
                return 2;
            case 52:
                return 7;
            case 76:
                return 3;
            case 105:
                return 4;
            case 107:
                return 5;
            case 125:
                return 9;
            case 126:
                return 6;
        }
    }
    function oi(a, b) {
        mi[a] = b;
        var c = ni(a);
        c !== void 0 && (ji[c] = b);
    }
    function R(a) {
        oi(a, !0);
    }
    R(38);
    R(33);
    R(34);
    R(35);
    R(36);
    R(54);
    R(93);
    R(19);
    R(138);
    R(18);
    R(145);
    R(137);
    R(77);
    R(108);
    R(7);
    R(55);
    R(4);
    R(99);
    R(133);
    R(90);
    R(83);
    R(106);
    R(151);
    R(120);
    R(121);
    R(20);
    R(98);
    R(74);
    R(103);
    R(104);
    R(146);
    R(107);
    R(5);
    oi(23, !1), R(24);
    ki[1] = ii("1", 6e4);
    ki[3] = ii("10", 1);
    ki[2] = ii("", 50);
    R(28);
    pi(26, 25);
    R(13);
    R(82);
    R(101);
    R(135);
    R(112);
    R(134);
    var qi = !1;
    R(113);
    R(69);
    R(149);
    R(126);
    R(116);
    R(27);
    R(72);
    R(125);
    R(85);
    R(89);
    R(102);
    R(60);
    R(88);
    R(124);
    R(86);
    R(30);
    R(56);
    R(22);
    R(57);
    R(15);
    R(142);
    R(73);
    R(143);
    R(130);
    R(130), R(132);
    R(97);
    R(14);
    function S(a) {
        return !!mi[a];
    }
    function pi(a, b) {
        for (var c = !1, d = !1, e = 0; c === d; ) if (((c = (((Math.random() * 4294967296) | 0) & 1) === 0), (d = (((Math.random() * 4294967296) | 0) & 1) === 0), e++, e > 30)) return;
        c ? R(b) : R(a);
    }
    var ri = { kl: "1000", Wl: "101509157~102067808~102081485~102123608~102482432~102539968~102558064" },
        si = { om: Number(ri.kl) || 0, Pn: ri.Wl };
    function T(a) {
        Va("GTM", a);
    }
    var aj = {},
        bj = (z.google_tag_manager = z.google_tag_manager || {});
    aj.Ah = "5230";
    aj.Me = Number("0") || 0;
    aj.ub = "dataLayer";
    aj.Rn = "ChAIgO+BvQYQoor7spmL2KprEiYAIjRcSFGHSuqen5YySdTGMF8ROMToX1UA0teNaXfRsAe7ZeVj6hoCS+8\x3d";
    var cj = { __cl: 1, __ecl: 1, __ehl: 1, __evl: 1, __fal: 1, __fil: 1, __fsl: 1, __hl: 1, __jel: 1, __lcl: 1, __sdl: 1, __tl: 1, __ytl: 1 },
        dj = { __paused: 1, __tg: 1 },
        ej;
    for (ej in cj) cj.hasOwnProperty(ej) && (dj[ej] = 1);
    var fj = kb(""),
        gj = !1,
        hj,
        ij = !1;
    ij = !0;
    hj = ij;
    var jj,
        kj = !1;
    jj = kj;
    var lj,
        mj = !1;
    lj = mj;
    aj.Df = "www.googletagmanager.com";
    var nj = "" + aj.Df + (hj ? "/gtag/js" : "/gtm.js"),
        oj = null,
        pj = null,
        qj = {},
        rj = {};
    function sj() {
        var a = bj.sequence || 1;
        bj.sequence = a + 1;
        return a;
    }
    aj.il = "";
    var tj = "";
    aj.Bh = tj;
    var uj = function () {
            this.j = new Set();
        },
        wj = function () {
            return Array.from(vj.Fb.j).join("~");
        },
        vj = new (function () {
            this.Fb = new uj();
            this.C = !1;
            this.j = 0;
            this.Z = this.Ha = this.uc = this.K = "";
            this.P = this.H = !1;
        })();
    function xj() {
        var a = vj.K.length;
        return vj.K[a - 1] === "/" ? vj.K.substring(0, a - 1) : vj.K;
    }
    function yj() {
        return vj.C ? (S(80) ? vj.j === 0 : vj.j !== 1) : !1;
    }
    function zj(a) {
        for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b;
    }
    var Aj = new gb(),
        Bj = {},
        Cj = {},
        Fj = {
            name: aj.ub,
            set: function (a, b) {
                Sc(wb(a, b), Bj);
                Dj();
            },
            get: function (a) {
                return Ej(a, 2);
            },
            reset: function () {
                Aj = new gb();
                Bj = {};
                Dj();
            },
        };
    function Ej(a, b) {
        return b != 2 ? Aj.get(a) : Gj(a);
    }
    function Gj(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Bj, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return;
        }
        return d;
    }
    function Hj(a, b) {
        Cj.hasOwnProperty(a) || (Aj.set(a, b), Sc(wb(a, b), Bj), Dj());
    }
    function Ij() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = Ej(c, 1);
            if (Array.isArray(d) || Rc(d)) d = Sc(d, null);
            Cj[c] = d;
        }
    }
    function Dj(a) {
        hb(Cj, function (b, c) {
            Aj.set(b, c);
            Sc(wb(b), Bj);
            Sc(wb(b, c), Bj);
            a && delete Cj[b];
        });
    }
    function Jj(a, b) {
        var c,
            d = (b === void 0 ? 2 : b) !== 1 ? Gj(a) : Aj.get(a);
        Pc(d) === "array" || Pc(d) === "object" ? (c = Sc(d, null)) : (c = d);
        return c;
    }
    var Oj = /:[0-9]+$/,
        Pj = /^\d+\.fls\.doubleclick\.net$/;
    function Qj(a, b, c, d) {
        for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var k = l(g.value.split("=")),
                m = k.next().value,
                n = sa(k);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
            }
        }
        return c ? e : void 0;
    }
    function Rj(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = Sj(a.protocol) || Sj(z.location.protocol);
        b === "port"
            ? (a.port = String(Number(a.hostname ? a.port : z.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")))
            : b === "host" && (a.hostname = (a.hostname || z.location.hostname).replace(Oj, "").toLowerCase());
        return Tj(a, b, c, d, e);
    }
    function Tj(a, b, c, d, e) {
        var f,
            g = Sj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = Uj(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(Oj, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substring(k[0].length));
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Va("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Qj(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href;
        }
        return f;
    }
    function Sj(a) {
        return a ? a.replace(":", "").toLowerCase() : "";
    }
    function Uj(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c);
        }
        return b;
    }
    var Vj = {},
        Wj = 0;
    function Xj(a) {
        var b = Vj[a];
        if (!b) {
            var c = A.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || Va("TAGGING", 1), (d = "/" + d));
            var e = c.hostname.replace(Oj, "");
            b = { href: c.href, protocol: c.protocol, host: c.host, hostname: e, pathname: d, search: c.search, hash: c.hash, port: c.port };
            Wj < 5 && ((Vj[a] = b), Wj++);
        }
        return b;
    }
    function Yj(a) {
        var b = Xj(z.location.href),
            c = Rj(b, "host", !1);
        if (c && c.match(Pj)) {
            var d = Rj(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0];
            }
        }
    }
    var Zj = { "https://www.google.com": "/g", "https://www.googleadservices.com": "/as", "https://pagead2.googlesyndication.com": "/gs" };
    function ak(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return Xj("" + c + b).href;
        }
    }
    function bk(a, b) {
        if (yj() || jj) return ak(a, b);
    }
    function ck() {
        return !!aj.Bh && aj.Bh.split("@@").join("") !== "SGTM_TOKEN";
    }
    function dk(a) {
        for (var b = l([P.g.Dd, P.g.Vb]), c = b.next(); !c.done; c = b.next()) {
            var d = U(a, c.value);
            if (d) return d;
        }
    }
    function ek(a, b) {
        return yj() ? "" + xj() + (b ? Zj[a] || "" : "") : a;
    }
    function fk(a) {
        var b = String(a[Ie.ra] || "").replace(/_/g, "");
        return tb(b, "cvt") ? "cvt" : b;
    }
    var gk = z.location.search.indexOf("?gtm_latency=") >= 0 || z.location.search.indexOf("&gtm_latency=") >= 0;
    var hk = { sampleRate: "0.005000", Zk: "", On: "0.01" },
        ik = Math.random(),
        jk;
    if (!(jk = gk)) {
        var kk = hk.sampleRate;
        jk = ik < Number(kk);
    }
    var lk = jk,
        mk = (hc == null ? void 0 : hc.includes("gtm_debug=d")) || gk || ik >= 1 - Number(hk.On);
    var nk = /gtag[.\/]js/,
        ok = /gtm[.\/]js/,
        pk = !1;
    function qk(a) {
        if (pk) return "1";
        var b,
            c = (b = a.scriptElement) == null ? void 0 : b.src;
        if (c) {
            if (nk.test(c)) return "3";
            if (ok.test(c)) return "2";
        }
        return "0";
    }
    function rk(a, b) {
        var c = sk();
        c.pending || (c.pending = []);
        db(c.pending, function (d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination;
        }) || c.pending.push({ target: a, onLoad: b });
    }
    function tk() {
        var a = z.google_tags_first_party;
        Array.isArray(a) || (a = []);
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return Object.freeze(b);
    }
    var uk = function () {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = [];
        this.injectedFirstPartyContainers = {};
        this.injectedFirstPartyContainers = tk();
    };
    function sk() {
        var a = ic("google_tag_data", {}),
            b = a.tidr;
        (b && typeof b === "object") || ((b = new uk()), (a.tidr = b));
        var c = b;
        c.container || (c.container = {});
        c.destination || (c.destination = {});
        c.canonical || (c.canonical = {});
        c.pending || (c.pending = []);
        c.siloed || (c.siloed = []);
        c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = tk());
        return c;
    }
    var vk = {},
        wk = !1,
        Nf = { ctid: "UA-23532931-1", canonicalContainerId: "", Ek: "UA-23532931-1", Fk: "UA-23532931-1" };
    vk.Je = kb("");
    function xk() {
        return (
            vk.Je &&
            yk().some(function (a) {
                return a === Nf.ctid;
            })
        );
    }
    function Ak() {
        var a = Bk();
        return wk ? a.map(Ck) : a;
    }
    function Dk() {
        var a = yk();
        return wk ? a.map(Ck) : a;
    }
    function Ek() {
        var a = Dk();
        if (S(129) && !wk)
            for (var b = l([].concat(ta(a))), c = b.next(); !c.done; c = b.next()) {
                var d = Ck(c.value),
                    e = sk().destination[d];
                (e && e.state !== 0) || a.push(d);
            }
        return a;
    }
    function Fk() {
        return Gk(Nf.ctid);
    }
    function Hk() {
        return Gk(Nf.canonicalContainerId || "_" + Nf.ctid);
    }
    function Bk() {
        return Nf.Ek ? Nf.Ek.split("|") : [Nf.ctid];
    }
    function yk() {
        return Nf.Fk ? Nf.Fk.split("|") : [];
    }
    function Ik() {
        var a = Jk(Kk()),
            b = a && a.parent;
        if (b) return Jk(b);
    }
    function Jk(a) {
        var b = sk();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    }
    function Gk(a) {
        return wk ? Ck(a) : a;
    }
    function Ck(a) {
        return "siloed_" + a;
    }
    function Lk(a) {
        return S(129) ? Mk(a) : wk ? Mk(a) : a;
    }
    function Mk(a) {
        a = String(a);
        return tb(a, "siloed_") ? a.substring(7) : a;
    }
    function Nk() {
        if (vj.H) {
            var a = sk();
            if (a.siloed) {
                for (var b = [], c = Bk().map(Ck), d = yk().map(Ck), e = {}, f = 0; f < a.siloed.length; e = { mg: void 0 }, f++)
                    (e.mg = a.siloed[f]),
                        !wk &&
                        db(
                            e.mg.isDestination ? d : c,
                            (function (g) {
                                return function (k) {
                                    return k === g.mg.ctid;
                                };
                            })(e)
                        )
                            ? (wk = !0)
                            : b.push(e.mg);
                a.siloed = b;
            }
        }
    }
    function Ok() {
        var a = sk();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Ak(), f = Ek(), g = {}, k = 0; k < a.pending.length; g = { uf: void 0 }, k++)
                (g.uf = a.pending[k]),
                    db(
                        g.uf.target.isDestination ? f : e,
                        (function (m) {
                            return function (n) {
                                return n === m.uf.target.ctid;
                            };
                        })(g)
                    )
                        ? d || ((b = g.uf.onLoad), (d = !0))
                        : c.push(g.uf);
            a.pending = c;
            if (b)
                try {
                    b(Hk());
                } catch (m) {}
        }
    }
    function Pk() {
        for (
            var a = Nf.ctid,
                b = Ak(),
                c = Ek(),
                d = function (p, q) {
                    var r = { canonicalContainerId: Nf.canonicalContainerId, scriptContainerId: a, state: 2, containers: b.slice(), destinations: c.slice() };
                    gc && (r.scriptElement = gc);
                    hc && (r.scriptSource = hc);
                    if (Ik() === void 0) {
                        var u;
                        a: {
                            if ((r.scriptContainerId || "").indexOf("GTM-") >= 0) {
                                var v;
                                b: {
                                    var t,
                                        w = (t = r.scriptElement) == null ? void 0 : t.src;
                                    if (w) {
                                        for (var x = vj.C, y = Xj(w), B = x ? y.pathname : "" + y.hostname + y.pathname, C = A.scripts, D = "", E = 0; E < C.length; ++E) {
                                            var K = C[E];
                                            if (!(K.innerHTML.length === 0 || (!x && K.innerHTML.indexOf(r.scriptContainerId || "SHOULD_NOT_BE_SET") < 0) || K.innerHTML.indexOf(B) < 0)) {
                                                if (K.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                                    v = String(E);
                                                    break b;
                                                }
                                                D = String(E);
                                            }
                                        }
                                        if (D) {
                                            v = D;
                                            break b;
                                        }
                                    }
                                    v = void 0;
                                }
                                var H = v;
                                if (H) {
                                    pk = !0;
                                    u = H;
                                    break a;
                                }
                            }
                            var N = [].slice.call(document.scripts);
                            u = r.scriptElement ? String(N.indexOf(r.scriptElement)) : "-1";
                        }
                        r.htmlLoadOrder = u;
                        r.loadScriptType = qk(r);
                    }
                    var J = q ? e.destination : e.container,
                        V = J[p];
                    V ? (q && V.state === 0 && T(93), Object.assign(V, r)) : (J[p] = r);
                },
                e = sk(),
                f = l(b),
                g = f.next();
            !g.done;
            g = f.next()
        )
            d(g.value, !1);
        for (var k = l(c), m = k.next(); !m.done; m = k.next()) {
            var n = m.value;
            S(129) && !wk && tb(n, "siloed_") ? delete e.destination[n] : d(n, !0);
        }
        e.canonical[Hk()] = {};
        Ok();
    }
    function Qk(a) {
        return !!sk().container[a];
    }
    function Rk(a) {
        var b = sk().destination[a];
        return !!b && !!b.state;
    }
    function Kk() {
        return { ctid: Fk(), isDestination: vk.Je };
    }
    function Sk(a) {
        var b = sk();
        (b.siloed = b.siloed || []).push(a);
    }
    function Tk() {
        var a = sk().container,
            b;
        for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1;
    }
    function Uk() {
        var a = {};
        hb(sk().destination, function (b, c) {
            c.state === 0 && (a[Mk(b)] = c);
        });
        return a;
    }
    function Vk(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0);
    }
    function Wk(a) {
        var b = sk();
        return b.destination[a] ? 1 : b.destination[Ck(a)] ? 2 : 0;
    }
    var Xk = "/td?id=" + Nf.ctid,
        Yk = ["v", "t", "pid", "dl", "tdp"],
        Zk = ["mcc"],
        $k = {},
        al = {};
    function bl(a, b, c) {
        al[a] = b;
        (c === void 0 || c) && cl(a);
    }
    function cl(a, b) {
        if ($k[a] === void 0 || (b === void 0 ? 0 : b)) $k[a] = !0;
    }
    function dl(a) {
        a = a === void 0 ? !1 : a;
        var b = Object.keys($k)
            .filter(function (c) {
                return $k[c] === !0 && al[c] !== void 0 && (a || !Zk.includes(c));
            })
            .map(function (c) {
                var d = al[c];
                typeof d === "function" && (d = d());
                return d ? "&" + c + "=" + d : "";
            })
            .join("");
        return "" + ek("https://www.googletagmanager.com") + Xk + ("" + b + "&z=0");
    }
    function el() {
        Object.keys($k).forEach(function (a) {
            Yk.indexOf(a) < 0 && ($k[a] = !1);
        });
    }
    function fl(a) {
        a = a === void 0 ? !1 : a;
        if ((!S(6) || vj.P) && mk && Nf.ctid) {
            var b = dl(a);
            a ? Bc(b) : rc(b);
            el();
        }
    }
    var gl = {};
    function hl() {
        Object.keys($k).filter(function (a) {
            return $k[a] && !Yk.includes(a);
        }).length > 0 && fl(!0);
    }
    var il = eb();
    function jl() {
        il = eb();
    }
    function kl() {
        bl("v", "3");
        bl("t", "t");
        bl("pid", function () {
            return String(il);
        });
        sc(z, "pagehide", hl);
        z.setInterval(jl, 864e5);
    }
    function ll() {
        var a = ic("google_tag_data", {});
        return (a.ics = a.ics || new ml());
    }
    var ml = function () {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.j = [];
    };
    ml.prototype.default = function (a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || (!this.accessedDefault && !this.accessedAny) || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Va("TAGGING", 19);
        b == null ? Va("TAGGING", 18) : nl(this, a, b === "granted", c, d, e, f, g);
    };
    ml.prototype.waitForUpdate = function (a, b, c) {
        for (var d = 0; d < a.length; d++) nl(this, a[d], void 0, void 0, "", "", b, c);
    };
    var nl = function (a, b, c, d, e, f, g, k) {
        var m = a.entries,
            n = m[b] || {},
            p = n.region,
            q = d && $a(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0),
                u = { region: q, declare_region: n.declare_region, implicit: n.implicit, default: c !== void 0 ? c : n.default, declare: n.declare, update: n.update, quiet: r };
            if (e !== "" || n.default !== !1) m[b] = u;
            r &&
                z.setTimeout(function () {
                    m[b] === u && u.quiet && (Va("TAGGING", 2), (a.waitPeriodTimedOut = !0), a.clearTimeout(b, void 0, k), a.notifyListeners());
                }, g);
        }
    };
    h = ml.prototype;
    h.clearTimeout = function (a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            k = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = l(d), n = m.next(); !n.done; n = m.next()) ol(this, n.value);
        } else if (b !== void 0 && k !== b) for (var p = l(d), q = p.next(); !q.done; q = p.next()) ol(this, q.value);
    };
    h.update = function (a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c);
        }
    };
    h.declare = function (a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            k = g.declare_region,
            m = c && $a(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
            var n = { region: g.region, declare_region: m, declare: b === "granted", implicit: g.implicit, default: g.default, update: g.update, quiet: g.quiet };
            if (d !== "" || g.declare !== !1) f[a] = n;
        }
    };
    h.implicit = function (a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = (c[a] = c[a] || {});
        d.implicit !== !1 && (d.implicit = b === "granted");
    };
    h.getConsentState = function (a, b) {
        var c = this.entries,
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (b.usedContainerScopedDefaults) {
            var f = b.containerScopedDefaults[a];
            if (f === 3) return 1;
            if (f === 2) return 2;
        } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var g = b.delegatedConsentTypes[a],
                k = c[g] || {};
            e = k.update;
            if (e !== void 0) return e ? 1 : 2;
            if (b.usedContainerScopedDefaults) {
                var m = b.containerScopedDefaults[g];
                if (m === 3) return 1;
                if (m === 2) return 2;
            } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? (e ? 3 : 4) : 0;
    };
    h.addListener = function (a, b) {
        this.j.push({ consentTypes: a, Od: b });
    };
    var ol = function (a, b) {
        for (var c = 0; c < a.j.length; ++c) {
            var d = a.j[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Gk = !0);
        }
    };
    ml.prototype.notifyListeners = function (a, b) {
        for (var c = 0; c < this.j.length; ++c) {
            var d = this.j[c];
            if (d.Gk) {
                d.Gk = !1;
                try {
                    d.Od({ consentEventId: a, consentPriorityId: b });
                } catch (e) {}
            }
        }
    };
    var pl = !1,
        ql = !1,
        rl = {},
        sl = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: ((rl.ad_storage = 1), (rl.analytics_storage = 1), (rl.ad_user_data = 1), (rl.ad_personalization = 1), rl),
            usedContainerScopedDefaults: !1,
        };
    function tl(a) {
        var b = ll();
        b.accessedAny = !0;
        return ($a(a) ? [a] : a).every(function (c) {
            switch (b.getConsentState(c, sl)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0;
            }
        });
    }
    function ul(a) {
        var b = ll();
        b.accessedAny = !0;
        return b.getConsentState(a, sl);
    }
    function vl(a) {
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = sl.corePlatformServices[e] !== !1;
        }
        return b;
    }
    function wl(a) {
        var b = ll();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet;
    }
    function xl() {
        if (!li(8)) return !1;
        var a = ll();
        a.accessedAny = !0;
        if (a.active) return !0;
        if (!sl.usedContainerScopedDefaults) return !1;
        for (var b = l(Object.keys(sl.containerScopedDefaults)), c = b.next(); !c.done; c = b.next()) if (sl.containerScopedDefaults[c.value] !== 1) return !0;
        return !1;
    }
    function yl(a, b) {
        ll().addListener(a, b);
    }
    function zl(a, b) {
        ll().notifyListeners(a, b);
    }
    function Al(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++) if (!wl(b[e])) return !0;
            return !1;
        }
        if (c()) {
            var d = !1;
            yl(b, function (e) {
                d || c() || ((d = !0), a(e));
            });
        } else a({});
    }
    function Bl(a, b) {
        function c() {
            for (var k = [], m = 0; m < e.length; m++) {
                var n = e[m];
                tl(n) && !f[n] && k.push(n);
            }
            return k;
        }
        function d(k) {
            for (var m = 0; m < k.length; m++) f[k[m]] = !0;
        }
        var e = $a(b) ? [b] : b,
            f = {},
            g = c();
        g.length !== e.length &&
            (d(g),
            yl(e, function (k) {
                function m(q) {
                    q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
                }
                var n = c();
                if (n.length !== 0) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length
                        ? m(n)
                        : z.setTimeout(function () {
                              m(c());
                          }, 500);
                }
            }));
    }
    var Cl = ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization"],
        Dl = [P.g.Dd, P.g.Vb, P.g.Ic, P.g.kb, P.g.Eb, P.g.Ea, P.g.ya, P.g.Ma, P.g.Qa, P.g.zb],
        El = !1,
        Fl = !1,
        Gl = {},
        Hl = {};
    function Il() {
        !Fl &&
            El &&
            (Cl.some(function (a) {
                return sl.containerScopedDefaults[a] !== 1;
            }) ||
                Jl("mbc"));
        Fl = !0;
    }
    function Jl(a) {
        mk && (bl(a, "1"), fl());
    }
    function Kl(a, b) {
        if (!Gl[b] && ((Gl[b] = !0), Hl[b]))
            for (var c = l(Dl), d = c.next(); !d.done; d = c.next())
                if (a.hasOwnProperty(d.value)) {
                    Jl("erc");
                    break;
                }
    }
    function Ll(a) {
        Va("HEALTH", a);
    }
    var Ml;
    try {
        Ml = JSON.parse(Sa("eyIwIjoiUlUiLCIxIjoiUlUtS0RBIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUucnUiLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"));
    } catch (a) {
        T(123), Ll(2), (Ml = {});
    }
    function Nl() {
        return Ml["0"] || "";
    }
    function Ol() {
        return Ml["1"] || "";
    }
    function Pl() {
        var a = !1;
        return a;
    }
    function Ql() {
        return Ml["6"] !== !1;
    }
    function Rl() {
        var a = "";
        return a;
    }
    function Sl() {
        var a = !1;
        a = !!Ml["5"];
        return a;
    }
    function Tl() {
        var a = "";
        return a;
    }
    function Ul(a) {
        return a && a.indexOf("pending:") === 0 ? Vl(a.substr(8)) : !1;
    }
    function Vl(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = ob();
        return b < c + 3e5 && b > c - 9e5;
    }
    var Wl = !1,
        Xl = !1,
        Yl = !1,
        Zl = 0,
        $l = !1,
        am = [];
    function bm(a) {
        if (Zl === 0) $l && am && (am.length >= 100 && am.shift(), am.push(a));
        else if (cm()) {
            var b = ic("google.tagmanager.ta.prodqueue", []);
            b.length >= 50 && b.shift();
            b.push(a);
        }
    }
    function dm() {
        em();
        tc(A, "TAProdDebugSignal", dm);
    }
    function em() {
        if (!Xl) {
            Xl = !0;
            fm();
            var a = am;
            am = void 0;
            a == null ||
                a.forEach(function (b) {
                    bm(b);
                });
        }
    }
    function fm() {
        var a = A.documentElement.getAttribute("data-tag-assistant-prod-present");
        Vl(a)
            ? (Zl = 1)
            : !Ul(a) || Wl || Yl
            ? (Zl = 2)
            : ((Yl = !0),
              sc(A, "TAProdDebugSignal", dm, !1),
              z.setTimeout(function () {
                  em();
                  Wl = !0;
              }, 200));
    }
    function cm() {
        if (!$l) return !1;
        switch (Zl) {
            case 1:
            case 0:
                return !0;
            case 2:
                return !1;
            default:
                return !1;
        }
    }
    var gm = !1;
    function hm(a, b) {
        if (cm()) {
            var c = im("INIT");
            c.containerLoadSource = a != null ? a : 0;
            b && (c.parentTargetReference = b);
            bm(c);
        }
    }
    function jm(a) {
        var b, c, d;
        b = a.targetId;
        c = a.request;
        d = a.Ua;
        if (cm()) {
            var e = im("GTAG_HIT", { eventId: d.eventId, priorityId: d.priorityId });
            e.target = b;
            e.url = c.url;
            c.postBody && (e.postBody = c.postBody);
            e.parameterEncoding = c.parameterEncoding;
            e.endpoint = c.endpoint;
            bm(e);
        }
    }
    function im(a, b) {
        b = b === void 0 ? {} : b;
        b.groupId = km;
        var c,
            d = b,
            e = { publicId: lm };
        d.eventId != null && (e.eventId = d.eventId);
        d.priorityId != null && (e.priorityId = d.priorityId);
        d.eventName && (e.eventName = d.eventName);
        d.groupId && (e.groupId = d.groupId);
        d.tagName && (e.tagName = d.tagName);
        c = { containerProduct: "GTM", key: e, version: "1", messageType: a };
        c.containerProduct = gm ? "OGT" : "GTM";
        c.key.targetRef = mm;
        return c;
    }
    var km = "",
        lm = "",
        mm = { ctid: "", isDestination: !1 };
    var nm = [P.g.N, P.g.T, P.g.O, P.g.wa],
        om,
        pm;
    function qm(a) {
        for (var b = a[P.g.tb], c = Array.isArray(b) ? b : [b], d = { ef: 0 }; d.ef < c.length; d = { ef: d.ef }, ++d.ef)
            hb(
                a,
                (function (e) {
                    return function (f, g) {
                        if (f !== P.g.tb) {
                            var k = c[e.ef],
                                m = Nl(),
                                n = Ol();
                            ql = !0;
                            pl && Va("TAGGING", 20);
                            ll().declare(f, g, k, m, n);
                        }
                    };
                })(d)
            );
    }
    function rm(a) {
        Il();
        !pm && om && Jl("crc");
        pm = !0;
        var b = a[P.g.tb];
        b && T(40);
        var c = a[P.g.be];
        c && T(41);
        for (var d = Array.isArray(b) ? b : [b], e = { ff: 0 }; e.ff < d.length; e = { ff: e.ff }, ++e.ff)
            hb(
                a,
                (function (f) {
                    return function (g, k) {
                        if (g !== P.g.tb && g !== P.g.be) {
                            var m = d[f.ff],
                                n = Number(c),
                                p = Nl(),
                                q = Ol();
                            n = n === void 0 ? 0 : n;
                            pl = !0;
                            ql && Va("TAGGING", 20);
                            ll().default(g, k, m, p, q, n, sl);
                        }
                    };
                })(e)
            );
    }
    function sm(a) {
        sl.usedContainerScopedDefaults = !0;
        var b = a[P.g.tb];
        if (b) {
            var c = Array.isArray(b) ? b : [b];
            if (!c.includes(Ol()) && !c.includes(Nl())) return;
        }
        hb(a, function (d, e) {
            switch (d) {
                case "ad_storage":
                case "analytics_storage":
                case "ad_user_data":
                case "ad_personalization":
                    break;
                default:
                    return;
            }
            sl.usedContainerScopedDefaults = !0;
            sl.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
        });
    }
    function tm(a, b) {
        Il();
        om = !0;
        hb(a, function (c, d) {
            pl = !0;
            ql && Va("TAGGING", 20);
            ll().update(c, d, sl);
        });
        zl(b.eventId, b.priorityId);
    }
    function um(a) {
        a.hasOwnProperty("all") &&
            ((sl.selectedAllCorePlatformServices = !0),
            hb(Lh, function (b) {
                sl.corePlatformServices[b] = a.all === "granted";
                sl.usedCorePlatformServices = !0;
            }));
        hb(a, function (b, c) {
            b !== "all" && ((sl.corePlatformServices[b] = c === "granted"), (sl.usedCorePlatformServices = !0));
        });
    }
    function W(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function (b) {
            return tl(b);
        });
    }
    function vm(a, b) {
        yl(a, b);
    }
    function wm(a, b) {
        Bl(a, b);
    }
    function xm(a, b) {
        Al(a, b);
    }
    function ym() {
        var a = [P.g.N, P.g.wa, P.g.O];
        ll().waitForUpdate(a, 500, sl);
    }
    function zm(a) {
        for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            ll().clearTimeout(d, void 0, sl);
        }
        zl();
    }
    var Am = !1,
        Bm = [];
    var Cm = { gk: "service_worker_endpoint", Ch: "shared_user_id", Dh: "shared_user_id_requested", Oe: "shared_user_id_source", Cf: "cookie_deprecation_label" },
        Dm;
    function Em(a) {
        if (!Dm) {
            Dm = {};
            for (var b = l(Object.keys(Cm)), c = b.next(); !c.done; c = b.next()) Dm[Cm[c.value]] = !0;
        }
        return !!Dm[a];
    }
    function Fm(a, b) {
        b = b === void 0 ? !1 : b;
        if (Em(a)) {
            var c,
                d,
                e = (d = (c = ic("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
            if (e[a]) return e[a];
            if (b) {
                var f = void 0,
                    g = 1,
                    k = {},
                    m = {
                        set: function (n) {
                            f = n;
                            m.notify();
                        },
                        get: function () {
                            return f;
                        },
                        subscribe: function (n) {
                            k[String(g)] = n;
                            return g++;
                        },
                        unsubscribe: function (n) {
                            var p = String(n);
                            return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
                        },
                        notify: function () {
                            for (var n = l(Object.keys(k)), p = n.next(); !p.done; p = n.next()) {
                                var q = p.value;
                                try {
                                    k[q](a, f);
                                } catch (r) {}
                            }
                        },
                    };
                return (e[a] = m);
            }
        }
    }
    function Gm(a, b) {
        var c = Fm(a, !0);
        c && c.set(b);
    }
    function Hm(a) {
        var b;
        return (b = Fm(a)) == null ? void 0 : b.get();
    }
    function Im(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = Fm(a, !0)) == null ? void 0 : c.subscribe(b);
        }
    }
    function Jm(a, b) {
        var c = Fm(a);
        return c ? c.unsubscribe(b) : !1;
    }
    function Km() {
        if (bj.pscdl !== void 0) Hm(Cm.Cf) === void 0 && Gm(Cm.Cf, bj.pscdl);
        else {
            var a = function (c) {
                    bj.pscdl = c;
                    Gm(Cm.Cf, c);
                },
                b = function () {
                    a("error");
                };
            try {
                ec.cookieDeprecationLabel ? (a("pending"), ec.cookieDeprecationLabel.getValue().then(a).catch(b)) : a("noapi");
            } catch (c) {
                b(c);
            }
        }
    }
    function Lm(a, b) {
        b &&
            hb(b, function (c, d) {
                typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
            });
    }
    var Mm = /[A-Z]+/,
        Nm = /\s/;
    function Om(a, b) {
        if ($a(a)) {
            a = mb(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (Mm.test(d)) {
                    var e = a.substring(c + 1),
                        f;
                    if (b) {
                        var g = function (n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var k = g(f[1]);
                            k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++) if (!f[m] || (Nm.test(f[m]) && (d !== "AW" || m !== 1))) return;
                    }
                    return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
                }
            }
        }
    }
    function Pm(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = Om(a[d], b);
            e && (c[e.id] = e);
        }
        Qm(c);
        var f = [];
        hb(c, function (g, k) {
            f.push(k);
        });
        return f;
    }
    function Qm(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.ids[Rm[2]] && b.push(d.destinationId);
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]];
    }
    var Sm = {},
        Rm = ((Sm[0] = 0), (Sm[1] = 0), (Sm[2] = 1), (Sm[3] = 0), (Sm[4] = 1), (Sm[5] = 2), (Sm[6] = 0), (Sm[7] = 0), (Sm[8] = 0), Sm);
    var Tm = Number("") || 500,
        Um = {},
        Vm = {},
        Wm = { initialized: 11, complete: 12, interactive: 13 },
        Xm = {},
        Ym = Object.freeze(((Xm[P.g.Na] = !0), Xm)),
        Zm = void 0;
    function $m(a, b) {
        if (b.length && mk) {
            var c;
            (c = Um)[a] != null || (c[a] = []);
            Vm[a] != null || (Vm[a] = []);
            var d = b.filter(function (e) {
                return !Vm[a].includes(e);
            });
            Um[a].push.apply(Um[a], ta(d));
            Vm[a].push.apply(Vm[a], ta(d));
            !Zm &&
                d.length > 0 &&
                (cl("tdc", !0),
                (Zm = z.setTimeout(function () {
                    fl();
                    Um = {};
                    Zm = void 0;
                }, Tm)));
        }
    }
    function an(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c;
    }
    function bn(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function (r, u) {
                var v;
                Pc(u) === "object" ? (v = u[r]) : Pc(u) === "array" && (v = u[r]);
                return v === void 0 ? Ym[r] : v;
            },
            f = an(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var k = (d ? d + "." : "") + g,
                    m = e(g, a),
                    n = e(g, b),
                    p = Pc(m) === "object" || Pc(m) === "array",
                    q = Pc(n) === "object" || Pc(n) === "array";
                if (p && q) bn(m, n, c, k);
                else if (p || q || m !== n) c[k] = !0;
            }
        return Object.keys(c);
    }
    function cn() {
        bl(
            "tdc",
            function () {
                Zm && (z.clearTimeout(Zm), (Zm = void 0));
                var a = [],
                    b;
                for (b in Um) Um.hasOwnProperty(b) && a.push(b + "*" + Um[b].join("."));
                return a.length ? a.join("!") : void 0;
            },
            !1
        );
    }
    var dn = function (a, b, c, d, e, f, g, k, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.j = c;
            this.P = d;
            this.H = e;
            this.K = f;
            this.C = g;
            this.eventMetadata = k;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p;
        },
        en = function (a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.j);
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 2:
                    c.push(a.j);
                    break;
                case 1:
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 4:
                    c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
            }
            return c;
        },
        U = function (a, b, c, d) {
            for (var e = l(en(a, d === void 0 ? 3 : d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b];
            }
            return c;
        },
        fn = function (a) {
            for (var b = {}, c = en(a, 4), d = l(c), e = d.next(); !e.done; e = d.next()) for (var f = Object.keys(e.value), g = l(f), k = g.next(); !k.done; k = g.next()) b[k.value] = 1;
            return Object.keys(b);
        },
        gn = function (a, b, c) {
            function d(n) {
                Rc(n) &&
                    hb(n, function (p, q) {
                        f = !0;
                        e[p] = q;
                    });
            }
            var e = {},
                f = !1,
                g = en(a, c === void 0 ? 3 : c);
            g.reverse();
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
            return f ? e : void 0;
        },
        hn = function (a) {
            for (var b = [P.g.md, P.g.hd, P.g.jd, P.g.kd, P.g.ld, P.g.nd, P.g.od], c = en(a, 3), d = l(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, k = !1, m = l(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
                }
                var q = k ? g : void 0;
                if (q) return q;
            }
            return {};
        },
        jn = function (a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.C = {};
            this.P = {};
            this.j = {};
            this.H = {};
            this.Z = {};
            this.K = {};
            this.eventMetadata = {};
            this.isGtmEvent = !1;
            this.onSuccess = function () {};
            this.onFailure = function () {};
        },
        kn = function (a, b) {
            a.C = b;
            return a;
        },
        ln = function (a, b) {
            a.P = b;
            return a;
        },
        mn = function (a, b) {
            a.j = b;
            return a;
        },
        nn = function (a, b) {
            a.H = b;
            return a;
        },
        on = function (a, b) {
            a.Z = b;
            return a;
        },
        pn = function (a, b) {
            a.K = b;
            return a;
        },
        qn = function (a, b) {
            a.eventMetadata = b || {};
            return a;
        },
        rn = function (a, b) {
            a.onSuccess = b;
            return a;
        },
        sn = function (a, b) {
            a.onFailure = b;
            return a;
        },
        tn = function (a, b) {
            a.isGtmEvent = b;
            return a;
        },
        un = function (a) {
            return new dn(a.eventId, a.priorityId, a.C, a.P, a.j, a.H, a.K, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent);
        };
    var vn = { Yk: Number("5"), Bo: Number("") },
        wn = [];
    function xn(a) {
        wn.push(a);
    }
    var yn = "?id=" + Nf.ctid,
        zn = void 0,
        An = {},
        Bn = void 0,
        Cn = new (function () {
            var a = 5;
            vn.Yk > 0 && (a = vn.Yk);
            this.C = a;
            this.j = 0;
            this.H = [];
        })(),
        Dn = 1e3;
    function En(a, b) {
        var c = zn;
        if (c === void 0)
            if (b) c = sj();
            else return "";
        for (var d = [ek("https://www.googletagmanager.com"), "/a", yn], e = l(wn), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, k = g({ eventId: c, bd: !!a }), m = l(k), n = m.next(); !n.done; n = m.next()) {
                var p = l(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r);
            }
        d.push("&z=0");
        return d.join("");
    }
    function Fn() {
        if (!S(6) || vj.P)
            if ((Bn && (z.clearTimeout(Bn), (Bn = void 0)), zn !== void 0 && Gn)) {
                var a;
                (a = An[zn]) || (a = Cn.j < Cn.C ? !1 : ob() - Cn.H[Cn.j % Cn.C] < 1e3);
                if (a || Dn-- <= 0) T(1), (An[zn] = !0);
                else {
                    var b = Cn.j++ % Cn.C;
                    Cn.H[b] = ob();
                    var c = En(!0);
                    rc(c);
                    Gn = !1;
                }
            }
    }
    var Gn = !1;
    function Hn(a) {
        An[a] || (a !== zn && (Fn(), (zn = a)), (Gn = !0), Bn || (Bn = z.setTimeout(Fn, 500)), En().length >= 2022 && Fn());
    }
    var In = eb();
    function Jn() {
        In = eb();
    }
    function Kn() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", String(In)],
        ];
    }
    var Ln = {};
    function Mn(a, b, c) {
        lk && a !== void 0 && ((Ln[a] = Ln[a] || []), Ln[a].push(c + b), Hn(a));
    }
    function Nn(a) {
        var b = a.eventId,
            c = a.bd,
            d = [],
            e = Ln[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete Ln[b];
        return d;
    }
    var On = {},
        Pn = ((On[0] = 0), (On[1] = 0), (On[2] = 0), (On[3] = 0), On),
        Qn = function (a, b) {
            this.j = a;
            this.consentTypes = b;
        };
    Qn.prototype.isConsentGranted = function () {
        switch (this.j) {
            case 0:
                return this.consentTypes.every(function (a) {
                    return tl(a);
                });
            case 1:
                return this.consentTypes.some(function (a) {
                    return tl(a);
                });
            default:
                throw Error("consentsRequired had an unknown type");
        }
    };
    var Rn = {},
        Sn = ((Rn[0] = new Qn(0, [])), (Rn[1] = new Qn(0, ["ad_storage"])), (Rn[2] = new Qn(0, ["analytics_storage"])), (Rn[3] = new Qn(1, ["ad_storage", "analytics_storage"])), Rn);
    var Tn = function (a) {
        var b = this;
        this.type = a;
        this.j = [];
        vm(Sn[a].consentTypes, function () {
            (Pn[b.type] === 2 && !Sn[b.type].isConsentGranted()) || b.flush();
        });
    };
    Tn.prototype.flush = function () {
        for (var a = l(this.j), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            c();
        }
        this.j = [];
    };
    var Un = function (a, b) {
            Pn[a.type] !== 2 || Sn[a.type].isConsentGranted() ? b() : a.j.push(b);
        },
        Vn = new Map();
    function Wn(a) {
        Vn.has(a) || Vn.set(a, new Tn(a));
        return Vn.get(a);
    }
    function Xn(a, b, c) {
        var d = Om(Gk(a), !0);
        d && Yn.register(d, b, c);
    }
    function Zn(a, b, c, d) {
        var e = Om(c, d.isGtmEvent);
        e && (gj && (d.deferrable = !0), Yn.push("event", [b, a], e, d));
    }
    function $n(a, b, c, d) {
        var e = Om(c, d.isGtmEvent);
        e && Yn.push("get", [a, b], e, d);
    }
    function ao(a) {
        var b = Om(Gk(a), !0),
            c;
        b ? (c = bo(Yn, b).j) : (c = {});
        return c;
    }
    function co(a, b) {
        var c = Om(Gk(a), !0);
        if (c) {
            var d = Yn,
                e = Sc(b, null);
            Sc(bo(d, c).j, e);
            bo(d, c).j = e;
        }
    }
    var eo = function () {
            this.P = {};
            this.j = {};
            this.C = {};
            this.Z = null;
            this.K = {};
            this.H = !1;
            this.status = 1;
        },
        fo = function (a, b, c, d) {
            this.C = ob();
            this.j = b;
            this.args = c;
            this.messageContext = d;
            this.type = a;
        },
        go = function () {
            this.destinations = {};
            this.j = {};
            this.commands = [];
        },
        bo = function (a, b) {
            var c = b.destinationId;
            S(129) && !wk && (c = Lk(c));
            return (a.destinations[c] = a.destinations[c] || new eo());
        },
        ho = function (a, b, c, d) {
            if (d.j) {
                var e = bo(a, d.j),
                    f = e.Z;
                if (f) {
                    var g = d.j.id;
                    S(129) && !wk && (g = Lk(g));
                    var k = Sc(c, null),
                        m = Sc(e.P[g], null),
                        n = Sc(e.K, null),
                        p = Sc(e.j, null),
                        q = Sc(a.j, null),
                        r = {};
                    if (lk)
                        try {
                            r = Sc(Bj, null);
                        } catch (x) {
                            T(72);
                        }
                    var u = d.j.prefix,
                        v = function (x) {
                            Mn(d.messageContext.eventId, u, x);
                        },
                        t = un(
                            tn(
                                sn(
                                    rn(qn(on(nn(pn(mn(ln(kn(new jn(d.messageContext.eventId, d.messageContext.priorityId), k), m), n), p), q), r), d.messageContext.eventMetadata), function () {
                                        if (v) {
                                            var x = v;
                                            v = void 0;
                                            x("2");
                                            if (d.messageContext.onSuccess) d.messageContext.onSuccess();
                                        }
                                    }),
                                    function () {
                                        if (v) {
                                            var x = v;
                                            v = void 0;
                                            x("3");
                                            if (d.messageContext.onFailure) d.messageContext.onFailure();
                                        }
                                    }
                                ),
                                !!d.messageContext.isGtmEvent
                            )
                        ),
                        w = function () {
                            try {
                                Mn(d.messageContext.eventId, u, "1");
                                var x = d.type,
                                    y = d.j.id;
                                if (mk && x === "config") {
                                    var B,
                                        C = (B = Om(y)) == null ? void 0 : B.ids;
                                    if (!(C && C.length > 1)) {
                                        var D,
                                            E = ic("google_tag_data", {});
                                        E.td || (E.td = {});
                                        D = E.td;
                                        var K = Sc(t.K);
                                        Sc(t.j, K);
                                        var H = [],
                                            N;
                                        for (N in D) D.hasOwnProperty(N) && bn(D[N], K).length && H.push(N);
                                        H.length && ($m(y, H), Va("TAGGING", Wm[A.readyState] || 14));
                                        D[y] = K;
                                    }
                                }
                                f(d.j.id, b, d.C, t);
                            } catch (J) {
                                Mn(d.messageContext.eventId, u, "4");
                            }
                        };
                    b === "gtag.get" ? w() : S(100) ? Un(e.Ha, w) : w();
                }
            }
        };
    go.prototype.register = function (a, b, c) {
        var d = bo(this, a);
        d.status !== 3 && ((d.Z = b), (d.status = 3), S(100) && (d.Ha = Wn(c)), this.flush());
    };
    go.prototype.push = function (a, b, c, d) {
        c !== void 0 && (bo(this, c).status === 1 && ((bo(this, c).status = 2), this.push("require", [{}], c, {})), bo(this, c).H && (d.deferrable = !1));
        this.commands.push(new fo(a, c, b, d));
        d.deferrable || this.flush();
    };
    go.prototype.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.commands.length; e = { xc: void 0, Th: void 0 }) {
            var f = this.commands[0],
                g = f.j;
            if (f.messageContext.deferrable) !g || bo(this, g).H ? ((f.messageContext.deferrable = !1), this.commands.push(f)) : c.push(f), this.commands.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (bo(this, g).status !== 3 && !a) {
                            this.commands.push.apply(this.commands, c);
                            return;
                        }
                        break;
                    case "set":
                        hb(f.args[0], function (u, v) {
                            Sc(wb(u, v), b.j);
                        });
                        break;
                    case "config":
                        var k = bo(this, g);
                        e.xc = {};
                        hb(
                            f.args[0],
                            (function (u) {
                                return function (v, t) {
                                    Sc(wb(v, t), u.xc);
                                };
                            })(e)
                        );
                        var m = !!e.xc[P.g.sc];
                        delete e.xc[P.g.sc];
                        var n = g.destinationId === g.id;
                        m || (n ? (k.K = {}) : (k.P[g.id] = {}));
                        (k.H && m) || ho(this, P.g.da, e.xc, f);
                        k.H = !0;
                        n ? Sc(e.xc, k.K) : (Sc(e.xc, k.P[g.id]), T(70));
                        d = !0;
                        Kl(e.xc, g.id);
                        El = !0;
                        break;
                    case "event":
                        e.Th = {};
                        hb(
                            f.args[0],
                            (function (u) {
                                return function (v, t) {
                                    Sc(wb(v, t), u.Th);
                                };
                            })(e)
                        );
                        ho(this, f.args[1], e.Th, f);
                        var p = void 0;
                        !f.j || ((p = f.messageContext.eventMetadata) == null ? 0 : p.em_event) || (Hl[f.j.id] = !0);
                        El = !0;
                        break;
                    case "get":
                        var q = {},
                            r = ((q[P.g.Bb] = f.args[0]), (q[P.g.Qb] = f.args[1]), q);
                        ho(this, P.g.ab, r, f);
                        El = !0;
                }
                this.commands.shift();
                io(this, f);
            }
        }
        this.commands.push.apply(this.commands, c);
        d && this.flush();
    };
    var io = function (a, b) {
            if (b.type !== "require")
                if (b.j) for (var c = bo(a, b.j).C[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.C) for (var g = f.C[b.type] || [], k = 0; k < g.length; k++) g[k]();
                        }
        },
        Yn = new go();
    var jo = function (a, b) {
            var c = function () {};
            c.prototype = a.prototype;
            var d = new c();
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d;
        },
        ko = function (a) {
            var b = a;
            return function () {
                if (b) {
                    var c = b;
                    b = null;
                    c();
                }
            };
        };
    var lo = function (a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1);
        },
        mo = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1);
        };
    var no, oo;
    a: {
        for (var po = ["CLOSURE_FLAGS"], qo = za, ro = 0; ro < po.length; ro++)
            if (((qo = qo[po[ro]]), qo == null)) {
                oo = null;
                break a;
            }
        oo = qo;
    }
    var so = oo && oo[610401301];
    no = so != null ? so : !1;
    function to() {
        var a = za.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b;
        }
        return "";
    }
    var uo,
        vo = za.navigator;
    uo = vo ? vo.userAgentData || null : null;
    function wo(a) {
        return no
            ? uo
                ? uo.brands.some(function (b) {
                      var c;
                      return (c = b.brand) && c.indexOf(a) != -1;
                  })
                : !1
            : !1;
    }
    function xo(a) {
        return to().indexOf(a) != -1;
    }
    function yo() {
        return no ? !!uo && uo.brands.length > 0 : !1;
    }
    function zo() {
        return yo() ? !1 : xo("Opera");
    }
    function Ao() {
        return xo("Firefox") || xo("FxiOS");
    }
    function Bo() {
        return yo() ? wo("Chromium") : ((xo("Chrome") || xo("CriOS")) && !(yo() ? 0 : xo("Edge"))) || xo("Silk");
    }
    var Co = function (a) {
        Co[" "](a);
        return a;
    };
    Co[" "] = function () {};
    var Do = function (a, b, c, d) {
            for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
                var g = a.charCodeAt(e - 1);
                if (g == 38 || g == 63) {
                    var k = a.charCodeAt(e + f);
                    if (!k || k == 61 || k == 38 || k == 35) return e;
                }
                e += f + 1;
            }
            return -1;
        },
        Eo = /#|$/,
        Fo = function (a, b) {
            var c = a.search(Eo),
                d = Do(a, 0, b, c);
            if (d < 0) return null;
            var e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "));
        },
        Go = /[?&]($|#)/,
        Ho = function (a, b, c) {
            for (var d, e = a.search(Eo), f = 0, g, k = []; (g = Do(a, f, b, e)) >= 0; ) k.push(a.substring(f, g)), (f = Math.min(a.indexOf("&", g) + 1 || e, e));
            k.push(a.slice(f));
            d = k.join("").replace(Go, "$1");
            var m,
                n = c != null ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q,
                    r = d.indexOf("#");
                r < 0 && (r = d.length);
                var u = d.indexOf("?"),
                    v;
                u < 0 || u > r ? ((u = r), (v = "")) : (v = d.substring(u + 1, r));
                q = [d.slice(0, u), v, d.slice(r)];
                var t = q[1];
                q[1] = p ? (t ? t + "&" + p : p) : t;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
            } else m = d;
            return m;
        };
    function Io() {
        return no ? !!uo && !!uo.platform : !1;
    }
    function Jo() {
        return xo("iPhone") && !xo("iPod") && !xo("iPad");
    }
    function Ko() {
        Jo() || xo("iPad") || xo("iPod");
    }
    zo();
    yo() || xo("Trident") || xo("MSIE");
    xo("Edge");
    !xo("Gecko") || (to().toLowerCase().indexOf("webkit") != -1 && !xo("Edge")) || xo("Trident") || xo("MSIE") || xo("Edge");
    to().toLowerCase().indexOf("webkit") != -1 && !xo("Edge") && xo("Mobile");
    Io() || xo("Macintosh");
    Io() || xo("Windows");
    (Io() ? uo.platform === "Linux" : xo("Linux")) || Io() || xo("CrOS");
    Io() || xo("Android");
    Jo();
    xo("iPad");
    xo("iPod");
    Ko();
    to().toLowerCase().indexOf("kaios");
    var Lo = function (a) {
            try {
                var b;
                if ((b = !!a && a.location.href != null))
                    a: {
                        try {
                            Co(a.foo);
                            b = !0;
                            break a;
                        } catch (c) {}
                        b = !1;
                    }
                return b;
            } catch (c) {
                return !1;
            }
        },
        Mo = function (a, b) {
            if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
        },
        No = function (a) {
            if (z.top == z) return 0;
            if (a === void 0 ? 0 : a) {
                var b = z.location.ancestorOrigins;
                if (b) return b[b.length - 1] == z.location.origin ? 1 : 2;
            }
            return Lo(z.top) ? 1 : 2;
        },
        Oo = function (a) {
            a = a === void 0 ? document : a;
            return a.createElement("img");
        },
        Po = function () {
            for (var a = z, b = a; a && a != a.parent; ) (a = a.parent), Lo(a) && (b = a);
            return b;
        };
    function Qo(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Oo(a.document);
        if (c) {
            var f = function () {
                if (c) {
                    var g = a.google_image_requests,
                        k = bc(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1);
                }
                mo(e, "load", f);
                mo(e, "error", f);
            };
            lo(e, "load", f);
            lo(e, "error", f);
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e);
    }
    var So = function (a) {
            var b;
            b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Mo(a, function (d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
            });
            Ro(c, b);
        },
        Ro = function (a, b) {
            var c = window,
                d;
            b = b === void 0 ? !1 : b;
            d = d === void 0 ? !1 : d;
            if (c.fetch) {
                var e = { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" };
                d &&
                    ((e.mode = "cors"),
                    "setAttributionReporting" in XMLHttpRequest.prototype ? (e.attributionReporting = { eventSourceEligible: "true", triggerEligible: "false" }) : (e.headers = { "Attribution-Reporting-Eligible": "event-source" }));
                c.fetch(a, e);
            } else Qo(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
        };
    var To = function () {
        this.P = this.P;
        this.C = this.C;
    };
    To.prototype.P = !1;
    To.prototype.dispose = function () {
        this.P || ((this.P = !0), this.Ha());
    };
    To.prototype[Symbol.dispose] = function () {
        this.dispose();
    };
    To.prototype.addOnDisposeCallback = function (a, b) {
        this.P ? (b !== void 0 ? a.call(b) : a()) : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
    };
    To.prototype.Ha = function () {
        if (this.C) for (; this.C.length; ) this.C.shift()();
    };
    function Uo(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return (a.tcString !== void 0 && typeof a.tcString !== "string") || (a.listenerId !== void 0 && typeof a.listenerId !== "number") ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3;
    }
    var Vo = function (a, b) {
        b = b === void 0 ? {} : b;
        To.call(this);
        this.j = null;
        this.Z = {};
        this.ig = 0;
        this.K = null;
        this.H = a;
        var c;
        this.uc = (c = b.Jn) != null ? c : 500;
        var d;
        this.Fb = (d = b.ro) != null ? d : !1;
    };
    ra(Vo, To);
    Vo.prototype.Ha = function () {
        this.Z = {};
        this.K && (mo(this.H, "message", this.K), delete this.K);
        delete this.Z;
        delete this.H;
        delete this.j;
        To.prototype.Ha.call(this);
    };
    var Xo = function (a) {
        return typeof a.H.__tcfapi === "function" || Wo(a) != null;
    };
    Vo.prototype.addEventListener = function (a) {
        var b = this,
            c = { internalBlockOnErrors: this.Fb },
            d = ko(function () {
                return a(c);
            }),
            e = 0;
        this.uc !== -1 &&
            (e = setTimeout(function () {
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d();
            }, this.uc));
        var f = function (g, k) {
            clearTimeout(e);
            g
                ? ((c = g), (c.internalErrorState = Uo(c)), (c.internalBlockOnErrors = b.Fb), (k && c.internalErrorState === 0) || ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
                : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
            a(c);
        };
        try {
            Yo(this, "addEventListener", f);
        } catch (g) {
            (c.tcString = "tcunavailable"), (c.internalErrorState = 3), e && (clearTimeout(e), (e = 0)), d();
        }
    };
    Vo.prototype.removeEventListener = function (a) {
        a && a.listenerId && Yo(this, "removeEventListener", null, a.listenerId);
    };
    var $o = function (a, b, c) {
            var d;
            d = d === void 0 ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (f !== void 0) {
                        e = f[d === void 0 ? "755" : d];
                        break a;
                    }
                }
                e = void 0;
            }
            var g = e;
            if (g === 0) return !1;
            var k = c;
            c === 2 ? ((k = 0), g === 2 && (k = 1)) : c === 3 && ((k = 1), g === 1 && (k = 0));
            var m;
            if (k === 0)
                if (a.purpose && a.vendor) {
                    var n = Zo(a.vendor.consents, d === void 0 ? "755" : d);
                    m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && Zo(a.purpose.consents, b);
                } else m = !0;
            else m = k === 1 ? (a.purpose && a.vendor ? Zo(a.purpose.legitimateInterests, b) && Zo(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0) : !0;
            return m;
        },
        Zo = function (a, b) {
            return !(!a || !a[b]);
        },
        Yo = function (a, b, c, d) {
            c || (c = function () {});
            var e = a.H;
            if (typeof e.__tcfapi === "function") {
                var f = e.__tcfapi;
                f(b, 2, c, d);
            } else if (Wo(a)) {
                ap(a);
                var g = ++a.ig;
                a.Z[g] = c;
                if (a.j) {
                    var k = {};
                    a.j.postMessage(((k.__tcfapiCall = { command: b, version: 2, callId: g, parameter: d }), k), "*");
                }
            } else c({}, !1);
        },
        Wo = function (a) {
            if (a.j) return a.j;
            var b;
            a: {
                for (var c = a.H, d = 0; d < 50; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator);
                    } catch (k) {
                        e = !1;
                    }
                    if (e) {
                        b = c;
                        break a;
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b;
                            }
                        } catch (k) {}
                        f = null;
                    }
                    if (!(c = f)) break;
                }
                b = null;
            }
            a.j = b;
            return a.j;
        },
        ap = function (a) {
            if (!a.K) {
                var b = function (c) {
                    try {
                        var d;
                        d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                        a.Z[d.callId](d.returnValue, d.success);
                    } catch (e) {}
                };
                a.K = b;
                lo(a.H, "message", b);
            }
        },
        kp = function (a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = Uo(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0
                ? a.internalBlockOnErrors
                    ? (So({ e: String(a.internalErrorState) }), !1)
                    : !0
                : a.cmpStatus !== "loaded" || (a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete")
                ? !1
                : !0;
        };
    var lp = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
    function mp() {
        var a = bj.tcf || {};
        return (bj.tcf = a);
    }
    var np = function () {
        return new Vo(z, { Jn: -1 });
    };
    function op() {
        var a = mp(),
            b = np();
        Xo(b) && !pp() && !qp() && T(124);
        if (!a.active && Xo(b)) {
            pp() && ((a.active = !0), (a.Ac = {}), (a.cmpId = 0), (a.tcfPolicyVersion = 0), (ll().active = !0), (a.tcString = "tcunavailable"));
            ym();
            try {
                b.addEventListener(function (c) {
                    if (c.internalErrorState !== 0) rp(a), zm([P.g.N, P.g.wa, P.g.O]), (ll().active = !0);
                    else if (((a.gdprApplies = c.gdprApplies), (a.cmpId = c.cmpId), (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode), qp() && (a.active = !0), !sp(c) || pp() || qp())) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies === !1) {
                            var e = {},
                                f;
                            for (f in lp) lp.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c);
                        } else if (sp(c)) {
                            var g = {},
                                k;
                            for (k in lp)
                                if (lp.hasOwnProperty(k))
                                    if (k === "1") {
                                        var m,
                                            n = c,
                                            p = { Am: !0 };
                                        p = p === void 0 ? {} : p;
                                        m = kp(n)
                                            ? n.gdprApplies === !1
                                                ? !0
                                                : n.tcString === "tcunavailable"
                                                ? !p.yk
                                                : (p.yk || n.gdprApplies !== void 0 || p.Am) && (p.yk || (typeof n.tcString === "string" && n.tcString.length))
                                                ? $o(n, "1", 0)
                                                : !0
                                            : !1;
                                        g["1"] = m;
                                    } else g[k] = $o(c, k, lp[k]);
                            d = g;
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.Ac = d;
                            var q = {},
                                r = ((q[P.g.N] = a.Ac["1"] ? "granted" : "denied"), q);
                            a.gdprApplies !== !0
                                ? (zm([P.g.N, P.g.wa, P.g.O]), (ll().active = !0))
                                : ((r[P.g.wa] = a.Ac["3"] && a.Ac["4"] ? "granted" : "denied"),
                                  typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? (r[P.g.O] = a.Ac["1"] && a.Ac["7"] ? "granted" : "denied") : zm([P.g.O]),
                                  tm(r, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: tp() || "" }));
                        }
                    } else zm([P.g.N, P.g.wa, P.g.O]);
                });
            } catch (c) {
                rp(a), zm([P.g.N, P.g.wa, P.g.O]), (ll().active = !0);
            }
        }
    }
    function rp(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
    }
    function sp(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown";
    }
    function pp() {
        return z.gtag_enable_tcf_support === !0;
    }
    function qp() {
        return mp().enableAdvertiserConsentMode === !0;
    }
    function tp() {
        var a = mp();
        if (a.active) return a.tcString;
    }
    function up() {
        var a = mp();
        if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
    }
    function vp(a) {
        if (!lp.hasOwnProperty(String(a))) return !0;
        var b = mp();
        return b.active && b.Ac ? !!b.Ac[String(a)] : !0;
    }
    var wp = [P.g.N, P.g.T, P.g.O, P.g.wa],
        xp = {},
        yp = ((xp[P.g.N] = 1), (xp[P.g.T] = 2), xp);
    function zp(a) {
        if (a === void 0) return 0;
        switch (U(a, P.g.na)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2;
        }
    }
    function Ap(a) {
        if (Ol() === "US-CO" && ec.globalPrivacyControl === !0) return !1;
        var b = zp(a);
        if (b === 3) return !1;
        switch (ul(P.g.wa)) {
            case 1:
            case 3:
                return !0;
            case 2:
                return !1;
            case 4:
                return b === 2;
            case 0:
                return !0;
            default:
                return !1;
        }
    }
    function Bp() {
        return xl() || !tl(P.g.N) || !tl(P.g.T);
    }
    function Cp() {
        var a = {},
            b;
        for (b in yp) yp.hasOwnProperty(b) && (a[yp[b]] = ul(b));
        return "G1" + Fe(a[1] || 0) + Fe(a[2] || 0);
    }
    var Dp = {},
        Ep = ((Dp[P.g.N] = 0), (Dp[P.g.T] = 1), (Dp[P.g.O] = 2), (Dp[P.g.wa] = 3), Dp);
    function Fp(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0;
        }
    }
    function Gp(a) {
        for (var b = "1", c = 0; c < wp.length; c++) {
            var d = b,
                e,
                f = wp[c],
                g = sl.delegatedConsentTypes[f];
            e = g === void 0 ? 0 : Ep.hasOwnProperty(g) ? 12 | Ep[g] : 8;
            var k = ll();
            k.accessedAny = !0;
            var m = k.entries[f] || {};
            e = (e << 2) | Fp(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[(Fp(m.declare) << 4) | (Fp(m.default) << 2) | Fp(m.update)]);
        }
        var n = b,
            p = (Ol() === "US-CO" && ec.globalPrivacyControl === !0 ? 1 : 0) << 3,
            q = (xl() ? 1 : 0) << 2,
            r = zp(a);
        b = n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[p | q | r];
        return (b +=
            "" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[(sl.containerScopedDefaults.ad_storage << 4) | (sl.containerScopedDefaults.analytics_storage << 2) | sl.containerScopedDefaults.ad_user_data] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[((sl.usedContainerScopedDefaults ? 1 : 0) << 2) | sl.containerScopedDefaults.ad_personalization]);
    }
    function Hp() {
        if (!tl(P.g.O)) return "-";
        for (var a = Object.keys(Lh), b = vl(a), c = "", d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += Lh[f]);
        }
        (sl.usedCorePlatformServices ? sl.selectedAllCorePlatformServices : 1) && (c += "o");
        return c || "-";
    }
    function Ip() {
        return Ql() || ((pp() || qp()) && up() === "1") ? "1" : "0";
    }
    function Jp() {
        return (Ql() ? !0 : !(!pp() && !qp()) && up() === "1") || !tl(P.g.O);
    }
    function Kp() {
        var a = "0",
            b = "0",
            c;
        var d = mp();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[(c >> 6) & 63]), (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]));
        var e = "0",
            f;
        var g = mp();
        f = g.active ? g.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
        var k = 0;
        Ql() && (k |= 1);
        up() === "1" && (k |= 2);
        pp() && (k |= 4);
        var m;
        var n = mp();
        m = n.enableAdvertiserConsentMode !== void 0 ? (n.enableAdvertiserConsentMode ? "1" : "0") : void 0;
        m === "1" && (k |= 8);
        ll().waitPeriodTimedOut && (k |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k];
    }
    function Lp() {
        return Ol() === "US-CO";
    }
    function Mp() {
        var a = !1;
        return a;
    }
    var Np = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
    function Op(a) {
        a = a === void 0 ? {} : a;
        var b = Nf.ctid.split("-")[0].toUpperCase(),
            c = { ctid: Nf.ctid, xn: aj.Me, zn: aj.Ah, bn: vk.Je ? 2 : 1, En: a.Pk, Te: Nf.canonicalContainerId };
        c.Te !== a.Aa && (c.Aa = a.Aa);
        var d = Ik();
        c.on = d ? d.canonicalContainerId : void 0;
        hj ? ((c.wg = Np[b]), c.wg || (c.wg = 0)) : (c.wg = lj ? 13 : 10);
        vj.C ? ((c.ug = 0), (c.bm = 2)) : jj ? (c.ug = 1) : Mp() ? (c.ug = 2) : (c.ug = 3);
        var e = {};
        e[6] = wk;
        vj.j === 2 ? (e[7] = !0) : vj.j === 1 && (e[2] = !0);
        if (hc) {
            var f = Rj(Xj(hc), "host");
            f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
        }
        c.gm = e;
        var g = a.kg,
            k;
        var m = c.wg,
            n = c.ug;
        m === void 0 ? (k = "") : (n || (n = 0), (k = "" + He(1, 1) + Ee((m << 2) | n)));
        var p = c.bm,
            q = "4" + k + (p ? "" + He(2, 1) + Ee(p) : ""),
            r,
            u = c.zn;
        r = u && Ge.test(u) ? "" + He(3, 2) + u : "";
        var v,
            t = c.xn;
        v = t ? "" + He(4, 1) + Ee(t) : "";
        var w;
        var x = c.ctid;
        if (x && g) {
            var y = x.split("-"),
                B = y[0].toUpperCase();
            if (B !== "GTM" && B !== "OPT") w = "";
            else {
                var C = y[1];
                w = "" + He(5, 3) + Ee(1 + C.length) + (c.bn || 0) + C;
            }
        } else w = "";
        var D = c.En,
            E = c.Te,
            K = c.Aa,
            H = c.zo,
            N = q + r + v + w + (D ? "" + He(6, 1) + Ee(D) : "") + (E ? "" + He(7, 3) + Ee(E.length) + E : "") + (K ? "" + He(8, 3) + Ee(K.length) + K : "") + (H ? "" + He(9, 3) + Ee(H.length) + H : ""),
            J;
        var V = c.gm;
        V = V === void 0 ? {} : V;
        for (var ca = [], ba = l(Object.keys(V)), Z = ba.next(); !Z.done; Z = ba.next()) {
            var O = Z.value;
            ca[Number(O)] = V[O];
        }
        if (ca.length) {
            var fa = He(10, 3),
                ha;
            if (ca.length === 0) ha = Ee(0);
            else {
                for (var ia = [], Ca = 0, Ta = !1, va = 0; va < ca.length; va++) {
                    Ta = !0;
                    var Ja = va % 6;
                    ca[va] && (Ca |= 1 << Ja);
                    Ja === 5 && (ia.push(Ee(Ca)), (Ca = 0), (Ta = !1));
                }
                Ta && ia.push(Ee(Ca));
                ha = ia.join("");
            }
            var cb = ha;
            J = "" + fa + Ee(cb.length) + cb;
        } else J = "";
        var Bb = c.on;
        return N + J + (Bb ? "" + He(11, 3) + Ee(Bb.length) + Bb : "");
    }
    function Pp(a) {
        var b = 1,
            c,
            d,
            e;
        if (a) for (b = 0, d = a.length - 1; d >= 0; d--) (e = a.charCodeAt(d)), (b = ((b << 6) & 268435455) + e + (e << 14)), (c = b & 266338304), (b = c !== 0 ? b ^ (c >> 21) : b);
        return b;
    }
    function Qp(a) {
        return a.origin !== "null";
    }
    function Rp(a, b, c, d) {
        var e;
        if (Sp(d)) {
            for (var f = [], g = String(b || Tp()).split(";"), k = 0; k < g.length; k++) {
                var m = g[k].split("="),
                    n = m[0].replace(/^\s*|\s*$/g, "");
                if (n && n === a) {
                    var p = m
                        .slice(1)
                        .join("=")
                        .replace(/^\s*|\s*$/g, "");
                    p && c && (p = decodeURIComponent(p));
                    f.push(p);
                }
            }
            e = f;
        } else e = [];
        return e;
    }
    function Up(a, b, c, d, e) {
        if (Sp(e)) {
            var f = Vp(a, d, e);
            if (f.length === 1) return f[0].id;
            if (f.length !== 0) {
                f = Wp(
                    f,
                    function (g) {
                        return g.mm;
                    },
                    b
                );
                if (f.length === 1) return f[0].id;
                f = Wp(
                    f,
                    function (g) {
                        return g.qn;
                    },
                    c
                );
                return f[0] ? f[0].id : void 0;
            }
        }
    }
    function Xp(a, b, c, d) {
        var e = Tp(),
            f = window;
        Qp(f) && (f.document.cookie = a);
        var g = Tp();
        return e !== g || (c !== void 0 && Rp(b, g, !1, d).indexOf(c) >= 0);
    }
    function Yp(a, b, c, d) {
        function e(w, x, y) {
            if (y == null) return delete k[x], w;
            k[x] = y;
            return w + "; " + x + "=" + y;
        }
        function f(w, x) {
            if (x == null) return w;
            k[x] = !0;
            return w + "; " + x;
        }
        if (!Sp(c.Mb)) return 2;
        var g;
        b == null ? (g = a + "=deleted; expires=" + new Date(0).toUTCString()) : (c.encode && (b = encodeURIComponent(b)), (b = Zp(b)), (g = a + "=" + b));
        var k = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? (m = c.expires.toUTCString()) : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.hn);
        g = e(g, "samesite", c.An);
        c.secure && (g = f(g, "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = $p(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
                var v = p[u] !== "none" ? p[u] : void 0,
                    t = e(g, "domain", v);
                t = f(t, c.flags);
                try {
                    d && d(a, k);
                } catch (w) {
                    q = w;
                    continue;
                }
                r = !0;
                if (!aq(v, c.path) && Xp(t, a, b, c.Mb)) return 0;
            }
            if (q && !r) throw q;
            return 1;
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, k);
        return aq(n, c.path) ? 1 : Xp(g, a, b, c.Mb) ? 0 : 1;
    }
    function bq(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Yp(a, b, c);
    }
    function Wp(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : f === void 0 || m < f ? ((e = [k]), (f = m)) : m === f && e.push(k);
        }
        return d.length > 0 ? d : e;
    }
    function Vp(a, b, c) {
        for (var d = [], e = Rp(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || !k || b.indexOf(k) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({ id: g.join("."), mm: Number(n[0]) || 1, qn: Number(n[1]) || 1 });
                }
            }
        }
        return d;
    }
    function Zp(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a;
    }
    var cq = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        dq = /(^|\.)doubleclick\.net$/i;
    function aq(a, b) {
        return a !== void 0 && (dq.test(window.document.location.hostname) || (b === "/" && cq.test(a)));
    }
    function eq(a) {
        if (!a) return 1;
        var b = a;
        li(7) && a === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length;
    }
    function fq(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1;
    }
    function gq(a, b) {
        var c = "" + eq(a),
            d = fq(b);
        d > 1 && (c += "-" + d);
        return c;
    }
    var Tp = function () {
            return Qp(window) ? window.document.cookie : "";
        },
        Sp = function (a) {
            return a && li(8)
                ? (Array.isArray(a) ? a : [a]).every(function (b) {
                      return wl(b) && tl(b);
                  })
                : !0;
        },
        $p = function () {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"];
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            dq.test(e) || cq.test(e) || a.push("none");
            return a;
        };
    function hq(a) {
        var b = Math.round(Math.random() * 2147483647);
        return a ? String(b ^ (Pp(a) & 2147483647)) : String(b);
    }
    function iq(a) {
        return [hq(a), Math.round(ob() / 1e3)].join(".");
    }
    function jq(a, b, c, d, e) {
        var f = eq(b);
        return Up(a, f, fq(c), d, e);
    }
    function kq(a, b, c, d) {
        return [b, gq(c, d), a].join(".");
    }
    function lq(a, b, c, d) {
        var e,
            f = Number(a.Lb != null ? a.Lb : void 0);
        f !== 0 && (e = new Date((b || ob()) + 1e3 * (f || 7776e3)));
        return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: e, Mb: d };
    }
    var mq;
    function nq() {
        function a(g) {
            c(g.target || g.srcElement || {});
        }
        function b(g) {
            d(g.target || g.srcElement || {});
        }
        var c = oq,
            d = pq,
            e = qq();
        if (!e.init) {
            sc(A, "mousedown", a);
            sc(A, "keyup", a);
            sc(A, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                d(this);
                f.call(this);
            };
            
            e.init = !0;
        }
    }
    function rq(a, b, c, d, e) {
        var f = { callback: a, domains: b, fragment: c === 2, placement: c, forms: d, sameHost: e };
        qq().decorators.push(f);
    }
    function sq(a, b, c) {
        for (var d = qq().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
                k;
            if ((k = !c || g.forms))
                a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== A.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    k = !0;
                                    break a;
                                }
                            } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                                k = !0;
                                break a;
                            }
                    k = !1;
                }
            if (k) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && rb(e, g.callback());
            }
        }
        return e;
    }
    function qq() {
        var a = ic("google_tag_data", {}),
            b = a.gl;
        (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
        return b;
    }
    var tq = /(.*?)\*(.*?)\*(.*)/,
        uq = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        vq = /^(?:www\.|m\.|amp\.)+/,
        wq = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function xq(a) {
        var b = wq.exec(a);
        if (b) return { li: b[1], query: b[2], fragment: b[3] };
    }
    function yq(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
    }
    function zq(a, b) {
        var c = [ec.userAgent, new Date().getTimezoneOffset(), ec.userLanguage || ec.language, Math.floor(ob() / 60 / 1e3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = mq)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
                e[f] = g;
            }
            d = e;
        }
        mq = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = (m >>> 8) ^ mq[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36);
    }
    function Aq(a) {
        return function (b) {
            var c = Xj(z.location.href),
                d = c.search.replace("?", ""),
                e = Qj(d, "_gl", !1, !0) || "";
            b.query = Bq(e) || {};
            var f = Rj(c, "fragment"),
                g;
            var k = -1;
            if (tb(f, "_gl=")) k = 4;
            else {
                var m = f.indexOf("&_gl=");
                m > 0 && (k = m + 3 + 2);
            }
            if (k < 0) g = void 0;
            else {
                var n = f.indexOf("&", k);
                g = n < 0 ? f.substring(k) : f.substring(k, n);
            }
            b.fragment = Bq(g || "") || {};
            a && Cq(c, d, f);
        };
    }
    function Dq(a, b) {
        var c = yq(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f);
        }
        return d;
    }
    function Cq(a, b, c) {
        function d(g, k) {
            var m = Dq("_gl", g);
            m.length && (m = k + m);
            return m;
        }
        if (dc && dc.replaceState) {
            var e = yq("_gl");
            if (e.test(b) || e.test(c)) {
                var f = Rj(a, "path");
                b = d(b, "?");
                c = d(c, "#");
                dc.replaceState({}, "", "" + f + b + c);
            }
        }
    }
    function Eq(a, b) {
        var c = Aq(!!b),
            d = qq();
        d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
        var e = {},
            f = d.data;
        f && (rb(e, f.query), a && rb(e, f.fragment));
        return e;
    }
    var Bq = function (a) {
        try {
            var b = Fq(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = Sa(d[e + 1]);
                    c[f] = g;
                }
                Va("TAGGING", 6);
                return c;
            }
        } catch (k) {
            Va("TAGGING", 8);
        }
    };
    function Fq(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = tq.exec(d);
                    if (f) {
                        c = f;
                        break a;
                    }
                    d = decodeURIComponent(d);
                }
                c = void 0;
            }
            var g = c;
            if (g && g[1] === "1") {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === zq(k, p)) {
                            m = !0;
                            break a;
                        }
                    m = !1;
                }
                if (m) return k;
                Va("TAGGING", 7);
            }
        }
    }
    function Gq(a, b, c, d, e) {
        function f(p) {
            p = Dq(a, p);
            var q = p.charAt(p.length - 1);
            p && q !== "&" && (p += "&");
            return p + n;
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = xq(c);
        if (!g) return "";
        var k = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1))) : (k = "?" + f(k.substring(1)));
        return "" + g.li + k + m;
    }
    function Hq(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var u in n)
                    if (n.hasOwnProperty(u)) {
                        r = !0;
                        break a;
                    }
                r = !1;
            }
            if (r) {
                var v,
                    t = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (t.push(w), t.push(Ra(String(x))));
                    }
                var y = t.join("*");
                v = ["1", zq(y), y].join("*");
                d ? (li(3) || li(1) || !p) && Iq("_gl", v, a, p, q) : Jq("_gl", v, a, p, q);
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = sq(b, 1, d),
            f = sq(b, 2, d),
            g = sq(b, 4, d),
            k = sq(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        li(1) && c(g, !0, !0);
        for (var m in k) k.hasOwnProperty(m) && Kq(m, k[m], a);
    }
    function Kq(a, b, c) {
        c.tagName.toLowerCase() === "a" ? Jq(a, b, c) : c.tagName.toLowerCase() === "form" && Iq(a, b, c);
    }
    function Jq(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if ((f = c.href)) {
            var g;
            if (!(g = !li(5) || d)) {
                var k = z.location.href,
                    m = xq(c.href),
                    n = xq(k);
                g = !(m && n && m.li === n.li && m.query === n.query && m.fragment);
            }
            f = g;
        }
        if (f) {
            var p = Gq(a, b, c.href, d, e);
            Vb.test(p) && (c.href = p);
        }
    }
    function Iq(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var g = Gq(a, b, c.action, d, e);
                    Vb.test(g) && (c.action = g);
                }
            } else {
                for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
                    var p = k[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break;
                    }
                }
                if (!m) {
                    var q = A.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q);
                }
            }
        }
    }
    function oq(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a;
                    }
                    c = c.parentNode;
                    d--;
                }
                b = null;
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                (f !== "http:" && f !== "https:") || Hq(e, e.hostname);
            }
        } catch (g) {}
    }
    function pq(a) {
        try {
            if (a.action) {
                var b = Rj(Xj(a.action), "host");
                Hq(a, b);
            }
        } catch (c) {}
    }
    function Lq(a, b, c, d) {
        nq();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        rq(a, b, e, d, !1);
        e === 2 && Va("TAGGING", 23);
        d && Va("TAGGING", 24);
    }
    function Mq(a, b) {
        nq();
        rq(a, [Tj(z.location, "host", !0)], b, !0, !0);
    }
    function Nq() {
        var a = A.location.hostname,
            b = uq.exec(A.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-");
        }
        var k = a.replace(vq, ""),
            m = e.replace(vq, "");
        return k === m || ub(k, "." + m);
    }
    function Oq(a, b) {
        return a === !1 ? !1 : a || b || Nq();
    }
    var Pq = ["1"],
        Qq = {},
        Rq = {};
    function Sq(a, b) {
        b = b === void 0 ? !0 : b;
        var c = Tq(a.prefix);
        if (!Qq[c])
            if (Uq(c, a.path, a.domain)) {
                var d = Rq[Tq(a.prefix)];
                b && Vq(a, d ? d.id : void 0, d ? d.gi : void 0);
            } else {
                var e = Yj("auiddc");
                if (e) Va("TAGGING", 17), (Qq[c] = e);
                else if (b) {
                    var f = Tq(a.prefix),
                        g = iq();
                    Wq(f, g, a);
                    Uq(c, a.path, a.domain);
                }
            }
    }
    function Vq(a, b, c) {
        var d = Tq(a.prefix),
            e = Qq[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(ob() / 1e3)));
                    Wq(d, k, a, g * 1e3);
                }
            }
        }
    }
    function Wq(a, b, c, d) {
        var e = kq(b, "1", c.domain, c.path),
            f = lq(c, d);
        f.Mb = Xq();
        bq(a, e, f);
    }
    function Uq(a, b, c) {
        var d = jq(a, b, c, Pq, Xq());
        if (!d) return !1;
        Yq(a, d);
        return !0;
    }
    function Yq(a, b) {
        var c = b.split(".");
        c.length === 5 ? ((Qq[a] = c.slice(0, 2).join(".")), (Rq[a] = { id: c.slice(2, 4).join("."), gi: Number(c[4]) || 0 })) : c.length === 3 ? (Rq[a] = { id: c.slice(0, 2).join("."), gi: Number(c[2]) || 0 }) : (Qq[a] = b);
    }
    function Tq(a) {
        return (a || "_gcl") + "_au";
    }
    function Zq(a) {
        function b() {
            tl(c) && a();
        }
        var c = Xq();
        Al(function () {
            b();
            tl(c) || Bl(b, c);
        }, c);
    }
    function $q(a) {
        var b = Eq(!0),
            c = Tq(a.prefix);
        Zq(function () {
            var d = b[c];
            if (d) {
                Yq(c, d);
                var e = Number(Qq[c].split(".")[1]) * 1e3;
                if (e) {
                    Va("TAGGING", 16);
                    var f = lq(a, e);
                    f.Mb = Xq();
                    var g = kq(d, "1", a.domain, a.path);
                    bq(c, g, f);
                }
            }
        });
    }
    function ar(a, b, c, d, e) {
        e = e || {};
        var f = function () {
            var g = {},
                k = jq(a, e.path, e.domain, Pq, Xq());
            k && (g[a] = k);
            return g;
        };
        Zq(function () {
            Lq(f, b, c, d);
        });
    }
    function Xq() {
        return ["ad_storage", "ad_user_data"];
    }
    var br = {},
        cr = ((br.k = { aa: /^[\w-]+$/ }), (br.b = { aa: /^[\w-]+$/, vi: !0 }), (br.i = { aa: /^[1-9]\d*$/ }), (br.u = { aa: /^[1-9]\d*$/ }), br);
    var dr = {},
        gr = ((dr[5] = { al: { 2: er }, Lh: ["k", "i", "b", "u"] }), (dr[4] = { al: { 2: er, GCL: fr }, Lh: ["k", "i", "b"] }), dr);
    function hr(a) {
        var b = gr[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.al[c];
                if (d) return d(a, 5);
            }
        }
    }
    function er(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {},
                e = gr[b];
            if (e) {
                for (var f = e.Lh, g = l(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                    var m = k.value,
                        n = m[0];
                    if (f.indexOf(n) !== -1)
                        try {
                            var p = decodeURIComponent(m.substring(1)),
                                q = cr[n];
                            q && (q.vi ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
                        } catch (r) {}
                }
                return d;
            }
        }
    }
    function ir(a, b) {
        var c = gr[5];
        if (c) {
            for (var d = [], e = l(c.Lh), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = cr[g];
                if (k) {
                    var m = a[g];
                    if (m !== void 0)
                        if (k.vi && Array.isArray(m)) for (var n = l(m), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
                        else d.push(encodeURIComponent("" + g + m));
                }
            }
            return ["2", b || "1", d.join("$")].join(".");
        }
    }
    function fr(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return (e.k = d), (e.i = c), (e.b = b), e;
    }
    var jr = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]],
    ]);
    function kr(a) {
        if (gr[5]) {
            for (var b = [], c = Rp(a, void 0, void 0, jr.get(5)), d = l(c), e = d.next(); !e.done; e = d.next()) {
                var f = hr(e.value);
                f && (lr(f), b.push(f));
            }
            return b;
        }
    }
    function mr(a, b, c, d) {
        c = c || {};
        var e = gq(c.domain, c.path),
            f = ir(b, e);
        if (f) {
            var g = lq(c, d, void 0, jr.get(5));
            bq(a, f, g);
        }
    }
    function nr(a, b) {
        var c = b.aa;
        return typeof c === "function" ? c(a) : c.test(a);
    }
    function lr(a) {
        for (var b = l(Object.keys(a)), c = b.next(), d = {}; !c.done; d = { Ve: void 0 }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.Ve = cr[e];
            d.Ve
                ? d.Ve.vi
                    ? (a[e] = Array.isArray(f)
                          ? f.filter(
                                (function (g) {
                                    return function (k) {
                                        return nr(k, g.Ve);
                                    };
                                })(d)
                            )
                          : void 0)
                    : (typeof f === "string" && nr(f, d.Ve)) || (a[e] = void 0)
                : (a[e] = void 0);
        }
    }
    function or(a) {
        for (var b = [], c = A.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({ Ci: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 });
        }
        b.sort(function (g, k) {
            return k.timestamp - g.timestamp;
        });
        return b;
    }
    function pr(a, b) {
        var c = or(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) && Number(f[1])) {
                d[c[e].Ci] || (d[c[e].Ci] = []);
                var g = { version: f[0], timestamp: Number(f[1]) * 1e3, U: f[2] };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].Ci].push(g);
            }
        }
        return d;
    }
    function qr() {
        var a = String,
            b = z.location.hostname,
            c = z.location.pathname,
            d = (b = Db(b));
        d.split(".").length > 2 && (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
        b = d;
        c = Db(c);
        var e = c.split(";")[0];
        e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
        return a(Pp(("" + b + e).toLowerCase()));
    }
    var rr = ["ad_storage", "ad_user_data"];
    function sr() {
        var a = tr();
        if (a.error !== 0) return a;
        if (!a.value) return { error: 2 };
        if (!("gclid" in a.value)) return { value: void 0, error: 15 };
        var b = a.value.gclid;
        return b === null || b === void 0 || b === "" ? { value: void 0, error: 11 } : { value: b, error: 0 };
    }
    function tr(a) {
        a = a === void 0 ? !0 : a;
        if (!tl(rr)) return { error: 3 };
        try {
            if (!z.localStorage) return { error: 1 };
        } catch (f) {
            return { error: 14 };
        }
        var b = { schema: "gcl", version: 1 },
            c = void 0;
        try {
            c = z.localStorage.getItem("_gcl_ls");
        } catch (f) {
            return { error: 13 };
        }
        try {
            if (c) {
                var d = JSON.parse(c);
                if (d && typeof d === "object") b = d;
                else return { error: 12 };
            }
        } catch (f) {
            return { error: 8 };
        }
        if (b.schema !== "gcl") return { error: 4 };
        if (b.version !== 1) return { error: 5 };
        try {
            var e = ur(b);
            a && e && vr({ value: b, error: 0 });
        } catch (f) {
            return { error: 8 };
        }
        return { value: b, error: 0 };
    }
    function ur(a) {
        if (!a || typeof a !== "object") return !1;
        if ("expires" in a && "value" in a) {
            var b;
            typeof a.expires === "number" ? (b = a.expires) : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
            if (isNaN(b) || !(Date.now() <= b)) return (a.value = null), (a.error = 9), !0;
        } else {
            for (var c = !1, d = l(Object.keys(a)), e = d.next(); !e.done; e = d.next()) c = ur(a[e.value]) || c;
            return c;
        }
        return !1;
    }
    function vr(a) {
        if (!a.error && a.value) {
            var b = a.value,
                c;
            try {
                c = JSON.stringify(b);
            } catch (d) {
                return;
            }
            try {
                z.localStorage.setItem("_gcl_ls", c);
            } catch (d) {}
        }
    }
    var wr = /^\w+$/,
        xr = /^[\w-]+$/,
        yr = {},
        zr = ((yr.aw = "_aw"), (yr.dc = "_dc"), (yr.gf = "_gf"), (yr.gp = "_gp"), (yr.gs = "_gs"), (yr.ha = "_ha"), (yr.ag = "_ag"), (yr.gb = "_gb"), yr);
    function Ar() {
        return ["ad_storage", "ad_user_data"];
    }
    function Br(a) {
        return !li(8) || tl(a);
    }
    function Cr(a, b) {
        function c() {
            var d = Br(b);
            d && a();
            return d;
        }
        Al(function () {
            c() || Bl(c, b);
        }, b);
    }
    function Dr(a) {
        return Er(a).map(function (b) {
            return b.U;
        });
    }
    function Fr(a) {
        return Gr(a)
            .filter(function (b) {
                return b.U;
            })
            .map(function (b) {
                return b.U;
            });
    }
    function Gr(a) {
        var b = Hr(a.prefix),
            c = Ir("gb", b),
            d = Ir("ag", b);
        if (!d || !c) return [];
        var e = function (k) {
                return function (m) {
                    m.type = k;
                    return m;
                };
            },
            f = Er(c).map(e("gb")),
            g = Jr(d).map(e("ag"));
        return f.concat(g).sort(function (k, m) {
            return m.timestamp - k.timestamp;
        });
    }
    function Kr(a, b, c, d, e, f) {
        var g = db(a, function (k) {
            return k.U === c;
        });
        g ? (g.timestamp < d && ((g.timestamp = d), (g.Td = f)), (g.labels = Lr(g.labels || [], e || []))) : a.push({ version: b, U: c, timestamp: d, labels: e, Td: f });
    }
    function Jr(a) {
        for (var b = kr(a) || [], c = [], d = l(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                k = g.k,
                m = g.b,
                n = Mr(f);
            if (n) {
                var p = void 0;
                li(9) && (p = f.u);
                Kr(c, "2", k, n, m || [], p);
            }
        }
        return c.sort(function (q, r) {
            return r.timestamp - q.timestamp;
        });
    }
    function Er(a) {
        for (var b = [], c = Rp(a, A.cookie, void 0, Ar()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Nr(e.value);
            if (f != null) {
                var g = f;
                Kr(b, g.version, g.U, g.timestamp, g.labels);
            }
        }
        b.sort(function (k, m) {
            return m.timestamp - k.timestamp;
        });
        return Or(b);
    }
    function Pr(a, b) {
        for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            c.includes(f) || c.push(f);
        }
        for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
            var m = k.value;
            c.includes(m) || c.push(m);
        }
        return c;
    }
    function Qr(a, b) {
        var c = db(a, function (d) {
            return d.U === b.U;
        });
        c
            ? (c.timestamp < b.timestamp && ((c.timestamp = b.timestamp), (c.Td = b.Td)),
              (c.Oa = c.Oa ? (b.Oa ? (c.timestamp < b.timestamp ? b.Oa : c.Oa) : c.Oa || 0) : b.Oa || 0),
              (c.labels = Pr(c.labels || [], b.labels || [])),
              (c.Yc = Pr(c.Yc || [], b.Yc || [])))
            : a.push(b);
    }
    function Rr() {
        var a = sr();
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return null;
            var c = b.value,
                d = c.value;
            return d && d.match(xr) ? { version: "", U: d, timestamp: Number(c.creationTimeMs) || 0, labels: [], Oa: c.linkDecorationSource || 0, Yc: [2] } : null;
        } catch (e) {
            return null;
        }
    }
    function Sr(a) {
        for (var b = [], c = Rp(a, A.cookie, void 0, Ar()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Nr(e.value);
            f != null && ((f.Td = void 0), (f.Oa = 0), (f.Yc = [1]), Qr(b, f));
        }
        var g = Rr();
        g && ((g.Td = void 0), (g.Oa = g.Oa || 0), (g.Yc = g.Yc || [2]), Qr(b, g));
        b.sort(function (k, m) {
            return m.timestamp - k.timestamp;
        });
        return Or(b);
    }
    function Lr(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function (d) {
            return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
        });
    }
    function Hr(a) {
        return a && typeof a === "string" && a.match(wr) ? a : "_gcl";
    }
    function Tr(a, b, c) {
        var d = Xj(a),
            e = Rj(d, "query", !1, void 0, "gclsrc"),
            f = { value: Rj(d, "query", !1, void 0, "gclid"), Oa: c ? 4 : 2 };
        if (b && (!f.value || !e)) {
            var g = d.hash.replace("#", "");
            f.value || ((f.value = Qj(g, "gclid", !1)), (f.Oa = 3));
            e || (e = Qj(g, "gclsrc", !1));
        }
        return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
    }
    function Ur(a, b) {
        var c = Xj(a),
            d = Rj(c, "query", !1, void 0, "gclid"),
            e = Rj(c, "query", !1, void 0, "gclsrc"),
            f = Rj(c, "query", !1, void 0, "wbraid");
        f = Ab(f);
        var g = Rj(c, "query", !1, void 0, "gbraid"),
            k = Rj(c, "query", !1, void 0, "gad_source"),
            m = Rj(c, "query", !1, void 0, "dclid");
        if (b && !(d && e && f && g)) {
            var n = c.hash.replace("#", "");
            d = d || Qj(n, "gclid", !1);
            e = e || Qj(n, "gclsrc", !1);
            f = f || Qj(n, "wbraid", !1);
            g = g || Qj(n, "gbraid", !1);
            k = k || Qj(n, "gad_source", !1);
        }
        return Vr(d, e, m, f, g, k);
    }
    function Wr() {
        return Ur(z.location.href, !0);
    }
    function Vr(a, b, c, d, e, f) {
        var g = {},
            k = function (m, n) {
                g[n] || (g[n] = []);
                g[n].push(m);
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(xr))
            switch (b) {
                case void 0:
                    k(a, "aw");
                    break;
                case "aw.ds":
                    k(a, "aw");
                    k(a, "dc");
                    break;
                case "ds":
                    k(a, "dc");
                    break;
                case "3p.ds":
                    k(a, "dc");
                    break;
                case "gf":
                    k(a, "gf");
                    break;
                case "ha":
                    k(a, "ha");
            }
        c && k(c, "dc");
        d !== void 0 && xr.test(d) && ((g.wbraid = d), k(d, "gb"));
        e !== void 0 && xr.test(e) && ((g.gbraid = e), k(e, "ag"));
        f !== void 0 && xr.test(f) && ((g.gad_source = f), k(f, "gs"));
        return g;
    }
    function Xr(a) {
        for (var b = Wr(), c = !0, d = l(Object.keys(b)), e = d.next(); !e.done; e = d.next())
            if (b[e.value] !== void 0) {
                c = !1;
                break;
            }
        c && ((b = Ur(z.document.referrer, !1)), (b.gad_source = void 0));
        Yr(b, !1, a);
    }
    function Zr(a) {
        Xr(a);
        var b = Tr(z.location.href, !0, !1);
        b.length || (b = Tr(z.document.referrer, !1, !0));
        if (b.length) {
            var c = b[0];
            a = a || {};
            var d = ob(),
                e = lq(a, d, !0),
                f = Ar(),
                g = function () {
                    if (Br(f) && e.expires !== void 0) {
                        var k = { value: { value: c.value, creationTimeMs: d, linkDecorationSource: c.Oa }, expires: Number(e.expires) };
                        if (k !== null && k !== void 0 && k !== "") {
                            var m = tr(!1);
                            m.error === 0 && m.value && ((m.value.gclid = k), vr(m));
                        }
                    }
                };
            Al(function () {
                g();
                Br(f) || Bl(g, f);
            }, f);
        }
    }
    function Yr(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = Hr(c.prefix),
            g = d || ob(),
            k = Math.round(g / 1e3),
            m = Ar(),
            n = !1,
            p = !1,
            q = function () {
                if (Br(m)) {
                    var r = lq(c, g, !0);
                    r.Mb = m;
                    for (
                        var u = function (H, N) {
                                var J = Ir(H, f);
                                J && (bq(J, N, r), H !== "gb" && (n = !0));
                            },
                            v = function (H) {
                                var N = ["GCL", k, H];
                                e.length > 0 && N.push(e.join("."));
                                return N.join(".");
                            },
                            t = l(["aw", "dc", "gf", "ha", "gp"]),
                            w = t.next();
                        !w.done;
                        w = t.next()
                    ) {
                        var x = w.value;
                        a[x] && u(x, v(a[x][0]));
                    }
                    if (!n && a.gb) {
                        var y = a.gb[0],
                            B = Ir("gb", f);
                        (!b &&
                            Er(B).some(function (H) {
                                return H.U === y && H.labels && H.labels.length > 0;
                            })) ||
                            u("gb", v(y));
                    }
                }
                if (!p && a.gbraid && Br("ad_storage") && ((p = !0), !n)) {
                    var C = a.gbraid,
                        D = Ir("ag", f);
                    if (
                        b ||
                        !Jr(D).some(function (H) {
                            return H.U === C && H.labels && H.labels.length > 0;
                        })
                    ) {
                        var E = {},
                            K = ((E.k = C), (E.i = "" + k), (E.b = e), E);
                        mr(D, K, c, g);
                    }
                }
                $r(a, f, g, c);
            };
        Al(function () {
            q();
            Br(m) || Bl(q, m);
        }, m);
    }
    function $r(a, b, c, d) {
        if (a.gad_source !== void 0 && Br("ad_storage")) {
            if (li(4)) {
                var e = Fc();
                if (e === "r" || e === "h") return;
            }
            var f = a.gad_source,
                g = Ir("gs", b);
            if (g) {
                var k = Math.floor((ob() - (Ec() || 0)) / 1e3),
                    m;
                if (li(9)) {
                    var n = qr(),
                        p = {};
                    m = ((p.k = f), (p.i = "" + k), (p.u = n), p);
                } else {
                    var q = {};
                    m = ((q.k = f), (q.i = "" + k), q);
                }
                mr(g, m, d, c);
            }
        }
    }
    function as(a, b) {
        var c = Eq(!0);
        Cr(function () {
            for (var d = Hr(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (zr[f] !== void 0) {
                    var g = Ir(f, d),
                        k = c[g];
                    if (k) {
                        var m = Math.min(bs(k), ob()),
                            n;
                        b: {
                            for (var p = m, q = Rp(g, A.cookie, void 0, Ar()), r = 0; r < q.length; ++r)
                                if (bs(q[r]) > p) {
                                    n = !0;
                                    break b;
                                }
                            n = !1;
                        }
                        if (!n) {
                            var u = lq(b, m, !0);
                            u.Mb = Ar();
                            bq(g, k, u);
                        }
                    }
                }
            }
            Yr(Vr(c.gclid, c.gclsrc), !1, b);
        }, Ar());
    }
    function cs(a) {
        var b = ["ag"],
            c = Eq(!0),
            d = Hr(a.prefix);
        Cr(
            function () {
                for (var e = 0; e < b.length; ++e) {
                    var f = Ir(b[e], d);
                    if (f) {
                        var g = c[f];
                        if (g) {
                            var k = hr(g);
                            if (k) {
                                var m = Mr(k);
                                m || (m = ob());
                                var n;
                                a: {
                                    for (var p = m, q = kr(f), r = 0; r < q.length; ++r)
                                        if (Mr(q[r]) > p) {
                                            n = !0;
                                            break a;
                                        }
                                    n = !1;
                                }
                                if (n) break;
                                k.i = "" + Math.round(m / 1e3);
                                mr(f, k, a, m);
                            }
                        }
                    }
                }
            },
            ["ad_storage"]
        );
    }
    function Ir(a, b) {
        var c = zr[a];
        if (c !== void 0) return b + c;
    }
    function bs(a) {
        return ds(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1e3 : 0;
    }
    function Mr(a) {
        return a ? (Number(a.i) || 0) * 1e3 : 0;
    }
    function Nr(a) {
        var b = ds(a.split("."));
        return b.length === 0 ? null : { version: b[0], U: b[2], timestamp: (Number(b[1]) || 0) * 1e3, labels: b.slice(3) };
    }
    function ds(a) {
        return a.length < 3 || (a[0] !== "GCL" && a[0] !== "1") || !/^\d+$/.test(a[1]) || !xr.test(a[2]) ? [] : a;
    }
    function es(a, b, c, d, e) {
        if (Array.isArray(b) && Qp(z)) {
            var f = Hr(e),
                g = function () {
                    for (var k = {}, m = 0; m < a.length; ++m) {
                        var n = Ir(a[m], f);
                        if (n) {
                            var p = Rp(n, A.cookie, void 0, Ar());
                            p.length && (k[n] = p.sort()[p.length - 1]);
                        }
                    }
                    return k;
                };
            Cr(function () {
                Lq(g, b, c, d);
            }, Ar());
        }
    }
    function fs(a, b, c, d) {
        if (Array.isArray(a) && Qp(z)) {
            var e = ["ag"],
                f = Hr(d),
                g = function () {
                    for (var k = {}, m = 0; m < e.length; ++m) {
                        var n = Ir(e[m], f);
                        if (!n) return {};
                        var p = kr(n);
                        if (p.length) {
                            var q = p.sort(function (r, u) {
                                return Mr(u) - Mr(r);
                            })[0];
                            k[n] = ir(q);
                        }
                    }
                    return k;
                };
            Cr(
                function () {
                    Lq(g, a, b, c);
                },
                ["ad_storage"]
            );
        }
    }
    function Or(a) {
        return a.filter(function (b) {
            return xr.test(b.U);
        });
    }
    function gs(a, b) {
        if (Qp(z)) {
            for (var c = Hr(b.prefix), d = {}, e = 0; e < a.length; e++) zr[a[e]] && (d[a[e]] = zr[a[e]]);
            Cr(function () {
                hb(d, function (f, g) {
                    var k = Rp(c + g, A.cookie, void 0, Ar());
                    k.sort(function (u, v) {
                        return bs(v) - bs(u);
                    });
                    if (k.length) {
                        var m = k[0],
                            n = bs(m),
                            p = ds(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = ds(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        Yr(q, !0, b, n, p);
                    }
                });
            }, Ar());
        }
    }
    function hs(a) {
        var b = ["ag"],
            c = ["gbraid"];
        Cr(
            function () {
                for (var d = Hr(a.prefix), e = 0; e < b.length; ++e) {
                    var f = Ir(b[e], d);
                    if (!f) break;
                    var g = kr(f);
                    if (g.length) {
                        var k = g.sort(function (q, r) {
                                return Mr(r) - Mr(q);
                            })[0],
                            m = Mr(k),
                            n = k.b,
                            p = {};
                        p[c[e]] = k.k;
                        Yr(p, !0, a, m, n);
                    }
                }
            },
            ["ad_storage"]
        );
    }
    function is(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1;
    }
    function js(a) {
        function b(k, m, n) {
            n && (k[m] = n);
        }
        if (xl()) {
            var c = Wr(),
                d;
            a.includes("gad_source") && (d = c.gad_source !== void 0 ? c.gad_source : Eq(!1)._gs);
            if (is(c, a) || d) {
                var e = {};
                b(e, "gclid", c.gclid);
                b(e, "dclid", c.dclid);
                b(e, "gclsrc", c.gclsrc);
                b(e, "wbraid", c.wbraid);
                b(e, "gbraid", c.gbraid);
                Mq(function () {
                    return e;
                }, 3);
                var f = {},
                    g = ((f._up = "1"), f);
                b(g, "_gs", d);
                Mq(function () {
                    return g;
                }, 1);
            }
        }
    }
    function ks(a) {
        if (!li(1)) return null;
        var b = Eq(!0).gad_source;
        if (b != null) return (z.location.hash = ""), b;
        if (li(2)) {
            var c = Xj(z.location.href);
            b = Rj(c, "query", !1, void 0, "gad_source");
            if (b != null) return b;
            var d = Wr();
            if (is(d, a)) return "0";
        }
        return null;
    }
    function ls(a) {
        var b = ks(a);
        b != null &&
            Mq(function () {
                var c = {};
                return (c.gad_source = b), c;
            }, 4);
    }
    function ms(a, b, c) {
        var d = [];
        if (b.length === 0) return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                k = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[k] || d.push(g)) : a.push(1);
            e[k] = !0;
        }
        return d;
    }
    function ns(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Br(Ar())) return e;
        var f = Er(a),
            g = ms(e, f, b);
        if (g.length && !d)
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
                var n = m.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1e3), n.U].concat(n.labels || [], [b]).join("."),
                    r = lq(c, p, !0);
                r.Mb = Ar();
                bq(a, q, r);
            }
        return e;
    }
    function os(a, b) {
        var c = [];
        b = b || {};
        var d = Gr(b),
            e = ms(c, d, a);
        if (e.length)
            for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
                var k = g.value,
                    m = Hr(b.prefix),
                    n = Ir(k.type, m);
                if (!n) break;
                var p = k,
                    q = p.version,
                    r = p.U,
                    u = p.labels,
                    v = p.timestamp,
                    t = Math.round(v / 1e3);
                if (k.type === "ag") {
                    var w = {},
                        x = ((w.k = r), (w.i = "" + t), (w.b = (u || []).concat([a])), w);
                    mr(n, x, b, v);
                } else if (k.type === "gb") {
                    var y = [q, t, r].concat(u || [], [a]).join("."),
                        B = lq(b, v, !0);
                    B.Mb = Ar();
                    bq(n, y, B);
                }
            }
        return c;
    }
    function ps(a, b) {
        var c = Hr(b),
            d = Ir(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? Jr(d) : Er(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f;
    }
    function qs(a) {
        for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next()) for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b;
    }
    function rs(a) {
        var b = Math.max(ps("aw", a), qs(Br(Ar()) ? pr() : {})),
            c = Math.max(ps("gb", a), qs(Br(Ar()) ? pr("_gac_gb", !0) : {}));
        c = Math.max(c, ps("ag", a));
        return c > b;
    }
    function Hs() {
        bj.dedupe_gclid || (bj.dedupe_gclid = iq());
        return bj.dedupe_gclid;
    }
    var Is = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Js = /^www.googleadservices.com$/;
    function Ks(a) {
        a || (a = Ls());
        return a.Nn ? !1 : a.Lm || a.Mm || a.Pm || a.Nm || a.bf || a.zm || a.Om || a.Dm ? !0 : !1;
    }
    function Ls() {
        var a = {},
            b = Eq(!0);
        a.Nn = !!b._up;
        var c = Wr();
        a.Lm = c.aw !== void 0;
        a.Mm = c.dc !== void 0;
        a.Pm = c.wbraid !== void 0;
        a.Nm = c.gbraid !== void 0;
        a.Om = c.gclsrc === "aw.ds";
        a.bf = us().bf;
        var d = A.referrer ? Rj(Xj(A.referrer), "host") : "";
        a.Dm = Is.test(d);
        a.zm = Js.test(d);
        return a;
    }
    var Ms = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Ns = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Os = /^\d+\.fls\.doubleclick\.net$/,
        Ps = /;gac=([^;?]+)/,
        Qs = /;gacgb=([^;?]+)/;
    function Rs(a, b) {
        if (Os.test(A.location.host)) {
            var c = A.location.href.match(b);
            return c && c.length === 2 && c[1].match(Ms) ? decodeURIComponent(c[1]) : "";
        }
        for (var d = [], e = l(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++) k.push(m[n].U);
            d.push(g + ":" + k.join(","));
        }
        return d.length > 0 ? d.join(";") : "";
    }
    function Ss(a, b, c) {
        for (var d = Br(Ar()) ? pr("_gac_gb", !0) : {}, e = [], f = !1, g = l(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
            var m = k.value,
                n = ns("_gac_gb_" + m, a, b, c);
            f =
                f ||
                (n.length !== 0 &&
                    n.some(function (p) {
                        return p === 1;
                    }));
            e.push(m + ":" + n.join(","));
        }
        return { ym: f ? e.join(";") : "", xm: Rs(d, Qs) };
    }
    function Ts(a) {
        var b = A.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(Ns) ? b[1] : void 0;
    }
    function Us(a) {
        var b = li(9),
            c = {},
            d,
            e,
            f;
        Os.test(A.location.host) && ((d = Ts("gclgs")), (e = Ts("gclst")), b && (f = Ts("gcllp")));
        if (d && e && (!b || f)) (c.ng = d), (c.pg = e), (c.og = f);
        else {
            var g = ob(),
                k = Jr((a || "_gcl") + "_gs"),
                m = k.map(function (q) {
                    return q.U;
                }),
                n = k.map(function (q) {
                    return g - q.timestamp;
                }),
                p = [];
            b &&
                (p = k.map(function (q) {
                    return q.Td;
                }));
            m.length > 0 && n.length > 0 && (!b || p.length > 0) && ((c.ng = m.join(".")), (c.pg = n.join(".")), b && p.length > 0 && (c.og = p.join(".")));
        }
        return c;
    }
    function Vs(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (Os.test(A.location.host)) {
            var e = Ts(c);
            if (e) return [{ U: e }];
        } else {
            if (b === "gclid") {
                var f = (a || "_gcl") + "_aw";
                return d ? Sr(f) : Er(f);
            }
            if (b === "wbraid") return Er((a || "_gcl") + "_gb");
            if (b === "braids") return Gr({ prefix: a });
        }
        return [];
    }
    function Ws(a) {
        return Vs(a, "gclid", "gclaw")
            .map(function (b) {
                return b.U;
            })
            .join(".");
    }
    function Xs(a) {
        var b = Vs(a, "gclid", "gclaw", !0),
            c = b
                .map(function (f) {
                    return f.U;
                })
                .join("."),
            d = b
                .map(function (f) {
                    return f.Oa || 0;
                })
                .join("."),
            e = b
                .map(function (f) {
                    for (var g = 0, k = l(f.Yc || []), m = k.next(); !m.done; m = k.next()) {
                        var n = m.value;
                        n === 1 && (g |= 1);
                        n === 2 && (g |= 2);
                    }
                    return g.toString();
                })
                .join(".");
        return { U: c, wk: d, xk: e };
    }
    function Ys(a) {
        return Vs(a, "braids", "gclgb")
            .map(function (b) {
                return b.U;
            })
            .join(".");
    }
    function Zs(a) {
        return Os.test(A.location.host) ? !(Ts("gclaw") || Ts("gac")) : rs(a);
    }
    function $s(a, b, c) {
        var d;
        d = c ? os(a, b) : ns(((b && b.prefix) || "_gcl") + "_gb", a, b);
        return d.length === 0 ||
            d.every(function (e) {
                return e === 0;
            })
            ? ""
            : d.join(".");
    }
    function at() {
        var a = z.__uspapi;
        if (Za(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function (c, d) {
                    if (d && c) {
                        var e = c.uspString;
                        e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
                    }
                });
            } catch (c) {}
            return b;
        }
    }
    function kt(a) {
        var b = U(a.m, P.g.Sb),
            c = U(a.m, P.g.oc);
        b && !c ? (a.eventName !== P.g.da && a.eventName !== P.g.dd && T(131), (a.isAborted = !0)) : !b && c && (T(132), (a.isAborted = !0));
    }
    function lt(a) {
        var b = W(P.g.N) ? bj.pscdl : "denied";
        b != null && (a.j[P.g.If] = b);
    }
    function mt(a) {
        var b = No(!0);
        a.j[P.g.Rb] = b;
    }
    function nt(a) {
        Lp() && (a.j[P.g.Kc] = 1);
    }
    function dt() {
        var a = A.title;
        if (a === void 0 || a === "") return "";
        var b = function (d) {
            try {
                return decodeURIComponent(d), !0;
            } catch (e) {
                return !1;
            }
        };
        a = encodeURIComponent(a);
        for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
        return decodeURIComponent(a.substring(0, c));
    }
    function ot(a) {
        pt(a, "ce", U(a.m, P.g.Ra));
    }
    function pt(a, b, c) {
        a.j[P.g.Id] || (a.j[P.g.Id] = {});
        a.j[P.g.Id][b] = c;
    }
    function vt(a, b, c, d) {
        var e = oc(),
            f;
        if (e === 1)
            a: {
                var g = nj;
                g = g.toLowerCase();
                for (var k = "https://" + g, m = "http://" + g, n = 1, p = A.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                    var r = p[q].src;
                    if (r) {
                        r = r.toLowerCase();
                        if (r.indexOf(m) === 0) {
                            f = 3;
                            break a;
                        }
                        n === 1 && r.indexOf(k) === 0 && (n = 2);
                    }
                }
                f = n;
            }
        else f = e;
        return (f === 2 || d || "http:" !== z.location.protocol ? a : b) + c;
    }
    function wt(a) {
        return typeof a !== "object" || a === null ? {} : a;
    }
    function xt(a) {
        return a === void 0 || a === null ? "" : typeof a === "object" ? a.toString() : String(a);
    }
    function zt(a) {
        if (a !== void 0 && a !== null) return xt(a);
    }
    function At(a) {
        return typeof a === "number" ? a : zt(a);
    }
    var Ft = function (a, b) {
            if (a)
                if (Mp()) {
                } else if ((a = $a(a) ? Om(Lk(a)) : Om(Lk(a.id)))) {
                    var c = void 0,
                        d = !1,
                        e = U(b, P.g.Cj);
                    if (e && Array.isArray(e)) {
                        c = [];
                        for (var f = 0; f < e.length; f++) {
                            var g = Om(e[f]);
                            g && (c.push(g), (a.id === g.id || (a.id === a.destinationId && a.destinationId === g.destinationId)) && (d = !0));
                        }
                    }
                    if (!c || d) {
                        var k = U(b, P.g.mh),
                            m;
                        if (k) {
                            m = Array.isArray(k) ? k : [k];
                            var n = U(b, P.g.kh),
                                p = U(b, P.g.lh),
                                q = U(b, P.g.nh),
                                r = zt(U(b, P.g.Bj)),
                                u = n || p,
                                v = 1;
                            a.prefix !== "UA" || c || (v = 5);
                            for (var t = 0; t < m.length; t++)
                                if (t < v)
                                    if (c) Bt(c, m[t], r, b, { ac: u, options: q });
                                    else if (a.prefix === "AW" && a.ids[Rm[2]]) S(147) ? Bt([a], m[t], r || "US", b, { ac: u, options: q }) : Ct(a.ids[Rm[1]], a.ids[Rm[2]], m[t], b, { ac: u, options: q });
                                    else if (a.prefix === "UA")
                                        if (S(147)) Bt([a], m[t], r || "US", b, { ac: u });
                                        else {
                                            var w = a.destinationId,
                                                x = m[t],
                                                y = { ac: u };
                                            T(23);
                                            if (x) {
                                                y = y || {};
                                                var B = Dt(Et, y, w),
                                                    C = {};
                                                y.ac !== void 0 ? (C.receiver = y.ac) : (C.replace = x);
                                                C.ga_wpid = w;
                                                C.destination = x;
                                                B(2, nb(), C);
                                            }
                                        }
                        }
                    }
                }
        },
        Bt = function (a, b, c, d, e) {
            T(21);
            if (b && c) {
                e = e || {};
                for (var f = { countryNameCode: c, destinationNumber: b, retrievalTime: nb() }, g = 0; g < a.length; g++) {
                    var k = a[g];
                    Gt[k.id] ||
                        (k && k.prefix === "AW" && !f.adData && k.ids.length >= 2
                            ? ((f.adData = { ak: k.ids[Rm[1]], cl: k.ids[Rm[2]] }), Ht(f.adData, d), (Gt[k.id] = !0))
                            : k && k.prefix === "UA" && !f.gaData && ((f.gaData = { gaWpid: k.destinationId }), (Gt[k.id] = !0)));
                }
                (f.gaData || f.adData) && Dt(It, e)(e.ac, f, e.options);
            }
        },
        Ct = function (a, b, c, d, e) {
            T(22);
            if (c) {
                e = e || {};
                var f = Dt(Jt, e, a),
                    g = { ak: a, cl: b };
                e.ac === void 0 && (g.autoreplace = c);
                Ht(g, d);
                f(2, e.ac, g, c, 0, nb(), e.options);
            }
        },
        Ht = function (a, b) {
            S(5) && ((a.dma = Ip()), Jp() && (a.dmaCps = Hp()), Ap(b) ? (a.npa = "0") : (a.npa = "1"));
        },
        Dt = function (a, b, c) {
            if (z[a.functionName]) return b.ki && F(b.ki), z[a.functionName];
            var d = Kt();
            z[a.functionName] = d;
            if (a.additionalQueues) for (var e = 0; e < a.additionalQueues.length; e++) z[a.additionalQueues[e]] = z[a.additionalQueues[e]] || Kt();
            a.idKey && z[a.idKey] === void 0 && (z[a.idKey] = c);
            nc(vt("https://", "http://", a.scriptUrl), b.ki, b.mn);
            return d;
        },
        Kt = function () {
            function a() {
                a.q = a.q || [];
                a.q.push(arguments);
            }
            return a;
        },
        Jt = { functionName: "_googWcmImpl", idKey: "_googWcmAk", scriptUrl: "www.gstatic.com/wcm/loader.js" },
        Et = { functionName: "_gaPhoneImpl", idKey: "ga_wpid", scriptUrl: "www.gstatic.com/gaphone/loader.js" },
        Lt = { bl: "9", Rl: "5" },
        It = { functionName: "_googCallTrackingImpl", additionalQueues: [Et.functionName, Jt.functionName], scriptUrl: "www.gstatic.com/call-tracking/call-tracking_" + (Lt.bl || Lt.Rl) + ".js" },
        Gt = {};
    function Mt(a) {
        return {
            getDestinationId: function () {
                return a.target.destinationId;
            },
            getEventName: function () {
                return a.eventName;
            },
            setEventName: function (b) {
                a.eventName = b;
            },
            getHitData: function (b) {
                return a.j[b];
            },
            setHitData: function (b, c) {
                a.j[b] = c;
            },
            setHitDataIfNotDefined: function (b, c) {
                a.j[b] === void 0 && (a.j[b] = c);
            },
            copyToHitData: function (b, c) {
                a.copyToHitData(b, c);
            },
            getMetadata: function (b) {
                return a.metadata[b];
            },
            setMetadata: function (b, c) {
                a.metadata[b] = c;
            },
            isAborted: function () {
                return a.isAborted;
            },
            abort: function () {
                a.isAborted = !0;
            },
            getFromEventContext: function (b) {
                return U(a.m, b);
            },
            Xb: function () {
                return a;
            },
            getHitKeys: function () {
                return Object.keys(a.j);
            },
        };
    }
    var Ot = function (a) {
            var b = Nt[S(129) && !wk ? Lk(a.target.destinationId) : a.target.destinationId];
            if (!a.isAborted && b)
                for (var c = Mt(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c);
                    } catch (e) {
                        a.isAborted = !0;
                    }
                    if (a.isAborted) break;
                }
        },
        Pt = function (a, b) {
            var c = Nt[a];
            c || (c = Nt[a] = []);
            c.push(b);
        },
        Nt = {};
    function Tt(a) {
        var b,
            c = z,
            d = [];
        try {
            c.navigation && c.navigation.entries && (d = c.navigation.entries());
        } catch (k) {}
        b = d;
        for (var e = b.length - 1; e >= 0; e--) {
            var f = b[e],
                g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
            if (g && g.length === 2) return g[1];
        }
    }
    var Ut,
        Vt = !1;
    function Wt() {
        Vt = !0;
        Ut = Ut || {};
    }
    function Xt(a) {
        Vt || Wt();
        return Ut[a];
    }
    function Yt() {
        var a = z.screen;
        return { width: a ? a.width : 0, height: a ? a.height : 0 };
    }
    function Zt(a) {
        if (A.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !z.getComputedStyle) return !0;
        var c = z.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (var d = a, e = c; d; ) {
            if (e.display === "none") return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                k >= 0 && ((g = g.substring(k + 8, g.indexOf(")", k))), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), (f = String(Math.min(Number(g), Number(f)))));
            }
            if (f !== void 0 && Number(f) <= 0) return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d, null));
        }
        return !1;
    }
    var iu = function (a) {
            return a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + hu.test(a.X);
        },
        wu = function (a) {
            a = a || { Rd: !0, Sd: !0, xg: void 0 };
            a.Hb = a.Hb || { email: !0, phone: !1, address: !1 };
            var b = ju(a),
                c = ku[b];
            if (c && ob() - c.timestamp < 200) return c.result;
            var d = lu(),
                e = d.status,
                f = [],
                g,
                k,
                m = [];
            if (!S(32)) {
                if (a.Hb && a.Hb.email) {
                    var n = mu(d.elements);
                    f = nu(n, a && a.We);
                    g = ou(f);
                    n.length > 10 && (e = "3");
                }
                !a.xg && g && (f = [g]);
                for (var p = 0; p < f.length; p++) m.push(pu(f[p], !!a.Rd, !!a.Sd));
                m = m.slice(0, 10);
            } else if (a.Hb) {
            }
            g && (k = pu(g, !!a.Rd, !!a.Sd));
            var D = { elements: m, oi: k, status: e };
            ku[b] = { timestamp: ob(), result: D };
            return D;
        },
        xu = function (a, b) {
            if (a) {
                var c = a
                    .trim()
                    .replaceAll(/\s+/g, "")
                    .replaceAll(/(\d{2,})\./g, "$1")
                    .replaceAll(/-/g, "")
                    .replaceAll(/\((\d+)\)/g, "$1");
                if (b && c.match(/^\+?\d{3,7}$/)) return c;
                c.charAt(0) !== "+" && (c = "+" + c);
                if (c.match(/^\+\d{10,15}$/)) return c;
            }
        },
        zu = function (a) {
            var b = yu(/^(\w|[- ])+$/)(a);
            if (!b) return b;
            var c = b.replaceAll(/[- ]+/g, "");
            return c.length > 10 ? void 0 : c;
        },
        yu = function (a) {
            return function (b) {
                var c = b.match(a);
                return c ? c[0].trim().toLowerCase() : void 0;
            };
        },
        vu = function (a, b, c) {
            var d = a.element,
                e = { X: a.X, type: a.ja, tagName: d.tagName };
            b && (e.querySelector = Au(d));
            c && (e.isVisible = !Zt(d));
            return e;
        },
        pu = function (a, b, c) {
            return vu({ element: a.element, X: a.X, ja: uu.Ob }, b, c);
        },
        ju = function (a) {
            var b = !(a == null || !a.Rd) + "." + !(a == null || !a.Sd);
            a && a.We && a.We.length && (b += "." + a.We.join("."));
            a && a.Hb && (b += "." + a.Hb.email + "." + a.Hb.phone + "." + a.Hb.address);
            return b;
        },
        ou = function (a) {
            if (a.length !== 0) {
                var b;
                b = Bu(a, function (c) {
                    return !Cu.test(c.X);
                });
                b = Bu(b, function (c) {
                    return c.element.tagName.toUpperCase() === "INPUT";
                });
                b = Bu(b, function (c) {
                    return !Zt(c.element);
                });
                return b[0];
            }
        },
        nu = function (a, b) {
            if (!b || b.length === 0) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && Yh(a[d].element, g)) {
                        e = !1;
                        break;
                    }
                }
                e && c.push(a[d]);
            }
            return c;
        },
        Bu = function (a, b) {
            if (a.length <= 1) return a;
            var c = a.filter(b);
            return c.length === 0 ? a : c;
        },
        Au = function (a) {
            var b;
            if (a === A.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a;
                                    }
                                e = -1;
                            } else e = 1;
                        }
                        d = Au(a.parentElement) + ">:nth-child(" + e.toString() + ")";
                    } else d = "";
                    c = d;
                }
                b = c;
            }
            return b;
        },
        mu = function (a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
                if (e) {
                    var f = e.match(Du);
                    if (f) {
                        var g = f[0],
                            k;
                        if (z.location) {
                            var m = Tj(z.location, "host", !0);
                            k = g.toLowerCase().indexOf(m) >= 0;
                        } else k = !1;
                        k || b.push({ element: d, X: g });
                    }
                }
            }
            return b;
        },
        lu = function () {
            var a = [],
                b = A.body;
            if (!b) return { elements: a, status: "4" };
            for (var c = b.querySelectorAll("*"), d = 0; d < c.length && d < 1e4; d++) {
                var e = c[d];
                if (!(Eu.indexOf(e.tagName.toUpperCase()) >= 0) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
                        if (!(Fu.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
                            f = !0;
                            break;
                        }
                    (!f || (S(32) && Gu.indexOf(e.tagName) !== -1)) && a.push(e);
                }
            }
            return { elements: a, status: c.length > 1e4 ? "2" : "1" };
        },
        Hu = !1;
    var Du = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        hu = /@(gmail|googlemail)\./i,
        Cu = /support|noreply/i,
        Eu = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        Fu = ["BR"],
        Iu = ii("", 2),
        uu = { Ob: "1", Pc: "2", Nc: "3", Oc: "4", de: "5", Le: "6", jg: "7", Fh: "8", zg: "9", zh: "10" },
        ku = {},
        Gu = ["INPUT", "SELECT"],
        Ju = yu(/^([^\x00-\x40\x5b-\x60\x7b-\xff]|[.-]|\s)+$/);
    var Jf;
    var nv = Number("") || 5,
        ov = Number("") || 50,
        pv = eb();
    var uv = { Ul: Number("") || 500, Hl: Number("") || 5e3, Uj: Number("20") || 10, jl: Number("") || 5e3 };
    function vv(a) {
        return (a.performance && a.performance.now()) || Date.now();
    }
    var wv = function (a, b) {
        var c;
        return c;
    };
    var xv;
    function Ev() {
        var a = Mf(Jf.j, "", function () {
            return {};
        });
        try {
            return a("internal_sw_allowed"), !0;
        } catch (b) {
            return !1;
        }
    }
    function Fv(a, b, c) {
        c = c === void 0 ? !1 : c;
    }
    var Gv = function (a, b, c, d) {};
    function Hv(a, b, c, d, e) {}
    function Iv(a, b, c, d) {}
    var Jv = function (a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128
                ? (b[c++] = e)
                : (e < 2048
                      ? (b[c++] = (e >> 6) | 192)
                      : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320
                            ? ((e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)), (b[c++] = (e >> 18) | 240), (b[c++] = ((e >> 12) & 63) | 128))
                            : (b[c++] = (e >> 12) | 224),
                        (b[c++] = ((e >> 6) & 63) | 128)),
                  (b[c++] = (e & 63) | 128));
        }
        return b;
    };
    Ao();
    Jo() || xo("iPod");
    xo("iPad");
    !xo("Android") || Bo() || Ao() || zo() || xo("Silk");
    Bo();
    !xo("Safari") || Bo() || (yo() ? 0 : xo("Coast")) || zo() || (yo() ? 0 : xo("Edge")) || (yo() ? wo("Microsoft Edge") : xo("Edg/")) || (yo() ? wo("Opera") : xo("OPR")) || Ao() || xo("Silk") || xo("Android") || Ko();
    var Kv = {},
        Lv = null,
        Mv = function (a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                e > 255 && ((b[c++] = e & 255), (e >>= 8));
                b[c++] = e;
            }
            var f = 4;
            f === void 0 && (f = 0);
            if (!Lv) {
                Lv = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                    var n = g.concat(k[m].split(""));
                    Kv[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        Lv[q] === void 0 && (Lv[q] = p);
                    }
                }
            }
            for (var r = Kv[f], u = Array(Math.floor(b.length / 3)), v = r[64] || "", t = 0, w = 0; t < b.length - 2; t += 3) {
                var x = b[t],
                    y = b[t + 1],
                    B = b[t + 2],
                    C = r[x >> 2],
                    D = r[((x & 3) << 4) | (y >> 4)],
                    E = r[((y & 15) << 2) | (B >> 6)],
                    K = r[B & 63];
                u[w++] = "" + C + D + E + K;
            }
            var H = 0,
                N = v;
            switch (b.length - t) {
                case 2:
                    (H = b[t + 1]), (N = r[(H & 15) << 2] || v);
                case 1:
                    var J = b[t];
                    u[w] = "" + r[J >> 2] + r[((J & 3) << 4) | (H >> 4)] + N + v;
            }
            return u.join("");
        };
    var Nv = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Ov(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
    }
    function Pv() {
        var a = z.google_tag_data,
            b;
        if (a != null && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d;
        } else b = null;
        return b;
    }
    function Qv() {
        var a, b;
        return (b = (a = z.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null;
    }
    function Rv(a) {
        var b, c;
        return typeof ((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function";
    }
    function Sv() {
        var a = z;
        if (!Rv(a)) return null;
        var b = Ov(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Nv).then(function (d) {
            b.uach != null || (b.uach = d);
            return d;
        });
        return (b.uach_promise = c);
    }
    function Zv(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
    }
    function $v() {
        return Zv("join-ad-interest-group") && Za(ec.joinAdInterestGroup);
    }
    function aw(a, b) {
        var c = ki[3] === void 0 ? 1 : ki[3],
            d = 'iframe[data-tagging-id="' + b + '"]',
            e = [];
        try {
            if (c === 1) {
                var f = A.querySelector(d);
                f && (e = [f]);
            } else e = Array.from(A.querySelectorAll(d));
        } catch (q) {}
        var g;
        a: {
            try {
                g = A.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a;
            } catch (q) {}
            g = void 0;
        }
        var k = g,
            m = ((k == null ? void 0 : k.length) || 0) >= (ki[2] === void 0 ? 50 : ki[2]),
            n;
        if ((n = e.length >= 1)) {
            var p = Number(e[e.length - 1].dataset.loadTime);
            p !== void 0 && ob() - p < (ki[1] === void 0 ? 6e4 : ki[1]) ? (Va("TAGGING", 9), (n = !0)) : (n = !1);
        }
        if (!n) {
            if (c === 1)
                if (e.length >= 1) bw(e[0]);
                else {
                    if (m) {
                        Va("TAGGING", 10);
                        return;
                    }
                }
            else e.length >= c ? bw(e[0]) : m && bw(k[0]);
            pc(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: ob() });
        }
    }
    function bw(a) {
        try {
            a.parentNode.removeChild(a);
        } catch (b) {}
    }
    function cw() {
        return "https://td.doubleclick.net";
    }
    function dw(a) {
        var b = a.location.href;
        if (a === a.top) return { url: b, Ym: !0 };
        var c = !1,
            d = a.document;
        d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
        var e = a.location.ancestorOrigins;
        if (e) {
            var f = e[e.length - 1];
            f && b.indexOf(f) === -1 && ((c = !1), (b = f));
        }
        return { url: b, Ym: c };
    }
    var Zw = {
        J: {
            Ei: "ads_conversion_hit",
            ce: "container_execute_start",
            Hi: "container_setup_end",
            Ag: "container_setup_start",
            Fi: "container_blocking_end",
            Gi: "container_execute_end",
            Ii: "container_yield_end",
            Bg: "container_yield_start",
            Kj: "event_execute_end",
            Jj: "event_evaluation_end",
            wh: "event_evaluation_start",
            Lj: "event_setup_end",
            Ie: "event_setup_start",
            Nj: "ga4_conversion_hit",
            Ke: "page_load",
            io: "pageview",
            vc: "snippet_load",
            ik: "tag_callback_error",
            jk: "tag_callback_failure",
            kk: "tag_callback_success",
            lk: "tag_execute_end",
            Jd: "tag_execute_start",
        },
    };
    function $w() {
        function a(c, d) {
            var e = Wa(d);
            e && b.push([c, e]);
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b;
    }
    var ax = !1;
    function Kx(a, b) {}
    function Lx(a, b) {}
    function Mx(a, b) {}
    function Nx(a, b) {}
    function Ox() {
        var a = {};
        return a;
    }
    function Cx(a) {
        a = a === void 0 ? !0 : a;
        var b = {};
        return b;
    }
    function Px() {}
    function Qx(a, b) {}
    function Rx(a, b, c) {}
    function Sx() {}
    function Tx(a, b) {
        var c = z,
            d,
            e = c.GooglebQhCsO;
        e || ((e = {}), (c.GooglebQhCsO = e));
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0;
    }
    function Ux(a, b, c, d) {
        var e = Fo(a, "fmt");
        if (b) {
            var f = Fo(a, "random"),
                g = Fo(a, "label") || "";
            if (!f) return !1;
            var k = Mv(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!Tx(k, b)) return !1;
        }
        e && Number(e) !== 4 && (a = Ho(a, "rfmt", e));
        var m = Ho(a, "fmt", 4);
        nc(
            m,
            function () {
                z.google_noFurtherRedirects && b && ((z.google_noFurtherRedirects = null), b());
            },
            c,
            d,
            A.getElementsByTagName("script")[0].parentElement || void 0
        );
        return !0;
    }
    function Ay(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b];
        }
    }
    function By(a, b, c) {
        c = c === void 0 ? !1 : c;
        Cy().addRestriction(0, a, b, c);
    }
    function Dy(a, b, c) {
        c = c === void 0 ? !1 : c;
        Cy().addRestriction(1, a, b, c);
    }
    function Ey() {
        var a = Hk();
        return Cy().getRestrictions(1, a);
    }
    var Fy = function () {
            this.container = {};
            this.j = {};
        },
        Gy = function (a, b) {
            var c = a.container[b];
            c || ((c = { _entity: { internal: [], external: [] }, _event: { internal: [], external: [] } }), (a.container[b] = c));
            return c;
        };
    Fy.prototype.addRestriction = function (a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.j[b]) {
            var e = Gy(this, b);
            a === 0 ? (d ? e._entity.external.push(c) : e._entity.internal.push(c)) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c));
        }
    };
    Fy.prototype.getRestrictions = function (a, b) {
        var c = Gy(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(ta((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), ta((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []));
        }
        if (a === 1) {
            var f, g;
            return [].concat(ta((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), ta((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []));
        }
        return [];
    };
    Fy.prototype.getExternalRestrictions = function (a, b) {
        var c = Gy(this, b),
            d,
            e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || [];
    };
    Fy.prototype.removeExternalRestrictions = function (a) {
        var b = Gy(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.j[a] = !0;
    };
    function Cy() {
        var a = bj.r;
        a || ((a = new Fy()), (bj.r = a));
        return a;
    }
    var Hy = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Iy = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"],
        },
        Jy = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
        },
        Ky = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    function Ly() {
        var a = Ej("gtm.allowlist") || Ej("gtm.whitelist");
        a && T(9);
        hj && (a = ["google", "gtagfl", "lcl", "zone"]);
        Hy.test(z.location && z.location.hostname) && (hj ? T(116) : (T(117), My && ((a = []), window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && sb(lb(a), Iy),
            c = Ej("gtm.blocklist") || Ej("gtm.blacklist");
        c || ((c = Ej("tagTypeBlacklist")) && T(3));
        c ? T(8) : (c = []);
        Hy.test(z.location && z.location.hostname) && ((c = lb(c)), c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        lb(c).indexOf("google") >= 0 && T(2);
        var d = c && sb(lb(c), Jy),
            e = {};
        return function (f) {
            var g = f && f[Ie.ra];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var k = rj[g] || [],
                m = !0;
            if (a) {
                var n;
                if ((n = m))
                    a: {
                        if (b.indexOf(g) < 0)
                            if (k && k.length > 0)
                                for (var p = 0; p < k.length; p++) {
                                    if (b.indexOf(k[p]) < 0) {
                                        T(11);
                                        n = !1;
                                        break a;
                                    }
                                }
                            else {
                                n = !1;
                                break a;
                            }
                        n = !0;
                    }
                m = n;
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r) q = r;
                else {
                    var u = fb(d, k || []);
                    u && T(10);
                    q = u;
                }
            }
            var v = !m || q;
            v || !(k.indexOf("sandboxedScripts") >= 0) || (b && b.indexOf("sandboxedScripts") !== -1) || (v = fb(d, Ky));
            return (e[g] = v);
        };
    }
    var My = !1;
    My = !0;
    function Ny() {
        wk &&
            By(Hk(), function (a) {
                var b = tf(a.entityId),
                    c;
                if (wf(b)) {
                    var d = b[Ie.ra];
                    if (!d) throw Error("Error: No function name given for function call.");
                    var e = lf[d];
                    c = !!e && !!e.runInSiloedMode;
                } else c = !!Ay(b[Ie.ra], 4);
                return c;
            });
    }
    function Oy(a, b, c, d, e) {
        if (!Py()) {
            var f = d.siloed ? Ck(a) : a;
            if (!Qk(f)) {
                d.siloed && Sk({ ctid: f, isDestination: !1 });
                var g = Kk();
                sk().container[f] = { state: 1, context: d, parent: g };
                rk({ ctid: f, isDestination: !1 }, e);
                var k = Qy(a);
                if (yj()) nc(xj() + "/" + k);
                else {
                    var m = tb(a, "GTM-"),
                        n = ck(),
                        p = c ? "/gtag/js" : "/gtm.js",
                        q = bk(b, p + k);
                    if (!q) {
                        var r = aj.Df + p;
                        n && hc && m && (r = hc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                        q = vt("https://", "http://", r + k);
                    }
                    nc(q);
                }
            }
        }
    }
    function Ry(a, b, c, d) {
        if (!Py()) {
            var e = c.siloed ? Ck(a) : a;
            if (!Rk(e))
                if ((!S(132) && c.siloed) || !Tk())
                    if ((c.siloed && Sk({ ctid: e, isDestination: !0 }), (sk().destination[e] = { state: 1, context: c, parent: Kk() }), rk({ ctid: e, isDestination: !0 }, d), yj())) nc(xj() + ("/gtd" + Qy(a, !0)));
                    else {
                        var f = "/gtag/destination" + Qy(a, !0),
                            g = bk(b, f);
                        g || (g = vt("https://", "http://", aj.Df + f));
                        nc(g);
                    }
                else (sk().destination[e] = { state: 0, transportUrl: b, context: c, parent: Kk() }), rk({ ctid: e, isDestination: !0 }, d), T(91);
        }
    }
    function Qy(a, b) {
        b = b === void 0 ? !1 : b;
        var c = "?id=" + encodeURIComponent(a) + "&l=" + aj.ub;
        if (!tb(a, "GTM-") || b) c += "&cx=c";
        c += "&gtm=" + Op();
        ck() && (c += "&sign=" + aj.Bh);
        var d = vj.j;
        d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
        return c;
    }
    function Py() {
        if (Mp()) {
            return !0;
        }
        return !1;
    }
    var Sy = function () {
        this.C = 0;
        this.j = {};
    };
    Sy.prototype.addListener = function (a, b, c) {
        var d = ++this.C;
        this.j[a] = this.j[a] || {};
        this.j[a][String(d)] = { listener: b, Nb: c };
        return d;
    };
    Sy.prototype.removeListener = function (a, b) {
        var c = this.j[a],
            d = String(b);
        if (!c || !c[d]) return !1;
        delete c[d];
        return !0;
    };
    var Uy = function (a, b) {
        var c = [];
        hb(Ty.j[a], function (d, e) {
            c.indexOf(e.listener) < 0 && (e.Nb === void 0 || b.indexOf(e.Nb) >= 0) && c.push(e.listener);
        });
        return c;
    };
    function Vy(a, b, c) {
        return { entityType: a, indexInOriginContainer: b, nameInOriginContainer: c, originContainerId: Fk() };
    }
    var Xy = function (a, b) {
            this.j = !1;
            this.K = [];
            this.eventData = { tags: [] };
            this.P = !1;
            this.C = this.H = 0;
            Wy(this, a, b);
        },
        Yy = function (a, b, c, d) {
            if (dj.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            Rc(d) && (e = Sc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1;
        },
        Zy = function (a, b, c, d) {
            var e = a.eventData.tags[b];
            e && ((e.status = c), (e.executionTime = d));
        },
        $y = function (a) {
            if (!a.j) {
                for (var b = a.K, c = 0; c < b.length; c++) b[c]();
                a.j = !0;
                a.K.length = 0;
            }
        },
        Wy = function (a, b, c) {
            b !== void 0 && a.Qe(b);
            c &&
                z.setTimeout(function () {
                    $y(a);
                }, Number(c));
        };
    Xy.prototype.Qe = function (a) {
        var b = this,
            c = qb(function () {
                F(function () {
                    a(Fk(), b.eventData);
                });
            });
        this.j ? c() : this.K.push(c);
    };
    var az = function (a) {
            a.H++;
            return qb(function () {
                a.C++;
                a.P && a.C >= a.H && $y(a);
            });
        },
        bz = function (a) {
            a.P = !0;
            a.C >= a.H && $y(a);
        };
    var cz = {};
    function dz() {
        return z[ez()];
    }
    var fz = function (a) {
            if (xl()) {
                var b = dz();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0);
            }
        },
        gz = function (a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function () {
                    var d = ya.apply(0, arguments);
                    c.q = c.q || [];
                    c.q.push(d);
                };
                c.l = Number(nb());
                z[b] = c;
            }
            return z[b];
        };
    function ez() {
        return z.GoogleAnalyticsObject || "ga";
    }
    function hz() {
        var a = Fk();
    }
    function iz(a, b) {
        return function () {
            var c = dz(),
                d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function (f) {
                    var g = f.get("hitPayload"),
                        k = f.get("hitCallback"),
                        m = g.indexOf("&tid=" + b) < 0;
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f));
                });
            }
        };
    }
    var nz = ["es", "1"],
        oz = {},
        pz = {};
    function qz(a, b) {
        if (lk) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            oz[a] = [
                ["e", c],
                ["eid", a],
            ];
            Hn(a);
        }
    }
    function rz(a) {
        var b = a.eventId,
            c = a.bd;
        if (!oz[b]) return [];
        var d = [];
        pz[b] || d.push(nz);
        d.push.apply(d, ta(oz[b]));
        c && (pz[b] = !0);
        return d;
    }
    var sz = {},
        tz = {},
        uz = {};
    function vz(a, b, c, d) {
        lk && S(108) && ((d === void 0 ? 0 : d) ? ((uz[b] = uz[b] || 0), ++uz[b]) : c !== void 0 ? ((tz[a] = tz[a] || {}), (tz[a][b] = Math.round(c))) : ((sz[a] = sz[a] || {}), (sz[a][b] = (sz[a][b] || 0) + 1)));
    }
    function wz(a) {
        var b = a.eventId,
            c = a.bd,
            d = sz[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete sz[b];
        return e.length ? [["md", e.join(".")]] : [];
    }
    function xz(a) {
        var b = a.eventId,
            c = a.bd,
            d = tz[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete tz[b];
        return e.length ? [["mtd", e.join(".")]] : [];
    }
    function yz() {
        for (var a = [], b = l(Object.keys(uz)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + uz[d]);
        }
        return a.length ? [["mec", a.join(".")]] : [];
    }
    var zz = {},
        Az = {};
    function Bz(a, b, c) {
        if (lk && b) {
            var d = fk(b);
            zz[a] = zz[a] || [];
            zz[a].push(c + d);
            var e = (wf(b) ? "1" : "2") + d;
            Az[a] = Az[a] || [];
            Az[a].push(e);
            Hn(a);
        }
    }
    function Cz(a) {
        var b = a.eventId,
            c = a.bd,
            d = [],
            e = zz[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = Az[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete zz[b], delete Az[b]);
        return d;
    }
    function Dz(a, b, c, d) {
        var e = jf[a],
            f = Ez(a, b, c, d);
        if (!f) return null;
        var g = xf(e[Ie.hk], c, []);
        if (g && g.length) {
            var k = g[0];
            f = Dz(k.index, { onSuccess: f, onFailure: k.uk === 1 ? b.terminate : f, terminate: b.terminate }, c, d);
        }
        return f;
    }
    function Ez(a, b, c, d) {
        function e() {
            function w() {
                Ll(3);
                var K = ob() - E;
                Bz(c.id, f, "7");
                Zy(c.wc, C, "exception", K);
                S(92) && Rx(c, f, Zw.J.ik);
                D || ((D = !0), k());
            }
            if (f[Ie.Ml]) k();
            else {
                var x = vf(f, c, []),
                    y = x[Ie.fl];
                if (y != null)
                    for (var B = 0; B < y.length; B++)
                        if (!W(y[B])) {
                            k();
                            return;
                        }
                var C = Yy(c.wc, String(f[Ie.ra]), Number(f[Ie.Pe]), x[Ie.METADATA]),
                    D = !1;
                x.vtp_gtmOnSuccess = function () {
                    if (!D) {
                        D = !0;
                        var K = ob() - E;
                        Bz(c.id, jf[a], "5");
                        Zy(c.wc, C, "success", K);
                        S(92) && Rx(c, f, Zw.J.kk);
                        g();
                    }
                };
                x.vtp_gtmOnFailure = function () {
                    if (!D) {
                        D = !0;
                        var K = ob() - E;
                        Bz(c.id, jf[a], "6");
                        Zy(c.wc, C, "failure", K);
                        S(92) && Rx(c, f, Zw.J.jk);
                        k();
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                Bz(c.id, f, "1");
                S(92) && Qx(c, f);
                var E = ob();
                try {
                    yf(x, { event: c, index: a, type: 1 });
                } catch (K) {
                    w(K);
                }
                S(92) && Rx(c, f, Zw.J.lk);
            }
        }
        var f = jf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = xf(f[Ie.mk], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Dz(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
            if (!q) return null;
            g = q;
            k = p.uk === 2 ? m : q;
        }
        if (f[Ie.Xj] || f[Ie.Ol]) {
            var r = f[Ie.Xj] ? kf : c.Gn,
                u = g,
                v = k;
            if (!r[a]) {
                var t = Fz(a, r, qb(e));
                g = t.onSuccess;
                k = t.onFailure;
            }
            return function () {
                r[a](u, v);
            };
        }
        return e;
    }
    function Fz(a, b, c) {
        var d = [],
            e = [];
        b[a] = Gz(d, e, c);
        return {
            onSuccess: function () {
                b[a] = Hz;
                for (var f = 0; f < d.length; f++) d[f]();
            },
            onFailure: function () {
                b[a] = Iz;
                for (var f = 0; f < e.length; f++) e[f]();
            },
        };
    }
    function Gz(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c();
        };
    }
    function Hz(a) {
        a();
    }
    function Iz(a, b) {
        b();
    }
    var Lz = function (a, b) {
        for (var c = [], d = 0; d < jf.length; d++)
            if (a[d]) {
                var e = jf[d];
                var f = az(b.wc);
                try {
                    var g = Dz(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                    if (g) {
                        var k = e[Ie.ra];
                        if (!k) throw Error("Error: No function name given for function call.");
                        var m = lf[k];
                        c.push({ Sk: d, Hk: (m ? m.priorityOverride || 0 : 0) || Ay(e[Ie.ra], 1) || 0, execute: g });
                    } else Jz(d, b), f();
                } catch (p) {
                    f();
                }
            }
        c.sort(Kz);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length > 0;
    };
    function Mz(a, b) {
        if (!Ty) return !1;
        var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
            d = Uy(a.event, c ? String(c).split(",") : []);
        if (!d.length) return !1;
        for (var e = 0; e < d.length; ++e) {
            var f = az(b);
            try {
                d[e](a, f);
            } catch (g) {
                f();
            }
        }
        return !0;
    }
    function Kz(a, b) {
        var c,
            d = b.Hk,
            e = a.Hk;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.Sk,
                k = b.Sk;
            f = g > k ? 1 : g < k ? -1 : 0;
        }
        return f;
    }
    function Jz(a, b) {
        if (lk) {
            var c = function (d) {
                var e = b.isBlocked(jf[d]) ? "3" : "4",
                    f = xf(jf[d][Ie.hk], b, []);
                f && f.length && c(f[0].index);
                Bz(b.id, jf[d], e);
                var g = xf(jf[d][Ie.mk], b, []);
                g && g.length && c(g[0].index);
            };
            c(a);
        }
    }
    var Nz = !1,
        Ty;
    function gA() {
        Ty || (Ty = new Sy());
        return Ty;
    }
    function hA(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (S(92)) {
        }
        if (d === "gtm.js") {
            if (Nz) return !1;
            Nz = !0;
        }
        var e = !1,
            f = Ey(),
            g = Sc(a, null);
        if (
            !f.every(function (u) {
                return u({ originalEventData: g });
            })
        ) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0;
        }
        qz(b, d);
        var k = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: iA(g, e),
                Gn: [],
                logMacroError: function () {
                    T(6);
                    Ll(0);
                },
                cachedModelValues: jA(),
                wc: new Xy(function () {
                    if (S(92)) {
                    }
                    k && k.apply(k, Array.prototype.slice.call(arguments, 0));
                }, m),
                originalEventData: g,
            };
        S(108) && lk && (n.reportMacroDiscrepancy = vz);
        S(92) && Mx(n.id, n.name);
        var p = Ef(n);
        S(92) && Nx(n.id, n.name);
        e && (p = kA(p));
        if (S(92)) {
        }
        var q = Lz(p, n),
            r = Mz(a, n.wc);
        bz(n.wc);
        (d !== "gtm.js" && d !== "gtm.sync") || hz();
        return lA(p, q) || r;
    }
    function jA() {
        var a = {};
        a.event = Jj("event", 1);
        a.ecommerce = Jj("ecommerce", 1);
        a.gtm = Jj("gtm");
        a.eventModel = Jj("eventModel");
        return a;
    }
    function iA(a, b) {
        var c = Ly();
        return function (d) {
            if (c(d)) return !0;
            var e = d && d[Ie.ra];
            if (!e || typeof e !== "string") return !0;
            e = e.replace(/^_*/, "");
            var f,
                g = Hk();
            f = Cy().getRestrictions(0, g);
            var k = a;
            b && ((k = Sc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
            for (var m = rj[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({ entityId: e, securityGroups: m, originalEventData: k })) return !0;
                } catch (r) {
                    return !0;
                }
            }
            return !1;
        };
    }
    function kA(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(jf[c][Ie.ra]);
                if (cj[d] || jf[c][Ie.Pl] !== void 0 || Ay(d, 2)) b[c] = !0;
            }
        return b;
    }
    function lA(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++) if (a[c] && jf[c] && !dj[String(jf[c][Ie.ra])]) return !0;
        return !1;
    }
    function mA() {
        S(6) &&
            gA().addListener("gtm.init", function (a, b) {
                vj.P = !0;
                fl();
                b();
            });
    }
    var nA = !1,
        oA = 0,
        pA = [];
    function qA(a) {
        if (!nA) {
            var b = A.createEventObject,
                c = A.readyState === "complete",
                d = A.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || (!b && d)) {
                nA = !0;
                for (var e = 0; e < pA.length; e++) F(pA[e]);
            }
            pA.push = function () {
                for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) F(f[g]);
                return 0;
            };
        }
    }
    function rA() {
        if (!nA && oA < 140) {
            oA++;
            try {
                var a, b;
                (b = (a = A.documentElement).doScroll) == null || b.call(a, "left");
                qA();
            } catch (c) {
                z.setTimeout(rA, 50);
            }
        }
    }
    function sA(a) {
        nA ? a() : pA.push(a);
    }
    var tA = 0;
    function uA(a, b) {
        return arguments.length === 1 ? vA("set", a) : vA("set", a, b);
    }
    function wA(a, b) {
        return arguments.length === 1 ? vA("config", a) : vA("config", a, b);
    }
    function xA(a, b, c) {
        c = c || {};
        c[P.g.qc] = a;
        return vA("event", b, c);
    }
    function vA() {
        return arguments;
    }
    var yA = function () {
        this.messages = [];
        this.j = [];
    };
    yA.prototype.enqueue = function (a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, { eventId: b, priorityId: d, fromContainerExecution: !0 }),
            f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
        this.messages.push(f);
        for (var g = 0; g < this.j.length; g++)
            try {
                this.j[g](f);
            } catch (k) {}
    };
    yA.prototype.listen = function (a) {
        this.j.push(a);
    };
    yA.prototype.get = function () {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || ((d = []), (a[c.notBeforeEventId] = d));
            d.push(c);
        }
        return a;
    };
    yA.prototype.prune = function (a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e);
        }
        this.messages = c;
        return b;
    };
    function zA(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Nf.canonicalContainerId;
        AA().enqueue(a, b, c);
    }
    function BA() {
        var a = CA;
        AA().listen(a);
    }
    function AA() {
        var a = bj.mb;
        a || ((a = new yA()), (bj.mb = a));
        return a;
    }
    var DA = {},
        EA = {};
    function FA(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = { ni: void 0, Vh: void 0 }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (((e.ni = Om(g, b)), e.ni)) {
                    var k = Ek();
                    db(
                        k,
                        (function (r) {
                            return function (u) {
                                return r.ni.destinationId === u;
                            };
                        })(e)
                    )
                        ? c.push(g)
                        : d.push(g);
                }
            } else {
                var m = DA[g] || [];
                e.Vh = {};
                m.forEach(
                    (function (r) {
                        return function (u) {
                            r.Vh[u] = !0;
                        };
                    })(e)
                );
                for (var n = Ak(), p = 0; p < n.length; p++)
                    if (e.Vh[n[p]]) {
                        c = c.concat(Dk());
                        break;
                    }
                var q = EA[g] || [];
                q.length && (c = c.concat(q));
            }
        }
        return { fn: c, jn: d };
    }
    function GA(a) {
        hb(DA, function (b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1);
        });
    }
    function HA(a) {
        hb(EA, function (b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1);
        });
    }
    var IA = "HA GF G UA AW DC MC".split(" "),
        JA = !1,
        KA = !1;
    function LA(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: sj() });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return { eventId: b.eventId, priorityId: b.priorityId };
    }
    var MA = void 0,
        NA = void 0;
    function OA(a, b, c) {
        var d = Sc(a, null);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function (f) {
            return b[f] !== void 0;
        }) && T(136);
        var e = Sc(b, null);
        Sc(c, e);
        zA(wA(Ak()[0], e), a.eventId, d);
    }
    function PA(a) {
        for (var b = l([P.g.Dd, P.g.Vb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = (a && a[d]) || Yn.j[d];
            if (e) return e;
        }
    }
    var QA = {
            config: function (a, b) {
                var c = LA(a, b);
                if (!(a.length < 2) && $a(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if ((a[2] !== void 0 && !Rc(a[2])) || a.length > 3) return;
                        d = a[2];
                    }
                    var e = Om(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, k;
                        a: {
                            if (!vk.Je) {
                                var m = Jk(Kk());
                                if (Vk(m)) {
                                    var n = m.parent,
                                        p = n.isDestination;
                                    k = { pn: Jk(n), dn: p };
                                    break a;
                                }
                            }
                            k = void 0;
                        }
                        var q = k;
                        q && ((f = q.pn), (g = q.dn));
                        qz(c.eventId, "gtag.config");
                        var r = e.destinationId,
                            u = e.id !== r;
                        if (u ? Dk().indexOf(r) === -1 : Ak().indexOf(r) === -1) {
                            if (!b.inheritParentConfig && !d[P.g.Sb]) {
                                var v = PA(d);
                                if (u) Ry(r, v, { source: 2, fromContainerExecution: b.fromContainerExecution });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var t = d;
                                    MA ? OA(b, t, MA) : NA || (NA = Sc(t, null));
                                } else Oy(r, v, !0, { source: 2, fromContainerExecution: b.fromContainerExecution });
                            }
                        } else {
                            if (f && (T(128), g && T(130), b.inheritParentConfig)) {
                                var w;
                                var x = d;
                                NA ? (OA(b, NA, x), (w = !1)) : ((!x[P.g.sc] && fj && MA) || (MA = Sc(x, null)), (w = !0));
                                w && f.containers && f.containers.join(",");
                                return;
                            }
                            !mk || (!S(104) && wk) || (tA === 1 && ($k.mcc = !1), (tA = 2));
                            if (fj && !u && !d[P.g.sc]) {
                                var y = KA;
                                KA = !0;
                                if (y) return;
                            }
                            JA || T(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    HA(e.id);
                                    var B = e.id,
                                        C = d[P.g.Be] || "default";
                                    C = String(C).split(",");
                                    for (var D = 0; D < C.length; D++) {
                                        var E = EA[C[D]] || [];
                                        EA[C[D]] = E;
                                        E.indexOf(B) < 0 && E.push(B);
                                    }
                                } else {
                                    GA(e.id);
                                    var K = e.id,
                                        H = d[P.g.Be] || "default";
                                    H = H.toString().split(",");
                                    for (var N = 0; N < H.length; N++) {
                                        var J = DA[H[N]] || [];
                                        DA[H[N]] = J;
                                        J.indexOf(K) < 0 && J.push(K);
                                    }
                                }
                            delete d[P.g.Be];
                            var V = b.eventMetadata || {};
                            V.hasOwnProperty("is_external_event") || (V.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = V;
                            delete d[P.g.wd];
                            for (var ca = u ? [e.id] : Dk(), ba = 0; ba < ca.length; ba++) {
                                var Z = d,
                                    O = ca[ba],
                                    fa = Sc(b, null),
                                    ha = Om(O, fa.isGtmEvent);
                                ha && Yn.push("config", [Z], ha, fa);
                            }
                        }
                    }
                }
            },
            consent: function (a, b) {
                if (a.length === 3) {
                    T(39);
                    var c = LA(a, b),
                        d = a[1],
                        e;
                    if (S(127)) {
                        var f = {},
                            g = wt(a[2]),
                            k;
                        for (k in g)
                            if (g.hasOwnProperty(k)) {
                                var m = g[k];
                                f[k] = k === P.g.be ? (Array.isArray(m) ? NaN : Number(m)) : k === P.g.tb ? (Array.isArray(m) ? m : [m]).map(xt) : zt(m);
                            }
                        e = f;
                    } else e = a[2];
                    var n = e;
                    b.fromContainerExecution || (n[P.g.O] && T(139), n[P.g.wa] && T(140));
                    d === "default" ? rm(n) : d === "update" ? tm(n, c) : d === "declare" && b.fromContainerExecution && qm(n);
                }
            },
            event: function (a, b) {
                var c = a[1];
                if (!(a.length < 2) && $a(c)) {
                    var d = void 0;
                    if (a.length > 2) {
                        if ((!Rc(a[2]) && a[2] !== void 0) || a.length > 3) return;
                        d = a[2];
                    }
                    var e = d,
                        f = {},
                        g = ((f.event = c), f);
                    e && ((g.eventModel = Sc(e, null)), e[P.g.wd] && (g.eventCallback = e[P.g.wd]), e[P.g.ye] && (g.eventTimeout = e[P.g.ye]));
                    var k = LA(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if (c === "optimize.callback") return (g.eventModel = g.eventModel || {}), g;
                    var p;
                    var q = d,
                        r = q && q[P.g.qc];
                    r === void 0 && ((r = Ej(P.g.qc, 2)), r === void 0 && (r = "default"));
                    if ($a(r) || Array.isArray(r)) {
                        var u;
                        u = b.isGtmEvent ? ($a(r) ? [r] : r) : r.toString().replace(/\s+/g, "").split(",");
                        var v = FA(u, b.isGtmEvent),
                            t = v.fn,
                            w = v.jn;
                        if (w.length)
                            for (var x = PA(q), y = 0; y < w.length; y++) {
                                var B = Om(w[y], b.isGtmEvent);
                                if (B) {
                                    var C = B.destinationId,
                                        D;
                                    if ((D = S(130))) {
                                        var E;
                                        if (!(E = tb(C, "siloed_"))) {
                                            var K = B.destinationId,
                                                H = sk().destination[K];
                                            E = !!H && H.state === 0;
                                        }
                                        D = E;
                                    }
                                    D || Ry(C, x, { source: 3, fromContainerExecution: b.fromContainerExecution });
                                }
                            }
                        p = Pm(t, b.isGtmEvent);
                    } else p = void 0;
                    var N = p;
                    if (N) {
                        qz(m, c);
                        for (var J = [], V = 0; V < N.length; V++) {
                            var ca = N[V],
                                ba = Sc(b, null);
                            if (IA.indexOf(Lk(ca.prefix)) !== -1) {
                                var Z = Sc(d, null),
                                    O = ba.eventMetadata || {};
                                O.hasOwnProperty("is_external_event") || (O.is_external_event = !ba.fromContainerExecution);
                                ba.eventMetadata = O;
                                delete Z[P.g.wd];
                                Zn(c, Z, ca.id, ba);
                                mk && (S(104) ? O.source_canonical_id === void 0 : !wk) && tA === 0 && (bl("mcc", "1"), (tA = 1));
                            }
                            J.push(ca.id);
                        }
                        g.eventModel = g.eventModel || {};
                        N.length > 0 ? (g.eventModel[P.g.qc] = J.join()) : delete g.eventModel[P.g.qc];
                        JA || T(43);
                        b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[P.g.oc] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g;
                    }
                }
            },
            get: function (a, b) {
                T(53);
                if (a.length === 4 && $a(a[1]) && $a(a[2]) && Za(a[3])) {
                    var c = Om(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        JA || T(43);
                        var f = PA();
                        if (
                            !db(Dk(), function (k) {
                                return c.destinationId === k;
                            })
                        )
                            Ry(c.destinationId, f, { source: 4, fromContainerExecution: b.fromContainerExecution });
                        else if (IA.indexOf(Lk(c.prefix)) !== -1) {
                            LA(a, b);
                            var g = {};
                            Sc(((g[P.g.Bb] = d), (g[P.g.Qb] = e), g), null);
                            $n(
                                d,
                                function (k) {
                                    F(function () {
                                        e(k);
                                    });
                                },
                                c.id,
                                b
                            );
                        }
                    }
                }
            },
            js: function (a, b) {
                if (a.length === 2 && a[1].getTime) {
                    JA = !0;
                    var c = LA(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return (f.event = "gtm.js"), (f["gtm.start"] = a[1].getTime()), (f["gtm.uniqueEventId"] = d), (f["gtm.priorityId"] = e), f;
                }
            },
            policy: function (a) {
                if (a.length === 3 && $a(a[1]) && Za(a[2])) {
                    if ((Kf(a[1], a[2]), T(74), a[1] === "all")) {
                        T(75);
                        var b = !1;
                        try {
                            b = a[2](Fk(), "unknown", {});
                        } catch (c) {}
                        b || T(76);
                    }
                } else T(73);
            },
            set: function (a, b) {
                var c = void 0;
                a.length === 2 && Rc(a[1]) ? (c = Sc(a[1], null)) : a.length === 3 && $a(a[1]) && ((c = {}), Rc(a[2]) || Array.isArray(a[2]) ? (c[a[1]] = Sc(a[2], null)) : (c[a[1]] = a[2]));
                if (c) {
                    var d = LA(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    Sc(c, null);
                    var g = Sc(c, null);
                    Yn.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c;
                }
            },
        },
        RA = { policy: !0 };
    var TA = function (a) {
        if (SA(a)) return a;
        this.value = a;
    };
    TA.prototype.getUntrustedMessageValue = function () {
        return this.value;
    };
    var SA = function (a) {
        return !a || Pc(a) !== "object" || Rc(a) ? !1 : "getUntrustedMessageValue" in a;
    };
    TA.prototype.getUntrustedMessageValue = TA.prototype.getUntrustedMessageValue;
    var UA = !1,
        VA = [];
    function WA() {
        if (!UA) {
            UA = !0;
            for (var a = 0; a < VA.length; a++) F(VA[a]);
        }
    }
    function XA(a) {
        UA ? F(a) : VA.push(a);
    }
    var YA = 0,
        ZA = {},
        $A = [],
        aB = [],
        bB = !1,
        cB = !1;
    function dB(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
    }
    function eB(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return fB(a);
    }
    function gB(a, b) {
        if (!ab(b) || b < 0) b = 0;
        var c = bj[aj.ub],
            d = 0,
            e = !1,
            f = void 0;
        f = z.setTimeout(function () {
            e || ((e = !0), a());
            f = void 0;
        }, b);
        return function () {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (z.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
        };
    }
    function hB(a, b) {
        var c = a._clear || b.overwriteModelFields;
        hb(a, function (e, f) {
            e !== "_clear" && (c && Hj(e), Hj(e, f));
        });
        oj || (oj = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        typeof d !== "number" && ((d = sj()), (a["gtm.uniqueEventId"] = d), Hj("gtm.uniqueEventId", d));
        return hA(a);
    }
    function iB(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (ib(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0;
        }
        return !1;
    }
    function jB() {
        var a;
        if (aB.length) a = aB.shift();
        else if ($A.length) a = $A.shift();
        else return;
        var b;
        var c = a;
        if (bB || !iB(c.message)) b = c;
        else {
            bB = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (S(97) && (sj(), sj()), (d = c.message["gtm.uniqueEventId"] = sj()));
            var e = {},
                f = { message: ((e.event = "gtm.init_consent"), (e["gtm.uniqueEventId"] = d - 2), e), messageContext: { eventId: d - 2 } },
                g = {},
                k = { message: ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g), messageContext: { eventId: d - 1 } };
            $A.unshift(k, c);
            S(6) || (mk && fl());
            b = f;
        }
        return b;
    }
    function kB() {
        for (var a = !1, b; !cB && (b = jB()); ) {
            cB = !0;
            delete Bj.eventModel;
            Dj();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) cB = !1;
            else {
                e.fromContainerExecution && Ij();
                try {
                    if (Za(d))
                        try {
                            d.call(Fj);
                        } catch (v) {}
                    else if (Array.isArray(d)) {
                        if ($a(d[0])) {
                            var f = d[0].split("."),
                                g = f.pop(),
                                k = d.slice(1),
                                m = Ej(f.join("."), 2);
                            if (m != null)
                                try {
                                    m[g].apply(m, k);
                                } catch (v) {}
                        }
                    } else {
                        var n = void 0;
                        if (ib(d))
                            a: {
                                if (d.length && $a(d[0])) {
                                    var p = QA[d[0]];
                                    if (p && (!e.fromContainerExecution || !RA[d[0]])) {
                                        n = p(d, e);
                                        break a;
                                    }
                                }
                                n = void 0;
                            }
                        else n = d;
                        n && (a = hB(n, e) || a);
                    }
                } finally {
                    e.fromContainerExecution && Dj(!0);
                    var q = d["gtm.uniqueEventId"];
                    if (typeof q === "number") {
                        for (var r = ZA[String(q)] || [], u = 0; u < r.length; u++) aB.push(lB(r[u]));
                        r.length && aB.sort(dB);
                        delete ZA[String(q)];
                        q > YA && (YA = q);
                    }
                    cB = !1;
                }
            }
        }
        return !a;
    }
    function mB() {
        if (S(92)) {
            var a = !vj.H;
        }
        var b = kB();
        if (S(92)) {
        }
        try {
            var c = Fk(),
                d = z[aj.ub].hide;
            if (d && d[c] !== void 0 && d.end) {
                d[c] = !1;
                var e = !0,
                    f;
                for (f in d)
                    if (d.hasOwnProperty(f) && d[f] === !0) {
                        e = !1;
                        break;
                    }
                e && (d.end(), (d.end = null));
            }
        } catch (g) {}
        return b;
    }
    function CA(a) {
        if (YA < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            ZA[b] = ZA[b] || [];
            ZA[b].push(a);
        } else
            aB.push(lB(a)),
                aB.sort(dB),
                F(function () {
                    cB || kB();
                });
    }
    function lB(a) {
        return { message: a.message, messageContext: a.messageContext };
    }
    function nB() {
        function a(f) {
            var g = {};
            if (SA(f)) {
                var k = f;
                f = SA(k) ? k.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0;
            }
            return { message: f, messageContext: g };
        }
        var b = ic(aj.ub, []),
            c = (bj[aj.ub] = bj[aj.ub] || {});
        c.pruned === !0 && T(83);
        ZA = AA().get();
        BA();
        sA(function () {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push(((f.event = "gtm.dom"), f));
            }
        });
        XA(function () {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push(((f.event = "gtm.load"), f));
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function () {
            var f;
            if (bj.SANDBOXED_JS_SEMAPHORE > 0) {
                f = [];
                for (var g = 0; g < arguments.length; g++) f[g] = new TA(arguments[g]);
            } else f = [].slice.call(arguments, 0);
            var k = f.map(function (q) {
                return a(q);
            });
            $A.push.apply($A, k);
            var m = d.apply(b, f),
                n = Math.max(100, Number("1000") || 300);
            if (this.length > n) for (T(4), c.pruned = !0; this.length > n; ) this.shift();
            var p = typeof m !== "boolean" || m;
            return kB() && p;
        };
        var e = b.slice(0).map(function (f) {
            return a(f);
        });
        $A.push.apply($A, e);
        if (!vj.H) {
            if (S(92)) {
            }
            F(mB);
        }
    }
    var fB = function (a) {
        return z[aj.ub].push(a);
    };
    var oB = /^(https?:)?\/\//;
    function JB() {}
    var KB = function () {};
    KB.prototype.toString = function () {
        return "undefined";
    };
    var LB = new KB();
    function SB(a, b) {
        function c(g) {
            var k = Xj(g),
                m = Rj(k, "protocol"),
                n = Rj(k, "host", !0),
                p = Rj(k, "port"),
                q = Rj(k, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || (m === "http" && p === "80") || (m === "https" && p === "443")) (m = "web"), (p = "default");
            return [m, n, p, q];
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0;
    }
    function TB(a) {
        return UB(a) ? 1 : 0;
    }
    function UB(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Sc(a, {});
                Sc({ arg1: c[d], any_of: void 0 }, e);
                if (TB(e)) return !0;
            }
            return !1;
        }
        switch (a["function"]) {
            case "_cn":
                return mg(b, c);
            case "_css":
                var f;
                a: {
                    if (b)
                        try {
                            for (var g = 0; g < ig.length; g++) {
                                var k = ig[g];
                                if (b[k] != null) {
                                    f = b[k](c);
                                    break a;
                                }
                            }
                        } catch (m) {}
                    f = !1;
                }
                return f;
            case "_ew":
                return jg(b, c);
            case "_eq":
                return ng(b, c);
            case "_ge":
                return og(b, c);
            case "_gt":
                return qg(b, c);
            case "_lc":
                return String(b).split(",").indexOf(String(c)) >= 0;
            case "_le":
                return pg(b, c);
            case "_lt":
                return rg(b, c);
            case "_re":
                return lg(b, c, a.ignore_case);
            case "_sw":
                return sg(b, c);
            case "_um":
                return SB(b, c);
        }
        return !1;
    }
    function VB() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a;
    }
    function WB() {
        var a = [
            ["cv", S(134) ? VB() : "1"],
            ["rv", aj.Ah],
            [
                "tc",
                jf.filter(function (b) {
                    return b;
                }).length,
            ],
        ];
        aj.Me && a.push(["x", aj.Me]);
        wj() && a.push(["tag_exp", wj()]);
        return a;
    }
    var XB = {},
        YB = ((XB[1] = {}), (XB[2] = {}), (XB[3] = {}), (XB[4] = {}), XB);
    function ZB(a) {
        switch (a) {
            case "script-src":
            case "script-src-elem":
                return 1;
            case "frame-src":
                return 4;
            case "connect-src":
                return 2;
            case "img-src":
                return 3;
        }
    }
    function $B() {
        S(53) &&
            mk &&
            z.addEventListener("securitypolicyviolation", function (a) {
                if (a.disposition === "enforce") {
                    var b = ZB(a.effectiveDirective);
                    if (b) {
                        var c;
                        var d;
                        b: {
                            try {
                                var e = new URL(a.blockedURI);
                                d = e.origin + e.pathname;
                                break b;
                            } catch (g) {}
                            d = void 0;
                        }
                        var f = d;
                        c = f ? YB[b][f] : void 0;
                        c && ((gl[String(c.endpoint)] = !0), bl("csp", Object.keys(gl).join("~")));
                    }
                }
            });
    }
    var aC = {},
        bC = {};
    function cC(a, b) {
        var c = dC(void 0);
        if (lk) {
            var d = String(c) + b;
            aC[a] = aC[a] || [];
            aC[a].push(d);
            bC[a] = bC[a] || [];
            bC[a].push("p" + b);
        }
    }
    function eC(a) {
        var b = a.eventId,
            c = a.bd,
            d = [],
            e = aC[b] || [];
        e.length && d.push(["hf", e.join(".")]);
        var f = bC[b] || [];
        f.length && d.push(["ht", f.join(".")]);
        c && (delete aC[b], delete bC[b]);
        return d;
    }
    function fC() {
        return !1;
    }
    function gC() {
        var a = {};
        return function (b, c, d) {};
    }
    function hC() {
        var a = iC;
        return function (b, c, d) {
            var e = d && d.event;
            (b === "__html" && S(96)) || jC(c);
            var f = tb(b, "__cvt_") ? void 0 : 1,
                g = new Ma();
            hb(c, function (r, u) {
                var v = ed(u, void 0, f);
                v === void 0 && u !== void 0 && T(44);
                g.set(r, v);
            });
            a.j.j.C = Cf();
            var k = {
                qk: Rf(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                Qe:
                    e !== void 0
                        ? function (r) {
                              e.wc.Qe(r);
                          }
                        : void 0,
                rb: function () {
                    return b;
                },
                log: function () {},
                wm: { index: d == null ? void 0 : d.index, type: d == null ? void 0 : d.type, name: d == null ? void 0 : d.name },
                yn: !!Ay(b, 3),
                originalEventData: e == null ? void 0 : e.originalEventData,
            };
            e && e.cachedModelValues && (k.cachedModelValues = { gtm: e.cachedModelValues.gtm, ecommerce: e.cachedModelValues.ecommerce });
            if (fC()) {
                var m = gC(),
                    n,
                    p;
                k.Ya = {
                    Bi: [],
                    Re: {},
                    Jb: function (r, u, v) {
                        u === 1 && (n = r);
                        u === 7 && (p = v);
                        m(r, u, v);
                    },
                    vg: mh(),
                };
                k.log = function (r) {
                    var u = ya.apply(1, arguments);
                    n && m(n, 4, { level: r, source: p, message: u });
                };
            }
            var q = Ce(a, k, [b, g]);
            a.j.j.C = void 0;
            q instanceof Aa && (q.getType() === "return" ? (q = q.getData()) : (q = void 0));
            return G(q, void 0, f);
        };
    }
    function jC(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Za(b) &&
            (a.gtmOnSuccess = function () {
                F(b);
            });
        Za(c) &&
            (a.gtmOnFailure = function () {
                F(c);
            });
    }
    function kC(a) {}
    kC.F = "internal.addAdsClickIds";
    function lC(a, b) {
        var c = this;
    }
    lC.publicName = "addConsentListener";
    var mC = !1;
    function nC(a) {
        for (var b = 0; b < a.length; ++b)
            if (mC)
                try {
                    a[b]();
                } catch (c) {
                    T(77);
                }
            else a[b]();
    }
    function oC(a, b, c) {
        var d = this,
            e;
        return e;
    }
    oC.F = "internal.addDataLayerEventListener";
    function pC(a, b, c) {}
    pC.publicName = "addDocumentEventListener";
    function qC(a, b, c, d) {}
    qC.publicName = "addElementEventListener";
    function rC(a) {
        return a.D.j;
    }
    function sC(a) {}
    sC.publicName = "addEventCallback";
    function IC(a) {}
    IC.F = "internal.addFormAbandonmentListener";
    function JC(a, b, c, d) {}
    JC.F = "internal.addFormData";
    var KC = {},
        LC = [],
        MC = {},
        NC = 0,
        OC = 0;
    function VC(a, b) {}
    VC.F = "internal.addFormInteractionListener";
    function bD(a, b) {}
    bD.F = "internal.addFormSubmitListener";
    function gD(a) {}
    gD.F = "internal.addGaSendListener";
    function hD(a) {
        if (!a) return {};
        var b = a.wm;
        return Vy(b.type, b.index, b.name);
    }
    function iD(a) {
        return a ? { originatingEntity: hD(a) } : {};
    }
    var kD = function (a, b, c) {
            jD().updateZone(a, b, c);
        },
        mD = function (a, b, c, d, e, f) {
            var g = jD();
            c = c && sb(c, lD);
            for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
                var n = String(b[m]);
                if (g.registerChild(n, Fk(), k)) {
                    var p = n,
                        q = a,
                        r = d,
                        u = e,
                        v = f;
                    if (tb(p, "GTM-")) Oy(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
                    else {
                        var t = vA("js", nb());
                        Oy(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
                        var w = { originatingEntity: u, inheritParentConfig: v };
                        S(139) || zA(t, q, w);
                        zA(wA(p, r), q, w);
                    }
                }
            }
            return k;
        },
        jD = function () {
            var a = bj.zones;
            a || (a = bj.zones = new nD());
            return a;
        },
        oD = { zone: 1, cn: 1, css: 1, ew: 1, eq: 1, ge: 1, gt: 1, lc: 1, le: 1, lt: 1, re: 1, sw: 1, um: 1 },
        lD = { cl: ["ecl"], ecl: ["cl"], ehl: ["hl"], gaawc: ["googtag"], hl: ["ehl"] },
        nD = function () {
            this.j = {};
            this.C = {};
            this.H = 0;
        };
    h = nD.prototype;
    h.isActive = function (a, b) {
        for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
        if (!c) return !0;
        if (!this.isActive([c.mi], b)) return !1;
        for (var e = 0; e < c.Bf.length; e++) if (this.C[c.Bf[e]].Qd(b)) return !0;
        return !1;
    };
    h.getIsAllowedFn = function (a, b) {
        if (!this.isActive(a, b))
            return function () {
                return !1;
            };
        for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
        if (!c)
            return function () {
                return !0;
            };
        for (var e = [], f = 0; f < c.Bf.length; f++) {
            var g = this.C[c.Bf[f]];
            g.Qd(b) && e.push(g);
        }
        if (!e.length)
            return function () {
                return !1;
            };
        var k = this.getIsAllowedFn([c.mi], b);
        return function (m, n) {
            n = n || [];
            if (!k(m, n)) return !1;
            for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
            return !1;
        };
    };
    h.unregisterChild = function (a) {
        for (var b = 0; b < a.length; b++) delete this.j[a[b]];
    };
    h.createZone = function (a, b) {
        var c = String(++this.H);
        this.C[c] = new pD(a, b);
        return c;
    };
    h.updateZone = function (a, b, c) {
        var d = this.C[a];
        d && d.K(b, c);
    };
    h.registerChild = function (a, b, c) {
        var d = this.j[a];
        if ((!d && bj[a]) || (!d && Qk(a)) || (d && d.mi !== b)) return !1;
        if (d) return d.Bf.push(c), !1;
        this.j[a] = { mi: b, Bf: [c] };
        return !0;
    };
    var pD = function (a, b) {
        this.C = null;
        this.j = [{ eventId: a, Qd: !0 }];
        if (b) {
            this.C = {};
            for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
        }
    };
    pD.prototype.K = function (a, b) {
        var c = this.j[this.j.length - 1];
        a <= c.eventId || (c.Qd !== b && this.j.push({ eventId: a, Qd: b }));
    };
    pD.prototype.Qd = function (a) {
        for (var b = this.j.length - 1; b >= 0; b--) if (this.j[b].eventId <= a) return this.j[b].Qd;
        return !1;
    };
    pD.prototype.H = function (a, b) {
        b = b || [];
        if (!this.C || oD[a] || this.C[a]) return !0;
        for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
        return !1;
    };
    function qD(a) {
        var b = bj.zones;
        return b
            ? b.getIsAllowedFn(Ak(), a)
            : function () {
                  return !0;
              };
    }
    function rD() {
        Dy(Hk(), function (a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = bj.zones;
            return c ? c.isActive(Ak(), b) : !0;
        });
        By(Hk(), function (a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return qD(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
        });
    }
    var sD = function (a, b) {
        this.tagId = a;
        this.Te = b;
    };
    function tD(a, b) {
        var c = this,
            d = void 0;
        return d;
    }
    tD.F = "internal.loadGoogleTag";
    function uD(a) {
        return new Xc("", function (b) {
            var c = this.evaluate(b);
            if (c instanceof Xc)
                return new Xc("", function () {
                    var d = ya.apply(0, arguments),
                        e = this,
                        f = Sc(rC(this), null);
                    f.eventId = a.eventId;
                    f.priorityId = a.priorityId;
                    f.originalEventData = a.originalEventData;
                    var g = d.map(function (m) {
                            return e.evaluate(m);
                        }),
                        k = Ha(this.D);
                    k.j = f;
                    return c.ib.apply(c, [k].concat(ta(g)));
                });
        });
    }
    function vD(a, b, c) {
        var d = this;
    }
    vD.F = "internal.addGoogleTagRestriction";
    var wD = {},
        xD = [];
    function ED(a, b) {}
    ED.F = "internal.addHistoryChangeListener";
    function FD(a, b, c) {}
    FD.publicName = "addWindowEventListener";
    function GD(a, b) {
        return !0;
    }
    GD.publicName = "aliasInWindow";
    function HD(a, b, c) {}
    HD.F = "internal.appendRemoteConfigParameter";
    function ID(a) {
        var b;
        return b;
    }
    ID.publicName = "callInWindow";
    function JD(a) {}
    JD.publicName = "callLater";
    function KD(a) {}
    KD.F = "callOnDomReady";
    function LD(a) {}
    LD.F = "callOnWindowLoad";
    function MD(a, b) {
        var c;
        return c;
    }
    MD.F = "internal.computeGtmParameter";
    function ND(a, b) {
        var c = this;
    }
    ND.F = "internal.consentScheduleFirstTry";
    function OD(a, b) {
        var c = this;
    }
    OD.F = "internal.consentScheduleRetry";
    function PD(a) {
        var b;
        return b;
    }
    PD.F = "internal.copyFromCrossContainerData";
    function QD(a, b) {
        var c;
        var d = ed(c, this.D, tb(rC(this).rb(), "__cvt_") ? 2 : 1);
        d === void 0 && c !== void 0 && T(45);
        return d;
    }
    QD.publicName = "copyFromDataLayer";
    function RD(a) {
        var b = void 0;
        return b;
    }
    RD.F = "internal.copyFromDataLayerCache";
    function SD(a) {
        var b;
        return b;
    }
    SD.publicName = "copyFromWindow";
    function TD(a) {
        var b = void 0;
        return ed(b, this.D, 1);
    }
    TD.F = "internal.copyKeyFromWindow";
    var UD = function (a, b, c) {
            var d = this;
            this.eventName = b;
            this.m = c;
            this.j = {};
            this.isAborted = !1;
            this.TEST_ONLY = {
                getMetadata: function () {
                    return Object.assign({}, d.metadata);
                },
                setMetadata: function (e) {
                    d.metadata = e;
                },
                getHitData: function () {
                    return Object.assign({}, d.j);
                },
                setHitData: function (e) {
                    d.j = e;
                },
            };
            this.target = a;
            this.metadata = Sc(c.eventMetadata || {}, {});
        },
        Kw = function (a, b, c) {
            a.j[b] = c;
        };
    UD.prototype.copyToHitData = function (a, b, c) {
        var d = U(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && $a(d) && S(83))
            try {
                d = c(d);
            } catch (e) {}
        d !== void 0 && (this.j[a] = d);
    };
    var iv = function (a, b, c) {
        var d = a.target.destinationId;
        S(129) && !wk && (d = Lk(d));
        var e = Xt(d);
        return e && e[b] !== void 0 ? e[b] : c;
    };
    function VD(a, b) {
        var c;
        return c;
    }
    VD.F = "internal.copyPreHit";
    function WD(a, b) {
        var c = null;
        return ed(c, this.D, 2);
    }
    WD.publicName = "createArgumentsQueue";
    function XD(a) {
        return ed(
            function (c) {
                var d = dz();
                if (typeof c === "function")
                    d(function () {
                        c(function (f, g, k) {
                            var m = dz(),
                                n = m && m.getByName && m.getByName(f);
                            return new z.gaplugins.Linker(n).decorate(g, k);
                        });
                    });
                else if (Array.isArray(c)) {
                    var e = String(c[0]).split(".");
                    b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
                } else if (c === "isLoaded") return !!d.loaded;
            },
            this.D,
            1
        );
    }
    XD.F = "internal.createGaCommandQueue";
    function YD(a) {
        return ed(
            function () {
                if (!Za(e.push)) throw Error("Object at " + a + " in window is not an array.");
                e.push.apply(e, Array.prototype.slice.call(arguments, 0));
            },
            this.D,
            tb(rC(this).rb(), "__cvt_") ? 2 : 1
        );
    }
    YD.publicName = "createQueue";
    function ZD(a, b) {
        var c = null;
        return c;
    }
    ZD.F = "internal.createRegex";
    function $D() {
        var a = {};
        return a;
    }
    function aE(a) {}
    aE.F = "internal.declareConsentState";
    function bE(a) {
        var b = "";
        return b;
    }
    bE.F = "internal.decodeUrlHtmlEntities";
    function cE(a, b, c) {
        var d;
        return d;
    }
    cE.F = "internal.decorateUrlWithGaCookies";
    function dE() {}
    dE.F = "internal.deferCustomEvents";
    function eE(a) {
        var b;
        M(this, "detect_user_provided_data", "auto");
        var c = G(a) || {},
            d = wu({ Rd: !!c.includeSelector, Sd: !!c.includeVisibility, We: c.excludeElementSelectors, Hb: c.fieldFilters, xg: !!c.selectMultipleElements });
        b = new Ma();
        var e = new Vc();
        b.set("elements", e);
        for (var f = d.elements, g = 0; g < f.length; g++) e.push(fE(f[g]));
        d.oi !== void 0 && b.set("preferredEmailElement", fE(d.oi));
        b.set("status", d.status);
        if (S(118) && c.performDataLayerSearch) {
        }
        return b;
    }
    var gE = function (a) {
            switch (a) {
                case uu.Ob:
                    return "email";
                case uu.Pc:
                    return "phone_number";
                case uu.Nc:
                    return "first_name";
                case uu.Oc:
                    return "last_name";
                case uu.Fh:
                    return "street";
                case uu.zg:
                    return "city";
                case uu.zh:
                    return "region";
                case uu.Le:
                    return "postal_code";
                case uu.de:
                    return "country";
            }
        },
        fE = function (a) {
            var b = new Ma();
            b.set("userData", a.X);
            b.set("tagName", a.tagName);
            a.querySelector !== void 0 && b.set("querySelector", a.querySelector);
            a.isVisible !== void 0 && b.set("isVisible", a.isVisible);
            if (S(32)) {
            } else
                switch (a.type) {
                    case uu.Ob:
                        b.set("type", "email");
                }
            return b;
        };
    eE.F = "internal.detectUserProvidedData";
    function jE(a, b) {
        return f;
    }
    jE.F = "internal.enableAutoEventOnClick";
    function rE(a, b) {
        return p;
    }
    rE.F = "internal.enableAutoEventOnElementVisibility";
    function sE() {}
    sE.F = "internal.enableAutoEventOnError";
    var tE = {},
        uE = [],
        vE = {},
        wE = 0,
        xE = 0;
    function DE(a, b) {
        var c = this;
        return d;
    }
    DE.F = "internal.enableAutoEventOnFormInteraction";
    function IE(a, b) {
        var c = this;
        return f;
    }
    IE.F = "internal.enableAutoEventOnFormSubmit";
    function NE() {
        var a = this;
    }
    NE.F = "internal.enableAutoEventOnGaSend";
    var OE = {},
        PE = [];
    function WE(a, b) {
        var c = this;
        return f;
    }
    WE.F = "internal.enableAutoEventOnHistoryChange";
    var XE = ["http://", "https://", "javascript:", "file://"];
    function aF(a, b) {
        var c = this;
        return k;
    }
    aF.F = "internal.enableAutoEventOnLinkClick";
    var bF, cF;
    function nF(a, b) {
        var c = this;
        return d;
    }
    nF.F = "internal.enableAutoEventOnScroll";
    function oF(a) {
        return function () {
            if (a.limit && a.ii >= a.limit) a.sg && z.clearInterval(a.sg);
            else {
                a.ii++;
                var b = ob();
                fB({
                    event: a.eventName,
                    "gtm.timerId": a.sg,
                    "gtm.timerEventNumber": a.ii,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.limit,
                    "gtm.timerStartTime": a.Rk,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Rk,
                    "gtm.triggers": a.Ln,
                });
            }
        };
    }
    function pF(a, b) {
        return f;
    }
    pF.F = "internal.enableAutoEventOnTimer";
    var Zb = wa(["data-gtm-yt-inspected-"]),
        rF = ["www.youtube.com", "www.youtube-nocookie.com"],
        sF,
        tF = !1;
    function DF(a, b) {
        var c = this;
        return e;
    }
    DF.F = "internal.enableAutoEventOnYouTubeActivity";
    function EF(a, b) {
        if (!L(a) || !Dg(b)) throw I(this.getName(), ["string", "Object|undefined"], arguments);
        var c = b ? G(b) : {},
            d = a,
            e = !1;
        return e;
    }
    EF.F = "internal.evaluateBooleanExpression";
    var FF;
    function GF(a) {
        var b = !1;
        return b;
    }
    GF.F = "internal.evaluateMatchingRules";
    function nG() {
        return vp(7) && vp(9) && vp(10);
    }
    var rG = function (a, b) {
            if (!b.isGtmEvent) {
                var c = U(b, P.g.Bb),
                    d = U(b, P.g.Qb),
                    e = U(b, c);
                if (e === void 0) {
                    var f = void 0;
                    oG.hasOwnProperty(c) ? (f = oG[c]) : pG.hasOwnProperty(c) && (f = pG[c]);
                    f === 1 && (f = qG(c));
                    $a(f)
                        ? dz()(function () {
                              var g,
                                  k,
                                  m,
                                  n = (m = (g = dz()) == null ? void 0 : (k = g.getByName) == null ? void 0 : k.call(g, a)) == null ? void 0 : m.get(f);
                              d(n);
                          })
                        : d(void 0);
                } else d(e);
            }
        },
        sG = function (a, b) {
            var c = a[P.g.Tb],
                d = b + ".",
                e = a[P.g.W] || "",
                f = c === void 0 ? !!a.use_anchor : c === "fragment",
                g = !!a[P.g.Cb];
            e = String(e).replace(/\s+/g, "").split(",");
            var k = dz();
            k(d + "require", "linker");
            k(d + "linker:autoLink", e, f, g);
        },
        wG = function (a, b, c) {
            if (!c.isGtmEvent || !tG[a]) {
                var d = !W(P.g.T),
                    e = function (f) {
                        var g = "gtm" + String(sj()),
                            k,
                            m = dz(),
                            n = uG(b, "", c),
                            p,
                            q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || vG(b, n.createOnlyFields)) {
                            c.isGtmEvent && ((k = n.createOnlyFields), n.gtmTrackerName && (k.name = g));
                            m(function () {
                                var u,
                                    v = m == null ? void 0 : (u = m.getByName) == null ? void 0 : u.call(m, b);
                                v && (p = v.get("clientId"));
                                if (!c.isGtmEvent) {
                                    var t;
                                    m == null || (t = m.remove) == null || t.call(m, b);
                                }
                            });
                            m("create", a, c.isGtmEvent ? k : n.createOnlyFields);
                            d &&
                                W(P.g.T) &&
                                ((d = !1),
                                m(function () {
                                    var u,
                                        v,
                                        t = (u = dz()) == null ? void 0 : (v = u.getByName) == null ? void 0 : v.call(u, c.isGtmEvent ? g : b);
                                    !t ||
                                        (t.get("clientId") == p && q) ||
                                        (c.isGtmEvent ? ((n.fieldsToSet["&gcu"] = "1"), (n.fieldsToSet["&sst.gcut"] = Hh[f])) : ((n.fieldsToSend["&gcu"] = "1"), (n.fieldsToSend["&sst.gcut"] = Hh[f])),
                                        t.set(n.fieldsToSet),
                                        c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend));
                                }));
                            c.isGtmEvent &&
                                m(function () {
                                    var u;
                                    m == null || (u = m.remove) == null || u.call(m, g);
                                });
                        }
                    };
                wm(function () {
                    return void e(P.g.T);
                }, P.g.T);
                wm(function () {
                    return void e(P.g.N);
                }, P.g.N);
                wm(function () {
                    return void e(P.g.O);
                }, P.g.O);
                c.isGtmEvent && (tG[a] = !0);
            }
        },
        xG = function (a, b) {
            ck() && b && (a[P.g.Ab] = b);
        },
        GG = function (a, b, c) {
            function d() {
                var J = ya.apply(0, arguments);
                J[0] = v ? v + "." + J[0] : "" + J[0];
                r.apply(window, J);
            }
            function e(J) {
                function V(ha, ia) {
                    for (var Ca = 0; ia && Ca < ia.length; Ca++) d(ha, ia[Ca]);
                }
                var ca = c.isGtmEvent,
                    ba = ca ? yG(t) : zG(b, c);
                if (ba) {
                    var Z = {};
                    xG(Z, J);
                    d("require", "ec", "ec.js", Z);
                    ca && ba.Nh && d("set", "&cu", ba.Nh);
                    var O = ba.action;
                    if (ca || O === "impressions") if ((V("ec:addImpression", ba.zk), !ca)) return;
                    if (O === "promo_click" || O === "promo_view" || (ca && ba.wf)) {
                        var fa = ba.wf;
                        V("ec:addPromo", fa);
                        if (fa && fa.length > 0 && O === "promo_click") {
                            ca ? d("ec:setAction", O, ba.Gb) : d("ec:setAction", O);
                            return;
                        }
                        if (!ca) return;
                    }
                    O !== "promo_view" && O !== "impressions" && (V("ec:addProduct", ba.Vc), d("ec:setAction", O, ba.Gb));
                }
            }
            function f(J) {
                if (J) {
                    var V = {};
                    if (Rc(J)) for (var ca in AG) AG.hasOwnProperty(ca) && BG(AG[ca], ca, J[ca], V);
                    xG(V, y);
                    d("require", "linkid", V);
                }
            }
            function g() {
                if (Mp()) {
                } else {
                    var J = U(c, P.g.Aj);
                    J && (d("require", J, { dataLayer: aj.ub }), d("require", "render"));
                }
            }
            function k() {
                var J = U(c, P.g.rd);
                r(function () {
                    if (!c.isGtmEvent && Rc(J)) {
                        var V = t.fieldsToSend,
                            ca,
                            ba,
                            Z = (ca = u()) == null ? void 0 : (ba = ca.getByName) == null ? void 0 : ba.call(ca, v),
                            O;
                        for (O in J)
                            if (J[O] != null && /^(dimension|metric)\d+$/.test(O)) {
                                var fa = void 0,
                                    ha = (fa = Z) == null ? void 0 : fa.get(qG(J[O]));
                                CG(V, O, ha);
                            }
                    }
                });
            }
            function m(J, V, ca) {
                ca && (V = String(V));
                t.fieldsToSend[J] = V;
            }
            function n() {
                if (t.displayfeatures) {
                    var J = "_dc_gtm_" + p.replace(/[^A-Za-z0-9-]/g, "");
                    d("require", "displayfeatures", void 0, { cookieName: J });
                }
            }
            var p = a,
                q,
                r = c.isGtmEvent ? gz(U(c, "gaFunctionName")) : gz();
            if (Za(r)) {
                var u = dz,
                    v;
                v = c.isGtmEvent ? U(c, "name") || U(c, "gtmTrackerName") : "gtag_" + p.split("-").join("_");
                var t = uG(v, b, c);
                !c.isGtmEvent &&
                    vG(v, t.createOnlyFields) &&
                    (r(function () {
                        var J, V;
                        u() && ((J = u()) == null || (V = J.remove) == null || V.call(J, v));
                    }),
                    (DG[v] = !1));
                r("create", p, t.createOnlyFields);
                var w = c.isGtmEvent && t.fieldsToSet[P.g.Ab];
                if ((!c.isGtmEvent && t.createOnlyFields[P.g.Ab]) || w) {
                    var x = bk(c.isGtmEvent ? t.fieldsToSet[P.g.Ab] : t.createOnlyFields[P.g.Ab], "/analytics.js");
                    x && (q = x);
                }
                var y = c.isGtmEvent ? t.fieldsToSet[P.g.Ab] : t.createOnlyFields[P.g.Ab];
                if (y) {
                    var B = c.isGtmEvent ? t.fieldsToSet[P.g.ze] : t.createOnlyFields[P.g.ze];
                    B && !DG[v] && ((DG[v] = !0), r(iz(v, B)));
                }
                c.isGtmEvent ? t.enableRecaptcha && d("require", "recaptcha", "recaptcha.js") : (k(), f(t.linkAttribution));
                var C = t[P.g.ya];
                C && C[P.g.W] && sG(C, v);
                d("set", t.fieldsToSet);
                if (c.isGtmEvent) {
                    if (t.enableLinkId) {
                        var D = {};
                        xG(D, y);
                        d("require", "linkid", "linkid.js", D);
                    }
                    wG(p, v, c);
                }
                if (b === P.g.ic)
                    if (c.isGtmEvent) {
                        n();
                        if (t.remarketingLists) {
                            var E = "_dc_gtm_" + p.replace(/[^A-Za-z0-9-]/g, "");
                            d("require", "adfeatures", { cookieName: E });
                        }
                        e(y);
                        d("send", "pageview");
                        t.createOnlyFields._useUp && fz(v + ".");
                    } else g(), d("send", "pageview", t.fieldsToSend);
                else
                    b === P.g.da
                        ? (g(), Ft(p, c), U(c, P.g.hb) && (js(["aw", "dc"]), fz(v + ".")), ls(["aw", "dc"]), t.sendPageView != 0 && d("send", "pageview", t.fieldsToSend), wG(p, v, c))
                        : b === P.g.ab
                        ? rG(v, c)
                        : b === "screen_view"
                        ? d("send", "screenview", t.fieldsToSend)
                        : b === "timing_complete"
                        ? ((t.fieldsToSend.hitType = "timing"),
                          m("timingCategory", t.eventCategory, !0),
                          c.isGtmEvent ? m("timingVar", t.timingVar, !0) : m("timingVar", t.name, !0),
                          m("timingValue", jb(t.value)),
                          t.eventLabel !== void 0 && m("timingLabel", t.eventLabel, !0),
                          d("send", t.fieldsToSend))
                        : b === "exception"
                        ? d("send", "exception", t.fieldsToSend)
                        : (b === "" && c.isGtmEvent) ||
                          (b === "track_social" && c.isGtmEvent
                              ? ((t.fieldsToSend.hitType = "social"), m("socialNetwork", t.socialNetwork, !0), m("socialAction", t.socialAction, !0), m("socialTarget", t.socialTarget, !0))
                              : ((c.isGtmEvent || EG[b]) && e(y),
                                c.isGtmEvent && n(),
                                (t.fieldsToSend.hitType = "event"),
                                m("eventCategory", t.eventCategory, !0),
                                m("eventAction", t.eventAction || b, !0),
                                t.eventLabel !== void 0 && m("eventLabel", t.eventLabel, !0),
                                t.value !== void 0 && m("eventValue", jb(t.value))),
                          d("send", t.fieldsToSend));
                var K = q && !c.eventMetadata.suppress_script_load;
                if (!FG && (!c.isGtmEvent || K)) {
                    q = q || "https://www.google-analytics.com/analytics.js";
                    FG = !0;
                    var H = function () {
                            c.onFailure();
                        },
                        N = function () {
                            var J;
                            ((J = u()) == null ? 0 : J.loaded) || H();
                        };
                    Mp() ? F(N) : nc(q, N, H);
                }
            } else F(c.onFailure);
        },
        HG = function (a, b, c, d) {
            xm(
                function () {
                    GG(a, b, d);
                },
                [P.g.T, P.g.N]
            );
        },
        vG = function (a, b) {
            var c = IG[a];
            IG[a] = Sc(b, null);
            if (!c) return !1;
            for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1;
        },
        zG = function (a, b) {
            function c(v) {
                return { id: d(P.g.Ca), affiliation: d(P.g.Qg), revenue: d(P.g.oa), tax: d(P.g.Lf), shipping: d(P.g.vd), coupon: d(P.g.Rg), list: d(P.g.Kf) || d(P.g.ud) || v };
            }
            for (
                var d = function (v) {
                        return U(b, v);
                    },
                    e = d(P.g.fa),
                    f,
                    g = 0;
                e && g < e.length && !(f = e[g][P.g.Kf] || e[g][P.g.ud]);
                g++
            );
            var k = d(P.g.rd);
            if (Rc(k))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && k[p] != null && CG(n, p, n[k[p]]);
                }
            var q = null,
                r = d(P.g.pj);
            if (a === P.g.La || a === P.g.Ec) q = { action: a, Gb: c(), Vc: JG(e) };
            else if (a === P.g.Bc) q = { action: "add", Gb: c(), Vc: JG(e) };
            else if (a === P.g.Cc) q = { action: "remove", Gb: c(), Vc: JG(e) };
            else if (a === P.g.Pa) q = { action: "detail", Gb: c(f), Vc: JG(e) };
            else if (a === P.g.vb) q = { action: "impressions", zk: JG(e) };
            else if (a === P.g.wb) q = { action: "promo_view", wf: JG(r) || JG(e) };
            else if ((a === "select_content" && r && r.length > 0) || a === P.g.Pb) q = { action: "promo_click", wf: JG(r) || JG(e) };
            else if (a === "select_content" || a === P.g.Dc) q = { action: "click", Gb: { list: d(P.g.Kf) || d(P.g.ud) || f }, Vc: JG(e) };
            else if (a === P.g.hc || a === "checkout_progress") {
                var u = { step: a === P.g.hc ? 1 : d(P.g.Jf), option: d(P.g.se) };
                q = { action: "checkout", Vc: JG(e), Gb: Sc(c(), u) };
            } else a === "set_checkout_option" && (q = { action: "checkout_option", Gb: { step: d(P.g.Jf), option: d(P.g.se) } });
            q && (q.Nh = d(P.g.Ba));
            return q;
        },
        yG = function (a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Nh = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.zk = b.translateIfKeyEquals === "impressions" ? JG(d) : d;
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.wf = b.translateIfKeyEquals === "promoView" ? JG(e) : e;
            }
            if (b.promoClick) {
                var f = b.promoClick;
                c.action = "promo_click";
                var g = f.promotions;
                c.wf = b.translateIfKeyEquals === "promoClick" ? JG(g) : g;
                c.Gb = f.actionField;
                return c;
            }
            for (var k in b)
                if (b[k] !== void 0 && k !== "translateIfKeyEquals" && k !== "impressions" && k !== "promoView" && k !== "promoClick" && k !== "currencyCode") {
                    c.action = k;
                    var m = b[k].products;
                    c.Vc = b.translateIfKeyEquals === "products" ? JG(m) : m;
                    c.Gb = b[k].actionField;
                    break;
                }
            return Object.keys(c).length ? c : null;
        },
        JG = function (a) {
            function b(e) {
                function f(k, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[k] = e[p];
                            break;
                        }
                    }
                }
                var g = Sc(e, null);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function () {
                    if (e.category) g.category = e.category;
                    else {
                        for (var k = "", m = 0; m < KG.length; m++) e[KG[m]] !== void 0 && (k && (k += "/"), (k += e[KG[m]]));
                        k && (g.category = k);
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g;
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Rc(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0;
        },
        uG = function (a, b, c) {
            var d = function (J) {
                    return U(c, J);
                },
                e = {},
                f = {},
                g = {},
                k = {},
                m = LG(d(P.g.qj));
            !c.isGtmEvent && m && CG(f, "exp", m);
            g["&gtm"] = Op({ Aa: c.eventMetadata.source_canonical_id, kg: !0 });
            c.isGtmEvent || (g._no_slc = !0);
            xl() && (k._cs = MG);
            var n = d(P.g.rd);
            if (!c.isGtmEvent && Rc(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && n[p] != null) {
                        var q = d(String(n[p]));
                        q !== void 0 && CG(f, p, q);
                    }
            for (var r = !c.isGtmEvent, u = fn(c), v = 0; v < u.length; ++v) {
                var t = u[v];
                if (c.isGtmEvent) {
                    var w = d(t);
                    NG.hasOwnProperty(t) ? (e[t] = w) : OG.hasOwnProperty(t) ? (k[t] = w) : (g[t] = w);
                } else {
                    var x = void 0;
                    t !== P.g.ia ? (x = d(t)) : (x = gn(c, t));
                    if (PG.hasOwnProperty(t)) BG(PG[t], t, x, e);
                    else if (QG.hasOwnProperty(t)) BG(QG[t], t, x, g);
                    else if (pG.hasOwnProperty(t)) BG(pG[t], t, x, f);
                    else if (oG.hasOwnProperty(t)) BG(oG[t], t, x, k);
                    else if (/^(dimension|metric|content_group)\d+$/.test(t)) BG(1, t, x, f);
                    else if (t === P.g.ia) {
                        if (!RG) {
                            var y = yb(x);
                            y && (f["&did"] = y);
                        }
                        var B = void 0,
                            C = void 0;
                        b === P.g.da ? (B = yb(gn(c, t), ".")) : ((B = yb(gn(c, t, 1), ".")), (C = yb(gn(c, t, 2), ".")));
                        B && (f["&gdid"] = B);
                        C && (f["&edid"] = C);
                    } else t === P.g.Ma && u.indexOf(P.g.Fc) < 0 && (k.cookieName = String(x) + "_ga");
                    S(145) && SG[t] && (c.H.hasOwnProperty(t) || (b === P.g.da && c.j.hasOwnProperty(t))) && (r = !1);
                }
            }
            S(145) && r && (f["&jsscut"] = "1");
            (d(P.g.Gf) !== !1 && d(P.g.jb) !== !1 && nG()) || (g.allowAdFeatures = !1);
            g.allowAdPersonalizationSignals = Ap(c);
            !c.isGtmEvent && d(P.g.hb) && (k._useUp = !0);
            if (c.isGtmEvent) {
                k.name = k.name || e.gtmTrackerName;
                var D = g.hitCallback;
                g.hitCallback = function () {
                    Za(D) && D();
                    c.onSuccess();
                };
            } else {
                CG(k, "cookieDomain", "auto");
                CG(g, "forceSSL", !0);
                CG(e, "eventCategory", TG(b));
                UG[b] && CG(f, "nonInteraction", !0);
                b === "login" || b === "sign_up" || b === "share" ? CG(e, "eventLabel", d(P.g.gh)) : b === "search" || b === "view_search_results" ? CG(e, "eventLabel", d(P.g.Fj)) : b === "select_content" && CG(e, "eventLabel", d(P.g.lj));
                var E = e[P.g.ya] || {},
                    K = E[P.g.Mc];
                K || (K != 0 && E[P.g.W]) ? (k.allowLinker = !0) : K === !1 && CG(k, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                k.name = a;
            }
            Bp() && (g["&gcs"] = Cp());
            g["&gcd"] = Gp(c);
            xl() && (W(P.g.T) || (k.storage = "none"), W([P.g.N, P.g.O]) || ((g.allowAdFeatures = !1), (k.storeGac = !1)));
            Jp() && (g["&dma_cps"] = Hp());
            g["&dma"] = Ip();
            Xo(np()) && (g["&tcfd"] = Kp());
            wj() && (g["&tag_exp"] = wj());
            var H = dk(c) || d(P.g.Ab),
                N = d(P.g.ze);
            H && (c.isGtmEvent || (k[P.g.Ab] = H), (k._cd2l = !0));
            N && !c.isGtmEvent && (k[P.g.ze] = N);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = k;
            return e;
        },
        MG = function (a) {
            return W(a);
        },
        LG = function (a) {
            if (Array.isArray(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (d != null) {
                        var e = d.id,
                            f = d.variant;
                        e != null && f != null && b.push(String(e) + "." + String(f));
                    }
                }
                return b.length > 0 ? b.join("!") : void 0;
            }
        },
        CG = function (a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c);
        },
        TG = function (a) {
            var b = "general";
            VG[a] ? (b = "ecommerce") : WG[a] ? (b = "engagement") : a === "exception" && (b = "error");
            return b;
        },
        qG = function (a) {
            return a && $a(a)
                ? a.replace(/(_[a-z])/g, function (b) {
                      return b[1].toUpperCase();
                  })
                : a;
        },
        BG = function (a, b, c, d) {
            if (c !== void 0)
                if ((XG[b] && (c = kb(c)), b !== "anonymize_ip" || c || (c = void 0), a === 1)) d[qG(b)] = c;
                else if ($a(a)) d[a] = c;
                else for (var e in a) a.hasOwnProperty(e) && c[e] !== void 0 && (d[a[e]] = c[e]);
        },
        RG = !1;
    var FG = !1,
        DG = {},
        tG = {},
        YG = {},
        SG =
            ((YG[P.g.na] = 1),
            (YG[P.g.jb] = 1),
            (YG[P.g.Qa] = 1),
            (YG[P.g.Ra] = 1),
            (YG[P.g.eb] = 1),
            (YG[P.g.Fc] = 1),
            (YG[P.g.zb] = 1),
            (YG[P.g.Ma] = 1),
            (YG[P.g.mc] = 1),
            (YG[P.g.ih] = 1),
            (YG[P.g.qa] = 1),
            (YG[P.g.Bd] = 1),
            (YG[P.g.Ga] = 1),
            (YG[P.g.fb] = 1),
            YG),
        ZG = {},
        oG =
            ((ZG.client_storage = "storage"),
            (ZG.sample_rate = 1),
            (ZG.site_speed_sample_rate = 1),
            (ZG.store_gac = 1),
            (ZG.use_amp_client_id = 1),
            (ZG[P.g.kb] = 1),
            (ZG[P.g.xa] = "storeGac"),
            (ZG[P.g.Qa] = 1),
            (ZG[P.g.Ra] = 1),
            (ZG[P.g.eb] = 1),
            (ZG[P.g.Fc] = 1),
            (ZG[P.g.zb] = 1),
            (ZG[P.g.mc] = 1),
            ZG),
        $G = {},
        OG =
            (($G._cs = 1),
            ($G._useUp = 1),
            ($G.allowAnchor = 1),
            ($G.allowLinker = 1),
            ($G.alwaysSendReferrer = 1),
            ($G.clientId = 1),
            ($G.cookieDomain = 1),
            ($G.cookieExpires = 1),
            ($G.cookieFlags = 1),
            ($G.cookieName = 1),
            ($G.cookiePath = 1),
            ($G.cookieUpdate = 1),
            ($G.legacyCookieDomain = 1),
            ($G.legacyHistoryImport = 1),
            ($G.name = 1),
            ($G.sampleRate = 1),
            ($G.siteSpeedSampleRate = 1),
            ($G.storage = 1),
            ($G.storeGac = 1),
            ($G.useAmpClientId = 1),
            ($G._cd2l = 1),
            $G),
        QG = { anonymize_ip: 1 },
        aH = {},
        pG =
            ((aH.campaign = { content: "campaignContent", id: "campaignId", medium: "campaignMedium", name: "campaignName", source: "campaignSource", term: "campaignKeyword" }),
            (aH.app_id = 1),
            (aH.app_installer_id = 1),
            (aH.app_name = 1),
            (aH.app_version = 1),
            (aH.description = "exDescription"),
            (aH.fatal = "exFatal"),
            (aH.language = 1),
            (aH.page_hostname = "hostname"),
            (aH.transport_type = "transport"),
            (aH[P.g.Ba] = "currencyCode"),
            (aH[P.g.hh] = 1),
            (aH[P.g.qa] = "location"),
            (aH[P.g.Bd] = "page"),
            (aH[P.g.Ga] = "referrer"),
            (aH[P.g.fb] = "title"),
            (aH[P.g.Tf] = 1),
            (aH[P.g.Ea] = 1),
            aH),
        bH = {},
        PG = ((bH.content_id = 1), (bH.event_action = 1), (bH.event_category = 1), (bH.event_label = 1), (bH.link_attribution = 1), (bH.name = 1), (bH[P.g.ya] = 1), (bH[P.g.gh] = 1), (bH[P.g.Na] = 1), (bH[P.g.oa] = 1), bH),
        NG = {
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1,
        },
        KG = ["item_category", "item_category2", "item_category3", "item_category4", "item_category5"],
        cH = {},
        AG = ((cH.levels = 1), (cH[P.g.Ra] = "duration"), (cH[P.g.Fc] = 1), cH),
        dH = {},
        XG = ((dH.anonymize_ip = 1), (dH.fatal = 1), (dH.send_page_view = 1), (dH.store_gac = 1), (dH.use_amp_client_id = 1), (dH[P.g.xa] = 1), (dH[P.g.hh] = 1), dH),
        eH = {},
        EG =
            ((eH.checkout_progress = 1),
            (eH.select_content = 1),
            (eH.set_checkout_option = 1),
            (eH[P.g.Bc] = 1),
            (eH[P.g.Cc] = 1),
            (eH[P.g.hc] = 1),
            (eH[P.g.Dc] = 1),
            (eH[P.g.vb] = 1),
            (eH[P.g.Pb] = 1),
            (eH[P.g.wb] = 1),
            (eH[P.g.La] = 1),
            (eH[P.g.Ec] = 1),
            (eH[P.g.Pa] = 1),
            eH),
        fH = {},
        VG = ((fH.checkout_progress = 1), (fH.set_checkout_option = 1), (fH[P.g.Dg] = 1), (fH[P.g.Eg] = 1), (fH[P.g.Bc] = 1), (fH[P.g.Cc] = 1), (fH[P.g.Fg] = 1), (fH[P.g.hc] = 1), (fH[P.g.La] = 1), (fH[P.g.Ec] = 1), (fH[P.g.Gg] = 1), fH),
        gH = {},
        WG =
            ((gH.generate_lead = 1),
            (gH.login = 1),
            (gH.search = 1),
            (gH.select_content = 1),
            (gH.share = 1),
            (gH.sign_up = 1),
            (gH.view_search_results = 1),
            (gH[P.g.Dc] = 1),
            (gH[P.g.vb] = 1),
            (gH[P.g.Pb] = 1),
            (gH[P.g.wb] = 1),
            (gH[P.g.Pa] = 1),
            gH),
        hH = {},
        UG = ((hH.view_search_results = 1), (hH[P.g.vb] = 1), (hH[P.g.wb] = 1), (hH[P.g.Pa] = 1), hH),
        IG = {};
    function iH(a, b, c, d) {}
    iH.F = "internal.executeEventProcessor";
    function jH(a) {
        var b;
        return ed(b, this.D, 1);
    }
    jH.F = "internal.executeJavascriptString";
    function kH(a) {
        var b;
        return b;
    }
    function lH(a) {
        var b = {};
        return ed(b);
    }
    lH.F = "internal.getAdsCookieWritingOptions";
    function mH(a) {
        var b = !1;
        return b;
    }
    mH.F = "internal.getAllowAdPersonalization";
    function nH(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c;
    }
    nH.F = "internal.getAuid";
    var oH = null;
    function pH() {
        var a = new Ma();
        return a;
    }
    pH.publicName = "getContainerVersion";
    function qH(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c;
    }
    qH.publicName = "getCookieValues";
    function rH() {
        return Nl();
    }
    rH.F = "internal.getCountryCode";
    function sH() {
        var a = [];
        a = Dk();
        return ed(a);
    }
    sH.F = "internal.getDestinationIds";
    function tH(a) {
        var b = new Ma();
        return b;
    }
    tH.F = "internal.getDeveloperIds";
    function uH(a, b) {
        var c = null;
        return c;
    }
    uH.F = "internal.getElementAttribute";
    function vH(a) {
        var b = null;
        return b;
    }
    vH.F = "internal.getElementById";
    function wH(a) {
        var b = "";
        return b;
    }
    wH.F = "internal.getElementInnerText";
    function xH(a, b) {
        var c = null;
        return ed(c);
    }
    xH.F = "internal.getElementProperty";
    function yH(a) {
        var b;
        return b;
    }
    yH.F = "internal.getElementValue";
    function zH(a) {
        var b = 0;
        return b;
    }
    zH.F = "internal.getElementVisibilityRatio";
    function AH(a) {
        var b = null;
        return b;
    }
    AH.F = "internal.getElementsByCssSelector";
    function BH(a) {
        var b;
        if (!L(a)) throw I(this.getName(), ["string"], arguments);
        M(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = rC(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
                        for (var v = r[u].split("."), t = 0; t < v.length; t++) n.push(v[t]), t !== v.length - 1 && n.push(m);
                        u !== r.length - 1 && n.push(k);
                    }
                    q !== p.length - 1 && n.push(g);
                }
                for (var w = [], x = "", y = l(n), B = y.next(); !B.done; B = y.next()) {
                    var C = B.value;
                    C === m ? (w.push(x), (x = "")) : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
                }
                x && w.push(x);
                for (var D = l(w), E = D.next(); !E.done; E = D.next()) {
                    if (f == null) {
                        c = void 0;
                        break a;
                    }
                    f = f[E.value];
                }
                c = f;
            } else c = void 0;
        }
        b = ed(c, this.D, 1);
        return b;
    }
    BH.F = "internal.getEventData";
    var CH = {};
    CH.enableAWFledge = S(33);
    CH.enableAdsConversionValidation = S(18);
    CH.enableAdsSupernovaParams = S(29);
    CH.enableAutoPhoneAndAddressDetection = S(31);
    CH.enableAutoPiiOnPhoneAndAddress = S(32);
    CH.enableCachedEcommerceData = S(41);
    CH.enableCloudRecommentationsErrorLogging = S(42);
    CH.enableCloudRecommentationsSchemaIngestion = S(43);
    CH.enableCloudRetailInjectPurchaseMetadata = S(45);
    CH.enableCloudRetailLogging = S(44);
    CH.enableCloudRetailPageCategories = S(46);
    CH.enableConsentDisclosureActivity = S(48);
    CH.enableDCFledge = S(54);
    CH.enableDataLayerSearchExperiment = S(118);
    CH.enableDecodeUri = S(83);
    CH.enableDeferAllEnhancedMeasurement = S(55);
    CH.enableFormSkipValidation = S(77);
    CH.enableGa4OutboundClicksFix = S(86);
    CH.enableGaAdsConversions = S(110);
    CH.enableGaAdsConversionsClientId = S(109);
    CH.enableLimitedDataModes = S(100);
    CH.enableMerchantRenameForBasketData = S(103);
    CH.enableUnsiloedModeGtmTags = S(131);
    CH.enableUrlDecodeEventUsage = S(133);
    CH.enableZoneConfigInChildContainers = S(136);
    CH.useEnableAutoEventOnFormApis = S(148);
    CH.autoPiiEligible = Sl();
    function DH() {
        return ed(CH);
    }
    DH.F = "internal.getFlags";
    function EH() {
        return new bd(LB);
    }
    EH.F = "internal.getHtmlId";
    function FH(a) {
        var b;
        return b;
    }
    FH.F = "internal.getIframingState";
    function GH(a, b) {
        var c = {};
        return ed(c);
    }
    GH.F = "internal.getLinkerValueFromLocation";
    function HH() {
        var a = new Ma();
        return a;
    }
    HH.F = "internal.getPrivacyStrings";
    function IH(a, b) {
        var c;
        if (!L(a) || !L(b)) throw I(this.getName(), ["string", "string"], arguments);
        var d = Xt(a) || {};
        c = ed(d[b], this.D);
        return c;
    }
    IH.F = "internal.getProductSettingsParameter";
    function JH(a, b) {
        var c;
        return c;
    }
    JH.publicName = "getQueryParameters";
    function KH(a, b) {
        var c;
        return c;
    }
    KH.publicName = "getReferrerQueryParameters";
    function LH(a) {
        var b = "";
        return b;
    }
    LH.publicName = "getReferrerUrl";
    function MH() {
        return Ol();
    }
    MH.F = "internal.getRegionCode";
    function NH(a, b) {
        var c;
        return c;
    }
    NH.F = "internal.getRemoteConfigParameter";
    function OH() {
        var a = new Ma();
        a.set("width", 0);
        a.set("height", 0);
        return a;
    }
    OH.F = "internal.getScreenDimensions";
    function PH() {
        var a = "";
        return a;
    }
    PH.F = "internal.getTopSameDomainUrl";
    function QH() {
        var a = "";
        return a;
    }
    QH.F = "internal.getTopWindowUrl";
    function RH(a) {
        var b = "";
        return b;
    }
    RH.publicName = "getUrl";
    function SH() {
        M(this, "get_user_agent");
        return ec.userAgent;
    }
    SH.F = "internal.getUserAgent";
    function TH() {
        var a;
        return a ? ed(Tv(a)) : a;
    }
    TH.F = "internal.getUserAgentClientHints";
    function aI() {
        return (z.gaGlobal = z.gaGlobal || {});
    }
    function bI() {
        var a = aI();
        a.hid = a.hid || eb();
        return a.hid;
    }
    function cI(a, b) {
        var c = aI();
        if (c.vid === void 0 || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
    }
    function yI(a) {
        if (lv(a) || yj()) a.j[P.g.Ij] = Ol() || Nl();
        !lv(a) && yj() && (a.j[P.g.Rj] = "::");
    }
    function zI(a) {
        if (S(79) && yj()) {
            ot(a);
            pt(a, "cpf", At(U(a.m, P.g.Ma)));
            var b = U(a.m, P.g.mc);
            pt(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
            pt(a, "cf", At(U(a.m, P.g.eb)));
            pt(a, "cd", gq(zt(U(a.m, P.g.Qa)), zt(U(a.m, P.g.zb))));
        }
    }
    var PI = function (a) {
            this.H = a;
            this.j = "";
        },
        QI = function (a, b) {
            a.C = b;
            return a;
        },
        RI = function (a, b) {
            b = a.j + b;
            for (var c = b.indexOf("\n\n"); c !== -1; ) {
                var d = a,
                    e;
                a: {
                    var f = l(b.substring(0, c).split("\n")),
                        g = f.next().value,
                        k = f.next().value;
                    if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
                        try {
                            e = JSON.parse(k.substring(k.indexOf(":") + 1));
                            break a;
                        } catch (H) {}
                    e = void 0;
                }
                var m = d,
                    n = e;
                if (n) {
                    var p = n.send_pixel,
                        q = n.options,
                        r = m.H;
                    if (p) {
                        var u = p || [];
                        if (Array.isArray(u)) for (var v = Rc(q) ? q : {}, t = l(u), w = t.next(); !w.done; w = t.next()) r(w.value, v);
                    }
                    var x = n.create_iframe,
                        y = n.options,
                        B = m.C;
                    if (x && B) {
                        var C = x || [];
                        if (Array.isArray(C)) for (var D = Rc(y) ? y : {}, E = l(C), K = E.next(); !K.done; K = E.next()) B(K.value, D);
                    }
                }
                b = b.substring(c + 2);
                c = b.indexOf("\n\n");
            }
            a.j = b;
        };
    function SI(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse");
    }
    var FJ = window,
        GJ = document,
        HJ = function (a) {
            var b = FJ._gaUserPrefs;
            if ((b && b.ioo && b.ioo()) || GJ.documentElement.hasAttribute("data-google-analytics-opt-out") || (a && FJ["ga-disable-" + a] === !0)) return !0;
            try {
                var c = FJ.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
            } catch (p) {}
            for (var d = [], e = String(GJ.cookie).split(";"), f = 0; f < e.length; f++) {
                var g = e[f].split("="),
                    k = g[0].replace(/^\s*|\s*$/g, "");
                if (k && k == "AMP_TOKEN") {
                    var m = g
                        .slice(1)
                        .join("=")
                        .replace(/^\s*|\s*$/g, "");
                    m && (m = decodeURIComponent(m));
                    d.push(m);
                }
            }
            for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
            return GJ.getElementById("__gaOptOutExtension") ? !0 : !1;
        };
    function SJ(a) {
        hb(a, function (c) {
            c.charAt(0) === "_" && delete a[c];
        });
        var b = a[P.g.qb] || {};
        hb(b, function (c) {
            c.charAt(0) === "_" && delete b[c];
        });
    }
    function yK(a, b) {}
    function zK(a, b) {
        var c = function () {};
        return c;
    }
    function AK(a, b, c) {}
    var BK = zK;
    var CK = function (a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
    };
    function DK(a, b, c) {
        var d = this;
    }
    DK.F = "internal.gtagConfig";
    function EK() {
        var a = {};
        return a;
    }
    function GK(a, b) {}
    GK.publicName = "gtagSet";
    function HK() {
        var a = {};
        return a;
    }
    function IK(a, b) {}
    IK.publicName = "injectHiddenIframe";
    var dC = (function () {
        var a = 0;
        return function (b) {
            switch (b) {
                case 1:
                    a |= 1;
                    break;
                case 2:
                    a |= 2;
                    break;
                case 3:
                    a |= 4;
            }
            return a;
        };
    })();
    function JK(a, b, c, d, e) {
        var f = this;
    }
    JK.F = "internal.injectHtml";
    var NK = {};
    function PK(a, b, c, d) {}
    var QK = { dl: 1, id: 1 },
        RK = {};
    function SK(a, b, c, d) {}
    PK.publicName = "injectScript";
    SK.F = "internal.injectScript";
    function TK(a) {
        var b = !0;
        return b;
    }
    TK.publicName = "isConsentGranted";
    function UK(a) {
        var b = !1;
        return b;
    }
    UK.F = "internal.isDebugMode";
    function VK() {
        return Ql();
    }
    VK.F = "internal.isDmaRegion";
    function WK(a) {
        var b = !1;
        return b;
    }
    WK.F = "internal.isEntityInfrastructure";
    function XK() {
        var a = !1;
        return a;
    }
    XK.F = "internal.isLandingPage";
    function YK() {
        var a = hh(function (b) {
            rC(this).log("error", b);
        });
        a.publicName = "JSON";
        return a;
    }
    function ZK(a) {
        var b = void 0;
        return ed(b);
    }
    ZK.F = "internal.legacyParseUrl";
    function $K() {
        return !1;
    }
    var aL = {
        getItem: function (a) {
            var b = null;
            return b;
        },
        setItem: function (a, b) {
            return !1;
        },
        removeItem: function (a) {},
    };
    function bL() {}
    bL.publicName = "logToConsole";
    function cL(a, b) {}
    cL.F = "internal.mergeRemoteConfig";
    function dL(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return ed(d);
    }
    dL.F = "internal.parseCookieValuesFromString";
    function eL(a) {
        var b = void 0;
        return b;
    }
    eL.publicName = "parseUrl";
    function fL(a) {}
    fL.F = "internal.processAsNewEvent";
    function gL(a, b, c) {
        var d;
        return d;
    }
    gL.F = "internal.pushToDataLayer";
    function hL(a) {
        var b = ya.apply(1, arguments),
            c = !1;
        if (!L(a)) throw I(this.getName(), ["string"], arguments);
        for (var d = [this, a], e = l(b), f = e.next(); !f.done; f = e.next()) d.push(G(f.value, this.D, 1));
        try {
            M.apply(null, d), (c = !0);
        } catch (g) {
            return !1;
        }
        return c;
    }
    hL.publicName = "queryPermission";
    function iL(a) {
        var b = this;
    }
    iL.F = "internal.queueAdsTransmission";
    function jL() {
        var a = "";
        return a;
    }
    jL.publicName = "readCharacterSet";
    function kL() {
        return aj.ub;
    }
    kL.F = "internal.readDataLayerName";
    function lL() {
        var a = "";
        return a;
    }
    lL.publicName = "readTitle";
    function mL(a, b) {
        var c = this;
        if (!L(a) || !Fg(b)) throw I(this.getName(), ["string", "function"], arguments);
        Pt(a, function (d) {
            b.invoke(c.D, ed(d, c.D, 1));
        });
    }
    mL.F = "internal.registerCcdCallback";
    function nL(a) {
        return !0;
    }
    nL.F = "internal.registerDestination";
    var oL = ["config", "event", "get", "set"];
    function pL(a, b, c) {}
    pL.F = "internal.registerGtagCommandListener";
    function qL(a, b) {
        var c = !1;
        return c;
    }
    qL.F = "internal.removeDataLayerEventListener";
    function rL(a, b) {}
    rL.F = "internal.removeFormData";
    function sL() {}
    sL.publicName = "resetDataLayer";
    function tL(a, b, c) {
        var d = void 0;
        return d;
    }
    tL.F = "internal.scrubUrlParams";
    function uL(a) {}
    uL.F = "internal.sendAdsHit";
    function vL(a, b, c, d) {}
    vL.F = "internal.sendGtagEvent";
    function wL(a, b, c) {}
    wL.publicName = "sendPixel";
    function xL(a, b) {}
    xL.F = "internal.setAnchorHref";
    function yL(a) {}
    yL.F = "internal.setContainerConsentDefaults";
    function zL(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f;
    }
    zL.publicName = "setCookie";
    function AL(a) {}
    AL.F = "internal.setCorePlatformServices";
    function BL(a, b) {}
    BL.F = "internal.setDataLayerValue";
    function CL(a) {}
    CL.publicName = "setDefaultConsentState";
    function DL(a, b) {}
    DL.F = "internal.setDelegatedConsentType";
    function EL(a, b) {}
    EL.F = "internal.setFormAction";
    function FL(a, b, c) {
        c = c === void 0 ? !1 : c;
    }
    FL.F = "internal.setInCrossContainerData";
    function GL(a, b, c) {
        return !1;
    }
    GL.publicName = "setInWindow";
    function HL(a, b, c) {}
    HL.F = "internal.setProductSettingsParameter";
    function IL(a, b, c) {
        if (!L(a) || !L(b) || arguments.length !== 3) throw I(this.getName(), ["string", "string", "any"], arguments);
        for (var d = b.split("."), e = ao(a), f = 0; f < d.length - 1; f++) {
            if (e[d[f]] === void 0) e[d[f]] = {};
            else if (!Rc(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]];
        }
        e[d[f]] = G(c, this.D, 1);
    }
    IL.F = "internal.setRemoteConfigParameter";
    var JL = { unspecified: 0, limited: 1, none: 2 },
        KL = { unspecified: 0, ads: 1, analytics: 2, monitoring: 3 };
    function LL(a, b) {}
    LL.F = "internal.setTransmissionMode";
    function ML(a, b, c, d) {
        var e = this;
    }
    ML.publicName = "sha256";
    function NL(a, b, c) {}
    NL.F = "internal.sortRemoteConfigParameters";
    function OL(a, b) {
        var c = void 0;
        return c;
    }
    OL.F = "internal.subscribeToCrossContainerData";
    var PL = {},
        QL = {};
    PL.getItem = function (a) {
        var b = null;
        return b;
    };
    PL.setItem = function (a, b) {};
    PL.removeItem = function (a) {};
    PL.clear = function () {};
    PL.publicName = "templateStorage";
    function RL(a, b) {
        var c = !1;
        return c;
    }
    RL.F = "internal.testRegex";
    function SL(a) {
        var b;
        return b;
    }
    function TL(a) {
        var b;
        return b;
    }
    TL.F = "internal.unsiloId";
    function UL(a, b) {
        var c;
        return c;
    }
    UL.F = "internal.unsubscribeFromCrossContainerData";
    function VL(a) {}
    VL.publicName = "updateConsentState";
    var WL;
    function XL(a, b, c) {
        WL = WL || new sh();
        WL.add(a, b, c);
    }
    function YL(a, b) {
        var c = (WL = WL || new sh());
        if (c.j.hasOwnProperty(a)) throw Error("Attempting to add a private function which already exists: " + a + ".");
        if (c.contains(a)) throw Error("Attempting to add a private function with an existing API name: " + a + ".");
        c.j[a] = Za(b) ? Pg(a, b) : Qg(a, b);
    }
    function ZL() {
        return function (a) {
            var b;
            var c = WL;
            if (c.contains(a)) b = c.get(a, this);
            else {
                var d;
                if ((d = c.j.hasOwnProperty(a))) {
                    var e = !1,
                        f = this.D.j;
                    if (f) {
                        var g = f.rb();
                        if (g) {
                            g.indexOf("__cvt_") !== 0 && (e = !0);
                        }
                    } else e = !0;
                    d = e;
                }
                if (d) {
                    var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
                    b = k;
                } else throw Error(a + " is not a valid API name.");
            }
            return b;
        };
    }
    function $L() {
        var a = function (c) {
                return void YL(c.F, c);
            },
            b = function (c) {
                return void XL(c.publicName, c);
            };
        b(lC);
        b(sC);
        b(GD);
        b(ID);
        b(JD);
        b(QD);
        b(SD);
        b(WD);
        b(YK());
        b(YD);
        b(pH);
        b(qH);
        b(JH);
        b(KH);
        b(LH);
        b(RH);
        b(GK);
        b(IK);
        b(PK);
        b(TK);
        b(bL);
        b(eL);
        b(hL);
        b(jL);
        b(lL);
        b(wL);
        b(zL);
        b(CL);
        b(GL);
        b(ML);
        b(PL);
        b(VL);
        XL("Math", Ug());
        XL("Object", qh);
        XL("TestHelper", vh());
        XL("assertApi", Rg);
        XL("assertThat", Sg);
        XL("decodeUri", Wg);
        XL("decodeUriComponent", Xg);
        XL("encodeUri", Yg);
        XL("encodeUriComponent", Zg);
        XL("fail", dh);
        XL("generateRandom", eh);
        XL("getTimestamp", fh);
        XL("getTimestampMillis", fh);
        XL("getType", gh);
        XL("makeInteger", ih);
        XL("makeNumber", jh);
        XL("makeString", kh);
        XL("makeTableMap", lh);
        XL("mock", oh);
        XL("mockObject", ph);
        XL("fromBase64", kH, !("atob" in z));
        XL("localStorage", aL, !$K());
        XL("toBase64", SL, !("btoa" in z));
        a(kC);
        a(oC);
        a(JC);
        a(VC);
        a(bD);
        a(gD);
        a(vD);
        a(ED);
        a(HD);
        a(KD);
        a(LD);
        a(MD);
        a(ND);
        a(OD);
        a(PD);
        a(RD);
        a(TD);
        a(VD);
        a(XD);
        a(ZD);
        a(aE);
        a(bE);
        a(cE);
        a(dE);
        a(eE);
        a(jE);
        a(rE);
        a(sE);
        a(DE);
        a(IE);
        a(NE);
        a(WE);
        a(aF);
        a(nF);
        a(pF);
        a(DF);
        a(EF);
        a(GF);
        a(iH);
        a(jH);
        a(lH);
        a(mH);
        a(nH);
        a(rH);
        a(sH);
        a(tH);
        a(uH);
        a(vH);
        a(wH);
        a(xH);
        a(yH);
        a(zH);
        a(AH);
        a(BH);
        a(DH);
        a(EH);
        a(FH);
        a(GH);
        a(HH);
        a(IH);
        a(MH);
        a(NH);
        a(OH);
        a(PH);
        a(QH);
        a(TH);
        a(DK);
        a(JK);
        a(SK);
        a(UK);
        a(VK);
        a(WK);
        a(XK);
        a(ZK);
        a(tD);
        a(cL);
        a(dL);
        a(fL);
        a(gL);
        a(iL);
        a(kL);
        a(mL);
        a(nL);
        a(pL);
        a(qL);
        a(rL);
        a(uh);
        a(tL);
        a(uL);
        a(vL);
        a(xL);
        a(yL);
        a(AL);
        a(BL);
        a(DL);
        a(EL);
        a(FL);
        a(HL);
        a(IL);
        a(LL);
        a(NL);
        a(OL);
        a(RL);
        a(TL);
        a(UL);
        YL("internal.CrossContainerSchema", $D());
        YL("internal.GtagSchema", EK());
        YL("internal.IframingStateSchema", HK());
        return ZL();
    }
    var iC;
    function aM() {
        iC.j.j.H = function (a, b, c) {
            bj.SANDBOXED_JS_SEMAPHORE = bj.SANDBOXED_JS_SEMAPHORE || 0;
            bj.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c);
            } finally {
                bj.SANDBOXED_JS_SEMAPHORE--;
            }
        };
    }
    function bM(a) {
        a &&
            hb(a, function (b, c) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d].replace(/^_*/, "");
                    rj[e] = rj[e] || [];
                    rj[e].push(b);
                }
            });
    }
    function cM(a) {
        zA(uA("developer_id." + a, !0), 0, {});
    }
    var dM = Array.isArray;
    function eM(a, b) {
        return Sc(a, b || null);
    }
    function X(a) {
        return window.encodeURIComponent(a);
    }
    function fM(a, b, c) {
        rc(a, b, c);
    }
    function gM(a, b) {
        if (!a) return !1;
        var c = Rj(Xj(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
                if (f >= 0 && c.indexOf(e, f) === f) return !0;
            }
        }
        return !1;
    }
    function hM(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && ((d[a[f][b]] = a[f][c]), (e = !0));
        return e ? d : null;
    }
    var qM = z.clearTimeout,
        rM = z.setTimeout;
    function sM(a, b, c) {
        if (Mp()) {
            b && F(b);
        } else return nc(a, b, c);
    }
    function tM() {
        return z.location.href;
    }
    function uM(a, b) {
        return Ej(a, b || 2);
    }
    function vM(a, b) {
        z[a] = b;
    }
    function wM(a, b, c) {
        b && (z[a] === void 0 || (c && !z[a])) && (z[a] = b);
        return z[a];
    }
    function xM(a, b) {
        if (Mp()) {
            b && F(b);
        } else pc(a, b);
    }
    var yM = {};
    var Y = { securityGroups: {} };

    (Y.securityGroups.v = ["google"]),
        (Y.__v = function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = uM(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return c !== void 0 ? c : a.vtp_defaultValue;
        }),
        (Y.__v.o = "v"),
        (Y.__v.isVendorTemplate = !0),
        (Y.__v.priorityOverride = 0),
        (Y.__v.isInfrastructure = !0),
        (Y.__v.runInSiloedMode = !1);

    (Y.securityGroups.rep = ["google"]),
        (Y.__rep = function (a) {
            var b = Lk(a.vtp_containerId),
                c = Om(b, !0),
                d,
                e;
            switch (c.prefix) {
                case "AW":
                    d = KF;
                    e = 1;
                    break;
                case "DC":
                    d = ZF;
                    e = 1;
                    break;
                case "GF":
                    d = dG;
                    e = 0;
                    break;
                case "HA":
                    d = jG;
                    e = 0;
                    break;
                case "UA":
                    d = HG;
                    e = 0;
                    break;
                case "MC":
                    d = BK(c, a.vtp_gtmEventId);
                    e = 2;
                    break;
                default:
                    F(a.vtp_gtmOnFailure);
                    return;
            }
            d ? (F(a.vtp_gtmOnSuccess), Xn(b, d, e), a.vtp_remoteConfig && co(b, a.vtp_remoteConfig || {})) : F(a.vtp_gtmOnFailure);
        }),
        (Y.__rep.o = "rep"),
        (Y.__rep.isVendorTemplate = !0),
        (Y.__rep.priorityOverride = 0),
        (Y.__rep.isInfrastructure = !1),
        (Y.__rep.runInSiloedMode = !0);
    (Y.securityGroups.read_event_data = ["google"]),
        (function () {
            function a(b, c) {
                return { key: c };
            }
            (function (b) {
                Y.__read_event_data = b;
                Y.__read_event_data.o = "read_event_data";
                Y.__read_event_data.isVendorTemplate = !0;
                Y.__read_event_data.priorityOverride = 0;
                Y.__read_event_data.isInfrastructure = !1;
                Y.__read_event_data.runInSiloedMode = !1;
            })(function (b) {
                var c = b.vtp_eventDataAccess,
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function (f, g) {
                        if (g != null && !$a(g)) throw e(f, { key: g }, "Key must be a string.");
                        if (c !== "any") {
                            try {
                                if (c === "specific" && g != null && hg(g, d)) return;
                            } catch (k) {
                                throw e(f, { key: g }, "Invalid key filter.");
                            }
                            throw e(f, { key: g }, "Prohibited read from event data.");
                        }
                    },
                    M: a,
                };
            });
        })();

    (Y.securityGroups.detect_user_provided_data = ["google"]),
        (function () {
            function a(b, c) {
                return { dataSource: c };
            }
            (function (b) {
                Y.__detect_user_provided_data = b;
                Y.__detect_user_provided_data.o = "detect_user_provided_data";
                Y.__detect_user_provided_data.isVendorTemplate = !0;
                Y.__detect_user_provided_data.priorityOverride = 0;
                Y.__detect_user_provided_data.isInfrastructure = !1;
                Y.__detect_user_provided_data.runInSiloedMode = !1;
            })(function (b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function (d, e) {
                        if (e !== "auto" && e !== "manual" && e !== "code") throw c(d, {}, "Unknown user provided data source.");
                        if (b.vtp_limitDataSources)
                            if (e !== "auto" || b.vtp_allowAutoDataSources) {
                                if (e === "manual" && !b.vtp_allowManualDataSources) throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
                                if (e === "code" && !b.vtp_allowCodeDataSources) throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
                            } else throw c(d, {}, "Automatic detection of user provided data is not allowed.");
                    },
                    M: a,
                };
            });
        })();

    (Y.securityGroups.get = ["google"]),
        (Y.__get = function (a) {
            var b = a.vtp_settings,
                c = b.eventParameters || {},
                d = String(a.vtp_eventName),
                e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            a.vtp_deferrable && (e.deferrable = !0);
            var f = xA(String(b.streamId), d, c);
            zA(f, e.eventId, e);
            a.vtp_gtmOnSuccess();
        }),
        (Y.__get.o = "get"),
        (Y.__get.isVendorTemplate = !0),
        (Y.__get.priorityOverride = 0),
        (Y.__get.isInfrastructure = !1),
        (Y.__get.runInSiloedMode = !1);

    (Y.securityGroups.zone = []),
        (function () {
            var a = {},
                b = function (d) {
                    for (var e = 0; e < d.length; e++) if (!d[e]) return !1;
                    return !0;
                },
                c = function (d) {
                    var e = b(d.vtp_boundaries || []);
                    if (d.vtp_gtmTagId in a) kD(a[d.vtp_gtmTagId], d.vtp_gtmEventId, e);
                    else if (e) {
                        var f = d.vtp_childContainers.map(function (n) {
                                return n.publicId;
                            }),
                            g = d.vtp_enableTypeRestrictions
                                ? d.vtp_whitelistedTypes.map(function (n) {
                                      return n.typeId;
                                  })
                                : null,
                            k = {};
                        var m = mD(d.vtp_gtmEventId, f, g, k, Vy(1, d.vtp_gtmEntityIndex, d.vtp_gtmEntityName), !!d.vtp_inheritParentConfig);
                        a[d.vtp_gtmTagId] = m;
                    }
                    F(d.vtp_gtmOnSuccess);
                };
            Y.__zone = c;
            Y.__zone.o = "zone";
            Y.__zone.isVendorTemplate = !0;
            Y.__zone.priorityOverride = 0;
            Y.__zone.isInfrastructure = !1;
            Y.__zone.runInSiloedMode = !1;
        })();

    var zM = {
        dataLayer: Fj,
        callback: function (a) {
            qj.hasOwnProperty(a) && Za(qj[a]) && qj[a]();
            delete qj[a];
        },
        bootstrap: 0,
    };
    function AM() {
        bj[Fk()] = bj[Fk()] || zM;
        Pk();
        Tk() ||
            hb(Uk(), function (d, e) {
                Ry(d, e.transportUrl, e.context);
                T(92);
            });
        rb(rj, Y.securityGroups);
        var a = Jk(Kk()),
            b,
            c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        hm(c, a == null ? void 0 : a.parent);
        (c !== 2 && c !== 4 && c !== 3) || T(142);
        qf = { hm: Hf };
    }
    var BM = !1;
    (function (a) {
        function b() {
            n = A.documentElement.getAttribute("data-tag-assistant-present");
            Vl(n) && (m = k.Mj);
        }
        function c() {
            m && hc ? g(m) : a();
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (A.referrer) {
                var e = Xj(A.referrer);
                d = Tj(e, "host") === "cct.google";
            }
            if (!d) {
                var f = Rp("googTaggyReferrer");
                d = !(!f.length || !f[0].length);
            }
            d && ((z["__TAGGY_INSTALLED"] = !0), nc("https://cct.google/taggy/agent.js"));
        }
        var g = function (v) {
                var t = "GTM",
                    w = "GTM";
                hj && ((t = "OGT"), (w = "GTAG"));
                var x = z["google.tagmanager.debugui2.queue"];
                x || ((x = []), (z["google.tagmanager.debugui2.queue"] = x), nc("https://" + aj.Df + "/debug/bootstrap?id=" + Nf.ctid + "&src=" + w + "&cond=" + v + "&gtm=" + Op()));
                var y = { messageType: "CONTAINER_STARTING", data: { scriptSource: hc, containerProduct: t, debug: !1, id: Nf.ctid, targetRef: { ctid: Nf.ctid, isDestination: xk() }, aliases: Bk(), destinations: yk() } };
                y.data.resume = function () {
                    a();
                };
                aj.il && (y.data.initialPublish = !0);
                x.push(y);
            },
            k = { Gl: 1, Oj: 2, ek: 3, Oi: 4, Mj: 5 };
        k[k.Gl] = "GTM_DEBUG_LEGACY_PARAM";
        k[k.Oj] = "GTM_DEBUG_PARAM";
        k[k.ek] = "REFERRER";
        k[k.Oi] = "COOKIE";
        k[k.Mj] = "EXTENSION_PARAM";
        var m = void 0,
            n = void 0,
            p = Rj(z.location, "query", !1, void 0, "gtm_debug");
        Vl(p) && (m = k.Oj);
        if (!m && A.referrer) {
            var q = Xj(A.referrer);
            Tj(q, "host") === "tagassistant.google.com" && (m = k.ek);
        }
        if (!m) {
            var r = Rp("__TAG_ASSISTANT");
            r.length && r[0].length && (m = k.Oi);
        }
        m || b();
        if (!m && Ul(n)) {
            var u = !1;
            sc(
                A,
                "TADebugSignal",
                function () {
                    u || ((u = !0), b(), c());
                },
                !1
            );
            z.setTimeout(function () {
                u || ((u = !0), b(), c());
            }, 200);
        } else c();
    })(function () {
        try {
            var a;
            if (!(a = BM)) {
                var b;
                a: {
                    for (var c = sk(), d = l(Ak()), e = d.next(); !e.done; e = d.next())
                        if (c.injectedFirstPartyContainers[e.value]) {
                            b = !0;
                            break a;
                        }
                    b = !1;
                }
                a = !b;
            }
            if (a) {
                var f = vj.Fb,
                    g = si.Pn;
                f.j = new Set();
                if (g !== "")
                    for (var k = l(g.split("~")), m = k.next(); !m.done; m = k.next()) {
                        var n = Number(m.value);
                        isNaN(n) || f.j.add(n);
                    }
                vj.K = "";
                vj.uc = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                vj.Ha = "ad_storage|analytics_storage|ad_user_data";
                vj.Z = "51n0";
                vj.Z = "5230";
                Nk();
                if (S(92)) {
                }
                ji[8] = !0;
                var p = Nf.ctid,
                    q = xk(),
                    r = S(111);
                r && ((Zl = 0), ($l = !0), fm());
                r && ((km = ""), (lm = p), (gm = hj), (mm = { ctid: p, isDestination: q }));
                if (!Am) {
                    Am = !0;
                    for (var u = Bm.length - 1; u >= 0; u--) Bm[u]();
                    Bm = [];
                }
                op();
                Km();
                var v = Hk();
                if (sk().canonical[v]) {
                    var t = bj.zones;
                    t && t.unregisterChild(Ak());
                    Cy().removeExternalRestrictions(Hk());
                } else {
                    Ny();
                    for (var w = data.resource || {}, x = w.macros || [], y = 0; y < x.length; y++) ef.push(x[y]);
                    for (var B = w.tags || [], C = 0; C < B.length; C++) jf.push(B[C]);
                    for (var D = w.predicates || [], E = 0; E < D.length; E++) hf.push(D[E]);
                    for (var K = w.rules || [], H = 0; H < K.length; H++) {
                        for (var N = K[H], J = {}, V = 0; V < N.length; V++) {
                            var ca = N[V][0];
                            J[ca] = Array.prototype.slice.call(N[V], 1);
                            (ca !== "if" && ca !== "unless") || pf(J[ca]);
                        }
                        gf.push(J);
                    }
                    lf = Y;
                    mf = TB;
                    Jf = new Qf();
                    var ba = data.sandboxed_scripts,
                        Z = data.security_groups;
                    a: {
                        var O = data.runtime || [],
                            fa = data.runtime_lines;
                        iC = new Ae();
                        aM();
                        df = hC();
                        var ha = iC,
                            ia = $L(),
                            Ca = new Xc("require", ia);
                        Ca.Ia();
                        ha.j.j.set("require", Ca);
                        for (var Ta = [], va = 0; va < O.length; va++) {
                            var Ja = O[va];
                            if (!Array.isArray(Ja) || Ja.length < 3) {
                                if (Ja.length === 0) continue;
                                break a;
                            }
                            fa && fa[va] && fa[va].length && Af(Ja, fa[va]);
                            try {
                                iC.execute(Ja), S(108) && lk && Ja[0] === 50 && Ta.push(Ja[1]);
                            } catch (bp) {}
                        }
                        S(108) && (rf = Ta);
                    }
                    if (ba && ba.length)
                        for (var cb = ["sandboxedScripts"], Bb = 0; Bb < ba.length; Bb++) {
                            var ld = ba[Bb].replace(/^_*/, "");
                            rj[ld] = cb;
                        }
                    bM(Z);
                    AM();
                    if (!lj)
                        for (var $h = Ql() ? zj(vj.Ha) : zj(vj.uc), cp = 0; cp < nm.length; cp++) {
                            var Oz = nm[cp],
                                CM = Oz,
                                DM = $h[Oz] ? "granted" : "denied";
                            ll().implicit(CM, DM);
                        }
                    nB();
                    nA = !1;
                    oA = 0;
                    if ((A.readyState === "interactive" && !A.createEventObject) || A.readyState === "complete") qA();
                    else {
                        sc(A, "DOMContentLoaded", qA);
                        sc(A, "readystatechange", qA);
                        if (A.createEventObject && A.documentElement.doScroll) {
                            var Pz = !0;
                            try {
                                Pz = !z.frameElement;
                            } catch (bp) {}
                            Pz && rA();
                        }
                        sc(z, "load", qA);
                    }
                    UA = !1;
                    A.readyState === "complete" ? WA() : sc(z, "load", WA);
                    mA();
                    lk && (xn(Kn), z.setInterval(Jn, 864e5), xn(WB), xn(rz), xn($w), xn(Nn), xn(eC), xn(Cz), S(108) && (xn(wz), xn(xz), xn(yz)), $B());
                    if (mk) {
                        kl();
                        cn();
                        var Qz,
                            Rz = Xj(z.location.href);
                        (Qz = Rz.hostname + Rz.pathname) && bl("dl", encodeURIComponent(Qz));
                        var dp;
                        var Sz = Nf.ctid;
                        if (Sz) {
                            var FM = vk.Je ? 1 : 0,
                                ai,
                                Tz = Jk(Kk());
                            ai = Tz && Tz.context;
                            dp = Sz + ";" + Nf.canonicalContainerId + ";" + (ai && ai.fromContainerExecution ? 1 : 0) + ";" + ((ai && ai.source) || 0) + ";" + FM;
                        } else dp = void 0;
                        var Uz = dp;
                        Uz && bl("tdp", Uz);
                        var Vz = No(!0);
                        Vz !== void 0 && bl("frm", String(Vz));
                        var ep;
                        var bi = Jk(Kk());
                        if (bi) {
                            for (; bi.parent; ) {
                                var Wz = Jk(bi.parent);
                                if (!Wz) break;
                                bi = Wz;
                            }
                            ep = bi;
                        } else ep = void 0;
                        var ff = ep;
                        if (!ff) T(144);
                        else if (S(57) || ff.canonicalContainerId) {
                            var fp;
                            a: {
                                var Xz,
                                    Yz = (Xz = ff.scriptElement) == null ? void 0 : Xz.src;
                                if (Yz) {
                                    var gp;
                                    try {
                                        var Zz;
                                        gp = (Zz = Gc()) == null ? void 0 : Zz.getEntriesByType("resource");
                                    } catch (bp) {}
                                    if (gp) {
                                        for (var $z = -1, aA = l(gp), hp = aA.next(); !hp.done; hp = aA.next()) {
                                            var bA = hp.value;
                                            if (bA.initiatorType === "script") {
                                                $z += 1;
                                                var ip = bA.name,
                                                    jp = Yz;
                                                S(56) && ((ip = ip.replace(oB, "")), (jp = jp.replace(oB, "")));
                                                if (ip === jp) {
                                                    fp = $z;
                                                    break a;
                                                }
                                            }
                                        }
                                        T(146);
                                    } else T(145);
                                }
                                fp = void 0;
                            }
                            var cA = fp;
                            cA !== void 0 && (ff.canonicalContainerId && bl("rtg", String(ff.canonicalContainerId)), bl("slo", String(cA)), bl("hlo", ff.htmlLoadOrder || "-1"), bl("lst", String(ff.loadScriptType || "0")));
                        }
                        var zk;
                        var ci = Ik();
                        if (ci)
                            if (ci.canonicalContainerId) zk = ci.canonicalContainerId;
                            else {
                                var dA,
                                    eA = ci.scriptContainerId || ((dA = ci.destinations) == null ? void 0 : dA[0]);
                                zk = eA ? "_" + eA : void 0;
                            }
                        else zk = void 0;
                        var fA = zk;
                        fA && bl("pcid", fA);
                        S(40) && (bl("bt", String(vj.C ? 2 : jj ? 1 : 0)), bl("ct", String(vj.C ? 0 : jj ? 1 : Mp() ? 2 : 3)));
                    }
                    JB();
                    Ll(1);
                    rD();
                    pj = ob();
                    zM.bootstrap = pj;
                    vj.H && mB();
                    if (S(92)) {
                    }
                    S(124) && (typeof z.name === "string" && tb(z.name, "web-pixel-sandbox-CUSTOM") && Hc() ? cM("dMDg0Yz") : z.Shopify && Hc() && cM("dNTU0Yz"));
                }
            }
        } catch (bp) {
            if ((Ll(4), lk && (!S(6) || vj.P))) {
                var GM = En(!0, !0);
                rc(GM);
            }
        }
    });
})();
"use strict";
var qrcodegen;
(function (qrcodegen) {
    /*---- QR Code symbol class ----*/

    class QrCode {
        /*-- Constructor (low level) and fields --*/
        // Creates a new QR Code with the given version number,
        // error correction level, data codeword bytes, and mask number.
        // This is a low-level API that most users should not use directly.
        // A mid-level API is the encodeSegments() function.
        constructor(
        // The version number of this QR Code, which is between 1 and 40 (inclusive).
        // This determines the size of this barcode.
        version, 
        // The error correction level used in this QR Code.
        errorCorrectionLevel, dataCodewords, msk) {
            this.version = version;
            this.errorCorrectionLevel = errorCorrectionLevel;
            // The modules of this QR Code (false = light, true = dark).
            // Immutable after constructor finishes. Accessed through getModule().
            this.modules = [];
            // Indicates function modules that are not subjected to masking. Discarded when constructor finishes.
            this.isFunction = [];
            // Check scalar arguments
            if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION)
                throw new RangeError("Version value out of range");
            if (msk < -1 || msk > 7)
                throw new RangeError("Mask value out of range");
            this.size = version * 4 + 17;
            // Initialize both grids to be size*size arrays of Boolean false
            let row = [];
            for (let i = 0; i < this.size; i++)
                row.push(false);
            for (let i = 0; i < this.size; i++) {
                this.modules.push(row.slice()); // Initially all light
                this.isFunction.push(row.slice());
            }
            // Compute ECC, draw modules
            this.drawFunctionPatterns();
            const allCodewords = this.addEccAndInterleave(dataCodewords);
            this.drawCodewords(allCodewords);
            // Do masking
            if (msk == -1) { // Automatically choose best mask
                let minPenalty = 1000000000;
                for (let i = 0; i < 8; i++) {
                    this.applyMask(i);
                    this.drawFormatBits(i);
                    const penalty = this.getPenaltyScore();
                    if (penalty < minPenalty) {
                        msk = i;
                        minPenalty = penalty;
                    }
                    this.applyMask(i); // Undoes the mask due to XOR
                }
            }
            assert(0 <= msk && msk <= 7);
            this.mask = msk;
            this.applyMask(msk); // Apply the final choice of mask
            this.drawFormatBits(msk); // Overwrite old format bits
            this.isFunction = [];
        }
        /*-- Static factory functions (high level) --*/
        // Returns a QR Code representing the given Unicode text string at the given error correction level.
        // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
        // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
        // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
        // ecl argument if it can be done without increasing the version.
        static encodeText(text, ecl) {
            const segs = qrcodegen.QrSegment.makeSegments(text);
            return QrCode.encodeSegments(segs, ecl);
        }
        // Returns a QR Code representing the given binary data at the given error correction level.
        // This function always encodes using the binary segment mode, not any text mode. The maximum number of
        // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
        // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
        static encodeBinary(data, ecl) {
            const seg = qrcodegen.QrSegment.makeBytes(data);
            return QrCode.encodeSegments([seg], ecl);
        }
        /*-- Static factory functions (mid level) --*/
        // Returns a QR Code representing the given segments with the given encoding parameters.
        // The smallest possible QR Code version within the given range is automatically
        // chosen for the output. Iff boostEcl is true, then the ECC level of the result
        // may be higher than the ecl argument if it can be done without increasing the
        // version. The mask number is either between 0 to 7 (inclusive) to force that
        // mask, or -1 to automatically choose an appropriate mask (which may be slow).
        // This function allows the user to create a custom sequence of segments that switches
        // between modes (such as alphanumeric and byte) to encode text in less space.
        // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
        static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
            if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION)
                || mask < -1 || mask > 7)
                throw new RangeError("Invalid value");
            // Find the minimal version number to use
            let version;
            let dataUsedBits;
            for (version = minVersion;; version++) {
                const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8; // Number of data bits available
                const usedBits = QrSegment.getTotalBits(segs, version);
                if (usedBits <= dataCapacityBits) {
                    dataUsedBits = usedBits;
                    break; // This version number is found to be suitable
                }
                if (version >= maxVersion) // All versions in the range could not fit the given data
                    throw new RangeError("Data too long");
            }
            // Increase the error correction level while the data still fits in the current version number
            for (const newEcl of [QrCode.Ecc.MEDIUM, QrCode.Ecc.QUARTILE, QrCode.Ecc.HIGH]) { // From low to high
                if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8)
                    ecl = newEcl;
            }
            // Concatenate all segments to create the data bit string
            let bb = [];
            for (const seg of segs) {
                appendBits(seg.mode.modeBits, 4, bb);
                appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
                for (const b of seg.getData())
                    bb.push(b);
            }
            assert(bb.length == dataUsedBits);
            // Add terminator and pad up to a byte if applicable
            const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
            assert(bb.length <= dataCapacityBits);
            appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
            appendBits(0, (8 - bb.length % 8) % 8, bb);
            assert(bb.length % 8 == 0);
            // Pad with alternating bytes until data capacity is reached
            for (let padByte = 0xEC; bb.length < dataCapacityBits; padByte ^= 0xEC ^ 0x11)
                appendBits(padByte, 8, bb);
            // Pack bits into bytes in big endian
            let dataCodewords = [];
            while (dataCodewords.length * 8 < bb.length)
                dataCodewords.push(0);
            bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << (7 - (i & 7)));
            // Create the QR Code object
            return new QrCode(version, ecl, dataCodewords, mask);
        }
        /*-- Accessor methods --*/
        // Returns the color of the module (pixel) at the given coordinates, which is false
        // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
        // If the given coordinates are out of bounds, then false (light) is returned.
        getModule(x, y) {
            return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
        }
        /*-- Private helper methods for constructor: Drawing function modules --*/
        // Reads this object's version field, and draws and marks all function modules.
        drawFunctionPatterns() {
            // Draw horizontal and vertical timing patterns
            for (let i = 0; i < this.size; i++) {
                this.setFunctionModule(6, i, i % 2 == 0);
                this.setFunctionModule(i, 6, i % 2 == 0);
            }
            // Draw 3 finder patterns (all corners except bottom right; overwrites some timing modules)
            this.drawFinderPattern(3, 3);
            this.drawFinderPattern(this.size - 4, 3);
            this.drawFinderPattern(3, this.size - 4);
            // Draw numerous alignment patterns
            const alignPatPos = this.getAlignmentPatternPositions();
            const numAlign = alignPatPos.length;
            for (let i = 0; i < numAlign; i++) {
                for (let j = 0; j < numAlign; j++) {
                    // Don't draw on the three finder corners
                    if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0))
                        this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
                }
            }
            // Draw configuration data
            this.drawFormatBits(0); // Dummy mask value; overwritten later in the constructor
            this.drawVersion();
        }
        // Draws two copies of the format bits (with its own error correction code)
        // based on the given mask and this object's error correction level field.
        drawFormatBits(mask) {
            // Calculate error correction code and pack bits
            const data = this.errorCorrectionLevel.formatBits << 3 | mask; // errCorrLvl is uint2, mask is uint3
            let rem = data;
            for (let i = 0; i < 10; i++)
                rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
            const bits = (data << 10 | rem) ^ 0x5412; // uint15
            assert(bits >>> 15 == 0);
            // Draw first copy
            for (let i = 0; i <= 5; i++)
                this.setFunctionModule(8, i, getBit(bits, i));
            this.setFunctionModule(8, 7, getBit(bits, 6));
            this.setFunctionModule(8, 8, getBit(bits, 7));
            this.setFunctionModule(7, 8, getBit(bits, 8));
            for (let i = 9; i < 15; i++)
                this.setFunctionModule(14 - i, 8, getBit(bits, i));
            // Draw second copy
            for (let i = 0; i < 8; i++)
                this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
            for (let i = 8; i < 15; i++)
                this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
            this.setFunctionModule(8, this.size - 8, true); // Always dark
        }
        // Draws two copies of the version bits (with its own error correction code),
        // based on this object's version field, iff 7 <= version <= 40.
        drawVersion() {
            if (this.version < 7)
                return;
            // Calculate error correction code and pack bits
            let rem = this.version; // version is uint6, in the range [7, 40]
            for (let i = 0; i < 12; i++)
                rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
            const bits = this.version << 12 | rem; // uint18
            assert(bits >>> 18 == 0);
            // Draw two copies
            for (let i = 0; i < 18; i++) {
                const color = getBit(bits, i);
                const a = this.size - 11 + i % 3;
                const b = Math.floor(i / 3);
                this.setFunctionModule(a, b, color);
                this.setFunctionModule(b, a, color);
            }
        }
        // Draws a 9*9 finder pattern including the border separator,
        // with the center module at (x, y). Modules can be out of bounds.
        drawFinderPattern(x, y) {
            for (let dy = -4; dy <= 4; dy++) {
                for (let dx = -4; dx <= 4; dx++) {
                    const dist = Math.max(Math.abs(dx), Math.abs(dy)); // Chebyshev/infinity norm
                    const xx = x + dx;
                    const yy = y + dy;
                    if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
                        this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
                }
            }
        }
        // Draws a 5*5 alignment pattern, with the center module
        // at (x, y). All modules must be in bounds.
        drawAlignmentPattern(x, y) {
            for (let dy = -2; dy <= 2; dy++) {
                for (let dx = -2; dx <= 2; dx++)
                    this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
            }
        }
        // Sets the color of a module and marks it as a function module.
        // Only used by the constructor. Coordinates must be in bounds.
        setFunctionModule(x, y, isDark) {
            this.modules[y][x] = isDark;
            this.isFunction[y][x] = true;
        }
        /*-- Private helper methods for constructor: Codewords and masking --*/
        // Returns a new byte string representing the given data with the appropriate error correction
        // codewords appended to it, based on this object's version and error correction level.
        addEccAndInterleave(data) {
            const ver = this.version;
            const ecl = this.errorCorrectionLevel;
            if (data.length != QrCode.getNumDataCodewords(ver, ecl))
                throw new RangeError("Invalid argument");
            // Calculate parameter numbers
            const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
            const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
            const rawCodewords = Math.floor(QrCode.getNumRawDataModules(ver) / 8);
            const numShortBlocks = numBlocks - rawCodewords % numBlocks;
            const shortBlockLen = Math.floor(rawCodewords / numBlocks);
            // Split data into blocks and append ECC to each block
            let blocks = [];
            const rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
            for (let i = 0, k = 0; i < numBlocks; i++) {
                let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
                k += dat.length;
                const ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
                if (i < numShortBlocks)
                    dat.push(0);
                blocks.push(dat.concat(ecc));
            }
            // Interleave (not concatenate) the bytes from every block into a single sequence
            let result = [];
            for (let i = 0; i < blocks[0].length; i++) {
                blocks.forEach((block, j) => {
                    // Skip the padding byte in short blocks
                    if (i != shortBlockLen - blockEccLen || j >= numShortBlocks)
                        result.push(block[i]);
                });
            }
            assert(result.length == rawCodewords);
            return result;
        }
        // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
        // data area of this QR Code. Function modules need to be marked off before this is called.
        drawCodewords(data) {
            if (data.length != Math.floor(QrCode.getNumRawDataModules(this.version) / 8))
                throw new RangeError("Invalid argument");
            let i = 0; // Bit index into the data
            // Do the funny zigzag scan
            for (let right = this.size - 1; right >= 1; right -= 2) { // Index of right column in each column pair
                if (right == 6)
                    right = 5;
                for (let vert = 0; vert < this.size; vert++) { // Vertical counter
                    for (let j = 0; j < 2; j++) {
                        const x = right - j; // Actual x coordinate
                        const upward = ((right + 1) & 2) == 0;
                        const y = upward ? this.size - 1 - vert : vert; // Actual y coordinate
                        if (!this.isFunction[y][x] && i < data.length * 8) {
                            this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
                            i++;
                        }
                        // If this QR Code has any remainder bits (0 to 7), they were assigned as
                        // 0/false/light by the constructor and are left unchanged by this method
                    }
                }
            }
            assert(i == data.length * 8);
        }
        // XORs the codeword modules in this QR Code with the given mask pattern.
        // The function modules must be marked and the codeword bits must be drawn
        // before masking. Due to the arithmetic of XOR, calling applyMask() with
        // the same mask value a second time will undo the mask. A final well-formed
        // QR Code needs exactly one (not zero, two, etc.) mask applied.
        applyMask(mask) {
            if (mask < 0 || mask > 7)
                throw new RangeError("Mask value out of range");
            for (let y = 0; y < this.size; y++) {
                for (let x = 0; x < this.size; x++) {
                    let invert;
                    switch (mask) {
                        case 0:
                            invert = (x + y) % 2 == 0;
                            break;
                        case 1:
                            invert = y % 2 == 0;
                            break;
                        case 2:
                            invert = x % 3 == 0;
                            break;
                        case 3:
                            invert = (x + y) % 3 == 0;
                            break;
                        case 4:
                            invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
                            break;
                        case 5:
                            invert = x * y % 2 + x * y % 3 == 0;
                            break;
                        case 6:
                            invert = (x * y % 2 + x * y % 3) % 2 == 0;
                            break;
                        case 7:
                            invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
                            break;
                        default: throw new Error("Unreachable");
                    }
                    if (!this.isFunction[y][x] && invert)
                        this.modules[y][x] = !this.modules[y][x];
                }
            }
        }
        // Calculates and returns the penalty score based on state of this QR Code's current modules.
        // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
        getPenaltyScore() {
            let result = 0;
            // Adjacent modules in row having same color, and finder-like patterns
            for (let y = 0; y < this.size; y++) {
                let runColor = false;
                let runX = 0;
                let runHistory = [0, 0, 0, 0, 0, 0, 0];
                for (let x = 0; x < this.size; x++) {
                    if (this.modules[y][x] == runColor) {
                        runX++;
                        if (runX == 5)
                            result += QrCode.PENALTY_N1;
                        else if (runX > 5)
                            result++;
                    }
                    else {
                        this.finderPenaltyAddHistory(runX, runHistory);
                        if (!runColor)
                            result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
                        runColor = this.modules[y][x];
                        runX = 1;
                    }
                }
                result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
            }
            // Adjacent modules in column having same color, and finder-like patterns
            for (let x = 0; x < this.size; x++) {
                let runColor = false;
                let runY = 0;
                let runHistory = [0, 0, 0, 0, 0, 0, 0];
                for (let y = 0; y < this.size; y++) {
                    if (this.modules[y][x] == runColor) {
                        runY++;
                        if (runY == 5)
                            result += QrCode.PENALTY_N1;
                        else if (runY > 5)
                            result++;
                    }
                    else {
                        this.finderPenaltyAddHistory(runY, runHistory);
                        if (!runColor)
                            result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
                        runColor = this.modules[y][x];
                        runY = 1;
                    }
                }
                result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * QrCode.PENALTY_N3;
            }
            // 2*2 blocks of modules having same color
            for (let y = 0; y < this.size - 1; y++) {
                for (let x = 0; x < this.size - 1; x++) {
                    const color = this.modules[y][x];
                    if (color == this.modules[y][x + 1] &&
                        color == this.modules[y + 1][x] &&
                        color == this.modules[y + 1][x + 1])
                        result += QrCode.PENALTY_N2;
                }
            }
            // Balance of dark and light modules
            let dark = 0;
            for (const row of this.modules)
                dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
            const total = this.size * this.size; // Note that size is odd, so dark/total != 1/2
            // Compute the smallest integer k >= 0 such that (45-5k)% <= dark/total <= (55+5k)%
            const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
            assert(0 <= k && k <= 9);
            result += k * QrCode.PENALTY_N4;
            assert(0 <= result && result <= 2568888); // Non-tight upper bound based on default values of PENALTY_N1, ..., N4
            return result;
        }
        /*-- Private helper functions --*/
        // Returns an ascending list of positions of alignment patterns for this version number.
        // Each position is in the range [0,177), and are used on both the x and y axes.
        // This could be implemented as lookup table of 40 variable-length lists of integers.
        getAlignmentPatternPositions() {
            if (this.version == 1)
                return [];
            else {
                const numAlign = Math.floor(this.version / 7) + 2;
                const step = (this.version == 32) ? 26 :
                    Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
                let result = [6];
                for (let pos = this.size - 7; result.length < numAlign; pos -= step)
                    result.splice(1, 0, pos);
                return result;
            }
        }
        // Returns the number of data bits that can be stored in a QR Code of the given version number, after
        // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
        // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
        static getNumRawDataModules(ver) {
            if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION)
                throw new RangeError("Version number out of range");
            let result = (16 * ver + 128) * ver + 64;
            if (ver >= 2) {
                const numAlign = Math.floor(ver / 7) + 2;
                result -= (25 * numAlign - 10) * numAlign - 55;
                if (ver >= 7)
                    result -= 36;
            }
            assert(208 <= result && result <= 29648);
            return result;
        }
        // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
        // QR Code of the given version number and error correction level, with remainder bits discarded.
        // This stateless pure function could be implemented as a (40*4)-cell lookup table.
        static getNumDataCodewords(ver, ecl) {
            return Math.floor(QrCode.getNumRawDataModules(ver) / 8) -
                QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] *
                    QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
        }
        // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
        // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
        static reedSolomonComputeDivisor(degree) {
            if (degree < 1 || degree > 255)
                throw new RangeError("Degree out of range");
            // Polynomial coefficients are stored from highest to lowest power, excluding the leading term which is always 1.
            // For example the polynomial x^3 + 255x^2 + 8x + 93 is stored as the uint8 array [255, 8, 93].
            let result = [];
            for (let i = 0; i < degree - 1; i++)
                result.push(0);
            result.push(1); // Start off with the monomial x^0
            // Compute the product polynomial (x - r^0) * (x - r^1) * (x - r^2) * ... * (x - r^{degree-1}),
            // and drop the highest monomial term which is always 1x^degree.
            // Note that r = 0x02, which is a generator element of this field GF(2^8/0x11D).
            let root = 1;
            for (let i = 0; i < degree; i++) {
                // Multiply the current product by (x - r^i)
                for (let j = 0; j < result.length; j++) {
                    result[j] = QrCode.reedSolomonMultiply(result[j], root);
                    if (j + 1 < result.length)
                        result[j] ^= result[j + 1];
                }
                root = QrCode.reedSolomonMultiply(root, 0x02);
            }
            return result;
        }
        // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
        static reedSolomonComputeRemainder(data, divisor) {
            let result = divisor.map(_ => 0);
            for (const b of data) { // Polynomial division
                const factor = b ^ result.shift();
                result.push(0);
                divisor.forEach((coef, i) => result[i] ^= QrCode.reedSolomonMultiply(coef, factor));
            }
            return result;
        }
        // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
        // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
        static reedSolomonMultiply(x, y) {
            if (x >>> 8 != 0 || y >>> 8 != 0)
                throw new RangeError("Byte out of range");
            // Russian peasant multiplication
            let z = 0;
            for (let i = 7; i >= 0; i--) {
                z = (z << 1) ^ ((z >>> 7) * 0x11D);
                z ^= ((y >>> i) & 1) * x;
            }
            assert(z >>> 8 == 0);
            return z;
        }
        // Can only be called immediately after a light run is added, and
        // returns either 0, 1, or 2. A helper function for getPenaltyScore().
        finderPenaltyCountPatterns(runHistory) {
            const n = runHistory[1];
            assert(n <= this.size * 3);
            const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
            return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0)
                + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
        }
        // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
        finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
            if (currentRunColor) { // Terminate dark run
                this.finderPenaltyAddHistory(currentRunLength, runHistory);
                currentRunLength = 0;
            }
            currentRunLength += this.size; // Add light border to final run
            this.finderPenaltyAddHistory(currentRunLength, runHistory);
            return this.finderPenaltyCountPatterns(runHistory);
        }
        // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
        finderPenaltyAddHistory(currentRunLength, runHistory) {
            if (runHistory[0] == 0)
                currentRunLength += this.size; // Add light border to initial run
            runHistory.pop();
            runHistory.unshift(currentRunLength);
        }
    }
    /*-- Constants and tables --*/
    // The minimum version number supported in the QR Code Model 2 standard.
    QrCode.MIN_VERSION = 1;
    // The maximum version number supported in the QR Code Model 2 standard.
    QrCode.MAX_VERSION = 40;
    // For use in getPenaltyScore(), when evaluating which mask is best.
    QrCode.PENALTY_N1 = 3;
    QrCode.PENALTY_N2 = 3;
    QrCode.PENALTY_N3 = 40;
    QrCode.PENALTY_N4 = 10;
    QrCode.ECC_CODEWORDS_PER_BLOCK = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
        [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], // High
    ];
    QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
        [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
        [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
        [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81], // High
    ];
    qrcodegen.QrCode = QrCode;
    // Appends the given number of low-order bits of the given value
    // to the given buffer. Requires 0 <= len <= 31 and 0 <= val < 2^len.
    function appendBits(val, len, bb) {
        if (len < 0 || len > 31 || val >>> len != 0)
            throw new RangeError("Value out of range");
        for (let i = len - 1; i >= 0; i--) // Append bit by bit
            bb.push((val >>> i) & 1);
    }
    // Returns true iff the i'th bit of x is set to 1.
    function getBit(x, i) {
        return ((x >>> i) & 1) != 0;
    }
    // Throws an exception if the given condition is false.
    function assert(cond) {
        if (!cond)
            throw new Error("Assertion error");
    }
    /*---- Data segment class ----*/
    /*
     * A segment of character/binary/control data in a QR Code symbol.
     * Instances of this class are immutable.
     * The mid-level way to create a segment is to take the payload data
     * and call a static factory function such as QrSegment.makeNumeric().
     * The low-level way to create a segment is to custom-make the bit buffer
     * and call the QrSegment() constructor with appropriate values.
     * This segment class imposes no length restrictions, but QR Codes have restrictions.
     * Even in the most favorable conditions, a QR Code can only hold 7089 characters of data.
     * Any segment longer than this is meaningless for the purpose of generating QR Codes.
     */
    class QrSegment {
        /*-- Constructor (low level) and fields --*/
        // Creates a new QR Code segment with the given attributes and data.
        // The character count (numChars) must agree with the mode and the bit buffer length,
        // but the constraint isn't checked. The given bit buffer is cloned and stored.
        constructor(
        // The mode indicator of this segment.
        mode, 
        // The length of this segment's unencoded data. Measured in characters for
        // numeric/alphanumeric/kanji mode, bytes for byte mode, and 0 for ECI mode.
        // Always zero or positive. Not the same as the data's bit length.
        numChars, 
        // The data bits of this segment. Accessed through getData().
        bitData) {
            this.mode = mode;
            this.numChars = numChars;
            this.bitData = bitData;
            if (numChars < 0)
                throw new RangeError("Invalid argument");
            this.bitData = bitData.slice(); // Make defensive copy
        }
        /*-- Static factory functions (mid level) --*/
        // Returns a segment representing the given binary data encoded in
        // byte mode. All input byte arrays are acceptable. Any text string
        // can be converted to UTF-8 bytes and encoded as a byte mode segment.
        static makeBytes(data) {
            let bb = [];
            for (const b of data)
                appendBits(b, 8, bb);
            return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
        }
        // Returns a segment representing the given string of decimal digits encoded in numeric mode.
        static makeNumeric(digits) {
            if (!QrSegment.isNumeric(digits))
                throw new RangeError("String contains non-numeric characters");
            let bb = [];
            for (let i = 0; i < digits.length;) { // Consume up to 3 digits per iteration
                const n = Math.min(digits.length - i, 3);
                appendBits(parseInt(digits.substr(i, n), 10), n * 3 + 1, bb);
                i += n;
            }
            return new QrSegment(QrSegment.Mode.NUMERIC, digits.length, bb);
        }
        // Returns a segment representing the given text string encoded in alphanumeric mode.
        // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
        // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static makeAlphanumeric(text) {
            if (!QrSegment.isAlphanumeric(text))
                throw new RangeError("String contains unencodable characters in alphanumeric mode");
            let bb = [];
            let i;
            for (i = 0; i + 2 <= text.length; i += 2) { // Process groups of 2
                let temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
                temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
                appendBits(temp, 11, bb);
            }
            if (i < text.length) // 1 character remaining
                appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
            return new QrSegment(QrSegment.Mode.ALPHANUMERIC, text.length, bb);
        }
        // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
        // The result may use various segment modes and switch modes to optimize the length of the bit stream.
        static makeSegments(text) {
            // Select the most efficient segment encoding automatically
            if (text == "")
                return [];
            else if (QrSegment.isNumeric(text))
                return [QrSegment.makeNumeric(text)];
            else if (QrSegment.isAlphanumeric(text))
                return [QrSegment.makeAlphanumeric(text)];
            else
                return [QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))];
        }
        // Returns a segment representing an Extended Channel Interpretation
        // (ECI) designator with the given assignment value.
        static makeEci(assignVal) {
            let bb = [];
            if (assignVal < 0)
                throw new RangeError("ECI assignment value out of range");
            else if (assignVal < (1 << 7))
                appendBits(assignVal, 8, bb);
            else if (assignVal < (1 << 14)) {
                appendBits(0b10, 2, bb);
                appendBits(assignVal, 14, bb);
            }
            else if (assignVal < 1000000) {
                appendBits(0b110, 3, bb);
                appendBits(assignVal, 21, bb);
            }
            else
                throw new RangeError("ECI assignment value out of range");
            return new QrSegment(QrSegment.Mode.ECI, 0, bb);
        }
        // Tests whether the given string can be encoded as a segment in numeric mode.
        // A string is encodable iff each character is in the range 0 to 9.
        static isNumeric(text) {
            return QrSegment.NUMERIC_REGEX.test(text);
        }
        // Tests whether the given string can be encoded as a segment in alphanumeric mode.
        // A string is encodable iff each character is in the following set: 0 to 9, A to Z
        // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static isAlphanumeric(text) {
            return QrSegment.ALPHANUMERIC_REGEX.test(text);
        }
        /*-- Methods --*/
        // Returns a new copy of the data bits of this segment.
        getData() {
            return this.bitData.slice(); // Make defensive copy
        }
        // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
        // the given version. The result is infinity if a segment has too many characters to fit its length field.
        static getTotalBits(segs, version) {
            let result = 0;
            for (const seg of segs) {
                const ccbits = seg.mode.numCharCountBits(version);
                if (seg.numChars >= (1 << ccbits))
                    return Infinity; // The segment's length doesn't fit the field's bit width
                result += 4 + ccbits + seg.bitData.length;
            }
            return result;
        }
        // Returns a new array of bytes representing the given string encoded in UTF-8.
        static toUtf8ByteArray(str) {
            str = encodeURI(str);
            let result = [];
            for (let i = 0; i < str.length; i++) {
                if (str.charAt(i) != "%")
                    result.push(str.charCodeAt(i));
                else {
                    result.push(parseInt(str.substr(i + 1, 2), 16));
                    i += 2;
                }
            }
            return result;
        }
    }
    /*-- Constants --*/
    // Describes precisely all strings that are encodable in numeric mode.
    QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
    // Describes precisely all strings that are encodable in alphanumeric mode.
    QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
    // The set of all legal characters in alphanumeric mode,
    // where each character value maps to the index in the string.
    QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    qrcodegen.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
/*---- Public helper enumeration ----*/
(function (qrcodegen) {
    var QrCode;
    (function (QrCode) {
        /*
         * The error correction level in a QR Code symbol. Immutable.
         */
        class Ecc {
            /*-- Constructor and fields --*/
            constructor(
            // In the range 0 to 3 (unsigned 2-bit integer).
            ordinal, 
            // (Package-private) In the range 0 to 3 (unsigned 2-bit integer).
            formatBits) {
                this.ordinal = ordinal;
                this.formatBits = formatBits;
            }
        }
        /*-- Constants --*/
        Ecc.LOW = new Ecc(0, 1); // The QR Code can tolerate about  7% erroneous codewords
        Ecc.MEDIUM = new Ecc(1, 0); // The QR Code can tolerate about 15% erroneous codewords
        Ecc.QUARTILE = new Ecc(2, 3); // The QR Code can tolerate about 25% erroneous codewords
        Ecc.HIGH = new Ecc(3, 2); // The QR Code can tolerate about 30% erroneous codewords
        QrCode.Ecc = Ecc;
    })(QrCode = qrcodegen.QrCode || (qrcodegen.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
/*---- Public helper enumeration ----*/
(function (qrcodegen) {
    var QrSegment;
    (function (QrSegment) {
        /*
         * Describes how a segment's data bits are interpreted. Immutable.
         */
        class Mode {
            /*-- Constructor and fields --*/
            constructor(
            // The mode indicator bits, which is a uint4 value (range 0 to 15).
            modeBits, 
            // Number of character count bits for three different version ranges.
            numBitsCharCount) {
                this.modeBits = modeBits;
                this.numBitsCharCount = numBitsCharCount;
            }
            /*-- Method --*/
            // (Package-private) Returns the bit width of the character count field for a segment in
            // this mode in a QR Code at the given version number. The result is in the range [0, 16].
            numCharCountBits(ver) {
                return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
            }
        }
        /*-- Constants --*/
        Mode.NUMERIC = new Mode(0x1, [10, 12, 14]);
        Mode.ALPHANUMERIC = new Mode(0x2, [9, 11, 13]);
        Mode.BYTE = new Mode(0x4, [8, 16, 16]);
        Mode.KANJI = new Mode(0x8, [8, 10, 12]);
        Mode.ECI = new Mode(0x7, [0, 0, 0]);
        QrSegment.Mode = Mode;
    })(QrSegment = qrcodegen.QrSegment || (qrcodegen.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
"use strict";
var qrcodegen;
(function (qrcodegen) {
    /*---- QR Code symbol class ----*/

    class QrCode {
        /*-- Constructor (low level) and fields --*/
        // Creates a new QR Code with the given version number,
        // error correction level, data codeword bytes, and mask number.
        // This is a low-level API that most users should not use directly.
        // A mid-level API is the encodeSegments() function.
        constructor(
        // The version number of this QR Code, which is between 1 and 40 (inclusive).
        // This determines the size of this barcode.
        version, 
        // The error correction level used in this QR Code.
        errorCorrectionLevel, dataCodewords, msk) {
            this.version = version;
            this.errorCorrectionLevel = errorCorrectionLevel;
            // The modules of this QR Code (false = light, true = dark).
            // Immutable after constructor finishes. Accessed through getModule().
            this.modules = [];
            // Indicates function modules that are not subjected to masking. Discarded when constructor finishes.
            this.isFunction = [];
            // Check scalar arguments
            if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION)
                throw new RangeError("Version value out of range");
            if (msk < -1 || msk > 7)
                throw new RangeError("Mask value out of range");
            this.size = version * 4 + 17;
            // Initialize both grids to be size*size arrays of Boolean false
            let row = [];
            for (let i = 0; i < this.size; i++)
                row.push(false);
            for (let i = 0; i < this.size; i++) {
                this.modules.push(row.slice()); // Initially all light
                this.isFunction.push(row.slice());
            }
            // Compute ECC, draw modules
            this.drawFunctionPatterns();
            const allCodewords = this.addEccAndInterleave(dataCodewords);
            this.drawCodewords(allCodewords);
            // Do masking
            if (msk == -1) { // Automatically choose best mask
                let minPenalty = 1000000000;
                for (let i = 0; i < 8; i++) {
                    this.applyMask(i);
                    this.drawFormatBits(i);
                    const penalty = this.getPenaltyScore();
                    if (penalty < minPenalty) {
                        msk = i;
                        minPenalty = penalty;
                    }
                    this.applyMask(i); // Undoes the mask due to XOR
                }
            }
            assert(0 <= msk && msk <= 7);
            this.mask = msk;
            this.applyMask(msk); // Apply the final choice of mask
            this.drawFormatBits(msk); // Overwrite old format bits
            this.isFunction = [];
        }
        /*-- Static factory functions (high level) --*/
        // Returns a QR Code representing the given Unicode text string at the given error correction level.
        // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
        // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
        // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
        // ecl argument if it can be done without increasing the version.
        static encodeText(text, ecl) {
            const segs = qrcodegen.QrSegment.makeSegments(text);
            return QrCode.encodeSegments(segs, ecl);
        }
        // Returns a QR Code representing the given binary data at the given error correction level.
        // This function always encodes using the binary segment mode, not any text mode. The maximum number of
        // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
        // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
        static encodeBinary(data, ecl) {
            const seg = qrcodegen.QrSegment.makeBytes(data);
            return QrCode.encodeSegments([seg], ecl);
        }
        /*-- Static factory functions (mid level) --*/
        // Returns a QR Code representing the given segments with the given encoding parameters.
        // The smallest possible QR Code version within the given range is automatically
        // chosen for the output. Iff boostEcl is true, then the ECC level of the result
        // may be higher than the ecl argument if it can be done without increasing the
        // version. The mask number is either between 0 to 7 (inclusive) to force that
        // mask, or -1 to automatically choose an appropriate mask (which may be slow).
        // This function allows the user to create a custom sequence of segments that switches
        // between modes (such as alphanumeric and byte) to encode text in less space.
        // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
        static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
            if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION)
                || mask < -1 || mask > 7)
                throw new RangeError("Invalid value");
            // Find the minimal version number to use
            let version;
            let dataUsedBits;
            for (version = minVersion;; version++) {
                const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8; // Number of data bits available
                const usedBits = QrSegment.getTotalBits(segs, version);
                if (usedBits <= dataCapacityBits) {
                    dataUsedBits = usedBits;
                    break; // This version number is found to be suitable
                }
                if (version >= maxVersion) // All versions in the range could not fit the given data
                    throw new RangeError("Data too long");
            }
            // Increase the error correction level while the data still fits in the current version number
            for (const newEcl of [QrCode.Ecc.MEDIUM, QrCode.Ecc.QUARTILE, QrCode.Ecc.HIGH]) { // From low to high
                if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8)
                    ecl = newEcl;
            }
            // Concatenate all segments to create the data bit string
            let bb = [];
            for (const seg of segs) {
                appendBits(seg.mode.modeBits, 4, bb);
                appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
                for (const b of seg.getData())
                    bb.push(b);
            }
            assert(bb.length == dataUsedBits);
            // Add terminator and pad up to a byte if applicable
            const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
            assert(bb.length <= dataCapacityBits);
            appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
            appendBits(0, (8 - bb.length % 8) % 8, bb);
            assert(bb.length % 8 == 0);
            // Pad with alternating bytes until data capacity is reached
            for (let padByte = 0xEC; bb.length < dataCapacityBits; padByte ^= 0xEC ^ 0x11)
                appendBits(padByte, 8, bb);
            // Pack bits into bytes in big endian
            let dataCodewords = [];
            while (dataCodewords.length * 8 < bb.length)
                dataCodewords.push(0);
            bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << (7 - (i & 7)));
            // Create the QR Code object
            return new QrCode(version, ecl, dataCodewords, mask);
        }
        /*-- Accessor methods --*/
        // Returns the color of the module (pixel) at the given coordinates, which is false
        // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
        // If the given coordinates are out of bounds, then false (light) is returned.
        getModule(x, y) {
            return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
        }
        /*-- Private helper methods for constructor: Drawing function modules --*/
        // Reads this object's version field, and draws and marks all function modules.
        drawFunctionPatterns() {
            // Draw horizontal and vertical timing patterns
            for (let i = 0; i < this.size; i++) {
                this.setFunctionModule(6, i, i % 2 == 0);
                this.setFunctionModule(i, 6, i % 2 == 0);
            }
            // Draw 3 finder patterns (all corners except bottom right; overwrites some timing modules)
            this.drawFinderPattern(3, 3);
            this.drawFinderPattern(this.size - 4, 3);
            this.drawFinderPattern(3, this.size - 4);
            // Draw numerous alignment patterns
            const alignPatPos = this.getAlignmentPatternPositions();
            const numAlign = alignPatPos.length;
            for (let i = 0; i < numAlign; i++) {
                for (let j = 0; j < numAlign; j++) {
                    // Don't draw on the three finder corners
                    if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0))
                        this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
                }
            }
            // Draw configuration data
            this.drawFormatBits(0); // Dummy mask value; overwritten later in the constructor
            this.drawVersion();
        }
        // Draws two copies of the format bits (with its own error correction code)
        // based on the given mask and this object's error correction level field.
        drawFormatBits(mask) {
            // Calculate error correction code and pack bits
            const data = this.errorCorrectionLevel.formatBits << 3 | mask; // errCorrLvl is uint2, mask is uint3
            let rem = data;
            for (let i = 0; i < 10; i++)
                rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
            const bits = (data << 10 | rem) ^ 0x5412; // uint15
            assert(bits >>> 15 == 0);
            // Draw first copy
            for (let i = 0; i <= 5; i++)
                this.setFunctionModule(8, i, getBit(bits, i));
            this.setFunctionModule(8, 7, getBit(bits, 6));
            this.setFunctionModule(8, 8, getBit(bits, 7));
            this.setFunctionModule(7, 8, getBit(bits, 8));
            for (let i = 9; i < 15; i++)
                this.setFunctionModule(14 - i, 8, getBit(bits, i));
            // Draw second copy
            for (let i = 0; i < 8; i++)
                this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
            for (let i = 8; i < 15; i++)
                this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
            this.setFunctionModule(8, this.size - 8, true); // Always dark
        }
        // Draws two copies of the version bits (with its own error correction code),
        // based on this object's version field, iff 7 <= version <= 40.
        drawVersion() {
            if (this.version < 7)
                return;
            // Calculate error correction code and pack bits
            let rem = this.version; // version is uint6, in the range [7, 40]
            for (let i = 0; i < 12; i++)
                rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
            const bits = this.version << 12 | rem; // uint18
            assert(bits >>> 18 == 0);
            // Draw two copies
            for (let i = 0; i < 18; i++) {
                const color = getBit(bits, i);
                const a = this.size - 11 + i % 3;
                const b = Math.floor(i / 3);
                this.setFunctionModule(a, b, color);
                this.setFunctionModule(b, a, color);
            }
        }
        // Draws a 9*9 finder pattern including the border separator,
        // with the center module at (x, y). Modules can be out of bounds.
        drawFinderPattern(x, y) {
            for (let dy = -4; dy <= 4; dy++) {
                for (let dx = -4; dx <= 4; dx++) {
                    const dist = Math.max(Math.abs(dx), Math.abs(dy)); // Chebyshev/infinity norm
                    const xx = x + dx;
                    const yy = y + dy;
                    if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
                        this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
                }
            }
        }
        // Draws a 5*5 alignment pattern, with the center module
        // at (x, y). All modules must be in bounds.
        drawAlignmentPattern(x, y) {
            for (let dy = -2; dy <= 2; dy++) {
                for (let dx = -2; dx <= 2; dx++)
                    this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
            }
        }
        // Sets the color of a module and marks it as a function module.
        // Only used by the constructor. Coordinates must be in bounds.
        setFunctionModule(x, y, isDark) {
            this.modules[y][x] = isDark;
            this.isFunction[y][x] = true;
        }
        /*-- Private helper methods for constructor: Codewords and masking --*/
        // Returns a new byte string representing the given data with the appropriate error correction
        // codewords appended to it, based on this object's version and error correction level.
        addEccAndInterleave(data) {
            const ver = this.version;
            const ecl = this.errorCorrectionLevel;
            if (data.length != QrCode.getNumDataCodewords(ver, ecl))
                throw new RangeError("Invalid argument");
            // Calculate parameter numbers
            const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
            const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
            const rawCodewords = Math.floor(QrCode.getNumRawDataModules(ver) / 8);
            const numShortBlocks = numBlocks - rawCodewords % numBlocks;
            const shortBlockLen = Math.floor(rawCodewords / numBlocks);
            // Split data into blocks and append ECC to each block
            let blocks = [];
            const rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
            for (let i = 0, k = 0; i < numBlocks; i++) {
                let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
                k += dat.length;
                const ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
                if (i < numShortBlocks)
                    dat.push(0);
                blocks.push(dat.concat(ecc));
            }
            // Interleave (not concatenate) the bytes from every block into a single sequence
            let result = [];
            for (let i = 0; i < blocks[0].length; i++) {
                blocks.forEach((block, j) => {
                    // Skip the padding byte in short blocks
                    if (i != shortBlockLen - blockEccLen || j >= numShortBlocks)
                        result.push(block[i]);
                });
            }
            assert(result.length == rawCodewords);
            return result;
        }
        // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
        // data area of this QR Code. Function modules need to be marked off before this is called.
        drawCodewords(data) {
            if (data.length != Math.floor(QrCode.getNumRawDataModules(this.version) / 8))
                throw new RangeError("Invalid argument");
            let i = 0; // Bit index into the data
            // Do the funny zigzag scan
            for (let right = this.size - 1; right >= 1; right -= 2) { // Index of right column in each column pair
                if (right == 6)
                    right = 5;
                for (let vert = 0; vert < this.size; vert++) { // Vertical counter
                    for (let j = 0; j < 2; j++) {
                        const x = right - j; // Actual x coordinate
                        const upward = ((right + 1) & 2) == 0;
                        const y = upward ? this.size - 1 - vert : vert; // Actual y coordinate
                        if (!this.isFunction[y][x] && i < data.length * 8) {
                            this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
                            i++;
                        }
                        // If this QR Code has any remainder bits (0 to 7), they were assigned as
                        // 0/false/light by the constructor and are left unchanged by this method
                    }
                }
            }
            assert(i == data.length * 8);
        }
        // XORs the codeword modules in this QR Code with the given mask pattern.
        // The function modules must be marked and the codeword bits must be drawn
        // before masking. Due to the arithmetic of XOR, calling applyMask() with
        // the same mask value a second time will undo the mask. A final well-formed
        // QR Code needs exactly one (not zero, two, etc.) mask applied.
        applyMask(mask) {
            if (mask < 0 || mask > 7)
                throw new RangeError("Mask value out of range");
            for (let y = 0; y < this.size; y++) {
                for (let x = 0; x < this.size; x++) {
                    let invert;
                    switch (mask) {
                        case 0:
                            invert = (x + y) % 2 == 0;
                            break;
                        case 1:
                            invert = y % 2 == 0;
                            break;
                        case 2:
                            invert = x % 3 == 0;
                            break;
                        case 3:
                            invert = (x + y) % 3 == 0;
                            break;
                        case 4:
                            invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
                            break;
                        case 5:
                            invert = x * y % 2 + x * y % 3 == 0;
                            break;
                        case 6:
                            invert = (x * y % 2 + x * y % 3) % 2 == 0;
                            break;
                        case 7:
                            invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
                            break;
                        default: throw new Error("Unreachable");
                    }
                    if (!this.isFunction[y][x] && invert)
                        this.modules[y][x] = !this.modules[y][x];
                }
            }
        }
        // Calculates and returns the penalty score based on state of this QR Code's current modules.
        // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
        getPenaltyScore() {
            let result = 0;
            // Adjacent modules in row having same color, and finder-like patterns
            for (let y = 0; y < this.size; y++) {
                let runColor = false;
                let runX = 0;
                let runHistory = [0, 0, 0, 0, 0, 0, 0];
                for (let x = 0; x < this.size; x++) {
                    if (this.modules[y][x] == runColor) {
                        runX++;
                        if (runX == 5)
                            result += QrCode.PENALTY_N1;
                        else if (runX > 5)
                            result++;
                    }
                    else {
                        this.finderPenaltyAddHistory(runX, runHistory);
                        if (!runColor)
                            result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
                        runColor = this.modules[y][x];
                        runX = 1;
                    }
                }
                result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
            }
            // Adjacent modules in column having same color, and finder-like patterns
            for (let x = 0; x < this.size; x++) {
                let runColor = false;
                let runY = 0;
                let runHistory = [0, 0, 0, 0, 0, 0, 0];
                for (let y = 0; y < this.size; y++) {
                    if (this.modules[y][x] == runColor) {
                        runY++;
                        if (runY == 5)
                            result += QrCode.PENALTY_N1;
                        else if (runY > 5)
                            result++;
                    }
                    else {
                        this.finderPenaltyAddHistory(runY, runHistory);
                        if (!runColor)
                            result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
                        runColor = this.modules[y][x];
                        runY = 1;
                    }
                }
                result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * QrCode.PENALTY_N3;
            }
            // 2*2 blocks of modules having same color
            for (let y = 0; y < this.size - 1; y++) {
                for (let x = 0; x < this.size - 1; x++) {
                    const color = this.modules[y][x];
                    if (color == this.modules[y][x + 1] &&
                        color == this.modules[y + 1][x] &&
                        color == this.modules[y + 1][x + 1])
                        result += QrCode.PENALTY_N2;
                }
            }
            // Balance of dark and light modules
            let dark = 0;
            for (const row of this.modules)
                dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
            const total = this.size * this.size; // Note that size is odd, so dark/total != 1/2
            // Compute the smallest integer k >= 0 such that (45-5k)% <= dark/total <= (55+5k)%
            const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
            assert(0 <= k && k <= 9);
            result += k * QrCode.PENALTY_N4;
            assert(0 <= result && result <= 2568888); // Non-tight upper bound based on default values of PENALTY_N1, ..., N4
            return result;
        }
        /*-- Private helper functions --*/
        // Returns an ascending list of positions of alignment patterns for this version number.
        // Each position is in the range [0,177), and are used on both the x and y axes.
        // This could be implemented as lookup table of 40 variable-length lists of integers.
        getAlignmentPatternPositions() {
            if (this.version == 1)
                return [];
            else {
                const numAlign = Math.floor(this.version / 7) + 2;
                const step = (this.version == 32) ? 26 :
                    Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
                let result = [6];
                for (let pos = this.size - 7; result.length < numAlign; pos -= step)
                    result.splice(1, 0, pos);
                return result;
            }
        }
        // Returns the number of data bits that can be stored in a QR Code of the given version number, after
        // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
        // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
        static getNumRawDataModules(ver) {
            if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION)
                throw new RangeError("Version number out of range");
            let result = (16 * ver + 128) * ver + 64;
            if (ver >= 2) {
                const numAlign = Math.floor(ver / 7) + 2;
                result -= (25 * numAlign - 10) * numAlign - 55;
                if (ver >= 7)
                    result -= 36;
            }
            assert(208 <= result && result <= 29648);
            return result;
        }
        // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
        // QR Code of the given version number and error correction level, with remainder bits discarded.
        // This stateless pure function could be implemented as a (40*4)-cell lookup table.
        static getNumDataCodewords(ver, ecl) {
            return Math.floor(QrCode.getNumRawDataModules(ver) / 8) -
                QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] *
                    QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
        }
        // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
        // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
        static reedSolomonComputeDivisor(degree) {
            if (degree < 1 || degree > 255)
                throw new RangeError("Degree out of range");
            // Polynomial coefficients are stored from highest to lowest power, excluding the leading term which is always 1.
            // For example the polynomial x^3 + 255x^2 + 8x + 93 is stored as the uint8 array [255, 8, 93].
            let result = [];
            for (let i = 0; i < degree - 1; i++)
                result.push(0);
            result.push(1); // Start off with the monomial x^0
            // Compute the product polynomial (x - r^0) * (x - r^1) * (x - r^2) * ... * (x - r^{degree-1}),
            // and drop the highest monomial term which is always 1x^degree.
            // Note that r = 0x02, which is a generator element of this field GF(2^8/0x11D).
            let root = 1;
            for (let i = 0; i < degree; i++) {
                // Multiply the current product by (x - r^i)
                for (let j = 0; j < result.length; j++) {
                    result[j] = QrCode.reedSolomonMultiply(result[j], root);
                    if (j + 1 < result.length)
                        result[j] ^= result[j + 1];
                }
                root = QrCode.reedSolomonMultiply(root, 0x02);
            }
            return result;
        }
        // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
        static reedSolomonComputeRemainder(data, divisor) {
            let result = divisor.map(_ => 0);
            for (const b of data) { // Polynomial division
                const factor = b ^ result.shift();
                result.push(0);
                divisor.forEach((coef, i) => result[i] ^= QrCode.reedSolomonMultiply(coef, factor));
            }
            return result;
        }
        // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
        // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
        static reedSolomonMultiply(x, y) {
            if (x >>> 8 != 0 || y >>> 8 != 0)
                throw new RangeError("Byte out of range");
            // Russian peasant multiplication
            let z = 0;
            for (let i = 7; i >= 0; i--) {
                z = (z << 1) ^ ((z >>> 7) * 0x11D);
                z ^= ((y >>> i) & 1) * x;
            }
            assert(z >>> 8 == 0);
            return z;
        }
        // Can only be called immediately after a light run is added, and
        // returns either 0, 1, or 2. A helper function for getPenaltyScore().
        finderPenaltyCountPatterns(runHistory) {
            const n = runHistory[1];
            assert(n <= this.size * 3);
            const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
            return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0)
                + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
        }
        // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
        finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
            if (currentRunColor) { // Terminate dark run
                this.finderPenaltyAddHistory(currentRunLength, runHistory);
                currentRunLength = 0;
            }
            currentRunLength += this.size; // Add light border to final run
            this.finderPenaltyAddHistory(currentRunLength, runHistory);
            return this.finderPenaltyCountPatterns(runHistory);
        }
        // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
        finderPenaltyAddHistory(currentRunLength, runHistory) {
            if (runHistory[0] == 0)
                currentRunLength += this.size; // Add light border to initial run
            runHistory.pop();
            runHistory.unshift(currentRunLength);
        }
    }
    /*-- Constants and tables --*/
    // The minimum version number supported in the QR Code Model 2 standard.
    QrCode.MIN_VERSION = 1;
    // The maximum version number supported in the QR Code Model 2 standard.
    QrCode.MAX_VERSION = 40;
    // For use in getPenaltyScore(), when evaluating which mask is best.
    QrCode.PENALTY_N1 = 3;
    QrCode.PENALTY_N2 = 3;
    QrCode.PENALTY_N3 = 40;
    QrCode.PENALTY_N4 = 10;
    QrCode.ECC_CODEWORDS_PER_BLOCK = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
        [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], // High
    ];
    QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
        [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
        [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
        [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81], // High
    ];
    qrcodegen.QrCode = QrCode;
    // Appends the given number of low-order bits of the given value
    // to the given buffer. Requires 0 <= len <= 31 and 0 <= val < 2^len.
    function appendBits(val, len, bb) {
        if (len < 0 || len > 31 || val >>> len != 0)
            throw new RangeError("Value out of range");
        for (let i = len - 1; i >= 0; i--) // Append bit by bit
            bb.push((val >>> i) & 1);
    }
    // Returns true iff the i'th bit of x is set to 1.
    function getBit(x, i) {
        return ((x >>> i) & 1) != 0;
    }
    // Throws an exception if the given condition is false.
    function assert(cond) {
        if (!cond)
            throw new Error("Assertion error");
    }
    /*---- Data segment class ----*/
    /*
     * A segment of character/binary/control data in a QR Code symbol.
     * Instances of this class are immutable.
     * The mid-level way to create a segment is to take the payload data
     * and call a static factory function such as QrSegment.makeNumeric().
     * The low-level way to create a segment is to custom-make the bit buffer
     * and call the QrSegment() constructor with appropriate values.
     * This segment class imposes no length restrictions, but QR Codes have restrictions.
     * Even in the most favorable conditions, a QR Code can only hold 7089 characters of data.
     * Any segment longer than this is meaningless for the purpose of generating QR Codes.
     */
    class QrSegment {
        /*-- Constructor (low level) and fields --*/
        // Creates a new QR Code segment with the given attributes and data.
        // The character count (numChars) must agree with the mode and the bit buffer length,
        // but the constraint isn't checked. The given bit buffer is cloned and stored.
        constructor(
        // The mode indicator of this segment.
        mode, 
        // The length of this segment's unencoded data. Measured in characters for
        // numeric/alphanumeric/kanji mode, bytes for byte mode, and 0 for ECI mode.
        // Always zero or positive. Not the same as the data's bit length.
        numChars, 
        // The data bits of this segment. Accessed through getData().
        bitData) {
            this.mode = mode;
            this.numChars = numChars;
            this.bitData = bitData;
            if (numChars < 0)
                throw new RangeError("Invalid argument");
            this.bitData = bitData.slice(); // Make defensive copy
        }
        /*-- Static factory functions (mid level) --*/
        // Returns a segment representing the given binary data encoded in
        // byte mode. All input byte arrays are acceptable. Any text string
        // can be converted to UTF-8 bytes and encoded as a byte mode segment.
        static makeBytes(data) {
            let bb = [];
            for (const b of data)
                appendBits(b, 8, bb);
            return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
        }
        // Returns a segment representing the given string of decimal digits encoded in numeric mode.
        static makeNumeric(digits) {
            if (!QrSegment.isNumeric(digits))
                throw new RangeError("String contains non-numeric characters");
            let bb = [];
            for (let i = 0; i < digits.length;) { // Consume up to 3 digits per iteration
                const n = Math.min(digits.length - i, 3);
                appendBits(parseInt(digits.substr(i, n), 10), n * 3 + 1, bb);
                i += n;
            }
            return new QrSegment(QrSegment.Mode.NUMERIC, digits.length, bb);
        }
        // Returns a segment representing the given text string encoded in alphanumeric mode.
        // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
        // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static makeAlphanumeric(text) {
            if (!QrSegment.isAlphanumeric(text))
                throw new RangeError("String contains unencodable characters in alphanumeric mode");
            let bb = [];
            let i;
            for (i = 0; i + 2 <= text.length; i += 2) { // Process groups of 2
                let temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
                temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
                appendBits(temp, 11, bb);
            }
            if (i < text.length) // 1 character remaining
                appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
            return new QrSegment(QrSegment.Mode.ALPHANUMERIC, text.length, bb);
        }
        // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
        // The result may use various segment modes and switch modes to optimize the length of the bit stream.
        static makeSegments(text) {
            // Select the most efficient segment encoding automatically
            if (text == "")
                return [];
            else if (QrSegment.isNumeric(text))
                return [QrSegment.makeNumeric(text)];
            else if (QrSegment.isAlphanumeric(text))
                return [QrSegment.makeAlphanumeric(text)];
            else
                return [QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))];
        }
        // Returns a segment representing an Extended Channel Interpretation
        // (ECI) designator with the given assignment value.
        static makeEci(assignVal) {
            let bb = [];
            if (assignVal < 0)
                throw new RangeError("ECI assignment value out of range");
            else if (assignVal < (1 << 7))
                appendBits(assignVal, 8, bb);
            else if (assignVal < (1 << 14)) {
                appendBits(0b10, 2, bb);
                appendBits(assignVal, 14, bb);
            }
            else if (assignVal < 1000000) {
                appendBits(0b110, 3, bb);
                appendBits(assignVal, 21, bb);
            }
            else
                throw new RangeError("ECI assignment value out of range");
            return new QrSegment(QrSegment.Mode.ECI, 0, bb);
        }
        // Tests whether the given string can be encoded as a segment in numeric mode.
        // A string is encodable iff each character is in the range 0 to 9.
        static isNumeric(text) {
            return QrSegment.NUMERIC_REGEX.test(text);
        }
        // Tests whether the given string can be encoded as a segment in alphanumeric mode.
        // A string is encodable iff each character is in the following set: 0 to 9, A to Z
        // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static isAlphanumeric(text) {
            return QrSegment.ALPHANUMERIC_REGEX.test(text);
        }
        /*-- Methods --*/
        // Returns a new copy of the data bits of this segment.
        getData() {
            return this.bitData.slice(); // Make defensive copy
        }
        // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
        // the given version. The result is infinity if a segment has too many characters to fit its length field.
        static getTotalBits(segs, version) {
            let result = 0;
            for (const seg of segs) {
                const ccbits = seg.mode.numCharCountBits(version);
                if (seg.numChars >= (1 << ccbits))
                    return Infinity; // The segment's length doesn't fit the field's bit width
                result += 4 + ccbits + seg.bitData.length;
            }
            return result;
        }
        // Returns a new array of bytes representing the given string encoded in UTF-8.
        static toUtf8ByteArray(str) {
            str = encodeURI(str);
            let result = [];
            for (let i = 0; i < str.length; i++) {
                if (str.charAt(i) != "%")
                    result.push(str.charCodeAt(i));
                else {
                    result.push(parseInt(str.substr(i + 1, 2), 16));
                    i += 2;
                }
            }
            return result;
        }
    }
    /*-- Constants --*/
    // Describes precisely all strings that are encodable in numeric mode.
    QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
    // Describes precisely all strings that are encodable in alphanumeric mode.
    QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
    // The set of all legal characters in alphanumeric mode,
    // where each character value maps to the index in the string.
    QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    qrcodegen.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
/*---- Public helper enumeration ----*/
(function (qrcodegen) {
    var QrCode;
    (function (QrCode) {
        /*
         * The error correction level in a QR Code symbol. Immutable.
         */
        class Ecc {
            /*-- Constructor and fields --*/
            constructor(
            // In the range 0 to 3 (unsigned 2-bit integer).
            ordinal, 
            // (Package-private) In the range 0 to 3 (unsigned 2-bit integer).
            formatBits) {
                this.ordinal = ordinal;
                this.formatBits = formatBits;
            }
        }
        /*-- Constants --*/
        Ecc.LOW = new Ecc(0, 1); // The QR Code can tolerate about  7% erroneous codewords
        Ecc.MEDIUM = new Ecc(1, 0); // The QR Code can tolerate about 15% erroneous codewords
        Ecc.QUARTILE = new Ecc(2, 3); // The QR Code can tolerate about 25% erroneous codewords
        Ecc.HIGH = new Ecc(3, 2); // The QR Code can tolerate about 30% erroneous codewords
        QrCode.Ecc = Ecc;
    })(QrCode = qrcodegen.QrCode || (qrcodegen.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
/*---- Public helper enumeration ----*/
(function (qrcodegen) {
    var QrSegment;
    (function (QrSegment) {
        /*
         * Describes how a segment's data bits are interpreted. Immutable.
         */
        class Mode {
            /*-- Constructor and fields --*/
            constructor(
            // The mode indicator bits, which is a uint4 value (range 0 to 15).
            modeBits, 
            // Number of character count bits for three different version ranges.
            numBitsCharCount) {
                this.modeBits = modeBits;
                this.numBitsCharCount = numBitsCharCount;
            }
            /*-- Method --*/
            // (Package-private) Returns the bit width of the character count field for a segment in
            // this mode in a QR Code at the given version number. The result is in the range [0, 16].
            numCharCountBits(ver) {
                return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
            }
        }
        /*-- Constants --*/
        Mode.NUMERIC = new Mode(0x1, [10, 12, 14]);
        Mode.ALPHANUMERIC = new Mode(0x2, [9, 11, 13]);
        Mode.BYTE = new Mode(0x4, [8, 16, 16]);
        Mode.KANJI = new Mode(0x8, [8, 10, 12]);
        Mode.ECI = new Mode(0x7, [0, 0, 0]);
        QrSegment.Mode = Mode;
    })(QrSegment = qrcodegen.QrSegment || (qrcodegen.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
"use strict";
/*---- Main QR Code class ----*/
class QrCode {
    // Creates a QR Code containing a grid of initially unfilled modules.
    constructor(version, errorCorrectionLevel) {
        this.version = version;
        this.errorCorrectionLevel = errorCorrectionLevel;
        this.modules = []; // Has dimensions of size * size.
        if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION)
            throw new RangeError("Version number out of range");
        this.size = version * 4 + 17;
        for (let x = 0; x < this.size; x++) {
            let column = [];
            for (let y = 0; y < this.size; y++)
                column.push(new UnfilledModule());
            this.modules.push(column);
        }
    }
    /*-- Static functions --*/
    static getNumRawDataModules(ver) {
        if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION)
            throw new RangeError("Version number out of range");
        let result = (16 * ver + 128) * ver + 64;
        if (ver >= 2) {
            const numAlign = Math.floor(ver / 7) + 2;
            result -= (25 * numAlign - 10) * numAlign - 55;
            if (ver >= 7)
                result -= 36;
        }
        return result;
    }
    static getNumDataCodewords(ver, ecl) {
        return Math.floor(QrCode.getNumRawDataModules(ver) / 8) -
            QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] *
                QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    /*-- Methods --*/
    // Modifies modules in this QR Code.
    clearNewFlags() {
        for (let column of this.modules) {
            for (let m of column) {
                if (m instanceof FilledModule)
                    m.isNew = false;
            }
        }
    }
    // Modifies modules in this QR Code.
    drawTimingPatterns() {
        for (let i = 0; i < this.size; i++) {
            this.modules[6][i] = new FunctionModule(FunctionModuleType.TIMING, i % 2 == 0);
            this.modules[i][6] = new FunctionModule(FunctionModuleType.TIMING, i % 2 == 0);
        }
    }
    // Modifies modules in this QR Code.
    drawFinderPatterns() {
        const centers = [
            [3, 3],
            [this.size - 4, 3],
            [3, this.size - 4],
        ];
        for (const [cx, cy] of centers) {
            for (let dy = -4; dy <= 4; dy++) {
                for (let dx = -4; dx <= 4; dx++) {
                    const dist = Math.max(Math.abs(dx), Math.abs(dy));
                    const x = cx + dx;
                    const y = cy + dy;
                    if (0 <= x && x < this.size && 0 <= y && y < this.size) {
                        this.modules[x][y] = new FunctionModule(dist <= 3 ? FunctionModuleType.FINDER : FunctionModuleType.SEPARATOR, dist != 2 && dist != 4);
                    }
                }
            }
        }
    }
    // Modifies modules in this QR Code.
    drawAlignmentPatterns() {
        if (this.version == 1)
            return;
        let positions = [6];
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = (this.version == 32) ? 26 :
            Math.ceil((this.size - 13) / (numAlign * 2 - 2)) * 2;
        for (let pos = this.size - 7; positions.length < numAlign; pos -= step)
            positions.splice(1, 0, pos);
        positions.forEach((cx, i) => {
            positions.forEach((cy, j) => {
                if (i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0)
                    return;
                for (let dy = -2; dy <= 2; dy++) {
                    for (let dx = -2; dx <= 2; dx++) {
                        this.modules[cx + dx][cy + dy] = new FunctionModule(FunctionModuleType.ALIGNMENT, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
                    }
                }
            });
        });
    }
    // Modifies modules in this QR Code.
    drawFormatBits(mask) {
        let bits = 0;
        if (mask != -1) {
            const data = this.errorCorrectionLevel.formatBits << 3 | mask;
            let rem = data;
            for (let i = 0; i < 10; i++)
                rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
            bits = (data << 10 | rem) ^ 0x5412;
        }
        if (bits >>> 15 != 0)
            throw new Error("Assertion error");
        let setFormatInfoModule = (x, y, bitIndex) => {
            this.modules[x][y] = new FunctionModule(FunctionModuleType.FORMAT_INFO, QrCode.getBit(bits, bitIndex));
        };
        for (let i = 0; i <= 5; i++)
            setFormatInfoModule(8, i, i);
        setFormatInfoModule(8, 7, 6);
        setFormatInfoModule(8, 8, 7);
        setFormatInfoModule(7, 8, 8);
        for (let i = 9; i < 15; i++)
            setFormatInfoModule(14 - i, 8, i);
        for (let i = 0; i < 8; i++)
            setFormatInfoModule(this.size - 1 - i, 8, i);
        for (let i = 8; i < 15; i++)
            setFormatInfoModule(8, this.size - 15 + i, i);
        this.modules[8][this.size - 8] = new FunctionModule(FunctionModuleType.DARK, true);
    }
    // Modifies modules in this QR Code.
    drawVersionInformation() {
        if (this.version < 7)
            return;
        let rem = this.version;
        for (let i = 0; i < 12; i++)
            rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
        const bits = this.version << 12 | rem;
        if (bits >>> 18 != 0)
            throw new Error("Assertion error");
        for (let i = 0; i < 18; i++) {
            const color = QrCode.getBit(bits, i);
            const a = this.size - 11 + i % 3;
            const b = Math.floor(i / 3);
            this.modules[a][b] = new FunctionModule(FunctionModuleType.VERSION_INFO, color);
            this.modules[b][a] = new FunctionModule(FunctionModuleType.VERSION_INFO, color);
        }
    }
    // Reads the argument array but doesn't change it, changes
    // the underlying codeword objects, and returns a new array.
    // Reads this QR Code's version and ECL, but doesn't change its state.
    splitIntoBlocks(data) {
        const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[this.errorCorrectionLevel.ordinal][this.version];
        const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[this.errorCorrectionLevel.ordinal][this.version];
        const rawCodewords = Math.floor(QrCode.getNumRawDataModules(this.version) / 8);
        const numShortBlocks = numBlocks - rawCodewords % numBlocks;
        const shortBlockLen = Math.floor(rawCodewords / numBlocks);
        let result = [];
        for (let blockIndex = 0, off = 0; blockIndex < numBlocks; blockIndex++) {
            const end = off + shortBlockLen - blockEccLen + (blockIndex < numShortBlocks ? 0 : 1);
            let block = data.slice(off, end);
            block.forEach((cw, indexInBlock) => {
                cw.blockIndex = blockIndex;
                cw.indexInBlock = indexInBlock;
            });
            result.push(block);
            off = end;
        }
        return result;
    }
    // Reads the argument array but doesn't change it, changes
    // the underlying codeword objects, and returns a new array.
    // Reads this QR Code's version and ECL, but doesn't change its state.
    computeEccForBlocks(blocks) {
        const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[this.errorCorrectionLevel.ordinal][this.version];
        const shortBlockDataLen = blocks[0].length;
        const rs = new ReedSolomonGenerator(blockEccLen);
        let preInterleaveIndex = 0;
        return blocks.map((block, blockIndex) => {
            for (let cw of block) {
                cw.preInterleaveIndex = preInterleaveIndex;
                preInterleaveIndex++;
            }
            const blockBytes = block.map(cw => cw.value);
            const eccBytes = rs.getRemainder(blockBytes);
            return eccBytes.map((b, i) => {
                let cw = new EccCodeword(b);
                cw.preInterleaveIndex = preInterleaveIndex;
                preInterleaveIndex++;
                cw.blockIndex = blockIndex;
                cw.indexInBlock = shortBlockDataLen + 1 + i;
                return cw;
            });
        });
    }
    // Reads the argument arrays but doesn't change them, changes
    // the underlying codeword objects, and returns a new array.
    // Doesn't read or change this QR Code's state.
    interleaveBlocks(data, ecc) {
        const blockEccLen = ecc[0].length;
        const maxBlockDataLen = data[data.length - 1].length;
        let result = [];
        for (let i = 0; i < maxBlockDataLen; i++) {
            for (let block of data) {
                if (i < block.length) {
                    let cw = block[i];
                    cw.postInterleaveIndex = result.length;
                    result.push(cw);
                }
            }
        }
        for (let i = 0; i < blockEccLen; i++) {
            for (let block of ecc) {
                let cw = block[i];
                cw.postInterleaveIndex = result.length;
                result.push(cw);
            }
        }
        return result;
    }
    // Can only be called after all function modules have been drawn.
    // Reads this QR Code's modules, but doesn't change them.
    makeZigZagScan() {
        let result = [];
        for (let right = this.size - 1; right >= 1; right -= 2) {
            if (right == 6)
                right = 5;
            for (let vert = 0; vert < this.size; vert++) {
                for (let j = 0; j < 2; j++) {
                    const x = right - j;
                    const upward = ((right + 1) & 2) == 0;
                    const y = upward ? this.size - 1 - vert : vert;
                    if (!(this.modules[x][y] instanceof FunctionModule))
                        result.push([x, y]);
                }
            }
        }
        return result;
    }
    // Modifies this QR Code's modules.
    drawCodewords(codewords, zigZagScan) {
        if (codewords.length != Math.floor(QrCode.getNumRawDataModules(this.version) / 8))
            throw new RangeError("Invalid argument");
        zigZagScan.forEach(([x, y], i) => {
            if (i < codewords.length * 8) {
                let cw = codewords[i >>> 3];
                this.modules[x][y] = new CodewordModule(QrCode.getBit(cw.value, 7 - (i & 7)));
                i++;
            }
            else
                this.modules[x][y] = new RemainderModule();
        });
    }
    // Can only be called after all function modules have been drawn.
    // Reads this QR Code's modules, but doesn't change them.
    makeMask(mask) {
        let result = new QrCode(this.version, this.errorCorrectionLevel);
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                let invert;
                switch (mask) {
                    case 0:
                        invert = (x + y) % 2 == 0;
                        break;
                    case 1:
                        invert = y % 2 == 0;
                        break;
                    case 2:
                        invert = x % 3 == 0;
                        break;
                    case 3:
                        invert = (x + y) % 3 == 0;
                        break;
                    case 4:
                        invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
                        break;
                    case 5:
                        invert = x * y % 2 + x * y % 3 == 0;
                        break;
                    case 6:
                        invert = (x * y % 2 + x * y % 3) % 2 == 0;
                        break;
                    case 7:
                        invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
                        break;
                    default: throw new Error("Assertion error");
                }
                if (!(this.modules[x][y] instanceof FunctionModule))
                    result.modules[x][y] = new MaskModule(invert);
            }
        }
        return result;
    }
    // Can only be called after all codeword modules have been drawn.
    // Modifies this QR Code's modules.
    applyMask(mask) {
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                const a = mask.modules[x][y];
                let b = this.modules[x][y];
                if (a instanceof MaskModule && b instanceof FilledModule) {
                    b.color = b.color != a.color;
                }
            }
        }
    }
    // Can only be called after all modules have been drawn.
    // Reads this QR Code's modules, but doesn't change them.
    computePenalties() {
        let penalties = [0, 0, 0, 0];
        const colors = this.modules.map(column => column.map(cell => cell instanceof FilledModule && cell.color));
        let horzRuns = [];
        let horzFinders = [];
        for (let y = 0; y < this.size; y++) {
            let runColor = false;
            let runX = 0;
            let runHistory = new FinderPenalty(this.size, "horz", y, horzFinders);
            for (let x = 0; x < this.size; x++) {
                if (colors[x][y] == runColor) {
                    runX++;
                    if (runX == 5) {
                        penalties[0] += QrCode.PENALTY_N1;
                        horzRuns.push(new LinearRun(x + 1 - runX, y, runX));
                    }
                    else if (runX > 5) {
                        penalties[0]++;
                        horzRuns[horzRuns.length - 1] = new LinearRun(x + 1 - runX, y, runX);
                    }
                }
                else {
                    runHistory.addHistory(runX);
                    if (!runColor)
                        penalties[2] += runHistory.countAndAddPatterns() * QrCode.PENALTY_N3;
                    runColor = colors[x][y];
                    runX = 1;
                }
            }
            penalties[2] += runHistory.terminateAndCount(runColor, runX) * QrCode.PENALTY_N3;
        }
        let vertRuns = [];
        let vertFinders = [];
        for (let x = 0; x < this.size; x++) {
            let runColor = false;
            let runY = 0;
            let runHistory = new FinderPenalty(this.size, "vert", x, vertFinders);
            for (let y = 0; y < this.size; y++) {
                if (colors[x][y] == runColor) {
                    runY++;
                    if (runY == 5) {
                        penalties[0] += QrCode.PENALTY_N1;
                        vertRuns.push(new LinearRun(x, y + 1 - runY, runY));
                    }
                    else if (runY > 5) {
                        penalties[0]++;
                        vertRuns[vertRuns.length - 1] = new LinearRun(x, y + 1 - runY, runY);
                    }
                }
                else {
                    runHistory.addHistory(runY);
                    if (!runColor)
                        penalties[2] += runHistory.countAndAddPatterns() * QrCode.PENALTY_N3;
                    runColor = colors[x][y];
                    runY = 1;
                }
            }
            penalties[2] += runHistory.terminateAndCount(runColor, runY) * QrCode.PENALTY_N3;
        }
        let twoByTwos = [];
        for (let x = 0; x < this.size - 1; x++) {
            for (let y = 0; y < this.size - 1; y++) {
                const c = colors[x][y];
                if (c == colors[x + 1][y] && c == colors[x][y + 1] && c == colors[x + 1][y + 1]) {
                    penalties[1] += QrCode.PENALTY_N2;
                    twoByTwos.push([x, y]);
                }
            }
        }
        let dark = 0;
        for (const column of colors)
            dark = column.reduce((a, b) => a + (b ? 1 : 0), dark);
        const total = this.size * this.size;
        let k = 0;
        while (Math.abs(dark * 20 - total * 10) > (k + 1) * total)
            k++;
        penalties[3] += k * QrCode.PENALTY_N4;
        return new PenaltyInfo(horzRuns, vertRuns, twoByTwos, horzFinders, vertFinders, dark, penalties);
    }
    static getBit(x, i) {
        return ((x >>> i) & 1) != 0;
    }
}
/*-- Constants and tables --*/
QrCode.MIN_VERSION = 1;
QrCode.MAX_VERSION = 40;
QrCode.PENALTY_N1 = 3;
QrCode.PENALTY_N2 = 3;
QrCode.PENALTY_N3 = 40;
QrCode.PENALTY_N4 = 10;
QrCode.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
];
QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81],
];
/*---- Helper classes for QrCode ----*/
// An enum type.
class ErrorCorrectionLevel {
    constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
    }
}
ErrorCorrectionLevel.LOW = new ErrorCorrectionLevel(0, 1);
ErrorCorrectionLevel.MEDIUM = new ErrorCorrectionLevel(1, 0);
ErrorCorrectionLevel.QUARTILE = new ErrorCorrectionLevel(2, 3);
ErrorCorrectionLevel.HIGH = new ErrorCorrectionLevel(3, 2);
class Codeword {
    constructor(value) {
        this.value = value;
        this.preInterleaveIndex = -1;
        this.blockIndex = -1;
        this.indexInBlock = -1;
        this.postInterleaveIndex = -1;
        if (value < 0 || value > 255)
            throw new RangeError("Invalid value");
    }
}
class DataCodeword extends Codeword {
    constructor(value) {
        super(value);
        this.preEccIndex = -1;
    }
}
class EccCodeword extends Codeword {
    constructor(value) {
        super(value);
    }
}
// Computation for QrCode.computeEccForBlocks().
class ReedSolomonGenerator {
    constructor(degree) {
        this.coefficients = [];
        if (degree < 1 || degree > 255)
            throw new RangeError("Degree out of range");
        let coefs = this.coefficients;
        for (let i = 0; i < degree - 1; i++)
            coefs.push(0);
        coefs.push(1);
        let root = 1;
        for (let i = 0; i < degree; i++) {
            for (let j = 0; j < coefs.length; j++) {
                coefs[j] = ReedSolomonGenerator.multiply(coefs[j], root);
                if (j + 1 < coefs.length)
                    coefs[j] ^= coefs[j + 1];
            }
            root = ReedSolomonGenerator.multiply(root, 0x02);
        }
    }
    getRemainder(data) {
        let result = this.coefficients.map(_ => 0);
        for (const b of data) {
            const factor = b ^ result.shift();
            result.push(0);
            this.coefficients.forEach((coef, i) => result[i] ^= ReedSolomonGenerator.multiply(coef, factor));
        }
        return result;
    }
    static multiply(x, y) {
        if (x >>> 8 != 0 || y >>> 8 != 0)
            throw new RangeError("Byte out of range");
        let z = 0;
        for (let i = 7; i >= 0; i--) {
            z = (z << 1) ^ ((z >>> 7) * 0x11D);
            z ^= ((y >>> i) & 1) * x;
        }
        if (z >>> 8 != 0)
            throw new Error("Assertion error");
        return z;
    }
}
// A struct for QrCode.computePenalties().
class PenaltyInfo {
    constructor(horizontalRuns, verticalRuns, twoByTwoBoxes, horizontalFalseFinders, verticalFalseFinders, numDarkModules, penaltyPoints) {
        this.horizontalRuns = horizontalRuns;
        this.verticalRuns = verticalRuns;
        this.twoByTwoBoxes = twoByTwoBoxes;
        this.horizontalFalseFinders = horizontalFalseFinders;
        this.verticalFalseFinders = verticalFalseFinders;
        this.numDarkModules = numDarkModules;
        this.penaltyPoints = penaltyPoints;
    }
}
// A struct for QrCode.computePenalties().
class LinearRun {
    constructor(startX, startY, runLength) {
        this.startX = startX;
        this.startY = startY;
        this.runLength = runLength;
    }
}
// A class for QrCode.computePenalties().
class FinderPenalty {
    constructor(qrSize, direction, outerPosition, finders) {
        this.qrSize = qrSize;
        this.direction = direction;
        this.outerPosition = outerPosition;
        this.finders = finders;
        this.runHistory = [];
        this.runEndPositions = [0];
        this.position = 0;
        this.padding = qrSize;
    }
    addHistory(currentRunLength) {
        this.runHistory.unshift(currentRunLength + this.padding);
        this.padding = 0;
        this.position += currentRunLength;
        this.runEndPositions.unshift(this.position);
    }
    countAndAddPatterns() {
        const hist = this.runHistory;
        const n = hist[1];
        if (n > this.qrSize * 3)
            throw new Error("Assertion error");
        const core = n > 0 && hist[2] == n && hist[3] == n * 3 && hist[4] == n && hist[5] == n;
        const coreStart = this.runEndPositions[6];
        const coreEnd = this.runEndPositions[1];
        let result = 0;
        if (core && hist[0] >= n * 4 && hist[6] >= n) {
            result++;
            const start = coreStart - n;
            const end = coreEnd + n * 4;
            this.finders.push(this.direction == "horz" ?
                new LinearRun(start, this.outerPosition, end - start) :
                new LinearRun(this.outerPosition, start, end - start));
        }
        if (core && hist[6] >= n * 4 && hist[0] >= n) {
            result++;
            const start = coreStart - n * 4;
            const end = coreEnd + n;
            this.finders.push(this.direction == "horz" ?
                new LinearRun(start, this.outerPosition, end - start) :
                new LinearRun(this.outerPosition, start, end - start));
        }
        return result;
    }
    terminateAndCount(currentRunColor, currentRunLength) {
        if (currentRunColor) {
            this.addHistory(currentRunLength);
            currentRunLength = 0;
        }
        this.padding = this.qrSize;
        this.addHistory(currentRunLength);
        if (this.position != this.qrSize)
            throw new Error("Assertion error");
        return this.countAndAddPatterns();
    }
}
/*---- Hierarchy of classes for modules (pixels) ----*/
class Module {
}
class UnfilledModule extends Module {
}
class FilledModule extends Module {
    constructor(color) {
        super();
        this.color = color;
        this.isNew = true;
    }
}
class FunctionModule extends FilledModule {
    constructor(type, color) {
        super(color);
        this.type = type;
    }
}
var FunctionModuleType;
(function (FunctionModuleType) {
    FunctionModuleType[FunctionModuleType["FINDER"] = 0] = "FINDER";
    FunctionModuleType[FunctionModuleType["SEPARATOR"] = 1] = "SEPARATOR";
    FunctionModuleType[FunctionModuleType["TIMING"] = 2] = "TIMING";
    FunctionModuleType[FunctionModuleType["ALIGNMENT"] = 3] = "ALIGNMENT";
    FunctionModuleType[FunctionModuleType["FORMAT_INFO"] = 4] = "FORMAT_INFO";
    FunctionModuleType[FunctionModuleType["VERSION_INFO"] = 5] = "VERSION_INFO";
    FunctionModuleType[FunctionModuleType["DARK"] = 6] = "DARK";
})(FunctionModuleType || (FunctionModuleType = {}));
class CodewordModule extends FilledModule {
    constructor(color) {
        super(color);
    }
}
class RemainderModule extends FilledModule {
    constructor() {
        super(false);
    }
}
class MaskModule extends FilledModule {
    constructor(color) {
        super(color);
    }
}
/*---- Segment classes ----*/
class QrSegment {
    constructor(mode, numChars, bitData) {
        this.mode = mode;
        this.numChars = numChars;
        this.bitData = bitData;
        if (numChars < 0)
            throw new RangeError("Invalid argument");
    }
    static getTotalBits(segs, version) {
        let result = 0;
        for (const seg of segs) {
            let ccbits = seg.mode.numCharCountBits(version);
            if (seg.numChars >= (1 << ccbits))
                return Infinity;
            result += 4 + ccbits + seg.bitData.length;
        }
        return result;
    }
}
// An enum type.
class SegmentMode {
    constructor(modeBits, numBitsCharCount, name) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
        this.name = name;
    }
    numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
    }
    /*-- Character testing --*/
    static isNumeric(cp) {
        return "0".codePointAt(0) <= cp && cp <= "9".codePointAt(0);
    }
    static isAlphanumeric(cp) {
        return cp < 128 && SegmentMode.ALPHANUMERIC_CHARSET.includes(String.fromCodePoint(cp));
    }
    static isKanji(cp) {
        return cp < 0x10000 && ((parseInt(SegmentMode.KANJI_BIT_SET.charAt(cp >>> 2), 16) >>> (cp & 3)) & 1) != 0;
    }
}
SegmentMode.NUMERIC = new SegmentMode(0x1, [10, 12, 14], "Numeric");
SegmentMode.ALPHANUMERIC = new SegmentMode(0x2, [9, 11, 13], "Alphanumeric");
SegmentMode.BYTE = new SegmentMode(0x4, [8, 16, 16], "Byte");
SegmentMode.KANJI = new SegmentMode(0x8, [8, 10, 12], "Kanji");
SegmentMode.ECI = new SegmentMode(0x7, [0, 0, 0], "ECI");
SegmentMode.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
SegmentMode.KANJI_BIT_SET = "0000000000000000000000010000000000000000C811350000000800000008000000000000000000000000000000000000000000000000000000000000000000" +
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000EFFFBF30EFFFBF30000000000000" +
    "2000FFFFFFFFFFFFFFFF200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "000016333600D080000000000000000000000000000000000000000000000000800000000080000000000000000000000000F000000000000000410000000000" +
    "D890404618F10302000040003CC00000CC0000000200000000000000000000000000400000000000000000000000000000000000000000000000000000000000" +
    "0000000000000000000000000000000000000000000000000000000000000000F0099993939999994080000000000000000000003000C0030C8C000000080000" +
    "060000000000000050000000004A0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "FEFFF30100000000EFFFFFFFFFFFFFFFFFFFF087EFFFFFFFFFFFFFFFFFFFF7870000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "B8F63F34244264B9C28E0E3E4000A00456F563BD779794407DCE0F3E83065C80206E3043000815538C0EBAE700289689849A2492308E0608C14439DAA30C8654" +
    "06AA6568A7F304208838164102014712120220700003CB04426A26448A0602A071204758204048C9BFB7514142F72E11566BFE2057F1FF0207A304833C623676" +
    "9DD429020B649CF089CB05848368F30A8832618890E32325AA224A3EDD00C27C661A1E62B048A0F8BE72E955142CBB984100045816369480C0F70DA8E3FFFC50" +
    "A1FF308A14A704B7547420080050BE83158D50004399C01779300010663640420D081500000CA03417098C038000008599E0007F08F514000B00014981000826" +
    "04200D90002865104005108001D101501C48010052040501F014A8D49004D06A91BAC4190C121890584C30002560000840B08000D14090009484C50990000961" +
    "56C002222148334230C0697440A0522482008809009480F42A41AA3D038D78E3406816F14AE76814093C3B505A758112E14284A2821140A404A0B16106D00488" +
    "A0202059122806013420004044410008000040C00000000760A11C00A42000C000A104004041540492003BDB87A0B2509ABB0AFBC7049738CF21D18E6FB4965C" +
    "6FFEA440511220FF36DEB204330D24200001310020B1AC950A000020307A14C208842FF840200000008550010029840049811002400508430023C486AE94EB86" +
    "C48124E2028A9C129B050B08E100C7FFA9480E411C820E10E07894CAF031BDDDA1EBBF980E2A2A152055AC2364E3B829FBD1F8343076812382030C331180329A" +
    "000C56A33EF82040E4C25268D3FB1A00A1A34DC89C60C7130E00A059B810BDE0B43E02C82811010F49D7827ACA9CBF044844356009A544448CF3100084004D5F" +
    "107775CE244CD19838B682949014242DD160EF95008122A34E7BF9B3300FAE0C683120280898004E002B1A0108B44CC0903D4498FAF14384952854C0A0240540" +
    "040A8C010413054440040010082804508010C24403A650A16A024150FC0965461200001381C90FBC021A2E36C4015B10C83538A92B8B1823A78948A07E3320C0" +
    "CC4D81091A1A0709E1A8400E4D3C1540A9342C1244840135292004631420DB3F90BA0F8E0CD72D5A242CB42DF34AFA0D0AA11A4374288D30254CB156492DA38C" +
    "C1008C0460E04133F416B12B88000D0CA20A898A5C1AB66105E24B58B80C4060339F40E1E650152A0040836770CE8B37604423811804618CA8C79036089240AA" +
    "42C1C9ACE0E40672099000386400401811061801D0458090E000A0CC005000C00340440AB8004876882591A8E56881B895E2061401C8EBC91686C19800898000" +
    "0018A9808100091470041A4E5050D046E013D4E06084A0FF23618AA2E258B000008148AC02E0C6962300006185650930021582A1000842111E81623425D5AAE0" +
    "0AF082EAB7AF005480460498088C440C5009141B42484C4243A1A3060009491C6428A300D081601C22000199050E115175042800A140A020F4000398318DA444" +
    "20A822DE0C015004000120108088101300644020000F80700098002A000020220020016124000401002506204F250002015803280011202480345B081E0702A9" +
    "04021080005356CF1C9140BA682041267800440058094420C50458A07023083300400C8B02EC0D0C030C0800805052D009A004000020C0805056000412462014" +
    "862000004200C748200002ED91689404808000044800100200480101DC247C108307A25D8691F8D105EB21E35FE29D184CEC21428280E237CA4243B4C020D14D" +
    "20A20008790011804C114411687154D79D94946000041978C4524C8DAB44419429B1008C17200851180000C0A690002C00842004120394AB080208C1CA2E8001" +
    "400143001E00414802000002008941012C07AA408868024526C03140081901022804602004C1004538309E4E52120848334E00020C44906E30A06218AD211080" +
    "109609791004688FD42E1800E0A0156AA110CE18006C14488BDAC26BF64A147845D820B41611862006BB75020A0533400C8A4B7B204221103DA9000217228C00" +
    "1802E908A8C0081E900B151813018204E0A25A986B96E0265244441D580845D457C21BF1708DD268C78D1484E414E622002880E9C08F73DE08C8625731394180" +
    "23E0408CE4846AE6A4C207660C6210ABC03DD58100000000000000000000000000000000000004500207331818F45A30CE550146813C44322641430034A090A1" +
    "B7815A312010848A0440445C6018DD2E0FA184D2626B6140850504E6230821134E7000C08028A0240484B30806843178D05882439130925E5432A0789A5281C5" +
    "6A775C9D00E58E301800007A45DC6C140082402A068BA0B20200E9ADAE80A1E0C7240C11809867301268501000008A810A64844C50D022022245841910A87982" +
    "898780005061221304240880E4AF2A6041801129200240B925E23460000501091400AB5824030202B0F40A5080720804195039A105FD0060202A1203036008E4" +
    "4CC08C40400A10080006134D088020A000C1820081E814000DA601AC012F00B4D47260510220098800A58A289454051840020008408880C21D80500010084CA4" +
    "020E2600E80024A05503C8A6E0905A0E60924C2441843B08E308033B2010C1374941D00602C00490A103040C154A490CACD88C502C69C04A100040438C000110" +
    "D0559C9A8242A5C124107384D4A7F0014B23A254B7135029498B44C57D86A85479051DE234918024202D04D9048979029045D460000000000000000000000000" +
    "00000000000008482455124060C100714267011678FFDD9BF956A0C5D54200C30BDA950000000000000000000D82B9002240002080108044408904CAA0D88209" +
    "0078100E0040130049711228910045012BC2A12020C9300406D34088C08000978261C3AB046880BC47270809E10000000000008D881E78C94304214046EA1972" +
    "B68EBF6EF80466356AEEF735B23E4E5BF9682000845822102044008061120A02400040200002500000E74510C261CA1048A2580141C803503CBF349BAC000609" +
    "000623040021090803B018C4450020049200A6D100020820000840000162C05104081070D49D42C0018205811005020500010D400807102080103C1223100000" +
    "88009170208006502100E0C450401A0F2000000000000000000000000000000000000000000000000000000000000800D8E8A530DB1240A58843071162000000" +
    "00000001205C4088518B108FC741DE5206DE0BB198507DB13FA726A1C0D05CA01D5EA425094050364530442575B22161278A101194928100849080010006C688" +
    "E619F85021030993048F03940888B10000000000005824008500008940AE41078261D1163115000642A17A000000000000000C30021781012710729A40066098" +
    "220CC02000901804D2020AC843E0000000000000001210111108A11CC4CE298004000058CA7C6081E30E2150000801008004EC0810D6012014686580E1107200" +
    "0573D380230E50E40C104840180004100000000000000000000000000AA195008C34428884D1008C25103027310940400828004001A841D065088020040A4072" +
    "000000C400000000000000000000023A2091EA0A066200FD010F51B712180DA3081482003001008400CC4108FC414C0000020203100000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
    "0000000000000000000000000000000000000000000000000000000000000000A7FDFFFFFFFFFFFEFFFFFFF30000000000000000000000000000000082000000";
var app;
(function (app) {
    /*---- HTML UI initialization ----*/
    function initialize() {
        initShowHideSteps();
        initShowExamples();
    }
    function initShowExamples() {
        const EXAMPLES = [
            ["Пользовательский текст", "", ErrorCorrectionLevel.LOW, 1, -1],
            ["Kubstu", "https://kubstu.ru/", ErrorCorrectionLevel.LOW, 2, -1],
            ["Буквенно-цифровое кодирование", "HELLO", ErrorCorrectionLevel.LOW, 1, 3],
            ["Цифровое кодирование", "0123456789", ErrorCorrectionLevel.LOW, 1, 0],
          ];
        let selectElem = getElem("show-example");
        for (const [name, text, ecl, minVer, mask] of EXAMPLES)
            appendNewElem(selectElem, "option", name);
        selectElem.selectedIndex = 1;
        function selectChanged() {
            const [_, text, ecl, minVer, mask] = EXAMPLES[selectElem.selectedIndex];
            getElem("input-text").value = text;
            getElem("Qr-code_output").textContent = "QR-код " + getElem("input-text").value;
            getElem("customRange3").value = minVer;
            getInput("force-min-version").value = minVer.toString();
            getInput("force-mask-pattern").value = mask.toString();
            if (ecl == ErrorCorrectionLevel.LOW)
                getInput("errcorlvl-low").checked = true;
            else if (ecl == ErrorCorrectionLevel.MEDIUM)
                getInput("errcorlvl-medium").checked = true;
            else if (ecl == ErrorCorrectionLevel.QUARTILE)
                getInput("errcorlvl-quartile").checked = true;
            else if (ecl == ErrorCorrectionLevel.HIGH)
                getInput("errcorlvl-high").checked = true;
            else
                throw new Error("Assertion error");

            if (ecl == ErrorCorrectionLevel.LOW)
                getInput("errcorlvl-low").checked = true;
            else if (ecl == ErrorCorrectionLevel.MEDIUM)
                getInput("errcorlvl-medium").checked = true;
            else if (ecl == ErrorCorrectionLevel.QUARTILE)
                getInput("errcorlvl-quartile").checked = true;
            else if (ecl == ErrorCorrectionLevel.HIGH)
                getInput("errcorlvl-high").checked = true;    
            doGenerate();
            
        }
        selectElem.onchange = selectChanged;
        selectChanged();
        function resetSelect() {
            selectElem.selectedIndex = 0;
        }
        let inputs = document.querySelectorAll("#input-table textarea, #input-table input[type=number]");
        for (let elem of inputs)
            elem.oninput = resetSelect;
        inputs = document.querySelectorAll("#input-table input[type=radio]");
        for (let elem of inputs)
            elem.onchange = resetSelect;
    }
    function initShowHideSteps() {
        let headings = document.querySelectorAll("article section h3");
        let showHideP = getElem("show-hide-steps");
        for (let heading of headings) {
            let parent = heading.parentNode;
            const stepStr = /^\d+(?=\. )/.exec(heading.textContent)[0];
            let label = appendNewElem(showHideP, "label");
            let checkbox = appendNewElem(label, "input");
            checkbox.type = "checkbox";
            checkbox.checked = true;
            checkbox.id = "step" + stepStr;
            let onChange = () => {
                parent.hidden = !checkbox.checked;
                label.classList.toggle("checked", checkbox.checked);
            };
            checkbox.onchange = onChange;
            onChange();
            label.append(stepStr);
            let button = document.createElement("button");
            button.textContent = "Спрятать";
            button.onclick = () => {
                checkbox.checked = false;
                onChange();
            };
            parent.insertBefore(button, heading);
        }
    }
    let maskShower;
    (function (maskShower) {
        const MASK_DEPENDENT_ELEMS = [
            "mask-pattern",
            "masked-qr-code",
            "masked-qr-with-format",
            "horizontal-runs",
            "vertical-runs",
            "two-by-two-boxes",
            "horizontal-false-finders",
            "vertical-false-finders",
            "dark-light-balance",
        ];
        maskShower.selectElem = getElem("show-mask");
        for (const id of MASK_DEPENDENT_ELEMS) {
            let elem = document.getElementById(id);
            if (!(elem instanceof Element))
                throw new Error("Assertion error");
            let parent = elem.parentNode;
            if (!(parent instanceof HTMLElement))
                throw new Error("Assertion error");
            for (let i = 0; i < 8; i++) {
                let node = elem.cloneNode(true);
                node.setAttribute("id", `${id}-${i}`);
                node.setAttribute("class", `${node.getAttribute("class")} ${id}`);
                parent.insertBefore(node, elem);
            }
            elem.remove();
        }
        maskShower.selectElem.onchange = showMask;
        showMask();
        function showMask() {
            for (const id of MASK_DEPENDENT_ELEMS) {
                for (let i = 0; i < 8; i++) {
                    let elem = document.getElementById(`${id}-${i}`);
                    elem.setAttribute("style", i == maskShower.selectElem.selectedIndex ? "" : "display:none");
                }
            }
        }
        maskShower.showMask = showMask;
    })(maskShower || (maskShower = {}));
    /*---- Main application ----*/
    function doGenerate() {
        // Get input values
        const textStr = getElem("input-text").value;
        const minVer = parseInt(getInput("force-min-version").value, 10);
        const forceMask = parseInt(getInput("force-mask-pattern").value, 10);
        let errCorrLvl;
        if (getInput("errcorlvl-low").checked)
            errCorrLvl = ErrorCorrectionLevel.LOW;
        else if (getInput("errcorlvl-medium").checked)
            errCorrLvl = ErrorCorrectionLevel.MEDIUM;
        else if (getInput("errcorlvl-quartile").checked)
            errCorrLvl = ErrorCorrectionLevel.QUARTILE;
        else if (getInput("errcorlvl-high").checked)
            errCorrLvl = ErrorCorrectionLevel.HIGH;
        else
            throw new Error("Assertion error");
        const text = CodePoint.toArray(textStr);
        const mode = doStep0(text);
        const segs = [doStep1(text, mode)];
        const version = doStep2(segs, errCorrLvl, minVer);
        if (version == -1)
            return;
        const dataCodewords = doStep3(segs, version, errCorrLvl);
        const qr = new QrCode(version, errCorrLvl);
        const allCodewords = doStep4(qr, dataCodewords);
        doStep5(qr);
        doStep6(qr, allCodewords);
        const masks = doStep7(qr);
        const penalties = doStep8(qr, masks);
        let chosenMask = doStep9(penalties);
        if (forceMask != -1)
            chosenMask = forceMask;
        qr.applyMask(masks[chosenMask]);
        qr.drawFormatBits(chosenMask);
        qr.clearNewFlags();
        getSvgAndDrawQrCode("output-qr-code", qr);
        maskShower.selectElem.selectedIndex = chosenMask;
        maskShower.showMask();
    }
    app.doGenerate = doGenerate;
    function doStep0(text) {
        getElem("num-code-points").textContent = text.length.toString();
        let allNumeric = true;
        let allAlphanum = true;
        let allKanji = true;
        let tbody = clearChildren("#character-analysis tbody");
        text.forEach((cp, i) => {
            let tr = appendNewElem(tbody, "tr");
            const cells = [
                i.toString(),
                cp.utf16,
                "U+" + cp.utf32.toString(16).toUpperCase(),
                SegmentMode.isNumeric(cp.utf32),
                SegmentMode.isAlphanumeric(cp.utf32),
                true,
                SegmentMode.isKanji(cp.utf32),
            ];
            allNumeric = allNumeric && cells[3];
            allAlphanum = allAlphanum && cells[4];
            allKanji = allKanji && cells[6];
            for (let cell of cells) {
                let td = appendNewElem(tr, "td");
                if (typeof cell == "boolean") {
                    td.classList.add(cell ? "true" : "false");
                    cell = cell ? "Да" : "Нет";
                }
                td.textContent = cell;
            }
        });
        tbody = clearChildren("#character-mode-summary tbody");
        const data = [
            ["Цифровое ", allNumeric],
            ["Буквенно-цифровое", allAlphanum],
            ["Побайтовое ", true],
            ["Кандзи", allKanji],
        ];
        for (const row of data) {
            let tr = appendNewElem(tbody, "tr");
            appendNewElem(tr, "td", row[0]);
            let td = appendNewElem(tr, "td", row[1] ? "Да" : "Нет");
            td.classList.add(row[1] ? "true" : "false");
        }
        let result;
        if (text.length == 0){
            result = SegmentMode.BYTE;
            getElem("chosen-segment-mode").textContent = 'побайтовый';}
        else if (allNumeric){
            result = SegmentMode.NUMERIC;
            getElem("chosen-segment-mode").textContent = 'цифровой';
            getElem("description").textContent = 'Вся последовательность символов разбивается на группы по 3 цифры, и'
            +'каждая группа (трёхзначное число) переводится в 10-битное двоичное число. Если в конце остаётся 2 символа, полученное двузначное число кодируется 7 битами. Если 1 символ - 4 битами.';
            }
        else if (allAlphanum){
            result = SegmentMode.ALPHANUMERIC;
            getElem("chosen-segment-mode").textContent = 'буквенно-цифровой';
            getElem("description").textContent = 'Текст разделяется на группы по 2 символа,'
            + 'значение первого символа в группе умножается на 45 и прибавляется к значению второго символа. Полученное число переводится в 11-битное двоичное число. Если в последней группе 1 символ, то его значение сразу кодируется 6-битным числом.';
            }
        else {
            result = SegmentMode.BYTE;
            getElem("chosen-segment-mode").textContent = 'побайтовый';
            getElem("description").textContent = 'Переведем каждый символ в биты. В байтовом режиме, символы кодируются в 8, 16, 24 или 32 бита.';
            }


        //getElem("chosen-segment-mode").textContent = result.name;
        
        return result;
    }
    function doStep1(text, mode) {
        getElem("data-segment-chars").className = mode.name.toLowerCase() + " possibly-long";
        let bitData = [];
        let numChars = text.length;
        let tbody = clearChildren("#data-segment-chars tbody");
        text.forEach((cp, i) => {
            let hexValues = "";
            let decValue = "";
            let rowSpan = 0;
            let combined = "";
            let bits = "";
            if (mode == SegmentMode.NUMERIC) {
                if (i % 3 == 0) {
                    rowSpan = Math.min(3, text.length - i);
                    const s = text.slice(i, i + rowSpan).map(c => c.utf16).join("");
                    const temp = parseInt(s, 10);
                    combined = temp.toString(10).padStart(rowSpan, "0");
                    bits = temp.toString(2).padStart(rowSpan * 3 + 1, "0");
                }
            }
            else if (mode == SegmentMode.ALPHANUMERIC) {
                let temp = SegmentMode.ALPHANUMERIC_CHARSET.indexOf(cp.utf16);
                decValue = temp.toString(10);
                if (i % 2 == 0) {
                    rowSpan = Math.min(2, text.length - i);
                    if (rowSpan == 2) {
                        temp *= SegmentMode.ALPHANUMERIC_CHARSET.length;
                        temp += SegmentMode.ALPHANUMERIC_CHARSET.indexOf(text[i + 1].utf16);
                        combined ="45 * "+decValue+"+"+SegmentMode.ALPHANUMERIC_CHARSET.indexOf(text[i + 1].utf16)+"=" +temp.toString(10);
                    }
                    else combined =temp.toString(10);
                    bits = temp.toString(2).padStart(rowSpan * 5 + 1, "0");
                }
            }
            else if (mode == SegmentMode.BYTE) {
                rowSpan = 1;
                const temp = cp.utf8;
                hexValues = temp.map(c => c.toString(16).toUpperCase().padStart(2, "0")).join(" ");
                bits = temp.map(c => c.toString(2).toUpperCase().padStart(8, "0")).join("");
                numChars += temp.length - 1;
            }
            else
                throw new Error("Assertion error");
            for (const c of bits)
                bitData.push(parseInt(c, 2));
            let cells = [
                i.toString(),
                cp.utf16,
                hexValues,
                decValue,
            ];
            if (rowSpan > 0)
                cells.push(combined, bits);
            let tr = appendNewElem(tbody, "tr");
            cells.forEach((cell, j) => {
                let td = appendNewElem(tr, "td", cell);
                if (j >= 4)
                    td.rowSpan = rowSpan;
            });
        });
       // getElem("segment-mode").textContent = mode.name.toString();
        getElem("segment-count").textContent = numChars + " " + (mode == SegmentMode.BYTE ? "байтов" : "символов");
        getElem("segment-data").textContent = bitData.length + " битов";
        return new QrSegment(mode, numChars, bitData);
    }
    function doStep2(segs, ecl, minVer) {
        let trs = document.querySelectorAll("#segment-size tbody tr");
        [1, 10, 27].forEach((ver, i) => {
            const numBits = QrSegment.getTotalBits(segs, ver);
            const numCodewords = Math.ceil(numBits / 8);
            let tds = trs[i].querySelectorAll("td");
            tds[1].textContent = numBits < Infinity ? numBits.toString() : "Not encodable";
            tds[2].textContent = numCodewords < Infinity ? numCodewords.toString() : "Not encodable";
        });
        const ERRCORRLVLS = [
            ErrorCorrectionLevel.LOW,
            ErrorCorrectionLevel.MEDIUM,
            ErrorCorrectionLevel.QUARTILE,
            ErrorCorrectionLevel.HIGH
        ];
        let tbody = clearChildren("#codewords-per-version tbody");
        let result = -1;
        for (let ver = 1; ver <= 40; ver++) {
            let tr = appendNewElem(tbody, "tr");
            let td = appendNewElem(tr, "td", ver);
            const numCodewords = Math.ceil(QrSegment.getTotalBits(segs, ver) / 8);
            for (const e of ERRCORRLVLS) {
                let td = appendNewElem(tr, "td");
                const capacityCodewords = QrCode.getNumDataCodewords(ver, e);
                td.textContent = capacityCodewords.toString();
                if (e == ecl) {
                    if (numCodewords <= capacityCodewords) {
                        td.classList.add("true");
                        if (result == -1 && ver >= minVer)
                            result = ver;
                    }
                    else
                        td.classList.add("false");
                }
            }
        }
        //getElem("step_2_description").textContent
        getElem("chosen-version").textContent = result != -1 ? result.toString() : "Cannot fit any version";
        return result;
    }
    function doStep3(segs, ver, ecl) {
        let allBits = [];
        let tbody = clearChildren("#segment-and-padding-bits tbody");
        function addRow(name, bits) {
            for (const b of bits)
                allBits.push(b);
            let tr = appendNewElem(tbody, "tr");
            const cells = [
                name,
                bits.join(""),
                bits.length,
                allBits.length,
            ];
            for (const s of cells)
                appendNewElem(tr, "td", s);
        }
        segs.forEach((seg, i) => {
            addRow(`Способ кодировки:`, intToBits(seg.mode.modeBits, 4));
            addRow(`Количества данных:`, intToBits(seg.numChars, seg.mode.numCharCountBits(ver)));
            addRow(`Сегмент данных:`, seg.bitData);
        });
        const capacityBits = QrCode.getNumDataCodewords(ver, ecl) * 8;
        addRow("Терминатор:", [0, 0, 0, 0].slice(0, Math.min(4, capacityBits - allBits.length)));
        addRow("Дополнение битами:", [0, 0, 0, 0, 0, 0, 0].slice(0, (8 - allBits.length % 8) % 8));
        let bytePad = [];
        for (let i = 0, n = (capacityBits - allBits.length) / 8; i < n; i++) {
            if (i % 2 == 0)
                bytePad.push(1, 1, 1, 0, 1, 1, 0, 0);
            else
                bytePad.push(0, 0, 0, 1, 0, 0, 0, 1);
        }
        addRow("Дополнение байтами:", bytePad);
        queryElem("#full-bitstream span").textContent = allBits.join("");
        let result = [];
        for (let i = 0; i < allBits.length; i += 8) {
            let cw = new DataCodeword(parseInt(allBits.slice(i, i + 8).join(""), 2));
            cw.preEccIndex = i / 8;
            result.push(cw);
        }
        getElem("all-data-codewords").textContent = result.map(cw => byteToHex(cw.value)).join(" ");
        return result;
    }
    function doStep4(qr, data) {
        const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[qr.errorCorrectionLevel.ordinal][qr.version];
        const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[qr.errorCorrectionLevel.ordinal][qr.version];
        const rawCodewords = Math.floor(QrCode.getNumRawDataModules(qr.version) / 8);
        const numShortBlocks = numBlocks - rawCodewords % numBlocks;
        const shortBlockLen = Math.floor(rawCodewords / numBlocks);
        let tds = document.querySelectorAll("#block-stats td:nth-child(2)");
        tds[0].textContent = data.length.toString();
        tds[1].textContent = numBlocks.toString();
        tds[2].textContent = (shortBlockLen - blockEccLen).toString();
        tds[3].textContent = numShortBlocks < numBlocks ? (shortBlockLen - blockEccLen + 1).toString() : "N/A";
        tds[4].textContent = blockEccLen.toString();
        tds[5].textContent = numShortBlocks.toString();
        tds[6].textContent = (numBlocks - numShortBlocks).toString();
        let dataBlocks = qr.splitIntoBlocks(data);
        let eccBlocks = qr.computeEccForBlocks(dataBlocks);
        {
            let thead = queryElem("#blocks-and-ecc thead");
            if (thead.children.length >= 2)
                thead.children[1].remove();
            thead.querySelectorAll("th")[1].colSpan = numBlocks;
            let tr = appendNewElem(thead, "tr");
            for (let i = 0; i < numBlocks; i++)
                appendNewElem(tr, "th", i);
        }
        {
            let tbody = clearChildren("#blocks-and-ecc tbody");
            let verticalTh = document.createElement("th");
            verticalTh.rowSpan = shortBlockLen; // Not final value; work around Firefox bug
            let div = appendNewElem(verticalTh, "div", "Codeword index within block");
            for (let i = 0; i < shortBlockLen + 1; i++) {
                const isDataRow = i < shortBlockLen + 1 - blockEccLen;
                let tr = appendNewElem(tbody, "tr");
                tr.className = isDataRow ? "data" : "ecc";
                if (i == 0)
                    tr.append(verticalTh);
                appendNewElem(tr, "th", i);
                if (isDataRow) {
                    for (const block of dataBlocks)
                        appendNewElem(tr, "td", i < block.length ? byteToHex(block[i].value) : "");
                }
                else {
                    for (const block of eccBlocks)
                        appendNewElem(tr, "td", byteToHex(block[i - (shortBlockLen + 1 - blockEccLen)].value));
                }
            }
            verticalTh.rowSpan = shortBlockLen + 1;
            verticalTh.style.width = div.getBoundingClientRect().width + "px"; // Work around Firefox sizing bug
        }
        let result = qr.interleaveBlocks(dataBlocks, eccBlocks);
        let output = clearChildren("#interleaved-codewords");
        let span = appendNewElem(output, "span", result.slice(0, data.length).map(cw => byteToHex(cw.value)).join(" "));
        span.className = "data";
        output.append(" ");
        span = appendNewElem(output, "span", result.slice(data.length).map(cw => byteToHex(cw.value)).join(" "));
        span.className = "ecc";
        queryElem("#final-bit-sequence").textContent = result.map(cw => cw.value.toString(2).padStart(8, "0")).join("");
        queryElem("#final-bit-sequence1").textContent = result.map(cw => cw.value.toString(2).padStart(8, "0")).join("");
        return result;
    }
    function doStep5(qr) {
        qr.drawTimingPatterns();
        getSvgAndDrawQrCode("timing-patterns", qr);
        qr.clearNewFlags();
        qr.drawFinderPatterns();
        getSvgAndDrawQrCode("finder-patterns", qr);
        qr.clearNewFlags();
        qr.drawAlignmentPatterns();
        getSvgAndDrawQrCode("alignment-patterns", qr);
        qr.clearNewFlags();
        let alignPatContainer = getElem("alignment-patterns-container");
        alignPatContainer.hidden = qr.version == 1;
        let alignOverlapTiming = getElem("alignment-patterns-overlap-timing");
        alignOverlapTiming.hidden = qr.version < 7;
        qr.drawFormatBits(-1);
        getSvgAndDrawQrCode("dummy-format-bits", qr);
        qr.clearNewFlags();
        qr.drawVersionInformation();
        getSvgAndDrawQrCode("version-information", qr);
        qr.clearNewFlags();
        let verInfoContainer = getElem("version-information-container");
        verInfoContainer.hidden = qr.version < 7;
    }
    function doStep6(qr, allCodewords) {
        const zigZagScan = qr.makeZigZagScan();
        let zigZagSvg = getSvgAndDrawQrCode("zigzag-scan", qr);
        {
            let s = "";
            for (const [x, y] of zigZagScan)
                s += (s == "" ? "M" : "L") + (x + 0.5) + "," + (y + 0.5);
            let path = svgAppendNewElem(zigZagSvg, "path", "zigzag-line");
            path.setAttribute("d", s);
        }
        {
            let s = "";
            for (const [x, y] of zigZagScan)
                s += `M${x + 0.5},${y + 0.5}h0`;
            let path = svgAppendNewElem(zigZagSvg, "path", "zigzag-dots");
            path.setAttribute("d", s);
        }
        qr.drawCodewords(allCodewords, zigZagScan);
        qr.clearNewFlags();
        getSvgAndDrawQrCode("codewords-and-remainder", qr);
        getSvgAndDrawQrCode("codewords-and-remainder1", qr);
    }
    function doStep7(qr) {
        let result = [];
        for (let i = 0; i < 8; i++) {
            let mask = qr.makeMask(i);
            mask.clearNewFlags();
            result.push(mask);
            getSvgAndDrawQrCode("mask-pattern-" + i, mask);
            qr.applyMask(mask);
            qr.drawFormatBits(-1);
            qr.clearNewFlags();
            getSvgAndDrawQrCode("masked-qr-code-" + i, qr);
            qr.drawFormatBits(i);
            getSvgAndDrawQrCode("masked-qr-with-format-" + i, qr);
            qr.applyMask(mask);
            qr.clearNewFlags();
        }
        return result;
    }
    function doStep8(qr, masks) {
        function drawSvgAndAddGroup(name, i, border = 0) {
            let svg = getSvgAndDrawQrCode(`${name}-${i}`, qr, border);
            let group = svgAppendNewElem(svg, "g");
            return group;
        }
        function appendRect(container, x, y, width, height) {
            let rect = svgAppendNewElem(container, "rect");
            rect.setAttribute("x", x.toString());
            rect.setAttribute("y", y.toString());
            rect.setAttribute("width", width.toString());
            rect.setAttribute("height", height.toString());
            rect.setAttribute("rx", "0.5");
            rect.setAttribute("ry", "0.5");
        }
        return masks.map((mask, maskIndex) => {
            qr.applyMask(mask);
            qr.drawFormatBits(maskIndex);
            qr.clearNewFlags();
            const penaltyInfo = qr.computePenalties();
            let group = drawSvgAndAddGroup("horizontal-runs", maskIndex);
            for (const run of penaltyInfo.horizontalRuns)
                appendRect(group, run.startX, run.startY, run.runLength, 1);
            group = drawSvgAndAddGroup("vertical-runs", maskIndex);
            for (const run of penaltyInfo.verticalRuns)
                appendRect(group, run.startX, run.startY, 1, run.runLength);
            group = drawSvgAndAddGroup("two-by-two-boxes", maskIndex);
            for (const [x, y] of penaltyInfo.twoByTwoBoxes)
                appendRect(group, x, y, 2, 2);
            group = drawSvgAndAddGroup("horizontal-false-finders", maskIndex, 4);
            for (const run of penaltyInfo.horizontalFalseFinders)
                appendRect(group, run.startX, run.startY, run.runLength, 1);
            group = drawSvgAndAddGroup("vertical-false-finders", maskIndex, 4);
            for (const run of penaltyInfo.verticalFalseFinders)
                appendRect(group, run.startX, run.startY, 1, run.runLength);
            let tds = document.querySelectorAll(`#dark-light-balance-${maskIndex} td:nth-child(2)`);
            const total = qr.size * qr.size;
            const dark = penaltyInfo.numDarkModules;
            const percentDark = dark * 100 / total;
            tds[0].textContent = qr.size.toString();
            tds[1].textContent = total.toString();
            tds[2].textContent = (total - dark).toString();
            tds[3].textContent = dark.toString();
            tds[4].textContent = percentDark.toFixed(3) + "%";
            tds[5].textContent = (percentDark - 50).toFixed(3).replace(/-/, "\u2212") + "%";
            qr.applyMask(mask);
            return penaltyInfo;
        });
    }
    function doStep9(penalties) {
        let tbody = clearChildren("#select-best-mask");
        let result = -1;
        let minPenalty = Infinity;
        penalties.forEach((penaltyInfo, maskNum) => {
            const totalPoints = penaltyInfo.penaltyPoints.reduce((a, b) => a + b);
            if (totalPoints < minPenalty) {
                minPenalty = totalPoints;
                result = maskNum;
            }
            let tr = appendNewElem(tbody, "tr");
            const cells = [maskNum].concat(penaltyInfo.penaltyPoints).concat([totalPoints]);
            cells.forEach((val, i) => {
                let td = appendNewElem(tr, (i == 0 ? "th" : "td"));
                if (i < cells.length - 1)
                    td.textContent = val.toString();
                else
                    appendNewElem(td, "strong", val);
            });
        });
        getElem("lowest-penalty-mask").textContent = result.toString();
        tbody.children[result].classList.add("true");
        return result;
    }
    function getSvgAndDrawQrCode(id, qr, border = 0) {
        let svg = document.getElementById(id);
        border += 0.2;
        const a = -border, b = qr.size + border * 2;
        svg.setAttribute("viewBox", `${a} ${a} ${b} ${b}`);
        while (svg.firstChild !== null)
            svg.removeChild(svg.firstChild);
        const hasUnfilled = qr.modules.some(col => col.some(cell => cell instanceof UnfilledModule));
        if (hasUnfilled) {
            let rect = svgAppendNewElem(svg, "rect", "gray");
            rect.setAttribute("x", "0");
            rect.setAttribute("y", "0");
            rect.setAttribute("width", qr.size.toString());
            rect.setAttribute("height", qr.size.toString());
        }
        let lights = "";
        let darks = "";
        qr.modules.forEach((column, x) => {
            column.forEach((cell, y) => {
                if (cell instanceof FilledModule) {
                    const s = `M${x},${y}h1v1h-1z`;
                    if (cell.color)
                        darks += s;
                    else
                        lights += s;
                }
            });
        });
        let lightPath = svgAppendNewElem(svg, "path", "light");
        let darkPath = svgAppendNewElem(svg, "path", "dark");
        lightPath.setAttribute("d", lights);
        darkPath.setAttribute("d", darks);
        function isModuleNew(x, y) {
            if (!(0 <= x && x < qr.size && 0 <= y && y < qr.size))
                return false;
            const m = qr.modules[x][y];
            return m instanceof FilledModule && m.isNew;
        }
        let news = "";
        for (let x = 0; x <= qr.size; x++) {
            for (let y = 0; y <= qr.size; y++) {
                if (isModuleNew(x - 1, y) != isModuleNew(x, y))
                    news += `M${x},${y}v1`;
                if (isModuleNew(x, y - 1) != isModuleNew(x, y))
                    news += `M${x},${y}h1`;
            }
        }
        let newPath = svgAppendNewElem(svg, "path", "new");
        newPath.setAttribute("d", news);
        return svg;
    }
    /*---- Simple utility functions ----*/
    function getElem(id) {
        const result = document.getElementById(id);
        if (result instanceof HTMLElement)
            return result;
        throw new Error("Assertion error");
    }
    function getInput(id) {
        const result = getElem(id);
        if (result instanceof HTMLInputElement)
            return result;
        throw new Error("Assertion error");
    }
    function queryElem(q) {
        const result = document.querySelector(q);
        if (result instanceof HTMLElement)
            return result;
        throw new Error("Assertion error");
    }
    function clearChildren(elemOrQuery) {
        let elem;
        if (typeof elemOrQuery == "string")
            elem = queryElem(elemOrQuery);
        else
            elem = elemOrQuery;
        elem.replaceChildren();
        return elem;
    }
    function appendNewElem(container, tag, text) {
        let result = container.appendChild(document.createElement(tag));
        if (text !== undefined)
            result.textContent = text.toString();
        return result;
    }
    function svgAppendNewElem(container, tag, cls) {
        let result = container.appendChild(document.createElementNS(container.namespaceURI, tag));
        if (cls !== undefined)
            result.setAttribute("class", cls);
        return result;
    }
    function intToBits(val, len) {
        if (len < 0 || len > 31 || val >>> len != 0)
            throw new RangeError("Value out of range");
        let result = [];
        for (let i = len - 1; i >= 0; i--)
            result.push((val >>> i) & 1);
        return result;
    }
    function byteToHex(val) {
        return val.toString(16).toUpperCase().padStart(2, "0");
    }
    /*---- Helper class ----*/
    class CodePoint {
        constructor(utf32) {
            this.utf32 = utf32;
            this.utf16 = String.fromCodePoint(utf32);
            if (utf32 < 0)
                throw new RangeError("Invalid code point");
            else if (utf32 < 0x80)
                this.utf8 = [utf32];
            else {
                let n;
                if (utf32 < 0x800)
                    n = 2;
                else if (utf32 < 0x10000)
                    n = 3;
                else if (utf32 < 0x110000)
                    n = 4;
                else
                    throw new RangeError("Invalid code point");
                this.utf8 = [];
                for (let i = 0; i < n; i++, utf32 >>>= 6)
                    this.utf8.unshift(0x80 | (utf32 & 0x3F));
                this.utf8[0] |= (0xF00 >>> n) & 0xFF;
            }
        }
        static toArray(s) {
            let result = [];
            for (const ch of s) {
                const cc = ch.codePointAt(0);
                if (0xD800 <= cc && cc < 0xE000)
                    throw new RangeError("Invalid UTF-16 string");
                result.push(new CodePoint(cc));
            }
            return result;
        }
    }
    if (!("replaceChildren" in Element.prototype)) { // Polyfill
        Element.prototype.replaceChildren = function (...newChildren) {
            while (this.firstChild !== null)
                this.removeChild(this.firstChild);
            this.append(...newChildren);
        };
    }
    initialize();
})(app || (app = {}));
