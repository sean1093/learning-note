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

display : inline 的 HTML 元素可以有 margin-left 、 margin-right 、 padding-left 、 padding-right ，但不能有 margin-top 、 margin-bottom 、 padding-top 、 padding-bottom 、 width 、 height 、 background-image 

### none

這個屬性可以使得 DOM 元素不會出現在畫面上也不會佔有空間。最常拿來與 visibility: hidden; 比較，visibility: hidden 也不會出現在畫面上但是會保留元素原始空間。


### inline-block

寬可以自行設定，與其他元素共處一行，常用於垂直置中。

碰到 display : inline-block 元素不會換行，但是又可以設定 padding-top 、 padding-bottom 、 width 、 height 、 background-image


## position

有很多種屬性: static、relative、absolute、fixed 等等

### static

static 是一開始的預設值，任何套用 position: static; 的元素會依照瀏覽器預設的配置方式顯示在畫面上。

### relative

ralative 屬性的元素，會相對地調整其原本該出現的所在位置，並且不會影響到其他元素。

### fixed

元素會相對於瀏覽器視窗來定位，不會受視窗滾動影響

### absolute

absolute 屬性的元素，是定位是在他所處上層容器的相對位置，假如上層容器並沒有可以被定位的元素的話，那麼這個元素的定位就是相對於該網頁所有內容(<body>)最左上角的絕對位置。


## CSS Selector

常用的幾種selector方式如下：

<table>
    <thead>
        <tr>
            <th>Selector</th>
            <th>Example</th>
            <th>Description</th>          
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>.class</td>
            <td>.hello</td>
            <td>選取 all elements with class="hello"</td>
        </tr>
    </tbody>
</table>




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

//TODO


## 偽類 (pseudo class) 和偽元素 (pseudo element)

單冒號 (:) 是用在偽類
雙冒號 (::) 則是用在偽元素

###

> A pseudo-class is used to define a special state of an element.
> 
> For example, it can be used to:
> 
>> Style an element when a user mouses over it
>> Style visited and unvisited links differently
>> Style an element when it gets focus
>
> from w3schools

偽類是用來描述 element 的狀態，自己理解是認為這個狀態並不存在 DOM 裡面，所以被稱作 "偽"。要注意的是每一個 selector 只能使用一個偽元素

例如 

div:hover p ，使用 :hover 偽類到一個 div 上，使得在發生 hover 的時候套用到 div 下所有的 p element，產生 tooltip 的效果

```css
p {
    display: none;
    background-color: yellow;
    padding: 20px;
}

div:hover p {
    display: block;
}
```




