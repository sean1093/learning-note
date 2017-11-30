# CSS Learning Note

## 套用CSS的三種方式

* Inline Style Sheets

直接在Html tag中使用style

```html
<h3 style="color: red">Hello World</h3>
```

* Embedding Style Sheets

在head之間使用

```html
<head>
    <style type="text/css">
        h3 {color: red}; 
    </style>
</head>
```

* External Style Sheets

直接使用link載入外部的CSS檔案

```html
<link rel=stylesheet type="text/css" href="main.css">
```

或是利用import的方法

```html
<style> 
    @import url("../main.css");
</style>
```

其中，要注意如果重複加載 style 優先度為 Inline > Embedding > External

## box model

決定元素大小的呈現方式，設定值有以下三種: content-box(預設值)、border-box 及 padding-box。

![box-model](https://github.com/sean1093/learning-note/blob/master/img/boxModel.JPG "Box Model")

content-box
Width = width + padding-left + padding-right + border-left + border-right

padding-box
Width = width(包含padding-left + padding-right) + border-left + border-right

border-box
Width = width(包含padding-left + padding-right + border-left + border-right)

## display

每一個元素都有他的display屬性，包含 block、inline 與inline-block...等等，CSS3更新增了 flex

### block

自己獨佔一行，且寬高可以自行設定，default width 繼承 parent node，default height 由內容決定。常用的區塊元素如 p, div, header 等等。

### inline

寬高由內容決定，與其他元素共處一行。常用的行內元素如 a, span 等等。

### none

這個屬性可以使得 DOM 元素不會出現在畫面上也不會佔有空間。最常拿來與 visibility: hidden; 比較，visibility: hidden 也不會出現在畫面上但是會保留元素原始空間。


### inline-block

寬可以自行設定，與其他元素共處一行，常用於垂直置中。


## position

有很多種屬性: static、relative、absolute、fixed 等等

### static

static 是一開始的預設值，任何套用 position: static; 的元素會依照瀏覽器預設的配置方式顯示在畫面上。

### relative


### fixed


### absolute


## CSS Selector

常用的幾種selector方式如下：


## 常見操作

### 水平置中

最簡單的水平置中方式可以採用 margin，設定 auto 來使其水平置中。這種方式必須要給予一個寬度來避免撐滿整個畫面。

```css
    #app {
        width: 20%;
        margin: 0 auto;
        background-color: red;
    }
```

比起 width ，使用 max-width 會是更好的做法，當小於最大寬度的時候畫面將會自動縮放，超過最大寬度就自動置中。

```css
    #app {
        max-width: 200px;
        margin: 0 auto;
        background-color: red;
    }
```

### 垂直置中




