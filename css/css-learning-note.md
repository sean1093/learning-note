# CSS Learning Note

### 套用CSS的三種方式
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


### box model
決定元素大小的呈現方式，設定值有以下三種: content-box(預設值)、border-box 及 padding-box。


![box-model](https://github.com/sean1093/learning-note/blob/master/img/boxModel.JPG "Box Model")

content-box
Width = width + padding-left + padding-right + border-left + border-right

padding-box
Width = width(包含padding-left + padding-right) + border-left + border-right

border-box
Width = width(包含padding-left + padding-right + border-left + border-right)

### display
每一個元素都有他的display屬性，包含block、inline與inline-block。
* block: 自己獨佔一行，且寬高可以自行設定，default width繼承parent node，default height 由內容決定。 
* inline: 寬高由內容決定，與其他元素共處一行。
* inline-block: 寬可以自行設定，與其他元素共處一行，常用於垂直置中。

### position
分為三種: relative、absolute和fixed


### CSS Selector



