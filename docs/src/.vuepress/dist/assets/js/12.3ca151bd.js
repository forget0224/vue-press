(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{284:function(a,t,s){"use strict";s.r(t);var r=s(14),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"本地端異常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地端異常"}},[a._v("#")]),a._v(" 本地端異常")]),a._v(" "),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled.png",alt:"所有start.bat出現圖示的錯誤且一直卡住時。"}})]),a._v(" "),t("p",[a._v("所有start.bat出現圖示的錯誤且一直卡住時。")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("虛擬機沒開兩個都會連不上")]),a._v("\n網址輸入 localhost:9090 確認是否正常連線。"),t("code",[a._v("資料庫")]),a._v("\n網址輸入 localhost:8083 確認是否正常連線。"),t("code",[a._v("管緩存")])])]),a._v(" "),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%201.png",alt:"localhost:9090異常圖示"}})]),a._v(" "),t("p",[a._v("localhost:9090異常圖示")]),a._v(" "),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%202.png",alt:"localhost:8083異常圖示"}})]),a._v(" "),t("p",[a._v("localhost:8083異常圖示")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("9090正常但是8083異常才能執行下列步驟")]),a._v("\n1.關掉start.bat\n2.開CMD輸入指令")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1. > cd c:\\docker-compose\\Env1\n2. > vagrant ssh\n3. > cd /vagrant_data/redis\n4. > sudo docker-compose down\n5. 本機進到 C:\\docker-compose\\Env1\\data\\redis刪除redis_data 資料夾\n6. > sudo docker-compose up -d\n7. > exit\n8. 確認localhost:8083正常連上\n9. > 執行start.bat\n")])])]),t("h3",{attrs:{id:"異常處理報錯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#異常處理報錯"}},[a._v("#")]),a._v(" 異常處理報錯")]),a._v(" "),t("blockquote",[t("p",[a._v("如果異常處理流程第四步顯示以下情況。\n推測是因為少了docker-compose.yml或docker-compose.yaml")])]),a._v(" "),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%203.png",alt:"Untitled"}})]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[a._v("> ls\n")])])]),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%204.png",alt:"圖示中只有redis_data一隻檔案"}})]),a._v(" "),t("p",[a._v("圖示中只有redis_data一隻檔案")]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" vagrant plugin install vagrant"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("vbguest\n")])])]),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%205.png",alt:"Untitled"}})]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" vagrant up\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" vagrant reload\n")])])]),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%206.png",alt:"Untitled"}})]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" vagrant halt\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" vagrant up\n")])])]),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%207.png",alt:"Untitled"}})]),a._v(" "),t("blockquote",[t("p",[a._v("最後輸入vagrant ssh指令進入redis資料夾底下，輸入ls查看資料夾，看docker-compose.yml與start.sh是否出現，然後輸入sudo docker-compose up-d直到出現成功圖示。")])]),a._v(" "),t("div",{staticClass:"language-jsx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" vagrant ssh\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" cd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("vagrant_data"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" ls\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" sudo docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("compose up"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("d\n")])])]),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%208.png",alt:"Untitled"}})]),a._v(" "),t("h3",{attrs:{id:"成功圖示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#成功圖示"}},[a._v("#")]),a._v(" 成功圖示")]),a._v(" "),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%209.png",alt:"Untitled"}})]),a._v(" "),t("h3",{attrs:{id:"_8083正常連上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8083正常連上"}},[a._v("#")]),a._v(" 8083正常連上")]),a._v(" "),t("p",[t("img",{attrs:{src:"%E6%9C%AC%E5%9C%B0%E7%AB%AF%E7%95%B0%E5%B8%B8%2007f34ab6fea141c0b5661c1a1bf5fb8d/Untitled%2010.png",alt:"Untitled"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);