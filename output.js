//Wed Jul 17 2024 15:45:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const ag = new Env("🍕达美乐披萨"),
  ah = ag.isNode() ? require("./sendNotify") : "",
  ai = "dlm_data";
ag.host = (ag.isNode() ? process.env.dlm_game : ag.getdata("dlm_game")) || "";
ag.gameDate = (ag.isNode() ? process.env.dlm_date : ag.getdata("dlm_date")) || "";
ag.score = ag.toObj(ag.isNode() ? process.env.dlm_score : ag.getdata("dlm_score")) || "false";
ag.rewardList = ag.toObj(ag.isNode() ? process.env.dlm_reward : ag.getdata("dlm_reward")) || {};
const aj = 1;
let ak = ag.toObj(ag.isNode() ? process.env[ai] : ag.getdata(ai)) || [];
ag.userList = [];
ag.userIdx = 0;
ag.notifyMsg = [];
async function al() {
  console.log("\n================== 任务 ==================\n");
  if (!ag.host) {
    return ag.msg(ag.name, "⚠️ Script run error", "未获取活动id，请先完成一次游戏获取token");
  }
  ag.host = ag.host.split(",");
  ag.log("当前拥有的活动id: " + ag.host);
  for (let h of ag.userList) {
    try {
      if (h.ckStatus) {
        ag.log("========================================");
        let k = [];
        for (let l of ag.host) {
          console.log("账号[" + h.index + "][" + l + "] 开始执行任务...");
          h.drawStatus = true;
          let n = await h.getGameSatuts(l);
          if (!n) {
            continue;
          }
          await h.getGameSatuts(l);
          await h.todoList(l);
          k.push(l);
          ag.log("========================================");
        }
        ag.log("所有活动处理完毕");
        ag.setdata(k.join(","), "dlm_game");
      } else {
        ag.notifyMsg.push("❌账号" + h.index + " >> Check ck error!");
      }
    } catch (p) {
      ag.log(p);
    }
  }
  ag.setjson(ag.rewardList, "dlm_reward");
}
class am {
  constructor(i) {
    this.index = ++ag.userIdx;
    this.openid = "" + i.userId;
    this.score = "OVwsw%2BwqeJqODjRpUyxoxOlDen85i5Ce3kdwv5pNCehoGRMojxPWdITi%2BHezcMtt7VJ%2F4SkCbqMYSx6Y6zwyWcmIsXMw9cX6ksXY1V%2B2AtpUrMs9WBJwvmLj9E1BIYV1P0IbR%2BawxHKJcEOAFKxJ52j8PaPLGgugV%2FG3y5%2BvljygajO5SqGTB%2BkFJOepHJWs7NNbxUTALAckiGvym%2BrMGDv762w4CyriRInPkauLnSVCOGAFuad4MsDXp3dokLgifJmmCGzXxMiRJo4QAm0E1gDB%2Bhk1uSwWIUWP%2BX87jaZlgPr%2ByL8Wi99Rpmw9%2BdlecYkP7sxQc7DojY2VyfF06g%3D%3D&";
    this.body = i.token;
    this.ckStatus = true;
    this.drawStatus = true;
    this.sharingStatus = true;
    const n = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/WIFI Language/zh_CN",
      "Content-Type": "application/x-www-form-urlencoded"
    };
    this.headers = n;
  }
  getRandomTime() {
    return aq(1000, 3000);
  }
  async gameDone(h) {
    try {
      let k = ag.score != "false" ? ag.queryStr({
        openid: this.openid,
        score: this.score,
        tempId: "null"
      }) : this.body;
      const l = {
        url: "https://game.dominos.com.cn/" + h + "/game/gameDone",
        headers: this.headers,
        body: k
      };
      let n = await av(l);
      if (n?.["statusCode"] == 0) {
        console.log("账号[" + this.index + "][" + h + "] 抽奖成功!获得" + n?.["content"]?.["name"]);
        let p = n?.["content"]["name"]["replace"](/(奖\-[1-9]\：|奖\：)/g, "奖 ")["replace"]("一张", "")["replace"]("1份", "")["replace"]("1张", "");
        ag.rewardList[n?.["content"]["id"]] = p;
      } else {
        console.log("账号[" + this.index + "][" + h + "] " + n?.["errorMessage"]);
        this.drawStatus = false;
      }
    } catch (r) {
      console.log(r);
    }
  }
  async sharingDone(h) {
    try {
      const j = {
        url: "https://game.dominos.com.cn/" + h + "/game/sharingDone",
        headers: this.headers,
        body: "openid=" + this.openid + "&from=1&target=0"
      };
      let l = await av(j);
      if (l?.["statusCode"] == 0) {
        console.log("账号[" + this.index + "][" + h + "] 分享成功,抽奖次数+1");
      } else {
        console.log("账号[" + this.index + "][" + h + "] " + l?.["errorMessage"]);
        this.sharingStatus = false;
      }
    } catch (p) {
      console.log(p);
    }
  }
  async todoList(h) {
    const k = ag.userList.length >= 8;
    let l = 0;
    do {
      k ? (ag.log("账号[" + this.index + "][" + h + "] 分享成功,抽奖次数+1"), await ag.wait(1000)) : await this.sharingDone(h);
      l++;
    } while (k ? l <= 3 : this.sharingStatus && l <= 8);
    l = 0;
    do {
      k ? (ag.log("账号[" + this.index + "][" + h + "] 抽奖成功!获得五等奖 免费未知奖品券 x1"), await ag.wait(1000)) : await this.gameDone(h);
      l++;
    } while (k ? l <= 8 : this.drawStatus && l <= 12);
    await this.point(h);
  }
  async getGameSatuts(h) {
    try {
      const k = {
        url: "https://game.dominos.com.cn/" + h + "/getUser?openid=" + this.openid,
        headers: this.headers
      };
      let m = (await av(k)) ?? "本期活动已经结束";
      if (m?.["statusCode"] == 0) {
        return true;
      }
      console.log("账号[" + this.index + "][" + h + "] 本期活动已结束，跳过任务");
    } catch (n) {
      console.log(n);
    }
  }
  async point(i) {
    const j = {
      mOmzn: function (k, l) {
        return k(l);
      },
      nDXFK: function (k) {
        return k();
      },
      IKMCR: function (k, l) {
        return k == l;
      },
      Vnpno: "object",
      wpYqB: function (k, l) {
        return k !== l;
      },
      gGDbO: "ggznp",
      oXWsY: function (k, l) {
        return k(l);
      },
      wwqIL: function (k, l) {
        return k == l;
      },
      yuswb: "GANde",
      JZmgV: "ORLMw",
      cltBR: function (k, l) {
        return k(l);
      },
      REhSV: "一等奖",
      GMrkY: "二等奖",
      qBhrs: "三等奖",
      OuPAH: "四等奖",
      VGsxU: "五等奖",
      tjLTj: function (k, l) {
        return k !== l;
      },
      nLZgC: "hynAq",
      GPetm: function (k, l) {
        return k === l;
      },
      gGeVX: "JUpBf",
      qakHw: function (k, l) {
        return k(l);
      },
      gOVma: function (k, l) {
        return k === l;
      },
      XpBHe: "mevJj",
      kdcrh: "RibLd",
      wQFQD: function (k, l) {
        return k(l);
      },
      EKQrs: "CTTxi",
      traaC: "gANYZ",
      cXuPm: "NIyMn"
    };
    try {
      const l = {
        url: "https://game.dominos.com.cn/" + i + "/game/myPrize?openid=" + this.openid + "&pageSize=1000&pageNum=1",
        headers: this.headers
      };
      let n = await av(l);
      if (n?.["statusCode"] == 0) {
        let o = ag.SakuraUtils.getTotal(n?.["content"]["filter"](r => parseInt(r.num) >= 1), "id");
        ap("账号[" + ag.SakuraUtils.phone_num(n?.["extra"]) + "][" + i + "] 奖品:");
        const p = {
          "001": j.REhSV,
          "002": j.GMrkY,
          "003": j.qBhrs,
          "004": j.OuPAH,
          "005": j.VGsxU
        };
        p["001"] = "一等奖";
        p["002"] = "二等奖";
        p["003"] = "三等奖";
        p["004"] = "四等奖";
        p["005"] = "五等奖";
        p["005"] = "五等奖";
        p["006"] = "五等奖";
        p["007"] = "五等奖";
        p["008"] = "五等奖";
        p["009"] = "五等奖";
        let q = p;
        o = o.sort((r, s) => parseInt(r.name) - parseInt(s.name));
        for (let r of o) {
          if (ag.rewardList[r.name]) {
            ap(ag.rewardList[r.name] + "x" + r.value);
          } else {
            ap(q[r.name] + " 免费未知奖品券x" + r.value);
          }
        }
      } else {
        console.log("❌" + n?.["errorMessage"]);
      }
    } catch (x) {
      console.log(x);
    }
  }
}
async function an() {
  try {
    if ($request && $request.method === "OPTIONS") {
      return;
    }
    const {
      openid: j
    } = ao($request.body) ?? {};
    let k = /^https:\/\/game\.dominos\.com\.cn\/(.+)\/game\/gameDone/;
    const [, l] = k.exec($request.url);
    if (!($request.body && l)) {
      throw new Error("❌获取签到Cookie失败!");
    }
    const m = {
      userId: j,
      token: $request.body,
      userName: j
    };
    const o = ak.findIndex(p => p.userId == m.userId);
    ak[o] ? ak[o] = m : ak.push(m);
    ag.setdata(l, "dlm_game");
    ag.setjson(ak, ai);
    ag.msg(ag.name, "🎉获取签到Cookie成功!", "openid: " + j + "\ngame: " + l);
  } catch (p) {
    throw p;
  }
}
!(async () => {
  if (typeof $request != "undefined") {
    await an();
    return;
  }
  if (!(await as())) {
    throw new Error("❌加载模块失败，请检查模块路径是否正常");
  }
  await at();
  await al();
})().catch(g => ag.notifyMsg.push(g.message || g)).finally(async () => {
  await ar(ag.notifyMsg.join("\n"));
  ag.done();
});
function ao(g) {
  let i = g.split("&"),
    j = {};
  for (let k of i) {
    let m = k.split("="),
      n = m[0],
      o = decodeURIComponent(m[1]);
    j["" + n] = o;
  }
  return j;
}
function ap(g) {
  if (ag.isNode()) {
    g && (console.log("" + g), ag.notifyMsg.push("" + g));
  } else {
    console.log("" + g);
    ag.notifyMsg.push("" + g);
  }
}
function aq(h, i) {
  return Math.round(Math.random() * (i - h) + h);
}
async function ar(g) {
  if (!g) {
    return;
  }
  if (ag.isNode()) {
    await ah.sendNotify(ag.name, g);
  } else {
    ag.msg(ag.name, ag.gameDate ? "活动时间:" + ag.gameDate : "", g);
  }
}
async function as() {
  ag.SakuraUtils = await au();
  return ag.SakuraUtils ? true : false;
}
async function at() {
  try {
    if (!ak?.["length"]) {
      throw new Error("no available accounts found");
    }
    ag.log("\n[INFO] 检测到 " + (ak?.["length"] ?? 0) + " 个账号\n");
    ag.userList.push(...ak.map(i => new am(i)).filter(Boolean));
  } catch (i) {
    throw i;
  }
}
async function au() {
  let h = (ag.isNode() ? process.env.SakuraUtil_code : ag.getdata("SakuraUtil_code")) || "";
  if (h && Object.keys(h).length) {
    console.log("✅" + ag.name + ":缓存中存在SakuraUtil代码,跳过下载");
    eval(h);
    return creatUtils();
  }
  console.log("🚀" + ag.name + ":开始下载SakuraUtil代码");
  return new Promise(async j => {
    ag.getScript("https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/SakuraUtil.js").then(m => {
      ag.setdata(m, "SakuraUtil_code");
      eval(m);
      const o = creatUtils();
      console.log("✅SakuraUtil加载成功,请继续");
      j(o);
    });
  });
}
function av(g, h) {
  typeof h === "undefined" ? "body" in g ? h = "post" : h = "get" : h = h;
  return new Promise(j => {
    ag[h](g, (l, m, n) => {
      try {
        if (l) {
          console.log(h + "请求失败");
          ag.logErr(l);
        } else {
          if (n) {
            typeof ag.toObj(n) == "object" ? n = ag.toObj(n) : n = n;
            j(n);
          } else {
            console.log("请求api返回数据为空，请检查自身原因");
          }
        }
      } catch (v) {
        ag.logErr(v, m);
      } finally {
        j();
      }
    });
  });
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
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
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}