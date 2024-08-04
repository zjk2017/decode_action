//Sun Aug 04 2024 15:40:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(S) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (V) {
      return typeof V;
    } : function (V) {
      return V && "function" == typeof Symbol && V.constructor === Symbol && V !== Symbol.prototype ? "symbol" : typeof V;
    };
    return b(S);
  }
  function c(S, T) {
    var V = "undefined" != typeof Symbol && S[Symbol.iterator] || S["@@iterator"];
    if (!V) {
      if (Array.isArray(S) || (V = g(S)) || T && S && "number" == typeof S.length) {
        V && (S = V);
        var W = 0,
          X = function () {};
        return {
          s: X,
          n: function () {
            var a2 = {
              done: !0
            };
            return W >= S.length ? a2 : {
              done: !1,
              value: S[W++]
            };
          },
          e: function (a2) {
            throw a2;
          },
          f: X
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var Y,
      Z = !0,
      a0 = !1;
    return {
      s: function () {
        V = V.call(S);
      },
      n: function () {
        var a3 = V.next();
        Z = a3.done;
        return a3;
      },
      e: function (a3) {
        a0 = !0;
        Y = a3;
      },
      f: function () {
        try {
          Z || null == V.return || V.return();
        } finally {
          if (a0) {
            throw Y;
          }
        }
      }
    };
  }
  function d(S, T) {
    return j(S) || i(S, T) || g(S, T) || f();
  }
  function f() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function g(S, T) {
    if (S) {
      if ("string" == typeof S) {
        return h(S, T);
      }
      var V = {}.toString.call(S).slice(8, -1);
      "Object" === V && S.constructor && (V = S.constructor.name);
      return "Map" === V || "Set" === V ? Array.from(S) : "Arguments" === V || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V) ? h(S, T) : void 0;
    }
  }
  function h(S, T) {
    (null == T || T > S.length) && (T = S.length);
    for (var V = 0, W = Array(T); V < T; V++) {
      W[V] = S[V];
    }
    return W;
  }
  function i(S, T) {
    var V = null == S ? null : "undefined" != typeof Symbol && S[Symbol.iterator] || S["@@iterator"];
    if (null != V) {
      var W,
        X,
        Y,
        Z,
        a0 = [],
        a1 = !0,
        a2 = !1;
      try {
        if (Y = (V = V.call(S)).next, 0 === T) {
          if (Object(V) !== V) {
            return;
          }
          a1 = !1;
        } else {
          for (; !(a1 = (W = Y.call(V)).done) && (a0.push(W.value), a0.length !== T); a1 = !0) {}
        }
      } catch (a6) {
        a2 = !0;
        X = a6;
      } finally {
        try {
          if (!a1 && null != V.return && (Z = V.return(), Object(Z) !== Z)) {
            return;
          }
        } finally {
          if (a2) {
            throw X;
          }
        }
      }
      return a0;
    }
  }
  function j(S) {
    if (Array.isArray(S)) {
      return S;
    }
  }
  function k() {
    'use strict';

    k = function () {
      return V;
    };
    var U,
      V = {},
      W = Object.prototype,
      X = W.hasOwnProperty,
      Y = Object.defineProperty || function (aq, ar, as) {
        aq[ar] = as.value;
      },
      Z = "function" == typeof Symbol ? Symbol : {},
      a0 = Z.iterator || "@@iterator",
      a1 = Z.asyncIterator || "@@asyncIterator",
      a2 = Z.toStringTag || "@@toStringTag";
    function a3(aq, ar, as) {
      var at = {
        value: as,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aq, ar, at);
      return aq[ar];
    }
    try {
      a3({}, "");
    } catch (ar) {
      a3 = function (at, au, av) {
        return at[au] = av;
      };
    }
    function a4(at, au, av, aw) {
      var ax = au && au.prototype instanceof ab ? au : ab,
        ay = Object.create(ax.prototype),
        az = new ao(aw || []);
      Y(ay, "_invoke", {
        value: ak(at, av, az)
      });
      return ay;
    }
    function a5(at, au, av) {
      try {
        return {
          type: "normal",
          arg: at.call(au, av)
        };
      } catch (aB) {
        var ay = {};
        ay.type = "throw";
        ay.arg = aB;
        return ay;
      }
    }
    V.wrap = a4;
    var a6 = "suspendedStart",
      a7 = "suspendedYield",
      a8 = "executing",
      a9 = "completed",
      aa = {};
    function ab() {}
    function ac() {}
    function ad() {}
    var ae = {};
    a3(ae, a0, function () {
      return this;
    });
    var af = Object.getPrototypeOf,
      ag = af && af(af(ap([])));
    ag && ag !== W && X.call(ag, a0) && (ae = ag);
    ad.prototype = ab.prototype = Object.create(ae);
    var ah = ad.prototype;
    function ai(at) {
      ["next", "throw", "return"].forEach(function (av) {
        a3(at, av, function (aw) {
          return this._invoke(av, aw);
        });
      });
    }
    function aj(at, au) {
      function ay(az, aA, aB, aC) {
        var aE = a5(at[az], at, aA);
        if ("throw" !== aE.type) {
          var aF = aE.arg,
            aG = aF.value;
          return aG && "object" == b(aG) && X.call(aG, "__await") ? au.resolve(aG.__await).then(function (aH) {
            ay("next", aH, aB, aC);
          }, function (aH) {
            ay("throw", aH, aB, aC);
          }) : au.resolve(aG).then(function (aH) {
            aF.value = aH;
            aB(aF);
          }, function (aH) {
            return ay("throw", aH, aB, aC);
          });
        }
        aC(aE.arg);
      }
      var aw;
      Y(this, "_invoke", {
        value: function (az, aA) {
          function aC() {
            return new au(function (aE, aF) {
              ay(az, aA, aE, aF);
            });
          }
          return aw = aw ? aw.then(aC, aC) : aC();
        }
      });
    }
    function ak(at, au, av) {
      var ax = a6;
      return function (ay, az) {
        if (ax === a8) {
          throw Error("Generator is already running");
        }
        if (ax === a9) {
          if ("throw" === ay) {
            throw az;
          }
          var aB = {};
          aB.value = U;
          aB.done = !0;
          return aB;
        }
        for (av.method = ay, av.arg = az;;) {
          var aC = av.delegate;
          if (aC) {
            var aD = al(aC, av);
            if (aD) {
              if (aD === aa) {
                continue;
              }
              return aD;
            }
          }
          if ("next" === av.method) {
            av.sent = av._sent = av.arg;
          } else {
            if ("throw" === av.method) {
              if (ax === a6) {
                throw ax = a9, av.arg;
              }
              av.dispatchException(av.arg);
            } else {
              "return" === av.method && av.abrupt("return", av.arg);
            }
          }
          ax = a8;
          var aE = a5(at, au, av);
          if ("normal" === aE.type) {
            if (ax = av.done ? a9 : a7, aE.arg === aa) {
              continue;
            }
            var aF = {};
            aF.value = aE.arg;
            aF.done = av.done;
            return aF;
          }
          "throw" === aE.type && (ax = a9, av.method = "throw", av.arg = aE.arg);
        }
      };
    }
    function al(at, au) {
      var aw = au.method,
        ax = at.iterator[aw];
      if (ax === U) {
        au.delegate = null;
        "throw" === aw && at.iterator.return && (au.method = "return", au.arg = U, al(at, au), "throw" === au.method) || "return" !== aw && (au.method = "throw", au.arg = new TypeError("The iterator does not provide a '" + aw + "' method"));
        return aa;
      }
      var ay = a5(ax, at.iterator, au.arg);
      if ("throw" === ay.type) {
        au.method = "throw";
        au.arg = ay.arg;
        au.delegate = null;
        return aa;
      }
      var az = ay.arg;
      return az ? az.done ? (au[at.resultName] = az.value, au.next = at.nextLoc, "return" !== au.method && (au.method = "next", au.arg = U), au.delegate = null, aa) : az : (au.method = "throw", au.arg = new TypeError("iterator result is not an object"), au.delegate = null, aa);
    }
    function am(at) {
      var au = {
        tryLoc: at[0]
      };
      var av = au;
      1 in at && (av.catchLoc = at[1]);
      2 in at && (av.finallyLoc = at[2], av.afterLoc = at[3]);
      this.tryEntries.push(av);
    }
    function an(at) {
      var au = at.completion || {};
      au.type = "normal";
      delete au.arg;
      at.completion = au;
    }
    function ao(at) {
      var au = {
        tryLoc: "root"
      };
      this.tryEntries = [au];
      at.forEach(am, this);
      this.reset(!0);
    }
    function ap(at) {
      if (at || "" === at) {
        var av = at[a0];
        if (av) {
          return av.call(at);
        }
        if ("function" == typeof at.next) {
          return at;
        }
        if (!isNaN(at.length)) {
          var aw = -1,
            ax = function aA() {
              for (; ++aw < at.length;) {
                if (X.call(at, aw)) {
                  aA.value = at[aw];
                  aA.done = !1;
                  return aA;
                }
              }
              aA.value = U;
              aA.done = !0;
              return aA;
            };
          return ax.next = ax;
        }
      }
      throw new TypeError(b(at) + " is not iterable");
    }
    ac.prototype = ad;
    Y(ah, "constructor", {
      value: ad,
      configurable: !0
    });
    Y(ad, "constructor", {
      value: ac,
      configurable: !0
    });
    ac.displayName = a3(ad, a2, "GeneratorFunction");
    V.isGeneratorFunction = function (at) {
      var au = "function" == typeof at && at.constructor;
      return !!au && (au === ac || "GeneratorFunction" === (au.displayName || au.name));
    };
    V.mark = function (at) {
      Object.setPrototypeOf ? Object.setPrototypeOf(at, ad) : (at.__proto__ = ad, a3(at, a2, "GeneratorFunction"));
      at.prototype = Object.create(ah);
      return at;
    };
    V.awrap = function (at) {
      var au = {
        __await: at
      };
      return au;
    };
    ai(aj.prototype);
    a3(aj.prototype, a1, function () {
      return this;
    });
    V.AsyncIterator = aj;
    V.async = function (at, au, av, aw, ax) {
      void 0 === ax && (ax = Promise);
      var aA = new aj(a4(at, au, av, aw), ax);
      return V.isGeneratorFunction(au) ? aA : aA.next().then(function (aB) {
        return aB.done ? aB.value : aA.next();
      });
    };
    ai(ah);
    a3(ah, a2, "Generator");
    a3(ah, a0, function () {
      return this;
    });
    a3(ah, "toString", function () {
      return "[object Generator]";
    });
    V.keys = function (at) {
      var av = Object(at),
        aw = [];
      for (var ax in av) aw.push(ax);
      aw.reverse();
      return function az() {
        for (; aw.length;) {
          var aA = aw.pop();
          if (aA in av) {
            az.value = aA;
            az.done = !1;
            return az;
          }
        }
        az.done = !0;
        return az;
      };
    };
    V.values = ap;
    ao.prototype = {
      constructor: ao,
      reset: function (at) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = U, this.done = !1, this.delegate = null, this.method = "next", this.arg = U, this.tryEntries.forEach(an), !at) {
          for (var av in this) "t" === av.charAt(0) && X.call(this, av) && !isNaN(+av.slice(1)) && (this[av] = U);
        }
      },
      stop: function () {
        this.done = !0;
        var at = this.tryEntries[0].completion;
        if ("throw" === at.type) {
          throw at.arg;
        }
        return this.rval;
      },
      dispatchException: function (at) {
        if (this.done) {
          throw at;
        }
        var av = this;
        function aC(aD, aE) {
          ay.type = "throw";
          ay.arg = at;
          av.next = aD;
          aE && (av.method = "next", av.arg = U);
          return !!aE;
        }
        for (var aw = this.tryEntries.length - 1; aw >= 0; --aw) {
          var ax = this.tryEntries[aw],
            ay = ax.completion;
          if ("root" === ax.tryLoc) {
            return aC("end");
          }
          if (ax.tryLoc <= this.prev) {
            var az = X.call(ax, "catchLoc"),
              aA = X.call(ax, "finallyLoc");
            if (az && aA) {
              if (this.prev < ax.catchLoc) {
                return aC(ax.catchLoc, !0);
              }
              if (this.prev < ax.finallyLoc) {
                return aC(ax.finallyLoc);
              }
            } else {
              if (az) {
                if (this.prev < ax.catchLoc) {
                  return aC(ax.catchLoc, !0);
                }
              } else {
                if (!aA) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < ax.finallyLoc) {
                  return aC(ax.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (at, au) {
        for (var aw = this.tryEntries.length - 1; aw >= 0; --aw) {
          var ax = this.tryEntries[aw];
          if (ax.tryLoc <= this.prev && X.call(ax, "finallyLoc") && this.prev < ax.finallyLoc) {
            var ay = ax;
            break;
          }
        }
        ay && ("break" === at || "continue" === at) && ay.tryLoc <= au && au <= ay.finallyLoc && (ay = null);
        var az = ay ? ay.completion : {};
        az.type = at;
        az.arg = au;
        return ay ? (this.method = "next", this.next = ay.finallyLoc, aa) : this.complete(az);
      },
      complete: function (at, au) {
        if ("throw" === at.type) {
          throw at.arg;
        }
        "break" === at.type || "continue" === at.type ? this.next = at.arg : "return" === at.type ? (this.rval = this.arg = at.arg, this.method = "return", this.next = "end") : "normal" === at.type && au && (this.next = au);
        return aa;
      },
      finish: function (at) {
        for (var av = this.tryEntries.length - 1; av >= 0; --av) {
          var aw = this.tryEntries[av];
          if (aw.finallyLoc === at) {
            this.complete(aw.completion, aw.afterLoc);
            an(aw);
            return aa;
          }
        }
      },
      catch: function (at) {
        for (var av = this.tryEntries.length - 1; av >= 0; --av) {
          var aw = this.tryEntries[av];
          if (aw.tryLoc === at) {
            var ax = aw.completion;
            if ("throw" === ax.type) {
              var ay = ax.arg;
              an(aw);
            }
            return ay;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (at, au, av) {
        this.delegate = {
          iterator: ap(at),
          resultName: au,
          nextLoc: av
        };
        "next" === this.method && (this.arg = U);
        return aa;
      }
    };
    return V;
  }
  function l(S, T, U, V, W, X, Y) {
    try {
      var a0 = S[X](Y),
        a1 = a0.value;
    } catch (a4) {
      return void U(a4);
    }
    a0.done ? T(a1) : Promise.resolve(a1).then(V, W);
  }
  function m(S) {
    return function () {
      var U = this,
        V = arguments;
      return new Promise(function (W, X) {
        var Z = S.apply(U, V);
        function a0(a2) {
          l(Z, W, X, a0, a1, "next", a2);
        }
        function a1(a2) {
          l(Z, W, X, a0, a1, "throw", a2);
        }
        a0(void 0);
      });
    };
  }
  var n = ($.isNode() ? process.env.ZSJD : $.getdata("ZSJD")) || "",
    o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    p = void 0,
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "k9o5fc7l6hy2l213",
    y = "35c782a2";
  function z() {
    return A.apply(this, arguments);
  }
  function A() {
    A = m(k().mark(function S() {
      var V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at;
      return k().wrap(function (au) {
        for (;;) {
          switch (au.prev = au.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                au.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              au.next = 5;
              return Q("先去boxjs填写账号密码");
            case 5:
              return au.abrupt("return");
            case 6:
              au.next = 8;
              return O();
            case 8:
              p = au.sent;
              V = n.split(" ");
              W = c(V);
              au.prev = 11;
              W.s();
            case 13:
              if ((X = W.n()).done) {
                au.next = 143;
                break;
              }
              if (Y = X.value, console.log("随机生成device"), Z = M(), t = Z.deviceId, u = Z.model, console.log(t), console.log(u), s = Y.split("&")[0], r = Y.split("&")[1], console.log("用户：".concat(s, "开始任务")), console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), v) {
                au.next = 37;
                break;
              }
              au.next = 30;
              return B("/api/adv/get_adv_float_v1?timestamp=1722742746854&noncestr=ef47f80b74f14f8192cb9ec9725f6439&sign=0270d451eecc93100986e8ee110a42a5");
            case 30:
              for (a0 = au.sent, a1 = a0.data[0].link, a2 = a1.split("?")[1], a3 = {}, a4 = a2.split("&"), a5 = 0, a6 = a4.length; a5 < a6; a5++) {
                a7 = a4[a5].split("=");
                a3[a7[0]] = a7[1];
              }
              v = a3.id;
            case 37:
              var aw = {};
              aw.debug = 0;
              aw.userId = "";
              console.log(v);
              console.log("获取key和token");
              au.next = 41;
              return D("/api/member/login", aw);
            case 41:
              a8 = au.sent;
              y = a8.data.key;
              w = "Bearer " + a8.data.token;
              console.log(y);
              console.log(w);
              console.log("获取抽奖id");
              au.next = 49;
              return F("/api/study/detail?id=".concat(v), {
                id: v
              });
            case 49:
              a9 = au.sent;
              aa = a9.data.lottery.lottery_id;
              console.log(aa);
              console.log("开始阅读");
              ab = c(a9.data.levels);
              au.prev = 54;
              ab.s();
            case 56:
              if ((ac = ab.n()).done) {
                au.next = 87;
                break;
              }
              ad = ac.value;
              au.next = 60;
              return F("/api/study/level?id=".concat(ad.id), {
                id: ad.id
              });
            case 60:
              if (ae = au.sent, console.log(ae.data.level.name), ae.data.level.task_num != ae.data.completedTasks.length) {
                au.next = 65;
                break;
              }
              console.log("已完成");
              return au.abrupt("continue", 85);
            case 65:
              af = c(ae.data.tasks);
              au.prev = 66;
              af.s();
            case 68:
              if ((ag = af.n()).done) {
                au.next = 77;
                break;
              }
              ah = ag.value;
              console.log("文章：".concat(ah.name));
              au.next = 73;
              return D("/api/study/task/complete", {
                id: ah.id
              });
            case 73:
              ai = au.sent;
              console.log("完成任务：".concat(ai.message));
            case 75:
              au.next = 68;
              break;
            case 77:
              au.next = 82;
              break;
            case 79:
              au.prev = 79;
              au.t0 = au.catch(66);
              af.e(au.t0);
            case 82:
              au.prev = 82;
              af.f();
              return au.finish(82);
            case 85:
              au.next = 56;
              break;
            case 87:
              au.next = 92;
              break;
            case 89:
              au.prev = 89;
              au.t1 = au.catch(54);
              ab.e(au.t1);
            case 92:
              au.prev = 92;
              ab.f();
              return au.finish(92);
            case 95:
              au.next = 97;
              return D("/api/lotterybigwheel/_ac_lottery_count", {
                id: aa,
                module: "study"
              });
            case 97:
              aj = au.sent;
              console.log("拥有".concat(aj.data.count, "次抽奖"));
              ak = 0;
            case 100:
              if (!(ak < aj.data.count)) {
                au.next = 141;
                break;
              }
              au.next = 103;
              return D("/api/lotterybigwheel/_ac_lottery", {
                id: aa,
                app_id: x,
                module: "study",
                optionHash: ""
              });
            case 103:
              if (al = au.sent, 10000 != al.code) {
                au.next = 137;
                break;
              }
              console.log(al.message);
              au.next = 108;
              return D("/api/captcha/get", {
                activity_id: aa,
                module: "bigWheel"
              });
            case 108:
              am = au.sent;
              an = am.data.jigsawImageUrl;
              ao = am.data.originalImageUrl;
              console.log("滑块：".concat(an));
              console.log("背景：".concat(ao));
              ap = am.data.token;
              aq = am.data.secretKey;
              console.log("秘钥：".concat(aq));
              au.next = 118;
              return H({
                slidingImage: an,
                backImage: ao
              });
            case 118:
              if (ar = au.sent, ar) {
                au.next = 124;
                break;
              }
              console.log("ddddocr服务异常");
              au.next = 123;
              return Q("ddddocr服务异常");
            case 123:
              return au.abrupt("continue", 138);
            case 124:
              console.log(ar);
              as = J(JSON.stringify({
                x: ar.result,
                y: 5
              }), aq);
              au.next = 128;
              return D("/api/captcha/check", {
                activity_id: aa,
                module: "bigWheel",
                cap_token: ap,
                point: as
              });
            case 128:
              if (at = au.sent, console.log("验证滑块：" + at.message), "操作成功" != at.message) {
                au.next = 135;
                break;
              }
              au.next = 133;
              return D("/api/lotterybigwheel/_ac_lottery", {
                id: aa,
                app_id: x,
                module: "study",
                optionHash: ""
              });
            case 133:
              al = au.sent;
              al.data.code ? (console.log("抽奖获得：".concat(al.data.title)), q += "用户：".concat(s, " 抽奖获得：").concat(al.data.title, "\n")) : (console.log("抽奖获得：".concat(al.data.tip_title)), q += "用户：".concat(s, " 抽奖获得：").concat(al.data.tip_title, "\n"));
            case 135:
              au.next = 138;
              break;
            case 137:
              al.data.code ? (console.log("抽奖获得：".concat(al.data.title)), q += "用户：".concat(s, " 抽奖获得：").concat(al.data.title, "\n")) : (console.log("抽奖获得：".concat(al.data.tip_title)), q += "用户：".concat(s, " 抽奖获得：").concat(al.data.tip_title, "\n"));
            case 138:
              ak++;
              au.next = 100;
              break;
            case 141:
              au.next = 13;
              break;
            case 143:
              au.next = 148;
              break;
            case 145:
              au.prev = 145;
              au.t2 = au.catch(11);
              W.e(au.t2);
            case 148:
              au.prev = 148;
              W.f();
              return au.finish(148);
            case 151:
              if (!q) {
                au.next = 154;
                break;
              }
              au.next = 154;
              return Q(q);
            case 154:
            case "end":
              return au.stop();
          }
        }
      }, S, null, [[11, 145, 148, 151], [54, 89, 92, 95], [66, 79, 82, 85]]);
    }));
    return A.apply(this, arguments);
  }
  function B(S) {
    return C.apply(this, arguments);
  }
  function C() {
    C = m(k().mark(function T(U) {
      return k().wrap(function (W) {
        for (;;) {
          switch (W.prev = W.next) {
            case 0:
              return W.abrupt("return", new Promise(function (Y) {
                var a0 = {
                  url: "https://mapi.cloud.jinhua.com.cn".concat(U),
                  headers: {
                    "x-version": "4.0.5",
                    appid: "puCJwN2uie5THu6c",
                    "x-driver-id": t,
                    "x-phone-models": u,
                    "x-token": r,
                    "x-driver-type": "Android 11",
                    "Accept-Encoding": "gzip",
                    "user-agent": "Dart/2.18 (dart:io)"
                  }
                };
                $.get(a0, function () {
                  var a2 = m(k().mark(function a3(a4, a5, a6) {
                    return k().wrap(function (a8) {
                      for (;;) {
                        switch (a8.prev = a8.next) {
                          case 0:
                            if (a8.prev = 0, !a4) {
                              a8.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a4)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a8.next = 9;
                            break;
                          case 6:
                            a8.next = 8;
                            return $.wait(2000);
                          case 8:
                            Y(JSON.parse(a6));
                          case 9:
                            a8.next = 14;
                            break;
                          case 11:
                            a8.prev = 11;
                            a8.t0 = a8.catch(0);
                            $.logErr(a8.t0, a5);
                          case 14:
                            a8.prev = 14;
                            Y();
                            return a8.finish(14);
                          case 17:
                          case "end":
                            return a8.stop();
                        }
                      }
                    }, a3, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a4, a5, a6) {
                    return a2.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return W.stop();
          }
        }
      }, T);
    }));
    return C.apply(this, arguments);
  }
  function D(S, T) {
    return E.apply(this, arguments);
  }
  function E() {
    E = m(k().mark(function T(U, V) {
      var W;
      return k().wrap(function (X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              W = K(V);
              return X.abrupt("return", new Promise(function (Z) {
                var a1 = {
                  "access-type": "app",
                  "access-module": "study",
                  "access-device-id": t,
                  "access-auth-id": s,
                  "access-api-signature": W.signature,
                  "access-nonce-str": W.uuid,
                  authorization: w,
                  "access-app-id": x,
                  "access-timestamp": W.time,
                  "access-api-token": r,
                  accept: "application/json, text/plain, */*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 JinHua_ZSJD jcy_version:B",
                  "content-type": "application/json; charset=UTF-8",
                  origin: "https://op-h5.cloud.jinhua.com.cn",
                  "x-requested-with": "com.zjonline.zhuji",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  referer: "https://op-h5.cloud.jinhua.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var a2 = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(U),
                  headers: a1,
                  body: JSON.stringify(V)
                };
                $.post(a2, function () {
                  var a4 = m(k().mark(function a5(a6, a7, a8) {
                    return k().wrap(function (aa) {
                      for (;;) {
                        switch (aa.prev = aa.next) {
                          case 0:
                            if (aa.prev = 0, !a6) {
                              aa.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a6)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aa.next = 9;
                            break;
                          case 6:
                            aa.next = 8;
                            return $.wait(2000);
                          case 8:
                            Z(JSON.parse(a8));
                          case 9:
                            aa.next = 14;
                            break;
                          case 11:
                            aa.prev = 11;
                            aa.t0 = aa.catch(0);
                            $.logErr(aa.t0, a7);
                          case 14:
                            aa.prev = 14;
                            Z();
                            return aa.finish(14);
                          case 17:
                          case "end":
                            return aa.stop();
                        }
                      }
                    }, a5, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a6, a7, a8) {
                    return a4.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return X.stop();
          }
        }
      }, T);
    }));
    return E.apply(this, arguments);
  }
  function F(S, T) {
    return G.apply(this, arguments);
  }
  function G() {
    G = m(k().mark(function S(T, U) {
      var W;
      return k().wrap(function (X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              W = K(U);
              return X.abrupt("return", new Promise(function (Z) {
                var a0 = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(T),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": t,
                    "access-auth-id": s,
                    "access-api-signature": W.signature,
                    "access-nonce-str": W.uuid,
                    authorization: w,
                    "access-app-id": x,
                    "access-timestamp": W.time,
                    "access-api-token": r,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 JinHua_ZSJD jcy_version:B",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(a0, function () {
                  var a2 = m(k().mark(function a3(a4, a5, a6) {
                    return k().wrap(function (a7) {
                      for (;;) {
                        switch (a7.prev = a7.next) {
                          case 0:
                            if (a7.prev = 0, !a4) {
                              a7.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a4)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a7.next = 9;
                            break;
                          case 6:
                            a7.next = 8;
                            return $.wait(2000);
                          case 8:
                            Z(JSON.parse(a6));
                          case 9:
                            a7.next = 14;
                            break;
                          case 11:
                            a7.prev = 11;
                            a7.t0 = a7.catch(0);
                            $.logErr(a7.t0, a5);
                          case 14:
                            a7.prev = 14;
                            Z();
                            return a7.finish(14);
                          case 17:
                          case "end":
                            return a7.stop();
                        }
                      }
                    }, a3, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a4, a5, a6) {
                    return a2.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return X.stop();
          }
        }
      }, S);
    }));
    return G.apply(this, arguments);
  }
  function H(S) {
    return I.apply(this, arguments);
  }
  function I() {
    I = m(k().mark(function T(U) {
      return k().wrap(function (V) {
        for (;;) {
          switch (V.prev = V.next) {
            case 0:
              return V.abrupt("return", new Promise(function (X) {
                var Y = {
                  url: "".concat(o, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(U)
                };
                $.post(Y, function (Z, a0, a1) {
                  try {
                    Z ? (console.log("".concat(JSON.stringify(Z))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : X(JSON.parse(a1));
                  } catch (a2) {
                    $.logErr(a2, a0);
                  } finally {
                    X();
                  }
                });
              }));
            case 1:
            case "end":
              return V.stop();
          }
        }
      }, T);
    }));
    return I.apply(this, arguments);
  }
  function J(S, T) {
    CryptoJS = p.createCryptoJS();
    var U = CryptoJS.enc.Utf8.parse(T),
      V = CryptoJS.enc.Utf8.parse(S),
      W = CryptoJS.AES.encrypt(V, U, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return W.toString();
  }
  function K(S) {
    var V = L(),
      W = Date.now(),
      X = {
        app_id: x,
        device_id: t,
        nonce_str: V,
        source_type: "app",
        timestamp: W,
        auth_id: s,
        token: r
      };
    Object.entries(S).forEach(function (a3) {
      var a4 = d(a3, 2),
        a5 = a4[0],
        a6 = a4[1];
      X[a5] = a6;
    });
    var a0 = Object.keys(X).sort(),
      a1 = a0.map(function (a3) {
        return "".concat(a3, "=").concat(X[a3]);
      }).join("&&");
    a1 = a1 + "&&" + y;
    CryptoJS = p.createCryptoJS();
    var Z = CryptoJS.SHA256(a1).toString();
    var Y = {};
    Y.uuid = V;
    Y.time = W;
    Y.signature = Z;
    return Y;
  }
  function L() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (S) {
      var T = 16 * Math.random() | 0,
        U = "x" === S ? T : 3 & T | 8;
      return U.toString(16);
    });
  }
  function M() {
    var S = L(),
      T = "Xiaomi " + N(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      U = {
        model: T,
        deviceId: S
      };
    return U;
  }
  function N(S) {
    return S[Math.floor(Math.random() * S.length)];
  }
  function O() {
    return P.apply(this, arguments);
  }
  function P() {
    P = m(k().mark(function T() {
      var V;
      return k().wrap(function W(X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              if (V = $.getdata("Utils_Code") || "", !V || !Object.keys(V).length) {
                X.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(V);
              return X.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return X.abrupt("return", new Promise(function () {
                var Z = m(k().mark(function a0(a1) {
                  return k().wrap(function a4(a5) {
                    for (;;) {
                      switch (a5.prev = a5.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (a7) {
                            $.setdata(a7, "Utils_Code");
                            eval(a7);
                            console.log("✅ Utils加载成功, 请继续");
                            a1(creatUtils());
                          });
                        case 1:
                        case "end":
                          return a5.stop();
                      }
                    }
                  }, a0);
                }));
                return function (a1) {
                  return Z.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return X.stop();
          }
        }
      }, T);
    }));
    return P.apply(this, arguments);
  }
  function Q(S) {
    return R.apply(this, arguments);
  }
  function R() {
    R = m(k().mark(function T(U) {
      return k().wrap(function (V) {
        for (;;) {
          switch (V.prev = V.next) {
            case 0:
              if (!$.isNode()) {
                V.next = 5;
                break;
              }
              V.next = 3;
              return notify.sendNotify($.name, U);
            case 3:
              V.next = 6;
              break;
            case 5:
              $.msg($.name, "", U);
            case 6:
            case "end":
              return V.stop();
          }
        }
      }, T);
    }));
    return R.apply(this, arguments);
  }
  m(k().mark(function S() {
    return k().wrap(function (T) {
      for (;;) {
        switch (T.prev = T.next) {
          case 0:
            T.next = 2;
            return z();
          case 2:
          case "end":
            return T.stop();
        }
      }
    }, S);
  }))().catch(function (T) {
    $.log(T);
  }).finally(function () {
    $.done({});
  });
})();