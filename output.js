//Mon Jul 29 2024 14:54:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x25d52a = new _0x55bcea("好奇车生活"),
  {
    log: _0x15194f
  } = console;
let _0xee812c = (_0x25d52a.isNode() ? process.env.hqcsh_data : _0x25d52a.getdata("hqcsh_data")) || "",
  _0x42a8f7 = [],
  _0x51a54c = "",
  _0x9a703d = "channel.cheryfs.cn",
  _0x55d987 = "https://" + _0x9a703d,
  _0x83ff8b = [],
  _0x32283f = true,
  _0x4d41bb = {};
!(async () => {
  if (typeof $request !== "undefined") await _0x2f346f();else {
    if (!(await _0x58b845())) return;else {
      for (let _0x4f15d9 = 0; _0x4f15d9 < _0x42a8f7.length; _0x4f15d9++) {
        let _0x54748b = _0x4f15d9 + 1;
        _0x168ceb("\n================ 开始第 " + _0x54748b + " 个账号 ================");
        ck = _0x42a8f7[_0x4f15d9].split("&");
        await _0xe3baa1(_0x54748b);
      }
      await _0x1aad59(_0x51a54c);
    }
  }
})().catch(_0x2e2156 => _0x15194f(_0x2e2156)).finally(() => _0x25d52a.done());
async function _0xe3baa1(_0x18fd34) {
  await _0x138a57(2 * 1000);
  await _0x3f27ed(2 * 1000);
  if (_0x83ff8b?.["includes"](ck[1])) {
    _0x168ceb("\n 账号数据有问题，请更新，停止后续执行！");
    return;
  }
  let _0x28a8a1 = new Date(),
    _0x50db98 = _0x28a8a1.getDay(),
    _0x5895c3 = _0x28a8a1.getHours();
  if (_0x5895c3 === 18) {
    _0x168ceb("\n 啥都不管，先连抢五次红包");
    _0x329ad8("帐号[" + _0x18fd34 + "] 抢第 1次 红包");
    _0x329ad8("帐号[" + _0x18fd34 + "] 抢第 2次 红包");
    _0x329ad8("帐号[" + _0x18fd34 + "] 抢第 3次 红包");
    _0x329ad8("帐号[" + _0x18fd34 + "] 抢第 4次 红包");
    _0x329ad8("帐号[" + _0x18fd34 + "] 抢第 5次 红包");
  } else _0x168ceb("\n 非抢购时间");
  await _0x17338b(2 * 1000);
  const _0x59d96c = await _0x4bba0b(2 * 1000);
  if (_0x59d96c?.["length"]) {
    if (disabledPushRedPackage) _0x168ceb("\n 扫描到了" + _0x59d96c?.["length"] + "个红包待领取，检测到了您已禁用自动领取红包，请手动前往小程序领取！");else {
      for (let _0x481b60 = 0; _0x481b60 < _0x59d96c?.["length"]; _0x481b60++) {
        await _0x26441b(_0x59d96c[_0x481b60]?.["id"]);
      }
    }
  }
  if (_0x5895c3 < 15 && _0x50db98 === 1 || _0x32283f) {
    const _0x58a777 = [{
      "id": "662794321581330432",
      "name": "逛选二手车",
      "activeId": "661720946758930433",
      "clickId": "inndooImage1685608550145"
    }, {
      "id": "662794237938524160",
      "name": "逛选新车",
      "activeId": "661720946758930433",
      "clickId": "inndooImage1685608539481"
    }, {
      "id": "662794135429734400",
      "name": "逛汽车回收",
      "activeId": "621911913692942337",
      "clickId": "inndooImage1685608539481"
    }, {
      "id": "662793252641984512",
      "name": "逛本地车服",
      "activeId": "661720946758930433",
      "clickId": "inndooImage1685608427203"
    }, {
      "id": undefined,
      "name": "每日抽奖",
      "activeId": "661720946758930433",
      "clickId": "json1685608316458"
    }];
    if (_0x58a777?.["length"]) for (let _0x53392d = 0; _0x53392d < _0x58a777?.["length"]; _0x53392d++) {
      await _0x2219a9(_0x58a777[_0x53392d]?.["id"], _0x58a777[_0x53392d]?.["name"], _0x58a777[_0x53392d]?.["activeId"], _0x58a777[_0x53392d]?.["clickId"]);
      await _0x25d52a.wait(2000);
    }
    if (ck?.["length"] === 3) {
      _0x49c7c0();
      await _0x25d52a.wait(300);
      _0x4d41bb[ck[0]] && (_0x3d4d3e({
        "carStyleType": 1,
        "carBrand": "凯翼",
        "seriesId": "63600",
        "carSeries": "凯翼昆仑",
        "carStyleId": "10036205",
        "carStyleName": "2023款 凯翼昆仑 昆仑 300 高原R版",
        "carType": "1",
        "flag": "buyCarList",
        "makerId": "324",
        "guidePrice": "12.99",
        "sellPrice": "12.99",
        "coverUrl": "https://channelstatic.cheryfs.cn/ccp/ccp-apd-marketing/prod/16727389620390ab00670-6800-4ea6-b879-e47f68f77418.jpg",
        "carLicenseTime": null,
        "carMileage": null,
        "dealerId": "000000",
        "dealerFullName": "平台车商",
        "carStyleDataId": "202307240561161012"
      }), await _0x25d52a.wait(300), _0x3d4d3e({
        "carStyleType": 1,
        "carBrand": "奇瑞",
        "seriesId": "103010",
        "carSeries": "探索06",
        "carStyleId": "10041886",
        "carStyleName": "2023款 探索06 1.6T 两驱探享版",
        "carType": "1",
        "flag": "buyCarList",
        "makerId": "9",
        "guidePrice": "11.69",
        "sellPrice": "11.69",
        "coverUrl": "https://channelstatic.cheryfs.cn/ccp/ccp-apd-marketing/prod/1692674876677eed3eef0-648a-47ed-a816-d93f1ff91c0f.png",
        "carLicenseTime": null,
        "carMileage": null,
        "dealerId": "000000",
        "dealerFullName": "平台车商",
        "carStyleDataId": "202308220625513724"
      }));
    } else _0x168ceb("\n 未配置 unionId，无法执行 收藏车型 任务，请配置 openId&accountId&unionId"), await _0x25d52a.wait(300);
  } else _0x168ceb("\n 时间不在周一上午，不尝试完成每周任务");
  return await _0x4105b9(), true;
}
function _0x138a57(_0x867d8b = 2000) {
  return new Promise(_0x512faa => {
    let _0x502fe8 = {
      "url": _0x55d987 + "/archer/activity-api/cherycar/getCarUser?openId=" + ck[0],
      "headers": {
        "Host": _0x9a703d,
        "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "wxappid": "wx8c6e8a965158ad6c",
        "appid": "wx8c6e8a965158ad6c",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.4.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF",
        "tenantid": "619669306447261696"
      }
    };
    _0x25d52a.get(_0x502fe8, async (_0x3ed7d0, _0x4a79e8, _0x114faf) => {
      try {
        let _0x102560 = JSON.parse(_0x114faf);
        _0x102560.success == true ? _0x168ceb("\n 会员信息: ✅ ，用户：" + _0x102560.result.phone) : _0x168ceb("\n 会员信息: ❌ ，原因是：" + _0x102560.success);
      } catch (_0x15a677) {
        _0x168ceb("\n 会员异常: ❌ ，" + _0x4a79e8);
      } finally {
        _0x512faa();
      }
    }, _0x867d8b);
  });
}
function _0x4105b9(_0x3ce50c = 2000) {
  return new Promise(_0x217832 => {
    let _0x3aef57 = {
      "url": _0x55d987 + "/archer/activity-api/luckydraw/luckydraw/995B49D0654F41539371394B9307E62C",
      "headers": {
        "Host": _0x9a703d,
        "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
        "tenantid": "619669306447261696",
        "activityId": "620787584305483777",
        "accountId": ck[1],
        "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
        "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
      }
    };
    _0x25d52a.get(_0x3aef57, async (_0x2c14d2, _0x45a648, _0x2ee3d1) => {
      try {
        let _0x26c033 = JSON.parse(_0x2ee3d1);
        _0x26c033.success == true ? _0x168ceb("\n 暖“新”见面礼领取完毕 ✅") : _0x168ceb("\n 暖“新”见面礼领取失败: ❌ ，原因是：" + _0x26c033.success + " ");
      } catch (_0x5a9e8f) {
        _0x168ceb("\n 暖“新”见面礼领取异常: ❌ ，" + _0x45a648);
      } finally {
        _0x217832();
      }
    }, _0x3ce50c);
  });
}
function _0x8bf790(_0xda4687 = "inndooImage1685608550145", _0x575be5 = "逛汽车回收", _0x3edf53 = "661720946758930433", _0x54d628 = 2000) {
  return new Promise(_0xc8d701 => {
    let _0x44c81c = {
      "url": _0x55d987 + "/archer/activity-api/common/doClick?api=" + _0xda4687,
      "headers": {
        "Host": _0x9a703d,
        "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
        "tenantid": "619669306447261696",
        "activityId": _0x3edf53 || "661720946758930433",
        "accountId": ck[1],
        "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
        "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
      }
    };
    _0x25d52a.get(_0x44c81c, async (_0x246f57, _0x2d5cdf, _0x2e52d3) => {
      try {
        let _0x1ddb41 = JSON.parse(_0x2e52d3);
        _0x1ddb41.success == true ? _0x168ceb("\n " + (_0x575be5 || "逛选二手车") + "任务准备: ✅") : _0x168ceb("\n " + (_0x575be5 || "逛选二手车") + "任务准备失败: ❌ ，原因是：" + _0x1ddb41.success + " ");
      } catch (_0x5bc1ec) {
        _0x168ceb("\n " + (_0x575be5 || "逛选二手车") + "任务准备异常: ❌ ，" + _0x2d5cdf);
      } finally {
        _0xc8d701();
      }
    }, _0x54d628);
  });
}
async function _0x2219a9(_0x341c68 = "662794321581330432", _0x295328 = "逛选二手车", _0x4c1708 = "661720946758930433", _0x3ed30d, _0x3ff944 = 2000) {
  if (_0x295328 === "每日抽奖") return _0x40b352();else {
    if (_0x3ed30d) {
      await _0x8bf790(_0x3ed30d, _0x295328, _0x4c1708);
    }
  }
  return new Promise(_0x2ade61 => {
    let _0x1889ce = {
      "url": _0x55d987 + "/archer/activity-api/taskItem/achieve?taskItemId=" + _0x341c68,
      "headers": {
        "Host": _0x9a703d,
        "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
        "tenantid": "619669306447261696",
        "activityId": _0x4c1708 || "621911913692942337",
        "accountId": ck[1],
        "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
        "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
      }
    };
    _0x25d52a.get(_0x1889ce, async (_0x2c934a, _0x4497cc, _0x1d4e20) => {
      try {
        let _0x1aacca = JSON.parse(_0x1d4e20);
        _0x1aacca.success == true ? _0x168ceb("\n " + (_0x295328 || "逛选二手车") + "任务完成: ✅ ，等待执行下一条") : _0x168ceb("\n " + (_0x295328 || "逛选二手车") + "任务失败: ❌ ，原因是：" + _0x1aacca.success + " ，等待执行下一条");
      } catch (_0x3097ab) {
        _0x168ceb("\n " + (_0x295328 || "逛选二手车") + "任务异常: ❌ ，" + _0x4497cc + " ，等待执行下一条");
      } finally {
        _0x2ade61();
      }
    }, _0x3ff944);
  });
}
async function _0x40b352(_0x30b477 = 2000) {
  return new Promise(_0x26c406 => {
    let _0x5c7a55 = {
      "url": _0x55d987 + "/archer/activity-api/poster/creatPoster",
      "headers": {
        "Host": _0x9a703d,
        "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
        "tenantid": "619669306447261696",
        "activityId": "620841312102408193",
        "accountId": ck[1],
        "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
        "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
      }
    };
    _0x25d52a.get(_0x5c7a55, async (_0x3b9aaf, _0x259f01, _0x4e8dc0) => {
      try {
        let _0x2cf434 = JSON.parse(_0x4e8dc0);
        if (_0x2cf434.success == true) {
          _0x168ceb("\n \u79EF\u5206\u62BD\u5956\u4EFB\u52A1\u521B\u5EFA\u5B8C\u6210: \u2705 ");
        } else _0x168ceb("\n \u79EF\u5206\u62BD\u5956\u4EFB\u52A1\u521B\u5EFA\u5931\u8D25: \u274C \uFF0C\u539F\u56E0\u662F\uFF1A" + _0x2cf434.success + " ");
      } catch (_0x4f0582) {
        _0x168ceb("\n \u79EF\u5206\u62BD\u5956\u4EFB\u52A1\u521B\u5EFA\u5F02\u5E38: \u274C \uFF0C" + _0x259f01 + " ");
      } finally {
        _0x26c406();
      }
    }, _0x30b477);
  }).then(_0x50aa5f => {
    return new Promise(_0x2a71ea => {
      let _0x282f91 = {
        "url": _0x55d987 + "/archer/activity-api/luckydraw/luckydraw/1153D81CB3224C50AE9DCFE01514B3CE",
        "headers": {
          "Host": _0x9a703d,
          "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
          "tenantid": "619669306447261696",
          "activityId": "620821692188483585",
          "accountId": ck[1],
          "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
          "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
        }
      };
      _0x25d52a.get(_0x282f91, async (_0xb336e, _0x553b02, _0x2bbb1) => {
        try {
          let _0x26d339 = JSON.parse(_0x2bbb1);
          if (_0x26d339.success == true) {
            _0x168ceb("\n \u79EF\u5206\u62BD\u5956\u4EFB\u52A1\u62BD\u5956\u5B8C\u6210: \u2705");
          } else _0x168ceb("\n \u79EF\u5206\u62BD\u5956\u4EFB\u52A1\u62BD\u5956\u5931\u8D25: \u274C \uFF0C\u539F\u56E0\u662F\uFF1A" + _0x26d339.success);
        } catch (_0x5222eb) {
          _0x168ceb("\n \u79EF\u5206\u62BD\u5956\u4EFB\u52A1\u62BD\u5956\u5F02\u5E38: \u274C \uFF0C" + _0x553b02 + " ");
        } finally {
          _0x2a71ea();
        }
      }, _0x30b477);
    });
  }).then(_0x5e122b => {
    return new Promise(_0x3e6ebd => {
      let _0x5cfe88 = {
        "url": _0x55d987 + "/archer/activity-api/taskItem/achieve?taskItemId=623000153099358209",
        "headers": {
          "Host": _0x9a703d,
          "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
          "tenantid": "619669306447261696",
          "activityId": "",
          "accountId": ck[1],
          "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
          "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
        }
      };
      _0x25d52a.get(_0x5cfe88, async (_0x5422dc, _0x574d83, _0x22422c) => {
        try {
          let _0x286c07 = JSON.parse(_0x22422c);
          _0x286c07.success == true ? _0x168ceb("\n \u79EF\u5206\u62BD\u5956\u4EFB\u52A1\u5B8C\u6210: \u2705 \uFF0C\u7B49\u5F85\u6267\u884C\u4E0B\u4E00\u6761") : _0x168ceb("\n \u79EF\u5206\u62BD\u5956\u4EFB\u52A1\u5931\u8D25: \u274C \uFF0C\u539F\u56E0\u662F\uFF1A" + _0x286c07.success + " ，等待执行下一条");
        } catch (_0x2afeaa) {
          _0x168ceb("\n \u79EF\u5206\u62BD\u5956\u4EFB\u52A1\u5F02\u5E38: \u274C \uFF0C" + _0x574d83 + " ，等待执行下一条");
        } finally {
          _0x3e6ebd();
        }
      }, _0x30b477);
    });
  });
}
function _0x3f27ed(_0x1c7129 = 2000) {
  return new Promise(_0x45f339 => {
    let _0x4700d5 = {
      "url": _0x55d987 + "/archer/activity-api/common/accountPointInfo",
      "headers": {
        "Host": _0x9a703d,
        "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
        "tenantid": "619669306447261696",
        "activityId": "621911913692942337",
        "accountId": ck[1],
        "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
        "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
      },
      "body": "{\"pointId\":\"620415610219683840\",\"accountId\":\"\",\"type\":1,\"pageNumber\":1,\"pageSize\":10,\"startDate\":\"\",\"endDate\":\"\"}"
    };
    _0x25d52a.post(_0x4700d5, async (_0x48233c, _0x2f954f, _0x3aaf31) => {
      try {
        let _0x1aeedd = JSON.parse(_0x3aaf31);
        if (_0x1aeedd.success == true) {
          _0x168ceb("\n 查询积分: ✅ ，" + _0x1aeedd.result.balance + " 积分");
          let _0x3dcfb0 = new Date(),
            _0x21041b = _0x3dcfb0.getHours();
          if (_0x21041b < 15 || _0x32283f) {
            if (_0x1aeedd?.["result"]?.["accountPointLogs"]?.["length"]) {
              _0x168ceb("\n 最近的 " + _0x1aeedd?.["result"]?.["accountPointLogs"]?.["length"] + " 条积分明细记录展示：");
              for (let _0x2cade2 = 0; _0x2cade2 < _0x1aeedd?.["result"]?.["accountPointLogs"]?.["length"]; _0x2cade2++) {
                await _0x25d52a.wait(100);
                _0x168ceb("\n 第 " + _0x2cade2 + " 条，" + _0x1aeedd?.["result"]["accountPointLogs"][_0x2cade2]["reason"] + " 行为 ：" + (_0x1aeedd?.["result"]["accountPointLogs"][_0x2cade2]["logType"] === 3 ? "-" : "+") + " " + _0x1aeedd?.["result"]["accountPointLogs"][_0x2cade2]["amount"] + " 积分");
              }
            }
          } else {
            _0x168ceb("\n 时间处于下午，不进行打印明细，方便快速兑换红包");
          }
        } else {
          _0x168ceb("\n 查询积分: ❌ ，估计是配置数据有问题，请检查！");
          _0x83ff8b.push(ck[1]);
        }
      } catch (_0x2cb405) {
        _0x168ceb("\n 积分异常: ❌ ，" + JSON.stringify(_0x48233c));
      } finally {
        _0x45f339();
      }
    }, _0x1c7129);
  });
}
function _0x4bba0b(_0x307c37 = 2000) {
  return new Promise(_0x460939 => {
    let _0xe8f93f = {
      "url": _0x55d987 + "/archer/activity-api/cardpacket/cardlist",
      "headers": {
        "Host": _0x9a703d,
        "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
        "tenantid": "619669306447261696",
        "activityId": "621911913692942337",
        "accountId": ck[1],
        "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
        "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
      }
    };
    _0x25d52a.get(_0xe8f93f, async (_0x117493, _0x1ebc6c, _0x3bc8d0) => {
      try {
        let _0x415b62 = JSON.parse(_0x3bc8d0);
        if (_0x415b62.success == true) {
          const _0x1a6e1a = _0x415b62?.["result"]?.["activeCardList"];
          if (_0x1a6e1a?.["length"]) {
            _0x168ceb("\n 查询到有未领取的红包: ✅ ，" + _0x1a6e1a.length + " 个，红包金额是 " + _0x1a6e1a?.["map"](_0x36e9b6 => _0x36e9b6?.["name"])?.["join"]("，"));
            _0x460939(_0x1a6e1a);
          } else _0x168ceb("\n 查询到没有未领取的红包 ❌");
        } else _0x168ceb("\n 查询红包: ❌ ，原因是：" + _0x415b62.success);
      } catch (_0x19c138) {
        _0x168ceb("\n 查询红包异常: ❌ ，" + _0x1ebc6c);
      } finally {
        _0x460939();
      }
    }, _0x307c37);
  });
}
function _0x26441b(_0x57f0e3, _0x1e596a = 2000) {
  return new Promise(_0x365ee2 => {
    let _0x498935 = {
      "url": _0x55d987 + "/archer/activity-api/cardpacket/useCard?cardItemId=" + _0x57f0e3 + "&payRemind=&channel=1",
      "headers": {
        "Host": _0x9a703d,
        "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
        "tenantid": "619669306447261696",
        "activityId": "621911913692942337",
        "accountId": ck[1],
        "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
        "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
      }
    };
    _0x25d52a.get(_0x498935, async (_0x3c20ed, _0x2eaf8a, _0xead491) => {
      try {
        let _0x1ea919 = JSON.parse(_0xead491);
        _0x1ea919.success == true ? _0x168ceb("\n 领取红包成功【幻生提示：请打开微信前去领取红包，别过期了！！！】: ✅ ") : _0x168ceb("\n 领取红包失败: ❌ ，原因是：" + _0x1ea919.success);
      } catch (_0x47f609) {
        _0x168ceb("\n 领取红包异常: ❌ ，" + _0x2eaf8a);
      } finally {
        _0x365ee2();
      }
    }, _0x1e596a);
  });
}
function _0x17338b(_0x4330f9 = 2000) {
  return new Promise(_0x4e6fbc => {
    let _0x3b9212 = {
      "url": _0x55d987 + "/archer/activity-api/signinact/signin",
      "headers": {
        "Host": _0x9a703d,
        "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
        "accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
        "tenantid": "619669306447261696",
        "activityId": "620810406813786113",
        "accountId": ck[1],
        "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777",
        "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/luckydraw-detail/620787584305483777"
      }
    };
    _0x25d52a.get(_0x3b9212, async (_0x466073, _0x5ec2b6, _0xcec00b) => {
      try {
        let _0x85b8cb = JSON.parse(_0xcec00b);
        if (_0x85b8cb.code == 200) {
          if (_0x85b8cb.result.message == "今日已签到") {
            _0x168ceb("\n 签到失败: ❌ ，原因是：" + _0x85b8cb.result.message);
          } else _0x168ceb("\n 签到成功: ✅ ");
        } else _0x168ceb("\n 签到失败: ❌ ，原因是：" + _0x85b8cb.result.message);
      } catch (_0x27a83a) {
        _0x168ceb("\n 签到异常: ❌ ，" + _0x5ec2b6);
      } finally {
        _0x4e6fbc();
      }
    }, _0x4330f9);
  });
}
function _0x329ad8(_0x163ae2, _0x348475 = 2000) {
  let _0xe87909 = {
    "url": _0x55d987 + "/archer/activity-api/pointsmall/exchangeCard?pointsMallCardId=" + selectedRedPackage + "&exchangeCount=1&mallOrderInputVoStr=%7B%22person%22:%22%22,%22phone%22:%22%22,%22province%22:%22%22,%22city%22:%22%22,%22area%22:%22%22,%22address%22:%22%22,%22remark%22:%22%22%7D&channel=1&exchangeType=0&exchangeNeedPoints=188&exchangeNeedMoney=0&cardGoodsItemIds=",
    "headers": {
      "Host": _0x9a703d,
      "Cookie": "uid-619669306447261696-619669369294712832=" + ck[1] + "; customPopup_es6WRqk1once=1",
      "accept": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763",
      "tenantid": "619669306447261696",
      "activityId": "621950054462152705",
      "wxappid": "619669369294712832",
      "accountId": ck[1],
      "requestUrl": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/pointsmall-detail/621950054462152705/GInx2xk8HnYUpEyU?pageId=page1607309582231&num=1&cardId=647894196522340352&anchorId=&anchorAnimateType=",
      "Referer": "https://channel.cheryfs.cn/archer/act/619669306447261696/619669369294712832/activity/pointsmall-detail/621950054462152705/GInx2xk8HnYUpEyU?pageId=page1607309582231&num=1&cardId=647894196522340352&anchorId=&anchorAnimateType="
    }
  };
  _0x25d52a.get(_0xe87909, async (_0x2a0f05, _0x3e3f9a, _0x37d5c0) => {
    try {
      let _0x4499f9 = JSON.parse(_0x37d5c0);
      _0x4499f9.code == 200 ? _0x168ceb("\n " + _0x163ae2 + "结果: ✅ ，" + (_0x4499f9?.["result"]?.["errMsg"] || _0x4499f9?.["message"])) : _0x168ceb("\n " + _0x163ae2 + ": ❌ ，原因是：" + _0x4499f9.message);
    } catch (_0x162f68) {
      _0x168ceb("\n " + _0x163ae2 + "异常: ❌ ，" + _0x3e3f9a);
    } finally {}
  }, _0x348475);
}
function _0x49c7c0(_0x595b99 = "授权token", _0x57a6fa = 2000) {
  let _0x4e3d8c = {
    "url": _0x55d987 + "/archer/activity-api/cherycar/gettoken",
    "headers": {
      "Accept": "*/*",
      "Accept-Language": "zh-CN,zh",
      "Connection": "keep-alive",
      "Host": _0x9a703d,
      "Referer": "https://servicewechat.com/wx8c6e8a965158ad6c/21/page-frame.html",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/8379",
      "appid": "wx8c6e8a965158ad6c",
      "tenantid": "619669306447261696",
      "wxappid": "wx8c6e8a965158ad6c",
      "xweb_xhr": "1",
      "Content-Type": "application/json"
    },
    "body": JSON.stringify({
      "openId": ck[0],
      "miniAppid": "wx8c6e8a965158ad6c",
      "unionid": ck[2]
    })
  };
  _0x25d52a.post(_0x4e3d8c, async (_0x7a5961, _0x538e06, _0x2f4ed8) => {
    try {
      let _0x4abd74 = JSON.parse(_0x2f4ed8);
      _0x4abd74.code == 200 ? (_0x168ceb("\n " + _0x595b99 + "授权成功: ✅ ，" + (_0x4abd74?.["result"]?.["errMsg"] || _0x4abd74?.["message"])), _0x4d41bb[ck[0]] = _0x4abd74?.["result"]["token"]) : _0x168ceb("\n " + _0x595b99 + "授权失败: ❌ ，原因是：" + _0x4abd74.message);
    } catch (_0x372a9c) {
      _0x168ceb("\n " + _0x595b99 + "授权异常: ❌ ，" + _0x538e06);
    }
  }, _0x57a6fa);
}
function _0x3d4d3e(_0x3b796b, _0x34311c = "收藏汽车", _0x359c47 = 2000) {
  let _0x4bb5e5 = {
    "url": "https://channel.cheryfs.cn:20000/api/ccp-apd-marketing/carLife/collectionCar/addCarLifeCollect",
    "headers": {
      "Accept": "*/*",
      "Accept-Language": "zh-CN,zh",
      "Connection": "keep-alive",
      "Host": "channel.cheryfs.cn:20000",
      "Referer": "https://servicewechat.com/wx8c6e8a965158ad6c/21/page-frame.html",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/8379",
      "appid": "wx8c6e8a965158ad6c",
      "tenantId": "100000000001",
      "wxappid": "wx8c6e8a965158ad6c",
      "xweb_xhr": "1",
      "Content-Type": "application/json",
      "channelId": "100000000001",
      "token": _0x4d41bb[ck[0]]
    },
    "body": JSON.stringify(_0x3b796b)
  };
  _0x25d52a.post(_0x4bb5e5, async (_0x4dabc6, _0x1d5655, _0xeb6737) => {
    try {
      let _0x1a05b1 = JSON.parse(_0xeb6737);
      _0x1a05b1.message == "OK" ? (_0x168ceb("\n " + _0x34311c + "成功: ✅ ，" + (_0x1a05b1?.["result"]?.["errMsg"] || _0x1a05b1?.["message"])), _0x4ebe2f(_0x1a05b1?.["data"]["id"])) : _0x168ceb("\n " + _0x34311c + "失败: ❌ ，原因是：" + _0x1a05b1.message);
    } catch (_0x1585df) {
      _0x168ceb("\n " + _0x34311c + "异常: ❌ ，" + _0x1d5655);
    } finally {}
  }, _0x359c47);
}
function _0x4ebe2f(_0x46aa2a, _0x178099 = "取消收藏汽车", _0x390aa1 = 2000) {
  let _0x5b0dd2 = {
    "url": "https://channel.cheryfs.cn:20000/api/ccp-apd-marketing/carLife/collectionCar/cancelCarLifeCollect",
    "headers": {
      "Accept": "*/*",
      "Accept-Language": "zh-CN,zh",
      "Connection": "keep-alive",
      "Host": "channel.cheryfs.cn:20000",
      "Referer": "https://servicewechat.com/wx8c6e8a965158ad6c/21/page-frame.html",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/8379",
      "appid": "wx8c6e8a965158ad6c",
      "tenantId": "100000000001",
      "wxappid": "wx8c6e8a965158ad6c",
      "xweb_xhr": "1",
      "Content-Type": "application/json",
      "channelId": "100000000001",
      "token": _0x4d41bb[ck[0]]
    },
    "body": JSON.stringify({
      "id": _0x46aa2a
    })
  };
  _0x25d52a.post(_0x5b0dd2, async (_0x19129b, _0x14d04c, _0xa221c4) => {
    try {
      let _0x29fa29 = JSON.parse(_0xa221c4);
      if (_0x29fa29.message == "OK") _0x168ceb("\n " + _0x178099 + "成功: ✅ ，" + (_0x29fa29?.["result"]?.["errMsg"] || _0x29fa29?.["message"]));else {
        _0x168ceb("\n " + _0x178099 + "失败: ❌ ，原因是：" + _0x29fa29.message);
      }
    } catch (_0x821135) {
      _0x168ceb("\n " + _0x178099 + "异常: ❌ ，" + _0x14d04c);
    } finally {}
  }, _0x390aa1);
}
async function _0x2f346f() {
  if ($request.url.indexOf("member/api/info/?userKeys=v1.0&pageName=member-info-index-search&formName=searchForm&kwwMember.memberId") > -1) {
    let _0x58a87d = "",
      _0x361110 = new Object();
    if ($request.url.indexOf("?") != -1) {
      let _0xad2c22 = $request.url.split("?"),
        _0x283572 = _0xad2c22[1].split("&");
      for (var _0x56853c = 0; _0x56853c < _0x283572.length; _0x56853c++) {
        _0x361110[_0x283572[_0x56853c].split("=")[0]] = unescape(_0x283572[_0x56853c].split("=")[1]);
      }
      _0x58a87d = _0x361110.memberId;
    }
    if (kwwUid) {
      if (memberId.indexOf(_0x58a87d) == -1) {
        memberId = memberId + "@" + _0x58a87d;
        _0x25d52a.setdata(memberId, "kwwUid");
        List = memberId.split("@");
        _0x25d52a.msg("【" + _0x25d52a.name + "】" + (" 获取第" + memberId.length + "个 ck 成功: " + _0x58a87d + " ,不用请自行关闭重写!"));
      }
    } else {
      _0x25d52a.setdata(_0x58a87d, "memberId");
      _0x25d52a.msg("【" + _0x25d52a.name + "】" + (" 获取第1个 ck 成功: " + _0x58a87d + " ,不用请自行关闭重写!"));
    }
  }
}
async function _0x58b845() {
  if (_0xee812c) {
    if (_0xee812c.indexOf("@") != -1) _0xee812c.split("@").forEach(_0x4e9ec1 => {
      _0x42a8f7.push(_0x4e9ec1);
    });else _0xee812c.indexOf("\n") != -1 ? _0xee812c.split("\n").forEach(_0x99a37f => {
      _0x42a8f7.push(_0x99a37f);
    }) : _0x42a8f7.push(_0xee812c);
  } else {
    console.log("\n 运行失败，系统提示：系统变量未填写 hqcsh_data");
    return;
  }
  return true;
}
async function _0x1aad59(_0x270b21) {
  if (!_0x270b21) return;
  if (Notify > 0) {
    if (_0x25d52a.isNode()) {
      var _0x54cf13 = require("./sendNotify");
      await _0x54cf13.sendNotify(_0x25d52a.name, _0x270b21);
    } else _0x25d52a.msg(_0x270b21);
  } else {
    _0x15194f(_0x270b21);
  }
}
function _0x40d631(_0x11534c, _0x420d80 = true) {
  _0x420d80 && _0x15194f(_0x11534c + "\n");
  _0x51a54c += _0x11534c + "\n";
}
function _0x168ceb(_0x16554a) {
  _0x25d52a.isNode() ? _0x16554a && (console.log("" + _0x16554a), _0x51a54c += "" + _0x16554a) : (console.log("" + _0x16554a), _0x51a54c += "" + _0x16554a);
}
function _0x47f1a2(_0x5d8493, _0x410243) {
  if (arguments.length === 0) return Math.random();
  if (!_0x410243) _0x410243 = 10 ** (Math.log(_0x5d8493) * Math.LOG10E + 1 | 0) - 1;
  return Math.floor(Math.random() * (_0x410243 - _0x5d8493 + 1) + _0x5d8493);
}
function _0x53c017(_0x29f7eb) {
  return _0x29f7eb = _0x29f7eb.replace(/\/\*.*?\*\//g, " "), _0x29f7eb = _0x29f7eb.replace(/\b0(\d+)/g, "0o$1"), _0x29f7eb;
}
function _0x4db7a1() {
  _0x25d52a.UUID = _0x5b090d(40);
  const _0x34c23a = {
    "167814": "10.1.4",
    "167841": "10.1.6",
    "167853": "10.2.0"
  };
  _0x25d52a.osVersion = _0x47f1a2(13, 14) + "." + _0x47f1a2(3, 6) + "." + _0x47f1a2(1, 3);
  let _0xd3d95e = "network/" + ["4g", "5g", "wifi"][_0x47f1a2(0, 2)];
  return _0x25d52a.mobile = "iPhone" + _0x47f1a2(9, 13) + "," + _0x47f1a2(1, 3), _0x25d52a.build = ["167814", "167841", "167853"][_0x47f1a2(0, 2)], _0x25d52a.appVersion = _0x34c23a[_0x25d52a.build], "jdapp;iPhone;" + _0x25d52a.appVersion + ";" + _0x25d52a.osVersion + ";" + _0x25d52a.UUID + ";M/5.0;" + _0xd3d95e + ";ADID/;model/" + _0x25d52a.mobile + ";addressid/;appBuild/" + _0x25d52a.build + ";jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x25d52a.osVersion.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function _0x5b090d(_0x56db8e) {
  _0x56db8e = _0x56db8e || 32;
  var _0x586b87 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x4f9d66 = _0x586b87.length,
    _0x424b6c = "";
  for (i = 0; i < _0x56db8e; i++) _0x424b6c += _0x586b87.charAt(Math.floor(Math.random() * _0x4f9d66));
  return _0x424b6c;
}
function _0x23b8d1() {
  fs.readFile("/ql/data/config/config.sh", "utf8", function (_0x500c30, _0x5e6485) {
    if (_0x500c30) return _0x15194f("读取文件失败！" + _0x500c30);else {
      var _0x49501a = _0x5e6485.replace(/regular/g, string);
      fs.writeFile("/ql/data/config/config.sh", _0x49501a, "utf8", function (_0x25a07) {
        if (_0x25a07) return _0x15194f(_0x25a07);
      });
    }
  });
}
function _0x52070b(_0xc54674) {
  function _0x5ccd89(_0x4afae2, _0xa320e5) {
    return _0x4afae2 << _0xa320e5 | _0x4afae2 >>> 32 - _0xa320e5;
  }
  function _0x1070c6(_0x23a815, _0x43e126) {
    var _0x34b21b, _0x5d91bd, _0x2ce715, _0xb7881a, _0x33813a;
    return _0x2ce715 = 2147483648 & _0x23a815, _0xb7881a = 2147483648 & _0x43e126, _0x34b21b = 1073741824 & _0x23a815, _0x5d91bd = 1073741824 & _0x43e126, _0x33813a = (1073741823 & _0x23a815) + (1073741823 & _0x43e126), _0x34b21b & _0x5d91bd ? 2147483648 ^ _0x33813a ^ _0x2ce715 ^ _0xb7881a : _0x34b21b | _0x5d91bd ? 1073741824 & _0x33813a ? 3221225472 ^ _0x33813a ^ _0x2ce715 ^ _0xb7881a : 1073741824 ^ _0x33813a ^ _0x2ce715 ^ _0xb7881a : _0x33813a ^ _0x2ce715 ^ _0xb7881a;
  }
  function _0x37c7d2(_0x1d6c9b, _0x311d0a, _0x1db81b) {
    return _0x1d6c9b & _0x311d0a | ~_0x1d6c9b & _0x1db81b;
  }
  function _0x571100(_0x3396, _0x39d3a2, _0x194e30) {
    return _0x3396 & _0x194e30 | _0x39d3a2 & ~_0x194e30;
  }
  function _0x504643(_0x2c358f, _0x1141f6, _0x50cc7c) {
    return _0x2c358f ^ _0x1141f6 ^ _0x50cc7c;
  }
  function _0xdd54cc(_0x1ac33b, _0x7d2cb4, _0x5e6357) {
    return _0x7d2cb4 ^ (_0x1ac33b | ~_0x5e6357);
  }
  function _0x3f608c(_0x3782ba, _0x2c4b40, _0x418522, _0x4809d6, _0x4e0817, _0x23b314, _0x286f48) {
    return _0x3782ba = _0x1070c6(_0x3782ba, _0x1070c6(_0x1070c6(_0x37c7d2(_0x2c4b40, _0x418522, _0x4809d6), _0x4e0817), _0x286f48)), _0x1070c6(_0x5ccd89(_0x3782ba, _0x23b314), _0x2c4b40);
  }
  function _0x5d0bd9(_0x436912, _0x157884, _0x242785, _0x165183, _0x613a5e, _0x2d7c90, _0x3088be) {
    return _0x436912 = _0x1070c6(_0x436912, _0x1070c6(_0x1070c6(_0x571100(_0x157884, _0x242785, _0x165183), _0x613a5e), _0x3088be)), _0x1070c6(_0x5ccd89(_0x436912, _0x2d7c90), _0x157884);
  }
  function _0x5b96a3(_0x31277c, _0x1500b1, _0x5a5221, _0x54d231, _0x10740f, _0x314768, _0xc72b6b) {
    return _0x31277c = _0x1070c6(_0x31277c, _0x1070c6(_0x1070c6(_0x504643(_0x1500b1, _0x5a5221, _0x54d231), _0x10740f), _0xc72b6b)), _0x1070c6(_0x5ccd89(_0x31277c, _0x314768), _0x1500b1);
  }
  function _0x1f7caa(_0x3a87eb, _0x87de2b, _0x55ba38, _0x133730, _0x338255, _0x3581c4, _0x4cc04a) {
    return _0x3a87eb = _0x1070c6(_0x3a87eb, _0x1070c6(_0x1070c6(_0xdd54cc(_0x87de2b, _0x55ba38, _0x133730), _0x338255), _0x4cc04a)), _0x1070c6(_0x5ccd89(_0x3a87eb, _0x3581c4), _0x87de2b);
  }
  function _0x55c6dd(_0x48308c) {
    for (var _0x2f8eab, _0x1723fd = _0x48308c.length, _0x3e3cac = _0x1723fd + 8, _0x3e512d = (_0x3e3cac - _0x3e3cac % 64) / 64, _0x5b4d3f = 16 * (_0x3e512d + 1), _0x2ca4aa = new Array(_0x5b4d3f - 1), _0x3a6ec3 = 0, _0x43ab2d = 0; _0x1723fd > _0x43ab2d;) _0x2f8eab = (_0x43ab2d - _0x43ab2d % 4) / 4, _0x3a6ec3 = _0x43ab2d % 4 * 8, _0x2ca4aa[_0x2f8eab] = _0x2ca4aa[_0x2f8eab] | _0x48308c.charCodeAt(_0x43ab2d) << _0x3a6ec3, _0x43ab2d++;
    return _0x2f8eab = (_0x43ab2d - _0x43ab2d % 4) / 4, _0x3a6ec3 = _0x43ab2d % 4 * 8, _0x2ca4aa[_0x2f8eab] = _0x2ca4aa[_0x2f8eab] | 128 << _0x3a6ec3, _0x2ca4aa[_0x5b4d3f - 2] = _0x1723fd << 3, _0x2ca4aa[_0x5b4d3f - 1] = _0x1723fd >>> 29, _0x2ca4aa;
  }
  function _0x3f69a4(_0x5bda3c) {
    var _0x2c6ab8,
      _0x52d6aa,
      _0x218417 = "",
      _0xfdb16e = "";
    for (_0x52d6aa = 0; 3 >= _0x52d6aa; _0x52d6aa++) _0x2c6ab8 = _0x5bda3c >>> 8 * _0x52d6aa & 255, _0xfdb16e = "0" + _0x2c6ab8.toString(16), _0x218417 += _0xfdb16e.substr(_0xfdb16e.length - 2, 2);
    return _0x218417;
  }
  function _0x19250b(_0x2e0f18) {
    _0x2e0f18 = _0x2e0f18.replace(/\r\n/g, "\n");
    for (var _0x1981b2 = "", _0x4235c5 = 0; _0x4235c5 < _0x2e0f18.length; _0x4235c5++) {
      var _0x31804c = _0x2e0f18.charCodeAt(_0x4235c5);
      128 > _0x31804c ? _0x1981b2 += String.fromCharCode(_0x31804c) : _0x31804c > 127 && 2048 > _0x31804c ? (_0x1981b2 += String.fromCharCode(_0x31804c >> 6 | 192), _0x1981b2 += String.fromCharCode(63 & _0x31804c | 128)) : (_0x1981b2 += String.fromCharCode(_0x31804c >> 12 | 224), _0x1981b2 += String.fromCharCode(_0x31804c >> 6 & 63 | 128), _0x1981b2 += String.fromCharCode(63 & _0x31804c | 128));
    }
    return _0x1981b2;
  }
  var _0xeea53b,
    _0x48f276,
    _0x341c18,
    _0x3342c7,
    _0x16c955,
    _0x6c0e41,
    _0x425346,
    _0x39f97a,
    _0x36c896,
    _0x595f19 = [],
    _0x5c959f = 7,
    _0x49fbcf = 12,
    _0x5eed2 = 17,
    _0x4d5bbc = 22,
    _0x4463b5 = 5,
    _0x2083f2 = 9,
    _0x3c66f8 = 14,
    _0x41963d = 20,
    _0x524c11 = 4,
    _0x56d68b = 11,
    _0x302db2 = 16,
    _0x140014 = 23,
    _0x2a67e0 = 6,
    _0x2a64cb = 10,
    _0x24ebb7 = 15,
    _0x2ae266 = 21;
  for (_0xc54674 = _0x19250b(_0xc54674), _0x595f19 = _0x55c6dd(_0xc54674), _0x6c0e41 = 1732584193, _0x425346 = 4023233417, _0x39f97a = 2562383102, _0x36c896 = 271733878, _0xeea53b = 0; _0xeea53b < _0x595f19.length; _0xeea53b += 16) _0x48f276 = _0x6c0e41, _0x341c18 = _0x425346, _0x3342c7 = _0x39f97a, _0x16c955 = _0x36c896, _0x6c0e41 = _0x3f608c(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 0], _0x5c959f, 3614090360), _0x36c896 = _0x3f608c(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 1], _0x49fbcf, 3905402710), _0x39f97a = _0x3f608c(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 2], _0x5eed2, 606105819), _0x425346 = _0x3f608c(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 3], _0x4d5bbc, 3250441966), _0x6c0e41 = _0x3f608c(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 4], _0x5c959f, 4118548399), _0x36c896 = _0x3f608c(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 5], _0x49fbcf, 1200080426), _0x39f97a = _0x3f608c(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 6], _0x5eed2, 2821735955), _0x425346 = _0x3f608c(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 7], _0x4d5bbc, 4249261313), _0x6c0e41 = _0x3f608c(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 8], _0x5c959f, 1770035416), _0x36c896 = _0x3f608c(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 9], _0x49fbcf, 2336552879), _0x39f97a = _0x3f608c(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 10], _0x5eed2, 4294925233), _0x425346 = _0x3f608c(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 11], _0x4d5bbc, 2304563134), _0x6c0e41 = _0x3f608c(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 12], _0x5c959f, 1804603682), _0x36c896 = _0x3f608c(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 13], _0x49fbcf, 4254626195), _0x39f97a = _0x3f608c(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 14], _0x5eed2, 2792965006), _0x425346 = _0x3f608c(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 15], _0x4d5bbc, 1236535329), _0x6c0e41 = _0x5d0bd9(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 1], _0x4463b5, 4129170786), _0x36c896 = _0x5d0bd9(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 6], _0x2083f2, 3225465664), _0x39f97a = _0x5d0bd9(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 11], _0x3c66f8, 643717713), _0x425346 = _0x5d0bd9(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 0], _0x41963d, 3921069994), _0x6c0e41 = _0x5d0bd9(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 5], _0x4463b5, 3593408605), _0x36c896 = _0x5d0bd9(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 10], _0x2083f2, 38016083), _0x39f97a = _0x5d0bd9(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 15], _0x3c66f8, 3634488961), _0x425346 = _0x5d0bd9(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 4], _0x41963d, 3889429448), _0x6c0e41 = _0x5d0bd9(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 9], _0x4463b5, 568446438), _0x36c896 = _0x5d0bd9(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 14], _0x2083f2, 3275163606), _0x39f97a = _0x5d0bd9(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 3], _0x3c66f8, 4107603335), _0x425346 = _0x5d0bd9(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 8], _0x41963d, 1163531501), _0x6c0e41 = _0x5d0bd9(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 13], _0x4463b5, 2850285829), _0x36c896 = _0x5d0bd9(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 2], _0x2083f2, 4243563512), _0x39f97a = _0x5d0bd9(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 7], _0x3c66f8, 1735328473), _0x425346 = _0x5d0bd9(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 12], _0x41963d, 2368359562), _0x6c0e41 = _0x5b96a3(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 5], _0x524c11, 4294588738), _0x36c896 = _0x5b96a3(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 8], _0x56d68b, 2272392833), _0x39f97a = _0x5b96a3(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 11], _0x302db2, 1839030562), _0x425346 = _0x5b96a3(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 14], _0x140014, 4259657740), _0x6c0e41 = _0x5b96a3(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 1], _0x524c11, 2763975236), _0x36c896 = _0x5b96a3(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 4], _0x56d68b, 1272893353), _0x39f97a = _0x5b96a3(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 7], _0x302db2, 4139469664), _0x425346 = _0x5b96a3(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 10], _0x140014, 3200236656), _0x6c0e41 = _0x5b96a3(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 13], _0x524c11, 681279174), _0x36c896 = _0x5b96a3(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 0], _0x56d68b, 3936430074), _0x39f97a = _0x5b96a3(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 3], _0x302db2, 3572445317), _0x425346 = _0x5b96a3(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 6], _0x140014, 76029189), _0x6c0e41 = _0x5b96a3(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 9], _0x524c11, 3654602809), _0x36c896 = _0x5b96a3(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 12], _0x56d68b, 3873151461), _0x39f97a = _0x5b96a3(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 15], _0x302db2, 530742520), _0x425346 = _0x5b96a3(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 2], _0x140014, 3299628645), _0x6c0e41 = _0x1f7caa(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 0], _0x2a67e0, 4096336452), _0x36c896 = _0x1f7caa(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 7], _0x2a64cb, 1126891415), _0x39f97a = _0x1f7caa(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 14], _0x24ebb7, 2878612391), _0x425346 = _0x1f7caa(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 5], _0x2ae266, 4237533241), _0x6c0e41 = _0x1f7caa(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 12], _0x2a67e0, 1700485571), _0x36c896 = _0x1f7caa(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 3], _0x2a64cb, 2399980690), _0x39f97a = _0x1f7caa(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 10], _0x24ebb7, 4293915773), _0x425346 = _0x1f7caa(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 1], _0x2ae266, 2240044497), _0x6c0e41 = _0x1f7caa(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 8], _0x2a67e0, 1873313359), _0x36c896 = _0x1f7caa(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 15], _0x2a64cb, 4264355552), _0x39f97a = _0x1f7caa(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 6], _0x24ebb7, 2734768916), _0x425346 = _0x1f7caa(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 13], _0x2ae266, 1309151649), _0x6c0e41 = _0x1f7caa(_0x6c0e41, _0x425346, _0x39f97a, _0x36c896, _0x595f19[_0xeea53b + 4], _0x2a67e0, 4149444226), _0x36c896 = _0x1f7caa(_0x36c896, _0x6c0e41, _0x425346, _0x39f97a, _0x595f19[_0xeea53b + 11], _0x2a64cb, 3174756917), _0x39f97a = _0x1f7caa(_0x39f97a, _0x36c896, _0x6c0e41, _0x425346, _0x595f19[_0xeea53b + 2], _0x24ebb7, 718787259), _0x425346 = _0x1f7caa(_0x425346, _0x39f97a, _0x36c896, _0x6c0e41, _0x595f19[_0xeea53b + 9], _0x2ae266, 3951481745), _0x6c0e41 = _0x1070c6(_0x6c0e41, _0x48f276), _0x425346 = _0x1070c6(_0x425346, _0x341c18), _0x39f97a = _0x1070c6(_0x39f97a, _0x3342c7), _0x36c896 = _0x1070c6(_0x36c896, _0x16c955);
  var _0x3e8ec8 = _0x3f69a4(_0x6c0e41) + _0x3f69a4(_0x425346) + _0x3f69a4(_0x39f97a) + _0x3f69a4(_0x36c896);
  return _0x3e8ec8.toLowerCase();
}
function _0x55bcea(_0x144b01, _0x2170af) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x57b5c3 {
    constructor(_0x389f14) {
      this.env = _0x389f14;
    }
    ["send"](_0x5542b4, _0xeb1d18 = "GET") {
      _0x5542b4 = "string" == typeof _0x5542b4 ? {
        "url": _0x5542b4
      } : _0x5542b4;
      let _0x31f19d = this.get;
      return "POST" === _0xeb1d18 && (_0x31f19d = this.post), new Promise((_0x383a42, _0x1e9273) => {
        _0x31f19d.call(this, _0x5542b4, (_0x24ac99, _0x40ec81, _0x482131) => {
          _0x24ac99 ? _0x1e9273(_0x24ac99) : _0x383a42(_0x40ec81);
        });
      });
    }
    ["get"](_0x5e7fd6) {
      return this.send.call(this.env, _0x5e7fd6);
    }
    ["post"](_0x36c0c2) {
      return this.send.call(this.env, _0x36c0c2, "POST");
    }
  }
  return new class {
    constructor(_0xd1e4e9, _0x5e4a2a) {
      this.name = _0xd1e4e9;
      this.http = new _0x57b5c3(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x5e4a2a);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x534b37, _0x50977c = null) {
      try {
        return JSON.parse(_0x534b37);
      } catch {
        return _0x50977c;
      }
    }
    ["toStr"](_0x8a528d, _0x26bb6a = null) {
      try {
        return JSON.stringify(_0x8a528d);
      } catch {
        return _0x26bb6a;
      }
    }
    ["getjson"](_0x37e7a1, _0x36d3eb) {
      let _0x3e46d5 = _0x36d3eb;
      const _0x505726 = this.getdata(_0x37e7a1);
      if (_0x505726) try {
        _0x3e46d5 = JSON.parse(this.getdata(_0x37e7a1));
      } catch {}
      return _0x3e46d5;
    }
    ["setjson"](_0x547a17, _0x568201) {
      try {
        return this.setdata(JSON.stringify(_0x547a17), _0x568201);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x565823) {
      return new Promise(_0x561187 => {
        this.get({
          "url": _0x565823
        }, (_0xe8a704, _0xb2cb29, _0xe4dccb) => _0x561187(_0xe4dccb));
      });
    }
    ["runScript"](_0x4eb2aa, _0x545697) {
      return new Promise(_0x1d4845 => {
        let _0x5f3132 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5f3132 = _0x5f3132 ? _0x5f3132.replace(/\n/g, "").trim() : _0x5f3132;
        let _0x50b6bd = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x50b6bd = _0x50b6bd ? 1 * _0x50b6bd : 20;
        _0x50b6bd = _0x545697 && _0x545697.timeout ? _0x545697.timeout : _0x50b6bd;
        const [_0x1bcf72, _0x128db2] = _0x5f3132.split("@"),
          _0x38c72a = {
            "url": "http://" + _0x128db2 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x4eb2aa,
              "mock_type": "cron",
              "timeout": _0x50b6bd
            },
            "headers": {
              "X-Key": _0x1bcf72,
              "Accept": "*/*"
            }
          };
        this.post(_0x38c72a, (_0x4e69a5, _0x5d3001, _0x19016b) => _0x1d4845(_0x19016b));
      }).catch(_0x133ec0 => this.logErr(_0x133ec0));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xc0bae4 = this.path.resolve(this.dataFile),
          _0x522df1 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4e9756 = this.fs.existsSync(_0xc0bae4),
          _0x1e8143 = !_0x4e9756 && this.fs.existsSync(_0x522df1);
        if (!_0x4e9756 && !_0x1e8143) return {};
        {
          const _0x3a68b0 = _0x4e9756 ? _0xc0bae4 : _0x522df1;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3a68b0));
          } catch (_0x101799) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x37e6a2 = this.path.resolve(this.dataFile),
          _0x2235b9 = this.path.resolve(process.cwd(), this.dataFile),
          _0x38b258 = this.fs.existsSync(_0x37e6a2),
          _0x8d26f4 = !_0x38b258 && this.fs.existsSync(_0x2235b9),
          _0x11c272 = JSON.stringify(this.data);
        _0x38b258 ? this.fs.writeFileSync(_0x37e6a2, _0x11c272) : _0x8d26f4 ? this.fs.writeFileSync(_0x2235b9, _0x11c272) : this.fs.writeFileSync(_0x37e6a2, _0x11c272);
      }
    }
    ["lodash_get"](_0x3bf96b, _0x479bf2, _0x50c8d4) {
      const _0x18a3b4 = _0x479bf2.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x5a9b51 = _0x3bf96b;
      for (const _0x1ea9ab of _0x18a3b4) if (_0x5a9b51 = Object(_0x5a9b51)[_0x1ea9ab], void 0 === _0x5a9b51) return _0x50c8d4;
      return _0x5a9b51;
    }
    ["lodash_set"](_0x25cb67, _0x1301e5, _0x5a8782) {
      return Object(_0x25cb67) !== _0x25cb67 ? _0x25cb67 : (Array.isArray(_0x1301e5) || (_0x1301e5 = _0x1301e5.toString().match(/[^.[\]]+/g) || []), _0x1301e5.slice(0, -1).reduce((_0x474dec, _0x3d5007, _0x82284d) => Object(_0x474dec[_0x3d5007]) === _0x474dec[_0x3d5007] ? _0x474dec[_0x3d5007] : _0x474dec[_0x3d5007] = Math.abs(_0x1301e5[_0x82284d + 1]) >> 0 == +_0x1301e5[_0x82284d + 1] ? [] : {}, _0x25cb67)[_0x1301e5[_0x1301e5.length - 1]] = _0x5a8782, _0x25cb67);
    }
    ["getdata"](_0x5905b5) {
      let _0x341fcd = this.getval(_0x5905b5);
      if (/^@/.test(_0x5905b5)) {
        const [, _0x59daad, _0x38ac50] = /^@(.*?)\.(.*?)$/.exec(_0x5905b5),
          _0x1ed0f8 = _0x59daad ? this.getval(_0x59daad) : "";
        if (_0x1ed0f8) try {
          const _0x315022 = JSON.parse(_0x1ed0f8);
          _0x341fcd = _0x315022 ? this.lodash_get(_0x315022, _0x38ac50, "") : _0x341fcd;
        } catch (_0x3e7d00) {
          _0x341fcd = "";
        }
      }
      return _0x341fcd;
    }
    ["setdata"](_0x530468, _0x181a5a) {
      let _0x585230 = false;
      if (/^@/.test(_0x181a5a)) {
        const [, _0x55226c, _0x150188] = /^@(.*?)\.(.*?)$/.exec(_0x181a5a),
          _0xd59335 = this.getval(_0x55226c),
          _0x59d433 = _0x55226c ? "null" === _0xd59335 ? null : _0xd59335 || "{}" : "{}";
        try {
          const _0x21998b = JSON.parse(_0x59d433);
          this.lodash_set(_0x21998b, _0x150188, _0x530468);
          _0x585230 = this.setval(JSON.stringify(_0x21998b), _0x55226c);
        } catch (_0x2588c8) {
          const _0x5f0073 = {};
          this.lodash_set(_0x5f0073, _0x150188, _0x530468);
          _0x585230 = this.setval(JSON.stringify(_0x5f0073), _0x55226c);
        }
      } else _0x585230 = this.setval(_0x530468, _0x181a5a);
      return _0x585230;
    }
    ["getval"](_0x3fb498) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x3fb498) : this.isQuanX() ? $prefs.valueForKey(_0x3fb498) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3fb498]) : this.data && this.data[_0x3fb498] || null;
    }
    ["setval"](_0x30600a, _0x13f168) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x30600a, _0x13f168) : this.isQuanX() ? $prefs.setValueForKey(_0x30600a, _0x13f168) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x13f168] = _0x30600a, this.writedata(), !0) : this.data && this.data[_0x13f168] || null;
    }
    ["initGotEnv"](_0x1d3cb7) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x1d3cb7 && (_0x1d3cb7.headers = _0x1d3cb7.headers ? _0x1d3cb7.headers : {}, void 0 === _0x1d3cb7.headers.Cookie && void 0 === _0x1d3cb7.cookieJar && (_0x1d3cb7.cookieJar = this.ckjar));
    }
    ["get"](_0x255012, _0x4a383c = () => {}) {
      _0x255012.headers && (delete _0x255012.headers["Content-Type"], delete _0x255012.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x255012.headers = _0x255012.headers || {}, Object.assign(_0x255012.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x255012, (_0x35303a, _0x59c78a, _0x2ca963) => {
        !_0x35303a && _0x59c78a && (_0x59c78a.body = _0x2ca963, _0x59c78a.statusCode = _0x59c78a.status);
        _0x4a383c(_0x35303a, _0x59c78a, _0x2ca963);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x255012.opts = _0x255012.opts || {}, Object.assign(_0x255012.opts, {
        "hints": !1
      })), $task.fetch(_0x255012).then(_0x3dd767 => {
        const {
          statusCode: _0x9df1d9,
          statusCode: _0x19079c,
          headers: _0x1ab95e,
          body: _0x5d2cef
        } = _0x3dd767;
        _0x4a383c(null, {
          "status": _0x9df1d9,
          "statusCode": _0x19079c,
          "headers": _0x1ab95e,
          "body": _0x5d2cef
        }, _0x5d2cef);
      }, _0x4cc562 => _0x4a383c(_0x4cc562))) : this.isNode() && (this.initGotEnv(_0x255012), this.got(_0x255012).on("redirect", (_0x493bda, _0x26df75) => {
        try {
          if (_0x493bda.headers["set-cookie"]) {
            const _0x4f64b2 = _0x493bda.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x4f64b2 && this.ckjar.setCookieSync(_0x4f64b2, null);
            _0x26df75.cookieJar = this.ckjar;
          }
        } catch (_0x57c6c3) {
          this.logErr(_0x57c6c3);
        }
      }).then(_0x2328e8 => {
        const {
          statusCode: _0x3eb5fa,
          statusCode: _0x11a867,
          headers: _0x5342e9,
          body: _0x565df1
        } = _0x2328e8;
        _0x4a383c(null, {
          "status": _0x3eb5fa,
          "statusCode": _0x11a867,
          "headers": _0x5342e9,
          "body": _0x565df1
        }, _0x565df1);
      }, _0x8dc6e0 => {
        const {
          message: _0xded00a,
          response: _0x1afc8a
        } = _0x8dc6e0;
        _0x4a383c(_0xded00a, _0x1afc8a, _0x1afc8a && _0x1afc8a.body);
      }));
    }
    ["post"](_0x1490c2, _0x1cf2ad = () => {}) {
      if (_0x1490c2.body && _0x1490c2.headers && !_0x1490c2.headers["Content-Type"] && (_0x1490c2.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x1490c2.headers && delete _0x1490c2.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x1490c2.headers = _0x1490c2.headers || {}, Object.assign(_0x1490c2.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x1490c2, (_0x1f6293, _0x4be580, _0x30dd26) => {
        !_0x1f6293 && _0x4be580 && (_0x4be580.body = _0x30dd26, _0x4be580.statusCode = _0x4be580.status);
        _0x1cf2ad(_0x1f6293, _0x4be580, _0x30dd26);
      });else {
        if (this.isQuanX()) _0x1490c2.method = "POST", this.isNeedRewrite && (_0x1490c2.opts = _0x1490c2.opts || {}, Object.assign(_0x1490c2.opts, {
          "hints": !1
        })), $task.fetch(_0x1490c2).then(_0xabd12e => {
          const {
            statusCode: _0x32ba40,
            statusCode: _0xa3b2a4,
            headers: _0xfb20c6,
            body: _0x6169eb
          } = _0xabd12e;
          _0x1cf2ad(null, {
            "status": _0x32ba40,
            "statusCode": _0xa3b2a4,
            "headers": _0xfb20c6,
            "body": _0x6169eb
          }, _0x6169eb);
        }, _0x507e5e => _0x1cf2ad(_0x507e5e));else {
          if (this.isNode()) {
            this.initGotEnv(_0x1490c2);
            const {
              url: _0x1914eb,
              ..._0x1897b9
            } = _0x1490c2;
            this.got.post(_0x1914eb, _0x1897b9).then(_0x5a5a87 => {
              const {
                statusCode: _0x33413a,
                statusCode: _0x5c9bf6,
                headers: _0x2e0551,
                body: _0x44ec2a
              } = _0x5a5a87;
              _0x1cf2ad(null, {
                "status": _0x33413a,
                "statusCode": _0x5c9bf6,
                "headers": _0x2e0551,
                "body": _0x44ec2a
              }, _0x44ec2a);
            }, _0x418c5c => {
              const {
                message: _0x51dd0d,
                response: _0x3362fb
              } = _0x418c5c;
              _0x1cf2ad(_0x51dd0d, _0x3362fb, _0x3362fb && _0x3362fb.body);
            });
          }
        }
      }
    }
    ["time"](_0x222b85, _0xfc66b0 = null) {
      const _0x962b4e = _0xfc66b0 ? new Date(_0xfc66b0) : new Date();
      let _0x61fb6d = {
        "M+": _0x962b4e.getMonth() + 1,
        "d+": _0x962b4e.getDate(),
        "H+": _0x962b4e.getHours(),
        "m+": _0x962b4e.getMinutes(),
        "s+": _0x962b4e.getSeconds(),
        "q+": Math.floor((_0x962b4e.getMonth() + 3) / 3),
        "S": _0x962b4e.getMilliseconds()
      };
      /(y+)/.test(_0x222b85) && (_0x222b85 = _0x222b85.replace(RegExp.$1, (_0x962b4e.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4a5729 in _0x61fb6d) new RegExp("(" + _0x4a5729 + ")").test(_0x222b85) && (_0x222b85 = _0x222b85.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x61fb6d[_0x4a5729] : ("00" + _0x61fb6d[_0x4a5729]).substr(("" + _0x61fb6d[_0x4a5729]).length)));
      return _0x222b85;
    }
    ["msg"](_0x25aeb3 = _0x144b01, _0x1b74aa = "", _0x5e7b19 = "", _0x42ab18) {
      const _0xf43d4f = _0x7b733f => {
        if (!_0x7b733f) return _0x7b733f;
        if ("string" == typeof _0x7b733f) return this.isLoon() ? _0x7b733f : this.isQuanX() ? {
          "open-url": _0x7b733f
        } : this.isSurge() ? {
          "url": _0x7b733f
        } : void 0;
        if ("object" == typeof _0x7b733f) {
          if (this.isLoon()) {
            let _0x44caf2 = _0x7b733f.openUrl || _0x7b733f.url || _0x7b733f["open-url"],
              _0x33e563 = _0x7b733f.mediaUrl || _0x7b733f["media-url"];
            return {
              "openUrl": _0x44caf2,
              "mediaUrl": _0x33e563
            };
          }
          if (this.isQuanX()) {
            let _0x564eff = _0x7b733f["open-url"] || _0x7b733f.url || _0x7b733f.openUrl,
              _0x27a5ca = _0x7b733f["media-url"] || _0x7b733f.mediaUrl;
            return {
              "open-url": _0x564eff,
              "media-url": _0x27a5ca
            };
          }
          if (this.isSurge()) {
            let _0x1306ac = _0x7b733f.url || _0x7b733f.openUrl || _0x7b733f["open-url"];
            return {
              "url": _0x1306ac
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x25aeb3, _0x1b74aa, _0x5e7b19, _0xf43d4f(_0x42ab18)) : this.isQuanX() && $notify(_0x25aeb3, _0x1b74aa, _0x5e7b19, _0xf43d4f(_0x42ab18))), !this.isMuteLog) {
        let _0x38ddf3 = ["", "==============📣系统通知📣=============="];
        _0x38ddf3.push(_0x25aeb3);
        _0x1b74aa && _0x38ddf3.push(_0x1b74aa);
        _0x5e7b19 && _0x38ddf3.push(_0x5e7b19);
        console.log(_0x38ddf3.join("\n"));
        this.logs = this.logs.concat(_0x38ddf3);
      }
    }
    ["log"](..._0x2c7448) {
      _0x2c7448.length > 0 && (this.logs = [...this.logs, ..._0x2c7448]);
      console.log(_0x2c7448.join(this.logSeparator));
    }
    ["logErr"](_0x182e1e, _0x3219d5) {
      const _0x4d959b = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x4d959b ? this.log("", "❗️" + this.name + ", 错误!", _0x182e1e.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x182e1e);
    }
    ["wait"](_0x51d9bf) {
      return new Promise(_0x35b440 => setTimeout(_0x35b440, _0x51d9bf));
    }
    ["done"](_0x5a5452 = {}) {
      const _0x5b0cd9 = new Date().getTime(),
        _0x40a980 = (_0x5b0cd9 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x40a980 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x5a5452);
    }
  }(_0x144b01, _0x2170af);
}