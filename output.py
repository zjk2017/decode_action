#2024-07-24 09:18:36
import requests
import json
import time
import os
import random
requests.packages.urllib3.disable_warnings()
code="qdjf"
ver="1.0.0"
def version():
 try:
  txt=requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text
  print(txt)
  url=f"http://101.132.127.171/api/huaji/?version={ver}&code={code}"
  r=json.loads(requests.get(url).text)
  if r["ok"]:
   if r["update"]:
    print(f"有新版本请更新,当前版本:{ver},最新版本:",r["latest_version"])
    exit()
   else:
    print(f"当前版本为最新版本或不用更新,当前版本:{ver},最新版本:",r["latest_version"])
    print("更新日志:",r["data"]["update_note"])
  else:
   print("脚本已关闭")
 except:
  print("服务器失联....")
class yuanshen:
 def __init__(self,cookie):
  self.cookie=cookie
  self.url='https://qidian.hanhoukeji.com'
  self.headers={"Host":"qidian.hanhoukeji.com","Connection":"keep-alive","charset":"utf-8","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160083 MMWEBSDK/20231202 MMWEBID/98 MicroMessenger/8.0.47.2560(0x28002F30) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64 MiniProgramEnv/android","content-type":"application/json","access-token":self.cookie,"version":"1.5.19","platform":"MP-WEIXIN","Referer":"https://servicewechat.com/wx3aa7193831495d74/102/page-frame.html"}
 def task(self):
  self.video()
  self.eat()
  self.user()
 def video(self):
  url=f'{self.url}/index.php?s=/api/seead/detail'
  re=json.loads(requests.get(url,headers=self.headers).text)
  times=re["data"]["user_count"]
  times=5-int(times)
  if times==0:
   print("☑️ 当日视频上限")
  for i in range(times):
   url=f'{self.url}/index.php?s=/api/seead/getOrderNo'
   re=json.loads(requests.get(url,headers=self.headers).text)
   self.order_no=re["data"]["order_no"]
   time.sleep(random.randint(25,30))
   url=f'{self.url}/index.php?s=/api/seead/open&order_no={self.order_no}'
   r=json.loads(requests.get(url,headers=self.headers).text)
   if r["message"]=="success":
    print("✅ 观看视频成功，获得积分:",r["data"]["ponits"])
   else:
    print("❌ 观看视频失败",r["message"])
 def eat(self):
  current_hour=int(time.strftime("%H"))
  if(7<=current_hour<9)or(12<=current_hour<14)or(18<=current_hour<21):
   print("☑️ 当前时间在三餐时间")
   url=f'{self.url}/index.php?s=/api/blebag/openBag'
   re=json.loads(requests.get(url,headers=self.headers).text)
   if re["message"]=="success":
    print("✅ 领取三餐红包成功，获得积分:",re["data"]["ponits"])
   else:
    print("❌ 领取三餐红包失败",re["message"])
  else:
   print("☑️ 当前时间不在三餐时间")
 def user(self):
  url=f'{self.url}/index.php?s=/api/user/info'
  re=json.loads(requests.get(url,headers=self.headers).text)
  print("☑️ 当前总积分:",re["data"]["userInfo"]["points"],"=",re["data"]["userInfo"]["points"]/100,"元")
if __name__=='__main__':
 version()
 cookie=''
 if not cookie:
  cookie=os.getenv("yuanshen_qdjf")
  if not cookie:
   print("请设置环境变量:yuanshen_qdjf")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 i=1
 for cookie in cookies:
  print(f"\n--------开始第{i}个账号--------")
  main=yuanshen(cookie)
  main.task()
 print(f"--------第{i}个账号执行完毕--------")
 i+=1
