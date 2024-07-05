//Fri Jul 05 2024 14:59:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
[["\u0063\u006f\u006f\u006b\u0069\u0065\u0028\u9ed8\u8ba4\u0032\u0030\u4e2a\u0029", ")\u5426/\u662F(\u884C\u6267\u5426\u662F".split("").reverse().join(""), "\u8d26\u53f7\u540d\u79f0\u0028\u53ef\u4e0d\u586b\u5199\u0029"]];
var configContent = [["\u79F0\u540D\u7684\u8868\u4F5C\u5DE5".split("").reverse().join(""), "\u6CE8\u5907".split("").reverse().join(""), "\u53ea\u63a8\u9001\u5931\u8d25\u6d88\u606f\uff08\u662f\u002f\u5426\uff09", "\uFF09\u5426/\u662F\uFF08\u79F0\u6635\u9001\u63A8".split("").reverse().join("")], [sheetNameSubConfig, pushHeader, "\u5426", "\u662f"]];
var qlpushFlag = 0x3a049 ^ 0x3a049;
var qlSheet = [];
var colNum = ["\u0041", 'B', "\u0043", 'D', "\u0045", "\u0046", 'G', 'H', 'I', "\u004a", 'K', "\u004c", "\u004d", "\u004e", "\u004f", 'P', "\u0051"];
qlConfig = {
  'CONFIG': configContent,
  'SUBCONFIG': userContent
};
var posHttp = 0x7f376 ^ 0x7f376;
var flagFinish = 0x688a5 ^ 0x688a5;
var flagResultFinish = 0x34666 ^ 0x34666;
var HTTPOverwrite = {
  'get': function get(_0x58ee64, _0x23e74e) {
    _0x23e74e = _0x23e74e['headers'];
    let _0xad7bf = userContent["\u006c\u0065\u006e\u0067\u0074\u0068"] - qlpushFlag;
    method = "teg".split("").reverse().join("");
    resp = fetch(_0x58ee64, {
      "\u006d\u0065\u0074\u0068\u006f\u0064": method,
      'headers': _0x23e74e
    })["\u0074\u0068\u0065\u006e"](function (_0x1c5326) {
      return _0x1c5326['text']()['then'](_0x38f13f => {
        return {
          'status': _0x1c5326['status'],
          "\u0068\u0065\u0061\u0064\u0065\u0072\u0073": _0x1c5326["\u0068\u0065\u0061\u0064\u0065\u0072\u0073"],
          "\u0074\u0065\u0078\u0074": _0x38f13f,
          'response': _0x1c5326,
          "\u0070\u006f\u0073": _0xad7bf
        };
      });
    })["\u0074\u0068\u0065\u006e"](function (_0x5824b7) {
      try {
        data = JSON["\u0070\u0061\u0072\u0073\u0065"](_0x5824b7['text']);
        return {
          "\u0073\u0074\u0061\u0074\u0075\u0073": _0x5824b7['status'],
          "\u0068\u0065\u0061\u0064\u0065\u0072\u0073": _0x5824b7["\u0068\u0065\u0061\u0064\u0065\u0072\u0073"],
          'json': function _0xe8691() {
            return data;
          },
          'text': function _0x29967f() {
            return _0x5824b7['text'];
          },
          'pos': _0x5824b7["\u0070\u006f\u0073"]
        };
      } catch (_0x1c7983) {
        return {
          "\u0073\u0074\u0061\u0074\u0075\u0073": _0x5824b7["\u0073\u0074\u0061\u0074\u0075\u0073"],
          'headers': _0x5824b7["\u0068\u0065\u0061\u0064\u0065\u0072\u0073"],
          'json': null,
          "\u0074\u0065\u0078\u0074": function _0x489a51() {
            return _0x5824b7["\u0074\u0065\u0078\u0074"];
          },
          "\u0070\u006f\u0073": _0x5824b7['pos']
        };
      }
    })['then'](_0x377aa8 => {
      _0xad7bf = _0x377aa8['pos'];
      flagResultFinish = resultHandle(_0x377aa8, _0xad7bf);
      if (flagResultFinish == (0x425f6 ^ 0x425f7)) {
        i = _0xad7bf + (0x41450 ^ 0x41451);
        for (; i <= line; i++) {
          var _0xf812eb = Application["\u0052\u0061\u006e\u0067\u0065"]('A' + i)["\u0054\u0065\u0078\u0074"];
          var _0x5c1cff = Application['Range']("\u0042" + i)["\u0054\u0065\u0078\u0074"];
          if (_0xf812eb == "".split("").reverse().join("")) {
            break;
          }
          if (_0x5c1cff == "\u662f") {
            console['log']("\uFF1A\u6237\u7528\u884C\u6267\u59CB\u5F00 \uDDD1\uD83E".split("").reverse().join("") + (parseInt(i) - (0x2920c ^ 0x2920d)));
            flagResultFinish = 0x9ee2d ^ 0x9ee2d;
            execHandle(_0xf812eb, i);
            break;
          }
        }
      }
      if (_0xad7bf == userContent['length'] && flagResultFinish == (0xa66cc ^ 0xa66cd)) {
        flagFinish = 0xb4227 ^ 0xb4226;
      }
      if (qlpushFlag == (0x559b4 ^ 0x559b4) && flagFinish == 0x1) {
        console["\u006c\u006f\u0067"]("\u9001\u63A8\u8D77\u53D1\u9F99\u9752 \uDE80\uD83D".split("").reverse().join(""));
        message = messageMerge();
        const {
          sendNotify: _0x581347
        } = require('./sendNotify.js');
        _0x581347(pushHeader, message);
        qlpushFlag = -0x64;
      }
    })['catch'](_0x347133 => {
      console['error']('Fetch\x20error:', _0x347133);
    });
  },
  'post': function post(_0x1f5035, _0x2d96f9, _0x2aa230, _0x226f44) {
    _0x2aa230 = _0x2aa230['headers'];
    contentType = _0x2aa230["\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065"];
    contentType2 = _0x2aa230['content-type'];
    var _0x3db254 = '';
    if (contentType != undefined && contentType != "".split("").reverse().join("") || contentType2 != undefined && contentType2 != "".split("").reverse().join("")) {
      if (contentType == "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u0078\u002d\u0077\u0077\u0077\u002d\u0066\u006f\u0072\u006d\u002d\u0075\u0072\u006c\u0065\u006e\u0063\u006f\u0064\u0065\u0064") {
        console["\u006c\u006f\u0067"]("\u5F0F\u683C\u5355\u8868 :\u4E3A\u4F53\u6C42\u8BF7\u9001\u53D1\u5230\u6D4B\u68C0 \uDF73\uD83C".split("").reverse().join(""));
        _0x3db254 = dataToFormdata(_0x2d96f9);
      } else {
        try {
          console["\u006c\u006f\u0067"]('🍳\x20检测到发送请求体为:\x20JSON格式');
          _0x3db254 = JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](_0x2d96f9);
        } catch {
          console['log']("\u5F0F\u683C\u5355\u8868 :\u4E3A\u4F53\u6C42\u8BF7\u9001\u53D1\u5230\u6D4B\u68C0 \uDF73\uD83C".split("").reverse().join(""));
          _0x3db254 = _0x2d96f9;
        }
      }
    } else {
      console["\u006c\u006f\u0067"]('🍳\x20检测到发送请求体为:\x20JSON格式');
      _0x3db254 = JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](_0x2d96f9);
    }
    if (_0x226f44 == 'get' || _0x226f44 == "\u0047\u0045\u0054") {
      let _0x335b35 = userContent["\u006c\u0065\u006e\u0067\u0074\u0068"] - qlpushFlag;
      method = 'get';
      resp = fetch(_0x1f5035, {
        'method': method,
        "\u0068\u0065\u0061\u0064\u0065\u0072\u0073": _0x2aa230
      })['then'](function (_0x5d662a) {
        return _0x5d662a['text']()['then'](_0x4888be => {
          return {
            'status': _0x5d662a["\u0073\u0074\u0061\u0074\u0075\u0073"],
            'headers': _0x5d662a["\u0068\u0065\u0061\u0064\u0065\u0072\u0073"],
            "\u0074\u0065\u0078\u0074": _0x4888be,
            'response': _0x5d662a,
            "\u0070\u006f\u0073": _0x335b35
          };
        });
      })['then'](function (_0xb8dfc3) {
        try {
          _0x2d96f9 = JSON["\u0070\u0061\u0072\u0073\u0065"](_0xb8dfc3["\u0074\u0065\u0078\u0074"]);
          return {
            'status': _0xb8dfc3["\u0073\u0074\u0061\u0074\u0075\u0073"],
            "\u0068\u0065\u0061\u0064\u0065\u0072\u0073": _0xb8dfc3["\u0068\u0065\u0061\u0064\u0065\u0072\u0073"],
            'json': function _0x393c21() {
              return _0x2d96f9;
            },
            'text': function _0x36f803() {
              return _0xb8dfc3['text'];
            },
            "\u0070\u006f\u0073": _0xb8dfc3['pos']
          };
        } catch (_0x2baa13) {
          return {
            'status': _0xb8dfc3['status'],
            'headers': _0xb8dfc3['headers'],
            "\u006a\u0073\u006f\u006e": null,
            'text': function _0x276181() {
              return _0xb8dfc3['text'];
            },
            'pos': _0xb8dfc3['pos']
          };
        }
      })["\u0074\u0068\u0065\u006e"](_0x170faf => {
        _0x335b35 = _0x170faf["\u0070\u006f\u0073"];
        flagResultFinish = resultHandle(_0x170faf, _0x335b35);
        if (flagResultFinish == 0x1) {
          i = _0x335b35 + 0x1;
          for (; i <= line; i++) {
            var _0xcda32e = Application['Range']('A' + i)['Text'];
            var _0x163d26 = Application['Range']('B' + i)['Text'];
            if (_0xcda32e == "".split("").reverse().join("")) {
              break;
            }
            if (_0x163d26 == '是') {
              console['log']("\uFF1A\u6237\u7528\u884C\u6267\u59CB\u5F00 \uDDD1\uD83E".split("").reverse().join("") + (parseInt(i) - (0x4ef16 ^ 0x4ef17)));
              flagResultFinish = 0x0;
              execHandle(_0xcda32e, i);
              break;
            }
          }
        }
        if (_0x335b35 == userContent['length'] && flagResultFinish == 0x1) {
          flagFinish = 0x1;
        }
        if (qlpushFlag == (0x82d29 ^ 0x82d29) && flagFinish == 0x1) {
          console['log']('🚀\x20青龙发起推送');
          message = messageMerge();
          const {
            sendNotify: _0x153845
          } = require("\u002e\u002f\u0073\u0065\u006e\u0064\u004e\u006f\u0074\u0069\u0066\u0079\u002e\u006a\u0073");
          _0x153845(pushHeader, message);
          qlpushFlag = -0x64;
        }
      })['catch'](_0x2e0a9a => {
        console['error'](":rorre hcteF".split("").reverse().join(""), _0x2e0a9a);
      });
    } else {
      let _0x29e224 = userContent['length'] - qlpushFlag;
      method = "tsop".split("").reverse().join("");
      resp = fetch(_0x1f5035, {
        'method': method,
        'headers': _0x2aa230,
        'body': _0x3db254
      })['then'](function (_0x5b997d) {
        return _0x5b997d['text']()['then'](_0x3935fa => {
          return {
            'status': _0x5b997d['status'],
            "\u0068\u0065\u0061\u0064\u0065\u0072\u0073": _0x5b997d['headers'],
            'text': _0x3935fa,
            'response': _0x5b997d,
            'pos': _0x29e224
          };
        });
      })['then'](function (_0x514309) {
        try {
          _0x2d96f9 = JSON["\u0070\u0061\u0072\u0073\u0065"](_0x514309['text']);
          return {
            "\u0073\u0074\u0061\u0074\u0075\u0073": _0x514309['status'],
            'headers': _0x514309['headers'],
            'json': function _0x1028f0() {
              return _0x2d96f9;
            },
            'text': function _0x9d25d() {
              return _0x514309['text'];
            },
            'pos': _0x514309['pos']
          };
        } catch (_0x147532) {
          return {
            "\u0073\u0074\u0061\u0074\u0075\u0073": _0x514309['status'],
            "\u0068\u0065\u0061\u0064\u0065\u0072\u0073": _0x514309['headers'],
            'json': null,
            'text': function _0x5831a3() {
              return _0x514309['text'];
            },
            'pos': _0x514309["\u0070\u006f\u0073"]
          };
        }
      })['then'](_0x331df2 => {
        _0x29e224 = _0x331df2['pos'];
        flagResultFinish = resultHandle(_0x331df2, _0x29e224);
        if (flagResultFinish == 0x1) {
          i = _0x29e224 + 0x1;
          for (; i <= line; i++) {
            var _0x10c723 = Application['Range']('A' + i)['Text'];
            var _0x32dcc8 = Application["\u0052\u0061\u006e\u0067\u0065"]('B' + i)["\u0054\u0065\u0078\u0074"];
            if (_0x10c723 == '') {
              break;
            }
            if (_0x32dcc8 == '是') {
              console['log']('🧑\x20开始执行用户：' + (parseInt(i) - 0x1));
              flagResultFinish = 0x69161 ^ 0x69161;
              execHandle(_0x10c723, i);
              break;
            }
          }
        }
        if (_0x29e224 == userContent['length'] && flagResultFinish == 0x1) {
          flagFinish = 0xbc4a2 ^ 0xbc4a3;
        }
        if (qlpushFlag == (0xab48a ^ 0xab48a) && flagFinish == 0x1) {
          console['log']("\u9001\u63A8\u8D77\u53D1\u9F99\u9752 \uDE80\uD83D".split("").reverse().join(""));
          let _0x4e8d15 = messageMerge();
          const {
            sendNotify: _0x3b25a5
          } = require('./sendNotify.js');
          _0x3b25a5(pushHeader, _0x4e8d15);
          qlpushFlag = -(0x3426d ^ 0x34209);
        }
      })['catch'](_0x1368d1 => {
        console['error'](":rorre hcteF".split("").reverse().join(""), _0x1368d1);
      });
    }
  }
};
var ApplicationOverwrite = {
  'Range': function Range(_0x778d77) {
    charFirst = _0x778d77['substring'](0x0, 0x8132b ^ 0x8132a);
    qlRow = _0x778d77['substring'](0x1, _0x778d77['length']);
    qlCol = 0x1;
    for (num in colNum) {
      if (colNum[num] == charFirst) {
        break;
      }
      qlCol += 0x1;
    }
    try {
      result = qlSheet[qlRow - (0xc5d1c ^ 0xc5d1d)][qlCol - (0x78bbf ^ 0x78bbe)];
    } catch {
      result = '';
    }
    dict = {
      'Text': result
    };
    return dict;
  },
  'Sheets': {
    "\u0049\u0074\u0065\u006d": function (_0xa89467) {
      return {
        "\u004e\u0061\u006d\u0065": _0xa89467,
        'Activate': function () {
          flag = 0x1;
          qlSheet = qlConfig[_0xa89467];
          if (qlSheet == undefined) {
            qlSheet = qlConfig["\u0053\u0055\u0042\u0043\u004f\u004e\u0046\u0049\u0047"];
          }
          console["\u006c\u006f\u0067"]('🍳\x20青龙激活工作表：' + _0xa89467);
          return flag;
        }
      };
    }
  }
};
var CryptoOverwrite = {
  'createHash': function createHash(_0xbffd3c) {
    return {
      'update': function _0x5c6593(_0x4028c9, _0x51656e) {
        return {
          'digest': function _0x1c0ac8(_0x3c1125) {
            return {
              'toUpperCase': function _0x4da1a3() {
                return {
                  "\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067": function _0xa609c() {
                    let _0xd7f56d = require('crypto-js');
                    let _0x5ef11e = _0xd7f56d['MD5'](_0x4028c9)['toString']();
                    _0x5ef11e = _0x5ef11e['toUpperCase']();
                    return _0x5ef11e;
                  }
                };
              },
              'toString': function _0x2cf532() {
                const _0x3f0262 = require('crypto-js');
                const _0x1158ca = _0x3f0262['MD5'](_0x4028c9)['toString']();
                return _0x1158ca;
              }
            };
          }
        };
      }
    };
  }
};
function dataToFormdata(_0x94b66c) {
  result = '';
  values = Object['values'](_0x94b66c);
  values['forEach']((_0x4fc62a, _0x665433) => {
    key = Object['keys'](_0x94b66c)[_0x665433];
    content = key + '=' + _0x4fc62a + '&';
    result += content;
  });
  result = result['substring'](0x35095 ^ 0x35095, result['length'] - (0xf3ca1 ^ 0xf3ca0));
  return result;
}
function cookiesTocookieMin(_0x5e662f) {
  let _0x497b41 = _0x5e662f;
  let _0x45a30b = [];
  var _0x355b81 = _0x497b41['split']('#');
  for (let _0x39e20d in _0x355b81) {
    _0x45a30b[_0x39e20d] = _0x355b81[_0x39e20d];
  }
  return _0x45a30b;
}
function checkEscape(_0x5eaa5a, _0x3b5175) {
  cookieArrynew = [];
  j = 0x8c1b2 ^ 0x8c1b2;
  for (i = 0xd6308 ^ 0xd6308; i < _0x5eaa5a['length']; i++) {
    result = _0x5eaa5a[i];
    lastChar = result['substring'](result['length'] - (0xd697e ^ 0xd697f), result['length']);
    if (lastChar == '\x5c' && i <= _0x5eaa5a['length'] - 0x2) {
      console['log']('🍳\x20检测到转义字符');
      cookieArrynew[j] = result['substring'](0x86976 ^ 0x86976, result['length'] - 0x1) + _0x3b5175 + _0x5eaa5a[parseInt(i) + (0x4c713 ^ 0x4c712)];
      i += 0x1;
    } else {
      cookieArrynew[j] = _0x5eaa5a[i];
    }
    j += 0x1;
  }
  return cookieArrynew;
}
function cookiesTocookie(_0x507369) {
  let _0x2e90ba = _0x507369;
  let _0x2f4298 = [];
  let _0x426ccb = [];
  let _0x1cc909 = _0x2e90ba['split']('@');
  _0x1cc909 = checkEscape(_0x1cc909, '@');
  for (let _0x44b7a2 in _0x1cc909) {
    _0x426ccb = [];
    let _0x350c7f = Number(_0x44b7a2) + (0x6fbdb ^ 0x6fbda);
    _0x2f4298 = cookiesTocookieMin(_0x1cc909[_0x44b7a2]);
    _0x2f4298 = checkEscape(_0x2f4298, '#');
    _0x426ccb['push'](_0x2f4298[0xbaa7a ^ 0xbaa7a]);
    _0x426ccb['push']('是');
    _0x426ccb['push']("\u79F0\u6635".split("").reverse().join("") + _0x350c7f);
    if (_0x2f4298["\u006c\u0065\u006e\u0067\u0074\u0068"] > (0x33cd8 ^ 0x33cd8)) {
      for (let _0x59b30f = 0x3; _0x59b30f < _0x2f4298['length'] + (0xdfa43 ^ 0xdfa41); _0x59b30f++) {
        _0x426ccb['push'](_0x2f4298[_0x59b30f - 0x2]);
      }
    }
    userContent["\u0070\u0075\u0073\u0068"](_0x426ccb);
  }
  qlpushFlag = userContent['length'] - 0x1;
}
var qlSwitch = 0xf0960 ^ 0xf0960;
try {
  qlSwitch = process["\u0065\u006e\u0076"][sheetNameSubConfig];
  qlSwitch = 0x1;
  console['log']('♻️\x20当前环境为青龙');
  console['log']("\u7801\u4EE3\u9F99\u9752\u884C\u6267\uFF0C\u5883\u73AF\u9F99\u9752\u914D\u9002\u59CB\u5F00 \uFE0F\u267B".split("").reverse().join(""));
  try {
    fetch = require('node-fetch');
    console["\u006c\u006f\u0067"]('♻️\x20系统无fetch，已进行node-fetch引入');
  } catch {
    console['log']('♻️\x20系统已有原生fetch');
  }
  Crypto = CryptoOverwrite;
  let flagwarn = 0x0;
  const a = 'da11990c';
  const b = "0b854f216a9662fb".split("").reverse().join("");
  encode = getsign(logo);
  let len = encode['length'];
  if (a + 'ec4dce09' == encode['substring'](0xf3ac2 ^ 0xf3ac2, len / 0x2) && b == encode["\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006e\u0067"](0x4 * (0x40675 ^ 0x40671), len)) {
    console["\u006c\u006f\u0067"]('✨\x20' + logo);
    cookies = process['env'][sheetNameSubConfig];
  } else {
    console['log']('🔨\x20请使用艾默库代码\x20:\x20https://github.com/imoki/sign_script');
    flagwarn = 0x1;
  }
  let flagwarn2 = 0x2ca7c ^ 0x2ca7d;
  const welcome = "edoc UKOM esu ot emocleW".split("").reverse().join("");
  const mo = welcome['slice'](0xb9607 ^ 0xb9608, 0xe8f0f ^ 0xe8f1e)['toLowerCase']();
  const ku = welcome['split']('\x20')[(0x99b1b ^ 0x99b1f) - 0x1]['slice'](0x2, 0x4);
  if (mo['substring'](0x0, 0x1) == 'm') {
    if (ku == 'KU') {
      if (mo['substring'](0x1, 0x84877 ^ 0x84875) == String['fromCharCode'](0x371f7 ^ 0x37198)) {
        cookiesTocookie(cookies);
        flagwarn2 = 0x0;
        console['log']('💗\x20' + welcome);
      }
    }
  }
  let t = Date["\u006e\u006f\u0077"]();
  if (t > 0xaa * 0x186a0 * 0x186a0 + 0x45f34a08e) {
    console['log']("\u63A5\u94FEnoiton\u5E93\u4ED3\u770B\u67E5\u8BF7\u7A0B\u6559\u7528\u4F7F \uDDFE\uD83E".split("").reverse().join(""));
    Application = ApplicationOverwrite;
  } else {
    flagwarn = 0x1;
  }
  if (Date["\u006e\u006f\u0077"]() < (0x51d0b ^ 0x51dc3) * 0x186a0 * 0x186a0) {
    console['log']('🤝\x20欢迎各种形式的贡献');
    HTTP = HTTPOverwrite;
  } else {
    flagwarn2 = 0x1;
  }
  if (flagwarn == 0x1 || flagwarn2 == (0x2b39b ^ 0x2b39a)) {
    console['log']('🔨\x20请使用艾默库代码\x20:\x20https://github.com/imoki/sign_script');
  }
} catch {
  qlSwitch = 0x0;
  console["\u006c\u006f\u0067"]("\u6863\u6587\u5C71\u91D1\u4E3A\u5883\u73AF\u524D\u5F53 \uFE0F\u267B".split("").reverse().join(""));
  console['log']('♻️\x20开始适配金山文档，执行金山文档代码');
}