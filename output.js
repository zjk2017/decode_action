//Wed Jul 24 2024 09:18:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x2a5a05 = function () {
  let _0x350ed1 = true;
  return function (_0x16c025, _0x5b3d8f) {
    const _0x10d358 = _0x350ed1 ? function () {
      if (_0x5b3d8f) {
        const _0x48a06a = _0x5b3d8f.apply(_0x16c025, arguments);
        return _0x5b3d8f = null, _0x48a06a;
      }
    } : function () {};
    return _0x350ed1 = false, _0x10d358;
  };
}();
(function () {
  _0x2a5a05(this, function () {
    const _0x30d4fd = new RegExp("function *\\( *\\)"),
      _0x478c1e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x3ccf2a = _0x14dad0("init");
    !_0x30d4fd.test(_0x3ccf2a + "chain") || !_0x478c1e.test(_0x3ccf2a + "input") ? _0x3ccf2a("0") : _0x14dad0();
  })();
})();
const _0x5f0ef0 = new _0x599f9c("Tank"),
  _0x15168d = "tk",
  _0x4d6bb4 = 1;
let _0x46f460 = ["@", "\n"],
  _0x1fa6a9 = [],
  _0x6d71f0 = "",
  _0x4f6005 = [],
  _0x2c2762 = 0;
