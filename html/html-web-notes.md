# HTML Web Learning Notes

## Cookie & Session

當 client 第一次向 server 發出 request 的時候，server 會記錄這個 user 並且產生一個 Session ID 給 client 記錄到 cookie 當中，之後每次連線送出 request 都會帶上這個 cookie 來做識別。

* Session 是 server 保存的一個資料結構，用來跟蹤使用者的狀態，這個資料可以保存在集群、資料庫、檔中
* Cookie 是 client 保存使用者資訊的一種機制，用來記錄使用者的一些資訊，也是實現Session的一種方式

## Web Storage

> With web storage, web applications can store data locally within the user's browser.
>
> Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
>
> Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
>
> Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.
>
> from w3schools

reference: https://www.w3schools.com/html/html5_webstorage.asp


### Web Storage 與 cookie  

* Web Storage 的概念與 cookie 相似，都是從在於 client 端
* 儲存於 Web Storage & cookie 中的資料，是以 key-value 的形式保存
* Web Storage 有著比 cookie 更大儲存容量 (至少 5 MB)
* 每次發送 request to server 時，cookie 都會跟著 header 一起送出，但是 web storage 不會
* Cookie 的作用是與 server 進行溝通，作為 HTTP 規範的一部分而存在 ，而 Web Storage 僅僅是為了在本地儲存資料


### sessionStorage & localStorage

Web Storage 包含 sessionStorage & localStorage

* window.localStorage - stores data with no expiration date
* window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

reference: https://www.huanlintalk.com/2012/06/html5-web-storage.html


## Server-Side Rendering

// TODO


