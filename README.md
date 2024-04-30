# Marvel Heroes

## 🔗 Link

- [Github](https://github.com/lyaui/marvel-heroes)
- [Demo](https://marvel-heroes-rust.vercel.app/)

![](https://hackmd.io/_uploads/H1BYEz0bR.png)


## 🚀 Getting Started

Install the project

```bash
$ npm install
# or
$ yarn install
```

Run the project

```bash
$ npm run dev
# or
$ yarn dev
```

## 🔧 Built With

- [Vercel](https://vercel.com/): 自動化網站部屬和即時預覽功能。
- [TypeScript](https://www.typescriptlang.org/)：提供型別檢查功能，能在開發過程中捕捉潛在錯誤，並提供更好的程式碼提示和文件。
- [axios](https://axios-http.com/)：API 的呼叫與管理，並處理請求的回應。
- [react-query](https://tanstack.com/query/latest)：管理從後端 API 取得的資料，能夠進行緩存、更新和失效數據，和請求的狀態。
- [styled-components](https://styled-components.com/)：建立客製化樣式的 CSS-in-JS library library，能夠生成亂數 class 避免樣式衝突、即時生成動態樣式、和移除未用到的樣式等優化等。
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)：製作 skeleton 樣式提高用戶等待時的使用體驗。
- [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths?activeTab=readme)：處理 TypeScript 的絕對路徑引用。


## 🏗️ Structure
```
project/
│   └── index.html HTML 入口檔案
├── public/ 
│       └── ...圖片、icon 等靜態資源
├── src/
│   ├── main.tsx 專案入口、全域樣式檔案引用
│   ├── App.tsx 主元件、layout、queryProvider 設定
│   ├── reset.css 初始化樣式
│   ├── GlobalStyle.css 全域樣式設定
│   ├── api/ 
│   │   └── ...依照 path 分類的 api
│   ├── utils/ 
│   │   └── ...功能函式
│   ├── types/ 
│   │   └── ...Hero, HeroProfile 型別
│   ├── constants/ 
│   │   └── ...queryKey, routerPath 常數
│   ├── routes/ 
│   │   └── ...頁面路徑設定
│   ├── pages/
│   │   ├── HomePage.tsx 首頁
│   │   ├── HeroesPage.tsx 角色列表頁 
│   │   ├── HeroesProfilePage.tsx 數值調整頁
│   │   └── ErrorPage.tsx 404頁
│   └── components/
│       ├── UI/
│       │   └── ...Button, Typography 等基礎元件
│       ├── Layout/
│       │   └── ...Header, container 等佈局元件
│       ├── HeroList/
│       │   └── ...角色列表元件、樣式
│       ├── HeroCard/
│       │   └── ...角色列表項目、樣式
│       ├── AbilityPanel/
│       │   └── ...能力值儀表板、樣式
│       ├── AbilityCounter/
│       │   └── ...能力操作、樣式
│       └── SaveButton.tsx 能力儲存
└──...專案相關設定檔
```


## ❓ Q & A


#### 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解？

1. 商業邏輯或特殊需求
2. 時程壓力留下的技術債，也就是將來可能要回頭調整的部分
3. 棘手的問題或 bug 
 
以上是我會寫註解的情境。我認為一般情況下只要變數與函式命名夠清楚，程式邏輯清楚不要使用太冷僻的寫法，加上 TypeScript 的輔助的話，基本上是不太需要寫註解的，但這取決於工程師的經驗。

而以這份專案來說，我會寫註解的地方是需求的條件限制：
1. 編輯中的能力點數加總不得超過初始加總
2. 能力點數不得為負數
3. 送出的能力值總和必須與拿到的時候相同

#### 在這份專案中你遇到的困難、問題，以及解決的方法：

1. 沒有設計稿：
- 困難：在沒有設計稿的情況下儘管有非常大的發揮空間，但樣式構想還有基礎元件樣式花費不少時間。
- 解決：直接參考既有的網站（Marvel官網）進行修改，有別於一般開發遵循設計稿建立整個樣式主題和規範，礙於時間壓力我先將樣式全部寫好，再將常見的樣式值設定成 `CSS variable` 進行管理。

2. 不熟悉 CSS-in-JS library
- 困難：選用 `styled-components` 的主因是 JD 有提到以外，自己以前有稍微摸索過的經驗。然而實際開發 `styled-components` 要客製化的東西很多，文件我覺得也不是那麼好查閱。
- 解決：先求有再求好，先掌握 basic usage 然後搬以前專案寫過的東西進行調整修改。

3. 沒有內建的 utility class
- 困難：這個問題在將元件組合在一起的 spacing 調整尤為明顯。雖然有內建的 `css` api 可以使用，但這必須額外使用 `babel plugin`，而且在我心中這並不是最好的方法，理想上我還是覺得應該要設定 custom utility system 去處理這件事。
- 解決：儘管這並不理想，直接使用 `style` 寫入樣式。

3. 單元測試：
- 困難：錯估了時程沒有時間寫單元測試。
- 解決：就常見的 idle, pending, success, reject 狀態進行處理，然後手動測試確保沒有問題。

4. 其他零碎遇到的問題：
- 使用 `vercel` 部屬後發現 error 相關的處理會直接變成 `vercel` 的警示畫面而不是自動的畫面，加入 `vercel.json` 進行處理。
- 使用 lazy loading 時遇到 Fast refresh only works when a file only exports components 的錯誤，因此重新拆分調整了 router 的檔案結構。
- 當初執著於切換頁面列表 re-render 的問題浪費了不少時間，我應該及早在群組內發問。

## 📋 Todo
- testing
- style mixin
- error boundary
- request cancellation
- request error handling