async function _0x9d9617() {
  for (let _0x3fbdb2 of _0x4f6005) {
    _0x3fbdb2.ckStatus && (console.log("\n"), _0x1fa6a9.push(await _0x3fbdb2.query_point()), _0x1fa6a9.push(await _0x3fbdb2.task_sign()), _0x1fa6a9.push(await _0x3fbdb2.query_point()), await _0x5f0ef0.wait(1000));
  }
  await Promise.all(_0x1fa6a9);
}
class _0x517102 {
  constructor(_0x1b7f43) {
    this.index = ++_0x2c2762;
    this.ck = _0x1b7f43.split("&")[0];
    this.ckStatus = true;
  }
  async ["task_sign"]() {
    try {
      let _0x42534f = {
          "url": "https://bt-h5-gateway.beantechyun.com/app-api/api/v1.0/signIn/sign",
          "headers": {
            "accessToken": "" + this.ck,
            "terminal": "GW_APP_TANK",
            "brand": "7",
            "rs": "2",
            "User-Agent": _0x2d327d(),
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Host": "bt-h5-gateway.beantechyun.com",
            "Connection": "keep-alive"
          },
          "body": JSON.stringify({
            "port": "HJ0002"
          })
        },
        _0x312fa1 = await _0x2b47aa(_0x42534f);
      _0x312fa1.code == "000000" ? (_0x5f0ef0.DoubleLog("账号[" + this.index + "]  " + _0x312fa1.data + "📅"), this.ckStatus = true) : (_0x5f0ef0.DoubleLog("账号[" + this.index + "]  " + _0x312fa1.description + "❌"), this.ckStatus = false);
    } catch (_0x40c173) {
      console.log(_0x40c173);
    }
  }
  async ["query_point"]() {
    try {
      let _0x19db00 = {
          "url": "https://bt-h5-gateway.beantechyun.com/app-api/api/v1.0/point/querySumPoint",
          "headers": {
            "accessToken": "" + this.ck,
            "terminal": "GW_APP_TANK",
            "brand": "7",
            "rs": "2",
            "User-Agent": _0x2d327d(),
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Host": "bt-h5-gateway.beantechyun.com",
            "Connection": "keep-alive"
          }
        },
        _0x111e19 = await _0x2b47aa(_0x19db00);
      _0x111e19.code == "000000" ? (_0x5f0ef0.DoubleLog("账号[" + this.index + "]  当前共计：" + _0x111e19.data.totalPoint + "坦克币🎁"), this.ckStatus = true) : (_0x5f0ef0.DoubleLog("账号[" + this.index + "]  " + _0x111e19.description + "❌"), this.ckStatus = false);
    } catch (_0x522f1a) {
      console.log(_0x522f1a);
    }
  }
}
!(async () => {
  if (!(await _0x145b29())) return;
  _0x4f6005.length > 0 && (await _0x9d9617());
  await _0x5f0ef0.SendMsg(_0x6d71f0);
})().catch(_0xc61f07 => console.log(_0xc61f07)).finally(() => _0x5f0ef0.done());
async function _0x145b29() {
  let _0x17c88b = (_0x5f0ef0.isNode() ? process.env[_0x15168d] : _0x5f0ef0.getdata(_0x15168d)) || "",
    _0x446b29 = 0;
  if (_0x17c88b) {
    let _0x3dcb03 = _0x46f460[0];
    for (let _0x4145f0 of _0x46f460) if (_0x17c88b.indexOf(_0x4145f0) > -1) {
      _0x3dcb03 = _0x4145f0;
      break;
    }
    for (let _0x30bc05 of _0x17c88b.split(_0x3dcb03)) _0x30bc05 && _0x4f6005.push(new _0x517102(_0x30bc05));
    _0x446b29 = _0x4f6005.length;
  } else {
    console.log("未找到CK");
    return;
  }
  return console.log("共找到" + _0x446b29 + "个账号"), true;
}
(function () {
  const _0x19d753 = function () {
      let _0x498b6f;
      try {
        _0x498b6f = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x4d5200) {
        _0x498b6f = window;
      }
      return _0x498b6f;
    },
    _0x59ea88 = _0x19d753();
  _0x59ea88.setInterval(_0x14dad0, 2000);
})();
function _0x2b47aa(_0x18414c, _0x29e2be) {
  return _0x29e2be = _0x18414c.method ? _0x18414c.method.toLowerCase() : _0x18414c.body ? "post" : "get", new Promise(_0x3cabb5 => {
    _0x5f0ef0[_0x29e2be](_0x18414c, (_0xa6459c, _0x4d9256, _0x471e42) => {
      try {
        if (_0xa6459c) console.log(_0x29e2be + "请求失败"), _0x5f0ef0.logErr(_0xa6459c);else {
          if (_0x471e42) {
            try {
              _0x471e42 = JSON.parse(_0x471e42);
            } catch (_0x2c7412) {}
            _0x3cabb5(_0x471e42);
          } else console.log("请求api返回数据为空，请检查自身原因");
        }
      } catch (_0x5f13b4) {
        _0x5f0ef0.logErr(_0x5f13b4, _0x4d9256);
      } finally {
        _0x3cabb5();
      }
    });
  });
}
function _0x2d327d() {
  const _0x288c56 = (_0xd49047, _0x3dd4ac) => Math.floor(Math.random() * (_0x3dd4ac - _0xd49047 + 1)) + _0xd49047,
    _0x2611f4 = _0x288c56(600, 700) + "." + _0x288c56(1, 4) + "." + _0x288c56(1, 5),
    _0x369d4e = _0x288c56(12, 15) + "." + _0x288c56(0, 6) + "." + _0x288c56(0, 9),
    _0x73d292 = "Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x369d4e + " like Mac OS X) AppleWebKit/" + _0x2611f4 + " (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x16001422) NetType/WIFI Language/zh_CN";
  return _0x73d292;
}
function _0x599f9c(_0x2e5759, _0x4c9c12) {
  class _0x291da1 {
    constructor(_0x212c40) {
      this.env = _0x212c40;
    }
    ["send"](_0x37221b, _0x520477 = "GET") {
      _0x37221b = "string" == typeof _0x37221b ? {
        "url": _0x37221b
      } : _0x37221b;
      let _0x558058 = this.get;
      return "POST" === _0x520477 && (_0x558058 = this.post), new Promise((_0x418b6f, _0x276869) => {
        _0x558058.call(this, _0x37221b, (_0x2bae93, _0x1510fe, _0x502df2) => {
          _0x2bae93 ? _0x276869(_0x2bae93) : _0x418b6f(_0x1510fe);
        });
      });
    }
    ["get"](_0x50e125) {
      return this.send.call(this.env, _0x50e125);
    }
    ["post"](_0x271906) {
      return this.send.call(this.env, _0x271906, "POST");
    }
  }
  return new class {
    constructor(_0x199dc2, _0xd1bad7) {
      this.name = _0x199dc2;
      this.http = new _0x291da1(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xd1bad7);
      this.log("", "🔔" + this.name + ",开始!");
    }
    ["getEnv"]() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    ["isNode"]() {
      return "Node.js" === this.getEnv();
    }
    ["isQuanX"]() {
      return "Quantumult X" === this.getEnv();
    }
    ["isSurge"]() {
      return "Surge" === this.getEnv();
    }
    ["isLoon"]() {
      return "Loon" === this.getEnv();
    }
    ["isShadowrocket"]() {
      return "Shadowrocket" === this.getEnv();
    }
    ["isStash"]() {
      return "Stash" === this.getEnv();
    }
    ["toObj"](_0x19f1fa, _0xaabe32 = null) {
      try {
        return JSON.parse(_0x19f1fa);
      } catch {
        return _0xaabe32;
      }
    }
    ["toStr"](_0x29995c, _0x4e1b66 = null) {
      try {
        return JSON.stringify(_0x29995c);
      } catch {
        return _0x4e1b66;
      }
    }
    ["getjson"](_0x47f857, _0x901174) {
      let _0x3f4e26 = _0x901174;
      const _0x1324fe = this.getdata(_0x47f857);
      if (_0x1324fe) try {
        _0x3f4e26 = JSON.parse(this.getdata(_0x47f857));
      } catch {}
      return _0x3f4e26;
    }
    ["setjson"](_0x5db505, _0xd1cafa) {
      try {
        return this.setdata(JSON.stringify(_0x5db505), _0xd1cafa);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x283f80) {
      return new Promise(_0x181dd4 => {
        this.get({
          "url": _0x283f80
        }, (_0x176e1c, _0x41786e, _0xf91e3a) => _0x181dd4(_0xf91e3a));
      });
    }
    ["runScript"](_0x282bf2, _0x41afb7) {
      return new Promise(_0x20d950 => {
        let _0x2ca5e5 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2ca5e5 = _0x2ca5e5 ? _0x2ca5e5.replace(/\n/g, "").trim() : _0x2ca5e5;
        let _0x45a67a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x45a67a = _0x45a67a ? 1 * _0x45a67a : 20;
        _0x45a67a = _0x41afb7 && _0x41afb7.timeout ? _0x41afb7.timeout : _0x45a67a;
        const [_0x413dc9, _0x4562c5] = _0x2ca5e5.split("@"),
          _0x45a07a = {
            "url": "http://" + _0x4562c5 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x282bf2,
              "mock_type": "cron",
              "timeout": _0x45a67a
            },
            "headers": {
              "X-Key": _0x413dc9,
              "Accept": "*/*"
            },
            "timeout": _0x45a67a
          };
        this.post(_0x45a07a, (_0x4ad2af, _0x5d9031, _0x250086) => _0x20d950(_0x250086));
      }).catch(_0x14bf25 => this.logErr(_0x14bf25));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2ef289 = this.path.resolve(this.dataFile),
          _0x214b29 = this.path.resolve(process.cwd(), this.dataFile),
          _0x3ee35d = this.fs.existsSync(_0x2ef289),
          _0xbaef45 = !_0x3ee35d && this.fs.existsSync(_0x214b29);
        if (!_0x3ee35d && !_0xbaef45) return {};
        {
          const _0x4881c2 = _0x3ee35d ? _0x2ef289 : _0x214b29;
          try {
            return JSON.parse(this.fs.readFileSync(_0x4881c2));
          } catch (_0x3cefe1) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x567f40 = this.path.resolve(this.dataFile),
          _0x2a80c9 = this.path.resolve(process.cwd(), this.dataFile),
          _0x479f66 = this.fs.existsSync(_0x567f40),
          _0x4d4d7a = !_0x479f66 && this.fs.existsSync(_0x2a80c9),
          _0x3f54e4 = JSON.stringify(this.data);
        _0x479f66 ? this.fs.writeFileSync(_0x567f40, _0x3f54e4) : _0x4d4d7a ? this.fs.writeFileSync(_0x2a80c9, _0x3f54e4) : this.fs.writeFileSync(_0x567f40, _0x3f54e4);
      }
    }
    ["lodash_get"](_0x3f297e, _0x28fe41, _0x4321b1) {
      const _0xb18c1a = _0x28fe41.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x1ae524 = _0x3f297e;
      for (const _0x5af78b of _0xb18c1a) if (_0x1ae524 = Object(_0x1ae524)[_0x5af78b], void 0 === _0x1ae524) return _0x4321b1;
      return _0x1ae524;
    }
    ["lodash_set"](_0xc5ccab, _0x2296bd, _0x1a0ae9) {
      return Object(_0xc5ccab) !== _0xc5ccab ? _0xc5ccab : (Array.isArray(_0x2296bd) || (_0x2296bd = _0x2296bd.toString().match(/[^.[\]]+/g) || []), _0x2296bd.slice(0, -1).reduce((_0x628594, _0x49c6b5, _0x1d7409) => Object(_0x628594[_0x49c6b5]) === _0x628594[_0x49c6b5] ? _0x628594[_0x49c6b5] : _0x628594[_0x49c6b5] = Math.abs(_0x2296bd[_0x1d7409 + 1]) >> 0 == +_0x2296bd[_0x1d7409 + 1] ? [] : {}, _0xc5ccab)[_0x2296bd[_0x2296bd.length - 1]] = _0x1a0ae9, _0xc5ccab);
    }
    ["getdata"](_0x5d7bea) {
      let _0x36995c = this.getval(_0x5d7bea);
      if (/^@/.test(_0x5d7bea)) {
        const [, _0x21f6b4, _0x17425a] = /^@(.*?)\.(.*?)$/.exec(_0x5d7bea),
          _0x2ab536 = _0x21f6b4 ? this.getval(_0x21f6b4) : "";
        if (_0x2ab536) try {
          const _0x48f033 = JSON.parse(_0x2ab536);
          _0x36995c = _0x48f033 ? this.lodash_get(_0x48f033, _0x17425a, "") : _0x36995c;
        } catch (_0x5433dc) {
          _0x36995c = "";
        }
      }
      return _0x36995c;
    }
    ["setdata"](_0x14a890, _0x64c3fa) {
      let _0x529a3f = false;
      if (/^@/.test(_0x64c3fa)) {
        const [, _0x267b7e, _0x31bb7b] = /^@(.*?)\.(.*?)$/.exec(_0x64c3fa),
          _0x3bf0ab = this.getval(_0x267b7e),
          _0x34deba = _0x267b7e ? "null" === _0x3bf0ab ? null : _0x3bf0ab || "{}" : "{}";
        try {
          const _0x46a61a = JSON.parse(_0x34deba);
          this.lodash_set(_0x46a61a, _0x31bb7b, _0x14a890);
          _0x529a3f = this.setval(JSON.stringify(_0x46a61a), _0x267b7e);
        } catch (_0x2de2e1) {
          const _0x44a82e = {};
          this.lodash_set(_0x44a82e, _0x31bb7b, _0x14a890);
          _0x529a3f = this.setval(JSON.stringify(_0x44a82e), _0x267b7e);
        }
      } else _0x529a3f = this.setval(_0x14a890, _0x64c3fa);
      return _0x529a3f;
    }
    ["getval"](_0x23fff3) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x23fff3);
        case "Quantumult X":
          return $prefs.valueForKey(_0x23fff3);
        case "Node.js":
          return this.data = this.loaddata(), this.data[_0x23fff3];
        default:
          return this.data && this.data[_0x23fff3] || null;
      }
    }
    ["setval"](_0x310219, _0x492821) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x310219, _0x492821);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x310219, _0x492821);
        case "Node.js":
          return this.data = this.loaddata(), this.data[_0x492821] = _0x310219, this.writedata(), !0;
        default:
          return this.data && this.data[_0x492821] || null;
      }
    }
    ["initGotEnv"](_0xa2c904) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0xa2c904 && (_0xa2c904.headers = _0xa2c904.headers ? _0xa2c904.headers : {}, void 0 === _0xa2c904.headers.Cookie && void 0 === _0xa2c904.cookieJar && (_0xa2c904.cookieJar = this.ckjar));
    }
    ["get"](_0x26f9d2, _0x4b21b8 = () => {}) {
      switch (_0x26f9d2.headers && (delete _0x26f9d2.headers["Content-Type"], delete _0x26f9d2.headers["Content-Length"], delete _0x26f9d2.headers["content-type"], delete _0x26f9d2.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x26f9d2.headers = _0x26f9d2.headers || {}, Object.assign(_0x26f9d2.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(_0x26f9d2, (_0x12be9a, _0xc3a8e2, _0x5058a7) => {
            !_0x12be9a && _0xc3a8e2 && (_0xc3a8e2.body = _0x5058a7, _0xc3a8e2.statusCode = _0xc3a8e2.status ? _0xc3a8e2.status : _0xc3a8e2.statusCode, _0xc3a8e2.status = _0xc3a8e2.statusCode);
            _0x4b21b8(_0x12be9a, _0xc3a8e2, _0x5058a7);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x26f9d2.opts = _0x26f9d2.opts || {}, Object.assign(_0x26f9d2.opts, {
            "hints": !1
          })), $task.fetch(_0x26f9d2).then(_0x1c1645 => {
            const {
              statusCode: _0x1d78be,
              statusCode: _0xb5eb60,
              headers: _0x1afc74,
              body: _0x152423,
              bodyBytes: _0x5290c1
            } = _0x1c1645;
            _0x4b21b8(null, {
              "status": _0x1d78be,
              "statusCode": _0xb5eb60,
              "headers": _0x1afc74,
              "body": _0x152423,
              "bodyBytes": _0x5290c1
            }, _0x152423, _0x5290c1);
          }, _0x2773d6 => _0x4b21b8(_0x2773d6 && _0x2773d6.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x12139d = require("iconv-lite");
          this.initGotEnv(_0x26f9d2), this.got(_0x26f9d2).on("redirect", (_0x5510d2, _0x502161) => {
            try {
              if (_0x5510d2.headers["set-cookie"]) {
                const _0x2c6073 = _0x5510d2.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x2c6073 && this.ckjar.setCookieSync(_0x2c6073, null);
                _0x502161.cookieJar = this.ckjar;
              }
            } catch (_0x4574dd) {
              this.logErr(_0x4574dd);
            }
          }).then(_0x1a9dd6 => {
            const {
                statusCode: _0x265002,
                statusCode: _0x3f63d9,
                headers: _0x301326,
                rawBody: _0x4f6166
              } = _0x1a9dd6,
              _0x4496a5 = _0x12139d.decode(_0x4f6166, this.encoding);
            _0x4b21b8(null, {
              "status": _0x265002,
              "statusCode": _0x3f63d9,
              "headers": _0x301326,
              "rawBody": _0x4f6166,
              "body": _0x4496a5
            }, _0x4496a5);
          }, _0x1ba672 => {
            const {
              message: _0x339f7d,
              response: _0x4b95df
            } = _0x1ba672;
            _0x4b21b8(_0x339f7d, _0x4b95df, _0x4b95df && _0x12139d.decode(_0x4b95df.rawBody, this.encoding));
          });
      }
    }
    ["post"](_0x3bc452, _0x2a4979 = () => {}) {
      const _0x36f529 = _0x3bc452.method ? _0x3bc452.method.toLocaleLowerCase() : "post";
      switch (_0x3bc452.body && _0x3bc452.headers && !_0x3bc452.headers["Content-Type"] && !_0x3bc452.headers["content-type"] && (_0x3bc452.headers["content-type"] = "application/x-www-form-urlencoded"), _0x3bc452.headers && (delete _0x3bc452.headers["Content-Length"], delete _0x3bc452.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x3bc452.headers = _0x3bc452.headers || {}, Object.assign(_0x3bc452.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[_0x36f529](_0x3bc452, (_0x5c8237, _0x1f3b62, _0x1036b6) => {
            !_0x5c8237 && _0x1f3b62 && (_0x1f3b62.body = _0x1036b6, _0x1f3b62.statusCode = _0x1f3b62.status ? _0x1f3b62.status : _0x1f3b62.statusCode, _0x1f3b62.status = _0x1f3b62.statusCode);
            _0x2a4979(_0x5c8237, _0x1f3b62, _0x1036b6);
          });
          break;
        case "Quantumult X":
          _0x3bc452.method = _0x36f529, this.isNeedRewrite && (_0x3bc452.opts = _0x3bc452.opts || {}, Object.assign(_0x3bc452.opts, {
            "hints": !1
          })), $task.fetch(_0x3bc452).then(_0x5d101d => {
            const {
              statusCode: _0x3e74bd,
              statusCode: _0xa8696e,
              headers: _0x58980d,
              body: _0x4f0ef7,
              bodyBytes: _0xcbcbd3
            } = _0x5d101d;
            _0x2a4979(null, {
              "status": _0x3e74bd,
              "statusCode": _0xa8696e,
              "headers": _0x58980d,
              "body": _0x4f0ef7,
              "bodyBytes": _0xcbcbd3
            }, _0x4f0ef7, _0xcbcbd3);
          }, _0x4cedf9 => _0x2a4979(_0x4cedf9 && _0x4cedf9.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x4bdd82 = require("iconv-lite");
          this.initGotEnv(_0x3bc452);
          const {
            url: _0x198402,
            ..._0x4a440d
          } = _0x3bc452;
          this.got[_0x36f529](_0x198402, _0x4a440d).then(_0x1dc0a3 => {
            const {
                statusCode: _0xe1a80b,
                statusCode: _0x215142,
                headers: _0x1037f0,
                rawBody: _0x3fdc43
              } = _0x1dc0a3,
              _0x511a46 = _0x4bdd82.decode(_0x3fdc43, this.encoding);
            _0x2a4979(null, {
              "status": _0xe1a80b,
              "statusCode": _0x215142,
              "headers": _0x1037f0,
              "rawBody": _0x3fdc43,
              "body": _0x511a46
            }, _0x511a46);
          }, _0x40a5b6 => {
            const {
              message: _0x5c3a66,
              response: _0x595707
            } = _0x40a5b6;
            _0x2a4979(_0x5c3a66, _0x595707, _0x595707 && _0x4bdd82.decode(_0x595707.rawBody, this.encoding));
          });
      }
    }
    ["time"](_0x498e04, _0x5952be = null) {
      const _0x349d86 = _0x5952be ? new Date(_0x5952be) : new Date();
      let _0x48ff18 = {
        "M+": _0x349d86.getMonth() + 1,
        "d+": _0x349d86.getDate(),
        "H+": _0x349d86.getHours(),
        "m+": _0x349d86.getMinutes(),
        "s+": _0x349d86.getSeconds(),
        "q+": Math.floor((_0x349d86.getMonth() + 3) / 3),
        "S": _0x349d86.getMilliseconds()
      };
      /(y+)/.test(_0x498e04) && (_0x498e04 = _0x498e04.replace(RegExp.$1, (_0x349d86.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2f120d in _0x48ff18) new RegExp("(" + _0x2f120d + ")").test(_0x498e04) && (_0x498e04 = _0x498e04.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x48ff18[_0x2f120d] : ("00" + _0x48ff18[_0x2f120d]).substr(("" + _0x48ff18[_0x2f120d]).length)));
      return _0x498e04;
    }
    ["queryStr"](_0x35e772) {
      let _0x3e3f30 = "";
      for (const _0x40388e in _0x35e772) {
        let _0x33379e = _0x35e772[_0x40388e];
        null != _0x33379e && "" !== _0x33379e && ("object" == typeof _0x33379e && (_0x33379e = JSON.stringify(_0x33379e)), _0x3e3f30 += _0x40388e + "=" + _0x33379e + "&");
      }
      return _0x3e3f30 = _0x3e3f30.substring(0, _0x3e3f30.length - 1), _0x3e3f30;
    }
    ["msg"](_0x3e9549 = _0x2e5759, _0x2da0bb = "", _0x22227c = "", _0x1a8595) {
      const _0x46f67a = _0x2d24f8 => {
        switch (typeof _0x2d24f8) {
          case void 0:
            return _0x2d24f8;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  "url": _0x2d24f8
                };
              case "Loon":
              case "Shadowrocket":
                return _0x2d24f8;
              case "Quantumult X":
                return {
                  "open-url": _0x2d24f8
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let _0x2d60ec = _0x2d24f8.url || _0x2d24f8.openUrl || _0x2d24f8["open-url"];
                  return {
                    "url": _0x2d60ec
                  };
                }
              case "Loon":
                {
                  let _0xe5d1ac = _0x2d24f8.openUrl || _0x2d24f8.url || _0x2d24f8["open-url"],
                    _0x13bac7 = _0x2d24f8.mediaUrl || _0x2d24f8["media-url"];
                  return {
                    "openUrl": _0xe5d1ac,
                    "mediaUrl": _0x13bac7
                  };
                }
              case "Quantumult X":
                {
                  let _0x10149a = _0x2d24f8["open-url"] || _0x2d24f8.url || _0x2d24f8.openUrl,
                    _0xf6c8ff = _0x2d24f8["media-url"] || _0x2d24f8.mediaUrl,
                    _0x4a7d09 = _0x2d24f8["update-pasteboard"] || _0x2d24f8.updatePasteboard;
                  return {
                    "open-url": _0x10149a,
                    "media-url": _0xf6c8ff,
                    "update-pasteboard": _0x4a7d09
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(_0x3e9549, _0x2da0bb, _0x22227c, _0x46f67a(_0x1a8595));
          break;
        case "Quantumult X":
          $notify(_0x3e9549, _0x2da0bb, _0x22227c, _0x46f67a(_0x1a8595));
          break;
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let _0x3eaaf6 = ["", "==============📣系统通知📣=============="];
        _0x3eaaf6.push(_0x3e9549);
        _0x2da0bb && _0x3eaaf6.push(_0x2da0bb);
        _0x22227c && _0x3eaaf6.push(_0x22227c);
        console.log(_0x3eaaf6.join("\n"));
        this.logs = this.logs.concat(_0x3eaaf6);
      }
    }
    ["log"](..._0x43e5d4) {
      _0x43e5d4.length > 0 && (this.logs = [...this.logs, ..._0x43e5d4]);
      console.log(_0x43e5d4.join(this.logSeparator));
    }
    ["logErr"](_0x1c4f7c, _0x28c7f6) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ",错误!", _0x1c4f7c);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ",错误!", _0x1c4f7c.stack);
      }
    }
    ["wait"](_0x3934dd) {
      return new Promise(_0x3bd7d1 => setTimeout(_0x3bd7d1, _0x3934dd));
    }
    ["DoubleLog"](_0x33d0f9) {
      _0x5f0ef0.isNode() ? _0x33d0f9 && (console.log("" + _0x33d0f9), _0x6d71f0 += "\n " + _0x33d0f9) : (console.log("" + _0x33d0f9), _0x6d71f0 += "\n " + _0x33d0f9);
    }
    async ["SendMsg"](_0x4346f5) {
      if (!_0x4346f5) return;
      if (_0x4d6bb4 > 0) {
        if (_0x5f0ef0.isNode()) {
          var _0x253e57 = require("./sendNotify");
          await _0x253e57.sendNotify(_0x5f0ef0.name, _0x4346f5);
        } else _0x5f0ef0.msg(_0x5f0ef0.name, "", _0x4346f5), console.log(_0x5f0ef0.name, "", _0x4346f5);
      } else console.log(_0x4346f5);
    }
    ["done"](_0x36aab9 = {}) {
      const _0xd6de36 = new Date().getTime(),
        _0x5153a3 = (_0xd6de36 - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ",结束!🕛 " + _0x5153a3 + "秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x36aab9);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x2e5759, _0x4c9c12);
}
function _0x14dad0(_0x18a997) {
  function _0x448d1e(_0x165ce5) {
    if (typeof _0x165ce5 === "string") return function (_0x10c855) {}.constructor("while (true) {}").apply("counter");else ("" + _0x165ce5 / _0x165ce5).length !== 1 || _0x165ce5 % 20 === 0 ? function () {
      return true;
    }.constructor("debugger").call("action") : function () {
      return false;
    }.constructor("debugger").apply("stateObject");
    _0x448d1e(++_0x165ce5);
  }
  try {
    if (_0x18a997) return _0x448d1e;else _0x448d1e(0);
  } catch (_0x4e444e) {}
}