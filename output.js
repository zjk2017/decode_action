//Tue Jul 02 2024 11:48:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("🥤沪上阿姨小程序签到"),
  ckName = "hsay_data",
  Notify = 1,
  notify = $.isNode() ? require("./sendNotify") : "";
let envSplitor = ["@"],
  userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "",
  userList = [],
  userIdx = 0;
let userCount = 0;
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyMsg = [];
$.barkKey = ($.isNode() ? process.env.bark_key : $.getdata("bark_key")) || "";
async function main() {
  await getNotice();
  console.log("\n================== 任务 ==================\n");
  for (let _0x14de4c of userList) {
    console.log("🔷账号" + _0x14de4c.index + " >> Start work");
    console.log("随机延迟" + _0x14de4c.getRandomTime() + "ms");
    await _0x14de4c.checkin();
    if (_0x14de4c.ckStatus) {
      await _0x14de4c.signin();
      let {
        code: _0x3eb368,
        data: _0x5b6f8c,
        message: _0x53672c
      } = await _0x14de4c.point();
      DoubleLog($.signMsg + "当前共" + _0x5b6f8c.totalPoints + "积分");
    } else {
      $.notifyMsg.push("❌账号" + _0x14de4c.index + " >> Check ck error!");
    }
  }
}
class UserInfo {
  constructor(_0x2c0492) {
    this.index = ++userIdx;
    this.token = _0x2c0492;
    this.ckStatus = true;
    this.headers = {
      "Qm-User-Token": this.token,
      "Qm-From": "wechat",
      "content-type": "application/json"
    };
  }
  getRandomTime() {
    return randomInt(1000, 3000);
  }
  Request(_0x368261, _0x40e0ab) {
    typeof _0x40e0ab === "undefined" ? "body" in _0x368261 ? _0x40e0ab = "post" : _0x40e0ab = "get" : _0x40e0ab = _0x40e0ab;
    return new Promise((_0x1374c1, _0x3b03a1) => {
      $.http[_0x40e0ab.toLowerCase()](_0x368261).then(_0x198ef9 => {
        let _0x2722b7 = _0x198ef9.body;
        _0x2722b7 = $.toObj(_0x2722b7) || _0x2722b7;
        _0x1374c1(_0x2722b7);
      }).catch(_0x2f4bd4 => _0x3b03a1(_0x2f4bd4));
    });
  }
  async checkin() {
    try {
      const _0x1d1719 = {
        "Qm-User-Token": this.token,
        "Qm-From": "wechat",
        "Content-Type": "application/json"
      };
      const _0x1aa70d = {
        url: "https://webapi.qmai.cn/web/catering/integral/sign/signIn",
        headers: _0x1d1719,
        body: "{\"activityId\":\"702822503017398273\",\"mobilePhone\":\"root\",\"userName\":\"微信用户\",\"appid\":\"wxd92a2d29f8022f40\"}"
      };
      let {
        code: _0x45f705,
        message: _0x193085,
        data: _0x156b04,
        status: _0x4c2cf0
      } = await this.Request(_0x1aa70d);
      if (_0x45f705 == 0 || _0x45f705 == 400041) {
        $.signMsg = _0x4c2cf0 ? "🎉账号[" + this.index + "] 签到成功！" : "🟡账号[" + this.index + "] " + _0x193085 + "!";
        console.log("旧签到接口:" + _0x193085);
      } else {
        DoubleLog("❌账号[" + this.index + "] takePartInSign签到错误：" + _0x193085);
        this.ckStatus = false;
      }
    } catch (_0x19cad9) {
      throw _0x19cad9;
    }
  }
  async signin() {
    try {
      const _0x413bf7 = {
        "Qm-User-Token": this.token,
        "Qm-From": "wechat",
        "Content-Type": "application/json"
      };
      const _0xd09e82 = {
        url: "https://webapi.qmai.cn/web/cmk-center/sign/takePartInSign",
        headers: _0x413bf7,
        body: "{\"appid\" : \"wxd92a2d29f8022f40\",\"activityId\" : \"702822503017398273\"}"
      };
      let {
        code: _0x4e54a3,
        message: _0x5f459b,
        data: _0x5e5e8e,
        status: _0x22cd8f
      } = await this.Request(_0xd09e82);
      if (_0x4e54a3 == 0 || _0x4e54a3 == 400041) {
        console.log("新签到接口:" + _0x5f459b);
      } else {
        console.log("❌账号[" + this.index + "] signIn签到错误：" + _0x5f459b);
      }
    } catch (_0x397e53) {
      throw _0x397e53;
    }
  }
  async point() {
    try {
      const _0x52c724 = {
        "Qm-User-Token": this.token,
        "Qm-From": "wechat",
        "Content-Type": "application/json"
      };
      const _0x1e22b3 = {
        url: "https://webapi.qmai.cn/web/catering2-apiserver/crm/points-info",
        headers: _0x52c724,
        body: "{\"appid\" : \"wxd92a2d29f8022f40\"}"
      };
      return await this.Request(_0x1e22b3);
    } catch (_0x7c9c1b) {
      throw _0x7c9c1b;
    }
  }
}
async function getCookie() {
  if ($request && $request.method != "OPTIONS") {
    const _0x54dc64 = $request.headers["Qm-User-Token"] || $request.headers["qm-user-token"] || $request.headers["QM-USER-TOKEN"];
    _0x54dc64 ? ($.setdata(_0x54dc64, ckName), $.msg($.name, "", "获取签到Cookie成功🎉")) : $.msg($.name, "", "错误获取签到Cookie失败");
  }
}
async function getNotice() {
  try {
    const _0xd212cf = ["https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/notice.json", "https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/tip.json"];
    for (const _0x475557 of _0xd212cf) {
      const _0x342f9b = {
        "User-Agent": ""
      };
      const _0x5068ea = {
        url: _0x475557,
        headers: _0x342f9b
      };
      const _0x4aba75 = await httpRequest(_0x5068ea);
      if (_0x4aba75) {
        console.log(_0x4aba75.notice);
      }
    }
  } catch (_0x423397) {
    console.log(_0x423397);
  }
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
    return;
  }
  if (!(await checkEnv())) {
    throw new Error("❌未检测到ck，请添加环境变量");
  }
  if (userList.length > 0) {
    await main();
  }
})().catch(_0x5e505e => $.notifyMsg.push(_0x5e505e.message || _0x5e505e)).finally(async () => {
  $.barkKey && (await BarkNotify($, $.barkKey, $.name, $.notifyMsg.join("\n")));
  await SendMsg($.notifyMsg.join("\n"));
  $.done();
});
function DoubleLog(_0x2e6deb) {
  $.isNode() ? _0x2e6deb && (console.log("" + _0x2e6deb), $.notifyMsg.push("" + _0x2e6deb)) : (console.log("" + _0x2e6deb), $.notifyMsg.push("" + _0x2e6deb));
}
function debug(_0x4e4fec, _0x3a6e3f = "debug") {
  if ($.is_debug === "true") {
    if (typeof _0x4e4fec == "string") {
      console.log("\n-----------" + _0x3a6e3f + "------------\n");
      console.log(_0x4e4fec);
      console.log("\n-----------" + _0x3a6e3f + "------------\n");
    } else {
      typeof _0x4e4fec == "object" && (console.log("\n-----------" + _0x3a6e3f + "------------\n"), console.log($.toStr(_0x4e4fec)), console.log("\n-----------" + _0x3a6e3f + "------------\n"));
    }
  }
}
async function checkEnv() {
  if (userCookie) {
    let _0x1d03e5 = envSplitor[0];
    for (let _0x54e987 of envSplitor) if (userCookie.indexOf(_0x54e987) > -1) {
      _0x1d03e5 = _0x54e987;
      break;
    }
    for (let _0x1fbf48 of userCookie.split(_0x1d03e5)) _0x1fbf48 && userList.push(new UserInfo(_0x1fbf48));
    userCount = userList.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return true;
}
function randomInt(_0x429b75, _0x21adf) {
  return Math.round(Math.random() * (_0x21adf - _0x429b75) + _0x429b75);
}
async function SendMsg(_0x476cd5) {
  if (!_0x476cd5) {
    return;
  }
  Notify > 0 ? $.isNode() ? await notify.sendNotify($.name, _0x476cd5) : $.msg($.name, "", _0x476cd5) : console.log(_0x476cd5);
}