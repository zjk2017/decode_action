//Mon Aug 05 2024 15:43:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(al) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ap) {
      return typeof ap;
    } : function (ap) {
      return ap && "function" == typeof Symbol && ap.constructor === Symbol && ap !== Symbol.prototype ? "symbol" : typeof ap;
    };
    return b(al);
  }
  function c(al, am) {
    var ao = "undefined" != typeof Symbol && al[Symbol.iterator] || al["@@iterator"];
    if (!ao) {
      if (Array.isArray(al) || (ao = g(al)) || am && al && "number" == typeof al.length) {
        ao && (al = ao);
        var ap = 0,
          aq = function () {};
        return {
          s: aq,
          n: function () {
            var av = {
              done: !0
            };
            return ap >= al.length ? av : {
              done: !1,
              value: al[ap++]
            };
          },
          e: function (av) {
            throw av;
          },
          f: aq
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ar,
      as = !0,
      at = !1;
    return {
      s: function () {
        ao = ao.call(al);
      },
      n: function () {
        var aw = ao.next();
        as = aw.done;
        return aw;
      },
      e: function (aw) {
        at = !0;
        ar = aw;
      },
      f: function () {
        try {
          as || null == ao.return || ao.return();
        } finally {
          if (at) {
            throw ar;
          }
        }
      }
    };
  }
  function d(al, am) {
    return j(al) || i(al, am) || g(al, am) || f();
  }
  function f() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function g(al, am) {
    if (al) {
      if ("string" == typeof al) {
        return h(al, am);
      }
      var an = {}.toString.call(al).slice(8, -1);
      "Object" === an && al.constructor && (an = al.constructor.name);
      return "Map" === an || "Set" === an ? Array.from(al) : "Arguments" === an || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(an) ? h(al, am) : void 0;
    }
  }
  function h(al, am) {
    (null == am || am > al.length) && (am = al.length);
    for (var an = 0, ao = Array(am); an < am; an++) {
      ao[an] = al[an];
    }
    return ao;
  }
  function i(al, am) {
    var ao = null == al ? null : "undefined" != typeof Symbol && al[Symbol.iterator] || al["@@iterator"];
    if (null != ao) {
      var ap,
        aq,
        ar,
        as,
        at = [],
        au = !0,
        av = !1;
      try {
        if (ar = (ao = ao.call(al)).next, 0 === am) {
          if (Object(ao) !== ao) {
            return;
          }
          au = !1;
        } else {
          for (; !(au = (ap = ar.call(ao)).done) && (at.push(ap.value), at.length !== am); au = !0) {}
        }
      } catch (ay) {
        av = !0;
        aq = ay;
      } finally {
        try {
          if (!au && null != ao.return && (as = ao.return(), Object(as) !== as)) {
            return;
          }
        } finally {
          if (av) {
            throw aq;
          }
        }
      }
      return at;
    }
  }
  function j(al) {
    if (Array.isArray(al)) {
      return al;
    }
  }
  function k() {
    'use strict';

    k = function () {
      return an;
    };
    var am,
      an = {},
      ao = Object.prototype,
      ap = ao.hasOwnProperty,
      aq = Object.defineProperty || function (aS, aT, aU) {
        aS[aT] = aU.value;
      },
      ar = "function" == typeof Symbol ? Symbol : {},
      as = ar.iterator || "@@iterator",
      at = ar.asyncIterator || "@@asyncIterator",
      au = ar.toStringTag || "@@toStringTag";
    function av(aS, aT, aU) {
      var aV = {
        value: aU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aS, aT, aV);
      return aS[aT];
    }
    try {
      av({}, "");
    } catch (aT) {
      av = function (aV, aW, aX) {
        return aV[aW] = aX;
      };
    }
    function aw(aV, aW, aX, aY) {
      var aZ = aW && aW.prototype instanceof aD ? aW : aD,
        b0 = Object.create(aZ.prototype),
        b1 = new aQ(aY || []);
      aq(b0, "_invoke", {
        value: aM(aV, aX, b1)
      });
      return b0;
    }
    function ax(aV, aW, aX) {
      try {
        return {
          type: "normal",
          arg: aV.call(aW, aX)
        };
      } catch (b2) {
        var aZ = {};
        aZ.type = "throw";
        aZ.arg = b2;
        return aZ;
      }
    }
    an.wrap = aw;
    var ay = "suspendedStart",
      az = "suspendedYield",
      aA = "executing",
      aB = "completed",
      aC = {};
    function aD() {}
    function aE() {}
    function aF() {}
    var aG = {};
    av(aG, as, function () {
      return this;
    });
    var aH = Object.getPrototypeOf,
      aI = aH && aH(aH(aR([])));
    aI && aI !== ao && ap.call(aI, as) && (aG = aI);
    aF.prototype = aD.prototype = Object.create(aG);
    var aJ = aF.prototype;
    function aK(aV) {
      ["next", "throw", "return"].forEach(function (aY) {
        av(aV, aY, function (b1) {
          return this._invoke(aY, b1);
        });
      });
    }
    function aL(aV, aW) {
      function b0(b1, b2, b3, b4) {
        var b6 = ax(aV[b1], aV, b2);
        if ("throw" !== b6.type) {
          var b7 = b6.arg,
            b8 = b7.value;
          return b8 && "object" == b(b8) && ap.call(b8, "__await") ? aW.resolve(b8.__await).then(function (ba) {
            b0("next", ba, b3, b4);
          }, function (ba) {
            b0("throw", ba, b3, b4);
          }) : aW.resolve(b8).then(function (ba) {
            b7.value = ba;
            b3(b7);
          }, function (ba) {
            return b0("throw", ba, b3, b4);
          });
        }
        b4(b6.arg);
      }
      var aY;
      aq(this, "_invoke", {
        value: function (b1, b2) {
          function b5() {
            return new aW(function (b7, b8) {
              b0(b1, b2, b7, b8);
            });
          }
          return aY = aY ? aY.then(b5, b5) : b5();
        }
      });
    }
    function aM(aV, aW, aX) {
      var aZ = ay;
      return function (b0, b1) {
        if (aZ === aA) {
          throw Error("Generator is already running");
        }
        if (aZ === aB) {
          if ("throw" === b0) {
            throw b1;
          }
          var b3 = {
            value: am,
            done: !0
          };
          return b3;
        }
        for (aX.method = b0, aX.arg = b1;;) {
          var b4 = aX.delegate;
          if (b4) {
            var b5 = aN(b4, aX);
            if (b5) {
              if (b5 === aC) {
                continue;
              }
              return b5;
            }
          }
          if ("next" === aX.method) {
            aX.sent = aX._sent = aX.arg;
          } else {
            if ("throw" === aX.method) {
              if (aZ === ay) {
                throw aZ = aB, aX.arg;
              }
              aX.dispatchException(aX.arg);
            } else {
              "return" === aX.method && aX.abrupt("return", aX.arg);
            }
          }
          aZ = aA;
          var b6 = ax(aV, aW, aX);
          if ("normal" === b6.type) {
            if (aZ = aX.done ? aB : az, b6.arg === aC) {
              continue;
            }
            var b7 = {};
            b7.value = b6.arg;
            b7.done = aX.done;
            return b7;
          }
          "throw" === b6.type && (aZ = aB, aX.method = "throw", aX.arg = b6.arg);
        }
      };
    }
    function aN(aV, aW) {
      var b0 = aW.method,
        b1 = aV.iterator[b0];
      if (b1 === am) {
        aW.delegate = null;
        "throw" === b0 && aV.iterator.return && (aW.method = "return", aW.arg = am, aN(aV, aW), "throw" === aW.method) || "return" !== b0 && (aW.method = "throw", aW.arg = new TypeError("The iterator does not provide a '" + b0 + "' method"));
        return aC;
      }
      var aZ = ax(b1, aV.iterator, aW.arg);
      if ("throw" === aZ.type) {
        aW.method = "throw";
        aW.arg = aZ.arg;
        aW.delegate = null;
        return aC;
      }
      var b2 = aZ.arg;
      return b2 ? b2.done ? (aW[aV.resultName] = b2.value, aW.next = aV.nextLoc, "return" !== aW.method && (aW.method = "next", aW.arg = am), aW.delegate = null, aC) : b2 : (aW.method = "throw", aW.arg = new TypeError("iterator result is not an object"), aW.delegate = null, aC);
    }
    function aO(aV) {
      var aW = {
        tryLoc: aV[0]
      };
      var aX = aW;
      1 in aV && (aX.catchLoc = aV[1]);
      2 in aV && (aX.finallyLoc = aV[2], aX.afterLoc = aV[3]);
      this.tryEntries.push(aX);
    }
    function aP(aV) {
      var aY = aV.completion || {};
      aY.type = "normal";
      delete aY.arg;
      aV.completion = aY;
    }
    function aQ(aV) {
      var aW = {
        tryLoc: "root"
      };
      this.tryEntries = [aW];
      aV.forEach(aO, this);
      this.reset(!0);
    }
    function aR(aV) {
      if (aV || "" === aV) {
        var aY = aV[as];
        if (aY) {
          return aY.call(aV);
        }
        if ("function" == typeof aV.next) {
          return aV;
        }
        if (!isNaN(aV.length)) {
          var aZ = -1,
            b0 = function b3() {
              for (; ++aZ < aV.length;) {
                if (ap.call(aV, aZ)) {
                  b3.value = aV[aZ];
                  b3.done = !1;
                  return b3;
                }
              }
              b3.value = am;
              b3.done = !0;
              return b3;
            };
          return b0.next = b0;
        }
      }
      throw new TypeError(b(aV) + " is not iterable");
    }
    aE.prototype = aF;
    aq(aJ, "constructor", {
      value: aF,
      configurable: !0
    });
    aq(aF, "constructor", {
      value: aE,
      configurable: !0
    });
    aE.displayName = av(aF, au, "GeneratorFunction");
    an.isGeneratorFunction = function (aV) {
      var aX = "function" == typeof aV && aV.constructor;
      return !!aX && (aX === aE || "GeneratorFunction" === (aX.displayName || aX.name));
    };
    an.mark = function (aV) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aV, aF) : (aV.__proto__ = aF, av(aV, au, "GeneratorFunction"));
      aV.prototype = Object.create(aJ);
      return aV;
    };
    an.awrap = function (aV) {
      var aW = {
        __await: aV
      };
      return aW;
    };
    aK(aL.prototype);
    av(aL.prototype, at, function () {
      return this;
    });
    an.AsyncIterator = aL;
    an.async = function (aV, aW, aX, aY, aZ) {
      void 0 === aZ && (aZ = Promise);
      var b1 = new aL(aw(aV, aW, aX, aY), aZ);
      return an.isGeneratorFunction(aW) ? b1 : b1.next().then(function (b3) {
        return b3.done ? b3.value : b1.next();
      });
    };
    aK(aJ);
    av(aJ, au, "Generator");
    av(aJ, as, function () {
      return this;
    });
    av(aJ, "toString", function () {
      return "[object Generator]";
    });
    an.keys = function (aV) {
      var aY = Object(aV),
        aZ = [];
      for (var b0 in aY) aZ.push(b0);
      aZ.reverse();
      return function b2() {
        for (; aZ.length;) {
          var b3 = aZ.pop();
          if (b3 in aY) {
            b2.value = b3;
            b2.done = !1;
            return b2;
          }
        }
        b2.done = !0;
        return b2;
      };
    };
    an.values = aR;
    aQ.prototype = {
      constructor: aQ,
      reset: function (aV) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = am, this.done = !1, this.delegate = null, this.method = "next", this.arg = am, this.tryEntries.forEach(aP), !aV) {
          for (var aW in this) "t" === aW.charAt(0) && ap.call(this, aW) && !isNaN(+aW.slice(1)) && (this[aW] = am);
        }
      },
      stop: function () {
        this.done = !0;
        var aV = this.tryEntries[0].completion;
        if ("throw" === aV.type) {
          throw aV.arg;
        }
        return this.rval;
      },
      dispatchException: function (aV) {
        if (this.done) {
          throw aV;
        }
        var aX = this;
        function b4(b5, b6) {
          b0.type = "throw";
          b0.arg = aV;
          aX.next = b5;
          b6 && (aX.method = "next", aX.arg = am);
          return !!b6;
        }
        for (var aY = this.tryEntries.length - 1; aY >= 0; --aY) {
          var aZ = this.tryEntries[aY],
            b0 = aZ.completion;
          if ("root" === aZ.tryLoc) {
            return b4("end");
          }
          if (aZ.tryLoc <= this.prev) {
            var b1 = ap.call(aZ, "catchLoc"),
              b2 = ap.call(aZ, "finallyLoc");
            if (b1 && b2) {
              if (this.prev < aZ.catchLoc) {
                return b4(aZ.catchLoc, !0);
              }
              if (this.prev < aZ.finallyLoc) {
                return b4(aZ.finallyLoc);
              }
            } else {
              if (b1) {
                if (this.prev < aZ.catchLoc) {
                  return b4(aZ.catchLoc, !0);
                }
              } else {
                if (!b2) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aZ.finallyLoc) {
                  return b4(aZ.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aV, aW) {
        for (var aX = this.tryEntries.length - 1; aX >= 0; --aX) {
          var aY = this.tryEntries[aX];
          if (aY.tryLoc <= this.prev && ap.call(aY, "finallyLoc") && this.prev < aY.finallyLoc) {
            var aZ = aY;
            break;
          }
        }
        aZ && ("break" === aV || "continue" === aV) && aZ.tryLoc <= aW && aW <= aZ.finallyLoc && (aZ = null);
        var b0 = aZ ? aZ.completion : {};
        b0.type = aV;
        b0.arg = aW;
        return aZ ? (this.method = "next", this.next = aZ.finallyLoc, aC) : this.complete(b0);
      },
      complete: function (aV, aW) {
        if ("throw" === aV.type) {
          throw aV.arg;
        }
        "break" === aV.type || "continue" === aV.type ? this.next = aV.arg : "return" === aV.type ? (this.rval = this.arg = aV.arg, this.method = "return", this.next = "end") : "normal" === aV.type && aW && (this.next = aW);
        return aC;
      },
      finish: function (aV) {
        for (var aW = this.tryEntries.length - 1; aW >= 0; --aW) {
          var aX = this.tryEntries[aW];
          if (aX.finallyLoc === aV) {
            this.complete(aX.completion, aX.afterLoc);
            aP(aX);
            return aC;
          }
        }
      },
      catch: function (aV) {
        for (var aX = this.tryEntries.length - 1; aX >= 0; --aX) {
          var aY = this.tryEntries[aX];
          if (aY.tryLoc === aV) {
            var aZ = aY.completion;
            if ("throw" === aZ.type) {
              var b0 = aZ.arg;
              aP(aY);
            }
            return b0;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aV, aW, aX) {
        this.delegate = {
          iterator: aR(aV),
          resultName: aW,
          nextLoc: aX
        };
        "next" === this.method && (this.arg = am);
        return aC;
      }
    };
    return an;
  }
  function l(al, am, an, ao, ap, aq, ar) {
    try {
      var as = al[aq](ar),
        at = as.value;
    } catch (aw) {
      return void an(aw);
    }
    as.done ? am(at) : Promise.resolve(at).then(ao, ap);
  }
  function m(al) {
    return function () {
      var ao = this,
        ap = arguments;
      return new Promise(function (aq, ar) {
        var at = al.apply(ao, ap);
        function au(aw) {
          l(at, aq, ar, au, av, "next", aw);
        }
        function av(aw) {
          l(at, aq, ar, au, av, "throw", aw);
        }
        au(void 0);
      });
    };
  }
  var n = ($.isNode() ? process.env.YueCheng : $.getdata("YueCheng")) || "",
    o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  window = {};
  var p = void 0,
    q = "",
    r = "",
    s = "",
    t = "31",
    u = "",
    v = "48",
    w = "FR*r!isE5W",
    x = "",
    y = "",
    z = "",
    A = "",
    B = "",
    C = "",
    D = "",
    E = "K8tbWP2J0x3uCITGYEhL",
    F = "35c782a2",
    G = "",
    H = "",
    I = "",
    J = "";
  function K() {
    return L.apply(this, arguments);
  }
  function L() {
    L = m(k().mark(function an() {
      var ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, bA;
      return k().wrap(function bB(bC) {
        for (;;) {
          switch (bC.prev = bC.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                bC.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bC.next = 5;
              return aj("先去boxjs填写账号密码");
            case 5:
              return bC.abrupt("return");
            case 6:
              bC.next = 8;
              return ah();
            case 8:
              p = bC.sent;
              ap = n.split(" ");
              aq = c(ap);
              bC.prev = 11;
              aq.s();
            case 13:
              if ((ar = aq.n()).done) {
                bC.next = 293;
                break;
              }
              as = ar.value;
              console.log("随机生成UA");
              at = af();
              B = at.ua;
              C = at.commonUa;
              D = at.uuid;
              console.log(B);
              console.log(C);
              x = as.split("&")[0];
              y = as.split("&")[1];
              z = as.split("&")[2];
              A = as.split("&")[3] || x;
              console.log("用户：".concat(x, "开始任务"));
              console.log("获取sessionId");
              bC.next = 30;
              return S("/api/account/init");
            case 30:
              au = bC.sent;
              s = au.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              bC.next = 36;
              return M("/web/init?client_id=".concat(v));
            case 36:
              av = bC.sent;
              q = av.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              bC.next = 42;
              return O("/web/oauth/credential_auth");
            case 42:
              if (aw = bC.sent, aw.data) {
                bC.next = 46;
                break;
              }
              console.log(aw.message);
              return bC.abrupt("continue", 291);
            case 46:
              ax = aw.data.authorization_code.code;
              console.log(ax);
              console.log("登录");
              bC.next = 51;
              return S("/api/zbtxz/login", "check_token=&code=".concat(ax, "&token=&type=-1&union_id="));
            case 51:
              ay = bC.sent;
              console.log("登录成功");
              u = ay.data.session.account_id;
              s = ay.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取id");
              bC.next = 60;
              return Q("/api/minus1floor/config");
            case 60:
              for (az = bC.sent, aA = az.data.article_list[2].column_news_list[2].url, aB = aA.split("?")[1], aC = {}, aD = aB.split("&"), aE = 0, aF = aD.length; aE < aF; aE++) {
                aG = aD[aE].split("=");
                aC[aG[0]] = aG[1];
              }
              var bE = {};
              bE.debug = 0;
              bE.userId = "";
              aH = aC.id;
              console.log(aH);
              console.log("获取key和token");
              bC.next = 71;
              return U("/api/member/login", bE);
            case 71:
              aI = bC.sent;
              F = aI.data.key;
              G = "Bearer " + aI.data.token;
              console.log(F);
              console.log(G);
              console.log("获取抽奖id");
              bC.next = 79;
              return W("/api/study/detail?id=".concat(aH), {
                id: aH
              });
            case 79:
              aJ = bC.sent;
              aK = aJ.data.lottery.lottery_id;
              console.log(aK);
              console.log("开始阅读");
              aL = c(aJ.data.levels);
              bC.prev = 84;
              aL.s();
            case 86:
              if ((aM = aL.n()).done) {
                bC.next = 124;
                break;
              }
              aN = aM.value;
              bC.next = 90;
              return W("/api/study/level?id=".concat(aN.id), {
                id: aN.id
              });
            case 90:
              if (aO = bC.sent, console.log(aO.data.level.name), aO.data.level.task_num != aO.data.completedTasks.length) {
                bC.next = 95;
                break;
              }
              console.log("已完成");
              return bC.abrupt("continue", 122);
            case 95:
              aP = c(aO.data.tasks);
              bC.prev = 96;
              aP.s();
            case 98:
              if ((aQ = aP.n()).done) {
                bC.next = 114;
                break;
              }
              aR = aQ.value;
              bC.next = 102;
              return Q("/api/article/detail?id=".concat(aR.content_id));
            case 102:
              aS = bC.sent;
              console.log("文章：".concat(aS.data.article.list_title));
              bC.next = 106;
              return Q("/api/article/read_time?channel_article_id=".concat(aR.content_id, "&read_time=5938"));
            case 106:
              var bF = {};
              bF.id = aR.id;
              aT = bC.sent;
              console.log("阅读：".concat(aT.message));
              bC.next = 110;
              return U("/api/study/task/complete", bF);
            case 110:
              aU = bC.sent;
              console.log("完成任务：".concat(aU.message));
            case 112:
              bC.next = 98;
              break;
            case 114:
              bC.next = 119;
              break;
            case 116:
              bC.prev = 116;
              bC.t0 = bC.catch(96);
              aP.e(bC.t0);
            case 119:
              bC.prev = 119;
              aP.f();
              return bC.finish(119);
            case 122:
              bC.next = 86;
              break;
            case 124:
              bC.next = 129;
              break;
            case 126:
              bC.prev = 126;
              bC.t1 = bC.catch(84);
              aL.e(bC.t1);
            case 129:
              bC.prev = 129;
              aL.f();
              return bC.finish(129);
            case 132:
              bC.next = 134;
              return U("/api/lotterybigwheel/_ac_lottery_count", {
                id: aK,
                module: "study"
              });
            case 134:
              aV = bC.sent;
              console.log("拥有".concat(aV.data.count, "次抽奖"));
              aW = 0;
            case 137:
              if (!(aW < aV.data.count)) {
                bC.next = 178;
                break;
              }
              bC.next = 140;
              return U("/api/lotterybigwheel/_ac_lottery", {
                id: aK,
                app_id: E,
                module: "study",
                optionHash: ""
              });
            case 140:
              if (aX = bC.sent, 10000 != aX.code) {
                bC.next = 174;
                break;
              }
              var bG = {};
              bG.activity_id = aK;
              bG.module = "bigWheel";
              console.log(aX.message);
              bC.next = 145;
              return U("/api/captcha/get", bG);
            case 145:
              aY = bC.sent;
              aZ = aY.data.jigsawImageUrl;
              b0 = aY.data.originalImageUrl;
              console.log("滑块：".concat(aZ));
              console.log("背景：".concat(b0));
              b1 = aY.data.token;
              b2 = aY.data.secretKey;
              console.log("秘钥：".concat(b2));
              bC.next = 155;
              return a6({
                slidingImage: aZ,
                backImage: b0
              });
            case 155:
              if (b3 = bC.sent, b3) {
                bC.next = 161;
                break;
              }
              console.log("ddddocr服务异常");
              bC.next = 160;
              return aj("ddddocr服务异常");
            case 160:
              return bC.abrupt("continue", 175);
            case 161:
              console.log(b3);
              b4 = a9(JSON.stringify({
                x: b3.result,
                y: 5
              }), b2);
              bC.next = 165;
              return U("/api/captcha/check", {
                activity_id: aK,
                module: "bigWheel",
                cap_token: b1,
                point: b4
              });
            case 165:
              if (b5 = bC.sent, console.log("验证滑块：" + b5.message), "操作成功" != b5.message) {
                bC.next = 172;
                break;
              }
              var bH = {};
              bH.id = aK;
              bH.app_id = E;
              bH.module = "study";
              bH.optionHash = "";
              bC.next = 170;
              return U("/api/lotterybigwheel/_ac_lottery", bH);
            case 170:
              aX = bC.sent;
              aX.data.code ? (console.log("抽奖获得：".concat(aX.data.title)), r += "用户：".concat(x, " 抽奖获得：").concat(aX.data.title, "\n")) : (console.log("抽奖获得：".concat(aX.data.tip_title)), r += "用户：".concat(x, " 抽奖获得：").concat(aX.data.tip_title, "\n"));
            case 172:
              bC.next = 175;
              break;
            case 174:
              aX.data.code ? (console.log("抽奖获得：".concat(aX.data.title)), r += "用户：".concat(x, " 抽奖获得：").concat(aX.data.title, "\n")) : (console.log("抽奖获得：".concat(aX.data.tip_title)), r += "用户：".concat(x, " 抽奖获得：").concat(aX.data.tip_title, "\n"));
            case 175:
              aW++;
              bC.next = 137;
              break;
            case 178:
              for (console.log("————————————"), console.log("动动手指赢红包"), aA = az.data.article_list[2].column_news_list[1].url, aB = aA.split("?")[1], aC = {}, aD = aB.split("&"), b6 = 0, b7 = aD.length; b6 < b7; b6++) {
                b8 = aD[b6].split("=");
                aC[b8[0]] = b8[1];
              }
              bC.next = 187;
              return Q("/api/article/detail?id=".concat(aC.id));
            case 187:
              b9 = bC.sent;
              bC.next = 190;
              return Q("/api/article/subject_group_list?group_id=".concat(b9.data.article.subject_groups[0].group_id));
            case 190:
              ba = bC.sent;
              bb = c(ba.data.article_list);
              bC.prev = 192;
              bb.s();
            case 194:
              if ((bc = bb.n()).done) {
                bC.next = 283;
                break;
              }
              if (bd = bc.value, ag(bd.published_at)) {
                bC.next = 198;
                break;
              }
              return bC.abrupt("break", 283);
            case 198:
              console.log("文章：".concat(bd.list_title));
              bC.next = 201;
              return Q("/api/article/detail?id=".concat(bd.id));
            case 201:
              if (be = bC.sent, bf = be.data.article.content, bg = bf.match(/id%3D(\d+)%26dbnewopen/), !bg) {
                bC.next = 209;
                break;
              }
              I = bg[1];
              console.log("activityId：".concat(I));
              bC.next = 211;
              break;
            case 209:
              console.log("未匹配到activityId");
              return bC.abrupt("continue", 281);
            case 211:
              console.log("阅读登录");
              bC.next = 214;
              return Y("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(s, "&accountId=").concat(u, "&redirectUrl=https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=").concat(I, "&dbnewopen"));
            case 214:
              bh = bC.sent;
              bi = bh.data;
              H = "";
              bC.next = 219;
              return a2(bi);
            case 219:
              H = bC.sent;
              console.log("获取抽奖key");
              bC.next = 223;
              return a4("https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=".concat(I, "&dbnewopen&from=login&spm=95337.1.1.1"));
            case 223:
              bj = bC.sent;
              bC.next = 226;
              return a0("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(I, "&activityType=hdtool&consumerId=").concat(J));
            case 226:
              bk = bC.sent;
              eval(bk.token);
              bl = window[bj];
              bC.next = 231;
              return a0("/hdtool/dy/doJoin?dpm=95337.3.1.0&activityId=".concat(I, "&_=").concat(Date.now()), "actId=".concat(I, "&oaId=").concat(I, "&activityType=hdtool&consumerId=").concat(J, "&token=").concat(bl));
            case 231:
              if (bm = bC.sent, !bm.success) {
                bC.next = 278;
                break;
              }
              if (bm.orderId) {
                bC.next = 236;
                break;
              }
              console.log(bm.message);
              return bC.abrupt("continue", 281);
            case 236:
              bn = bm.orderId;
              bo = 0;
            case 238:
              if (0 != bo) {
                bC.next = 276;
                break;
              }
              bC.next = 241;
              return a0("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(bn, "&adslotId="));
            case 241:
              if (bp = bC.sent, bo = bp.result, 0 != bo) {
                bC.next = 247;
                break;
              }
              console.log(bp.message);
              bC.next = 274;
              break;
            case 247:
              if ("thanks" == bp.lottery.type && console.log("谢谢参与"), "alipay" != bp.lottery.type) {
                bC.next = 274;
                break;
              }
              for (console.log("抽奖获得支付宝红包：".concat(bp.lottery.title)), r += "用户：".concat(x, " 抽奖获得支付宝红包：").concat(bp.lottery.title, "\n"), bq = bp.lottery.link, br = bq.split("?")[1], bs = {}, bt = br.split("&"), bu = 0, bv = bt.length; bu < bv; bu++) {
                bw = bt[bu].split("=");
                bs[bw[0]] = bw[1];
              }
              if (bx = bs.recordId, !z || !A) {
                bC.next = 273;
                break;
              }
              console.log("获取兑换key");
              bC.next = 261;
              return a4("https://95337.activity-42.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(bx, "&dbnewopen"));
            case 261:
              bj = bC.sent;
              bC.next = 264;
              return a0("/ctoken/getToken.do");
            case 264:
              by = bC.sent;
              eval(by.token);
              bz = window[bj];
              bC.next = 269;
              return a0("/activity/doTakePrize", "alipay=".concat(A, "&realname=").concat(encodeURI(z), "&recordId=").concat(bx, "&token=").concat(bz));
            case 269:
              bA = bC.sent;
              console.log(bA.message);
              bC.next = 274;
              break;
            case 273:
              console.log("请设置支付宝姓名和账号");
            case 274:
              bC.next = 238;
              break;
            case 276:
              bC.next = 279;
              break;
            case 278:
              console.log(bm.message);
            case 279:
              bC.next = 281;
              return $.wait(2000);
            case 281:
              bC.next = 194;
              break;
            case 283:
              bC.next = 288;
              break;
            case 285:
              bC.prev = 285;
              bC.t2 = bC.catch(192);
              bb.e(bC.t2);
            case 288:
              bC.prev = 288;
              bb.f();
              return bC.finish(288);
            case 291:
              bC.next = 13;
              break;
            case 293:
              bC.next = 298;
              break;
            case 295:
              bC.prev = 295;
              bC.t3 = bC.catch(11);
              aq.e(bC.t3);
            case 298:
              bC.prev = 298;
              aq.f();
              return bC.finish(298);
            case 301:
              if (!r) {
                bC.next = 304;
                break;
              }
              bC.next = 304;
              return aj(r);
            case 304:
            case "end":
              return bC.stop();
          }
        }
      }, an, null, [[11, 295, 298, 301], [84, 126, 129, 132], [96, 116, 119, 122], [192, 285, 288, 291]]);
    }));
    return L.apply(this, arguments);
  }
  function M(al) {
    return N.apply(this, arguments);
  }
  function N() {
    N = m(k().mark(function an(ao) {
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://passport.tmuyun.com".concat(ao),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": ad(),
                    "Accept-Encoding": "gzip",
                    "user-agent": B
                  }
                };
                $.get(av, function () {
                  var ay = m(k().mark(function aA(aB, aC, aD) {
                    return k().wrap(function (aF) {
                      for (;;) {
                        switch (aF.prev = aF.next) {
                          case 0:
                            try {
                              aB ? (console.log("".concat(JSON.stringify(aB))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : at(JSON.parse(aD));
                            } catch (aJ) {
                              $.logErr(aJ, aC);
                            } finally {
                              at();
                            }
                          case 1:
                          case "end":
                            return aF.stop();
                        }
                      }
                    }, aA);
                  }));
                  return function (aB, aC, aD) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, an);
    }));
    return N.apply(this, arguments);
  }
  function O(al) {
    return P.apply(this, arguments);
  }
  function P() {
    P = m(k().mark(function am(an) {
      var ap;
      return k().wrap(function (aq) {
        for (;;) {
          switch (aq.prev = aq.next) {
            case 0:
              ap = aa();
              return aq.abrupt("return", new Promise(function (ar) {
                var at = {
                  url: "https://passport.tmuyun.com".concat(an),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ap.uuid,
                    "X-SIGNATURE": ap.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": B
                  },
                  body: ap.body
                };
                $.post(at, function () {
                  var au = m(k().mark(function av(aw, ax, ay) {
                    return k().wrap(function (aA) {
                      for (;;) {
                        switch (aA.prev = aA.next) {
                          case 0:
                            try {
                              aw ? (console.log("".concat(JSON.stringify(aw))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ar(JSON.parse(ay));
                            } catch (aD) {
                              $.logErr(aD, ax);
                            } finally {
                              ar();
                            }
                          case 1:
                          case "end":
                            return aA.stop();
                        }
                      }
                    }, av);
                  }));
                  return function (aw, ax, ay) {
                    return au.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aq.stop();
          }
        }
      }, am);
    }));
    return P.apply(this, arguments);
  }
  function Q(al) {
    return R.apply(this, arguments);
  }
  function R() {
    R = m(k().mark(function am(an) {
      var ao;
      return k().wrap(function (ap) {
        for (;;) {
          switch (ap.prev = ap.next) {
            case 0:
              ao = ac(an);
              return ap.abrupt("return", new Promise(function (ar) {
                var at = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ao.time,
                  "X-SESSION-ID": s,
                  "X-REQUEST-ID": ao.uuid,
                  "X-SIGNATURE": ao.signature,
                  "X-TENANT-ID": t,
                  "X-ACCOUNT-ID": u,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": C
                };
                var au = {
                  url: "https://vapp.tmuyun.com".concat(an),
                  headers: at
                };
                $.get(au, function () {
                  var ax = m(k().mark(function ay(az, aA, aB) {
                    return k().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            ar(JSON.parse(aB));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 14:
                            aC.prev = 14;
                            ar();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ap.stop();
          }
        }
      }, am);
    }));
    return R.apply(this, arguments);
  }
  function S(al, am) {
    return T.apply(this, arguments);
  }
  function T() {
    T = m(k().mark(function am(an, ao) {
      var aq;
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              aq = ac(an);
              return ar.abrupt("return", new Promise(function (as) {
                var au = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": aq.time,
                  "X-SESSION-ID": s,
                  "X-REQUEST-ID": aq.uuid,
                  "X-SIGNATURE": aq.signature,
                  "X-TENANT-ID": t,
                  "X-ACCOUNT-ID": u,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": C
                };
                var av = {
                  url: "https://vapp.tmuyun.com".concat(an),
                  headers: au,
                  body: ao
                };
                $.post(av, function () {
                  var aw = m(k().mark(function ax(ay, az, aA) {
                    return k().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !ay) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ay)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            as(JSON.parse(aA));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, az);
                          case 14:
                            aC.prev = 14;
                            as();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ax, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ay, az, aA) {
                    return aw.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ar.stop();
          }
        }
      }, am);
    }));
    return T.apply(this, arguments);
  }
  function U(al, am) {
    return V.apply(this, arguments);
  }
  function V() {
    V = m(k().mark(function am(an, ao) {
      var ap;
      return k().wrap(function (aq) {
        for (;;) {
          switch (aq.prev = aq.next) {
            case 0:
              ap = ab(ao);
              return aq.abrupt("return", new Promise(function (as) {
                var at = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(an),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": D,
                    "access-auth-id": u,
                    "access-api-signature": ap.signature,
                    "access-nonce-str": ap.uuid,
                    authorization: G,
                    "access-app-id": E,
                    "access-timestamp": ap.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                    "content-type": "application/json; charset=UTF-8",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ao)
                };
                $.post(at, function () {
                  var av = m(k().mark(function aw(ax, ay, az) {
                    return k().wrap(function (aA) {
                      for (;;) {
                        switch (aA.prev = aA.next) {
                          case 0:
                            if (aA.prev = 0, !ax) {
                              aA.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ax)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aA.next = 9;
                            break;
                          case 6:
                            aA.next = 8;
                            return $.wait(2000);
                          case 8:
                            as(JSON.parse(az));
                          case 9:
                            aA.next = 14;
                            break;
                          case 11:
                            aA.prev = 11;
                            aA.t0 = aA.catch(0);
                            $.logErr(aA.t0, ay);
                          case 14:
                            aA.prev = 14;
                            as();
                            return aA.finish(14);
                          case 17:
                          case "end":
                            return aA.stop();
                        }
                      }
                    }, aw, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ax, ay, az) {
                    return av.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aq.stop();
          }
        }
      }, am);
    }));
    return V.apply(this, arguments);
  }
  function W(al, am) {
    return X.apply(this, arguments);
  }
  function X() {
    X = m(k().mark(function am(an, ao) {
      var aq;
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              aq = ab(ao);
              return ar.abrupt("return", new Promise(function (as) {
                var au = {
                  "access-type": "app",
                  "access-module": "study",
                  "access-device-id": D,
                  "access-auth-id": u,
                  "access-api-signature": aq.signature,
                  "access-nonce-str": aq.uuid,
                  authorization: G,
                  "access-app-id": E,
                  "access-timestamp": aq.time,
                  "access-api-token": s,
                  accept: "application/json, text/plain, */*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                  origin: "https://op-h5.cloud.jinhua.com.cn",
                  "x-requested-with": "com.zjonline.zhuji",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  referer: "https://op-h5.cloud.jinhua.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var av = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(an),
                  headers: au
                };
                $.get(av, function () {
                  var ax = m(k().mark(function ay(az, aA, aB) {
                    return k().wrap(function (aD) {
                      for (;;) {
                        switch (aD.prev = aD.next) {
                          case 0:
                            if (aD.prev = 0, !az) {
                              aD.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aD.next = 9;
                            break;
                          case 6:
                            aD.next = 8;
                            return $.wait(2000);
                          case 8:
                            as(JSON.parse(aB));
                          case 9:
                            aD.next = 14;
                            break;
                          case 11:
                            aD.prev = 11;
                            aD.t0 = aD.catch(0);
                            $.logErr(aD.t0, aA);
                          case 14:
                            aD.prev = 14;
                            as();
                            return aD.finish(14);
                          case 17:
                          case "end":
                            return aD.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ar.stop();
          }
        }
      }, am);
    }));
    return X.apply(this, arguments);
  }
  function Y(al) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = m(k().mark(function am(an) {
      return k().wrap(function (ao) {
        for (;;) {
          switch (ao.prev = ao.next) {
            case 0:
              return ao.abrupt("return", new Promise(function (aq) {
                var as = {
                  url: "https://95337.activity-42.m.duiba.com.cn".concat(an),
                  headers: {
                    accept: "*/*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                    "x-requested-with": "com.zjonline.yuecheng",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(as, function () {
                  var au = m(k().mark(function av(aw, ax, ay) {
                    return k().wrap(function (aA) {
                      for (;;) {
                        switch (aA.prev = aA.next) {
                          case 0:
                            if (aA.prev = 0, !aw) {
                              aA.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aw)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aA.next = 9;
                            break;
                          case 6:
                            aA.next = 8;
                            return $.wait(2000);
                          case 8:
                            aq(JSON.parse(ay));
                          case 9:
                            aA.next = 14;
                            break;
                          case 11:
                            aA.prev = 11;
                            aA.t0 = aA.catch(0);
                            $.logErr(aA.t0, ax);
                          case 14:
                            aA.prev = 14;
                            aq();
                            return aA.finish(14);
                          case 17:
                          case "end":
                            return aA.stop();
                        }
                      }
                    }, av, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aw, ax, ay) {
                    return au.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ao.stop();
          }
        }
      }, am);
    }));
    return Z.apply(this, arguments);
  }
  function a0(al, am) {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = m(k().mark(function an(ao, ap) {
      return k().wrap(function (aq) {
        for (;;) {
          switch (aq.prev = aq.next) {
            case 0:
              return aq.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://95337.activity-42.m.duiba.com.cn".concat(ao),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://95337.activity-42.m.duiba.com.cn",
                    cookie: H,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://95337.activity-42.m.duiba.com.cn/hdtool/index?id=".concat(I, "&dbnewopen&from=login&spm=95337.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: ap
                };
                $.post(av, function () {
                  var ax = m(k().mark(function ay(az, aA, aB) {
                    return k().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            at(JSON.parse(aB));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 14:
                            aC.prev = 14;
                            at();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aq.stop();
          }
        }
      }, an);
    }));
    return a1.apply(this, arguments);
  }
  function a2(al) {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = m(k().mark(function al(am) {
      return k().wrap(function (ap) {
        for (;;) {
          switch (ap.prev = ap.next) {
            case 0:
              return ap.abrupt("return", new Promise(function (aq) {
                var as = {
                  accept: "*/*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                  "x-requested-with": "com.zjonline.yuecheng",
                  "sec-fetch-site": "same-origin",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var at = {
                  url: "https:".concat(am),
                  headers: as,
                  followRedirect: !1
                };
                $.get(at, function () {
                  var av = m(k().mark(function aw(ax, ay, az) {
                    var aA, aB;
                    return k().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !ax) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ax)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 10;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (aA = ay.headers["set-cookie"] || ay.headers["Set-Cookie"], aB = 0; aB < aA.length; aB++) {
                                H += aA[aB].split(";")[0] + ";";
                              }
                            } else {
                              H = ay.headers["set-cookie"] || ay.headers["Set-Cookie"];
                              H = a8(H);
                            }
                            aq(H);
                          case 10:
                            aC.next = 15;
                            break;
                          case 12:
                            aC.prev = 12;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, ay);
                          case 15:
                            aC.prev = 15;
                            aq();
                            return aC.finish(15);
                          case 18:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, aw, null, [[0, 12, 15, 18]]);
                  }));
                  return function (ax, ay, az) {
                    return av.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ap.stop();
          }
        }
      }, al);
    }));
    return a3.apply(this, arguments);
  }
  function a4(al) {
    return a5.apply(this, arguments);
  }
  function a5() {
    a5 = m(k().mark(function al(am) {
      return k().wrap(function ao(ap) {
        for (;;) {
          switch (ap.prev = ap.next) {
            case 0:
              return ap.abrupt("return", new Promise(function (aq) {
                var as = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.7.0;native_app;6.12.0",
                  "x-requested-with": "com.zjonline.yuecheng",
                  "sec-fetch-site": "same-origin",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  referer: "https://95337.activity-42.m.duiba.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: H
                };
                var at = {
                  url: am,
                  headers: as
                };
                $.get(at, function () {
                  var aw = m(k().mark(function ax(ay, az, aA) {
                    var aB, aC, aD, aE;
                    return k().wrap(function aF(aG) {
                      for (;;) {
                        switch (aG.prev = aG.next) {
                          case 0:
                            if (aG.prev = 0, !ay) {
                              aG.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ay)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aG.next = 18;
                            break;
                          case 6:
                            aG.next = 8;
                            return $.wait(2000);
                          case 8:
                            aB = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(aA)[1];
                            eval(aB);
                            aC = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(aC);
                            console.log("获取consumerId");
                            aD = /consumerId:'(\d+)'/;
                            aE = aA.match(aD);
                            J = aE ? aE[1] : "4135312778";
                            console.log(J);
                            aq(aC);
                          case 18:
                            aG.next = 23;
                            break;
                          case 20:
                            aG.prev = 20;
                            aG.t0 = aG.catch(0);
                            $.logErr(aG.t0, az);
                          case 23:
                            aG.prev = 23;
                            aq();
                            return aG.finish(23);
                          case 26:
                          case "end":
                            return aG.stop();
                        }
                      }
                    }, ax, null, [[0, 20, 23, 26]]);
                  }));
                  return function (ay, az, aA) {
                    return aw.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ap.stop();
          }
        }
      }, al);
    }));
    return a5.apply(this, arguments);
  }
  function a6(al) {
    return a7.apply(this, arguments);
  }
  function a7() {
    a7 = m(k().mark(function an(ao) {
      return k().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (au) {
                var aw = {
                  url: "".concat(o, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(ao)
                };
                $.post(aw, function (ax, ay, az) {
                  try {
                    ax ? (console.log("".concat(JSON.stringify(ax))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : au(JSON.parse(az));
                  } catch (aA) {
                    $.logErr(aA, ay);
                  } finally {
                    au();
                  }
                });
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, an);
    }));
    return a7.apply(this, arguments);
  }
  function a8(al) {
    var am = al.split(", "),
      an = am.map(function (ao) {
        var ap = ao.split(";")[0];
        return ap.trim();
      });
    return an.join(";");
  }
  function a9(al, am) {
    CryptoJS = p.createCryptoJS();
    var an = CryptoJS.enc.Utf8.parse(am),
      ao = CryptoJS.enc.Utf8.parse(al),
      ap = CryptoJS.AES.encrypt(ao, an, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return ap.toString();
  }
  function aa() {
    var al = new (p.loadJSEncrypt())();
    al.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    y = al.encrypt(y);
    var am = ad(),
      an = "client_id=".concat(v, "&password=").concat(y, "&phone_number=").concat(x),
      ao = "post%%/web/oauth/credential_auth?".concat(an, "%%").concat(am, "%%");
    an = "client_id=".concat(v, "&password=").concat(encodeURIComponent(y), "&phone_number=").concat(x);
    CryptoJS = p.createCryptoJS();
    var ap = CryptoJS.HmacSHA256(ao, q),
      aq = CryptoJS.enc.Hex.stringify(ap),
      ar = {
        uuid: am,
        signature: aq,
        body: an
      };
    return ar;
  }
  function ab(al) {
    var as = ad(),
      at = Date.now(),
      au = {
        app_id: E,
        device_id: D,
        nonce_str: as,
        source_type: "app",
        timestamp: at,
        auth_id: u,
        token: s
      };
    Object.entries(al).forEach(function (aw) {
      var ax = d(aw, 2),
        ay = ax[0],
        az = ax[1];
      au[ay] = az;
    });
    var ap = Object.keys(au).sort(),
      aq = ap.map(function (aw) {
        return "".concat(aw, "=").concat(au[aw]);
      }).join("&&");
    aq = aq + "&&" + F;
    CryptoJS = p.createCryptoJS();
    var av = CryptoJS.SHA256(aq).toString();
    var ar = {};
    ar.uuid = as;
    ar.time = at;
    ar.signature = av;
    return ar;
  }
  function ac(al) {
    var am = ad(),
      an = Date.now();
    al.indexOf("?") > 0 && (al = al.substring(0, al.indexOf("?")));
    CryptoJS = p.createCryptoJS();
    var ao = CryptoJS.SHA256("".concat(al, "&&").concat(s, "&&").concat(am, "&&").concat(an, "&&").concat(w, "&&").concat(t)).toString(),
      ap = {
        uuid: am,
        time: an,
        signature: ao
      };
    return ap;
  }
  function ad() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (am) {
      var an = 16 * Math.random() | 0,
        ao = "x" === am ? an : 3 & an | 8;
      return ao.toString(16);
    });
  }
  function ae(al) {
    return al[Math.floor(Math.random() * al.length)];
  }
  function af() {
    var al = "1.7.0",
      am = ad(),
      an = ae(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ao = "Xiaomi " + an,
      ap = "Android",
      aq = "".concat(ap.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(al, ";1.0;null;").concat(an),
      ar = "".concat(al, ";").concat(am, ";").concat(ao, ";").concat(ap, ";").concat("11", ";").concat("Release", ";").concat("6.12.0"),
      as = {
        ua: aq,
        commonUa: ar,
        uuid: am
      };
    return as;
  }
  function ag(al) {
    var am = new Date(al),
      an = new Date();
    return am.getFullYear() === an.getFullYear() && am.getMonth() === an.getMonth() && am.getDate() === an.getDate();
  }
  function ah() {
    return ai.apply(this, arguments);
  }
  function ai() {
    ai = m(k().mark(function am() {
      var ao;
      return k().wrap(function ap(aq) {
        for (;;) {
          switch (aq.prev = aq.next) {
            case 0:
              if (ao = $.getdata("Utils_Code") || "", !ao || !Object.keys(ao).length) {
                aq.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ao);
              return aq.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aq.abrupt("return", new Promise(function () {
                var as = m(k().mark(function at(au) {
                  return k().wrap(function av(aw) {
                    for (;;) {
                      switch (aw.prev = aw.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ay) {
                            $.setdata(ay, "Utils_Code");
                            eval(ay);
                            console.log("✅ Utils加载成功, 请继续");
                            au(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aw.stop();
                      }
                    }
                  }, at);
                }));
                return function (au) {
                  return as.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return aq.stop();
          }
        }
      }, am);
    }));
    return ai.apply(this, arguments);
  }
  function aj(al) {
    return ak.apply(this, arguments);
  }
  function ak() {
    ak = m(k().mark(function al(am) {
      return k().wrap(function (an) {
        for (;;) {
          switch (an.prev = an.next) {
            case 0:
              if (!$.isNode()) {
                an.next = 5;
                break;
              }
              an.next = 3;
              return notify.sendNotify($.name, am);
            case 3:
              an.next = 6;
              break;
            case 5:
              $.msg($.name, "", am);
            case 6:
            case "end":
              return an.stop();
          }
        }
      }, al);
    }));
    return ak.apply(this, arguments);
  }
  m(k().mark(function al() {
    return k().wrap(function (am) {
      for (;;) {
        switch (am.prev = am.next) {
          case 0:
            am.next = 2;
            return K();
          case 2:
          case "end":
            return am.stop();
        }
      }
    }, al);
  }))().catch(function (am) {
    $.log(am);
  }).finally(function () {
    $.done({});
  });
})();