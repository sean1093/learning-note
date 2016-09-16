# Bootstrap Learning Note

### 基本介紹
[Bootstrap] 是由 [Twitter] 推出的一套前端框架，是目前最被廣為使用來做 [Responsive Web Design] 的 framework 。[Bootstrap] 包括 HTML 、 CSS 及 JavaScript ，但是以應用目的來說，個人覺得 [Bootstrap] 屬於 CSS framework 而非 JavaScript framework ，它利用了 JavaScript 來更完善其視覺效果，讓動態網頁與 Web 應用的開發變得更容易與快速。

當然，還有很多其他很有名的 CSS framework ，像是 yahoo 的 [Prue.css] 或是 Zurb 的 [Fundation] 。因此，[Bootstrap] 並不是唯一可以做 RWD 的前端框架，在開發的時候只要選擇一套最適合自己的一套即可。

Bootstrap 3 以 mobile first 為主，與之前版本的 bootstrap 不一樣。


#### 如何使用
* 下載與安裝

直接import js與css
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
```

Install with Bower
```bash
$ bower install bootstrap
```

Install with npm
```bash
$ npm install bootstrap@3
```

P.S. 如果有需要用到Bootstrap的JavaScript外掛，就必須要include JQuery.

* 基本template
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap Template</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
  </body>
</html>
```


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
        <div class=".col-md-6">A-1</div>
        <div class=".col-md-6">B-1</div>
    </div>
    <div class="row">
        <div class=".col-md-4">A-2</div>
        <div class=".col-md-8">B-2</div>
    </div>
</div>
```

在Grid system之中，總共平分為12等分。舉例來說，如果頁面設計在一般螢幕左右兩欄A與B要在手機瀏覽時候變成上下排列，可以利用col-md-6與col-xs-12來達成。
ex:
```html
<div class="container">
    <div class="row">
        <div class=".col-md-6 col-xs-12">A</div>
        <div class=".col-md-6 col-xs-12">B</div>
    </div>
</div>
```

#####Column wrapping
當超過12等分的時候，將會自動換行到下一列，原則就是column的總數是以12為一列。
ex:
```html
<!--此例下的C就會被擠到下一列-->
<div class="container">
    <div class="row">
        <div class=".col-md-6">A</div>
        <div class=".col-md-5">B</div>
        <div class=".col-md-6">C</div>
    </div>
</div>
```

#####Responsive column resets
此外，當你的column高度不一樣的時候，可以使用.clearfix來做平衡調整。
```html
<div class="row">
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>

  <!-- Add the extra clearfix for only the required viewport -->
  <div class="clearfix visible-xs-block"></div>

  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
</div>
```

另外也可以對column坐位移，利用.col-md-offset-*來達成效果。
ex:
```html
<div class="container">
    <div class="row">
        <div class=".col-md-6 .col-md-offset-4">A</div>
        <div class=".col-md-2">B</div>
    </div>
</div>
```


### CSS 元件
Bootstrap還提供了許多CSS元件可以使用，如button, form 等等，詳細內容參考官方文件: [Bootstrap-css]



[Bootstrap]: <http://getbootstrap.com/>
[Twitter]: <https://twitter.com/>
[Responsive Web Design]: <https://en.wikipedia.org/wiki/Responsive_web_design>
[Prue.css]: <http://purecss.io/>
[Fundation]: <http://foundation.zurb.com/>
[Start Bootstrap]: <https://startbootstrap.com/>
[wrap bootstrap]: <https://wrapbootstrap.com/>
[BootstrapCDN]: <https://www.bootstrapcdn.com/>
[grid-options]: <http://getbootstrap.com/css/#grid-options>
[Bootstrap-css]: <http://getbootstrap.com/css/>


