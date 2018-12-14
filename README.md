## React Test Project

 ### 檔案架構
<p>
|-- react-test <span style="color: gray;">//專案資料夾</span><br>
　　|-- .gitignore<br>
　　|-- dist //所有生成的檔案<br>
　　|-- node_modules <span style="color: gray;">//node套件包，看以下【編譯react基礎建置】說明進行安裝才會生成</span><br>
　　|-- package.json <span style="color: gray;">//npm的設定檔</span><br>
　　|-- src <span style="color: gray;">//原始未打包檔案</span><br>
　　|-- webpack.config.js <span style="color: gray;">//webpack配置文件</span><br>
　　|-- index.html <span style="color: gray;">// html模板</span> <br>
　　　　|-- index.html<br>
　　　　|-- main.js <span style="color: gray;">//js檔案的引入口</span><br>
　　　　|-- js <span style="color: gray;">//main.js中引入的js檔案資料夾</span><br>
　　　　|-- scss <span style="color: gray;">//scss檔案資料夾</span><br>
</p>

### 基本操作

#### 【查看已打包/未打包的檔案】
1. 所有打包好的檔案都會生成在 dist/ 資料夾下面，之後如果有更多頁面會分不同架構，這邊只有單頁的示範，所以 dist/ 資料夾打開下面的 index.html 和 main.js 就是了，直接點開就可以查看

2.  而未打包的檔案都會放在 src/ 資料夾裡面，index.js 只是引入所有js檔的引入口（之後更詳細的模組化就可以選擇引入的模組），而 src/js/App.js 就是這頁生成頁面的主要檔案，裡面可以看到 React 的原始碼，其中這塊是控制所有資料的區塊，也是我提到後端可以給予我 JSON 格式讓我處理 View 的部分
![](https://i.imgur.com/xG0Je7K.png)

<br>

#### 【編譯react基礎建置】
> 這裡如果沒有要編譯專案不需要執行
1. 安裝node.js->[node.js官網](https://nodejs.org/en/)
2. 如果安裝成功，打開cmd，輸入<span style="color: red;">npm -v</span> 應該會看到版本資訊
![](https://i.imgur.com/dDBXyKO.png)

3. 到達專案位置，輸入 <span style="color: red;">npm install</span>，npm會自行依據資料夾中的 package.json 檔進行套件安裝，最後顯示 add XXX packages in XXXXs 就是安裝完成了
![](https://i.imgur.com/dAK1gSR.png)

4. 之後會在專案的目錄下出現一個新的 node_modules/ 資料夾，這就是專案所需的套件資料夾，基礎建置完成！

<br>

#### 【編譯react】
> 這裡如果沒有要編譯專案不需要執行，編譯前要先進行上面的基礎建置
1. 打開cmd，到達專案位置並輸入<span style="color: red;">npm run build</span>，dist/ 資料夾下的檔案會更新
![](https://i.imgur.com/yWK5PFg.png)

2. 如果要 watch 專案，輸入<span style="color: red;">npm run start</span> 即可

