# Bootstrap Learning Note

### 基本介紹
[Bootstrap] 是由 [Twitter] 推出的一套前端框架，是目前最被廣為使用來做 [Responsive Web Design] 的 framework 。[Bootstrap] 包括 HTML 、 CSS 及 JavaScript ，但是以應用目的來說，個人覺得 [Bootstrap] 屬於 CSS framework 而非 JavaScript framework ，它利用了 JavaScript 來更完善其視覺效果，讓動態網頁與 Web 應用的開發變得更容易與快速。

當然，還有很多其他很有名的 CSS framework ，像是 yahoo 的 [Prue.css] 或是 Zurb 的 [Fundation] 。因此，[Bootstrap] 並不是唯一可以做 RWD 的前端框架，在開發的時候只要選擇一套最適合自己的一套即可。

Bootstrap 3 以 mobile first 為主，與之前版本的 bootstrap 不一樣。


#### 如何使用
* 下載與安裝

直接import js與css


### CSS 元件



### Grid 的設計方法
Bootstrap 需要一個 .container 來裝整個 grid system，可以使用兩種不同的 css class:
* .container
* .container-fluid

####設計方法： 
一個頁面主要會由container、row與column組合而成。

其中，column的class分為四種大小:
* .col-xs- : Extra small devices Phones (<768px)
* .col-sm- : Small devices Tablets (≥768px)
* .col-md- : Medium devices Desktops (≥992px)
* .col-lg- : Large devices Desktops (≥1200px)
詳細內容可以參考官方提供的表格: [grid-options]

一般來說在設計的時候，container (.container or .container-fluid) 之中會包含多個 row ，用這些 row 來裝切分為12等分的 column。
 ex:
```html
<div class="container">
    <div class="row">
        <div class=".col-md-6">
        </div>
        <div class=".col-md-6">
        </div>
    </div>
</div>
```





[Bootstrap]: <http://getbootstrap.com/>
[Twitter]: <https://twitter.com/>
[Responsive Web Design]: <https://en.wikipedia.org/wiki/Responsive_web_design>
[Prue.css]: <http://purecss.io/>
[Fundation]: <http://foundation.zurb.com/>
[Start Bootstrap]: <https://startbootstrap.com/>
[wrap bootstrap]: <https://wrapbootstrap.com/>
[BootstrapCDN]: <https://www.bootstrapcdn.com/>
[grid-options]: <http://getbootstrap.com/css/#grid-options>

