# 本地端異常

![所有start.bat出現圖示的錯誤且一直卡住時。](./0.png)

所有start.bat出現圖示的錯誤且一直卡住時。

> **虛擬機沒開兩個都會連不上**
網址輸入 localhost:9090 確認是否正常連線。`資料庫`
網址輸入 localhost:8083 確認是否正常連線。`管緩存`
> 

![localhost:9090異常圖示](./1.png)

localhost:9090異常圖示

![localhost:8083異常圖示](./2.png)

localhost:8083異常圖示

> **9090正常但是8083異常才能執行下列步驟**
1.關掉start.bat
2.開CMD輸入指令
> 

```
1. > cd c:\docker-compose\Env1
2. > vagrant ssh
3. > cd /vagrant_data/redis
4. > sudo docker-compose down
5. 本機進到 C:\docker-compose\Env1\data\redis刪除redis_data 資料夾
6. > sudo docker-compose up -d
7. > exit
8. 確認localhost:8083正常連上
9. > 執行start.bat
```

### 異常處理報錯

> 如果異常處理流程第四步顯示以下情況。
推測是因為少了docker-compose.yml或docker-compose.yaml
> 

![Untitled]( ./3.png)

```html
> ls
```

![圖示中只有redis_data一隻檔案]( ./4.png)

圖示中只有redis_data一隻檔案

```jsx
> vagrant plugin install vagrant-vbguest
```

![Untitled]( ./5.png)

```jsx
> vagrant up
> vagrant reload
```

![Untitled]( ./6.png)

```jsx
> vagrant halt
> vagrant up
```

![Untitled]( ./7.png)

> 最後輸入vagrant ssh指令進入redis資料夾底下，輸入ls查看資料夾，看docker-compose.yml與start.sh是否出現，然後輸入sudo docker-compose up-d直到出現成功圖示。
> 

```jsx
> vagrant ssh
> cd /vagrant_data/redis/
> ls
> sudo docker-compose up-d
```

![Untitled]( ./8.png)

### 成功圖示

![Untitled]( ./9.png)

### 8083正常連上

![Untitled]( ./10.png)