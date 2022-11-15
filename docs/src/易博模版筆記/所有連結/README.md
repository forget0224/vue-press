# 所有連結

# 大綱

- [檔案名＆連結](https://www.notion.so/c441fc607fa445e9b2bf0f0fb099402e)
    - [V2 & V2-1 版連結](https://www.notion.so/c441fc607fa445e9b2bf0f0fb099402e)
    - [V3 & V5 版連結](https://www.notion.so/c441fc607fa445e9b2bf0f0fb099402e)
    - [V3 & V5 版 導航欄後台開關](https://www.notion.so/c441fc607fa445e9b2bf0f0fb099402e)
- [公告](https://www.notion.so/c441fc607fa445e9b2bf0f0fb099402e)
- [關於我們`help.jsp`連結](https://www.notion.so/c441fc607fa445e9b2bf0f0fb099402e)
- [忘記密碼](https://www.notion.so/c441fc607fa445e9b2bf0f0fb099402e)
- [QQ更換代碼](https://www.notion.so/c441fc607fa445e9b2bf0f0fb099402e)

# ****檔案名&連結****

- **jsp檔內的連結都改為${base}才抓的到檔案**
- 如果沒有a標籤，可加入onclick達到跳轉

```jsx
<li onclick="location.href='連結'"></li> **//當前頁面跳轉------**
<li onclick="window.open('連結')"></li> **//另開分頁-----**
```

- 若a標籤要另開分頁且設定分頁寬高時

```jsx
<a href="javascript:window.open('這裡放連結','','height=600,width=800')"></a>
```

### **V2 & V2-1 版連結**

|          | 檔案名    | 連結                   | 另開視窗 | 備註             |
| -------- | --------- | ---------------------- | -------- | ---------------- |
| 首頁     | index.jsp | ${base}/index.do       |          |                  |
| 彩票頁面 | games.jsp | ${base}/index/games.do |          | 內嵌在頁面的樣式 |
| 彩票連結 |
 v2-1 或
 v2做另開分頁 |  | ${base}/lotteryV2/index.do | target="_blank" | V2要做另開分頁才放這個連結 |
| 真人 | real.jsp | ${base}/index/real.do |  |  |
| 電子 / 捕魚 | egame.jsp | ${base}/index/egame.do |  |  |
| 電競 |  | ${base}/index/esport.do | target="_blank" | 可參考s069 |
| 優惠活動  | active.jsp | ${base}/index/active.do |  |  |
| 體育 |  | ${base}/index/sport.do | target="_blank" | 要做內嵌參考：各頁內文 |
| 棋牌 |  | ${base}/index/qipai.do | target="_blank" | 要做內嵌參考：各頁內文 |
| app下載 |  | ${base}/down.do | target="_blank" | 手機投注,下載app… |
| 客服 |  | ${kfUrl} | target="_blank" |  |
| 關於我們 | help.jsp | ${base}/index/help.do |  |  |
| 登入  | login.jsp | ${base}/index/login.do |  |  |
| 登入頁 |  | ${base}/loginPage.do | target="_blank" | 不用index |
| 代理登入 |  | ${base}/daili | target=”_blank” |  |
| 會員註冊 | register.jsp | ${base}/regpage.do |  | 不用index |
| 代理註冊 | agtregister.jsp | ${base}/agtregpage.do |  |  |
| 大轉盤 |  | ${base}/index/luckyLottery.do | target="_blank" | 舊版頁面 |
| 大轉盤-新 |  | ${base}/index/luckyLotteryNew.do | target="_blank" | 如有放商品圖片需求才用
新版頁面 |
| 手機投注
 |  | ${base}/mobile | target="_blank" | 跳轉手機登錄，客服要求才使用，不然都放app下載 |
| 每日簽到 |  | ${base}/index/signNew.do | target="_blank" |  |
| 紅包 |  | ${base}/index/redPackage.do
${base}/mobile/v3/redPag.do（手機） | target="_blank" |  |
| 走勢圖 |  | ${base}/lottery/trendChart/index.do | target="_blank" |  |
| 開獎公告 |  | ${base}/lotteryV2/resultList.do | target="_blank" |  |
| 開獎網 |  | 每個站點連結都不同，需跟客服要網址 |  | 目前整頁是後端維護，我們修改不了 |
| 挖礦活動 |  | ${base}/center/miningActive/page.dokfUrl | target="_blank" | 要加登入判斷 |
| 遊戲玩法 |  | ${base}/lotteryV2/rule.do | target="_blank" | a/b站 |
| 免費試玩 |  | ${base}/registerGuestPage.do | target="_blank" | a/b站 開啟位置：後台配置 |
| 活動申請大廳 |  | ${base}/center/handleActive/page.do | target="_blank" | 因為需要先登入會員才能進入頁面，所以連結須加上是否已登入的判斷式。 |
| logo串接後台 |  | ${base}${logo} |  | 後台位置：後台配置 |
| 網站名稱 |  | ${_title} |  | 後台位置：後台配置 |
| 公告 |  | ${publicInfo} |  |  |

### **V3 & V5 版連結**

|              | 檔案名         | 連結                                   | 另開視窗        | 備註                                                               |
| ------------ | -------------- | -------------------------------------- | --------------- | ------------------------------------------------------------------ |
| 首頁         | index.jsp      | ${base}/lotteryV3/index.do             |                 |                                                                    |
| 彩票         | games.jsp      | ${base}/lotteryV3/lottery.do           |                 |                                                                    |
| 真人         | real.jsp       | ${base}/lotteryV3/real.do              |                 |                                                                    |
| 電子 / 捕魚  | egame.jsp      | ${base}/lotteryV3/egame.do             |                 |                                                                    |
| 優惠活動     | active.jsp     | ${base}/lotteryV3/promotion.do         |                 |                                                                    |
| 關於我們     | rookieHelp.jsp | ${base}/index/rookieHelp.do            |                 |                                                                    |
| 合買中心     |                | ${base}/lotteryV3/joint.do             |                 |                                                                    |
| 走勢圖       |                | ${base}/lotteryV3/trend.do             |                 |                                                                    |
| 體育         |                | ${base}/lotteryV3/sport.do             |                 |                                                                    |
| 資訊         |                | ${base}/lotteryV3/news.do              |                 |                                                                    |
| 棋牌         |                | ${base}/index/qipai.do                 | target="_blank" |                                                                    |
| 開獎公告     |                | ${base}/lotteryV3/draw.do              | target="_blank" |                                                                    |
| 手機購彩     | mobile_buy.jsp | ${base}/lotteryV3/mobile/show.do       |                 |                                                                    |
| 免費試玩     |                | ${base}/lotteryV3/registerTestGuest.do | target="_blank" | 開啟位置：後台配置                                                 |
| 遊戲玩法     |                | ${base}/lotteryV3/rule.do              | target="_blank" |                                                                    |
| 大轉盤       |                | ${base}/index/luckyLottery.do          | target="_blank" | 舊版頁面                                                           |
| 大轉盤-新    |                | ${base}/index/luckyLotteryNew.do       | target="_blank" | 如有放商品圖片需求才用                                             |
| 新版頁面     |
| 活動申請大廳 |                | ${base}/center/handleActive/page.do    | target="_blank" | 因為需要先登入會員才能進入頁面，所以連結須加上是否已登入的判斷式。 |
| logo串接後台 |                | ${base}${logo}                         |                 | 後台位置：後台配置                                                 |
| 網站名稱     |                | ${_title}                              |                 | 後台位置：後台配置                                                 |

### **V3 & V5 版 導航欄後台開關**  `參考：p059`

```html
<c:if test="${isZrOnOff eq 'on'}"> **//開關-----**
	<li class="navw2 <c:if test="${navClass eq 'REAL'}">on</c:if>"> **//欄位底色-----**
		<a href="${base}/lotteryV3/real.do">真人娱乐</a>
	</li>
</c:if>
```

|             | click欄位底色設定                             | 後臺開關按鈕                              |
| ----------- | --------------------------------------------- | ----------------------------------------- |
| 首頁        | <c:if test="${navClass eq 'INDEX'}">on</c:if> |                                           |
| 彩票        | <c:if test="${navClass eq 'GCDT'}">on</c:if>  |                                           |
| 真人        |                                               | <c:if test="${isZrOnOff eq 'on'}"></c:if> |
| 電子 / 捕魚 | <c:if test="${navClass eq 'EGAME'}">on</c:if> | <c:if test="${isDzOnOff eq 'on'}"></c:if> |
| 優惠活動    | <c:if test="${navClass eq 'YHHD'}">on</c:if>  |                                           |
| 合買中心    | <c:if test="${navClass eq 'HMZX'}">on</c:if>  | <c:if test="${empty isZrOnOff             |  | isZrOnOff eq 'off'}"></c:if> |
| 走勢圖      | <c:if test="${navClass eq 'ZST'}">on</c:if>   | <c:if test="${empty isDzOnOff             |  | isDzOnOff eq 'off'}"></c:if> |
| 體育        | <c:if test="${navClass eq 'SPORT'}">on</c:if> | <c:if test="${isTyOnOff eq 'on'}"></c:if> |
| 資訊        | <c:if test="${navClass eq 'ZX'}">on</c:if>    | <c:if test="${empty isTyOnOff             |  | isTyOnOff eq 'off'}"></c:if> |
| 棋牌        |                                               | <c:if test="${isDzOnOff eq 'on'}"></c:if> |
| 開獎公告    | <c:if test="${navClass eq 'KJGG'}">on</c:if>  |                                           |
| 手機購彩    | <c:if test="${navClass eq 'SJGC'}">on</c:if>  |                                           |

要開啟或關閉導航欄項目，可透過後台去調整。`參考：[後台配置](https://www.notion.so/9a17ad52087c44e1a579d668e475fe06)`

# **公告**

若公告要拆成一個組件，檔名命名為 **news.jsp**

```jsx
<marquee scrollamount="3" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
${publicInfo}
</marquee>
```

# **關於我們`help.jsp`連結**

| 关于我们 | ${base}/index/rookieHelp.do?code=1  |
| -------- | ----------------------------------- |
| 存款帮助 | ${base}/index/rookieHelp.do?code=3  |
| 取款帮助 | ${base}/index/rookieHelp.do?code=2  |
| 代理联盟 | ${base}/index/rookieHelp.do?code=4  |
| 联盟协议 | ${base}/index/rookieHelp.do?code=5  |
| 联系我们 | ${base}/index/rookieHelp.do?code=6  |
| 常见问题 | ${base}/index/rookieHelp.do?code=7  |
| 玩法介绍 | ${base}/index/rookieHelp.do?code=8  |
| 彩票公告 | ${base}/index/rookieHelp.do?code=9  |
| 视讯公告 | ${base}/index/rookieHelp.do?code=10 |
| 体育公告 | ${base}/index/rookieHelp.do?code=11 |
| 电子公告 | ${base}/index/rookieHelp.do?code=12 |
| 最新公告 | ${base}/index/rookieHelp.do?code=13 |
| 页面弹窗 | ${base}/index/rookieHelp.do?code=14 |
| 签到公告 | ${base}/index/rookieHelp.do?code=15 |
| 最新资讯 | ${base}/index/rookieHelp.do?code=16 |
| 签到规则 | ${base}/index/rookieHelp.do?code=17 |
| 新手教程 | ${base}/index/rookieHelp.do?code=18 |
| 手机弹窗 | ${base}/index/rookieHelp.do?code=19 |
| 责任条款 | ${base}/index/rookieHelp.do?code=20 |
| 最新优惠 | ${base}/index/rookieHelp.do?code=21 |

# **忘記密碼**

因為沒有忘記密碼的功能，所以請聯繫客服**。**

```jsx
1. <a href="<c:if test='${!isLogin}'>javascript:alert('请联系客服！')</c:if>"></a>

2. <a href="**${kfUrl}**"></a>
```

# **QQ更換代碼**

**換中間那串數字就好**

```html
**tencent://message/?uin=122288867&Menu=yes ， target="_blank"**
```