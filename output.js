//Thu Oct 03 2024 02:06:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios").default,
  $ = new Env("ls红包"),
  Notify = 0,
  split = "\n",
  lodash = require("lodash"),
  CryptoJs = require("crypto-js");
let niceKey = $.getToken("niceKey")[0],
  niceKM = $.getToken("niceKM")[0],
  falg = false;
async function getKami() {
  let _0x5d26ca = await axios.post("http://82.156.24.208:3007/nice", {
      "kami": niceKM
    }, 1),
    _0x1b8a49 = _0x5d26ca.data.entry;
  if (_0x1b8a49.kami === niceKM) {
    console.log("卡密正确");
    const _0x1b26b8 = _0x1b8a49.num;
    if (_0x1b26b8 > 0) console.log("查询不扣点数，别狗叫，这个接口只做查询。。剩余余额点数:", _0x1b26b8), falg = true;else return console.log("卡密余额不足 退出程序"), falg = false, false;
  } else {
    return console.log("卡密错误 退出程序"), falg = false, false;
  }
}
function get_data(_0x598af7) {
  if (_0x598af7) {
    if (JSON.stringify(_0x598af7).includes("<html>")) {
      return null;
    }
    return decodeURIComponent(escape(atob(Array.from(_0x598af7).reverse().join(""))));
  }
}
async function get(_0x30508d, _0x57ab72, _0x5b66fc) {
  if (!_0x5b66fc) return {};
  try {
    return await axios.get(_0x30508d, _0x57ab72);
  } catch (_0x4240b7) {
    return await $.wait(1), get(_0x30508d, _0x57ab72, --_0x5b66fc);
  }
}
async function post(_0x30c310, _0x14c094, _0x1c5c67, _0x4ed850) {
  if (!_0x4ed850) return {};
  try {
    return await axios.post(_0x30c310, _0x14c094, _0x1c5c67);
  } catch (_0x409b5f) {
    return await $.wait(1), post(_0x30c310, _0x14c094, _0x1c5c67, --_0x4ed850);
  }
}
async function loginNb(_0x1043cb) {
  if (_0x1043cb == 0) return;
  const _0x36d39c = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0xd62ece) {
    const _0x43deb9 = 16 * Math.random() | 0;
    return (_0xd62ece === "x" ? _0x43deb9 : 3 & _0x43deb9 | 8).toString(16);
  });
  let _0x4cc000 = "https://" + $.host + "/api/User/GetAuthCode?rd=" + Math.random() + "&guid=" + _0x36d39c,
    _0x381792 = await get(_0x4cc000, {
      "responseType": "arraybuffer"
    }, 2);
  try {
    if (JSON.stringify(_0x381792) == "{}") return;
  } catch (_0xbb02b9) {}
  _0x4cc000 = "http://101.43.48.103:6688/identify_ArithmeticCAPTCHA";
  let _0x18d4a4 = {
    "ImageBase64": _0x381792.data.toString("base64")
  };
  _0x381792 = await post(_0x4cc000, _0x18d4a4, {
    "headers": {
      "Content-Type": "application/json"
    }
  }, 2);
  let _0x13f67a = _0x381792.data?.["raw_result"];
  if (!_0x13f67a) return await loginNb(--_0x1043cb);
  const _0x24bd24 = "http://api.ttocr.com/api/recognize";
  let _0x57512d = {
      "appkey": niceKey,
      "referer": "https://" + $.host + "/api/Api/GetVerifyCodeNew?rd=" + Math.random() + "&envvv=1",
      "gt": "26a8228fcfee3424d7ea11653a8e5783",
      "itemid": 488
    },
    _0x414c9f = await post(_0x24bd24, _0x57512d, {}, 3);
  await $.wait(10);
  let _0x2552df = _0x414c9f.data.resultid || null,
    _0x260196 = {
      "appkey": niceKey,
      "resultid": _0x2552df
    },
    _0x450b8a = null;
  _0x450b8a = await post("http://api.ttocr.com/api/results", _0x260196, {}, 3);
  if (_0x450b8a) {
    if (_0x450b8a.data) {
      if (_0x450b8a.data.data) {
        let {
          captchaOutput: _0x8bab4d,
          genTime: _0x3e4fc9,
          lotNumber: _0x34c16f,
          passToken: _0xb54a8b
        } = _0x450b8a.data.data;
        url = "https://" + $.host + "/api/User/CheckLoginFirstStep?envvv=1";
        _0x18d4a4 = "username=" + $.userName + "&password=" + CryptoJs.MD5($.password) + "&code=" + _0x13f67a + "&guid=" + _0x36d39c + "&smsCode=&usertype=credit&login_www=https%3A%2F%2F" + $.host + "%2Fv&jmptwo=1&GeeVer=40&userkey=" + _0x3e4fc9 + "&geetest_challenge=" + _0x34c16f + "&geetest_validate=" + _0x8bab4d + "&geetest_seccode=" + _0xb54a8b;
        let _0x26ee7d = {
          "Host": $.host,
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
          "Referer": "https://" + $.host + "/v/"
        };
        _0x450b8a = await post(url, _0x18d4a4, {
          "headers": _0x26ee7d
        }, 3);
        try {
          if (JSON.stringify(_0x450b8a) == "{}") return;
        } catch (_0x4e8816) {}
        let _0x1f5d26 = JSON.parse(get_data(_0x450b8a.data));
        try {
          _0x450b8a.headers["set-cookie"].push("ploginkey=" + _0x1f5d26.data?.["a"]);
        } catch (_0x51b0b1) {
          return await loginNb(--_0x1043cb);
        }
        $.cookie = _0x450b8a.headers["set-cookie"].join(";");
        if (_0x1f5d26.state == "success") console.log("登录成功");else return await loginNb(--_0x1043cb);
      } else return console.log("请求失败了1,等待800秒后执行下一次"), await $.wait(800), await loginNb(--_0x1043cb);
    } else return console.log("请求失败了2,等待800秒后执行下一次"), await $.wait(800), await loginNb(--_0x1043cb);
  } else {
    return console.log("请求失败了3,等待800秒后执行下一次"), await $.wait(800), await loginNb(--_0x1043cb);
  }
}
async function qiandao() {
  let _0x5b86cb = "https://" + $.host + "/api/Act/PostSignIn?mob=0&isAsync=1&rd=" + Math.random() + "&envvv=1",
    _0x428794 = {
      "Host": $.host,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/124.0.6367.88 Mobile/15E148 Safari/604.1",
      "Referer": "https://" + $.host + "/v/",
      "cookie": $.cookie
    },
    _0x442cc4 = await get(_0x5b86cb, {
      "headers": _0x428794
    }, 2);
  try {
    if (JSON.stringify(_0x442cc4) == "{}") return;
  } catch (_0x401bcf) {}
  data = _0x442cc4.data;
  console.log("签到处理中", data);
}
async function PostHongbaoyu() {
  let _0x17ddd7 = 0;
  if ($.isCode) {
    let _0x405c45 = "https://" + $.host + "/api/Act/GetHongbaoyuInfo?rd=" + Math.random() + "&envvv=1&mob=1&_=" + new Date().getTime(),
      _0x2f863e = {
        "Host": $.host,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
        "Referer": "https://" + $.host + "/v/",
        "cookie": $.cookie
      },
      _0x306e68 = await get(_0x405c45, {
        "headers": _0x2f863e
      }, 3);
    try {
      if (JSON.stringify(_0x306e68) == "{}") return;
    } catch (_0x5afe8b) {}
    data = _0x306e68.data;
    if (!data.state) {
      data = JSON.parse(get_data(_0x306e68.data));
    }
    data ? data.data ? data.data.ConfigID ? (_0x17ddd7 = parseInt(atob(data.data.CodeStr)) + parseInt(data.data.ConfigID.toString().slice(-2)), console.log("红包码=>" + _0x17ddd7)) : _0x17ddd7 = null : (_0x17ddd7 = null, console.log("接口请求失败了 更换域名", $.host)) : (_0x17ddd7 = null, console.log("接口请求失败了 更换域名", $.host));
    !_0x17ddd7 && console.log("红包码获取失败");
  }
  let _0x532fac = "";
  $.isCode ? _0x532fac = "https://" + $.host + "/api/Act/PostHongbaoyu?envvv=1&userOpenCode=" + _0x17ddd7 : _0x532fac = "https://" + $.host + "/api/Act/PostHongbaoyu?envvv=1&mob=1";
  let _0x18d379 = {
      "Host": $.host,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
      "cookie": $.cookie
    },
    _0x2770ff = await get(_0x532fac, {
      "headers": _0x18d379
    }, 3);
  try {
    if (JSON.stringify(_0x2770ff) == "{}") return;
  } catch (_0x292021) {}
  data = _0x2770ff.data;
  if (!data.state) {
    data = JSON.parse(get_data(_0x2770ff.data));
  }
  let _0xd5cf7e = await axios.post("http://82.156.24.208:3007/nice", {
      "kami": niceKM,
      "type": "changeNum",
      "from": "lswjs"
    }, 1),
    _0x5b8d97 = _0xd5cf7e.data.entry;
  console.log("剩余点数", _0x5b8d97.num);
  console.log("拉斯维加斯app " + JSON.stringify(data));
}
async function get_balance() {
  let _0x14e5c7 = "https://" + $.host + "/api/user/GetAccount?Acc_bal_cd=&rd=" + Math.random() + "&envvv=1",
    _0x8b144b = {
      "Host": $.host,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
      "Referer": "https://" + $.host + "/v/",
      "cookie": $.cookie
    },
    _0x473bb6 = await get(_0x14e5c7, {
      "headers": _0x8b144b
    }, 3);
  try {
    if (JSON.stringify(_0x473bb6) == "{}") return;
  } catch (_0x12c15d) {}
  data = _0x473bb6.data;
  if (!Array.isArray(data)) {
    data = JSON.parse(get_data(_0x473bb6.data));
  }
  if (data) for (const _0x5de5c0 of data) {
    _0x5de5c0.ACC_BAL_CD === "my_wallet" && console.log("拉斯维加斯app 余额:" + _0x5de5c0.ACC_BAL);
  }
}
(async () => {
  await getKami();
  if (falg) {
    let _0x1ba0b1 = await axios.get("http://82.156.24.208:3007/getLsUrl"),
      _0xb2425e = $.getToken("lshb2", "#");
    if (!_0xb2425e) return await $.SendMsg("未填写token");
    $._ = lodash.range(0, _0xb2425e.length);
    const _0x14fc5f = new Date(),
      _0x480a87 = _0x14fc5f.getHours();
    for (let _0x42afa1 = 0; _0x42afa1 < _0xb2425e.length; _0x42afa1++) {
      $.addMsg("账号" + (_0x42afa1 + 1) + ":");
      $.token = _0xb2425e[$.random];
      $.userName = $.token[0];
      $.password = $.token[1];
      $.host2 = $.token[2];
      if ($.host2) $.host = $.host2;else {
        $.host = _0x1ba0b1.data;
      }
      $.isCode = $.token[3];
      await loginNb(10);
      (_0x480a87 === 5 || _0x480a87 === 22) && (console.log("当前时间为5时或者22时，将会执行签到"), await qiandao());
      await PostHongbaoyu();
      await get_balance();
    }
  }
  await $.SendMsg($._msg);
  $.done();
})();
function Env(_0x73b5a9) {
  return new class {
    constructor(_0x4b14d3) {
      this.name = _0x4b14d3;
      console.log("🔔" + this.name + ",开始!");
      Object.defineProperty(this, "random", {
        "get"() {
          let _0x1d50e4 = lodash.random(0, this._.length - 1),
            _0x31ea53 = this._[_0x1d50e4];
          return this._.splice(_0x1d50e4, 1), _0x31ea53;
        }
      });
    }
    async ["get"](_0x345018, _0x5255a6, _0x4141ff) {
      if (!_0x4141ff) return {};
      try {
        return (await axios.get(_0x345018, {
          "headers": _0x5255a6
        })).data;
      } catch (_0x1e5068) {
        return console.log("get " + _0x345018 + " :" + _0x1e5068.message), await $.wait(3), this.get(_0x345018, _0x5255a6, --_0x4141ff);
      }
    }
    async ["post"](_0x186b2a, _0x2f6381, _0x1a8ab9, _0x31ba20) {
      if (!_0x31ba20) return {};
      try {
        return (await axios.post(_0x186b2a, _0x2f6381, {
          "headers": _0x1a8ab9
        })).data;
      } catch (_0x3cb42d) {
        return await $.wait(3), console.log("post " + _0x186b2a + " :" + _0x3cb42d.message), this.post(_0x186b2a, _0x2f6381, _0x1a8ab9, --_0x31ba20);
      }
    }
    async ["SendMsg"](_0x53922d) {
      if (!_0x53922d) return;
      if (Notify > 0) {
        var _0x308e02 = require("./sendNotify");
        await _0x308e02.sendNotify(this.name, _0x53922d);
      }
    }
    ["addMsg"](_0x4618cd) {
      if (!this._msg) this._msg = "";
      console.log(_0x4618cd);
      this._msg += _0x4618cd + "\n";
    }
    ["wait"](_0x2bf256) {
      return new Promise(_0x3314bd => {
        setTimeout(_0x3314bd, _0x2bf256 * 1000);
      });
    }
    ["getToken"](_0x51c484, _0x1de3f9) {
      let _0x59a7cb = process.env[_0x51c484];
      if (!_0x59a7cb) return "";
      if (_0x59a7cb.includes("@")) return _0x170adf = _0x59a7cb.split(split), _0x170adf = _0x170adf.map(_0x23935c => {
        let _0xf6c343 = _0x23935c.split("@");
        return [_0xf6c343[0], _0xf6c343[1]];
      }), _0x170adf.length > 0 ? _0x170adf : "";else {
        if (_0x1de3f9) {
          var _0x170adf = [];
          for (const _0x24fc1d of _0x59a7cb.split(split)) {
            _0x170adf.push(_0x24fc1d.split(_0x1de3f9));
          }
        } else _0x170adf = _0x59a7cb.split(split);
      }
      return _0x170adf.length > 0 ? _0x170adf : "";
    }
    ["done"]() {
      console.log("🔔" + this.name + ",结束!");
    }
  }(_0x73b5a9);
}