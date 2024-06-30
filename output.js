//Sun Jun 30 2024 15:43:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("少妇签到"),
  debug = 0,
  axios = require("axios");
let request = require("request");
request = request.defaults({
  "jar": true
});
const {
  log
} = console;
let hsayhd = ($.isNode() ? process.env.hsayhd : $.getdata("hsayhd")) || "",
  hsayhdArr = [],
  msg = "";
!(async () => {
  if (typeof $request !== "undefined") await GetRewrite();else {
    if (!(await Envs())) return;else {
      log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " \n=============================================\n");
      log("\n============ 微信公众号:夏梦折腾记 ============");
      log("\n=================== 共找到 " + hsayhdArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + hsayhdArr);
      for (let _0x187b1e = 0; _0x187b1e < hsayhdArr.length; _0x187b1e++) {
        let _0x260e3c = _0x187b1e + 1;
        log("\n==== 开始【第 " + _0x260e3c + " 个账号】====\n");
        hsayhd = hsayhdArr[_0x187b1e];
        log("开始签到");
        await sign();
        await Getinfo();
      }
      await SendMsg(msg);
    }
  }
})().catch(_0x32b1c3 => log(_0x32b1c3)).finally(() => $.done());
async function sign() {
  return new Promise(_0x3b9b7a => {
    var _0x300d11 = {
      "method": "POST",
      "url": "https://webapi.qmai.cn/web/catering/integral/sign/signIn",
      "headers": {
        "Host": "webapi.qmai.cn",
        "Connection": "keep-alive",
        "promotion-code": "",
        "work-wechat-userid": "",
        "store-id": "201424",
        "scene": "1001",
        "work-staff-id": "",
        "Qm-From-Type": "catering",
        "multi-store-id": "150695",
        "Qm-User-Token": hsayhd,
        "work-staff-name": "",
        "user-agent": "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6945",
        "qz-gtd": "",
        "Qm-From": "wechat",
        "Accept": "v=1.0",
        "channelCode": "",
        "xweb_xhr": "1",
        "referer": "https://servicewechat.com/wxd92a2d29f8022f40/246/page-frame.html",
        "Content-Type": "application/json",
        "gdt-vid": "",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Content-Length": "118",
        "content-type": "application/json"
      },
      "data": {
        "activityId": "702822503017398273",
        "mobilePhone": "17788888888",
        "userName": "微信用户",
        "appid": "wxd92a2d29f8022f40"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x300d11)));
    axios.request(_0x300d11).then(async function (_0x555579) {
      try {
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x555579.data)));
        restule = _0x555579.data;
        restule.code == 0 ? (log("签到成功"), msg += "签到成功\n") : (log(restule.message), msg += restule.message + "\n");
      } catch (_0x23e7b2) {
        log("异常：" + _0x23e7b2 + "，原因：" + _0x23e7b2.msg);
      }
    }).catch(function (_0x3d0cc7) {
      console.error(_0x3d0cc7);
    }).then(_0x5281e6 => {
      _0x3b9b7a();
    });
  });
}
async function Getinfo() {
  return new Promise(_0x187642 => {
    var _0xb58baf = {
      "method": "POST",
      "url": "https://webapi.qmai.cn/web/catering/crm/points-info",
      "headers": {
        "Host": "webapi.qmai.cn",
        "Connection": "keep-alive",
        "promotion-code": "",
        "work-wechat-userid": "",
        "store-id": "201424",
        "scene": "1001",
        "work-staff-id": "",
        "Qm-From-Type": "catering",
        "multi-store-id": "150695",
        "Qm-User-Token": hsayhd,
        "work-staff-name": "",
        "user-agent": "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6945",
        "qz-gtd": "",
        "Qm-From": "wechat",
        "Accept": "v=1.0",
        "channelCode": "",
        "xweb_xhr": "1",
        "referer": "https://servicewechat.com/wxd92a2d29f8022f40/246/page-frame.html",
        "Content-Type": "application/json",
        "gdt-vid": "",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "zh-CN,zh",
        "Accept-Encoding": "gzip, deflate",
        "Content-Length": "30",
        "content-type": "application/json"
      },
      "data": {
        "appid": "wxd92a2d29f8022f40"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xb58baf)));
    axios.request(_0xb58baf).then(async function (_0x269701) {
      try {
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x269701.data)));
        restule = _0x269701.data;
        restule.code == 0 ? (log("积分:" + restule.data.totalPoints), msg += "积分:" + restule.data.totalPoints + "\n") : (log(restule.message), msg += restule.message + "\n");
      } catch (_0x3ca857) {
        log("异常：" + _0x3ca857 + "，原因：" + _0x3ca857.msg);
      }
    }).catch(function (_0x5efa7a) {
      console.error(_0x5efa7a);
    }).then(_0x3902d2 => {
      _0x187642();
    });
  });
}