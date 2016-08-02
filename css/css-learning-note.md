# CSS Learning Note

### 套用CSS的三種方式
* Inline Style Sheets

直接在Html tag中使用style
```html
<h3 style="color: red">Hello World</h3>
```
* Embedding Style Sheets

在<head>之間使用
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